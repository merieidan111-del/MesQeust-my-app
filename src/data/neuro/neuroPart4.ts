import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 10: L'HYDROCÉPHALIE
// ==========================================
export const NEURO_LESSON_10_QUESTIONS: Question[] = [
  {
    id: 'q-nro-10-01',
    courseId: 'crs-neuro-10',
    questionNumber: 1,
    type: 'QCM',
    content: "Le terme 'hydrocéphalie' désigne principalement :",
    options: [
      "A) Une augmentation isolée de la production de LCR.",
      "B) Une accumulation excessive de LCR dans les espaces sous-arachnoïdiens uniquement.",
      "C) Une distension progressive des espaces intracrâniens contenant normalement le LCR, liée à un déséquilibre entre production, circulation et résorption.",
      "D) Une atrophie cérébrale avec élargissement ventriculaire secondaire.",
      "E) Une hypertension intracrânienne sans modification des cavités ventriculaires."
    ],
    correctAnswers: [2],
    explanation: "La définition fondamentale est un déséquilibre dynamique entre sécrétion, circulation et résorption entraînant une distension des cavités ventriculaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-02',
    courseId: 'crs-neuro-10',
    questionNumber: 2,
    type: 'QCM',
    content: "Chez le nourrisson de 3 mois, le signe clinique majeur d'une hydrocéphalie évolutive est :",
    options: [
      "A) Une fontanelle antérieure déprimée.",
      "B) Une macrocranie avec augmentation rapide du périmètre crânien (> 2 cm/semaine) et fontanelle bombée.",
      "C) Des crises convulsives généralisées.",
      "D) Une paralysie des nerfs crâniens.",
      "E) Un strabisme divergent isolé."
    ],
    correctAnswers: [1],
    explanation: "Avant fermeture des sutures, l'expansion du périmètre crânien (> 2 cm/semaine au 1er trimestre) avec disjonction des sutures et fontanelle antérieure bombée est le signe d'alerte capital.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-03',
    courseId: 'crs-neuro-10',
    questionNumber: 3,
    type: 'QCM',
    content: "La principale voie physiologique de résorption du LCR chez l'adulte est assurée par :",
    options: [
      "A) Les espaces périneuraux des nerfs crâniens.",
      "B) L'épendyme des ventricules.",
      "C) Les villosités et granulations arachnoïdiennes de Pacchioni au niveau des sinus veineux duraux.",
      "D) La membrane de lyma.",
      "E) La circulation lymphatique cervicale."
    ],
    correctAnswers: [2],
    explanation: "Les granulations de Pacchioni (dans le sinus sagittal supérieur) sont le site majeur de résorption passive du LCR vers le réseau veineux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-04',
    courseId: 'crs-neuro-10',
    questionNumber: 4,
    type: 'QCM',
    content: "Une hydrocéphalie dite 'non communicante' (ou obstructive) implique :",
    options: [
      "A) Un obstacle en aval des ventricules, au niveau des espaces sous-arachnoïdiens.",
      "B) Une absence de communication entre les ventricules et l'espace sous-arachnoïdien spinal.",
      "C) Un obstacle sur les voies d'écoulement à l'intérieur du système ventriculaire (ex: sténose de l'aqueduc de Sylvius, tumeur du 4ème ventricule).",
      "D) Une résorption déficiente du LCR malgré une circulation normale.",
      "E) Une hyperproduction majeure de LCR."
    ],
    correctAnswers: [2],
    explanation: "L'hydrocéphalie non communicante est liée à un blocage mécanique intrinsèque sur les voies ventriculaires (foramens de Monro, aqueduc de Sylvius, orifices de Luschka et Magendie).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-05',
    courseId: 'crs-neuro-10',
    questionNumber: 5,
    type: 'QCM',
    content: "Quelle mesure échographique anténatale est l'indicateur clé de ventriculomégalie chez le fœtus ?",
    options: [
      "A) Diamètre bipariétal > 95ème percentile.",
      "B) Diamètre atrial des ventricules latéraux > 10 mm.",
      "C) Longueur fémorale.",
      "D) Circonférence abdominale.",
      "E) Épaisseur du placenta."
    ],
    correctAnswers: [1],
    explanation: "Une largeur atriale des ventricules latéraux > 10 mm au 2ème ou 3ème trimestre définit la ventriculomégalie fœtale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-06',
    courseId: 'crs-neuro-10',
    questionNumber: 6,
    type: 'QCM',
    content: "Le tableau clinique le plus fréquent d'une hydrocéphalie aiguë obstructive de l'adulte est :",
    options: [
      "A) Une démence sous-corticale progressive.",
      "B) Un syndrome d'hypertension intracrânienne (HTIC) aigu avec céphalées violentes, vomissements en jet et troubles de conscience.",
      "C) Une ataxie cérébelleuse isolée.",
      "D) Une hémiparésie spastique.",
      "E) Une anosmie."
    ],
    correctAnswers: [1],
    explanation: "L'augmentation rapide de la pression intraventriculaire dans une boîte crânienne fermée chez l'adulte provoque un syndrome d'HTIC aiguë menaçant le pronostic vital.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-07',
    courseId: 'crs-neuro-10',
    questionNumber: 7,
    type: 'QCM',
    content: "L'hydrocéphalie chronique à pression normale (HPN de Hakim-Adams) associe classiquement la triade :",
    options: [
      "A) Céphalée, vomissement, œdème papillaire.",
      "B) Troubles de la marche (apraxie/marche magnétique), détérioration intellectuelle (démence), incontinence urinaire.",
      "C) Aphasie, hémianopsie, hémiparésie.",
      "D) Raideur de nuque, photophobie, fièvre.",
      "E) Tremblement intentionnel, nystagmus, dysarthrie."
    ],
    correctAnswers: [1],
    explanation: "La triade de Hakim-Adams réunit : troubles précoces de la marche (marche à petits pas traînants), troubles cognitifs sous-cortico-frontaux et troubles sphinctériens (miction impérieuse/incontinence).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-08',
    courseId: 'crs-neuro-10',
    questionNumber: 8,
    type: 'QCM',
    content: "Quelle est l'étiologie congénitale la plus fréquente d'hydrocéphalie obstructive chez le nourrisson ?",
    options: [
      "A) Kyste arachnoïdien.",
      "B) Anévrisme de la veine de Galien.",
      "C) Sténose de l'aqueduc de Sylvius (70% des cas obstructifs).",
      "D) Spina bifida.",
      "E) Syndrome de Dandy-Walker."
    ],
    correctAnswers: [2],
    explanation: "La sténose congénitale de l'aqueduc de Sylvius représente environ 70% des hydrocéphalies obstructives néonatales isolées.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-09',
    courseId: 'crs-neuro-10',
    questionNumber: 9,
    type: 'QCM',
    content: "Dans l'hémorragie intraventriculaire du prématuré, le mécanisme principal conduisant à l'hydrocéphalie progressive est :",
    options: [
      "A) L'hyperproduction réactionnelle de LCR.",
      "B) La compression directe du parenchyme cérébral.",
      "C) L'arachnoïdite inflammatoire et la fibrose des espaces sous-arachnoïdiens bloquant la résorption du LCR.",
      "D) Une thrombose veineuse cérébrale.",
      "E) Une lyse enzymatique de l'épendyme."
    ],
    correctAnswers: [2],
    explanation: "La dégradation du sang dans le LCR déclenche une réaction inflammatoire et une obstruction fibreuse des villosités arachnoïdiennes, responsable d'une hydrocéphalie communicante post-hémorragique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-10',
    courseId: 'crs-neuro-10',
    questionNumber: 10,
    type: 'QCM',
    content: "L'examen de premier choix pour le diagnostic morphologique et étiologique d'une hydrocéphalie chez l'adulte est :",
    options: [
      "A) La radiographie du crâne.",
      "B) L'échographie transfontanellaire.",
      "C) La ponction lombaire avec mesure de la pression.",
      "D) L'IRM cérébrale (séquences T1, T2, FLAIR, coupes sagittales fines).",
      "E) L'angioTDM cérébrale."
    ],
    correctAnswers: [3],
    explanation: "L'IRM visualise la dilatation tétra- ou tri-ventriculaire, le siège de l'obstacle, le flux au niveau de l'aqueduc et les signes de transsudation épendymaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-11',
    courseId: 'crs-neuro-10',
    questionNumber: 11,
    type: 'QCM',
    content: "L'acétazolamide (Diamox) utilisé dans le traitement médical temporaire d'attente de l'hydrocéphalie agit en :",
    options: [
      "A) Augmentant la résorption du LCR au niveau des villosités.",
      "B) Diminuant la production de LCR par inhibition de l'anhydrase carbonique des plexus choroïdes.",
      "C) Perméabilisant l'aqueduc de Sylvius.",
      "D) Réduisant l'œdème cérébral péri-lésionnel.",
      "E) Favorisant la circulation veineuse cérébrale."
    ],
    correctAnswers: [1],
    explanation: "L'acétazolamide inhibe l'anhydrase carbonique choroïdienne, réduisant d'environ 50% la sécrétion de LCR (traitement médical d'attente).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-12',
    courseId: 'crs-neuro-10',
    questionNumber: 12,
    type: 'QCM',
    content: "La ventriculocisternostomie endoscopique du 3ème ventricule (VCS) est particulièrement indiquée dans :",
    options: [
      "A) Les hydrocéphalies communicantes post-hémorragiques pures.",
      "B) Les hydrocéphalies obstructives non communicantes (sténose de l'aqueduc, tumeurs de la région pinéale ou fosse postérieure).",
      "C) L'hydrocéphalie à pression normale idiopathique.",
      "D) Les hydrocéphalies par hyperproduction.",
      "E) Les hydrocéphalies avec infection active du LCR."
    ],
    correctAnswers: [1],
    explanation: "La VCS court-circuite l'obstacle en perforant le plancher du 3ème ventricule vers la citerne prépontique, idéale dans les sténoses de l'aqueduc.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-13',
    courseId: 'crs-neuro-10',
    questionNumber: 13,
    type: 'QCM',
    content: "Une complication abdominale spécifique de la dérivation ventriculo-péritonéale (DVP) est :",
    options: [
      "A) L'abcès cérébral.",
      "B) Le pseudo-kyste péritonéal au niveau de l'extrémité distale du cathéter.",
      "C) La thrombophlébite cérébrale.",
      "D) L'hémorragie sous-arachnoïdienne diffuse.",
      "E) L'infarctus cérébelleux."
    ],
    correctAnswers: [1],
    explanation: "Le pseudo-kyste péritonéal est une collection liquidienne enkystée autour du cathéter abdominal, secondaire à un trouble de résorption péritonéale ou à une infection à bas bruit.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-14',
    courseId: 'crs-neuro-10',
    questionNumber: 14,
    type: 'QCM',
    content: "Le signe radiologique caractéristique d'une hydrocéphalie active sous haute pression à la TDM/IRM est :",
    options: [
      "A) Une dilatation ventriculaire asymétrique.",
      "B) Un élargissement des sillons corticaux.",
      "C) Un œdème périventriculaire (halo d'hypodensité en scanner / hypersignal T2) traduisant la résorption trans-épendymaire du LCR.",
      "D) Des calcifications péri-ventriculaires.",
      "E) Une atrophie de l'hippocampe."
    ],
    correctAnswers: [2],
    explanation: "L'œdème ou halo périventriculaire traduit la transsudation de LCR sous pression à travers l'épendyme cérébral, attestant du caractère actif et évolutif de l'hydrocéphalie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-15',
    courseId: 'crs-neuro-10',
    questionNumber: 15,
    type: 'QCM',
    content: "La malformation d'Arnold-Chiari de type II est quasi-constamment associée à :",
    options: [
      "A) Une craniosténose.",
      "B) Un méningocèle cervical.",
      "C) Un myéloméningocèle lombo-sacré et une hydrocéphalie obstructive.",
      "D) Une agénésie du corps calleux isolée.",
      "E) Des anévrysmes artério-veineux."
    ],
    correctAnswers: [2],
    explanation: "Le Chiari II associe une descente des amygdales et du tronc cérébral à travers le foramen magnum, un myéloméningocèle ouvert lombaire et une hydrocéphalie (dans 80-90% des cas).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-16',
    courseId: 'crs-neuro-10',
    questionNumber: 16,
    type: 'QCM',
    content: "Le syndrome de Dandy-Walker associe classiquement la triade malformative suivante :",
    options: [
      "A) Agénésie ou hypoplasie du vermis cérébelleux + dilatation kystique du 4ème ventricule + hydrocéphalie.",
      "B) Sténose de l'aqueduc + macrocranie isolée.",
      "C) Anévrisme de la veine de Galien + insuffisance cardiaque.",
      "D) Spina bifida + pied bot.",
      "E) Microcéphalie + calcifications péri-ventriculaires."
    ],
    correctAnswers: [0],
    explanation: "La triade de Dandy-Walker réunit l'agénésie vermienne cérébelleuse, le volumineux kyste de la fosse postérieure communicant avec le V4 et l'hydrocéphalie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-17',
    courseId: 'crs-neuro-10',
    questionNumber: 17,
    type: 'QCM',
    content: "Une ponction lombaire est formellement contre-indiquée en cas de suspicion d'hydrocéphalie obstructive en raison :",
    options: [
      "A) Du risque d'infection locale.",
      "B) Du risque majeur d'engagement cérébral (temporal ou amygdalien) par gradient de pression brutal.",
      "C) D'un risque d'hématome.",
      "D) D'une modification des résultats cytologiques.",
      "E) D'une baisse de l'audition."
    ],
    correctAnswers: [1],
    explanation: "La soustraction de LCR en dessous d'un blocage ventriculaire crée un gradient de pression majeur précipitant l'engagement des amygdales cérébelleuses dans le trou occipital.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-18',
    courseId: 'crs-neuro-10',
    questionNumber: 18,
    type: 'QCM',
    content: "L'hyperdrainage d'une dérivation ventriculo-péritonéale (valve trop peu résistante) se manifeste cliniquement par :",
    options: [
      "A) Une hypertension intracrânienne permanente.",
      "B) Des céphalées orthostatiques (aggravées debout, soulagées couché) et un risque d'hématome sous-dural chronique.",
      "C) Des crises d'épilepsie tonico-cloniques.",
      "D) Un œdème papillaire bilatéral.",
      "E) Une augmentation rapide du périmètre crânien."
    ],
    correctAnswers: [1],
    explanation: "L'hyperdrainage crée une hypotension intracrânienne avec céphalées positionnelles soulagées en décubitus et collapsus ventriculaire pouvant déchirer les veines ponts (hématome sous-dural).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-19',
    courseId: 'crs-neuro-10',
    questionNumber: 19,
    type: 'QCM',
    content: "Le principal avantage de la ventriculocisternostomie endoscopique (VCS) par rapport à la DVP est :",
    options: [
      "A) L'absence totale de complications.",
      "B) L'absence de matériel étranger implanté, éliminant tout risque d'infection de shunt ou de dysfonctionnement mécanique au long cours.",
      "C) Sa facilité d'exécution sans équipement spécialisé.",
      "D) Son efficacité dans 100% des formes d'hydrocéphalie.",
      "E) Qu'elle ne nécessite pas d'anesthésie."
    ],
    correctAnswers: [1],
    explanation: "La VCS rétablit un écoulement physiologique sans matériel prothétique, affranchissant le patient des complications de shunt (obstruction, infection, révisions multiples).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-20',
    courseId: 'crs-neuro-10',
    questionNumber: 20,
    type: 'QCM',
    content: "Le signe du 'coucher de soleil' chez le nourrisson hydrocéphale correspond à :",
    options: [
      "A) Un nystagmus rotatoire.",
      "B) Une déviation conjuguée des globes oculaires vers le bas avec rétraction des paupières supérieures découvrant la sclérotique.",
      "C) Une rougeur conjonctivale vespérale.",
      "D) Une mydriase bilatérale fixe.",
      "E) Une cécité transitoire nocturne."
    ],
    correctAnswers: [1],
    explanation: "Le signe du coucher de soleil (déviation des yeux vers le bas avec sclère visible au-dessus de l'iris) résulte de la compression du tectum mésencéphalique par la dilatation du 3ème ventricule.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 10
  {
    id: 'q-nro-10-c1',
    courseId: 'crs-neuro-10',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Nourrisson de 4 mois amené pour augmentation du périmètre crânien de 3 cm en un mois (> 97e percentile). Fontanelle large et bombée, sutures disjointes. L'échographie transfontanellaire montre une dilatation ventriculaire importante symétrique. Quel est le diagnostic et l'étiologie congénitale la plus fréquente ?",
    options: [
      "A) Rachitisme ; carence en vitamine D",
      "B) Hydrocéphalie évolutive ; sténose congénitale de l'aqueduc de Sylvius",
      "C) Macrocranie familiale bénigne",
      "D) Hématome sous-dural chronique",
      "E) Maladie de Canavan"
    ],
    correctAnswers: [1],
    explanation: "Macrocranie rapide + fontanelle bombée + dilatation ventriculaire = hydrocéphalie active, le plus souvent par sténose de l'aqueduc de Sylvius chez le nourrisson.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-c2',
    courseId: 'crs-neuro-10',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Homme de 68 ans avec troubles de marche évoluant depuis 6 mois (démarche à petits pas, pieds collés au sol, chutes), troubles de la mémoire récente et incontinence urinaire occasionnelle. Quel syndrome clinique et quel examen de confirmation ?",
    options: [
      "A) Maladie de Parkinson ; Test à la L-Dopa",
      "B) Hydrocéphalie à pression normale (triade de Hakim-Adams) ; IRM cérébrale montrant une dilatation ventriculaire disproportionnée",
      "C) Atteinte médullaire ; EMG",
      "D) AVC sylvien ; TDM",
      "E) Démence d'Alzheimer pure ; Ponction lombaire isolée"
    ],
    correctAnswers: [1],
    explanation: "La triade clinique classique apraxie de la marche + démence sous-corticale + incontinence signe l'HPN, confirmée par l'IRM cérébrale (indice d'Evans > 0,30).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-c3',
    courseId: 'crs-neuro-10',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Prématuré de 30 SA avec antécédent d'hémorragie intraventriculaire grade III, présente à J15 une augmentation de taille des ventricules et une fontanelle tendue. Quel est le mécanisme et le traitement d'attente temporaire ?",
    options: [
      "A) Hyperproduction de LCR ; Diurétiques",
      "B) Trouble de résorption du LCR par fibrose sous-arachnoïdienne (communicante) ; Ponctions lombaires ou fontanellaires soustractives itératives",
      "C) Obstruction de l'aqueduc ; DVP immédiate",
      "D) Thrombose veineuse ; Anticoagulants",
      "E) Malformation de Dandy-Walker ; Chirurgie"
    ],
    correctAnswers: [1],
    explanation: "L'hémorragie induit une arachnoïdite oblitérante. Les ponctions lombaires itératives servent de pont temporaire pour attendre un poids suffisant avant chirurgie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-c4',
    courseId: 'crs-neuro-10',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Enfant de 8 ans, céphalées matinales avec vomissements en jet depuis 3 semaines, strabisme convergent (paralysie du VI gauche) et œdème papillaire bilatéral sans fièvre. Quelle est la première étape en urgence ?",
    options: [
      "A) Ponction lombaire pour analyse du LCR",
      "B) Corticothérapie sans imagerie",
      "C) Imagerie cérébrale en urgence (TDM puis IRM) pour rechercher une tumeur de la fosse postérieure avec hydrocéphalie obstructive",
      "D) Hospitalisation en psychiatrie",
      "E) Antibiothérapie probabiliste"
    ],
    correctAnswers: [2],
    explanation: "Syndrome d'HTIC chez l'enfant avec paralysie du VI = tumeur de la fosse postérieure (médulloblastome/astrocytome) avec hydrocéphalie obstructive. La PL est formellement contre-indiquée.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-10-c5',
    courseId: 'crs-neuro-10',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Enfant de 5 ans porteur d'une DVP pour hydrocéphalie congénitale, consulte pour céphalées intenses, vomissements et somnolence. La valve est dure et non déprimable. Quel diagnostic et quel examen rapide ?",
    options: [
      "A) Shuntite infectieuse ; Hémocultures",
      "B) Hyperdrainage du shunt ; Radiographie pulmonaire",
      "C) Dysfonctionnement mécanique par obstruction ventriculaire du shunt ; TDM cérébrale sans injection en urgence pour évaluer la redilatation ventriculaire",
      "D) Épanchement sous-dural ; Échographie abdominale",
      "E) Crise d'angoisse ; Rassurer"
    ],
    correctAnswers: [2],
    explanation: "Céphalées + vomissements + valve dure = obstruction mécanique en amont (cathéter ventriculaire bouché). Le scanner en urgence objective la redilatation ventriculaire indiquant la révision chirurgicale.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_10_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-10-mindmap',
    courseId: 'crs-neuro-10',
    title: 'Carte Mentale : L\'Hydrocéphalie (Physiopathologie & Clinique)',
    type: 'mindmap',
    content: `
# CARTE MENTALE : L'HYDROCÉPHALIE
*Excès de LCR dans les cavités ventriculaires - Neurochirurgie Pédiatrique & Adulte*

## 1. CLASSIFICATION PHYSIOPATHOLOGIQUE
- **Non-communicante (Obstructive)** : Obstacle mécanique intrinsèque (Sténose de l'aqueduc 70%, Tumeurs fosse postérieure, Kystes). Traitement idéal = **Ventriculocisternostomie (VCS)**.
- **Communicante (Résorptive)** : Obstacle en aval au niveau des villosités arachnoïdiennes de Pacchioni (Post-méningite, Post-hémorragie intraventriculaire, HPN). Traitement = **DVP (Dérivation ventriculo-péritonéale)**.

## 2. FORMES CLINIQUES SELON L'ÂGE
- **Nourrisson** : Boîte crânienne extensible -> Macrocranie rapide (> 2 cm/semaine), fontanelle bombée, disjonction des sutures, signe du coucher de soleil.
- **Enfant / Adulte aigu** : Boîte fermée -> Syndrome d'HTIC aigu (céphalées, vomissements en jet, œdème papillaire, risque d'engagement).
- **Adulte chronique (HPN)** : Triade de Hakim-Adams -> Troubles de la marche (apraxie) + Démence sous-corticale + Incontinence urinaire.
`
  },
  {
    id: 'res-nro-10-astuces',
    courseId: 'crs-neuro-10',
    title: 'Astuces & Mnémotechniques : L\'Hydrocéphalie',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (HYDROCÉPHALIE)
*Par Dr. LAIDANI.MERIEM*

- **Triade de Hakim-Adams : « MCI » (ou Wacky Triad)**
  - **M**arche (apraxie, démarche magnétique)
  - **C**ognition (ralentissement sous-cortico-frontal)
  - **I**ncontinence urinaire

- **Causes Congénitales : « SCANDAL »**
  - **S**ténose de l'Aqueduc
  - **C**hiari II (myéloméningocèle)
  - **A**queduc forking
  - **N**eural tube defect
  - **D**andy-Walker (agénésie vermienne + kyste V4)
  - **A**trésie foramens
  - **L**ésions kystiques arachnoïdiennes

- **Règle du Périmètre Crânien du Nourrisson : « 2 - 1 - 0.5 »**
  - +2 cm/mois au 1er trimestre (> 2 cm/semaine = ALARME Hydrocéphalie !)
  - +1 cm/mois au 2e trimestre
  - +0.5 cm/mois au 3e trimestre
`
  }
];

// ==========================================
// LESSON 11: ÉPILEPSIES ET CRISES ÉPILEPTIQUES
// ==========================================
export const NEURO_LESSON_11_QUESTIONS: Question[] = [
  {
    id: 'q-nro-11-01',
    courseId: 'crs-neuro-11',
    questionNumber: 1,
    type: 'QCM',
    content: "Une crise épileptique est définie sur le plan neurophysiologique par :",
    options: [
      "A. Une activité neuronale hyperexcitable uniquement sous-corticale.",
      "B. Des manifestations cliniques paroxystiques résultant d'une décharge hypersynchrone et excessive d'une population de neurones cérébraux avec anomalie EEG critique.",
      "C. Une perte de conscience obligatoire.",
      "D. Une origine obligatoirement génétique.",
      "E. Une durée supérieure à 10 minutes."
    ],
    correctAnswers: [1],
    explanation: "La crise est la traduction clinique d'une décharge hypersynchrone et excessive d'un réseau de neurones du cortex cérébral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-02',
    courseId: 'crs-neuro-11',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans une crise généralisée tonico-clonique (grand mal), la phase tonique initiale :",
    options: [
      "A. Dure généralement plus de 2 minutes.",
      "B. S’accompagne de secousses cloniques immédiates.",
      "C. Comporte une perte de conscience brutale, un cri initial, une contraction musculaire généralisée en extension avec apnée et cyanose (10-20 sec).",
      "D. Est suivie d’une reprise immédiate de la lucidité.",
      "E. Ne s'accompagne jamais de morsure de langue."
    ],
    correctAnswers: [2],
    explanation: "La phase tonique (10 à 20 secondes) associe perte de conscience, cri, apnée avec cyanose et hypertonie généralisée, avant la phase clonique des secousses.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-03',
    courseId: 'crs-neuro-11',
    questionNumber: 3,
    type: 'QCM',
    content: "L'absence typique de l'enfant (petit mal) se caractérise par :",
    options: [
      "A. Une durée habituelle de 15 minutes.",
      "B. Une chute traumatique constante.",
      "C. Une suspension brève de la conscience (5-15 sec) avec tracé EEG pathognomonique en bouffées de pointes-ondes généralisées synchrones à 3 Hz.",
      "D. Une confusion post-critique prolongée.",
      "E. Une résistance constante au valproate."
    ],
    correctAnswers: [2],
    explanation: "L'absence typique associe une suspension brève de la conscience sans chute ni confusion post-critique, avec à l'EEG des décharges bilatérales, symétriques et synchrones de pointes-ondes à 3 Hz.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-04',
    courseId: 'crs-neuro-11',
    questionNumber: 4,
    type: 'QCM',
    content: "Les myoclonies épileptiques :",
    options: [
      "A. Sont toujours accompagnées d'une perte de connaissance.",
      "B. Sont des secousses musculaires brèves et involontaires sans altération de la conscience, pouvant être favorisées par la stimulation lumineuse intermittente.",
      "C. Ne s'observent jamais au réveil.",
      "D. Sont des contractions lentes prolongées.",
      "E. Sont soulagées par les neuroleptiques."
    ],
    correctAnswers: [1],
    explanation: "Les myoclonies sont des contractions musculaires massives brèves ('lâchage du bol au petit-déjeuner'), typiques de l'Épilepsie Myoclonique Juvénile au réveil.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-05',
    courseId: 'crs-neuro-11',
    questionNumber: 5,
    type: 'QCM',
    content: "L'aura épigastrique ascendante (sensation désagréable remontant de l'estomac vers la gorge) est très évocatrice d'une crise :",
    options: [
      "A. Frontale dorsolatérale.",
      "B. Occipitale.",
      "C. Pariétale somatosensorielle.",
      "D. Temporale interne / mésiale (hippocampe et amygdale).",
      "E. Généralisée d'emblée."
    ],
    correctAnswers: [3],
    explanation: "L’aura épigastrique ascendante associée à des hallucinations olfactives ou une impression de 'déjà-vu' signe l'origine temporale interne mésiale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-06',
    courseId: 'crs-neuro-11',
    questionNumber: 6,
    type: 'QCM',
    content: "Les crises partielles frontales se singularisent par :",
    options: [
      "A. Une durée prolongée supérieure à 10 minutes.",
      "B. Une survenue préférentielle nocturne, une brièveté des accès et des automatismes moteurs violents et bizarres (pédalage, mouvements de torsion).",
      "C. Une absence totale de généralisation secondaire.",
      "D. Une aphasie de Wernicke constante.",
      "E. Une cécité transitoire."
    ],
    correctAnswers: [1],
    explanation: "Les crises frontales sont brèves (< 1 min), surviennent en salves nocturnes avec des manifestations motrices spectaculaires (mouvements de pédalage, vocalisations).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-07',
    courseId: 'crs-neuro-11',
    questionNumber: 7,
    type: 'QCM',
    content: "Un tracé EEG intercritique strictement normal :",
    options: [
      "A. Élimine formellement le diagnostic d'épilepsie.",
      "B. Prouve l'origine psychogène des crises.",
      "C. N'exclut aucunement le diagnostic d'épilepsie (jusqu'à 30-40% des épileptiques ont un premier EEG intercritique standard normal).",
      "D. Est incompatible avec une lésion cérébrale.",
      "E. Contre-indique la prescription d'antiépileptiques."
    ],
    correctAnswers: [2],
    explanation: "Le diagnostic d'épilepsie est avant tout clinique. Un EEG intercritique normal n'élimine pas une épilepsie (sensibilité d'environ 50% sur un premier tracé).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-08',
    courseId: 'crs-neuro-11',
    questionNumber: 8,
    type: 'QCM',
    content: "Une crise convulsive occasionnelle (ou aiguë symptomatique) peut être déclenchée par :",
    options: [
      "A. Une hypoglycémie aiguë sévère ou une hyponatrémie brutale.",
      "B. Une consommation modérée d'eau.",
      "C. La prise régulière d'aspirine.",
      "D. Un entraînement physique léger.",
      "E. Une bonne nuit de sommeil."
    ],
    correctAnswers: [0],
    explanation: "Les troubles métaboliques aigus (hypoglycémie, hyponatrémie, hypocalcémie) ou le sevrage alcoolique provoquent des crises occasionnelles sans maladie épileptique sous-jacente.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-09',
    courseId: 'crs-neuro-11',
    questionNumber: 9,
    type: 'QCM',
    content: "La sclérose hippocampique (sclérose mésiale temporale) est :",
    options: [
      "A. Visible uniquement au scanner.",
      "B. Une cause majeure d'épilepsie temporale réfractaire au traitement médical, accessible à la chirurgie d'exérèse avec un taux élevé de guérison (70-80%).",
      "C. Une contre-indication absolue à la chirurgie.",
      "D. Toujours d'origine génétique pure.",
      "E. Associée à un EEG normal en crise."
    ],
    correctAnswers: [1],
    explanation: "L'atrophie en hypersignal T2/FLAIR de l'hippocampe à l'IRM est la cause princeps d'épilepsie temporale pharmacorésistante, remarquablement guérie par amygdalo-hippocampectomie sélective.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-10',
    courseId: 'crs-neuro-11',
    questionNumber: 10,
    type: 'QCM',
    content: "Dans l'épilepsie myoclonique juvénile (syndrome de Janz), la triade de crises associe :",
    options: [
      "A. Spasmes infantiles, hypsarythmie et retard mental.",
      "B. Myoclonies matinales des membres supérieurs au réveil, crises tonico-cloniques généralisées et absences typiques.",
      "C. Crises focales motrices jacksoniennes pures.",
      "D. Crises nocturnes avec pédalage.",
      "E. Hallucinations visuelles isolées."
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Janz touche l'adolescent et associe secousses myocloniques matinales au réveil, absences et crises tonico-cloniques favorisées par le manque de sommeil.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-11',
    courseId: 'crs-neuro-11',
    questionNumber: 11,
    type: 'QCM',
    content: "Le syndrome de West chez le nourrisson se caractérise par la triade :",
    options: [
      "A. Absences typiques, pointes-ondes à 3 Hz et guérison spontanée.",
      "B. Spasmes infantiles en flexion/extension, régression psychomotrice et tracé EEG d'hypsarythmie désorganisée.",
      "C. Crises fébriles simples récurrentes.",
      "D. Myoclonies d'endormissement.",
      "E. Paralysie faciale bilatérale."
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de West (encéphalopathie épileptique du nourrisson vers 6 mois) réunit spasmes infantiles en salves, arrêt ou régression du développement et hypsarythmie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-12',
    courseId: 'crs-neuro-11',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel médicament antiépileptique est formellement contre-indiqué chez les jeunes femmes en âge de procréer en raison d'un risque tératogène majeur ?",
    options: [
      "A. Lamotrigine",
      "B. Lévétiracétam",
      "C. Valproate de sodium (Dépakine® - malformations congénitales et troubles neurodéveloppementaux graves)",
      "D. Clobazam",
      "E. Gabapentine"
    ],
    correctAnswers: [2],
    explanation: "Le valproate de sodium est tératogène majeur (spina bifida, malformations cardiaques, autisme et baisse de QI). Il est contre-indiqué chez la femme en âge de procréer.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-13',
    courseId: 'crs-neuro-11',
    questionNumber: 13,
    type: 'QCM',
    content: "La prise en charge médicamenteuse d'urgence d'une crise convulsive généralisée tonico-clonique prolongée (> 5 minutes) repose en première ligne sur :",
    options: [
      "A. Phénytoïne IV lente",
      "B. Benzodiazépine d'action rapide (Clonazépam ou Diazépam IV / Midazolam IM ou buccal)",
      "C. Phénobarbital",
      "D. Propofol immédiat",
      "E. Corticoïdes"
    ],
    correctAnswers: [1],
    explanation: "Toute crise dépassant 5 minutes menace d'état de mal : injection immédiate d'une benzodiazépine (Clonazépam 1 mg IV ou Midazolam buccal/IM).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-14',
    courseId: 'crs-neuro-11',
    questionNumber: 14,
    type: 'QCM',
    content: "Une crise partielle motrice avec marche jacksonienne (progression des secousses de la main vers le bras puis la face sans perte de connaissance) signe une activation de :",
    options: [
      "A. L'aire motrice primaire précentrale (circonvolution frontale ascendante) selon la somatotopie de l'homunculus moteur.",
      "B. Le cervelet.",
      "C. Le lobe temporal.",
      "D. Le thalamus.",
      "E. La moelle épinière."
    ],
    correctAnswers: [0],
    explanation: "La marche jacksonienne reflète la propagation anatomique contiguë de la décharge électrique le long de la circonvolution précentrale (aire 4 de Brodmann).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-15',
    courseId: 'crs-neuro-11',
    questionNumber: 15,
    type: 'QCM',
    content: "Quel effet indésirable dose-dépendant de la carbamazépine doit faire l'objet d'un contrôle ionique régulier ?",
    options: [
      "A. Hyponatrémie par effet antidiurétique inapproprié (SIADH-like).",
      "B. Hyperkaliémie.",
      "C. Hypercalcémie.",
      "D. Alcalose.",
      "E. Polyglobulie."
    ],
    correctAnswers: [0],
    explanation: "La carbamazépine (et l'oxcarbazépine) peut provoquer une hyponatrémie par hypersensibilité des tubules rénaux à l'ADH.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 11
  {
    id: 'q-nro-11-c1',
    courseId: 'crs-neuro-11',
    questionNumber: 16,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Enfant de 8 ans amené pour 'absences' en classe : interruption brutale de l'activité, regard dans le vide durant 10 secondes puis reprise immédiate sans confusion. Quel est le tracé EEG caractéristique ?",
    options: [
      "A. Foyers de pointes temporaux",
      "B. Décharges généralisées de pointes-ondes bilatérales, symétriques et synchrones à 3 Hz",
      "C. Ralentissement occipital isolé",
      "D. Activité de fond normale continue",
      "E. Silence électrique"
    ],
    correctAnswers: [1],
    explanation: "Tracé pathognomonique de l'absence typique de l'enfant : bouffées de pointes-ondes généralisées synchrones à 3 cycles par seconde déclenchées par l'hyperpnée.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-c2',
    courseId: 'crs-neuro-11',
    questionNumber: 17,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Homme de 40 ans, crises stéréotypées avec sensation épigastrique ascendante, regard fixe, mâchonnements et pétrissage des mains durant 1 à 2 minutes. Quelle est la localisation anatomique du foyer ?",
    options: [
      "A. Cortex préfrontal",
      "B. Cortex occipital",
      "C. Lobe temporal interne mésial (complexe amygdalo-hippocampique)",
      "D. Lobe pariétal",
      "E. Cervelet"
    ],
    correctAnswers: [2],
    explanation: "L'aura épigastrique et les automatismes oro-alimentaires (mâchonnement) et manuels avec rupture du contact signent l'épilepsie temporale interne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-c3',
    courseId: 'crs-neuro-11',
    questionNumber: 18,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Homme de 28 ans avec épisodes de 'déjà-vécu' suivis d'automatismes. L'IRM montre un hypersignal T2 et une atrophie de l'hippocampe droit. Quel examen confirme le foyer avant chirurgie ?",
    options: [
      "A. Scanner cérébral injecté",
      "B. Ponction lombaire",
      "C. Vidéo-EEG prolongé avec enregistrement des crises spontanées",
      "D. Dosage d'anticorps",
      "E. Échocardiographie"
    ],
    correctAnswers: [2],
    explanation: "L'enregistrement vidéo-EEG couplé aux crises permet de corréler le début électrique avec les manifestations cliniques pour valider l'indication chirurgicale de résection.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-c4',
    courseId: 'crs-neuro-11',
    questionNumber: 19,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Fille de 16 ans consulte pour secousses musculaires matinales des bras au réveil lui faisant lâcher son bol et crises tonico-cloniques après manque de sommeil. L'EEG montre des polypointes-ondes à 4-5 Hz. Diagnostic et traitement de première intention (hors grossesse) :",
    options: [
      "A. Épilepsie temporale ; Carbamazépine",
      "B. Épilepsie myoclonique juvénile (EMJ) ; Valproate de sodium (ou Lamotrigine / Lévétiracétam si femme en âge de procréer)",
      "C. Syndrome de West ; Corticoïdes",
      "D. Crises psychogènes non épileptiques",
      "E. Tumeur frontale ; Chirurgie"
    ],
    correctAnswers: [1],
    explanation: "Le tableau est typique de l'EMJ. La carbamazépine est contre-indiquée car elle aggrave les myoclonies. Le valproate est très efficace mais le statut féminin en âge de procréer oriente vers le lévétiracétam ou la lamotrigine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-11-c5',
    courseId: 'crs-neuro-11',
    questionNumber: 20,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Femme de 40 ans, fourmillements débutant dans la main gauche et remontant en 20 secondes le long du bras jusqu'à la joue sans perte de connaissance. Quelle localisation et quel examen morphologique ?",
    options: [
      "A. Cortex frontal ; Scanner sans injection",
      "B. Lobe temporal ; Angiographie",
      "C. Lobe pariétal post-central droit (gyrus postcentral somatosensoriel) ; IRM cérébrale avec séquences fines épileptologiques",
      "D. Lobe occipital ; Radiographie",
      "E. Tronc cérébral ; EMG"
    ],
    correctAnswers: [2],
    explanation: "Une marche sensitive ascendante est une crise focale somatosensorielle de l'aire pariétale rétro-rolandique. L'IRM recherche une lésion structurelle sous-jacente (tumeur, dysplasie, cavernome).",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_11_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-11-mindmap',
    courseId: 'crs-neuro-11',
    title: 'Mind Map : Épilepsies & Crises Épileptiques (Classification ILAE)',
    type: 'mindmap',
    content: `
# MIND MAP : ÉPILEPSIES & CRISES ÉPILEPTIQUES
*Définitions, Classification Internationale & Stratégies Thérapeutiques*

## 1. DÉFINITION & DIAGNOSTIC
- **Crise Épileptique** : Manifestation clinique paroxystique liée à une décharge excessive et hypersynchrone de neurones cérébraux.
- **Maladie Épileptique** : Au moins 2 crises spontanées espacées de plus de 24h, ou 1 crise avec probabilité de récidive > 60% à 10 ans.
- **Examens Cardinaux** : EEG (critique/intercritique) + IRM cérébrale 1,5-3T avec séquences coronales T2/FLAIR perpendiculaires à l'axe des hippocampes.

## 2. CRISES GÉNÉRALISÉES vs FOCALES
- **Généralisées** :
  - *Tonico-cloniques (Grand mal)* : Tonique (10-20s, cri, apnée, morsure latérale de langue) -> Clonique (30s) -> Résolutive/stertoreuse.
  - *Absences (Petit mal)* : Suspension de conscience 5-15s, EEG 3 Hz synchrones.
  - *Myoclonies* : Secousses brèves sans rupture de contact.
- **Focales (Partielles)** :
  - *Temporales internes* : Aura épigastrique ascendante, mâchonnement, état de rêve ("déjà-vu").
  - *Frontales* : Nocturnes, brèves, automatismes moteurs complexes (pédalage).
  - *Pariétales* : Marches sensitives paresthésiques.
  - *Occipitales* : Hallucinations visuelles simples (phosphènes, éclairs).
`
  },
  {
    id: 'res-nro-11-astuces',
    courseId: 'crs-neuro-11',
    title: 'Astuces & Mnémotechniques : Épilepsies',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (ÉPILEPSIES)
*Par Dr. LAIDANI.MERIEM*

- **Crises Temporales internes : « TAP »**
  - **T**roubles végétatifs (tachycardie, pâleur)
  - **A**ura épigastrique **A**scendante
  - **P**hénomènes psychiques (« déjà-vu », angoisse)

- **Crises Frontales : « FAN »**
  - **F**in et début très brutaux
  - **A**utomatismes bizarres (mouvements de pédalage)
  - **N**octurnes fréquentes en salves

- **Causes de Crises Occasionnelles : « FATAL »**
  - **F**ièvre (nourrisson)
  - **A**lcool (sevrage aigu)
  - **T**roubles métaboliques (hypoglycémie, hyponatrémie)
  - **A**iguë (lésion cérébrale traumatique/AVC)
  - **L**abile (chute brutale de la glycémie)
`
  }
];

// ==========================================
// LESSON 12: PATHOLOGIE MUSCULAIRE
// ==========================================
export const NEURO_LESSON_12_QUESTIONS: Question[] = [
  {
    id: 'q-nro-12-01',
    courseId: 'crs-neuro-12',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans la myopathie de Duchenne (DMD), quelle est la caractéristique génétique principale la différenciant de la forme de Becker (BMD) ?",
    options: [
      "A) Mutation ponctuelle du gène de la dystrophine",
      "B) Délétion avec respect du cadre de lecture",
      "C) Délétion avec rupture du cadre de lecture (reading frame rule), aboutissant à une dystrophine tronquée totalement absente",
      "D) Mutation du gène de la calpaïne",
      "E) Répétition du triplet CTG sur le chromosome 19"
    ],
    correctAnswers: [2],
    explanation: "Dans la DMD, la délétion rompt le cadre de lecture conduisant à une absence quasi-complète de protéine dystrophine, alors que dans la forme de Becker, le cadre est conservé avec production d'une protéine raccourcie mais partiellement fonctionnelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-02',
    courseId: 'crs-neuro-12',
    questionNumber: 2,
    type: 'QCM',
    content: "Un signe clinique cutané pathognomonique de la dermatomyosite chez l'adulte est :",
    options: [
      "A) Le phénomène de myotonie",
      "B) Les papules de Gottron (plaques érythémateuses en regard des articulations métacarpo-phalangiennes)",
      "C) L'hypertrophie des mollets",
      "D) Un déficit moteur distal symétrique",
      "E) L'absence de toute douleur musculaire"
    ],
    correctAnswers: [1],
    explanation: "Les papules érythémateuses violacées squameuses de Gottron sur la face dorsale des articulations des doigts et l'érythème liliacé périorbitaire (héliotrope) sont pathognomoniques de la dermatomyosite.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-03',
    courseId: 'crs-neuro-12',
    questionNumber: 3,
    type: 'QCM',
    content: "Dans la myasthénie auto-immune, quel mécanisme physiopathologique est principalement en cause ?",
    options: [
      "A) Bloc présynaptique par défaut de synthèse d'acétylcholine",
      "B) Destruction des axones moteurs périphériques",
      "C) Diminution du nombre et blocage des récepteurs nicotiniques post-synaptiques à l'acétylcholine (RACh) par des auto-anticorps circulants",
      "D) Dysfonctionnement des canaux sodiques voltage-dépendants",
      "E) Surcharge lipidique vacuolaire"
    ],
    correctAnswers: [2],
    explanation: "Les anticorps anti-RACh (présents dans 85% des formes généralisées) bloquent la fixation de l'ACh, accélèrent l'endocytose des récepteurs et activent la cascade du complément lytique de la membrane post-synaptique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-04',
    courseId: 'crs-neuro-12',
    questionNumber: 4,
    type: 'QCM',
    content: "Le test pharmacologique de référence au lit du malade pour conforter le diagnostic de myasthénie utilise :",
    options: [
      "A) Le chlorure d'édrophonium (Tensilon) ou la néostigmine (Prostigmine)",
      "B) La cortisone par voie orale",
      "C) Le sulfate de magnésium",
      "D) Le curare à faible dose",
      "E) La pyridostigmine en patch"
    ],
    correctAnswers: [0],
    explanation: "L'injection IV lente d'édrophonium (Tensilon) ou de néostigmine améliore spectaculairement et transitoirement les symptômes myasthéniques en augmentant l'ACh dans la fente synaptique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-05',
    courseId: 'crs-neuro-12',
    questionNumber: 5,
    type: 'QCM',
    content: "La présence d'un anticorps anti-Mi2 chez un patient myopathique est fortement associée à :",
    options: [
      "A) Une polymyosite pure",
      "B) Une dermatomyosite classique typique de bon pronostic et répondeuse aux corticoïdes",
      "C) Un syndrome des antisynthétases",
      "D) Une myosite à inclusions",
      "E) Une glycogénose"
    ],
    correctAnswers: [1],
    explanation: "L'anticorps anti-Mi2 est hautement spécifique de la dermatomyosite classique et présage généralement d'une excellente réponse à la corticothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-06',
    courseId: 'crs-neuro-12',
    questionNumber: 6,
    type: 'QCM',
    content: "Une faiblesse musculaire progressive, une cataracte précoce, une calvitie précoce et un phénomène myotonique à la percussion thénarienne évoquent :",
    options: [
      "A) Une dystrophie facio-scapulo-humérale",
      "B) La maladie de Steinert (Dystrophie Myotonique de type 1 - DM1)",
      "C) Une myopathie némaline",
      "D) Une maladie de Pompe",
      "E) Une myasthénie"
    ],
    correctAnswers: [1],
    explanation: "La maladie de Steinert associe myotonie (lenteur à la décontraction), déficit musculaire distal (releveurs, mains, face) et atteintes multi-systémiques (cataracte précoce, blocs cardiaques, diabète, calvitie).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-07',
    courseId: 'crs-neuro-12',
    questionNumber: 7,
    type: 'QCM',
    content: "Le syndrome des antisynthétases associe typiquement une myosite inflammatoire à la présence d'anticorps anti-Jo1 et à :",
    options: [
      "A) Une pneumopathie infiltrante diffuse interstitielle, des arthrites, un phénomène de Raynaud et des 'mains de mécanicien' (hyperkératose fissurée)",
      "B) Une cataracte bilatérale",
      "C) Un rash en ailes de papillon malaire",
      "D) Une surdité neurosensorielle",
      "E) Un méningocèle"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome des antisynthétases réunit myosite, pneumopathie interstitielle (qui conditionne le pronostic vital), arthrites bilatérales, Raynaud et aspect fissuré et rugueux de la pulpe des doigts ('mains de mécanicien').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-08',
    courseId: 'crs-neuro-12',
    questionNumber: 8,
    type: 'QCM',
    content: "Une intolérance aiguë à l'effort bref et intense avec crampes musculaires douloureuses et émission d'urines foncées 'coca-cola' (myoglobinurie) évoque :",
    options: [
      "A) Une myasthénie",
      "B) Une dystrophie de Duchenne",
      "C) Une glycogénose musculaire (Maladie de McArdle par déficit en myophosphorylase)",
      "D) Une polymyosite",
      "E) Une myopathie congénitale"
    ],
    correctAnswers: [2],
    explanation: "La maladie de McArdle (déficit en phosphorylase musculaire) entraîne un blocage de la glycogénolyse anaérobie avec crampes précoces à l'effort violent et rhabdomyolyse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-09',
    courseId: 'crs-neuro-12',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel auto-anticorps spécifique des myopathies inflammatoires est étroitement associé à un risque élevé de cancer occulte sous-jacent chez l'adulte ?",
    options: [
      "A) Anti-Jo1",
      "B) Anti-Mi2",
      "C) Anti-TIF1-gamma (anti-p155/140)",
      "D) Anti-SRP",
      "E) Anti-MuSK"
    ],
    correctAnswers: [2],
    explanation: "L'anticorps anti-TIF1-gamma est le marqueur de référence de la dermatomyosite paranéoplasique, imposant un bilan scanographique et oncologique complet répété.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-10',
    courseId: 'crs-neuro-12',
    questionNumber: 10,
    type: 'QCM',
    content: "Quelle classe médicamenteuse est FORMELLEMENT CONTRE-INDIQUÉE chez tout patient myasthénique en raison d'un effet curarisant bloquant la jonction neuromusculaire ?",
    options: [
      "A) Paracétamol",
      "B) Amoxicilline",
      "C) Les Aminosides injectables (Gentamicine, Amikacine, Streptomycine)",
      "D) Oméprazole",
      "E) Ibuprofène"
    ],
    correctAnswers: [2],
    explanation: "Les aminosides inhibent la libération présynaptique d'acétylcholine et aggravent immédiatement le bloc myasthénique jusqu'à l'apnée par défaillance respiratoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-11',
    courseId: 'crs-neuro-12',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans la dystrophie facio-scapulo-humérale (FSH), quel muscle de la ceinture scapulaire est remarquablement ÉPARGNÉ pendant très longtemps ?",
    options: [
      "A) L'orbiculaire des paupières",
      "B) Le grand dentelé",
      "C) Le muscle deltoïde",
      "D) Le jambier antérieur",
      "E) Le grand pectoral"
    ],
    correctAnswers: [2],
    explanation: "La préservation prolongée du galbe du deltoïde contrastant avec l'atrophie sévère des pectoraux, des biceps et des fixateurs de l'omoplate (scapula alata) est une signature de la myopathie FSH.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-12',
    courseId: 'crs-neuro-12',
    questionNumber: 12,
    type: 'QCM',
    content: "L'anomalie génétique responsable de la maladie de Steinert (DM1) est :",
    options: [
      "A) Une délétion dans le gène DMD",
      "B) Une expansion anormale de triplets CTG dans le gène DMPK sur le chromosome 19 avec phénomène d'anticipation",
      "C) Une mutation du gène de la calpaïne",
      "D) Une mutation de la dysferline",
      "E) Une délétion de SMN1"
    ],
    correctAnswers: [1],
    explanation: "La DM1 est due à une instabilité par répétition du trinucléotide CTG dans le gène DMPK, dont l'amplification d'une génération à l'autre explique la survenue de formes de plus en plus précoces et sévères (anticipation).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-13',
    courseId: 'crs-neuro-12',
    questionNumber: 13,
    type: 'QCM',
    content: "Une myosite nécrosante auto-immune (MNAI) avec anticorps anti-SRP se caractérise par :",
    options: [
      "A) Une éruption cutanée de Gottron",
      "B) Une excellente réponse aux anticholinestérasiques",
      "C) Une myopathie proximale subaiguë très sévère avec nécrose massive, CPK très élevées (> 10 000 UI/L) et résistance à la corticothérapie seule",
      "D) Une atteinte oculaire pure",
      "E) L'absence de toute faiblesse motrice"
    ],
    correctAnswers: [2],
    explanation: "Les myopathies nécrosantes auto-immunes (anti-SRP ou anti-HMG-CoA réductase post-statines) entraînent une rhabdomyolyse sévère réfractaire aux corticoïdes, nécessitant une immunosuppression lourde (Rituximab).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-14',
    courseId: 'crs-neuro-12',
    questionNumber: 14,
    type: 'QCM',
    content: "Quel est le risque vital cardiaque majeur à surveiller systématiquement par ECG annuel dans la maladie de Steinert ?",
    options: [
      "A) Myocardite aiguë virale",
      "B) Infarctus du myocarde précoce",
      "C) Troubles conductifs auriculo-ventriculaires (BAV) et tachyarythmies ventriculaires mortelles imposant la pose préventive d'un pacemaker",
      "D) Péricardite constrictive",
      "E) Valvulopathie mitrale pure"
    ],
    correctAnswers: [2],
    explanation: "La dégénérescence du tissu nodal de conduction est fréquente dans la maladie de Steinert (allongement de PR, BAV complet syncopal, mort subite), justifiant une surveillance cardiologique semestrielle ou annuelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-15',
    courseId: 'crs-neuro-12',
    questionNumber: 15,
    type: 'QCM',
    content: "Quel est l'objectif prouvé de la corticothérapie au long cours dans la myopathie de Duchenne chez le jeune garçon ?",
    options: [
      "A) La guérison génétique",
      "B) La prévention des malformations cardiaques",
      "C) Prolonger la durée de déambulation autonome de 2 à 3 ans et préserver la fonction respiratoire",
      "D) L'arrêt définitif des CPK",
      "E) La régénération complète de la dystrophine"
    ],
    correctAnswers: [2],
    explanation: "La corticothérapie (prednisone ou déflazacort) retarde la perte de la marche de 2 à 3 ans et ralentit la survenue de l'insuffisance respiratoire restrictive.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 12
  {
    id: 'q-nro-12-c1',
    courseId: 'crs-neuro-12',
    questionNumber: 16,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Garçonnet de 5 ans avec chutes fréquentes, démarche dandinante, signe de Gowers positif et mollets volumineux et fermes. Quel est le premier examen biologique à demander et le diagnostic ?",
    options: [
      "A) Lactate sanguin ; Myopathie mitochondriale",
      "B) Dosage des CPK sériques (> 10-50 fois la normale) ; Dystrophie musculaire de Duchenne (DMD)",
      "C) Recherche d'anticorps anti-RACh ; Myasthénie",
      "D) Myoglobine urinaire ; Myosite",
      "E) Bilan d'hémostase"
    ],
    correctAnswers: [1],
    explanation: "La triade : garçon jeune + signe de Gowers + pseudo-hypertrophie des mollets avec élévation massive des CPK signe la dystrophie de Duchenne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-c2',
    courseId: 'crs-neuro-12',
    questionNumber: 2,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Femme de 35 ans avec faiblesse proximale des 4 membres, érythème liliacé violacé périorbitaire et papules érythémateuses sur les mains. CPK à 1 500 UI/L. Quel auto-anticorps spécifique doit déclencher un bilan oncologique approfondi ?",
    options: [
      "A) Anti-Jo1",
      "B) Anti-Mi2",
      "C) Anti-TIF1-gamma (anti-p155/140)",
      "D) Anti-SRP",
      "E) Anti-MuSK"
    ],
    correctAnswers: [2],
    explanation: "L'anticorps anti-TIF1-gamma est le biomarqueur sérologique de choix de la dermatomyosite associée au cancer chez l'adulte.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-c3',
    courseId: 'crs-neuro-12',
    questionNumber: 3,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Homme de 28 ans avec diplopie horizontale fluctuante et ptosis survenant après 30 secondes de fixation vers le haut, disparaissant au repos. Quel phénomène sémiologique et quel traitement symptomatique de 1ère intention ?",
    options: [
      "A) Phénomène myotonique ; Corticoïdes",
      "B) Phénomène myasthénique (fatigabilité anormale à l'effort) ; Pyridostigmine (Mestinon)",
      "C) Signe de Babinski ; Baclofène",
      "D) Spasme hémifacial ; Toxine botulique",
      "E) Manœuvre de Lhermitte ; Vitamines"
    ],
    correctAnswers: [1],
    explanation: "La fatigabilité après effort soutenu (épreuve du regard maintenu déclenchant le ptosis) est le phénomène myasthénique, traité par anticholinestérasique oral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-c4',
    courseId: 'crs-neuro-12',
    questionNumber: 4,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Homme de 20 ans, sportif, crampes violentes dès les premières minutes d'un sprint intense avec urines couleur 'coca-cola', suivi d'un 'second souffle' après pause. Quel test simple oriente vers une glycogénose (maladie de McArdle) ?",
    options: [
      "A) Test au Tensilon",
      "B) Test à l'effort ischémique de l'avant-bras (absence d'élévation normale des lactates veineux)",
      "C) Biopsie osseuse",
      "D) IRM cardiaque",
      "E) Scanner crânien"
    ],
    correctAnswers: [1],
    explanation: "Le test d'effort sous garrot montre l'incapacité à produire de l'acide lactique par défaut de la glycogène-phosphorylase musculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-12-c5',
    courseId: 'crs-neuro-12',
    questionNumber: 5,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Femme de 30 ans dont le frère est décédé d'une myopathie de Duchenne. Elle est enceinte de son premier enfant. Si elle est conductrice confirmée de la mutation DMD, quel est le risque théorique pour un fœtus masculin d'être atteint ?",
    options: [
      "A) 0%",
      "B) 25%",
      "C) 50%",
      "D) 75%",
      "E) 100%"
    ],
    correctAnswers: [2],
    explanation: "Dans les maladies récessives liées à l'X, une mère conductrice (XX') transmet l'allèle muté à 50% de ses garçons qui seront obligatoirement malades (X'Y).",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_12_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-12-mindmap',
    courseId: 'crs-neuro-12',
    title: 'Carte Mentale : Pathologies Musculaires & Jonction Neuromusculaire',
    type: 'mindmap',
    content: `
# CARTE MENTALE : PATHOLOGIE MUSCULAIRE
*Approche Clinique, Histologique & Moléculaire - Faculté de Médecine*

## 1. DYSTROPHIES MUSCULAIRES GÉNÉTIQUES
- **DMD (Duchenne)** : Récessive liée à l'X, délétion avec rupture du cadre de lecture, absence totale de dystrophine, CPK massives, Gowers, mollets pseudo-hypertrophiés.
- **BMD (Becker)** : Respect du cadre de lecture, dystrophine résiduelle, début plus tardif et bénin.
- **DM1 (Maladie de Steinert)** : Transmission AD, triplets CTG sur DMPK, myotonie clinique, cataracte précoce, risque de BAV cardiaque mortel.
- **FSH (Facio-Scapulo-Humérale)** : Décollement des omoplates, épargne du deltoïde.

## 2. MYOPATHIES INFLAMMATOIRES (MYOSITES)
- **Dermatomyosite (DM)** : Signes cutanés (Gottron, érythème héliotrope), infiltration périfasciculaire. Risque de cancer sous-jacent (**Anti-TIF1-gamma**).
- **Syndrome des Antisynthétases (Anti-Jo1)** : Myosite + Pneumopathie interstitielle + Arthrites + « Mains de mécanicien ».
- **Myosite nécrosante auto-immune (Anti-SRP, Anti-HMGCR post-statines)** : Rhabdomyolyse aiguë sévère.

## 3. MYASTHÉNIE AUTO-IMMUNE
- Dysfonctionnement postsynaptique (Ac anti-RACh 85%, anti-MuSK).
- Fatigabilité à l'effort, atteinte oculaire (ptosis, diplopie), bulbaire et respiratoire.
- Recherche systématique d'un **thymome** par scanner thoracique.
- Contre-indication formelle des **aminosides**, bêtabloquants et curares.
`
  },
  {
    id: 'res-nro-12-astuces',
    courseId: 'crs-neuro-12',
    title: 'Astuces & Mnémotechniques : Pathologie Musculaire',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (MUSCLE)
*Par Dr. LAIDANI.MERIEM*

- **DMD vs BMD : Pensez à la LECTURE**
  - **DMD** : Délétion -> **L**e**C**ture **R**ompue -> Dystrophine Tronquée absente.
  - **BMD** : Délétion -> **L**e**C**ture **R**espectée -> Dystrophine Fonctionnelle partielle.

- **Signes cutanés de la Dermatomyosite : « PHARE »**
  - **P**apules de Gottron
  - **H**éliotrope (paupières violacées)
  - **A**trophie péri-unguéale
  - **R**ash en « Châle » ou en « V »
  - **E**rythème facial

- **Syndrome des Antisynthétases : « 5 P + Fièvre + Mains »**
  - **P**olyarthrite
  - **P**hénomène de Raynaud
  - **P**neumopathie interstitielle
  - **P**olymyosite
  - **P**eau (mains de mécanicien)
  - *+ Fièvre et Ac anti-Jo1*

- **Médicaments contre-indiqués dans la Myasthénie : « ABCD »**
  - **A**minosides (Gentamicine...)
  - **B**êtabloquants
  - **C**urares / Chloroquine
  - **D**-pénicillamine
`
  }
];
