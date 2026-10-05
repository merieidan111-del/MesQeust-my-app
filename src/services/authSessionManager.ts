import { AcademicYear, UserProfile } from '../types/medical';

export interface RegisteredAccount {
  id: string;
  fullName: string;
  email: string;
  username: string;
  password: string; // Stored locally for authentication
  academicYear: AcademicYear;
  createdAt: string;
  avatarUrl: string;
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

  return { success: true, account: newAccount };
}

/**
 * Authenticates an existing user and sets active session.
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
 * Signs out current user and removes active session token.
 */
export function logoutAccount(): void {
  setCurrentSessionEmail(null);
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
    avatarUrl: account.avatarUrl,
    questionsSolvedToday: progress.questionsSolvedToday,
    dailyGoal: progress.dailyGoal,
    customExamDate: progress.customExamDate,
    examTitle: progress.examTitle,
    examModule: progress.examModule,
    dailyActivity: progress.dailyActivity || {},
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
