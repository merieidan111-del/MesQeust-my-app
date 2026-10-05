import { Question, CourseResource } from '../../types/medical';

// Lesson 10: SARCOIDOSE
export const PNEUMO_LESSON_10_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-10-01',
    courseId: 'crs-pneumo-10',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant l’épidémiologie de la sarcoïdose :",
    options: [
      "A) Touche préférentiellement les fumeurs.",
      "B) Plus fréquente chez les femmes.",
      "C) Incidence plus élevée et formes plus sévères chez les sujets noirs.",
      "D) Pic d’incidence entre 25 et 45 ans.",
      "E) Formes familiales dans environ 4% des cas."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : B, C, D, E\n• A est faux : le terrain non fumeur est plus exposé.\n• B est vrai : ratio F/H de 1,2–1,5.\n• C est vrai : bien documenté.\n• D est vrai : âge typique.\n• E est vrai : rares formes familiales."
  },
  {
    id: 'q-pnm-10-02',
    courseId: 'crs-pneumo-10',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. La sarcoïdose est caractérisée par :",
    options: [
      "A) Une granulomatose nécrosante caséeuse.",
      "B) Une hyperréactivité humorale.",
      "C) Une réponse immunitaire cellulaire incontrôlée.",
      "D) Une alvéolite à lymphocytes CD4 prédominants.",
      "E) Une étiologie bien identifiée."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : C, D\n• A faux : pas de nécrose caséeuse.\n• B faux : réponse cellulaire.\n• C vrai : mécanisme central.\n• D vrai : LBA montre alvéolite lymphocytaire T CD4.\n• E faux : étiologie inconnue."
  },
  {
    id: 'q-pnm-10-03',
    courseId: 'crs-pneumo-10',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Dans le lavage broncho-alvéolaire (LBA) de la sarcoïdose :",
    options: [
      "A) Le rapport CD4/CD8 est diminué.",
      "B) On observe une hypercellularité à macrophages et lymphocytes T.",
      "C) Il est systématiquement normal.",
      "D) Il permet d’éliminer une tuberculose par recherche de BK.",
      "E) Un rapport CD4/CD8 > 3,5 est très évocateur."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : B, D, E\n• A faux : rapport augmenté.\n• B vrai : alvéolite.\n• C faux : peut être inflammatoire.\n• D vrai : diagnostic différentiel.\n• E vrai : signe fort."
  },
  {
    id: 'q-pnm-10-04',
    courseId: 'crs-pneumo-10',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. Concernant le syndrome de Löfgren :",
    options: [
      "A) Associe fièvre, érythème noueux, ADP hilaires bilatérales.",
      "B) Évolution toujours vers la chronicité.",
      "C) Forme aiguë de sarcoïdose.",
      "D) Toujours associé à une anergie tuberculinique.",
      "E) Nécessite une corticothérapie systématique."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\n• A vrai : triade classique.\n• B faux : évolution souvent favorable.\n• C vrai : présentation aiguë.\n• D faux : fréquente mais pas constante.\n• E faux : traitement symptomatique souvent suffisant."
  },
  {
    id: 'q-pnm-10-05',
    courseId: 'crs-pneumo-10',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. L’atteinte radiologique de type I selon la classification de Scadding :",
    options: [
      "A) Montre des ADP médiastinales isolées.",
      "B) Présente toujours des opacités parenchymateuses.",
      "C) Représente environ 50% des cas.",
      "D) Est de bon pronostic.",
      "E) Nécessite un traitement systématique."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\n• A vrai : ADP seules.\n• B faux : parenchyme normal.\n• C vrai : fréquence.\n• D vrai : guérison spontanée fréquente.\n• E faux : abstention souvent possible."
  },
  {
    id: 'q-pnm-10-06',
    courseId: 'crs-pneumo-10',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. L’enzyme de conversion de l’angiotensine (ECA) :",
    options: [
      "A) Est abaissée dans 60% des cas.",
      "B) Peut être élevée dans d’autres pathologies granulomateuses.",
      "C) Est un marqueur spécifique de la sarcoïdose.",
      "D) Son dosage aide au suivi évolutif.",
      "E) Est produite par les cellules épithélioïdes du granulome."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : B, D, E\n• A faux : elle est élevée dans ~60%.\n• B vrai : non spécifique.\n• C faux : manque de spécificité.\n• D vrai : utile pour suivre l’activité.\n• E vrai : synthétisée par les macrophages activés."
  },
  {
    id: 'q-pnm-10-07',
    courseId: 'crs-pneumo-10',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. L’hypercalcémie/hypercalciurie dans la sarcoïdose est due à :",
    options: [
      "A) Une sécrétion ectopique de PTH.",
      "B) Une production macrophagique de calcitriol (1,25-(OH)2-D3).",
      "C) Une atteinte rénale primitive.",
      "D) Une augmentation de l’absorption intestinale du calcium.",
      "E) Est une indication à la corticothérapie."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : B, D, E\n• A faux : la PTH est normale.\n• B vrai : activation extra-rénale de la vitamine D.\n• C faux : perturbation métabolique, pas lésionnelle.\n• D vrai : effet du calcitriol.\n• E vrai : complication traitée par corticoïdes."
  },
  {
    id: 'q-pnm-10-08',
    courseId: 'crs-pneumo-10',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Les indications formelles à une corticothérapie générale incluent :",
    options: [
      "A) Une sarcoïdose asymptomatique de type I.",
      "B) Une uvéite postérieure.",
      "C) Une atteinte neurologique symptomatique.",
      "D) Une hypercalcémie persistante.",
      "E) Une simple toux sèche."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\n• A faux : abstention.\n• B vrai : risque de cécité.\n• C vrai : gravité.\n• D vrai : complication métabolique.\n• E faux : pas une indication formelle."
  },
  {
    id: 'q-pnm-10-09',
    courseId: 'crs-pneumo-10',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Le granulome tuberculoïde de la sarcoïdose :",
    options: [
      "A) Contient une nécrose caséeuse centrale.",
      "B) Est composé de cellules épithélioïdes et giganto-cellulaires.",
      "C) Est pathognomonique de la maladie.",
      "D) Peut se voir dans d’autres pathologies.",
      "E) Est souvent stérile à l’examen direct et culture."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : B, D, E\n• A faux : pas de nécrose caséeuse.\n• B vrai : description histologique.\n• C faux : non spécifique (TB, mycoses…).\n• D vrai : diagnostic d’élimination.\n• E vrai : contrairement à la TB."
  },
  {
    id: 'q-pnm-10-10',
    courseId: 'crs-pneumo-10',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. La fibrose pulmonaire (type IV) :",
    options: [
      "A) Est fréquente dès le diagnostic.",
      "B) Se voit dans 5-8% des cas évolués.",
      "C) S’associe à un volume thoracique réduit à la radio.",
      "D) Est une contre-indication à la corticothérapie.",
      "E) Présente un aspect en rayon de miel au scanner."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\n• A faux : stade tardif.\n• B vrai : complication peu fréquente.\n• C vrai : signe de rétraction.\n• D faux : peut justifier un traitement selon le contexte.\n• E vrai : signe scanographique typique."
  },
  {
    id: 'q-pnm-10-11',
    courseId: 'crs-pneumo-10',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. L’anergie tuberculinique :",
    options: [
      "A) Est présente dans 80% des cas.",
      "B) Élimine le diagnostic de tuberculose.",
      "C) Témoigne d’une immunosuppression cellulaire relative.",
      "D) Est un critère diagnostique majeur.",
      "E) Est systématique dans le syndrome de Löfgren."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\n• A vrai : fréquente.\n• B faux : ne l’élimine pas (faible sensibilité).\n• C vrai : perturbation de l’immunité à médiation cellulaire.\n• D faux : argument d’orientation seulement.\n• E faux : fréquente mais non constante."
  },
  {
    id: 'q-pnm-10-12',
    courseId: 'crs-pneumo-10',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Le traitement par antipaludéen de synthèse (APS) :",
    options: [
      "A) Est le traitement de première intention des formes pulmonaires.",
      "B) Est efficace sur les atteintes cutanées.",
      "C) Expose à une toxicité oculaire (rétinopathie).",
      "D) Permet de traiter l’hypercalcémie associée.",
      "E) Agit rapidement en quelques jours."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\n• A faux : corticoïdes en première ligne pour les formes sévères.\n• B vrai : indication reconnue.\n• C vrai : surveillance ophtalmologique obligatoire.\n• D vrai : alternative aux corticoïdes.\n• E faux : effet retardé."
  },
  {
    id: 'q-pnm-10-13',
    courseId: 'crs-pneumo-10',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Concernant le pronostic :",
    options: [
      "A) Il est meilleur en cas de syndrome de Löfgren.",
      "B) La survenue chez un sujet âgé est de bon pronostic.",
      "C) Les formes avec atteinte parenchymateuse isolée (type III) ont toutes une évolution fibrosante.",
      "D) La présence d’une fibrose (type IV) engage le pronostic fonctionnel respiratoire.",
      "E) La grossesse aggrave toujours la maladie."
    ],
    correctAnswers: [0, 3],
    explanation: "Correction : A, D\n• A vrai : forme aiguë, bon pronostic.\n• B faux : sujet jeune = meilleur pronostic.\n• C faux : seulement 1/3 évoluent défavorablement.\n• D vrai : séquelles irréversibles.\n• E faux : amélioration possible pendant la grossesse."
  },
  {
    id: 'q-pnm-10-14',
    courseId: 'crs-pneumo-10',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. L’azathioprine dans la sarcoïdose :",
    options: [
      "A) Est un traitement d’induction en première intention.",
      "B) S’utilise comme épargne des corticoïdes.",
      "C) Nécessite une surveillance hématologique et hépatique.",
      "D) A une efficacité immédiate.",
      "E) Est contre-indiquée chez la femme en âge de procréer."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\n• A faux : utilisé en seconde ligne ou en association.\n• B vrai : rôle d’épargne cortisonique.\n• C vrai : risque de myélosuppression et hépatotoxicité.\n• D faux : effet retardé.\n• E faux : pas une CI absolue, mais précaution (discussion bénéfice/risque)."
  },
  {
    id: 'q-pnm-10-15',
    courseId: 'crs-pneumo-10',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Le diagnostic différentiel des ADP médiastinales bilatérales symétriques inclut :",
    options: [
      "A) La tuberculose primaire.",
      "B) Le lymphome hodgkinien.",
      "C) Les métastases ganglionnaires.",
      "D) La sarcoïdose.",
      "E) La silicose."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : A, B, C, D\n• A vrai : primo-infection.\n• B vrai : notamment localisation médiastinale.\n• C vrai : notamment cancers bronchiques, sein…\n• D vrai : diagnostic principal.\n• E faux : donne plutôt des ADP hilaires calcifiées, souvent asymétriques."
  },
  {
    id: 'q-pnm-10-16',
    courseId: 'crs-pneumo-10',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. L’EFR dans la sarcoïdose peut montrer :",
    options: [
      "A) Un syndrome restrictif (↓ CV, ↓ CPT).",
      "B) Une augmentation de la DLCO.",
      "C) Une hypoxémie à l’équilibre des GDS.",
      "D) Une normale dans les formes débutantes.",
      "E) Un trouble ventilatoire obstructif pur."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\n• A vrai : en cas d’atteinte interstitielle/fibrose.\n• B faux : la DLCO est abaissée.\n• C vrai : dans les formes avancées.\n• D vrai : notamment type I.\n• E faux : non caractéristique (sauf si comorbidité)."
  },
  {
    id: 'q-pnm-10-17',
    courseId: 'crs-pneumo-10',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. L’abstention thérapeutique est justifiée dans :",
    options: [
      "A) Une forme asymptomatique de type I.",
      "B) Un syndrome de Löfgren très symptomatique.",
      "C) Une atteinte cutanée isolée et peu gênante.",
      "D) Une uvéite antérieure sévère.",
      "E) Une hypercalcémie modérée asymptomatique."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\n• A vrai : surveillance simple.\n• B faux : peut nécessiter AINS/corticoïdes selon symptômes.\n• C vrai : selon tolérance.\n• D faux : indication à un traitement local ou général.\n• E faux : hypercalcémie nécessite traitement (risque rénal)."
  },
  {
    id: 'q-pnm-10-18',
    courseId: 'crs-pneumo-10',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. L’atteinte ophtalmologique peut se manifester par :",
    options: [
      "A) Une uvéite antérieure aiguë douloureuse.",
      "B) Une uvéite postérieure silencieuse.",
      "C) Une sécheresse oculaire.",
      "D) Un risque de cécité en l’absence de traitement.",
      "E) Une conjonctivite folliculaire spécifique."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : A, B, C, D\n• A vrai : fréquente.\n• B vrai : plus grave, peu symptomatique.\n• C vrai : atteinte lacrymale.\n• D vrai : complication redoutée.\n• E faux : non spécifique."
  },
  {
    id: 'q-pnm-10-19',
    courseId: 'crs-pneumo-10',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Le lupus pernio :",
    options: [
      "A) Est une lésion cutanée infiltrée violacée des régions acrales.",
      "B) Est de bon pronostic.",
      "C) Témoigne souvent d’une sarcoïdose chronique.",
      "D) Régresse toujours spontanément.",
      "E) Est spécifique de la sarcoïdose."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\n• A vrai : description classique (nez, joues, doigts).\n• B faux : associé à des formes sévères et chroniques.\n• C vrai : signe de chronicité.\n• D faux : souvent résistant, nécessite traitement.\n• E vrai : lésion très évocatrice."
  },
  {
    id: 'q-pnm-10-20',
    courseId: 'crs-pneumo-10',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. Le scanner thoracique dans la sarcoïdose :",
    options: [
      "A) Remplace systématiquement la radiographie standard.",
      "B) Met en évidence des ADP sous-carinaires non visibles à la radio.",
      "C) Montre des micronodules à prédominance périlymphatique (péribronchovasculaire, sous-pleuraux).",
      "D) Permet de mieux évaluer le stade de fibrose.",
      "E) Est nécessaire au diagnostic positif."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\n• A faux : la radio suffit souvent pour le suivi.\n• B vrai : meilleure sensibilité.\n• C vrai : distribution caractéristique.\n• D vrai : évaluation du stade IV.\n• E faux : le diagnostic est clinicopathologique."
  },
  {
    id: 'q-pnm-10-21',
    courseId: 'crs-pneumo-10',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. La corticothérapie au long cours nécessite :",
    options: [
      "A) Une supplémentation en potassium.",
      "B) Un régime riche en sel.",
      "C) Une surveillance de la glycémie et de la TA.",
      "D) Un traitement préventif de l’ostéoporose.",
      "E) L’arrêt brutal après un mois pour éviter les effets secondaires."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D\n• A vrai : risque d’hypokaliémie.\n• B faux : régime pauvre en sel.\n• C vrai : diabète et HTA cortico-induits.\n• D vrai : surtout si durée > 3 mois.\n• E faux : sevrage très progressif sur plusieurs mois."
  },
  {
    id: 'q-pnm-10-22',
    courseId: 'crs-pneumo-10',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Parmi ces localisations, lesquelles engagent le pronostic vital ou fonctionnel ?",
    options: [
      "A) Sarcoïdose cutanée nodulaire.",
      "B) Neurosarcoïdose symptomatique.",
      "C) Atteinte cardiaque (troubles de conduction).",
      "D) Atteinte parenchymateuse pulmonaire asymptomatique type II.",
      "E) Atteinte rénale avec hypercalcémie."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\n• A faux : pronostic fonctionnel cutané, pas vital.\n• B vrai : risque de déficit neurologique permanent.\n• C vrai : risque de mort subite.\n• D faux : pronostic souvent favorable.\n• E vrai : risque d’insuffisance rénale chronique."
  },
  {
    id: 'q-pnm-10-23',
    courseId: 'crs-pneumo-10',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Un facteur déclenchant présumé de la sarcoïdose est :",
    options: [
      "A) Une infection à Mycobactéries.",
      "B) Une exposition à des poussières organiques (moisissures).",
      "C) Un terrain génétique prédisposant.",
      "D) Une vaccination récente.",
      "E) Un stress psychologique aigu."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C\n• A vrai : hypothèse infectieuse (notamment tuberculose).\n• B vrai : hypothèse environnementale (antigènes).\n• C vrai : prédisposition génétique (formes familiales).\n• D faux : pas de lien démontré.\n• E faux : pas de lien établi."
  },
  {
    id: 'q-pnm-10-24',
    courseId: 'crs-pneumo-10',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La prise en charge d’une sarcoïdose stabilisée sous corticothérapie comprend :",
    options: [
      "A) Un arrêt brutal dès amélioration radiologique.",
      "B) Une décroissance très lente sur plusieurs mois.",
      "C) Une surveillance ophtalmologique annuelle.",
      "D) Un bilan lipidique régulier.",
      "E) L’arrêt de toute surveillance après arrêt du traitement."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\n• A faux : risque de rechute.\n• B vrai : sevrage progressif sur 6-24 mois.\n• C vrai : dépister cataracte, glaucome.\n• D vrai : dyslipidémie cortico-induite.\n• E faux : surveillance au long cours nécessaire (rechutes tardives)."
  },
  {
    id: 'q-pnm-10-25',
    courseId: 'crs-pneumo-10',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. L’élément suivant est en faveur du diagnostic de sarcoïdose :",
    options: [
      "A) Granulome épithélioïde avec nécrose caséeuse.",
      "B) Tableau de lymphome médiastinal.",
      "C) Faisceau d’arguments cliniques, radiologiques et histologiques compatibles après exclusion d’autres causes.",
      "D) Intradermoréaction à la tuberculine fortement positive.",
      "E) Hypercalcémie avec PTH élevée."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\n• A faux : évoque la TB.\n• B faux : diagnostic différentiel.\n• C vrai : définition du diagnostic.\n• D faux : anergie fréquente dans la sarcoïdose.\n• E faux : PTH normale ou basse dans l’hypercalcémie sarcoïdosique."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-10-c1-1',
    courseId: 'crs-pneumo-10',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Une femme de 32 ans, non fumeuse, consulte pour une toux sèche persistante, une asthénie et des arthralgies des chevilles depuis 1 mois. À l’examen : érythème noueux des membres inférieurs. Pas de râles à l’auscultation pulmonaire.\n\nQ1. Quelle est l’hypothèse diagnostique la plus probable ?",
    options: [
      "A) Polyarthrite rhumatoïde séronégative.",
      "B) Tuberculose pulmonaire.",
      "C) Syndrome de Löfgren.",
      "D) Lupus érythémateux systémique.",
      "E) Lymphome."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La triade arthralgies/érythème noueux/toux chez une jeune femme évoque fortement un syndrome de Löfgren, forme aiguë de sarcoïdose."
  },
  {
    id: 'q-pnm-10-c2-1',
    courseId: 'crs-pneumo-10',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Un homme de 50 ans, ouvrier du bâtiment, présente une dyspnée d’effort progressive. La radiographie thoracique montre des opacités réticulo-nodulaires bilatérales des régions supérieures et des images en rayon de miel. Pas d’ADP.\n\nQ2. Quel est le stade radiologique le plus probable ?",
    options: [
      "A) Type I.",
      "B) Type II.",
      "C) Type III.",
      "D) Type IV.",
      "E) Type 0."
    ],
    correctAnswers: [3],
    explanation: "Correction : D. L’aspect en rayon de miel et la rétraction évoquent une fibrose pulmonaire évoluée, caractéristique du stade IV."
  },
  {
    id: 'q-pnm-10-c3-1',
    courseId: 'crs-pneumo-10',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Une patiente sous corticothérapie pour sarcoïdose pulmonaire depuis 6 mois présente une polyurie, une polydipsie et des vomissements. Bilan : calcémie à 3,2 mmol/L, créatininémie normale.\n\nQ3. Quelle est la complication la plus probable ?",
    options: [
      "A) Diabète cortico-induit.",
      "B) Insuffisance surrénalienne.",
      "C) Hypercalcémie sarcoïdosique décompensée.",
      "D) Tuberculose miliaire.",
      "E) Aspergillome pulmonaire."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. L’hypercalcémie de la sarcoïdose peut être aggravée par les corticoïdes à dose insuffisante ou en début de traitement. Les symptômes digestifs et polyuro-polydipsie sont évocateurs."
  },
  {
    id: 'q-pnm-10-c4-1',
    courseId: 'crs-pneumo-10',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Un patient avec sarcoïdose connue se plaint de vision floue et de \"mouches volantes\". L’examen ophtalmologique retrouve des cellules dans le vitré.\n\nQ4. Quelle est l’atteinte ophtalmologique et son implication ?",
    options: [
      "A) Conjonctivite allergique, bénigne.",
      "B) Uvéite antérieure, urgente mais peu sévère.",
      "C) Uvéite postérieure, nécessitant un traitement urgent pour éviter la cécité.",
      "D) Cataracte cortico-induite, programme chirurgical.",
      "E) Glaucome aigu par fermeture de l’angle, urgence."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. Les \"mouches volantes\" et les cellules dans le vitré évoquent une uvéite intermédiaire ou postérieure, silencieuse mais grave (risque de cécité), nécessitant un traitement urgent."
  },
  {
    id: 'q-pnm-10-c5-1',
    courseId: 'crs-pneumo-10',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Une femme de 40 ans a une sarcoïdose cutanée (lupus pernio) et pulmonaire stable sous méthotrexate depuis 2 ans. Elle désire une grossesse.\n\nQ5. Quelle est la conduite à tenir avant la conception ?",
    options: [
      "A) Arrêter le méthotrexate 3 mois avant la conception (effet tératogène et gonadotoxique).",
      "B) Continuer le méthotrexate pendant le premier trimestre.",
      "C) Remplacer immédiatement par une corticothérapie à forte dose.",
      "D) La grossesse est formellement contre-indiquée.",
      "E) Aucune modification thérapeutique n’est nécessaire."
    ],
    correctAnswers: [0],
    explanation: "Correction : A. Le méthotrexate est tératogène et gonadotoxique. Il doit être arrêté au moins 3 mois avant une conception, sous couvert d’une autre thérapie si nécessaire (ex: corticoïdes à faible dose). Une consultation pré-conceptionnelle est indispensable."
  }
];

export const PNEUMO_LESSON_10_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-10-mindmap',
    courseId: 'crs-pneumo-10',
    type: 'Resume',
    title: 'MIND MAP : Sarcoïdose',
    contentMarkdown: `### SARCOÏDOSE

├── **ÉPIDÉMIOLOGIE**
│   └── Jeune adulte (25-45 ans), F>H, + grave/noirs, non-fumeur, 4% familial
│
├── **PHYSIOPATHOLOGIE**
│   └── Réponse immunitaire cellulaire exagérée → granulomes non caséeux
│       (Alvéolite lymphocytaire T CD4+, ↑CD4/CD8)
│
├── **CLINIQUE**
│   ├── Thoracique (90%) : asymptomatique, toux sèche, dyspnée tardive
│   ├── Syndrome de Löfgren (aigu) : Triade ADP hilaires + EN + arthralgies/fièvre
│   └── Extra-thoracique : Peau (lupus pernio, EN), Œil (uvéite), Foie, Rein (↑Ca), Cœur, SNC
│
├── **DIAGNOSTIC (Faisceau d'arguments + exclusion)**
│   ├── Imagerie : Radio thorax (Scadding I-IV), TDM (micronodules périlymphatiques)
│   ├── Biologie : ↑ECA (60%), ↑Ca, anergie tuberculinique (80%)
│   ├── LBA : ↑Ly T, CD4/CD8 > 3,5, recherche BK
│   └── Histologie : Granulome épithélioïde gigantocellulaire SANS nécrose caséeuse
│
├── **ÉVOLUTION / PRONOSTIC**
│   ├── Spontanée (80% type I) vs Chronique/fibrose (5-8%)
│   ├── Bon pronostic : Löfgren, jeune
│   └── Mauvais pronostic : Fibrose (IV), atteintes cardiaque/SNC
│
└── **TRAITEMENT**
    ├── Abstention si forme asymptomatique/minime (surveillance)
    ├── Corticoïdes (Référence) : Indications formes sévères, hypercalcémie, atteintes viscérales
    ├── 2ème ligne : Antipaludéens (cutané, ↑Ca), Immunosuppresseurs (MTX, Aza)
    └── Surveillance : Clinique, radio, EFR, calcémie/calciurie, ophtalmo`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Sarcoïdose', 'Granulome']
  },
  {
    id: 'res-pnm-10-astuces',
    courseId: 'crs-pneumo-10',
    type: 'Astuce',
    title: 'TRUCS & MNÉMOTECHNIQUES : Sarcoïdose',
    contentMarkdown: `### TRUCS & MNÉMOTECHNIQUES
1. **« Löfgren en L »** : Löfgren = **L**ésions cutanées (EN) + **L**ymphadénopathies + fièvre/arthralgies.
2. **Scadding Radio** :
   - **I** : Isolées (ADP seules)
   - **II** : Deux (ADP + parenchyme)
   - **III** : Trois (parenchyme Tout seul)
   - **IV** : Fibrose (Fin)
3. **Granulome Sarcoïde : « PAS de CAS »** = PAS de nécrose CASéeuse (vs Tuberculose).
4. **LBA Sarcoïdose : « CD4 en 4L »** = rapport CD4/CD8 augmenté (comme une 4x4, puissant).
5. **Hypercalcémie** : *« Soleil + Lait sous Corticoïdes = Ca++ »* : Éviter soleil (vit D) et produits laitiers sous traitement.
6. **Indications Corticoïdes : « UN CHOC »** (mnémotechnique algérien pour se souvenir des urgences) :
   - **U**véite postérieure / Neurologique
   - **N**euro (SNC)
   - **C**ardiaque
   - **H**ypercalcémie
   - **O**phtalmo (uvéite ant sévère)
   - **C**utané sévère (lupus pernio) / Rénale
7. **Pronostic** : *« Jeune Löfgren Léger »* = Bon pronostic.

---
*Allez, un dernier effort ! Maîtriser la sarcoïdose, c’est comprendre l’immuno, la radio et la clinique… et c’est exactement ce qui fera de vous un excellent interne puis médecin. Bon courage, le burn-out n’est pas au programme, seulement le succès !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Sarcoïdose']
  }
];

// Lesson 11: Insuffisance Respiratoire Chronique
export const PNEUMO_LESSON_11_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-11-01',
    courseId: 'crs-pneumo-11',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant la définition de l’insuffisance respiratoire chronique (IRC) :",
    options: [
      "A. Elle est définie par une PaO2 < 70 mmHg en air ambiant au repos à l’état stable.",
      "B. Une hypercapnie est obligatoire pour poser le diagnostic.",
      "C. Elle est toujours secondaire à une pathologie sous-jacente.",
      "D. L’hypoxémie chronique peut exister sans hypercapnie.",
      "E. Le seuil de 60 mmHg est utilisé chez le sujet âgé."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D sont vraies. L’IRC est définie par une PaO2 < 70 mmHg en air ambiant, au repos, à l’état stable, indépendamment de la PaCO2. Elle est toujours secondaire à une autre pathologie. L’hypercapnie n’est pas obligatoire."
  },
  {
    id: 'q-pnm-11-02',
    courseId: 'crs-pneumo-11',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Parmi ces mécanismes, lesquels peuvent entraîner une hypoxémie dans l’IRC ?",
    options: [
      "A. Hypoventilation alvéolaire.",
      "B. Augmentation de la diffusion alvéolo-capillaire.",
      "C. Effet shunt par inadéquation ventilation/perfusion.",
      "D. Shunt anatomique droit-gauche.",
      "E. Polyglobulie secondaire."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D sont vrais. L’hypoventilation alvéolaire, les anomalies VA/Q (effet shunt) et les shunts anatomiques (ex. FOP) sont des mécanismes d’hypoxémie. La polyglobulie est une conséquence, non un mécanisme."
  },
  {
    id: 'q-pnm-11-03',
    courseId: 'crs-pneumo-11',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Concernant l’hypoventilation alvéolaire dans l’IRC :",
    options: [
      "A. Elle entraîne toujours une hypercapnie.",
      "B. Elle peut être due à une atteinte neuromusculaire.",
      "C. Elle s’accompagne d’une hypoxémie proportionnelle à l’hypercapnie.",
      "D. Elle est fréquente dans les pneumopathies interstitielles.",
      "E. Elle répond bien à l’oxygénothérapie seule."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C sont vrais. L’hypoventilation se voit dans les atteintes neuromusculaires ou de la commande centrale. L’hypoxémie y est proportionnelle à l’hypercapnie (équation des gaz alvéolaires). Dans les pneumopathies interstitielles, le mécanisme prédominant est l’atteinte de la diffusion."
  },
  {
    id: 'q-pnm-11-04',
    courseId: 'crs-pneumo-11',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. La polyglobulie dans l’IRC :",
    options: [
      "A. Est une compensation à l’hypoxémie chronique.",
      "B. Est due à une augmentation de l’érythropoïétine rénale.",
      "C. Augmente le risque thrombotique.",
      "D. Contre-indique l’oxygénothérapie longue durée.",
      "E. Est définie par un hématocrite > 50%."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C sont vrais. La polyglobulie est une réponse adaptative mais délétère (hyperviscosité, thromboses). Elle n’est pas une contre-indication à l’OLD ; au contraire, elle peut en être une indication si l’hématocrite > 55%."
  },
  {
    id: 'q-pnm-11-05',
    courseId: 'crs-pneumo-11',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. L’hypertension pulmonaire (HTP) dans l’IRC :",
    options: [
      "A. Est toujours de type post-capillaire.",
      "B. Peut conduire à un cœur pulmonaire chronique.",
      "C. Est une indication à l’OLD si elle est documentée.",
      "D. Se voit uniquement dans les atteintes vasculaires primitives.",
      "E. Aggrave le pronostic."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E sont vrais. L’HTP dans l’IRC est pré-capillaire, secondaire à l’hypoxémie. Elle peut justifier l’OLD et aggrave le pronostic par surcharge du ventricule droit."
  },
  {
    id: 'q-pnm-11-06',
    courseId: 'crs-pneumo-11',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Concernant l’oxygénothérapie longue durée (OLD) dans l’IRC obstructive :",
    options: [
      "A. Elle est indiquée si PaO2 < 55 mmHg.",
      "B. Elle est indiquée si PaO2 entre 55-60 mmHg avec polyglobulie.",
      "C. Elle doit être administrée au moins 15h/j.",
      "D. Elle corrige l’hypercapnie.",
      "E. Elle améliore la survie."
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : A, B, C, E sont vrais. L’OLD est indiquée selon ces critères, administrée ≥15h/j, et a démontré un bénéfice sur la survie dans la BPCO. Elle ne corrige pas l’hypercapnie ; la VNI est indiquée pour cela."
  },
  {
    id: 'q-pnm-11-07',
    courseId: 'crs-pneumo-11',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Dans l’IRC restrictive, l’OLD est indiquée :",
    options: [
      "A. Si PaO2 < 60 mmHg.",
      "B. Si PaO2 < 70 mmHg avec dyspnée.",
      "C. Après deux mesures stables à 2 semaines d’intervalle.",
      "D. Même en l’absence d’hypercapnie.",
      "E. Uniquement en cas de désaturation nocturne."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : A, C, D sont vrais. Le seuil est PaO2 < 60 mmHg, après confirmation à l’état stable. L’hypercapnie n’est pas requise."
  },
  {
    id: 'q-pnm-11-08',
    courseId: 'crs-pneumo-11',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. La ventilation non invasive (VNI) dans l’IRC :",
    options: [
      "A. Est le traitement de choix de l’hypercapnie dans les atteintes de la pompe.",
      "B. Peut être utilisée dans les exacerbations aiguës sur IRC.",
      "C. Contre-indiquée en cas de troubles de la conscience.",
      "D. Permet de corriger l’hypoxémie en première intention.",
      "E. Remplace toujours l’OLD."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C sont vrais. La VNI corrige l’hypercapnie (pompe ventilatoire), est utilisée en aigu, mais est contre-indiquée si troubles de conscience sévères. Elle ne remplace pas l’OLD qui traite l’hypoxémie."
  },
  {
    id: 'q-pnm-11-09',
    courseId: 'crs-pneumo-11',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Concernant les gaz du sang dans l’IRC :",
    options: [
      "A. Une acidose respiratoire compensée montre une PaCO2 élevée avec pH normal et bicarbonates élevés.",
      "B. Une hypercapnie précoce oriente vers une atteinte de la pompe ventilatoire.",
      "C. Une normocapnie élimine le diagnostic d’IRC.",
      "D. Les gaz du sang doivent être interprétés à l’état stable.",
      "E. Une alcalose métabolique est fréquente."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D sont vrais. La compensation rénale de l’acidose respiratoire chronique entraîne une élévation des bicarbonates. Une hypercapnie précoce est typique des atteintes de la pompe. L’IRC peut être normocapnique."
  },
  {
    id: 'q-pnm-11-10',
    courseId: 'crs-pneumo-11',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. L’atteinte de la diffusion alvéolo-capillaire se voit dans :",
    options: [
      "A. L’emphysème.",
      "B. Les pneumopathies interstitielles diffuses.",
      "C. La BPCO stable.",
      "D. L’hypertension artérielle pulmonaire primitive.",
      "E. La mucoviscidose."
    ],
    correctAnswers: [0, 1],
    explanation: "Correction : A, B sont vrais. L’emphysème (destruction des septa) et les PID (épaississement membranaire) altèrent la diffusion. La BPCO stable relève surtout d’anomalies VA/Q."
  },
  {
    id: 'q-pnm-11-11',
    courseId: 'crs-pneumo-11',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Concernant l’insuffisance respiratoire chronique restrictive :",
    options: [
      "A. Le volume résiduel est augmenté.",
      "B. La capacité pulmonaire totale est diminuée.",
      "C. Elle peut être due à une cyphoscoliose.",
      "D. L’hypercapnie est rare et tardive.",
      "E. La spirométrie montre un rapport VEMS/CV normal ou augmenté."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E sont vraies. Dans le trouble restrictif, la CPT est diminuée, le rapport VEMS/CV est normal ou élevé. La cyphoscoliose est une cause fréquente. L’hypercapnie peut être précoce dans les atteintes de la pompe."
  },
  {
    id: 'q-pnm-11-12',
    courseId: 'crs-pneumo-11',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. L’hypoxémie par effet shunt (inadéquation VA/Q) :",
    options: [
      "A. S’améliore peu avec l’oxygénothérapie à haut débit.",
      "B. Est typique des atélectasies complètes.",
      "C. S’accompagne initialement d’une hypocapnie.",
      "D. Est le mécanisme principal de la BPCO stable.",
      "E. Correspond à des unités ventilées mais non perfusées."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : C, D sont vraies. Dans l’effet shunt (VA/Q bas), il y a hypocapnie initiale car les zones bien ventilées hyperventilent. C’est le mécanisme principal de la BPCO. L’oxygénothérapie améliore bien ce type d’hypoxémie. Les atélectasies complètes relèvent d’un shunt vrai."
  },
  {
    id: 'q-pnm-11-13',
    courseId: 'crs-pneumo-11',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Le shunt vrai anatomique :",
    options: [
      "A. N’est pas corrigé par l’oxygénothérapie à 100%.",
      "B. Inclut le foramen ovale perméable.",
      "C. Entraîne toujours une hypercapnie.",
      "D. Peut être fonctionnel dans une pneumonie.",
      "E. Se voit dans les malformations artério-veineuses pulmonaires."
    ],
    correctAnswers: [0, 1, 4],
    explanation: "Correction : A, B, E sont vraies. Le shunt vrai (anatomique ou fonctionnel complet) ne répond pas à l’O2 à 100%. Le FOP et les MAV pulmonaires sont des shunts anatomiques. La pneumonie cause un shunt vrai fonctionnel. L’hypercapnie n’est pas systématique."
  },
  {
    id: 'q-pnm-11-14',
    courseId: 'crs-pneumo-11',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. L’hypertension pulmonaire dans l’IRC :",
    options: [
      "A. Est définie par une PAPm ≥ 25 mmHg au repos.",
      "B. Est toujours symptomatique.",
      "C. Peut être objectivée par l’échocardiographie.",
      "D. Contre-indique la réhabilitation respiratoire.",
      "E. Aggrave la dyspnée et le pronostic."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : A, C, E sont vraies. La définition est hémodynamique (PAPm ≥25 mmHg). L’échocardiographie permet une estimation (PAPS). Elle aggrave les symptômes et le pronostic. La réhabilitation respiratoire n’est pas contre-indiquée, mais adaptée."
  },
  {
    id: 'q-pnm-11-15',
    courseId: 'crs-pneumo-11',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Le cœur pulmonaire chronique :",
    options: [
      "A. Est une dilatation et hypertrophie du ventricule droit.",
      "B. Se manifeste par des signes d’insuffisance cardiaque droite.",
      "C. Est toujours secondaire à une hypertension pulmonaire.",
      "D. Peut régresser sous oxygénothérapie longue durée.",
      "E. Se voit exclusivement dans la BPCO."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : A, B, C, D sont vraies. Le CPC est la conséquence d’une HTP chronique, avec surcharge du VD. Il peut partiellement régresser sous OLD si l’HTP est hypoxique. Il peut se voir dans d’autres causes d’HTP chronique."
  },
  {
    id: 'q-pnm-11-16',
    courseId: 'crs-pneumo-11',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Dans l’IRC, la polyglobulie :",
    options: [
      "A. Est un facteur indépendant de risque cardiovasculaire.",
      "B. Justifie une saignée si l’hématocrite > 55%.",
      "C. Aggrave les céphalées et les acouphènes.",
      "D. Est toujours associée à une hyperuricémie.",
      "E. Diminue la capacité de transport de l’oxygène."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C sont vraies. La polyglobulie augmente la viscosité sanguine et le risque thrombotique. La saignée est indiquée si Ht >55% avec symptômes. Elle n’est pas toujours associée à une hyperuricémie. Elle augmente (théoriquement) la capacité de transport, mais l’hyperviscosité altère la microcirculation."
  },
  {
    id: 'q-pnm-11-17',
    courseId: 'crs-pneumo-11',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Concernant l’acidose respiratoire chronique compensée :",
    options: [
      "A. Le pH est normal ou subnormal.",
      "B. Les bicarbonates plasmatiques sont > 26 mmol/L.",
      "C. La compensation est principalement rénale.",
      "D. Une aggravation aiguë entraîne une acidose mixte.",
      "E. Elle est typique des exacerbations de BPCO."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C sont vraies. La compensation rénale (rétention de HCO3-) ramène le pH vers la normale. Une aggravation aiguë entraîne une acidose respiratoire aiguë surajoutée. L’acidose chronique compensée est un état stable, pas une exacerbation."
  },
  {
    id: 'q-pnm-11-18',
    courseId: 'crs-pneumo-11',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Le diagnostic étiologique de l’IRC fait systématiquement appel à :",
    options: [
      "A. La gazométrie artérielle.",
      "B. La spirométrie avec courbe débit-volume.",
      "C. La radiographie thoracique.",
      "D. Le scanner thoracique haute résolution.",
      "E. L’échocardiographie Doppler."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C sont vraies. La GDS et la spirométrie sont indispensables. La radiographie thoracique est fondamentale en première intention. Le scanner et l’échocardiographie sont des examens de 2ème intention, prescrits selon le contexte."
  },
  {
    id: 'q-pnm-11-19',
    courseId: 'crs-pneumo-11',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. L’épreuve de marche de 6 minutes dans l’IRC :",
    options: [
      "A. Évalue la tolérance à l’effort.",
      "B. Mesure la désaturation à l’effort.",
      "C. A une valeur pronostique.",
      "D. Est contre-indiquée en cas d’HTAP sévère.",
      "E. Remplace l’épreuve d’effort cardio-respiratoire."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C sont vraies. Le TM6 est un test simple d’évaluation fonctionnelle et pronostique. Il n’est pas contre-indiqué en cas d’HTAP, mais réalisé sous surveillance. Il ne remplace pas l’ergospirométrie, plus complète."
  },
  {
    id: 'q-pnm-11-20',
    courseId: 'crs-pneumo-11',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. La transplantation pulmonaire dans l’IRC :",
    options: [
      "A. Est réservée aux patients < 65 ans généralement.",
      "B. Peut être envisagée dans la fibrose pulmonaire évoluée.",
      "C. Contre-indique définitivement la grossesse.",
      "D. Nécessite un sevrage tabagique depuis > 6 mois.",
      "E. A une survie médiane greffon d’environ 5-7 ans."
    ],
    correctAnswers: [0, 1, 3, 4],
    explanation: "Correction : A, B, D, E sont vraies. Les critères de sélection sont stricts (âge, comorbidités, sevrage tabagique). C’est une option dans les stades terminaux de certaines pathologies. La grossesse après transplantation est possible mais à haut risque et nécessite une prise en charge spécialisée."
  },
  {
    id: 'q-pnm-11-21',
    courseId: 'crs-pneumo-11',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Parmi ces pathologies, lesquelles peuvent causer une IRC par atteinte de la pompe ventilatoire ?",
    options: [
      "A. Sclérose latérale amyotrophique (SLA).",
      "B. Syndrome d’obésité-hypoventilation.",
      "C. Bronchiolite oblitérante.",
      "D. Séquelles de tuberculose pleurale.",
      "E. Myasthénie grave."
    ],
    correctAnswers: [0, 1, 4],
    explanation: "Correction : A, B, E sont vraies. La SLA, le syndrome obésité-hypoventilation et la myasthénie sont des causes neuromusculaires ou de la commande ventilatoire. La bronchiolite est une atteinte de l’échangeur. Les séquelles pleurales restrictives pures sont plus rares."
  },
  {
    id: 'q-pnm-11-22',
    courseId: 'crs-pneumo-11',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Les signes physiques en faveur d’une insuffisance ventriculaire droite dans l’IRC sont :",
    options: [
      "A. Turgescence jugulaire.",
      "B. Œdèmes des membres inférieurs.",
      "C. Reflux hépato-jugulaire.",
      "D. Galop droit (B3).",
      "E. Souffle d’insuffisance tricuspide."
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    explanation: "Correction : A, B, C, D, E sont vrais. Tous sont des signes d’insuffisance cardiaque droite, complication du cœur pulmonaire chronique."
  },
  {
    id: 'q-pnm-11-23',
    courseId: 'crs-pneumo-11',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Concernant l’hypercapnie dans l’IRC :",
    options: [
      "A. Elle est bien tolérée si chronique et compensée.",
      "B. Elle peut entraîner des céphalées matinales.",
      "C. Elle stimule la ventilation en situation stable.",
      "D. Sa correction brutale peut entraîner une alcalose métabolique.",
      "E. Elle est une indication à la VNI en première intention dans les atteintes de la pompe."
    ],
    correctAnswers: [0, 1, 3, 4],
    explanation: "Correction : A, B, D, E sont vraies. L’hypercapnie chronique compensée est bien tolérée. Les céphalées sont un signe fréquent. Le stimulus ventilatoire principal devient l’hypoxémie. Une correction trop rapide (sous VNI) peut causer une alcalose. La VNI est le traitement de référence de l’hypercapnie dans les atteintes de la pompe."
  },
  {
    id: 'q-pnm-11-24',
    courseId: 'crs-pneumo-11',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La réhabilitation respiratoire dans l’IRC :",
    options: [
      "A. Améliore la qualité de vie et la tolérance à l’effort.",
      "B. Inclut un réentraînement à l’effort et l’éducation thérapeutique.",
      "C. Est contre-indiquée en cas d’HTAP sévère.",
      "D. Doit être poursuivie à domicile pour un effet durable.",
      "E. S’adresse uniquement aux patients BPCO."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : A, B, D sont vraies. La réhabilitation est un pilier du traitement, multimodal. Elle n’est pas contre-indiquée en cas d’HTAP mais adaptée. Elle bénéficie à de nombreuses pathologies respiratoires chroniques (restrictives, etc.)."
  },
  {
    id: 'q-pnm-11-25',
    courseId: 'crs-pneumo-11',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Un élément pronostique péjoratif dans l’IRC est :",
    options: [
      "A. La présence d’une hypercapnie chronique.",
      "B. Une désaturation importante à l’effort.",
      "C. Un index de masse corporelle (IMC) bas.",
      "D. Une distance au TM6 < 350 m.",
      "E. L’âge jeune du patient."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : A, B, C, D sont vrais. L’hypercapnie, la mauvaise tolérance à l’effort, la dénutrition (IMC bas) et une faible distance au TM6 sont des marqueurs de gravité et de mauvais pronostic. L’âge jeune est plutôt un facteur protecteur."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-11-c1-1',
    courseId: 'crs-pneumo-11',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Un homme de 65 ans, fumeur (40 PA), consulte pour dyspnée d’aggravation progressive, toux productive matinale. À l’examen : distension thoracique, murmure vésiculaire diminué. Gaz du sang en air ambiant : pH 7,38, PaO2 58 mmHg, PaCO2 52 mmHg, HCO3- 30 mmol/L.\n\nQ1. Le diagnostic le plus probable est :",
    options: [
      "A. Asthme sévère.",
      "B. BPCO avec IRC.",
      "C. Fibrose pulmonaire.",
      "D. Embolie pulmonaire chronique.",
      "E. Insuffisance cardiaque gauche."
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Le tableau clinique (tabagisme, distension) et les gaz du sang (hypoxémie + hypercapnie avec compensation métabolique) sont typiques d’une BPCO compliquée d’IRC."
  },
  {
    id: 'q-pnm-11-c2-1',
    courseId: 'crs-pneumo-11',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Une femme de 50 ans, non fumeuse, présente une dyspnée progressive et des râles crépitants aux bases. Hippocratisme digital. Gaz du sang : pH 7,40, PaO2 65 mmHg, PaCO2 38 mmHg. Radiographie thoracique : opacités réticulonodulaires bilatérales.\n\nQ1. Le mécanisme principal de l’hypoxémie est probablement :",
    options: [
      "A. Hypoventilation alvéolaire.",
      "B. Effet shunt.",
      "C. Atteinte de la diffusion.",
      "D. Shunt anatomique.",
      "E. Trouble obstructif."
    ],
    correctAnswers: [2],
    explanation: "Correction : C. La clinique et l’imagerie évoquent une pneumopathie interstitielle diffuse, où l’hypoxémie est principalement due à une altération de la diffusion."
  },
  {
    id: 'q-pnm-11-c3-1',
    courseId: 'crs-pneumo-11',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Un homme de 28 ans consulte pour des épisodes répétés de dyspnée, de palpitations et une syncope à l'effort. À l'auscultation, un souffle continu est perçu au niveau du champ pulmonaire droit. La saturation pulsée en air ambiant est à 92%. La radiographie thoracique montre une opacité ronde lobaire inférieure droite avec un vaisseau afférent et efférent visible.\n\nQ1. Le mécanisme le plus probable de l’hypoxémie chez ce patient est :",
    options: [
      "A. Une hypoventilation alvéolaire généralisée.",
      "B. Un shunt anatomique droit-gauche intra-pulmonaire.",
      "C. Une anomalie sévère de la diffusion.",
      "D. Un effet shunt par bronchospasme.",
      "E. Une hypertension pulmonaire post-capillaire."
    ],
    correctAnswers: [1],
    explanation: "Correction : B. Le tableau clinique et radiologique (opacité ronde avec pédicule vasculaire) est très évocateur d'une malformation artério-veineuse pulmonaire, cause classique de shunt vrai anatomique, expliquant l'hypoxémie peu sensible à l'O2."
  },
  {
    id: 'q-pnm-11-c4-1',
    courseId: 'crs-pneumo-11',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Une femme de 70 ans, ancienne fumeuse, est suivie pour une BPCO GOLD 3. Elle est adressée pour aggravation de sa dyspnée et apparition d'œdèmes des membres inférieurs. À l'examen : turgescence jugulaire, reflux hépato-jugulaire (+), œdèmes bilatéraux pré-tibiaux. Gaz du sang sous 2 L/min d'O2 : pH 7,36, PaO2 62 mmHg, PaCO2 56 mmHg.\n\nQ1. La complication la plus probable est :",
    options: [
      "A. Une exacerbation infectieuse bronchique.",
      "B. Une embolie pulmonaire aiguë.",
      "C. Un cœur pulmonaire chronique décompensé.",
      "D. Une pneumonie franche lobaire aiguë.",
      "E. Un pneumothorax."
    ],
    correctAnswers: [2],
    explanation: "Correction Cas 4 - Q1 : C. Les signes cliniques (œdèmes, turgescence jugulaire) chez un patient BPCO avec IRC hypercapnique sont typiques d'une décompensation d'un cœur pulmonaire chronique."
  },
  {
    id: 'q-pnm-11-c4-2',
    courseId: 'crs-pneumo-11',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 (suite) : Quelle est la mesure thérapeutique la plus urgente à initier, en plus de l'optimisation de l'OLD ?",
    options: [
      "A. Mise sous antibiotiques à large spectre.",
      "B. Initiation d'une diurétique de l'anse.",
      "C. Mise sous corticothérapie orale.",
      "D. Ajout d'un β2-mimétique longue action.",
      "E. Ponction pleurale exploratrice."
    ],
    correctAnswers: [1],
    explanation: "Correction Cas 4 - Q2 : B. Le traitement de la surcharge volémique par un diurétique de l'anse (ex: furosémide) est une priorité pour soulager l'insuffisance cardiaque droite. L'optimisation de la VNI peut aussi être nécessaire."
  },
  {
    id: 'q-pnm-11-c5-1',
    courseId: 'crs-pneumo-11',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Un homme de 55 ans, menuisier, présente une dyspnée d'installation progressive depuis 2 ans, sans toux productive. Il rapporte des arthralgies. À l'examen : râles crépitants fins inspiratoires bilatéraux aux bases, hippocratisme digital. La spirométrie montre un syndrome restrictif sévère (CV à 50% de la théorique). La TDM thoracique en haute résolution révèle un verre dépoli périphérique et des micromodules sous-pleuraux avec distorsion architecturale.\n\nQ1. L'étiologie la plus probable de cette IRC restrictive est :",
    options: [
      "A. Une bronchopneumopathie chronique obstructive.",
      "B. Une pneumopathie interstitielle diffuse (comme une fibrose pulmonaire idiopathique).",
      "C. Une séquelle de tuberculose extensive.",
      "D. Une sarcoïdose stade IV.",
      "E. Une histiocytose langerhansienne."
    ],
    correctAnswers: [1],
    explanation: "Correction Cas 5 - Q1 : B. Le tableau clinique (crépitants basaux, hippocratisme), fonctionnel (restrictif) et scanographique (verre dépoli, distorsion, aspect en \"rayon de miel\" évoqué) est très suggestif d'une pneumopathie interstitielle diffuse, type fibrose pulmonaire idiopathique, surtout chez un patient avec exposition professionnelle (menuiserie : risque de fibrose)."
  },
  {
    id: 'q-pnm-11-c5-2',
    courseId: 'crs-pneumo-11',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 (suite) : Quel examen complémentaire est le plus approprié pour confirmer le diagnostic ?",
    options: [
      "A. Lavage broncho-alvéolaire.",
      "B. Biopsie pulmonaire chirurgicale.",
      "C. Angio-scanner pulmonaire.",
      "D. Dosage des anticorps anti-myéloperoxydase (ANCA).",
      "E. Épreuve de réversibilité aux bronchodilatateurs."
    ],
    correctAnswers: [1],
    explanation: "Correction Cas 5 - Q2 : B. En cas de suspicion de PID, notamment pour un diagnostic de certitude de fibrose pulmonaire idiopathique et pour éliminer d'autres causes, la biopsie pulmonaire chirurgicale (ou par thoracoscopie) est l'examen de référence, bien que le diagnostic puisse parfois être posé sur la TDM seule dans un contexte typique."
  }
];

export const PNEUMO_LESSON_11_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-11-mindmap',
    courseId: 'crs-pneumo-11',
    type: 'Resume',
    title: 'Carte Mentale : Insuffisance Respiratoire Chronique',
    contentMarkdown: `### INSUFFISANCE RESPIRATOIRE CHRONIQUE

├── **DÉFINITION** : PaO2 < 70 mmHg (air ambiant, repos, stable)
│
├── **MÉCANISMES d'HYPOXÉMIE**
│   ├── Anomalies VA/Q (effet shunt) → BPCO, asthme
│   ├── Hypoventilation alvéolaire → atteintes neuromusculaires, obésité
│   └── Altération de la diffusion → PID, emphysème
│
├── **MÉCANISME d'HYPERCAPNIE** : Hypoventilation alvéolaire
│
├── **CONSÉQUENCES**
│   ├── Hypoxémie → Polyglobulie, HTP, Cœur pulmonaire chronique
│   └── Hypercapnie chronique → Acidose respiratoire compensée
│
├── **ÉTIOLOGIES**
│   ├── Atteinte de l'échangeur (BPCO, PID) → TVO/TVR
│   ├── Atteinte de la pompe/commande (neuro-musculaire, obésité) → TVR
│   └── Atteinte vasculaire (HTP)
│
├── **DIAGNOSTIC**
│   ├── Clinique : Dyspnée (+ signes de la maladie causale)
│   ├── Gaz du sang : Clé du diagnostic positif et du type (compensé/non)
│   ├── Explorations : EFR (TVO/TVR), imagerie, échocardio, TM6
│   └── Orientation étiologique : Spirométrie + imagerie
│
└── **TRAITEMENT**
    ├── Traitement étiologique + Sevrage tabagique
    ├── Réhabilitation respiratoire
    ├── OLD : Indications strictes (PaO2 <55 ou 55-60 avec critères)
    ├── VNI : Si hypercapnie (atteinte de la pompe)
    └── Chirurgie : Transplantation (cas sélectionnés)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'IRC', 'Gazométrie', 'Physiopathologie']
  },
  {
    id: 'res-pnm-11-astuces',
    courseId: 'crs-pneumo-11',
    type: 'Astuce',
    title: 'Astuces et Mnémotechniques : IRC',
    contentMarkdown: `### Astuces et Mnémotechniques
1. **Seuil OLD : "55-60, il faut voir les signes"** → PaO2 < 55 mmHg toujours, ou entre 55-60 mmHg avec signes d'hypoxie tissulaire (Polyglobulie, HTP, Œdèmes, Désaturation nocturne).
2. **Orientation par les Gaz du Sang** :
   - Hypercapnie précoce → **P**ompe ventilatoire (**P** pour Précoce et Pompe).
   - Hypercapnie tardive → **É**changeur (**É** pour tardif et Échangeur).
   - Jamais d'hypercapnie → **V**aisseaux (**V**asculaire).
3. **Causes de l'IRC restrictive (Trouble Ventilatoire Restrictif - TVR) : "PINS"** :
   - **P**ompe (neuro-musculaire)
   - **I**nterstitiel (PID)
   - **N**o parenchyme (résections)
   - **S**quelette (cyphoscoliose, obésité)
4. **Indications de l'OLD dans la BPCO : "P.H.O.D.E"** :
   - **P**olyglobulie (Ht >55%)
   - **H**TP
   - **O**Edèmes (IC droite)
   - **D**ésaturation nocturne
   - **E**ffort (désaturation à l'effort). En plus du critère de PaO2.
5. **Conséquences de l'hypoxémie chronique : "P.H.C"** → **P**olyglobulie, **H**TP, **C**œur pulmonaire chronique.

---
*Allez, un dernier effort ! Maîtrisez ces mécanismes, ces seuils et ces orientations cliniques, et vous serez prêt à affronter aussi bien l'examen que les salles des urgences. Le souffle de la connaissance est le plus précieux pour un futur médecin !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'IRC', 'OLD']
  }
];
