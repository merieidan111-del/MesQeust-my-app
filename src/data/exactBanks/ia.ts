import { Question } from '../../types/medical';

export const IA_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs from PDF
  {
    id: 'q-ia-01',
    courseId: 'crs-ia',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient de 55 ans asymptomatique, l'échocardiographie révèle une insuffisance aortique (IA) sévère avec un diamètre télésystolique du ventricule gauche (DTSVG) à 52 mm et une FEVG à 58%. Quelle est la prise en charge la plus appropriée ?",
    options: [
      "A) Prescrire un bêta-bloquant et réévaluer dans 6 mois.",
      "B) Proposer d'emblée un remplacement valvulaire aortique chirurgical.",
      "C) Prescrire un inhibiteur de l'enzyme de conversion (IEC) et surveiller étroitement.",
      "D) Réaliser une coronarographie pré-opératoire.",
      "E) Aucune intervention, surveillance échocardiographique annuelle."
    ],
    correctAnswers: [2],
    explanation: "Le patient a une IA sévère asymptomatique, mais le DTSVG (50 mm) et la FEVG (50%) sont les seuils d'intervention. Ici, le DTSVG est juste au-dessus (52 mm) mais la FEVG est normale. Les recommandations privilégient une surveillance rapprochée sous traitement médical optimal (vasodilatateurs comme les IEC) pour réduire la postcharge et la régurgitation, en attendant que d'autres critères (symptômes, baisse de FEVG) se manifestent. La chirurgie n'est pas encore indiquée.",
    clinicalPearl: "Surveillance rapprochée sous vasodilatateur (IEC) avant d'atteindre les critères formels opératoires."
  },
  {
    id: 'q-ia-02',
    courseId: 'crs-ia',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le mécanisme principal expliquant l'angor dans l'IA chronique sévère ?",
    options: [
      "A) Compression des artères coronaires par l'aorte dilatée.",
      "B) Augmentation exclusive de la consommation en oxygène du myocarde due à l'hypertrophie.",
      "C) Spasme coronaire induit par les médiateurs inflammatoires.",
      "D) Diminution de la perfusion diastolique coronaire et augmentation de la consommation en oxygène.",
      "E) Micro-embolies coronaires à partir de végétations valvulaires."
    ],
    correctAnswers: [3],
    explanation: "C'est la double pénalité. La baisse de la pression de perfusion diastolique aortique (due à la fuite) réduit le gradient de perfusion coronaire (qui est maximale en diastole). Simultanément, l'hypertrophie ventriculaire gauche augmente la demande en oxygène du myocarde. Cette combinaison crée un déséquilibre offre/demande.",
    clinicalPearl: "Angor dans l'IA : Baisse de la PAD coronaire + Augmentation de la consommation myocardique en O2."
  },
  {
    id: 'q-ia-03',
    courseId: 'crs-ia',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"double souffle fémoral de Duroziez\" est un signe :",
    options: [
      "A) Échocardiographique de régurgitation sévère.",
      "B) Auscultatoire d'hyperdébit artériel.",
      "C) Palpatoire de frémissement systolique.",
      "D) Radiologique de dilatation aortique.",
      "E) ECG d'hypertrophie ventriculaire gauche."
    ],
    correctAnswers: [1],
    explanation: "C'est un signe auscultatoire périphérique. Il s'agit d'un souffle systolique et diastolique entendu à la compression légère du stéthoscope sur l'artère fémorale. Il reflète l'hyperpulsatilité et le flux rétrograde important en diastole, signant une IA volumineuse.",
    clinicalPearl: "Double souffle de Duroziez à l'artère fémorale = Signe périphérique direct d'hyperpulsatilité aortique."
  },
  {
    id: 'q-ia-04',
    courseId: 'crs-ia',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'étiologie la plus fréquente d'IA chronique dans les pays en développement comme l'Algérie chez l'adulte jeune est :",
    options: [
      "A) La bicuspidie aortique.",
      "B) La maladie dégénérative dystrophique.",
      "C) Le rhumatisme articulaire aigu (RAA).",
      "D) L'endocardite infectieuse.",
      "E) L'hypertension artérielle."
    ],
    correctAnswers: [2],
    explanation: "Le RAA, bien que devenu rare dans les pays développés, reste une étiologie très fréquente dans les pays en développement. Il touche des patients jeunes (20-30 ans) et entraîne des lésions de rétraction et de fusion commissurale des valves.",
    clinicalPearl: "Étiologie de l'IA chez le sujet jeune en Algérie : Penser RAA en premier."
  },
  {
    id: 'q-ia-05',
    courseId: 'crs-ia',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'IA chronique, l'hypertrophie ventriculaire gauche est dite \"adaptée\" car :",
    options: [
      "A) Elle réduit la précharge ventriculaire.",
      "B) Elle permet de maintenir une tension pariétale normale malgré la dilatation.",
      "C) Elle élimine la nécessité d'un traitement chirurgical.",
      "D) Elle augmente la pression diastolique aortique.",
      "E) Elle prévient la survenue de troubles du rythme."
    ],
    correctAnswers: [1],
    explanation: "Selon la loi de Laplace (T = P x D / 2e), la tension pariétale (T) augmente avec la pression intra-ventriculaire (P, postcharge fonctionnelle) et le diamètre (D, dilatation). L'augmentation de l'épaisseur pariétale (e) est une réponse compensatrice pour normaliser cette tension et préserver la fonction systolique.",
    clinicalPearl: "Hypertrophie excentrique adaptée : Maintien d'une tension pariétale normale selon la loi de Laplace."
  },
  {
    id: 'q-ia-06',
    courseId: 'crs-ia',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'intervention de Bentall consiste en :",
    options: [
      "A) Le remplacement isolé de la valve aortique.",
      "B) Un remplacement de l'aorte ascendante avec conservation de la valve native.",
      "C) Un remplacement valve aortique + aorte ascendante + réimplantation des coronaires.",
      "D) Une plastie de la valve aortique.",
      "E) La mise en place d'un stent dans l'aorte ascendante."
    ],
    correctAnswers: [2],
    explanation: "L'intervention de Bentall est le gold standard lorsqu'il existe une dilatation des sinus de Valsalva associée à une valvulopathie. Elle associe le remplacement de la valve aortique et de l'aorte ascendante par un tube composite (conduit valvé) et la réimplantation des coronaires sur ce tube.",
    clinicalPearl: "Intervention de Bentall : Remplacement valve aortique + aorte ascendante + réimplantation des coronaires."
  },
  {
    id: 'q-ia-07',
    courseId: 'crs-ia',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente une IA sévère avec une pression artérielle à 160/40 mmHg. L'élargissement de la différentielle pressionnelle est principalement dû à :",
    options: [
      "A) L'augmentation isolée de la pression systolique.",
      "B) La baisse de la pression systolique.",
      "C) L'augmentation de la pression diastolique.",
      "D) La baisse de la pression diastolique et l'augmentation de la pression systolique.",
      "E) Une augmentation de la fréquence cardiaque."
    ],
    correctAnswers: [3],
    explanation: "La pression systolique est augmentée (car le ventricule éjecte un volume sanguin important). La pression diastolique est effondrée à cause de la fuite rétrograde rapide du sang vers le ventricule dès la fermeture valvulaire. C'est cette combinaison qui élargit la différentielle.",
    clinicalPearl: "Pression différentielle très élargie (PAS haute et PAD très basse) = Signature hémodynamique de l'IA sévère."
  },
  {
    id: 'q-ia-08',
    courseId: 'crs-ia',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le roulement diastolique de Flint est dû à :",
    options: [
      "A) Une sténose mitrale organique associée.",
      "B) La fermeture partielle de la valve mitrale par le jet d'IA.",
      "C) Une régurgitation mitrale fonctionnelle.",
      "D) Un rétrécissement aortique serré associé.",
      "E) La compression de l'oreillette gauche par le VG dilaté."
    ],
    correctAnswers: [1],
    explanation: "Le jet de régurgitation aortique vient frapper la face antérieure de la grande valve mitrale en diastole, la repoussant et créant une sténose mitrale \"fonctionnelle\". Le murmure qui en résulte est le roulement de Flint, qui peut prêter à confusion avec un rétrécissement mitral rhumatismal.",
    clinicalPearl: "Roulement de Flint à la pointe = Sténose mitrale fonctionnelle provoquée par le jet d'IA régurgitant."
  },
  {
    id: 'q-ia-09',
    courseId: 'crs-ia',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La quantification de la sévérité d'une IA par échocardiographie Doppler repose sur tous ces paramètres SAUF :",
    options: [
      "A) La surface de l'orifice régurgitant (SOR).",
      "B) Le volume régurgité (VR).",
      "C) Le temps de demi-pression (PHT).",
      "D) Le gradient trans-valvulaire aortique maximal.",
      "E) La largeur de la vena contracta."
    ],
    correctAnswers: [3],
    explanation: "Le gradient trans-valvulaire aortique est un paramètre utilisé pour évaluer la sévérité d'une sténose aortique, pas d'une insuffisance. Les autres (SOR, VR, PHT, vena contracta) sont des critères majeurs de quantification de l'IA.",
    clinicalPearl: "Critères échocardiographiques de l'IA sévère : SOR >= 30 mm² (0.30 cm²), VR >= 60 mL, PHT <= 200 ms."
  },
  {
    id: 'q-ia-10',
    courseId: 'crs-ia',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication d'un traitement par bêta-bloquants dans l'IA chronique est :",
    options: [
      "A) Systématique en cas d'hypertension.",
      "B) Formelle en cas de dysfonction VG.",
      "C) Réservée aux patients porteurs d'une maladie de Marfan ou d'une bicuspidie.",
      "D) Contre-indiquée en raison du risque de bradycardie.",
      "E) Utilisée pour réduire la postcharge."
    ],
    correctAnswers: [2],
    explanation: "Les bêta-bloquants ne sont pas indiqués dans l'IA chronique standard. Leur utilité est spécifique aux patients présentant une dilatation aortique (comme dans le Marfan ou la bicuspidie) où ils ralentissent la progression de la dilatation en réduisant la force d'éjection (dp/dt).",
    clinicalPearl: "Bêtabloquants dans l'IA : Réservés au syndrome de Marfan ou bicuspidie pour freiner l'expansion aortique."
  },
  {
    id: 'q-ia-11',
    courseId: 'crs-ia',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal mécanisme d'adaptation du ventricule gauche dans l'IA chronique ?",
    options: [
      "A) L'hypertrophie concentrique.",
      "B) La tachycardie sinusale.",
      "C) La dilatation excentrique avec augmentation de la précharge.",
      "D) L'augmentation de la postcharge.",
      "E) La vasoconstriction périphérique."
    ],
    correctAnswers: [2],
    explanation: "Le volume régurgité en diastole entraîne une surcharge volémique (augmentation de la précharge). Le VG se dilate et, selon le mécanisme de Frank-Starling, augmente sa force de contraction pour éjecter le volume sanguin accru.",
    clinicalPearl: "Adaptation du VG à l'IA : Dilatation excentrique (surcharge de volume en diastole)."
  },
  {
    id: 'q-ia-12',
    courseId: 'crs-ia',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe de Musset correspond à :",
    options: [
      "A) Un souffle diastolique au bord gauche du sternum.",
      "B) Une danse des artères carotidiennes.",
      "C) Une oscillation rythmique de la tête synchrone avec le pouls.",
      "D) Un roulement diastolique à la pointe.",
      "E) Un pouls capillaire au niveau de l'ongle."
    ],
    correctAnswers: [2],
    explanation: "Décrit par le poète Alfred de Musset, c'est un signe rare et tardif d'IA sévère où le patient a des mouvements de hochement de tête involontaires et synchrones avec les battements cardiaques, dus à l'hyperpulsatilité artérielle.",
    clinicalPearl: "Signe de Musset = Hochement rythmique de la tête synchrone de la systole cardiaque."
  },
  {
    id: 'q-ia-13',
    courseId: 'crs-ia',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'IA aiguë, le tableau clinique est principalement dominé par :",
    options: [
      "A) Une hypertension artérielle majeure.",
      "B) Une cardiomégalie silencieuse.",
      "C) Un œdème aigu du poumon ou un choc cardiogénique.",
      "D) Un angor stable d'effort.",
      "E) Des signes artériels périphériques marqués."
    ],
    correctAnswers: [2],
    explanation: "À l'inverse de l'IA chronique, le VG n'a pas eu le temps de se dilater et de s'adapter. La surcharge volémique brutale est transmise directement à l'oreillette gauche et aux capillaires pulmonaires, entraînant un OAP. La baisse du débit cardiaque peut conduire au choc.",
    clinicalPearl: "IA aiguë = Tolérance catastrophique immédiate (OAP / choc) sur ventricule non dilaté."
  },
  {
    id: 'q-ia-14',
    courseId: 'crs-ia',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La mesure la plus fiable pour suivre la dilatation aortique dans le cadre d'une bicuspidie est :",
    options: [
      "A) La radiographie thoracique.",
      "B) L'ECG.",
      "C) L'échocardiographie transthoracique seule.",
      "D) L'angio-IRM ou le scanner.",
      "E) La coronarographie."
    ],
    correctAnswers: [3],
    explanation: "L'échocardiographie est le premier choix, mais pour une mesure précise et reproductible de l'ensemble de l'aorte thoracique (notamment l'aorte ascendante), l'angio-IRM ou l'angio-TDM sont supérieures et systématiquement réalisées pour le suivi.",
    clinicalPearl: "Suivi de la racine et de l'aorte thoracique : Angio-IRM ou Angio-Scanner injecté de référence."
  },
  {
    id: 'q-ia-15',
    courseId: 'crs-ia',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un \"pistol-shot\" sous-clavier droit est un signe de :",
    options: [
      "A) Régurgitation mitrale.",
      "B) Insuffisance aortique sévère.",
      "C) Communication interventriculaire.",
      "D) Rétrécissement aortique.",
      "E) Coarctation de l'aorte."
    ],
    correctAnswers: [1],
    explanation: "Ce claquement systolique perçu à l'auscultation des artères sous-clavières est dû à l'expansion brutale et vigoureuse de la paroi aortique par le volume d'éjection systolique très augmenté, typique d'une IA sévère.",
    clinicalPearl: "\"Pistol-shot\" fémoral ou sous-clavier = Bruit de claquement systolique artériel d'hyperpulsatilité."
  },
  {
    id: 'q-ia-16',
    courseId: 'crs-ia',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication chirurgicale formelle pour une IA sévère asymptomatique est :",
    options: [
      "A) Un DTSVG > 50 mm (ou 25 mm/m² de surface corporelle) ou une FEVG ≤ 50%.",
      "B) Un DTDVG > 65 mm seul avec FEVG normale.",
      "C) Une FEVG > 60%.",
      "D) La présence d'un flutter auriculaire.",
      "E) Une pression artérielle différentielle > 80 mmHg sans dilatation."
    ],
    correctAnswers: [0],
    explanation: "Le diamètre télésystolique du VG (DTSVG) est un critère pronostique majeur. Un seuil > 50 mm (ou 25 mm/m² de surface corporelle) chez le patient asymptomatique est une indication classique de chirurgie pour prévenir la dysfonction VG irréversible post-opératoire.",
    clinicalPearl: "\"Règle du 50\" pour l'opération de l'IA asymptomatique : FEVG <= 50% OU DTSVG > 50 mm (25 mm/m²)."
  },
  {
    id: 'q-ia-17',
    courseId: 'crs-ia',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'étiologie \"annulo-ectasiante\" de l'IA se rapporte à :",
    options: [
      "A) Une malformation congénitale isolée des valves.",
      "B) Une dilatation de l'anneau aortique et de l'aorte ascendante.",
      "C) Une calcification des valves.",
      "D) Une fusion des commissures.",
      "E) Des végétations infectieuses."
    ],
    correctAnswers: [1],
    explanation: "La maladie annulo-ectasiante est caractérisée par une dilatation de la racine de l'aorte (anneau aortique et aorte ascendante) qui écarte les sigmoïdes aortiques et empêche leur coaptation en diastole, entraînant une IA le plus souvent centrale.",
    clinicalPearl: "Maladie annulo-ectasiante = Dilatation anévrysmale de la racine aortique empêchant la coaptation valvulaire."
  },
  {
    id: 'q-ia-18',
    courseId: 'crs-ia',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le paramètre Doppler \"PHT\" (Temps de Demi-Pression) dans une IA sévère est typiquement :",
    options: [
      "A) > 500 ms.",
      "B) Entre 300 et 400 ms.",
      "C) < 200 ms.",
      "D) Non mesurable.",
      "E) Identique à celui d'une sténose mitrale."
    ],
    correctAnswers: [2],
    explanation: "Le PHT mesure la vitesse à laquelle les pressions entre l'aorte et le VG s'égalisent en diastole. Dans une IA sévère, cette égalisation est très rapide (car la fuite est importante), donc le PHT est court (< 200 ms est un critère de sévérité).",
    clinicalPearl: "PHT de l'IA : Plus la fuite est sévère, plus la PHT est COURTE (< 200 ms) !"
  },
  {
    id: 'q-ia-19',
    courseId: 'crs-ia',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médical de première intention d'une IA chronique sévère asymptomatique avec VG dilaté fait appel aux :",
    options: [
      "A) Bêta-bloquants.",
      "B) Digitaliques.",
      "C) Anti-arythmiques.",
      "D) Vasodilatateurs artériels (IEC/ARA2).",
      "E) Diurétiques de l'anse."
    ],
    correctAnswers: [3],
    explanation: "Les vasodilatateurs artériels (IEC, ARA2) sont la pierre angulaire du traitement médical. En réduisant la résistance artérielle systémique (postcharge), ils favorisent l'éjection antérograde et réduisent le volume régurgité, pouvant retarder la chirurgie.",
    clinicalPearl: "Vasodilatateurs artériels (IEC/ARA2) = Réduction de la post-charge et du volume régurgité dans l'IA."
  },
  {
    id: 'q-ia-20',
    courseId: 'crs-ia',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale complication d'une dilatation de l'aorte ascendante > 50 mm dans le cadre d'un syndrome de Marfan est :",
    options: [
      "A) L'endocardite infectieuse.",
      "B) L'infarctus du myocarde.",
      "C) La dissection ou la rupture aortique.",
      "D) L'embolie pulmonaire.",
      "E) La tamponnade péricardique."
    ],
    correctAnswers: [2],
    explanation: "Le risque de dissection aortique augmente exponentiellement avec le diamètre de l'aorte, surtout en présence d'une maladie du tissu élastique comme le Marfan. C'est la raison de la surveillance étroite et de la chirurgie prophylactique (généralement à 50 mm).",
    clinicalPearl: "Diamètre aortique > 50 mm dans Marfan = Indication chirurgicale formelle préventive de dissection."
  },
  {
    id: 'q-ia-21',
    courseId: 'crs-ia',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'échocardiographie transœsophagienne (ETO) dans l'IA est particulièrement indiquée pour :",
    options: [
      "A) Le diagnostic positif initial d'une fuite banale.",
      "B) La quantification standard de la régurgitation.",
      "C) L'évaluation de la fonction VG.",
      "D) La suspicion d'endocardite ou de dissection.",
      "E) Le suivi annuel de routine."
    ],
    correctAnswers: [3],
    explanation: "L'ETO offre une meilleure résolution pour visualiser les végétations d'endocardite, les abcès annulaires, les déhiscences de prothèse ou la membrane intimale d'une dissection aortique. Elle est donc réservée à ces situations complexes.",
    clinicalPearl: "ETO dans l'IA : Recherche de dissection ou d'endocardite infectieuse associée."
  },
  {
    id: 'q-ia-22',
    courseId: 'crs-ia',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"cœur de bœuf\" sur la radiographie thoracique évoque :",
    options: [
      "A) Une péricardite constrictive.",
      "B) Une cardiomégalie majeure par dilatation VG.",
      "C) Un épanchement péricardique massif.",
      "D) Un anévrisme du ventricule droit.",
      "E) Une sténose mitrale."
    ],
    correctAnswers: [1],
    explanation: "Cette image décrit une cardiomégalie globale avec effacement des arcs, typique d'une dilatation ventriculaire gauche massive (cor bovinum), comme on peut l'observer dans les valvulopathies volumineuses évoluées (IA ou IM).",
    clinicalPearl: "\"Cor bovinum\" = Cardiomégalie volumineuse par dilatation extrême du ventricule gauche dans l'IA chronique."
  },
  {
    id: 'q-ia-23',
    courseId: 'crs-ia',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La méthode PISA en échocardiographie Doppler est utilisée pour :",
    options: [
      "A) Mesurer le gradient aortique.",
      "B) Calculer la surface valvulaire aortique sténosée.",
      "C) Quantifier le volume régurgitant de l'IA (VR) et la surface de l'orifice régurgitant (SOR).",
      "D) Évaluer la pression artérielle pulmonaire.",
      "E) Diagnostiquer une bicuspidie."
    ],
    correctAnswers: [2],
    explanation: "La méthode PISA (Proximal Isovelocity Surface Area) est une technique semi-quantitative fiable pour calculer le volume régurgitant (VR) et la surface de l'orifice régurgitant (SOR) dans les insuffisances valvulaires, dont l'IA.",
    clinicalPearl: "PISA : SOR ≥ 0.30 cm² (30 mm²) et VR ≥ 60 mL = Insuffisance Aortique sévère."
  },
  {
    id: 'q-ia-24',
    courseId: 'crs-ia',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une IA par bicuspidie aortique est souvent associée à :",
    options: [
      "A) Une hypoplasie de l'aorte ascendante.",
      "B) Une dilatation de l'aorte ascendante.",
      "C) Une sténose de l'artère pulmonaire.",
      "D) Une communication interauriculaire.",
      "E) Une coarctation de l'aorte isolée."
    ],
    correctAnswers: [1],
    explanation: "La bicuspidie aortique est une maladie de la valve et de la paroi aortique. Une dilatation de l'aorte ascendante (annulo-ectasie) est une association très fréquente qui doit être systématiquement recherchée et surveillée.",
    clinicalPearl: "Bicuspidie aortique = Maladie de la valve + Maladie de la paroi de l'aorte ascendante."
  },
  {
    id: 'q-ia-25',
    courseId: 'crs-ia',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'IA aiguë, le souffle diastolique peut être court ou absent parce que :",
    options: [
      "A) Le gradient de pression aorto-ventriculaire est faible.",
      "B) La fuite est minime.",
      "C) Le patient est en tachycardie.",
      "D) Les pressions diastoliques s'égalisent rapidement.",
      "E) A et D sont corrects."
    ],
    correctAnswers: [4],
    explanation: "En IA aiguë, la pression diastolique du VG monte très haut très vite (car le VG est non compliant). La différence de pression entre l'aorte et le VG en diastole (le gradient qui génère le souffle) s'annule donc rapidement, rendant le souffle bref, de basse intensité, ou même imperceptible.",
    clinicalPearl: "Piège mortel de l'IA aiguë : Le souffle diastolique est bref ou inaudible en raison de l'égalisation précoce des pressions !"
  },

  // 5 Cas Cliniques
  {
    id: 'cas-ia-01',
    courseId: 'crs-ia',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Le Jeune Homme avec des Antécédents de RAA\nUn homme de 28 ans se présente pour une dyspnée d'effort stade II NYA. Il rapporte des antécédents de rhumatisme articulaire aigu dans l'enfance. L'auscultation trouve un souffle diastolique décrescendo au bord gauche du sternum et un roulement diastolique à la pointe. La PA est à 170/50 mmHg. L'ECG montre une HVG. La radio thoracique montre une cardiomégalie.\nQ1. Le roulement diastolique à la pointe est très évocateur de :\nQ2. La prise en charge thérapeutique la plus urgente pour ce patient est :",
    options: [
      "A) Un rétrécissement mitral organique rhumatismal associé / Mise sous bêta-bloquant",
      "B) Un rétrécissement aortique serré / Prescription de diurétiques",
      "C) Un roulement de Flint (IA sévère) / Réalisation d'une échocardiographie pour confirmer et quantifier l'IA",
      "D) Un frottement péricardique / Remplacement valvulaire immédiat sans écho",
      "E) Un anévrisme du VG / Antibiotiques seuls"
    ],
    correctAnswers: [2],
    explanation: "Le roulement de Flint est typique d'une IA sévère où le jet aortique vient heurter la valve mitrale. Ce patient étant symptomatique avec des signes d'IA sévère, la première étape indispensable est la confirmation et la quantification échocardiographique de la fuite.",
    clinicalPearl: "Roulement de Flint à l'apex + Souffle diastolique au bord gauche du sternum = IA sévère."
  },
  {
    id: 'cas-ia-02',
    courseId: 'crs-ia',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : La Dilatation Aortique Découverte Fortuitement\nUne femme de 45 ans, grande et mince, avec des antécédents familiaux de dissection aortique, est adressée pour un souffle cardiaque découvert à l'occasion d'une consultation de routine. Elle est totalement asymptomatique. L'échocardiographie révèle une IA modérée sur dilatation importante de l'aorte ascendante à 52 mm.\nQ1. L'étiologie la plus probable est :\nQ2. La conduite à tenir est :",
    options: [
      "A) Une hypertension artérielle non contrôlée / Surveillance annuelle",
      "B) Une bicuspidie aortique / Prescription de bêta-bloquant seul",
      "C) Une maladie du tissu conjonctif de type Marfan ou Loeys-Dietz / Angio-TDM pour mesure précise de l'aorte et bilan pré-opératoire de remplacement aortique",
      "D) Une séquelle de RAA / Infiltration de corticoïdes",
      "E) Une endocardite ancienne / Remplacement valvulaire simple sans toucher l'aorte"
    ],
    correctAnswers: [2],
    explanation: "Le morphotype (grande, mince) et les antécédents familiaux de dissection orientent fortement vers une maladie héréditaire de l'aorte (Marfan). Le diamètre aortique est > 50 mm, ce qui est un seuil chirurgical formel (Bentall) pour prévenir la dissection aortique.",
    clinicalPearl: "Marfan avec aorte >= 50 mm = Indication formelle de chirurgie de Bentall préventive."
  },
  {
    id: 'cas-ia-03',
    courseId: 'crs-ia',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : L'Insuffisance Aortique Aiguë\nUn homme de 60 ans, fébrile, est admis aux urgences pour un tableau d'œdème aigu du poumon. Il n'a pas d'antécédents cardiaques connus. L'auscultation trouve un souffle diastolique bref. L'échocardiographie montre une IA massive avec des végétations sur une valve aortique tricuspide, une FEVG conservée et un VG non dilaté.\nQ1. Le diagnostic étiologique le plus probable est :\nQ2. La prise en charge immédiate inclut :",
    options: [
      "A) Une dissection aortique / Chirurgie sans antibiothérapie",
      "B) Une endocardite infectieuse / Traitement médical de stabilisation (diurétiques/vasodilatateurs), antibiothérapie probabiliste immédiate et transfert rapide pour chirurgie valvulaire",
      "C) Un traumatisme thoracique / Ponction pleurale",
      "D) Un rhumatisme articulaire aigu / Bêta-bloquants à forte dose",
      "E) Une rupture de cordage mitral / Surveillance 15 jours"
    ],
    correctAnswers: [1],
    explanation: "Le tableau d'IA aiguë sur OAP chez un patient fébrile avec végétations est une endocardite infectieuse aiguë. La prise en charge est une urgence médico-chirurgicale associant stabilisation hémodynamique, antibiothérapie bactéricide précoce et chirurgie rapide.",
    clinicalPearl: "IA aiguë sur endocardite avec OAP = Urgence chirurgicale sous couverture antibiotique."
  },
  {
    id: 'cas-ia-04',
    courseId: 'crs-ia',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le Souffle Systolique Associé\nUn patient de 50 ans consulte pour une asthénie. L'auscultation trouve un souffle systolique rude en jet de sifflement au foyer aortique irradiant aux carotides, et un souffle diastolique décrescendo au bord gauche du sternum. L'échocardiographie confirme une IA sévère et un rétrécissement aortique serré.\nQ1. Ce tableau est typique d'une maladie aortique combinée.\nQ2. La décision chirurgicale sera principalement basée sur :",
    options: [
      "A) La sévérité de l'IA seule.",
      "B) La sévérité de la sténose aortique seule.",
      "C) La présence de symptômes ou de retentissement sur le VG (FEVG, dilatation).",
      "D) L'étiologie de la valvulopathie uniquement.",
      "E) L'absence de souffle fémoral."
    ],
    correctAnswers: [2],
    explanation: "Dans les doubles lésions aortiques, les indications chirurgicales sont globales : apparition de symptômes ou altération de la fonction ventriculaire gauche (FEVG ≤ 50%, dilatation VG). On ne dissocie pas artificiellement les deux composantes.",
    clinicalPearl: "Maladie aortique (RAO + IA) : Décision opératoire globale basée sur les symptômes et la fonction VG."
  },
  {
    id: 'cas-ia-05',
    courseId: 'crs-ia',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le Patient Asymptomatique avec Critères de Chirurgie\nUn homme de 48 ans, totalement asymptomatique et sportif, a une IA sévère connue. L'échocardiographie de contrôle annuelle montre un DTSVG à 55 mm (stable) et une FEVG à 48% (en baisse par rapport à 55% l'année dernière).\nQ1. Que signifie la baisse de la FEVG à 48% ?\nQ2. La conduite à tenir est :",
    options: [
      "A) Variation normale / Poursuivre le sport sans restriction",
      "B) Décompensation débutante / Bilan pré-opératoire en vue d'un remplacement valvulaire aortique (indication de classe I)",
      "C) Aggravation aiguë / Surveillance par une ETO dans 1 an",
      "D) Effet du tabac / Réduire les IEC",
      "E) Indication d'une greffe cardiaque en urgence"
    ],
    correctAnswers: [1],
    explanation: "Une FEVG qui passe en dessous de 50% ou un DTSVG > 50 mm chez un patient avec IA sévère est une indication chirurgicale formelle de classe I, même chez l'asymptomatique, afin de préserver définitivement la fonction ventriculaire.",
    clinicalPearl: "IA sévère : FEVG < 50% ou DTSVG > 50 mm = Indication opératoire Classe I indiscutable !"
  }
];
