import { UserProfile, StreakDayInfo, StreakDayStatus } from '../types/medical';
import { UserProgressData } from './authSessionManager';

/**
 * Returns YYYY-MM-DD in local time zone.
 */
export function getLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Computes difference in calendar days between two YYYY-MM-DD strings.
 */
export function getDaysDifference(olderDateStr: string, newerDateStr: string): number {
  const d1 = new Date(olderDateStr + 'T00:00:00');
  const d2 = new Date(newerDateStr + 'T00:00:00');
  const diffTime = d2.getTime() - d1.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

const FRENCH_DAYS_SHORT = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const FRENCH_DAYS_FULL = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const FRENCH_MONTHS_SHORT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

/**
 * Returns rolling past 7 days (or any count) ending on today, with real statuses.
 */
export function getRollingStreakDays(
  userProfile: UserProfile,
  daysCount: number = 7,
  baseDate: Date = new Date()
): StreakDayInfo[] {
  const todayStr = getLocalDateString(baseDate);
  const result: StreakDayInfo[] = [];

  for (let i = daysCount - 1; i >= 0; i--) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - i);
    const dateStr = getLocalDateString(d);

    const isToday = dateStr === todayStr;
    const isPast = dateStr < todayStr;
    const isFuture = dateStr > todayStr;

    const dayOfWeek = d.getDay();
    const dayLabel = FRENCH_DAYS_SHORT[dayOfWeek];
    const dayNumber = d.getDate();
    const monthLabel = FRENCH_MONTHS_SHORT[d.getMonth()];
    const fullDateLabel = `${FRENCH_DAYS_FULL[dayOfWeek]} ${dayNumber} ${monthLabel}`;

    const questionCount = userProfile.dailyActivity?.[dateStr] || 0;
    const recordedStatus = userProfile.streakHistory?.[dateStr];

    let status: StreakDayStatus;
    if (isToday) {
      if (
        recordedStatus === 'completed' ||
        (userProfile.questionsSolvedToday >= (userProfile.dailyGoal || 10) && userProfile.dailyGoal > 0) ||
        userProfile.questionsSolvedToday >= 1
      ) {
        status = 'completed';
      } else {
        status = 'pending';
      }
    } else if (isPast) {
      if (recordedStatus === 'completed' || questionCount > 0) {
        status = 'completed';
      } else if (recordedStatus === 'frozen') {
        status = 'frozen';
      } else {
        // Skipped day -> GREY!
        status = 'skipped';
      }
    } else {
      status = 'upcoming';
    }

    result.push({
      dateStr,
      dayLabel: isToday ? 'Auj' : dayLabel,
      dayNumber,
      fullDateLabel,
      status,
      questionCount: isToday ? userProfile.questionsSolvedToday : questionCount,
      xpEarned: questionCount * 15,
      isToday,
      isPast,
      isFuture,
    });
  }

  return result;
}

/**
 * Evaluates streak on session start / app load.
 * Checks if days were skipped between lastActiveDate and today.
 * If user skipped a day without streak freeze, resets streak and marks days as 'skipped' (grey).
 * If freeze is available, consumes 1 freeze to protect streak.
 */
export function evaluateStreakOnSessionLoad(
  progress: UserProgressData,
  today: Date = new Date()
): {
  updatedProgress: UserProgressData;
  daysSkipped: number;
  usedFreeze: boolean;
  brokeStreak: boolean;
  message?: string;
} {
  const todayStr = getLocalDateString(today);
  const lastActive = progress.lastActiveDate || todayStr;

  const daysGap = getDaysDifference(lastActive, todayStr);

  const updated: UserProgressData = {
    ...progress,
    streakHistory: { ...(progress.streakHistory || {}) },
    dailyActivity: { ...(progress.dailyActivity || {}) },
  };

  // If already opened today
  if (daysGap === 0) {
    // Sync today's solved count from dailyActivity if available
    updated.questionsSolvedToday = updated.dailyActivity[todayStr] || updated.questionsSolvedToday || 0;
    return { updatedProgress: updated, daysSkipped: 0, usedFreeze: false, brokeStreak: false };
  }

  // It's a new day! Reset today's counter
  updated.questionsSolvedToday = updated.dailyActivity[todayStr] || 0;
  updated.lastActiveDate = todayStr;

  // If opened the next day (gap == 1):
  if (daysGap === 1) {
    // Yesterday was active if completed or had questions
    const yesterdayStatus = updated.streakHistory[lastActive];
    if (!yesterdayStatus && (updated.dailyActivity[lastActive] || 0) === 0) {
      // Yesterday had no activity
      if (updated.streakFreezesCount > 0) {
        updated.streakFreezesCount -= 1;
        updated.streakHistory[lastActive] = 'frozen';
        return {
          updatedProgress: updated,
          daysSkipped: 1,
          usedFreeze: true,
          brokeStreak: false,
          message: '❄️ Votre série a été sauvée par un Gel de Série pour la journée d\'hier !',
        };
      } else {
        updated.streakHistory[lastActive] = 'skipped';
        const prevStreak = updated.streakCount;
        updated.streakCount = 0;
        return {
          updatedProgress: updated,
          daysSkipped: 1,
          usedFreeze: false,
          brokeStreak: prevStreak > 0,
          message: prevStreak > 0
            ? `⚠️ Journée d'hier manquée : votre série de ${prevStreak} jours a été grisée et réinitialisée. Entraînez-vous aujourd'hui pour la relancer !`
            : undefined,
        };
      }
    }
    return { updatedProgress: updated, daysSkipped: 0, usedFreeze: false, brokeStreak: false };
  }

  // Gap >= 2 days (one or more days completely skipped)
  let usedFreeze = false;
  let brokeStreak = false;
  let daysSkippedCount = 0;

  for (let i = 1; i < daysGap; i++) {
    const skippedDate = new Date(today);
    skippedDate.setDate(skippedDate.getDate() - (daysGap - i));
    const skippedDateStr = getLocalDateString(skippedDate);

    if (updated.streakHistory[skippedDateStr] !== 'completed') {
      daysSkippedCount++;
      if (updated.streakFreezesCount > 0) {
        updated.streakFreezesCount -= 1;
        updated.streakHistory[skippedDateStr] = 'frozen';
        usedFreeze = true;
      } else {
        updated.streakHistory[skippedDateStr] = 'skipped';
        brokeStreak = true;
      }
    }
  }

  if (brokeStreak) {
    updated.streakCount = 0;
  }

  const message = brokeStreak
    ? `⚠️ ${daysSkippedCount} jour(s) manqué(s) : vos journées ont été grisées. Entraînez-vous aujourd'hui pour relancer une nouvelle série !`
    : usedFreeze
    ? `❄️ Gel de Série utilisé pour protéger votre série pendant vos jours d'absence !`
    : undefined;

  return {
    updatedProgress: updated,
    daysSkipped: daysSkippedCount,
    usedFreeze,
    brokeStreak,
    message,
  };
}

/**
 * Synchronizes progress and increments streak when a question is completed.
 */
export function syncStreakOnQuestionCompleted(
  progress: UserProgressData,
  isCorrect: boolean,
  today: Date = new Date()
): {
  updatedProgress: UserProgressData;
  streakIncremented: boolean;
  milestoneReached?: number;
} {
  const todayStr = getLocalDateString(today);
  const updatedHistory = { ...(progress.streakHistory || {}) };
  const updatedActivity = { ...(progress.dailyActivity || {}) };

  const currentTodayQuestions = (progress.questionsSolvedToday || 0) + 1;
  updatedActivity[todayStr] = (updatedActivity[todayStr] || 0) + 1;

  const wasCompletedToday = updatedHistory[todayStr] === 'completed';
  let streakIncremented = false;
  let newStreak = progress.streakCount;

  // Mark today completed once the user starts practicing today (at least 1 question solved)
  if (!wasCompletedToday) {
    updatedHistory[todayStr] = 'completed';
    // Calculate new streak: if previously 0, now 1; else increment
    newStreak = progress.streakCount <= 0 ? 1 : progress.streakCount + 1;
    streakIncremented = true;
  }

  const milestones = [3, 7, 14, 21, 30, 50, 100];
  const milestoneReached = streakIncremented && milestones.includes(newStreak) ? newStreak : undefined;

  const updatedProgress: UserProgressData = {
    ...progress,
    lastActiveDate: todayStr,
    questionsSolvedToday: currentTodayQuestions,
    streakCount: newStreak,
    dailyActivity: updatedActivity,
    streakHistory: updatedHistory,
  };

  return {
    updatedProgress,
    streakIncremented,
    milestoneReached,
  };
}

/**
 * Requests browser notification permission.
 */
export async function requestBrowserNotificationPermission(): Promise<NotificationPermission> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }
  try {
    const permission = await Notification.requestPermission();
    return permission;
  } catch (err) {
    console.error('Error requesting notification permission:', err);
    return 'denied';
  }
}

/**
 * Sends a native browser desktop notification if permission granted.
 */
export function sendDesktopNotification(
  title: string,
  options?: NotificationOptions
): boolean {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return false;
  }
  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        icon: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=128&auto=format&fit=crop&q=80',
        badge: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=128&auto=format&fit=crop&q=80',
        ...options,
      });
      return true;
    } catch (err) {
      console.warn('Native notification failed:', err);
      return false;
    }
  }
  return false;
}

/**
 * Simulates a skipped day (moves dates back by 1 day) for instant UI demo and verification.
 */
export function simulateSkippedDay(progress: UserProgressData): UserProgressData {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = getLocalDateString(yesterday);

  const updatedHistory = { ...(progress.streakHistory || {}) };
  // Mark yesterday as skipped (GREY)
  updatedHistory[yesterdayStr] = 'skipped';

  const updatedActivity = { ...(progress.dailyActivity || {}) };
  delete updatedActivity[yesterdayStr];

  return {
    ...progress,
    streakCount: 0,
    questionsSolvedToday: 0,
    lastActiveDate: yesterdayStr,
    streakHistory: updatedHistory,
    dailyActivity: updatedActivity,
  };
}
