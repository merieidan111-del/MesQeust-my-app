import { Question } from '../../types/medical';

export const HTAP_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-htap-01',
    courseId: 'crs-htap',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La définition hémodynamique actuelle de l'Hypertension Pulmonaire (HTP) est :",
    options: [
      "a) PAPm ≥ 25 mmHg au repos.",
      "b) PAPm ≥ 20 mmHg au repos.",
      "c) PAPs ≥ 35 mmHg à l'effort.",
      "d) PAPm ≥ 30 mmHg à l'effort.",
      "e) PAPm ≥ 15 mmHg avec résistance vasculaire pulmonaire (RVP) élevée."
    ],
    correctAnswers: [1],
    explanation: "La définition a été révisée en 2018 (6ème Congrès Mondial sur l'HTP) pour abaisser le seuil à 20 mmHg, permettant un diagnostic plus précoce. Les anciens critères (≥ 25 mmHg) ne sont donc plus valables.",
    clinicalPearl: "Définition hémodynamique internationale actuelle : PAPm >= 20 mmHg au repos au cathétérisme droit."
  },
  {
    id: 'q-htap-02',
    courseId: 'crs-htap',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une HTP post-capillaire est caractérisée par :",
    options: [
      "a) Une pression artérielle pulmonaire d'occlusion (PAPO) ≤ 15 mmHg.",
      "b) Une pression artérielle pulmonaire d'occlusion (PAPO) > 15 mmHg.",
      "c) Une résistance vasculaire pulmonaire (RVP) > 3 UW.",
      "d) L'absence d'insuffisance cardiaque gauche.",
      "e) Une réponse positive au test de vasoréactivité."
    ],
    correctAnswers: [1],
    explanation: "La PAPO reflète la pression dans l'oreillette gauche. Si elle est > 15 mmHg, cela indique une origine \"en aval\" des capillaires (cœur gauche), définissant l'HTP post-capillaire. Une RVP élevée peut être présente dans les HTP mixtes.",
    clinicalPearl: "HTP post-capillaire = PAPO > 15 mmHg (pathologie cardiaque gauche). Pré-capillaire = PAPO <= 15 mmHg."
  },
  {
    id: 'q-htap-03',
    courseId: 'crs-htap',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mécanisme principal de l'Hypertension Artérielle Pulmonaire (HTAP, HTP pré-capillaire) est :",
    options: [
      "a) La compression extrinsèque des artères pulmonaires.",
      "b) La vasoconstriction et le remodelage vasculaire.",
      "c) L'augmentation passive du débit cardiaque.",
      "d) L'embolie pulmonaire aiguë.",
      "e) L'hypervolémie chronique."
    ],
    correctAnswers: [1],
    explanation: "L'HTAP est une maladie vasculaire pulmonaire caractérisée par une dysfonction endothéliale entraînant une vasoconstriction, une prolifération cellulaire et une thrombose in situ, aboutissant à un remodelage des artérioles pulmonaires.",
    clinicalPearl: "Triade physiopathologique de l'HTAP : \"V.P.T.\" = Vasoconstriction + Prolifération/Remodelage + Thrombose in situ."
  },
  {
    id: 'q-htap-04',
    courseId: 'crs-htap',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe électrocardiographique le plus spécifique d'une hypertrophie ventriculaire droite (HVD) dans l'HTP ?",
    options: [
      "a) Ondes T pointues en précordiales droites.",
      "b) Ondes P pulmonaire (P pointue en DII).",
      "c) Surcharge auriculaire droite.",
      "d) Déviation axiale droite et onde R dominante en V1 (R/S >1).",
      "e) Bloc de branche droit complet."
    ],
    correctAnswers: [3],
    explanation: "L'HVD due à la surcharge pressionnelle du ventricule droit se traduit par une déviation axiale droite (>90°) et une prédominance de l'onde R sur l'onde S en V1, signes directs de l'hypertrophie. L'onde P pulmonaire et la surcharge auriculaire droite sont des signes indirects.",
    clinicalPearl: "Signe direct d'HVD à l'ECG : Axe droit (> +90°) et R/S > 1 en V1."
  },
  {
    id: 'q-htap-05',
    courseId: 'crs-htap',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'échocardiographie d'une HTP, la pression artérielle pulmonaire systolique (PAPs) est estimée principalement par :",
    options: [
      "a) Le diamètre télédiastolique du ventricule droit.",
      "b) La vitesse de régurgitation tricuspide.",
      "c) Le temps d'accélération du flux pulmonaire.",
      "d) Le rapport E/A au niveau mitral.",
      "e) La fraction de raccourcissement du ventricule gauche."
    ],
    correctAnswers: [1],
    explanation: "La formule de Bernoulli simplifiée (PAPs = 4V² + POD) utilise la vitesse maximale du flux de régurgitation tricuspide (V) pour estimer le gradient de pression entre le VD et l'OD. La pression de l'OD (POD) est estimée par le calibre et la collapsibilité de la VCI.",
    clinicalPearl: "Estimation échocardiographique de la PAPs : Formule de Bernoulli sur le flux d'IT (PAPs = 4V² + POD)."
  },
  {
    id: 'q-htap-06',
    courseId: 'crs-htap',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'étiologie la plus fréquente d'une HTP post-capillaire dans le monde est :",
    options: [
      "a) La sténose mitrale.",
      "b) L'insuffisance cardiaque gauche (ICG).",
      "c) La cardiopathie ischémique.",
      "d) Les valvulopathies aortiques.",
      "e) La cardiomyopathie hypertrophique."
    ],
    correctAnswers: [1],
    explanation: "L'insuffisance cardiaque à fraction d'éjection préservée ou réduite est la cause la plus commune d'HTP post-capillaire, bien devant les valvulopathies mitrales pures, surtout dans les pays où les cardiopathies ischémiques et l'hypertension artérielle sont prévalentes.",
    clinicalPearl: "Cause n°1 d'HTP mondiale = Cardiopathie gauche (Groupe 2 : IC à FE diminuée ou préservée)."
  },
  {
    id: 'q-htap-07',
    courseId: 'crs-htap',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le test de vasoréactivité pulmonaire au monoxyde d'azote (NO) inhalé est principalement indiqué pour :",
    options: [
      "a) Tous les patients avec une HTP.",
      "b) Les patients avec une HTP post-capillaire.",
      "c) Les patients avec une HTAP idiopathique ou héréditaire.",
      "d) Les patients avec une HTP due à une maladie respiratoire.",
      "e) Les patients en insuffisance cardiaque droite aiguë."
    ],
    correctAnswers: [2],
    explanation: "Ce test identifie la minorité de patients (environ 10%) atteints d'HTAP qui ont une composante vasoconstrictrice réversible. Ces \"répondeurs aigus\" peuvent bénéficier d'un traitement par inhibiteurs calciques à fortes doses avec un bon pronostic. Il est contre-indiqué dans les HTP post-capillaires ou hypoxiques.",
    clinicalPearl: "Test de vasoréactivité au NO : Uniquement dans l'HTAP du groupe 1 idiopathique ou héritable."
  },
  {
    id: 'q-htap-08',
    courseId: 'crs-htap',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel traitement spécifique de l'HTAP agit en mimant l'effet de la prostacycline, un puissant vasodilatateur et anti-agrégant ?",
    options: [
      "a) Bosentan.",
      "b) Sildénafil.",
      "c) Époprosténol.",
      "d) Macitentan.",
      "e) Riociguat."
    ],
    correctAnswers: [2],
    explanation: "L'époprosténol est un analogue de la prostacycline. Il active la voie de la prostacycline, entraînant une vasodilatation et inhibant la prolifération des cellules musculaires lisses et l'agrégation plaquettaire.",
    clinicalPearl: "Époprosténol IV = Analogue synthétique de la prostacycline (voie d'urgence vitale dans l'HTAP sévère)."
  },
  {
    id: 'q-htap-09',
    courseId: 'crs-htap',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'hypertension pulmonaire due à une embolie pulmonaire chronique non résolue (HTP post-embolique) est classée dans le groupe :",
    options: [
      "a) 1 : HTAP.",
      "b) 2 : HTP due à une cardiopathie gauche.",
      "c) 3 : HTP due à une pathologie pulmonaire et/ou hypoxie.",
      "d) 4 : HTP due à une obstruction artérielle pulmonaire.",
      "e) 5 : HTP de mécanismes multiples ou incertains."
    ],
    correctAnswers: [3],
    explanation: "Le groupe 4 de la classification de Nice (2018) est spécifiquement dédié aux HTP dues à des obstructions artérielles pulmonaires, dont la cause principale est l'embolie pulmonaire chronique.",
    clinicalPearl: "Classification : 1=Vase (HTAP), 2=Cœur gauche, 3=Poumon/Hypoxie, 4=Bouchon (Post-embolique), 5=Mêlé."
  },
  {
    id: 'q-htap-10',
    courseId: 'crs-htap',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement curatif de choix pour l'HTP post-embolique chronique est :",
    options: [
      "a) Le traitement anticoagulant seul.",
      "b) L'endartériectomie pulmonaire.",
      "c) L'angioplastie pulmonaire.",
      "d) La transplantation pulmonaire.",
      "e) Les thérapies médicales spécifiques (cibles)."
    ],
    correctAnswers: [1],
    explanation: "L'endartériectomie pulmonaire est une chirurgie qui vise à retirer le matériel obstructif organisé des artères pulmonaires. C'est un traitement potentiellement curatif lorsqu'elle est réalisable (obstructions proximales) et dans des centres experts.",
    clinicalPearl: "HTP post-embolique Groupe 4 = Endartériectomie pulmonaire chirurgicale bilatérale (seule option curative)."
  },
  {
    id: 'q-htap-11',
    courseId: 'crs-htap',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un facteur pronostic péjoratif dans l'HTAP n'est PAS :",
    options: [
      "a) Une classe fonctionnelle NYHA III ou IV.",
      "b) Une distance au test de marche de 6 minutes (6MWD) > 500 m.",
      "c) Une élévation des BNP ou NT-proBNP.",
      "d) Un index cardiaque < 2.0 L/min/m².",
      "e) Une pression auriculaire droite > 14 mmHg."
    ],
    correctAnswers: [1],
    explanation: "Une 6MWD > 440-500 m est un facteur pronostique favorable. Les autres options (classe NYHA élevée, marqueurs cardiaques élevés, index cardiaque bas et pression auriculaire droite élevée) sont tous des marqueurs de gravité et de mauvais pronostic.",
    clinicalPearl: "Test de marche de 6 minutes > 440-500 m = Critère de faible risque pronostique dans l'HTAP."
  },
  {
    id: 'q-htap-12',
    courseId: 'crs-htap',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un \"signe de Palla\" sur la radiographie thoracique évoque :",
    options: [
      "a) Une dilatation de l'arc moyen.",
      "b) Une cardiomégalie.",
      "c) Une embolie pulmonaire aiguë.",
      "d) Un œdème pulmonaire en ailes de papillon.",
      "e) Un épanchement pleural."
    ],
    correctAnswers: [2],
    explanation: "Le signe de Palla est une dilatation de l'artère pulmonaire droite avec oligo-hémie régionale (hyperclarté localisée), très évocatrice d'une embolie pulmonaire massive. Dans le contexte de l'HTP chronique, on recherche plutôt une dilatation de l'arc moyen (artère pulmonaire).",
    clinicalPearl: "Signe de Palla = Dilatation de l'artère pulmonaire descendante droite dans l'EP massive."
  },
  {
    id: 'q-htap-13',
    courseId: 'crs-htap',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La voie thérapeutique des inhibiteurs de la phosphodiestérase-5 (ex: Sildénafil) agit en :",
    options: [
      "a) Bloquant les récepteurs de l'endothéline.",
      "b) Inhibant la dégradation du GMPc.",
      "c) Stimulant la production de monoxyde d'azote (NO).",
      "d) Mimant l'effet de la prostacycline.",
      "e) Bloquant les canaux calciques."
    ],
    correctAnswers: [1],
    explanation: "Le NO active la guanylyl cyclase, qui produit du GMPc (vasodilatateur). La phosphodiestérase-5 dégrade le GMPc. Les iPDE5 (Sildénafil, Tadalafil) inhibent cette enzyme, augmentant ainsi les taux de GMPc et potentialisant l'effet vasodilatateur du NO.",
    clinicalPearl: "Inhibiteurs de la PDE-5 (Sildénafil/Tadalafil) = Prolongent la demi-vie du GMPc vasodilatateur."
  },
  {
    id: 'q-htap-14',
    courseId: 'crs-htap',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'HTP associée à une bronchopneumopathie chronique obstructive (BPCO) est classée dans le groupe :",
    options: [
      "a) 1.",
      "b) 2.",
      "c) 3.",
      "d) 4.",
      "e) 5."
    ],
    correctAnswers: [2],
    explanation: "Le groupe 3 regroupe les HTP dues à des maladies pulmonaires et/ou une hypoxie, comme la BPCO, l'emphysème, la fibrose pulmonaire et les syndromes d'apnées du sommeil.",
    clinicalPearl: "Groupe 3 = Pathologies respiratoires chroniques et hypoxémie alvéolaire (BPCO, emphysème, fibrose)."
  },
  {
    id: 'q-htap-15',
    courseId: 'crs-htap',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente une dyspnée d'effort, des crépitants basaux et une hypertrophie ventriculaire gauche à l'ECG. L'HTP suspectée est le plus souvent :",
    options: [
      "a) Pré-capillaire.",
      "b) Post-capillaire.",
      "c) Mixte.",
      "d) Due à une embolie chronique.",
      "e) Associée à une maladie rare."
    ],
    correctAnswers: [1],
    explanation: "La dyspnée avec crépitants et signes d'HVG sont très évocateurs d'une insuffisance cardiaque gauche sous-jacente, cause classique d'HTP post-capillaire.",
    clinicalPearl: "Crépitants + HVG = HTP post-capillaire (d'origine cardiaque gauche, groupe 2)."
  },
  {
    id: 'q-htap-16',
    courseId: 'crs-htap',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La mesure directe et \"gold standard\" pour le diagnostic et la classification hémodynamique de l'HTP est :",
    options: [
      "a) L'échocardiographie Doppler.",
      "b) La radiographie thoracique.",
      "c) Le scanner thoracique angiographique.",
      "d) Le cathétérisme cardiaque droit.",
      "e) L'IRM cardiaque."
    ],
    correctAnswers: [3],
    explanation: "Seul le cathétérisme droit permet de mesurer directement la PAPm, la PAPO, les pressions des cavités droites, le débit cardiaque et de calculer les résistances vasculaires. Il est indispensable pour confirmer le diagnostic et préciser le type d'HTP.",
    clinicalPearl: "Gold standard absolu de l'HTP = Cathétérisme cardiaque droit (Swan-Ganz)."
  },
  {
    id: 'q-htap-17',
    courseId: 'crs-htap',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'association HTP-sclérodermie est de pronostic sévère. Elle relève principalement du groupe :",
    options: [
      "a) 1.",
      "b) 2.",
      "c) 3.",
      "d) 4.",
      "e) 5."
    ],
    correctAnswers: [0],
    explanation: "L'HTP associée aux connectivites comme la sclérodermie est classée dans le groupe 1 (HTAP), même si elle peut avoir une composante post-capillaire liée à une atteinte cardiaque. C'est une forme agressive nécessitant un traitement spécifique précoce.",
    clinicalPearl: "Sclérodermie systémique = Cause majeure d'HTAP pré-capillaire sévère du Groupe 1."
  },
  {
    id: 'q-htap-18',
    courseId: 'crs-htap',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de première intention d'une HTP post-capillaire due à une insuffisance cardiaque gauche est :",
    options: [
      "a) Un inhibiteur des récepteurs de l'endothéline.",
      "b) Un inhibiteur de la phosphodiestérase-5.",
      "c) Un analogue de la prostacycline.",
      "d) Le traitement optimal de l'insuffisance cardiaque gauche.",
      "e) L'oxygénothérapie de longue durée."
    ],
    correctAnswers: [3],
    explanation: "Il faut traiter la cause. Les traitements spécifiques de l'HTAP (a, b, c) sont contre-indiqués dans l'HTP post-capillaire isolée car ils peuvent aggraver l'œdème pulmonaire en augmentant le flux sanguin vers un lit capillaire déjà congestionné.",
    clinicalPearl: "Règle absolue : Dans l'HTP du Groupe 2 (cœur gauche), les vasodilatateurs pulmonaires sont CONTRE-INDIQUÉS !"
  },
  {
    id: 'q-htap-19',
    courseId: 'crs-htap',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"remodelage vasculaire\" dans l'HTAP implique toutes ces modifications SAUF :",
    options: [
      "a) Hypertrophie de la média.",
      "b) Fibrose de l'intima.",
      "c) Vasodilatation majeure.",
      "d) Thrombose in situ.",
      "e) Formation de lésions plexiformes."
    ],
    correctAnswers: [2],
    explanation: "Le remodelage vasculaire dans l'HTAP est un processus prolifératif et obstructif (vasoconstriction, hypertrophie, fibrose, thrombose), aboutissant à une réduction de la lumière vasculaire. La vasodilatation est l'effet opposé, recherché par les traitements.",
    clinicalPearl: "Lésions plexiformes = Marqueur anatomopathologique caractéristique de l'HTAP avancée."
  },
  {
    id: 'q-htap-20',
    courseId: 'crs-htap',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un signe échographique de retentissement du VD dans l'HTP est :",
    options: [
      "a) Un septum interventriculaire paradoxal en diastole.",
      "b) Une fraction d'éjection du VG augmentée.",
      "c) Une dilatation de l'oreillette gauche isolée.",
      "d) Une fuite mitrale modérée.",
      "e) Un foramen ovale perméable sans shunt."
    ],
    correctAnswers: [0],
    explanation: "La surcharge pressionnelle du VD entraîne son hypertrophie et son dysfonctionnement. Le VD volumineux et hypertendu pousse le septum vers le VG en diastole (aplatissement du septum en D), signe de mauvais pronostic.",
    clinicalPearl: "Aspect du VG en \"D-shape\" (aplatissement du septum interventriculaire) = Surcharge sévère du VD."
  },
  {
    id: 'q-htap-21',
    courseId: 'crs-htap',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La \"maladie de Monge\" ou mal chronique des montagnes est une cause d'HTP par :",
    options: [
      "a) Obésité hypoventilation.",
      "b) Hypoxie alvéolaire chronique.",
      "c) Cardiopathie congénitale.",
      "d) Embolie pulmonaire chronique.",
      "e) Pathologie thromboembolique veineuse."
    ],
    correctAnswers: [1],
    explanation: "L'hypoxie chronique en haute altitude entraîne une vasoconstriction pulmonaire hypoxique persistante, qui peut évoluer vers un remodelage vasculaire fixé et une HTP du groupe 3.",
    clinicalPearl: "Maladie de Monge = Vasoconstriction pulmonaire hypoxique induite par l'altitude (Groupe 3)."
  },
  {
    id: 'q-htap-22',
    courseId: 'crs-htap',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'objectif principal du traitement de l'HTAP est :",
    options: [
      "a) La guérison de la maladie.",
      "b) La normalisation de la pression artérielle systémique.",
      "c) L'amélioration de la qualité de vie et la réduction du risque de décès.",
      "d) La prévention des embolies pulmonaires.",
      "e) Le traitement de l'insuffisance cardiaque gauche associée."
    ],
    correctAnswers: [2],
    explanation: "L'HTAP est une maladie chronique et incurable (sauf transplantation). Les stratégies thérapeutiques modernes visent à améliorer les symptômes, la capacité à l'effort et la survie par une approche de réduction du risque.",
    clinicalPearl: "Objectif HTAP : Atteindre et maintenir un profil de \"faible risque\" de mortalité à 1 an (< 5%)."
  },
  {
    id: 'q-htap-23',
    courseId: 'crs-htap',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le BNP ou NT-proBNP est un marqueur pronostique important dans l'HTAP car il reflète :",
    options: [
      "a) Le degré d'hypoxémie.",
      "b) La fonction rénale.",
      "c) La surcharge et la dysfonction du ventricule droit.",
      "d) L'inflammation systémique.",
      "e) L'équilibre glycémique."
    ],
    correctAnswers: [2],
    explanation: "Le ventricule droit, en situation de stress pariétal (pression et volume), sécrète des peptides natriurétiques (BNP). Leur taux sanguin est donc un bon reflet de l'étendue de l'atteinte et de la souffrance du VD.",
    clinicalPearl: "Élévation du BNP/NT-proBNP dans l'HTAP = Marqueur direct de souffrance ventriculaire droite."
  },
  {
    id: 'q-htap-24',
    courseId: 'crs-htap',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une cause d'HTP du groupe 5 (mécanismes multiples/incertains) est :",
    options: [
      "a) L'anémie hémolytique chronique.",
      "b) La sarcoïdose.",
      "c) L'insuffisance rénale chronique.",
      "d) La thyrotoxicose.",
      "e) Toutes ces réponses (dont la sarcoïdose)."
    ],
    correctAnswers: [1],
    explanation: "La sarcoïdose peut causer une HTP par plusieurs mécanismes : fibrose pulmonaire (Groupe 3), atteinte cardiaque (Groupe 2), et vascularite granulomateuse obstructive (Groupe 1-like). Sa multifactorialité la place dans le Groupe 5.",
    clinicalPearl: "Groupe 5 (mécanismes intriqués) = Sarcoïdose, histiocytose X, maladies hématologiques."
  },
  {
    id: 'q-htap-25',
    courseId: 'crs-htap',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'anticoagulation est une pierre angulaire du traitement dans :",
    options: [
      "a) L'HTAP idiopathique.",
      "b) L'HTP post-capillaire due à une ICG.",
      "c) L'HTP due à une BPCO.",
      "d) L'HTP due aux cardiopathies congénitales.",
      "e) L'HTP post-embolique chronique."
    ],
    correctAnswers: [4],
    explanation: "Dans l'HTP post-embolique, l'anticoagulation est indispensable pour prévenir la récidive thromboembolique, qui aggraverait l'obstruction. Son rôle dans l'HTAP idiopathique est plus discuté et n'est plus systématiquement recommandé.",
    clinicalPearl: "Anticoagulation à vie formelle : HTP thromboembolique chronique du Groupe 4."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-htap-01',
    courseId: 'crs-htap',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La Dyspnée de Mme A.\nMme A., 55 ans, consulte pour une dyspnée stade NYHA II évoluant depuis 6 mois, sans antécédents cardiaques. L'ECG montre une onde P pulmonaire et un sus-décalage de ST en V1-V2. La radiographie thoracique révèle une dilatation de l'arc moyen. L'échocardiographie estime une PAPs à 65 mmHg, un VD dilaté et hypokinétique, avec une fonction VG normale.\nQ1. Quelle est l'hypothèse diagnostique la plus probable ?\nQ2. Quel examen est indispensable pour confirmer le diagnostic et évaluer le pronostic ?",
    options: [
      "a) Insuffisance cardiaque gauche / Scanner thoracique injecté",
      "b) Hypertension artérielle pulmonaire (HTAP) / Cathétérisme cardiaque droit",
      "c) Bronchopneumopathie chronique obstructive (BPCO) / Épreuves fonctionnelles respiratoires",
      "d) Embolie pulmonaire aiguë / Dosage des D-Dimères",
      "e) Myocardite / IRM cardiaque"
    ],
    correctAnswers: [1],
    explanation: "Hypertension artérielle pulmonaire (HTAP). Le tableau est celui d'une HTP pré-capillaire (dyspnée, signes d'HVD et de surcharge droite, PAPs élevée avec VG normal). Le cathétérisme cardiaque droit est le gold standard indispensable pour confirmer le diagnostic (PAPm ≥ 20 mmHg, PAPO ≤ 15 mmHg).",
    clinicalPearl: "Suspicion d'HTAP pré-capillaire = Cathétérisme cardiaque droit obligatoire avant tout traitement."
  },
  {
    id: 'cas-htap-02',
    courseId: 'crs-htap',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'Œdème des Membres Inférieurs de M. B.\nM. B., 70 ans, hypertendu et diabétique, présente des œdèmes des membres inférieurs, une turgescence jugulaire et une hépatomégalie douloureuse. L'échocardiographie montre une HTP (PAPs 50 mmHg), une hypertrophie VG concentrique et une dysfonction diastolique de grade II. La FEVG est à 55%.\nQ1. Quel est le type d'HTP le plus probable ?\nQ2. Quelle serait l'erreur thérapeutique à éviter ?",
    options: [
      "a) HTAP primitive / Prescrire des diurétiques",
      "b) HTP post-capillaire isolée (Groupe 2) / Commencer un antagoniste des récepteurs de l'endothéline",
      "c) HTP mixte / Instaurer un IEC",
      "d) HTP due à une maladie pulmonaire / Optimiser le contrôle de la PA",
      "e) HTP post-embolique / Limiter le sel"
    ],
    correctAnswers: [1],
    explanation: "HTP post-capillaire isolée liée à une cardiopathie gauche (dysfonction diastolique VG). Les traitements spécifiques de l'HTAP (comme les antagonistes des récepteurs de l'endothéline) sont formellement contre-indiqués dans l'HTP post-capillaire isolée car ils peuvent aggraver l'œdème pulmonaire.",
    clinicalPearl: "Erreur fatale : Donner un vasodilatateur pulmonaire sur une HTP post-capillaire cardiaque gauche."
  },
  {
    id: 'cas-htap-03',
    courseId: 'crs-htap',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La Toux Sèche de Mlle C.\nMlle C., 28 ans, suivie pour une sclérodermie systémique, se plaint d'une aggravation de sa dyspnée (NYHA III) et d'une toux sèche. L'échocardiographie de dépistage annuel montre une PAPs à 55 mmHg, sans anomalie du VG.\nQ1. Compte tenu de la pathologie sous-jacente, quelle est la cause la plus probable de cette HTP ?\nQ2. Quel bilan complémentaire est prioritaire pour éliminer une autre cause fréquente d'HTP dans la sclérodermie ?",
    options: [
      "a) Fibrose pulmonaire interstitielle / Coronarographie",
      "b) Hypertension artérielle pulmonaire associée à la sclérodermie / Scanner thoracique haute résolution",
      "c) Hypertrophie VG / Dosage des anticorps antiphospholipides",
      "d) Péricardite constrictive / Biopsie rénale",
      "e) Valvulopathie mitrale / Épreuves fonctionnelles respiratoires seules"
    ],
    correctAnswers: [1],
    explanation: "HTAP associée à la sclérodermie (Groupe 1). Le scanner thoracique haute résolution est prioritaire pour rechercher ou éliminer une pneumopathie interstitielle diffuse (PID, Groupe 3), car la prise en charge thérapeutique diffère radicalement.",
    clinicalPearl: "Sclérodermie : Dépister chaque année l'HTAP (Groupe 1) et éliminer la fibrose interstitielle au scanner HR."
  },
  {
    id: 'cas-htap-04',
    courseId: 'crs-htap',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Les Syncopes de M. D.\nM. D., 40 ans, sans antécédents, consulte pour des syncopes à l'effort. L'auscultation trouve un B2 bruitant et un souffle systolique tricuspide. L'ECG montre un R/S >1 en V1. L'échocardiographie objective un VD très dilaté et hypertrophié, une PAPs à 100 mmHg et un aplatissement septal en diastole.\nQ1. Que craignez-vous devant ce tableau ?\nQ2. Quelle est la stratégie thérapeutique la plus appropriée en première intention ?",
    options: [
      "a) Une sténose aortique / Remplacement valvulaire",
      "b) Une cardiomyopathie hypertrophique / Bêta-bloquants",
      "c) Une HTAP sévère à haut risque / Initiation d'une bithérapie orale spécifique pour l'HTAP et évaluation pour la transplantation",
      "d) Un rétrécissement mitral / Commissurotomie",
      "e) Une tachycardie ventriculaire isolée / Angioplastie"
    ],
    correctAnswers: [2],
    explanation: "HTAP sévère à haut risque. Les syncopes d'effort dans l'HTP sont un signal d'alarme de gravité extrême (défaillance d'adaptation du débit cardiaque du VD). Une bithérapie (ou trithérapie avec prostacycline IV) d'emblée et un bilan pré-greffe sont requis.",
    clinicalPearl: "Syncope d'effort dans l'HTP = Signe de faillite hémodynamique du ventricule droit (urgence vitale)."
  },
  {
    id: 'cas-htap-05',
    courseId: 'crs-htap',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Les Antécédents de M. E.\nM. E., 60 ans, a été traité il y a 2 ans pour un cancer du poumon. Il présente une dyspnée NYHA II. Le scanner thoracique de contrôle montre des séquelles fibrosantes post-radiques et une dilatation des artères pulmonaires. L'échocardiographie confirme une HTP (PAPs 45 mmHg).\nQ1. Dans quel groupe classez-vous cette HTP ?\nQ2. Quel est le pilier du traitement de cette HTP ?",
    options: [
      "a) Groupe 1 : HTAP / Traitements spécifiques de l'HTAP",
      "b) Groupe 2 : HTP cardiogauche / Diurétiques seuls",
      "c) Groupe 3 : HTP due à une maladie pulmonaire / Oxygénothérapie de longue durée",
      "d) Groupe 4 : HTP post-embolique / Endartériectomie",
      "e) Groupe 5 : Mécanismes multiples / Transplantation immédiate"
    ],
    correctAnswers: [2],
    explanation: "Groupe 3 : HTP due à une maladie pulmonaire parenchymateuse (fibrose post-radique). La pierre angulaire du traitement est la correction de l'hypoxémie par oxygénothérapie de longue durée.",
    clinicalPearl: "HTP du Groupe 3 : Oxygénothérapie pour corriger la vasoconstriction hypoxique."
  }
];
