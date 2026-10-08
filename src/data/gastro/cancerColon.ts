import { Question, CourseResource } from '../../types/medical';

export const CANCER_COLON_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Cancer du Côlon (Pr ANOU / Dr MEHENNI - Blida 2025)
  // -------------------------------------------------------------
  {
    id: 'q-cc-01',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le cancer du côlon résulte le plus souvent de la transformation maligne d'un précurseur. Quelle est la séquence carcinogénique prédominante (80 % des cas) ?",
    options: [
      "Séreuse -> métaplasie -> dysplasie -> carcinome",
      "Séquence classique Adénome - Carcinome (modèle de Fearon & Vogelstein)",
      "Hyperplasie lymphoïde -> lymphome malin non hodgkinien",
      "Polype hyperplasique distal banal -> cancer d'emblée sans adénome",
      "Léiomyome bénin -> léiomyosarcome"
    ],
    correctAnswers: [1],
    explanation: "La séquence adénome-carcinome représente environ 80 % des cancers colorectaux. Un polype adénomateux évolue vers la dysplasie de bas grade, puis de haut grade et le carcinome invasif sur une durée moyenne de 10 ans.",
    clinicalPearl: "80 % des cancers colorectaux dérivent d'un adénome préexistant (séquence adénome-carcinome sur ~10 ans)."
  },
  {
    id: 'q-cc-02',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 45 ans a un père décédé d'un cancer du côlon à 48 ans et une tante opérée d'un cancer de l'endomètre à 50 ans. Quel syndrome héréditaire sans polypose diffuse évoquez-vous en priorité ?",
    options: [
      "Polypose adénomateuse familiale classique (PAF)",
      "Syndrome de Lynch (HNPCC - Hereditary Non-Polyposis Colorectal Cancer)",
      "Syndrome de Gardner",
      "Syndrome de Peutz-Jeghers",
      "Maladie de Crohn colique familiale"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Lynch (HNPCC) est lié à des mutations constitutionnelles des gènes de réparation des mésappariements de l'ADN (MMR : MLH1, MSH2, MSH6, PMS2). Il associe des cancers coliques droits survenant à un âge jeune (< 50 ans) et des cancers extracoliques du spectre (endomètre, ovaire, voies urinaires, grêle).",
    clinicalPearl: "Syndrome de Lynch (HNPCC) : CCR précoce (côlon droit) + Cancer de l'endomètre/ovaire/voies urinaires. Pas de polypose diffuse."
  },
  {
    id: 'q-cc-03',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la Polypose Adénomateuse Familiale (PAF), laquelle de ces propositions est exacte ?",
    options: [
      "Elle est causée par une mutation du gène MSH2",
      "Le risque de cancer colorectal est quasi nul avant 70 ans",
      "Les polypes sont exclusivement de type hyperplasique",
      "Elle se transmet sur le mode autosomique récessif",
      "Elle se caractérise par l'apparition de centaines à milliers de polypes adénomateux avec un risque de cancer colorectal proche de 100 % vers 40-50 ans en l'absence de colectomie"
    ],
    correctAnswers: [4],
    explanation: "La PAF (mutation APC sur le chromosome 5q21, autosomique dominante) se caractérise par l'éclosion de centaines d'adénomes coliques dès l'adolescence, avec un risque inéluctable (proche de 100 %) de transformation en cancer vers 40-50 ans si aucune colectomie prophylactique n'est réalisée.",
    clinicalPearl: "PAF : Mutation APC (5q21). Centaines d'adénomes. 100 % de CCR vers 40-50 ans sans colectomie."
  },
  {
    id: 'q-cc-04',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le test de dépistage organisé de masse recommandé en population générale à risque moyen (50 à 74 ans) ?",
    options: [
      "Une coloscopie totale annuelle",
      "La recherche de sang occulte dans les selles par test immunologique fécal (FIT) tous les 2 ans",
      "Le dosage sérique annuel de l'antigène carcino-embryonnaire (ACE)",
      "Un lavement baryté tous les 3 ans",
      "Un scanner abdominal annuel sans injection"
    ],
    correctAnswers: [1],
    explanation: "Le test immunologique fécal (FIT) détecte l'hémoglobine humaine dans les selles. Il est réalisé tous les 2 ans entre 50 et 74 ans chez les sujets asymptomatiques à risque moyen. En cas de positivité (environ 4 % des tests), une coloscopie totale est impérative.",
    clinicalPearl: "Dépistage organisé (50-74 ans à risque moyen) : Test immunologique fécal (FIT) tous les 2 ans. Si positif -> Coloscopie !"
  },
  {
    id: 'q-cc-05',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présentant une anémie ferriprive microcytaire isolée, sans rectorragie visible ni trouble franc du transit, doit faire suspecter en premier lieu :",
    options: [
      "Un cancer du côlon sigmoïde sténosant",
      "Un cancer du bas rectum",
      "Un cancer du côlon droit (cæcum ou côlon ascendant)",
      "Un polype hyperplasique de l'ampoule rectale",
      "Une diverticulite aiguë gauche"
    ],
    correctAnswers: [2],
    explanation: "Les cancers du côlon droit sont souvent volumineux, bourgeonnants et ulcérés, provoquant un saignement occulte chronique insidieux qui se traduit par une anémie ferriprive et une altération de l'état général. Le diamètre large du côlon droit et les selles liquides retardent l'apparition d'une occlusion.",
    clinicalPearl: "Cancer du côlon droit : Anémie ferriprive + masse palpable de la FID + amaigrissement. L'occlusion est tardive !"
  },
  {
    id: 'q-cc-06',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification TNM (8ème édition), le stade T4a d'un cancer du côlon correspond à :",
    options: [
      "Une tumeur limitée à la musculeuse",
      "Une tumeur perforant le péritoine viscéral",
      "Une tumeur envahissant la sous-séreuse sans perforation",
      "Une tumeur envahissant directement les organes voisins (vessie, paroi)",
      "Une tumeur avec adénopathies régionales métastatiques"
    ],
    correctAnswers: [1],
    explanation: "Classification TNM : T1 = sous-muqueuse ; T2 = musculeuse ; T3 = sous-séreuse / tissus péricoliques ; T4a = perforation du péritoine viscéral ; T4b = envahissement direct d'un organe ou d'une structure adjacente.",
    clinicalPearl: "Classification TNM côlon : T4a = Perforation du péritoine viscéral. T4b = Envahissement d'organes de contiguïté."
  },
  {
    id: 'q-cc-07',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie ou d'endoscopie constitue le gold standard pour le diagnostic positif du cancer colique et la recherche de lésions synchrones ?",
    options: [
      "Le coloscanner virtuel avec insufflation de gaz",
      "La coloscopie totale avec biopsies multiples et analyse anatomopathologique",
      "Le lavement baryté en double contraste",
      "L'écho-endoscopie colique haute",
      "L'IRM pelvienne"
    ],
    correctAnswers: [1],
    explanation: "La coloscopie totale permet d'explorer l'ensemble du cadre colique jusqu'au cæcum, de réaliser des biopsies pour examen anatomopathologique (diagnostic de certitude d'adénocarcinome), et de dépister d'éventuels polypes ou cancers synchrones (dans 3 à 5 % des cas).",
    clinicalPearl: "Gold standard diagnostique du cancer du côlon = Coloscopie totale jusqu'au cæcum avec biopsies."
  },
  {
    id: 'q-cc-08',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour un patient de 62 ans opéré d'un cancer du côlon de stade III (pT3 N1 M0, résection R0), quelle est la prise en charge postopératoire standard recommandée ?",
    options: [
      "Surveillance clinique et biologique seule sans chimiothérapie",
      "Radiothérapie abdominale adjuvante",
      "Chimiothérapie adjuvante à base d'oxaliplatine (schéma FOLFOX ou CAPOX) pendant 3 à 6 mois",
      "Immunothérapie par anti-PD1 en monothérapie systématique",
      "Colectomie totale de seconde intention"
    ],
    correctAnswers: [2],
    explanation: "Le stade III (envahissement ganglionnaire N+) relève formellement d'une chimiothérapie adjuvante combinée associant le 5-FU et l'oxaliplatine (FOLFOX ou CAPOX) pendant 3 à 6 mois afin d'éradiquer les micrométastases et d'améliorer la survie globale.",
    clinicalPearl: "Stade III du côlon (N+) = Chimiothérapie adjuvante obligatoire par FOLFOX ou CAPOX pendant 3 à 6 mois."
  },
  {
    id: 'q-cc-09',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les critères cliniques d'Amsterdam II pour le diagnostic du syndrome de Lynch incluent tous les éléments suivants, SAUF un. Lequel ?",
    options: [
      "Au moins 3 sujets apparentés atteints d'un cancer du spectre du syndrome de Lynch (côlon, endomètre, grêle, voies urinaires)",
      "Au moins 2 générations successives atteintes",
      "Au moins 1 cas diagnostiqué avant l'âge de 50 ans",
      "L'existence obligatoire d'une polypose adénomateuse floride diffuse (> 100 polypes)",
      "L'exclusion formelle d'une polypose adénomateuse familiale (PAF)"
    ],
    correctAnswers: [3],
    explanation: "Le syndrome de Lynch (HNPCC) est par définition un cancer SANS polypose diffuse (moins de 10-15 adénomes). Les critères d'Amsterdam II excluent formellement la PAF.",
    clinicalPearl: "Critères d'Amsterdam II (règle des 3-2-1-0) : 3 cas de cancer, 2 générations, 1 avant 50 ans, 0 polypose."
  },
  {
    id: 'q-cc-10',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les polypes suivants, lequel est défini comme un adénome avancé à haut risque de cancérisation ?",
    options: [
      "Polype hyperplasique rectal de 4 mm",
      "Polype tubuleux de 5 mm en dysplasie de bas grade",
      "Polype hamartomateux solitaire",
      "Adénome de taille ≥ 10 mm, OU avec composante villeuse ≥ 25 %, OU avec dysplasie de haut grade",
      "Pseudopolype inflammatoire de cicatrisation"
    ],
    correctAnswers: [3],
    explanation: "Un adénome avancé (à haut risque) est défini par la présence d'au moins un des critères suivants : taille ≥ 10 mm, contingent villeux ≥ 25 %, ou dysplasie de haut grade.",
    clinicalPearl: "Adénome avancé : Taille ≥ 10 mm OU contingent villeux ≥ 25 % OU dysplasie de haut grade."
  },
  {
    id: 'q-cc-11',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie moléculaire est associée à une efficacité remarquable des inhibiteurs de points de contrôle immunitaire (anti-PD1 / immunothérapie) dans le cancer colorectal métastatique ?",
    options: [
      "La mutation KRAS codon 12",
      "L'absence de mutation BRAF",
      "L'instabilité des microsatellites de haut niveau (statut MSI-H) ou le déficit du système de réparation MMR (dMMR)",
      "L'amplification du récepteur HER2",
      "L'hyperexpression du CEA sérique"
    ],
    correctAnswers: [2],
    explanation: "Les tumeurs MSI-H / dMMR (environ 5 % des cancers colorectaux métastatiques) génèrent un nombre massif de néo-antigènes (forte charge mutationnelle) et sont ultra-sensibles aux immunothérapies anti-PD1 (Pembrolizumab, Nivolumab), validées en 1ère ligne métastatique.",
    clinicalPearl: "Statut MSI-H / dMMR = Sensibilité spectaculaire aux immunothérapies anti-PD1 dans le cancer colorectal."
  },
  {
    id: 'q-cc-12',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 70 ans se présente avec une occlusion intestinale aiguë fébrile sur cancer sténosant du sigmoïde avec distension cæcale majeure (> 10 cm). Quelle est l'attitude chirurgicale prioritaire ?",
    options: [
      "Colostomie de décharge sans résection tumorale puis chimiothérapie première",
      "Prise en charge chirurgicale urgente (intervention de Hartmann ou colectomie segmentaire) après réanimation rapide pour éviter la rupture cæcale diastatique",
      "Radiothérapie externe en urgence",
      "Dilatation endoscopique au ballonnet exclusive",
      "Simple surveillance sous antispasmodiques"
    ],
    correctAnswers: [1],
    explanation: "L'occlusion colique aiguë avec distension cæcale > 10 cm expose à un risque imminent de perforation diastatique du cæcum (loi de Laplace). Une intervention chirurgicale en urgence (Hartmann ou colectomie avec anastomose protégée/stomie) s'impose après réanimation.",
    clinicalPearl: "Occlusion colique gauche avec cæcum > 10 cm = Risque de perforation diastatique -> Urgence chirurgicale !"
  },
  {
    id: 'q-cc-13',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification TNM du cancer du côlon, l'envahissement de ganglions lymphatiques inter-aortico-caves ou lombo-aortiques rétro-péritonéaux est classé :",
    options: [
      "Ganglions régionaux N2b",
      "Ganglions non régionaux équivalant à une métastase à distance (stade M1a si métastase ganglionnaire isolée)",
      "Stade N1c",
      "Stade N3 d'emblée",
      "Stade Nx non évaluable"
    ],
    correctAnswers: [1],
    explanation: "Les ganglions régionaux du côlon cheminent le long des branches des artères mésentériques supérieure et inférieure jusqu'à leur origine. L'atteinte des ganglions lombo-aortiques, inter-aortico-caves ou iliaques est considérée comme une atteinte métastatique à distance (M1a).",
    clinicalPearl: "Ganglions rétro-péritonéaux lombo-aortiques = Ganglions NON régionaux = Métastase à distance (M1a)."
  },
  {
    id: 'q-cc-14',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le bilan d'extension à distance systématique de référence pour un cancer du côlon résécable comprend :",
    options: [
      "Une scintigraphie osseuse et un TEP-scan systématique",
      "Un scanner thoraco-abdomino-pelvien (TDM TAP) avec injection de produit de contraste iodé",
      "Une échographie hépatique isolée sans examen du thorax",
      "Une IRM cérébrale systématique",
      "Une laparoscopie exploratrice obligatoire pour tous les patients"
    ],
    correctAnswers: [1],
    explanation: "Le bilan d'extension systématique du cancer colique repose sur le scanner thoraco-abdomino-pelvien (TDM TAP) avec injection, qui recherche les métastases hépatiques, pulmonaires et péritonéales.",
    clinicalPearl: "Bilan d'extension standard du cancer du côlon = TDM Thoraco-Abdomino-Pelvien (TAP) injecté."
  },
  {
    id: 'q-cc-15',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le rôle clinique principal du dosage de l'Antigène Carcino-Embryonnaire (ACE) dans le cancer du côlon ?",
    options: [
      "Le dépistage précoce en population générale",
      "La surveillance postopératoire pour la détection précoce des récidives et l'évaluation pronostique pré-thérapeutique",
      "L'affirmation du diagnostic de certitude en remplacement des biopsies",
      "L'évaluation de la tolérance à la chimiothérapie",
      "Le choix entre colectomie droite et gauche"
    ],
    correctAnswers: [1],
    explanation: "L'ACE n'est ni assez sensible ni assez spécifique pour le dépistage ou le diagnostic. Son utilité réside dans l'évaluation pronostique pré-opératoire et surtout la surveillance post-thérapeutique : une ré-ascension de l'ACE signe une récidive tumorale précoce.",
    clinicalPearl: "L'ACE ne sert PAS au dépistage ! Il sert à la surveillance post-thérapeutique (détection précoce des récidives)."
  },
  {
    id: 'q-cc-16',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un sujet porteur d'un syndrome de Lynch confirmé (mutation MMR), à quel âge et avec quelle périodicité la coloscopie de surveillance doit-elle être réalisée ?",
    options: [
      "Dès l'âge de 10 ans tous les 6 mois",
      "Dès 20 à 25 ans (ou 5 ans avant le cas le plus jeune dans la famille), répétée tous les 1 à 2 ans",
      "À partir de 50 ans tous les 5 ans",
      "Une seule coloscopie à 40 ans puis arrêt",
      "Uniquement en cas de rectorragies"
    ],
    correctAnswers: [1],
    explanation: "Dans le syndrome de Lynch, en raison de l'accélération de la séquence adénome-cancer (carcinogenèse en 2-3 ans au lieu de 10 ans), la coloscopie totale avec chromoendoscopie débute dès 20-25 ans et se répète tous les 1 à 2 ans.",
    clinicalPearl: "Dépistage syndrome de Lynch : Coloscopie tous les 1 à 2 ans dès l'âge de 20-25 ans."
  },
  {
    id: 'q-cc-17',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'intervention chirurgicale oncologique standard pour une tumeur du cæcum ou du côlon ascendant est :",
    options: [
      "Une colectomie segmentaire gauche",
      "Une hémicolectomie droite (colectomie droite élargie) avec anastomose iléo-transverse et curage ganglionnaire iléo-colique",
      "Une résection colique transversale pure sans résection iléale",
      "Une proctocolectomie totale",
      "Une colostomie droite définitive"
    ],
    correctAnswers: [1],
    explanation: "Le traitement oncologique du cancer du côlon droit repose sur l'hémicolectomie droite emportant les 10-15 derniers centimètres d'iléon, le cæcum, le côlon ascendant et l'angle hépatique avec ligature à l'origine des vaisseaux iléo-coliques et coliques droits (curage ganglionnaire) et anastomose iléo-transverse.",
    clinicalPearl: "Cancer du côlon droit = Hémicolectomie droite avec curage ganglionnaire et anastomose iléo-transverse."
  },
  {
    id: 'q-cc-18',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient porteur d'un cancer du sigmoïde avec une métastase hépatique unique de 3 cm résécable (stade M1a), quelle stratégie offre un potentiel de guérison à long terme ?",
    options: [
      "Chimiothérapie palliative exclusive sans aucun geste chirurgical",
      "Résection chirurgicale complète à visée curative de la tumeur primitive ET de la métastase hépatique (simultanée ou différée) associée à une chimiothérapie péri-opératoire",
      "Radiothérapie abdominale totale exclusive",
      "Immunothérapie seule sans chirurgie",
      "Abstention thérapeutique"
    ],
    correctAnswers: [1],
    explanation: "Dans le cancer colorectal avec métastases hépatiques résécables (ou rendues résécables par chimiothérapie), l'exérèse chirurgicale complète R0 de la tumeur primitive et des métastases hépatiques permet d'obtenir un taux de survie à 5 ans de 40 à 50 % avec possibilité de guérison.",
    clinicalPearl: "Métastases hépatiques résécables d'un cancer colique : Objectif curatif associant chirurgie des métastases + colectomie + chimiothérapie."
  },
  {
    id: 'q-cc-19',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient suivi pour une rectocolite hémorragique (RCH) pancolique évoluant depuis 15 ans présente une dysplasie de haut grade plane multifocale sur les biopsies de surveillance. Quelle est la conduite recommandée ?",
    options: [
      "Poursuite de la surveillance coloscopique tous les 5 ans",
      "Résection endoscopique isolée sans autre geste",
      "Colectomie totale prophylactique (coloproctectomie totale avec anastomose iléo-anale)",
      "Augmentation des doses de dérivés 5-ASA",
      "Radiothérapie pelvienne"
    ],
    correctAnswers: [2],
    explanation: "La découverte d'une dysplasie de haut grade plane sur muqueuse de MICI de longue date (> 8-10 ans) est associée à un risque très élevé de cancer colorectal invasif synchrone ou métachrone méconnu (environ 40-50 %). L'indication d'une coloproctectomie totale prophylactique est formelle.",
    clinicalPearl: "Dysplasie de haut grade plane sur RCH ancienne = Indication formelle de coloproctectomie totale prophylactique."
  },
  {
    id: 'q-cc-20',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un volumineux adénome villeux sessile de 25 mm du côlon sigmoïde en dysplasie de haut grade :",
    options: [
      "Présente un risque négligeable de cancérisation",
      "Présente un risque élevé de transformation en adénocarcinome invasif et nécessite une exérèse complète en marges saines (endoscopique ou chirurgicale)",
      "Relève de l'abstention thérapeutique chez le patient de plus de 60 ans",
      "Se traite exclusivement par anti-inflammatoires",
      "Doit être surveillé par échographie simple"
    ],
    correctAnswers: [1],
    explanation: "Un adénome sessile de 25 mm avec contingent villeux et dysplasie de haut grade réunit tous les critères d'adénome avancé à haut risque (> 40 % de risque de foyer de carcinome invasif intramuqueux ou sous-muqueux) et exige une résection complète monobloc.",
    clinicalPearl: "Polype > 20 mm villeux en haut grade = Risque maximal de cancer -> Exérèse complète impérative avec analyse anatomopathologique."
  },
  {
    id: 'q-cc-21',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la classification TNM 8ème édition du cancer du côlon, le stade N1c désigne :",
    options: [
      "Une atteinte d'un seul ganglion lymphatique régional",
      "La présence de nodules tumoraux satellites dans la sous-séreuse ou le méso sans ganglion lymphatique résiduel identifiable",
      "Une atteinte de 4 à 6 ganglions régionaux",
      "Des métastases ganglionnaires rétropéritonéales",
      "Une absence totale d'évaluation ganglionnaire"
    ],
    correctAnswers: [1],
    explanation: "Le stade N1c correspond aux dépôts ou nodules tumoraux satellites retrouvés dans la graisse sous-séreuse ou péri-colique en l'absence de métastase ganglionnaire régionale vraie identifiable.",
    clinicalPearl: "Stade N1c = Dépôts tumoraux satellites dans le tissu péricolique sans ganglion métastatique identifié."
  },
  {
    id: 'q-cc-22',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la fréquence recommandée de la surveillance coloscopique postopératoire après résection complète à visée curative d'un cancer colique non métastatique ?",
    options: [
      "Une coloscopie à 3 mois puis arrêt définitif",
      "Une coloscopie de contrôle à 1 an après l'intervention, puis tous les 3 à 5 ans si elle est normale",
      "Aucune coloscopie si le bilan initial était normal",
      "Une coloscopie tous les 6 mois à vie",
      "Uniquement si le taux d'ACE augmente"
    ],
    correctAnswers: [1],
    explanation: "Après chirurgie curative d'un cancer du côlon, une coloscopie de contrôle est préconisée à 1 an (pour dépister une récidive anastomotique ou un polype métachrone). Si elle est normale, l'intervalle est ensuite de 3 à 5 ans.",
    clinicalPearl: "Surveillance post-cancer du côlon : Coloscopie de contrôle à 1 an, puis tous les 3 à 5 ans."
  },
  {
    id: 'q-cc-23',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'utilisation des anticorps monoclonaux anti-EGFR (Cétuximab, Panitumumab) dans le cancer colorectal métastatique exige obligatoirement :",
    options: [
      "La présence d'une mutation activatrice de BRAF V600E",
      "L'absence de mutation des gènes RAS (statut KRAS et NRAS sauvage / non muté sur les exons 2, 3 et 4)",
      "Un statut MSI-H obligatoire",
      "Une surexpression de la protéine p53",
      "Un taux d'ACE supérieur à 100 ng/mL"
    ],
    correctAnswers: [1],
    explanation: "Les thérapies anti-EGFR ne sont efficaces que si la voie de signalisation en aval n'est pas constitutivement activée. La présence d'une mutation de KRAS ou NRAS (exons 2, 3, 4) confère une résistance formelle aux anti-EGFR. Le statut RAS 'wild-type' (sauvage) est donc un prérequis obligatoire.",
    clinicalPearl: "Anti-EGFR (Cétuximab) : Efficace UNIQUEMENT si statut RAS (KRAS et NRAS) non muté (sauvage)."
  },
  {
    id: 'q-cc-24',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les facteurs suivants, lequel N'EST PAS un facteur de risque de cancer colorectal ?",
    options: [
      "Une alimentation riche en fibres alimentaires et en végétaux frais",
      "La présence d'une rectocolite hémorragique pancolique évoluant depuis plus de 10 ans",
      "Le syndrome de Lynch",
      "La consommation excessive de viandes rouges et de charcuteries, le tabagisme et l'obésité",
      "Un antécédent personnel d'adénome avancé réséqué"
    ],
    correctAnswers: [0],
    explanation: "Une alimentation riche en fibres, en fruits et en légumes est un facteur protecteur reconnu du cancer colorectal. Les viandes transformées, l'alcool, le tabac, l'obésité, les MICI et les prédispositions génétiques sont des facteurs de risque.",
    clinicalPearl: "Facteur protecteur du côlon = Fibres alimentaires, activité physique régulière. Facteurs de risque = Viande rouge, alcool, tabac, obésité."
  },
  {
    id: 'q-cc-25',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le nombre minimal de ganglions lymphatiques régionaux recommandé pour un examen anatomopathologique adéquat (pTNM fiable) d'une pièce de colectomie ?",
    options: [
      "Au moins 3 ganglions",
      "Au moins 6 ganglions",
      "Au moins 12 ganglions lymphatiques examinés",
      "Au moins 30 ganglions",
      "Un seul ganglion sentinelle suffit"
    ],
    correctAnswers: [2],
    explanation: "Les recommandations internationales et de l'INCa exigent l'analyse d'au moins 12 ganglions lymphatiques sur la pièce d'exérèse colique pour classer valablement une tumeur pN0 et éviter de sous-estimer un stade III.",
    clinicalPearl: "Critère de qualité anatomopathologique : Au moins 12 ganglions analysés pour affirmer le stade pN0."
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (7 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : M. B., 59 ans, dépistage FIT positif
  {
    id: 'q-cas-cc-1-1',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (M. B., 59 ans, dépistage organisé FIT positif) - Coloscopie : polype sessile de 18 mm au côlon descendant, histologie : adénome tubulo-villeux en dysplasie de haut grade. Quelle est la conduite immédiate ?",
    options: [
      "Surveillance par test FIT dans 3 ans",
      "Exérèse endoscopique complète (mucosectomie) avec analyse anatomopathologique des berges de résection",
      "Colectomie gauche oncologique d'emblée sans tenter de résection endoscopique",
      "Radiothérapie externe locale",
      "Arrêt du dépistage"
    ],
    correctAnswers: [1],
    explanation: "Un polype sessile de 18 mm sans signe endoscopique de dégénérescence sous-muqueuse massive relève d'une exérèse endoscopique complète par mucosectomie. Si la résection est R0 et qu'il n'y a pas d'invasion sous-muqueuse profonde, le traitement est curatif.",
    clinicalPearl: "Polype de 18 mm = Mucosectomie endoscopique complète avec analyse des berges."
  },
  {
    id: 'q-cas-cc-1-2',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Après confirmation d'une résection endoscopique complète R0 de cet adénome avancé (18 mm, villeux, haut grade), quel est le suivi coloscopique recommandé ?",
    options: [
      "Coloscopie à 10 ans",
      "Coloscopie de contrôle à 1 an (ou 3 ans selon critères complets de risque intermédiaire/élevé)",
      "Test FIT tous les ans",
      "Arrêt complet de toute surveillance",
      "Échographie abdominale semestrielle"
    ],
    correctAnswers: [1],
    explanation: "Après résection d'un adénome avancé à haut risque, la coloscopie de contrôle est préconisée à 1-3 ans pour vérifier la cicatrice et s'assurer de l'absence de récidive ou de polype métachrone.",
    clinicalPearl: "Surveillance post-adénome avancé = Coloscopie de contrôle rapprochée (1 à 3 ans)."
  },

  // Cas 2 : Femme de 43 ans, suspicion syndrome de Lynch
  {
    id: 'q-cas-cc-2-1',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Femme de 43 ans, cancer du côlon droit opéré) - Mère : cancer de l'endomètre à 47 ans. Frère : cancer colique à 49 ans. Absence de polypose diffuse. Quel test tumoral initial de première intention est indispensable pour orienter le diagnostic de syndrome de Lynch ?",
    options: [
      "Recherche de mutation somatique de KRAS",
      "Recherche d'instabilité des microsatellites (test MSI par PCR) et/ou étude en immunohistochimie de l'expression des 4 protéines MMR (MLH1, MSH2, MSH6, PMS2)",
      "Caryotype sanguin standard",
      "Dosage des estrogènes urinaires",
      "Dosage de l'alpha-fœtoprotéine"
    ],
    correctAnswers: [1],
    explanation: "Le dépistage tumoral du syndrome de Lynch repose sur la recherche du phénotype dMMR/MSI : immunohistochimie des 4 protéines MMR (MLH1, MSH2, MSH6, PMS2) et/ou analyse moléculaire de l'instabilité microsatellitaire (MSI). En cas d'anomalie, une recherche constitutionnelle germinale est réalisée.",
    clinicalPearl: "Dépistage tumoral du Lynch = Immunohistochimie MMR (MLH1/MSH2/MSH6/PMS2) + Statut MSI."
  },
  {
    id: 'q-cas-cc-2-2',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Chez cette patiente porteuse d'une mutation germinale MSH2 confirmée, quelle surveillance coloscopique est indiquée sur le côlon restant ?",
    options: [
      "Coloscopie tous les 5 ans",
      "Coloscopie annuelle ou tous les 1 à 2 ans avec chromoendoscopie",
      "Pas de surveillance si elle n'a plus de symptômes",
      "Scanner TAP annuel en remplacement de la coloscopie",
      "Coloscopie tous les 10 ans"
    ],
    correctAnswers: [1],
    explanation: "Dans le syndrome de Lynch, en raison du risque très élevé de cancer colique métachrone (accélération de la carcinogenèse), la coloscopie totale avec chromoendoscopie doit être répétée tous les 1 à 2 ans.",
    clinicalPearl: "Surveillance post-cancer dans le syndrome de Lynch = Coloscopie tous les 1 à 2 ans."
  },

  // Cas 3 : Homme de 64 ans, métastase hépatique unique
  {
    id: 'q-cas-cc-3-1',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (Homme de 64 ans, adénocarcinome du sigmoïde) - TDM TAP : tumeur sigmoïdienne avec métastase hépatique unique de 3 cm au segment VI, parfaitement résécable, statut RAS sauvage (non muté). Quelle est la meilleure stratégie thérapeutique ?",
    options: [
      "Chirurgie palliative exclusive avec colostomie",
      "Chimiothérapie péri-opératoire (FOLFOX) associée ou non à une thérapie ciblée anti-EGFR, suivie de la résection chirurgicale R0 du primitif et de la métastase hépatique (stratégie curative)",
      "Radiothérapie hépatique stéréotaxique exclusive sans chirurgie",
      "Immunothérapie par anti-PD1 en monothérapie",
      "Soins de confort exclusifs"
    ],
    correctAnswers: [1],
    explanation: "Une métastase hépatique unique résécable chez un patient jeune en bon état général relève d'une stratégie à visée curative associant chimiothérapie péri-opératoire et résection complète R0 de la tumeur primitive et de la métastase hépatique.",
    clinicalPearl: "Métastase hépatique colique résécable = Traitement curatif associant résection hépatique R0 + colectomie."
  },

  // Cas 4 : Patient de 53 ans, RCH depuis 14 ans et dysplasie
  {
    id: 'q-cas-cc-4-1',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Patient de 53 ans, RCH pancolique depuis 14 ans) - Coloscopie de surveillance : dysplasie plane multifocale confirmée par un second pathologiste expert. Quelle est la prise en charge de référence ?",
    options: [
      "Simple contrôle coloscopique dans 3 ans",
      "Colectomie totale prophylactique (coloproctectomie totale avec réservoir iléo-anal)",
      "Intensification du traitement anti-TNF seul",
      "Mucosectomie de la zone sans colectomie",
      "Antibiothérapie prolongée"
    ],
    correctAnswers: [1],
    explanation: "La dysplasie plane multifocale survenant sur une RCH ancienne témoigne d'un champ d'instabilité génomique diffus à haut risque de cancer synchrone ou métachrone. La coloproctectomie totale prophylactique est le traitement de choix.",
    clinicalPearl: "Dysplasie multifocale sur RCH ancienne = Coloproctectomie totale prophylactique."
  },

  // Cas 5 : Femme de 58 ans, cancer pT3 N2a M0
  {
    id: 'q-cas-cc-5-1',
    courseId: 'crs-gastro-cancer-colon',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Femme de 58 ans, colectomie gauche pour adénocarcinome du côlon descendant) - Anatomopathologie : tumeur traversant la musculeuse dans la sous-séreuse (pT3), 5 ganglions métastatiques sur 18 analysés (pN2a), pas de métastase (pM0), statut pMMR/MSS. Quel traitement adjuvant est formellement indiqué ?",
    options: [
      "Surveillance clinique simple",
      "Chimiothérapie adjuvante par schéma associant 5-FU et Oxaliplatine (FOLFOX ou CAPOX) pendant 6 mois",
      "Radiothérapie abdominale",
      "Immunothérapie par Pembrolizumab",
      "Anti-EGFR en monothérapie"
    ],
    correctAnswers: [1],
    explanation: "La présence de 5 ganglions métastatiques classe la tumeur en stade III (haut risque pN2a). Une chimiothérapie adjuvante par doublet avec oxaliplatine (FOLFOX ou CAPOX) pendant 6 mois est le standard de référence pour réduire le risque de récidive métastatique.",
    clinicalPearl: "Stade III pN2a (≥ 4 ganglions envahis) = Chimiothérapie adjuvante FOLFOX/CAPOX pendant 6 mois."
  }
];

export const CANCER_COLON_RESOURCES: CourseResource[] = [
  {
    id: 'res-cc-mindmap',
    courseId: 'crs-gastro-cancer-colon',
    type: 'Resume',
    title: 'Fiche Synthèse : Cancer du Côlon',
    contentMarkdown: `## Cancer du Côlon : L'Essentiel pour le Résidanat
*Support de cours – Pr ANOU / Dr MEHENNI, Faculté de Médecine de Blida*

### 1. Épidémiologie & Facteurs de Risque
- **Fréquence** : 2ème cancer chez la femme, 3ème chez l'homme. > 95 % après 50 ans.
- **Facteurs génétiques majeurs** :
  - *PAF (Mutation APC, 5q21)* : Centaines d'adénomes, 100 % de CCR vers 40 ans sans colectomie.
  - *Syndrome de Lynch (Mutation MMR : MLH1, MSH2...)* : Transmission autosomique dominante, prédominance côlon droit, CCR précoce (< 50 ans), cancers extracoliques (endomètre, ovaire, voies urinaires). Critères d'Amsterdam II (3-2-1-0).
- **MICI** : RCH et Crohn colique après 8-10 ans d'évolution.

### 2. Formes Cliniques selon le Siège
- **Côlon droit (cæcum, ascendant)** : Tumeurs bourgeonnantes, volumineuses -> **Anémie ferriprive microcytaire**, masse palpable de la FID, amaigrissement. Occlusion tardive.
- **Côlon gauche (descendant, sigmoïde)** : Tumeurs sténosantes en virole -> **Troubles du transit** (constipation récente, alternance), rectorragies, **occlusion colique aiguë**.

### 3. Diagnostic & Bilan d'Extension
- **Coloscopie totale avec biopsies** : Gold standard diagnostique (recherche de lésions synchrones dans 3-5 %).
- **Bilan d'extension** : **TDM Thoraco-Abdomino-Pelvien (TAP) injecté**.
- **ACE sérique** : Valeur pronostique et rôle clé dans la surveillance postopératoire (pas de rôle dans le dépistage).

### 4. Classification TNM (8ème éd.)
- **T** : T1 (sous-muqueuse), T2 (musculeuse), T3 (sous-séreuse/tissus péricoliques), T4a (perfore péritoine viscéral), T4b (envahit organes de contiguïté).
- **N** : N0 (aucun ganglion sur ≥ 12 analysés), N1 (1-3 ggl), N1c (nodules satellites dans méso), N2 (≥ 4 ggl).
- **M** : M0 (absence), M1a (1 site métastatique : foie, poumon), M1b (> 1 site), M1c (carcinose péritonéale).

### 5. Principes Thérapeutiques
- **Chirurgie oncologique R0** :
  - *Côlon droit* : Hémicolectomie droite avec anastomose iléo-transverse.
  - *Côlon gauche* : Colectomie gauche avec anastomose colo-rectale.
  - *Curage ganglionnaire* : Ligature vasculaire à l'origine, **≥ 12 ganglions analysés**.
- **Chimiothérapie adjuvante** :
  - *Stade I et II sans facteur de risque* : Surveillance seule.
  - *Stade II à haut risque* : Discutée (Fluoropyrimidine seule ou doublet).
  - *Stade III (N+)* : **FOLFOX ou CAPOX pendant 3 à 6 mois**.
- **Formes métastatiques (Stade IV)** :
  - Chimiothérapie (FOLFOX/FOLFIRI) + Thérapies ciblées (Anti-VEGF Bevacizumab ou Anti-EGFR Cétuximab si RAS sauvage).
  - Immunothérapie (Anti-PD1) en 1ère ligne si **MSI-H / dMMR**.
  - Résection chirurgicale des métastases hépatiques résécables à visée curative.`,
    author: 'Pr ANOU / Dr MEHENNI - Blida'
  },
  {
    id: 'res-cc-mnemo',
    courseId: 'crs-gastro-cancer-colon',
    type: 'Astuce',
    title: 'Mnémotechniques : Cancer du Côlon',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (Cancer du Côlon - Blida)

1. **Critères d'Amsterdam II (Lynch) : « 3 - 2 - 1 - 0 »**
   - **3** sujets apparentés avec cancer du spectre Lynch
   - **2** générations successives atteintes
   - **1** cas diagnostiqué avant 50 ans
   - **0** polypose diffuse (PAF exclue)

2. **Symptômes selon le siège : « D.A.M. vs G.R.O. »**
   - Côlon **D**roit : **A**némie, **M**asse
   - Côlon **G**auche : **R**ectorragies, **O**cclusion (sténose)

3. **Thérapies Ciblées : « RAS Sauvage = Cétuximab »**
   - Anti-EGFR actif SEULEMENT si RAS est intact/sauvage.
   - Si RAS muté -> Anti-VEGF (Bevacizumab).

4. **Curage Ganglionnaire : « 12 Apôtres »**
   - Au moins **12 ganglions** analysés pour valider un stade pN0 !`,
    author: 'Pr ANOU - Blida'
  }
];
