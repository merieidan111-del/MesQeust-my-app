import { Question } from '../../types/medical';

export const RAO_EXACT_QUESTIONS: Question[] = [
  // 24 QCMs from PDF
  {
    id: 'q-rao-01',
    courseId: 'crs-rao',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient de 70 ans avec un souffle systolique aortique, lequel des signes suivants est le plus en faveur d'un RAO serré ?",
    options: [
      "A. Présence d'un clic protosystolique.",
      "B. Irradiation du souffle aux carotides.",
      "C. Abolition du B2 au foyer aortique.",
      "D. Présence d'un B4 (galop présystolique).",
      "E. Renforcement du souffle après une diastole longue."
    ],
    correctAnswers: [2],
    explanation: "L'abolition du B2 est un signe spécifique d'un RAO serré, car les calcifications valvulaires empêchent la fermeture des sigmoïdes aortiques, sauf dans l'étiologie rhumatismale où il peut être conservé. Les autres options peuvent être présentes dans des RAO non serrés ou d'autres pathologies.",
    clinicalPearl: "Abolition du B2 aortique = Signe auscultatoire très spécifique de RAO serré calcifié."
  },
  {
    id: 'q-rao-02',
    courseId: 'crs-rao',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La dyspnée d'effort dans le RAO serré est principalement due à :",
    options: [
      "A. Une augmentation du débit cardiaque à l'effort.",
      "B. Une baisse de la post-charge du ventricule gauche.",
      "C. Une altération de la fonction diastolique du VG.",
      "D. Une fuite aortique associée.",
      "E. Une ischémie coronaire systématique."
    ],
    correctAnswers: [2],
    explanation: "L'hypertrophie ventriculaire gauche concentrique diminue la compliance et altère le remplissage ventriculaire (fonction diastolique), entraînant une élévation des pressions de remplissage et une congestion pulmonaire à l'effort, se manifestant par la dyspnée.",
    clinicalPearl: "Dyspnée d'effort du RAO : Altération de la compliance diastolique du VG hypertrophié concentrique."
  },
  {
    id: 'q-rao-03',
    courseId: 'crs-rao',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 75 ans a une surface aortique échocardiographique à 0,8 cm², un gradient moyen à 30 mmHg (donc < 40 mmHg), mais une FEVG à 35%. Comment qualifie-t-on cette situation ?",
    options: [
      "A. RAO non serré.",
      "B. RAO serré classique à haut débit.",
      "C. RAO serré avec discordance sévère.",
      "D. RAO serré en bas débit bas gradient.",
      "E. RAO pseudoséreux."
    ],
    correctAnswers: [3],
    explanation: "En cas de dysfonction VG sévère (FEVG basse), le débit cardiaque est faible, ce qui peut sous-estimer le gradient et la vitesse. Une surface <1cm² avec un gradient moyen <40mmHg chez un patient à FEVG basse définit le RAO serré en bas débit bas gradient. Un test au dobutamine peut être nécessaire pour confirmer la sévérité.",
    clinicalPearl: "RAO serré à bas débit bas gradient (Low-Flow Low-Gradient) : Surface < 1 cm², Gradient < 40 mmHg, FE altérée."
  },
  {
    id: 'q-rao-04',
    courseId: 'crs-rao',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est l'étiologie la plus probable d'un RAO chez un homme de 45 ans sans facteurs de risque cardiovasculaire ?",
    options: [
      "A. Dégénérescence calcifique.",
      "B. Bicuspidie aortique.",
      "C. Rhumatisme articulaire aigu.",
      "D. Athérome.",
      "E. Insuffisance rénale chronique."
    ],
    correctAnswers: [1],
    explanation: "La bicuspidie aortique est une anomalie congénitale fréquente (1% de la population) et est la cause la plus fréquente de RAO chez le patient jeune (<65 ans). Le RAA (C) est également possible, mais la bicuspidie est plus fréquente dans ce contexte d'âge.",
    clinicalPearl: "RAO du sujet jeune (< 65 ans) = Bicuspidie aortique congénitale en 1ère position."
  },
  {
    id: 'q-rao-05',
    courseId: 'crs-rao',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mécanisme principal de l'angor d'effort dans le RAO serré est :",
    options: [
      "A. Une vasodilatation coronaire excessive.",
      "B. Une anémie sévère associée.",
      "C. Une augmentation de la consommation myocardique en O2 et une diminution de la réserve coronaire.",
      "D. Une compression mécanique des troncs coronaires.",
      "E. Une embolie calcaire dans les artères coronaires."
    ],
    correctAnswers: [2],
    explanation: "Le myocarde hypertrophié consomme plus d'oxygène. De plus, la pression intraventriculaire élevée comprime les artérioles intramurales, limitant leur capacité à se dilater et à augmenter le flux sanguin à l'effort, créant un déséquilibre offre/demande.",
    clinicalPearl: "Angor du RAO = Déséquilibre offre/demande par masse myocardique accrue et compression sous-endocardique."
  },
  {
    id: 'q-rao-06',
    courseId: 'crs-rao',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le RAO dégénératif, la première étape histologique est :",
    options: [
      "A. La symphyse commissurale.",
      "B. L'épaississement fibreux des valves.",
      "C. La sclérose aortique (épaississement/calcification sans obstruction).",
      "D. La rétraction valvulaire.",
      "E. L'ulcération et la thrombose."
    ],
    correctAnswers: [2],
    explanation: "La sclérose aortique, caractérisée par un épaississement et/ou des calcifications sans retentissement hémodynamique, précède la sténose aortique serrée. C'est une entité distincte et très fréquente chez le sujet âgé.",
    clinicalPearl: "Sclérose aortique = Étape initiale pré-sténotique du vieillissement valvulaire dégénératif."
  },
  {
    id: 'q-rao-07',
    courseId: 'crs-rao',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen est le plus utile pour évaluer la sévérité d'un RAO chez un patient symptomatique avec une FEVG basse et un gradient moyen bas (30 mmHg) ?",
    options: [
      "A. ECG.",
      "B. Radiographie thoracique.",
      "C. Échocardiographie-doppler de stress à la dobutamine.",
      "D. Coronarographie.",
      "E. Scanner cardiaque sans injection."
    ],
    correctAnswers: [2],
    explanation: "L'écho-doppler de stress à la dobutamine permet d'évaluer la \"réserve contractile\". Si la FEVG et le gradient augmentent sous dobutamine, cela confirme un RAO serré vrai (dit \"à réserve contractile préservée\"). Si non, il s'agit d'une sténose pseudoséreuse.",
    clinicalPearl: "Écho-Dobutamine à faible dose : Test clé de la réserve contractile dans le RAO bas débit bas gradient."
  },
  {
    id: 'q-rao-08',
    courseId: 'crs-rao',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication formelle au remplacement valvulaire dans un RAO asymptomatique est :",
    options: [
      "A. Un âge supérieur à 80 ans.",
      "B. Une FEVG < 50%.",
      "C. La présence d'un souffle intense.",
      "D. Une hypertension artérielle associée.",
      "E. Une vitesse aortique maximale (Vmax) à 3,5 m/s."
    ],
    correctAnswers: [1],
    explanation: "Une FEVG < 50% en l'absence d'autre cause est une indication de classe I pour le remplacement valvulaire, même en l'absence de symptômes, car elle signe un retentissement hémodynamique sévère.",
    clinicalPearl: "\"FEST\" pour le RAO asymptomatique : FEVG < 50%, Effort anormal, Sévérité Vmax > 5 m/s, Trop de BNP."
  },
  {
    id: 'q-rao-09',
    courseId: 'crs-rao',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une complication classique du TAVI est :",
    options: [
      "A. La resténose précoce à 6 mois.",
      "B. Le bloc auriculo-ventriculaire complet.",
      "C. L'endocardite infectieuse systématique.",
      "D. La dissection aortique longitudinale.",
      "E. L'anévrisme du ventricule gauche."
    ],
    correctAnswers: [1],
    explanation: "Le BAV complet est une complication connue du TAVI due à la compression du tissu de conduction par la prothèse au niveau de la valve aortique native calcifiée, nécessitant parfois l'implantation d'un pacemaker définitif.",
    clinicalPearl: "Complication conductrice post-TAVI : BAV complet par compression du faisceau de His."
  },
  {
    id: 'q-rao-10',
    courseId: 'crs-rao',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"score calcique aortique\" au scanner est particulièrement utile dans quelle situation ?",
    options: [
      "A. Pour diagnostiquer une endocardite.",
      "B. En cas de discordance entre symptômes, surface et paramètres hémodynamiques.",
      "C. Pour choisir la taille de la prothèse mécanique.",
      "D. Pour évaluer la fonction ventriculaire droite.",
      "E. Comme substitut à la coronarographie."
    ],
    correctAnswers: [1],
    explanation: "Le score calcique quantifie le fardeau calcique valvulaire. Un score élevé (>1200 UA chez la femme, >2000 UA chez l'homme) conforte fortement le diagnostic de RAO serré, surtout dans les situations ambiguës de bas débit.",
    clinicalPearl: "Score calcique au scanner : Confirme le RAO serré si > 2000 (Homme) ou > 1200 (Femme)."
  },
  {
    id: 'q-rao-11',
    courseId: 'crs-rao',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe ECG est le plus caractéristique de l'hypertrophie VG dans le RAO ?",
    options: [
      "A. Ondes Q profondes en dérivation V1-V2.",
      "B. Bloc de branche droit complet.",
      "C. Rotation axiale gauche et onde T négative en latéral.",
      "D. Rythme sinusal à 50 bpm.",
      "E. Ondes P pointues en DII."
    ],
    correctAnswers: [2],
    explanation: "L'hypertrophie VG se traduit par une augmentation des voltages (indices de Sokolow-Lyon) et des troubles de repolarisation (ondes T asymétriques négatives en latéral), reflétant la \"surcharge systolique\".",
    clinicalPearl: "Surcharge systolique du VG : Sokolow > 35 mm avec ondes T négatives asymétriques en V5-V6."
  },
  {
    id: 'q-rao-12',
    courseId: 'crs-rao',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La valvuloplastie aortique percutanée est principalement indiquée comme :",
    options: [
      "A. Traitement curatif définitif.",
      "B. Traitement de première intention chez le patient jeune.",
      "C. \"Pont\" vers un traitement curatif en situation aiguë critique.",
      "D. Alternative au TAVI en cas de valve bicuspide.",
      "E. Méthode de choix en cas de RAO asymptomatique."
    ],
    correctAnswers: [2],
    explanation: "La valvuloplastie a un effet transitoire (resténose fréquente). Elle est utilisée comme \"bridge\" en attente d'un TAVI ou d'une chirurgie chez un patient en instabilité hémodynamique (choc cardiogénique) ou pour une chirurgie non cardiaque urgente.",
    clinicalPearl: "Valvuloplastie percutanée au ballonnet : Traitement palliatif temporaire ou \"pont\" d'urgence."
  },
  {
    id: 'q-rao-13',
    courseId: 'crs-rao',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le principal facteur pronostique péjoratif dans le RAO serré est :",
    options: [
      "A. L'âge du patient.",
      "B. L'apparition des symptômes (dyspnée, syncope, angor).",
      "C. La présence d'un souffle intense.",
      "D. La taille de l'oreillette gauche.",
      "E. La présence d'une hypertension artérielle."
    ],
    correctAnswers: [1],
    explanation: "L'apparition des symptômes marque un tournant pronostique majeur, avec une survie médiocre sans traitement (mortalité à 2 ans de 50% pour la syncope, 2 ans pour l'angor, 1-2 ans pour la dyspnée). C'est une indication formelle au remplacement valvulaire.",
    clinicalPearl: "Pensez à la triade \"SAD\" (Syncope, Angor, Dyspnée) : L'apparition des symptômes précipite la mortalité."
  },
  {
    id: 'q-rao-14',
    courseId: 'crs-rao',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mécanisme adaptatif initial du ventricule gauche au RAO est :",
    options: [
      "A. La dilatation excentrique.",
      "B. L'hypertrophie concentrique.",
      "C. La nécrose myocytaire.",
      "D. La fibrose endomyocardique.",
      "E. La tachycardie sinusale."
    ],
    correctAnswers: [1],
    explanation: "Pour faire face à l'augmentation de la post-charge, le VG développe une hypertrophie concentrique (épaississement pariétal sans dilatation), ce qui permet de maintenir une fonction systolique normale pendant de nombreuses années.",
    clinicalPearl: "Loi de Laplace : Hypertrophie concentrique pour normaliser la tension de paroi systolique."
  },
  {
    id: 'q-rao-15',
    courseId: 'crs-rao',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal avantage du TAVI par rapport à la chirurgie pour un patient à haut risque chirurgical ?",
    options: [
      "A. Absence de besoin de suivi échocardiographique.",
      "B. Durabilité supérieure de la bioprothèse.",
      "C. Procédure moins invasive, sans circulation extracorporelle.",
      "D. Élimination du besoin d'un traitement anticoagulant.",
      "E. Coût moindre à long terme."
    ],
    correctAnswers: [2],
    explanation: "Le TAVI, étant une procédure percutanée, évite la sternotomie et la circulation extracorporelle, réduisant ainsi la morbidité périopératoire et la durée d'hospitalisation pour les patients fragiles à haut risque chirurgical.",
    clinicalPearl: "TAVI : Moins invasif, pas de sternotomie ni de clampage aortique sous CEC."
  },
  {
    id: 'q-rao-16',
    courseId: 'crs-rao',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La syncope d'effort dans le RAO n'est pas liée à :",
    options: [
      "A. Un bas débit cardiaque à l'effort.",
      "B. Un réflexe vasodépresseur.",
      "C. Des troubles du rythme ventriculaire.",
      "D. Un bloc auriculo-ventriculaire.",
      "E. Une vasodilatation périphérique normale."
    ],
    correctAnswers: [4],
    explanation: "À l'effort, il y a une vasodilatation périphérique normale. Dans le RAO, le débit cardiaque est fixe et ne peut pas augmenter pour compenser cette vasodilatation, entraînant une hypotension et une syncope. Ce n'est pas la vasodilatation qui est anormale, mais l'incapacité du cœur à y répondre.",
    clinicalPearl: "Syncope d'effort : Inadéquation entre débit cardiaque fixé par la sténose et vasodilatation musculaire."
  },
  {
    id: 'q-rao-17',
    courseId: 'crs-rao',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le RAO rhumatismal, à la différence du RAO dégénératif, on retrouve souvent :",
    options: [
      "A. Une atteinte isolée de la valve aortique.",
      "B. Une abolition du B2.",
      "C. Une association à d'autres valvulopathies (RM).",
      "D. Une calcification massive des commissures.",
      "E. Une prédominance chez l'homme âgé."
    ],
    correctAnswers: [2],
    explanation: "Le rhumatisme articulaire aigu (RAA) cause une pancardite, touchant souvent plusieurs valves. Le RAO rhumatismal est fréquemment associé à une insuffisance mitrale ou un rétrécissement mitral.",
    clinicalPearl: "RAO rhumatismal : Très fréquemment associé à une atteinte mitrale (polyvalvulopathie rhumatismale)."
  },
  {
    id: 'q-rao-18',
    courseId: 'crs-rao',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'échocardiographie permet de quantifier la sévérité du RAO par tous ces paramètres SAUF :",
    options: [
      "A. La surface aortique (planimétrie).",
      "B. Le gradient moyen VG/aorte.",
      "C. La vitesse maximale (Vmax) du flux aortique.",
      "D. Le score calcique aortique.",
      "E. Le temps de demi-pression."
    ],
    correctAnswers: [3],
    explanation: "Le score calcique aortique est mesuré par le scanner cardiaque, et non par l'échocardiographie standard.",
    clinicalPearl: "Règle des \"1-2-3-4\" en écho : Surface < 1 cm², Vmax > 4 m/s, Gradient > 40 mmHg."
  },
  {
    id: 'q-rao-19',
    courseId: 'crs-rao',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La dégradation de la fonction systolique du VG dans le RAO arrive :",
    options: [
      "A. Dès le début de la sténose.",
      "B. Précocement, en même temps que la dysfonction diastolique.",
      "C. Tardivement, lorsque les mécanismes adaptatifs sont dépassés.",
      "D. Uniquement en cas de fibrillation auriculaire.",
      "E. Exclusivement après un remplacement valvulaire."
    ],
    correctAnswers: [2],
    explanation: "La fonction systolique (FEVG) est longtemps préservée grâce à l'hypertrophie compensatrice. Elle ne baisse qu'à un stade très évolué, lorsque l'hypertrophie devient inadaptée et que la post-charge l'emporte.",
    clinicalPearl: "La FEVG baisse tardivement dans le RAO : une chute de FEVG < 50% impose d'opérer sans tarder."
  },
  {
    id: 'q-rao-20',
    courseId: 'crs-rao',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour un patient de 68 ans avec un RAO serré symptomatique et un score STS de 10%, quelle est la meilleure option thérapeutique ?",
    options: [
      "A. Traitement médical seul.",
      "B. Valvuloplastie aortique.",
      "C. Remplacement valvulaire chirurgical.",
      "D. TAVI par voie fémorale.",
      "E. Surveillance échocardiographique semestrielle."
    ],
    correctAnswers: [3],
    explanation: "Un score STS > 8% définit un patient à haut risque chirurgical. Pour un patient symptomatique de 68 ans, le TAVI par voie fémorale est l'option de première intention recommandée, ayant démontré sa supériorité ou son équivalence à la chirurgie dans cette population.",
    clinicalPearl: "STS > 8% = Haut risque chirurgical orientant formellement vers le TAVI."
  },
  {
    id: 'q-rao-21',
    courseId: 'crs-rao',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe radiologique est évocateur d'un RAO serré ?",
    options: [
      "A. Cardiomégalie majeure.",
      "B. Élargissement du médiastin.",
      "C. Calcifications de l'anneau aortique sur le cliché standard.",
      "D. Signes d'œdème pulmonaire alvéolaire.",
      "E. Épanchement pleural bilatéral."
    ],
    correctAnswers: [2],
    explanation: "La visualisation de calcifications valvulaires aortiques sur une radiographie thoracique standard (surtout en incidence de profil) est très suggestive d'un RAO calcifique serré chez un patient symptomatique.",
    clinicalPearl: "Calcifications valvulaires aortiques visibles de profil à la radiographie thoracique."
  },
  {
    id: 'q-rao-22',
    courseId: 'crs-rao',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le rôle de la systole auriculaire est particulièrement crucial dans le RAO car :",
    options: [
      "A. Elle prévient la thrombose intra-auriculaire.",
      "B. Elle permet l'éjection du sang en systole.",
      "C. Elle contribue de façon importante au remplissage du VG non compliant.",
      "D. Elle stimule le nœud sinusal.",
      "E. Elle prévient l'hypertrophie ventriculaire."
    ],
    correctAnswers: [2],
    explanation: "Dans un VG hypertrophié et non compliant (diastoliquement dysfonctionnel), le remplissage passif est réduit. La systole auriculaire (onde A) contribue donc de manière significative (jusqu'à 30-40%) au remplissage ventriculaire. La survenue d'une fibrillation auriculaire, qui abolit cette systole, est donc très mal tolérée.",
    clinicalPearl: "Dans le RAO, la perte du 'kick auriculaire' en FA précipite immédiatement l'œdème pulmonaire."
  },
  {
    id: 'q-rao-23',
    courseId: 'crs-rao',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La coronarographie pré-opératoire est systématiquement indiquée chez :",
    options: [
      "A. Tous les patients de plus de 18 ans.",
      "B. Les hommes > 40 ans ou femmes ménopausées.",
      "C. Seulement en présence d'un angor typique.",
      "D. Uniquement avant un TAVI.",
      "E. Jamais, remplacée par le scanner coronaire."
    ],
    correctAnswers: [1],
    explanation: "Selon les recommandations, la coronarographie est indiquée dans le bilan pré-opératoire d'un remplacement valvulaire chez les hommes > 40 ans, les femmes ménopausées, ou en présence de facteurs de risque cardiovasculaire, pour rechercher une maladie coronaire associée qui nécessiterait un pontage concomitant.",
    clinicalPearl: "Coronarographie pré-opératoire systématique : Hommes > 40 ans et femmes ménopausées."
  },
  {
    id: 'q-rao-24',
    courseId: 'crs-rao',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'endocardite infectieuse sur RAO :",
    options: [
      "A. Est très fréquente.",
      "B. Se présente typiquement par une aggravation brutale du RAO.",
      "C. Est prévenue par la valvuloplastie.",
      "D. N'arrive que sur les prothèses mécaniques.",
      "E. Est la cause la plus fréquente de décès."
    ],
    correctAnswers: [1],
    explanation: "Bien que rare, l'endocardite sur valve sténotique native peut entraîner une destruction valvulaire, une aggravation aiguë de la sténose ou l'apparition d'une fuite, et une instabilité hémodynamique.",
    clinicalPearl: "Endocardite sur RAO : Gravité extrême par apparition rapide d'une insuffisance aortique aiguë surajoutée."
  },
  {
    id: 'q-rao-25',
    courseId: 'crs-rao',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Chez un patient porteur d'un rétrécissement aortique serré asymptomatique, quelle anomalie observée lors d'une épreuve d'effort sous surveillance étroite constitue une indication opératoire formelle (Classe I) ?",
    options: [
      "A. L'apparition de symptômes (dyspnée, angor, syncope) ou une chute tensionnelle d'effort.",
      "B. Une élévation isolée de la pression artérielle systolique à 180 mmHg.",
      "C. Une fréquence cardiaque maximale de 130 bpm.",
      "D. Une onde T négative isolée en V6 sans symptômes.",
      "E. L'absence de sus-décalage de ST."
    ],
    correctAnswers: [0],
    explanation: "Dans le RAO serré apparemment asymptomatique, le démasquage de symptômes à l'effort ou une chute de la pression artérielle en dessous de la valeur de repos traduit un épuisement de la réserve d'adaptation cardiaque et constitue une indication opératoire de Classe I (ESC/AHA).",
    clinicalPearl: "RAO 'asymptomatique' : Symptômes ou baisse tensionnelle à l'épreuve d'effort = Indication opératoire formelle Classe I."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-rao-01',
    courseId: 'crs-rao',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Le patient âgé syncopal\nMonsieur Ali, 78 ans, hypertendu, diabétique, consulte pour une lipothymie survenue en montant deux étages. Il mentionne une dyspnée d'effort stade II NYA installée progressivement. L'auscultation trouve un souffle systolique rude 3/6 au foyer aortique, irradiant aux carotides, avec un B2 faible. L'ECG montre une HVG.\nQ1. Quel est le diagnostic le plus probable ?\nQ2. Quel examen complémentaire demandez-vous en première intention pour confirmer et quantifier le diagnostic ?",
    options: [
      "A. Sténose hypertrophique du ventricule gauche / IRM cardiaque",
      "B. Rétrécissement aortique serré / Échocardiographie transthoracique Doppler",
      "C. Insuffisance mitrale / Coronarographie",
      "D. Rétrécissement mitral / Scanner thoracique",
      "E. Communication interventriculaire / Épreuve d'effort"
    ],
    correctAnswers: [1],
    explanation: "La triade symptomatique (dyspnée, syncope/lipothymie), associée au souffle systolique aortique rude et à l'abolition du B2, est très évocatrice d'un RAO serré. L'échocardiographie Doppler est l'examen clé pour confirmer le diagnostic, visualiser la valve, et quantifier la sévérité par la surface, le gradient et la Vmax.",
    clinicalPearl: "Souffle rude éjectionnel irradiant aux carotides + abolition de B2 = RAO serré."
  },
  {
    id: 'cas-rao-02',
    courseId: 'crs-rao',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : La jeune femme au souffle découvert\nMademoiselle Samira, 28 ans, consulte pour un bilan pré-conceptionnel. Elle est asymptomatique. On découvre un souffle systolique éjectionnel au foyer aortique. L'échocardiographie montre une valve aortique bicuspide avec une vitesse maximale à 3.2 m/s, un gradient moyen à 28 mmHg et une surface à 1.4 cm². L'aorte ascendante est à 42 mm.\nQ1. Comment qualifiez-vous son rétrécissement aortique ?\nQ2. Quelle est la principale complication à surveiller chez cette patiente, outre l'évolution du RAO ?",
    options: [
      "A. RAO serré symptomatique / Dissection coronarienne",
      "B. RAO non serré sur bicuspidie / Dilatation progressive de l'aorte ascendante (aortopathie)",
      "C. RAO critique / Insuffisance tricuspide",
      "D. Sclérose aortique pure / Myocardite",
      "E. RAO à bas débit / HTAP isolée"
    ],
    correctAnswers: [1],
    explanation: "La surface est >1cm² et le gradient <40mmHg : il s'agit d'un RAO non serré. La bicuspidie aortique est souvent associée à une aortopathie qui prédispose à la dilatation de l'aorte ascendante et au risque de dissection, nécessitant une surveillance échographique régulière.",
    clinicalPearl: "Bicuspidie aortique = Risque conjoint de sténose valvulaire et de dilatation anévrysmale de l'aorte ascendante."
  },
  {
    id: 'cas-rao-03',
    courseId: 'crs-rao',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Le patient à la fonction VG altérée\nMonsieur Mohamed, 72 ans, connu pour un RAO suivi depuis 5 ans, se plaint d'une dyspnée de repos. L'échocardiographie montre une FEVG à 40%, une surface aortique à 0,7 cm², mais un gradient moyen bas à 28 mmHg. La valve est très calcifiée.\nQ1. Comment interprétez-vous ce tableau ?\nQ2. Quel examen peut aider à trancher et guider la thérapeutique ?",
    options: [
      "A. RAO non serré / Radiographie pulmonaire",
      "B. RAO serré classique / Scintigraphie myocardique",
      "C. RAO serré en bas débit bas gradient avec FEVG réduite / Échocardiographie de stress à la dobutamine",
      "D. Cardiomyopathie dilatée isolée / Potentiels évoqués auditifs",
      "E. Péricardite constrictive / Ponction lombaire"
    ],
    correctAnswers: [2],
    explanation: "C'est le tableau classique du RAO serré (surface < 1 cm²) masqué par une dysfonction VG sévère (FEVG basse) générant un faible débit, et donc un faible gradient. L'écho-dobutamine à faible dose permet d'évaluer la réserve contractile et de confirmer le RAO vrai serré.",
    clinicalPearl: "RAO à bas gradient et FE basse : Dobutamine pour distinguer le vrai RAO serré du pseudo-RAO."
  },
  {
    id: 'cas-rao-04',
    courseId: 'crs-rao',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le choix thérapeutique difficile\nMadame Fatima, 82 ans, présente un RAO serré symptomatique (dyspnée stade III). Son score STS est de 12%. Elle a des antécédents d'AVC et une artériopathie oblitérante des membres inférieurs sévère. L'équipe \"Heart Team\" est réunie.\nQ1. Quelle est la meilleure option thérapeutique pour cette patiente ?",
    options: [
      "A. Traitement médical optimal.",
      "B. Remplacement valvulaire chirurgical sous CEC.",
      "C. TAVI par voie fémorale.",
      "D. TAVI par voie apicale ou sous-clavière.",
      "E. Valvuloplastie aortique seule."
    ],
    correctAnswers: [3],
    explanation: "La patiente est symptomatique avec un RAO serré et un haut risque chirurgical (STS 12%). Le TAVI est formellement indiqué. L'artériopathie fémorale sévère contre-indique l'accès fémoral : il faut donc envisager une voie alternative (apicale ou sous-clavière).",
    clinicalPearl: "TAVI chez patient avec artériopathie fémorale sévère = Voie alternative sous-clavière ou transapicale."
  },
  {
    id: 'cas-rao-05',
    courseId: 'crs-rao',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : L'urgence pré-opératoire\nMonsieur Rachid, 65 ans, avec un RAO serré connu, est admis pour une fracture du col du fémur nécessitant une ostéosynthèse en urgence. La veille de l'intervention, il devient dyspnéique au repos avec des râles crépitants aux bases pulmonaires.\nQ1. Quelle est la démarche la plus appropriée ?",
    options: [
      "A. Opérer en urgence et traiter le cœur après.",
      "B. Annuler définitivement la chirurgie.",
      "C. Réaliser une valvuloplastie aortique percutanée comme \"bridge\" à la chirurgie orthopédique.",
      "D. Commencer un diurétique et reporter la chirurgie de 3 mois.",
      "E. Réaliser un TAVI en urgence avant l'orthopédie."
    ],
    correctAnswers: [2],
    explanation: "Le patient est en décompensation cardiaque sur son RAO serré, ce qui majore le risque opératoire non cardiaque. La valvuloplastie, bien que non curative, peut améliorer transitoirement l'hémodynamique (\"bridge\"), permettant de réaliser la chirurgie orthopédique urgente en sécurité.",
    clinicalPearl: "Valvuloplastie au ballonnet = Procédure pont permettant une chirurgie non cardiaque urgente vitale."
  }
];
