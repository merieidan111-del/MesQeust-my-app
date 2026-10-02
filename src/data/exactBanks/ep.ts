import { Question } from '../../types/medical';

export const EP_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-ep-01',
    courseId: 'crs-ep',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie est la méthode de référence de première intention pour confirmer le diagnostic d'embolie pulmonaire chez un patient hémodynamiquement stable ?",
    options: [
      "A) Angioscanner thoracique spiralé avec injection de produit de contraste iodé.",
      "B) Radiographie pulmonaire standard de face.",
      "C) Échocardiographie transthoracique isolée.",
      "D) Scintigraphie pulmonaire de ventilation/perfusion sans scanner.",
      "E) Coronarographie sélective gauche."
    ],
    correctAnswers: [0],
    explanation: "L'angioscanner thoracique spiralé est l'examen de référence pour confirmer l'embolie pulmonaire chez le patient stable dès lors que la probabilité clinique est intermédiaire ou forte, ou que les D-dimères sont positifs.",
    clinicalPearl: "Examen diagnostique clé dans l'EP stable = Angioscanner thoracique injecté."
  },
  {
    id: 'q-ep-02',
    courseId: 'crs-ep',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle anomalie définit une embolie pulmonaire à 'Haut Risque' (EP grave avec risque vital immédiat) selon les recommandations ESC ?",
    options: [
      "A) Une instabilité hémodynamique (choc obstructif, arrêt cardiaque ou PAS < 90 mmHg persistante).",
      "B) Une élévation isolée des troponines sanguines.",
      "C) Une dilatation du ventricule droit à l'échocardiographie sans hypotension.",
      "D) Un score de PESI supérieur à 85 sans hypotension.",
      "E) La présence de thrombi bilatéraux segmentaires."
    ],
    correctAnswers: [0],
    explanation: "L'EP à haut risque est définie uniquement par la présence d'une instabilité hémodynamique (choc cardiogénique, collapsus, PAS < 90 mmHg ou chute tensionnelle >= 40 mmHg pendant plus de 15 minutes). C'est la seule indication formelle de thrombolyse systémique d'emblée.",
    clinicalPearl: "EP à Haut Risque = Instabilité hémodynamique (choc/hypotension) → Thrombolyse systémique immédiate."
  },
  {
    id: 'q-ep-03',
    courseId: 'crs-ep',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie ECG classique, bien que rare (< 20%), est la plus spécifique d'un cœur pulmonaire aigu secondaire à une EP massive ?",
    options: [
      "A) L'aspect S1Q3T3 (onde S en D1, onde Q et onde T négative en D3).",
      "B) Le sous-décalage de ST diffus en selle de cheval.",
      "C) Le sus-décalage de ST en V1-V2-V3 avec onde de Pardee.",
      "D) Un allongement isolé de l'espace PR > 0,20 s.",
      "E) Une onde delta de pré-excitation."
    ],
    correctAnswers: [0],
    explanation: "L'aspect de McGinn-White (S1Q3T3) traduit la surcharge brutale et la rotation horaire du ventricule droit consécutive à l'obstruction artérielle pulmonaire massive.",
    clinicalPearl: "Signe de McGinn-White : Aspect S1Q3T3 = Cœur pulmonaire aigu sur EP massive."
  },
  {
    id: 'q-ep-04',
    courseId: 'crs-ep',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'intérêt fondamental du dosage des D-Dimères dans la démarche diagnostique de l'embolie pulmonaire ?",
    options: [
      "A) Confirmer formellement le diagnostic s'ils sont > 500 µg/L.",
      "B) Éliminer avec une excellente valeur prédictive négative le diagnostic si la probabilité clinique n'est pas forte.",
      "C) Prédire la réponse à la thrombolyse intraveineuse.",
      "D) Guider la posologie exacte des héparines de bas poids moléculaire.",
      "E) Différencier une thrombose proximale d'une thrombose distale."
    ],
    correctAnswers: [1],
    explanation: "Les D-Dimères ont une sensibilité très élevée (> 95%) mais une faible spécificité. Un résultat négatif (< 500 µg/L ou seuil adapté à l'âge : âge x 10 au-delà de 50 ans) permet d'exclure formellement l'EP chez les patients à probabilité clinique non forte.",
    clinicalPearl: "D-Dimères : Seuil adapté à l'âge après 50 ans = Âge × 10 µg/L pour éliminer l'EP."
  },
  {
    id: 'q-ep-05',
    courseId: 'crs-ep',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel traitement anticoagulant per os de première intention est actuellement recommandé par l'ESC dès la phase aiguë de l'embolie pulmonaire non grave (hors grossesse et insuffisance rénale sévère) ?",
    options: [
      "A) Les Anticoagulants Oraux Directs (AOD : Apixaban ou Rivaroxaban).",
      "B) L'antivitamine K (Fluindione ou Warfarine) seule d'emblée sans héparine.",
      "C) L'Aspirine à forte dose 1000 mg/j.",
      "D) Le Clopidogrel associé à l'héparine non fractionnée.",
      "E) Le Dipyridamole intraveineux continu."
    ],
    correctAnswers: [0],
    explanation: "Les AOD (Rivaroxaban, Apixaban d'emblée en monothérapie orale sans relais héparine préalable ; ou Dabigatran/Edoxaban après 5 jours d'héparine) sont les anticoagulants de première intention pour l'EP non grave grâce à leur efficacité et leur moindre risque de saignement intracrânien.",
    clinicalPearl: "AOD (Apixaban / Rivaroxaban) = Première ligne dans l'EP non compliquée d'emblée per os."
  },
  {
    id: 'q-ep-06',
    courseId: 'crs-ep',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe échocardiographique est pathognomonique d'une embolie pulmonaire aiguë avec cœur pulmonaire aigu (signe de McConnell) ?",
    options: [
      "A) Akinésie de la paroi libre du VD avec préservation de la contractilité de la pointe (apex) du VD.",
      "B) Hypertrophie concentrique sévère du VG > 18 mm.",
      "C) Rupture du pilier mitral antérieur.",
      "D) Végétation mobile sur la valve aortique.",
      "E) Épanchement circonférentiel avec collapsus du ventricule gauche."
    ],
    correctAnswers: [0],
    explanation: "Le signe de McConnell associe une akinésie de la portion médiane de la paroi libre du ventricule droit avec une hyperkinésie compensatrice de l'apex du VD. Il est très spécifique de l'EP aiguë.",
    clinicalPearl: "Signe de McConnell : Paroi libre du VD hypokinétique avec apex mobile = Spécifique de l'EP aiguë."
  },
  {
    id: 'q-ep-07',
    courseId: 'crs-ep',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la durée minimale standard du traitement anticoagulant pour un premier épisode d'embolie pulmonaire secondaire à un facteur de risque transitoire majeur (chirurgie orthopédique majeure) ?",
    options: [
      "A) 3 mois.",
      "B) 15 jours.",
      "C) 1 an systématique.",
      "D) 5 ans.",
      "E) À vie sans interruption."
    ],
    correctAnswers: [0],
    explanation: "Lorsqu'un épisode thrombo-embolique survient au décours d'un facteur déclenchant transitoire majeur et réversible (chirurgie sous anesthésie générale > 30 min, traumatisme avec plâtre), la durée d'anticoagulation recommandée est de 3 mois.",
    clinicalPearl: "EP sur facteur transitoire réversible majeur = 3 mois d'anticoagulation curative."
  },
  {
    id: 'q-ep-08',
    courseId: 'crs-ep',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez une femme enceinte suspecte d'embolie pulmonaire avec D-Dimères positifs, quel premier examen non irradiant doit être réalisé avant toute imagerie thoracique ?",
    options: [
      "A) Écho-Doppler veineux de compression des membres inférieurs.",
      "B) Scintigraphie pulmonaire au Xénon.",
      "C) Angiographie pulmonaire conventionnelle par cathétérisme.",
      "D) Radiographie du bassin de face.",
      "E) Épreuve d'effort sur tapis roulant."
    ],
    correctAnswers: [0],
    explanation: "L'écho-Doppler veineux des membres inférieurs recherche une TVP proximale. S'il est positif chez la femme enceinte, le diagnostic de MTEV est posé et le traitement anticoagulant par HBPM est débuté sans recourir à l'irradiation thoracique.",
    clinicalPearl: "Suspicion d'EP chez la femme enceinte : Écho-Doppler veineux des MI d'abord (évite les rayons si TVP confirmée)."
  },
  {
    id: 'q-ep-09',
    courseId: 'crs-ep',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel score clinique validé permet d'évaluer la mortalité précoce à 30 jours chez un patient atteint d'embolie pulmonaire confirmée ?",
    options: [
      "A) Le score PESI (Pulmonary Embolism Severity Index) ou sPESI.",
      "B) Le score de Glasgow.",
      "C) Le score de Child-Pugh.",
      "D) Le score CHA2DS2-VASc.",
      "E) Le score de Duke."
    ],
    correctAnswers: [0],
    explanation: "Le score PESI (ou sa version simplifiée sPESI) évalue le risque de mortalité à 30 jours (âge, cancer, insuffisance cardiaque, FC, PAS, SpO2). Un sPESI = 0 classe le patient en bas risque (prise en charge ambulatoire possible).",
    clinicalPearl: "Score PESI / sPESI : sPESI = 0 points → Très faible risque de mortalité → Sortie précoce envisageable."
  },
  {
    id: 'q-ep-10',
    courseId: 'crs-ep',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel thrombolytique de référence administré en perfusion de 2 heures est le plus utilisé dans l'embolie pulmonaire à haut risque avec état de choc ?",
    options: [
      "A) L'altéplase (rt-PA) 100 mg en perfusion intraveineuse de 2 heures.",
      "B) L'héparine sodique seule sans thrombolytique.",
      "C) La streptokinase en aérosol.",
      "D) L'apixaban 10 mg en injection sous-cutanée.",
      "E) Le sulfate de protamine 50 mg."
    ],
    correctAnswers: [0],
    explanation: "Le protocole de référence de thrombolyse dans l'EP avec choc repose sur l'altéplase (rt-PA) à la dose de 100 mg perfusée sur 2 heures (ou 0,6 mg/kg sur 15 min en cas d'arrêt cardiaque imminent).",
    clinicalPearl: "Thrombolyse de l'EP hémodynamiquement instable : rt-PA (Altéplase) 100 mg IV sur 2 heures."
  },
  {
    id: 'q-ep-11',
    courseId: 'crs-ep',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans les gaz du sang artériel au repos lors d'une embolie pulmonaire aiguë, quelle est l'anomalie typique observée ?",
    options: [
      "A) Hypoxémie avec hypocapnie (alcalose respiratoire par hyperventilation réflexe).",
      "B) Hypercapnie majeure avec acidose respiratoire.",
      "C) Alcalose métabolique pure avec hyperkaliémie.",
      "D) Normoxie stricte avec hypocalcémie.",
      "E) Acidose lactique isolée sans anomalie de la PaO2."
    ],
    correctAnswers: [0],
    explanation: "L'EP entraîne un effet shunt et une stimulation des récepteurs pulmonaires provoquant une polypnée réflexe. Le profil gazométrique classique est l'hypoxémie associée à une hypocapnie (PaCO2 abaissée).",
    clinicalPearl: "Gazométrie dans l'EP : Hypoxie + Hypocapnie (alcalose respiratoire par tachypnée réflexe)."
  },
  {
    id: 'q-ep-12',
    courseId: 'crs-ep',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la principale contre-indication de l'angioscanner thoracique imposant le recours à la scintigraphie de perfusion pulmonaire ?",
    options: [
      "A) Une insuffisance rénale sévère (clairance de la créatinine < 30 mL/min) ou une allergie avérée aux produits de contraste iodés.",
      "B) Une thrombose veineuse superficielle de la jambe.",
      "C) Un antécédent d'appendicectomie.",
      "D) Une hypertension artérielle contrôlée.",
      "E) Un taux de plaquettes à 250 000/mm³."
    ],
    correctAnswers: [0],
    explanation: "L'allergie grave aux produits de contraste iodés et l'insuffisance rénale sévère sont les contre-indications majeures à l'angioscanner. La scintigraphie pulmonaire de ventilation/perfusion est alors l'alternative de choix.",
    clinicalPearl: "Alternative à l'angioscanner si allergie à l'iode ou DFG < 30 mL/min = Scintigraphie V/Q."
  },
  {
    id: 'q-ep-13',
    courseId: 'crs-ep',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle séquelle à long terme de l'embolie pulmonaire, survenant dans 1 à 3% des cas, se caractérise par une dyspnée progressive avec hypertension pulmonaire pré-capillaire ?",
    options: [
      "A) L'hypertension pulmonaire thrombo-embolique chronique (HTP-TEC).",
      "B) L'asthme professionnel tardif.",
      "C) L'insuffisance coronarienne spastique.",
      "D) Le syndrome de Brugada de type 2.",
      "E) La sténose sous-aortique membraneuse."
    ],
    correctAnswers: [0],
    explanation: "L'HTP-TEC résulte de l'organisation fibreuse non résorbée de thrombi dans les artères pulmonaires. Elle doit être recherchée par échocardiographie devant toute dyspnée persistant > 3 mois après une EP.",
    clinicalPearl: "Dyspnée persistante 3-6 mois post-EP : penser à l'HTP-TEC (endartériectomie pulmonaire curative possible)."
  },
  {
    id: 'q-ep-14',
    courseId: 'crs-ep',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel filtre cave inférieur est indiqué chez un patient avec embolie pulmonaire proximale ?",
    options: [
      "A) En cas de contre-indication absolue et temporaire aux anticoagulants ou de récidive sous anticoagulation efficace bien conduite.",
      "B) Systématiquement chez tous les patients de plus de 60 ans.",
      "C) En prévention primaire chez toute femme prenant une contraception orale.",
      "D) En association systématique aux anticoagulants oraux directs.",
      "E) Uniquement chez les patients ayant un cancer bronchique métastatique."
    ],
    correctAnswers: [0],
    explanation: "Le filtre cave temporaire n'a que deux indications reconnues : contre-indication absolue immédiate aux anticoagulants curatifs (ex : hémorragie active intracrânienne) ou récidive thrombo-embolique prouvée sous anticoagulation bien conduite.",
    clinicalPearl: "Filtre cave : Indication d'exception = Contre-indication formelle aux anticoagulants ou récidive sous traitement bien mené."
  },
  {
    id: 'q-ep-15',
    courseId: 'crs-ep',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi ces items du score de Wells simplifié pour l'EP, lequel attribue 3 points au calcul de la probabilité clinique ?",
    options: [
      "A) Signes cliniques évidents de TVP (œdème, douleur au mollet) et diagnostic alternatif moins probable que l'EP.",
      "B) Tachycardie sinusale > 100 bpm.",
      "C) Hémoptysie isolée.",
      "D) Antécédent personnel de cancer.",
      "E) Âge supérieur à 65 ans."
    ],
    correctAnswers: [0],
    explanation: "Dans le score de Wells traditionnel, les deux critères à 3 points sont : les signes cliniques de TVP et le fait qu'un diagnostic alternatif soit jugé moins probable que l'embolie pulmonaire.",
    clinicalPearl: "Score de Wells : 3 points pour 'Signes de TVP' et 'Diagnostic d'EP le plus probable'."
  },
  {
    id: 'q-ep-16',
    courseId: 'crs-ep',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle complication hémorragique redoutée de l'héparinothérapie doit faire surveiller le taux de plaquettes sanguines 2 fois par semaine sous HNF ?",
    options: [
      "A) La thrombopénie induite par l'héparine de type II (TIH II immuno-allergique).",
      "B) L'hémophilie acquise à anticorps anti-facteur VIII.",
      "C) La maladie de Willebrand type 3.",
      "D) Le purpura fulminans méningococcique.",
      "E) L'aplasie médullaire idiopathique."
    ],
    correctAnswers: [0],
    explanation: "La TIH de type II est une complication médiée par des anticorps anti-PF4/héparine, survenant entre J5 et J15 de traitement, marquée par une chute brutale de > 50% des plaquettes et un paradoxe d'hyperthrombose artério-veineuse.",
    clinicalPearl: "TIH II : Chute de plus de 50% des plaquettes entre J5-J14 → Arrêt immédiat de l'héparine et relais Danaparoïde/Argatroban."
  },
  {
    id: 'q-ep-17',
    courseId: 'crs-ep',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le bilan étiologique d'une première embolie pulmonaire non provoquée chez un sujet jeune (< 50 ans), quelle thrombophilie constitutionnelle est la plus fréquente ?",
    options: [
      "A) La mutation du Facteur V Leiden (résistance à la protéine C activée).",
      "B) Le déficit constitutionnel complet en antithrombine.",
      "C) La mutation de la calréticuline.",
      "D) Le déficit congénital en facteur XIII.",
      "E) Le syndrome de Moschcowitz."
    ],
    correctAnswers: [0],
    explanation: "La mutation du facteur V Leiden (hétérozygote dans 3 à 5% de la population caucasienne) est la thrombophilie héréditaire la plus fréquente, suivie de la mutation du gène de la prothrombine G20210A.",
    clinicalPearl: "Thrombophilie héréditaire la plus fréquente = Mutation du Facteur V Leiden (résistance à la protéine C activée)."
  },
  {
    id: 'q-ep-18',
    courseId: 'crs-ep',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe radiologique thoracique (classique mais inconstant) traduit un infarctus pulmonaire triangulaire à base pleurale et sommet hilaire ?",
    options: [
      "A) La bosse ou triangle de Hampton.",
      "B) L'image en battant de cloche.",
      "C) Le signe du nid d'oiseau.",
      "D) Le bronchogramme aérique bilatéral diffus.",
      "E) La ligne bordante de Damoiseau."
    ],
    correctAnswers: [0],
    explanation: "La bosse de Hampton correspond à une opacité alvéolaire périphérique tronquée, en forme de dôme ou de triangle à base pleurale, traduisant l'infarctus pulmonaire par nécrose ischémique.",
    clinicalPearl: "Radio pulmonaire dans l'EP : Bosse de Hampton = Opacité périphérique triangulaire d'infarctus pulmonaire."
  },
  {
    id: 'q-ep-19',
    courseId: 'crs-ep',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle attitude thérapeutique immédiate est indiquée devant un arrêt cardio-respiratoire par suspicion d'embolie pulmonaire massive réfractaire ?",
    options: [
      "A) Thrombolyse intraveineuse en bolus (rt-PA 50 mg ou Ténectéplase) pendant la réanimation cardiopulmonaire prolongée (au moins 60-90 min).",
      "B) Arrêt immédiat de la réanimation après 5 minutes.",
      "C) Injection de vitamine K intraveineuse.",
      "D) Pose d'un drain thoracique bilatéral au 2e espace.",
      "E) Intubation trachéale isolée sans compressions thoraciques."
    ],
    correctAnswers: [0],
    explanation: "En cas d'arrêt cardiaque sur suspicion très forte d'EP, la thrombolyse en bolus est indiquée pendant la RCP, et les manœuvres de réanimation doivent être poursuivies au moins 60 à 90 minutes pour laisser au thrombolytique le temps d'agir.",
    clinicalPearl: "Arrêt cardiaque sur EP : Thrombolyse bolus en cours de RCP + Poursuivre le massage au moins 60 à 90 minutes."
  },
  {
    id: 'q-ep-20',
    courseId: 'crs-ep',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle classe d'embolie pulmonaire correspond au profil : patient normotendu, avec dysfonction ventriculaire droite à l'écho ET élévation de la troponine I ?",
    options: [
      "A) EP à risque 'Intermédiaire-Élevé' (Intermediate-High Risk).",
      "B) EP à haut risque hémodynamique.",
      "C) EP à risque bas pur.",
      "D) EP asymptomatique fortuite.",
      "E) EP sans retentissement myocardique."
    ],
    correctAnswers: [0],
    explanation: "Le risque intermédiaire-élevé associe une stabilité tensionnelle (PAS >= 90 mmHg) avec la présence simultanée de deux anomalies : dysfonction VD (écho ou scanner) ET souffrance myocardique biologique (troponine positive). Ce patient justifie une surveillance continue en soins intensifs.",
    clinicalPearl: "EP Intermédiaire-Élevé : PAS normale MAIS VD dilaté + Troponine élevée → USIC et surveillance rapprochée."
  },
  {
    id: 'q-ep-21',
    courseId: 'crs-ep',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lequel des anticoagulants oraux suivants nécessite une phase d'induction préalable obligatoire d'au moins 5 jours d'héparine sous-cutanée avant son introduction ?",
    options: [
      "A) Le Dabigatran (inhibiteur direct de la thrombine).",
      "B) Le Rivaroxaban.",
      "C) L'Apixaban.",
      "D) L'héparine non fractionnée seule.",
      "E) L'acide acétylsalicylique."
    ],
    correctAnswers: [0],
    explanation: "Le Dabigatran et l'Édoxaban nécessitent obligatoirement 5 jours préalables d'héparinothérapie parentérale (HBPM) avant le début de la prise orale. En revanche, le Rivaroxaban et l'Apixaban peuvent être débutés d'emblée per os sans héparine.",
    clinicalPearl: "Dabigatran et Édoxaban : Relais obligatoire après 5 jours d'anticoagulation parentérale (HBPM/HNF)."
  },
  {
    id: 'q-ep-22',
    courseId: 'crs-ep',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie permet de dépister de façon précoce l'HTAP thromboembolique chronique à distance de l'épisode aigu ?",
    options: [
      "A) Échocardiographie transthoracique avec mesure de la vitesse de régurgitation tricuspide (Vmax IT).",
      "B) Électromyogramme des membres supérieurs.",
      "C) Scintigraphie thyroïdienne à l'iode 131.",
      "D) Radiographie du crâne de profil.",
      "E) Fibroscopie œso-gastro-duodénale."
    ],
    correctAnswers: [0],
    explanation: "L'échocardiographie transthoracique est l'examen non invasif de dépistage de l'HTAP post-embolique (flux d'insuffisance tricuspide permettant d'estimer la PAPS). Si anormale, le diagnostic de certitude repose sur le cathétérisme cardiaque droit.",
    clinicalPearl: "Dépistage de l'HTAP post-EP : Échocardiographie transthoracique (Vmax flux IT)."
  },
  {
    id: 'q-ep-23',
    courseId: 'crs-ep',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie auscultatoire cardiaque est fréquemment retrouvée en cas d'hypertension artérielle pulmonaire aiguë sévère sur EP ?",
    options: [
      "A) Éclat du deuxième bruit (B2) au foyer pulmonaire avec souffle d'insuffisance tricuspide fonctionnelle.",
      "B) Bruit de galop protodiastolique B3 au foyer mitral.",
      "C) Frottement péricardique méso-systolique à la pointe.",
      "D) Souffle diastolique d'insuffisance aortique à l'endapex.",
      "E) Click méso-systolique de prolapsus mitral."
    ],
    correctAnswers: [0],
    explanation: "L'augmentation aiguë des pressions dans l'artère pulmonaire provoque un claquement accentué de fermeture de la valve pulmonaire (éclat de B2 au 2e EIC gauche) et une dilatation de l'anneau tricuspide avec souffle holosystolique de régurgitation.",
    clinicalPearl: "Cœur pulmonaire aigu auscultatoire : Éclat de B2 au foyer pulmonaire + Souffle systolique xiphoïdien (signe de Carvallo)."
  },
  {
    id: 'q-ep-24',
    courseId: 'crs-ep',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient sous AVK pour embolie pulmonaire, quelle est la cible d'INR thérapeutique recommandée ?",
    options: [
      "A) Entre 2,0 et 3,0 (cible 2,5).",
      "B) Entre 1,0 et 1,5.",
      "C) Entre 3,5 et 4,5.",
      "D) Supérieur à 5,0.",
      "E) Inférieur à 1,8."
    ],
    correctAnswers: [0],
    explanation: "Pour toute maladie thrombo-embolique veineuse traitée par antivitamine K, l'INR cible se situe entre 2,0 et 3,0 avec une valeur idéale à 2,5.",
    clinicalPearl: "Cible d'INR sous AVK dans la MTEV (TVP et EP) = 2,0 à 3,0."
  },
  {
    id: 'q-ep-25',
    courseId: 'crs-ep',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle intervention mécanique de sauvetage est envisageable en cas d'embolie pulmonaire à haut risque avec état de choc lorsque la thrombolyse médicamenteuse est formellement contre-indiquée ou a échoué ?",
    options: [
      "A) Embolectomie pulmonaire chirurgicale sous CEC ou thrombectomie percutanée guidée par cathéter.",
      "B) Pontage aorto-coronarien en urgence.",
      "C) Remplacement valvulaire mitral.",
      "D) Angioplastie coronaire de l'artère circonflexe.",
      "E) Transplantation pulmonaire monopulmonaire d'emblée."
    ],
    correctAnswers: [0],
    explanation: "En cas d'échec ou de contre-indication absolue à la thrombolyse systémique chez un patient instable, l'embolectomie chirurgicale sous circulation extracorporelle (ou la thrombectomie mécanique par cathétérisme) est l'option de sauvetage vitale.",
    clinicalPearl: "EP grave avec contre-indication à la thrombolyse = Embolectomie chirurgicale d'urgence ou thrombectomie par cathéter."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-ep-01',
    courseId: 'crs-ep',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La dyspnée post-opératoire aiguë\nMonsieur Karim, 62 ans, a bénéficié d'une prothèse totale de hanche droite il y a 8 jours. Il ressent subitement une douleur thoracique droite basi-thoracique aiguë, angoissante, augmentant à l'inspiration profonde, avec polypnée à 28/min. Aux urgences : PA 130/80 mmHg, FC 110 bpm régulière, SpO2 91% en air ambiant. L'ECG montre une tachycardie sinusale à 110 bpm sans trouble de repolarisation. La jambe droite est souple sans signe clinique de TVP.\nQ1. Quelle est la probabilité clinique d'embolie pulmonaire selon le score de Wells ?\nQ2. Quel examen d'imagerie diagnostique confirmatif demandez-vous immédiatement ?",
    options: [
      "A) Probabilité intermédiaire à forte / Angioscanner thoracique spiralé injecté.",
      "B) Probabilité faible / Échocardiographie d'effort.",
      "C) Probabilité nulle / Radiographie du gril costal droite.",
      "D) Probabilité intermédiaire / Coronarographie sélective.",
      "E) Probabilité forte / Scintigraphie osseuse au Technétium."
    ],
    correctAnswers: [0],
    explanation: "Chirurgie récente (1,5 pt), FC > 100 bpm (1,5 pt), pas d'autre diagnostic plus probable (3 pts) = Score de Wells >= 6 (probabilité clinique forte). En probabilité forte, on ne dose pas les D-dimères (inutiles car l'imagerie est requise de toute façon) et on réalise d'emblée un angioscanner thoracique.",
    clinicalPearl: "Suspicion d'EP à probabilité clinique forte : Angioscanner thoracique d'emblée sans perdre de temps avec les D-dimères."
  },
  {
    id: 'cas-ep-02',
    courseId: 'crs-ep',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : Le collapsus brutal aux urgences\nMadame Aïcha, 58 ans, obèse, suivie pour cancer du sein métastatique, présente un malaise syncopal brutal aux urgences. À l'examen immédiat : patiente marbrée, froide, obnubilée. La pression artérielle est imprenable puis mesurée à 65/40 mmHg, FC 135 bpm, turgescence spontanée des jugulaires. L'échocardiographie au lit du malade montre un ventricule droit dilaté écrasant le ventricule gauche (septum paradoxal) avec Vmax IT à 3,8 m/s.\nQ1. Dans quelle catégorie pronostique de gravité se situe cette embolie pulmonaire ?\nQ2. Quelle est la thérapeutique de reperfusion d'urgence vitale à débuter sans délai ?",
    options: [
      "A) Embolie pulmonaire à haut risque (instabilité hémodynamique) / Thrombolyse intraveineuse par Altéplase (rt-PA).",
      "B) Embolie pulmonaire à bas risque / Surveillance simple sans anticoagulants.",
      "C) Choc septique pulmonaire / Antibiothérapie large spectre seule.",
      "D) Infarctus du myocarde antérieur / Angioplastie coronaire primaire.",
      "E) Tamponnade péricardique / Ponction péricardique sous-xiphoïdienne immédiate."
    ],
    correctAnswers: [0],
    explanation: "Le collapsus (PAS < 90 mmHg avec signes d'hypoperfusion) chez une patiente présentant les signes échographiques patents de cœur pulmonaire aigu signe l'EP à Haut Risque (choc obstructif). La prise en charge immédiate est la thrombolyse intraveineuse d'urgence associée à un remplissage très prudent (max 500 mL) et noradrénaline.",
    clinicalPearl: "EP avec état de choc : Thrombolyse systémique immédiate (rt-PA 100 mg sur 2h) + Noradrénaline pour restaurer la perfusion coronaire."
  },
  {
    id: 'cas-ep-03',
    courseId: 'crs-ep',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La jeune femme sous pilule oestroprogestative\nUne étudiante en médecine de 23 ans sous contraception orale œstroprogestative consulte pour une toux sèche avec crachats hémoptoïques minimes et point de côté thoracique gauche fébricule à 37,9°C. La PA est à 120/75 mmHg, FC 82 bpm, SpO2 98%. Le score de Wells est calculé à 2 (probabilité faible). Le dosage des D-Dimères revient à 230 µg/L.\nQ1. Quelle conclusion diagnostique s'impose formellement ?\nQ2. Quelle est la conduite à tenir immédiate ?",
    options: [
      "A) L'embolie pulmonaire est formellement exclue par le résultat négatif des D-Dimères chez cette patiente à probabilité faible ; arrêt des explorations de MTEV.",
      "B) L'angioscanner thoracique doit être réalisé de principe car elle prend la pilule.",
      "C) Débuter une héparinothérapie curative d'épreuve pendant 48 heures.",
      "D) Réaliser une scintigraphie de perfusion en urgence.",
      "E) Prescrire une fibrinolyse orale."
    ],
    correctAnswers: [0],
    explanation: "Chez un patient à probabilité clinique faible ou intermédiaire, un taux de D-Dimères < 500 µg/L possède une valeur prédictive négative proche de 100%. L'embolie pulmonaire est éliminée en toute sécurité sans irradiation.",
    clinicalPearl: "Probabilité clinique non forte + D-Dimères négatifs = Embolie pulmonaire formellement exclue."
  },
  {
    id: 'cas-ep-04',
    courseId: 'crs-ep',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Choix anticoagulant chez le patient cancéreux\nUn homme de 65 ans suivi pour un adénocarcinome colique avec métastases hépatiques présente une embolie pulmonaire segmentaire bilatérale non grave. Le bilan biologique montre : créatinine 82 µmol/L (clairance 78 mL/min), plaquettes 180 000/mm³. Il n'a aucun antécédent d'hémorragie digestive active.\nQ1. Quelles options thérapeutiques anticoagulantes orales ou injectables sont recommandées selon les dernières recommandations ESC ?",
    options: [
      "A) Les AOD (Apixaban, Rivaroxaban ou Édoxaban) ou une HBPM à dose curative (ex : Tinzaparine ou Énoxaparine).",
      "B) Les antivitamines K (AVK) en première intention d'emblée.",
      "C) L'Aspirine 75 mg en monothérapie per os.",
      "D) La mise en place préventive d'un filtre cave sans médicament.",
      "E) Le Clopidogrel 75 mg associé à la vitamine K."
    ],
    correctAnswers: [0],
    explanation: "Chez le patient avec cancer actif, les recommandations actuelles préconisent les AOD (Apixaban ou Rivaroxaban) ou les HBPM sous-cutanées, qui sont nettement supérieures aux AVK en termes de réduction des récidives sans excès majeur de saignement (sauf en cas de cancer luminal digestif haut non réséqué où l'HBPM est préférée).",
    clinicalPearl: "MTEV associée au cancer : AOD ou HBPM (les AVK sont désormais relégués au second plan)."
  },
  {
    id: 'cas-ep-05',
    courseId: 'crs-ep',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le piège de l'intermédiaire-élevé\nUn homme de 72 ans consulte pour dyspnée brutale d'effort. Aux urgences : PA 125/80 mmHg, FC 98 bpm, SpO2 93% sous 2 L/min d'O2. L'angioscanner confirme une embolie pulmonaire bilatérale lobaire. L'échocardiographie objective un rapport VD/VG = 1,1 avec élévation de la PAPS à 52 mmHg. La troponine I ultra-sensible est augmentée à 12 fois la normale. Le patient reste normotendu.\nQ1. Quel est le niveau de risque de ce patient ?\nQ2. Quelle est la prise en charge thérapeutique initiale adaptée ?",
    options: [
      "A) Risque Intermédiaire-Élevé / Hospitalisation en USIC avec anticoagulation curative (HBPM ou HNF) et surveillance hémodynamique étroite, prêt pour une thrombolyse de sauvetage en cas de dégradation.",
      "B) Bas risque / Retour à domicile sous paracétamol.",
      "C) Haut risque / Thrombolyse immédiate par rt-PA 100 mg sans attendre.",
      "D) Risque nul / Sevrage de l'oxygène et arrêt des traitements.",
      "E) Chirurgie de pontage en urgence."
    ],
    correctAnswers: [0],
    explanation: "Normotension + Dysfonction VD + Troponine élevée = Risque Intermédiaire-Élevé. L'essai PEITHO a démontré que la thrombolyse de principe ne réduit pas la mortalité mais double les AVC hémorragiques. La stratégie est donc : anticoagulation curative en USIC avec monitorage strict, et réserve de la thrombolyse en cas de décompensation hémodynamique (sauvetage).",
    clinicalPearl: "EP Intermédiaire-Élevé : Pas de thrombolyse d'emblée ! Anticoagulation en USIC et surveillance rapprochée (thrombolyse de sauvetage si choc)."
  }
];
