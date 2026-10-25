import { AcademicYear, UserProfile, StreakDayStatus, LeaderboardPrivacySettings } from '../types/medical';
import { supabase } from './supabaseClient';
import { googleSignIn } from './firebaseAuth';

export interface RegisteredAccount {
  id: string;
  fullName: string;
  email: string;
  username: string;
  password: string; // Stored locally for authentication
  academicYear: AcademicYear;
  createdAt: string;
  avatarUrl: string;
  bio?: string;
  faculty?: string;
  targetSpecialty?: string;
  customAvatarDataUrl?: string;
}

export interface UserProgressData {
  userId: string;
  email: string;
  totalXp: number;
  streakCount: number;
  level: number;
  title: string;
  streakFreezesCount: number;
  completedQuestions: string[]; // Question IDs completed
  correctQuestions: string[]; // Question IDs answered correctly
  completedQuests: string[]; // Array of completed quest / milestone IDs
  questionsSolvedToday: number;
  dailyGoal: number;
  lastActiveDate: string;
  customExamDate: string;
  examTitle: string;
  examModule: string;
  bookmarkedQuestions: string[];
  purchasedItemIds: string[];
  dailyActivity?: Record<string, number>; // date "YYYY-MM-DD" -> XP earned
  streakHistory?: Record<string, StreakDayStatus>;
  notificationsEnabled?: boolean;
  bio?: string;
  faculty?: string;
  targetSpecialty?: string;
  customAvatarDataUrl?: string;
  leaderboardPrivacy?: LeaderboardPrivacySettings;
}

const STORAGE_KEY_CURRENT_SESSION = 'medquest_active_session_email';
const STORAGE_KEY_ACCOUNTS = 'medquest_registered_accounts_v2';
const PROGRESS_KEY_PREFIX = 'user_progress_';

/**
 * Returns clean, pristine 0 default values for any new user.
 * XP: 0
 * Streaks: 0
 * Level: 1
 * Progress: 0%
 * Completed Quests: []
 * Completed Questions: []
 */
export function getFreshDefaultProgress(
  userId: string,
  email: string,
  academicYear: AcademicYear
): UserProgressData {
  const defaultExamModule =
    academicYear === '3ème Année'
      ? 'Sémiologie Médicale'
      : academicYear === '5ème Année'
      ? 'Pédiatrie'
      : 'Cardiologie & Vasculaire';

  return {
    userId,
    email: email.toLowerCase().trim(),
    totalXp: 0,
    streakCount: 0,
    level: 1,
    title: 'Externe Débutant(e)',
    streakFreezesCount: 0,
    completedQuestions: [],
    correctQuestions: [],
    completedQuests: [],
    questionsSolvedToday: 0,
    dailyGoal: 10,
    lastActiveDate: new Date().toISOString().split('T')[0],
    customExamDate: new Date(Date.now() + 30 * 86400000).toISOString(),
    examTitle: `Examen Clinique de ${defaultExamModule}`,
    examModule: defaultExamModule,
    bookmarkedQuestions: [],
    purchasedItemIds: [],
    dailyActivity: {},
    streakHistory: {},
    notificationsEnabled: false,
    leaderboardPrivacy: { mode: 'public_name', nickname: '' },
  };
}

/**
 * Helper to get clean progress storage key isolated by email.
 */
export function getPartitionedProgressKey(email: string): string {
  const sanitized = email.toLowerCase().trim().replace(/[^a-z0-9_@.-]/g, '_');
  return `${PROGRESS_KEY_PREFIX}${sanitized}`;
}

/**
 * Get all registered accounts from local storage.
 */
export function getRegisteredAccounts(): RegisteredAccount[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACCOUNTS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse registered accounts:', err);
    return [];
  }
}

/**
 * Save accounts registry to local storage.
 */
export function saveRegisteredAccounts(accounts: RegisteredAccount[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_ACCOUNTS, JSON.stringify(accounts));
  } catch (err) {
    console.error('Failed to save registered accounts:', err);
  }
}

/**
 * Retrieve current active session account, or null if logged out.
 */
export function getCurrentSessionAccount(): RegisteredAccount | null {
  try {
    const activeEmail = localStorage.getItem(STORAGE_KEY_CURRENT_SESSION);
    if (!activeEmail) return null;
    const accounts = getRegisteredAccounts();
    const found = accounts.find(
      (acc) => acc.email.toLowerCase() === activeEmail.toLowerCase()
    );
    return found || null;
  } catch (err) {
    console.error('Failed to get current session:', err);
    return null;
  }
}

/**
 * Sets the active session email in storage.
 */
export function setCurrentSessionEmail(email: string | null): void {
  try {
    if (email) {
      localStorage.setItem(STORAGE_KEY_CURRENT_SESSION, email.toLowerCase().trim());
    } else {
      localStorage.removeItem(STORAGE_KEY_CURRENT_SESSION);
    }
  } catch (err) {
    console.error('Failed to set current session:', err);
  }
}

/**
 * Loads the isolated progress state for a specific user.
 * Guarantees zero-bleed between User A and User B.
 */
export function getUserProgress(account: RegisteredAccount): UserProgressData {
  const key = getPartitionedProgressKey(account.email);
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      // First time loading this user: initialize zeroed-out stats
      const fresh = getFreshDefaultProgress(account.id, account.email, account.academicYear);
      saveUserProgress(account.email, fresh);
      return fresh;
    }
    const parsed = JSON.parse(raw);
    return {
      ...getFreshDefaultProgress(account.id, account.email, account.academicYear),
      ...parsed,
      userId: account.id,
      email: account.email,
    };
  } catch (err) {
    console.error(`Failed to load progress for ${account.email}:`, err);
    return getFreshDefaultProgress(account.id, account.email, account.academicYear);
  }
}

/**
 * Saves updated isolated progress for a specific user.
 */
export function saveUserProgress(email: string, progress: UserProgressData): void {
  const key = getPartitionedProgressKey(email);
  try {
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (err) {
    console.error(`Failed to save progress for ${email}:`, err);
  }
}

/**
 * Registers a new user account.
 * Initializes all stats strictly at ZERO.
 */
export function registerAccount(params: {
  fullName: string;
  email: string;
  password: string;
  academicYear: AcademicYear;
  username?: string;
}): { success: boolean; error?: string; account?: RegisteredAccount } {
  const cleanEmail = params.email.toLowerCase().trim();
  const cleanName = params.fullName.trim();
  const cleanPass = params.password.trim();

  if (!cleanName) {
    return { success: false, error: 'Veuillez saisir votre nom complet.' };
  }
  if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
    return { success: false, error: 'Veuillez saisir une adresse email valide.' };
  }
  if (!cleanPass || cleanPass.length < 6) {
    return { success: false, error: 'Le mot de passe doit comporter au moins 6 caractères.' };
  }

  const existingAccounts = getRegisteredAccounts();
  const emailExists = existingAccounts.some(
    (acc) => acc.email.toLowerCase() === cleanEmail
  );
  if (emailExists) {
    return {
      success: false,
      error: 'Un compte existe déjà avec cette adresse email. Veuillez vous connecter.',
    };
  }

  const cleanUsername = (
    params.username?.trim().toLowerCase() ||
    cleanEmail.split('@')[0].replace(/[^a-z0-9_]/g, '_')
  );

  const usernameExists = existingAccounts.some(
    (acc) => acc.username.toLowerCase() === cleanUsername
  );
  if (usernameExists) {
    return {
      success: false,
      error: "Ce nom d'utilisateur est déjà utilisé. Choisissez-en un autre.",
    };
  }

  const newAccount: RegisteredAccount = {
    id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    fullName: cleanName,
    email: cleanEmail,
    username: cleanUsername,
    password: cleanPass,
    academicYear: params.academicYear,
    createdAt: new Date().toISOString(),
    avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanUsername)}`,
  };

  // 1. Save new account to accounts registry
  existingAccounts.push(newAccount);
  saveRegisteredAccounts(existingAccounts);

  // 2. Initialize pristine zeroed-out progress state partitioned strictly by user email
  const freshProgress = getFreshDefaultProgress(newAccount.id, newAccount.email, newAccount.academicYear);
  saveUserProgress(newAccount.email, freshProgress);

  // 3. Set active session
  setCurrentSessionEmail(newAccount.email);

  // 4. Background cloud sync to Supabase so user can log in from any device
  syncAccountToCloud(newAccount, freshProgress).catch(() => {});
  registerInSupabaseAuth(newAccount.email, cleanPass, newAccount.fullName, newAccount.academicYear).catch(() => {});

  return { success: true, account: newAccount };
}

/**
 * Helper to sync user account & profile state to Supabase cloud.
 * Ensures the account is saved in the cloud database so the user can log in
 * anytime from any device (phone, tablet, PC).
 */
export async function syncAccountToCloud(
  account: RegisteredAccount,
  progress?: UserProgressData
): Promise<void> {
  try {
    const payload = {
      id: account.id,
      username: account.username,
      full_name: account.fullName,
      academic_year: account.academicYear,
      avatar_url: account.customAvatarDataUrl || account.avatarUrl,
      total_xp: progress?.totalXp ?? 0,
      streak_count: progress?.streakCount ?? 1,
      updated_at: new Date().toISOString(),
    };

    // Try upserting to Supabase public.profiles
    await supabase.from('profiles').upsert(payload, { onConflict: 'id' });
  } catch (err) {
    // Non-blocking: local isolation and offline state remain intact
    console.warn('Supabase cloud sync notification:', err);
  }
}

/**
 * Registers user in Supabase auth.users for cross-device authentication.
 */
async function registerInSupabaseAuth(
  email: string,
  pass: string,
  fullName: string,
  year: AcademicYear
): Promise<void> {
  try {
    await supabase.auth.signUp({
      email,
      password: pass,
      options: {
        data: {
          full_name: fullName,
          academic_year: year,
        },
      },
    });
  } catch (err) {
    console.warn('Supabase auth.signUp note:', err);
  }
}

/**
 * "Continue with Google" Authentication flow.
 * Authenticates the user with their Google Account, persists their credentials in the cloud,
 * and enables instantaneous login from any device without needing to remember a separate password.
 */
export async function continueWithGoogle(
  selectedYear: AcademicYear = '4ème Année'
): Promise<{ success: boolean; error?: string; account?: RegisteredAccount }> {
  try {
    const googleRes = await googleSignIn();
    if (!googleRes || !googleRes.user) {
      return {
        success: false,
        error: 'Connexion Google annulée ou fermée avant validation.',
      };
    }

    const { user } = googleRes;
    const userEmail = (user.email || '').toLowerCase().trim();
    if (!userEmail) {
      return {
        success: false,
        error: 'Adresse email Google introuvable.',
      };
    }

    const accounts = getRegisteredAccounts();
    const existing = accounts.find((a) => a.email.toLowerCase() === userEmail);

    if (existing) {
      // User has logged in before on this or another device
      if (user.photoURL && !existing.customAvatarDataUrl) {
        existing.avatarUrl = user.photoURL;
      }
      if (user.displayName && !existing.fullName) {
        existing.fullName = user.displayName;
      }
      saveRegisteredAccounts(accounts);
      setCurrentSessionEmail(existing.email);

      // Cloud sync
      const progress = getUserProgress(existing);
      syncAccountToCloud(existing, progress).catch(() => {});

      return { success: true, account: existing };
    }

    // New user signing in with Google
    const baseName = user.displayName || userEmail.split('@')[0] || 'Externe';
    const cleanUsername = (
      userEmail.split('@')[0].replace(/[^a-z0-9_]/g, '_') || 'externe'
    ).slice(0, 24);

    const newGoogleAccount: RegisteredAccount = {
      id: user.uid || `g_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      fullName: baseName,
      email: userEmail,
      username: cleanUsername,
      password: 'GOOGLE_OAUTH_ACCOUNT',
      academicYear: selectedYear,
      createdAt: new Date().toISOString(),
      avatarUrl:
        user.photoURL ||
        `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanUsername)}`,
    };

    // Save to accounts
    accounts.push(newGoogleAccount);
    saveRegisteredAccounts(accounts);

    // Initialize clean progress
    const freshProgress = getFreshDefaultProgress(
      newGoogleAccount.id,
      newGoogleAccount.email,
      newGoogleAccount.academicYear
    );
    saveUserProgress(newGoogleAccount.email, freshProgress);

    // Set active session
    setCurrentSessionEmail(newGoogleAccount.email);

    // Sync to Supabase cloud database for cross-device persistence
    syncAccountToCloud(newGoogleAccount, freshProgress).catch(() => {});

    return { success: true, account: newGoogleAccount };
  } catch (err: any) {
    console.error('Error during continueWithGoogle:', err);
    return {
      success: false,
      error: err?.message || 'Erreur lors de la connexion Google.',
    };
  }
}

/**
 * Authenticates an existing user and sets active session.
 * Checks local storage first for instant response.
 */
export function loginAccount(
  identifier: string,
  password: string
): { success: boolean; error?: string; account?: RegisteredAccount } {
  const cleanId = identifier.toLowerCase().trim();
  const cleanPass = password.trim();

  if (!cleanId) {
    return { success: false, error: 'Veuillez saisir votre email ou identifiant.' };
  }
  if (!cleanPass) {
    return { success: false, error: 'Veuillez saisir votre mot de passe.' };
  }

  const accounts = getRegisteredAccounts();
  const matched = accounts.find(
    (acc) =>
      acc.email.toLowerCase() === cleanId || acc.username.toLowerCase() === cleanId
  );

  if (!matched) {
    return {
      success: false,
      error: 'Aucun compte trouvé avec cet identifiant ou email.',
    };
  }

  if (matched.password !== cleanPass) {
    return {
      success: false,
      error: 'Mot de passe incorrect. Veuillez réessayer.',
    };
  }

  // Set active session
  setCurrentSessionEmail(matched.email);

  return { success: true, account: matched };
}

/**
 * Cross-device login: Checks local account first; if not found locally (e.g. user is on a new device,
 * new browser, phone, or tablet), queries Supabase Cloud Auth & profiles to restore their account seamlessly.
 */
export async function loginAccountAsync(
  identifier: string,
  password: string
): Promise<{ success: boolean; error?: string; account?: RegisteredAccount }> {
  const cleanId = identifier.toLowerCase().trim();
  const cleanPass = password.trim();

  if (!cleanId) {
    return { success: false, error: 'Veuillez saisir votre email ou identifiant.' };
  }
  if (!cleanPass) {
    return { success: false, error: 'Veuillez saisir votre mot de passe.' };
  }

  // 1. DIRECT SUPABASE AUTHENTICATION FIRST (Cross-device real backend)
  try {
    const isEmail = cleanId.includes('@');
    let emailToAuth = cleanId;

    if (!isEmail) {
      // Find email from profiles by username
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', cleanId)
        .maybeSingle();

      if (profileData && profileData.email) {
        emailToAuth = profileData.email;
      } else {
        emailToAuth = `${cleanId}@medquest.app`;
      }
    }

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: emailToAuth,
      password: cleanPass,
    });

    if (authData?.user) {
      const u = authData.user;
      const userMeta = u.user_metadata || {};
      const cloudEmail = (u.email || cleanId).toLowerCase();

      // Retrieve full profile from Supabase
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', u.id)
        .maybeSingle();

      const restoredAccount: RegisteredAccount = {
        id: u.id,
        fullName: profile?.full_name || userMeta.full_name || 'Externe en Médecine',
        email: cloudEmail,
        username: profile?.username || userMeta.username || cloudEmail.split('@')[0],
        password: cleanPass,
        academicYear: (profile?.academic_year as AcademicYear) || userMeta.academic_year || '4ème Année',
        createdAt: u.created_at || new Date().toISOString(),
        avatarUrl:
          profile?.avatar_url ||
          `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cloudEmail)}`,
      };

      // Save into this device's storage
      const accounts = getRegisteredAccounts();
      const existingIdx = accounts.findIndex((a) => a.email.toLowerCase() === cloudEmail);
      if (existingIdx >= 0) {
        accounts[existingIdx] = restoredAccount;
      } else {
        accounts.push(restoredAccount);
      }
      saveRegisteredAccounts(accounts);

      // Restore progress
      const progress = getFreshDefaultProgress(restoredAccount.id, restoredAccount.email, restoredAccount.academicYear);
      if (profile?.total_xp) progress.totalXp = profile.total_xp;
      if (profile?.streak_count) progress.streakCount = profile.streak_count;
      saveUserProgress(restoredAccount.email, progress);

      setCurrentSessionEmail(restoredAccount.email);
      return { success: true, account: restoredAccount };
    }

    if (authError) {
      const msg = authError.message.toLowerCase();
      if (msg.includes('invalid login credentials') || msg.includes('invalid_grant')) {
        return {
          success: false,
          error: 'Email ou mot de passe incorrect. Veuillez vérifier vos identifiants.',
        };
      }
      if (msg.includes('email not confirmed')) {
        return {
          success: false,
          error: 'Veuillez confirmer votre adresse email avant de vous connecter.',
        };
      }
    }
  } catch (err: any) {
    console.warn('Remote Supabase auth attempt note:', err);
  }

  // 2. Local fallback only if network/cloud was unreachable and account exists locally
  const accounts = getRegisteredAccounts();
  const matched = accounts.find(
    (acc) =>
      acc.email.toLowerCase() === cleanId || acc.username.toLowerCase() === cleanId
  );

  if (matched) {
    if (matched.password === cleanPass) {
      setCurrentSessionEmail(matched.email);
      return { success: true, account: matched };
    }
    return {
      success: false,
      error: 'Mot de passe incorrect. Veuillez réessayer.',
    };
  }

  return {
    success: false,
    error: 'Email ou mot de passe incorrect.',
  };
}

/**
 * Signs out current user and removes active session token.
 */
export function logoutAccount(): void {
  setCurrentSessionEmail(null);
}

export function updateRegisteredAccount(
  email: string,
  updates: Partial<RegisteredAccount>
): RegisteredAccount | null {
  const accounts = getRegisteredAccounts();
  const index = accounts.findIndex((a) => a.email.toLowerCase() === email.toLowerCase());
  if (index === -1) return null;
  accounts[index] = { ...accounts[index], ...updates };
  saveRegisteredAccounts(accounts);
  return accounts[index];
}

/**
 * Converts account and progress into the UserProfile interface used across UI.
 */
export function buildUserProfile(
  account: RegisteredAccount,
  progress: UserProgressData
): UserProfile {
  return {
    userId: account.id,
    username: account.username,
    fullName: account.fullName,
    email: account.email,
    academicYear: account.academicYear,
    totalXp: progress.totalXp,
    level: progress.level,
    title: progress.title,
    streakCount: progress.streakCount,
    streakFreezesCount: progress.streakFreezesCount,
    lastActiveDate: progress.lastActiveDate,
    avatarUrl: account.customAvatarDataUrl || account.avatarUrl,
    questionsSolvedToday: progress.questionsSolvedToday,
    dailyGoal: progress.dailyGoal,
    customExamDate: progress.customExamDate,
    examTitle: progress.examTitle,
    examModule: progress.examModule,
    dailyActivity: progress.dailyActivity || {},
    streakHistory: progress.streakHistory || {},
    notificationsEnabled: progress.notificationsEnabled || false,
    bio: account.bio || progress.bio || 'Externe passionné(e) par la clinique médicale.',
    faculty: account.faculty || progress.faculty || "Faculté de Médecine d'Alger",
    targetSpecialty: account.targetSpecialty || progress.targetSpecialty || 'Cardiologie & Vasculaire',
    customAvatarDataUrl: account.customAvatarDataUrl || progress.customAvatarDataUrl,
    leaderboardPrivacy: progress.leaderboardPrivacy || { mode: 'public_name', nickname: '' },
  };
}

/**
 * Helper to purge obsolete global mock data in localStorage from previous builds.
 */
export function purgeObsoleteMockData(): void {
  try {
    const keysToRemove = [
      'user_progress',
      'medquest_user_progress',
      'medquest_dummy_data',
      'medquest_session',
      'medquest_user_session',
    ];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch (err) {
    console.error('Error purging old mock data:', err);
  }
}
