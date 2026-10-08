/**
 * streakNotificationService.ts
 *
 * Dedicated service for:
 * 1. Synchronizing daily streaks across days.
 * 2. Detecting active days, missed/skipped days, streak breaks, and streak freezes.
 * 3. Handling Browser Web Notifications and in-app Notification Center reminders.
 */

export interface StreakDayInfo {
  date: string; // YYYY-MM-DD
  dayLabel: string; // "Lun", "Mar", etc.
  dayNumber: number; // 1..31
  monthLabel: string; // "oct."
  isToday: boolean;
  isFuture: boolean;
  isPast: boolean;
  status: 'active' | 'missed' | 'frozen' | 'future' | 'today_pending';
  questionsCount: number;
  xpEarned: number;
}

export interface InAppNotification {
  id: string;
  type: 'streak_reminder' | 'streak_missed' | 'streak_freeze_used' | 'streak_saved' | 'info';
  title: string;
  message: string;
  timestamp: string; // ISO string
  read: boolean;
  streakCount?: number;
}

const NOTIFICATIONS_STORAGE_PREFIX = 'medquest_notifications_';
const LAST_REMINDER_DATE_KEY = 'medquest_last_reminder_date_';

/**
 * Format local date as YYYY-MM-DD
 */
export function getLocalDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Calculate the difference in calendar days between two YYYY-MM-DD strings.
 */
export function getDaysDifference(dateStr1: string, dateStr2: string): number {
  const d1 = new Date(dateStr1 + 'T00:00:00');
  const d2 = new Date(dateStr2 + 'T00:00:00');
  const diffTime = d2.getTime() - d1.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Request browser notification permission if available
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }
  if (Notification.permission === 'granted') {
    return 'granted';
  }
  if (Notification.permission !== 'denied') {
    try {
      const perm = await Notification.requestPermission();
      return perm;
    } catch {
      return Notification.permission;
    }
  }
  return Notification.permission;
}

/**
 * Check if browser notification permission is granted
 */
export function isNotificationPermissionGranted(): boolean {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  return Notification.permission === 'granted';
}

/**
 * Send a browser desktop notification if permitted
 */
export function sendBrowserNotification(title: string, options?: NotificationOptions): boolean {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        ...options,
      });
      return true;
    } catch (e) {
      console.warn('Browser notification error:', e);
      return false;
    }
  }
  return false;
}

/**
 * Get in-app notifications for a user
 */
export function getUserNotifications(userEmail: string): InAppNotification[] {
  try {
    const raw = localStorage.getItem(`${NOTIFICATIONS_STORAGE_PREFIX}${userEmail.toLowerCase().trim()}`);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Save in-app notifications for a user
 */
export function saveUserNotifications(userEmail: string, list: InAppNotification[]): void {
  try {
    localStorage.setItem(
      `${NOTIFICATIONS_STORAGE_PREFIX}${userEmail.toLowerCase().trim()}`,
      JSON.stringify(list.slice(0, 50)) // keep last 50
    );
  } catch (e) {
    console.error('Failed to save notifications:', e);
  }
}

/**
 * Add a notification to the user's notification box and optionally trigger browser notification
 */
export function addUserNotification(
  userEmail: string,
  notification: Omit<InAppNotification, 'id' | 'timestamp' | 'read'>,
  showSystemNotification: boolean = true
): InAppNotification {
  const existing = getUserNotifications(userEmail);
  const newNotif: InAppNotification = {
    ...notification,
    id: `notif-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toISOString(),
    read: false,
  };

  existing.unshift(newNotif);
  saveUserNotifications(userEmail, existing);

  if (showSystemNotification) {
    sendBrowserNotification(notification.title, {
      body: notification.message,
    });
  }

  return newNotif;
}

/**
 * Marks all notifications as read
 */
export function markAllNotificationsAsRead(userEmail: string): void {
  const list = getUserNotifications(userEmail);
  const updated = list.map((n) => ({ ...n, read: true }));
  saveUserNotifications(userEmail, updated);
}

/**
 * Compute the 7-day rolling window or calendar-week window for streaks
 * Allows user to see past days, missed days (greyed out), frozen days, and active days.
 */
export function computeStreakWindow(
  dailyActivity: Record<string, number> = {},
  streakCount: number = 0,
  daysCount: number = 7
): StreakDayInfo[] {
  const result: StreakDayInfo[] = [];
  const today = new Date();
  const todayStr = getLocalDateString(today);

  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const monthNames = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

  // End at today (or end of week) - Let's do past 6 days + today = 7 days
  for (let i = daysCount - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = getLocalDateString(d);
    const isToday = dateStr === todayStr;
    const isPast = d.getTime() < today.getTime() && !isToday;
    const isFuture = d.getTime() > today.getTime() && !isToday;

    const xpEarned = dailyActivity[dateStr] || 0;
    const questionsCount = Math.round(xpEarned / 10);

    let status: StreakDayInfo['status'] = 'missed';

    if (isFuture) {
      status = 'future';
    } else if (isToday) {
      status = xpEarned > 0 ? 'active' : 'today_pending';
    } else {
      // Past day: if xpEarned > 0, active. If 0, missed (greyed out)
      status = xpEarned > 0 ? 'active' : 'missed';
    }

    result.push({
      date: dateStr,
      dayLabel: dayNames[d.getDay()],
      dayNumber: d.getDate(),
      monthLabel: monthNames[d.getMonth()],
      isToday,
      isFuture,
      isPast,
      status,
      questionsCount,
      xpEarned,
    });
  }

  return result;
}

/**
 * Streak Audit Result
 */
export interface StreakAuditResult {
  updatedStreak: number;
  updatedFreezes: number;
  streakSavedByFreeze: boolean;
  streakBroken: boolean;
  reminderSent: boolean;
  notificationMessage?: string;
}

/**
 * Verifies and synchronizes user streak when opening the app or logging in:
 * - If lastActiveDate was yesterday and today user hasn't trained yet: streak is preserved, reminder can be sent!
 * - If user skipped 1 day:
 *    - If user has streak freeze: freeze is consumed, streak preserved, notification sent!
 *    - If no freeze: streak is reset to 0, missed day recorded, notification sent!
 * - If user skipped > 1 day:
 *    - Streak resets to 0, notification sent.
 */
export function synchronizeStreakOnDayChange(
  userEmail: string,
  lastActiveDate: string,
  currentStreak: number,
  freezesCount: number,
  questionsToday: number
): StreakAuditResult {
  const todayStr = getLocalDateString();
  const result: StreakAuditResult = {
    updatedStreak: currentStreak,
    updatedFreezes: freezesCount,
    streakSavedByFreeze: false,
    streakBroken: false,
    reminderSent: false,
  };

  // If no previous date recorded, set to today and return
  if (!lastActiveDate) {
    return result;
  }

  const diffDays = getDaysDifference(lastActiveDate, todayStr);

  // User opened app on the same day -> no calendar day skipped
  if (diffDays <= 0) {
    return result;
  }

  // 1 day difference: yesterday was the last active date.
  // Today is a new day! Streak is intact, but today user hasn't completed their daily session yet.
  if (diffDays === 1) {
    // Check if we should send a daily reminder notification
    const reminderKey = `${LAST_REMINDER_DATE_KEY}${userEmail.toLowerCase().trim()}`;
    const lastReminder = localStorage.getItem(reminderKey);

    if (lastReminder !== todayStr && currentStreak > 0 && questionsToday === 0) {
      const msg = `Votre série de ${currentStreak} jours est en jeu ! Résolvez au moins 1 QCM aujourd'hui pour garder votre flamme allumée.`;
      addUserNotification(
        userEmail,
        {
          type: 'streak_reminder',
          title: `Rappel de Série : ${currentStreak} jours d'affilée ! 🔥`,
          message: msg,
          streakCount: currentStreak,
        },
        true
      );
      localStorage.setItem(reminderKey, todayStr);
      result.reminderSent = true;
      result.notificationMessage = msg;
    }
    return result;
  }

  // diffDays >= 2: User skipped at least 1 whole day without training!
  if (diffDays >= 2) {
    if (currentStreak > 0) {
      // Can a streak freeze protect the user?
      if (diffDays === 2 && freezesCount > 0) {
        // 1 day skipped: saved by freeze!
        result.updatedFreezes = freezesCount - 1;
        result.streakSavedByFreeze = true;
        const msg = `Vous avez manqué hier, mais votre Gel Anti-Rupture de Série a protégé votre flamme de ${currentStreak} jours ! Plus que ${result.updatedFreezes} gel(s) restant(s).`;
        addUserNotification(
          userEmail,
          {
            type: 'streak_freeze_used',
            title: '❄️ Gel de Série Activé ! Flamme préservée',
            message: msg,
            streakCount: currentStreak,
          },
          true
        );
        result.notificationMessage = msg;
      } else {
        // Streak broken
        result.updatedStreak = 0;
        result.streakBroken = true;
        const msg = `Vous avez sauté un ou plusieurs jours d'entraînement sans gel disponible. Votre flamme est éteinte (grisée). Recommencez dès aujourd'hui pour bâtir une nouvelle série !`;
        addUserNotification(
          userEmail,
          {
            type: 'streak_missed',
            title: '⚠️ Série Interrompue (Jour Manqué)',
            message: msg,
            streakCount: 0,
          },
          true
        );
        result.notificationMessage = msg;
      }
    }
  }

  return result;
}
