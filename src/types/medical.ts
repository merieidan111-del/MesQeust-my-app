export type AcademicYear = '3ème Année' | '4ème Année' | '5ème Année';

export type QuestionType = 'QCM' | 'CasClinique';
export type ResourceType = 'Resume' | 'Astuce';

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
}

export interface Question {
  id: string;
  courseId: string;
  questionNumber: number;
  type: QuestionType;
  questionText: string;
  options: string[];
  correctAnswers: number[]; // 0-indexed array
  explanation: string;
  clinicalPearl?: string;
  module?: string;
  academicYear?: AcademicYear;
  difficulty?: 'Standard' | 'Avancé' | 'Concours Résidanat';
}

export interface CourseResource {
  id: string;
  courseId: string;
  type: ResourceType;
  title: string;
  contentMarkdown: string;
  fileUrl?: string;
  authorOrSource?: string;
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
