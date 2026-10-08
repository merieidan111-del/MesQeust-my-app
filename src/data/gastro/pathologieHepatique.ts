import { Question, CourseResource } from '../../types/medical';

export const PATHOLOGIE_HEPATIQUE_QUESTIONS: Question[] = [
  {
    id: 'q-path-hep-01',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la ponction biopsie hépatique (PBH), quelle affirmation est exacte ?",
    options: [
      "Une PBH de 1 cm est suffisante pour une analyse fiable.",
      "La voie transjugulaire est contre-indiquée en cas de troubles de la coagulation.",
      "Le score de Metavir évalue la fibrose (F) et l'activité nécrotico-inflammatoire (A).",
      "La coloration au Perls permet de visualiser la fibrose.",
      "Le FibroTest est un examen invasif de référence pour le staging."
    ],
    correctAnswers: [2],
    explanation: "Le score Metavir évalue l’activité (A0–A3) et la fibrose (F0–F4). Une PBH doit mesurer ≥ 1,5 cm (6–8 espaces portes) ; la voie transjugulaire est justement indiquée en cas de troubles de l’hémostase ; le Perls colore le fer ; le FibroTest est non invasif.",
    clinicalPearl: "PBH : Score Metavir = Activité (A0-A3) + Fibrose (F0-F4). Taille minimale requise : 1,5 cm."
  },
  {
    id: 'q-path-hep-02',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel énoncé concernant l’hépatite aiguë est correct ?",
    options: [
      "La nécrose en pont (bridging necrosis) est une lésion typique de l’hépatite aiguë simple.",
      "La présence de corps de Councilman est un signe de régénération hépatocytaire.",
      "L’hépatite fulminante se caractérise par une nécrose panlobulaire ou multilobulaire.",
      "L’infiltrat inflammatoire est exclusivement lymphocytaire.",
      "La biopsie est systématique devant toute hépatite aiguë."
    ],
    correctAnswers: [2],
    explanation: "L'hépatite fulminante est une nécrose massive (panlobulaire ou multilobulaire). Les corps de Councilman sont des apoptoses ; la nécrose en pont est plutôt un signe de gravité ; l’infiltrat peut comporter des PNN et plasmocytes ; la PBH n’est pas systématique.",
    clinicalPearl: "Hépatite fulminante = Nécrose panlobulaire / multilobulaire massive."
  },
  {
    id: 'q-path-hep-03',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La « nécrose en pièce de monnaie » (piece meal necrosis) correspond à :",
    options: [
      "Une nécrose confluente centro-lobulaire.",
      "Une nécrose des hépatocytes de la lame bordante par l’infiltrat portal.",
      "Une nécrose ischémique secondaire à une thrombose.",
      "Une apoptose épargnant les espaces portes.",
      "Une nécrose associée à une stéatose microvésiculaire."
    ],
    correctAnswers: [1],
    explanation: "La piece meal necrosis (ou nécrose d’interface) est l’extension de l’inflammation péri-portale dans le parenchyme, érodant la lame bordante. C'est un signe clé des hépatites chroniques actives.",
    clinicalPearl: "Piece meal necrosis = Nécrose d'interface érodant la lame bordante hépatocytaire."
  },
  {
    id: 'q-path-hep-04',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l’hépatite chronique virale B, quel aspect est spécifique ?",
    options: [
      "Cytoplasme « en verre dépoli » et noyaux « sableux ».",
      "Amas lymphoïdes avec centres germinatifs et stéatose.",
      "Corps de Mallory et infiltrat de PNN.",
      "Granulomes épithélioïdes et gigantocellulaires.",
      "Rosettes hépatocytaires et plasmocytes abondants."
    ],
    correctAnswers: [0],
    explanation: "L’aspect « ground glass » est dû à l’accumulation d’Ag HBs dans le RE ; les noyaux « sableux » contiennent l’Ag HBc. Ces signes sont évocateurs du VHB.",
    clinicalPearl: "VHB : Cytoplasme en verre dépoli (Ag HBs) + Noyaux sableux (Ag HBc)."
  },
  {
    id: 'q-path-hep-05',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le score de Metavir pour la fibrose (F) inclut :",
    options: [
      "F0 : fibrose portale sans septa.",
      "F1 : fibrose portale avec septa porto-portaux.",
      "F2 : fibrose portale et quelques septa.",
      "F3 : fibrose septale sans cirrhose.",
      "F4 : cirrhose avec nodules de régénération."
    ],
    correctAnswers: [3],
    explanation: "F3 correspond à une fibrose septale sans nodules cirrhogènes. F1 = fibrose portale sans septa ; F2 = fibrose portale avec quelques septa ; F4 = cirrhose.",
    clinicalPearl: "Metavir F3 = Fibrose septale extensive sans architecture cirrhotique."
  },
  {
    id: 'q-path-hep-06',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la cirrhose, quelle proposition est fausse ?",
    options: [
      "La cirrhose micronodulaire est typiquement post-alcoolique.",
      "La cirrhose macronodulaire est classique de l’hépatite B.",
      "La cirrhose est une lésion précancéreuse (CHC).",
      "La fibrose annulaire délimite des nodules de régénération.",
      "La cirrhose est une atteinte focale du foie."
    ],
    correctAnswers: [4],
    explanation: "La cirrhose est obligatoirement une atteinte diffuse intéressant l'ensemble du parenchyme hépatique. Les atteintes focales ne constituent pas une cirrhose.",
    clinicalPearl: "Définition de la cirrhose : Atteinte diffuse et non focale."
  },
  {
    id: 'q-path-hep-07',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel marqueur est le plus spécifique de la cholangite biliaire primitive (CBP) ?",
    options: [
      "Anticorps anti-LKM1.",
      "Anticorps antimitochondriaux (AMA).",
      "Hypergammaglobulinémie IgG4.",
      "Anticorps anti-nucléaires (ANA).",
      "Anticorps anti-transglutaminase."
    ],
    correctAnswers: [1],
    explanation: "Les anticorps anti-mitochondries de type M2 (AMA) sont le marqueur sérologique de choix de la CBP (> 95 % des cas).",
    clinicalPearl: "CBP = Anticorps anti-mitochondries de type M2 (AMA) positifs."
  },
  {
    id: 'q-path-hep-08',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’hémochromatose génétique se caractérise histologiquement par :",
    options: [
      "Une accumulation de fer dans les hépatocytes périportaux.",
      "Une accumulation de cuivre dans les cellules de Kuppfer.",
      "Une stéatose microvésiculaire diffuse.",
      "Des corps de Mallory abondants.",
      "Une fibrose périsinusoïdale."
    ],
    correctAnswers: [0],
    explanation: "Dans l'hémochromatose génétique, la charge en fer débute dans les hépatocytes périportaux (zone 1), colorée en bleu intense par la coloration de Perls.",
    clinicalPearl: "Hémochromatose : Dépôt de fer hépatocytaire périportal (Perls +)."
  },
  {
    id: 'q-path-hep-09',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la maladie de Wilson, quelle lésion n’est pas typique ?",
    options: [
      "Stéatose.",
      "Vacuoles de glycogène dans les noyaux.",
      "Corps de Mallory.",
      "Granulomes épithélioïdes.",
      "Fibrose progressive."
    ],
    correctAnswers: [3],
    explanation: "Les granulomes épithélioïdes ne sont pas une caractéristique de la maladie de Wilson (surcharge en cuivre). On observe stéatose, noyaux glycogéniques et corps de Mallory.",
    clinicalPearl: "Maladie de Wilson : Stéatose + noyaux glycogéniques + surcharge en cuivre."
  },
  {
    id: 'q-path-hep-10',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’hépatite médicamenteuse chronique se distingue par :",
    options: [
      "Un infiltrat portal riche en plasmocytes.",
      "Une fibrose portale extensive sans inflammation.",
      "Des granulomes épithélioïdes et une éosinophilie.",
      "Des hépatocytes en rosettes.",
      "Une nécrose en pont systématisée."
    ],
    correctAnswers: [2],
    explanation: "L'atteinte médicamenteuse immuno-allergique s'accompagne fréquemment de granulomes épithélioïdes et d'un infiltrat riche en polynucléaires éosinophiles.",
    clinicalPearl: "Hépatite médicamenteuse : Éosinophiles tissulaires + granulomes épithélioïdes."
  },
  {
    id: 'q-path-hep-11',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La stéatose macro-vacuolaire est une lésion précoce de :",
    options: [
      "L’hépatite virale C.",
      "La maladie alcoolique du foie.",
      "L’hémochromatose.",
      "La CBP.",
      "L’hépatite auto-immune."
    ],
    correctAnswers: [1],
    explanation: "La maladie alcoolique du foie induit très précocement une stéatose macro-vacuolaire centro-lobulaire puis pan-lobulaire réversible au sevrage.",
    clinicalPearl: "Alcool : Stéatose macro-vacuolaire précoce."
  },
  {
    id: 'q-path-hep-12',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le corps de Mallory (hyaline alcoolique) est :",
    options: [
      "Une inclusion intranucléaire pathognomonique de l’alcool.",
      "Une formation éosinophile intracytoplasmique visible dans l’alcool et la NASH.",
      "Un agrégat de fer dans les hépatocytes.",
      "Un corps apoptotique typique des hépatites virales.",
      "Un marqueur de cholestase chronique."
    ],
    correctAnswers: [1],
    explanation: "Les corps de Mallory-Denk sont des agglomérats intracytoplasmiques éosinophiles de filaments intermédiaires (cytokératines), observés dans l'hépatite alcoolique et la NASH.",
    clinicalPearl: "Corps de Mallory = Cytoplasme éosinophile contenant des cytokératines agrégées."
  },
  {
    id: 'q-path-hep-13',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le staging des tumeurs hépatiques (pTNM 2010), une tumeur solitaire de 3 cm sans invasion vasculaire est classée :",
    options: ["T1.", "T2.", "T3.", "T4.", "N1."],
    correctAnswers: [1],
    explanation: "T1 = tumeur unique ≤ 2 cm sans invasion vasculaire. T2 = tumeur unique > 2 cm sans invasion vasculaire (ou tumeurs multiples ≤ 2 cm).",
    clinicalPearl: "pTNM CHC : T1 ≤ 2 cm ; T2 > 2 cm sans invasion vasculaire."
  },
  {
    id: 'q-path-hep-14',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le cholangiocarcinome est :",
    options: [
      "Une tumeur maligne des hépatocytes.",
      "Associé dans 80 % des cas à une cirrhose.",
      "Un adénocarcinome développé à partir des canaux biliaires.",
      "De pronostic plus favorable que le CHC.",
      "Fréquemment induit par le VHB."
    ],
    correctAnswers: [2],
    explanation: "Le cholangiocarcinome intra-hépatique est un adénocarcinome issu du revêtement épithélial des canaux biliaires. Il survient le plus souvent sur foie non cirrhotique.",
    clinicalPearl: "Cholangiocarcinome = Adénocarcinome des voies biliaires (foie non cirrhotique le plus souvent)."
  },
  {
    id: 'q-path-hep-15',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’hépatocarcinome (CHC) se développe le plus souvent sur :",
    options: [
      "Un foie sain.",
      "Une stéatose non alcoolique.",
      "Une cirrhose.",
      "Une cholangite sclérosante.",
      "Une hémochromatose non cirrhotique."
    ],
    correctAnswers: [2],
    explanation: "Plus de 80 à 90 % des CHC surviennent sur une cirrhose sous-jacente (virale B/C, alcoolique ou métabolique).",
    clinicalPearl: "Le CHC complique la cirrhose dans l'immense majorité des cas."
  },
  {
    id: 'q-path-hep-16',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le « ground glass » (cytoplasme en verre dépoli) est lié à :",
    options: [
      "L’accumulation d’Ag HBs dans le réticulum endoplasmique.",
      "La présence d’Ag HBc dans le noyau.",
      "Une stéatose microvésiculaire.",
      "Une surcharge en glycogène.",
      "Une dégénérescence ballonnisante."
    ],
    correctAnswers: [0],
    explanation: "L'aspect de verre dépoli correspond à la distension du réticulum endoplasmique par des filaments d'antigène de surface HBs.",
    clinicalPearl: "Verre dépoli = Ag HBs accumulé dans le réticulum endoplasmique."
  },
  {
    id: 'q-path-hep-17',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle coloration est utilisée pour visualiser la trame réticulinique ?",
    options: [
      "Trichrome de Masson.",
      "Perls.",
      "Gordon-Sweet ou rouge Sirius.",
      "PAS.",
      "Hématoxyline-Éosine."
    ],
    correctAnswers: [2],
    explanation: "L'imprégnation argentique de Gordon-Sweet colore la réticuline (charpente trabéculaire du foie). Le trichrome de Masson colore le collagène fibreux.",
    clinicalPearl: "Gordon-Sweet = Imprégnation argentique de la trame réticulinique."
  },
  {
    id: 'q-path-hep-18',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l’hépatite auto-immune, un signe histologique évocateur est :",
    options: [
      "La présence de corps de Mallory.",
      "Une fibrose portale sans inflammation.",
      "Des rosettes hépatocytaires et un infiltrat plasmocytaire.",
      "Des granulomes nécrosants.",
      "Une stéatose microvésiculaire."
    ],
    correctAnswers: [2],
    explanation: "L'hépatite auto-immune se distingue par un infiltrat lymphoplasmocytaire abondant, une nécrose d'interface sévère et des rosettes d'hépatocytes régénératifs.",
    clinicalPearl: "Hépatite auto-immune : Infiltrat riche en plasmocytes + rosettes hépatocytaires."
  },
  {
    id: 'q-path-hep-19',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’hépatite chronique C se caractérise par :",
    options: [
      "Un infiltrat portal à prédominance de PNN.",
      "La présence de noyaux « sableux ».",
      "Des amas lymphoïdes avec centres germinatifs et stéatose.",
      "Une fibrose péri-canalaire.",
      "Une nécrose d’interface minime."
    ],
    correctAnswers: [2],
    explanation: "L'hépatite C associe classiquement des follicules lymphoïdes dans les espaces portes, des lésions des canaux biliaires et une stéatose macro-vacuolaire.",
    clinicalPearl: "VHC : Amas lymphoïdes portes + stéatose macro-vacuolaire."
  },
  {
    id: 'q-path-hep-20',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La NASH (stéatohépatite non alcoolique) se distingue de la stéatose simple par :",
    options: [
      "Une stéatose macro-vacuolaire.",
      "Une fibrose péri-sinusoïdale et des corps de Mallory.",
      "Un infiltrat portal lymphocytaire.",
      "Une cholestase.",
      "Une absence d’inflammation."
    ],
    correctAnswers: [1],
    explanation: "La NASH associe obligatoirement stéatose + ballonisation hépatocytaire + inflammation lobulaire, complétée par une fibrose périsinusoïdale.",
    clinicalPearl: "NASH = Stéatose + Ballonisation + Inflammation lobulaire + Fibrose périsinusoïdale."
  },
  {
    id: 'q-path-hep-21',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle affection est la cause la plus fréquente de métastases hépatiques ?",
    options: [
      "Le cancer du sein.",
      "Le cancer colorectal.",
      "Le cancer gastrique.",
      "Le cancer du poumon.",
      "Le mélanome."
    ],
    correctAnswers: [1],
    explanation: "Le cancer colorectal est le premier pourvoyeur de métastases hépatiques par drainage veineux portal (56 à 58 % des métastases).",
    clinicalPearl: "1ère cause de métastases au foie : Cancer colorectal."
  },
  {
    id: 'q-path-hep-22',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’adénome hépatocellulaire est une tumeur bénigne :",
    options: [
      "Souvent multiple et bilatérale.",
      "Liée à une stéatose.",
      "Œstrogéno-dépendante, prédominant chez la femme.",
      "À haut risque de dégénérescence en cholangiocarcinome.",
      "Spontanément régressive sans traitement."
    ],
    correctAnswers: [2],
    explanation: "L'adénome est favorisé par la contraception œstroprogestative orale prolongée. Risque de rupture hémorragique et de transformation en CHC.",
    clinicalPearl: "Adénome hépatique : Femme jeune sous pilule œstroprogestative."
  },
  {
    id: 'q-path-hep-23',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la cirrhose, les nodules de régénération sont :",
    options: [
      "Entourés de fibrose annulaire.",
      "Composés d’une architecture lobulaire normale.",
      "De petite taille dans la cirrhose post-hépatite B.",
      "Dépourvus de travées hépatocytaires.",
      "Toujours uniques."
    ],
    correctAnswers: [0],
    explanation: "La fibrose annulaire entoure et délimite complètement les nodules hépatocytaires de régénération désorganisés.",
    clinicalPearl: "Cirrhose = Nodules de régénération ceinturés par une fibrose annulaire mutilante."
  },
  {
    id: 'q-path-hep-24',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La cholestase et la prolifération des néo-canalicules biliaires sont des signes histologiques précoces de :",
    options: [
      "Hépatite virale B.",
      "Hépatite alcoolique.",
      "Cholangite biliaire primitive (stade 2).",
      "Hémochromatose.",
      "Maladie de Wilson."
    ],
    correctAnswers: [2],
    explanation: "Dans la classification de Scheuer pour la CBP : stade 1 = lésion canalaire destructrice ; stade 2 = prolifération néo-canaliculaire et cholestase.",
    clinicalPearl: "CBP stade 2 : Prolifération ductulaire néo-canaliculaire."
  },
  {
    id: 'q-path-hep-25',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le risque évolutif majeur de toute hépatopathie chronique fibreuse est :",
    options: [
      "L’insuffisance rénale.",
      "La survenue d’une cirrhose et d’un CHC.",
      "La cholestase chronique.",
      "Une stéatose microvésiculaire.",
      "Une fibrose réversible."
    ],
    correctAnswers: [1],
    explanation: "Toute hépatite chronique évoluant vers la cirrhose expose à l'hypertension portale, à l'insuffisance hépatocellulaire et au carcinome hépatocellulaire (CHC).",
    clinicalPearl: "Complication ultime des hépatopathies chroniques : Cirrhose et Carcinome hépatocellulaire."
  },

  // -------------------------------------------------------------
  // 5 Cas Cliniques (15 questions)
  // -------------------------------------------------------------
  // Cas 1
  {
    id: 'q-path-hep-c1-1',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Hépatite chronique B : Patient de 45 ans, suivi pour hépatite B chronique depuis 10 ans. Asymptomatique. ALAT à 2,5 N, charge virale HBV élevée. PBH : espaces portes élargis, infiltrat lymphocytaire, nécrose d'interface modérée, hépatocytes en ground glass. Fibrose portale avec quelques septa.\n\nQuel est le stade de fibrose selon Metavir ?",
    options: ["F1", "F2", "F3", "F4", "F0"],
    correctAnswers: [1],
    explanation: "F2 correspond à une fibrose portale avec quelques septa fibreux porto-portaux ou porto-centraux.",
    clinicalPearl: "Metavir F2 = Fibrose portale avec quelques septa."
  },
  {
    id: 'q-path-hep-c1-2',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Quel aspect cytologique est spécifique de l'infection par le VHB chez ce patient ?",
    options: ["Corps de Mallory", "Ground glass (verre dépoli)", "Stéatose macro-vacuolaire", "Amas lymphoïdes", "Granulomes"],
    correctAnswers: [1],
    explanation: "Le cytoplasme en verre dépoli (ground glass) témoigne de l'accumulation de l'Ag HBs dans le réticulum endoplasmique.",
    clinicalPearl: "Aspect en verre dépoli = Accumulation d'Ag HBs."
  },
  {
    id: 'q-path-hep-c1-3',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Quel traitement de fond est recommandé pour stopper la progression vers la cirrhose ?",
    options: [
      "Interféron seul",
      "Analogues nucléos(t)idiques (entécavir, ténofovir)",
      "Corticothérapie",
      "Acide ursodésoxycholique",
      "Antivitamine K"
    ],
    correctAnswers: [1],
    explanation: "Les antiviraux à haute barrière génétique (Ténofovir ou Entécavir) permettent de contrôler durablement la réplication et de faire régresser la fibrose.",
    clinicalPearl: "Traitement VHB chronique : Ténofovir ou Entécavir au long cours."
  },

  // Cas 2
  {
    id: 'q-path-hep-c2-1',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Hépatite alcoolique aiguë : Homme de 52 ans, éthylique chronique (80 g/j). Ictère, ascite, fièvre. ALAT = 180 UI/L, ASAT = 320 UI/L (ratio > 2). PBH : stéatose macro-vacuolaire extensive, corps de Mallory, infiltrat de PNN, fibrose périsinusoïdale.\n\nLe diagnostic le plus probable est :",
    options: ["Hépatite virale C", "NASH", "Hépatite alcoolique aiguë", "Hémochromatose", "CBP"],
    correctAnswers: [2],
    explanation: "L'infiltrat de PNN associé aux corps de Mallory, à la stéatose et au ratio ASAT/ALAT > 2 signe une hépatite alcoolique aiguë.",
    clinicalPearl: "Hépatite alcoolique aiguë : Infiltrat de PNN + Corps de Mallory + Ratio ASAT/ALAT > 2."
  },
  {
    id: 'q-path-hep-c2-2',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : Les corps de Mallory correspondent à :",
    options: [
      "Des inclusions intranucléaires virales",
      "Des amas de filaments intermédiaires de cytokératine",
      "Des agrégats de fer hépatocytaire",
      "Des corps apoptotiques Councilman",
      "Des cristaux de cholestérol"
    ],
    correctAnswers: [1],
    explanation: "Les corps de Mallory sont des agrégats intracytoplasmiques éosinophiles de filaments intermédiaires de cytokératines.",
    clinicalPearl: "Corps de Mallory = Cytokératines agrégées dans le cytoplasme hépatocytaire."
  },
  {
    id: 'q-path-hep-c2-3',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 31,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : Quel traitement est prioritaire chez ce patient ?",
    options: [
      "Corticothérapie seule sans sevrage",
      "Sevrage alcoolique complet + support nutritionnel",
      "Antiviraux à action directe",
      "Chélateurs du cuivre",
      "Transplantation hépatique immédiate"
    ],
    correctAnswers: [1],
    explanation: "Le sevrage alcoolique strict associé à une renutrition entérale/parentérale est la pierre angulaire (corticothérapie si score de Maddrey ≥ 32).",
    clinicalPearl: "Prise en charge hépatite alcoolique : Sevrage immédiat + nutrition hypercalorique/protidique."
  },

  // Cas 3
  {
    id: 'q-path-hep-c3-1',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 32,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Stéatohépatite non alcoolique (NASH) : Femme de 48 ans, IMC 34, diabète type 2. Cytolyse fortuite (ALAT 85). Écho : foie hyperéchogène. PBH : stéatose macro-vacuolaire > 60 %, ballonisation hépatocytaire, infiltrat lobulaire mononucléé, fibrose périsinusoïdale.\n\nQuel diagnostic retenez-vous ?",
    options: ["Hépatite alcoolique", "NASH", "Hépatite auto-immune", "Hépatite C", "Stéatose simple"],
    correctAnswers: [1],
    explanation: "La présence de ballonisation et de fibrose périsinusoïdale en contexte dysmétabolique affirme la NASH (stéatohépatite non alcoolique).",
    clinicalPearl: "NASH = Stéatose + Ballonisation + Fibrose périsinusoïdale sur terrain métabolique."
  },
  {
    id: 'q-path-hep-c3-2',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 33,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : La lésion histologique qui différencie formellement la NASH de la stéatose simple isolée est :",
    options: [
      "La stéatose macro-vacuolaire",
      "La fibrose péri-sinusoïdale et la ballonisation",
      "Les dépôts de cuivre",
      "La prolifération canalaire",
      "Les corps de Councilman"
    ],
    correctAnswers: [1],
    explanation: "La stéatose simple n'a ni ballonisation ni fibrose. C'est la ballonisation et la fibrose périsinusoïdale qui caractérisent la NASH évolutive.",
    clinicalPearl: "Différence stéatose pure vs NASH : Ballonisation et fibrose périsinusoïdale."
  },
  {
    id: 'q-path-hep-c3-3',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 34,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : La prise en charge fondamentale de cette patiente repose sur :",
    options: [
      "Antiviraux",
      "Perte de poids, activité physique et équilibre glycémique",
      "Corticothérapie prolongée",
      "Acide ursodésoxycholique haute dose",
      "Chélateurs du fer"
    ],
    correctAnswers: [1],
    explanation: "Mesures hygiéno-diététiques visant une perte de poids de 7 à 10 %, associées à l'optimisation du traitement du diabète.",
    clinicalPearl: "Traitement clé de la NASH : Perte pondérale progressive ≥ 7-10 %."
  },

  // Cas 4
  {
    id: 'q-path-hep-c4-1',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 35,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Cholangite biliaire primitive (CBP) : Femme de 42 ans, prurit intense et fatigue. ALAT et PAL élevées, anticorps antimitochondries (AMA M2) positifs. PBH : lésions inflammatoires des canaux biliaires interlobulaires, granulomes épithélioïdes, prolifération de néo-canalicules.\n\nLe stade histologique selon Scheuer est le plus probablement :",
    options: ["Stade 1", "Stade 2", "Stade 3", "Stade 4", "Stade 0"],
    correctAnswers: [1],
    explanation: "L'association de cholangite granulomateuse et de prolifération néo-canaliculaire correspond au stade 2 de Scheuer.",
    clinicalPearl: "CBP stade 2 de Scheuer = Prolifération néo-canaliculaire ductulaire."
  },
  {
    id: 'q-path-hep-c4-2',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 36,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : Le traitement médical de première ligne de la CBP est :",
    options: [
      "Corticothérapie",
      "Acide ursodésoxycholique (AUDC 13-15 mg/kg/j)",
      "Azathioprine",
      "Antiviraux directs",
      "Chélateurs du cuivre"
    ],
    correctAnswers: [1],
    explanation: "L'acide ursodésoxycholique (AUDC) à la dose de 13 à 15 mg/kg/j est le traitement de référence de la CBP.",
    clinicalPearl: "Traitement de 1ère intention de la CBP = Acide ursodésoxycholique (AUDC)."
  },
  {
    id: 'q-path-hep-c4-3',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 37,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : Le risque évolutif majeur en l'absence de traitement est :",
    options: ["CHC précoce", "Cirrhose biliaire secondaire", "Hépatite fulminante", "Stéatose massive", "Hémochromatose"],
    correctAnswers: [1],
    explanation: "La CBP non traitée évolue vers une fibrose progressive puis une cirrhose biliaire (stade 4 de Scheuer).",
    clinicalPearl: "Évolution de la CBP non traitée : Cirrhose biliaire micronodulaire."
  },

  // Cas 5
  {
    id: 'q-path-hep-c5-1',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 38,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Hépatocarcinome sur cirrhose : Patient de 65 ans, cirrhose VHC connue depuis 8 ans. Échographie : nodule de 4 cm dans le lobe droit. AFP = 450 ng/mL. PBH lésionnelle : architecture trabéculaire, cellules éosinophiles atypiques, perte de la trame réticulinique.\n\nQuel est le diagnostic ?",
    options: [
      "Adénome hépatocellulaire",
      "Cholangiocarcinome",
      "Carcinome hépatocellulaire (CHC)",
      "Métastase",
      "Hémangiome"
    ],
    correctAnswers: [2],
    explanation: "Nodule trabéculaire sur cirrhose avec AFP élevée et perte de la réticuline = Carcinome hépatocellulaire (CHC).",
    clinicalPearl: "Nodule sur cirrhose + AFP élevée + perte de réticuline = CHC."
  },
  {
    id: 'q-path-hep-c5-2',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 39,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Selon la classification pTNM, une tumeur solitaire de 4 cm sans invasion vasculaire est classée :",
    options: ["T1", "T2", "T3", "T4", "N1"],
    correctAnswers: [1],
    explanation: "Tumeur unique > 2 cm sans envahissement vasculaire macro/microscopique = Stade T2.",
    clinicalPearl: "T2 = Tumeur solitaire > 2 cm sans invasion vasculaire."
  },
  {
    id: 'q-path-hep-c5-3',
    courseId: 'crs-gastro-pathologie-hepatique',
    questionNumber: 40,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Le protocole de dépistage précoce du CHC chez tout patient cirrhotique repose sur :",
    options: [
      "PBH annuelle systématique",
      "Échographie abdominale et dosage de l'AFP tous les 6 mois",
      "IRM hépatique annuelle",
      "TDM thoracique",
      "Biopsie hépatique tous les 2 ans"
    ],
    correctAnswers: [1],
    explanation: "Échographie hépatique semestrielle couplée au dosage de l'alpha-fœtoprotéine chez tout cirrhotique.",
    clinicalPearl: "Dépistage du CHC sur cirrhose : Échographie + AFP tous les 6 mois."
  }
];

export const PATHOLOGIE_HEPATIQUE_RESOURCES: CourseResource[] = [
  {
    id: 'res-path-hep-mindmap',
    courseId: 'crs-gastro-pathologie-hepatique',
    type: 'Resume',
    title: "Carte Mentale : Pathologie Hépatique (Dr GUERMI, CHU Blida)",
    contentMarkdown: `## 🧠 Carte Mentale : Pathologie Hépatique
**Dr GUERMI – CHU Blida**

### 1. Moyens d'Étude & Lésions Élémentaires
- **PBH** : longueur minimale ≥ 1,5 cm (6 à 8 espaces portes).
- **Colorations spéciales** :
  - *Trichrome de Masson* : fibrose (collagène).
  - *Perls* : surcharge en fer (hémochromatose).
  - *Gordon-Sweet / Réticuline* : architecture trabéculaire, détruite dans le CHC.
  - *PAS / diastase* : glycogène et inclusions d'α1-antitrypsine.
- **Lésions élémentaires** : stéatose (macro/micro), ballonisation, corps de Councilman (apoptose), corps de Mallory (filaments de cytokératine), nécrose d'interface (piece meal), nécrose en pont (bridging).

### 2. Scores & Classifications
- **Metavir (Hépatites virales)** :
  - Activité A (A0 = nulle, A1 = minime, A2 = modérée, A3 = sévère).
  - Fibrose F (F0 = pas de fibrose, F1 = portale sans septa, F2 = portale avec quelques septa, F3 = septale sans cirrhose, F4 = cirrhose).

### 3. Principales Hépatopathies
- **Hépatite B** : Hépatocytes en verre dépoli (ground glass Ag HBs), noyaux sableux (Ag HBc).
- **Hépatite C** : Amas lymphoïdes portes avec centres germinatifs, stéatose macro-vacuolaire.
- **Maladie alcoolique** : Stéatose macro-vacuolaire, corps de Mallory, infiltrat à PNN, fibrose périsinusoïdale.
- **NASH** : Stéatose + ballonisation + corps de Mallory + fibrose périsinusoïdale sur terrain métabolique.
- **Cholangite biliaire primitive (CBP)** : Cholangite destructrice non suppurative, prolifération néo-canaliculaire, AMA M2 positifs.
- **Hépatocarcinome (CHC)** : Se développe sur cirrhose (80-90%), architecture trabéculaire désorganisée avec perte de réticuline. Dépistage semestriel par échographie + AFP.`,
    author: 'Dr GUERMI'
  },
  {
    id: 'res-path-hep-mnemo',
    courseId: 'crs-gastro-pathologie-hepatique',
    type: 'Astuce',
    title: "Mnémotechniques : Pathologie Hépatique",
    contentMarkdown: `### 💡 Astuces & Mnémotechniques Clés (Dr GUERMI)

1. **Score METAVIR (« A comme Attaque, F comme Fibrose »)** :
   - A0 à A3 : Activité inflammatoire
   - F0 : Zéro fibrose
   - F1 : Uniquement portale
   - F2 : Quelques septa
   - F3 : Septa étendus
   - F4 : Cirrhose

2. **VHB (« G&N »)** :
   - **G**round glass = Ag HBs dans le cytoplasme
   - **N**oyaux sableux = Ag HBc dans le noyau

3. **Colorations (« Pas de Fer sans Perls »)** :
   - Perls = Fer
   - Masson = Collagène (fibrose)
   - Gordon-Sweet = Réticuline

4. **Dépistage CHC (« 6 mois pour 6 cm »)** :
   - Échographie + AFP tous les **6 mois** chez tout patient cirrhotique`,
    author: 'Dr GUERMI'
  }
];
