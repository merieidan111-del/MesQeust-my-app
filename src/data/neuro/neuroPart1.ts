import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 1: DÉMENCES
// ==========================================
export const NEURO_LESSON_1_QUESTIONS: Question[] = [
  {
    id: 'q-nro-1-01',
    courseId: 'crs-neuro-1',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans le syndrome démentiel, le trouble le plus précoce et le plus constant est :",
    options: [
      "A. L’apraxie idéomotrice",
      "B. L’agnosie visuelle",
      "C. L’amnésie des faits récents (antérograde)",
      "D. Le trouble de l’humeur de type dépressif",
      "E. L’aphasie de Wernicke"
    ],
    correctAnswers: [2],
    explanation: "L’atteinte de la mémoire épisodique, surtout antérograde, est le signe inaugural et cardinal des démences, en particulier de la maladie d’Alzheimer. Elle reflète une atteinte initiale des structures hippocampiques et para-hippocampiques, essentielles pour la consolidation des nouveaux souvenirs.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-02',
    courseId: 'crs-neuro-1',
    questionNumber: 2,
    type: 'QCM',
    content: "Une triade associant détérioration intellectuelle, troubles de la marche et troubles sphinctériens doit faire évoquer en premier lieu :",
    options: [
      "A. Une paralysie générale",
      "B. Une hydrocéphalie à pression normale",
      "C. Un hématome sous-dural chronique",
      "D. Une tumeur frontale",
      "E. Une maladie à corps de Lewy"
    ],
    correctAnswers: [1],
    explanation: "Cette triade (Hakim-Adams) est classique de l’hydrocéphalie à pression normale (HPN). L’altération de la résorption du LCR entraîne une dilatation ventriculaire et une souffrance de la substance blanche périventriculaire, touchant les faisceaux frontaux responsables de la marche et le contrôle des sphincters. C’est une cause importante de démence potentiellement curable.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-03',
    courseId: 'crs-neuro-1',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les éléments suivants, lequel est en faveur d’une démence dégénérative de type Alzheimer plutôt que d’une confusion mentale ?",
    options: [
      "A. Début brutal il y a 48 heures",
      "B. Fluctuation des symptômes dans la journée",
      "C. Présence d’un syndrome infectieux sous-jacent",
      "D. Désorientation temporo-spatiale progressive sur plusieurs mois",
      "E. Hallucinations visuelles précoces et fluctuantes"
    ],
    correctAnswers: [3],
    explanation: "La confusion mentale se caractérise par un début aigu, une évolution fluctuante et une cause organique souvent identifiable. La démence de type Alzheimer a un début insidieux et une évolution progressive sur plusieurs mois/années.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-04',
    courseId: 'crs-neuro-1',
    questionNumber: 4,
    type: 'QCM',
    content: "Le signe d’Argyll-Robertson (abolition du réflexe photomoteur avec conservation de l’accommodation-convergence) est caractéristique de :",
    options: [
      "A. La maladie de Creutzfeldt-Jakob",
      "B. La paralysie générale syphilitique",
      "C. La chorée de Huntington",
      "D. La démence vasculaire",
      "E. La carence en vitamine B12"
    ],
    correctAnswers: [1],
    explanation: "La paralysie générale est une méningo-encéphalite liée à la syphilis tertiaire. Le signe d’Argyll-Robertson, par atteinte du prétectum, est très évocateur. Le diagnostic est confirmé par la sérologie syphilitique dans le sang et le LCR.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-05',
    courseId: 'crs-neuro-1',
    questionNumber: 5,
    type: 'QCM',
    content: "Quel examen complémentaire est systématique dans le bilan étiologique d’une démence ?",
    options: [
      "A. Ponction lombaire avec analyse du LCR",
      "B. IRM cérébrale (ou à défaut TDM)",
      "C. EEG",
      "D. Dosage systématique des métaux lourds",
      "E. Biopsie cérébrale"
    ],
    correctAnswers: [1],
    explanation: "L’imagerie cérébrale (IRM en première intention, TDM si contre-indication) est systématique. Elle permet d’éliminer des causes curables (tumeur, HSDc, HPN) et d’orienter vers une étiologie dégénérative ou vasculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-06',
    courseId: 'crs-neuro-1',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans la maladie d’Alzheimer, le déficit neurotransmetteur précoce et majeur, ciblé par les traitements symptomatiques, concerne :",
    options: [
      "A. La dopamine",
      "B. La noradrénaline",
      "C. L’acétylcholine",
      "D. Le GABA",
      "E. La sérotonine"
    ],
    correctAnswers: [2],
    explanation: "Il existe une dégénérescence précoce des neurones cholinergiques du noyau basal de Meynert, corrélée à la sévérité des troubles mnésiques. Les inhibiteurs de l’acétylcholinestérase (donépézil, rivastigmine, galantamine) visent à augmenter la transmission cholinergique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-07',
    courseId: 'crs-neuro-1',
    questionNumber: 7,
    type: 'QCM',
    content: "Une démence fronto-temporale se distingue classiquement de la maladie d’Alzheimer par :",
    options: [
      "A. Une prédominance initiale des troubles mnésiques",
      "B. Une apraxie constructive précoce",
      "C. Une anosognosie marquée",
      "D. Des troubles du comportement et une désinhibition au premier plan",
      "E. Une agnosie visuelle précoce"
    ],
    correctAnswers: [3],
    explanation: "La DFT touche préférentiellement les lobes frontaux et temporaux antérieurs. Le tableau initial est donc dominé par des troubles du comportement (désinhibition, apathie, comportements stéréotypés, hyperoralité), avec une mémoire relativement préservée au début.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-08',
    courseId: 'crs-neuro-1',
    questionNumber: 8,
    type: 'QCM',
    content: "Les myoclonies généralisées, dans un contexte de démence rapidement progressive, sont très évocatrices de :",
    options: [
      "A. Démence à corps de Lewy",
      "B. Maladie de Parkinson",
      "C. Maladie de Creutzfeldt-Jakob",
      "D. Démence vasculaire",
      "E. Paralysie générale"
    ],
    correctAnswers: [2],
    explanation: "La MCJ est une encéphalopathie spongiforme à prions d’évolution rapidement progressive (décès en moins d’un an). Les myoclonies sont un signe très caractéristique, avec à l'EEG des complexes périodiques biphasiques ou triphasiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-09',
    courseId: 'crs-neuro-1',
    questionNumber: 9,
    type: 'QCM',
    content: "Parmi les démences dites 'curables', laquelle est souvent associée à un terrain d’éthylisme chronique et/ou de traitement anticoagulant ?",
    options: [
      "A. Hydrocéphalie à pression normale",
      "B. Tumeur bénigne de la fosse postérieure",
      "C. Hématome sous-dural chronique",
      "D. Paralysie générale",
      "E. Carence en vitamine B1"
    ],
    correctAnswers: [2],
    explanation: "L’HSDc résulte souvent d’un traumatisme crânien minime, oublié, chez les sujets âgés avec atrophie cérébrale, éthyliques chroniques ou sous anticoagulants. L’évacuation chirurgicale permet une récupération remarquable.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-10',
    courseId: 'crs-neuro-1',
    questionNumber: 10,
    type: 'QCM',
    content: "La démence de la maladie de Parkinson se caractérise souvent par :",
    options: [
      "A. Une aphasie fluente précoce",
      "B. Une prédominance de troubles mnésiques hippocampiques",
      "C. Une bradyphrénie et des hallucinations visuelles",
      "D. Une apraxie idéomotrice isolée",
      "E. Des myoclonies massives"
    ],
    correctAnswers: [2],
    explanation: "La démence dans la MP est de type sous-cortico-frontal, avec ralentissement idéatoire (bradyphrénie), troubles des fonctions exécutives et hallucinations visuelles fréquentes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-11',
    courseId: 'crs-neuro-1',
    questionNumber: 11,
    type: 'QCM',
    content: "Le diagnostic de certitude de la maladie d’Alzheimer repose sur :",
    options: [
      "A. Le tableau clinique typique",
      "B. L’IRM cérébrale montrant une atrophie hippocampique",
      "C. La ponction lombaire avec dosage des biomarqueurs (tau, Aβ42)",
      "D. L’examen anatomopathologique du tissu cérébral",
      "E. Le test génétique systématique"
    ],
    correctAnswers: [3],
    explanation: "Seule la biopsie ou l’autopsie cérébrale mettant en évidence les dégénérescences neurofibrillaires (protéine Tau hyperphosphorylée) et les plaques séniles amyloïdes affirme le diagnostic avec certitude.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-12',
    courseId: 'crs-neuro-1',
    questionNumber: 12,
    type: 'QCM',
    content: "Un syndrome de Korsakoff peut mimer une démence, mais s’en distingue par :",
    options: [
      "A. La présence d’un delirium tremens associé",
      "B. L’altération du jugement et du raisonnement",
      "C. La prédominance de l’amnésie antérograde et des fabulations avec préservation relative des fonctions instrumentales",
      "D. L’existence de signes neurologiques focaux",
      "E. Son caractère irréversible"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de Korsakoff (carence B1 souvent alcoolique) est un trouble amnésique pur avec amnésie antérograde massive, confabulations et fausses reconnaissances, contrastant avec la préservation relative des fonctions instrumentales.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-13',
    courseId: 'crs-neuro-1',
    questionNumber: 13,
    type: 'QCM',
    content: "Quel est l’élément le plus en faveur d’une démence vasculaire ?",
    options: [
      "A. Début insidieux et progression lente et régulière",
      "B. Atteinte précoce et isolée de la mémoire",
      "C. Anosognosie marquée",
      "D. Antécédents d’HTA et d’AVC, évolution par à-coups en marches d'escalier",
      "E. Hallucinations olfactives précoces"
    ],
    correctAnswers: [3],
    explanation: "La démence vasculaire est marquée par des facteurs de risque cardiovasculaires, des antécédents d'AVC/lacunes et une dégradation cognitive par paliers successifs ('marches d'escalier').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-14',
    courseId: 'crs-neuro-1',
    questionNumber: 14,
    type: 'QCM',
    content: "L’apraxie d’habillage est le plus souvent observée dans :",
    options: [
      "A. La démence vasculaire sous-corticale",
      "B. La maladie d’Alzheimer",
      "C. La chorée de Huntington",
      "D. La paralysie générale",
      "E. Le syndrome de Korsakoff"
    ],
    correctAnswers: [1],
    explanation: "L’apraxie d’habillage reflète une atteinte des aires pariétales associatives et est caractéristique des démences corticales comme la maladie d’Alzheimer.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-15',
    courseId: 'crs-neuro-1',
    questionNumber: 15,
    type: 'QCM',
    content: "La transmission de la chorée de Huntington se fait sur le mode :",
    options: [
      "A. Autosomique récessif",
      "B. Autosomique dominant",
      "C. Récessif lié à l’X",
      "D. Dominant lié à l’X",
      "E. Mitochondrial"
    ],
    correctAnswers: [1],
    explanation: "La chorée de Huntington est une affection génétique à transmission autosomique dominante à pénétrance complète, causée par l’expansion de triplets CAG sur le chromosome 4 (gène HTT).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-16',
    courseId: 'crs-neuro-1',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans le bilan d’une démence, un EEG est particulièrement indiqué si l’on suspecte :",
    options: [
      "A. Une maladie d’Alzheimer typique",
      "B. Une démence fronto-temporale",
      "C. Une hydrocéphalie à pression normale",
      "D. Une maladie de Creutzfeldt-Jakob",
      "E. Une carence en vitamine B12"
    ],
    correctAnswers: [3],
    explanation: "Dans la maladie de Creutzfeldt-Jakob, l’EEG est indispensable et montre des complexes périodiques d’ondes triphasiques ou biphasiques synchrones sur fond ralenti.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-17',
    courseId: 'crs-neuro-1',
    questionNumber: 17,
    type: 'QCM',
    content: "L’anosognosie correspond à :",
    options: [
      "A. L’incapacité à reconnaître les objets",
      "B. L’incapacité à effectuer des gestes sur ordre",
      "C. Le déni ou la méconnaissance involontaire de ses troubles",
      "D. L’incapacité à nommer les parties du corps",
      "E. La perte de la mémoire des faits anciens"
    ],
    correctAnswers: [2],
    explanation: "L’anosognosie est la non-reconnaissance ou la sous-estimation par le patient de ses déficits cognitifs ou neurologiques, liée à l'atteinte des réseaux cérébraux préfrontaux et pariétaux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-18',
    courseId: 'crs-neuro-1',
    questionNumber: 18,
    type: 'QCM',
    content: "Parmi les propositions suivantes, laquelle n’est PAS une cause de démence potentiellement curable ?",
    options: [
      "A. Hypothyroïdie sévère (myxœdème)",
      "B. Carence en vitamine B12",
      "C. Hématome sous-dural chronique",
      "D. Maladie d’Alzheimer",
      "E. Dépression pseudo-démence"
    ],
    correctAnswers: [3],
    explanation: "La maladie d’Alzheimer est une affection neurodégénérative progressive actuellement incurable. Les causes curables (acronyme PHIT : Paralysie générale, HPN/HSDc, Intoxications/Carences B12/Hypothyroïdie, Tumeurs bénignes) doivent être éliminées systématiquement.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-19',
    courseId: 'crs-neuro-1',
    questionNumber: 19,
    type: 'QCM',
    content: "Le premier cas historique de maladie d’Alzheimer décrit par Aloïs Alzheimer concernait une patiente présentant initialement :",
    options: [
      "A. Une aphasie de Broca isolée",
      "B. Une crise convulsive généralisée",
      "C. Une jalousie pathologique puis un déclin cognitif global",
      "D. Une paralysie progressive des membres inférieurs",
      "E. Une cécité corticale"
    ],
    correctAnswers: [2],
    explanation: "Auguste D., décrite par Aloïs Alzheimer en 1906, présentait initialement des troubles psycho-comportementaux (délire de jalousie excessive) avant l’installation d’un déclin cognitif progressif.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-1-20',
    courseId: 'crs-neuro-1',
    questionNumber: 20,
    type: 'QCM',
    content: "Un score MMS (Mini-Mental State Examination) à 22/30 chez un patient de 75 ans scolarisé évoque :",
    options: [
      "A. Un fonctionnement cognitif normal",
      "B. Un déficit cognitif léger",
      "C. Une démence modérée",
      "D. Une démence sévère",
      "E. Un résultat non interprétable"
    ],
    correctAnswers: [1],
    explanation: "Au MMS (sur 30) : ≥ 27 = normal ; 24-26 = douteux/très léger ; 18-23 = déficit cognitif léger ; 10-17 = démence modérée ; < 10 = démence sévère.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-21',
    courseId: 'crs-neuro-1',
    questionNumber: 21,
    type: 'QCM',
    content: "La démence à corps de Lewy se distingue de la maladie d’Alzheimer par :",
    options: [
      "A. L’absence totale de troubles mnésiques",
      "B. La présence précoce et fluctuante d’hallucinations visuelles et de signes parkinsoniens",
      "C. Une apraxie précoce et isolée",
      "D. Une évolution lente sur plus de 15 ans",
      "E. Une prédominance de troubles du langage de type aphasie de conduction"
    ],
    correctAnswers: [1],
    explanation: "Les critères cardinaux de la démence à corps de Lewy sont : 1) fluctuations cognitives et de la vigilance, 2) hallucinations visuelles précoces récurrentes et bien construites, 3) syndrome parkinsonien spontané.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-22',
    courseId: 'crs-neuro-1',
    questionNumber: 22,
    type: 'QCM',
    content: "Quel est le mécanisme physiopathologique principal de la paralysie générale ?",
    options: [
      "A. Dépôts amyloïdes cérébraux",
      "B. Infection chronique du parenchyme cérébral par Treponema pallidum",
      "C. Expansion de triplets CAG dans le gène huntingtine",
      "D. Dégénérescence des neurones dopaminergiques de la substance noire",
      "E. Infarctus cérébraux multiples"
    ],
    correctAnswers: [1],
    explanation: "La paralysie générale est une méningo-encéphalite chronique diffuse tardive due à la dissémination parenchymateuse de Treponema pallidum (syphilis tertiaire), survenant 10 à 20 ans après l'infection primaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-23',
    courseId: 'crs-neuro-1',
    questionNumber: 23,
    type: 'QCM',
    content: "La principale cause de démence chez le sujet très âgé (> 85 ans) est :",
    options: [
      "A. La démence vasculaire",
      "B. La démence fronto-temporale",
      "C. La maladie d’Alzheimer",
      "D. La démence alcoolique",
      "E. La maladie à corps de Lewy"
    ],
    correctAnswers: [2],
    explanation: "La maladie d’Alzheimer représente 50 à 75% de l'ensemble des démences du grand âge, sa prévalence doublant tous les 5 ans après 65 ans pour atteindre 20 à 30% après 85 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-24',
    courseId: 'crs-neuro-1',
    questionNumber: 24,
    type: 'QCM',
    content: "L’apraxie constructive se manifeste cliniquement par :",
    options: [
      "A. L’incapacité à s’habiller",
      "B. L’incapacité à imiter des gestes sans signification",
      "C. L’incapacité à dessiner ou à assembler des objets en 2D ou 3D (ex : dessin du cube ou de l'horloge)",
      "D. L’incapacité à reconnaître les objets",
      "E. L’incapacité à écrire"
    ],
    correctAnswers: [2],
    explanation: "L’apraxie constructive est un trouble de l’organisation visuo-spatiale des gestes complexes, se traduisant par l'incapacité de reproduire un dessin (cube, horloge, figures de Rey) ou d'assembler des pièces géométriques, liée à une atteinte pariétale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-25',
    courseId: 'crs-neuro-1',
    questionNumber: 25,
    type: 'QCM',
    content: "La présence d’un syndrome extrapyramidal de type choréique associé à une démence chez un adulte jeune de 40 ans oriente vers :",
    options: [
      "A. La maladie de Parkinson",
      "B. La maladie de Wilson",
      "C. La chorée de Huntington",
      "D. La paralysie supranucléaire progressive",
      "E. L’atrophie multisystématisée"
    ],
    correctAnswers: [2],
    explanation: "L’association de mouvements anormaux choréiques involontaires et d'un déclin cognitif progressif chez un sujet de 35-50 ans avec notion d'antécédents familiaux est pathognomonique de la maladie de Huntington.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 1
  {
    id: 'q-nro-1-c1',
    courseId: 'crs-neuro-1',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Mme A., 78 ans. Son fils rapporte une lente modification du comportement sur 2 ans : apathie, désinhibition (critiques déplacées), hyperoralité (mange compulsivement). La mémoire des souvenirs récents semble relativement préservée. Aucun antécédent vasculaire. Examen : Patient désinhibé, indifférent. MMS : 25/30 (échecs aux items de raisonnement abstrait et fluence verbale). Pas de signe neurologique focal. Quelle est l’hypothèse diagnostique la plus probable ?",
    options: [
      "A. Maladie d’Alzheimer typique",
      "B. Démence vasculaire",
      "C. Démence fronto-temporale (DFT)",
      "D. Dépression du sujet âgé",
      "E. Hydrocéphalie à pression normale"
    ],
    correctAnswers: [2],
    explanation: "Le tableau est dominé par des troubles du comportement (apathie, désinhibition, hyperoralité) avec une mémoire relativement épargnée au début. Le MMS, peu sensible aux fonctions frontales, peut être subnormal. Ce profil est caractéristique d’une atteinte fronto-temporale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-c2',
    courseId: 'crs-neuro-1',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Mr B., 72 ans. Hypertension artérielle ancienne mal contrôlée. Deux AVC ischémiques lacunaires documentés il y a 3 et 5 ans, avec récupération motrice complète. Depuis 2 ans, déclin cognitif 'par à-coups' : chaque aggravation suit un épisode de malaise vague. Sa fille note une lenteur et une perte d’initiative. Examen : Syndrome extra-pyramidal léger (marche à petits pas, akinésie). MMS : 20/30. Réflexes vifs avec signe de Babinski bilatéral. Quel est le type de démence le plus probable ?",
    options: [
      "A. Maladie d’Alzheimer",
      "B. Démence vasculaire sous-corticale",
      "C. Maladie à corps de Lewy",
      "D. Paralysie générale",
      "E. Démence alcoolique"
    ],
    correctAnswers: [1],
    explanation: "Les antécédents d’HTA et d’AVC lacunaire, l’évolution par à-coups et la présence d’un syndrome frontal (ralentissement, perte d’initiative) et de signes pyramidaux sont très évocateurs d’une démence vasculaire de type sous-cortical (état lacunaire).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-c3',
    courseId: 'crs-neuro-1',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Mme C., 80 ans. Troubles progressifs de la mémoire depuis 3 ans, devenus gênants. Oublie ses rendez-vous, pose les mêmes questions, égare ses objets. Depuis 1 an, difficultés à gérer son budget et à se repérer dans son quartier. Pas de trouble du comportement. Examen : Patiente coopérante, anxieuse face à ses oublis. MMS : 18/30 (échecs mémoire, orientation, calcul). Examen neurologique normal. IRM : Atrophie hippocampique bilatérale marquée. Quel diagnostic évoquez-vous ?",
    options: [
      "A. Démence fronto-temporale",
      "B. Maladie d’Alzheimer probable",
      "C. Dépression pseudo-démence",
      "D. Carence en vitamine B12",
      "E. Hydrocéphalie à pression normale"
    ],
    correctAnswers: [1],
    explanation: "Le tableau est celui d’un syndrome amnésique hippocampique progressif isolé pendant plusieurs années, puis associé à des troubles des fonctions instrumentales (calcul, orientation). L’IRM objective l’atrophie hippocampique. Ce profil est très évocateur d’une MA, stade léger à modéré.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-c4',
    courseId: 'crs-neuro-1',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Mr D., 45 ans. Démence rapidement progressive sur 8 mois, avec myoclonies généralisées et ataxie cérébelleuse. Agitation et hallucinations visuelles intermittentes. Examen : Patient confus, myoclonies massives à la stimulation. Syndrome cérébelleux statique et cinétique. EEG : Complexes périodiques bi- triphasiques généralisés. Quel diagnostic redoutez-vous ?",
    options: [
      "A. Chorée de Huntington",
      "B. Encéphalite auto-immune",
      "C. Maladie de Creutzfeldt-Jakob",
      "D. Intoxication médicamenteuse",
      "E. Tumeur cérébrale du 3ème ventricule"
    ],
    correctAnswers: [2],
    explanation: "La triade démence rapidement progressive + myoclonies + anomalies EEG caractéristiques (complexes périodiques) est hautement suggestive de MCJ. L’ataxie est un signe fréquemment associé. C’est une urgence diagnostique et de santé publique (maladie à prions).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-1-c5',
    courseId: 'crs-neuro-1',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Mme E., 70 ans. Troubles de la marche d’aggravation progressive sur 2 ans ('les pieds collés au sol'), associés à des oublis et une incontinence urinaire d’apparition plus récente. Examen : Marche magnétique (à petits pas, pieds collés au sol). Lenteur idéatoire. MMS : 21/30. Réflexes normaux. Quelle investigation d’imagerie est cruciale ?",
    options: [
      "A. IRM cérébrale avec séquences spécifiques du tronc cérébral et étude ventriculaire",
      "B. Angio-IRM des vaisseaux du cou",
      "C. TDM cérébrale sans injection",
      "D. Scintigraphie cérébrale de perfusion",
      "E. Radiographie du rachis lombaire"
    ],
    correctAnswers: [0],
    explanation: "La triade troubles de la marche (apraxie de la marche) + troubles cognitifs + incontinence est classique de l’hydrocéphalie à pression normale (triade de Hakim-Adams). L’IRM cérébrale est l’examen clé pour objectiver la dilatation ventriculaire disproportionnée par rapport à l’atrophie corticale.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_1_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-1-mindmap',
    courseId: 'crs-neuro-1',
    title: 'Mind Map : Démences & Déclin Cognitif Global',
    type: 'mindmap',
    content: `
# MIND MAP : DÉMENCES
*Déclin cognitif global, acquis, progressif - Programme Faculté de Médecine Algérie*

## 1. DÉMENCES "CURABLES" (RECHERCHE SYSTÉMATIQUE OBLIGATOIRE)
- **HPN (Hydrocéphalie à Pression Normale)** : Triade de Hakim-Adams (Marche magnétique, Démence, Incontinence urinaire). Dérivation ventriculaire salvatrice.
- **HSDc (Hématome Sous-Dural Chronique)** : Sujet âgé, éthylique, anticoagulant, traumatisme minime oublié. Évacuation par trou de trépan.
- **Tumeurs cérébrales bénignes** : Méningiomes frontaux ou temporaux.
- **Paralysie Générale (Syphilis tertiaire)** : Démence rapide + tremblements + signe d'Argyll-Robertson -> Pénicilline G forte dose.
- **Métaboliques & Carentielles** : Carence en vitamine B12, B1, folates, hypothyroïdie sévère.
- **Psychiatrique** : Pseudo-démence dépressive du sujet âgé.

## 2. DÉMENCES DÉGÉNÉRATIVES (IRRÉVERSIBLES)
- **Corticales** :
  - **Maladie d'Alzheimer (50-75%)** : Début amnésique antérograde (hippocampe) -> aphasie, apraxie (habillage, constructive), agnosie -> atrophie hippocampique IRM, perte neuronale cholinergique.
  - **DFT (Démence Fronto-Temporale / Pick)** : Troubles du comportement et de la personnalité inauguraux (désinhibition, apathie, hyperoralité), mémoire préservée au début.
- **Sous-corticales & Cortico-sous-corticales** :
  - **Démence à Corps de Lewy** : Fluctuations de vigilance, hallucinations visuelles précoces, syndrome parkinsonien spontané.
  - **Démence Vasculaire (10-20%)** : HTA, AVC récurrents, évolution par à-coups en marches d'escalier.
  - **Maladie de Creutzfeldt-Jakob** : Encéphalopathie à prions, démence fulgurante en quelques mois, myoclonies massives, complexes périodiques EEG.
`
  },
  {
    id: 'res-nro-1-astuces',
    courseId: 'crs-neuro-1',
    title: 'Astuces & Mnémotechniques : Démences',
    type: 'astuce',
    content: `
# ASTUCES & MNÉMOTECHNIQUES - DÉMENCES
*Par Dr. LAIDANI.MERIEM*

- **Triade de l'HPN : « DMS »**
  - **D**émence
  - **M**arche (troubles de la marche, pieds collés au sol)
  - **S**phincters (incontinence)
  - *Ou mnémo : "Il est **MID** (dans la tête)" : Marche, Incontinence, Démence.*

- **Causes curables de démence : « PHIT »**
  - **P**aralysie générale
  - **H**PN / **H**SDc
  - **I**ntoxications / Carences (B12, TSH)
  - **T**umeurs bénignes

- **Différencier Démence vs Confusion : « DID ACES »**
  - **Démence** : **D**ébut **I**nsidieux, **D**urée longue, profil diurne constant.
  - **Confusion** : **A**igu, **C**irconstantiel (cause organique sous-jacente), **E**volution fluctuante, **S**ouvent réversible.

- **Lésions histologiques de la Maladie d'Alzheimer : « TAP »**
  - **T**au (Dégénérescence neurofibrillaire DNF)
  - **A**myloïde (Plaques séniles Aβ42)
  - **P**erte neuronale cholinergique (Meynert)
`
  }
];

// ==========================================
// LESSON 2: SYNDROMES TOPOGRAPHIQUES
// ==========================================
export const NEURO_LESSON_2_QUESTIONS: Question[] = [
  {
    id: 'q-nro-2-01',
    courseId: 'crs-neuro-2',
    questionNumber: 1,
    type: 'QCM',
    content: "Un patient présente une apathie, une désinhibition sociale, des comportements ritualisés et un grasping reflex. La lésion suspectée se situe principalement dans :",
    options: [
      "A) Lobe temporal",
      "B) Lobe occipital",
      "C) Lobe pariétal droit",
      "D) Lobe frontal",
      "E) Thalamus"
    ],
    correctAnswers: [3],
    explanation: "Ces signes évoquent une atteinte préfrontale (troubles comportementaux) et prémotrice (grasping). L’apathie et la désinhibition sont typiques des syndromes frontaux, tandis que le grasping réflexe signe une atteinte de l’aire motrice supplémentaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-02',
    courseId: 'crs-neuro-2',
    questionNumber: 2,
    type: 'QCM',
    content: "Une héminégligence gauche associée à une anosognosie est très évocatrice d’une lésion :",
    options: [
      "A) Lobe frontal gauche",
      "B) Lobe temporal droit",
      "C) Lobe pariétal droit",
      "D) Lobe occipital gauche",
      "E) Capsule interne droite"
    ],
    correctAnswers: [2],
    explanation: "L’héminégligence spatiale et l’anosognosie sont caractéristiques des lésions pariétales droites (hémisphère non dominant / mineur). L’hémisphère droit joue un rôle majeur dans l’attention spatiale bilatérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-03',
    courseId: 'crs-neuro-2',
    questionNumber: 3,
    type: 'QCM',
    content: "Une cécité corticale se distingue d’une cécité périphérique par :",
    options: [
      "A) L’abolition des réflexes photomoteurs",
      "B) La conservation des réflexes photomoteurs et l’abolition du clignement à la menace",
      "C) La présence d’un scotome central",
      "D) Une atteinte du fond d’œil",
      "E) Une hémianopsie latérale homonyme"
    ],
    correctAnswers: [1],
    explanation: "La cécité corticale résulte d’une lésion des deux cortex occipitaux striés en aval des corps genouillés latéraux. Les réflexes photomoteurs (voie sous-corticale) sont parfaitement intacts et le fond d'œil est normal, mais la réponse corticale au clignement à la menace est absente.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-04',
    courseId: 'crs-neuro-2',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient présente une aphasie fluente, logorrhéique, avec paraphasies et jargon, mais sans trouble de l’articulation. La lésion siège probablement dans :",
    options: [
      "A) Lobe temporal gauche (aire de Wernicke)",
      "B) Pied de F3 gauche (Broca)",
      "C) Lobe frontal droit",
      "D) Gyrus angulaire gauche",
      "E) Thalamus gauche"
    ],
    correctAnswers: [0],
    explanation: "L’aphasie de Wernicke est une aphasie fluente, avec compréhension profondément altérée, logorrhée, paraphasies et jargonaphasie, par lésion de la région temporo-pariétale postérieure gauche (T1-T2).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-05',
    courseId: 'crs-neuro-2',
    questionNumber: 5,
    type: 'QCM',
    content: "Le syndrome thalamique (Dejerine-Roussy) associe typiquement :",
    options: [
      "A) Hémianopsie latérale homonyme et aphasie",
      "B) Hémianesthésie controlatérale et douleurs thalamiques secondaires",
      "C) Hémiplégie proportionnelle et aphasie",
      "D) Ataxie et tremblement intentionnel",
      "E) Cécité corticale et hallucinations visuelles"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Dejerine-Roussy associe une hémianesthésie complète controlatérale touchant tous les modes et des douleurs neuropathiques centrales retardées (brûlures, hyperpathie), résistantes aux antalgiques usuels.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-06',
    courseId: 'crs-neuro-2',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans le syndrome de Wallenberg (syndrome latéral du bulbe), on observe :",
    options: [
      "A) Paralysie faciale périphérique controlatérale",
      "B) Syndrome de Claude Bernard-Horner ipsilatéral et hémianesthésie thermodouloureuse controlatérale du corps",
      "C) Paralysie du III ipsilatéral et hémiparésie controlatérale",
      "D) Surdité corticale controlatérale",
      "E) Apraxie idéomotrice bilatérale"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Wallenberg (ischémie de l'artère de la fossette latérale du bulbe / PICA) associe du côté de la lésion : CBH, paralysie IX/X/XI, anesthésie faciale (V), syndrome cérébelleux, et du côté opposé : anesthésie thermo-algique respectant la face.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-07',
    courseId: 'crs-neuro-2',
    questionNumber: 7,
    type: 'QCM',
    content: "Un grasping reflex de la main droite évoque une lésion :",
    options: [
      "A) Pariétale gauche",
      "B) Frontale gauche",
      "C) Temporale droite",
      "D) Capsule interne droite",
      "E) Thalamique gauche"
    ],
    correctAnswers: [1],
    explanation: "Le grasping reflex traduit une désinhibition des aires motrices/prémotrices frontales controlatérales à la main concernée. Une lésion frontale gauche libère ce réflexe archaïque à droite.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-08',
    courseId: 'crs-neuro-2',
    questionNumber: 8,
    type: 'QCM',
    content: "Une quadranopsie supérieure droite est due à une lésion :",
    options: [
      "A) Des radiations optiques temporales gauches (boucle de Meyer)",
      "B) Du cortex occipital droit",
      "C) Du nerf optique droit",
      "D) Du chiasma optique",
      "E) Des radiations optiques pariétales droites"
    ],
    correctAnswers: [0],
    explanation: "Les radiations optiques temporales (boucle de Meyer) véhiculent les fibres du champ visuel supérieur. Une lésion temporale gauche affecte le quadrant supérieur droit ('pie in the sky').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-09',
    courseId: 'crs-neuro-2',
    questionNumber: 9,
    type: 'QCM',
    content: "Le syndrome de Gerstmann (agraphie, acalculie, confusion droite-gauche, agnosie digitale) signe une lésion :",
    options: [
      "A) Frontale droite",
      "B) Temporale gauche",
      "C) Pariétale gauche (gyrus angulaire)",
      "D) Occipitale droite",
      "E) Capsule interne gauche"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de Gerstmann est un syndrome pariétal de l'hémisphère dominant (gauche) impliquant le gyrus angulaire, centre d’intégration des symboles et de l’orientation corporelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-10',
    courseId: 'crs-neuro-2',
    questionNumber: 10,
    type: 'QCM',
    content: "Une alexie sans agraphie résulte d’une lésion :",
    options: [
      "A) Frontale gauche",
      "B) Occipito-temporale gauche (avec atteinte du splénium du corps calleux)",
      "C) Pariétale droite",
      "D) Temporale droite",
      "E) Capsule interne droite"
    ],
    correctAnswers: [1],
    explanation: "L’alexie sans agraphie survient quand l’information visuelle du cortex occipital droit ne peut plus être transférée à la zone du langage gauche, à cause d’une lésion du carrefour occipito-temporal gauche et du splénium du corps calleux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-11',
    courseId: 'crs-neuro-2',
    questionNumber: 11,
    type: 'QCM',
    content: "Un syndrome frontal peut inclure une apraxie de la marche par atteinte de :",
    options: [
      "A) F3",
      "B) F1 (circonvolution frontale ascendante / aire motrice supplémentaire)",
      "C) Cortex préfrontal orbitaire",
      "D) Aire 08",
      "E) Aire 44"
    ],
    correctAnswers: [1],
    explanation: "L’apraxie de la marche (marche magnétique à petits pas, pieds collés au sol) est liée à une atteinte de la partie médiale de F1 (aire motrice supplémentaire), impliquée dans la planification motrice axiale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-12',
    courseId: 'crs-neuro-2',
    questionNumber: 12,
    type: 'QCM',
    content: "Une amusie (agnosie musicale) résulte le plus souvent d’une lésion :",
    options: [
      "A) Temporale droite (hémisphère mineur pour la musique)",
      "B) Temporale gauche",
      "C) Frontale droite",
      "D) Pariétale gauche",
      "E) Occipitale bilatérale"
    ],
    correctAnswers: [0],
    explanation: "La perception et la reconnaissance musicales font principalement intervenir les aires associatives auditives de l’hémisphère droit (non dominant pour le langage).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-13',
    courseId: 'crs-neuro-2',
    questionNumber: 13,
    type: 'QCM',
    content: "Une hémianopsie latérale homonyme droite avec épargne maculaire suggère une lésion :",
    options: [
      "A) Du cortex occipital gauche",
      "B) Du nerf optique droit",
      "C) Du chiasma",
      "D) Des radiations optiques temporales droites",
      "E) Du corps genouillé latéral droit"
    ],
    correctAnswers: [0],
    explanation: "L’épargne maculaire est typique des lésions corticales occipitales (scissure calcarine), car la représentation maculaire occupe une grande surface postérieure et bénéficie d'une double suppléance vasculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-14',
    courseId: 'crs-neuro-2',
    questionNumber: 14,
    type: 'QCM',
    content: "Le syndrome capsulaire pur se caractérise par :",
    options: [
      "A) Une hémiplégie proportionnelle controlatérale",
      "B) Une hémiplégie brachio-faciale dissociée",
      "C) Une aphasie fluente",
      "D) Une hémianopsie latérale homonyme",
      "E) Des mouvements anormaux choréiques"
    ],
    correctAnswers: [0],
    explanation: "La capsule interne contient les faisceaux pyramidaux très condensés. Une lésion entraîne une paralysie complète et égale (proportionnelle face, bras, jambe) du côté opposé.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-15',
    courseId: 'crs-neuro-2',
    questionNumber: 15,
    type: 'QCM',
    content: "Le signe de Babinski est présent dans une lésion de la voie pyramidale. Où cette voie ne passe-t-elle PAS ?",
    options: [
      "A. Cordon latéral de la moelle",
      "B. Cordon postérieur de la moelle",
      "C. Capsule interne",
      "D. Pédoncule cérébral",
      "E. Pont"
    ],
    correctAnswers: [1],
    explanation: "Le cordon postérieur contient les voies de la sensibilité proprioceptive et tactile épicritique (faisceaux gracile et cunéiforme). La voie pyramidale descend dans le cordon latéral de la moelle après la décussation bulbaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-16',
    courseId: 'crs-neuro-2',
    questionNumber: 16,
    type: 'QCM',
    content: "Un syndrome alterne se définit par :",
    options: [
      "A. Une atteinte bilatérale des nerfs crâniens",
      "B. Une atteinte unilatérale d’un nerf crânien du côté de la lésion + atteinte controlatérale des voies longues (motrices ou sensitives)",
      "C. Une atteinte sensitive pure d’un hémicorps",
      "D. Une ataxie cérébelleuse bilatérale",
      "E. Des troubles mnésiques isolés"
    ],
    correctAnswers: [1],
    explanation: "C'est la règle d'or du tronc cérébral : nerf crânien ipsilatéral à la lésion + voies longues décussées controlatérales (règle 'Ipsi la tête, Contra le corps').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-17',
    courseId: 'crs-neuro-2',
    questionNumber: 17,
    type: 'QCM',
    content: "Un syndrome de Weber associe :",
    options: [
      "A. Paralysie du VI et hémiplégie controlatérale",
      "B. Paralysie du III ipsilatérale et hémiplégie controlatérale",
      "C. Paralysie du VII périphérique et hémiplégie controlatérale",
      "D. Paralysie du XII et hémianesthésie controlatérale",
      "E. Syndrome de Horner et ataxie ipsilatérale"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Weber est un syndrome pédonculaire antérieur (mésencéphale) : paralysie du nerf moteur oculaire commun (III) homolatéral et hémiplégie proportionnelle controlatérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-18',
    courseId: 'crs-neuro-2',
    questionNumber: 18,
    type: 'QCM',
    content: "L’agnosie auditive verbale pure (surdité verbale) est due à une lésion :",
    options: [
      "A. Bilatérale des aires auditives primaires (41)",
      "B. Uni ou bilatérale des aires associatives auditives temporales supérieures (22, 42)",
      "C. Du gyrus de Heschl droit",
      "D. Du cortex préfrontal",
      "E. Du noyau cochléaire"
    ],
    correctAnswers: [1],
    explanation: "L’agnosie auditive verbale est l'impossibilité de comprendre et de reconnaître les sons du langage parlé malgré une audition tonale normale, par lésion des aires associatives auditives temporales supérieures gauches ou bilatérales.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-2-19',
    courseId: 'crs-neuro-2',
    questionNumber: 19,
    type: 'QCM',
    content: "Une astéréognosie droite isolée suggère une lésion :",
    options: [
      "A. Pariétale gauche (gyrus postcentral)",
      "B. Frontal droit",
      "C. Thalamique droit",
      "D. Occipitale gauche",
      "E. Capsule interne gauche"
    ],
    correctAnswers: [0],
    explanation: "L’astéréognosie (impossibilité d'identifier un objet palpé les yeux fermés) traduit une lésion du cortex somatosensoriel pariétal controlatéral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-20',
    courseId: 'crs-neuro-2',
    questionNumber: 20,
    type: 'QCM',
    content: "La prosopagnosie résulte d’une lésion :",
    options: [
      "A. Temporale antérieure",
      "B. Occipito-temporale inféro-interne (aire fusiforme), souvent bilatérale",
      "C. Frontale orbitaire",
      "D. Pariétale supérieure",
      "E. Du corps calleux"
    ],
    correctAnswers: [1],
    explanation: "La reconnaissance des visages dépend des aires visuelles associatives ventrales de la voie du 'quoi', en particulier le gyrus fusiforme occipito-temporal bilatéral ou droit.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-21',
    courseId: 'crs-neuro-2',
    questionNumber: 21,
    type: 'QCM',
    content: "Un syndrome de dépendance à l’environnement (comportement d'imitation et d'utilisation) est typique d’une lésion :",
    options: [
      "A. Temporomésiale",
      "B. Préfrontale",
      "C. Occipitale",
      "D. Cérébelleuse",
      "E. Sous-thalamique"
    ],
    correctAnswers: [1],
    explanation: "Ces comportements d’imitation (échopraxie) et d’utilisation forcée d’objets présentés reflètent une perte du contrôle inhibiteur exécutif préfrontal sur l'environnement.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-22',
    courseId: 'crs-neuro-2',
    questionNumber: 22,
    type: 'QCM',
    content: "Dans une lésion unilatérale de l’aire 8 frontale (centre oculogyre), on observe :",
    options: [
      "A. Une paralysie de la latéralité du regard vers le côté opposé avec déviation des yeux vers la lésion",
      "B. Une paralysie de l’accommodation",
      "C. Un nystagmus vertical",
      "D. Un ptosis",
      "E. Une mydriase aréflexique"
    ],
    correctAnswers: [0],
    explanation: "L’aire 8 commande les saccades oculaires vers le côté opposé. Sa lésion entraîne une déviation conjuguée de la tête et des yeux vers le côté de la lésion (le malade 'regarde sa lésion et évite son hémiplégie').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-23',
    courseId: 'crs-neuro-2',
    questionNumber: 23,
    type: 'QCM',
    content: "L’apraxie bucco-faciale est liée à une lésion de :",
    options: [
      "A. Le noyau du facial",
      "B. La partie inférieure de la frontale ascendante (près de l’opercule rolandique)",
      "C. Le cortex insulaire",
      "D. Le noyau ambigu",
      "E. Le gyrus précentral bilatéral"
    ],
    correctAnswers: [1],
    explanation: "L'apraxie bucco-faciale (incapacité à réaliser sur ordre des mouvements de la bouche, souffler, tirer la langue) siège dans l'opercule rolandique frontal inférieur controlatéral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-24',
    courseId: 'crs-neuro-2',
    questionNumber: 24,
    type: 'QCM',
    content: "Un syndrome de Millard-Gubler associe :",
    options: [
      "A. Atteinte du VI et hémiparésie controlatérale",
      "B. Atteinte du VII périphérique ipsilatérale et hémiplégie controlatérale épargnant la face",
      "C. Atteinte du V et hémianesthésie controlatérale",
      "D. Atteinte du IX/X et dysphagie",
      "E. Atteinte du III et hémichorée"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Millard-Gubler est un syndrome protubérantiel ventral : paralysie faciale périphérique homolatérale (VII) et hémiplégie controlatérale respectant la face.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-25',
    courseId: 'crs-neuro-2',
    questionNumber: 25,
    type: 'QCM',
    content: "L’artère principale irriguant le cortex visuel primaire (aire 17 striée) est :",
    options: [
      "A. L’artère cérébrale moyenne",
      "B. L’artère cérébrale antérieure",
      "C. L’artère cérébrale postérieure (branche calcarine)",
      "D. L’artère choroïdienne antérieure",
      "E. L’artère communicante postérieure"
    ],
    correctAnswers: [2],
    explanation: "L’artère calcarine, branche terminale de l’artère cérébrale postérieure (ACP), vascularise le cortex strié de chaque côté de la scissure calcarine.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 2
  {
    id: 'q-nro-2-c1',
    courseId: 'crs-neuro-2',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Monsieur A., 68 ans, hypertendu, présente brutalement une déviation de la bouche à droite, une hémiplégie gauche complète, une hémianesthésie gauche et un trouble du regard (il regarde à droite). Le clignement à la menace est présent à gauche. Quelle est la localisation et l'étiologie la plus fréquente ?",
    options: [
      "A. Cortex frontal droit ; Tumeur",
      "B. Capsule interne droite ; Accident vasculaire ischémique",
      "C. Tronc cérébral gauche ; Hémorragie",
      "D. Moelle épinière ; Sclérose en plaques",
      "E. Cortex pariétal gauche ; Abcès"
    ],
    correctAnswers: [1],
    explanation: "L’hémiplégie et l’hémianesthésie proportionnelles controlatérales avec déviation du regard vers la lésion sont caractéristiques d'une lésion de la capsule interne droite, le plus souvent un AVC ischémique par occlusion d'une artère lenticulo-striée.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-c2',
    courseId: 'crs-neuro-2',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Madame B., 55 ans, se plaint de « ne plus rien sentir du côté droit ». À l’examen : hémianesthésie droite complète (tous les modes), discrète hémiparésie droite. Trois mois plus tard, elle développe des douleurs brûlantes intenses à l’hémicorps droit exacerbées par le frottement des vêtements. Quel est le syndrome et l'artère responsable ?",
    options: [
      "A. Syndrome frontal ; Artère cérébrale moyenne",
      "B. Syndrome de Wallenberg ; Artère cérébelleuse postéro-inférieure",
      "C. Syndrome thalamique (Dejerine-Roussy) ; Artère cérébrale postérieure (branche thalamogéniculée)",
      "D. Syndrome capsulaire ; Artère choroïdienne antérieure",
      "E. Syndrome pariétal ; Artère sylvienne superficielle"
    ],
    correctAnswers: [2],
    explanation: "L'hémianesthésie complète suivie de douleurs neuropathiques centrales retardées très intenses (hyperpathie/allodynie) définit le syndrome de Dejerine-Roussy, secondaire à un infarctus dans le territoire de l'artère thalamogéniculée (branche de l'ACP).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-c3',
    courseId: 'crs-neuro-2',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Un étudiant, après un traumatisme crânien modéré, présente un changement de personnalité : désinhibition, jeux de mots gras (moria), apathie alternant avec des accès de colère. Le grasping reflex est présent à gauche. Quelle est la région cérébrale lésée et quel signe NE serait PAS attendu dans ce syndrome ?",
    options: [
      "A. Lobe temporal ; Aphasie de Wernicke",
      "B. Lobe frontal (région préfrontale) ; Apraxie idéomotrice isolée",
      "C. Lobe pariétal ; Héminégligence",
      "D. Cervelet ; Dysmétrie",
      "E. Corps calleux ; Dyspraxie diagonistique"
    ],
    correctAnswers: [1],
    explanation: "Les troubles du comportement (désinhibition, apathie, moria) et le grasping signent un syndrome préfrontal par contusion des pôles frontaux. L'apraxie idéomotrice est typique des lésions pariétales gauches et n'est pas un signe attendu ici.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-c4',
    courseId: 'crs-neuro-2',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Une patiente présente des difficultés à reconnaître les objets mis dans la main gauche, ignore la manche gauche lors de l'habillage, et dessine tous les chiffres d'une horloge à droite en niant ses difficultés. Quel est le siège lésionnel et quel signe associé est fréquent ?",
    options: [
      "A. Frontale droite ; Mutisme akinétique",
      "B. Pariétale droite ; Allochirie (et héminégligence gauche avec anosognosie)",
      "C. Occipitale gauche ; Alexie sans agraphie",
      "D. Temporale gauche ; Aphasie de Wernicke",
      "E. Thalamique gauche ; Douleurs de Dejerine-Roussy"
    ],
    correctAnswers: [1],
    explanation: "Ce tableau réunit l'astéréognosie gauche, l'apraxie d'habillage, l'héminégligence spatiale gauche et l'anosognosie, typiques d'une lésion pariétale droite (hémisphère mineur). L'allochirie est fréquente.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-2-c5',
    courseId: 'crs-neuro-2',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Un jeune homme présente une cécité brutale après un choc. À l'examen : pupilles réactives, fond d'œil normal, clignement à la menace absent. Il décrit parfois voir des éclairs de lumière. Quel est le diagnostic et l'étiologie la plus probable chez un sujet jeune ?",
    options: [
      "A. Névrite optique rétrobulbaire ; Sclérose en plaques",
      "B. Rétinopathie traumatique ; Décollement de rétine",
      "C. Cécité corticale ; Traumatisme crânien avec contusions occipitales bilatérales",
      "D. Cécité psychogène ; Trouble de conversion",
      "E. Glaucome aigu bilatéral ; Fermeture de l'angle"
    ],
    correctAnswers: [2],
    explanation: "La conservation des réflexes photomoteurs et la normalité du fond d'œil associées à la perte du clignement à la menace définissent la cécité corticale, causée chez le sujet jeune par des contusions occipitales bilatérales lors d'un traumatisme crânien.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_2_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-2-mindmap',
    courseId: 'crs-neuro-2',
    title: 'Mind Map : Syndromes Topographiques du Système Nerveux Central',
    type: 'mindmap',
    content: `
# MIND MAP : SYNDROMES TOPOGRAPHIQUES
*Localisation lésionnelle et sémiologie clinique - Faculté de Médecine d'Algérie*

## 1. LOBE FRONTAL
- **Cortex Préfrontal** : Apathie ou désinhibition, syndrome dysexécutif, moria, anosognosie, dépendance à l'environnement.
- **Cortex Moteur & Prémoteur** : Hémiplégie motrice, grasping reflex, apraxie de la marche (F1 médiale), apraxie bucco-faciale.
- **Aire de Broca (F3 gauche)** : Aphasie non fluente d'expression.
- **Champ frontal oculogyre (Aire 8)** : Déviation conjuguée des yeux vers la lésion.

## 2. LOBE PARIÉTAL
- **Hémisphère Droit (Mineur)** : Héminégligence spatiale gauche, anosognosie, asomatognosie (syndrome d'Anton-Babinski), allochirie.
- **Hémisphère Gauche (Dominant)** : Syndrome de Gerstmann (agraphie, acalculie, agnosie digitale, confusion droite/gauche), apraxie idéomotrice, astéréognosie droite.

## 3. LOBE TEMPORAL
- **Aire de Wernicke (T1-T2 gauche)** : Aphasie fluente avec jargonaphasie et troubles majeurs de compréhension.
- **Boucle de Meyer (Radiations optiques)** : Quadranopsie supérieure controlatérale ("pie in the sky").
- **Système limbique / Hippocampe** : Amnésie antérograde, crises partielles temporales avec aura épigastrique ascendante et "déjà-vu".
- **Agnosies auditives** : Surdité verbale pure, amusie (temporale droite).

## 4. LOBE OCCIPITAL & SOUS-CORTICAL
- **Occipital** : HLH avec épargne maculaire, cécité corticale (RPM conservés, fond d'œil normal), prosopagnosie (gyrus fusiforme), alexie sans agraphie.
- **Capsule Interne** : Hémiplégie proportionnelle controlatérale massive ("tout ou rien").
- **Thalamus (Dejerine-Roussy)** : Hémianesthésie complète + douleurs neuropathiques tardives hyperpathiques.
- **Tronc Cérébral (Syndromes alternes)** :
  - *Weber* : Mésencéphale -> III ipsi + hémiplégie contra.
  - *Millard-Gubler* : Protubérance -> VII périph ipsi + hémiplégie contra.
  - *Wallenberg* : Bulbe latéral -> CBH ipsi + vertiges/ataxie ipsi + thermo-algésie contra.
`
  },
  {
    id: 'res-nro-2-astuces',
    courseId: 'crs-neuro-2',
    title: 'Astuces & Mnémotechniques : Syndromes Topographiques',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (TOPOGRAPHIE)
*Par Dr. LAIDANI.MERIEM*

- **Syndromes alternes du tronc cérébral : « Ipsi la tête, Contra le corps »**
  - La lésion touche le noyau du nerf crânien émergent du même côté (signe ipsilatéral) et la voie pyramidale ou spinothalamique décussée (signe controlatéral).

- **Champ visuel : « Pie in the sky »**
  - Une part de ciel = lésion **Temporale** -> Quadranopsie **supérieure** controlatérale.
  - À l'inverse : atteinte **Pariétale** -> Quadranopsie **inférieure** ("pie on the floor").

- **Différencier Broca vs Wernicke :**
  - **Broca (F3 antérieur)** : Blocage, Bradyphémie, Bonne compréhension -> *Non fluente*.
  - **Wernicke (T1 postérieur)** : Word salad (salade de mots), Without comprehension -> *Fluente mais vide*.

- **Signe de Babinski :**
  - Voie pyramidale descend dans le cordon **latéral** de la moelle (jamais dans le cordon postérieur !).
`
  }
];

// ==========================================
// LESSON 3: SYNDROMES NEUROMUSCULAIRES
// ==========================================
export const NEURO_LESSON_3_QUESTIONS: Question[] = [
  // CAS 1: Dermatomyosite
  {
    id: 'q-nro-3-01',
    courseId: 'crs-neuro-3',
    questionNumber: 1,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - Q1 : Mme K.D., 28 ans, consulte pour une faiblesse progressive des membres depuis 3 mois (peine à se lever d'une chaise basse, monter les escaliers, relever ses cheveux). Examen : déficit moteur proximal symétrique 3/5, signe de Gowers positif, érythème violacé 'héliotrope' péri-orbitaire et papules de Gottron sur les mains, ROT conservés, pas de trouble sensitif. Le tableau clinique évoque en premier lieu :",
    options: [
      "A. Une myasthénie",
      "B. Une myopathie inflammatoire (dermatomyosite)",
      "C. Une neuropathie périphérique",
      "D. Une sclérose latérale amyotrophique"
    ],
    correctAnswers: [1],
    explanation: "La combinaison d'une faiblesse proximale symétrique des ceintures, de signes cutanés pathognomoniques (érythème héliotrope, papules de Gottron) sans trouble sensitif signe une dermatomyosite.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-02',
    courseId: 'crs-neuro-3',
    questionNumber: 2,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - Q2 : Le premier examen paraclinique biologique simple à demander en priorité devant cette suspicion de myopathie est :",
    options: [
      "A. Électroneuromyogramme (ENMG)",
      "B. Dosage des enzymes musculaires (CPK, aldolase)",
      "C. Scanner thoracique",
      "D. Biopsie musculaire"
    ],
    correctAnswers: [1],
    explanation: "Dans le bilan initial d'une suspicion de myopathie, le dosage des CPK est l'examen de dépistage biologique non invasif de première intention indispensable.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-03',
    courseId: 'crs-neuro-3',
    questionNumber: 3,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - Q3 : Les CPK reviennent à 2 500 UI/L. L'ENMG montre des potentiels d'unité motrice de faible amplitude, de courte durée, polyphasiques avec recrutement précoce. Ces données confirment :",
    options: [
      "A. Un syndrome neurogène périphérique",
      "B. Un syndrome myogène",
      "C. Une atteinte de la jonction neuromusculaire",
      "D. Une atteinte médullaire"
    ],
    correctAnswers: [1],
    explanation: "L'élévation massive des CPK associée à un tracé ENMG myogène (potentiels brefs, microvoltés, recrutement précoce) confirme l'atteinte primitive de la fibre musculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-04',
    courseId: 'crs-neuro-3',
    questionNumber: 4,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - Q4 : L'examen histologique attendu sur la biopsie musculaire d'une dermatomyosite est :",
    options: [
      "A. Atrophie neurogène groupée en damier",
      "B. Infiltration inflammatoire périfasciculaire avec atrophie périfasciculaire",
      "C. Dégénérescence wallérienne",
      "D. Démyélinisation segmentaire"
    ],
    correctAnswers: [1],
    explanation: "La dermatomyosite se caractérise histologiquement par une microangiopathie médiée par le complément avec infiltration inflammatoire périvasculaire et périfasciculaire et atrophie des fibres musculaires en bordure de faisceau.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-05',
    courseId: 'crs-neuro-3',
    questionNumber: 5,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - Q5 : Parmi les étiologies à rechercher systématiquement devant une dermatomyosite de l'adulte, la plus importante sur le plan pronostique est :",
    options: [
      "A. Une carence vitaminique",
      "B. Une intoxication médicamenteuse",
      "C. Une néoplasie sous-jacente (syndrome paranéoplasique)",
      "D. Une infection virale chronique"
    ],
    correctAnswers: [2],
    explanation: "Chez l'adulte de plus de 40 ans, la dermatomyosite est associée à un cancer sous-jacent dans 20 à 30% des cas (sein, ovaire, poumon, tube digestif, nasopharynx), nécessitant un dépistage systématique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-06',
    courseId: 'crs-neuro-3',
    questionNumber: 6,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - Q6 : Le traitement de première intention pour induire la rémission de cette myopathie inflammatoire est :",
    options: [
      "A. Les immunoglobulines IV seules",
      "B. La corticothérapie orale à forte dose (Prednisone 1 mg/kg/j)",
      "C. Les anticholinestérasiques",
      "D. La kinésithérapie active intensive précoce"
    ],
    correctAnswers: [1],
    explanation: "La corticothérapie à forte dose (Prednisone 1 mg/kg/j) constitue le traitement de première ligne, avec décroissance très progressive sur 12 à 18 mois.",
    difficulty: 'facile'
  },

  // CAS 2: Duchenne
  {
    id: 'q-nro-3-07',
    courseId: 'crs-neuro-3',
    questionNumber: 7,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - Q1 : Un garçon de 7 ans consulte pour retard à la marche, démarche dandinante et signe de Gowers. Antécédents : décès d'un oncle maternel à 20 ans d'une maladie musculaire. Examen : pseudo-hypertrophie des mollets, déficit proximal 3/5. Le mode de transmission génétique est :",
    options: [
      "A. Autosomique dominant",
      "B. Récessif lié à l'X",
      "C. Autosomique récessif",
      "D. Mitochondrial"
    ],
    correctAnswers: [1],
    explanation: "La myopathie de Duchenne (DMD) est une affection génétique à transmission récessive liée à l'X, touchant les garçons et transmise par les femmes conductrices.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-08',
    courseId: 'crs-neuro-3',
    questionNumber: 8,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - Q2 : La pseudo-hypertrophie des mollets dans la dystrophie de Duchenne est due à :",
    options: [
      "A. Une hypertrophie vraie des fibres musculaires",
      "B. Un remplacement des fibres musculaires nécrosées par du tissu fibro-adipeux",
      "C. Un œdème musculaire inflammatoire",
      "D. Une hypervascularisation"
    ],
    correctAnswers: [1],
    explanation: "La destruction des myocytes nécrosés sans régénération efficace conduit à leur substitution par du tissu adipeux et conjonctif dense, donnant l'aspect paradoxal d'hypertrophie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-09',
    courseId: 'crs-neuro-3',
    questionNumber: 9,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - Q3 : Dans la myopathie de Duchenne, quelle anomalie biologique est la plus constante et spectaculaire dès les premières années de vie ?",
    options: [
      "A. Une élévation modérée des transaminases",
      "B. Une élévation massive des CPK (souvent > 10 000 UI/L, jusqu'à 50-100 fois la normale)",
      "C. Une hypergammaglobulinémie",
      "D. La présence d'anticorps anti-RACh"
    ],
    correctAnswers: [1],
    explanation: "L'élévation des CPK est constante, majeure et précoce dès la naissance dans la DMD (souvent > 10 000 à 20 000 UI/L).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-10',
    courseId: 'crs-neuro-3',
    questionNumber: 10,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - Q4 : Le diagnostic de certitude de la dystrophie de Duchenne repose sur :",
    options: [
      "A. L'ENMG seul",
      "B. L'analyse génétique moléculaire (délétion dans le gène DMD avec rupture du cadre de lecture) et/ou la biopsie musculaire montrant l'absence complète de dystrophine",
      "C. Le scanner corporel",
      "D. La ponction lombaire"
    ],
    correctAnswers: [1],
    explanation: "La certitude diagnostique est apportée par la génétique (mutation du gène DMD sur Xp21) ou la biopsie musculaire (absence totale de dystrophine au Western blot et immunohistochimie).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-11',
    courseId: 'crs-neuro-3',
    questionNumber: 11,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - Q5 : La complication viscérale la plus redoutée engageant le pronostic vital chez l'adolescent atteint de myopathie de Duchenne est :",
    options: [
      "A. L'insuffisance hépatique",
      "B. La cardiomyopathie dilatée et l'insuffisance respiratoire restrictive par atteinte du diaphragme",
      "C. L'atteinte rénale chronique",
      "D. L'accident vasculaire cérébral"
    ],
    correctAnswers: [1],
    explanation: "La dystrophine est normalement exprimée dans le myocarde et le diaphragme. La cardiomyopathie et l'insuffisance respiratoire restrictive représentent les deux causes majeures de mortalité.",
    difficulty: 'facile'
  },

  // CAS 3: Myopathie aux Statines
  {
    id: 'q-nro-3-12',
    courseId: 'crs-neuro-3',
    questionNumber: 12,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - Q1 : Un homme de 62 ans sous atorvastatine 40 mg/j depuis 2 ans consulte pour myalgies diffuses, crampes nocturnes et faiblesse proximale des cuisses. CPK à 850 UI/L. Quelle est la première mesure thérapeutique ?",
    options: [
      "A. Prescrire des corticoïdes",
      "B. Arrêter immédiatement la statine pour confirmer l'imputabilité",
      "C. Augmenter la dose de statine",
      "D. Prescrire des anticholinestérasiques"
    ],
    correctAnswers: [1],
    explanation: "La première étape est l'arrêt de la statine, permettant généralement la régression des myalgies et la normalisation des CPK en 2 à 4 semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-13',
    courseId: 'crs-neuro-3',
    questionNumber: 13,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - Q2 : La complication aiguë la plus redoutable d'une toxicité musculaire sévère aux statines est :",
    options: [
      "A. L'évolution vers une dystrophie musculaire",
      "B. La rhabdomyolyse avec myoglobinurie massive et insuffisance rénale aiguë",
      "C. La transformation maligne",
      "D. L'anévrisme cardiaque"
    ],
    correctAnswers: [1],
    explanation: "La rhabdomyolyse aiguë (CPK > 10 000 UI/L, myoglobinurie avec urines 'coca-cola') met en jeu le pronostic vital par nécrose tubulaire aiguë.",
    difficulty: 'facile'
  },

  // CAS 4 & 5: Myasthénie & Anti-MuSK
  {
    id: 'q-nro-3-14',
    courseId: 'crs-neuro-3',
    questionNumber: 14,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - Q1 : Une femme de 45 ans se plaint d'un ptosis bilatéral fluctuant aggravé le soir, d'une diplopie horizontale et d'une voix nasonnée après conversation prolongée, s'améliorant après le repos. Le signe clinique cardinal est :",
    options: [
      "A. L'amyotrophie proximale",
      "B. La fatigabilité musculaire à l'effort avec amélioration au repos",
      "C. Les fasciculations",
      "D. Les paresthésies distales"
    ],
    correctAnswers: [1],
    explanation: "La fatigabilité (aggravation à l'effort et au cours de la journée, récupération après repos ou sommeil) est le signe clinique pathognomonique de la myasthénie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-15',
    courseId: 'crs-neuro-3',
    questionNumber: 15,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - Q2 : L'ENMG recherchant une anomalie de la jonction neuromusculaire mettra en évidence :",
    options: [
      "A. Des potentiels géants de réinnervation",
      "B. Un décrément > 10% de l'amplitude du potentiel moteur lors des stimulations répétitives à basse fréquence (3 Hz)",
      "C. Un recrutement précoce myogène",
      "D. Des potentiels de fibrillation spontanés"
    ],
    correctAnswers: [1],
    explanation: "Le décrément de plus de 10% lors de stimulations nerveuses répétitives à 3 Hz traduit l'épuisement de la libération d'acétylcholine sur des récepteurs postsynaptiques déficitaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-16',
    courseId: 'crs-neuro-3',
    questionNumber: 16,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - Q3 : Quel examen d'imagerie thoracique est indispensable chez tout patient myasthénique ?",
    options: [
      "A. Échocardiographie",
      "B. Scanner thoracique sans et avec injection pour recherche d'un thymome ou d'une hyperplasie thymique",
      "C. Ponction lombaire",
      "D. IRM médullaire"
    ],
    correctAnswers: [1],
    explanation: "Le scanner thoracique est systématique : 10 à 15% des patients myasthéniques ont un thymome (tumeur épithéliale du thymus) et 60 à 70% une hyperplasie folliculaire thymique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-17',
    courseId: 'crs-neuro-3',
    questionNumber: 17,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - Q1 : Une jeune femme de 32 ans présente une myasthénie séronégative pour les anticorps anti-RACh, mais positive pour les anticorps anti-MuSK. Quelles sont les particularités cliniques de cette forme ?",
    options: [
      "A. Forme oculaire pure bénigne",
      "B. Atteinte bulbo-faciale et respiratoire sévère prédominante, avec réponse médiocre ou intolérance aux anticholinestérasiques",
      "C. Atteinte purement distale des membres",
      "D. Présence constante d'un thymome malin"
    ],
    correctAnswers: [1],
    explanation: "Les myasthénies anti-MuSK se singularisent par une atteinte bulbaire sévère (dysphagie, dysarthrie, amyotrophie de la langue), un risque respiratoire élevé, un thymus généralement normal et une résistance ou hypersensibilité aux anticholinestérasiques, justifiant souvent le Rituximab.",
    difficulty: 'facile'
  },

  // CAS 6: Crise Myasthénique en Réanimation
  {
    id: 'q-nro-3-18',
    courseId: 'crs-neuro-3',
    questionNumber: 18,
    type: 'Cas Clinique',
    clinicalCaseNumber: 6,
    content: "CAS 6 - Q1 : Un patient myasthénique de 58 ans sous pyridostigmine présente une dyspnée aiguë à 32/min, un tirage, une incapacité totale à avaler sa salive et un encombrement pharyngé après une surinfection bronchique. Quelle est la priorité thérapeutique immédiate ?",
    options: [
      "A. Doubler la dose de pyridostigmine",
      "B. Sécurisation des voies aériennes par intubation orotrachéale et ventilation mécanique assistée en réanimation",
      "C. Injection d'atropine",
      "D. Échanges plasmatiques sans intubation"
    ],
    correctAnswers: [1],
    explanation: "La crise myasthénique aiguë est une urgence vitale par défaillance des muscles respiratoires et de la déglutition (encombrement, fausses routes). L'intubation et la ventilation assistée priment sur tout traitement pharmacologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-19',
    courseId: 'crs-neuro-3',
    questionNumber: 19,
    type: 'Cas Clinique',
    clinicalCaseNumber: 6,
    content: "CAS 6 - Q2 : Le traitement d'urgence de la crise myasthénique pour éliminer ou neutraliser rapidement les auto-anticorps repose sur :",
    options: [
      "A. Arrêt de tous les traitements sans autre mesure",
      "B. Échanges plasmatiques (plasmaphérèse) ou Immunoglobulines intraveineuses (IgIV à 2 g/kg sur 2-5 jours)",
      "C. Antibiothérapie large seule",
      "D. Corticoïdes à très fortes doses d'emblée en monothérapie"
    ],
    correctAnswers: [1],
    explanation: "Les échanges plasmatiques ou les IgIV permettent une action rapide en éliminant ou saturant les auto-anticorps pathogènes. Les corticoïdes à forte dose d'emblée peuvent entraîner une aggravation paradoxale initiale.",
    difficulty: 'facile'
  },

  // CAS 7: Neuropathie Diabétique
  {
    id: 'q-nro-3-20',
    courseId: 'crs-neuro-3',
    questionNumber: 20,
    type: 'Cas Clinique',
    clinicalCaseNumber: 7,
    content: "CAS 7 - Q1 : Un homme de 65 ans diabétique depuis 15 ans consulte pour brûlures nocturnes des pieds, steppage bilatéral, hypoesthésie en 'chaussettes' et abolition des réflexes achilléens. Il s'agit d'une :",
    options: [
      "A. Radiculopathie L5 bilatérale",
      "B. Polyneuropathie distale symétrique longueur-dépendante",
      "C. Mononeuropathie multiple",
      "D. Polyradiculonévrite aiguë"
    ],
    correctAnswers: [1],
    explanation: "La polyneuropathie distale symétrique longueur-dépendante est la complication neurologique la plus fréquente du diabète, atteignant d'abord les pieds (fibres les plus longues) avec déficit thermo-algique et aréflexie achilléenne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-21',
    courseId: 'crs-neuro-3',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 7,
    content: "CAS 7 - Q2 : La complication trophique podologique majeure à redouter et à dépister chez ce patient diabétique neuropathique est :",
    options: [
      "A. Le lymphœdème",
      "B. Le mal perforant plantaire (ulcère neurotrophique du pied diabétique)",
      "C. La phlébite profonde",
      "D. L'ostéosarcome"
    ],
    correctAnswers: [1],
    explanation: "La perte de la sensibilité thermo-algique et tactile (anesthésie protectrice) associée aux microtraumatismes d'appui indolores conduit au mal perforant plantaire, porte d'entrée majeure d'ostéite et cause principale d'amputation.",
    difficulty: 'facile'
  },

  // CAS 8: Guillain-Barré
  {
    id: 'q-nro-3-22',
    courseId: 'crs-neuro-3',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 8,
    content: "CAS 8 - Q1 : Une jeune femme de 25 ans consulte pour une faiblesse ascendante des membres inférieurs vers les membres supérieurs en 3 jours, survenue 10 jours après une diarrhée fébrile. Examen : tétraparésie, aréflexie ostéo-tendineuse généralisée, diplégie faciale périphérique. Le diagnostic est :",
    options: [
      "A. Myasthénie aiguë",
      "B. Polyradiculonévrite aiguë inflammatoire (Syndrome de Guillain-Barré)",
      "C. Polynévrite diabétique aiguë",
      "D. Myélite transverse"
    ],
    correctAnswers: [1],
    explanation: "Le déficit moteur flasque ascendant, l'aréflexie généralisée et l'atteinte bilatérale du nerf facial (diplégie faciale) après un épisode de gastro-entérite (Campylobacter jejuni) signent le syndrome de Guillain-Barré.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-23',
    courseId: 'crs-neuro-3',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 8,
    content: "CAS 8 - Q2 : L'examen clé du liquide cérébrospinal dans le syndrome de Guillain-Barré montre typiquement :",
    options: [
      "A. Une hypercellularité > 100 PNN/mm³",
      "B. Une dissociation albumino-cytologique (hyperprotéinorachie > 0,55 g/L avec moins de 10 cellules/mm³)",
      "C. Une hypoglycorachie profonde",
      "D. Un liquide hémorragique"
    ],
    correctAnswers: [1],
    explanation: "La dissociation albumino-cytologique (protéinorachie élevée sans pléiocytose cellulaire) est caractéristique du SGB, bien qu'elle puisse être retardée de 7 à 10 jours après le début des symptômes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-3-24',
    courseId: 'crs-neuro-3',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 8,
    content: "CAS 8 - Q3 : Le traitement spécifique validé de première intention du syndrome de Guillain-Barré associe :",
    options: [
      "A. Corticoïdes à forte dose seuls",
      "B. Immunoglobulines intraveineuses (IgIV 0,4 g/kg/j pendant 5 jours) ou Échanges plasmatiques (plasmaphérèse)",
      "C. Antibiothérapie par céphalosporine",
      "D. Simple surveillance sans traitement spécifique"
    ],
    correctAnswers: [1],
    explanation: "Les IgIV ou la plasmaphérèse sont les deux seuls traitements d'efficacité démontrée réduisant la durée de ventilation et accélérant la récupération. Les corticoïdes seuls sont inefficaces.",
    difficulty: 'facile'
  },

  // CAS 9: Mononeuropathie Multiple Vasculitique
  {
    id: 'q-nro-3-25',
    courseId: 'crs-neuro-3',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 9,
    content: "CAS 9 - Q1 : Un homme de 70 ans présente successivement un déficit du nerf radial droit (chute des doigts), puis 3 semaines après un déficit du nerf sciatique poplité externe gauche (steppage), avec altération de l'état général, purpura vasculaire et ANCA anti-MPO positifs. Quel mécanisme lésionnel sous-tend cette atteinte ?",
    options: [
      "A. Compression mécanique canalaire",
      "B. Ischémie nerveuse par vascularite nécrosante des vasa nervorum (multinévrite)",
      "C. Démyélinisation auto-immune paranodale",
      "D. Intoxication exogène"
    ],
    correctAnswers: [1],
    explanation: "L'atteinte successive, asymétrique et asynchrone de plusieurs troncs nerveux distincts (multinévrite / mononeuropathie multiple) dans un contexte systémique fébrile est causée par l'ischémie et l'infarctus des nerfs secondaires à la vascularite nécrosante des vasa nervorum.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_3_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-3-mindmap',
    courseId: 'crs-neuro-3',
    title: 'Tableau Comparatif & Diagnostic Différentiel des Atteintes Neuromusculaires',
    type: 'mindmap',
    content: `
# GUIDE DE DIAGNOSTIC DIFFÉRENTIEL DES ATTEINTES NEUROMUSCULAIRES
*Programme National de Neurologie 4ème Année - Contexte Algérien*

| Caractéristique | Syndrome Myogène (Muscle) | Myasthénie (Jonction NM) | Syndrome Neurogène Périphérique (Nerf) |
| :--- | :--- | :--- | :--- |
| **Site Lésionnel** | Fibre musculaire striée | Membrane post-synaptique (anti-RACh/MuSK) | Neurone périphérique (axone / gaine myéline) |
| **Déficit Moteur** | Proximal, symétrique (ceintures) | Fluctuant, fatigabilité à l'effort | Distal, souvent asymétrique |
| **Troubles Sensitifs** | **Absents** | **Absents** | **Présents** (paresthésies, hypoesthésie, douleurs) |
| **Réflexes (ROT)** | **Conservés** (sauf stade ultime) | **Conservés** | **Abolis ou diminués** |
| **Amyotrophie** | Proximale, symétrique | Rare | Distale, précoce et marquée |
| **Fasciculations** | Absentes | Absentes | Présentes si atteinte de la corne antérieure (SLA) |
| **Enzymes (CPK)** | **Très élevées (x10 à x100)** | **Strictement normales** | **Strictement normales** |
| **ENMG** | Tracé myogène (bref, microvolté) | **Décrément > 10% à 3 Hz** | Tracé neurogène (appauvri, accéléré, vitesses ralenties) |
| **Examen Clé** | Biopsie musculaire / Génétique | Sérologie anti-RACh/MuSK + Scanner thymus | ENMG + Bilan étiologique (glycémie, B12) |
| **Urgences** | Rhabdomyolyse aiguë (rein) | **Crise myasthénique (détresse respiratoire)** | **Guillain-Barré (atteinte respiratoire/dysautonomie)** |
`
  },
  {
    id: 'res-nro-3-astuces',
    courseId: 'crs-neuro-3',
    title: 'Astuces & Mnémotechniques : Syndromes Neuromusculaires',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (NEUROMUSCULAIRE)
*Par Dr. LAIDANI.MERIEM*

### ⚠️ Myasthénie : Le test à la glace (Ice Pack Test)
- L'application d'une poche de glace sur la paupière pendant 2 minutes améliore spectaculairement le ptosis myasthénique en inhibant l'acétylcholinestérase locale.

### ⚠️ Guillain-Barré : "Gare en Box de Réanimation !"
- Tout patient suspect de syndrome de Guillain-Barré doit faire l'objet d'une surveillance continue de la capacité vitale (spirométrie au lit) : si CV < 15-20 ml/kg -> Intubation préventive immédiate !

### ⚠️ Myopathie de Duchenne vs Becker :
- **DMD** : Délétion avec **Rupture** du cadre de lecture -> Dystrophine absente -> Forme grave de l'enfant (fauteuil vers 10-12 ans).
- **BMD** : Délétion avec **Respect** du cadre -> Dystrophine partielle -> Forme plus tardive et bénigne.
`
  }
];
