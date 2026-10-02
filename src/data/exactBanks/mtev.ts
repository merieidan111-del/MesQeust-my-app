import { Question } from '../../types/medical';

export const MTEV_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs from PDF
  {
    id: 'q-mtev-01',
    courseId: 'crs-tvp',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La triade de Virchow qui explique la physiopathologie de la thrombose veineuse profonde (TVP) associe :",
    options: [
      "A) Hypercoagulabilité, lésion endothéliale, stase veineuse.",
      "B) Hypoxie, acidose, inflammation.",
      "C) Hyperviscosité sanguine, anémie, thrombocytose.",
      "D) Vasoconstriction, nécrose, fibrose.",
      "E) Arythmie, hypertension, hyperlipidémie."
    ],
    correctAnswers: [0],
    explanation: "La triade de Virchow est un concept fondamental regroupant trois éléments : stase veineuse, lésion de la paroi vasculaire et état d'hypercoagulabilité. C'est la base physiopathologique de la formation du thrombus.",
    clinicalPearl: "Triade de Virchow : \"SAL\" = Stase veineuse + Altération endothéliale + Lésion de l'hémostase (hypercoagulabilité)."
  },
  {
    id: 'q-mtev-02',
    courseId: 'crs-tvp',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe clinique le plus fréquent d'une TVP des membres inférieurs ?",
    options: [
      "A) Œdème blanc et douloureux.",
      "B) Cyanose du membre.",
      "C) Douleur spontanée du mollet.",
      "D) Augmentation du diamètre de la veine saphène.",
      "E) Pouls périphérique absent."
    ],
    correctAnswers: [2],
    explanation: "La douleur spontanée est le signe d'appel le plus fréquent (60%), liée à la réaction inflammatoire pariétale et à la stase veineuse. Les autres signes manquent de sensibilité et de spécificité.",
    clinicalPearl: "Signe clinique le plus fréquent de la TVP = Douleur spontanée du mollet (60% des cas)."
  },
  {
    id: 'q-mtev-03',
    courseId: 'crs-tvp',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le score de Wells pour la TVP, lequel de ces éléments fait baisser le score de probabilité ?",
    options: [
      "A) Œdème unilatéral de la jambe.",
      "B) Antécédent personnel de TVP.",
      "C) Présence d'un cancer actif.",
      "D) Douleur à la palpation du trajet veineux.",
      "E) Un autre diagnostic aussi probable que la TVP."
    ],
    correctAnswers: [4],
    explanation: "L'attribution de -2 points pour \"Autres diagnostics aussi probables qu'une TVP\" permet de nuancer le score et d'éviter les faux positifs en intégrant le raisonnement différentiel.",
    clinicalPearl: "Score de Wells TVP : -2 points si un autre diagnostic alternatif est au moins aussi probable."
  },
  {
    id: 'q-mtev-04',
    courseId: 'crs-tvp',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant le dosage des D-dimères dans le diagnostic de TVP :",
    options: [
      "A) Un taux normal permet d'exclure une TVP avec une forte valeur prédictive négative.",
      "B) Un taux élevé confirme le diagnostic de TVP.",
      "C) Sa spécificité est excellente chez le sujet âgé.",
      "D) Il est inutile en cas de score de Wells élevé.",
      "E) Son taux est indépendant de tout état inflammatoire."
    ],
    correctAnswers: [0],
    explanation: "Un taux de D-dimères normal a une excellente valeur prédictive négative, rendant une TVP très improbable. Un taux élevé manque de spécificité car il peut être lié à de nombreuses autres conditions (âge, cancer, inflammation).",
    clinicalPearl: "D-dimères négatifs = Élimine formellement la maladie thromboembolique chez le patient à faible probabilité."
  },
  {
    id: 'q-mtev-05',
    courseId: 'crs-tvp',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'examen de référence pour le diagnostic positif d'une TVP est :",
    options: [
      "A) Le dosage des D-dimères.",
      "B) La phlébographie.",
      "C) L'écho-Doppler veineux.",
      "D) L'IRM veineuse.",
      "E) Le scanner veineux."
    ],
    correctAnswers: [2],
    explanation: "L'écho-Doppler veineux est non invasif, accessible et permet de visualiser directement le thrombus et d'évaluer la compressibilité de la veine et le flux sanguin.",
    clinicalPearl: "Critère de référence à l'écho-Doppler veineux : Incompressibilité de la veine sous la sonde."
  },
  {
    id: 'q-mtev-06',
    courseId: 'crs-tvp',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une TVP est dite \"idiopathique\" ou \"non provoquée\" lorsque :",
    options: [
      "A) Elle survient chez un patient de plus de 60 ans.",
      "B) Elle est associée à un taux de facteur VIII élevé.",
      "C) Elle survient en l'absence de facteur déclenchant transitoire identifiable.",
      "D) Elle est distale et non occlusive.",
      "E) Le bilan de thrombophilie est négatif."
    ],
    correctAnswers: [2],
    explanation: "Le caractère \"non provoqué\" est défini par l'absence de facteur déclenchant majeur (chirurgie, traumatisme, immobilisation récente). Cela justifie un bilan étiologique plus poussé.",
    clinicalPearl: "TVP non provoquée = Absence de facteur transitoire chirurgical/médical → Durée de traitement prolongée."
  },
  {
    id: 'q-mtev-07',
    courseId: 'crs-tvp',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les facteurs suivants, lequel est un facteur de risque permanent de MTEV ?",
    options: [
      "A) Immobilisation plâtrée.",
      "B) Voyage prolongé en avion.",
      "C) Traitement hormonal substitutif.",
      "D) Syndrome des antiphospholipides.",
      "E) Chirurgie récente."
    ],
    correctAnswers: [3],
    explanation: "Le syndrome des antiphospholipides est une thrombophilie acquise, donc un facteur de risque permanent. Les autres options (A, B, C, E) sont des facteurs temporaires.",
    clinicalPearl: "Facteurs permanents de MTEV : SAPL, déficit constitutionnel en antithrombine, cancer actif."
  },
  {
    id: 'q-mtev-08',
    courseId: 'crs-tvp',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement anticoagulant initial d'une TVP proximale fait le plus souvent appel :",
    options: [
      "A) Aux Anti-Vitamines K (AVK) seuls.",
      "B) A l'aspirine à dose anti-agrégante.",
      "C) Aux Héparines de Bas Poids Moléculaire (HBPM) ou aux Anticoagulants Oraux Directs (AOD).",
      "D) A la thrombolyse systémique.",
      "E) Au fondaparinux en monothérapie."
    ],
    correctAnswers: [2],
    explanation: "Le traitement initial (ou \"en aigu\") repose sur une anticoagulation rapide, soit par HBPM, soit par AOD. Les AVK seuls ont un délai d'action trop long. La thrombolyse est réservée aux formes graves.",
    clinicalPearl: "Phase aiguë MTEV : AOD (Rivaroxaban / Apixaban) ou HBPM d'emblée."
  },
  {
    id: 'q-mtev-09',
    courseId: 'crs-tvp',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La durée minimale recommandée du traitement par compression élastique (classe 3) après une TVP est de :",
    options: [
      "A) 1 mois.",
      "B) 6 mois.",
      "C) 1 an.",
      "D) 2 ans.",
      "E) 5 ans."
    ],
    correctAnswers: [3],
    explanation: "La compression élastique (30-40 mmHg) est recommandée pour une durée minimale de 2 ans afin de prévenir le syndrome post-thrombotique, complication tardive majeure.",
    clinicalPearl: "Bas de contention classe 3 pendant 2 ans minimum pour prévenir le syndrome post-thrombotique."
  },
  {
    id: 'q-mtev-10',
    courseId: 'crs-tvp',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la stratification du risque de l'Embolie Pulmonaire (EP), un patient est classé \"haut risque\" en présence de :",
    options: [
      "A) Une tachycardie à 110 bpm.",
      "B) Une dyspnée sévère.",
      "C) Un choc ou une hypotension persistante (PAS < 90 mmHg).",
      "D) Une troponine élevée.",
      "E) Une dilatation du ventricule droit à l'échocardiographie."
    ],
    correctAnswers: [2],
    explanation: "Le critère hémodynamique (choc ou hypotension) définit à lui seul l'EP à haut risque, associée à une mortalité précoce très élevée. Les autres critères (B, D, E) définissent un risque intermédiaire.",
    clinicalPearl: "EP à haut risque = Présence d'un choc ou d'une hypotension persistante (PAS < 90 mmHg)."
  },
  {
    id: 'q-mtev-11',
    courseId: 'crs-tvp',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'examen de première intention pour confirmer une EP chez un patient stable est :",
    options: [
      "A) La scintigraphie de ventilation-perfusion.",
      "B) L'angiographie pulmonaire.",
      "C) L'angioscanner pulmonaire.",
      "D) L'échocardiographie transthoracique.",
      "E) La radiographie du thorax."
    ],
    correctAnswers: [2],
    explanation: "L'angioscanner pulmonaire multibarrette est l'examen de référence pour visualiser directement les thrombi dans les artères pulmonaires. Il est largement disponible et non invasif.",
    clinicalPearl: "Angioscanner thoracique = Examen de 1ère ligne pour confirmer l'embolie pulmonaire."
  },
  {
    id: 'q-mtev-12',
    courseId: 'crs-tvp',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La thrombolyse systémique dans l'EP est indiquée en première intention :",
    options: [
      "A) Dans toutes les EP diagnostiquées.",
      "B) En cas d'EP à haut risque (avec choc).",
      "C) En cas d'EP à risque intermédiaire avec dysfonction ventriculaire droite.",
      "D) En présence d'une contre-indication aux anticoagulants.",
      "E) Chez tout patient de moins de 65 ans."
    ],
    correctAnswers: [1],
    explanation: "La thrombolyse est un traitement de reperfusion réservé aux situations d'urgence vitale, c'est-à-dire l'EP à haut risque avec instabilité hémodynamique, où elle peut réduire la mortalité.",
    clinicalPearl: "Thrombolyse dans l'EP : \"CHOQ\" = CHOC hémodynamique (PAS < 90 mmHg ou arrêt cardiaque)."
  },
  {
    id: 'q-mtev-13',
    courseId: 'crs-tvp',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La mise en place d'un filtre cave est envisagée lorsqu'il existe :",
    options: [
      "A) Une TVP distale isolée.",
      "B) Une contre-indication temporaire ou définitive à l'anticoagulation ou récidive sous traitement bien conduit.",
      "C) Un premier épisode d'EP à faible risque.",
      "D) Un syndrome post-thrombotique sévère.",
      "E) Un souhait du patient."
    ],
    correctAnswers: [1],
    explanation: "Le filtre cave est une barrière mécanique pour empêcher la migration des caillots. Son indication principale est la prévention de la récidive embolique quand l'anticoagulation est contre-indiquée ou impossible.",
    clinicalPearl: "Filtre cave indiqué si contre-indication absolue ou récidive embolique prouvée sous anticoagulants bien conduits."
  },
  {
    id: 'q-mtev-14',
    courseId: 'crs-tvp',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome post-thrombotique est une complication tardive de la TVP caractérisée par :",
    options: [
      "A) Une récidive embolique précoce.",
      "B) Une hémorragie intracrânienne.",
      "C) Une insuffisance valvulaire veineuse, un œdème et des ulcères.",
      "D) Une transformation cancéreuse de la paroi veineuse.",
      "E) Une artérite oblitérante."
    ],
    correctAnswers: [2],
    explanation: "Le syndrome post-thrombotique résulte des séquelles de la TVP : obstruction résiduelle, destruction valvulaire et reflux veineux, conduisant à une insuffisance veineuse chronique (œdème, douleur, modifications cutanées, ulcère).",
    clinicalPearl: "Syndrome post-thrombotique = Insuffisance veineuse chronique post-phlébitique par destruction valvulaire."
  },
  {
    id: 'q-mtev-15',
    courseId: 'crs-tvp',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente une probabilité clinique faible de TVP selon le score de Wells. Le taux de D-dimères est normal. Quelle est la conduite à tenir ?",
    options: [
      "A) Réaliser un écho-Doppler veineux en urgence.",
      "B) Instaurer un traitement par HBPM.",
      "C) Écarter le diagnostic de TVP.",
      "D) Rechercher un cancer sous-jacent.",
      "E) Contrôler les D-dimères dans 48 heures."
    ],
    correctAnswers: [2],
    explanation: "L'association d'une probabilité clinique faible et d'un dosage de D-dimères normal a une valeur prédictive négative supérieure à 98%, permettant d'exclure une TVP sans avoir recours à d'autres examens.",
    clinicalPearl: "Probabilité faible + D-dimères négatifs = Arrêt des investigations, TVP exclue !"
  },
  {
    id: 'q-mtev-16',
    courseId: 'crs-tvp',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les médicaments suivants, lequel est un anticoagulant oral direct (AOD) inhibant le facteur Xa ?",
    options: [
      "A) Warfarine.",
      "B) Dabigatran.",
      "C) Acénocoumarol (Sintrom®).",
      "D) Apixaban.",
      "E) Héparine non fractionnée."
    ],
    correctAnswers: [3],
    explanation: "L'Apixaban, avec le Rivaroxaban et l'Edoxaban, est un AOD anti-Xa. Le Dabigatran est un anti-IIa (thrombine). Les autres sont des antivitamines K (A, C) ou des héparines (E).",
    clinicalPearl: "\"Xa = Xabans\" : Rivaroxaban, Apixaban, Edoxaban inhibent directement le facteur Xa."
  },
  {
    id: 'q-mtev-17',
    courseId: 'crs-tvp',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'élévation du BNP ou du NT-proBNP dans un contexte d'EP aiguë est un marqueur de :",
    options: [
      "A) Surcharge volémique gauche.",
      "B) Dysfonction ventriculaire droite.",
      "C) Insuffisance rénale aiguë.",
      "D) Lésion parenchymateuse pulmonaire.",
      "E) Ischémie mésentérique."
    ],
    correctAnswers: [1],
    explanation: "Le BNP est sécrété par le myocarde en réponse à une surcharge pariétale. Dans l'EP, l'hypertension artérielle pulmonaire et la dilatation du ventricule droit entraînent son élévation.",
    clinicalPearl: "BNP et Troponine élevés dans l'EP = Marqueurs de souffrance et de dysfonction du ventricule droit."
  },
  {
    id: 'q-mtev-18',
    courseId: 'crs-tvp',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication hémodynamique initiale la plus grave d'une EP massive est :",
    options: [
      "A) L'hypertension artérielle systémique.",
      "B) La bradycardie.",
      "C) La surcharge du ventricule gauche.",
      "D) La défaillance du ventricule droit.",
      "E) L'arythmie supra-ventriculaire."
    ],
    correctAnswers: [3],
    explanation: "L'obstruction artérielle pulmonaire entraîne une augmentation brutale de la post-charge du ventricule droit, conduisant à sa dilatation, son dysfonctionnement et, in fine, à une baisse du débit cardiaque et un choc.",
    clinicalPearl: "Mécanisme du décès dans l'EP massive = Cœur pulmonaire aigu et défaillance du ventricule droit."
  },
  {
    id: 'q-mtev-19',
    courseId: 'crs-tvp',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La prophylaxie de la MTEV en chirurgie de la hanche chez un patient sans risque hémorragique utilise typiquement :",
    options: [
      "A) Aspirine seule.",
      "B) HBPM à dose prophylactique intermédiaire.",
      "C) HBPM à dose prophylactique forte (ex: énoxaparine 4000 UI/24h) ou AOD.",
      "D) Compression élastique seule.",
      "E) Aucune prophylaxie."
    ],
    correctAnswers: [2],
    explanation: "La chirurgie orthopédique majeure (hanche, genou) est un risque thrombotique très élevé. La prophylaxie recommandée est une HBPM à dose forte (ex : énoxaparine 4000 UI/24h) ou un AOD préventif.",
    clinicalPearl: "Chirurgie orthopédique majeure = Risque thromboembolique très élevé nécessitant une HBPM à forte dose."
  },
  {
    id: 'q-mtev-20',
    courseId: 'crs-tvp',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe de Homans :",
    options: [
      "A) Est un signe très spécifique de la TVP.",
      "B) Correspond à une douleur provoquée par la dorsiflexion du pied.",
      "C) Est présent dans la majorité des TVP confirmées.",
      "D) Permet à lui seul d'affirmer le diagnostic.",
      "E) Est pathognomonique d'une rupture du kyste de Baker."
    ],
    correctAnswers: [1],
    explanation: "Le signe de Homans est une douleur à la dorsiflexion du pied. Cependant, il manque de sensibilité et de spécificité, pouvant être positif dans d'autres pathologies (ex : élongation musculaire).",
    clinicalPearl: "Signe de Homans = Douleur du mollet à la dorsiflexion passive du pied (inconstant et peu spécifique)."
  },
  {
    id: 'q-mtev-21',
    courseId: 'crs-tvp',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors d'une EP, l'hypoxémie observée est principalement due à :",
    options: [
      "A) Une hypercapnie.",
      "B) Un effet shunt et un effet espace mort.",
      "C) Une diminution de la diffusion alvéolo-capillaire.",
      "D) Une dépression centrale.",
      "E) Une alcalose métabolique."
    ],
    correctAnswers: [1],
    explanation: "L'hypoxémie résulte de deux mécanismes : l'effet \"shunt\" (perfusion de territoires non ventilés) et l'effet \"espace mort\" (ventilation de territoires non perfusés), perturbant les rapports ventilation/perfusion.",
    clinicalPearl: "Hypoxémie de l'EP : Discordance ventilation-perfusion (effet espace mort et shunt droit-gauche intracardiaque)."
  },
  {
    id: 'q-mtev-22',
    courseId: 'crs-tvp',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La recherche systématique d'un cancer devant une TVP idiopathique n'est pas recommandée chez :",
    options: [
      "A) Un patient de 35 ans sans autre facteur de risque.",
      "B) Un patient de 55 ans avec un bilan de thrombophilie négatif.",
      "C) Un patient de 70 ans.",
      "D) Un patient avec des antécédents familiaux de cancer du sein.",
      "E) Un patient présentant une altération de l'état général inexpliquée."
    ],
    correctAnswers: [0],
    explanation: "Un bilan extensif de recherche de cancer n'est pas systématiquement justifié chez les patients jeunes (<40-50 ans) sans point d'appel clinique, car le rapport bénéfice/risque (anxiété, examens invasifs) est moins favorable.",
    clinicalPearl: "TVP du sujet jeune : Privilégier le bilan de thrombophilie ; chez le sujet âgé : rechercher un cancer occulte."
  },
  {
    id: 'q-mtev-23',
    courseId: 'crs-tvp',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'anticoagulation par HBPM est préférée aux AVK dans le traitement de la MTEV associée à un cancer car :",
    options: [
      "A) Elle est plus efficace pour prévenir les récidives.",
      "B) Elle a un meilleur profil de sécurité (moins d'hémorragies).",
      "C) Elle ne nécessite pas de surveillance biologique.",
      "D) Elle est administrée par voie orale.",
      "E) Elle est moins coûteuse."
    ],
    correctAnswers: [0],
    explanation: "Les études (ex: CLOT) ont montré la supériorité des HBPM sur les AVK pour réduire le risque de récidive thrombotique chez les patients cancéreux, sans majoration du risque hémorragique.",
    clinicalPearl: "Cancer et MTEV : HBPM au long cours (ou AOD spécifiques) supérieures aux AVK."
  },
  {
    id: 'q-mtev-24',
    courseId: 'crs-tvp',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'échocardiographie transthoracique dans l'évaluation d'une EP :",
    options: [
      "A) Permet de visualiser directement l'embole dans toutes les artères distales.",
      "B) Est l'examen de référence pour le diagnostic positif.",
      "C) Est normale dans la majorité des EP.",
      "D) Évalue les conséquences hémodynamiques sur le ventricule droit (dilatation, hypokinésie).",
      "E) Remplace l'angioscanner en première intention."
    ],
    correctAnswers: [3],
    explanation: "L'échocardiographie ne visualise pas l'embole mais évalue ses conséquences : dilatation/hypokinésie du VD, hypertension artérielle pulmonaire. C'est un outil pronostique crucial, notamment pour identifier les EP à risque intermédiaire.",
    clinicalPearl: "Signe de McConnell à l'échocardiographie : Akinésie de la paroi libre du VD avec préservation de l'apex."
  },
  {
    id: 'q-mtev-25',
    courseId: 'crs-tvp',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement anticoagulant pour une TVP survenant dans un contexte post-opératoire (facteur transitoire) doit être poursuivi pendant :",
    options: [
      "A) 1 mois.",
      "B) 3 mois.",
      "C) 6 mois.",
      "D) 1 an.",
      "E) Indéfiniment."
    ],
    correctAnswers: [1],
    explanation: "En présence d'un facteur déclenchant transitoire majeur (comme une chirurgie), la durée standard du traitement anticoagulant est de 3 mois, car le risque de récidive est faible une fois le facteur résolu.",
    clinicalPearl: "Durée anticoagulation : \"3 mois si Provoquée (facteur transitoire) ; Longtemps si cancer ou idiopathique\"."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-mtev-01',
    courseId: 'crs-tvp',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La TVP du Voyageur\nM. Ahmed, 50 ans, arrive aux urgences pour une douleur et un œdème du mollet gauche apparus 24h après un long voyage en bus. Il est en surpoids. A l'examen, la circonférence du mollet gauche est supérieure de 2 cm à celle du droit. Le score de Wells est de 1 point.\nQ1. Quelle est la première étape du bilan ?\nQ2. L'écho-Doppler confirme une TVP surale. Quel est le facteur de risque principal chez ce patient ?",
    options: [
      "A) Angioscanner thoracique / Âge",
      "B) Dosage des D-dimères / Stase veineuse prolongée (voyage)",
      "C) Écho-Doppler veineux en urgence / Obésité seule",
      "D) Mise sous HBPM immédiate sans examen / Thrombophilie",
      "E) Radiographie du mollet / Cancer"
    ],
    correctAnswers: [1],
    explanation: "Avec un score de Wells de 1 (probabilité intermédiaire/faible), le dosage des D-dimères est l'étape suivante logique. Le facteur déclenchant évident est la stase veineuse due à l'immobilisation prolongée pendant le voyage.",
    clinicalPearl: "Score de Wells faible = D-dimères en première intention ; Stase du voyageur = Facteur transitoire."
  },
  {
    id: 'cas-mtev-02',
    courseId: 'crs-tvp',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'Embolie Pulmonaire Atypique\nMme Fatima, 70 ans, est admise pour une dyspnée d'aggravation progressive sur 15 jours, sans douleur thoracique. Elle présente une tachycardie à 105 bpm. La radiographie thoracique est normale. L'ECG montre un S1Q3.\nQ1. Quel score de probabilité utilisez-vous en premier lieu pour son EP ?\nQ2. L'angioscanner confirme une EP lobaire. La pression artérielle est de 125/75 mmHg. L'échocardiographie montre une dilatation du VD. Comment classez-vous cette EP ?",
    options: [
      "A) Score de Wells / Haut risque",
      "B) Score de Genève révisé / Risque intermédiaire-haut",
      "C) Score de PERC / Risque intermédiaire-faible",
      "D) Score de PESI / Faible risque",
      "E) Score de Wells TVP / Risque négligeable"
    ],
    correctAnswers: [1],
    explanation: "Le score de Genève révisé est spécifiquement conçu pour l'EP. Le patient est normotendu (excluant le haut risque) mais présente une dysfonction VD à l'écho et une tachycardie, la classant en risque intermédiaire-haut.",
    clinicalPearl: "Normotendu + Dysfonction VD à l'écho = Risque intermédiaire-haut (surveillance hospitalière étroite)."
  },
  {
    id: 'cas-mtev-03',
    courseId: 'crs-tvp',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La Récidive Thrombotique\nM. Karim, 45 ans, a des antécédents de TVP iliaque droite il y a 2 ans, traitée 6 mois. Il se présente aujourd'hui avec une nouvelle TVP fémorale gauche, sans facteur déclenchant identifiable.\nQ1. Quel bilan étiologique est prioritaire ?\nQ2. Le bilan révèle un syndrome des antiphospholipides. Quelle est la durée recommandée du traitement anticoagulant ?",
    options: [
      "A) Recherche d'un cancer / 3 mois",
      "B) Bilan de thrombophilie constitutionnelle et acquise / Indéfiniment (au long cours)",
      "C) Dosage des hormones thyroïdiennes / 6 mois",
      "D) Ponction lombaire / 1 an",
      "E) Biopsie ostéo-médullaire / 2 ans"
    ],
    correctAnswers: [1],
    explanation: "Devant une récidive thrombotique non provoquée chez un sujet jeune, le bilan de thrombophilie (mutation facteur V Leiden, SAPL) est capital. En présence d'un SAPL avec récidive, l'anticoagulation doit être poursuivie au long cours indéfiniment.",
    clinicalPearl: "SAPL + Récidive thrombotique = Anticoagulation à vie par AVK (AOD non recommandés dans le SAPL triple positif)."
  },
  {
    id: 'cas-mtev-04',
    courseId: 'crs-tvp',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le Choix Thérapeutique Délicat\nMme Leïla, 80 ans, sous AVK pour une fibrillation atriale, est admise pour une hémorragie digestive haute sévère sur ulcère gastrique traité. Trois jours après l'arrêt des AVK, elle développe une TVP fémorale extensive symptomatique.\nQ1. Quelle est la meilleure option thérapeutique à court terme ?",
    options: [
      "A) Reprise immédiate des AVK",
      "B) Mise sous aspirine",
      "C) Pose d'un filtre cave temporaire",
      "D) Thrombolyse systémique",
      "E) Abstention thérapeutique et surveillance"
    ],
    correctAnswers: [2],
    explanation: "Il y a une contre-indication temporaire formelle absolue à l'anticoagulation (hémorragie digestive active récente) et un risque embolique majeur (TVP fémorale proximale). La pose d'un filtre cave temporaire amovible est la solution requise.",
    clinicalPearl: "TVP proximale + Hémorragie active = Filtre cave temporaire d'indication absolue."
  },
  {
    id: 'cas-mtev-05',
    courseId: 'crs-tvp',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le Syndrome Post-Thrombotique\nM. Djamel, 60 ans, a présenté une TVP fémoro-poplitée iliaque gauche il y a 18 mois. Il a été traité 6 mois par AVK. Il consulte aujourd'hui pour une lourdeur de la jambe gauche, un œdème qui augmente dans la journée et des modifications cutanées (dermite ocre).\nQ1. Quel est le diagnostic le plus probable ?\nQ2. Quel est le pilier du traitement non médicamenteux de cette complication ?",
    options: [
      "A) Récurrence de la TVP / Anticoagulation curative",
      "B) Lymphœdème / Diurétiques",
      "C) Syndrome post-thrombotique (insuffisance veineuse chronique) / Compression élastique forte de classe 3",
      "D) Insuffisance artérielle / Repos strict au lit",
      "E) Érysipèle / Antibiotiques au long cours"
    ],
    correctAnswers: [2],
    explanation: "Le tableau (lourdeur, œdème vespéral, dermite ocre) après une TVP proximale est un syndrome post-thrombotique. La compression élastique forte (classe 3, 30-40 mmHg) est la base indispensable du traitement pour réduire la stase et l'œdème.",
    clinicalPearl: "Syndrome post-thrombotique : Dermite ocre + œdème → Compression élastique de classe 3."
  }
];
