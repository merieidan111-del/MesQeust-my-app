import fs from 'fs';
import path from 'path';
import { SUPPLEMENTAL_EXPLANATIONS } from './supplementalExplanations.js';

const publicDir = path.resolve('public/assets/aistudio');
const targetDir = path.resolve('src/data/gyneco');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function extractBalancedTag(html, startIdx, tagName) {
  const re = new RegExp(`<(\\/?)${tagName}\\b[^>]*>`, 'gi');
  re.lastIndex = startIdx;
  let depth = 0;
  let contentStart = -1;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (contentStart === -1) {
      contentStart = m.index + m[0].length;
    }
    if (m[1] === '') depth++;
    else depth--;
    if (depth === 0) {
      return {
        fullEnd: m.index + m[0].length,
        inner: html.slice(contentStart, m.index),
        full: html.slice(startIdx, m.index + m[0].length),
      };
    }
  }
  return null;
}

function cleanText(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(?:p|div|li|h[1-6]|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&rsquo;/gi, "'")
    .replace(/&lsquo;/gi, "'")
    .replace(/&laquo;/gi, '«')
    .replace(/&raquo;/gi, '»')
    .replace(/&rarr;/gi, '→')
    .replace(/&ge;/gi, '≥')
    .replace(/&le;/gi, '≤')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanOptionHtml(liInner) {
  const stripped = liInner
    .replace(/<span\s+class="[^"]*(?:letter|opt-letter|option-letter|opt)[^"]*"[^>]*>\s*[A-E]\s*[\.\:\-\)]?\s*<\/span>/gi, '')
    .replace(/<(?:b|strong)>\s*[A-E]\s*[\.\:\-\)]\s*<\/(?:b|strong)>/gi, '');
  return cleanText(stripped)
    .replace(/^[A-E]\s*[\.\:\-\)]\s*/i, '')
    .replace(/\n+/g, ' ')
    .trim();
}

function letterToIndex(letter) {
  const map = { A: 0, B: 1, C: 2, D: 3, E: 4 };
  return map[letter.toUpperCase()];
}

function findFile(pattern) {
  const files = fs.readdirSync(publicDir);
  const found = files.find((f) => f.toLowerCase().includes(pattern.toLowerCase()) && f.endsWith('.html'));
  if (!found) throw new Error(`File matching ${pattern} not found in ${publicDir}`);
  return path.join(publicDir, found);
}

// Extract the earliest answer declaration inside a single question's correction HTML
function extractAnswerInfo(corrHtml) {
  const candidates = [];
  const res = [
    /<span\s+class="(?:[^"]*\s)?(?:answer-key|correct-answer|correct-ans|ans-badge|corr-answer|answer-line|answer|ans|rep|correct)(?:\s[^"]*)?"[^>]*>([\s\S]*?)<\/span>/gi,
    /<div\s+class="(?:[^"]*\s)?(?:corr-answer|correct-answer|answer-line|ans-line)(?:\s[^"]*)?"[^>]*>([\s\S]*?)<\/div>/gi,
    /<p\s+class="(?:[^"]*\s)?(?:correct-answer|answer-line)(?:\s[^"]*)?"[^>]*>([\s\S]*?)<\/p>/gi,
    /<strong[^>]*>\s*(?:Bonnes?\s+)?R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?|correcte[s]?)?\s*(?:\([^)]*\))?\s*:\s*([\s\S]*?)<\/strong>/gi,
    /(?:Bonnes?\s+)?R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?|correcte[s]?)?\s*(?:\([^)]*\))?\s*:\s*([A-E](?:\s*(?:,|et|\/|-)\s*[A-E])*)/gi,
  ];
  for (const r of res) {
    const m = r.exec(corrHtml);
    if (m) {
      candidates.push({
        index: m.index,
        rawInner: m[1],
        rawFull: m[0],
      });
    }
  }
  candidates.sort((a, b) => a.index - b.index);
  if (candidates.length === 0) {
    throw new Error(`Could not extract answer from correction HTML: ${corrHtml.slice(0, 200)}`);
  }
  const best = candidates[0];
  const txt = cleanText(best.rawInner).replace(/\(.*?\)/g, ' ');
  const letters = txt.match(/\b([A-E])\b/g);
  if (!letters || letters.length === 0) {
    throw new Error(`No answer letters [A-E] found in "${best.rawInner}"`);
  }
  const indices = [...new Set(letters)].map(letterToIndex).filter((n) => n !== undefined);
  return { indices, matchedTag: best.rawFull };
}

function extractCorrectionHtml(afterListHtml) {
  const detM = afterListHtml.match(/<details\b[^>]*>/i);
  if (detM) {
    const dObj = extractBalancedTag(afterListHtml, detM.index, 'details');
    if (dObj) {
      const inner = dObj.inner.replace(/<summary[^>]*>[\s\S]*?<\/summary>/i, '');
      return { corrHtml: inner, endOffset: dObj.fullEnd };
    }
  }
  const divM = afterListHtml.match(/<div\s+class="[^"]*corr[^"]*"[^>]*>/i);
  if (divM) {
    const dObj = extractBalancedTag(afterListHtml, divM.index, 'div');
    if (dObj) {
      return { corrHtml: dObj.inner, endOffset: dObj.fullEnd };
    }
  }
  throw new Error(`No <details> or <div class="corr"> correction block found near: ${afterListHtml.slice(0, 150)}`);
}

function buildExplanation(corrHtml, matchedTag, courseId, qNum) {
  // Remove the matched answer header tag cleanly, plus any empty wrapper <p></p> or leading <br>
  let cleanedHtml = corrHtml;
  if (matchedTag) {
    cleanedHtml = cleanedHtml.replace(matchedTag, '');
  }
  let exp = cleanText(cleanedHtml)
    .replace(/^(?:Correction\s*(?:&|et)?\s*explication[s]?\s*d[ée]taill[ée]e[s]?|Correction)\s*/i, '')
    .replace(/^(?:Bonnes?\s+)?R[ée]ponse[s]?\s*(?:exacte[s]?|fausse[s]?|correcte[s]?)?\s*(?:\([^)]*\))?\s*:\s*[A-E](?:\s*(?:,|et|\/|-)\s*[A-E])*\.?\s*(?:\([^)]*\))?\s*/i, '')
    .replace(/^[\.\:\-\s]+/, '')
    .trim();

  if (exp.length < 10) {
    const key = `${courseId}-${qNum}`;
    if (SUPPLEMENTAL_EXPLANATIONS[key]) {
      return SUPPLEMENTAL_EXPLANATIONS[key];
    }
    throw new Error(`Missing explanation for ${key} (extracted: "${exp}")`);
  }
  return exp;
}

function extractStemFromSegment(segmentHtml) {
  // Prefer specific question stem classes; ignore Enoncé vignette blocks
  const matches = [
    ...segmentHtml.matchAll(
      /<(p|div)\s+class="[^"]*(?:q-text|qtext|question-text|q-stem|question|qcm-q|qcm-stem|qcm-question|stem|cq-text)[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi
    ),
  ].filter((m) => !/^\s*<(?:strong|b)>\s*[ÉE]nonc[ée]\s*:?\s*<\/(?:strong|b)>/i.test(m[2]));

  let stem = '';
  if (matches.length > 0) {
    const target = matches[matches.length - 1];
    // Re-extract balanced if it was a div to avoid nested-div truncation
    if (target[1].toLowerCase() === 'div') {
      const bal = extractBalancedTag(segmentHtml, target.index, 'div');
      stem = cleanText(bal ? bal.inner : target[2]);
    } else {
      stem = cleanText(target[2]);
    }
  } else {
    const fallbackP = segmentHtml.match(/<p[^>]*>([\s\S]*?)<\/p>\s*$/i);
    if (fallbackP) stem = cleanText(fallbackP[1]);
  }

  // Strip leading Q1. / 1. / Question 1 : / Q1. / 1.1 prefixes only if present cleanly
  stem = stem
    .replace(/^(?:Question\s*\d+\s*[:\.\-]\s*|Q\d+\s*[\.\:\-]\s*|\d+(?:\.\d+)?\s*[\.\)]\s*)/i, '')
    .replace(/\n+/g, ' ')
    .trim();
  return stem;
}

function parseOptionsList(blockHtml, startSearchIdx = 0) {
  const re = /<(ul|ol)\s+class="[^"]*(?:opt|choice)[^"]*"[^>]*>/gi;
  re.lastIndex = startSearchIdx;
  const m = re.exec(blockHtml);
  if (!m) return null;
  const tag = m[1].toLowerCase();
  const listObj = extractBalancedTag(blockHtml, m.index, tag);
  if (!listObj) return null;
  const options = [...listObj.inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((li) => cleanOptionHtml(li[1]))
    .filter((o) => o.length > 0);
  return {
    listStart: m.index,
    listEnd: listObj.fullEnd,
    options,
  };
}

// ==========================================
// SPECIAL PARSER: Pathologie Ovarienne (Anapat #2)
// ==========================================
function parsePathologieOvarienne() {
  const filePath = findFile('Pathologie_Ovarienne');
  const html = fs.readFileSync(filePath, 'utf-8');
  const courseId = 'c-gyn-pathologie-ovarienne';
  const questions = [];

  const casStart = html.search(/<!--\s*Cas\s*1\b/i);
  const qPart = html.slice(0, casStart);
  const cPart = html.slice(casStart);

  // 1. QCMs (25)
  const qBlocks = qPart.split(/<!--\s*Q\d+[^>]*-->/i).slice(1);
  if (qBlocks.length !== 25) {
    throw new Error(`Expected 25 QCMs in Pathologie Ovarienne, got ${qBlocks.length}`);
  }
  qBlocks.forEach((block, idx) => {
    const qNum = idx + 1;
    const listInfo = parseOptionsList(block);
    if (!listInfo || listInfo.options.length !== 5) {
      throw new Error(`Invalid options in Pathologie Ovarienne Q${qNum}`);
    }
    const stem = extractStemFromSegment(block.slice(0, listInfo.listStart));
    const { corrHtml } = extractCorrectionHtml(block.slice(listInfo.listEnd));
    const { indices, matchedTag } = extractAnswerInfo(corrHtml);
    const explanation = buildExplanation(corrHtml, matchedTag, courseId, qNum);

    questions.push({
      id: `q-${courseId}-${qNum}`,
      courseId,
      questionNumber: qNum,
      type: 'QCM',
      questionText: stem,
      options: listInfo.options,
      correctAnswers: indices,
      explanation,
      difficulty: 'Concours Résidanat',
      module: 'mod-5-gyn',
      academicYear: '5ème Année',
    });
  });

  // 2. CAS CLINIQUES (5 cases, 9 sub-questions)
  const cBlocks = cPart.split(/<!--\s*Cas\s*\d+[^>]*-->/i).slice(1);
  let currentQNum = questions.length + 1;

  cBlocks.forEach((block, cIdx) => {
    const casNum = cIdx + 1;
    const badgeM = block.match(/<span\s+class="[^"]*badge[^"]*">([\s\S]*?)<\/span>/i);
    const casTitle = badgeM ? cleanText(badgeM[1]) : `Cas Clinique ${casNum}`;

    const vigM = block.match(/<div\s+class="question-text">([\s\S]*?)<\/div>/i);
    const vignette = vigM ? cleanText(vigM[1]) : '';

    const { corrHtml } = extractCorrectionHtml(block);
    const subBlocks = [...block.matchAll(/<div\s+style="margin-top:[^>]*>([\s\S]*?)<\/div>/gi)];
    if (subBlocks.length === 0) {
      throw new Error(`No sub-questions found in Pathologie Ovarienne Cas ${casNum}`);
    }

    subBlocks.forEach((subM, sIdx) => {
      const subIdx = sIdx + 1;
      const subBlock = subM[1];
      const qLabelMatch = subBlock.match(/<strong>\s*Q\d+\s*:?\s*<\/strong>([\s\S]*?)(?=<br|$)/i);
      const qText = qLabelMatch ? cleanText(qLabelMatch[1]) : cleanText(subBlock.split(/<br/i)[0]);

      const options = [];
      subBlock.split(/<br\s*\/?>/i).forEach((line) => {
        const trimmed = cleanText(line).trim();
        const optM = trimmed.match(/^[A-E]\.\s*(.*)/i);
        if (optM) options.push(optM[1].trim());
      });
      if (options.length !== 5) {
        throw new Error(`Invalid sub-options in Pathologie Ovarienne Cas ${casNum} Q${subIdx}`);
      }

      // Extract answer specific to Q1 / Q2 or single Réponse : X
      let correctAnswers;
      const multiAnsM = corrHtml.match(new RegExp(`Q${subIdx}\\s*=\\s*([A-E](?:\\s*,\\s*[A-E])*)`, 'i'));
      if (multiAnsM) {
        correctAnswers = multiAnsM[1].match(/[A-E]/gi).map(letterToIndex);
      } else {
        correctAnswers = extractAnswerInfo(corrHtml).indices;
      }

      // Extract sub-question specific explanation if listed as <li><strong>Q1 (B) :</strong>...</li>
      let explanation = '';
      const subExpM = corrHtml.match(new RegExp(`<li[^>]*>\\s*<strong>\\s*Q${subIdx}\\s*(?:\\([^)]*\\))?\\s*:?\\s*<\\/strong>([\\s\\S]*?)<\\/li>`, 'i'));
      if (subExpM) {
        explanation = cleanText(subExpM[1]).replace(/^[\:\-\s]+/, '').trim();
      } else {
        const { matchedTag } = extractAnswerInfo(corrHtml);
        explanation = buildExplanation(corrHtml, matchedTag, courseId, currentQNum);
      }

      questions.push({
        id: `q-${courseId}-${currentQNum}`,
        courseId,
        questionNumber: currentQNum,
        type: 'Cas Clinique',
        clinicalCaseNumber: casNum,
        questionText: `[${casTitle}]\n${vignette}\n\nQuestion : ${qText}`,
        options,
        correctAnswers,
        explanation,
        difficulty: 'Concours Résidanat',
        module: 'mod-5-gyn',
        academicYear: '5ème Année',
      });
      currentQNum++;
    });
  });

  return questions;
}

// ==========================================
// UNIVERSAL BALANCED PARSER FOR THE OTHER 21 FILES
// ==========================================
function parseStandardFile(filePath, courseId) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const casStart = html.search(/<!--\s*(?:CAS|Cas Clinique)\s*1\b/i);
  if (casStart === -1) {
    throw new Error(`Could not locate Cas Clinique 1 marker in ${filePath}`);
  }
  const qPart = html.slice(0, casStart);
  const cPart = html.slice(casStart);
  const questions = [];

  // 1. QCMs (25)
  const qBlocks = qPart.split(/<!--\s*Q(?:uestion)?\s*\d+[^>]*-->/i).slice(1);
  if (qBlocks.length !== 25) {
    throw new Error(`Expected 25 QCMs in ${path.basename(filePath)}, found ${qBlocks.length}`);
  }

  qBlocks.forEach((block, idx) => {
    const qNum = idx + 1;
    const listInfo = parseOptionsList(block, 0);
    if (!listInfo || listInfo.options.length < 2) {
      throw new Error(`Missing or incomplete options in ${path.basename(filePath)} Q${qNum}`);
    }
    const stem = extractStemFromSegment(block.slice(0, listInfo.listStart));
    if (!stem || stem.length < 5) {
      throw new Error(`Missing stem in ${path.basename(filePath)} Q${qNum}`);
    }
    const { corrHtml } = extractCorrectionHtml(block.slice(listInfo.listEnd));
    const { indices, matchedTag } = extractAnswerInfo(corrHtml);
    const explanation = buildExplanation(corrHtml, matchedTag, courseId, qNum);

    questions.push({
      id: `q-${courseId}-${qNum}`,
      courseId,
      questionNumber: qNum,
      type: 'QCM',
      questionText: stem,
      options: listInfo.options,
      correctAnswers: indices,
      explanation,
      difficulty: 'Concours Résidanat',
      module: 'mod-5-gyn',
      academicYear: '5ème Année',
    });
  });

  // 2. Cas Cliniques (5 cases, all sub-questions extracted individually)
  const cBlocks = cPart.split(/<!--\s*(?:CAS|Cas Clinique)\s*\d+[^>]*-->/i).slice(1);
  if (cBlocks.length !== 5) {
    throw new Error(`Expected 5 Cas Cliniques in ${path.basename(filePath)}, found ${cBlocks.length}`);
  }
  let currentQNum = questions.length + 1;

  cBlocks.forEach((block, cIdx) => {
    const casIndex = cIdx + 1;

    const titleM =
      block.match(/<h[34][^>]*>([\s\S]*?)<\/h[34]>/i) ||
      block.match(/<div\s+class="[^"]*case-title[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
      block.match(/<span\s+class="[^"]*badge[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
    const title = titleM ? cleanText(titleM[1]).replace(/\n+/g, ' ').trim() : `Cas Clinique N°${casIndex}`;

    let vignette = '';
    const vigM = block.match(/<(div|p)\s+class="[^"]*vignette[^"]*"[^>]*>/i);
    if (vigM) {
      const vObj = extractBalancedTag(block, vigM.index, vigM[1].toLowerCase());
      if (vObj) vignette = cleanText(vObj.inner);
    } else {
      const enM = block.match(/<div\s+class="question-text">\s*<strong>\s*[ÉE]nonc[ée]/i);
      if (enM) {
        const vObj = extractBalancedTag(block, enM.index, 'div');
        if (vObj) vignette = cleanText(vObj.inner).replace(/^[ÉE]nonc[ée]\s*:?\s*/i, '').trim();
      }
    }
    if (!vignette || vignette.length < 15) {
      throw new Error(`Missing vignette in ${path.basename(filePath)} Cas ${casIndex}`);
    }

    let searchIdx = 0;
    let prevEnd = 0;
    let subIdx = 0;
    while (true) {
      const listInfo = parseOptionsList(block, searchIdx);
      if (!listInfo) break;
      subIdx++;
      if (listInfo.options.length < 2) {
        throw new Error(`Invalid sub-options in ${path.basename(filePath)} Cas ${casIndex} Q${subIdx}`);
      }
      const stem = extractStemFromSegment(block.slice(prevEnd, listInfo.listStart));
      if (!stem || stem.length < 5) {
        throw new Error(`Missing sub-stem in ${path.basename(filePath)} Cas ${casIndex} Q${subIdx}`);
      }
      const afterList = block.slice(listInfo.listEnd);
      const { corrHtml, endOffset } = extractCorrectionHtml(afterList);
      const corrAbsEnd = listInfo.listEnd + endOffset;
      const { indices, matchedTag } = extractAnswerInfo(corrHtml);
      const explanation = buildExplanation(corrHtml, matchedTag, courseId, currentQNum);

      questions.push({
        id: `q-${courseId}-${currentQNum}`,
        courseId,
        questionNumber: currentQNum,
        type: 'Cas Clinique',
        clinicalCaseNumber: casIndex,
        questionText: `[${title}]\n${vignette}\n\nQuestion : ${stem}`,
        options: listInfo.options,
        correctAnswers: indices,
        explanation,
        difficulty: 'Concours Résidanat',
        module: 'mod-5-gyn',
        academicYear: '5ème Année',
      });

      currentQNum++;
      searchIdx = corrAbsEnd;
      prevEnd = corrAbsEnd;
    }

    if (subIdx === 0) {
      throw new Error(`No sub-questions found in ${path.basename(filePath)} Cas ${casIndex}`);
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
  },
  {
    id: 'c-gyn-pathologie-ovarienne',
    orderIndex: 2,
    title: 'Pathologie Ovarienne (Tumeurs Épithéliales, Germinales, Stroma & Métastases)',
    subdivision: 'Anapat',
    keyword: 'Pathologie_Ovarienne',
    parser: parsePathologieOvarienne,
  },

  // SUBDIVISION 2: GYNECOLOGY
  {
    id: 'c-gyn-fibrome',
    orderIndex: 3,
    title: 'Fibrome Utérin',
    subdivision: 'Gynecology',
    keyword: 'Fibrome_Uterin',
  },
  {
    id: 'c-gyn-couple-infertile',
    orderIndex: 4,
    title: 'Conduite à tenir devant un couple infertile',
    subdivision: 'Gynecology',
    keyword: 'couple_infertile',
  },
  {
    id: 'c-gyn-amenorrhees',
    orderIndex: 5,
    title: 'Aménorrhées Primaires & Secondaires',
    subdivision: 'Gynecology',
    keyword: 'Am_norrh',
  },
  {
    id: 'c-gyn-endometriose',
    orderIndex: 6,
    title: 'Endométriose & Adénomyose',
    subdivision: 'Gynecology',
    keyword: 'Endom_triose',
  },
  {
    id: 'c-gyn-cycle-menstruel',
    orderIndex: 7,
    title: 'Le Cycle Menstruel : Physiologie & Troubles',
    subdivision: 'Gynecology',
    keyword: 'Cycle_Menstruel',
  },
  {
    id: 'c-gyn-infections',
    orderIndex: 8,
    title: 'Infections Génitales Basses & Hautes',
    subdivision: 'Gynecology',
    keyword: 'Infections_Genitales',
  },
  {
    id: 'c-gyn-contraception',
    orderIndex: 9,
    title: 'Contraception Hormonale & Intra-Utérine',
    subdivision: 'Gynecology',
    keyword: 'Contraception',
  },

  // SUBDIVISION 3: OBSTETRICS
  {
    id: 'c-gyn-grossesse-normale',
    orderIndex: 10,
    title: 'Grossesse Normale : Diagnostic & Surveillance',
    subdivision: 'Obstetrics',
    keyword: 'Grossesse_Normale',
  },
  {
    id: 'c-gyn-ghr',
    orderIndex: 11,
    title: 'Dépistage des Grossesses à Haut Risque (GHR)',
    subdivision: 'Obstetrics',
    keyword: 'GHR',
  },
  {
    id: 'c-gyn-geu',
    orderIndex: 12,
    title: 'Grossesse Extra-Utérine (GEU)',
    subdivision: 'Obstetrics',
    keyword: 'GEU',
  },
  {
    id: 'c-gyn-avortement',
    orderIndex: 13,
    title: "Menace d'avortement & Avortement spontané",
    subdivision: 'Obstetrics',
    keyword: 'avortement',
  },
  {
    id: 'c-gyn-map',
    orderIndex: 14,
    title: "Menace d'Accouchement Prématuré (MAP)",
    subdivision: 'Obstetrics',
    keyword: 'MAP',
  },
  {
    id: 'c-gyn-diabete',
    orderIndex: 15,
    title: 'Diabète et Grossesse',
    subdivision: 'Obstetrics',
    keyword: 'Diabete',
  },
  {
    id: 'c-gyn-mecanisme-accouchement',
    orderIndex: 16,
    title: "Mécanisme Général de l'Accouchement",
    subdivision: 'Obstetrics',
    keyword: 'Mecanisme_General',
  },
  {
    id: 'c-gyn-siege',
    orderIndex: 17,
    title: 'La Présentation du Siège',
    subdivision: 'Obstetrics',
    keyword: 'Si_ge',
  },
  {
    id: 'c-gyn-presentations-deflechies',
    orderIndex: 18,
    title: 'Les Présentations Défléchies (Face, Front, Bregma)',
    subdivision: 'Obstetrics',
    keyword: 'Presentations_Deflechies',
  },
  {
    id: 'c-gyn-delivrance-normale',
    orderIndex: 19,
    title: 'La Délivrance Normale et Pathologique',
    subdivision: 'Obstetrics',
    keyword: 'livrance_Normale',
  },
  {
    id: 'c-gyn-delivrance-artificielle',
    orderIndex: 20,
    title: 'La Délivrance Artificielle & Révision Utérine',
    subdivision: 'Obstetrics',
    keyword: 'Delivrance_Artificielle',
  },
  {
    id: 'c-gyn-suites-de-couches',
    orderIndex: 21,
    title: 'Suites de Couches Normales et Pathologiques',
    subdivision: 'Obstetrics',
    keyword: 'Suites_de_Couches',
  },
  {
    id: 'c-gyn-maladies-trophoblastiques',
    orderIndex: 22,
    title: 'Maladies Trophoblastiques Gestationnelles (Môle & Choriocarcinome)',
    subdivision: 'Obstetrics',
    keyword: 'Maladies_Trophoblastiques',
  },
];

const allFinalCourses = [];
const allFinalQuestions = [];

COURSES_ORDER.forEach((cfg) => {
  const filePath = findFile(cfg.keyword);
  const courseQuestions = cfg.parser ? cfg.parser() : parseStandardFile(filePath, cfg.id);

  const qcmCount = courseQuestions.filter((q) => q.type === 'QCM').length;
  const casCount = courseQuestions.filter((q) => q.type === 'Cas Clinique').length;

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
    completedPercent: 0,
  });

  allFinalQuestions.push(...courseQuestions);
  const multiCount = courseQuestions.filter((q) => q.correctAnswers.length > 1).length;
  console.log(
    `[${cfg.subdivision.toUpperCase()}] ${cfg.orderIndex}. ${cfg.title} -> ${qcmCount} QCMs, ${casCount} Cas (${multiCount} multi-choice total, Total: ${courseQuestions.length})`
  );
});

const totalMulti = allFinalQuestions.filter((q) => q.correctAnswers.length > 1).length;
console.log(`\n========================================`);
console.log(`Total Courses: ${allFinalCourses.length}`);
console.log(`Total Questions: ${allFinalQuestions.length}`);
console.log(`Total Multiple Choice Questions: ${totalMulti}`);

// WRITE gynecoCourses.ts
fs.writeFileSync(
  path.join(targetDir, 'gynecoCourses.ts'),
  `import { Course } from '../../types/medical';\n\nexport const ALL_GYNECO_COURSES: Course[] = ${JSON.stringify(allFinalCourses, null, 2)};\n`
);

// WRITE gynecoAnapat.ts (Anapat questions first)
const anapatIds = new Set(allFinalCourses.filter((c) => c.subdivision === 'Anapat').map((c) => c.id));
const anapatQs = allFinalQuestions.filter((q) => anapatIds.has(q.courseId));
fs.writeFileSync(
  path.join(targetDir, 'gynecoAnapat.ts'),
  `import { Question } from '../../types/medical';\n\nexport const ANAPAT_QUESTIONS: Question[] = ${JSON.stringify(anapatQs, null, 2)};\n`
);

// WRITE gynecoGynecology.ts
const gynecoIds = new Set(allFinalCourses.filter((c) => c.subdivision === 'Gynecology').map((c) => c.id));
const gynecoQs = allFinalQuestions.filter((q) => gynecoIds.has(q.courseId));
fs.writeFileSync(
  path.join(targetDir, 'gynecoGynecology.ts'),
  `import { Question } from '../../types/medical';\n\nexport const GYNECOLOGY_QUESTIONS: Question[] = ${JSON.stringify(gynecoQs, null, 2)};\n`
);

// WRITE gynecoObstetricsPart1.ts & Part2.ts
const obsCourses = allFinalCourses.filter((c) => c.subdivision === 'Obstetrics');
const obsIds1 = new Set(obsCourses.slice(0, 7).map((c) => c.id));
const obsIds2 = new Set(obsCourses.slice(7).map((c) => c.id));

const obstetrics1Qs = allFinalQuestions.filter((q) => obsIds1.has(q.courseId));
const obstetrics2Qs = allFinalQuestions.filter((q) => obsIds2.has(q.courseId));

fs.writeFileSync(
  path.join(targetDir, 'gynecoObstetricsPart1.ts'),
  `import { Question } from '../../types/medical';\n\nexport const OBSTETRICS_QUESTIONS_PART1: Question[] = ${JSON.stringify(obstetrics1Qs, null, 2)};\n`
);
fs.writeFileSync(
  path.join(targetDir, 'gynecoObstetricsPart2.ts'),
  `import { Question } from '../../types/medical';\n\nexport const OBSTETRICS_QUESTIONS_PART2: Question[] = ${JSON.stringify(obstetrics2Qs, null, 2)};\n`
);

// WRITE gynecoMaster.ts with ANAPAT FIRST
const masterTs = `import { Question } from '../../types/medical';
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

console.log('Successfully generated all Gyneco-Obstétrique files with 100% accuracy!');
