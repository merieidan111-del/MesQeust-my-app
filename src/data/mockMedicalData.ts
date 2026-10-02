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
    progressPercent: 68,
  },
  {
    id: 'mod-neuro',
    title: 'Neurologie Clinique',
    academicYear: '4ème Année',
    icon: 'Brain',
    color: 'from-indigo-500 to-purple-600',
    description: 'AVC ischémiques & hémorragiques, épilepsie, maladie de Parkinson, méningites.',
    totalQuestions: 24,
    coursesCount: 4,
    progressPercent: 45,
  },
  {
    id: 'mod-gastro',
    title: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    icon: 'Stethoscope',
    color: 'from-amber-500 to-orange-600',
    description: 'Cirrhose et complications, pancréatite aiguë, MICI, hémorragies digestives.',
    totalQuestions: 20,
    coursesCount: 4,
    progressPercent: 30,
  },
  {
    id: 'mod-pneumo',
    title: 'Pneumologie',
    academicYear: '4ème Année',
    icon: 'Wind',
    color: 'from-cyan-500 to-blue-600',
    description: 'Asthme aigu grave, BPCO, pneumopathie franche lobaire, embolie pulmonaire.',
    totalQuestions: 18,
    coursesCount: 4,
    progressPercent: 55,
  },
  {
    id: 'mod-hemato',
    title: 'Hématologie & Onco',
    academicYear: '4ème Année',
    icon: 'Activity',
    color: 'from-fuchsia-500 to-pink-600',
    description: 'Anémies, leucémies aiguës, lymphomes, hémostase et thrombopénie.',
    totalQuestions: 16,
    coursesCount: 3,
    progressPercent: 20,
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
    progressPercent: 82,
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
    progressPercent: 60,
  },
  {
    id: 'mod-urg5',
    title: 'Urgences & Réanimation',
    academicYear: '5ème Année',
    icon: 'Flame',
    color: 'from-red-500 to-rose-700',
    description: 'États de choc (septique, cardiogénique, anaphylactique), arrêt cardio-respiratoire.',
    totalQuestions: 26,
    coursesCount: 5,
    progressPercent: 40,
  },
  {
    id: 'mod-ped5',
    title: 'Pédiatrie & Néonatalogie',
    academicYear: '5ème Année',
    icon: 'Baby',
    color: 'from-sky-500 to-indigo-600',
    description: 'Bronchiolite du nourrisson, déshydratation aiguë, purpura fulminans, convulsions.',
    totalQuestions: 20,
    coursesCount: 4,
    progressPercent: 25,
  },
];

export const MEDICAL_COURSES: Course[] = [
  ...ALL_CARDIOLOGY_COURSES,

  // Neurology Courses
  {
    id: 'crs-neuro-1',
    moduleId: 'mod-neuro',
    title: 'Accidents Vasculaires Cérébraux Ischémiques & Reperfusion',
    orderIndex: 1,
    qcmCount: 12,
    casCliniqueCount: 3,
    resumesCount: 2,
    astucesCount: 4,
    completedPercent: 75,
  },
  {
    id: 'crs-neuro-2',
    moduleId: 'mod-neuro',
    title: 'Crises Épileptiques & État de Mal Convulsif',
    orderIndex: 2,
    qcmCount: 10,
    casCliniqueCount: 2,
    resumesCount: 1,
    astucesCount: 3,
    completedPercent: 40,
  },
  {
    id: 'crs-neuro-3',
    moduleId: 'mod-neuro',
    title: 'Maladie de Parkinson & Syndromes Parkinsoniens',
    orderIndex: 3,
    qcmCount: 8,
    casCliniqueCount: 2,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 15,
  },

  // Gastroenterology Courses
  {
    id: 'crs-gastro-1',
    moduleId: 'mod-gastro',
    title: 'Cirrhose du Foie & Complications (Ascite, PBS, Encéphalopathie)',
    orderIndex: 1,
    qcmCount: 10,
    casCliniqueCount: 3,
    resumesCount: 2,
    astucesCount: 4,
    completedPercent: 50,
  },
  {
    id: 'crs-gastro-2',
    moduleId: 'mod-gastro',
    title: 'Pancréatite Aiguë Médicale & Biliaire',
    orderIndex: 2,
    qcmCount: 8,
    casCliniqueCount: 2,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 20,
  },

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
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  // All comprehensive Cardiology questions integrated without skipping any
  ...ALL_CARDIOLOGY_QUESTIONS,

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

  // Question 8 (Gastroenterology)
  {
    id: 'q-gastro-01',
    courseId: 'crs-gastro-1',
    questionNumber: 8,
    type: 'CasClinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Un patient de 54 ans avec cirrhose éthylique Child-Pugh C est hospitalisé pour ascite abondante, fièvre à 38.6°C et confusion modérée. La ponction d'ascite montre 450 polynucléaires neutrophiles/mm³ et 14 g/L de protides. Quels sont les deux piliers thérapeutiques immédiats recommandés pour sauver le patient du choc septique et du syndrome hépato-rénal ?",
    options: [
      "Diurétiques à fortes doses (Furosémide 80 mg + Spironolactone 200 mg)",
      "Antibiothérapie probabiliste par Céfotaxime 2g x 3/j IV (ou Ceftriaxone) ET perfusion d'albumine humaine à 20% (1,5 g/kg à J1 puis 1 g/kg à J3)",
      "Lavement évacuateur au sérum salé seul sans antibiotiques",
      "Mise sous anti-inflammatoires non stéroïdiens (AINS) à fortes doses",
      "Régime sans sel strict sans apport d'albumine"
    ],
    correctAnswers: [1],
    explanation: "L'infection spontanée du liquide d'ascite (PNN > 250/mm³) nécessite une antibiothérapie probabiliste active sur les entérobactéries (Céfotaxime ou Ceftriaxone IV) ET impérativement une perfusion d'albumine humaine à 20% (1.5 g/kg à J1 puis 1 g/kg à J3) pour prévenir le syndrome hépato-rénal et réduire la mortalité de manière prouvée.",
    clinicalPearl: "Infection d'ascite : PNN > 250/mm³ = Céphalosporine de 3ème génération + Albumine 20% à J1 et J3 (réduit la mortalité de 30% à 10%).",
  }
];

export const COURSE_RESOURCES: CourseResource[] = [
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
    userId: 'user-extern-01',
    username: 'meriem_laidani',
    fullName: 'Meriem Laidani',
    academicYear: '4ème Année',
    faculty: 'Faculté de Médecine',
    totalXp: 2890,
    streakCount: 14,
    title: 'Interne Prometteuse',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&auto=format&fit=crop&q=80',
    isCurrentUser: true,
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
