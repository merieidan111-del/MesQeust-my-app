import { Question, CourseResource } from '../../types/medical';

// Lesson 8: les Pneumoconioses
export const PNEUMO_LESSON_8_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-8-01',
    courseId: 'crs-pneumo-8',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q1. Une patiente de 55 ans, ancienne travailleuse dans une fonderie pendant 20 ans, présente une dyspnée d'effort progressive et une toux sèche. La radiographie thoracique montre des opacités micronodulaires prédominant aux régions supérieures des champs pulmonaires. La lésion histologique élémentaire attendue est :",
    options: [
      "a) Une inflammation granulomateuse caséeuse.",
      "b) Une dilatation des bronches avec inflammation.",
      "c) Un nodule fibro-hyalin.",
      "d) Des macrophages chargés de pigments ferriques.",
      "e) Des dépôts amyloïdes alvéolaires."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) La silicose, liée à l'inhalation de silice cristalline, se caractérise histologiquement par la formation de nodules fibro-hyalins dans l'interstitium pulmonaire. Ces nodules résultent de la stimulation des fibroblastes et de l'hyperproduction de collagène suite à la lyse des macrophages alvéolaires."
  },
  {
    id: 'q-pnm-8-02',
    courseId: 'crs-pneumo-8',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q2. Parmi les mesures de prévention technique primaire des pneumoconioses, laquelle est la PLUS efficace ?",
    options: [
      "a) Examen radiologique annuel.",
      "b) Travail en atmosphère humide.",
      "c) Vaccination anti-pneumococcique.",
      "d) Port systématique d'un masque chirurgical.",
      "e) Traitement précoce par corticoïdes inhalés."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) La prévention technique vise à réduire l'émission de poussières à la source. Le travail en atmosphère humide est une mesure d'ingénierie efficace pour empêcher la mise en suspension des poussières. Le masque (d) est une protection individuelle, moins efficace qu'une mesure collective."
  },
  {
    id: 'q-pnm-8-03',
    courseId: 'crs-pneumo-8',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q3. Une complication classique de la silicose, favorisant une aggravation rapide, est :",
    options: [
      "a) Le développement d'un asthme professionnel.",
      "b) La surinfection tuberculeuse.",
      "c) L'apparition d'un épanchement pleural exsudatif.",
      "d) Une atélectasie lobaire.",
      "e) Une hypertension artérielle systémique."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) La silicose altère l'immunité cellulaire locale et favorise considérablement la surinfection par Mycobacterium tuberculosis (typique ou atypique). Cette association silicotuberculose est une complication grave et fréquente."
  },
  {
    id: 'q-pnm-8-04',
    courseId: 'crs-pneumo-8',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q4. Le signe radiologique considéré comme pathognomonique de la silicose, mais inconstant, est :",
    options: [
      "a) L'hyperclarté basale (emphysème).",
      "b) Des adénopathies hilaires calcifiées en « coquille d’œuf ».",
      "c) Des opacités alvéolaires bilatérales.",
      "d) Un épaississement pleural apical.",
      "e) Un pneumothorax."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) La calcification périphérique des ganglions lymphatiques hilaires, donnant un aspect en « coquille d’œuf » ou « eggshell calcification », est très évocatrice de la silicose, bien qu'elle ne soit pas toujours présente."
  },
  {
    id: 'q-pnm-8-05',
    courseId: 'crs-pneumo-8',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q5. Concernant l'asbestose, quelle affirmation est VRAIE ?",
    options: [
      "a) L'hippocratisme digital est un signe précoce et constant.",
      "b) Elle se caractérise par une fibrose interstitielle diffuse débutant aux bases.",
      "c) La principale anomalie fonctionnelle est un syndrome obstructif pur.",
      "d) Elle n'est jamais associée à des pathologies pleurales.",
      "e) Le délai d'apparition après exposition est généralement inférieur à 5 ans."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) L'asbestose provoque une fibrose interstitielle diffuse prédominant aux 2/3 inférieurs des poumons. L'hippocratisme (a) est tardif et peu fréquent. Les EFR (c) montrent un syndrome restrictif. Les atteintes pleurales (plaques, pachypleurites) sont classiquement associées."
  },
  {
    id: 'q-pnm-8-06',
    courseId: 'crs-pneumo-8',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q6. Dans les pneumoconioses de surcharge comme la sidérose, le mécanisme principal est :",
    options: [
      "a) Une réaction immunologique à médiation humorale.",
      "b) Une phagocytose des particules sans lyse significative du macrophage.",
      "c) Une production excessive de collagène par les fibroblastes.",
      "d) Une réponse granulomateuse nécrosante.",
      "e) Une atteinte directe de l'épithélium alvéolaire."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Dans les pneumoconioses de surcharge (sidérose), les macrophages alvéolaires phagocytent la poussière de fer sans être lysés, d'où absence ou quasi-absence de fibrose."
  },
  {
    id: 'q-pnm-8-07',
    courseId: 'crs-pneumo-8',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q7. Le tableau de maladie professionnelle n°25 concerne :",
    options: [
      "a) L'asbestose.",
      "b) La silicose.",
      "c) La sidérose.",
      "d) La bérylliose.",
      "e) La byssinose."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Le tableau n°25 des maladies professionnelles concerne la silicose. L'asbestose correspond au tableau n°30."
  },
  {
    id: 'q-pnm-8-08',
    courseId: 'crs-pneumo-8',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q8. Parmi ces professions, laquelle expose principalement à l'asbestose ?",
    options: [
      "a) Mineur de charbon.",
      "b) Constructeur naval.",
      "c) Boulanger.",
      "d) Agriculteur.",
      "e) Soudeur."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) La construction et réparation navale, ainsi que les métiers de calorifugeage et déflocage, sont les secteurs classiques d'exposition massive à l'amiante (asbestose)."
  },
  {
    id: 'q-pnm-8-09',
    courseId: 'crs-pneumo-8',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q9. Dans l'évolution des pneumoconioses sclérogènes, l'exploration fonctionnelle respiratoire (EFR) peut révéler :",
    options: [
      "a) Un trouble ventilatoire obstructif isolé aux stades initiaux.",
      "b) Un trouble ventilatoire mixte (obstructif + restrictif) aux stades avancés.",
      "c) Une augmentation de la capacité de diffusion du CO (TLCO).",
      "d) Une normalité constante malgré les lésions radiologiques.",
      "e) Un syndrome restrictif pur dès le début."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Les EFR peuvent montrer aux stades avancés un trouble ventilatoire mixte associant restriction (fibrose) et obstruction (distorsion/emphysème)."
  },
  {
    id: 'q-pnm-8-10',
    courseId: 'crs-pneumo-8',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q10. La mesure de prévention médicale la plus importante pour le dépistage des pneumoconioses est :",
    options: [
      "a) La spirométrie annuelle.",
      "b) La radiographie thoracique périodique systématique.",
      "c) Le dosage sérique des anticorps antinucléaires.",
      "d) Le scanner thoracique à chaque visite.",
      "e) L'échographie pleurale."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) La radiographie thoracique périodique systématique reste la mesure de référence en médecine du travail pour le dépistage précoce des opacités pneumoconiotiques selon la classification BIT."
  },
  {
    id: 'q-pnm-8-11',
    courseId: 'crs-pneumo-8',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q11. Dans la physiopathologie de la silicose, quel est le rôle principal du macrophage alvéolaire ?",
    options: [
      "a) Produire directement des fibres de collagène.",
      "b) Neutraliser la silice par des enzymes spécifiques.",
      "c) Phagocyter la particule de silice, puis être lysé, déclenchant une réaction inflammatoire et fibrosante.",
      "d) Migrer vers les ganglions lymphatiques pour induire une tolérance immunitaire.",
      "e) Transformer la silice cristalline en silice amorphe non toxique."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) La silice cristalline est phagocytée par le macrophage alvéolaire. Sa toxicité intracellulaire entraîne la lyse de ce macrophage, libérant des enzymes lysosomiales et cytokines pro-fibrosantes qui stimulent les fibroblastes."
  },
  {
    id: 'q-pnm-8-12',
    courseId: 'crs-pneumo-8',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q12. Le syndrome de Caplan-Collinet associe :",
    options: [
      "a) Silicose et sarcoïdose.",
      "b) Asbestose et polyarthrite rhumatoïde.",
      "c) Silicose et polyarthrite rhumatoïde.",
      "d) Sidérose et lupus érythémateux disséminé.",
      "e) Bérylliose et sclérodermie."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Le syndrome de Caplan-Collinet est une entité spécifique caractérisée par l'association d'une silicose (ou pneumoconiose du charbon) et d'une polyarthrite rhumatoïde, avec nodules pulmonaires volumineux à évolution rapide."
  },
  {
    id: 'q-pnm-8-13',
    courseId: 'crs-pneumo-8',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q13. Concernant les explorations fonctionnelles respiratoires (EFR) dans l'asbestose, on observe typiquement :",
    options: [
      "a) Un syndrome obstructif avec augmentation de la capacité résiduelle fonctionnelle (CRF).",
      "b) Un syndrome restrictif avec diminution de la capacité pulmonaire totale (CPT) et de la DLCO.",
      "c) Un trouble ventilatoire restrictif isolé sans anomalie des échanges gazeux.",
      "d) Une réponse positive au test de réversibilité aux bronchodilatateurs.",
      "e) Une augmentation de la capacité vitale (CV)."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) L'asbestose, étant une fibrose interstitielle diffuse des bases, engendre principalement un syndrome restrictif (diminution de la CPT, de la CV) associé à une altération de la diffusion alvéolo-capillaire (baisse DLCO)."
  },
  {
    id: 'q-pnm-8-14',
    courseId: 'crs-pneumo-8',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q14. Le délai de prise en charge pour la silicose, dans le cadre du tableau des maladies professionnelles, est de :",
    options: [
      "a) 5 ans après la première exposition.",
      "b) 1 an après les premiers symptômes.",
      "c) 15 ans après la fin de l'exposition.",
      "d) 30 ans après le début de l'exposition.",
      "e) Il n'y a pas de délai imposé."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Pour pouvoir être reconnue et indemnisée comme maladie professionnelle, la silicose doit être déclarée dans un délai fixé à 15 ans après la cessation d'exposition au risque par le tableau n°25."
  },
  {
    id: 'q-pnm-8-15',
    courseId: 'crs-pneumo-8',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q15. Quel est l'élément clinique qui n'est PAS caractéristique du tableau de la silicose simple ?",
    options: [
      "a) Dyspnée d'effort d'aggravation progressive.",
      "b) Toux et expectoration chroniques.",
      "c) Râles crépitants diffus précoces.",
      "d) Altération tardive de l'état général.",
      "e) Douleurs thoraciques."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Les râles crépitants ne font pas partie du tableau classique de la silicose simple. Ils sont en revanche un signe précoce et fréquent dans l'asbestose (crépitants secs aux bases)."
  },
  {
    id: 'q-pnm-8-16',
    courseId: 'crs-pneumo-8',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q16. La prévention technique la plus efficace contre l'asbestose aujourd'hui en Algérie est :",
    options: [
      "a) Le port obligatoire d'un masque FFP2.",
      "b) La vaccination des travailleurs.",
      "c) L'interdiction de l'utilisation et de la fabrication de l'amiante.",
      "d) La rotation fréquente des postes de travail.",
      "e) La prise de médicaments mucolytiques."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) La mesure de prévention primaire la plus radicale et efficace est la suppression du risque à la source : l'interdiction de l'utilisation, fabrication et importation de l'amiante."
  },
  {
    id: 'q-pnm-8-17',
    courseId: 'crs-pneumo-8',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q17. Un mineur de 50 ans présente une insuffisance respiratoire chronique globale, une hypertension artérielle pulmonaire (HTAP) et des signes de défaillance ventriculaire droite. Sur quelle complication évolutive d'une pneumoconiose faut-il surtout penser ?",
    options: [
      "a) Cancer bronchique.",
      "b) Aspergillome.",
      "c) Pneumothorax.",
      "d) Insuffisance respiratoire chronique avec coeur pulmonaire chronique (CPC).",
      "e) Pleurésie aseptique."
    ],
    correctAnswers: [3],
    explanation: "Correction : d) L'évolution naturelle des pneumoconioses fibrosantes sévères conduit à une insuffisance respiratoire chronique avec HTAP pré-capillaire hypoxique, aboutissant au cœur pulmonaire chronique (CPC) et à l'insuffisance ventriculaire droite."
  },
  {
    id: 'q-pnm-8-18',
    courseId: 'crs-pneumo-8',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q18. La présence d'une image radiologique en \"coquille d'œuf\" évoque fortement :",
    options: [
      "a) Une asbestose compliquée d'un mésothéliome.",
      "b) Une silicose avec adénopathies hilaires calcifiées.",
      "c) Une tuberculose ganglionnaire ancienne.",
      "d) Une sarcoïdose stade I.",
      "e) Un lymphome médiastinal."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) L'image en \"coquille d'œuf\" (eggshell calcification) est une calcification périphérique des adénopathies hilaires et médiastinales, quasi-pathognomonique de la silicose."
  },
  {
    id: 'q-pnm-8-19',
    courseId: 'crs-pneumo-8',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q19. Quel est le principal facteur de risque de cancer bronchique dans le contexte des pneumoconioses ?",
    options: [
      "a) La présence d'une fibrose pulmonaire étendue.",
      "b) La coexistence d'un tabagisme, surtout en cas de silicose.",
      "c) L'exposition aux poussières de charbon.",
      "d) L'âge avancé du patient.",
      "e) La présence d'un syndrome restrictif sévère aux EFR."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Bien que la silice soit classée cancérogène groupe 1 par le CIRC, le risque de cancer broncho-pulmonaire est considérablement majoré par l'effet synergique avec le tabagisme."
  },
  {
    id: 'q-pnm-8-20',
    courseId: 'crs-pneumo-8',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q20. Lors de la déclaration d'une maladie professionnelle pour pneumoconiose, le certificat médical initial est adressé par le médecin :",
    options: [
      "a) À la sécurité sociale (caisse d'assurance maladie) du patient.",
      "b) Directement au médecin inspecteur du travail.",
      "c) À l'employeur de la patient.",
      "d) Au médecin expert désigné par le tribunal.",
      "e) À la famille du patient."
    ],
    correctAnswers: [0],
    explanation: "Correction : a) La démarche incombe au travailleur qui transmet le certificat médical initial descriptif à sa Caisse de Sécurité Sociale (CPAS/CNAS) pour engager la procédure de reconnaissance médico-légale."
  },
  {
    id: 'q-pnm-8-21',
    courseId: 'crs-pneumo-8',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q21. Quelle taille de particule est principalement responsable des lésions alvéolaires dans les pneumoconioses ?",
    options: [
      "a) > 10 micromètres.",
      "b) Entre 5 et 10 micromètres.",
      "c) < 5 micromètres (et surtout < 1 µm pour atteindre les alvéoles).",
      "d) Toutes les tailles, sans distinction.",
      "e) Particules visibles à l'oeil nu."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Seules les particules respirables de diamètre aérodynamique < 5 µm (et surtout < 1 µm) franchissent les voies aériennes supérieures pour pénétrer dans les alvéoles pulmonaires."
  },
  {
    id: 'q-pnm-8-22',
    courseId: 'crs-pneumo-8',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q22. La principale différence physiopathologique entre une pneumoconiose sclérogène (silicose) et une pneumoconiose de surcharge (sidérose) réside dans :",
    options: [
      "a) La durée d'exposition nécessaire.",
      "b) Le type d'industrie concernée.",
      "c) La réponse du macrophage alvéolaire : lyse avec libération de médiateurs fibrosants vs. stockage inerte.",
      "d) La localisation des dépôts dans le poumon.",
      "e) La présence ou non d'adénopathies."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) C'est le point fondamental. Dans les sclérogènes (silicose), la particule détruit le macrophage (lyse), déclenchant la fibrose. Dans les de surcharge (sidérose), la particule est inerte, le macrophage la stocke sans lyse majeure."
  },
  {
    id: 'q-pnm-8-23',
    courseId: 'crs-pneumo-8',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q23. Un travailleur du bâtiment exposé à l'amiante est le plus à risque de développer, à long terme, un :",
    options: [
      "a) Adénocarcinome gastrique.",
      "b) Mésothéliome pleural malin.",
      "c) Cancer de la vessie.",
      "d) Leucémie myéloïde aiguë.",
      "e) Carcinome hépatocellulaire."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) L'amiante est le facteur étiologique majeur du mésothéliome pleural malin, un cancer primitif de la plèvre très agressif."
  },
  {
    id: 'q-pnm-8-24',
    courseId: 'crs-pneumo-8',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q24. Dans le bilan d'une pneumoconiose, l'intérêt principal des EFR est de :",
    options: [
      "a) Poser le diagnostic étiologique.",
      "b) Évaluer objectivement le retentissement fonctionnel et le préjudice.",
      "c) Suivre l'efficacité d'un traitement spécifique.",
      "d) Dépister précocement la maladie avant l'apparition des images radiologiques.",
      "e) Déterminer le type de particule inhalée."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Les EFR ne posent pas le diagnostic étiologique (qui est radio-clinique et professionnel). Elles quantifient le retentissement respiratoire (handicap, IPP) pour le suivi et l'indemnisation médico-légale."
  },
  {
    id: 'q-pnm-8-25',
    courseId: 'crs-pneumo-8',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Q25. Quelle affirmation concernant la prévention médicale des pneumoconioses est FAUSSE ?",
    options: [
      "a) Elle comprend une visite médicale d'embauche avec radiographie thoracique.",
      "b) Elle recommande des examens périodiques pour un dépistage précoce.",
      "c) Elle vise à détecter des contre-indications à l'exposition (comme une tuberculose active).",
      "d) Elle peut guérir la maladie si elle est détectée à un stade très précoce.",
      "e) Elle est complémentaire et indissociable de la prévention technique."
    ],
    correctAnswers: [3],
    explanation: "Correction : d) C'est l'affirmation fausse. Aucune mesure médicale ne peut guérir une pneumoconiose constituée, car les lésions de fibrose sont irréversibles et définitives."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-8-c1-1',
    courseId: 'crs-pneumo-8',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 : M. Kada, 58 ans, a travaillé 25 ans comme tailleur de pierre. Il consulte pour une dyspnée devenue permanente, une toux grasse matinale et une asthénie. La radiographie montre des opacités nodulaires bilatérales aux champs supérieurs et une hyperclarté basale. Les EFR objectivent un syndrome obstructif.\n\nQ1. Quelle est l'hypothèse diagnostique la plus probable ?",
    options: [
      "a) BPCO tabagique.",
      "b) Sarcoïdose.",
      "c) Silicose compliquée d'emphysème.",
      "d) Tuberculose pulmonaire active.",
      "e) Insuffisance cardiaque gauche."
    ],
    correctAnswers: [2],
    explanation: "Explication : L'exposition longue à la silice (tailleur de pierre), la radiographie typique (nodules supérieurs, emphysème basale) et le syndrome obstructif orientent vers une silicose évoluée."
  },
  {
    id: 'q-pnm-8-c1-2',
    courseId: 'crs-pneumo-8',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 1 (suite) : Quelle complication doit-on rechercher en priorité devant une aggravation récente ?",
    options: [
      "a) Une surinfection tuberculeuse.",
      "b) Un pneumothorax.",
      "c) Une embolie pulmonaire.",
      "d) Une pneumopathie interstitielle aiguë.",
      "e) Un cancer de la plèvre."
    ],
    correctAnswers: [0],
    explanation: "Explication : La silicose est un terrain à haut risque de tuberculose. Toute aggravation respiratoire, fièvre ou altération de l'état général doit faire évoquer en premier lieu une silicotuberculose."
  },
  {
    id: 'q-pnm-8-c2-1',
    courseId: 'crs-pneumo-8',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 : Mme Leïla, 62 ans, ancienne ouvrière dans une usine de plaques en amiante-ciment pendant 18 ans, présente une dyspnée d'effort invalidante et des râles crépitants aux bases. Le scanner thoracique révèle une fibrose interstitielle basale, des plaques pleurales calcifiées bilatérales et un épaississement pleural.\n\nQ1. Quel diagnostic associe ces lésions pulmonaires et pleurales ?",
    options: [
      "a) Silicose.",
      "b) Asbestose avec atteinte pleurale.",
      "c) Insuffisance cardiaque chronique.",
      "d) Fibrose pulmonaire idiopathique.",
      "e) Histiocytose langerhansienne."
    ],
    correctAnswers: [1],
    explanation: "Explication : L'exposition à l'amiante est le facteur étiologique clé. L'association d'une fibrose pulmonaire interstitielle basale et de plaques pleurales (souvent calcifiées) est très caractéristique de l'exposition à l'amiante (asbestose)."
  },
  {
    id: 'q-pnm-8-c2-2',
    courseId: 'crs-pneumo-8',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 2 (suite) : Quel suivi spécifique est indispensable pour cette patiente ?",
    options: [
      "a) Echocardiographie annuelle.",
      "b) Surveillance rapprochée pour détecter un mésothéliome pleural.",
      "c) Lavage broncho-alvéolaire annuel.",
      "d) Dosage des anticorps antinucléaires.",
      "e) IRM cérébrale."
    ],
    correctAnswers: [1],
    explanation: "Explication : L'exposition à l'amiante est le principal facteur de risque de mésothéliome pleural malin, dont le pronostic est sombre. Une vigilance clinique (douleurs thoraciques, épanchement) et radiologique est obligatoire."
  },
  {
    id: 'q-pnm-8-c3-1',
    courseId: 'crs-pneumo-8',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 : M. Ali, 48 ans, soudeur dans un chantier naval depuis 22 ans, est adressé par la médecine du travail pour une radio thoracique de dépistage anormale. Il est asymptomatique. Le cliché montre de discrètes opacités réticulées aux bases. Les EFR sont strictement normales.\n\nQ1. Quelle est la démarche IMMÉDIATE la plus appropriée ?",
    options: [
      "a) Débuter un traitement par corticoïdes inhalés.",
      "b) Prescrire un scanner thoracique haute résolution pour caractériser les lésions.",
      "c) Réaliser des tests cutanés à la tuberculine.",
      "d) Rechercher activement les antécédents d'exposition à l'amiante (travaux d'isolation, flocage).",
      "e) Proposer une bronchoscopie avec lavage broncho-alvéolaire."
    ],
    correctAnswers: [3],
    explanation: "Correction : d) Le contexte (soudeur en chantier naval, lésions basales) doit faire évoquer en premier lieu une exposition à l'amiante, fréquente dans ce milieu. La première étape est un interrogatoire professionnel approfondi pour confirmer ou infirmer cette exposition. Un scanner (b) viendra après."
  },
  {
    id: 'q-pnm-8-c3-2',
    courseId: 'crs-pneumo-8',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 3 (suite) : Si l'exposition à l'amiante est confirmée, quel est le pronostic de ces lésions infra-cliniques ?",
    options: [
      "a) Régressives à l'arrêt de l'exposition.",
      "b) Stables dans tous les cas.",
      "c) Potentiellement évolutives vers une fibrose (asbestose) même après l'arrêt de l'exposition.",
      "d) Nécessitant un traitement immunosuppresseur pour stabilisation.",
      "e) Spécifiques d'un cancer débutant."
    ],
    correctAnswers: [2],
    explanation: "Correction : c) L'une des particularités de l'asbestose (et d'autres fibroses) est son potentiel d'évolution progressive même après la fin de l'exposition au risque. Les lésions initiales peuvent s'aggraver avec le temps, justifiant un suivi médical et radiologique à vie."
  },
  {
    id: 'q-pnm-8-c4-1',
    courseId: 'crs-pneumo-8',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 4 : Une radiographie thoracique systématique chez un retraité de 70 ans, ancien mineur de fer, révèle d'innombrables micronodules hyperdenses, très denses (\"en tempête de neige\"), répartis dans l'ensemble des deux champs pulmonaires. Le patient rapporte une légère dyspnée à l'effort important. Les EFR montrent des volumes normaux.\n\nQ1. Quelle pneumoconiose est la plus probable devant cette imagerie ?",
    options: [
      "a) Silicose.",
      "b) Sidérose (pneumoconiose du mineur de fer).",
      "c) Asbestose.",
      "d) Bérylliose.",
      "e) Talcose."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Le tableau est très évocateur d'une sidérose. L'exposition aux poussières de fer (mine de fer) et l'aspect radiologique typique de micronodules très denses et diffus (\"poumon en tempête de neige\") sont caractéristiques. C'est une pneumoconiose de surcharge sans réaction fibrotique majeure."
  },
  {
    id: 'q-pnm-8-c4-2',
    courseId: 'crs-pneumo-8',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 4 (suite) : Quelle est la principale mesure à prendre pour ce patient ?",
    options: [
      "a) Instaurer un traitement antifibrotique.",
      "b) S'assurer de l'absence de co-exposition à la silice (rechercher une sidéro-silicose).",
      "c) Débuter une corticothérapie orale.",
      "d) Proposer une greffe pulmonaire.",
      "e) Mettre en route une chimiothérapie préventive."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Dans les mines, l'exposition est rarement à une poussière pure. Il faut systématiquement rechercher une co-exposition à la silice, qui transformerait le tableau en sidéro-silicose (pneumoconiose à poussières mixtes), beaucoup plus grave car fibrosante."
  },
  {
    id: 'q-pnm-8-c5-1',
    courseId: 'crs-pneumo-8',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 5 : Un ouvrier de 52 ans, ayant travaillé 18 ans dans le déflocage de vieilles chaudières (isolation à l'amiante), consulte pour une dyspnée d'effort, une toux sèche et des douleurs thoraciques latérales. L'auscultation trouve des râles crépitants fins aux bases. La radio montre un épaississement pleural bilatéral et des opacités linéaires aux bases.\n\nQ1. Quel est le diagnostic le plus complet ?",
    options: [
      "a) Pleurésie bénigne de l'amiante.",
      "b) Asbestose avec plaques pleurales.",
      "c) Silicose aiguë.",
      "d) Mésothéliome pleural.",
      "e) Bronchopneumopathie chronique obstructive (BPCO)."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Le tableau associe des signes de fibrose pulmonaire (dyspnée, râles crépitants basaux, opacités linéaires basales) et des signes d'atteinte pleurale (plaques pleurales) chez un patient fortement exposé à l'amiante : asbestose avec plaques pleurales."
  },
  {
    id: 'q-pnm-8-c5-2',
    courseId: 'crs-pneumo-8',
    questionNumber: 35,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas Clinique 5 (suite) : Quelle est la complication la plus redoutée justifiant une surveillance à vie ?",
    options: [
      "a) Insuffisance respiratoire aiguë.",
      "b) Mésothéliome pleural malin.",
      "c) Tuberculose pulmonaire.",
      "d) Pneumothorax récidivant.",
      "e) Embolie pulmonaire."
    ],
    correctAnswers: [1],
    explanation: "Correction : b) L'exposition à l'amiante, surtout dans des métiers à forte exposition comme le déflocage, confère un risque élevé de développer un mésothéliome pleural malin, cancer agressif persistant des décennies après l'exposition."
  }
];

export const PNEUMO_LESSON_8_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-8-mindmap',
    courseId: 'crs-pneumo-8',
    type: 'Resume',
    title: 'Carte Mentale : Pneumoconioses',
    contentMarkdown: `### PNEUMOCONIOSES

├── **SCLÉROGÈNES (Fibrogènes)**
│   ├── Mécanisme : Lyse du MΦ → Fibrose
│   ├── **SILICOSE (SiO2)** :
│   │   ├── Expo : Mines, BTP, Fonderie
│   │   ├── Radio : Micronodules supérieurs, Adénopathies "coquille d’œuf"
│   │   ├── Complications : Silicotuberculose (+++), Cancer bronchique, IRC + HTAP
│   │   └── Tableau MP : n°25 (Délai prise en charge 15 ans)
│   ├── **ASBESTOSE (Amiante)** :
│   │   ├── Expo : Amiante (Mines, Bâtiment, Navale)
│   │   ├── Radio : Fibrose interstitielle BASALE, Plaques pleurales (calcifiées)
│   │   ├── Complications : Insuffisance Respiratoire, Mésothéliome (Pleural), CPC
│   │   └── Tableau MP : n°30
│   └── Bérylliose
│
├── **DE SURCHARGE**
│   ├── Mécanisme : Phagocytose sans lyse → Pas/peu de fibrose
│   └── Exemple : Sidérose (mineur de fer, opacités en "tempête de neige", fonction préservée)
│
├── **À POUSSIÈRES MIXTES**
│   └── Ex : Sidéro-silicose (beaucoup plus grave car fibrosante)
│
├── **DIAGNOSTIC**
│   1. Exposition professionnelle (interrogatoire détaillé)
│   2. Clinique : Dyspnée (+++), Toux
│   3. Imagerie (Radio/Scanner) : Clef du Dx
│   4. EFR : Évaluer le retentissement (restrictif / mixte)
│   5. Anatomo-patho : Confirmation si besoin
│
└── **TRAITEMENT & PRÉVENTION**
    ├── Traitement : Symptomatique seulement. Pas de traitement spécifique curatif.
    ├── Réparation : Maladie Professionnelle Indemnisable (tableaux n°25 et n°30).
    └── Prévention :
        ├── TECHNIQUE (Primordiale) : Suppression/Substitution, Ventilation, Humidification, Masques adaptés (FFP3).
        └── MÉDICALE : Visite d'embauche (contre-indications), Dépistage radiologique périodique.`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Pneumoconioses', 'Silicose', 'Asbestose']
  },
  {
    id: 'res-pnm-8-astuces',
    courseId: 'crs-pneumo-8',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques : Pneumoconioses',
    contentMarkdown: `### Astuces & Mnémotechniques
• **« SiLICose = Lésions en Haut »** : Les nodules de la silicose prédominent dans les champs pulmonaires supérieurs.
• **« ASBESTOse = Attaque les Bases »** : La fibrose de l'asbestose débute aux bases pulmonaires.
• **« Pour la Silicose, pensez au 25 »** : Le Tableau de Maladie Professionnelle de la silicose est le **n°25**. L'asbestose est le **n°30**.
• **« Les 3 D de l'Exposition »** : La toxicité d'une poussière dépend de la **D**imension (<5µm), de la **D**ose (concentration), et de la **D**urée d'exposition.
• **« Pas de Traitement Spécifique, mais une Réparation Obligatoire »** : À retenir pour l'examen et la pratique : on ne guérit pas la fibrose, mais on doit systématiquement évoquer et déclarer la maladie professionnelle.
• **« Silicose → Tuberculose »** : Associer automatiquement ces deux pathologies devant toute aggravation.

---
*Voilà un arsenal complet pour maîtriser ce chapitre ! Ces maladies, bien que sans traitement curatif, reposent sur une prévention rigoureuse et une reconnaissance médico-légale essentielle pour vos futurs patients. En comprenant la logique d'exposition-lésion-complication, vous serez parés pour l'examen et pour la clinique. Allez, un dernier effort : imaginez chaque point de ce cours comme une brique protégeant les poumons d'un futur travailleur. À vous de les poser avec expertise !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Silicose', 'Asbestose']
  }
];

// Lesson 9: Kyste hydatique
export const PNEUMO_LESSON_9_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-9-01',
    courseId: 'crs-pneumo-9',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "1. L’agent responsable du kyste hydatique pulmonaire est :",
    options: [
      "a) Echinococcus multilocularis",
      "b) Taenia saginata",
      "c) Echinococcus granulosus",
      "d) Ascaris lumbricoides",
      "e) Strongyloides stercoralis"
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Echinococcus granulosus.\nExplication : C’est le tænia adulte de petite taille (4-7 mm) qui vit dans l’intestin grêle du chien. E. multilocularis provoque une forme alvéolaire, différente."
  },
  {
    id: 'q-pnm-9-02',
    courseId: 'crs-pneumo-9',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "2. Le cycle parasitaire implique :",
    options: [
      "a) Le chien comme hôte définitif",
      "b) Le mouton comme hôte intermédiaire habituel",
      "c) L’homme comme hôte intermédiaire accidentel",
      "d) La contamination humaine par ingestion d’œufs",
      "e) La contamination du chien par ingestion de viande crue contaminée"
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    explanation: "Correction : a, b, c, d, e (toutes vraies).\nExplication : C’est un cycle complexe. L’homme se contamine par ingestion d’œufs (crudités, contact avec chien), mais constitue une impasse parasitaire."
  },
  {
    id: 'q-pnm-9-03',
    courseId: 'crs-pneumo-9',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "3. Une image radiologique typique de kyste hydatique pulmonaire « sain » est :",
    options: [
      "a) Opacité ronde à limites floues",
      "b) Opacité ronde dense, homogène, à limites nettes en « boulet de canon »",
      "c) Image cavitaire avec niveau hydro-aérique",
      "d) Opacité triangulaire pleurale",
      "e) Image en « grelot »"
    ],
    correctAnswers: [1],
    explanation: "Correction : b.\nExplication : Le kyste sain est asymptomatique, rond, dense et bien limité. L’image en « grelot » correspond à un kyste vomiqué."
  },
  {
    id: 'q-pnm-9-04',
    courseId: 'crs-pneumo-9',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "4. La vomique hydatique se caractérise par :",
    options: [
      "a) Expectoration purulente abondante",
      "b) Rejet brutal de liquide clair, salé, avec vésicules filles",
      "c) Douleur thoracique aiguë isolée",
      "d) Hémoptysie cataclysmique",
      "e) Parfois associée à un choc anaphylactique"
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : b et e.\nExplication : La vomique est un signe pathognomonique : rejet de liquide hydatique (« eau de roche »), pouvant entraîner un choc par libération antigénique."
  },
  {
    id: 'q-pnm-9-05',
    courseId: 'crs-pneumo-9',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "5. Un pneumokyste correspond à :",
    options: [
      "a) Un kyste rompu dans les bronches avec présence d’air en ménisque",
      "b) Une infection bactérienne surajoutée",
      "c) Un stade radio-clinique du kyste flétri",
      "d) Une image radiologique en « nénuphar »",
      "e) Une complication pleurale"
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : a et c.\nExplication : Le kyste malade peut se rompre partiellement dans les bronches, créant un croissant gazeux supérieur (ménisque)."
  },
  {
    id: 'q-pnm-9-06',
    courseId: 'crs-pneumo-9',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "6. Le diagnostic biologique le plus sensible et spécifique est :",
    options: [
      "a) Numération formule sanguine",
      "b) VS augmentée",
      "c) Test ELISA hydatique",
      "d) Intradermoréaction",
      "e) Sérologie par hémagglutination indirecte"
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : ELISA est plus sensible et spécifique que les autres sérologies (latex, hémagglutination). L’arc 5 en immunodélectrophorèse est aussi spécifique."
  },
  {
    id: 'q-pnm-9-07',
    courseId: 'crs-pneumo-9',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "7. Le traitement curatif de référence du KHP est :",
    options: [
      "a) Albendazole seul",
      "b) Ponction évacuatrice transpariétale",
      "c) Chirurgie (kystectomie, segmentectomie…)",
      "d) Radiothérapie",
      "e) Surveillance simple"
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : La chirurgie est le traitement de base. Les médicaments (albendazole) ont une efficacité limitée et des effets secondaires. La ponction est formellement déconseillée (risque de dissémination)."
  },
  {
    id: 'q-pnm-9-08',
    courseId: 'crs-pneumo-9',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "8. Une rupture pleurale du KHP peut donner :",
    options: [
      "a) Un pyopneumothorax",
      "b) Un hydatido-pneumothorax",
      "c) Un épanchement pleural mixte",
      "d) Une tamponnade péricardique",
      "e) Une détresse respiratoire aiguë"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Correction : a, b, c, e.\nExplication : La rupture dans la plèvre entraîne un épanchement hydatido-pneumothorax, puis surinfection (pyopneumothorax). La rupture péricardique est rare mais mortelle."
  },
  {
    id: 'q-pnm-9-09',
    courseId: 'crs-pneumo-9',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "9. Sur le plan radiologique, un kyste vomiqué peut présenter :",
    options: [
      "a) Une image en « cocarde »",
      "b) Une image en « grelot »",
      "c) Une image en « ballon de rugby »",
      "d) Une image en « double arc d’Ivassinevitch »",
      "e) Des membranes pelotonnées"
    ],
    correctAnswers: [0, 1, 4],
    explanation: "Correction : a, b, e.\nExplication : Le kyste vomiqué donne des images caractéristiques : grelot (croissant gazeux), cocarde (cible), membranes incarcérées. Le ballon de rugby est typique du kyste sain en profil."
  },
  {
    id: 'q-pnm-9-10',
    courseId: 'crs-pneumo-9',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "10. Facteurs de risque d’hydatidose pulmonaire en Algérie :",
    options: [
      "a) Élevage ovin",
      "b) Contact avec des chiens parasités",
      "c) Consommation de viande bovine mal cuite",
      "d) Profession : vétérinaire, boucher",
      "e) Résidence en zone urbaine non endémique"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : a, b, d.\nExplication : C’est une maladie liée au cycle chien-mouton. La contamination humaine se fait par les œufs, pas par la viande."
  },
  {
    id: 'q-pnm-9-11',
    courseId: 'crs-pneumo-9',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "11. Dans le cycle de Echinococcus granulosus, l'homme est considéré comme :",
    options: [
      "a) Un hôte définitif",
      "b) Un hôte intermédiaire habituel",
      "c) Un hôte intermédiaire accidentel",
      "d) Un vecteur",
      "e) Un réservoir"
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Un hôte intermédiaire accidentel.\nExplication : L'homme n'est pas indispensable au cycle de reproduction du parasite. L'infestation est accidentelle et constitue une impasse évolutive, car les formes larvaires ne sont généralement pas ingérées par un hôte définitif."
  },
  {
    id: 'q-pnm-9-12',
    courseId: 'crs-pneumo-9',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "12. L'image radiologique en \"nénuphar\" ou \"coucher de soleil\" est typique de :",
    options: [
      "a) Un kyste hydatique sain",
      "b) Un pneumokyste",
      "c) Un pyopneumokyste",
      "d) Un kyste vomiqué",
      "e) Une rupture pleurale"
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Un pyopneumokyste.\nExplication : Ces images correspondent à la présence de membranes flottantes dans une cavité kystique partiellement remplie de liquide et d'air, suite à une surinfection bactérienne. C'est un signe de complication suppurée."
  },
  {
    id: 'q-pnm-9-13',
    courseId: 'crs-pneumo-9',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "13. Le diagnostic différentiel radiologique d'un kyste hydatique unique peut inclure :",
    options: [
      "a) Un tuberculome",
      "b) Un abcès pulmonaire",
      "c) Un cancer bronchique périphérique",
      "d) Un kyste bronchogénique",
      "e) Une pneumopathie organisée"
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    explanation: "Correction : a, b, c, d, e (toutes vraies).\nExplication : Toutes ces entités peuvent se présenter comme une opacité ronde ou pseudo-ronde sur la radiographie. Le contexte clinique, l'évolution et des examens complémentaires (sérologie, TDM) sont essentiels pour trancher."
  },
  {
    id: 'q-pnm-9-14',
    courseId: 'crs-pneumo-9',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "14. L'échographie abdominale systématique dans le bilan d'un KHP a pour but principal de :",
    options: [
      "a) Éliminer une cirrhose",
      "b) Rechercher une localisation hépatique associée",
      "c) Évaluer la fonction rénale",
      "d) Diagnostiquer une splénomégalie",
      "e) Guider une ponction biopsie"
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Rechercher une localisation hépatique associée.\nExplication : La localisation hépatique est la plus fréquente dans l'hydatidose. Un bilan d'extension est indispensable avant toute décision thérapeutique pour le poumon, car la présence d'un kyste hépatique peut modifier la stratégie (abord chirurgical combiné ou priorité)."
  },
  {
    id: 'q-pnm-9-15',
    courseId: 'crs-pneumo-9',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "15. Le traitement médical par albendazole dans l'hydatidose pulmonaire :",
    options: [
      "a) Est le traitement de première intention",
      "b) Permet d'éviter la chirurgie dans la majorité des cas",
      "c) Est utilisé comme traitement adjuvant péri-opératoire",
      "d) A une efficacité prouvée sur la destruction du parasite",
      "e) Est dénué d'effets secondaires"
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Est utilisé comme traitement adjuvant péri-opératoire.\nExplication : Son efficacité curative isolée est limitée et inconstante. Il est souvent prescrit en péri-opératoire pour diminuer le risque de récidive par dissémination, mais il ne remplace pas la chirurgie. Il possède des effets secondaires hépatiques et hématologiques."
  },
  {
    id: 'q-pnm-9-16',
    courseId: 'crs-pneumo-9',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "16. Une indication de lobectomie pour un KHP pourrait être :",
    options: [
      "a) Un kyste sain de 2 cm chez un enfant",
      "b) Un kyste volumineux rompu et détruisant un lobe",
      "c) Des kystes multiples localisés dans un même lobe",
      "d) Une suspicion de dégénérescence maligne",
      "e) Un pyopneumokyste ne répondant pas aux antibiotiques"
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : b, c, e.\nExplication : La chirurgie conservatrice (kystectomie) est privilégiée. La lobectomie se discute en cas de lésions étendues, destructrices ou compliquées ne permettant pas une exérèse économisant le parenchyme, ou en cas d'échec du traitement médical d'une surinfection."
  },
  {
    id: 'q-pnm-9-17',
    courseId: 'crs-pneumo-9',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "17. La prévention de l'hydatidose repose sur :",
    options: [
      "a) Le déparasitage régulier des chiens",
      "b) L'interdiction de consommation de viande ovine",
      "c) L'éviction des chiens dans les foyers",
      "d) L'éducation sanitaire sur le lavage des mains et des légumes",
      "e) L'incinération des abats infestés"
    ],
    correctAnswers: [0, 3, 4],
    explanation: "Correction : a, d, e.\nExplication : La prévention vise à briser le cycle : traiter les chiens (hôte définitif), éviter qu'ils ne consomment des viscères infestés (incinération), et réduire le risque d'ingestion d'œufs par l'homme (hygiène). L'interdiction de la viande ovine n'est pas justifiée, la cuisson tuant les larves."
  },
  {
    id: 'q-pnm-9-18',
    courseId: 'crs-pneumo-9',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "18. La rupture d'un KHP dans le péricarde :",
    options: [
      "a) Est une complication fréquente",
      "b) Entraîne typiquement une péricardite constrictive à long terme",
      "c) Peut causer une mort subite par tamponnade",
      "d) Se voit surtout pour les kystes du lobe inférieur gauche",
      "e) Donne à la radiographie un élargissement caractéristique du médiastin"
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Correction : c, d, e.\nExplication : C'est une complication rare mais gravissime, souvent mortelle. Les kystes du lobe inférieur gauche sont à risque de rupture intra-péricardique. La radiographie peut montrer un élargissement médiastinal."
  },
  {
    id: 'q-pnm-9-19',
    courseId: 'crs-pneumo-9',
    questionNumber: 19,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "19. Le \"pneumokyste\" se définit par :",
    options: [
      "a) La présence d'air à l'intérieur du kyste",
      "b) Une communication kysto-bronchique",
      "c) Un stade obligatoire avant la vomique",
      "d) Une image radiologique en ménisque gazeux",
      "e) Un signe de surinfection bactérienne"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Correction : a, b, d.\nExplication : Le pneumokyste résulte de la rupture partielle du kyste dans l'arbre bronchique, laissant pénétrer l'air. L'image en croissant gazeux (ménisque) est caractéristique. Ce n'est pas un stade obligatoire et n'implique pas encore la surinfection (celle-ci définit le pyopneumokyste)."
  },
  {
    id: 'q-pnm-9-20',
    courseId: 'crs-pneumo-9',
    questionNumber: 20,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "20. L'image radiologique en \"double arc d'Ivassinevitch\" est :",
    options: [
      "a) Pathognomonique du kyste hydatique",
      "b) Rarement observée",
      "c) Due à la présence des membranes exogènes et endogènes décollées",
      "d) Un signe de kyste vieilli et flétri",
      "e) Évoquée devant deux arcs gazeux superposés"
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : b, c, e.\nExplication : Cette image est rare mais très suggestive. Elle correspond au décollement des membranes périkystique et exogène, créant deux arcs clairs. Elle n'est pas spécifique du kyste vieilli."
  },
  {
    id: 'q-pnm-9-21',
    courseId: 'crs-pneumo-9',
    questionNumber: 21,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "21. En cas de forte suspicion clinique et radiologique de KHP, mais de sérologie négative :",
    options: [
      "a) Le diagnostic est écarté",
      "b) Il faut répéter la sérologie à distance",
      "c) Le diagnostic reste possible (faux négatifs existent)",
      "d) Il faut réaliser une ponction à visée diagnostique",
      "e) On doit privilégier la surveillance"
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : b et c.\nExplication : La sérologie peut être négative dans 10-20% des cas, notamment pour les kystes pulmonaires isolés, intacts ou calcifiés. Il ne faut pas éliminer le diagnostic sur ce seul critère. La répétition du test ou le recours à d'autres techniques (ELISA, arc 5) peut aider. La ponction est contre-indiquée."
  },
  {
    id: 'q-pnm-9-22',
    courseId: 'crs-pneumo-9',
    questionNumber: 22,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "22. L'albendazole agit sur Echinococcus granulosus en :",
    options: [
      "a) Détruisant la membrane germinative",
      "b) Bloquant la synthèse de la chitine",
      "c) Inhibant la prise de glucose par le parasite",
      "d) Provoquant une dégénérescence vacuolaire du protoscolex",
      "e) Stimulant la réponse immune de l'hôte"
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Inhibant la prise de glucose par le parasite.\nExplication : L'albendazole est un anti-helmintique benzimidazolé qui inhibe sélectivement la polymérisation de la tubuline, perturbant ainsi le transport des nutriments comme le glucose, ce qui entraîne la dégénérescence du parasite."
  },
  {
    id: 'q-pnm-9-23',
    courseId: 'crs-pneumo-9',
    questionNumber: 23,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "23. Dans l'étude clinique, le kyste hydatique \"flétri\" :",
    options: [
      "a) Est toujours symptomatique",
      "b) Peut être associé à des hémoptysies de faible abondance",
      "c) Correspond à un stade d'involution naturelle",
      "d) Présente à la radiographie un aspect de pneumokyste",
      "e) Nécessite un traitement chirurgical en urgence"
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : b, c, d.\nExplication : Le kyste flétri ou \"malade\" est un stade d'évolution souvent symptomatique (toux, hémoptysies). Il est caractérisé radiologiquement par le pneumokyste (ménisque gazeux). Ce n'est pas une urgence chirurgicale absolue, mais une indication opératoire planifiée."
  },
  {
    id: 'q-pnm-9-24',
    courseId: 'crs-pneumo-9',
    questionNumber: 24,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "24. L'hydatidose secondaire pulmonaire peut résulter de :",
    options: [
      "a) La rupture d'un kyste hépatique dans les voies biliaires",
      "b) La dissémination par voie hématogène lors de la rupture d'un kyste primitif",
      "c) L'ingestion répétée d'œufs",
      "d) Une contamination directe par un autre patient",
      "e) La fistulisation d'un kyste pleural"
    ],
    correctAnswers: [1],
    explanation: "Correction : b.\nExplication : L'hydatidose secondaire fait référence à l'ensemencement de nouveaux sites (comme le poumon controlatéral ou d'autres organes) par des vésicules filles ou du liquide hydatique libérés lors de la rupture d'un kyste primaire, généralement via la circulation sanguine ou les voies aériennes."
  },
  {
    id: 'q-pnm-9-25',
    courseId: 'crs-pneumo-9',
    questionNumber: 25,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "25. Le bilan préopératoire d'un KHP doit systématiquement inclure :",
    options: [
      "a) Une fibroscopie bronchique",
      "b) Une échocardiographie",
      "c) Une TDM thoracique",
      "d) Une échographie abdominale",
      "e) Des épreuves fonctionnelles respiratoires (EFR)"
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Correction : c, d, e.\nExplication : La TDM précise la lésion et ses rapports. L'échographie abdominale recherche une localisation hépatique associée. Les EFR évaluent la fonction respiratoire en prévision d'une résection pulmonaire. La fibroscopie et l'échocardiographie ne sont pas systématiques mais peuvent être indiquées dans certains cas."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-9-c1-1',
    courseId: 'crs-pneumo-9',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Un enfant de 10 ans, vivant en zone rurale près de Tiaret, présente une toux sèche et une douleur thoracique droite. La radiographie thoracique face et profil montre une opacité ronde, dense, homogène de 6 cm dans le champ moyen droit, bien limitée, avec un aspect en « ballon de rugby » en profil.\n\nQ1. Le diagnostic le plus probable est :",
    options: [
      "a) Tuberculome",
      "b) Kyste hydatique pulmonaire sain",
      "c) Abcès pulmonaire",
      "d) Tumeur bénigne",
      "e) Pneumonie ronde"
    ],
    correctAnswers: [1],
    explanation: "Correction : b.\nExplication : L’aspect radiologique typique (rond + ballon de rugby) chez un enfant en zone d’élevage est très évocateur d’un kyste hydatique sain."
  },
  {
    id: 'q-pnm-9-c1-2',
    courseId: 'crs-pneumo-9',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : La conduite à tenir immédiate inclut :",
    options: [
      "a) Ponction transpariétale à visée diagnostique",
      "b) Traitement médical par albendazole seul",
      "c) Bilan préopératoire (TDM, échographie abdominale, sérologie)",
      "d) Surveillance radiologique simple",
      "e) Chirurgie en urgence"
    ],
    correctAnswers: [2],
    explanation: "Correction : c.\nExplication : Il faut compléter le bilan pour confirmer le diagnostic, rechercher d’autres localisations (foie) et préparer une exérèse chirurgicale élective."
  },
  {
    id: 'q-pnm-9-c2-1',
    courseId: 'crs-pneumo-9',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Un berger de 45 ans se présente aux urgences pour un épisode de toux quinteuse suivie d’un rejet brutal d’environ 200 ml d’un liquide clair, salé, contenant de petites \"grappes transparentes\". Il présente ensuite un prurit généralisé et une sensation de malaise. À l'examen : TA 90/50 mmHg, fréquence cardiaque 110/min, SpO2 96%.\n\nQ1. Le diagnostic évoqué en premier est :",
    options: [
      "a) Hémoptysie sur tuberculose",
      "b) Œdème aigu du poumon",
      "c) Vomique hydatique compliquée de réaction anaphylactique",
      "d) Rupture d’un kyste bronchique",
      "e) Pneumothorax spontané"
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Vomique hydatique compliquée de réaction anaphylactique.\nExplication : La description du liquide (\"eau de roche\", \"grappes\" = vésicules filles) est pathognomonique de la vomique hydatique. L'hypotension et la tachycardie qui suivent évoquent une réaction anaphylactique à la libération du liquide antigénique dans les bronches."
  },
  {
    id: 'q-pnm-9-c2-2',
    courseId: 'crs-pneumo-9',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 (suite) : La prise en charge immédiate doit inclure :",
    options: [
      "a) Oxygénothérapie",
      "b) Mise en condition pour une chirurgie en extrême urgence",
      "c) Réalisation d’une radiographie thoracique en urgence",
      "d) Administration d’adrénaline, corticoides et remplissage vasculaire",
      "e) Ponction pleurale évacuatrice"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Correction : a, c, d.\nExplication : Il faut stabiliser l'état hémodynamique (adrénaline, remplissage), assurer l'oxygénation et confirmer le diagnostic radiologique. La chirurgie n'est pas une urgence immédiate dans ce contexte de rupture, sauf en cas de détresse respiratoire par inondation bronchique massive. La ponction pleurale n'est pas indiquée."
  },
  {
    id: 'q-pnm-9-c3-1',
    courseId: 'crs-pneumo-9',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Une femme de 35 ans, bouillère, consulte pour fièvre à 39°C, toux productive avec expectoration purulente fétide et douleur basithoracique droite depuis 5 jours. La radiographie thoracique montre une opacité arrondie de 8 cm dans le lobe inférieur droit, surmontée d’un large croissant gazeux et présentant un niveau liquide horizontal.\n\nQ1. Le stade évolutif le plus probable est :",
    options: [
      "a) Kyste hydatique sain",
      "b) Pneumokyste",
      "c) Pyo-pneumokyste",
      "d) Kyste vomiqué",
      "e) Hydatidose secondaire"
    ],
    correctAnswers: [2],
    explanation: "Correction : c) Pyo-pneumokyste.\nExplication : La fièvre, l'expectoration purulente et l'image radiologique de niveau hydro-aérique (air + liquide) sur un fond de lésion ronde évoquent une surinfection bactérienne d'un kyste rompu, c'est-à-dire un pyopneumokyste."
  },
  {
    id: 'q-pnm-9-c3-2',
    courseId: 'crs-pneumo-9',
    questionNumber: 31,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 (suite) : Quelle est la séquence thérapeutique la plus appropriée ?",
    options: [
      "a) Antibiothérapie probabiliste large puis chirurgie à froid",
      "b) Chirurgie en urgence dans les 24 heures",
      "c) Traitement médical seul par albendazole et antibiotiques",
      "d) Ponction-drainage transpariétal guidé sous TDM",
      "e) Lobectomie d’emblée sans antibiothérapie préalable"
    ],
    correctAnswers: [0],
    explanation: "Correction : a) Antibiothérapie probabiliste large puis chirurgie à froid.\nExplication : Il faut d'abord contrôler le sepsis par une antibiothérapie adaptée aux germes pyogènes (anaérobies, Gram-). La chirurgie (souvent une résection anatomique comme une lobectomie) est ensuite planifiée, une fois l'état local et général amélioré. La ponction est contre-indiquée."
  },
  {
    id: 'q-pnm-9-c4-1',
    courseId: 'crs-pneumo-9',
    questionNumber: 32,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Un enfant de 8 ans est adressé pour une radiographie pulmonaire systématique avant une cure de hernie. Celle-ci montre deux opacités rondes, bien limitées, de 3 et 5 cm de diamètre, respectivement dans les lobes supérieur droit et inférieur gauche. L'enfant est totalement asymptomatique. L'échographie abdominale est normale.\n\nQ1. Quel est le terme désignant cette présentation ?",
    options: [
      "a) Kyste hydatique unique bilatéral",
      "b) Hydatidose pulmonaire multiple primitive",
      "c) Hydatidose secondaire",
      "d) Métastases pulmonaires",
      "e) Tuberculose miliaire"
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Hydatidose pulmonaire multiple primitive.\nExplication : La présence de plusieurs kystes pulmonaires chez un sujet jeune, sans autre localisation, évoque une infestation primitive multiple (répétée ou par un nombre important d'embryons). L'hydatidose secondaire résulte de la rupture d'un kyste primitif."
  },
  {
    id: 'q-pnm-9-c4-2',
    courseId: 'crs-pneumo-9',
    questionNumber: 33,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 (suite) : Quelle est la stratégie thérapeutique à privilégier ?",
    options: [
      "a) Surveillance radiologique simple",
      "b) Traitement médical par albendazole pendant 6 mois",
      "c) Chirurgie en un temps des deux lésions",
      "d) Chirurgie en deux temps, commençant par le kyste le plus volumineux ou le plus accessible",
      "e) Radiothérapie stéréotaxique"
    ],
    correctAnswers: [3],
    explanation: "Correction : d) Chirurgie en deux temps, commençant par le kyste le plus volumineux ou le plus accessible.\nExplication : Le traitement est chirurgical, mais la résection simultanée de multiples kystes, surtout s'ils sont bilatéraux, peut être trop lourde. On planifie des interventions séquentielles, en commençant souvent par le côté le plus atteint ou la lésion la plus à risque de complication. L'albendazole peut être utilisé en adjuvant."
  },
  {
    id: 'q-pnm-9-c5-1',
    courseId: 'crs-pneumo-9',
    questionNumber: 34,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Un homme de 50 ans, éleveur, opéré il y a 3 mois d'un kyste hydatique du lobe supérieur droit par kystectomie, consulte pour dyspnée et douleur thoracique gauche d'aggravation rapide. La radiographie montre un épanchement pleural gauche de grande abondance avec un niveau hydro-aérique. La ponction pleurale ramène un liquide trouble contenant des membranes hydatiques.\n\nQ1. Quelle est la complication survenue ?",
    options: [
      "a) Récurrence locale du kyste droit",
      "b) Hydatidose secondaire pleurale gauche",
      "c) Empyème pleural commun",
      "d) Rupture d'un nouveau kyste primitif gauche dans la plèvre",
      "e) Fistule broncho-pleurale post-opératoire"
    ],
    correctAnswers: [1],
    explanation: "Correction : b) Hydatidose secondaire pleurale gauche.\nExplication : L'aspect de liquide pleural avec membranes hydatiques est caractéristique d'un épanchement hydatide. Dans ce contexte post-opératoire, il s'agit très probablement d'une dissémination secondaire survenue lors de la première intervention, ayant ensemencé la plèvre controlatérale."
  },
  {
    id: 'q-pnm-9-c5-2',
    courseId: 'crs-pneumo-9',
    questionNumber: 35,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 (suite) : Quel élément du bilan préopératoire initial aurait pu être insuffisant, favorisant cette complication ?",
    options: [
      "a) L'absence de sérologie hydatique",
      "b) L'absence d'échographie abdominale",
      "c) La réalisation d'une kystectomie sans périkystectomie",
      "d) L'absence de traitement médical adjuvant (albendazole) en péri-opératoire",
      "e) La non-réalisation d'une TDM thoracique préopératoire"
    ],
    correctAnswers: [3],
    explanation: "Correction : d) L'absence de traitement médical adjuvant (albendazole) en péri-opératoire.\nExplication : L'albendazole en pré- et post-opératoire vise à réduire le risque de récidive locale et de dissémination secondaire en stérilisant le liquide hydatique et en diminuant la vitalité des protoscolex. Son omission peut favoriser ce type de complication."
  }
];

export const PNEUMO_LESSON_9_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-9-mindmap',
    courseId: 'crs-pneumo-9',
    type: 'Resume',
    title: 'MIND MAP : Kyste Hydatique Pulmonaire (KHP)',
    contentMarkdown: `### Kyste Hydatique Pulmonaire (KHP)

├── **Agent :** Echinococcus granulosus
├── **Cycle :**
│   ├── Définitif : chien (intestin)
│   ├── Intermédiaire : mouton (foie/poumon)
│   └── Accidentel : homme (impasse)
│
├── **Clinique :**
│   ├── Kyste sain : asymptomatique (découverte fortuite)
│   ├── Kyste rompu : vomique (eau de roche), choc anaphylactique
│   ├── Complications : pneumokyste, pyopneumokyste, rupture pleurale/péricardique
│   └── Formes multiples : infestation répétée
│
├── **Diagnostic :**
│   ├── Radiographie (clé) : boulet de canon, ballon de rugby, ménisque gazeux, images en grelot/cocarde
│   ├── TDM : précise l’image
│   ├── Sérologie : ELISA (sensible/spécifique), arc 5
│   └── Échographie abdominale : rechercher un kyste hépatique associé
│
├── **Diagnostic différentiel :**
│   ├── Tuberculome, abcès, cancer, aspergillome
│   └── Principalement radiologique
│
├── **Traitement :**
│   ├── Chirurgical : kystectomie, segmentectomie, lobectomie
│   ├── Médical : albendazole (adjuvant, limité)
│   └── Jamais de ponction évacuatrice
│
└── **Prévention :**
    ├── Contrôle des chiens errants
    ├── Éviter contact chien-bouche
    ├── Hygiène des mains et des aliments
    └── Information en zone endémique`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'KHP', 'Parasitologie', 'Kyste hydatique']
  },
  {
    id: 'res-pnm-9-astuces',
    courseId: 'crs-pneumo-9',
    type: 'Astuce',
    title: 'TRUCS ET MNÉMOTECHNIQUES : KHP',
    contentMarkdown: `### TRUCS ET MNÉMOTECHNIQUES
• **« BCE » pour l’imagerie typique** :
  - **B**oulet de canon (face)
  - **C**roissant gazeux (pneumokyste)
  - **E**n ballon de rugby (profil).
• **Vomique = « Eau de Roche + Choc »** :
  - Rappeler le liquide clair salé et le risque anaphylactique.
• **« Jamais de Ponction »** :
  - Risque de dissémination et de choc anaphylactique mortel.
• **Sérologie** :
  - **ELISA** = Excellent pour le Diagnostic.
  - **Arc 5** = Spécifique comme les 5 doigts de la main.
• **Cycle** :
  - Chien → Œufs → Mouton → Homme (accidentel).

---
*« Le KHP, c’est comme un ballon de rugby : il faut le maîtriser en face ET en profil pour marquer des points à l’examen ! Allez, un dernier effort, la ligne d’arrivée est proche ! »*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'KHP', 'Kyste Hydatique']
  }
];
