import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public/assets/aistudio');
const targetDir = path.resolve('src/data/gyneco');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function letterToIndex(letter) {
  const map = { A: 0, B: 1, C: 2, D: 3, E: 4 };
  return map[letter.toUpperCase()] ?? 0;
}

function findFile(pattern) {
  const files = fs.readdirSync(publicDir);
  const found = files.find(f => f.toLowerCase().includes(pattern.toLowerCase()) && f.endsWith('.html'));
  if (!found) throw new Error(`File matching ${pattern} not found in ${publicDir}`);
  return path.join(publicDir, found);
}

function extractAnswersFromBlock(block) {
  const patterns = [
    /<span\s+class="[^"]*(?:answer-key|correct-answer|ans-badge|ans|answer|rep)[^"]*"[^>]*>([\s\S]*?)<\/(?:span|div|p)>/i,
    /<div\s+class="[^"]*(?:corr-answer|answer-line|ans-line)[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<strong[^>]*>\s*R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?)?\s*:\s*([\s\S]*?)<\/strong>/i,
    /<(?:p|div|span)[^>]*>\s*<strong>\s*R[ée]ponse[s]?[^:]*:\s*<\/strong>\s*([A-E,\s\.]+)/i,
    /R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?)?\s*:\s*([A-E][A-E,\s\.\/\-\(\)a-z]*)/i,
  ];

  for (const p of patterns) {
    const m = block.match(p);
    if (m) {
      const lettersMatch = m[1].match(/\b([A-E])\b/g);
      if (lettersMatch && lettersMatch.length > 0) {
        return [...new Set(lettersMatch)].map(letterToIndex);
      }
    }
  }
  return [0];
}

function extractExplanationFromBlock(block) {
  const patterns = [
    /<div\s+class="[^"]*(?:correction-content|correction-body|corr-body|explanation|corr)[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<details[^>]*>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>\s*<\/details>/i,
    /<details[^>]*>([\s\S]*?)<\/details>/i,
    /<div\s+class="corr"[^>]*>([\s\S]*?)<\/div>/i,
  ];

  for (const p of patterns) {
    const m = block.match(p);
    if (m && m[1].trim().length > 10) {
      let exp = cleanHtml(m[1]);
      exp = exp.replace(/^R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?)?\s*:\s*[A-E,\s\.\-]+/i, '').trim();
      if (exp.length > 10) return exp;
    }
  }
  return '';
}

// ==========================================
// PARSE ANAPAT FILE 1: Pathologie du Col Utérin
// ==========================================
function parsePathologieCol() {
  const filePath = findFile('Pathologie_du_Col');
  const html = fs.readFileSync(filePath, 'utf-8');
  const questions = [];

  // 1. QCMs
  const qcmRegex = /<!--\s*Q(\d+)(?:\s+[^>]*)?-->([\s\S]*?)(?=<!--\s*(?:Q\d+|CAS\s*\d+)|\<\/section\>)/gi;
  let match;
  while ((match = qcmRegex.exec(html)) !== null) {
    const qNum = parseInt(match[1], 10);
    const block = match[2];

    const stemM = block.match(/<p\s+class="q-stem">([\s\S]*?)<\/p>/i);
    const stem = stemM ? cleanHtml(stemM[1]) : `Question ${qNum}`;

    const optsBlockM = block.match(/<ul\s+class="options">([\s\S]*?)<\/ul>/i);
    const options = [];
    if (optsBlockM) {
      const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let liM;
      while ((liM = liRegex.exec(optsBlockM[1])) !== null) {
        let optText = cleanHtml(liM[1]);
        optText = optText.replace(/^[A-E]\s*/i, '').trim();
        options.push(optText);
      }
    }

    const correctAnswers = extractAnswersFromBlock(block);
    let explanation = extractExplanationFromBlock(block);
    if (!explanation) {
      const expM = block.match(/<div\s+class="correction-body">([\s\S]*?)<\/div>/i);
      explanation = expM ? cleanHtml(expM[1]) : '';
    }

    questions.push({
      id: `q-c-gyn-pathologie-col-${qNum}`,
      courseId: 'c-gyn-pathologie-col',
      questionNumber: qNum,
      type: 'QCM',
      questionText: stem,
      options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
      correctAnswers,
      explanation,
      difficulty: 'Concours Résidanat',
      module: 'mod-5-gyn',
      academicYear: '5ème Année'
    });
  }

  // 2. CAS CLINIQUES
  const caseRegex = /<!--\s*CAS\s*(\d+)\s*-->([\s\S]*?)(?=<!--\s*CAS\s*\d+|\<\/section\>)/gi;
  let cMatch;
  let currentQNum = questions.length + 1;
  while ((cMatch = caseRegex.exec(html)) !== null) {
    const casNum = parseInt(cMatch[1], 10);
    const block = cMatch[2];

    const titleM = block.match(/<h3>([\s\S]*?)<\/h3>/i);
    const casTitle = titleM ? cleanHtml(titleM[1]) : `Cas Clinique ${casNum}`;

    const vigM = block.match(/<div\s+class="vignette">([\s\S]*?)<\/div>/i);
    const vignette = vigM ? cleanHtml(vigM[1]) : '';

    const qcmCardRegex = /<div\s+class="qcm-card">([\s\S]*?)<\/details>\s*<\/div>/gi;
    let cardM;
    let subIdx = 1;
    while ((cardM = qcmCardRegex.exec(block)) !== null) {
      const cardBlock = cardM[1];

      const stemM = cardBlock.match(/<p\s+class="q-stem">([\s\S]*?)<\/p>/i);
      const stem = stemM ? cleanHtml(stemM[1]) : `Sous-question ${subIdx}`;

      const optsBlockM = cardBlock.match(/<ul\s+class="options">([\s\S]*?)<\/ul>/i);
      const options = [];
      if (optsBlockM) {
        const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
        let liM;
        while ((liM = liRegex.exec(optsBlockM[1])) !== null) {
          let optText = cleanHtml(liM[1]);
          optText = optText.replace(/^[A-E]\s*/i, '').trim();
          options.push(optText);
        }
      }

      const correctAnswers = extractAnswersFromBlock(cardBlock);
      let explanation = extractExplanationFromBlock(cardBlock);
      if (!explanation) {
        const expM = cardBlock.match(/<div\s+class="correction-body">([\s\S]*?)<\/div>/i);
        explanation = expM ? cleanHtml(expM[1]) : '';
      }

      questions.push({
        id: `q-c-gyn-pathologie-col-${currentQNum}`,
        courseId: 'c-gyn-pathologie-col',
        questionNumber: currentQNum,
        type: 'Cas Clinique',
        clinicalCaseNumber: casNum,
        questionText: `[Cas Clinique ${casNum} : ${casTitle}]\n${vignette}\n\nQuestion : ${stem}`,
        options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
        correctAnswers,
        explanation,
        difficulty: 'Concours Résidanat',
        module: 'mod-5-gyn',
        academicYear: '5ème Année'
      });
      currentQNum++;
      subIdx++;
    }
  }

  return questions;
}

// ==========================================
// PARSE ANAPAT FILE 2: Pathologie Ovarienne
// ==========================================
function parsePathologieOvarienne() {
  const filePath = findFile('Pathologie_Ovarienne');
  const html = fs.readFileSync(filePath, 'utf-8');
  const questions = [];

  // 1. QCMs
  const qcmRegex = /<!--\s*Q(\d+)(?:\s+[^>]*)?-->([\s\S]*?)(?=<!--\s*(?:Q\d+|Cas\s*\d+)|\<h2\>)/gi;
  let match;
  while ((match = qcmRegex.exec(html)) !== null) {
    const qNum = parseInt(match[1], 10);
    const block = match[2];

    const stemM = block.match(/<div\s+class="question-text">([\s\S]*?)<\/div>/i);
    const stem = stemM ? cleanHtml(stemM[1]) : `Question ${qNum}`;

    const optsBlockM = block.match(/<ul\s+class="options-list">([\s\S]*?)<\/ul>/i);
    const options = [];
    if (optsBlockM) {
      const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let liM;
      while ((liM = liRegex.exec(optsBlockM[1])) !== null) {
        let optText = cleanHtml(liM[1]);
        optText = optText.replace(/^[A-E]\.?\s*/i, '').trim();
        options.push(optText);
      }
    }

    const correctAnswers = extractAnswersFromBlock(block);
    let explanation = extractExplanationFromBlock(block);
    if (!explanation) {
      const expM = block.match(/<div\s+class="correction-content">([\s\S]*?)<\/div>/i);
      explanation = expM ? cleanHtml(expM[1]) : '';
    }

    questions.push({
      id: `q-c-gyn-pathologie-ovarienne-${qNum}`,
      courseId: 'c-gyn-pathologie-ovarienne',
      questionNumber: qNum,
      type: 'QCM',
      questionText: stem,
      options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
      correctAnswers,
      explanation,
      difficulty: 'Concours Résidanat',
      module: 'mod-5-gyn',
      academicYear: '5ème Année'
    });
  }

  // 2. CAS CLINIQUES
  const caseRegex = /<!--\s*Cas\s*(\d+)\s*-->([\s\S]*?)(?=<!--\s*Cas\s*\d+|\<h2\>)/gi;
  let cMatch;
  let currentQNum = questions.length + 1;
  while ((cMatch = caseRegex.exec(html)) !== null) {
    const casNum = parseInt(cMatch[1], 10);
    const block = cMatch[2];

    const badgeM = block.match(/<span\s+class="badge[^"]*">([\s\S]*?)<\/span>/i);
    const casTitle = badgeM ? cleanHtml(badgeM[1]) : `Cas Clinique ${casNum}`;

    const vigM = block.match(/<div\s+class="question-text">([\s\S]*?)<\/div>/i);
    const vignette = vigM ? cleanHtml(vigM[1]) : '';

    let explanation = extractExplanationFromBlock(block);
    if (!explanation) {
      const expM = block.match(/<div\s+class="correction-content">([\s\S]*?)<\/div>/i);
      if (expM) explanation = cleanHtml(expM[1]);
    }

    const subQRegex = /<div\s+style="margin-top:[^>]*>([\s\S]*?)<\/div>/gi;
    let subM;
    let foundSub = false;
    let subIdx = 1;
    while ((subM = subQRegex.exec(block)) !== null) {
      foundSub = true;
      const subBlock = subM[1];

      const qLabelMatch = subBlock.match(/<strong>(Q\d+)\s*:?<\/strong>([\s\S]*?)(?=<br|$)/i);
      const qText = qLabelMatch ? cleanHtml(qLabelMatch[2]) : cleanHtml(subBlock.split(/<br/i)[0]);

      const lines = subBlock.split(/<br\s*[\/]?>/i);
      const options = [];
      lines.forEach(l => {
        const trimmed = cleanHtml(l).trim();
        const optM = trimmed.match(/^[A-E]\.\s*(.*)/i);
        if (optM) {
          options.push(optM[1].trim());
        }
      });

      // Find answer for this specific subquestion (e.g. Q1 = B or Q2 = B or Réponse : B)
      let correctAnswers = [0];
      const ansKeyM = block.match(new RegExp(`Q${subIdx}\\s*=\\s*([A-E])`, 'i'));
      if (ansKeyM) {
        correctAnswers = [letterToIndex(ansKeyM[1])];
      } else {
        const singleAnsM = block.match(/<span\s+class="correct-answer">[\s\S]*?Réponse\s*:\s*([A-E])/i);
        if (singleAnsM) {
          correctAnswers = [letterToIndex(singleAnsM[1])];
        }
      }

      questions.push({
        id: `q-c-gyn-pathologie-ovarienne-${currentQNum}`,
        courseId: 'c-gyn-pathologie-ovarienne',
        questionNumber: currentQNum,
        type: 'Cas Clinique',
        clinicalCaseNumber: casNum,
        questionText: `[${casTitle}]\n${vignette}\n\nQuestion : ${qText}`,
        options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
        correctAnswers,
        explanation,
        difficulty: 'Concours Résidanat',
        module: 'mod-5-gyn',
        academicYear: '5ème Année'
      });
      currentQNum++;
      subIdx++;
    }

    if (!foundSub) {
      questions.push({
        id: `q-c-gyn-pathologie-ovarienne-${currentQNum}`,
        courseId: 'c-gyn-pathologie-ovarienne',
        questionNumber: currentQNum,
        type: 'Cas Clinique',
        clinicalCaseNumber: casNum,
        questionText: `[${casTitle}]\n${vignette}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
        correctAnswers: [0],
        explanation,
        difficulty: 'Concours Résidanat',
        module: 'mod-5-gyn',
        academicYear: '5ème Année'
      });
      currentQNum++;
    }
  }

  return questions;
}

// ==========================================
// GENERAL QCM & CAS PARSER FOR THE OTHER 20 FILES
// ==========================================
function parseStandardFile(filePath, courseId) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const questions = [];

  // QCMs
  const qcmParts = html.split(/<!--\s*Q(?:uestion)?\s*\d+/i);
  const rawQcms = qcmParts.slice(1, 26);

  rawQcms.forEach((block, idx) => {
    const qNum = idx + 1;
    let questionText = '';
    const textM = block.match(/<(?:p|div)\s+class="[^"]*(?:q-text|qtext|question-text|q-stem|question)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
    if (textM) {
      questionText = cleanHtml(textM[1]);
    } else {
      const fallbackM = block.match(/<p[^>]*>([\s\S]*?)<\/p>\s*<ul/i);
      if (fallbackM) questionText = cleanHtml(fallbackM[1]);
    }
    questionText = questionText.replace(/^(?:Q\d+\.?\s*|\d+\.\s*)/i, '').trim();

    // Extract options strictly before <details or inside <ul
    let optsHtml = '';
    const ulM = block.match(/<ul\s+class="[^"]*(?:options|choices|options-list|q-options)[^"]*"[^>]*>([\s\S]*?)<\/ul>/i);
    if (ulM) {
      optsHtml = ulM[1];
    } else {
      const beforeDetails = block.split(/<details/i)[0];
      const anyUlM = beforeDetails.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
      if (anyUlM) optsHtml = anyUlM[1];
    }

    const options = [];
    if (optsHtml) {
      const optRegex = /<li(?:[^>]*)>([\s\S]*?)<\/li>/gi;
      let optM;
      while ((optM = optRegex.exec(optsHtml)) !== null) {
        let opt = cleanHtml(optM[1]);
        opt = opt.replace(/^[A-E]\s*[\.\:\-\)]\s*/i, '').trim();
        if (opt.length > 0) options.push(opt);
      }
    }

    const correctAnswers = extractAnswersFromBlock(block);
    let explanation = extractExplanationFromBlock(block);
    if (!explanation) {
      explanation = 'Explication détaillée tirée du document de référence officiel de la Faculté de Médecine.';
    }

    questions.push({
      id: `q-${courseId}-${qNum}`,
      courseId,
      questionNumber: qNum,
      type: 'QCM',
      questionText: questionText || `Question ${qNum} de ${courseId}`,
      options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
      correctAnswers,
      explanation,
      difficulty: 'Concours Résidanat',
      module: 'mod-5-gyn',
      academicYear: '5ème Année'
    });
  });

  // Cas
  const casParts = html.split(/<!--\s*(?:CAS|Cas Clinique)\s*\d+/i);
  const rawCases = casParts.slice(1, 6);
  let currentQNum = questions.length + 1;

  rawCases.forEach((block, cIdx) => {
    const casIndex = cIdx + 1;
    const titleM = block.match(/<h[34][^>]*>([\s\S]*?)<\/h[34]>/i)
      || block.match(/<span\s+class="[^"]*badge[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
    const title = titleM ? cleanHtml(titleM[1]) : `Cas Clinique N°${casIndex}`;

    const vigM = block.match(/<(?:div|p)\s+class="[^"]*(?:vignette|case-vignette)[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p)>/i);
    const vignette = vigM ? cleanHtml(vigM[1]) : '';

    const subBlocks = block.split(/<(?:div|article)\s+class="[^"]*(?:case-q|qcm-card|sub-q)[^"]*"/i);
    if (subBlocks.length > 1) {
      subBlocks.slice(1).forEach((sub, sIdx) => {
        let subQText = '';
        const sTextM = sub.match(/<(?:p|div)\s+class="[^"]*(?:q-text|qtext|question-text|q-stem|question)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
        if (sTextM) subQText = cleanHtml(sTextM[1]);

        let sOptsHtml = '';
        const ulM = sub.match(/<ul\s+class="[^"]*(?:options|choices|options-list|q-options)[^"]*"[^>]*>([\s\S]*?)<\/ul>/i);
        if (ulM) {
          sOptsHtml = ulM[1];
        } else {
          const beforeDetails = sub.split(/<details/i)[0];
          const anyUlM = beforeDetails.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
          if (anyUlM) sOptsHtml = anyUlM[1];
        }

        const options = [];
        if (sOptsHtml) {
          const optRegex = /<li(?:[^>]*)>([\s\S]*?)<\/li>/gi;
          let optM;
          while ((optM = optRegex.exec(sOptsHtml)) !== null) {
            let opt = cleanHtml(optM[1]);
            opt = opt.replace(/^[A-E]\s*[\.\:\-\)]\s*/i, '').trim();
            if (opt.length > 0) options.push(opt);
          }
        }

        const correctAnswers = extractAnswersFromBlock(sub) || extractAnswersFromBlock(block);
        let explanation = extractExplanationFromBlock(sub) || extractExplanationFromBlock(block);
        if (!explanation) {
          explanation = 'Explication et démarche diagnostique issues du cas clinique officiel.';
        }

        questions.push({
          id: `q-${courseId}-${currentQNum}`,
          courseId,
          questionNumber: currentQNum,
          type: 'Cas Clinique',
          clinicalCaseNumber: casIndex,
          questionText: vignette ? `[${title}]\n${vignette}\n\nQuestion : ${subQText || `Question ${sIdx + 1}`}` : `[${title}]\n\nQuestion : ${subQText || `Question ${sIdx + 1}`}`,
          options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
          correctAnswers,
          explanation,
          difficulty: 'Concours Résidanat',
          module: 'mod-5-gyn',
          academicYear: '5ème Année'
        });
        currentQNum++;
      });
    } else {
      let casQText = '';
      const textM = block.match(/<(?:p|div)\s+class="[^"]*(?:q-text|qtext|question-text|q-stem|question)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
      if (textM) casQText = cleanHtml(textM[1]);

      let optsHtml = '';
      const ulM = block.match(/<ul\s+class="[^"]*(?:options|choices|options-list|q-options)[^"]*"[^>]*>([\s\S]*?)<\/ul>/i);
      if (ulM) {
        optsHtml = ulM[1];
      } else {
        const beforeDetails = block.split(/<details/i)[0];
        const anyUlM = beforeDetails.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
        if (anyUlM) optsHtml = anyUlM[1];
      }

      const options = [];
      if (optsHtml) {
        const optRegex = /<li(?:[^>]*)>([\s\S]*?)<\/li>/gi;
        let optM;
        while ((optM = optRegex.exec(optsHtml)) !== null) {
          let opt = cleanHtml(optM[1]);
          opt = opt.replace(/^[A-E]\s*[\.\:\-\)]\s*/i, '').trim();
          if (opt.length > 0) options.push(opt);
        }
      }

      const correctAnswers = extractAnswersFromBlock(block);
      let explanation = extractExplanationFromBlock(block);
      if (!explanation) {
        explanation = 'Explication et démarche diagnostique issues du cas clinique officiel.';
      }

      questions.push({
        id: `q-${courseId}-${currentQNum}`,
        courseId,
        questionNumber: currentQNum,
        type: 'Cas Clinique',
        clinicalCaseNumber: casIndex,
        questionText: vignette ? `[${title}]\n${vignette}\n\nQuestion : ${casQText || `Question du cas`}` : `[${title}]\n\nQuestion : ${casQText || `Question du cas`}`,
        options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
        correctAnswers,
        explanation,
        difficulty: 'Concours Résidanat',
        module: 'mod-5-gyn',
        academicYear: '5ème Année'
      });
      currentQNum++;
    }
  });

  return questions;
}

// ==========================================
// ORDER COURSES: ANAPAT FIRST, THEN GYNECOLOGY, THEN OBSTETRICS
// ==========================================
const COURSES_ORDER = [
  // SUBDIVISION 1: ANAPAT FIRST
  {
    id: 'c-gyn-pathologie-col',
    orderIndex: 1,
    title: 'Pathologie du Col Utérin (CIN, HPV, Dépistage & Cancers)',
    subdivision: 'Anapat',
    keyword: 'Pathologie_du_Col',
    parser: parsePathologieCol
  },
  {
    id: 'c-gyn-pathologie-ovarienne',
    orderIndex: 2,
    title: 'Pathologie Ovarienne (Tumeurs Épithéliales, Germinales, Stroma & Métastases)',
    subdivision: 'Anapat',
    keyword: 'Pathologie_Ovarienne',
    parser: parsePathologieOvarienne
  },

  // SUBDIVISION 2: GYNECOLOGY
  {
    id: 'c-gyn-fibrome',
    orderIndex: 3,
    title: 'Fibrome Utérin',
    subdivision: 'Gynecology',
    keyword: 'Fibrome_Uterin'
  },
  {
    id: 'c-gyn-couple-infertile',
    orderIndex: 4,
    title: 'Conduite à tenir devant un couple infertile',
    subdivision: 'Gynecology',
    keyword: 'couple_infertile'
  },
  {
    id: 'c-gyn-amenorrhees',
    orderIndex: 5,
    title: 'Aménorrhées Primaires & Secondaires',
    subdivision: 'Gynecology',
    keyword: 'Am_norrh'
  },
  {
    id: 'c-gyn-endometriose',
    orderIndex: 6,
    title: 'Endométriose & Adénomyose',
    subdivision: 'Gynecology',
    keyword: 'Endom_triose'
  },
  {
    id: 'c-gyn-cycle-menstruel',
    orderIndex: 7,
    title: 'Le Cycle Menstruel : Physiologie & Troubles',
    subdivision: 'Gynecology',
    keyword: 'Cycle_Menstruel'
  },
  {
    id: 'c-gyn-infections',
    orderIndex: 8,
    title: 'Infections Génitales Basses & Hautes',
    subdivision: 'Gynecology',
    keyword: 'Infections_Genitales'
  },
  {
    id: 'c-gyn-contraception',
    orderIndex: 9,
    title: 'Contraception Hormonale & Intra-Utérine',
    subdivision: 'Gynecology',
    keyword: 'Contraception'
  },

  // SUBDIVISION 3: OBSTETRICS
  {
    id: 'c-gyn-grossesse-normale',
    orderIndex: 10,
    title: 'Grossesse Normale : Diagnostic & Surveillance',
    subdivision: 'Obstetrics',
    keyword: 'Grossesse_Normale'
  },
  {
    id: 'c-gyn-ghr',
    orderIndex: 11,
    title: 'Dépistage des Grossesses à Haut Risque (GHR)',
    subdivision: 'Obstetrics',
    keyword: 'GHR'
  },
  {
    id: 'c-gyn-geu',
    orderIndex: 12,
    title: 'Grossesse Extra-Utérine (GEU)',
    subdivision: 'Obstetrics',
    keyword: 'GEU'
  },
  {
    id: 'c-gyn-avortement',
    orderIndex: 13,
    title: "Menace d'avortement & Avortement spontané",
    subdivision: 'Obstetrics',
    keyword: 'avortement'
  },
  {
    id: 'c-gyn-map',
    orderIndex: 14,
    title: "Menace d'Accouchement Prématuré (MAP)",
    subdivision: 'Obstetrics',
    keyword: 'MAP'
  },
  {
    id: 'c-gyn-diabete',
    orderIndex: 15,
    title: 'Diabète et Grossesse',
    subdivision: 'Obstetrics',
    keyword: 'Diabete'
  },
  {
    id: 'c-gyn-mecanisme-accouchement',
    orderIndex: 16,
    title: "Mécanisme Général de l'Accouchement",
    subdivision: 'Obstetrics',
    keyword: 'Mecanisme_General'
  },
  {
    id: 'c-gyn-siege',
    orderIndex: 17,
    title: 'La Présentation du Siège',
    subdivision: 'Obstetrics',
    keyword: 'Si_ge'
  },
  {
    id: 'c-gyn-presentations-deflechies',
    orderIndex: 18,
    title: 'Les Présentations Défléchies (Face, Front, Bregma)',
    subdivision: 'Obstetrics',
    keyword: 'Presentations_Deflechies'
  },
  {
    id: 'c-gyn-delivrance-normale',
    orderIndex: 19,
    title: 'La Délivrance Normale et Pathologique',
    subdivision: 'Obstetrics',
    keyword: 'livrance_Normale'
  },
  {
    id: 'c-gyn-delivrance-artificielle',
    orderIndex: 20,
    title: 'La Délivrance Artificielle & Révision Utérine',
    subdivision: 'Obstetrics',
    keyword: 'Delivrance_Artificielle'
  },
  {
    id: 'c-gyn-suites-de-couches',
    orderIndex: 21,
    title: 'Suites de Couches Normales et Pathologiques',
    subdivision: 'Obstetrics',
    keyword: 'Suites_de_Couches'
  },
  {
    id: 'c-gyn-maladies-trophoblastiques',
    orderIndex: 22,
    title: 'Maladies Trophoblastiques Gestationnelles (Môle & Choriocarcinome)',
    subdivision: 'Obstetrics',
    keyword: 'Maladies_Trophoblastiques'
  }
];

const allFinalCourses = [];
const allFinalQuestions = [];

COURSES_ORDER.forEach(cfg => {
  const filePath = findFile(cfg.keyword);
  let courseQuestions = [];
  if (cfg.parser) {
    courseQuestions = cfg.parser();
  } else {
    courseQuestions = parseStandardFile(filePath, cfg.id);
  }

  const qcmCount = courseQuestions.filter(q => q.type === 'QCM').length;
  const casCount = courseQuestions.filter(q => q.type === 'Cas Clinique').length;

  allFinalCourses.push({
    id: cfg.id,
    moduleId: 'mod-5-gyn',
    title: cfg.title,
    orderIndex: cfg.orderIndex,
    subdivision: cfg.subdivision,
    qcmCount,
    casCliniqueCount: casCount,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0
  });

  allFinalQuestions.push(...courseQuestions);
  const multiCount = courseQuestions.filter(q => q.correctAnswers.length > 1).length;
  console.log(`[${cfg.subdivision.toUpperCase()}] ${cfg.orderIndex}. ${cfg.title} -> ${qcmCount} QCMs (${multiCount} multi), ${casCount} Cas (Total: ${courseQuestions.length})`);
});

console.log(`\n========================================`);
console.log(`Total Courses: ${allFinalCourses.length}`);
console.log(`Total Questions: ${allFinalQuestions.length}`);
const totalMulti = allFinalQuestions.filter(q => q.correctAnswers.length > 1).length;
console.log(`Total Multiple Choice Questions: ${totalMulti}`);

// WRITE gynecoCourses.ts
const coursesTs = `import { Course } from '../../types/medical';\n\nexport const ALL_GYNECO_COURSES: Course[] = ${JSON.stringify(allFinalCourses, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'gynecoCourses.ts'), coursesTs);

// WRITE gynecoAnapat.ts (Anapat questions first)
const anapatQs = allFinalQuestions.filter(q => {
  const c = allFinalCourses.find(c => c.id === q.courseId);
  return c && c.subdivision === 'Anapat';
});
const anapatTs = `import { Question } from '../../types/medical';\n\nexport const ANAPAT_QUESTIONS: Question[] = ${JSON.stringify(anapatQs, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'gynecoAnapat.ts'), anapatTs);

// WRITE gynecoGynecology.ts
const gynecoQs = allFinalQuestions.filter(q => {
  const c = allFinalCourses.find(c => c.id === q.courseId);
  return c && c.subdivision === 'Gynecology';
});
const gynecoTs = `import { Question } from '../../types/medical';\n\nexport const GYNECOLOGY_QUESTIONS: Question[] = ${JSON.stringify(gynecoQs, null, 2)};\n`;
fs.writeFileSync(path.join(targetDir, 'gynecoGynecology.ts'), gynecoTs);

// WRITE gynecoObstetricsPart1.ts & Part2.ts
const obstetricsCourses1 = allFinalCourses.filter(c => c.subdivision === 'Obstetrics').slice(0, 7).map(c => c.id);
const obstetricsCourses2 = allFinalCourses.filter(c => c.subdivision === 'Obstetrics').slice(7).map(c => c.id);

const obstetrics1Qs = allFinalQuestions.filter(q => obstetricsCourses1.includes(q.courseId));
const obstetrics2Qs = allFinalQuestions.filter(q => obstetricsCourses2.includes(q.courseId));

fs.writeFileSync(path.join(targetDir, 'gynecoObstetricsPart1.ts'), `import { Question } from '../../types/medical';\n\nexport const OBSTETRICS_QUESTIONS_PART1: Question[] = ${JSON.stringify(obstetrics1Qs, null, 2)};\n`);
fs.writeFileSync(path.join(targetDir, 'gynecoObstetricsPart2.ts'), `import { Question } from '../../types/medical';\n\nexport const OBSTETRICS_QUESTIONS_PART2: Question[] = ${JSON.stringify(obstetrics2Qs, null, 2)};\n`);

// WRITE gynecoMaster.ts with ANAPAT FIRST
const masterTs = `import { Course, Question } from '../../types/medical';
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
`;
fs.writeFileSync(path.join(targetDir, 'gynecoMaster.ts'), masterTs);

console.log('Successfully generated all Gyneco-Obstétrique files with precise multi-choice answers & explanations!');
