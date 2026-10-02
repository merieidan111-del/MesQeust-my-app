import { Question, Course } from '../types/medical';

export const CARDIOLOGY_COURSES_PART1: Course[] = [
  {
    id: 'crs-tonicardiaque',
    moduleId: 'mod-cardio',
    title: 'Toniques Cardiaques (Digitaliques)',
    orderIndex: 1,
    qcmCount: 15,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-congenitales',
    moduleId: 'mod-cardio',
    title: 'Cardiopathies Congénitales',
    orderIndex: 2,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-grossesse',
    moduleId: 'mod-cardio',
    title: 'Cœur et Grossesse',
    orderIndex: 3,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-pericardite',
    moduleId: 'mod-cardio',
    title: 'Péricardite Aiguë',
    orderIndex: 4,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
  {
    id: 'crs-troubles-rythme',
    moduleId: 'mod-cardio',
    title: 'Troubles du Rythme',
    orderIndex: 5,
    qcmCount: 25,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 1,
    completedPercent: 0,
  },
];

export const CARDIOLOGY_QUESTIONS_PART1: Question[] = [
  // ==========================================
  // TONICARDIQUE - QCM (15 questions)
  // ==========================================
  {
    id: 'q-tonic-01',
    courseId: 'crs-tonicardiaque',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mécanisme fondamental de l'effet inotrope positif des digitaliques est :",
    options: [
      "L'activation des récepteurs bêta-1 adrénergiques.",
      "L'inhibition de la phosphodiestérase.",
      "L'inhibition de la pompe Na⁺/K⁺ ATPase.",
      "Le blocage des canaux potassiques.",
      "La stimulation directe de la libération de calcium du réticulum sarcoplasmique."
    ],
    correctAnswers: [2],
    explanation: "L'inhibition de la Na⁺/K⁺ ATPase est l'action pharmacologique centrale. Cela entraîne une accumulation de sodium intracellulaire, qui inverse le fonctionnement de l'échangeur Na⁺/Ca²⁺, conduisant à une augmentation de la concentration intracellulaire de calcium et donc à une force de contraction accrue.",
    clinicalPearl: "Pensez à 'NAC' : Na⁺/K⁺ ATPase bloquée → Accumulation de Na⁺ → Calcium intracellulaire ↑."
  },
  {
    id: 'q-tonic-02',
    courseId: 'crs-tonicardiaque',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient sous digoxine présente un allongement de l'espace PR à l'ECG. Cet effet est dû à :",
    options: [
      "L'effet inotrope positif.",
      "L'effet chronotrope négatif.",
      "L'effet dromotrope négatif.",
      "L'effet bathmotrope positif.",
      "Une intoxication digitalique avérée."
    ],
    correctAnswers: [2],
    explanation: "L'allongement de l'espace PR reflète un ralentissement de la conduction au niveau du nœud auriculo-ventriculaire. C'est la définition de l'effet dromotrope négatif des digitaliques. C'est un effet thérapeutique recherché dans la FA rapide, et non nécessairement un signe de toxicité (qui serait plutôt un BAV complet).",
    clinicalPearl: "Digitaliques : Inotrope +, Chronotrope -, Dromotrope -, Bathmotrope + (ICDB)."
  },
  {
    id: 'q-tonic-03',
    courseId: 'crs-tonicardiaque',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Une digoxinémie à 2.5 ng/mL chez un patient asymptomatique impose :",
    options: [
      "L'administration immédiate d'anticorps spécifiques (Digibind®).",
      "La augmentation de la dose pour atteindre un effet optimal.",
      "L'arrêt immédiat du traitement et une surveillance étroite.",
      "La simple poursuite du traitement à la même dose.",
      "L'ajout d'un diurétique thiazidique."
    ],
    correctAnswers: [2],
    explanation: "Un taux supérieur à 2 ng/mL est considéré comme toxique, même en l'absence de symptômes. L'arrêt immédiat est impératif pour prévenir l'apparition de signes de toxicité potentiellement graves. L'administration d'anticorps est réservée aux intoxications sévères menaçant le pronostic vital.",
    clinicalPearl: "Cible digoxinémie : 0.5 - 0.9 ng/mL ; > 2 ng/mL = Toxique."
  },
  {
    id: 'q-tonic-04',
    courseId: 'crs-tonicardiaque',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'effet bathmotrope positif des digitaliques explique :",
    options: [
      "L'amélioration de la fraction d'éjection.",
      "La bradycardie sinusale.",
      "L'apparition possible de tachycardies ventriculaires.",
      "Le ralentissement de la conduction AV.",
      "La réduction de la post-charge."
    ],
    correctAnswers: [2],
    explanation: "L'effet bathmotrope positif signifie une augmentation de l'excitabilité myocardique. Cet effet pro-arythmogène est à l'origine des troubles du rythme ventriculaire (comme les tachycardies ventriculaires) observés en cas de toxicité digitalique.",
    clinicalPearl: "Bathmotrope + = Excitabilité augmentée → Risque d'arythmies ventriculaires."
  },
  {
    id: 'q-tonic-05',
    courseId: 'crs-tonicardiaque',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Laquelle de ces associations médicamenteuses majore le PLUS le risque de toxicité digitalique ?",
    options: [
      "Digoxine + Bêta-bloquant.",
      "Digoxine + Inhibiteur de l'Enzyme de Conversion (IEC).",
      "Digoxine + Diurétique de l'anse (ex: Furosémide).",
      "Digoxine + Statine.",
      "Digoxine + Aspirine."
    ],
    correctAnswers: [2],
    explanation: "Les diurétiques de l'anse (et les thiazidiques) provoquent une hypokaliémie par fuite urinaire. L'hypokaliémie potentialise fortement la fixation et la toxicité des digitaliques sur la pompe Na⁺/K⁺ ATPase.",
    clinicalPearl: "HypoK⁺ + Digoxine = Risque majeur d'intoxication digitalique et d'arythmies mortelles !"
  },
  {
    id: 'q-tonic-06',
    courseId: 'crs-tonicardiaque',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'insuffisance cardiaque, l'avantage des digitaliques par rapport aux catécholamines est :",
    options: [
      "Leur effet inotrope plus puissant.",
      "L'absence de risque d'arythmie.",
      "Leur capacité à réduire la fréquence cardiaque sans majorer la consommation d'O₂ du myocarde.",
      "Leur administration exclusivement orale.",
      "Leur efficacité supérieure en aigu."
    ],
    correctAnswers: [2],
    explanation: "Les catécholamines augmentent la contractilité mais aussi la fréquence et la consommation d'O₂, ce qui peut être délétère. Les digitaliques, par leur effet chronotrope négatif, améliorent le rendement énergétique du myocarde.",
    clinicalPearl: "Digitaliques : Inotrope + ET Chronotrope - = Améliorent le rendement sans explosion de la MVO2."
  },
  {
    id: 'q-tonic-07',
    courseId: 'crs-tonicardiaque',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La digoxine est contre-indiquée formellement dans :",
    options: [
      "L'insuffisance cardiaque à fraction d'éjection préservée.",
      "La fibrillation auriculaire lente.",
      "Le syndrome de Wolff-Parkinson-White (WPW).",
      "L'hypertension artérielle non contrôlée.",
      "L'insuffisance rénale modérée."
    ],
    correctAnswers: [2],
    explanation: "Dans le WPW, les digitaliques ralentissent la conduction du nœud AV mais peuvent faciliter la conduction antérograde via la voie accessoire, risquant de précipiter une fibrillation ventriculaire fatale en cas de FA.",
    clinicalPearl: "WPW + Digoxine = DANGER MORTEL ! 'La Digoxine Dérègle la Dérivation accessoire'."
  },
  {
    id: 'q-tonic-08',
    courseId: 'crs-tonicardiaque',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Le traitement de première intention d'une intoxication digitalique avec TV stable est :",
    options: [
      "L'amiodarone en perfusion.",
      "La lidocaïne.",
      "La cardioversion électrique synchronisée.",
      "L'adrénaline.",
      "L'atropine."
    ],
    correctAnswers: [1],
    explanation: "La lidocaïne (classe Ib) est historiquement le traitement de choix car elle supprime l'activité ectopique ventriculaire sans aggraver le bloc de conduction AV. La cardioversion électrique est dangereuse car elle peut déclencher une FV réfractaire chez un patient digitalisé.",
    clinicalPearl: "TV sous digoxine = Lidocaïne ! Cardioversion électrique risquée (sauf arrêt)."
  },
  {
    id: 'q-tonic-09',
    courseId: 'crs-tonicardiaque',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 75 ans sous digoxine pour IC présente des nausées et une vision colorée en jaune. La première action est :",
    options: [
      "Réaliser un ionogramme sanguin et une digoxinémie.",
      "Administrer un antiémétique.",
      "Faire un fond d'œil en urgence.",
      "Rassurer le patient et poursuivre le traitement.",
      "Augmenter la dose pour atteindre l'effet thérapeutique maximal."
    ],
    correctAnswers: [0],
    explanation: "Les signes digestifs (nausées, vomissements) et neurologiques/oculaires (xanthopsie = vision jaune) sont des signes d'alerte classiques de toxicité digitalique. Le bilan d'urgence (ionogramme et digoxinémie) est indispensable pour guider l'arrêt et la correction de l'hypokaliémie.",
    clinicalPearl: "Patient 'CŒUR FATigué' : Confusion, Œil jaune (Xanthopsie), Fatigue, Arythmies (TV, BAV)."
  },
  {
    id: 'q-tonic-10',
    courseId: 'crs-tonicardiaque',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'effet chronotrope négatif des digitaliques est principalement dû à :",
    options: [
      "Une action antagoniste des récepteurs muscariniques.",
      "Une stimulation du système nerveux sympathique.",
      "Une augmentation du tonus vagal.",
      "Un effet dépresseur direct sur le nœud sinusal.",
      "Un blocage des canaux calciques."
    ],
    correctAnswers: [2],
    explanation: "Les digitaliques augmentent le tonus vagal (parasympathomimétique indirect) sur le cœur. Cette action vagale ralentit le nœud sinusal (chronotrope négatif) et la conduction auriculo-ventriculaire (dromotrope négatif).",
    clinicalPearl: "Effet parasympathomimétique / vagal central et périphérique = Ralentissement de la fréquence."
  },
  {
    id: 'q-tonic-11',
    courseId: 'crs-tonicardiaque',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Laquelle de ces molécules peut augmenter la concentration plasmatique de la digoxine par interaction pharmacocinétique ?",
    options: [
      "Le Vérapamil.",
      "Le Furosémide.",
      "Le Lisinopril (IEC).",
      "Le Bisoprolol (Bêta-bloquant).",
      "L'Atorvastatine (Statine)."
    ],
    correctAnswers: [0],
    explanation: "Le Vérapamil (ainsi que l'Amiodarone et la Quinidine) inhibe la glycoprotéine P et diminue la clairance rénale de la digoxine, doublant sa concentration plasmatique et majorant le risque toxique.",
    clinicalPearl: "Vérapamil + Digoxine ou Amiodarone + Digoxine = Réduire la dose de digoxine de 50% !"
  },
  {
    id: 'q-tonic-12',
    courseId: 'crs-tonicardiaque',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La posologie de la digoxine doit être réduite en priorité chez :",
    options: [
      "Les patients hypertendus.",
      "Les patients présentant une insuffisance rénale.",
      "Les patients asthmatiques.",
      "Les patients diabétiques.",
      "Les patients jeunes de poids normal."
    ],
    correctAnswers: [1],
    explanation: "La digoxine est principalement éliminée inchangée par filtration glomérulaire rénale (80%). Toute altération de la fonction rénale prolonge sa demi-vie et favorise son accumulation toxique.",
    clinicalPearl: "Élimination rénale exclusive de la digoxine : adapter impérativement au DFG !"
  },
  {
    id: 'q-tonic-13',
    courseId: 'crs-tonicardiaque',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication la plus solide des digitaliques selon les recommandations récentes est :",
    options: [
      "L'insuffisance cardiaque aiguë systolique de novo.",
      "Le contrôle de la fréquence dans la FA rapide lorsque les bêta-bloquants sont contre-indiqués ou inefficaces.",
      "La prévention des récidives de fibrillation auriculaire.",
      "Le traitement de première intention de l'insuffisance cardiaque chronique.",
      "La cardiopathie hypertrophique obstructive."
    ],
    correctAnswers: [1],
    explanation: "Selon l'ESC, la digoxine est indiquée pour contrôler la fréquence ventriculaire dans la fibrillation atriale rapide, particulièrement chez les patients sédentaires ou lorsque les bêta-bloquants sont contre-indiqués/insuffisants.",
    clinicalPearl: "Contrôle de fréquence dans la FA rapide, surtout si FEVG altérée associée."
  },
  {
    id: 'q-tonic-14',
    courseId: 'crs-tonicardiaque',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Le 'Digitalis Effect' (cupule digitalique) à l'ECG se caractérise par :",
    options: [
      "Un aplatissement de l'onde T.",
      "Un allongement de l'espace QT.",
      "Un sus-décalage du segment ST en 'dôme de mosque'.",
      "Un raccourcissement de l'espace PR.",
      "Un sous-décalage concave vers le haut du segment ST en 'cupule'."
    ],
    correctAnswers: [4],
    explanation: "L'imprégnation digitalique physiologique (Digitalis Effect) donne un sous-décalage concave vers le haut du segment ST ('en cupule' ou 'en creux'), un raccourcissement du QT et une diminution d'amplitude de l'onde T. C'est un signe d'imprégnation et non de toxicité.",
    clinicalPearl: "Cupule digitalique = Signe d'imprégnation thérapeutique, pas de surdosage toxique !"
  },
  {
    id: 'q-tonic-15',
    courseId: 'crs-tonicardiaque',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'antidote spécifique de l'intoxication digitalique sévère est :",
    options: [
      "Le Flumazénil.",
      "Le Naloxone.",
      "Le Digibind® (fragments d'anticorps Fab anti-digoxine).",
      "Le Glucagon.",
      "Le Sulfate de magnésium."
    ],
    correctAnswers: [2],
    explanation: "Les fragments Fab d'anticorps spécifiques anti-digoxine (Digibind® / DigiFab®) lient la digoxine libre plasmatique pour former un complexe inactif éliminé par les urines. Réservé aux intoxications menaçant le pronostic vital.",
    clinicalPearl: "Antidote : Fragments Fab anti-digoxine (Digibind®)."
  },

  // TONICARDIQUE - CAS CLINIQUES (5 scénarios)
  {
    id: 'cas-tonic-01',
    courseId: 'crs-tonicardiaque',
    questionNumber: 16,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Contrôle de Rythme\nM. Kada, 70 ans, connu pour une IC (FE 30%), est admis pour palpitations. L'ECG montre une Fibrillation Auriculaire avec une FC à 140/min. Il est déjà sous IEC, Bêta-bloquant à dose maximale et Diurétique. Sa tension est à 110/70 mmHg.\nQuelle est la meilleure option thérapeutique pour contrôler la fréquence ventriculaire ?",
    options: [
      "Augmenter la dose du Bêta-bloquant.",
      "Ajouter de la Digoxine en IV.",
      "Ajouter du Vérapamil en IV.",
      "Procéder à une cardioversion électrique en urgence.",
      "Ajouter de l'Amiodarone IV."
    ],
    correctAnswers: [1],
    explanation: "Le patient est déjà sous bêta-bloquant à dose maximale et présente une PA limite (110/70). L'augmentation du bêta-bloquant ou l'adjonction de Vérapamil (inotropes négatifs majeurs) risquerait de précipiter un choc ou un BAV. La digoxine permet de ralentir la cadence ventriculaire sans effet inotrope négatif ni effet hypotenseur.",
    clinicalPearl: "Patient en FA rapide sous BB dose max avec FEVG 30% : Digoxine IV = option de choix."
  },
  {
    id: 'cas-tonic-02',
    courseId: 'crs-tonicardiaque',
    questionNumber: 17,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 2 : Toxicité\nMme Fatima, 80 ans, IC, sous Digoxine 0.25mg/j et Furosémide, consulte pour asthénie, nausées et vision 'bizarre'. L'ECG montre un rythme sinusal à 50/min, avec des bigéminismes ventriculaires.\nQuel est le bilan immédiat le plus pertinent ?",
    options: [
      "TSH et Numération Formule Sanguine.",
      "Ionogramme sanguin et Digoxinémie.",
      "Radiographie pulmonaire et BNP.",
      "IRM cérébrale.",
      "Dosage des transaminases."
    ],
    correctAnswers: [1],
    explanation: "Le tableau est très évocateur d'une intoxication digitalique (signes digestifs, xanthopsie, bradycardie et bigéminisme ventriculaire). L'association avec un diurétique hypokaliémiant (Furosémide) est le déclencheur classique. Le bilan immédiat dose la digoxinémie et recherche l'hypokaliémie favorisante.",
    clinicalPearl: "Bigéminisme ventriculaire + troubles visuels sous Furosémide = Ionogramme + Digoxinémie d'urgence."
  },
  {
    id: 'cas-tonic-03',
    courseId: 'crs-tonicardiaque',
    questionNumber: 18,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 : Prescription\nLe Pr. Manseri vous demande de prescrire de la Digoxine à un patient de 45 ans, IC (FE 25%), rythme sinusal, fonction rénale normale.\nQuelle est la posologie INITIALE la plus appropriée ?",
    options: [
      "0.25 mg deux fois par jour.",
      "1 mg en une prise.",
      "0.0625 mg par jour.",
      "0.25 mg par jour.",
      "0.50 mg par jour."
    ],
    correctAnswers: [3],
    explanation: "Pour un adulte de 45 ans avec fonction rénale normale, la dose d'entretien standard de digoxine est de 0.25 mg (1 comprimé) par jour. Une dose plus faible (0.0625 à 0.125 mg) est réservée au sujet âgé ou à l'insuffisant rénal.",
    clinicalPearl: "Dose standard adulte fonction rénale saine = 0.25 mg/jour."
  },
  {
    id: 'cas-tonic-04',
    courseId: 'crs-tonicardiaque',
    questionNumber: 19,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Contre-indication\nUn patient de 50 ans est admis pour palpitations. L'ECG montre un rythme régulier à 150/min, avec un complexe QRS large et onde delta. Le diagnostic de tachycardie antidromique sur WPW est posé.\nPourquoi la Digoxine est-elle formellement contre-indiquée ici ?",
    options: [
      "Elle peut provoquer une insuffisance rénale aiguë.",
      "Elle peut ralentir excessivement le rythme sinusal.",
      "Elle peut accélérer la conduction dans la voie accessoire, risquant d'induire une FV.",
      "Elle est inefficace sur les voies accessoires.",
      "Elle potentialise les effets des anti-arythmiques de classe I."
    ],
    correctAnswers: [2],
    explanation: "Les digitaliques raccourcissent la période réfractaire de la voie accessoire. En cas de passage en FA, la conduction 1:1 antérograde ultra-rapide par le faisceau de Kent peut déclencher une fibrillation ventriculaire et un arrêt cardiaque.",
    clinicalPearl: "Faisceau de Kent + Digoxine = Risque de FV par accélération de la conduction accessoire."
  },
  {
    id: 'cas-tonic-05',
    courseId: 'crs-tonicardiaque',
    questionNumber: 20,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 5 : Interaction\nM. Ahmed, 65 ans, IC et FA, stable depuis 1 an sous Digoxine 0.25mg/j. On lui ajoute de l'Amiodarone pour une TV non soutenue.\nQuelle est la conduite à tenir concernant la Digoxine ?",
    options: [
      "Arrêter définitivement la Digoxine.",
      "Augmenter la dose de Digoxine à 0.50 mg/j.",
      "Remplacer la Digoxine par un bêta-bloquant.",
      "Réduire la dose de Digoxine de moitié et surveiller la digoxinémie.",
      "Ne rien changer."
    ],
    correctAnswers: [3],
    explanation: "L'Amiodarone inhibe la sécrétion tubulaire rénale de digoxine et peut doubler sa concentration sérique. Il faut réduire la dose de digoxine de 50% dès l'introduction de l'amiodarone et doser la digoxinémie.",
    clinicalPearl: "Introduction d'amiodarone chez un patient sous digoxine = diviser la dose de digoxine par 2 !"
  },

  // ==========================================
  // CARDIOPATHIES CONGENITALES - 25 QCMs
  // ==========================================
  {
    id: 'q-cong-01',
    courseId: 'crs-congenitales',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le facteur étiologique le plus fréquent des cardiopathies congénitales ?",
    options: [
      "Aberrations chromosomiques (Trisomie 21)",
      "Maladies maternelles (Rubéole)",
      "Consommation de médicaments (Antidépresseurs)",
      "Cause imprécise (Idiopathique)",
      "Maladies familiales à transmission génétique"
    ],
    correctAnswers: [3],
    explanation: "Dans environ 90% des cas, aucune cause spécifique n'est identifiée (idiopathique). Les causes chromosomiques (T21, T18, T13) ou tératogènes représentent environ 10% des cas.",
    clinicalPearl: "Étiologie cardiopathies congénitales : 90% idiopathique, 10% génétique/environnementale."
  },
  {
    id: 'q-cong-02',
    courseId: 'crs-congenitales',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une cardiopathie cyanogène est caractérisée par :",
    options: [
      "Un shunt gauche-droit prédominant",
      "Un mélange de sang où le sang désoxygéné arrive dans la circulation systémique",
      "L'absence de cyanose clinique",
      "Une hypertension artérielle pulmonaire (HTAP) constante",
      "Une hypertrophie ventriculaire gauche isolée"
    ],
    correctAnswers: [1],
    explanation: "Le caractère cyanogène est dû à un shunt droit-gauche (ou mélange bidirectionnel avec obstacle pulmonaire), permettant au sang bleu non oxygéné de contourner les poumons et d'atteindre la circulation systémique.",
    clinicalPearl: "Shunt D-G = Passage de sang désoxygéné en systémique → Cyanose."
  },
  {
    id: 'q-cong-03',
    courseId: 'crs-congenitales',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Dans une Communication Inter-Ventriculaire (CIV) large et non traitée, la complication redoutée à long terme est :",
    options: [
      "La sténose aortique",
      "L'endocardite infectieuse",
      "La maladie vasculaire pulmonaire obstructive (Syndrome d'Eisenmenger)",
      "La fermeture spontanée",
      "L'insuffisance tricuspide"
    ],
    correctAnswers: [2],
    explanation: "L'hyperdébit pulmonaire massif et prolongé entraîne une maladie vasculaire pulmonaire obstructive avec HTAP fixée irréversible et inversion du shunt (devenant droit-gauche) : c'est le syndrome d'Eisenmenger.",
    clinicalPearl: "CIV large non opérée → HTAP fixée → Inversion du shunt = Syndrome d'Eisenmenger."
  },
  {
    id: 'q-cong-04',
    courseId: 'crs-congenitales',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe auscultatoire caractéristique d'une petite CIV (Maladie de Roger) ?",
    options: [
      "Souffle diastolique en roulement",
      "Souffle continu 'machinique'",
      "B2 claqué au foyer pulmonaire",
      "Souffle holosystolique intense, frémissant, irradiant en 'rayon de roue'",
      "Absence de souffle"
    ],
    correctAnswers: [3],
    explanation: "Dans la maladie de Roger (CIV petite restrictive), le gradient de pression VG-VD est maximal, créant un souffle holosystolique très intense, râpeux, frémissant, irradiant dans toutes les directions en 'rayon de roue'.",
    clinicalPearl: "Plus la CIV est petite, plus le souffle est intense et bruyant (gradient élevé) !"
  },
  {
    id: 'q-cong-05',
    courseId: 'crs-congenitales',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médical de première intention d'une CIV large avec signes d'insuffisance cardiaque associe typiquement :",
    options: [
      "Anti-arythmiques et anticoagulants",
      "Digitalique et diurétique",
      "Bêta-bloquants et antiagrégants",
      "Vasodilatateurs artériels purs",
      "Corticostéroïdes"
    ],
    correctAnswers: [1],
    explanation: "La prise en charge médicale vise la décharge volémique (diurétiques de l'anse) et le soutien inotrope (digitaliques), souvent associés aux IEC pour réduire la postcharge et limiter le shunt gauche-droit en attente de la chirurgie.",
    clinicalPearl: "Traitement médical de l'IC sur CIV : Diurétique + Digitalique + IEC."
  },
  {
    id: 'q-cong-06',
    courseId: 'crs-congenitales',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe clinique pathognomonique d'une Persistance du Canal Artériel (PCA) est :",
    options: [
      "Un souffle holosystolique",
      "Un roulement diastolique à la pointe",
      "Un souffle continu systolo-diastolique 'en tunnel' sous-claviculaire gauche",
      "Un dédoublement fixe de B2",
      "Un clic télé-systolique"
    ],
    correctAnswers: [2],
    explanation: "La PCA réalise un shunt continu de l'aorte vers l'artère pulmonaire pendant toute la systole et toute la diastole, créant un souffle continu, rude, renforçant en télésystole, qualifié de souffle 'en tunnel' ou 'machinique'.",
    clinicalPearl: "PCA = Souffle continu systolo-diastolique 'en tunnel' sous-claviculaire gauche."
  },
  {
    id: 'q-cong-07',
    courseId: 'crs-congenitales',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans la tétralogie de Fallot, l'élément anatomique principal qui détermine la sévérité de la cyanose est :",
    options: [
      "La taille de la Communication Inter-Ventriculaire (CIV)",
      "Le degré de la dextroposition aortique",
      "L'importance de l'hypertrophie ventriculaire droite",
      "Le degré de la sténose pulmonaire",
      "L'absence de l'arc aortique"
    ],
    correctAnswers: [3],
    explanation: "C'est l'importance de l'obstacle à l'éjection pulmonaire (sténose infundibulo-valvulaire) qui dicte le débit de sang qui fuit par la CIV vers l'aorte (shunt D-G), conditionnant directement la sévérité de l'hypoxémie et de la cyanose.",
    clinicalPearl: "Sévérité du Fallot = proportionnelle au degré de la sténose pulmonaire."
  },
  {
    id: 'q-cong-08',
    courseId: 'crs-congenitales',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Une complication neurologique redoutée dans la tétralogie de Fallot est :",
    options: [
      "La méningite virale",
      "L'abcès cérébral",
      "La sclérose en plaques",
      "La myasthénie",
      "L'accident vasculaire cérébral ischémique"
    ],
    correctAnswers: [1],
    explanation: "Dans le Fallot, le shunt droit-gauche fait que le sang veineux systémique court-circuite le filtre capillaire pulmonaire. Les bactériémies transitoires peuvent ainsi atteindre directement le cerveau et créer des abcès cérébraux septiques.",
    clinicalPearl: "Cardiopathie cyanogène + Céphalées / Fièvre = Suspecter un abcès cérébral !"
  },
  {
    id: 'q-cong-09',
    courseId: 'crs-congenitales',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'ECG, une Communication Inter-Auriculaire (CIA) de type ostium secundum se traduit typiquement par :",
    options: [
      "Une hypertrophie ventriculaire gauche",
      "Un bloc de branche droit incomplet",
      "Une onde Q pathologique",
      "Un allongement de l'espace QT",
      "Une fibrillation auriculaire"
    ],
    correctAnswers: [1],
    explanation: "La surcharge volumique diastolique du ventricule droit entraîne une dilatation du VD et un retard de dépolarisation pariétale se traduisant typiquement par un bloc de branche droit incomplet (aspect rsR' en V1).",
    clinicalPearl: "CIA = BBD incomplet + Dédoublement fixe du B2 au foyer pulmonaire."
  },
  {
    id: 'q-cong-10',
    courseId: 'crs-congenitales',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement curatif de la tétralogie de Fallot chez l'enfant plus grand est :",
    options: [
      "L'anastomose de Blalock (chirurgie palliative)",
      "La fermeture percutanée de la CIV",
      "La cure chirurgicale complète (fermeture CIV + élargissement voie pulmonaire)",
      "Un traitement médical à base de prostaglandines",
      "La transplantation cardiaque"
    ],
    correctAnswers: [2],
    explanation: "La chirurgie réparatrice complète sous CEC comprend la fermeture de la CIV par un patch synthétique et la désobstruction/élargissement de la voie pulmonaire (infundibulotomie et plastie d'élargissement).",
    clinicalPearl: "Cure complète du Fallot : Fermeture de la CIV + Élargissement de la voie pulmonaire."
  },
  {
    id: 'q-cong-11',
    courseId: 'crs-congenitales',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel est le principal mécanisme physiopathologique des shunts gauche-droit ?",
    options: [
      "Pression plus élevée dans les cavités gauches",
      "Pression plus élevée dans les cavités droites",
      "Résistances vasculaires pulmonaires basses",
      "Résistances vasculaires systémiques élevées",
      "A et C"
    ],
    correctAnswers: [4],
    explanation: "Le shunt gauche-droit résulte du différentiel de pression entre le cœur gauche (haute pression) et le cœur droit (basse pression), couplé aux résistances vasculaires pulmonaires physiologiquement très basses par rapport aux résistances systémiques.",
    clinicalPearl: "Shunt G-D : Pression VG > VD et Résistances Pulmonaires < Systémiques."
  },
  {
    id: 'q-cong-12',
    courseId: 'crs-congenitales',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La triade clinique classique d'une Communication Inter-Auriculaire (CIA) comprend :",
    options: [
      "Cyanose, hippocratisme digital, polyglobulie",
      "Souffle systolique pulmonaire, dédoublement fixe de B2, roulement diastolique",
      "Hépatomégalie, œdème des membres inférieurs, turgescence jugulaire",
      "Souffle continu, B2 unique, pouls bondissant",
      "Douleur thoracique, dyspnée, syncope"
    ],
    correctAnswers: [1],
    explanation: "La triade auscultatoire de la CIA associe : 1) Souffle mésosystolique au foyer pulmonaire (hyperdébit à travers l'orifice pulmonaire normal), 2) Dédoublement large et fixe du B2, 3) Roulement méso-diastolique au foyer tricuspide (hyperdébit à travers la valve tricuspide).",
    clinicalPearl: "Triade CIA : Souffle pulmonaire d'éjection + Dédoublement fixe de B2 + Roulement tricuspide."
  },
  {
    id: 'q-cong-13',
    courseId: 'crs-congenitales',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen est le plus performant pour confirmer le diagnostic et évaluer les conséquences d'une CIV ?",
    options: [
      "L'électrocardiogramme (ECG)",
      "La radiographie thoracique",
      "Le cathétérisme cardiaque",
      "L'échocardiographie Doppler",
      "L'IRM cardiaque"
    ],
    correctAnswers: [3],
    explanation: "L'échocardiographie transthoracique avec Doppler couleur est l'examen de référence non invasif de 1ère intention. Elle visualise le siège et la taille de la CIV, calcule le shunt (Qp/Qs) et évalue les pressions pulmonaires.",
    clinicalPearl: "Échocardiographie Doppler : Examen clé pour visualiser la CIV et mesurer le gradient."
  },
  {
    id: 'q-cong-14',
    courseId: 'crs-congenitales',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome d'Eisenmenger correspond à :",
    options: [
      "La fermeture spontanée d'une CIV",
      "Une cardiopathie cyanogène avec HTAP fixée et inversion du shunt (devenu droit-gauche)",
      "Une complication infectieuse d'une CIV",
      "Une sténose pulmonaire serrée",
      "Une communication inter-ventriculaire à poumon protégé"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome d'Eisenmenger est le stade terminal de tout shunt gauche-droit non opéré : le lit vasculaire pulmonaire se détruit, les résistances pulmonaires dépassent les résistances systémiques, inversant le shunt (D-G) avec apparition d'une cyanose définitive.",
    clinicalPearl: "Eisenmenger : HTAP fixée + Inversion du shunt (D-G) + Cyanose tardive irréversible."
  },
  {
    id: 'q-cong-15',
    courseId: 'crs-congenitales',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médicamenteux pouvant favoriser la fermeture d'un Canal Artériel chez le prématuré est :",
    options: [
      "L'Adrénaline",
      "L'Ibuprofène ou l'Indométacine",
      "Le Captopril",
      "Les Diurétiques",
      "La Digoxine"
    ],
    correctAnswers: [1],
    explanation: "Les AINS (Ibuprofène ou Indométacine IV) inhibent la cyclo-oxygénase et bloquent la synthèse des prostaglandines E2 (qui maintiennent le canal ouvert), induisant sa vasoconstriction et sa fermeture chez le prématuré.",
    clinicalPearl: "Fermeture canal artériel prématuré : Ibuprofène / Indométacine (anti-PGE2)."
  },
  {
    id: 'q-cong-16',
    courseId: 'crs-congenitales',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Dans une CIV de type IV ('à poumon protégé'), on associe :",
    options: [
      "Une CIV et une coarctation de l'aorte",
      "Une CIV et une sténose aortique",
      "Une CIV et une sténose pulmonaire",
      "Une CIV et une communication inter-auriculaire",
      "Une CIV et une dextroposition aortique"
    ],
    correctAnswers: [2],
    explanation: "L'association CIV + sténose pulmonaire modérée est dite 'à poumon protégé' car l'obstacle pulmonaire freine le débit sanguin vers les poumons et protège l'artériole pulmonaire de l'HTAP.",
    clinicalPearl: "Poumon protégé = CIV + Sténose pulmonaire modérée (évite l'hyperdébit destructeur)."
  },
  {
    id: 'q-cong-17',
    courseId: 'crs-congenitales',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'hypertrophie ventriculaire droite (HVD) dans la tétralogie de Fallot est :",
    options: [
      "La cause de la malformation",
      "Une conséquence adaptative à la surcharge de pression",
      "Un élément accessoire sans conséquence",
      "La cause de la cyanose",
      "Responsable du shunt gauche-droit"
    ],
    correctAnswers: [1],
    explanation: "Dans le Fallot, la sténose pulmonaire oblige le ventricule droit à générer des pressions systémiques équivalentes au VG pour éjecter le sang. L'HVD est donc purement adaptative à cette surcharge de pression chronique.",
    clinicalPearl: "HVD du Fallot = Réponse adaptative à la sténose pulmonaire infundibulaire."
  },
  {
    id: 'q-cong-18',
    courseId: 'crs-congenitales',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une complication commune à toutes les cardiopathies congénitales avec shunt est :",
    options: [
      "L'infarctus du myocarde",
      "L'endocardite infectieuse",
      "La péricardite constrictive",
      "La rupture aortique",
      "L'insuffisance mitrale rhumatismale"
    ],
    correctAnswers: [1],
    explanation: "Tout jet turbulent à travers un defect septal ou une sténose lèse l'endocarde adjacent, créant un lit de fibrine et plaquettes propice à la greffe bactérienne. La prophylaxie de l'endocardite infectieuse est requise.",
    clinicalPearl: "Turbulences intracardiaques = Risque permanent d'endocardite infectieuse (Osler)."
  },
  {
    id: 'q-cong-19',
    courseId: 'crs-congenitales',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe radiologique évocateur d'un shunt gauche-droit important ?",
    options: [
      "Un cœur en 'sabot'",
      "Une hypervascularisation pulmonaire",
      "Un poumon clair rétracté",
      "Un épanchement pleural",
      "Un médiastin élargi"
    ],
    correctAnswers: [1],
    explanation: "Le shunt gauche-droit entraîne un hyperdébit dans la petite circulation, ce qui se traduit sur le téléthorax par une hypervascularisation pulmonaire diffuse jusqu'au tiers externe des champs pulmonaires.",
    clinicalPearl: "Shunt G-D = Hypervascularisation pulmonaire. Shunt D-G (Fallot) = Poumons clairs (hypovascularisés)."
  },
  {
    id: 'q-cong-20',
    courseId: 'crs-congenitales',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "La forme la plus grave de CIV est le type III car :",
    options: [
      "Le souffle est très intense",
      "Elle s'accompagne d'une HTAP fixée (Eisenmenger)",
      "Elle guérit toujours spontanément",
      "Elle est asymptomatique",
      "Elle nécessite un traitement par ibuprofène"
    ],
    correctAnswers: [1],
    explanation: "Le type III correspond à la CIV avec HTAP fixée obstructive : le shunt s'égalise ou s'inverse, le souffle s'assombrit ou disparaît, et la correction chirurgicale devient contre-indiquée car le ventricule droit ne supporterait pas la postcharge pulmonaire.",
    clinicalPearl: "CIV type III = HTAP fixée. La chirurgie est contre-indiquée !"
  },
  {
    id: 'q-cong-21',
    courseId: 'crs-congenitales',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'anomalie génétique la plus fréquemment associée à une cardiopathie congénitale est :",
    options: [
      "La monosomie X (Turner)",
      "La Trisomie 18",
      "La Trisomie 21",
      "La Trisomie 13",
      "Le syndrome de Marfan"
    ],
    correctAnswers: [2],
    explanation: "La Trisomie 21 (syndrome de Down) est l'aberration chromosomique la plus fréquente ; 40 à 50% des enfants avec T21 présentent une cardiopathie congénitale, au premier rang desquelles le Canal Atrio-Ventriculaire (CAV) complet.",
    clinicalPearl: "Trisomie 21 + Cardiopathie = Canal Atrio-Ventriculaire (CAV) dans 50% des cas."
  },
  {
    id: 'q-cong-22',
    courseId: 'crs-congenitales',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le 'roulement diastolique' entendu à la pointe dans une CIA est dû à :",
    options: [
      "Une sténose mitrale associée",
      "Une insuffisance aortique",
      "L'augmentation du flux sanguin à travers la valve tricuspide",
      "Une péricardite",
      "Un rétrécissement aortique"
    ],
    correctAnswers: [2],
    explanation: "Dans la CIA avec shunt G-D volumineux, tout le sang shunté retourne dans l'oreillette droite puis traverse la valve tricuspide en diastole. Ce débit massif à travers un orifice tricuspide normal crée une sténose fonctionnelle relative auscultée comme un roulement méso-diastolique.",
    clinicalPearl: "Roulement diastolique dans la CIA = Roulement de débit sur la valve tricuspide (pas d'atteinte mitrale) !"
  },
  {
    id: 'q-cong-23',
    courseId: 'crs-congenitales',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement chirurgical d'une CIV large de type II se fait :",
    options: [
      "En urgence à la naissance",
      "Sous circulation extracorporelle (CEC) avec fermeture par un patch",
      "Uniquement par voie percutanée",
      "Par médication seule",
      "Par transplantation cardiaque"
    ],
    correctAnswers: [1],
    explanation: "La fermeture d'une CIV large symptomatique non restrictive se fait par chirurgie à cœur ouvert sous circulation extracorporelle (CEC) en suturant un patch de péricarde ou de dacron sur la brèche septale.",
    clinicalPearl: "Chirurgie de la CIV large : Fermeture par patch sous CEC."
  },
  {
    id: 'q-cong-24',
    courseId: 'crs-congenitales',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La crise d'anoxie (ou 'tét spell') dans la tétralogie de Fallot est traitée en urgence par :",
    options: [
      "Administration de Bêta-bloquants per os",
      "Position genu-pectorale et administration de morphine",
      "Administration de diurétiques",
      "Lancement d'une antibiothérapie",
      "Induction d'une anesthésie générale"
    ],
    correctAnswers: [1],
    explanation: "La crise d'anoxie aiguë (spasme infundibulaire) est une urgence vitale : 1) Mettre l'enfant en position genu-pectorale (squatting repliant les cuisses sur l'abdomen pour augmenter les résistances vasculaires systémiques et inverser le shunt vers les poumons), 2) Oxygène, 3) Morphine (calme l'enfant et lève le spasme infundibulaire), 4) Bêta-bloquants IV (Propranolol).",
    clinicalPearl: "Mnémo Crise de Fallot : G-P-M = Genu-pectorale, Protéger/O2, Morphine."
  },
  {
    id: 'q-cong-25',
    courseId: 'crs-congenitales',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le signe clinique suivant : 'Souffle systolique peu intense, B2 claqué au foyer pulmonaire, cardiomégalie modérée avec artères pulmonaires proximales dilatées et hypovascularisation périphérique à la radio' évoque :",
    options: [
      "Une CIV de type I (Maladie de Roger)",
      "Une CIV de type II",
      "Une CIV de type III (HTAP fixée)",
      "Une CIV de type IV (à poumon protégé)",
      "Une persistance du canal artériel"
    ],
    correctAnswers: [2],
    explanation: "C'est la description typique d'une CIV compliquée d'un syndrome d'Eisenmenger (type III) : l'élévation des résistances pulmonaires effondre le gradient VG-VD (donc le souffle s'atténue), le B2 devient claqué au foyer pulmonaire (HTAP majeure), et l'artériopathie plexiforme oblitérante donne une raréfaction vasculaire périphérique ('arbre mort').",
    clinicalPearl: "Souffle discret + B2 claqué + Arbre vasculaire coupé = HTAP fixée sur CIV type III."
  },

  // CARDIOPATHIES CONGENITALES - 5 CAS CLINIQUES
  {
    id: 'cas-cong-01',
    courseId: 'crs-congenitales',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : Le nourrisson fatigué\nUn nourrisson de 3 mois est amené en consultation pour une mauvaise prise des biberons, une transpiration et une tachypnée. Il présente un retard staturo-pondéral. L'auscultation trouve un souffle holosystolique frémissant 4/6 au 4ème EICG irradiant en rayon de roue. La radio thoracique montre une cardiomégalie et une hypervascularisation pulmonaire.\nQuelle est l'hypothèse diagnostique la plus probable ?",
    options: [
      "Communication Inter-Auriculaire",
      "Persistance du Canal Artériel",
      "Communication Inter-Ventriculaire large",
      "Tétralogie de Fallot",
      "Sténose aortique"
    ],
    correctAnswers: [2],
    explanation: "Signes d'insuffisance cardiaque à haut débit (sueurs lors des tétées, tachypnée, retard de croissance) associés au souffle holosystolique caractéristique en 'rayon de roue' et hypervascularisation pulmonaire signent une CIV large avec shunt gauche-droit massif.",
    clinicalPearl: "Nourrisson qui transpire en tétant + souffle en rayon de roue = CIV large décompensée."
  },
  {
    id: 'cas-cong-02',
    courseId: 'crs-congenitales',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 2 : L'enfant bleu\nUn enfant de 2 ans se présente aux urgences pour une accentuation brutale de sa cyanose et un malaise avec perte de connaissance brève survenue lors d'une crise de pleurs. L'examen trouve un hippocratisme digital et un souffle systolique rude au bord gauche du sternum.\nQuel diagnostic évoquez-vous en premier ?",
    options: [
      "Communication Inter-Auriculaire",
      "Persistance du Canal Artériel",
      "Communication Inter-Ventriculaire non compliquée",
      "Tétralogie de Fallot",
      "Sténose pulmonaire isolée"
    ],
    correctAnswers: [3],
    explanation: "Cyanose chronique avec hippocratisme digital, malaise anoxique déclenché par les pleurs (spasme infundibulaire = 'tét spell') et souffle systolique d'éjection pulmonaire au bord gauche du sternum sont pathognomoniques de la Tétralogie de Fallot.",
    clinicalPearl: "Malaise anoxique aux pleurs + Hippocratisme digital = Crise de Fallot."
  },
  {
    id: 'cas-cong-03',
    courseId: 'crs-congenitales',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 : La découverte fortuite\nUne fillette de 7 ans est adressée pour un souffle cardiaque découvert lors d'une visite scolaire. Elle est totalement asymptomatique. L'auscultation trouve un souffle systolique doux 2/6 au foyer pulmonaire, un dédoublement fixe de B2 et un roulement diastolique à la pointe.\nQuelle malformation évoque cette triade ?",
    options: [
      "Communication Inter-Ventriculaire",
      "Persistance du Canal Artériel",
      "Communication Inter-Auriculaire",
      "Coarctation de l'aorte",
      "Tétralogie de Fallot"
    ],
    correctAnswers: [2],
    explanation: "La triade auscultatoire associant souffle systolique d'hyperdébit pulmonaire, dédoublement fixe et insensible à la respiration du 2ème bruit, et roulement de débit tricuspide est la signature typique de la Communication Inter-Auriculaire (CIA).",
    clinicalPearl: "Enfant asymptomatique + Dédoublement fixe de B2 = CIA de découverte fortuite."
  },
  {
    id: 'cas-cong-04',
    courseId: 'crs-congenitales',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Cas Clinique 4 : Le prématuré\nUn nouveau-né prématuré de 32 SA présente à J5 une détresse respiratoire et un pouls bondissant. L'auscultation cardiaque trouve un souffle continu sous-claviculaire gauche. La saturation est à 92% en air ambiant.\nQuel est le diagnostic et quel traitement médical peut être instauré ?",
    options: [
      "CIV - Diurétiques",
      "PCA - Ibuprofène",
      "Tétralogie de Fallot - Prostaglandines E1",
      "CIA - Digitalique",
      "Coarctation de l'aorte - Captopril"
    ],
    correctAnswers: [1],
    explanation: "Prématuré avec souffle continu sous-claviculaire gauche et hyperpulsatilité artérielle (pouls bondissants) = Persistance du Canal Artériel (PCA). Le traitement médical de fermeture repose sur un inhibiteur des prostaglandines (Ibuprofène IV).",
    clinicalPearl: "Prématuré + Pouls bondissants + Souffle continu = PCA traitée par Ibuprofène."
  },
  {
    id: 'cas-cong-05',
    courseId: 'crs-congenitales',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : L'adolescent négligé\nUn adolescent de 16 ans, suivi pour un 'souffle au cœur' depuis l'enfance, consulte pour une dyspnée d'effort et des céphalées. Il présente une cyanose des lèvres et des doigts, un hippocratisme digital et un B2 très intense ('claqué') au foyer pulmonaire. Le souffle systolique est discret.\nQuelle est la complication évolutive la plus probable ?",
    options: [
      "Endocardite infectieuse",
      "Fermeture spontanée de la CIV",
      "Syndrome d'Eisenmenger",
      "Régression de l'HTAP",
      "Sténose mitrale"
    ],
    correctAnswers: [2],
    explanation: "Adolescent avec cardiopathie avec shunt non opérée dans l'enfance qui développe une cyanose secondaire, un hippocratisme et des signes d'HTAP suprasystémique (B2 claqué) présente un syndrome d'Eisenmenger avéré.",
    clinicalPearl: "Shunt initial non cyanogène devenu bleu à l'adolescence = Syndrome d'Eisenmenger."
  }
];
