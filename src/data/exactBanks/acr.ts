import { Question } from '../../types/medical';

export const ACR_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-acr-01',
    courseId: 'crs-acr',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quels sont les deux seuls rythmes cardiaques qualifiés de 'DÉFIBRILLABLES' lors de la réanimation cardiopulmonaire d'un arrêt cardiaque ?",
    options: [
      "A) La Fibrillation Ventriculaire (FV) et la Tachycardie Ventriculaire (TV) sans pouls.",
      "B) L'Asystolie et l'Activité Électrique Sans Pouls (AESP).",
      "C) La Fibrillation Auriculaire rapide et le Flutter auriculaire.",
      "D) Le Bloc Auriculo-Ventriculaire complet (BAV 3) et la bradycardie sinusale.",
      "E) Le rythme idioventriculaire accéléré et la tachycardie sinusale."
    ],
    correctAnswers: [0],
    explanation: "Lors d'un arrêt cardio-respiratoire, les rythmes sont divisés en 2 catégories : les rythmes défibrillables (FV et TV sans pouls, justifiant un choc électrique externe immédiat) et les rythmes non défibrillables (Asystolie et AESP, où le choc est inutile voire délétère).",
    clinicalPearl: "Rythmes défibrillables = Fibrillation Ventriculaire (FV) et Tachycardie Ventriculaire sans pouls (TV)."
  },
  {
    id: 'q-acr-02',
    courseId: 'crs-acr',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les recommandations internationales ERC/AHA, quelle est la fréquence et la profondeur optimales des compressions thoraciques (massage cardiaque externe) chez l'adulte ?",
    options: [
      "A) Fréquence de 100 à 120 compressions par minute, avec une profondeur de 5 à 6 cm chez l'adulte moyen.",
      "B) Fréquence de 60 à 70 compressions par minute avec profondeur de 2 cm.",
      "C) Fréquence de 150 compressions par minute avec profondeur de 8 à 10 cm.",
      "D) Fréquence de 80 compressions par minute sans jamais relâcher le thorax.",
      "E) Fréquence libre au choix du sauveteur."
    ],
    correctAnswers: [0],
    explanation: "Les critères de massage de haute qualité sont : fréquence de 100 à 120/min, enfoncement sternal de 5 à 6 cm, décompression thoracique complète entre chaque appui, et réduction au minimum des interruptions (< 10 secondes).",
    clinicalPearl: "Massage cardiaque externe de haute qualité : 100 à 120/min, 5 à 6 cm de profondeur, relâchement thoracique complet."
  },
  {
    id: 'q-acr-03',
    courseId: 'crs-acr',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le ratio standard compressions/ventilations (MCE / insufflations) recommandé lors de la réanimation de base de l'adulte en arrêt cardiaque avant intubation ?",
    options: [
      "A) 30 compressions pour 2 insufflations (ratio 30:2).",
      "B) 15 compressions pour 2 insufflations.",
      "C) 5 compressions pour 1 insufflation.",
      "D) 50 compressions pour 5 insufflations.",
      "E) 1 compression pour 1 insufflation continue."
    ],
    correctAnswers: [0],
    explanation: "Le ratio universel de réanimation chez l'adulte (que le sauveteur soit seul ou en équipe) avant mise en place d'une voie aérienne avancée est de 30 compressions sternales suivies de 2 insufflations (30:2).",
    clinicalPearl: "Ratio universel RCP adulte = 30 compressions thoraciques pour 2 insufflations (30:2)."
  },
  {
    id: 'q-acr-04',
    courseId: 'crs-acr',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'algorithme des rythmes DÉFIBRILLABLES (FV / TV sans pouls), quel médicament vasopresseur doit être administré par voie IV/IO après le 3e choc électrique externe, puis répété toutes les 3 à 5 minutes ?",
    options: [
      "A) L'Adrénaline à la dose de 1 mg en bolus.",
      "B) L'Atropine à la dose de 3 mg.",
      "C) La Noradrénaline 10 mg.",
      "D) La Dopamine 200 mg.",
      "E) Le sulfate de magnésium 10 g."
    ],
    correctAnswers: [0],
    explanation: "Dans les rythmes défibrillables (FV/TV), l'Adrénaline 1 mg IV/IO est injectée après le 3ème choc (et après reprise du MCE), puis renouvelée toutes les 3 à 5 minutes (soit tous les 2 cycles de 2 minutes). En cas de rythme non défibrillable (asystolie/AESP), elle est administrée d'emblée dès que la voie veineuse est disponible.",
    clinicalPearl: "Adrénaline 1 mg : après le 3e choc dans la FV/TV sans pouls ; d'emblée dès que possible dans l'asystolie/AESP."
  },
  {
    id: 'q-acr-05',
    courseId: 'crs-acr',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel anti-arythmique de référence doit être administré en bolus intraveineux (300 mg) après le 3e choc en cas de persistance ou récidive d'une Fibrillation Ventriculaire ou TV sans pouls réfractaire ?",
    options: [
      "A) L'Amiodarone (300 mg en bolus, avec réinjection éventuelle de 150 mg après le 5e choc).",
      "B) La Digoxine 0,5 mg en IVD.",
      "C) Le Bisoprolol 10 mg IV.",
      "D) Le Vérapamil 5 mg.",
      "E) La Flécaïnide 100 mg."
    ],
    correctAnswers: [0],
    explanation: "L'Amiodarone 300 mg en bolus IV/IO (diluée dans 20 mL de glucosé 5%) est l'anti-arythmique de première intention dans la FV/TV réfractaire après le 3e choc. Une seconde dose de 150 mg peut être administrée après le 5e choc (la lidocaïne 100 mg est l'alternative si l'amiodarone est indisponible).",
    clinicalPearl: "Amiodarone dans la FV réfractaire : 300 mg après le 3e choc, puis 150 mg après le 5e choc."
  },
  {
    id: 'q-acr-06',
    courseId: 'crs-acr',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelles sont les 4 causes réversibles d'arrêt cardiaque commençant par la lettre 'H' à rechercher systématiquement (règle mnémotechnique des 4H et 4T) ?",
    options: [
      "A) Hypoxie, Hypovolémie, Hyper/Hypokaliémie (et troubles métaboliques), Hypo/Hyperthermie.",
      "B) Hypertension, Hypercholestérolémie, Hémorragie méningée, Hypertrophie.",
      "C) Hémophilie, Hémochromatose, Hépatite, Hystérie.",
      "D) Hernie inguinale, Hypocalcémie, Hémolyse, Hyperoxie.",
      "E) Hypercapnie, Hallucinations, Hydrocéphalie, Hyperthermie."
    ],
    correctAnswers: [0],
    explanation: "La règle des 4H et 4T résume les étiologies curables d'ACR : 4H = Hypoxie, Hypovolémie, Hypo/Hyperkaliémie (acidose/dyskaliémie), Hypothermie ; 4T = Thrombose (coronarienne ou pulmonaire), Tamponnade péricardique, Tension pneumothorax (pneumothorax compressif), Toxiques.",
    clinicalPearl: "Causes réversibles d'ACR : 4H (Hypoxie, Hypovolémie, Hypo/hyperkaliémie, Hypothermie) et 4T (Thrombose, Tamponnade, Tension/PNT, Toxiques)."
  },
  {
    id: 'q-acr-07',
    courseId: 'crs-acr',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle valeur de la pression télé-expiratoire en dioxyde de carbone (EtCO2 par capnographie) mesurée sur sonde d'intubation est un indicateur objectif d'un massage cardiaque efficace ou de la reprise d'activité circulatoire spontanée (RACS) ?",
    options: [
      "A) Une EtCO2 > 10 à 20 mmHg pendant le massage, et une élévation brutale > 35-40 mmHg annonçant la reprise d'une circulation spontanée (RACS).",
      "B) Une EtCO2 constamment égale à zéro.",
      "C) Une EtCO2 > 100 mmHg.",
      "D) Une valeur négative.",
      "E) Une absence complète de corrélation avec le débit cardiaque."
    ],
    correctAnswers: [0],
    explanation: "La capnographie continue (EtCO2) reflète directement le débit cardiaque généré par le massage. Une valeur < 10 mmHg signe un massage inefficace. Un pic brutal d'EtCO2 (> 35-40 mmHg) est le signe le plus précoce et le plus fiable de RACS (reprise d'activité cardiaque).",
    clinicalPearl: "Capnographie dans l'ACR : Pic brutal d'EtCO2 > 35-40 mmHg = Signe formel de reprise d'activité circulatoire spontanée (RACS) !"
  },
  {
    id: 'q-acr-08',
    courseId: 'crs-acr',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la réanimation avec Défibrillateur Automatisé Externe (DAE grand public), quelle consigne de sécurité absolue doit être respectée lors de la délivrance du choc électrique ?",
    options: [
      "A) Vérifier visuellement et annoncer à voix haute que PERSONNE ne touche la victime ('Écartez-vous tous').",
      "B) Continuer vigoureusement les compressions thoraciques pendant que le choc est délivré.",
      "C) Tenir fermement la tête de la victime.",
      "D) Imbiber la poitrine d'eau pour améliorer la conduction.",
      "E) Débrancher les électrodes au moment du tir."
    ],
    correctAnswers: [0],
    explanation: "Avant tout choc électrique (DAE ou manuel), le sauveteur doit balayer des yeux l'environnement, crier 'Écartez-vous' et s'assurer que personne n'est en contact direct ou indirect avec le patient ou le brancard afin d'éviter une électrisation d'un soignant.",
    clinicalPearl: "Sécurité lors de la défibrillation : Contrôle visuel 360° et annonce 'Écartez-vous' avant de délivrer le choc."
  },
  {
    id: 'q-acr-09',
    courseId: 'crs-acr',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient comateux après récupération d'un arrêt cardio-respiratoire (RACS), quelle cible de contrôle ciblé de la température (TTM : Targeted Temperature Management) est recommandée par l'ERC/ESICM ?",
    options: [
      "A) Maintenir une normothermie stricte (36°C à 37,5°C) ou une hypothermie modérée contrôlée (32°C à 36°C) en évitant formellement toute fièvre (> 37,7°C) pendant au moins 72 heures.",
      "B) Réchauffer le patient à 40°C pour stimuler les enzymes cérébrales.",
      "C) Refroidir le patient en dessous de 28°C.",
      "D) Ne pas surveiller la température corporelle.",
      "E) Provoquer des frissons actifs sans sédation."
    ],
    correctAnswers: [0],
    explanation: "La prévention agressive de la fièvre (hyperthermie > 37,7°C, très délétère pour le cerveau ischémié) est la clé de voûte neuro-protectrice post-ACR. Le contrôle ciblé de température maintient une température constante entre 32°C et 36°C ou une normothermie stricte (< 37,5°C).",
    clinicalPearl: "Contrôle ciblé de la température post-RACS : Prévention absolue de la fièvre pendant au moins 72 heures."
  },
  {
    id: 'q-acr-10',
    courseId: 'crs-acr',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie coronaire invasive en urgence doit être réalisé systématiquement chez tout patient réanimé d'un arrêt cardiaque avec sus-décalage du segment ST à l'ECG post-RACS ?",
    options: [
      "A) Coronarographie immédiate en salle de cathétérisme avec angioplastie primaire de l'artère occluse.",
      "B) Coronarographie différée à J15.",
      "C) Scintigraphie myocardique au Thallium.",
      "D) Scanner coronaire sans produit de contraste.",
      "E) Épreuve d'effort post-réanimation immédiate."
    ],
    correctAnswers: [0],
    explanation: "Tout patient réanimé d'un arrêt cardiaque présentant un sus-décalage persistant du segment ST à l'ECG post-RACS doit être transféré d'urgence en salle de coronarographie pour désobstruction coronaire immédiate (Classe I).",
    clinicalPearl: "ECG post-RACS avec sus-décalage de ST = Coronarographie immédiate en urgence absolue (angioplastie primaire)."
  },
  {
    id: 'q-acr-11',
    courseId: 'crs-acr',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En l'absence de voie veineuse périphérique accessible rapidement dans les 2 premières minutes de réanimation d'un ACR, quelle voie d'abord alternative d'urgence est la plus rapide et fiable ?",
    options: [
      "A) La voie intra-osseuse (abord tibial proximal ou huméral au pistolet intra-osseux EZ-IO).",
      "B) L'injection intra-trachéale aveugle.",
      "C) Le cathétérisme de l'artère radiale.",
      "D) L'injection sous-cutanée abdominale.",
      "E) L'injection intracardiaque directe à l'aiguille de Chassignac."
    ],
    correctAnswers: [0],
    explanation: "La voie intra-osseuse (tibiale antérieure ou humérale) permet une absorption médicamenteuse équivalente à une voie centrale en moins de 30 secondes d'insertion, évitant les retards d'administration des drogues de réanimation.",
    clinicalPearl: "Échec de VVP en réanimation d'ACR = Voie intra-osseuse (IO) immédiate (tibiale ou humérale)."
  },
  {
    id: 'q-acr-12',
    courseId: 'crs-acr',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle énergie de choc électrique externe (défibrillation) est recommandée avec un défibrillateur manuel biphasique pour le premier choc d'une fibrillation ventriculaire chez l'adulte ?",
    options: [
      "A) 150 à 200 Joules biphasiques (ou énergie maximale recommandée par le fabricant).",
      "B) 10 Joules monophasiques.",
      "C) 360 Joules d'emblée obligatoire sur tous les appareils biphasiques.",
      "D) 50 Joules.",
      "E) 1 Joule par kg chez l'adulte."
    ],
    correctAnswers: [0],
    explanation: "Avec les défibrillateurs à onde biphasique actuels, le premier choc est délivré à une énergie de 150 à 200 J (ou la dose maximale préconisée par l'appareil), beaucoup plus efficace et moins délétère pour le myocarde que les anciens 360 J monophasiques.",
    clinicalPearl: "Défibrillation biphasique adulte = 150 à 200 Joules dès le premier choc (puis 200-360 J pour les suivants)."
  },
  {
    id: 'q-acr-13',
    courseId: 'crs-acr',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle action IMMEDIATE doit suivre la délivrance d'un choc électrique externe pour FV avant même de regarder le moniteur ECG ?",
    options: [
      "A) Reprendre IMMÉDIATEMENT les compressions thoraciques (MCE) pendant 2 minutes sans interruption ni palpation de pouls.",
      "B) Palper le pouls carotidien pendant 30 secondes.",
      "C) Regarder fixement le tracé du moniteur sans masser.",
      "D) Injecter une ampoule d'atropine.",
      "E) Réaliser un choc immédiat supplémentaire sans masser (série de trois chocs consécutifs)."
    ],
    correctAnswers: [0],
    explanation: "Immédiatement après le choc, le myocarde 'sidéré' ne génère pas de débit efficace même si le rythme s'est restauré. Il faut reprendre instantanément les compressions thoraciques pendant 2 minutes complètes avant toute réévaluation du rythme et du pouls.",
    clinicalPearl: "Après le choc : REPRISE IMMÉDIATE DU MCE pendant 2 minutes (ne pas perdre de temps à palper le pouls immédiatement post-choc)."
  },
  {
    id: 'q-acr-14',
    courseId: 'crs-acr',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle cause toxique fréquente d'arrêt cardiaque doit faire administrer sans délai l'antidote Naloxone par voie intraveineuse ou intranasale ?",
    options: [
      "A) L'overdose aiguë d'opiacés (Morphine, Fentanyl, Héroïne, Méthadone) avec bradypnée et myosis serré.",
      "B) L'intoxication aux benzodiazépines pure.",
      "C) L'intoxication au monoxyde de carbone.",
      "D) L'ingestion massive d'aspirine.",
      "E) L'intoxication aux organophosphorés."
    ],
    correctAnswers: [0],
    explanation: "La naloxone est l'antagoniste compétitif spécifique des récepteurs morphiniques. Elle lève immédiatement la dépression respiratoire et le coma en cas de surdosage aux opioïdes (signes évocateurs : coma, bradypnée/apnée, myosis bilatéral punctiforme).",
    clinicalPearl: "Suspicion d'overdose aux opioïdes : Naloxone IV/IM/intranasale immédiate."
  },
  {
    id: 'q-acr-15',
    courseId: 'crs-acr',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie respiratoire réflexe agonique, présente dans plus de 40% des arrêts cardiaques précoces, ne doit JAMAIS être confondue avec une respiration normale et justifie le début immédiat du MCE ?",
    options: [
      "A) Les gasps respiratoires (mouvements respiratoires lents, saccadés, bruyants et inefficaces).",
      "B) Une polypnée superficielle régulière.",
      "C) Une respiration de Kussmaul ample.",
      "D) Une toux sèche quinteuse.",
      "E) Un bâillement isolé."
    ],
    correctAnswers: [0],
    explanation: "Les gasps sont des mouvements réflexes du tronc cérébral survenant dans les premières minutes d'anoxie cérébrale. Les témoins et soignants inexpérimentés les prennent à tort pour une respiration conservée, retardant le massage. Gasps = Arrêt Cardiaque = Masser !",
    clinicalPearl: "Victime inconsciente qui 'gaspe' = ARRÊT CARDIO-RESPIRATOIRE → Débuter le MCE immédiatement !"
  },
  {
    id: 'q-acr-16',
    courseId: 'crs-acr',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel antidote électrolytique intraveineux est administré d'urgence lors d'un arrêt cardiaque sur hyperkaliémie sévère (onde T pointue, élargissement majeur des QRS) pour stabiliser la membrane des cardiomyocytes ?",
    options: [
      "A) Le Chlorure de Calcium (ou Gluconate de Calcium) à 10% IV direct (10 mL).",
      "B) Le sulfate de magnésium.",
      "C) Le sérum salé hypotonique à 0,45%.",
      "D) Le chlorure de potassium en bolus.",
      "E) Le furosémide seul."
    ],
    correctAnswers: [0],
    explanation: "Le calcium intraveineux (chlorure ou gluconate de calcium) antagonise immédiatement les effets toxiques membranaires de l'hyperkaliémie sur les cellules cardiaques en augmentant le seuil de potentiel d'action, prévenant la dégénérescence en FV/asystolie.",
    clinicalPearl: "Hyperkaliémie menaçante / ACR hyperkaliémique : Chlorure de Calcium IV immédiat (stabilisateur de membrane)."
  },
  {
    id: 'q-acr-17',
    courseId: 'crs-acr',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la chaîne de survie de l'adulte en arrêt cardiaque extra-hospitalier dans son ordre chronologique officiel selon l'ERC ?",
    options: [
      "A) 1) Reconnaissance précoce et appel des secours (15/112), 2) RCP précoce de haute qualité, 3) Défibrillation précoce par DAE, 4) Soins post-réanimation spécialisés.",
      "B) 1) Intubation trachéale, 2) Défibrillation, 3) Appel, 4) Injection d'adrénaline.",
      "C) 1) Prise de sang, 2) Transport aux urgences, 3) Massage, 4) Scanner.",
      "D) 1) Recherche des papiers d'identité, 2) Pose de sonde urinaire, 3) Appel, 4) Massage.",
      "E) 1) Fibrinolyse, 2) Massage, 3) Oxygène, 4) Sortie."
    ],
    correctAnswers: [0],
    explanation: "La chaîne de survie comprend 4 maillons interconnectés : Appel précoce (15/18/112), Massage cardiaque immédiat par les témoins (gagne du temps), Défibrillation précoce (sauve des vies dans les premières minutes), Soins post-ressuscitation avancés en réanimation.",
    clinicalPearl: "Chaîne de survie : Reconnaissance/Appel → MCE précoce → Défibrillation DAE précoce → Soins post-RACS."
  },
  {
    id: 'q-acr-18',
    courseId: 'crs-acr',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen clinique neurologique simple post-RACS réalisé après 72 heures sans sédation est un marqueur robuste de mauvais pronostic neurologique (encéphalopathie anoxique irréversible) ?",
    options: [
      "A) L'abolition bilatérale persistante des réflexes cornéens et pupillaires photomoteurs.",
      "B) La présence d'une toux à l'aspiration endotrachéale.",
      "C) Une grimace à la stimulation douloureuse.",
      "D) Un réflexe rotulien vif.",
      "E) Un clignement palpébral spontané."
    ],
    correctAnswers: [0],
    explanation: "Selon l'algorithme pronostique de l'ERC à 72 heures du RACS : l'absence bilatérale de réflexe cornéen et de réflexe photomoteur (pupilles fixes aréactives), associée à l'onde N20 absente aux potentiels évoqués somesthésiques (PES), prédit un pronostic neurologique défavorable avec une spécificité de 100%.",
    clinicalPearl: "Pronostic neurologique post-ACR à 72h : Abolition bilatérale du réflexe cornéen + photomoteur = Pronostic péjoratif irréversible."
  },
  {
    id: 'q-acr-19',
    courseId: 'crs-acr',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel geste d'urgence vitale salvateur doit être exécuté immédiatement devant un arrêt cardiaque suspecté d'être secondaire à un pneumothorax sous tension suffocant unilatéral ?",
    options: [
      "A) Décompression à l'aiguille (thoracostomie à l'aiguille de gros calibre) au 2e espace intercostal sur la ligne médio-claviculaire ou 4e/5e espace ligne axillaire antérieure.",
      "B) Injection d'adrénaline 5 mg intracardiaque.",
      "C) Radiographie thoracique en urgence avant tout geste.",
      "D) Perfusion de 2 litres de macromolécules.",
      "E) Pose d'un plâtre d'immobilisation thoracique."
    ],
    correctAnswers: [0],
    explanation: "Le pneumothorax suffocant entraîne un collapsus des cavités droites par compression veineuse médiastinale (choc obstructif puis ACR). La décompression pleurale immédiate à l'aiguille ou au doigt lève la surpression et restaure instantanément le retour veineux avant le drainage.",
    clinicalPearl: "ACR sur Pneumothorax sous tension : Exsufflation à l'aiguille immédiate SANS ATTENDRE LA RADIOGRAPHIE !"
  },
  {
    id: 'q-acr-20',
    courseId: 'crs-acr',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle complication d'un massage cardiaque externe prolongé est la plus fréquente mais ne doit en AUCUN CAS interrompre les compressions thoraciques ?",
    options: [
      "A) Les fractures de côtes ou du sternum.",
      "B) La rupture de l'aorte thoracique descendante.",
      "C) L'amputation spontanée d'un membre.",
      "D) La luxation de la mâchoire.",
      "E) La surdité bilatérale de perception."
    ],
    correctAnswers: [0],
    explanation: "Les fractures costales ou chondro-sternales surviennent chez plus de 30 à 50% des patients réanimés efficacement. C'est une séquelle bénigne comparée au décès certain par arrêt de la réanimation. Le MCE doit être poursuivi sans interruption en repositionnant correctement les mains au centre du thorax.",
    clinicalPearl: "Craquement costal lors du MCE : Ne jamais s'arrêter de masser ! C'est une conséquence normale des compressions efficaces."
  },
  {
    id: 'q-acr-21',
    courseId: 'crs-acr',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament spécifique est administré lors d'un arrêt cardiaque sur torsades de pointes réfractaires ou hypomagnésémie avérée ?",
    options: [
      "A) Le Sulfate de magnésium intraveineux (2 g en bolus IV direct).",
      "B) Le Digibind®.",
      "C) La Protamine.",
      "D) Le Flumazénil.",
      "E) Le bleu de méthylène."
    ],
    correctAnswers: [0],
    explanation: "Le sulfate de magnésium (2 g IV en 1 à 2 minutes) est le traitement spécifique curatif des torsades de pointes (TV polymorphe sur QT long), efficace même en l'absence d'hypomagnésémie plasmatique préalable.",
    clinicalPearl: "Torsades de pointes / QT long : Sulfate de Magnésium (2 g IVD) + Accélération de la fréquence cardiaque."
  },
  {
    id: 'q-acr-22',
    courseId: 'crs-acr',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle cible de SpO2 et de PaO2 doit être visée post-RACS pour éviter les lésions cérébrales d'hyperoxie délétère ?",
    options: [
      "A) SpO2 entre 94% et 98% (titrer la FiO2 pour éviter l'hyperoxie PaO2 > 200-300 mmHg tout en évitant l'hypoxie).",
      "B) FiO2 à 100% permanente à vie.",
      "C) SpO2 à 80% obligatoire.",
      "D) PaO2 la plus élevée possible au-delà de 500 mmHg.",
      "E) PaO2 inférieure à 50 mmHg."
    ],
    correctAnswers: [0],
    explanation: "Dès que la reprise d'activité circulatoire spontanée (RACS) est obtenue, l'hyperoxie non contrôlée (PaO2 excessive) majore la production de radicaux libres et aggrave les lésions de reperfusion cérébrale. La FiO2 doit être titrée pour maintenir la SpO2 entre 94% et 98%.",
    clinicalPearl: "Post-RACS : Titrer la FiO2 pour cibler SpO2 94-98% (l'hyperoxie cérébrale aggrave les lésions d'ischémie-reperfusion)."
  },
  {
    id: 'q-acr-23',
    courseId: 'crs-acr',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel biomarqueur sérique spécifique de destruction neuronale dosé à 48-72h post-ACR est utilisé comme critère pronostique d'encéphalopathie anoxique ?",
    options: [
      "A) L'Énolase spécifique des neurones (NSE > 60 µg/L à 48-72h).",
      "B) La troponine Ic cardiaque.",
      "C) Les phosphatases alcalines.",
      "D) L'amylasémie.",
      "E) L'alpha-fœtoprotéine."
    ],
    correctAnswers: [0],
    explanation: "Une élévation majeure et concordante de la Neuron-Specific Enolase (NSE > 60 µg/L à 48h ou 72h) traduit une nécrose corticale étendue et constitue un critère robuste d'évaluation multimodale du pronostic neurologique défavorable post-ACR.",
    clinicalPearl: "Biomarqueur neurologique post-ACR : Élévation marquée de la NSE à H48-H72 = Lésions neuronales anoxiques étendues."
  },
  {
    id: 'q-acr-24',
    courseId: 'crs-acr',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle assistance cardio-respiratoire mécanique extracorporelle est de plus en plus déployée en réanimation mobile ou hospitalière lors d'un ACR réfractaire prolongé chez un sujet jeune sans comorbidité (e-CPR) ?",
    options: [
      "A) L'ECMO veino-artérielle en cours de réanimation (e-CPR / VA-ECMO).",
      "B) La ventilation mécanique en pression négative de type poumon d'acier.",
      "C) Le filtre cave temporaire.",
      "D) Le ballonnet intra-gastrique.",
      "E) Le stimulateur phrénique implantable."
    ],
    correctAnswers: [0],
    explanation: "La réanimation cardiopulmonaire extracorporelle (e-CPR par pose d'une VA-ECMO percutanée fémorale en cours de massage) permet de rétablir une oxygénation et un débit chez des patients sélectionnés (jeunes, arrêt témoigné avec no-flow court, rythme défibrillable initial) en ACR réfractaire au-delà de 20-30 min de RCP.",
    clinicalPearl: "e-CPR (ECMO veino-artérielle en cours d'ACR) : Option de sauvetage chez les sujets jeunes en arrêt cardiaque réfractaire sélectionné."
  },
  {
    id: 'q-acr-25',
    courseId: 'crs-acr',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans l'arrêt cardiaque de la femme enceinte de plus de 20 semaines d'aménorrhée (utérus palpable au-dessus de l'ombilic), quelle mesure mécanique et chirurgicale salvatrice doit être entreprise sous 4 à 5 minutes si le RACS n'est pas obtenu ?",
    options: [
      "A) Déplacement manuel latéral gauche de l'utérus pour lever la compression aorto-cave, et césarienne per-mortem (hystérotomie de sauvetage) dès la 4e ou 5e minute de RCP infructueuse.",
      "B) Mise en décubitus dorsal strict avec pression sur l'utérus.",
      "C) Arrêt immédiat des compressions thoraciques pour ne pas traumatiser le fœtus.",
      "D) Injection exclusive de sulfate de magnésium sans massage.",
      "E) Attendre 30 minutes de réanimation avant d'envisager l'extraction fœtale."
    ],
    correctAnswers: [0],
    explanation: "Chez la femme enceinte > 20 SA, l'utérus gravide comprime la VCI et l'aorte (collapsus du retour veineux). Le déplacement utérin à gauche est immédiat. Si la réanimation échoue à 4 minutes, la césarienne per-mortem immédiate (dans les 5 minutes) décomprime la circulation maternelle et peut sauver à la fois la mère et l'enfant.",
    clinicalPearl: "ACR de la femme enceinte > 20 SA : Déplacement latéral gauche de l'utérus + Césarienne per-mortem dès la 5e minute si pas de RACS !"
  },

  // 5 Cas Cliniques
  {
    id: 'cas-acr-01',
    courseId: 'crs-acr',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : L'arrêt cardiaque extra-hospitalier au supermarché\nUn homme de 56 ans s'effondre brutalement dans les rayons d'un centre commercial. Un étudiant en médecine présent sur place constate en moins de 10 secondes : victime inconsciente, ne répondant pas aux stimulations, et ne respirant pas (présence de quelques gasps intermittents inefficaces sans pouls carotidien palpable).\nQ1. Quelles sont les deux premières actions immédiates et indissociables à réaliser simultanément ?\nQ2. Le DAE public apporté par les vigiles annonce 'Choc indiqué'. Quelle est la conduite à tenir immédiate ?",
    options: [
      "A) Alerter immédiatement les secours (15/112) en demandant un DAE ET débuter instantanément le massage cardiaque externe (30:2) / S'assurer que personne ne touche la victime, délivrer le choc, et reprendre IMMÉDIATEMENT le MCE sans attendre.",
      "B) Mettre la victime en Position Latérale de Sécurité (PLS) et attendre les pompiers.",
      "C) Donner 5 claques dans le dos pour désobstruction de corps étranger.",
      "D) Pratiquer le bouche-à-bouche isolé sans massage.",
      "E) Vérifier les pupilles avec une lampe torche."
    ],
    correctAnswers: [0],
    explanation: "Face à une victime inconsciente qui ne respire pas (ou ne fait que des gasps), l'alerte précoce (avec demande de DAE) et le début immédiat du MCE sont prioritaires. Dès que le DAE est prêt et analyse une FV ('Choc conseillé'), le choc est délivré en toute sécurité, suivi immédiatement de 2 minutes de MCE sans interruption.",
    clinicalPearl: "ACR témoigné : Alerte + DAE + MCE immédiat (30:2). Dès le choc délivré → Reprise immédiate du MCE sans contrôler le pouls."
  },
  {
    id: 'cas-acr-02',
    courseId: 'crs-acr',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'algorithme de la Fibrillation Ventriculaire réfractaire\nLe SMUR prend en charge un homme de 50 ans en arrêt cardiaque sur syndrome coronarien aigu. Le tracé montre une Fibrillation Ventriculaire à grosses mailles. Un 1er choc de 200 J biphasique est délivré avec reprise de 2 min de MCE. À la 2e analyse, la FV persiste : 2e choc délivré + MCE repris et pose d'une VVP. À la 4e minute (3e analyse), la FV persiste toujours. Un 3e choc est délivré et le MCE est repris immédiatement.\nQ1. Quels médicaments de réanimation doivent être injectés immédiatement après ce 3e choc ?\nQ2. Quelle est la cause sous-jacente la plus fréquente à traiter dès le RACS ?",
    options: [
      "A) Adrénaline 1 mg IVD ET Amiodarone 300 mg IVD (diluée dans du G5%) / Occlusion coronaire aiguë aiguë (STEMI) nécessitant un transfert direct en coronarographie d'urgence.",
      "B) Atropine 3 mg et Bicarbonates de sodium 250 mL.",
      "C) Furosémide 80 mg et potassium 2 g IV direct.",
      "D) Digoxine 0,5 mg et Lidocaïne 500 mg.",
      "E) Céfotaxime 2 g en perfusion lente."
    ],
    correctAnswers: [0],
    explanation: "Dans le protocole de FV/TV sans pouls réfractaire après le 3e choc : on injecte l'Adrénaline 1 mg (renouvelée toutes les 3-5 min) et l'Amiodarone 300 mg en bolus. La cause numéro 1 d'ACR par FV chez l'homme d'âge moyen est l'ischémie coronaire aiguë (occlusion d'une artère coronaire), justifiant l'angioplastie primaire immédiate.",
    clinicalPearl: "FV réfractaire après 3e choc = Adrénaline 1 mg + Amiodarone 300 mg bolus pendant le MCE. Penser à l'occlusion coronaire !"
  },
  {
    id: 'cas-acr-03',
    courseId: 'crs-acr',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : L'arrêt en Activité Électrique Sans Pouls (AESP)\nUne femme de 64 ans hospitalisée en chirurgie orthopédique présente un arrêt cardiaque brutal à J5 d'une prothèse de hanche. Le moniteur défibrillateur montre des complexes QRS fins et réguliers à 110 bpm mais il n'y a STRICTEMENT AUCUN POULS palpable aux carotides ni aux fémorales (AESP). Les veines jugulaires sont extrêmement turgescentes.\nQ1. Faut-il délivrer un choc électrique externe sur ce tracé d'AESP ?\nQ2. Quelle étiologie obstructive majeure (règle des 4T) doit être suspectée en priorité et traitée ?",
    options: [
      "A) NON, aucun choc électrique n'est indiqué (rythme non défibrillable : MCE continu + Adrénaline 1 mg d'emblée) / Embolie pulmonaire massive (thrombolyse systémique salvatrice de sauvetage par rt-PA).",
      "B) OUI, choc électrique immédiat à 360 Joules de principe.",
      "C) OUI, défibrillation répétée 3 fois consécutives.",
      "D) Choc septique péritonéal / Perfusion d'antibiotiques sans massage.",
      "E) Rupture d'anévrisme cérébral / Dérivation ventriculaire externe."
    ],
    correctAnswers: [0],
    explanation: "L'AESP et l'asystolie sont des rythmes NON DÉFIBRILLABLES : le choc est inutile et destructeur. La conduite repose sur le MCE continu de haute qualité, l'injection précoce d'Adrénaline 1 mg toutes les 3 à 5 min, et la recherche/traitement étiologique (embolie pulmonaire massive chez cette opérée récente avec turgescence jugulaire → thrombolyse d'urgence).",
    clinicalPearl: "AESP = Pas de choc ! MCE continu + Adrénaline 1 mg d'emblée + Traiter la cause (EP massive → Thrombolyse)."
  },
  {
    id: 'cas-acr-04',
    courseId: 'crs-acr',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : L'hypothermie accidentelle profonde\nUn randonneur de 28 ans est retrouvé enseveli sous une avalanche en montagne. Il est extrait après 40 minutes. Le patient est aréactif, rigide, cyanosé, sans respiration décelable. La température centrale tympanique/œsophagienne est mesurée à 24°C. L'ECG montre une fibrillation ventriculaire à ondes très lentes.\nQ1. Quel adage célèbre guide la réanimation de l'arrêt cardiaque en hypothermie accidentelle ?\nQ2. Quelles sont les particularités de réanimation tant que la température centrale reste inférieure à 30°C ?",
    options: [
      "A) 'Nul n'est mort tant qu'il n'est pas réchauffé et mort' (No one is dead until warm and dead) / Limiter à un maximum de 3 chocs électriques et suspendre l'adrénaline et l'amiodarone (métabolisme ralenti et risque d'accumulation toxique) tout en poursuivant le MCE et le réchauffement actif extracorporel (ECLS).",
      "B) Déclarer le décès immédiat en raison de la rigidité cadavérique apparente.",
      "C) Injecter 10 mg d'adrénaline en bolus toutes les minutes.",
      "D) Pratiquer 15 chocs consécutifs sans masser.",
      "E) Donner des antipyrétiques en perfusion."
    ],
    correctAnswers: [0],
    explanation: "En hypothermie profonde (< 30°C), le myocarde est réfractaire à la défibrillation et les catécholamines ne sont pas métabolisées (risque de toxicité massive au réchauffement). On limite les chocs à 3, on suspend les drogues sous 30°C, et on réchauffe activement (idéalement par ECMO/ECLS). Un patient ne peut être déclaré décédé qu'après réchauffement au-delà de 32-35°C sans RACS.",
    clinicalPearl: "Hypothermie profonde (< 30°C) : 'Pas mort tant qu'il n'est pas réchauffé et mort'. Pas de drogues, MCE continu et réchauffement ECLS."
  },
  {
    id: 'cas-acr-05',
    courseId: 'crs-acr',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le coma post-RACS et la neuro-protection\nUn homme de 52 ans réanimé avec succès d'une FV inaugurale sur STEMI après 12 minutes de RCP arrive en réanimation après une angioplastie primaire réussie de l'IVA. Il est intubé, ventilé, sédaté, normotendu sous faibles doses de noradrénaline (PAM à 72 mmHg). L'ECG post-angioplastie montre la régression du sus-décalage. À l'arrêt des curares, il reste comateux (score de Glasgow moteur à 2).\nQ1. Quelle stratégie de contrôle de la température (TTM) doit être mise en œuvre immédiatement ?\nQ2. Quel délai minimal d'observation sans sédation est requis avant de pouvoir porter une conclusion pronostique neurologique fiable ?",
    options: [
      "A) Contrôle ciblé de la température (TTM) maintenant une température constante entre 32°C et 36°C ou normothermie stricte (< 37,5°C) avec prévention rigoureuse de la fièvre pendant au moins 72 heures / Évaluation pronostique neurologique multimodale différée au moins à 72 heures post-RACS.",
      "B) Réchauffement forcé à 39°C pendant 24h / Évaluation pronostique définitive à H2.",
      "C) Arrêt immédiat de la réanimation et extubation à H6.",
      "D) Hypothermie profonde à 20°C pendant 1 semaine.",
      "E) Prescription d'Aspirine forte dose sans sédation."
    ],
    correctAnswers: [0],
    explanation: "La prise en charge neuro-protectrice post-ACR repose sur le maintien d'une normothermie stricte (36°C-37,5°C) ou hypothermie ciblée (32-36°C) et la lutte absolue contre toute hyperthermie pendant 72h. Le pronostic neurologique ne peut en aucun cas être posé précocement : il requiert au moins 72 heures d'évolution en l'absence d'imprégnation sédative, combinant examen clinique, EEG, biomarqueurs (NSE) et potentiels évoqués (PES).",
    clinicalPearl: "Post-RACS : Contrôle ciblé de la température (prévention de la fièvre) et évaluation pronostique multimodale JAMAIS avant 72 heures !"
  }
];
