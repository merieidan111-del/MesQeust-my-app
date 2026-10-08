import { Question, CourseResource } from '../../types/medical';

export const CANCER_ESTOMAC_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs progressifs - Cancer de l'Estomac
  // -------------------------------------------------------------
  {
    id: 'q-estomac-01',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le rang du cancer gastrique en termes d’incidence mondiale chez l’homme ?",
    options: ["1er", "2ème", "3ème", "4ème", "5ème"],
    correctAnswers: [3],
    explanation: "Le cancer gastrique est au 4ème rang mondial chez l’homme (après poumon, prostate, côlon). En Algérie, 2ème cancer digestif.",
    clinicalPearl: "4ème rang mondial chez l'homme, 2ème cancer digestif en Algérie."
  },
  {
    id: 'q-estomac-02',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les facteurs de risque suivants, lequel est classé comme la principale cause étiologique de l’adénocarcinome gastrique ?",
    options: [
      "Tabagisme actif",
      "Régime riche en graisses",
      "Infection à Helicobacter pylori",
      "Maladie de Biermer",
      "Antécédent de gastrectomie"
    ],
    correctAnswers: [2],
    explanation: "HP est reconnu facteur étiologique par l’OMS (1994) ; 60-90% des cancers gastriques liés à HP via cascade inflammatoire chronique.",
    clinicalPearl: "H. pylori est classé cancérogène de classe 1 par l'OMS (60-90% des cas)."
  },
  {
    id: 'q-estomac-03',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans la classification TNM 8e édition, que signifie T1b sm2 ?",
    options: [
      "Tumeur limitée à la muqueuse",
      "Invasion de la sous-muqueuse >500 µm",
      "Invasion de la musculeuse",
      "Invasion de la sous-séreuse",
      "Tumeur superficielle sans risque métastatique"
    ],
    correctAnswers: [1],
    explanation: "T1b sm2 = invasion de la sous-muqueuse >500 µm. Le pronostic est plus péjoratif et contre-indique la résection endoscopique curative.",
    clinicalPearl: "T1b sm1 = <500 µm (curable par DSM) ; T1b sm2 = >500 µm (risque ganglionnaire élevé, chirurgie requise)."
  },
  {
    id: 'q-estomac-04',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le nombre minimal de biopsies recommandé lors d’une endoscopie pour lésion gastrique suspecte ?",
    options: ["2 biopsies", "4 biopsies", "6 biopsies", "8 biopsies", "10 biopsies"],
    correctAnswers: [3],
    explanation: "Le cours insiste sur biopsies multiples (minimum 8) pour optimiser le diagnostic histologique, préciser HER2 et rechercher Hp.",
    clinicalPearl: "Au moins 8 biopsies obligatoires sur les berges et le fond de toute lésion gastrique suspecte."
  },
  {
    id: 'q-estomac-05',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de l’anse afférente post-gastrectomie se manifeste typiquement par :",
    options: [
      "Diarrhée précoce et flush",
      "Hypoglycémie post-prandiale",
      "Douleur de l’hypochondre droit soulagée par vomissements",
      "Méléna et anémie ferriprive",
      "Satiété précoce constante"
    ],
    correctAnswers: [2],
    explanation: "Stase dans l’anse afférente → douleur hypochondre droit / épigastrique soulagée par vomissements bilieux. (cf tableau cours)",
    clinicalPearl: "Syndrome de l'anse afférente : distension douloureuse HD/épigastre soulagée par vomissements bilieux sans aliments."
  },
  {
    id: 'q-estomac-06',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel agent de chimiothérapie péri-opératoire constitue le standard actuel pour les cancers gastriques résécables localement avancés ?",
    options: [
      "ECF (épirubicine, cisplatine, 5-FU)",
      "FOLFOX",
      "FLOT (docétaxel, oxaliplatine, leucovorine, 5-FU)",
      "CapeOx",
      "FOLFIRI"
    ],
    correctAnswers: [2],
    explanation: "FLOT avec 4 cures pré et postopératoires est le gold standard, supérieur à ECF en survie.",
    clinicalPearl: "FLOT x 4 pré-op + 4 post-op = Standard international et algérien des formes localement avancées résécables."
  },
  {
    id: 'q-estomac-07',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le cancer gastrique héréditaire diffus est lié à une mutation germinale du gène :",
    options: ["TP53", "APC", "CDH1 (E-cadhérine)", "MLH1", "KRAS"],
    correctAnswers: [2],
    explanation: "Mutation CDH1 autosomique dominante → perte d’E-cadhérine, cellules en bague à chaton. La famille Bonaparte est l’exemple classique.",
    clinicalPearl: "CDH1 = E-cadhérine -> Formes diffuses héréditaires à cellules en bague à chaton + cancer lobulaire du sein."
  },
  {
    id: 'q-estomac-08',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la limite profonde maximale d’invasion sous-muqueuse autorisée pour une résection endoscopique curative (DSM) ?",
    options: ["200 µm", "500 µm", "1000 µm", "Aucune invasion sous-muqueuse", "Musculeuse respectée"],
    correctAnswers: [1],
    explanation: "Sm1 <500 µm permet une résection curative, au-delà risque métastatique ganglionnaire élevé.",
    clinicalPearl: "Critère DSM : Infiltration sous-muqueuse sm1 < 500 µm sans emboles vasculaires."
  },
  {
    id: 'q-estomac-09',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l’écho-endoscopie dans le cancer gastrique, quelle est son indication majeure ?",
    options: [
      "Bilan de métastases pulmonaires",
      "Évaluation de l’extension en profondeur (T) et ganglionnaire locale",
      "Diagnostic de carcinose péritonéale",
      "Recherche d’une mutation HER2",
      "Détection des métastases osseuses"
    ],
    correctAnswers: [1],
    explanation: "L’écho-endoscopie est supérieure au scanner pour évaluer l’infiltration pariétale (T) et les ganglions péri-gastriques surtout pour tumeurs superficielles ou limites.",
    clinicalPearl: "Écho-endoscopie = Gold standard pour le staging T précoce (muqueuse vs sous-muqueuse) et N locorégional."
  },
  {
    id: 'q-estomac-10',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi ces propositions, quelle complication précoce est redoutée après gastrectomie pour cancer ?",
    options: [
      "Dumping syndrome",
      "Désunion anastomotique → péritonite",
      "Syndrome de l’anse afférente",
      "Carence en vitamine B12",
      "Hypoglycémie tardive"
    ],
    correctAnswers: [1],
    explanation: "La fistule anastomotique est une urgence chirurgicale précoce (péritonite). Dumping et carences sont tardifs.",
    clinicalPearl: "Fistule / désunion anastomotique = Complication chirurgicale précoce majeure et redoutée."
  },
  {
    id: 'q-estomac-11',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La survie globale à 5 ans du cancer gastrique tous stades confondus est d’environ :",
    options: ["5%", "15%", "30%", "45%", "60%"],
    correctAnswers: [1],
    explanation: "Malgré les progrès, pronostic sombre : survie à 5 ans = 15% en moyenne.",
    clinicalPearl: "Survie globale à 5 ans tous stades = environ 15%."
  },
  {
    id: 'q-estomac-12',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le rôle de la chromoendoscopie (indigo carmin / NBI) ?",
    options: [
      "Diagnostiquer HP",
      "Améliorer la détection des lésions précancéreuses (métaplasie, dysplasie)",
      "Éradiquer H. pylori",
      "Réaliser des biopsies profondes",
      "Classer le type Bormann"
    ],
    correctAnswers: [1],
    explanation: "La chromoendoscopie met en évidence les anomalies de surface, atrophie/métaplasie intestinale améliorant le dépistage.",
    clinicalPearl: "Chromoendoscopie (virtuelle ou colorante) : Délimitation précise de la dysplasie et métaplasie intestinale."
  },
  {
    id: 'q-estomac-13',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Un patient de 70 ans a une gastrectomie totale avec splénectomie. Quelle vaccination est OBLIGATOIRE à vie ?",
    options: [
      "Vaccin anti-grippal annuel",
      "Vaccin antipneumococcique + méningocoque + Haemophilus",
      "Vaccin hépatite B",
      "Vaccin BCG",
      "Vaccin typhoïdique"
    ],
    correctAnswers: [1],
    explanation: "Asplénie fonctionnelle → risque accru d’infections à germes encapsulés : vaccin antipneumocoque, méningocoque et Hib.",
    clinicalPearl: "Post-splénectomie : Prévention du sepsis fulminant par vaccins antipneumococcique, antiméningococcique et anti-Haemophilus."
  },
  {
    id: 'q-estomac-14',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle caractéristique histologique correspond au type diffus de Lauren ?",
    options: [
      "Glandes bien formées",
      "Cellules en bague à chaton, infiltration diffuse",
      "Prédominance de signet-ring cells sans fibrose",
      "Architecture trabéculaire",
      "Métaplasie intestinale extensive"
    ],
    correctAnswers: [1],
    explanation: "Le type diffus de Lauren est constitué de cellules indépendantes en bague à chaton, sans formation glandulaire, pronostic plus sombre.",
    clinicalPearl: "Lauren diffus = Perte de cohésion cellulaire, cellules en bague à chaton (mucus intracellulaire refoulant le noyau)."
  },
  {
    id: 'q-estomac-15',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le traitement de référence des cancers superficiels de l’estomac (T1a) sans signe d’envahissement ganglionnaire ?",
    options: [
      "Gastrectomie totale d’emblée",
      "Chimiothérapie néoadjuvante",
      "Dissection sous-muqueuse endoscopique (DSM)",
      "Radiothérapie exclusive",
      "Surveillance simple"
    ],
    correctAnswers: [2],
    explanation: "DSM permet un traitement curatif, peu invasif, si critères (taille, sm1<500µm, absence d'emboles).",
    clinicalPearl: "T1a N0 = Dissection sous-muqueuse (DSM) curative d'épargne d'organe."
  },
  {
    id: 'q-estomac-16',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À propos de l’infection à Helicobacter pylori, quelle affirmation est correcte ?",
    options: [
      "L’éradication a un effet identique même après apparition d’une métaplasie intestinale",
      "HP est une bactérie à Gram positif",
      "Plus de 90% des cancers gastriques sont attribuables à HP",
      "Le risque de cancer diminue significativement après éradication même à un stade précoce, mais moindre si lésions irréversibles",
      "HP n’est pas associé aux lymphomes gastriques"
    ],
    correctAnswers: [3],
    explanation: "L’éradication réduit l’incidence mais si atrophie/métaplasie (point de non retour), le bénéfice est moindre.",
    clinicalPearl: "Cascade de Correa : Gastrite superficielle -> Atrophie -> Métaplasie (point de non-retour) -> Dysplasie -> Cancer."
  },
  {
    id: 'q-estomac-17',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le curage ganglionnaire D2 dans la chirurgie gastrique consiste à :",
    options: [
      "Enlever les ganglions périgastriques (N1) seulement",
      "Enlever les ganglions N1 et ceux le long du tronc cœliaque, artère hépatique et splénique",
      "Réséquer les ganglions para-aortiques systématiquement",
      "Exérèse des seuls ganglions sentinelles",
      "Curage limité aux ganglions de la petite courbure"
    ],
    correctAnswers: [1],
    explanation: "D2 inclut les stations 1-12 (périgastriques + le long des axes artériels : hépatique commune, splénique, tronc cœliaque).",
    clinicalPearl: "Curage D2 = N1 périgastriques (1-6) + N2 pédiculaires le long du tronc cœliaque, coronaire stomachique, hépatique et splénique (7-12)."
  },
  {
    id: 'q-estomac-18',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen doit être systématique devant toute tumeur gastrique avant chimiothérapie à base de fluoropyrimidines ?",
    options: [
      "Échoendoscopie",
      "Scanner thoracique",
      "Recherche déficit en dihydropyrimidine déshydrogénase (DPD)",
      "Dosage ACE",
      "TEP-scan"
    ],
    correctAnswers: [2],
    explanation: "Le déficit en DPD expose à une toxicité sévère voire mortelle sous 5-FU. Le bilan pré-thérapeutique le recherche.",
    clinicalPearl: "Dosage de l'uracilémie / recherche déficit en DPD obligatoire avant toute administration de 5-FU ou capécitabine."
  },
  {
    id: 'q-estomac-19',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel sous-type de cancer gastrique est en augmentation corrélé au RGO et au surpoids ?",
    options: [
      "Cancer de l’antre",
      "Cancer du cardia (jonction oeso-gastrique)",
      "Cancer du corps",
      "Lymphome MALT",
      "Tumeur stromale"
    ],
    correctAnswers: [1],
    explanation: "L’incidence du cancer du cardia est croissante en lien avec obésité et reflux gastro-œsophagien.",
    clinicalPearl: "Cancer du cardia / JOG : Incidence en hausse en lien avec surpoids, obésité et reflux chronique."
  },
  {
    id: 'q-estomac-20',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Au stade palliatif pour tumeur gastrique sténosante du cardia, la technique de choix est :",
    options: [
      "Chirurgie de dérivation",
      "Pose de prothèse métallique expansive par voie endoscopique",
      "Gastrectomie totale",
      "Chimiothérapie seule",
      "Radiothérapie externe"
    ],
    correctAnswers: [1],
    explanation: "La prothèse œsophagienne ou cardiale permet une reprise rapide de l’alimentation, meilleure qualité de vie.",
    clinicalPearl: "Sténose cardiale palliative = Prothèse métallique auto-expansive (SEMS) pour levée rapide de la dysphagie."
  },
  {
    id: 'q-estomac-21',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de dumping précoce est dû à :",
    options: [
      "Vidange gastrique retardée",
      "Passage brutal d’aliments hyperosmolaires dans le grêle → libération de sérotonine",
      "Hypoglycémie réactionnelle",
      "Pullulation bactérienne de l’anse afférente",
      "Carence en B12"
    ],
    correctAnswers: [1],
    explanation: "Après gastrectomie, l’hyperosmolarité du bol alimentaire dans le grêle entraine un effet vasomoteur, flush, tachycardie.",
    clinicalPearl: "Dumping syndrome précoce (15-30 min post-prandial) : afflux hyperosmolaire dans le jéjunum -> appel d'eau et libération de médiateurs vasomoteurs."
  },
  {
    id: 'q-estomac-22',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la lésion pré-cancéreuse gastrique irréversible considérée comme ‘point de non retour’ ?",
    options: [
      "Gastrite chronique non atrophique",
      "Métaplasie intestinale étendue/atrophie sévère",
      "Œsophage de Barrett",
      "Polype hyperplasique",
      "Ulcère gastrique bénin"
    ],
    correctAnswers: [1],
    explanation: "Atrophie sévère et métaplasie intestinale ne régressent pas après éradication d’HP; risque persistant.",
    clinicalPearl: "Métaplasie intestinale et atrophie sévère = Point de non-retour imposant une surveillance endoscopique régulière."
  },
  {
    id: 'q-estomac-23',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le traitement de référence des adénocarcinomes localement avancés (T2-T4a) résécables est :",
    options: [
      "Gastrectomie seule",
      "Radiothérapie exclusive",
      "Chimiothérapie péri-opératoire FLOT puis gastrectomie D2",
      "Chimiothérapie adjuvante après chirurgie seule",
      "Traitement endoscopique"
    ],
    correctAnswers: [2],
    explanation: "FLOT périopératoire améliore la survie globale vs chirurgie seule ou chimiothérapie adjuvante.",
    clinicalPearl: "T2-T4a résécable = Chimiothérapie périopératoire FLOT (4 pré + 4 post) + Chirurgie D2."
  },
  {
    id: 'q-estomac-24',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel est le facteur de risque spécifique du cancer gastrique de type adénocarcinome chez les sujets jeunes avec antécédents familiaux de cancer du sein et de cancer gastrique ?",
    options: [
      "Syndrome de Li-Fraumeni",
      "Mutation CDH1 (cancer gastrique diffus héréditaire)",
      "Polypose adénomateuse familiale",
      "MUTYH",
      "Syndrome de Cowden"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome CDH1 associe risque élevé de cancer gastrique diffus et cancer du sein lobulaire.",
    clinicalPearl: "Syndrome HDGC (CDH1) : Association cancer gastrique diffus précoce + cancer du sein lobulaire."
  },
  {
    id: 'q-estomac-25',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le ganglion de Troisier (sus-claviculaire gauche) lors d’un cancer gastrique traduit :",
    options: [
      "Métastase hépatique",
      "Carcinose péritonéale",
      "Métastase ganglionnaire à distance (stade IV)",
      "Extension locale",
      "Atteinte splénique"
    ],
    correctAnswers: [2],
    explanation: "Le ganglion de Troisier est une métastase lymphatique à distance (M1), signe de dissémination systémique.",
    clinicalPearl: "Ganglion de Troisier = Adénopathie sus-claviculaire gauche traduisant une métastase lymphatique M1 (stade IV)."
  },

  // -------------------------------------------------------------
  // 5 Cas Cliniques Pratiques (15 questions)
  // -------------------------------------------------------------
  // Cas 1
  {
    id: 'q-cas-est-1-1',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Adénocarcinome antral et HP : Mr H., 59 ans, agriculteur, région de Blida, tabagisme actif, dyspepsie chronique. Perte de poids 8kg en 3 mois, épigastralgie rebelle. Endoscopie : ulcère végétant de l’antre, biopsies : adénocarcinome tubuleux. Antécédent de gastrite à H. pylori non éradiqué.\n\nQuel pourcentage de cancers gastriques est attribué à H. pylori ?",
    options: ["10-20%", "30-40%", "60-90%", "<5%", "100%"],
    correctAnswers: [2],
    explanation: "Selon le cours, 60-90% des cancers gastriques sont liés à HP via la cascade de Correa.",
    clinicalPearl: "60-90% des adénocarcinomes gastriques sont attribués à l'infection chronique par Helicobacter pylori."
  },
  {
    id: 'q-cas-est-1-2',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Quel bilan d’extension est prioritaire avant décision thérapeutique chez Mr H. ?",
    options: [
      "PET-scan",
      "Scanner TAP injecté avec eau",
      "IRM hépatique",
      "Échographie abdominale seule",
      "Marqueurs CA 19-9"
    ],
    correctAnswers: [1],
    explanation: "Le scanner TAP injecté avec réplétion hydrique est l’examen de référence pour la résécabilité.",
    clinicalPearl: "Scanner TAP avec réplétion gastrique à l'eau = Examen de référence du bilan d'extension et de résécabilité."
  },
  {
    id: 'q-cas-est-1-3',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 – Suite : Si la tumeur de Mr H. est classée T3N1M0 au scanner, quel traitement est recommandé ?",
    options: [
      "Chirurgie immédiate",
      "FLOT péri-opératoire puis gastrectomie D2",
      "Radiothérapie exclusive",
      "Résection endoscopique",
      "Chimiothérapie palliative"
    ],
    correctAnswers: [1],
    explanation: "Les formes localement avancées relèvent de la chimiothérapie péri-opératoire (FLOT) puis gastrectomie D2.",
    clinicalPearl: "T3N1M0 = Forme localement avancée résécable : FLOT péri-opératoire (4 cures) -> Chirurgie D2 -> FLOT (4 cures)."
  },

  // Cas 2
  {
    id: 'q-cas-est-2-1',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Cancer du cardia et dysphagie : Mme K., 72 ans, obésité, RGO sévère. Dysphagie aux solides, amaigrissement. Gastroscopie : tumeur du cardia infiltrant l’œsophage distal. Biopsies : adénocarcinome. Pas de métastase sur TDM.\n\nLe cancer du cardia est en augmentation principalement lié à :",
    options: [
      "Infection à HP",
      "RGO, surpoids et obésité",
      "Maladie de Biermer",
      "Mutation CDH1",
      "Régime riche en fibres"
    ],
    correctAnswers: [1],
    explanation: "L’incidence du cardia augmente avec l’obésité et le reflux gastro-œsophagien (cours).",
    clinicalPearl: "Le cancer du cardia est en nette progression en raison du RGO chronique et du surpoids/obésité."
  },
  {
    id: 'q-cas-est-2-2',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 – Suite : Quelle est la marge de sécurité macroscopique recommandée lors de la gastrectomie pour cancer ?",
    options: ["1 cm", "3 cm", "5 cm", "10 cm", "La totalité de l’estomac"],
    correctAnswers: [2],
    explanation: "Le document mentionne une marge de 5 cm nécessaire pour une exérèse complète.",
    clinicalPearl: "Marge de sécurité chirurgicale carcinologique requise = au moins 5 cm en tissu sain."
  },
  {
    id: 'q-cas-est-2-3',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 31,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : La technique chirurgicale standard pour cancer du cardia est :",
    options: [
      "Gastrectomie des 4/5",
      "Gastrectomie totale avec anastomose œso-jéjunale en Y",
      "Gastrojéjunostomie",
      "Antrectomie",
      "Résection locale"
    ],
    correctAnswers: [1],
    explanation: "Gastrectomie totale avec montage en Y pour les cancers du cardia/corps.",
    clinicalPearl: "Tumeur du cardia ou du tiers supérieur : Gastrectomie totale avec anastomose œso-jéjunale sur anse en Y de Roux."
  },

  // Cas 3
  {
    id: 'q-cas-est-3-1',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 32,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Cancer gastrique diffus familial : Famille avec 3 cas de cancer gastrique chez des sujets <50 ans, dont un à cellules en bague à chaton. Patiente asymptomatique, 38 ans, demande conseil génétique.\n\nLe gène probablement muté dans ce contexte est :",
    options: ["BRCA1", "MLH1", "CDH1", "APC", "KRAS"],
    correctAnswers: [2],
    explanation: "Le cancer gastrique diffus héréditaire est lié à CDH1, autosomique dominant.",
    clinicalPearl: "CDH1 autosomique dominant = Étiologie génétique princeps du cancer gastrique diffus héréditaire."
  },
  {
    id: 'q-cas-est-3-2',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 33,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 – Suite : Quelle attitude préventive est recommandée pour les porteurs asymptomatiques de la mutation CDH1 ?",
    options: [
      "Gastrectomie prophylactique après 75 ans",
      "Endoscopies annuelles avec biopsies aléatoires",
      "Chimiothérapie préventive",
      "Surveillance simple",
      "Antibiothérapie anti-HP à vie"
    ],
    correctAnswers: [1],
    explanation: "Recommandation : gastroscopies à intervalle rapproché avec biopsies étagées et discussion de gastrectomie totale prophylactique.",
    clinicalPearl: "Protocole de Cambridge : Endoscopies annuelles avec biopsies multiples aléatoires ou gastrectomie prophylactique totale."
  },
  {
    id: 'q-cas-est-3-3',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 34,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : Quel type histologique prédomine dans cette forme génétique familiale ?",
    options: [
      "Adénocarcinome intestinal",
      "Diffus (cellules indépendantes, en bague)",
      "Carcinome adéno-squameux",
      "Tumeur neuroendocrine",
      "Lymphome"
    ],
    correctAnswers: [1],
    explanation: "Le cancer diffus (Lauren diffus) avec signet-ring cells.",
    clinicalPearl: "CDH1 engendre typiquement le cancer diffus à cellules indépendantes en bague à chaton."
  },

  // Cas 4
  {
    id: 'q-cas-est-4-1',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 35,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Syndrome post-gastrectomie totale : Patient de 68 ans, gastrectomie totale pour cancer du fundus il y a 8 mois. Depuis 2 mois, 30 minutes après les repas : sueurs, pâleur, palpitations, fatigue intense, parfois diarrhée.\n\nQuel est le diagnostic le plus probable ?",
    options: [
      "Syndrome de l’anse afférente",
      "Dumping syndrome précoce",
      "Hypoglycémie tardive",
      "Pancréatite chronique",
      "Récidive tumorale"
    ],
    correctAnswers: [1],
    explanation: "Symptômes vasomoteurs post-prandiaux immédiats = dumping précoce (hyperosmolarité).",
    clinicalPearl: "Sueurs, palpitations, malaise et diarrhée survenant 15 à 30 min après le repas = Dumping syndrome précoce."
  },
  {
    id: 'q-cas-est-4-2',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 36,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : La mesure diététique la plus adaptée pour ce dumping syndrome précoce est :",
    options: [
      "Augmenter les glucides rapides",
      "Fractionner les repas, régime pauvre en sucres rapides, riche en protéines",
      "Jeûne intermittent",
      "Supplémentation en fer",
      "Boire beaucoup pendant les repas"
    ],
    correctAnswers: [1],
    explanation: "Fractionnement, éviter les hyperosmolaires, protéines/fibres.",
    clinicalPearl: "Traitement du dumping : Fractionner en 5-6 petits repas, limiter les sucres rapides et éviter les boissons pendant les repas."
  },
  {
    id: 'q-cas-est-4-3',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 37,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : Quelle supplémentation est impérative à vie après gastrectomie totale ?",
    options: ["Calcium", "Vitamine B12 intramusculaire", "Vitamine D", "Acide folique", "Magnésium"],
    correctAnswers: [1],
    explanation: "Carence en facteur intrinsèque → anémie de Biermer, injection B12 à vie.",
    clinicalPearl: "Absence de facteur intrinsèque = Injection intramusculaire de vitamine B12 tous les 1 à 3 mois à vie."
  },

  // Cas 5
  {
    id: 'q-cas-est-5-1',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 38,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Tumeur superficielle et résection endoscopique : Mme B., 65 ans, découverte fortuite d’une lésion superficielle de 15 mm au niveau de l’antre, Paris 0-IIa. Biopsies : adénocarcinome bien différencié. Echo-endoscopie : T1a, pas d’adénopathie.\n\nQuel traitement curatif peut être proposé ?",
    options: [
      "Gastrectomie des 4/5",
      "Dissection sous-muqueuse endoscopique (DSM)",
      "Chimiothérapie néoadjuvante",
      "Surveillance",
      "Radiothérapie interne"
    ],
    correctAnswers: [1],
    explanation: "Cancer superficiel T1aN0 : résection endoscopique curative.",
    clinicalPearl: "Tumeur T1a superficielle < 20 mm non ulcérée = Dissection sous-muqueuse endoscopique (DSM) curative."
  },
  {
    id: 'q-cas-est-5-2',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 39,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 – Suite : Quel critère histologique contre-indique une résection curative endoscopique chez Mme B. ?",
    options: [
      "Taille < 2cm",
      "Invasion sous-muqueuse >500 µm (sm2)",
      "Type intestinal",
      "HER2 négatif",
      "Absence d’ulcération"
    ],
    correctAnswers: [1],
    explanation: "Si sm2 (>500µm) → risque métastatique, indication chirurgicale.",
    clinicalPearl: "Infiltration sous-muqueuse > 500 µm (sm2) = Risque ganglionnaire élevé contre-indiquant la curabilité endoscopique exclusive."
  },
  {
    id: 'q-cas-est-5-3',
    courseId: 'crs-gastro-cancer-estomac',
    questionNumber: 40,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Que faut-il rechercher systématiquement sur les pièces de résection endoscopique ?",
    options: [
      "Marge latérale uniquement",
      "Profondeur d’invasion, emboles lymphovasculaires, différenciation",
      "Métastases ganglionnaires",
      "Statut MSI uniquement",
      "HER2"
    ],
    correctAnswers: [1],
    explanation: "Critères de curabilité: résection complète, sm1<500µm, pas d’emboles.",
    clinicalPearl: "Analyse anapath de DSM : Évaluer les marges R0 (latérales et profondes), l'infiltration sm1 vs sm2 et l'absence d'emboles vasculaires ou lymphatiques."
  }
];

export const CANCER_ESTOMAC_RESOURCES: CourseResource[] = [
  {
    id: 'res-est-mindmap',
    courseId: 'crs-gastro-cancer-estomac',
    type: 'Resume',
    title: "Carte Mentale & Conduite Pratique : Cancer de l'Estomac (Blida)",
    contentMarkdown: `## 🧠 Carte Mentale & Synthèse : Cancer de l'Estomac
**Faculté de Médecine de Blida | Dr A.M. KHALOUF, Pr N. SERIDJ**

### 1. Étiologies & Facteurs de Risque
- **Helicobacter pylori (60-90%)** : Souches virulentes (CagA, VacA). Cancérogène classe 1 OMS.
- **Lésions précancéreuses** : Gastrite atrophique, métaplasie intestinale (point de non-retour), maladie de Biermer, moignon de gastrectomie.
- **Génétique** : Mutation germinale *CDH1* (E-cadhérine, autosomique dominante), syndrome de Lynch (HNPCC), PAF.
- **Environnement** : Sel, aliments fumés, nitrates/nitrites, tabagisme actif, obésité et RGO (en forte hausse pour le cardia).

### 2. Démarche Diagnostique Clé
- **OGD avec au moins 8 biopsies** sur les berges et le fond de toute lésion suspecte (histologie Lauren, HER2, statut MSI, Hp).
- **Écho-endoscopie** : Indispensable pour l'extension en profondeur T (muqueuse T1a vs sous-muqueuse T1b) et N périgastrique.
- **Scanner TAP injecté avec distension gastrique à l'eau** : Bilan d'extension standard et évaluation de la résécabilité.
- **Bilan pré-thérapeutique** : Dosage du déficit en DPD avant fluoropyrimidines (5-FU), évaluation nutritionnelle, score G8 si sujet âgé.

### 3. Stratégie Thérapeutique (Standards Algériens & RCP 2026)
- **T1a / T1b-sm1 (< 500 µm) sans emboles (N0)** : Résection endoscopique curative par Dissection Sous-Muqueuse (DSM).
- **T2-T4a N0/N+ résécable** : Chimiothérapie péri-opératoire **FLOT (4 cures pré-op + 4 cures post-op)** + Gastrectomie avec curage ganglionnaire D2.
  - Tumeur distale (antre) : Gastrectomie des 4/5 avec marge ≥ 5 cm.
  - Tumeur proximale (cardia / corps) : Gastrectomie totale avec anastomose œso-jéjunale sur anse en Y de Roux.
- **Métastatique / non résécable** : Traitement palliatif (chimiothérapie, prothèse métallique expansive si dysphagie sténosante, soins de support).

### 4. Surveillance & Complications Post-Gastrectomie
- **Survie globale à 5 ans** : ~15 % tous stades confondus.
- **Dumping syndrome précoce** : Flush, sueurs, tachycardie 15-30 min après repas -> fractionnement en petits repas pauvres en sucres rapides.
- **Syndrome de l'anse afférente** : Douleur HD soulagée par vomissements bilieux.
- **Carences vitaminiques** : Vitamine B12 intramusculaire à vie obligatoire après gastrectomie totale.
- **Post-splénectomie** : Vaccinations obligatoires antipneumococcique, antiméningococcique et anti-Haemophilus.`,
    author: 'Dr A.M. KHALOUF, Pr N. SERIDJ (CHU Blida)'
  },
  {
    id: 'res-est-mnemo',
    courseId: 'crs-gastro-cancer-estomac',
    type: 'Astuce',
    title: "Mnémoniques & Perles Cliniques : Cancer de l'Estomac",
    contentMarkdown: `### 💡 Astuces & Mnémotechniques Officiels (Blida)

1. **Classification de BORMANN (Formes macroscopiques)** :
   - Mnémo « **VUUI** » :
     - Type I : **V**égétant
     - Type II : **U**lcéré
     - Type III : **U**lcéro-infiltrant
     - Type IV : **I**nfiltration diffuse (linite plastique)

2. **Critères de Curabilité par DSM (3C)** :
   - **C**omplétude verticale (marge profonde R0)
   - **C**omplétude latérale (marge périphérique R0)
   - **C**livage sous-muqueux sm1 < 500 µm sans emboles vasculaires/lymphatiques

3. **Dumping Syndrome Précoce (« Les 5 S »)** :
   - **S**weating (sueurs)
   - **S**yncope (malaise vagal / lipothymie)
   - **S**planchnic dilatation (hypotension, flush)
   - **S**hiver (tremblements)
   - **S**timulation sérotonine & kinines

4. **Protocole FLOT** :
   - **F** : 5-Fluorouracile
   - **L** : Leucovorine (acide folinique)
   - **O** : Oxaliplatine
   - **T** : Taxotère (Docétaxel)

5. **Helicobacter Pylori (« GUNA »)** :
   - **G**ram négatif
   - **U**réase positive (test respiratoire à l'urée C13)
   - **N**on invasif (reste dans le mucus gastrique)
   - **A**ntre (site préférentiel de colonisation)`,
    author: 'Faculté de Médecine de Blida'
  }
];
