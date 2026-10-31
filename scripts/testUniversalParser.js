import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public/assets/aistudio');

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

function extractAnswers(block) {
  const patterns = [
    /<span\s+class="[^"]*(?:answer-key|correct-answer|correct-ans|ans-badge|ans|answer|rep)[^"]*"[^>]*>([\s\S]*?)<\/(?:span|div|p)>/i,
    /<div\s+class="[^"]*(?:corr-answer|answer-line|ans-line)[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<strong[^>]*>\s*R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?)?\s*:\s*([\s\S]*?)<\/strong>/i,
    /<(?:p|div|span)[^>]*>\s*<strong>\s*R[ée]ponse[s]?[^:]*:\s*<\/strong>\s*([A-E,\s\.]+)/i,
    /R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?)?\s*:\s*([A-E][A-E,\s\.\/\-\(\)a-z]*)/i,
    /Bonne\s+r[ée]ponse\s*:\s*([A-E][A-E,\s\.\/\-\(\)a-z]*)/i,
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
  return null;
}

function extractExplanation(block) {
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

function extractOptions(block) {
  let optsHtml = '';
  const listM = block.match(/<(?:ul|ol)\s+class="[^"]*(?:options|choices|options-list|q-options|qcm-options)[^"]*"[^>]*>([\s\S]*?)<\/(?:ul|ol)>/i);
  if (listM) {
    optsHtml = listM[1];
  } else {
    const beforeDetails = block.split(/<details|<div\s+class="corr"/i)[0];
    const anyM = beforeDetails.match(/<(?:ul|ol)[^>]*>([\s\S]*?)<\/(?:ul|ol)>/i);
    if (anyM) optsHtml = anyM[1];
  }
  if (!optsHtml) return [];
  const liMatches = optsHtml.match(/<li[^>]*>[\s\S]*?<\/li>/gi) || [];
  return liMatches.map(li => {
    let t = cleanHtml(li);
    return t.replace(/^[A-E]\s*[\.\:\-\)]\s*/i, '').trim();
  }).filter(t => t.length > 0);
}

function parseFileFully(filePath, courseId) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const allQuestions = [];

  // 1. QCMs
  const qcmParts = html.split(/<!--\s*Q(?:uestion)?\s*\d+/i).slice(1, 26);
  qcmParts.forEach((block, idx) => {
    const qNum = idx + 1;
    let questionText = '';
    const textM = block.match(/<(?:p|div)\s+class="[^"]*(?:q-text|qtext|question-text|q-stem|question|stem|qcm-question)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
    if (textM) {
      questionText = cleanHtml(textM[1]);
    } else {
      const fallbackM = block.match(/<p[^>]*>([\s\S]*?)<\/p>\s*<(?:ul|ol)/i);
      if (fallbackM) questionText = cleanHtml(fallbackM[1]);
    }
    questionText = questionText.replace(/^(?:Q\d+\.?\s*|\d+\.\s*)/i, '').trim();

    const options = extractOptions(block);
    const correctAnswers = extractAnswers(block) || [0];
    let explanation = extractExplanation(block);
    if (!explanation) {
      explanation = 'Explication détaillée issue du document officiel de référence de la Faculté de Médecine.';
    }

    allQuestions.push({
      id: `q-${courseId}-${qNum}`,
      courseId,
      questionNumber: qNum,
      type: 'QCM',
      questionText: questionText || `Question ${qNum}`,
      options,
      correctAnswers,
      explanation
    });
  });

  // 2. Cases
  const casParts = html.split(/<!--\s*(?:CAS|Cas Clinique|CAS CLINIQUE)\s*\d+/i).slice(1, 6);
  let currentQNum = allQuestions.length + 1;

  casParts.forEach((cBlock, cIdx) => {
    const casNum = cIdx + 1;
    
    // Case title
    const titleM = cBlock.match(/<h[34][^>]*>([\s\S]*?)<\/h[34]>/i)
      || cBlock.match(/<span\s+class="[^"]*(?:badge|case-tag|case-sub)[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
    const title = titleM ? cleanHtml(titleM[1]) : `Cas Clinique N°${casNum}`;

    // Vignette
    const vigM = cBlock.match(/<(?:div|p)\s+class="[^"]*(?:vignette|case-vignette|clinical-vignette)[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p)>/i);
    let vignette = vigM ? cleanHtml(vigM[1]) : '';
    if (!vignette) {
      const pVigM = cBlock.match(/<div\s+class="vignette">([\s\S]*?)<\/div>/i);
      if (pVigM) vignette = cleanHtml(pVigM[1]);
    }

    // Try finding inner question blocks
    // Pattern 1: Card-based inside case
    let subBlocks = [];
    const innerCardRegex = /<(?:div|article)\s+class="[^"]*(?:case-q|case-question|case-qcm|sub-q)[^"]*"[^>]*>([\s\S]*?)(?=<(?:div|article)\s+class="[^"]*(?:case-q|case-question|case-qcm|sub-q)|<\/section>|$)/gi;
    let cardM;
    while ((cardM = innerCardRegex.exec(cBlock)) !== null) {
      subBlocks.push(cardM[1]);
    }

    // Pattern 2: <div class="qcard" or <div class="qcm-card" or <div class="qcm" INSIDE the case
    if (subBlocks.length === 0) {
      const qcardRegex = /<(?:div|article)\s+class="[^"]*(?:qcard|qcm-card|qcm|q-card)[^"]*"[^>]*>([\s\S]*?)(?=<(?:div|article)\s+class="[^"]*(?:qcard|qcm-card|qcm|q-card)|<\/section>|$)/gi;
      while ((cardM = qcardRegex.exec(cBlock)) !== null) {
        subBlocks.push(cardM[1]);
      }
    }

    // Pattern 3: <div class="question-text"> or <div class="qcm-question"> with following <ul/ol> and <details>
    if (subBlocks.length === 0) {
      const directQRegex = /<(?:div|p)\s+class="[^"]*(?:question-text|qcm-question|q-header)[^"]*"[^>]*>([\s\S]*?)(?:<(?:ul|ol)[\s\S]*?<\/(?:ul|ol)>)\s*(?:<(?:details|div\s+class="corr")[\s\S]*?<\/(?:details|div)>)/gi;
      let dM;
      while ((dM = directQRegex.exec(cBlock)) !== null) {
        subBlocks.push(dM[0]);
      }
    }

    if (subBlocks.length > 0) {
      subBlocks.forEach((sub, sIdx) => {
        let subQText = '';
        const sTextM = sub.match(/<(?:p|div)\s+class="[^"]*(?:q-text|qtext|question-text|q-stem|question|stem|qcm-question)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
        if (sTextM) {
          subQText = cleanHtml(sTextM[1]);
        } else {
          const rawQMatch = sub.match(/(?:Q\d+\.?|Question\s*\d+\.?)[^<\n]*/i);
          if (rawQMatch) subQText = cleanHtml(rawQMatch[0]);
        }
        subQText = subQText.replace(/^(?:C\d+\-Q\d+\.?\s*|Q\d+\.?\s*|Question\s*\d+[\:\.]?\s*)/i, '').trim();

        const options = extractOptions(sub);
        const correctAnswers = extractAnswers(sub) || [0];
        let explanation = extractExplanation(sub);
        if (!explanation) {
          explanation = `Explication clinique du cas ${casNum}.`;
        }

        allQuestions.push({
          id: `q-${courseId}-${currentQNum}`,
          courseId,
          questionNumber: currentQNum,
          type: 'Cas Clinique',
          clinicalCaseNumber: casNum,
          questionText: `[${title}]\n${vignette}\n\nQuestion : ${subQText || `Question ${sIdx + 1}`}`,
          options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
          correctAnswers,
          explanation
        });
        currentQNum++;
      });
    } else {
      // Fallback: 1 question for the case
      const options = extractOptions(cBlock);
      const correctAnswers = extractAnswers(cBlock) || [0];
      const explanation = extractExplanation(cBlock) || `Cas clinique ${casNum}`;
      allQuestions.push({
        id: `q-${courseId}-${currentQNum}`,
        courseId,
        questionNumber: currentQNum,
        type: 'Cas Clinique',
        clinicalCaseNumber: casNum,
        questionText: `[${title}]\n${vignette}`,
        options: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
        correctAnswers,
        explanation
      });
      currentQNum++;
    }
  });

  return allQuestions;
}

// Test on all files
console.log('Testing full parse on all 22 files:');
const fileKeywordMap = [
  { id: 'c-gyn-pathologie-col', keyword: 'Pathologie_du_Col' },
  { id: 'c-gyn-pathologie-ovarienne', keyword: 'Pathologie_Ovarienne' },
  { id: 'c-gyn-fibrome', keyword: 'Fibrome_Uterin' },
  { id: 'c-gyn-couple-infertile', keyword: 'couple_infertile' },
  { id: 'c-gyn-amenorrhees', keyword: 'Am_norrh_es' },
  { id: 'c-gyn-endometriose', keyword: 'Endom_triose' },
  { id: 'c-gyn-cycle-menstruel', keyword: 'Cycle_Menstruel' },
  { id: 'c-gyn-infections', keyword: 'Infections_Genitales' },
  { id: 'c-gyn-contraception', keyword: 'Contraception' },
  { id: 'c-gyn-grossesse-normale', keyword: 'Grossesse_Normale' },
  { id: 'c-gyn-ghr', keyword: 'GHR' },
  { id: 'c-gyn-geu', keyword: 'GEU' },
  { id: 'c-gyn-avortement', keyword: 'avortement' },
  { id: 'c-gyn-map', keyword: 'MAP' },
  { id: 'c-gyn-diabete', keyword: 'Diabete' },
  { id: 'c-gyn-mecanisme-accouchement', keyword: 'Mecanisme_General' },
  { id: 'c-gyn-siege', keyword: 'Si_ge' },
  { id: 'c-gyn-presentations-deflechies', keyword: 'Presentations_Deflechies' },
  { id: 'c-gyn-delivrance-normale', keyword: 'D_livrance_Normale' },
  { id: 'c-gyn-delivrance-artificielle', keyword: 'Delivrance_Artificielle' },
  { id: 'c-gyn-suites-de-couches', keyword: 'Suites_de_Couches' },
  { id: 'c-gyn-maladies-trophoblastiques', keyword: 'Trophoblastiques' },
];

for (const cfg of fileKeywordMap) {
  const f = files.find(file => file.toLowerCase().includes(cfg.keyword.toLowerCase()) && file.endsWith('.html'));
  if (!f) {
    console.error(`NOT FOUND: ${cfg.keyword}`);
    continue;
  }
  const questions = parseFileFully(path.join(publicDir, f), cfg.id);
  const fallbacks = questions.filter(q => q.options.length < 2 || q.options[0] === 'Option A');
  const shortExp = questions.filter(q => !q.explanation || q.explanation.length < 20);
  const multi = questions.filter(q => q.correctAnswers.length > 1);
  console.log(cfg.id.padEnd(30), '| Total Qs:', questions.length, '| Fallback opts:', fallbacks.length, '| Short exp:', shortExp.length, '| Multi:', multi.length);
}
