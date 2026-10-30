import { Course, Question } from '../../types/medical';
import { ALL_GYNECO_COURSES } from './gynecoCourses';
import { ANAPAT_QUESTIONS } from './gynecoAnapat';
import { GYNECOLOGY_QUESTIONS } from './gynecoGynecology';
import { OBSTETRICS_QUESTIONS_PART1 } from './gynecoObstetricsPart1';
import { OBSTETRICS_QUESTIONS_PART2 } from './gynecoObstetricsPart2';

export { ALL_GYNECO_COURSES };

// Anapat questions placed first as explicitly requested
export const ALL_GYNECO_QUESTIONS: Question[] = [
  ...ANAPAT_QUESTIONS,
  ...GYNECOLOGY_QUESTIONS,
  ...OBSTETRICS_QUESTIONS_PART1,
  ...OBSTETRICS_QUESTIONS_PART2,
];

// Subdivisions with Anapat first
export const GYNECO_SUBDIVISIONS = ['Anapat', 'Gynecology', 'Obstetrics'] as const;

export const GYNECO_STATS = {
  totalCourses: ALL_GYNECO_COURSES.length,
  totalQuestions: ALL_GYNECO_QUESTIONS.length,
  totalMultiChoice: ALL_GYNECO_QUESTIONS.filter(q => q.correctAnswers.length > 1).length,
  anapatCount: ALL_GYNECO_COURSES.filter(c => c.subdivision === 'Anapat').length,
  gynecologyCount: ALL_GYNECO_COURSES.filter(c => c.subdivision === 'Gynecology').length,
  obstetricsCount: ALL_GYNECO_COURSES.filter(c => c.subdivision === 'Obstetrics').length,
};
