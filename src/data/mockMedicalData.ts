import {
  AcademicYear,
  Module,
  Course,
  Question,
  CourseResource,
  LeaderboardEntry,
  ShopItem,
} from '../types/medical';
import {
  ALL_CARDIOLOGY_COURSES,
  ALL_CARDIOLOGY_QUESTIONS,
} from './cardiologyMaster';
import {
  PNEUMO_COURSES,
  ALL_PNEUMOLOGY_QUESTIONS,
  ALL_PNEUMOLOGY_RESOURCES,
} from './pneumoMaster';
import {
  INFECTIO_COURSES,
  ALL_INFECTIOLOGY_QUESTIONS,
  ALL_INFECTIOLOGY_RESOURCES,
} from './infectioMaster';
import {
  ALL_NEUROLOGY_COURSES,
  ALL_NEUROLOGY_QUESTIONS,
  ALL_NEUROLOGY_RESOURCES,
} from './neuroMaster';
import {
  ALL_HEMATOLOGY_COURSES,
  ALL_HEMATOLOGY_QUESTIONS,
  ALL_HEMATOLOGY_RESOURCES,
} from './hematoMaster';
import {
  GASTRO_COURSES,
  ALL_GASTRO_QUESTIONS,
  ALL_GASTRO_RESOURCES,
} from './gastroMaster';

export const MEDICAL_MODULES: Module[] = [
  {
    id: 'mod-cardio',
    title: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    icon: 'HeartPulse',
    color: 'from-rose-500 to-red-600',
    description: 'Programme officiel complet (24 cours) : Insuffisance cardiaque, SCA, troubles du rythme & conduction, péricardites, valvulopathies, HTA, HTAP, EP, cardiomyopathies, RAA, AOMI, TVP, choc & ACR.',
    totalQuestions: ALL_CARDIOLOGY_QUESTIONS.length,
    coursesCount: ALL_CARDIOLOGY_COURSES.length,
    progressPercent: 0,
  },
  {
    id: 'mod-neuro',
    title: 'Neurologie Clinique & Neurochirurgie',
    academicYear: '4ème Année',
    icon: 'Brain',
    color: 'from-indigo-500 to-purple-600',
    description: 'Programme officiel complet (26 cours extraits exactement des fichiers) : Démences, Syndromes topographiques, Syndromes neuromusculaires, Compression médullaire, AVC ischémique & hémorragique, Parkinson, TCE, Céphalées, Hydrocéphalie, Épilepsies, Pathologie musculaire, Craniosténoses, Neurodégénératif, Spina Bifida, SNP, Infections SNC, SEP, Tumeurs cérébrales, Urgences neurochir, HSA, HIC, Examen neurologique, Cas cliniques de motricité et ataxies.',
    totalQuestions: ALL_NEUROLOGY_QUESTIONS.length,
    coursesCount: ALL_NEUROLOGY_COURSES.length,
    progressPercent: 0,
  },
  {
    id: 'mod-gastro',
    title: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    icon: 'Stethoscope',
    color: 'from-amber-500 to-orange-600',
    description: "Programme officiel complet (40 cours – Module intégral Hépato-Gastroentérologie) : ANAPATH (Anapath cancer gastrique, Pathologie hépatique) ; CANCÉROLOGIE (Cancer de l'estomac, Tumeurs du pancréas, Cancer du côlon, Cancer du rectum, Cancer du canal anal, GIST, Cancer de l'œsophage, CHC & Tumeurs hépatiques) ; URGENCES (Appendicite aiguë, Hernies abdominales, Lésions caustiques, Pancréatite aiguë, Péritonites aiguës, Occlusions intestinales, Ischémie mésentérique, Traumatismes abdominaux, Hémorragies digestives) ; GASTRO & HÉPATOLOGIE (Kyste hydatique, Tumeurs bénignes foie, Polypes/polyposes, Tuberculose digestive, MUGD & H. pylori, Gastrites & Biermer, RGO & hernie hiatale, Maladie de Crohn, RCH, Maladie cœliaque, Diarrhées chroniques, Colopathie fonctionnelle / SII, Lithiase biliaire, Pancréatite chronique, Hypertension portale, Cirrhose hépatique, Hépatites aiguës, Hépatites chroniques, Ictères, Hémorroïdes, Fissures/fistules anales & Diverticulose).",
    totalQuestions: ALL_GASTRO_QUESTIONS.length,
    coursesCount: GASTRO_COURSES.length,
    progressPercent: 0,
  },
  {
    id: 'mod-pneumo',
    title: 'Pneumologie',
    academicYear: '4ème Année',
    icon: 'Wind',
    color: 'from-cyan-500 to-blue-600',
    description: 'Programme officiel complet (26 cours extraits exactement des fichiers originaux) : Tuberculose (prévention, pulmonaire, traitement), Cancers broncho-pulmonaires & TNM, Pleursies, BPCO, Asthme, DDB, Suppurations pulmonaires, PID, Sarcoïdose, Kyste hydatique, Pneumoconioses, Tumeurs médiastinales, Embolie pulmonaire, Gazométrie artérielle, Drainage & Ponction pleurale, EFR, Anapath.',
    totalQuestions: ALL_PNEUMOLOGY_QUESTIONS.length,
    coursesCount: PNEUMO_COURSES.length,
    progressPercent: 0,
  },
  {
    id: 'mod-infectio',
    title: 'Infectiologie',
    academicYear: '4ème Année',
    icon: 'ShieldAlert',
    color: 'from-emerald-600 to-teal-700',
    description: 'Programme officiel complet (23 cours & cas cliniques extraits exactement des fichiers) : DHBNN & DHBN, Fièvre Boutonneuse Méditerranéenne, La Rage, Ictères infectieux, AES, Bon usage des antibiotiques, MNI (EBV), Diarrhées & TIAC, Méningites bactériennes, Leptospirose, Choléra, VIH/SIDA, Infections à Staphylocoques, Diphtérie, Streptocoques, Méningites purulentes, Brucellose, Bactériémie & Fongémie, Sepsis & Choc septique, Paludisme, Varicelle-Zona, Méningites à liquide clair, Recueil 20 Cas Pratiques Algérie.',
    totalQuestions: ALL_INFECTIOLOGY_QUESTIONS.length,
    coursesCount: INFECTIO_COURSES.length,
    progressPercent: 0,
  },
  {
    id: 'mod-hemato',
    title: 'Hématologie & Oncologie Médicale',
    academicYear: '4ème Année',
    icon: 'Activity',
    color: 'from-fuchsia-500 to-pink-600',
    description: 'Programme officiel complet (24 cours extraits exactement des fichiers avec subdivisions) : Subdivision 1 - Hématologie Clinique & Biologique (LLC Taoussi, CAT syndrome hémorragique, Adénopathies & SPM, CAT devant une anémie, Anémies hémolytiques, Leucémies aiguës, Hémostase, Cytopénies & Aplasie médullaire, LLC fiches révision, Lymphomes Hodgkin & Non-Hodgkin, Hémophilie & Coagulopathies, PTI, LMC, Anémies par carence en FAP). Subdivision 2 - Cancérologie & Oncologie Médicale (Urgences oncologiques, Diagnostic histologique des lymphomes, Effets secondaires des traitements, Armes thérapeutiques du cancer, Suivi du malade atteint de cancer, Classifications & Échelles, Bilan pré-thérapeutique, Diagnostic du cancer, Facteurs de risque & Prévention, Carcinogénèse moléculaire).',
    totalQuestions: ALL_HEMATOLOGY_QUESTIONS.length,
    coursesCount: ALL_HEMATOLOGY_COURSES.length,
    progressPercent: 0,
  },
  {
    id: 'mod-semio3',
    title: 'Sémiologie Médicale & Propédeutique',
    academicYear: '3ème Année',
    icon: 'BookOpen',
    color: 'from-emerald-500 to-teal-600',
    description: 'Examen physique général, bruits cardiaques, râles respiratoires, sémiologie abdominale.',
    totalQuestions: 22,
    coursesCount: 5,
    progressPercent: 0,
  },
  {
    id: 'mod-pharma3',
    title: 'Pharmacologie Fondamentale & Thérapeutique',
    academicYear: '3ème Année',
    icon: 'Pill',
    color: 'from-teal-500 to-emerald-600',
    description: 'Pharmacocinétique, surveillance des AVK/AOD, antibiotiques majeurs, toxicité.',
    totalQuestions: 18,
    coursesCount: 4,
    progressPercent: 0,
  },
  {
    id: 'mod-5-otr',
    title: 'Appareil locomoteur (OTR)',
    academicYear: '5ème Année',
    icon: 'Bone',
    color: 'from-amber-500 to-orange-600',
    description: 'Orthopédie, Traumatologie & Rhumatologie : fractures, arthropathies, rachis et pathologies dégénératives.',
    totalQuestions: 0,
    coursesCount: 0,
    progressPercent: 0,
  },
  {
    id: 'mod-5-gyn',
    title: 'Gynécologie–Obstétrique',
    academicYear: '5ème Année',
    icon: 'HeartHandshake',
    color: 'from-rose-500 to-pink-600',
    description: 'Suivi de grossesse, accouchement, hémorragies obstétricales, pathologies gynécologiques et dépistage.',
    totalQuestions: 0,
    coursesCount: 0,
    progressPercent: 0,
  },
  {
    id: 'mod-5-ped',
    title: 'Pédiatrie',
    academicYear: '5ème Année',
    icon: 'Baby',
    color: 'from-sky-500 to-indigo-600',
    description: 'Croissance, développement psychomoteur, déshydratation, détresses respiratoires et urgences néonatales.',
    totalQuestions: 0,
    coursesCount: 0,
    progressPercent: 0,
  },
  {
    id: 'mod-5-psy',
    title: 'Psychiatrie',
    academicYear: '5ème Année',
    icon: 'Brain',
    color: 'from-purple-500 to-violet-600',
    description: 'Troubles de l\'humeur, schizophrénie, états anxieux, conduites addictives et urgences psychiatriques.',
    totalQuestions: 0,
    coursesCount: 0,
    progressPercent: 0,
  },
  {
    id: 'mod-5-endo',
    title: 'Endocrinologie & maladies métaboliques',
    academicYear: '5ème Année',
    icon: 'Activity',
    color: 'from-teal-500 to-emerald-600',
    description: 'Diabète de type 1 & 2, thyroïde, insuffisance surrénale, dyslipidémies et métabolisme phosphocalcique.',
    totalQuestions: 0,
    coursesCount: 0,
    progressPercent: 0,
  },
  {
    id: 'mod-5-uro-nephro',
    title: 'Urologie & Néphrologie',
    academicYear: '5ème Année',
    icon: 'Droplets',
    color: 'from-cyan-500 to-teal-600',
    description: 'Syndromes néphrotiques, insuffisance rénale aiguë et chronique, lithiases urinaires et cancers urologiques.',
    totalQuestions: 0,
    coursesCount: 0,
    progressPercent: 0,
  },
];

export const MEDICAL_COURSES: Course[] = [
  ...ALL_CARDIOLOGY_COURSES,

  // All 26 Neurology & Neurosurgery courses extracted exactly from the user's files
  ...ALL_NEUROLOGY_COURSES,

  // Gastroenterology Courses (Official Blida curriculum including OIA Dr Hamoudi)
  ...GASTRO_COURSES,

  // Semiologie 3rd Year
  {
    id: 'crs-semio-1',
    moduleId: 'mod-semio3',
    title: 'Sémiologie Cardiaque : Bruits & Souffles Valvulaires',
    orderIndex: 1,
    qcmCount: 12,
    casCliniqueCount: 2,
    resumesCount: 2,
    astucesCount: 5,
    completedPercent: 90,
  },

  // Emergencies 5th Year
  {
    id: 'crs-urg-1',
    moduleId: 'mod-urg5',
    title: 'Choc Septique & Prise en Charge Hémodynamique Précoce',
    orderIndex: 1,
    qcmCount: 14,
    casCliniqueCount: 4,
    resumesCount: 2,
    astucesCount: 4,
    completedPercent: 45,
  },

  // All 26 Pneumology courses extracted exactly from the user's PDF files
  ...PNEUMO_COURSES,

  // All 23 Infectiology courses extracted exactly from the user's files
  ...INFECTIO_COURSES,

  // All 24 Hematology & Oncology courses extracted exactly from the user's files
  ...ALL_HEMATOLOGY_COURSES,
];

export const INITIAL_QUESTIONS: Question[] = [
  // All comprehensive Cardiology questions integrated without skipping any
  ...ALL_CARDIOLOGY_QUESTIONS,

  // All comprehensive Pneumology questions extracted directly from user files
  ...ALL_PNEUMOLOGY_QUESTIONS,

  // All comprehensive Infectiology questions extracted directly from user files
  ...ALL_INFECTIOLOGY_QUESTIONS,

  // All comprehensive Neurology & Neurosurgery questions extracted directly from user files
  ...ALL_NEUROLOGY_QUESTIONS,

  // All comprehensive Hematology & Oncology questions extracted directly from user files
  ...ALL_HEMATOLOGY_QUESTIONS,

  // All comprehensive Hepatogastroenterology questions (OIA Dr Hamoudi 40 QCMs & cas cliniques + pathologies majeures)
  ...ALL_GASTRO_QUESTIONS,

  // Question 1
  {
    id: 'q-cardio-01',
    courseId: 'crs-cardio-1',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Un homme de 68 ans avec antécédents d'infarctus antérieur et FEVG à 32% consulte pour dyspnée d'effort d'aggravation progressive (NYHA classe III) et œdèmes des membres inférieurs. Il est sous Furosémide 40 mg/j et Ramipril 5 mg/j. La pression artérielle est à 122/74 mmHg, FC 70 bpm régulier, créatinine 95 µmol/L, kaliémie 4,2 mmol/L. Selon les recommandations ESC 2024, quelle quadrithérapie fondamentale d'optimisation doit être mise en place pour réduire la mortalité globale ?",
    options: [
      "Augmenter le furosémide à 120 mg/j et ajouter de la digoxine",
      "Associer un Bêtabloquant (Bisoprolol), un Antagoniste des récepteurs des minéralocorticoïdes (Éplérénone/Spironolactone), et un inhibiteur du SGLT2 (Dapagliflozine/Empagliflozine)",
      "Remplacer le Ramipril par une bithérapie Amlodipine + Vérapamil",
      "Ajouter immédiatement un dérivé nitré per os et un anti-arythmique de classe Ic",
      "Arrêter le Ramipril et maintenir le Furosémide seul avec régime sans sel strict"
    ],
    correctAnswers: [1],
    explanation: "La quadrithérapie fondamentale recommandée chez tout patient ayant une insuffisance cardiaque à fraction d'éjection réduite (HFrEF, FE < 40%) comprend : 1) IEC ou Sacubitril/Valsartan, 2) Bêtabloquant cardio-sélectif (Bisoprolol, Carvédilol, Métoprolol), 3) ARM (Spironolactone ou Éplérénone), 4) Inhibiteur du SGLT2 (Dapagliflozine ou Empagliflozine). Les diurétiques de l'anse traitent la congestion mais ne réduisent pas la mortalité à eux seuls.",
    clinicalPearl: "Mnémo 'The Fantastic 4' : IEC/ARNI + Bêtabloquant + ARM + iSGLT2 = Réduction spectaculaire de la mortalité cardiovasculaire.",
  },

  // Question 2
  {
    id: 'q-cardio-02',
    courseId: 'crs-cardio-1',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel biomarqueur circulant possède la plus forte valeur prédictive négative (> 98%) pour éliminer une décompensation cardiaque aiguë chez un patient se présentant aux urgences pour dyspnée aiguë ?",
    options: [
      "La troponine I ultra-sensible",
      "Les D-dimères plasmatiques",
      "Le BNP (< 100 pg/mL) ou NT-proBNP (< 300 pg/mL)",
      "La protéine C-réactive (CRP)",
      "La créatinine phosphokinase (CPK-MB)"
    ],
    correctAnswers: [2],
    explanation: "Le dosage des peptides natriurétiques (BNP < 100 pg/mL ou NT-proBNP < 300 pg/mL en situation aiguë d'urgence) possède une excellente valeur prédictive négative, permettant d'exclure formellement l'origine cardiaque de la dyspnée aiguë.",
    clinicalPearl: "Peptides natriurétiques : Excellent test d'exclusion (VPN > 98%). Attention aux faux positifs : âge, insuffisance rénale, fibrillation atriale.",
  },

  // Question 3
  {
    id: 'q-cardio-03',
    courseId: 'crs-cardio-1',
    questionNumber: 3,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique Progressif : Patient de 74 ans, suivi pour cardiopathie ischémique avec FEVG à 28%. Il consulte pour une prise de 4 kg en 5 jours, une orthopnée à 3 oreillers et une dyspnée de repos. Examen clinique : PA 135/85 mmHg, FC 88 bpm, SpO2 88% en air ambiant, turgescence jugulaire bilatérale, râles crépitants montant jusqu'aux mi-champs pulmonaires bilatéraux et hépatomégalie douloureuse au reflux hépato-jugulaire. Quel est le traitement d'urgence immédiat en salle de déchocage ?",
    options: [
      "Oxygénothérapie au masque à haute concentration, Furosémide IV bolus (80 mg) et ventilation non invasive (VNI en mode CPAP)",
      "Remplissage vasculaire rapide par 1000 mL de sérum physiologique 0.9%",
      "Injection immédiate de sulfate de morphine 10 mg IV direct en première intention",
      "Cardioversion électrique synchronisée immédiate",
      "Dobutamine à fortes doses sans diurétique"
    ],
    correctAnswers: [0],
    explanation: "Il s'agit d'un œdème aigu du poumon (OAP) cardiogénique congestif avec détresse respiratoire aiguë. Le triptyque d'urgence repose sur : 1) Oxygénothérapie adaptée pour SaO2 > 92%, 2) Diurétique de l'anse par voie intraveineuse (Furosémide bolus) pour diminuer la congestion pulmonaire et systémique, et 3) Ventilation Non Invasive (CPAP de Boussignac ou VNI à double niveau de pression) qui réduit drastiquement le travail respiratoire et les besoins d'intubation endotrachéale.",
    clinicalPearl: "Triade d'urgence OAP : Oxygène + Furosémide IV + CPAP précoce. En cas de PA élevée, ajouter immédiatement des dérivés nitrés IV (Lénitral).",
  },

  // Question 4
  {
    id: 'q-cardio-04',
    courseId: 'crs-cardio-2',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 56 ans présente un infarctus du myocarde avec sus-décalage du segment ST en phase aiguë (H2) en territoire antérieur étendu (V1 à V6). Le SMUR arrive à son domicile situé à 25 minutes d'un centre de coronarographie 24h/24. Quelle est la conduite thérapeutique prioritaire de reperfusion ?",
    options: [
      "Thrombolyse intraveineuse immédiate à domicile par ténectéplase",
      "Transfert immédiat pour angioplastie coronaire percutanée primaire (PCI)",
      "Attendre le résultat du dosage de la troponine I au laboratoire central",
      "Administration d'oxygène à fort débit au masque haute concentration même en l'absence d'hypoxémie",
      "Surveillance simple et coronarographie programmée à J5"
    ],
    correctAnswers: [1],
    explanation: "Le délai entre le premier contact médical et la coronarographie est très court (< 120 minutes, ici centre à 25 minutes). L'angioplastie primaire est la stratégie de référence absolue. La fibrinolyse n'est indiquée que si le délai estimé avant angioplastie dépasse 120 minutes.",
    clinicalPearl: "Délai 'First Medical Contact to Balloon' < 90 min (ou < 120 min max) = Angioplastie primaire prioritaire.",
  },

  // Question 5
  {
    id: 'q-cardio-05',
    courseId: 'crs-cardio-2',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Chez un patient présentant un infarctus inférieur avec extension électrique au ventricule droit (sus-décalage ST en V4R), quel médicament est FORMELLEMENT CONTRE-INDIQUÉ en raison d'un risque majeur de collapsus cardiovasculaire ?",
    options: [
      "L'héparine non fractionnée",
      "L'aspirine 300 mg per os",
      "Les dérivés nitrés (Trinitrine) et les diurétiques",
      "Le ticagrélor 180 mg",
      "Le chlorure de sodium 0.9% en perfusion prudente"
    ],
    correctAnswers: [2],
    explanation: "L'infarctus du ventricule droit entraîne une dépendance critique à la précharge pour maintenir le volume d'éjection et le débit cardiaque. Les dérivés nitrés et les diurétiques, en effondrant le retour veineux et la précharge du VD, provoquent un choc cardiogénique gravissime.",
    clinicalPearl: "Infarctus inférieur : Toujours faire V3R et V4R ! Si sus-décalage en V4R = PAS DE NITRÉS NI DE DIURÉTIQUES, Remplir prudemment !",
  },

  // Question 6 (Neurology)
  {
    id: 'q-neuro-01',
    courseId: 'crs-neuro-1',
    questionNumber: 6,
    type: 'QCM',
    module: 'Neurologie Clinique',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Une femme de 64 ans, sans antécédent, est admise pour hémiplégie gauche brutale et déviation conjuguée de la tête et des yeux vers la droite, débutée il y a 80 minutes. L'angioscanner cérébral montre une occlusion du tronc de l'artère cérébrale moyenne droite (segment M1) avec un score ASPECTS à 9. La tension artérielle est à 165/90 mmHg, glycémie à 6.1 mmol/L. Quelle est la prise en charge de reperfusion recommandée ?",
    options: [
      "Thrombolyse intraveineuse seule par rt-PA et surveillance en soins intensifs",
      "Thrombectomie mécanique seule sans thrombolyse",
      "Thrombolyse intraveineuse par rt-PA (0,9 mg/kg) débutée immédiatement, combinée à une thrombectomie mécanique sans attendre le résultat de la thrombolyse",
      "Administration d'un bolus d'aspirine 500 mg et surveillance",
      "Abaissement de la pression artérielle en dessous de 120/70 mmHg avant tout traitement"
    ],
    correctAnswers: [2],
    explanation: "Devant un AVC ischémique dans la fenêtre des 4h30 avec occlusion d'un gros vaisseau proximal (M1) et parenchyme sauvable, la recommandation de référence de grade A est la stratégie combinée ('bridging therapy') : injection immédiate de rt-PA IV suivie sans délai de la thrombectomie mécanique.",
    clinicalPearl: "Déviation de la tête et des yeux : 'Le patient regarde sa lésion corticale cérébrale' et fuit son hémiplégie motrice opposée.",
  },

  // Question 7
  {
    id: 'q-neuro-02',
    courseId: 'crs-neuro-2',
    questionNumber: 7,
    type: 'QCM',
    module: 'Neurologie Clinique',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors de la prise en charge d'un état de mal épileptique convulsif généralisé persistant depuis 6 minutes chez un adulte, quel est le médicament de première intention à administrer en urgence immédiate (Temps T1) ?",
    options: [
      "Phénytoïne (Dilantin) 20 mg/kg en perfusion lente",
      "Clonazépam (Rivotril) 1 mg IV lent ou Midazolam 10 mg IM",
      "Propofol en perfusion continue avec intubation orotrachéale",
      "Valproate de sodium 400 mg per os",
      "Lévétiracétam 1000 mg IVL uniquement après 30 minutes d'échec"
    ],
    correctAnswers: [1],
    explanation: "Le traitement de 1ère ligne (T1 à 5 minutes) d'une crise tonicoclonique généralisée persistante repose sur les benzodiazépines : Clonazépam 1 mg IV lent (renouvelable 1 fois à 5 minutes) ou Midazolam (10 mg IM si pas de VVP immédiate).",
    clinicalPearl: "Règle des 5 minutes : Toute convulsion continue > 5 min = État de mal épileptique débutant -> Benzodiazépine sans attendre.",
  },

];

export const COURSE_RESOURCES: CourseResource[] = [
  ...ALL_PNEUMOLOGY_RESOURCES,
  ...ALL_INFECTIOLOGY_RESOURCES,
  ...ALL_NEUROLOGY_RESOURCES,
  ...ALL_HEMATOLOGY_RESOURCES,
  ...ALL_GASTRO_RESOURCES,
  {
    id: 'res-cardio-1',
    courseId: 'crs-cardio-1',
    type: 'Resume',
    title: "Synthèse Clinique : Insuffisance Cardiaque à FEVG Réduite (HFrEF)",
    contentMarkdown: `### Recommandations ESC 2024 - Insuffisance Cardiaque
**1. Définition Diagnostique :**
- Symptômes cardinaux : Dyspnée d'effort/orthopnée, œdèmes bilatéraux des membres inférieurs, hépatalgie.
- Signes physiques : Turgescence jugulaire, reflux hépato-jugulaire, râles crépitants, B3.
- Biomarqueurs : BNP > 35 pg/mL ou NT-proBNP > 125 pg/mL en ambulatoire (> 300 pg/mL en aigu).
- Échocardiographie (ETT) : FEVG <= 40% (HFrEF) vs 41-49% (HFmrEF) vs >= 50% (HFpEF).

**2. Traitement Médical Optimal (Quadrithérapie Fondamentale) :**
- **ARNI / IEC :** Sacubitril/Valsartan ou Ramipril (titration progressive selon PA et créat).
- **Bêtabloquants :** Bisoprolol, Carvédilol, Métoprolol (initier à distance d'une décompensation).
- **ARM :** Spironolactone 25-50 mg ou Éplérénone (surveillance étroite Kaliémie).
- **iSGLT2 :** Dapagliflozine 10 mg ou Empagliflozine 10 mg (réduit hospitalisations et décès CV).
- **Diurétiques de l'anse (Furosémide) :** Titrés pour maintenir l'euvolémie, pas d'effet sur la mortalité brute.`,
    authorOrSource: 'Collège National des Enseignants de Cardiologie',
    tags: ['ESC 2024', 'HFrEF', 'Quadrithérapie', 'Cardiologie'],
  },
  {
    id: 'ast-cardio-1',
    courseId: 'crs-cardio-1',
    type: 'Astuce',
    title: "Mnémo 'The Fantastic 4' & Contre-indications Pièges",
    contentMarkdown: `**Mnémo des 4 Piliers Fondamentaux de l'Insuffisance Cardiaque :**
- **B** - Bêtabloquant (Bisoprolol, Carvédilol)
- **A** - ARM (Spironolactone, Éplérénone)
- **S** - SGLT2 inhibiteur (Dapagliflozine, Empagliflozine)
- **I** - IEC ou Inhibiteur de la Néprilysine (ARNI / Sacubitril-Valsartan)

**Pièges fréquents aux examens :**
1. *Ne JAMAIS introduire ou majorer un Bêtabloquant chez un patient en OAP aigu congestif ou en choc cardiogénique.*
2. *Contrôler la kaliémie à J7 et J30 après introduction d'un ARM (risque d'hyperkaliémie mortelle si clairance < 30 mL/min).*
3. *Les inhibiteurs calciques bradycardisants (Vérapamil, Diltiazem) sont formellement CONTRE-INDIQUÉS dans l'HFrEF.*`,
    authorOrSource: "Major de Promotion Résidanat",
    tags: ['Mnémotechnique', 'Pièges', 'Internat'],
  },
  {
    id: 'res-neuro-1',
    courseId: 'crs-neuro-1',
    type: 'Resume',
    title: "Prise en Charge d'Urgence de l'AVC Ischémique en UNV",
    contentMarkdown: `### Recommandations AVC Ischémique Aigu
**1. Fenêtres thérapeutiques :**
- Thrombolyse IV par rt-PA (Alteplase 0.9 mg/kg ou Ténectéplase) : < 4h30 après le début des symptômes.
- Thrombectomie mécanique : < 6h (et jusqu'à 24h selon imagerie de perfusion / mismatch).

**2. Constantes cibles en UNV :**
- PA : Ne pas baisser sauf si PAS > 220 mmHg ou PAD > 120 mmHg (ou > 185/110 mmHg si thrombolyse).
- Glycémie : Corriger toute hypoglycémie immédiatement ; maintenir glycémie < 10 mmol/L.
- Température : Traiter dès 37.8°C (le cerveau chaud consomme plus d'oxygène).
- Position : Décubitus dorsal strict à 0° dans les premières 24h pour optimiser la perfusion cérébrale.`,
    authorOrSource: 'Société Française Neuro-Vasculaire',
    tags: ['AVC', 'UNV', 'Thrombolyse', 'Thrombectomie'],
  },
  {
    id: 'ast-neuro-1',
    courseId: 'crs-neuro-1',
    type: 'Astuce',
    title: "Mnémo FAST & Réflexe des Pupilles et du Regard",
    contentMarkdown: `**Règle du Regard en Neurologie :**
- *Lésion hémisphérique corticale (AVC sylvien) :* Le patient **regarde sa lésion cérébrale** et tourne le dos à son hémiplégie.
- *Lésion du tronc cérébral (protubérance) :* Le patient **regarde son hémiplégie** et fuit sa lésion.

**Formule Mnémo 'TIME IS BRAIN' :**
Chaque minute d'ischémie artérielle non reperfusée = 1.9 million de neurones perdus !`,
    authorOrSource: "Clinique Neurologique Hospitalière",
    tags: ['Sémiologie', 'Mnémo', 'AVC'],
  },
];

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: 'u-1',
    username: 'dr_sarah_cardio',
    fullName: 'Dr. Sarah Amrani',
    academicYear: '4ème Année',
    faculty: 'Faculté de Médecine Alger',
    totalXp: 3850,
    streakCount: 28,
    title: 'Major de Promo',
    avatarUrl: 'https://images.unsplash.com/photo-1594824813637-8848123282f6?w=120&auto=format&fit=crop&q=80',
  },
  {
    rank: 2,
    userId: 'u-2',
    username: 'yacine_b',
    fullName: 'Yacine Benali',
    academicYear: '4ème Année',
    faculty: 'Faculté de Médecine Paris Descartes',
    totalXp: 3420,
    streakCount: 21,
    title: 'Maître du Stéthoscope',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80',
  },
  {
    rank: 3,
    userId: 'u-3',
    username: 'amine_cardio',
    fullName: 'Amine Khelifi',
    academicYear: '4ème Année',
    faculty: 'Faculté de Médecine d\'Alger',
    totalXp: 2890,
    streakCount: 14,
    title: 'Interne Prometteur',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  },
  {
    rank: 4,
    userId: 'u-4',
    username: 'karim_neuro',
    fullName: 'Karim Mansouri',
    academicYear: '4ème Année',
    faculty: 'Faculté de Médecine Lyon Est',
    totalXp: 2610,
    streakCount: 12,
    title: 'Clinique & Diagnostic',
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=120&auto=format&fit=crop&q=80',
  },
  {
    rank: 5,
    userId: 'u-5',
    username: 'ines_gastro',
    fullName: 'Inès Bouzid',
    academicYear: '4ème Année',
    faculty: 'Faculté de Médecine Constantine',
    totalXp: 2240,
    streakCount: 9,
    title: 'Externe Assidue',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
  },
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'item-freeze',
    name: 'Gel Anti-Rupture de Série (Streak Freeze)',
    description: 'Protège votre flamme de série pendant 24h lors des gardes de nuit chargées.',
    priceXp: 250,
    icon: 'ShieldAlert',
    type: 'streak_freeze',
  },
  {
    id: 'item-cafe',
    name: 'Café de Garde x2 XP (1 Heure)',
    description: 'Double tous les points XP gagnés sur les QCMs et dossiers cliniques pendant 60 minutes.',
    priceXp: 180,
    icon: 'Coffee',
    type: 'boost',
  },
  {
    id: 'item-pass',
    name: 'Badge "Major du Tour d\'Externat"',
    description: 'Aura dorée exclusive visible sur le classement de promotion.',
    priceXp: 500,
    icon: 'Crown',
    type: 'pass',
  },
];
