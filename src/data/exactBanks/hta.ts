import { Question } from '../../types/medical';

export const HTA_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-hta-01',
    courseId: 'crs-hta',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les recommandations ESC 2024, un patient de 45 ans présente une PA de 132/82 mmHg en consultation. L'automesure tensionnelle (AMT) moyenne est de 128/78 mmHg. Quel est le statut tensionnel de ce patient et quelle est la principale implication ?",
    options: [
      "a) HTA confirmée, instauration immédiate d'un traitement médicamenteux.",
      "b) Pression artérielle non élevée, simple surveillance.",
      "c) Pression artérielle élevée confirmée, nécessité d'évaluer le risque cardiovasculaire (RCV).",
      "d) HTA blouse blanche, pas de traitement médicamenteux nécessaire.",
      "e) HTA masquée, instauration immédiate d'un traitement médicamenteux."
    ],
    correctAnswers: [2],
    explanation: "La PA en consultation est dans la catégorie \"PA élevée\" (120-139/70-89). Confirmée par l'AMT (≥ 120/70 et < 135/85), le diagnostic est \"PA élevée\". La suite de la prise en charge dépend de l'évaluation du RCV global (score SCORE2) pour décider d'un traitement médicamenteux.",
    clinicalPearl: "Recommandations ESC 2024 : Nouvelle catégorie \"PA élevée\" (120-139 / 70-89) nécessitant l'évaluation du score SCORE2."
  },
  {
    id: 'q-hta-02',
    courseId: 'crs-hta',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel mécanisme physiopathologique justifie principalement l'utilisation des inhibiteurs calciques dans l'HTA essentielle ?",
    options: [
      "a) Inhibition de la rénine.",
      "b) Réduction de la volémie par élimination sodée.",
      "c) Blocage des canaux calciques vasculaires lisses, entraînant une vasodilatation.",
      "d) Inhibition centrale du système nerveux sympathique.",
      "e) Antagonisme de l'aldostérone."
    ],
    correctAnswers: [2],
    explanation: "Les inhibiteurs calciques agissent principalement sur la composante vasculaire de l'HTA en provoquant une vasodilatation artériolaire, réduisant ainsi les résistances artérielles systémiques (RAS). Ils ne sont pas diurétiques et n'agissent pas principalement sur le système nerveux sympathique.",
    clinicalPearl: "Inhibiteurs calciques dihydropyridiniques = Vasodilatateurs artériolaires par blocage des canaux calciques L vasculaires."
  },
  {
    id: 'q-hta-03',
    courseId: 'crs-hta',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient noir de 50 ans avec une HTA nouvellement diagnostiquée, sans comorbidité, quelle classe thérapeutique est souvent considérée comme particulièrement efficace en première intention selon les particularités ethniques mentionnées ?",
    options: [
      "a) Bêta-bloquants.",
      "b) Inhibiteurs de l'enzyme de conversion (IEC).",
      "c) Diurétiques thiazidiques.",
      "d) Antagonistes des récepteurs de l'angiotensine II (ARA2).",
      "e) Inhibiteurs calciques non dihydropyridiniques."
    ],
    correctAnswers: [2],
    explanation: "Le cours mentionne que certains sujets noirs présenteraient une anomalie de la réabsorption rénale du sodium, rendant les diurétiques thiazidiques particulièrement efficaces pour contrôler l'HTA dans cette population.",
    clinicalPearl: "HTA du sujet noir : Diurétiques thiazidiques et inhibiteurs calciques particulièrement efficaces en 1ère intention."
  },
  {
    id: 'q-hta-04',
    courseId: 'crs-hta',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors de la mesure de la PA en consultation, vous constatez une différence de pression systolique de 25 mmHg entre les deux bras. Quelle est l'interprétation et l'action correcte ?",
    options: [
      "a) C'est un artefact fréquent, ignorer et prendre la valeur la plus basse.",
      "b) C'est une anisotension évoquant une sténose sous-clavière, utiliser le bras avec la PA la plus élevée comme référence.",
      "c) C'est le signe d'une insuffisance aortique, demander une échocardiographie en urgence.",
      "d) Cela confirme une HTA résistante, initier une trithérapie.",
      "e) C'est normal chez le sujet âgé, poursuivre le bilan habituel."
    ],
    correctAnswers: [1],
    explanation: "Une différence de PAS > 15-20 mmHg entre les deux bras (anisotension) est anormale et peut révéler une sténose artérielle (ex: sous-clavière). La valeur de référence pour le suivi doit être prise sur le bras avec la PA la plus élevée.",
    clinicalPearl: "Anisotension > 15 mmHg = Sténose artérielle sous-clavière sous-jacente ; référence = bras le plus haut."
  },
  {
    id: 'q-hta-05',
    courseId: 'crs-hta',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen complémentaire systématique de première intention n'est PAS recommandé devant une HTA confirmée selon le cours ?",
    options: [
      "a) Ionogramme sanguin (Na+, K+).",
      "b) Créatininémie et DFG.",
      "c) Dosage de l'aldostérone et de la rénine plasmatique.",
      "d) Échocardiographie Doppler.",
      "e) Bilan lipidique à jeun."
    ],
    correctAnswers: [3],
    explanation: "L'échocardiographie n'est pas un examen systématique de première intention. Elle est réservée à l'évaluation du retentissement cardiaque (HVG) en cas de suspicion clinique ou électrique (ECG), ou pour rechercher une cardiopathie.",
    clinicalPearl: "Bilan initial systématique : \"GIC LECTH\" (Glycémie, Iono, Créat, Lipides, ECG, TSH). L'écho n'est pas systématique."
  },
  {
    id: 'q-hta-06',
    courseId: 'crs-hta',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le système rénine-angiotensine-aldostérone (SRAA) contribue à l'HTA par :",
    options: [
      "a) Une diminution de la volémie et une vasodilatation.",
      "b) Une augmentation de la volémie et une vasoconstriction.",
      "c) Une inhibition de la réabsorption du sodium.",
      "d) Une diminution de la fréquence cardiaque.",
      "e) Une augmentation de la sécrétion de monoxyde d'azote (NO)."
    ],
    correctAnswers: [1],
    explanation: "L'hyperactivité du SRAA augmente la PA via l'angiotensine II (vasoconstricteur puissant → ↑RAS) et l'aldostérone (rétention hydrosodée → ↑volémie).",
    clinicalPearl: "SRAA : Angiotensine II (vasoconstriction artériolaire) + Aldostérone (rétention hydrosodée rénale)."
  },
  {
    id: 'q-hta-07',
    courseId: 'crs-hta',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient avec une \"PA élevée\" confirmée par MAPA a un score SCORE2 de 8%. Que faut-il faire ensuite ?",
    options: [
      "a) Instaurer immédiatement une bithérapie antihypertensive.",
      "b) Rassurer le patient et le revoir dans 5 ans.",
      "c) Affiner le RCV en recherchant des \"modificateurs de risque\" non inclus dans SCORE2.",
      "d) Adresser le patient en urgence à un cardiologue.",
      "e) Démarrer un traitement par statine uniquement."
    ],
    correctAnswers: [2],
    explanation: "Un SCORE2 entre 5 et 10% indique un RCV modéré. Il est recommandé d'affiner cette estimation en recherchant des éléments comme des antécédents familiaux précoces, de mauvaises conditions socio-économiques, un score calcique coronarien élevé, etc., qui peuvent reclasser le patient en RCV élevé.",
    clinicalPearl: "SCORE2 modéré (5-10%) : Affiner avec les modificateurs de risque (calcium score, ATCD précoces)."
  },
  {
    id: 'q-hta-08',
    courseId: 'crs-hta',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'hypotension orthostatique est recherchée systématiquement chez :",
    options: [
      "a) Tous les patients de plus de 50 ans.",
      "b) Les patients sous bêta-bloquants.",
      "c) Les sujets âgés et les patients sous diurétiques.",
      "d) Les patients avec un diabète de type 1.",
      "e) Uniquement en cas de symptômes."
    ],
    correctAnswers: [2],
    explanation: "La recherche d'une hypotension orthostatique (mesure de la PA couché et debout) est particulièrement importante chez les sujets âgés et les patients sous traitement diurétique, en raison du risque de chute.",
    clinicalPearl: "Recherche d'hypotension orthostatique : Systématique chez le sujet âgé et sous diurétiques."
  },
  {
    id: 'q-hta-09',
    courseId: 'crs-hta',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle association médicamenteuse est formellement contre-indiquée dans le traitement de l'HTA ?",
    options: [
      "a) IEC + Diurétique thiazidique.",
      "b) IEC + ARA2.",
      "c) Inhibiteur calcique + Bêta-bloquant.",
      "d) ARA2 + Diurétique thiazidique.",
      "e) Bêta-bloquant + Diurétique thiazidique."
    ],
    correctAnswers: [1],
    explanation: "L'association IEC + ARA2 est formellement contre-indiquée en raison d'un risque majoré d'effets indésirables, notamment d'insuffisance rénale aiguë et d'hyperkaliémie, sans bénéfice supplémentaire démontré.",
    clinicalPearl: "Association interdite absolue : IEC + ARA2 (ou aliskiren) = toxicité rénale et hyperkaliémie sans bénéfice."
  },
  {
    id: 'q-hta-10',
    courseId: 'crs-hta',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le diagnostic d'HTA résistante est évoqué lorsque :",
    options: [
      "a) La PA > 120/80 mmHg sous monothérapie.",
      "b) La PA ≥ 140/90 mmHg en consultation malgré une trithérapie bien conduite.",
      "c) La PA est normale en consultation mais élevée à domicile.",
      "d) Le patient présente une intolérance à deux classes de médicaments.",
      "e) La PA n'est contrôlée que sous quadrithérapie."
    ],
    correctAnswers: [1],
    explanation: "L'HTA est dite résistante lorsque la PA reste ≥ 140/90 mmHg en consultation (confirmée par MAPA) malgré une trithérapie optimale (incluant un diurétique) et le respect des règles hygiéno-diététiques, pendant au moins 3 mois.",
    clinicalPearl: "HTA résistante = Non contrôlée sous Trithérapie maximale comprenant obligatoirement un diurétique."
  },
  {
    id: 'q-hta-11',
    courseId: 'crs-hta',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'objectif tensionnel recommandé en consultation pour la majorité des patients hypertendus sous traitement ?",
    options: [
      "a) < 140/90 mmHg.",
      "b) < 130/80 mmHg.",
      "c) Entre 120/70 et 129/79 mmHg.",
      "d) < 150/90 mmHg pour tous.",
      "e) < 120/70 mmHg."
    ],
    correctAnswers: [2],
    explanation: "L'objectif pour la plupart des patients est une PA en consultation comprise entre 120/70 et 129/79 mmHg, sous réserve d'une bonne tolérance.",
    clinicalPearl: "Cible tensionnelle ESC 2024 : 120-129 / 70-79 mmHg chez l'adulte de moins de 80 ans bien toléré."
  },
  {
    id: 'q-hta-12',
    courseId: 'crs-hta',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La mesure ambulatoire de la pression artérielle (MAPA) est supérieure à la mesure en consultation pour :",
    options: [
      "a) Sa simplicité de mise en œuvre.",
      "b) Sa meilleure corrélation avec l'atteinte des organes cibles et le pronostic cardiovasculaire.",
      "c) Son coût moins élevé.",
      "d) Son utilisation pour le diagnostic initial chez tous les patients.",
      "e) Évaluer la fonction endothéliale."
    ],
    correctAnswers: [1],
    explanation: "La PA mesurée hors consultation (MAPA ou AMT) est mieux corrélée au risque cardiovasculaire et à l'atteinte des organes cibles que la mesure ponctuelle en consultation, souvent sujette à l'effet \"blouse blanche\".",
    clinicalPearl: "La MAPA et l'AMT éliminent l'effet blouse blanche et prédisent avec précision la morbi-mortalité."
  },
  {
    id: 'q-hta-13',
    courseId: 'crs-hta',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une hypokaliémie (K+ < 3,5 mmol/L) chez un patient hypertendu non traité doit faire évoquer en priorité :",
    options: [
      "a) Une néphropathie chronique.",
      "b) Un hyperaldostéronisme primaire.",
      "c) Un phéochromocytome.",
      "d) Une coarctation de l'aorte.",
      "e) Une consommation excessive de réglisse."
    ],
    correctAnswers: [1],
    explanation: "Une hypokaliémie spontanée (même isolée) est un signe d'appel classique d'un hyperaldostéronisme primaire (adénome de Conn ou hyperplasie surrénale), où l'excès d'aldostérone entraîne une excrétion urinaire de potassium.",
    clinicalPearl: "HTA + Hypokaliémie spontanée = Hyperaldostéronisme primaire (adénome de Conn jusqu'à preuve du contraire)."
  },
  {
    id: 'q-hta-14',
    courseId: 'crs-hta',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la stratégie thérapeutique initiale recommandée pour la plupart des patients hypertendus nécessitant un traitement médicamenteux ?",
    options: [
      "a) Monothérapie séquentielle.",
      "b) Bithérapie d'emblée, de préférence en une seule prise (SPC).",
      "c) Trithérapie d'emblée.",
      "d) Traitement uniquement par règles hygiéno-diététiques pendant 6 mois.",
      "e) Bêta-bloquant en première intention."
    ],
    correctAnswers: [1],
    explanation: "Il est recommandé de débuter par une bithérapie d'emblée (association de deux classes), idéalement sous forme de combinaison fixe en un seul comprimé (Single-Pill Combination, SPC) pour améliorer l'efficacité et l'observance.",
    clinicalPearl: "Stratégie de 1ère intention : Bithérapie d'emblée en comprimé unique (Single-Pill Combination)."
  },
  {
    id: 'q-hta-15',
    courseId: 'crs-hta',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'une protéinurie > 30 mg/24h chez un patient hypertendu signe :",
    options: [
      "a) Une HTA secondaire d'origine rénale.",
      "b) Un stade précoce de l'atteinte rénale hypertensive.",
      "c) Une glomérulonéphrite aiguë.",
      "d) Un syndrome néphrotique.",
      "e) Une insuffisance rénale terminale."
    ],
    correctAnswers: [1],
    explanation: "Une microalbuminurie (ou une faible protéinurie) est un marqueur précoce de néphropathie hypertensive, reflétant une atteinte du glomérule due à l'HTA, avant même l'élévation de la créatininémie.",
    clinicalPearl: "Microalbuminurie (30-300 mg/24h) = Atteinte infraclinique des organes cibles (reins/vaisseaux)."
  },
  {
    id: 'q-hta-16',
    courseId: 'crs-hta',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La triade classique du phéochromocytome (céphalées pulsatiles, sueurs, palpitations) est décrite par :",
    options: [
      "a) La triade de Beck.",
      "b) La triade de Virchow.",
      "c) La triade de Menard.",
      "d) La triade de Saint-Trinité.",
      "e) La triade de Charcot."
    ],
    correctAnswers: [2],
    explanation: "La triade symptomatique classique du phéochromocytome (céphalées, sueurs, palpitations) est appelée la triade de Menard.",
    clinicalPearl: "Triade de Ménard = Céphalées, Sueurs profuses, Palpitations (spécificité > 90% pour le phéochromocytome)."
  },
  {
    id: 'q-hta-17',
    courseId: 'crs-hta',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'HTA masquée est définie par :",
    options: [
      "a) Une PA normale en consultation et élevée en dehors de la consultation.",
      "b) Une PA élevée en consultation et normale en dehors de la consultation.",
      "c) Une HTA résistante à toute thérapie.",
      "d) Une HTA asymptomatique.",
      "e) Une HTA avec atteinte sévère des organes cibles."
    ],
    correctAnswers: [0],
    explanation: "L'HTA masquée est caractérisée par une PA normale au cabinet médical mais élevée lors des mesures hors consultation (AMT ou MAPA). C'est l'inverse de l'HTA blouse blanche.",
    clinicalPearl: "HTA masquée = Normale au cabinet, élevée à domicile (pronostic péjoratif équivalent à l'HTA permanente)."
  },
  {
    id: 'q-hta-18',
    courseId: 'crs-hta',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La stratégie face à une \"PA élevée\" avec un RCV faible ou modéré est :",
    options: [
      "a) Bithérapie immédiate.",
      "b) Instauration prioritaire et exclusive des règles hygiéno-diététiques.",
      "c) Envoi aux urgences.",
      "d) Bilan d'HTA secondaire complet.",
      "e) Prescription d'aspirine."
    ],
    correctAnswers: [1],
    explanation: "Pour les patients avec une \"PA élevée\" et un RCV faible ou modéré, la première étape est la mise en œuvre stricte des mesures hygiéno-diététiques, avec une réévaluation après 3 à 6 mois.",
    clinicalPearl: "RHD d'abord si risque faible : Réduction du sel (< 5g/j), perte de poids, arrêt du tabac, activité physique."
  },
  {
    id: 'q-hta-19',
    courseId: 'crs-hta',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel paramètre de la MAPA définit l'HTA pour la moyenne sur 24 heures ?",
    options: [
      "a) PAS ≥ 120 mmHg et/ou PAD ≥ 70 mmHg.",
      "b) PAS ≥ 130 mmHg et/ou PAD ≥ 80 mmHg.",
      "c) PAS ≥ 135 mmHg et/ou PAD ≥ 85 mmHg.",
      "d) PAS ≥ 140 mmHg et/ou PAD ≥ 90 mmHg.",
      "e) PAS ≥ 125 mmHg et/ou PAD ≥ 75 mmHg."
    ],
    correctAnswers: [1],
    explanation: "Selon le tableau récapitulatif, le seuil pour l'HTA à la MAPA est une moyenne sur 24 heures ≥ 130/80 mmHg.",
    clinicalPearl: "Seuils HTA : Cabinet >= 140/90 ; AMT >= 135/85 ; MAPA 24h >= 130/80 ; MAPA sommeil >= 120/70."
  },
  {
    id: 'q-hta-20',
    courseId: 'crs-hta',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La pression pulsée (PAS - PAD) est considérée comme élevée et facteur de risque indépendant lorsqu'elle dépasse :",
    options: [
      "a) 40 mmHg.",
      "b) 50 mmHg.",
      "c) 55 mmHg.",
      "d) 60 mmHg.",
      "e) 65 mmHg."
    ],
    correctAnswers: [4],
    explanation: "Le cours indique qu'une pression pulsée > 65 mmHg est élevée. Elle reflète une rigidité artérielle accrue et est un marqueur de risque cardiovasculaire indépendant.",
    clinicalPearl: "Pression pulsée > 65 mmHg = Rigidité artérielle des gros troncs, marqueur pronostique péjoratif indépendant."
  },
  {
    id: 'q-hta-21',
    courseId: 'crs-hta',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'aldostérone plasmatique est élevée et la rénine est basse. Ce bilan évoque :",
    options: [
      "a) Une sténose de l'artère rénale.",
      "b) Un phéochromocytome.",
      "c) Un hyperaldostéronisme primaire.",
      "d) Une maladie de Cushing.",
      "e) Une consommation excessive de sel."
    ],
    correctAnswers: [2],
    explanation: "Un ratio aldostérone/rénine élevé (ou une aldostérone élevée avec une rénine basse) est caractéristique de l'hyperaldostéronisme primaire. L'excès primaire d'aldostérone exerce un rétrocontrôle négatif sur la sécrétion de rénine.",
    clinicalPearl: "Aldostérone ↑ et Rénine ↓ = Hyperaldostéronisme primaire (adénome de Conn)."
  },
  {
    id: 'q-hta-22',
    courseId: 'crs-hta',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La spironolactone est le médicament de choix à ajouter en cas d'HTA résistante sous trithérapie standard car elle est :",
    options: [
      "a) Un diurétique de l'anse puissant.",
      "b) Un bêta-bloquant.",
      "c) Un antagoniste des récepteurs des minéralocorticoïdes.",
      "d) Un inhibiteur calcique.",
      "e) Un vasodilatateur direct."
    ],
    correctAnswers: [2],
    explanation: "La spironolactone est un antagoniste des récepteurs des minéralocorticoïdes (anti-aldostérone). Elle est très efficace dans l'HTA résistante, souvent liée à une hyperactivité persistante de l'aldostérone non bloquée par les IEC/ARA2 seuls.",
    clinicalPearl: "4ème ligne de l'HTA résistante : Spironolactone 25 à 50 mg/j (antagoniste des minéralocorticoïdes)."
  },
  {
    id: 'q-hta-23',
    courseId: 'crs-hta',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La mesure de la PA par automesure (AMT) suit la règle :",
    options: [
      "a) 1 mesure le matin et 1 le soir pendant 7 jours.",
      "b) 2 mesures le matin et 2 le soir pendant 3 jours.",
      "c) 3 mesures consécutives le matin et 3 le soir pendant 3 jours.",
      "d) 1 mesure toutes les 2 heures pendant 24 heures.",
      "e) 3 mesures consécutives le soir seulement."
    ],
    correctAnswers: [2],
    explanation: "La règle standard pour l'AMT est la \"règle des 3\" : 3 mesures consécutives le matin (avant la prise du traitement) et 3 le soir (avant le coucher), espacées de 1 à 2 minutes, pendant 3 jours consécutifs. On calcule ensuite la moyenne des 18 valeurs.",
    clinicalPearl: "\"Règle des 3\" de l'AMT : 3 mesures le matin, 3 mesures le soir, pendant 3 jours consécutifs."
  },
  {
    id: 'q-hta-24',
    courseId: 'crs-hta',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le facteur de risque le plus important pour les maladies cardiovasculaires d'origine athéroscléreuse ?",
    options: [
      "a) Le diabète.",
      "b) Le tabagisme.",
      "c) La dyslipidémie.",
      "d) L'hypertension artérielle.",
      "e) L'obésité."
    ],
    correctAnswers: [3],
    explanation: "Le cours désigne explicitement l'HTA comme le \"facteur de risque (FDR) majeur le plus important des maladies cardiovasculaires d'origine athéroscléreuse (MCVA)\".",
    clinicalPearl: "HTA = Facteur de risque cardiovasculaire n°1 mondial en termes de morbi-mortalité."
  },
  {
    id: 'q-hta-25',
    courseId: 'crs-hta',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient de 80 ans fragile, l'objectif tensionnel sous traitement est :",
    options: [
      "a) Plus strict (< 120/70 mmHg).",
      "b) Identique à celui d'un patient de 50 ans.",
      "c) Moins strict (ex: 140/70 mmHg voire 150/90 mmHg).",
      "d) Seulement contrôler la PAD.",
      "e) Aucun traitement n'est recommandé."
    ],
    correctAnswers: [2],
    explanation: "Chez les personnes âgées fragiles, les objectifs tensionnels sont assouplis pour éviter les effets indésirables comme les hypotensions et les chutes. Une PA cible autour de 140/70 mmHg, voire 150/90 mmHg, est acceptable.",
    clinicalPearl: "Sujet très âgé fragile : Cibles assouplies (140-150 mmHg) pour éviter l'hypoperfusion cérébrale et les chutes."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-hta-01',
    courseId: 'crs-hta',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Le Doute Diagnostique\nM. Kada, 52 ans, enseignant, consulte pour bilan de santé. Il est asymptomatique. En consultation, PA = 138/86 mmHg. Il a un père décédé d'un AVC à 65 ans. Il fume 10 cigarettes/jour. Bilan lipidique normal. Il est sédentaire.\nQ1. Quelle est la première étape diagnostique à proposer pour classer son statut tensionnel ?",
    options: [
      "a) Instaurer un IEC d'emblée.",
      "b) Réaliser une MAPA ou une AMT.",
      "c) Faire un Holter ECG.",
      "d) Le rassurer et le revoir dans 1 an.",
      "e) Demander un écho-doppler rénal."
    ],
    correctAnswers: [1],
    explanation: "Sa PA en consultation est en zone \"PA élevée\". Il est impératif de confirmer ce diagnostic par une mesure hors consultation (MAPA ou AMT) pour distinguer une vraie \"PA élevée\" d'une HTA blouse blanche, ce qui guidera la suite de la prise en charge.",
    clinicalPearl: "\"Consultation douteuse ? MAPA/AMT s'imposent !\" pour confirmer le profil tensionnel ambulatoire."
  },
  {
    id: 'cas-hta-02',
    courseId: 'crs-hta',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'HTA du Sujet Jeune\nMlle. Amina, 28 ans, sans antécédents, consulte pour des céphalées matinales. PA = 165/100 mmHg à deux reprises en consultation. L'examen clinique est normal. Ionogramme : K+ = 3.0 mmol/L (N: 3.5-5.0).\nQ1. Quelle est l'hypothèse principale devant cette présentation ?",
    options: [
      "a) HTA essentielle.",
      "b) Hyperaldostéronisme primaire.",
      "c) Apnée du sommeil.",
      "d) HTA liée au stress.",
      "e) Néphropathie chronique."
    ],
    correctAnswers: [1],
    explanation: "L'association d'une HTA de grade 2 chez une femme jeune et d'une hypokaliémie spontanée est très évocatrice d'un hyperaldostéronisme primaire. Un bilan spécialisé (ratio aldostérone/rénine, scanner surrénalien) est nécessaire.",
    clinicalPearl: "HTA jeune + Hypokaliémie = Bilan d'hyperaldostéronisme primaire (ratio Aldo/Rénine)."
  },
  {
    id: 'cas-hta-03',
    courseId: 'crs-hta',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Le Bilan Systématique\nM. Ahmed, 60 ans, vient d'avoir le diagnostic d'HTA confirmé par MAPA. Il est traité par bithérapie (IEC + ICa). Quel examen de première intention doit-on réaliser pour évaluer le retentissement rénal de son HTA ?",
    options: [
      "a) Échographie rénale.",
      "b) UIV (Urographie IntraVeineuse).",
      "c) Dosage de la créatininémie et recherche d'une protéinurie.",
      "d) Scintigraphie rénale.",
      "e) Ionogramme urinaire sur échantillon."
    ],
    correctAnswers: [2],
    explanation: "Le bilan systématique de première intention pour évaluer le retentissement rénal comprend le dosage de la créatininémie (pour calcul du DFG) et la recherche d'une protéinurie (bandelette urinaire, puis rapport albumine/créatinine si nécessaire). L'échographie n'est pas systématique.",
    clinicalPearl: "Évaluation rénale systématique : Créatininémie avec estimation du DFG + Bandelette urinaire / Microalbuminurie."
  },
  {
    id: 'cas-hta-04',
    courseId: 'crs-hta',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : La Résistance Apparente\nMme. Fatima, 70 ans, est suivie pour HTA. Malgré une trithérapie (ARA2 + ICa + Diurétique thiazidique), sa PA en consultation est à 155/92 mmHg. Elle se plaint de vertiges en se levant.\nQ1. Avant de conclure à une HTA résistante, quelle est la cause la plus probable à investiguer ?",
    options: [
      "a) Phéochromocytome.",
      "b) Mauvaise observance thérapeutique.",
      "c) Coarctation de l'aorte.",
      "d) Sténose bilatérale des artères rénales.",
      "e) Syndrome de Cushing."
    ],
    correctAnswers: [1],
    explanation: "La mauvaise observance est la cause la plus fréquente d'HTA apparemment résistante. Il faut aborder le sujet avec empathie, vérifier la prise réelle des médicaments, les effets secondaires et les barrières (coût, complexité).",
    clinicalPearl: "1ère cause de fausse HTA résistante = Inobservance thérapeutique (à rechercher avant tout examen lourd)."
  },
  {
    id: 'cas-hta-05',
    courseId: 'crs-hta',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : L'Urgence Silencieuse\nM. Rachid, 55 ans, diabétique, connu hypertendu mais irrégulier dans son traitement, consulte pour une asthénie. PA = 148/90 mmHg. ECG : onde T aplatie. Créatininémie = 150 μmol/L (DFG = 45 mL/min/1.73m²).\nQ1. Quel élément du bilan biologique systématique est crucial à demander chez ce patient diabétique avec atteinte rénale ?",
    options: [
      "a) Dosage de la cortisolurie.",
      "b) Rapport albumine/créatinine urinaire.",
      "c) Dosage des catécholamines urinaires.",
      "d) Électrophorèse des protéines urinaires.",
      "e) Dosage de la rénine seule."
    ],
    correctAnswers: [1],
    explanation: "Chez un patient diabétique, même en l'absence de protéinurie détectable à la bandelette, le dosage du rapport albumine/créatinine urinaire est systématique pour dépister une microalbuminurie, qui est un marqueur précoce de néphropathie diabétique et hypertensive.",
    clinicalPearl: "Chez l'hypertendu diabétique : Rapport Albuminurie/Créatininurie (RAC) pour dépistage néphropathique précoce."
  }
];
