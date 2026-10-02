import { Question } from '../../types/medical';

export const DISSECTION_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-diss-01',
    courseId: 'crs-dissection',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le facteur de risque le plus fréquent et le plus important pour la dissection aortique est :",
    options: [
      "a) La dyslipidémie",
      "b) L'hypertension artérielle non contrôlée",
      "c) Le tabagisme",
      "d) Le diabète sucré",
      "e) La maladie de Marfan"
    ],
    correctAnswers: [1],
    explanation: "L'HTA est le facteur prédisposant numéro un. Elle exerce une contrainte de cisaillement chronique sur la paroi aortique, favorisant la dégénérescence de la média et la création de la déchirure intimale. Bien que la maladie de Marfan (e) soit un facteur important, elle est beaucoup moins fréquente que l'HTA.",
    clinicalPearl: "HTA non contrôlée présente dans plus de 80% des dissections aortiques aiguës."
  },
  {
    id: 'q-diss-02',
    courseId: 'crs-dissection',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la classification de Stanford, une dissection qui n'implique que l'aorte descendante (en aval de l'artère sous-clavière gauche) est dite de type :",
    options: [
      "a) A",
      "b) B",
      "c) I",
      "d) II",
      "e) III"
    ],
    correctAnswers: [1],
    explanation: "La classification de Stanford, simple et guidant la prise en charge, distingue le type A (impliquant l'aorte ascendante, chirurgical) du type B (n'impliquant que l'aorte descendante, souvent médical).",
    clinicalPearl: "\"A pour Ascendante et Acte chirurgical\" ; \"B pour Bêta-bloquant et Bas (Descendante)\"."
  },
  {
    id: 'q-diss-03',
    courseId: 'crs-dissection',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe clinique le plus spécifique d'une dissection aortique de type A est :",
    options: [
      "a) Une douleur abdominale",
      "b) Une asymétrie tensionnelle > 20 mmHg entre les deux bras",
      "c) Une hématurie",
      "d) Une douleur thoracique basale irradiant à la mâchoire",
      "e) Un souffle diastolique"
    ],
    correctAnswers: [1],
    explanation: "L'asymétrie tensionnelle ou des pouls est un signe très évocateur, résultant de l'obstruction dynamique ou statique des troncs artériels par le flap intimal. La douleur thoracique (d) est sensible mais peu spécifique. Un souffle diastolique (e) peut évoquer une insuffisance aortique, complication du type A.",
    clinicalPearl: "Asymétrie tensionnelle > 20 mmHg ou des pouls fémoraux = Drapeau rouge majeur pour la dissection."
  },
  {
    id: 'q-diss-04',
    courseId: 'crs-dissection',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'examen complémentaire de référence pour le diagnostic positif et le typage d'une dissection aortique est :",
    options: [
      "a) La radiographie thoracique",
      "b) L'échocardiographie transthoracique",
      "c) L'angiographie par résonance magnétique (ARM)",
      "d) L'angio-TDM thoracique injecté",
      "e) L'échographie Doppler des membres inférieurs"
    ],
    correctAnswers: [3],
    explanation: "L'angio-TDM est rapide, largement disponible en urgence, et offre une excellente sensibilité/spécificité pour visualiser le flap intimal, les deux chenaux, l'extension de la dissection et les complications.",
    clinicalPearl: "Angio-TDM thoraco-abdominal injecté = Examen de référence en urgence (rapide et précis)."
  },
  {
    id: 'q-diss-05',
    courseId: 'crs-dissection',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le principal objectif du traitement médical initial d'une dissection aortique est :",
    options: [
      "a) La correction des troubles de la coagulation",
      "b) La sédation profonde du patient",
      "c) Le contrôle de la fréquence cardiaque et la réduction de la force de contraction du ventricule gauche",
      "d) La prévention des infections",
      "e) Le remplissage vasculaire massif"
    ],
    correctAnswers: [2],
    explanation: "Le but est de réduire la force d'éjection du ventricule gauche (dP/dt max) et la pression artérielle pour éviter la propagation de la dissection. On utilise typiquement des bêta-bloquants.",
    clinicalPearl: "Objectif médical initial : Réduire le dP/dt et la PA par bêtabloquant IV (ex: Labétalol)."
  },
  {
    id: 'q-diss-06',
    courseId: 'crs-dissection',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une dissection aortique de type Stanford A compliquée d'une insuffisance aortique aiguë justifie :",
    options: [
      "a) Un traitement médical seul",
      "b) Une surveillance échographique rapprochée",
      "c) Une chirurgie de remplacement valvulaire aortique en urgence",
      "d) Une angioplastie",
      "e) Une thrombolyse"
    ],
    correctAnswers: [2],
    explanation: "L'insuffisance aortique aiguë est une complication mécanique grave du type A, conduisant à une insuffisance cardiaque aiguë. La correction chirurgicale est impérative et fait partie du geste opératoire.",
    clinicalPearl: "Type A + Insuffisance aortique = Chirurgie de sauvetage en extrême urgence."
  },
  {
    id: 'q-diss-07',
    courseId: 'crs-dissection',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication la plus redoutée et la plus fréquemment mortelle d'une dissection aortique est :",
    options: [
      "a) L'infarctus rénal",
      "b) L'ischémie médullaire",
      "c) La rupture dans le péricarde",
      "d) L'occlusion artérielle périphérique",
      "e) La fistule aorto-œsophagienne"
    ],
    correctAnswers: [2],
    explanation: "La rupture intra-péricardique entraîne une tamponnade cardiaque, cause majeure de décès précoce dans les dissections de type A.",
    clinicalPearl: "1ère cause de mortalité précoce du Type A = Hémopéricarde et tamponnade aiguë."
  },
  {
    id: 'q-diss-08',
    courseId: 'crs-dissection',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément du cas clinique suivant est le PLUS en faveur d'une dissection aortique ? Homme de 60 ans, HTA, douleur thoracique antérieure déchirante, irradiant vers le dos, avec asymétrie des pouls fémoraux.",
    options: [
      "a) L'âge du patient",
      "b) Le terrain hypertendu",
      "c) Le caractère déchirant de la douleur et son irradiation dorsale",
      "d) L'asymétrie des pouls fémoraux",
      "e) Toutes les réponses ci-dessus"
    ],
    correctAnswers: [4],
    explanation: "C'est la combinaison des éléments (terrain, qualité de la douleur \"déchirante\", migration, et signe d'ischémie périphérique) qui est hautement évocatrice. Isolément, chaque signe est moins spécifique.",
    clinicalPearl: "Douleur déchirante migratrice dorsale + asymétrie des pouls = Dissection aortique."
  },
  {
    id: 'q-diss-09',
    courseId: 'crs-dissection',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La dégénérescence de la média (nécrose kystique) est le substratum histologique principal. Elle est souvent associée à :",
    options: [
      "a) L'athérosclérose",
      "b) La syphilis tertiaire",
      "c) La maladie de Takayasu",
      "d) Le syndrome de Ehlers-Danlos vasculaire",
      "e) L'anémie falciforme"
    ],
    correctAnswers: [3],
    explanation: "Les maladies du tissu conjonctif comme Marfan, Ehlers-Danlos ou Loeys-Dietz altèrent la structure de la média. L'athérosclérose (a) est un facteur de risque mais par un mécanisme différent (ulcère pénétrant).",
    clinicalPearl: "Dystrophie de la média = Marfan, Ehlers-Danlos vasculaire (fragilité de paroi majeure)."
  },
  {
    id: 'q-diss-10',
    courseId: 'crs-dissection',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de première intention pour contrôler la fréquence cardiaque dans la phase aiguë est :",
    options: [
      "a) La Nifédipine",
      "b) Le Labétalol",
      "c) Le Nitroprussiate de sodium seul",
      "d) Le Vérapamil",
      "e) L'Adénosine"
    ],
    correctAnswers: [1],
    explanation: "Le Labétalol, un bêta-bloquant non cardiosélectif avec une faible activité alpha-bloquante, est idéal car il réduit à la fois la fréquence cardiaque et la pression artérielle. Les dihydropyridines (a) peuvent causer une tachycardie réflexe.",
    clinicalPearl: "Bêtabloquant de choix en phase aiguë : Labétalol IV (baisse la FC et la PA sans tachycardie réflexe)."
  },
  {
    id: 'q-diss-11',
    courseId: 'crs-dissection',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une dissection aortique peut se révéler par une insuffisance rénale aiguë par :",
    options: [
      "a) Rhabdomyolyse",
      "b) Obstruction de l'artère rénale par le flap",
      "c) Néphropathie diabétique",
      "d) Glomérulonéphrite aiguë",
      "e) Toxicitée médicamenteuse"
    ],
    correctAnswers: [1],
    explanation: "L'extension de la dissection à l'ostium d'une artère rénale peut entraîner une sténose ou une occlusion, conduisant à une ischémie rénale et une insuffisance rénale organique.",
    clinicalPearl: "Malperfusion rénale par flap intimal occlusif = Insuffisance rénale aiguë brutale asymétrique."
  },
  {
    id: 'q-diss-12',
    courseId: 'crs-dissection',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un épanchement pleural gauche de moyenne abondance sur la radiographie thoracique d'un patient avec une dissection de type B doit faire évoquer en premier :",
    options: [
      "a) Une infection pulmonaire",
      "b) Une rupture pleurale de l'aorte",
      "c) Une insuffisance cardiaque gauche",
      "d) Une embolie pulmonaire",
      "e) Une tuberculose"
    ],
    correctAnswers: [1],
    explanation: "C'est un signe de gravité. L'hémothorax gauche est une manifestation fréquente de la rupture de l'aorte descendante dans la plèvre.",
    clinicalPearl: "Hémothorax gauche dans le Type B = Signe d'extrême gravité signant une rupture pleurale."
  },
  {
    id: 'q-diss-13',
    courseId: 'crs-dissection',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal objectif de la chirurgie pour une dissection de type A ?",
    options: [
      "a) Resection de l'aorte ascendante et remplacement par un tube prothétique",
      "b) Cure de l'insuffisance aortique",
      "c) Prévenir la rupture et la tamponnade",
      "d) Rétablir la perfusion dans le vaisseau occlus",
      "e) Toutes ces réponses"
    ],
    correctAnswers: [4],
    explanation: "La chirurgie du type A est une chirurgie de sauvetage. Son but est de réséquer la porte d'entrée dans l'aorte ascendante (a), ce qui prévient la rupture (c), et de traiter les complications associées comme l'IAA (b). Rétablir la perfusion (d) peut aussi être un objectif secondaire.",
    clinicalPearl: "Chirurgie du Type A : Remplacement de l'aorte ascendante +/- valve pour prévenir la rupture."
  },
  {
    id: 'q-diss-14',
    courseId: 'crs-dissection',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La différence fondamentale entre un anévrysme et une dissection aortique est :",
    options: [
      "a) La présence d'une douleur",
      "b) Le diamètre de l'aorte",
      "c) L'existence d'une déchirure intimale créant un faux chenal",
      "d) Le terrain du patient",
      "e) Le traitement chirurgical"
    ],
    correctAnswers: [2],
    explanation: "L'anévrysme est une dilatation localisée. La dissection est un clivage de la paroi par un hématome disséquant, suite à une brèche intimale. Un anévrysme peut se compliquer de dissection.",
    clinicalPearl: "Dissection = Clivage de la média par déchirure intimale créant vrai et faux chenal."
  },
  {
    id: 'q-diss-15',
    courseId: 'crs-dissection',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"double contour\" ou \"double lumière\" visualisé au scanner est dû à :",
    options: [
      "a) Deux aortes",
      "b) La présence du flap intimal séparant le vrai et le faux chenal",
      "c) Un artéfact de mouvement",
      "d) Un thrombus mural",
      "e) Un ulcère athéromateux"
    ],
    correctAnswers: [1],
    explanation: "C'est le signe scanographique direct et pathognomonique de la dissection. Le flap intimal est la membrane qui sépare les deux lumières.",
    clinicalPearl: "Signe pathognomonique au scanner : Flap intimal séparant vrai et faux chenal."
  },
  {
    id: 'q-diss-16',
    courseId: 'crs-dissection',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La cause la plus fréquente de décès dans les dissections de type B non compliquées sous traitement médical est :",
    options: [
      "a) La rupture aortique",
      "b) L'insuffisance rénale",
      "c) L'infarctus du myocarde",
      "d) L'accident vasculaire cérébral",
      "e) L'infection"
    ],
    correctAnswers: [0],
    explanation: "Même sous traitement médical optimal, l'évolution peut être défavorable. La rupture reste la complication la plus mortelle pour les types B, justifiant une surveillance rapprochée.",
    clinicalPearl: "Complication mortelle majeure du Type B = Rupture anévrysmale secondaire."
  },
  {
    id: 'q-diss-17',
    courseId: 'crs-dissection',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'échocardiographie transœsophagienne (ETO) est particulièrement utile car elle :",
    options: [
      "a) Est plus confortable que le TDM",
      "b) Peut être réalisée au lit du patient instable",
      "c) Visualise mieux l'aorte abdominale",
      "d) Élimine le besoin d'autres examens",
      "e) Est moins coûteuse"
    ],
    correctAnswers: [1],
    explanation: "L'ETO est très performante pour les types A. Son grand avantage est sa mobilité, permettant un diagnostic rapide en réanimation ou au bloc opératoire sans déplacer un patient hémodynamiquement précaire.",
    clinicalPearl: "ETO : Réalisable au lit du patient instable ou au bloc opératoire."
  },
  {
    id: 'q-diss-18',
    courseId: 'crs-dissection',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient opéré d'une dissection de type A doit avoir un suivi radiologique à vie car :",
    options: [
      "a) Le risque de récidive est élevé",
      "b) Le faux chenal dans l'aorte descendante peut évoluer (dilatation, rupture)",
      "c) Il peut développer une infection du matériel prothétique",
      "d) Il faut surveiller l'apparition d'un nouveau diabète",
      "e) Les sutures chirurgicales se relâchent toujours"
    ],
    correctAnswers: [1],
    explanation: "La chirurgie traite l'aorte ascendante, mais la dissection peut s'étendre dans l'aorte descendante qui reste en place. Ce segment doit être surveillé par TDM/IRM réguliers pour détecter une dilatation anévrysmale secondaire.",
    clinicalPearl: "Suivi post-dissection : \"Toujours TDM\" : Surveillance TDM/IRM à vie de l'aorte résiduelle."
  },
  {
    id: 'q-diss-19',
    courseId: 'crs-dissection',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La thrombolyse est contre-indiquée en cas de suspicion d'infarctus du myocarde si :",
    options: [
      "a) Le patient a plus de 70 ans",
      "b) Il existe une asymétrie tensionnelle",
      "c) La douleur irradie dans le bras gauche",
      "d) Le patient est diabétique",
      "e) La pression artérielle est élevée"
    ],
    correctAnswers: [1],
    explanation: "L'asymétrie tensionnelle est un drapeau rouge pour une dissection aortique. Administrer un thrombolytique en présence d'une dissection est catastrophique, augmentant le risque de rupture et d'hémorragie massive.",
    clinicalPearl: "\"Pas de Thrombolyse sans TDM\" : Asymétrie des pouls ou souffle d'IA = Éliminer la dissection !"
  },
  {
    id: 'q-diss-20',
    courseId: 'crs-dissection',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale limite de la radiographie thoracique standard dans le diagnostic est :",
    options: [
      "a) Son coût",
      "b) Sa faible sensibilité et spécificité",
      "c) Son incapacité à visualiser les poumons",
      "d) La nécessité d'une injection de produit de contraste",
      "e) Les radiations ionisantes"
    ],
    correctAnswers: [1],
    explanation: "La RX peut être normale ou montrer des signes indirects (élargissement du médiastin) mais elle manque de sensibilité. Un médiastin normal n'élimine pas une dissection. Elle ne permet pas de poser un diagnostic de certitude.",
    clinicalPearl: "Une radiographie thoracique normale n'élimine JAMAIS une dissection aortique !"
  },
  {
    id: 'q-diss-21',
    courseId: 'crs-dissection',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mécanisme physiopathologique principal de l'insuffisance aortique dans la dissection de type A est :",
    options: [
      "a) La dilatation annulaire",
      "b) La dystrophie valvulaire",
      "c) La perte de support valvulaire par le flap intimal",
      "d) L'endocardite infectieuse",
      "e) La rhumatisme articulaire aigu"
    ],
    correctAnswers: [2],
    explanation: "Le flap intimal dans l'aorte ascendante peut prolaber dans l'ostium coronaire ou empêcher la coaptation correcte des sigmoïdes aortiques en diastole, provoquant une insuffisance aortique aiguë par mécanisme \"valvulaire\" plutôt que par maladie valvulaire intrinsèque.",
    clinicalPearl: "IA aiguë de la dissection = Prolapsus du flap intimal dans l'orifice valvulaire."
  },
  {
    id: 'q-diss-22',
    courseId: 'crs-dissection',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La prise en charge d'une dissection de type B compliquée (malperfusion, dilatation, douleur persistante) est :",
    options: [
      "a) Médicale exclusive",
      "b) Chirurgicale ouverte classique",
      "c) Endovasculaire (pose de stent-graft)",
      "d) Thrombolyse",
      "e) Abstention thérapeutique"
    ],
    correctAnswers: [2],
    explanation: "Le traitement de première intention des types B compliqués est devenu la réparation endovasculaire (TEVAR). Elle permet de couvrir la porte d'entrée, de thromboser le faux chenal et de rétablir la perfusion, avec une morbidité inférieure à la chirurgie ouverte (b).",
    clinicalPearl: "Type B compliqué = Traitement endovasculaire TEVAR de première intention."
  },
  {
    id: 'q-diss-23',
    courseId: 'crs-dissection',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de Marfan est associé à un défaut génétique affectant :",
    options: [
      "a) Le collagène de type I",
      "b) L'élastine",
      "c) La fibrilline-1",
      "d) La laminine",
      "e) La kératine"
    ],
    correctAnswers: [2],
    explanation: "La fibrilline-1 est une glycoprotéine essentielle des microfibrilles, cruciale pour l'intégrité de la matrice élastique de la média aortique. Son défaut dans le syndrome de Marfan fragilise la paroi.",
    clinicalPearl: "Mutation FBN1 (Fibrilline-1) = Syndrome de Marfan (fragilité élastique de la média)."
  },
  {
    id: 'q-diss-24',
    courseId: 'crs-dissection',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient se présentant avec une hémiparésie droite et une douleur thoracique déchirante doit faire évoquer :",
    options: [
      "a) Un AVC ischémique seul",
      "b) Une dissection aortique étendue au tronc artériel brachiocéphalique",
      "c) Une migraine avec aura",
      "d) Une tumeur cérébrale",
      "e) Une crise d'épilepsie"
    ],
    correctAnswers: [1],
    explanation: "La dissection de type A peut s'étendre aux vaisseaux supra-aortiques. L'atteinte du tronc brachiocéphalique peut entraîner une malperfusion cérébrale droite, se manifestant par un déficit moteur controlatéral (hémiparésie droite). Il faut toujours penser à la dissection devant un AVC associé à une douleur thoracique.",
    clinicalPearl: "AVC + Douleur thoracique = Dissection aortique jusqu'à preuve du contraire (ne pas thrombolyser !)."
  },
  {
    id: 'q-diss-25',
    courseId: 'crs-dissection',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le but principal de l'utilisation du nitroprussiate de sodium est :",
    options: [
      "a) Réduire la précharge",
      "b) Réduire la postcharge en vasodilatant les artérioles",
      "c) Ralentir la fréquence cardiaque",
      "d) Prévenir les troubles du rythme",
      "e) Lutter contre l'ischémie mésentérique"
    ],
    correctAnswers: [1],
    explanation: "Le nitroprussiate est un vasodilatateur artériolaire puissant. Il est utilisé seulement après l'introduction d'un bêta-bloquant pour contrôler la pression artérielle. Utilisé seul, il peut augmenter la force d'éjection (dP/dt) et aggraver la dissection.",
    clinicalPearl: "Nitroprussiate : Toujours administrer APRÈS un bêtabloquant pour éviter l'effet dP/dt réflexe."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-diss-01',
    courseId: 'crs-dissection',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La douleur en coup de poignard\nUn homme de 48 ans, hypertendu connu mais irrégulier dans son traitement, est admis aux urgences pour une douleur thoracique haute, rétrosternale, à irradiation interscapulaire, décrite comme \"un coup de poignard\". Il est agité, diaphorétique. PA à 185/100 mmHg, FC 110/min. L'examen note un souffle diastolique apical et un pouls fémoral droit absent.\nQ1. Quel est le diagnostic le plus probable ?\nQ2. Quel examen demandez-vous en extrême urgence ?",
    options: [
      "a) Infarctus du myocarde STEMI / Coronarographie immédiate",
      "b) Embolie pulmonaire massive / Scintigraphie pulmonaire",
      "c) Dissection aortique de type Stanford A / Angio-TDM thoraco-abdomino-pelvien",
      "d) Pancréatite aiguë / Lipasémie",
      "e) Ulcère gastrique perforé / Radiographie de l'abdomen sans préparation"
    ],
    correctAnswers: [2],
    explanation: "Dissection aortique de type Stanford A. La triade \"HTA + douleur déchirante/irradiant dans le dos + signes de complications (IAA, malperfusion membre)\" est classique du type A. L'angio-TDM large (thorax-abdomen-pelvis) est indispensable pour confirmer le diagnostic et évaluer l'extension.",
    clinicalPearl: "Triade : Douleur dorsale + Asymétrie des pouls + Souffle diastolique = Dissection Type A."
  },
  {
    id: 'cas-diss-02',
    courseId: 'crs-dissection',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : Marfan et lombalgie aiguë\nUne femme de 35 ans, suivie pour syndrome de Marfan, consulte pour des lombalgies intenses apparues brutalement. PA 140/80 mmHg. L'examen clinique est sans particularité, sans asymétrie de pouls.\nQ1. Devant cette douleur chez cette patiente, que craignez-vous ?\nQ2. Quelle est la prise en charge initiale avant tout examen ?",
    options: [
      "a) Pyélonéphrite aiguë / Antibiothérapie large",
      "b) Dissection aortique débutant au niveau de l'isthme (type B) / Bêta-bloquant IV et contrôle tensionnel strict",
      "c) Lumbago aigu / AINS per os",
      "d) Endométriose / Échographie pelvienne",
      "e) Colique néphrétique / Antispasmodiques simples"
    ],
    correctAnswers: [1],
    explanation: "Dissection aortique de type B. Le syndrome de Marfan est un terrain à haut risque. Une douleur dorsale/lombaire brutale doit faire évoquer une dissection. La stabilisation hémodynamique (bêta-bloquant IV pour réduire le dP/dt) est la priorité immédiate.",
    clinicalPearl: "Marfan + Douleur dorsale ou lombaire brutale = Dissection de type B jusqu'à preuve du contraire."
  },
  {
    id: 'cas-diss-03',
    courseId: 'crs-dissection',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Douleur abdominale et état de choc\nUn homme de 70 ans arrive avec une douleur abdominale sus-ombilicale féroce, des nausées et une rectorragie minime. Il est en état de choc. PA 80/50 mmHg, FC 135/min. L'examen abdominal est sensible sans défense.\nQ1. Quelle complication d'une dissection aortique faut-il évoquer ?\nQ2. Quel examen permettra un bilan lésionnel complet ?",
    options: [
      "a) Ischémie mésentérique aiguë / Angio-TDM abdominal injecté",
      "b) Diverticulite perforée / Scanner sans injection",
      "c) Rupture de rate / Échographie abdominale seule",
      "d) Cholécystite aiguë / Laparotomie d'emblée",
      "e) Gastro-entérite / Coloscopie"
    ],
    correctAnswers: [0],
    explanation: "Ischémie mésentérique aiguë compliquant une dissection aortique. La triade \"douleur abdominale disproportionnée + rectorragie + choc\" chez un patient avec dissection évoque l'extension du flap à l'artère mésentérique supérieure. L'angio-TDM injecté confirme l'atteinte.",
    clinicalPearl: "Malperfusion mésentérique = Complication gravissime de la dissection de l'aorte abdominale."
  },
  {
    id: 'cas-diss-04',
    courseId: 'crs-dissection',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Paraplégie post-opératoire\nUn patient opéré il y a 24h d'une dissection de type A sous CEC développe une oligurie, une augmentation de la créatininémie et une paralysie flasque des deux membres inférieurs.\nQ1. Quelle est la complication la plus probable ?\nQ2. Quel mécanisme est en cause ?",
    options: [
      "a) Sepsis sévère / Choc septique",
      "b) Infarctus du myocarde / Thrombose de pontage",
      "c) Ischémie médullaire (paraplégie) / Lésion ou exclusion de l'artère d'Adamkiewicz",
      "d) Rejet de greffe prothétique / Réaction immunologique",
      "e) Hypokaliémie sévère / Trouble métabolique"
    ],
    correctAnswers: [2],
    explanation: "Ischémie médullaire post-opératoire. La vascularisation de la moelle épinière dépend des artères radiculo-médullaires (notamment l'artère d'Adamkiewicz naissant entre T8 et L2). La dissection ou le clampage aortique peut entraîner un infarctus médullaire.",
    clinicalPearl: "Paraplégie post-chirurgie aortique = Ischémie du territoire de l'artère d'Adamkiewicz."
  },
  {
    id: 'cas-diss-05',
    courseId: 'crs-dissection',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le piège de l'ECG\nDevant une suspicion de dissection aortique, le médecin urgentiste demande un ECG qui montre un sus-décalage du segment ST dans les territoires inférieurs.\nQ1. Quelle est votre attitude immédiate ?",
    options: [
      "a) Traiter comme un STEMI classique et indiquer une thrombolyse en urgence",
      "b) Demander une coronarographie en extrême urgence sans TDM",
      "c) Suspendre la thrombolyse, réaliser un angio-TDM en urgence pour éliminer une dissection compliquée d'IDM par dissection d'un ostium coronaire",
      "d) Faire un écho-doppler veineux des membres inférieurs",
      "e) Prescrire des antalgiques simples et attendre"
    ],
    correctAnswers: [2],
    explanation: "Suspendre impérativement toute thrombolyse et réaliser un angio-TDM en urgence. Une dissection de type A peut obstruer l'ostium coronaire droit et donner un sus-décalage ST inférieur trompeur. Thrombolyser une dissection entraîne une hémorragie fatale.",
    clinicalPearl: "Piège mortel : Dissection Type A avec atteinte de l'ostium coronaire droit mimant un STEMI inférieur !"
  }
];
