import { Question } from '../types/medical';

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
  size?: string;
  iconLink?: string;
  isMock?: boolean;
}

// Sample fallback files simulating real "QCM AI Generated" documents in medical students' Google Drive
export const SAMPLE_DRIVE_FILES: { file: DriveFile; content: string }[] = [
  {
    file: {
      id: 'mock-drive-qcm-cardio-01',
      name: 'QCM AI Generated - Cardiologie Urgences & SCA.txt',
      mimeType: 'text/plain',
      modifiedTime: new Date(Date.now() - 3600000 * 4).toISOString(),
      size: '14.2 KB',
      isMock: true,
    },
    content: `Q1: Un patient de 62 ans, hypertendu et fumeur actif, se présente aux urgences pour une douleur rétrosternale constrictive irradiant dans la mâchoire et le bras gauche évoluant depuis 90 minutes. L'ECG montre un sus-décalage du segment ST de 3 mm en DII, DIII, aVF avec miroir en DI, aVL. La pression artérielle est à 105/65 mmHg, FC 58 bpm. Quel est le diagnostic et la prise en charge immédiate la plus appropriée ?
A) Syndrome coronarien aigu sans sus-décalage du ST (NSTEMI), dosage de troponine ultra-sensible et coronarographie sous 24h
B) Syndrome coronarien aigu avec sus-décalage du ST (STEMI) inférieur, coronarographie diagnostique et thérapeutique en urgence avec angioplastie primaire (délai < 90 min)
C) Péricardite aiguë stade I de Glasgow, mise sous Aspirine 3g/jour et Colchicine
D) Dissection aortique de type A de Stanford, réalisation immédiate d'un angioscanner thoracique
E) Embolie pulmonaire grave, thrombolyse intraveineuse immédiate par altéplase
Réponse: B
Explication: Il s'agit d'un infarctus du myocarde inférieur avec sus-décalage du segment ST (territoire DII, DIII, aVF) vu à H1.5 du début des symptômes. La stratégie de reperfusion prioritaire est l'angioplastie coronaire percutanée primaire en extrême urgence si réalisable dans un délai < 90-120 minutes. Attention au piège de l'extension au ventricule droit (faire V3R, V4R) avant d'administrer des dérivés nitrés.

Q2: Chez ce même patient présentant un infarctus inférieur, l'ECG dérivations droites (V3R, V4R) met en évidence un sus-décalage du segment ST de 1,5 mm en V4R. Quel médicament est formellement CONTRE-INDIQUÉ ?
A) L'héparine non fractionnée
B) L'aspirine 300 mg per os
C) Les dérivés nitrés (trinitrine sublinguale ou IV)
D) Le ticagrélor 180 mg
E) Le chlorure de sodium 0.9% en remplissage prudent
Réponse: C
Explication: L'extension au ventricule droit entraîne une dépendance critique à la précharge pour maintenir le débit cardiaque. Les dérivés nitrés, en provoquant une veinodilatation brutale, effondrent la précharge et induisent un choc cardiogénique gravissime.

Q3: Une femme de 28 ans consulte pour palpitations à début et fin brusques sans facteur déclenchant. L'ECG per-critique montre une tachycardie régulière à complexes QRS fins à 180 bpm, sans ondes P visibles distinctes. Les manœuvres vagales restent inefficaces. Quel est le traitement médicamenteux de 1ère intention ?
A) Amiodarone 300 mg IVL
B) Adénosine (ou Adénosine triphosphate - Striadyne) en bolus IV rapide au pli du coude
C) Digoxine 0.5 mg IV
D) Flécaïnide 100 mg per os
E) Choc électrique externe sous anesthésie générale
Réponse: B
Explication: Tachycardie jonctionnelle de Bouveret (réentrée intranodale). Après échec des manœuvres vagales bien conduites, l'injection rapide d'Adénosine IV (effet flash dépolarisant le nœud AV) avec surveillance ECG continue est le traitement pharmacologique de référence.`,
  },
  {
    file: {
      id: 'mock-drive-qcm-neuro-02',
      name: 'QCM AI Generated - Neurologie AVC & Crises Épileptiques.json',
      mimeType: 'application/json',
      modifiedTime: new Date(Date.now() - 3600000 * 24).toISOString(),
      size: '18.8 KB',
      isMock: true,
    },
    content: JSON.stringify([
      {
        questionText: "Un homme de 71 ans présente un déficit moteur brutal brachio-facial droit prédominant avec aphasie motrice de Broca débuté il y a 2 heures. Le score NIHSS est à 14. L'IRM cérébrale montre un hypersignal en diffusion dans le territoire superficiel de l'artère cérébrale moyenne gauche sans anomalie en FLAIR (mismatch DWI-FLAIR) et sans hémorragie. La PA est à 170/95 mmHg. Quelle est l'indication thérapeutique immédiate ?",
        options: [
          "Aspirine 300 mg per os et surveillance en réanimation",
          "Thrombolyse intraveineuse par rt-PA (Alteplase) associée à une thrombectomie mécanique si occlusion proximale",
          "Héparine non fractionnée à dose curative",
          "Baisse agressive de la tension artérielle avec Loxen pour viser une PAS < 120 mmHg",
          "Thrombolyse intra-artérielle seule sans imagerie des troncs supra-aortiques"
        ],
        correctAnswers: [1],
        explanation: "L'accident vasculaire cérébral ischémique aigu vu dans la fenêtre des 4h30 avec mismatch DWI/FLAIR (déficit récent < 4h30) et sans contre-indication est une indication formelle à la thrombolyse intraveineuse par rt-PA (0.9 mg/kg). En cas d'occlusion d'un gros tronc (segment M1 ou carotide interne terminale), la thrombectomie mécanique doit être associée sans attendre l'effet de la thrombolyse.",
        clinicalPearl: "Time is brain : 1.9 million de neurones meurent chaque minute lors d'un AVC ischémique non reperfusé.",
        module: "Neurologie"
      },
      {
        questionText: "Concernant l'état de mal épileptique convulsif généralisé chez l'adulte, à partir de quelle durée continue de convulsions généralisées tonicocloniques parle-t-on d'état de mal avéré nécessitant l'instauration immédiate du traitement médical (T1) ?",
        options: [
          "1 minute",
          "5 minutes",
          "15 minutes",
          "30 minutes",
          "60 minutes"
        ],
        correctAnswers: [1],
        explanation: "Selon les définitions ILAE et les recommandations d'experts, le temps T1 (seuil de traitement de première ligne par benzodiazépine) pour une crise tonicoclonique généralisée est de 5 minutes. Au-delà de 5 minutes, la crise a très peu de chances de s'arrêter spontanément. Le temps T2 (lésions neuronales irréversibles) est de 30 minutes.",
        clinicalPearl: "T1 = 5 min (Clonazépam IV ou Midazolam IM) ; T2 = 30 min (risque séquellaire neuronal définitif).",
        module: "Neurologie"
      }
    ]),
  },
  {
    file: {
      id: 'mock-drive-qcm-gastro-03',
      name: 'QCM AI Generated - Hépato-Gastro Cirrhose & Ascite.txt',
      mimeType: 'text/plain',
      modifiedTime: new Date(Date.now() - 3600000 * 72).toISOString(),
      size: '12.0 KB',
      isMock: true,
    },
    content: `Q1: Chez un patient cirrhotique hospitalisé pour ascite abondante fébrile (38.4°C) avec douleurs abdominales diffuses, la ponction exploratrice d'ascite retrouve 420 polynucléaires neutrophiles/mm³ et un taux de protides à 12 g/L. Quel est le diagnostic et le traitement de choix ?
A) Péritonite bactérienne spontanée du liquide d'ascite (PBS) ; Céfotaxime 2g x 3/jour IV + Perfusion d'Albumine à J1 et J3
B) Tuberculose péritonéale ; Quadrithérapie antituberculeuse
C) Chémo-embolisation hépatique urgente
D) Rupture de varices œsophagiennes cachée ; Terlipressine seule
E) Ascite cardiaque compliquée ; Diurétiques à fortes doses
Réponse: A
Explication: Le diagnostic d'infection du liquide d'ascite est posé devant un chiffre de PNN > 250/mm³ dans l'ascite. Le traitement repose sur une antibiothérapie probabiliste active sur les entérobactéries (Céfotaxime ou Ceftriaxone IV) ET impérativement une perfusion d'albumine humaine à 20% (1.5 g/kg à J1 puis 1 g/kg à J3) pour prévenir le syndrome hépato-rénal et réduire la mortalité.`,
  }
];

export async function searchDriveFiles(
  accessToken: string,
  searchQuery = 'QCM AI Generated'
): Promise<DriveFile[]> {
  try {
    // Construct query for Google Drive v3
    // Search for documents containing the query or text/document types
    const encodedQ = encodeURIComponent(
      `trashed = false and (name contains '${searchQuery}' or name contains 'QCM' or name contains 'Medical' or mimeType = 'application/vnd.google-apps.document' or mimeType = 'text/plain' or mimeType = 'application/json')`
    );
    const url = `https://www.googleapis.com/drive/v3/files?q=${encodedQ}&fields=files(id,name,mimeType,modifiedTime,size,iconLink)&pageSize=25&orderBy=modifiedTime desc`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.warn('Google Drive API error:', res.status, errorText);
      throw new Error(`Google Drive API returned ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    const driveFiles: DriveFile[] = (data.files || []).map((f: any) => ({
      ...f,
      isMock: false,
    }));

    return driveFiles;
  } catch (err: any) {
    console.error('Failed to search real Drive files:', err);
    throw err;
  }
}

export async function fetchDriveFileContent(
  accessToken: string,
  file: DriveFile
): Promise<string> {
  if (file.isMock) {
    const match = SAMPLE_DRIVE_FILES.find((s) => s.file.id === file.id);
    return match ? match.content : 'Fichier de démonstration introuvable.';
  }

  try {
    let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
    if (file.mimeType === 'application/vnd.google-apps.document') {
      // Export Google Docs to plain text
      url = `https://www.googleapis.com/drive/v3/files/${file.id}/export?mimeType=text/plain`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Impossible de télécharger le fichier Drive (${res.status})`);
    }

    const text = await res.text();
    return text;
  } catch (err) {
    console.error('Error fetching file content from Drive:', err);
    throw err;
  }
}

/**
 * Intelligent parser that converts text or JSON content extracted from
 * "QCM AI Generated" Drive files into structured Question objects!
 */
export function parseQCMContent(content: string, sourceFileName: string): Question[] {
  const trimmed = content.trim();

  // Try 1: Is it JSON?
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      const list = Array.isArray(parsed) ? parsed : [parsed];
      return list.map((item: any, idx: number) => ({
        id: `drive-q-${idx}-${Date.now()}`,
        courseId: 'drive-import',
        questionNumber: idx + 1,
        type: 'QCM' as const,
        questionText: item.questionText || item.question || item.enonce || `Question #${idx + 1}`,
        options: Array.isArray(item.options) ? item.options : ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswers: Array.isArray(item.correctAnswers)
          ? item.correctAnswers
          : typeof item.correctAnswer === 'number'
          ? [item.correctAnswer]
          : [0],
        explanation: item.explanation || item.explication || 'Explication issue du fichier généré par IA.',
        clinicalPearl: item.clinicalPearl || item.perleClinique || undefined,
        academicYear: '4ème Année' as const,
        module: item.module || sourceFileName.replace(/\.[^/.]+$/, ''),
      }));
    } catch {
      // not valid JSON, proceed to text parsing
    }
  }

  // Try 2: Plain text QCM format (Q1:, A), B), Réponse:)
  const questions: Question[] = [];
  const blocks = trimmed.split(/(?=Q\d+[:.]|Question\s*\d+[:.])/i);

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;

    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    let questionText = '';
    const options: string[] = [];
    const correctAnswers: number[] = [];
    let explanation = '';

    for (const line of lines) {
      // Check for Option A), B), etc.
      const optMatch = line.match(/^([A-E])\s*[\)\.\-:]\s*(.+)/i);
      if (optMatch) {
        options.push(optMatch[2].trim());
        continue;
      }

      // Check for Answer / Réponse: B or [1] or A, C
      const ansMatch = line.match(/^(?:R[eé]ponse|Correct|Answer)\s*[:=]\s*([A-E,\s\d]+)/i);
      if (ansMatch) {
        const rawAnswers = ansMatch[1].toUpperCase();
        ['A', 'B', 'C', 'D', 'E'].forEach((letter, index) => {
          if (rawAnswers.includes(letter)) {
            correctAnswers.push(index);
          }
        });
        continue;
      }

      // Check for Explanation / Explication:
      const expMatch = line.match(/^(?:Explication|Justification|Explanation)\s*[:=]\s*(.+)/i);
      if (expMatch) {
        explanation = expMatch[1].trim();
        continue;
      }

      // If we haven't started options, it's part of the question text
      if (options.length === 0) {
        const cleaned = line.replace(/^Q\d+[:.]\s*/i, '').replace(/^Question\s*\d+[:.]\s*/i, '');
        questionText += (questionText ? ' ' : '') + cleaned;
      } else if (explanation) {
        explanation += ' ' + line;
      }
    }

    if (questionText && options.length >= 2) {
      questions.push({
        id: `drive-parsed-${i}-${Date.now()}`,
        courseId: 'drive-import',
        questionNumber: i + 1,
        type: 'QCM',
        questionText,
        options,
        correctAnswers: correctAnswers.length > 0 ? correctAnswers : [0],
        explanation: explanation || 'Explication extraite du document médical.',
        academicYear: '4ème Année',
        module: sourceFileName.replace(/\.[^/.]+$/, ''),
      });
    }
  }

  // Fallback if regex parsing captured 0 questions but content is present
  if (questions.length === 0 && trimmed.length > 30) {
    questions.push({
      id: `drive-raw-${Date.now()}`,
      courseId: 'drive-import',
      questionNumber: 1,
      type: 'QCM',
      questionText: `Question clinique extraite de "${sourceFileName}" : ${trimmed.substring(0, 180)}...`,
      options: [
        'Prise en charge validée de 1ère intention',
        'Traitement invasif différé à 48h',
        'Contre-indication absolue aux anticoagulants',
        'Surveillance simple en ambulatoire',
      ],
      correctAnswers: [0],
      explanation: 'Extrait direct importé depuis le document Google Drive.',
      academicYear: '4ème Année',
      module: sourceFileName,
    });
  }

  return questions;
}
