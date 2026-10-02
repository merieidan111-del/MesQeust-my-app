import { Question } from '../../types/medical';

export const SYNCOPE_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-sync-01',
    courseId: 'crs-syncope',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la définition clinique fondamentale d'une syncope selon les recommandations européennes (ESC) ?",
    options: [
      "A) Une perte de connaissance transitoire (PdCT) liée à une hypoperfusion cérébrale globale et passagère, caractérisée par un début rapide, une courte durée et une récupération spontanée, complète et ad integrum.",
      "B) Une altération prolongée de la conscience supérieure à 30 minutes sans reprise de conscience spontanée.",
      "C) Une amnésie rétrograde isolée avec conservation du tonus postural.",
      "D) Une crise tonico-clonique prolongée avec déficit neurologique focal séquellaire.",
      "E) Un état de léthargie fébrile avec raideur méningée."
    ],
    correctAnswers: [0],
    explanation: "La syncope est une perte de connaissance transitoire consécutive à une hypoperfusion cérébrale globale et brève (arrêt de perfusion cérébrale de plus de 6 à 8 secondes ou chute de la PAS < 50-60 mmHg). Elle est brève (< 1-2 min) avec reprise immédiate et totale de la conscience.",
    clinicalPearl: "Syncope = Hypoperfusion cérébrale globale brève à récupération SPONTANÉE, COMPLÈTE et SANS SÉQUELLE."
  },
  {
    id: 'q-sync-02',
    courseId: 'crs-syncope',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen paraclinique simple, non invasif et peu coûteux est OBLIGATOIRE et systématique chez TOUT patient consultant pour une syncope ?",
    options: [
      "A) L'électrocardiogramme (ECG) 12 dérivations de repos.",
      "B) L'IRM cérébrale avec séquences de diffusion.",
      "C) L'angioscanner coronaire.",
      "D) L'électroencéphalogramme (EEG) de sieste.",
      "E) Le cathétérisme cardiaque droit."
    ],
    correctAnswers: [0],
    explanation: "L'ECG 12 dérivations de repos est l'examen pivot systématique obligatoire chez tout syncopé. Il recherche des signes d'alarme : BAV, bloc de branche, onde de nécrose, syndrome de Brugada, QT long/court, hypertrophie ou pré-excitation.",
    clinicalPearl: "Toute syncope impose un ECG 12 dérivations systématique (clé du triage étiologique et pronostique)."
  },
  {
    id: 'q-sync-03',
    courseId: 'crs-syncope',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les étiologies de syncopes suivantes, laquelle présente le pronostic vital le plus sombre avec risque élevé de mort subite précoce ?",
    options: [
      "A) La syncope cardiaque par trouble du rythme ventriculaire ou obstacle mécanique (cardiopathie sous-jacente).",
      "B) La syncope vasovagale typique émotionnelle du sujet jeune.",
      "C) La syncope mictionnelle nocturne.",
      "D) La syncope tussigène du patient bronchitique.",
      "E) La lipothymie d'origine phobique."
    ],
    correctAnswers: [0],
    explanation: "Les syncopes d'origine cardiaque (troubles conductifs paroxystiques, TV/FV sur cardiopathie ischémique ou congénitale, RAO serré) comportent un taux de mortalité à 1 an de 20 à 30%, justifiant une hospitalisation immédiate.",
    clinicalPearl: "Pronostic des syncopes : Les syncopes cardiaques ont une mortalité élevée ; les syncopes réflexes (vasovagales) ont un pronostic bénin."
  },
  {
    id: 'q-sync-04',
    courseId: 'crs-syncope',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la définition clinique formelle d'une hypotension orthostatique (recherchée par la prise de PA couché puis debout à 1 et 3 minutes) ?",
    options: [
      "A) Une baisse de la PAS >= 20 mmHg et/ou de la PAD >= 10 mmHg (ou PAS < 90 mmHg) survenant dans les 3 minutes suivant le passage à l'orthostatisme.",
      "B) Une baisse de la PAS isolée de 5 mmHg.",
      "C) Une élévation de la fréquence cardiaque > 150 bpm sans variation tensionnelle.",
      "D) Une augmentation de la pression différentielle > 80 mmHg debout.",
      "E) Une baisse exclusive de la PAD de 2 mmHg."
    ],
    correctAnswers: [0],
    explanation: "L'hypotension orthostatique est définie par une chute de la PAS >= 20 mmHg ou de la PAD >= 10 mmHg dans les 3 minutes suivant le lever, souvent favorisée par la déshydratation, les vasodilatateurs, les antihypertenseurs ou une dysautonomie.",
    clinicalPearl: "Hypotension orthostatique = Baisse de la PAS >= 20 mmHg ou de la PAD >= 10 mmHg dans les 3 min de lever."
  },
  {
    id: 'q-sync-05',
    courseId: 'crs-syncope',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle phase prodromique est hautement évocatrice d'une syncope réflexe vasovagale bénigne chez un sujet jeune ?",
    options: [
      "A) Présence de prodromes neuro-végétatifs : sueurs froides, nausées, bâillements, pâleur, flou visuel, sensation de voile noir et acouphènes.",
      "B) Absence totale de prodromes avec chute traumatique brutale en coup de hache.",
      "C) Douleur rétro-sternale constrictive irradiant à la mâchoire.",
      "D) Déficit moteur hémicorporel brutal.",
      "E) Diplopie binoculaire avec vertige rotatoire intense."
    ],
    correctAnswers: [0],
    explanation: "La syncope vasovagale est précédée de prodromes neurovégétatifs caractéristiques (sueurs, nausées, pâleur, chaleur, flou visuel) traduisant l'hypertonie vagale avant le collapsus hémodynamique.",
    clinicalPearl: "Prodromes neuro-végétatifs (sueurs, nausées, voile noir) chez le sujet jeune = Syncope vasovagale bénigne."
  },
  {
    id: 'q-sync-06',
    courseId: 'crs-syncope',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel syndrome d'Adams-Stokes correspond à des syncopes à début et fin foudroyants sans aucun prodrome avec chute traumatique ?",
    options: [
      "A) La syncope par bloc atrio-ventriculaire complet (BAV 3) paroxystique ou asystolie de plus de 6 à 10 secondes.",
      "B) La crise de tétanie par hyperventilation.",
      "C) Le syndrome du canal carpien compressif.",
      "D) La syncope mictionnelle nocturne du vieillard.",
      "E) Le malaise hypoglycémique réactif."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome d'Adams-Stokes est la survenue de syncopes brutales 'à l'emporte-pièce', sans prodromes, secondaires à une asystolie ou BAV complet paroxystique, avec pâleur initiale suivie de rougeur tégumentaire au réveil immédiat.",
    clinicalPearl: "Syndrome d'Adams-Stokes = Syncope à l'emporte-pièce brutale par BAV paroxystique → Pose d'un Pacemaker en urgence !"
  },
  {
    id: 'q-sync-07',
    courseId: 'crs-syncope',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel critère ECG de repolarisation ventriculaire fait évoquer un syndrome du QT long congénital prédisposant aux torsades de pointes et à la syncope d'effort ?",
    options: [
      "A) Un intervalle QTc (corrigé selon la formule de Bazett) > 460 ms chez l'homme ou > 480 ms chez la femme.",
      "B) Un espace PR court < 0,10 s.",
      "C) Une onde Q de nécrose en D2-D3-aVF.",
      "D) Un axe hyper-gauche à -60°.",
      "E) Un rapport R/S < 1 en V6."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome du QT long (congénital ou médicamenteux) se définit par un intervalle QTc allongé (> 460 ms chez l'homme, > 480 ms chez la femme). Il prédispose aux torsades de pointes qui déclenchent des syncopes d'effort ou par émotion vive (noyade, sonnerie de réveil).",
    clinicalPearl: "QTc allongé (> 460-480 ms) = Risque majeur de torsades de pointes et mort subite récupérée."
  },
  {
    id: 'q-sync-08',
    courseId: 'crs-syncope',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel aspect ECG dans les dérivations V1-V2 caractérise le syndrome de Brugada de type 1, cause génétique de syncope nocturne et de mort subite par fibrillation ventriculaire ?",
    options: [
      "A) Un sus-décalage du segment ST 'en dôme' >= 2 mm suivi d'une onde T négative dans au moins une dérivation précordiale droite (V1 ou V2).",
      "B) Un microvoltage généralisé des complexes QRS.",
      "C) Un aspect S1Q3T3.",
      "D) Une onde P pulmonaire pointue > 2,5 mm.",
      "E) Un sous-décalage horizontal de ST en miroir."
    ],
    correctAnswers: [0],
    explanation: "Le pattern de Brugada de type 1 associe un bloc incomplet droit avec sus-décalage ST en dôme (coved type) >= 2 mm et onde T inversée en V1-V2 (spontané ou démasqué par la fièvre ou les anti-arythmiques de classe Ic comme l'Ajmaline).",
    clinicalPearl: "Brugada type 1 : Sus-décalage ST 'en dôme' >= 2 mm en V1-V2 + onde T négative = Indication de DAI si syncope."
  },
  {
    id: 'q-sync-09',
    courseId: 'crs-syncope',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle manœuvre clinique diagnostique simple, réalisée sous surveillance ECG continue chez un sujet de plus de 40 ans sans souffle carotidien ni antécédent d'AVC, explore une syncope inexpliquée par hypersensibilité du sinus carotidien ?",
    options: [
      "A) Le massage sino-carotidien (MSC) unilatéral pendant 5 à 10 secondes.",
      "B) La manœuvre de Sellick laryngée.",
      "C) La compression oculaire bilatérale vigoureuse.",
      "D) La compression de l'artère radiale.",
      "E) Le test de provocation au froid sur le thorax."
    ],
    correctAnswers: [0],
    explanation: "Le massage du sinus carotidien teste la réponse réflexe : un arrêt cardiaque par asystolie ventriculaire >= 3 secondes (forme cardio-inhibitrice) ou une chute de la PAS >= 50 mmHg (forme vasodépressive) reproduisant les symptômes confirme l'hypersensibilité sino-carotidienne.",
    clinicalPearl: "Massage sino-carotidien : Positif si pause ventriculaire >= 3 secondes ou chute PAS >= 50 mmHg avec reproduction de la syncope."
  },
  {
    id: 'q-sync-10',
    courseId: 'crs-syncope',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel dispositif d'enregistrement électrocardiographique sous-cutané miniaturisé, doté d'une autonomie de 3 ans, est l'examen de choix pour documenter une syncope inexpliquée récidivante à bas risque ?",
    options: [
      "A) Le moniteur cardiaque implantable (Holter implantable sous-cutané : ILR).",
      "B) Le Holter des 24 heures conventionnel.",
      "C) L'enregistrement ECG d'une minute aux urgences.",
      "D) Le moniteur de pression artérielle ambulatoire (MAPA) seul.",
      "E) Le stimulateur triple chambre."
    ],
    correctAnswers: [0],
    explanation: "Le moniteur cardiaque implantable (Loop Recorder sous-cutané) enregistre en continu le rythme pendant 3 ans et fige l'ECG lors des épisodes syncopaux par activation automatique ou manuelle, offrant le meilleur rendement diagnostique pour les syncopes inexpliquées récurrentes.",
    clinicalPearl: "Syncope inexpliquée récurrente sans cardiopathie : Le Holter sous-cutané implantable (ILR) est l'examen de référence."
  },
  {
    id: 'q-sync-11',
    courseId: 'crs-syncope',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément clinique formel permet de différencier avec certitude une crise d'épilepsie généralisée d'une syncope convulsive ?",
    options: [
      "A) La présence d'une confusion post-critique prolongée (obnubilation > 15-30 min), d'une morsure du bord latéral de la langue et d'un encombrement stertoreux dans l'épilepsie.",
      "B) La survenue en position debout.",
      "C) La pâleur cutanée pendant l'épisode.",
      "D) La reprise de conscience en moins de 10 secondes.",
      "E) La présence de quelques myoclonies brèves de quelques secondes."
    ],
    correctAnswers: [0],
    explanation: "La syncope convulsive comporte des secousses brèves asynchrones (< 15 s) sans phase stertoreuse, avec retour immédiat et lucide à la conscience. L'épilepsie comporte une morsure latérale de la langue, une perte d'urines fréquente, et surtout une confusion post-critique prolongée de plusieurs dizaines de minutes.",
    clinicalPearl: "Diagnostic différentiel Syncope vs Épilepsie : Morsure latérale de la langue et confusion post-critique prolongée = Épilepsie."
  },
  {
    id: 'q-sync-12',
    courseId: 'crs-syncope',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle valvulopathie obstructive gauche se complique classiquement de syncopes à l'effort par inadaptation du débit cardiaque au-delà de l'obstacle serré ?",
    options: [
      "A) Le rétrécissement aortique (RAO) serré calcifié.",
      "B) L'insuffisance tricuspide minime.",
      "C) La bicuspidie aortique sans gradient.",
      "D) L'insuffisance mitrale de grade 1.",
      "E) Le prolapsus de la valve pulmonaire."
    ],
    correctAnswers: [0],
    explanation: "Dans le RAO serré, à l'effort, la vasodilatation musculaire périphérique entraîne une chute des résistances systémiques que le ventricule gauche ne peut compenser par augmentation du débit à cause de l'orifice aortique sténosé, provoquant une baisse brutale de la pression de perfusion cérébrale.",
    clinicalPearl: "Syncope d'effort = RAO serré ou CMHO jusqu'à preuve du contraire (Échocardiographie urgente indispensable) !"
  },
  {
    id: 'q-sync-13',
    courseId: 'crs-syncope',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle exploration hémodynamique et posturale sur table basculante est utilisée pour confirmer le diagnostic de syncope vasovagale atypique ?",
    options: [
      "A) Le test d'inclinaison posturale passive (Tilt-Test).",
      "B) L'épreuve d'hyperoxie normobare.",
      "C) L'épreuve d'effort triangulaire sur cycloergomètre.",
      "D) Le cathétérisme rétrograde gauche.",
      "E) La spirométrie d'effort."
    ],
    correctAnswers: [0],
    explanation: "Le Tilt-Test (inclinaison à 60-70° pendant 20 à 45 min, éventuellement sensibilisé par isoprénaline ou trinitrine sublinguale) reproduit la séquestration veineuse déclenchant la réaction réflexe vasovagale avec reproduction de la syncope.",
    clinicalPearl: "Tilt-Test : Utile pour reproduire et démontrer la composante cardio-inhibitrice ou vasodépressive d'une syncope réflexe."
  },
  {
    id: 'q-sync-14',
    courseId: 'crs-syncope',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle mesure physique active d'urgence (contre-manœuvre isométrique) permet au patient sentant venir les prodromes d'une syncope vasovagale d'avorter la perte de connaissance ?",
    options: [
      "A) Le croisement serré des jambes avec contraction volontaire des muscles fessiers et des cuisses (leg-crossing) et accroupissement.",
      "B) L'immobilité stricte debout sans bouger.",
      "C) La respiration superficielle rapide (tachypnée volontaire).",
      "D) La fermeture forcée des yeux en restant debout.",
      "E) L'hyperflexion de la tête en arrière."
    ],
    correctAnswers: [0],
    explanation: "Les contre-manœuvres isométriques physiques (leg-crossing, handgrip, arm tensing) chassent le sang veineux périphérique vers le cœur central, augmentent le retour veineux et la pression artérielle moyenne, ce qui permet d'éviter la syncope dès les prodromes.",
    clinicalPearl: "Contre-manœuvres physiques dans la syncope vasovagale : Croisement des jambes + contraction des fessiers (leg-crossing) avorte la syncope."
  },
  {
    id: 'q-sync-15',
    courseId: 'crs-syncope',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen invasif endocavitaire avec stimulation auriculaire et ventriculaire programmée est indiqué chez un syncopé porteur d'une séquelle d'infarctus ou d'un bloc de branche inexpliqué ?",
    options: [
      "A) L'exploration électrophysiologique endocavitaire (EEP).",
      "B) L'angiographie pulmonaire sélective.",
      "C) La ponction péricardique exploratrice.",
      "D) La biopsie endomyocardique transjugulaire.",
      "E) La manométrie œsophagienne haute résolution."
    ],
    correctAnswers: [0],
    explanation: "L'EEP mesure le temps de conduction sous-nodulaire His-ventricule (intervalle HV pathologique si >= 70 ms) et teste l'inductibilité de tachycardies ventriculaires ou de BAV paroxystiques, guidant l'indication d'un pacemaker ou d'un DAI.",
    clinicalPearl: "EEP dans la syncope sur cardiopathie ou bloc bifasciculaire : Intervalle HV >= 70 ms = Indication formelle de Pacemaker."
  },
  {
    id: 'q-sync-16',
    courseId: 'crs-syncope',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la conduite à tenir thérapeutique formelle chez un patient présentant des syncopes récidivantes avec hypersensibilité du sinus carotidien de forme cardio-inhibitrice documentée (pause asystolique > 3 secondes reproduisant les symptômes) ?",
    options: [
      "A) Implantation d'un stimulateur cardiaque définitif double chambre (Pacemaker DDD).",
      "B) Prescription d'un bêta-bloquant à forte dose.",
      "C) Néphrectomie bilatérale.",
      "D) Dénervation chirurgicale du ganglion stellaire.",
      "E) Alcoolisation du bulbe rachidien."
    ],
    correctAnswers: [0],
    explanation: "L'implantation d'un stimulateur cardiaque définitif double chambre (avec fonction d'accélération du rythme en cas de chute de fréquence) est le traitement de référence très efficace de la forme cardio-inhibitrice de l'hypersensibilité du sinus carotidien.",
    clinicalPearl: "Hypersensibilité sino-carotidienne cardio-inhibitrice symptomatique = Implantation d'un Pacemaker définitif double chambre."
  },
  {
    id: 'q-sync-17',
    courseId: 'crs-syncope',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie congénitale de pré-excitation ventriculaire avec faisceau accessoire de Kent peut être responsable de syncopes par tachycardie paroxystique rapide ou FA pré-excitée à risque de FV ?",
    options: [
      "A) Le syndrome de Wolff-Parkinson-White (WPW).",
      "B) Le syndrome de Liddle.",
      "C) Le syndrome de Turner.",
      "D) Le syndrome de Marfan.",
      "E) Le syndrome de Kartagener."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Wolff-Parkinson-White (espace PR court < 0,12 s et onde delta d'empâtement initial du QRS) peut causer des syncopes par tachycardie jonctionnelle très rapide ou par passage en FA pré-excitée menant à la fibrillation ventriculaire.",
    clinicalPearl: "WPW + Syncope = Risque vital majeur de mort subite par FA pré-excitée → Ablation par radiofréquence de la voie accessoire."
  },
  {
    id: 'q-sync-18',
    courseId: 'crs-syncope',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel facteur environnemental aigu favorise de façon très fréquente l'hypotension orthostatique et les syncopes chez la personne âgée polymédiquée en période estivale ?",
    options: [
      "A) La déshydratation extracellulaire par canicule ou restriction hydrique associée aux diurétiques et antihypertenseurs.",
      "B) L'excès de consommation de sel de table.",
      "C) Le port de bas de contention veineuse de classe 3.",
      "D) L'hypothermie modérée.",
      "E) L'hyperphagie glucidique nocturne."
    ],
    correctAnswers: [0],
    explanation: "Chez le sujet âgé, la diminution de la sensation de soif, les troubles de l'autorégulation baroréflexe et les prescriptions de diurétiques et de vasodilatateurs font de la déshydratation estivale la cause numéro 1 d'hypotension orthostatique syncopale.",
    clinicalPearl: "Personne âgée + Canicule + Diurétiques = Risque majeur d'hypotension orthostatique syncopale par hypovolémie."
  },
  {
    id: 'q-sync-19',
    courseId: 'crs-syncope',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle cause rare de syncope liée à la déglutition ou à la toux entre dans la catégorie des syncopes situationnelles réflexes ?",
    options: [
      "A) L'hypertonie vagale réflexe déclenchée par la stimulation des récepteurs des voies aériennes ou digestives hautes (syncope tussigène ou déglutitionnelle).",
      "B) L'obstruction mécanique de l'aorte thoracique par le bol alimentaire.",
      "C) L'inhalation d'un corps étranger dans la bronche souche droite.",
      "D) Le spasme de l'artère basilaire cérébrale.",
      "E) L'hypotension intracrânienne idiopathique."
    ],
    correctAnswers: [0],
    explanation: "Les syncopes situationnelles (mictionnelle, défécatoire, tussigène, lors de la déglutition) sont des syncopes réflexes neuro-médiées déclenchées par la stimulation vagale mécanique des viscères correspondants.",
    clinicalPearl: "Syncopes situationnelles (toux, miction, défécation) = Syncopes réflexes par activation vagale viscérale aiguë."
  },
  {
    id: 'q-sync-20',
    courseId: 'crs-syncope',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel score de stratification pronostique des syncopes aux urgences identifie les patients à haut risque d'événements indésirables majeurs nécessitant une hospitalisation ?",
    options: [
      "A) La règle d'OESIL (ou score EGSYS / SFDRR).",
      "B) Le score de Ranson pour pancréatite.",
      "C) Le score de Gleason pour la prostate.",
      "D) Le score de Silvermann respiratoire.",
      "E) Le score de Child pour la cirrhose."
    ],
    correctAnswers: [0],
    explanation: "Le score d'OESIL (âge > 65 ans, antécédent cardiovasculaire, syncope sans prodrome, ECG anormal) classe les patients selon leur mortalité à 1 an pour décider de l'admission en unité d'hospitalisation de courte durée.",
    clinicalPearl: "Score OESIL : Âge > 65 ans + Antécédent CV + Pas de prodrome + ECG anormal = Hospitalisation urgente nécessaire."
  },
  {
    id: 'q-sync-21',
    courseId: 'crs-syncope',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle cardiopathie congénitale complexe de l'enfant ou de l'adulte jeune se complique de syncopes d'effort anoxiques par spasme infundibulaire pulmonaire et majoration du shunt droite-gauche (malaise de Fallot) ?",
    options: [
      "A) La tétralogie de Fallot.",
      "B) Le canal atrioventriculaire complet.",
      "C) Le situs inversus totalis sans malformation.",
      "D) Le foramen ovale perméable isolé sans anévrisme.",
      "E) La coarctation aortique sans sténose."
    ],
    correctAnswers: [0],
    explanation: "Le malaise anoxique de Fallot (cyanose brutale, polypnée, syncope) est dû à un spasme infundibulaire sous-pulmonaire fermant la voie d'éjection droite et déviant tout le sang désaturé dans l'aorte à travers la CIV.",
    clinicalPearl: "Malaise anoxique de Fallot : Spasme infundibulaire + cyanose intense → Position genu-pectorale salvatrice immédiate."
  },
  {
    id: 'q-sync-22',
    courseId: 'crs-syncope',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient syncopé sans prodrome, la découverte d'un bloc de branche gauche (BBG) complet ou d'un bloc bifasciculaire (BBD + HBAG) à l'ECG fait suspecter en priorité :",
    options: [
      "A) Un bloc atrio-ventriculaire paroxystique de haut degré ou complet (BAV 3).",
      "B) Une hypocalcémie aiguë.",
      "C) Un spasme coronaire pur d'effort.",
      "D) Une péricardite constrictive subaiguë.",
      "E) Une pneumopathie interstitielle diffuse."
    ],
    correctAnswers: [0],
    explanation: "La présence d'un trouble de conduction intra-ventriculaire étendu (bloc bifasciculaire ou BBG large) chez un patient qui fait des syncopes inexpliquées sans prodrome est un signe d'alarme majeur de BAV paroxystique sous-nodulaire sévère.",
    clinicalPearl: "Syncope + Bloc bifasciculaire à l'ECG = BAV complet paroxystique suspecté → EEP ou Pacemaker selon les recommandations."
  },
  {
    id: 'q-sync-23',
    courseId: 'crs-syncope',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle tumeur bénigne intracardiaque pédiculée de l'oreillette gauche peut provoquer des syncopes positionnelles intermittentes en venant obstruer l'orifice mitral comme un battant de cloche ?",
    options: [
      "A) Le myxome de l'atrium gauche.",
      "B) Le rhabdomyome ventriculaire.",
      "C) Le lipome péricardique.",
      "D) L'angiosarcome de l'oreillette droite.",
      "E) Le fibrome valvulaire pulmonaire."
    ],
    correctAnswers: [0],
    explanation: "Le myxome de l'atrium gauche est la tumeur cardiaque primitive la plus fréquente. Il est pédiculé et mobile, et peut venir s'enclaver dans l'orifice mitral lors des changements de position (décubitus ou position assise), bloquant le flux sanguin et provoquant une syncope brutale.",
    clinicalPearl: "Syncope au changement de position + souffle cardiaque variable + altération de l'état général = Myxome de l'atrium gauche."
  },
  {
    id: 'q-sync-24',
    courseId: 'crs-sync',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen non invasif d'enregistrement ambulatoire de la pression artérielle sur 24 heures (MAPA) est particulièrement utile pour diagnostiquer les hypotensions orthostatiques ou post-prandiales iatrogènes ?",
    options: [
      "A) La MAPA (Mesure Ambulatoire de la Pression Artérielle).",
      "B) L'enregistrement polysomnographique de nuit.",
      "C) Le scanner rénal sans injection.",
      "D) La scintigraphie myocardique au MIBI.",
      "E) Le cathétérisme coronaire ambulatoire."
    ],
    correctAnswers: [0],
    explanation: "La MAPA documente les chutes tensionnelles spontanées au cours des activités quotidiennes, lors des levers ou après les repas (hypotension post-prandiale fréquente chez la personne âgée ou diabétique avec dysautonomie).",
    clinicalPearl: "MAPA sur 24h : Révèle les profils non-dipper et les chutes de pression post-prandiales et orthostatiques."
  },
  {
    id: 'q-sync-25',
    courseId: 'crs-syncope',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans le syndrome de tachycardie posturale orthostatique (POTS) chez la femme jeune, quel critère diagnostique est requis au lever sans hypotension artérielle significative ?",
    options: [
      "A) Une accélération de la fréquence cardiaque >= 30 bpm (ou FC >= 120 bpm) dans les 10 minutes suivant le passage à l'orthostatisme, sans chute de la PA.",
      "B) Une baisse tensionnelle systolique de plus de 40 mmHg d'emblée.",
      "C) Un bloc auriculo-ventriculaire complet debout.",
      "D) Une asystolie réflexe de 5 secondes.",
      "E) Une fièvre d'effort avec sueurs profuses."
    ],
    correctAnswers: [0],
    explanation: "Le POTS associe des symptômes d'intolérance orthostatique (palpitations, lipothymie, brouillard cérébral) et une tachycardie orthostatique disproportionnée (+ 30 bpm ou FC > 120 bpm) SANS chute de pression artérielle (différenciant le POTS de l'hypotension orthostatique).",
    clinicalPearl: "POTS : Majoration de la FC >= 30 bpm debout sans hypotension artérielle (intolérance orthostatique de la femme jeune)."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-sync-01',
    courseId: 'crs-syncope',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La chute traumatique du grand-père (Adams-Stokes)\nMonsieur Mohamed, 78 ans, sans plainte préalable, chute brutalement au sol dans son couloir en se levant la nuit, provoquant une fracture du poignet droit et une plaie de l'arcade sourcilière. Son épouse, témoin, rapporte qu'il s'est effondré 'comme une masse' d'une seconde à l'autre, était livide et inerte pendant 15 secondes, puis a rouvert les yeux complètement lucide, avec les joues toutes rouges. L'interrogatoire confirme l'absence totale de vertige, de nausée ou de palpitation avant la chute. Aux urgences, l'examen neurologique est normal. La PA est à 130/75 mmHg, FC 42 bpm régulière. L'ECG 12 dérivations montre une dissociation auriculo-ventriculaire complète avec ondes P à 80/min et complexes QRS larges à 42/min.\nQ1. Quel est le diagnostic étiologique certain de la syncope ?\nQ2. Quelle thérapeutique d'urgence vitale doit être organisée sans quitter le monitorage ?",
    options: [
      "A) Syndrome d'Adams-Stokes sur Bloc Auriculo-Ventriculaire complet (BAV 3) / Hospitalisation en USIC sous monitorage continu et implantation d'un stimulateur cardiaque définitif (Pacemaker) en urgence.",
      "B) Malaise vagal simple / Sortie immédiate avec attelle de poignet.",
      "C) Accident ischémique transitoire vertébro-basilaire / Aspirine 300 mg seule.",
      "D) Épilepsie généralisée tardive / Anti-épileptique per os sans hospitalisation cardiologique.",
      "E) Crise d'angoisse nocturne sans organicité."
    ],
    correctAnswers: [0],
    explanation: "La syncope foudroyante traumatique à l'emporte-pièce (Adams-Stokes) chez un patient âgé avec bradycardie à 42 bpm et dissociation AV complète à l'ECG affirme le BAV du 3ème degré. C'est une urgence vitale formelle imposant l'admission en soins intensifs, une sonde d'entraînement temporaire si besoin (ou isoprénaline) et la pose rapide d'un pacemaker définitif.",
    clinicalPearl: "Syncope brutale traumatique + BAV complet à l'ECG = Adams-Stokes → Pacemaker définitif en urgence !"
  },
  {
    id: 'cas-sync-02',
    courseId: 'crs-syncope',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : Le malaise au prélèvement sanguin\nUne étudiante de 20 ans présente un malaise lors d'une prise de sang au laboratoire. Elle ressent d'abord des sueurs profuses, une sensation de chaleur intense, des nausées puis un voile noir visuel. Elle s'affaisse lentement sur le fauteuil. L'infirmière note une pâleur extrême et constate 3 ou 4 secousses myocloniques brèves des bras. La patiente reprend connaissance spontanément au bout de 20 secondes en décubitus, parfaitement orientée mais se sentant fatiguée. La PA immédiate est à 90/55 mmHg, FC 52 bpm. L'ECG réalisé immédiatement après est strictement normal.\nQ1. Quel est le diagnostic certain ?\nQ2. Quelle explication devez-vous apporter à la patiente concernant les secousses musculaires ?",
    options: [
      "A) Syncope réflexe vasovagale typique émotionnelle / Les secousses sont des myoclonies d'anoxie cérébrale transitoire bénignes de la syncope convulsive et ne signent absolument pas une épilepsie.",
      "B) Crise de grand mal comitial / Instauration d'un traitement anti-épileptique à vie.",
      "C) Tachycardie ventriculaire polymorphe / Implantation d'un défibrillateur sous-cutané.",
      "D) AVC ischémique du tronc cérébral / Fibrinolyse d'urgence.",
      "E) Choc anaphylactique au latex du garrot."
    ],
    correctAnswers: [0],
    explanation: "Le contexte déclenchant (vue du sang, ponction veineuse), les prodromes neuro-végétatifs typiques, la brièveté, la récupération totale immédiate et l'ECG normal caractérisent la syncope vasovagale. Les quelques secousses myocloniques brèves (syncope convulsive) résultent de la privation transitoire d'oxygène cortical et ne correspondent en aucun cas à une comitialité.",
    clinicalPearl: "Syncope vasovagale avec myoclonies brèves (syncope convulsive) = Phénomène anoxique bénin, distinct de l'épilepsie."
  },
  {
    id: 'cas-sync-03',
    courseId: 'crs-syncope',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La syncope d'effort du sujet âgé essoufflé\nUn retraité de 74 ans consulte après avoir présenté une syncope en montant un escalier raide avec ses courses. Il rapporte depuis quelques mois une dyspnée d'effort d'aggravation progressive. À l'examen clinique, le pouls est petit et retardé (pulsus parvus et tardus). L'auscultation cardiaque découvre un souffle systolique rude, râpeux, maximum au 2ème espace intercostal droit, irradiant aux carotides, avec une diminution très nette du B2. L'ECG montre une hypertrophie ventriculaire gauche majeure (indice de Sokolow à 45 mm).\nQ1. Quel obstacle mécanique à l'éjection VG explique la survenue de cette syncope d'effort ?\nQ2. Quelle est la prise en charge thérapeutique curative à envisager rapidement ?",
    options: [
      "A) Rétrécissement aortique (RAO) serré calcifié symptomatique / Remplacement valvulaire aortique (chirurgical ou par TAVI) après bilan échocardiographique et coronarographique.",
      "B) Insuffisance mitrale aiguë par rupture de cordage / Plastie mitrale simple.",
      "C) Hypotension orthostatique iatrogène / Bas de contention seuls.",
      "D) Péricardite aiguë récidivante / Colchicine pendant 3 mois.",
      "E) Embolie pulmonaire distale / Anticoagulants oraux directs."
    ],
    correctAnswers: [0],
    explanation: "La triade clinique du RAO serré comprend : Angor, Dyspnée, Syncope d'effort. La survenue d'une syncope d'effort signe un RAO très serré critique et annonce une médiane de survie sans traitement chirurgical inférieure à 2-3 ans, imposant le remplacement valvulaire rapide (chirurgie ou TAVI selon l'âge et le risque chirurgical).",
    clinicalPearl: "RAO serré avec syncope d'effort = Urgence chirurgicale ou TAVI (risque de mort subite majeur en l'absence de désobstruction)."
  },
  {
    id: 'cas-sync-04',
    courseId: 'crs-syncope',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : L'hypotension orthostatique iatrogène du sujet âgé\nUne femme de 82 ans hypertendue et diabétique présente des malaises lipothymiques avec chutes itératives au lever du lit le matin. Son traitement comprend : Périndopril 10 mg, Amlodipine 10 mg, Indapamide 1,5 mg, Tamsulosine 0,4 mg (pour pollakiurie) et un antidépresseur tricyclique. La PA couchée est mesurée à 155/85 mmHg, FC 70 bpm. Au lever, la PA à 1 minute chute à 105/60 mmHg (baisse de 50/25 mmHg) sans accélération de la fréquence cardiaque, provoquant un étourdissement immédiat qui cède au recouchage.\nQ1. Quel est le diagnostic certain ?\nQ2. Quelles sont les premières mesures thérapeutiques prioritaires à mettre en œuvre ?",
    options: [
      "A) Hypotension orthostatique iatrogène majeure favorisée par l'accumulation de vasodilatateurs et la dysautonomie / Révision et allègement strict de l'ordonnance (diminution des antihypertenseurs, arrêt des alphabloquants/tricycliques), hydratation adéquate et lever en plusieurs étapes.",
      "B) Bloc de branche droit isolé / Pose d'un pacemaker sans toucher aux médicaments.",
      "C) Maladie d'Alzheimer débutante / Traitement anticholinestérasique.",
      "D) Épilepsie du lobe temporal / Carbamazépine d'emblée.",
      "E) Embolie pulmonaire récidivante / Héparine curative."
    ],
    correctAnswers: [0],
    explanation: "La chute tensionnelle de plus de 20 mmHg de PAS et 10 mmHg de PAD au lever confirme l'hypotension orthostatique. Chez la personne âgée diabétique, l'iatrogénie médicamenteuse (accumulation d'antihypertenseurs, alphabloquants et psychotropes) est la cause majeure. Le traitement repose d'abord sur la déprescription raisonnée et les mesures physiques.",
    clinicalPearl: "Hypotension orthostatique du sujet âgé : La révision systématique et l'allègement de l'ordonnance est le 1er geste thérapeutique."
  },
  {
    id: 'cas-sync-05',
    courseId: 'crs-syncope',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le syndrome de Brugada découvert après syncope\nUn homme de 34 ans sans antécédent médical consulte après avoir présenté deux syncopes nocturnes précédées de bruits respiratoires anormaux au lit selon sa compagne. L'examen somatique et l'échocardiographie transthoracique sont strictement normaux. L'ECG 12 dérivations de repos montre un sus-décalage du segment ST de 3 mm en dôme dans les dérivations V1 et V2 suivi d'ondes T négatives profondes (aspect de Brugada de type 1 spontané). Un enregistrement Holter ne montre pas d'arythmie soutenue pendant 24h.\nQ1. Quel est le diagnostic retenu ?\nQ2. Quelle thérapeutique de prévention de la mort subite est formellement indiquée chez ce patient ?",
    options: [
      "A) Syndrome de Brugada de type 1 symptomatique de syncopes / Implantation d'un défibrillateur automatique implantable (DAI) en prévention secondaire/primaire selon les recommandations ESC (Classe I).",
      "B) Infarctus antérieur ancien asymptomatique / Coronarographie simple sans défibrillateur.",
      "C) Péricardite aiguë traînante / AINS pendant 6 mois.",
      "D) Spasmophilie nocturne bénigne / Cure de magnésium per os.",
      "E) Simple variante physiologique de repolarisation précoce / Rassurer le patient sans suivi."
    ],
    correctAnswers: [0],
    explanation: "La constatation d'un aspect de Brugada de type 1 spontané chez un patient présentant des syncopes inexpliquées (ou antécédent d'arrêt cardiaque) constitue une indication formelle de Classe I à l'implantation d'un défibrillateur automatique implantable (DAI) car le risque de mort subite par FV nocturne est majeur.",
    clinicalPearl: "Aspect ECG de Brugada type 1 + Antécédent de syncope = Indication formelle d'implantation d'un défibrillateur (DAI) !"
  }
];
