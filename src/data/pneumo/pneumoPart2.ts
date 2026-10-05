import { Question, CourseResource } from '../../types/medical';

// Lesson 2: Cancers Broncho-Pulmonaires Primitifs
export const PNEUMO_LESSON_2_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-2-01',
    courseId: 'crs-pneumo-2',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le facteur de risque principal du cancer broncho-pulmonaire (CBP) est :",
    options: [
      "A) L'exposition professionnelle à l'amiante.",
      "B) La consommation d'alcool.",
      "C) Le tabagisme actif ou passif.",
      "D) Les antécédents familiaux de cancer du poumon.",
      "E) Une alimentation pauvre en fruits et légumes."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Le tabagisme est le facteur étiologique majeur, impliqué dans environ 80-90% des cas. Les autres options sont des facteurs de risque mineurs ou non principaux."
  },
  {
    id: 'q-pnm-2-02',
    courseId: 'crs-pneumo-2',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'épidémiologie du CBP en France, quelle(s) affirmation(s) est/sont exacte(s) ?",
    options: [
      "A) C'est la première cause de décès par cancer chez l'homme entre 45 et 64 ans.",
      "B) C'est le cancer le plus fréquent chez la femme.",
      "C) Il représente la deuxième cause de décès par cancer chez la femme après le cancer du sein.",
      "D) Son pronostic est indépendant de la rapidité de la prise en charge.",
      "E) Le tabagisme passif n'est pas un facteur de risque reconnu."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A et C. Ces données épidémiologiques sont classiques. Le cancer du sein est le plus fréquent chez la femme (B faux). Le pronostic dépend de la rapidité de prise en charge (D faux). Le tabagisme passif est un facteur de risque établi (E faux)."
  },
  {
    id: 'q-pnm-2-03',
    courseId: 'crs-pneumo-2',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La forme histologique la plus fréquente de CBP non à petites cellules (CBNPC) est :",
    options: [
      "A) Le carcinome à petites cellules.",
      "B) Le carcinome épidermoïde.",
      "C) L'adénocarcinome.",
      "D) Le carcinome à grandes cellules.",
      "E) Le carcinome indifférencié."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. L'adénocarcinome est la forme la plus fréquente de CBNPC, dépassant désormais le carcinome épidermoïde dans de nombreuses régions."
  },
  {
    id: 'q-pnm-2-04',
    courseId: 'crs-pneumo-2',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient fumeur de 60 ans consulte pour une toux traînante, une dyspnée et une turgescence jugulaire avec œdème cervico-facial prédominant le matin. Quel syndrome évoquez-vous en premier ?",
    options: [
      "A) Syndrome paranéoplasique.",
      "B) Syndrome de Pancoast-Tobias.",
      "C) Syndrome cave supérieur.",
      "D) Syndrome de Claude Bernard-Horner.",
      "E) Syndrome pleural."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. L'œdème de la base du cou et la turgescence jugulaire évoquent une compression de la veine cave supérieure par une tumeur ou des adénopathies médiastinales."
  },
  {
    id: 'q-pnm-2-05',
    courseId: 'crs-pneumo-2',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un hippocratisme digital récent avec arthralgies inflammatoires chez un patient suspect de CBP évoque :",
    options: [
      "A) Un syndrome paranéoplasique de type syndrome de Pierre-Marie.",
      "B) Une métastase osseuse.",
      "C) Une hypercalcémie paranéoplasique.",
      "D) Une hyponatrémie par SIADH.",
      "E) Un syndrome de Pancoast."
    ],
    correctAnswers: [0],
    explanation: "Correction : A. L'hippocratisme digital associé à des arthralgies (ostéo-arthropathie hypertrophiante pneumique) est un syndrome paranéoplasique classique (syndrome de Pierre-Marie)."
  },
  {
    id: 'q-pnm-2-06',
    courseId: 'crs-pneumo-2',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'examen clé pour le diagnostic positif et le staging locorégional d'un CBP central est :",
    options: [
      "A) La radiographie thoracique.",
      "B) Le scanner thoracique injecté.",
      "C) La TEP-TDM.",
      "D) L'endoscopie bronchique.",
      "E) La ponction transpariétale sous scanner."
    ],
    correctAnswers: [3],
    explanation: "Correction : D. La bronchoscopie permet la visualisation directe, le prélèvement histologique (biopsie) et l'évaluation de l'extension endobronchique."
  },
  {
    id: 'q-pnm-2-07',
    courseId: 'crs-pneumo-2',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour le bilan d'extension d'un CBNPC résécable d'emblée, quel examen est systématique pour rechercher des métastases cérébrales ?",
    options: [
      "A) TEP-TDM.",
      "B) Scanner cérébral injecté ou IRM cérébrale.",
      "C) Scintigraphie osseuse.",
      "D) Échographie abdominale.",
      "E) Scanner thoracique seul."
    ],
    correctAnswers: [1],
    explanation: "Correction : B. La recherche de métastases cérébrales est systématique avant traitement à visée curative, réalisée par scanner cérébral injecté ou mieux, par IRM cérébrale."
  },
  {
    id: 'q-pnm-2-08',
    courseId: 'crs-pneumo-2',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La TEP-TDM dans le bilan d'extension du CBP :",
    options: [
      "A) Est l'examen d'imagerie de première intention.",
      "B) Permet de guider une biopsie en cas d'hyperfixation isolée.",
      "C) Présente de nombreux faux positifs dans les adénopathies inflammatoires.",
      "D) Remplace systématiquement la scintigraphie osseuse.",
      "E) N'est pas indiquée en cas de maladie métastatique évidente d'emblée au scanner."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : B, C, D, E. La TEP-TDM est un examen de 2ème intention (A faux), après scanner. Elle guide les biopsies (B vrai), a une faible spécificité dans les adénopathies inflammatoires (C vrai), remplace la scintigraphie osseuse (D vrai) et est inutile si les métastases sont déjà évidentes (E vrai)."
  },
  {
    id: 'q-pnm-2-09',
    courseId: 'crs-pneumo-2',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la classification TNM (8ème édition), une tumeur T2 est définie par (plusieurs réponses possibles) :",
    options: [
      "A) Une taille > 3 cm mais ≤ 5 cm.",
      "B) Un envahissement de la plèvre viscérale.",
      "C) Une atélectasie lobaire.",
      "D) Un envahissement de la carène.",
      "E) Une taille > 5 cm mais ≤ 7 cm."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C. T2 : taille 3-5cm OU (taille ≤3cm) avec au moins un critère d'extension locale (envahissement plèvre viscérale, bronche principale, atélectasie lobaire). L'envahissement de la carène est T4 (D faux). Une taille >5cm est T3 (E faux)."
  },
  {
    id: 'q-pnm-2-10',
    courseId: 'crs-pneumo-2',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient a un CBNPC classé T1c N0 M0. Quel est son stade ?",
    options: [
      "A) Stade IA1.",
      "B) Stade IA2.",
      "C) Stade IA3.",
      "D) Stade IB.",
      "E) Stade IIA."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. T1c (tumeur >2cm et ≤3cm) + N0 + M0 = Stade IA3."
  },
  {
    id: 'q-pnm-2-11',
    courseId: 'crs-pneumo-2',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente un CBNPC avec un nodule tumoral séparé dans un lobe controlatéral. Selon la classification TNM, il s'agit de :",
    options: [
      "A) T4.",
      "B) N3.",
      "C) M1a.",
      "D) M1b.",
      "E) M1c."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. M1a désigne les métastases intrathoraciques (nodule(s) controlatéral(aux), nodules pleuraux, épanchements pleuraux/péricardiques malins)."
  },
  {
    id: 'q-pnm-2-12',
    courseId: 'crs-pneumo-2',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le bilan pré-thérapeutique d'un CBP, quelle(s) évaluation(s) est/sont systématique(s) ?",
    options: [
      "A) Score de performance (PS) de l'OMS.",
      "B) Évaluation nutritionnelle.",
      "C) Échocardiographie doppler.",
      "D) Encouragement au sevrage tabagique.",
      "E) Recherche de mutation EGFR pour tous les CBNPC."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D. Le PS, l'état nutritionnel et le sevrage tabagique sont systématiques. L'échocardiographie dépend du contexte cardio-vasculaire (C pas systématique). La recherche de mutation EGFR est réservée aux CBNPC non épidermoïdes avancés/métastatiques (E faux)."
  },
  {
    id: 'q-pnm-2-13',
    courseId: 'crs-pneumo-2',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour un CBNPC de stade IA (T1a N0 M0), le traitement de référence est :",
    options: [
      "A) La chimiothérapie adjuvante.",
      "B) La radiothérapie exclusive.",
      "C) La chirurgie (lobectomie) si l'état du patient le permet.",
      "D) La radio-chimiothérapie concomitante.",
      "E) La simple surveillance."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La chirurgie (résection anatomique type lobectomie) est le traitement curatif de référence pour les stades I et II opérables."
  },
  {
    id: 'q-pnm-2-14',
    courseId: 'crs-pneumo-2',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour un CBNPC de stade IIIB inopérable, le traitement de référence peut inclure :",
    options: [
      "A) Chirurgie première.",
      "B) Radio-chimiothérapie concomitante.",
      "C) Chimiothérapie exclusive.",
      "D) Immunothérapie exclusive.",
      "E) Radiothérapie exclusive."
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Pour les stades III inopérables (IIIB, certains IIIA), la radio-chimiothérapie concomitante est le standard thérapeutique à visée curative. Les autres options sont insuffisantes seules ou réservées à d'autres stades."
  },
  {
    id: 'q-pnm-2-15',
    courseId: 'crs-pneumo-2',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant le cancer à petites cellules (CPC) :",
    options: [
      "A) Il représente environ 15% des CBP.",
      "B) Le bilan d'extension doit systématiquement inclure une exploration de la moelle osseuse.",
      "C) Le traitement de première intention des formes localisées est la chirurgie.",
      "D) L'irradiation cérébrale prophylactique est indiquée en cas de rémission complète.",
      "E) Il s'agit d'une urgence thérapeutique."
    ],
    correctAnswers: [0, 1, 3, 4],
    explanation: "Correction : A, B, D, E. Le CPC est une urgence (E vrai), fréquent à 15% (A vrai). Le bilan inclut la moelle osseuse (hémogramme, +/- myélogramme) (B vrai). La PCI est indiquée en rémission (D vrai). Le traitement des formes localisées est la radio-chimiothérapie, pas la chirurgie (sauf cas très particuliers) (C faux)."
  },
  {
    id: 'q-pnm-2-16',
    courseId: 'crs-pneumo-2',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une hyponatrémie chez un patient atteint de CPC est très évocatrice de :",
    options: [
      "A) Métastases surrénaliennes.",
      "B) Sécrétion inappropriée d'ADH (SIADH).",
      "C) Insuffisance rénale.",
      "D) Hypercalcémie.",
      "E) Déshydratation."
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Le SIADH est un syndrome paranéoplasique classique du cancer à petites cellules, conduisant à une hyponatrémie par dilution."
  },
  {
    id: 'q-pnm-2-17',
    courseId: 'crs-pneumo-2',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la prise en charge symptomatique des métastases cérébrales, le traitement de référence de l'œdème péritumoral et des symptômes est :",
    options: [
      "A) Les anti-inflammatoires non stéroïdiens.",
      "B) La dexaméthasone.",
      "C) Le mannitol en première intention.",
      "D) La radiothérapie exclusive sans corticoïdes.",
      "E) La chirurgie systématique."
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Les corticoïdes (dexaméthasone) sont le traitement de référence pour réduire l'œdème cérébral péritumoral et soulager les symptômes neurologiques."
  },
  {
    id: 'q-pnm-2-18',
    courseId: 'crs-pneumo-2',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les soins palliatifs en oncologie thoracique (plusieurs réponses possibles) :",
    options: [
      "A) Ne débutent qu'après l'arrêt de tous les traitements antitumoraux.",
      "B) Sont des soins actifs et globaux.",
      "C) Peuvent être associés à des traitements antitumoraux à visée non curative.",
      "D) Doivent informer le patient sur la désignation d'une personne de confiance.",
      "E) Concernent uniquement le patient, pas son entourage."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D. Les soins palliatifs sont actifs et peuvent être débutés précocement, en parallèle de traitements antitumoraux (A faux). Ils s'adressent aussi à la famille (E faux). L'information sur la personne de confiance est un droit du patient (D vrai)."
  },
  {
    id: 'q-pnm-2-19',
    courseId: 'crs-pneumo-2',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une complication possible d'une ponction biopsie transpariétale sous scanner est :",
    options: [
      "A) Un pneumothorax dans environ 10% des cas.",
      "B) Une hémoptysie.",
      "C) Une infection pleurale.",
      "D) Une paralysie phrénique.",
      "E) Une réaction vagale."
    ],
    correctAnswers: [0, 1],
    explanation: "Correction : A et B. Le pneumothorax (souminime) et l'hémoptysie sont les complications classiques de ce geste. Les autres sont beaucoup plus rares."
  },
  {
    id: 'q-pnm-2-20',
    courseId: 'crs-pneumo-2',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La recherche d'une mutation du gène EGFR est indiquée :",
    options: [
      "A) Pour tous les CBP.",
      "B) Pour les carcinomes épidermoïdes avancés.",
      "C) Pour les CBNPC non épidermoïdes (adénocarcinomes) localement avancés ou métastatiques.",
      "D) Pour les CPC.",
      "E) Pour orienter vers un traitement par inhibiteur de tyrosine kinase (TKI)."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C et E. La recherche de mutations cibles (EGFR, ALK, ROS1...) est standard pour les CBNPC non épidermoïdes avancés/métastatiques (adénocarcinomes principalement) afin d'administrer une thérapie ciblée (TKI anti-EGFR si mutation présente)."
  },
  {
    id: 'q-pnm-2-21',
    courseId: 'crs-pneumo-2',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un score de performance OMS (PS) à 2 signifie que le patient :",
    options: [
      "A) Est asymptomatique.",
      "B) Est alité plus de 50% du temps.",
      "C) Est ambulatoire, capable de ses soins personnels, mais incapable de travailler.",
      "D) A besoin d'une assistance pour ses soins personnels.",
      "E) Est en phase terminale."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. PS 2 : Ambulatoire et capable de prendre soin de soi-même. Incapable de travailler. Alité moins de 50% du temps. C'est un point crucial pour décider de l'intensité des traitements."
  },
  {
    id: 'q-pnm-2-22',
    courseId: 'crs-pneumo-2',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En cas de syndrome cave supérieur aigu menaçant, un traitement interventionnel possible est :",
    options: [
      "A) La mise sous oxygénothérapie.",
      "B) La pose d'une endoprothèse vasculaire (stent).",
      "C) L'embolisation artérielle.",
      "D) La radiothérapie externe à visée décompressive.",
      "E) La chirurgie de dérivation en urgence."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B et D. En urgence, la pose d'un stent veineux permet une décompression rapide. La radiothérapie est également une option pour réduire la masse tumorale compressive. La chirurgie est trop lourde en urgence."
  },
  {
    id: 'q-pnm-2-23',
    courseId: 'crs-pneumo-2',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour la prise en charge d'une pleurésie carcinomateuse récidivante et symptomatique, on peut proposer :",
    options: [
      "A) Un simple drainage itératif.",
      "B) Une pleurodèse (talcage) chirurgicale ou par thoracoscopie.",
      "C) La pose d'un drain pleural tunnellisé à demeure.",
      "D) Une pleurectomie.",
      "E) Une chimiothérapie intra-pleurale."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B et C. La pleurodèse (pour symphyse pleurale) et le drain tunnellisé (pour drainage ambulatoire) sont les deux options standard pour contrôler les récidives. Le drainage itératif seul est insuffisant (A faux)."
  },
  {
    id: 'q-pnm-2-24',
    courseId: 'crs-pneumo-2',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de Pancoast-Tobias associe typiquement :",
    options: [
      "A) Une névralgie cervico-brachiale C8-D1.",
      "B) Un syndrome de Claude Bernard-Horner (myosis, ptosis, énophtalmie).",
      "C) Un œdème du membre supérieur.",
      "D) Des hémoptysies.",
      "E) Une dysphonie."
    ],
    correctAnswers: [0, 1],
    explanation: "Correction : A et B. La tumeur de Pancoast au sommet pulmonaire envahit le plexus brachial inférieur (C8, T1) et la chaîne sympathique cervicale, donnant ce tableau caractéristique."
  },
  {
    id: 'q-pnm-2-25',
    courseId: 'crs-pneumo-2',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors de l'annonce diagnostique et thérapeutique, la stratégie est définie :",
    options: [
      "A) Uniquement par l'oncologue.",
      "B) Sur la base de l'avis d'une Réunion de Concertation Pluridisciplinaire (RCP).",
      "C) En accord avec le patient et son médecin traitant.",
      "D) Sans tenir compte des directives anticipées du patient.",
      "E) Lors d'une consultation d'annonce dédiée."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E. La décision est collégiale (RCP), partagée avec le patient et son médecin traitant lors d'une consultation d'annonce. Les directives anticipées doivent être prises en compte (D faux)."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-2-c1-1',
    courseId: 'crs-pneumo-2',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Découverte fortuite\nM. Ahmed, 68 ans, ancien fumeur (40 PA), asymptomatique, subit un scanner thoracique pour un bilan d'emphysème. On découvre un nodule solitaire de 2.5 cm au lobe supérieur droit, spiculé, sans adénopathie visible.\n\nQ1. Quelle est la démarche diagnostique prioritaire ?",
    options: [
      "A) Surveillance par scanner à 3 mois.",
      "B) TEP-TDM immédiate.",
      "C) Ponction-biopsie transpariétale sous scanner.",
      "D) Bronchoscopie avec biopsie.",
      "E) Chirurgie diagnostique et thérapeutique d'emblée."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : C ou D. Pour un nodule périphérique solitaire >2 cm et suspect (spiculé, chez un fumeur), un prélèvement histologique est nécessaire. La ponction sous scanner est adaptée aux lésions périphériques (C). La bronchoscopie peut être envisagée si lésion accessible aux outils de navigation (D). La TEP-TDM est une 2ème intention (B). La surveillance est insuffisante (A). La chirurgie n'est pas d'emblée sans preuve histologique (E)."
  },
  {
    id: 'q-pnm-2-c2-1',
    courseId: 'crs-pneumo-2',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Tableau aigu\nMme Fatima, 55 ans, fumeuse active, consulte aux urgences pour dyspnée aiguë, turgescence jugulaire, œdème rouge violacé du visage et des membres supérieurs apparus rapidement.\n\nQ1. Quel diagnostic évoquez-vous en premier ?",
    options: [
      "A) Insuffisance cardiaque droite.",
      "B) Embolie pulmonaire.",
      "C) Syndrome cave supérieur aigu.",
      "D) Péricardite constrictive.",
      "E) Angio-œdème allergique."
    ],
    correctAnswers: [2],
    explanation: "Correction Q1 : C. Le tableau clinique est typique d'un syndrome cave supérieur."
  },
  {
    id: 'q-pnm-2-c2-2',
    courseId: 'crs-pneumo-2',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : Quelle est l'étiologie la plus probable chez cette patiente ?",
    options: [
      "A) Lymphome médiastinal.",
      "B) Cancer broncho-pulmonaire.",
      "C) Goitre plongeant compressif.",
      "D) Thrombose sur cathéter veineux central.",
      "E) Anévrisme de l'aorte."
    ],
    correctAnswers: [1],
    explanation: "Correction Q2 : B. Chez une femme fumeuse de cet âge, un CBP (souvent à petites cellules ou carcinome épidermoïde) avec adénopathies médiastinales compressives est l'étiologie la plus fréquente."
  },
  {
    id: 'q-pnm-2-c3-1',
    courseId: 'crs-pneumo-2',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Douleurs osseuses\nM. Karim, 62 ans, fumeur, consulte pour des dorsalgies mécaniques récentes, sans traumatisme. L'examen trouve une sensibilité à la percussion de D8. La radiographie thoracique montre une opacité hilaire gauche.\n\nQ1. Quel est le bilan d'extension osseux le plus approprié en première intention ?",
    options: [
      "A) Radiographie du rachis dorsal.",
      "B) Scintigraphie osseuse.",
      "C) IRM rachidienne.",
      "D) TEP-TDM corps entier.",
      "E) Scanner abdomino-pelvien."
    ],
    correctAnswers: [3],
    explanation: "Correction : D. Devant une suspicion de CBP avec signes osseux, la TEP-TDM est l'examen de choix pour le bilan d'extension à distance (métastases osseuses, autres sites). Elle remplace la scintigraphie osseuse (B). L'IRM (C) serait pour une complication locale (compression médullaire). La TEP-TDM est plus performante que le scanner seul (E)."
  },
  {
    id: 'q-pnm-2-c4-1',
    courseId: 'crs-pneumo-2',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Trouble neurologique\nM. Said, 70 ans, opéré il y a 3 ans pour un adénocarcinome pulmonaire stade IB, consulte pour des céphalées persistantes et des vomissements matinaux depuis 15 jours. Pas de déficit focal à l'examen neurologique.\n\nQ1. Quelle est l'hypothèse principale ?",
    options: [
      "A) Méningite carcinomateuse.",
      "B) Métastases cérébrales multiples.",
      "C) Hypertension intracrânienne bénigne.",
      "D) Accident vasculaire cérébral.",
      "E) Encéphalopathie toxique."
    ],
    correctAnswers: [1],
    explanation: "Correction Q1 : B. Les métastases cérébrales sont fréquentes dans les antécédents de CBP. Le tableau d'hypertension intracrânienne (céphalées, vomissements matinaux) est évocateur."
  },
  {
    id: 'q-pnm-2-c4-2',
    courseId: 'crs-pneumo-2',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 (suite) : Quel est l'examen à réaliser en urgence ?",
    options: [
      "A) Scanner cérébral sans injection.",
      "B) IRM cérébrale avec injection de gadolinium.",
      "C) Ponction lombaire.",
      "D) Électroencéphalogramme.",
      "E) Angio-IRM cérébrale."
    ],
    correctAnswers: [1],
    explanation: "Correction Q2 : B. L'IRM cérébrale avec injection est l'examen de référence, plus sensible que le scanner pour détecter les petites métastases et la méningite carcinomateuse."
  },
  {
    id: 'q-pnm-2-c5-1',
    courseId: 'crs-pneumo-2',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Altération de l'état général\nMme Leila, 58 ans, non fumeuse, est hospitalisée pour asthénie majeure, anorexie avec perte de 8 kg en 2 mois. Le bilan biologique trouve une hyponatrémie à 125 mmol/L (normokaliémie, fonction rénale normale).\n\nQ1. Quel mécanisme évoquer pour cette hyponatrémie ?",
    options: [
      "A) Déplétion volémique (déshydratation).",
      "B) Insuffisance surrénalienne.",
      "C) Sécrétion inappropriée d'ADH (SIADH).",
      "D) Prise de diurétiques thiazidiques.",
      "E) Insuffisance cardiaque."
    ],
    correctAnswers: [2],
    explanation: "Correction Q1 : C. Dans un contexte d'altération de l'état général avec cancer, le SIADH (hyponatrémie par dilution) est très évocateur."
  },
  {
    id: 'q-pnm-2-c5-2',
    courseId: 'crs-pneumo-2',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 (suite) : Quel type de CBP est le plus souvent associé à ce syndrome paranéoplasique ?",
    options: [
      "A) Carcinome épidermoïde.",
      "B) Adénocarcinome.",
      "C) Carcinome à grandes cellules.",
      "D) Carcinome à petites cellules.",
      "E) Carcinome bronchiolo-alvéolaire."
    ],
    correctAnswers: [3],
    explanation: "Correction Q2 : D. Le CPC est le plus fréquemment associé au SIADH parmi tous les CBP."
  }
];

export const PNEUMO_LESSON_2_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-2-mindmap',
    courseId: 'crs-pneumo-2',
    type: 'Resume',
    title: 'Résumé du Cursus : Cancer Broncho-Pulmonaire Primitif',
    contentMarkdown: `### CANCER BRONCHO-PULMONAIRE PRIMITIF

├── **ÉPIDÉMIOLOGIE**
│   ├── 3è cancer H & F (France)
│   ├── 1ère cause décès H 45-64 ans
│   └── Facteur RISQUE MAJEUR : TABAC (actif/passif)
│
├── **HISTOLOGIE**
│   ├── CBNPC (85%)
│   │   ├── Adénocarcinome (+++)
│   │   ├── Carcinome épidermoïde
│   │   └── Carcinome grandes cellules
│   └── CPC (15%) - URGENCE
│
├── **DIAGNOSTIC POSITIF**
│   ├── Signes d'appel : Toux traînante, hémoptysie, dyspnée, douleur thoracique
│   ├── Syndromes révélateurs :
│   │   ├── Cave supérieur (œdème face/cou)
│   │   ├── Pancoast (névralgie C8-T1 + Claude Bernard-Horner)
│   │   └── Paranéoplasique (SIADH, Pierre-Marie, etc.)
│   └── Examen CLÉ : ENDOSCOPIE BRONCHIQUE (central) / Ponction sous TDM (périphérique)
│
├── **BILAN D'EXTENSION (CBNPC opérable)**
│   ├── Scanner thoracique injecté
│   ├── IRM/Scanner CÉRÉBRAL (SYSTÉMATIQUE)
│   ├── TEP-TDM (hors cerveau)
│   └── Pas de TEP si M+ évidente
│
├── **CLASSIFICATION TNM 8 / STADES**
│   ├── Stade I-II : Chirurgie (si opérable)
│   ├── Stade III : Radio-chimiothérapie (RCT) concomitante
│   └── Stade IV : Traitement systémique (chimiothérapie, thérapie ciblée, immuno)
│
├── **TRAITEMENTS SPÉCIFIQUES**
│   ├── CBNPC : Chir (I-II), RCT (III), Systémique (IV)
│   ├── CPC : RCT (forme limitée) ou Chimiothérapie (étendue) + PCI si rémission
│   └── Biomarqueurs CBNPC avancé : EGFR, ALK, ROS1... pour thérapies ciblées
│
└── **PRISE EN CHARGE GLOBALE**
    ├── Bilan pré-thérapeutique : PS OMS, Nutrition, Sevrage tabac
    ├── Décision en RCP + Consultation d'annonce
    ├── Traitements symptomatiques : Douleur, métastases (corticoïdes, RT, chirurgie)
    └── Soins Palliatifs PRÉCOCES : Actifs, globaux, interdisciplinaires`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Cancer du Poumon', 'Oncologie Thoracique']
  },
  {
    id: 'res-pnm-2-astuces',
    courseId: 'crs-pneumo-2',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques & Conclusion',
    contentMarkdown: `### Astuces & Mnémotechniques
• **"TABAC d'abord"** : Pour se souvenir du **T**abac comme facteur **A**lpha et **B**êta, la **A**bsolue **C**ause à connaître.
• **"PANCOAST = Plexus + Sympathique"** : Pancoast touche le **P**lexus brachial bas (C8-T1) et la chaîne **S**ympathique (Claude Bernard-Horner).
• **"CPC = Urgence, Chimio-Radio, PCI si Rémission"** : Acronyme **U-CR-PR** pour mémoriser les 3 piliers de la prise en charge du CPC.
• **Stades I-II-III-IV : "C-R-S-P" (à nuancer)** :
  - **C**hirurgie (I-II)
  - **R**adio-Chimiothérapie (III)
  - **S**ystémique (IV)
  - **P**alliatifs (à tous les stades si besoin)
• **Bilan d'extension CBNPC : "C-T-P"** :
  - **C**erveau (IRM/Scanner injecté)
  - **T**horax (Scanner injecté)
  - **P**ET-TDM (reste du corps)
• **Signes d'alerte chez un fumeur : "T-H-D"** :
  - **T**oux qui change, **H**émoptysie, **D**ouleur thoracique ou **D**yspnée nouvelle. -> Faire un scanner.
• **SIADH dans CPC** : Pensez *"Sécrétion Inappropriée ADans les Hommes ? Non, dans les CPC !"*

---
### Conclusion
*Ce dossier est taillé pour briller aux examens et sur le terrain. À toi de jouer, futur(e) expert(e) ! La pneumo, c'est un peu comme la respiration : maîtriser les bases, c'est ce qui permet de garder le rythme dans les cas les plus complexes. Allez, inspire bien ces connaissances, et expire la réussite !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'CBP', 'Oncologie']
  }
];

// Lesson 3: PNO (Pneumothorax)
export const PNEUMO_LESSON_3_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-3-01',
    courseId: 'crs-pneumo-3',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Un pneumothorax spontané primaire :",
    options: [
      "A. Survient toujours sur un poumon pathologique sous-jacent.",
      "B. Est souvent associé à la rupture de blebs ou de bulles apicales.",
      "C. Est plus fréquent chez les sujets de plus de 50 ans.",
      "D. Présente un risque de récidive d’environ 30% après le premier épisode.",
      "E. Est généralement moins bien toléré que le pneumothorax secondaire."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B, D\n• B : La rupture de blebs/bulles est le mécanisme principal chez le sujet jeune sans pathologie pulmonaire connue.\n• D : Le taux de récidive après un premier épisode de PNO primaire est effectivement d’environ 30%.\n• A : Faux, il survient sur poumon sain.\n• C : Faux, il touche plutôt le sujet jeune (20-40 ans).\n• E : Faux, le PNO secondaire est moins bien toléré car il survient sur poumon malade."
  },
  {
    id: 'q-pnm-3-02',
    courseId: 'crs-pneumo-3',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Parmi les facteurs de risque établis de pneumothorax spontané primaire, on retient :",
    options: [
      "A. Sexe féminin.",
      "B. Tabagisme, avec un risque multiplié par 22 chez l’homme.",
      "C. Morphotype longiligne.",
      "D. Voyage aérien prolongé comme facteur déclenchant.",
      "E. Efforts à glotte fermée (manœuvre de Valsalva)."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\n• B : Le tabagisme est un facteur majeur, dose-dépendant, avec un risque très augmenté chez l’homme.\n• C : Le morphotype longiligne (grand et mince) est un facteur de risque classique.\n• A : Faux, prédominance masculine.\n• D : Faux, le voyage aérien n'est pas déclenchant mais peut aggraver un PNO préexistant.\n• E : Faux, les efforts à glotte fermée ne provoquent pas de PNO."
  },
  {
    id: 'q-pnm-3-03',
    courseId: 'crs-pneumo-3',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Concernant la physiopathologie du PNO spontané secondaire :",
    options: [
      "A. Il est exclusivement dû à la rupture de blebs.",
      "B. Une nécrose du parenchyme pulmonaire (infectieuse ou tumorale) peut être en cause.",
      "C. Un barotraumatisme chez un patient intubé en réanimation peut le provoquer.",
      "D. L'inflammation des petites voies aériennes par le tabac n'y joue aucun rôle.",
      "E. La présence d'une fistule broncho-pleurale est un mécanisme commun aux PNO primaires et secondaires."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\n• B et C : Ce sont des mécanismes spécifiques du PNO secondaire, en plus de ceux du PNO primaire.\n• E : Vrai, la FBP est le mécanisme final commun aboutissant à l'arrivée d'air dans l'espace pleural.\n• A : Faux, la rupture de blebs est plus caractéristique du PNO primaire.\n• D : Faux, le tabac est un facteur aggravant commun."
  },
  {
    id: 'q-pnm-3-04',
    courseId: 'crs-pneumo-3',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. Le diagnostic positif de PNO repose sur :",
    options: [
      "A. La radiographie thoracique en expiration forcée de préférence.",
      "B. La présence à l'auscultation d'un murmure vésiculaire augmenté.",
      "C. La visualisation d'une hyperclarté avasculaire au téléthorax.",
      "D. La découverte d'un tympanisme à la percussion.",
      "E. L'échographie thoracique au lit du malade."
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Correction : C, D, E\n• C : Signe radiologique direct et caractéristique.\n• D : Signe clinique d'hypersonorité à la percussion.\n• E : L'échographie est de plus en plus utilisée, notamment au lit du patient.\n• A : Faux, le cliché est réalisé en inspiration profonde. L'expiration peut fausser le diagnostic.\n• B : Faux, le murmure vésiculaire est diminué ou aboli."
  },
  {
    id: 'q-pnm-3-05',
    courseId: 'crs-pneumo-3',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Les signes de gravité immédiate d'un PNO incluent :",
    options: [
      "A. Une dyspnée sévère.",
      "B. Un collapsus tensionnel (hypotension).",
      "C. Un décollement pleural de 1 cm en région axillaire.",
      "D. Une bradycardie.",
      "E. Un pneumothorax bilatéral."
    ],
    correctAnswers: [0, 1, 3, 4],
    explanation: "Correction : A, B, D, E\n• A, B, D, E : Ce sont des signes de gravité clinique engageant le pronostic vital. La bradycardie est un signe tardif de mauvaise tolérance.\n• C : Faux, un petit décollement isolé n'est pas un signe de gravité en l'absence de mauvaise tolérance clinique."
  },
  {
    id: 'q-pnm-3-06',
    courseId: 'crs-pneumo-3',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Concernant la fistule broncho-pleurale (FBP) :",
    options: [
      "A. Une FBP ouverte conduit à un pneumothorax suffocant.",
      "B. Une FBP à soupape permet le passage d'air uniquement de la cavité pleurale vers l'alvéole.",
      "C. Une FBP fermée explique les PNO minimes et stables.",
      "D. La résorption de l'air pleural se fait principalement par la plèvre viscérale.",
      "E. La persistance d'une FBP ouverte peut conduire à un PNO chronique."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E\n• C : Après passage initial, la fermeture de la fistule permet une résorption spontanée.\n• E : Vrai, c'est la définition du PNO chronique.\n• A : Faux, la FBP ouverte est plutôt responsable d'un PNO chronique. Le PNO suffocant est dû à une FBP à soupape.\n• B : Faux, le sens est unidirectionnel de l'alvéole vers la plèvre.\n• D : Faux, la résorption se fait à travers la plèvre pariétale (gradient de pression partielle)."
  },
  {
    id: 'q-pnm-3-07',
    courseId: 'crs-pneumo-3',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Le traitement par oxygénothérapie à haut débit (>10 L/min) dans un PNO stable :",
    options: [
      "A. Accélère la résorption de l'air intrapleural par création d'un gradient de diffusion d'azote.",
      "B. Est contre-indiqué en cas de BPCO sévère par risque d'hypercapnie.",
      "C. Multiplie le taux de résorption de l'air par environ 4.",
      "D. Est le traitement de première intention de tout PNO, quel que soit sa taille.",
      "E. Nécessite une surveillance en milieu hospitalier."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : A, C, E\n• A : C'est le mécanisme d'action. L'O₂ abaisse la pression partielle d'azote dans le sang, favorisant la diffusion de l'azote pleural vers le sang.\n• C : Effet démontré sur la vitesse de résorption.\n• E : Précautions nécessaires, notamment pour éviter les effets secondaires de l'O₂ à haut débit.\n• B : Vrai dans l'absolu pour les BPCO, mais n'est pas une contre-indication absolue au traitement du PNO ; elle impose une surveillance rapprochée (gaz du sang).\n• D : Faux, les PNO minimes asymptomatiques peuvent être surveillés sans O₂ à haut débit."
  },
  {
    id: 'q-pnm-3-08',
    courseId: 'crs-pneumo-3',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Indications du drainage thoracique dans le PNO spontané :",
    options: [
      "A. PNO partiel avec décollement axillaire < 2 cm, asymptomatique.",
      "B. Échec d'une exsufflation à l'aiguille.",
      "C. PNO grave d'emblée (dyspnée sévère, hémodynamique instable).",
      "D. Premier épisode de PNO primaire, quelle que soit sa taille.",
      "E. Hydro-pneumothorax."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\n• B, C, E : Ce sont des indications classiques et validées.\n• A : Faux, c'est une indication d'abstention thérapeutique surveillée.\n• D : Faux, un premier épisode de PNO primaire peu étendu et bien toléré peut être traité par exsufflation simple ou même surveillance."
  },
  {
    id: 'q-pnm-3-09',
    courseId: 'crs-pneumo-3',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. La pleurodèse est indiquée :",
    options: [
      "A. En première intention pour tout premier épisode de PNO primaire.",
      "B. En cas de récidive homolatérale d'un PNO spontané.",
      "C. D'emblée chez un personnel navigant (ex : pilote) après un premier épisode.",
      "D. En cas de fuite aérienne persistante (>4-5 jours) malgré un drainage bien conduit.",
      "E. Pour prévenir les récidives controlatérales."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\n• B, C, D : Ce sont les indications majeures de la pleurodèse (chimique ou chirurgicale).\n• A : Faux, traitement trop agressif en première intention.\n• E : Faux, la pleurodèse est unilatérale. Elle ne prévient pas les récidives du côté controlatéral."
  },
  {
    id: 'q-pnm-3-10',
    courseId: 'crs-pneumo-3',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Concernant le risque de récidive :",
    options: [
      "A. Il est plus élevé dans le PNO secondaire (40-80%) que dans le PNO primaire.",
      "B. La présence de blebs controlatéraux au scanner prédit formellement une récidive homolatérale.",
      "C. La majorité des récidives surviennent dans les deux premières années.",
      "D. Le risque de récidive augmente avec chaque nouvel épisode.",
      "E. Le traitement initial (exsufflation vs drainage) influence significativement le taux de récidive à long terme."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\n• A, C, D : Données épidémiologiques clés à retenir pour le pronostic et le conseil au patient.\n• B : Faux, la présence de lésions bulleuses controlatérales ne prédit pas le risque de récidive homo ou controlatérale.\n• E : Faux, le traitement initial ne modifie pas le risque de récidive ultérieure."
  },
  {
    id: 'q-pnm-3-11',
    courseId: 'crs-pneumo-3',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Le mécanisme principal d'un pneumothorax suffocant (compressif) est :",
    options: [
      "A. Une brèche pleurale à débit modéré mais continu.",
      "B. Une fistule broncho-pleurale de type \"ouverte\".",
      "C. Une fistule broncho-pleurale de type \"à soupape\" (unidirectionnelle).",
      "D. Une résorption accélérée de l'air pleural par l'oxygénothérapie.",
      "E. Une augmentation de la pression intrapleurale en expiration empêchant le retour veineux."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nLa FBP à soupape laisse passer l'air de l'arbre bronchique vers la plèvre à l'inspiration, mais empêche son retour à l'expiration, créant une pression intrapleurale positive croissante. C'est une urgence vitale. Une FBP ouverte (B) crée un équilibre de pression, pas une compression. L'oxygénothérapie (D) est un traitement adjuvant. L'augmentation de pression (E) est une conséquence, pas le mécanisme principal."
  },
  {
    id: 'q-pnm-3-12',
    courseId: 'crs-pneumo-3',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Devant une hyperclarté rétro-cardiaque sur un téléthorax de face, le diagnostic différentiel principal avec un PNO gauche est :",
    options: [
      "A. Une atélectasie.",
      "B. Une volumineuse bulle d'emphysème paraseptale.",
      "C. Une pleurésie.",
      "D. Une pneumonie lobaire supérieure gauche.",
      "E. Une hernie diaphragmatique."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nC'est le principal piège diagnostique radiologique. Une bulle géante peut simuler un PNO. La TDM thoracique est l'examen clé pour trancher. Les autres diagnostics (A, C, D, E) ont généralement un aspect radiologique différent (opacité, niveau liquidien, etc.)."
  },
  {
    id: 'q-pnm-3-13',
    courseId: 'crs-pneumo-3',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Le \"trépied de Gaillard\" (signes physiques classiques du PNO) comprend :",
    options: [
      "A. Douleur, dyspnée, toux.",
      "B. Cyanose, hypotension, polypnée.",
      "C. Hémithorax distendu, tympanisme, abolition du murmure vésiculaire.",
      "D. Diminution des vibrations vocales, douleur latéro-thoracique, tachycardie.",
      "E. Toux sèche, malaise, bradycardie."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nIl s'agit des trois signes physiques cardinaux à l'examen du côté du PNO : distension thoracique, hypersonorité/timpanisme à la percussion, abolition/diminution du murmure vésiculaire à l'auscultation. Les autres items mélangent signes fonctionnels (A), signes de gravité (B, E) ou d'autres signes physiques (D)."
  },
  {
    id: 'q-pnm-3-14',
    courseId: 'crs-pneumo-3',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Selon la conduite à tenir présentée, un patient avec un premier PNO primaire partiel (1,5 cm), asymptomatique et bon entourage peut :",
    options: [
      "A. Être drainé systématiquement.",
      "B. Bénéficier d'une pleurodèse préventive.",
      "C. Être mis sous oxygénothérapie à haut débit à domicile.",
      "D. Être laissé en surveillance ambulatoire avec consultation de contrôle sous 24-48h.",
      "E. Subir une exsufflation à l'aiguille en ambulatoire puis être laissé en surveillance."
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nC'est l'option \"abstention thérapeutique avec surveillance rapprochée\" pour les PNO de petite taille et bien tolérés. Le drainage (A) est trop invasif, la pleurodèse (B) n'est pas indiquée en premier épisode. L'O2 à haut débit (C) nécessite une hospitalisation. L'exsufflation (E) est indiquée pour des décollements ≥ 2 cm."
  },
  {
    id: 'q-pnm-3-15',
    courseId: 'crs-pneumo-3',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Parmi ces professions, laquelle justifie une prise en charge particulièrement agressive (incluant une pleurodèse précoce) dès le premier épisode de PNO en raison du risque professionnel majeur ?",
    options: [
      "A. Enseignant.",
      "B. Chirurgien dentiste.",
      "C. Pilote de ligne (personnel navigant).",
      "D. Infirmier en réanimation.",
      "E. Sportif de haut niveau."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nLes variations de pression atmosphérique en cabine (dépressurisation) constituent un risque vital en cas de récidive en vol. La prévention des récidives par pleurodèse (chimique ou chirurgicale) est donc envisagée d'emblée, même après un premier épisode, pour ces professions réglementées."
  },
  {
    id: 'q-pnm-3-16',
    courseId: 'crs-pneumo-3',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Le scanner thoracique dans le bilan d'un PNO spontané primaire est surtout utile pour :",
    options: [
      "A. Confirmer le diagnostic de PNO (il est plus sensible que la radio).",
      "B. Éliminer formellement une bulle d'emphysème géante (diagnostic différentiel).",
      "C. Rechercher des blebs/bulles apicales controlatérales pour prédire le risque de récidive.",
      "D. Guider la pose d'un drain thoracique en urgence.",
      "E. Rechercher systématiquement un cancer bronchique sous-jacent chez le sujet jeune."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nC'est son indication principale dans ce contexte : différencier un PNO apical d'une bulle géante, ce que la radio standard peut ne pas permettre. Bien que plus sensible (A), il n'est pas nécessaire pour confirmer un diagnostic évident à la radio. La recherche de blebs (C) n'a pas de valeur prédictive fiable. Le guidage de drain (D) se fait généralement sous échographie. La recherche de cancer (E) n'est pas systématique dans un contexte primaire chez un sujet jeune."
  },
  {
    id: 'q-pnm-3-17',
    courseId: 'crs-pneumo-3',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. La prévention primaire du PNO spontané repose sur :",
    options: [
      "A. La pleurodèse systématique après un premier épisode.",
      "B. L'arrêt du tabac, unique mesure efficace chez le sujet à risque.",
      "C. La vaccination anti-pneumococcique et anti-grippale.",
      "D. L'éviction des sports de contact.",
      "E. La prise en charge correcte des pathologies respiratoires chroniques (prévention du PNO secondaire)."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E\n• B : L'arrêt du tabac est la mesure préventive la plus efficace pour réduire le risque de premier épisode et de récidive.\n• E : Pour le PNO secondaire, la prévention passe par le contrôle optimal des maladies sous-jacentes (BPCO, asthme, infections...).\nLa pleurodèse (A) est une prévention secondaire (des récidives). La vaccination (C) prévient les infections, pas directement le PNO. Les sports (D) ne sont pas un facteur de risque établi."
  },
  {
    id: 'q-pnm-3-18',
    courseId: 'crs-pneumo-3',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Une complication immédiate possible d'un pneumothorax compressif non traité est :",
    options: [
      "A. Une pleurésie purulente.",
      "B. Une atélectasie complète du poumon controlatéral.",
      "C. Un arrêt cardiorespiratoire par arrêt circulatoire (obstruction du retour veineux).",
      "D. La formation d'un pyopneumothorax.",
      "E. Le développement d'un mésothéliome pleural."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nC'est le risque vital immédiat. L'augmentation rapide de la pression intrapleurale dévie le médiastin et comprime la veine cave, réduisant le retour veineux et le débit cardiaque → collapsus cardio-vasculaire. Les autres complications (A, D) sont infectieuses et tardives. L'atélectasie (B) concerne le poumon atteint. Le mésothéliome (E) n'a pas de lien."
  },
  {
    id: 'q-pnm-3-19',
    courseId: 'crs-pneumo-3',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. À l'examen clinique d'un patient suspect de PNO, le signe le plus sensible est :",
    options: [
      "A. La douleur thoracique latérale.",
      "B. La tachycardie.",
      "C. La diminution ou l'abolition du murmure vésiculaire du côté atteint.",
      "D. Le tympanisme à la percussion.",
      "E. La présence d'un emphysème sous-cutané."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nLa modification du murmure vésiculaire (diminution ou abolition) est le signe clinique le plus constant et le plus sensible en cas de PNO significatif. La douleur (A) est très évocatrice mais peut être absente. La tachycardie (B) est inconstante. Le tympanisme (D) est très spécifique mais peut être difficile à percevoir pour les petits PNO. L'emphysème sous-cutané (E) est très spécifique mais rare et tardif."
  },
  {
    id: 'q-pnm-3-20',
    courseId: 'crs-pneumo-3',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. L'étiologie la plus fréquente d'un pneumothorax spontané secondaire chez l'adulte de plus de 50 ans est :",
    options: [
      "A. La tuberculose pulmonaire.",
      "B. L'asthme aigu grave.",
      "C. La mucoviscidose.",
      "D. La bronchopneumopathie chronique obstructive (BPCO) et l'emphysème.",
      "E. Le cancer bronchopulmonaire primitif."
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nLa BPCO/emphysème est la cause la plus fréquente de PNO secondaire dans cette tranche d'âge, en lien avec la destruction du parenchyme et la formation de bulles. La tuberculose (A) est une cause classique mais moins fréquente aujourd'hui. L'asthme (B) et la mucoviscidose (C) touchent des populations plus jeunes. Le cancer (E) est une cause possible mais moins fréquente que la BPCO."
  },
  {
    id: 'q-pnm-3-21',
    courseId: 'crs-pneumo-3',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. La résorption spontanée de l'air d'un PNO fermé stable se fait principalement par :",
    options: [
      "A. La plèvre viscérale, grâce aux pneumocytes.",
      "B. La plèvre pariétale, selon le gradient de pression partielle des gaz entre la cavité pleurale et les capillaires systémiques.",
      "C. Le système lymphatique pleural.",
      "D. La réouverture de la fistule broncho-pleurale et expulsion par la toux.",
      "E. La consommation d'oxygène par les cellules mésothéliales, créant un vide."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nC'est le mécanisme physiologique : l'air diffuse à travers la plèvre pariétale, richement vascularisée par les capillaires systémiques (à basse pression partielle d'azote), suivant les gradients de pression (loi de Henry). C'est ce mécanisme que l'oxygénothérapie à haut débit amplifie. La plèvre viscérale (A) est moins vascularisée. Le lymphatique (C) joue un rôle mineur. La réouverture (D) aggraverait le PNO. La consommation d'O2 (E) est un phénomène marginal."
  },
  {
    id: 'q-pnm-3-22',
    courseId: 'crs-pneumo-3',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Un patient traité par drainage thoracique pour un PNO présente une fuite aérienne persistante (>5 jours). La stratégie suivante est recommandée :",
    options: [
      "A. Augmenter le débit d'aspiration du drain.",
      "B. Clamper le drain pendant 24h pour favoriser la fermeture de la brèche.",
      "C. Proposer une pleurodèse (chimique ou chirurgicale).",
      "D. Retirer le drain et laisser en surveillance, la brèche se fermera d'elle-même.",
      "E. Ajouter un deuxième drain thoracique."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nUne fuite aérienne prolongée malgré un drainage bien positionné est une indication formelle de pleurodèse (le plus souvent chirurgicale par VATS, parfois chimique si la chirurgie n'est pas possible). Augmenter l'aspiration (A) ou clamper (B) ne règle pas le problème de la brèche persistante et peut être dangereux. Retirer le drain (D) laisserait un PNO persistant. Un deuxième drain (E) est rarement la solution."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-3-c1-1',
    courseId: 'crs-pneumo-3',
    questionNumber: 23,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Le Jeune Homme Fumeur\nUn homme de 28 ans, grand et mince, fumeur à 15 PA, consulte aux urgences pour une douleur thoracique droite latérale, survenue brutalement au repos, en coup de poignard, rythmée par la respiration. Il rapporte une légère dyspnée. À l'examen : TA 130/80, FC 105/min, SpO2 96% air ambiant. Auscultation pulmonaire droite : murmure vésiculaire aboli, tympanisme à la percussion.\n\nQ1. Quelle est la première démarche paraclinique à demander en urgence ?",
    options: [
      "A. Scanner thoracique injecté.",
      "B. Électrocardiogramme (ECG).",
      "C. Radiographie thoracique en inspiration profonde, face et profil.",
      "D. Gaz du sang artériel.",
      "E. Échographie cardiaque."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nL'imagerie thoracique est prioritaire pour confirmer le diagnostic suspecté cliniquement. La radiographie standard (téléthorax) en inspiration est l'examen de première intention, rapide et suffisant dans la majorité des cas. L'ECG (B) est utile pour le diagnostic différentiel mais ne confirme pas le PNO. Le scanner (A) est réservé aux cas complexes."
  },
  {
    id: 'q-pnm-3-c1-2',
    courseId: 'crs-pneumo-3',
    questionNumber: 24,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : La radiographie confirme un pneumothorax droit complet. Le patient reste stable. Quelle est la prise en charge initiale la plus appropriée ?",
    options: [
      "A. Abstention thérapeutique avec surveillance simple.",
      "B. Exsufflation à l'aiguille unique.",
      "C. Mise en place immédiate d'un drain thoracique de gros calibre.",
      "D. Oxygénothérapie à haut débit (>10 L/min) et hospitalisation pour surveillance.",
      "E. Ponction pleurale évacuatrice immédiate en urgence."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nPour un premier épisode de PNO primaire complet mais stable (pas de signes de gravité), l'exsufflation à l'aiguille est le traitement de référence initial. Elle est moins invasive qu'un drainage (C). L'abstention (A) serait pour un tout petit PNO. L'O₂ (D) est un adjuvant, pas un traitement à lui seul. La ponction (E) est synonyme d'exsufflation."
  },
  {
    id: 'q-pnm-3-c2-1',
    courseId: 'crs-pneumo-3',
    questionNumber: 25,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : La Patiente BPCO en Détresse\nUne femme de 65 ans, forte fumeuse, connue pour une BPCO sévère (VEMS à 35%), est amenée aux urgences pour une aggravation brutale de sa dyspnée habituelle, survenue au repos, associée à une douleur thoracique droite. Elle est polypnéique à 35/min, cyanosée, en lutte. TA 90/60, FC 130/min, SpO2 82% à l'air ambiant. Auscultation : murmure vésiculaire aboli à droite, tympanisme.\n\nQ1. Face à ce tableau, l'hypothèse la plus probable et la plus grave est :",
    options: [
      "A. Une exacerbation infectieuse de sa BPCO.",
      "B. Un pneumothorax spontané secondaire compressif.",
      "C. Une embolie pulmonaire massive.",
      "D. Un infarctus du myocarde du ventricule droit.",
      "E. Un épanchement pleural liquidien compressif."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nLe contexte (BPCO, facteur de risque), le début brutal, la douleur, et surtout les signes physiques unilatéraux (abolition MV, tympanisme) orientent fortement vers un PNO secondaire. Sa mauvaise tolérance (détresse, hypotonie, tachycardie) évoque un caractère compressif ou une décompensation sévère de la pathologie sous-jacente. C'est une urgence thérapeutique absolue."
  },
  {
    id: 'q-pnm-3-c2-2',
    courseId: 'crs-pneumo-3',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : Après la confirmation radiologique rapide d'un PNO droit complet compressif (déviation du médiastin), quelle est la première action thérapeutique ?",
    options: [
      "A. Mise sous oxygénothérapie à 15 L/min au masque à haute concentration.",
      "B. Intubation orotrachéale et ventilation mécanique.",
      "C. Ponction pleurale décompressive immédiate à l'aiguille (2ème espace intercostal, ligne médio-claviculaire).",
      "D. Mise en place d'un drain thoracique sous anesthésie locale.",
      "E. Administration de bronchodilatateurs en nébulisation et de corticoides IV."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nDevant un PNO compressif avec signes de gravité hémodynamique, la priorité est la décompression immédiate par ponction à l'aiguille (thoracocentèse) en \"urgence vitale\". Ce geste peut sauver la vie en attendant la mise en place d'un drain thoracique définitif (D). L'oxygénothérapie (A) est indispensable mais insuffisante seule. L'intubation (B) peut aggraver le barotraumatisme si elle précède la décompression. Les traitements de la BPCO (E) sont adjuvants mais ne traitent pas la cause."
  },
  {
    id: 'q-pnm-3-c3-1',
    courseId: 'crs-pneumo-3',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : L'Hydro-Pneumothorax Post-Traumatique\nUn jeune homme de 22 ans est admis après un accident de la voie publique. Il présente une douleur thoracique gauche majeure et une dyspnée. Le téléthorax montre un hydro-pneumothorax gauche (niveau liquide et air).\n\nQ1. La prise en charge initiale spécifique de cet hydro-pneumothorax traumatique, comparée à un PNO spontané simple, nécessite :",
    options: [
      "A. Exactement la même approche : un drainage thoracique standard.",
      "B. Un drainage thoracique de gros calibre (≥28F) en raison du risque d'hémorragie.",
      "C. Une abstention thérapeutique car le liquide se résorbera spontanément.",
      "D. Une ponction pleurale simple pour évacuer le liquide avant l'air.",
      "E. Un scanner thoracique injecté en urgence pour évaluer une lésion vasculaire avant tout geste pleural."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nUn hydro-pneumothorax post-traumatique évoque fortement un hémopneumothorax (sang + air). Le drainage doit se faire avec un drain de gros calibre pour éviter le cloisonnement et permettre l'évacuation des caillots. Un drain de petit calibre (comme pour un PNO spontané simple) pourrait se boucher. Le scanner (E) peut être nécessaire secondairement, mais le drainage est prioritaire en cas de détresse. L'abstention (C) ou la simple ponction (D) sont inadaptées."
  },
  {
    id: 'q-pnm-3-c4-1',
    courseId: 'crs-pneumo-3',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : La Récidive Homolatérale\nUn homme de 32 ans, fumeur, a présenté un PNO droit primaire traité avec succès par exsufflation il y a 8 mois. Il se présente de nouveau avec le même tableau clinique typique du côté droit. La radio confirme la récidive.\n\nQ1. Quelle est la stratégie thérapeutique à privilégier pour ce 2ème épisode homolatéral ?",
    options: [
      "A. Répéter l'exsufflation à l'aiguille comme pour le premier épisode.",
      "B. Mettre en place un drain thoracique avec valve de Heimlich.",
      "C. Proposer une pleurodèse chirurgicale (ex : exérèse de blebs + abrasion pleurale) après résolution de l'épisode aigu.",
      "D. Mettre en place un drain et réaliser une pleurodèse chimique (par talcage) via le drain.",
      "E. Hospitaliser pour oxygénothérapie seule et surveillance stricte."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nAprès une première récidive homolatérale, l'indication d'une pleurodèse chirurgicale (généralement par vidéothoracoscopie - VATS) est forte pour prévenir les récidives ultérieures (risque >60%). Elle est réalisée une fois l'épisode aigu traité (par exsufflation ou petit drain). La pleurodèse chimique via le drain (D) est une alternative si la chirurgie n'est pas possible. Répéter le même traitement (A) expose à un risque élevé de 3ème épisode. Le simple drainage (B) ne prévient pas les récidives."
  },
  {
    id: 'q-pnm-3-c5-1',
    courseId: 'crs-pneumo-3',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Douleur Thoracique & Dyspnée - Le Piège Diagnostique\nUne femme de 40 ans, sous contraception orale, consulte pour une douleur thoracique gauche pleurétique et une dyspnée d'installation rapide. Elle est tachycarde à 115/min, légèrement polypnéique. L'auscultation pulmonaire est jugée normale. L'ECG montre un syndrome S1Q3. La gazométrie révèle une hypoxémie avec hypocapnie.\n\nQ1. Devant ce tableau, et avant toute imagerie thoracique, quel diagnostic devient la priorité à évoquer et à traiter en extrême urgence ?",
    options: [
      "A. Pneumothorax spontané primaire gauche.",
      "B. Pneumopathie infectieuse communautaire.",
      "C. Embolie pulmonaire (EP) massive ou sub-massive.",
      "D. Péricardite aiguë.",
      "E. Crise d'angor instable."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nLe tableau clinique (douleur pleurétique, dyspnée, tachycardie), les facteurs de risque (contraception), et surtout les éléments paracliniques (ECG S1Q3, gaz du sang avec alcalose respiratoire) orientent fortement vers une embolie pulmonaire. C'est une urgence diagnostique et thérapeutique (anticoagulation). L'auscultation normale écarte un PNO significatif (A). La péricardite (D) donnerait souvent une douleur rétrosternale et des anomalies ECG diffuses. L'angor (E) donne une douleur constrictive, non pleurétique."
  },
  {
    id: 'q-pnm-3-c5-2',
    courseId: 'crs-pneumo-3',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 (suite) : La radiographie thoracique de cette patiente est finalement réalisée et revient strictement normale. Quelle est la conduite à tenir ?",
    options: [
      "A. Éliminer le diagnostic de PNO et arrêter les explorations.",
      "B. Demander en urgence un angio-scanner thoracique pour confirmer l'EP.",
      "C. Prescrire un traitement antalgique et laisser la patiente en observation.",
      "D. Réaliser une échographie cardiaque trans-thoracique à la recherche d'un thrombus intracardiaque.",
      "E. Adresser la patiente en médecine nucléaire pour une scintigraphie pulmonaire de ventilation/perfusion."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nUne radio thoracique normale n'élimine ni une EP ni un petit PNO. Devant la forte suspicion clinique d'EP, l'angioscanner thoracique est l'examen de référence pour visualiser les emboles. L'échocardiographie (D) peut montrer des signes indirects mais n'est pas diagnostique. La scintigraphie (E) est une alternative si contre-indication au scanner. Stopper les explorations (A) serait dangereux."
  }
];

export const PNEUMO_LESSON_3_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-3-mindmap',
    courseId: 'crs-pneumo-3',
    type: 'Resume',
    title: 'Mind Map : Pneumothorax Spontané',
    contentMarkdown: `### PNEUMOTHORAX SPONTANE

├── **DÉFINITION**
│   ├── Primaire : Poumon sain, sujet jeune, blebs. Bénin.
│   └── Secondaire : Poumon malade, >50 ans. Grave. Décompense.
│
├── **PHYSIOPATHOLOGIE (Fistule Broncho-Pleurale = FBP)**
│   ├── Fuite d'air vers espace pleural.
│   ├── Types de FBP :
│   │   ├── Ouverte → PNO chronique
│   │   ├── À soupape → PNO suffocant (URGENCE VITALE)
│   │   └── Fermée → PNO minime (résorption spontanée)
│   └── Résorption air : Plèvre pariétale / Gradient de pression.
│
├── **DIAGNOSTIC**
│   ├── Clinique : Douleur + Dyspnée + Signes auscultatoires (MV diminué/aboli, tympanisme).
│   ├── Imagerie : RADIO Thorax INSPIRATION = Hyperclarté avasculaire, ligne pleurale.
│   └── Gravité : Clinique ! (Dyspnée sévère, Collapsus, Bradycardie, Bilatéral).
│
├── **TRAITEMENT (Algorithme)**
│   ├── PNO partiel <2cm & asympto → Surveillance ± O₂.
│   ├── PNO total ou >2cm ou sympto → Exsufflation à l'aiguille.
│   ├── Échec ou PNO grave d'emblée → Drainage thoracique.
│   └── Prévention Récidive (Pleurodèse) : Indications précises (Récidive, Personnel navigant, Fuite persistante).
│
└── **PRONOSTIC / PRÉVENTION**
    ├── Récidive : 30% (Primaire) → 40-80% (Secondaire). Max les 2 premières années.
    └── Prévention : ARRÊT DU TABAC +++ . Prise en charge pathologies sous-jacentes.`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'PNO', 'Pneumothorax', 'Urgences']
  },
  {
    id: 'res-pnm-3-astuces',
    courseId: 'crs-pneumo-3',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques : PNO',
    contentMarkdown: `### Astuces & Mnémotechniques
• **Pour l'imagerie** : *"Inspiration pour Installer le diagnostic, Expiration pour le Effacer"*. (Le cliché se fait en inspiration).
• **Signes de gravité** : Dyspnée sévère + Collapsus + Bradycardie + Bilatéral → **"DCBB = Danger Complet, Branle-bas de combat !"**
• **Traitement selon la taille : "La règle du 2"** :
  - Décollement axillaire < 2 cm → Surveillance.
  - ≥ 2 cm → Exsufflation/Drainage.
• **Mécanisme FBP : Penser à une porte** :
  - Ouverte (va-et-vient) = PNO chronique.
  - À clapet/à soupape (entre seulement) = PNO suffocant.
  - Fermée à clé (plus d'entrée) = PNO stable.
• **Facteurs de risque PNO primaire : Les 4 T** :
  - **T**abac + **T**aille (grand et mince) + **T**wenty/Thirty (âge jeune) + **T**onus (sexe masculin).

---
### Mot d'encouragement
*Le pneumothorax, c'est comme une révision : parfois ça prend de l'air, mais avec une bonne stratégie et les bons outils, tout rentre dans l'ordre et on ressort plus fort ! Allez, un dernier effort, vos futurs patients vous attendent, le souffle retrouvé !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'PNO', 'Urgence']
  }
];
