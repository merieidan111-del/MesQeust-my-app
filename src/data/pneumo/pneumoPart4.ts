import { Question, CourseResource } from '../../types/medical';

// Lesson 6: Les Tumeurs Médiastinals
export const PNEUMO_LESSON_6_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-6-01',
    courseId: 'crs-pneumo-6',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Une masse médiastinale supérieure dont le contour externe disparaît au-dessus de la clavicule sur une radiographie standard est très probablement de siège :",
    options: [
      "A) Postérieur",
      "B) Moyen",
      "C) Antérieur",
      "D) Thoraco-abdominal",
      "E) Paravertébral"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Antérieur.\nExplication : C'est la définition du signe cervico-thoracique. La partie supérieure de la masse antérieure se \"noye\" dans les parties molles du cou, faisant disparaître son contour au-dessus de la clavicule, contrairement aux masses postérieures qui restent bien délimitées."
  },
  {
    id: 'q-pnm-6-02',
    courseId: 'crs-pneumo-6',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Le syndrome de Claude Bernard Horner, retrouvé dans certaines tumeurs médiastinales, est dû à une atteinte :",
    options: [
      "A) Du nerf phrénique",
      "B) Du nerf laryngé récurrent",
      "C) De la chaîne sympathique cervicale",
      "D) Du plexus brachial",
      "E) De la moelle épinière"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) De la chaîne sympathique cervicale.\nExplication : Ce syndrome (ptosis, myosis, anhidrose) est caractéristique d'une compression ou d'une infiltration du ganglion stellaire ou de la chaîne sympathique cervicale, souvent par des tumeurs de l'apex pulmonaire (Pancoast) ou du médiastin postéro-supérieur."
  },
  {
    id: 'q-pnm-6-03',
    courseId: 'crs-pneumo-6',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Parmi les éléments suivants, lesquels sont des signes fonctionnels pouvant révéler une tumeur du médiastin antérieur ?",
    options: [
      "A) Dysphagie",
      "B) Dysphonie bitonale",
      "C) Douleurs rétro-sternales majorées en décubitus",
      "D) Syndrome de la veine cave supérieure",
      "E) Myasthénie"
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Correction : C, D, E.\nExplication : Le médiastin antérieur contient des structures comme le thymus (myasthénie), les gros vaisseaux (syndrome cave supérieur) et est proche de la paroi (douleurs antérieures). La dysphonie (B) évoque une atteinte récurrentielle (médiastin moyen). La dysphagie (A) oriente vers le médiastin postérieur (œsophage)."
  },
  {
    id: 'q-pnm-6-04',
    courseId: 'crs-pneumo-6',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. La visualisation des vaisseaux pulmonaires à travers une opacité hilaire sur une radiographie thoracique de face évoque :",
    options: [
      "A) Une atélectasie",
      "B) Une adénopathie hilaire inflammatoire",
      "C) Une masse médiastinale",
      "D) Une embolie pulmonaire",
      "E) Une dilatation de l'artère pulmonaire"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Une masse médiastinale.\nExplication : C'est le signe de recouvrement hilaire. Si les vaisseaux restent visibles à travers l'opacité, celle-ci est en avant ou en arrière du hile, donc d'origine médiastinale, et non pas une dilatation vasculaire ou une consolidation qui effacerait ces vaisseaux."
  },
  {
    id: 'q-pnm-6-05',
    courseId: 'crs-pneumo-6',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Quel(s) dosage(s) biologique(s) est/sont indispensable(s) devant une masse du médiastin antérieur chez un homme jeune ?",
    options: [
      "A) Calcitonine",
      "B) Alpha-foetoprotéine (α-FP)",
      "C) Anticorps anti-récepteurs à l'acétylcholine",
      "D) Bêta-HCG (β-HCG)",
      "E) Cathécholamines urinaires"
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B et D.\nExplication : Ces marqueurs tumoraux sont spécifiques des tumeurs germinales non séminomateuses (chorocarcinome, tumeur vitelline). Leur élévation peut éviter une biopsie à risque et orienter directement vers une chimiothérapie. La calcitonine (A) est pour les tumeurs thyroïdiennes. Les anticorps (C) pour la myasthénie associée au thymome. Les cathécholamines (E) pour les neuroblastomes (médiastin postérieur)."
  },
  {
    id: 'q-pnm-6-06',
    courseId: 'crs-pneumo-6',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Une masse rétro-cardiaque, de densité liquidienne homogène à la TDM, découverte fortuite chez un adulte asymptomatique, évoque le plus :",
    options: [
      "A) Un kyste bronchogénique",
      "B) Un cancer de l'œsophage",
      "C) Un kyste pleuro-péricardique",
      "D) Un thymome",
      "E) Un lymphome"
    ],
    correctAnswers: [0],
    explanation: "Correction : A) Un kyste bronchogénique.\nExplication : Les kystes bronchogéniques sont souvent situés dans le médiastin moyen ou postérieur, près des grosses bronches ou en situation rétro-cardiaque. Ils sont asymptomatiques chez l'adulte et de densité liquidienne. Le kyste pleuro-péricardique (C) est typiquement antéro-inférieur, en cardiophrénique."
  },
  {
    id: 'q-pnm-6-07',
    courseId: 'crs-pneumo-6',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Une masse du médiastin antérieur s'accompagnant d'un syndrome de Cushing paranéoplasique doit faire évoquer en premier :",
    options: [
      "A) Un carcinome thymique",
      "B) Un goitre plongeant",
      "C) Un lymphome de Hodgkin",
      "D) Un tératome mature",
      "E) Un schwannome"
    ],
    correctAnswers: [0],
    explanation: "Correction : A) Un carcinome thymique.\nExplication : Les carcinoïdes thymiques (tumeurs neuroendocrines du thymus) peuvent sécréter de l'ACTH, entraînant un syndrome de Cushing paranéoplasique. C'est une association classique, bien que rare."
  },
  {
    id: 'q-pnm-6-08',
    courseId: 'crs-pneumo-6',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. La présence de calcifications en \"coquille d'œuf\" ou de structures dentaires au sein d'une masse médiastinale est pathognomonique de :",
    options: [
      "A) Un thymome",
      "B) Un goitre",
      "C) Un kyste dermoïde (tératome mature)",
      "D) Un anévrisme de l'aorte",
      "E) Une adénopathie tuberculeuse"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Un kyste dermoïde (tératome mature).\nExplication : Les tératomes matures (kystes dermoïdes) contiennent des tissus différenciés issus des trois feuillets embryonnaires. La présence de dents, poils, os ou graisse est caractéristique. Les calcifications des goitres (B) sont plus irrégulières, celles des adénopathies (E) sont ponctuées."
  },
  {
    id: 'q-pnm-6-09',
    courseId: 'crs-pneumo-6',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Le premier examen d'imagerie à réaliser devant une suspicion de tumeur médiastinale est :",
    options: [
      "A) La TDM thoracique avec injection",
      "B) L'IRM thoracique",
      "C) La radiographie thoracique face et profil",
      "D) La TEP-scan",
      "E) L'échographie endobronchique (EBUS)"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) La radiographie thoracique face et profil.\nExplication : C'est l'examen de première intention, accessible et peu coûteux. Elle permet souvent de détecter la masse, d'orienter sur son siège (grâce au cliché de profil) et de poser l'indication d'un scanner pour caractérisation. Le scanner (A) vient en seconde intention."
  },
  {
    id: 'q-pnm-6-10',
    courseId: 'crs-pneumo-6',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. La myasthénie est le plus souvent associée à :",
    options: [
      "A) Un lymphome médiastinal",
      "B) Un carcinome bronchique",
      "C) Un thymome",
      "D) Une tumeur germinale",
      "E) Un goitre"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Un thymome.\nExplication : Environ 30 à 40% des patients avec un thymome développent une myasthénie gravis, une maladie auto-immune due à la production d'anticorps anti-récepteurs à l'acétylcholine. Inversement, 10-15% des patients myasthéniques ont un thymome. C'est une association paranéoplasique classique nécessitant un dépistage systématique."
  },
  {
    id: 'q-pnm-6-11',
    courseId: 'crs-pneumo-6',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Le signe d'Iceberg (ou thoraco-abdominal) sur une radiographie évoque une masse :",
    options: [
      "A) Du médiastin supérieur",
      "B) Qui traverse le diaphragme",
      "C) De siège purement intrathoracique",
      "D) Avec un angle de raccordement aigu",
      "E) Calcifiée"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Qui traverse le diaphragme.\nExplication : Ce signe décrit une masse dont le contour externe semble traverser le diaphragme. Elle est dite \"thoraco-abdominale\" car une partie est dans le thorax, l'autre dans l'abdomen. Le contour s'estompe car il n'est plus en contact avec le parenchyme pulmonaire (silhouette), mais avec les tissus hydriques sous-diaphragmatiques."
  },
  {
    id: 'q-pnm-6-12',
    courseId: 'crs-pneumo-6',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Parmi les tumeurs suivantes, laquelle relève principalement d'un traitement chirurgical d'emblée lorsqu'elle est localisée ?",
    options: [
      "A) Lymphome de Hodgkin",
      "B) Séminome médiastinal",
      "C) Thymome non invasif (stade I de Masooka)",
      "D) Carcinome à petites cellules du médiastin",
      "E) Neuroblastome métastatique"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Thymome non invasif (stade I de Masooka).\nExplication : Le traitement curateur du thymome est la chirurgie d'exérèse complète. Pour les stades localisés (I et II), elle est souvent suffisante. Les lymphomes (A, B) relèvent de la chimiothérapie/radiothérapie. Les carcinomes (D) et neuroblastomes métastatiques (E) sont traités par chimiothérapie."
  },
  {
    id: 'q-pnm-6-13',
    courseId: 'crs-pneumo-6',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Une dysphonie bitonale par paralysie récurrentielle dans le cadre d'une tumeur médiastinale oriente vers une atteinte préférentielle du :",
    options: [
      "A) Médiastin antérieur",
      "B) Médiastin moyen",
      "C) Médiastin postérieur",
      "D) Loge thymique",
      "E) Région para-vertébrale"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Médiastin moyen.\nExplication : Le nerf laryngé récurrent gauche fait une boucle sous la crosse aortique dans le médiastin moyen avant de remonter vers le larynx. Une masse dans ce compartiment (ex : adénopathies, cancers bronchiques) peut le comprimer, entraînant une paralysie cordale et une dysphonie."
  },
  {
    id: 'q-pnm-6-14',
    courseId: 'crs-pneumo-6',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. L'examen de choix pour évaluer l'envahissement vasculaire (aorte, veine cave) par une tumeur médiastinale est :",
    options: [
      "A) La radiographie thoracique de profil",
      "B) La TDM thoracique avec injection de produit de contraste",
      "C) L'IRM thoracique",
      "D) L'échographie transthoracique",
      "E) L'angiographie"
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B et C.\nExplication : La TDM avec injection est l'examen de première intention, excellent pour analyser les rapports vasculaires. L'IRM est encore plus performante pour distinguer la tumeur de la paroi vasculaire et évaluer l'envahissement, sans irradiation, et est donc souvent utilisée en complément pour le bilan d'extension locale."
  },
  {
    id: 'q-pnm-6-15',
    courseId: 'crs-pneumo-6',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. La découverte fortuite d'une opacité bien limitée de l'angle cardiophrénique droit, changeant de forme avec la position, chez un patient asymptomatique, évoque :",
    options: [
      "A) Un épanchement pleural",
      "B) Un kyste pleuro-péricardique",
      "C) Une hernie hiatale",
      "D) Une tumeur diaphragmatique",
      "E) Un lipome"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Un kyste pleuro-péricardique.\nExplication : C'est la présentation classique du kyste pleuro-péricardique : asymptomatique, localisation antéro-inférieure droite, densité liquidienne, et parfois modification de la forme avec la position (signe de la balle qui roule). La prise en charge est généralement une simple surveillance."
  },
  {
    id: 'q-pnm-6-16',
    courseId: 'crs-pneumo-6',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Quel geste invasif est le plus approprié pour le diagnostic histologique d'une adénopathie du médiastin moyen inaccessible au bronchoscope standard ?",
    options: [
      "A) Médiastinoscopie cervicale",
      "B) Biopsie transcutanée scanoguidée",
      "C) Thoracotomie exploratrice",
      "D) Échoendoscopie bronchique (EBUS) avec ponction",
      "E) Médiastinotomie antérieure (Chamberlain)"
    ],
    correctAnswers: [3],
    explanation: "Correction : D) Échoendoscopie bronchique (EBUS) avec ponction.\nExplication : L'EBUS permet de visualiser et de ponctionner sous contrôle échographique les adénopathies des stations 2, 4, 7, 10, 11 (médiastin moyen et hilaire) via les voies aériennes. C'est moins invasif que la médiastinoscopie (A) qui accède surtout aux stations 2, 4, 7. La biopsie transcutanée (B) est risquée pour les lésions centrales."
  },
  {
    id: 'q-pnm-6-17',
    courseId: 'crs-pneumo-6',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Le syndrome de la veine cave supérieure (SVCS) se manifeste typiquement par :",
    options: [
      "A) Une dyspnée en décubitus",
      "B) Une cyanose et œdème en pèlerine (visage, cou, membres supérieurs)",
      "C) Des céphalées en position penchée",
      "D) Des varices œsophagiennes",
      "E) Une turgescence jugulaire"
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E.\nExplication : Le SVCS est dû à une obstruction du retour veineux supérieur. Il entraîne une augmentation de la pression veineuse responsable d'œdème, cyanose et circulation collatérale du territoire drainé (visage, cou, bras = \"pèlerine\"). Les turgescences jugulaires (E) et les céphalées positionnelles (C) sont classiques. La dyspnée en décubitus (A) est plus liée à une compression trachéale. Les varices œsophagiennes (D) sont liées à une hypertension portale."
  },
  {
    id: 'q-pnm-6-18',
    courseId: 'crs-pneumo-6',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Les neuroblastomes du médiastin postérieur :",
    options: [
      "A) Sont des tumeurs de l'adulte jeune",
      "B) Sécrètent souvent des cathécholamines",
      "C) Présentent souvent des calcifications",
      "D) Sont toujours bénins",
      "E) Peuvent se voir dans la maladie de Recklinghausen"
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B et C.\nExplication : Les neuroblastomes sont des tumeurs malignes de l'enfant, dérivées des crêtes neurales. Elles peuvent sécréter des catécholamines (dosage urinaire des VMA/HVA) et sont souvent calcifiées à l'imagerie. Elles ne font pas partie du tableau de la neurofibromatose de type 1 (E), qui associe plutôt des neurofibromes."
  },
  {
    id: 'q-pnm-6-19',
    courseId: 'crs-pneumo-6',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Une masse médiastinale antérieure chez une femme de 50 ans avec une érythroblastopénie chronique doit faire évoquer :",
    options: [
      "A) Un lymphome",
      "B) Un tératome",
      "C) Un thymome",
      "D) Un goitre",
      "E) Un kyste bronchogénique"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Un thymome.\nExplication : L'érythroblastopénie pure (anémie arégénérative) est une maladie auto-immune fréquemment associée au thymome, tout comme la myasthénie ou l'hypogammaglobulinémie. C'est un indice diagnostique fort."
  },
  {
    id: 'q-pnm-6-20',
    courseId: 'crs-pneumo-6',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. L'avantage principal de l'IRM par rapport à la TDM dans le bilan des tumeurs médiastinales postérieures est :",
    options: [
      "A) Une meilleure détection des calcifications",
      "B) Une analyse plus fine de l'envahissement du foramen vertébral et de la moelle",
      "C) Une acquisition plus rapide",
      "D) Un coût moindre",
      "E) Une meilleure évaluation des adénopathies hilaires"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Une analyse plus fine de l'envahissement du foramen vertébral et de la moelle.\nExplication : L'IRM offre un excellent contraste des tissus mous sans irradiation et permet des coupes dans tous les plans. Elle est supérieure pour évaluer l'extension intra-rachidienne (en sablier) des tumeurs neurogènes du médiastin postérieur et l'envahissement médullaire."
  },
  {
    id: 'q-pnm-6-21',
    courseId: 'crs-pneumo-6',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Le traitement d'un kyste bronchogénique asymptomatique découvert chez un adulte est :",
    options: [
      "A) Une simple surveillance",
      "B) Une aspiration percutanée",
      "C) Une exérèse chirurgicale systématique",
      "D) Un traitement antibiotique prophylactique",
      "E) Une radiothérapie"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Une exérèse chirurgicale systématique.\nExplication : Même asymptomatiques, les kystes bronchogéniques ont un risque de complications : augmentation de volume (compression), infection, hémorragie, dégénérescence rare. L'exérèse chirurgicale complète est donc recommandée lorsqu'elle est techniquement possible."
  },
  {
    id: 'q-pnm-6-22',
    courseId: 'crs-pneumo-6',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. La topographie la plus fréquente d'un schwannome médiastinal est :",
    options: [
      "A) Le médiastin antérieur, loge thymique",
      "B) Le médiastin moyen, région sous-carinaire",
      "C) Le médiastin postérieur, région paravertébrale",
      "D) L'angle cardiophrénique",
      "E) La région rétro-sternale"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Le médiastin postérieur, région paravertébrale.\nExplication : Les tumeurs nerveuses (schwannomes, neurofibromes) représentent la majorité des tumeurs du médiastin postérieur. Elles se développent à partir des racines nerveuses rachidiennes ou des nerfs intercostaux dans la région paravertébrale."
  },
  {
    id: 'q-pnm-6-23',
    courseId: 'crs-pneumo-6',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Quel signe radiographique direct caractérise une masse médiastinale (par opposition à une lésion parenchymateuse) ?",
    options: [
      "A) Un bronchogramme aérien",
      "B) Un angle de raccordement avec le médiastin > 90°",
      "C) Un niveau hydro-aérique",
      "D) Un liséré clair périphérique",
      "E) Un effet de masse sur les scissures"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Un angle de raccordement avec le médiastin > 90°.\nExplication : C'est un signe fondamental. Une masse médiastinale forme un angle obtus avec la paroi médiastinale sur l'incidence où elle est tangentielle, car elle en est issue. Une lésion pulmonaire (parenchymateuse) forme un angle aigu avec le médiastin."
  },
  {
    id: 'q-pnm-6-24',
    courseId: 'crs-pneumo-6',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La présence d'un hippocratisme digital dans le cadre d'une tumeur médiastinale est un signe :",
    options: [
      "A) Spécifique d'un mésothéliome",
      "B) De compression bronchique",
      "C) Paranéoplasique",
      "D) D'insuffisance respiratoire chronique",
      "E) D'endocardite infectieuse"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Paranéoplasique.\nExplication : L'hippocratisme digital peut être un signe paranéoplasique, observé dans divers cancers (poumon, médiastin...), souvent associé à une ostéoarthropathie hypertrophiante pneumonique (OHP). Il n'est pas lié à l'hypoxie dans ce contexte."
  },
  {
    id: 'q-pnm-6-25',
    courseId: 'crs-pneumo-6',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Devant une volumineuse masse du médiastin antérieur avec élévation franche des β-HCG, la conduite à tenir est :",
    options: [
      "A) Biopsie chirurgicale en urgence",
      "B) Médiastinoscopie diagnostique",
      "C) Exérèse chirurgicale première",
      "D) Chimiothérapie à base de sels de platine",
      "E) Radiothérapie exclusive"
    ],
    correctAnswers: [3],
    explanation: "Correction : D) Chimiothérapie à base de sels de platine.\nExplication : Une élévation des β-HCG et/ou de l'α-FP évoque une tumeur germinale non séminomateuse, très chimiosensible. Une biopsie est contre-indiquée (risque d'ensemencement) si les marqueurs sont typiques. Le traitement est une chimiothérapie première (protocole BEP), suivie d'une éventuelle chirurgie des résidus."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-6-c1-1',
    courseId: 'crs-pneumo-6',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Masse découverte fortuitement\nM. Ahmed, 58 ans, tabagique chronique, consulte pour une toux sèche persistante depuis 3 mois. Une radiographie thoracique systématique révèle une large opacité homogène du médiastin supérieur droit, à limite externe nette, formant un angle obtus avec le médiastin. Le patient rapporte des céphalées récentes majorées en se penchant en avant.\n\nQ1. Quel est le syndrome clinique le plus probable devant ces céphalées ?",
    options: [
      "A) Hypertension intracrânienne",
      "B) Syndrome de la veine cave supérieure",
      "C) Méningite carcinomateuse",
      "D) Algies de tension"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Syndrome de la veine cave supérieure.\nExplication : Les céphalées aggravées par la position penchée en avant ou le décubitus sont très évocatrices d'une augmentation de la pression veineuse intracrânienne due à une gêne au retour veineux cervico-céphalique, élément classique du syndrome cave supérieur débutant."
  },
  {
    id: 'q-pnm-6-c1-2',
    courseId: 'crs-pneumo-6',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : Quel examen d'imagerie demandez-vous en priorité pour caractériser cette masse ?",
    options: [
      "A) IRM cérébrale",
      "B) TDM thoracique avec injection",
      "C) Échographie doppler des troncs supra-aortiques",
      "D) Radiographie thoracique de profil"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) TDM thoracique avec injection.\nExplication : La TDM thoracique avec injection est l'examen clé après la radiographie. Elle permettra de caractériser la masse (densité, rehaussement), de préciser son siège exact, ses rapports avec les gros vaisseaux (compression de la VCS ?) et de rechercher des signes d'envahissement ou des adénopathies."
  },
  {
    id: 'q-pnm-6-c2-1',
    courseId: 'crs-pneumo-6',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Une jeune femme asthénique\nMme Fatima, 48 ans, est adressée pour exploration d'un ptosis palpébral et d'une diplopie fluctuante, aggravés en fin de journée. Elle se plaint également d'une faiblesse musculaire à la montée des escaliers. L'examen neurologique retrouve un déficit moteur proximal des membres, régressant après épreuve au glaçon. La radiographie thoracique montre un élargissement modéré du médiastin antérieur.\n\nQ1. Quel diagnostic évoquez-vous en premier lieu ?",
    options: [
      "A) Sclérose en plaques",
      "B) Myasthénie gravis associée à un thymome",
      "C) Dermatomyosite paranéoplasique",
      "D) Dystrophie musculaire de Becker"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Myasthénie gravis associée à un thymome.\nExplication : Le tableau est typique d'une myasthénie (ptosis, diplopie, fatigue musculaire fluctuante avec facilitation au froid). L'association avec un élargissement médiastinal antérieur doit immédiatement faire évoquer un thymome sous-jacent, présent chez 10-15% des myasthéniques."
  },
  {
    id: 'q-pnm-6-c2-2',
    courseId: 'crs-pneumo-6',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : Quel examen biologique spécifique demandez-vous en urgence ?",
    options: [
      "A) Dosage des anticorps anti-récepteurs à l'acétylcholine (anti-RACh)",
      "B) Dosage de la créatine kinase (CK)",
      "C) Recherche d'anticorps antinucléaires",
      "D) Électromyogramme (EMG) de routine"
    ],
    correctAnswers: [0],
    explanation: "Correction : A) Dosage des anticorps anti-récepteurs à l'acétylcholine (anti-RACh).\nExplication : Ces auto-anticorps sont pathognomoniques de la myasthénie gravis (présents dans 85-90% des formes généralisées). Leur positivité confirme le diagnostic. L'EMG (D) avec test de stimulation répétitive montre un bloc neuro-musculaire mais est moins spécifique."
  },
  {
    id: 'q-pnm-6-c3-1',
    courseId: 'crs-pneumo-6',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Douleurs thoraciques inhabituelles\nM. Kamel, 35 ans, sans antécédents, consulte aux urgences pour des douleurs thoraciques rétro-sternales intenses, constrictives, irradiant dans le dos, survenues brutalement. Il n'a ni dyspnée ni fièvre. La radiographie thoracique montre un élargissement important du médiastin supérieur. L'ECG est normal. Le médecin urgentiste évoque une dissection aortique.\n\nQ1. En l'absence de scanner injecté disponible immédiatement, quel signe simple à l'examen clinique pourrait évoquer une autre étiologie médiastinale ?",
    options: [
      "A) Un souffle diastolique d'insuffisance aortique",
      "B) Une asymétrie tensionnelle > 20 mmHg entre les deux bras",
      "C) Une voix bitonale",
      "D) Une turgescence jugulaire"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Une voix bitonale.\nExplication : Une voix bitonale est le signe d'une paralysie du nerf laryngé récurrent. Dans ce contexte, elle oriente vers une compression du nerf par une masse du médiastin moyen (ex : lymphome volumineux, cancer bronchique) plutôt que vers une dissection aortique typique (qui donnerait plutôt A ou B)."
  },
  {
    id: 'q-pnm-6-c3-2',
    courseId: 'crs-pneumo-6',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 (suite) : La TDM thoracique réalisée montre une volumineuse masse tissulaire du médiastin antérieur et moyen, hétérogène, englobant partiellement les gros vaisseaux. Quel est le principal diagnostic différentiel à évoquer chez cet homme jeune ?",
    options: [
      "A) Anévrisme de l'aorte thoracique",
      "B) Lymphome médiastinal",
      "C) Kyste dermoïde",
      "D) Thymome invasif"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Lymphome médiastinal.\nExplication : Les lymphomes, en particulier le lymphome de Hodgkin, sont fréquents chez l'adulte jeune et peuvent se présenter comme une volumineuse masse médiastinale antéro-moyenne, parfois compressives. L'envahissement vasculaire \"englobant\" sans les occlure est plus en faveur d'un lymphome que d'un thymome."
  },
  {
    id: 'q-pnm-6-c4-1',
    courseId: 'crs-pneumo-6',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Découverte fortuite chez un enfant\nUn enfant de 4 ans est amené en consultation pour des douleurs abdominales récurrentes. Une échographie abdominale est normale. Une radiographie thoracique de face, réalisée par excès de zèle, montre une opacité paravertébrale gauche bien limitée, homogène, au niveau du médiastin postérieur.\n\nQ1. Quelle est l'étiologie la plus probable de cette masse chez l'enfant ?",
    options: [
      "A) Un kyste bronchogénique",
      "B) Un neuroblastome",
      "C) Un lymphome",
      "D) Une hernie hiatale"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Un neuroblastome.\nExplication : Le neuroblastome est la tumeur maligne solide extra-crânienne la plus fréquente de l'enfance. Sa localisation la plus fréquente est abdominale (surrénales), mais 10-20% sont thoraciques (médiastin postérieur). C'est donc le premier diagnostic à évoquer devant une masse paravertébrale chez un jeune enfant."
  },
  {
    id: 'q-pnm-6-c4-2',
    courseId: 'crs-pneumo-6',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 (suite) : Quel examen biologique simple et non invasif pouvez-vous demander pour orienter le diagnostic ?",
    options: [
      "A) NFS avec frottis",
      "B) Dosage sanguin des transaminases",
      "C) Dosage urinaire des acides vanilmandélique (VMA) et homovanillique (HVA)",
      "D) Dosage de la LDH"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Dosage urinaire des acides vanilmandélique (VMA) et homovanillique (HVA).\nExplication : Les neuroblastomes sont des tumeurs neuroendocrines qui sécrètent souvent des catécholamines et leurs métabolites (VMA, HVA). Leur dosage dans les urines de 24h est un test simple, sensible et spécifique pour orienter fortement le diagnostic avant la biopsie."
  },
  {
    id: 'q-pnm-6-c5-1',
    courseId: 'crs-pneumo-6',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Dysphagie progressive\nMme Zohra, 70 ans, présente depuis 6 mois une dysphagie d'abord aux solides puis aux liquides, avec amaigrissement modéré. La fibroscopie œsogastrique montre une muqueuse œsophagienne apparemment normale jusqu'à 30 cm. Le transit baryté œsophagien montre une compression extrinsèque régulière de l'œsophage thoracique moyen.\n\nQ1. Compte tenu de la fibroscopie normale, quel compartiment médiastinal est probablement impliqué ?",
    options: [
      "A) Antérieur",
      "B) Moyen",
      "C) Postérieur",
      "D) Latéral"
    ],
    correctAnswers: [1],
    explanation: "Correction : B) Moyen.\nExplication : L'œsophage thoracique chemine dans le médiastin postérieur. Cependant, une compression extrinsèque peut provenir d'une masse adjacente. Dans le médiastin moyen, les adénopathies sous-carinaires volumineuses (cancer bronchique, lymphome, tuberculose) sont une cause fréquente de compression œsophagienne antérieure, expliquant une muqueuse normale à l'endoscopie."
  },
  {
    id: 'q-pnm-6-c5-2',
    courseId: 'crs-pneumo-6',
    questionNumber: 35,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 (suite) : Quel examen d'imagerie demandez-vous pour visualiser directement cette compression et guider un éventuel prélèvement ?",
    options: [
      "A) TDM thoracique",
      "B) IRM médiastinale",
      "C) Échoendoscopie œsophagienne (EUS)",
      "D) Scintigraphie osseuse"
    ],
    correctAnswers: [2],
    explanation: "Correction : C) Échoendoscopie œsophagienne (EUS).\nExplication : L'échoendoscopie œsophagienne (EUS) est l'examen de choix dans ce contexte. Elle permet de visualiser avec une grande précision la paroi œsophagienne et les structures adjacentes du médiastin moyen et postérieur, et surtout de réaliser une ponction-biopsie à l'aiguille fine (EUS-FNA) des adénopathies ou masses compressives sous contrôle échographique direct."
  }
];

export const PNEUMO_LESSON_6_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-6-mindmap',
    courseId: 'crs-pneumo-6',
    type: 'Resume',
    title: 'Carte Mentale : Tumeurs du Médiastin',
    contentMarkdown: `### TUMEURS DU MÉDIASTIN

├── **ANATOMIE (9 compartiments Bariety)**
│   ├── **Antérieur** : Thymus, Gros vaisseaux (Cœur, Aorte ascendante, VCS)
│   ├── **Moyen** : Trachée, Bronches souches, Œsophage (partie)
│   └── **Postérieur** : Œsophage, Aorte descendante, Structures nerveuses
│
├── **DIAGNOSTIC CLINIQUE (Oriente la topographie)**
│   ├── **Syndrome Antérieur** : Douleurs antérieures, SVCS, Troubles ++ en décubitus, Myasthénie
│   ├── **Syndrome Moyen** : Toux, Dyspnée, Dysphonie (récurrentiel), Compression œsophagienne
│   └── **Syndrome Postérieur** : Douleurs radiculaires, Claude Bernard Horner, Compression médullaire
│
├── **IMAGERIE**
│   ├── **1ère intention** : Radiographie Thoracique (Face + Profil)
│   │   └── Signes : Angle >90°, Signe cervicothoracique, Signe d'Iceberg, Signe de recouvrement hilaire
│   ├── **2ème intention** : TDM Thoracique avec injection
│   │   └── Caractérise la lésion, précise la topographie, rapports vasculaires, signes de malignité
│   └── **Complément** : IRM
│       └── Indications : Tumeurs postérieures (foramen), envahissement vasculaire douteux
│
├── **DIAGNOSTIC ÉTIOLOGIQUE (Par Topographie)**
│   ├── **MÉDIASTIN ANTÉRIEUR** (Loge de prédilection)
│   │   ├── Thymomes (Myasthénie, anémies auto-immunes)
│   │   ├── Tumeurs Germinales (αFP/βHCG +++, Homme jeune)
│   │   ├── Lymphomes
│   │   ├── Goitres (Signe cervicothoracique, calcifs)
│   │   └── Kystes pleuro-péricardiques (Cardiophrénique, surveillance)
│   ├── **MÉDIASTIN MOYEN**
│   │   ├── Adénopathies (Lymphomes, Métastases, TB)
│   │   └── Kystes bronchogéniques (Exérèse conseillée)
│   └── **MÉDIASTIN POSTÉRIEUR**
│       ├── Tumeurs Nerveuses (63%) : Schwannomes, Neurofibromes (Recklinghausen), Neuroblastomes (Enfant, VMA/HVA)
│       └── Tumeurs de l'Œsophage (Par extension)
│
└── **PRINCIPES THÉRAPEUTIQUES**
    ├── **Biopsie première** si doute (sauf marqueurs germinaux élevés)
    │   └── Méthodes : Scanoguidée, EBUS, EUS, Médiastinoscopie, Chirurgicale
    ├── **Traitement** dépend de l'histologie
    │   ├── Chirurgie : Thymomes, Kystes, Tumeurs nerveuses bénignes
    │   ├── Chimiothérapie : Lymphomes, Tumeurs germinales, Neuroblastomes
    │   └── Radio-Chimiothérapie : Cancers localement avancés
    └── **Bilan pré-thérapeutique** : Recherche systématique de syndromes paranéoplasiques et auto-immuns (Thymome)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Médiastin', 'Thymome', 'Oncologie']
  },
  {
    id: 'res-pnm-6-astuces',
    courseId: 'crs-pneumo-6',
    type: 'Astuce',
    title: 'Trucs & Mnémotechniques : Médiastin',
    contentMarkdown: `### Trucs & Mnémotechniques
• **"TAM" pour la topographie des signes cliniques** :
  - **T**hymus (Antérieur) -> Myasthénie, Anémies.
  - **A**érien (Moyen) -> Toux, Dyspnée, Dysphonie.
  - **M**édullaire/Œsophage (Postérieur) -> Douleurs radiculaires, Dysphagie.
• **Angle Radiographique** : *« Aigu pour le Poumon, Obtus pour le Médiastin »*. Une masse pulmonaire fait un angle aigu avec la paroi, une masse médiastinale un angle obtus (> 90°).
• **Marqueurs des Tumeurs Germinales** : *« Bêta-HCG, c'est le Chorion ; Alpha-FP, c'est le Fœtus (vitellin) »*. Pour se souvenir de l'origine (choriocarcinome vs tumeur du sac vitellin).
• **Causes du Médiastin Antérieur : « 4 T »** :
  - **T**hymome / Thymique
  - **T**umeurs Germinales (Teratomas)
  - **T**hyroïde (Goitre)
  - **T**errible Lymphomes
• **Séquences Diagnostiques : "Voir, Localiser, Caractériser, Prouver"** :
  1. Voir : Radiographie standard.
  2. Localiser/Caractériser : TDM Thoracique.
  3. Prouver : Biopsie guidée (Scan, EBUS, Chirurgie).
• **Syndrome de la Veine Cave Supérieure (SVCS)** : *« Œdème en Pèlerine, Céphalées en Avant »* pour retenir la distribution de l'œdème (visage, cou, bras) et l'aggravation des céphalées en position penchée.

---
*La route vers l'externat est semée de QCM et de diagnostics différentiels, mais chaque notion maîtrisée est un futur patient mieux pris en charge. Allez-y, champion(ne), le médiastin n'a plus de secrets pour vous !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Médiastin', '4 T']
  }
];

// Lesson 7: Embolie Pulmonaire
export const PNEUMO_LESSON_7_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-7-01',
    courseId: 'crs-pneumo-7',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q1. Concernant l’épidémiologie de l’embolie pulmonaire (EP) :",
    options: [
      "a) Elle représente la première cause de mortalité cardiovasculaire en Europe.",
      "b) Environ 34% des cas se présentent comme une mort subite.",
      "c) L’incidence annuelle est estimée entre 100 et 200 cas pour 100 000 habitants.",
      "d) 59% des cas sont diagnostiqués après le décès.",
      "e) La mortalité précoce sous traitement représente environ 7% des cas."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : b, c, d, e.\nL’EP est la troisième cause de mortalité cardiovasculaire, non la première. Les données de l’étude Cohen (2007) confirment les proportions de présentation mort subite (34%), diagnostic post-mortem (59%) et mortalité précoce (7%). L’incidence annuelle est effectivement de 100–200/100 000."
  },
  {
    id: 'q-pnm-7-02',
    courseId: 'crs-pneumo-7',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q2. Parmi les facteurs de risque d’EP, lesquels sont des déficits constitutionnels (héréditaires) ?",
    options: [
      "a) Déficit en protéine C.",
      "b) Syndrome des antiphospholipides.",
      "c) Déficit en antithrombine.",
      "d) Cancer actif.",
      "e) Résistance à la protéine C activée (facteur V Leiden)."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : a, c, e.\nLes déficits constitutionnels (héréditaires) incluent les déficits en inhibiteurs physiologiques (protéine C, protéine S, antithrombine) et la résistance à la protéine C activée. Le syndrome des antiphospholipides est acquis, de même que le cancer."
  },
  {
    id: 'q-pnm-7-03',
    courseId: 'crs-pneumo-7',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q3. Dans la physiopathologie de l’EP fibrino-cruorique :",
    options: [
      "a) La triade de Virchow comprend stase, lésion endothéliale et hypercoagulabilité.",
      "b) Plus de 90% des emboles proviennent des veines des membres inférieurs ou du pelvis.",
      "c) L’embolie gazeuse relève de la même physiopathologie.",
      "d) L’hypercoagulabilité est présente dans environ 75% des cas.",
      "e) L’embolie tumorale est la cause la plus fréquente après l’embolie fibrino-cruorique."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : a, b, d.\nL’embolie gazeuse ou tumorale sont des étiologies non fibrino-cruoriques, avec une physiopathologie distincte. La triade de Virchow est centrale, et la provenance ilio-fémorale est majoritaire."
  },
  {
    id: 'q-pnm-7-04',
    courseId: 'crs-pneumo-7',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q4. Concernant la clinique de l’EP :",
    options: [
      "a) La dyspnée est le symptôme le plus constant.",
      "b) Une douleur thoracique de type pleurétique évoque une atteinte périphérique.",
      "c) L’hémoptysie est un signe précoce et spécifique.",
      "d) Une syncope peut révéler une EP grave avec amputation vasculaire importante.",
      "e) La fièvre est fréquente et élimine le diagnostic d’EP."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : a, b, d.\nL’hémoptysie est rare et tardive (infarctus pulmonaire). La fièvre peut être présente, surtout en cas d’infarctus, et n’élimine pas le diagnostic."
  },
  {
    id: 'q-pnm-7-05',
    courseId: 'crs-pneumo-7',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q5. Le score de Wells simplifié :",
    options: [
      "a) Classe comme « EP improbable » un score ≤ 1.",
      "b) Intègre la présence d’un cancer actif.",
      "c) Est utilisé uniquement en milieu chirurgical.",
      "d) Un score ≥ 2 classe l’EP comme « probable ».",
      "e) Remplace systématiquement l’angioscanner."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : a, b, d.\nLe score de Wells est utilisable dans tous les contextes. Il ne remplace pas l’imagerie, mais guide la probabilité clinique avant les examens complémentaires."
  },
  {
    id: 'q-pnm-7-06',
    courseId: 'crs-pneumo-7',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q6. À la radiographie thoracique, lequel de ces signes est évocateur d’EP ?",
    options: [
      "a) Atelectasie en bande.",
      "b) Épanchement pleural.",
      "c) Hyperclarté locale.",
      "d) Cardiomégalie.",
      "e) Un cliché normal chez un patient très dyspnéique est rassurant."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c.\nUn cliché thoracique normal chez un patient très dyspnéique est fortement évocateur d’EP, pas rassurant. La cardiomégalie n’est pas spécifique."
  },
  {
    id: 'q-pnm-7-07',
    courseId: 'crs-pneumo-7',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q7. À l’ECG, lesquels de ces signes peuvent s’observer dans l’EP ?",
    options: [
      "a) S1Q3T3.",
      "b) Bloc de branche droit complet ou incomplet.",
      "c) Trouble de la repolarisation antérieure (T négatives de V1 à V4).",
      "d) Déviation axiale droite.",
      "e) Un ECG normal élimine l’EP."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : a, b, c, d.\nL’ECG peut être normal dans l’EP, surtout dans les formes peu étendues. Il ne permet donc pas d’exclure le diagnostic."
  },
  {
    id: 'q-pnm-7-08',
    courseId: 'crs-pneumo-7',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q8. Concernant le dosage des D-dimères :",
    options: [
      "a) Un taux normal (< 500 ng/mL) élimine l’EP chez un patient à faible probabilité clinique.",
      "b) Au-delà de 50 ans, la valeur seuil est ajustée (âge × 10 ng/mL).",
      "c) Un taux élevé confirme le diagnostic d’EP.",
      "d) Ils sont spécifiques de la maladie thromboembolique.",
      "e) Leur demi-vie longue permet un diagnostic retardé."
    ],
    correctAnswers: [0, 1],
    explanation: "Correction : a, b.\nLes D-dimères sont sensibles mais non spécifiques (élévation possible dans infections, cancers, etc.). Un taux élevé ne confirme pas l’EP. Leur demi-vie est courte."
  },
  {
    id: 'q-pnm-7-09',
    courseId: 'crs-pneumo-7',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q9. L’angioscanner thoracique spiralé :",
    options: [
      "a) Est l’examen de référence pour le diagnostic positif.",
      "b) Peut montrer un défaut de remplissage vasculaire ou un thrombus endoluminal.",
      "c) Est contre-indiqué en cas d’insuffisance rénale sévère.",
      "d) Remplace systématiquement la scintigraphie ventilation/perfusion.",
      "e) Doit être réalisé même en cas de forte probabilité clinique et D-dimères négatifs."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c.\nLa scintigraphie reste utile en cas de contre-indication au scanner ou de grossesse. Si probabilité clinique faible et D-dimères négatifs, l’EP est éliminée et le scanner n’est pas nécessaire."
  },
  {
    id: 'q-pnm-7-10',
    courseId: 'crs-pneumo-7',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q10. À l’échocardiographie, un signe en faveur de l’EP est :",
    options: [
      "a) Dilatation et hypokinésie du ventricule droit.",
      "b) Septum interventriculaire plat ou paradoxal.",
      "c) Hypertrophie ventriculaire gauche.",
      "d) Hypertension artérielle pulmonaire.",
      "e) Foramen ovale perméable."
    ],
    correctAnswers: [0, 1, 3, 4],
    explanation: "Correction : a, b, d, e.\nL’hypertrophie VG n’est pas un signe d’EP aiguë. La dilatation VD, le septum paradoxal, l’HTAP et la mise en évidence d’un foramen ovale perméable (risque d'embolie paradoxale) sont des signes échocardiographiques importants."
  },
  {
    id: 'q-pnm-7-11',
    courseId: 'crs-pneumo-7',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q11. Dans l’EP à haut risque (instabilité hémodynamique) :",
    options: [
      "a) L’angioscanner doit être réalisé en première intention si le patient est stable pour le transport.",
      "b) L’échocardiographie peut suffire au diagnostic en urgence.",
      "c) Le traitement thrombolytique est indiqué en l’absence de contre-indication.",
      "d) Les D-dimères sont indispensables avant tout traitement.",
      "e) La mortalité dépasse 50% sans traitement spécifique."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c.\nEn cas d’instabilité, on ne perd pas de temps avec les D-dimères. La thrombolyse est le traitement de première intention si pas de contre-indication. La mortalité sans traitement est élevée, mais pas systématiquement >50%."
  },
  {
    id: 'q-pnm-7-12',
    courseId: 'crs-pneumo-7',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q12. Concernant le traitement anticoagulant initial de l’EP non massive :",
    options: [
      "a) Les HBPM ou le fondaparinux sont préférés à l’héparine non fractionnée (HNF).",
      "b) Un relais par AVK peut être débuté dès le premier jour.",
      "c) Les anticoagulants oraux directs (AOD) sont contre-indiqués en cas d’IRC sévère (ClCr < 30 mL/min).",
      "d) L’INR cible sous AVK est entre 2 et 3.",
      "e) Le traitement injectable doit être arrêté dès que l’INR est > 2."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : a, b, c, d.\nLe traitement injectable est arrêté seulement après 5 jours minimum de chevauchement ET 2 INR consécutifs entre 2 et 3 à 24h d’intervalle."
  },
  {
    id: 'q-pnm-7-13',
    courseId: 'crs-pneumo-7',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q13. Les anticoagulants oraux directs (AOD) :",
    options: [
      "a) Comprennent le rivaroxaban et l’apixaban (inhibiteurs du facteur Xa).",
      "b) Nécessitent un prétraitement par héparine.",
      "c) Ont une demi-vie courte et une action rapide.",
      "d) Nécessitent un monitoring biologique régulier (INR).",
      "e) Sont contre-indiqués pendant la grossesse."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : a, c, e.\nLes AOD sont utilisés d’emblée sans héparinisation préalable (sauf certains protocoles). Ils ne nécessitent pas de contrôle biologique systématique."
  },
  {
    id: 'q-pnm-7-14',
    courseId: 'crs-pneumo-7',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q14. La durée du traitement anticoagulant après une EP :",
    options: [
      "a) Est de 3 mois si facteur de risque transitoire réversible.",
      "b) Est de 6 à 12 mois minimum pour une EP idiopathique.",
      "c) Peut être à vie en cas de récidives idiopathiques.",
      "d) Est identique pour les EP tumorales et les EP post-chirurgicales.",
      "e) Est raccourcie en cas de saignement mineur sous traitement."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c.\nLa durée dépend de l’étiologie : 3 mois pour facteur transitoire, 6–12 mois pour idiopathique, parfois à vie pour récidives. Les EP sur cancer peuvent nécessiter un traitement prolongé tant que le cancer est actif."
  },
  {
    id: 'q-pnm-7-15',
    courseId: 'crs-pneumo-7',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q15. Parmi les complications de l’EP, on retrouve :",
    options: [
      "a) Cœur pulmonaire chronique post-embolique.",
      "b) Récurrence thromboembolique.",
      "c) Thrombopénie induite par l’héparine (à surveiller vers J7–J10).",
      "d) Infarctus pulmonaire (apparaissant en 24–48h).",
      "e) Pancréatite aiguë fréquente."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : a, b, c, d.\nLa pancréatite aiguë est citée dans les diagnostics différentiels, pas comme une complication directe de l’EP."
  },
  {
    id: 'q-pnm-7-16',
    courseId: 'crs-pneumo-7',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q16. Le diagnostic différentiel de l’EP inclut :",
    options: [
      "a) Pneumopathie aiguë.",
      "b) Pneumothorax spontané.",
      "c) Crise d’asthme aiguë.",
      "d) Infarctus du myocarde.",
      "e) Péricardite aiguë."
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    explanation: "Correction : a, b, c, d, e.\nToutes ces pathologies peuvent mimer la dyspnée et/ou la douleur thoracique de l’EP."
  },
  {
    id: 'q-pnm-7-17',
    courseId: 'crs-pneumo-7',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q17. L’échographie Doppler veineuse des membres inférieurs :",
    options: [
      "a) Est positive (TVP) dans 30 à 50% des cas d’EP.",
      "b) Si elle montre une TVP proximale, elle confirme l’EP sans besoin d’autre examen.",
      "c) Doit être systématique même si l’angioscanner est positif.",
      "d) Est utile pour adapter la durée du traitement.",
      "e) Peut être faussement négative en cas de thrombus complètement migré."
    ],
    correctAnswers: [0, 1, 3, 4],
    explanation: "Correction : a, b, d, e.\nSi l’angioscanner est déjà positif, la TVP n’est pas indispensable pour confirmer l’EP, mais elle peut influencer la durée du traitement."
  },
  {
    id: 'q-pnm-7-18',
    courseId: 'crs-pneumo-7',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q18. Concernant la prévention de l’EP :",
    options: [
      "a) L’utilisation large des HBPM en périopératoire a réduit l’incidence.",
      "b) La mobilisation précoce est une mesure mécanique essentielle.",
      "c) La compression pneumatique intermittente est recommandée en chirurgie orthopédique majeure.",
      "d) Les anticoagulants sont contre-indiqués en post-partum.",
      "e) La prévention n’est pas nécessaire chez les patients sous AOD pour une autre raison."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c.\nLa prévention médicamenteuse (HBPM) est possible en post-partum selon le risque. Les patients sous AOD pour FA par exemple peuvent avoir besoin d’une prophylaxie supplémentaire en situation à risque chirurgical."
  },
  {
    id: 'q-pnm-7-19',
    courseId: 'crs-pneumo-7',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q19. L’évolution sous traitement efficace est favorable si :",
    options: [
      "a) Amélioration clinique et gazométrique en quelques jours.",
      "b) Perfusion pulmonaire s’améliore entre 15 jours et 3 mois.",
      "c) Apparition d’un infarctus pulmonaire à J2.",
      "d) Récidive thromboembolique précoce.",
      "e) Thrombopénie à J7."
    ],
    correctAnswers: [0, 1],
    explanation: "Correction : a, b.\nL’infarctus pulmonaire, la récidive et la thrombopénie induite par l’héparine sont des évolutions défavorables."
  },
  {
    id: 'q-pnm-7-20',
    courseId: 'crs-pneumo-7',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q20. L’embolie pulmonaire tumorale :",
    options: [
      "a) Est souvent liée aux cancers du sein, du rein, de l’estomac ou du foie.",
      "b) Résulte de l’effraction vasculaire par la tumeur primitive.",
      "c) Se diagnostique par angioscanner.",
      "d) A le même traitement anticoagulant que l’EP fibrino-cruorique.",
      "e) A un meilleur pronostic que l’EP idiopathique."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : a, b, c, d.\nLe pronostic est généralement plus sombre en raison du cancer sous-jacent, pas meilleur."
  },
  {
    id: 'q-pnm-7-21',
    courseId: 'crs-pneumo-7',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q21. L’embolie amniotique :",
    options: [
      "a) Survient en per-partum.",
      "b) Est de pronostic redoutable.",
      "c) Relève du même traitement anticoagulant que l’EP classique.",
      "d) Est fréquente dans les grossesses multiples.",
      "e) Se diagnostique par angioscanner."
    ],
    correctAnswers: [0, 1],
    explanation: "Correction : a, b.\nL’embolie amniotique est une urgence obstétricale avec coagulation intravasculaire disséminée, nécessitant une prise en charge spécifique (réanimation, transfusion) et non seulement une anticoagulation."
  },
  {
    id: 'q-pnm-7-22',
    courseId: 'crs-pneumo-7',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q22. La scintigraphie pulmonaire de ventilation/perfusion :",
    options: [
      "a) Est l’examen de choix en cas de contre-indication au scanner.",
      "b) A une forte valeur prédictive négative si normale.",
      "c) Montre des défauts de perfusion non ventilés en cas d’EP.",
      "d) Est ininterprétable en cas d’anomalie parenchymateuse préexistante.",
      "e) Peut être utilisée chez la femme enceinte avec protection abdominale."
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : a, b, c, e.\nElle peut être interprétée même en cas d’anomalies préexistantes, mais la valeur diagnostique est réduite."
  },
  {
    id: 'q-pnm-7-23',
    courseId: 'crs-pneumo-7',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q23. L’arrêt du traitement anticoagulant injectable sous AVK nécessite :",
    options: [
      "a) Au moins 5 jours de chevauchement.",
      "b) Un INR > 3.",
      "c) Deux INR consécutifs entre 2 et 3 à 24h d’intervalle.",
      "d) L’arrêt immédiat si saignement mineur.",
      "e) Une discussion en RCP pour tout patient."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : a, c.\nL’INR cible est 2–3. L’arrêt pour saignement dépend de la gravité. La décision de traitement est clinique, pas systématiquement en RCP."
  },
  {
    id: 'q-pnm-7-24',
    courseId: 'crs-pneumo-7',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q24. L’oxygénothérapie dans l’EP :",
    options: [
      "a) Est administrée pour maintenir une SpO2 > 90%.",
      "b) Peut aggraver une hypercapnie préexistante dans les BPCO.",
      "c) N’est nécessaire que si PaO2 < 60 mmHg.",
      "d) Doit être débutée même en l’absence d’hypoxémie sévère si le patient est dyspnéique.",
      "e) Remplace le traitement anticoagulant."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : a, b, d.\nL’oxygénothérapie est symptomatique et ne remplace pas l’anticoagulation. Elle est ajustée à la SpO2 et à la tolérance clinique."
  },
  {
    id: 'q-pnm-7-25',
    courseId: 'crs-pneumo-7',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q25. Le traitement thrombolytique dans l’EP massive :",
    options: [
      "a) Est indiqué en présence d’un choc obstructif ou d’une hypotension persistante.",
      "b) Réduit la mortalité à court terme.",
      "c) Utilise le rt-PA en perfusion courte (sur 2h).",
      "d) Contre-indique formellement tout geste chirurgical dans les 24h suivantes.",
      "e) Expose à un risque majeur d’hémorragie intracrânienne."
    ],
    correctAnswers: [0, 1, 4],
    explanation: "Correction : a, b, e.\nLe rt-PA est souvent donné en bolus + perfusion sur 2h. La thrombolyse n’est pas une contre-indication absolue à la chirurgie d’urgence (évaluation bénéfice/risque). Le risque hémorragique, surtout intracrânien, est significatif."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-7-c1-1',
    courseId: 'crs-pneumo-7',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Homme de 68 ans, post-opératoire de prothèse totale de hanche\nHistoire : Admis pour dyspnée aiguë et douleur basithoracique droite survenue au 5ème jour post-opératoire. Alité depuis l’intervention. Antécédents : hypertension, tabagisme sevré. À l’examen : TA 110/70, FC 120/min, SpO2 92% à l’air ambiant, auscultation cardiaque : galop droit, souffle d’insuffisance tricuspide. Pas de signe de TVP clinique.\n\nQ1. Quel est l’examen paraclinique le plus urgent ?",
    options: [
      "a) Radiographie thoracique.",
      "b) ECG.",
      "c) Angioscanner thoracique.",
      "d) Échocardiographie transthoracique.",
      "e) Dosage des D-dimères."
    ],
    correctAnswers: [3],
    explanation: "Correction : d) Échocardiographie transthoracique.\nChez ce patient avec instabilité (tachycardie, hypotension relative) et contexte à haut risque, l’échocardiographie en urgence permet d’évaluer la fonction VD, l’HTAP et d’exclure d’autres causes de choc. L’angioscanner viendra ensuite si le patient est transportable."
  },
  {
    id: 'q-pnm-7-c1-2',
    courseId: 'crs-pneumo-7',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : Si l’échocardiographie montre un VD dilaté et hypokinétique avec HTAP modérée, quelle est la démarche immédiate ?",
    options: [
      "a) Débuter une héparinothérapie intraveineuse.",
      "b) Demander un angioscanner en extrême urgence.",
      "c) Administrer un thrombolytique systémique.",
      "d) Mettre sous oxygène et transfuser.",
      "e) Faire un écho-Doppler veineux."
    ],
    correctAnswers: [0],
    explanation: "Correction : a) Débuter une héparinothérapie intraveineuse.\nMême en attendant la confirmation scanographique, l’anticoagulation curative doit être débutée sans délai en l’absence de contre-indication. La thrombolyse n’est indiquée qu’en cas d’instabilité hémodynamique persistante (choc)."
  },
  {
    id: 'q-pnm-7-c2-1',
    courseId: 'crs-pneumo-7',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Femme de 35 ans, contraception œstroprogestative\nHistoire : Consulte pour dyspnée progressive et douleur pleurétique gauche depuis 2 jours. Pas de fièvre. Pas d’antécédents. Examen clinique normal, sauf discrète tachypnée. Probabilité clinique de Wells : 3 (probable).\n\nQ1. Quelle est la stratégie diagnostique appropriée ?",
    options: [
      "a) Dosage des D-dimères puis angioscanner si positifs.",
      "b) Angioscanner thoracique d’emblée.",
      "c) Scintigraphie pulmonaire.",
      "d) Radiographie thoracique seule.",
      "e) Échocardiographie."
    ],
    correctAnswers: [0],
    explanation: "Correction : a) Dosage des D-dimères puis angioscanner si positifs.\nChez une patiente jeune, avec probabilité clinique modérée/élevée, les D-dimères ont une bonne valeur d’exclusion s’ils sont négatifs (seuil adapté). S’ils sont positifs, l’angioscanner est indiqué."
  },
  {
    id: 'q-pnm-7-c2-2',
    courseId: 'crs-pneumo-7',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : Les D-dimères reviennent à 650 ng/mL. Quel examen de confirmation choisir ?",
    options: [
      "a) Angioscanner thoracique.",
      "b) Scintigraphie pulfusion.",
      "c) Échocardiographie.",
      "d) IRM pulmonaire.",
      "e) Écho-Doppler veineux."
    ],
    correctAnswers: [0],
    explanation: "Correction : a) Angioscanner thoracique.\nC’est l’examen de référence pour confirmation anatomique. La scintigraphie est une alternative en cas de contre-indication au scanner."
  },
  {
    id: 'q-pnm-7-c3-1',
    courseId: 'crs-pneumo-7',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Homme de 50 ans, cancer du pancréas sous chimiothérapie\nHistoire : Hospitalisé pour altération de l’état général. Présente une dyspnée aiguë, une tachycardie à 130/min et une désaturation à 88%. TA stable.\n\nQ1. Quelle particularité étiologique faut-il évoquer en premier lieu ?",
    options: [
      "a) Embolie septique sur cathéter.",
      "b) Embolie tumorale.",
      "c) Embolie graisseuse.",
      "d) Embolie fibrino-cruorique sur hypercoagulabilité du cancer.",
      "e) Embolie gazeuse."
    ],
    correctAnswers: [3],
    explanation: "Correction : d) Embolie fibrino-cruorique sur hypercoagulabilité du cancer.\nLe cancer est un puissant facteur de risque thromboembolique (syndrome de Trousseau). L’embolie fibrino-cruorique est de loin la plus fréquente dans ce contexte, même si l’embolie tumorale est possible."
  },
  {
    id: 'q-pnm-7-c3-2',
    courseId: 'crs-pneumo-7',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 (suite) : Le traitement anticoagulant sera :",
    options: [
      "a) De durée limitée à 3 mois.",
      "b) Maintenu tant que le cancer est actif.",
      "c) Contre-indiqué en raison du risque hémorragique.",
      "d) Remplacé par un filtre cave.",
      "e) Identique à celui d’une EP idiopathique."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Maintenu tant que le cancer est actif.\nLe risque de récidive est élevé en cas de cancer évolutif. Le traitement est prolongé, au moins 6 mois et souvent au-delà, réévalué régulièrement."
  },
  {
    id: 'q-pnm-7-c4-1',
    courseId: 'crs-pneumo-7',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Femme de 28 ans, en post-partum immédiat (12h)\nHistoire : Césarienne pour souffrance fœtale. Désaturation brutale à 82%, cyanose, collapsus cardiovasculaire (TA 70/40), perte de connaissance.\n\nQ1. Quelle étiologie gravissime faut-il évoquer ?",
    options: [
      "a) Embolie amniotique.",
      "b) Embolie graisseuse.",
      "c) Embolie septique.",
      "d) Embolie fibrino-cruorique.",
      "e) Hémorragie de la délivrance."
    ],
    correctAnswers: [0],
    explanation: "Correction : a) Embolie amniotique.\nLe tableau de détresse respiratoire aiguë + choc + CIVD en per-partum est classique de l’embolie amniotique, urgence obstétricale absolue."
  },
  {
    id: 'q-pnm-7-c4-2',
    courseId: 'crs-pneumo-7',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 (suite) : La prise en charge immédiate inclut :",
    options: [
      "a) Anticoagulation curative en bolus.",
      "b) Thrombolyse systémique.",
      "c) Réanimation symptomatique (ventilation, remplissage, amines), transfusion de produits sanguins.",
      "d) Scanner thoracique en urgence.",
      "e) Césarienne d’extrême urgence."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Réanimation symptomatique (ventilation, remplissage, amines), transfusion de produits sanguins.\nL’embolie amniotique est avant tout un syndrome de défaillance multiviscérale avec CIVD. La réanimation symptomatique et la correction des troubles de coagulation sont prioritaires."
  },
  {
    id: 'q-pnm-7-c5-1',
    courseId: 'crs-pneumo-7',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Homme de 70 ans, BPCO connu, dyspnée aiguë\nHistoire : Exacerbation de dyspnée sur fond de bronchite chronique. Douleur thoracique atypique. TA 150/90, FC 100, SpO2 88%. RT : emphysème, pas de foyer.\n\nQ1. Pourquoi le diagnostic d’EP est-il difficile ici ?",
    options: [
      "a) La dyspnée est attribuée à la BPCO.",
      "b) La radiographie est anormale.",
      "c) Les D-dimères sont toujours normaux chez le BPCO.",
      "d) L’ECG montre systématiquement un S1Q3.",
      "e) L’angioscanner est contre-indiqué."
    ],
    correctAnswers: [0],
    explanation: "Correction : a) La dyspnée est attribuée à la BPCO.\nLa symptomatologie est aspécifique et peut être masquée par la pathologie sous-jacente. Il faut savoir évoquer l’EP devant une exacerbation inhabituelle ou une hypoxie disproportionnée."
  },
  {
    id: 'q-pnm-7-c5-2',
    courseId: 'crs-pneumo-7',
    questionNumber: 35,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 (suite) : Quelle approche adopter ?",
    options: [
      "a) Traiter comme une exacerbation de BPCO et réévaluer.",
      "b) Demander des D-dimères (avec seuil ajusté à l’âge) et si positifs, réaliser un angioscanner.",
      "c) Faire systématiquement une échocardiographie.",
      "d) Mettre sous anticoagulants à dose prophylactique.",
      "e) Hospitaliser en soins intensifs d’emblée."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Demander des D-dimères (avec seuil ajusté à l’âge) et si positifs, réaliser un angioscanner.\nC’est l’approche standardisée : évaluation de la probabilité clinique (modérée ici), dosage des D-dimères (seuil = âge×10 si >50 ans), puis imagerie si positifs."
  }
];

export const PNEUMO_LESSON_7_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-7-mindmap',
    courseId: 'crs-pneumo-7',
    type: 'Resume',
    title: 'Mind Map Résumé : Embolie Pulmonaire',
    contentMarkdown: `### EMBOLIE PULMONAIRE

├── **DÉFINITION**
│   └── Obstruction artère pulmonaire par embole (90% thrombus veineux)
│
├── **ÉPIDÉMIOLOGIE**
│   └── 3e cause mortalité CV, incidence 100–200/100 000, mortalité précoce 7%
│
├── **FACTEURS DE RISQUE**
│   ├── Constitutionnels : déficit AT, PC, PS, facteur V Leiden
│   ├── Acquis : cancer, chirurgie, immobilisation, œstroprogestatifs, post-partum
│   └── Triade de Virchow : stase, lésion endothéliale, hypercoagulabilité
│
├── **PHYSIOPATHOLOGIE**
│   └── Migration TVP ilio-fémorale → obstruction AP → ↑ résistance vasculaire → HTAP → défaillance VD
│
├── **CLINIQUE**
│   ├── Dyspnée (constante), douleur pleurétique, tachycardie
│   ├── Signes de gravité : syncope, choc, arrêt cardiaque
│   └── Scores : Wells & Genève (probabilité clinique)
│
├── **DIAGNOSTIC PARACLINIQUE**
│   ├── D-dimères : valeur d’exclusion si négatifs + probabilité clinique faible
│   ├── Angioscanner thoracique : examen de référence
│   ├── Échocardiographie : évaluation VD/HTAP, utile si instable
│   ├── Scintigraphie V/Q : alternative si contre-indication scanner
│   └── Écho-Doppler veineux : recherche TVP associée
│
├── **TRAITEMENT**
│   ├── **Anticoagulation curative immédiate**
│   │   ├── EP non massive : HBPM/fondaparinux → relais AVK ou AOD d’emblée
│   │   └── EP massive : héparine IV ± thrombolyse si choc
│   ├── **Durée** : 3 mois (facteur transitoire), 6–12 mois (idiopathique), prolongée (cancer, récidives)
│   └── **Prévention** : HBPM, mobilisation précoce, compression pneumatique
│
└── **COMPLICATIONS**
    ├── Récidive, CPC post-embolique, infarctus pulmonaire
    └── THI (thrombopénie à J7–J10 sous héparine)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Embolie Pulmonaire', 'Thrombose']
  },
  {
    id: 'res-pnm-7-astuces',
    courseId: 'crs-pneumo-7',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques : Embolie Pulmonaire',
    contentMarkdown: `### Astuces & Mnémotechniques
• **« STOP » les facteurs de risque majeurs** :
  - **S** (Stase, Chirurgie)
  - **T** (Thrombophilie, Trauma)
  - **O** (Obésité, Oestroprogestatifs)
  - **P** (Post-partum, Cancer / Processus tumoral)
• **Triade de Virchow** : Stase + Lésion + Hypercoagulabilité → **SALH** (comme « sale », rappel d'un mauvais terrain).
• **Score de Wells simplifié : ≥ 2 = EP probable. Pensez à « C TAP »** :
  - **C**ancer, **T**achycardie, **A**ntécédents thromboemboliques, **P**aralysie/immobilisation récente.
• **D-dimères après 50 ans** : Seuil = **âge × 10**. (Ex : patient de 70 ans : seuil = 700 ng/mL, pas 500).
• **Arrêt des injectables sous AVK** : *« 5 jours et 2 INR »* : 5 jours de chevauchement minimum + 2 INR consécutifs entre 2 et 3 à 24h d'intervalle.
• **Étiologies non cruoriques : « TAS GAP »** :
  - **T**umorale, **A**mniotique, **S**eptique, **G**azeuse, **A**utres, **P**arasitaire.
• **Signes ECG** : *« S1Q3T3 + T(-) V1–V4 = VD en détresse »*.
• **Traitement : HBPM > HNF** :
  - *« HNF = Haute Nécessité de surveillance (TCA) »*
  - *« HBPM = Hors surveillance, Bonne efficacité, Manipulation simple »*.

---
*Allez, courage futurs toubibs ! L’EP, c’est comme un compétiteur sournois : il se cache, mais avec une bonne stratégie, vous le démasquerez à tous les coups. À vos stéthos, vos scanners mentaux et… vos annales ! La réussite est au bout de la veine (cave, bien sûr 😉)*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Embolie Pulmonaire']
  }
];
