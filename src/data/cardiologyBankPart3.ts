import { Question, Course } from '../types/medical';

export const CARDIOLOGY_COURSES_PART2: Course[] = [
  {
    id: 'crs-troubles-conduction',
    moduleId: 'mod-cardio',
    title: 'Troubles de la Conduction (BAV, Blocs de Branche)',
    orderIndex: 6,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-dissection',
    moduleId: 'mod-cardio',
    title: 'Dissection Aortique',
    orderIndex: 7,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-endocardite',
    moduleId: 'mod-cardio',
    title: 'Endocardite Infectieuse',
    orderIndex: 8,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-hta',
    moduleId: 'mod-cardio',
    title: 'Hypertension Artérielle (HTA)',
    orderIndex: 9,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-htap',
    moduleId: 'mod-cardio',
    title: 'Hypertension Artérielle Pulmonaire (HTAP)',
    orderIndex: 10,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
];

export const CARDIOLOGY_QUESTIONS_PART3: Question[] = [
  // ==========================================
  // TROUBLES DE CONDUCTION - 25 QCMs
  // ==========================================
  {
    id: 'q-cond-01',
    courseId: 'crs-troubles-conduction',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient de 70 ans, un ECG montre un allongement fixe de l'intervalle PR à 280 ms. Quel est le mécanisme le plus probable ?",
    options: [
      "Bloc sino-auriculaire du 1er degré",
      "Bloc auriculo-ventriculaire du 1er degré",
      "Bloc auriculo-ventriculaire du 2e degré type Mobitz I",
      "Dysfonction sinusale",
      "Bloc de branche droit complet"
    ],
    correctAnswers: [1],
    explanation: "Le BAV du 1er degré est défini par un allongement fixe et constant de l'intervalle PR > 200 ms (ici 280 ms), chaque onde P étant suivie d'un QRS (pas d'onde P bloquée). Le bloc siège généralement dans le nœud auriculo-ventriculaire.",
    clinicalPearl: "BAV 1er degré = PR fixe > 200 ms sans onde P bloquée."
  },
  {
    id: 'q-cond-02',
    courseId: 'crs-troubles-conduction',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément du tracé ECG est pathognomonique d'un BAV du 2e degré type Mobitz I (Wenckebach) ?",
    options: [
      "Intervalle PR constant suivi d'une onde P bloquée",
      "Intervalle PR qui s'allonge progressivement jusqu'à une onde P bloquée",
      "Ondes P bloquées de façon aléatoire",
      "Complexes QRS élargis",
      "Dissociation auriculo-ventriculaire complète"
    ],
    correctAnswers: [1],
    explanation: "Le phénomène de Wenckebach (Mobitz I) se caractérise par un allongement progressif de l'intervalle PR cycle après cycle jusqu'à la survenue d'une onde P bloquée non suivie de QRS.",
    clinicalPearl: "Mnémo : 'Wenckebach se Fatigue en Montant' → Le PR s'allonge jusqu'à bloquer un QRS."
  },
  {
    id: 'q-cond-03',
    courseId: 'crs-troubles-conduction',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Un ECG montre un rythme sinusal avec un intervalle PR constant de 160 ms et un complexe QRS bloqué de façon intermittente sans modification du PR. Quel est le type de bloc et sa localisation probable ?",
    options: [
      "Mobitz I - Intranodal",
      "Mobitz II - Infranodal (hissien ou sous-hissien)",
      "BAV du 1er degré - Nodal",
      "Bloc 2:1 - Nodal",
      "BAV du 3e degré - Infranodal"
    ],
    correctAnswers: [1],
    explanation: "Le BAV 2 Mobitz II est défini par la survenue inopinée d'ondes P bloquées avec un intervalle PR strictement constant sur les complexes conduits. Il est de siège infranodal (faisceau de His ou branches), souvent organique et à haut risque d'évolution vers un BAV complet syncopal.",
    clinicalPearl: "Mnémo : 'Mobitz II est Méchant et Brutal' → PR fixe, bloc brutal, siège infranodal."
  },
  {
    id: 'q-cond-04',
    courseId: 'crs-troubles-conduction',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Un patient présente un BAV 2:1. Quel signe ECG oriente vers un siège INFRANODAL de ce bloc ?",
    options: [
      "Un intervalle PR > 300 ms sur les complexes conduits",
      "La présence de périodes de Wenckebach ailleurs sur le tracé",
      "Un complexe QRS fin (< 120 ms)",
      "Un intervalle PR < 160 ms sur les complexes conduits avec QRS larges",
      "Une fréquence cardiaque rapide"
    ],
    correctAnswers: [3],
    explanation: "Dans le BAV 2:1, un PR court (< 160 ms) avec QRS élargis oriente vers un bloc situé sous le nœud AV (infranodal), le nœud AV conduisant vite tandis que le système de His-Purkinje distal est malade.",
    clinicalPearl: "BAV 2:1 : PR long + QRS fins = Nodal. PR court + QRS larges = Infranodal."
  },
  {
    id: 'q-cond-05',
    courseId: 'crs-troubles-conduction',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans un BAV complet (3e degré), qu'observe-t-on à l'ECG ?",
    options: [
      "Un allongement progressif du PR",
      "Une relation fixe entre les ondes P et les QRS",
      "Une dissociation auriculo-ventriculaire complète avec un rythme d'échappement",
      "Des ondes P bloquées sporadiques",
      "Une pause sinusale > 3 secondes"
    ],
    correctAnswers: [2],
    explanation: "Le BAV complet (3e degré) se traduit par une dissociation auriculo-ventriculaire absolue : les oreillettes battent à leur propre fréquence (ondes P régulières) et les ventricules sont activés de façon indépendante par un rythme d'échappement plus lent.",
    clinicalPearl: "BAV 3 = Dissociation AV complète (ondes P régulières sans rapport avec les QRS réguliers)."
  },
  {
    id: 'q-cond-06',
    courseId: 'crs-troubles-conduction',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel est le rythme d'échappement typique d'un BAV complet de siège INFRANODAL ?",
    options: [
      "Rythme jonctionnel avec QRS fins, FC 40-60/min",
      "Rythme sinusal avec bloc de branche",
      "Rythme ventriculaire avec QRS larges, FC 20-40/min",
      "Fibrillation auriculaire",
      "Tachycardie jonctionnelle"
    ],
    correctAnswers: [2],
    explanation: "Un bloc infranodal sous le faisceau de His impose un foyer d'échappement ventriculaire distal, intrinsèquement très lent (20-40 bpm), instable et caractérisé par des QRS larges.",
    clinicalPearl: "Mnémo Échappement : 'Joli Ventricule' → Jonctionnel (QRS fins, 40-60) vs Ventriculaire (QRS larges, 20-40)."
  },
  {
    id: 'q-cond-07',
    courseId: 'crs-troubles-conduction',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome brady-tachycardie est une manifestation de :",
    options: [
      "Bloc sino-auriculaire du 3e degré",
      "Bloc auriculo-ventriculaire du 2e degré",
      "Maladie de l'oreillette (dysfonction sinusale)",
      "Bloc de branche gauche",
      "Hyperkaliémie"
    ],
    correctAnswers: [2],
    explanation: "La maladie de l'oreillette associe des épisodes de tachycardie atriale (FA ou flutter) et des périodes de bradycardie sinusale sévère ou de pauses sinusales prolongées post-réductionnelles.",
    clinicalPearl: "Syndrome brady-tachycardie = Maladie de l'oreillette (dysfonction sinusale intrinsèque)."
  },
  {
    id: 'q-cond-08',
    courseId: 'crs-troubles-conduction',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un QRS > 120 ms dans les dérivations D1 et aVL avec un retard à l'onde intrinsécoïde > 60 ms en V6 évoque :",
    options: [
      "Un bloc de branche droit complet",
      "Un bloc de branche gauche complet",
      "Un hémibloc antérieur gauche",
      "Un BAV du 1er degré",
      "Un bloc de branche droit avec hémibloc antérieur gauche"
    ],
    correctAnswers: [1],
    explanation: "Les critères du bloc de branche gauche (BBG) complet sont : durée du QRS ≥ 120 ms, retard de déflexion intrinsécoïde ≥ 60 ms en V5-V6, onde R large et encochée sans onde Q en DI, aVL, V6.",
    clinicalPearl: "BBG = QRS large ≥ 120 ms + Retard intrinsécoïde en V5-V6/DI > 60 ms."
  },
  {
    id: 'q-cond-09',
    courseId: 'crs-troubles-conduction',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "L'association d'un BBD et d'un hémibloc antérieur gauche (HAG) constitue :",
    options: [
      "Un bloc trifasciculaire",
      "Un bibloc",
      "Un BAV du 2e degré",
      "Un bloc infra-hissien",
      "B et D"
    ],
    correctAnswers: [4],
    explanation: "BBD + HAG correspond à l'interruption de deux des trois voies de conduction sous-hissiennes (faisceau droit et hémibranche antérieure gauche). C'est un bibloc (ou bloc bifasciculaire), de siège anatomique infra-hissien.",
    clinicalPearl: "Bibloc = BBD + HAG (atteinte de 2 faisceaux sur 3 sous le tronc du His)."
  },
  {
    id: 'q-cond-10',
    courseId: 'crs-troubles-conduction',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le symptôme cardinal évoquant une syncope d'origine rythmique (syndrome d'Adams-Stokes) ?",
    options: [
      "Prodrome avec sueurs et nausées",
      "Convulsions et morsure de langue",
      "Perte de connaissance brutale sans prodrome avec récupération rapide",
      "Phase post-critique confuse",
      "Céphalées pulsatiles"
    ],
    correctAnswers: [2],
    explanation: "La syncope d'Adams-Stokes (sur BAV complet paroxystique ou pause sinusale) est foudroyante : chute brutale 'à l'emporte-pièce' sans prodrome, avec reprise de conscience immédiate et coloration de la face.",
    clinicalPearl: "Adams-Stokes = Syncope brutale à l'emporte-pièce sans prodrome, récupération instantanée."
  },
  {
    id: 'q-cond-11',
    courseId: 'crs-troubles-conduction',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans un infarctus inférieur, quel type de bloc est le plus fréquemment observé et généralement transitoire ?",
    options: [
      "BAV du 3e degré infranodal",
      "BAV du 2e degré type Mobitz II",
      "BAV du 2e degré type Mobitz I (Wenckebach)",
      "Bloc de branche gauche complet",
      "Bloc sino-auriculaire du 3e degré"
    ],
    correctAnswers: [2],
    explanation: "L'artère coronaire droite vascularise le nœud AV via l'artère du nœud AV. Son occlusion proximale entraîne une ischémie/œdème nodal avec hypertonie vagale, provoquant typiquement un BAV Wenckebach nodal réversible sous atropine.",
    clinicalPearl: "IDM inférieur = BAV Mobitz I nodal (transitoire, sensible à l'atropine)."
  },
  {
    id: 'q-cond-12',
    courseId: 'crs-troubles-conduction',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel traitement est le plus approprié en urgence pour un BAV symptomatique lié à un IDM inférieur ?",
    options: [
      "Amiodarone IV",
      "Atropine IV",
      "Digitalique",
      "Bêta-bloquant",
      "Cardioversion électrique"
    ],
    correctAnswers: [1],
    explanation: "L'Atropine (0.5 à 1 mg IV) lève le tonus vagal et rétablit la conduction au niveau du nœud auriculo-ventriculaire dans les blocs nodaux ischémiques inférieurs.",
    clinicalPearl: "BAV nodal symptomatique = Atropine IV en 1ère intention."
  },
  {
    id: 'q-cond-13',
    courseId: 'crs-troubles-conduction',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Une pause > 3 secondes sur un Holter ECG, sans onde P, évoque :",
    options: [
      "Un BAV du 2e degré",
      "Un bloc sino-auriculaire du 3e degré ou un arrêt sinusal",
      "Une fibrillation auriculaire",
      "Un BAV du 1er degré",
      "Un bloc de branche"
    ],
    correctAnswers: [1],
    explanation: "L'absence d'ondes P pendant une pause de plus de 3 secondes prouve l'arrêt d'émission ou de sortie de l'impulsion sinusale (arrêt sinusal ou bloc sino-auriculaire complet de degré 3).",
    clinicalPearl: "Pause sans onde P > 3s = Arrêt sinusal ou BSA 3 (indication de pacemaker si symptomatique)."
  },
  {
    id: 'q-cond-14',
    courseId: 'crs-troubles-conduction',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un BAV complet avec un rythme d'échappement à QRS fins et FC à 50/min suggère un siège :",
    options: [
      "Infranodal",
      "Nodal",
      "Sino-auriculaire",
      "Intra-hissien",
      "Ventriculaire"
    ],
    correctAnswers: [1],
    explanation: "Un échappement à QRS fins avec fréquence ventriculaire conservée autour de 40-50 bpm provient de la jonction AV (nœud ou tronc de His haut situé), signant un bloc situé au-dessus dans le nœud AV (bloc nodal).",
    clinicalPearl: "Échappement jonctionnel à QRS fins (40-60 bpm) = Siège nodal du BAV."
  },
  {
    id: 'q-cond-15',
    courseId: 'crs-troubles-conduction',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la cause la plus fréquente de dysfonction sinusale chronique chez le sujet âgé ?",
    options: [
      "Ischémie coronarienne aiguë",
      "Hyperkaliémie",
      "Dégénérescence idiopathique fibrotique du nœud sinusal (maladie de Lenègre/Lev)",
      "Surdosage en bêta-bloquants",
      "Péricardite"
    ],
    correctAnswers: [2],
    explanation: "La maladie dégénérative fibro-scléreuse sénile du tissu nodal (maladie de Lenègre ou de Lev) est de loin la première cause de dysfonction sinusale et de BAV chronique chez les personnes âgées.",
    clinicalPearl: "Cause n°1 chez le sujet âgé = Dégénérescence fibreuse idiopathique du tissu conducteur."
  },
  {
    id: 'q-cond-16',
    courseId: 'crs-troubles-conduction',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Un BAV 2:1 peut être difficile à classer. Quel élément est en faveur d'un siège NODAL ?",
    options: [
      "QRS larges",
      "Intervalle PR court (< 160 ms) sur les complexes conduits",
      "Présence de séquences de Wenckebach à d'autres moments",
      "Rythme d'échappement ventriculaire",
      "Ondes T amples"
    ],
    correctAnswers: [2],
    explanation: "La coexistence de périodes typiques de Wenckebach (Mobitz I) sur les tracés continus ou lors des manœuvres vagales confirme que le BAV 2:1 est une variante de haut degré d'un bloc nodal bénin.",
    clinicalPearl: "Wenckebach retrouvé ailleurs = BAV 2:1 d'origine nodale."
  },
  {
    id: 'q-cond-17',
    courseId: 'crs-troubles-conduction',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "L'atropine est contre-indiquée ou inefficace dans quel type de bloc ?",
    options: [
      "BAV du 1er degré asymptomatique",
      "BAV du 2e degré type Mobitz I post-IDM inférieur",
      "BAV du 2e degré type Mobitz II ou bloc infranodal",
      "Pause sinusale",
      "Bradycardie sinusale"
    ],
    correctAnswers: [2],
    explanation: "L'atropine accélère la dépolarisation auriculaire sans améliorer la conduction infranodale lésée. Elle augmente le bombardement du système His-Purkinje malade et aggrave le ratio de blocage (peut transformer un Mobitz II en BAV complet).",
    clinicalPearl: "Atropine contre-indiquée dans le Mobitz II et les blocs infranodaux !"
  },
  {
    id: 'q-cond-18',
    courseId: 'crs-troubles-conduction',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le 'bloc de haut degré' est défini par :",
    options: [
      "Un allongement du PR > 300 ms",
      "Plus d'ondes P bloquées consécutives que conduites (ex: 3:1, 4:1)",
      "La présence d'un rythme d'échappement",
      "Une dissociation AV complète",
      "Des QRS toujours larges"
    ],
    correctAnswers: [1],
    explanation: "Le BAV de haut degré se définit par l'échec de conduction de deux ondes P consécutives ou plus (conduction 3:1, 4:1...) sans dissociation complète.",
    clinicalPearl: "BAV de haut degré = ≥ 2 ondes P bloquées consécutives (3:1, 4:1)."
  },
  {
    id: 'q-cond-19',
    courseId: 'crs-troubles-conduction',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient avec un BBD et un HAG a un risque accru d'évoluer vers :",
    options: [
      "Une tachycardie ventriculaire",
      "Un BAV complet infranodal syncopal",
      "Une fibrillation auriculaire",
      "Un syndrome de WPW",
      "Un BAV du 1er degré"
    ],
    correctAnswers: [1],
    explanation: "La destruction conjointe de la branche droite et de l'hémibranche antérieure gauche ne laisse que l'hémibranche postérieure pour assurer la conduction vers les ventricules. Si celle-ci flanche, le BAV 3 infranodal est immédiat.",
    clinicalPearl: "Bibloc BBD + HAG : Surveillance étroite du risque de BAV complet paroxystique."
  },
  {
    id: 'q-cond-20',
    courseId: 'crs-troubles-conduction',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament peut provoquer des troubles de la conduction à dose toxique ?",
    options: [
      "Paracétamol",
      "Digoxine",
      "Vitamine C",
      "Oméprazole",
      "Salbutamol"
    ],
    correctAnswers: [1],
    explanation: "La digoxine exerce un puissant effet dromotrope négatif par hypertonie vagale et action directe. À dose toxique ou en cas d'hypokaliémie, elle induit BAV 1, BAV 2, BAV 3 et rythmes d'échappement.",
    clinicalPearl: "Surdosage digitalique = BAV de tout degré + troubles de conduction nodale."
  },
  {
    id: 'q-cond-21',
    courseId: 'crs-troubles-conduction',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La présence d'un bloc bifasciculaire impose de rechercher :",
    options: [
      "Un BAV du 1er degré (PR long, formant un bloc trifasciculaire incomplet)",
      "Un BAV du 2e degré",
      "Un BAV du 3e degré",
      "Un allongement de l'espace QT",
      "Une onde Delta"
    ],
    correctAnswers: [0],
    explanation: "L'association d'un bloc bifasciculaire (BBD + HAG ou BBG) avec un allongement du PR réalise un bloc trifasciculaire incomplet, témoignant d'une atteinte diffuse du système de conduction avec forte indication de stimulation cardiaque.",
    clinicalPearl: "Bloc bifasciculaire + PR long = Bloc trifasciculaire incomplet."
  },
  {
    id: 'q-cond-22',
    courseId: 'crs-troubles-conduction',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Un rythme jonctionnel accéléré peut masquer un :",
    options: [
      "Bloc de branche",
      "BAV du 1er degré",
      "BAV du 3e degré (dissociation isorythmique)",
      "BAV du 2e degré",
      "Flutter atrial"
    ],
    correctAnswers: [2],
    explanation: "Lorsque l'échappement jonctionnel bat à une fréquence proche du nœud sinusal (50-60 bpm), les ondes P et QRS se succèdent de manière fortuitement synchronisée ('dissociation isorythmique'), masquant le BAV 3 complet.",
    clinicalPearl: "Dissociation isorythmique : bien observer la dérive du PR pour démasquer le BAV 3."
  },
  {
    id: 'q-cond-23',
    courseId: 'crs-troubles-conduction',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la première étape diagnostique face à une syncope inexpliquée ?",
    options: [
      "IRM cérébrale",
      "Épreuve d'effort",
      "ECG standard 12 dérivations",
      "Coronarographie",
      "Ponction lombaire"
    ],
    correctAnswers: [2],
    explanation: "L'ECG 12 dérivations de repos est l'examen initial obligatoire : il recherche un BAV, un bloc de branche, une pré-excitation, un QT long ou un aspect de Brugada.",
    clinicalPearl: "Toute syncope inexpliquée = ECG 12 dérivations immédiat."
  },
  {
    id: 'q-cond-24',
    courseId: 'crs-troubles-conduction',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Un BAV complet lors d'une fibrillation auriculaire se traduit par :",
    options: [
      "Une fréquence ventriculaire rapide et irrégulière",
      "Une fréquence ventriculaire lente et strictement régulière",
      "L'absence d'ondes P",
      "Des complexes QRS très larges",
      "Des ondes T inversées"
    ],
    correctAnswers: [1],
    explanation: "Normalement, la FA est 'anarchique et irrégulière'. Si les influx auriculaires sont bloqués par un BAV complet, les ventricules sont pris en charge par un échappement régulier, devenant paradoxalement lents et parfaitement réguliers !",
    clinicalPearl: "FA avec cadence ventriculaire lente et régulière = BAV complet sous-jacent (souvent toxique digitalique)."
  },
  {
    id: 'q-cond-25',
    courseId: 'crs-troubles-conduction',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication formelle à la pose d'un pacemaker définitif est :",
    options: [
      "Tout BAV du 1er degré",
      "BAV du 2e degré type Mobitz I asymptomatique",
      "BAV du 3e degré symptomatique",
      "Bloc de branche droit isolé asymptomatique",
      "Bradycardie sinusale nocturne physiologique"
    ],
    correctAnswers: [2],
    explanation: "Le BAV complet (3e degré) permanent ou paroxystique symptomatique est une indication de classe I pour l'implantation d'un stimulateur cardiaque définitif (pacemaker bivalve/double chambre).",
    clinicalPearl: "BAV 3 symptomatique = Pacemaker définitif de classe I."
  },

  // TROUBLES DE CONDUCTION - 5 CAS CLINIQUES
  {
    id: 'cas-cond-01',
    courseId: 'crs-troubles-conduction',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : Le malaise du retraité\nM. Ahmed, 72 ans, diabétique et hypertendu, consulte pour un épisode de 'voile noir' suivi d'une chute sans perte de connaissance totale. L'ECG montre un rythme sinusal à 75/min, PR 220 ms, BBD complet et onde Q en dérivations latérales.\nQuel est le diagnostic syndromique le plus probable devant son malaise ?",
    options: [
      "Accident vasculaire cérébral",
      "Crise d'épilepsie partielle",
      "Syncope réflexe vasovagale",
      "Malaise d'origine rythmique (brachyarythmie par trouble conductif)",
      "Hypoglycémie"
    ],
    correctAnswers: [3],
    explanation: "Sujet âgé avec épisode lipothymique bref et ECG montrant un bloc bifasciculaire (BBD + PR long) = Malaise syncopal sur trouble de conduction à haut risque de BAV complet paroxystique.",
    clinicalPearl: "Lipothymie + BBD et PR long = Suspecter un BAV paroxystique de haut grade."
  },
  {
    id: 'cas-cond-02',
    courseId: 'crs-troubles-conduction',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 : L'infarctus inférieur\nMme Fatima, 60 ans, est admise pour un IDM inférieur. Son ECG initial montre un BAV du 2e degré type Wenckebach. Elle est asymptomatique et sa PA est à 120/75 mmHg.\nQuelle est la conduite à tenir IMMÉDIATE concernant ce trouble conductif ?",
    options: [
      "Pose urgente d'un pacemaker définitif",
      "Injection IV d'Atropine",
      "Simple surveillance scopée, car souvent transitoire",
      "Cardioversion électrique",
      "Injection IV d'Amiodarone"
    ],
    correctAnswers: [2],
    explanation: "Le BAV Mobitz I bien toléré dans l'IDM inférieur est lié à une ischémie transitoire du nœud AV. La surveillance scopée suffit car il régresse après revascularisation de la coronaire droite. L'atropine n'est administrée qu'en cas de bradycardie symptomatique.",
    clinicalPearl: "IDM inférieur + Wenckebach asymptomatique = Surveillance scopée simple (régression fréquente)."
  },
  {
    id: 'cas-cond-03',
    courseId: 'crs-troubles-conduction',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 3 : La chute inexpliquée\nUn homme de 80 ans est hospitalisé après une chute. Le monitoring cardiaque montre des épisodes de FA rapide alternant avec des pauses de 4 secondes lors des réductions spontanées.\nQuel diagnostic évoquez-vous ?",
    options: [
      "BAV paroxystique",
      "Maladie de l'oreillette (Syndrome brady-tachycardie)",
      "Hyperthyroïdie",
      "Embolie pulmonaire",
      "Torsade de pointe"
    ],
    correctAnswers: [1],
    explanation: "L'alternance d'arythmie atriale rapide (FA) et de pauses sinusales prolongées (> 3s) à l'arrêt de la crise est la définition du syndrome brady-tachycardie (maladie de l'oreillette), justifiant la pose d'un pacemaker.",
    clinicalPearl: "FA rapide + Pause sinusale post-réductionnelle > 3s = Maladie de l'oreillette."
  },
  {
    id: 'cas-cond-04',
    courseId: 'crs-troubles-conduction',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 4 : Le bilan systématique\nL'ECG d'un patient de 50 ans, asymptomatique, révèle un BBD complet et un HAG.\nQuelle investigation complémentaire est la plus importante ?",
    options: [
      "Épreuve d'effort",
      "Holter ECG de 24 heures",
      "Mesure précise de l'intervalle PR sur un ECG de bonne qualité",
      "Coronarographie",
      "IRM cardiaque"
    ],
    correctAnswers: [2],
    explanation: "Devant un bibloc BBD + HAG, la mesure de l'intervalle PR est primordiale pour dépister une atteinte du 3ème faisceau (bloc trifasciculaire incomplet avec PR > 200 ms).",
    clinicalPearl: "BBD + HAG = Toujours vérifier le PR pour écarter un bloc trifasciculaire."
  },
  {
    id: 'cas-cond-05',
    courseId: 'crs-troubles-conduction',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : L'urgence médicamenteuse\nUn patient traité par Digoxine pour une FA présente des nausées et un ECG montre un bloc 2:1 avec un PR court et des QRS larges.\nQuelle est la cause la plus probable et la conduite à tenir ?",
    options: [
      "IDM ; faire une coronarographie en urgence",
      "Hyperkaliémie ; administrer du Calcium",
      "Toxicité digitalique ; arrêt immédiat de la Digoxine et dosage de la digoxinémie/kaliémie",
      "Hypokaliémie ; supplémenter en Potassium",
      "Péricardite ; prescrire des AINS"
    ],
    correctAnswers: [2],
    explanation: "La triade : traitement par digitaliques, signes digestifs (nausées) et apparition de troubles de conduction ventriculaire/nodale signe l'intoxication digitalique. L'arrêt immédiat et le bilan biologique s'imposent.",
    clinicalPearl: "Signes digestifs + BAV sous digoxine = Intoxication digitalique → Arrêt immédiat !"
  }
];
