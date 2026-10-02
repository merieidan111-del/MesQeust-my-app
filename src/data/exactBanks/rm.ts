import { Question } from '../../types/medical';

export const RM_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-rm-01',
    courseId: 'crs-rm',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La cause étiologique la plus fréquente du rétrécissement mitral (RM) pur dans le monde est :",
    options: [
      "a) La dégénérescence calcifique du sujet âgé.",
      "b) La maladie de Barlow.",
      "c) Le rhumatisme articulaire aigu (RAA).",
      "d) L'endocardite infectieuse.",
      "e) La cardiopathie congénitale (malformation en parachute)."
    ],
    correctAnswers: [2],
    explanation: "Bien que le RM dégénératif soit de plus en plus observé dans les pays occidentaux, le RAA reste la cause prédominante de RM pur dans le monde, notamment en Algérie et dans les régions où la prévalence du RAA est encore élevée. Il entraîne une fusion commissurale, un épaississement et une calcification des valves.",
    clinicalPearl: "Étiologie n°1 du RM dans le monde et en Algérie = RAA (fusion commissurale caractéristique)."
  },
  {
    id: 'q-rm-02',
    courseId: 'crs-rm',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal mécanisme physiopathologique responsable de la dyspnée dans le RM ?",
    options: [
      "a) Une augmentation de la post-charge du ventricule gauche.",
      "b) Une diminution du débit cardiaque.",
      "c) Une élévation de la pression télédiastolique du ventricule gauche.",
      "d) Une élévation de la pression de l'oreillette gauche et capillaire pulmonaire.",
      "e) Une insuffisance ventriculaire droite systolique."
    ],
    correctAnswers: [3],
    explanation: "L'obstacle diastolique au niveau de la valve mitrale entraîne une augmentation de la pression en amont, c'est-à-dire dans l'oreillette gauche. Cette hypertension auriculaire gauche se répercute sur les veines pulmonaires et les capillaires, provoquant une congestion pulmonaire et donc une dyspnée. L'élévation de la pression ventriculaire gauche n'est pas le phénomène principal.",
    clinicalPearl: "Mécanisme de la dyspnée dans le RM = Barrière mitrale → Hyperpression dans l'OG → Hyperpression veineuse et capillaire pulmonaire."
  },
  {
    id: 'q-rm-03',
    courseId: 'crs-rm',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'auscultation cardiaque, le signe le plus caractéristique du RM est :",
    options: [
      "a) Un claquement d'ouverture mitrale protodiastolique.",
      "b) Un roulement diastolique au foyer mitral.",
      "c) Un éclat du B2 au foyer pulmonaire.",
      "d) Un souffle télésystolique irradiant vers l'aisselle.",
      "e) Un souffle mésotélédiastolique."
    ],
    correctAnswers: [1],
    explanation: "Le roulement diastolique de basse fréquence est la signature auscultatoire du RM, dû au passage turbulent du sang à travers l'orifice mitral rétréci. Le claquement d'ouverture (a) est très évocateur mais n'est pas constant (présent surtout en cas de valve encore souple). Le souffle télésystolique (d) est typique d'une insuffisance mitrale.",
    clinicalPearl: "\"Roulement Diastolique = Rétrécissement Mitral\" (lettres R et D stables, maximal en décubitus latéral gauche)."
  },
  {
    id: 'q-rm-04',
    courseId: 'crs-rm',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente un RM serré. Quel est le signe électrocardiographique le plus spécifiquement attendu ?",
    options: [
      "a) Hypertrophie ventriculaire gauche.",
      "b) Bloc de branche droit.",
      "c) Fibrillation auriculaire.",
      "d) Ondes P larges et bifides en DII : \"P mitrale\".",
      "e) Surcharge ventriculaire droite."
    ],
    correctAnswers: [3],
    explanation: "La \"P mitrale\" traduit une hypertrophie auriculaire gauche due à la lutte contre l'obstacle mitral. C'est un signe très spécifique, mais peu sensible. La fibrillation auriculaire (c) est une complication fréquente mais n'est pas spécifique. L'HVG (a) est rare dans le RM pur, le retentissement se faisant d'abord sur l'OG.",
    clinicalPearl: "Signe ECG spécifique du RM en rythme sinusal = Onde P mitrale (largeur >= 120 ms, bifide en DII)."
  },
  {
    id: 'q-rm-05',
    courseId: 'crs-rm',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La méthode de choix pour quantifier la sévérité d'un RM est :",
    options: [
      "a) L'électrocardiogramme.",
      "b) La radiographie thoracique.",
      "c) Le cathétérisme cardiaque.",
      "d) L'échocardiographie Doppler.",
      "e) L'IRM cardiaque."
    ],
    correctAnswers: [3],
    explanation: "L'échocardiographie Doppler est non invasive, facilement accessible et permet une évaluation complète : planimétrie directe de l'orifice, calcul de la surface par la PHT (Surface Mitrale = 220 / PHT), estimation des gradients et des pressions artérielles pulmonaires. Le cathétérisme (c) est réservé à des cas complexes.",
    clinicalPearl: "Échocardiographie-Doppler = Gold standard non invasif pour mesurer la surface mitrale (planimétrie et PHT)."
  },
  {
    id: 'q-rm-06',
    courseId: 'crs-rm',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La méthode de calcul de la surface mitrale (SM) par la Période de Demi-Pression (PHT) utilise la formule :",
    options: [
      "a) SM = PHT / 220",
      "b) SM = 220 x PHT",
      "c) SM = 220 / PHT",
      "d) SM = Gradient max / PHT",
      "e) SM = VTI / PHT"
    ],
    correctAnswers: [2],
    explanation: "C'est la formule empirique de Hatle. La PHT est le temps que met le gradient de pression à diminuer de moitié. Un RM serré entraîne une vidange lente de l'OG, donc une PHT longue. Ainsi, une PHT longue donnera une SM calculée petite, ce qui est cohérent avec la physiopathologie.",
    clinicalPearl: "Formule de Hatle : SM = 220 / PHT (plus la PHT est longue, plus la sténose est serrée)."
  },
  {
    id: 'q-rm-07',
    courseId: 'crs-rm',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un RM est considéré comme \"très serré\" lorsque la surface mitrale est :",
    options: [
      "a) < 2.0 cm²",
      "b) < 1.5 cm²",
      "c) < 1.0 cm²",
      "d) < 0.8 cm²",
      "e) < 4.0 cm²"
    ],
    correctAnswers: [2],
    explanation: "Selon les recommandations et votre cours : Normal = 4-6 cm². RM significatif < 1.5 cm². RM serré < 1.5 cm². RM très serré < 1.0 cm². C'est un seuil critique pour la décision thérapeutique.",
    clinicalPearl: "Seuils surface mitrale : Normal = 4-6 cm² ; Serré < 1.5 cm² ; Très serré < 1.0 cm²."
  },
  {
    id: 'q-rm-08',
    courseId: 'crs-rm',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication la plus fréquente du RM est :",
    options: [
      "a) L'œdème aigu du poumon.",
      "b) L'embolie systémique.",
      "c) L'endocardite infectieuse.",
      "d) La fibrillation auriculaire.",
      "e) L'hémoptysie."
    ],
    correctAnswers: [3],
    explanation: "L'hypertension et la dilatation de l'oreillette gauche prédisposent fortement à l'apparition de troubles du rythme auriculaire, en particulier la fibrillation auriculaire, qui survient chez une majorité de patients au cours de l'évolution de la maladie.",
    clinicalPearl: "Complication n°1 du RM = Fibrillation atriale (source majeure d'embolies systémiques cérébrales)."
  },
  {
    id: 'q-rm-09',
    courseId: 'crs-rm',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le retentissement cavitaire DIRECT et initial du RM ?",
    options: [
      "a) Hypertrophie ventriculaire droite.",
      "b) Dilatation ventriculaire gauche.",
      "c) Dilatation de l'oreillette gauche.",
      "d) Dilatation de l'oreillette droite.",
      "e) Hypertrophie ventriculaire gauche."
    ],
    correctAnswers: [2],
    explanation: "L'obstacle est situé entre l'OG et le VG. La première cavité à en souffrir est l'OG, qui se dilate et s'hypertrophie pour essayer de vaincre la sténose. Le retentissement sur les cavités droites (a, d) est secondaire à l'hypertension artérielle pulmonaire.",
    clinicalPearl: "Conséquence directe : Dilatation et hypertrophie de l'OG. Le VG reste de taille normale dans le RM pur !"
  },
  {
    id: 'q-rm-10',
    courseId: 'crs-rm',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médical de fond du RM a pour objectif principal :",
    options: [
      "a) De réduire la post-charge du VG.",
      "b) De ralentir la fréquence cardiaque.",
      "c) De guérir la lésion valvulaire.",
      "d) De prévenir l'endocardite infectieuse.",
      "e) De dilater la valve mitrale."
    ],
    correctAnswers: [1],
    explanation: "En ralentissant la fréquence cardiaque (par les bêta-bloquants ou les inhibiteurs calciques non dihydropyridiniques), on allonge le temps de diastole. Un temps diastolique plus long permet un meilleur remplissage du VG à travers l'orifice sténosé, réduisant ainsi le gradient et les pressions en amont. Ce traitement ne guérit pas la lésion.",
    clinicalPearl: "Objectif médical n°1 du RM : Ralentir la FC pour allonger la diastole et faire chuter la pression dans l'OG."
  },
  {
    id: 'q-rm-11',
    courseId: 'crs-rm',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication absolue à un traitement interventionnel (valvuloplastie ou chirurgie) d'un RM est :",
    options: [
      "a) Un RM serré (SM < 1,5 cm²) chez un patient asymptomatique.",
      "b) Un RM modéré (SM = 1,5 - 2,0 cm²) avec fibrillation auriculaire.",
      "c) Un RM serré (SM < 1,5 cm²) symptomatique.",
      "d) La simple présence d'un \"claquement d'ouverture\".",
      "e) Un RM quelconque découvert à la radiographie."
    ],
    correctAnswers: [2],
    explanation: "L'apparition de symptômes (dyspnée) chez un patient ayant un RM hémodynamiquement serré est une indication formelle à un geste de désobstruction. Le traitement médical seul est alors insuffisant. L'asymptomatique (a) nécessite une surveillance stricte.",
    clinicalPearl: "RM serré (SM < 1.5 cm²) + Symptômes (dyspnée) = Indication formelle à la levée de l'obstacle."
  },
  {
    id: 'q-rm-12',
    courseId: 'crs-rm',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La valvuloplastie mitrale percutanée (VMP) est contre-indiquée en cas de :",
    options: [
      "a) Fibrillation auriculaire.",
      "b) Calcification valvulaire mitrale importante ou thrombus de l'oreillette gauche.",
      "c) Hypertension artérielle pulmonaire sévère.",
      "d) Antécédent d'embolie pulmonaire.",
      "e) Age avancé."
    ],
    correctAnswers: [1],
    explanation: "Un score de calcification élevé évalué au scanner ou à l'ETO est une contre-indication majeure à la VMP, car il majore le risque de complications (insuffisance mitrale, rupture, résultat sous-optimal). La fibrillation auriculaire (a) n'est pas une contre-indication, mais nécessite une anticoagulation efficace.",
    clinicalPearl: "Contre-indications VMP (les 4 T) : Thrombus OG, Trop de calcifications (Wilkins > 8-10), Trop d'IM (> 2/4), Trop de fibrose."
  },
  {
    id: 'q-rm-13',
    courseId: 'crs-rm',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe échocardiographique en mode M est classiquement décrit dans le RM ?",
    options: [
      "a) Mouvement paradoxal du septum.",
      "b) Asynergie pariétale.",
      "c) Diminution de la fraction d'éjection.",
      "d) Aspect en \"créneau\" de la valve mitrale.",
      "e) Dilatation de l'aorte ascendante."
    ],
    correctAnswers: [3],
    explanation: "En mode M, à travers la valve mitrale, on observe un mouvement anormal de la valve mitrale qui reste en position ouverte (vers le bas) pendant toute la diastole, au lieu de se refermer partiellement après la phase de remplissage rapide. Ceci est dû à la fusion des commissures.",
    clinicalPearl: "Signe échocardiographique mode M historique : Aspect en créneau de la valve mitrale en diastole."
  },
  {
    id: 'q-rm-14',
    courseId: 'crs-rm',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'hémoptysie dans le RM est le plus souvent due à :",
    options: [
      "a) Un infarctus pulmonaire.",
      "b) Une rupture de varices broncho-pulmonaires.",
      "c) Une tuberculose pulmonaire associée.",
      "d) Un œdème pulmonaire lésionnel.",
      "e) Un cancer bronchique."
    ],
    correctAnswers: [1],
    explanation: "L'hypertension veineuse pulmonaire chronique peut entraîner la formation de varices dans les parois bronchiques. Leur rupture, même pour une poussée hypertensive modérée, peut provoquer une hémoptysie, parfois massive. C'est la \"hémoptysie de rupture\".",
    clinicalPearl: "Hémoptysie du RM = Rupture de varices veineuses bronchiques sous l'effet de l'hypertension veineuse pulmonaire."
  },
  {
    id: 'q-rm-15',
    courseId: 'crs-rm',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le diagnostic différentiel du roulement diastolique mitral peut inclure :",
    options: [
      "a) Le rétrécissement aortique.",
      "b) Le souffle continu d'une CIA.",
      "c) Le roulement diastolique d'un anévrysme du VG.",
      "d) Le souffle mésosystolique du rétrécissement aortique.",
      "e) Le claquement d'ouverture de la valve aortique."
    ],
    correctAnswers: [1],
    explanation: "Le souffle continu (systolo-diastolique) d'une communication interauriculaire (CIA) avec shunt important peut être confondu à l'auscultation avec un roulement diastolique, surtout si le souffle systolique (dû au shunt) et le roulement diastolique (dû au flux tricuspide relatif) se chevauchent. L'échocardiographie fait la différence.",
    clinicalPearl: "Diagnostic différentiel auscultatoire : Roulement d'hyperdébit tricuspide d'une large CIA."
  },
  {
    id: 'q-rm-16',
    courseId: 'crs-rm',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le mécanisme de l'éclat du B2 au foyer pulmonaire ?",
    options: [
      "a) Une fermeture brutale de la valve aortique.",
      "b) Une hypertension artérielle pulmonaire.",
      "c) Une insuffisance aortique.",
      "d) Une rigidité de la valve pulmonaire.",
      "e) Une augmentation du débit cardiaque."
    ],
    correctAnswers: [1],
    explanation: "Le retentissement du RM sur la circulation pulmonaire entraîne une hypertension artérielle pulmonaire (HTAP). Cette HTAP provoque une fermeture plus forte et plus rapide de la valve pulmonaire, ce qui se perçoit à l'auscultation comme un éclat du B2 au foyer pulmonaire.",
    clinicalPearl: "Éclat de B2 au 2ème EIC gauche = Témoin auscultatoire direct de l'HTAP."
  },
  {
    id: 'q-rm-17',
    courseId: 'crs-rm',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication embolique du RM est favorisée par :",
    options: [
      "a) La stase sanguine dans l'oreillette gauche dilatée.",
      "b) Un débit cardiaque élevé.",
      "c) La présence d'une insuffisance mitrale associée.",
      "d) L'hypertension artérielle systémique.",
      "e) La bradycardie."
    ],
    correctAnswers: [0],
    explanation: "La dilatation et la fibrillation auriculaire de l'OG créent un terrain propice à la formation de thrombus, surtout dans l'appendice auriculaire gauche. Ces thrombus peuvent se détacher et provoquer des embolies systémiques (AVC ischémique, embolie mésentérique, etc.).",
    clinicalPearl: "Dilatation de l'OG + FA = Stase sanguine majeure et thrombose auriculaire."
  },
  {
    id: 'q-rm-18',
    courseId: 'crs-rm',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen est indispensable avant une valvuloplastie mitrale percutanée pour évaluer le risque d'obstruction de la voie d'éjection du VG et éliminer un thrombus ?",
    options: [
      "a) L'électrocardiogramme.",
      "b) La coronarographie.",
      "c) L'échocardiographie transœsophagienne (ETO).",
      "d) L'IRM cardiaque.",
      "e) La radiographie thoracique."
    ],
    correctAnswers: [2],
    explanation: "L'ETO, souvent complétée par un scanner cardiaque, permet d'évaluer de manière très précise le risque d'obstruction de la chambre de chasse du ventricule gauche (CCVG). La présence d'un thrombus dans l'auricule gauche est aussi une contre-indication absolue que seul l'ETO peut éliminer formellement.",
    clinicalPearl: "ETO obligatoire avant toute VMP pour éliminer formellement un thrombus de l'auricule gauche."
  },
  {
    id: 'q-rm-19',
    courseId: 'crs-rm',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"coup de tonnerre\" mitral ausculté en décubitus latéral gauche correspond à :",
    options: [
      "a) Le B1 claqué.",
      "b) Le claquement d'ouverture mitral.",
      "c) Le roulement diastolique.",
      "d) Le B2.",
      "e) Un souffle systolique."
    ],
    correctAnswers: [0],
    explanation: "Dans le RM, le B1 est souvent très fort (\"coup de tonnerre\" ou \"claquement\") car les valves mitrales, bien qu'épaissies, restent souples au début et se ferment brutalement en début de systole sous l'effet de la forte pression ventriculaire gauche. Ce signe disparaît lorsque la valve devient rigide et calcifiée.",
    clinicalPearl: "Éclat de B1 à la pointe (\"coup de tonnerre\") = Fermeture explosive des valves mitrales souples."
  },
  {
    id: 'q-rm-20',
    courseId: 'crs-rm',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement anticoagulant est indiqué dans le RM en cas de :",
    options: [
      "a) RM serré asymptomatique en rythme sinusal sans antécédent.",
      "b) Antécédent d'embolie systémique, quel que soit le rythme, ou fibrillation atriale.",
      "c) RM modéré en rythme sinusal sans dilatation.",
      "d) Dyspnée stade NYHA II isolée en rythme sinusal.",
      "e) Hypertension artérielle pulmonaire isolée sans arythmie."
    ],
    correctAnswers: [1],
    explanation: "Un antécédent d'embolie systémique est une indication formelle à l'anticoagulation au long cours, même si le patient est en rythme sinusal, car il témoigne d'un terrain hypercoagulable ou pro-thrombotique au niveau de l'OG. La fibrillation auriculaire est l'autre grande indication.",
    clinicalPearl: "\"FA ou Embolie\" = Anticoagulation curative obligatoire par AVK dans le rétrécissement mitral."
  },
  {
    id: 'q-rm-21',
    courseId: 'crs-rm',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal facteur pronostique péjoratif dans le RM ?",
    options: [
      "a) L'âge jeune.",
      "b) L'apparition de symptômes (dyspnée).",
      "c) La présence d'un claquement d'ouverture.",
      "d) Un gradient mitral moyen bas.",
      "e) Une petite oreillette gauche."
    ],
    correctAnswers: [1],
    explanation: "La survie des patients symptomatiques non traités est médiocre. L'apparition des symptômes marque un tournant dans l'histoire naturelle de la maladie et est l'élément clé qui déclenche la décision d'intervention. Un gradient bas (d) peut être le signe d'un bas débit cardiaque, ce qui est aussi de mauvais pronostic.",
    clinicalPearl: "Apparition des symptômes = Chute de survie, indication impérative d'intervention mécanique."
  },
  {
    id: 'q-rm-22',
    courseId: 'crs-rm',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La manœuvre qui potentialise le roulement diastolique du RM est :",
    options: [
      "a) L'inspiration profonde.",
      "b) L'expiration forcée.",
      "c) Le décubitus latéral gauche.",
      "d) L'exercice physique (accroupissements).",
      "e) La position debout."
    ],
    correctAnswers: [2],
    explanation: "Mettre le patient en décubitus latéral gauche rapproche le cœur de la paroi thoracique, ce qui permet de mieux entendre le roulement diastolique de basse fréquence. L'exercice (d) augmente l'intensité de tous les bruits du cœur, mais le décubitus latéral gauche est une manœuvre d'auscultation spécifique pour le foyer mitral.",
    clinicalPearl: "Auscultation en décubitus latéral gauche à l'apex : manœuvre fondamentale pour entendre le roulement."
  },
  {
    id: 'q-rm-23',
    courseId: 'crs-rm',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"temps de demi-pression\" (PHT) en écho-Doppler :",
    options: [
      "a) Est inversement proportionnel à la sévérité du RM.",
      "b) Est raccourci dans les RM sévères.",
      "c) Permet de calculer la surface mitrale par la formule SM = 220 / PHT.",
      "d) Se mesure sur la courbe de vélocité de l'insuffisance mitrale.",
      "e) Est utilisé pour calculer la surface aortique."
    ],
    correctAnswers: [2],
    explanation: "La PHT est le temps que met le gradient entre l'OG et le VG à diminuer de moitié. Plus le RM est serré, plus la vidange de l'OG est lente, plus le gradient met du temps à chuter, donc plus la PHT est longue. Comme la formule est SM = 220 / PHT, une PHT longue donne une SM petite.",
    clinicalPearl: "Formule clé : Surface Mitrale = 220 / PHT."
  },
  {
    id: 'q-rm-24',
    courseId: 'crs-rm',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La contre-indication à la valvuloplastie mitrale percutanée (VMP) est :",
    options: [
      "a) Une insuffisance mitrale modérée.",
      "b) Une fibrillation auriculaire.",
      "c) Un score échocardiographique Wilkins > 8/16.",
      "d) Un score échocardiographique Wilkins < 8/16.",
      "e) Une hypertension artérielle pulmonaire."
    ],
    correctAnswers: [2],
    explanation: "Le score de Wilkins évalue l'aspect de la valve (mobilité, épaississement, calcification, atteinte sous-valvulaire) sur 16. Un score > 8-10 indique des lésions défavorables (valve trop rigide et calcifiée) et est généralement une contre-indication à la VMP, car le résultat sera médiocre et le risque de complication élevé.",
    clinicalPearl: "Score de Wilkins > 8/16 = Anatomie défavorable, contre-indication relative à la VMP → Chirurgie."
  },
  {
    id: 'q-rm-25',
    courseId: 'crs-rm',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le suivi d'un patient avec un RM serré asymptomatique doit inclure :",
    options: [
      "a) Une échocardiographie tous les 6 mois.",
      "b) Une échocardiographie tous les 1-2 ans.",
      "c) Une coronarographie annuelle.",
      "d) Un holter-ECG mensuel.",
      "e) Aucune surveillance n'est nécessaire."
    ],
    correctAnswers: [0],
    explanation: "L'évolution d'un RM serré asymptomatique peut être rapide et imprévisible. Une surveillance échocardiographique rapprochée (tous les 6 à 12 mois) est recommandée pour ne pas manquer l'apparition de symptômes, l'aggravation hémodynamique ou l'apparition d'une indication à l'intervention.",
    clinicalPearl: "RM serré asymptomatique : Évaluation clinique et échocardiographique tous les 6 mois."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-rm-01',
    courseId: 'crs-rm',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La Jeune Femme Dyspnéique\nMlle K.A., 28 ans, consulte pour une dyspnée stade NYHA II d'aggravation progressive. L'auscultation cardiaque trouve un B1 sec, un roulement diastolique au foyer mitral avec un frémissement. L'ECG montre une onde P mitrale et une fibrillation auriculaire. La radiographie thoracique montre un aspect de double contour du bord droit du cœur.\n1. Quel est le diagnostic le plus probable ?\n2. Quel examen demander en première intention pour confirmer et quantifier le diagnostic ?",
    options: [
      "a) Communication interauriculaire / Angioscanner thoracique",
      "b) Rétrécissement mitral serré / Échocardiographie transthoracique Doppler",
      "c) Insuffisance mitrale / IRM cardiaque",
      "d) Rétrécissement aortique / Coronarographie",
      "e) Myxome de l'oreillette gauche / Scintigraphie"
    ],
    correctAnswers: [1],
    explanation: "Rétrécissement mitral serré. La triade clinique (dyspnée, roulement diastolique, FA) est très évocatrice. La P mitrale à l'ECG et le double contour (signe de l'OG dilatée) à la radio confirment le retentissement auriculaire gauche. L'échocardiographie transthoracique est l'examen clé de confirmation.",
    clinicalPearl: "Jeune femme avec roulement diastolique + FA + double contour radio = RM serré."
  },
  {
    id: 'cas-rm-02',
    courseId: 'crs-rm',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'Hémoptysie Inquiétante\nM. S.M., 45 ans, connu pour un RM suivi, se présente aux urgences pour une hémoptysie de faible abondance. Il est dyspnéique au repos. L'auscultation trouve des râles crépitants aux deux bases pulmonaires.\n1. Quelle est la cause la plus probable de cette hémoptysie ?\n2. Quelle est la prise en charge thérapeutique la plus appropriée à long terme pour ce patient ?",
    options: [
      "a) Cancer bronchique / Chimiothérapie",
      "b) Tuberculose pulmonaire / Antituberculeux",
      "c) Rupture de varices broncho-pulmonaires sous hypertension veineuse pulmonaire / Traitement interventionnel du RM (VMP ou chirurgie)",
      "d) Embolie pulmonaire / Thrombolyse",
      "e) Pneumopathie infectieuse / Antibiotiques"
    ],
    correctAnswers: [2],
    explanation: "Rupture de varices broncho-pulmonaires. Dans un contexte de RM connu avec signes d'œdème pulmonaire (râles crépitants), l'hémoptysie est due à l'hypertension veineuse pulmonaire. Le traitement causal définitif est la levée de l'obstacle mitral (VMP ou chirurgie).",
    clinicalPearl: "Hémoptysie du RM = Décompression requise par intervention mécanique sur la valve mitrale."
  },
  {
    id: 'cas-rm-03',
    courseId: 'crs-rm',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : L'Accident Vasculaire Cérébral Inattendu\nMme D.J., 52 ans, sans antécédents connus, est admise pour un déficit neurologique hémicorporel droit. Le bilan étiologique de l'AVC ischémique est engagé. L'auscultation cardiaque est négligée.\n1. Devant cet AVC, quelle étiologie cardiaque faut-il systématiquement rechercher à l'interrogatoire et à l'examen clinique ?\n2. Si un RM serré est découvert, quel traitement préventif secondaire doit être instauré ?",
    options: [
      "a) Rétrécissement aortique / Aspirine",
      "b) Foramen ovale perméable / Clopidogrel",
      "c) Fibrillation auriculaire et/ou rétrécissement mitral / Anticoagulation curative par AVK",
      "d) Myocardite / AINS",
      "e) Endocardite sur valve native / Statine"
    ],
    correctAnswers: [2],
    explanation: "Fibrillation auriculaire et/ou rétrécissement mitral. Le RM, surtout s'il est compliqué de FA, est une cause classique d'embolie systémique. En cas de RM et d'embolie, l'anticoagulation par Anti-Vitamine K (AVK) est obligatoire pour la prévention secondaire.",
    clinicalPearl: "AVC embolique du sujet jeune : Ausculter impérativement le cœur à la recherche d'un RM !"
  },
  {
    id: 'cas-rm-04',
    courseId: 'crs-rm',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le Souffle Découvert lors d'une Consultation de Routine\nUn médecin généraliste adresse un patient de 40 ans, asymptomatique, chez qui il a découvert un souffle cardiaque à l'occasion d'une consultation pour certificat médical. L'échocardiographie conclut à un RM avec une surface mitrale à 1.2 cm², des cordages peu épaissis, une OG modérément dilatée et une PAPs à 45 mmHg.\n1. Comment qualifiez-vous ce RM ?\n2. Quelle est la conduite à tenir ?",
    options: [
      "a) RM léger / Abstention thérapeutique, réévaluation dans 5 ans",
      "b) RM modéré / Traitement chirurgical urgent",
      "c) RM serré / Surveillance clinique et échocardiographique rapprochée (6-12 mois)",
      "d) RM très serré / Valvuloplastie immédiate",
      "e) RM non significatif / Diurétiques seuls"
    ],
    correctAnswers: [2],
    explanation: "RM serré (SM < 1.5 cm²). Le patient étant asymptomatique, il ne relève pas encore d'un geste interventionnel immédiat, mais nécessite une surveillance clinique et échographique rapprochée (tous les 6 à 12 mois) pour intervenir dès les premiers symptômes.",
    clinicalPearl: "RM serré asymptomatique = Surveillance étroite (tous les 6-12 mois) sans chirurgie précipitée."
  },
  {
    id: 'cas-rm-05',
    courseId: 'crs-rm',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : La Valvuloplastie Programmée\nMme F.Z., 35 ans, avec un RM serré rhumatismal symptomatique (NYHA III), est adressée pour valvuloplastie mitrale percutanée. L'échocardiographie transthoracique est favorable (score de Wilkins à 7).\n1. Quel examen est indispensable en pré-procédure pour finaliser le bilan ?\n2. Quelle est la complication per-procédure la plus redoutée de la VMP ?",
    options: [
      "a) Échocardiographie transœsophagienne (ETO) / Insuffisance mitrale aiguë sévère par déchirure valvulaire",
      "b) Coronarographie / Fibrillation auriculaire",
      "c) IRM cardiaque / Péricardite",
      "d) Épreuve d'effort / Dissection coronaire",
      "e) Scintigraphie pulmonaire / Réaction vagale"
    ],
    correctAnswers: [0],
    explanation: "L'ETO est obligatoire avant VMP pour éliminer formellement un thrombus intra-auriculaire gauche (contre-indication absolue). La complication per-procédure la plus redoutée est l'insuffisance mitrale aiguë sévère par déchirure d'un feuillet lors de la dilatation au ballonnet.",
    clinicalPearl: "VMP : ETO pré-procédure obligatoire pour éliminer un thrombus de l'auricule gauche."
  }
];
