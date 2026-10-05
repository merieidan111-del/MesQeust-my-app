import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 22: DIAGNOSTIC DU CANCER - Dr N/E Kaim
// ==========================================
export const HEMATO_LESSON_22_QUESTIONS: Question[] = [
  {
    id: 'q-hem-22-01',
    courseId: 'crs-hemato-22',
    questionNumber: 1,
    type: 'QCM',
    content: "Quelle est la SEULE méthode apportant la preuve formelle et irréfutable du diagnostic de certitude d'un cancer ?",
    options: [
      "A) L'examen anatomopathologique (histopathologique) d'un prélèvement biopsique ou d'une pièce d'exérèse chirurgicale",
      "B) L'élévation majeure d'un marqueur tumoral sérique",
      "C) L'hyperfixation intense au TEP-scan",
      "D) La présence d'une masse tissulaire au scanner avec injection",
      "E) Une altération profonde de l'état général avec amaigrissement de 15 kg"
    ],
    correctAnswers: [0],
    explanation: "Règle absolue en cancérologie : 'Pas de traitement sans preuve histologique'. Seul l'examen anatomopathologique permet d'affirmer la malignité, le type histologique précis, le grade de différenciation, et d'analyser les marqueurs immunohistochimiques et moléculaires indispensables au choix thérapeutique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-02',
    courseId: 'crs-hemato-22',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans les circonstances de découverte d'un cancer, l'altération de l'état général (AEG) classique associe le 'syndrome des 3 A' :",
    options: [
      "A) Asthénie, Anorexie, et Amaigrissement involontaire",
      "B) Anémie, Anxiété et Arthralgies",
      "C) Aphasie, Agnosie et Apraxie",
      "D) Alopécie, Aménorrhée et Ascite",
      "E) Aucune de ces réponses"
    ],
    correctAnswers: [0],
    explanation: "Le trépied classique de l'AEG en médecine interne et oncologie regroupe l'Asthénie (fatigue intense physique et psychique non calmée par le repos), l'Anorexie (perte d'appétit, parfois sélective pour la viande dans les cancers digestifs) et l'Amaigrissement involontaire rapide chiffré en pourcentage du poids corporel.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-03',
    courseId: 'crs-hemato-22',
    questionNumber: 3,
    type: 'QCM',
    content: "Un syndrome paranéoplasique est défini par :",
    options: [
      "A) Un ensemble de manifestations cliniques ou biologiques à distance de la tumeur primitive ou de ses métastases, non liées à un envahissement tumoral direct, mais secondaires à la sécrétion ectopique d'hormones, de peptides ou à des mécanismes auto-immuns",
      "B) Une surinfection bactérienne de la tumeur",
      "C) Une métastase ganglionnaire régionale",
      "D) Un effet indésirable direct de la chimiothérapie",
      "E) Une récidive locale post-chirurgicale"
    ],
    correctAnswers: [0],
    explanation: "Les syndromes paranéoplasiques sont des manifestations systémiques survenant à distance de la tumeur, induits par des molécules sécrétées par les cellules cancéreuses (hormones, cytokines) ou par une réaction immunologique croisée entre la tumeur et les tissus sains (anticorps onconeuronaux). Ils régressent habituellement avec le traitement efficace du cancer.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-04',
    courseId: 'crs-hemato-22',
    questionNumber: 4,
    type: 'QCM',
    content: "Le syndrome de sécrétion inappropriée d'hormone antidiurétique (SIADH / syndrome de Schwartz-Bartter : hyponatrémie euvolémique, urines anormalement concentrées) est classiquement associé à :",
    options: [
      "A) Le carcinome broncho-pulmonaire à petites cellules (CBPC)",
      "B) Le carcinome épidermoïde de la peau",
      "C) Le cancer de la thyroïde papillaire",
      "D) Le mélanome superficiel extensif",
      "E) Le liposarcome bien différencié"
    ],
    correctAnswers: [0],
    explanation: "Le CBPC (carcinome à petites cellules du poumon, tumeur neuroendocrine de haut grade) est le grand pourvoyeur de syndromes paranéoplasiques endocriniens, principalement le SIADH par sécrétion ectopique d'ADH et le syndrome de Cushing ectopique par sécrétion d'ACTH.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-05',
    courseId: 'crs-hemato-22',
    questionNumber: 5,
    type: 'QCM',
    content: "L'hypercalcémie paranéoplasique humorale sans métastase osseuse observée dans les carcinomes épidermoïdes (poumon, ORL, col utérin) est médiée par :",
    options: [
      "A) La sécrétion ectopique tumorale de PTH-rp (Parathyroid Hormone-related Protein)",
      "B) La sécrétion directe d'insuline",
      "C) Une destruction mécanique de l'os par les ostéoblastes",
      "D) Un déficit en vitamine D active",
      "E) Une rétention tubulaire de phosphore"
    ],
    correctAnswers: [0],
    explanation: "La PTH-rp mime l'action de la parathormone (PTH) sur les récepteurs osseux et rénaux, stimulant l'ostéolyse ostéoclastique et la réabsorption tubulaire de calcium tout en augmentant la phosphaturie, entraînant une hypercalcémie maligne avec hypophosphorémie et taux de PTH native effondré.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-06',
    courseId: 'crs-hemato-22',
    questionNumber: 6,
    type: 'QCM',
    content: "Le syndrome myasthénique de Lambert-Eaton (faiblesse motrice proximale des membres inférieurs s'améliorant transitoirement à l'effort répété avec aréflexie ostéotendineuse et dysautonomie) est un syndrome paranéoplasique neurologique lié à des anticorps dirigés contre :",
    options: [
      "A) Les canaux calciques voltage-dépendants présynaptiques (VGCC de type P/Q)",
      "B) Les récepteurs post-synaptiques de l'acétylcholine (AChR)",
      "C) La protéine kinase C",
      "D) Les canaux sodiques des nœuds de Ranvier",
      "E) La myéline centrale"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Lambert-Eaton (retrouvé dans 60% des cas en association avec un carcinome à petites cellules du poumon) est médié par des auto-anticorps anti-canaux calciques présynaptiques (VGCC), réduisant la libération d'acétylcholine dans la fente synaptique. Contrairement à la myasthénie vraie (anti-AChR post-synaptique qui s'aggrave à l'effort), le déficit de Lambert-Eaton s'améliore transitoirement à la contraction répétée (phénomène de facilitation post-effort).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-22-07',
    courseId: 'crs-hemato-22',
    questionNumber: 7,
    type: 'QCM',
    content: "L'ostéoarthropathie hypertrophiante pneumique de Pierre-Marie associe un hippocratisme digital des doigts en 'baguettes de tambour', une périostite engainante bilatérale et symétrique des os longs et des arthralgies, révélatrice principalement de :",
    options: [
      "A) Un cancer broncho-pulmonaire non à petites cellules (adénocarcinome ou épidermoïde) ou d'une tumeur fibreuse pleurale",
      "B) Un cancer du côlon gauche",
      "C) Un cancer du testicule",
      "D) Un rétinoblastome",
      "E) Une tumeur rénale à cellules claires"
    ],
    correctAnswers: [0],
    explanation: "L'hippocratisme digital et l'ostéoarthropathie de Pierre-Marie sont fortement liés aux cancers broncho-pulmonaires primitifs (non à petites cellules), secondaires à la libération anormale de PDGF et de VEGF par les mégacaryocytes non fragmentés dans le lit capillaire pulmonaire shunté.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-08',
    courseId: 'crs-hemato-22',
    questionNumber: 8,
    type: 'QCM',
    content: "Dans la terminologie anatomopathologique, une tumeur maligne développée à partir d'un tissu épithélial de revêtement ou glandulaire est appelée :",
    options: [
      "A) Un carcinome",
      "B) Un sarcome",
      "C) Un lymphome",
      "D) Un blastome",
      "E) Un gliome"
    ],
    correctAnswers: [0],
    explanation: "Carcinome = tumeur maligne d'origine épithéliale (représente plus de 85-90% des cancers humains : adénocarcinome si épithélium glandulaire, carcinome épidermoïde si épithélium malpighien). Sarcome = tumeur maligne d'origine conjonctive/mésenchymateuse (os, cartilage, muscles, graisse).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-09',
    courseId: 'crs-hemato-22',
    questionNumber: 9,
    type: 'QCM',
    content: "Un sarcome malin dérivé du tissu adipeux est appelé :",
    options: [
      "A) Liposarcome",
      "B) Ostéosarcome",
      "C) Rhabdomyosarcome",
      "D) Léiomyosarcome",
      "E) Chondrosarcome"
    ],
    correctAnswers: [0],
    explanation: "Nomenclature des sarcomes : tissu adipeux = Liposarcome ; tissu osseux = Ostéosarcome ; cartilage = Chondrosarcome ; muscle strié = Rhabdomyosarcome ; muscle lisse = Léiomyosarcome ; endothélium vasculaire = Angiosarcome.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-10',
    courseId: 'crs-hemato-22',
    questionNumber: 10,
    type: 'QCM',
    content: "La présence d'un ganglion sus-claviculaire gauche ferme, pierreux, indolore et fixé (ganglion de Troisier) oriente en premier lieu vers la dissémination lymphatique sous-diaphragmatique d'un :",
    options: [
      "A) Cancer digestif intra-abdominal (estomac, côlon, pancréas) ou du testicule/ovaire",
      "B) Cancer de la pointe de la langue",
      "C) Cancer cutané du scalp",
      "D) Ostéosarcome de la mandibule",
      "E) Mélanome de l'oreille droite"
    ],
    correctAnswers: [0],
    explanation: "Le ganglion de Troisier (ganglion de Virchow) est situé dans le creux sus-claviculaire gauche, au confluent du canal thoracique qui draine toute la lymphe sous-diaphragmatique. Sa présence signe une dissémination métastatique ganglionnaire à distance d'un cancer abdominal ou pelvien.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-11',
    courseId: 'crs-hemato-22',
    questionNumber: 11,
    type: 'QCM',
    content: "Le nodule de Sœur Marie-Joseph correspond à :",
    options: [
      "A) Une métastase cutanée ombilicale d'un cancer digestif intra-abdominal (notamment cancer de l'estomac, pancréas ou côlon) ou gynécologique",
      "B) Une hernie ombilicale bénigne réductible",
      "C) Un kyste sébacé de la paroi",
      "D) Une métastase cérébrale frontale",
      "E) Un hématome périnéal"
    ],
    correctAnswers: [0],
    explanation: "Le nodule de Sœur Marie-Joseph est une masse nodulaire dure infiltrant l'ombilic, témoignant d'une dissémination péritonéale métastatique métachrone ou synchrone d'un adénocarcinome gastro-intestinal ou de l'ovaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-12',
    courseId: 'crs-hemato-22',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans les syndromes paranéoplasiques cutanés, l'apparition brutale d'une hyperpigmentation veloutée gris-brunâtre des plis cutanés de flexion (aisselles, cou, aines) réalisant un Acanthosis Nigricans malin chez un adulte sans surcharge pondérale est évocatrice de :",
    options: [
      "A) Un adénocarcinome intra-abdominal, en particulier gastrique",
      "B) Un carcinome basocellulaire cutané",
      "C) Un astrocytome cérébral",
      "D) Une tumeur testiculaire bénigne",
      "E) Un ostéome ostéoïde"
    ],
    correctAnswers: [0],
    explanation: "L'Acanthosis nigricans de survenue tardive chez un adulte sans obésité ni diabète est un syndrome paranéoplasique dermatologique hautement spécifique, associé dans plus de 60% des cas à un adénocarcinome gastrique évolué.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-13',
    courseId: 'crs-hemato-22',
    questionNumber: 13,
    type: 'QCM',
    content: "La thrombophlébite superficielle migrante et récidivante touchant des territoires veineux inhabituels (syndrome de Trousseau) est classiquement révélatrice de :",
    options: [
      "A) Un adénocarcinome viscéral profond évolué, en particulier cancer du pancréas ou de l'estomac",
      "B) Une insuffisance veineuse banale essentielle",
      "C) Une anomalie de l'artère temporale",
      "D) Une embolie gazeuse",
      "E) Un anévrisme poplité"
    ],
    correctAnswers: [0],
    explanation: "Décrit par Armand Trousseau (qui en fut lui-même atteint), le syndrome de Trousseau associe des phlébites superficielles récidivantes et migratrices des membres à un état d'hypercoagulabilité paranéoplasique très fréquemment associé à un adénocarcinome du pancréas ou mucisécrétant.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-14',
    courseId: 'crs-hemato-22',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans la démarche diagnostique d'une masse tissulaire suspecte, quelle modalité de prélèvement anatomopathologique est formellement supérieure à la ponction à l'aiguille fine pour affirmer l'architecture tissulaire ?",
    options: [
      "A) La microbiopsie ou macrobiopsie au pistolet automatique à l'aiguille coupante (Tru-cut) ou la biopsie chirurgicale",
      "B) Le frottis cytologique par étalement",
      "C) L'analyse d'urines",
      "D) Le brossage superficiel sans fragment",
      "E) Le lavage péritonéal sans cellules"
    ],
    correctAnswers: [0],
    explanation: "La cytoponction ne recueille que des cellules isolées sans architecture. La biopsie au trocart (Tru-Cut) permet d'obtenir une carotte tissulaire intacte préservant l'architecture cellulaire, le stroma tumoral, la capsule et permettant un panneau immunohistochimique complet et le séquençage génomique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-15',
    courseId: 'crs-hemato-22',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans l'évaluation diagnostique, quelle anomalie anatomopathologique cellulaire fondamentale distingue formellement un carcinome invasif d'un carcinome in situ (intra-épithélial) ?",
    options: [
      "A) Le franchissement de la membrane basale épithéliale avec invasion du stroma conjonctif sous-jacent (chorion)",
      "B) La présence d'atypies cytonucléaires",
      "C) La présence de mitoses anormales",
      "D) L'augmentation du rapport nucléo-cytoplasmique",
      "E) La perte de la polarité cellulaire"
    ],
    correctAnswers: [0],
    explanation: "Le critère d'invasion carcinomateuse est la rupture et le franchissement de la membrane basale. Tant que la membrane basale est respectée, la lésion est dite 'in situ' (stade Tis) : elle ne peut pas accéder aux vaisseaux sanguins ou lymphatiques et ne métastase jamais.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-16',
    courseId: 'crs-hemato-22',
    questionNumber: 16,
    type: 'QCM',
    content: "Le marqueur tumoral sérique dont le dosage est utile dans le diagnostic des tumeurs primitives germinales ou hépatiques (Carcinome Hépatocellulaire) est :",
    options: [
      "A) L'Alpha-fœtoprotéine (AFP)",
      "B) Le CA 15-3",
      "C) Le PSA",
      "D) La thyroglobuline",
      "E) Le NSE"
    ],
    correctAnswers: [0],
    explanation: "L'AFP est synthétisée physiologiquement par le foie fœtal et le sac vitellin. Elle s'élève fortement dans le carcinome hépatocellulaire (CHC) et dans les tumeurs germinales non séminomateuses à composante vitelline.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-17',
    courseId: 'crs-hemato-22',
    questionNumber: 17,
    type: 'QCM',
    content: "La découverte fortuite d'un 'incidentalome surrénalien' au scanner abdominal impose un bilan hormonal systématique pour éliminer :",
    options: [
      "A) Un phéochromocytome (dérivés méthoxylés urinaires/plasmatiques) et un adénome hypersécrétant de cortisol (freinage minute à la dexaméthasone)",
      "B) Une hypothyroïdie fruste",
      "C) Un diabète insipide",
      "D) Un déficit en hormone de croissance",
      "E) Une cirrhose hépatique"
    ],
    correctAnswers: [0],
    explanation: "Devant toute masse surrénalienne de découverte fortuite, il faut obligatoirement évaluer : 1. Le caractère sécrétant (éliminer un phéochromocytome par métanéphrines, un hypercorticisme par test de freinage minute, et un hyperaldostéronisme primaire si HTA) ; 2. Le risque de malignité corticosurrénalome au scanner (taille > 4 cm, densité spontanée > 10 UH, lavage lent).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-22-18',
    courseId: 'crs-hemato-22',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans la prise en charge diagnostique d'une adénopathie cervicale chronique de plus de 1 mois chez un adulte fumeur et buveur, quel examen clinique doit précéder toute démarche invasive ?",
    options: [
      "A) Un examen ORL complet avec laryngoscopie indirecte ou nasofibroscopie souple des VADS à la recherche du cancer primitif (base de langue, amygdale, sinus piriforme, cavum)",
      "B) Une biopsie ganglionnaire chirurgicale immédiate sans examen ORL",
      "C) Une antibiothérapie par amoxicilline pendant 3 mois",
      "D) Une radiographie des mains",
      "E) Une ponction lombaire"
    ],
    correctAnswers: [0],
    explanation: "Toute adénopathie cervicale chronique chez l'adulte exposé aux toxiques est une métastase ganglionnaire d'un cancer des VADS jusqu'à preuve du contraire. L'examen ORL complet avec nasofibroscopie est impératif pour trouver la porte d'entrée primitive avant d'envisager une biopsie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-19',
    courseId: 'crs-hemato-22',
    questionNumber: 19,
    type: 'QCM',
    content: "Une métastase osseuse révélatrice d'un cancer ostéophile primitif d'origine inconnue chez un homme de plus de 60 ans doit faire doser en première intention :",
    options: [
      "A) Le PSA sérique total (recherche d'un adénocarcinome prostatique)",
      "B) L'insuline plasmatique",
      "C) La troponine Ic",
      "D) La lipase",
      "E) Le fibrinogène"
    ],
    correctAnswers: [0],
    explanation: "Le cancer de la prostate est le cancer masculin ostéophile par excellence (métastases osseuses condensantes / ostéoblastiques du rachis et du bassin). Le dosage du PSA total est un examen de première ligne facile, rapide et hautement orientateur.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-20',
    courseId: 'crs-hemato-22',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans les critères diagnostiques d'une tumeur maligne à l'examen anatomopathologique standard, l'angio-invasion correspond à :",
    options: [
      "A) La présence d'emboles tumoraux vasculaires (cellules cancéreuses au sein de la lumière des capillaires sanguins ou lymphatiques)",
      "B) La prolifération de vaisseaux bénins",
      "C) Une hémorragie intratumorale banale",
      "D) L'épaississement de l'adventice artérielle",
      "E) Une thrombose veineuse profonde"
    ],
    correctAnswers: [0],
    explanation: "L'invasion vasculaire (emboles tumoraux lymphatiques ou veineux péri-tumoraux) témoigne de la capacité de la tumeur à disséminer par voie hématogène ou lymphatique, constituant un facteur pronostique péjoratif indépendant.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-21',
    courseId: 'crs-hemato-22',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans la prise en charge des métastases sans primitif connu (CUP / Cancer of Unknown Primary), quel examen d'imagerie corps entier moderne permet de localiser la lésion primitive occulte dans plus de 30 à 40% des cas ?",
    options: [
      "A) La TEP-TDM au 18F-FDG",
      "B) La radiographie du squelette entier",
      "C) Le lavement baryté",
      "D) L'urographie intraveineuse",
      "E) L'échographie abdominale simple"
    ],
    correctAnswers: [0],
    explanation: "La TEP-TDM au FDG a une sensibilité élevée pour détecter la tumeur primitive primitivement occulte (en particulier dans la sphère ORL, pulmonaire ou pancréatique) et cartographier l'ensemble des sites métastatiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-22',
    courseId: 'crs-hemato-22',
    questionNumber: 22,
    type: 'QCM',
    content: "Le diagnostic histologique différentiel d'un carcinome indifférencié métastatique utilise en immunohistochimie le marquage par des anticorps dirigés contre les filaments intermédiaires de type :",
    options: [
      "A) Cytokératines (positives dans les carcinomes épithéliaux)",
      "B) Vimentine seule",
      "C) Myosine",
      "D) Collagène de type IV",
      "E) Actine musculaire lisse"
    ],
    correctAnswers: [0],
    explanation: "Les cytokératines sont les filaments intermédiaires spécifiques des cellules épithéliales. Leur expression (pancytokératine AE1/AE3, CK7, CK20) confirme la nature carcinomateuse d'une tumeur anaplasique indifférenciée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-23',
    courseId: 'crs-hemato-22',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans le diagnostic d'un carcinome neuroendocrine (bien ou peu différencié), quels sont les deux marqueurs immunohistochimiques de différenciation neuroendocrine de référence ?",
    options: [
      "A) La Chromogranine A et la Synaptophysine",
      "B) La Desmine et la Myogénine",
      "C) Le CD20 et le CD3",
      "D) Le PSA et l'ACE",
      "E) L'alpha-fœtoprotéine et la ferritine"
    ],
    correctAnswers: [0],
    explanation: "La Synaptophysine (protéine des vésicules synaptiques) et la Chromogranine A (protéine des granules sécrétoires denses) sont les marqueurs universels indispensables pour prouver la nature neuroendocrine d'une prolifération tumorale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-24',
    courseId: 'crs-hemato-22',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans le bilan diagnostique d'une hématurie macroscopique terminale indolore chez un homme de 60 ans tabagique, l'association d'examens indispensables comprend :",
    options: [
      "A) Une cystoscopie vésicale et un uroscanner (recherche d'une tumeur de vessie ou des voies urinaires supérieures)",
      "B) Un dosage du calcium urinaire seul",
      "C) Une radiographie pulmonaire",
      "D) Une échographie cardiaque",
      "E) Un frottis sanguin"
    ],
    correctAnswers: [0],
    explanation: "Toute hématurie macroscopique chez l'adulte (surtout fumeur) est un cancer urothélial (vessie dans 80% des cas) jusqu'à preuve du contraire. L'uroscanner (avec temps excréteur) et la fibroscopie vésicale souple avec biopsies constituent le doublet diagnostique de certitude.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-25',
    courseId: 'crs-hemato-22',
    questionNumber: 25,
    type: 'QCM',
    content: "L'examen anatomopathologique extemporané (réalisé per-opératoire en quelques minutes au cours de l'acte chirurgical) a pour objectif principal :",
    options: [
      "A) Répondre à une question chirurgicale immédiate guidant l'étendue de l'exérèse (ex: vérification de l'envahissement tumoral microscopique d'une tranche de section ou analyse du ganglion sentinelle)",
      "B) Poser le grade cytogénétique définitif",
      "C) Réaliser un séquençage complet du génome",
      "D) Établir le caryotype médullaire",
      "E) Remplacer l'examen histologique standard définitif après inclusion en paraffine"
    ],
    correctAnswers: [0],
    explanation: "L'examen extemporané (coupes au cryostat à congélation rapide sans fixation) permet au chirurgien d'adapter immédiatement son geste au bloc (recoupe de marge si limite envahie, curage ganglionnaire axillaire si ganglion sentinelle positif). Il doit toujours être confirmé secondairement par l'examen histologique définitif sur tissu fixé inclus en paraffine.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-22-cs1',
    courseId: 'crs-hemato-22',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un homme de 62 ans fumeur consulte pour altération de l'état général avec perte de 8 kg en 2 mois et confusion mentale d'installation progressive. Le bilan biologique retrouve : Natrémie effondrée à 118 mmol/L, Kaliémie 4,1 mmol/L, Glycémie normale, Osmolalité plasmatique basse (245 mOsm/kg), Osmolalité urinaire anormalement élevée (480 mOsm/kg) avec natriurèse à 65 mmol/L (hyponatrémie euvolémique de SIADH). La radiographie pulmonaire montre une opacité hilaire droite de 5 cm.\n\nQuel cancer broncho-pulmonaire primitif suspectez-vous en premier lieu ?",
    options: [
      "A) Carcinome broncho-pulmonaire à petites cellules (CBPC) compliqué d'un SIADH paranéoplasique",
      "B) Mésothéliome pleural bénin",
      "C) Tumeur carcinoïde bronchique typique de bas grade",
      "D) Aspergillome pulmonaire intracavitaire",
      "E) Hamartochondrome pulmonaire"
    ],
    correctAnswers: [0],
    explanation: "Opacité hilaire chez un fumeur + SIADH sévère révélateur = Carcinome à petites cellules du poumon (CBPC) dans plus de 80% des cas. Une fibroscopie bronchique avec biopsies doit être réalisée d'urgence pour confirmation histopathologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-cs2',
    courseId: 'crs-hemato-22',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Une patiente de 55 ans consulte pour une toux sèche traînante. La radiographie thoracique met en évidence une masse pulmonaire excavée de 4 cm du lobe supérieur droit. Le bilan biologique montre une calcémie corrigée très élevée à 3,60 mmol/L (14,4 mg/dL) avec phosphorémie basse à 0,6 mmol/L. Le scanner ne retrouve aucune métastase osseuse. Le dosage de la PTH native est indétectable, tandis que le dosage de la PTH-rp revient très fortement positif.\n\nQuel est le mécanisme de cette hypercalcémie et quel type histologique bronchique est le plus probable ?",
    options: [
      "A) Hypercalcémie humorale paranéoplasique liée à la sécrétion ectopique de PTH-rp par un Carcinome Épidermoïde bronchique",
      "B) Métastases ostéolytiques microscopiques diffuses",
      "C) Hyperparathyroïdie primaire synchrone sur adénome parathyroïdien",
      "D) Intoxication massive à la vitamine D",
      "E) Sarcoïdose pulmonaire aiguë"
    ],
    correctAnswers: [0],
    explanation: "PTH-rp élevée + PTH native basse + absence de métastase osseuse = Hypercalcémie paranéoplasique humorale. Elle est typiquement produite par les carcinomes épidermoïdes (carcinome malpighien bronchique, souvent volumineux et excavé).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-cs3',
    courseId: 'crs-hemato-22',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un homme de 50 ans sans antécédent consulte pour l'apparition en quelques semaines de plaques cutanées veloutées hyperpigmentées noirâtres symétriques des creux axillaires et de la région cervicale postérieure (Acanthosis Nigricans typique), associées à des épigastralgies calmées par les repas et une perte de 6 kg. L'interrogatoire retrouve un dégoût récent de la viande.\n\nQuel examen endoscopique doit être programmé en urgence ?",
    options: [
      "A) Une fibroscopie œso-gastro-duodénale (FOGD) avec biopsies gastriques étagées à la recherche d'un adénocarcinome gastrique",
      "B) Une coloscopie totale",
      "C) Une bronchoscopie souple",
      "D) Une échographie prostatique",
      "E) Une cystoscopie vésicale"
    ],
    correctAnswers: [0],
    explanation: "L'Acanthosis nigricans malin chez l'adulte est un syndrome paranéoplasique cutané classique traduisant dans la majorité des cas un cancer digestif haut (adénocarcinome de l'estomac). Le dégoût sélectif pour la viande (dégoût carnivore) est un signe d'appel évocateur de néoplasie gastrique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-cs4',
    courseId: 'crs-hemato-22',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 65 ans consulte pour une tuméfaction dure et indolore du creux sus-claviculaire gauche mesurant 3 cm, apparue il y a 1 mois, accompagnée d'un amaigrissement de 10 kg. L'examen physique retrouve un foie nodulaire débordant de 4 travers de doigt et une masse péri-ombilicale indurée (nodule de Sœur Marie-Joseph).\n\nQuelle est la nature du ganglion sus-claviculaire gauche (ganglion de Troisier) et quelle est la signification pronostique de ce tableau ?",
    options: [
      "A) Métastase lymphatique d'un cancer digestif intra-abdominal évolué avec carcinose péritonéale et métastases hépatiques (stade IV dépassé d'emblée)",
      "B) Tuberculose ganglionnaire localisée guérissable en ambulatoire",
      "C) Lymphome de Hodgkin stade I localisé",
      "D) Kyste bronchogénique surinfecté",
      "E) Maladie des griffes du chat aiguë"
    ],
    correctAnswers: [0],
    explanation: "La triade ganglion de Troisier (ganglion sus-claviculaire gauche au confluent du canal thoracique) + nodule de Sœur Marie-Joseph (métastase ombilicale) + hépatomégalie métastatique signe une dissémination métastatique diffuse d'un adénocarcinome digestif (estomac, pancréas ou côlon) de stade IV d'emblée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-22-cs5',
    courseId: 'crs-hemato-22',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Une femme de 48 ans consulte pour un nodule mammaire externe droit palpable de 2 cm. La mammographie et l'échographie classent la lésion en ACR 5 (forte suspicion de malignité). Le radiologue réalise une microbiopsie au trocart sous guidage échographique. L'examen anatomopathologique montre une prolifération de cellules épithéliales atypiques franchissant la membrane basale et infiltrant le tissu adipeux et fibreux stroma-réactionnel.\n\nQuel est le diagnostic anatomopathologique formel et quel bilan complémentaire doit être réalisé sur ce tissu biopsié ?",
    options: [
      "A) Carcinome mammaire infiltrant ; Réalisation systématique de l'immunohistochimie (récepteurs aux œstrogènes RE, récepteurs à la progestérone RP, protéine HER2 et index de prolifération Ki-67)",
      "B) Fibroadénome bénin simple ; Surveillance annuelle sans traitement",
      "C) Carcinome canalaire in situ exclusif sans invasion",
      "D) Mastose kystique banale",
      "E) Lipome bénin du sein"
    ],
    correctAnswers: [0],
    explanation: "Le franchissement de la membrane basale définit le caractère infiltrant (carcinome invasif). L'analyse histopathologique complète impose la détermination du profil biomoléculaire prédictif et pronostique : récepteurs hormonaux (RE, RP), HER2 et Ki-67, indispensables pour guider l'indication de chimiothérapie, thérapie ciblée et hormonothérapie.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_22_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-22-01',
    courseId: 'crs-hemato-22',
    type: 'resume',
    title: "Mind Map Synthèse : Diagnostic du Cancer",
    contentMarkdown: `# Mind Map : Diagnostic du Cancer (Dr N/E Kaim)

\`\`\`
                                  DÉMARCHE DIAGNOSTIQUE EN CANCÉROLOGIE
                                                    │
         ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
         ▼                  ▼                       ▼                       ▼                  ▼
CIRCONSTANCES DE DÉCOUVERTE PREUVE HISTOPATHOLOGIQUE SYNDROMES PARANÉOPLASIQUES SIGNES PHYSIQUES CLÉS   NOMENCLATURE
- Signes d'appel d'organe   - **BIOPSIE INDISPENSABLE** - SIADH ➔ Cancer à      - Ganglion de Troisier  - Épithélium :
- Altération état général     (Ponction cytologique       petites cellules (CBPC) (sus-claviculaire G)    **Carcinome**
  (3 A : Asthénie,            insuffisante !)           - Hypercalcémie PTH-rp  - Nodule de Sœur        - Conjonctif :
  Anorexie, Amaigrissement) - Franchissement de la        ➔ Carcinome épidermoïde   Marie-Joseph (ombilic) **Sarcome**
- Découverte fortuite TDM     membrane basale =         - Lambert-Eaton (anti-  - Hippocratisme digital - Hématopoïèse :
- Dépistage organisé          **Carcinome invasif**       VGCC) ➔ CBPC            (Pierre-Marie) ➔ Poumon  Lymphome / Leucémie
\`\`\`

## La Règle d'Or :
- **Pas de traitement sans preuve histologique** !
- Les marqueurs tumoraux sériques ne suffisent JAMAIS à affirmer un diagnostic de cancer (rôle de surveillance).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-22-02',
    courseId: 'crs-hemato-22',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Diagnostic et Paranéoplasies",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **La preuve diagnostique** :
   - Un marqueur tumoral à 10 000 ou une masse au scanner ne font JAMAIS le diagnostic de certitude. Seule l'**histopathologie d'une biopsie tissulaire** apporte la certitude.
2. **SIADH vs Hypercalcémie dans le poumon** :
   - SIADH (hyponatrémie) = **Carcinome à petites cellules (CBPC)**.
   - Hypercalcémie à PTH-rp = **Carcinome épidermoïde**.
3. **Lambert-Eaton vs Myasthénie** :
   - Lambert-Eaton (anti-VGCC présynaptique) : Le déficit **S'AMÉLIORE** transitoirement à l'effort répété (facilitation). Associé au CBPC.
   - Myasthénie (anti-AChR postsynaptique) : Le déficit s'aggrave à l'effort. Associé au thymome.
4. **Ganglion de Troisier** :
   - Creux sus-claviculaire **GAUCHE** (confluent du canal thoracique) = Métastase d'un cancer digestif ou pelvien.
5. **Carcinome in situ vs infiltrant** :
   - Seule la rupture de la **membrane basale** fait basculer la tumeur dans le stade invasif.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 23: FACTEURS DE RISQUE DES CANCERS & PRÉVENTION - Dr M.A. Melzi
// ==========================================
export const HEMATO_LESSON_23_QUESTIONS: Question[] = [
  {
    id: 'q-hem-23-01',
    courseId: 'crs-hemato-23',
    questionNumber: 1,
    type: 'QCM',
    content: "Quel est le premier facteur de risque évitable et la première cause de mortalité par cancer dans le monde et en Algérie ?",
    options: [
      "A) Le tabagisme (actif et passif)",
      "B) La consommation de café",
      "C) Le manque de sommeil",
      "D) L'exposition aux ondes électromagnétiques des téléphones",
      "E) Les traumatismes physiques répétés"
    ],
    correctAnswers: [0],
    explanation: "Le tabagisme est responsable de plus de 85% des cancers du poumon et est impliqué causalement dans plus de 17 localisations cancéreuses différentes (ORL, vessie, pancréas, œsophage, col de l'utérus, estomac, rein). Il est le premier facteur de risque évitable de décès par cancer.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-02',
    courseId: 'crs-hemato-23',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans les cancers de la sphère des Voies Aérodigestives Supérieures (VADS) et de l'œsophage, l'action combinée du tabac et de l'alcool est caractérisée par :",
    options: [
      "A) Une synergie d'action multiplicative (l'alcool solubilise les carcinogènes du tabac et altère les muqueuses, multipliant le risque par 40 à 100)",
      "B) Une simple addition arithmétique des risques",
      "C) Un effet protecteur réciproque",
      "D) Une action antagoniste",
      "E) Une absence totale d'interaction démontrée"
    ],
    correctAnswers: [0],
    explanation: "L'association alcool + tabac n'est pas additive mais puissamment synergique multiplicative : l'éthanol agit comme solvant local facilitant la pénétration des hydrocarbures cancérigènes du tabac à travers l'épithélium muqueux, multipliant le risque relatif de cancer ORL et œsophagien par plus de 50 à 100 chez les gros consommateurs.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-03',
    courseId: 'crs-hemato-23',
    questionNumber: 3,
    type: 'QCM',
    content: "Les deux génotypes oncogènes de Papillomavirus Humain (HPV à haut risque) responsables de plus de 70% des cancers du col utérin, de l'anus et de nombreux cancers oropharyngés sont :",
    options: [
      "A) HPV 16 et HPV 18",
      "B) HPV 6 et HPV 11",
      "C) HPV 1 et HPV 2",
      "D) HPV 3 et HPV 4",
      "E) HPV 40 et HPV 42"
    ],
    correctAnswers: [0],
    explanation: "HPV 16 et HPV 18 sont les deux types dits à haut risque oncogène (HR-HPV) prédominants dans les cancers du col de l'utérus, du canal anal et de l'oropharynx (amygdales/base de langue). Les types HPV 6 et 11 sont des virus à bas risque responsables de condylomes acuminés bénins.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-04',
    courseId: 'crs-hemato-23',
    questionNumber: 4,
    type: 'QCM',
    content: "Le mécanisme moléculaire oncogénique des Papillomavirus Humains oncogènes (HPV 16 et 18) repose sur l'expression de deux oncoprotéines virales :",
    options: [
      "A) Les protéines E6 (qui inactive et dégrade p53) et E7 (qui inactive la protéine du rétinoblastome pRb)",
      "B) Les protéines Tat et Rev",
      "C) Les protéines NS3 et NS5A",
      "D) L'antigène HBs et HBe",
      "E) La neuraminidase et l'hémagglutinine"
    ],
    correctAnswers: [0],
    explanation: "L'oncoprotéine virale précoce E6 se lie à p53 et induit sa dégradation par le protéasome (inactivation de l'apoptose), tandis que la protéine E7 se lie à la protéine suppresseur de tumeur pRb et libère le facteur de transcription E2F, forçant la transition G1/S du cycle cellulaire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-23-05',
    courseId: 'crs-hemato-23',
    questionNumber: 5,
    type: 'QCM',
    content: "L'infection chronique par la bactérie Helicobacter pylori est classée comme cancérigène de classe 1 par le CIRC, responsable de :",
    options: [
      "A) L'adénocarcinome gastrique (non cardial) et le lymphome gastrique du MALT",
      "B) Le cancer du pancréas",
      "C) Le carcinome hépatocellulaire",
      "D) Le cancer du côlon ascendant",
      "E) Le cancer de la vessie"
    ],
    correctAnswers: [0],
    explanation: "Helicobacter pylori colonise la muqueuse gastrique et induit une gastrite chronique active évoluant vers l'atrophie gastrique, la métaplasie intestinale, la dysplasie et l'adénocarcinome gastrique (cascade de Correa), ainsi que le lymphome de la zone marginale de type MALT.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-06',
    courseId: 'crs-hemato-23',
    questionNumber: 6,
    type: 'QCM',
    content: "L'inhalation de fibres d'amiante (exposition professionnelle ou environnementale) est le principal facteur causal responsable de quelle tumeur pleurale maligne hautement spécifique ?",
    options: [
      "A) Le Mésothéliome pleural malin",
      "B) Le thymome invasif",
      "C) Le sarcome d'Ewing",
      "D) Le tératome kystique bénin",
      "E) L'hamartome chondroïde"
    ],
    correctAnswers: [0],
    explanation: "L'amiante est le facteur étiologique majeur quasi-exclusif (> 85%) du mésothéliome pleural malin (avec un temps de latence très long de 30 à 40 ans entre la première exposition et le diagnostic). L'amiante majore également le risque de carcinome broncho-pulmonaire (effet synergique avec le tabac).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-07',
    courseId: 'crs-hemato-23',
    questionNumber: 7,
    type: 'QCM',
    content: "Les rayonnements ultraviolets (UVB et UVA, exposition solaire naturelle ou cabines de bronzage artificiel) sont les facteurs environnementaux majeurs responsables de :",
    options: [
      "A) Les mélanomes cutanés et les carcinomes cutanés (carcinome basocellulaire et épidermoïde)",
      "B) Les sarcomes ostéogéniques",
      "C) Les leucémies lymphoïdes",
      "D) Les tumeurs cérébrales gliales",
      "E) Les hépatomes primitifs"
    ],
    correctAnswers: [0],
    explanation: "Les rayons UV provoquent des dimères de pyrimidines dans l'ADN des cellules cutanées (signature mutationnelle UV avec transitions C->T). Les coups de soleil intenses et intermittents pendant l'enfance favorisent le mélanome et le basocellulaire ; l'exposition chronique cumulée favorise le carcinome épidermoïde cutané.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-08',
    courseId: 'crs-hemato-23',
    questionNumber: 8,
    type: 'QCM',
    content: "Le radon (gaz radioactif naturel issu de la désintégration de l'uranium dans les roches granitiques s'accumulant dans les habitations mal ventilées) est :",
    options: [
      "A) La deuxième cause de cancer du poumon après le tabac (et première cause chez les non-fumeurs)",
      "B) Responsable du cancer de l'estomac",
      "C) Un gaz inoffensif",
      "D) Un traitement du cancer de la prostate",
      "E) Responsable uniquement de leucémies infantiles"
    ],
    correctAnswers: [0],
    explanation: "Le radon 222 est un cancérigène pulmonaire certain de classe 1 (CIRC) : en se désintégrant, il émet des particules alpha radioactives qui irradient l'épithélium bronchique lors de l'inhalation. Il est la 2e cause de cancer du poumon dans les régions granitiques (Bretagne, Massif Central).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-09',
    courseId: 'crs-hemato-23',
    questionNumber: 9,
    type: 'QCM',
    content: "L'exposition professionnelle aux poussières de bois chez les menuisiers et ébénistes est la cause majeure reconnue en maladie professionnelle de :",
    options: [
      "A) L'adénocarcinome de l'ethmoïde et des cavités naso-sinusiennes",
      "B) L'angiosarcome hépatique",
      "C) Le cancer de la verge",
      "D) L'ostéosarcome de la cheville",
      "E) Le carcinome médullaire de la thyroïde"
    ],
    correctAnswers: [0],
    explanation: "L'inhalation prolongée de poussières de bois (chêne, hêtre) est responsable de plus de 80% des adénocarcinomes de l'ethmoïde et des sinus paranasaux (tableau 47 des maladies professionnelles).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-10',
    courseId: 'crs-hemato-23',
    questionNumber: 10,
    type: 'QCM',
    content: "L'exposition professionnelle historique aux amines aromatiques (ex: benzidine, bêta-naphtylamine dans l'industrie des colorants et du caoutchouc) induit quel type de cancer ?",
    options: [
      "A) Le carcinome urothélial de la vessie",
      "B) Le glioblastome cérébral",
      "C) Le mélanome de l'œil",
      "D) Le sarcome de Kaposi",
      "E) Le cancer de l'ovaire"
    ],
    correctAnswers: [0],
    explanation: "Les amines aromatiques éliminées dans les urines exercent une action cancérigène directe prolongée sur la muqueuse urothéliale vésicale (tableau 15 des maladies professionnelles), représentant une cause classique de cancer de vessie avec le tabac.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-11',
    courseId: 'crs-hemato-23',
    questionNumber: 11,
    type: 'QCM',
    content: "La définition de la 'Prévention Primaire' en cancérologie correspond à :",
    options: [
      "A) L'ensemble des mesures visant à empêcher l'apparition du cancer en supprimant ou réduisant l'exposition aux facteurs de risque carcinogènes avérés",
      "B) Le dépistage des tumeurs asymptomatiques à un stade précoce",
      "C) La prise en charge de la douleur cancéreuse",
      "D) La radiothérapie post-opératoire",
      "E) Le soutien psychologique en fin de vie"
    ],
    correctAnswers: [0],
    explanation: "Niveaux de prévention : Prévention primaire = agir en amont avant l'apparition de la maladie en supprimant le risque (lutte contre le tabac, modération de l'alcool, vaccination anti-HPV, alimentation saine) ; Prévention secondaire = dépister précocement une lésion précancéreuse ou un cancer débutant (frottis/HPV, coloscopie, mammographie) ; Prévention tertiaire = éviter les récidives et séquelles.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-12',
    courseId: 'crs-hemato-23',
    questionNumber: 12,
    type: 'QCM',
    content: "Parmi les mesures de prévention primaire suivantes, laquelle constitue un vaccin anticancéreux direct efficace prévenant le cancer du col de l'utérus ?",
    options: [
      "A) Le vaccin nonavalent contre le Papillomavirus Humain (Gardasil 9)",
      "B) Le vaccin contre la rougeole",
      "C) Le BCG",
      "D) Le vaccin antigrippal",
      "E) Le vaccin antipoliomyélitique"
    ],
    correctAnswers: [0],
    explanation: "Le vaccin anti-HPV (Gardasil 9, ciblant les génotypes 6, 11, 16, 18, 31, 33, 45, 52, 58) administré aux jeunes filles et jeunes garçons entre 11 et 14 ans prévient plus de 90% des lésions précancéreuses et des cancers induits par l'HPV (col utérin, anus, vulve, vagin, oropharynx).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-13',
    courseId: 'crs-hemato-23',
    questionNumber: 13,
    type: 'QCM',
    content: "La vaccination contre quel virus permet de prévenir le développement du Carcinome Hépatocellulaire (cancer primitif du foie) ?",
    options: [
      "A) Le virus de l'Hépatite B (VHB)",
      "B) Le virus de l'Hépatite C",
      "C) Le virus de la rage",
      "D) Le virus de la grippe A",
      "E) Le virus respiratoire syncytial"
    ],
    correctAnswers: [0],
    explanation: "La vaccination universelle contre l'hépatite B (première cause de cancer du foie en Afrique et en Asie) a démontré pour la première fois dans l'histoire de la médecine une réduction spectaculaire de l'incidence du carcinome hépatocellulaire (modèle historique de Taïwan).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-14',
    courseId: 'crs-hemato-23',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans le dépistage organisé du cancer colorectal chez les personnes de 50 à 74 ans à risque moyen, le test de première ligne recommandé tous les 2 ans est :",
    options: [
      "A) Le test immunologique fécal de recherche de sang occulte dans les selles (test FIT)",
      "B) Le toucher rectal annuel",
      "C) Le scanner abdominal sans injection",
      "D) Le test au gaïac (Hémoccult II historique)",
      "E) L'échographie hépatique"
    ],
    correctAnswers: [0],
    explanation: "Le test immunologique fécal (FIT) détecte spécifiquement la présence d'hémoglobine humaine non dégradée dans les selles grâce à des anticorps monoclonaux. Il est beaucoup plus sensible, plus spécifique et plus simple (1 seul prélèvement) que l'ancien test au gaïac.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-15',
    courseId: 'crs-hemato-23',
    questionNumber: 15,
    type: 'QCM',
    content: "Si le test immunologique fécal de dépistage du cancer colorectal (test FIT) revient POSITIF, quelle est la conduite à tenir obligatoire ?",
    options: [
      "A) Réaliser une coloscopie totale sous anesthésie générale",
      "B) Refaire le test FIT le mois suivant",
      "C) Prescrire des laxatifs simples",
      "D) Débuter une chimiothérapie préventive",
      "E) Rassurer le patient et ne rien faire"
    ],
    correctAnswers: [0],
    explanation: "Un test immunologique positif indique la présence de sang microscopique dans les selles (retrouvant un polype adénomateux avancé dans 30-40% des cas et un cancer invasif dans 7-8% des cas). La coloscopie totale d'exploration est la suite obligatoire indispensable.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-16',
    courseId: 'crs-hemato-23',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans le dépistage organisé du cancer du col de l'utérus, quelle modalité est recommandée chez les femmes de 30 à 65 ans ?",
    options: [
      "A) Le test HPV-HR (recherche d'ADN de Papillomavirus Humain à haut risque) sur prélèvement cervico-utérin tous les 5 ans",
      "B) Le frottis cytologique tous les 10 ans",
      "C) La biopsie d'utérus annuelle",
      "D) L'échographie pelvienne annuelle",
      "E) Le scanner pelvien tous les 2 ans"
    ],
    correctAnswers: [0],
    explanation: "Selon les recommandations actuelles de l'HAS : entre 25 et 29 ans, le dépistage repose sur l'examen cytologique (frottis) tous les 3 ans après 2 frottis normaux à 1 an d'intervalle. De 30 à 65 ans, le test de choix en première intention est le test moléculaire HPV-HR tous les 5 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-17',
    courseId: 'crs-hemato-23',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans le dépistage organisé du cancer du sein chez les femmes de 50 à 74 ans sans facteur de risque personnel ou familial particulier, le protocole comprend :",
    options: [
      "A) Une mammographie bilatérale en double lecture (deux clichés par sein face et oblique externe) tous les 2 ans, associée à un examen clinique des seins",
      "B) Une IRM mammaire tous les 6 mois",
      "C) Une échographie isolée tous les 5 ans",
      "D) Une ponction systématique des seins",
      "E) Un dosage annuel du CA 15-3"
    ],
    correctAnswers: [0],
    explanation: "Le dépistage organisé national du cancer du sein invite les femmes asymptomatiques de 50 à 74 ans tous les 2 ans à bénéficier d'un examen clinique des seins et d'une mammographie bilatérale avec double lecture centralisée systématique (si le premier cliché est normal).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-18',
    courseId: 'crs-hemato-23',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelle mycotoxine produite par la moisissure Aspergillus flavus lors du stockage inadéquat de céréales et d'arachides dans les pays chauds est un cancérigène hépatique puissant (induisant une mutation spécifique de TP53 au codon 249) ?",
    options: [
      "A) L'Aflatoxine B1",
      "B) L'Ochratoxine A",
      "C) La Patuline",
      "D) La Zéaralénone",
      "E) La Fumonisine"
    ],
    correctAnswers: [0],
    explanation: "L'Aflatoxine B1 est une mycotoxine génotoxique majeure contaminant les stocks de maïs, sorgho et arachides dans les zones tropicales humides. Elle agit en synergie avec le virus de l'hépatite B pour induire des carcinomes hépatocellulaires par mutation transversale G:C -> T:A au codon 249 du gène TP53.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-23-19',
    courseId: 'crs-hemato-23',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans la polypose adénomateuse familiale (PAF), la mutation constitutionnelle du gène suppresseur de tumeur APC entraîne :",
    options: [
      "A) Le développement de centaines à milliers de polypes adénomateux colorectaux dès l'adolescence avec un risque de cancérisation de 100% avant l'âge de 40 ans en l'absence de colectomie prophylactique",
      "B) Uniquement des polypes gastriques bénins",
      "C) Une absence totale de risque de cancer colique",
      "D) Un cancer du rein bilatéral",
      "E) Une anémie hémolytique congénitale"
    ],
    correctAnswers: [0],
    explanation: "La PAF (mutation autosomique dominante du gène APC sur le chromosome 5q21) est le modèle d'oncogenèse colorectale : le risque de transformation maligne d'au moins un des innombrables adénomes en adénocarcinome est inéluctable (100% à 40 ans), imposant une colo-proctectomie totale prophylactique précoce.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-20',
    courseId: 'crs-hemato-23',
    questionNumber: 20,
    type: 'QCM',
    content: "Le syndrome de Lynch (ou HNPCC : Hereditary Non-Polyposis Colorectal Cancer) est lié à une mutation constitutionnelle des gènes du système de réparation des mésappariements de l'ADN (MMR : MLH1, MSH2, MSH6, PMS2) et expose particulièrement aux cancers de :",
    options: [
      "A) Le côlon (à prédominance colique droite survenant à un âge jeune) et l'endomètre chez la femme",
      "B) La thyroïde et la parathyroïde",
      "C) La rétine et l'os",
      "D) Le testicule et la prostate",
      "E) La peau mélanocytaire uniquement"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Lynch (transmission autosomique dominante) expose à un risque majeur de cancer colorectal (souvent côlon droit, survenant vers 45 ans, phénotype MSI) et de cancer de l'endomètre (2e cancer le plus fréquent chez la femme atteinte), ainsi que de l'estomac, des voies urinaires excrétrices et de l'ovaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-21',
    courseId: 'crs-hemato-23',
    questionNumber: 21,
    type: 'QCM',
    content: "Le parasite bilharzien Schistosoma haematobium (endémique en Afrique et au Moyen-Orient) provoque une bilharziose urogénitale chronique responsable de :",
    options: [
      "A) Carcinome épidermoïde de la vessie",
      "B) Carcinome rénal à cellules claires",
      "C) Tératome ovarien",
      "D) Lymphome hodgkinien",
      "E) Cancer de la verge"
    ],
    correctAnswers: [0],
    explanation: "Les œufs de Schistosoma haematobium pondus dans la paroi vésicale provoquent une inflammation granulomateuse chronique sévère avec métaplasie malpighienne, responsable de carcinomes épidermoïdes de la vessie (contrairement aux carcinomes urothéliaux classiques liés au tabac).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-22',
    courseId: 'crs-hemato-23',
    questionNumber: 22,
    type: 'QCM',
    content: "L'obésité et le surpoids (indice de masse corporelle élevé) sont des facteurs de risque démontrés pour plusieurs cancers, particulièrement :",
    options: [
      "A) Le cancer de l'endomètre, le cancer du sein post-ménopausique et le cancer colorectal",
      "B) Le mésothéliome pleural",
      "C) Le glioblastome",
      "D) Le sarcome d'Ewing",
      "E) Le rétinoblastome"
    ],
    correctAnswers: [0],
    explanation: "L'adiposité excessive majore la synthèse périphérique d'œstrogènes par l'aromatase, l'hyperinsulinisme et l'état inflammatoire chronique de bas grade, augmentant significativement le risque de cancer de l'endomètre (risque multiplié par 3 à 5), de cancer du sein après la ménopause, de cancer colorectal et d'adénocarcinome de l'œsophage.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-23',
    courseId: 'crs-hemato-23',
    questionNumber: 23,
    type: 'QCM',
    content: "Quelle intervention chirurgicale prophylactique de réduction du risque est formellement proposée aux femmes porteuses d'une mutation constitutionnelle des gènes BRCA1 ou BRCA2 vers l'âge de 40 ans ?",
    options: [
      "A) L'annexectomie bilatérale prophylactique (ablation préventive des deux ovaires et des trompes de Fallope)",
      "B) Une gastrectomie totale",
      "C) Une thyroïdectomie préventive",
      "D) Une néphrectomie partielle",
      "E) Une splénectomie systématique"
    ],
    correctAnswers: [0],
    explanation: "L'annexectomie bilatérale prophylactique vers 40 ans (dès que le projet parental est accompli) réduit de plus de 90% le risque de cancer de l'ovaire/trompe (qui ne dispose d'aucun dépistage efficace) et réduit de 50% le risque de cancer du sein chez les femmes mutées BRCA.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-24',
    courseId: 'crs-hemato-23',
    questionNumber: 24,
    type: 'QCM',
    content: "La consommation régulière de viandes transformées (charcuterie, viandes fumées ou salées) a été classée dans le Groupe 1 (cancérogène certain pour l'homme) par le CIRC en raison de l'augmentation du risque de :",
    options: [
      "A) Cancer colorectal",
      "B) Cancer du cerveau",
      "C) Cancer des os",
      "D) Cancer de la thyroïde",
      "E) Mélanome de la peau"
    ],
    correctAnswers: [0],
    explanation: "Les viandes transformées contiennent des nitrites, des composés N-nitrosés et du fer héminique qui favorisent la peroxydation lipidique et des mutations de l'ADN colique, augmentant de façon dose-dépendante le risque d'adénocarcinome colorectal.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-25',
    courseId: 'crs-hemato-23',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans les critères d'Amsterdam II utilisés pour identifier les familles suspectes de syndrome de Lynch, quelle règle mnémotechnique ('règle du 3-2-1') doit être réunie ?",
    options: [
      "A) Au moins 3 sujets atteints de cancer du spectre étroit de Lynch, unis par des liens de parenté au 1er degré sur au moins 2 générations successives, avec au moins 1 cancer diagnostiqué avant l'âge de 50 ans",
      "B) 3 polypes seulement",
      "C) 3 enfants atteints dans une même fratrie",
      "D) 2 cancers du sein et 1 cancer de l'ovaire",
      "E) 1 tumeur cérébrale et 2 cancers du poumon"
    ],
    correctAnswers: [0],
    explanation: "Critères d'Amsterdam II (règle 3-2-1-0) : 3 apparentés atteints d'un cancer du spectre (côlon, endomètre, grêle, urothélium), dont 1 uni au premier degré aux deux autres ; sur au moins 2 générations consécutives ; au moins 1 diagnostiqué avant 50 ans ; et 0 polyposis (exclusion d'une PAF).",
    difficulty: 'moyen'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-23-cs1',
    courseId: 'crs-hemato-23',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un artisan menuisier de 58 ans sans antécédent tabagique consulte pour une obstruction nasale unilatérale droite d'apparition progressive depuis 4 mois avec épistaxis récidivantes et anosmie. L'examen tomodensitométrique retrouve une masse invasive comblant les cellules ethmoïdales droites avec érosion de la lame criblée. La biopsie confirme un adénocarcinome de l'ethmoïde.\n\nQuelle est l'origine professionnelle de ce cancer et quelle démarche médicolégale doit être initiée ?",
    options: [
      "A) Exposition professionnelle prolongée aux poussières de bois ; Déclaration obligatoire en maladie professionnelle (Tableau n°47 du régime général)",
      "B) Exposition accidentelle au plomb sans rapport avec le travail",
      "C) Tumeur génétique héréditaire pure",
      "D) Infection virale saisonnière",
      "E) Simple polype inflammatoire bénin"
    ],
    correctAnswers: [0],
    explanation: "L'adénocarcinome de l'ethmoïde est le cancer professionnel sentinelle classique lié à l'inhalation de poussières de bois chez les ébénistes et menuisiers. Il est indemnisé au titre du tableau 47 des maladies professionnelles.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-cs2',
    courseId: 'crs-hemato-23',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Un ancien ouvrier du bâtiment et de l'isolation thermique de 64 ans consulte pour une dyspnée d'effort d'aggravation rapide et des douleurs thoraciques en hémi-ceinture. La radiographie et le scanner thoracique retrouvent un épaississement pleural diffus festonné mamelonné unilatéral gauche engainant le poumon avec rétraction de l'hémithorax et plaques pleurales calcifiées bilatérales. La biopsie pleurale sous thoracoscopie confirme un mésothéliome pleural malin.\n\nQuel cancérogène environnemental et professionnel est formellement incriminé ?",
    options: [
      "A) L'amiante (fibres d'asbeste)",
      "B) La silice cristalline",
      "C) Le chlorure de vinyle",
      "D) Le mercure",
      "E) Le monoxyde de carbone"
    ],
    correctAnswers: [0],
    explanation: "Le mésothéliome pleural est la tumeur signature de l'inhalation d'amiante (temps de latence typique de 30 à 40 ans). La présence de plaques pleurales fibro-calcifiées bilatérales en 'ailes de papillon' signe l'exposition passée à l'amiante (Tableau 30 des maladies professionnelles).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-cs3',
    courseId: 'crs-hemato-23',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une femme de 32 ans sans antécédent consulte pour un frottis de dépistage. Le test HPV-HR revient POSITIF pour le génotype 16. La colposcopie avec biopsie retrouve une lésion intra-épithéliale de haut grade du col utérin (CIN 3 / néoplasie intra-épithéliale cervicale de grade 3).\n\nQuel est le mécanisme viral oncogénique et quel est le geste thérapeutique curatif de prévention du cancer invasif ?",
    options: [
      "A) Intégration de l'ADN du virus HPV 16 dans le génome de l'hôte avec surexpression des oncoprotéines E6 et E7 ; Conisation chirurgicale à visée diagnostique et thérapeutique sous contrôle colposcopique",
      "B) Hystérectomie totale élargie d'emblée",
      "C) Chimiothérapie systémique par cisplatine",
      "D) Simple abstention et surveillance annuelle sans traitement",
      "E) Radiothérapie pelvienne externe"
    ],
    correctAnswers: [0],
    explanation: "L'oncoprotéine E6 dégrade p53 et E7 inactive pRb, entraînant une prolifération anormale du tiers supérieur de l'épithélium (CIN 3). La conisation (exérèse chirurgicale conservatrice de la zone de jonction) permet de retirer la lésion précancéreuse et d'éviter son évolution vers un cancer épidermoïde invasif.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-cs4',
    courseId: 'crs-hemato-23',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un homme de 54 ans asymptomatique réalise son test immunologique fécal de dépistage (test FIT) dans le cadre de la campagne nationale. Le résultat revient positif. La coloscopie totale retrouve un polype sessile de 22 mm du côlon sigmoïde réséqué par mucosectomie complète. L'analyse histopathologique retrouve un adénome tubulo-villeux avec dysplasie de haut grade sans franchissement de la membrane basale (marges saines R0).\n\nQuelle est la qualification de cette intervention ?",
    options: [
      "A) Dépistage et traitement d'une lésion précancéreuse avancée (prévention secondaire efficace évitant l'apparition d'un adénocarcinome invasif)",
      "B) Traitement palliatif d'un cancer métastatique",
      "C) Erreur médicale d'indication",
      "D) Traitement d'une diverticulite simple",
      "E) Simple surveillance sans valeur"
    ],
    correctAnswers: [0],
    explanation: "C'est l'objectif majeur du dépistage du cancer colorectal : retirer les adénomes précancéreux à dysplasie de haut grade avant qu'ils ne se transforment en cancer invasif (séquence adénome-carcinome), brisant ainsi la chaîne de cancérisation.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-23-cs5',
    courseId: 'crs-hemato-23',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Une femme de 35 ans consulte car sa mère a présenté un cancer du sein à 42 ans et sa grand-mère maternelle est décédée d'un cancer de l'ovaire à 48 ans. La consultation d'oncogénétique retrouve une mutation délétère constitutionnelle hétérozygote du gène BRCA1.\n\nQuel protocole de dépistage mammaire annuel doit être débuté immédiatement chez cette patiente ?",
    options: [
      "A) Surveillance mammaire renforcée annuelle alternant IRM mammaire et mammographie/échographie dès l'âge de 30 ans",
      "B) Aucun dépistage avant 50 ans",
      "C) Palpation simple tous les 5 ans",
      "D) Scanner TAP tous les 3 mois",
      "E) Ponction systématique des deux seins"
    ],
    correctAnswers: [0],
    explanation: "Chez les femmes porteuses d'une mutation BRCA1 (risque de cancer du sein cumulé de 60-80% à 70 ans), le protocole de suivi renforcé débute dès l'âge de 30 ans par une IRM mammaire annuelle associée à une mammographie numérique et échographie mammaire.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_23_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-23-01',
    courseId: 'crs-hemato-23',
    type: 'resume',
    title: "Mind Map Synthèse : Facteurs de Risque des Cancers & Prévention",
    contentMarkdown: `# Mind Map : Facteurs de Risque & Prévention (Dr M.A. Melzi)

\`\`\`
                                  CANCÉROGÈNES & PRÉVENTION
                                              │
         ┌──────────────────┬─────────────────┼─────────────────┬──────────────────┐
         ▼                  ▼                 ▼                 ▼                  ▼
TOXIQUES & MODE DE VIE  AGENTS INFECTIEUX   EXPOSITIONS PRO   RAYONNEMENTS        NIVEAUX PRÉVENTION
- **Tabac** : 1ère cause   - **HPV 16, 18** : - **Amiante** :   - **UVB/UVA** :    - **Primaire** :
  évitable (85% poumon)     Col, anus, ORL     Mésothéliome,      Mélanome,          Éviction toxique,
- **Alcool** : Synergie     ➔ E6 (p53),        Poumon             Carcinomes         Vaccin HPV / VHB
  multiplicative avec       E7 (pRb)          - **Bois** :      - **Radon 222** :  - **Secondaire** :
  tabac (VADS, œsophage)  - **H. pylori** :    Adéno-ethmoïde     2e cause poumon    Dépistage précoce
- Obésité : Sein post-      Estomac, MALT     - **Amines** :    - **Radiations** :   (FIT, FCV, Mammo)
  ménopause, endomètre    - **VHB / VHC** :    Vessie             Leucémies,       - **Tertiaire** :
                          Carcinome foie                          Thyroïde           Récidives/séquelles
\`\`\`

## Dépistages Organisés :
1. **Cancer Colorectal** : Test immunologique fécal (**test FIT**) tous les 2 ans de 50 à 74 ans. Si positif ➔ **Coloscopie totale**.
2. **Cancer du Sein** : **Mammographie bilatérale** tous les 2 ans de 50 à 74 ans (double lecture).
3. **Cancer du Col Utérin** : **Test HPV-HR** tous les 5 ans de 30 à 65 ans (ou frottis tous les 3 ans de 25 à 29 ans).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-23-02',
    courseId: 'crs-hemato-23',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Cancérogènes & Dépistages",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Alcool + Tabac** :
   - Risque MULTIPLICATIF (pas seulement additif) dans les cancers des VADS et de l'œsophage.
2. **Oncoprotéines de l'HPV** :
   - **E6** dégrade **p53**.
   - **E7** inactive **pRb**.
3. **Cancers professionnels emblématiques** :
   - Amiante = Mésothéliome pleural.
   - Poussières de bois = Adénocarcinome de l'ethmoïde.
   - Amines aromatiques = Carcinome urothélial vésical.
4. **Dépistage du cancer du col de l'utérus** :
   - De 30 à 65 ans : **Test HPV-HR tous les 5 ans** (le frottis n'est plus en première ligne après 30 ans !).
5. **Syndrome de Lynch (Amsterdam II : 3-2-1)** :
   - 3 sujets atteints, 2 générations consécutives, 1 diagnostiqué avant 50 ans.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 24: CARCINOGÉNÈSE - BASES MOLÉCULAIRES, ONCOGÈNES & IMMUNITÉ
// ==========================================
export const HEMATO_LESSON_24_QUESTIONS: Question[] = [
  {
    id: 'q-hem-24-01',
    courseId: 'crs-hemato-24',
    questionNumber: 1,
    type: 'QCM',
    content: "Les trois étapes chronologiques fondamentales de la carcinogénèse chimique et biologique sont :",
    options: [
      "A) Initiation, Promotion, et Progression tumorale",
      "B) Infection, Nécrose et Cicatrisation",
      "C) Hypertrophie, Atrophie et Métaplasie",
      "D) Inflammation, Exsudation et Fibrose",
      "E) Mutation, Transcription et Traduction"
    ],
    correctAnswers: [0],
    explanation: "La carcinogénèse se déroule en 3 phases successives : 1. L'Initiation (lésion rapide et irréversible de l'ADN par un agent mutagène initiateur) ; 2. La Promotion (multiplication clonale réversible des cellules initiées sous l'effet d'agents promoteurs) ; 3. La Progression (accumulation irréversible d'anomalies génétiques conférant l'invasion et les métastases).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-02',
    courseId: 'crs-hemato-24',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans l'étape d'INITIATION tumorale, l'altération génétique induite au niveau de la cellule cible est :",
    options: [
      "A) Une mutation irréversible de l'ADN transmise aux cellules filles",
      "B) Une anomalie membranaire transitoire spontanément réversible",
      "C) Une simple déshydratation cytoplasmique",
      "D) Une modification de la pression osmotique",
      "E) Une activation transitoire de la glycolyse sans lésion génomique"
    ],
    correctAnswers: [0],
    explanation: "L'initiation correspond à une mutation génétique somatique définitive et irréversible de l'ADN d'une cellule souche par un carcinogène génotoxique (radiation, tabac, mutagène chimique), qui reste silencieuse tant qu'aucun stimulus de promotion n'intervient.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-03',
    courseId: 'crs-hemato-24',
    questionNumber: 3,
    type: 'QCM',
    content: "Quelle est la caractéristique fondamentale distinguant l'étape de PROMOTION de celle de l'initiation ?",
    options: [
      "A) La promotion est une phase prolongée et potentiellement RÉVERSIBLE lors de l'arrêt de l'agent promoteur",
      "B) La promotion est instantanée en quelques secondes",
      "C) La promotion induit de nouvelles mutations génomiques directes",
      "D) La promotion s'accompagne obligatoirement de métastases à distance",
      "E) La promotion ne nécessite aucune cellule initiée"
    ],
    correctAnswers: [0],
    explanation: "L'étape de promotion résulte de l'exposition prolongée et répétée à des agents non mutagènes (alcool, œstrogènes, inflammation chronique) qui stimulent la prolifération sélective du clone initié. Tant que le seuil de progression n'est pas franchi, l'arrêt de l'agent promoteur permet la régression ou la stabilisation du clone.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-04',
    courseId: 'crs-hemato-24',
    questionNumber: 4,
    type: 'QCM',
    content: "Les PROTO-ONCOGÈNES se transforment en ONCOGÈNES actifs par quel type de mutation génétique ?",
    options: [
      "A) Une mutation 'gain de fonction' dominante (l'altération d'un seul allèle suffit à conférer un phénotype tumoral prolifératif)",
      "B) Une mutation perte de fonction récessive nécessitant l'inactivation des deux allèles",
      "C) Une délétion chromosomique homozygote systématique",
      "D) Une absence de transcription",
      "E) Une mutation silencieuse sans traduction"
    ],
    correctAnswers: [0],
    explanation: "Les proto-oncogènes (qui stimulent physiologiquement la croissance cellulaire) sont activés en oncogènes par mutation gain de fonction dominante (mutation ponctuelle, amplification génique, ou translocation chromosomique activatrice) : un seul allèle muté accélère la prolifération de façon autonome.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-05',
    courseId: 'crs-hemato-24',
    questionNumber: 5,
    type: 'QCM',
    content: "Parmi les gènes suivants, lequel est un ONCOGÈNE (et non un gène suppresseur de tumeur) ?",
    options: [
      "A) Le gène KRAS (famille des GTPases RAS)",
      "B) Le gène TP53",
      "C) Le gène RB1",
      "D) Le gène APC",
      "E) Le gène BRCA1"
    ],
    correctAnswers: [0],
    explanation: "KRAS est un proto-oncogène majeur codant pour une petite protéine G membranaire à activité GTPase. Les mutations aux codons 12, 13 ou 61 bloquent KRAS sous sa forme active liée au GTP, envoyant des signaux continus de prolifération (voie MAPK). TP53, RB1, APC et BRCA1 sont des suppresseurs de tumeurs.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-06',
    courseId: 'crs-hemato-24',
    questionNumber: 6,
    type: 'QCM',
    content: "L'inactivation des GÈNES SUPPRESSEURS DE TUMEURS (antioncogènes) obéit classiquement à quel modèle génétique ?",
    options: [
      "A) L'hypothèse des 'deux coups' de Knudson (Two-Hit Hypothesis) : perte de fonction récessive au niveau cellulaire nécessitant l'inactivation successive des deux allèles",
      "B) Un mécanisme dominant autosomique simple",
      "C) Une suractivation enzymatique",
      "D) Une amplification génique en doublets",
      "E) Une activation par phosphorylation"
    ],
    correctAnswers: [0],
    explanation: "Alfred Knudson a démontré (modèle du rétinoblastome) que les gènes suppresseurs de tumeurs agissent de manière récessive au niveau de la cellule : les deux allèles doivent être inactivés (premier 'hit' constitutionnel ou somatique, puis deuxième 'hit' par mutation, délétion ou méthylation) pour que le frein antiprolifératif saute.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-07',
    courseId: 'crs-hemato-24',
    questionNumber: 7,
    type: 'QCM',
    content: "La protéine p53 (codée par le gène TP53 sur le chromosome 17p), surnommée le 'gardien du génome', exerce son rôle protecteur clé en :",
    options: [
      "A) Bloquant le cycle cellulaire en phase G1 (via p21) pour permettre la réparation de l'ADN lésé, ou en déclenchant l'apoptose (via BAX) si les dommages sont irréparables",
      "B) Stimulant la division cellulaire rapide",
      "C) Inhibant la transcription de l'ARN ribosomal",
      "D) Activant la synthèse de mélanine",
      "E) Empêchant la fixation de l'insuline"
    ],
    correctAnswers: [0],
    explanation: "En cas de stress génotoxique (cassure de l'ADN), p53 s'accumule et active le facteur de transcription p21 (inhibiteur de CDK), arrêtant le cycle cellulaire en G1/S pour laisser le temps aux enzymes de réparer l'ADN. Si les lésions sont trop sévères, p53 active la voie mitochondriale de l'apoptose (BAX, PUMA). Sa mutation dans plus de 50% des cancers humains permet la survie des cellules mutées.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-08',
    courseId: 'crs-hemato-24',
    questionNumber: 8,
    type: 'QCM',
    content: "Le syndrome héréditaire de Li-Fraumeni (prédisposition familiale autosomique dominante à de multiples cancers précoces : sarcomes, cancers du sein, leucémies, tumeurs cérébrales) est causé par une mutation constitutionnelle de :",
    options: [
      "A) TP53",
      "B) APC",
      "C) VHL",
      "D) RET",
      "E) NF1"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Li-Fraumeni est dû à une mutation germinale hétérozygote de TP53. Les sujets porteurs ont un risque supérieur à 90% de développer divers cancers au cours de leur vie, souvent dès l'enfance ou chez l'adulte jeune.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-09',
    courseId: 'crs-hemato-24',
    questionNumber: 9,
    type: 'QCM',
    content: "La protéine du rétinoblastome (pRb, codée par le gène RB1 sur le chromosome 13q14) contrôle le passage du point de restriction G1/S du cycle cellulaire en :",
    options: [
      "A) Séquestrant et inactivant le facteur de transcription E2F sous sa forme hypophosphorylée",
      "B) Activant directement la polymérase de l'ADN",
      "C) Détruisant les lysosomes cytoplasmiques",
      "D) Phosphorylant l'histone H1",
      "E) Dégradant la cycline B"
    ],
    correctAnswers: [0],
    explanation: "Sous forme hypophosphorylée active, pRb se lie au facteur E2F et bloque la transcription des gènes nécessaires à la synthèse de l'ADN (phase S). Lorsque pRb est phosphorylée par les complexes Cycline D / CDK4/6, elle libère E2F, autorisant l'entrée en phase S.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-10',
    courseId: 'crs-hemato-24',
    questionNumber: 10,
    type: 'QCM',
    content: "La 'limite de Hayflick' (sénescence réplicative normale limitant les divisions des cellules saines) est contournée par les cellules cancéreuses immortelles principalement grâce à :",
    options: [
      "A) La réactivation de la Télomérase (maintien de la longueur des télomères aux extrémités des chromosomes)",
      "B) La destruction des mitochondries",
      "C) La perte des ribosomes",
      "D) L'inactivation de la membrane nucléaire",
      "E) La transformation en érythrocytes"
    ],
    correctAnswers: [0],
    explanation: "À chaque division cellulaire, les télomères se raccourcissent jusqu'à une taille critique déclenchant la sénescence ou la crise mitotique. Plus de 90% des cellules cancéreuses réactivent l'enzyme ribonucléoprotéique Télomérase (hTERT), restaurant les télomères et acquérant un potentiel réplicatif illimité (immortalité).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-11',
    courseId: 'crs-hemato-24',
    questionNumber: 11,
    type: 'QCM',
    content: "Le métabolisme des cellules cancéreuses est profondément reprogrammé selon l'effet Warburg (glycolyse aérobie), qui consiste en :",
    options: [
      "A) Une consommation massive de glucose métabolisé préférentiellement en lactate même en présence d'oxygène abondant, fournissant les précurseurs carbonés nécessaires à la synthèse de macromolécules (lipides, acides nucléiques)",
      "B) Une dépendance exclusive aux acides gras sans consommer de glucose",
      "C) Une absence totale de production d'ATP",
      "D) Une synthèse excessive de glycogène intracellulaire de réserve",
      "E) Une fixation directe de l'azote de l'air"
    ],
    correctAnswers: [0],
    explanation: "Otto Warburg a découvert que les cellules cancéreuses privilégient la glycolyse cytosolique avec fermentation lactique au détriment de la phosphorylation oxydative mitochondriale, même en aérobiose ('glycolyse aérobie'). Cette adaptation fournit des intermédiaires carbonés cruciaux pour la biogenèse de nouvelles cellules et explique la forte captation du FDG en TEP-scan.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-12',
    courseId: 'crs-hemato-24',
    questionNumber: 12,
    type: 'QCM',
    content: "Le 'switch angiogénique' permettant à une tumeur microscopique avasculaire de dépasser la taille critique de 1 à 2 mm repose sur :",
    options: [
      "A) L'hypoxie tumorale activant le facteur HIF-1alpha qui stimule la sécrétion de facteurs pro-angiogéniques comme le VEGF (Vascular Endothelial Growth Factor)",
      "B) La disparition des vaisseaux sanguins de l'hôte",
      "C) La vasoconstriction artériolaire continue",
      "D) Une coagulation immédiate des capillaires",
      "E) Une baisse de la perméabilité endothéliale"
    ],
    correctAnswers: [0],
    explanation: "Au-delà de 1 à 2 mm, la diffusion de l'oxygène ne suffit plus. L'hypoxie stabilise le facteur de transcription HIF-1alpha (qui n'est plus dégradé par le complexe VHL), déclenchant la transcription massive de VEGF-A et de bFGF, induisant le bourgeonnement de nouveaux néo-vaisseaux anarchiques et perméables.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-13',
    courseId: 'crs-hemato-24',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans le processus métastatique, la transition épithélio-mésenchymateuse (TEM) est caractérisée au niveau moléculaire par :",
    options: [
      "A) La perte de l'E-cadhérine (perte de la cohésion cellulaire inter-épithéliale) et l'acquisition de marqueurs mésenchymateux (Vimentine, N-cadhérine) conférant motilité et invasivité",
      "B) Une augmentation de l'adhésion cellule-cellule",
      "C) Une disparition totale du cytosquelette",
      "D) Une synthèse accrue de kératine",
      "E) L'arrêt des divisions cellulaires"
    ],
    correctAnswers: [0],
    explanation: "La TEM est l'étape clé par laquelle une cellule épithéliale cancéreuse perd sa polarité et ses jonctions intercellulaires adhérentes (extinction de l'E-cadhérine par des facteurs de transcription tels que Snail, Slug, Twist), acquérant un phénotype mésenchymateux mobile capable de migrer à travers la matrice extracellulaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-14',
    courseId: 'crs-hemato-24',
    questionNumber: 14,
    type: 'QCM',
    content: "Le concept des 'Hallmarks of Cancer' (Hanahan et Weinberg) regroupe les capacités biologiques acquises par les cellules au cours du développement tumoral. Parmi les suivantes, laquelle fait partie des 'hallmarks émergents' ajoutés en 2011 ?",
    options: [
      "A) L'échappement à la destruction par le système immunitaire et la reprogrammation du métabolisme énergétique",
      "B) La diminution de la fréquence respiratoire",
      "C) La perte de la pigmentation cutanée",
      "D) L'hypothyroïdie spontanée",
      "E) La calcification rénale"
    ],
    correctAnswers: [0],
    explanation: "En 2011, Hanahan et Weinberg ont enrichi les 6 capacités initiales de 2 capacités émergentes fondamentales : l'échappement au système immunitaire (immuno-évasion) et la dérégulation du métabolisme énergétique cellulaire (effet Warburg), ainsi que 2 caractéristiques facilitatrices : l'instabilité génomique et l'inflammation favorisant les tumeurs.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-15',
    courseId: 'crs-hemato-24',
    questionNumber: 15,
    type: 'QCM',
    content: "Les lymphocytes T cytotoxiques (CD8+) et les cellules Natural Killer (NK) éliminent les cellules tumorales principalement par :",
    options: [
      "A) La libération de perforine et de granzymes induisant la perméabilisation membranaire et l'apoptose, et la voie Fas / Fas-Ligand",
      "B) La phagocytose par endocytose acide directe",
      "C) La sécrétion d'acide chlorhydrique extracellulaire",
      "D) La neutralisation par agglutination mécanique",
      "E) La coagulation du sang intratumoral"
    ],
    correctAnswers: [0],
    explanation: "La cytotoxicité des lymphocytes T CD8+ et des cellules NK repose sur l'exocytose polarisée de granules cytotoxiques contenant de la perforine (qui crée des pores dans la membrane de la cellule cible) et des granzymes (protéases clivant les caspases et activant l'apoptose), ainsi que sur la voie récepteur-ligand de mort FasL/Fas.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-16',
    courseId: 'crs-hemato-24',
    questionNumber: 16,
    type: 'QCM',
    content: "Par quel mécanisme majeur d'échappement immunitaire les cellules cancéreuses empêchent-elles les lymphocytes T cytotoxiques CD8+ de les reconnaître via leur TCR ?",
    options: [
      "A) La perte ou la sous-expression des molécules du Complexe Majeur d'Histocompatibilité de classe I (CMH-I / HLA-A, B, C)",
      "B) La surexpression d'hémoglobine",
      "C) La perte des mitochondries",
      "D) L'excrétion d'acide urique",
      "E) La destruction des immunoglobulines G circulantes"
    ],
    correctAnswers: [0],
    explanation: "Pour être reconnue par un lymphocyte T CD8+, la cellule tumorale doit présenter des néo-antigènes peptidiques sur ses molécules HLA de classe I. De nombreuses tumeurs échappent à ce contrôle en perdant l'expression de la chaîne lourde HLA ou de la bêta-2 microglobuline, devenant 'invisibles' aux lymphocytes T (mais plus sensibles aux cellules NK !).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-17',
    courseId: 'crs-hemato-24',
    questionNumber: 17,
    type: 'QCM',
    content: "La liaison du ligand tumoral PD-L1 (Programmed Death-Ligand 1) sur le récepteur inhibiteur PD-1 des lymphocytes T infiltrant la tumeur induit :",
    options: [
      "A) L'épuisement lymphocytaire ('exhaustion') avec blocage de la cytotoxicité et de la sécrétion d'IL-2 et d'interféron gamma",
      "B) Une activation brutale de la prolifération lymphocytaire",
      "C) La destruction immédiate de la cellule cancéreuse",
      "D) Une transformation des lymphocytes T en polynucléaires",
      "E) Une activation du complément"
    ],
    correctAnswers: [0],
    explanation: "La fixation de PD-L1 sur PD-1 transmet un signal intracellulaire inhibiteur via les phosphatases SHP-1/2 qui déphosphorylent les kinases activatrices du TCR, induisant un état d'anergie et d'épuisement fonctionnel des lymphocytes T antitumoraux.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-18',
    courseId: 'crs-hemato-24',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans le microenvironnement tumoral immunosuppresseur, quelles cellules immunitaires régulatrices sont recrutées par la tumeur pour inhiber activement la réponse immunitaire cytotoxique ?",
    options: [
      "A) Les lymphocytes T régulateurs (Treg CD4+ CD25+ FoxP3+) et les cellules myéloïdes suppressives (MDSC)",
      "B) Les polynucléaires neutrophiles matures uniquement",
      "C) Les plaquettes sanguines",
      "D) Les érythroblastes basophiles",
      "E) Les ostéoblastes"
    ],
    correctAnswers: [0],
    explanation: "La tumeur sécrète des chimiokines (CCL22) et des cytokines immunosuppressives (TGF-bêta, IL-10) attirant des lymphocytes Treg (FoxP3+) et des MDSC qui bloquent l'activité des lymphocytes T cytotoxiques et des cellules dendritiques.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-19',
    courseId: 'crs-hemato-24',
    questionNumber: 19,
    type: 'QCM',
    content: "L'enzyme indoleamine 2,3-dioxygénase (IDO) surexprimée dans le microenvironnement tumoral participe à l'immunosuppression en :",
    options: [
      "A) Dégradant le tryptophane (acide aminé essentiel pour les lymphocytes T) en kynurénines toxiques pour les cellules effectrices",
      "B) Synthétisant du glucose à partir d'acides gras",
      "C) Détruisant l'ADN des globules rouges",
      "D) Fixant l'oxygène tissulaire",
      "E) Neutralisant la thrombine"
    ],
    correctAnswers: [0],
    explanation: "L'IDO catabolise le tryptophane local en kynurénine. La déplétion en tryptophane affame les lymphocytes T et bloque leur cycle cellulaire, tandis que les métabolites de la kynurénine induisent l'apoptose des lymphocytes T et la différenciation des Treg régulateurs.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-20',
    courseId: 'crs-hemato-24',
    questionNumber: 20,
    type: 'QCM',
    content: "La théorie des '3 E' de l'immuno-édition tumorale (Schreiber) décrit l'évolution chronologique des interactions entre système immunitaire et tumeur sous les 3 phases :",
    options: [
      "A) Élimination, Équilibre, et Échappement (Escape)",
      "B) Extension, Excision, et Éradication",
      "C) Érythème, Exsudat, et Érosion",
      "D) Évolution, Envahissement, et Embolie",
      "E) Exposition, Évaluation, et Efficacité"
    ],
    correctAnswers: [0],
    explanation: "Les 3 phases de l'immunoediting : 1. Élimination (immunosurveillance : destruction réussie des cellules transformées naissantes) ; 2. Équilibre (dormance tumorale : le système immunitaire contrôle la tumeur sans l'éradiquer, exerçant une pression de sélection) ; 3. Échappement (émergence de variants résistants insensibles au système immunitaire formant un cancer clinique).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-21',
    courseId: 'crs-hemato-24',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans la maladie de von Hippel-Lindau (VHL), la mutation perte de fonction du gène suppresseur de tumeur VHL empêche la dégradation physiologique en normoxie de :",
    options: [
      "A) HIF-1alpha (Hypoxia-Inducible Factor 1-alpha)",
      "B) La bêtacaténine",
      "C) La cycline D1",
      "D) La kinase Akt",
      "E) La topoisomérase II"
    ],
    correctAnswers: [0],
    explanation: "La protéine pVHL fait partie d'une ubiquitine-ligase qui cible HIF-1alpha pour la dégradation protéasomique en présence d'oxygène. L'inactivation de VHL stabilise faussement HIF-1alpha en permanence (pseudo-hypoxie), stimulant la sécrétion massive de VEGF et PDGF (carcinomes rénaux à cellules claires hypervascularisés, hémangioblastomes du cervelet).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-22',
    courseId: 'crs-hemato-24',
    questionNumber: 22,
    type: 'QCM',
    content: "Dans la voie de signalisation Wnt / Bêta-caténine, la protéine APC normale a pour fonction de :",
    options: [
      "A) Former un complexe de destruction phosphorylant la bêta-caténine pour induire sa dégradation protéasomique en l'absence de signal Wnt",
      "B) Activer la transcription de Myc directement",
      "C) Transporter l'oxygène dans les cellules",
      "D) Phosphoryler le récepteur de l'EGF",
      "E) Synthétiser des immunoglobulines"
    ],
    correctAnswers: [0],
    explanation: "Le gène suppresseur APC fait partie du complexe de destruction (avec GSK3-bêta et Axine). Lorsque APC est muté (comme dans la polypose adénomateuse familiale et la majorité des cancers sporadiques du côlon), la bêta-caténine n'est plus dégradée : elle s'accumule dans le noyau et active la transcription d'oncogènes majeurs (c-MYC, Cycline D1).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-23',
    courseId: 'crs-hemato-24',
    questionNumber: 23,
    type: 'QCM',
    content: "La charge mutationnelle tumorale (TMB / Tumor Mutational Burden), définie par le nombre total de mutations somatiques par mégabase d'ADN tumoral, est :",
    options: [
      "A) Un biomarqueur prédictif indépendant de sensibilité aux immunothérapies par inhibiteurs de points de contrôle (plus la TMB est élevée, plus il y a de néoantigènes immunogènes)",
      "B) Un indicateur de résistance absolue aux traitements",
      "C) Mesurée uniquement dans les cancers bénins",
      "D) Toujours nulle dans les cancers du poumon des fumeurs",
      "E) Sans relation avec l'infiltrat lymphocytaire"
    ],
    correctAnswers: [0],
    explanation: "Une charge mutationnelle élevée (TMB-High ≥ 10 mutations/Mb, fréquente dans les mélanomes induits par les UV, les cancers bronchiques du fumeur et les tumeurs MSI-H) génère de nombreux néo-antigènes peptidiques anormaux reconnus comme étrangers par le système immunitaire, prédisant une excellente réponse aux anti-PD-1.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-24',
    courseId: 'crs-hemato-24',
    questionNumber: 24,
    type: 'QCM',
    content: "Le gène suppresseur de tumeur PTEN est un régulateur négatif majeur de quelle voie de signalisation intracellulaire de survie et prolifération cellulaire ?",
    options: [
      "A) La voie PI3K / AKT / mTOR (PTEN déphosphoryle le PIP3 en PIP2)",
      "B) La voie JAK / STAT",
      "C) La voie des caspases apoptotiques",
      "D) La voie de la bêta-oxydation des acides gras",
      "E) La voie du complément alterne"
    ],
    correctAnswers: [0],
    explanation: "PTEN est une phosphatase lipidique qui antagonise la PI3-kinase en reconvertissant le PIP3 en PIP2. La perte de fonction de PTEN entraîne l'accumulation de PIP3 et une hyperactivation constitutive permanente de la kinase AKT et de mTOR, stimulant la survie cellulaire et la résistance à l'apoptose.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-25',
    courseId: 'crs-hemato-24',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans les néoplasies endocriniennes multiples de type 2 (NEM 2A et NEM 2B), la mutation activatrice constitutionnelle porte sur l'oncogène :",
    options: [
      "A) RET (récepteur tyrosine kinase)",
      "B) MEN1 (ménine)",
      "C) p53",
      "D) VHL",
      "E) NF2"
    ],
    correctAnswers: [0],
    explanation: "NEM 2A et 2B sont causées par une mutation constitutionnelle gain de fonction dominante du proto-oncogène RET (chromosome 10q11), prédisposant au carcinome médullaire de la thyroïde (100% des cas, justifiant une thyroïdectomie prophylactique précoce dès l'enfance) et au phéochromocytome.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-24-cs1',
    courseId: 'crs-hemato-24',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un jeune enfant de 18 mois présente une leucocorie droite (reflet blanc pupillaire) sans strabisme. L'échographie oculaire et l'IRM confirment une volumineuse tumeur rétinienne unilatérale calcifiée développée à partir des photorécepteurs rétiniens (rétinoblastome). L'interrogatoire retrouve que le père a été opéré d'un rétinoblastome bilatéral dans l'enfance.\n\nQuel gène suppresseur de tumeur est muté et quel est le modèle génétique en cause ?",
    options: [
      "A) Le gène RB1 selon l'hypothèse des 2 coups de Knudson (Two-Hit) : premier allèle muté hérité constitutionnellement du père, deuxième allèle inactivé par mutation somatique dans la cellule rétinienne",
      "B) L'oncogène KRAS avec mutation dominante unique",
      "C) Le gène TP53 selon un modèle mitochondrial",
      "D) L'oncogène c-MYC par translocation",
      "E) Une anomalie chromosomique trisomique 21 isolée"
    ],
    correctAnswers: [0],
    explanation: "C'est le modèle princeps d'Alfred Knudson : dans les formes héréditaires de rétinoblastome (mutation constitutionnelle germinale de RB1 transmise par le père), toutes les cellules du corps possèdent un premier allèle muté (1er hit). Il suffit d'une seule mutation somatique spontanée inactivant le second allèle dans un rétinoblaste (2e hit) pour déclencher la tumorigenèse.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-cs2',
    courseId: 'crs-hemato-24',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Une jeune fille de 16 ans consulte pour rectorragies avec anémie. La coloscopie met en évidence un tapissage complet de tout le cadre colique et rectal par plus de 2 500 polypes adénomateux de 2 à 15 mm. Le père et un oncle paternel sont décédés d'un cancer du côlon avant l'âge de 38 ans.\n\nQuel diagnostic portez-vous et quel est le risque de dégénérescence maligne sans prise en charge chirurgicale ?",
    options: [
      "A) Polypose Adénomateuse Familiale (PAF) liée à une mutation constitutionnelle du gène APC ; Risque de cancérisation de 100% avant l'âge de 40 ans (indication d'une colectomie totale prophylactique)",
      "B) Maladie de Crohn colique simple avec pseudopolypes inflammatoires sans risque tumoral",
      "C) Syndrome de Peutz-Jeghers bénin sans risque de cancer",
      "D) Syndrome myélodysplasique",
      "E) Rendu-Osler digestif"
    ],
    correctAnswers: [0],
    explanation: "Polypes adénomateux innombrables (> 100 à plusieurs milliers) dès l'adolescence avec antécédents familiaux = Polypose Adénomateuse Familiale (mutation d'APC). En l'absence de résection chirurgicale prophylactique (colo-proctectomie totale), l'apparition d'un ou plusieurs adénocarcinomes invasifs est certaine à 100% avant 40 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-cs3',
    courseId: 'crs-hemato-24',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une biopsie d'adénocarcinome colorectal chez un patient de 52 ans est analysée en biologie moléculaire. Le séquençage retrouve une mutation faux-sens hétérozygote c.35G>A (p.Gly12Asp / G12D) de l'exon 2 du gène KRAS.\n\nQuel est le mécanisme pharmacodynamique d'action de cette mutation et quelle thérapie ciblée devient TOTALEMENT INEFFICACE ?",
    options: [
      "A) Activation constitutive autonome de la cascade des MAPK par blocage de la GTPase KRAS sous forme active liée au GTP ; Inefficacité absolue des anticorps anti-EGFR (Cétuximab, Panitumumab)",
      "B) Perte d'expression de l'ADN polymérase",
      "C) Inefficacité totale du 5-Fluorouracile seul",
      "D) Résistance aux antibiotiques",
      "E) Inefficacité des transfusions"
    ],
    correctAnswers: [0],
    explanation: "La mutation KRAS G12D inhibe l'activité GTPase intrinsèque de KRAS, qui reste bloqué sous forme activée en aval du récepteur EGFR. Bloquer l'EGFR en surface par le Cétuximab est donc totalement vain puisque le signal de prolifération est continuellement allumé en aval. La présence d'une mutation de KRAS ou NRAS est une contre-indication formelle aux anti-EGFR.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-24-cs4',
    courseId: 'crs-hemato-24',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 60 ans atteint d'un cancer du rein à cellules claires métastatique présente une tumeur primitive richement vascularisée avec de volumineux néo-vaisseaux anarchiques. L'analyse génétique tumorale montre l'inactivation biallélique du gène VHL. La TEP-scan montre une tumeur hypermétabolique consommant massivement le 18F-FDG.\n\nQuels sont les deux mécanismes physiopathologiques moléculaires expliquant l'hypervascularisation tumorale et la forte captation du FDG ?",
    options: [
      "A) L'absence de dégradation de HIF-1alpha (surproduction massive de VEGF et néo-angiogenèse) et la reprogrammation métabolique par effet Warburg (surexpression des transporteurs GLUT-1 et glycolyse aérobie)",
      "B) Une infection bactérienne chronique et une hémolyse",
      "C) Une surproduction de prothrombine et de plaquettes",
      "D) Une synthèse anormale de glycogène et d'insuline",
      "E) Une apoptose massive des cellules endothéliales"
    ],
    correctAnswers: [0],
    explanation: "La perte de VHL stabilise constitutivement HIF-1alpha, provoquant une sécrétion continue de VEGF (hypervascularisation angiogénique) et une surexpression des transporteurs du glucose GLUT-1 et des enzymes glycolytiques (effet Warburg / glycolyse aérobie, expliquant la visualisation au FDG).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-24-cs5',
    courseId: 'crs-hemato-24',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un patient de 66 ans avec métastases hépatiques d'un adénocarcinome gastrique voit sa tumeur analysée en anatomopathologie : l'immunohistochimie montre une perte d'expression de MLH1 et PMS2, confirmée par PCR montrant une instabilité des microsatellites sur 5 locus (statut MSI-H). La charge mutationnelle tumorale est très élevée (TMB = 48 mutations/Mb). Les biopsies montrent un infiltrat dense en lymphocytes T CD8+ bloqués par une forte expression tumorale de PD-L1.\n\nQuel traitement moderne de pointe est particulièrement indiqué avec une forte probabilité de rémission durable ?",
    options: [
      "A) Une immunothérapie par inhibiteur de PD-1 (Pembrolizumab ou Nivolumab)",
      "B) Une radiothérapie externe de tout l'abdomen",
      "C) Une hormonothérapie par Tamoxifène",
      "D) Un traitement par aspirine seule",
      "E) Des transfusions d'albumine humaine"
    ],
    correctAnswers: [0],
    explanation: "Le profil MSI-H / dMMR avec charge mutationnelle très élevée (TMB > 10-40 mut/Mb) produit une profusion de néo-antigènes peptidiques étrangers reconnus par les lymphocytes T CD8+ intratumoraux. L'administration d'un anti-PD-1 (Pembrolizumab) lève l'immunosuppression induite par PD-L1 et permet aux lymphocytes de détruire la tumeur avec des rémissions spectaculaires et durables.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_24_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-24-01',
    courseId: 'crs-hemato-24',
    type: 'resume',
    title: "Mind Map Synthèse : Carcinogénèse, Oncogènes & Immuno-oncologie",
    contentMarkdown: `# Mind Map : Carcinogénèse Moléculaire (Cancérologie Fondamentale)

\`\`\`
                                  BASES MOLÉCULAIRES DE LA CARCINOGÉNÈSE
                                                    │
         ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
         ▼                  ▼                       ▼                       ▼                  ▼
ÉTAPES CARCINOGÉNÈSE    ONCOGÈNES (Dominants)   SUPPRESSEURS TUMEUR     MÉTABOLISME & ANGIOGÉNÈSE ÉCHAPPEMENT IMMUN
1. **Initiation**       - Mutation activatrice  - Mutation récessive    - **Effet Warburg** :     - Perte du CMH-I
   (Mutation irrévers.)   gain de fonction      - **Loi de Knudson**      Glycolyse aérobie ➔     - **Axe PD-1 / PD-L1**
2. **Promotion**        - 1 seul allèle muté      (2 hits nécessaires)    Consommation massive      (Épuisement lymphoïde)
   (Prolifération         suffit !              - **TP53** (Gardien du    de glucose (TEP-FDG)    - Rôle des **Treg** et
   réversible)          - Exemples :              génome : p21 / BAX)   - **Angiogenèse** :         MDSC suppressifs
3. **Progression**        * **KRAS** (GTPase)   - **RB1** (Contrôle       Hypoxie ➔ HIF-1α ➔     - Révolution des
   (Instabilité, invasion * **c-MYC** (Transcr.)  G1/S via E2F)           Sécrétion de **VEGF**     **anti-PD-1** si
   et métastases)         * **HER2 / EGFR**     - **APC** (Dégrade        (Switch angiogénique)     statut **MSI-H / TMB-H**
                                                  la β-caténine)
\`\`\`

## Hallmarks of Cancer (Hanahan & Weinberg) :
1. Autosuffisance en signaux de croissance (Oncogènes).
2. Insensibilité aux signaux antiprolifératifs (Suppresseurs altérés).
3. Échappement à l'apoptose (BCL-2, perte de p53).
4. Potentiel réplicatif illimité (Télomérase).
5. Angiogenèse soutenue (VEGF, HIF-1α).
6. Invasion tissulaire et métastases (Perte d'E-cadhérine, TEM).
7. Reprogrammation métabolique (Glycolyse aérobie / Warburg).
8. Échappement à la destruction immunitaire (PD-L1, Treg).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-24-02',
    courseId: 'crs-hemato-24',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Oncogènes vs Suppresseurs de Tumeurs",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Oncogène vs Gène Suppresseur** :
   - Oncogène (ex: KRAS, HER2, MYC) : Mutation **dominante**, **gain de fonction** (1 allèle muté suffit).
   - Suppresseur (ex: TP53, RB1, APC, BRCA) : Mutation **récessive au niveau cellulaire**, **perte de fonction** (loi des 2 coups de Knudson).
2. **p53 (Gardien du génome)** :
   - Active **p21** pour arrêter le cycle en G1/S et réparer l'ADN.
   - Active **BAX / PUMA** pour déclencher l'apoptose si irréparable.
3. **pRb & E2F** :
   - pRb hypophosphorylée = active (bloque E2F).
   - pRb hyperphosphorylée par CDK4/6 = inactive (libère E2F ➔ entrée en phase S).
4. **Effet Warburg** :
   - Glycolyse avec production de lactate MÊME en présence d'oxygène (aérobie). Explique la fixation du FDG en TEP.
5. **MSI-H et Réponse à l'Immunothérapie** :
   - Les tumeurs MSI-H / dMMR ont des milliers de mutations (TMB élevée) produisant des néoantigènes ➔ réponse majeure aux anti-PD-1 (Pembrolizumab).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];
