import { Question, CourseResource } from '../../types/medical';

// Lesson 16: Tuberculose pulmonaire
export const PNEUMO_LESSON_16_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-16-01',
    courseId: 'crs-pneumo-16',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant la transmission de la tuberculose pulmonaire :",
    options: [
      "A. Elle est principalement interhumaine par voie aérienne.",
      "B. Les formes extra-pulmonaires sont les plus contagieuses.",
      "C. Les patients à microscopie positive (TPM+) sont les plus contagieux.",
      "D. La transmission fécale-orale est un mode de contamination fréquent.",
      "E. La contagiosité est nulle en cas de lésions cavitaires."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\nExplication : La transmission se fait principalement par inhalation de gouttelettes de Pflügge (aérosols) provenant d'un patient contagieux, défini comme un patient ayant une tuberculose pulmonaire à microscopie positive (TPM+). Les formes extra-pulmonaires (B) ne sont généralement pas contagieuses. La voie fécale-orale (D) n'est pas un mode de transmission. Les lésions cavitaires (E) sont au contraire très contagieuses car riches en bacilles."
  },
  {
    id: 'q-pnm-16-02',
    courseId: 'crs-pneumo-16',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. La tuberculose pulmonaire commune peut résulter de :",
    options: [
      "A. Une primo-infection récente.",
      "B. Une réinfection exogène.",
      "C. Une réactivation endogène de BK quiescents.",
      "D. Une contamination hydrique.",
      "E. Une transmission vectorielle."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C\nExplication : Les trois premiers mécanismes sont classiques. La primo-infection peut se compliquer précocement (A). La réinfection exogène (B) implique une nouvelle inhalation massive de BK. La réactivation endogène (C) est le réveil de foyers anciens, souvent liée à une baisse de l'immunité. La transmission n'est ni hydrique (D) ni vectorielle (E)."
  },
  {
    id: 'q-pnm-16-03',
    courseId: 'crs-pneumo-16',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Parmi les facteurs de risque de tuberculose, on retrouve :",
    options: [
      "A. Le diabète sucré.",
      "B. Une gastrectomie.",
      "C. Une infection par le VIH.",
      "D. La pratique régulière d'un sport.",
      "E. Un traitement immunosuppresseur."
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : A, B, C, E\nExplication : Le diabète (A), la gastrectomie (B - altération de l'état général et de l'absorption), le VIH (C - immunodépression) et les immunosuppresseurs (E) sont des facteurs de risque bien établis. La pratique sportive (D) n'est pas un facteur de risque."
  },
  {
    id: 'q-pnm-16-04',
    courseId: 'crs-pneumo-16',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. La propriété fondamentale de Mycobacterium tuberculosis est :",
    options: [
      "A. Son caractère aérobie strict.",
      "B. Sa mobilité grâce à des flagelles.",
      "C. Son caractère acido-alcoolo-résistant (BAAR).",
      "D. Sa croissance rapide sur milieu gélosé standard.",
      "E. Sa production de toxines."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\nExplication : Le BK est un aérobie strict (A), ce qui explique son tropisme pour les sommets pulmonaires bien oxygénés. Son caractère BAAR (C) est sa propriété fondamentale permettant sa visualisation après coloration spécifique (Ziehl-Neelsen). Il est non mobile (B), sa croissance est lente (plusieurs semaines, D) et il ne produit pas de toxines (E)."
  },
  {
    id: 'q-pnm-16-05',
    courseId: 'crs-pneumo-16',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. La méthode de diagnostic bactériologique la plus sensible pour la tuberculose est :",
    options: [
      "A. L'examen direct après coloration de Ziehl-Neelsen.",
      "B. L'examen direct après coloration à l'auramine.",
      "C. La culture sur milieu de Löwenstein-Jensen.",
      "D. La PCR en temps réel.",
      "E. La sérologie."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La culture (C) est la méthode de référence et la plus sensible, permettant de détecter jusqu'à 10-100 BK/mL. L'examen direct (A et B) est rapide mais moins sensible (nécessite au moins 5 000 à 10 000 BK/mL). La PCR (D) est rapide et spécifique mais n'est pas plus sensible que la culture et n'est pas encore le gold standard partout. La sérologie (E) n'a pas sa place dans le diagnostic."
  },
  {
    id: 'q-pnm-16-06',
    courseId: 'crs-pneumo-16',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. La lésion histologique élémentaire de la tuberculose est :",
    options: [
      "A. Un abcès à polynucléaires neutrophiles.",
      "B. Un granulome épithélioïde et gigantocellulaire avec nécrose caséeuse.",
      "C. Une fibrose pure.",
      "D. Une réaction inflammatoire aiguë non spécifique.",
      "E. Une thrombose vasculaire."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Le granulome tuberculoïde (follicule de Koster) avec sa nécrose caséeuse centrale (B) est la lésion caractéristique. Les autres options ne sont pas spécifiques de la TB."
  },
  {
    id: 'q-pnm-16-07',
    courseId: 'crs-pneumo-16',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Un signe clinique évocateur de tuberculose pulmonaire est :",
    options: [
      "A. Une toux sèche aiguë de 3 jours.",
      "B. Une fièvre à 40°C en plateau.",
      "C. Une fébricule vespérale avec sueurs nocturnes.",
      "D. Une éruption cutanée maculo-papuleuse.",
      "E. Une douleur épigastrique brûlante."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La fébricule vespérale (élévation modérée de la température en fin de journée) et les sueurs nocturnes sont des signes généraux classiques d'infection subaiguë. La toux doit être durable (>15j, A). La fièvre en plateau (B) est plus suggestive d'une infection bactérienne aiguë. Les signes cutanés (D) et digestifs (E) ne sont pas typiques."
  },
  {
    id: 'q-pnm-16-08',
    courseId: 'crs-pneumo-16',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Sur une radiographie pulmonaire, une lésion typique de tuberculose peut se présenter comme :",
    options: [
      "A. Une opacité systématisée lobaire homogène.",
      "B. Une clarté excavée entourée d'un liseré opaque (caverne).",
      "C. Des micronodules disséminés bilatéraux (miliaire).",
      "D. Des opacités arrondies, denses, siégeant aux sommets (nodules).",
      "E. Un épanchement pleural isolé en regard d'une scissure."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\nExplication : La caverne (B), la miliaire (C) et les nodules des sommets (D) sont des aspects très évocateurs. Une opacité systématisée lobaire (A) évoque plutôt une pneumonie bactérienne banale. Un épanchement pleural isolé (E) est plus typique d'une tuberculose pleurale (forme extra-pulmonaire)."
  },
  {
    id: 'q-pnm-16-09',
    courseId: 'crs-pneumo-16',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Le diagnostic de certitude d'une tuberculose pulmonaire repose sur :",
    options: [
      "A. Une IDR à la tuberculine positive.",
      "B. Un syndrome inflammatoire biologique (VS élevée).",
      "C. La mise en évidence du BK à l'examen direct des crachats.",
      "D. Un tableau clinico-radiologique évocateur.",
      "E. L'isolement du BK en culture."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E\nExplication : Le diagnostic de certitude est bactériologique : soit par examen microscopique direct (TPM+, C), soit par culture (TPM- C+, E). L'IDR (A) et la biologie (B) sont des arguments d'orientation. Le tableau clinico-radiologique (D) est présomptif."
  },
  {
    id: 'q-pnm-16-10',
    courseId: 'crs-pneumo-16',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Chez un patient non cracheur, on peut recourir à :",
    options: [
      "A. L'abstention de tout prélèvement.",
      "B. Le tubage gastrique.",
      "C. La fibroscopie bronchique avec aspiration.",
      "D. L'hémoculture.",
      "E. La ponction lombaire."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : Chez le non-cracheur, on utilise le tubage gastrique (B - pour recueillir les sécrétions bronchiques dégluties) ou la fibroscopie avec lavage/aspiration (C). L'abstention (A) n'est pas une option. L'hémoculture (D) n'est pas contributive. La ponction lombaire (E) est réservée aux suspicions de méningite."
  },
  {
    id: 'q-pnm-16-11',
    courseId: 'crs-pneumo-16',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Une tuberculose extra-pulmonaire :",
    options: [
      "A. Est une source majeure de contamination.",
      "B. Représente la localisation la plus fréquente de la TB.",
      "C. Peut poser des problèmes diagnostiques.",
      "D. N'est pas contagieuse.",
      "E. Est toujours associée à une tuberculose pulmonaire."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : C, D\nExplication : Les localisations extra-pulmonaires (sauf exception comme la TB laryngée) ne sont pas contagieuses (D) car les bacilles ne sont pas libérés dans les voies aériennes. Leur diagnostic est souvent difficile (C) du fait de localisations profondes. La forme pulmonaire est la plus fréquente (B). Elles ne sont pas systématiquement associées à une forme pulmonaire (E)."
  },
  {
    id: 'q-pnm-16-12',
    courseId: 'crs-pneumo-16',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. La forme la plus fréquente de tuberculose extra-pulmonaire est :",
    options: [
      "A. La méningite tuberculeuse.",
      "B. La tuberculose ostéo-articulaire.",
      "C. La tuberculose ganglionnaire.",
      "D. La tuberculose rénale.",
      "E. La péricardite tuberculeuse."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : L'adénopathie tuberculeuse (scrofules) est la localisation extra-pulmonaire la plus fréquente."
  },
  {
    id: 'q-pnm-16-13',
    courseId: 'crs-pneumo-16',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Pour le diagnostic d'une tuberculose pleurale, la méthode de certitude est :",
    options: [
      "A. La radiographie du thorax.",
      "B. La ponction pleurale avec analyse biochimique du liquide.",
      "C. La biopsie pleurale avec mise en évidence d'un granulome caséeux.",
      "D. L'échographie pleurale.",
      "E. L'IDR à la tuberculine."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La biopsie pleurale (C) a le meilleur rendement diagnostique, permettant de voir la lésion histologique spécifique (granulome avec caséification). La ponction pleurale (B) montre un liquide lymphocytaire évocateur, mais la culture est souvent négative. L'imagerie (A, D) et l'IDR (E) sont des arguments d'orientation."
  },
  {
    id: 'q-pnm-16-14',
    courseId: 'crs-pneumo-16',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Parmi ces localisations, lesquelles sont considérées comme des formes sévères de TB extra-pulmonaire ?",
    options: [
      "A. Tuberculose ganglionnaire cervicale.",
      "B. Méningite tuberculeuse.",
      "C. Mal de Pott (tuberculose vertébrale).",
      "D. Tuberculose cutanée.",
      "E. Tuberculose miliaire."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : Les formes sévères, justifiant un traitement prolongé, sont celles engageant le pronostic vital ou fonctionnel : méningite (B), Mal de Pott (C - risque neurologique), miliaire (E - dissémination), péricardite et TB rénale. Les formes ganglionnaires (A) et cutanées (D) sont des formes \"communes\"."
  },
  {
    id: 'q-pnm-16-15',
    courseId: 'crs-pneumo-16',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Dans le LCR d'une méningite tuberculeuse, on s'attend typiquement à trouver :",
    options: [
      "A. Une hyperproteinorachie.",
      "B. Une hypoglycorachie.",
      "C. Une prédominance de polynucléaires neutrophiles.",
      "D. Une prédominance de lymphocytes.",
      "E. La présence de BK à l'examen direct (qui est toujours positif)."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D\nExplication : La méningite tuberculeuse donne un LCR clair avec hyperprotéinorachie (A), hypoglycorachie (B - glucose bas) et lymphocytose (D). L'examen direct du LCR (E) est rarement positif (<25% des cas), d'où l'importance de la culture."
  },
  {
    id: 'q-pnm-16-16',
    courseId: 'crs-pneumo-16',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Un patient est classé \"TPM- C+\". Cela signifie que :",
    options: [
      "A. La microscopie est positive et la culture est positive.",
      "B. La microscopie est négative et la culture est négative.",
      "C. La microscopie est négative mais la culture est positive.",
      "D. La microscopie est positive mais la culture est négative.",
      "E. Le patient est considéré comme non contagieux."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La classification OMS distingue les cas selon les résultats bactériologiques. \"TPM\" signifie Tuberculose Pulmonaire à Microscopie. \"TPM-\" = microscopie négative. \"C+\" = Culture positive. Ce résultat confirme le diagnostic, mais la contagiosité (E) est moindre que chez un TPM+."
  },
  {
    id: 'q-pnm-16-17',
    courseId: 'crs-pneumo-16',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. La présence d'un granulome épithélioïde avec nécrose caséeuse sur une biopsie pleurale :",
    options: [
      "A. Est un argument de présomption en faveur d'une tuberculose.",
      "B. Permet à lui seul d'affirmer le diagnostic de tuberculose pleurale.",
      "C. Évoque également une sarcoïdose.",
      "D. Nécessite systématiquement une confirmation par culture.",
      "E. Est une lésion non spécifique."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : La mise en évidence du granulome caséeux (follicule de Koster) est une lésion histologique spécifique de la tuberculose. Elle permet donc un diagnostic de certitude, même en l'absence de preuve bactériologique. La sarcoïdose (C) présente des granulomes mais sans nécrose caséeuse."
  },
  {
    id: 'q-pnm-16-18',
    courseId: 'crs-pneumo-16',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Concernant l'intradermoréaction (IDR) à la tuberculine :",
    options: [
      "A. Un résultat positif (>10mm) signe une tuberculose maladie active.",
      "B. Un résultat négatif permet d'éliminer formellement une tuberculose maladie.",
      "C. Elle peut être faussement négative en cas de tuberculose miliaire.",
      "D. Elle est réalisée avec un antigène spécifique de M. tuberculosis.",
      "E. Sa positivité reflète une infection tuberculeuse latente ou active."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E\nExplication : L'IDR positive (E) indique une sensibilisation à la tuberculine (infection latente ou active), mais ne distingue pas les deux (A est faux). Elle peut être négative (anergie) dans les formes graves comme la miliaire (C). Un résultat négatif n'élimine donc pas la maladie (B est faux). L'antigène utilisé n'est pas spécifique et peut réagir avec le BCG ou des mycobactéries environnementales (D est faux)."
  },
  {
    id: 'q-pnm-16-19',
    courseId: 'crs-pneumo-16',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Une ascite tuberculeuse se caractérise typiquement par :",
    options: [
      "A. Un liquide d'aspect chyleux.",
      "B. Une prédominance de polynucléaires neutrophiles.",
      "C. Un gradient albumine sérique-ascite élevé.",
      "D. Un taux d'Adénosine Désaminase (ADA) élevé.",
      "E. La présence constante de BK à l'examen direct."
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nExplication : Comme dans la pleurésie, un taux d'ADA élevé dans l'ascite est un argument très évocateur de tuberculose. Le liquide est plutôt séro-fibrineux, rarement chyleux (A). La cellularité est lymphocytaire (B). Le gradient albumine est généralement bas (<1.1 g/dL) car il s'agit d'une ascite exsudative (C). L'examen direct est souvent négatif (E), d'où l'importance de la culture."
  },
  {
    id: 'q-pnm-16-20',
    courseId: 'crs-pneumo-16',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. La découverte fortuite d'une image ronde, bien limitée, calcifiée au sein du parenchyme pulmonaire sur une radiographie systématique évoque :",
    options: [
      "A. Une lésion évolutive de tuberculose.",
      "B. Un cancer bronchique primitif.",
      "C. Un tuberculome séquellaire.",
      "D. Une pneumopathie aiguë en cours de résolution.",
      "E. Une métastase pulmonaire."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Un tuberculome est une forme séquellaire ou paucibacillaire de la TB, se présentant comme un nodule rond, bien limité, souvent calcifié. Il est généralement asymptomatique et non évolutif (A est faux). Les autres options ne présentent pas typiquement ce caractère calcifié et bien limité."
  },
  {
    id: 'q-pnm-16-21',
    courseId: 'crs-pneumo-16',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Dans la stratégie diagnostique, si trois examens microscopiques des crachats sont négatifs et que la culture n'est pas disponible :",
    options: [
      "A. On élimine le diagnostic de tuberculose.",
      "B. On instaure d'emblée un traitement antituberculeux.",
      "C. On traite par une antibiothérapie non spécifique et on réévalue à 15 jours.",
      "D. On réalise un scanner thoracique pour confirmation.",
      "E. On demande une sérologie tuberculeuse."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : C'est une démarche pragmatique recommandée. Une antibiothérapie banale (ex: amoxicilline) est donnée. Si les symptômes et les images radiologiques persistent ou s'aggravent malgré ce traitement, le diagnostic de tuberculose devient hautement probable et justifie de reprendre les investigations ou d'initier un traitement spécifique."
  },
  {
    id: 'q-pnm-16-22',
    courseId: 'crs-pneumo-16',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. La tuberculose miliaire est :",
    options: [
      "A. Une forme de tuberculose extra-pulmonaire disséminée.",
      "B. De diagnostic facile à la radiographie pulmonaire.",
      "C. La conséquence d'une diffusion lympho-hématogène massive du BK.",
      "D. Toujours associée à une méningite tuberculeuse.",
      "E. Caractérisée par des nodules de 1-2 mm répartis dans les deux champs pulmonaires."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : A, C, E\nExplication : La miliaire est une forme grave de dissémination hématogène (C), classée comme extra-pulmonaire sévère (A). Son aspect radiologique typique est une multitude de micronodules (1-2 mm) disséminés \"en pluie\" (E). Le diagnostic radiologique peut être difficile au début (B). La méningite est une complication fréquente mais non systématique (D)."
  },
  {
    id: 'q-pnm-16-23',
    courseId: 'crs-pneumo-16',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Un traitement immunosuppresseur par anti-TNF alpha majore le risque de tuberculose principalement par :",
    options: [
      "A. Altération de la fonction des lymphocytes B.",
      "B. Inhibition de l'immunité à médiation cellulaire.",
      "C. Destruction des polynucléaires neutrophiles.",
      "D. Effet toxique direct sur le parenchyme pulmonaire.",
      "E. Neutralisation des immunoglobulines."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : La défense contre M. tuberculosis repose principalement sur l'immunité à médiation cellulaire (lymphocytes T et macrophages). Les anti-TNF alpha bloquent une cytokine clé (le TNF-alpha) essentielle à la formation et au maintien du granulome tuberculoïde, facilitant ainsi la réactivation de foyers quiescents."
  },
  {
    id: 'q-pnm-16-24',
    courseId: 'crs-pneumo-16',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La particularité du traitement de la tuberculose extra-pulmonaire sévère (comme la méningite) par rapport à la forme pulmonaire commune est :",
    options: [
      "A. Une durée totale de traitement plus courte.",
      "B. L'utilisation de schémas thérapeutiques différents.",
      "C. Une durée prolongée de la phase intensive.",
      "D. L'adjonction systématique de corticoïdes.",
      "E. L'utilisation exclusive de 2 antibiotiques."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : C, D\nExplication : Pour les formes sévères (méningite, miliaire, etc.), la phase intensive dure 2 mois (comme pour la forme pulmonaire) mais la phase de continuation est prolongée (7 à 10 mois au total, soit plus longue). De plus, l'adjonction de corticoïdes (D) est recommandée dans les formes sévères comme la méningite ou la péricardite pour réduire l'inflammation et les séquelles."
  },
  {
    id: 'q-pnm-16-25',
    courseId: 'crs-pneumo-16',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. La recherche de BK dans les urines est indiquée devant :",
    options: [
      "A. Toute infection urinaire.",
      "B. Une hématurie microscopique isolée.",
      "C. Une pyurie aseptique (leucocyturie sans germe banal).",
      "D. Un tableau de cystite aiguë simple.",
      "E. Une colique néphrétique."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Une pyurie aseptique (ou \"urines stériles\") est un tableau classique de la tuberculose urinaire. Les bacilles détruisent le parenchyme rénal, entraînant une inflammation (pyurie) mais ne sont pas détectés par les cultures standard. C'est dans ce contexte que la recherche spécifique de BK (sur 3 échantillons d'urine du matin) est indispensable."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-16-c1-1',
    courseId: 'crs-pneumo-16',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Toux et amaigrissement\nMr. K, 45 ans, agriculteur, se présente pour une toux productive depuis 3 semaines, associée à une asthénie, un amaigrissement de 4 kg et des sueurs nocturnes. Il rapporte un épisode d'hémoptysies de faible abondance. Il est fumeur (15 PA). A l'examen : fébricule à 37.8°C, auscultation pulmonaire normale. La radio thorax montre des opacités nodulaires bilatérales des sommets, avec une clarté excavée à droite.\n\n1. Quelle est l'hypothèse diagnostique principale ?",
    options: [
      "A. Bronchopneumopathie chronique obstructive (BPCO)",
      "B. Carcinome bronchopulmonaire",
      "C. Tuberculose pulmonaire commune",
      "D. Pneumopathie bactérienne communautaire",
      "E. Aspergillome pulmonaire"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Le tableau subaigu (toux >15j, altération de l'état général, sueurs nocturnes) associé à des lésions radiologiques évocatrices (nodules des sommets avec excavation) est hautement suggestif d'une tuberculose pulmonaire active. La BPCO (A) ne cause pas d'amaigrissement aussi rapide ni ce type de lésions. Le cancer (B) est possible mais moins probable devant ce tableau infectieux. La pneumopathie aiguë (D) évolue plus rapidement. L'aspergillome (E) se greffe sur une caverne préexistante."
  },
  {
    id: 'q-pnm-16-c1-2',
    courseId: 'crs-pneumo-16',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : 2. Quel est le premier examen à demander pour confirmer le diagnostic ?",
    options: [
      "A. Scanner thoracique",
      "B. Examen cytobactériologique des crachats (ECBC) avec recherche de BK",
      "C. Bronchoscopie avec biopsie",
      "D. Dosage des IgE spécifiques",
      "E. Ponction-biopsie transpariétale"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : L'ECBC avec recherche de BK (examen direct et culture) est l'examen de première intention, non invasif, peu coûteux et de rendement élevé en cas de lésions excavées. Le scanner (A) affine les lésions mais ne confirme pas le diagnostic. La bronchoscopie (C) ou la biopsie (E) sont des examens de 2ème intention si les BK sont négatifs. Le dosage des IgE (D) n'a pas d'intérêt ici."
  },
  {
    id: 'q-pnm-16-c2-1',
    courseId: 'crs-pneumo-16',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Adénopathies cervicales\nMme. S, 28 ans, consulte pour des tuméfactions cervicales latéro-cervicales droites, apparues progressivement depuis 2 mois, indolores. Elle présente une asthénie et une fébricule. Pas de toux. La radiographie pulmonaire est normale. L'échographie cervicale confirme des adénopathies hypoéchogènes, confluentes, avec des zones nécrotiques.\n\n1. Quelle est la démarche diagnostique la plus appropriée ?",
    options: [
      "A. Ponction aspiration à l'aiguille fine (PAAF) à visée cytologique et bactériologique.",
      "B. Prescription d'une antibiothérapie à large spectre.",
      "C. Exérèse chirurgicale d'un ganglion pour examen anatomopathologique.",
      "D. Surveillance simple.",
      "E. Scanner thoraco-abdomino-pelvien."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A ou C\nExplication : La PAAF (A) est un bon premier geste, peu invasif, pouvant montrer la nécrose caséeuse et permettre la recherche de BK. L'exérèse-biopsie (C) permet une étude histologique de meilleure qualité (visualisation du granulome) et est souvent nécessaire si la PAAF est non contributive. L'antibiothérapie (B) est inefficace. La surveillance (D) n'est pas justifiée. Le scanner corps entier (E) n'est pas indiqué en première intention."
  },
  {
    id: 'q-pnm-16-c3-1',
    courseId: 'crs-pneumo-16',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Épanchement pleural fébrile\nMr. M, 55 ans, diabétique, présente un épanchement pleural liquidien fébrile gauche, avec syndrome inflammatoire. La ponction pleurale ramène un liquide jaune citrin, lymphocytaire, à ADA (Adénosine Désaminase) élevée.\n\n1. Le diagnostic le plus probable est :",
    options: [
      "A. Insuffisance cardiaque gauche.",
      "B. Embolie pulmonaire.",
      "C. Tuberculose pleurale.",
      "D. Pneumopathie bactérienne avec pleurésie para-pneumonique.",
      "E. Carcinose pleurale."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Un épanchement lymphocytaire avec une ADA élevée chez un patient fébrile et diabétique est très évocateur d'une tuberculose pleurale. L'insuffisance cardiaque (A) donne un liquide transsudatif. L'embolie pulmonaire (B) peut donner un liquide mais l'ADA n'est pas élevée. La pleurésie para-pneumonique (D) est plutôt à polynucléaires neutrophiles. La carcinose (E) donne un liquide souvent hémorragique mais le patient est généralement afébrile."
  },
  {
    id: 'q-pnm-16-c4-1',
    courseId: 'crs-pneumo-16',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Douleurs rachidiennes\nUn jeune homme de 22 ans, originaire d'une zone rurale, consulte pour des douleurs dorsales basses et une raideur rachidienne évoluant depuis plusieurs semaines. Il est apyrétique mais asthénique. La radiographie du rachis dorsolombaire montre un pincement discal D11-D12 avec une lyse du plateau vertébral adjacent et des images d'abcès des parties molles para-rachidiens.\n\n1. Quelle est la localisation suspectée ?",
    options: [
      "A. Spondylodiscite infectieuse bactérienne banale.",
      "B. Mal de Pott (Spondylodiscite tuberculeuse).",
      "C. Métastase vertébrale.",
      "D. Maladie de Forestier.",
      "E. Fracture ostéoporotique."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : L'évolution subaiguë/chronique, le pincement discal avec lyse osseuse et surtout la présence d'abcès para-rachidiens froids (sans signes inflammatoires francs) sont très caractéristiques du Mal de Pott. La spondylodiscite banale (A) est plus aiguë et douloureuse. Les métastases (C) ne respectent généralement pas le disque intervertébral. La maladie de Forestier (D) est une hyperostose non douloureuse. La fracture (E) fait suite à un traumatisme."
  },
  {
    id: 'q-pnm-16-c5-1',
    courseId: 'crs-pneumo-16',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Méningo-encéphalite subaiguë\nUne enfant de 8 ans, non vaccinée par le BCG, est amenée pour des céphalées, des vomissements et une somnolence évoluant depuis 10 jours. A l'examen, on note une raideur de la nuque et un signe de Kernig positif. La ponction lombaire montre un LCR clair, avec 250 éléments (90% de lymphocytes), une protéinorachie à 1.5 g/L et une hypoglycorachie à 0.3 g/L.\n\n1. Devant ce tableau, quelle étiologie doit être évoquée en priorité ?",
    options: [
      "A. Méningite virale.",
      "B. Méningite bactérienne communautaire.",
      "C. Méningite tuberculeuse.",
      "D. Hémorragie méningée.",
      "E. Tumeur cérébrale."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Le tableau subaigu (10j) de méningite avec un LCR clair, lymphocytaire, hyperprotéinorachique et hypoglycorachique est le tableau classique de la méningite tuberculeuse. La méningite virale (A) n'entraîne pas d'hypoglycorachie aussi marquée. La méningite bactérienne aiguë (B) est à polynucléaires et hyperaiguë. L'hémorragie (D) donne un LCR hématique. La tumeur (E) peut modifier le LCR mais rarement avec ce tableau complet."
  }
];

export const PNEUMO_LESSON_16_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-16-mindmap',
    courseId: 'crs-pneumo-16',
    type: 'Resume',
    title: 'Carte Mentale : Tuberculose Pulmonaire et Extra-Pulmonaire',
    contentMarkdown: `### TUBERCULOSE (TB)

├── **PULMONAIRE COMMUNE**
│   ├── Transmission : Aérienne (TPM+ = contagieux)
│   ├── Physiopathologie : Primo-infection, Réinfection exogène, Réactivation endogène
│   ├── Facteurs de Risque : VIH, Diabète, Alcool, Immunosuppresseurs, Pauvreté
│   └── Diagnostic :
│       ├── Clinique : Toux >15j, AEG, Fébricule/Sueurs nocturnes, Hémoptysie
│       ├── Radio : Nodules/Infiltrats des sommets, Caverne (Image en "raquette"), Miliaire
│       └── Certitude : BK+/Culture+ (ECBC x3, Tubage gastrique, Fibro)
│
├── **EXTRA-PULMONAIRE**
│   ├── Non contagieuse (sauf TB laryngée)
│   ├── La + fréquente : Ganglionnaire
│   ├── Formes Sévères : Méningite, Miliaire, Mal de Pott, Péricardite, Rénale
│   └── Diagnostic :
│       ├── Présomption : Clinique + Imagerie + IDR + Liquide lymphocytaire (PL, Ascite...)
│       ├── Certitude : Biopsie (Granulome caséeux) OU Culture du prélèvement
│       └── Méthodes selon localisation : Ponction/Biopsie ganglionnaire, Biopsie pleurale, PL...
│
├── **BACTÉRIOLOGIE**
│   ├── BK : BAAR, Aérobie strict, Croissance lente (Löwenstein-Jensen : 4-8 semaines)
│   └── Examens : Direct (Ziehl-Neelsen -> Rouge, Auramine -> Jaune), Culture (Gold Standard)
│
└── **CLASSIFICATION OMS**
    ├── TPM+ : Microscopie positive
    └── TPM- C+ : Microscopie négative, Culture positive`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Tuberculose', 'Pneumologie']
  },
  {
    id: 'res-pnm-16-astuces',
    courseId: 'crs-pneumo-16',
    type: 'Astuce',
    title: 'Astuces et Mnémotechniques : Tuberculose',
    contentMarkdown: `### Astuces et Mnémotechniques
• **Pour les Facteurs de Risque : D.A.V.I.D.** :
  - **D**iabète
  - **A**lcool / VIH
  - **V**IH
  - **I**mmunosuppresseurs
  - **D**éficit immunitaire (Néoplasies, Dénutrition)
• **Pour le LCR de la Méningite Tuberculeuse : Les 3 H** :
  - **H**ypercellularité (Lymphocytes)
  - **H**yperprotéinorachie
  - **H**ypoglycorachie
• **Pour les Localisations Sévères de la TB Extra-Pulmonaire : 3M + PR** :
  - **M**éningite
  - **M**iliaire
  - **M**al de Pott
  - **P**éricardite
  - **R**énale
• **Penser TB devant** : *Une toux qui Traîne + une Baisse de l'état Général (Tousse + Baisse Générale -> Think TB).*

---
*Allez, courage ! Maîtriser la tuberculose, c'est comme maîtriser le BK lui-même : cela demande de la persévérance, mais la victoire au bout du compte est certaine. Vous allez brillamment réussir vos examens !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Tuberculose', 'BK']
  }
];

// Lesson 17: Abcès et suppurations pulmonaires
export const PNEUMO_LESSON_17_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-17-01',
    courseId: 'crs-pneumo-17',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant les abcès pulmonaires primitifs :",
    options: [
      "A. Ils sont plus fréquents depuis l'avènement des antibiotiques.",
      "B. Leur survenue est favorisée par l'éthylisme et le tabagisme.",
      "C. Ils sont toujours secondaires à un cancer bronchique.",
      "D. La cavité est néoformée par une infection bactérienne non tuberculeuse.",
      "E. Ils surviennent préférentiellement sur un terrain immunocompétent."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B, D\nExplication : Les abcès primitifs sont des infections nécrosantes du parenchyme pulmonaire qui créent une cavité. Ils sont devenus moins fréquents avec les antibiotiques (A faux). Le terrain est crucial : éthylisme, tabac, immunodépression (B vrai), et non un terrain immunocompétent (E faux). Ils ne sont pas secondaires à un cancer (C faux), c'est une définition des suppurations secondaires."
  },
  {
    id: 'q-pnm-17-02',
    courseId: 'crs-pneumo-17',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. La phase de vomique dans l'abcès pulmonaire :",
    options: [
      "A. Est synonyme de phase de pré-suppuration.",
      "B. Se caractérise par une expectoration purulente brutale et abondante.",
      "C. Témoigne de l'ouverture de la collection abcédée dans une bronche.",
      "D. S'accompagne généralement d'une aggravation brutale de la dyspnée.",
      "E. Marque le passage à la phase de foyer ouvert."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : La vomique est l'événement charnière entre la phase de foyer fermé (A faux) et la phase de foyer ouvert (E vrai). Elle est due à la fistulisation de l'abcès dans l'arbre bronchique (C vrai), entraînant une expectoration purulente massive et soudaine (B vrai). La dyspnée peut paradoxalement s'améliorer après l'évacuation des sécrétions (D faux)."
  },
  {
    id: 'q-pnm-17-03',
    courseId: 'crs-pneumo-17',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Le(s) facteur(s) favorisant(s) principal(aux) la survenue d'un abcès pulmonaire par voie aérogène est/sont :",
    options: [
      "A. Une septicémie à Staphylococcus aureus.",
      "B. Un accident vasculaire cérébral (AVC).",
      "C. Une sténose bronchique tumorale.",
      "D. L'éthylisme chronique.",
      "E. Une anesthésie générale récente."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : B, D, E\nExplication : La voie aérogène, la plus fréquente, est une inhalation de sécrétions oropharyngées, favorisée par les troubles de la conscience (AVC, éthylisme, anesthésie) qui altèrent les réflexes de déglutition. Une septicémie (A) est une voie hématogène. Une sténose (C) est une cause de suppuration secondaire."
  },
  {
    id: 'q-pnm-17-04',
    courseId: 'crs-pneumo-17',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. À la radiographie pulmonaire, un signe évocateur d'un abcès pulmonaire drainé est :",
    options: [
      "A. Une opacité ronde non systématisée.",
      "B. Une image excavée avec un niveau hydro-aérique.",
      "C. Un épaississement pleural important.",
      "D. Une atélectasie rétractile.",
      "E. Une image en \"lâcher de ballons\"."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : L'image radiologique caractéristique d'un abcès drainé (phase de foyer ouvert) est une cavité avec un niveau liquide (pus) - air (B vrai). L'opacité non systématisée (A) est celle de la phase de pré-suppuration. Les autres options ne sont pas typiques."
  },
  {
    id: 'q-pnm-17-05',
    courseId: 'crs-pneumo-17',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Une expectoration fétide est hautement évocatrice d'une infection pulmonaire à :",
    options: [
      "A. Pseudomonas aeruginosa.",
      "B. Mycobacterium tuberculosis.",
      "C. Germes anaérobies.",
      "D. Pneumocystis jirovecii.",
      "E. Staphylococcus aureus."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La fétidité de l'haleine et des crachats est un signe classique et très spécifique d'une infection à germes anaérobies, souvent d'origine buccodentaire."
  },
  {
    id: 'q-pnm-17-06',
    courseId: 'crs-pneumo-17',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Un abcès pulmonaire à Staphylococcus aureus chez l'adulte :",
    options: [
      "A. Est généralement unique et de bon pronostic.",
      "B. Doit faire évoquer une septicopyohémie.",
      "C. Présente un tableau clinique souvent dramatique chez le nourrisson.",
      "D. Nécessite une antibiothérapie de 10 jours.",
      "E. Est fréquemment associé à une leucopénie."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : Chez l'adulte, les abcès à staphylocoque, souvent multiples, évoquent une dissémination hématogène (septicopyohémie) et sont graves (A faux). Le tableau est effectivement dramatique chez le nourrisson (C vrai). La durée d'antibiothérapie est de 4-6 semaines (D faux). Une leucopénie est un facteur de gravité, mais une hyperleucocytose est plus fréquente (E faux)."
  },
  {
    id: 'q-pnm-17-07',
    courseId: 'crs-pneumo-17',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. La chronicité d'un abcès pulmonaire est définie par :",
    options: [
      "A. La persistance de la fièvre au-delà de 48h sous antibiotiques.",
      "B. La persistance d'une cavité résiduelle radiologique.",
      "C. L'apparition de remaniements pulmonaires (comme des DDB).",
      "D. La nécessité systématique d'un traitement chirurgical pour guérir.",
      "E. Le risque de développer une amyloïdose viscérale."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : B, C, D, E\nExplication : La chronicité n'est pas définie par la fièvre (A faux) mais par la persistance de la cavité (B vrai) et l'apparition de lésions chroniques comme des dilatations des bronches (DDB) qui entretiennent l'infection (C vrai). Dans ce cas, le traitement médical est insuffisant, et la chirurgie est souvent nécessaire pour guérir et prévenir l'amyloïdose (D, E vrais)."
  },
  {
    id: 'q-pnm-17-08',
    courseId: 'crs-pneumo-17',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Le traitement médical d'un abcès pulmonaire communautaire à germes banals inclut :",
    options: [
      "A. Une antibiothérapie probabiliste puis adaptée.",
      "B. Une durée de 10 à 14 jours.",
      "C. L'association d'une C3G et d'un aminoside.",
      "D. Une kinésithérapie respiratoire pour favoriser le drainage.",
      "E. Le traitement systématique par antifongiques."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\nExplication : Le traitement est long, 4 à 6 semaines, et non 10-14 jours (B faux). Une bi-antibiothérapie initiale large (C3G + aminoside) est classique (A, C vrais). La kinésithérapie est capitale pour l'évacuation des sécrétions (D vrai). Les antifongiques ne sont indiqués que pour Aspergillus (E faux)."
  },
  {
    id: 'q-pnm-17-09',
    courseId: 'crs-pneumo-17',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Une leucopénie dans le cadre d'un abcès pulmonaire :",
    options: [
      "A. Est un signe de bonne réponse immunitaire.",
      "B. Contre-indique l'antibiothérapie.",
      "C. Est un facteur de gravité.",
      "D. Est typique des infections à anaérobies.",
      "E. Doit faire rechercher un terrain particulier (VIH, chimiothérapie)."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E\nExplication : Une leucopénie indique une réponse immunitaire défaillante et est un signe de mauvais pronostic (C vrai, A faux). Elle n'est pas une contre-indication mais une incitation à traiter plus agressivement (B faux). Elle n'est pas spécifique des anaérobies (D faux) et doit alerter sur un terrain d'immunodépression (E vrai)."
  },
  {
    id: 'q-pnm-17-10',
    courseId: 'crs-pneumo-17',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. L'abcès amibien du poumon :",
    options: [
      "A. Est une localisation pulmonaire primitive.",
      "B. Donne un pus typiquement \"anchovis\" ou \"chocolat\".",
      "C. Est toujours secondaire à un abcès amibien du foie.",
      "D. Se traite par le métronidazole.",
      "E. Peut survenir sans antécédent digestif."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : B, C, D, E\nExplication : L'abcès amibien pulmonaire est presque toujours une complication par contiguïté d'un abcès hépatique (C vrai), même si celui-ci peut être méconnu (E vrai). Le pus est typiquement brunâtre \"chocolat\" (B vrai). Le traitement de choix est le métronidazole (D vrai)."
  },
  {
    id: 'q-pnm-17-11',
    courseId: 'crs-pneumo-17',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. La fibroscopie bronchique dans l'abcès pulmonaire :",
    options: [
      "A. Est systématique.",
      "B. Permet d'éliminer une cause locale (corps étranger, tumeur).",
      "C. Est le premier examen à demander en urgence.",
      "D. Permet de réaliser des prélèvements bactériologiques.",
      "E. Est contre-indiquée en phase de vomique."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D\nExplication : La fibroscopie est systématique (A vrai) pour rechercher une cause locale (B vrai) et pour prélever (D vrai). Elle n'est pas un examen de première intention en urgence, le bilan initial est clinico-radiologique (C faux). Elle n'est pas contre-indiquée en phase de vomique et peut même aider au drainage (E faux)."
  },
  {
    id: 'q-pnm-17-12',
    courseId: 'crs-pneumo-17',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Une image cavitaire à paroi fine chez un patient sous chimiothérapie avec leucopénie évoque en premier :",
    options: [
      "A. Un cancer bronchique.",
      "B. Une tuberculose.",
      "C. Une infection à Aspergillus.",
      "D. Un kyste hydatique.",
      "E. Un abcès à anaérobies."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Le terrain (immunodéprimé par chimiothérapie) et la radiographie (cavité à paroi fine) sont très évocateurs d'une aspergillose invasive."
  },
  {
    id: 'q-pnm-17-13',
    courseId: 'crs-pneumo-17',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Le pronostic d'un abcès pulmonaire est favorable dans :",
    options: [
      "A. 50% des cas.",
      "B. 80-90% des cas.",
      "C. 100% des cas sous antibiotiques.",
      "D. En l'absence de facteurs de terrain défavorables.",
      "E. Si le traitement est précoce et suffisant."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : B, D, E\nExplication : Les chiffres de la diapositive sont clairs : 80-90% de guérison (B vrai). Ce bon résultat est conditionné par un traitement adapté (E vrai) et un terrain non débilité (D vrai). Les antibiotiques seuls ne garantissent pas 100% de succès (C faux)."
  },
  {
    id: 'q-pnm-17-14',
    courseId: 'crs-pneumo-17',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Le traitement d'un abcès à anaérobies repose sur :",
    options: [
      "A. Pénicilline G + Métronidazole.",
      "B. Céphalosporine de 3ème génération (C3G) seule.",
      "C. Vancomycine.",
      "D. Amoxicilline-acide clavulanique.",
      "E. Bactrim."
    ],
    correctAnswers: [0, 3],
    explanation: "Correction : A, D\nExplication : L'association historique est Pénicilline G + Métronidazole (A vrai). L'amoxicilline-acide clavulanique est une alternative courante et efficace (D vrai). Une C3G seule (B) n'est pas suffisante. La vancomycine (C) est pour les staphylocoques résistants. Le Bactrim (E) est pour Pneumocystis."
  },
  {
    id: 'q-pnm-17-15',
    courseId: 'crs-pneumo-17',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. La phase de pré-suppuration peut simuler :",
    options: [
      "A. Une pneumopathie bactérienne aiguë.",
      "B. Un syndrome pseudo-grippal traînant.",
      "C. Une broncho-pneumopathie chronique obstructive (BPCO).",
      "D. Une pleurésie.",
      "E. Une tuberculose miliaire."
    ],
    correctAnswers: [0, 1],
    explanation: "Correction : A, B\nExplication : Avant la formation de la cavité, le tableau est celui d'une infection pulmonaire non spécifique : soit une pneumopathie franche (A vrai), soit un tableau grippal persistant (B vrai)."
  },
  {
    id: 'q-pnm-17-16',
    courseId: 'crs-pneumo-17',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Dans la prise en charge d'un abcès pulmonaire, la kinésithérapie respiratoire a pour objectif principal :",
    options: [
      "A. De renforcer les muscles respiratoires",
      "B. De réduire la douleur thoracique",
      "C. De favoriser le drainage des sécrétions purulentes",
      "D. D'améliorer la tolérance à l'effort",
      "E. De prévenir les récidives à long terme"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Le rôle central de la kinésithérapie dans la phase aiguë est le drainage postural et la facilitation de l'expectoration pour évacuer le pus, ce qui est essentiel pour la guérison. Les autres objectifs (A, B, D, E) sont secondaires ou plus tardifs."
  },
  {
    id: 'q-pnm-17-17',
    courseId: 'crs-pneumo-17',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Un abcès pulmonaire survenant sur une sténose bronchique doit faire évoquer en premier lieu :",
    options: [
      "A. Une tuberculose séquellaire",
      "B. Un cancer bronchopulmonaire",
      "C. Un corps étranger méconnu",
      "D. Une sarcoïdose",
      "E. Une dilatation des bronches (DDB)"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Une suppuration pulmonaire secondaire sur sténose bronchique est une présentation classique d'un cancer bronchique, surtout chez un fumeur. Il s'agit d'un diagnostic à éliminer en priorité par la fibroscopie."
  },
  {
    id: 'q-pnm-17-18',
    courseId: 'crs-pneumo-17',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. La survenue d'un abcès pulmonaire à Staphylococcus aureus multiple chez un adulte sans facteur de risque évident doit faire rechercher :",
    options: [
      "A. Une endocardite infectieuse droite",
      "B. Une infection sur cathéter veineux central",
      "C. Une ostéomyélite vertébrale",
      "D. Une bactériémie à point de départ cutané",
      "E. Toutes les propositions ci-dessus"
    ],
    correctAnswers: [4],
    explanation: "Correction : E\nExplication : Des abcès pulmonaires multiples à Staphylocoque évoquent une dissémination hématogène (septicopyohémie). Il faut systématiquement rechercher la porte d'entrée : endocardite (A), cathéter (B), ostéomyélite (C) ou autre foyer (D)."
  },
  {
    id: 'q-pnm-17-19',
    courseId: 'crs-pneumo-17',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Concernant l'abcès amibien du poumon :",
    options: [
      "A. La sérologie amibienne est souvent négative",
      "B. L'épanchement pleural associé est fréquent",
      "C. Le traitement médical seul suffit dans la majorité des cas",
      "D. L'évolution se fait toujours vers la chronicité",
      "E. Il peut se compliquer d'un pyopneumothorax"
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : L'abcès amibien, souvent secondaire à une localisation hépatique, peut s'accompagner d'une réaction pleurale (B vrai). Le traitement par métronidazole est très efficace (C vrai). Une complication redoutable est la fistulisation dans la plèvre, entraînant un pyopneumothorax (E vrai). La sérologie est généralement positive (A faux). L'évolution est le plus souvent favorable sous traitement (D faux)."
  },
  {
    id: 'q-pnm-17-20',
    courseId: 'crs-pneumo-17',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. Une image cavitaire à paroi fine et irrégulière avec des nodules en périphérie (\"halo sign\") chez un patient neutropénique est très évocatrice de :",
    options: [
      "A. Tuberculose miliaire",
      "B. Métastases pulmonaires nécrosées",
      "C. Aspergillose angio-invasive",
      "D. Wegener",
      "E. Histoplasmose"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Le \"halo sign\" (une zone d'atténuation en verre dépoli autour d'un nodule ou d'une consolidation) est un signe tomodensitométrique très évocateur d'aspergillose angio-invasive chez un patient neutropénique."
  },
  {
    id: 'q-pnm-17-21',
    courseId: 'crs-pneumo-17',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Le principal intérêt de la fibroscopie bronchique dans un abcès pulmonaire primitif apparemment typique est :",
    options: [
      "A. De réaliser un lavage broncho-alvéolaire (LBA) à visée thérapeutique",
      "B. D'éliminer une cause locale (tumeur, corps étranger) non suspectée",
      "C. De pratiquer un drainage direct de l'abcès",
      "D. D'instiller des antibiotiques locaux",
      "E. De confirmer le diagnostic clinico-radiologique"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Même en cas de présentation typique d'abcès primitif, la fibroscopie est systématique pour s'assurer de l'absence de lésion bronchique sous-jacente (notamment néoplasique) qui pourrait être la cause réelle (suppuration secondaire)."
  },
  {
    id: 'q-pnm-17-22',
    courseId: 'crs-pneumo-17',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Quel élément du bilan biologique initial est un facteur pronostique péjoratif important ?",
    options: [
      "A. Une hyperleucocytose à 20 000/mm³",
      "B. Une VS à 80 mm à la première heure",
      "C. Une CRP à 150 mg/L",
      "D. Une leucopénie à 3000/mm³",
      "E. Une anémie à 10 g/dL"
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nExplication : Une leucopénie (et non une hyperleucocytose) reflète une réponse immunitaire inefficace et est un marqueur de gravité. Les autres éléments (A, B, C, E) sont fréquents mais moins spécifiquement péjoratifs."
  },
  {
    id: 'q-pnm-17-23',
    courseId: 'crs-pneumo-17',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Le traitement antibiotique de première intention d'un abcès pulmonaire communautaire à germes anaérobies et aérobies (poly microbien) peut reposer sur :",
    options: [
      "A. Amoxicilline-acide clavulanique",
      "B. Céfotaxime + Métronidazole",
      "C. Pénicilline G + Métronidazole",
      "D. Lévofloxacine",
      "E. Pipéracilline-tazobactam"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : A, B, C, E\nExplication : Toutes ces options couvrent la flore anaérobie et une grande partie de la flore aérobie buccodentaire, sauf la lévofloxacine (D) qui a une couverture insuffisante contre les anaérobies."
  },
  {
    id: 'q-pnm-17-24',
    courseId: 'crs-pneumo-17',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La persistance d'une image cavitaire résiduelle à 3 mois, chez un patient asymptomatique, nécessite :",
    options: [
      "A. La mise sous une bi-antibiothérapie pour 3 mois supplémentaires",
      "B. Une ponction-biopsie transpariétale systématique",
      "C. Une surveillance clinique et radiologique simple",
      "D. Une intervention chirurgicale de résection systématique",
      "E. La réalisation d'une tomographie par émission de positons (TEP)"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La disparition complète de l'image radiologique peut prendre plusieurs semaines à mois. Chez un patient asymptomatique, une simple surveillance est suffisante. La chirurgie (D) n'est indiquée qu'en cas de chronicité symptomatique ou de complication."
  },
  {
    id: 'q-pnm-17-25',
    courseId: 'crs-pneumo-17',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Une suppuration pulmonaire qui se chronicise majore le risque de :",
    options: [
      "A. Dégénérescence néoplasique",
      "B. Amylose AA (amyloïdose secondaire)",
      "C. Fistule broncho-pleurale",
      "D. Insuffisance respiratoire chronique",
      "E. Hémoptysies graves"
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : B, C, D, E\nExplication : La chronicité (persistance de la cavité et de l'inflammation) peut entraîner des complications locales (fistule, hémoptysie, insuffisance respiratoire) et systémiques (amylose AA). Le risque de dégénérescence néoplasique (A) est discuté mais n'est pas le plus classique."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-17-c1-1',
    courseId: 'crs-pneumo-17',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°1 : L'éthylique fébrile\nUn homme de 55 ans, éthylique chronique, est admis pour fièvre à 39.5°C, toux productive et altération de l'état général évoluant depuis 5 jours. L'examen clinique trouve un syndrome de condensation du lobe supérieur droit. La radiographie pulmonaire montre une opacité non systématisée du lobe supérieur droit.\n\nQ1. Quel est le diagnostic le plus probable à ce stade ?",
    options: [
      "A. Tuberculose pulmonaire",
      "B. Pneumopathie communautaire",
      "C. Cancer bronchopulmonaire",
      "D. Abcès pulmonaire en phase de pré-suppuration",
      "E. Embolie pulmonaire infectée"
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nExplication : Le terrain (éthylisme), le tableau infectieux et l'opacité non systématisée sont très évocateurs de la première phase d'un abcès pulmonaire avant sa fistulisation."
  },
  {
    id: 'q-pnm-17-c1-2',
    courseId: 'crs-pneumo-17',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°1 (suite) : Trois jours plus tard, le patient présente brutalement une expectoration purulente abondante. Que s'est-il passé ?",
    options: [
      "A. Rupture de l'abcès dans la plèvre",
      "B. Ouverture de l'abcès dans une bronche (vomique)",
      "C. Surinfection bactérienne",
      "D. Hémoptysie",
      "E. Aggravation de la pneumopathie"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : La description est typique de la vomique, qui marque le passage à la phase de foyer ouvert."
  },
  {
    id: 'q-pnm-17-c2-1',
    courseId: 'crs-pneumo-17',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°2 : Le patient immunodéprimé\nUn patient de 40 ans, infecté par le VIH avec un taux de CD4 à 100/mm³, présente une fièvre et une toux sèche. La radiographie montre des images cavitaires à parois fines multiples aux deux champs pulmonaires.\n\nQ1. Quel est le microorganisme le plus probable en cause ?",
    options: [
      "A. Mycobacterium tuberculosis",
      "B. Streptococcus pneumoniae",
      "C. Pneumocystis jirovecii",
      "D. Aspergillus fumigatus",
      "E. Germes anaérobies"
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nExplication : Chez un patient profondément immunodéprimé (VIH), des abcès/cavités multiples à paroi fine sont très évocateurs d'une aspergillose invasive. La tuberculose donne souvent des cavités à paroi plus épaisse."
  },
  {
    id: 'q-pnm-17-c2-2',
    courseId: 'crs-pneumo-17',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°2 (suite) : Quel est le traitement antifongique indiqué ?",
    options: [
      "A. Métronidazole",
      "B. Pénicilline G",
      "C. Voriconazole",
      "D. Bactrim",
      "E. C3G + Aminoside"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Le voriconazole est le traitement de première intention de l'aspergillose invasive."
  },
  {
    id: 'q-pnm-17-c3-1',
    courseId: 'crs-pneumo-17',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°3 : La douleur thoracique fébrile\nUne femme de 35 ans consulte pour une douleur basithoracique droite, fébrile, avec altération de l'état général. L'examen trouve une hépatomégalie douloureuse. La radiographie pulmonaire montre une opacité de la base droite avec un niveau hydro-aérique. Les crachats sont brunâtres.\n\nQ1. Quel diagnostic évoquez-vous ?",
    options: [
      "A. Pneumonie nécrosante du lobe inférieur droit",
      "B. Abcès amibien du poumon droit",
      "C. Cancer du poumon avec nécrose",
      "D. Tuberculose pulmonaire",
      "E. Empyème pleural"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : L'association d'une symptomatologie hépatique (hépatomégalie douloureuse), d'un syndrome pulmonaire basal droit et de crachats \"café au lait\" ou \"chocolat\" est très évocatrice d'un abcès amibien du foie fistulisé au poumon."
  },
  {
    id: 'q-pnm-17-c3-2',
    courseId: 'crs-pneumo-17',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°3 (suite) : Quel est le traitement de première intention ?",
    options: [
      "A. Chirurgical en urgence",
      "B. Métronidazole per os",
      "C. C3G + Aminoside IV",
      "D. Ponction drainage de l'abcès pulmonaire",
      "E. Bactrim"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Le traitement médical par métronidazole est très efficace et constitue le traitement de première intention. La chirurgie ou le drainage sont réservés aux échecs ou aux complications."
  },
  {
    id: 'q-pnm-17-c4-1',
    courseId: 'crs-pneumo-17',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°4 : L'exacerbation traînante\nUn homme de 70 ans, fumeur, connu pour des \"bronchites chroniques\", est hospitalisé pour une exacerbation de sa toux et de son expectoration purulente, avec fièvre modérée, évoluant depuis 3 semaines malgré deux cures d'antibiotiques. La TDM thoracique montre une cavité abcédée du lobe supérieur gauche et des dilatations des bronches (DDB) en aval.\n\nQ1. Ce tableau est en faveur de :",
    options: [
      "A. Un abcès pulmonaire primitif",
      "B. Une tuberculose pulmonaire",
      "C. Une suppuration pulmonaire secondaire sur DDB",
      "D. Un cancer du poumon excavé",
      "E. Une aspergillose"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La présence de DDB préexistantes, qui entretiennent l'infection, est en faveur d'une suppuration secondaire. Les DDB sont la cause, et non la conséquence, de l'abcès dans ce contexte."
  },
  {
    id: 'q-pnm-17-c4-2',
    courseId: 'crs-pneumo-17',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°4 (suite) : Quelle est la prise en charge la plus appropriée à long terme ?",
    options: [
      "A. Antibiothérapie prolongée à vie",
      "B. Kinésithérapie respiratoire au long cours",
      "C. Résection chirurgicale du territoire lésé",
      "D. Traitement antifongique",
      "E. Radiothérapie"
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : La kinésithérapie respiratoire quotidienne (B) est essentielle pour contrôler l'infection sur les DDB persistantes. Si les lésions sont localisées et responsables de symptômes persistants malgré un traitement médical bien conduit, la résection chirurgicale (C) peut être envisagée pour guérir."
  },
  {
    id: 'q-pnm-17-c5-1',
    courseId: 'crs-pneumo-17',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°5 : La chronicité\nUn patient de 50 ans présente depuis 6 mois une toux productive, des épisodes fébriles et une altération de l'état général. La TDM montre une large cavité résiduelle abcédée du lobe supérieur droit, avec des DDB en aval et un épaississement pleural. Les examens bactériologiques sont négatifs.\n\nQ1. Ce tableau correspond à :",
    options: [
      "A. Une guérison complète",
      "B. Une évolution favorable",
      "C. Une chronicité",
      "D. Une récidive",
      "E. Une tuberculose"
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : La persistance d'une cavité symptomatique au-delà de plusieurs semaines/mois définit la chronicité. Les DDB en aval entretiennent le cercle vicieux de l'infection."
  },
  {
    id: 'q-pnm-17-c5-2',
    courseId: 'crs-pneumo-17',
    questionNumber: 35,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas n°5 (suite) : Quelle est la solution thérapeutique définitive ?",
    options: [
      "A. Antibiothérapie probabiliste de 2ème intention",
      "B. Lobectomie supérieure droite",
      "C. Drainage percutané",
      "D. Kinésithérapie intensive",
      "E. Surveillance simple"
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : En cas de chronicité avérée avec lésions parenchymateuses destructrices et DDB, le seul traitement curatif est l'exérèse chirurgicale (lobectomie dans ce cas) du territoire malade."
  }
];

export const PNEUMO_LESSON_17_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-17-mindmap',
    courseId: 'crs-pneumo-17',
    type: 'Resume',
    title: 'CARTE MENTALE : Abcès & Suppurations Pulmonaires',
    contentMarkdown: `### ABCÈS & SUPPURATIONS PULMONAIRES

• **DÉFINITION**
  - Primitif (ABCÈS) : Cavité néoformée par nécrose infectieuse (non TB).
  - Secondaire : Sur lésion préexistante (Cancer, Infarctus, Kyste, DDB).

• **PHYSIOPATHOLOGIE**
  - Voie AÉROGÈNE (+++) : Inhalation -> Terrain (AVC, Éthylisme, AG).
  - Voie HÉMATOGÈNE : Embolie septique (Staphylo -> multiples).
  - Voie de CONTIGUÏTÉ : Abcès amibien (Foie -> Poumon).

• **CLINIQUE - 3 PHASES**
  1. Pré-Suppuration (Fermé) : Pneumopathie / Pseudo-grippe traînante.
  2. VOMIQUE : Expectoration purulente brutale -> Ouverture dans la bronche.
  3. Foyer Ouvert : Alternance rétention/expectoration.

• **PARACLINIQUE**
  - Radio : Opacité -> Niveau hydro-aérique -> Cavité.
  - Bio : Hyperleucocytose (Leucopénie = GRAVE), CRP/VS ↑.
  - Fibroscopie : Systématique (Cause + Prélèvements).

• **GERMES & TERRAINS**
  - Anaérobies : Fétidité.
  - Staphylocoque : Septicopyohémie -> Abcès multiples.
  - Aspergillus : Immunodéprimé -> Cavités multiples à paroi fine.
  - Amibien : Pus "chocolat", secondaire à un abcès du foie.
  - Pneumocystis : VIH, traité par Bactrim.

• **ÉVOLUTION**
  - Favorable (80-90%) : Si traitement précoce et suffisant.
  - Grave : Germe virulent, traitement tardif, terrain débilité.
  - Chronicité : Cavité persistante + DDB -> Chirurgie nécessaire.

• **TRAITEMENT**
  - Médical : ATB 4-6 semaines (C3G + Amino / PénG + Métro / etc.) + Kiné.
  - Chirurgical : Si chronicité ou échec médical.`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Abcès pulmonaire', 'Suppuration']
  },
  {
    id: 'res-pnm-17-astuces',
    courseId: 'crs-pneumo-17',
    type: 'Astuce',
    title: 'ASTUCES & MNÉMONIQUES : Abcès Pulmonaires',
    contentMarkdown: `### ASTUCES & MNÉMONIQUES
• **Les 3 F de la Vomique** : Fièvre qui baisse, Fistulisation bronchique, Flot de pus.
• **ABCÈS PRIMITIF** : Aéroborne, Bactérien, Cavité, Éthylisme, Sans lésion.
• **Germes et PUS** :
  - **Puant** -> Anaérobies.
  - **Unique ? Non** -> Staphylocoque (multiples).
  - **Spécial** -> Aspergillus (immunodéprimé).
• **Traitement ATB : PAM CKA (Pour s'en souvenir des associations)** :
  - Pénicilline G + Anaérobies (Métronidazole)
  - C3G + K (Aminosides) pour les Autres (BGN)
• **Radio : 1-2-3** : 1. Opacité -> 2. Niveau hydro-aérique -> 3. Cavité.

---
*Allez, courage ! Maîtriser les suppurations pulmonaires, c'est comme drainer un abcès : un peu complexe au début, mais quelle satisfaction quand c'est clair et que tout coule de source pour l'examen.*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Abcès pulmonaire', 'Vomique']
  }
];
