import { Question, CourseResource } from '../../types/medical';

// Lesson 4: CAT : Dyspnée, Douleur Thoracique & Hémoptysie
export const PNEUMO_LESSON_4_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-4-01',
    courseId: 'crs-pneumo-4',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant la dyspnée :",
    options: [
      "a) C'est toujours le signe d'une pathologie organique grave.",
      "b) Elle a une composante subjective (gêne du patient) et une composante objective (anomalie ventilatoire observée).",
      "c) La dyspnée de Cheyne-Stokes est spécifique de l'insuffisance cardiaque.",
      "d) Une dyspnée survenant uniquement à l'effort intense chez un sujet sain est toujours pathologique.",
      "e) Le \"tirage\" est un signe objectif d'obstruction des voies aériennes supérieures."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : b, e. La dyspnée est définie par ses deux composantes, subjective et objective (b). Le tirage (creusement inspiratoire des parties molles) signe une gêne inspiratoire, souvent par obstruction haute (e). Une dyspnée à l'effort intense peut être physiologique (d faux). La dyspnée de Cheyne-Stokes s'observe dans l'insuffisance cardiaque mais aussi dans d'autres atteintes (neurologiques) (c faux). Elle n'est pas toujours liée à une pathologie organique (a faux)."
  },
  {
    id: 'q-pnm-4-02',
    courseId: 'crs-pneumo-4',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Dans la dyspnée de l'insuffisance cardiaque gauche :",
    options: [
      "a) La classification NYHA permet de quantifier la gêne fonctionnelle.",
      "b) La dyspnée de repos oblige souvent le patient à dormir en position semi-assise (orthopnée).",
      "c) L'œdème aigu du poumon (OAP) s'accompagne typiquement de râles crépitants fins en \"marée montante\" à l'auscultation.",
      "d) La crise d'OAP est toujours annoncée par des signes digestifs.",
      "e) Un équivalent peut être une toux sèche nocturne avec bradypnée."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c. La classification NYHA est la référence (a). L'orthopnée est caractéristique (b). Les râles crépitants fins partant des bases sont typiques de l'OAP (c). L'OAP survient brutalement, souvent sans signes annonciateurs digestifs (d faux). Un équivalent mineur peut être une toux avec polypnée (essoufflement rapide) mais pas une bradypnée (ralentissement du rythme) qui est plutôt expiratoire et sifflante, évoquant un asthme cardiaque (e faux)."
  },
  {
    id: 'q-pnm-4-03',
    courseId: 'crs-pneumo-4',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Une dyspnée paroxystique nocturne, avec sifflements expiratoires et râles sibilants diffus, sans râles crépitants, chez un sujet âgé hypertendu, évoque prioritairement :",
    options: [
      "a) Une crise d'asthme allergique.",
      "b) Une poussée d'insuffisance ventriculaire gauche (asthme cardiaque).",
      "c) Une exacerbation de BPCO.",
      "d) Une embolie pulmonaire.",
      "e) Un pneumothorax."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. Le contexte (sujet âgé, hypertendu), la symptomatologie paroxystique nocturne avec bradypnée expiratoire sifflante sont très évocateurs d'un \"asthme cardiaque\", équivalent de l'OAP (b). L'asthme allergique est plutôt associé à un terrain atopique (a). La BPCO donne une dyspnée plus permanente (c). L'embolie pulmonaire associe douleur et dyspnée brutale (d). Le pneumothorax donne une douleur hémi-thoracique brutale (e)."
  },
  {
    id: 'q-pnm-4-04',
    courseId: 'crs-pneumo-4',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. Concernant l'embolie pulmonaire (EP) :",
    options: [
      "a) Une dyspnée aiguë isolée est un tableau rare.",
      "b) La triade classique \"dyspnée-douleur-hémoptysie\" est présente dans la majorité des cas.",
      "c) La présence d'une phlébite du membre inférieur est un argument majeur.",
      "d) La gazométrie artérielle montre typiquement une hypoxémie avec hypocapnie.",
      "e) Un ECG normal élimine le diagnostic."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : c, d. Une thrombose veineuse profonde est un facteur de risque et d'orientation majeur (c). L'hypoxémie avec hypocapnie (alcalose respiratoire) par hyperventilation est typique (d). Une dyspnée aiguë isolée est un tableau fréquent et trompeur (a faux). La triade classique est rare (b faux). Un ECG peut être normal dans l'EP, son rôle est de rechercher d'autres diagnostics et parfois des signes orientateurs (onde S1Q3T3...) (e faux)."
  },
  {
    id: 'q-pnm-4-05',
    courseId: 'crs-pneumo-4',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Dans la dyspnée de la BPCO :",
    options: [
      "a) Elle est améliorée par la position assise.",
      "b) L'expectoration peut la soulager.",
      "c) Elle est souvent associée à une hypercapnie chronique.",
      "d) La présence d'un emphysème se traduit à l'inspection par un thorax en \"tonneau\".",
      "e) La survenue d'une hypercapnie aiguë sur BPCO est toujours liée à une rétention de CO2 par hypoventilation."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : b, c, d. L'expectoration désobstrue les bronches (b). L'hypercapnie chronique est fréquente dans les formes sévères (c). Le thorax distendu, peu mobile, en \"tonneau\" est classique de l'emphysème (d). La dyspnée du BPCO n'est pas améliorée par la position assise (contrairement à l'orthopnée cardiaque) (a faux). Une hypercapnie aiguë peut survenir par aggravation de l'hypoxie (pneumopathie, OAP) entraînant une hyperventilation qui peut paradoxalement diminuer l'hypercapnie chronique (e faux)."
  },
  {
    id: 'q-pnm-4-06',
    courseId: 'crs-pneumo-4',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Une douleur thoracique rétro-sternale en barre, constrictive, irradiant vers la mâchoire et le bras gauche, calmée par la trinitrine en moins de 5 minutes, évoque :",
    options: [
      "a) Un angor stable.",
      "b) Un infarctus du myocarde (IDM).",
      "c) Une péricardite aiguë.",
      "d) Un reflux gastro-œsophagien (RGO).",
      "e) Une dissection aortique."
    ],
    correctAnswers: [0],
    explanation: "Correction : a. La douleur typiquement angineuse, calmée rapidement par la trinitrine et de courte durée, est caractéristique de l'angor stable (a). L'IDM est prolongé et trinitro-résistant (b faux). La péricardite est augmentée à l'inspiration (c faux). Le RGO est plutôt une brûlure rétrosternale ascendante (d faux). La dissection est une douleur déchirante, migratrice (e faux)."
  },
  {
    id: 'q-pnm-4-07',
    courseId: 'crs-pneumo-4',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Une douleur thoracique basithoracique droite, à type de point de côté, augmentée à l'inspiration profonde et à la toux, avec dyspnée brutale, évoque en premier :",
    options: [
      "a) Une pleurésie.",
      "b) Un pneumothorax.",
      "c) Une pneumopathie.",
      "d) Une embolie pulmonaire.",
      "e) Une névralgie intercostale."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. La douleur pleurale brutale avec dyspnée est le tableau typique du pneumothorax spontané (b). La pleurésie et la pneumopathie ont souvent un contexte infectieux (a, c). L'embolie pulmonaire est possible mais la douleur est souvent angoissante, avec sensation de charge (d). La névralgie est indépendante de la respiration (e)."
  },
  {
    id: 'q-pnm-4-08',
    courseId: 'crs-pneumo-4',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Pour le diagnostic de syndrome coronarien aigu (SCA) :",
    options: [
      "a) Un ECG strictement normal entre les douleurs élimine le diagnostic.",
      "b) La troponine est le marqueur biologique de choix.",
      "c) La radiographie thoracique est systématiquement anormale.",
      "d) La douleur peut être atypique, notamment chez la femme diabétique.",
      "e) La présence d'un sus-décalage du segment ST (ST+) impose une revascularisation en urgence."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : b, d, e. La troponine est le marqueur spécifique de nécrose (b). Les tableaux atypiques (femme, diabétique, sujet âgé) sont fréquents (d). Un sus-décalage de ST (STEMI) est une urgence de revascularisation (e). Un ECG inter-critique peut être normal, surtout dans l'angor instable (a faux). La radiographie thoracique est le plus souvent normale dans le SCA (c faux)."
  },
  {
    id: 'q-pnm-4-09',
    courseId: 'crs-pneumo-4',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Concernant la dissection aortique :",
    options: [
      "a) L'hypertension artérielle est le principal facteur favorisant.",
      "b) La douleur est typiquement constrictive et fixe.",
      "c) Une asymétrie tensionnelle ou une abolition de pouls est un signe capital.",
      "d) L'ECG est souvent anormal, montrant un infarctus.",
      "e) L'élargissement du médiastin sur la radiographie thoracique est un signe d'alerte."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : a, c, e. L'HTA est le principal facteur de risque (a). L'asymétrie tensionnelle/pouls est un signe clinique évocateur (c). L'élargissement médiastinal est un signe radiologique important (e). La douleur est typiquement déchirante, migratrice (b faux). L'ECG est souvent normal ou montrant une HTA, sauf si l'ostium coronaire est touché (d faux)."
  },
  {
    id: 'q-pnm-4-10',
    courseId: 'crs-pneumo-4',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Dans la péricardite aiguë :",
    options: [
      "a) La douleur est calmée par l'antéflexion du buste.",
      "b) Le frottement péricardique est constant et permanent à l'auscultation.",
      "c) L'ECG peut montrer un sus-décalage du segment ST concave vers le haut et diffus.",
      "d) Un épanchement péricardique est toujours présent à l'échocardiographie.",
      "e) Un dosage de la troponine peut être élevé en cas de péricardite myopéricardite."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : a, c, e. L'antéflexion soulage la douleur (a). Le sus-décalage ST concave et diffus est typique (c). La troponine peut être élevée si l'inflammation atteint le myocarde sous-jacent (myopéricardite) (e). Le frottement péricardique est inconstant et fugace (b faux). Un épanchement n'est pas constant (d faux)."
  },
  {
    id: 'q-pnm-4-11',
    courseId: 'crs-pneumo-4',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Une hémoptysie est définie par :",
    options: [
      "a) Un rejet de sang provenant des voies aériennes sous-glottiques.",
      "b) Un rejet de sang au cours d'un effort de vomissement.",
      "c) Un sang rouge, aéré, spumeux.",
      "d) Un saignement toujours abondant et menaçant.",
      "e) La présence de prodromes comme un chatouillement laryngé."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : a, c, e. La définition anatomique est sous-glottique (a). Les caractéristiques sont un sang rouge, aéré (mêlé à l'air) (c). Des prodromes (chatouillement, chaleur rétrosternale) sont possibles (e). Le rejet lors d'un effort de vomissement définit l'hématémèse (b faux). L'hémoptysie peut être de faible abondance (d faux)."
  },
  {
    id: 'q-pnm-4-12',
    courseId: 'crs-pneumo-4',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Le principal risque vital immédiat d'une hémoptysie massive est :",
    options: [
      "a) Le choc hypovolémique par spoliation sanguine.",
      "b) L'asphyxie par inondation des voies aériennes.",
      "c) L'embolie gazeuse.",
      "d) L'arrêt cardiaque par trouble du rythme.",
      "e) Le choc septique."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. La mort par hémoptysie est le plus souvent due à l'asphyxie par obstruction bronchique, et non par perte de volume sanguin, surtout dans les hémoptysies massives (b). Le choc hypovolémique est secondaire (a faux)."
  },
  {
    id: 'q-pnm-4-13',
    courseId: 'crs-pneumo-4',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Devant toute hémoptysie, un examen endoscopique bronchique (fibroscopie) est indiqué :",
    options: [
      "a) Seulement si l'hémoptysie est massive.",
      "b) De manière systématique et en urgence après stabilisation.",
      "c) Uniquement pour le diagnostic étiologique.",
      "d) Pour localiser le saignement et parfois le tarir.",
      "e) Elle n'est pas urgente si la radiographie thoracique est normale."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b, d. La fibroscopie bronchique est un examen clé à faire systématiquement et en urgence dès que l'état est stable (b). Elle a un intérêt diagnostique (localisation) et parfois thérapeutique (coagulation, tamponnement) (d). Elle est indiquée même pour les hémoptysies non massives et même si la radiographie est normale (a, e faux). Son rôle dépasse le seul diagnostic étiologique (c faux)."
  },
  {
    id: 'q-pnm-4-14',
    courseId: 'crs-pneumo-4',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. Parmi les étiologies d'hémoptysie, lesquelles sont fréquentes en contexte algérien ?",
    options: [
      "a) Tuberculose pulmonaire (active ou séquellaire).",
      "b) Cancer bronchopulmonaire primitif.",
      "c) Dilatations des bronches (DDB).",
      "d) Rétrécissement mitral rhumatismal.",
      "e) Maladie de Rendu-Osler."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c. La tuberculose (active ou séquelles avec bronchectasies/aspergillome) reste très fréquente (a). Le cancer bronchique chez le fumeur est une cause majeure (b). Les DDB, souvent post-infectieuses ou post-tuberculeuses, sont une cause très fréquente (c). Le rétrécissement mitral est devenu plus rare (d). La maladie de Rendu-Osler est rare (e)."
  },
  {
    id: 'q-pnm-4-15',
    courseId: 'crs-pneumo-4',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Le traitement d'une hémoptysie de moyenne ou grande abondance peut inclure :",
    options: [
      "a) Le repos strict en position allongée.",
      "b) L'oxygénothérapie pour maintenir une SaO2 > 90%.",
      "c) L'utilisation de vasoconstricteurs comme la Glypressine.",
      "d) L'embolisation des artères bronchiques en deuxième intention.",
      "e) La chirurgie en cas d'échec de l'embolisation ou d'hémorragie cataclysmique."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : b, c, d, e. L'oxygénothérapie est capitale (b). La Glypressine (terlipressine) est un vasoconstricteur utilisé (c). L'embolisation est un traitement interventionnel de choix après échec médical (d). La chirurgie est le dernier recours (e). La position doit être semi-assise pour éviter l'encombrement, pas allongée (a faux)."
  },
  {
    id: 'q-pnm-4-16',
    courseId: 'crs-pneumo-4',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Une dyspnée chronique avec hippocratisme digital doit faire évoquer en premier :",
    options: [
      "a) Une BPCO.",
      "b) Un cancer bronchique.",
      "c) Une fibrose pulmonaire interstitielle diffuse.",
      "d) Une cardiopathie congénitale cyanogène.",
      "e) Des bronchectasies."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : b, c, d, e. L'hippocratisme digital est un signe d'hypoxie chronique ou de pathologies spécifiques. Il est très évocateur de cancer bronchique (b), fréquent dans les bronchectasies importantes (e), et dans certaines cardiopathies congénitales cyanogènes (d). Il peut aussi s'observer dans les fibroses pulmonaires avancées (c). Il est peu fréquent dans la BPCO simple (a faux)."
  },
  {
    id: 'q-pnm-4-17',
    courseId: 'crs-pneumo-4',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Une acidose métabolique peut se manifester par :",
    options: [
      "a) Une dyspnée de Kussmaul (polypnée ample et régulière).",
      "b) Une bradypnée.",
      "c) Une cyanose.",
      "d) Une hypercapnie.",
      "e) Une confusion."
    ],
    correctAnswers: [0, 4],
    explanation: "Correction : a, e. L'acidose métabolique (ex : acidocétose diabétique) provoque une hyperventilation compensatrice caractéristique : la polypnée de Kussmaul (a). Elle peut s'accompagner de troubles de la conscience (e). La bradypnée est un ralentissement, non observé ici (b faux). La cyanose n'est pas directe (c faux). L'hypercapnie est le signe d'une acidose respiratoire, pas métabolique (d faux)."
  },
  {
    id: 'q-pnm-4-18',
    courseId: 'crs-pneumo-4',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Un wheezing (sifflement respiratoire) expiratoire diffus est caractéristique de :",
    options: [
      "a) L'œdème aigu du poumon cardiogénique.",
      "b) La crise d'asthme.",
      "c) L'embolie pulmonaire.",
      "d) L'inhalation d'un corps étranger bronchique.",
      "e) La bronchite chronique simple."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b, d. Le wheezing est le bruit de l'air passant à travers des bronches rétrécies. Il est typique de l'asthme (b) et de l'obstruction par corps étranger (d). Il peut s'observer dans l'asthme cardiaque (forme d'OAP) mais pas dans l'OAP typique qui présente des crépitants (a faux). Il n'est pas caractéristique de l'EP (c faux) ni de la bronchite chronique simple sans spasme (e faux)."
  },
  {
    id: 'q-pnm-4-19',
    courseId: 'crs-pneumo-4',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. La gazométrie artérielle d'un patient en OAP cardiogénique typique montre habituellement :",
    options: [
      "a) Une hypoxémie sévère.",
      "b) Une hypercapnie.",
      "c) Une alcalose respiratoire (hypocapnie).",
      "d) Une acidose métabolique.",
      "e) Des valeurs normales."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : a, c. L'OAP provoque un trouble de l'hématose avec hypoxémie sévère (a). L'hyperventilation anxieuse et réflexe entraîne une hypocapnie (baisse de la PaCO2), donc une alcalose respiratoire (c). L'hypercapnie n'apparaît qu'en cas d'épuisement ou de comorbidité respiratoire (b faux). L'acidose métabolique n'est pas typique (d faux)."
  },
  {
    id: 'q-pnm-4-20',
    courseId: 'crs-pneumo-4',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. Le signe de \"tirage\" chez un enfant dyspnéique :",
    options: [
      "a) Signe une obstruction des voies aériennes supérieures.",
      "b) Est un creusement inspiratoire des espaces intercostaux.",
      "c) S'accompagne souvent d'un battement des ailes du nez.",
      "d) Est spécifique de la bronchiolite.",
      "e) N'existe pas à l'état normal."
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : a, b, c, e. Le tirage est un signe objectif de lutte inspiratoire, témoin d'une obstruction haute (laryngée, trachéale) (a). Il se voit au niveau des espaces intercostaux, sus-sternal, sus-claviculaires (b). Il s'associe souvent au battement des ailes du nez (c). C'est un signe pathologique (e). Il n'est pas spécifique de la bronchiolite (qui est une obstruction des petites voies aériennes, où le wheezing et la distension prédominent) (d faux)."
  },
  {
    id: 'q-pnm-4-21',
    courseId: 'crs-pneumo-4',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Une douleur thoracique augmentée à la palpation d'une côte est en faveur de :",
    options: [
      "a) Une origine pariétale (musculo-squelettique).",
      "b) Une pleurésie.",
      "c) Un zona intercostal (avant l'éruption).",
      "d) Une péricardite.",
      "e) Un infarctus du myocarde."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : a, c. Une douleur reproduite ou exacerbée par la palpation est un argument fort pour une origine pariétale (a), comme une fracture de côte, une costochondrite. Le zona pré-éruptif peut également être très douloureux à la palpation (c). Les autres causes (b, d, e) ne sont pas typiquement sensibles à la palpation."
  },
  {
    id: 'q-pnm-4-22',
    courseId: 'crs-pneumo-4',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. Dans l'évaluation d'une douleur thoracique, un pouls paradoxal (diminution de l'amplitude du pouls à l'inspiration) évoque :",
    options: [
      "a) Un tamponnade péricardique.",
      "b) Une BPCO sévère.",
      "c) Une crise d'asthme aiguë grave.",
      "d) Une embolie pulmonaire massive.",
      "e) Un choc cardiogénique."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c. Le pouls paradoxal est classique dans la tamponnade (a). Il peut aussi s'observer dans les obstructions bronchiques sévères (asthme aigu grave, BPCO) en raison des variations importantes de pression intrathoracique (b, c). Il n'est pas caractéristique de l'EP massive (d) ni du choc cardiogénique simple (e)."
  },
  {
    id: 'q-pnm-4-23',
    courseId: 'crs-pneumo-4',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Un patient sous anticoagulants (AVK) consulte pour des crachats striés de sang. La première mesure est :",
    options: [
      "a) Arrêter immédiatement les AVK.",
      "b) Faire un Taux de Prothrombine (TP/INR) en urgence.",
      "c) Hospitaliser pour surveillance.",
      "d) Débuter un traitement par vasoconstricteur.",
      "e) Réaliser une fibroscopie bronchique en urgence."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : b, c. La priorité est de quantifier le surdosage par le TP/INR (b) et d'hospitaliser pour surveiller l'évolution et le retentissement (c). L'arrêt des AVK n'est pas forcément définitif et doit être décidé en fonction du bilan et de l'indication (a faux). Le traitement vasoconstricteur n'est pas de première intention pour une hémoptysie minime (d faux). La fibroscopie est indiquée, mais pas nécessairement en extrême urgence si l'hémorragie est minime et stable (e faux)."
  },
  {
    id: 'q-pnm-4-24',
    courseId: 'crs-pneumo-4',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. La dyspnée dans la fibrose pulmonaire interstitielle :",
    options: [
      "a) Est d'installation progressive et isolée au début.",
      "b) S'accompagne typiquement de râles crépitants fins en \"Velcro\" à l'auscultation.",
      "c) Est améliorée par les bronchodilatateurs.",
      "d) Le diagnostic repose sur le scanner thoracique en coupes fines et les EFR.",
      "e) La radiographie thoracique est toujours normale au début."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : a, b, d. C'est une dyspnée d'effort d'installation insidieuse et progressive (a). Les râles crépitants fins et secs (type Velcro) sont très évocateurs (b). Le scanner thoracique haute résolution et les EFR (trouble ventilatoire restrictif) sont les examens clés (d). Les bronchodilatateurs sont inefficaces (c faux). La radiographie peut montrer des opacités réticulonodulaires, même au début (e faux)."
  },
  {
    id: 'q-pnm-4-25',
    courseId: 'crs-pneumo-4',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Un sujet jeune consulte pour une dyspnée aiguë avec douleur basithoracique. La radiographie thoracique montre un pneumomédiastin. L'étiologie la plus probable est :",
    options: [
      "a) Un pneumothorax.",
      "b) Un asthme aigu grave.",
      "c) Un effort de vomissement ou une crise d'asthme avec rupture alvéolaire (syndrome de Macklin).",
      "d) Une rupture œsophagienne.",
      "e) Une péricardite."
    ],
    correctAnswers: [2, 3],
    explanation: "Correction : c, d. Le pneumomédiastin chez l'adulte jeune, souvent sans traumatisme, évoque une rupture alvéolaire avec dissection de l'air le long des bronches (syndrome de Macklin), souvent après un effort de toux/vomissement ou une crise d'asthme (c). La rupture œsophagienne (syndrome de Boerhaave) est plus grave mais possible (d). Le pneumothorax est un épanchement dans la plèvre, pas le médiastin (a faux). L'asthme seul ne donne pas de pneumomédiastin (b faux). La péricardite ne donne pas d'air dans le médiastin (e faux)."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-4-c1-1',
    courseId: 'crs-pneumo-4',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Le fumeur essoufflé\nMr. K, 58 ans, fumeur à 40 PA, consulte pour une aggravation de sa dyspnée habituelle survenue en 48h. Il tousse avec expectoration purulente. Pas de fièvre. A l'examen : TA 130/80, FC 105/min, SpO2 92% air ambiant. Thorax distendu, murmure vésiculaire diminué, quelques sibilants diffus. Pas d'œdème des membres inférieurs.\n\nQ1. Quelle est l'hypothèse diagnostique la plus probable ?",
    options: [
      "a) Exacerbation de BPCO sur infection bronchique.",
      "b) Œdème aigu du poumon cardiogénique.",
      "c) Embolie pulmonaire.",
      "d) Pneumonie.",
      "e) Pneumothorax."
    ],
    correctAnswers: [0],
    explanation: "Correction : a. Le terrain (fumeur), la chronicité de la dyspnée, l'aggravation avec expectoration purulente évoquent une exacerbation infectieuse de BPCO. Absence de signes cardiaques (b), de douleur pleurale (c, e), ou de syndrome infectieux franc (d)."
  },
  {
    id: 'q-pnm-4-c1-2',
    courseId: 'crs-pneumo-4',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : Quel examen complémentaire simple est le plus contributif en urgence ?",
    options: [
      "a) ECG.",
      "b) Radiographie thoracique.",
      "c) Dosage des D-Dimères.",
      "d) Gazométrie artérielle.",
      "e) EFR."
    ],
    correctAnswers: [3],
    explanation: "Correction : d. La gazométrie artérielle est cruciale pour évaluer le retentissement (hypoxémie, hypercapnie) et guider la prise en charge (besoin en O2, ventilation). La radiographie (b) est utile mais moins prioritaire pour la décision thérapeutique immédiate."
  },
  {
    id: 'q-pnm-4-c2-1',
    courseId: 'crs-pneumo-4',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : La douleur thoracique atypique\nMme. L, 65 ans, diabétique, hypertensive, se plaint d'une sensation d'oppression thoracique haute survenant depuis 2 heures, sans irradiation. Elle est nauséeuse et diaphorétique. ECG : sous-décalage du segment ST de 1 mm en antéro-latéral. Troponine ultrasensible à la limite supérieure de la normale.\n\nQ1. Quel diagnostic retenir ?",
    options: [
      "a) Angor stable.",
      "b) Infarctus du myocarde sans sus-décalage de ST (NSTEMI).",
      "c) Reflux gastro-œsophagien.",
      "d) Péricardite.",
      "e) Dyspepsie."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. La douleur prolongée (>20 min), les symptômes neuro-végétatifs (nausées, sueurs), l'ECG anormal (sous-décalage ST) et l'élévation de la troponine (même minime) définissent un syndrome coronarien aigu sans sus-décalage de ST (NSTEMI). L'angor stable est de courte durée (a faux). Le RGO ne donne pas ces anomalies ECG/biologiques (c faux)."
  },
  {
    id: 'q-pnm-4-c2-2',
    courseId: 'crs-pneumo-4',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : Quelle est la conduite à tenir immédiate ?",
    options: [
      "a) Renvoyer à domicile sous inhibiteur de la pompe à protons.",
      "b) Hospitalisation en Unité de Soins Intensifs Cardiologiques.",
      "c) Prescrire un anti-inflammatoire pour une péricardite.",
      "d) Réaliser une épreuve d'effort en première intention.",
      "e) Traiter par thrombolyse."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. Le NSTEMI est une urgence cardiologique nécessitant une hospitalisation en milieu spécialisé pour monitoring, traitement anti-ischémique, anti-agrégant et évaluation de la nécessité d'une coronarographie. La thrombolyse est réservée au STEMI (e faux)."
  },
  {
    id: 'q-pnm-4-c3-1',
    courseId: 'crs-pneumo-4',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : L'hémoptysie du jeune adulte\nMr. M, 28 ans, sans antécédents, consulte pour rejet de sang rouge vif, aéré, d'environ 50 ml survenu ce matin après une quinte de toux. Il se plaint d'une asthénie et d'une petite toux productive depuis 3 semaines. Amaigrissement de 3 kg. Examen clinique normal.\n\nQ1. Quelle étiologie faut-il évoquer en priorité dans ce contexte ?",
    options: [
      "a) Cancer bronchique.",
      "b) Tuberculose pulmonaire.",
      "c) Bronchectasies.",
      "d) Embolie pulmonaire.",
      "e) Rétrécissement mitral."
    ],
    correctAnswers: [1],
    explanation: "Correction : b. Chez un adulte jeune avec altération de l'état général (asthénie, amaigrissement) et hémoptysie, la tuberculose pulmonaire évolutive est l'étiologie prioritaire à éliminer, surtout en contexte algérien. Le cancer est plus rare à cet âge (a). Les bronchectasies sont possibles mais sans antécédent (c)."
  },
  {
    id: 'q-pnm-4-c3-2',
    courseId: 'crs-pneumo-4',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 (suite) : Quel est l'examen diagnostique de première intention le plus simple ?",
    options: [
      "a) Scanner thoracique.",
      "b) Fibroscopie bronchique.",
      "c) Radiographie thoracique face et profil.",
      "d) Dosage des D-Dimères.",
      "e) Recherche de BAAR dans les crachats."
    ],
    correctAnswers: [2],
    explanation: "Correction : c. La radiographie thoracique est l'examen de première intention, rapide et accessible, pouvant montrer des images évocatrices de tuberculose (cavernes, infiltrats). Elle guide les examens suivants. La recherche de BAAR (e) est l'examen de confirmation."
  },
  {
    id: 'q-pnm-4-c4-1',
    courseId: 'crs-pneumo-4',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : La dyspnée paroxystique nocturne\nMme. N, 72 ans, connue pour HTA et insuffisance cardiaque NYHA II, est réveillée vers 3h du matin par une sensation d'étouffement. Elle doit se lever et s'asseoir au bord du lit. Toux avec expectoration mousseuse légèrement rosée. A l'arrivée des secours : TA 180/110, FC 120/min, SpO2 85%, râles crépitants fins aux deux bases pulmonaires.\n\nQ1. Quel diagnostic évoquez-vous ?",
    options: [
      "a) Crise d'asthme aiguë.",
      "b) Exacerbation de BPCO.",
      "c) Œdème aigu du poumon cardiogénique.",
      "d) Pneumonie.",
      "e) Embolie pulmonaire."
    ],
    correctAnswers: [2],
    explanation: "Correction : c. Le tableau est typique d'un OAP cardiogénique paroxystique nocturne : contexte d'IC, orthopnée, toux avec expectoration mousseuse rosée, signes de surcharge (crépitants basaux) et d'hypertonie sympathique (HTA, tachycardie). L'asthme donnerait des sibilants (a)."
  },
  {
    id: 'q-pnm-4-c4-2',
    courseId: 'crs-pneumo-4',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 (suite) : Quel est le traitement de première intention en pré-hospitalier ?",
    options: [
      "a) Salbutamol en nébulisation.",
      "b) Oxygène à haut débit.",
      "c) Morphine, diurétique de l'anse IV, dérivé nitré.",
      "d) Antibiotique à large spectre.",
      "e) Héparine de bas poids moléculaire."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : b, c. La prise en charge immédiate associe : Oxygénothérapie pour corriger l'hypoxémie sévère (b) et le traitement médical de l'OAP : diurétique de l'anse (ex: furosémide IV) pour décharger, dérivé nitré (ex: trinitrine) pour diminuer la précharge et la postcharge, et parfois morphine pour l'anxiété et la vasodilatation (c)."
  },
  {
    id: 'q-pnm-4-c5-1',
    courseId: 'crs-pneumo-4',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : La douleur thoracique du sujet jeune sportif\nMr. O, 22 ans, sportif, consulte pour une douleur thoracique gauche aiguë, augmentée à l'inspiration, survenue au repos. Pas de dyspnée. Examen : TA 120/70, FC 80/min, SpO2 99%. Auscultation cardiaque et pulmonaire normale. Douleur reproduite à la palpation du cartilage costal de la 3ème côte gauche.\n\nQ1. Quelle est la cause la plus probable ?",
    options: [
      "a) Péricardite.",
      "b) Pneumothorax.",
      "c) Syndrome de Tietze (costochondrite).",
      "d) Infarctus du myocarde.",
      "e) Embolie pulmonaire."
    ],
    correctAnswers: [2],
    explanation: "Correction : c. La douleur reproduite à la palpation d'un cartilage costal est pathognomonique d'une douleur pariétale, comme une costochondrite (syndrome de Tietze). Le contexte jeune et sain renforce cette hypothèse. La péricardite est généralement plus diffuse (a)."
  },
  {
    id: 'q-pnm-4-c5-2',
    courseId: 'crs-pneumo-4',
    questionNumber: 35,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 (suite) : Quelle est la conduite à tenir ?",
    options: [
      "a) Hospitalisation pour bilan cardiaque complet.",
      "b) Prescription d'AINS et surveillance.",
      "c) Radiographie thoracique systématique.",
      "d) ECG et dosage de troponine obligatoires.",
      "e) Scanner thoracique."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : b, c, d. Même pour une cause bénigne, il faut éliminer les urgences. Un ECG et une radiographie thoracique (pour éliminer un petit pneumothorax) sont justifiés (c, d). Si normaux et tableau typique, un traitement anti-inflammatoire non stéroïdien et une surveillance simple suffisent (b). L'hospitalisation (a) et le scanner (e) ne sont pas indiqués d'emblée."
  }
];

export const PNEUMO_LESSON_4_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-4-mindmap',
    courseId: 'crs-pneumo-4',
    type: 'Resume',
    title: 'Carte Mentale Synthétique : Dyspnée, Douleur Thoracique, Hémoptysie',
    contentMarkdown: `### DYSPNEE, DOULEUR THORACIQUE, HEMOPTYSIE

├── **DYSPNEE**
│   ├── Déf: Sensation subjective + Signes objectifs (tirage, polypnée...)
│   ├── Mécanisme: Travail respiratoire excessif / Capacités < Besoins
│   ├── **Orientation Principale:**
│   │   ├── **CARDIAQUE (IVG)**
│   │   │   ├── Dyspnée d'effort (NYHA I-IV)
│   │   │   ├── Orthopnée, Dyspnée paroxystique nocturne
│   │   │   └── OAP: Crépitants fins en "marée montante", expectoration mousseuse rosée
│   │   ├── **PULMONAIRE**
│   │   │   ├── **Obstructif (BPCO, Asthme):** Wheezing, thorax distendu, EFR
│   │   │   ├── **Restrictif (Pleurésie, Fibrose):** Tirage, Crepitants "Velcro"
│   │   │   ├── **Vasculaire (EP):** Douleur + Dyspnée brutale, Facteurs de risque TVP
│   │   │   └── **Autres:** Corps étranger, Pneumothorax (douleur pleurale brutale)
│   │   └── **AUTRES:** Anémie, Acidose (Kussmaul), Neuromusculaire
│   └── **CAT:** Clinique, Gaz du sang (clé!), ECG, Radio thorax, EFR, Echo
│
├── **DOULEUR THORACIQUE AIGUE**
│   ├── **Règle: Éliminer les 4 urgences vitales**
│   ├── **Urgence 1: SCA (IDM/Angor)** → Douleur constrictive rétrosternale, irradiation, Trinitrine, ECG + Troponine
│   ├── **Urgence 2: Embolie Pulmonaire** → Douleur basithoracique + Dyspnée brutale, Facteurs risque, Hypoxie/Hypocapnie, D-Dimères
│   ├── **Urgence 3: Dissection Aortique** → Douleur déchirante migratrice, Asymétrie tensionnelle/pouls, Élargissement médiastin
│   ├── **Urgence 4: Péricardite** → Douleur augmentée à l'inspiration, calmée antéflexion, Frottement, ECG concave ST+
│   └── **Autres Causes:** Pleuro-pulmonaire (Pneumothorax), Pariétale, Digestive, Psychogène
│
└── **HEMOPTYSIE**
    ├── **Déf:** Sang rouge aéré sous-glottique
    ├── **Gravité:** Asphyxie > Choc hémorragique
    ├── **CAT Urgence:**
    │   ├── Évaluer Abondance & Tolérance
    │   ├── Position semi-assise, O2, Voie veineuse
    │   ├── Bilan: NFS, Hémostase, GDS, Radio Thorax
    │   └── **Fibroscopie Bronchique Urgente** (Dx + Tx)
    └── **Étiologies Fréquentes (Algérie):**
        ├── Tuberculose (Active / Séquelles)
        ├── Cancer Bronchique
        ├── Dilatations des Bronches (DDB)
        ├── Bronchite Chronique surinfectée
        └── Embolie Pulmonaire, Causes Cardiaques (Retr. mitral, OAP)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Dyspnée', 'Douleur Thoracique', 'Hémoptysie']
  },
  {
    id: 'res-pnm-4-astuces',
    courseId: 'crs-pneumo-4',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques : CAT Thoracique',
    contentMarkdown: `### Astuces & Mnémotechniques
1. **Les 4 urgences de la douleur thoracique : P.E.D.A.** :
   - **P**éricardite (souvent moins immédiatement mortelle)
   - **E**mbolie Pulmonaire
   - **D**issection Aortique
   - **A**ngor/IDM (SCA)
2. **Gaz du sang dans l'OAP vs l'EP : "OH OH"** pour OAP = **H**ypoxémie + **H**ypocapnie. EP = Mêmes initiales (**H**+**H**). L'astuce : les deux donnent une alcalose respiratoire par hyperventilation. La différence se fait sur le contexte et l'imagerie.
3. **Signes de gravité de l'hémoptysie : A.S.P.H.Y.X.I.E** :
   - **A**bondance (>200cc/24h)
   - **S**aturation en O2 basse (<90%)
   - **P**alpitations / Tachycardie
   - **H**ypotension
   - **Y** (Why?) -> Détresse respiratoire
   - **X** (Rayons X) -> Image d'inondation alvéolaire
   - **I**nstabilité hémodynamique
   - **E**tat de conscience altéré
4. **Causes de dyspnée avec hippocratisme digital : C.F.B.B** :
   - **C**ancer bronchique
   - **F**ibrose pulmonaire
   - **B**ronchectasies
   - **B** (maladies) Cardiaques congénitales cyanogènes
5. **Douleur de dissection aortique : La règle des "D"** :
   - **D**échirante
   - **D**'emblée maximale
   - **D**orsale (irradie dans le dos)
   - **D**éclive (migre)
   - **D**ifférentielle (asymétrie tensionnelle/pouls)

---
*Allez, courage future collègue ! Ces pathologies, tu les croiseras tous les jours aux urgences. Maîtrise ces bases, garde ton calme face au patient, et souviens-toi : derrière chaque QCM réussi, il y a un futur diagnostic posé avec justesse. La médecine, c'est un marathon, pas un sprint. Un jour, une page, un cas à la fois. Vous en êtes capables !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Urgences', 'Algérie']
  }
];

// Lesson 5: BPCO (Pr ALIHALASSA)
export const PNEUMO_LESSON_5_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-5-01',
    courseId: 'crs-pneumo-5',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. Concernant l'épidémiologie de la BPCO en Algérie selon les données récentes (2025) :",
    options: [
      "a) La prévalence est estimée à environ 1% de la population.",
      "b) Le tabagisme masculin reste le principal facteur de risque.",
      "c) L'exposition à la biomasse est un facteur de risque négligeable.",
      "d) Environ 10% des Algériens seraient concernés, un chiffre aligné sur les statistiques mondiales.",
      "e) La prévalence est plus élevée chez les femmes que chez les hommes."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b, d.\n*Explication : Les données 2025 alignent la prévalence algérienne (~10%) sur les estimations mondiales, mais ce chiffre reste probablement sous-estimé. Le tabagisme masculin est dominant, mais l'exposition à la biomasse (cuisson domestique) est un facteur de risque significatif et non négligeable chez les femmes non-fumeuses, reflétant un profil épidémiologique local important.*"
  },
  {
    id: 'q-pnm-5-02',
    courseId: 'crs-pneumo-5',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. La définition actuelle de la BPCO selon GOLD 2024/2025 insiste sur :",
    options: [
      "a) Une maladie purement obstructive et réversible.",
      "b) Une pathologie pulmonaire hétérogène.",
      "c) Des symptômes uniquement dus à une bronchite chronique.",
      "d) Des anomalies des voies aériennes et/ou alvéolaires.",
      "e) Une limitation persistante et non complètement réversible du débit aérien."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Correction : b, d, e.\n*Explication : La définition moderne décrit une maladie hétérogène (b), avec des lésions des voies aériennes (bronchite/bronchiolite) et/ou alvéolaires (emphysème) (d). Le critère diagnostique cardinal reste un trouble ventilatoire obstructif (TVO) persistant, confirmé par un rapport VEMS/CVF < 0,70 post-bronchodilatateur (e). La réversibilité est limitée, contrairement à l'asthme (a faux).*"
  },
  {
    id: 'q-pnm-5-03',
    courseId: 'crs-pneumo-5',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Pour confirmer le diagnostic de BPCO, l'examen clé est :",
    options: [
      "a) La radiographie thoracique.",
      "b) La mesure du Débit Expiratoire de Pointe (DEP).",
      "c) La spirométrie (EFR) post-bronchodilatateur.",
      "d) La gazométrie artérielle.",
      "e) La TDM thoracique."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\n*Explication : La spirométrie est l'examen de référence. Le critère diagnostique est un rapport VEMS/CVF < 0,70 (ou < limite inférieure de la normale) après administration d'un bronchodilatateur, confirmant l'obstruction non complètement réversible. Le DEP (b) n'est pas validé pour le diagnostic. Les autres examens sont complémentaires.*"
  },
  {
    id: 'q-pnm-5-04',
    courseId: 'crs-pneumo-5',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. Concernant la réversibilité aux bronchodilatateurs dans la BPCO :",
    options: [
      "a) Elle est définie par un gain > 200 ml ET > 12% du VEMS basal.",
      "b) Elle est généralement complète, comme dans l'asthme.",
      "c) Son absence confirme le diagnostic de BPCO.",
      "d) Elle est évaluée après inhalation de 200 µg de salbutamol.",
      "e) Un test négatif exclut formellement une BPCO."
    ],
    correctAnswers: [0, 3],
    explanation: "Correction : a, d.\nExplication : La réversibilité est définie de manière précise (a) après une dose standard de bronchodilatateur à courte durée d'action (d). Contrairement à l'asthme (b faux), elle est partielle ou absente dans la BPCO. Le diagnostic repose sur l'obstruction persistante, pas sur l'absence de réversibilité (c faux). Une BPCO peut coexister avec une certaine réversibilité."
  },
  {
    id: 'q-pnm-5-05',
    courseId: 'crs-pneumo-5',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. La BPCO est considérée comme une maladie systémique car :",
    options: [
      "a) Elle est exclusivement limitée aux poumons.",
      "b) Elle est associée à une inflammation chronique systémique.",
      "c) Elle s'accompagne fréquemment de comorbidités cardiovasculaires.",
      "d) L'ostéoporose en est une complication reconnue.",
      "e) La dysfonction musculaire périphérique en fait partie."
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: "Correction : b, c, d, e.\nExplication : L'inflammation chronique dépasse les poumons (b) et contribue à des comorbidités systémiques multiples : cardiovasculaires (c), musculaires (e, avec fonte), osseuses (d, ostéoporose), métaboliques et psychiatriques. L'affirmation (a) est donc fausse."
  },
  {
    id: 'q-pnm-5-06',
    courseId: 'crs-pneumo-5',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Dans la classification GOLD historique, un VEMS post-bronchodilatateur à 45% de la valeur théorique correspond à :",
    options: [
      "a) Stade GOLD 1 (Léger).",
      "b) Stade GOLD 2 (Modéré).",
      "c) Stade GOLD 3 (Sévère).",
      "d) Stade GOLD 4 (Très sévère).",
      "e) Insuffisance respiratoire chronique obligatoire."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\n*Explication : GOLD 3 (Sévère) = VEMS entre 30% et 50% de la théorique. Un VEMS à 45% y correspond. Le stade GOLD 4 nécessite un VEMS <30% (ou <50% avec insuffisance respiratoire chronique). Un VEMS à 45% seul ne définit pas une insuffisance respiratoire (e faux).*"
  },
  {
    id: 'q-pnm-5-07',
    courseId: 'crs-pneumo-5',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Selon la classification ABE (GOLD 2024/2025), un patient avec un score mMRC=1, un CAT=8, et 1 exacerbation modérée l'année dernière est classé dans le groupe :",
    options: [
      "a) Groupe A.",
      "b) Groupe B.",
      "c) Groupe E.",
      "d) Groupe D (ancienne classification).",
      "e) Groupe à faible risque."
    ],
    correctAnswers: [0],
    explanation: "Correction : a.\n*Explication : Symptômes faibles (mMRC<2 ET CAT<10). Risque faible (0-1 exacerbation modérée). Donc Groupe A (faibles symptômes, faible risque). La classification D n'existe plus dans le système ABE.*"
  },
  {
    id: 'q-pnm-5-08',
    courseId: 'crs-pneumo-5',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Un patient avec dyspnée importante (mMRC=3), CAT=18, et 3 exacerbations modérées sans hospitalisation l'année passée est classé en :",
    options: [
      "a) Groupe A.",
      "b) Groupe B.",
      "c) Groupe E.",
      "d) Groupe à haut risque d'exacerbation.",
      "e) Groupe à symptômes élevés."
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Correction : c, d, e.\n*Explication : Symptômes élevés (mMRC≥2 OU CAT≥10) (e). Risque élevé (≥2 exacerbations modérées) (d). La combinaison \"symptômes élevés + risque élevé\" définit le Groupe E (Exacerbateurs) (c).*"
  },
  {
    id: 'q-pnm-5-09',
    courseId: 'crs-pneumo-5',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. La mesure non pharmacologique la plus importante dans la prise en charge de la BPCO est :",
    options: [
      "a) La réhabilitation respiratoire.",
      "b) L'activité physique douce.",
      "c) L'arrêt du tabac.",
      "d) La vaccination antigrippale.",
      "e) L'éducation thérapeutique."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : L'arrêt du tabac est la seule intervention capable de ralentir significativement le déclin accéléré du VEMS. Toutes les autres mesures sont fondamentales mais n'ont pas cet impact sur la progression de la maladie."
  },
  {
    id: 'q-pnm-5-10',
    courseId: 'crs-pneumo-5',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Pour un patient naïf de traitement, classé Groupe A (faibles symptômes, faible risque), le traitement pharmacologique initial recommandé est :",
    options: [
      "a) Association LABA + LAMA.",
      "b) Corticoïde inhalé (CSI) seul.",
      "c) Un bronchodilatateur (LABA ou LAMA).",
      "d) Triple thérapie (LABA+LAMA+CSI).",
      "e) Bronchodilatateur de courte durée d'action (SABA) à la demande."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : Pour le Groupe A, la recommandation est un mono-bronchodilatateur de longue durée d'action (LABA ou LAMA). L'association (a) est pour le Groupe B. Les CSI seuls (b) ou en triple thérapie (d) ne sont pas indiqués ici. Les SABA (e) ne sont pas un traitement de fond."
  },
  {
    id: 'q-pnm-5-11',
    courseId: 'crs-pneumo-5',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Pour un patient Groupe B (symptômes élevés, risque faible), le traitement de fond initial de choix est :",
    options: [
      "a) Un bronchodilatateur de longue durée (LABA ou LAMA).",
      "b) Un corticoïde inhalé (CSI).",
      "c) L'association fixe LABA + LAMA.",
      "d) Un bronchodilatateur de courte durée (SABA).",
      "e) La triple thérapie (LABA+LAMA+CSI)."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : L'objectif pour le Groupe B est le contrôle des symptômes. L'association de deux bronchodilatateurs (LAMA+LABA) a une efficacité supérieure sur la dyspnée et la qualité de vie par rapport à la monothérapie (a)."
  },
  {
    id: 'q-pnm-5-12',
    courseId: 'crs-pneumo-5',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. Dans le Groupe E (Exacerbateurs), une triple thérapie (LABA+LAMA+CSI) d'emblée est particulièrement préconisée si :",
    options: [
      "a) Le patient est fumeur.",
      "b) Le VEMS est inférieur à 50%.",
      "c) La dyspnée est sévère (mMRC 4).",
      "d) L'éosinophilie sanguine est ≥ 300/mm³.",
      "e) Il existe une hypercapnie."
    ],
    correctAnswers: [3],
    explanation: "Correction : d.\n*Explication : Le phénotype \"éosinophilique\" (éosinophiles ≥ 300/mm³) est un marqueur de réponse aux corticoïdes inhalés. Dans le Groupe E, ce seuil justifie l'ajout d'un CSI à l'association LABA+LAMA pour réduire le risque d'exacerbations.*"
  },
  {
    id: 'q-pnm-5-13',
    courseId: 'crs-pneumo-5',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Concernant les corticoïdes inhalés (CSI) dans la BPCO :",
    options: [
      "a) Ils sont le traitement de première intention dans tous les cas.",
      "b) Ils ralentissent le déclin du VEMS.",
      "c) Leur indication principale est la réduction des exacerbations.",
      "d) Ils sont aussi efficaces que dans l'asthme.",
      "e) Leur utilisation est recommandée en monothérapie."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : Les CSI ne modifient pas la pente de déclin du VEMS (b faux). La BPCO est souvent cortico-résistante (d faux). Leur place est en association avec des bronchodilatateurs chez les exacerbateurs (Groupe E), surtout si éosinophilie élevée, pour réduire la fréquence des exacerbations (c). Ils ne sont jamais utilisés en monothérapie (e faux)."
  },
  {
    id: 'q-pnm-5-14',
    courseId: 'crs-pneumo-5',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. L'oxygénothérapie de longue durée (OLD) est indiquée en cas de :",
    options: [
      "a) Dyspnée d'effort seule.",
      "b) PaO2 ≤ 55 mmHg en état stable.",
      "c) SaO2 < 88% en état stable.",
      "d) PaO2 entre 56 et 59 mmHg associée à une hypertension artérielle pulmonaire.",
      "e) Toux chronique productive."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : b, c, d.\n*Explication : Les critères stricts sont : PaO2 ≤ 55 mmHg (b) ou SaO2 ≤ 88% (c) ; ou PaO2 entre 56-59 mmHg (ou SaO2 89%) si preuve d'hypertension artérielle pulmonaire, d'insuffisance cardiaque droite, ou de polyglobulie (d). La dyspnée seule (a) ou la toux (e) ne sont pas des indications.*"
  },
  {
    id: 'q-pnm-5-15',
    courseId: 'crs-pneumo-5',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. La ventilation non invasive (VNI) au long cours peut être discutée dans la BPCO en cas de :",
    options: [
      "a) Première exacerbation.",
      "b) Hypoxémie isolée.",
      "c) Hypercapnie diurne persistante (PaCO2 > 45-50 mmHg) malgré l'OLD.",
      "d) Refus du patient de l'oxygénothérapie.",
      "e) Insomnie chronique."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\n*Explication : La VNI au long cours est envisagée chez les patients hypercapniques stables (PaCO2 > 45-50 mmHg) en état stable, surtout après une exacerbation avec acidose respiratoire, pour améliorer la survie et la qualité de vie. Elle ne traite pas une hypoxémie isolée (b faux).*"
  },
  {
    id: 'q-pnm-5-16',
    courseId: 'crs-pneumo-5',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Parmi ces affirmations sur la réhabilitation respiratoire, laquelle(s) est/sont exacte(s) ?",
    options: [
      "a) Elle est réservée aux stades GOLD 3 et 4.",
      "b) Elle améliore la dyspnée et la tolérance à l'effort.",
      "c) Elle réduit la mortalité.",
      "d) Elle est essentielle pour les groupes B et E.",
      "e) Elle remplace le traitement pharmacologique."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b, d.\nExplication : La réhabilitation respiratoire est un pilier thérapeutique pour les patients symptomatiques (Groupes B et E) (d). Elle améliore de manière probante la dyspnée, la capacité à l'effort et la qualité de vie (b). Elle n'a pas démontré d'impact sur la mortalité (c faux) et ne remplace pas les médicaments (e faux). Elle est bénéfique à tous les stades si le patient est limité (a faux)."
  },
  {
    id: 'q-pnm-5-17',
    courseId: 'crs-pneumo-5',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. Une exacerbation sévère de BPCO est définie par :",
    options: [
      "a) Une aggravation des symptômes nécessitant une consultation.",
      "b) Une aggravation des symptômes nécessitant des antibiotiques.",
      "c) Une aggravation des symptômes nécessitant une hospitalisation.",
      "d) Une baisse du DEP > 20%.",
      "e) Une augmentation de la toux pendant 3 jours."
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : Dans les critères GOLD, une exacerbation \"sévère\" est celle qui nécessite une hospitalisation. Les exacerbations \"modérées\" sont traitées avec des corticostéroïdes systémiques et/ou des antibiotiques en ambulatoire. Le DEP n'est pas le critère de définition."
  },
  {
    id: 'q-pnm-5-18',
    courseId: 'crs-pneumo-5',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. Parmi les comorbidités fréquemment associées à la BPCO, on trouve :",
    options: [
      "a) Diabète sucré.",
      "b) Hypothyroïdie.",
      "c) Anxiété et dépression.",
      "d) Ostéoporose.",
      "e) Insuffisance rénale chronique."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : a, c, d.\nExplication : Les comorbidités systémiques de la BPCO sont liées à l'inflammation chronique et à la sédentarité : syndrome métabolique/diabète (a), troubles anxio-dépressifs (c), ostéoporose (d). L'hypothyroïdie (b) et l'IRC (e) ne font pas partie des associations classiques décrites comme systémiques dans la BPCO."
  },
  {
    id: 'q-pnm-5-19',
    courseId: 'crs-pneumo-5',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Le principal facteur de risque de BPCO en Algérie est :",
    options: [
      "a) L'asthme infantile.",
      "b) Le tabagisme actif.",
      "c) L'exposition professionnelle aux poussières.",
      "d) Les infections respiratoires basses récurrentes.",
      "e) La pollution atmosphérique urbaine."
    ],
    correctAnswers: [1],
    explanation: "Correction : b.\nExplication : Bien que tous ces facteurs puissent contribuer, le tabagisme actif (surtout masculin) reste le facteur de risque dominant et évitable numéro un, en Algérie comme dans le monde. La biomasse est un facteur important chez les femmes non-fumeuses."
  },
  {
    id: 'q-pnm-5-20',
    courseId: 'crs-pneumo-5',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. La vaccination recommandée de manière systématique chez un patient BPCO stable est :",
    options: [
      "a) Vaccin annuel contre la grippe.",
      "b) Vaccin contre le pneumocoque (schéma à renouveler tous les 5 ans).",
      "c) Vaccin contre la coqueluche.",
      "d) Vaccin contre l'hépatite B.",
      "e) Vaccin contre le COVID-19 selon les recommandations en vigueur."
    ],
    correctAnswers: [0, 1, 4],
    explanation: "Correction : a, b, e.\n*Explication : La vaccination anti-grippale annuelle (a) et anti-pneumococcique (b, avec un schéma spécifique souvent à dose unique ou avec un rappel) sont des standards pour prévenir les infections qui déclenchent des exacerbations. La vaccination contre le COVID-19 (e) est également cruciale. Les autres (c, d) ne sont pas spécifiquement recommandées systématiquement pour la BPCO.*"
  },
  {
    id: 'q-pnm-5-21',
    courseId: 'crs-pneumo-5',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. Le score CAT (COPD Assessment Test) :",
    options: [
      "a) Évalue spécifiquement la dyspnée.",
      "b) Est un questionnaire de qualité de vie liée à la santé.",
      "c) Un score ≥ 10 définit des \"symptômes élevés\".",
      "d) Est utilisé pour classifier la sévérité de l'obstruction.",
      "e) Remplace toujours la spirométrie."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : b, c.\nExplication : Le CAT est un questionnaire patient évaluant l'impact global de la BPCO sur la santé (b). Un score ≥ 10 indique un impact important, définissant des \"symptômes élevés\" dans la classification ABE (c). Le mMRC évalue la dyspnée (a faux). Il ne classe pas l'obstruction (d faux, rôle de la spirométrie) et ne la remplace pas (e faux)."
  },
  {
    id: 'q-pnm-5-22',
    courseId: 'crs-pneumo-5',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. La chirurgie de réduction de volume pulmonaire est une option pour :",
    options: [
      "a) Tous les patients emphysémateux.",
      "b) Des patients très sélectionnés avec emphysème prédominant aux sommets.",
      "c) Les patients en insuffisance respiratoire chronique hypercapnique.",
      "d) Améliorer la capacité d'exercice et la survie dans des cas spécifiques.",
      "e) Remplacer la transplantation pulmonaire."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b, d.\nExplication : C'est un traitement chirurgical de niche pour une minorité de patients (b) présentant un emphysème hétérogène, surtout apical, avec distension. Dans cette population sélectionnée, elle peut améliorer la fonction, la tolérance à l'effort et la survie (d). Elle n'est pas pour tous (a faux) et ne remplace pas la transplantation (e faux)."
  },
  {
    id: 'q-pnm-5-23',
    courseId: 'crs-pneumo-5',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Concernant le phénotype \"exacerbateur fréquent\" :",
    options: [
      "a) Il est défini par ≥ 2 exacerbations modérées ou ≥ 1 sévère par an.",
      "b) Il guide le traitement vers une association bronchodilatatrice puissante +/- CSI.",
      "c) Il est indépendant du niveau de VEMS.",
      "d) Il est toujours associé à une éosinophilie élevée.",
      "e) C'est le seul facteur pronostique important."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : a, b, c.\n*Explication : La définition est précise (a). Ce phénotype (Groupe E) guide le traitement vers LABA+LAMA, avec ajout de CSI si éosinophilie (b). Un patient GOLD 1 peut être un exacerbateur, et un GOLD 4 peut être stable (c). L'éosinophilie n'est présente que chez une sous-partie des exacerbateurs (d faux). Le pronostic dépend aussi des comorbidités, etc. (e faux).*"
  },
  {
    id: 'q-pnm-5-24',
    courseId: 'crs-pneumo-5',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. L'étude algérienne de Khelafi & Skander (2011) a montré que :",
    options: [
      "a) La prévalence de la BPCO était plus élevée chez les femmes.",
      "b) Un tiers des patients étaient asymptomatiques.",
      "c) La prévalence augmentait fortement avec l'âge.",
      "d) La prédominance masculine reflétait les habitudes tabagiques.",
      "e) La prévalence avant 40 ans était d'environ 10%."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : b, c, d.\n*Explication : Cette étude historique a souligné le sous-diagnostic (b), la corrélation avec l'âge (c : 0.1% avant 40 ans, 13.8% après 65 ans) et le lien avec le tabagisme masculin (d : 16.1% H vs 2.5% F). La prévalence avant 40 ans était très basse (0.1%, e faux).*"
  },
  {
    id: 'q-pnm-5-25',
    courseId: 'crs-pneumo-5',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Dans la BPCO stable, l'activité physique est :",
    options: [
      "a) Contre-indiquée en cas de dyspnée.",
      "b) Recommandée à tous les stades de la maladie.",
      "c) Un équivalent de la réhabilitation respiratoire structurée.",
      "d) Un moyen de lutter contre la fonte musculaire.",
      "e) Sans bénéfice prouvé."
    ],
    correctAnswers: [1, 3],
    explanation: "Correction : b, d.\nExplication : L'activité physique adaptée et régulière est recommandée pour tous (b) car elle aide à maintenir la masse et la fonction musculaires, luttant contre la cachexie (d). Elle est différente d'un programme supervisé de réhabilitation (c faux). La dyspnée n'est pas une contre-indication, mais doit guider l'adaptation de l'effort (a faux). Ses bénéfices sont établis (e faux).*"
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-5-c1-1',
    courseId: 'crs-pneumo-5',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Suspicion diagnostique\nM. Ahmed, 58 ans, menuisier, fumeur à 40 PA. Consulte pour une toux grasse matinale et un essoufflement à la montée des escaliers (2 étages) apparus progressivement depuis 2 ans. Il attribue cela à l'âge. Aucun antécédent notable.\n\nQ1. Quelle est la première hypothèse diagnostique à évoquer ?",
    options: [
      "a) Asthme de l'adulte.",
      "b) Bronchopneumopathie chronique obstructive (BPCO).",
      "c) Insuffisance cardiaque gauche.",
      "d) Tuberculose pulmonaire.",
      "e) Cancer bronchique."
    ],
    correctAnswers: [1],
    explanation: "Correction Cas 1 - Q1 : b. La combinaison tabagisme important, symptômes respiratoires chroniques (toux, dyspnée) d'installation insidieuse chez un homme d'âge mûr est très évocatrice de BPCO. Il faut systématiquement l'évoquer devant ce tableau."
  },
  {
    id: 'q-pnm-5-c1-2',
    courseId: 'crs-pneumo-5',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : Quel est l'examen clé à demander en première intention pour confirmer votre suspicion ?",
    options: [
      "a) Radiographie thoracique.",
      "b) Scanner thoracique.",
      "c) Spirométrie avec test de réversibilité.",
      "d) Épreuves fonctionnelles respiratoires complètes (pléthysmographie).",
      "e) Dosage des IgE."
    ],
    correctAnswers: [2],
    explanation: "Correction Cas 1 - Q2 : c. La spirométrie simple avec test de réversibilité est l'examen de première intention, accessible et suffisant pour poser le diagnostic d'obstruction non complètement réversible. Les autres examens sont complémentaires et ne remplacent pas la spirométrie."
  },
  {
    id: 'q-pnm-5-c2-1',
    courseId: 'crs-pneumo-5',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Classification et traitement initial\nMme Fatima, 65 ans, non fumeuse, utilise du bois pour la cuisine. Dyspnée stade 3 mMRC, CAT=22. Elle a eu 1 exacerbation modérée traitée aux corticoïdes oraux en ambulatoire l'année dernière. Spirométrie : VEMS/CVF=0,62 ; VEMS=68% théorique.\n\nQ1. Selon la classification GOLD ABE 2024, elle est :",
    options: [
      "a) Groupe A (VEMS GOLD 2, symptômes faibles, risque faible).",
      "b) Groupe B (symptômes élevés, risque faible).",
      "c) Groupe E (risque élevé).",
      "d) GOLD 2 modérée.",
      "e) Groupe B (VEMS GOLD 2, symptômes élevés)."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction Cas 2 - Q1 : b, e. VEMS 68% = GOLD 2 (d). Symptômes élevés (mMRC≥2, CAT≥10). Risque faible (1 exacerbation modérée). Donc Groupe B (b et e correctes). Le Groupe E nécessite un risque élevé (≥2 exacerbs modérés ou ≥1 sévère)."
  },
  {
    id: 'q-pnm-5-c2-2',
    courseId: 'crs-pneumo-5',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : Quel est le traitement pharmacologique de fond initial le plus approprié ?",
    options: [
      "a) LAMA seul.",
      "b) LABA seul.",
      "c) Association fixe LABA + LAMA.",
      "d) Association LABA + CSI.",
      "e) Triple thérapie LABA+LAMA+CSI."
    ],
    correctAnswers: [2],
    explanation: "Correction Cas 2 - Q2 : c. Pour le Groupe B, le traitement de première intention est une association de deux bronchodilatateurs de longue durée d'action (LAMA+LABA) pour mieux contrôler les symptômes. La monothérapie (a, b) est pour le Groupe A. Les CSI ne sont pas indiqués ici en première ligne (d, e)."
  },
  {
    id: 'q-pnm-5-c3-1',
    courseId: 'crs-pneumo-5',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Exacerbateur avec phénotype particulier\nM. Karim, 70 ans, GOLD 3, ancien fumeur. Hospitalisé 2 fois l'an dernier pour exacerbations. Sous LABA+LAMA. Dyspnée stable mMRC=2, CAT=15. NFS : Éosinophiles = 420/mm³.\n\nQ1. Quel est son groupe GOLD ABE et quelle caractéristique phénotypique notable présente-t-il ?",
    options: [
      "a) Groupe B, phénotype emphysémateux.",
      "b) Groupe E, phénotype bronchitique chronique.",
      "c) Groupe E, phénotype à éosinophilie élevée.",
      "d) Groupe A, phénotype exacerbateur.",
      "e) Groupe B, phénotype à comorbidités."
    ],
    correctAnswers: [2],
    explanation: "Correction Cas 3 - Q1 : c. Risque élevé (≥1 hospitalisation) + symptômes élevés = Groupe E. Une éosinophilie ≥300/mm³ définit un phénotype \"éosinophilique\", associé à un meilleur réponse aux CSI."
  },
  {
    id: 'q-pnm-5-c3-2',
    courseId: 'crs-pneumo-5',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 (suite) : Quelle modification thérapeutique est la plus justifiée ?",
    options: [
      "a) Ajouter un corticoïde inhalé (CSI) à son association actuelle.",
      "b) Passer à un LAMA seul.",
      "c) Ajouter un antibiotique au long cours.",
      "d) Introduire un mucolytique.",
      "e) Remplacer le LABA+LAMA par un CSI seul."
    ],
    correctAnswers: [0],
    explanation: "Correction Cas 3 - Q2 : a. Chez un patient Groupe E avec éosinophilie ≥300/mm³, l'ajout d'un CSI à l'association LABA+LAMA (passage à la triple thérapie) est recommandé pour réduire le risque d'exacerbations futures. C'est l'implication pratique directe du phénotypage."
  },
  {
    id: 'q-pnm-5-c4-1',
    courseId: 'crs-pneumo-5',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Stade avancé et complications\nM. Said, 72 ans, BPCO GOLD 4, sous triple thérapie. Adressé pour aggravation de la dyspnée au repos. Gaz du sang à l'air ambiant : pH=7,38 ; PaO2=50 mmHg ; PaCO2=55 mmHg ; SaO2=85%.\n\nQ1. Quelle complication est au premier plan ?",
    options: [
      "a) Exacerbation aiguë hypercapnique.",
      "b) Insuffisance respiratoire chronique hypoxémique.",
      "c) Acidose métabolique.",
      "d) Épanchement pleural.",
      "e) Embolie pulmonaire."
    ],
    correctAnswers: [1],
    explanation: "Correction Cas 4 - Q1 : b. Le gaz du sang montre une hypoxémie sévère (PaO2<55mmHg) avec hypercapnie modérée compensée (pH normal) en état stable, définissant une insuffisance respiratoire chronique hypoxémiante (et hypercapnique). Ce n'est pas une exacerbation aiguë (pH serait <7.35)."
  },
  {
    id: 'q-pnm-5-c4-2',
    courseId: 'crs-pneumo-5',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 (suite) : Quel traitement de fond non pharmacologique doit être instauré de manière prioritaire ?",
    options: [
      "a) Ventilation Non Invasive (VNI) immédiate.",
      "b) Oxygénothérapie de Longue Durée (OLD).",
      "c) Réhabilitation respiratoire en urgence.",
      "d) Drainage pleural.",
      "e) Anticoagulation curative."
    ],
    correctAnswers: [1],
    explanation: "Correction Cas 4 - Q2 : b. L'OLD est indiquée de principe ici (PaO2<55 mmHg). Elle doit être prescrite pour au moins 15h/jour. La VNI (a) se discute pour l'hypercapnie, mais l'OLD est la priorité première. La réhabilitation (c) est importante mais pas en \"urgence\"."
  },
  {
    id: 'q-pnm-5-c5-1',
    courseId: 'crs-pneumo-5',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Prévention et prise en charge globale\nPour un patient BPCO Groupe B, stable, que conseillez-vous en dehors du traitement pharmacologique ? (Plusieurs réponses possibles)",
    options: [
      "a) Arrêt impératif du tabac si fumeur.",
      "b) Vaccination annuelle contre la grippe.",
      "c) Vaccination anti-pneumococcique selon schéma.",
      "d) Prescription systématique d'antibiotiques en continu.",
      "e) Encouragement à une activité physique régulière adaptée."
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction Cas 5 : a, b, c, e.\nExplication : La prise en charge non pharmacologique est fondamentale. L'arrêt du tabac (a) est prioritaire. Les vaccinations (b, c) préviennent les infections, principales causes d'exacerbation. L'activité physique (e) lutte contre la déconditionnement. Les antibiotiques au long cours (d) ne sont pas recommandés en routine, sauf dans des cas très spécifiques (bronchectasies associées, exacerbations très fréquentes)."
  }
];

export const PNEUMO_LESSON_5_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-5-mindmap',
    courseId: 'crs-pneumo-5',
    type: 'Resume',
    title: 'Carte Mentale : BPCO (Pr ALIHALASSA)',
    contentMarkdown: `### BPCO (Maladie Systémique & Obstructive)

├── **ÉPIDÉMIOLOGIE**
│   ├── 3e cause mortalité mondiale
│   ├── Prévalence Algérie ~10% (sous-estimée)
│   └── Facteurs de risque : Tabac (Hommes), Biomasse (Femmes non-fumeuses)
│
├── **DIAGNOSTIC**
│   ├── CLINIQUE : Toux grasse, dyspnée d'effort d'installation insidieuse
│   ├── SPIROMÉTRIE : VEMS/CVF < 0,70 post-BD (TVO persistant)
│   ├── Sévérité GOLD I-IV (VEMS post-BD) :
│   │   ├── GOLD 1 (Léger) : VEMS ≥ 80%
│   │   ├── GOLD 2 (Modéré) : 50% ≤ VEMS < 80%
│   │   ├── GOLD 3 (Sévère) : 30% ≤ VEMS < 50%
│   │   └── GOLD 4 (Très sévère) : VEMS < 30% (ou < 50% + IRC)
│   └── Groupes ABE (GOLD 2024/2025) :
│       ├── **A** : Faibles symptômes (mMRC<2, CAT<10), Faible Risque (0-1 exac modérée)
│       ├── **B** : Symptômes élevés (mMRC≥2, CAT≥10), Faible Risque (0-1 exac modérée)
│       └── **E** : Risque Élevé (≥2 exac modérées OU ≥1 hospitalisation)
│
├── **COMORBIDITÉS SYSTÉMIQUES**
│   └── Cardiovasculaires, fonte musculaire, ostéoporose, anxiété/dépression, diabète
│
└── **PRISE EN CHARGE**
    ├── **Non Pharmacologique (Fondamental)** :
    │   ├── Arrêt TABAC (#1 pour ralentir déclin VEMS)
    │   ├── Vaccinations (Grippe annuelle, Pneumocoque, COVID)
    │   ├── Réhabilitation respiratoire (Groupes B & E)
    │   └── Activité physique régulière adaptée
    ├── **Pharmacologique par Groupe** :
    │   ├── **Groupe A** : 1 Bronchodilatateur longue durée (LAMA ou LABA)
    │   ├── **Groupe B** : Bithérapie fixe LAMA + LABA
    │   └── **Groupe E** : LAMA + LABA (+ CSI si éosinophiles ≥ 300/mm³)
    └── **Traitements Avancés** :
        ├── **OLD** : PaO2 ≤ 55 mmHg (ou 56-59 si HTAP, polyglobulie, cœur pulmonaire)
        ├── **VNI** : Hypercapnie persistante diurne (>45-50 mmHg)
        └── Chirurgie réduction de volume / Transplantation (très sélectionnés)`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'BPCO', 'GOLD 2024', 'Pr ALIHALASSA']
  },
  {
    id: 'res-pnm-5-astuces',
    courseId: 'crs-pneumo-5',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques : BPCO',
    contentMarkdown: `### Astuces et Mnémotechniques
1. **Diagnostic Spiro : "70 Ferme la Boîte"** → Le seuil VEMS/CVF < 0,70 post-bronchodilatateur "ferme" le diagnostic de TVO persistant.
2. **Groupes ABE : "A Bas, B Bouche, E Explose"**
   - **A** : Tout est Bas (symptômes bas, risque bas).
   - **B** : La Bouche est pleine de plaintes (symptômes élevés) mais risque bas.
   - **E** : Tout Explose (risque d'exacerbations élevé).
3. **Traitement par Groupe : "1 pour A, 2 pour B, 2+ pour E si Poils"**
   - **A** : 1 bronchodilatateur (LAMA ou LABA).
   - **B** : 2 bronchodilatateurs (LAMA+LABA).
   - **E** : 2 bronchodilatateurs + 1 CSI (si "poils" = éosinophiles ≥ 300).
4. **Indication OLD : "55-60 avec des si"**
   - OLD si PaO2 ≤ 55 mmHg.
   - OLD si PaO2 56-59 mmHg si + un des 3 : Polyglobulie (Ht>55%), HTAP, Œdèmes/SAS.
5. **Place des CSI : "Pas de cortisone sans raison (Eos ou Exacerbs)"** → Les corticoïdes inhalés ne se justifient que chez les exacerbateurs (Groupe E), surtout avec éosinophilie.

---
*Allez, courage futur collègue ! Maîtrisez ces bases, entraînez-vous sur ces cas, et vous transformerez la complexité de la BPCO en points précieux le jour J. La réussite est au bout de l'effort, et chaque notion assimilée est un futur souffle que vous rendrez à un patient. Vous en êtes capable !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'BPCO', 'Astuces']
  }
];
