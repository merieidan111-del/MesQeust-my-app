export type AcademicYear = '3ème Année' | '4ème Année' | '5ème Année';

export type QuestionType = 'QCM' | 'CasClinique' | 'Cas Clinique';
export type ResourceType = 'Resume' | 'Astuce' | 'mindmap' | 'astuce' | 'resume' | 'Fiche Synthèse' | 'Fiche';

export interface Module {
  id: string;
  title: string;
  academicYear: AcademicYear;
  icon: string;
  color: string;
  description: string;
  totalQuestions: number;
  coursesCount: number;
  progressPercent: number;
}

export interface Course {
  id: string;
  moduleId: string;
  title: string;
  orderIndex: number;
  qcmCount: number;
  casCliniqueCount: number;
  resumesCount: number;
  astucesCount: number;
  completedPercent?: number;
  subdivision?: string; // e.g. 'Hématologie' | 'Oncologie'
}

export interface Question {
  id: string;
  courseId: string;
  questionNumber: number;
  type: QuestionType;
  questionText?: string;
  content?: string;
  options: string[];
  correctAnswers: number[]; // 0-indexed array
  explanation: string;
  clinicalPearl?: string;
  clinicalCaseNumber?: number;
  module?: string;
  academicYear?: AcademicYear;
  difficulty?: 'Standard' | 'Avancé' | 'Concours Résidanat' | 'facile' | 'moyen' | 'difficile' | 'Difficile';
}

export interface CourseResource {
  id: string;
  courseId: string;
  type: ResourceType;
  title: string;
  contentMarkdown?: string;
  content?: string;
  fileUrl?: string;
  authorOrSource?: string;
  author?: string;
  tags?: string[];
}

export interface UserProgress {
  id: string;
  userId: string;
  questionId: string;
  isCorrect: boolean;
  answeredAt: string;
  selectedOptions: number[];
}

export interface ExamCountdownConfig {
  title: string;
  moduleName: string;
  examDate: string; // ISO string
}

export type StreakDayStatus = 'completed' | 'skipped' | 'frozen' | 'pending' | 'upcoming';

export interface StreakDayInfo {
  dateStr: string;
  dayLabel: string;
  dayNumber: number;
  fullDateLabel: string;
  status: StreakDayStatus;
  questionCount: number;
  xpEarned: number;
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
}

export interface UserProfile {
  userId: string;
  username: string;
  fullName: string;
  email: string;
  academicYear: AcademicYear;
  totalXp: number;
  level: number;
  title: string;
  streakCount: number;
  streakFreezesCount: number;
  lastActiveDate: string;
  avatarUrl: string;
  questionsSolvedToday: number;
  dailyGoal: number;
  customExamDate: string;
  examTitle: string;
  examModule: string;
  dailyActivity?: Record<string, number>;
  streakHistory?: Record<string, StreakDayStatus>;
  notificationsEnabled?: boolean;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  priceXp: number;
  icon: string;
  type: 'streak_freeze' | 'theme' | 'boost' | 'pass';
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  fullName: string;
  academicYear: AcademicYear;
  faculty: string;
  totalXp: number;
  streakCount: number;
  title: string;
  avatarUrl: string;
  isCurrentUser?: boolean;
}
