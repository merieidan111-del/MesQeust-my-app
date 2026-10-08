import { Question, CourseResource } from '../../types/medical';

export const POLYPES_POLYPOSES_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Polypes et Polypose Recto-Colique (Dr Bakhti Farouk - Blida)
  // -------------------------------------------------------------
  {
    id: 'q-polyp-01',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un polype colorectal est défini comme :",
    options: [
      "Une tumeur maligne de la muqueuse colique",
      "Une prolifération dysplasique épithéliale invasive",
      "Toute saillie de la muqueuse dans la lumière colique ou rectale, quel que soit son type histologique",
      "Un amas de tissu lymphoïde sous-muqueux",
      "Une lésion inflammatoire transitoire disparaissant spontanément"
    ],
    correctAnswers: [2],
    explanation: "Un polype est une description macroscopique et non histologique : il s'agit de toute saillie de la muqueuse dans la lumière. Cette définition exclut les lésions invasives et les tumeurs franchement malignes. Piège : 'polype' n'est pas synonyme d'adénome ; il peut être néoplasique ou non néoplasique.",
    clinicalPearl: "Définition du polype : Strictement macroscopique (saillie dans la lumière), indépendant du type histologique."
  },
  {
    id: 'q-polyp-02',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le seuil généralement admis pour évoquer une polypose recto-colique est :",
    options: [
      "Plus de 5 polypes adénomateux",
      "Plus de 10 polypes adénomateux chez un même individu",
      "Plus de 20 polypes hyperplasiques",
      "Plus de 50 polypes totaux",
      "Plus de 100 polypes de tout type"
    ],
    correctAnswers: [1],
    explanation: "Le seuil conventionnel est de > 10 polypes adénomateux chez un même individu. Ce seuil peut varier dans les contextes syndromiques (ex. PAF = centaines à milliers). Les polypes hyperplasiques isolés ne définissent pas une polypose.",
    clinicalPearl: "Seuil de polypose adénomateuse : > 10 adénomes chez un même patient -> consultation d'oncogénétique recommandée."
  },
  {
    id: 'q-polyp-03',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification de Paris, un polype de type 0-Ip correspond à :",
    options: [
      "Un polype sessile à base large",
      "Un polype plan difficile à détecter",
      "Un polype pédiculé avec une tige individualisée",
      "Une lésion ulcérée infiltrante",
      "Un polype sous-muqueux en relief"
    ],
    correctAnswers: [2],
    explanation: "0-Ip = pédiculé (p = pedunculated). La classification de Paris décrit l'aspect endoscopique superficiel : 0-Ip (pédiculé), 0-Is (sessile), 0-II (plan : IIa surélevé, IIb plat, IIc déprimé).",
    clinicalPearl: "Classification de Paris : 0-Ip = Pédiculé (avec tige), 0-Is = Sessile (base large sans tige)."
  },
  {
    id: 'q-polyp-04',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un polype de type 0-Is dans la classification de Paris est :",
    options: [
      "Un polype avec une tige fine",
      "Un polype sans pédicule, à base d'implantation large",
      "Une lésion plane nécessitant une chromoendoscopie",
      "Un polype avec un pédicule court",
      "Une tumeur sous-muqueuse avec ulcération"
    ],
    correctAnswers: [1],
    explanation: "0-Is = sessile (s = sessile). Il est sans pédicule, directement implanté sur la paroi par une base large.",
    clinicalPearl: "Polype sessile (0-Is) : Pas de pédicule, base large -> mucosectomie souvent nécessaire."
  },
  {
    id: 'q-polyp-05',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les polypes colorectaux, le type histologique le plus fréquent (environ 70 % des polypes réséqués) est :",
    options: [
      "Le polype hyperplasique",
      "L'adénome tubuleux",
      "L'adénome villeux",
      "La lésion serratrice sessile",
      "Le polype hamartomateux"
    ],
    correctAnswers: [1],
    explanation: "Les adénomes tubuleux représentent environ 70 % des polypes réséqués en endoscopie. Ce sont des lésions précancéreuses. Bien que le polype hyperplasique soit fréquent dans la population générale, parmi les polypes réséqués c'est l'adénome tubuleux qui domine.",
    clinicalPearl: "70 % des adénomes colorectaux sont tubuleux. Les villeux sont plus rares mais ont un potentiel dégénératif plus élevé."
  },
  {
    id: 'q-polyp-06',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel adénome présente le plus haut risque de dégénérescence maligne ?",
    options: [
      "Adénome tubuleux de 5 mm sans dysplasie",
      "Adénome tubulo-villeux avec composante villeuse à 30 %",
      "Adénome villeux avec composante villeuse > 50 % et dysplasie de haut grade",
      "Adénome tubuleux avec dysplasie de bas grade",
      "Adénome sessile de 8 mm sans dysplasie"
    ],
    correctAnswers: [2],
    explanation: "Le risque de transformation maligne est corrélé à : 1) La taille (> 10 mm), 2) La composante villeuse (> 50 % villeux), 3) Le grade de dysplasie (haut grade). L'adénome villeux pur > 50 % avec dysplasie de haut grade présente le risque le plus élevé.",
    clinicalPearl: "Trio à très haut risque de cancer sur polype : Taille ≥ 10 mm + Composante villeuse > 50% + Dysplasie de haut grade."
  },
  {
    id: 'q-polyp-07',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La Polypose Adénomateuse Familiale (PAF) classique est due à une mutation du gène :",
    options: [
      "K-ras",
      "p53",
      "APC (chromosome 5q21)",
      "STK11 (LKB1)",
      "SMAD4"
    ],
    correctAnswers: [2],
    explanation: "La PAF est une maladie autosomique dominante liée à une mutation germinale du gène suppresseur de tumeur APC situé sur le chromosome 5q21. STK11 est muté dans le Peutz-Jeghers, SMAD4 dans la polypose juvénile.",
    clinicalPearl: "PAF classique = Mutation APC sur 5q21 (Autosomique Dominante). 100 % de CCR avant 40-50 ans sans colectomie prophylactique."
  },
  {
    id: 'q-polyp-08',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La Polypose associée à MUTYH (MAP) se transmet sur le mode :",
    options: [
      "Autosomique dominant",
      "Autosomique récessif",
      "Lié à l'X",
      "Mitochondrial",
      "Multifactoriel sans gène identifié"
    ],
    correctAnswers: [1],
    explanation: "La MAP est due à une mutation biallélique du gène MUTYH (réparation par excision de bases) et se transmet de manière AUTOSOMIQUE RÉCESSIVE. C'est une distinction clé avec la PAF classique qui est dominante.",
    clinicalPearl: "MAP = MUTYH -> Transmission Autosomique RÉCESSIVE (parents porteurs sains). Phénotype de PAF atténuée."
  },
  {
    id: 'q-polyp-09',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de Peutz-Jeghers est associé à une mutation du gène :",
    options: [
      "APC",
      "MUTYH",
      "STK11 (LKB1)",
      "BMPR1A",
      "BRAF"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de Peutz-Jeghers est lié à une mutation hétérozygote du gène STK11 (chromosome 19p13). Il associe des polypes hamartomateux diffus et des lentigines péri-orificielles.",
    clinicalPearl: "Peutz-Jeghers = STK11 (LKB1) -> Hamartomes arborescents + Lentigines péri-orales + Risque de cancers digestifs, sein et pancréas."
  },
  {
    id: 'q-polyp-10',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La polypose juvénile est associée à des mutations des gènes :",
    options: [
      "APC et MUTYH",
      "STK11 et BRAF",
      "SMAD4 et BMPR1A",
      "K-ras et p53",
      "MLH1 et MSH2"
    ],
    correctAnswers: [2],
    explanation: "La polypose juvénile (PJ) est une maladie autosomique dominante liée à des mutations dans la voie TGF-beta : gènes SMAD4 et BMPR1A. Le risque de CCR cumulé est d'environ 50 %.",
    clinicalPearl: "Polypose Juvénile = SMAD4 et BMPR1A -> Polypes hamartomateux à stroma œdémateux et kystique, risque de CCR."
  },
  {
    id: 'q-polyp-11',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les critères OMS, un syndrome de polypose serratrice est diagnostiqué devant :",
    options: [
      "Au moins 5 polypes serratrices au-dessus du sigmoïde dont 2 > 10 mm (ou > 20 polypes serratrices dans tout le côlon)",
      "Plus de 10 polypes hyperplasiques dans tout le côlon",
      "Plus de 20 adénomes tubuleux",
      "Un polype serratrice sessile unique > 20 mm",
      "Des polypes serratrices associés à des cancers synchrones"
    ],
    correctAnswers: [0],
    explanation: "Critères OMS du syndrome de polypose serratrice : 1) ≥ 5 polypes serratrices en amont du sigmoïde dont au moins 2 font ≥ 10 mm, OU 2) > 20 polypes serratrices disséminés dans tout le côlon avec au moins 5 proximaux.",
    clinicalPearl: "Polypose Serratrice OMS : ≥ 5 polypes proximaux (dont 2 ≥ 10 mm) OU > 20 dans tout le côlon. Risque de CCR par voie BRAF/MSI."
  },
  {
    id: 'q-polyp-12',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la séquence classique adénome-cancer (modèle de Fearon & Vogelstein), la première altération génétique initiatrice est :",
    options: [
      "L'activation de K-ras",
      "L'inactivation de p53",
      "L'inactivation du gène suppresseur APC",
      "La perte du chromosome 18q (SMAD4)",
      "La mutation de BRAF"
    ],
    correctAnswers: [2],
    explanation: "L'événement initiateur de la séquence classique est l'inactivation bi-allélique du gène APC (initiation), conduisant à l'accumulation de bêta-caténine. Suivent K-ras (croissance), 18q/SMAD4 (progression), et p53 (carcinome invasif).",
    clinicalPearl: "Chronologie Fearon & Vogelstein : 1) APC (Initiation) -> 2) K-ras (Croissance) -> 3) 18q/SMAD4 (Progression) -> 4) p53 (Invasion)."
  },
  {
    id: 'q-polyp-13',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'inactivation du gène suppresseur TP53 dans la séquence adénome-cancer correspond à l'étape :",
    options: [
      "De l'initiation de l'adénome précoce",
      "De la croissance de l'adénome intermédiaire",
      "De la formation de polypes hyperplasiques",
      "Du passage au stade de carcinome invasif franc",
      "Des métastases à distance ganglionnaires exclusives"
    ],
    correctAnswers: [3],
    explanation: "La perte de p53 (gardien du génome) est un événement génétique tardif qui déclenche le franchissement de la membrane basale et l'acquisition du phénotype de carcinome invasif.",
    clinicalPearl: "p53 = Événement tardif capital scellant la transformation de l'adénome dysplasique en carcinome invasif."
  },
  {
    id: 'q-polyp-14',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les facteurs suivants, lequel constitue un critère d'adénome avancé à haut risque de cancer ?",
    options: [
      "Taille inférieure à 5 mm",
      "Polype hyperplasique distal de 3 mm",
      "Histologie tubuleuse pure sans atypie",
      "Dysplasie épithéliale de haut grade",
      "Localisation rectale exclusive"
    ],
    correctAnswers: [3],
    explanation: "Un adénome est qualifié d'avancé s'il présente au moins un des critères suivants : taille ≥ 10 mm, composante villeuse ≥ 25 %, ou dysplasie de haut grade.",
    clinicalPearl: "Critères d'adénome avancé (haut risque) : Taille ≥ 10 mm OU composante villeuse ≥ 25% OU dysplasie de haut grade."
  },
  {
    id: 'q-polyp-15',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les recommandations ESGE 2024, un patient après résection complète de 1 ou 2 petits adénomes tubuleux < 10 mm sans dysplasie de haut grade relève d'une surveillance à :",
    options: [
      "1 an",
      "3 ans",
      "5 ans",
      "10 ans (groupe à faible risque)",
      "Pas de coloscopie nécessaire"
    ],
    correctAnswers: [3],
    explanation: "Recommandations ESGE 2024 : 1 à 2 adénomes tubuleux < 10 mm en dysplasie de bas grade = groupe à faible risque. La coloscopie de surveillance est recommandée à 10 ans.",
    clinicalPearl: "Surveillance ESGE 2024 : Faible risque (1-2 tubuleux < 10 mm) = Coloscopie à 10 ans !"
  },
  {
    id: 'q-polyp-16',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient ayant bénéficié de la résection de 4 adénomes de 8 mm dont un avec composante villeuse relève d'une surveillance à :",
    options: [
      "6 mois",
      "1 an",
      "3 ans (groupe à risque intermédiaire)",
      "5 ans",
      "10 ans"
    ],
    correctAnswers: [2],
    explanation: "Risque intermédiaire ESGE 2024 : 3 à 4 adénomes, OU au moins un adénome ≥ 10 mm, OU composante villeuse, OU dysplasie de haut grade. La coloscopie de contrôle est préconisée à 3 ans.",
    clinicalPearl: "Surveillance ESGE 2024 : Risque intermédiaire (3-4 adénomes OU ≥ 10 mm OU villeux OU haut grade) = Coloscopie à 3 ans."
  },
  {
    id: 'q-polyp-17',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon l'ESGE 2024, un patient ayant ≥ 5 adénomes réséqués ou une résection en piece-meal d'un polype plan relève d'une coloscopie à :",
    options: [
      "6 mois",
      "1 an (groupe à haut risque)",
      "3 ans",
      "5 ans",
      "10 ans"
    ],
    correctAnswers: [1],
    explanation: "Groupe à haut risque ESGE 2024 : ≥ 5 adénomes, OU résection incomplète suspectée, OU mucosectomie en piece-meal d'un gros polype ≥ 20 mm. Contrôle à 1 an (ou 6 mois pour le site de piece-meal).",
    clinicalPearl: "Surveillance ESGE 2024 : Haut risque (≥ 5 adénomes ou piece-meal) = Coloscopie de contrôle à 1 an !"
  },
  {
    id: 'q-polyp-18',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une manifestation extracolique ophtalmologique classique de la PAF est :",
    options: [
      "Les taches de Brushfield",
      "L'hypertrophie congénitale de l'épithélium pigmentaire rétinien (HCEPR)",
      "La cataracte sous-capsulaire postérieure",
      "Le glaucome congénital bilatéral",
      "Le kératocône progressif"
    ],
    correctAnswers: [1],
    explanation: "L'HCEPR (Hypertrophie Congénitale de l'Épithélium Pigmentaire Rétinien) est visible au fond d'œil chez environ 70-80 % des patients atteints de PAF. C'est un marqueur précoce et très évocateur.",
    clinicalPearl: "Signe oculaire de la PAF : HCEPR au fond d'œil (plaques pigmentées multiples et bilatérales)."
  },
  {
    id: 'q-polyp-19',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de Gardner est une variante phénotypique de la PAF associant à la polypose colique :",
    options: [
      "Des ostéomes (mandibule, crâne), des kystes épidermoïdes cutanés et des tumeurs desmoïdes",
      "Des lentigines cutanéo-muqueuses et des polypes duodénaux",
      "Des gliomes cérébraux exclusivement (syndrome de Turcot)",
      "Des hamartomes cutanés et une macrocéphalie (syndrome de Cowden)",
      "Des angiomes rétiniens et une maladie de von Hippel-Lindau"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Gardner (même gène APC) associe : polypose colique + ostéomes mandibulaires/crâniens + kystes épidermoïdes + anomalies dentaires + tumeurs desmoïdes mésentériques.",
    clinicalPearl: "Syndrome de Gardner = PAF + Ostéomes + Kystes épidermoïdes cutanés + Tumeurs desmoïdes."
  },
  {
    id: 'q-polyp-20',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La chromoendoscopie (virtuelle NBI/FICE ou vitale à l'indigo carmin) est particulièrement indiquée pour :",
    options: [
      "Visualiser les gros polypes pédiculés",
      "Améliorer la détection et la caractérisation des lésions planes superficielles (type 0-II)",
      "Remplacer l'examen anatomopathologique des biopsies",
      "Évaluer l'extension ganglionnaire à distance",
      "Mesurer la pression intraluminale colique"
    ],
    correctAnswers: [1],
    explanation: "La chromoendoscopie augmente le contraste muqueux et permet de repérer les lésions planes (0-II) et les polypes serratrices qui passent facilement inaperçus en lumière blanche.",
    clinicalPearl: "Chromoendoscopie : Outil indispensable pour repérer les lésions planes 0-II et analyser le pit pattern de Kudo."
  },
  {
    id: 'q-polyp-21',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les lésions serratrices sessiles (SSL) coliques sont préférentiellement associées à :",
    options: [
      "Une mutation APC exclusive",
      "Une mutation K-ras isolée",
      "Une mutation activatrice de BRAF (V600E) et un phénotype méthylateur CIMP avec instabilité microsatellitaire (MSI)",
      "Une inactivation de p53 précoce",
      "Une mutation biallélique de MUTYH"
    ],
    correctAnswers: [2],
    explanation: "Les SSL progressent via la voie alterne 'serratrice' : mutation BRAF précoce -> hyperméthylation des îlots CpG (CIMP) -> inactivation de MLH1 -> statut MSI-H (instabilité des microsatellites).",
    clinicalPearl: "Voie serratrice : SSL -> Mutation BRAF -> CIMP -> Hyperméthylation MLH1 -> Statut MSI-H."
  },
  {
    id: 'q-polyp-22',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un adolescent ou jeune adulte porteur confirmé de mutation APC (PAF), le rythme de surveillance coloscopique recommandé est :",
    options: [
      "Tous les 5 ans",
      "Annuel dès l'âge de 10-12 ans",
      "Tous les 3 ans à partir de 25 ans",
      "Une seule coloscopie à 20 ans",
      "Pas de surveillance avant 30 ans"
    ],
    correctAnswers: [1],
    explanation: "Dans la PAF classique, la rectosigmoïdoscopie ou coloscopie annuelle débute dès l'âge de 10-12 ans, afin de surveiller l'émergence des centaines d'adénomes avant la colectomie.",
    clinicalPearl: "Dépistage PAF : Surveillance endoscopique ANNUELLE dès 10-12 ans chez les porteurs de mutation APC."
  },
  {
    id: 'q-polyp-23',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement chirurgical de référence d'une PAF floride avec atteinte rectale sévère (> 20 polypes rectaux) est :",
    options: [
      "La colectomie subtotale avec anastomose iléo-rectale (AIR)",
      "La coloproctectomie totale avec anastomose iléo-anale (AIA) sur réservoir en J",
      "Une résection segmentaire colique gauche",
      "Une iléostomie définitive sans anastomose",
      "L'amputation abdomino-périnéale de Miles"
    ],
    correctAnswers: [1],
    explanation: "La coloproctectomie totale avec anastomose iléo-anale (réservoir iléal en J) est l'intervention de référence qui élimine tout le tissu colique et rectal à risque de dégénérescence maligne tout en conservant le sphincter anal.",
    clinicalPearl: "PAF avec rectum envahi = Coloproctectomie totale avec anastomose iléo-anale (AIA) sur réservoir en J."
  },
  {
    id: 'q-polyp-24',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La Polypose associée à MUTYH (MAP) présente typiquement un phénotype :",
    options: [
      "Floride avec > 5000 polypes coliques précoces",
      "Proche d'une PAF atténuée (AFAP), avec quelques dizaines à centaines de polypes et survenue plus tardive",
      "Strictement limité à l'estomac",
      "Hamartomateux identique au Peutz-Jeghers",
      "Non adénomateux inflammatoire"
    ],
    correctAnswers: [1],
    explanation: "La MAP se présente typiquement comme une polypose adénomateuse atténuée (10 à 100 polypes), avec un âge de survenue un peu plus tardif (40-50 ans) que la PAF classique.",
    clinicalPearl: "MAP (MUTYH) = Phénotype de PAF atténuée (10-100 polypes), autosomique récessive."
  },
  {
    id: 'q-polyp-25',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un polype hamartomateux est histologiquement défini par :",
    options: [
      "Une prolifération épithéliale dysplasique clonale",
      "Une prolifération désorganisée de tissus matures normalement présents dans la muqueuse et sous-muqueuse",
      "Un infiltrat inflammatoire neutrophile avec abcès des cryptes",
      "Une métaplasie malpighienne de l'épithélium colique",
      "Une prolifération exclusive de fibres musculaires lisses sans stroma"
    ],
    correctAnswers: [1],
    explanation: "L'hamartome est un assemblage désorganisé de tissus matures normaux (glandes, muscle lisse, tissu conjonctif). Il n'est pas dysplasique en soi, mais le syndrome génétique associé prédispose au cancer.",
    clinicalPearl: "Polype hamartomateux = Tissus normaux matures désorganisés (non néoplasique initialement, mais marqueur de syndrome à risque)."
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (15 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : M. A., 58 ans, dépistage FIT positif
  {
    id: 'q-cas-polyp-1-1',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (M. A., 58 ans, FIT positif) - La coloscopie retrouve un polype sessile de 12 mm du côlon ascendant (adénome tubulo-villeux avec composante villeuse à 40 % et dysplasie de bas grade) réséqué en monobloc, et deux polypes de 4 mm du rectum (polypes hyperplasiques). Quel est le risque de dégénérescence du polype de 12 mm ?",
    options: [
      "Risque nul car il est sessile",
      "Risque faible car la dysplasie est de bas grade",
      "Risque intermédiaire car la taille est > 10 mm et la composante villeuse est > 25 %",
      "Risque élevé équivalent à un cancer invasif",
      "Risque très élevé imposant une colectomie droite"
    ],
    correctAnswers: [2],
    explanation: "Ce polype mesure 12 mm (> 10 mm) et présente une composante villeuse à 40 % (> 25 %). Bien que la dysplasie soit de bas grade, ces critères en font un adénome avancé de risque intermédiaire.",
    clinicalPearl: "Adénome de 12 mm avec 40% de contingent villeux = Adénome avancé (risque intermédiaire)."
  },
  {
    id: 'q-cas-polyp-1-2',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quel est le niveau de risque global du patient selon la classification ESGE 2024 (les polypes rectaux étant de petits hyperplasiques) ?",
    options: [
      "Risque faible",
      "Risque intermédiaire",
      "Risque élevé",
      "Risque très élevé (polypose)",
      "Risque indéterminé"
    ],
    correctAnswers: [1],
    explanation: "Le patient a un adénome ≥ 10 mm avec composante villeuse réséqué complètement en monobloc -> Risque intermédiaire selon ESGE 2024. Les polypes hyperplasiques distaux < 5 mm ne comptent pas dans le calcul du risque.",
    clinicalPearl: "Les petits polypes hyperplasiques distaux (< 5 mm) ne modifient pas la stratification du risque post-polypectomie."
  },
  {
    id: 'q-cas-polyp-1-3',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quel est le délai de surveillance coloscopique recommandé pour M. A. ?",
    options: [
      "1 an",
      "3 ans",
      "5 ans",
      "10 ans",
      "Pas de surveillance requise"
    ],
    correctAnswers: [1],
    explanation: "Selon les recommandations ESGE 2024, le groupe à risque intermédiaire (adénome ≥ 10 mm ou composante villeuse ou 3-4 adénomes) doit bénéficier d'une coloscopie de contrôle à 3 ans.",
    clinicalPearl: "Délai de surveillance ESGE 2024 : Risque intermédiaire = Coloscopie à 3 ans."
  },

  // Cas 2 : Mme S., 25 ans, rectorragies et ATCD familial
  {
    id: 'q-cas-polyp-2-1',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Mme S., 25 ans, rectorragies, père décédé de CCR à 42 ans) - La coloscopie révèle plus de 50 adénomes disséminés dans tout le côlon. Quel est le diagnostic syndromique le plus probable ?",
    options: [
      "Syndrome de Peutz-Jeghers",
      "Polypose Adénomateuse Familiale (PAF)",
      "Syndrome de Lynch (HNPCC)",
      "Polypose juvénile isolée",
      "Syndrome de Cowden"
    ],
    correctAnswers: [1],
    explanation: "La présence de plus de 50 polypes adénomateux chez une patiente de 25 ans avec antécédent familial direct de CCR jeune (< 50 ans) évoque au premier chef une Polypose Adénomateuse Familiale (PAF).",
    clinicalPearl: "Adénomes multiples (> 50) + sujet jeune + père décédé de CCR à 42 ans = Polypose Adénomateuse Familiale (PAF)."
  },
  {
    id: 'q-cas-polyp-2-2',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quel gène est le plus probablement muté chez cette patiente ?",
    options: [
      "STK11",
      "MUTYH",
      "APC (chromosome 5q)",
      "SMAD4",
      "MLH1"
    ],
    correctAnswers: [2],
    explanation: "La PAF classique à transmission autosomique dominante est causée par une mutation constitutionnelle du gène suppresseur APC sur le chromosome 5q21.",
    clinicalPearl: "Gène de la PAF = APC (chromosome 5q21)."
  },
  {
    id: 'q-cas-polyp-2-3',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quelle est la prise en charge thérapeutique de référence à ce stade pour Mme S. ?",
    options: [
      "Coloscopie de surveillance annuelle seule sans chirurgie",
      "Coloproctectomie totale avec anastomose iléo-anale (AIA)",
      "Traitement par sulindac (AINS) en monothérapie",
      "Colectomie segmentaire gauche",
      "Surveillance tous les 6 mois par chromoendoscopie"
    ],
    correctAnswers: [1],
    explanation: "Devant une PAF floride avec des dizaines d'adénomes chez une jeune femme de 25 ans, le risque d'évolution vers le CCR est inéluctable (proche de 100 %). L'intervention prophylactique de référence est la coloproctectomie totale avec anastomose iléo-anale.",
    clinicalPearl: "PAF floride = Coloproctectomie totale avec réservoir iléo-anal (AIA) prophylactique."
  },

  // Cas 3 : M. B., 55 ans, SSL de 15 mm
  {
    id: 'q-cas-polyp-3-1',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (M. B., 55 ans) - Coloscopie : lésion plane de 15 mm du côlon droit recouverte de mucus, réséquée par mucosectomie. Histologie : lésion serratrice sessile (SSL) avec dysplasie de bas grade. Une autre de 8 mm au transverse. Quelle voie de cancérogenèse emprunte cette lésion ?",
    options: [
      "Voie classique adénome-cancer (APC -> K-ras -> p53)",
      "Voie serratrice (BRAF -> hyperméthylation CIMP -> instabilité des microsatellites MSI)",
      "Voie hamartomateuse (STK11 -> mTOR)",
      "Voie inflammatoire liée aux MICI",
      "Voie neuroendocrine"
    ],
    correctAnswers: [1],
    explanation: "Les SSL progressent par la voie serratrice avec mutation de BRAF et instabilité des microsatellites (MSI-H), responsable d'environ 15 à 20 % des cancers colorectaux.",
    clinicalPearl: "Voie serratrice : Lésion serratrice sessile -> Mutation BRAF -> Instabilité microsatellitaire (MSI)."
  },
  {
    id: 'q-cas-polyp-3-2',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - M. B. répond-il aux critères formels de l'OMS pour un syndrome de polypose serratrice ?",
    options: [
      "Oui, car il a 2 lésions serratrices",
      "Oui, car une lésion mesure plus de 10 mm et est dans le côlon droit",
      "Non, car il faut au moins 5 polypes serratrices en amont du sigmoïde dont au moins 2 font ≥ 10 mm (ou > 20 polypes serratrices au total)",
      "Non, car il n'y a pas d'antécédents familiaux",
      "Oui, car il existe de la dysplasie"
    ],
    correctAnswers: [2],
    explanation: "Le patient a seulement 2 lésions serratrices. Les critères OMS exigent au moins 5 lésions proximales dont 2 ≥ 10 mm, ou plus de 20 sur l'ensemble du côlon. Il ne remplit donc pas les critères de polypose serratrice.",
    clinicalPearl: "Syndrome de polypose serratrice : Il faut ≥ 5 lésions proximales (2 ≥ 10 mm) ou > 20 au total."
  },
  {
    id: 'q-cas-polyp-3-3',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 34,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quel est le niveau de risque de cette SSL ≥ 10 mm avec dysplasie et quelle surveillance proposer ?",
    options: [
      "Risque faible, surveillance à 10 ans",
      "Risque intermédiaire, surveillance à 3 ans",
      "Risque élevé, surveillance coloscopique recommandée à 1 an",
      "Pas de surveillance nécessaire",
      "Chirurgie d'hémicolectomie droite d'emblée"
    ],
    correctAnswers: [2],
    explanation: "Une SSL ≥ 10 mm avec dysplasie est classée comme lésion serratrice avancée à risque élevé selon les recommandations ESGE 2024, justifiant une coloscopie de contrôle à 1 an.",
    clinicalPearl: "SSL ≥ 10 mm avec dysplasie = Risque élevé -> Coloscopie de surveillance à 1 an !"
  },

  // Cas 4 : M. C., 19 ans, lentigines et syndrome de Koenig
  {
    id: 'q-cas-polyp-4-1',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 35,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (M. C., 19 ans) - Douleurs post-prandiales (syndrome de Koenig), lentigines péribuccales mélaniques. Mère opérée d'un cancer du sein à 45 ans. Coloscopie : nombreux polypes hamartomateux à architecture arborescente. Quel est le diagnostic ?",
    options: [
      "Polypose adénomateuse familiale (Gardner)",
      "Syndrome de Peutz-Jeghers",
      "Polypose juvénile",
      "Syndrome de Cowden",
      "Syndrome de Turcot"
    ],
    correctAnswers: [1],
    explanation: "La triade : polypes hamartomateux arborescents + lentigines péri-orificielles + syndrome de Koenig (invagination sur polype) caractérise le syndrome de Peutz-Jeghers.",
    clinicalPearl: "Peutz-Jeghers : Polypes hamartomateux + Lentigines des lèvres/muqueuse buccale + Risque d'invagination (Koenig)."
  },
  {
    id: 'q-cas-polyp-4-2',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 36,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - Quel est le gène muté dans le syndrome de Peutz-Jeghers ?",
    options: [
      "APC",
      "STK11 (LKB1)",
      "SMAD4",
      "PTEN",
      "MUTYH"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Peutz-Jeghers est dû à une mutation hétérozygote de STK11 (LKB1). PTEN est muté dans Cowden, SMAD4 dans la polypose juvénile.",
    clinicalPearl: "Peutz-Jeghers = Gène STK11 (LKB1)."
  },
  {
    id: 'q-cas-polyp-4-3',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 37,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - En plus du CCR, quels cancers extracoliques majeurs sont associés au syndrome de Peutz-Jeghers ?",
    options: [
      "Cancer du rein et de la thyroïde uniquement",
      "Cancer du sein et cancer du pancréas",
      "Mélanome malin et gliome cérébral",
      "Sarcome des tissus mous",
      "Cancer de la prostate précoce"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Peutz-Jeghers expose à un risque cumulé majeur de cancer du sein (jusqu'à 45-50 %) et de cancer du pancréas (jusqu'à 30-36 %), ainsi que des ovaires, utérus et poumon.",
    clinicalPearl: "Spectre tumoral Peutz-Jeghers : CCR + Sein (comme la mère du patient) + Pancréas + Ovaire/testicule."
  },

  // Cas 5 : Mme D., 72 ans, RCH et résection piece-meal
  {
    id: 'q-cas-polyp-5-1',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 38,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Mme D., 72 ans, suivie pour RCH depuis 20 ans) - Nombreux pseudo-polypes observés. Quelle est la nature de ces pseudo-polypes ?",
    options: [
      "Des adénomes villeux à fort potentiel de dégénérescence",
      "Des lésions inflammatoires secondaires de cicatrisation sans potentiel malin propre",
      "Des hamartomes précancéreux",
      "Des polypes métastatiques",
      "Des tumeurs neuroendocrines"
    ],
    correctAnswers: [1],
    explanation: "Les pseudo-polypes dans les MICI sont des îlots muqueux résiduels ou des bourgeons de granulation inflammatoire cicatriciels. Ils n'ont pas de potentiel malin propre, bien que l'inflammation chronique sous-jacente soit un facteur de risque de CCR.",
    clinicalPearl: "Pseudo-polypes de la RCH = Lésions inflammatoires cicatricielles, sans risque propre de dégénérescence maligne."
  },
  {
    id: 'q-cas-polyp-5-2',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 39,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - Un adénome sessile de 14 mm du côlon droit est réséqué en piece-meal (morcelé). Quel impact cette modalité de résection a-t-elle sur la surveillance ?",
    options: [
      "Aucun impact, surveillance standard à 5 ans",
      "Elle classe la patiente en risque élevé et impose une coloscopie de contrôle à 1 an (avec vérification du site à 6 mois)",
      "Elle impose une résection chirurgicale d'emblée obligatoire",
      "Elle permet d'espacer la surveillance à 10 ans",
      "Elle annule le risque de récidive locale"
    ],
    correctAnswers: [1],
    explanation: "La résection en piece-meal majore significativement le risque de récidive locale sur le site d'exérèse. Elle classe le geste dans le groupe à haut risque imposant une coloscopie précoce à 1 an (avec contrôle du site à 6 mois).",
    clinicalPearl: "Résection en piece-meal d'un polype = Haut risque de récidive locale -> Contrôle endoscopique rapproché à 6-12 mois."
  },
  {
    id: 'q-cas-polyp-5-3',
    courseId: 'crs-gastro-polypes-polyposes',
    questionNumber: 40,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - Quel est le risque global de cette patiente et le délai de contrôle selon les recommandations ESGE ?",
    options: [
      "Risque faible -> 10 ans",
      "Risque intermédiaire -> 3 ans",
      "Risque élevé -> Coloscopie de contrôle à 1 an",
      "Surveillance suspendue du fait de l'âge",
      "Chimiothérapie préventive"
    ],
    correctAnswers: [2],
    explanation: "La combinaison de la résection en piece-meal d'un adénome de 14 mm et de la maladie inflammatoire de longue date classe la patiente dans le groupe à risque élevé, nécessitant un contrôle coloscopique à 1 an.",
    clinicalPearl: "Piece-meal d'adénome > 10 mm = Risque élevé -> Coloscopie à 1 an."
  }
];

export const POLYPES_POLYPOSES_RESOURCES: CourseResource[] = [
  {
    id: 'res-polyp-mindmap',
    courseId: 'crs-gastro-polypes-polyposes',
    type: 'Resume',
    title: 'Fiche Synthèse : Polypes & Polyposes Recto-Coliques',
    contentMarkdown: `## Polypes & Polyposes Recto-Coliques : L'Essentiel pour le Résidanat
*D'après le cours du Dr Bakhti Farouk – Université Saad Dahlab Blida*

### 1. Définition & Épidémiologie
- **Polype** : Terme macroscopique désignant toute saillie de la muqueuse dans la lumière.
- **Polypose** : Présence de **> 10 polypes adénomateux** chez un même individu.
- Prévalence : > 30 % après 60 ans.

### 2. Classification Endoscopique de Paris
- **0-Ip** : Pédiculé (avec tige/pédicule).
- **0-Is** : Sessile (base d'implantation large, sans tige).
- **0-II** : Plan (IIa surélevé, IIb plat, IIc déprimé -> chromoendoscopie nécessaire).

### 3. Histologie & Potentiel Malin
- **Néoplasiques (Adénomes)** :
  - *Tubuleux* (70 % des polypes réséqués) : risque faible/modéré.
  - *Villeux* (> 50 % villeux) : risque de cancérisation le plus élevé.
  - *Tubulo-villeux* (mixte).
- **Non Néoplasiques** :
  - *Hyperplasiques* : bénins (distaux < 5 mm sans risque).
  - *Lésions serratrices sessiles (SSL)* : précancéreuses (voie BRAF / CIMP / MSI).
  - *Hamartomateux* : Peutz-Jeghers, Polypose Juvénile, Cowden.
  - *Inflammatoires (Pseudo-polypes)* : MICI (sans potentiel propre).

### 4. Séquence Adénome-Cancer (Fearon & Vogelstein)
1. **APC (5q21)** : Initiation de l'adénome précoce.
2. **K-ras** : Croissance et prolifération.
3. **18q / SMAD4** : Progression tumorale.
4. **p53 (17p)** : Passage au carcinome invasif.

### 5. Grands Syndromes de Polyposes
- **PAF classique (Gène APC, Autosomique Dominante)** :
  - Centaines à milliers d'adénomes.
  - 100 % de CCR avant 40-50 ans sans colectomie.
  - Signes extracoliques : HCEPR (fond d'œil), ostéomes, kystes, tumeurs desmoïdes (Gardner).
  - Chirurgie : Coloproctectomie totale avec réservoir iléo-anal (AIA).
- **MAP (Gène MUTYH, Autosomique Récessive)** :
  - Phénotype de PAF atténuée (10-100 polypes).
- **Peutz-Jeghers (Gène STK11/LKB1, Autosomique Dominant)** :
  - Polypes hamartomateux arborescents + Lentigines péri-orales + Cancers (sein, pancréas, tube digestif).
- **Polypose Juvénile (Gènes SMAD4, BMPR1A, Autosomique Dominante)** :
  - Hamartomes kystiques.

### 6. Surveillance Post-Polypectomie (Recommandations ESGE 2024)
- **Faible risque** (1-2 tubuleux < 10 mm en bas grade) : **Coloscopie à 10 ans**.
- **Risque intermédiaire** (3-4 adénomes OU ≥ 10 mm OU villeux OU haut grade) : **Coloscopie à 3 ans**.
- **Haut risque** (≥ 5 adénomes OU résection en piece-meal) : **Coloscopie à 1 an** (site à 6 mois).`,
    author: 'Dr Bakhti Farouk - Université Saad Dahlab Blida'
  },
  {
    id: 'res-polyp-mnemo',
    courseId: 'crs-gastro-polypes-polyposes',
    type: 'Astuce',
    title: 'Mnémotechniques : Polypes & Polyposes',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (Dr Bakhti Farouk)

1. **Séquence Fearon & Vogelstein : « A.K. 18. P53 »**
   - **A** : **A**PC (initiation)
   - **K** : **K**-ras (croissance)
   - **18** : Perte du chromosome **18**q (progression)
   - **P53** : Inactivation de **p53** (invasion maligne)

2. **Classification de Paris : « P.S.I »**
   - **Ip** = **P**édiculé (P comme Pédicule)
   - **Is** = **S**essile (S comme 'Assis' sur sa base large)
   - **0-II** = **I**nvisible presque (Plan, chromoendoscopie requise)

3. **Gènes des Hamartomes : « P.S.J. » & « J.S.B. »**
   - **P**eutz-Jeghers = **S**TK11
   - **J**uvénile = **S**MAD4 & **B**MPR1A

4. **PAF Extracolique : « G.O.D.T »**
   - **G**ardner (ostéomes, kystes épidermoïdes)
   - **O**phtalmo (HCEPR au fond d'œil)
   - **D**esmoïdes (tumeurs mésentériques)
   - **T**hyroïde / Duodénum (ampullome)

5. **Surveillance ESGE 2024 : « 10 - 3 - 1 »**
   - **10 ans** : 1-2 petits tubuleux bas grade
   - **3 ans** : 3-4 adénomes OU ≥ 10 mm OU villeux OU haut grade
   - **1 an** : ≥ 5 adénomes OU piece-meal`,
    author: 'Dr Bakhti Farouk - Blida'
  }
];
