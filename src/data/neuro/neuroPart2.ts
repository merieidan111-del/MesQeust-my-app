import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 4: COMPRESSION MÉDULLAIRE LENTE
// ==========================================
export const NEURO_LESSON_4_QUESTIONS: Question[] = [
  {
    id: 'q-nro-4-01',
    courseId: 'crs-neuro-4',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans une compression médullaire lente non traumatique, quel est le facteur pronostique le PLUS déterminant pour la récupération fonctionnelle ?",
    options: [
      "A. L'âge du patient.",
      "B. La nature bénigne ou maligne de la lésion.",
      "C. La rapidité du diagnostic et de la prise en charge neurochirurgicale.",
      "D. Le niveau de la compression (cervicale vs dorsale).",
      "E. La présence initiale de douleurs radiculaires."
    ],
    correctAnswers: [2],
    explanation: "Le pronostic fonctionnel dépend principalement du délai entre l'apparition des signes et la décompression chirurgicale. Une compression prolongée entraîne une myélomalacie (nécrose ischémique de la moelle) irréversible. Même une lésion bénigne aura un mauvais pronostic si la prise en charge est tardive.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-02',
    courseId: 'crs-neuro-4',
    questionNumber: 2,
    type: 'QCM',
    content: "Un syndrome de Brown-Séquard incomplet se traduit par :",
    options: [
      "A. Une hémiplégie controlatérale et une anesthésie thermo-algique homolatérale.",
      "B. Une paraplégie flasque avec abolition des réflexes.",
      "C. Un déficit moteur homolatéral et un déficit sensitif thermo-algique controlatéral.",
      "D. Des troubles sphinctériens précoces et un niveau sensitif net.",
      "E. Une atrophie et aréflexie dans un métamère précis."
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de Brown-Séquard résulte d'une hémisection médullaire. Du côté de la lésion (homolatéral) : syndrome pyramidal et cordonal postérieur. Du côté opposé (controlatéral) : déficit thermo-algique par lésion du faisceau spinothalamique croisé.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-03',
    courseId: 'crs-neuro-4',
    questionNumber: 3,
    type: 'QCM',
    content: "Quel est le signe clinique le PLUS SOUVENT révélateur d'une compression médullaire lente au stade initial ?",
    options: [
      "A. Le syndrome pyramidal (paraparésie spastique).",
      "B. Le syndrome rachidien (douleur vertébrale).",
      "C. Les troubles sphinctériens.",
      "D. Le syndrome lésionnel (douleur ou déficit radiculaire).",
      "E. Un signe de Babinski bilatéral."
    ],
    correctAnswers: [3],
    explanation: "Le syndrome lésionnel radiculaire (douleur en éclair ou névralgie constante dans un territoire de racine) est le signe révélateur le plus précoce, indiquant le niveau métamérique exact de la compression.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-04',
    courseId: 'crs-neuro-4',
    questionNumber: 4,
    type: 'QCM',
    content: "Devant une tétraplégie d'installation progressive avec un syndrome suspendu de dissociation syringomyélique (anesthésie thermo-algique avec sensibilité profonde conservée), quelle étiologie faut-il évoquer en PRIORITÉ ?",
    options: [
      "A. Un méningiome thoracique.",
      "B. Une myélopathie cervicarthrosique.",
      "C. Une tumeur intramédullaire (ex: épendymome, astrocytome) ou une syringomyélie.",
      "D. Une métastase vertébrale.",
      "E. Une sclérose en plaques."
    ],
    correctAnswers: [2],
    explanation: "Un syndrome suspendu avec dissociation sensitive thermo-algique touchant les fibres spinothalamiques croisées au centre de la moelle est caractéristique d'une lésion centro-médullaire (tumeur intramédullaire ou cavité syringomyélique).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-05',
    courseId: 'crs-neuro-4',
    questionNumber: 5,
    type: 'QCM',
    content: "Quelle caractéristique du méningiome rachidien est INCORRECTE ?",
    options: [
      "A. Il représente 15-20% des compressions médullaires tumorales.",
      "B. Il prédomine chez l'homme jeune.",
      "C. Son siège de prédilection est la région thoracique haute.",
      "D. Il est attaché à la dure-mère.",
      "E. Son diagnostic est souvent tardif, avec des douleurs pseudo-rhumatismales."
    ],
    correctAnswers: [1],
    explanation: "Option fausse B : Le méningiome rachidien prédomine nettement chez la femme de plus de 50 ans (ménopausée) et au niveau dorsal. Le neurinome (schwannome) prédomine chez l'homme adulte jeune.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-06',
    courseId: 'crs-neuro-4',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans la courbe évolutive de Guillot, quel stade est considéré comme définitivement irréversible ?",
    options: [
      "A. Parésie spasmodique.",
      "B. Parésie hyperspasmodique.",
      "C. Plégie flasquo-spasmodique.",
      "D. Plégie flasque.",
      "E. Tous les stades sont réversibles avec une chirurgie."
    ],
    correctAnswers: [3],
    explanation: "Le stade de plégie flasque avec anesthésie complète et aréflexie correspond à la destruction axonale et neuronale complète par myélomalacie irréversible.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-07',
    courseId: 'crs-neuro-4',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel examen complémentaire est l'EXAMEN DE CHOIX et de référence pour le diagnostic positif et topographique d'une compression médullaire ?",
    options: [
      "A. La radiographie standard du rachis.",
      "B. Le scanner rachidien (TDM).",
      "C. L'IRM médullaire avec séquences T1, T2 et gadolinium.",
      "D. La ponction lombaire avec analyse du LCR.",
      "E. L'électromyogramme (EMG)."
    ],
    correctAnswers: [2],
    explanation: "L'IRM médullaire est l'examen de référence absolu : elle montre directement la moelle, le siège épidural/intradural/intramédullaire de la lésion et les signes de souffrance ischémique (hypersignal T2).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-08',
    courseId: 'crs-neuro-4',
    questionNumber: 8,
    type: 'QCM',
    content: "Un patient présente une paraparésie spasmodique progressive et des douleurs en ceinture au niveau de l'ombilic. Quel niveau métamérique approximatif de compression médullaire faut-il suspecter ?",
    options: [
      "A. C5-C6.",
      "B. D4.",
      "C. D6.",
      "D. D10.",
      "E. L2-L4."
    ],
    correctAnswers: [3],
    explanation: "L'ombilic correspond anatomiquement au niveau métamérique D10 (D4 = mamelon, D6 = appendice xiphoïde, D12 = pli de l'aine/hypogastre).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-09',
    courseId: 'crs-neuro-4',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle étiologie extradurale est la PLUS FRÉQUENTE chez l'adulte d'âge mûr présentant une compression médullaire progressive sans traumatisme ?",
    options: [
      "A. Le neurinome.",
      "B. La hernie discale cervicale ou dorsale.",
      "C. Les métastases vertébrales (poumon, sein, prostate, rein).",
      "D. La tuberculose vertébrale (Mal de Pott).",
      "E. L'hématome épidural."
    ],
    correctAnswers: [2],
    explanation: "Les métastases épidurales rachidiennes représentent la cause extradurale la plus fréquente de compression médullaire chez l'adulte au-delà de 50 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-10',
    courseId: 'crs-neuro-4',
    questionNumber: 10,
    type: 'QCM',
    content: "Le syndrome du cône terminal se distingue du syndrome de la queue de cheval par :",
    options: [
      "A. La présence d'un déficit moteur pyramidal aux membres inférieurs.",
      "B. L'absence de troubles sphinctériens.",
      "C. La présence précoce et prédominante de troubles sphinctériens (vésico-sphinctériens) et d'une anesthésie en selle symétrique.",
      "D. Des douleurs radiculaires intenses prédominant aux membres inférieurs.",
      "E. Un début brutal et douloureux."
    ],
    correctAnswers: [2],
    explanation: "Le cône terminal contient les centres sacrés : son atteinte entraîne des troubles sphinctériens massifs précoces et une anesthésie en selle symétrique, alors que la queue de cheval donne des douleurs radiculaires pluriradiculaires asymétriques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-11',
    courseId: 'crs-neuro-4',
    questionNumber: 11,
    type: 'QCM',
    content: "Le phénomène physiopathologique vasculaire indirect prédominant dans la souffrance médullaire compressive est :",
    options: [
      "A. Une artérite des artères spinales.",
      "B. Une ischémie par compression artérielle directe.",
      "C. Une congestion et une stase veineuse, entraînant un œdème et une ischémie.",
      "D. Une thrombophlébite des veines épidurales.",
      "E. Un spasme vasculaire médullaire."
    ],
    correctAnswers: [2],
    explanation: "La compression comprime d'abord le réseau veineux médullaire à basse pression, provoquant une stase veineuse d'amont, un œdème vasogénique intramédullaire puis une ischémie secondaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-12',
    courseId: 'crs-neuro-4',
    questionNumber: 12,
    type: 'QCM',
    content: "Un signe 'négatif' capital pour affirmer l'origine médullaire (et non encéphalique) d'un déficit neurologique progressif est :",
    options: [
      "A. La présence de fasciculations.",
      "B. L'absence de signes sus-lésionnels (pas de signes crâniens ni de troubles de la conscience).",
      "C. La présence d'un signe de Babinski.",
      "D. L'existence de douleurs mécaniques rachidiennes.",
      "E. L'abolition des réflexes ostéotendineux."
    ],
    correctAnswers: [1],
    explanation: "L'absence de toute atteinte des nerfs crâniens et de troubles de la vigilance est l'argument négatif capital confirmant que le processus siège sous le foramen magnum au niveau médullaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-13',
    courseId: 'crs-neuro-4',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans le diagnostic différentiel d'une compression médullaire, quelle pathologie peut mimer un syndrome pyramidal mais SANS niveau sensitif net ?",
    options: [
      "A. Une polyradiculonévrite aiguë.",
      "B. Une myélite transverse.",
      "C. La sclérose latérale amyotrophique (SLA).",
      "D. La sclérose en plaques.",
      "E. Une carence en vitamine B12."
    ],
    correctAnswers: [2],
    explanation: "La SLA touche sélectivement les motoneurones centraux et périphériques sans aucune atteinte sensitive objective (absence totale de niveau sensitif ou de troubles thermo-algiques).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-14',
    courseId: 'crs-neuro-4',
    questionNumber: 14,
    type: 'QCM',
    content: "Quel élément du bilan pré-thérapeutique est indispensable pour guider la stratégie chirurgicale (abord antérieur vs postérieur) ?",
    options: [
      "A. La vitesse de sédimentation.",
      "B. Le dosage des marqueurs tumoraux sériques.",
      "C. La biopsie osseuse à distance.",
      "D. L'IRM pour préciser le siège exact (épidural, intradural extra-/intra-médullaire) et les rapports de la lésion.",
      "E. L'angiographie médullaire systématique."
    ],
    correctAnswers: [3],
    explanation: "L'IRM détermine le compartiment anatomique exact de la lésion et oriente la voie d'abord (corporectomie antérieure si compression ventrale, laminectomie postérieure si compression dorsale).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-15',
    courseId: 'crs-neuro-4',
    questionNumber: 15,
    type: 'QCM',
    content: "Le traitement d'une compression médullaire métastatique vertébrale symptomatique peut légitimement associer :",
    options: [
      "A. Chirurgie de décompression/stabilisation et radiothérapie locale adjuvante.",
      "B. Radiothérapie exclusive, la chirurgie étant systématiquement contre-indiquée.",
      "C. Chimiothérapie exclusive.",
      "D. Anticoagulation curative systématique pour prévenir les complications thromboemboliques.",
      "E. Une simple kinésithérapie et des antalgiques majeurs."
    ],
    correctAnswers: [0],
    explanation: "La décompression chirurgicale urgente (laminectomie ou corporectomie + ostéosynthèse) associée à la radiothérapie postopératoire permet de préserver la déambulation et l'autonomie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-16',
    courseId: 'crs-neuro-4',
    questionNumber: 16,
    type: 'QCM',
    content: "Un patient présente un syndrome centro-médullaire (syringomyélique) avec anesthésie thermo-algique bilatérale des mains. Quelle investigation complémentaire est PRIMORDIALE pour rechercher la cause fréquente ?",
    options: [
      "A. Une ponction lombaire avec électrophorèse des protéines du LCR.",
      "B. Un scanner thoracique pour rechercher un cancer bronchique.",
      "C. Une IRM encéphalique et de la charnière crânio-cervicale à la recherche d'une malformation d'Arnold-Chiari.",
      "D. Un électromyogramme des membres supérieurs.",
      "E. Une angiographie médullaire."
    ],
    correctAnswers: [2],
    explanation: "La cavité syringomyélique est le plus souvent secondaire à une malformation d'Arnold-Chiari de type I avec descente des amygdales cérébelleuses bloquant la circulation du LCR au foramen magnum.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-17',
    courseId: 'crs-neuro-4',
    questionNumber: 17,
    type: 'QCM',
    content: "Quel est le signe clinique le PLUS PRÉCOCE et le plus spécifique d'une compression du cône terminal (S2-S5) ?",
    options: [
      "A. Des douleurs radiculaires vives à la face postérieure des cuisses.",
      "B. Une paraparésie spastique.",
      "C. Des troubles sphinctériens (rétention urinaire, incontinence) et une anesthésie en selle.",
      "D. Un signe de Babinski bilatéral.",
      "E. L'abolition des réflexes rotuliens et achilléens."
    ],
    correctAnswers: [2],
    explanation: "Les troubles sphinctériens précoces majeurs (rétention puis miction par regorgement) associés à l'anesthésie périnéale en selle signent l'atteinte du cône terminal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-18',
    courseId: 'crs-neuro-4',
    questionNumber: 18,
    type: 'QCM',
    content: "Concernant les compressions médullaires de l'enfant, quelle affirmation est VRAIE ?",
    options: [
      "A. Elles se révèlent toujours par un déficit moteur franc.",
      "B. Les radiographies standards du rachis n'ont plus d'intérêt face à l'IRM.",
      "C. Un trouble de la statique rachidienne (scoliose ou cyphose douloureuse) doit systématiquement faire évoquer le diagnostic et demander une imagerie.",
      "D. Les tumeurs intramédullaires sont exceptionnelles.",
      "E. Le tableau clinique est identique à celui de l'adulte."
    ],
    correctAnswers: [2],
    explanation: "Chez l'enfant, une scoliose douloureuse ou raide est un signal d'alarme absolu d'une tumeur intrarachidienne sous-jacente (astrocytome, kyste) imposant une IRM médullaire complète.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-19',
    courseId: 'crs-neuro-4',
    questionNumber: 19,
    type: 'QCM',
    content: "Face à un hématome épidural spontané révélé par une paraplégie aiguë, quel facteur étiologique doit être recherché en PRIORITÉ ?",
    options: [
      "A. Un traumatisme vertébral minime passé inaperçu.",
      "B. Un traitement anticoagulant ou un trouble de la coagulation.",
      "C. Une malformation artério-veineuse médullaire.",
      "D. Une tumeur épidurale vascularisée.",
      "E. Une spondylodiscite."
    ],
    correctAnswers: [1],
    explanation: "L'hématome épidural rachidien spontané survient quasi-exclusivement sur terrain sous traitement anticoagulant (AVK, héparine) ou trouble de l'hémostase.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-20',
    courseId: 'crs-neuro-4',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans le syndrome de la queue de cheval, par rapport au syndrome du cône terminal, on observe plus fréquemment :",
    options: [
      "A. Des troubles sphinctériens isolés sans douleur.",
      "B. Des douleurs radiculaires asymétriques et intenses, à type de sciatalgie/cruralgie.",
      "C. Un signe de Babinski.",
      "D. Un niveau sensitif net en D12-L1.",
      "E. Une aréflexie ostéotendineuse précoce généralisée."
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de la queue de cheval se manifeste au premier plan par des sciatalgies ou cruralgies pluriradiculaires asymétriques intenses.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-21',
    courseId: 'crs-neuro-4',
    questionNumber: 21,
    type: 'QCM',
    content: "Quelle séquence d'IRM est la PLUS sensible pour détecter un œdème ou une souffrance médullaire (myélomalacie) ?",
    options: [
      "A. T1 sans injection.",
      "B. T1 avec injection de gadolinium.",
      "C. T2.",
      "D. STIR ou T2 avec suppression de graisse.",
      "E. Angio-IRM."
    ],
    correctAnswers: [3],
    explanation: "Les séquences T2 avec suppression du signal graisseux (STIR) permettent une détection optimale de l'hypersignal intramédullaire traduisant l'œdème ou la myélomalacie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-22',
    courseId: 'crs-neuro-4',
    questionNumber: 22,
    type: 'QCM',
    content: "Le diagnostic différentiel 'à éliminer en premier' devant un tableau de compression médullaire progressive est :",
    options: [
      "A. Une polyradiculonévrite aiguë.",
      "B. Une sclérose en plaques.",
      "C. Une cause chirurgicale compressive, nécessitant une décompression urgente.",
      "D. Une myélite virale.",
      "E. Un syndrome paranéoplasique."
    ],
    correctAnswers: [2],
    explanation: "Règle d'or de neurochirurgie : « Éliminer d'abord une cause chirurgicale ». Tout retard à la décompression expose à des séquelles paraplégiques définitives.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-23',
    courseId: 'crs-neuro-4',
    questionNumber: 23,
    type: 'QCM',
    content: "Quel est le principal objectif du traitement chirurgical d'une compression médullaire, qu'elle soit bénigne ou maligne ?",
    options: [
      "A. La guérison histologique complète.",
      "B. La stabilisation rachidienne dans tous les cas.",
      "C. La décompression radiculo-médullaire pour préserver/améliorer la fonction neurologique.",
      "D. L'exérèse cosmétique de la tumeur.",
      "E. La prévention des récidives à long terme."
    ],
    correctAnswers: [2],
    explanation: "L'objectif prioritaire absolu est la décompression mécanique de la moelle et des racines nerveuses afin de stopper l'ischémie et récupérer la motricité.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-24',
    courseId: 'crs-neuro-4',
    questionNumber: 24,
    type: 'QCM',
    content: "Un patient sous anticoagulants au long cours présente en quelques heures une tétraplégie flasque avec niveau sensitif C5. Quel diagnostic évoquer en ULTRA-URGENCE et quel examen réaliser ?",
    options: [
      "A. Métastase vertébrale cervicale ; réaliser une scintigraphie osseuse.",
      "B. Hernie discale cervicale massive ; réaliser des radiographies standards.",
      "C. Hématome épidural cervical ; réaliser une IRM médullaire en urgence (ou un scanner si IRM indisponible).",
      "D. Myélite aiguë ; réaliser une ponction lombaire.",
      "E. Sclérose en plaques ; réaliser une IRM cérébrale."
    ],
    correctAnswers: [2],
    explanation: "L'installation brutale d'un déficit sous anticoagulant évoque un hématome épidural compressif aigu, urgence neurochirurgicale immédiate confirmée par IRM médullaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-25',
    courseId: 'crs-neuro-4',
    questionNumber: 25,
    type: 'QCM',
    content: "Le 'scalloping' vertébral (érosion des plateaux vertébraux en cupule) sur les radiographies standards est un signe indirect évocateur de :",
    options: [
      "A. Une fracture tassement ostéoporotique.",
      "B. Une spondylodiscite infectieuse.",
      "C. Une tumeur intra-rachidienne à croissance lente (ex : épendymome, kyste).",
      "D. Une métastase ostéocondensante.",
      "E. Une hernie discale."
    ],
    correctAnswers: [2],
    explanation: "Le scalloping postérieur des corps vertébraux traduit l'érosion lente sous la pression chronique d'une lésion intradurale bénigne à développement très lent.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 4
  {
    id: 'q-nro-4-c1',
    courseId: 'crs-neuro-4',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Mme A., 65 ans, opérée d'un cancer du sein il y a 5 ans, consulte pour dorsalgies nocturnes depuis 3 mois et sensation de 'ceinture serrée' à l'épigastre avec paraparésie spastique débutante et Babinski bilatéral. Quelle est l'hypothèse diagnostique principale et l'examen en urgence ?",
    options: [
      "A. Lombosciatique commune ; Radiographie standard",
      "B. Métastase vertébrale dorsale avec compression médullaire débutante ; IRM totale du rachis",
      "C. Sclérose en plaques ; Ponction lombaire",
      "D. Spondylodiscite infectieuse ; Scintigraphie osseuse",
      "E. Neuropathie diabétique ; Scanner TAP"
    ],
    correctAnswers: [1],
    explanation: "Douleur vertébrale nocturne + syndrome sous-lésionnel pyramidal chez une patiente cancéreuse = métastase vertébrale avec compression médullaire. L'IRM médullaire totale est l'examen d'urgence.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-c2',
    courseId: 'crs-neuro-4',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Mr B., 28 ans, sans antécédents, consulte pour cervicalgies et douleurs en décharge électrique à l'épaule droite augmentées la nuit et en position couchée. Abolition du réflexe bicipital (C5-C6) droit, hypoesthésie du bord radial de l'avant-bras. Quel est le syndrome et la tumeur bénigne à évoquer ?",
    options: [
      "A. Syndrome sous-lésionnel ; Méningiome",
      "B. Syndrome rachidien pur ; Métastase",
      "C. Syndrome lésionnel radiculaire C6 droit ; Neurinome (schwannome)",
      "D. Syndrome du cône terminal ; Épendymome",
      "E. Syndrome de Brown-Séquard ; Kyste"
    ],
    correctAnswers: [2],
    explanation: "Il s'agit d'un syndrome radiculaire C6 typique. Chez l'adulte jeune, la tumeur bénigne intradurale extramédullaire prédominante est le neurinome (schwannome) radiculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-c3',
    courseId: 'crs-neuro-4',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Mr C., 70 ans, consulte pour paraparésie spastique d'aggravation progressive sur 6 mois, avec clonus, Babinski et niveau sensitif à D8. Antécédent de prostatite chronique. Quelle est la cause extradurale la plus probable et le bilan minimal ?",
    options: [
      "A. Neurinome dorsal ; IRM médullaire seule",
      "B. Méningiome dorsal ; Ponction lombaire",
      "C. Métastase vertébrale dorsale d'un cancer de la prostate ; IRM médullaire + dosage des PSA et scanner TAP",
      "D. Syringomyélie dorsale ; EMG",
      "E. Hernie discale calcifiée ; Bilan d'hémostase"
    ],
    correctAnswers: [2],
    explanation: "L'âge, le niveau dorsal et les antécédents prostatiques orientent vers une métastase vertébrale de cancer prostatique méconnu, justifiant le dosage des PSA et le scanner thoraco-abdomino-pelvien.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-c4',
    courseId: 'crs-neuro-4',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Mme D., 58 ans, présente des douleurs interscapulaires, une maladresse des mains, un signe de Lhermitte et une spasticité des 4 membres. L'IRM montre un rétrécissement du canal cervical par des barres ostéophytiques avec compression médullaire. Quel est le diagnostic et le traitement de première intention ?",
    options: [
      "A. Sclérose en plaques ; Corticoïdes oraux",
      "B. Myélopathie cervicarthrosique ; Décompression chirurgicale (laminectomie ou corporectomie antérieure)",
      "C. Neurinome foraminal ; Radiothérapie",
      "D. Maladie de Parkinson ; L-Dopa",
      "E. SLA ; Riluzole"
    ],
    correctAnswers: [1],
    explanation: "La myélopathie cervicarthrosique avec déficit neurologique constitué et progressif est une indication formelle de chirurgie de décompression pour stopper l'ischémie médullaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-4-c5',
    courseId: 'crs-neuro-4',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Enfant de 9 ans avec attitude vicieuse du dos et scoliose thoracique gauche douloureuse à la palpation. La radio montre un élargissement du canal et un amincissement des pédicules. Que faut-il évoquer et quel examen réaliser ?",
    options: [
      "A. Scoliose idiopathique bénigne ; Corset plâtré",
      "B. Spondylolyse ; Scanner osseux",
      "C. Tumeur intra-rachidienne (astrocytome intramédullaire) jusqu'à preuve du contraire ; IRM totale du rachis avec injection de gadolinium",
      "D. Maladie de Scheuermann ; Rééducation",
      "E. Torticolis musculaire ; Antalgiques"
    ],
    correctAnswers: [2],
    explanation: "Toute scoliose douloureuse chez l'enfant est une tumeur intrarachidienne jusqu'à preuve du contraire. L'IRM totale du rachis avec gadolinium est obligatoire.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_4_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-4-mindmap',
    courseId: 'crs-neuro-4',
    title: 'Mind Map : Compression Médullaire Lente (Urgence Médico-Chirurgicale)',
    type: 'mindmap',
    content: `
# MIND MAP : COMPRESSION MÉDULLAIRE LENTE
*Urgence médico-chirurgicale diagnostique et thérapeutique - Programme de Neurologie Algérie*

## 1. TRIADE CLINIQUE DIAGNOSTIQUE
- **Syndrome Lésionnel (Radiculaire)** : 1er signe, localisateur en hauteur. Douleur en décharge électrique ou en ceinture, déficit sensitif métamérique, aréflexie segmentaire.
- **Syndrome Sous-Lésionnel (Voies longues)** :
  - *Moteur* : Paraparésie puis tétraplégie spastique pyramidale (Babinski bilatéral, ROT vifs diffusés).
  - *Sensitif* : Niveau sensitif net (cordonal postérieur / spinothalamique).
  - *Sphinctérien* : Impériosités puis rétention urinaire (tardif sauf cône terminal).
- **Syndrome Rachidien** : Douleur vertébrale fixe, nocturne, raideur segmentaire.

## 2. ÉTIOLOGIES SELON LE SIÈGE
- **Extradurales (les plus fréquentes)** :
  - Métastases vertébro-épidurales (sein, poumon, prostate, rein).
  - Myélopathie cervicarthrosique.
  - Spondylodiscite infectieuse (Mal de Pott tuberculeux).
  - Hématome épidural spontané (anticoagulants).
- **Intradurales Extramédullaires** :
  - Méningiome (Femme > 50 ans, siège dorsal).
  - Neurinome / Schwannome (Homme jeune, racine cervicale/dorsale).
- **Intramédullaires** :
  - Épendymome, Astrocytome, Syringomyélie (syndrome suspendu dissocié).

## 3. PRONOSTIC & PRINCIPE DE GUILLOT
- **Dépend directement de la rapidité de la décompression chirurgicale**.
- *Stade de Guillot* : Stade flasque = myélomalacie irréversible.
`
  },
  {
    id: 'res-nro-4-astuces',
    courseId: 'crs-neuro-4',
    title: 'Astuces & Mnémotechniques : Compression Médullaire',
    type: 'astuce',
    content: `
# ASTUCES & MNÉMOTECHNIQUES (COMPRESSION MÉDULLAIRE)
*Par Dr. LAIDANI.MERIEM*

- **Niveaux sensitifs dorsaux : « Mon Xylophone Ose Hurler »**
  - **M**amelon = **D4**
  - **X**iphoïde = **D6**
  - **O**mbilic = **D10**
  - **H**ypogastre = **D12**

- **Syndrome de Brown-Séquard : « Pour l'Homme ConTrôlé »**
  - Déficit **P**rofondeur (sensibilité cordonale) = **H**omolatéral
  - Déficit **C**haleur / **T**act thermo-algique = **C**on**T**rolatéral
  - Le **Moteur suit la Profondeur** = **H**omolatéral

- **Méningiome vs Neurinome :**
  - **Méningiome** = **M**adame, **M**énopause, **M**ilieu du dos (Dorsal).
  - **Neurinome** = **N**uit (douleur nocturne), **N**euron jeune (homme adulte jeune), **N**erf (gaine de la racine).
`
  }
];

// ==========================================
// LESSON 5: AVC ISCHÉMIQUE
// ==========================================
export const NEURO_LESSON_5_QUESTIONS: Question[] = [
  {
    id: 'q-nro-5-01',
    courseId: 'crs-neuro-5',
    questionNumber: 1,
    type: 'QCM',
    content: "La fenêtre thérapeutique pour l’administration du rtPA par voie intraveineuse dans l’AVC ischémique aigu est :",
    options: [
      "A) < 3 heures",
      "B) < 4,5 heures",
      "C) < 6 heures",
      "D) < 8 heures",
      "E) < 12 heures"
    ],
    correctAnswers: [1],
    explanation: "Le rtPA IV (altéplase) doit être administré dans les 4,5 heures suivant le début des symptômes. Au-delà, le bénéfice clinique s'efface devant le risque majeur de transformation hémorragique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-02',
    courseId: 'crs-neuro-5',
    questionNumber: 2,
    type: 'QCM',
    content: "Le signe radiologique précoce à la TDM cérébrale sans injection dans l’AVC ischémique de l’artère sylvienne est :",
    options: [
      "A) Hypodensité du noyau lenticulaire",
      "B) Effacement des sillons corticaux",
      "C) Hyperdensité spontanée de l’artère sylvienne (signe de la corde)",
      "D) Prise de contraste méningée",
      "E) Œdème cérébral diffus"
    ],
    correctAnswers: [2],
    explanation: "L’hyperdensité spontanée de l’artère sylvienne traduit la visualisation directe du thrombus intraluminal dans le segment M1 de l'ACM dès les premières minutes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-03',
    courseId: 'crs-neuro-5',
    questionNumber: 3,
    type: 'QCM',
    content: "L’Accident Ischémique Transitoire (AIT) se caractérise par :",
    options: [
      "A) Un déficit neurologique > 24 heures",
      "B) Des anomalies visibles à l’IRM de diffusion",
      "C) Un examen neurologique normal après régression complète des symptômes en moins d'une heure et IRM de diffusion normale",
      "D) Une céphalée obligatoire",
      "E) Une indication systématique de thrombolyse"
    ],
    correctAnswers: [2],
    explanation: "L’AIT est un épisode bref de dysfonction neurologique d'origine ischémique avec régression complète des symptômes en moins d'une heure et absence d'infarctus aigu à l'IRM de diffusion. C'est un syndrome de menace majeure d'AVC constitué.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-04',
    courseId: 'crs-neuro-5',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans l’AVC ischémique aigu sans thrombolyse, le contrôle de la pression artérielle n'est recommandé que si :",
    options: [
      "A) PA systolique > 180 mmHg",
      "B) PA systolique > 220 mmHg ou diastolique > 120 mmHg",
      "C) PA systolique > 140 mmHg",
      "D) PA diastolique > 100 mmHg",
      "E) PA moyenne > 110 mmHg"
    ],
    correctAnswers: [1],
    explanation: "En l'absence de thrombolyse, on respecte l'HTA réactionnelle jusqu'à 220/120 mmHg pour maintenir la perfusion dans la zone de pénombre ischémique. Si thrombolyse, le seuil est de 185/110 mmHg.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-05',
    courseId: 'crs-neuro-5',
    questionNumber: 5,
    type: 'QCM',
    content: "L’IRM de diffusion (DWI) montre un hypersignal précoce en raison :",
    options: [
      "A) De l’œdème vasogénique",
      "B) De l’œdème cytotoxique avec piégeage intracellulaire des molécules d’eau",
      "C) De la nécrose tissulaire tardive",
      "D) De l’hyperperfusion",
      "E) De la rupture de la barrière hémato-encéphalique"
    ],
    correctAnswers: [1],
    explanation: "L’arrêt de la pompe Na+/K+ ATPase entraîne l'entrée massive d'eau dans les neurones (œdème cytotoxique), restreignant le mouvement brownien des molécules d'eau, visualisé en hypersignal immédiat en diffusion.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-06',
    courseId: 'crs-neuro-5',
    questionNumber: 6,
    type: 'QCM',
    content: "La thrombectomie mécanique est indiquée jusqu’à :",
    options: [
      "A) 4,5 heures après le début des symptômes",
      "B) 6 heures en règle générale et jusqu'à 16-24 heures en cas de mismatch clinico-radiologique ou perfusionnel",
      "C) 48 heures",
      "D) 72 heures",
      "E) Exclusivement chez le sujet de moins de 40 ans"
    ],
    correctAnswers: [1],
    explanation: "La thrombectomie par stent retriever/aspiration est validée jusqu'à 6h sur occlusion proximale (T carotide, M1), et étendue jusqu'à 16-24h selon les essais DAWN et DEFUSE 3 en cas de mismatch persistant.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-07',
    courseId: 'crs-neuro-5',
    questionNumber: 7,
    type: 'QCM',
    content: "Un patient présente une aphasie et une hémiparésie brachiofaciale droite. Le territoire vasculaire suspecté est :",
    options: [
      "A) Artère cérébrale antérieure",
      "B) Artère cérébrale postérieure",
      "C) Artère cérébelleuse supérieure",
      "D) Artère sylvienne (ACM) superficielle gauche",
      "E) Tronc basilaire"
    ],
    correctAnswers: [3],
    explanation: "L’aphasie signe l’hémisphère dominant gauche. Le déficit prédominant au membre supérieur et à la face est caractéristique du territoire superficiel de l’artère cérébrale moyenne (sylvienne) gauche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-08',
    courseId: 'crs-neuro-5',
    questionNumber: 8,
    type: 'QCM',
    content: "L’hyperglycémie en phase aiguë de l’AVC ischémique :",
    options: [
      "A) Améliore le pronostic",
      "B) Nécessite un traitement systématique par insuline si > 180 mg/dL (10 mmol/L)",
      "C) Est sans conséquence",
      "D) Contre-indique la thrombolyse",
      "E) Doit être ignorée durant les premières 48 heures"
    ],
    correctAnswers: [1],
    explanation: "L'hyperglycémie aggrave la nécrose ischémique et augmente le risque de transformation hémorragique. Une insulinothérapie est recommandée au-dessus de 1,80 g/L (10 mmol/L).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-09',
    courseId: 'crs-neuro-5',
    questionNumber: 9,
    type: 'QCM',
    content: "Le traitement antiplaquettaire précoce après un AVC ischémique sans thrombolyse repose sur :",
    options: [
      "A) Clopidogrel 300 mg",
      "B) Aspirine 160-300 mg/j débutée immédiatement",
      "C) Héparine non fractionnée en IV",
      "D) Dipyridamole",
      "E) Aucun traitement avant 48 heures"
    ],
    correctAnswers: [1],
    explanation: "L’aspirine (160 à 300 mg/j) réduit la récidive précoce et la mortalité. Si thrombolyse par rtPA, elle est différée à la 24ème heure après TDM de contrôle excluant une hémorragie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-10',
    courseId: 'crs-neuro-5',
    questionNumber: 10,
    type: 'QCM',
    content: "Une contre-indication absolue à la thrombolyse par rtPA est :",
    options: [
      "A) Diabète",
      "B) HTA contrôlée à 160/90 mmHg",
      "C) Hémorragie intracrânienne à l’imagerie",
      "D) Âge > 80 ans",
      "E) Antécédent d’AIT ancien"
    ],
    correctAnswers: [2],
    explanation: "Toute hémorragie intracrânienne visualisée au scanner ou à l'IRM contre-indique formellement la thrombolyse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-11',
    courseId: 'crs-neuro-5',
    questionNumber: 11,
    type: 'QCM',
    content: "Le syndrome de Claude Bernard-Horner associé à des cervicalgies et un AVC ischémique chez un sujet jeune évoque :",
    options: [
      "A) Une dissection de l’artère carotide interne",
      "B) Une thrombose veineuse cérébrale",
      "C) Un hématome sous-dural",
      "D) Une crise d’épilepsie",
      "E) Une migraine avec aura"
    ],
    correctAnswers: [0],
    explanation: "La dissection carotidienne comprime les fibres sympathiques péricarotidiennes, réalisant la triade : cervicalgie unilatérale + Claude Bernard-Horner homolatéral + déficit ischémique controlatéral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-12',
    courseId: 'crs-neuro-5',
    questionNumber: 12,
    type: 'QCM',
    content: "En cas de fièvre > 37,5°C après un AVC ischémique aigu :",
    options: [
      "A) Attendre 48 heures avant d’agir",
      "B) Traiter activement la fièvre par paracétamol et rechercher une infection sous-jacente",
      "C) Administrer systématiquement des corticoïdes",
      "D) Refroidir le patient par voie externe uniquement",
      "E) Ignorer si le patient est stable"
    ],
    correctAnswers: [1],
    explanation: "L’hyperthermie majore la consommation d'oxygène cérébrale et accélère la mort neuronale en zone de pénombre. Elle doit être contrôlée vigoureusement.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-13',
    courseId: 'crs-neuro-5',
    questionNumber: 13,
    type: 'QCM',
    content: "L’œdème cytotoxique dans l’AVC ischémique résulte de :",
    options: [
      "A) La rupture de la barrière hémato-encéphalique",
      "B) L’échec de la pompe Na+/K+ ATPase par déplétion énergétique en ATP",
      "C) L’hyperperméabilité capillaire",
      "D) L’hypervolémie",
      "E) L’hypernatrémie"
    ],
    correctAnswers: [1],
    explanation: "L'anoxie cellulaire supprime la production d'ATP mitochondriale, provoquant l'arrêt des pompes Na+/K+ membranaires et le gonflement œdémateux cytotoxique des cellules.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-14',
    courseId: 'crs-neuro-5',
    questionNumber: 14,
    type: 'QCM',
    content: "La prévention thromboembolique veineuse par HBPM après AVC ischémique thrombolysé doit être débutée :",
    options: [
      "A) Immédiatement lors de la perfusion de rtPA",
      "B) Après un délai de 24 heures et après vérification de l'absence de saignement sur la TDM de contrôle",
      "C) Après 7 jours",
      "D) Jamais",
      "E) Uniquement sous forme d'aspirine"
    ],
    correctAnswers: [1],
    explanation: "Pour prévenir la transformation hémorragique, aucune héparine ni antiagrégant ne doit être administré dans les 24 heures suivant la thrombolyse par rtPA.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-15',
    courseId: 'crs-neuro-5',
    questionNumber: 15,
    type: 'QCM',
    content: "Le 'mismatch' de perfusion-diffusion (PWI - DWI) à l'IRM cérébrale correspond à :",
    options: [
      "A) La différence entre l'hypodensité scanner et l'IRM",
      "B) La différence entre le volume du territoire hypoperfusé (PWI) et le volume du cœur nécrosé (DWI), identifiant la zone de pénombre",
      "C) La discordance clinico-radiologique",
      "D) L'hyperdensité artérielle spontanée",
      "E) La transformation hémorragique"
    ],
    correctAnswers: [1],
    explanation: "Le mismatch PWI-DWI mesure le tissu hypoperfusé mais pas encore nécrosé (la pénombre ischémique), cible thérapeutique majeure de la reperfusion en urgence.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-16',
    courseId: 'crs-neuro-5',
    questionNumber: 16,
    type: 'QCM',
    content: "L’hypertension intracrânienne dans l’AVC ischémique malin étendu est gérée en première intention par :",
    options: [
      "A) Corticoïdes à haute dose",
      "B) Surélévation de la tête à 30°, osmothérapie prudente et discussion d'une craniectomie décompressive",
      "C) Osmothérapie systématique en perfusion continue sans surveillance",
      "D) Hyperventilation non contrôlée prolongée",
      "E) Sédation profonde systématique chez tout patient"
    ],
    correctAnswers: [1],
    explanation: "La tête est positionnée à 30° pour faciliter le retour veineux jugulaire. En cas d'infarctus malin chez le sujet jeune (< 60 ans), la craniectomie décompressive précoce réduit la mortalité de 50%. Les corticoïdes sont inefficaces et contre-indiqués.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-17',
    courseId: 'crs-neuro-5',
    questionNumber: 17,
    type: 'QCM',
    content: "L’artère cérébrale postérieure (ACP) occluse se manifeste classiquement par :",
    options: [
      "A) Une aphasie motrice de Broca",
      "B) Une hémiparésie crurale pure",
      "C) Une hémianopsie latérale homonyme (HLH) controlatérale avec épargne maculaire",
      "D) Une diplopie et des vertiges rotatoires",
      "E) Un syndrome frontal"
    ],
    correctAnswers: [2],
    explanation: "L’ACP vascularise le lobe occipital (cortex visuel primaire strié). Son occlusion provoque une HLH controlatérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-18',
    courseId: 'crs-neuro-5',
    questionNumber: 18,
    type: 'QCM',
    content: "Le principal facteur de risque modifiable d'AVC ischémique dans la population générale est :",
    options: [
      "A. L’âge",
      "B. Les antécédents familiaux",
      "C. L’hypertension artérielle (HTA)",
      "D. Le sexe masculin",
      "E. Le tabagisme passif seul"
    ],
    correctAnswers: [2],
    explanation: "L'HTA est le facteur de risque modifiable le plus puissant pour les AVC ischémiques et hémorragiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-19',
    courseId: 'crs-neuro-5',
    questionNumber: 19,
    type: 'QCM',
    content: "Après un AIT récent, la conduite à tenir urgente comprend :",
    options: [
      "A. Sortie avec consultation différée à 1 mois",
      "B. Hospitalisation en Unité Neurovasculaire (UNV), bilan étiologique urgent (ECG, Holter, écho des troncs supra-aortiques) et mise sous aspirine",
      "C. Thrombolyse systématique",
      "D. Chimiothérapie préventive",
      "E. Simple repos au lit à domicile"
    ],
    correctAnswers: [1],
    explanation: "L'AIT est une extrême urgence en raison d'un risque élevé d'AVC constitué dans les 48 heures suivant l'épisode (score ABCD2).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-20',
    courseId: 'crs-neuro-5',
    questionNumber: 20,
    type: 'QCM',
    content: "La transformation hémorragique post-thrombolyse est particulièrement favorisée par :",
    options: [
      "A. L’administration très précoce dans la première heure",
      "B. L’hypoglycémie",
      "C. Une hyperglycémie préexistante, une HTA non contrôlée et une lésion ischémique volumineuse initiale",
      "D. L’âge jeune",
      "E. L’absence de traitement antiplaquettaire"
    ],
    correctAnswers: [2],
    explanation: "L’hyperglycémie, les chiffres tensionnels élevés (> 185/110) et un score NIHSS élevé avec lésion étendue augmentent considérablement la fragilité capillaire et le risque de resaignement.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-21',
    courseId: 'crs-neuro-5',
    questionNumber: 21,
    type: 'QCM',
    content: "L'occlusion dans le territoire vertébro-basilaire (tronc basilaire) peut se manifester par :",
    options: [
      "A. Une aphasie de Wernicke",
      "B. Un déficit sensitivomoteur controlatéral isolé",
      "C. Des troubles de la vigilance, diplopie, vertiges, dysarthrie, tétraplégie ('locked-in syndrome')",
      "D. Une anosmie unilatérale",
      "E. Une apraxie d'habillage"
    ],
    correctAnswers: [2],
    explanation: "L'ischémie du tronc basilaire est gravissime, associant atteinte des nerfs crâniens, syndrome cérébelleux, tétraplégie et coma, voire syndrome d'enfermement ('locked-in syndrome').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-22',
    courseId: 'crs-neuro-5',
    questionNumber: 22,
    type: 'QCM',
    content: "En cas d’AVC ischémique chez un patient anticoagulé au long cours par AVK avec un INR à 2,2, la thrombolyse par rtPA :",
    options: [
      "A. Est recommandée à pleine dose",
      "B. Est formellement contre-indiquée (seuil limite INR ≤ 1,7)",
      "C. Est possible avec réduction de dose de 50%",
      "D. Nécessite une injection de vitamine K pour thrombolyser 30 minutes après",
      "E. Est autorisée si l'INR est inférieur à 3"
    ],
    correctAnswers: [1],
    explanation: "Un INR > 1,7 est une contre-indication absolue à la thrombolyse intraveineuse par rtPA. En revanche, la thrombectomie mécanique reste envisageable.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-23',
    courseId: 'crs-neuro-5',
    questionNumber: 23,
    type: 'QCM',
    content: "Le pronostic fonctionnel après AVC ischémique dépend principalement de :",
    options: [
      "A. Du sexe du patient",
      "B. De la rapidité de la reperfusion ('Time is brain')",
      "C. De la prise de corticoïdes",
      "D. Du taux de cholestérol HDL",
      "E. Du traitement homéopathique"
    ],
    correctAnswers: [1],
    explanation: "Chaque minute compte ('Time is brain') : 1,9 million de neurones meurent chaque minute d'occlusion artérielle cérébrale non reperfusée.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-24',
    courseId: 'crs-neuro-5',
    questionNumber: 24,
    type: 'QCM',
    content: "Parmi les signes scannographiques très précoces d'un AVC ischémique de l'artère cérébrale moyenne, on retient :",
    options: [
      "A. L'effacement du ruban insulaire et l'atténuation du noyau lenticulaire",
      "B. L'hyperdensité du noyau caudé",
      "C. Une hémorragie sous-arachnoïdienne",
      "D. Une atrophie corticale",
      "E. Des calcifications des plexus choroïdes"
    ],
    correctAnswers: [0],
    explanation: "La perte de différenciation substance blanche/substance grise au niveau du ruban insulaire et l'effacement du noyau lenticulaire sont des signes précoces d'œdème cytotoxique ischémique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-25',
    courseId: 'crs-neuro-5',
    questionNumber: 25,
    type: 'QCM',
    content: "Quelle est la posologie recommandée de l'altéplase (rtPA) par voie IV dans l'AVC ischémique aigu ?",
    options: [
      "A. 0,1 mg/kg",
      "B. 0,9 mg/kg (maximum 90 mg), avec 10% en bolus sur 1 min et 90% sur 60 min",
      "C. 2 mg/kg en perfusion rapide de 5 minutes",
      "D. 100 mg fixe pour tous les patients",
      "E. 15 mg/kg en continu sur 24h"
    ],
    correctAnswers: [1],
    explanation: "La posologie standardisée est de 0,9 mg/kg sans dépasser 90 mg au total : 10% de la dose en bolus intraveineux direct sur 1 minute, puis le reste sur 1 heure au pousse-seringue électrique.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 5
  {
    id: 'q-nro-5-c1',
    courseId: 'crs-neuro-5',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Un homme de 58 ans, hypertendu et diabétique, consulte aux urgences pour faiblesse brutale de l'hémicorps gauche apparue il y a 2 heures. NIHSS = 12. TDM cérébrale sans injection : hyperdensité de l'artère sylvienne droite, effacement discret du noyau lenticulaire. Quelle est la prise en charge thérapeutique prioritaire ?",
    options: [
      "A) Aspirine 300 mg puis transfert en neurologie",
      "B) rtPA IV si aucune contre-indication (dans la fenêtre des 4,5h) +/- thrombectomie mécanique",
      "C) Héparine IV en bolus",
      "D) Thrombectomie mécanique seule sans thrombolyse",
      "E) Contrôle strict de la glycémie et surveillance simple"
    ],
    correctAnswers: [1],
    explanation: "Le patient est dans la fenêtre des 4,5 heures sans contre-indication hémorragique au scanner. La thrombolyse IV par rtPA est indiquée d'emblée, associée si possible à une thrombectomie mécanique en présence du signe de l'artère sylvienne dense.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-c2',
    courseId: 'crs-neuro-5',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Une femme de 70 ans présente depuis 1 heure une aphasie et une hémiparésie facio-brachio-crurale droite. L'IRM de diffusion montre un hypersignal cortical temporal gauche. Quel est le territoire vasculaire concerné ?",
    options: [
      "A) Artère cérébrale antérieure",
      "B) Artère cérébrale moyenne (sylvienne) superficielle gauche",
      "C) Artère cérébrale postérieure",
      "D) Artère cérébelleuse",
      "E) Tronc basilaire"
    ],
    correctAnswers: [1],
    explanation: "L’aphasie et le déficit brachio-facial droit localisent l'ischémie dans le territoire de l’artère cérébrale moyenne superficielle de l’hémisphère dominant gauche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-c3',
    courseId: 'crs-neuro-5',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Un homme de 45 ans, fumeur, consulte pour une hémiparésie gauche régressive spontanément et complètement en 40 minutes. Examen neurologique et IRM de diffusion normaux. Quel diagnostic évoquez-vous ?",
    options: [
      "A) AVC constitué",
      "B) Accident Ischémique Transitoire (AIT)",
      "C) Hématome intracérébral",
      "D) Migraine avec aura",
      "E) Conversion hystérique"
    ],
    correctAnswers: [1],
    explanation: "Déficit focal régressif en moins d'une heure sans anomalie en IRM de diffusion = AIT. Il s'agit d'une urgence nécessitant une hospitalisation en UNV pour bilan étiologique rapide.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-c4',
    courseId: 'crs-neuro-5',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Patiente de 80 ans, traitée par rtPA pour AVC ischémique de l'ACM gauche étendu il y a 6 heures. Détérioration neurologique brutale avec coma. La TDM montre un hématome intraparenchymateux avec effet de masse. Quelle complication redoutez-vous ?",
    options: [
      "A) Œdème cytotoxique",
      "B) Transformation hémorragique sous thrombolyse",
      "C) Réocclusion artérielle",
      "D) État de mal épileptique",
      "E) Méningite"
    ],
    correctAnswers: [1],
    explanation: "L'aggravation secondaire brutale sous rtPA traduit une transformation hémorragique symptomatique précoce avec hématome intraparenchymateux et effet de masse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-5-c5',
    courseId: 'crs-neuro-5',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Un patient de 50 ans, sans antécédent, présente un syndrome de Claude Bernard-Horner gauche, des cervicalgies gauches et une hémiparésie droite. L'angio-IRM confirme une dissection de la carotide interne gauche. Quel mécanisme physiopathologique sous-tend cette lésion ?",
    options: [
      "A) Cardioembolique",
      "B) Athérosclérotique",
      "C) Dissection artérielle (hématome de paroi)",
      "D) Vascularite",
      "E) Thrombophilie"
    ],
    correctAnswers: [2],
    explanation: "La dissection artérielle correspond à un clivage de la paroi artérielle par un hématome intramural comprimant la lumière et les fibres sympathiques adjacentes.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_5_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-5-mindmap',
    courseId: 'crs-neuro-5',
    title: 'Carte Mentale : AVC Ischémique - Fil Rouge Diagnostique & Thérapeutique',
    type: 'mindmap',
    content: `
# CARTE MENTALE : AVC ISCHÉMIQUE (AIC)
*D'après le cours du Pr Kesraoui - Faculté de Médecine d'Algérie*

## 1. DÉFINITIONS & URGENCE
- **AIC** : Déficit neurologique focal brutal par occlusion artérielle cérébrale.
- **AIT** : Déficit < 1h, imagerie normale -> Urgence diagnostique et thérapeutique (syndrome de menace).
- **Principe absolu** : « Time is brain » (Chaque minute compte).

## 2. ANATOMIE VASCULAIRE & TERRITOIRES
- **ACM (Sylvienne)** :
  - *Dominant (Gauche)* : Aphasie + hémiplégie à prédominance brachio-faciale.
  - *Non dominant (Droit)* : Héminégligence gauche + hémiplégie.
- **ACA (Cérébrale Antérieure)** : Hémiparésie crurale prédominante + syndrome frontal.
- **ACP (Cérébrale Postérieure)** : Hémianopsie latérale homonyme (HLH) avec épargne maculaire.
- **Tronc Basilaire** : Diplopie, dysarthrie, vertiges, troubles de conscience, déficit bilatéral.

## 3. STRATÉGIE DE REPERFUSION AIGUË
- **Thrombolyse IV (rtPA)** :
  - Délai < 4h30.
  - Dose : 0,9 mg/kg (max 90 mg).
  - Contre-indications : Hémorragie au scanner, INR > 1,7, HTA > 185/110 non contrôlée, chirurgie récente.
- **Thrombectomie mécanique** :
  - Occlusion proximale (carotide, M1).
  - Fenêtre < 6h (étendue à 24h si mismatch de perfusion).
`
  },
  {
    id: 'res-nro-5-astuces',
    courseId: 'crs-neuro-5',
    title: 'Astuces & Mnémotechniques : AVC Ischémique',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (AVC ISCHÉMIQUE)
*Par Dr. LAIDANI.MERIEM*

- **Fenêtre Reperfusion :**
  - **4,5 heures** pour la thrombolyse IV.
  - **6 à 24 heures** pour la thrombectomie mécanique si mismatch.

- **Seuils Tensionnels d'Urgence :**
  - Sans thrombolyse : Traiter seulement si **> 220/120 mmHg**.
  - Si thrombolyse : Maintenir impérativement **< 185/110 mmHg**.

- **Signes TDM Précoces :**
  - Hyperdensité spontanée de l'artère sylvienne (thrombus).
  - Effacement du ruban insulaire et du noyau lenticulaire.

- **Territoires en un mot :**
  - **ACM** : Aphasie (dominant) ou Négligence (mineur).
  - **ACP** : HLH (vision).
  - **Vertébro-basilaire** : Les 3 « D » -> Diplopie, Dysarthrie, Dizziness (vertiges).
`
  }
];

// ==========================================
// LESSON 6: MALADIE DE PARKINSON
// ==========================================
export const NEURO_LESSON_6_QUESTIONS: Question[] = [
  {
    id: 'q-nro-6-01',
    courseId: 'crs-neuro-6',
    questionNumber: 1,
    type: 'QCM',
    content: "La prévalence de la maladie de Parkinson au-delà de 65 ans est d'environ :",
    options: [
      "A. 0.1%",
      "B. 0.5%",
      "C. 1-2%",
      "D. 5%",
      "E. 10%"
    ],
    correctAnswers: [2],
    explanation: "La prévalence de la maladie de Parkinson augmente nettement avec l'âge pour atteindre 1,5 à 2% chez les plus de 65 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-02',
    courseId: 'crs-neuro-6',
    questionNumber: 2,
    type: 'QCM',
    content: "Le gène LRRK2 (PARK8), particulièrement fréquent au Maghreb (mutation G2019S), est responsable d'une forme de transmission :",
    options: [
      "A. Autosomique récessive",
      "B. Autosomique dominante",
      "C. Récessive liée à l'X",
      "D. Mitochondriale",
      "E. Multifactorielle"
    ],
    correctAnswers: [1],
    explanation: "La mutation G2019S du gène LRRK2 est de transmission autosomique dominante à pénétrance incomplète. Elle est très prévalente en Afrique du Nord et au Maghreb (jusqu'à 30-40% des formes familiales et 10-30% des formes sporadiques).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-03',
    courseId: 'crs-neuro-6',
    questionNumber: 3,
    type: 'QCM',
    content: "La perte neuronale dopaminergique dans la substantia nigra pars compacta nécessaire pour que les symptômes moteurs cardinaux apparaissent est estimée à :",
    options: [
      "A. 10-20%",
      "B. 30-40%",
      "C. 50-70%",
      "D. 80-90%",
      "E. >90%"
    ],
    correctAnswers: [2],
    explanation: "Les signes moteurs n'apparaissent qu'après la disparition de 50 à 70% des neurones de la substance noire et une déplétion de 80% de la dopamine striatale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-04',
    courseId: 'crs-neuro-6',
    questionNumber: 4,
    type: 'QCM',
    content: "L'inclusion intracellulaire pathognomonique de la maladie de Parkinson est :",
    options: [
      "A. La plaque sénile",
      "B. La dégénérescence neurofibrillaire",
      "C. Le corps de Lewy (agrégats d'alpha-synucléine)",
      "D. La sphéroïde axonale",
      "E. L'inclusion de Pick"
    ],
    correctAnswers: [2],
    explanation: "Les corps de Lewy sont des inclusions cytoplasmiques éosinophiles contenant principalement des agrégats insolubles d'alpha-synucléine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-05',
    courseId: 'crs-neuro-6',
    questionNumber: 5,
    type: 'QCM',
    content: "Le tremblement parkinsonien typique est décrit comme :",
    options: [
      "A. Un tremblement d'action et d'intention",
      "B. Un tremblement de repos, lent (4-6 Hz), distal, asymétrique, diminuant lors du mouvement volontaire",
      "C. Un tremblement postural, rapide et proximal",
      "D. Un tremblement psychogène, variable",
      "E. Un tremblement rubral, complexe"
    ],
    correctAnswers: [1],
    explanation: "Le tremblement parkinsonien classique est un tremblement de repos (4 à 6 Hz), touchant les extrémités ('émiettement / roulement de pilules'), asymétrique et s'atténuant lors du mouvement volontaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-06',
    courseId: 'crs-neuro-6',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans la physiopathologie des ganglions de la base, la dopamine issue de la substance noire pars compacta a principalement un effet :",
    options: [
      "A. Inhibiteur sur la voie directe et excitateur sur la voie indirecte",
      "B. Excitateur sur la voie directe (D1) et inhibiteur sur la voie indirecte (D2)",
      "C. Excitateur sur les deux voies",
      "D. Inhibiteur sur les deux voies",
      "E. Uniquement modulateur sur le thalamus"
    ],
    correctAnswers: [1],
    explanation: "La dopamine facilite le mouvement par activation de la voie directe striato-pallidale interne (récepteurs D1 stimulants) et inhibition de la voie indirecte (récepteurs D2 inhibiteurs).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-07',
    courseId: 'crs-neuro-6',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel signe non moteur peut précéder l'apparition des signes moteurs de la maladie de Parkinson de plusieurs années ?",
    options: [
      "A. L'hémiparésie",
      "B. La perte précoce de l'odorat (hyposmie / anosmie)",
      "C. L'hyperréflexie ostéotendineuse",
      "D. Le signe de Babinski",
      "E. La céphalée matinale"
    ],
    correctAnswers: [1],
    explanation: "L'hyposmie/anosmie, les troubles du comportement en sommeil paradoxal (TCSP), la constipation chronique et la dépression peuvent précéder les signes moteurs de 5 à 10 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-08',
    courseId: 'crs-neuro-6',
    questionNumber: 8,
    type: 'QCM',
    content: "Le traitement médicamenteux de première intention chez un patient parkinsonien de 75 ans avec handicap fonctionnel modéré est :",
    options: [
      "A. Un agoniste dopaminergique en monothérapie",
      "B. Un anticholinergique",
      "C. La L-Dopa (associée à un inhibiteur de la DDC)",
      "D. L'Amantadine",
      "E. La stimulation cérébrale profonde"
    ],
    correctAnswers: [2],
    explanation: "Chez le sujet âgé (> 65-70 ans), la L-Dopa d'emblée est recommandée car elle offre la meilleure efficacité motrice et présente un risque moindre de confusion ou d'hallucinations par rapport aux agonistes dopaminergiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-09',
    courseId: 'crs-neuro-6',
    questionNumber: 9,
    type: 'QCM',
    content: "La 'période de lune de miel' sous traitement dopaminergique correspond à :",
    options: [
      "A. L'apparition des premières dyskinésies",
      "B. Une période initiale (2 à 6 ans) d'efficacité stable et optimale du traitement",
      "C. La phase de résistance complète au traitement",
      "D. L'apparition des fluctuations motrices",
      "E. La période post-chirurgicale"
    ],
    correctAnswers: [1],
    explanation: "Pendant les 2 à 6 premières années, la réponse à la L-Dopa est remarquablement stable et régulière, les neurones striataux restants stockant et régulant encore la dopamine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-10',
    courseId: 'crs-neuro-6',
    questionNumber: 10,
    type: 'QCM',
    content: "Une hypertonie extrapyramidale 'en roue dentée' est due à :",
    options: [
      "A. Une spasticité pyramidale pure",
      "B. La superposition d'un tremblement de repos sur une rigidité plastique continue",
      "C. Une dystonie focale",
      "D. Une paratonie",
      "E. Un phénomène de gegenhalten"
    ],
    correctAnswers: [1],
    explanation: "La rigidité parkinsonienne est plastique ('tuyau de plomb'). Le signe de la roue dentée (phénomène de Negro) résulte de la superposition du tremblement infraclinique sur cette rigidité continue.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-11',
    courseId: 'crs-neuro-6',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans les formes familiales autosomiques dominantes de MP, quel gène a été historiquement le premier identifié ?",
    options: [
      "A. Parkin (PARK2)",
      "B. PINK1 (PARK6)",
      "C. LRRK2 (PARK8)",
      "D. SNCA (PARK1 - gène codant l'alpha-synucléine)",
      "E. DJ-1 (PARK7)"
    ],
    correctAnswers: [3],
    explanation: "La mutation du gène SNCA (PARK1) codant pour l'alpha-synucléine a été le premier lien génétique découvert dans les formes familiales autosomiques dominantes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-12',
    courseId: 'crs-neuro-6',
    questionNumber: 12,
    type: 'QCM',
    content: "Le test diagnostique pharmacologique le plus spécifique pour conforter une maladie de Parkinson idiopathique est :",
    options: [
      "A. L'IRM cérébrale normale",
      "B. La réponse motrice positive et significative (> 70% d'amélioration) à un test aigu à la L-Dopa",
      "C. La présence d'un anneau de Kayser-Fleischer",
      "D. Une atrophie ponto-cérébelleuse à l'IRM",
      "E. Un taux bas de céruléoplasmine"
    ],
    correctAnswers: [1],
    explanation: "Une amélioration motrice spectaculaire sous L-Dopa (test aigu à la L-Dopa) est un critère diagnostique majeur en faveur de la maladie de Parkinson idiopathique et élimine les syndromes parkinsoniens atypiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-13',
    courseId: 'crs-neuro-6',
    questionNumber: 13,
    type: 'QCM',
    content: "L'amantadine (Mantadix) possède principalement une activité :",
    options: [
      "A. Dopaminergique pure",
      "B. Anticholinergique pure",
      "C. Antiglutamatergique (antagoniste NMDA) et faiblement dopaminergique, utile sur les dyskinésies",
      "D. IMAO-B",
      "E. ICOMT"
    ],
    correctAnswers: [2],
    explanation: "L'amantadine est un antagoniste des récepteurs NMDA du glutamate, particulièrement employée pour réduire l'intensité des dyskinésies de pic de dose induites par la L-Dopa.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-14',
    courseId: 'crs-neuro-6',
    questionNumber: 14,
    type: 'QCM',
    content: "La paralysie supranucléaire progressive (PSP ou maladie de Steele-Richardson-Olszewski) se distingue de la MP par :",
    options: [
      "A. Une excellente réponse à la L-Dopa",
      "B. Une paralysie précoce du regard vertical (surtout vers le bas) et des chutes précoces en arrière",
      "C. Un tremblement de repos majeur et isolé",
      "D. Une prédominance de signes cérébelleux",
      "E. Une dysautonomie précoce et sévère isolée"
    ],
    correctAnswers: [1],
    explanation: "La PSP se caractérise par une ophtalmoplégie supranucléaire verticale précoce (regard vers le bas bloqué), une instabilité posturale axiale avec chutes précoces dès la 1ère année et une absence de réponse à la L-Dopa.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-15',
    courseId: 'crs-neuro-6',
    questionNumber: 15,
    type: 'QCM',
    content: "L’indication ABSOLUE de la stimulation cérébrale profonde (SCP) du noyau sous-thalamique (STN) repose sur :",
    options: [
      "A. Un âge supérieur à 80 ans",
      "B. Une maladie de moins de 1 an",
      "C. Une réponse négative au test à la L-Dopa",
      "D. La présence d'un handicap fonctionnel majeur lié aux fluctuations motrices et dyskinésies invalidantes malgré un traitement médical optimisé",
      "E. Une démence sévère associée"
    ],
    correctAnswers: [3],
    explanation: "La chirurgie par SCP du NST s'adresse aux patients de moins de 70-75 ans, sans troubles cognitifs majeurs, très répondeurs à la L-Dopa, mais invalidés par des fluctuations 'on-off' et des dyskinésies rebelles.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-16',
    courseId: 'crs-neuro-6',
    questionNumber: 16,
    type: 'QCM',
    content: "La micrographie dans la maladie de Parkinson est une conséquence directe de :",
    options: [
      "A. L'hypertonie spastique",
      "B. Le tremblement d'action",
      "C. L'akinésie et la bradykinésie (difficulté à maintenir l'amplitude du mouvement répété)",
      "D. Les troubles sensitifs",
      "E. L'apraxie"
    ],
    correctAnswers: [2],
    explanation: "La micrographie (écriture rapetissant au fur et à mesure de la ligne) est une manifestation directe de la bradykinésie avec réduction progressive de l'amplitude motrice.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-17',
    courseId: 'crs-neuro-6',
    questionNumber: 17,
    type: 'QCM',
    content: "Quel facteur environnemental a été paradoxalement identifié dans les études épidémiologiques comme inversement associé au risque de MP (effet protecteur apparent) ?",
    options: [
      "A. L'exposition aux pesticides",
      "B. Le tabagisme",
      "C. Les traumatismes crâniens répétés",
      "D. L'exposition au manganèse",
      "E. La consommation de métaux lourds"
    ],
    correctAnswers: [1],
    explanation: "De nombreuses études épidémiologiques montrent une association inverse robuste et constante entre le tabagisme (et la consommation de café) et la maladie de Parkinson.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-18',
    courseId: 'crs-neuro-6',
    questionNumber: 18,
    type: 'QCM',
    content: "Un syndrome parkinsonien résistant à la L-Dopa, avec dysautonomie sévère précoce (hypotension orthostatique majeure, incontinence) et syndrome cérébelleux, évoque :",
    options: [
      "A. La maladie de Wilson",
      "B. L'atrophie multisystématisée (AMS)",
      "C. La dégénérescence cortico-basale",
      "D. La maladie à corps de Lewy",
      "E. La paralysie supranucléaire progressive"
    ],
    correctAnswers: [1],
    explanation: "L'AMS (type AMS-P ou AMS-C) associe un syndrome parkinsonien rigido-akinétique peu répondeur, une dysautonomie précoce et marquée et des signes cérébelleux ou pyramidaux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-19',
    courseId: 'crs-neuro-6',
    questionNumber: 19,
    type: 'QCM',
    content: "Quel effet indésirable grave spécifique des agonistes dopaminergiques doit être recherché et signalé impérativement pour la conduite automobile ?",
    options: [
      "A. La leucopénie",
      "B. Les accès de somnolence diurne brutale et les endormissements soudains ('sleep attacks')",
      "C. L'insuffisance rénale aiguë",
      "D. L'hépatite toxique",
      "E. L'hypertension artérielle maligne"
    ],
    correctAnswers: [1],
    explanation: "Les agonistes dopaminergiques (pramipexole, ropinirole, rotigotine) peuvent provoquer des endormissements brutaux et irrépressibles au volant sans signe précurseur ('attaques de sommeil').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-20',
    courseId: 'crs-neuro-6',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans la maladie de Parkinson, la rigidité plastique prédomine sur les muscles :",
    options: [
      "A. Extenseurs",
      "B. Fléchisseurs (entraînant la posture caractéristique en antéflexion dite du 'point d'interrogation')",
      "C. Rotateurs externes",
      "D. Abducteurs",
      "E. Élévateurs"
    ],
    correctAnswers: [1],
    explanation: "La rigidité prédomine sur les fléchisseurs, expliquant la posture voûtée en avant (camptocormie), coudes et genoux semi-fléchis.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-21',
    courseId: 'crs-neuro-6',
    questionNumber: 21,
    type: 'QCM',
    content: "Le co-traitement systématique de la L-Dopa par un inhibiteur de la dopa-décarboxylase périphérique (Carbidopa ou Bensérazide) a pour but principal :",
    options: [
      "A. D'augmenter la demi-vie de la dopamine centrale",
      "B. De bloquer la transformation périphérique de la L-Dopa en dopamine, réduisant les nausées/vomissements et augmentant sa pénétration cérébrale",
      "C. De prévenir l'apparition des dyskinésies",
      "D. De traiter les hallucinations",
      "E. De potentialiser l'effet des anticholinergiques"
    ],
    correctAnswers: [1],
    explanation: "Les inhibiteurs de la DDC ne passent pas la barrière hémato-encéphalique. Ils évitent la conversion prématurée en dopamine dans le tube digestif et le plasma (responsable de nausées et d'hypotension) et multiplient par 10 la fraction de L-Dopa atteignant le cerveau.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-22',
    courseId: 'crs-neuro-6',
    questionNumber: 22,
    type: 'QCM',
    content: "Le phénomène du 'freezing' (enrayage cinétique ou blocage de la marche) est typiquement déclenché par :",
    options: [
      "A. La marche rapide en terrain découvert",
      "B. Le franchissement d'un passage étroit (porte), le demi-tour ou l'initiation de la marche",
      "C. La station assise prolongée",
      "D. Le sommeil",
      "E. La prise de L-Dopa"
    ],
    correctAnswers: [1],
    explanation: "Le freezing est une incapacité soudaine et transitoire à avancer les pieds, collés au sol, souvent déclenché par des obstacles visuels (encadrement de porte, foule) ou un changement de direction.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-23',
    courseId: 'crs-neuro-6',
    questionNumber: 23,
    type: 'QCM',
    content: "La présence d'un anneau de Kayser-Fleischer péricornéen chez un sujet jeune présentant un syndrome parkinsonien signe :",
    options: [
      "A. La maladie de Parkinson idiopathique",
      "B. La maladie de Wilson (dégénérescence hépatolenticulaire par surcharge en cuivre)",
      "C. La sclérose en plaques",
      "D. La paralysie supranucléaire progressive",
      "E. L'atrophie multisystématisée"
    ],
    correctAnswers: [1],
    explanation: "L'anneau de Kayser-Fleischer (dépôt de cuivre dans la membrane de Descemet à la lampe à fente) est pathognomonique de la maladie de Wilson. Tout parkinsonisme avant 40 ans impose ce dosage.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-24',
    courseId: 'crs-neuro-6',
    questionNumber: 24,
    type: 'QCM',
    content: "La prise en charge non médicamenteuse fondamentale de la maladie de Parkinson repose sur :",
    options: [
      "A. La radiothérapie",
      "B. L'oxygénothérapie hyperbare",
      "C. La rééducation fonctionnelle active (kinésithérapie motrice, étirements, travail de l'équilibre)",
      "D. La psychanalyse",
      "E. L'hydrothérapie exclusive"
    ],
    correctAnswers: [2],
    explanation: "La kinésithérapie motrice active, débutée tôt et maintenue au long cours, est indispensable pour lutter contre les rétractions en flexion et préserver l'autonomie de marche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-25',
    courseId: 'crs-neuro-6',
    questionNumber: 25,
    type: 'QCM',
    content: "Le principal objectif du traitement médical actuel de la maladie de Parkinson est :",
    options: [
      "A. La guérison définitive",
      "B. L'arrêt prouvé de la mort neuronale",
      "C. Le contrôle symptomatique optimal pour préserver l'autonomie et la qualité de vie",
      "D. La prévention génétique",
      "E. L'éradication des corps de Lewy"
    ],
    correctAnswers: [2],
    explanation: "Les traitements actuels sont purement symptomatiques (substitutifs dopaminergiques) et ne freinent pas l'évolution dégénérative sous-jacente.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 6
  {
    id: 'q-nro-6-c1',
    courseId: 'crs-neuro-6',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : M. Ahmed, 62 ans, agriculteur, consulte pour une lenteur progressive des gestes quotidiens et une raideur du bras droit depuis 8 mois. Sa femme note une amimie. Pas de tremblement. Fumeur. Quel diagnostic et quel facteur de risque environnemental évoquez-vous ?",
    options: [
      "A) Dépression ; Tabac",
      "B) Arthrose cervicale ; Âge",
      "C) Maladie de Parkinson (forme akinéto-rigide) ; Âge et exposition professionnelle aux pesticides",
      "D) Hématome sous-dural ; Alcool",
      "E) Sclérose latérale amyotrophique ; Sédentarité"
    ],
    correctAnswers: [2],
    explanation: "Le tableau associant akinésie, hyponimie et rigidité plastique asymétrique sans tremblement définit la forme akinéto-rigide de la maladie de Parkinson. L'exposition aux pesticides chez les agriculteurs est un facteur de risque reconnu.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-c2',
    courseId: 'crs-neuro-6',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Mme Fatima, 58 ans, présente un tremblement lent de la main gauche au repos disparaissant lors de la préhension, avec rigidité en tuyau de plomb et réduction du ballant du bras gauche à la marche. Quel est le prochain geste le plus utile pour confirmer le diagnostic ?",
    options: [
      "A) Prescrire un agoniste dopaminergique et revoir dans 6 mois",
      "B) Demander une IRM cérébrale en urgence",
      "C) Réaliser un test diagnostique aigu à la L-Dopa (positif si amélioration > 70%)",
      "D) Doser la céruléoplasmine sérique",
      "E) Faire un électromyogramme"
    ],
    correctAnswers: [2],
    explanation: "Le test à la L-Dopa est l'examen diagnostique clé confirmant le caractère dopa-sensible du syndrome parkinsonien idiopathique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-c3',
    courseId: 'crs-neuro-6',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : M. Kamel, 70 ans, parkinsonien traité depuis 6 ans par L-Dopa, consulte pour des mouvements anormaux involontaires 'incontrôlables' choréiformes du tronc et des membres survenant 1h après chaque prise. Quelle est la nature de ces mouvements et la stratégie d'adaptation ?",
    options: [
      "A) Myoclonies ; Arrêter brutalement la L-Dopa",
      "B) Dyskinésies de pic de dose ; Fractionner les doses de L-Dopa (doses plus faibles plus rapprochées) +/- amantadine",
      "C) Dystonies off ; Augmenter la dose unitaire",
      "D) Crises d'épilepsie ; Neuroleptique typique",
      "E) Confusion ; Neurochirurgie d'emblée"
    ],
    correctAnswers: [1],
    explanation: "Les dyskinésies de pic de dose résultent d'une stimulation dopaminergique pulsatile excessive. La prise en charge consiste à aplanir les pics plasmatiques par fractionnement des doses.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-c4',
    courseId: 'crs-neuro-6',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : M. Samir, 45 ans, présente une akinésie et une rigidité sévères, symétriques, d'évolution rapide sur 2 ans avec vertiges au lever, malaises et troubles urinaires. La L-Dopa a été inefficace. Quel diagnostic évoquez-vous et quel test pratique ?",
    options: [
      "A) Forme juvénile de Parkinson ; IRM",
      "B) Atrophie multisystématisée (AMS) ; Mesure de la PA couchée et debout (recherche d'hypotension orthostatique / Tilt-test)",
      "C) Paralysie supranucléaire progressive ; EEG",
      "D) Maladie de Wilson ; Ponction lombaire",
      "E) Tumeur cérébrale ; Échographie"
    ],
    correctAnswers: [1],
    explanation: "Parkinsonisme précoce, symétrique, résistant à la L-Dopa avec dysautonomie sévère (hypotension orthostatique, troubles vésicosphinctériens) = Atrophie multisystématisée (AMS).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-6-c5',
    courseId: 'crs-neuro-6',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Mme Leïla, 68 ans, parkinsonienne depuis 10 ans sous L-Dopa et agoniste dopaminergique, présente des hallucinations visuelles (petits animaux) et une confusion. Quelle est la première mesure thérapeutique ?",
    options: [
      "A) Ajouter de l'halopéridol",
      "B) Arrêter tous les traitements antiparkinsoniens d'un coup",
      "C) Réduire ou arrêter en priorité l'agoniste dopaminergique et simplifier le schéma de L-Dopa",
      "D) Prescrire des benzodiazépines sédatives",
      "E) Hospitaliser en psychiatrie fermée"
    ],
    correctAnswers: [2],
    explanation: "Les agonistes dopaminergiques possèdent le plus fort potentiel psychotogène et hallucinatoire. Ils doivent être réduits ou sevrés en premier lieu. Les neuroleptiques typiques (halopéridol) sont formellement contre-indiqués.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_6_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-6-mindmap',
    courseId: 'crs-neuro-6',
    title: 'Mind Map : Maladie de Parkinson & Syndromes Parkinsoniens',
    type: 'mindmap',
    content: `
# MIND MAP : MALADIE DE PARKINSON (MPI)
*Dégénérescence dopaminergique de la substance noire pars compacta*

## 1. SÉMIOLOGIE MOTRICE (TRIADE CARDINALE)
- **Akinésie / Bradykinésie** : Maître symptôme obligatoire. Lenteur d'initiation, perte des mouvements automatiques (amimie, réduction du ballant des bras), micrographie.
- **Rigidité Plastique** : Hypertonie en « tuyau de plomb », signe de la roue dentée (phénomène de Negro), renforcée par la manœuvre de Froment.
- **Tremblement de Repos** : 4-6 Hz, distal (« roulement de pilules »), unilatéral ou asymétrique, disparaît au mouvement volontaire et au sommeil.

## 2. SIGNES NON MOTEURS PRÉCOCES
- Hyposmie / Anosmie (dépôts d'alpha-synucléine dans le bulbe olfactif).
- Troubles du comportement en sommeil paradoxal (TCSP : rêves agités et animés).
- Constipation rebelle, dépression, hypotension orthostatique.

## 3. STRATÉGIE THÉRAPEUTIQUE
- **Sujet Jeune (< 60-65 ans)** : Agoniste dopaminergique en première intention (limiter le risque de dyskinésies tardives) ou IMAO-B.
- **Sujet Âgé (> 65-70 ans)** : L-Dopa d'emblée (+ inhibiteur périphérique DDC type bensérazide/carbidopa) pour son efficacité motrice et son profil de tolérance cognitive.
- **Formes Fluctuantes Avancées** : Fractionnement, inhibiteurs COMT (entacapone), perfusion sous-cutanée d'apomorphine, stimulation cérébrale profonde (NST).
`
  },
  {
    id: 'res-nro-6-astuces',
    courseId: 'crs-neuro-6',
    title: 'Astuces & Mnémotechniques : Maladie de Parkinson',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (PARKINSON)
*Par Dr. LAIDANI.MERIEM*

- **Triade Motrice : « ART »**
  - **A**kinésie
  - **R**igidité (plastique)
  - **T**remblement (de repos)

- **Diagnostic Différentiel des Parkinson-Plus : « PACES »**
  - **P**SP (Paralysie Supranucléaire Progressive) : Chutes précoces + regard vertical vers le bas bloqué.
  - **A**MS (Atrophie Multisystématisée) : Dysautonomie sévère + cérébelleux/pyramidal.
  - **C**BD (Dégénérescence Cortico-Basale) : Asymétrie majeure, apraxie, phénomène de « main étrangère ».
  - **E** (Encephalopathy / DLB) : Démence à corps de Lewy (hallucinations visuelles précoces + fluctuations).

- **L-Dopa vs Agonistes selon l'âge :**
  - *« Jeune pour l'Agoniste, Vieux pour la Dopa ! »*
`
  }
];
