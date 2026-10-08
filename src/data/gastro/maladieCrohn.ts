import { Question, CourseResource } from '../../types/medical';

export const MALADIE_CROHN_QUESTIONS: Question[] = [
  {
    "id": "q-crohn-01",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la caractéristique anatomique topographique majeure de l'atteinte digestive dans la maladie de Crohn ?",
    "options": [
      "Une atteinte limitée au rectum et au côlon de façon continue",
      "Une atteinte transmurale et discontinue ('en sauts de puce') pouvant toucher n'importe quel segment du tube digestif de la bouche à l'anus, avec prédilection pour l'iléon terminal et le côlon",
      "Une atteinte exclusive du duodénum",
      "Une atteinte limitée à l'estomac",
      "Une lésion superficielle sans ulcération"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La maladie de Crohn peut toucher l'ensemble du tube digestif (de la bouche à l'anus), avec lésions discontinues séparées par des intervalles de muqueuse saine, et une atteinte transmurale (toute l'épaisseur de la paroi).",
    "clinicalPearl": "Maladie de Crohn : atteinte transmurale, discontinue, de la bouche à l'anus (prédilection iléo-caecale et anopérinéale)."
  },
  {
    "id": "q-crohn-02",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel élément anatomopathologique très spécifique (présent dans environ 30% des biopsies) est pathognomonique de la maladie de Crohn ?",
    "options": [
      "L'abcès cryptique pur sans granulome",
      "Le granulome épithélioïde et giganto-cellulaire sans nécrose caséeuse",
      "La présence de corps de Councilman",
      "Une métaplasie intestinale de type complet",
      "La présence d'amas de cellules en bague à chaton"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le granulome inflammatoire épithélioïde et giganto-cellulaire non nécrotique (sans caséum) est le marqueur histologique le plus spécifique de la maladie de Crohn, permettant de la différencier de la RCH et de la tuberculose.",
    "clinicalPearl": "Histologie de Crohn : Granulome épithélioïde et gigantocellulaire SANS nécrose caséeuse."
  },
  {
    "id": "q-crohn-03",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle lésion élémentaire endoscopique précoce et très caractéristique de la maladie de Crohn est observée à la coloscopie ?",
    "options": [
      "Une muqueuse granitée friable saignant au contact",
      "Des ulcérations aphtoïdes superficielles siégeant au sein d'une muqueuse par ailleurs strictement normale",
      "Des pseudomembranes confluentes jaunâtres",
      "Des polypes villeux disséminés",
      "Une atrophie muqueuse plane sans relief"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les ulcérations aphtoïdes débutantes sur une muqueuse saine sont les lésions endoscopiques les plus précoces, évoluant vers des ulcères serpigineux longitudinaux et un aspect 'en pavés' (cobblestone).",
    "clinicalPearl": "Endoscopie de Crohn : ulcères aphtoïdes sur muqueuse saine -> ulcères serpigineux profonds et aspect en pavés."
  },
  {
    "id": "q-crohn-04",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle localisation extra-luminale de la maladie de Crohn touche plus de 30 à 40% des patients et constitue un critère phénotypique péjoratif majeur ?",
    "options": [
      "Les lésions ano-périnéales (LAP : fistules complexes, abcès, fissures creusantes indolores)",
      "Les pancréatites aiguës lithiasiques",
      "Les hépatites à corps de Mallory",
      "Les nodules mammaires",
      "L'anévrisme de l'artère rénale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les lésions ano-périnéales (LAP : fissures atypiques indolores, abcès péri-anaux, fistules ano-rectales complexes) sont fréquentes, invalidantes et prédictives d'une maladie agressive.",
    "clinicalPearl": "Lésions ano-périnéales (LAP) : fistules et abcès complexes périanaux = phénotype sévère de Crohn."
  },
  {
    "id": "q-crohn-05",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel biomarqueur fécal non invasif présente une excellente sensibilité et spécificité pour évaluer l'inflammation muqueuse intestinale et dépister une rechute ?",
    "options": [
      "La calprotectine fécale",
      "L'alpha-fœtoprotéine",
      "L'élastase fécale",
      "Le stercobilinogène",
      "Le dosage des graisses fécales"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La calprotectine fécale (protéine dérivée des polynucléaires neutrophiles migrant dans la lumière intestinale) est corrélée à l'activité endoscopique et au risque de rechute.",
    "clinicalPearl": "Calprotectine fécale = marqueur d'activité et de cicatrisation muqueuse des MICI (Crohn et RCH)."
  },
  {
    "id": "q-crohn-06",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel profil sérologique d'anticorps oriente en faveur d'une maladie de Crohn plutôt que d'une rectocolite hémorragique ?",
    "options": [
      "p-ANCA positifs et ASCA négatifs",
      "ASCA positifs (Anti-Saccharomyces cerevisiae) et p-ANCA négatifs",
      "Anticorps anti-nucléaires mouchetés",
      "Anticorps anti-mitochondries M2",
      "Anticorps anti-cardiolipine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le profil ASCA (+) / p-ANCA (-) est hautement évocateur de la maladie de Crohn, alors que le profil p-ANCA (+) / ASCA (-) oriente vers la RCH.",
    "clinicalPearl": "Crohn = ASCA (+) / p-ANCA (-) ; RCH = p-ANCA (+) / ASCA (-)."
  },
  {
    "id": "q-crohn-07",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle modalité d'imagerie moderne en coupes sans irradiation est l'examen de choix pour explorer l'ensemble de l'intestin grêle dans la maladie de Crohn ?",
    "options": [
      "Le transit du grêle baryté (TOGD)",
      "L'entéro-IRM (ou entéroscanner avec réplétion hydrique au PEG)",
      "L'échographie des voies biliaires",
      "La radiographie sans préparation",
      "La scintigraphie osseuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'entéro-IRM (IRM du grêle avec distension à l'eau) évalue l'extension pariétale, l'épaississement, le rehaussement, et détecte les sténoses inflammatoires ou fibreuses, fistules et abcès sans irradiation.",
    "clinicalPearl": "Entéro-IRM = examen de référence non irradiant de l'atteinte du grêle dans la maladie de Crohn."
  },
  {
    "id": "q-crohn-08",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle manifestation extra-digestive rhumatologique axiale associée à l'allèle HLA-B27 survient indépendamment de l'activité intestinale de la maladie de Crohn ?",
    "options": [
      "L'arthrite périphérique des genoux",
      "La spondyloarthrite ankylosante (pelvispondylite) et la sacro-iliite",
      "L'arthrose digitale",
      "La goutte tophacée",
      "La pseudopolyarthrite rhizomélique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les atteintes axiales (spondylarthrite ankylosante, sacro-iliite HLA-B27 positive) évoluent pour leur propre compte, de manière autonome et déconnectée des poussées digestives.",
    "clinicalPearl": "Spondylarthrite ankylosante / sacro-iliite (HLA-B27) = évolution indépendante des poussées intestinales."
  },
  {
    "id": "q-crohn-09",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle manifestation cutanée douloureuse nodulaire érythémateuse prétibiale évolue quant à elle parallèlement aux poussées digestives de la maladie de Crohn ?",
    "options": [
      "Le pyoderma gangrenosum",
      "L'érythème noueux",
      "Le psoriasis en plaques",
      "Le vitiligo",
      "L'eczéma atopique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'érythème noueux (nouures sous-cutanées douloureuses de la face antérieure des tibias) est étroitement corrélé à l'activité de la maladie intestinale et régresse avec le traitement de la poussée.",
    "clinicalPearl": "Érythème noueux = corrélé aux poussées de la maladie ; Pyoderma gangrenosum = souvent indépendant."
  },
  {
    "id": "q-crohn-10",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle complication lithiasique biliaire et rénale est particulièrement fréquente chez les patients atteints de maladie de Crohn iléale réséquée ?",
    "options": [
      "Lithiase biliaire cholestérolique et lithiase rénale oxalique (hyperoxalurie entérique)",
      "Lithiase rénale urique pure",
      "Lithiase salivaire sous-maxillaire",
      "Lithiase cystinique",
      "Lithiase vésicale d'infection"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La malabsorption iléale des sels biliaires favorise la lithiase biliaire (bile sursaturée en cholestérol) et l'absorption accrue d'oxalate libre non lié au calcium, entraînant une hyperoxalurie et des calculs rénaux oxalo-calciques.",
    "clinicalPearl": "Crohn iléal / résection iléale = risque accru de calculs biliaires et calculs rénaux oxalocalciques."
  },
  {
    "id": "q-crohn-11",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel traitement médical est formellement recommandé pour l'INDUTION de la rémission dans une poussée modérée à sévère de maladie de Crohn luminale ?",
    "options": [
      "Corticothérapie générale (Prednisone) ou corticostéroïde à action locale (Budésonide pour l'atteinte iléo-caecale)",
      "Azathioprine en monothérapie d'emblée",
      "Métronidazole seul pendant 6 mois",
      "Aspirine à haute dose",
      "Laxatifs réguliers"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les corticoïdes systémiques ou le budésonide (forme topique iléo-caecale à fort effet de premier passage hépatique) sont les molécules de choix pour l'induction rapide de la rémission, mais sont inefficaces en traitement d'entretien.",
    "clinicalPearl": "Induction de la rémission de Crohn : Corticothérapie (Prednisone ou Budésonide). Jamais de corticoïdes au long cours en entretien !"
  },
  {
    "id": "q-crohn-12",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel immunosuppresseur de la famille des analogues des purines est le traitement de fond d'entretien classique après une corticodépendance ?",
    "options": [
      "L'Azathioprine (ou 6-mercaptopurine)",
      "Le Méthotrexate per os à forte dose quotidienne",
      "La Cyclosporine A continue",
      "La Pénicilline V",
      "L'Hydroxychloroquine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'azathioprine (2 à 2,5 mg/kg/j) permet de sevrer les corticoïdes et de maintenir la rémission à long terme (délai d'action de 2 à 3 mois).",
    "clinicalPearl": "Traitement d'entretien de fond : Azathioprine (Imurel) ou Anti-TNF (Infliximab, Adalimumab)."
  },
  {
    "id": "q-crohn-13",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle toxicité hématologique et hépatique doit être surveillée de façon stricte lors de l'instauration d'un traitement par Azathioprine ?",
    "options": [
      "Hyperglycémie sévère",
      "Myélosuppression (leuconeutropénie, aplasie médullaire) et hépatotoxicité, ainsi que pancréatite aiguë immunoallergique précoce",
      "Insuffisance surrénalienne aiguë",
      "Hypothyroïdie fruste",
      "Néphropathie glomérulaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'azathioprine peut provoquer une leucopénie par toxicité médullaire (déficit en TPMT/NUDT15), une hépatite cytolytique ou une pancréatite aiguë dans les premières semaines (surveillance NFS et transaminases bimensuelle au début).",
    "clinicalPearl": "Surveillance de l'Azathioprine : NFS et bilan hépatique réguliers (recherche de leucopénie et cytolyse)."
  },
  {
    "id": "q-crohn-14",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle biothérapie anti-TNF alpha (anticorps monoclonal chimérique anti-TNF) administrée par perfusion intraveineuse a révolutionné la prise en charge des formes réfractaires et fistulisantes de la maladie de Crohn ?",
    "options": [
      "L'Infliximab (Remicade)",
      "Le Rituximab",
      "Le Trastuzumab",
      "L'Omalizumab",
      "Le Tocilizumab"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'Infliximab (anti-TNF chimérique IV) et l'Adalimumab (anti-TNF humain SC) induisent une cicatrisation muqueuse profonde et la fermeture des trajets fistuleux dans les formes sévères ou compliquées.",
    "clinicalPearl": "Anti-TNF alpha (Infliximab / Adalimumab) = cicatrisation muqueuse et traitement des fistules actives."
  },
  {
    "id": "q-crohn-15",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel bilan de dépistage infectieux pré-thérapeutique obligatoire doit être réalisé AVANT d'initier tout traitement par biomédicament anti-TNF alpha ?",
    "options": [
      "Uniquement une bandelette urinaire",
      "Dépistage d'une tuberculose latente (Quantiféron / IDR + Radiographie thoracique) et des sérologies virales (VHB, VHC, VIH)",
      "Une biopsie médullaire systématique",
      "Un transit baryté",
      "Une coloscopie sous anesthésie générale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les anti-TNF exposent à un risque majeur de réactivation de tuberculose disséminée et d'hépatite B fulminante : bilan tuberculose (cliché pulmonaire + test interféron gamma) et sérologies virales obligatoires avant toute première injection.",
    "clinicalPearl": "Bilan avant anti-TNF : Tuberculose latente (Quantiféron + Radio thorax) et Sérologie VHB/VHC/VIH impératives."
  },
  {
    "id": "q-crohn-16",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans les formes avec sténose iléale fibreuse courte (< 4-5 cm) symptomatique sans composante inflammatoire aiguë, quelle technique chirurgicale d'épargne permet d'élargir la lumière sans aucune résection de grêle ?",
    "options": [
      "La stricturoplastie (sténoplastie selon Heineke-Mikulicz)",
      "L'iléostomie définitive",
      "L'hémicolectomie totale droite",
      "La dérivation gastrique en Y de Roux",
      "La pancréatectomie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La stricturoplastie incise longitudinalement la sténose et la suture transversalement sans enlever de tissu intestinal, préservant la longueur de grêle et prévenant le syndrome du grêle court.",
    "clinicalPearl": "Stricturoplastie (sténoplastie) = chirurgie d'épargne digestive pour sténose fibreuse courte sans résection."
  },
  {
    "id": "q-crohn-17",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "En présence d'une lésion ano-périnéale de Crohn associant un abcès de la marge anale avec fistule ano-rectale active, quelle est la première étape médico-chirurgicale incontournable AVANT d'introduire des anti-TNF ?",
    "options": [
      "Mettre immédiatement des anti-TNF sans toucher à l'abcès",
      "Drainage chirurgical de l'abcès et mise en place d'un séton élastique non serrant pour drainer le trajet fistuleux, sous couverture antibiotique (Métronidazole/Ciprofloxacine)",
      "Fistulectomie extensive immédiate avec section de tous les sphincters",
      "Colostomie définitive d'emblée",
      "Injection locale de corticoïdes retard"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'administration d'anti-TNF sur un abcès non drainé provoque un sepsis périanal gravissime. Il faut d'abord drainer la collection et placer un drain élastique (séton), puis débuter l'anti-TNF pour fermer la fistule secondairement.",
    "clinicalPearl": "Fistule ano-périnéale avec abcès : drainage chirurgical + séton d'abord, PUIS traitement par anti-TNF."
  },
  {
    "id": "q-crohn-18",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle classe thérapeutique cible la sous-unité p40 commune aux interleukines IL-12 et IL-23 (ex: Ustékinumab) dans la maladie de Crohn réfractaire ?",
    "options": [
      "Anti-intégrines",
      "Anticorps anti-IL-12/23",
      "Inhibiteurs des JAK",
      "Anti-CD20",
      "Anti-VEGF"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'Ustékinumab (anti-IL-12/23) bloque la différenciation des lymphocytes Th1 et Th17 pro-inflammatoires, constituant une alternative efficace en cas d'échec ou d'intolérance aux anti-TNF.",
    "clinicalPearl": "Ustékinumab = anticorps monoclonal ciblant la sous-unité p40 de l'IL-12 et l'IL-23."
  },
  {
    "id": "q-crohn-19",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel anticorps monoclonal sélectif du tube digestif (anti-intégrine alpha-4-bêta-7) empêche le recrutement des lymphocytes T circulants dans la lamina propria muqueuse ?",
    "options": [
      "Le Védolizumab (Entyvio)",
      "L'Infliximab",
      "Le Golimumab",
      "L'Étanercept",
      "L'Éculizumab"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le védolizumab bloque spécifiquement l'intégrine alpha-4-bêta-7 se liant à MAdCAM-1 sur l'endothélium intestinal, procurant une immunosuppression ciblée digestive sans immunosuppression systémique.",
    "clinicalPearl": "Védolizumab = anti-intégrine alpha-4-bêta-7 spécifique du tube digestif (très bon profil de tolérance infectieuse)."
  },
  {
    "id": "q-crohn-20",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Le tabagisme actif dans la maladie de Crohn :",
    "options": [
      "A un rôle protecteur démontré",
      "Est un facteur aggravant majeur : augmente le risque de survenue, la sévérité des poussées, le taux de récidive post-opératoire et la résistance aux traitements",
      "N'a aucune influence sur la maladie",
      "Diminue le risque de sténose",
      "Est recommandé chez les jeunes patients"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Contrairement à la RCH où le tabac semble paradoxalement protecteur, dans la maladie de Crohn le tabagisme est un facteur péjoratif majeur nécessitant un sevrage complet impératif.",
    "clinicalPearl": "Tabac = poison dans la maladie de Crohn (augmente les poussées, les fistules et les récidives chirurgicales)."
  },
  {
    "id": "q-crohn-21",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la coloscopie de surveillance de la colite de Crohn de longue date (> 8 ans d'évolution touchant plus d'un tiers du côlon), quel risque justifie un dépistage systématique ?",
    "options": [
      "Le risque d'adénocarcinome colorectal sur dysplasie",
      "Le risque de volvulus du caecum",
      "Le risque d'hémorragie diverticulaire",
      "Le risque de polyarthrite",
      "Le risque d'anémie de Biermer"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'inflammation colique chronique au-delà de 8-10 ans d'évolution favorise la dysplasie muqueuse et multiplie le risque de cancer colorectal, justifiant une chromo-endoscopie systématique avec biopsies ciblées tous les 1 à 3 ans.",
    "clinicalPearl": "Crohn colique étendu > 8 ans : chromoendoscopie systématique tous les 1-3 ans pour dépister la dysplasie/cancer colorectal."
  },
  {
    "id": "q-crohn-22",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle anomalie endoscopique iléale lors d'une iléocoloscopie à 6-12 mois après une résection iléo-caecale est évaluée par le score de Rutgeerts pour prédire la récidive clinique ?",
    "options": [
      "La récidive des aphtes et ulcérations sur la néo-anse iléale anastomotique",
      "Le calibre du pylore",
      "La présence de varices gastriques",
      "Le taux de gastrine",
      "La longueur de l'appendice"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le score de Rutgeerts (de i0 à i4) gradue les lésions endoscopiques de la néo-anse iléale terminale après chirurgie ; un score i2-i4 annonce une récidive clinique précoce imposant une intensification thérapeutique préventive.",
    "clinicalPearl": "Score de Rutgeerts (i0 à i4) : évalue la récidive endoscopique sur le néo-iléon 6 à 12 mois après résection iléo-caecale."
  },
  {
    "id": "q-crohn-23",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle manifestation buccale peut inaugurer ou accompagner une maladie de Crohn pédiatrique ou de l'adulte jeune ?",
    "options": [
      "Une langue dépapillée lisse de Hunter",
      "Des aphtes buccaux récidivants, un gonflement labial ou une muqueuse gingivale en pavés (orofacial granulomatosis)",
      "Une hyperkératose linguale noire",
      "Des taches de Fordyce simples",
      "Une agueusie isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La localisation orofaciale de la maladie de Crohn réalise une chéilite granulomateuse, des ulcérations aphtoïdes linéaires des sillons gingivo-jugaux et un aspect pavimenteux de la muqueuse jugale.",
    "clinicalPearl": "Atteinte buccale de Crohn : aphtose buccale récidivante, chéilite granulomateuse, aspect en pavés des gencives."
  },
  {
    "id": "q-crohn-24",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication d'une poussée sévère de colite de Crohn se traduit par une distension aiguë du côlon transverse > 6 cm avec syndrome toxi-infectieux fébrile ?",
    "options": [
      "L'invagination colique",
      "La colectasie aiguë (mégacôlon toxique)",
      "Le syndrome d'Ogilvie",
      "La colite microscopique",
      "La diverticulite simple"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La colectasie aiguë toxique (diamètre du côlon transverse > 6 cm sur l'ASP/scanner) compliquée de sepsis et défaillance vitale impose un traitement médical d'urgence et une colectomie subtotale si absence d'amélioration en 48-72h.",
    "clinicalPearl": "Colectasie toxique (mégacôlon toxique) = dilatation côlon transverse > 6 cm + sepsis (menace de perforation colique)."
  },
  {
    "id": "q-crohn-25",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans l'évaluation nutritionnelle d'un Crohn iléal sévère, quelle carence spécifique par défaut d'absorption dans les 100 derniers centimètres de l'iléon terminal doit être systématiquement supplémentée ?",
    "options": [
      "La vitamine B12 (cobalamine)",
      "La vitamine B1",
      "La vitamine B6",
      "Le sodium pur",
      "Le cuivre"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'iléon terminal est le site d'absorption exclusif du complexe facteur intrinsèque - vitamine B12 : son atteinte inflammatoire ou sa résection chirurgicale entraîne une carence en B12 nécessitant une substitution injectable régulière.",
    "clinicalPearl": "Atteinte iléale terminale ou résection iléo-caecale = déficit en vitamine B12 (injections IM requises)."
  },
  {
    "id": "q-cas-crohn-1",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Un jeune homme de 23 ans, étudiant, fumeur actif (15 cigarettes/jour), consulte pour des douleurs paroxystiques récurrentes de la fosse iliaque droite post-prandiales (syndrome de Kœnig franc), associées à une diarrhée non glairo-sanglante (4 selles liquides par jour), une fébricule vespérale à 38°C et un amaigrissement de 5 kg en 3 mois. À l'examen clinique : sensibilité et empâtement douloureux de la fosse iliaque droite sans contracture, aines libres. La biologie montre : anémie à 10,8 g/dL, CRP à 55 mg/L, calprotectine fécale très élevée à 680 µg/g (N < 50). L'iléocoloscopie retrouve une muqueuse colique normale mais une atteinte discontinue de la dernière anse iléale avec de multiples ulcères aphtoïdes et serpigineux creusants séparés par une muqueuse saine. Les biopsies iléales montrent un infiltrat inflammatoire transmural avec présence d'un granulome épithélioïde et gigantocellulaire sans nécrose caséeuse. Quel est le diagnostic certain et quelle mesure d'hygiène de vie essentielle doit être immédiatement exigée ?",
    "options": [
      "Tuberculose iléo-caecale ; traitement antituberculeux quadrithérapie",
      "Maladie de Crohn iléale active non sténosante ; arrêt total et définitif du tabac impératif en priorité",
      "Rectocolite hémorragique pancolique ; régime sans résidu strict",
      "Appendicite chronique ; appendicectomie par cœlioscopie",
      "Syndrome de l'intestin irritable post-infectieux ; anxiolytiques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'atteinte iléale discontinue avec ulcérations serpigineuses et présence du granulome gigantocellulaire sans caséum est pathognomonique de la maladie de Crohn. Le sevrage tabagique complet est indispensable car le tabac est le facteur d'aggravation majeur de la maladie.",
    "clinicalPearl": "Crohn iléal typique = granulome sans caséum + ulcères discontinus. Règle d'or absolue : sevrage tabagique obligatoire."
  },
  {
    "id": "q-cas-crohn-2",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Chez ce même patient, pour traiter cette première poussée modérée iléale de maladie de Crohn, quel traitement corticoïde d'induction à action préférentielle iléo-caecale et à faible biodisponibilité systémique (90% d'effet de premier passage hépatique) est préconisé en première intention ?",
    "options": [
      "Prednisone par voie orale à 1 mg/kg/j",
      "Budésonide par voie orale à libération iléo-colique droite (9 mg/jour) pendant 8 semaines",
      "Dexaméthasone injectable forte dose",
      "Méthylprednisolone en bolus de 500 mg",
      "Hydrocortisone en lavement rectal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le budésonide oral (9 mg/j) est le traitement de choix pour l'induction de la rémission des poussées légères à modérées de la maladie de Crohn iléo-caecale, offrant une efficacité proche de la prednisone mais avec beaucoup moins d'effets indésirables systémiques.",
    "clinicalPearl": "Poussée iléo-caecale modérée de Crohn : Budésonide oral 9 mg/j pendant 8 semaines (faible passage systémique)."
  },
  {
    "id": "q-cas-crohn-3",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Une jeune femme de 26 ans suivie pour maladie de Crohn iléo-colique consulte aux urgences pour une douleur anale aiguë insupportable exacerbée par la défécation, pulsatile et permanente depuis 3 jours, accompagnée de frissons et d'une fièvre à 38,8°C. L'inspection de la marge anale retrouve une tuméfaction rouge luisante, tendue, extrêmement douloureuse au toucher à 7 heures à 2 cm de l'anus. Il existe de plus à 1 heure un orifice fistuleux spontanément productif de liquide séro-purulent. Quelle est la conduite thérapeutique chirurgicale et médicale appropriée immédiate ?",
    "options": [
      "Débuter immédiatement une perfusion d'Infliximab (anti-TNF) en urgence sans geste chirurgical",
      "Intervention chirurgicale d'urgence sous anesthésie générale pour incision et drainage de l'abcès ano-périnéal et pose d'un séton élastique non serrant dans le trajet fistuleux, associée à une antibiothérapie ciblée (Métronidazole/Ciprofloxacine)",
      "Réaliser une sphinctérotomie latérale interne",
      "Prescrire de la pommade corticoïde et des laxatifs simples",
      "Pratiquer une colectomie totale d'emblée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Tout abcès ano-périnéal chez un patient avec maladie de Crohn doit être drainé chirurgicalement en urgence avec mise en place d'un séton élastique non serrant sur le trajet de la fistule. Les anti-TNF sont formellement contre-indiqués tant que l'abcès n'est pas drainé.",
    "clinicalPearl": "Abcès ano-périnéal sur Crohn : drainage chirurgical + séton d'urgence (JAMAIS d'anti-TNF sur abcès non drainé !)."
  },
  {
    "id": "q-cas-crohn-4",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un homme de 30 ans atteint de maladie de Crohn iléale depuis 6 ans présente une corticodépendance (rechute systématique lors de la diminution de la corticothérapie en dessous de 15 mg de prednisone). Il est décidé d'introduire un traitement de fond par Azathioprine (2,5 mg/kg/j). Quelles précautions préalables et quelle surveillance biologique stricte devez-vous impérativement mettre en œuvre ?",
    "options": [
      "Aucune surveillance particulière requise",
      "Vérifier le statut vaccinal (vaccins vivants contre-indiqués), doser l'activité de la TPMT si disponible, et surveiller la formule sanguine (NFS) et les transaminases tous les 15 jours les 2 premiers mois puis mensuellement",
      "Réaliser une biopsie rénale",
      "Surveiller le taux de cholestérol chaque semaine",
      "Prescrire des antibiotiques à vie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'azathioprine expose à des cytopénies médullaires et à une toxicité hépatique précoce. Une surveillance rigoureuse de la NFS et du bilan hépatique est indispensable. Les vaccins vivants atténués (ROR, fièvre jaune, BCG) sont formellement contre-indiqués sous immunosuppresseurs.",
    "clinicalPearl": "Azathioprine : surveillance NFS + bilan hépatique + contre-indication absolue des vaccins vivants atténués."
  },
  {
    "id": "q-cas-crohn-5",
    "courseId": "crs-gastro-maladie-crohn",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un patient de 34 ans porteur d'une maladie de Crohn iléale récurrente développe des crises occlusives intermittentes à répétition (syndrome de Kœnig typique : ballonnement douloureux de la FID qui cède brusquement par une débâcle gazeuse et diarrhéique avec gargouillement). L'entéro-IRM montre une sténose iléale fibreuse courte de 3 cm sans épaississement inflammatoire actif ni abcès ni fistule en amont, avec une dilatation pré-sténotique à 40 mm. Après échec des dilatations endoscopiques, quelle intervention chirurgicale conservatrice épargnant le grêle est l'option de choix ?",
    "options": [
      "Résection iléo-caecale élargie avec résection de 80 cm de grêle",
      "Stricturoplastie (sténoplastie selon Heineke-Mikulicz) de la sténose iléale sans aucune résection intestinale",
      "Colectomie totale avec iléostomie terminale",
      "Court-circuit jéjuno-iléal",
      "Mise sous anti-TNF à quadruple dose sans chirurgie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour une sténose iléale courte, unique, purement fibreuse (non active), la stricturoplastie permet de restaurer la lumière digestive sans réséquer de grêle, protégeant le patient du risque de syndrome du grêle court cumulatif au cours de sa vie.",
    "clinicalPearl": "Sténose iléale courte fibreuse : Stricturoplastie conservatrice de Heineke-Mikulicz (épargne le grêle)."
  }
];

export const MALADIE_CROHN_RESOURCES: CourseResource[] = [
  {
    "id": "res-crohn-summary",
    "courseId": "crs-gastro-maladie-crohn",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Maladie de Crohn",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Maladie de Crohn\n- **Topographie** : Transmurale, discontinue, de la bouche à l'anus (prédilection iléo-caecale et ano-périnéale).\n- **Histologie** : Granulome épithélioïde et gigantocellulaire sans nécrose caséeuse (30%).\n- **Clinique** : Douleurs fosse iliaque droite (syndrome de Kœnig), diarrhée chronique, amaigrissement, fièvre, lésions ano-périnéales (fistules/abcès).\n- **Examens complémentaires** :\n  - Iléocoloscopie totale avec biopsies : aphtes, ulcères serpigineux profonds, muqueuse en pavés, intervalles sains.\n  - Entéro-IRM : référence pour le grêle (sténoses, fistules, abcès).\n  - Biologie : Calprotectine fécale élevée, ASCA (+), p-ANCA (-).\n- **Traitements** :\n  - *Induction* : Corticoïdes (Prednisone ou Budésonide 9 mg/j si iléo-caecale). Pas de corticoïdes au long cours !\n  - *Entretien* : Azathioprine (2-2,5 mg/kg/j), Anti-TNF (Infliximab, Adalimumab), Védolizumab, Ustékinumab.\n  - *Fistules/Abcès anaux* : drainage chirurgical premier + séton AVANT tout anti-TNF.\n  - *Chirurgie* : Épargne intestinale maximale (stricturoplastie pour sténoses courtes).\n  - *Règle majeure* : Arrêt absolu du tabac !",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-crohn-pearls",
    "courseId": "crs-gastro-maladie-crohn",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Maladie de Crohn",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Tabac** : facteur aggravant majeur dans la maladie de Crohn (contrairement à la RCH).\n- ⚡ **Granulome sans caséum** : pathognomonique de Crohn (permet d'éliminer la tuberculose où le caséum est présent).\n- ⚡ **Abcès périanal** : ne JAMAIS débuter d'anti-TNF sans drainage chirurgical préalable (risque de choc septique).",
    "author": "Commission Pédagogique"
  }
];
