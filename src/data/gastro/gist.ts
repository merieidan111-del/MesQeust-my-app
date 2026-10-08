import { Question, CourseResource } from '../../types/medical';

export const GIST_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Tumeurs Stromales Gastro-Intestinales (GIST) (Blida 2026)
  // -------------------------------------------------------------
  {
    id: 'q-gist-01',
    courseId: 'crs-gastro-gist',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les tumeurs stromales gastro-intestinales (GIST) dérivent principalement de :",
    options: [
      "Cellules musculaires lisses de la musculeuse",
      "Cellules interstitielles de Cajal (cellules pacemaker du tractus digestif)",
      "Cellules épithéliales glandulaires de la muqueuse",
      "Fibroblastes sous-muqueux indifférenciés",
      "Cellules neuroendocrines du système APUD"
    ],
    correctAnswers: [1],
    explanation: "Les GIST sont des tumeurs mésenchymateuses du tube digestif qui se développent à partir des cellules interstitielles de Cajal (cellules régulatrices de la motricité intestinale et du péristaltisme), exprimant de manière quasi constante le récepteur KIT (CD117).",
    clinicalPearl: "Histogenèse des GIST : Dérivent des cellules interstitielles de Cajal (pacemaker digestif) exprimant KIT (CD117)."
  },
  {
    id: 'q-gist-02',
    courseId: 'crs-gastro-gist',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'épidémiologie et la topographie des GIST, quelle proposition est exacte ?",
    options: [
      "L'incidence annuelle est de 1 cas pour 10 000 habitants et prédomine chez l'enfant",
      "L'estomac est la localisation la plus fréquente (environ 60 % des cas), suivi du grêle (30 %)",
      "Le côlon gauche est le siège préférentiel dans plus de 80 % des cas",
      "Le rectum est la localisation la plus fréquente avec le meilleur pronostic",
      "L'œsophage est le site le plus souvent touché"
    ],
    correctAnswers: [1],
    explanation: "L'estomac est le siège le plus fréquent (60 %), suivi de l'intestin grêle (30 %), du duodénum (5 %), du rectum (3-5 %) et plus rarement de l'œsophage et du côlon. L'incidence annuelle est d'environ 10 à 15 cas par million d'habitants.",
    clinicalPearl: "Topographie des GIST : Estomac (60 %) > Grêle (30 %) > Duodénum/Rectum (5-10 %)."
  },
  {
    id: 'q-gist-03',
    courseId: 'crs-gastro-gist',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le panel immunohistochimique essentiel pour confirmer le diagnostic de GIST comprend en première intention :",
    options: [
      "CK7 et CK20",
      "CD117 (c-KIT) et DOG-1",
      "Chromogranine A et Synaptophysine",
      "Desmine et Myogénine",
      "PS100 et GFAP"
    ],
    correctAnswers: [1],
    explanation: "Le diagnostic de certitude de GIST repose sur la positivité conjointe ou isolée de CD117 (KIT) dans 95 % des cas et de DOG-1 dans 95-98 % des cas. CD34 est également souvent positif (60-70 %).",
    clinicalPearl: "Marqueurs clés en IHC : CD117 (c-KIT) positif (95 %) + DOG-1 positif (95 %) -> Diagnostic formel de GIST."
  },
  {
    id: 'q-gist-04',
    courseId: 'crs-gastro-gist',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quand la recherche de mutations de KIT ou PDGFRA par biologie moléculaire est-elle particulièrement recommandée ?",
    options: [
      "Uniquement chez les patients de plus de 80 ans",
      "En cas de tumeur CD117 négative en immunohistochimie, ou pour guider et adapter le traitement par inhibiteur de tyrosine kinase",
      "Avant toute biopsie percutanée",
      "Exclusivement si la tumeur mesure moins de 1 cm",
      "Uniquement en situation de découverte fortuite"
    ],
    correctAnswers: [1],
    explanation: "Le génotypage (recherche de mutations KIT exons 9, 11, 13, 17 ou PDGFRA exon 18) est indispensable en cas de CD117 négatif (5 % des cas) et permet d'adapter la dose d'Imatinib (ex. exon 9 nécessite 800 mg/j au lieu de 400 mg/j) ou de prédire une résistance (mutation D842V de PDGFRA).",
    clinicalPearl: "Biologie moléculaire des GIST : Indispensable si CD117 négatif et pour prédire la sensibilité à l'Imatinib (Glivec)."
  },
  {
    id: 'q-gist-05',
    courseId: 'crs-gastro-gist',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mode de révélation clinique le plus fréquent d'une GIST (> 50 % des cas) est :",
    options: [
      "Une ascite chyleuse isolée",
      "Une hémorragie digestive (méléna, hématémèse ou anémie ferriprive chronique)",
      "Une hépatomégalie métastatique d'emblée sans tumeur digestive",
      "Une occlusion haute mécanique réflexe",
      "Une jaunisse rétentionnelle"
    ],
    correctAnswers: [1],
    explanation: "En raison du développement sous-muqueux et de l'hypervascularisation de la tumeur provoquant une ulcération muqueuse centrale (« tumeur en bouton de chemise »), l'hémorragie digestive aiguë ou l'anémie ferriprive est le mode de découverte le plus fréquent.",
    clinicalPearl: "Clinique GIST : L'hémorragie digestive (méléna, anémie occulte) est le maître-symptôme dans plus de 50 % des cas."
  },
  {
    id: 'q-gist-06',
    courseId: 'crs-gastro-gist',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie est considéré comme l'examen de référence pour le diagnostic, le bilan d'extension et la réponse thérapeutique d'une GIST ?",
    options: [
      "L'échographie abdominale simple seule",
      "Le transit baryté œso-gastro-duodénal",
      "Le scanner thoraco-abdomino-pelvien (TDM TAP) avec injection de produit de contraste",
      "L'artériographie sélective mésentérique",
      "L'ASP en décubitus"
    ],
    correctAnswers: [2],
    explanation: "La TDM TAP injectée est l'examen de référence : elle caractérise la tumeur (masse bien limitée, hétérogène, charnue, à développement souvent exophytique) et recherche les métastases (foie et péritoine).",
    clinicalPearl: "Imagerie de référence des GIST = Scanner thoraco-abdomino-pelvien (TDM TAP) avec injection."
  },
  {
    id: 'q-gist-07',
    courseId: 'crs-gastro-gist',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les recommandations des sociétés savantes, la biopsie préopératoire d'une masse suspecte de GIST :",
    options: [
      "Est obligatoire pour toute lésion de découverte fortuite",
      "Est inutile et proscrite si la tumeur est résécable d'emblée par une chirurgie non mutilante ; elle est réservée aux cas où un traitement néoadjuvant par Imatinib est envisagé ou en cas de tumeur non résécable",
      "Doit toujours être réalisée par voie transcutanée avec gros trocart",
      "Est sans aucun risque d'ensemencement péritonéal",
      "Ne permet jamais de poser le diagnostic"
    ],
    correctAnswers: [1],
    explanation: "Si la tumeur est résécable sans chirurgie mutilante, la chirurgie d'exérèse R0 première est recommandée d'emblée sans biopsie (pour éviter le risque de rupture et de greffe péritonéale). La biopsie (idéalement écho-guidée EUS) est discutée si un traitement néoadjuvant ou non résécable est planifié.",
    clinicalPearl: "Biopsie préopératoire des GIST : À éviter si résécable d'emblée (risque de rupture tumorale) ; indiquée si chirurgie mutilante ou néoadjuvant."
  },
  {
    id: 'q-gist-08',
    courseId: 'crs-gastro-gist',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La triade de Carney associe classiquement des GIST gastriques multiples à :",
    options: [
      "Des neurofibromes cutanés et des taches café-au-lait",
      "Un chondrome pulmonaire et un paragangliome extra-surrénalien",
      "Une polypose colique et des ostéomes",
      "Un carcinome médullaire de la thyroïde et un phéochromocytome",
      "Un cancer du rein et un mélanome"
    ],
    correctAnswers: [1],
    explanation: "La triade de Carney touche préférentiellement les femmes jeunes et associe : 1) GIST gastriques multiples (souvent déficientes en SDH), 2) Chondrome pulmonaire, 3) Paragangliome extra-surrénalien fonctionnel.",
    clinicalPearl: "Triade de Carney = GIST gastriques multiples + Chondrome pulmonaire + Paragangliome extra-surrénalien."
  },
  {
    id: 'q-gist-09',
    courseId: 'crs-gastro-gist',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le principe fondamental de la chirurgie d'exérèse d'une GIST localisée résécable est :",
    options: [
      "Une résection large avec curage ganglionnaire lombo-aortique et mésentérique systématique",
      "Une résection complète en monobloc avec marges saines (R0), en évitant à tout prix la rupture ou la perforation tumorale peropératoire",
      "Une gastrectomie totale systématique quelle que soit la taille de la lésion",
      "Une radiochimiothérapie peropératoire concomitante",
      "Une résection endoscopique simple au collet"
    ],
    correctAnswers: [1],
    explanation: "Le curage ganglionnaire systématique n'est PAS indiqué car les métastases ganglionnaires sont exceptionnelles (< 1 %). La règle absolue est l'exérèse R0 sans rupture tumorale, car la rupture dissémine la tumeur dans le péritoine et aggrave dramatiquement le risque de récidive.",
    clinicalPearl: "Chirurgie des GIST : Résection complète R0 sans rupture tumorale. Pas de curage ganglionnaire systématique !"
  },
  {
    id: 'q-gist-10',
    courseId: 'crs-gastro-gist',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'Imatinib (Glivec) agit comme :",
    options: [
      "Un agent alkylant bloquant la mitose en métaphase",
      "Un inhibiteur spécifique sélectif de l'activité tyrosine kinase des récepteurs KIT et PDGFRA",
      "Un anticorps monoclonal ciblant le VEGF circulant",
      "Un antimétabolite analogue des bases puriques",
      "Un bloqueur hormonal des récepteurs des œstrogènes"
    ],
    correctAnswers: [1],
    explanation: "L'Imatinib est une petite molécule inhibitrice de l'activité enzymatique tyrosine kinase qui bloque la phosphorylation intracellulaire de c-KIT (CD117) et de PDGFRA, stoppant la prolifération tumorale.",
    clinicalPearl: "Imatinib (Glivec) : Inhibiteur de tyrosine kinase (ITK) ciblant spécifiquement KIT et PDGFRA."
  },
  {
    id: 'q-gist-11',
    courseId: 'crs-gastro-gist',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification pronostique de Miettinen (AFIP), les paramètres fondamentaux déterminant le risque de récidive sont :",
    options: [
      "L'âge du patient et la valeur de la CRP",
      "La taille de la tumeur, l'index mitotique (nombre de mitoses / 50 champs à fort grandissement) et la localisation anatomique de la tumeur",
      "Le sexe et le groupe sanguin",
      "L'expression de la desmine et la taille",
      "Le taux d'ACE sérique"
    ],
    correctAnswers: [1],
    explanation: "La classification de Miettinen évalue le risque de récidive selon : 1) La taille tumorale (≤ 2 cm, 2-5 cm, 5-10 cm, > 10 cm), 2) L'index mitotique (≤ 5 ou > 5 mitoses / 50 HPF), et 3) Le site primitif (estomac meilleur pronostic que le grêle ou le rectum).",
    clinicalPearl: "Pronostic des GIST (Miettinen) = Taille tumorale + Index mitotique (/50 HPF) + Localisation anatomique."
  },
  {
    id: 'q-gist-12',
    courseId: 'crs-gastro-gist',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour une GIST opérée classée à haut risque de récidive, le rythme de surveillance tomodensitométrique recommandé est :",
    options: [
      "Un scanner tous les 2 ans uniquement",
      "Un scanner TAP tous les 3 à 4 mois pendant les 3 premières années, puis tous les 6 mois jusqu'à 5 ans",
      "Une échographie semestrielle sans jamais faire de scanner",
      "Une écho-endoscopie gastrique mensuelle",
      "Aucune surveillance nécessaire si la marge chirurgicale était saine"
    ],
    correctAnswers: [1],
    explanation: "Dans le groupe à haut risque, le pic de récidive se situe au cours des 2 à 3 premières années. La surveillance par TDM TAP injectée est rapprochée : tous les 3-4 mois pendant 3 ans, puis tous les 6 mois jusqu'à 5 ans.",
    clinicalPearl: "Surveillance postopératoire haut risque : TDM TAP tous les 3-4 mois pendant 3 ans, puis tous les 6 mois jusqu'à 5 ans."
  },
  {
    id: 'q-gist-13',
    courseId: 'crs-gastro-gist',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En cas de GIST métastatique d'emblée (métastases hépatiques multiples ou péritonéales), le traitement de première intention est :",
    options: [
      "Une chirurgie cytoréductrice de débulking d'emblée",
      "Une chimiothérapie par FOLFOX ou FOLFIRI",
      "L'Imatinib (400 mg/j per os)",
      "Une radiothérapie métabolique",
      "Une immunothérapie par anticorps anti-CTLA4"
    ],
    correctAnswers: [2],
    explanation: "L'Imatinib à la dose de 400 mg/j est le traitement de référence en 1ère ligne pour les GIST non résécables ou métastatiques. Il permet d'obtenir un contrôle de la maladie dans plus de 80 % des cas.",
    clinicalPearl: "GIST métastatique ou inopérable : Imatinib 400 mg/jour en première ligne (contrôle tumoral > 80 %)."
  },
  {
    id: 'q-gist-14',
    courseId: 'crs-gastro-gist',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la sensibilité des GIST aux traitements oncologiques conventionnels (chimiothérapie et radiothérapie) :",
    options: [
      "Les GIST sont très chimiosensibles aux sels de platine",
      "La radiothérapie externe permet la stérilisation de 80 % des tumeurs",
      "Les GIST sont réputées totalement radio-résistantes et chimio-résistantes aux agents cytotoxiques classiques",
      "L'association 5-FU et Irinotécan est le traitement de référence",
      "Les anthracyclines guérissent les formes métastatiques"
    ],
    correctAnswers: [2],
    explanation: "Avant l'avènement de l'Imatinib, les GIST étaient de pronostic sombre car elles sont intrinsèquement réfractaires à la chimiothérapie cytotoxique conventionnelle et à la radiothérapie externe.",
    clinicalPearl: "Les GIST sont radio- et chimio-résistantes : Seules les thérapies ciblées (ITK) et la chirurgie sont efficaces."
  },
  {
    id: 'q-gist-15',
    courseId: 'crs-gastro-gist',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À taille et index mitotique équivalents, quelle localisation digestive confère le risque de récidive le plus élevé selon Miettinen ?",
    options: [
      "L'estomac (fundus/corps)",
      "L'intestin grêle (jéjunum/iléon) et le rectum",
      "L'antre gastrique",
      "La vésicule biliaire",
      "Le côlon transverse"
    ],
    correctAnswers: [1],
    explanation: "Les GIST gastriques ont un pronostic nettement plus favorable que les GIST non gastriques. À taille et nombre de mitoses égaux, les tumeurs du grêle, du duodénum et du rectum ont un risque de récidive et de métastases beaucoup plus élevé.",
    clinicalPearl: "Pronostic selon le site : Estomac (meilleur pronostic) vs Grêle/Rectum (risque de récidive significativement plus élevé)."
  },
  {
    id: 'q-gist-16',
    courseId: 'crs-gastro-gist',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le TEP-scan au 18-FDG est particulièrement indiqué dans la prise en charge des GIST pour :",
    options: [
      "Le diagnostic positif initial en remplacement de l'histologie",
      "L'évaluation très précoce (dès 2 à 4 semaines) de la réponse métabolique au traitement par Imatinib ou en cas de doute sur une récidive",
      "Le dépistage de masse",
      "Mesurer la profondeur d'invasion dans la sous-muqueuse",
      "Identifier la mutation génétique de KIT"
    ],
    correctAnswers: [1],
    explanation: "Le TEP-FDG détecte l'arrêt de la consommation de glucose dans les cellules tumorales dès les premières semaines de traitement par ITK, bien avant la régression volumique mesurée au scanner (critères de Choi).",
    clinicalPearl: "TEP-FDG : Permet d'évaluer la réponse métabolique précoce sous Imatinib et de détecter une reprise évolutive."
  },
  {
    id: 'q-gist-17',
    courseId: 'crs-gastro-gist',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une petite lésion sous-muqueuse gastrique de 1,5 cm asymptomatique découverte fortuitement, d'aspect homogène à l'écho-endoscopie, relève de :",
    options: [
      "Une gastrectomie des 2/3 immédiate",
      "Une surveillance endoscopique régulière (ou exérèse selon le contexte) car son risque évolutif est très faible",
      "Une chimiothérapie par Imatinib pendant 2 ans",
      "Une radiothérapie stéréotaxique",
      "Une chimio-embolisation"
    ],
    correctAnswers: [1],
    explanation: "Les GIST gastriques < 2 cm avec faible index mitotique ont un risque de récidive quasi nul (groupe de très faible risque). Une surveillance écho-endoscopique ou une résection en coin sans sacrifice gastrique majeur est proposée.",
    clinicalPearl: "GIST gastrique < 2 cm = Risque très faible -> Surveillance écho-endoscopique ou résection limitée."
  },
  {
    id: 'q-gist-18',
    courseId: 'crs-gastro-gist',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'expression de CD117 (KIT) en immunohistochimie :",
    options: [
      "Est rigoureusement exclusive des GIST et ne se voit dans aucune autre tumeur",
      "Est positive dans 95 % des GIST, mais peut également s'observer dans d'autres tumeurs (séminomes, mélanomes, leucémies myéloïdes)",
      "Est négative dans toutes les formes malignes",
      "Est identique à l'expression de la desmine",
      "Est un facteur prédictif d'échec du traitement chirurgical"
    ],
    correctAnswers: [1],
    explanation: "Bien que très sensible (95 %) pour les GIST, CD117 n'est pas 100 % exclusif. Il peut être exprimé dans les tumeurs germinales (séminomes), les sarcomes d'Ewing et certains mélanomes. D'où l'importance de combiner avec DOG-1 et les marqueurs négatifs.",
    clinicalPearl: "CD117 : Positif dans 95 % des GIST mais peut marquer d'autres tumeurs (séminome, mélanome). DOG-1 renforce la spécificité."
  },
  {
    id: 'q-gist-19',
    courseId: 'crs-gastro-gist',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour une GIST du deuxième duodénum localisée résécable, la stratégie chirurgicale privilégie :",
    options: [
      "Une duodéno-pancréatectomie céphalique (DPC) systématique dans tous les cas",
      "Une résection limitée adaptée (ampullectomie ou résection cunéiforme/segmentaire) avec préservation pancréatique chaque fois que possible",
      "Une radiothérapie première",
      "Une résection endoscopique par mucosectomie simple",
      "Une chimiothérapie par 5-FU"
    ],
    correctAnswers: [1],
    explanation: "Comme le curage ganglionnaire n'est pas requis pour les GIST, on privilégie une résection duodénale d'épargne avec préservation du pancréas afin d'éviter la lourde morbidité d'une DPC, sauf si le pancréas ou l'ampoule est envahi.",
    clinicalPearl: "GIST duodénale : Résection d'épargne conservant le pancréas si les marges R0 sont assurées."
  },
  {
    id: 'q-gist-20',
    courseId: 'crs-gastro-gist',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le cadre d'une Neurofibromatose de type 1 (maladie de Recklinghausen), les GIST présentent comme particularités :",
    options: [
      "D'être toujours uniques et gastriques avec mutation de l'exon 11",
      "D'être fréquemment multiples, siégeant préférentiellement sur l'intestin grêle, sans mutation de KIT/PDGFRA (dites sauvages ou wild-type)",
      "D'être d'emblée métastatiques cérébrales",
      "D'être formellement guéries par l'Imatinib seul",
      "De ne jamais saigner"
    ],
    correctAnswers: [1],
    explanation: "Les GIST associées à la NF1 sont typiquement multiples, touchent l'intestin grêle, et sont dites 'wild-type' (sans mutation de KIT ou PDGFRA), médiées par l'hyperactivation de la voie RAS/MAPK consécutive à la perte de neurofibromine.",
    clinicalPearl: "GIST et NF1 : Tumeurs multiples du grêle, sans mutation de KIT (wild-type), réponse modeste à l'Imatinib."
  },
  {
    id: 'q-gist-21',
    courseId: 'crs-gastro-gist',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En Algérie et selon les recommandations internationales, toute décision thérapeutique complexe de GIST relève obligatoirement :",
    options: [
      "D'une décision unilatérale du chirurgien opérateur",
      "D'une Réunion de Concertation Pluridisciplinaire (RCP) dédiée associant oncologues, chirurgiens, gastro-entérologues, radiologues et anatomopathologistes",
      "D'un simple accord du médecin traitant",
      "D'une prescription standardisée automatique sans discussion",
      "D'un collège d'internes"
    ],
    correctAnswers: [1],
    explanation: "La prise en charge des sarcomes mous et des GIST exige une discussion systématique en RCP spécialisée pour valider la résécabilité, la stratégie néoadjuvante, l'indication de l'Imatinib adjuvant et le suivi.",
    clinicalPearl: "Toute décision thérapeutique pour une GIST (néoadjuvant, chirurgie, adjuvant) doit être validée en RCP."
  },
  {
    id: 'q-gist-22',
    courseId: 'crs-gastro-gist',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel incident peropératoire aggrave considérablement le pronostic et multiplie le risque de récidive péritonéale d'une GIST ?",
    options: [
      "L'absence de drainage péritonéal de Redon",
      "La rupture de la capsule tumorale ou la perforation de la lésion lors de la manipulation",
      "L'utilisation de pinces mécaniques agrafeuses",
      "Une incision médiane au lieu d'une transversale",
      "L'examen extemporané des berges"
    ],
    correctAnswers: [1],
    explanation: "La rupture peropératoire dissémine les cellules tumorales viables dans toute la cavité péritonéale, transformant une lésion localisée en une greffe péritonéale quasi inéluctable. C'est le facteur de gravité chirurgicale absolu.",
    clinicalPearl: "Hantise du chirurgien : La rupture tumorale peropératoire fait chuter la survie et multiplie par 10 le risque de récidive péritonéale."
  },
  {
    id: 'q-gist-23',
    courseId: 'crs-gastro-gist',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'intérêt diagnostique majeur du marqueur DOG-1 (Discovered On GIST-1) ?",
    options: [
      "Il détecte les mutations de KRAS",
      "Il permet d'évaluer la fonction hépatique",
      "Il est exprimé dans > 95 % des GIST et reste positif dans la quasi-totalité des GIST KIT (CD117) négatives",
      "Il prédit la réponse à la radiothérapie",
      "Il est spécifique des tumeurs neuroendocrines"
    ],
    correctAnswers: [2],
    explanation: "DOG-1 (protéine anoctamine-1) est un marqueur très spécifique et sensible qui est conservé y compris dans les GIST CD117 négatives (notamment avec mutation PDGFRA), permettant de redresser le diagnostic.",
    clinicalPearl: "DOG-1 : Marqueur salvateur restant positif dans les GIST CD117 négatives."
  },
  {
    id: 'q-gist-24',
    courseId: 'crs-gastro-gist',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La durée recommandée du traitement adjuvant par Imatinib (400 mg/j) après résection complète R0 d'une GIST à haut risque selon l'essai SSG XVIII est de :",
    options: [
      "3 mois",
      "6 mois",
      "1 an",
      "3 ans (36 mois)",
      "À vie sans interruption"
    ],
    correctAnswers: [3],
    explanation: "L'essai international SSG XVIII a démontré qu'une durée de 3 ans (36 mois) d'Imatinib adjuvant améliore significativement la survie globale et la survie sans récidive par rapport à 1 an chez les patients à haut risque de récidive.",
    clinicalPearl: "Imatinib adjuvant : Durée de 3 ans (36 mois) à 400 mg/jour pour les GIST à haut risque de récidive."
  },
  {
    id: 'q-gist-25',
    courseId: 'crs-gastro-gist',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément immunohistochimique permet d'éliminer un léiomyome vrai devant une tumeur mésenchymateuse digestive ?",
    options: [
      "La positivité forte et diffuse de la desmine et de l'actine musculaire lisse, avec négativité de CD117 et DOG-1",
      "La négativité de la vimentine",
      "La présence de calcifications",
      "Une taille > 5 cm",
      "L'âge du patient"
    ],
    correctAnswers: [0],
    explanation: "Le léiomyome vrai dérive du muscle lisse et exprime fortement la desmine et l'actine musculaire lisse (AML), tout en étant strictement négatif pour CD117 (KIT), DOG-1 et CD34.",
    clinicalPearl: "Léiomyome vs GIST : Léiomyome = Desmine (+) / Actine (+) / CD117 (-) / DOG-1 (-)."
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (12 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : M. M., 62 ans, méléna et anémie
  {
    id: 'q-cas-gist-1-1',
    courseId: 'crs-gastro-gist',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (M. M., 62 ans) - Méléna et anémie à 8 g/dL. TDM : masse gastrique fundique de 6 cm, bien circonscrite, exo-endophytique, sans métastase. Écho-endoscopie avec ponction : GIST CD117 (+). Quel est le traitement initial recommandé pour cette tumeur localisée résécable ?",
    options: [
      "Imatinib néoadjuvant pendant 6 mois d'emblée",
      "Résection chirurgicale complète en coin (gastrectomie atypique / wedge resection) sans traitement préalable",
      "Chimiothérapie par FOLFIRI",
      "Radiothérapie externe exclusive",
      "Embolisation sélective définitive"
    ],
    correctAnswers: [1],
    explanation: "Pour une GIST gastrique localisée de 6 cm résécable par chirurgie non mutilante (gastrectomie atypique cunéiforme R0), la chirurgie première est le traitement standard d'emblée.",
    clinicalPearl: "GIST gastrique localisée résécable sans mutilation = Résection chirurgicale en coin (wedge resection) d'emblée."
  },
  {
    id: 'q-cas-gist-1-2',
    courseId: 'crs-gastro-gist',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Pourquoi les biopsies endoscopiques de surface réalisées à la pince standard sont-elles fréquemment faussement négatives dans les GIST ?",
    options: [
      "Parce que la tumeur détruit la pince à biopsie",
      "Parce que la GIST est une tumeur sous-muqueuse/musculeuse recouverte d'un épithélium normal ou nécrotique en surface",
      "Parce que l'acide chlorhydrique dissout les cellules tumorales",
      "Parce que les cellules sont trop petites",
      "Parce que le c-KIT n'est pas exprimé en surface"
    ],
    correctAnswers: [1],
    explanation: "La tumeur se développant dans la musculeuse ou sous-muqueuse, les pinces à biopsie superficielles ne ramènent que de la muqueuse normale ou du tissu inflammatoire cicatriciel de surface.",
    clinicalPearl: "Les biopsies superficielles sont négatives car les GIST naissent de la musculeuse -> Écho-endoscopie avec ponction profonde nécessaire."
  },
  {
    id: 'q-cas-gist-1-3',
    courseId: 'crs-gastro-gist',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - L'analyse histopathologique finale de la pièce d'exérèse retrouve : taille 6 cm, index mitotique 8 mitoses / 50 HPF, marges saines R0. Selon la classification de Miettinen, quel est le niveau de risque de récidive et quelle prise en charge adjuvante ?",
    options: [
      "Risque très faible, surveillance simple",
      "Risque faible, pas de traitement adjuvant",
      "Risque intermédiaire",
      "Risque élevé -> Imatinib adjuvant (400 mg/j) pendant 3 ans recommandé après avis de la RCP",
      "Tumeur bénigne garantie"
    ],
    correctAnswers: [3],
    explanation: "Taille > 5 cm et mitoses > 5/50 HPF = Groupe à HAUT RISQUE de récidive. Une thérapie adjuvante par Imatinib 400 mg/j pendant 3 ans est formellement indiquée.",
    clinicalPearl: "GIST > 5 cm + mitoses > 5/50 HPF = Haut risque -> Imatinib adjuvant pendant 3 ans."
  },

  // Cas 2 : Femme de 54 ans, GIST rectale
  {
    id: 'q-cas-gist-2-1',
    courseId: 'crs-gastro-gist',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Femme de 54 ans) - IRM pelvienne découvre une masse sous-muqueuse du bas rectum de 3 cm. Quel examen morphologique est clé pour évaluer les rapports sphinctériens et la profondeur pariétale ?",
    options: [
      "TEP-scan d'emblée",
      "IRM pelvienne de haute résolution + Écho-endoscopie ano-rectale",
      "Coloscopie courte sans préparation",
      "Marqueurs tumoraux sériques",
      "Transit baryté"
    ],
    correctAnswers: [1],
    explanation: "L'IRM pelvienne et l'écho-endoscopie permettent d'analyser précisément l'extension dans la musculeuse et les rapports avec le sphincter anal externe et interne pour planifier une chirurgie conservatrice.",
    clinicalPearl: "GIST rectale : IRM pelvienne + Écho-endoscopie pour évaluer la distance au sphincter anal."
  },
  {
    id: 'q-cas-gist-2-2',
    courseId: 'crs-gastro-gist',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Pour cette tumeur rectale de 3 cm à faible index mitotique, quelle modalité chirurgicale permet d'éviter une amputation abdomino-périnéale mutilante ?",
    options: [
      "Radiothérapie néoadjuvante",
      "Exérèse locale par voie transanale (microchirurgie endoscopique transanale TEM/TAMIS) avec marges saines R0",
      "Amputation abdomino-périnéale de Miles systématique",
      "Imatinib seul sans chirurgie",
      "Abstention complète"
    ],
    correctAnswers: [1],
    explanation: "Comme le curage ganglionnaire n'est pas nécessaire, une exérèse locale par voie transanale (TEM ou TAMIS) assure des marges saines tout en préservant l'appareil sphinctérien et la continence.",
    clinicalPearl: "GIST du bas rectum de petite taille : Exérèse transanale d'épargne sphinctérienne (TEM/TAMIS) R0."
  },

  // Cas 3 : Patient de 70 ans, métastases hépatiques
  {
    id: 'q-cas-gist-3-1',
    courseId: 'crs-gastro-gist',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (Patient de 70 ans) - Altération de l'état général, volumineuse tumeur du jéjunum de 9 cm avec multiples métastases hépatiques bilatérales. Biopsie guidée : GIST KIT (+). Quelle est la meilleure stratégie thérapeutique de première intention ?",
    options: [
      "Résection intestinale en urgence avec hépatectomie bilatérale d'emblée",
      "Traitement systémique par Imatinib 400 mg/j en première ligne avec réévaluation tomodensitométrique",
      "Chimiothérapie palliative par 5-FU",
      "Soins palliatifs exclusifs sans traitement oncologique",
      "Radiothérapie métabolique"
    ],
    correctAnswers: [1],
    explanation: "Pour les GIST métastatiques, le traitement médical ciblé par Imatinib en 1ère ligne est le standard d'or. La chirurgie secondaire de la tumeur primitive ou des métastases pourra être reconsidérée en cas de très bonne réponse.",
    clinicalPearl: "GIST métastatique inaugurale = Imatinib 400 mg/j en 1ère intention. Chirurgie rediscutée secondairement."
  },
  {
    id: 'q-cas-gist-3-2',
    courseId: 'crs-gastro-gist',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Après 2 ans de rémission sous Imatinib, réapparition d'une progression tumorale hépatique nodulaire. Quel mécanisme moléculaire est le plus fréquemment en cause ?",
    options: [
      "Apparition de métastases ganglionnaires",
      "Acquisition de mutations secondaires dans le domaine kinase de KIT (exon 13, 14 ou 17)",
      "Arrêt spontané de l'expression de CD117",
      "Échappement hormonal aux androgènes",
      "Transformation en adénocarcinome"
    ],
    correctAnswers: [1],
    explanation: "La résistance secondaire à l'Imatinib est liée dans la grande majorité des cas à des mutations secondaires acquises de KIT (notamment sur l'exon 17 ou 13/14), justifiant le passage à un ITK de 2ème ligne (Sunitinib / Sutent).",
    clinicalPearl: "Résistance secondaire à l'Imatinib = Mutations secondaires de KIT (exons 13, 14 ou 17) -> Relais par Sunitinib (2ème ligne)."
  },

  // Cas 4 : Patiente de 28 ans, nodules gastriques multiples
  {
    id: 'q-cas-gist-4-1',
    courseId: 'crs-gastro-gist',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Femme de 28 ans) - Découverte de nodules sous-muqueux gastriques multiples. Antécédent d'exérèse d'un chondrome pulmonaire à 22 ans. Quel syndrome syndromique devez-vous évoquer en priorité ?",
    options: [
      "Neurofibromatose de type 1",
      "Triade de Carney (GIST gastriques multiples + Chondrome pulmonaire + Paragangliome)",
      "Syndrome de Lynch",
      "Polypose adénomateuse de Gardner",
      "Syndrome de Peutz-Jeghers"
    ],
    correctAnswers: [1],
    explanation: "L'association GIST gastriques multiples + chondrome pulmonaire chez une femme jeune est pathognomonique de la triade de Carney. Un paragangliome doit être recherché.",
    clinicalPearl: "GIST multiples + Chondrome pulmonaire opéré = Triade de Carney (rechercher un paragangliome !)."
  },
  {
    id: 'q-cas-gist-4-2',
    courseId: 'crs-gastro-gist',
    questionNumber: 34,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - Quelle est la stratégie chirurgicale préconisée pour les GIST gastriques dans la triade de Carney ?",
    options: [
      "Résections cunéiformes limitées itératives avec préservation maximale du parenchyme gastrique",
      "Gastrectomie totale de principe d'emblée",
      "Imatinib à vie sans aucune chirurgie",
      "Abstention complète",
      "Chimio-embolisation gastrique"
    ],
    correctAnswers: [0],
    explanation: "Dans la triade de Carney, les GIST ont une évolution indolente et sont multifocales. On privilégie les résections en coin limitées répétées afin d'éviter la morbidité nutritionnelle d'une gastrectomie totale chez une femme jeune.",
    clinicalPearl: "GIST dans la triade de Carney : Résections limitées d'épargne gastrique chaque fois que possible."
  },

  // Cas 5 : Homme de 50 ans, occlusion sur tumeur du jéjunum
  {
    id: 'q-cas-gist-5-1',
    courseId: 'crs-gastro-gist',
    questionNumber: 35,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Homme de 50 ans) - Occlusion mécanique du grêle sur volumineuse tumeur jéjunale de 7 cm. Lors de la laparotomie en urgence, quel impératif technique chirurgical est absolument fondamental ?",
    options: [
      "Réaliser un curage ganglionnaire étendu le long des vaisseaux mésentériques",
      "Manipuler la masse avec précaution pour éviter impérativement toute rupture de la pseudocapsule tumorale dans le péritoine",
      "Faire une biopsie peropératoire au trocart avant résection",
      "Appliquer de la chimiothérapie intrapéritonéale hyperthermique d'emblée",
      "Enlever la rate de principe"
    ],
    correctAnswers: [1],
    explanation: "La rupture peropératoire d'une GIST est une catastrophe oncologique qui provoque un ensemencement péritonéal diffus. L'exérèse monobloc atraumatique sans effraction tumorale est l'impératif technique suprême.",
    clinicalPearl: "GIST en chirurgie : Règle d'or = Ne JAMAIS rompre la pseudocapsule tumorale !"
  },
  {
    id: 'q-cas-gist-5-2',
    courseId: 'crs-gastro-gist',
    questionNumber: 36,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - L'analyse anatomopathologique montre : tumeur jéjunale de 7 cm, index mitotique 7 mitoses / 50 HPF, résection R0 intacte. Quelle est l'indication thérapeutique postopératoire ?",
    options: [
      "Surveillance clinique simple",
      "Traitement adjuvant par Imatinib (400 mg/j) pendant 3 ans validé en RCP",
      "Radiothérapie du lit tumoral",
      "Chimiothérapie par FOLFOX pendant 6 mois",
      "Aucun traitement car la résection était complète"
    ],
    correctAnswers: [1],
    explanation: "Localisation grélique + taille > 5 cm (7 cm) + mitoses > 5/50 HPF (7) = Groupe à très haut risque de récidive selon Miettinen. Le traitement adjuvant par Imatinib 400 mg/j pendant 3 ans est formellement indiqué.",
    clinicalPearl: "GIST grélique > 5 cm avec mitoses > 5/50 HPF = Haut risque indiscutable -> Imatinib adjuvant 3 ans."
  }
];

export const GIST_RESOURCES: CourseResource[] = [
  {
    id: 'res-gist-mindmap',
    courseId: 'crs-gastro-gist',
    type: 'Resume',
    title: 'Fiche Synthèse : Tumeurs Stromales Gastro-Intestinales (GIST)',
    contentMarkdown: `## GIST : L'Essentiel pour le Résidanat
*Support de cours – Pr MOUSSAOUI, Faculté de Médecine de Blida 2026*

### 1. Histogenèse & Marqueurs
- Développées aux dépens des **cellules interstitielles de Cajal** (pacemaker du tube digestif).
- **Immunohistochimie (IHC)** :
  - **CD117 (c-KIT)** : Positif dans 95 % des cas.
  - **DOG-1** : Positif dans 95-98 % des cas (reste positif si CD117 -).
  - **CD34** : Positif dans 60-70 %.
  - **Desmine & S100** : Négatifs (élimine léiomyome et schwannome).

### 2. Topographie & Révélation Clinique
- **Localisation** :
  - *Estomac* : 60 % (meilleur pronostic).
  - *Grêle* : 30 % (pronostic plus péjoratif).
  - *Rectum/Duodénum* : 5-10 %.
- **Clinique** : **Hémorragie digestive** (méléna, hématémèse, anémie) dans > 50 % des cas. Masse palpable, douleur, découverte fortuite.

### 3. Évaluation Pronostique (Classification de Miettinen / AFIP)
Repose sur trois critères fondamentaux :
1. **Taille tumorale** : ≤ 2 cm, 2-5 cm, 5-10 cm, > 10 cm.
2. **Index mitotique** : ≤ 5 ou > 5 mitoses / 50 champs à fort grandissement (HPF).
3. **Localisation anatomique** : Estomac (faible risque) vs Grêle/Rectum (haut risque).

### 4. Prise en Charge Thérapeutique
- **Chirurgie R0** :
  - Traitement curatif de référence des formes localisées.
  - Exérèse monobloc complète **sans rupture tumorale** (hantise de la dissémination péritonéale).
  - **Pas de curage ganglionnaire systématique** (métastases ganglionnaires < 1 %).
- **Thérapie Ciblée : Imatinib (Glivec)** :
  - Inhibiteur de tyrosine kinase (c-KIT et PDGFRA).
  - *Adjuvant* : 400 mg/j pendant **3 ans** pour les GIST à haut risque de récidive.
  - *Néoadjuvant* : Pour réduire la taille avant chirurgie mutilante.
  - *Métastatique* : 400 mg/j en 1ère ligne (800 mg/j si mutation exon 9 de KIT).
- **Résistance** : GIST radio- et chimio-résistantes aux agents conventionnels. Sunitinib (Sutent) en 2ème ligne si résistance secondaire.`,
    author: 'Pr MOUSSAOUI - Faculté de Médecine de Blida'
  },
  {
    id: 'res-gist-mnemo',
    courseId: 'crs-gastro-gist',
    type: 'Astuce',
    title: 'Mnémotechniques : GIST',
    contentMarkdown: `### 💡 Mnémotechniques Clés (GIST - Blida)

1. **Diagnostic IHC : « KIT et DOG »**
   - **KIT** (CD117) + **DOG-1** = Meilleurs amis du diagnostic (95 %).

2. **Triade de Carney : « C.P.G »**
   - **C** : **C**hondrome pulmonaire
   - **P** : **P**arangangliome extra-surrénalien
   - **G** : **G**IST gastriques multiples

3. **Pronostic Miettinen : « T.I.M »**
   - **T** : **T**aille (> 5 cm)
   - **I** : **I**ndex mitotique (> 5 / 50 HPF)
   - **M** : **M**auvais site (Grêle / Rectum pire que l'Estomac)

4. **Chirurgie : « Zéro Ganglion, Zéro Rupture »**
   - Pas de curage ganglionnaire systématique
   - Ne JAMAIS rompre la pseudocapsule tumorale !

5. **Adjuvant : « 3 ans de Glivec »**
   - Essai SSG XVIII : 36 mois d'Imatinib à 400 mg/j pour le haut risque.`,
    author: 'Pr MOUSSAOUI - Blida'
  }
];
