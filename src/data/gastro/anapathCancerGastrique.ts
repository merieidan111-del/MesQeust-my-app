import { Question, CourseResource } from '../../types/medical';

export const ANAPATH_CANCER_GASTRIQUE_QUESTIONS: Question[] = [
  {
    id: 'q-anap-cg-01',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la localisation préférentielle de l'infection à Helicobacter pylori dans la gastrite chronique ?",
    options: ["Fundus", "Antre gastrique", "Cardia", "Corps gastrique", "Pylore"],
    correctAnswers: [1],
    explanation: "La gastrite à H. pylori (type B) siège préférentiellement au niveau de l'antre gastrique. L'infection est acquise par voie interhumaine directe et provoque une inflammation chronique avec des poussées d'activité.",
    clinicalPearl: "Gastrite à H. pylori (type B) : Siège préférentiel au niveau de l'antre gastrique."
  },
  {
    id: 'q-anap-cg-02',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification de Sydney, quel critère n'est pas systématiquement évalué ?",
    options: [
      "L'intensité de l'inflammation lymphoplasmocytaire",
      "L'atrophie glandulaire",
      "La présence de métaplasie intestinale",
      "Le degré de fibrose sous-muqueuse",
      "La présence d'amas lymphoïdes"
    ],
    correctAnswers: [3],
    explanation: "La classification de Sydney évalue le type de muqueuse, l'intensité de l'inflammation, l'atrophie, l'activité (PNN), la métaplasie intestinale, la dysplasie, les amas lymphoïdes et la présence d'Hp. La fibrose sous-muqueuse n'est pas un critère standard.",
    clinicalPearl: "Critères de Sydney : inflammation, activité (PNN), atrophie, métaplasie et H. pylori."
  },
  {
    id: 'q-anap-cg-03',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le mécanisme principal par lequel Helicobacter pylori favorise la cancérogenèse gastrique ?",
    options: [
      "Production directe d'aflatoxines",
      "Sécrétion d'une toxine qui bloque l'apoptose",
      "Inflammation chronique → stress oxydatif → altérations de l'ADN",
      "Induction d'une hypergastrinémie permanente",
      "Inhibition de l'expression de HER2"
    ],
    correctAnswers: [2],
    explanation: "Hp induit une cascade inflammatoire avec production de radicaux libres et d'oxyde nitrique qui endommagent l'ADN. Il altère également les voies de signalisation et inactive des gènes suppresseurs (TP73, p27).",
    clinicalPearl: "Hp : Inflammation chronique -> stress oxydatif -> altérations de l'ADN (cascade de Correa)."
  },
  {
    id: 'q-anap-cg-04',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la gastrite auto-immune (type A), quelle est la localisation des lésions atrophiques ?",
    options: ["Antre gastrique exclusivement", "Fundus et corps gastrique", "Cardia et fundus", "Pylore et antre", "Toute la muqueuse gastrique"],
    correctAnswers: [1],
    explanation: "La gastrite auto-immune (maladie de Biermer) atteint le fundus et le corps gastrique, l'antre étant épargné. Les anticorps anti-cellules pariétales entraînent une atrophie fundique sévère et une hyperplasie des cellules ECL.",
    clinicalPearl: "Gastrite type A (auto-immune/Biermer) : Atteinte élective du fundus et corps, antre respecté."
  },
  {
    id: 'q-anap-cg-05',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la principale complication néoplasique de la gastrite auto-immune ?",
    options: [
      "Lymphome de type MALT",
      "Adénocarcinome de type intestinal",
      "Tumeur neuroendocrine de type 1",
      "GIST",
      "Carcinome épidermoïde"
    ],
    correctAnswers: [1],
    explanation: "La gastrite auto-immune évolue vers une atrophie fundique avec métaplasie intestinale, qui peut se compliquer d'un adénocarcinome de type intestinal via la dysplasie. Elle donne aussi des TNE type 1 par hyperplasie ECL.",
    clinicalPearl: "Gastrite type A -> Risque d'adénocarcinome intestinal et de TNE type 1."
  },
  {
    id: 'q-anap-cg-06',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un ulcère gastrique chronique doit faire l'objet de biopsies multiples. Combien de prélèvements sont recommandés ?",
    options: ["2 à 3 biopsies", "4 à 6 biopsies", "8 à 10 biopsies", "12 à 15 biopsies", "Une seule biopsie centrée sur l'ulcère"],
    correctAnswers: [2],
    explanation: "Devant un ulcère gastrique, il faut réaliser 8 à 10 biopsies sur toute la circonférence de la lésion, en prélevant les berges et le fond de l'ulcère pour éliminer un adénocarcinome ou un lymphome.",
    clinicalPearl: "Ulcère gastrique : 8 à 10 biopsies systématiques sur les 4 quadrants des berges et le fond."
  },
  {
    id: 'q-anap-cg-07',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi ces affirmations concernant l'ulcère gastrique, laquelle est fausse ?",
    options: [
      "Il est lié à Hp dans 70 à 80 % des cas",
      "Il peut se cancériser",
      "Un ulcère duodénal ne se cancérise jamais",
      "Les AINS sont une cause fréquente",
      "La biopsie est inutile si l'aspect endoscopique est bénin"
    ],
    correctAnswers: [4],
    explanation: "Même si l'ulcère a un aspect bénin à l'endoscopie, des biopsies systématiques sont indispensables car un adénocarcinome ulcéré peut mimer un ulcère bénin. L'ulcère duodénal, en revanche, ne se cancérise jamais.",
    clinicalPearl: "La biopsie est toujours obligatoire sur un ulcère gastrique, quel que soit l'aspect visuel."
  },
  {
    id: 'q-anap-cg-08',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le type histologique le plus fréquent des polypes gastriques ?",
    options: ["Adénome tubuleux", "Polype hyperplasique", "Polype inflammatoire", "Polype adénomateux villeux", "Polype fibroïde"],
    correctAnswers: [1],
    explanation: "90 % des polypes gastriques sont des polypes non tumoraux, principalement hyperplasiques (mélange de glandes kystiques et infiltrat inflammatoire). Les adénomes ne représentent que 10 %.",
    clinicalPearl: "Polypes gastriques : 90 % hyperplasiques bénins, 10 % adénomes à potentiel malin."
  },
  {
    id: 'q-anap-cg-09',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel critère n'augmente pas le risque de dégénérescence d'un adénome gastrique ?",
    options: ["Taille ≥ 2 cm", "Architecture villeuse", "Dysplasie de haut grade", "Localisation fundique", "Dysplasie de bas grade associée"],
    correctAnswers: [3],
    explanation: "Les facteurs de risque de dégénérescence d'un adénome gastrique sont : la taille ≥ 2 cm, l'architecture villeuse, la dysplasie de haut grade. La localisation fundique n'est pas un facteur pronostique de dégénérescence.",
    clinicalPearl: "Risque de dégénérescence sur adénome : taille ≥ 2 cm, composante villeuse, dysplasie de haut grade."
  },
  {
    id: 'q-anap-cg-10',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La dysplasie de haut grade dans un adénome gastrique se caractérise par :",
    options: [
      "Noyaux limités à la moitié inférieure des cellules",
      "Stratification nucléaire atteignant le pôle apical",
      "Mucosécrétion abondante",
      "Absence d'anisocytose",
      "Architecture glandulaire régulière"
    ],
    correctAnswers: [1],
    explanation: "La dysplasie de haut grade montre une stratification nucléaire atteignant le pôle apical des cellules, une perte de polarité, une anisocytose marquée, une perte de mucosécrétion et des bourgeonnements complexes.",
    clinicalPearl: "Dysplasie de haut grade : Stratification nucléaire apicale totale, perte de polarité et mitoses anormales."
  },
  {
    id: 'q-anap-cg-11',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le type macroscopique de la linite plastique selon la classification de Borrmann ?",
    options: ["Type 1 – végétant", "Type 2 – ulcérant", "Type 3 – érosif", "Type 4 – infiltrant", "Type 5 – mixte"],
    correctAnswers: [3],
    explanation: "La linite plastique (adénocarcinome à cellules indépendantes) correspond au type 4 de Borrmann : infiltration diffuse de la paroi avec induration blanchâtre sans masse végétante. L'estomac devient rigide (« en bois de pipe »).",
    clinicalPearl: "Borrmann IV = Type infiltrant diffus = Linite plastique."
  },
  {
    id: 'q-anap-cg-12',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La linite plastique est caractérisée microscopiquement par :",
    options: [
      "Des structures tubulaires bien différenciées",
      "Plus de 50 % de cellules isolées ou en petits nids",
      "Un stroma lymphoïde abondant",
      "Des cellules de type « bague à chaton » uniquement",
      "Une architecture papillaire prédominante"
    ],
    correctAnswers: [1],
    explanation: "La linite plastique est un adénocarcinome à cellules peu cohésives (plus de 50 % de cellules isolées ou petits amas). Ces cellules refoulent souvent leur noyau en périphérie par une vacuole mucineuse (bague à chaton).",
    clinicalPearl: "Linite plastique : > 50 % de cellules isolées peu cohésives en bague à chaton dans un stroma fibreux dense."
  },
  {
    id: 'q-anap-cg-13',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la fréquence des lymphomes gastriques de type MALT parmi les cancers gastriques ?",
    options: ["< 1 %", "Environ 5 %", "15 %", "30 %", "50 %"],
    correctAnswers: [1],
    explanation: "Les lymphomes gastriques représentent environ 5 % des tumeurs malignes de l'estomac. Les adénocarcinomes dominent largement avec 90 %, suivis des TNE (3 %) et des GIST (2 %).",
    clinicalPearl: "Fréquence des tumeurs gastriques : Adénocarcinomes 90 %, Lymphomes MALT 5 %, TNE 3 %, GIST 2 %."
  },
  {
    id: 'q-anap-cg-14',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la lésion histologique caractéristique du lymphome MALT gastrique ?",
    options: [
      "Plages de cellules fusiformes",
      "Lésions lymphoépithéliales",
      "Cellules en bague à chaton",
      "Nids de cellules endocrines",
      "Fibres skéinoïdes"
    ],
    correctAnswers: [1],
    explanation: "Le lymphome MALT gastrique est caractérisé par l'infiltration et la destruction des structures glandulaires gastriques par les cellules lymphoïdes B tumorales marginales, formant des lésions lymphoépithéliales.",
    clinicalPearl: "Signature histologique du lymphome MALT : Lésions lymphoépithéliales."
  },
  {
    id: 'q-anap-cg-15',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans quel pourcentage des cas le lymphome MALT gastrique régresse-t-il après éradication de Helicobacter pylori ?",
    options: ["10 %", "30 %", "50 %", "70 %", "90 %"],
    correctAnswers: [3],
    explanation: "L'éradication de Hp entraîne une régression complète du lymphome MALT gastrique dans environ 70 % des cas pour les formes localisées de bas grade.",
    clinicalPearl: "Lymphome MALT gastrique de bas grade : 70 % de rémission après simple éradication d'H. pylori."
  },
  {
    id: 'q-anap-cg-16',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les tumeurs neuroendocrines gastriques de type 1 sont associées à :",
    options: [
      "Une infection à Hp",
      "Une gastrite auto-immune atrophique",
      "Un syndrome de Zollinger-Ellison",
      "Une NEM 1",
      "Un adénome gastrique"
    ],
    correctAnswers: [1],
    explanation: "Les TNE gastriques de type 1 sont associées à la gastrite auto-immune atrophique (achlorhydrie, hypergastrinémie réactionnelle stimulant les cellules ECL). Le type 2 est associé au syndrome de Zollinger-Ellison / NEM 1, le type 3 est sporadique.",
    clinicalPearl: "TNE gastrique : Type 1 = Gastrite auto-immune de Biermer (bon pronostic)."
  },
  {
    id: 'q-anap-cg-17',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel marqueur immunohistochimique est positif dans plus de 90 % des GIST ?",
    options: ["HER2", "CD20", "CD117 (Kit)", "Chromogranine A", "CK7"],
    correctAnswers: [2],
    explanation: "Les GIST (tumeurs stromales gastro-intestinales) expriment le CD117 (c-kit) dans plus de 90 % des cas. Ce récepteur tyrosine kinase est la cible thérapeutique de l'imatinib (Glivec). Le DOG1 est également positif.",
    clinicalPearl: "GIST = CD117 (Kit) positif et DOG1 positif."
  },
  {
    id: 'q-anap-cg-18',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel traitement est indiqué pour une GIST non résécable ou métastatique ?",
    options: ["Chimiothérapie par 5-FU", "Imatinib (Glivec)", "Trastuzumab", "Radiothérapie exclusive", "Corticothérapie"],
    correctAnswers: [1],
    explanation: "L'imatinib est un inhibiteur sélectif de la tyrosine kinase c-kit et PDGFRα. Il est le traitement de référence des GIST non résécables ou métastatiques.",
    clinicalPearl: "GIST métastatique ou inopérable : Imatinib (Glivec)."
  },
  {
    id: 'q-anap-cg-19',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quels sont les deux principaux facteurs pronostiques des GIST ?",
    options: [
      "Âge et sexe",
      "Taille et index mitotique",
      "HER2 et Ki67",
      "Localisation et type histologique",
      "Stade pTNM et statut MSI"
    ],
    correctAnswers: [1],
    explanation: "Le risque de récidive et d'agressivité des GIST est évalué selon la classification de Miettinen/Fletcher par la taille de la tumeur et l'index mitotique (nombre de mitoses par 50 champs à fort grossissement).",
    clinicalPearl: "Pronostic des GIST : Taille tumorale + Index mitotique (par 50 champs)."
  },
  {
    id: 'q-anap-cg-20',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le statut HER2 dans le cancer gastrique est évalué par :",
    options: [
      "PCR simple",
      "Immunohistochimie et/ou FISH/SISH",
      "Cytologie en phase liquide",
      "Élisa sérique",
      "Biopsie hépatique systématique"
    ],
    correctAnswers: [1],
    explanation: "Le statut HER2 est déterminé par IHC (score 0 à 3+) et complété par hybridation in situ (FISH ou SISH) pour les scores 2+. Les adénocarcinomes gastriques métastatiques HER2+ relèvent du trastuzumab (Herceptin).",
    clinicalPearl: "Statut HER2 : IHC complétée par FISH/SISH (indication du Trastuzumab en stade métastatique)."
  },
  {
    id: 'q-anap-cg-21',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel facteur histopronostique est associé à un meilleur pronostic dans l'adénocarcinome gastrique ?",
    options: [
      "Présence d'emboles vasculaires",
      "Infiltration des filets nerveux",
      "Adénocarcinome à stroma lymphoïde",
      "Statut HER2 positif",
      "Carcinome à cellules indépendantes"
    ],
    correctAnswers: [2],
    explanation: "L'adénocarcinome médullaire à stroma lymphoïde (souvent associé à une instabilité des microsatellites MSI ou EBV) est de meilleur pronostic en raison de la réponse immunitaire antitumorale intense.",
    clinicalPearl: "Adénocarcinome à stroma lymphoïde (MSI+) : Meilleur pronostic global."
  },
  {
    id: 'q-anap-cg-22',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La survie à 5 ans du cancer gastrique toutes formes confondues est d'environ :",
    options: ["5 %", "10 à 20 %", "30 %", "50 %", "70 %"],
    correctAnswers: [1],
    explanation: "Le cancer gastrique a un mauvais pronostic avec une survie globale à 5 ans de 10 à 20 % en raison du diagnostic souvent tardif au stade avancé. Il occupe le 5e rang des cancers en Algérie.",
    clinicalPearl: "Survie globale du cancer gastrique à 5 ans = 10 à 20 %."
  },
  {
    id: 'q-anap-cg-23',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la localisation la plus fréquente de l'adénocarcinome gastrique ?",
    options: ["Cardia", "Fundus", "Corps gastrique", "Région antropylorique", "Petite courbure"],
    correctAnswers: [3],
    explanation: "L'adénocarcinome gastrique siège préférentiellement dans la région antropylorique (50 % des cas), puis le corps (25 %) et la région cardiotubérositaire (25 %).",
    clinicalPearl: "Localisation : Antre et région antropylorique dans 50 % des cas."
  },
  {
    id: 'q-anap-cg-24',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le risque de cancer gastrique après résection gastrique pour ulcère (moignon gastrique) ?",
    options: ["Nul", "Significatif après 15 ans", "Maximal dans les 5 premières années", "Identique à la population générale", "Plus élevé chez l'homme que chez la femme"],
    correctAnswers: [1],
    explanation: "Le risque de cancer du moignon gastrique n'est significatif qu'après un délai de 15 ans ou plus, lié au reflux biliaire chronique et à l'hypochlorhydrie post-gastrectomie.",
    clinicalPearl: "Cancer du moignon gastrique : Risque accru après 15 à 20 ans d'évolution."
  },
  {
    id: 'q-anap-cg-25',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lequel de ces énoncés concernant le rôle du pathologiste dans le cancer gastrique est faux ?",
    options: [
      "Diagnostiquer l'infection à Hp sur biopsies",
      "Confirmer le cancer sur biopsies",
      "Évaluer le staging pTNM sur pièce opératoire",
      "Réaliser l'endoscopie digestive haute",
      "Évaluer la qualité de l'exérèse chirurgicale"
    ],
    correctAnswers: [3],
    explanation: "Le pathologiste n'effectue pas l'endoscopie digestive haute (qui relève du gastro-entérologue), mais analyse les biopsies et pièces opératoires, évalue le pTNM, les marges R0/R1 et les marqueurs IHC (HER2, MSI).",
    clinicalPearl: "Rôle du pathologiste : Diagnostic histologique, phénotypage, pTNM, marges de résection et biomarqueurs."
  },

  // -------------------------------------------------------------
  // 5 Cas Cliniques (15 questions)
  // -------------------------------------------------------------
  // Cas 1
  {
    id: 'q-anap-cg-c1-1',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Gastrite chronique et surveillance : Mr. A., 52 ans, tabagique, épigastralgies chroniques. FOGD : muqueuse érythémateuse avec érosions antrales. Biopsies : inflammation lymphoplasmocytaire dense de l'antre, atrophie modérée, métaplasie intestinale focale et bactéries spiralées (Hp+).\n\nSelon la classification de Sydney, quel élément n'est pas décrit dans ce compte rendu ?",
    options: [
      "Intensité de l'inflammation lymphoplasmocytaire",
      "Atrophie glandulaire",
      "Activité (polynucléaires)",
      "Présence d'amas lymphoïdes",
      "Métaplasie intestinale"
    ],
    correctAnswers: [2],
    explanation: "Le compte rendu ne précise pas l'activité (présence de PNN). L'activité est un critère cardinal du système de Sydney évaluant le caractère actif de la gastrite.",
    clinicalPearl: "Activité de la gastrite = Présence de PNN infiltrant le chorion et l'épithélium."
  },
  {
    id: 'q-anap-cg-c1-2',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Quel est le risque évolutif majeur de cette lésion atrophique métaplasique ?",
    options: ["Lymphome MALT", "Adénocarcinome gastrique de type intestinal", "Tumeur neuroendocrine", "GIST", "Ulcère duodénal"],
    correctAnswers: [1],
    explanation: "La gastrite chronique atrophique à Hp avec métaplasie intestinale est la lésion précancéreuse majeure conduisant à l'adénocarcinome de type intestinal selon la cascade de Correa.",
    clinicalPearl: "Métaplasie intestinale sur gastrite atrophique = Risque d'adénocarcinome gastrique intestinal."
  },
  {
    id: 'q-anap-cg-c1-3',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Quelle prise en charge est recommandée en première intention chez Mr. A. ?",
    options: [
      "Résection gastrique partielle",
      "Traitement anti-Hp et contrôle endoscopique",
      "Chimiothérapie préventive",
      "Biopsie hépatique",
      "Antiacides seuls"
    ],
    correctAnswers: [1],
    explanation: "L'éradication d'Helicobacter pylori (quadrithérapie) suivie d'un contrôle d'éradication et d'une surveillance endoscopique des lésions atrophiques et métaplasiques est la règle.",
    clinicalPearl: "Éradication d'H. pylori + surveillance endoscopique des lésions précancéreuses."
  },

  // Cas 2
  {
    id: 'q-anap-cg-c2-1',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Ulcère gastrique et cancer : Mme L., 65 ans, épigastralgie intense, amaigrissement de 6 kg en 3 mois. FOGD : ulcère de la petite courbure de 2,5 cm à bords irréguliers et surélevés. Biopsies : adénocarcinome bien différencié tubuleux infiltrant la sous-muqueuse.\n\nQuel est le type macroscopique de Borrmann le plus probable ?",
    options: ["Type 1 – végétant", "Type 2 – ulcérant", "Type 3 – érosif", "Type 4 – infiltrant", "Type 5 – mixte"],
    correctAnswers: [1],
    explanation: "L'ulcère à bords surélevés et irréguliers correspond au type 2 de Borrmann (forme ulcérée). Borrmann 1 est bourgeonnant, 3 est ulcéro-infiltrant, 4 est infiltrant diffus.",
    clinicalPearl: "Borrmann 2 = Forme ulcérée à bords bourgeonnants surélevés."
  },
  {
    id: 'q-anap-cg-c2-2',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : L'examen de la pièce de gastrectomie montre une infiltration de la sous-muqueuse sans atteinte de la musculeuse. Quel est le stade pT selon la classification pTNM ?",
    options: ["pT1a", "pT1b", "pT2", "pT3", "pT4"],
    correctAnswers: [1],
    explanation: "pT1a = infiltration limitée à la muqueuse (lamina propria ou musculaire muqueuse). pT1b = infiltration de la sous-muqueuse. pT2 = atteinte de la musculeuse.",
    clinicalPearl: "pT1a = muqueuse ; pT1b = sous-muqueuse ; pT2 = musculeuse propre."
  },
  {
    id: 'q-anap-cg-c2-3',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 31,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : Quel examen doit être systématiquement réalisé sur cette pièce opératoire pour guider les options ciblées en cas de dissémination ?",
    options: ["Recherche de mutation KRAS", "Statut HER2", "Recherche de MSI", "Recherche de translocation ALK", "Dosage de la chromogranine"],
    correctAnswers: [1],
    explanation: "Le statut HER2 doit être évalué par IHC/FISH sur tout adénocarcinome gastrique pour déterminer l'éligibilité au trastuzumab.",
    clinicalPearl: "Évaluation du statut HER2 systématique sur adénocarcinome gastrique."
  },

  // Cas 3
  {
    id: 'q-anap-cg-c3-1',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 32,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Linite plastique : Mme S., 48 ans, dyspepsie depuis 6 mois, satiété précoce, perte de 8 kg. FOGD : paroi gastrique rigide, plis épaissis sans bourgeonnement exophytique. Biopsies : carcinome à cellules peu cohésives en bague à chaton.\n\nQuel est le diagnostic le plus probable ?",
    options: [
      "Adénocarcinome tubuleux bien différencié",
      "Linite plastique (adénocarcinome à cellules indépendantes)",
      "Lymphome MALT",
      "Tumeur neuroendocrine",
      "GIST"
    ],
    correctAnswers: [1],
    explanation: "L'estomac rigide avec cellules en bague à chaton dissociées correspond typiquement à la linite plastique (Borrmann IV / Lauren diffus).",
    clinicalPearl: "Linite plastique : paroi épaissie rigide en bois de pipe + cellules indépendantes en bague à chaton."
  },
  {
    id: 'q-anap-cg-c3-2',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 33,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : Pourquoi ce type histologique est-il de mauvais pronostic ?",
    options: [
      "Il est toujours métastatique au diagnostic",
      "L'exérèse chirurgicale est rarement curative",
      "Il est très chimiosensible mais résiste à la chirurgie",
      "Il est toujours HER2 positif",
      "Il touche uniquement les sujets âgés"
    ],
    correctAnswers: [1],
    explanation: "L'infiltration sous-muqueuse diffuse dépasse largement les limites macroscopiques visibles, rendant l'exérèse R0 difficile, avec une chimiorésistance fréquente.",
    clinicalPearl: "Linite plastique : Infiltration diffuse insidieuse avec marges saines difficiles à obtenir."
  },
  {
    id: 'q-anap-cg-c3-3',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 34,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : Quel est le traitement chirurgical de référence de la linite plastique localisée résécable ?",
    options: [
      "Gastrectomie totale avec curage",
      "Imatinib",
      "Trastuzumab seul",
      "Radiothérapie exclusive",
      "Éradication de Hp"
    ],
    correctAnswers: [0],
    explanation: "La gastrectomie totale avec curage ganglionnaire D2 est le traitement chirurgical de référence en raison de la diffusion microscopique pariétale.",
    clinicalPearl: "Linite plastique résécable = Gastrectomie totale avec curage ganglionnaire D2."
  },

  // Cas 4
  {
    id: 'q-anap-cg-c4-1',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 35,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Lymphome MALT gastrique : Mr. K., 55 ans, dyspepsie chronique. FOGD : muqueuse érythémateuse avec plis épaissis de l'antre. Biopsies : infiltrat lymphoïde dense avec destruction glandulaire (lésions lymphoépithéliales). IHC : lymphome MALT de bas grade. Hp (+).\n\nQuel traitement est indiqué en première intention ?",
    options: [
      "Gastrectomie subtotale",
      "Chimiothérapie par R-CHOP",
      "Éradication de Helicobacter pylori",
      "Imatinib",
      "Radiothérapie exclusive"
    ],
    correctAnswers: [2],
    explanation: "Pour un lymphome MALT gastrique de bas grade localisé, l'éradication d'H. pylori est le traitement de première intention (70 % de rémission sans chimiothérapie ni chirurgie).",
    clinicalPearl: "Lymphome MALT gastrique bas grade stade IE : Traitement de 1ère intention = Éradication d'H. pylori."
  },
  {
    id: 'q-anap-cg-c4-2',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 36,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : Quelle est la lésion histologique pathognomonique de ce lymphome MALT ?",
    options: [
      "Nids de cellules fusiformes",
      "Lésions lymphoépithéliales",
      "Cellules en bague à chaton",
      "Hyperplasie des cellules ECL",
      "Fibres skéinoïdes"
    ],
    correctAnswers: [1],
    explanation: "Les lésions lymphoépithéliales (colonisation et destruction des cryptes gastriques par les lymphocytes néoplasiques) sont caractéristiques du lymphome MALT.",
    clinicalPearl: "Lésions lymphoépithéliales = Infiltration et destruction des cryptes par les lymphocytes B néoplasiques."
  },
  {
    id: 'q-anap-cg-c4-3',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 37,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : Quelle est l'évolution redoutée si le lymphome MALT n'est pas traité ?",
    options: [
      "Régression spontanée constante",
      "Transformation en lymphome B diffus à grandes cellules",
      "Transformation en adénocarcinome",
      "Métastases hépatiques précoces",
      "Évolution vers une GIST"
    ],
    correctAnswers: [1],
    explanation: "Le lymphome MALT de bas grade peut progresser et se transformer en lymphome B diffus à grandes cellules (LBDGC), haut grade agressif.",
    clinicalPearl: "Évolution du MALT non traité : Transformation en lymphome B diffus à grandes cellules."
  },

  // Cas 5
  {
    id: 'q-anap-cg-c5-1',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 38,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – GIST gastrique : Mr. D., 60 ans, découverte fortuite au scanner d'une tumeur de la grosse tubérosité de 4 cm. FOGD : masse sous-muqueuse arrondie bien limitée. Exérèse : prolifération fusocellulaire avec fibres skéinoïdes. IHC : CD117 (+).\n\nQuel est le diagnostic ?",
    options: [
      "Léiomyome",
      "GIST (tumeur stromale gastro-intestinale)",
      "Tumeur neuroendocrine",
      "Adénocarcinome",
      "Lymphome"
    ],
    correctAnswers: [1],
    explanation: "Masse sous-muqueuse fusocellulaire avec fibres skéinoïdes et CD117 (c-kit) positif = Tumeur stromale gastro-intestinale (GIST).",
    clinicalPearl: "Tumeur sous-muqueuse fusocellulaire CD117+ = GIST."
  },
  {
    id: 'q-anap-cg-c5-2',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 39,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Quels sont les deux facteurs pronostiques principaux de cette tumeur ?",
    options: [
      "Âge et sexe",
      "Taille et index mitotique",
      "HER2 et Ki67",
      "Localisation et type histologique",
      "Stade pTNM et statut MSI"
    ],
    correctAnswers: [1],
    explanation: "La taille tumorale (ici 4 cm) et l'index mitotique (par 50 champs) selon Miettinen définissent le risque de récidive et de métastase.",
    clinicalPearl: "Critères de Fletcher / Miettinen pour GIST : Taille + Nombre de mitoses / 50 champs."
  },
  {
    id: 'q-anap-cg-c5-3',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    questionNumber: 40,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Quel traitement est indiqué en cas d'inopérabilité ou de récidive métastatique ?",
    options: [
      "Chirurgie de rattrapage",
      "Imatinib (Glivec)",
      "Trastuzumab",
      "Radiothérapie",
      "Chimiothérapie par 5-FU"
    ],
    correctAnswers: [1],
    explanation: "L'imatinib (Glivec) bloque spécifiquement le récepteur tyrosine kinase c-kit muté des GIST.",
    clinicalPearl: "Inhibiteur de tyrosine kinase c-kit : Imatinib."
  }
];

export const ANAPATH_CANCER_GASTRIQUE_RESOURCES: CourseResource[] = [
  {
    id: 'res-anap-cg-mindmap',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    type: 'Resume',
    title: "Carte Mentale : Anatomie Pathologique du Cancer Gastrique (Dr G.IFAIDI)",
    contentMarkdown: `## 🧠 Carte Mentale : Anatomie Pathologique du Cancer Gastrique
**Dr G.IFAIDI – CHU Frantz Fanon Blida**

### 1. Lésions Précancéreuses
- **Gastrite chronique à H. pylori (type B)** : Antre gastrique, inflammation lymphoplasmocytaire, atrophie, métaplasie intestinale (séquence de Correa).
- **Gastrite auto-immune (type A)** : Fundus et corps, anticorps anti-cellules pariétales, risque d'adénocarcinome intestinal et TNE type 1.
- **Ulcère gastrique chronique** : 8 à 10 biopsies indispensables (berges + fond) pour éliminer un adénocarcinome ulcéré.
- **Moignon gastrique** : Risque accru après 15 ans d'une résection pour ulcère.
- **Adénomes gastriques** : 10 % des polypes, risque si taille ≥ 2 cm, architecture villeuse, dysplasie haut grade.

### 2. Tumeurs Malignes
- **Adénocarcinome (90%)** :
  - Forme tubuleuse, papillaire, mucineuse.
  - Classification de Borrmann (macroscopique) : 1 végétant, 2 ulcérant, 3 érosif, 4 infiltrant.
  - Classification de Lauren (histologique) : Intestinal (différencié, lié à Hp) vs Diffus (cellules indépendantes, linite plastique, mauvais pronostic).
- **Linite plastique (Borrmann 4)** : > 50 % de cellules peu cohésives en bague à chaton, infiltration diffuse, paroi rigide.
- **Lymphome MALT (5%)** : Lésions lymphoépithéliales, régression dans 70 % des cas après éradication d'H. pylori.
- **Tumeurs neuroendocrines (3%)** : Type 1 (gastrite auto-immune), Type 2 (Zollinger-Ellison), Type 3 (sporadique agressif).
- **GIST (2%)** : Prolifération fusocellulaire sous-muqueuse CD117+ (c-kit), traitement par Imatinib.

### 3. Facteurs Histopronostiques
- **pTNM** : pT1a (muqueuse), pT1b (sous-muqueuse), pT2 (musculeuse), pT3 (sous-séreuse), pT4 (séreuse/organes).
- **HER2** : Surexpression évaluée par IHC/FISH (prédictif de réponse au Trastuzumab).
- **Stroma lymphoïde** : Associé à un meilleur pronostic (profil MSI).`,
    author: 'Dr G.IFAIDI'
  },
  {
    id: 'res-anap-cg-mnemo',
    courseId: 'crs-gastro-anapath-cancer-gastrique',
    type: 'Astuce',
    title: "Mnémotechniques : Anapath Cancer Gastrique",
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (Dr G.IFAIDI)

1. **Borrmann (« VUEI »)** :
   - 1 : **V**égétant
   - 2 : **U**lcérant
   - 3 : **É**rosif (ulcéro-infiltrant)
   - 4 : **I**nfiltrant (linite)

2. **Classification pT Gastrique** :
   - **pT1a** : Muqueuse
   - **pT1b** : Sous-muqueuse
   - **pT2** : Musculeuse
   - **pT3** : Sous-séreuse
   - **pT4** : Séreuse / organes adjacents

3. **GIST (« 117 Dogs »)** :
   - CD**117** positif
   - **DOG**1 positif
   - Facteurs pronostiques : Taille + Index mitotique

4. **Lymphome MALT** :
   - Lésions **lymphoépithéliales**
   - 70 % de guérison par simple éradication d'**H. pylori**`,
    author: 'Dr G.IFAIDI'
  }
];
