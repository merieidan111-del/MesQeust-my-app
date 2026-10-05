import { Question, CourseResource } from '../../types/medical';

// Lesson 18: La pleurésie purulente
export const PNEUMO_LESSON_18_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-18-01',
    courseId: 'crs-pneumo-18',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant la physiopathologie de la pleurésie purulente :",
    options: [
      "A. L'épanchement initial est un transsudat.",
      "B. La phase d'enkystement est toujours réversible sous antibiotiques.",
      "C. Le cloisonnement est dû à un afflux de fibroblastes et de fibrine.",
      "D. La capacité de drainage lymphatique est augmentée au début.",
      "E. L'irritation pleurale provoque une augmentation de la perméabilité capillaire."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E.\nExplication : L'épanchement est d'emblée un exsudat riche en protéines et en cellules inflammatoires dû à l'augmentation de la perméabilité capillaire (E). Le cloisonnement (C) résulte de la formation d'un coagulum de fibrine et de la prolifération fibroblastique, ce qui compartimente la plèvre. La phase d'enkystement (B) est irréversible médicalement. La capacité de drainage lymphatique est rapidement dépassée (D), et non augmentée."
  },
  {
    id: 'q-pnm-18-02',
    courseId: 'crs-pneumo-18',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Quel(s) germe(s) est/sont le plus souvent associé(s) à un épanchement pleural fétide ?",
    options: [
      "A. Pneumocoque",
      "B. Bacteroides fragilis",
      "C. Haemophilus influenzae",
      "D. Streptococcus pyogenes",
      "E. Klebsiella pneumoniae"
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : Les germes anaérobies, comme Bacteroides fragilis, ont un pouvoir nécrosant important et produisent des gaz et des métabolites à l'origine de la fétidité caractéristique de l'épanchement. Les germes aérobies (A, C, D, E) ne produisent généralement pas cette odeur nauséabonde."
  },
  {
    id: 'q-pnm-18-03',
    courseId: 'crs-pneumo-18',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Le diagnostic positif de pleurésie purulente est affirmé par :",
    options: [
      "A. Une radiographie thoracique standard montrant un épanchement.",
      "B. Un liquide pleural trouble avec polynucléaires altérés > 50%.",
      "C. Une hyperleucocytose sanguine à polynucléaires neutrophiles.",
      "D. Un pH du liquide pleural > 7,40.",
      "E. La présence d'un syndrome pleural à l'auscultation."
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : Le critère diagnostique majeur est l'analyse du liquide pleural qui retrouve un liquide purulent ou trouble contenant un grand nombre de polynucléaires altérés (B). La radio (A) et l'auscultation (E) évoquent l'épanchement, mais pas son caractère purulent. L'hyperleucocytose (C) est un signe d'infection systémique non spécifique. Un pH < 7,20 (D) est un argument pour un empyème, mais n'est pas constant."
  },
  {
    id: 'q-pnm-18-04',
    courseId: 'crs-pneumo-18',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. Dans la prise en charge thérapeutique, une antibiothérapie probabiliste initiale doit couvrir :",
    options: [
      "A. Uniquement les germes à Gram positif.",
      "B. Les germes anaérobies de manière systématique.",
      "C. Les entérobactéries uniquement chez les patients immunodéprimés.",
      "D. Les staphylocoques résistants à la méticilline en première intention.",
      "E. Une association large incluant souvent les anaérobies et les Gram négatifs."
    ],
    correctAnswers: [4],
    explanation: "Correction : E.\nExplication : L'écologie microbienne actuelle est dominée par les bacilles à Gram négatif et les anaérobies. Le traitement probabiliste doit donc être large. La couverture des anaérobies (B) n'est pas toujours systématique, mais très fréquente, notamment en cas de fétidité ou de mauvais état dentaire. Il faut couvrir les entérobactéries au-delà des seuls immunodéprimés (C), et les SARM (D) n'est pas une préoccupation de première intention en Algérie dans ce contexte."
  },
  {
    id: 'q-pnm-18-05',
    courseId: 'crs-pneumo-18',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. L'échographie thoracique a un intérêt car elle permet :",
    options: [
      "A. De différencier une pneumonie d'un épanchement pleural.",
      "B. De guider les ponctions pleurales.",
      "C. De détecter les cloisonnements.",
      "D. De visualiser directement les germes en cause.",
      "E. De quantifier avec précision le volume de l'épanchement."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C.\nExplication : L'échographie est l'examen clé au lit du malade. Elle visualise le liquide (A), ses septations (C) et guide la ponction en temps réel (B), améliorant le rendement et la sécurité. Elle ne permet pas de voir les germes (D) et donne une estimation, mais pas une mesure précise du volume (E)."
  },
  {
    id: 'q-pnm-18-06',
    courseId: 'crs-pneumo-18',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. La kinésithérapie respiratoire dans la pleurésie purulente a pour objectif principal :",
    options: [
      "A. Le soulagement immédiat de la douleur.",
      "B. La prévention des séquelles restrictives et le drainage bronchique.",
      "C. L'administration d'aérosols d'antibiotiques.",
      "D. Le renforcement musculaire général.",
      "E. La rééducation à l'effort post-immobilisation."
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : Le rôle central de la kinésithérapie est de favoriser la réexpansion pulmonaire et d'assurer le drainage des sécrétions bronchiques pour éviter les séquelles à long terme (B). Elle n'est pas un antalgique direct (A) et n'administre pas d'antibiotiques (C)."
  },
  {
    id: 'q-pnm-18-07',
    courseId: 'crs-pneumo-18',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Un facteur pronostic péjoratif majeur de la pleurésie purulente est :",
    options: [
      "A. Un terrain jeune et sans antécédents.",
      "B. Un délai court entre le diagnostic et le traitement.",
      "C. Un terrain fragilisé (éthylisme, diabète).",
      "D. Un germe sensible à l'antibiothérapie.",
      "E. Une pleurésie en phase exsudative."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : Le pronostic est surtout lié au terrain. Un patient âgé, éthylique, diabétique ou immunodéprimé (C) aura un pronostic moins bon. Un traitement précoce (B), un germe sensible (D) et un stade précoce (E) sont des facteurs de bon pronostic."
  },
  {
    id: 'q-pnm-18-08',
    courseId: 'crs-pneumo-18',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. La ponction pleurale exploratrice :",
    options: [
      "A. Doit être réalisée après le début de l'antibiothérapie pour éviter le choc septique.",
      "B. Est inutile si le diagnostic est évident cliniquement et radiologiquement.",
      "C. Doit idéalement être faite avant toute antibiothérapie.",
      "D. Utilise une aiguille de fin calibre pour minimiser la douleur.",
      "E. Permet une analyse biochimique, cytologique et bactériologique."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E.\nExplication : La ponction est un geste diagnostique et thérapeutique. Elle doit être faite avant les antibiotiques (C) pour maximiser les chances d'isoler le germe. Elle nécessite une aiguille de fort calibre (D) pour aspirer un liquide souvent épais. Elle est indispensable pour l'analyse (E), même si le diagnostic est cliniquement évident (B)."
  },
  {
    id: 'q-pnm-18-09',
    courseId: 'crs-pneumo-18',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Le traitement chirurgical (décortication) est indiqué :",
    options: [
      "A. En première intention pour toute pleurésie purulente.",
      "B. Après échec d'un traitement médical et kinésithérapique bien conduit.",
      "C. Dès le stade de collection pour accélérer la guérison.",
      "D. Pour lever une pachypleurite séquellaire responsable d'une insuffisance respiratoire restrictive.",
      "E. Uniquement en cas de fistule broncho-pleurale."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B, D.\nExplication : La chirurgie (décortication) est un traitement de rattrapage. Elle est indiquée quand le drainage et la kinésithérapie échouent à ré-expandre le poumon (B) ou pour traiter les séquelles fibreuses invalidantes (D). Elle n'est pas un traitement de première intention (A, C)."
  },
  {
    id: 'q-pnm-18-10',
    courseId: 'crs-pneumo-18',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Une pleurésie purulente à pneumocoque :",
    options: [
      "A. N'est plus observée de nos jours.",
      "B. Est souvent associée à une pneumopathie sous-jacente.",
      "C. A une tendance au cloisonnement rapide.",
      "D. Est toujours sensible à la pénicilline.",
      "E. Nécessite un traitement antibiotique de courte durée (7 jours)."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C.\nExplication : Le pneumocoque reste un germe fréquent (A est faux). Il est classiquement associé à une pneumonie (B) et son pouvoir inflammatoire important favorise un cloisonnement précoce (C). Des résistances à la pénicilline existent (D est faux). La durée d'antibiothérapie est prolongée, 4 à 6 semaines (E est faux)."
  },
  {
    id: 'q-pnm-18-11',
    courseId: 'crs-pneumo-18',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Concernant l'épidémiologie des pleurésies purulentes :",
    options: [
      "A. Leur incidence est stable dans les pays développés.",
      "B. L'antibiothérapie précoce des pneumonies a réduit leur fréquence.",
      "C. Leur mortalité est actuellement négligeable.",
      "D. Leur incidence est plus élevée dans les pays en développement.",
      "E. Elles représentent environ 50% des épanchements pleuraux."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B, D.\nExplication : L'antibiothérapie systématique a permis de prévenir la propagation de l'infection au niveau pleural, réduisant ainsi l'incidence (B). Celle-ci reste plus élevée dans les pays en développement (D) pour des raisons d'accès aux soins. La mortalité, bien que diminuée, reste significative, surtout sur terrains fragiles (C est faux). Elles représentent environ 8% des pleurésies dans les pays développés, pas 50% (E est faux)."
  },
  {
    id: 'q-pnm-18-12',
    courseId: 'crs-pneumo-18',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. La phase d'enkystement d'une pleurésie purulente se caractérise par :",
    options: [
      "A. Une plèvre fine et œdémateuse.",
      "B. La formation d'une gangue fibrineuse emprisonnant le poumon.",
      "C. Une réversibilité complète sous antibiotiques.",
      "D. La présence de liquide libre et facile à ponctionner.",
      "E. Un risque de séquelles respiratoires restrictives."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E.\nExplication : Au stade d'enkystement, la plèvre est sclérosée et une gangue fibrineuse (B) se forme, entravant l'expansion pulmonaire et pouvant laisser des séquelles restrictives permanentes (E). La plèvre est épaissie, non fine (A). Ce stade est irréversible par le seul traitement médical (C) et le liquide est souvent cloisonné et difficile à drainer (D)."
  },
  {
    id: 'q-pnm-18-13',
    courseId: 'crs-pneumo-18',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Un épanchement pleural riche en amylase évoque en premier lieu :",
    options: [
      "A. Une pleurésie tuberculeuse.",
      "B. Un chylothorax.",
      "C. Une pancréatite aiguë.",
      "D. Un lupus érythémateux disséminé.",
      "E. Une insuffisance cardiaque."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : Une concentration d'amylase dans le liquide pleural > à la concentration sérique est très évocatrice d'une origine pancréatique (C), soit par fistule, soit par translocation enzymatique. Les autres diagnostics (A, B, D, E) n'entraînent pas d'élévation spécifique de l'amylase pleurale."
  },
  {
    id: 'q-pnm-18-14',
    courseId: 'crs-pneumo-18',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Quel examen complémentaire est systématique avant de débuter une antibiothérapie pour une pleurésie purulente suspectée ?",
    options: [
      "A. Une scintigraphie pulmonaire.",
      "B. Une IRM thoracique.",
      "C. Une ponction pleurale avec étude bactériologique.",
      "D. Une épreuve fonctionnelle respiratoire (EFR).",
      "E. Une fibroscopie bronchique."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : La ponction pleurale (C) est un geste diagnostique et thérapeutique capital. Elle doit être réalisée avant l'instauration des antibiotiques pour maximiser les chances d'identifier le germe en cause et d'adapter le traitement. Les autres examens peuvent être utiles secondairement, mais ne sont pas systématiques en première intention."
  },
  {
    id: 'q-pnm-18-15',
    courseId: 'crs-pneumo-18',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. La présence d'un \"pus chocolat\" stérile à la ponction pleurale doit faire évoquer :",
    options: [
      "A. Une infection à staphylocoque.",
      "B. Une pleurésie amibienne.",
      "C. Une tuberculose pleurale.",
      "D. Un empyème à anaérobies.",
      "E. Un hémothorax infecté."
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : Le \"pus chocolat\" est l'aspect classique du liquide de l'abcès amibien du foie fistulisé dans la plèvre. Il est stérile en culture standard mais contient des amibes. La sérologie amibienne est alors positive. Ce tableau est différent d'un empyème banal (A, D) ou tuberculeux (C)."
  },
  {
    id: 'q-pnm-18-16',
    courseId: 'crs-pneumo-18',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Le traitement local par injections de fibrinolytiques (Streptokinase) dans la plèvre est utile :",
    options: [
      "A. En remplacement systématique du drainage.",
      "B. Pour dissoudre les cloisonnements et améliorer le drainage.",
      "C. Comme antibiotique local.",
      "D. Pour prévenir les embolies pulmonaires.",
      "E. Au stade d'enkystement pour éviter la chirurgie."
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : Les fibrinolytiques administrés par le drain thoracique ont pour but de lyser les fibrines formant les cloisons (B), permettant une évacuation plus complète du pus et une meilleure expansion pulmonaire. Ils ne remplacent pas le drainage (A), n'ont pas d'action antibiotique (C) et leur efficacité est limitée au stade de collection organisée, pas d'enkystement établi (E)."
  },
  {
    id: 'q-pnm-18-17',
    courseId: 'crs-pneumo-18',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Une cause ORL ou stomatologique doit être systématiquement recherchée devant une pleurésie purulente à :",
    options: [
      "A. Pneumocoque.",
      "B. Staphylocoque.",
      "C. Streptocoque.",
      "D. Entérobactéries.",
      "E. Anaérobies."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : C, E.\nExplication : Les streptocoques (notamment du groupe Streptococcus milleri) sont souvent associés à des foyers ORL ou dentaires (C). Les anaérobies (E) proviennent directement de la flore oropharyngée, surtout en cas de mauvaise hygiène dentaire ou de pathologie sinusienne. C'est moins spécifique pour les autres germes."
  },
  {
    id: 'q-pnm-18-18',
    courseId: 'crs-pneumo-18',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Quel est l'examen d'imagerie de choix pour guider une ponction pleurale chez un patient grave non transportable ?",
    options: [
      "A. La radiographie thoracique standard de face.",
      "B. La tomodensitométrie (TDM) thoracique.",
      "C. L'échographie thoracique.",
      "D. L'imagerie par résonance magnétique (IRM).",
      "E. La scintigraphie pulmonaire de ventilation/perfusion."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : L'échographie thoracique (C) est l'examen de référence au lit du malade. Elle est portable, rapide, ne nécessite pas de rayonnements ionisants et permet un repérage en temps réel de la ponction, y compris pour les épanchements de faible abondance ou cloisonnés."
  },
  {
    id: 'q-pnm-18-19',
    courseId: 'crs-pneumo-18',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. La décortication chirurgicale consiste à :",
    options: [
      "A. Drainer un épanchement pleural simple.",
      "B. Enlever la plèvre pariétale calcifiée.",
      "C. Libérer le poumon de la gangue fibrineuse qui l'emprisonne.",
      "D. Suturer une fistule broncho-pleurale.",
      "E. Réaliser une symphyse pleurale artificielle."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : La décortication est une intervention qui vise à enlever la couche de tissu fibreux (la gangue) qui recouvre le poumon et la plèvre viscérale, l'empêchant de se ré-expandre (C). C'est un geste de rattrapage pour les stades avancés ou les échecs du traitement médical."
  },
  {
    id: 'q-pnm-18-20',
    courseId: 'crs-pneumo-18',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. Un patient présente une pleurésie purulente. L'examen direct du liquide pleural montre des bâtonnets Gram négatif. Quel est le terrain le plus probable ?",
    options: [
      "A. Jeune adulte sans antécédent.",
      "B. Nourrisson.",
      "C. Patient âgé, diabétique, institutionnalisé.",
      "D. Toxicomane intraveineux.",
      "E. Voyageur de retour d'une zone tropicale."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : Les bacilles à Gram négatif (comme E. coli, Klebsiella) sont plus fréquents chez les patients fragilisés, âgés, porteurs de comorbidités (diabète, BPCO) ou en contexte nosocomial (C). Le staphylocoque est plus associé au terrain du toxicomane (D)."
  },
  {
    id: 'q-pnm-18-21',
    courseId: 'crs-pneumo-18',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. La principale limite de la radiographie thoracique standard dans le bilan d'une pleurésie purulente est :",
    options: [
      "A. Son incapacité à diagnostiquer un épanchement.",
      "B. Son manque de sensibilité pour les épanchements de faible abondance.",
      "C. Son incapacité à visualiser le parenchyme pulmonaire sous-jacent.",
      "D. Son incapacité à détecter les cloisonnements.",
      "E. Son coût prohibitif."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : B, D.\nExplication : La radio standard peut méconnaître les épanchements de faible volume (< 200-300 ml) (B) et ne permet pas de visualiser les septations à l'intérieur de l'épanchement (D), un élément crucial pour le traitement. Elle permet généralement de voir l'épanchement (A est faux) et le parenchyme adjacent (C est faux)."
  },
  {
    id: 'q-pnm-18-22',
    courseId: 'crs-pneumo-18',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. La recherche d'une cause néoplasique sous-jacente (cancer bronchique) est particulièrement importante dans quel contexte ?",
    options: [
      "A. Pleurésie purulente de l'enfant.",
      "B. Pleurésie post-pneumonique à pneumocoque.",
      "C. Pleurésie purulente récidivante ou chronique chez un fumeur.",
      "D. Pleurésie amibienne.",
      "E. Pleurésie survenant après un traumatisme thoracique."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : Chez un patient à risque (fumeur, âgé), une pleurésie infectieuse peut être la complication d'une lésion bronchique obstructive (tumeur). Il faut systématiquement y penser devant une pneumonie ou une pleurésie de localisation persistante ou récidivante (C). C'est moins pertinent dans les autres contextes (A, B, D, E)."
  },
  {
    id: 'q-pnm-18-23',
    courseId: 'crs-pneumo-18',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Quel est l'objectif principal du traitement adjuvant (rééquilibration, nutrition) ?",
    options: [
      "A. Guérir l'infection pleurale.",
      "B. Traiter la cause initiale.",
      "C. Améliorer l'état général du patient pour favoriser la guérison.",
      "D. Raccourcir la durée de l'antibiothérapie.",
      "E. Prévenir les récidives à long terme."
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : Le traitement de la pleurésie purulente est global. L'antibiothérapie et le drainage traitent l'infection, mais le traitement adjuvant (C) vise à corriger les déficiences (dénutrition, déshydratation, carences) qui altèrent la réponse immune et la capacité de réparation de l'organisme, surtout sur un terrain fragile."
  },
  {
    id: 'q-pnm-18-24',
    courseId: 'crs-pneumo-18',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. Une pleurésie purulente est suspectée chez un patient. Le liquide ponctionné est clair mais l'analyse cytologique montre >80% de polynucléaires neutrophiles altérés. Que conclure ?",
    options: [
      "A. Il s'agit d'un transsudat, une pleurésie purulente est écartée.",
      "B. Le diagnostic de pleurésie purulente est confirmé.",
      "C. L'aspect macroscopique du liquide est le critère diagnostique absolu.",
      "D. La ponction doit être répétée car le prélèvement est non contributif.",
      "E. Il faut attendre le résultat de la culture pour affirmer le diagnostic."
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : Le critère diagnostique de pleurésie purulente est cytologique (présence de polynucléaires altérés) et non macroscopique. Un liquide clair mais riche en PN altérés est bien un empyème en phase débutante (B). L'aspect macroscopique (C) est seulement évocateur. Attendre la culture (E) retarderait le traitement."
  },
  {
    id: 'q-pnm-18-25',
    courseId: 'crs-pneumo-18',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. La survenue d'une pleurésie purulente après une œsophagoscopie doit faire évoquer :",
    options: [
      "A. Une inoculation directe.",
      "B. Une fistule œso-pleurale.",
      "C. Une inoculation indirecte à partir d'un abcès sous-phrénique.",
      "D. Une réactivation tuberculeuse.",
      "E. Une rupture œsophagienne iatrogène."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E.\nExplication : Un geste endoscopique sur l'œsophage peut compliquer d'une perforation iatrogène (E), créant une communication entre l'œsophage et la plèvre (fistule œso-pleurale, B), et conduisant à un empyème. C'est un mécanisme d'inoculation directe par effraction. Ce n'est pas une inoculation indirecte (C)."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-18-c1-1',
    courseId: 'crs-pneumo-18',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : L'éthylique aux mauvaises dents\nM. Kader, 55 ans, éthylique chronique avec un mauvais état dentaire, est admis pour fièvre à 39.5°C, altération de l'état général et douleur basithoracique droite. L'examen trouve un syndrome d'épanchement pleural droit. La ponction pleurale ramène un liquide trouble et fétide.\n\nQCM 1.1 : Quel est le germe le plus probablement en cause ?",
    options: [
      "A. Pneumocoque",
      "B. Haemophilus influenzae",
      "C. Bacteroides fragilis",
      "D. Streptococcus pyogenes",
      "E. Mycobactérie tuberculeuse"
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Le terrain (éthylique, mauvais état dentaire) et la fétidité de l'épanchement sont très évocateurs d'une infection à germes anaérobies de la flore oropharyngée, dont Bacteroides est un représentant majeur."
  },
  {
    id: 'q-pnm-18-c1-2',
    courseId: 'crs-pneumo-18',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 (suite) : QCM 1.2 : Quelle est la mesure thérapeutique adjuvante ESSENTIELLE chez ce patient ?",
    options: [
      "A. Administration de vitamine K.",
      "B. Rééquilibration hydro-électrolytique et apport vitaminique B1.",
      "C. Mise sous héparine de bas poids moléculaire à dose curative.",
      "D. Régime sans sel strict.",
      "E. Transplantation hépatique en urgence."
    ],
    correctAnswers: [1],
    explanation: "Correction : B. L'éthylisme chronique est associé à un risque de carences vitaminiques (notamment B1, responsable du syndrome de Gayet-Wernicke) et de déshydratation. La rééquilibration et la vitaminothérapie sont cruciales pour éviter des complications neurologiques et améliorer l'état général."
  },
  {
    id: 'q-pnm-18-c2-1',
    courseId: 'crs-pneumo-18',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 : La complication d'une pneumonie\nFatima, 6 ans, est admise pour une persistance de la fièvre et une majoration de la dyspnée sous antibiotiques pour une pneumonie du lobe supérieur droit diagnostiquée 5 jours plus tôt. La radio thorax montre une opacité pneumonique associée à un épanchement pleural liquidien important.\n\nQCM 2.1 : Quel est le stade le plus probable de la pleurésie ?",
    options: [
      "A. Phase exsudative",
      "B. Phase de collection purulente",
      "C. Phase d'enkystement",
      "D. Phase séquellaire",
      "E. Phase de résolution"
    ],
    correctAnswers: [1],
    explanation: "Correction : B. L'évolution sous antibiotiques inefficaces, avec majoration des symptômes et apparition d'un épanchement abondant, est typique du passage de la phase de pleurésie parapneumonique (exsudative) à la phase de collection purulente."
  },
  {
    id: 'q-pnm-18-c2-2',
    courseId: 'crs-pneumo-18',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 (suite) : QCM 2.2 : Quelle est la prise en charge locale IMMÉDIATE la plus appropriée ?",
    options: [
      "A. Kinésithérapie respiratoire intensive seule.",
      "B. Ponction évacuatrice unique.",
      "C. Mise en place d'un drain thoracique sous aspiration.",
      "D. Décortication chirurgicale en urgence.",
      "E. Surveillance simple sous antibiotiques."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Au stade de collection, les ponctions itératives sont insuffisantes. Le drainage thoracique continu est nécessaire pour évacuer le pus, permettre la réexpansion pulmonaire et réaliser des lavages."
  },
  {
    id: 'q-pnm-18-c3-1',
    courseId: 'crs-pneumo-18',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 : Le Traumatisme Oublié\nM. Ahmed, 35 ans, ouvrier, consulte pour une fièvre traînante, des sueurs nocturnes et une altération de l'état général évoluant depuis 3 semaines. Il rapporte un traumatisme thoracique fermé par accident de travail il y a un mois, traité symptomatiquement. L'auscultation trouve un syndrome pleural basal gauche. La radiographie thorax confirme un épanchement pleural gauche cloisonné.\n\nQCM 3.1 : Quel mécanisme physiopathologique est le plus probable ?",
    options: [
      "A. Dissection aortique post-traumatique",
      "B. Hémothorax infecté secondairement",
      "C. Rupture diaphragmatique avec hernie étranglée",
      "D. Épanchement pleural réactionnel stérile",
      "E. Lymphangite carcinomateuse post-traumatique"
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : Un hémothorax (épanchement de sang dans la plèvre), même de faible abondance, post-traumatique peut se surinfecter secondairement et évoluer vers un empyème, surtout si il n'a pas été bien drainé initialement. Le tableau subaigu de fièvre et d'épanchement cloisonné est très évocateur. Les autres options, bien que complications possibles d'un trauma, sont beaucoup moins fréquentes."
  },
  {
    id: 'q-pnm-18-c3-2',
    courseId: 'crs-pneumo-18',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 (suite) : QCM 3.2 : Quelle investigation complémentaire est la plus urgente et la plus informative ?",
    options: [
      "A. Angio-TDM aortique",
      "B. Échographie thoracique guidant une ponction pleurale",
      "C. Lavage broncho-alvéolaire",
      "D. IRM médullaire à la recherche d'une section racinaire",
      "E. Dosage des enzymes cardiaques"
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : L'échographie thoracique est l'examen clé : elle confirme la nature liquidienne, visualise les cloisonnements et guide une ponction pleurale évacuatrice et exploratrice. L'analyse du liquide (macroscopique, biochimique, cytologique et bactériologique) permettra de confirmer le diagnostic d'empyème et d'identifier le germe pour adapter l'antibiothérapie."
  },
  {
    id: 'q-pnm-18-c4-1',
    courseId: 'crs-pneumo-18',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 4 : La Masse Hépatique Évocatrice\nMme Leïla, 40 ans, originaire d'une zone rurale, présente des douleurs de l'hypochondre droit et de la base thoracique droite, avec une fièvre à 38.5°C et une altération de l'état général. L'examen clinique trouve une hépatomégalie sensible. L'échographie abdominale révèle une image kystique hépatique évocatrice d'un abcès amibien. La radiographie thorax montre un épanchement pleural droit de moyenne abondance.\n\nQCM 4.1 : Quel est le diagnostic le plus probable concernant l'épanchement pleural ?",
    options: [
      "A. Metastase pleurale d'un hépatocarcinome",
      "B. Réaction pleurale inflammatoire à contiguïté",
      "C. Pleurésie purulente amibienne par fistulisation",
      "D. Tuberculose pleuro-pulmonaire",
      "E. Insuffisance cardiaque congestive"
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : L'abcès amibien du foie, souvent localisé au dôme, peut se fistuliser à travers le diaphragme dans la plèvre, entraînant un empyème amibien. Le liquide pleural a alors un aspect typique de \"pus chocolat\". La sérologie amibienne sera positive."
  },
  {
    id: 'q-pnm-18-c4-2',
    courseId: 'crs-pneumo-18',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 4 (suite) : QCM 4.2 : Quel est le traitement spécifique de première intention ?",
    options: [
      "A. Chirurgie de résection hépatique en urgence",
      "B. Ponctions évacuatrices pleurales itératives seules",
      "C. Antibiothérapie par Métronidazole (Flagyl)",
      "D. Antibiothérapie par Pénicilline G",
      "E. Drainage pleural fermé simple"
    ],
    correctAnswers: [2],
    explanation: "Correction : C.\nExplication : Le traitement médical de l'amibiase tissulaire (hépatique ou pleurale) repose sur le Métronidazole. Le drainage pleural (B, E) est souvent nécessaire en complément si l'épanchement est abondant ou compressif, mais il ne suffit pas. La chirurgie (A) est réservée aux complications. La Pénicilline (D) n'est pas active sur Entamoeba histolytica."
  },
  {
    id: 'q-pnm-18-c5-1',
    courseId: 'crs-pneumo-18',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 5 : L'Immunodépression et la Toux Chronique\nM. Said, 65 ans, fumeur chronique, est suivi pour un cancer ORL traité il y a deux ans par radiothérapie. Il est admis pour une toux productive, un amaigrissement et une dyspnée d'aggravation progressive. Le scanner thoracique montre des séquelles de radiothérapie, une image de condensation pulmonaire rétractile du lobe moyen et un épanchement pleural liquidien homogène, non cloisonné, de grande abondance.\n\nQCM 5.1 : Devant ce tableau, quelle(s) hypothèse(s) doit-on principalement évoquer ?",
    options: [
      "A. Pleurésie purulente sur pneumonie d'inhalation",
      "B. Pleurésie paranéoplasique",
      "C. Lymphangite carcinomateuse",
      "D. Tuberculose pleurale",
      "E. Fibrose post-radique isolée"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D.\nExplication : Ce terrain est complexe et plusieurs étiologies peuvent s'intriquer.\n• A (Pleurésie purulente) : Les séquelles ORL et la dysphagie post-radique favorisent les fausses routes et les pneumonies d'inhalation, pouvant se compliquer d'empyème.\n• B (Pleurésie paranéoplasique) : La récidive ou une seconde localisation (cancer bronchique) est possible chez un fumeur, pouvant entraîner un épanchement pleural néoplasique.\n• D (Tuberculose) : L'immunodépression relative et l'altération de l'état général doivent faire évoquer une tuberculose, d'autant plus en contexte algérien."
  },
  {
    id: 'q-pnm-18-c5-2',
    courseId: 'crs-pneumo-18',
    questionNumber: 35,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 5 (suite) : QCM 5.2 : Quelle investigation est cruciale pour orienter le diagnostic ?",
    options: [
      "A. Épreuves fonctionnelles respiratoires (EFR)",
      "B. Ponction-biopsie pleurale",
      "C. Dosage des marqueurs tumoraux sériques",
      "D. Scintigraphie osseuse",
      "E. Test thérapeutique aux corticoïdes"
    ],
    correctAnswers: [1],
    explanation: "Correction : B.\nExplication : La ponction-biopsie pleurale est l'examen clé. Elle permet l'analyse du liquide (cytologie, biochimie, bactériologie incluant la recherche de BK) et la biopsie de la plèvre pour l'histologie (recherche de cellules tumorales ou de granulomes tuberculoïdes). C'est l'examen qui a le meilleur rendement pour différencier les diagnostics évoqués."
  }
];

export const PNEUMO_LESSON_18_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-18-mindmap',
    courseId: 'crs-pneumo-18',
    type: 'Resume',
    title: 'Carte Mentale : Pleurésie Purulente',
    contentMarkdown: `### PLEURÉSIE PURULENTE

├── **DÉFINITION**
│   └── Épanchement pleural infectieux (PMN altérés > 50%)
│
├── **PHYSIOPATHO (3 Phases)**
│   ├── **1. Exsudative** : Liquide libre. Réversible (ATB + Ponctions).
│   ├── **2. Collection** : Liquide purulent, cloisonné. Réversible (Drainage).
│   └── **3. Enkystement** : Pachypleurite, gangue fibreuse. Irréversible (Chirurgie).
│
├── **DIAGNOSTIC**
│   ├── Clinique : Trépied pleurétique + Syndrome infectieux.
│   ├── Imagerie : Radio -> Échographie (Cloisonnements, Guide ponction) -> TDM (Bilan).
│   └── Ponction : Liquide trouble/purulent. Analyse (Biochimie, Cytologie, Bactério).
│
├── **GERMES (Penser au Terrain)**
│   ├── G+ : Pneumocoque (Cloisonnement), Staphylo (Grave).
│   ├── G- : Entérobactéries (Terrain fragile), H. influenzae (Enfant).
│   ├── Anaérobies : Fétidité (Éthylique, mauvaises dents).
│   └── Amibienne : Pus "chocolat", Foie.
│
├── **TRAITEMENT (Urgence)**
│   ├── ATB IV Large Spectre (4-6 semaines) : Pénicilline/Amoxiclav + Métronidazole ± Aminoside.
│   ├── Drainage : Ponctions (Stade 1) -> Drain (Stade 2).
│   ├── Kiné Respiratoire : Précoce et prolongée (≥ 3 mois).
│   ├── Traitement Adjuvant : Rééquilibration, Nutrition, Vitamines.
│   └── Chirurgie : Décortication si échec médical/séquelles.
│
└── **PRONOSTIC**
    └── Lié au TERRAIN et à la PRÉCOCITÉ du traitement.`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Pleurésie Purulente', 'Empyème', 'Drainage']
  },
  {
    id: 'res-pnm-18-astuces',
    courseId: 'crs-pneumo-18',
    type: 'Astuce',
    title: 'Astuces et Mnémotechniques : Pleurésie Purulente',
    contentMarkdown: `### Astuces et Mnémotechniques
• **Les 3 C de l'Évolution** :
  - **C**oloration (Exsudative) -> Liquide clair/trouble.
  - **C**ollection -> Liquide Cloué (cloisonné) et Crème (purulent).
  - **C**arapace (Enkystement) -> Gangue fibreuse.
• **Pour le Traitement Antibiotique Probabiliste : PAM** :
  - **P**énicilline (ou Amoxicilline-acide clavulanique)
  - **A**naérobies (Métronidazole)
  - **M**onument (Aminosides pour les Gram Négatifs) / ou Moins certain (si on suspecte des Gram Négatifs)
• **Diagnostic Différentiel d'un Épanchement : CHAPT** :
  - **C**hylothorax
  - **H**émodynamique (Insuffisance cardiaque -> Transsudat)
  - **A**uto-immune (LED, Polyarthrite)
  - **P**ancréatite
  - **T**umeur
• **Signes Physiques du Trépied Pleurétique : AMV** :
  - **A**bolition des VV (Vibrations Vocales)
  - **M**atité à la percussion
  - **V**ésiculaire (Murmure Vésiculaire aboli)

---
*Allez, courage ! Maîtriser la pleurésie purulente, c'est comme réussir un bon drainage : il faut de la précision, de la rigueur, et ça laisse une satisfaction durable quand c'est bien fait ! Vous allez brillamment réussir.*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Pleurésie Purulente']
  }
];

// Lesson 19: Pneumonies Aiguës Communautaires
export const PNEUMO_LESSON_19_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-19-01',
    courseId: 'crs-pneumo-19',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant le diagnostic positif d'une PAC, laquelle de ces affirmations est VRAIE ?",
    options: [
      "a) La radiographie thoracique est inutile si le tableau clinique est typique.",
      "b) Le syndrome de condensation associe matité, abolition des vibrations vocales et râles crépitants.",
      "c) La TDM thoracique est l'examen d'imagerie de première intention.",
      "d) La radiographie thoracique face et profil est l'examen systématique pour le diagnostic positif.",
      "e) L'auscultation pulmonaire est toujours normale au début."
    ],
    correctAnswers: [3],
    explanation: "Correction : d\nLa radiographie thoracique est le seul examen systématique et indispensable pour confirmer le diagnostic de pneumonie en objectivant l'opacité parenchymateuse. Le syndrome de condensation associe une augmentation des vibrations vocales (et non une abolition). La TDM est réservée aux cas compliqués."
  },
  {
    id: 'q-pnm-19-02',
    courseId: 'crs-pneumo-19',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Un patient de 70 ans est admis pour PAC. Son score CURB-65 est de 3. Quelle est la prise en charge la plus appropriée ?",
    options: [
      "a) Antibiothérapie orale en ambulatoire avec réévaluation sous 48h.",
      "b) Hospitalisation en service de médecine conventionnelle.",
      "c) Hospitalisation en unité de soins intensifs.",
      "d) Traitement symptomatique seul.",
      "e) Bilan étiologique complet avant toute antibiothérapie."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nUn score CURB-65 ≥ 2 indique une pneumonie sévère nécessitant une hospitalisation. Un score de 3, qui inclut souvent l'âge et d'autres critères de gravité (ex: hypotension, confusion), est associé à une mortalité élevée et justifie une surveillance en unité de soins intensifs."
  },
  {
    id: 'q-pnm-19-03',
    courseId: 'crs-pneumo-19',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Dans le diagnostic bactériologique d'une PAC, lequel de ces prélèvements reste interprétable même après l'initiation d'une antibiothérapie ?",
    options: [
      "a) L'hémoculture.",
      "b) L'étude cytobactériologique des crachats (ECBC).",
      "c) L'antigénurie légionelle et pneumocoque.",
      "d) La sérologie pour Mycoplasma pneumoniae.",
      "e) Le prélèvement fibroscopique protégé."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nLes antigènes urinaires sont excrétés et détectables précocement (1-3 jours après le début des symptômes) et persistent plusieurs jours à plusieurs semaines, même après le début d'une antibiothérapie efficace. Les autres prélèvements (a, b, e) voient leur rendement chuter après la première dose d'antibiotiques."
  },
  {
    id: 'q-pnm-19-04',
    courseId: 'crs-pneumo-19',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. Quel germe est le plus probable devant un tableau de pneumonie d'installation progressive, avec toux sèche, céphalées et un foyer radio-clinique hilo-basale ?",
    options: [
      "a) Streptococcus pneumoniae",
      "b) Staphylococcus aureus",
      "c) Mycoplasma pneumoniae",
      "d) Klebsiella pneumoniae",
      "e) Legionella pneumophila"
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nMycoplasma pneumoniae se présente souvent comme une pneumonie atypique : début progressif, toux sèche irritante, signes extrarhino-pharyngés fréquents (céphalées, arthralgies) et image radiologique souvent hilo-basale et réticulo-nodulaire."
  },
  {
    id: 'q-pnm-19-05',
    courseId: 'crs-pneumo-19',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Un patient présente une pneumonie avec diarrhée, hyponatrémie et confusion. Quel pathogène doit être prioritairement évoqué ?",
    options: [
      "a) Chlamydia pneumoniae",
      "b) Streptococcus pneumoniae",
      "c) Mycoplasma pneumoniae",
      "d) Legionella pneumophila",
      "e) Haemophilus influenzae"
    ],
    correctAnswers: [3],
    explanation: "Correction : d\nLegionella pneumophila est classiquement associée à des signes digestifs (diarrhée), neurologiques (confusion) et biologiques (hyponatrémie, perturbations hépatiques), constituant un tableau systémique sévère."
  },
  {
    id: 'q-pnm-19-06',
    courseId: 'crs-pneumo-19',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Concernant le traitement d'une PAC sans signe de gravité chez un sujet sain de 40 ans, quelle est l'option de première intention en cas de suspicion de pneumocoque ?",
    options: [
      "a) Macrolides pendant 15 jours.",
      "b) Augmentin pendant 7 jours.",
      "c) Amoxicilline pendant 8 à 10 jours.",
      "d) Fluoroquinolones pendant 7 jours.",
      "e) Céphalosporine de 3e génération (C3G) IV."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nChez un sujet sain sans gravité, l'antibiothérapie probabiliste de première intention pour une pneumonie à pneumocoque présumé est l'amoxicilline per os. Les autres options sont réservées à des contextes différents (comorbidités, allergie, échec)."
  },
  {
    id: 'q-pnm-19-07',
    courseId: 'crs-pneumo-19',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Quel élément du bilan initial est le plus prédictif de la gravité d'une PAC ?",
    options: [
      "a) Le taux de leucocytes.",
      "b) La présence d'une hyperthermie à 39.5°C.",
      "c) La fréquence respiratoire.",
      "d) Le taux de CRP.",
      "e) La présence d'une expectoration purulente."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nLa fréquence respiratoire > 30 cycles/min est un critère majeur de gravité dans les scores CURB-65 et CRB-65. C'est un signe clinique simple, reproductible et fortement corrélé à l'insuffisance respiratoire et à la mortalité."
  },
  {
    id: 'q-pnm-19-08',
    courseId: 'crs-pneumo-19',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Une pneumonie qui régresse incomplètement ou récidive dans le même territoire doit faire évoquer :",
    options: [
      "a) Une tuberculose pulmonaire.",
      "b) Une pneumopathie d'hypersensibilité.",
      "c) Un cancer broncho-pulmonaire sous-jacent.",
      "d) Une embolie pulmonaire.",
      "e) Une infection à légionelles."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nLe caractère rétractile, récidivant ou à résolution incomplète d'une pneumonie est un drapeau rouge pour un cancer broncho-pulmonaire obstructif, notamment chez un patient fumeur. Un bilan complémentaire (fibroscopie, scanner) est impératif."
  },
  {
    id: 'q-pnm-19-09',
    courseId: 'crs-pneumo-19',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Pour qu'une ECBC soit considérée comme interprétable, il faut :",
    options: [
      "a) Plus de 25 cellules épithéliales par champ.",
      "b) Plus de 25 polynucléaires neutrophiles (PNN) par champ et moins de 10 cellules épithéliales par champ.",
      "c) La présence de bactéries à l'examen direct.",
      "d) Un prélèvement réalisé après la première dose d'antibiotique.",
      "e) Un examen direct négatif."
    ],
    correctAnswers: [1],
    explanation: "Correction : b\nLes critères de Bartlett (ou critères de Murray et Washington) définissent un échantillon de qualité (provenant des voies respiratoires inférieures) par une prédominance de PNN (>25/champ) et une rareté des cellules épithéliales squameuses (<10/champ), qui indiquent une contamination salivaire minime."
  },
  {
    id: 'q-pnm-19-10',
    courseId: 'crs-pneumo-19',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Le score CRB-65 diffère du CURB-65 par :",
    options: [
      "a) L'absence de critère de fréquence respiratoire.",
      "b) L'ajout d'un critère d'âge.",
      "c) L'absence du dosage de l'urée.",
      "d) L'ajout d'un critère de température.",
      "e) La prise en compte de la saturation en O2."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nLe score CRB-65 est une version simplifiée du CURB-65, utilisable en médecine de ville, qui ne nécessite pas de bilan biologique. Il omet donc le critère \"Urée > 7 mmol/L\" et se base uniquement sur la Confusion, la Fréquence Respiratoire, la Pression Artérielle et l'âge (≥ 65 ans)."
  },
  {
    id: 'q-pnm-19-11',
    courseId: 'crs-pneumo-19',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Une pneumonie franche lobaire aiguë (PFLA) typique à Streptococcus pneumoniae se caractérise par :",
    options: [
      "a) Un début progressif sur plusieurs jours.",
      "b) Une expectoration rouillée.",
      "c) Des images radiologiques réticulo-nodulaires diffuses.",
      "d) Une absence de syndrome de condensation.",
      "e) Une fièvre élevée à 40°C d'installation brutale."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : b, e\nLa PFLA pneumococcique est classiquement d'installation brutale (\"en coup de tonnerre\") avec une fièvre élevée (e). L'expectoration rouillée (b) est un signe très évocateur. Les images réticulo-nodulaires (c) sont typiques des pneumonies atypiques ou virales."
  },
  {
    id: 'q-pnm-19-12',
    courseId: 'crs-pneumo-19',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Dans la prise en charge d'une PAC, les investigations microbiologiques :",
    options: [
      "a) Doivent systématiquement précéder la première dose d'antibiothérapie.",
      "b) Sont obligatoires pour initier un traitement.",
      "c) Ne doivent pas retarder l'initiation de l'antibiothérapie.",
      "d) Sont inutiles en pratique courante.",
      "e) Permettent d'adapter secondairement le traitement dans les formes graves."
    ],
    correctAnswers: [2, 4],
    explanation: "Correction : c, e\nLe délai à l'initiation de l'antibiothérapie impacte le pronostic. Ainsi, les prélèvements (c) ne doivent pas la retarder. Cependant, ils gardent un intérêt, surtout dans les formes graves, pour adapter le traitement secondairement (e) en cas de germe résistant ou inattendu."
  },
  {
    id: 'q-pnm-19-13',
    courseId: 'crs-pneumo-19',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Un patient sous amoxicilline pour une PAC présumée à pneumocoque est toujours fébrile à 48h. La radiographie est stable. Quelle est la meilleure attitude ?",
    options: [
      "a) Interpréter ceci comme un échec thérapeutique et changer pour une fluoroquinolone.",
      "b) Ajouter un macrolide pour couvrir une bactérie atypique.",
      "c) Arrêter immédiatement tout antibiotique.",
      "d) Réaliser un scanner thoracique en urgence.",
      "e) Poursuivre le traitement et réévaluer à 72h, car la réponse peut être lente."
    ],
    correctAnswers: [1],
    explanation: "Correction : b\nL'absence d'apyrexie à 48h sous bêta-lactamines couvrant le pneumocoque doit faire évoquer une infection à germe atypique (Mycoplasma, Chlamydia), naturellement résistantes à l'amoxicilline. L'adjonction d'un macrolide, actif sur ces germes, est la stratégie recommandée."
  },
  {
    id: 'q-pnm-19-14',
    courseId: 'crs-pneumo-19',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Le diagnostic différentiel d'une PAC peut inclure tous sauf :",
    options: [
      "a) Un cancer broncho-pulmonaire.",
      "b) Une tuberculose pulmonaire.",
      "c) Une bronchite aiguë.",
      "d) Une embolie pulmonaire.",
      "e) Une pneumopathie d'hypersensibilité."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nLa bronchite aiguë, qui n'atteint pas le parenchyme pulmonaire, ne réalise pas le tableau clinico-radiologique de condensation d'une pneumonie. Tous les autres items sont des diagnostics différentiels classiques pouvant mimer une pneumonie."
  },
  {
    id: 'q-pnm-19-15',
    courseId: 'crs-pneumo-19',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Concernant la pneumonie à Mycoplasma pneumoniae, laquelle de ces affirmations est FAUSSE ?",
    options: [
      "a) Elle est souvent responsable d'épidémies en communauté (écoles, armée).",
      "b) Son incubation est courte (24-48 heures).",
      "c) La toux est souvent sèche et quinteuse.",
      "d) Des manifestations extra-pulmonaires (cutanées, neurologiques) sont possibles.",
      "e) La radiographie peut être plus impressionnante que l'examen clinique."
    ],
    correctAnswers: [1],
    explanation: "Correction : b\nL'incubation de la pneumonie à Mycoplasma est généralement longue, de 1 à 3 semaines. Une incubation courte (24-48h) est plus typique du pneumocoque ou de la grippe."
  },
  {
    id: 'q-pnm-19-16',
    courseId: 'crs-pneumo-19',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Quel paramètre du score de Fine (Pneumonia Severity Index) justifie à lui seul une hospitalisation ?",
    options: [
      "a) Classe I.",
      "b) Classe II.",
      "c) Classe III.",
      "d) Classe IV.",
      "e) Classe V."
    ],
    correctAnswers: [3, 4],
    explanation: "Correction : d, e\nLe score de Fine classe les patients en 5 classes de risque. Les classes I et II peuvent être traitées en ambulatoire. La classe III nécessite une brève hospitalisation. Les classes IV et V justifient une hospitalisation systématique, la classe V souvent en soins intensifs."
  },
  {
    id: 'q-pnm-19-17',
    courseId: 'crs-pneumo-19',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Un patient présente une pneumonie avec une opacité lobaire supérieure droite et un scanner évoquant une excavation. Le premier diagnostic à évoquer est :",
    options: [
      "a) Une pneumonie à pneumocoque.",
      "b) Une pneumonie à légionelles.",
      "c) Une tuberculose pulmonaire.",
      "d) Une pneumopathie à mycoplasme.",
      "e) Un cancer du poumon avec nécrose."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nL'atteinte des lobes supérieurs et la présence d'une excavation sont très évocatrices de tuberculose pulmonaire, surtout dans un contexte endémique. Même si un abcès à pyogènes ou un cancer nécrosé sont possibles, la tuberculose est le premier diagnostic à éliminer."
  },
  {
    id: 'q-pnm-19-18',
    courseId: 'crs-pneumo-19',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. La recherche d'antigènes solubles urinaires est particulièrement utile pour le diagnostic de :",
    options: [
      "a) Mycoplasma pneumoniae",
      "b) Streptococcus pneumoniae",
      "c) Legionella pneumophila",
      "d) Chlamydia pneumoniae",
      "e) Staphylococcus aureus"
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : b, c\nLes antigénuries sont des outils diagnostiques rapides et spécifiques. Elles sont disponibles et très utiles pour le pneumocoque (b) et la légionelle (c). Le diagnostic de Mycoplasma et Chlamydia repose plutôt sur la sérologie ou la PCR."
  },
  {
    id: 'q-pnm-19-19',
    courseId: 'crs-pneumo-19',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Une pneumonie chez un patient ayant des antécédents d'épilepsie et un mauvais état dentaire doit faire suspecter :",
    options: [
      "a) Une pneumonie à légionelles.",
      "b) Une pneumonie d'inhalation.",
      "c) Une pneumonie à pneumocoque.",
      "d) Une tuberculose.",
      "e) Une pneumonie virale."
    ],
    correctAnswers: [1],
    explanation: "Correction : b\nLe terrain (épilepsie, troubles de la déglutition) et le foyer infectieux bucco-dentaire sont des facteurs de risque classiques de fausse route, menant à une pneumonie d'inhalation, souvent à germes anaérobies."
  },
  {
    id: 'q-pnm-19-20',
    courseId: 'crs-pneumo-19',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. Le principal objectif d'une radiographie thoracique de contrôle à 1 mois après un épisode de PAC est :",
    options: [
      "a) De confirmer la guérison chez tous les patients.",
      "b) De s'assurer de la résolution complète des lésions, surtout chez un patient fumeur.",
      "c) De vérifier l'efficacité de l'antibiothérapie.",
      "d) De rechercher systématiquement une séquelle pleurale.",
      "e) De dépister une tuberculose."
    ],
    correctAnswers: [1],
    explanation: "Correction : b\nLa radiographie de contrôle n'est pas systématique pour tous. Elle est surtout cruciale chez les patients à risque de cancer bronchique (fumeurs, >50 ans) pour s'assurer de la disparition complète de l'opacité et éliminer une lésion tumorale sous-jacente qui se serait révélée par la pneumonie."
  },
  {
    id: 'q-pnm-19-21',
    courseId: 'crs-pneumo-19',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Quel est le germe le plus fréquemment responsable de PAC chez l'adulte sain ?",
    options: [
      "a) Legionella pneumophila",
      "b) Staphylococcus aureus",
      "c) Streptococcus pneumoniae",
      "d) Haemophilus influenzae",
      "e) Mycoplasma pneumoniae"
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nStreptococcus pneumoniae (le pneumocoque) est l'agent pathogène le plus fréquent dans toutes les études épidémiologiques sur les PAC de l'adulte, justifiant son ciblage prioritaire dans l'antibiothérapie probabiliste."
  },
  {
    id: 'q-pnm-19-22',
    courseId: 'crs-pneumo-19',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Le caractère \"réticulo-nodulaire\" sur une radiographie pulmonaire est plus suggestif d'une infection par :",
    options: [
      "a) Klebsiella pneumoniae",
      "b) Streptococcus pneumoniae",
      "c) Un virus influenza",
      "d) Mycoplasma pneumoniae",
      "e) Staphylococcus aureus"
    ],
    correctAnswers: [3],
    explanation: "Correction : d\nLes pneumonies atypiques, en particulier à Mycoplasma pneumoniae, se présentent souvent radiologiquement par des opacités réticulo-nodulaires, bilatérales et mal limitées, par opposition à la condensation alvéolaire lobaire typique du pneumocoque."
  },
  {
    id: 'q-pnm-19-23',
    courseId: 'crs-pneumo-19',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Un épanchement pleural parapneumonique complique une PAC. Quel prélèvement peut être le plus contributif pour identifier le germe ?",
    options: [
      "a) Une sérologie virale.",
      "b) Une ECBC.",
      "c) Une hémoculture.",
      "d) Une ponction pleurale avec examen cytobactériologique.",
      "e) L'antigénurie légionelle."
    ],
    correctAnswers: [3],
    explanation: "Correction : d\nLa ponction pleurale (pleurocentèse) permet de prélever directement le liquide d'épanchement, qui est souvent le siège d'une forte concentration bactérienne. Son analyse cytobactériologique (numération, culture) a un rendement diagnostique bien supérieur à l'ECBC dans ce contexte."
  },
  {
    id: 'q-pnm-19-24',
    courseId: 'crs-pneumo-19',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La présence d'un herpès labial lors d'une PFLA est :",
    options: [
      "a) Un signe pathognomonique d'une infection à herpes virus.",
      "b) Un signe de gravité imposant l'admission en réanimation.",
      "c) Un signe associé fréquent, sans valeur pronostique particulière.",
      "d) Un élément qui contre-indique l'utilisation de l'amoxicilline.",
      "e) Un signe évoquant une tuberculose."
    ],
    correctAnswers: [2],
    explanation: "Correction : c\nL'herpès labial (bouton de fièvre) est un signe cutané bénin et classique, mais non spécifique, observé lors des syndromes infectieux sévères et fébriles, comme la PFLA. Il ne modifie pas la prise en charge."
  },
  {
    id: 'q-pnm-19-25',
    courseId: 'crs-pneumo-19',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Selon les recommandations, la durée habituelle d'une antibiothérapie pour une PAC non compliquée à pneumocoque est de :",
    options: [
      "a) 5 jours",
      "b) 8 à 10 jours",
      "c) 14 jours",
      "d) 21 jours",
      "e) 3 jours après l'apyrexie"
    ],
    correctAnswers: [1],
    explanation: "Correction : b\nPour une PAC non compliquée à pneumocoque, la durée de traitement standard est de 8 à 10 jours. Une durée plus courte (5 jours) peut être envisagée si l'évolution est rapidement favorable. Les durées plus longues sont réservées aux germes particuliers (ex: légionellose) ou aux cas compliqués."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-19-c1-1',
    courseId: 'crs-pneumo-19',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Le Retraité Désorienté\nM. Ahmed, 72 ans, aux antécédents de tabagisme et d'HTA, est amené aux urgences par sa famille pour une toux productive et une fièvre depuis 3 jours. Il est confus (ne reconnaît pas ses enfants), sa FR est à 32 cycles/min, sa PA à 85/50 mmHg et sa FC à 125 bpm. La radiographie thoracique montre une opacité alvéolaire du lobe inférieur droit.\n\nQ1. Quel est le score CURB-65 de ce patient ?",
    options: [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4",
      "e) 5"
    ],
    correctAnswers: [3],
    explanation: "Correction : d. Il présente une Confusion (+1), une FR >30 (+1), une PA systolique <90 mmHg (+1) et il a >65 ans (+1). Total = 4. Ce score élevé indique un pronostic sévère."
  },
  {
    id: 'q-pnm-19-c1-2',
    courseId: 'crs-pneumo-19',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : Q2. Quelle est la première mesure thérapeutique à initier en urgence ?",
    options: [
      "a) Antibiothérapie orale.",
      "b) Oxygénothérapie et remplissage vasculaire.",
      "c) Réalisation d'une TDM cérébrale.",
      "d) Ponction lombaire.",
      "e) Prélèvement des hémocultures et attente des résultats."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. La prise en charge initiale d'un état de choc septique (ici hypoperfusion et détresse respiratoire) prime. Elle repose sur l'oxygénation et la stabilisation hémodynamique avant même l'antibiothérapie, qui doit cependant être administrée dans l'heure."
  },
  {
    id: 'q-pnm-19-c2-1',
    courseId: 'crs-pneumo-19',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : L'Étudiante Fatiguée\nMlle Samira, 19 ans, consulte pour une toux sèche, des céphalées et une fièvre à 38.5°C évoluant depuis 5 jours. L'examen clinique est pauvre. La radiographie thoracique montre une discrète opacité réticulo-nodulaire péribilaire droite.\n\nQ1. Quel est le germe le plus probable ?",
    options: [
      "a) Streptococcus pneumoniae",
      "b) Mycoplasma pneumoniae",
      "c) Legionella pneumophila",
      "d) Staphylococcus aureus"
    ],
    correctAnswers: [1],
    explanation: "Correction : b. Le tableau est typique d'une pneumonie atypique : sujet jeune, début progressif, toux sèche, signes généraux (céphalées), discordance clinico-radiologique et image réticulo-nodulaire."
  },
  {
    id: 'q-pnm-19-c2-2',
    courseId: 'crs-pneumo-19',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : Q2. Quelle est l'antibiothérapie de première intention ?",
    options: [
      "a) Amoxicilline",
      "b) Augmentin",
      "c) Macrolide",
      "d) Céphalosporine de 3e génération"
    ],
    correctAnswers: [2],
    explanation: "Correction : c. Les macrolides sont le traitement de première intention des pneumonies à Mycoplasma."
  },
  {
    id: 'q-pnm-19-c3-1',
    courseId: 'crs-pneumo-19',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Le Fumeur Têtu\nM. Kamel, 58 ans, fumeur à 30 PA, a présenté il y a 2 mois une PAC du lobe supérieur droit traitée par Augmentin. La toux et l'altération de l'état général persistent. La radio de contrôle montre une opacité rétractile partiellement résolue.\n\nQ1. Quelle est la principale hypothèse diagnostique ?",
    options: [
      "a) Échec thérapeutique nécessitant un autre antibiotique.",
      "b) Tuberculose pulmonaire.",
      "c) Cancer broncho-pulmonaire révélé par une pneumopathie obstructive.",
      "d) Pneumopathie immuno-allergique."
    ],
    correctAnswers: [2],
    explanation: "Correction : c. Chez un fumeur de plus de 50 ans, une pneumonie récidivante ou à résolution incomplète, surtout si elle est rétractile, est un signal d'alarme pour un cancer bronchique sous-jacent."
  },
  {
    id: 'q-pnm-19-c3-2',
    courseId: 'crs-pneumo-19',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 (suite) : Q2. Quel est le bilan complémentaire le plus approprié ?",
    options: [
      "a) Nouvelle cure d'antibiotiques à large spectre.",
      "b) Sérologies pour germes atypiques.",
      "c) Fibroscopie bronchique avec biopsies.",
      "d) Scintigraphie osseuse."
    ],
    correctAnswers: [2],
    explanation: "Correction : c. La fibroscopie bronchique permet l'exploration endoscopique de l'arbre bronchique et la biopsie de toute lésion suspecte pour confirmation histologique."
  },
  {
    id: 'q-pnm-19-c4-1',
    courseId: 'crs-pneumo-19',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Le Voyageur Désorienté\nM. Ali, 45 ans, revient d'un séjour dans un hôtel thermal. Il est admis pour une fièvre à 40°C, des myalgies, une diarrhée et une confusion. Biologiquement, on note une hyponatrémie à 128 mmol/L et une cytolyse hépatique.\n\nQ1. Quel diagnostic évoquez-vous en premier ?",
    options: [
      "a) Grippe compliquée de pneumonie bactérienne.",
      "b) Pneumonie à Legionella pneumophila.",
      "c) Gastro-entérite virale sévère avec déshydratation.",
      "d) Pneumonie à pneumocoque."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. Le contexte (hôtel, eaux thermales), le tableau systémique associant signes digestifs, neurologiques (confusion) et biologiques (hyponatrémie, atteinte hépatique) est hautement évocateur d'une légionellose."
  },
  {
    id: 'q-pnm-19-c5-1',
    courseId: 'crs-pneumo-19',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : L'Échec Thérapeutique\nMme Fatima, 80 ans, diabétique, est hospitalisée pour une PAC et mise sous Amoxicilline-Acide Clavulanique. Après 72h, elle est toujours fébrile à 39°C et la dyspnée s'aggrave.\n\nQ1. Quelle est la démarche la plus appropriée ?",
    options: [
      "a) Attendre 24h de plus.",
      "b) Ajouter un aminoside.",
      "c) Réévaluer le patient et élargir l'antibiothérapie.",
      "d) Arrêter les antibiotiques."
    ],
    correctAnswers: [2],
    explanation: "Correction : c. L'absence d'amélioration, voire l'aggravation après 72h d'antibiothérapie bien conduite, définit l'échec thérapeutique. Il impose une réévaluation clinique, radiologique et microbiologique, et un élargissement de l'antibiothérapie (ex: couvrir les germes atypiques et les bacilles à Gram négatif résistants)."
  }
];

export const PNEUMO_LESSON_19_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-19-mindmap',
    courseId: 'crs-pneumo-19',
    type: 'Resume',
    title: 'Carte Mentale Synthétique : PAC',
    contentMarkdown: `### PNEUMONIES AIGUËS COMMUNAUTAIRES (PAC)

├── **DIAGNOSTIC POSITIF**
│   ├── Clinique: Syndrome infectieux + Syndrome de condensation (Matité, ↑VV, Râles crépitants)
│   ├── Imagerie: RADIO Thorax face/profil -> Opacité alvéolaire
│   └── Bactério: Antigénurie (Légionelle/Pneumocoque), ECBC (si qualité: Bartlett > 25 PNN, < 10 cellules épithéliales), Hémocultures
│
├── **DIAGNOSTIC DE GRAVITÉ**
│   ├── Signes de gravité: Confusion, FR >30, PA <90, Temp. >40/<35
│   └── Scores pronostiques:
│       ├── **CURB-65** (≥2 -> Hospitalisation)
│       ├── **CRB-65** (Ambulatoire)
│       └── **Fine / PSI** (Classes IV-V hospitalisées)
│
└── **PRISE EN CHARGE**
    ├── **Antibiothérapie EMPIRIQUE selon Contexte** :
    │   ├── Sujet sain -> Amoxicilline per os
    │   ├── Comorbidités / Sujet âgé -> Amoxicilline-Acide Clavulanique
    │   └── Forme grave hospitalisée -> C3G IV + Macrolide ou Fluoroquinolone
    ├── Évaluation de l'efficacité à 48-72h (recherche germe atypique si échec)
    └── Contrôle Radiologique à 1 mois si facteur de risque (fumeur > 50 ans -> éliminer cancer sous-jacent)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'PAC', 'Pneumonie', 'CURB-65']
  },
  {
    id: 'res-pnm-19-astuces',
    courseId: 'crs-pneumo-19',
    type: 'Astuce',
    title: 'Astuces et Mnémotechniques : PAC',
    contentMarkdown: `### Astuces et Mnémotechniques
1. **Triade de Gaillard (Condensation)** : Matité, Vibrations Vocales ↑, Râles crépitants -> *"Mon Vieux Râle"*.
2. **Germes des Pneumonies Atypiques** : Mycoplasma, Chlamydia, Legionella -> **"Ma CLasse"**.
3. **Tableau de la Légionellose** : Pensez à **DANSE** :
   - **D**iarrhée
   - **A**ltération de l'état général / neurologique (confusion)
   - **N**atrémie basse (Hyponatrémie)
   - **S**ignes respiratoires
   - **E**nzymes hépatiques ↑
4. **Score CURB-65** :
   - **C**onfusion
   - **U**rée (> 7 mmol/L)
   - **R**R (Respiratory Rate > 30)
   - **B**P (Blood Pressure PAS < 90 ou PAD ≤ 60)
   - **65** ans (≥ 65 ans).
5. **Indication de la Radio de Contrôle** : *"Un mois pour un fumeur"* -> La radiographie de contrôle à distance (1 mois) est indispensable chez le fumeur pour s'assurer de la résolution complète et éliminer un cancer sous-jacent.

---
*Vous voici armé pour dominer ce chapitre essentiel ! Alors, prenez une grande inspiration, et que votre savoir soit aussi solide que les bases de la prise en charge d'une PAC.*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'PAC', 'CURB-65']
  }
];
