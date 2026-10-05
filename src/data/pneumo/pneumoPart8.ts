import { Question, CourseResource } from '../../types/medical';

// Lesson 14: Dilatations des Bronches (DDB)
export const PNEUMO_LESSON_14_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-14-01',
    courseId: 'crs-pneumo-14',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant la définition anatomopathologique des DDB :",
    options: [
      "A. Il s'agit d'une augmentation réversible du calibre des bronches.",
      "B. La destruction de la charpente fibro-cartilagineuse est un élément clé.",
      "C. L'épithélium bronchique est le siège d'une métaplasie malpighienne.",
      "D. L'hypervascularisation systémique du chorion explique la fréquence des hémoptysies.",
      "E. L'hypersécrétion bronchique est liée à la destruction des muscles lisses."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B, D\nExplication : La DDB est définie comme une augmentation permanente et irréversible (A est faux). La destruction du cartilage (B) est centrale. L'épithélium subit une métaplasie mucipare (et non malpighienne) (C est faux). L'hypervascularisation systémique (D) est responsable des hémoptysies. L'hypersécrétion est due à la métaplasie mucipare, pas à la destruction des muscles lisses (E est faux)."
  },
  {
    id: 'q-pnm-14-02',
    courseId: 'crs-pneumo-14',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Le \"cercle vicieux de Cole\" dans les DDB implique :",
    options: [
      "A. Une altération initiale de la muqueuse bronchique.",
      "B. Une colonisation bactérienne précoce.",
      "C. Une réponse inflammatoire systémique généralisée.",
      "D. Une accumulation de sécrétions purulentes.",
      "E. Un dommage tissulaire favorisant la réparation de la paroi."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D\nExplication : Le cercle vicieux est un phénomène local. Il débute par une altération de la muqueuse (A), suivie d'une colonisation bactérienne (B) et d'une réponse inflammatoire locale (C est faux). L'accumulation de sécrétions purulentes (D) entretient l'inflammation. Le dommage tissulaire est destructeur et non réparateur (E est faux), perpétuant le cercle."
  },
  {
    id: 'q-pnm-14-03',
    courseId: 'crs-pneumo-14',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Parmi ces étiologies, lesquelles sont le plus souvent responsables de DDB diffuses ?",
    options: [
      "A. Corps étranger bronchique.",
      "B. Tuberculose pulmonaire.",
      "C. Déficit immunitaire humoral (agammaglobulinémie).",
      "D. Mucoviscidose.",
      "E. Tumeur bronchique bénigne."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : C, D\nExplication : Les DDB diffuses sont typiquement liées à un terrain général (déficits immunitaires C, mucoviscidose D). La tuberculose (B) et les causes mécaniques comme un corps étranger (A) ou une tumeur (E) entraînent le plus souvent des DDB localisées en aval de l'obstruction."
  },
  {
    id: 'q-pnm-14-04',
    courseId: 'crs-pneumo-14',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. À l'examen clinique d'un patient atteint de DDB, on retrouve classiquement :",
    options: [
      "A. Un hippocratisme digital dans 20% des cas.",
      "B. Une expectoration chronique abondante et fétide.",
      "C. Des râles bronchiques permanents, même en dehors des poussées.",
      "D. Une dyspnée proportionnelle à l'étendue des lésions.",
      "E. Une absence totale de symptômes dans les formes \"sèches\"."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B, D\nExplication : L'hippocratisme digital est présent dans environ 80% des cas (A est faux). L'expectoration chronique est le \"maître symptôme\", souvent fétide (B). L'auscultation peut être pauvre en dehors des poussées (C est faux). La dyspnée est bien corrélée à l'étendue (D). Les formes \"sèches\" sont peu productives, mais peuvent se manifester par des hémoptysies ou une dyspnée (E est faux)."
  },
  {
    id: 'q-pnm-14-05',
    courseId: 'crs-pneumo-14',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Sur la radiographie thoracique standard, les signes évocateurs de DDB sont :",
    options: [
      "A. Des clartés tubulées.",
      "B. Un épanchement pleural abondant.",
      "C. Des images en \"rayon de miel\".",
      "D. Des opacités tubulées en \"V\" ou \"Y\" à pointe hilaire (impactions mucoïdes).",
      "E. Une cardiomégalie."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\nExplication : Les clartés tubulées (A) correspondent aux bronches dilatées. Les images en \"rayon de miel\" (C) et les impactions mucoïdes (D) sont très évocatrices. L'épanchement pleural (B) et la cardiomégalie (E) ne sont pas des signes directs de DDB, mais peuvent être des complications (insuffisance cardiaque droite)."
  },
  {
    id: 'q-pnm-14-06',
    courseId: 'crs-pneumo-14',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Le scanner thoracique en coupes fines est l'examen de référence pour le diagnostic des DDB car il montre :",
    options: [
      "A. Un signe de la boule graisseuse.",
      "B. Un calibre bronchique supérieur à celui de l'artère accompagnante (signe de la bague chevalière).",
      "C. La visualisation des bronches dans le tiers externe du parenchyme.",
      "D. Une diminution progressive du calibre des bronches vers la périphérie.",
      "E. Des adénopathies médiastinales compressives."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : Le signe de la bague chevalière (B) et la visualisation des bronches en périphérie (C) sont des signes scanographiques majeurs. La diminution progressive du calibre (D) est normale ; son absence est pathologique. Les adénopathies (E) sont une étiologie, pas un signe diagnostique. Le signe de la boule graisseuse (A) est typique du kyste dermoïde, non des DDB."
  },
  {
    id: 'q-pnm-14-07',
    courseId: 'crs-pneumo-14',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Quels germes sont le plus fréquemment retrouvés dans les sécrétions bronchiques des patients DDB ?",
    options: [
      "A. Mycobacterium tuberculosis",
      "B. Haemophilus influenzae",
      "C. Streptococcus pneumoniae",
      "D. Pseudomonas aeruginosa",
      "E. Escherichia coli"
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, D, C\nExplication : Par ordre de fréquence décroissante : Haemophilus influenzae (B), Pseudomonas aeruginosa (D), Staphylococcus aureus, et Streptococcus pneumoniae (C). Mycobacterium tuberculosis (A) est une étiologie, mais n'est pas un germe de colonisation banale. E. coli (E) est rare."
  },
  {
    id: 'q-pnm-14-08',
    courseId: 'crs-pneumo-14',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. La kinésithérapie respiratoire dans les DDB a pour objectif principal :",
    options: [
      "A. De renforcer la musculature inspiratoire.",
      "B. De permettre un meilleur drainage des sécrétions bronchiques.",
      "C. De rompre le cercle vicieux de Cole.",
      "D. De traiter définitivement l'infection bactérienne.",
      "E. De prévenir les hémoptysies massives."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : Le drainage des sécrétions (B) est un pilier du traitement, permettant de réduire le fardeau bactérien et inflammatoire, contribuant ainsi à rompre le cercle vicieux (C). Elle ne renforce pas spécifiquement les muscles (A), ne traite pas l'infection (D) qui nécessite des antibiotiques, et n'a pas d'impact direct sur la prévention des hémoptysies (E)."
  },
  {
    id: 'q-pnm-14-09',
    courseId: 'crs-pneumo-14',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Les indications chirurgicales des DDB concernent principalement :",
    options: [
      "A. Les formes diffuses et évoluées.",
      "B. Les formes localisées, mal tolérées.",
      "C. Les hémoptysies massives et récidivantes non contrôlées par l'embolisation.",
      "D. Tout patient présentant une insuffisance respiratoire chronique.",
      "E. La transplantation pulmonaire dans les stades terminaux."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : La chirurgie (exérèse) est réservée aux formes localisées et symptomatiques (B) ou compliquées d'hémoptysie non contrôlable (C). Pour les formes diffuses et sévères, la transplantation pulmonaire (E) est une option ultime. La chirurgie n'est pas indiquée pour les formes diffuses (A) et n'est pas le traitement de première intention de l'IRC (D)."
  },
  {
    id: 'q-pnm-14-10',
    courseId: 'crs-pneumo-14',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. La prévention secondaire des DDB inclut :",
    options: [
      "A. Le calendrier vaccinal de l'enfant.",
      "B. L'arrêt du tabac.",
      "C. La vaccination antigrippale et antipneumococcique.",
      "D. Le traitement précoce et actif de la tuberculose pulmonaire.",
      "E. La recherche et le traitement des foyers infectieux ORL et dentaires."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : La prévention secondaire vise à éviter les complications et l'aggravation chez un patient déjà atteint : sevrage tabagique (B), vaccinations (C), et éradication des foyers infectieux (E). Le calendrier vaccinal (A) et le traitement de la tuberculose (D) relèvent de la prévention primaire (éviter la survenue de la DDB)."
  },
  {
    id: 'q-pnm-14-11',
    courseId: 'crs-pneumo-14',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Dans les DDB, les étiologies \"congénitales\" ou liées à l'hôte sont le plus souvent :",
    options: [
      "A. Localisées à un lobe pulmonaire.",
      "B. La conséquence d'une infection bactérienne non traitée.",
      "C. L'expression d'un terrain prédisposant et sont diffuses.",
      "D. Responsables de la forme \"sèche\" de la maladie.",
      "E. Facilement curables par une antibiothérapie prolongée."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Les formes dites \"congénitales\" (mucoviscidose, déficits immunitaires, dyskinésie ciliaire) reflètent un terrain génétique prédisposant qui affecte l'ensemble de l'arbre bronchique, conduisant à des DDB diffuses. Elles ne sont pas localisées (A), ne sont pas une simple conséquence infectieuse (B), ne sont pas spécifiquement liées à la forme sèche (D) et sont des maladies chroniques, non curables par les antibiotiques (E)."
  },
  {
    id: 'q-pnm-14-12',
    courseId: 'crs-pneumo-14',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Concernant le déficit en alpha-1-antitrypsine dans les DDB :",
    options: [
      "A. C'est une cause fréquente et bien établie de DDB.",
      "B. Il faut systématiquement le rechercher devant toute DDB.",
      "C. Aucune étude ne permet actuellement d'affirmer qu'il s'agit d'une cause ou d'une simple association.",
      "D. Il provoque uniquement un emphysème panlobulaire.",
      "E. Son diagnostic repose sur le dosage sérique de l'alpha-1-antitrypsine."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E\nExplication : Le lien entre déficit en alpha-1-antitrypsine et DDB est mal élucidé ; il peut s'agir d'une association plutôt que d'une cause directe (C). Il n'est donc pas considéré comme une cause fréquente (A) et sa recherche n'est pas systématique, mais peut être envisagée (B). Ce déficit est principalement associé à un emphysème, mais peut être associé à d'autres pathologies pulmonaires comme les DDB (D). Le diagnostic se fait bien par dosage sérique (E)."
  },
  {
    id: 'q-pnm-14-13',
    courseId: 'crs-pneumo-14',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. La polyarthrite rhumatoïde (PR) :",
    options: [
      "A. Est la maladie de système la plus fréquemment associée aux DDB.",
      "B. Conduit à des DDB par un mécanisme obstructif bronchique.",
      "C. Est associée à des DDB avec une nette prédominance féminine.",
      "D. Doit être évoquée devant des DDB diffuses sans étiologie infectieuse évidente.",
      "E. Nécessite un traitement immunosuppresseur qui aggrave toujours les DDB."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\nExplication : La PR est effectivement la maladie de système la plus fréquente dans ce contexte (A), touchant plus les femmes (C), et doit être recherchée dans les DDB diffuses inexpliquées (D). Le mécanisme est lié à une inflammation et une fragilité pariétale, non obstructive (B). Le traitement de la PR peut être complexe, mais contrôler l'inflammation systémique peut potentiellement bénéficier aux DDB, il ne les aggrave pas systématiquement (E)."
  },
  {
    id: 'q-pnm-14-14',
    courseId: 'crs-pneumo-14',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Les explorations fonctionnelles respiratoires (EFR) dans les DDB montrent typiquement :",
    options: [
      "A. Un syndrome ventilatoire obstructif pur.",
      "B. Un syndrome ventilatoire restrictif pur.",
      "C. Un syndrome ventilatoire mixte.",
      "D. Une augmentation de la capacité pulmonaire totale (CPT).",
      "E. Une hypoxémie à la gazométrie artérielle dans les stades avancés."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E\nExplication : Les DDB associent souvent une obstruction (liée à l'inflammation et aux sécrétions) et une restriction (liée aux remaniements fibreux et aux atélectasies), d'où un syndrome mixte (C). Un syndrome obstructif pur (A) est plus typique de l'asthme ou de la BPCO. La CPT est variable, mais une hyperinflation peut être présente dans les formes obstructives dominantes, ce n'est pas une constante (D). L'hypoxémie (E) est une caractéristique de l'insuffisance respiratoire chronique dans les stades avancés."
  },
  {
    id: 'q-pnm-14-15',
    courseId: 'crs-pneumo-14',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Quel est l'objectif principal de l'utilisation des macrolides au long cours dans les DDB ?",
    options: [
      "A. Leur action antibiotique puissante sur Pseudomonas aeruginosa.",
      "B. Leur effet anti-inflammatoire et immunomodulateur.",
      "C. Leur capacité à fluidifier les sécrétions bronchiques.",
      "D. Leur rôle dans la prévention des embolies pulmonaires.",
      "E. Le traitement de la mucoviscidose sous-jacente."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Les macrolides (comme l'azithromycine) sont utilisés à faible dose au long cours principalement pour leurs propriétés anti-inflammatoires et immunomodulatrices, qui aident à réduire l'exacerbation des symptômes. Leur action antibiotique à cette posologie est faible, et ils ne sont pas particulièrement efficaces seuls contre Pseudomonas (A). Ils n'ont pas d'effet fluidifiant direct (C) et ne sont pas indiqués pour la prévention des embolies (D) ou comme traitement spécifique de la mucoviscidose (E)."
  },
  {
    id: 'q-pnm-14-16',
    courseId: 'crs-pneumo-14',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Une complication redoutable des DDB, d'origine néo-vasculaire systémique, est :",
    options: [
      "A. Le pneumothorax.",
      "B. L'amylose rénale.",
      "C. L'hémoptysie massive.",
      "D. La broncho-pneumopathie chronique obstructive (BPCO).",
      "E. L'embolie pulmonaire."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : L'hypervascularisation systémique du chorion bronchique, conséquence de l'inflammation chronique, est fragile et peut être à l'origine d'hémoptysies parfois massives et mortelles (C). Le pneumothorax (A) est rare. L'amylose rénale (B) était une complication autrefois, mais elle est devenue rare. Les DDB et la BPCO (D) sont deux entités distinctes qui peuvent coexister. L'embolie pulmonaire (E) n'est pas une complication directe des DDB."
  },
  {
    id: 'q-pnm-14-17',
    courseId: 'crs-pneumo-14',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Le diagnostic de dyskinésie ciliaire primitive (DCP) :",
    options: [
      "A. Est systématique chez tout patient présentant une DDB.",
      "B. Peut être évoqué devant l'association DDB, sinusites chroniques et situs inversus.",
      "C. Est confirmé par un test de la sueur positif.",
      "D. Nécessite en première intention un prélèvement nasal pour étude de la mobilité ciliaire.",
      "E. Peut être suspecté en cas de stérilité masculine."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : B, D, E\nExplication : La triade classique de la DCP (Syndrome de Kartagener) est DDB + sinusites + situs inversus (B). La recherche de DCP n'est pas systématique (A), mais orientée par des signes évocateurs comme des infections ORL et bronchiques récurrentes ou une stérilité masculine (E). Le test de la sueur (C) est utilisé pour la mucoviscidose, pas pour la DCP. Le premier examen en cas de suspicion est bien un prélèvement nasal pour étude ciliaire (D)."
  },
  {
    id: 'q-pnm-14-18',
    courseId: 'crs-pneumo-14',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Dans la prise en charge d'une DDB stable, la vaccination est importante. Laquelle de ces propositions est correcte ?",
    options: [
      "A. Seule la vaccination antigrippale est recommandée.",
      "B. La vaccination antipneumococcique n'a pas d'intérêt démontré.",
      "C. La vaccination contre la coqueluche n'est utile qu'en prévention primaire chez l'enfant.",
      "D. Les vaccins vivants atténués sont contre-indiqués.",
      "E. La vaccination annuelle contre la grippe et la vaccination antipneumococcique sont recommandées."
    ],
    correctAnswers: [4],
    explanation: "Correction : E\nExplication : La prévention des infections est cruciale. La vaccination annuelle contre la grippe et la vaccination antipneumococcique (pour prévenir les pneumonies à pneumocoque) sont fortement recommandées chez les patients atteints de DDB (E). L'affirmation A est donc fausse, de même que B. La vaccination contre la coqueluche est importante en prévention primaire, mais les rappels à l'âge adulte peuvent aussi être envisagés, surtout en cas de contact avec des nourrissons (C n'est pas entièrement exact). Il n'y a pas de contre-indication générale aux vaccins vivants chez ces patients, sauf en cas d'immunodépression sévère (D est faux)."
  },
  {
    id: 'q-pnm-14-19',
    courseId: 'crs-pneumo-14',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Quel est le principal objectif du traitement par corticoïdes inhalés dans les DDB ?",
    options: [
      "A. Traiter une composante asthmatique associée.",
      "B. Remplacer la kinésithérapie respiratoire.",
      "C. Réduire l'inflammation bronchique chronique.",
      "D. Prévenir les hémoptysies.",
      "E. Guérir définitivement la DDB."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : L'objectif principal des corticoïdes inhalés est de réduire l'inflammation bronchique chronique qui entretient le cercle vicieux de Cole (C). Ils peuvent être utiles en cas d'hyperréactivité bronchique associée (A), mais ce n'est pas l'indication principale. Ils ne remplacent pas la kiné (B), n'ont pas d'effet prouvé sur la prévention des hémoptysies (D) et ne guérissent pas la maladie (E)."
  },
  {
    id: 'q-pnm-14-20',
    courseId: 'crs-pneumo-14',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. La bronchoscopie (fibroscopie bronchique) dans le bilan des DDB est particulièrement indiquée pour :",
    options: [
      "A. Établir le diagnostic positif de DDB (remplace le scanner).",
      "B. Réaliser un bilan étiologique (lavage broncho-alvéolaire, biopsies).",
      "C. Explorer une hémoptysie.",
      "D. Faire des prélèvements bactériologiques protégés.",
      "E. Drainer les sécrétions en routine."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\nExplication : La bronchoscopie n'est pas l'examen de choix pour le diagnostic positif, le scanner lui est bien supérieur (A est faux). En revanche, elle est cruciale pour le bilan étiologique (recherche de tumeur, prélèvements pour infections spécifiques) (B), pour explorer une hémoptysie (C) et pour faire des prélèvements bactériologiques protégés en cas de doute sur le germe en cause (D). Elle n'est pas utilisée pour le drainage de routine (E), qui est du ressort de la kinésithérapie."
  },
  {
    id: 'q-pnm-14-21',
    courseId: 'crs-pneumo-14',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Une cause fréquente de DDB localisées chez l'adulte jeune, souvent de révélation tardive, est :",
    options: [
      "A. La mucoviscidose.",
      "B. L'inhalation passée d'un corps étranger.",
      "C. La polyarthrite rhumatoïde.",
      "D. Le déficit en IgA.",
      "E. La dyskinésie ciliaire primitive."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : L'inhalation d'un corps étranger (souvent dans l'enfance, oubliée) est une cause classique de DDB localisées en aval de l'obstruction (B). La mucoviscidose (A), la PR (C), les déficits immunitaires (D) et la DCP (E) sont des causes de DDB diffuses."
  },
  {
    id: 'q-pnm-14-22',
    courseId: 'crs-pneumo-14',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Le traitement d'une poussée de surinfection bronchique dans les DDB :",
    options: [
      "A. Doit toujours être probabiliste puis adapté à l'antibiogramme.",
      "B. Repose sur les mêmes germes que les pneumonies communautaires.",
      "C. Cible prioritairement Haemophilus influenzae et Pseudomonas aeruginosa.",
      "D. Doit être prolongé, généralement pendant 14 jours ou plus.",
      "E. N'est nécessaire qu'en présence de fièvre."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\nExplication : Le traitement est d'abord probabiliste, basé sur les germes habituels des DDB, puis adapté (A). Les germes typiques sont H. influenzae et P. aeruginosa (C), qui ne sont pas les premiers responsables des pneumonies communautaires standards (B est faux). La durée de traitement est souvent plus longue que pour une bronchite simple, pouvant aller jusqu'à 14-21 jours (D). Une surinfection peut se manifester par une augmentation du volume ou de la purulence des crachats sans fièvre (E est faux)."
  },
  {
    id: 'q-pnm-14-23',
    courseId: 'crs-pneumo-14',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. L'insuffisance respiratoire chronique (IRC) dans les DDB :",
    options: [
      "A. Est un témoin de l'étendue des lésions.",
      "B. Apparaît toujours précocement dans l'évolution de la maladie.",
      "C. Se caractérise par une hypercapnie précoce.",
      "D. Nécessite une oxygénothérapie de longue durée (OLD) lorsqu'elle est avérée.",
      "E. Contre-indique formellement la kinésithérapie respiratoire."
    ],
    correctAnswers: [0, 3],
    explanation: "Correction : A, D\nExplication : L'IRC est effectivement le témoin de DDB étendues et sévères (A). Elle n'apparaît pas toujours précocement (B), son installation est souvent progressive. L'hypoxémie est souvent le premier signe gazométrique, l'hypercapnie étant plus tardive (C). Lorsqu'elle est installée, l'OLD est indiquée (D). La kinésithérapie respiratoire adaptée reste au contraire essentielle, même en cas d'IRC (E est faux)."
  },
  {
    id: 'q-pnm-14-24',
    courseId: 'crs-pneumo-14',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La recherche d'une mucoviscidose chez un adulte présentant des DDB diffuses :",
    options: [
      "A. Est inutile car la maladie se révèle toujours dans l'enfance.",
      "B. Doit être systématique.",
      "C. Est à évoquer surtout devant des formes d'expression incomplète.",
      "D. Repose en première intention sur le test de la sueur.",
      "E. Peut nécessiter une recherche de mutations du gène CFTR."
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Correction : C, D, E\nExplication : Il existe des formes atténuées ou tardives de mucoviscidose qui peuvent se révéler à l'âge adulte par des DDB (C). La recherche n'est pas systématique (B) mais doit être envisagée en cas de DDB diffuses sans autre cause. Le test de la sueur est l'examen de première intention (D). Si celui-ci est douteux ou borderline, la recherche génétique de mutations du gène CFTR est indiquée (E)."
  },
  {
    id: 'q-pnm-14-25',
    courseId: 'crs-pneumo-14',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Concernant le pronostic des DDB, il dépend principalement :",
    options: [
      "A. De l'âge du patient au moment du diagnostic.",
      "B. De l'étendue des lésions pulmonaires.",
      "C. De la précocité de la prise en charge.",
      "D. Du terrain sous-jacent (éthiologie).",
      "E. De la survenue ou non d'une amylose rénale."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\nExplication : Le pronostic est principalement influencé par le volume de poumon atteint (B), la rapidité avec laquelle un traitement de fond est mis en place pour enrayer le cercle vicieux (C), et la nature de la cause sous-jacente (une mucoviscidose a un pronostic plus sévère qu'une DDB post-infectieuse localisée) (D). L'âge (A) est un facteur parmi d'autres, mais pas principal. L'amylose rénale (E) est une complication devenue rare et n'est plus le facteur pronostique principal."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-14-c1-1',
    courseId: 'crs-pneumo-14',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Monsieur A., 45 ans, tabagique\nIl consulte pour une toux productive matinale chronique depuis des années, avec des expectorations mucopurulentes abondantes. Il rapporte plusieurs épisodes de \"bronchite\" hivernale. À l'examen : hippocratisme digital discret, râles bronchiques diffus.\n\nQ1. Le diagnostic le plus probable est :",
    options: [
      "A. BPCO",
      "B. Asthme",
      "C. DDB",
      "D. Tuberculose séquellaire",
      "E. Insuffisance cardiaque gauche"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : L'expectoration chronique abondante et l'hippocratisme digital sont très évocateurs de DDB. La BPCO (A) peut coexister, mais l'hippocratisme digital y est rare. L'asthme (B) se manifeste par une dyspnée paroxystique, pas par une expectoration chronique abondante."
  },
  {
    id: 'q-pnm-14-c2-1',
    courseId: 'crs-pneumo-14',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Madame B., 35 ans, sans antécédents\nElle présente des épisodes récurrents de pneumopathies basales droites. Le scanner thoracique montre des bronches dilatées et remplies de sécrétions dans la pyramide basale droite, avec un signe de la bague chevalière.\n\nQ1. L'étiologie la plus probable de ces DDB localisées est :",
    options: [
      "A. Mucoviscidose",
      "B. Déficit en alpha-1-antitrypsine",
      "C. Séquelle de tuberculose",
      "D. Inhalation passée d'un corps étranger",
      "E. Polyarthrite rhumatoïde"
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nExplication : Des DDB localisées dans un territoire font évoquer en premier lieu une cause obstructive mécanique. L'inhalation d'un corps étranger (souvent dans l'enfance) est classique. La tuberculose (C) peut aussi donner des DDB localisées, mais elle est moins fréquente dans ce contexte. Les autres causes (A, B, E) donnent typiquement des DDB diffuses."
  },
  {
    id: 'q-pnm-14-c3-1',
    courseId: 'crs-pneumo-14',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Enfant de 8 ans, admissions répétées pour bronchites\nUn enfant de 8 ans est suivi pour des bronchites suppuratives récurrentes depuis l'âge de 2 ans. Il a également des otites séromuqueuses et des sinusites chroniques. L'examen clinique note un hippocratisme digital. La radiographie thoracique est anormale.\n\nQ1. Quelle étiologie est la plus probable devant ce tableau ?",
    options: [
      "A. Reflux gastro-oesophagien sévère",
      "B. Déficit immunitaire en IgG",
      "C. Dyskinésie ciliaire primitive",
      "D. Séquelles de coqueluche",
      "E. Tuberculose ganglionnaire"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La triade infections bronchiques récurrentes + infections ORL chroniques (otites, sinusites) + hippocratisme digital est très évocatrice d'une dyskinésie ciliaire primitive (C). Un déficit immunitaire (B) pourrait expliquer les infections, mais l'association avec les symptômes ORL est moins spécifique. Les autres options n'expliquent pas l'ensemble du tableau de manière aussi caractéristique."
  },
  {
    id: 'q-pnm-14-c4-1',
    courseId: 'crs-pneumo-14',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Femme de 50 ans, polyarthrite rhumatoïde\nUne femme de 50 ans, suivie pour une polyarthrite rhumatoïde séropositive évolutive, se plaint d'une aggravation récente de sa dyspnée et d'une majoration de sa toux productive. Le scanner thoracique montre des DDB diffuses, sans autre cause évidente.\n\nQ1. Le lien le plus probable entre la polyarthrite rhumatoïde (PR) et les DDB est :",
    options: [
      "A. Une complication iatrogène des traitements de la PR.",
      "B. Une manifestation pleuro-pulmonaire spécifique de la maladie rhumatoïde.",
      "C. Une simple coïncidence sans lien pathophysiologique.",
      "D. La conséquence d'une aspiration due à une atteinte oesophagienne.",
      "E. Une infection opportuniste liée à l'immunodépression."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Les DDB sont une manifestation pulmonaire reconnue et non rare de la PR, considérée comme liée à l'inflammation systémique et à des altérations de l'immunité muqueuse propres à la maladie (B). Ce n'est pas une simple coïncidence (C). Si les traitements immunosuppresseurs peuvent favoriser les infections, ils ne sont pas la cause directe des DDB (A, E). L'atteinte oesophagienne dans la PR est rare et n'explique pas des DDB diffuses (D)."
  },
  {
    id: 'q-pnm-14-c5-1',
    courseId: 'crs-pneumo-14',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Homme de 60 ans, hémoptysie\nUn homme de 60 ans, fumeur, connu pour des DDB bilatérales basales, est admis aux urgences pour hémoptysie de moyenne abondance (environ 200 ml). Il est stable sur le plan hemodynamique.\n\nQ1. Quelle est la prise en charge diagnostique et thérapeutique immédiate la plus appropriée ?",
    options: [
      "A. Traitement antibiotique probabiliste intraveineux.",
      "B. Bronchoscopie en urgence pour localisation et possible geste hémostatique.",
      "C. Radiographie thoracique standard.",
      "D. Embolisation artérielle bronchique en urgence.",
      "E. Chirurgie de résection pulmonaire en urgence."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : La prise en charge d'une hémoptysie moyenne à abondante chez un patient connu pour des DDB (terrain à haut risque d'hémoptysie par hypervascularisation systémique) repose sur la bronchoscopie en urgence. Elle permet de localiser le saignement, d'éliminer les caillots et éventuellement de réaliser un geste hémostatique local (B). L'embolisation (D) est un traitement de choix, mais elle est généralement réalisée après la localisation bronchoscopique. L'antibiothérapie (A) est importante pour traiter la surinfection sous-jacente, mais ce n'est pas la priorité absolue. La radiographie (C) a peu d'intérêt. La chirurgie (E) est réservée aux échecs de l'embolisation et aux cas les plus graves."
  }
];

export const PNEUMO_LESSON_14_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-14-mindmap',
    courseId: 'crs-pneumo-14',
    type: 'Resume',
    title: 'RÉSUMÉ : Dilatations des Bronches (DDB)',
    contentMarkdown: `### DILATATIONS DES BRONCHES (DDB)

**Définition** : Dilatation irréversible des bronches > destruction fibro-cartilagineuse.

**Physiopathologie : Cercle vicieux de Cole**
Altération muqueuse → Colonisation bactérienne → Réponse Inflammatoire → Dommage tissulaire → Accumulation sécrétions → Pérennisation.

**Étiologies** :
- **Diffuses** : Terrain (Déficits immunitaires, Mucoviscidose, Dyskinésie ciliaire), Infections sévères infantiles.
- **Localisées** : Obstruction (Corps étranger, Tumeur), Séquelles de TB.

**Clinique** :
- Signes Fonctionnels : Toux grasse matinale, Expectoration chronique (maître symptôme), Hémoptysies (50-70%), Dyspnée.
- Signes Physiques : Hippocratisme digital (80%), Râles bronchiques.

**Diagnostic** :
- **Scanner Thoracique (Examen de référence)** : Signe de la bague chevalière, Bronches visibles en périphérie, Absence de rétrécissement tapering.
- **Radiographie** : Clartés tubulées, Impactions mucoïdes (opacités en V/Y).

**Traitement (But : Rompre le cercle de Cole)** :
- **Drainage** : Kinésithérapie respiratoire quotidienne.
- **Contrôle Infection** : Antibiotiques (selon germes : H. influenzae, P. aeruginosa).
- **Réduction Inflammation** : Corticoïdes inhalés ± Macrolides.
- **Traitement des Complications** : Embolisation des artères bronchiques (Hémoptysie), Oxygénothérapie (IRC), Chirurgie (formes localisées).

**Pronostic** : Dépend de l'étendue, de la précocité de la prise en charge et du terrain.`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'DDB', 'Bronchectasies', 'Cercle de Cole']
  },
  {
    id: 'res-pnm-14-astuces',
    courseId: 'crs-pneumo-14',
    type: 'Astuce',
    title: 'ASTUCES ET MNÉMOTECHNIQUES : DDB',
    contentMarkdown: `### ASTUCES ET MNÉMOTECHNIQUES
• **Pour le Cercle de Cole : Pensez à "A.C.R.D.A" comme un cercle** :
  - **A**ltération de la muqueuse
  - **C**olonisation bactérienne
  - **R**éponse Inflammatoire
  - **D**ommage Tissulaire
  - **A**ccumulation de Sécrétions
• **Germes fréquents : Humo Pourri Se Surinfecter** :
  - **H**aemophilus influenzae
  - **P**seudomonas aeruginosa
  - **S**taphylococcus aureus
  - **S**treptococcus pneumoniae
• **Signes Scanographiques : "B.A.P"** :
  - **B**ague chevalière (bronche > artère)
  - **A**bsence de Tapering (diminution du calibre)
  - **P**ériphérie (bronches visibles au 1/3 externe)
• **Diagnostic Différentiel de la Toux Chronique Productive : "DDB"** :
  - **D**DB (évidemment)
  - **D**e la BPCO
  - **B**ronchite chronique

---
*Allez, courage ! Maîtriser les DDB, c'est comme faire un bon drainage postural : ça demande un peu d'effort au début, mais on se sent tellement mieux après ! Vous allez brillamment réussir.*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'DDB', 'Cole']
  }
];

// Lesson 15: Traitement de la tuberculose
export const PNEUMO_LESSON_15_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-15-01',
    courseId: 'crs-pneumo-15',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Quel est l'objectif principal de l'association de plusieurs médicaments dans le traitement de première ligne de la tuberculose ?",
    options: [
      "A) Réduire le coût du traitement",
      "B) Prévenir l'émergence de résistances bactériennes",
      "C) Diminuer la fréquence des prises médicamenteuses",
      "D) Éviter les effets secondaires hépatiques",
      "E) Permettre l'utilisation de doses plus faibles"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. L'association vise à éviter la sélection de mutants résistants, une monothérapie étant la principale cause d'échec thérapeutique et de multirésistance."
  },
  {
    id: 'q-pnm-15-02',
    courseId: 'crs-pneumo-15',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Parmi ces médicaments, lequel est bactéricide et agit sur les bacilles en phase de croissance lente ?",
    options: [
      "A) Isoniazide (H)",
      "B) Pyrazinamide (Z)",
      "C) Ethambutol (E)",
      "D) Streptomycine (S)",
      "E) Rifampicine (R)"
    ],
    correctAnswers: [4],
    explanation: "Correction : E. La Rifampicine est particulièrement efficace sur les bacilles à métabolisme ralenti (persisters), ce qui explique son rôle crucial dans la phase de continuation pour prévenir les rechutes."
  },
  {
    id: 'q-pnm-15-03',
    courseId: 'crs-pneumo-15',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Un patient de catégorie II est défini par :",
    options: [
      "A) Une primo-infection tuberculeuse",
      "B) Un échec thérapeutique après un traitement de première ligne",
      "C) Une tuberculose extra-pulmonaire",
      "D) Une rechute après un traitement bien suivi",
      "E) Une tuberculose multirésistante d'emblée"
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B et D. La catégorie II regroupe les échecs (BK+ au 5ème mois), les rechutes (reprise évolutive après guérison) et les reprises après interruption."
  },
  {
    id: 'q-pnm-15-04',
    courseId: 'crs-pneumo-15',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. La corticothérapie est indiquée comme traitement adjuvant dans toutes ces situations, SAUF :",
    options: [
      "A) Méningite tuberculeuse",
      "B) Péricardite tuberculeuse",
      "C) Tuberculose pulmonaire à frottis positif",
      "D) Pleurésie tuberculeuse importante",
      "E) Adénopathie pseudo-lymphomateuse"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La corticothérapie est réservée aux formes extra-pulmonaires très inflammatoires pour réduire les séquelles fibreuses. Elle n'est pas indiquée dans une TBC pulmonaire simple."
  },
  {
    id: 'q-pnm-15-05',
    courseId: 'crs-pneumo-15',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Quel régime standardisé est recommandé pour un nouveau cas de tuberculose pulmonaire hautement contagieuse (Catégorie I) ?",
    options: [
      "A) 2 HRZ / 4 HR",
      "B) 2 EHRZ / 4 HR",
      "C) 2 SHRZE / 1 HRZE / 5 HRE",
      "D) 2 REZ / 7 RE",
      "E) 2 RHZ / 4 RH"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Le régime 2EHRZ/4HR est celui de la catégorie I pour les formes graves et contagieuses. L'Ethambutol (E) initial ajoute une couverture en cas de résistance primaire à l'H ou R."
  },
  {
    id: 'q-pnm-15-06',
    courseId: 'crs-pneumo-15',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Un effet secondaire majeur de l'Isoniazide justifiant son arrêt immédiat est :",
    options: [
      "A) Nausées transitoires",
      "B) Coloration orangée des urines",
      "C) Hépatite cytolytique",
      "D) Neuropathie périphérique",
      "E) Hyperuricémie asymptomatique"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. L'hépatite cytolytique est un effet grave de l'INH. La neuropathie (D) est prévenue par la Pyridoxine et les nausées (A) sont souvent transitoires."
  },
  {
    id: 'q-pnm-15-07',
    courseId: 'crs-pneumo-15',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Chez un patient dialysé, quel médicament antituberculeux est contre-indiqué ?",
    options: [
      "A) Isoniazide",
      "B) Rifampicine",
      "C) Pyrazinamide",
      "D) Streptomycine",
      "E) Ethambutol"
    ],
    correctAnswers: [3],
    explanation: "Correction : D. La Streptomycine (aminoside) est néphrotoxique et son élimination rénale est altérée chez le dialysé, avec un risque majeur d'ototoxicité."
  },
  {
    id: 'q-pnm-15-08',
    courseId: 'crs-pneumo-15',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. La rifampicine diminue l'efficacité de tous ces médicaments par induction enzymatique, SAUF :",
    options: [
      "A) Contraceptifs oraux",
      "B) Warfarine",
      "C) Insuline",
      "D) Prednisone",
      "E) Sulfamides hypoglycémiants"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La rifampicine n'affecte pas l'insuline injectable. En revanche, elle accélère le métabolisme des médicaments cités en A, B, D et E, nécessitant un ajustement posologique."
  },
  {
    id: 'q-pnm-15-09',
    courseId: 'crs-pneumo-15',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Quel est le principal mécanisme d'action du Pyrazinamide ?",
    options: [
      "A) Inhibition de la synthèse de l'ARN",
      "B) Inhibition de la synthèse de la paroi cellulaire",
      "C) Altération du métabolisme glucidique du bacille en milieu acide",
      "D) Inhibition de la synthèse des protéines",
      "E) Inhibition de la synthèse de l'ADN"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Le PZA est unique car il est actif dans l'environnement acide des macrophages et des lésions caséeuses, tuant les bacilles quiescents."
  },
  {
    id: 'q-pnm-15-10',
    courseId: 'crs-pneumo-15',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. La surveillance bactériologique d'un régime de première ligne comprend des examens de crachats :",
    options: [
      "A) Au 2ème et 5ème mois",
      "B) Au 3ème et 6ème mois",
      "C) Au 2ème, 5ème et 6ème mois",
      "D) Au 1er, 2ème et 5ème mois",
      "E) Au 3ème, 5ème et 8ème mois"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Pour un régime de 1ère ligne, on contrôle l'efficacité à la fin de la phase intensive (M2), puis en fin de traitement (M5 et M6) pour s'assurer de la négativation."
  },
  {
    id: 'q-pnm-15-11',
    courseId: 'crs-pneumo-15',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Une interaction médicamenteuse significative avec la Rifampicine concerne :",
    options: [
      "A) L'augmentation des taux sériques de Digoxine",
      "B) La diminution des taux sériques de Quinine",
      "C) La réduction de l'efficacité des antirétroviraux",
      "D) La potentialisation des effets de la Phénytoïne",
      "E) L'inhibition du métabolisme des statines"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La Rifampicine est un puissant inducteur enzymatique du cytochrome P450, ce qui peut réduire considérablement les concentrations de nombreux antirétroviraux, compliquant la prise en charge des co-infectés VIH/TBC."
  },
  {
    id: 'q-pnm-15-12',
    courseId: 'crs-pneumo-15',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. La vaccination par le BCG est :",
    options: [
      "A) Recommandée mais facultative",
      "B) Réservée aux enfants à risque",
      "C) Obligatoire dès la naissance en Algérie",
      "D) Contre-indiquée en cas d'infection VIH",
      "E) Efficace pour prévenir toutes les formes de tuberculose"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. En Algérie, la vaccination par le BCG est obligatoire à la naissance. Elle protège principalement contre les formes graves de l'enfant (miliaire, méningite)."
  },
  {
    id: 'q-pnm-15-13',
    courseId: 'crs-pneumo-15',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Quel médicament peut avoir un effet tératogène et est contre-indiqué pendant la grossesse ?",
    options: [
      "A) Isoniazide",
      "B) Ethambutol",
      "C) Pyrazinamide",
      "D) Rifampicine",
      "E) Streptomycine"
    ],
    correctAnswers: [4],
    explanation: "Correction : E. La Streptomycine, comme tous les aminosides, est ototoxique et peut entraîner une surdité congénitale. Elle est à éviter pendant la grossesse."
  },
  {
    id: 'q-pnm-15-14',
    courseId: 'crs-pneumo-15',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Le régime 2 HRZ / 4 HR est indiqué pour :",
    options: [
      "A) La tuberculose multirésistante",
      "B) Les tuberculoses extra-pulmonaires paucibacillaires (Catégorie III)",
      "C) Les échecs de traitement de première ligne",
      "D) Les méningites tuberculeuses",
      "E) Les nouveaux cas de TBC pulmonaire BK+"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Ce régime, sans Ethambutol en phase initiale, est réservé aux formes peu bacillifères où le risque de résistance primaire est jugé faible."
  },
  {
    id: 'q-pnm-15-15',
    courseId: 'crs-pneumo-15',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Un effet secondaire spécifique de l'Ethambutol est :",
    options: [
      "A) L'hépatotoxicité",
      "B) La neuropathie optique rétrobulbaire",
      "C) L'insuffisance rénale aiguë",
      "D) La crise goutteuse",
      "E) Les troubles psychiatriques"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. L'Ethambutol peut causer une névrite optique (dyschromatopsie, baisse de l'acuité visuelle), justifiant une surveillance ophtalmologique."
  },
  {
    id: 'q-pnm-15-16',
    courseId: 'crs-pneumo-15',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. La phase intensive du traitement de première ligne dure :",
    options: [
      "A) 2 mois",
      "B) 4 mois",
      "C) 6 mois",
      "D) 8 mois",
      "E) 1 mois"
    ],
    correctAnswers: [0],
    explanation: "Correction : A. La phase intensive de 2 mois avec 4 médicaments (EHRZ) a pour but de réduire rapidement la charge bacillaire et de prévenir les résistances."
  },
  {
    id: 'q-pnm-15-17',
    courseId: 'crs-pneumo-15',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. La coloration orangée des urines sous traitement est due à :",
    options: [
      "A) L'Isoniazide",
      "B) La Rifampicine",
      "C) Le Pyrazinamide",
      "D) L'Ethambutol",
      "E) La Streptomycine"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. C'est un effet bénin et fréquent de la Rifampicine, à expliquer au patient pour éviter qu'il ne s'inquiète et n'arrête son traitement."
  },
  {
    id: 'q-pnm-15-18',
    courseId: 'crs-pneumo-15',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. En cas d'insuffisance hépatique avérée sous traitement, quelle modification thérapeutique est proposée ?",
    options: [
      "A) Arrêt de l'Isoniazide uniquement",
      "B) Passage au régime 2 REZ / 7 RE",
      "C) Augmentation de la dose de Rifampicine",
      "D) Ajout de corticoïdes",
      "E) Remplacement de la Rifampicine par la Streptomycine"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Le régime 2 REZ / 7 RE élimine les deux médicaments les plus hépatotoxiques (Isoniazide et Pyrazinamide) et les remplace par l'Ethambutol et la Rifampicine à doses adaptées."
  },
  {
    id: 'q-pnm-15-19',
    courseId: 'crs-pneumo-15',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. La surveillance de la tolérance du traitement repose sur :",
    options: [
      "A) La radiographie pulmonaire mensuelle",
      "B) L'interrogatoire, l'examen clinique et la pesée",
      "C) Le dosage systématique des transaminases hebdomadaire",
      "D) L'examen ophtalmologique bi-hebdomadaire",
      "E) L'audiogramme mensuel"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Une surveillance clinique simple et régulière (recherche d'ictère, d'anorexie, de vomissements, perte de poids) est essentielle pour dépister précocement une intolérance ou une toxicité."
  },
  {
    id: 'q-pnm-15-20',
    courseId: 'crs-pneumo-15',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. La tuberculose est :",
    options: [
      "A) Une maladie à déclaration facultative",
      "B) Une maladie à déclaration obligatoire",
      "C) Une maladie éradiquée en Algérie",
      "D) Une maladie non contagieuse",
      "E) Une maladie exclusivement pédiatrique"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. La tuberculose pulmonaire est une Maladie à Déclaration Obligatoire (MDO) pour permettre des actions de santé publique (dépistage des sujets contacts)."
  },
  {
    id: 'q-pnm-15-21',
    courseId: 'crs-pneumo-15',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Le principal facteur de risque de développement d'une tuberculose-maladie après infection est :",
    options: [
      "A) Le groupe sanguin O",
      "B) La carence en vitamine D",
      "C) L'immunodépression (ex: VIH)",
      "D) La consommation de tabac",
      "E) Le sexe masculin"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. L'immunodépression, en particulier l'infection par le VIH, est le facteur de risque le plus important de progression d'une infection tuberculeuse latente vers une tuberculose-maladie."
  },
  {
    id: 'q-pnm-15-22',
    courseId: 'crs-pneumo-15',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Le traitement d'un cas de tuberculose multi-résistante (MDR-TB) :",
    options: [
      "A) Utilise les médicaments de première ligne à doses plus élevées",
      "B) Dure 6 mois",
      "C) Est standardisé ou individualisé en fonction des tests de sensibilité",
      "D) Ne comporte pas de phase intensive",
      "E) Exclut l'utilisation des fluoroquinolones"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Le traitement de la MDR-TB est long (≥20 mois), utilise des médicaments de 2ème ligne (réserve) et doit être idéalement guidé par un antibiogramme pour être individualisé."
  },
  {
    id: 'q-pnm-15-23',
    courseId: 'crs-pneumo-15',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. L'Isoniazide peut provoquer une neuropathie périphérique par carence en :",
    options: [
      "A) Vitamine B1 (Thiamine)",
      "B) Vitamine B6 (Pyridoxine)",
      "C) Vitamine B12",
      "D) Vitamine C",
      "E) Vitamine D"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. L'INH entraîne une compétition avec la Vitamine B6, c'est pourquoi une supplémentation systématique en Pyridoxine est souvent recommandée, surtout chez les sujets à risque (dénutris, diabétiques, alcooliques)."
  },
  {
    id: 'q-pnm-15-24',
    courseId: 'crs-pneumo-15',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. Quel est le principal avantage des associations fixes (comme RHZE) ?",
    options: [
      "A) Réduction du nombre de comprimés à avaler",
      "B) Garantie de la prise concomitante des médicaments, évitant la monothérapie accidentelle",
      "C) Coût moins élevé",
      "D) Meilleur goût des comprimés",
      "E) Diminution de tous les effets secondaires"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. L'avantage principal est l'observance et la prévention des résistances en s'assurant que le patient prend bien tous les médicaments en même temps."
  },
  {
    id: 'q-pnm-15-25',
    courseId: 'crs-pneumo-15',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. La prise des médicaments antituberculeux se fait idéalement :",
    options: [
      "A) Pendant les repas",
      "B) Au coucher",
      "C) À jeun, après un petit déjeuner léger",
      "D) En une seule prise hebdomadaire",
      "E) En alternance un jour sur deux"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La prise à jeun améliore la biodisponibilité. Un petit déjeuner léger peut être toléré si les nausées sont importantes, mais un repas gras la réduit."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-15-c1-1',
    courseId: 'crs-pneumo-15',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : Nouveau cas pulmonaire\nMr. K, 35 ans, présente une toux productive, une fièvre vespérale et une altération de l'état général depuis 2 mois. L'examen direct des crachats retrouve des BAAR++. La radiographie pulmonaire montre des cavernes bilatérales. Il n'a aucun antécédent.\n\nQ1. Quelle est la catégorie thérapeutique de ce patient ?",
    options: [
      "A) Catégorie I",
      "B) Catégorie II",
      "C) Catégorie III",
      "D) Catégorie IV"
    ],
    correctAnswers: [0],
    explanation: "Correction : A. C'est un nouveau cas de tuberculose pulmonaire à microscopie positive, correspondant à la Catégorie I."
  },
  {
    id: 'q-pnm-15-c1-2',
    courseId: 'crs-pneumo-15',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 (suite) : Quel régime thérapeutique instaurer ?",
    options: [
      "A) 2 HRZ / 4 HR",
      "B) 2 EHRZ / 4 HR",
      "C) 2 SHRZE / 1 HRZE / 5 HRE",
      "D) 2 REZ / 7 RE"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. La présence de cavernes et un frottis positif justifient le régime renforcé de la Catégorie I (2EHRZ/4HR)."
  },
  {
    id: 'q-pnm-15-c2-1',
    courseId: 'crs-pneumo-15',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 : Effet secondaire hépatique\nMme. S, 28 ans, suit un traitement 2 EHRZ / 4 HR depuis 3 semaines. Elle consulte pour asthénie, nausées et un ictère franc. Les bilans biologiques confirment une hépatite cytolytique.\n\nQ1. Quelle est la conduite à tenir immédiate ?",
    options: [
      "A) Poursuivre le traitement et ajouter des hépatoprotecteurs",
      "B) Arrêter immédiatement tous les antituberculeux",
      "C) Arrêter uniquement le Pyrazinamide",
      "D) Remplacer l'Isoniazide par de la Streptomycine"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Devant une hépatite aiguë symptomatique (ictère), l'arrêt de tous les médicaments hépatotoxiques (H, R, Z) est impératif. La réintroduction se fera séquentiellement après normalisation des tests."
  },
  {
    id: 'q-pnm-15-c2-2',
    courseId: 'crs-pneumo-15',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 (suite) : Une fois l'hépatite résolue, quel régime alternatif peut être envisagé ?",
    options: [
      "A) 2 SHE / 10 HE",
      "B) 2 REZ / 7 RE",
      "C) 2 HRZ / 4 HR",
      "D) 2 SHRZE / 1 HRZE / 5 HRE"
    ],
    correctAnswers: [0],
    explanation: "Correction : A. Un régime sans Rifampicine ni Pyrazinamide, basé sur la Streptomycine, l'Isoniazide et l'Ethambutol, peut être utilisé en cas d'intolérance hépatique sévère."
  },
  {
    id: 'q-pnm-15-c3-1',
    courseId: 'crs-pneumo-15',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 : Rechute\nMr. M, 50 ans, a été traité il y a un an pour une TBC pulmonaire. Il revient avec une toux et une altération de l'état général. Deux examens de crachats sont à nouveau positifs à l'examen direct.\n\nQ1. Comment classez-vous ce cas ?",
    options: [
      "A) Catégorie I",
      "B) Catégorie II",
      "C) Catégorie III",
      "D) Catégorie IV"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Il s'agit d'une rechute (patient déjà traité qui redevient positif), relevant de la Catégorie II."
  },
  {
    id: 'q-pnm-15-c3-2',
    courseId: 'crs-pneumo-15',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 (suite) : Quel est le régime de choix ?",
    options: [
      "A) 2 EHRZ / 4 HR",
      "B) 2 HRZ / 4 HR",
      "C) 2 SHRZE / 1 HRZE / 5 HRE",
      "D) Régime individualisé de 3ème ligne"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Le régime standard de 2ème ligne pour la Catégorie II est 2SHRZE/1HRZE/5HRE."
  },
  {
    id: 'q-pnm-15-c4-1',
    courseId: 'crs-pneumo-15',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 4 : Tuberculose extra-pulmonaire\nMlle. A, 22 ans, présente des adénopathies cervicales multiples, fistulisées, évoluant depuis plusieurs mois. La biopsie ganglionnaire conclut à une tuberculose. La radiographie pulmonaire est normale.\n\nQ1. Quelle est la catégorie de ce patient ?",
    options: [
      "A) Catégorie I",
      "B) Catégorie II",
      "C) Catégorie III",
      "D) Catégorie IV"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La tuberculose ganglionnaire périphérique isolée est une forme extra-pulmonaire paucibacillaire de Catégorie III."
  },
  {
    id: 'q-pnm-15-c4-2',
    courseId: 'crs-pneumo-15',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 4 (suite) : Quel traitement adjuvant peut être proposé en plus de la chimiothérapie ?",
    options: [
      "A) Corticothérapie générale",
      "B) Ponction évacuatrice et instillation de Streptomycine in situ",
      "C) Radiothérapie ganglionnaire",
      "D) A et B"
    ],
    correctAnswers: [3],
    explanation: "Correction : D. Pour une adénopathie volumineuse ou fistulisée, un traitement local (ponction/injection) et une corticothérapie générale (pour réduire l'inflammation et la fibrose) sont des adjuvants utiles."
  },
  {
    id: 'q-pnm-15-c5-1',
    courseId: 'crs-pneumo-15',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 5 : Co-infection VIH/Tuberculose\nMr. D, 40 ans, connu séropositif VIH non traité, présente une tuberculose pulmonaire confirmée.\n\nQ1. Quelle particularité dans la prise en charge de sa tuberculose ?",
    options: [
      "A) Le traitement antituberculeux est contre-indiqué",
      "B) La durée du traitement antituberculeux est raccourcie à 4 mois",
      "C) Il faut être vigilant aux interactions médicamenteuses si initiation d'un TARV",
      "D) La Rifampicine est remplacée par la Rifabutine en cas de TARV à base de protéase inhibiteurs"
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : C et D. La Rifampicine, inductrice enzymatique, peut diminuer l'efficacité de nombreux ARV. Dans certains schémas TARV, on lui préfère la Rifabutine. Le traitement antituberculeux est prioritaire et dure 6 mois minimum."
  }
];

export const PNEUMO_LESSON_15_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-15-mindmap',
    courseId: 'crs-pneumo-15',
    type: 'Resume',
    title: 'RÉSUMÉ : Traitement de la Tuberculose',
    contentMarkdown: `### TRAITEMENT DE LA TUBERCULOSE

├── **Objectifs**
│   ├── Guérir le patient
│   ├── Éviter les résistances
│   └── Casser la chaîne de transmission
│
├── **Médicaments Essentiels (1ère Ligne)**
│   ├── **H** - Isoniazide (Bactéricide)
│   ├── **R** - Rifampicine (Bactéricide stérilisant)
│   ├── **Z** - Pyrazinamide (Bactéricide en milieu acide)
│   └── **E** - Ethambutol (Bactériostatique)
│
├── **Catégories de Patients**
│   ├── **I** : Nouveaux cas graves / contagieux (TPM+)
│   ├── **II** : Échec, Rechute, Reprise
│   ├── **III** : Formes extra-pulmonaires paucibacillaires
│   └── **IV** : Cas chroniques / MDR
│
├── **Régimes Standardisés**
│   ├── **1ère Ligne** : 2EHRZ / 4HR (Cat I) ou 2HRZ / 4HR (Cat III)
│   ├── **2ème Ligne** : 2SHRZE / 1HRZE / 5HRE (Cat II)
│   └── **3ème Ligne** : Individualisé ou standardisé long (MDR)
│
├── **Mise en Œuvre & Surveillance**
│   ├── Bilan pré-thérapeutique (Poids, Foie, Rein, VIH)
│   ├── Supervision initiale (2 premiers mois - DOTS)
│   ├── Contrôle bactériologique (M2, M5, M6)
│   └── Surveillance de la tolérance (Clinique)
│
├── **Effets Secondaires Majeurs**
│   ├── **H** : Hépatite, Neuropathie périphérique
│   ├── **R** : Hépatite, Interactions cytochromes, Coloration orangée urines
│   ├── **Z** : Hépatite, Hyperuricémie
│   └── **E** : Névrite optique rétrobulbaire
│
└── **Situations Spéciales**
    ├── Grossesse : Éviter Streptomycine (S)
    ├── Insuffisance hépatique : Régime adapté (ex: 2REZ / 7RE ou 2SHE / 10HE)
    ├── Insuffisance rénale / dialyse : Éviter S et adapter E
    └── VIH : Attention interactions R / TARV (recours à la Rifabutine)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Tuberculose', 'Traitement', 'DOTS']
  },
  {
    id: 'res-pnm-15-astuces',
    courseId: 'crs-pneumo-15',
    type: 'Astuce',
    title: 'Astuces et Mnémotechniques : Traitement TBC',
    contentMarkdown: `### Astuces et Mnémotechniques
1. **"HEREZ" pour les médicaments de 1ère ligne** :
   - **H** (Isoniazide), **E** (Ethambutol), **R** (Rifampicine), **Z** (Pyrazinamide).
2. **"Rifampicine Rend Rapidement Ridicule"** :
   - Pour se souvenir qu'elle accélère le métabolisme des autres médicaments (Contraceptifs, Anticoagulants, etc.) par induction enzymatique.
3. **Phase Intensive = 2 mois, 4 médicaments** :
   - *"2x4"* comme un jeu rapide au handball, pour se souvenir de l'intensité et de la durée.
4. **Effets secondaires** :
   - **Hépatite** pour **H** et **Z** (et R)
   - **Rouge** (urines) pour **R**
   - **Eye** (yeux / névrite optique) pour **E**thambutol
5. **Catégories** :
   - **I** : Initiation (nouveaux cas)
   - **II** : signifie "I"nsuite (reprise, échec, rechute)
   - **III** : pour "I"nfra-clinique ou paucibacillaire (Extra-pulmonaire)
   - **IV** : pour "I"rrécupérable (ou très difficile - Chronique/MDR)

---
*Allez, courage ! Maîtrisez bien ces protocoles, et vous serez incollables sur la TBC à l'examen... et prêts à affronter le fléau en stage ! Vous avez tout pour y arriver.*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Tuberculose', 'HEREZ']
  }
];
