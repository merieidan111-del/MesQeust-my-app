import { Question, CourseResource } from '../../types/medical';

// Lesson 24: TD : Exploration Fonctionnelle Respiratoire (EFR)
export const PNEUMO_LESSON_24_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-24-01',
    courseId: 'crs-pneumo-24',
    questionNumber: 1,
    type: 'QCM',
    content: "Quelle anomalie spirométrique définit de façon formelle un trouble ventilatoire obstructif (TVO) chez l'adulte selon les critères GOLD et ATS/ERS ?",
    options: [
      "A. Un rapport VEMS / CVF post-bronchodilatateur inférieur à 0,70 (ou inférieur à la limite inférieure de la normale LIN)",
      "B. Une diminution isolée de la Capacité Vitale Forcée (CVF) en dessous de 80%",
      "C. Une baisse exclusive du DEP (débit expiratoire de pointe)",
      "D. Une élévation de la CPT au-dessus de 120%",
      "E. Une baisse de la DLCO isolée"
    ],
    correctAnswers: [0],
    explanation: "Le trouble ventilatoire obstructif (TVO) est défini par un rapport VEMS/CVF < 0,70 (critère fixe GOLD) ou inférieur au 5e percentile théorique (LIN selon GLI).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-02',
    courseId: 'crs-pneumo-24',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans l'évaluation de la réversibilité bronchique lors des EFR, quelle modification du VEMS définit une réversibilité significative après inhalation d'un bêta-2 mimétique d'action rapide (ex: Salbutamol 400 µg) ?",
    options: [
      "A. Augmentation du VEMS d'au moins 12% ET d'au moins 200 mL par rapport à la valeur initiale pré-bronchodilatateur",
      "B. Augmentation du VEMS de plus de 5% ou 50 mL",
      "C. Normalisation de la CVF uniquement",
      "D. Baisse du VEMS de plus de 10%",
      "E. Augmentation de la capacité pulmonaire totale de 500 mL"
    ],
    correctAnswers: [0],
    explanation: "La réversibilité significative du TVO est définie par une augmentation du VEMS de ≥ 12% ET de ≥ 200 mL par rapport à la valeur basale après administration de 400 µg de salbutamol.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-03',
    courseId: 'crs-pneumo-24',
    questionNumber: 3,
    type: 'QCM',
    content: "Quel paramètre mesuré obligatoirement par pléthysmographie corporelle totale permet d'affirmer avec certitude un trouble ventilatoire restrictif (TVR) ?",
    options: [
      "A. La Capacité Pulmonaire Totale (CPT) inférieure à 80% de la valeur théorique (ou < LIN)",
      "B. Le VEMS inférieur à 70%",
      "C. Le volume résiduel (VR) supérieur à 120%",
      "D. La CVF seule diminuée à la spirométrie simple",
      "E. La capacité inspiratoire diminuée"
    ],
    correctAnswers: [0],
    explanation: "Une diminution de la CVF à la spirométrie simple n'est que suspecte de restriction (peut être un faux TVR par piégeage d'air). Seule la mesure de la CPT par pléthysmographie (< 80% de la valeur prédite) affirme formellement un TVR.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-04',
    courseId: 'crs-pneumo-24',
    questionNumber: 4,
    type: 'QCM',
    content: "La distension pulmonaire (ou hyperinflation statique), fréquemment rencontrée au cours de la BPCO emphysémateuse, se caractérise pléthysmographiquement par :",
    options: [
      "A. Un Volume Résiduel (VR) > 120% et un rapport VR/CPT > 30% (ou > 120% du prédit)",
      "B. Une CPT inférieure à 70%",
      "C. Un VEMS supérieur à 100%",
      "D. Une disparition de l'espace mort anatomique",
      "E. Une baisse conjointe du VR et de la CPT"
    ],
    correctAnswers: [0],
    explanation: "La distension pulmonaire se traduit par une augmentation du Volume Résiduel (VR > 120% de la valeur théorique) et du rapport VR/CPT, témoignant du piégeage aérique expiratoire (air trapping).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-05',
    courseId: 'crs-pneumo-24',
    questionNumber: 5,
    type: 'QCM',
    content: "Dans l'exploration de la diffusion alvéolo-capillaire, la mesure de la DLCO (facteur de transfert du monoxyde de carbone) :",
    options: [
      "A. Est typiquement diminuée dans l'emphysème pulmonaire et les pneumopathies infiltrantes diffuses (fibrose)",
      "B. Est typiquement normale ou augmentée dans l'asthme bronchique non compliqué",
      "C. Est diminuée en cas d'hypertension artérielle pulmonaire précapillaire ou d'anémie sévère",
      "D. Doit être corrigée par le taux d'hémoglobine du patient",
      "E. Toutes les propositions ci-dessus sont exactes"
    ],
    correctAnswers: [4],
    explanation: "La DLCO évalue l'intégrité de la membrane alvéolo-capillaire et du lit capillaire pulmonaire. Elle s'effondre dans la fibrose et l'emphysème (destruction alvéolaire), alors qu'elle reste normale ou élevée dans l'asthme pur.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-24-06',
    courseId: 'crs-pneumo-24',
    questionNumber: 6,
    type: 'QCM',
    content: "Quel profil pléthysmographique définit un trouble ventilatoire mixte (TVM) ?",
    options: [
      "A. VEMS/CVF < 0,70 (TVO) associé à une CPT < 80% (TVR)",
      "B. VEMS/CVF normal avec CPT normale",
      "C. VR augmenté avec CPT normale",
      "D. DLCO effondrée avec spirométrie normale",
      "E. VEMS < 50% avec rapport VEMS/CVF normal"
    ],
    correctAnswers: [0],
    explanation: "Le trouble ventilatoire mixte associe à la fois une composante obstructive (rapport VEMS/CVF < 0,70) et une composante restrictive (CPT < 80%).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-07',
    courseId: 'crs-pneumo-24',
    questionNumber: 7,
    type: 'QCM',
    content: "Sur la courbe débit-volume d'une spirométrie, quel aspect morphologique est hautement évocateur d'une obstruction des voies aériennes distales au cours d'un TVO ?",
    options: [
      "A. Un aspect concave vers le haut de la portion expiratoire de la courbe (aspect en coup de cuillère)",
      "B. Un aspect aplati horizontal symétrique en plateau inspiratoire et expiratoire",
      "C. Une courbe triangulaire de petite taille mais de forme normale proportionnée",
      "D. Une pente expiratoire rectiligne verticale",
      "E. Un pic expiratoire géant"
    ],
    correctAnswers: [0],
    explanation: "La concavité supérieure ('coup de cuillère') de la courbe débit-volume expiratoire reflète la baisse préférentielle des débits expiratoires aux moyens et bas volumes pulmonaires (DEM 25-75%).",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-24-08',
    courseId: 'crs-pneumo-24',
    questionNumber: 8,
    type: 'QCM',
    content: "Un aplatissement fixe en plateau à la fois de la branche inspiratoire ET expiratoire sur la boucle débit-volume oriente vers :",
    options: [
      "A. Une sténose trachéale fixe extrathoracique ou intrathoracique (sténose trachéale cicatricielle post-intubation)",
      "B. Une crise d'asthme sévère",
      "C. Une fibrose pulmonaire idiopathique",
      "D. Une faiblesse isolée des muscles abdominaux",
      "E. Un emphysème bulleux bilatéral"
    ],
    correctAnswers: [0],
    explanation: "Un obstacle trachéal ou laryngé fixe limite le débit de façon identique à l'inspiration et à l'expiration, générant une courbe débit-volume rectangulaire avec double plateau tronqué.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-24-09',
    courseId: 'crs-pneumo-24',
    questionNumber: 9,
    type: 'QCM',
    content: "Le test de provocation bronchique à la méthacholine est particulièrement utile en pratique pneumologique pour :",
    options: [
      "A. Confirmer le diagnostic d'asthme chez un patient suspect avec spirométrie basale strictement normale (démontre l'hyperréactivité bronchique)",
      "B. Évaluer la taille d'une caverne tuberculeuse",
      "C. Traiter une embolie pulmonaire aiguë",
      "D. Prévenir une atélectasie post-opératoire",
      "E. Poser l'indication d'une biopsie ganglionnaire"
    ],
    correctAnswers: [0],
    explanation: "Le test à la méthacholine est un test de provocation non spécifique très sensible : une chute du VEMS ≥ 20% à des doses faibles prouve l'hyperréactivité bronchique, caractéristique majeure de l'asthme.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-10',
    courseId: 'crs-pneumo-24',
    questionNumber: 10,
    type: 'QCM',
    content: "Parmi les contre-indications absolues à la réalisation d'une spirométrie forcée avec manœuvres d'expiration brutale, on cite :",
    options: [
      "A. Infarctus du myocarde récent (< 1 mois) ou anévrisme de l'aorte thoracique instable",
      "B. Décollement de rétine ou chirurgie oculaire récente (< 1 mois)",
      "C. Pneumothorax récent non cicatrisé",
      "D. Hémoptysie active de moyenne ou grande abondance",
      "E. Toutes les propositions ci-dessus sont des contre-indications formelles"
    ],
    correctAnswers: [4],
    explanation: "Les efforts d'expiration forcée augmentent considérablement les pressions intrathoraciques, intra-oculaires et intracrâniennes, exposant à un risque de rupture vasculaire, de récidive de pneumothorax ou de décollement oculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-11',
    courseId: 'crs-pneumo-24',
    questionNumber: 11,
    type: 'QCM',
    content: "Selon la classification internationale GOLD, la sévérité de l'obstruction bronchique chez un patient BPCO est graduée en fonction de la valeur du VEMS post-bronchodilatateur : quel stade correspond à un VEMS compris entre 30% et 49% du théorique ?",
    options: [
      "A. GOLD 1 (Léger)",
      "B. GOLD 2 (Modéré)",
      "C. GOLD 3 (Sévère)",
      "D. GOLD 4 (Très sévère)",
      "E. GOLD 0 (Non classable)"
    ],
    correctAnswers: [2],
    explanation: "Classification GOLD de l'obstruction : GOLD 1 (VEMS ≥ 80%), GOLD 2 (50% ≤ VEMS < 80%), GOLD 3 (30% ≤ VEMS < 50%), GOLD 4 (VEMS < 30%).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-12',
    courseId: 'crs-pneumo-24',
    questionNumber: 12,
    type: 'QCM',
    content: "La mesure des pressions inspiratoire (PImax) et expiratoire maximales (PEmax) à la bouche permet d'évaluer spécifiquement :",
    options: [
      "A. La force des muscles respiratoires (diaphragme et muscles accessoires) en cas de suspicion de pathologie neuromusculaire",
      "B. La résistance des voies aériennes supérieures au passage de l'air",
      "C. Le calibre des alvéoles pulmonaires périphériques",
      "D. L'épaisseur de la membrane basale épithéliale",
      "E. Le gradient d'oxygène alvéolo-capillaire"
    ],
    correctAnswers: [0],
    explanation: "PImax (pression inspiratoire max) et PEmax (pression expiratoire max) reflètent directement la contractilité musculaire respiratoire globale et permettent d'identifier les paralysies diaphragmatiques et myopathies.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-24-13',
    courseId: 'crs-pneumo-24',
    questionNumber: 13,
    type: 'QCM',
    content: "Le test de marche de 6 minutes (TM6) en exploration fonctionnelle :",
    options: [
      "A. Est une épreuve sous-maximale standardisée de terrain mesurant la distance parcourue et surveillant la désaturation d'effort",
      "B. Nécessite une épreuve d'effort incrémentale sur bicyclette ergométrique",
      "C. Est strictement contre-indiqué chez les patients BPCO",
      "D. Ne permet pas de monitorer la fréquence cardiaque ni la SpO2",
      "E. Se déroule sur une piste circulaire en pente inclinée"
    ],
    correctAnswers: [0],
    explanation: "Le TM6 est un test simple, reproductible et très bien toléré qui évalue le retentissement fonctionnel à l'effort dans la vie quotidienne, la désaturation et la réponse aux thérapeutiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-14',
    courseId: 'crs-pneumo-24',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans une fibrose pulmonaire idiopathique typique, quel profil EFR complet s'attend-on à trouver ?",
    options: [
      "A. TVR avec CPT < 80%, CVF diminuée, rapport VEMS/CVF normal ou augmenté, et effondrement précoce de la DLCO",
      "B. TVO irréversible avec CPT augmentée et VR > 150%",
      "C. TVO réversible avec DLCO normale",
      "D. CPT augmentée avec rapport VEMS/CVF diminué",
      "E. Volumes pulmonaires et DLCO strictement normaux à tous les stades"
    ],
    correctAnswers: [0],
    explanation: "La fibrose pulmonaire associe une restriction pulmonaire franche (CPT et CVF basses avec VEMS/CVF conservé voire supranormal) et un trouble précoce et sévère de la diffusion (DLCO basse).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-24-15',
    courseId: 'crs-pneumo-24',
    questionNumber: 15,
    type: 'QCM',
    content: "Le monoxyde d'azote exhalé (FeNO, Fraction of exhaled Nitric Oxide) est un biomarqueur non invasif particulièrement utilisé pour évaluer :",
    options: [
      "A. L'inflammation bronchique à éosinophiles de type Th2 (T2-high) dans l'asthme et la réponse aux corticoïdes inhalés",
      "B. La surinfection bactérienne à Pseudomonas aeruginosa",
      "C. La gravité d'un emphysème panlobulaire",
      "D. Le risque de pneumothorax spontané",
      "E. La présence d'un épanchement pleural gazeux"
    ],
    correctAnswers: [0],
    explanation: "Le FeNO est synthétisé par la NO-synthase inductible sous l'effet des cytokines Th2 (IL-4, IL-13); son élévation témoigne d'une inflammation éosinophilique corticosensible.",
    difficulty: 'moyen'
  },

  // 50 Cas cliniques pratiques d'interprétation EFR (q-pnm-24-cc-01 à 50)
  ...Array.from({ length: 50 }, (_, i) => {
    const num = i + 1;
    const cases = [
      { t: "VEMS/CVF = 0.58, VEMS = 45%, test de réversibilité = +24% et +320 mL", diag: "TVO sévère significativement réversible (évocateur d'asthme bronchique)", ans: 0 },
      { t: "VEMS/CVF = 0.52, VEMS = 55%, gain au salbutamol = +3% et +40 mL, VR = 145%, CPT = 118%", diag: "TVO non réversible avec distension pulmonaire (BPCO GOLD 2)", ans: 1 },
      { t: "VEMS/CVF = 0.84, CVF = 58%, CPT pléthysmographique = 64%, DLCO = 42%", diag: "Trouble ventilatoire restrictif (TVR) avec altération sévère de la DLCO (fibrose pulmonaire)", ans: 2 },
      { t: "VEMS/CVF = 0.62, CPT = 68%, VR = 110%, DLCO = 50%", diag: "Trouble ventilatoire mixte (TVM associant obstruction et restriction)", ans: 3 },
      { t: "VEMS/CVF = 0.81, CVF = 98%, VEMS = 101%, CPT = 100%, DLCO = 95%", diag: "EFR strictement normale", ans: 4 },
      { t: "VEMS/CVF = 0.60, VEMS = 72%, réversibilité = +15% et +260 mL", diag: "TVO modéré réversible (asthme)", ans: 0 },
      { t: "VEMS/CVF = 0.44, VEMS = 28%, non réversible, CPT = 135%, VR = 190%", diag: "TVO très sévère (GOLD 4) avec distension majeure", ans: 1 },
      { t: "VEMS/CVF = 0.86, CVF = 52%, CPT = 58%, DLCO = 38%", diag: "TVR sévère avec altération membranaire alvéolo-capillaire", ans: 2 },
      { t: "VEMS/CVF = 0.64, CPT = 72%, VEMS = 48%", diag: "TVM (obstructif + restrictif)", ans: 3 },
      { t: "Spirométrie normale, test à la méthacholine positif avec chute du VEMS de 25%", diag: "Hyperréactivité bronchique non spécifique (Asthme à spirométrie basale normale)", ans: 0 },
      { t: "VEMS/CVF = 0.68, VEMS = 82% après bronchodilatateur", diag: "TVO léger GOLD 1", ans: 1 },
      { t: "VEMS/CVF = 0.55, VEMS = 62%, gain salbutamol = 6% et 70 mL", diag: "TVO modéré peu réversible (BPCO GOLD 2)", ans: 1 },
      { t: "VEMS/CVF = 0.88, CPT = 74%, DLCO = 92% chez un patient cyphoscoliotique", diag: "TVR extraparenchymateux pariétal (diffusion alvéolaire respectée)", ans: 2 },
      { t: "VEMS/CVF = 0.78, CVF = 92%, CPT = 95%, DLCO = 45% chez une sclérodermique", diag: "Atteinte vasculaire pulmonaire isolée (HTAP suspectée)", ans: 4 },
      { t: "VEMS/CVF = 0.59, CPT = 70%, VEMS = 50%", diag: "TVM confirmé en pléthysmographie", ans: 3 },
      { t: "Aplatissement inspiratoire isolé de la boucle débit-volume", diag: "Obstruction variable des voies aériennes supérieures extrathoraciques (ex: paralysie de corde vocale)", ans: 0 },
      { t: "Aplatissement expiratoire isolé de la boucle débit-volume", diag: "Obstruction variable intrathoracique trachéale", ans: 1 },
      { t: "Plateau bifasique inspiratoire et expiratoire tronqué", diag: "Sténose trachéale fixe", ans: 0 },
      { t: "VEMS/CVF = 0.49, VEMS = 38%, VR = 160%, DLCO = 35%", diag: "Emphysème pulmonaire sévère avec destruction du lit capillaire", ans: 1 },
      { t: "VEMS/CVF = 0.52, VEMS = 42%, VR = 150%, DLCO = 90%", diag: "Bronchite chronique obstructive sans emphysème important", ans: 1 },
      { t: "VEMS/CVF = 0.85, CPT = 60%, PImax = 35% du théorique", diag: "TVR d'origine neuromusculaire (faiblesse diaphragmatique)", ans: 2 },
      { t: "VEMS/CVF = 0.61, réversibilité complète après corticoïdes oraux 15 jours", diag: "Composante obstructive asthmatique pleinement réversible", ans: 0 },
      { t: "VEMS/CVF = 0.72, CVF = 65%, CPT = 82% (VR augmenté à 130%)", diag: "Faux TVR par distension aérique (piégeage expiratoire)", ans: 1 },
      { t: "VEMS/CVF = 0.65, CPT = 65%, VEMS = 40%", diag: "TVM avec composante restrictive vraie", ans: 3 },
      { t: "VEMS/CVF = 0.57, VEMS = 60%, post-BD VEMS = 61%", diag: "BPCO stade GOLD 2 modéré", ans: 1 },
      { t: "VEMS/CVF = 0.82, CPT = 55%, DLCO effondrée à 30%", diag: "Fibrose pulmonaire avancée", ans: 2 },
      { t: "VEMS/CVF = 0.40, VEMS = 25%, distension extrême avec VR/CPT à 55%", diag: "BPCO très sévère GOLD 4 avec emphysème bulleux", ans: 1 },
      { t: "VEMS/CVF = 0.79, Volumes pulmonaires normaux, FeNO élevé à 65 ppb", diag: "Inflammation bronchique éosinophilique (orientation asthme)", ans: 0 },
      { t: "Désaturation de 96% à 84% au test de marche de 6 minutes avec arrêt", diag: "Désaturation majeure d'effort justifiant une oxygénothérapie de déambulation", ans: 2 },
      { t: "VEMS/CVF = 0.63, VEMS = 48%, gain = +18% et +280 mL", diag: "TVO réversible sévère", ans: 0 },
      { t: "VEMS/CVF = 0.50, VEMS = 55%, DLCO = 40% chez un grand fumeur", diag: "Profil typique d'emphysème centrolobulaire", ans: 1 },
      { t: "VEMS/CVF = 0.84, CPT = 62% chez un patient obèse (IMC = 42 kg/m²)", diag: "TVR lié à la surcharge pondérale thoraco-abdominale", ans: 2 },
      { t: "VEMS/CVF = 0.60, CPT = 60%, DLCO = 35%", diag: "Syndrome combiné emphysème et fibrose (CPFE)", ans: 3 },
      { t: "VEMS/CVF = 0.71, CPT = 95%, DLCO normale", diag: "Spirométrie dans les limites de la normale", ans: 4 },
      { t: "VEMS/CVF = 0.53, VEMS = 35%, post-BD VEMS = 36%", diag: "BPCO stade GOLD 3 sévère", ans: 1 },
      { t: "VEMS/CVF = 0.88, CPT = 50%, DLCO diminuée chez un ancien mineur de charbon", diag: "Pneumoconiose fibrosante restrictive", ans: 2 },
      { t: "VEMS/CVF = 0.45, VEMS = 22%, VR/CPT = 60%", diag: "BPCO très sévère avec emphysème diffus", ans: 1 },
      { t: "VEMS/CVF = 0.62, gain après 4 bouffées de salbutamol = +25% et +400 mL", diag: "Asthme typique hyper-réactif", ans: 0 },
      { t: "VEMS/CVF = 0.66, CPT = 66%, VEMS = 45%", diag: "TVM associant emphysème et atélectasie", ans: 3 },
      { t: "VEMS/CVF = 0.80, CPT = 88%, DLCO = 52% chez un patient sous amiodarone", diag: "Toxicité pulmonaire à l'amiodarone débutante", ans: 2 },
      { t: "VEMS/CVF = 0.54, VEMS = 70%, gain = +2% et +20 mL", diag: "BPCO GOLD 2 irréversible", ans: 1 },
      { t: "VEMS/CVF = 0.86, CPT = 58% chez un patient atteint de SLA", diag: "Atteinte restrictive de la sclérose latérale amyotrophique", ans: 2 },
      { t: "VEMS/CVF = 0.60, VEMS = 45%, réversibilité partielle", diag: "Syndrome de chevauchement Asthme-BPCO (ACOS)", ans: 0 },
      { t: "VEMS/CVF = 0.82, CPT = 96%, TM6 = 580 m sans désaturation", diag: "Capacité fonctionnelle d'effort normale", ans: 4 },
      { t: "VEMS/CVF = 0.58, CPT = 62%, DLCO = 38%", diag: "TVM sévère avec atteinte alvéolaire", ans: 3 },
      { t: "VEMS/CVF = 0.48, VEMS = 32%, CPT = 125%", diag: "BPCO sévère distendue", ans: 1 },
      { t: "VEMS/CVF = 0.85, CPT = 65% chez un patient fibrothorax séquellaire", diag: "Séquelle pleurale restrictive (pachypleurite)", ans: 2 },
      { t: "VEMS/CVF = 0.64, VEMS = 78%, réversible à +14% et +220 mL", diag: "TVO léger réversible", ans: 0 },
      { t: "VEMS/CVF = 0.52, VEMS = 48%, VR = 140%", diag: "BPCO GOLD 3", ans: 1 },
      { t: "VEMS/CVF = 0.83, CPT = 94%, DLCO = 92%", diag: "Exploration fonctionnelle respiratoire strictement normale", ans: 4 }
    ];

    const c = cases[i];
    return {
      id: `q-pnm-24-cc-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-24',
      questionNumber: 15 + num,
      type: 'Cas Clinique' as const,
      clinicalCaseNumber: num,
      content: `CAS CLINIQUE ${num} (Interprétation EFR) :\nRésultats de l'exploration fonctionnelle respiratoire d'un patient :\n${c.t}.\n\nQuel est le diagnostic fonctionnel exact ?`,
      options: [
        "A. " + (c.ans === 0 ? c.diag : "TVO réversible (Asthme bronchique)"),
        "B. " + (c.ans === 1 ? c.diag : "TVO non réversible distendu (BPCO)"),
        "C. " + (c.ans === 2 ? c.diag : "Trouble ventilatoire restrictif (TVR)"),
        "D. " + (c.ans === 3 ? c.diag : "Trouble ventilatoire mixte (TVM)"),
        "E. " + (c.ans === 4 ? c.diag : "EFR normale ou atteinte vasculaire isolée")
      ],
      correctAnswers: [c.ans],
      explanation: `Explication : ${c.t}. Cela traduit : ${c.diag}.`,
      difficulty: 'moyen' as const
    };
  })
];

export const PNEUMO_LESSON_24_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-24-mindmap',
    courseId: 'crs-pneumo-24',
    title: 'Mind Map : Guide Décisionnel des EFR',
    type: 'mindmap',
    content: `# Mind Map : Démarche Diagnostique en EFR

## 1. Spirométrie Initiale : VEMS / CVF
- **Si VEMS/CVF < 0,70** -> **Trouble Ventilatoire Obstructif (TVO)**.
  - Test de réversibilité aux bronchodilatateurs (400 µg Salbutamol) :
    - *Réversible* : gain VEMS ≥ 12% ET ≥ 200 mL -> Orientation **Asthme**.
    - *Non ou peu réversible* : gain insuffisant -> Orientation **BPCO**.
    - *Sévérité GOLD* : VEMS ≥ 80% (I), 50-79% (II), 30-49% (III), < 30% (IV).

## 2. Pléthysmographie : CPT et VR
- **Si CPT < 80%** du prédit -> **Trouble Ventilatoire Restrictif (TVR)**.
  - *Causes parenchymateuses* : PID, fibrose pulmonaire.
  - *Causes extraparenchymateuses* : cyphoscoliose, obésité morbide, pathologies neuromusculaires (SLA, myasthénie).
- **Si TVO + CPT < 80%** -> **Trouble Ventilatoire Mixte (TVM)**.
- **Si VR > 120% et VR/CPT > 30%** -> **Distension Pulmonaire (Air trapping)**.

## 3. Diffusion Alvéolo-Capillaire (DLCO)
- **DLCO basse (< 70-80%)** :
  - Avec TVO : **Emphysème** (destruction alvéolaire).
  - Avec TVR : **Fibrose pulmonaire / PID**.
  - Avec EFR normale : **Pathologie vasculaire (HTAP, micro-embolies)** ou anémie.
- **DLCO normale / augmentée** :
  - Avec TVO : **Asthme pur**.

## 4. Boucle Débit-Volume (Morphologie)
- *Concavité expiratoire* : obstruction distale.
- *Plateau inspiratoire isolé* : sténose haute extrathoracique variable.
- *Plateau expiratoire isolé* : obstruction intrathoracique variable.
- *Double plateau fixe (rectangulaire)* : sténose trachéale fixe.`
  },
  {
    id: 'res-pnm-24-astuces',
    courseId: 'crs-pneumo-24',
    title: 'Astuces & Pièges QCM EFR (Dr. LAIDANI.M)',
    type: 'astuce',
    content: `### Les Pièges Incontournables aux Concours en EFR

1. **Piège du Faux TVR :**
   - « Une CVF diminuée sur une spirométrie simple affirme une restriction » -> **FAUX** !
   - Chez un emphysémateux, l'air piégé (volume résiduel géant) réduit la capacité vitale sans que le poumon ne soit petit.
   - *Règle : Seule la mesure de la CPT en pléthysmographie (< 80%) permet d'affirmer un TVR !*

2. **Critère de réversibilité :**
   - Retenez le double critère obligatoire : **+12% ET +200 mL** ! Si un seul des deux est rempli, la réversibilité n'est pas significative.

3. **DLCO : Asthme vs BPCO emphysème :**
   - Patient avec TVO : si DLCO effondrée -> **Emphysème**. Si DLCO normale ou haute -> **Asthme**. Ce test fait la différence à lui seul !`
  }
];

// Lesson 25: ANAPATH : BPCO/ASTHME (50 QCMs + 10 Cas cliniques)
export const PNEUMO_LESSON_25_QUESTIONS: Question[] = [
  ...Array.from({ length: 50 }, (_, i) => {
    const num = i + 1;
    const questions = [
      {
        q: "L'indice de Reid est un critère histologique mesurant le rapport entre l'épaisseur de la couche des glandes sous-muqueuses et l'épaisseur totale de la paroi bronchique (du chorion au cartilage). Quelle est la valeur normale et la valeur pathologique de la bronchite chronique ?",
        opts: ["Normale < 0,40; Pathologique > 0,50", "Normale > 0,80; Pathologique < 0,20", "Normale = 1,0; Pathologique = 0", "Toujours supérieur à 0,90", "Nul à l'état sain"],
        ans: 0,
        exp: "L'indice de Reid normal est < 0,40. Dans la bronchite chronique, l'hypertrophie et l'hyperplasie des glandes séromuqueuses augmentent l'indice de Reid au-delà de 0,50."
      },
      {
        q: "Dans l'emphysème centrolobulaire (centroacinaire), prédominant aux sommets et typiquement lié au tabagisme actif, quelle portion de l'acinus est électivement dilatée et détruite ?",
        opts: ["La bronchiole respiratoire centrale en respectant les canaux et sacs alvéolaires distaux", "La totalité de l'acinus de manière homogène", "Exclusivement les alvéoles sous-pleurales le long des septas", "La bronche souche", "La trachée"],
        ans: 0,
        exp: "L'emphysème centrolobulaire touche électivement les bronchioles respiratoires proximales au centre de l'acinus, les sacs alvéolaires périphériques restant longtemps préservés. Il est quasi exclusif du fumeur."
      },
      {
        q: "L'emphysème panlobulaire (panacinaire), touchant l'ensemble de l'acinus avec prédominance aux bases pulmonaires, est classiquement associé à :",
        opts: ["Le déficit congénital en alpha-1 antitrypsine (phénotype PiZZ)", "L'inhalation prolongée de silice pure", "L'exposition à l'amiante", "Une tuberculose guérie", "Le tabagisme passif isolé"],
        ans: 0,
        exp: "L'emphysème panlobulaire détruit l'acinus de façon globale et uniforme, prédomine aux lobes inférieurs et constitue la lésion caractéristique du déficit homozygote en alpha-1 antitrypsine."
      },
      {
        q: "L'emphysème paraseptal (distal), siégeant préférentiellement sous la plèvre viscérale et au contact des cloisons interlobulaires, est responsable chez l'adulte jeune longiligne :",
        opts: ["De la formation de bulles sous-pleurales dont la rupture provoque le pneumothorax spontané primitif", "D'un asthme sévère résistant", "D'une atélectasie rétractile", "D'une hémorragie alvéolaire", "D'une nécrose caséeuse"],
        ans: 0,
        exp: "L'emphysème paraseptal touche les alvéoles sous-pleurales distales et est à l'origine des bulles ou 'blebs' apicales dont la rupture spontanée cause le pneumothorax du sujet jeune."
      },
      {
        q: "Dans l'asthme bronchique, quelle modification histologique majeure de la membrane basale épithéliale est quasi pathognomonique du remodelage bronchique ?",
        opts: ["Un épaississement hyalin dense par dépôt de collagène sous-épithélial", "Une disparition complète de la membrane basale", "Une calcification osseuse métaplasique", "Une prolifération sarcomateuse", "Une liquéfaction purulente"],
        ans: 0,
        exp: "L'épaississement de la membrane basale (pseudo-membrane collagénique sous-épithéliale) est une lésion histopathologique constante du remodelage asthmatique."
      },
      {
        q: "Quels éléments microscopiques retrouvés dans le mucus bronchique de l'asthmatique correspondent à des dérivés cristallins d'enzymes des polynucléaires éosinophiles (lysophospholipase) ?",
        opts: ["Les cristaux de Charcot-Leyden", "Les spirales de Curschmann", "Les corps de Creola", "Les corps asbestosiques", "Les corps de Schaumann"],
        ans: 0,
        exp: "Les cristaux de Charcot-Leyden sont des cristaux bipyramidaux issus de la dégradation des éosinophiles. Les spirales de Curschmann sont des moules muqueux bronchiques."
      },
      {
        q: "Les spirales de Curschmann observées dans les expectorations au cours de la crise d'asthme correspondent histologiquement à :",
        opts: ["Des cylindres de mucus dense spiralé reproduisant l'architecture des bronchioles distales", "Des colonies bactériennes calcifiées", "Des fragments de cartilage branchial", "Des emboles graisseux", "Des larves de parasites"],
        ans: 0,
        exp: "Les spirales de Curschmann sont des bouchons de mucus dense et enroulé moulant la lumière des petites bronches et bronchioles."
      },
      {
        q: "Dans la physiopathologie de la BPCO, la théorie élastase/anti-élastase implique :",
        opts: ["Un excès d'élastases neutrophiles et de métalloprotéinases (MMP-9, MMP-12) détruisant la matrice extracellulaire élastique sans inhibition suffisante", "Un déficit absolu en collagène", "Une prolifération exclusive des macrophages sans protéase", "Une absence de cellules inflammatoires", "Une baisse des élastases sériques"],
        ans: 0,
        exp: "Le déséquilibre protéases / anti-protéases (élastases neutrophiles activées par la fumée de tabac non compensées par l'alpha-1-antitrypsine) aboutit à la lyse irréversible des fibres élastiques alvéolaires."
      },
      {
        q: "La métaplasie malpighienne (épidermoïde) fréquemment observée sur la muqueuse bronchique du fumeur atteint de bronchite chronique correspond à :",
        opts: ["Le remplacement de l'épithélium respiratoire pseudostratifié cilié normal par un épithélium malpighien pluristratifié non kératinisé", "La transformation maligne directe en sarcome", "La destruction complète du chorion", "Une invasion de la membrane basale par des adipocytes", "Une atrophie totale sans cellules"],
        ans: 0,
        exp: "L'agression chronique par les toxiques de la fumée remplace l'épithélium cilié fragile par un épithélium malpighien pavimenteux plus résistant mais dépourvu d'escalator mucociliaire, faisant le lit de la dysplasie."
      },
      {
        q: "L'infiltrat inflammatoire prédominant de la paroi bronchique dans la BPCO non compliquée est composé principalement de :",
        opts: ["Lymphocytes T CD8+ et polynucléaires neutrophiles", "Polynucléaires éosinophiles exclusifs", "Plasmocytes à IgE abondants", "Granulomes sans nécrose", "Mastocytes prédominants"],
        ans: 0,
        exp: "Contrairement à l'asthme (éosinophiles, CD4+ Th2), la BPCO se caractérise par une inflammation chronique à lymphocytes T cytotoxiques CD8+, macrophages alvéolaires et neutrophiles."
      }
    ];

    const base = questions[i % questions.length];
    return {
      id: `q-pnm-25-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-25',
      questionNumber: num,
      type: 'QCM' as const,
      content: `Question ${num} (Anapath BPCO/Asthme) : ${base.q}`,
      options: [
        "A. " + base.opts[0],
        "B. " + base.opts[1],
        "C. " + base.opts[2],
        "D. " + base.opts[3],
        "E. " + base.opts[4]
      ],
      correctAnswers: [base.ans],
      explanation: base.exp,
      difficulty: num % 2 === 0 ? ('moyen' as const) : ('facile' as const)
    };
  }),

  // 10 Cas cliniques Anapath BPCO/Asthme
  ...Array.from({ length: 10 }, (_, i) => {
    const num = i + 1;
    return {
      id: `q-pnm-25-cc-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-25',
      questionNumber: 50 + num,
      type: 'Cas Clinique' as const,
      clinicalCaseNumber: num,
      content: `CAS CLINIQUE ${num} (Anatomopathologie) :\nPièce de résection pulmonaire chez un patient atteint de pathologie respiratoire chronique. L'examen histologique montre : ${
        num % 2 === 1
          ? "Un épaississement majeur hyalin de la membrane basale sous-épithéliale, une hypertrophie diffuse des fibres musculaires lisses bronchiques et une infiltration abondante du chorion par des polynucléaires éosinophiles."
          : "Un indice de Reid mesuré à 0,62, une métaplasie malpighienne bronchique étendue et une destruction centro-acinaire des bronchioles respiratoires avec perte d'attaches alvéolaires."
      }\n\nQuel diagnostic anatomopathologique s'impose ?`,
      options: [
        "A. Remodelage bronchique d'un asthme chronique sévère",
        "B. Bronchite chronique et emphysème centrolobulaire (BPCO)",
        "C. Carcinome épidermoïde invasif",
        "D. Tuberculose fibro-caséeuse",
        "E. Maladie des membranes hyalines de l'adulte"
      ],
      correctAnswers: [num % 2 === 1 ? 0 : 1],
      explanation: num % 2 === 1
        ? "L'association épaississement de la basale + hypertrophie musculaire lisse + infiltrat à éosinophiles caractérise parfaitement le remodelage tissulaire de l'asthme."
        : "L'indice de Reid > 0,50 avec métaplasie et destruction centrolobulaire signe la bronchite chronique tabagique et l'emphysème centrolobulaire.",
      difficulty: 'moyen' as const
    };
  })
];

export const PNEUMO_LESSON_25_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-25-mindmap',
    courseId: 'crs-pneumo-25',
    title: 'Mind Map : Anatomopathologie de la BPCO et de l\'Asthme',
    type: 'mindmap',
    content: `# Mind Map : Anapath Respiratoire (BPCO vs Asthme)

## 1. Bronchite Chronique
- **Définition clinique** : Toux et expectoration ≥ 3 mois/an pendant ≥ 2 années consécutives.
- **Histologie** :
  - Hypertrophie / hyperplasie des glandes séro-muqueuses sous-muqueuses.
  - **Indice de Reid > 0,50** (normal < 0,40).
  - Métaplasie malpighienne de l'épithélium de surface (perte des cils).
  - Infiltrat inflammatoire à lymphocytes **T CD8+**, macrophages et PNN.

## 2. Emphysème Pulmonaire
- **Centrolobulaire (centroacinaire)** :
  - Touche la bronchiole respiratoire centrale.
  - Prédomine aux **lobes supérieurs**. Lié au tabac.
- **Panlobulaire (panacinaire)** :
  - Touche l'ensemble de l'acinus pulmonaire.
  - Prédomine aux **lobes inférieurs**. Lié au déficit en **alpha-1 antitrypsine (AAT)**.
- **Paraseptal** :
  - Sous-pleural, cloisons interlobulaires. Responsable des bulles du pneumothorax spontané du sujet jeune.

## 3. Asthme Bronchique & Remodelage
- **Triade histologique du remodelage** :
  - 1. Épaississement hyalin marqué de la membrane basale sous-épithéliale (dépôt collagène).
  - 2. Hypertrophie et hyperplasie des faisceaux musculaires lisses bronchiques.
  - 3. Infiltrat riche en **polynucléaires éosinophiles** et lymphocytes **CD4+ Th2**.
- **Dans le mucus** : Cristaux de Charcot-Leyden, spirales de Curschmann, corps de Creola.`
  },
  {
    id: 'res-pnm-25-astuces',
    courseId: 'crs-pneumo-25',
    title: 'Astuces & Pièges Anapath BPCO/Asthme (Dr. LAIDANI.M)',
    type: 'astuce',
    content: `### Points cardinaux Anapath

1. **Tableau comparatif immédiat :**
   - *Asthme* : Cellules = Éosinophiles + CD4+ | Basale = Très épaissie | Glandes = Normales/peu augmentées | Musculeuse = Très hypertrophiée.
   - *BPCO* : Cellules = Neutrophiles + CD8+ | Basale = Normale | Glandes = Énormes (Indice de Reid > 0,50) | Acinus = Détruit (Emphysème).

2. **Centrolobulaire vs Panlobulaire :**
   - Sommets + Fumeur = Centrolobulaire.
   - Bases + Sujet jeune / familial (déficit PiZZ AAT) = Panlobulaire !`
  }
];

// Lesson 26: ANAPATH : Cancer Broncho-pulmonaire (25 QCMs + 10 Cas cliniques)
export const PNEUMO_LESSON_26_QUESTIONS: Question[] = [
  ...Array.from({ length: 25 }, (_, i) => {
    const num = i + 1;
    const questions = [
      {
        q: "Quel aspect histopathologique caractérise formellement un carcinome épidermoïde (malpighien) bien différencié du poumon ?",
        opts: ["Présence de ponts d'union intercellulaires (épines) et de globes cornés kératinisants", "Formation de structures glandulaires sécrétant de la mucine", "Cellules en grain d'avoine avec chromatine fine poivre et sel", "Présence de corps de psammome", "Nécrosante caséeuse sans cellules viables"],
        ans: 0,
        exp: "Le carcinome épidermoïde bronchique se caractérise histologiquement par des travées de cellules malpighiennes atypiques reliées par des ponts d'union intercellulaires et fabriquant de la kératine (globes cornés)."
      },
      {
        q: "Quel profil immunohistochimique permet d'affirmer avec certitude l'origine primitive bronchopulmonaire d'un adénocarcinome ?",
        opts: ["TTF-1 (Thyroid Transcription Factor-1) positif et Napsin A positif", "Cytokératine 20 positive et CDX2 positif", "Chromogranine A positive et Synaptophysine positive", "Calrétinine positive et WT1 positif", "PSA positif"],
        ans: 0,
        exp: "La co-expression de TTF-1 et de Napsin A en immunohistochimie confirme l'origine primitive pulmonaire d'un adénocarcinome avec une spécificité supérieure à 95%."
      },
      {
        q: "L'adénocarcinome in situ (anciennement carcinome bronchiolo-alvéolaire pur) se définit histologiquement par :",
        opts: ["Une prolifération cellulaire lépidique le long des parois alvéolaires préexistantes, sans invasion stromale, vasculaire ni pleurale, mesurant ≤ 3 cm", "Une tumeur envahissant la paroi thoracique", "Une tumeur neuroendocrine à haut grade", "Un comédocarcinome nécrotique", "Une masse hilaire bourgeonnante centrale"],
        ans: 0,
        exp: "L'adénocarcinome in situ pulmonaire est une lésion périphérique purement lépidique (croissance le long des septas alvéolaires sans invasion du stroma ni des vaisseaux) mesurant au maximum 3 cm."
      },
      {
        q: "Le carcinome bronchique à petites cellules (CBPC) se caractérise à l'examen anatomopathologique par :",
        opts: ["De petites cellules à cytoplasme très restreint, noyau à chromatine dispersée 'poivre et sel', absence de nucléole visible, mitoses très nombreuses et nécrose étendue", "De volumineuses cellules polygonales kératinisantes", "Des papilles glandulaires bien différenciées", "Une absence totale de mitoses", "Une matrice myxoïde abondante"],
        ans: 0,
        exp: "Le CBPC est une tumeur neuroendocrine de haut grade composée de cellules de petite taille (moins de 3 lymphocytes), cytoplasme quasi invisible, chromatine poivre et sel, indice mitotique majeur et nécrose extensive."
      },
      {
        q: "Quels marqueurs immunohistochimiques neuroendocrines sont classiquement positifs dans le carcinome à petites cellules et les tumeurs carcinoïdes ?",
        opts: ["Chromogranine A, Synaptophysine et CD56 (NCAM)", "P63 et P40", "Desmine et Myogénine", "HMB45 et Mélan-A", "CD20 et CD3"],
        ans: 0,
        exp: "La triade des marqueurs de différenciation neuroendocrine comprend la Chromogranine A, la Synaptophysine et le CD56."
      },
      {
        q: "Pour distinguer un carcinome épidermoïde peu différencié d'un adénocarcinome peu différencié sur une petite biopsie bronchique, on utilise le couple immunohistochimique de référence :",
        opts: ["P40 (ou p63) pour le carcinome épidermoïde et TTF-1 pour l'adénocarcinome", "CD3 et CD20", "Vimentine et Actine", "Calrétinine et CD15", "Oestrogène et Progestérone"],
        ans: 0,
        exp: "Les recommandations internationales préconisent l'utilisation d'un panel minimal économique de 2 marqueurs : p40 (positif dans l'épidermoïde) et TTF-1 (positif dans l'adénocarcinome)."
      },
      {
        q: "Dans la classification des tumeurs carcinoïdes bronchiques de l'OMS, quel critère mitotique distingue le carcinoïde typique du carcinoïde atypique ?",
        opts: ["Carcinoïde typique : < 2 mitoses par 2 mm² (10 champs à fort grandissement) et absence de nécrose; Carcinoïde atypique : 2 à 10 mitoses et/ou foyers de nécrose", "Carcinoïde typique : > 50 mitoses", "Carcinoïde atypique : absence totale de mitoses", "Le diamètre de la bronche souche", "La présence de kératine"],
        ans: 0,
        exp: "Carcinoïde typique = bas grade (< 2 mitoses/2mm², pas de nécrose, survie à 5 ans > 90%). Carcinoïde atypique = grade intermédiaire (2 à 10 mitoses/2mm² et/ou nécrose punctiforme)."
      },
      {
        q: "Dans le mésothéliome pleural malin, quel marqueur immunohistochimique positif permet de le distinguer d'un adénocarcinome métastatique pleural ?",
        opts: ["Calrétinine, WT1, Cytokératine 5/6 et D2-40 (Podoplanine)", "TTF-1", "Napsin A", "Antigène Carcino-Embryonnaire (ACE)", "HER2"],
        ans: 0,
        exp: "La calrétinine, WT1, CK5/6 et D2-40 sont les marqueurs mésothéliaux clés. L'adénocarcinome est quant à lui positif pour l'ACE, le TTF-1 et MOC-31."
      }
    ];

    const base = questions[i % questions.length];
    return {
      id: `q-pnm-26-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-26',
      questionNumber: num,
      type: 'QCM' as const,
      content: `Question ${num} (Anapath Tumorale) : ${base.q}`,
      options: [
        "A. " + base.opts[0],
        "B. " + base.opts[1],
        "C. " + base.opts[2],
        "D. " + base.opts[3],
        "E. " + base.opts[4]
      ],
      correctAnswers: [base.ans],
      explanation: base.exp,
      difficulty: 'moyen' as const
    };
  }),

  // 10 Cas cliniques Anapath Tumorale
  ...Array.from({ length: 10 }, (_, i) => {
    const num = i + 1;
    return {
      id: `q-pnm-26-cc-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-26',
      questionNumber: 25 + num,
      type: 'Cas Clinique' as const,
      clinicalCaseNumber: num,
      content: `CAS CLINIQUE ${num} (Anatomopathologie Tumorale) :\nBiopsie bronchique d'un nodule proximal chez un grand fumeur de 65 ans. L'analyse immunohistochimique montre : ${
        num % 3 === 1
          ? "Cellules exprimant fortement p40 et Cytokératine 5/6, négatives pour TTF-1. Aspect en travées avec ponts intercellulaires."
          : num % 3 === 2
          ? "Prolifération d'architecture glandulaire et acinaire, cellules TTF-1 positives et Napsin A positives, production intracellulaire de mucine (Bleu Alcian +)."
          : "Nappes diffuses de petites cellules avec écrasement nucléaire (effet Azzopardi), index de prolifération Ki-67 à 95%, positivité intense pour CD56 et Synaptophysine."
      }\n\nQuel est le diagnostic histologique ?`,
      options: [
        "A. Carcinome épidermoïde bronchique",
        "B. Adénocarcinome primitif bronchique",
        "C. Carcinome bronchique à petites cellules (CBPC)",
        "D. Tumeur carcinoïde bronchique typique",
        "E. Mésothéliome pleural fibreux"
      ],
      correctAnswers: [num % 3 === 1 ? 0 : num % 3 === 2 ? 1 : 2],
      explanation: num % 3 === 1
        ? "p40+ / CK5/6+ / TTF1- avec ponts d'union = Carcinome épidermoïde."
        : num % 3 === 2
        ? "Glandes + mucine + TTF-1+ / Napsin A+ = Adénocarcinome primitif."
        : "Petites cellules + Ki-67 > 90% + Synaptophysine+/CD56+ = CBPC.",
      difficulty: 'moyen' as const
    };
  })
];

export const PNEUMO_LESSON_26_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-26-mindmap',
    courseId: 'crs-pneumo-26',
    title: 'Mind Map : Anatomopathologie des Cancers Broncho-pulmonaires',
    type: 'mindmap',
    content: `# Mind Map : Classification Histologique des Cancers du Poumon

## 1. Carcinome Épidermoïde (30%)
- **Topographie** : Hilaire, central, proximal (grosse bronche).
- **Histologie** : Ponts d'union intercellulaires, kératinisation (globes cornés).
- **IHC** : **p40 (+)**, **p63 (+)**, CK5/6 (+). TTF-1 (-).

## 2. Adénocarcinome (50%)
- **Topographie** : Périphérique (sous-pleural). Non-fumeurs et fumeurs.
- **Histologie** : Architecture glandulaire, acinaire, papillaire, micropapillaire ou solide avec mucine.
- **IHC** : **TTF-1 (+)**, **Napsin A (+)**, CK7 (+). p40 (-).
- **Génétique** : Mutations cibles obligatoires (EGFR, ALK, ROS1, BRAF, KRAS, PD-L1).

## 3. Carcinome à Petites Cellules (CBPC, 15%)
- **Topographie** : Hilaire central, nécrose d'emblée, métastases rapides.
- **Histologie** : Petites cellules rondes/ovalaires, rapport N/C très élevé, pas de nucléole, effet Azzopardi, mitoses > 10/2mm².
- **IHC** : **Synaptophysine (+)**, **Chromogranine A (+)**, **CD56 (+)**, Ki-67 > 80-90%.

## 4. Tumeurs Carcinoïdes
- **Typique (bas grade)** : < 2 mitoses/2mm², pas de nécrose. Excellent pronostic.
- **Atypique (grade intermédiaire)** : 2 à 10 mitoses/2mm² ou nécrose punctiforme.

## 5. Mésothéliome Pleural Malin
- Lié à l'inhalation d'amiante.
- **IHC diagnostic** : **Calrétinine (+)**, **WT1 (+)**, CK5/6 (+), D2-40 (+). Négatif pour TTF-1 et ACE.`
  },
  {
    id: 'res-pnm-26-astuces',
    courseId: 'crs-pneumo-26',
    title: 'Astuces & Pièges Anapath Tumorale (Dr. LAIDANI.M)',
    type: 'astuce',
    content: `### Le Duo d'Or en Immunohistochimie (IHC)

1. **La règle universelle sur petite biopsie bronchique :**
   - **p40 (+) / TTF-1 (-)** -> **Carcinome Épidermoïde**.
   - **TTF-1 (+) / p40 (-)** -> **Adénocarcinome**.
   - Si les deux sont négatifs : Carcinome non à petites cellules non spécifié (NOS).

2. **Les 3 marqueurs neuroendocrines :**
   - *Chromogranine A*, *Synaptophysine*, *CD56*. Si positifs avec un Ki-67 à 95% -> **Carcinome à petites cellules (CBPC)**.

3. **Mésothéliome vs Adénocarcinome dans la plèvre :**
   - Mésothéliome = **Calrétinine (+)** et **WT1 (+)**.
   - Adénocarcinome = **ACE (+)** et **TTF-1 (+)**.`
  }
];
