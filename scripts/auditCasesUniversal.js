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

const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

console.log('Testing case extraction on all files:');
for (const f of files) {
  const html = fs.readFileSync(path.join(publicDir, f), 'utf-8');
  // How are cases marked?
  // Let's find cases
  const caseRegexes = [
    /<!--\s*(?:CAS|Cas Clinique|CAS CLINIQUE)\s*(\d+)[\s\S]*?-->([\s\S]*?)(?=<!--\s*(?:CAS|Cas Clinique|CAS CLINIQUE)\s*\d+|<!--\s*SECTION\s*3|<\/section>|$)/gi
  ];
  
  let casesFound = 0;
  let totalCaseSubQs = 0;
  let caseSubWithMissingAns = 0;
  let caseSubWithMissingOpts = 0;

  let match;
  while ((match = caseRegexes[0].exec(html)) !== null) {
    casesFound++;
    const casNum = match[1];
    const casBlock = match[2];

    // Find sub-questions within the case block
    // Strategy: find each details/correction block and its preceding question and options!
    // Every subquestion has an explanation or correction block (either <details> or <div class="corr">)!
    // Let's test finding subquestions:
    const cardMatches = casBlock.match(/<(?:div|article)\s+class="[^"]*(?:case-q|case-question|case-card|qcard|qcm-card|qcm)[^"]*"[\s\S]*?<\/(?:div|article)>/gi) || [];
    
    // Also check pattern where subquestion is <div/p class="question-text"> ... <details>
    const directQMatches = casBlock.match(/<(?:div|p)\s+class="[^"]*question-text[^"]*"[\s\S]*?<\/(?:details|div)>/gi) || [];
    
    // Count answers in this case
    const answersInCase = casBlock.match(/R[ée]ponse[s]?[^<:\n]*:[^<\n]+/gi) || [];
    totalCaseSubQs += answersInCase.length;
  }
  console.log(f.slice(0, 32).padEnd(35), '| cases:', casesFound, '| total subQ answers in HTML:', totalCaseSubQs);
}
