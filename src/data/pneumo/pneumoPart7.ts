import { Question, CourseResource } from '../../types/medical';

// Lesson 12: Pneumopathies Infiltrantes Diffuses (PID)
export const PNEUMO_LESSON_12_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-12-01',
    courseId: 'crs-pneumo-12',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q1. Concernant la définition générale des PID :",
    options: [
      "a) Elles regroupent moins de 50 pathologies distinctes.",
      "b) Leur présentation clinique est obligatoirement chronique.",
      "c) À l'imagerie, on retrouve typiquement des opacités diffuses, bilatérales et symétriques.",
      "d) Le terme \"pneumopathies interstitielles diffuses\" est toujours préférable à \"pneumopathies infiltrantes diffuses\".",
      "e) Elles peuvent avoir une étiologie inconnue."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : c), e).\nExplication : Les PID forment un groupe hétérogène de PLUS de 200 affections (a faux). Leur présentation peut être aiguë, subaiguë ou chronique (b faux). Leur signature scannographique typique est bien celle d'opacités diffuses, bilatérales et symétriques (c vrai). Le terme \"infiltrantes\" est préféré car l'atteinte peut toucher non seulement l'interstitium mais aussi les espaces alvéolaires, les voies aériennes et les vaisseaux (d faux). Une part importante des PID, comme les PID idiopathiques, a une étiologie inconnue (e vrai)."
  },
  {
    id: 'q-pnm-12-02',
    courseId: 'crs-pneumo-12',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q2. Les conséquences physiopathologiques de l'épaississement de la barrière alvéolo-capillaire dans les PID incluent :",
    options: [
      "a) Une augmentation de la capacité de diffusion du CO.",
      "b) Une hypoxie avec hypocapnie fréquente aux gaz du sang.",
      "c) Un syndrome restrictif pur constant.",
      "d) Une hypertension artérielle pulmonaire (HTAP) possible à long terme.",
      "e) Une majoration du risque de pneumothorax."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b), d).\nExplication : L'épaississement de la barrière altère la diffusion des gaz, notamment de l'oxygène, entraînant une hypoxie. L'hypocapnie est fréquente en raison de l'hyperventilation alvéolaire compensatrice (b vrai). Le syndrome restrictif est fréquent mais pas constant ; certaines PID (histiocytose, silicose) peuvent avoir une composante obstructive (c faux). L'hypoxie chronique est un puissant vasoconstricteur pulmonaire, menant à long terme à une HTAP et une insuffisance ventriculaire droite (d vrai). Le risque de pneumothorax est spécifique à certaines PID kystiques (LAM), pas une conséquence générale de l'épaississement de la barrière (e faux)."
  },
  {
    id: 'q-pnm-12-03',
    courseId: 'crs-pneumo-12',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q3. Une PID aiguë (début < 3 semaines) évoque PRIORITAIREMENT :",
    options: [
      "a) Une fibrose pulmonaire idiopathique.",
      "b) Une pneumopathie d'hypersensibilité aiguë.",
      "c) Une pneumonie aiguë communautaire sévère.",
      "d) Un œdème aigu du poumon cardiogénique.",
      "e) Un syndrome de détresse respiratoire aiguë (SDRA)."
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Correction : c), d), e).\nExplication : La démarche face à une PID aiguë est une urgence visant à éliminer des causes rapidement mortelles. Les pneumonies sévères, l'œdème pulmonaire cardiogénique et le SDRA en sont les principales étiologies (c, d, e vrais). La FPI est une maladie chronique (a faux). La pneumopathie d'hypersensibilité peut être subaiguë, mais son tableau typique aigu (fièvre, dyspnée post-exposition) est moins fréquent que les causes infectieuses ou hémodynamiques en première intention (b moins prioritaire)."
  },
  {
    id: 'q-pnm-12-04',
    courseId: 'crs-pneumo-12',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q4. Parmi les PID suivantes, lesquelles sont classées parmi les PID idiopathiques majeures ?",
    options: [
      "a) Sarcoïdose.",
      "b) Fibrose pulmonaire idiopathique (FPI).",
      "c) Pneumopathie interstitielle non spécifique (PINS) idiopathique.",
      "d) Pneumopathie organisée cryptogénique (POC).",
      "e) Pneumopathie d'hypersensibilité."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : b), c).\nExplication : Les PID idiopathiques majeures regroupent les PID fibrosantes chroniques d'origine inconnue. La FPI (b) et la PINS idiopathique (c) en font partie. La sarcoïdose (a) est une granulomatose. La POC (d) fait partie des PID idiopathiques mais n'est pas classée parmi les \"majeures\" dans ce cours. La pneumopathie d'hypersensibilité (e) a une cause allergique identifiée (étiologie connue)."
  },
  {
    id: 'q-pnm-12-05',
    courseId: 'crs-pneumo-12',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q5. À l'interrogatoire d'un patient suspect de PID, il est ESSENTIEL de rechercher :",
    options: [
      "a) La consommation de thé à la menthe.",
      "b) Une prise médicamenteuse (ex : amiodarone, chimiothérapie).",
      "c) Une exposition professionnelle aux poussières minérales ou organiques.",
      "d) Des antécédents de pathologie auto-immune (connectivite).",
      "e) La présence d'animaux domestiques, notamment d'oiseaux."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : b), c), d), e).\nExplication : L'interrogatoire est crucial pour orienter l'étiologie. Les médicaments (b) et les expositions professionnelles/environnementales (c, e) sont des causes fréquentes de PID secondaires. Les connectivites (d) sont une étiologie systémique majeure. La consommation alimentaire courante (a) n'est pas un facteur de risque établi."
  },
  {
    id: 'q-pnm-12-06',
    courseId: 'crs-pneumo-12',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q6. L'hippocratisme digital est un signe clinique particulièrement évocateur de :",
    options: [
      "a) Sarcoïdose débutante.",
      "b) Fibrose pulmonaire idiopathique (FPI).",
      "c) Pneumopathie d'hypersensibilité chronique.",
      "d) Histiocytose X.",
      "e) Œdème pulmonaire aigu."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\nExplication : L'hippocratisme digital est un signe classique mais non pathognomonique des fibroses pulmonaires chroniques, notamment de la FPI où il est très fréquent. Il est rare dans la sarcoïdose (a), les pneumopathies d'hypersensibilité (c) et l'histiocytose X (d). Il n'a pas de lien avec un œdème pulmonaire aigu (e)."
  },
  {
    id: 'q-pnm-12-07',
    courseId: 'crs-pneumo-12',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q7. Quel examen est considéré comme la \"pierre angulaire\" du diagnostic positif et du bilan lésionnel des PID ?",
    options: [
      "a) La radiographie thoracique standard.",
      "b) Le scanner thoracique haute résolution (THR).",
      "c) La scintigraphie pulmonaire de ventilation/perfusion.",
      "d) La bronchoscopie avec lavage broncho-alvéolaire (LBA).",
      "e) Les épreuves fonctionnelles respiratoires (EFR)."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\nExplication : Le scanner thoracique haute résolution (THR) permet une analyse fine du parenchyme pulmonaire. Il est indispensable pour caractériser le pattern lésionnel (verre dépoli, réticulations, rayon de miel, kystes), d'orienter fortement le diagnostic étiologique (ex : distribution périphérique et basale en rayon de miel pour la FPI) et d'évaluer l'étendue. Les autres examens sont complémentaires mais non aussi déterminants seuls."
  },
  {
    id: 'q-pnm-12-08',
    courseId: 'crs-pneumo-12',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q8. Sur un THR, un aspect en \"rayon de miel\" est typiquement associé à :",
    options: [
      "a) Un stade précoce et réversible de toute PID.",
      "b) La sarcoïdose ganglionnaire isolée.",
      "c) La fibrose pulmonaire idiopathique évoluée.",
      "d) Un œdème alvéolaire.",
      "e) La bronchiolite aiguë."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : Le \"rayon de miel\" décrit des petites cavités kystiques de quelques millimètres à un centimètre, disposées en couches, correspondant à une destruction et une fibrose avancées du parenchyme. C'est un signe de mauvais pronostic, caractéristique (mais pas exclusif) de la FPI évoluée. C'est un stade tardif et irréversible (a faux). Il n'est pas vu dans les pathologies purement ganglionnaires (b), alvéolaires (d) ou bronchiolaires (e)."
  },
  {
    id: 'q-pnm-12-09',
    courseId: 'crs-pneumo-12',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q9. Concernant le lavage broncho-alvéolaire (LBA) dans le bilan des PID :",
    options: [
      "a) Sa cellularité normale montre une prédominance de macrophages (>80%).",
      "b) Une lymphocytose >30% est très en faveur d'une pneumopathie d'hypersensibilité ou d'une sarcoïdose.",
      "c) Une neutrophilie marquée est typique de la fibrose pulmonaire idiopathique active.",
      "d) Il permet toujours un diagnostic histologique définitif.",
      "e) Il est systématiquement indiqué devant toute suspicion de PID."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a), b), c).\nExplication : La cellularité normale du LBA est dominée par les macrophages alvéolaires (a vrai). Une lymphocytose élevée oriente vers une alvéolite à lymphocytes, évoquant une pneumopathie d'hypersensibilité ou une sarcoïdose (b vrai). Dans la FPI, on trouve souvent une alvéolite à neutrophiles (et/ou éosinophiles) (c vrai). Le LBA fournit une cytologie, pas une histologie (d faux) ; pour cela, il faut une biopsie. Il n'est pas systématique mais orienté par la clinique et le scanner (e faux)."
  },
  {
    id: 'q-pnm-12-10',
    courseId: 'crs-pneumo-12',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q10. La présence de granulomes épithélioïdes et giganto-cellulaires sans nécrose caséeuse sur une biopsie est caractéristique de :",
    options: [
      "a) Tuberculose.",
      "b) Sarcoïdose.",
      "c) Silicose.",
      "d) Histiocytose X.",
      "e) Vascularite à ANCA."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\n*Explication : C'est la définition histologique classique du granulome sarcoidosique. La tuberculose (a) présente une nécrose caséeuse centrale. La silicose (c) présente des granulomes avec particules biréfringentes. L'histiocytose X (d) montre des cellules de Langerhans CD1a+. La vascularite à ANCA (e) montre une inflammation nécrosante des parois vasculaires.*"
  },
  {
    id: 'q-pnm-12-11',
    courseId: 'crs-pneumo-12',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q11. Parmi les propositions suivantes, laquelle(s) est/sont une cause professionnelle (pneumoconiose) de PID ?",
    options: [
      "a) Poumon de fermier.",
      "b) Asbestose.",
      "c) Poumon d'éleveur d'oiseaux.",
      "d) Silicose.",
      "e) Bérylliose."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : b), d), e).\nExplication : Les pneumoconioses sont dues à l'inhalation de poussières MINÉRALES. L'asbestose (amiante) (b), la silicose (silice) (d) et la bérylliose (e) en sont. Le \"poumon de fermier\" (a) et le \"poumon d'éleveur d'oiseaux\" (c) sont des pneumopathies d'hypersensibilité dues à des antigènes ORGANIQUES (moisissures, protéines d'oiseaux)."
  },
  {
    id: 'q-pnm-12-12',
    courseId: 'crs-pneumo-12',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q12. Quel bilan immunologique serait le plus pertinent face à une PID suspectée d'être une complication d'une connectivite ?",
    options: [
      "a) Dosage des précipitines sériques.",
      "b) Recherche d'Ac anti-ADN natif.",
      "c) Dosage de l'enzyme de conversion de l'angiotensine (ECA).",
      "d) Recherche du facteur rhumatoïde et d'Ac anti-CCP.",
      "e) Sérodiagnostic du HIV."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b), d).\nExplication : En cas de suspicion de lupus, la recherche d'Ac anti-ADN natif (b) est très spécifique. Pour la polyarthrite rhumatoïde, on recherche le facteur rhumatoïde et les Ac anti-CCP (d). Les précipitines (a) orientent vers une pneumopathie d'hypersensibilité. L'ECA (c) peut être élevée dans la sarcoïdose. La sérologie HIV (e) est recherchée en contexte d'immunodépression."
  },
  {
    id: 'q-pnm-12-13',
    courseId: 'crs-pneumo-12',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q13. Dans la fibrose pulmonaire idiopathique (FPI) :",
    options: [
      "a) La corticothérapie à fortes doses est le traitement de première intention recommandé.",
      "b) La pirfénidone et le nintedanib ont prouvé leur efficacité pour ralentir le déclin de la fonction respiratoire.",
      "c) Le traitement curatif définitif est la transplantation pulmonaire.",
      "d) Le LBA montre habituellement une lymphocytose marquée.",
      "e) Le scanner thoracique montre typiquement des lésions à prédominance périphérique et basale."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : b), c), e).\nExplication : La FPI est résistante aux corticoïdes et immunosuppresseurs (a faux). Deux médicaments anti-fibrosants, la pirfénidone et le nintedanib, ont une AMM pour ralentir la progression (b vrai). La seule option curative est la greffe pulmonaire (c vrai). Le LBA montre plutôt une neutrophilie (d faux). Le scanner montre un pattern UIP (Usual Interstitial Pneumonia) caractéristique : réticulations, rayon de miel, prédominants en périphérie et aux bases (e vrai)."
  },
  {
    id: 'q-pnm-12-14',
    courseId: 'crs-pneumo-12',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q14. Une dyspnée aiguë avec fièvre et toux survenant 4 à 8h après le nettoyage d'un pigeonnier fait évoquer :",
    options: [
      "a) Une pneumonie bactérienne.",
      "b) Une exacerbation aiguë de BPCO.",
      "c) Une pneumopathie d'hypersensibilité aiguë (alvéolite allergique extrinsèque).",
      "d) Une embolie pulmonaire.",
      "e) Un asthme aigu grave."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : Le délai court et stéréotypé après l'exposition à un allergène connu (déjections d'oiseaux) est caractéristique de la forme aiguë de pneumopathie d'hypersensibilité. Les autres diagnostics sont possibles mais moins en lien direct avec l'exposition décrite."
  },
  {
    id: 'q-pnm-12-15',
    courseId: 'crs-pneumo-12',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q15. Le syndrome restrictif aux EFR dans les PID est défini par :",
    options: [
      "a) Une augmentation de la CV et de la CPT.",
      "b) Une réduction de la CV et de la CPT avec un rapport VEMS/CV normal ou augmenté.",
      "c) Une réduction isolée du VEMS.",
      "d) Une augmentation du volume résiduel (VR).",
      "e) Une obstruction des voies aériennes distales."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\nExplication : Le syndrome restrictif pur se définit par une diminution de la capacité vitale (CV) et de la capacité pulmonaire totale (CPT). Le rapport VEMS/CV, indice d'obstruction, est préservé (normal) ou même augmenté car le VEMS baisse proportionnellement moins que la CV. Les autres options décrivent une obstruction (c, e) ou des variations opposées à la restriction (a, d)."
  },
  {
    id: 'q-pnm-12-16',
    courseId: 'crs-pneumo-12',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q16. Quelle PID est particulièrement associée au tabagisme chez l'adulte jeune ?",
    options: [
      "a) Proteinose alvéolaire.",
      "b) Histiocytose X (à cellules de Langerhans).",
      "c) Sarcoïdose.",
      "d) Fibrose pulmonaire idiopathique.",
      "e) Pneumopathie organisée cryptogénique."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\nExplication : L'histiocytose X pulmonaire survient presque exclusivement chez les fumeurs, typiquement entre 20 et 40 ans. Le tabac est un facteur de risque majeur. Les autres pathologies ont des liens moins exclusifs ou directs avec le tabac."
  },
  {
    id: 'q-pnm-12-17',
    courseId: 'crs-pneumo-12',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q17. Un patient présente une toux sèche, des crépitants velcro, un hippocratisme digital et un THR montrant un rayon de miel prédominant aux bases. Le LBA montre une neutrophilie. Le diagnostic le plus probable est :",
    options: [
      "a) Sarcoïdose.",
      "b) Pneumopathie d'hypersensibilité.",
      "c) Fibrose pulmonaire idiopathique.",
      "d) Pneumopathie à éosinophiles.",
      "e) Lupus érythémateux systémique."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : La triade clinico-radiologique (symptômes chroniques, crépitants velcro, hippocratisme, rayon de miel baso-périphérique) est hautement évocatrice de FPI. La neutrophilie au LBA est un élément d'appoint fréquent dans la FPI."
  },
  {
    id: 'q-pnm-12-18',
    courseId: 'crs-pneumo-12',
    type: 'QCM',
    questionNumber: 18,
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q18. Dans la prise en charge non spécifique des PID, la réhabilitation respiratoire :",
    options: [
      "a) Est contre-indiquée en cas d'hypoxémie.",
      "b) Se limite au réentraînement à l'effort musculaire.",
      "c) Inclut la kinésithérapie, le soutien psychosocial et l'éducation.",
      "d) Est réservée aux patients en attente de transplantation.",
      "e) N'a aucun impact sur la qualité de vie."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : La réhabilitation respiratoire est une prise en charge globale, multidisciplinaire, qui comprend le réentraînement à l'effort, la kinésithérapie, l'éducation thérapeutique, le soutien psychologique et nutritionnel (c vrai). Elle n'est pas contre-indiquée par l'hypoxémie, qui doit être corrigée par l'oxygène si nécessaire (a faux). Elle est bénéfique à de nombreux stades de la maladie et améliore la tolérance à l'effort et la qualité de vie (b, d, e faux)."
  },
  {
    id: 'q-pnm-12-19',
    courseId: 'crs-pneumo-12',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q19. La lymphangite carcinomateuse :",
    options: [
      "a) Est une cause fréquente de PID aiguë fébrile.",
      "b) Se présente radiologiquement par un épaississement des septa interlobulaires avec présence de nodules.",
      "c) Est une complication de dissémination métastatique intra-lymphatique d'un cancer (sein, poumon, estomac...).",
      "d) Répond bien à la corticothérapie.",
      "e) Donne typiquement un LBA hémorragique."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : b), c).\nExplication : C'est une cause de PID subaiguë/chronique, généralement non fébrile (a faux). Son aspect scannographique typique est un épaississement septal régulier ou nodulaire (b vrai). Elle correspond à une infiltration des lymphatiques pulmonaires par des cellules cancéreuses (c vrai). Elle ne répond pas aux corticoïdes mais à la chimiothérapie du cancer primitif si possible (d faux). Le LBA peut être normal ou montrer des cellules tumorales, mais n'est pas typiquement hémorragique (e faux)."
  },
  {
    id: 'q-pnm-12-20',
    courseId: 'crs-pneumo-12',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q20. Quel traitement est spécifiquement indiqué dans les formes légères à modérées de FPI ?",
    options: [
      "a) Cyclophosphamide per os.",
      "b) Prednisone à 1 mg/kg/j.",
      "c) Azathioprine.",
      "d) Pirfénidone.",
      "e) Rituximab."
    ],
    correctAnswers: [3],
    explanation: "Correction : d).\nExplication : La pirfénidone est, avec le nintedanib, un des deux traitements anti-fibrosants ayant une AMM spécifique pour la FPI. Les corticoïdes seuls (b) ou en association avec l'azathioprine ou le cyclophosphamide (a, c) ne sont plus recommandés dans la FPI (inefficaces et potentiellement nocifs). Le rituximab (e) n'a pas d'indication dans la FPI."
  },
  {
    id: 'q-pnm-12-21',
    courseId: 'crs-pneumo-12',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q21. Une hypercalcémie associée à une PID peut orienter vers :",
    options: [
      "a) Une tuberculose.",
      "b) Une sarcoïdose.",
      "c) Une métastase osseuse.",
      "d) Une hyperparathyroïdie primitive.",
      "e) Une intoxication à la vitamine D."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\nExplication : Dans le contexte d'une PID, l'association à une hypercalcémie (et/ou une hypercalciurie) est très évocatrice de sarcoïdose, due à une production extra-rénale de calcitriol par les macrophages des granulomes. Les autres causes d'hypercalcémie existent mais ne sont pas intrinsèquement liées à une maladie pulmonaire infiltrante."
  },
  {
    id: 'q-pnm-12-22',
    courseId: 'crs-pneumo-12',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q22. Le diagnostic positif de pneumopathie d'hypersensibilité repose sur :",
    options: [
      "a) La seule présence d'anticorps précipitants sériques.",
      "b) L'association d'un tableau clinique évocateur, d'une notion d'exposition, d'images compatibles au scanner et souvent d'une lymphocytose au LBA.",
      "c) Une biopsie pulmonaire chirurgicale systématique.",
      "d) La négativité de tous les autres diagnostics.",
      "e) La réponse systématique et complète à la corticothérapie."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\n*Explication : Le diagnostic est présomptif, reposant sur un ensemble d'arguments convergents : contexte d'exposition, tableau clinique, images de verre dépoli/petits nodules mal définis en scanner, et LBA montrant une lymphocytose souvent marquée (>30%). Les précipitines (a) sont un argument mais pas suffisants seuls (peuvent être présentes chez des exposés asymptomatiques). La biopsie (c) n'est pas systématique.*"
  },
  {
    id: 'q-pnm-12-23',
    courseId: 'crs-pneumo-12',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q23. Quelles sont les lésions élémentaires directes observables au THR dans les PID ?",
    options: [
      "a) Nodules.",
      "b) Verre dépoli.",
      "c) Hyperclartés.",
      "d) Épanchement pleural.",
      "e) Rayon de miel."
    ],
    correctAnswers: [0, 1, 4],
    explanation: "Correction : a), b), e).\nExplication : Les lésions élémentaires directes du parenchyme dans les PID sont : les nodules (a), le verre dépoli (b), les lignes/réticulations, les images kystiques/le rayon de miel (e), et les consolidations. Les hyperclartés (c) et l'épanchement pleural (d) sont des signes associés ou indirects."
  },
  {
    id: 'q-pnm-12-24',
    courseId: 'crs-pneumo-12',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q24. Une PID chez un patient sous amiodarone pour une arythmie cardiaque évoque :",
    options: [
      "a) Une pneumopathie médicamenteuse à l'amiodarone.",
      "b) Une pneumopathie infectieuse opportuniste.",
      "c) Une insuffisance cardiaque gauche décompensée.",
      "d) Une embolie pulmonaire.",
      "e) Une pathologie nécessitant l'arrêt immédiat du médicament suspect après évaluation bénéfice/risque."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : a), c), e).\nExplication : L'amiodarone est une cause classique de pneumopathie infiltrante médicamenteuse (a vrai). Cependant, il ne faut pas méconnaître une cause cardiogénique (œdème) chez ce patient cardiaque (c vrai). La décision d'arrêt du médicament est cruciale mais doit être prise en concertation cardiologique, en pesant le risque de l'arythmie contre celui de la pneumopathie (e vrai). Les autres diagnostics (b, d) sont possibles mais moins directement liés au traitement."
  },
  {
    id: 'q-pnm-12-25',
    courseId: 'crs-pneumo-12',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q25. Quelle affirmation sur la transplantation pulmonaire dans les PID est VRAIE ?",
    options: [
      "a) C'est le traitement de première intention de la FPI.",
      "b) Elle est indiquée dans les PID évoluées réfractaires au traitement médical, sous réserve de l'état général et de l'âge du patient.",
      "c) Elle guérit toujours définitivement la maladie sous-jacente.",
      "d) Elle n'est réalisable qu'en dehors de l'Algérie.",
      "e) Elle nécessite une corticothérapie à vie après l'intervention."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\nExplication : La transplantation est une option de dernier recours pour les stades avancés, quand le traitement médical est inefficace et que le pronostic vital est engagé à court terme. La sélection des patients est stricte (âge, comorbidités) (b vrai). Ce n'est pas un traitement de première intention (a faux). Elle ne \"guérit\" pas la maladie mais remplace l'organe malade, avec un risque de récidive sur le greffon dans certaines maladies (c faux). Elle est réalisable dans des centres spécialisés, y compris potentiellement en Algérie ou à l'étranger selon les accords (d faux). L'immunosuppression post-greffe est à vie, mais pas forcément une corticothérapie à forte dose (e faux)."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-12-c1-1',
    courseId: 'crs-pneumo-12',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : L'Agriculteur Essoufflé\nM. B., 52 ans, agriculteur, consulte pour une dyspnée d'effort et une toux sèche évoluant depuis 4 mois. Il rapporte des épisodes fébriles transitoires avec majoration de la dyspnée les jours où il manipule du foin stocké dans son grenier. À l'auscultation : crépitants fins aux deux bases. THR : micronodules centro-lobulaires diffus et plages de verre dépoli.\n\nQ1. Le diagnostic le plus probable est :",
    options: [
      "a) Fibrose pulmonaire idiopathique.",
      "b) Bronchopneumopathie chronique obstructive (BPCO).",
      "c) Pneumopathie d'hypersensibilité subaiguë (poumon de fermier).",
      "d) Sarcoïdose.",
      "e) Tuberculose."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : Le lien temporel entre l'exposition (foin moisi) et les symptômes, associé au tableau subaigu et au scanner évoquant une alvéolite, est typique d'une pneumopathie d'hypersensibilité. La FPI n'a pas ce lien avec l'exposition ni les épisodes fébriles. La BPCO aurait typiquement un tabagisme et un syndrome obstructif. La sarcoïdose peut donner des nodules mais souvent avec atteinte ganglionnaire. La TB est moins compatible avec la chronicité et les épisodes récidivants liés à l'exposition."
  },
  {
    id: 'q-pnm-12-c2-1',
    courseId: 'crs-pneumo-12',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : La Tousseuse Digitale\nMme K., 68 ans, non fumeuse, présente depuis 1 an une dyspnée progressive et une toux sèche. Pas d'exposition professionnelle notable. Examen : hippocratisme digital net, crépitants secs \"velcro\" jusqu'aux apex. THR : Réticulations et images en rayon de miel prédominant en périphérie et aux bases pulmonaires. LBA : neutrophilie à 15%.\n\nQ1. Quel est le diagnostic le plus probable ?",
    options: [
      "a) Pneumopathie interstitielle desquamative liée au tabac.",
      "b) Fibrose pulmonaire idiopathique.",
      "c) Sclérodermie systémique sans signes cutanés.",
      "d) Pneumopathie organisée cryptogénique.",
      "e) Histiocytose X."
    ],
    correctAnswers: [1],
    explanation: "Correction : b).\nExplication : Le tableau est archétypique de la FPI : âge >60 ans, début insidieux, hippocratisme digital, crépitants velcro, et scanner montrant un pattern UIP (lésions basales et périphériques avec rayon de miel). La neutrophilie au LBA est un argument supplémentaire. L'absence de tabagisme écarte a et e. La sclérodermie (c) est possible (\"pneumopathie interstitielle associée aux connectivites\") mais le scanner typique UIP et l'absence de tout autre signe de connectivite orientent d'abord vers une FPI. La POC (d) se présente par des consolidations, pas un rayon de miel."
  },
  {
    id: 'q-pnm-12-c3-1',
    courseId: 'crs-pneumo-12',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : L'Artisan Épuisé\nM. S., 45 ans, tailleur de pierre depuis 20 ans, consulte pour asthénie, amaigrissement et dyspnée d'effort. Pas de fièvre. Radiographie thoracique : opacités nodulaires bilatérales prédominant aux lobes supérieurs, avec adénopathies hilaires bilatérales calcifiées en \"coquille d'œuf\".\n\nQ1. Quelle est l'étiologie la plus vraisemblable ?",
    options: [
      "a) Sarcoïdose.",
      "b) Tuberculose.",
      "c) Silicose.",
      "d) Cancer bronchique.",
      "e) Histiocytose X."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : L'exposition professionnelle prolongée à la silice (tailleur de pierre) est le facteur clé. L'imagerie avec nodules, fibrose upper zone et adénopathies hilaires calcifiées (aspect typique en \"coquille d'œuf\") est caractéristique d'une silicose compliquée. La sarcoïdose donne aussi des adénopathies mais rarement calcifiées de cette façon. La TB est à éliminer mais l'aspect radiologique et l'absence de fièvre sont moins typiques."
  },
  {
    id: 'q-pnm-12-c4-1',
    courseId: 'crs-pneumo-12',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : La Jeune Fumeuse Toussive\nMlle A., 32 ans, fumeuse à 20 PA, consulte pour toux et dyspnée. THR : Présence de multiples kystes aux parois fines, de tailles variées, prédominant aux lobes moyen et supérieurs, épargnant les bases. Pas de rayon de miel.\n\nQ1. Quelle hypothèse diagnostique est prioritaire ?",
    options: [
      "a) Fibrose pulmonaire idiopathique.",
      "b) Lymphangioléiomyomatose (LAM).",
      "c) Histiocytose X pulmonaire.",
      "d) Bronchectasies.",
      "e) Syndrome de Gougerot-Sjögren."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : Le terrain (jeune adulte fumeur) et l'aspect scannographique (kystes de taille variable, répartition prédominant aux lobes supérieurs/moyens) sont très évocateurs d'histiocytose X (Langerhans cell histiocytosis). La LAM (b) touche presque exclusivement les femmes en âge de procréer, mais les kystes sont généralement plus réguliers et diffus. La FPI (a) donne un rayon de miel, pas des kystes isolés, et chez des patients plus âgés. Les bronchectasies (d) ont un aspect en rails ou en bagues."
  },
  {
    id: 'q-pnm-12-c5-1',
    courseId: 'crs-pneumo-12',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Dyspnée et Éruption\nMme D., 40 ans, présente une dyspnée d'installation subaiguë, une arthralgie des poignets et une éruption malaire photosensible. THR : Plages de verre dépoli bilatérales. Biologie : Anticorps anti-ADN natif positifs.\n\nQ1. Quel est le lien le plus probable entre la pneumopathie et la symptomatologie ?",
    options: [
      "a) Coïncidence entre une FPI et un lupus.",
      "b) Pneumopathie médicamenteuse.",
      "c) Atteinte pulmonaire d'une connectivite (Lupus érythémateux systémique).",
      "d) Pneumonie à Pneumocystis jirovecii sur terrain immunodéprimé.",
      "e) Sarcoïdose avec manifestations articulaires et cutanées."
    ],
    correctAnswers: [2],
    explanation: "Correction : c).\nExplication : La combinaison d'une PID (verre dépoli) avec des signes systémiques évocateurs (arthralgies, éruption malaire) et la présence d'un auto-anticorps très spécifique (anti-ADN) établit le diagnostic de lupus érythémateux systémique avec atteinte pulmonaire interstitielle. Ce n'est pas une coïncidence (a) mais une manifestation systémique. La pneumocystose (d) est possible sur lupus, mais l'image de verre dépoli n'est pas spécifique et le contexte oriente d'abord vers l'atteinte lupique elle-même."
  }
];

export const PNEUMO_LESSON_12_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-12-mindmap',
    courseId: 'crs-pneumo-12',
    type: 'Resume',
    title: 'Carte Mentale Synthétique : PID',
    contentMarkdown: `### PNEUMOPATHIES INFILTRANTES DIFFUSES (PID)

├── **DÉFINITION**
│   └── Groupe >200 maladies → Opacités diffuses bilatérales (Scanner)
│
├── **PHYSIOPATHOLOGIE**
│   └── Infiltration (Cellules/Fibrose) → Épaiss. barrière alvéolo-capillaire
│       ├── Troubles diffusion → Hypoxie/Hypocapnie
│       ├── Syndrome restrictif (++), parfois obstructif (Histiocytose, Silicose)
│       └── Évolution → Insuff. Resp. Chronique (HTAP, Coeur pulmonaire)
│
├── **APPROCHE DIAGNOSTIQUE (Clé : Aiguë vs Chronique)**
│   ├── **PID AIGUË (<3 sem)** : URGENCE → Causes : Infectieuses (PAC), Œdème pulmonaire, SDRA
│   └── **PID Subaiguë/Chronique** : BILAN ÉTIOLOGIQUE COMPLET
│       ├── Clinique/Interro : Début, ATCD, Médicaments, Exposition (Pro/Animaux), Signes extra-respiratoires (Connectivite)
│       ├── Examens clés :
│       │   ├── THORACIQUE : **Scanner Thoracique HR** (Pierre angulaire)
│       │   ├── FONCTIONNEL : EFR (Syndrome restrictif), Gaz du sang
│       │   ├── BIOLOGIE : NFS/CRP, Auto-Ac (Connectivites), Précipitines (PHS), ECA (Sarcoïdose)
│       │   ├── LBA : Cytologie (Lympho↑=PHS/Sarco; Neutro↑=FPI)
│       │   └── BIOPSIE : Transbronchique ou chirurgicale si nécessaire
│       └── Signes d'Orientation :
│           ├── Hippocratisme + Crépitants Velcro → FPI
│           ├── Exposition + Délai → PHS
│           ├── Signes systémiques → Connectivite, Sarcoïdose
│           └── Terrain (Jeune fumeur, Femme…) → Histiocytose, LAM…
│
├── **ÉTIOLOGIES PRINCIPALES**
│   ├── **PID Idiopathiques** : FPI (UIP), PINS, POC…
│   ├── **Granulomatoses** : Sarcoïdose (25%), Histiocytose X (fumeur)
│   ├── **PHS** : Poumon de fermier/éleveur d'oiseaux
│   ├── **Toxiques** : Pneumoconioses (Silicose, Asbestose), Médicaments (Amiodarone…)
│   ├── **Systémiques** : Connectivites (PR, Sclérodermie, LES…)
│   └── **Autres** : LAM, Protéinose, Lymphangite carcinomateuse…
│
└── **TRAITEMENT**
    ├── Symptomatique : Oxygène, Réhabilitation, Traitement des surinfections
    ├── Étiologique : Éviction (PHS, Toxiques), Corticoïdes/Immunosuppresseurs
    ├── **Anti-fibrosants** (FPI) : Pirfénidone, Nintedanib
    └── Curatif ultime : Transplantation pulmonaire (FPI avancée)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'PID', 'FPI', 'PHS']
  },
  {
    id: 'res-pnm-12-astuces',
    courseId: 'crs-pneumo-12',
    type: 'Astuce',
    title: 'Astuces et Mnémotechniques : PID',
    contentMarkdown: `### Astuces et Mnémotechniques
1. **"PID Aiguë = AÏE !"** : Aiguë = Urgence. Pensez aux 3 Grandes Causes : **I**nfection sévère, **O**Edème pulmonaire, **S**DRA. (I-O-S → "J'ai osé" l'urgence).
2. **Scanner PID : Les 5 Lésions Élémentaires : NVRaCK** :
   - **N**odules
   - **V**erre dépoli
   - **R**éticulations
   - **C**onsolidations
   - **K**ystes / Rayon de miel
   (NVRaCK → "Névraque", ça fait des lésions au poumon).
3. **FPI vs PHS au LBA** :
   - **FPI** = Fuite de Neutrophiles (Neutrophilie).
   - **PHS** = Plein de Lymphocytes (Lymphocytose > 30%).
4. **Causes Professionnelles** :
   - **MINÉRAL** → Pneumoconiose (Silicose, Asbestose).
   - **ORGANIQUE** → PHS (Poumon de fermier).
5. **Traitement FPI : Pirfénidone et Nintedanib** = *Pas de Ni corticoïdes !* (Pour retenir que ce sont les traitements spécifiques anti-fibrosants, pas les corticoïdes).
6. **Signes de FPI à l'interro/examen : VHB** :
   - **V**elcro
   - **H**ippocratisme
   - **B**ases.

---
*Allez, courage futurs toubibs ! Ces pathologies sont un puzzle diagnostic passionnant. Maîtrisez cette approche structurée (Aigu/Chronique → Scanner → Bilan étiologique) et ces quelques trucs, et vous serez des champions pour les exams et au lit du patient. Le poumon, c’est comme la météo en Algérie : parfois clair, parfois plein de sable (ou de verre dépoli !), mais avec les bons outils, on finit par tout déchiffrer. Bonne révision, et que la force clinique soit avec vous.*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'PID', 'FPI']
  }
];

// Lesson 13: Asthme bronchique
export const PNEUMO_LESSON_13_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-13-01',
    courseId: 'crs-pneumo-13',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Dans la physiopathologie de l’asthme, l’hyperréactivité bronchique est principalement liée à :",
    options: [
      "A. Une hypertrophie isolée du muscle lisse bronchique",
      "B. Une inflammation chronique des voies aériennes",
      "C. Une augmentation de la réponse adrénergique β2",
      "D. Une désquamation épithéliale sans infiltration cellulaire",
      "E. Une hypersécrétion exclusive de mucus"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : L’hyperréactivité bronchique (HRB) est la conséquence directe de l’inflammation chronique des voies aériennes, avec infiltration de cellules inflammatoires (notamment éosinophiles), œdème et libération de médiateurs. Les autres options sont des facteurs associés mais non primaires."
  },
  {
    id: 'q-pnm-13-02',
    courseId: 'crs-pneumo-13',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Le diagnostic positif d’asthme chez l’adulte repose sur :",
    options: [
      "A. La présence de sibilants à l’auscultation en dehors des crises",
      "B. Une spirométrie montrant un trouble ventilatoire obstructif réversible",
      "C. Une radiographie thoracique normale",
      "D. Des antécédents familiaux d’atopie",
      "E. Un test de provocation positif à la métacholine"
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E\n*Explication : La spirométrie avec test de réversibilité (gain du VEMS ≥ 12% et 200 mL post-bronchodilatateur) et le test de provocation bronchique sont des critères paracliniques majeurs. Les sibilants peuvent être absents en dehors des crises, et la radiographie sert surtout au diagnostic différentiel.*"
  },
  {
    id: 'q-pnm-13-03',
    courseId: 'crs-pneumo-13',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Le remodelage bronchique dans l’asthme est la conséquence à long terme de :",
    options: [
      "A. L’inflammation chronique non contrôlée",
      "B. Le bronchospasme aigu isolé",
      "C. L’hyperplasie des glandes mucipares",
      "D. La fibrose sous-épithéliale",
      "E. La dysrégulation du système nerveux autonome"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\nExplication : Le remodelage associe fibrose sous-épithéliale, hypertrophie du muscle lisse, hyperplasie des glandes à mucus et épaississement membranaire basale, résultant d’une inflammation persistante. Le bronchospasme seul est réversible."
  },
  {
    id: 'q-pnm-13-04',
    courseId: 'crs-pneumo-13',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. Parmi les facteurs déclenchants d’une crise d’asthme, on retrouve :",
    options: [
      "A. Les bêta-bloquants",
      "B. L’air chaud et humide",
      "C. Les AINS",
      "D. Le reflux gastro-œsophagien",
      "E. L’exercice en environnement froid et sec"
    ],
    correctAnswers: [0, 2, 3, 4],
    explanation: "Correction : A, C, D, E\nExplication : Les bêta-bloquants et les AINS (via la voie des leucotriènes) peuvent déclencher des crises. L’exercice en air froid/sec et le RGO (par réflexe vagal) sont aussi des facteurs reconnus. L’air chaud et humide est moins irritant."
  },
  {
    id: 'q-pnm-13-05',
    courseId: 'crs-pneumo-13',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Selon GINA 2022, le traitement de première intention d’un asthme intermittent avec symptômes < 2 fois/mois sans facteur de risque est :",
    options: [
      "A. SABA seul à la demande",
      "B. ICS à faible dose + SABA à la demande",
      "C. ICS-formotérol à faible dose à la demande",
      "D. ICS-LABA en entretien",
      "E. Antileucotriènes au long cours"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\n*Explication : GINA 2022 recommande l’ICS-formotérol à faible dose à la demande (Track 1) comme option préférée pour réduire le risque d’exacerbation, même dans l’asthme intermittent. Le SABA seul n’est plus recommandé en première intention.*"
  },
  {
    id: 'q-pnm-13-06',
    courseId: 'crs-pneumo-13',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Un patient asthmatique présente un DEP à 60% de sa valeur initiale après bronchodilatateur. La crise est classée :",
    options: [
      "A. Légère",
      "B. Modérée",
      "C. Sévère",
      "D. Aiguë grave",
      "E. Non significative"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\n*Explication : Selon les critères de sévérité, un DEP post-bronchodilatateur entre 60% et 80% de la valeur théorique ou personnelle définit une crise modérée. <60% indique une crise sévère.*"
  },
  {
    id: 'q-pnm-13-07',
    courseId: 'crs-pneumo-13',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Les équivalents d’asthme chez l’adulte incluent :",
    options: [
      "A. Toux spasmodique isolée",
      "B. Bronchites récidivantes peu sensibles aux antibiotiques",
      "C. Dyspnée paroxystique nocturne",
      "D. Intolérance à l’exercice ou au rire",
      "E. Hémoptysies récidivantes"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D\nExplication : Les équivalents sont des présentations atypiques : toux variant, bronchites à répétition, intolérance à l’effort/rire. La dyspnée nocturne est un symptôme classique, pas un équivalent. L’hémoptysie n’est pas typique de l’asthme simple."
  },
  {
    id: 'q-pnm-13-08',
    courseId: 'crs-pneumo-13',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Le rôle du système nerveux autonome dans l’asthme implique :",
    options: [
      "A. Une prédominance cholinergique (bronchoconstriction)",
      "B. Une stimulation β2-adrénergique (bronchodilatation)",
      "C. Une activation α-adrénergique (bronchoconstriction)",
      "D. Les fibres NANC (effets contradictoires)",
      "E. Une inhibition vagale"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : A, B, C, D\nExplication : L’équilibre autonomique est perturbé : excès cholinergique (vagal) et adrénergique α (constricteur), déficit relatif β2. Les fibres NANC (Non Adrenergic Non Cholinergic) ont des effets bronchodilatateurs (VIP) et bronchoconstricteurs (substance P)."
  },
  {
    id: 'q-pnm-13-09',
    courseId: 'crs-pneumo-13',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Pour évaluer le contrôle de l’asthme selon GINA, on utilise :",
    options: [
      "A. Le score ACT (Asthma Control Test)",
      "B. La fréquence des symptômes diurnes/semaine",
      "C. Le nombre d’exacerbations dans l’année",
      "D. Le volume résiduel en pléthysmographie",
      "E. La nécessité de traitement de secours"
    ],
    correctAnswers: [0, 1, 4],
    explanation: "Correction : A, B, E\nExplication : Le contrôle évalue les symptômes diurnes/nocturnes, la limitation d’activité et l’utilisation du traitement de secours (critères de l’ACT). Le nombre d’exacerbations est un facteur de risque, pas un critère de contrôle immédiat. La pléthysmographie n’est pas utilisée pour le contrôle."
  },
  {
    id: 'q-pnm-13-10',
    courseId: 'crs-pneumo-13',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Dans l’asthme aigu grave, la prise en charge immédiate inclut :",
    options: [
      "A. Oxygénothérapie pour maintenir SpO2 > 90%",
      "B. β2-mimétiques nébulisés en continu",
      "C. Corticothérapie IV ou orale précoce",
      "D. Antibiothérapie systématique",
      "E. Magnésium IV en cas de réponse insuffisante"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : A, B, C, E\n*Explication : L’oxygène, les β2-mimétiques nébulisés à fortes doses, les corticoïdes systémiques et le magnésium IV sont des traitements de première ligne. L’antibiothérapie n’est pas systématique, sauf en cas de foyer infectieux évident.*"
  },
  {
    id: 'q-pnm-13-11',
    courseId: 'crs-pneumo-13',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. L’inflammation dans l’asthme allergique IgE-dépendant implique :",
    options: [
      "A. Les lymphocytes Th2",
      "B. Les éosinophiles",
      "C. Les mastocytes",
      "D. Les neutrophiles (principalement)",
      "E. Les IgE spécifiques"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : A, B, C, E\n*Explication : L’asthme allergique est une réaction de type I (IgE) avec activation des mastocytes, recrutement d’éosinophiles et profil cytokinique Th2 (IL-4, IL-5, IL-13). La prédominance neutrophile est plutôt liée à l’asthme non allergique ou sévère.*"
  },
  {
    id: 'q-pnm-13-12',
    courseId: 'crs-pneumo-13',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. La désensibilisation (immunothérapie spécifique) est indiquée dans l’asthme :",
    options: [
      "A. Pour tous les asthmes allergiques",
      "B. En cas d’allergie aux acariens prouvée",
      "C. Si l’asthme est contrôlé par les traitements usuels",
      "D. Pour remplacer les corticoïdes inhalés",
      "E. En mono-sensibilisation bien identifiée"
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : L’immunothérapie est réservée aux asthmes légers à modérés, contrôlés, avec allergie démontrée (acariens, pollens) et en complément du traitement de fond. Elle ne remplace pas les ICS."
  },
  {
    id: 'q-pnm-13-13',
    courseId: 'crs-pneumo-13',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. La mesure du DEP (débit expiratoire de pointe) est utile pour :",
    options: [
      "A. Le diagnostic initial d’asthme",
      "B. Évaluer la variabilité circadienne",
      "C. Surveiller le contrôle à domicile",
      "D. Diagnostiquer une exacerbation",
      "E. Remplacer la spirométrie"
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\nExplication : Le DEP permet de mesurer la variabilité (marqueur d’hyperréactivité), de surveiller l’évolution et de détecter une exacerbation. Il ne suffit pas pour le diagnostic initial (spirométrie requise) et ne remplace pas la spirométrie."
  },
  {
    id: 'q-pnm-13-14',
    courseId: 'crs-pneumo-13',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Les corticoïdes inhalés (ICS) agissent principalement en :",
    options: [
      "A. Réduisant l’inflammation bronchique",
      "B. Diminuant l’hyperréactivité bronchique",
      "C. Relaxant directement le muscle lisse",
      "D. Inhibant la libération de médiateurs mastocytaires",
      "E. Réduisant la sécrétion de mucus"
    ],
    correctAnswers: [0, 1, 3, 4],
    explanation: "Correction : A, B, D, E\nExplication : Les ICS ont un effet anti-inflammatoire global : diminution de l’infiltrat cellulaire, de la libération de médiateurs, de l’œdème et de l’hypersécrétion. Ils n’ont pas d’effet bronchodilatateur direct."
  },
  {
    id: 'q-pnm-13-15',
    courseId: 'crs-pneumo-13',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. La triade de Widal (ou maladie de Fernand-Widal) associe :",
    options: [
      "A. Asthme",
      "B. Polypose nasale",
      "C. Sinusite chronique",
      "D. Intolérance à l’aspirine",
      "E. Urticaire"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D\nExplication : La triade classique est asthme + polypose nasale + intolérance aux AINS (aspirine). La sinusite chronique est fréquemment associée mais ne fait pas partie de la définition stricte."
  },
  {
    id: 'q-pnm-13-16',
    courseId: 'crs-pneumo-13',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Dans l’asthme, l’examen clinique en dehors des crises est :",
    options: [
      "A. Toujours normal",
      "B. Peut révéler des sibilants à l’auscultation forcée",
      "C. Peut montrer un thorax distendu",
      "D. Recherche des signes d’atopie (eczéma, etc.)",
      "E. Inutile si le patient est asymptomatique"
    ],
    correctAnswers: [0, 3],
    explanation: "Correction : A, D\nExplication : En dehors des crises, l’examen respiratoire est généralement normal. L’interrogatoire et l’examen cherchent des signes d’atopie (eczéma, rhinite) et des facteurs déclenchants."
  },
  {
    id: 'q-pnm-13-17',
    courseId: 'crs-pneumo-13',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Le traitement de fond de l’asthme selon le “step down” implique :",
    options: [
      "A. Diminuer les doses après 3 mois de contrôle stable",
      "B. Augmenter les doses si contrôle insuffisant après 2 semaines",
      "C. Utiliser la dose minimale efficace",
      "D. Arrêter les ICS en premier",
      "E. Adapter en fonction du DEP seul"
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\nExplication : Le “step down” (diminution progressive) se fait après 3 mois de bon contrôle. Le “step up” (augmentation) se fait après 2 semaines si contrôle insuffisant. L’arrêt des ICS n’est pas recommandé en premier."
  },
  {
    id: 'q-pnm-13-18',
    courseId: 'crs-pneumo-13',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Un test de réversibilité positif au salbutamol est défini par :",
    options: [
      "A. Gain du VEMS ≥ 12% ET ≥ 200 mL",
      "B. Gain du DEP ≥ 15%",
      "C. Amélioration clinique subjective",
      "D. Disparition des sibilants",
      "E. Normalisation de la courbe débit-volume"
    ],
    correctAnswers: [0],
    explanation: "Correction : A\n*Explication : Critère spirométrique objectif : augmentation du VEMS ≥ 12% et ≥ 200 mL par rapport à la valeur pré-bronchodilatateur. Le DEP seul est moins fiable pour le diagnostic.*"
  },
  {
    id: 'q-pnm-13-19',
    courseId: 'crs-pneumo-13',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Les facteurs aggravants de l’asthme incluent :",
    options: [
      "A. La grossesse (dans 1/3 des cas)",
      "B. La puberté",
      "C. Le reflux gastro-œsophagien",
      "D. Les émotions fortes",
      "E. Les infections virales"
    ],
    correctAnswers: [0, 2, 3, 4],
    explanation: "Correction : A, C, D, E\nExplication : La grossesse aggrave l’asthme dans un tiers des cas. Le RGO, le stress/émotions et les infections virales sont des facteurs aggravants reconnus. La puberté n’est pas un facteur aggravant établi."
  },
  {
    id: 'q-pnm-13-20',
    courseId: 'crs-pneumo-13',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. L’asthme aigu grave (AAG) se définit par :",
    options: [
      "A. Une détresse respiratoire avec pronostic vital engagé",
      "B. Un état de mal asthmatique installé progressivement",
      "C. Une crise brutale d’emblée sévère",
      "D. Une chute du DEP > 30% pendant 2 jours",
      "E. Une résistance aux β2-mimétiques inhalés"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C\nExplication : L’AAG met en jeu le pronostic vital. Il peut survenir soit progressivement (état de mal), soit brutalement (crise suraiguë). La chute du DEP >30% définit une exacerbation grave, pas nécessairement un AAG."
  },
  {
    id: 'q-pnm-13-21',
    courseId: 'crs-pneumo-13',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. La budésonide en poudre sèche à dose intermédiaire pour un adulte correspond à :",
    options: [
      "A. 200-400 µg/j",
      "B. 400-800 µg/j",
      "C. >800 µg/j",
      "D. 500-1000 µg/j",
      "E. 100-250 µg/j"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\n*Explication : Selon le tableau des doses dans le cours : budésonide dose intermédiaire = 400-800 µg/j. Dose faible = 200-400, dose forte >800.*"
  },
  {
    id: 'q-pnm-13-22',
    courseId: 'crs-pneumo-13',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. L’éducation thérapeutique dans l’asthme vise à :",
    options: [
      "A. Améliorer l’observance du traitement",
      "B. Enseigner la technique d’inhalation",
      "C. Reconnaître les signes de gravité",
      "D. Adapter seul les doses de corticoïdes",
      "E. Éviter les facteurs déclenchants"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : A, B, C, E\nExplication : L’éducation améliore l’observance, la technique d’inhalation, la reconnaissance des signes d’alerte et l’éviction des facteurs déclenchants. L’adaptation des doses se fait avec le médecin selon un plan d’action écrit."
  },
  {
    id: 'q-pnm-13-23',
    courseId: 'crs-pneumo-13',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Le diagnostic différentiel de l’asthme chez l’adulte comprend :",
    options: [
      "A. La BPCO",
      "B. La dysfonction des cordes vocales",
      "C. L’embolie pulmonaire",
      "D. Le reflux gastro-œsophagien avec toux",
      "E. La tumeur bronchique"
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    explanation: "Correction : A, B, C, D, E\nExplication : Toutes ces pathologies peuvent mimer l’asthme (toux, dyspnée, sibilants). La BPCO est le principal différentiel. La tumeur bronchique peut provoquer une obstruction localisée."
  },
  {
    id: 'q-pnm-13-24',
    courseId: 'crs-pneumo-13',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. Le traitement par antileucotriènes (ex : montelukast) est particulièrement indiqué dans :",
    options: [
      "A. L’asthme d’effort",
      "B. L’asthme allergique persistant léger",
      "C. La triade de Widal",
      "D. En alternative aux ICS en cas de mauvaise observance",
      "E. L’asthme corticorésistant"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C\nExplication : Les antileucotriènes sont efficaces dans l’asthme d’effort, l’asthme allergique léger et l’asthme induit par l’aspirine (triade de Widal). Ils ne remplacent pas les ICS comme traitement de fond de première ligne."
  },
  {
    id: 'q-pnm-13-25',
    courseId: 'crs-pneumo-13',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. La spirométrie dans l’asthme non contrôlé montre typiquement :",
    options: [
      "A. Un VEMS/CV < 0.7",
      "B. Une courbe débit-volume concave",
      "C. Un allongement du temps expiratoire",
      "D. Une augmentation de la capacité résiduelle fonctionnelle (CRF)",
      "E. Une normalisation après bronchodilatateur"
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    explanation: "Correction : A, B, C, D, E\nExplication : En crise, on observe un trouble ventilatoire obstructif (VEMS/CV bas), une courbe concave, un allongement expiratoire, une hyperinflation (CRF augmentée) et une réversibilité partielle ou totale post-bronchodilatateur."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-13-c1-1',
    courseId: 'crs-pneumo-13',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Femme de 35 ans, toux sèche nocturne\nMme K., 35 ans, consulte pour une toux sèche quinteuse survenant surtout la nuit, depuis 3 mois. Elle est fumeuse (5 paquets-années). L’auscultation pulmonaire est normale. Pas de fièvre. La radiographie thoracique est normale.\n\nQ1. Quel examen paraclinique demander en premier ?",
    options: [
      "A. Scanner thoracique",
      "B. Spirométrie avec test de réversibilité",
      "C. Dosage des IgE totales",
      "D. Epreuves fonctionnelles respiratoires complètes avec pléthysmographie",
      "E. pH-métrie œsophagienne"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Une toux sèche nocturne isolée est un équivalent d’asthme classique. La spirométrie avec test de réversibilité est l'examen de première intention, peu coûteux et non invasif, pour objectiver un trouble obstructif réversible."
  },
  {
    id: 'q-pnm-13-c2-1',
    courseId: 'crs-pneumo-13',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Étudiant de 20 ans, dyspnée à l’effort\nM. S., 20 ans, étudiant, se plaint de sifflements et d’oppression thoracique à la course à pied, surtout en hiver. Il a une rhinite allergique saisonnière. Examen normal hors effort. DEP : 450 L/min (valeur théorée 500). Variabilité du DEP sur 2 semaines : 18%.\n\nQ1. Quelle est la prise en charge thérapeutique initiale selon GINA 2022 ?",
    options: [
      "A. SABA seul à la demande avant l’effort",
      "B. ICS à faible dose en continu + SABA à la demande",
      "C. ICS-formotérol à faible dose à la demande",
      "D. Antileucotriènes au long cours",
      "E. Immunothérapie spécifique"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\n*Explication : Symptômes déclenchés par l’effort + variabilité du DEP >10% évoquent un asthme. GINA 2022 recommande en première intention un ICS-formotérol à faible dose à la demande (Track 1), y compris pour la prévention de l’asthme d’effort.*"
  },
  {
    id: 'q-pnm-13-c3-1',
    courseId: 'crs-pneumo-13',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Homme de 50 ans, exacerbation\nM. T., 50 ans, asthmatique connu sous ICS-formotérol, présente une aggravation depuis 3 jours avec toux, dyspnée de repos et sibilants. DEP mesuré à la maison : 300 L/min (valeur usuelle 500). Il utilise son traitement de secours 4 fois/jour depuis 2 jours.\n\nQ1. Quelle est la conduite à tenir immédiate ?",
    options: [
      "A. Doubler la dose d’ICS-formotérol de fond et attendre 48h",
      "B. Consulter en urgence pour évaluation et corticothérapie orale",
      "C. Commencer une antibiothérapie à large spectre",
      "D. Utiliser le SABA en nébulisation à domicile",
      "E. Prendre rendez-vous avec son pneumologue dans la semaine"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\n*Explication : Chute du DEP >30% par rapport à la valeur personnelle + besoin de traitement de secours >2x/jour définit une exacerbation modérée à sévère. Une corticothérapie orale précoce est indiquée pour réduire l’inflammation. Une évaluation médicale urgente est nécessaire.*"
  },
  {
    id: 'q-pnm-13-c4-1',
    courseId: 'crs-pneumo-13',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Femme enceinte, asthme instable\nMme L., 28 ans, enceinte de 20 SA, asthmatique depuis l’enfance. Son asthme s’est aggravé depuis le début de la grossesse avec réveils nocturnes. Elle est sous ICS à faible dose mais l’observance est irrégulière.\n\nQ1. Quelle est la règle évolutive de l’asthme pendant la grossesse ?",
    options: [
      "A. Il s’améliore systématiquement",
      "B. Il s’aggrave systématiquement",
      "C. Il suit la règle des trois tiers (1/3 améliore, 1/3 stable, 1/3 aggrave)",
      "D. Il n’est pas influencé par la grossesse",
      "E. Il ne s’aggrave qu’au troisième trimestre"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La grossesse influence l’asthme de manière variable et imprévisible : environ un tiers des patientes voient leur asthme s’améliorer, un tiers s’aggraver et un tiers rester stable. Un contrôle strict est impératif pour éviter l’hypoxie fœtale."
  },
  {
    id: 'q-pnm-13-c5-1',
    courseId: 'crs-pneumo-13',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Crise d’asthme aiguë aux urgences\nUn patient de 40 ans arrive aux urgences en détresse respiratoire. Il parle par mots, fréquence respiratoire à 35/min, SpO2 à 88% en air ambiant, sibilants diffus. DEP impossible à réaliser.\n\nQ1. Quelle est la première mesure thérapeutique à initier ?",
    options: [
      "A. Salbutamol nébulisé",
      "B. Oxygénothérapie pour SpO2 > 94%",
      "C. Methylprednisolone IV",
      "D. Radiographie thoracique urgente",
      "E. Mesure des gaz du sang artériel"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Priorité ABCDE. La correction de l’hypoxémie (SpO2 <90%) par oxygénothérapie est immédiate et vitale, avant même l’administration des bronchodilatateurs ou des corticoïdes."
  }
];

export const PNEUMO_LESSON_13_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-13-mindmap',
    courseId: 'crs-pneumo-13',
    type: 'Resume',
    title: 'Carte Mentale : Asthme Bronchique',
    contentMarkdown: `### ASTHME BRONCHIQUE

├── **DÉFINITION**
│   └── Maladie inflammatoire chronique → HRB + obstruction variable/réversible
│
├── **PHYSIOPATHOLOGIE (Trépied)**
│   ├── INFLAMMATION (Th2, IgE, éosino, masto)
│   ├── BRONCHOSPASME (muscle lisse)
│   └── REMODELAGE (à long terme)
│
├── **DIAGNOSTIC POSITIF**
│   ├── Clinique : Dyspnée paroxystique, sifflements, toux (nocturne/effort)
│   ├── Para-clinique : Spirométrie (TVO réversible), test provocation, DEP variabilité >10%
│   └── Équivalents : Toux variant, bronchites récidivantes
│
├── **DIAGNOSTIC DIFFÉRENTIEL**
│   └── BPCO, DDB, RGO, corps étranger, tumeur, cardiopathie gauche
│
├── **PRISE EN CHARGE (GINA 2022+)**
│   ├── ÉVALUATION : Contrôle (ACT) + Facteurs de risque
│   ├── TRAITEMENT : Escalier thérapeutique ("Step Up/Down")
│   │   ├── Track 1 Préféré : ICS-formotérol (entretien + secours)
│   │   └── Track 2 Alternatif : ICS + SABA si observance assurée
│   ├── ÉDUCATION : Technique inhalateur, plan d’action
│   └── SUIVI : Selon sévérité (1 à 12 mois)
│
└── **URGENCES**
    ├── CRISE : Évaluer sévérité (clinique, DEP, SpO2)
    ├── TRAITEMENT : O2, β2 nébulisés, corticoïdes systémiques
    └── AAG : Hospitalisation, parfois réanimation`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Asthme', 'GINA', 'Pneumologie']
  },
  {
    id: 'res-pnm-13-astuces',
    courseId: 'crs-pneumo-13',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques : Asthme',
    contentMarkdown: `### Astuces & Mnémotechniques
1. **"ASTHME" pour les critères de contrôle GINA** :
   - **A**ctivité limitée ? Non
   - **S**ymptômes diurnes ≤ 2/semaine
   - **T**raitement de secours ≤ 2/semaine
   - **H**oraire nocturne : aucun réveil
   - **M**esure du DEP stable
   - **E**xacerbations : aucune
2. **"ICS-First"** : Toujours penser à un **I**nhaled **C**ortico**S**teroid en premier dans le traitement de fond. Le SABA seul, c'est du passé.
3. **Règle du "1-2-3" pour le contrôle** :
   - 1 critère non contrôlé = Asthme partiellement contrôlé.
   - 2 semaines de contrôle insuffisant = Step Up (monter d'un palier).
   - 3 mois de bon contrôle = Step Down (descendre d'un palier).
4. **Sévérité de la crise aux Urgences : PENSE RAPIDE** :
   - **P**arle (phrases/mots) ?
   - **E**xpression (agitée/confuse) ?
   - **N**otion de fatigue ?
   - **S**aturation (SpO2) ?
   - **E**ffort respiratoire (tirages) ?
   - **R**ythme cardiaque (FC) ?
   - **A**uscultation (sibilants / silence) ?
   - **P**osture (penché en avant) ?
   - **I**ndex de confiance (peak flow) ?
   - **D**élai depuis le début ?
   - **E**nvironment (facteurs déclenchants) ?
5. **Doses ICS : "Budes 2-4-8"** : Faible: 200-400, Intermédiaire: 400-800, Forte: >800 µg/j. Pour la Béclométasone, pensez "5-10-15" (x100 µg).

---
*Allez, courage futurs internes ! Maîtriser l’asthme, c’est comme souffler dans un spiromètre : il faut de la force, de la technique et de la régularité. Bientôt, vous distinguerez un sibilant d’un ronchi aussi facilement que le bon score à un QCM ! Vous en êtes capables.*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Asthme', 'Pneumologie']
  }
];
