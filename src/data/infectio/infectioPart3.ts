import { Question, CourseResource } from '../../types/medical';

// Lesson 7: Mononucléose infectieuse (EBV)
export const INFECTIO_LESSON_7_QUESTIONS: Question[] = [
  {
    id: 'q-inf-7-01',
    courseId: 'crs-inf-7',
    questionNumber: 1,
    type: 'QCM',
    content: "Un étudiant de 20 ans consulte pour une asthénie intense, fièvre à 38,7°C et angine érythémato-pultacée. À l'examen : adénopathies cervicales postérieures bilatérales, sensibles, sans suppuration. Quel est l’élément clinique le plus évocateur d’une mononucléose infectieuse ?",
    options: [
      "A. Angine pseudomembraneuse avec exsudat pharyngé étendu",
      "B. Adénopathies axillaires isolées",
      "C. Adénopathies cervicales postérieures et œdème palpébral",
      "D. Hépatomégalie douloureuse prédominante",
      "E. Rash maculopapuleux précoce des membres"
    ],
    correctAnswers: [2],
    explanation: "L’adénopathie cervicale postérieure est quasi constante et très caractéristique de la MNI, associée fréquemment à un œdème périorbitaire (signe de Hoagland).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-02',
    courseId: 'crs-inf-7',
    questionNumber: 2,
    type: 'QCM',
    content: "Une jeune femme de 22 ans présente depuis 10 jours une fièvre oscillante, une asthénie majeure et une splénomégalie palpable. La NFS montre 12 000 leucocytes/mm³ avec 58% de lymphocytes, dont 18% de lymphocytes atypiques. Quel terme définit le mieux ce bilan biologique ?",
    options: [
      "A. Hyperlymphocytose réactionnelle",
      "B. Syndrome mononucléosique",
      "C. Leucémie lymphoïde chronique",
      "D. Réaction leucemoïde",
      "E. Plasmocytose sanguine"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome mononucléosique est défini par une hyperlymphocytose > 50% avec plus de 10% de lymphocytes hyperbasophiles atypiques stimulés (lymphocytes T cytotoxiques CD8+ activés).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-03',
    courseId: 'crs-inf-7',
    questionNumber: 3,
    type: 'QCM',
    content: "Concernant la transmission de la mononucléose infectieuse, quelle proposition est correcte ?",
    options: [
      "A. La période d’incubation est courte (3-5 jours)",
      "B. La contagiosité est maximale après la guérison clinique",
      "C. La transmission est essentiellement salivaire (« maladie du baiser »)",
      "D. Le virus est excrété uniquement pendant la phase aiguë fébrile",
      "E. Les sujets immunodéprimés n’excrètent jamais le virus"
    ],
    correctAnswers: [2],
    explanation: "La transmission de l'EBV est interhumaine directe par la salive (« kissing disease »), avec une incubation prolongée de 4 à 6 semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-04',
    courseId: 'crs-inf-7',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient atteint de MNI développe brutalement une douleur abdominale aiguë de l’hypocondre gauche, une hypotension, une pâleur. Quel est le diagnostic à éliminer en urgence ?",
    options: [
      "A. Pancréatite aiguë",
      "B. Rupture spontanée ou traumatique de la rate",
      "C. Infarctus splénique",
      "D. Pyélonéphrite",
      "E. Appendicite rétro-cæcale"
    ],
    correctAnswers: [1],
    explanation: "La rupture de rate est la complication aiguë la plus redoutable de la MNI (entre J4 et J21), justifiant l'arrêt strict de tout sport de contact pendant 4 à 6 semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-05',
    courseId: 'crs-inf-7',
    questionNumber: 5,
    type: 'QCM',
    content: "Parmi ces propositions concernant la sérologie EBV, laquelle correspond à une primo-infection récente (moins de 6 semaines) ?",
    options: [
      "A. IgM anti-VCA négatifs, IgG anti-VCA positifs, IgG anti-EBNA positifs",
      "B. IgM anti-VCA positifs, IgG anti-VCA négatifs, anti-EBNA négatifs",
      "C. IgM anti-VCA positifs, IgG anti-VCA positifs, anti-EBNA négatifs",
      "D. IgM anti-EBNA positifs, IgG VCA négatifs",
      "E. IgG anti-VCA négatifs, anti-EBNA positifs"
    ],
    correctAnswers: [2],
    explanation: "Primo-infection active : IgM anti-VCA positifs, IgG anti-VCA positifs, et anti-EBNA encore négatifs (les anticorps anti-EBNA n'apparaissent qu'après 2 à 4 mois).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-7-06',
    courseId: 'crs-inf-7',
    questionNumber: 6,
    type: 'QCM',
    content: "Un nourrisson de 14 mois présente une fièvre prolongée (3 semaines) avec adénopathies et une hyperlymphocytose. Le test MNI (anticorps hétérophiles) est négatif. Quelle est la conduite la plus appropriée ?",
    options: [
      "A. Répéter le MNI test chaque semaine",
      "B. Prescrire une corticothérapie d’épreuve",
      "C. Réaliser une sérologie EBV spécifique (IgM anti-VCA) ainsi que CMV et Toxoplasma",
      "D. Hospitaliser pour biopsie ganglionnaire",
      "E. Instaurer un traitement antiviral par aciclovir"
    ],
    correctAnswers: [2],
    explanation: "Chez l'enfant de moins de 4-5 ans, les anticorps hétérophiles (MNI test) sont très souvent négatifs (faux négatifs dans 50-80% des cas); la sérologie spécifique s'impose.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-07',
    courseId: 'crs-inf-7',
    questionNumber: 7,
    type: 'QCM',
    content: "Lequel de ces virus n’appartient pas à la sous-famille des Gammaherpesvirinae ?",
    options: [
      "A. HHV-4 (EBV)",
      "B. HHV-8 (virus du sarcome de Kaposi)",
      "C. HHV-5 (Cytomégalovirus, CMV)",
      "D. Lymphocryptovirus",
      "E. Rhadinovirus"
    ],
    correctAnswers: [2],
    explanation: "Le CMV (HHV-5) appartient à la sous-famille des Betaherpesvirinae. EBV (HHV-4) et HHV-8 sont des Gammaherpesvirinae lymphotropes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-08',
    courseId: 'crs-inf-7',
    questionNumber: 8,
    type: 'QCM',
    content: "Un patient de 18 ans sous amoxicilline pour une angine depuis 3 jours développe un rash maculopapuleux étendu, non prurigineux. Quelle hypothèse est la plus probable ?",
    options: [
      "A. Intolérance vraie de type I aux pénicillines",
      "B. Syndrome de Stevens-Johnson",
      "C. Mononucléose infectieuse méconnue (rash immuno-induit par l'amoxicilline)",
      "D. Scarlatine compliquée",
      "E. Réaction de Jarisch-Herxheimer"
    ],
    correctAnswers: [2],
    explanation: "La prise d'aminopénicilline (amoxicilline) au cours d'une MNI déclenche dans plus de 80-90% des cas une éruption maculopapuleuse qui ne constitue pas une véritable allergie définitive.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-09',
    courseId: 'crs-inf-7',
    questionNumber: 9,
    type: 'QCM',
    content: "Laquelle de ces complications neurologiques peut survenir au cours de la mononucléose infectieuse ?",
    options: [
      "A. Méningite à liquide clair lymphocytaire",
      "B. Syndrome de Guillain-Barré (polyradiculonévrite)",
      "C. Encéphalite aiguë",
      "D. Paralysie faciale périphérique",
      "E. Toutes les propositions ci-dessus sont des complications décrites de l'EBV"
    ],
    correctAnswers: [4],
    explanation: "L'EBV peut se compliquer de méningite lymphocytaire, d'encéphalite, de polyradiculonévrite aiguë (Guillain-Barré) ou de paralysie de nerfs crâniens (VII).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-10',
    courseId: 'crs-inf-7',
    questionNumber: 10,
    type: 'QCM',
    content: "Un adolescent atteint de MNI consulte pour une aggravation de l’asthénie, un ictère et des transaminases à 8N. Quelle est la prise en charge recommandée ?",
    options: [
      "A. Hospitalisation en hépatologie et corticothérapie systématique",
      "B. Surveillance clinique et biologique, traitement purement symptomatique, repos et éviction des toxiques hépatiques",
      "C. Antiviral (valaciclovir) et acide ursodésoxycholique",
      "D. Ponction biopsie hépatique d’urgence",
      "E. Vaccin anti-VHB en urgence"
    ],
    correctAnswers: [1],
    explanation: "L'atteinte hépatique au cours de la MNI est très fréquente (cytolyse modérée dans 80-90% des cas), bénigne et spontanément résolutive sans traitement spécifique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-11',
    courseId: 'crs-inf-7',
    questionNumber: 11,
    type: 'QCM',
    content: "Laquelle de ces affirmations concernant le test de Paul-Bunnell-Davidsohn (ou MNI test rapide) est fausse ?",
    options: [
      "A. Il détecte des anticorps hétérophiles (IgM) agglutinant les hématies de mouton ou de cheval",
      "B. Il est positif dans plus de 85-90% des cas de MNI chez l’adulte jeune",
      "C. Il peut rester négatif chez l’enfant de moins de 5 ans",
      "D. Il devient positif dès le premier jour des symptômes",
      "E. Des faux positifs existent (hépatite virale, lymphome, lupus)"
    ],
    correctAnswers: [3],
    explanation: "FAUX : Les anticorps hétérophiles n'apparaissent généralement qu'entre le 7e et le 14e jour d'évolution clinique (sensibilité très faible à J1-J3).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-7-12',
    courseId: 'crs-inf-7',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel est le réservoir principal du virus EBV et son site de latence chez l'hôte ?",
    options: [
      "A. Cellules épithéliales oropharyngées",
      "B. Lymphocytes T CD8+",
      "C. Lymphocytes B mémoire",
      "D. Cellules dendritiques folliculaires",
      "E. Macrophages spléniques"
    ],
    correctAnswers: [2],
    explanation: "L'EBV établit une latence permanente dans les lymphocytes B mémoire quiescents circulants.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-13',
    courseId: 'crs-inf-7',
    questionNumber: 13,
    type: 'QCM',
    content: "Un patient de 30 ans avec MNI présente une dyspnée laryngée, voix bitonale, et une hypertrophie amygdalienne majeure obstructive. Quelle complication doit être redoutée et traitée en urgence ?",
    options: [
      "A. Œdème de Quincke allergique",
      "B. Obstruction aiguë des voies aériennes supérieures justifiant une corticothérapie brève",
      "C. Abcès rétropharyngé",
      "D. Laryngite sous-glottique",
      "E. Embolie pulmonaire"
    ],
    correctAnswers: [1],
    explanation: "L'hypertrophie majeure du tissu lymphoïde pharyngé peut obstruer la filière aérienne; la corticothérapie par voie générale (prednisone 1 mg/kg/j x 5-7j) est indiquée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-14',
    courseId: 'crs-inf-7',
    questionNumber: 14,
    type: 'QCM',
    content: "Concernant le traitement de la mononucléose infectieuse non compliquée, quelle est la conduite validée ?",
    options: [
      "A. Aciclovir en monothérapie pour réduire la durée des symptômes",
      "B. Traitement purement symptomatique : repos, hydratation, paracétamol, et éviction des sports de contact pendant 4 à 6 semaines",
      "C. Vaccination anti-EBV systématique après la guérison",
      "D. Antibiotiques macrolides systématiques",
      "E. Corticothérapie à dose immunosuppressive pour tous les patients"
    ],
    correctAnswers: [1],
    explanation: "La prise en charge est symptomatique. Les antiviraux n'ont pas d'efficacité clinique prouvée. L'éviction des sports violents prévient la rupture splénique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-15',
    courseId: 'crs-inf-7',
    questionNumber: 15,
    type: 'QCM',
    content: "Le syndrome mononucléosique biologique peut être observé dans toutes les situations suivantes, SAUF :",
    options: [
      "A. Infection à CMV",
      "B. Toxoplasmose aiguë",
      "C. Primo-infection par le VIH",
      "D. Rubéole ou hépatite aiguë",
      "E. Hépatite A ictérique typique isolée sans aucune virose associée"
    ],
    correctAnswers: [4],
    explanation: "L'hépatite virale A donne une nécrose hépatocellulaire aiguë sans syndrome mononucléosique typique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-16',
    courseId: 'crs-inf-7',
    questionNumber: 16,
    type: 'QCM',
    content: "Une patiente de 25 ans enceinte de 12 SA est en contact étroit avec son fils ayant une MNI confirmée. Quelle conduite recommandez-vous ?",
    options: [
      "A. Sérologie EBV maternelle immédiate et immunoglobulines spécifiques",
      "B. Éviction de la mère jusqu’à guérison de l’enfant",
      "C. Aucune mesure spécifique, l’EBV n’a pas de tératogénicité fœtale démontrée",
      "D. Traitement par valaciclovir préventif",
      "E. Vaccination d’urgence"
    ],
    correctAnswers: [2],
    explanation: "L'EBV n'est pas responsable d'embryofoetopathie malformative; aucune thérapeutique préventive n'est justifiée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-17',
    courseId: 'crs-inf-7',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans la MNI, la splénomégalie :",
    options: [
      "A. Est absente chez l’enfant",
      "B. Touche environ 50% des patients, reste modérée et régresse spontanément",
      "C. Nécessite une splénectomie prophylactique",
      "D. Est toujours très douloureuse",
      "E. Contre-indique formellement la palpation abdominale"
    ],
    correctAnswers: [1],
    explanation: "La splénomégalie est retrouvée dans 50 % des cas de MNI. Elle est modérée, lisse et indolore, régressant en quelques semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-18',
    courseId: 'crs-inf-7',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelles sont les cellules cibles de l’EBV lors de la primo-infection et par quel récepteur membranaire ?",
    options: [
      "A. Lymphocytes T CD4 via le récepteur CD4",
      "B. Cellules de Küpffer",
      "C. Lymphocytes B via le récepteur CD21 (récepteur du fragment C3d du complément)",
      "D. Polynucléaires neutrophiles",
      "E. Cellules endothéliales"
    ],
    correctAnswers: [2],
    explanation: "L'EBV infecte préférentiellement les lymphocytes B via le récepteur CD21 (CR2).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-19',
    courseId: 'crs-inf-7',
    questionNumber: 19,
    type: 'QCM',
    content: "Un patient immunodéprimé (transplanté rénal) développe une réactivation d’EBV avec lymphocytose. Quelle complication maligne est classiquement associée à l’EBV ?",
    options: [
      "A. Sarcome de Kaposi",
      "B. Syndrome lymphoprolifératif post-transplantation (PTLD / Lymphome B)",
      "C. Myélome multiple",
      "D. Leucémie à tricholeucocytes",
      "E. Carcinome hépatocellulaire"
    ],
    correctAnswers: [1],
    explanation: "Chez l'immunodéprimé, la perte de contrôle des lymphocytes T cytotoxiques favorise la prolifération maligne des lymphocytes B EBV-induits (PTLD, lymphomes B, Burkitt).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-20',
    courseId: 'crs-inf-7',
    questionNumber: 20,
    type: 'QCM',
    content: "Concernant les anticorps anti-EBNA (Epstein-Barr Nuclear Antigen), quelle affirmation est exacte ?",
    options: [
      "A. Ils apparaissent durant la première semaine de la maladie",
      "B. Leur présence signe une infection très récente (< 15 jours)",
      "C. Ils sont toujours négatifs en cas de réactivation",
      "D. Ils apparaissent tardivement (2 à 4 mois après l'infection) et persistent toute la vie",
      "E. Ils sont détectés par le MNI test rapide"
    ],
    correctAnswers: [3],
    explanation: "Les anticorps anti-EBNA apparaissent tardivement au cours de la convalescence (2-4 mois) et restent positifs à vie, signant une immunité ancienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-21',
    courseId: 'crs-inf-7',
    questionNumber: 21,
    type: 'QCM',
    content: "Un jeune adulte consulte pour MNI confirmée et demande quand il peut reprendre la compétition sportive (rugby/football) :",
    options: [
      "A. Dès l'apyrexie (48h)",
      "B. Éviction stricte des sports de contact pendant au moins 4 à 6 semaines en raison du risque de rupture splénique",
      "C. Reprise immédiate avec port d'une ceinture abdominale",
      "D. Reprise après 7 jours de traitement",
      "E. Arrêt du sport à vie"
    ],
    correctAnswers: [1],
    explanation: "L'éviction des sports de contact ou à risque de traumatisme abdominal pendant 4 à 6 semaines est impérative pour prévenir la rupture splénique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-22',
    courseId: 'crs-inf-7',
    questionNumber: 22,
    type: 'QCM',
    content: "Laquelle de ces complications hématologiques auto-immunes peut compliquer la MNI ?",
    options: [
      "A. Anémie ferriprive microcytaire",
      "B. Anémie hémolytique auto-immune à anticorps froids (agglutinines froides anti-i)",
      "C. Polyglobulie de Vaquez",
      "D. Thrombocytose réactionnelle",
      "E. Aplasie médullaire idiopathique"
    ],
    correctAnswers: [1],
    explanation: "L'anémie hémolytique auto-immune de la MNI est médiée par des agglutinines froides d'isotype IgM de spécificité anti-i.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-7-23',
    courseId: 'crs-inf-7',
    questionNumber: 23,
    type: 'QCM',
    content: "En cas d’angine diphtéroïde ou pseudomembraneuse sévère avec obstruction pharyngolaryngée au cours de la MNI, quelle thérapeutique d'urgence est indiquée ?",
    options: [
      "A. Céphalosporine de 3e génération",
      "B. Corticothérapie par voie générale (Prednisone 1 mg/kg/j pendant 5 à 7 jours)",
      "C. Ganciclovir IV",
      "D. Amygdalectomie bilatérale à chaud",
      "E. Oxygénothérapie seule sans médicament"
    ],
    correctAnswers: [1],
    explanation: "Une corticothérapie courte est indiquée en cas d'hypertrophie amygdalienne obstructive menaçante ou d'anémie hémolytique sévère.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-24',
    courseId: 'crs-inf-7',
    questionNumber: 24,
    type: 'QCM',
    content: "Laquelle de ces affirmations concernant l’évolution naturelle de la MNI est vraie ?",
    options: [
      "A. L’asthénie disparaît constamment en moins de 48 heures",
      "B. Les récidives cliniques sont la règle chez le sujet sain",
      "C. La guérison clinique est spontanée en 2 à 4 semaines, mais une asthénie post-infectieuse peut persister 2 à 3 mois",
      "D. La splénomégalie devient irréversible",
      "E. Le virus est totalement éliminé de l'organisme après 1 an"
    ],
    correctAnswers: [2],
    explanation: "L'infection régresse en 3-4 semaines, mais l'asthénie post-virale peut persister plusieurs mois.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-25',
    courseId: 'crs-inf-7',
    questionNumber: 25,
    type: 'QCM',
    content: "Quel type d'immunité confère la primo-infection à EBV chez l'immunocompétent ?",
    options: [
      "A. Immunité de courte durée imposant des réinfections annuelles",
      "B. Immunité solide et définitive, les récidives cliniques étant exceptionnelles",
      "C. Aucune immunité protectrice",
      "D. Immunité uniquement humorale sans mémoire T",
      "E. Immunité croisée totale avec le cytomégalovirus"
    ],
    correctAnswers: [1],
    explanation: "La primo-infection confère une immunité protectrice définitive contrôlant la latence virale.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques MNI
  {
    id: 'q-inf-7-cc1',
    courseId: 'crs-inf-7',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Youcef, 17 ans, fièvre à 39°C depuis 12 jours, dysphagie, adénopathies cervicales postérieures bilatérales sensibles, splénomégalie à 2 cm sous le rebord costal. NFS : 14 000 leucocytes dont 65% de lymphocytes et 23% de lymphocytes atypiques.\n\nQuel est le diagnostic et la consigne préventive majeure ?",
    options: [
      "A. Angine streptococcique / Amoxicilline 6 jours",
      "B. Mononucléose infectieuse (EBV) / Éviction formelle des sports de contact pendant 4 à 6 semaines (prévention de la rupture de rate)",
      "C. Leucémie aiguë / Chimiothérapie",
      "D. Toxoplasmose / Spiramycine",
      "E. Primo-infection VIH / Antirétroviraux"
    ],
    correctAnswers: [1],
    explanation: "MNI typique (angine, adénopathies postérieures, splénomégalie, syndrome mononucléosique > 10%). Règle d'or : arrêt des sports violents 4 à 6 semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-cc2',
    courseId: 'crs-inf-7',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Nourrisson de 18 mois, fièvre traînante depuis 3 semaines, adénopathies cervicales. MNI test négatif. NFS : 15% de lymphocytes atypiques.\n\nQuelle est la démarche diagnostique la plus pertinente ?",
    options: [
      "A. Répéter le MNI test quotidiennement",
      "B. Réaliser une sérologie spécifique EBV (IgM anti-VCA) ainsi que CMV et Toxoplasma",
      "C. Macrolides d'épreuve",
      "D. Myélogramme d'emblée",
      "E. IRM cérébrale"
    ],
    correctAnswers: [1],
    explanation: "Le MNI test est faussement négatif chez le nourrisson. La sérologie EBV spécifique par ELISA (IgM anti-VCA) permet de trancher avec le CMV et la toxoplasmose.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-cc3',
    courseId: 'crs-inf-7',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Étudiante de 21 ans traitée par amoxicilline pour une angine fébrile. À J8, éruption maculopapuleuse diffuse non prurigineuse sans détresse respiratoire. Jamais d'allergie.\n\nQuelle est l'explication la plus plausible ?",
    options: [
      "A. Choc anaphylactique retardé",
      "B. Maladie sérique vraie",
      "C. Rash induit par l'amoxicilline sur mononucléose infectieuse sous-jacente méconnue",
      "D. Rougeole atypique",
      "E. Réaction de Jarisch-Herxheimer"
    ],
    correctAnswers: [2],
    explanation: "Le rash sous amoxicilline est caractéristique de la MNI méconnue. Ce n'est pas une allergie vraie définitive à la pénicilline.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-cc4',
    courseId: 'crs-inf-7',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Patient de 24 ans avec MNI diagnostiquée il y a 10 jours. Douleur soudaine aiguë de l'hypocondre gauche irradiant à l'épaule gauche, lipothymie, pouls 120/min, PA 85/50 mmHg, défense abdominale.\n\nQuelle est la conduite immédiate ?",
    options: [
      "A. Antalgiques simples en ambulatoire",
      "B. Échographie abdominale / FAST en urgence et avis chirurgical immédiat pour suspicion d'hémorragie par rupture de rate",
      "C. Coloscopie",
      "D. Corticothérapie forte dose",
      "E. Ponction lombaire"
    ],
    correctAnswers: [1],
    explanation: "Tableau d'hémopéritoine aigu par rupture de rate compliquant la MNI : urgence médico-chirurgicale vitale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-7-cc5',
    courseId: 'crs-inf-7',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Patient de 45 ans transplanté rénal sous immunosuppresseurs, fièvre, adénopathies généralisées, asthénie. NFS : lymphocytes atypiques. Sérologie EBV : IgM VCA+, IgG VCA+, anti-EBNA négatifs.\n\nQuel risque majeur est associé à cette présentation chez l'immunodéprimé ?",
    options: [
      "A. Aucune complication particulière",
      "B. Risque de syndrome lymphoprolifératif malin post-transplantation (PTLD / Lymphome B EBV-induit)",
      "C. Hépatite E fulminante",
      "D. Glaucome aigu",
      "E. Tétanos secondaire"
    ],
    correctAnswers: [1],
    explanation: "Chez l'immunodéprimé, l'EBV peut induire une prolifération lymphomateuse B maligne (PTLD) nécessitant l'allègement de l'immunosuppression et l'immunothérapie (Rituximab).",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_7_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-7-mindmap',
    courseId: 'crs-inf-7',
    title: 'Mind Map : Mononucléose Infectieuse (EBV)',
    type: 'mindmap',
    content: `# Mind Map : Mononucléose Infectieuse (EBV / HHV-4)

## 1. Transmission & Tropisme
- **Transmission** : Salivaire (« maladie du baiser »), incubation longue (30-50 jours)
- **Cellule cible** : Lymphocyte B (via récepteur CD21 / CR2) -> latence à vie dans les lymphocytes B mémoire

## 2. Tableau Clinique Classique
- **Triade majeure** :
  1. Fièvre prolongée (10-15 jours) avec asthénie intense
  2. Angine (érythémato-pultacée ou pseudomembraneuse)
  3. Polyadénopathies prédominant au niveau cervical postérieur
- **Signes associés** : Splénomégalie (50%), œdème palpébral (signe de Hoagland), cytolyse hépatique modérée
- **Rash sous amoxicilline** : Rash maculopapuleux dans 90% des cas si prise d'aminopénicilline

## 3. Complications Graves
- **Rupture de rate** (J4-J21) -> Éviction sports violents 4-6 semaines
- **Obstruction des VAS** -> Hypertrophie amygdalienne obstructive (indication corticoïdes)
- **Auto-immunes** : Anémie hémolytique à agglutinines froides (anti-i), purpura thrombopénique
- **Neurologiques** : Méningite lymphocytaire, syndrome de Guillain-Barré

## 4. Diagnostic & Traitement
- **NFS** : Syndrome mononucléosique (> 50% de lymphocytes dont > 10% d'atypiques)
- **MNI-Test** : Anticorps hétérophiles (positif chez l'adulte, faussement négatif chez l'enfant < 5 ans)
- **Sérologie EBV** : Primo-infection = IgM VCA (+), IgG VCA (+), anti-EBNA (-)
- **Traitement** : Repos, antalgiques (paracétamol), PAS d'antiviraux, corticoïdes uniquement si complication obstructive`
  },
  {
    id: 'res-inf-7-astuces',
    courseId: 'crs-inf-7',
    title: 'Mnémotechniques MNI',
    type: 'astuce',
    content: `### Astuces Concours MNI (Dr. LAIDANI.M)

1. **La Triade « FA POST » :**
   - **F**ièvre prolongée
   - **A**ngine + **A**sthénie
   - Adénopathies **POST**érieures (cervicales postérieures)

2. **Sérologie en 3 Temps :**
   - **VCA IgM** : Actif aigu
   - **VCA IgG** : Présent tôt et persistant
   - **EBNA IgG** : Tardif (2-4 mois) -> signe une infection ANCIENNE

3. **Les Complications : « R.A.T. »**
   - **R**upture de rate
   - **A**némie hémolytique auto-immune (anti-i)
   - **T**roubles neurologiques (Guillain-Barré)`
  }
];

// Lesson 8: Diarrhées infectieuses & TIAC
export const INFECTIO_LESSON_8_QUESTIONS: Question[] = [
  {
    id: 'q-inf-8-01',
    courseId: 'crs-inf-8',
    questionNumber: 1,
    type: 'QCM',
    content: "Une diarrhée aqueuse profuse, « eau de riz », sans fièvre, survenue 8 heures après ingestion de riz réchauffé, fait évoquer en premier :",
    options: [
      "A. Vibrio cholerae",
      "B. Clostridium perfringens",
      "C. Bacillus cereus (toxine émétisante / diarrhéique)",
      "D. Shigella sonnei",
      "E. Rotavirus"
    ],
    correctAnswers: [2],
    explanation: "Bacillus cereus sporulé colonise typiquement le riz cuit réchauffé et produit des entérotoxines thermostables provoquant vomissements et diarrhée aqueuse aiguë.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-02',
    courseId: 'crs-inf-8',
    questionNumber: 2,
    type: 'QCM',
    content: "Le principal mécanisme physiopathologique du syndrome cholériforme est :",
    options: [
      "A. Invasion muqueuse avec destruction épithéliale",
      "B. Production d’entérotoxine activant l’adénylcyclase -> augmentation de l'AMPc -> sécrétion hydrique massive sans lésion tissulaire",
      "C. Translocation bactérienne vers le sang",
      "D. Réaction inflammatoire locale avec pseudomembranes",
      "E. Pullulation bactérienne dans la bile"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome cholériforme est sécrétoire : l'entérotoxine active l'adénylate cyclase, augmentant l'AMPc intracellulaire, stimulant la fuite hydro-électrolytique active.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-03',
    courseId: 'crs-inf-8',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi ces agents, lequel est responsable d’une TIAC à expression neurologique par toxine préformée bloquant la libération d’acétylcholine ?",
    options: [
      "A. Staphylococcus aureus",
      "B. Clostridium botulinum",
      "C. Histamine du poisson",
      "D. Salmonella enteritidis",
      "E. Yersinia enterocolitica"
    ],
    correctAnswers: [1],
    explanation: "Clostridium botulinum produit la toxine botulique qui bloque la libération présynaptique d'acétylcholine, provoquant une paralysie flasque bilatérale symétrique descendante afébrile.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-04',
    courseId: 'crs-inf-8',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient âgé de 70 ans, hospitalisé, sous amoxicilline-acide clavulanique depuis 8 jours, présente une diarrhée aqueuse abondante, douleurs abdominales et fièvre modérée. Quel est le diagnostic le plus probable ?",
    options: [
      "A. Infection à Campylobacter jejuni",
      "B. Choléra importé",
      "C. Colite à Clostridioides difficile (colite pseudomembraneuse)",
      "D. Shigellose",
      "E. Intoxication à Bacillus cereus"
    ],
    correctAnswers: [2],
    explanation: "Toute diarrhée survenant sous ou au décours d'une antibiothérapie chez un patient âgé hospitalisé est une infection à Clostridioides difficile jusqu'à preuve du contraire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-05',
    courseId: 'crs-inf-8',
    questionNumber: 5,
    type: 'QCM',
    content: "Lequel des éléments suivants est une indication formelle de réalisation d'une coproculture ?",
    options: [
      "A. Diarrhée aiguë banale de moins de 24h sans fièvre",
      "B. Diarrhée du voyageur non fébrile résolutive en 48h",
      "C. Diarrhée aiguë fébrile avec syndrome dysentérique ou retour des tropiques",
      "D. Vomissements isolés sans diarrhée",
      "E. Constipation rebelle"
    ],
    correctAnswers: [2],
    explanation: "La coproculture est indiquée en cas de diarrhée fébrile, syndrome dysentérique (glaires/sang), retour de voyage en zone d'endémie, terrain fragile (immunodéprimé) ou TIAC.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-06',
    courseId: 'crs-inf-8',
    questionNumber: 6,
    type: 'QCM',
    content: "Une jeune femme revient d’un voyage au Maroc. Depuis hier, diarrhée aqueuse abondante (10 selles/jour), nausées, pas de fièvre. Quel est l’agent pathogène le plus fréquent de cette « diarrhée du voyageur » (turista) ?",
    options: [
      "A. Shigella flexneri",
      "B. Escherichia coli entérotoxinogène (ETEC)",
      "C. Entamoeba histolytica",
      "D. Giardia lamblia",
      "E. Vibrio parahaemolyticus"
    ],
    correctAnswers: [1],
    explanation: "ETEC est la première cause de diarrhée du voyageur (turista) dans les pays en développement.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-07',
    courseId: 'crs-inf-8',
    questionNumber: 7,
    type: 'QCM',
    content: "Dans la prise en charge d’une diarrhée infectieuse invasive ou avec suspicion de colite à Clostridioides difficile, l’utilisation des ralentisseurs du transit (Lopéramide) est :",
    options: [
      "A. Toujours recommandée pour arrêter la diarrhée rapidement",
      "B. Formellement contre-indiquée en raison du risque de mégacôlon toxique, perforation ou occlusion",
      "C. Indiquée systématiquement chez le nourrisson",
      "D. Le traitement de première ligne du choléra",
      "E. Sans aucun danger"
    ],
    correctAnswers: [1],
    explanation: "Le lopéramide est contre-indiqué en cas de diarrhée invasive ou de C. difficile : le blocage du péristaltisme retient les toxines et favorise la stase et le mégacôlon toxique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-08',
    courseId: 'crs-inf-8',
    questionNumber: 8,
    type: 'QCM',
    content: "Quel germe bactérien est classiquement responsable d’un syndrome pseudo-appendiculaire (adénite mésentérique fébrile de la fosse iliaque droite) chez l’enfant et l’adolescent ?",
    options: [
      "A. Yersinia enterocolitica",
      "B. Clostridium perfringens",
      "C. Vibrio cholerae",
      "D. Staphylococcus aureus",
      "E. Enterococcus faecalis"
    ],
    correctAnswers: [0],
    explanation: "Yersinia enterocolitica et Yersinia pseudotuberculosis provoquent une iléite terminale et une adénite mésentérique simulant une appendicite aiguë.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-09',
    courseId: 'crs-inf-8',
    questionNumber: 9,
    type: 'QCM',
    content: "Le traitement de première intention d’un premier épisode de colite à Clostridioides difficile non sévère selon les recommandations actuelles est :",
    options: [
      "A. Métronidazole IV",
      "B. Vancomycine orale (125 mg x 4/j pendant 10 jours) ou Fidaxomicine orale",
      "C. Ciprofloxacine per os",
      "D. Arrêt simple des antibiotiques sans traitement spécifique",
      "E. Amoxicilline per os"
    ],
    correctAnswers: [1],
    explanation: "Les recommandations actuelles préconisent la fidaxomicine ou la vancomycine par voie orale (125 mg x 4/j x 10j). Le métronidazole oral n'est plus qu'une alternative.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-8-10',
    courseId: 'crs-inf-8',
    questionNumber: 10,
    type: 'QCM',
    content: "Le syndrome hémolytique et urémique (SHU) post-diarrhéique chez l’enfant est principalement causé par :",
    options: [
      "A. Salmonella enteritidis",
      "B. Escherichia coli entérohémorragique (EHEC / STEC producteur de Shiga-toxine, sérotype O157:H7)",
      "C. Campylobacter fetus",
      "D. Rotavirus",
      "E. Giardia intestinalis"
    ],
    correctAnswers: [1],
    explanation: "Les souches d'E. coli productrices de Shiga-toxines (EHEC/STEC) contaminent la viande hachée mal cuite et provoquent le SHU (anémie hémolytique mécanique, thrombopénie, IRA).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-11',
    courseId: 'crs-inf-8',
    questionNumber: 11,
    type: 'QCM',
    content: "Une Toxi-Infection Alimentaire Collective (TIAC) est légalement définie par :",
    options: [
      "A. Un cas isolé de diarrhée nosocomiale",
      "B. L'apparition d'au moins 2 cas groupés de symptômes similaires (principalement digestifs) dont on peut rapporter la cause à une même origine alimentaire",
      "C. Toute diarrhée contractée dans un restaurant",
      "D. La présence de Salmonella dans un prélèvement alimentaire sans malade",
      "E. Une intoxication chimique industrielle"
    ],
    correctAnswers: [1],
    explanation: "Définition officielle de la TIAC : survenue d'au moins 2 cas similaires liés à une origine alimentaire commune, soumise à déclaration obligatoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-12',
    courseId: 'crs-inf-8',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel ensemble de symptômes oriente formellement vers un syndrome dysentérique colitique invasif ?",
    options: [
      "A. Selles liquides aqueuses abondantes et vomissements précoces sans fièvre",
      "B. Selles afécales glairo-sanglantes, douleurs coliques violentes avec épreintes, ténesme et fièvre élevée",
      "C. Diarrhée d'aspect « eau de riz » sans douleur",
      "D. Douleurs épigastriques isolées après le repas",
      "E. Constipation fébrile avec météorisme"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome dysentérique traduit une invasion et destruction de la muqueuse colique : selles peu abondantes glaireuses et sanglantes, épreintes, ténesme rectal et fièvre.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-13',
    courseId: 'crs-inf-8',
    questionNumber: 13,
    type: 'QCM',
    content: "Chez un nourrisson atteint de gastro-entérite aiguë, quel élément justifie une hospitalisation en urgence ?",
    options: [
      "A. Âge inférieur à 3 mois",
      "B. Perte de poids supérieure à 8-10% (déshydratation sévère)",
      "C. Vomissements incoercibles rendant la réhydratation orale impossible",
      "D. Signes de collapsus ou de choc hypovolémique",
      "E. Tous les critères ci-dessus sont des indications d'hospitalisation"
    ],
    correctAnswers: [4],
    explanation: "Tous ces signes constituent des critères majeurs d'hospitalisation pour réhydratation intraveineuse sous surveillance.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-14',
    courseId: 'crs-inf-8',
    questionNumber: 14,
    type: 'QCM',
    content: "La toxine botulique de Clostridium botulinum agit physiopathologiquement en :",
    options: [
      "A. Bloquant les récepteurs nicotiniques musculaires périphériques",
      "B. Clivant les protéines du complexe SNARE empêchant l'exocytose de l'acétylcholine à la jonction neuromusculaire",
      "C. Stimulant les neurones inhibiteurs spinaux de Renshaw",
      "D. Induisant une nécrose des motoneurones de la corne antérieure",
      "E. Inhibant la recapture de la dopamine"
    ],
    correctAnswers: [1],
    explanation: "La toxine botulique est une métalloprotéase à zinc qui clive les protéines SNARE (SNAP-25, synaptobrévine), bloquant la libération d'acétylcholine.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-8-15',
    courseId: 'crs-inf-8',
    questionNumber: 15,
    type: 'QCM',
    content: "Les toxi-infections à Salmonella non typhiques (salmonelloses mineures) se transmettent principalement par :",
    options: [
      "A. Les piqûres d'insectes",
      "B. La consommation d'œufs crus ou peu cuits (mayonnaise maison), volailles et viandes contaminées",
      "C. La poussière tellurique",
      "D. Le lait industriellement stérilisé",
      "E. Les aérosols en milieu hospitalier"
    ],
    correctAnswers: [1],
    explanation: "Les œufs crus, préparations à base d'œufs non pasteurisés et volailles sont les premiers vecteurs de salmonelles non typhiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-16',
    courseId: 'crs-inf-8',
    questionNumber: 16,
    type: 'QCM',
    content: "Devant une suspicion de TIAC, comment doivent être conservés les restes alimentaires pour les analyses microbiologiques de l'enquête ?",
    options: [
      "A. Ils doivent être immédiatement congelés à -20°C",
      "B. Ils doivent être conservés au réfrigérateur entre +2°C et +4°C (sans congélation pour préserver les bactéries)",
      "C. Ils doivent être recuits à 100°C",
      "D. Ils doivent être jetés dans une poubelle scellée",
      "E. Ils doivent être stockés à température ambiante"
    ],
    correctAnswers: [1],
    explanation: "Les aliments suspects doivent être mis au réfrigérateur (+4°C) sans être congelés afin d'éviter la lyse des bactéries et permettre leur isolement en laboratoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-17',
    courseId: 'crs-inf-8',
    questionNumber: 17,
    type: 'QCM',
    content: "Un patient drépanocytaire ou asplénique présentant une gastro-entérite aiguë à Salmonella non typhique présente un risque accru de :",
    options: [
      "A. Méningite aseptique",
      "B. Bactériémie sévère avec métastases osseuses (ostéomyélite à Salmonella)",
      "C. Hépatite fulminante",
      "D. Pancréatite nécrosante",
      "E. Insuffisance surrénalienne"
    ],
    correctAnswers: [1],
    explanation: "Chez les drépanocytaires, l'asplénie fonctionnelle expose à des bactériémies à Salmonella et à des ostéomyélites stéréotypées nécessitant une antibiothérapie curative.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-18',
    courseId: 'crs-inf-8',
    questionNumber: 18,
    type: 'QCM',
    content: "L'entérotoxine cholérique (choléragène) de Vibrio cholerae se caractérise par :",
    options: [
      "A. Une toxine cytolytique qui nécrose les villosités intestinales",
      "B. Une toxine de type A-B qui active l'adénylate cyclase via la protéine Gs, provoquant une hypersécrétion d'eau et de chlore sans altération histologique de la muqueuse",
      "C. Une neurotoxine bloquant le péristaltisme",
      "D. Une endotoxine libérée uniquement après la mort de la bactérie",
      "E. Une toxine agissant exclusivement au niveau du côlon descendant"
    ],
    correctAnswers: [1],
    explanation: "La toxine cholérique n'endommage pas la muqueuse intestinale : elle transforme les entérocytes en hypersécréteurs d'électrolytes et d'eau.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-19',
    courseId: 'crs-inf-8',
    questionNumber: 19,
    type: 'QCM',
    content: "Quelle complication neurologique auto-immune post-infectieuse est classiquement associée à une infection préalable à Campylobacter jejuni ?",
    options: [
      "A. Myasthénie",
      "B. Syndrome de Guillain-Barré (polyradiculonévrite aiguë par mimétisme moléculaire anti-gangliosides)",
      "C. Sclérose en plaques",
      "D. Chorée de Sydenham",
      "E. Maladie de Parkinson"
    ],
    correctAnswers: [1],
    explanation: "Campylobacter jejuni est le déclencheur infectieux le plus fréquent du syndrome de Guillain-Barré par réaction immunitaire croisée dirigée contre les gangliosides (GM1).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-20',
    courseId: 'crs-inf-8',
    questionNumber: 20,
    type: 'QCM',
    content: "Un iléus paralytique avec arrêt des matières et des gaz compliquant une colite infectieuse sévère peut être favorisé par :",
    options: [
      "A. L'hyperkaliémie",
      "B. La prise intempestive de ralentisseurs du transit (Lopéramide) ou une hypokaliémie sévère",
      "C. L'administration de solutés de réhydratation orale",
      "D. L'alcalose respiratoire",
      "E. Le décubitus latéral gauche"
    ],
    correctAnswers: [1],
    explanation: "Le lopéramide et l'hypokaliémie bloquent la motricité intestinale et favorisent l'iléus paralytique et le mégacôlon toxique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-21',
    courseId: 'crs-inf-8',
    questionNumber: 21,
    type: 'QCM',
    content: "L’entérotoxine préformée de Staphylococcus aureus responsable de toxi-infections alimentaires collectives est remarquable par :",
    options: [
      "A. Sa thermolabilité complète détruite à 60°C",
      "B. Sa grande thermostabilité : la cuisson détruit la bactérie mais ne détruit pas la toxine préformée",
      "C. Son incubation prolongée de plus de 48 heures",
      "D. La présence obligatoire d'une fièvre à 40°C",
      "E. Son émission exclusive dans les eaux souillées"
    ],
    correctAnswers: [1],
    explanation: "L'entérotoxine staphylococcique résiste à la chaleur (thermostable); l'aliment cuit reste toxique et provoque des symptômes en moins de 2 à 4 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-22',
    courseId: 'crs-inf-8',
    questionNumber: 22,
    type: 'QCM',
    content: "Dans le traitement curatif du choléra aigu, la priorité médicale absolue qui réduit la mortalité de 50% à moins de 1% est :",
    options: [
      "A. L'antibiothérapie par doxycycline",
      "B. La réhydratation hydro-électrolytique immédiate (orale par SRO ou intraveineuse par Ringer lactate selon le plan OMS)",
      "C. La vaccination orale",
      "D. L'isolement en chambre à pression négative",
      "E. Les corticoïdes IV"
    ],
    correctAnswers: [1],
    explanation: "Le choléra tue par déshydratation aiguë hypovolémique. La réhydratation massive et immédiate est le traitement qui sauve la vie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-23',
    courseId: 'crs-inf-8',
    questionNumber: 23,
    type: 'QCM',
    content: "L'intoxication par l'histamine (ichtyosarcotoxisme) survenant après consommation de poisson mal conservé (thon, maquereau) se manifeste par :",
    options: [
      "A. Une paralysie flasque aiguë sans fièvre",
      "B. Un flush facial érythémateux, céphalées pulsatiles, palpitations et urticaire survenant quelques minutes après le repas",
      "C. Une diarrhée sanglante 48h plus tard",
      "D. Un ictère fébrile",
      "E. Une convulsion généralisée"
    ],
    correctAnswers: [1],
    explanation: "L'histamine préformée par dégradation bactérienne de l'histidine donne un tableau pseudo-allergique immédiat (flush, céphalées, tachycardie) rapidement résolutif sous antihistaminiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-24',
    courseId: 'crs-inf-8',
    questionNumber: 24,
    type: 'QCM',
    content: "La rectosigmoïdoscopie avec biopsies est particulièrement indiquée dans quel cadre étiologique de diarrhée ?",
    options: [
      "A. Gastro-entérite virale aiguë de 24h",
      "B. Diarrhée chronique ou persistante inexpliquée, ou chez le patient immunodéprimé (VIH)",
      "C. Suspicion de choléra typique",
      "D. TIAC staphylococcique",
      "E. Turista débutante"
    ],
    correctAnswers: [1],
    explanation: "L'endoscopie digestive basse avec biopsies recherche les colites à CMV, amibiase, colite pseudomembraneuse atypique ou MICI dans les diarrhées traînantes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-25',
    courseId: 'crs-inf-8',
    questionNumber: 25,
    type: 'QCM',
    content: "Chez un patient adulte présentant une dysenterie bactérienne documentée à Shigella sonnei, quel antibiotique est préconisé en première intention ?",
    options: [
      "A. Abstention antibiotique",
      "B. Azithromycine orale ou Ciprofloxacine orale",
      "C. Amoxicilline per os",
      "D. Vancomycine per os",
      "E. Métronidazole per os"
    ],
    correctAnswers: [1],
    explanation: "L'azithromycine ou les fluoroquinolones (ciprofloxacine) réduisent la durée de la maladie, de la fièvre et de l'excrétion fécale hautement contagieuse de Shigella.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques Diarrhées / TIAC
  {
    id: 'q-inf-8-cc1',
    courseId: 'crs-inf-8',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Un jeune de 23 ans revient de voyage en Thaïlande. Diarrhée aqueuse profuse (« eau de riz », 15 selles/j), vomissements, soif intense, pli cutané très persistant, TA 90/60 mmHg, pouls filant. Pas de fièvre.\n\nQuel est le mécanisme prédominant et le traitement initial prioritaire ?",
    options: [
      "A. Invasif / Céphalosporine IV",
      "B. Sécrétoire entérotoxinique / Réhydratation intraveineuse urgente (Ringer lactate) puis SRO",
      "C. Inflammatoire / Lopéramide",
      "D. Toxine préformée / Lavage d'estomac",
      "E. Cytotoxique / Corticoïdes"
    ],
    correctAnswers: [1],
    explanation: "Syndrome cholériforme sécrétoire avec déshydratation sévère. La priorité vitale absolue est la réhydratation IV rapide par Ringer lactate selon le plan OMS.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-cc2',
    courseId: 'crs-inf-8',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Femme de 78 ans hospitalisée traitée par céfotaxime + clindamycine pour pneumonie. À J7, diarrhée liquide profuse, fièvre à 39°C, hyperleucocytose à 18 000. Épaississement colique au scanner.\n\nQuel diagnostic suspecter et quel test confirme en première ligne ?",
    options: [
      "A. Salmonellose / Coproculture standard",
      "B. Colite à Clostridioides difficile / Recherche des toxines A et B (PCR ou test immuno-enzymatique) dans les selles",
      "C. Yersiniose / Sérologie",
      "D. Amibiase / Sérologie amibienne",
      "E. Maladie de Crohn / Biopsies iléales"
    ],
    correctAnswers: [1],
    explanation: "Diarrhée nosocomiale post-antibiothérapie (clindamycine, C3G) = Colite à Clostridioides difficile confirmée par la mise en évidence des toxines A et B dans les selles fraîches.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-cc3',
    courseId: 'crs-inf-8',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Après un déjeuner scolaire (œufs mayonnaise, crème pâtissière), 25 enfants présentent brutalement nausées, vomissements incoercibles et diarrhée 2 à 3 heures plus tard. Absence de fièvre.\n\nQuel est l'agent responsable le plus probable ?",
    options: [
      "A. Clostridium perfringens",
      "B. Salmonella typhimurium",
      "C. Staphylococcus aureus par entérotoxine thermostable préformée",
      "D. Bacillus cereus forme diarrhéique",
      "E. Campylobacter jejuni"
    ],
    correctAnswers: [2],
    explanation: "Incubation très brève (2 à 4h), vomissements majeurs au premier plan et absence de fièvre signent l'ingestion d'entérotoxine staphylococcique préformée dans les aliments manipulés.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-cc4',
    courseId: 'crs-inf-8',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Homme de 28 ans drépanocytaire SS, consulte pour diarrhée fébrile à 39,5°C depuis 48 heures sans sang. Hémocultures prélevées.\n\nQuelle est la conduite à tenir essentielle en plus de la réhydratation ?",
    options: [
      "A. Abstention d'antibiotiques",
      "B. Antibiothérapie probabiliste couvrant Salmonella non typhique (C3G IV ou Ciprofloxacine) après hémocultures",
      "C. Lopéramide immédiat",
      "D. Corticothérapie",
      "E. Laxatifs osmotiques"
    ],
    correctAnswers: [1],
    explanation: "Le drépanocytaire asplénique présente un risque élevé de bactériémie et d'ostéomyélite à Salmonella lors d'une salmonellose digestive, justifiant une antibiothérapie précoce.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-8-cc5',
    courseId: 'crs-inf-8',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Enfant de 5 ans présentant des selles glairo-sanglantes fébrile (39°C), douleurs abdominales avec épreintes et ténesme. Fréquente une collectivité d'enfants.\n\nQuel est le germe le plus vraisemblable et la complication toxique redoutable à surveiller ?",
    options: [
      "A. ETEC / Déshydratation aiguë",
      "B. Shigella sonnei / Syndrome Hémolytique et Urémique (SHU) ou convulsions fébriles",
      "C. Yersinia / Pseudo-appendicite",
      "D. Vibrio cholerae / Choc hypovolémique",
      "E. Giardia / Malabsorption"
    ],
    correctAnswers: [1],
    explanation: "Syndrome dysentérique invasif chez l'enfant en collectivité = Shigella. La sécrétion de Shiga-toxine expose au risque de SHU et d'encéphalopathie/convulsions.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_8_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-8-mindmap',
    courseId: 'crs-inf-8',
    title: 'Mind Map : Diarrhées Infectieuses & TIAC',
    type: 'mindmap',
    content: `# Mind Map : Diarrhées Infectieuses & TIAC

## 1. Les 3 Grands Syndromes Physiopathologiques
- **1. Cholériforme (Sécrétoire)** :
  - *Mécanisme* : Entérotoxine -> activation adénylcyclase -> hypersécrétion d'eau sans lésion muqueuse
  - *Clinique* : Diarrhée aqueuse (« eau de riz »), afébrile, déshydratation aiguë
  - *Germes* : Vibrio cholerae, ETEC, Staph aureus, Bacillus cereus
- **2. Dysentérique (Invasif / Colitique)** :
  - *Mécanisme* : Invasion et nécrose de l'épithélium colique
  - *Clinique* : Selles glairo-sanglantes, épreintes, ténesme, fièvre élevée
  - *Germes* : Shigella, EIEC, EHEC, Campylobacter, Entamoeba histolytica
- **3. Gastro-entéritique (Intermédiaire)** :
  - *Germes* : Salmonella enterica, Rotavirus, Norovirus

## 2. Délais d'Incubation des TIAC
- **< 2 à 4 heures** : Toxine staphylococcique préformée (vomissements ++, pas de fièvre)
- **1 à 6 heures** : Bacillus cereus (riz réchauffé)
- **8 à 16 heures** : Clostridium perfringens (plats en sauce)
- **12 à 48 heures** : Salmonella, ETEC, Norovirus, Shigella`
  },
  {
    id: 'res-inf-8-astuces',
    courseId: 'crs-inf-8',
    title: 'Mnémotechniques Diarrhées & TIAC',
    type: 'astuce',
    content: `### Pièges & Mnémos (Dr. LAIDANI.M)

1. **Syndrome Cholériforme = « VSCBEA » :**
   - **V**ibrio cholerae
   - **S**taphylococcus aureus
   - **C**lostridium perfringens
   - **B**acillus cereus
   - **E**TEC

2. **Règle absolue du Lopéramide :**
   - « Jamais de lopéramide si fièvre, sang dans les selles ou suspicion de C. difficile ! »

3. **TIAC neurologique : « BOTOX & THON » :**
   - Botulisme (paralysie flasque descendante afébrile, conserve artisanale)
   - Histamine du poisson (flush facial, céphalées)`
  }
];

// Lesson 9: Méningites bactériennes
export const INFECTIO_LESSON_9_QUESTIONS: Question[] = [
  {
    id: 'q-inf-9-01',
    courseId: 'crs-inf-9',
    questionNumber: 1,
    type: 'QCM',
    content: "Un patient de 28 ans présente une fièvre élevée, céphalées sévères, photophobie et une raideur de la nuque. La ponction lombaire montre un liquide trouble, 2800 leucocytes/mm³ (85% polynucléaires), glycorachie à 0,25 g/L (glycémie simultanée 1,10 g/L), protéinorachie à 2,8 g/L. Quel est le germe le plus probable en Algérie chez l'adulte jeune non immunodéprimé ?",
    options: [
      "A. Listeria monocytogenes",
      "B. Streptococcus agalactiae (GBS)",
      "C. Neisseria meningitidis",
      "D. Streptococcus pneumoniae",
      "E. Haemophilus influenzae type b"
    ],
    correctAnswers: [2],
    explanation: "Chez l'adulte jeune de 18 à 40 ans sans comorbidité, Neisseria meningitidis (méningocoque) est la première cause de méningite purulente communautaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-02',
    courseId: 'crs-inf-9',
    questionNumber: 2,
    type: 'QCM',
    content: "Devant une suspicion de méningite bactérienne, le délai maximal recommandé pour réaliser la ponction lombaire (PL) avant l’antibiothérapie est :",
    options: [
      "A. 30 minutes",
      "B. 1 heure",
      "C. 2 heures",
      "D. Dès que possible sans retarder les antibiotiques si la PL est différée (l'antibiothérapie doit être débutée dans l'heure)",
      "E. 6 heures"
    ],
    correctAnswers: [3],
    explanation: "L'antibiothérapie ne doit jamais être retardée de plus de 30-60 minutes; en cas de contre-indication ou délai prévisible pour la PL (TDM), l'antibiothérapie est débutée immédiatement.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-03',
    courseId: 'crs-inf-9',
    questionNumber: 3,
    type: 'QCM',
    content: "Quel signe clinique est le plus spécifique d’une infection invasive à méningocoque grave imposant une antibiothérapie immédiate ?",
    options: [
      "A. Céphalées intenses",
      "B. Signe de Kernig bilatéral",
      "C. Photophobie",
      "D. Purpura pétéchial ou ecchymotique extensif (purpura fulminans)",
      "E. Nausées et vomissements"
    ],
    correctAnswers: [3],
    explanation: "L'apparition d'un purpura nécrotique/ecchymotique extensif signe le purpura fulminans et impose l'injection immédiate d'une C3G (ceftriaxone) avant tout transfert.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-04',
    courseId: 'crs-inf-9',
    questionNumber: 4,
    type: 'QCM',
    content: "Un nourrisson de 4 mois présente fièvre, vomissements, refus de la position ventrale. La PL montre 150 leucocytes/mm³ (60% lymphocytes). La coloration de Gram est négative. Quel germe doit-on évoquer en priorité ?",
    options: [
      "A. Neisseria meningitidis",
      "B. Streptococcus pneumoniae",
      "C. Listeria monocytogenes",
      "D. Escherichia coli",
      "E. Haemophilus influenzae non capsulé"
    ],
    correctAnswers: [2],
    explanation: "Chez le nourrisson de moins de 4-6 mois, Listeria monocytogenes peut donner une formule du LCR panachée ou à prédominance lymphocytaire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-9-05',
    courseId: 'crs-inf-9',
    questionNumber: 5,
    type: 'QCM',
    content: "La principale complication sensorielle tardive après une méningite à pneumocoque justifiant un suivi audiométrique systématique est :",
    options: [
      "A. Hydrocéphalie communicante",
      "B. Surdité de perception neurosensorielle bilatérale",
      "C. Épilepsie temporale",
      "D. Thrombose veineuse cérébrale",
      "E. Abcès cérébral"
    ],
    correctAnswers: [1],
    explanation: "La surdité de perception par labyrinthite ossifiante complique jusqu'à 15-30% des méningites à pneumocoque.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-06',
    courseId: 'crs-inf-9',
    questionNumber: 6,
    type: 'QCM',
    content: "Devant une méningite bactérienne, la corticothérapie (dexaméthasone) est recommandée avant ou en même temps que la première dose d’antibiotique dans quel cas ?",
    options: [
      "A. Toute méningite bactérienne communautaire",
      "B. Méningite à méningocoque uniquement",
      "C. Méningite à pneumocoque de l’adulte et H. influenzae type b chez l’enfant",
      "D. Méningite à Listeria",
      "E. Uniquement si purpura fulminans"
    ],
    correctAnswers: [2],
    explanation: "La dexaméthasone (0,15 mg/kg/6h x 4 jours) réduit la mortalité et les séquelles auditives dans les méningites à pneumocoque et à Haemophilus b.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-07',
    courseId: 'crs-inf-9',
    questionNumber: 7,
    type: 'QCM',
    content: "Un adulte de 65 ans, diabétique, présente une méningite. PL : 3500 éléments, 92% PNN, Gram : diplocoques Gram positifs en paires. L’antibiothérapie probabiliste initiale la plus adaptée selon le contexte algérien est :",
    options: [
      "A. Ampicilline + Gentamicine",
      "B. Céfotaxime + Ampicilline",
      "C. Ceftriaxone seule",
      "D. Ceftriaxone + Ampicilline + Vancomycine",
      "E. Méropénème seul"
    ],
    correctAnswers: [3],
    explanation: "Chez le sujet âgé > 50 ans ou immunodéprimé, l'antibiothérapie probabiliste triple associe C3G (Ceftriaxone ou Céfotaxime) + Ampicilline (couvre Listeria) + Vancomycine (couvre le PSDP).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-08',
    courseId: 'crs-inf-9',
    questionNumber: 8,
    type: 'QCM',
    content: "La recherche d’antigènes solubles bactériens dans le LCR :",
    options: [
      "A. Remplace la culture en première intention",
      "B. Reste utile pour identifier le germe même si le patient a reçu une antibiothérapie préalable ayant décapité la culture",
      "C. N’est jamais positive dans les méningites à Listeria",
      "D. Est le gold standard pour le pneumocoque",
      "E. A une spécificité médiocre"
    ],
    correctAnswers: [1],
    explanation: "La détection des antigènes solubles capsulaires dans le LCR peut rester positive plusieurs jours après la mise sous antibiotiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-09',
    courseId: 'crs-inf-9',
    questionNumber: 9,
    type: 'QCM',
    content: "Le signe de Brudzinski (mobilisation passive de la nuque entraînant une flexion réflexe des membres inférieurs) :",
    options: [
      "A. Est pathognomonique d’une méningite tuberculeuse",
      "B. A une sensibilité élevée de 95%",
      "C. Permet de différencier méningite bactérienne et virale",
      "D. Est souvent absent ou ininterprétable chez le nourrisson de moins d'un an",
      "E. Est toujours présent en cas d’hémorragie méningée"
    ],
    correctAnswers: [3],
    explanation: "Chez le nourrisson, les signes méningés classiques sont souvent remplacés par un bombement de la fontanelle, une hypotonie axiale ou des geignements.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-10',
    courseId: 'crs-inf-9',
    questionNumber: 10,
    type: 'QCM',
    content: "Quel critère du LCR oriente le plus vers une méningite bactérienne purulente plutôt que virale ?",
    options: [
      "A. Protéinorachie normale",
      "B. Ratio glycorachie/glycémie > 0,6",
      "C. Lymphocytose > 80%",
      "D. Hyperprotéinorachie modérée (< 1 g/L)",
      "E. Hypoglycorachie sévère (ratio < 0,4) avec PNN > 1000/mm³ et lactates > 3,2 mmol/L"
    ],
    correctAnswers: [4],
    explanation: "L'effondrement du glucose dans le LCR (ratio LCR/sang < 0,4) avec hypercellularité à polynucléaires et lactates élevés signe l'infection bactérienne pyogène.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-11',
    courseId: 'crs-inf-9',
    questionNumber: 11,
    type: 'QCM',
    content: "Le principal germe responsable de méningite bactérienne récurrente chez l’adulte ou l’enfant porteur d'une brèche ostéoméningée post-traumatique est :",
    options: [
      "A. Neisseria meningitidis",
      "B. Streptococcus pneumoniae (pneumocoque)",
      "C. Haemophilus influenzae",
      "D. Staphylococcus aureus",
      "E. Klebsiella pneumoniae"
    ],
    correctAnswers: [1],
    explanation: "Toute méningite récidivante à pneumocoque impose la recherche d'une brèche ostéo-méningée (fracture de la base du crâne, rhinorrhée cérébrospinale).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-12',
    courseId: 'crs-inf-9',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel examen d’imagerie cérébrale est indispensable avant la ponction lombaire si le patient présente un déficit neurologique focal ou un coma profond ?",
    options: [
      "A. IRM cérébrale avec séquences de diffusion",
      "B. Tomodensitométrie (TDM) cérébrale sans injection",
      "C. Échographie transfontanellaire",
      "D. Radiographie du crâne",
      "E. Angiographie cérébrale"
    ],
    correctAnswers: [1],
    explanation: "Le scanner cérébral sans injection élimine un effet de masse ou un engagement cérébral contre-indiquant la ponction lombaire immédiate.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-13',
    courseId: 'crs-inf-9',
    questionNumber: 13,
    type: 'QCM',
    content: "La chimioprophylaxie des sujets contacts d’un cas de méningite à méningocoque en Algérie repose sur :",
    options: [
      "A. Rifampicine 600 mg 2 fois par jour pendant 2 jours (ou Azithromycine dose unique)",
      "B. Ceftriaxone IM quotidienne pendant 5 jours",
      "C. Amoxicilline 1 g x 3/j pendant 7 jours",
      "D. Vaccin seul sans aucun antibiotique",
      "E. Éviction sans traitement"
    ],
    correctAnswers: [0],
    explanation: "La rifampicine orale pendant 2 jours (ou azithromycine en dose unique) éradique le portage rhinopharyngé de Neisseria meningitidis chez les contacts proches.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-14',
    courseId: 'crs-inf-9',
    questionNumber: 14,
    type: 'QCM',
    content: "Un patient sous corticothérapie au long cours développe une méningite subaiguë à liquide clair. Quels germes non conventionnels doivent être recherchés ?",
    options: [
      "A. Cryptococcus neoformans et Mycobacterium tuberculosis",
      "B. Listeria monocytogenes",
      "C. Brucella melitensis",
      "D. Virus du groupe herpès",
      "E. Tous les germes sus-cités"
    ],
    correctAnswers: [4],
    explanation: "L'immunodépression cellulaire expose à la tuberculose méningée, la listériose, la cryptococcose et la brucellose.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-15',
    courseId: 'crs-inf-9',
    questionNumber: 15,
    type: 'QCM',
    content: "La triade de Cushing (bradycardie, hypertension artérielle, bradypnée/irrégularité respiratoire) dans une méningite signe :",
    options: [
      "A. Un état de choc septique décompensé",
      "B. Une hypertension intracrânienne sévère avec menace d’engagement temporal ou amygdalien",
      "C. Une méningite tuberculeuse basilaire",
      "D. Un abcès sous-dural",
      "E. Une déshydratation aiguë"
    ],
    correctAnswers: [1],
    explanation: "La triade de Cushing est une réponse réflexe à une élévation critique de la pression intracrânienne menaçant l'engagement cérébral.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-16',
    courseId: 'crs-inf-9',
    questionNumber: 16,
    type: 'QCM',
    content: "La vaccination anti-méningococcique quadrivalente (ACWY) est obligatoire en Algérie pour :",
    options: [
      "A. Tous les nourrissons à 6 mois",
      "B. Les pèlerins se rendant aux lieux saints (Hajj et Omra) et sujets à risque",
      "C. Uniquement les personnes aspléniques",
      "D. Les professionnels de santé",
      "E. Les femmes enceintes"
    ],
    correctAnswers: [1],
    explanation: "Le vaccin conjugué tétravalent ACWY est exigé pour le pèlerinage à La Mecque (Hadj/Omra) et recommandé chez les aspléniques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-17',
    courseId: 'crs-inf-9',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle complication nécrotico-hémorragique des glandes surrénales complique le purpura fulminans méningococcique ?",
    options: [
      "A. Syndrome de Conn",
      "B. Syndrome de Waterhouse-Friderichsen",
      "C. Maladie de Cushing",
      "D. Phéochromocytome",
      "E. Insuffisance rénale obstructive"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Waterhouse-Friderichsen correspond à une nécrose hémorragique bilatérale des surrénales responsable d'un collapsus cardiovasculaire foudroyant.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-18',
    courseId: 'crs-inf-9',
    questionNumber: 18,
    type: 'QCM',
    content: "Un LCR clair avec 120 leucocytes/mm³ (65% lymphocytes), protéines 1,2 g/L, glucose 0,5 g/L chez un patient éthylique sans germe au Gram évoque :",
    options: [
      "A. Méningite tuberculeuse",
      "B. Méningite à Listeria monocytogenes",
      "C. Méningite herpétique",
      "D. Neuroborréliose",
      "E. Méningite à entérovirus"
    ],
    correctAnswers: [1],
    explanation: "L'éthylisme chronique est un facteur de risque majeur de listériose, dont le LCR peut être clair avec panachage lymphocytaire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-9-19',
    courseId: 'crs-inf-9',
    questionNumber: 19,
    type: 'QCM',
    content: "Le traitement empirique de première intention d’une méningite communautaire chez l’adulte jeune sans facteur de risque en Algérie est :",
    options: [
      "A. Ampicilline + Gentamicine",
      "B. Céfotaxime ou Ceftriaxone IV à forte dose associée à la dexaméthasone",
      "C. Céfotaxime + Amikacine",
      "D. Ceftriaxone + Vancomycine",
      "E. Amoxicilline per os"
    ],
    correctAnswers: [1],
    explanation: "Chez l'adulte de moins de 50 ans sans facteur de risque, C3G injectable à forte dose (Céfotaxime 300 mg/kg/j ou Ceftriaxone 100 mg/kg/j) + Dexaméthasone est le standard.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-20',
    courseId: 'crs-inf-9',
    questionNumber: 20,
    type: 'QCM',
    content: "Lors d’une ponction lombaire traumatique hémorragique, comment interpréter la cellularité leucocytaire ?",
    options: [
      "A. On soustrait 1 leucocyte pour 500 à 1000 hématies présentes dans le LCR",
      "B. La ponction est ininterprétable et doit être refaite",
      "C. Les leucocytes sont tous d'origine méningée",
      "D. On divise le nombre d'éléments par 10",
      "E. On attend la culture"
    ],
    correctAnswers: [0],
    explanation: "Règle de correction : soustraire environ 1 globule blanc pour 500 à 1000 hématies amenées par l'effraction vasculaire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-9-21',
    courseId: 'crs-inf-9',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans les méningites néonatales du premier mois de vie, les germes prédominants sont :",
    options: [
      "A. Streptococcus agalactiae (GBS) et Escherichia coli K1",
      "B. Neisseria meningitidis et Pneumocoque",
      "C. Haemophilus influenzae",
      "D. Staphylococcus aureus",
      "E. Pseudomonas aeruginosa"
    ],
    correctAnswers: [0],
    explanation: "Streptococcus agalactiae (streptocoque B) et Escherichia coli K1 représentent plus de 80% des méningites néonatales.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-22',
    courseId: 'crs-inf-9',
    questionNumber: 22,
    type: 'QCM',
    content: "La présence d’un rash purpurique pétéchial nécrotique chez un patient fébrile suspect de méningite impose :",
    options: [
      "A. Une biopsie cutanée d'abord",
      "B. L'injection immédiate d'une première dose de C3G (Ceftriaxone) avant tout autre examen ou transport",
      "C. Un scanner cérébral",
      "D. Une sérologie virale",
      "E. Une surveillance de 6 heures"
    ],
    correctAnswers: [1],
    explanation: "L'administration immédiate d'une C3G est une urgence vitale préhospitalière prioritaire sur la ponction lombaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-23',
    courseId: 'crs-inf-9',
    questionNumber: 23,
    type: 'QCM',
    content: "Le seuil du ratio glycorachie / glycémie évocateur d’une méningite bactérienne est :",
    options: [
      "A. Ratio < 0,4 (ou glycorachie < 2,2 mmol/L)",
      "B. Ratio > 0,6",
      "C. Glycorachie normale",
      "D. Ratio entre 0,5 et 0,7",
      "E. Indépendant de la glycémie"
    ],
    correctAnswers: [0],
    explanation: "Un ratio glycorachie / glycémie < 0,4 est très fortement prédictif d'une étiologie bactérienne ou tuberculeuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-24',
    courseId: 'crs-inf-9',
    questionNumber: 24,
    type: 'QCM',
    content: "Le meilleur paramètre pour juger de l’efficacité du traitement antibiotique d'une méningite est :",
    options: [
      "A. La décroissance de la CRP",
      "B. L’amélioration clinique neurologique et thermique du patient",
      "C. La PL de contrôle systématique à 24h",
      "D. La numération formule sanguine",
      "E. L'électroencéphalogramme"
    ],
    correctAnswers: [1],
    explanation: "L'évolution clinique favorable (défervescence thermique, régression des céphalées et de la raideur) est le critère d'efficacité primordial.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-25',
    courseId: 'crs-inf-9',
    questionNumber: 25,
    type: 'QCM',
    content: "Une ponction lombaire de contrôle à 48 heures de traitement est indiquée dans quelle situation ?",
    options: [
      "A. Méningite à pneumocoque de sensibilité diminuée (PSDP) ou en l'absence d'amélioration clinique franche",
      "B. Toutes les méningites à méningocoque sans exception",
      "C. Chez tous les patients de plus de 60 ans guéris",
      "D. Dès que la CRP baisse",
      "E. Jamais, la PL de contrôle est interdite"
    ],
    correctAnswers: [0],
    explanation: "La PL de contrôle à 48h n'est plus systématique; elle est réservée au pneumocoque avec CMI élevée à la pénicilline, souches résistantes ou en cas d'évolution clinique défavorable.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques Méningites
  {
    id: 'q-inf-9-cc1',
    courseId: 'crs-inf-9',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Garçon de 7 ans amené aux urgences pour fièvre à 40°C, vomissements, somnolence, et purpura ecchymotique extensif aux membres inférieurs apparu en 6 heures. TA 80/50 mmHg, tachycardie.\n\nQuelle est la prise en charge prioritaire ?",
    options: [
      "A. Ponction lombaire avant tout traitement",
      "B. Ceftriaxone IV immédiate + remplissage vasculaire + dexaméthasone",
      "C. TDM cérébrale puis PL",
      "D. Antipyrétiques et surveillance",
      "E. Vancomycine seule"
    ],
    correctAnswers: [1],
    explanation: "Purpura fulminans méningococcique avec choc : urgence vitale absolue. Antibiothérapie par C3G (Ceftriaxone) et remplissage vasculaire immédiats, la PL est différée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-cc2',
    courseId: 'crs-inf-9',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Homme de 45 ans, diabétique, confusion, céphalées depuis 48h. PL : LCR trouble, 4200 leucocytes (90% PNN), diplocoques Gram positifs en paires à l'examen direct. Glycorachie effondrée.\n\nQuel traitement probabiliste initial adapter ?",
    options: [
      "A. Ceftriaxone 2 g x 2/j seule",
      "B. Ceftriaxone + Ampicilline + Vancomycine (couvrant pneumocoque PSDP et Listeria)",
      "C. Amoxicilline + Gentamicine",
      "D. Céfotaxime + Métronidazole",
      "E. Vancomycine + Gentamicine"
    ],
    correctAnswers: [1],
    explanation: "Adulte diabétique avec diplocoques Gram positif : trithérapie C3G + Ampicilline (terrain) + Vancomycine (suspicion PSDP).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-cc3',
    courseId: 'crs-inf-9',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Nourrisson de 2 mois, fièvre, irritabilité, fontanelle bombante. PL : 280 leucocytes (55% lymphocytes, 45% PNN), protéines 1,8 g/L, glucose 0,3 g/L. Consommation familiale de fromage au lait cru.\n\nQuel germe est le plus probable ?",
    options: [
      "A. E. coli",
      "B. Listeria monocytogenes",
      "C. Streptococcus agalactiae",
      "D. Salmonella",
      "E. Entérovirus"
    ],
    correctAnswers: [1],
    explanation: "Nourrisson jeune + fromage non pasteurisé + LCR panaché avec hypoglycorachie = Listeria monocytogenes.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-9-cc4',
    courseId: 'crs-inf-9',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Femme de 28 ans à J10 du post-partum, céphalées fébriles, raideur de nuque. PL : 620 éléments (72% PNN), bacilles Gram négatifs très fins.\n\nQuel germe est le plus vraisemblable ?",
    options: [
      "A. Neisseria meningitidis",
      "B. Escherichia coli",
      "C. Listeria monocytogenes",
      "D. Haemophilus influenzae",
      "E. Klebsiella pneumoniae"
    ],
    correctAnswers: [1],
    explanation: "Dans le post-partum, les méningites à bacilles Gram négatif (E. coli d'origine urinaire ou génitale) sont classiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-9-cc5',
    courseId: 'crs-inf-9',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Homme de 60 ans dialysé, méningite nosocomiale avec bacille Gram négatif non fermentant résistant aux C3G.\n\nQuel germe résistant doit être suspecté en priorité en milieu réanimatoire ?",
    options: [
      "A. Pseudomonas aeruginosa ou Acinetobacter baumannii",
      "B. Enterococcus faecium",
      "C. Staphylococcus aureus",
      "D. Listeria",
      "E. Cryptococcus"
    ],
    correctAnswers: [0],
    explanation: "Chez l'hémodialysé nosocomial, les BGN non fermentants multirésistants (Acinetobacter, Pseudomonas) imposent des thérapeutiques lourdes (carbapénèmes, colistine).",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_9_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-9-mindmap',
    courseId: 'crs-inf-9',
    title: 'Mind Map : Méningites Bactériennes Aiguës',
    type: 'mindmap',
    content: `# Mind Map : Méningites Bactériennes Purulentes

## 1. Bactériologie selon le Terrain
- **Nouveau-né (< 1 mois)** : Streptocoque B (S. agalactiae), E. coli K1, Listeria
- **Nourrisson (1 à 12 mois)** : Méningocoque, Pneumocoque, H. influenzae b
- **Enfant & Adulte jeune (< 50 ans)** : Méningocoque (N. meningitidis), Pneumocoque
- **Sujet âgé (> 50 ans) / Immunodéprimé / Grossesse** : Pneumocoque, Listeria monocytogenes

## 2. Diagnostic & LCR
- **LCR purulent** : > 1 000 PNN/mm³, hyperprotéinorachie (> 1 g/L), ratio glycorachie/glycémie < 0,4, lactates > 3,2 mmol/L
- **Purpura fulminans** : URGENCE ABSOLUE -> 1 dose de C3G (Ceftriaxone) IV ou IM immédiate, transfert SMUR sans attendre la PL

## 3. Prise en Charge Thérapeutique
- **Dexaméthasone** : 10 mg (ou 0,15 mg/kg) IV avant ou avec la 1ère dose d'antibiotique (Pneumocoque et Hib)
- **Antibiothérapie probabiliste** :
  - Adulte < 50 ans : Céfotaxime (300 mg/kg/j) ou Ceftriaxone (100 mg/kg/j)
  - Adulte > 50 ans / terrain : C3G + Ampicilline (200 mg/kg/j) + Vancomycine
- **Prophylaxie des contacts (Méningocoque)** : Rifampicine 600 mg x 2/j x 2 jours (ou Azithromycine)`
  },
  {
    id: 'res-inf-9-astuces',
    courseId: 'crs-inf-9',
    title: 'Mnémotechniques Méningites Purulentes',
    type: 'astuce',
    content: `### Pièges & Formules Méningites (Dr. LAIDANI.M)

1. **Règle de la Dexaméthasone :**
   - « Avant ou avec, jamais après l'antibiotique ! »

2. **Terrain Listeria : « V.I.E. »**
   - **V**ieux (> 50-60 ans)
   - **I**mmunodéprimé
   - **E**nceinte
   *Action : Ajouter impérativement Ampicilline / Amoxicilline IV car les C3G sont totalement inactives sur Listeria !*

3. **Lactates LCR :**
   - Lactates > 3,2 mmol/L = bactérien purulent certain !`
  }
];
