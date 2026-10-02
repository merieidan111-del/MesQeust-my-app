import { Course, Question } from '../types/medical';
import { ALL_CARDIOLOGY_COURSES } from './cardiologyMaster';

// Import all 24 dedicated authentic question banks (exactly 30 questions each)
import { INSUFFISANCE_CARDIAQUE_EXACT_QUESTIONS } from './exactBanks/insuffisanceCardiaque';
import { SCA_EXACT_QUESTIONS } from './exactBanks/sca';
import { TONICARDIQUE_EXACT_QUESTIONS } from './exactBanks/tonicardiaque';
import { CONGENITALES_EXACT_QUESTIONS } from './exactBanks/congenitales';
import { GROSSESSE_EXACT_QUESTIONS } from './exactBanks/grossesse';
import { PERICARDITE_EXACT_QUESTIONS } from './exactBanks/pericardite';
import { TROUBLES_RYTHME_EXACT_QUESTIONS } from './exactBanks/troublesRythme';
import { TROUBLES_CONDUCTION_EXACT_QUESTIONS } from './exactBanks/troublesConduction';
import { DISSECTION_EXACT_QUESTIONS } from './exactBanks/dissection';
import { ENDOCARDITE_EXACT_QUESTIONS } from './exactBanks/endocardite';
import { HTA_EXACT_QUESTIONS } from './exactBanks/hta';
import { HTAP_EXACT_QUESTIONS } from './exactBanks/htap';
import { RAO_EXACT_QUESTIONS } from './exactBanks/rao';
import { IM_EXACT_QUESTIONS } from './exactBanks/im';
import { IA_EXACT_QUESTIONS } from './exactBanks/ia';
import { RM_EXACT_QUESTIONS } from './exactBanks/rm';
import { EP_EXACT_QUESTIONS } from './exactBanks/ep';
import { CARDIOMYOPATHIES_EXACT_QUESTIONS } from './exactBanks/cardiomyopathies';
import { RAA_EXACT_QUESTIONS } from './exactBanks/raa';
import { AOMI_EXACT_QUESTIONS } from './exactBanks/aomi';
import { MTEV_EXACT_QUESTIONS } from './exactBanks/mtev';
import { CHOC_OAP_EXACT_QUESTIONS } from './exactBanks/chocOap';
import { SYNCOPE_EXACT_QUESTIONS } from './exactBanks/syncope';
import { ACR_EXACT_QUESTIONS } from './exactBanks/acr';

// Map of exact banks per courseId
export const EXACT_CARDIOLOGY_BANKS: Record<string, Question[]> = {
  'crs-cardio-1': INSUFFISANCE_CARDIAQUE_EXACT_QUESTIONS,
  'crs-cardio-2': SCA_EXACT_QUESTIONS,
  'crs-tonicardiaque': TONICARDIQUE_EXACT_QUESTIONS,
  'crs-congenitales': CONGENITALES_EXACT_QUESTIONS,
  'crs-grossesse': GROSSESSE_EXACT_QUESTIONS,
  'crs-pericardite': PERICARDITE_EXACT_QUESTIONS,
  'crs-troubles-rythme': TROUBLES_RYTHME_EXACT_QUESTIONS,
  'crs-troubles-conduction': TROUBLES_CONDUCTION_EXACT_QUESTIONS,
  'crs-dissection': DISSECTION_EXACT_QUESTIONS,
  'crs-endocardite': ENDOCARDITE_EXACT_QUESTIONS,
  'crs-hta': HTA_EXACT_QUESTIONS,
  'crs-htap': HTAP_EXACT_QUESTIONS,
  'crs-rao': RAO_EXACT_QUESTIONS,
  'crs-im': IM_EXACT_QUESTIONS,
  'crs-ia': IA_EXACT_QUESTIONS,
  'crs-rm': RM_EXACT_QUESTIONS,
  'crs-ep': EP_EXACT_QUESTIONS,
  'crs-cardiomyopathies': CARDIOMYOPATHIES_EXACT_QUESTIONS,
  'crs-raa': RAA_EXACT_QUESTIONS,
  'crs-aomi': AOMI_EXACT_QUESTIONS,
  'crs-tvp': MTEV_EXACT_QUESTIONS,
  'crs-choc-oap': CHOC_OAP_EXACT_QUESTIONS,
  'crs-syncope': SYNCOPE_EXACT_QUESTIONS,
  'crs-acr': ACR_EXACT_QUESTIONS,
};

// Master function aggregating the exact 30 questions for each of the 24 courses
export function getMaster30QuestionsPerCourse(): Question[] {
  const allQuestions: Question[] = [];

  ALL_CARDIOLOGY_COURSES.forEach((course) => {
    const list = EXACT_CARDIOLOGY_BANKS[course.id];
    if (list && list.length > 0) {
      list.forEach((q, idx) => {
        allQuestions.push({
          ...q,
          courseId: course.id,
          questionNumber: q.questionNumber || idx + 1,
          type: (q.questionNumber || idx + 1) <= 25 ? 'QCM' : 'CasClinique',
        });
      });
    }
  });

  return allQuestions;
}
