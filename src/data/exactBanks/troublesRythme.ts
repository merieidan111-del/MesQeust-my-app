import { Question } from '../../types/medical';

export const TROUBLES_RYTHME_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-rythme-01',
    courseId: 'crs-troubles-rythme',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une tachycardie régulière à QRS fins à 150/min est observée sur l'ECG. Le diagnostic le plus probable est :",
    options: [
      "a) Fibrillation atriale",
      "b) Tachycardie sinusale",
      "c) Flutter atrial avec conduction 2:1",
      "d) Tachycardie ventriculaire",
      "e) Extrasystoles atriales bigéminées"
    ],
    correctAnswers: [2],
    explanation: "Un flutter atrial a typiquement une fréquence atriale de ~300/min. Une conduction 2:1 donne une fréquence ventriculaire de 150/min, ce qui est un tableau classique. Une TS peut atteindre 150/min mais est souvent liée à un contexte (effort, fièvre). Une TV aurait des QRS larges.",
    clinicalPearl: "Truc d'ECG : Toute tachycardie régulière à QRS fins à exactement 150/min est un Flutter 2:1 jusqu'à preuve du contraire !"
  },
  {
    id: 'q-rythme-02',
    courseId: 'crs-troubles-rythme',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le mécanisme physiopathologique principal de la Tachycardie par Réentrée Intra-Nodale (TRIN) ?",
    options: [
      "a) Foyer automatique ectopique dans l'oreillette",
      "b) Présence d'un faisceau accessoire (Kent)",
      "c) Dualité nodale (voie lente et voie rapide)",
      "d) Macro-réentrée au niveau de l'oreillette droite",
      "e) Ischémie myocardique aiguë"
    ],
    correctAnswers: [2],
    explanation: "La TRIN repose sur l'existence de deux voies de conduction au niveau du nœud AV (une lente, une rapide) avec des propriétés électrophysiologiques différentes, permettant la mise en place d'un circuit de réentrée. Le faisceau de Kent (b) est le substrat du WPW.",
    clinicalPearl: "TRIN (maladie de Bouveret) = Dualité nodale (voie alpha lente et voie bêta rapide)."
  },
  {
    id: 'q-rythme-03',
    courseId: 'crs-troubles-rythme',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la fibrillation atriale (FA), laquelle de ces affirmations est VRAIE ?",
    options: [
      "a) L'ECG montre des ondes F en \"toit d'usine\".",
      "b) Le risque thromboembolique est évalué par le score HAS-BLED.",
      "c) Toute FA à QRS fins est nécessairement une FA non valvulaire.",
      "d) Le traitement de première intention d'une FA mal tolérée est la cardioversion électrique externe (CEE).",
      "e) La FA paroxystique dure toujours plus de 7 jours."
    ],
    correctAnswers: [3],
    explanation: "En cas de mauvaise tolérance hémodynamique (hypotension, OAP, etc.), la CEE en urgence est le traitement de choix. Les ondes F (a) sont typiques du flutter. Le CHA₂DS₂-VASc (b) évalue le risque embolique, HAS-BLED le risque hémorragique. Une FA valvulaire (c) peut aussi avoir des QRS fins. La FA paroxystique (e) se réduit en moins de 7 jours.",
    clinicalPearl: "FA mal tolérée (collapsus, OAP, angor) = Cardioversion électrique (CEE) synchronisée en urgence immédiate."
  },
  {
    id: 'q-rythme-04',
    courseId: 'crs-troubles-rythme',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente un ECG avec un QT corrigé à 500 ms et des épisodes de tachycardie polymorphe avec torsion de l'axe des QRS. Quel diagnostic évoquez-vous ?",
    options: [
      "a) Tachycardie ventriculaire monomorphe",
      "b) Fibrillation ventriculaire",
      "c) Torsades de pointes",
      "d) Flutter atrial variable",
      "e) Tachycardie jonctionnelle"
    ],
    correctAnswers: [2],
    explanation: "Les torsades de pointes sont une TV polymorphe survenant dans un contexte d'allongement de l'intervalle QT. La description est caractéristique.",
    clinicalPearl: "\"QT Long = Danger Grand\" : Torsade de pointes = Magnésium IV + accélérer le rythme (Isoprénaline)."
  },
  {
    id: 'q-rythme-05',
    courseId: 'crs-troubles-rythme',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une \"onde delta\" et un intervalle PR court sur l'ECG de repos sont évocateurs de :",
    options: [
      "a) Syndrome de Brugada",
      "b) Bloc de branche gauche",
      "c) Syndrome de Wolff-Parkinson-White (WPW)",
      "d) Tachycardie atriale focale",
      "e) Cardiomyopathie hypertrophique"
    ],
    correctAnswers: [2],
    explanation: "L'onde delta et le PR court sont la signature ECG de la pré-excitation ventriculaire via un faisceau accessoire (faisceau de Kent) dans le WPW.",
    clinicalPearl: "Trépied ECG du WPW : PR court (< 120 ms) + Onde delta d'empâtement initial + Élargissement du QRS."
  },
  {
    id: 'q-rythme-06',
    courseId: 'crs-troubles-rythme',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le traitement spécifique à initier en urgence face à une fibrillation ventriculaire ?",
    options: [
      "a) Amiodarone IV",
      "b) Choc électrique externe (CEE)",
      "c) Vérapamil IV",
      "d) Atropine",
      "e) Isoprénaline"
    ],
    correctAnswers: [1],
    explanation: "La FV est un arrêt cardiaque. Le traitement immédiat est la défibrillation par CEE. Les médicaments viennent secondairement.",
    clinicalPearl: "Fibrillation ventriculaire = Défibrillation par CEE immédiate !"
  },
  {
    id: 'q-rythme-07',
    courseId: 'crs-troubles-rythme',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"phénomène R/T\" observé dans les extrasystoles ventriculaires (ESV) évoque :",
    options: [
      "a) Une ESV bénigne sur cœur sain",
      "b) Un risque accru de tachycardie ventriculaire",
      "c) Une origine jonctionnelle de l'extrasystole",
      "d) Une association à un bloc AV",
      "e) Un bigéminisme constant"
    ],
    correctAnswers: [1],
    explanation: "Le phénomène R/T (ou R-on-T) signifie qu'une ESV survient sur l'onde T du complexe précédent, pendant la phase vulnérable du ventricule. Cela prédispose à la tachycardie ventriculaire ou la fibrillation ventriculaire.",
    clinicalPearl: "Phénomène R/T = ESV tombant en phase vulnérable de repolarisation ventriculaire (haut risque de TV/FV)."
  },
  {
    id: 'q-rythme-08',
    courseId: 'crs-troubles-rythme',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la fibrillation atriale, la perte de la \"systole atriale\" peut entraîner une baisse du débit cardiaque d'environ :",
    options: [
      "a) 5-10%",
      "b) 10-20%",
      "c) 30-40%",
      "d) 50-60%",
      "e) 70-80%"
    ],
    correctAnswers: [2],
    explanation: "La contraction atriale (systole) contribue de façon significative au remplissage ventriculaire, surtout à fréquence cardiaque élevée. Sa perte dans la FA peut réduire le débit cardiaque de 30 à 40%.",
    clinicalPearl: "La systole atriale contribue à 30-40% du remplissage VG, particulièrement en cas de compliance réduite."
  },
  {
    id: 'q-rythme-09',
    courseId: 'crs-troubles-rythme',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le circuit de la tachycardie orthodromique dans le WPW ?",
    options: [
      "a) Descente par la voie accessoire, remontée par le NAV",
      "b) Descente par le NAV, remontée par la voie accessoire",
      "c) Circuit confiné au nœud AV",
      "d) Macro-réentrée dans l'oreillette droite",
      "e) Foyer automatique dans le ventricule"
    ],
    correctAnswers: [1],
    explanation: "C'est la définition de la tachycardie orthodromique, la plus fréquente dans le WPW. Elle produit une tachycardie régulière à QRS fins (car la dépolarisation ventriculaire commence normalement via le NAV).",
    clinicalPearl: "Tachycardie orthodromique = Conduction antérograde par le nœud AV (QRS fins) et rétrograde par le faisceau de Kent."
  },
  {
    id: 'q-rythme-10',
    courseId: 'crs-troubles-rythme',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement curatif de premier choix pour un flutter atrial typique est :",
    options: [
      "a) L'amiodarone per os",
      "b) La cardioversion électrique",
      "c) L'ablation par radiofréquence de l'isthme cavo-tricuspide",
      "d) La digoxine",
      "e) Les bêta-bloquants"
    ],
    correctAnswers: [2],
    explanation: "L'ablation de l'isthme cavo-tricuspide, qui est le point de passage obligé du circuit de réentrée du flutter typique, a un taux de succès très élevé (>90%) et est considérée comme un traitement curatif.",
    clinicalPearl: "Flutter atrial typique = Ablation par radiofréquence de l'isthme cavo-tricuspide (succès > 90%)."
  },
  {
    id: 'q-rythme-11',
    courseId: 'crs-troubles-rythme',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un complexe de \"capture\" durant une tachycardie à QRS larges est un argument en faveur de :",
    options: [
      "a) Une Tachycardie Ventriculaire (TV)",
      "b) Une Tachycardie Supra-Ventriculaire (TSV) avec aberration",
      "c) Un Flutter atrial",
      "d) Une Fibrillation atriale",
      "e) Une Tachycardie sinusale"
    ],
    correctAnswers: [0],
    explanation: "Le complexe de capture est un QRS fin qui survient lorsque l'activité atriale (sinusale) arrive au bon moment pour capturer les ventricules de manière transitoire. Cela prouve l'existence d'une dissociation auriculo-ventriculaire, qui est très en faveur d'une TV.",
    clinicalPearl: "Triade très spécifique de la TV : Dissociation auriculo-ventriculaire, Captures et Fusions."
  },
  {
    id: 'q-rythme-12',
    courseId: 'crs-troubles-rythme',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament est contre-indiqué dans la tachycardie du WPW avec FA à QRS larges ?",
    options: [
      "a) Amiodarone",
      "b) Flectaine (Flécaïnide)",
      "c) Vérapamil",
      "d) Adénosine",
      "e) Sotalol"
    ],
    correctAnswers: [2],
    explanation: "Le vérapamil (et les digitaliques) peuvent accélérer la conduction dans la voie accessoire en ralentissant la conduction dans le NAV, ce qui peut précipiter une fibrillation ventriculaire. Les autres anti-arythmiques de classe I ou III peuvent être utilisés avec prudence.",
    clinicalPearl: "Contre-indication absolue : Vérapamil et Digoxine dans le WPW (bloquent le nœud AV et favorisent le passage massif par le Kent)."
  },
  {
    id: 'q-rythme-13',
    courseId: 'crs-troubles-rythme',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"bigéminisme\" est défini par :",
    options: [
      "a) Deux extrasystoles consécutives",
      "b) Une extrasystole suivie de deux complexes normaux",
      "c) Une extrasystole tous les deux complexes normaux",
      "d) Une extrasystole pour chaque complexe normal",
      "e) Trois extrasystoles consécutives"
    ],
    correctAnswers: [3],
    explanation: "Le bigéminisme est un rythme où chaque complexe sinusal normal est suivi d'une extrasystole (ratio 1:1). Le trigéminisme (b) est 1 ES pour 2 complexes normaux. Un doublet (a) est 2 ES consécutives.",
    clinicalPearl: "Bigéminisme = 1 complexe sinusal alternant avec 1 extrasystole."
  },
  {
    id: 'q-rythme-14',
    courseId: 'crs-troubles-rythme',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La principale complication du syndrome de Wolff-Parkinson-White (WPW) est :",
    options: [
      "a) L'infarctus du myocarde",
      "b) L'endocardite infectieuse",
      "c) La survenue d'une fibrillation atriale pouvant dégénérer en FV",
      "d) L'insuffisance cardiaque systolique",
      "e) La tamponnade cardiaque"
    ],
    correctAnswers: [2],
    explanation: "Si la FA survient chez un patient avec WPW, les impulsions très rapides des oreillettes peuvent être conduites très rapidement aux ventricules via le faisceau de Kent, induisant une réponse ventriculaire extrêmement rapide et pouvant dégénérer en FV.",
    clinicalPearl: "FA pré-excitée sur WPW (SuperWolf) : risque d'arrêt cardiaque par dégénérescence en fibrillation ventriculaire."
  },
  {
    id: 'q-rythme-15',
    courseId: 'crs-troubles-rythme',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal facteur de risque des torsades de pointes ?",
    options: [
      "a) Raccourcissement du QT",
      "b) Allongement du QT",
      "c) Intervalle PR court",
      "d) Onde delta",
      "e) Bloc de branche droit"
    ],
    correctAnswers: [1],
    explanation: "L'allongement de l'intervalle QT, qu'il soit congénital ou acquis (médicamenteux, troubles ioniques), est le substrat nécessaire au développement des torsades de pointes.",
    clinicalPearl: "Torsades de pointes = Allongement du QTc (> 500 ms) + Hypokaliémie / Hypomagnésémie."
  },
  {
    id: 'q-rythme-16',
    courseId: 'crs-troubles-rythme',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la FA, le score CHA₂DS₂-VASc est utilisé pour :",
    options: [
      "a) Évaluer le risque hémorragique",
      "b) Choisir l'anti-arythmique",
      "c) Décider de l'indication d'une anticoagulation",
      "d) Évaluer la sévérité de l'insuffisance cardiaque",
      "e) Prédire le succès de l'ablation"
    ],
    correctAnswers: [2],
    explanation: "Le score CHA₂DS₂-VASc stratifie le risque d'accident thromboembolique (AVC notamment) chez les patients avec FA non valvulaire. Un score ≥2 chez l'homme ou ≥3 chez la femme indique une anticoagulation.",
    clinicalPearl: "CHA2DS2-VASc = Risque thromboembolique d'AVC ; HAS-BLED = Risque hémorragique sous traitement."
  },
  {
    id: 'q-rythme-17',
    courseId: 'crs-troubles-rythme',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une tachycardie irrégulière à QRS fins est le plus souvent due à :",
    options: [
      "a) Une Tachycardie Ventriculaire polymorphe",
      "b) Un Flutter atrial avec conduction variable",
      "c) Une Fibrillation atriale",
      "d) Une Tachycardie jonctionnelle",
      "e) Des extrasystoles ventriculaires fréquentes"
    ],
    correctAnswers: [2],
    explanation: "L'irrégularité des cycles RR est un signe cardinal de la FA. Le flutter peut être irrégulier si la conduction est variable, mais il est le plus souvent régulier.",
    clinicalPearl: "\"FA = Fouillis\" : Tachycardie irrégulière à QRS fins sans onde P = Fibrillation Atriale."
  },
  {
    id: 'q-rythme-18',
    courseId: 'crs-troubles-rythme',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le substrat anatomique du flutter atrial typique ?",
    options: [
      "a) Foyer automatique dans l'oreillette gauche",
      "b) Dualité nodale",
      "c) Faisceau de Kent",
      "d) Macro-réentrée dans l'oreillette droite autour de l'anneau tricuspide",
      "e) Foyer dans les veines pulmonaires"
    ],
    correctAnswers: [3],
    explanation: "Le flutter typique (commun) est dû à une macro-réentrée dans l'oreillette droite, dont le circuit tourne autour de l'anneau tricuspide, l'isthme cavo-tricuspide étant une partie cruciale du circuit.",
    clinicalPearl: "Flutter typique = Macro-réentrée anti-horaire autour de l'anneau tricuspide."
  },
  {
    id: 'q-rythme-19',
    courseId: 'crs-troubles-rythme',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement d'une tachycardie sinusale repose principalement sur :",
    options: [
      "a) L'ablation par radiofréquence",
      "b) Les bêta-bloquants en première intention",
      "c) Le traitement de sa cause",
      "d) La cardioversion électrique",
      "e) Les inhibiteurs calciques"
    ],
    correctAnswers: [2],
    explanation: "La tachycardie sinusale est un symptôme, pas une maladie. Son traitement est étiologique (ex: corriger une anémie, une hyperthyroïdie, une douleur). Ralentir le rythme sans traiter la cause peut être néfaste.",
    clinicalPearl: "Tachycardie sinusale = Symptôme d'adaptation physiologique : toujours traiter la cause !"
  },
  {
    id: 'q-rythme-20',
    courseId: 'crs-troubles-rythme',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient sous Amiodarone pour une FA présente une bradycardie et une fatigue. Quel examen de surveillance est primordial ?",
    options: [
      "a) Radiographie pulmonaire",
      "b) Bilan thyroïdien (TSH)",
      "c) Ionogramme sanguin",
      "d) ECG pour mesurer l'intervalle QT",
      "e) Fonction rénale"
    ],
    correctAnswers: [1],
    explanation: "L'amiodarone peut entraîner des dysthyroïdies (hypo- ou hyperthyroïdie) qui sont des effets indésirables fréquents et peuvent se manifester par des troubles du rythme ou une asthénie. Le bilan thyroïdien fait partie de la surveillance obligatoire.",
    clinicalPearl: "Surveillance Amiodarone : TSH tous les 6 mois, radio pulmonaire annuelle, ECG (QTc)."
  },
  {
    id: 'q-rythme-21',
    courseId: 'crs-troubles-rythme',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe ECG pathognomonique d'une extrasystole jonctionnelle ?",
    options: [
      "a) Onde P' prématurée différente de l'onde P sinusale",
      "b) QRS large et bizarre",
      "c) QRS fin, prématuré, non précédé d'une onde P",
      "d) Repos compensateur incomplet",
      "e) Onde delta"
    ],
    correctAnswers: [2],
    explanation: "Les ESJ naissent près du nœud AV. L'influx dépolarise les ventricules normalement (QRS fin) et peut dépolariser les oreillettes de manière rétrograde (onde P rétrograde souvent masquée dans le QRS) ou ne pas les dépolariser. L'absence d'onde P visible avant le QRS prématuré est caractéristique.",
    clinicalPearl: "Extrasystole jonctionnelle : QRS fin prématuré sans onde P antérograde préalable."
  },
  {
    id: 'q-rythme-22',
    courseId: 'crs-troubles-rythme',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un complexe de \"fusion\" pendant une tachycardie à QRS larges :",
    options: [
      "a) Élimine le diagnostic de TV",
      "b) Est en faveur d'une TSV avec aberration",
      "c) Est un argument positif pour une TV",
      "d) Indique un WPW",
      "e) Signe une intoxication digitalique"
    ],
    correctAnswers: [2],
    explanation: "Le complexe de fusion est le résultat de la capture partielle des ventricules à la fois par l'impulsion sinusale (via le NAV) et par l'impulsion ventriculaire ectopique. Ce phénomène n'est possible qu'en présence d'une dissociation auriculo-ventriculaire, donc en faveur d'une TV.",
    clinicalPearl: "Complexe de fusion = Activation ventriculaire bivalente (sinusale + foyer ectopique) prouvant la TV."
  },
  {
    id: 'q-rythme-23',
    courseId: 'crs-troubles-rythme',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament peut être utilisé pour \"accélérer\" la fréquence cardiaque dans le traitement des torsades de pointes ?",
    options: [
      "a) Vérapamil",
      "b) Bêta-bloquants",
      "c) Isoprénaline ou stimulation électrique externe",
      "d) Adénosine",
      "e) Digoxine"
    ],
    correctAnswers: [2],
    explanation: "L'objectif est de raccourcir l'intervalle QT pour briser le circuit des torsades. L'accélération de la fréquence cardiaque sinusale (par isoprénaline ou stimulation) permet de raccourcir physiologiquement le QT.",
    clinicalPearl: "Isoprénaline / Stimulation accélératrice = Raccourcissement physiologique du QT et arrêt des torsades."
  },
  {
    id: 'q-rythme-24',
    courseId: 'crs-troubles-rythme',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le risque embolique dans la FA est principalement dû à :",
    options: [
      "a) La formation de thrombus dans l'oreillette gauche, notamment l'appendice",
      "b) L'athérosclérose des artères coronaires",
      "c) La stase veineuse dans les membres inférieurs",
      "d) L'activation plaquettaire par l'inflammation",
      "e) L'hypertension artérielle pulmonaire"
    ],
    correctAnswers: [0],
    explanation: "La perte de contraction efficace des oreillettes (en particulier de l'appendice auriculaire gauche) entraîne une stase sanguine, favorisant la formation de thrombus qui peuvent ensuite être éjectés dans la circulation systémique.",
    clinicalPearl: "> 90% des thrombi de la FA non valvulaire naissent dans l'auricule gauche."
  },
  {
    id: 'q-rythme-25',
    courseId: 'crs-troubles-rythme',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"SuperWolf\" désigne :",
    options: [
      "a) Une TRIN très rapide",
      "b) Un WPW avec une voie accessoire à conduction très rapide",
      "c) Une FA sur WPW avec réponse ventriculaire très rapide et QRS larges en \"accordéon\"",
      "d) Une TV polymorphe",
      "e) Un flutter atypique"
    ],
    correctAnswers: [2],
    explanation: "Le terme \"SuperWolf\" (ou \"Pre-excited AF\") décrit une situation extrêmement dangereuse où une FA est conduite très rapidement aux ventricules via le faisceau de Kent, produisant une tachycardie irrégulière à QRS larges et polymorphes, à haut risque de dégénérescence en FV.",
    clinicalPearl: "\"SuperWolf\" = FA sur WPW avec QRS larges polymorphes en accordéon (extrême urgence : CEE !)."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-rythme-01',
    courseId: 'crs-troubles-rythme',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 : Palpitations chez un jeune homme\nUn étudiant de 22 ans, sans antécédents, consulte pour des palpitations rapides et régulières survenues brutalement pendant un effort. L'ECG montre une tachycardie régulière à 180/min, QRS fins, sans onde P visible.\nQCM : Quel est le diagnostic le plus probable ?",
    options: [
      "a) Tachycardie sinusale inappropriée",
      "b) Tachycardie ventriculaire",
      "c) Tachycardie par réentrée intra-nodale (TRIN)",
      "d) Fibrillation atriale",
      "e) Tachycardie atriale focale"
    ],
    correctAnswers: [2],
    explanation: "Le tableau typique du sujet jeune sans cardiopathie, avec début et fin brutaux, tachycardie régulière à QRS fins, est très évocateur d'une TRIN. L'ECG de repos est souvent normal en dehors des crises.",
    clinicalPearl: "Maladie de Bouveret (TRIN) : Palpitations rapides régulières à début et fin brusques chez un sujet jeune."
  },
  {
    id: 'cas-rythme-02',
    courseId: 'crs-troubles-rythme',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 : Arythmie chez un patient âgé\nUn homme de 70 ans, HTA, diabète, présente un essoufflement et des palpitations irrégulières. L'ECG montre une activité atriale anarchique, absence d'ondes P identifiables, QRS fins, cycles RR irréguliers.\nQCM : Quelle est la première mesure thérapeutique à envisager (après stabilisation clinique) ?",
    options: [
      "a) Ablation par radiofréquence",
      "b) Vérifier la kaliémie et instaurer une anticoagulation si indiquée",
      "c) Administrer du Vérapamil IV",
      "d) Planifier une cardioversion électrique immédiate",
      "e) Prescrire de l'Amiodarone per os"
    ],
    correctAnswers: [1],
    explanation: "Le tableau est celui d'une FA. La priorité après la stabilisation (vérifier la tolérance) est l'évaluation du risque thromboembolique (score CHA₂DS₂-VASc) et la mise sous anticoagulant si nécessaire. La correction des troubles métaboliques sous-jacents est aussi importante.",
    clinicalPearl: "Priorité dans la FA inaugurale stable : Anticoagulation (prévention de l'AVC embolique)."
  },
  {
    id: 'cas-rythme-03',
    courseId: 'crs-troubles-rythme',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 : Malaise avec ECG anormal\nUne femme de 45 ans est admise pour un malaise lipothymique. Son traitement inclut un anti-émétique. L'ECG montre un QT corrigé à 520 ms et des salves de tachycardie polymorphe avec torsion de l'axe.\nQCM : Quel est le diagnostic et quelle est la mesure urgente ?",
    options: [
      "a) Flutter atrial ; Ablation",
      "b) Torsades de pointes ; Arrêt du médicament suspect, Magnésium IV",
      "c) Fibrillation ventriculaire ; Choc électrique",
      "d) TV monomorphe ; Amiodarone IV",
      "e) ESV bigéminées ; Bêta-bloquant"
    ],
    correctAnswers: [1],
    explanation: "Le contexte (médicament pro-arythmogène) et l'ECG (QT long + TV polymorphe) sont typiques des torsades de pointes. Le traitement urgent comprend l'arrêt de l'agent causal et l'administration de sulfate de magnésium IV.",
    clinicalPearl: "Torsade de pointes : Sulfate de Magnésium IV 2g en bolus + arrêt de toute molécule allongeant le QT."
  },
  {
    id: 'cas-rythme-04',
    courseId: 'crs-troubles-rythme',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 : Douleur thoracique et palpitations\nUn homme de 50 ans, tabagique, se présente aux urgences pour douleur thoracique et palpitations. L'ECG montre une tachycardie régulière à 155/min avec QRS larges (>140 ms). La pression artérielle est à 90/60 mmHg.\nQCM : Quelle est votre attitude thérapeutique immédiate ?",
    options: [
      "a) Adénosine en IV bolus",
      "b) Amiodarone IV lente",
      "c) Choc électrique externe synchronisé",
      "d) Métoprolol per os",
      "e) Attendre les résultats des enzymes cardiaques"
    ],
    correctAnswers: [2],
    explanation: "Devant une tachycardie à QRS larges (donc suspecte de TV) mal tolérée sur le plan hémodynamique (hypotension), le traitement de choix est la cardioversion électrique urgente.",
    clinicalPearl: "\"TV d'abord\" : Tachycardie à QRS larges + hypotension = CEE synchronisé en urgence !"
  },
  {
    id: 'cas-rythme-05',
    courseId: 'crs-troubles-rythme',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 : Découverte fortuite sur un ECG systématique\nUn ECG de repos est réalisé chez un patient asymptomatique de 30 ans pour un bilan pré-opératoire. Il montre un PR court à 110 ms et une onde delta sur plusieurs dérivations.\nQCM : Quelle est la conduite à tenir initiale ?",
    options: [
      "a) Ablation prophylactique en urgence",
      "b) Réaliser une épreuve d'effort pour voir la disparition de la pré-excitation",
      "c) Rassurer et ne rien faire",
      "d) Débuter un bêta-bloquant",
      "e) Implanter un défibrillateur automatique"
    ],
    correctAnswers: [1],
    explanation: "La découverte d'un WPW asymptomatique nécessite une évaluation du risque. L'épreuve d'effort peut montrer la disparition brutale de la pré-excitation à fréquence cardiaque élevée, ce qui est un signe de faible risque. Une consultation spécialisée est indiquée pour discuter d'une exploration électrophysiologique.",
    clinicalPearl: "WPW asymptomatique : Épreuve d'effort pour tester la période réfractaire de la voie accessoire."
  }
];
