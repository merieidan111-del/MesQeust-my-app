import { Question } from '../types/medical';

export const CARDIOLOGY_QUESTIONS_PART5: Question[] = [
  // ==========================================
  // ENDOCARDITE INFECTIEUSE (crs-endocardite)
  // ==========================================
  {
    id: 'q-endo-01',
    courseId: 'crs-endocardite',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le micro-organisme le plus fréquemment responsable de l'endocardite infectieuse sur valve native dans les pays industrialisés ?",
    options: [
      "Streptococcus viridans",
      "Staphylococcus aureus",
      "Enterococcus faecalis",
      "Pseudomonas aeruginosa",
      "Candida albicans"
    ],
    correctAnswers: [1],
    explanation: "Staphylococcus aureus est devenu le germe prédominant sur valve native et sur prothèse précoce, en raison de l'augmentation des procédures invasives et des bactériémies nosocomiales.",
    clinicalPearl: "Staphylococcus aureus = Premier germe de l'endocardite aiguë sévère et destructrice."
  },
  {
    id: 'q-endo-02',
    courseId: 'crs-endocardite',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les critères modifiés de Duke, lequel des éléments suivants constitue un critère majeur ?",
    options: [
      "Fièvre >= 38°C",
      "Présence de faux panaris d'Osler",
      "Mise en évidence d'une végétation valvulaire à l'échocardiographie",
      "Glomérulonéphrite",
      "Phénomènes emboliques artériels majeurs"
    ],
    correctAnswers: [2],
    explanation: "Les critères majeurs de Duke comprennent : hémocultures positives pour germes typiques et preuve d'atteinte endocardique à l'imagerie (végétation, abcès, perforation, désinsertion prothétique récente).",
    clinicalPearl: "Critères majeurs de Duke = Hémocultures positives répétées + Imagerie cardiaque positive (ETO/ETT)."
  },
  {
    id: 'q-endo-03',
    courseId: 'crs-endocardite',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle est l'indication chirurgicale en extrême urgence (< 24h) au cours d'une endocardite infectieuse ?",
    options: [
      "Végétation mobile de 11 mm sans embolie",
      "Insuffisance aortique aiguë avec insuffisance cardiaque réfractaire et choc cardiogénique",
      "Fièvre persistante après 48h d'antibiothérapie adaptée",
      "Endocardite à Enterococcus faecalis bien tolérée",
      "Tache de Janeway aux paumes des mains"
    ],
    correctAnswers: [1],
    explanation: "L'insuffisance cardiaque congestive réfractaire secondaire à une destruction valvulaire aiguë (insuffisance aortique ou mitrale massive) impose une chirurgie en extrême urgence (< 24 heures) pour sauver la vie du patient.",
    clinicalPearl: "Chirurgie en extrême urgence = Choc cardiogénique / OAP réfractaire sur régurgitation aiguë."
  },
  {
    id: 'q-endo-04',
    courseId: 'crs-endocardite',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle modalité d'échocardiographie est la plus sensible pour détecter les végétations de petite taille (< 5 mm) et les abcès péri-annulaires ?",
    options: [
      "Échocardiographie transthoracique (ETT)",
      "Échocardiographie transœsophagienne (ETO)",
      "Échocardiographie de stress à la dobutamine",
      "Échocardiographie d'effort",
      "Doppler pulsé transcrânien"
    ],
    correctAnswers: [1],
    explanation: "L'ETO présente une sensibilité supérieure à 90-95% pour la détection des végétations < 5 mm, des abcès de l'anneau, des perforations valvulaires et des désinsertions de prothèse.",
    clinicalPearl: "Suspicion d'endocardite avec ETT négative ou prothèse valvulaire = Réaliser une ETO systématique."
  },
  {
    id: 'q-endo-05',
    courseId: 'crs-endocardite',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant un nodule d'Osler (faux panaris), quel est le mécanisme sous-jacent ?",
    options: [
      "Embolie septique bactérienne directe",
      "Dépôt de complexes immuns circulants",
      "Effet indésirable de l'antibiothérapie",
      "Thrombopénie auto-immune",
      "Rupture d'un anévrisme mycotique"
    ],
    correctAnswers: [1],
    explanation: "Les nodules d'Osler (douloureux, à la pulpe des doigts) sont des manifestations immunologiques causées par le dépôt localisé de complexes immuns, contrairement aux lésions de Janeway qui sont d'origine embolique septique.",
    clinicalPearl: "Nodule d'Osler = Douloureux + Immunologique ; Érythème de Janeway = Indolore + Embolique."
  },
  {
    id: 'q-endo-06',
    courseId: 'crs-endocardite',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel schéma antibiotique empirique est recommandé chez un patient suspect d'endocardite subaiguë sur valve native en attente des résultats d'hémocultures ?",
    options: [
      "Amoxicilline seule per os",
      "Amoxicilline/Acide clavulanique + Gentamicine",
      "Ampicilline + Céfazoline",
      "Ciprofloxacine + Rifampicine",
      "Métronidazole + Amikacine"
    ],
    correctAnswers: [1],
    explanation: "Chez un patient stable sur valve native, l'association d'une pénicilline anti-streptococcique ou amoxicilline-acide clavulanique (ou ampicilline) combinée à un aminoside (gentamicine) offre une couverture bactéricide synergique optimale.",
    clinicalPearl: "Valve native subaiguë = Amoxicilline/clavulanate ou Ampicilline + Gentamicine."
  },
  {
    id: 'q-endo-07',
    courseId: 'crs-endocardite',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La survenue d'un allongement de l'intervalle PR chez un patient traité pour endocardite de la valve aortique doit immédiatement faire suspecter :",
    options: [
      "Une hypokaliémie",
      "Un abcès de l'anneau aortique comprimant le faisceau de His",
      "Une toxicité de la vancomycine",
      "Une sténose pulmonaire fonctionnelle",
      "Une embolie pulmonaire"
    ],
    correctAnswers: [1],
    explanation: "L'anneau aortique est en continuité directe avec les voies de conduction auriculo-ventriculaires. Tout trouble de conduction nouveau (allongement de PR ou BAV) traduit l'extension péri-valvulaire sous forme d'abcès septal.",
    clinicalPearl: "Endocardite aortique + Nouveau BAV ou allongement PR = Abcès péri-annulaire imposant l'ETO urgente."
  },
  {
    id: 'cas-endo-01',
    courseId: 'crs-endocardite',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Fièvre et souffle nouveau chez un porteur de pacemaker\nUn homme de 62 ans porteur d'un stimulateur cardiaque double chambre depuis 6 mois consulte pour une fièvre à 38,5°C oscillante depuis 3 semaines sans foyer évident. L'auscultation cardiaque retrouve un souffle holosystolique au foyer xiphoïdien s'accentuant à l'inspiration.\nQ1. Quelle valve est concernée ?\nQ2. Quel examen doit-on réaliser pour confirmer l'endocardite sur sonde ?",
    options: [
      "Valve mitrale / Scanner coronaire",
      "Valve aortique / Coronarographie",
      "Valve tricuspide (signe de Rivero-Carvallo) / Hémocultures répétées et ETO",
      "Valve pulmonaire / Radiographie thoracique",
      "Valve mitrale / IRM cérébrale"
    ],
    correctAnswers: [2],
    explanation: "L'accentuation à l'inspiration profonde d'un souffle d'insuffisance tricuspide est le signe de Rivero-Carvallo. L'infection sur sonde de stimulateur est une urgence diagnostique nécessitant hémocultures multiples et ETO pour visualiser les végétations tricuspides ou sur la sonde.",
    clinicalPearl: "Fièvre inexpliquée + Porteur de prothèse ou sonde = Évoquer systématiquement l'endocardite."
  },
  {
    id: 'cas-endo-02',
    courseId: 'crs-endocardite',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : Déficit neurologique fébrile\nUne patiente de 35 ans suivie pour prolapsus valvulaire mitral consulte pour un déficit moteur de l'hémicorps droit d'installation brutale associé à une fièvre à 38,8°C. L'auscultation retrouve un souffle systolique à la pointe.\nQuelle est la prise en charge immédiate ?",
    options: [
      "Thrombolyse intraveineuse immédiate par rtPA",
      "IRM cérébrale et ETO pour rechercher un AVC ischémique cardio-embolique septique et contre-indiquer la thrombolyse",
      "Ponction lombaire immédiate",
      "Anticoagulation par héparine à dose curative sans imagerie",
      "Mise sous aspirine seule et retour à domicile"
    ],
    correctAnswers: [1],
    explanation: "L'AVC au cours d'une endocardite est d'origine cardio-embolique septique avec haut risque de transformation hémorragique. La thrombolyse intraveineuse est formellement contre-indiquée en raison du risque de saignement cérébral cataclysmique.",
    clinicalPearl: "AVC ischémique sur endocardite = Thrombolyse formellement contre-indiquée !"
  },

  // ==========================================
  // HYPERTENSION ARTERIELLE (crs-hta)
  // ==========================================
  {
    id: 'q-hta-01',
    courseId: 'crs-hta',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les recommandations ESC/ESH, quel seuil tensionnel au cabinet médical définit l'hypertension artérielle de grade 1 ?",
    options: [
      "PAS 130-139 mmHg et/ou PAD 85-89 mmHg",
      "PAS 140-159 mmHg et/ou PAD 90-99 mmHg",
      "PAS 160-179 mmHg et/ou PAD 100-109 mmHg",
      "PAS >= 180 mmHg et/ou PAD >= 110 mmHg",
      "PAS >= 150 mmHg isolée"
    ],
    correctAnswers: [1],
    explanation: "Le grade 1 d'HTA correspond à une PAS de 140 à 159 mmHg et/ou une PAD de 90 à 99 mmHg mesurée au cabinet lors d'au moins 2 consultations distinctes.",
    clinicalPearl: "Grade 1 HTA : 140-159 / 90-99 mmHg."
  },
  {
    id: 'q-hta-02',
    courseId: 'crs-hta',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la stratégie médicamenteuse initiale recommandée chez la majorité des hypertendus essentiels non compliqués ?",
    options: [
      "Monothérapie par Bêtabloquant",
      "Bithérapie en monopilule associant un bloqueur du SRA (IEC ou ARA2) à un inhibiteur calcique ou un diurétique thiazidique",
      "Trithérapie d'emblée à pleine dose",
      "Monothérapie par Diurétique de l'anse",
      "Régime sans sel isolé pendant 1 an sans médicament"
    ],
    correctAnswers: [1],
    explanation: "Les recommandations préconisent une bithérapie synergique en monopilule (pour favoriser l'observance) associant un IEC ou ARA2 à un inhibiteur calcique dihydropyridinique ou un thiazidique/apparenté.",
    clinicalPearl: "Première ligne HTA = Bithérapie en monopilule (IEC/ARA2 + IC ou Thiazidique)."
  },
  {
    id: 'q-hta-03',
    courseId: 'crs-hta',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Chez un patient de 45 ans avec HTA résistante et hypokaliémie spontanée à 3,1 mmol/L, quelle cause secondaire doit être explorée en premier lieu ?",
    options: [
      "Phéochromocytome",
      "Hyperaldostéronisme primaire (Syndrome de Conn)",
      "Coarctation de l'aorte",
      "Insuffisance surrénale",
      "Hyperthyroïdie"
    ],
    correctAnswers: [1],
    explanation: "L'association HTA résistante + hypokaliémie oriente en première intention vers un hyperaldostéronisme primaire (adénome de Conn ou hyperplasie bilatérale). Le dépistage repose sur le rapport Aldostéronémie / Rénine plasmatique.",
    clinicalPearl: "HTA + Hypokaliémie sans diurétique = Dépister l'hyperaldostéronisme primaire (rapport Aldo/Rénine)."
  },
  {
    id: 'q-hta-04',
    courseId: 'crs-hta',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel effet secondaire classique doit faire interrompre un traitement par IEC (comme le Périndopril) au profit d'un ARA2 ?",
    options: [
      "Toux sèche rebelle par accumulation de bradykinine",
      "Œdèmes malléolaires par vasodilatation précapillaire",
      "Hypokaliémie sévère",
      "Gynécomastie",
      "Bradycardie sinusale"
    ],
    correctAnswers: [0],
    explanation: "Les IEC inhibent la dégradation des kinines, entraînant une toux sèche incessante chez 10-15% des patients. Le remplacement par un ARA2 (qui bloque sélectivement les récepteurs AT1 sans affecter la bradykinine) résout le problème.",
    clinicalPearl: "Toux sèche sous IEC = Remplacer par un ARA II."
  },
  {
    id: 'cas-hta-01',
    courseId: 'crs-hta',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Céphalées violentes et poussée tensionnelle\nUne femme de 32 ans consulte pour des céphalées pulsatiles survenant par crises avec palpitations, sueurs profuses et pâleur brutale du visage. Sa tension artérielle mesurée pendant la crise est à 210/115 mmHg.\nQ1. Quelle pathologie suspecter ?\nQ2. Quel dosage biologique confirme le diagnostic ?",
    options: [
      "HTA essentielle / Dosage de la rénine",
      "Phéochromocytome / Dosage des métanéphrines et normétanéphrines libres plasmatiques ou urinaires",
      "Migraine commune / Sérologie virale",
      "Crise d'angoisse / Cortisolémie",
      "Pré-éclampsie / Protéinurie des 24h"
    ],
    correctAnswers: [1],
    explanation: "La triade de Ménard (Céphalées, Palpitations, Sueurs) associée à une HTA paroxystique et pâleur est très évocatrice d'un phéochromocytome. Le test le plus sensible est le dosage des métanéphrines fractionnées.",
    clinicalPearl: "Triade de Ménard (Céphalées + Sueurs + Palpitations) = Phéochromocytome."
  },

  // ==========================================
  // HYPERTENSION ARTERIELLE PULMONAIRE (crs-htap)
  // ==========================================
  {
    id: 'q-htap-01',
    courseId: 'crs-htap',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les recommandations ESC/ERS 2022, la définition hémodynamique au cathétérisme cardiaque droit de l'HTAP pré-capillaire est :",
    options: [
      "PAPm > 20 mmHg, PAP d'occlusion (PAPO) <= 15 mmHg et Résistances vasculaires pulmonaires (RVP) > 2 unités Wood",
      "PAPm > 25 mmHg, PAPO > 15 mmHg et RVP < 1 unité Wood",
      "PAPm > 30 mmHg isolée à l'échocardiographie",
      "PAPO > 20 mmHg avec PAPm normale",
      "Index cardiaque < 2 L/min/m² sans élévation de PAPm"
    ],
    correctAnswers: [0],
    explanation: "La nouvelle définition hémodynamique requiert au cathétérisme droit au repos : PAPm > 20 mmHg, PAPO <= 15 mmHg (confirmant le caractère pré-capillaire) et des résistances vasculaires pulmonaires RVP > 2 UW.",
    clinicalPearl: "Critères HTAP pré-capillaire : PAPm > 20 mmHg + PAPO <= 15 mmHg + RVP > 2 UW."
  },
  {
    id: 'q-htap-02',
    courseId: 'crs-htap',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le maître-symptôme fonctionnel inaugurant l'hypertension artérielle pulmonaire ?",
    options: [
      "Douleur thoracique rétro-sternale d'effort",
      "Dyspnée d'effort d'aggravation progressive",
      "Syncope d'effort",
      "Hémoptysie foudroyante",
      "Toux nocturne"
    ],
    correctAnswers: [1],
    explanation: "La dyspnée d'effort progressive, souvent longtemps banalisée ou attribuée à l'asthme ou au déconditionnement, est le premier symptôme présent chez plus de 90% des patients atteints d'HTAP.",
    clinicalPearl: "Dyspnée d'effort inexpliquée avec cœur gauche normal = Dépister l'HTAP à l'écho cardiaque."
  },
  {
    id: 'q-htap-03',
    courseId: 'crs-htap',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel examen d'imagerie est formellement recommandé pour éliminer une hypertension pulmonaire thromboembolique chronique (Groupe 4 ERS) ?",
    options: [
      "Radiographie pulmonaire de face",
      "Scintigraphie pulmonaire de ventilation / perfusion (V/Q)",
      "Coronarographie sélective",
      "IRM cérébrale",
      "Échographie transœsophagienne"
    ],
    correctAnswers: [1],
    explanation: "La scintigraphie de ventilation/perfusion (V/Q) reste le test de dépistage de référence de l'HTP post-embolique (groupe 4). Une scintigraphie normale élimine formellement le diagnostic.",
    clinicalPearl: "Scintigraphie V/Q = Examen clé indispensable pour écarter l'HTP thromboembolique chronique (Groupe 4)."
  },
  {
    id: 'cas-htap-01',
    courseId: 'crs-htap',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Dyspnée d'effort et signes de surcharge droite chez une jeune femme\nUne patiente de 28 ans sans antécédent consulte pour une dyspnée d'effort classe III avec malaises lipothymiques aux efforts. L'examen physique retrouve un éclat de B2 au foyer pulmonaire, une turgescence jugulaire et un reflux hépato-jugulaire. L'échocardiographie objective un ventricule droit dilaté avec septum paradoxal et une vitesse de régurgitation tricuspide estimée à 3,8 m/s.\nQuelle est la prise en charge diagnostique et étiologique de référence ?",
    options: [
      "Traiter par diurétiques seuls et surveillance",
      "Adresser en centre expert pour cathétérisme cardiaque droit avec test de vasoréactivité et bilan étiologique complet",
      "Prescrire une thrombolyse immédiate",
      "Réaliser une pose de stimulateur cardiaque",
      "Donner des bêtabloquants à forte dose"
    ],
    correctAnswers: [1],
    explanation: "Devant une suspicion forte d'HTAP chez une femme jeune, le cathétérisme cardiaque droit en centre de compétence est indispensable pour confirmer l'hémodynamique, tester la vasoréactivité aiguë à l'oxyde nitrique (NO) et guider la thérapie ciblée.",
    clinicalPearl: "Cathétérisme cardiaque droit = Étape obligatoire pour le diagnostic de certitude et la vasoréactivité."
  }
];
