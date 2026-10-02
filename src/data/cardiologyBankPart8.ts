import { Course, Question } from '../types/medical';

export const CARDIOLOGY_COURSES_PART8: Course[] = [
  {
    id: 'crs-tvp',
    moduleId: 'mod-cardio',
    title: 'Thrombose Veineuse Profonde (TVP)',
    orderIndex: 21,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-choc-oap',
    moduleId: 'mod-cardio',
    title: 'Choc Cardiogénique & Œdème Aigu du Poumon (OAP)',
    orderIndex: 22,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-syncope',
    moduleId: 'mod-cardio',
    title: "Syncopes & Pertes de Connaissance d'Origine Cardiovasculaire",
    orderIndex: 23,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-acr',
    moduleId: 'mod-cardio',
    title: 'Arrêt Cardio-Respiratoire (ACR) & Réanimation Cardiopulmonaire',
    orderIndex: 24,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
];

export const CARDIOLOGY_QUESTIONS_PART8: Question[] = [
  // ==========================================
  // THROMBOSE VEINEUSE PROFONDE (crs-tvp)
  // ==========================================
  {
    id: 'q-tvp-01',
    courseId: 'crs-tvp',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie non invasif constitue la méthode de confirmation de référence en première ligne devant une suspicion de thrombose veineuse profonde (TVP) des membres inférieurs ?",
    options: [
      "Écho-Doppler veineux des membres inférieurs avec manœuvre de compression veineuse",
      "Phlébographie rétrograde iodée",
      "Radiographie osseuse du membre inférieur",
      "Scanner abdominal sans produit de contraste",
      "Capillaroscopie unguéale"
    ],
    correctAnswers: [0],
    explanation: "L'écho-Doppler veineux avec critère d'incompressibilité veineuse directe (perte de la compressibilité veineuse par la sonde d'échographie) est l'examen diagnostique de référence, présentant une sensibilité et spécificité > 95% pour les TVP proximales.",
    clinicalPearl: "Diagnostic de certitude TVP = Écho-Doppler veineux (signe direct : incompressibilité de la veine sous la sonde)."
  },
  {
    id: 'q-tvp-02',
    courseId: 'crs-tvp',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le traitement curatif d'une thrombose veineuse profonde non compliquée chez un adulte sans insuffisance rénale sévère, quelle classe médicamenteuse est actuellement recommandée en première intention ?",
    options: [
      "Anticoagulants oraux directs (AOD : Rivaroxaban, Apixaban)",
      "Aspirine à faible dose",
      "Thrombolyse systémique par rt-PA",
      "Héparine non fractionnée en perfusion continue isolée sans relais",
      "Anti-inflammatoires stéroïdiens"
    ],
    correctAnswers: [0],
    explanation: "Les AOD (Rivaroxaban ou Apixaban en monopilule d'emblée sans nécessité de pontage par héparine) sont recommandés en première ligne par rapport aux AVK en raison de leur efficacité équivalente, d'un risque hémorragique cérébral moindre et de l'absence de monitoring de l'INR.",
    clinicalPearl: "Traitement de 1ère intention de la TVP = AOD (Rivaroxaban ou Apixaban) sans héparine initiale obligatoire."
  },
  {
    id: 'cas-tvp-01',
    courseId: 'crs-tvp',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Mollet gonflé et douloureux après un long voyage aérien\nUne femme de 32 ans sous contraception œstroprogestative consulte 48h après un vol transatlantique de 11 heures pour une douleur intense du mollet gauche. À l'examen : mollet gauche augmenté de volume (+3.5 cm par rapport au droit), chaud, avec signe de Homans positif (douleur à la dorsiflexion passive du pied) et dilatation des veines superficielles. L'écho-Doppler veineux retrouve une thrombose veineuse fémoro-poplitée gauche occlusive.\nQuelles sont les mesures thérapeutiques immédiates indispensables ?",
    options: [
      "Arrêt immédiat de la pilule œstroprogestative, mise sous AOD curatif et port d'une compression veineuse médicale (bas classe 3)",
      "Alitement strict avec plâtre cruro-pédieux pendant 1 mois",
      "Prescription d'antibiotiques pour érysipèle",
      "Pose immédiate d'un filtre cave sans anticoagulant",
      "Aspirine per os sans bas de contention"
    ],
    correctAnswers: [0],
    explanation: "La prise en charge associe : 1) anticoagulation curative précoce (AOD), 2) arrêt du facteur déclenchant (contraception hormonale œstrogénique), 3) compression médicale élastique de classe 3 (ou 2) pour prévenir le syndrome post-thrombotique, et 4) lever précoce dès que le traitement anticoagulant est efficace.",
    clinicalPearl: "TVP du membre inférieur : AOD + Bas de contention précoce + Lever dès que sous anticoagulant (plus d'alitement strict !)."
  },

  // ==========================================
  // CHOC CARDIOGENIQUE & OAP (crs-choc-oap)
  // ==========================================
  {
    id: 'q-choc-01',
    courseId: 'crs-choc-oap',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le tableau hémodynamique caractéristique du choc cardiogénique gauche au cathétérisme droit de Swan-Ganz ?",
    options: [
      "Index cardiaque (IC) effondré (< 2.2 L/min/m²), Pression artérielle pulmonaire d'occlusion (PAPO) élevée (> 15-18 mmHg) et Résistances vasculaires systémiques (RVS) élevées",
      "Index cardiaque très élevé (> 4 L/min/m²) et RVS effondrées",
      "PAPO basse (< 5 mmHg) avec index cardiaque normal",
      "Pression veineuse centrale basse avec PAPO normale",
      "Absence d'acidose lactique"
    ],
    correctAnswers: [0],
    explanation: "Le choc cardiogénique est une défaillance de la pompe ventriculaire gauche caractérisée par une chute sévère du débit (Index cardiaque < 2.2 L/min/m²), une congestion d'amont (PAPO > 15-18 mmHg) et une vasoconstriction réflexe adaptative (RVS élevées).",
    clinicalPearl: "Choc cardiogénique = Pompe défaillante : Index cardiaque bas + PAPO élevée + RVS élevées."
  },
  {
    id: 'q-choc-02',
    courseId: 'crs-choc-oap',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle amine sympathomimétique inotrope positive est recommandée en première intention pour soutenir la contractilité myocardique dans le choc cardiogénique avec bas débit persistant ?",
    options: [
      "Dobutamine (agoniste bêta-1 prédominant)",
      "Propranolol",
      "Atropine",
      "Adrénaline en aérosol",
      "Furosémide à très forte dose en bolus isolé"
    ],
    correctAnswers: [0],
    explanation: "La Dobutamine est l'inodilatateur de choix pour améliorer le volume d'éjection systolique par stimulation des récepteurs bêta-1 adrénergiques myocardiques. En cas d'hypotension artérielle sévère associée, la Noradrénaline est combinée pour restaurer la pression de perfusion d'organe.",
    clinicalPearl: "Choc cardiogénique : Dobutamine (inotrope) + Noradrénaline (vasopresseur si PAS effondrée)."
  },
  {
    id: 'cas-choc-01',
    courseId: 'crs-choc-oap',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Défaillance cardiaque aiguë et état de choc post-infarctus\nUn homme de 66 ans fait un infarctus antérieur étendu revascularisé tardivement à H12. À H24 de l'hospitalisation : il devient confus, oligurique (diurèse < 15 mL/h), marbré aux genoux et couvert de sueurs froides. La PA est à 75/45 mmHg, FC 120/min, SaO2 86% sous masque. L'auscultation retrouve un galop protodiastolique B3 et des râles crépitants pulmonaires bilatéraux remontant aux sommets. Lactates artériels à 5.2 mmol/L.\nQuelle prise en charge de réanimation en soins intensifs de cardiologie s'impose ?",
    options: [
      "Oxygénothérapie/VNI ou intubation, perfusion continue de Noradrénaline et Dobutamine, diurétiques de l'anse prudents et discussion d'une assistance circulatoire mécanique (ECMO/Impella)",
      "Remplissage massif par 3 litres de sérum physiologique en 1 heure",
      "Mise sous bêtabloquants intraveineux à dose maximale",
      "Sortie d'USIC vers le domicile sous aspirine",
      "Ponction lombaire immédiate"
    ],
    correctAnswers: [0],
    explanation: "Ce tableau réunit tous les critères diagnostiques du choc cardiogénique sévère (hypoperfusion tissulaire, marbrures, oligurie, lactates élevés, œdème pulmonaire aigu). La réanimation nécessite support hémodynamique vasoactif combiné (Noradrénaline + Dobutamine), assistance ventilatoire et évaluation précoce d'une assistance mécanique temporaire (Impella ou ECMO VA).",
    clinicalPearl: "Choc cardiogénique réfractaire = Inotropes/Vasopresseurs + Évaluer l'assistance circulatoire mécanique précoce (Impella/ECMO)."
  },

  // ==========================================
  // SYNCOPE CARDIOVASCULAIRE (crs-syncope)
  // ==========================================
  {
    id: 'q-syncope-01',
    courseId: 'crs-syncope',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les étiologies de syncope suivantes, laquelle présente le pronostic le plus sombre et impose une hospitalisation d'urgence systématique ?",
    options: [
      "Syncope cardiaque (trouble du rythme ventriculaire, BAV complet, rétrécissement aortique serré)",
      "Syncope vasovagale typique avec prodromes chez un sujet jeune",
      "Syncope situationnelle mictionnelle",
      "Hypotension orthostatique iatrogène médicamenteuse",
      "Syndrome du sinus carotidien pur"
    ],
    correctAnswers: [0],
    explanation: "Les syncopes d'origine cardiaque (mécanique obstructive ou rythmique) sont associées à un taux élevé de mortalité précoce et de mort subite (jusqu'à 30% à 1 an), justifiant une hospitalisation immédiate pour bilan étiologique urgent (ECG, Holter, ETT, coronarographie).",
    clinicalPearl: "Syncope à l'emporte-pièce sans prodrome ou à l'effort = Alerte rouge cardiaque (risque de mort subite) !"
  },
  {
    id: 'q-syncope-02',
    courseId: 'crs-syncope',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie du tracé ECG systématique chez un patient ayant syncopé évoque un syndrome de Brugada de type 1 à très haut risque de fibrillation ventriculaire ?",
    options: [
      "Élévation convexe du segment ST 'en dôme' >= 2 mm suivie d'ondes T négatives dans les dérivations précordiales droites (V1-V2)",
      "Sous-décalage diffus du ST avec miroir",
      "Allongement isolé de l'intervalle PR à 220 ms",
      "Microvoltage périphérique sans sus-décalage",
      "Bloc de branche gauche isolé sans trouble de repolarisation"
    ],
    correctAnswers: [0],
    explanation: "L'aspect de Brugada type 1 associe un sus-décalage ST en 'ailes d'ange' ou 'dôme' (coved-type) >= 2 mm en V1-V2 suivi d'une onde T négative, signant une canalopathie sodique à risque de syncope par torsade de pointe ou FV.",
    clinicalPearl: "Brugada Type 1 = Sus-décalage ST >= 2 mm en dôme en V1-V2 + Ondes T négatives."
  },
  {
    id: 'cas-syncope-01',
    courseId: 'crs-syncope',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Perte de connaissance brutale à table chez une femme de 74 ans\nUne femme de 74 ans s'effondre brutalement de sa chaise en plein repas familial, sans aucun prodrome ni avertissement. La perte de connaissance dure 20 secondes avec pâleur cadavérique suivie d'une reprise de conscience spontanée et lucide immédiate avec rougeur du visage (flush). L'examen neurologique est strictement normal. L'ECG de repos montre un bloc de branche droit complet associé à un hémibloc antérieur gauche (bibloc).\nQuel est le diagnostic le plus probable et l'indication thérapeutique urgente ?",
    options: [
      "Syndrome d'Adams-Stokes par BAV paroxystique complet infranodal / Pose d'un stimulateur cardiaque (pacemaker)",
      "Crise comitiale généralisée / Traitement anti-épileptique au long cours",
      "Accident ischémique transitoire vertébro-basilaire / Aspirine seule",
      "Syncope vasovagale banale / Rassurer sans examen",
      "Malaise hypoglycémique / Perfusion de sérum glucosé"
    ],
    correctAnswers: [0],
    explanation: "La syncope d'Adams-Stokes est une perte de connaissance brève, brutale, traumatisante, avec pâleur puis bouffée vasomotrice au réveil, causée par une pause ventriculaire prolongée sur BAV paroxystique. Le bibloc préexistant confirme l'atteinte avancée des voies de conduction et impose l'implantation urgente d'un stimulateur cardiaque définitif.",
    clinicalPearl: "Syncope brutale sans prodrome + Bibloc à l'ECG = BAV paroxystique complet (Adams-Stokes) → Pacemaker urgent."
  },

  // ==========================================
  // ARRET CARDIO-RESPIRATOIRE (crs-acr)
  // ==========================================
  {
    id: 'q-acr-01',
    courseId: 'crs-acr',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quels sont les deux rythmes cardiaques qualifiés de 'DÉFIBRILLABLES' lors de la réanimation cardiopulmonaire médicalisée (ACLS/ERC) ?",
    options: [
      "La Fibrillation Ventriculaire (FV) et la Tachycardie Ventriculaire (TV) sans pouls",
      "L'Asystolie et l'Activité Électrique Sans Pouls (AESP)",
      "La Fibrillation Atriale rapide et le Flutter auriculaire",
      "Le BAV complet et le rythme idioventriculaire lent",
      "La tachycardie sinusale à 160/min et les extrasystoles ventriculaires"
    ],
    correctAnswers: [0],
    explanation: "L'algorithme de réanimation cardiopulmonaire sépare strictement : 1) les rythmes défibrillables (FV et TV sans pouls) où le choc électrique précoce est la priorité absolue, et 2) les rythmes non défibrillables (Asystolie et AESP) où le massage cardiaque et l'adrénaline prédominent.",
    clinicalPearl: "Rythmes défibrillables = FV et TV sans pouls. Rythmes non défibrillables = Asystolie et Dissociation (AESP)."
  },
  {
    id: 'q-acr-02',
    courseId: 'crs-acr',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le rythme et la profondeur recommandés pour les compressions thoraciques externes chez l'adulte en arrêt cardiaque ?",
    options: [
      "Fréquence de 100 à 120 compressions par minute, profondeur de 5 à 6 cm, avec relâchement complet de la cage thoracique",
      "Fréquence de 60 compressions/min, profondeur de 2 cm",
      "Fréquence de 150 compressions/min sans interruption ventilatoire",
      "Fréquence de 80 compressions/min avec enfoncement de 8 cm",
      "Compressions légères uniquement sur la région précordiale gauche"
    ],
    correctAnswers: [0],
    explanation: "Les recommandations internationales préconisent : une fréquence de 100 à 120 cpm, un enfoncement de 5 cm (sans dépasser 6 cm) sur la moitié inférieure du sternum, un temps égal de compression/décompression, et un relâchement thoracique complet sans lever les mains.",
    clinicalPearl: "Massage de qualité : 100-120/min + Profondeur 5-6 cm + Relâchement complet + Ratio 30:2."
  },
  {
    id: 'cas-acr-01',
    courseId: 'crs-acr',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Arrêt cardiaque devant témoin dans la salle d'attente\nUn patient de 55 ans venu consulter pour douleur thoracique s'effondre sous vos yeux. Il est inconscient et ne respire plus (respiration agonique en 'gasp'). Le défibrillateur semi-automatique (DAE) branché en moins de 30 secondes annonce : 'Choc conseillé'. Vous administrez le choc électrique.\nQuelle est votre action immédiate dans la seconde qui suit la délivrance du choc ?",
    options: [
      "Reprendre immédiatement le massage cardiaque externe (30 compressions) sans vérifier le pouls ni le tracé",
      "Prendre le pouls fémoral pendant 30 secondes pour vérifier si le cœur est reparti",
      "Administrer immédiatement un bolus d'atropine",
      "Regarder l'écran du moniteur pour analyser le rythme avant de masser",
      "Réaliser une trachéotomie d'urgence"
    ],
    correctAnswers: [0],
    explanation: "Immédiatement après la délivrance du choc électrique, il ne faut jamais interrompre la réanimation pour chercher un pouls : le massage cardiaque doit être repris sans délai pendant un cycle complet de 2 minutes (30:2) avant la réévaluation suivante du rythme par l'appareil.",
    clinicalPearl: "Règle vitale ACLS : Après un choc électrique, masser immédiatement pendant 2 minutes sans chercher le pouls !"
  }
];
