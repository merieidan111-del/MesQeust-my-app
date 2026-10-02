import { Question } from '../types/medical';

export const CARDIOLOGY_QUESTIONS_PART4: Question[] = [
  // ==========================================
  // DISSECTION AORTIQUE - 25 QCMs
  // ==========================================
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
      "La dyslipidémie",
      "L'hypertension artérielle non contrôlée",
      "Le tabagisme",
      "Le diabète sucré",
      "La maladie de Marfan"
    ],
    correctAnswers: [1],
    explanation: "L'hypertension artérielle chronique non contrôlée est présente chez plus de 80% des patients présentant une dissection aortique. Elle exerce une contrainte mécanique de cisaillement permanente sur la média aortique fragilisée.",
    clinicalPearl: "Facteur de risque n°1 de la dissection aortique = Hypertension artérielle (>80%)."
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
      "A",
      "B",
      "I",
      "II",
      "III"
    ],
    correctAnswers: [1],
    explanation: "La classification de Stanford distingue le type A (impliquant l'aorte ascendante, urgence chirurgicale) et le type B (débutant en aval de l'artère sous-clavière gauche, traitement initialement médical ou endovasculaire).",
    clinicalPearl: "Mnémo : 'A pour Ascendante et Acte chirurgical' ; 'B pour Bas/Descendante et Bêta-bloquant'."
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
      "Une douleur abdominale",
      "Une asymétrie tensionnelle > 20 mmHg entre les deux bras",
      "Une hématurie",
      "Une douleur thoracique basale irradiant à la mâchoire",
      "Un souffle diastolique"
    ],
    correctAnswers: [1],
    explanation: "Une asymétrie de pression artérielle systolique > 20 mmHg entre les deux membres supérieurs ou une abolition d'un pouls est un signe clinique majeur traduisant la compression ou l'occlusion d'un tronc supra-aortique par le flap intimal.",
    clinicalPearl: "Asymétrie tensionnelle > 20 mmHg + douleur déchirante = Dissection aortique !"
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
      "La radiographie thoracique",
      "L'échocardiographie transthoracique",
      "L'angiographie par résonance magnétique (ARM)",
      "L'angio-TDM thoracique injecté",
      "L'échographie Doppler des membres inférieurs"
    ],
    correctAnswers: [3],
    explanation: "L'angio-TDM aortique synchronisé est l'examen de référence en urgence : disponible 24h/24, rapide, avec une sensibilité et spécificité > 98% pour identifier la porte d'entrée, le flap intimal et les malperfusions viscérales.",
    clinicalPearl: "Examen de référence en extrême urgence = Angio-TDM thoraco-abdomino-pelvien."
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
      "La correction des troubles de la coagulation",
      "La sédation profonde du patient",
      "Le contrôle de la fréquence cardiaque (< 60 bpm) et la réduction de la force d'éjection (dP/dt)",
      "La prévention des infections",
      "Le remplissage vasculaire massif"
    ],
    correctAnswers: [2],
    explanation: "Le but immédiat est de stopper la propagation de la dissection en diminuant le stress hémodynamique pariétal : baisse de la dP/dt par un bêta-bloquant IV (cible FC < 60 bpm et PAS entre 100 et 120 mmHg).",
    clinicalPearl: "Cibles thérapeutiques : FC < 60 bpm (Bêta-bloquant d'abord) et PAS < 120 mmHg."
  },
  {
    id: 'q-diss-06',
    courseId: 'crs-dissection',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Une dissection aortique de type Stanford A compliquée d'une insuffisance aortique aiguë justifie :",
    options: [
      "Un traitement médical seul",
      "Une surveillance échographique rapprochée",
      "Une chirurgie de remplacement de l'aorte ascendante en urgence avec geste valvulaire",
      "Une angioplastie coronaire",
      "Une thrombolyse"
    ],
    correctAnswers: [2],
    explanation: "Toute dissection de type A est une urgence chirurgicale absolue sous CEC (mortalité augmentant de 1 à 2% par heure sans chirurgie). L'insuffisance aortique aiguë impose la réfection ou le remplacement de la racine aortique.",
    clinicalPearl: "Stanford A = Chirurgie en urgence absolue sous CEC."
  },
  {
    id: 'q-diss-07',
    courseId: 'crs-dissection',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication la plus redoutée et la plus fréquemment mortelle d'une dissection aortique de type A est :",
    options: [
      "L'infarctus rénal",
      "L'ischémie médullaire",
      "La rupture dans le péricarde avec tamponnade cardiaque",
      "L'occlusion artérielle périphérique",
      "La fistule aorto-œsophagienne"
    ],
    correctAnswers: [2],
    explanation: "La rupture de l'aorte ascendante intrapéricardique entraîne un hémopéricarde compressif avec tamponnade cardiaque et désamorçage cardio-circulatoire foudroyant, cause majeure de décès pré-hospitalier.",
    clinicalPearl: "Complication mortelle n°1 du type A = Rupture intrapéricardique et tamponnade."
  },
  {
    id: 'q-diss-08',
    courseId: 'crs-dissection',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément du cas clinique suivant est le PLUS en faveur d'une dissection aortique ? Homme de 60 ans, HTA, douleur thoracique antérieure déchirante irradiant vers le dos, avec asymétrie des pouls fémoraux.",
    options: [
      "L'âge du patient",
      "Le terrain hypertendu",
      "Le caractère déchirant de la douleur et son irradiation dorsale",
      "L'asymétrie des pouls fémoraux",
      "Toutes les réponses ci-dessus associées"
    ],
    correctAnswers: [4],
    explanation: "C'est l'ensemble syndromique associant le terrain vasculaire hypertendu, la sémiologie douloureuse typique ('coup de poignard' dorsal migrateur) et les signes de malperfusion périphérique qui confère une spécificité diagnostique maximale.",
    clinicalPearl: "Douleur rétro-thoracique déchirante migratrice + Asymétrie des pouls = Dissection aortique !"
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
      "L'athérosclérose",
      "La syphilis tertiaire",
      "La maladie de Takayasu",
      "Le syndrome de Marfan et Ehlers-Danlos vasculaire",
      "L'anémie falciforme"
    ],
    correctAnswers: [3],
    explanation: "La nécrose kystique de la média correspond à la désorganisation et la raréfaction des fibres élastiques avec dépôts de mucopolysaccharides, typique des connectivites héréditaires comme le syndrome de Marfan (mutation fibrilline-1) ou d'Ehlers-Danlos type IV.",
    clinicalPearl: "Nécrose kystique de la média = Marfan, Ehlers-Danlos et fragilité élastique constitutionnelle."
  },
  {
    id: 'q-diss-10',
    courseId: 'crs-dissection',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de première intention pour contrôler la fréquence cardiaque dans la phase aiguë de la dissection aortique est :",
    options: [
      "La Nifédipine",
      "Le Labétalol IV",
      "Le Nitroprussiate de sodium seul",
      "Le Vérapamil",
      "L'Adénosine"
    ],
    correctAnswers: [1],
    explanation: "Le Labétalol intraveineux est le traitement de choix : il bloque les récepteurs bêta (ralentit la FC et baisse la dP/dt) et alpha-1 (vasodilatation sans tachycardie réflexe). Les vasodilatateurs purs sans bêta-bloquant sont dangereux car ils augmentent la force d'éjection !",
    clinicalPearl: "Toujours donner le Bêta-bloquant (Labétalol) AVANT tout vasodilatateur supplémentaire !"
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
      "Rhabdomyolyse",
      "Obstruction ou compression de l'artère rénale par le flap intimal",
      "Néphropathie diabétique",
      "Glomérulonéphrite aiguë",
      "Toxicité médicamenteuse"
    ],
    correctAnswers: [1],
    explanation: "L'extension du flap intimal disséquant à l'ostium des artères rénales entraîne une malperfusion rénale avec sténose ou thrombose aiguë du faux chenal, provoquant une ischémie rénale aiguë.",
    clinicalPearl: "Douleur thoracique + Anurie / Créatinine explosive = Malperfusion de l'artère rénale."
  },
  {
    id: 'q-diss-12',
    courseId: 'crs-dissection',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "La présence d'un épanchement pleural gauche de moyenne abondance sur la radiographie thoracique d'un patient avec une dissection de type B doit faire évoquer en premier :",
    options: [
      "Une infection pulmonaire",
      "Une fissuration ou rupture pleurale de l'aorte thoracique descendante",
      "Une insuffisance cardiaque gauche",
      "Une embolie pulmonaire",
      "Une tuberculose"
    ],
    correctAnswers: [1],
    explanation: "Un épanchement pleural gauche au cours d'une dissection de type B est un signe d'alarme de rupture imminente ou de fissuration hémorragique de l'aorte descendante dans l'hémithorax gauche (hémothorax).",
    clinicalPearl: "Dissection type B + Épanchement pleural gauche = Fissuration / Rupture aortique menaçante !"
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
      "Résection de l'aorte ascendante et remplacement par un tube prothétique",
      "Cure de l'insuffisance aortique",
      "Prévenir la rupture et la tamponnade",
      "Rétablir la perfusion dans les vaisseaux occlus",
      "Toutes ces réponses associées"
    ],
    correctAnswers: [4],
    explanation: "La chirurgie d'urgence du type A remplace l'aorte ascendante pathologique pour supprimer la porte d'entrée, évacue l'hémopéricarde, restaure la continence valvulaire aortique et rétablit la perfusion cérébrale et coronarienne.",
    clinicalPearl: "Chirurgie du Type A : Remplacement par tube prothétique sous CEC pour sauver la vie."
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
      "La présence d'une douleur",
      "Le diamètre de l'aorte",
      "L'existence d'une déchirure intimale créant un faux chenal dans la média",
      "Le terrain du patient",
      "Le traitement chirurgical"
    ],
    correctAnswers: [2],
    explanation: "L'anévrysme est une dilatation permanente des 3 tuniques de la paroi aortique. La dissection est un clivage longitudinal de la média provoqué par une déchirure de l'intima, créant un faux chenal circulant.",
    clinicalPearl: "Anévrysme = Dilatation des 3 tuniques. Dissection = Clivage de la média par un faux chenal."
  },
  {
    id: 'q-diss-15',
    courseId: 'crs-dissection',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le 'double contour' ou 'double lumière' visualisé au scanner est dû à :",
    options: [
      "Deux aortes",
      "La présence du flap intimal séparant le vrai et le faux chenal",
      "Un artéfact de mouvement",
      "Un thrombus mural",
      "Un ulcère athéromateux"
    ],
    correctAnswers: [1],
    explanation: "Le signe tomodensitométrique pathognomonique de la dissection est le flap intimal, qui sépare la lumière aortique en vrai chenal et faux chenal, réalisant l'image en double lumière.",
    clinicalPearl: "Flap intimal séparant vrai et faux chenal = Signe direct scanographique de certitude."
  },
  {
    id: 'q-diss-16',
    courseId: 'crs-dissection',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "La cause la plus fréquente de décès dans les dissections de type B non compliquées sous traitement médical est :",
    options: [
      "La rupture aortique",
      "L'insuffisance rénale",
      "L'infarctus du myocarde",
      "L'accident vasculaire cérébral",
      "L'infection"
    ],
    correctAnswers: [0],
    explanation: "Même sous bêta-bloquants bien conduits, l'évolution anévrysmale progressive du faux chenal peut mener à la rupture aortique secondaire, justifiant une surveillance scanographique régulière.",
    clinicalPearl: "Type B : La rupture du faux chenal reste la complication mortelle prépondérante."
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
      "Est plus confortable que le TDM",
      "Peut être réalisée au lit du patient instable ou au bloc opératoire",
      "Visualise mieux l'aorte abdominale",
      "Élimine le besoin d'autres examens",
      "Est moins coûteuse"
    ],
    correctAnswers: [1],
    explanation: "L'ETO est l'examen de choix chez le patient instable en choc ne pouvant pas être transporté au scanner : elle visualise la porte d'entrée de l'aorte ascendante, le mécanisme de l'IA et l'hémopéricarde au lit du malade.",
    clinicalPearl: "Patient hémodynamiquement instable = ETO immédiate en salle de déchocage / bloc."
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
      "Le risque de récidive est élevé",
      "Le faux chenal dans l'aorte descendante restante peut évoluer vers la dilatation et la rupture",
      "Il peut développer une infection du matériel prothétique",
      "Il faut surveiller l'apparition d'un nouveau diabète",
      "Les sutures chirurgicales se relâchent toujours"
    ],
    correctAnswers: [1],
    explanation: "Le geste d'urgence traite l'aorte ascendante, mais le clivage persiste fréquemment dans l'aorte descendante résiduelle, avec risque d'évolution anévrysmale et de rupture secondaire à distance.",
    clinicalPearl: "Suivi post-opératoire de dissection : Imagerie (Angio-TDM/IRM) à vie !"
  },
  {
    id: 'q-diss-19',
    courseId: 'crs-dissection',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La thrombolyse est contre-indiquée en cas de suspicion d'infarctus du myocarde si :",
    options: [
      "Le patient a plus de 70 ans",
      "Il existe une asymétrie tensionnelle ou abolition de pouls",
      "La douleur irradie dans le bras gauche",
      "Le patient est diabétique",
      "La pression artérielle est élevée"
    ],
    correctAnswers: [1],
    explanation: "L'asymétrie tensionnelle évoque une dissection aortique de type A compliquée d'extension coronaire. Administrer un thrombolytique dans cette situation entraîne une rupture hémorragique fatale !",
    clinicalPearl: "Mnémo : 'Pas de Thrombolyse sans TDM' si asymétrie de pouls ou douleur déchirante dorsale."
  },
  {
    id: 'q-diss-20',
    courseId: 'crs-dissection',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale limite de la radiographie thoracique standard dans le diagnostic de dissection est :",
    options: [
      "Son coût",
      "Sa faible sensibilité et spécificité (un médiastin normal n'élimine pas le diagnostic)",
      "Son incapacité à visualiser les poumons",
      "La nécessité d'une injection de produit de contraste",
      "Les radiations ionisantes"
    ],
    correctAnswers: [1],
    explanation: "Bien qu'un élargissement du médiastin supérieur soit très évocateur, jusqu'à 20% des dissections aortiques ont un téléthorax rigoureusement normal. La radio ne permet jamais d'exclure le diagnostic.",
    clinicalPearl: "Téléthorax normal n'élimine JAMAIS une dissection aortique !"
  },
  {
    id: 'q-diss-21',
    courseId: 'crs-dissection',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Le mécanisme physiopathologique principal de l'insuffisance aortique dans la dissection de type A est :",
    options: [
      "La dilatation annulaire",
      "La dystrophie valvulaire",
      "La perte de support valvulaire par prolapsus du flap intimal",
      "L'endocardite infectieuse",
      "La rhumatisme articulaire aigu"
    ],
    correctAnswers: [2],
    explanation: "L'hématome disséquant décolle les commissures valvulaires et le flap intimal prolabre à travers l'orifice en diastole, empêchant les sigmoïdes aortiques de coapter correctement.",
    clinicalPearl: "Insuffisance aortique de la dissection = Prolapsus du flap et perte du support commissural."
  },
  {
    id: 'q-diss-22',
    courseId: 'crs-dissection',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La prise en charge d'une dissection de type B compliquée (malperfusion viscérale, douleur réfractaire ou dilatation rapide) est :",
    options: [
      "Médicale exclusive",
      "Chirurgicale ouverte classique",
      "Endovasculaire par endoprothèse couverte (TEVAR)",
      "Thrombolyse",
      "Abstention thérapeutique"
    ],
    correctAnswers: [2],
    explanation: "Le traitement de référence des types B compliqués est la mise en place d'une endoprothèse aortique couverte par voie endovasculaire (TEVAR) pour sceller la porte d'entrée et supprimer la compression du vrai chenal.",
    clinicalPearl: "Type B compliqué = TEVAR (stent-graft endovasculaire) en première intention."
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
      "Le collagène de type I",
      "L'élastine",
      "La fibrilline-1",
      "La laminine",
      "La kératine"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de Marfan est une maladie génétique autosomique dominante liée à des mutations du gène FBN1 codant la fibrilline-1, glycoprotéine composant les microfibrilles du tissu conjonctif.",
    clinicalPearl: "Marfan = Mutation de la Fibrilline-1 (gène FBN1 sur chromosome 15)."
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
      "Un AVC ischémique seul",
      "Une dissection aortique de type A étendue au tronc artériel brachiocéphalique",
      "Une migraine avec aura",
      "Une tumeur cérébrale",
      "Une crise d'épilepsie"
    ],
    correctAnswers: [1],
    explanation: "L'extension rétrograde ou antérograde du clivage disséquant à la carotide primitive droite ou au tronc artériel brachiocéphalique provoque un AVC ischémique hémisphérique controlatéral.",
    clinicalPearl: "Douleur thoracique + Déficit neurologique focal = Dissection aortique avec atteinte des TSA !"
  },
  {
    id: 'q-diss-25',
    courseId: 'crs-dissection',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Le but principal de l'utilisation du nitroprussiate de sodium dans la dissection aortique est :",
    options: [
      "Réduire la précharge",
      "Réduire la postcharge en vasodilatant les artérioles (toujours associé à un bêta-bloquant)",
      "Ralentir la fréquence cardiaque",
      "Prévenir les troubles du rythme",
      "Lutter contre l'ischémie mésentérique"
    ],
    correctAnswers: [1],
    explanation: "Le nitroprussiate de sodium est un vasodilatateur artériel puissant utilisé pour abaisser la PA, mais il doit obligatoirement être précédé d'un bêta-bloquant sous peine d'induire une tachycardie réflexe aggravant la contrainte pariétale.",
    clinicalPearl: "Nitroprussiate : uniquement en 2ème ligne APRÈS bêta-bloquants bien titrés."
  },

  // DISSECTION AORTIQUE - 5 CAS CLINIQUES
  {
    id: 'cas-diss-01',
    courseId: 'crs-dissection',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : La douleur en coup de poignard\nUn homme de 48 ans, hypertendu mal équilibré, est admis aux urgences pour une douleur thoracique haute rétrosternale à irradiation interscapulaire, décrite comme 'un coup de poignard'. PA 185/100 mmHg, FC 110/min. L'examen note un souffle diastolique au foyer aortique et un pouls fémoral droit aboli.\nQ1. Quel est le diagnostic le plus probable ?\nQ2. Quel examen demandez-vous en extrême urgence ?",
    options: [
      "Infarctus du myocarde STEMI / Coronarographie",
      "Embolie pulmonaire massive / Scintigraphie",
      "Dissection aortique de type Stanford A / Angio-TDM thoraco-abdomino-pelvien",
      "Pancréatite aiguë / Lipasémie",
      "Ulcère perforé / Abdomen sans préparation"
    ],
    correctAnswers: [2],
    explanation: "La triade HTA sévère + douleur déchirante interscapulaire + souffle d'insuffisance aortique + asymétrie de pouls signe une dissection aortique de type A. L'angio-TDM injecté confirme le diagnostic et prépare le geste chirurgical.",
    clinicalPearl: "Douleur interscapulaire + Souffle d'IA + Pouls aboli = Dissection type A → Angio-TDM urgent !"
  },
  {
    id: 'cas-diss-02',
    courseId: 'crs-dissection',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 2 : Le Marfan lombalgique\nUne femme de 35 ans, suivie pour syndrome de Marfan, consulte pour des lombalgies intenses apparues brutalement. PA 140/80 mmHg. L'examen clinique est sans particularité, sans asymétrie de pouls.\nQ1. Devant cette douleur chez cette patiente, que craignez-vous ?\nQ2. Quelle est la prise en charge initiale avant tout examen ?",
    options: [
      "Pyélonéphrite / Antibiothérapie large",
      "Dissection aortique débutant au niveau de l'isthme (type B) / Bêta-bloquant IV et contrôle tensionnel strict",
      "Lumbago / AINS",
      "Endométriose / Échographie pelvienne",
      "Colique néphrétique / Antalgiques simples"
    ],
    correctAnswers: [1],
    explanation: "Toute douleur dorsale ou lombaire brutale chez un sujet porteur de Marfan est une dissection aortique (souvent type B sous-isthmique) jusqu'à preuve du contraire. Traitement immédiat : stabilisation par bêta-bloquants IV pour réduire la dP/dt.",
    clinicalPearl: "Douleur lombaire chez un Marfan = Dissection type B → Bêta-bloquants IV d'urgence."
  },
  {
    id: 'cas-diss-03',
    courseId: 'crs-dissection',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Ischémie digestive aiguë\nUn homme de 70 ans arrive avec une douleur abdominale sus-ombilicale féroce, des nausées et une rectorragie minime. Il est en état de choc. PA 80/50 mmHg, FC 135/min. L'examen abdominal est sensible sans défense franche.\nQ1. Quelle complication d'une dissection aortique faut-il évoquer ?\nQ2. Quel examen permettra un bilan lésionnel complet ?",
    options: [
      "Ischémie mésentérique par occlusion de l'artère mésentérique supérieure / Angio-TDM abdominal injecté",
      "Diverticulite / Coloscopie",
      "Rupture de rate / Échographie abdominale",
      "Cholécystite aiguë / Scanner sans injection",
      "Gastro-entérite / Bilan biologique"
    ],
    correctAnswers: [0],
    explanation: "Douleur abdominale intolérable contrastant avec un ventre souple + rectorragie + choc = ischémie mésentérique aiguë par extension du flap de dissection à l'artère mésentérique supérieure. Angio-TDM avec injection indispensable.",
    clinicalPearl: "Dissection aortique + Douleur abdominale démesurée = Ischémie mésentérique aiguë."
  },
  {
    id: 'cas-diss-04',
    courseId: 'crs-dissection',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Paraplégie post-opératoire\nUn patient opéré il y a 24h d'une dissection de type A sous CEC développe une oligurie, une élévation de la créatininémie et une paralysie flasque bilatérale des deux membres inférieurs.\nQ1. Quelle est la complication la plus probable ?\nQ2. Quel mécanisme est en cause ?",
    options: [
      "Sepsis / Compression médullaire",
      "Infarctus du myocarde / Embolie de cholestérol",
      "Ischémie médullaire (paraplégie) / Ischémie par lésion ou exclusion de l'artère d'Adamkiewicz",
      "Rejet de greffe / Méningite",
      "Hypokaliémie / AVC ischémique"
    ],
    correctAnswers: [2],
    explanation: "L'artère d'Adamkiewicz (artère du renflement lombaire naissant de l'aorte thoracique inférieure/abdominale) vascularise la moelle antérieure. L'exclusion du faux chenal ou le clampage aortique prolongé peut induire un infarctus médullaire avec paraplégie.",
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
    questionText: "Cas Clinique 5 : Le piège du sus-décalage ST\nDevant une suspicion de dissection aortique chez un patient de 60 ans avec douleur dorsale et asymétrie de pouls, l'urgentiste reçoit un ECG qui montre un sus-décalage du segment ST en D2, D3, aVF.\nQuelle est l'attitude thérapeutique impérative ?",
    options: [
      "Traiter comme un STEMI ordinaire et injecter une thrombolyse en urgence",
      "Demander une coronarographie directe sans scanner",
      "Suspendre toute thrombolyse, réaliser un angio-TDM en extrême urgence pour confirmer la dissection compliquée d'IDM",
      "Faire un écho-doppler veineux des membres inférieurs",
      "Prescrire des antalgiques simples"
    ],
    correctAnswers: [2],
    explanation: "La dissection de type A peut s'étendre au sinus de Valsalva droit et comprimer l'ostium coronaire droit, provoquant un infarctus inférieur ST+. Thrombolyser ce patient entraînerait une hémorragie et tamponnade foudroyantes. Angio-TDM prioritaire !",
    clinicalPearl: "Piège mortel d'examen : IDM secondaire à une dissection aortique de type A → Thrombolyse proscrite !"
  }
];
