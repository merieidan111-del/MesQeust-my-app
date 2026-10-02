import { GoogleGenAI, Type } from '@google/genai';

// Initialize Gemini client using server-side environment variable
const getGenAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('GEMINI_API_KEY is not set in environment. Gemini features will return fallback or error.');
  }
  return new GoogleGenAI({
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

export interface SummarizeRequest {
  documentText: string;
  mode: 'guidelines' | 'flashcards' | 'drug_table' | 'custom' | 'qcm_gen';
  customPrompt?: string;
  academicYear?: string;
  moduleTitle?: string;
}

export interface GenerateQcmRequest {
  topic: string;
  sourceText?: string;
  count?: number;
  academicYear?: string;
  difficulty?: 'Standard' | 'Avancé' | 'Concours Résidanat';
}

export async function handleSummarize(req: SummarizeRequest): Promise<{ result: string; format: string }> {
  const ai = getGenAIClient();
  const model = 'gemini-3.8-flash';

  let systemPrompt = `Tu es un médecin spécialiste hospitalo-universitaire et enseignant expert pour la préparation du concours de Résidanat et de l'Externat en Médecine (3ème, 4ème et 5ème année).
Tes synthèses médicales doivent être rigoureuses, claires, conformes aux dernières recommandations cliniques internationales et nationales (HAS, ESC, ATS, etc.).
Formate tes réponses en Markdown structuré avec des titres nets, listes à puces claires, tableaux comparatifs et perles d'externat. N'utilise aucun emoji (aucun pictogramme ou émoticône) ; garde un ton médical sobre, élégant et scientifique.`;

  let prompt = '';
  switch (req.mode) {
    case 'guidelines':
      prompt = `Analyse le document médical suivant pour un externe de ${req.academicYear || '4ème année'} (Module : ${req.moduleTitle || 'Médecine'}) :
DOCUMENT :
${req.documentText}

TÂCHE : Extrais de façon exhaustive et ultra-structurée :
1. Définition & Critères Diagnostiques validés
2. Bilan paraclinique de première intention vs de référence
3. Arbre décisionnel / Algorithme de prise en charge thérapeutique
4. Critères de gravité et indications d'hospitalisation / soins intensifs
5. Contre-indications absolues et pièges d'externat fréquents`;
      break;

    case 'flashcards':
      prompt = `Crée un jeu de flashcards médicales haute rentabilité (High-Yield) et moyens mnémotechniques à partir de ce texte :
DOCUMENT :
${req.documentText}

Formate sous forme de :
- Flashcard Recto (Question clinique ou piège diagnostique) / Verso (Réponse clé, mécanisme, valeur seuil)
- Moyens mnémotechniques éprouvés en stage et aux examens
- Réflexes d'urgence indispensables`;
      break;

    case 'drug_table':
      prompt = `Génère un tableau comparatif complet des classes pharmacologiques et molécules mentionnées dans ce texte :
DOCUMENT :
${req.documentText}

Structure le tableau Markdown avec les colonnes suivantes :
| Classe & Molécule | Mécanisme d'action | Principales Indications | Posologie & Règle d'administration | Contre-indications majeures | Effets indésirables & Pièges | Surveillance |`;
      break;

    case 'custom':
      prompt = `En tant qu'enseignant de médecine, traite cette demande sur le document :
CONSIGNE DE L'EXTERNE : ${req.customPrompt || 'Synthétise les points clés pour l\'externat'}
DOCUMENT :
${req.documentText}`;
      break;

    default:
      prompt = `Fais une synthèse clinique complète pour réviser l'externat à partir de ce document :\n${req.documentText}`;
  }

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      systemInstruction: systemPrompt,
      temperature: 0.3,
    },
  });

  return {
    result: response.text || 'Aucune synthèse générée.',
    format: 'markdown',
  };
}

export async function handleGenerateQcm(req: GenerateQcmRequest) {
  const ai = getGenAIClient();
  const model = 'gemini-3.8-flash';
  const qCount = req.count || 4;

  const prompt = `Génère ${qCount} QCMs cliniques de niveau ${req.academicYear || '4ème Année d\'externat'} sur le sujet : "${req.topic}".
${req.sourceText ? `Base-toi également sur ce document de cours extrait de Google Drive :\n${req.sourceText}\n` : ''}

Chaque QCM doit comporter :
- Une vignette clinique réaliste (âge, antécédents, anamnèse, constantes vitales, examen clinique, biologie ou imagerie pertinente).
- 5 propositions (A, B, C, D, E).
- 1 ou plusieurs réponses exactes (indices de 0 à 4).
- Une explication clinique détaillée justifiant pourquoi chaque option est vraie ou fausse, avec le piège classique d'externat.
- Une "perle clinique" mnémotechnique.`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      systemInstruction: 'Tu es un concepteur de questions pour le concours de résidanat de médecine. Réponds UNIQUEMENT par un objet JSON valide conforme au schéma.',
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        description: 'Liste de QCMs médicaux générés',
        items: {
          type: Type.OBJECT,
          properties: {
            questionText: {
              type: Type.STRING,
              description: 'Vignette clinique et question posée',
            },
            options: {
              type: Type.ARRAY,
              description: '5 propositions',
              items: { type: Type.STRING },
            },
            correctAnswers: {
              type: Type.ARRAY,
              description: 'Indices des réponses correctes (ex: [1] ou [0, 2])',
              items: { type: Type.INTEGER },
            },
            explanation: {
              type: Type.STRING,
              description: 'Explication détaillée clinique et pièges',
            },
            clinicalPearl: {
              type: Type.STRING,
              description: 'Règle d or ou moyen mnémotechnique',
            },
            module: {
              type: Type.STRING,
              description: 'Module médical concerné',
            },
          },
          required: ['questionText', 'options', 'correctAnswers', 'explanation'],
        },
      },
      temperature: 0.4,
    },
  });

  const rawText = response.text?.trim() || '[]';
  try {
    const parsed = JSON.parse(rawText);
    return parsed;
  } catch (err) {
    console.error('Failed to parse Gemini QCM JSON:', rawText, err);
    return [];
  }
}
