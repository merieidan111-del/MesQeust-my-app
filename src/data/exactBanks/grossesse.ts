import { Question } from '../../types/medical';

export const GROSSESSE_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-gros-01',
    courseId: 'crs-grossesse',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez une femme enceinte de 32 SA, laquelle de ces modifications hémodynamiques est la plus attendue ?",
    options: [
      "a) Augmentation de 10% du débit cardiaque",
      "b) Diminution de la fréquence cardiaque de 10 battements/min",
      "c) Augmentation de 50% du débit cardiaque",
      "d) Augmentation des résistances artérielles systémiques de 20%",
      "e) Nadir de la pression artérielle à 32 SA"
    ],
    correctAnswers: [2],
    explanation: "Dès la 5ème semaine, le débit cardiaque augmente progressivement pour atteindre un pic de 30 à 50% vers 30-34 SA, principalement dû à l'augmentation du volume d'éjection et de la fréquence cardiaque. Le nadir tensionnel se situe plus tôt, entre 18-26 SA.",
    clinicalPearl: "Débit cardiaque maternel : Augmentation de 30 à 50% avec pic à 30-34 SA."
  },
  {
    id: 'q-gros-02',
    courseId: 'crs-grossesse',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente avec un syndrome de Marfan et un diamètre de la racine aortique de 43 mm consulte pour un projet de grossesse. Selon la classification mOMS 2.0, quel est son risque ?",
    options: [
      "a) WHO I",
      "b) WHO II",
      "c) WHO III",
      "d) WHO IV",
      "e) Grossesse contre-indiquée"
    ],
    correctAnswers: [2],
    explanation: "Un diamètre aortique entre 40 et 45 mm dans le syndrome de Marfan place la patiente en classe WHO III, indiquant un risque significativement accru de mortalité ou de morbidité maternelle sévère. Une surveillance multidisciplinaire très rapprochée est indispensable.",
    clinicalPearl: "Marfan aorte 40-45 mm = Classe WHO III (surveillance experte rapprochée)."
  },
  {
    id: 'q-gros-03',
    courseId: 'crs-grossesse',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament est formellement contre-indiqué tout au long de la grossesse en raison de son potentiel tératogène ?",
    options: [
      "a) Labétalol",
      "b) Méthyldopa",
      "c) Énalapril (IEC)",
      "d) Nifédipine",
      "e) Métoprolol"
    ],
    correctAnswers: [2],
    explanation: "Les Inhibiteurs de l'Enzyme de Conversion (IEC) et les ARA II sont strictement contre-indiqués pendant toute la grossesse en raison du risque élevé d'anomalies rénales fœtales, d'oligoamnios et d'hypoplasie pulmonaire.",
    clinicalPearl: "\"IEC/ARA II = INTERDITS\" : strictement contre-indiqués pendant toute la grossesse (fœtotoxicité rénale)."
  },
  {
    id: 'q-gros-04',
    courseId: 'crs-grossesse',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Durant le travail, l'augmentation marquée du débit cardiaque est principalement due à :",
    options: [
      "a) La baisse de la précharge",
      "b) L'augmentation de la post-charge",
      "c) La diminution de la fréquence cardiaque",
      "d) L'autotransfusion lors des contractions utérines",
      "e) La compression aortique"
    ],
    correctAnswers: [3],
    explanation: "Les contractions utérines efficaces \"autotransfusent\" environ 300-500 ml de sang vers la circulation centrale, augmentant brutalement la précharge et donc le débit cardiaque, qui peut doubler pendant la contraction.",
    clinicalPearl: "Contractions utérines = Autotransfusion de 300 à 500 mL à chaque contraction, doublant le débit cardiaque."
  },
  {
    id: 'q-gros-05',
    courseId: 'crs-grossesse',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente porteuse d'une prothèse valvulaire mécanique est enceinte. Quelle est la stratégie anticoagulante pour minimiser le risque tératogène au 1er trimestre ?",
    options: [
      "a) Maintenir les AVK à dose fixe",
      "b) Utiliser un anticoagulant oral direct (AOD)",
      "c) Relais par Héparine de Bas Poids Moléculaire (HBPM) entre 6 et 12 SA",
      "d) Arrêter toute anticoagulation",
      "e) Utiliser de l'Aspirine"
    ],
    correctAnswers: [2],
    explanation: "Les AVK sont tératogènes entre la 6ème et la 12ème semaine d'aménorrhée (période d'organogenèse). Un relais par HBPM (qui ne traverse pas le placenta) pendant cette fenêtre critique permet d'éviter l'embryopathie, malgré un risque légèrement plus élevé de thrombose de la valve.",
    clinicalPearl: "\"HBPM pour le 1er Tri\" : Relais par HBPM entre 6 et 12 SA pour éliminer l'embryopathie des AVK."
  },
  {
    id: 'q-gros-06',
    courseId: 'crs-grossesse',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome d'Eisenmenger constitue une contre-indication formelle à la grossesse principalement en raison du risque de :",
    options: [
      "a) Prééclampsie sévère",
      "b) Mort fœtale in utero précoce",
      "c) Décès maternel par défaillance cardiaque ou thrombo-embolique",
      "d) Malformations fœtales majeures",
      "e) Rupture utérine"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome d'Eisenmenger, avec son HTAP fixe et son shunt droit-gauche, expose à un risque de mortalité maternelle extrêmement élevé (30-50%) par décompensation cardiaque, thromboses paradoxales ou syncopes lors du stress hémodynamique du travail et du post-partum.",
    clinicalPearl: "Eisenmenger + Grossesse = Risque de mortalité maternelle de 30 à 50% !"
  },
  {
    id: 'q-gros-07',
    courseId: 'crs-grossesse',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'élément clé du diagnostic de la cardiomyopathie du péripartum (CMPP) ?",
    options: [
      "a) Antécédent de cardiopathie congénitale",
      "b) Survenue uniquement avant l'accouchement",
      "c) Fraction d'éjection du VG < 45% en l'absence d'autre cause",
      "d) Présence obligatoire d'arythmies ventriculaires",
      "e) Dilatation majeure du ventricule droit"
    ],
    correctAnswers: [2],
    explanation: "La CMPP est définie par une dysfonction VG (FEVG < 45%) survenant dans le dernier mois de grossesse ou les 5 premiers mois du post-partum, sans étiologie identifiable. C'est un diagnostic d'élimination.",
    clinicalPearl: "\"CMPP = 5-4-5\" : Survient dans le dernier mois ou les 5 premiers mois du post-partum avec FEVG < 45%."
  },
  {
    id: 'q-gros-08',
    courseId: 'crs-grossesse',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une primigeste de 28 SA présente une PA à 150/95 mmHg et une protéinurie à 1.5 g/24h. Quel est le diagnostic le plus probable ?",
    options: [
      "a) HTA chronique",
      "b) HTA gravidique simple",
      "c) Prééclampsie",
      "d) Syndrome de HELLP",
      "e) Néphropathie chronique"
    ],
    correctAnswers: [2],
    explanation: "L'association d'une hypertension (PA ≥ 140/90) et d'une protéinurie significative (≥ 0.3 g/24h) apparaissant après 20 SA définit la prééclampsie.",
    clinicalPearl: "Prééclampsie = HTA >= 140/90 + Protéinurie >= 0.3 g/24h apparaissant après 20 SA."
  },
  {
    id: 'q-gros-09',
    courseId: 'crs-grossesse',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour une patiente avec une sténose aortique sévère asymptomatique, quel élément à l'épreuve d'effort contre-indiquerait une grossesse sans intervention préalable ?",
    options: [
      "a) Augmentation normale de la FC",
      "b) Augmentation de la PA systolique",
      "c) Chute de la PA systolique en dessous de la valeur initiale",
      "d) Apparition d'extrasystoles ventriculaires",
      "e) Essoufflement modéré"
    ],
    correctAnswers: [2],
    explanation: "Une hypotension à l'effort chez un patient avec sténose aortique sévère est un signe de réserve cardiaque limitée et un marqueur de mauvais pronostic, indiquant la nécessité d'une intervention avant d'envisager une grossesse.",
    clinicalPearl: "RAO serré : chute tensionnelle à l'effort = Décompensation hémodynamique imminente."
  },
  {
    id: 'q-gros-10',
    courseId: 'crs-grossesse',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal avantage d'une bioprothèse valvulaire pour une femme désirant une grossesse ?",
    options: [
      "a) Meilleure durabilité",
      "b) Pas de nécessité d'anticoagulation",
      "c) Risque thrombotique nul",
      "d) Résistance à la dégénérescence",
      "e) Utilisation des AOD possible"
    ],
    correctAnswers: [1],
    explanation: "Le principal avantage est l'absence de nécessité d'anticoagulation, évitant ainsi les risques hémorragiques et tératogènes. L'inconvénient est la dégénérescence accélérée de la bioprothèse pendant la grossesse.",
    clinicalPearl: "Bioprothèse chez la femme jeune : Pas d'anticoagulation, mais dégénérescence accélérée."
  },
  {
    id: 'q-gros-11',
    courseId: 'crs-grossesse',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'antibioprophylaxie de l'endocardite infectieuse est systématiquement recommandée lors de :",
    options: [
      "a) Tout accouchement par voie basse",
      "b) Toute césarienne",
      "c) Une cystoscopie",
      "d) Des soins dentaires chez une patiente à haut risque",
      "e) Une amniocentèse"
    ],
    correctAnswers: [3],
    explanation: "Selon les recommandations actuelles, l'antibioprophylaxie n'est plus recommandée pour les accouchements, mais elle l'est pour les interventions dentaires chez les patients à haut risque (prothèses valvulaires, antécédent d'endocardite, certaines cardiopathies congénitales cyanogènes).",
    clinicalPearl: "L'accouchement n'est plus une indication d'antibioprophylaxie de l'endocardite !"
  },
  {
    id: 'q-gros-12',
    courseId: 'crs-grossesse',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel paramètre hémodynamique augmente significativement en postpartum immédiat ?",
    options: [
      "a) Les résistances vasculaires systémiques",
      "b) La fréquence cardiaque",
      "c) La post-charge",
      "d) La précharge",
      "e) La pression artérielle pulmonaire"
    ],
    correctAnswers: [3],
    explanation: "En postpartum immédiat, la levée de la compression cave et la rétraction utérine entraînent une \"autotransfusion\" massive, augmentant brutalement la précharge de près de 80%.",
    clinicalPearl: "Post-partum immédiat : Risque majeur d'OAP par augmentation brutale de la précharge (+80%)."
  },
  {
    id: 'q-gros-13',
    courseId: 'crs-grossesse',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de première intention de l'HTA modérée durant la grossesse est :",
    options: [
      "a) Un inhibiteur calcique",
      "b) Un diurétique thiazidique",
      "c) Un IEC",
      "d) La méthyldopa ou le labétalol",
      "e) Un ARA II"
    ],
    correctAnswers: [3],
    explanation: "La méthyldopa et le labétalol sont les traitements de première intention les plus étudiés et validés pour l'HTA pendant la grossesse, avec un bon profil d'innocuité pour le fœtus.",
    clinicalPearl: "\"LABET-METHYLDOPA\" : Antihypertenseurs de première intention pendant la grossesse."
  },
  {
    id: 'q-gros-14',
    courseId: 'crs-grossesse',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente avec une communication interauriculaire (CIA) non opérée et sans HTAP est enceinte. Quel est son risque selon l'OMS ?",
    options: [
      "a) WHO I",
      "b) WHO II",
      "c) WHO III",
      "d) WHO IV",
      "e) Contre-indication"
    ],
    correctAnswers: [0],
    explanation: "Une CIA non compliquée (sans hypertension artérielle pulmonaire) est classée WHO I, avec un risque très faible de mortalité maternelle et une augmentation minime de la morbidité.",
    clinicalPearl: "CIA sans HTAP = Classe mOMS I (grossesse à très faible risque)."
  },
  {
    id: 'q-gros-15',
    courseId: 'crs-grossesse',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal risque fœtal lié à la prise d'Amiodarone pendant la grossesse ?",
    options: [
      "a) Agenésie des membres",
      "b) Hypothyroïdie fœtale",
      "c) Anomalies du SNC",
      "d) Hypoplasie pulmonaire",
      "e) Leucopénie"
    ],
    correctAnswers: [1],
    explanation: "L'amiodarone, riche en iode, traverse le placenta et peut entraîner une hypothyroïdie fœtale dans environ 9% des cas. Elle est réservée aux arythmies graves résistantes aux autres traitements.",
    clinicalPearl: "Amiodarone pendant la grossesse = Risque d'hypothyroïdie fœtale (surcharge iodée)."
  },
  {
    id: 'q-gros-16',
    courseId: 'crs-grossesse',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La compression aorto-cave en décubitus dorsal est maximale :",
    options: [
      "a) Au 1er trimestre",
      "b) Au 2ème trimestre",
      "c) Au 3ème trimestre",
      "d) Pendant le travail",
      "e) En postpartum"
    ],
    correctAnswers: [2],
    explanation: "La compression de la VCI et de l'aorte par l'utérus gravide est maximale au 3ème trimestre, pouvant réduire le débit cardiaque de 25-30%. La position en décubitus latéral gauche (DLG) lève cette compression.",
    clinicalPearl: "Compression aorto-cave maximale au 3e trimestre : Toujours installer la parturiente en décubitus latéral gauche."
  },
  {
    id: 'q-gros-17',
    courseId: 'crs-grossesse',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel biomarqueur est utile pour prédire un événement cardiovasculaire plus tard dans la grossesse si son taux est élevé à 20 SA ?",
    options: [
      "a) Troponine",
      "b) CRP",
      "c) NT-proBNP",
      "d) D-Dimères",
      "e) Créatinine"
    ],
    correctAnswers: [2],
    explanation: "Un taux de NT-proBNP > 128 pg/mL à 20 semaines d'aménorrhée est prédictif d'événements cardiovasculaires (comme l'insuffisance cardiaque) plus tard dans la grossesse.",
    clinicalPearl: "NT-proBNP > 128 pg/mL à 20 SA = Prédicteur majeur d'insuffisance cardiaque gravidique."
  },
  {
    id: 'q-gros-18',
    courseId: 'crs-grossesse',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'élément clé de la physiopathologie de la prééclampsie est :",
    options: [
      "a) Une hypervolémie",
      "b) Une vasodilatation généralisée",
      "c) Un dysfonctionnement endothélial secondaire à un défaut de placentation",
      "d) Une augmentation du débit cardiaque",
      "e) Une rétention hydrosodée isolée"
    ],
    correctAnswers: [2],
    explanation: "Le point de départ est un défaut d'invasion du trophoblaste, entraînant une hypoperfusion placentaire et la libération de facteurs qui provoquent un dysfonctionnement endothélial généralisé, menant à l'HTA et à la protéinurie.",
    clinicalPearl: "Défaut d'invasion trophoblastique → Ischémie placentaire → Dysfonction endothéliale diffuse."
  },
  {
    id: 'q-gros-19',
    courseId: 'crs-grossesse',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour une patiente avec une dissection aortique antérieure, quel mode d'accouchement est à privilégier ?",
    options: [
      "a) Accouchement voie basse avec péridurale",
      "b) Accouchement voie basse sans péridurale",
      "c) Césarienne",
      "d) Accouchement dans l'eau",
      "e) Utilisation de forceps"
    ],
    correctAnswers: [2],
    explanation: "En cas d'antécédent de dissection aortique ou de diamètre aortique > 45 mm, la césarienne est recommandée pour éviter les pics hypertensifs et les poussées du travail, qui majorent le risque de récidive de dissection.",
    clinicalPearl: "Aorte > 45 mm ou antécédent de dissection = Césarienne programmée obligatoire."
  },
  {
    id: 'q-gros-20',
    courseId: 'crs-grossesse',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament utilisé dans l'insuffisance cardiaque est contre-indiqué pendant la grossesse mais peut être utilisé pendant l'allaitement ?",
    options: [
      "a) Ivabradine",
      "b) Spironolactone",
      "c) Énalapril (IEC)",
      "d) Valsartan (ARA II)",
      "e) Sacubitril/Valsartan (ARNI)"
    ],
    correctAnswers: [1],
    explanation: "La spironolactone est déconseillée pendant la grossesse (risque de féminisation des fœtus mâles) mais est compatible avec l'allaitement. Les IEC, ARA II et ARNI sont contre-indiqués pendant la grossesse et l'allaitement.",
    clinicalPearl: "Spironolactone : contre-indiquée pendant la grossesse (anti-androgénique), autorisée pendant l'allaitement."
  },
  {
    id: 'q-gros-21',
    courseId: 'crs-grossesse',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale cause de mortalité maternelle dans la cardiomyopathie du péripartum est :",
    options: [
      "a) L'embolie pulmonaire",
      "b) L'arrêt cardiaque réfractaire par dysfonction VG",
      "c) L'AVC hémorragique",
      "d) Le choc septique",
      "e) L'hémorragie de la délivrance"
    ],
    correctAnswers: [1],
    explanation: "La défaillance ventriculaire gauche sévère et les troubles du rythme qui en découlent sont les principales causes de décès dans la CMPP.",
    clinicalPearl: "Mortalité CMPP : défaillance VG réfractaire et mort subite rythmique."
  },
  {
    id: 'q-gros-22',
    courseId: 'crs-grossesse',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le facteur de risque le plus important pour un événement cardiaque durant la grossesse ?",
    options: [
      "a) Âge maternel > 35 ans",
      "b) Obésité",
      "c) Antécédent d'événement cardiaque (IC, AVC, arythmie)",
      "d) Grossesse gémellaire",
      "e) Tabagisme"
    ],
    correctAnswers: [2],
    explanation: "L'antécédent d'événement cardiaque est un des prédicteurs les plus forts d'un nouvel événement pendant la grossesse, devant les facteurs obstétricaux ou liés au mode de vie.",
    clinicalPearl: "Le meilleur prédicteur de risque cardiaque gravidique = Antécédent d'événement cardiaque."
  },
  {
    id: 'q-gros-23',
    courseId: 'crs-grossesse',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le syndrome de HELLP, quel élément biologique n'est pas caractéristique ?",
    options: [
      "a) Hémolyse",
      "b) Thrombopénie",
      "c) Élévation des transaminases",
      "d) Hypofibrinogénémie",
      "e) Élévation des LDH"
    ],
    correctAnswers: [3],
    explanation: "Le syndrome HELLP associe Hémolyse (LDH ↑), Élévation des Enzymes hépatiques (ASAT, ALAT) et Low Platelets (Thrombopénie). L'hypofibrinogénémie n'est pas caractéristique et évoquerait plutôt une CIVD.",
    clinicalPearl: "HELLP : Hemolysis + Elevated Liver enzymes + Low Platelets (sans hypofibrinogénémie initiale)."
  },
  {
    id: 'q-gros-24',
    courseId: 'crs-grossesse',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour une patiente avec une valve mécanique enceinte, quelle surveillance est cruciale sous HBPM ?",
    options: [
      "a) INR hebdomadaire",
      "b) TCA hebdomadaire",
      "c) Dosage de l'anti-Xa hebdomadaire",
      "d) Numération plaquettaire mensuelle",
      "e) Créatininémie trimestrielle"
    ],
    correctAnswers: [2],
    explanation: "Sous HBPM, la surveillance du taux d'anti-Xa (3-4 heures après l'injection) est essentielle pour s'assurer de l'efficacité anticoagulante et ajuster la posologie, le poids de la patiente variant rapidement.",
    clinicalPearl: "Valve mécanique sous HBPM : Contrôle hebdomadaire strict de l'activité anti-Xa (pic à 4h : 0.8-1.2 UI/mL)."
  },
  {
    id: 'q-gros-25',
    courseId: 'crs-grossesse',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La recommandation 2025 de l'ESC concernant l'Hypertension Artérielle Pulmonaire (HTAP) est :",
    options: [
      "a) La grossesse est formellement contre-indiquée",
      "b) L'HTAP n'est plus une contre-indication absolue, mais le risque reste très élevé (WHO IV)",
      "c) L'HTAP est classée WHO I",
      "d) Le traitement de l'HTAP est le même que chez la femme non enceinte",
      "e) L'accouchement par voie basse est toujours recommandé"
    ],
    correctAnswers: [1],
    explanation: "Une nouveauté des recommandations 2025 est de ne plus considérer l'HTAP comme une contre-indication absolue, mais elle reste en classe WHO IV (risque de mortalité maternelle extrêmement élevé). Une grossesse nécessite une discussion approfondie et une prise en charge ultra-spécialisée.",
    clinicalPearl: "Recommandations ESC : HTAP = Risque WHO IV très élevé (grossesse hautement déconseillée)."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-gros-01',
    courseId: 'crs-grossesse',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Projet de Grossesse et Cardiopathie Congénitale\nMme A., 28 ans, porteuse d'une tétralogie de Fallot corrigée dans l'enfance, souhaite avoir un enfant. Elle est asymptomatique (NYHA I). L'échocardiographie montre une fonction VG normale, une FEVG à 55%, et une fuite pulmonaire modérée sans dilatation majeure du VD.\nQ1. Selon la classification mOMS, quel est son risque ?",
    options: [
      "a) WHO I",
      "b) WHO II",
      "c) WHO II-III",
      "d) WHO III",
      "e) WHO IV"
    ],
    correctAnswers: [1],
    explanation: "Une tétralogie de Fallot opérée sans complication résiduelle majeure est généralement classée en WHO II (légère augmentation du risque). La présence d'une fuite pulmonaire modérée et d'une possible dysfonction VD subtile justifie ce classement et une surveillance.",
    clinicalPearl: "Tétralogie de Fallot réparée = Risque mOMS II (grossesse autorisée avec surveillance)."
  },
  {
    id: 'cas-gros-02',
    courseId: 'crs-grossesse',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : Urgence Hypertensive du 3ème Trimestre\nMme B., 34 ans, primigeste à 35 SA, est admise pour céphalées et troubles visuels. PA à 170/110 mmHg. Proteinurie dipstick à ++. Le bilan montre des plaquettes à 90 000/mm³, ASAT/ALAT à 3N, LDH élevées.\nQ1. Quel est le diagnostic le plus probable ?",
    options: [
      "a) HTA gravidique isolée",
      "b) Prééclampsie sévère",
      "c) Syndrome de HELLP",
      "d) Éclampsie",
      "e) HTA chronique"
    ],
    correctAnswers: [2],
    explanation: "L'association d'une HTA sévère, de symptômes neurologiques, d'une thrombopénie < 100 000 et d'une cytolyse hépatique est très évocatrice d'un syndrome de HELLP, forme grave de prééclampsie. L'éclampsie impliquerait des convulsions.",
    clinicalPearl: "HTA + Plaquettes < 100 000 + Transaminases élevées = Syndrome de HELLP (extraction fœtale urgente)."
  },
  {
    id: 'cas-gros-03',
    courseId: 'crs-grossesse',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Palpitations et Grossesse\nMme C., 31 ans, à 28 SA, consulte pour des palpitations rapides. L'ECG montre une tachycardie régulière à 160 bpm, complexes fins. Elle est stable sur le plan hémodynamique.\nQ1. Quelle est la manoeuvre de première intention pour tenter de réduire cette tachycardie ?",
    options: [
      "a) Injection IV d'Amiodarone",
      "b) Massage sinusal carotidien",
      "c) Choc électrique externe synchronisé",
      "d) Injection IV de Digoxine",
      "e) Injection IV de Vérapamil"
    ],
    correctAnswers: [1],
    explanation: "En l'absence d'instabilité hémodynamique, les manoeuvres vagales (comme le massage sinusal carotidien) sont le traitement de première intention pour une tachycardie supra-ventriculaire présumée. Elles sont non invasives et souvent efficaces.",
    clinicalPearl: "Tachycardie supra-ventriculaire bien tolérée chez la femme enceinte = Manœuvres vagales en première ligne."
  },
  {
    id: 'cas-gros-04',
    courseId: 'crs-grossesse',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Dyspnée du Post-Partum\nMme D., 25 ans, 3 semaines après un accouchement par voie basse sans histoire, présente une dyspnée d'aggravation progressive, des œdèmes des membres inférieurs et une orthopnée. L'échocardiographie révèle une FEVG à 35%.\nQ1. Quel est le diagnostic le plus probable ?",
    options: [
      "a) Embolie pulmonaire",
      "b) Cardiomyopathie du péripartum (CMPP)",
      "c) Myocardite virale",
      "d) Décompensation d'une cardiopathie congénitale méconnue",
      "e) Syndrome de détresse respiratoire aiguë"
    ],
    correctAnswers: [1],
    explanation: "La survenue d'une insuffisance cardiaque avec dysfonction VG dans les 5 mois suivant l'accouchement, en l'absence de cause identifiable, est typique de la CMPP. Le contexte et l'échocardiographie sont clés.",
    clinicalPearl: "Dyspnée + FEVG < 45% dans les semaines suivant l'accouchement = CMPP."
  },
  {
    id: 'cas-gros-05',
    courseId: 'crs-grossesse',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Valvulopathie et Grossesse\nMme E., 30 ans, porteuse d'une bioprothèse mitrale posée 3 ans auparavant pour un rhumatisme articulaire aigu, est enceinte de 12 SA. Elle est asymptomatique. L'échocardiographie de contrôle montre un gradient moyen normal sur la bioprothèse.\nQ1. Quelle est la principale préoccupation concernant sa bioprothèse pendant la grossesse ?",
    options: [
      "a) Risque hémorragique sous AVK",
      "b) Risque de dégénérescence structurale accélérée",
      "c) Risque thrombotique nécessitant des AVK",
      "d) Risque d'endocardite imposant une antibioprophylaxie per-accouchement",
      "e) Risque de rupture"
    ],
    correctAnswers: [1],
    explanation: "Les changements hémodynamiques (débit cardiaque ↑, FC ↑) et hormonaux de la grossesse peuvent accélérer la dégénérescence des bioprothèses (sténose ou fuite). Une surveillance échocardiographique rapprochée est indispensable.",
    clinicalPearl: "Bioprothèse et grossesse : Surveillance échographique car la dégénérescence est accélérée."
  }
];
