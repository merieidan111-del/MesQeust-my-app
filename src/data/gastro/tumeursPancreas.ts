import { Question, CourseResource } from '../../types/medical';

export const TUMEURS_PANCREAS_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Tumeurs du Pancréas (Dr MOUSSAOUI)
  // -------------------------------------------------------------
  {
    id: 'q-panc-01',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'adénocarcinome canalaire du pancréas représente environ :",
    options: [
      "50% des tumeurs pancréatiques",
      "70% des tumeurs malignes",
      "Plus de 90% de toutes les tumeurs pancréatiques",
      "30% des cancers exocrines",
      "80% des tumeurs kystiques"
    ],
    correctAnswers: [2],
    explanation: "Le cours rappelle que l’adénocarcinome canalaire constitue à lui seul plus de 90 % de la totalité des tumeurs pancréatiques. Les autres options sous-estiment largement sa prévalence.",
    clinicalPearl: "Plus de 90 % de l'ensemble des tumeurs pancréatiques sont des adénocarcinomes canalaires."
  },
  {
    id: 'q-panc-02',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le cystadénocarcinome séreux se développe à partir de :",
    options: [
      "Cellules canalaires principales",
      "Cellules acinaires",
      "Cellules intercalaires",
      "Cellules neuroendocrines",
      "Cellules mucipares des canaux"
    ],
    correctAnswers: [2],
    explanation: "Le cystadénocarcinome séreux dérive des cellules intercalaires, il est multiloculaire microkystique et à contenu citrin. Les cellules acinaires donnent le carcinome acinaire.",
    clinicalPearl: "Cystadénome / cystadénocarcinome séreux = cellules intercalaires (microkystes à liquide citrin clair)."
  },
  {
    id: 'q-panc-03',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les lésions pré-néoplasiques canalaires conduisant à l’adénocarcinome canalaire, on retrouve :",
    options: [
      "TIPMP uniquement",
      "PanIN (néoplasie pancréatique intracanalaire)",
      "Cystadénome séreux",
      "Pancréatoblastome",
      "Tumeur pseudopapillaire"
    ],
    correctAnswers: [1],
    explanation: "Les PanIN sont des lésions microscopiques, observées à côté de l’adénocarcinome, classées de PanIN-1 à PanIN-3. Les TIPMP sont plus rares et également associées, mais la principale lésion précurseur est PanIN.",
    clinicalPearl: "PanIN (Pancreatic Intraepithelial Neoplasia) = Principale lésion précurseur microscopique de l'adénocarcinome canalaire."
  },
  {
    id: 'q-panc-04',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En macroscopie, l’adénocarcinome canalaire siège le plus fréquemment au niveau :",
    options: [
      "Queue du pancréas",
      "Corps du pancréas",
      "Tête du pancréas (60-70%)",
      "Isthme",
      "Diffus"
    ],
    correctAnswers: [2],
    explanation: "60 à 70% des cas siègent à la tête, ce qui explique l’ictère obstructif fréquent.",
    clinicalPearl: "60-70% à la tête du pancréas -> compression de la voie biliaire principale et ictère rétentionnel nu."
  },
  {
    id: 'q-panc-05',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le stroma de l’adénocarcinome canalaire est typiquement :",
    options: [
      "Lymphoïde abondant",
      "Fibreux, desmoplastique",
      "Myxoïde",
      "Lâche oedémateux",
      "Graisseux"
    ],
    correctAnswers: [1],
    explanation: "La réaction desmoplastique (stroma fibreux abondant) est caractéristique, participant à la consistance ferme de la tumeur.",
    clinicalPearl: "Stroma fibreux desmoplastique abondant = Signature histologique typique de l'adénocarcinome canalaire."
  },
  {
    id: 'q-panc-06',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Concernant les PanIN-3, quel énoncé est exact ?",
    options: [
      "Dysplasie de bas grade avec architecture papillaire simple",
      "Dysplasie de haut grade, mitoses et architecture cribriforme",
      "Absence d’atypies nucléaires",
      "Toujours visible au scanner",
      "Conservation de la polarité"
    ],
    correctAnswers: [1],
    explanation: "PanIN-3 = dysplasie de haut grade, atypies marquées, mitoses, bourgeon endoluminal et aspect cribriforme. PanIN-1 a une polarité conservée.",
    clinicalPearl: "PanIN-3 = Carcinome in situ / dysplasie de haut grade avec architecture cribriforme et atypies nucléaires majeures."
  },
  {
    id: 'q-panc-07',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le grade G2 de l’adénocarcinome canalaire est défini par :",
    options: [
      "Moins de 5 mitoses/10 champs, mucosécrétion abondante",
      "Perte de polarisation nucléaire, 5 à 10 mitoses/10 champs, peu de mucosécrétion",
      "Plus de 10 mitoses/10 champs, perte de mucosécrétion",
      "Architecture complètement indifférenciée",
      "Noyaux réguliers en position basale"
    ],
    correctAnswers: [1],
    explanation: "G2 correspond à moyennement différencié : perte de polarisation, peu de mucus, 5-10 mitoses. G1 : bien différencié, moins de 5 mitoses. G3 : >10 mitoses.",
    clinicalPearl: "Grades histologiques : G1 < 5 mitoses (mucus abondant) ; G2 = 5-10 mitoses ; G3 > 10 mitoses."
  },
  {
    id: 'q-panc-08',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le profil immunohistochimique typique de l’adénocarcinome canalaire est :",
    options: [
      "CK7+, CK20+, ACE+",
      "CK7+, CK20-, ACE+",
      "Chromogranine A+, synaptophysine+",
      "Trypsine+, lipase+",
      "CK20+, vimentine+, ACE-"
    ],
    correctAnswers: [1],
    explanation: "CK7+, CK20-, ACE+ (antigène carcinoembryonnaire). Les enzymes pancréatiques sont négatives (différenciation acinaire).",
    clinicalPearl: "Profil IHC canalaire : Cytokératine 7 positive (CK7+), CK20 négative (CK20-), ACE positif."
  },
  {
    id: 'q-panc-09',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le carcinome à cellules acinaires se caractérise par :",
    options: [
      "Immunohistochimie : trypsine+, lipase+",
      "Architecture toujours kystique",
      "Touche préférentiellement la femme jeune",
      "Marqueurs neuroendocrines positifs constants",
      "Pas d’emboles vasculaires"
    ],
    correctAnswers: [0],
    explanation: "Le carcinome acinaire exprime les enzymes pancréatiques (trypsine, lipase). Tumeur rare, souvent volumineuse, architecture acineuse ou trabéculaire, avec emboles possibles.",
    clinicalPearl: "Carcinome acinaire = Expression enzymatique exocrine : Trypsine +, Lipase +, Bcl10 +."
  },
  {
    id: 'q-panc-10',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal diagnostic différentiel macroscopique du cystadénocarcinome mucineux ?",
    options: [
      "Tumeur pseudopapillaire solide",
      "Pancréatite chronique",
      "Cystadénome séreux (microkystique vs mucineux uni/multiloculaire à contenu gélatineux)",
      "Adénocarcinome canalaire",
      "Métastase kystique"
    ],
    correctAnswers: [2],
    explanation: "Le cystadénocarcinome mucineux contient un liquide mucoïde/gélatineux, uni/multiloculaire ; le séreux est microkystique à contenu citrin.",
    clinicalPearl: "Diagnostic macroscopique : Séreux = microkystes en éponge à liquide citrin clair ; Mucineux = macrokystes à liquide gélatineux mucoïde."
  },
  {
    id: 'q-panc-11',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La tumeur pseudopapillaire et solide (TPS) :",
    options: [
      "Survient typiquement chez l’homme âgé",
      "Est toujours maligne d’emblée",
      "Touche la femme jeune, potentiel malin dans 10%",
      "Exprime chromogranine A fortement",
      "Ne présente jamais de métastases"
    ],
    correctAnswers: [2],
    explanation: "TPS : rare, femme jeune, le plus souvent bénigne, mais 10% d’évolution maligne avec métastases. Immunohistochimie : vimentine+, synaptophysine+, chromogranine A négative.",
    clinicalPearl: "Tumeur de Frantz (TPS) : Femme jeune < 35 ans, évolution indolente mais potentiel malin dans 10% des cas."
  },
  {
    id: 'q-panc-12',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le pancréatoblastome est une tumeur :",
    options: [
      "Fréquente chez l’adulte de plus de 60 ans",
      "De l’enfant, exceptionnelle chez l’adulte",
      "Kystique pure",
      "D’origine endocrine",
      "Toujours localisée à la queue"
    ],
    correctAnswers: [1],
    explanation: "Tumeur pédiatrique, rarement diagnostiquée chez l’adulte, nodulaire encapsulée à différenciation acineuse et squamoïde.",
    clinicalPearl: "Pancréatoblastome = Tumeur maligne embryonnaire rare spécifique de l'enfant (corpuscules squamoïdes)."
  },
  {
    id: 'q-panc-13',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le variant histologique « carcinome à cellules indépendantes (bague à chaton) » est :",
    options: [
      "Une variante de l’adénocarcinome canalaire",
      "Une variante du cystadénocarcinome séreux",
      "Un sous-type de tumeur endocrine",
      "Une tumeur pseudopapillaire",
      "Un sarcome pancréatique"
    ],
    correctAnswers: [0],
    explanation: "Le carcinome à cellules indépendantes fait partie des variantes histologiques de l’adénocarcinome canalaire, de mauvais pronostic.",
    clinicalPearl: "Carcinome à cellules en bague à chaton = Variante histologique agressive de l'adénocarcinome canalaire."
  },
  {
    id: 'q-panc-14',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En microscopie, les engainements périnerveux sont particulièrement caractéristiques de :",
    options: [
      "Cystadénocarcinome séreux",
      "Tumeur pseudopapillaire",
      "Adénocarcinome canalaire",
      "Pancréatoblastome",
      "Cystadénocarcinome mucineux non infiltrant"
    ],
    correctAnswers: [2],
    explanation: "L’invasion périneurale est très fréquente dans l’adénocarcinome canalaire, expliquant les douleurs dorsales et la récidive locale.",
    clinicalPearl: "Engainements périnerveux quasi-constants dans l'adénocarcinome canalaire -> irradiation dorsale transfixiante."
  },
  {
    id: 'q-panc-15',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans la classification des PanIN, lésion avec architecture papillaire, perte de polarité, pseudo-stratification, mais rares mitoses correspond à :",
    options: [
      "PanIN-1",
      "PanIN-2 (dysplasie bas grade)",
      "PanIN-3",
      "TIPMP de bas grade",
      "Hyperplasie simple"
    ],
    correctAnswers: [1],
    explanation: "PanIN-2 : dysplasie de bas grade, perte de polarité, pseudo-stratification, mitoses rares. PanIN-3 a des atypies marquées et mitoses fréquentes.",
    clinicalPearl: "PanIN-1 = polarité conservée ; PanIN-2 = perte de polarité et mitoses rares ; PanIN-3 = mitoses fréquentes et atypies marquées."
  },
  {
    id: 'q-panc-16',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le cystadénocarcinome mucineux se développe souvent à partir de :",
    options: [
      "Cystadénome séreux",
      "Cystadénome mucineux puis borderline",
      "Tumeur endocrine",
      "PanIN de haut grade",
      "Métastase ovarienne"
    ],
    correctAnswers: [1],
    explanation: "Il dérive d’un cystadénome mucineux, puis borderline avant d’être invasif. La composante infiltrante est tubulée au sein d’un stroma fibreux.",
    clinicalPearl: "Filiation kystique mucineuse : Cystadénome mucineux -> Tumeur borderline (atypies) -> Cystadénocarcinome invasif."
  },
  {
    id: 'q-panc-17',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La tumeur la plus fréquente chez la femme jeune, bien limitée, avec des histiocytes spumeux dans l’axe des papilles est :",
    options: [
      "Adénocarcinome canalaire",
      "Tumeur pseudopapillaire et solide",
      "Pancréatoblastome",
      "Carcinome acinaire",
      "Cystadénocarcinome séreux"
    ],
    correctAnswers: [1],
    explanation: "Description typique de la tumeur pseudopapillaire : architecture pseudo-papillaire, histiocytes spumeux, pseudocapsule.",
    clinicalPearl: "Histiocytes spumeux dans l'axe des papilles + jeune femme = Tumeur pseudopapillaire et solide (TPS)."
  },
  {
    id: 'q-panc-18',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Parmi les marqueurs immuno-histochimiques, Bcl10+, AFP+ évoquent fortement :",
    options: [
      "Adénocarcinome canalaire",
      "Carcinome à cellules acinaires",
      "Tumeur neuroendocrine",
      "TIPMP",
      "Cystadénocarcinome séreux"
    ],
    correctAnswers: [1],
    explanation: "Le carcinome acinaire exprime Bcl10+ et parfois AFP+, ainsi que trypsine. Les autres tumeurs ne présentent pas ce profil.",
    clinicalPearl: "Bcl10 + Trypsine + Lipase = Spécifique de la différenciation à cellules acinaires."
  },
  {
    id: 'q-panc-19',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le variant « carcinome médullaire » du pancréas se caractérise par :",
    options: [
      "Architecture cribriforme",
      "Croissance syncytiale, infiltration lymphocytaire",
      "Cellules en bague à chaton",
      "Production abondante de mucus extracellulaire",
      "Stroma desmoplastique marqué"
    ],
    correctAnswers: [1],
    explanation: "Le carcinome médullaire est une variante rare, croissance syncytiale, limites médullaires, infiltration lymphocytaire, meilleur pronostic relatif.",
    clinicalPearl: "Carcinome médullaire pancréatique : nappes syncytiales, infiltration lymphoïde dense intra-tumorale (souvent statut MSI)."
  },
  {
    id: 'q-panc-20',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel élément histologique est en faveur d’un cystadénocarcinome séreux malin ?",
    options: [
      "Microkystes multiples",
      "Cytoplasme clair",
      "Caractère invasif avec métastases à distance",
      "Architecture papillaire",
      "Contenu mucoïde"
    ],
    correctAnswers: [2],
    explanation: "Le diagnostic de malignité pour la tumeur séreuse repose sur le caractère invasif (métastases), car la plupart sont bénignes. L’aspect microkystique est typique mais non malin.",
    clinicalPearl: "Cystadénocarcinome séreux = Extrêmement rare ; le diagnostic de malignité requiert la preuve de l'invasion ou de métastases."
  },
  {
    id: 'q-panc-21',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le carcinome indifférencié à cellules géantes de type ostéoclastique :",
    options: [
      "Est une variante de l’adénocarcinome canalaire",
      "Est une tumeur endocrine",
      "Est une tumeur bénigne",
      "N’apparaît que chez l’enfant",
      "Produit de la trypsine"
    ],
    correctAnswers: [0],
    explanation: "Variante rare de l’adénocarcinome canalaire, avec cellules géantes de type ostéoclastique, agressive.",
    clinicalPearl: "Tumeur à cellules géantes ostéoclastiques = Variante rare très agressive de l'adénocarcinome canalaire."
  },
  {
    id: 'q-panc-22',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La protéine dont la relocalisation nucléaire et la perte d'expression membranaire sont caractéristiques de la tumeur pseudopapillaire est :",
    options: [
      "E-cadhérine",
      "Bêta-caténine (nucléaire et cytoplasmique, perte membranaire)",
      "CK7",
      "Chromogranine",
      "MUC1"
    ],
    correctAnswers: [1],
    explanation: "Dans la tumeur pseudopapillaire, on observe une accumulation nucléaire/cytoplasmique de β-caténine par mutation CTNNB1, perte membranaire.",
    clinicalPearl: "Mutation CTNNB1 -> Translocation nucléaire anormale de la bêta-caténine en immunohistochimie dans la TPS."
  },
  {
    id: 'q-panc-23',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le pronostic de l’adénocarcinome canalaire pancréatique est :",
    options: [
      "Excellent si résection R0",
      "Très mauvais globalement, même après chirurgie",
      "Comparable au cancer colique",
      "Bénin dans 80%",
      "Souvent guéri par chimiothérapie seule"
    ],
    correctAnswers: [1],
    explanation: "Le cancer pancréatique a un pronostic très sombre (survie à 5 ans < 10%). La majorité des cas est diagnostiquée tardivement.",
    clinicalPearl: "Pronostic global très sombre : survie à 5 ans inférieure à 8-10% tous stades confondus."
  },
  {
    id: 'q-panc-24',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel marqueur est positif dans les tumeurs endocrines mais négatif dans la tumeur pseudopapillaire ?",
    options: [
      "Synaptophysine",
      "Chromogranine A",
      "CD56",
      "Vimentine",
      "CK7"
    ],
    correctAnswers: [1],
    explanation: "La tumeur pseudopapillaire exprime synaptophysine, CD56, mais chromogranine A est négative. Utile pour différencier des tumeurs neuroendocrines bien différenciées.",
    clinicalPearl: "Chromogranine A négative dans la tumeur pseudopapillaire (versus TNE où elle est fortement positive)."
  },
  {
    id: 'q-panc-25',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "L’aspect de « stroma fibreux hyalin avec foyers de nécrobiose et cellules géantes » oriente vers :",
    options: [
      "Carcinome anaplasique",
      "Tumeur pseudopapillaire avec critères de malignité",
      "Pancréatite auto-immune",
      "Carcinome acinaire",
      "Cystadénocarcinome séreux"
    ],
    correctAnswers: [1],
    explanation: "Dans la tumeur pseudopapillaire, les critères de malignité incluent nids de cellules en nécrobiose, cellules géantes multinucléées, mitoses, invasions.",
    clinicalPearl: "Critères d'agressivité dans la TPS : Foyers de nécrobiose, pléomorphisme nucléaire, invasion capsulaire et périnerveuse."
  },

  // -------------------------------------------------------------
  // 5 Cas Cliniques Pratiques (7 questions)
  // -------------------------------------------------------------
  // Cas 1
  {
    id: 'q-cas-panc-1-1',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Ictère fébrile chez un homme de 62 ans : Mr. B, 62 ans, tabagique, se présente avec un ictère franc, une perte de poids de 8 kg en 3 mois, et des douleurs épigastriques irradiant dans le dos. L’échographie montre une voie biliaire dilatée et une masse de la tête pancréatique. Scanner: lésion hypo-dense tête du pancréas, infiltrant la graisse péri-pancréatique.\n\nQuelle est la tumeur la plus probable ?",
    options: [
      "Cystadénocarcinome mucineux",
      "Tumeur pseudopapillaire",
      "Adénocarcinome canalaire",
      "Carcinome acinaire",
      "Pancréatoblastome"
    ],
    correctAnswers: [2],
    explanation: "Homme âgé, localisation céphalique, invasion locale, douleur dorsale → adénocarcinome canalaire typique (90% des tumeurs).",
    clinicalPearl: "Ictère rétentionnel + douleur transfixiante + masse céphalique = Adénocarcinome canalaire céphalique."
  },
  {
    id: 'q-cas-panc-1-2',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 – Suite : Quel grade histologique correspond à une différenciation glandulaire modérée, perte de polarisation, 7 mitoses/10 champs chez ce patient ?",
    options: ["G1", "G2", "G3", "G4", "PanIN-2"],
    correctAnswers: [1],
    explanation: "G2 : moyennement différencié, 5-10 mitoses, perte de polarisation. G1 <5 mitoses, G3 >10 mitoses.",
    clinicalPearl: "G2 = 5 à 10 mitoses par 10 champs à fort grandissement."
  },

  // Cas 2
  {
    id: 'q-cas-panc-2-1',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Masse kystique chez une femme de 45 ans : Mme K, 45 ans, douleurs abdominales épisodiques. Imagerie: lésion kystique multiloculaire du corps pancréatique avec cloisons épaisses, contenu gélatineux à la chirurgie. Résection: cavités bordées de cellules cylindriques sécrétantes avec atypies et foyer d’infiltration du stroma fibreux.\n\nQuel diagnostic retenez-vous ?",
    options: [
      "Cystadénome séreux",
      "Cystadénocarcinome mucineux invasif",
      "Tumeur pseudopapillaire",
      "TIPMP",
      "Métastase kystique"
    ],
    correctAnswers: [1],
    explanation: "Description typique: contenu mucoïde, cellules cylindriques sécrétantes, infiltration stromale → cystadénocarcinome mucineux.",
    clinicalPearl: "Contenu gélatineux + cellules mucosécrétantes cylindriques + infiltration du stroma = Cystadénocarcinome mucineux."
  },
  {
    id: 'q-cas-panc-2-2',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : La composante infiltrante de cette tumeur est de type :",
    options: [
      "Architecture solide",
      "Tubulée siégeant dans un stroma fibreux",
      "Micropapillaire",
      "Cribriforme",
      "Sarcomatoïde"
    ],
    correctAnswers: [1],
    explanation: "Cours : la composante infiltrante est d’architecture tubulée au sein d’un stroma fibreux.",
    clinicalPearl: "Composante invasive du cystadénocarcinome mucineux : structures tubulées infiltrant un stroma desmoplastique."
  },

  // Cas 3
  {
    id: 'q-cas-panc-3-1',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Femme de 22 ans, découverte fortuite masse abdominale : Melle R, 22 ans, asymptomatique. TDM: masse pancréatique de 9 cm, bien encapsulée, mixte solide et kystique. Résection: tumeur brunâtre, à la microscopie: cellules rondes, architecture pseudopapillaire, histiocytes spumeux, rares mitoses.\n\nLa tumeur la plus probable est :",
    options: [
      "Pancréatoblastome",
      "Carcinome acinaire",
      "Tumeur pseudopapillaire et solide",
      "Adénocarcinome canalaire",
      "Lymphome"
    ],
    correctAnswers: [2],
    explanation: "Femme jeune, tumeur bien limitée, pseudopapilles, histiocytes spumeux = tumeur pseudopapillaire.",
    clinicalPearl: "Femme jeune de 22 ans + masse bien limitée mixte solide-kystique + histiocytes spumeux = Tumeur pseudopapillaire et solide."
  },
  {
    id: 'q-cas-panc-3-2',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 31,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : Quel marqueur immunohistochimique est négatif, aidant à exclure une tumeur endocrine chez Melle R ?",
    options: [
      "Vimentine",
      "Chromogranine A",
      "Synaptophysine",
      "CD56",
      "β-caténine"
    ],
    correctAnswers: [1],
    explanation: "La tumeur pseudopapillaire exprime synaptophysine, CD56, mais chromogranine A négative.",
    clinicalPearl: "Chromogranine A négative permet d'éliminer une tumeur neuroendocrine bien différenciée."
  },

  // Cas 4
  {
    id: 'q-cas-panc-4-1',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 32,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Homme de 55 ans, masse pancréatique volumineuse : Mr. L, 55 ans, perte d’appétit, masse palpable épigastrique. Biopsie: prolifération à architecture acineuse, cellules à cytoplasme granuleux éosinophile. Immunohistochimie: trypsine+, lipase+, Bcl10+.\n\nQuel diagnostic est confirmé ?",
    options: [
      "Adénocarcinome canalaire",
      "Carcinome à cellules acinaires",
      "TIPMP avec invasion",
      "Carcinome adénosquameux",
      "Tumeur neuroendocrine"
    ],
    correctAnswers: [1],
    explanation: "Architecture acineuse et marqueurs enzymatiques positifs (trypsine, lipase) = carcinome acinaire, rare (1-2%).",
    clinicalPearl: "Trypsine + Lipase + Bcl10 = Diagnostic formel de carcinome à cellules acinaires."
  },

  // Cas 5
  {
    id: 'q-cas-panc-5-1',
    courseId: 'crs-gastro-tumeurs-pancreas',
    questionNumber: 33,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Enfant de 10 ans avec masse abdominale : Enfant M, 10 ans, douleurs abdominales et vomissements. IRM: masse bien limitée queue du pancréas, 5 cm, remaniements kystiques et nécrotiques. Histologie: cellules cuboides et fusiformes, formations squamoïdes, architecture tubulaire et compacte.\n\nQuelle tumeur est typique de l’enfant ?",
    options: [
      "Tumeur pseudopapillaire",
      "Pancréatoblastome",
      "Cystadénocarcinome mucineux",
      "Adénocarcinome canalaire",
      "Insulinome"
    ],
    correctAnswers: [1],
    explanation: "Le pancréatoblastome est la tumeur maligne pancréatique spécifique de l’enfant (rarement adulte).",
    clinicalPearl: "Enfant d'âge pédiatrique + formations squamoïdes caractéristiques = Pancréatoblastome."
  }
];

export const TUMEURS_PANCREAS_RESOURCES: CourseResource[] = [
  {
    id: 'res-panc-mindmap',
    courseId: 'crs-gastro-tumeurs-pancreas',
    type: 'Resume',
    title: "Carte Mentale & Algorithme Diagnostique : Tumeurs du Pancréas (Dr MOUSSAOUI)",
    contentMarkdown: `## 🧠 Carte Mentale : Tumeurs du Pancréas
**D'après le cours officiel du Dr MOUSSAOUI - Faculté de Médecine**

### 1. Classification & Fréquence
- **Tumeurs exocrines (> 90%)** : Adénocarcinome canalaire invasif (tête 60-70%).
- **Lésions précurseurs canalaires (PanIN)** : PanIN-1 (bas grade, polarité conservée) -> PanIN-2 (dysplasie modérée) -> PanIN-3 (dysplasie haut grade, aspect cribriforme).
- **Tumeurs kystiques** :
  - *Séreuses* (bénignes dans 99%) : dérivées des cellules intercalaires, microkystes en éponge à liquide citrin clair.
  - *Mucineuses* (potentiel malin) : macrokystes à liquide gélatineux mucoïde, cellules cylindriques sécrétantes, stroma ovarien-like.
- **Tumeur pseudopapillaire et solide (TPS)** : Femme jeune (< 35 ans), histiocytes spumeux, mutation β-caténine, potentiel malin dans 10%.
- **Carcinome à cellules acinaires (1-2%)** : Trypsine+, Lipase+, Bcl10+, pronostic intermédiaire.
- **Pancréatoblastome** : Spécifique de l'enfant, corpuscules squamoïdes caractéristiques.

### 2. Arbre Décisionnel Devant une Masse Pancréatique
\`\`\`
Masse Pancréatique à l'Imagerie
          │
          ├──► TUMEUR SOLIDE
          │     ├── Sujet âgé + ictère rétentionnel + stroma desmoplastique :
          │     │    → Adénocarcinome canalaire (90%) [CK7+ / CK20- / ACE+]
          │     ├── Cellules à grains éosinophiles + enzymes :
          │     │    → Carcinome acinaire [Trypsine+ / Lipase+ / Bcl10+]
          │     └── Femme jeune + bien encapsulée :
          │          → Tumeur pseudopapillaire (TPS) [β-caténine nucléaire+, Chromo A-]
          │
          ├──► TUMEUR KYSTIQUE
          │     ├── Microkystes multiples à contenu citrin clair :
          │     │    → Cystadénome séreux (bénin)
          │     ├── Macrokystes uniloculaires/multiloculaires à liquide mucoïde :
          │     │    → Tumeur kystique mucineuse / Cystadénocarcinome mucineux
          │     └── Communication avec le canal de Wirsung + mucosécrétion :
          │          → TIPMP (Tumeur intracanalaire papillaire et mucineuse)
          │
          └──► ENFANT (< 15 ans)
                → Pancréatoblastome (différenciation acineuse + nids squamoïdes)
\`\`\``,
    author: 'Dr MOUSSAOUI'
  },
  {
    id: 'res-panc-mnemo',
    courseId: 'crs-gastro-tumeurs-pancreas',
    type: 'Astuce',
    title: "Mnémoniques & Règles d'Or : Tumeurs du Pancréas",
    contentMarkdown: `### 📚 Mnémoniques & Perles d'Examen (Dr MOUSSAOUI)

1. **Règle des PanIN (1-2-3)** :
   - PanIN-1 : **P**olaire (polarité conservée, hyperplasie mucineuse simple)
   - PanIN-2 : **P**erdu (perte de polarité, pseudo-stratification, rares mitoses)
   - PanIN-3 : **P**ourri / malin (cribriforme, mitoses anormales, carcinome in situ)

2. **Règle du 7/20 en Immunohistochimie (Adénocarcinome canalaire)** :
   - **CK7 +** (positif)
   - **CK20 -** (négatif)
   - **ACE +** (antigène carcino-embryonnaire positif)

3. **Tumeur Pseudopapillaire et Solide (TPS - Frantz)** :
   - « **F**emme jeune, **T**umeur bien limitée, **H**istiocytes spumeux, **C**hromogranine négative, **B**êta-caténine nucléaire »

4. **Grades de Différenciation de l'Adénocarcinome Canalaire** :
   - G1 : < 5 mitoses / 10 champs, bien différencié, mucus abondant
   - G2 : 5 à 10 mitoses / 10 champs, moyennement différencié
   - G3 : > 10 mitoses / 10 champs, peu différencié, mucus rare

5. **Signature d'Agressivité** :
   - Engainements périnerveux + stroma fibreux desmoplastique = Marqueur de l'adénocarcinome canalaire expliquant les douleurs transfixiantes précoces.`,
    author: 'Dr MOUSSAOUI'
  }
];
