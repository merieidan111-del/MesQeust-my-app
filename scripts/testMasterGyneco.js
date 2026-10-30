import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public/assets/aistudio');

const COURSES_CONFIG = [
  // Subdivision 1: Gynecology (7 courses)
  {
    id: 'c-gyn-fibrome',
    orderIndex: 1,
    title: 'Fibrome Utérin',
    subdivision: 'Gynecology',
    file: 'QCM_-_Fibrome_Uterin.html'
  },
  {
    id: 'c-gyn-couple-infertile',
    orderIndex: 2,
    title: 'Conduite à tenir devant un couple infertile',
    subdivision: 'Gynecology',
    file: 'QCM_-__couple_infertile_13c078e7.html'
  },
  {
    id: 'c-gyn-amenorrhees',
    orderIndex: 3,
    title: 'Aménorrhées Primaires & Secondaires',
    subdivision: 'Gynecology',
    file: 'QCM_-_Am_norrh_es_Primaires___Secondaires_af502ca5.html'
  },
  {
    id: 'c-gyn-endometriose',
    orderIndex: 4,
    title: 'Endométriose & Adénomyose',
    subdivision: 'Gynecology',
    file: 'QCM_-_Endom_triose_c20191e1.html'
  },
  {
    id: 'c-gyn-cycle-menstruel',
    orderIndex: 5,
    title: 'Le Cycle Menstruel : Physiologie & Troubles',
    subdivision: 'Gynecology',
    file: 'QCM_-_Le_Cycle_Menstruel_3ec0bd5e.html'
  },
  {
    id: 'c-gyn-infections',
    orderIndex: 6,
    title: 'Infections Génitales Basses & Hautes',
    subdivision: 'Gynecology',
    file: 'QCM_-_Infections_Genitales_Basses_Hautes.html'
  },
  {
    id: 'c-gyn-contraception',
    orderIndex: 7,
    title: 'Contraception Hormonale & Intra-Utérine',
    subdivision: 'Gynecology',
    file: 'QCM_-_Contraception.html'
  },

  // Subdivision 2: Obstetrics (13 courses)
  {
    id: 'c-gyn-grossesse-normale',
    orderIndex: 8,
    title: 'Grossesse Normale : Diagnostic & Surveillance',
    subdivision: 'Obstetrics',
    file: 'QCM_-Grossesse_Normale__Diagnostic___Surveillance_a95e1dd1.html'
  },
  {
    id: 'c-gyn-ghr',
    orderIndex: 9,
    title: 'Dépistage des Grossesses à Haut Risque (GHR)',
    subdivision: 'Obstetrics',
    file: 'QCM_-_GHR_59b65008.html'
  },
  {
    id: 'c-gyn-geu',
    orderIndex: 10,
    title: 'Grossesse Extra-Utérine (GEU)',
    subdivision: 'Obstetrics',
    file: 'QCM_-_GEU_a9793a75.html'
  },
  {
    id: 'c-gyn-avortement',
    orderIndex: 11,
    title: "Menace d'avortement & Avortement spontané",
    subdivision: 'Obstetrics',
    file: 'QCM_-_Menace_d_avortement___Avortement_spontan__07d8f7a3.html'
  },
  {
    id: 'c-gyn-map',
    orderIndex: 12,
    title: "Menace d'Accouchement Prématuré (MAP)",
    subdivision: 'Obstetrics',
    file: 'QCM_-_MAP_Menace_d_Accouchement_Pr_matur__6e02ef07.html'
  },
  {
    id: 'c-gyn-diabete',
    orderIndex: 13,
    title: 'Diabète et Grossesse',
    subdivision: 'Obstetrics',
    file: 'QCM_-_Diabete_et_Grossesse.html'
  },
  {
    id: 'c-gyn-mecanisme-accouchement',
    orderIndex: 14,
    title: "Mécanisme Général de l'Accouchement",
    subdivision: 'Obstetrics',
    file: 'QCM_-_Mecanisme_General_Accouchement.html'
  },
  {
    id: 'c-gyn-siege',
    orderIndex: 15,
    title: 'La Présentation du Siège',
    subdivision: 'Obstetrics',
    file: 'QCM_-_La_Pr_sentation_du_Si_ge_e58f24b2.html'
  },
  {
    id: 'c-gyn-presentations-deflechies',
    orderIndex: 16,
    title: 'Les Présentations Défléchies (Face, Front, Bregma)',
    subdivision: 'Obstetrics',
    file: 'QCM_-_Presentations_Deflechies.html'
  },
  {
    id: 'c-gyn-delivrance-normale',
    orderIndex: 17,
    title: 'La Délivrance Normale et Pathologique',
    subdivision: 'Obstetrics',
    file: 'QCM_-_La_D_livrance_Normale_et_Pathologique_27ca8172.html'
  },
  {
    id: 'c-gyn-delivrance-artificielle',
    orderIndex: 18,
    title: 'La Délivrance Artificielle & Révision Utérine',
    subdivision: 'Obstetrics',
    file: 'QCM_-_La_Delivrance_Artificielle.html'
  },
  {
    id: 'c-gyn-suites-de-couches',
    orderIndex: 19,
    title: 'Suites de Couches Normales et Pathologiques',
    subdivision: 'Obstetrics',
    file: 'QCM_-_Suites_de_Couches_Normales_et_Pathologiques_50926c8e.html'
  },
  {
    id: 'c-gyn-maladies-trophoblastiques',
    orderIndex: 20,
    title: 'Maladies Trophoblastiques Gestationnelles (Môle & Choriocarcinome)',
    subdivision: 'Obstetrics',
    file: 'QCM_-_Maladies_Trophoblastiques.html'
  },

  // Subdivision 3: Anapat (2 courses)
  {
    id: 'c-gyn-pathologie-col',
    orderIndex: 21,
    title: 'Pathologie du Col Utérin (CIN, HPV, Dépistage & Cancers)',
    subdivision: 'Anapat',
    file: 'QCM_-_Pathologie_du_Col_Ut_rin_b39cd89c.html'
  },
  {
    id: 'c-gyn-pathologie-ovarienne',
    orderIndex: 22,
    title: 'Pathologie Ovarienne (Tumeurs Épithéliales, Germinales, Stroma & Métastases)',
    subdivision: 'Anapat',
    file: 'QCM_-_Pathologie_Ovarienne_36ae3f69.html'
  }
];

function cleanHtml(str) {
  if (!str) return '';
  return str
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&eacute;/g, 'é')
    .replace(/&egrave;/g, 'è')
    .replace(/&agrave;/g, 'à')
    .replace(/&acirc;/g, 'â')
    .replace(/&ecirc;/g, 'ê')
    .replace(/&icirc;/g, 'î')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&ucirc;/g, 'û')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseQcmBlock(block, courseId, qIndex) {
  // Extract question text
  let questionText = '';
  const textM = block.match(/<(?:p|div)\s+class="[^"]*(?:q-text|qtext|question-text|question)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
  if (textM) {
    questionText = cleanHtml(textM[1]);
  } else {
    // fallback: any p before <ul>
    const fallbackM = block.match(/<p[^>]*>([\s\S]*?)<\/p>\s*<ul/i);
    if (fallbackM) questionText = cleanHtml(fallbackM[1]);
  }
  // Remove leading numbers e.g. "1. " or "Q1. "
  questionText = questionText.replace(/^(?:Q\d+\.?\s*|\d+\.\s*)/i, '').trim();

  // Extract options
  const options = [];
  const optRegex = /<li(?:[^>]*)>([\s\S]*?)<\/li>/gi;
  let optM;
  while ((optM = optRegex.exec(block)) !== null) {
    let opt = cleanHtml(optM[1]);
    opt = opt.replace(/^[A-E]\s*[\.\:\-\)]\s*/i, '').trim();
    if (opt.length > 0) options.push(opt);
  }

  // Extract answer letters
  let correctAnswers = [];
  const ansM = block.match(/R[ée]ponse[s]?\s*(?:fausse[s]?)?\s*:\s*([A-E,\s]+)/i)
    || block.match(/<span\s+class="[^"]*(?:rep|answer-line|ans-badge)[^"]*"[^>]*>[\s\S]*?([A-E,\s]+)<\/span>/i);
  if (ansM) {
    const letters = ansM[1].toUpperCase().match(/[A-E]/g) || [];
    const map = { A: 0, B: 1, C: 2, D: 3, E: 4 };
    correctAnswers = letters.map(l => map[l]);
  }
  if (correctAnswers.length === 0) correctAnswers = [0];

  // Extract explanation
  let explanation = '';
  const explM = block.match(/<(?:div|p)\s+class="[^"]*(?:correction-content|correction-body|corr-body|corr|why)[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p)>/i)
    || block.match(/<details[^>]*>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>\s*<\/details>/i);
  if (explM) {
    explanation = cleanHtml(explM[1]);
    // Clean leading "Réponse : X" from explanation text
    explanation = explanation.replace(/^R[ée]ponse[s]?\s*(?:fausse[s]?)?\s*:\s*[A-E,\s]+/i, '').trim();
  }
  if (!explanation) {
    explanation = 'Question issue de la banque officielle de la Faculté de Médecine (5ème Année Gynécologie-Obstétrique).';
  }

  return {
    id: `q-${courseId}-${qIndex}`,
    courseId,
    questionNumber: qIndex,
    type: 'QCM',
    questionText: questionText || `Question ${qIndex} de ${courseId}`,
    options: options.length >= 2 ? options : ['Option A exacte', 'Option B', 'Option C', 'Option D', 'Option E'],
    correctAnswers,
    explanation,
    difficulty: 'Concours Résidanat',
    module: 'mod-5-gyn',
    academicYear: '5ème Année'
  };
}

function parseCasBlock(block, courseId, casIndex, baseQIndex) {
  // Extract title and vignette
  const titleM = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const title = titleM ? cleanHtml(titleM[1]) : `Cas Clinique N°${casIndex}`;

  const vigM = block.match(/<(?:div|p)\s+class="[^"]*vignette[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p)>/i);
  const vignette = vigM ? cleanHtml(vigM[1]) : '';

  // Inside the cas block, there may be 1 or more questions
  const casQuestions = [];
  // Check if there are subquestions in class="case-q"
  const subBlocks = block.split(/<(?:div|article)\s+class="case-q"/i);
  if (subBlocks.length > 1) {
    subBlocks.slice(1).forEach((sub, sIdx) => {
      const q = parseQcmBlock(sub, courseId, baseQIndex + sIdx);
      q.type = 'Cas Clinique';
      q.clinicalCaseNumber = casIndex;
      if (vignette) {
        q.questionText = `[${title}]\n${vignette}\n\nQuestion : ${q.questionText}`;
      } else {
        q.questionText = `[${title}]\n\nQuestion : ${q.questionText}`;
      }
      casQuestions.push(q);
    });
  } else {
    // Single question in cas
    const q = parseQcmBlock(block, courseId, baseQIndex);
    q.type = 'Cas Clinique';
    q.clinicalCaseNumber = casIndex;
    if (vignette) {
      q.questionText = `[${title}]\n${vignette}\n\nQuestion : ${q.questionText}`;
    } else {
      q.questionText = `[${title}]\n\nQuestion : ${q.questionText}`;
    }
    casQuestions.push(q);
  }

  return casQuestions;
}

// Test parsing all courses
console.log('Testing extraction across all 22 courses...');
COURSES_CONFIG.forEach(cfg => {
  const filePath = path.join(publicDir, cfg.file);
  if (!fs.existsSync(filePath)) {
    console.error(`File NOT found: ${filePath}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf-8');

  // Split QCMs
  // Usually split by <!-- Q or <!-- Question
  const qcmParts = html.split(/<!--\s*Q(?:uestion)?\s*\d+/i);
  const rawQcms = qcmParts.slice(1);

  // Split Cas
  const casParts = html.split(/<!--\s*(?:CAS|Cas Clinique)\s*\d+/i);
  const rawCases = casParts.slice(1);

  console.log(`[${cfg.subdivision}] ${cfg.title}: Raw QCM blocks = ${rawQcms.length}, Raw Cas blocks = ${rawCases.length}`);
});
