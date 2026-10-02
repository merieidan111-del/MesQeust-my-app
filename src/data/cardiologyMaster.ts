import { Course, Question } from '../types/medical';
import { CARDIOLOGY_COURSES_PART1 } from './cardiologyBankPart1';
import { CARDIOLOGY_COURSES_PART2 } from './cardiologyBankPart3';
import { CARDIOLOGY_COURSES_PART6 } from './cardiologyBankPart6';
import { CARDIOLOGY_COURSES_PART7 } from './cardiologyBankPart7';
import { CARDIOLOGY_COURSES_PART8 } from './cardiologyBankPart8';
import { getMaster30QuestionsPerCourse } from './cardiologyBankCompleterEngine';

// All 24 official Cardiology Courses for Medical Externs (4ème Année)
// Exactly 25 QCMs + 5 Cas Cliniques = 30 Questions per course
export const ALL_CARDIOLOGY_COURSES: Course[] = [
  // 1 & 2. Core Classical Courses
  {
    id: 'crs-cardio-1',
    moduleId: 'mod-cardio',
    title: 'Insuffisance Cardiaque Aiguë & Chronique (ESC 2024)',
    orderIndex: 1,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 2,
    astucesCount: 5,
    completedPercent: 80,
  },
  {
    id: 'crs-cardio-2',
    moduleId: 'mod-cardio',
    title: 'Syndromes Coronariens Aigus (STEMI & NSTEMI)',
    orderIndex: 2,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 2,
    astucesCount: 4,
    completedPercent: 65,
  },
  // 3 to 7: Part 1 Courses
  ...CARDIOLOGY_COURSES_PART1.map((c, idx) => ({
    ...c,
    qcmCount: 25,
    casCliniqueCount: 5,
    orderIndex: idx + 3,
  })),
  // 8 to 12: Part 2 Courses
  ...CARDIOLOGY_COURSES_PART2.map((c, idx) => ({
    ...c,
    qcmCount: 25,
    casCliniqueCount: 5,
    orderIndex: idx + 3 + CARDIOLOGY_COURSES_PART1.length,
  })),
  // 13 to 16: Part 6 Valvulopathies (RAO, IM, IA, RM)
  ...CARDIOLOGY_COURSES_PART6.map((c, idx) => ({
    ...c,
    qcmCount: 25,
    casCliniqueCount: 5,
    orderIndex: idx + 13,
  })),
  // 17 to 20: Part 7 (EP, Cardiomyopathies, RAA, AOMI)
  ...CARDIOLOGY_COURSES_PART7.map((c, idx) => ({
    ...c,
    qcmCount: 25,
    casCliniqueCount: 5,
    orderIndex: idx + 17,
  })),
  // 21 to 24: Part 8 (TVP, Choc & OAP, Syncope, ACR)
  ...CARDIOLOGY_COURSES_PART8.map((c, idx) => ({
    ...c,
    qcmCount: 25,
    casCliniqueCount: 5,
    orderIndex: idx + 21,
  })),
];

// All Cardiology Questions aggregated ensuring exactly 30 questions (25 QCMs + 5 Cas Cliniques) for every single course
export const ALL_CARDIOLOGY_QUESTIONS: Question[] = getMaster30QuestionsPerCourse();
