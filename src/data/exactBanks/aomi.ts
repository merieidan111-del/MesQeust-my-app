import { Question } from '../../types/medical';

export const AOMI_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-aomi-01',
    courseId: 'crs-aomi',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient de 65 ans, fumeur, présentant une claudication intermittente du mollet droit à 200 mètres, l'examen retrouve un IPS à 0,7 à droite et 0,9 à gauche. Le bilan étiologique le plus urgent est :",
    options: [
      "A) Écho-Doppler artériel des membres inférieurs.",
      "B) Épreuve de marche sur tapis roulant.",
      "C) Bilan cardiaque à la recherche d'une coronaropathie.",
      "D) Artériographie des membres inférieurs.",
      "E) Mesure de la TcPO2 au niveau du pied droit."
    ],
    correctAnswers: [2],
    explanation: "L'AOMI est un marqueur de maladie athéromateuse diffuse. Le risque de coronaropathie associée, souvent silencieuse, est élevé et représente la première cause de mortalité chez ces patients. Le bilan cardiaque est donc fondamental et urgent pour évaluer le pronostic vital avant de se focaliser sur le membre lui-même.",
    clinicalPearl: "1ère cause de décès dans l'AOMI = Coronaropathie ischémique (bilan cardiaque systématique)."
  },
  {
    id: 'q-aomi-02',
    courseId: 'crs-aomi',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe clinique le plus précoce et prédictif de la gravité d'une ischémie aiguë d'un membre inférieur est :",
    options: [
      "A) La froideur et la pâleur du membre.",
      "B) La douleur violente et brutale.",
      "C) L'abolition des pouls distaux.",
      "D) L'apparition de paresthésies ou d'une anesthésie.",
      "E) L'affaissement des veines superficielles (signe du trait)."
    ],
    correctAnswers: [3],
    explanation: "L'anoxie tissulaire touche les nerfs périphériques (les plus sensibles) dès la 4ème heure, se manifestant par des paresthésies puis une anesthésie. C'est le témoin le plus précoce d'une ischémie menaçante pour le membre, avant l'atteinte musculaire irréversible.",
    clinicalPearl: "Atteinte neurologique (paresthésies puis paralysie) = Marqueur précoce de gravité dans l'ischémie aiguë."
  },
  {
    id: 'q-aomi-03',
    courseId: 'crs-aomi',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la classification de Rutherford, une perte tissulaire mineure (ulcération) correspond au grade :",
    options: [
      "A) I-3",
      "B) II-4",
      "C) III-5",
      "D) III-6",
      "E) IV"
    ],
    correctAnswers: [2],
    explanation: "Il faut bien distinguer Fontaine et Rutherford. Dans Rutherford, la perte tissulaire (stade III) est subdivisée en grade 5 (mineure, limitée) et grade 6 (majeure, étendue). Le stade IV de Fontaine regroupe les stades III-5 et III-6 de Rutherford.",
    clinicalPearl: "Classification de Rutherford : Grade 5 = Perte tissulaire mineure ; Grade 6 = Gangrène étendue."
  },
  {
    id: 'q-aomi-04',
    courseId: 'crs-aomi',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le principal objectif de l'aponévrotomie de décharge lors de la revascularisation d'une ischémie aiguë est de :",
    options: [
      "A) Améliorer le retour veineux.",
      "B) Prévenir la survenue d'un syndrome de reperfusion systémique.",
      "C) Limiter la compression musculaire intra-logique et préserver la viabilité musculaire.",
      "D) Traiter l'acidose métabolique.",
      "E) Faciliter la cicatrisation cutanée ultérieure."
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de reperfusion local entraîne un œdème musculaire important au sein des loges inextensibles, créant un \"garrot interne\" qui peut compromettre la revascularisation et aggraver la nécrose. L'aponévrotomie vise à lever cette compression.",
    clinicalPearl: "Aponévrotomie de décharge : Prévient et traite le syndrome de loge post-revascularisation."
  },
  {
    id: 'q-aomi-05',
    courseId: 'crs-aomi',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une valeur de pression transcutanée en O2 (TcPO2) au pied de 25 mmHg chez un artériopathe indique :",
    options: [
      "A) Une hypoxie critique menaçant la viabilité du membre.",
      "B) Une bonne compensation métabolique.",
      "C) La présence d'une hypoxie tissulaire continue.",
      "D) Un résultat normal.",
      "E) La nécessité d'une amputation immédiate."
    ],
    correctAnswers: [2],
    explanation: "Une TcPO2 > 35 mmHg indique une bonne compensation. Entre 10 et 35 mmHg, il s'agit d'une hypoxie continue, caractéristique d'une ischémie chronique critique. En dessous de 10 mmHg, le pronostic de viabilité est altéré.",
    clinicalPearl: "TcPO2 : > 35 mmHg = Compensé ; 10 à 35 mmHg = Hypoxie continue ; < 10 mmHg = Nécrose inévitable."
  },
  {
    id: 'q-aomi-06',
    courseId: 'crs-aomi',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médical de fond d'une AOMI symptomatique inclut systématiquement :",
    options: [
      "A) Un antiagrégant plaquettaire et la marche.",
      "B) Un anticoagulant oral direct et un vasodilatateur.",
      "C) Un vasodilatateur et la mise au repos du membre.",
      "D) Un antiagrégant plaquettaire et un anticoagulant.",
      "E) Un diurétique et un antiagrégant plaquettaire."
    ],
    correctAnswers: [0],
    explanation: "La base du traitement médical est l'antiagrégant plaquettaire (Aspirine ou Clopidogrel) pour prévenir les événements thrombotiques, associé à l'exercice (marche) pour développer la circulation collatérale. Les anticoagulants sont réservés à des situations spécifiques (embolies, cardiopathies).",
    clinicalPearl: "\"M.A.T.A.S\" : Marche + Antiagrégant + Tabac (arrêt) + Anti-hypertenseurs + Statines."
  },
  {
    id: 'q-aomi-07',
    courseId: 'crs-aomi',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La cause la plus fréquente d'une ischémie aiguë des membres inférieurs est :",
    options: [
      "A) L'embolie d'origine cardiaque.",
      "B) La thrombose sur plaque athéromateuse.",
      "C) Le traumatisme artériel.",
      "D) La dissection aortique.",
      "E) La thrombo-angéite oblitérante (Maladie de Buerger)."
    ],
    correctAnswers: [1],
    explanation: "Les thromboses sur artère pathologique (sténose athéromateuse serrée) représentent environ 60% des cas (2/3), soit le mécanisme le plus fréquent. Les embolies (1/3 des cas) sont moins fréquentes mais souvent plus graves.",
    clinicalPearl: "2/3 des ischémies aiguës = Thrombose in situ sur artère athéromateuse ; 1/3 = Embolie cardiaque."
  },
  {
    id: 'q-aomi-08',
    courseId: 'crs-aomi',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen complémentaire ne doit en aucun cas retarder la prise en charge d'une ischémie aiguë ?",
    options: [
      "A) L'échographie-Doppler artérielle.",
      "B) Le dosage des CPK.",
      "C) L'artériographie.",
      "D) L'ECG.",
      "E) Tous les examens ci-dessus."
    ],
    correctAnswers: [4],
    explanation: "Le diagnostic d'ischémie aiguë est clinique. Tout examen complémentaire, même utile pour guider le traitement, ne doit pas retarder la revascularisation, qui est une urgence absolue. Le temps, c'est le muscle.",
    clinicalPearl: "\"Time is Muscle\" : Le diagnostic de l'ischémie aiguë est purement clinique, ne jamais retarder le bloc !"
  },
  {
    id: 'q-aomi-09',
    courseId: 'crs-aomi',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La prévention de l'insuffisance rénale aiguë dans le cadre d'un syndrome de reperfusion repose principalement sur :",
    options: [
      "A) L'alcalinisation des urines.",
      "B) La diurèse forcée par remplissage.",
      "C) L'hémodialyse préventive.",
      "D) Le contrôle strict de la glycémie.",
      "E) L'antibioprophylaxie."
    ],
    correctAnswers: [1],
    explanation: "La lyse musculaire (rhabdomyolyse) libère de la myoglobine, toxique pour le tubule rénal. La diurèse forcée (par remplissage vasculaire) permet de \"laver\" les tubules et de prévenir l'obstruction et l'insuffisance rénale aiguë.",
    clinicalPearl: "Syndrome de reperfusion : Remplissage hydro-électrolytique massif pour forcer la diurèse et laver la myoglobine."
  },
  {
    id: 'q-aomi-10',
    courseId: 'crs-aomi',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient se présente avec une douleur de repos nocturne au pied droit, calmée par la mise en déclive. L'IPS est à 0.5. Il se situe au stade :",
    options: [
      "A) Fontaine I",
      "B) Fontaine IIa",
      "C) Fontaine IIb",
      "D) Fontaine III",
      "E) Fontaine IV"
    ],
    correctAnswers: [3],
    explanation: "La douleur de repos (souvent nocturne, calmée par la position pendante) définit le stade III de Fontaine. Le stade IV est défini par la présence de lésions trophiques (ulcère, gangrène).",
    clinicalPearl: "\"Il Faut Courir Très Vite\" : I (Asympto), II (Claudication), III (Terribles douleurs repos), IV (Vilaines nécroses)."
  },
  {
    id: 'q-aomi-11',
    courseId: 'crs-aomi',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication d'un traitement endovasculaire (angioplastie) est privilégiée devant :",
    options: [
      "A) Une lésion longue et calcifiée de l'artère fémorale superficielle.",
      "B) Une occlusion fémorale superficielle longue avec mauvais lit d'aval.",
      "C) Une sténose courte et proximale de l'artère iliaque avec bon lit d'aval.",
      "D) Un patient jeune avec une maladie de Buerger.",
      "E) Une ischémie aiguë dépassée de plus de 24 heures."
    ],
    correctAnswers: [2],
    explanation: "L'angioplastie/stenting donne les meilleurs résultats pour les lésions courtes, proximales (aorto-iliaques) et sténosantes (non occlusives) avec un bon lit d'aval. Les lésions longues, occlusives ou avec mauvais lit d'aval relèvent plutôt de la chirurgie.",
    clinicalPearl: "Angioplastie percutanée = Lésions proximales courtes (iliaques) TASC A et B."
  },
  {
    id: 'q-aomi-12',
    courseId: 'crs-aomi',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La claudication intermittente médullaire se distingue de la claudication artérielle par :",
    options: [
      "A) Son déclenchement à la marche.",
      "B) Son caractère bilatéral.",
      "C) Sa localisation au mollet.",
      "D) L'absence de douleur caractéristique de crampe et la persistance des pouls.",
      "E) La disparition des pouls à l'effort."
    ],
    correctAnswers: [3],
    explanation: "La claudication médullaire (liée à une sténose du canal lombaire) est due à une compression de la queue de cheval. Elle se manifeste par des troubles sensitifs et/ou moteurs à la marche et à la station debout, sans douleur caractéristique de crampe, et sans modification des pouls.",
    clinicalPearl: "Canal lombaire étroit : Claudication avec pouls périphériques présents et soulagement en antéflexion."
  },
  {
    id: 'q-aomi-13',
    courseId: 'crs-aomi',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel paramètre est le reflet le plus fidèle de l'intensité de la rhabdomyolyse lors d'une ischémie aiguë ?",
    options: [
      "A) Le taux de créatininémie.",
      "B) Le taux de lactates.",
      "C) Le taux de CPK (Créatine PhosphoKinase).",
      "D) Le taux de potassium.",
      "E) Le taux de myoglobine urinaire."
    ],
    correctAnswers: [2],
    explanation: "Les CPK sont une enzyme musculaire libérée en grande quantité lors de la lyse des cellules musculaires (rhabdomyolyse). Son dosage sanguin est le marqueur le plus sensible et spécifique pour évaluer l'ampleur de la nécrose musculaire.",
    clinicalPearl: "Taux de CPK = Reflet direct de la masse musculaire nécrosée en ischémie aiguë."
  },
  {
    id: 'q-aomi-14',
    courseId: 'crs-aomi',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un thrill en regard de l'artère fémorale commune évoque en premier lieu :",
    options: [
      "A) Une sténose serrée.",
      "B) Une fistule artério-veineuse.",
      "C) Un anévrysme.",
      "D) Une compression extrinsèque.",
      "E) Une artérite inflammatoire."
    ],
    correctAnswers: [0],
    explanation: "Un thrill (ou frémissement) est une vibration perçue à la palpation, provoquée par des turbulences sanguines à travers une sténose artérielle serrée. C'est un signe d'auscultation et de palpation important.",
    clinicalPearl: "Thrill fémoral palpable = Sténose artérielle hémodynamiquement très serrée."
  },
  {
    id: 'q-aomi-15',
    courseId: 'crs-aomi',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La maladie de Buerger (thrombo-angéite oblitérante) se caractérise par :",
    options: [
      "A) Sa survenue exclusive chez le sujet âgé.",
      "B) Son association forte avec le tabagisme.",
      "C) L'atteinte préférentielle des gros troncs artériels.",
      "D) L'absence de lésions trophiques.",
      "E) Son bon pronostic sous traitement médical."
    ],
    correctAnswers: [1],
    explanation: "La maladie de Buerger est une artériopathie inflammatoire des vaisseaux de petit et moyen calibre, étroitement et exclusivement liée au tabagisme. L'arrêt total du tabac est la pierre angulaire du traitement.",
    clinicalPearl: "Maladie de Buerger : Homme jeune, tabagisme lourd, thromboses distales récidivantes, arrêt du tabac impératif."
  },
  {
    id: 'q-aomi-16',
    courseId: 'crs-aomi',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'ischémie aiguë, l'abolition des réflexes ostéo-tendineux témoigne :",
    options: [
      "A) D'une ischémie précoce et réversible.",
      "B) D'une atteinte neurologique périphérique avancée.",
      "C) D'une compression musculaire.",
      "D) D'un bon pronostic fonctionnel.",
      "E) D'une origine embolique."
    ],
    correctAnswers: [1],
    explanation: "L'abolition des ROT est un signe neurologique tardif et grave, indiquant une atteinte nerveuse profonde et souvent irréversible, de mauvais pronostic pour la récupération fonctionnelle du membre.",
    clinicalPearl: "Abolition des ROT + déficit moteur = Atteinte nerveuse ischémique sévère avancée."
  },
  {
    id: 'q-aomi-17',
    courseId: 'crs-aomi',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication d'une amputation d'emblée dans l'ischémie aiguë est :",
    options: [
      "A) Une ischémie de moins de 6 heures.",
      "B) Une ischémie dépassée avec nécrose irréversible et contractures.",
      "C) Une douleur de repos isolée.",
      "D) Un patient diabétique.",
      "E) Une étiologie thrombotique."
    ],
    correctAnswers: [1],
    explanation: "Une ischémie est dite \"dépassée\" lorsque la nécrose des tissus (muscles, nerfs) est irréversible, souvent cliniquement suspectée par une rigidité et des contractures musculaires (membre en \"bois\"). Dans ce cas, une revascularisation serait dangereuse (syndrome de reperfusion mortel) et l'amputation d'emblée est salvatrice.",
    clinicalPearl: "Ischémie dépassée (rigidité musculaire en bois) : Contre-indication à revasculariser, amputation directe !"
  },
  {
    id: 'q-aomi-18',
    courseId: 'crs-aomi',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le principal facteur de risque modifiable de l'AOMI athéromateuse est :",
    options: [
      "A) L'hypertension artérielle.",
      "B) Le diabète.",
      "C) Le tabagisme.",
      "D) La dyslipidémie.",
      "E) L'âge."
    ],
    correctAnswers: [2],
    explanation: "Si tous ces facteurs sont importants, le tabagisme est le facteur de risque le plus puissant et le plus directement lié à la survenue et la progression de l'AOMI. Son arrêt est la mesure la plus efficace.",
    clinicalPearl: "Tabac = Facteur de risque n°1 universel de l'AOMI (multiplie le risque d'amputation)."
  },
  {
    id: 'q-aomi-19',
    courseId: 'crs-aomi',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'épreuve de marche sur tapis roulant (test de Strandness) est particulièrement utile pour :",
    options: [
      "A) Poser le diagnostic d'AOMI.",
      "B) Évaluer objectivement le périmètre de marche et l'origine artérielle de la claudication.",
      "C) Guider un geste de revascularisation.",
      "D) Rechercher une coronaropathie associée.",
      "E) Évaluer l'état du lit d'aval."
    ],
    correctAnswers: [1],
    explanation: "Elle objective la distance de claudication et permet de s'assurer que la douleur est bien d'origine vasculaire (disparaît à l'arrêt) et non autre (orthopédique, etc.). Elle est aussi utile pour le suivi sous traitement.",
    clinicalPearl: "Test de Strandness : Mesure standardisée du périmètre de marche sur tapis roulant (3.2 km/h à 10%)."
  },
  {
    id: 'q-aomi-20',
    courseId: 'crs-aomi',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une hyperkaliémie brutale lors de la revascularisation d'une ischémie aiguë est due à :",
    options: [
      "A) La libération de potassium depuis les cellules musculaires nécrosées.",
      "B) Une insuffisance rénale pré-existante.",
      "C) L'acidose métabolique isolée.",
      "D) L'héparinothérapie.",
      "E) La déshydratation."
    ],
    correctAnswers: [0],
    explanation: "La nécrose musculaire (rhabdomyolyse) libère massivement le potassium contenu dans les cellules dans la circulation générale. Lors de la revascularisation, ce \"flush\" de potassium peut entraîner un arrêt cardiaque hyperkaliémique.",
    clinicalPearl: "Syndrome de revascularisation : Flush de potassium et de myoglobine pouvant déclencher un arrêt cardiaque per-opératoire."
  },
  {
    id: 'q-aomi-21',
    courseId: 'crs-aomi',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La mesure de l'IPS (Index de Pression Systolique) est considérée comme anormale si :",
    options: [
      "A) > 1.3",
      "B) > 1.0",
      "C) < 0.9",
      "D) < 0.5",
      "E) Elle est symétrique entre les deux membres."
    ],
    correctAnswers: [2],
    explanation: "Un IPS < 0,9 est le seuil diagnostique d'une artériopathie oblitérante. Un IPS > 1,3 évoque une médiacalcose (fréquente chez le diabétique, rendant l'IPS non interprétable).",
    clinicalPearl: "Seuil IPS : < 0.90 = AOMI ; 0.90 à 1.30 = Normal ; > 1.30 = Médiacalcose."
  },
  {
    id: 'q-aomi-22',
    courseId: 'crs-aomi',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe du \"trait\" ou de la \"marbrure\" dans l'ischémie aiguë correspond à :",
    options: [
      "A) L'affaissement des veines superficielles.",
      "B) Une cyanose en nappe.",
      "C) Des livedos ou marbrures cutanées.",
      "D) Une ligne de démarcation entre tissus viables et nécrosés.",
      "E) Un thrill palpable."
    ],
    correctAnswers: [2],
    explanation: "Les marbrures (livedo) sont un signe cutané de mauvaise perfusion capillaire, témoignant de la gravité de l'ischémie et précédant souvent l'apparition de la nécrose.",
    clinicalPearl: "Marbrures (livedo) cutanées fixes = Hypoperfusion capillaire critique."
  },
  {
    id: 'q-aomi-23',
    courseId: 'crs-aomi',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale différence physiopathologique entre une ischémie aiguë embolique et thrombotique est :",
    options: [
      "A) La sévérité de la douleur.",
      "B) Le développement préalable d'une circulation collatérale dans la thrombose.",
      "C) L'état du lit d'aval.",
      "D) L'âge du patient.",
      "E) La présence de troubles neurologiques."
    ],
    correctAnswers: [1],
    explanation: "Dans la thrombose, l'obstruction se fait généralement sur une artère déjà sténosée, ayant laissé le temps au développement d'une circulation collatérale (symptomatologie parfois moins brutale). Dans l'embolie, l'obstruction est brutale sur une artère souvent saine, sans collatérales préexistantes, d'où une ischémie souvent plus sévère.",
    clinicalPearl: "Thrombose = Collateralité préexistante ; Embolie = Pas de collatérale, tableau foudroyant."
  },
  {
    id: 'q-aomi-24',
    courseId: 'crs-aomi',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication métabolique la plus redoutée du syndrome de reperfusion est :",
    options: [
      "A) L'hypernatrémie.",
      "B) L'hypoglycémie.",
      "C) L'hyperkaliémie.",
      "D) L'hypocalcémie.",
      "E) L'alcalose respiratoire."
    ],
    correctAnswers: [2],
    explanation: "Comme expliqué précédemment, l'hyperkaliémie brutale est la complication la plus immédiatement mortelle, pouvant entraîner un arrêt cardiaque en per-opératoire ou en salle de réveil.",
    clinicalPearl: "Danger mortel immédiat du syndrome de reperfusion = Arrêt cardiaque sur hyperkaliémie brutale."
  },
  {
    id: 'q-aomi-25',
    courseId: 'crs-aomi',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'artériographie conventionnelle dans l'AOMI :",
    options: [
      "A) Est le premier examen de dépistage.",
      "B) Permet un bilan lésionnel précis et peut être thérapeutique (angioplastie).",
      "C) Remplace l'écho-Doppler pour la surveillance.",
      "D) N'est jamais invasive.",
      "E) Est contre-indiquée en cas d'insuffisance rénale."
    ],
    correctAnswers: [1],
    explanation: "L'artériographie est l'examen de référence pour le bilan morphologique précis des lésions (localisation, longueur, état d'aval). Elle est invasive (ponction artérielle) mais permet de guider un geste de revascularisation (angioplastie) dans le même temps.",
    clinicalPearl: "Artériographie conventionnelle : Réservée au temps thérapeutique de revascularisation."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-aomi-01',
    courseId: 'crs-aomi',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : L'Homme qui ne Pouvait plus Aller au Café\nM. Kader, 58 ans, diabétique et fumeur (40 paquets-années), consulte pour une douleur en étau du mollet droit survenant après 150 m de marche et cédant à l'arrêt en 2-3 minutes. Il a également noté une impuissance. A l'examen, les pouls fémoraux sont perçus, les pouls distaux (pédieux, tibial postérieur) sont abolis à droite et diminués à gauche. Un souffle est perçu en fosse iliaque droite.\nQ1. Quel est le syndrome évoqué par l'association claudication + impuissance ?\nQ2. Quel est l'examen de première intention pour confirmer le diagnostic ?",
    options: [
      "A) Un syndrome de Leriche / Écho-Doppler artériel des membres inférieurs et de l'aorte abdominale",
      "B) Un syndrome de Raynaud / Capillaroscopie",
      "C) Un syndrome de Budd-Chiari / Scanner hépatique",
      "D) Un syndrome du défilé thoraco-brachial / Radiographie cervicale",
      "E) Un syndrome de Takayasu / Biopsie de l'artère temporale"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Leriche associe claudication fessière/cuisse, impuissance d'érection et abolition des pouls fémoraux ou distaux par occlusion du carrefour aortique ou iliaque. L'écho-Doppler artériel est l'examen de 1ère ligne non invasif.",
    clinicalPearl: "Syndrome de Leriche = Claudication fessière/crurale + Impuissance + Souffle iliaque."
  },
  {
    id: 'cas-aomi-02',
    courseId: 'crs-aomi',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : La Douleur Nocturne du Vieux Pied\nMme Fatima, 70 ans, hypertensive, se plaint de douleurs à type de brûlures siégeant à l'avant-pied droit, survenant la nuit, qui la réveillent et sont calmées quand elle laisse pendre son pied en dehors du lit. L'examen trouve un pied froid, une peau fine et dépilée. Les orteils sont cyanosés.\nQ1. Quel est le stade de cette artériopathie ?\nQ2. Quelle est la mesure la plus importante à prendre en urgence pour ce membre ?",
    options: [
      "A) Stade IIa / Marche",
      "B) Stade IIb / Statine seule",
      "C) Stade III de Fontaine (ischémie critique) / Programmer une artériographie avec geste de revascularisation",
      "D) Stade I / Surveillance",
      "E) Stade IV / Amputation immédiate"
    ],
    correctAnswers: [2],
    explanation: "La douleur de repos nocturne soulagée par la déclivité (jambe pendante) caractérise le stade III de Fontaine (ischémie critique). Une revascularisation urgente est obligatoire pour éviter la nécrose (stade IV) et l'amputation.",
    clinicalPearl: "Douleur nocturne de décubitus soulagée par la déclivité = Stade III Fontaine (revasculariser d'urgence)."
  },
  {
    id: 'cas-aomi-03',
    courseId: 'crs-aomi',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Le Membre Blanc et Froid\nM. Ali, 72 ans, connu pour une fibrillation auriculaire non traitée, est admis aux urgences pour une douleur brutale, intense, du membre inférieur gauche apparue il y a 3 heures. Le membre est froid, pâle, marbré en dessous du genou. Les pouls fémoraux sont perçus, les pouls poplité et distaux sont abolis. Le patient présente des paresthésies du pied.\nQ1. Quel est le mécanisme le plus probable ?\nQ2. Quelle est la conduite à tenir immédiate ?",
    options: [
      "A) Thrombose sur plaque d'athérome / Traitement médical seul",
      "B) Embolie d'origine cardiaque / Hospitaliser en USI, débuter une héparinothérapie IV et convoquer le chirurgien vasculaire en extrême urgence (embolectomie par sonde de Fogarty)",
      "C) Dissection aortique / Pose de stent iliaque",
      "D) Traumatisme artériel / Plâtre cruro-pédieux",
      "E) Phlébite bleue / Anticoagulants oraux"
    ],
    correctAnswers: [1],
    explanation: "L'installation brutale d'un membre blanc et froid avec pouls abolis chez un patient en FA sans traitement anticoagulant signe une embolie artérielle d'origine cardiaque. L'héparine IV immédiate et l'embolectomie chirurgicale (sonde de Fogarty) dans les 6 heures sauvent le membre.",
    clinicalPearl: "Embolie sur FA = Héparine IV immédiate + Embolectomie par sonde de Fogarty d'urgence avant H6."
  },
  {
    id: 'cas-aomi-04',
    courseId: 'crs-aomi',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le Pied Noir\nM. Rachid, 60 ans, diabétique, est hospitalisé pour nécrose noire et sèche de l'hallux droit, indolore. Le pied est chaud, les pouls pédieux et tibial postérieur sont perçus. L'IPS est à 1,1.\nQ1. Comment expliquez-vous ce tableau ?\nQ2. Quel est le principal facteur pronostique pour la cicatrisation de cette lésion ?",
    options: [
      "A) Une artériopathie oblitérante des gros troncs / Pontage fémoro-poplité",
      "B) Une embolie de cholestérol / Statine forte dose",
      "C) Une neuropathie diabétique avec microangiopathie distale / L'équilibre strict de la glycémie et les soins locaux",
      "D) Un phénomène de Raynaud / Inhibiteurs calciques",
      "E) Une gangrène de Fournier / Chirurgie urologique"
    ],
    correctAnswers: [2],
    explanation: "Chez le diabétique, la neuropathie sensitive rend la nécrose indolore, et la microangiopathie distale provoque des lésions nécrotiques malgré des axes macrovasculaires perméables et des pouls perçus. L'équilibre glycémique et la décharge sont cruciaux.",
    clinicalPearl: "Mal perforant et nécrose indolore du diabétique : Neuropathie + microangiopathie (pouls conservés)."
  },
  {
    id: 'cas-aomi-05',
    courseId: 'crs-aomi',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Après la Revascularisation\nM. Ahmed, 55 ans, a bénéficié d'une embolectomie fémorale pour une ischémie aiguë de 5 heures. En salle de réveil, le membre est réchauffé, les pouls sont repris, mais il est oligurique. Les CPK sont à 85 000 UI/L.\nQ1. Que craignez-vous ?\nQ2. Quelle mesure préventive n'est PAS recommandée ?",
    options: [
      "A) Récidive embolique / Remplissage vasculaire",
      "B) Hématome / Diurèse forcée",
      "C) Syndrome de loge et insuffisance rénale par rhabdomyolyse / Administration de furosémide à fortes doses sans remplissage préalable",
      "D) Hypothermie / Alcalinisation des urines",
      "E) Infection / Surveillance de la kaliémie"
    ],
    correctAnswers: [2],
    explanation: "Le tableau est typique d'un syndrome de reperfusion avec rhabdomyolyse massive (CPK à 85 000). Donner des diurétiques sans remplissage préalable aggraverait l'hypovolémie efficace et précipiterait la nécrose tubulaire aiguë. Il faut hydrater massivement et alcaliniser.",
    clinicalPearl: "Syndrome de reperfusion : Remplissage et alcalinisation majeurs, PAS de furosémide à sec !"
  }
];
