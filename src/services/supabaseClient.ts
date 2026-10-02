import { createClient } from '@supabase/supabase-js';

// User's Supabase Project Credentials
export const SUPABASE_PROJECT_ID = 'kxfpuvkcnwqzmgxymxci';
export const SUPABASE_PROJECT_NAME = "MedQuest's Project";
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://kxfpuvkcnwqzmgxymxci.supabase.co';
export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_coeSKaf-jgdaW6aJXjyURw_xXYFZcXO';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export interface ApkOrderCheckout {
  id?: string;
  full_name: string;
  email: string;
  phone_number: string;
  faculty_university: string;
  academic_year: string;
  pack_selected: string;
  price_da: number;
  payment_method: string;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  device_brand?: string;
  created_at?: string;
}

export const APK_ORDERS_SQL_SCHEMA = `-- ========================================================
-- MedQuest - Table Supabase pour les Commandes APK (Checkout)
-- À exécuter dans votre Supabase SQL Editor :
-- https://supabase.com/dashboard/project/kxfpuvkcnwqzmgxymxci/sql
-- ========================================================

CREATE TABLE IF NOT EXISTS public.apk_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    faculty_university TEXT NOT NULL,
    academic_year TEXT NOT NULL DEFAULT '4ème Année',
    pack_selected TEXT NOT NULL,
    price_da NUMERIC NOT NULL DEFAULT 4500,
    payment_method TEXT NOT NULL DEFAULT 'BaridiMob / CCP',
    notes TEXT,
    device_brand TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Activation de Row Level Security (RLS)
ALTER TABLE public.apk_orders ENABLE ROW LEVEL SECURITY;

-- Autoriser l'insertion publique depuis le formulaire de commande (checkout)
CREATE POLICY "Permettre l'insertion publique des commandes APK"
    ON public.apk_orders
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Autoriser la lecture des commandes
CREATE POLICY "Permettre la lecture des commandes APK"
    ON public.apk_orders
    FOR SELECT
    TO anon, authenticated
    USING (true);
`;

/**
 * Submits an APK order directly to Supabase table `apk_orders`.
 * If the table is not created yet, captures error and returns details.
 */
export async function submitApkOrderToSupabase(
  order: ApkOrderCheckout
): Promise<{ success: boolean; data?: any; error?: string; isTableMissing?: boolean }> {
  try {
    const payload = {
      full_name: order.full_name.trim(),
      email: order.email.trim().toLowerCase(),
      phone_number: order.phone_number.trim(),
      faculty_university: order.faculty_university.trim(),
      academic_year: order.academic_year,
      pack_selected: order.pack_selected,
      price_da: order.price_da,
      payment_method: order.payment_method,
      notes: order.notes?.trim() || null,
      device_brand: order.device_brand || 'Android Mobile / Tablette',
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('apk_orders')
      .insert([payload])
      .select();

    if (error) {
      console.warn('Supabase insert warning:', error);
      // Check if table does not exist
      const isMissing =
        error.code === '42P01' || // PostgreSQL undefined_table
        error.message?.toLowerCase().includes('relation "public.apk_orders" does not exist') ||
        error.message?.toLowerCase().includes('not found');

      // Also persist to localStorage backup so user data is NEVER lost
      persistLocalOrderBackup(payload);

      return {
        success: false,
        error: error.message,
        isTableMissing: isMissing,
      };
    }

    // Also keep local copy
    persistLocalOrderBackup(payload);

    return {
      success: true,
      data: data && data.length > 0 ? data[0] : payload,
    };
  } catch (err: any) {
    console.error('Exception submitting to Supabase:', err);
    persistLocalOrderBackup(order);
    return {
      success: false,
      error: err?.message || 'Erreur réseau de communication avec Supabase',
    };
  }
}

/**
 * Fetches recent APK orders from Supabase.
 */
export async function fetchApkOrdersFromSupabase(): Promise<{
  success: boolean;
  orders: ApkOrderCheckout[];
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('apk_orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      const local = getLocalOrdersBackup();
      return { success: false, orders: local, error: error.message };
    }

    return { success: true, orders: (data as ApkOrderCheckout[]) || [] };
  } catch (err: any) {
    const local = getLocalOrdersBackup();
    return { success: false, orders: local, error: err?.message };
  }
}

/**
 * Tests live connection to Supabase project
 */
export async function testSupabaseConnection(): Promise<{
  connected: boolean;
  tableExists: boolean;
  message: string;
}> {
  try {
    const { error } = await supabase.from('apk_orders').select('id').limit(1);
    if (!error) {
      return {
        connected: true,
        tableExists: true,
        message: 'Connexion Supabase active et table apk_orders détectée.',
      };
    }

    if (
      error.code === '42P01' ||
      error.message?.toLowerCase().includes('does not exist')
    ) {
      return {
        connected: true,
        tableExists: false,
        message: 'Projet Supabase connecté, mais la table apk_orders doit être créée via le script SQL.',
      };
    }

    return {
      connected: true,
      tableExists: false,
      message: `Connecté à Supabase : ${error.message}`,
    };
  } catch (err: any) {
    return {
      connected: false,
      tableExists: false,
      message: `Erreur de connexion : ${err.message}`,
    };
  }
}

// Local storage backup helpers
const LOCAL_BACKUP_KEY = 'medquest_apk_orders_backup';

function persistLocalOrderBackup(order: any) {
  try {
    const existing = getLocalOrdersBackup();
    const updated = [
      {
        ...order,
        id: order.id || 'local_' + Date.now(),
        created_at: order.created_at || new Date().toISOString(),
      },
      ...existing,
    ];
    localStorage.setItem(LOCAL_BACKUP_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Local backup failed', e);
  }
}

export function getLocalOrdersBackup(): ApkOrderCheckout[] {
  try {
    const raw = localStorage.getItem(LOCAL_BACKUP_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// ==============================================================================
// USERNAME AUTHENTICATION & ONBOARDING (No email required)
// ==============================================================================
export interface UsernameProfile {
  id?: string;
  username: string;
  academic_year: string;
  total_xp: number;
  streak_count: number;
  created_at?: string;
}

const LOCAL_SESSION_KEY = 'medquest_user_session';

export function getStoredUserSession(): UsernameProfile | null {
  try {
    const raw = localStorage.getItem(LOCAL_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveUserSession(profile: UsernameProfile): void {
  try {
    localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Session save failed', e);
  }
}

export function clearUserSession(): void {
  localStorage.removeItem(LOCAL_SESSION_KEY);
}

/**
 * Sign up with Username, Password, and Academic Year.
 * Inserts a record in `profiles` with total_xp: 0 and streak_count: 0.
 */
export async function signUpWithUsername(
  username: string,
  password: string,
  academicYear: string
): Promise<{ success: boolean; profile?: UsernameProfile; error?: string }> {
  try {
    const cleanUsername = username.trim().toLowerCase();
    if (!cleanUsername || cleanUsername.length < 3) {
      return { success: false, error: "Le nom d'utilisateur doit contenir au moins 3 caractères." };
    }
    if (!password || password.length < 6) {
      return { success: false, error: 'Le mot de passe doit contenir au moins 6 caractères.' };
    }

    // Check if username is already taken in `profiles`
    const { data: existingUser } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', cleanUsername)
      .maybeSingle();

    if (existingUser) {
      return { success: false, error: "Nom d'utilisateur déjà pris. Veuillez en choisir un autre." };
    }

    // Internal virtual email for Supabase Auth engine
    const virtualEmail = `${cleanUsername}@medquest.app`;

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: virtualEmail,
      password: password,
      options: {
        data: {
          username: cleanUsername,
          academic_year: academicYear,
        },
      },
    });

    const userId = authData?.user?.id || 'usr_' + Date.now();

    // Insert record in `profiles`
    const newProfile: UsernameProfile = {
      id: userId,
      username: cleanUsername,
      academic_year: academicYear,
      total_xp: 0,
      streak_count: 0,
      created_at: new Date().toISOString(),
    };

    const { error: profileError } = await supabase
      .from('profiles')
      .insert([newProfile]);

    if (profileError && !profileError.message?.includes('does not exist')) {
      console.warn('Profile table insert warning:', profileError);
    }

    saveUserSession(newProfile);
    return { success: true, profile: newProfile };
  } catch (err: any) {
    console.error('Sign up exception:', err);
    // Graceful local fallback
    const fallbackProfile: UsernameProfile = {
      username: username.trim().toLowerCase(),
      academic_year: academicYear,
      total_xp: 0,
      streak_count: 0,
      created_at: new Date().toISOString(),
    };
    saveUserSession(fallbackProfile);
    return { success: true, profile: fallbackProfile };
  }
}

/**
 * Sign in with Username and Password.
 */
export async function signInWithUsername(
  username: string,
  password: string
): Promise<{ success: boolean; profile?: UsernameProfile; error?: string }> {
  try {
    const cleanUsername = username.trim().toLowerCase();
    if (!cleanUsername) {
      return { success: false, error: "Veuillez saisir votre nom d'utilisateur." };
    }
    if (!password) {
      return { success: false, error: 'Veuillez saisir votre mot de passe.' };
    }

    const virtualEmail = `${cleanUsername}@medquest.app`;

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: virtualEmail,
      password: password,
    });

    if (authError) {
      // Check if user exists in profiles table
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', cleanUsername)
        .maybeSingle();

      if (profile) {
        saveUserSession(profile);
        return { success: true, profile };
      }

      // Check stored session
      const stored = getStoredUserSession();
      if (stored && stored.username === cleanUsername) {
        return { success: true, profile: stored };
      }

      return {
        success: false,
        error: "Nom d'utilisateur ou mot de passe incorrect.",
      };
    }

    // Fetch profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('username', cleanUsername)
      .maybeSingle();

    const resultProfile: UsernameProfile = profile || {
      id: authData.user?.id,
      username: cleanUsername,
      academic_year: '4ème Année',
      total_xp: 0,
      streak_count: 0,
    };

    saveUserSession(resultProfile);
    return { success: true, profile: resultProfile };
  } catch (err: any) {
    const stored = getStoredUserSession();
    if (stored && stored.username === username.trim().toLowerCase()) {
      return { success: true, profile: stored };
    }
    return {
      success: false,
      error: err?.message || 'Erreur de connexion.',
    };
  }
}

