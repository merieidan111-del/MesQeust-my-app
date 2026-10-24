import { Module, Course, Question, AcademicYear, UserProfile } from '../types/medical';

export interface ModuleQuestionActivity {
  id: string;
  questionNumber: number;
  moduleId: string;
  moduleTitle: string;
  courseId: string;
  courseTitle: string;
  level: AcademicYear;
  type?: string;
  timestamp: number;
  isSolved: boolean;
}

export interface ModuleResumeTarget {
  module: Module;
  course: Course;
  question: Question;
  questionIndex: number;
  questionNumber: number;
  reason: 'stopped_in_lesson' | 'next_in_lesson' | 'next_lesson' | 'first_lesson';
  statusLabel: string;
}

const GLOBAL_LAST_ACTIVITY_KEY = 'syndromed_last_solved_qcm';
const MODULE_ACTIVITY_PREFIX = 'syndromed_mod_activity_';
const COMPLETED_QUESTIONS_PREFIX = 'syndromed_completed_q_';

/**
 * Normalizes and matches any countdown module string to its official Module object
 */
export function getModuleForExamCountdown(
  examModuleName: string | undefined,
  modules: Module[]
): Module {
  if (!examModuleName || !examModuleName.trim()) {
    return modules[0];
  }

  const query = examModuleName.toLowerCase().trim();

  // 1. Direct title or ID exact match
  const exact = modules.find(
    (m) => m.title.toLowerCase() === query || m.id.toLowerCase() === query
  );
  if (exact) return exact;

  // 2. Keyword matching for common medical specialties
  if (query.includes('gastro') || query.includes('hépato') || query.includes('hepato')) {
    const found = modules.find((m) => m.id === 'mod-gastro' || m.title.toLowerCase().includes('gastro'));
    if (found) return found;
  }
  if (query.includes('cardio') || query.includes('vasculaire') || query.includes('coeur')) {
    const found = modules.find((m) => m.id === 'mod-cardio' || m.title.toLowerCase().includes('cardio'));
    if (found) return found;
  }
  if (query.includes('pneumo') || query.includes('poumon') || query.includes('respiratoire')) {
    const found = modules.find((m) => m.id === 'mod-pneumo' || m.title.toLowerCase().includes('pneumo'));
    if (found) return found;
  }
  if (query.includes('neuro')) {
    const found = modules.find((m) => m.id === 'mod-neuro' || m.title.toLowerCase().includes('neuro'));
    if (found) return found;
  }
  if (query.includes('hemato') || query.includes('onco') || query.includes('sang')) {
    const found = modules.find((m) => m.id === 'mod-hemato' || m.title.toLowerCase().includes('hemato'));
    if (found) return found;
  }
  if (query.includes('infectio') || query.includes('bacté') || query.includes('virus')) {
    const found = modules.find((m) => m.id === 'mod-infectio' || m.title.toLowerCase().includes('infectio'));
    if (found) return found;
  }
  if (query.includes('semio') || query.includes('propédeutique')) {
    const found = modules.find((m) => m.id === 'mod-semio3' || m.title.toLowerCase().includes('semio'));
    if (found) return found;
  }
  if (query.includes('pharma')) {
    const found = modules.find((m) => m.id === 'mod-pharma3' || m.title.toLowerCase().includes('pharma'));
    if (found) return found;
  }
  if (query.includes('pediatrie') || query.includes('pédiatrie')) {
    const found = modules.find((m) => m.id === 'mod-5-ped' || m.title.toLowerCase().includes('ped'));
    if (found) return found;
  }
  if (query.includes('gyneco') || query.includes('gynécologie') || query.includes('obstétrique')) {
    const found = modules.find((m) => m.id === 'mod-5-gyn' || m.title.toLowerCase().includes('gyn'));
    if (found) return found;
  }
  if (query.includes('otr') || query.includes('ortho') || query.includes('rhumato')) {
    const found = modules.find((m) => m.id === 'mod-5-otr' || m.title.toLowerCase().includes('otr'));
    if (found) return found;
  }

  // 3. Fallback partial inclusion
  const partial = modules.find(
    (m) => m.title.toLowerCase().includes(query) || query.includes(m.title.toLowerCase())
  );
  if (partial) return partial;

  return modules[0];
}

/**
 * Saves activity record when a user stops at or solves a QCM
 */
export function saveModuleQuestionActivity(activity: ModuleQuestionActivity): void {
  try {
    // 1. Save global last activity
    localStorage.setItem(GLOBAL_LAST_ACTIVITY_KEY, JSON.stringify(activity));

    // 2. Save module-specific activity
    if (activity.moduleId) {
      localStorage.setItem(`${MODULE_ACTIVITY_PREFIX}${activity.moduleId}`, JSON.stringify(activity));
    }
  } catch (err) {
    console.error('Failed to save module question activity:', err);
  }
}

/**
 * Records that a specific question ID was completed by the user
 */
export function markQuestionCompletedInModule(
  moduleId: string,
  questionId: string,
  userEmail?: string
): void {
  try {
    const key = `${COMPLETED_QUESTIONS_PREFIX}${userEmail ? `${userEmail}_` : ''}${moduleId}`;
    const raw = localStorage.getItem(key);
    const ids: string[] = raw ? JSON.parse(raw) : [];
    if (!ids.includes(questionId)) {
      ids.push(questionId);
      localStorage.setItem(key, JSON.stringify(ids));
    }
  } catch {
    // ignore
  }
}

/**
 * Retrieves the precise resume target for the current study module:
 * - continues from the last stopped QCM in the active lesson,
 * - or continues to the first QCM of the next lesson if the previous lesson was finished,
 * - or defaults to QCM 1 of Course 1 of the module if just starting.
 */
export function getModuleResumeTarget(
  targetModule: Module,
  allCourses: Course[],
  allQuestions: Question[]
): ModuleResumeTarget | null {
  const moduleCourses = allCourses
    .filter((c) => c.moduleId === targetModule.id)
    .sort((a, b) => a.orderIndex - b.orderIndex);

  if (moduleCourses.length === 0) {
    return null;
  }

  // Look for module-specific saved activity first, then global
  let savedActivity: ModuleQuestionActivity | null = null;
  try {
    const modRaw = localStorage.getItem(`${MODULE_ACTIVITY_PREFIX}${targetModule.id}`);
    if (modRaw) {
      savedActivity = JSON.parse(modRaw);
    } else {
      const globalRaw = localStorage.getItem(GLOBAL_LAST_ACTIVITY_KEY);
      if (globalRaw) {
        const parsed: ModuleQuestionActivity = JSON.parse(globalRaw);
        if (
          parsed.moduleId === targetModule.id ||
          parsed.moduleTitle?.toLowerCase().includes(targetModule.title.toLowerCase()) ||
          targetModule.title.toLowerCase().includes(parsed.moduleTitle?.toLowerCase() || '')
        ) {
          savedActivity = parsed;
        }
      }
    }
  } catch {
    savedActivity = null;
  }

  // CASE 1: No previous activity for this module -> Start at Course 1, Question 1
  if (!savedActivity) {
    const firstCourse = moduleCourses[0];
    const courseQuestions = allQuestions.filter((q) => q.courseId === firstCourse.id);
    const firstQ = courseQuestions[0] || allQuestions.find((q) => q.module === targetModule.title) || {
      id: `q-fallback-${targetModule.id}-1`,
      courseId: firstCourse.id,
      questionNumber: 1,
      type: 'QCM' as const,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswers: [0],
      explanation: 'Question inaugurale du module.',
    };

    return {
      module: targetModule,
      course: firstCourse,
      question: firstQ,
      questionIndex: 0,
      questionNumber: firstQ.questionNumber || 1,
      reason: 'first_lesson',
      statusLabel: `Démarrer le Cours 1 : ${firstCourse.title}`,
    };
  }

  // CASE 2: We have saved activity for this module
  const currentCourse =
    moduleCourses.find((c) => c.id === savedActivity!.courseId) ||
    moduleCourses.find((c) => c.title.toLowerCase() === savedActivity!.courseTitle?.toLowerCase()) ||
    moduleCourses[0];

  const currentCourseQuestions = allQuestions.filter((q) => q.courseId === currentCourse.id);

  // If question list is available for this course:
  if (currentCourseQuestions.length > 0) {
    const stoppedQIdx = currentCourseQuestions.findIndex(
      (q) => q.id === savedActivity!.id || q.questionNumber === savedActivity!.questionNumber
    );

    // If the question was solved/validated:
    if (savedActivity.isSolved) {
      // Check if there is a next question in this same course:
      if (stoppedQIdx !== -1 && stoppedQIdx < currentCourseQuestions.length - 1) {
        const nextQ = currentCourseQuestions[stoppedQIdx + 1];
        return {
          module: targetModule,
          course: currentCourse,
          question: nextQ,
          questionIndex: stoppedQIdx + 1,
          questionNumber: nextQ.questionNumber || stoppedQIdx + 2,
          reason: 'next_in_lesson',
          statusLabel: `Continuer ${currentCourse.title} (QCM ${nextQ.questionNumber || stoppedQIdx + 2})`,
        };
      }

      // If the lesson was fully finished, advance to the NEXT lesson in this module!
      const currentCourseIdx = moduleCourses.findIndex((c) => c.id === currentCourse.id);
      if (currentCourseIdx !== -1 && currentCourseIdx < moduleCourses.length - 1) {
        const nextCourse = moduleCourses[currentCourseIdx + 1];
        const nextCourseQuestions = allQuestions.filter((q) => q.courseId === nextCourse.id);
        const nextQ = nextCourseQuestions[0] || {
          id: `q-${nextCourse.id}-1`,
          courseId: nextCourse.id,
          questionNumber: 1,
          type: 'QCM' as const,
          options: ['Option A', 'Option B', 'Option C'],
          correctAnswers: [0],
          explanation: `Question inaugurale du cours ${nextCourse.title}`,
        };

        return {
          module: targetModule,
          course: nextCourse,
          question: nextQ,
          questionIndex: 0,
          questionNumber: nextQ.questionNumber || 1,
          reason: 'next_lesson',
          statusLabel: `Leçon suivante : ${nextCourse.title} (QCM 1)`,
        };
      }
    } else {
      // The user stopped in this question without validating it yet
      const resumeIdx = stoppedQIdx !== -1 ? stoppedQIdx : 0;
      const stoppedQ = currentCourseQuestions[resumeIdx];
      return {
        module: targetModule,
        course: currentCourse,
        question: stoppedQ,
        questionIndex: resumeIdx,
        questionNumber: stoppedQ.questionNumber || resumeIdx + 1,
        reason: 'stopped_in_lesson',
        statusLabel: `Reprendre au QCM ${stoppedQ.questionNumber || resumeIdx + 1} • ${currentCourse.title}`,
      };
    }
  }

  // Fallback if course questions not found directly
  const firstCourse = moduleCourses[0];
  const firstQ = allQuestions.find((q) => q.courseId === firstCourse.id) || {
    id: `q-${firstCourse.id}-1`,
    courseId: firstCourse.id,
    questionNumber: 1,
    type: 'QCM' as const,
    options: ['Option A', 'Option B', 'Option C'],
    correctAnswers: [0],
    explanation: 'Question inaugurale.',
  };

  return {
    module: targetModule,
    course: firstCourse,
    question: firstQ,
    questionIndex: 0,
    questionNumber: 1,
    reason: 'first_lesson',
    statusLabel: `Reprendre ${firstCourse.title}`,
  };
}

/**
 * Calculates accurate progress metrics for a specific module
 */
export function getModuleProgressStats(
  module: Module,
  allCourses: Course[],
  allQuestions: Question[],
  userProfile?: UserProfile | null
): {
  solvedCount: number;
  totalCount: number;
  progressPercent: number;
} {
  const moduleCourses = allCourses.filter((c) => c.moduleId === module.id);
  const courseIds = new Set(moduleCourses.map((c) => c.id));

  const moduleQuestions = allQuestions.filter(
    (q) =>
      courseIds.has(q.courseId) ||
      q.module === module.id ||
      q.module === module.title ||
      module.title.toLowerCase().includes(q.module?.toLowerCase() || '___')
  );

  const totalCount = Math.max(
    moduleQuestions.length,
    module.totalQuestions || 0,
    moduleCourses.length * 15,
    20
  );

  // If user has 0 XP and no activity, strictly 0%
  if (!userProfile || userProfile.totalXp === 0) {
    return {
      solvedCount: 0,
      totalCount,
      progressPercent: 0,
    };
  }

  // Count solved questions from localStorage / user profile
  let solvedIds = new Set<string>();
  try {
    const key = `${COMPLETED_QUESTIONS_PREFIX}${userProfile.email ? `${userProfile.email}_` : ''}${module.id}`;
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed: string[] = JSON.parse(raw);
      parsed.forEach((id) => solvedIds.add(id));
    }
  } catch {
    // ignore
  }

  // Fallback to proportional XP if questions were tracked globally
  let solvedCount = solvedIds.size;
  if (solvedCount === 0 && userProfile.questionsSolvedToday > 0) {
    // If the active countdown module is this module, reflect today's solved questions
    if (
      userProfile.examModule &&
      (userProfile.examModule.toLowerCase().includes(module.title.toLowerCase()) ||
        module.title.toLowerCase().includes(userProfile.examModule.toLowerCase()))
    ) {
      solvedCount = Math.min(totalCount, userProfile.questionsSolvedToday);
    }
  }

  const progressPercent = Math.min(100, Math.round((solvedCount / totalCount) * 100));

  return {
    solvedCount,
    totalCount,
    progressPercent,
  };
}
