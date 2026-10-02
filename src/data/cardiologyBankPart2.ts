import { Question } from '../types/medical';

export const CARDIOLOGY_QUESTIONS_PART2: Question[] = [
  // ==========================================
  // COEUR ET GROSSESSE - 25 QCMs
  // ==========================================
  {
    id: 'q-grossesse-01',
    courseId: 'crs-grossesse',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez une femme enceinte de 32 SA, laquelle de ces modifications hémodynamiques est la plus attendue ?",
    options: [
      "Augmentation de 10% du débit cardiaque",
      "Diminution de la fréquence cardiaque de 10 battements/min",
      "Augmentation de 50% du débit cardiaque",
      "Augmentation des résistances artérielles systémiques de 20%",
      "Nadir de la pression artérielle à 32 SA"
    ],
    correctAnswers: [2],
    explanation: "Dès la 5ème semaine, le débit cardiaque augmente progressivement pour atteindre un pic d'augmentation de 30 à 50% vers 30-34 SA, principalement dû à l'augmentation du volume d'éjection systolique et de la fréquence cardiaque. Le nadir tensionnel se situe plus tôt, entre 18-26 SA.",
    clinicalPearl: "Grossesse à 32 SA : Débit cardiaque majoré de +30 à +50%."
  },
  {
    id: 'q-grossesse-02',
    courseId: 'crs-grossesse',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Une patiente avec un syndrome de Marfan et un diamètre de la racine aortique de 43 mm consulte pour un projet de grossesse. Selon la classification mOMS 2.0, quel est son risque ?",
    options: [
      "WHO I",
      "WHO II",
      "WHO III",
      "WHO IV",
      "Grossesse contre-indiquée"
    ],
    correctAnswers: [2],
    explanation: "Un diamètre aortique entre 40 et 45 mm dans le syndrome de Marfan classe la patiente en mOMS (WHO) III : risque significativement accru de mortalité ou de dissection aortique, imposant une surveillance multidisciplinaire très rapprochée. Si diamètre > 45 mm, elle bascule en classe IV (grossesse contre-indiquée).",
    clinicalPearl: "Marfan aorte 40-45 mm = WHO III (risque élevé) ; > 45 mm = WHO IV (contre-indication formelle)."
  },
  {
    id: 'q-grossesse-03',
    courseId: 'crs-grossesse',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament est formellement contre-indiqué tout au long de la grossesse en raison de son potentiel tératogène ?",
    options: [
      "Labétalol",
      "Méthyldopa",
      "Énalapril (IEC)",
      "Nifédipine",
      "Métoprolol"
    ],
    correctAnswers: [2],
    explanation: "Les IEC et les ARA II sont strictement contre-indiqués pendant toute la grossesse (fœtotoxicité, oligoamnios, agénésie/dysplasie rénale, hypoplasie de la voûte crânienne et mort fœtale in utero).",
    clinicalPearl: "Mnémo : 'IEC / ARA II = INTERDITS' pendant toute la grossesse !"
  },
  {
    id: 'q-grossesse-04',
    courseId: 'crs-grossesse',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Durant le travail, l'augmentation marquée du débit cardiaque est principalement due à :",
    options: [
      "La baisse de la précharge",
      "L'augmentation de la post-charge",
      "La diminution de la fréquence cardiaque",
      "L'autotransfusion lors des contractions utérines",
      "La compression aortique"
    ],
    correctAnswers: [3],
    explanation: "Chaque contraction utérine efficace chasse environ 300 à 500 mL de sang de la circulation utéro-placentaire vers la circulation maternelle générale ('autotransfusion'), augmentant brutalement la précharge et le débit cardiaque de 50%.",
    clinicalPearl: "Contraction utérine = Bolus d'autotransfusion de 300-500 mL vers le cœur maternel."
  },
  {
    id: 'q-grossesse-05',
    courseId: 'crs-grossesse',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Une patiente porteuse d'une prothèse valvulaire mécanique est enceinte. Quelle est la stratégie anticoagulante pour minimiser le risque tératogène au 1er trimestre ?",
    options: [
      "Maintenir les AVK à dose fixe",
      "Utiliser un anticoagulant oral direct (AOD)",
      "Relais par Héparine de Bas Poids Moléculaire (HBPM) entre 6 et 12 SA",
      "Arrêter toute anticoagulation",
      "Utiliser de l'Aspirine"
    ],
    correctAnswers: [2],
    explanation: "Les AVK sont tératogènes pendant la période d'organogenèse (entre 6 et 12 SA). Un relais par HBPM dose curative avec surveillance stricte de l'anti-Xa évite l'embryopathie aux AVK.",
    clinicalPearl: "Prothèse mécanique et grossesse : relais par HBPM entre 6 et 12 SA pour épargner le fœtus."
  },
  {
    id: 'q-grossesse-06',
    courseId: 'crs-grossesse',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le syndrome d'Eisenmenger constitue une contre-indication formelle à la grossesse principalement en raison du risque de :",
    options: [
      "Prééclampsie sévère",
      "Mort fœtale in utero précoce",
      "Décès maternel par défaillance cardiaque ou thrombo-embolique",
      "Malformations fœtales majeures",
      "Rupture utérine"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome d'Eisenmenger (HTAP fixée) expose à une mortalité maternelle catastrophique de 30 à 50% lors de l'accouchement ou du post-partum par collapsus, défaillance ventriculaire droite aiguë ou syncope irréversible.",
    clinicalPearl: "Eisenmenger + Grossesse = 30-50% de mortalité maternelle (mOMS IV, contre-indication absolue)."
  },
  {
    id: 'q-grossesse-07',
    courseId: 'crs-grossesse',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel est l'élément clé du diagnostic de la cardiomyopathie du péripartum (CMPP) ?",
    options: [
      "Antécédent de cardiopathie congénitale",
      "Survenue uniquement avant l'accouchement",
      "Fraction d'éjection du VG < 45% en l'absence d'autre cause",
      "Présence obligatoire d'arythmies ventriculaires",
      "Dilatation majeure du ventricule droit"
    ],
    correctAnswers: [2],
    explanation: "La CMPP est définie par l'apparition d'une insuffisance cardiaque avec dysfonction systolique ventriculaire gauche (FEVG < 45%) survenant dans le dernier mois de grossesse ou les 5 premiers mois du post-partum sans autre étiologie retrouvée.",
    clinicalPearl: "Mnémo CMPP = '5-4-5' : 5 derniers mois de grossesse à 5 mois post-partum, FEVG < 45%."
  },
  {
    id: 'q-grossesse-08',
    courseId: 'crs-grossesse',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une primigeste de 28 SA présente une PA à 150/95 mmHg et une protéinurie à 1.5 g/24h. Quel est le diagnostic le plus probable ?",
    options: [
      "HTA chronique",
      "HTA gravidique simple",
      "Prééclampsie",
      "Syndrome de HELLP",
      "Néphropathie chronique"
    ],
    correctAnswers: [2],
    explanation: "L'apparition d'une HTA (PAS ≥ 140 et/ou PAD ≥ 90 mmHg) associée à une protéinurie significative (> 0.3 g/24h) après 20 semaines d'aménorrhée définit la prééclampsie.",
    clinicalPearl: "HTA + Protéinurie > 0.3 g/24h après 20 SA = Prééclampsie."
  },
  {
    id: 'q-grossesse-09',
    courseId: 'crs-grossesse',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Pour une patiente avec une sténose aortique sévère asymptomatique, quel élément à l'épreuve d'effort contre-indiquerait une grossesse sans intervention préalable ?",
    options: [
      "Augmentation normale de la FC",
      "Augmentation de la PA systolique",
      "Chute de la PA systolique en dessous de la valeur initiale",
      "Apparition d'extrasystoles ventriculaires",
      "Essoufflement modéré"
    ],
    correctAnswers: [2],
    explanation: "Une chute tensionnelle à l'effort traduit l'épuisement de la réserve contractile et l'inaptitude du VG à vaincre l'obstacle mécanique à l'effort. C'est un signe péjoratif imposant de désobstruer la valve avant d'envisager une grossesse.",
    clinicalPearl: "Chute de la PAS à l'effort dans le RAO = Mauvaise tolérance imposant une chirurgie pré-conceptionnelle."
  },
  {
    id: 'q-grossesse-10',
    courseId: 'crs-grossesse',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal avantage d'une bioprothèse valvulaire pour une femme désirant une grossesse ?",
    options: [
      "Meilleure durabilité",
      "Pas de nécessité d'anticoagulation",
      "Risque thrombotique nul",
      "Résistance à la dégénérescence",
      "Utilisation des AOD possible"
    ],
    correctAnswers: [1],
    explanation: "La bioprothèse évite le recours aux anticoagulants oraux (tératogénicité des AVK et risque hémorragique). En revanche, la grossesse peut accélérer sa dégénérescence tissulaire.",
    clinicalPearl: "Bioprothèse chez la femme jeune : zéro anticoagulant mais dégénérescence accélérée."
  },
  {
    id: 'q-grossesse-11',
    courseId: 'crs-grossesse',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'antibioprophylaxie de l'endocardite infectieuse est systématiquement recommandée lors de :",
    options: [
      "Tout accouchement par voie basse",
      "Toute césarienne",
      "Une cystoscopie",
      "Des soins dentaires chez une patiente à haut risque",
      "Une amniocentèse"
    ],
    correctAnswers: [3],
    explanation: "Selon les recommandations actuelles de l'ESC, l'antibioprophylaxie n'est plus recommandée lors des accouchements (voie basse ou césarienne). Elle est réservée aux soins dentaires invasifs chez les patientes à haut risque (prothèse valvulaire, antécédent d'EI).",
    clinicalPearl: "Pas d'antibioprophylaxie systématique pour l'accouchement, même avec cardiopathie !"
  },
  {
    id: 'q-grossesse-12',
    courseId: 'crs-grossesse',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel paramètre hémodynamique augmente significativement en postpartum immédiat ?",
    options: [
      "Les résistances vasculaires systémiques",
      "La fréquence cardiaque",
      "La post-charge",
      "La précharge",
      "La pression artérielle pulmonaire"
    ],
    correctAnswers: [3],
    explanation: "La délivrance lève la compression exercée par l'utérus sur la veine cave inférieure et la rétraction utérine vide le lit vasculaire utérin vers la circulation générale, créant un pic brutal de précharge (+60 à 80%).",
    clinicalPearl: "Post-partum immédiat = Risque maximal d'OAP par afflux massif de précharge."
  },
  {
    id: 'q-grossesse-13',
    courseId: 'crs-grossesse',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de première intention de l'HTA modérée durant la grossesse est :",
    options: [
      "Un inhibiteur calcique",
      "Un diurétique thiazidique",
      "Un IEC",
      "La méthyldopa ou le labétalol",
      "Un ARA II"
    ],
    correctAnswers: [3],
    explanation: "La Méthyldopa (agoniste alpha-2 central) et le Labétalol (bêta-bloquant avec effet alpha-1 bloquant) sont les traitements de premier choix recommandés, éprouvés de longue date pour leur sécurité fœto-maternelle.",
    clinicalPearl: "Mnémo HTA et grossesse : 'LABET-METHYLDOPA' en 1ère ligne (ou Nicardipine)."
  },
  {
    id: 'q-grossesse-14',
    courseId: 'crs-grossesse',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente avec une communication interauriculaire (CIA) non opérée et sans HTAP est enceinte. Quel est son risque selon l'OMS ?",
    options: [
      "WHO I",
      "WHO II",
      "WHO III",
      "WHO IV",
      "Contre-indication"
    ],
    correctAnswers: [0],
    explanation: "Une CIA non compliquée (sans shunt inversé ni HTAP) correspond à la classe mOMS I : risque maternel très faible, similaire à la population générale.",
    clinicalPearl: "CIA sans HTAP = Risque WHO I (grossesse très bien tolérée)."
  },
  {
    id: 'q-grossesse-15',
    courseId: 'crs-grossesse',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal risque fœtal lié à la prise d'Amiodarone pendant la grossesse ?",
    options: [
      "Agénésie des membres",
      "Hypothyroïdie fœtale",
      "Anomalies du SNC",
      "Hypoplasie pulmonaire",
      "Leucopénie"
    ],
    correctAnswers: [1],
    explanation: "L'Amiodarone contient une charge massive d'iode qui traverse le placenta et peut bloquer la thyroïde fœtale, causant goitre et hypothyroïdie chez environ 9% des nouveau-nés.",
    clinicalPearl: "Amiodarone chez la femme enceinte = Risque d'hypothyroïdie fœtale majeure."
  },
  {
    id: 'q-grossesse-16',
    courseId: 'crs-grossesse',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La compression aorto-cave en décubitus dorsal est maximale :",
    options: [
      "Au 1er trimestre",
      "Au 2ème trimestre",
      "Au 3ème trimestre",
      "Pendant le travail",
      "En postpartum"
    ],
    correctAnswers: [2],
    explanation: "Au 3ème trimestre, le volume de l'utérus gravide en position couchée sur le dos comprime la veine cave inférieure et l'aorte, réduisant le retour veineux et le débit cardiaque de 25-30% (syndrome postural). La position en décubitus latéral gauche (DLG) lève la compression.",
    clinicalPearl: "Malaise en décubitus dorsal au 3ème trimestre = Tourner immédiatement en décubitus latéral gauche."
  },
  {
    id: 'q-grossesse-17',
    courseId: 'crs-grossesse',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel biomarqueur est utile pour prédire un événement cardiovasculaire plus tard dans la grossesse si son taux est élevé à 20 SA ?",
    options: [
      "Troponine",
      "CRP",
      "NT-proBNP",
      "D-Dimères",
      "Créatinine"
    ],
    correctAnswers: [2],
    explanation: "Un taux de NT-proBNP > 128 pg/mL dosé à 20 SA chez une femme avec cardiopathie sous-jacente possède une excellente valeur prédictive d'insuffisance cardiaque ou d'événement indésirable ultérieur.",
    clinicalPearl: "NT-proBNP > 128 pg/mL à 20 SA = Risque élevé de décompensation cardiaque."
  },
  {
    id: 'q-grossesse-18',
    courseId: 'crs-grossesse',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'élément clé de la physiopathologie de la prééclampsie est :",
    options: [
      "Une hypervolémie",
      "Une vasodilatation généralisée",
      "Un dysfonctionnement endothélial secondaire à un défaut de placentation",
      "Une augmentation du débit cardiaque",
      "Une rétention hydrosodée isolée"
    ],
    correctAnswers: [2],
    explanation: "Le primum movens est un défaut de remodelage des artères spiralées utérines par le trophoblaste, créant une ischémie placentaire qui libère des facteurs anti-angiogéniques (sFlt-1) responsables d'une dysfonction endothéliale systémique.",
    clinicalPearl: "Prééclampsie = Ischémie placentaire → Facteurs toxiques circulants → Dysfonction endothéliale diffuse."
  },
  {
    id: 'q-grossesse-19',
    courseId: 'crs-grossesse',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Pour une patiente avec une dissection aortique antérieure, quel mode d'accouchement est à privilégier ?",
    options: [
      "Accouchement voie basse avec péridurale",
      "Accouchement voie basse sans péridurale",
      "Césarienne",
      "Accouchement dans l'eau",
      "Utilisation de forceps"
    ],
    correctAnswers: [2],
    explanation: "En cas d'antécédent de dissection aortique ou de diamètre aortique > 45 mm, la césarienne programmée est impérative pour éviter les à-coups hypertensifs majeurs et les efforts expulsifs du travail par voie basse.",
    clinicalPearl: "Aorte > 45 mm ou antécédent de dissection = Césarienne programmée sous anesthésie générale/locorégionale."
  },
  {
    id: 'q-grossesse-20',
    courseId: 'crs-grossesse',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel médicament utilisé dans l'insuffisance cardiaque est contre-indiqué pendant la grossesse mais peut être utilisé pendant l'allaitement ?",
    options: [
      "Ivabradine",
      "Spironolactone",
      "Énalapril (IEC)",
      "Valsartan (ARA II)",
      "Sacubitril/Valsartan (ARNI)"
    ],
    correctAnswers: [1],
    explanation: "La spironolactone est déconseillée pendant la grossesse en raison du risque théorique de féminisation des fœtus masculins (effet anti-androgénique), mais elle passe très peu dans le lait maternel et est autorisée pendant l'allaitement.",
    clinicalPearl: "Spironolactone : contre-indiquée pendant la grossesse, compatible avec l'allaitement."
  },
  {
    id: 'q-grossesse-21',
    courseId: 'crs-grossesse',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale cause de mortalité maternelle dans la cardiomyopathie du péripartum est :",
    options: [
      "L'embolie pulmonaire",
      "L'arrêt cardiaque réfractaire par dysfonction VG",
      "L'AVC hémorragique",
      "Le choc septique",
      "L'hémorragie de la délivrance"
    ],
    correctAnswers: [1],
    explanation: "La défaillance de pompe ventriculaire gauche réfractaire avec bas débit terminal et les arythmies ventriculaires malignes associées représentent la cause prépondérante de décès dans la CMPP.",
    clinicalPearl: "Mortalité CMPP : Choc cardiogénique réfractaire et troubles du rythme ventriculaires."
  },
  {
    id: 'q-grossesse-22',
    courseId: 'crs-grossesse',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le facteur de risque le plus important pour un événement cardiaque durant la grossesse ?",
    options: [
      "Âge maternel > 35 ans",
      "Obésité",
      "Antécédent d'événement cardiaque (IC, AVC, arythmie)",
      "Grossesse gémellaire",
      "Tabagisme"
    ],
    correctAnswers: [2],
    explanation: "Dans le score CARPREG II et ZAHARA, l'existence d'un événement cardiaque antérieur (insuffisance cardiaque, accident thromboembolique ou trouble du rythme grave) est le prédicteur le plus puissant de récidive au cours de la gestation.",
    clinicalPearl: "Antécédent d'événement cardiaque pré-grossesse = facteur prédictif n°1 de récidive."
  },
  {
    id: 'q-grossesse-23',
    courseId: 'crs-grossesse',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le syndrome de HELLP, quel élément biologique n'est pas caractéristique ?",
    options: [
      "Hémolyse (LDH élevée, schizocytes)",
      "Thrombopénie (< 100 000/mm³)",
      "Élévation des transaminases (ASAT, ALAT)",
      "Hypofibrinogénémie",
      "Élévation des LDH"
    ],
    correctAnswers: [3],
    explanation: "Le syndrome HELLP associe : H (Hemolysis - LDH élevée), EL (Elevated Liver enzymes - cytolyse hépatique), LP (Low Platelets - thrombopénie). L'hypofibrinogénémie évoquerait une CIVD associée, non le HELLP pur.",
    clinicalPearl: "HELLP : Hémolyse + Cytolyse hépatique + Thrombopénie. Fibrinogène conservé sauf si CIVD."
  },
  {
    id: 'q-grossesse-24',
    courseId: 'crs-grossesse',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Pour une patiente avec une valve mécanique enceinte, quelle surveillance est cruciale sous HBPM ?",
    options: [
      "INR hebdomadaire",
      "TCA hebdomadaire",
      "Dosage de l'activité anti-Xa hebdomadaire (pic à 4h)",
      "Numération plaquettaire mensuelle",
      "Créatininémie trimestrielle"
    ],
    correctAnswers: [2],
    explanation: "Sous HBPM chez une femme enceinte porteuse de valve mécanique, le volume de distribution et l'élimination rénale changent très rapidement. Il est impératif de doser l'anti-Xa chaque semaine au pic (3-4h post-injection) pour viser 0.8 - 1.2 UI/mL.",
    clinicalPearl: "Valve mécanique sous HBPM : Contrôle hebdomadaire strict de l'activité anti-Xa au pic !"
  },
  {
    id: 'q-grossesse-25',
    courseId: 'crs-grossesse',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La recommandation de l'ESC concernant l'Hypertension Artérielle Pulmonaire (HTAP) et la grossesse est :",
    options: [
      "La grossesse est autorisée sans surveillance particulière",
      "L'HTAP n'est plus une contre-indication absolue, mais le risque reste très élevé (WHO IV)",
      "L'HTAP est classée WHO I",
      "Le traitement de l'HTAP est le même que chez la femme non enceinte",
      "L'accouchement par voie basse est toujours recommandé"
    ],
    correctAnswers: [1],
    explanation: "Les nouvelles recommandations de l'ESC nuancent l'interdiction absolue en insistant sur le conseil pré-conceptionnel, mais maintiennent l'HTAP en classe mOMS IV (risque de mortalité maternelle très élevé, 20 à 30%), imposant une prise en charge hautement spécialisée si la grossesse est poursuivie.",
    clinicalPearl: "HTAP = Classe WHO IV. Grossesse fortement déconseillée, discussion éthique et multidisciplinaire."
  },

  // COEUR ET GROSSESSE - 5 CAS CLINIQUES
  {
    id: 'cas-grossesse-01',
    courseId: 'crs-grossesse',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : Projet de Grossesse et Cardiopathie Congénitale\nMme A., 28 ans, porteuse d'une tétralogie de Fallot corrigée dans l'enfance, souhaite avoir un enfant. Elle est asymptomatique (NYHA I). L'échocardiographie montre une fonction VG normale, une FEVG à 55%, et une fuite pulmonaire modérée sans dilatation majeure du VD.\nSelon la classification mOMS, quel est son risque ?",
    options: [
      "WHO I",
      "WHO II",
      "WHO II-III",
      "WHO III",
      "WHO IV"
    ],
    correctAnswers: [1],
    explanation: "Une tétralogie de Fallot complètement opérée, asymptomatique, avec fonction VG normale et fuite pulmonaire sans retentissement cavitaire sévère relève de la classe mOMS II (risque léger à modéré).",
    clinicalPearl: "Fallot opéré sans dysfonction sévère = Risque WHO II (surveillance par échographies régulières)."
  },
  {
    id: 'cas-grossesse-02',
    courseId: 'crs-grossesse',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : Urgence Hypertensive du 3ème Trimestre\nMme B., 34 ans, primigeste à 35 SA, est admise pour céphalées et troubles visuels. PA à 170/110 mmHg. Protéinurie bandelette à ++. Le bilan montre des plaquettes à 90 000/mm³, ASAT/ALAT à 3N, LDH élevées.\nQuel est le diagnostic le plus probable ?",
    options: [
      "HTA gravidique isolée",
      "Prééclampsie sévère",
      "Syndrome de HELLP",
      "Éclampsie",
      "HTA chronique"
    ],
    correctAnswers: [2],
    explanation: "L'association HTA sévère + cytolyse hépatique (transaminases > 2N) + thrombopénie (< 100 000/mm³) et hémolyse (LDH élevées) définit le syndrome de HELLP, urgence obstétrico-médicale.",
    clinicalPearl: "Thrombopénie + Cytolyse + LDH chez la femme enceinte fébrile/céphalique = HELLP syndrome."
  },
  {
    id: 'cas-grossesse-03',
    courseId: 'crs-grossesse',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 : Palpitations et Grossesse\nMme C., 31 ans, à 28 SA, consulte pour des palpitations rapides. L'ECG montre une tachycardie régulière à 160 bpm, complexes fins. Elle est stable sur le plan hémodynamique.\nQuelle est la manœuvre de première intention pour tenter de réduire cette tachycardie ?",
    options: [
      "Injection IV d'Amiodarone",
      "Massage sinusal carotidien (ou manœuvre de Valsalva)",
      "Choc électrique externe synchronisé",
      "Injection IV de Digoxine",
      "Injection IV de Vérapamil"
    ],
    correctAnswers: [1],
    explanation: "Devant une tachycardie jonctionnelle paroxystique régulière à QRS fins hémodynamiquement stable, les manœuvres vagales (Valsalva modifié ou massage sinusal carotidien) sont la 1ère étape non pharmacologique de référence.",
    clinicalPearl: "Tachycardie à QRS fins chez la femme enceinte stable = Manœuvres vagales en première intention."
  },
  {
    id: 'cas-grossesse-04',
    courseId: 'crs-grossesse',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 4 : Dyspnée du Post-Partum\nMme D., 25 ans, 3 semaines après un accouchement par voie basse sans histoire, présente une dyspnée d'aggravation progressive, des œdèmes des membres inférieurs et une orthopnée. L'échocardiographie révèle une FEVG à 35% sans antécédents cardiaques.\nQuel est le diagnostic le plus probable ?",
    options: [
      "Embolie pulmonaire",
      "Cardiomyopathie du péripartum (CMPP)",
      "Myocardite virale",
      "Décompensation d'une cardiopathie congénitale méconnue",
      "Syndrome de détresse respiratoire aiguë"
    ],
    correctAnswers: [1],
    explanation: "La survenue d'une insuffisance cardiaque systolique (FEVG < 45%) dans le mois précédant l'accouchement jusqu'aux 5 mois du post-partum sans autre étiologie identifiable est la définition exacte de la CMPP.",
    clinicalPearl: "Dyspnée + FEVG 35% 3 semaines après accouchement = Cardiomyopathie du péripartum."
  },
  {
    id: 'cas-grossesse-05',
    courseId: 'crs-grossesse',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Valvulopathie et Grossesse\nMme E., 30 ans, porteuse d'une bioprothèse mitrale posée 3 ans auparavant pour un rhumatisme articulaire aigu, est enceinte de 12 SA. Elle est asymptomatique. L'échocardiographie de contrôle montre un gradient moyen normal sur la bioprothèse.\nQuelle est la principale préoccupation concernant sa bioprothèse pendant la grossesse ?",
    options: [
      "Risque hémorragique sous AVK",
      "Risque de dégénérescence structurale accélérée de la bioprothèse",
      "Risque thrombotique nécessitant des AVK",
      "Risque d'endocardite imposant une antibioprophylaxie per-accouchement",
      "Risque de rupture"
    ],
    correctAnswers: [1],
    explanation: "Chez la femme jeune enceinte, l'hypermétabolisme et les flux hémodynamiques intenses accélèrent la dégénérescence fibro-calcaire des bioprothèses, exposant au risque de resténose ou de fuite précoce.",
    clinicalPearl: "Bioprothèse et grossesse : Pas de risque lié aux AVK, mais surveillance de la dégénérescence accélérée."
  },

  // ==========================================
  // PERICARDITE AIGUE - 25 QCMs
  // ==========================================
  {
    id: 'q-peri-01',
    courseId: 'crs-pericardite',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 22 ans consulte pour une douleur thoracique rétrosternale aiguë, augmentée à l'inspiration et en décubitus, et améliorée en s'asseyant et en se penchant en avant. L'auscultation trouve un frottement péricardique. L'ECG montre un sus-décalage concave du segment ST dans toutes les dérivations, sans onde Q. Quel est le diagnostic le plus probable ?",
    options: [
      "Infarctus du myocarde inférieur",
      "Embolie pulmonaire",
      "Péricardite aiguë",
      "Pneumothorax",
      "Dissection aortique"
    ],
    correctAnswers: [2],
    explanation: "La triade classique (douleur péricarditique positionnelle, frottement superficiel, sus-décalage ST concave diffus sans miroir ni onde Q) est pathognomonique de la péricardite aiguë.",
    clinicalPearl: "Douleur calmée par l'antéflexion + Frottement péricardique + Sus-décalage concave diffus = Péricardite."
  },
  {
    id: 'q-peri-02',
    courseId: 'crs-pericardite',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel est le signe électrocardiographique le plus spécifique de la tamponnade cardiaque ?",
    options: [
      "Sus-décalage du segment ST",
      "Micro-voltage",
      "Ondes T négatives",
      "Alternance électrique",
      "Sous-décalage du segment PR"
    ],
    correctAnswers: [3],
    explanation: "L'alternance électrique (variation cycle à cycle de l'amplitude et de l'axe des QRS) est hautement spécifique de la tamponnade cardiaque avec épanchement abondant, due aux mouvements pendulaires du cœur ('swinging heart').",
    clinicalPearl: "Alternance électrique = Cœur qui flotte dans un épanchement abondant sous pression (tamponnade)."
  },
  {
    id: 'q-peri-03',
    courseId: 'crs-pericardite',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Lors de l'échocardiographie d'un patient avec une péricardite, quel signe est le plus en faveur d'une tamponnade ?",
    options: [
      "Épanchement péricardique antérieur de 5 mm",
      "Hypertrophie ventriculaire gauche",
      "Collapsus diastolique de l'oreillette droite",
      "Collapsus télédiastolique du ventricule droit",
      "Fraction d'éjection à 60%"
    ],
    correctAnswers: [3],
    explanation: "Le collapsus télédiastolique (protodiastolique/télédiastolique) de la paroi libre du ventricule droit est le signe échographique le plus spécifique de compression hémodynamique sévère par l'épanchement péricardique.",
    clinicalPearl: "Écho de tamponnade : Collapsus télédiastolique du VD + dilatation non compliante de la VCI."
  },
  {
    id: 'q-peri-04',
    courseId: 'crs-pericardite',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient sous hémodialyse chronique présente une fièvre et une douleur thoracique. Un frottement péricardique est audible. Quel est le facteur étiologique le plus probable ?",
    options: [
      "Péricardite virale",
      "Péricardite urémique",
      "Péricardite tuberculeuse",
      "Péricardite néoplasique",
      "Péricardite auto-immune"
    ],
    correctAnswers: [1],
    explanation: "Chez l'insuffisant rénal terminal dialysé, l'accumulation de toxines urémiques induit une péricardite fibrineuse caractéristique dite urémique, dont le traitement repose avant tout sur l'intensification des séances de dialyse.",
    clinicalPearl: "Frottement chez un dialysé = Péricardite urémique → Intensifier l'hémodialyse !"
  },
  {
    id: 'q-peri-05',
    courseId: 'crs-pericardite',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le traitement de première intention d'une péricardite aiguë idiopathique non compliquée ?",
    options: [
      "Colchicine seule",
      "Aspirine ou AINS + Colchicine",
      "Corticoïdes à forte dose",
      "Antibiotiques à large spectre",
      "Ponction péricardique systématique"
    ],
    correctAnswers: [1],
    explanation: "Le traitement de 1ère ligne associe l'Aspirine (ou AINS à dose anti-inflammatoire forte) et la Colchicine (0.5 mg x 2/j ou 0.5 mg x 1 si <70kg) pendant 3 mois pour prévenir les récidives.",
    clinicalPearl: "Traitement 1ère intention péricardite aiguë : Aspirine/AINS + Colchicine (pendant 3 mois)."
  },
  {
    id: 'q-peri-06',
    courseId: 'crs-pericardite',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La séquence classique des stades ECG de la péricardite aiguë selon Holzmann est :",
    options: [
      "Onde T négative -> Sus-décalage ST -> Normalisation -> Onde T plate",
      "Sus-décalage ST -> Onde T plate -> Onde T négative -> Normalisation",
      "Micro-voltage -> Alternance électrique -> Sus-décalage ST -> Normalisation",
      "Sous-décalage PR -> Onde T négative -> Sus-décalage ST -> Normalisation",
      "Sus-décalage ST -> Onde T négative -> Onde T plate -> Normalisation"
    ],
    correctAnswers: [1],
    explanation: "La classification de Holzmann comporte 4 stades : Stade I = sus-décalage ST concave ; Stade II = retour de ST à la ligne isoélectrique et aplatissement de T ; Stade III = inversion négative de T ; Stade IV = normalisation complète.",
    clinicalPearl: "Mnémo Holzmann : S-T-O-N = Sus-décalage ST, T plate, Ondes T négatives, Normalisation."
  },
  {
    id: 'q-peri-07',
    courseId: 'crs-pericardite',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément du bilan biologique initial est le plus utile pour suivre l'activité inflammatoire de la péricardite et guider la durée du traitement ?",
    options: [
      "Troponine",
      "Numération Formule Sanguine (NFS)",
      "Créatininémie",
      "Protéine C Réactive (CRP)",
      "Vitesse de Sédimentation (VS)"
    ],
    correctAnswers: [3],
    explanation: "La CRP est le marqueur de choix : sa cinétique rapide permet d'évaluer la réponse anti-inflammatoire et sa normalisation complète conditionne le début de la décroissance progressive des doses médicamenteuses.",
    clinicalPearl: "CRP : marqueur clé pour surveiller l'extinction de l'inflammation péricardique."
  },
  {
    id: 'q-peri-08',
    courseId: 'crs-pericardite',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente une péricardite fébrile avec un épanchement abondant. La ponction péricardique ramène un liquide purulent. Quelle est l'étiologie ?",
    options: [
      "Virale",
      "Tuberculeuse",
      "Purulente (Bactérienne)",
      "Néoplasique",
      "Auto-immune"
    ],
    correctAnswers: [2],
    explanation: "L'aspect macroscopique purulent confirme une péricardite bactérienne purulente (souvent à staphylocoque, pneumocoque ou streptocoque), imposant un drainage chirurgical urgent et une antibiothérapie ciblée.",
    clinicalPearl: "Pus à la ponction péricardique = Péricardite purulente bactérienne → Drainage urgent !"
  },
  {
    id: 'q-peri-09',
    courseId: 'crs-pericardite',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le 'pouls paradoxal' lors d'une tamponnade est défini par :",
    options: [
      "Une bradycardie à l'inspiration",
      "Une augmentation de la pression artérielle systolique (PAS) à l'inspiration",
      "Une diminution de la PAS > 10 mmHg à l'inspiration",
      "Une tachycardie à l'expiration",
      "Une inversion de l'onde P sur l'ECG"
    ],
    correctAnswers: [2],
    explanation: "Le pouls paradoxal de Kussmaul correspond à une chute inspiratoire anormale de la pression artérielle systolique de plus de 10 mmHg, causée par l'interdépendance ventriculaire au sein d'un sac péricardique inextensible.",
    clinicalPearl: "Pouls paradoxal = Baisse de la PAS > 10 mmHg à l'inspiration profonde."
  },
  {
    id: 'q-peri-10',
    courseId: 'crs-pericardite',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication la plus redoutée à long terme d'une péricardite bactérienne non traitée est :",
    options: [
      "La récidive",
      "La myocardite",
      "La péricardite chronique constrictive",
      "L'infarctus du myocarde",
      "L'endocardite"
    ],
    correctAnswers: [2],
    explanation: "Les péricardites bactériennes et tuberculeuses entraînent une fibrose épaisse et calcifiante du péricarde, évoluant dans 20 à 30% des cas vers une péricardite constrictive chronique (adiastolie).",
    clinicalPearl: "Mnémo pronostic : 'B.A.T.' = Bactérienne/Tuberculeuse → Risque élevé de Constriction !"
  },
  {
    id: 'q-peri-11',
    courseId: 'crs-pericardite',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe clinique pathognomonique de la péricardite aiguë ?",
    options: [
      "La douleur rétrosternale",
      "La dyspnée",
      "Le frottement péricardique",
      "La fièvre",
      "La turgescence jugulaire"
    ],
    correctAnswers: [2],
    explanation: "Le frottement péricardique (bruit superficiel de va-et-vient, méso-cardiaque, persistant en apnée) est le seul signe clinique pathognomonique de l'inflammation des feuillets péricardiques.",
    clinicalPearl: "Frottement péricardique = Signe pathognomonique (persiste en apnée respiratoire)."
  },
  {
    id: 'q-peri-12',
    courseId: 'crs-pericardite',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une élévation modérée des troponines dans un contexte de péricardite aiguë évoque :",
    options: [
      "Un surdosage en AINS",
      "Une extension de l'inflammation au myocarde (myopéricardite)",
      "Une insuffisance rénale associée",
      "Un infarctus du myocarde simultané",
      "Un mauvais pronostic à coup sûr"
    ],
    correctAnswers: [1],
    explanation: "La contiguïté anatomique entre le feuillet épicardique et le myocarde sous-jacent explique qu'une inflammation péricardique intense puisse léser les myocytes superficiels et élever la troponine : c'est la myopéricardite.",
    clinicalPearl: "Péricardite + Troponine élevée = Myopéricardite (surveillance FEVG à l'écho)."
  },
  {
    id: 'q-peri-13',
    courseId: 'crs-pericardite',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La cardiomégalie 'en carafe' ou 'en théière' sur la radiographie thoracique est évocatrice de :",
    options: [
      "Cardiomyopathie dilatée",
      "Épanchement péricardique abondant",
      "Sténose mitrale",
      "Anévrisme du ventricule gauche",
      "Atélectasie pulmonaire"
    ],
    correctAnswers: [1],
    explanation: "Un épanchement péricardique liquide volumineux (> 300 mL) élargit globalement la silhouette cardiaque qui prend un aspect arrondi symétrique à pédicule court en 'carafe', 'théière' ou 'gourde'.",
    clinicalPearl: "Radio du thorax : Cœur en carafe ou en théière = Épanchement péricardique abondant."
  },
  {
    id: 'q-peri-14',
    courseId: 'crs-pericardite',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans la prise en charge d'une péricardite aiguë, les corticoïdes doivent être envisagés en première intention :",
    options: [
      "Toujours",
      "Uniquement en cas de contre-indication aux AINS",
      "En cas d'étiologie virale prouvée",
      "Pour potentialiser l'effet des antibiotiques",
      "Chez tous les patients diabétiques"
    ],
    correctAnswers: [1],
    explanation: "Les corticoïdes favorisent les récidives péricardiques et la chronicisation. Ils sont formellement proscrits en 1ère intention sauf contre-indication/échec avéré des AINS ou maladie systémique/lupique sous-jacente.",
    clinicalPearl: "Corticoïdes dans la péricardite : Risque majeur de récidives chroniques (2ème intention uniquement)."
  },
  {
    id: 'q-peri-15',
    courseId: 'crs-pericardite',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel est le principal avantage de l'IRM cardiaque dans le bilan d'une péricardite ?",
    options: [
      "Mesurer la pression artérielle",
      "Visualiser l'inflammation péricardique sans irradiation",
      "Remplacer l'échocardiographie en première intention",
      "Diagnostiquer les sténoses coronaires",
      "Guider une ponction péricardique"
    ],
    correctAnswers: [1],
    explanation: "L'IRM cardiaque caractérise parfaitement l'inflammation aiguë des feuillets péricardiques (rehaussement tardif après gadolinium et hypersignal T2), élimine une myocardite associée et mesure l'épaississement péricardique sans rayonnement ionisant.",
    clinicalPearl: "IRM cardiaque : examen de référence pour affirmer l'œdème et l'inflammation tissulaire péricardique."
  },
  {
    id: 'q-peri-16',
    courseId: 'crs-pericardite',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de Dressler est une péricardite :",
    options: [
      "Virale",
      "Survenant après un infarctus du myocarde (forme tardive)",
      "De l'insuffisance rénale",
      "Purulente",
      "Traumatique"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Dressler est une péricardite auto-immune retardée apparaissant 2 à 6 semaines après un infarctus du myocarde, médiée par des anticorps dirigés contre des antigènes myocardiques libérés lors de la nécrose.",
    clinicalPearl: "Syndrome de Dressler = Péricardite tardive post-infarctus (mécanisme auto-immun)."
  },
  {
    id: 'q-peri-17',
    courseId: 'crs-pericardite',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le mécanisme physiopathologique principal de la tamponnade cardiaque ?",
    options: [
      "Troubles de la repolarisation",
      "Compression des cavités cardiaques gênant le remplissage diastolique",
      "Augmentation de la post-charge du ventricule gauche",
      "Diminution de la contractilité myocardique",
      "Rupture de la paroi ventriculaire"
    ],
    correctAnswers: [1],
    explanation: "L'accumulation sous tension de liquide dans l'espace péricardique non extensible comprime les cavités cardiaques (droites en premier), empêchant le retour veineux et le remplissage diastolique, entraînant une chute brutale du débit cardiaque et un choc cardiogénique compressif.",
    clinicalPearl: "Tamponnade = Adiastolie aiguë par compression péricardique sous pression."
  },
  {
    id: 'q-peri-18',
    courseId: 'crs-pericardite',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La colchicine dans le traitement de la péricardite aiguë a pour principal intérêt de :",
    options: [
      "Traiter l'infection virale",
      "Prévenir les récidives",
      "Soulager la douleur à la place des AINS",
      "Corriger les anomalies ECG",
      "Réduire la taille de l'épanchement"
    ],
    correctAnswers: [1],
    explanation: "La colchicine bloque la polymérisation des microtubules et la migration des neutrophiles, divisant par deux le taux de récidive péricardique (qui passe de 30% à moins de 15%).",
    clinicalPearl: "Colchicine = Prévention démontrée des récidives de péricardite (donner 3 mois)."
  },
  {
    id: 'q-peri-19',
    courseId: 'crs-pericardite',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient avec un lupus érythémateux disséminé présente une douleur péricarditique. Quel est le mécanisme étiologique ?",
    options: [
      "Infectieux",
      "Néoplasique",
      "Auto-immun",
      "Traumatique",
      "Métabolique"
    ],
    correctAnswers: [2],
    explanation: "Dans le LED, la péricardite est d'origine auto-immune, liée à des dépôts de complexes immuns circulants et d'anticorps antinucléaires sur les séreuses.",
    clinicalPearl: "Péricardite lupique = atteinte auto-immune des séreuses (polysérite)."
  },
  {
    id: 'q-peri-20',
    courseId: 'crs-pericardite',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen est indispensable et urgent devant toute suspicion de tamponnade ?",
    options: [
      "Scanner thoracique",
      "Coronarographie",
      "Échocardiographie",
      "IRM cardiaque",
      "Radiographie thoracique"
    ],
    correctAnswers: [2],
    explanation: "L'échocardiographie transthoracique est l'examen diagnostique clé disponible immédiatement au lit du patient, affirmant l'épanchement et le collapsus des cavités droites.",
    clinicalPearl: "Suspicion de tamponnade = Échocardiographie au lit du patient en extrême urgence."
  },
  {
    id: 'q-peri-21',
    courseId: 'crs-pericardite',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un décollement péricardique postérieur permanent à l'échocardiographie signe un épanchement :",
    options: [
      "Absent",
      "Minime",
      "Modéré",
      "Abondant",
      "Localisé"
    ],
    correctAnswers: [3],
    explanation: "Un décollement péricardique présent en systole ET en diastole (permanent) de plus de 10 à 20 mm signe un épanchement péricardique abondant circonférentiel.",
    clinicalPearl: "Décollement systolo-diastolique permanent > 15-20 mm = Épanchement abondant."
  },
  {
    id: 'q-peri-22',
    courseId: 'crs-pericardite',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la cause la plus fréquente de péricardite aiguë chez l'adulte jeune ?",
    options: [
      "Tuberculeuse",
      "Néoplasique",
      "Idiopathique ou virale",
      "Urémique",
      "Post-radique"
    ],
    correctAnswers: [2],
    explanation: "Chez l'adulte jeune sans immunodépression, 85 à 90% des péricardites aiguës sont virales (Coxsackie, Parvovirus B19, EBV, CMV, SARS-CoV-2) ou idiopathiques.",
    clinicalPearl: "Étiologie n°1 chez le sujet jeune = Virale / Idiopathique (bon pronostic)."
  },
  {
    id: 'q-peri-23',
    courseId: 'crs-pericardite',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de la tamponnade cardiaque confirmée est :",
    options: [
      "Médical exclusif (diurétiques)",
      "L'évacuation en urgence du liquide péricardique (ponction ou drainage chirurgical)",
      "La transplantation cardiaque",
      "L'administration de bêta-bloquants",
      "La radiothérapie"
    ],
    correctAnswers: [1],
    explanation: "La tamponnade est une urgence de décompression vitale : le seul geste salvateur est le drainage péricardique immédiat (péricardocentèse écho-guidée ou drainage chirurgical sous-xiphoïdien). Les diurétiques sont formellement contre-indiqués !",
    clinicalPearl: "Tamponnade : Péricardocentèse en urgence. JAMAIS DE DIURÉTIQUES (aggraveraient le collapsus) !"
  },
  {
    id: 'q-peri-24',
    courseId: 'crs-pericardite',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le sous-décalage du segment PR sur l'ECG est un signe :",
    options: [
      "De nécrose myocardique",
      "D'hyperkaliémie",
      "Spécifique de la péricardite",
      "D'ischémie auriculaire",
      "De bloc atrio-ventriculaire"
    ],
    correctAnswers: [2],
    explanation: "Le sous-décalage du segment PQ/PR est un signe très précoce et très spécifique de péricardite aiguë (lésion sous-épicardique auriculaire), souvent présent avant le sus-décalage ST.",
    clinicalPearl: "Sous-décalage de PR = Signe précoce très spécifique d'atteinte péricardique aiguë."
  },
  {
    id: 'q-peri-25',
    courseId: 'crs-pericardite',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "La restriction physique pour un athlète avec une péricardite aiguë doit être maintenue :",
    options: [
      "Jusqu'à la disparition de la douleur",
      "Pendant 1 semaine",
      "Jusqu'à normalisation de la CRP, de l'ECG et de l'échocardiographie, pour au moins 3 mois",
      "Jusqu'à la fin du traitement par AINS",
      "Il n'y a pas besoin de restriction"
    ],
    correctAnswers: [2],
    explanation: "Selon les recommandations ESC, tout effort physique sportif est proscrit pendant la phase active et doit être maintenu au minimum 3 mois chez les athlètes, conditionné à la normalisation de la clinique, de l'ECG, de l'écho et de la CRP.",
    clinicalPearl: "Sport et péricardite : Arrêt complet ≥ 3 mois et normalisation stricte de la CRP !"
  },

  // PERICARDITE AIGUE - 5 CAS CLINIQUES
  {
    id: 'cas-peri-01',
    courseId: 'crs-pericardite',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : Le Jeune Homme Fiévreux\nUn étudiant de 20 ans consulte aux urgences pour une douleur thoracique rétrosternale aiguë survenue brutalement la veille. Elle est augmentée à l'inspiration et lorsqu'il s'allonge. Il rapporte un syndrome grippal il y a une semaine. À l'examen : TA 125/80, FC 100/min, T° 38.2°C. Auscultation : frottement péricardique en 'craquement de cuir neuf'. L'ECG montre un sus-décalage concave du segment ST en D1, D2, V3-V6 et un sous-décalage de PR en D1. La CRP est à 45 mg/L.\nQ1. Quel est le diagnostic le plus probable ?\nQ2. Quel est le premier traitement à instaurer ?",
    options: [
      "Pneumonie communautaire / Antibiotiques IV",
      "Péricardite aiguë virale/idiopathique / Aspirine à dose anti-inflammatoire + Colchicine",
      "Embolie pulmonaire / Anticoagulants curatifs",
      "Infarctus du myocarde / Angioplastie primaire",
      "Dissection aortique / Chirurgie urgente"
    ],
    correctAnswers: [1],
    explanation: "Le terrain jeune, le contage viral, la douleur péricarditique typique, le frottement superficiel et l'ECG (sus-décalage ST concave diffus + sous-décalage de PR) confirment la péricardite aiguë virale. Traitement de 1ère ligne = Aspirine (1g x 3/j) + Colchicine (0.5 mg x 2/j) pendant 3 mois.",
    clinicalPearl: "Triade : Douleur augmentée couché + Frottement en cuir neuf + Sous-décalage PR = Péricardite aiguë."
  },
  {
    id: 'cas-peri-02',
    courseId: 'crs-pericardite',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 2 : La Dialysée Douloureuse\nUne femme de 65 ans, insuffisante rénale chronique dialysée depuis 5 ans, est amenée pour une douleur thoracique constante et une dyspnée d'aggravation progressive. Elle est apyrétique. On note un frottement péricardique et une turgescence jugulaire. La radio thoracique montre une cardiomégalie 'en théière'. L'échocardiographie confirme un épanchement péricardique circonférentiel important de 15 mm sans signe de tamponnade.\nQ1. L'étiologie la plus probable est :\nQ2. Quelle est la mesure thérapeutique NON médicamenteuse la plus importante ?",
    options: [
      "Péricardite virale / Ponction péricardique systématique",
      "Péricardite urémique / Optimisation et intensification de son protocole d'hémodialyse",
      "Péricardite tuberculeuse / Quadrithérapie",
      "Péricardite néoplasique / Chimiothérapie",
      "Péricardite post-infarctus / Revascularisation"
    ],
    correctAnswers: [1],
    explanation: "La péricardite urémique survient en cas de dialyse sous-optimale avec accumulation de toxines azotées. Le traitement spécifique de premier choix est l'intensification des dialyses (quotidiennes ou plus longues). Les anti-inflammatoires sont moins efficaces.",
    clinicalPearl: "Péricardite urémique = Traitement par intensification des séances de dialyse."
  },
  {
    id: 'cas-peri-03',
    courseId: 'crs-pericardite',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Tamponnade Cardiaque\nUn homme de 55 ans, suivi pour un cancer du poumon, est admis en unité de soins intensifs pour un malaise. Il est polypnéique, en orthopnée. TA 85/50, FC 130/min, SpO2 92% à l'air ambiant. Turgescence jugulaire à 45°. Bruits du cœur assourdis. Pouls paradoxal à 25 mmHg. L'échocardiographie montre un gros épanchement péricardique avec collapsus télédiastolique du VD et alternance électrique à l'ECG.\nQ1. Quel est le diagnostic urgent ?\nQ2. Quelle est la conduite à tenir immédiate ?",
    options: [
      "Choc septique / Antibiothérapie probabiliste",
      "Embolie pulmonaire massive / Remplissage massif",
      "Tamponnade cardiaque / Drainage péricardique en extrême urgence",
      "Décompensation cardiaque gauche / Furosémide IV",
      "Pneumopathie sévère / Oxygénothérapie seule"
    ],
    correctAnswers: [2],
    explanation: "Hypotension + tachycardie + turgescence jugulaire + pouls paradoxal > 20 mmHg = triade de Beck et signes de tamponnade. Collapsus télédiastolique du VD à l'écho = indication vitale immédiate au drainage péricardique.",
    clinicalPearl: "Triade de Beck (Hypotension, Bruits assourdis, Turgescence) + Pouls paradoxal = Tamponnade → Évacuer le liquide !"
  },
  {
    id: 'cas-peri-04',
    courseId: 'crs-pericardite',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 4 : La Récidive\nUne femme de 40 ans a présenté il y a 2 mois une péricardite aiguë idiopathique traitée par ibuprofène seul pendant 10 jours. Elle consulte de nouveau pour réapparition des mêmes douleurs. La CRP est à 25 mg/L. L'ECG montre des ondes T négatives antérieures.\nQ1. Quel facteur a le plus probablement favorisé cette récidive ?\nQ2. Quel est le traitement de choix de cette récidive ?",
    options: [
      "Absence de colchicine lors du 1er épisode / Instaurer AINS + Colchicine pleine dose pendant au moins 6 mois",
      "Traitement antibiotique insuffisant / Réinstaurer un AINS seul",
      "Activité physique trop précoce / Corticothérapie à forte dose",
      "Posologie d'ibuprofène trop forte / Ponction péricardique",
      "Origine tuberculeuse méconnue / Chirurgie"
    ],
    correctAnswers: [0],
    explanation: "L'omission de la colchicine lors de l'épisode initial multiplie par deux le risque de rechute. En cas de récidive, on prescrit un AINS à dose maximale associé à la Colchicine poursuivie pendant au moins 6 mois avec arrêt progressif.",
    clinicalPearl: "Péricardite récidivante = AINS + Colchicine pendant 6 mois minimum."
  },
  {
    id: 'cas-peri-05',
    courseId: 'crs-pericardite',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Fièvre et Épanchement Cloisonné\nUn homme de 35 ans, originaire d'une zone rurale, présente une fièvre traînante, des sueurs nocturnes, une altération de l'état général et une dyspnée. L'échocardiographie montre un épanchement péricardique abondant, cloisonné, avec des images hyperéchogènes de fibrine. L'intradermoréaction à la tuberculine est positive.\nQ1. Quelle est l'étiologie la plus à craindre ?\nQ2. Quelle est la principale complication évolutive de cette étiologie ?",
    options: [
      "Péricardite virale / Myocardite aiguë",
      "Péricardite idiopathique / Guérison spontanée",
      "Péricardite tuberculeuse / Péricardite chronique constrictive",
      "Péricardite purulente / Endocardite",
      "Péricardite néoplasique / Infarctus"
    ],
    correctAnswers: [2],
    explanation: "Le tableau subaigu fébrile, l'épanchement cloisonné hyperéchogène et l'IDR positive signent une péricardite tuberculeuse. Sa redoutable complication est la péricardite chronique constrictive par fibrose symphysaire du péricarde.",
    clinicalPearl: "Péricardite tuberculeuse = Épanchement cloisonné épais avec risque majeur de constriction (PCC)."
  },

  // ==========================================
  // TROUBLES DU RYTHME - 25 QCMs
  // ==========================================
  {
    id: 'q-rythme-01',
    courseId: 'crs-troubles-rythme',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une tachycardie régulière à QRS fins à 150/min est observée sur l'ECG. Le diagnostic le plus probable est :",
    options: [
      "Fibrillation atriale",
      "Tachycardie sinusale",
      "Flutter atrial avec conduction 2:1",
      "Tachycardie ventriculaire",
      "Extrasystoles atriales bigéminées"
    ],
    correctAnswers: [2],
    explanation: "Un flutter atrial commun a une fréquence atriale typique à ~300/min. Avec une conduction auriculo-ventriculaire 2:1, la fréquence ventriculaire est exactement à 150/min, régulière à QRS fins.",
    clinicalPearl: "Règle d'or : Toute tachycardie régulière à QRS fins à 150 bpm = Flutter atrial 2:1 jusqu'à preuve du contraire !"
  },
  {
    id: 'q-rythme-02',
    courseId: 'crs-troubles-rythme',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le mécanisme physiopathologique principal de la Tachycardie par Réentrée Intra-Nodale (TRIN) ?",
    options: [
      "Foyer automatique ectopique dans l'oreillette",
      "Présence d'un faisceau accessoire (Kent)",
      "Dualité nodale (voie lente et voie rapide)",
      "Macro-réentrée au niveau de l'oreillette droite",
      "Ischémie myocardique aiguë"
    ],
    correctAnswers: [2],
    explanation: "La TRIN (maladie de Bouveret) repose sur une dualité fonctionnelle du nœud AV : une voie lente (à période réfractaire courte) et une voie rapide (à période réfractaire longue), permettant un circuit de microréentrée intranodal.",
    clinicalPearl: "TRIN = Microréentrée sur dualité nodale (voie lente conduction antérograde + voie rapide rétrograde)."
  },
  {
    id: 'q-rythme-03',
    courseId: 'crs-troubles-rythme',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la fibrillation atriale (FA), laquelle de ces affirmations est VRAIE ?",
    options: [
      "L'ECG montre des ondes F en 'toit d'usine'.",
      "Le risque thromboembolique est évalué par le score HAS-BLED.",
      "Toute FA à QRS fins est nécessairement une FA non valvulaire.",
      "Le traitement de première intention d'une FA mal tolérée est la cardioversion électrique externe (CEE).",
      "La FA paroxystique dure toujours plus de 7 jours."
    ],
    correctAnswers: [3],
    explanation: "En cas d'instabilité hémodynamique (hypotension, état de choc, angor sévère ou OAP réfractaire), la cardioversion électrique externe synchronisée en urgence est l'indication formelle prioritaire.",
    clinicalPearl: "FA mal tolérée sur le plan hémodynamique = Choc Électrique Externe immédiat !"
  },
  {
    id: 'q-rythme-04',
    courseId: 'crs-troubles-rythme',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Un patient présente un ECG avec un QT corrigé à 500 ms et des épisodes de tachycardie polymorphe avec torsion de l'axe des QRS. Quel diagnostic évoquez-vous ?",
    options: [
      "Tachycardie ventriculaire monomorphe",
      "Fibrillation ventriculaire",
      "Torsades de pointes",
      "Flutter atrial variable",
      "Tachycardie jonctionnelle"
    ],
    correctAnswers: [2],
    explanation: "La torsade de pointes est une tachycardie ventriculaire polymorphe caractérisée par une torsion continue de l'axe des QRS autour de la ligne isoélectrique, survenant toujours sur un terrain d'allongement du QT (QTc > 460-500 ms).",
    clinicalPearl: "Mnémo : 'QT Long = Danger Grand' → Risque de Torsades de Pointes."
  },
  {
    id: 'q-rythme-05',
    courseId: 'crs-troubles-rythme',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une 'onde delta' et un intervalle PR court sur l'ECG de repos sont évocateurs de :",
    options: [
      "Syndrome de Brugada",
      "Bloc de branche gauche",
      "Syndrome de Wolff-Parkinson-White (WPW)",
      "Tachycardie atriale focale",
      "Cardiomyopathie hypertrophique"
    ],
    correctAnswers: [2],
    explanation: "La triade ECG du WPW associe un PR court (< 120 ms), un empâtement du pied du QRS (onde delta) témoignant de la pré-excitation ventriculaire via un faisceau accessoire (faisceau de Kent), et un QRS élargi.",
    clinicalPearl: "WPW = PR court + Onde Delta + QRS élargi."
  },
  {
    id: 'q-rythme-06',
    courseId: 'crs-troubles-rythme',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le traitement spécifique à initier en urgence face à une fibrillation ventriculaire ?",
    options: [
      "Amiodarone IV",
      "Choc électrique externe (CEE) / Défibrillation",
      "Vérapamil IV",
      "Atropine",
      "Isoprénaline"
    ],
    correctAnswers: [1],
    explanation: "La fibrillation ventriculaire est un arrêt cardio-respiratoire avec tracé anarchique. Le traitement immédiat et exclusif est la défibrillation électrique externe par CEE non synchronisé sans aucun délai.",
    clinicalPearl: "Fibrillation ventriculaire = Défibrillation CEE immédiate (chaque minute compte) !"
  },
  {
    id: 'q-rythme-07',
    courseId: 'crs-troubles-rythme',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Le 'phénomène R/T' observé dans les extrasystoles ventriculaires (ESV) évoque :",
    options: [
      "Une ESV bénigne sur cœur sain",
      "Un risque accru de tachycardie ventriculaire ou de fibrillation ventriculaire",
      "Une origine jonctionnelle de l'extrasystole",
      "Une association à un bloc AV",
      "Un bigéminisme constant"
    ],
    correctAnswers: [1],
    explanation: "Le phénomène R-sur-T survient lorsque l'ESV précoce tombe sur l'onde T du battement précédent (phase vulnérable de la repolarisation ventriculaire), favorisant le déclenchement d'une TV ou d'une fibrillation ventriculaire.",
    clinicalPearl: "R-sur-T = ESV très précoce sur la phase vulnérable → Haut risque de mort subite rythmique."
  },
  {
    id: 'q-rythme-08',
    courseId: 'crs-troubles-rythme',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la fibrillation atriale, la perte de la 'systole atriale' peut entraîner une baisse du débit cardiaque d'environ :",
    options: [
      "5-10%",
      "10-20%",
      "30-40%",
      "50-60%",
      "70-80%"
    ],
    correctAnswers: [2],
    explanation: "La contraction atriale terminale ('kick' auriculaire) contribue à 20-30% du remplissage ventriculaire au repos, et jusqu'à 30-40% en cas de ventricule gauche peu compliant ou de fréquence rapide.",
    clinicalPearl: "Perte de la systole atriale en FA = Perte de 30-40% du débit cardiaque."
  },
  {
    id: 'q-rythme-09',
    courseId: 'crs-troubles-rythme',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel est le circuit de la tachycardie orthodromique dans le WPW ?",
    options: [
      "Descente par la voie accessoire, remontée par le NAV",
      "Descente par le NAV, remontée par la voie accessoire",
      "Circuit confiné au nœud AV",
      "Macro-réentrée dans l'oreillette droite",
      "Foyer automatique dans le ventricule"
    ],
    correctAnswers: [1],
    explanation: "Dans la tachycardie orthodromique (la plus fréquente, 90%), l'influx descend par les voies de conduction normales (nœud AV et faisceau de His, donnant des QRS fins) et remonte par le faisceau accessoire vers l'oreillette.",
    clinicalPearl: "Orthodromique = Descend par le nœud AV (QRS fins) et remonte par le Kent."
  },
  {
    id: 'q-rythme-10',
    courseId: 'crs-troubles-rythme',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement curatif de premier choix pour un flutter atrial typique est :",
    options: [
      "L'amiodarone per os",
      "La cardioversion électrique",
      "L'ablation par radiofréquence de l'isthme cavo-tricuspide",
      "La digoxine",
      "Les bêta-bloquants"
    ],
    correctAnswers: [2],
    explanation: "L'ablation par radiofréquence de l'isthme cavo-tricuspide (ICT) bloque la ligne de passage obligatoire du circuit de macro-réentrée dans l'oreillette droite, avec un taux de succès supérieur à 95% et très peu de récidives.",
    clinicalPearl: "Flutter commun typique = Ablation de l'isthme cavo-tricuspide par radiofréquence (curatif >95%)."
  },
  {
    id: 'q-rythme-11',
    courseId: 'crs-troubles-rythme',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Un complexe de 'capture' durant une tachycardie à QRS larges est un argument en faveur de :",
    options: [
      "Une Tachycardie Ventriculaire (TV)",
      "Une Tachycardie Supra-Ventriculaire (TSV) avec aberration",
      "Un Flutter atrial",
      "Une Fibrillation atriale",
      "Une Tachycardie sinusale"
    ],
    correctAnswers: [0],
    explanation: "Un complexe de capture (QRS fin d'origine sinusale survenant fortuitement au milieu de la tachycardie à QRS larges) prouve la dissociation auriculo-ventriculaire, ce qui signe formellement une Tachycardie Ventriculaire.",
    clinicalPearl: "Captures et fusions = Preuve de dissociation AV → C'est une Tachycardie Ventriculaire !"
  },
  {
    id: 'q-rythme-12',
    courseId: 'crs-troubles-rythme',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel médicament est contre-indiqué dans la tachycardie du WPW avec FA à QRS larges ?",
    options: [
      "Amiodarone",
      "Flectaine (Flécaïnide)",
      "Vérapamil",
      "Adénosine",
      "Sotalol"
    ],
    correctAnswers: [2],
    explanation: "Le Vérapamil (comme les digitaliques) bloque le nœud AV sans bloquer la voie accessoire, détournant tout le flux vers le faisceau de Kent et précipitant une fibrillation ventriculaire mortelle.",
    clinicalPearl: "WPW + FA = Vérapamil et Digoxine CONTRE-INDIQUÉS !"
  },
  {
    id: 'q-rythme-13',
    courseId: 'crs-troubles-rythme',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le 'bigéminisme' est défini par :",
    options: [
      "Deux extrasystoles consécutives",
      "Une extrasystole suivie de deux complexes normaux",
      "Une extrasystole tous les deux complexes normaux",
      "Une extrasystole pour chaque complexe normal",
      "Trois extrasystoles consécutives"
    ],
    correctAnswers: [3],
    explanation: "Le bigéminisme est l'alternance régulière d'un complexe sinusal normal suivi d'une extrasystole (ratio 1:1). Deux extrasystoles consécutives forment un doublet.",
    clinicalPearl: "Bigéminisme = 1 battement sinusal normal + 1 ESV en alternance continue."
  },
  {
    id: 'q-rythme-14',
    courseId: 'crs-troubles-rythme',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale complication du syndrome de Wolff-Parkinson-White (WPW) est :",
    options: [
      "L'infarctus du myocarde",
      "L'endocardite infectieuse",
      "La survenue d'une fibrillation atriale pouvant dégénérer en FV",
      "L'insuffisance cardiaque systolique",
      "La tamponnade cardiaque"
    ],
    correctAnswers: [2],
    explanation: "La complication gravissime du WPW est le passage en FA avec conduction antérograde rapide par la voie accessoire à période réfractaire courte ('SuperWolf'), conduisant à des fréquences ventriculaires > 250-300 bpm dégénérant en FV.",
    clinicalPearl: "Danger n°1 du WPW : FA pré-excitée qui dégénère en Fibrillation Ventriculaire."
  },
  {
    id: 'q-rythme-15',
    courseId: 'crs-troubles-rythme',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal facteur de risque des torsades de pointes ?",
    options: [
      "Raccourcissement du QT",
      "Allongement du QT",
      "Intervalle PR court",
      "Onde delta",
      "Bloc de branche droit"
    ],
    correctAnswers: [1],
    explanation: "L'allongement de l'intervalle QTc (> 500 ms), congénital (syndrome du QT long) ou acquis (hypokaliémie, hypomagnésémie, médicaments bradycardisants ou allongeant le QT), est le prérequis des torsades de pointes.",
    clinicalPearl: "Torsades de pointes = Allongement du QT + Hypokaliémie/Médicaments pro-arythmiques."
  },
  {
    id: 'q-rythme-16',
    courseId: 'crs-troubles-rythme',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la FA, le score CHA₂DS₂-VASc est utilisé pour :",
    options: [
      "Évaluer le risque hémorragique",
      "Choisir l'anti-arythmique",
      "Décider de l'indication d'une anticoagulation",
      "Évaluer la sévérité de l'insuffisance cardiaque",
      "Prédire le succès de l'ablation"
    ],
    correctAnswers: [2],
    explanation: "Le score CHA₂DS₂-VASc stratifie le risque thromboembolique annuel de l'AVC dans la FA non valvulaire. Une anticoagulation curative est formellement indiquée si score ≥ 2 chez l'homme ou ≥ 3 chez la femme.",
    clinicalPearl: "CHA2DS2-VASc = Risque thromboembolique (décide l'anticoagulation curative)."
  },
  {
    id: 'q-rythme-17',
    courseId: 'crs-troubles-rythme',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une tachycardie irrégulière à QRS fins est le plus souvent due à :",
    options: [
      "Une Tachycardie Ventriculaire polymorphe",
      "Un Flutter atrial avec conduction variable",
      "Une Fibrillation atriale",
      "Une Tachycardie jonctionnelle",
      "Des extrasystoles ventriculaires fréquentes"
    ],
    correctAnswers: [2],
    explanation: "L'irrégularité totale des intervalles RR sans ondes P sinusales visibles définit la fibrillation atriale. Le flutter est généralement régulier (2:1).",
    clinicalPearl: "Mnémo : FA = Fouillis (irrégulier). Flutter = Fixe (souvent régulier à 150 bpm)."
  },
  {
    id: 'q-rythme-18',
    courseId: 'crs-troubles-rythme',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le substrat anatomique du flutter atrial typique ?",
    options: [
      "Foyer automatique dans l'oreillette gauche",
      "Dualité nodale",
      "Faisceau de Kent",
      "Macro-réentrée dans l'oreillette droite autour de l'anneau tricuspide",
      "Foyer dans les veines pulmonaires"
    ],
    correctAnswers: [3],
    explanation: "Le flutter atrial typique (commun) est une macro-réentrée dans l'oreillette droite tournant autour de l'anneau tricuspide dans le sens anti-horaire, passant obligatoirement par l'isthme cavo-tricuspide.",
    clinicalPearl: "Flutter typique = Macro-réentrée dans l'oreillette droite autour de la tricuspide."
  },
  {
    id: 'q-rythme-19',
    courseId: 'crs-troubles-rythme',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement d'une tachycardie sinusale repose principalement sur :",
    options: [
      "L'ablation par radiofréquence",
      "Les bêta-bloquants en première intention",
      "Le traitement de sa cause sous-jacente",
      "La cardioversion électrique",
      "Les inhibiteurs calciques"
    ],
    correctAnswers: [2],
    explanation: "La tachycardie sinusale est une réponse physiologique à une agression (fièvre, douleur, anémie, hypovolémie, embolie pulmonaire, hyperthyroïdie). Le traitement est étiologique.",
    clinicalPearl: "Tachycardie sinusale = Symptôme physiologique réactionnel → Traiter la cause !"
  },
  {
    id: 'q-rythme-20',
    courseId: 'crs-troubles-rythme',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient sous Amiodarone pour une FA présente une bradycardie et une fatigue. Quel examen de surveillance est primordial ?",
    options: [
      "Radiographie pulmonaire",
      "Bilan thyroïdien (TSH)",
      "Ionogramme sanguin",
      "ECG pour mesurer l'intervalle QT",
      "Fonction rénale"
    ],
    correctAnswers: [1],
    explanation: "L'amiodarone est riche en iode (75 mg d'iode par comprimé de 200 mg) et entraîne une dysthyroïdie (hypothyroïdie ou hyperthyroïdie induite) chez 15% des patients traités, justifiant un contrôle de la TSH tous les 6 mois.",
    clinicalPearl: "Amiodarone = Dosage semestriel obligatoire de la TSH."
  },
  {
    id: 'q-rythme-21',
    courseId: 'crs-troubles-rythme',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel est le signe ECG pathognomonique d'une extrasystole jonctionnelle ?",
    options: [
      "Onde P' prématurée différente de l'onde P sinusale",
      "QRS large et bizarre",
      "QRS fin, prématuré, non précédé d'une onde P",
      "Repos compensateur incomplet",
      "Onde delta"
    ],
    correctAnswers: [2],
    explanation: "L'extrasystole jonctionnelle prend naissance dans le nœud AV ou le tronc du His : elle dépolarise les ventricules par les voies normales (QRS fin) et n'est pas précédée d'une onde P sinusale (l'onde P rétrograde étant absente ou masquée dans le QRS).",
    clinicalPearl: "ESJ = QRS fin prématuré sans onde P le précédant."
  },
  {
    id: 'q-rythme-22',
    courseId: 'crs-troubles-rythme',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La présence d'un complexe de 'fusion' pendant une tachycardie à QRS larges :",
    options: [
      "Élimine le diagnostic de TV",
      "Est en faveur d'une TSV avec aberration",
      "Est un argument positif pour une TV",
      "Indique un WPW",
      "Signe une intoxication digitalique"
    ],
    correctAnswers: [2],
    explanation: "Un complexe de fusion résulte de la dépolarisation ventriculaire conjointe par l'influx sinusal normal et par le foyer ventriculaire ectopique. Sa présence est un critère quasi pathognomonique de Tachycardie Ventriculaire.",
    clinicalPearl: "Complexe de fusion = Critère diagnostique majeur de Tachycardie Ventriculaire."
  },
  {
    id: 'q-rythme-23',
    courseId: 'crs-troubles-rythme',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel médicament peut être utilisé pour 'accélérer' la fréquence cardiaque dans le traitement des torsades de pointes ?",
    options: [
      "Vérapamil",
      "Bêta-bloquants",
      "Isoprénaline ou stimulation électrique externe",
      "Adénosine",
      "Digoxine"
    ],
    correctAnswers: [2],
    explanation: "Les torsades de pointes sont 'pause-dépendantes'. L'accélération de la fréquence cardiaque (par perfusion d'Isoprénaline ou sonde d'entraînement électrosystolique temporaire) raccourcit l'intervalle QT et empêche la récidive des torsades.",
    clinicalPearl: "Traitement des torsades : Sulfate de Magnésium IV + Accélération du rythme par Isoprénaline."
  },
  {
    id: 'q-rythme-24',
    courseId: 'crs-troubles-rythme',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le risque embolique dans la FA est principalement dû à :",
    options: [
      "La formation de thrombus dans l'oreillette gauche, notamment l'auricule",
      "L'athérosclérose des artères coronaires",
      "La stase veineuse dans les membres inférieurs",
      "L'activation plaquettaire par l'inflammation",
      "L'hypertension artérielle pulmonaire"
    ],
    correctAnswers: [0],
    explanation: "La perte de contraction auriculaire efficace entraîne une stase sanguine majeure dans l'oreillette gauche, préférentiellement dans l'auricule gauche (appendice auriculaire), où se forment plus de 90% des thrombi emboligènes.",
    clinicalPearl: "90% des thrombi de FA naissent dans l'auricule gauche."
  },
  {
    id: 'q-rythme-25',
    courseId: 'crs-troubles-rythme',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le 'SuperWolf' désigne :",
    options: [
      "Une TRIN très rapide",
      "Un WPW avec une voie accessoire à conduction très rapide",
      "Une FA sur WPW avec réponse ventriculaire très rapide et QRS larges en 'accordéon'",
      "Une TV polymorphe",
      "Un flutter atypique"
    ],
    correctAnswers: [2],
    explanation: "Le terme 'SuperWolf' décrit la fibrillation atriale pré-excitée sur syndrome de Wolff-Parkinson-White : tachycardie irrégulière, à QRS larges d'aspect variable en accordéon avec fréquences ventriculaires extrêmes (> 250/min), imposant le CEE en urgence.",
    clinicalPearl: "SuperWolf = FA + WPW : QRS larges polymorphes en accordéon à 250 bpm → CEE d'urgence !"
  },

  // TROUBLES DU RYTHME - 5 CAS CLINIQUES
  {
    id: 'cas-rythme-01',
    courseId: 'crs-troubles-rythme',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : Palpitations chez un jeune homme\nUn étudiant de 22 ans, sans antécédents, consulte pour des palpitations rapides et régulières survenues brutalement pendant un effort. L'ECG montre une tachycardie régulière à 180/min, QRS fins, sans onde P visible.\nQuel est le diagnostic le plus probable ?",
    options: [
      "Tachycardie sinusale inappropriée",
      "Tachycardie ventriculaire",
      "Tachycardie par réentrée intra-nodale (TRIN)",
      "Fibrillation atriale",
      "Tachycardie atriale focale"
    ],
    correctAnswers: [2],
    explanation: "Jeune adulte sans cardiopathie sous-jacente avec début et fin brusques ('en coup de commutation'), tachycardie régulière à complexes fins à 180 bpm sans onde P distincte = Tachycardie de Bouveret (TRIN).",
    clinicalPearl: "Palpitations brutales à QRS fins à 180 bpm chez le sujet jeune = TRIN (maladie de Bouveret)."
  },
  {
    id: 'cas-rythme-02',
    courseId: 'crs-troubles-rythme',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 : Arythmie chez un patient âgé\nUn homme de 70 ans, HTA, diabète, présente un essoufflement et des palpitations irrégulières. L'ECG montre une activité atriale anarchique, absence d'ondes P identifiables, QRS fins, cycles RR irréguliers.\nQuelle est la première mesure thérapeutique à envisager (après stabilisation clinique) ?",
    options: [
      "Ablation par radiofréquence",
      "Vérifier la kaliémie et instaurer une anticoagulation curative si indiquée",
      "Administrer du Vérapamil IV",
      "Planifier une cardioversion électrique immédiate",
      "Prescrire de l'Amiodarone per os"
    ],
    correctAnswers: [1],
    explanation: "Devant une FA inaugurale chez un patient âgé à risque (score CHA2DS2-VASc ≥ 2 avec HTA et diabète), la priorité absolue après évaluation hémodynamique est d'instaurer une anticoagulation curative pour prévenir l'AVC embolique.",
    clinicalPearl: "Découverte de FA chez patient avec facteurs de risque = Anticoagulation curative prioritaire."
  },
  {
    id: 'cas-rythme-03',
    courseId: 'crs-troubles-rythme',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 3 : Malaise avec ECG anormal\nUne femme de 45 ans est admise pour un malaise lipothymique. Son traitement inclut un anti-émétique. L'ECG montre un QT corrigé à 520 ms et des salves de tachycardie polymorphe avec torsion de l'axe.\nQuel est le diagnostic et quelle est la mesure urgente ?",
    options: [
      "Flutter atrial ; Ablation",
      "Torsades de pointes ; Arrêt du médicament suspect, Sulfate de Magnésium IV",
      "Fibrillation ventriculaire ; Choc électrique",
      "TV monomorphe ; Amiodarone IV",
      "ESV bigéminées ; Bêta-bloquant"
    ],
    correctAnswers: [1],
    explanation: "Antiémétique allongeant le QT + QTc à 520 ms + tachycardie ventriculaire polymorphe avec torsion = Torsades de pointes. Mesures urgentes : arrêt immédiat de la molécule incriminée, injection de sulfate de magnésium (2g IV) et correction de la kaliémie.",
    clinicalPearl: "Torsades de pointes = Arrêt immédiat de la molécule + Sulfate de Magnésium IV."
  },
  {
    id: 'cas-rythme-04',
    courseId: 'crs-troubles-rythme',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Douleur thoracique et palpitations\nUn homme de 50 ans, tabagique, se présente aux urgences pour douleur thoracique et palpitations. L'ECG montre une tachycardie régulière à 155/min avec QRS larges (>140 ms). La pression artérielle est à 90/60 mmHg.\nQuelle est votre attitude thérapeutique immédiate ?",
    options: [
      "Adénosine en IV bolus",
      "Amiodarone IV lente",
      "Choc électrique externe synchronisé en urgence",
      "Métoprolol per os",
      "Attendre les résultats des enzymes cardiaques"
    ],
    correctAnswers: [2],
    explanation: "Tachycardie à QRS larges avec signes d'intolérance hémodynamique (hypotension à 90/60 mmHg, douleur thoracique ischémique) = Présomption de TV mal tolérée → Cardioversion électrique externe (CEE) synchronisée immédiate sous sédation.",
    clinicalPearl: "Tachycardie à QRS larges hypotendue = CEE synchronisé en extrême urgence !"
  },
  {
    id: 'cas-rythme-05',
    courseId: 'crs-troubles-rythme',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 5 : Découverte fortuite sur un ECG systématique\nUn ECG de repos est réalisé chez un patient asymptomatique de 30 ans pour un bilan pré-opératoire. Il montre un PR court à 110 ms et une onde delta sur plusieurs dérivations.\nQuelle est la conduite à tenir initiale ?",
    options: [
      "Ablation prophylactique en urgence",
      "Réaliser une épreuve d'effort pour voir la disparition de la pré-excitation",
      "Rassurer et ne rien faire",
      "Débuter un bêta-bloquant",
      "Implanter un défibrillateur automatique"
    ],
    correctAnswers: [1],
    explanation: "Devant un WPW asymptomatique, l'épreuve d'effort évalue le risque d'arythmie maligne : la disparition brutale de l'onde delta à l'effort témoigne d'une période réfractaire longue de la voie accessoire, signant une forme à faible risque.",
    clinicalPearl: "WPW asymptomatique : Épreuve d'effort pour évaluer la période réfractaire de la voie accessoire."
  }
];
