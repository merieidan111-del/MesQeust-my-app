import { Question, CourseResource } from '../../types/medical';

// Lesson 22: Méningites & Encéphalites à liquide clair
export const INFECTIO_LESSON_22_QUESTIONS: Question[] = [
  {
    id: 'q-inf-22-01',
    courseId: 'crs-inf-22',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans l'analyse cytologique et biochimique du liquide cérébrospinal (LCS), quelle anomalie permet de séparer d'emblée les méningites virales bénignes des méningites tuberculeuses et listériennes ?",
    options: [
      "A. Le nombre total d'érythrocytes",
      "B. La glycorachie (rapport glycorachie sur glycémie sanguine contemporaine)",
      "C. La concentration de sodium",
      "D. La présence de plaquettes",
      "E. La mesure du pH"
    ],
    correctAnswers: [1],
    explanation: "Le dosage de la glycorachie comparativement à la glycémie contemporaine est l'élément discriminant fondamental : les méningites virales ont une glycorachie NORMALE (rapport > 0,5), alors que les méningites tuberculeuses, listériennes, mycosiques ou carcinomateuses présentent une HYPOGLYCORACHIE franche (rapport < 0,4).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-02',
    courseId: 'crs-inf-22',
    questionNumber: 2,
    type: 'QCM',
    content: "Quelle est la première cause virale de méningite aiguë lymphocytaire bénigne normoglycorachique chez l'enfant et l'adulte jeune immunocompétent ?",
    options: [
      "A. Le virus de la rage",
      "B. Les Entérovirus (Echovirus, Coxsackievirus A et B) représentant plus de 80% des cas",
      "C. Le Cytomégalovirus (CMV)",
      "D. Le virus JC",
      "E. Le virus de l'hépatite C"
    ],
    correctAnswers: [1],
    explanation: "Les Entérovirus non poliomyélitiques (Coxsackievirus et Echovirus) sont de loin la première étiologie des méningites lymphocytaires aiguës bénignes (plus de 80 à 90% des cas identifiés), avec une recrudescence estivo-automnale épidémique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-03',
    courseId: 'crs-inf-22',
    questionNumber: 3,
    type: 'QCM',
    content: "Devant toute encéphalite aiguë fébrile associant fièvre, confusion mentale, troubles du comportement et crises d'épilepsie temporales, quel traitement antiviral d'extrême urgence doit être débuté SANS ATTENDRE les résultats de la PCR ou de l'imagerie ?",
    options: [
      "A. Ganciclovir par voie orale",
      "B. Aciclovir par voie intraveineuse à la dose de 10 à 15 mg/kg toutes les 8 heures",
      "C. Oseltamivir oral",
      "D. Lamivudine en perfusion",
      "E. Ribavirine en aérosol"
    ],
    correctAnswers: [1],
    explanation: "L'encéphalite herpétique à HSV-1 est une urgence diagnostique et thérapeutique absolue. Tout retard dans l'instauration de l'Aciclovir IV augmente considérablement la mortalité (70% sans traitement) et le risque de séquelles amnésiques définitives (syndrome de Korsakoff). Le traitement doit être débuté immédiatement.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-04',
    courseId: 'crs-inf-22',
    questionNumber: 4,
    type: 'QCM',
    content: "Quel examen d'imagerie cérébrale est le plus sensible pour mettre en évidence précocement les lésions nécrosantes unilatérales ou asymétriques du lobe temporal caractéristiques de l'encéphalite herpétique ?",
    options: [
      "A. La radiographie du crâne",
      "B. L'Imagerie par Résonance Magnétique (IRM) cérébrale en séquences T2 et FLAIR",
      "C. L'artériographie cérébrale",
      "D. L'échographie transfontanellaire chez l'adulte",
      "E. La tomodensitométrie (scanner) sans injection dans les 6 premières heures"
    ],
    correctAnswers: [1],
    explanation: "L'IRM cérébrale est l'examen de choix, montrant précocement (dès les premières 24-48h) un hypersignal en T2, FLAIR et diffusion au niveau de la région temporale interne, insulaire et fronto-basale asymétrique. Le scanner cérébral initial est faussement normal dans plus de 50% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-05',
    courseId: 'crs-inf-22',
    questionNumber: 5,
    type: 'QCM',
    content: "Quelle est la triade cytochimique typique du LCS dans la méningite tuberculeuse (Mycobacterium tuberculosis) ?",
    options: [
      "A. Liquide trouble, hypercytose à 10 000 PNN/mm³, glycorachie normale",
      "B. Liquide clair, pléiocytose modérée lymphocytaire (100 à 500/mm³), hyperprotéinorachie majeure (> 2 à 5 g/L), et hypoglycorachie franche (LCS/sang < 0,3)",
      "C. Liquide eau de roche, zéro cellule, protéinorachie à 0,20 g/L, chlorures normaux",
      "D. Liquide hémorragique avec sédimentation rapide",
      "E. Liquide lactescent riche en triglycérides"
    ],
    correctAnswers: [1],
    explanation: "La méningite tuberculeuse donne un liquide clair ou opalescent qui forme classiquement un voile de fibrine ou 'toile d'araignée' au repos, une prédominance de lymphocytes, une hyperprotéinorachie très élevée (souvent > 2 à 4 g/L), une hypoglycorachie profonde et une hypochlorurorachie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-06',
    courseId: 'crs-inf-22',
    questionNumber: 6,
    type: 'QCM',
    content: "Quelle est l'atteinte neurologique focale des nerfs crâniens la plus fréquente et évocatrice d'une méningite tuberculeuse de la base du crâne ?",
    options: [
      "A. Paralysie isolée du nerf olfactif (I)",
      "B. Paralysie des nerfs oculomoteurs, en particulier le nerf abducens (VI) et le nerf oculomoteur (III)",
      "C. Névralgie essentielle du trijumeau (V)",
      "D. Anosmie complète unilatérale",
      "E. Paralysie bilatérale du nerf grand hypoglosse (XII)"
    ],
    correctAnswers: [1],
    explanation: "L'exsudat gélatineux tuberculeux s'accumule préférentiellement dans les citernes de la base du crâne, engainant les nerfs crâniens. L'atteinte de la VIème paire crânienne (nerf abducens avec diplopie horizontale) et de la IIIème paire est classique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-07',
    courseId: 'crs-inf-22',
    questionNumber: 7,
    type: 'QCM',
    content: "Quelle est la durée totale recommandée du traitement antibiotique antituberculeux d'une méningite tuberculeuse selon les recommandations nationales et internationales ?",
    options: [
      "A. 3 mois",
      "B. 6 mois",
      "C. 12 mois (2 mois de quadrithérapie RHZE puis 10 mois de bithérapie RH)",
      "D. 24 mois continus de 5 molécules",
      "E. 15 jours par voie parentérale"
    ],
    correctAnswers: [2],
    explanation: "Pour les formes neuroméningées de la tuberculose, la durée totale de traitement est de 12 mois : 2 mois de quadrithérapie initiale (Rifampicine, Isoniazide, Pyrazinamide, Éthambutol) suivis de 10 mois de bithérapie de consolidation (Rifampicine + Isoniazide).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-08',
    courseId: 'crs-inf-22',
    questionNumber: 8,
    type: 'QCM',
    content: "Pourquoi associe-t-on systématiquement une corticothérapie adjuvante (Dexaméthasone ou Prednisone) au début du traitement d'une méningite tuberculeuse ?",
    options: [
      "A. Pour guérir la tuberculose sans antibiotique",
      "B. Pour prévenir l'arachnoïdite basilaire, réduire le risque d'hydrocéphalie obstructive, de vascularite cérébrale et diminuer la mortalité et les séquelles neurologiques",
      "C. Pour remplacer la rifampicine",
      "D. Pour stimuler la prolifération de Mycobacterium tuberculosis",
      "E. Pour prévenir la survenue d'un diabète"
    ],
    correctAnswers: [1],
    explanation: "La corticothérapie précoce (Dexaméthasone ou Prednisone dégressive sur 6 à 8 semaines) diminue de manière spectaculaire la mortalité et les séquelles graves en diminuant la réaction inflammatoire intense à la base du crâne, réduisant ainsi les ischémies cérébrales et l'hydrocéphalie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-09',
    courseId: 'crs-inf-22',
    questionNumber: 9,
    type: 'QCM',
    content: "Chez un patient vivant avec le VIH au stade SIDA (CD4 < 100/mm³), quelle levure encapsulée est la cause principale de méningo-encéphalite subaiguë fébrile à liquide clair ?",
    options: [
      "A. Candida albicans",
      "B. Cryptococcus neoformans",
      "C. Aspergillus fumigatus",
      "D. Pneumocystis jirovecii",
      "E. Histoplasma capsulatum"
    ],
    correctAnswers: [1],
    explanation: "Cryptococcus neoformans est une levure opportuniste majeure au stade SIDA sévère (CD4 < 100/mm³). Elle est responsable de méningo-encéphalite subaiguë avec céphalées tenaces, hypertension intracrânienne majeure et raideur de nuque parfois discrète.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-10',
    courseId: 'crs-inf-22',
    questionNumber: 10,
    type: 'QCM',
    content: "Quel examen microscopique direct du culot de centrifugation du LCR permet de visualiser immédiatement la volumineuse capsule réfringente de Cryptococcus neoformans ?",
    options: [
      "A. La coloration de Ziehl-Neelsen",
      "B. La coloration à l'encre de Chine (mise en évidence du halo clair capsulaire non teinté sur fond noir)",
      "C. La coloration de Gram simple",
      "D. La coloration au Giemsa",
      "E. La coloration à l'hématoxyline-éosine"
    ],
    correctAnswers: [1],
    explanation: "La coloration à l'encre de Chine est l'examen rapide de référence : les particules d'encre de Chine ne pénètrent pas la volumineuse capsule polyosidique de la levure, dessinant un halo clair très net autour du corps cellulaire bourgeonnant.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-11',
    courseId: 'crs-inf-22',
    questionNumber: 11,
    type: 'QCM',
    content: "Quel est le traitement d'attaque de première intention d'une méningite cryptococcique chez le patient infecté par le VIH ?",
    options: [
      "A. Métronidazole injectable pendant 1 mois",
      "B. Amphothéricine B (désoxycholate ou liposomale) associée à la 5-Flucytosine par voie intraveineuse pendant 2 semaines, puis relais par Fluconazole",
      "C. Nystatine en gargarismes",
      "D. Griséofulvine per os",
      "E. Voriconazole en collyre"
    ],
    correctAnswers: [1],
    explanation: "Le traitement de référence de la phase d'induction (2 semaines) de la méningite à cryptocoque associe l'Amphothéricine B IV et la 5-Flucytosine (ou de fortes doses de Fluconazole si flucytosine indisponible), suivi d'une phase de consolidation puis d'entretien par Fluconazole oral.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-12',
    courseId: 'crs-inf-22',
    questionNumber: 12,
    type: 'QCM',
    content: "Quelle anomalie électroencéphalographique (EEG) est très évocatrice de l'encéphalite herpétique à HSV-1 en phase aiguë ?",
    options: [
      "A. Pointes-ondes généralisées symétriques à 3 Hz",
      "B. Décharges périodiques unilatérales ou bilatérales asynchrones d'ondes lentes ou pointes lentes temporales (PLEDs)",
      "C. Tracé plat isoélectrique d'emblée",
      "D. Rythme alpha postérieur pur et réactif",
      "E. Ondes thêta diffuses sans foyer"
    ],
    correctAnswers: [1],
    explanation: "L'EEG montre dans 80% des encéphalites herpétiques des anomalies focalisées fronto-temporales caractéristiques : complexes périodiques d'ondes lentes ou pointes-ondes lentes périodiques stéréotypées (PLEDs : Periodic Lateralized Epileptiform Discharges).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-22-13',
    courseId: 'crs-inf-22',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans quelle circonstance une ponction lombaire évacuatrice itérative est-elle indispensable pour sauver le pronostic visuel et vital lors d'une méningite à Cryptococcus neoformans ?",
    options: [
      "A. Dès que la température dépasse 38°C",
      "B. En cas d'hypertension intracrânienne sévère (pression d'ouverture du LCR > 25-30 cm H2O au manomètre)",
      "C. Pour mesurer le taux de potassium",
      "D. Dès que le patient s'alimente",
      "E. En l'absence de tout signe clinique"
    ],
    correctAnswers: [1],
    explanation: "L'obstruction de la résorption du LCS par les polyosides capsulaires de Cryptococcus induit une hypertension intracrânienne majeure responsable de cécité par atrophie optique et d'engagement cérébral. Des PL déplétives quotidiennes réduisant la pression < 20 cm H2O sont indispensables.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-22-14',
    courseId: 'crs-inf-22',
    questionNumber: 14,
    type: 'QCM',
    content: "Concernant la méningite lymphocytaire de la primo-infection par le VIH, quelle caractéristique clinique est fréquente ?",
    options: [
      "A. Atteinte pulmonaire cavitaire géante bilatérale",
      "B. Association à un tableau de primo-infection fébrile avec rash cutané maculopapuleux du tronc, pharyngite et polyadénopathies",
      "C. Surdité de transmission unilatérale d'emblée",
      "D. Cécité corticale réversible",
      "E. Hémiplégie spastique définitive"
    ],
    correctAnswers: [1],
    explanation: "La méningite lymphocytaire aiguë à liquide clair de la primo-infection VIH s'intègre classiquement dans le syndrome mononucléosique fébrile avec adénopathies diffuses, exanthème maculopapuleux, pharyngite et ulcérations muqueuses génitales ou buccales contemporain de la séroconversion.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-15',
    courseId: 'crs-inf-22',
    questionNumber: 15,
    type: 'QCM',
    content: "Quel virus de la famille des Herpesviridae est le plus fréquemment associé à des épisodes récurrents de méningite aiguë bénigne lymphocytaire récidivante à liquide clair (méningite de Mollaret) ?",
    options: [
      "A. Virus de l'hépatite A",
      "B. Herpes Simplex Virus de type 2 (HSV-2)",
      "C. Virus respiratoire syncytial",
      "D. Rotavirus",
      "E. Virus de la rage"
    ],
    correctAnswers: [1],
    explanation: "HSV-2 (associé ou non à des lésions d'herpès génital actif ou latent) est la première cause de méningite lymphocytaire récurrente aseptique bénigne, historiquement décrite sous le terme de syndrome de Mollaret.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-22-16',
    courseId: 'crs-inf-22',
    questionNumber: 16,
    type: 'QCM',
    content: "Parmi les examens microbiologiques modernes du LCS, quelle technique de biologie moléculaire a supplanté l'examen direct et la culture pour le diagnostic précoce de l'encéphalite herpétique ?",
    options: [
      "A. La recherche d'antigènes solubles au latex",
      "B. La PCR (Polymerase Chain Reaction) ADN HSV dans le LCS",
      "C. La sérologie sanguine de fixation du complément",
      "D. L'électrophorèse capillaire des protéines",
      "E. L'hémoculture sur sang citraté"
    ],
    correctAnswers: [1],
    explanation: "La PCR HSV sur le LCS présente une sensibilité et une spécificité supérieures à 95% dès les premières heures de la maladie. Elle constitue l'examen de référence de confirmation de l'encéphalite herpétique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-17',
    courseId: 'crs-inf-22',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans une méningite lymphocytaire à liquide clair, quelle valeur de la protéinorachie oriente fortement vers une tuberculose neuroméningée plutôt que vers une méningite à entérovirus ?",
    options: [
      "A. Protéinorachie normale à 0,25 g/L",
      "B. Protéinorachie modérément augmentée à 0,60 g/L",
      "C. Hyperprotéinorachie massive supérieure à 2 à 3 g/L",
      "D. Protéinorachie nulle",
      "E. Protéines composées exclusivement d'albumine"
    ],
    correctAnswers: [2],
    explanation: "Les méningites virales donnent habituellement une protéinorachie normale ou discrètement élevée (< 1 g/L). Une hyperprotéinorachie franche (> 1,5 à 4 g/L) associée à un liquide clair ou opalescent et une hypoglycorachie est quasi-caractéristique de la tuberculose ou de la cryptococcose.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-18',
    courseId: 'crs-inf-22',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelle est l'évolution spontanée habituelle d'une méningite lymphocytaire aiguë à Entérovirus chez l'adulte jeune immunocompétent sans comorbidité ?",
    options: [
      "A. Évolution constamment fatale en l'absence de traitement antiviral",
      "B. Évolution spontanément favorable avec guérison complète sans séquelle en 5 à 10 jours sous simple traitement antalgique et antipyrétique symptomatique",
      "C. Passage systématique à la chronicité",
      "D. Nécessité d'une dérivation ventriculaire définitive",
      "E. Perte irréversible de l'audition bilatérale"
    ],
    correctAnswers: [1],
    explanation: "La méningite virale à Entérovirus est une maladie d'évolution spontanément bénigne et résolutive chez l'immunocompétent. La défervescence et la disparition des céphalées surviennent en moins d'une semaine sans nécessiter d'antiviral spécifique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-19',
    courseId: 'crs-inf-22',
    questionNumber: 19,
    type: 'QCM',
    content: "Quel test d'amplification génique rapide en cartouche fermée (GeneXpert MTB/RIF) permet d'identifier Mycobacterium tuberculosis et de détecter la résistance à la rifampicine dans le LCS en moins de 2 heures ?",
    options: [
      "A. Le test de mantoux",
      "B. Le test GeneXpert MTB/RIF ultra",
      "C. La goutte épaisse",
      "D. La réaction de VDRL",
      "E. L'hémotest"
    ],
    correctAnswers: [1],
    explanation: "Le test Xpert MTB/RIF Ultra sur le culot de LCS est recommandé par l'OMS pour le diagnostic rapide de la méningite tuberculeuse en raison de sa sensibilité accrue et de sa capacité à détecter la résistance à la Rifampicine en environ 90 minutes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-20',
    courseId: 'crs-inf-22',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle complication rénale toxique de l'Aciclovir intraveineux doit être prévenue par une hydratation abondante continue ?",
    options: [
      "A. La nécrose corticale aiguë bilatérale",
      "B. La néphropathie obstructive par précipitation de cristaux d'aciclovir intratubulaires",
      "C. La glomérulonéphrite extramembraneuse",
      "D. L'adénome rénal bénin",
      "E. La sténose de l'artère rénale"
    ],
    correctAnswers: [1],
    explanation: "L'Aciclovir par voie intraveineuse précipite dans les tubules rénaux en cas de perfusion trop rapide ou de déshydratation, provoquant une insuffisance rénale aiguë aiguë cristalline. Une hydratation intraveineuse préalable et concomitante ainsi qu'une perfusion lente sur au moins 1 heure sont obligatoires.",
    difficulty: 'facile'
  },

  // 5 Progressive Clinical Cases for Lesson 22
  {
    id: 'q-inf-22-c1',
    courseId: 'crs-inf-22',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - ÉTAPE 1 : Un homme de 48 ans sans antécédent est amené aux urgences pour céphalées intenses fébriles (T° 39°C), désorientation temporo-spatiale, propos incohérents et survenue de deux crises partielles temporales avec mâchonnements et hallucinations olfactives. À l'examen : raideur de nuque, aphasie à prédominance motrice, score de Glasgow à 12. Quelle attitude thérapeutique et diagnostique s'impose sans délai ?",
    options: [
      "A. Scanner cérébral le lendemain matin sans traitement",
      "B. Débuter IMMÉDIATEMENT une perfusion d'Aciclovir intraveineux (10 à 15 mg/kg toutes les 8 heures) en urgence absolue après réalisation d'une IRM cérébrale et d'une ponction lombaire avec PCR HSV",
      "C. Donner un traitement antalgique simple et renvoyer à domicile",
      "D. Démarrer une chimiothérapie anticancéreuse",
      "E. Réaliser une biopsie cérébrale à ciel ouvert avant tout geste"
    ],
    correctAnswers: [1],
    explanation: "Le tableau est typique d'une méningo-encéphalite herpétique temporale (troubles du comportement, crises partielles olfactives/motrices, aphasie). L'Aciclovir IV doit être perfusé d'extrême urgence sans aucun retard, associé à l'IRM et à la PL pour PCR HSV.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-c2',
    courseId: 'crs-inf-22',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - ÉTAPE 1 : Un jeune homme de 26 ans consulte pour céphalées fronto-occipitales intenses, photophobie et vomissements évoluant depuis 48 heures dans un contexte épidémique estival. T° 38,2°C, raideur de nuque nette, examen neurologique sans anomalie focale, Glasgow 15. La PL ramène un liquide eau de roche limpide : 180 cellules/mm³ (85% lymphocytes), protéines 0,48 g/L, glycorachie 3,4 mmol/L (glycémie 5,8 mmol/L). Quel est le diagnostic le plus probable et la conduite à tenir ?",
    options: [
      "A. Méningite purulente bactérienne ; C3G IV forte dose",
      "B. Méningite lymphocytaire aiguë bénigne à Entérovirus ; traitement ambulatoire symptomatique par antalgiques et antipyrétiques avec surveillance clinique",
      "C. Tuberculose méningée ; quadrithérapie 12 mois",
      "D. Hématome sous-dural chronique",
      "E. Cryptococcose cérébrale"
    ],
    correctAnswers: [1],
    explanation: "Le LCS clair lymphocytaire avec glycorachie parfaitement normale (rapport > 0,5) chez un sujet jeune sain sans signe de gravité est typique d'une méningite à Entérovirus. L'évolution est spontanément résolutive sous antalgiques simples.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-c3',
    courseId: 'crs-inf-22',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - ÉTAPE 1 : Un homme de 38 ans originaire de Médéa présente depuis 3 semaines une altération fébrile de l'état général avec sueurs nocturnes, anorexie, céphalées progressives et depuis 2 jours une diplopie binoculaire par paralysie du VI gauche. La PL montre un liquide opalescent laissant déposer une fine toile de fibrine : 320 leucocytes/mm³ (80% lymphocytes), protéines 3,2 g/L, glycorachie 1,1 mmol/L pour une glycémie à 6,2 mmol/L, chlorurorachie effondrée. Quel diagnostic retenez-vous et quel traitement complet associez-vous ?",
    options: [
      "A. Méningite virale à HSV-2 ; Valaciclovir per os",
      "B. Méningite tuberculeuse de la base du crâne ; quadrithérapie antituberculeuse (RHZE) pendant 2 mois puis bithérapie (RH) 10 mois, associée à une corticothérapie adjuvante précoce (Prednisone 1 mg/kg/j)",
      "C. Méningite à méningocoque ; Ceftriaxone 4 jours",
      "D. Sclérose en plaques forme rémittente",
      "E. Encéphalite auto-immune anti-NMDA"
    ],
    correctAnswers: [1],
    explanation: "L'installation subaiguë, la paralysie du VI, le voile de fibrine, l'hyperprotéinorachie massive (> 3 g/L), l'hypoglycorachie franche et l'hypochlorurorachie signent la méningite tuberculeuse. Le traitement associe antituberculeux pendant 12 mois et corticothérapie précoce pour prévenir l'arachnoïdite.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-c4',
    courseId: 'crs-inf-22',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - ÉTAPE 1 : Un patient de 34 ans au stade SIDA (CD4 à 45/mm³) non observant consulte pour céphalées holocrâniennes rebelles d'intensité croissante avec vomissements sans fièvre élevée. La raideur méningée est minime. La ponction lombaire montre une pression d'ouverture très élevée à 35 cm H2O. L'examen direct du LCS à l'encre de Chine révèle de nombreuses levures sphériques encapsulées bourgeonnantes. Quel est le traitement antifongique et le geste physique à répéter ?",
    options: [
      "A. Caspofungine IV seule ; aucun geste sur le LCS",
      "B. Bithérapie par Amphothéricine B + 5-Flucytosine IV pendant 2 semaines, associée à des ponctions lombaires déplétives quotidiennes pour ramener la pression < 20 cm H2O",
      "C. Fluconazole 100 mg per os en ambulatoire",
      "D. Corticoïdes à forte dose sans antifongique",
      "E. Pose d'un drain péritonéo-jugulaire en urgence sans médicament"
    ],
    correctAnswers: [1],
    explanation: "Il s'agit d'une méningite à Cryptococcus neoformans avec hypertension intracrânienne majeure menaçant la vision et la vie. Le traitement associe l'Amphothéricine B + Flucytosine et des ponctions lombaires soustractives quotidiennes pour contrôler la pression.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-22-c5',
    courseId: 'crs-inf-22',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - ÉTAPE 1 : Une jeune femme de 22 ans consulte pour un syndrome méningé aigu fébrile avec liquide clair lymphocytaire normoglycorachique. L'interrogatoire retrouve la survenue concomitante d'une primo-infection génitale vésiculeuse très douloureuse. Quelle PCR virale sur le LCR permettra de confirmer l'étiologie de cette méningite ?",
    options: [
      "A. PCR Rubéole",
      "B. PCR HSV-2 (Herpes Simplex Virus type 2)",
      "C. PCR Poliovirus",
      "D. PCR Hépatite E",
      "E. PCR Arbovirus Dengue"
    ],
    correctAnswers: [1],
    explanation: "HSV-2 est l'agent classique des méningites lymphocytaires associées à un herpès génital (primo-infection ou récurrence) ainsi que des méningites bénignes récidivantes de Mollaret. La PCR HSV-2 dans le LCR est positive.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_22_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-22-mindmap',
    courseId: 'crs-inf-22',
    title: 'Mind Map : Arbre Décisionnel des Méningites & Encéphalites à Liquide Clair',
    type: 'mindmap',
    content: `
# MIND MAP : MÉNINGITES & ENCÉPHALITES À LIQUIDE CLAIR
*Diagnostic Différentiel Selon la Glycorachie & l'Imagerie Cérébrale*

## 1. DÉMARCHE DEVANT UN LCS CLAIR LYMPHOCYTAIRE
- **Étape 1 : Regarder la GLYCORACHIE (rapport LCS / sang contemporain)** :
  - **Normoglycorachique (Rapport > 0,5)** -> Origine Virale Bénigne (Entérovirus, VZV, HSV-2, VIH, Oreillons).
  - **Hypoglycorachique (Rapport < 0,4)** -> Pathologie Bactérienne ou Fongique Grave :
    1. **Méningite Tuberculeuse** (protéinorachie > 2-4 g/L, voile de fibrine, hypochlorures).
    2. **Listériose neuroméningée** (formule panachée, sujet âgé/enceinte, rhombencéphalite).
    3. **Cryptococcose** (VIH CD4 < 100, encre de Chine positive, HTIC).
    4. **Méningite bactérienne décapitée** par antibiotiques oraux préalables.

## 2. L'URGENCE ABSOLUE : L'ENCÉPHALITE HERPÉTIQUE (HSV-1)
- **Signes cardinaux** : Fièvre + Confusion mentale + Troubles mnésiques + Hallucinations olfactives/gustatives + Aphasie de Wernicke/Broca + Crises d'épilepsie temporales.
- **RÈGLE THÉRAPEUTIQUE VITALE** :
  - **Aciclovir IV (10-15 mg/kg/8h) D'EXTRÊME URGENCE SANS ATTENDRE** ni l'imagerie ni le résultat de la PCR !
  - Mortalité de 70% sans traitement, séquelles amnésiques (Korsakoff) si retard.
- **Examens de confirmation** : IRM cérébrale (hypersignal T2/FLAIR temporal unilatéral ou asymétrique), EEG (PLEDs temporaux), PCR ADN HSV dans le LCS.

## 3. LA MÉNINGITE TUBERCULEUSE
- **Clinique** : Début progressif, céphalées vespérales, sueurs, diplopie (atteinte du VI ou III à la base du crâne).
- **Traitement standard** :
  - **Quadrithérapie RHZE pendant 2 mois**, puis **Bithérapie RH pendant 10 mois** (durée totale 12 mois).
  - **Corticothérapie adjuvante (Prednisone 1 mg/kg/j dégressive)** obligatoire pour éviter l'arachnoïdite et l'hydrocéphalie.
`
  },
  {
    id: 'res-inf-22-astuces',
    courseId: 'crs-inf-22',
    title: 'Astuces & Pièges aux Examens - Méningites à Liquide Clair',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (MÉNINGITES À LIQUIDE CLAIR)
*Par Dr. LAIDANI.M - Neurologie & Infectiologie*

### ⚠️ PIÈGE N°1 : Encéphalite herpétique et résultat de la PCR
- Question récurrente : « Un patient présente une encéphalite fébrile avec crises temporales. Vous suspectez HSV. Que faites-vous ? »
- **Réponse obligatoire** : Débuter l'Aciclovir IV immédiatement. Ne JAMAIS attendre le résultat de la PCR pour traiter.

### ⚠️ PIÈGE N°2 : La distinction Normoglycorachie vs Hypoglycorachie
- Méningite virale à Entérovirus = Glycorachie normale.
- Méningite tuberculeuse = Glycorachie effondrée + Hyperprotéinorachie massive (> 2-3 g/L) + Voile de fibrine.

### ⚠️ PIÈGE N°3 : Le syndrome de Mollaret
- Épisodes répétés de méningite à liquide clair = HSV-2 latent réactivé.
`
  }
];

// Lesson 23: Cas Cliniques d'Infectiologie (Recueil 20 Cas Pratiques Algérie)
export const INFECTIO_LESSON_23_QUESTIONS: Question[] = [
  {
    id: 'q-inf-23-01',
    courseId: 'crs-inf-23',
    questionNumber: 1,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 (Fièvre Typhoïde) : Un jeune homme de 24 ans consulte pour fièvre en plateau à 40°C avec céphalées frontales intenses, prostration stuporeuse ('tuphos') et épistaxis. L'examen note un pouls à 75 bpm (dissociation pouls-température de Jacques), un abdomen météorisé avec gargouillement de la fosse iliaque droite, une splénomégalie et quelques macules rosées lenticulaires sur le thorax. Quel est le germe responsable et quel examen direct d'isolement est le plus rentable en 1ère semaine ?",
    options: [
      "A. Shigella dysenteriae ; coproculture",
      "B. Salmonella enterica sérotype Typhi (ou Paratyphi A, B, C) ; hémocultures sur milieux ordinaires au pic fébrile",
      "C. Brucella melitensis ; sérologie de Wright",
      "D. Vibrio cholerae ; examen direct des selles",
      "E. Rickettsia conorii ; sérologie indirecte"
    ],
    correctAnswers: [1],
    explanation: "Le tableau est typique de la fièvre typhoïde (Salmonella Typhi/Paratyphi) au stade d'état : tuphos, dissociation pouls-température, taches rosées lenticulaires, splénomégalie et fosse iliaque droite gargouillante. L'hémoculture est le test diagnostique de référence le plus précoce et positif dans 80-90% des cas en première semaine.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-02',
    courseId: 'crs-inf-23',
    questionNumber: 2,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 (Tétanos Aigu Généralisé) : Un agriculteur de 56 ans sans rappel vaccinal depuis 30 ans s'est blessé le pied avec un clou rouillé dans son champ il y a 8 jours. Il consulte pour une gêne douloureuse à la mastication avec contracture invincible et symétrique des mâchoires (trismus), sans fièvre. À l'examen, on note des rides frontales exagérées et des lèvres étirées (faciès sardonique). Le moindre stimulus sonore déclenche des spasmes musculaires axiaux en extension dorsale (opisthotonos). Quelle est la prise en charge immédiate ?",
    options: [
      "A. Traitement ambulatoire par myorelaxants per os",
      "B. Hospitalisation urgente en réanimation en chambre isolée dans le noir et au calme, débridement chirurgical de la plaie, administration d'immunoglobulines humaines spécifiques antitétaniques (ou sérum) associée à une antibiothérapie (Métronidazole ou Pénicilline G), sédation (benzodiazépines) et vaccination antitétanique complète immédiate",
      "C. Injection de corticoïdes à forte dose",
      "D. Antibiothérapie par vancomycine sans débridement",
      "E. Sortie contre avis médical"
    ],
    correctAnswers: [1],
    explanation: "Le tétanos généralisé est causé par la tétanospasmine de Clostridium tetani. C'est une urgence réanimatoire absolue : contrôle des spasmes par benzodiazépines, soins locaux de la porte d'entrée, sérothérapie neutralisante, antibiothérapie et vaccination immédiate car le tétanos n'est PAS immunisant.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-03',
    courseId: 'crs-inf-23',
    questionNumber: 3,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 (Botulisme Alimentaire) : Quatre membres d'une même famille développent 24 heures après un repas festif comportant de la charcuterie artisanale ('cachir') et des conserves familiales une diplopie binoculaire, une mydriase bilatérale aréactive, une sécheresse buccale intense (xérostomie), des fausses routes et une paralysie descendante progressive sans fièvre ni trouble sensitif. Quel est le mécanisme physiopathologique de cette toxi-infection ?",
    options: [
      "A. Destruction auto-immune de la gaine de myéline périphérique",
      "B. Blocage présynaptique irréversible de la libération d'acétylcholine à la jonction neuromusculaire par la toxine botulique de Clostridium botulinum",
      "C. Blocage des récepteurs dopaminergiques striataux",
      "D. Ischémie aiguë du tronc cérébral par thrombose basilaire",
      "E. Nécrose des motoneurones de la corne antérieure de la moelle"
    ],
    correctAnswers: [1],
    explanation: "La toxine botulique (produite par Clostridium botulinum dans les aliments mal stérilisés en anaérobiose) est la plus puissante neurotoxine connue. Elle bloque le relargage présynaptique d'acétylcholine, provoquant une paralysie flasque bilatérale descendante symétrique afebrille avec signes anticholinergiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-04',
    courseId: 'crs-inf-23',
    questionNumber: 4,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 (La Rage Humaine) : Un homme de 30 ans mordu au visage par un chien errant 6 semaines plus tôt, sans avoir consulté ni reçu de soins, présente une anxiété majeure, des spasmes laryngopharyngés suffocants et douloureux déclenchés par la vue ou la tentative d'ingestion d'un verre d'eau (hydrophobie typique), une hypersalivation et une aérophobie. Quel est le pronostic une fois la maladie clinique déclarée et que fallait-il faire le jour de la morsure ?",
    options: [
      "A. Guérison spontanée dans 90% des cas sous antiviraux",
      "B. Évolution constamment mortelle à 100% une fois les signes neurologiques apparus ; la prophylaxie post-exposition précoce (lavage à grande eau et savon pendant 15 minutes, vaccination antirabique selon protocole OMS et immunoglobulines antirabiques locales) le jour de la morsure aurait évité le décès avec une efficacité de 100%",
      "C. Guérison après corticothérapie IV",
      "D. Traitement par perfusion d'amoxicilline",
      "E. Possibilité de survie avec simples séquelles motrices"
    ],
    correctAnswers: [1],
    explanation: "La rage clinique est fatale à 100% (encéphalomyélite aiguë rabique). La prévention post-expositionnelle immédiate (lavage prolongé au savon 15 min, immunoglobulines infiltrées dans la plaie et vaccin rabique) est la seule arme salvatrice et garantit 100% de protection si appliquée avant l'apparition des signes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-05',
    courseId: 'crs-inf-23',
    questionNumber: 5,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 (Fièvre Boutonneuse Méditerranéenne) : Un homme de 50 ans vivant sur le littoral algérien présente en juillet une fièvre aiguë à 39,5°C avec céphalées, courbatures et injection conjonctivale. À l'examen cutané, on découvre une escarre noirâtre croûteuse indolore entourée d'un halo érythémateux dans le pli de l'aine ('tache noire'), associée à un exanthème maculopapuleux érythémateux généralisé atteignant la paume des mains et la plante des pieds. Quel est l'agent pathogène et le traitement oral de première intention ?",
    options: [
      "A. Borrelia burgdorferi ; Amoxicilline 10 jours",
      "B. Rickettsia conorii transmise par la tique brune du chien (Rhipicephalus sanguineus) ; Doxycycline 200 mg/jour par voie orale pendant 5 à 7 jours",
      "C. Treponema pallidum ; Pénicilline retard",
      "D. Leptospira interrogans ; Ampicilline",
      "E. Coxiella burnetii ; Ciprofloxacine"
    ],
    correctAnswers: [1],
    explanation: "La triade méditerranéenne en été : fièvre aiguë + tache noire d'inoculation + éruption maculopapuleuse palmoplantaire signe la FBM à Rickettsia conorii transmise par Rhipicephalus sanguineus. La Doxycycline orale est le traitement curatif d'action spectaculaire avec apyrexie en 48 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-06',
    courseId: 'crs-inf-23',
    questionNumber: 6,
    type: 'Cas Clinique',
    clinicalCaseNumber: 6,
    content: "CAS 6 (Leptospirose Ictéro-Hémorragique) : Un égoutier de 42 ans consulte pour un ictère franc conjonctival cutané 'couleur safran' ou flamboyant, apparu brutalement après un syndrome fébrile avec myalgies intenses des mollets. Le bilan montre une insuffisance rénale aiguë oligurique (créatinine 450 µmol/L), une thrombopénie à 40 000/mm³ et des suffusions hémorragiques conjonctivales. Quel est le mode de transmission habituel et l'antibiothérapie préconisée ?",
    options: [
      "A. Inhalation de spores d'oiseaux ; Érythromycine",
      "B. Contact direct ou indirect d'une peau érodée ou des muqueuses avec de l'eau douce ou de la boue souillée par les urines de rongeurs (rats) infectés ; Pénicilline G IV ou Ceftriaxone IV",
      "C. Ingestion de fruits de mer avariés ; Ciprofloxacine",
      "D. Morsure de vipère ; sérum antivenimeux",
      "E. Transmission interhumaine respiratoire ; isolement strict"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Weil (leptospirose ictéro-hémorragique à L. interrogans sérogroupe Icterohaemorrhagiae) est une zoonose professionnelle contractée au contact d'eau douce contaminée par l'urine de rat. Le traitement précoce repose sur la Ceftriaxone ou la Pénicilline G par voie parentérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-07',
    courseId: 'crs-inf-23',
    questionNumber: 7,
    type: 'Cas Clinique',
    clinicalCaseNumber: 7,
    content: "CAS 7 (Choléra Épidémique) : En période épidémique estivale, un patient de 38 ans présente une diarrhée aqueuse profuse foudroyante indolore et afécale d'aspect 'eau de riz', accompagnée de vomissements incoercibles sans fièvre. En 6 heures, il a émis plus de 8 litres de selles liquides. Il présente des yeux très enfoncés, des plis cutanés persistants, une voix éteinte (aphonie) et une PA imprenable. Quelle est la priorité thérapeutique absolue immédiate pour sauver ce patient ?",
    options: [
      "A. L'administration d'antibiotiques par voie orale en monothérapie exclusive",
      "B. La réhydratation hydroélectrolytique intraveineuse massive immédiate par soluté de Ringer Lactate à grand débit (100 ml/kg dans les premières heures)",
      "C. Des injections répétées de ralentisseurs du transit (Lopéramide)",
      "D. Une dialyse en urgence sans perfusion",
      "E. L'isolement sans perfusion de liquide"
    ],
    correctAnswers: [1],
    explanation: "Dans le choléra sévère à Vibrio cholerae O1, la mort survient en quelques heures par choc hypovolémique et collapsus déshydratant extracellulaire. La réanimation liquidienne hydro-électrolytique intraveineuse par Ringer Lactate est l'extrême urgence salvatrice. L'antibiothérapie (Doxycycline en prise unique) n'est qu'un traitement adjuvant secondaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-08',
    courseId: 'crs-inf-23',
    questionNumber: 8,
    type: 'Cas Clinique',
    clinicalCaseNumber: 8,
    content: "CAS 8 (Primo-Infection VIH) : Un homme de 28 ans présente depuis 5 jours une fièvre à 39°C, une pharyngite érythémateuse, des polyadénopathies cervicales et axillaires, une éruption maculopapuleuse non prurigineuse du tronc et des aphtes buccaux. Il signale un rapport sexuel non protégé 3 semaines auparavant. Le test rapide sérologique VIH (anticorps anti-VIH 1 et 2) revient négatif. Quel examen virologique direct permet d'affirmer le diagnostic de primo-infection VIH en pleine phase de virémie aiguë ?",
    options: [
      "A. Sérologie syphilis seule",
      "B. Quantification de la charge virale plasmatique ARN VIH-1 par RT-PCR (ou détection de l'antigène p24)",
      "C. Hémoculture bactérienne",
      "D. Test de Wright",
      "E. Biopsie ganglionnaire cervicale"
    ],
    correctAnswers: [1],
    explanation: "Lors de la primo-infection VIH précoce, les anticorps ne sont pas encore synthétisés en quantité détectable (fenêtre sérologique). La confirmation repose sur la mise en évidence directe d'une charge virale ARN VIH plasmatique massivement positive (> 100 000 copies/mL) et de l'antigénémie p24.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-09',
    courseId: 'crs-inf-23',
    questionNumber: 9,
    type: 'Cas Clinique',
    clinicalCaseNumber: 9,
    content: "CAS 9 (Pneumocystose Pulmonaire au cours du SIDA) : Un patient infecté par le VIH avec un taux de lymphocytes CD4 à 65/mm³ consulte pour une toux sèche quinteuse, une dyspnée d'effort d'aggravation progressive depuis 3 semaines et une fièvre vespérale. À l'examen : râles crépitants discrets, polypnée à 26/min, désaturation brutale à la marche (SpO2 86%). La radiographie thoracique montre un infiltrat interstitiel réticulo-micronodulaire bilatéral prédominant aux hiles ('en ailes de papillon'). Quel traitement curatif d'urgence associe-t-on devant une PaO2 < 70 mmHg ?",
    options: [
      "A. Amoxicilline 1 g x 3/j",
      "B. Cotrimoxazole (Triméthoprime-Sulfaméthoxazole) à forte dose par voie intraveineuse associé à une corticothérapie adjuvante précoce par Prednisone",
      "C. Ciprofloxacine en monothérapie",
      "D. Isoniazide seul",
      "E. Érythromycine per os"
    ],
    correctAnswers: [1],
    explanation: "La pneumocystose à Pneumocystis jirovecii est l'infection opportuniste inaugurale pulmonaire classique au stade CD4 < 200/mm³. Le traitement de référence est le Cotrimoxazole forte dose IV. En cas d'hypoxémie significative (PaO2 < 70 mmHg ou SaO2 < 92%), l'adjonction immédiate de corticoïdes prévient l'aggravation respiratoire induite par la lyse fongique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-10',
    courseId: 'crs-inf-23',
    questionNumber: 10,
    type: 'Cas Clinique',
    clinicalCaseNumber: 10,
    content: "CAS 10 (Toxoplasmose Cérébrale au cours du SIDA) : Un patient de 40 ans au stade SIDA (CD4 à 30/mm³) développe brutalement un déficit moteur hémiplégique droit à prédominance brachio-faciale, des céphalées et une crise convulsive motrice fébrile. L'IRM cérébrale montre des lésions multiples nodulaires sous-corticales et des noyaux gris centraux, entourées d'un œdème vasogénique avec une prise de contraste typique 'en anneau ou en cocarde'. Quel traitement d'attaque probabiliste doit être débuté immédiatement ?",
    options: [
      "A. Aciclovir IV seul",
      "B. Bithérapie par Pyriméthamine + Sulfadiazine associée à l'Acide folinique (folinate de calcium) par voie orale",
      "C. Céfixime per os",
      "D. Radiothérapie cérébrale en urgence",
      "E. Chloroquine forte dose"
    ],
    correctAnswers: [1],
    explanation: "La toxoplasmose cérébrale à Toxoplasma gondii est la première cause de lésion focale cérébrale avec prise de contraste en cocarde chez le patient séropositif sévèrement immunodéprimé. Le traitement de référence est l'association Pyriméthamine + Sulfadiazine (ou Cotrimoxazole) avec acide folinique pour prévenir la toxicité hématologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-11',
    courseId: 'crs-inf-23',
    questionNumber: 11,
    type: 'Cas Clinique',
    clinicalCaseNumber: 11,
    content: "CAS 11 (Érysipèle de Jambe - DHBNN) : Une femme de 58 ans obèse présente une 'grosse jambe rouge fébrile' unilatérale gauche d'apparition brutale avec frissons à 39,2°C. L'examen retrouve un placard érythémateux cutané chaud, œdématié, bien circonscrit avec bourrelet marginal net et adénite inguinale satellite. L'examen des pieds révèle un intertrigo inter-orteil mycosique fissuré au 4ème espace. Quel est le traitement antibiotique de première intention et quelle mesure essentielle prévient les récidives ?",
    options: [
      "A. Ciprofloxacine 1 mois ; pas de soin de pied",
      "B. Amoxicilline par voie orale (ou pénicilline V) pendant 7 jours et traitement systématique de la porte d'entrée cutanée (antifongique local sur l'intertrigo)",
      "C. Anticoagulation curative seule sans antibiotique",
      "D. Incision cutanée chirurgicale immédiate de toute la jambe",
      "E. Corticoïdes seuls"
    ],
    correctAnswers: [1],
    explanation: "L'érysipèle de jambe (DHBNN à Streptococcus pyogenes) se traite en première intention par l'Amoxicilline orale pendant 7 jours. Le traitement antifongique de l'intertrigo inter-orteil (porte d'entrée bactérienne) est indispensable pour prévenir les récidives fréquentes chez les sujets obèses ou porteurs d'insuffisance veineuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-12',
    courseId: 'crs-inf-23',
    questionNumber: 12,
    type: 'Cas Clinique',
    clinicalCaseNumber: 12,
    content: "CAS 12 (Fascite Nécrosante - DHBN) : Un homme diabétique de 60 ans consulte pour une douleur foudroyante intolérable de la jambe droite, sans commune mesure avec les signes cutanés initiaux. En 12 heures, la lésion s'étend avec apparition de phlyctènes à contenu hémorragique, de plaques bleuâtres livides ardoisées anesthésiques au toucher, d'une crépitation sous-cutanée gazeuse et d'un état de choc avec tachycardie et marbrures. Quel est le geste médico-chirurgical prioritaire qui conditionne la survie ?",
    options: [
      "A. Mettre de la glace et attendre le lendemain",
      "B. Transfert d'extrême urgence au bloc opératoire pour débridement chirurgical large avec excision de tous les tissus nécrosés, associé à une réanimation hémodynamique et une triple antibiothérapie à large spectre",
      "C. Pommade antibiotique locale sans chirurgie",
      "D. Pose de bas de contention de classe 3",
      "E. Simple ponction à l'aiguille fine"
    ],
    correctAnswers: [1],
    explanation: "La dermo-hypodermite bactérienne nécrosante avec fascite (DHBN) est une urgence médico-chirurgicale foudroyante. Le retard chirurgical se paie par la mort ou l'amputation. Seule l'excision chirurgicale complète en urgence des tissus nécrotiques associée à une antibiothérapie parentérale à large spectre permet d'enrayer le processus.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-13',
    courseId: 'crs-inf-23',
    questionNumber: 13,
    type: 'Cas Clinique',
    clinicalCaseNumber: 13,
    content: "CAS 13 (Angine à Streptocoque A & Prévention du RAA) : Une adolescente de 14 ans consulte pour odynophagie fébrile aiguë à 38,8°C. À l'examen : amygdales tuméfiées rouge vif parsemées d'un exsudat pultacé blanchâtre punctiforme, pétéchies au voile du palais et adénopathies sous-angulo-mandibulaires sensibles bilatérales, sans toux ni rhinorrhée. Le Test de Diagnostic Rapide (TDR) streptococcique est positif. Quel est l'objectif premier de l'antibiothérapie par Amoxicilline 6 jours prescrite ?",
    options: [
      "A. Prévenir la survenue d'un cancer de l'amygdale",
      "B. Éviter la survenue du Rhumatisme Articulaire Aigu (RAA) et de la glomérulonéphrite aiguë, accélérer la guérison clinique et réduire la contagiosité",
      "C. Éviter une carie dentaire",
      "D. Prévenir la mononucléose",
      "E. Aucun intérêt, l'angine guérit toujours seule sans complication"
    ],
    correctAnswers: [1],
    explanation: "L'antibiothérapie par Amoxicilline (50 mg/kg/j pendant 6 jours) chez l'enfant et l'adolescent a pour but primordial d'éradiquer Streptococcus pyogenes pour prévenir les complications post-streptococciques non suppurées, au premier rang desquelles le Rhumatisme Articulaire Aigu (RAA), endémique en Algérie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-14',
    courseId: 'crs-inf-23',
    questionNumber: 14,
    type: 'Cas Clinique',
    clinicalCaseNumber: 14,
    content: "CAS 14 (Mononucléose Infectieuse à EBV) : Un étudiant de 20 ans consulte pour une asthénie majeure, une fièvre à 38,5°C et une angine pseudomembraneuse non confluente respectant la luette. Le médecin lui prescrit de l'Amoxicilline. Quarante-huit heures plus tard, il développe un rash maculo-papuleux érythémateux spectaculaire confluant sur tout le corps. L'hémogramme montre une hyperlymphocytose avec 40% de grands lymphocytes bleutés mononucléés hyperbasophiles (syndrome mononucléosique). Quelle est la nature de cette éruption cutanée ?",
    options: [
      "A. Une authentique allergie grave à la pénicilline imposant une contre-indication à vie",
      "B. Une éruption cutanée immuno-médiée non allergique provoquée par la prise d'aminopénicilline au cours d'une infection aiguë à virus Epstein-Barr (EBV)",
      "C. Une scarlatine d'emblée résistante",
      "D. Un syndrome de Lyell débutant",
      "E. Un purpura fulminans"
    ],
    correctAnswers: [1],
    explanation: "L'éruption sous aminopénicilline (Amoxicilline) au cours de la mononucléose infectieuse (EBV) survient dans 80 à 90% des cas. Il ne s'agit pas d'une véritable allergie aux bêta-lactamines, mais d'une réaction immunologique spécifique liée à l'activation polyclonale des lymphocytes B par l'EBV.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-15',
    courseId: 'crs-inf-23',
    questionNumber: 15,
    type: 'Cas Clinique',
    clinicalCaseNumber: 15,
    content: "CAS 15 (Diphtérie Respiratoire) : Un enfant de 7 ans non vacciné en provenance d'une zone frontalière est hospitalisé pour angine fébrile à fausses membranes épaisses, blanc-grisâtres, adhérentes, confluentes et extensives débordant sur la luette et les piliers du voile, s'accompagnant d'un jetage nasal hémorragique fétide et d'un volumineux œdème cervical bilatéral ('cou proconsulaire'). Quel est le geste thérapeutique d'extrême urgence pour neutraliser la toxine diphtérique circulante ?",
    options: [
      "A. Ablation chirurgicale des amygdales",
      "B. Sérothérapie antitoxique diphtérique spécifique immédiate par voie parentérale associée à une antibiothérapie par Macrolide (Érythromycine ou Azithromycine) et isolement respiratoire strict",
      "C. Corticothérapie isolée sans sérum",
      "D. Traitement par nébulisation de sérum salé",
      "E. Vaccination isolée sans aucun autre soin"
    ],
    correctAnswers: [1],
    explanation: "La diphtérie maligne (Corynebacterium diphtheriae) menace par l'obstruction laryngée (croup) et les toxémies cardiaques/neurologiques. La sérothérapie antitoxique spécifique doit être injectée en extrême urgence pour neutraliser la toxine libre avant sa fixation cellulaire, complétée par un macrolide pour arrêter la sécrétion de toxine.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-16',
    courseId: 'crs-inf-23',
    questionNumber: 16,
    type: 'Cas Clinique',
    clinicalCaseNumber: 16,
    content: "CAS 16 (Infection à Clostridioides difficile) : Une patiente de 72 ans hospitalisée en gériatrie et traitée depuis 8 jours par Ceftriaxone pour une pneumopathie développe une diarrhée aqueuse fétide profuse (8 selles liquides par jour) avec météorisme abdominal, fébricule et hyperleucocytose à 18 000 PNN/mm³. La rectoscopie montre des plaques d'exsudat pseudomembraneux jaunâtre surélevé sur une muqueuse hyperhémiée. Quel est le traitement oral de première intention de cette colite pseudomembraneuse ?",
    options: [
      "A. Ralentisseurs du transit par lopéramide à haute dose",
      "B. Vancomycine par voie orale (125 mg 4 fois par jour pendant 10 jours) ou Fidaxomicine par voie orale, après arrêt de l'antibiotique inducteur",
      "C. Amoxicilline per os",
      "D. Ciprofloxacine injectable",
      "E. Lavement baryté évacuateur"
    ],
    correctAnswers: [1],
    explanation: "La colite pseudomembraneuse à Clostridioides difficile est déclenchée par la perturbation du microbiote colique par les antibiotiques (C3G, fluoroquinolones, augmentin). Le traitement de choix est la Vancomycine per os (non absorbée, active dans la lumière colique) ou la Fidaxomicine. Les antidiarrhéiques sont formellement contre-indiqués (risque de colectasie toxique).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-17',
    courseId: 'crs-inf-23',
    questionNumber: 17,
    type: 'Cas Clinique',
    clinicalCaseNumber: 17,
    content: "CAS 17 (TIAC à Staphylococcus aureus) : Six convives ayant partagé un gâteau à la crème pâtissière lors d'un goûter de mariage développent de façon brutale et simultanée, 2 à 4 heures exactement après l'ingestion, des nausées incoercibles, des vomissements en jet répétés et des crampes épigastriques violentes, sans fièvre ni diarrhée sanglante. La guérison spontanée survient en 24 heures. Quel est le mécanisme responsable ?",
    options: [
      "A. Infection invasive de la muqueuse colique par des salmonelles vivantes",
      "B. Ingestion d'une entérotoxine préformée thermostable de Staphylococcus aureus sécrétée dans l'aliment avant son ingestion",
      "C. Intoxication par les organophosphorés",
      "D. Gastroentérite virale à Rotavirus",
      "E. Parasitose intestinale par Giardia duodenalis"
    ],
    correctAnswers: [1],
    explanation: "Une incubation très courte (1 à 6 heures, moyenne 2-4h) avec vomissements au premier plan et absence de fièvre signe l'ingestion d'une entérotoxine staphylococcique thermostable préformée dans un aliment contaminé (crèmes, mayonnaises, laitages). Le traitement est purement symptomatique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-18',
    courseId: 'crs-inf-23',
    questionNumber: 18,
    type: 'Cas Clinique',
    clinicalCaseNumber: 18,
    content: "CAS 18 (Endocardite Infectieuse Subaiguë d'Osler) : Un patient de 45 ans porteur d'un prolapsus de la valve mitrale consulte pour une altération de l'état général fébrile (38,2°C) avec sueurs nocturnes évoluant depuis 6 semaines après un détartrage dentaire sans antibioprophylaxie. L'auscultation cardiaque révèle un souffle systolique d'insuffisance mitrale nouveau. À l'examen, on note des nodules sous-cutanés érythémateux douloureux fugaces sur la pulpe des doigts (faux panaris d'Osler). Trois paires d'hémocultures isolent un Streptococcus oralis (viridans). Quelle durée minimale d'antibiothérapie bactéricide intraveineuse est requise sur cette valve native ?",
    options: [
      "A. 5 jours",
      "B. 4 à 6 semaines complètes d'antibiothérapie bactéricide par voie intraveineuse (ex: Amoxicilline ou Ceftriaxone +/- Gentamicine initiale)",
      "C. 10 jours de céfixime oral",
      "D. 6 mois de rifampicine",
      "E. Remplacement valvulaire sans antibiotique"
    ],
    correctAnswers: [1],
    explanation: "L'endocardite infectieuse d'Osler à streptocoque oral sur valve native requiert une antibiothérapie bactéricide synergique parentérale prolongée de 4 à 6 semaines afin de stériliser les végétations fibrino-plaquettaires avasculaires et prévenir les rechutes et embolies systémiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-19',
    courseId: 'crs-inf-23',
    questionNumber: 19,
    type: 'Cas Clinique',
    clinicalCaseNumber: 19,
    content: "CAS 19 (Choc Septique Abdominal Péritonéal) : Un patient de 68 ans est admis pour contracture abdominale généralisée ('ventre de bois') et état de choc septique avec PA à 75/40 mmHg, marbrures, oligurie et lactates à 5,2 mmol/L. La TDM abdominale montre un pneumopéritoine massif sous les coupoles et un épanchement péritonéal dense en rapport avec une perforation d'un diverticule sigmoïdien. Quelles sont les 3 mesures prioritaires à réaliser de concert ?",
    options: [
      "A. Régime sans résidu, antispasmodiques et surveillance à domicile",
      "B. Réanimation hémodynamique immédiate (remplissage cristalloïde + Noradrénaline pour PAM ≥ 65), antibiothérapie IV à large spectre couvrant les bacilles Gram négatif et anaérobies (ex: Pipéracilline-Tazobactam ou C3G + Métronidazole), et laparotomie chirurgicale d'extrême urgence pour contrôle du foyer (source control)",
      "C. Ponction d'ascite au lit du malade sans intervention",
      "D. Colonoscopie en urgence pour refermer la brèche",
      "E. Ingestion de charbon végétal activé"
    ],
    correctAnswers: [1],
    explanation: "Dans le choc septique sur péritonite par perforation digestive, la survie repose sur la triade indissociable : réanimation volémique et catécholamines pour rétablir la perfusion d'organe, antibiothérapie bactéricide précoce, et chirurgie de contrôle du foyer infectieux sans délai.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-23-20',
    courseId: 'crs-inf-23',
    questionNumber: 20,
    type: 'Cas Clinique',
    clinicalCaseNumber: 20,
    content: "CAS 20 (Accident d'Exposition au Sang - AES chez un Soignant) : Une interne en médecine se blesse profondément au doigt avec une aiguille creuse souillée de sang frais lors d'une ponction d'ascite chez un patient connu porteur chronique de l'Ag HBs et du VIH avec charge virale détectable. L'interne est correctement vaccinée contre l'hépatite B avec un taux d'anticorps anti-HBs documenté à 350 UI/L. Quels sont les soins locaux immédiats et la prise en charge pour le risque VIH et VHB ?",
    options: [
      "A. Faire saigner vigoureusement, ne rien mettre et reprendre le travail",
      "B. Nettoyage immédiat à l'eau et au savon, rinçage abondant et trempage du doigt pendant 5 minutes dans du Dakin ou de la Bétadine dermique ; initiation d'un Traitement Post-Exposition (TPE) antirétroviral pour le VIH dans les 4 premières heures (au maximum 48h) pour 28 jours ; aucun traitement ni vaccin nécessaire pour l'hépatite B car l'interne est parfaitement protégée (anti-HBs > 10 UI/L)",
      "C. Injection immédiate d'immunoglobulines anti-HBs et chimiothérapie",
      "D. Amputation du doigt blessé",
      "E. Déclaration d'AES dans un délai de 6 mois"
    ],
    correctAnswers: [1],
    explanation: "Prise en charge standardisée de l'AES : 1) Soins locaux immédiats : lavage à l'eau et savon sans faire saigner puis trempage antiseptique 5 min (Dakin ou dérivé chloré/iodé). 2) VIH : TPE trithérapie débuté au mieux < 4h (max 48h) pour 28 jours. 3) VHB : Sujet immunisé avec anti-HBs > 10 UI/L = protection totale garantie, aucune mesure VHB requise.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_23_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-23-mindmap',
    courseId: 'crs-inf-23',
    title: 'Mind Map : Guide de Pratique Clinique des Urgences Infectieuses en Algérie',
    type: 'mindmap',
    content: `
# GUIDE DE PRATIQUE CLINIQUE - URGENCES INFECTIEUSES EN ALGÉRIE
*Synthèse des 20 Cas Pratiques Pédagogiques & Protocoles Hospitaliers*

## 1. LES INFECTIONS BACTÉRIENNES INVASIVES
- **Fièvre Typhoïde** : Tuphos + pouls dissocié de Jacques + hémocultures J1 -> C3G ou Ciprofloxacine.
- **Tétanos** : Trismus + opisthotonos + absence de vaccin -> Réa + Sérothérapie + Débridement + Vaccin (maladie non immunisante).
- **Botulisme** : Paralysie descendante afébrile + mydriase après conserve artisanale -> Toxine botulique (bloc présynaptique).
- **Leptospirose** : Ictère flamboyant safran + insuffisance rénale aiguë + contact eau/rat -> Pénicilline G / Ceftriaxone.
- **Choléra** : Diarrhée aqueuse 'eau de riz' afécale -> Réhydratation intraveineuse massive Ringer Lactate.

## 2. DERMOHYPODERMITES & URGENCES CHIRURGICALES
- **Érysipèle (DHBNN)** : Bourrelet marginal + fièvre -> Amoxicilline 7 jours + traitement de la porte d'entrée (intertrigo).
- **Fascite nécrosante (DHBN)** : Douleur disproportionnée + crépitation + nécrose -> Bloc opératoire en extrême urgence (débridement).

## 3. PATHOLOGIES LIÉES AU VIH
- **Primo-infection** : Syndrome mononucléosique + charge virale ARN VIH (sérologie négative en fenêtre).
- **Pneumocystose (CD4 < 200)** : Infiltrat bilatéral en ailes de papillon -> Cotrimoxazole forte dose + Corticoïdes si PaO2 < 70.
- **Toxoplasmose cérébrale (CD4 < 100)** : Prise de contraste en cocarde / abcès multiples -> Pyriméthamine + Sulfadiazine + Acide folinique.

## 4. RÈGLES DE SÉCURITÉ EN MILIEU DE SOINS (AES)
- Lavage eau/savon + désinfection 5 min Dakin.
- TPE VIH dans les 4h (max 48h) pour 28 jours.
- Hépatite B : si anti-HBs > 10 UI/L -> sujet immunisé protégé.
`
  },
  {
    id: 'res-inf-23-astuces',
    courseId: 'crs-inf-23',
    title: 'Astuces & Clés Diagnostiques aux Examens Pratiques',
    type: 'astuce',
    content: `
# CLÉS DIAGNOSTIQUES & RÉFLEXES DE CONCOURS (INFECTIOLOGIE PRATIQUE)
*Par Dr. LAIDANI.M - Faculté de Médecine d'Alger*

### 💡 Association de Mots-Clés Incontournables :
- « Tuphos + Pouls dissocié + Taches rosées » -> **Fièvre Typhoïde**
- « Trismus sans fièvre + Faciès sardonique » -> **Tétanos**
- « Conserve avariée + Mydriase aréactive + Afebrilité » -> **Botulisme**
- « Morsure canine + Hydrophobie » -> **Rage (100% létale si déclarée)**
- « Tique de chien + Tache noire + Éruption palmoplantaire » -> **FBM (Doxycycline)**
- « Égoutier + Ictère safran + Rein aigu » -> **Leptospirose (Ceftriaxone)**
- « Diarrhée eau de riz afécale » -> **Choléra (Ringer Lactate prioritaire)**
- « Prise d'amoxicilline + Rash généralisé chez jeune avec angine » -> **EBV / Mononucléose**
- « Faux panaris d'Osler + Souffle de novo » -> **Endocardite Infectieuse**
`
  }
];
