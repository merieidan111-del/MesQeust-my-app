import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 13: LEUCÉMIE MYÉLOÏDE CHRONIQUE (LMC) - Pr Bouchakor M.Y
// ==========================================
export const HEMATO_LESSON_13_QUESTIONS: Question[] = [
  {
    id: 'q-hem-13-01',
    courseId: 'crs-hemato-13',
    questionNumber: 1,
    type: 'QCM',
    content: "L'anomalie cytogénétique caractéristique présente dans plus de 95% des Leucémies Myéloïdes Chroniques (LMC) est :",
    options: [
      "A) La translocation réciproque t(9;22)(q34;q11) générant le chromosome Philadelphie (Ph1)",
      "B) La translocation t(15;17)(q22;q12)",
      "C) La délétion 5q isolée",
      "D) La trisomie 8 isolée",
      "E) L'inversion du chromosome 16"
    ],
    correctAnswers: [0],
    explanation: "La LMC est caractérisée par la translocation t(9;22)(q34;q11), créant le chromosome Philadelphie (Ph1). Elle résulte de la fusion du proto-oncogène ABL1 (chromosome 9) avec le gène BCR (chromosome 22).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-02',
    courseId: 'crs-hemato-13',
    questionNumber: 2,
    type: 'QCM',
    content: "Le produit du gène chimérique de fusion BCR-ABL1 dans la LMC classique est une protéine hybride à activité enzymatique constitutive de :",
    options: [
      "A) Tyrosine kinase (oncoprotéine p210 BCR-ABL)",
      "B) Sérine-thréonine kinase régulée",
      "C) Phosphatase dépendante de l'ATP",
      "D) Récepteur nucléaire de l'acide rétinoïque",
      "E) Hélicase de réplication de l'ADN"
    ],
    correctAnswers: [0],
    explanation: "La protéine de fusion p210 BCR-ABL possède une activité tyrosine kinase constitutive permanente, qui phosphoryle de multiples cibles en aval (STAT, PI3K/AKT, MAPK), stimulant la prolifération cellulaire, l'indépendance aux facteurs de croissance et inhibant l'apoptose.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-03',
    courseId: 'crs-hemato-13',
    questionNumber: 3,
    type: 'QCM',
    content: "Le signe physique le plus constant et le plus évocateur à l'examen clinique au diagnostic de la phase chronique de la LMC est :",
    options: [
      "A) Une splénomégalie (souvent volumineuse et indolore)",
      "B) Des adénopathies cervicales bilatérales volumineuses",
      "C) Un purpura fulminans nécrotique",
      "D) Un ictère franc à bilirubine conjuguée",
      "E) Un œdème en pèlerine"
    ],
    correctAnswers: [0],
    explanation: "La splénomégalie est le maître-symptôme physique de la LMC (retrouvée dans 70 à 90% des cas), parfois géante débordant dans la fosse iliaque. À l'opposé, les adénopathies périphériques sont absentes en phase chronique de la LMC (leur présence doit faire suspecter une phase accélérée/acutisée).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-04',
    courseId: 'crs-hemato-13',
    questionNumber: 4,
    type: 'QCM',
    content: "Le frottis sanguin d'un patient en phase chronique de LMC retrouve typiquement :",
    options: [
      "A) Une hyperleucocytose majeure avec myélémie harmonieuse et équilibrée (tous les stades de maturation granuleuse : myélocytes, métamyélocytes, promyélocytes) associée à une basophilie et éosinophilie",
      "B) Une présence exclusive de blastes indifférenciés > 80% avec hiatus leucémique",
      "C) Des tricholeucocytes à prolongements chevelus",
      "D) Une lymphocytose B mature avec ombres de Gümprecht",
      "E) Une monocytose chronique isolée"
    ],
    correctAnswers: [0],
    explanation: "Le frottis montre une myélémie complète et étagée (« harmonieuse ») où les éléments les plus mûrs sont les plus nombreux (myélocytes > métamyélocytes > promyélocytes > blastes < 5%), sans hiatus leucémique, avec présence constante d'une basophilie et d'une éosinophilie caractéristiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-05',
    courseId: 'crs-hemato-13',
    questionNumber: 5,
    type: 'QCM',
    content: "Le score cytochimique des Phosphatases Alcalines Leucocytaires (PAL) dans la LMC en phase chronique est typiquement :",
    options: [
      "A) Effondré ou nul (score PAL < 20)",
      "B) Très élevé (> 150)",
      "C) Strictement normal",
      "D) Ininterprétable du fait de la thrombocytose",
      "E) Variable selon le groupe sanguin"
    ],
    correctAnswers: [0],
    explanation: "Le score des PAL est un critère classique historique capital : il est effondré ou nul (< 20) dans la LMC, ce qui permettait de la distinguer des myélémies réactionnelles infectieuses ou inflammatoires (où le score PAL est au contraire très élevé > 100-150).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-06',
    courseId: 'crs-hemato-13',
    questionNumber: 6,
    type: 'QCM',
    content: "Le traitement de référence de première intention de la phase chronique de la LMC repose sur :",
    options: [
      "A) Les Inhibiteurs de Tyrosine Kinase (ITK), en premier lieu l'Imatinib (Glivec) ou les ITK de 2e génération (Nilotinib, Dasatinib)",
      "B) L'allogreffe de moelle osseuse d'emblée",
      "C) La polychimiothérapie intensive 7+3 (Daunorubicine + Cytarabine)",
      "D) L'hydroxyurée (Hydréa) en traitement curatif définitif",
      "E) La splénectomie chirurgicale systématique"
    ],
    correctAnswers: [0],
    explanation: "La prise en charge de la LMC a été révolutionnée par les ITK oraux ciblant le domaine ATP-kinase de BCR-ABL1 (Imatinib 400 mg/j en première intention, ou Dasatinib / Nilotinib). Ils procurent une espérance de vie quasi-identique à celle de la population générale, reléguant l'allogreffe aux échecs ou résistances.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-07',
    courseId: 'crs-hemato-13',
    questionNumber: 7,
    type: 'QCM',
    content: "L'objectif thérapeutique fondamental de la réponse moléculaire majeure (RMM ou RM3.0) à 12 mois de traitement par ITK correspond à un ratio BCR-ABL1/gène contrôle sur l'échelle internationale (IS) :",
    options: [
      "A) Inférieur ou égal à 0,1% (≤ 0,1% IS)",
      "B) Égal à 10% IS",
      "C) Strictement nul et indétectable (RM5.0)",
      "D) Compris entre 1% et 5%",
      "E) Égal au taux initial du diagnostic"
    ],
    correctAnswers: [0],
    explanation: "La réponse moléculaire majeure (RMM ou RM3) est définie par un ratio quantitatif d'ARN messager BCR-ABL1 ≤ 0,1% sur l'échelle internationale (réduction de 3 logs par rapport au taux initial). C'est le garant d'une rémission au long cours sans progression vers les phases accélérées.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-08',
    courseId: 'crs-hemato-13',
    questionNumber: 8,
    type: 'QCM',
    content: "Quelle mutation ponctuelle du domaine kinase de BCR-ABL1 confère une résistance complète à l'Imatinib ainsi qu'à tous les ITK de 2e génération (Dasatinib, Nilotinib, Bosutinib) ?",
    options: [
      "A) La mutation T315I (remplacement d'une thréonine par une isoleucine en position 315)",
      "B) La mutation JAK2 V617F",
      "C) La mutation FLT3-ITD",
      "D) La mutation IDH1 R132H",
      "E) La mutation BRAF V600E"
    ],
    correctAnswers: [0],
    explanation: "La mutation « gatekeeper » T315I empêche stériquement la liaison des ITK de 1ère et 2e génération. Seul le Ponatinib (ITK de 3e génération) ou l'Asciminib (inhibiteur allostérique STAMP) et l'allogreffe restent efficaces.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-09',
    courseId: 'crs-hemato-13',
    questionNumber: 9,
    type: 'QCM',
    content: "Selon les critères de l'OMS et de l'ELN, la phase d'ACUTISATION (transformation en leucémie aiguë) de la LMC est définie par un taux de blastes médullaires ou sanguins :",
    options: [
      "A) Supérieur ou égal à 20% (≥ 20%)",
      "B) Supérieur à 5%",
      "C) Entre 10% et 19%",
      "D) Strictement égal à 100%",
      "E) Inférieur à 2%"
    ],
    correctAnswers: [0],
    explanation: "Phase chronique : blastes < 10% ; Phase accélérée : blastes entre 10 et 19% (ou basophiles ≥ 20%) ; Phase d'acutisation / crise blastique : blastes ≥ 20% dans le sang ou la moelle (ou prolifération blastique extra-médullaire). Dans 70% des cas, l'acutisation est myéloïde (LAM) et dans 30% lymphoïde (LAL).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-10',
    courseId: 'crs-hemato-13',
    questionNumber: 10,
    type: 'QCM',
    content: "Parmi les effets secondaires classiques de l'Imatinib (Glivec), lequel est le plus fréquent en début de traitement ?",
    options: [
      "A) Les œdèmes péri-orbitaires matinaux et la rétention hydrosodée",
      "B) L'hypertension artérielle pulmonaire précoce",
      "C) L'occlusion artérielle périphérique",
      "D) L'alopécie totale irréversible",
      "E) La surdité définitive"
    ],
    correctAnswers: [0],
    explanation: "Les œdèmes péri-orbitaires (liés à l'inhibition du récepteur PDGF-R) sont l'effet indésirable le plus fréquent de l'Imatinib (environ 60-70% des patients), avec les crampes musculaires, les troubles digestifs et les éruptions cutanées.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-11',
    courseId: 'crs-hemato-13',
    questionNumber: 11,
    type: 'QCM',
    content: "Quel effet secondaire spécifique respiratoire doit faire suspecter une toxicité du Dasatinib (Sprycel) ?",
    options: [
      "A) Épanchement pleural exsudatif récidivant (parfois bilatéral)",
      "B) Emphysème panlobulaire bulleux",
      "C) Laryngite striduleuse",
      "D) Pneumothorax spontané récidivant",
      "E) Dilatation des bronches congénitale"
    ],
    correctAnswers: [0],
    explanation: "Le Dasatinib expose à un risque particulier d'épanchement pleural (15 à 30% des patients, mécanisme immunologique lymphocytaire), nécessitant l'arrêt temporaire, une corticothérapie et parfois un changement de molécule.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-12',
    courseId: 'crs-hemato-13',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel effet indésirable cardiovasculaire sévère est particulièrement associé au Ponatinib (Iclusig) ?",
    options: [
      "A) Événements thrombotiques artériels et occlusions vasculaires (infarctus, AVC, ischémie aiguë de membre)",
      "B) Bloc sino-auriculaire congénital",
      "C) Épanchement péricardique purulent",
      "D) Insuffisance mitrale aiguë par rupture de cordage",
      "E) Anévrisme ventriculaire gauche isolé"
    ],
    correctAnswers: [0],
    explanation: "Le Ponatinib comporte une toxicité vasculaire dose-dépendante majeure (thromboses artérielles occlusives coronaires, cérébro-vasculaires et périphériques dans 10-20% des cas), imposant une évaluation cardiovasculaire préalable stricte et une posologie minimale efficace.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-13',
    courseId: 'crs-hemato-13',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans le syndrome myéloprolifératif chronique qu'est la LMC, la lignée érythrocytaire et la lignée plaquettaire sont :",
    options: [
      "A) L'hémoglobine est souvent discrètement abaissée (anémie normochrome normocytaire) et les plaquettes sont souvent normales ou augmentées (thrombocytose dans 50% des cas)",
      "B) L'hémoglobine est systématiquement > 20 g/dL comme dans la maladie de Vaquez",
      "C) Les plaquettes sont toujours effondrées < 10 G/L",
      "D) Il n'y a jamais aucune autre lignée atteinte que les neutrophiles",
      "E) L'hématocrite est obligatoirement > 60%"
    ],
    correctAnswers: [0],
    explanation: "La LMC s'accompagne fréquemment d'une thrombocytose initiale modérée (due à la dérivation mégacaryocytaire de la cellule souche pluripotente) et d'une anémie normocytaire normochrome arégénérative modérée d'installation progressive.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-14',
    courseId: 'crs-hemato-13',
    questionNumber: 14,
    type: 'QCM',
    content: "L'Asciminib est une thérapie ciblée récente de la LMC dont l'originalité repose sur son mécanisme d'action :",
    options: [
      "A) Inhibiteur STAMP (Specifically Targeting the ABL Myristoyl Pocket), agissant comme un régulateur allostérique physiologique",
      "B) Chimiothérapie alkylante liposomale",
      "C) Anticorps anti-CD38 couplé à une toxine",
      "D) Bloqueur du récepteur de l'érythropoïétine",
      "E) Antagoniste de la calcineurine"
    ],
    correctAnswers: [0],
    explanation: "L'Asciminib ne se lie pas au site de liaison de l'ATP mais cible spécifiquement la poche myristate de la protéine ABL1 (inhibiteur STAMP). Ce mode de fixation allostérique unique permet de contourner la quasi-totalité des mutations du site ATP, y compris la mutation T315I.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-13-15',
    courseId: 'crs-hemato-13',
    questionNumber: 15,
    type: 'QCM',
    content: "Chez un patient atteint de LMC sous Imatinib présentant une rémission moléculaire profonde (RM4.5 soit BCR-ABL1 ≤ 0,0032%) stable depuis plus de 2 à 3 ans, quelle attitude peut être discutée en milieu spécialisé ?",
    options: [
      "A) Un arrêt programmé du traitement sous surveillance moléculaire mensuelle étroite (concept de rémission sans traitement ou TFR)",
      "B) L'allogreffe de moelle osseuse prophylactique",
      "C) Le doublement des doses de chimiothérapie",
      "D) L'arrêt total et définitif de tout suivi médical",
      "E) L'adjonction systématique d'hydroxyurée"
    ],
    correctAnswers: [0],
    explanation: "Le concept de TFR (Treatment-Free Remission) permet, chez les patients en rémission moléculaire profonde stable (RM4 ou RM4.5 depuis au moins 2 à 3 ans sous ITK), de tenter un arrêt encadré du traitement. Environ 50% des patients maintiennent leur rémission sans aucun médicament.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-16',
    courseId: 'crs-hemato-13',
    questionNumber: 16,
    type: 'QCM',
    content: "Au cours de la grossesse chez une femme atteinte de LMC, quelle règle de sécurité concernant les ITK doit être impérativement rappelée ?",
    options: [
      "A) Les ITK sont formellement contre-indiqués au premier trimestre en raison d'un risque élevé de tératogénicité (malformations squelettiques et cardiaques)",
      "B) Les ITK sont totalement inoffensifs et doivent être augmentés pendant la grossesse",
      "C) L'Imatinib est obligatoire jusqu'au terme",
      "D) La patiente doit recevoir une radiothérapie splénique",
      "E) L'enfant naît obligatoirement porteur du chromosome Philadelphie"
    ],
    correctAnswers: [0],
    explanation: "Les ITK (Imatinib, Dasatinib, Nilotinib) sont tératogènes et contre-indiqués pendant la conception et la grossesse. En cas de besoin hématologique impérieux durant la grossesse, l'Interféron alpha recombinant (qui ne traverse pas la barrière placentaire) est la molécule autorisée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-17',
    courseId: 'crs-hemato-13',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle technique de biologie moléculaire quantitative est utilisée pour le suivi standard de la réponse sous traitement par ITK ?",
    options: [
      "A) La RT-qPCR (Reverse Transcription Quantitative PCR) mesurant les transcrits BCR-ABL1 sur sang périphérique",
      "B) L'électrophorèse des protéines sanguines",
      "C) Le séquençage d'Sanger des réticulocytes",
      "D) Le Western Blot du fibrinogène",
      "E) L'ELISA des plaquettes"
    ],
    correctAnswers: [0],
    explanation: "La surveillance de la LMC repose sur la RT-qPCR des transcrits BCR-ABL1 sur prélèvement sanguin périphérique tous les 3 mois jusqu'à obtention de la réponse moléculaire majeure, puis tous les 3 à 6 mois. Elle évite la répétition des myélogrammes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-18',
    courseId: 'crs-hemato-13',
    questionNumber: 18,
    type: 'QCM',
    content: "Quel score pronostique historique calculé au diagnostic de la LMC intègre l'âge, la taille de la rate, le chiffre de plaquettes et le pourcentage de blastes circulants ?",
    options: [
      "A) Le score de Sokal",
      "B) Le score de Glasgow",
      "C) Le score de Child-Pugh",
      "D) Le score de Framingham",
      "E) Le score de Geneva"
    ],
    correctAnswers: [0],
    explanation: "Le score de Sokal (et plus récemment les scores d'Hasford et ELTS) stratifie les patients atteints de LMC en risque faible, intermédiaire ou élevé au moment du diagnostic.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-19',
    courseId: 'crs-hemato-13',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans la physiopathologie de la LMC, la translocation t(9;22) se produit au niveau de quelle cellule hématopoïétique ?",
    options: [
      "A) La cellule souche hématopoïétique pluripotente primitive (CSH CD34+)",
      "B) Le polynucléaire neutrophile mature",
      "C) Le plasmocyte médullaire différencié",
      "D) L'érythroblaste basophile",
      "E) Le monocyte périphérique exclusif"
    ],
    correctAnswers: [0],
    explanation: "La LMC est une hémopathie clonale de la Cellule Souche Hématopoïétique pluripotente (CSH). C'est pourquoi le transcrit BCR-ABL1 est retrouvé dans les lignées granuleuse, monocytaire, érythroïde, mégacaryocytaire et parfois même lymphoïde B.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-20',
    courseId: 'crs-hemato-13',
    questionNumber: 20,
    type: 'QCM',
    content: "Une hyperuricémie majeure avec crise de goutte ou colique néphrétique peut survenir dans la LMC non traitée en raison de :",
    options: [
      "A) L'hypercatabolisme accru des acides nucléiques par turn-over massif des cellules myéloïdes",
      "B) Une anomalie congénitale du rein",
      "C) Une surconsommation de viande rouge",
      "D) Une toxicité spécifique des globules rouges",
      "E) Une rétention biliaire primitive"
    ],
    correctAnswers: [0],
    explanation: "La prolifération myéloïde massive et le renouvellement accéléré des leucocytes augmentent le catabolisme des purines en acide urique, exposant à l'hyperuricémie, la goutte et la lithiase urique. Un traitement par allopurinol ou rasburicase et une hyperhydratation sont systématiques à l'initiation thérapeutique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-21',
    courseId: 'crs-hemato-13',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans quelle circonstance clinique rare la LMC peut-elle être diagnostiquée chez un homme jeune suite à un engorgement vasculaire des corps caverneux ?",
    options: [
      "A) Priapisme aigu par stase leucocytaire et hyperviscosité sanguine",
      "B) Torsion du cordon spermatique",
      "C) Prostatite bactérienne aiguë",
      "D) Varicocèle gauche primitive",
      "E) Hydrocèle vaginale"
    ],
    correctAnswers: [0],
    explanation: "Lorsque l'hyperleucocytose est majeure (> 200 à 300 G/L), le syndrome de leucostase peut provoquer un priapisme à bas débit (stase sanguine dans les corps caverneux) représentant une urgence urologique et hématologique imposant une cytoréduction rapide (hydroxyurée / leucaphérèse).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-22',
    courseId: 'crs-hemato-13',
    questionNumber: 22,
    type: 'QCM',
    content: "Quel examen anatomopathologique médullaire montre une moelle hypercellulaire avec raréfaction du tissu adipeux et prolifération de petits mégacaryocytes hypolobés caractéristiques (« dwarf megakaryocytes ») ?",
    options: [
      "A) La biopsie ostéomédullaire (BOM) dans la LMC",
      "B) Le frottis sanguin périphérique",
      "C) La ponction ganglionnaire",
      "D) La biopsie cutanée",
      "E) Le myélogramme seul"
    ],
    correctAnswers: [0],
    explanation: "La BOM dans la LMC montre une moelle hypercellulaire à 100%, une prolifération de toute la lignée granuleuse avec présence de petits mégacaryocytes nains dits 'dwarf megakaryocytes' (hypolobés), et permet d'évaluer la fibrose réticulinique initiale.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-23',
    courseId: 'crs-hemato-13',
    questionNumber: 23,
    type: 'QCM',
    content: "Le Nilotinib (Tasigna) est un ITK de 2e génération qui nécessite une surveillance spécifique de :",
    options: [
      "A) L'intervalle QTc à l'électrocardiogramme (risque d'allongement du QT) et du profil glycémique/lipidique",
      "B) La fonction thyroïdienne uniquement",
      "C) La formule érythrocytaire fœtale",
      "D) La vision des couleurs",
      "E) La calcémie ionisée exclusive"
    ],
    correctAnswers: [0],
    explanation: "Le Nilotinib peut allonger l'intervalle QTc (risque de torsades de pointes), induit une hyperglycémie, une hypercholestérolémie et augmente le risque d'artériopathie oblitérante des membres inférieurs (AOMI).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-24',
    courseId: 'crs-hemato-13',
    questionNumber: 24,
    type: 'QCM',
    content: "Chez un patient suspect de LMC dont le caryotype standard est normal en métaphases (absence apparente de Ph1), quelle technique permet de détecter la translocation t(9;22) cryptique ou le transcrit de fusion ?",
    options: [
      "A) L'hybridation in situ en fluorescence (FISH) avec sondes BCR et ABL1 et la RT-PCR",
      "B) L'électrophorèse de l'hémoglobine",
      "C) Le test de Coombs",
      "D) La vitesse de sédimentation",
      "E) L'immunofixation sérique"
    ],
    correctAnswers: [0],
    explanation: "Dans environ 5% des cas, le chromosome Philadelphie est dit 'masqué' ou cryptique (translocations complexes ou micro-insertions indétectables au caryotype optique). La FISH et la RT-PCR démontrent avec certitude la fusion des gènes BCR et ABL1.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-25',
    courseId: 'crs-hemato-13',
    questionNumber: 25,
    type: 'QCM',
    content: "L'hydroxyurée (Hydréa) est aujourd'hui utilisée dans la LMC principalement pour :",
    options: [
      "A) Cytoréduire rapidement l'hyperleucocytose symptomatique initiale en attendant la confirmation cytogénétique/moléculaire de la LMC et l'introduction de l'ITK",
      "B) Éradiquer le clone leucémique définitivement",
      "C) Remplacer l'Imatinib en cas de réponse moléculaire majeure",
      "D) Prévenir les malformations fœtales",
      "E) Traiter l'acutisation lymphoblastique"
    ],
    correctAnswers: [0],
    explanation: "L'hydroxyurée est un agent cytoréducteur oral d'action rapide. Elle ne modifie pas le clone BCR-ABL1 ni la survie globale, mais permet de contrôler rapidement une hyperleucocytose menaçante (> 100 G/L) et le confort splénique le temps d'obtenir les résultats génétiques.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-13-cs1',
    courseId: 'crs-hemato-13',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un homme de 48 ans consulte pour une pesanteur de l'hypochondre gauche. L'examen physique retrouve une splénomégalie débordant le rebord costal de 7 cm, indolore et ferme, sans adénopathie superficielle. NFS : Leucocytes 145 000 / mm³, Hb 11,2 g/dL, Plaquettes 480 000 / mm³. Le frottis sanguin montre une myélémie complète à 35% avec éosinophilie et basophilie à 4%. Le score des PAL est mesuré à 8 (normale 40-100).\n\nQuel diagnostic évoquez-vous immédiatement et quel examen cytogénétique apporte la certitude ?",
    options: [
      "A) Leucémie Aiguë Myéloïde ; Myélogramme cytomorphologique seul",
      "B) Leucémie Myéloïde Chronique (phase chronique) ; Caryotype médullaire montrant la translocation t(9;22)(q34;q11) / chromosome Philadelphie",
      "C) Réaction leucémoïde sur abcès splénique ; Scanner abdominal",
      "D) Maladie de Vaquez primitive ; Dosage de l'EPO",
      "E) Mononucléose infectieuse sévère ; MNI test"
    ],
    correctAnswers: [1],
    explanation: "L'association splénomégalie volumineuse isolée + hyperleucocytose majeure avec myélémie harmonieuse équilibrée + basophilie + score des PAL effondré est quasi-pathognomonique de la LMC en phase chronique. La certitude diagnostique repose sur la mise en évidence du chromosome Philadelphie au caryotype et du transcrit BCR-ABL1 en RT-PCR.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-cs2',
    courseId: 'crs-hemato-13',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Chez ce même patient, le caryotype confirme la présence de la t(9;22) dans 100% des métaphases. La RT-PCR confirme le transcrit p210 BCR-ABL1 (ratio 85% IS). Les blastes médullaires sont à 2%.\n\nQuel traitement de première intention prescrivez-vous et à quelle posologie standard ?",
    options: [
      "A) Imatinib (Glivec) par voie orale à la dose de 400 mg par jour en continu",
      "B) Chimiothérapie 7+3 en secteur stérile",
      "C) Allogreffe de cellules souches hématopoïétiques en urgence",
      "D) Hydroxyurée seule au long cours",
      "E) Ponatinib 45 mg par jour en monothérapie"
    ],
    correctAnswers: [0],
    explanation: "Le traitement standard de première ligne de la phase chronique de LMC est un inhibiteur de tyrosine kinase de 1ère génération (Imatinib 400 mg/jour per os en une prise au milieu d'un repas) ou un ITK de 2e génération (Dasatinib ou Nilotinib).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-cs3',
    courseId: 'crs-hemato-13',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : À 12 mois de traitement par Imatinib 400 mg/j, le patient est parfaitement observant et asymptomatique. La RT-PCR de contrôle sur sang retrouve un ratio BCR-ABL1/ABL de 0,06% sur l'échelle internationale (IS).\n\nComment qualifiez-vous cette réponse thérapeutique ?",
    options: [
      "A) Échec thérapeutique complet imposant une chimiothérapie urgente",
      "B) Réponse Moléculaire Majeure (RMM / RM3.0 définie par un ratio ≤ 0,1% IS), attestant d'une excellente efficacité du traitement",
      "C) Guérison définitive autorisant l'arrêt immédiat et définitif de tout traitement",
      "D) Acutisation lymphoïde précoce",
      "E) Résistance primaire"
    ],
    correctAnswers: [1],
    explanation: "Un ratio BCR-ABL1 ≤ 0,1% IS à 12 mois définit la Réponse Moléculaire Majeure (RMM ou RM3.0). C'est l'objectif thérapeutique optimal selon les recommandations internationales de l'ELN, associé à un taux de survie sans progression vers la phase accélérée/blastique proche de 100%. Le traitement par ITK doit être poursuivi.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-13-cs4',
    courseId: 'crs-hemato-13',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient suivi pour LMC sous Imatinib présente après 3 ans de rémission une ascension progressive des transcrits BCR-ABL1 qui remontent à 15% IS. Le séquençage du domaine kinase de BCR-ABL1 met en évidence la mutation T315I. Le patient est en phase chronique.\n\nQuelle molécule parmi les suivantes est indiquée et efficace sur cette mutation ?",
    options: [
      "A) Le Ponatinib (ou l'Asciminib)",
      "B) Le Dasatinib",
      "C) Le Nilotinib",
      "D) Le Bosutinib",
      "E) L'augmentation de dose d'Imatinib à 800 mg/j"
    ],
    correctAnswers: [0],
    explanation: "La mutation T315I confère une résistance croisée absolue à l'Imatinib et à TOUS les ITK de 2e génération (Dasatinib, Nilotinib, Bosutinib). Le Ponatinib (ITK de 3e génération) et l'Asciminib (inhibiteur STAMP allostérique) sont les seuls ITK actifs sur cette mutation.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-13-cs5',
    courseId: 'crs-hemato-13',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un patient de 52 ans atteint de LMC négligée consulte pour altération de l'état général, fièvre et sueurs. La NFS montre : Leucocytes 85 000 / mm³, Hb 7,5 g/dL, Plaquettes 35 000 / mm³. Le frottis et le myélogramme retrouvent 28% de blastes myéloïdes à granulations et corps d'Auer. Le caryotype retrouve la t(9;22) associée à une trisomie 8 et un isochromosome 17q.\n\nQuelle est la phase évolutive de la maladie et quel est le pronostic ?",
    options: [
      "A) Phase d'acutisation (crise blastique myéloïde) de pronostic péjoratif nécessitant une induction type LAM associée à un ITK puissant puis allogreffe de moelle",
      "B) Phase chronique stable ; poursuite de l'Imatinib seul",
      "C) Phase accélérée simple guérissable par l'hydroxyurée",
      "D) Aplasie médullaire réactionnelle",
      "E) Lymphome de Hodgkin secondaire"
    ],
    correctAnswers: [0],
    explanation: "Taux de blastes ≥ 20% (ici 28%) + anomalies cytogénétiques clonales surajoutées (trisomie 8, i(17q)) = Phase d'acutisation / crise blastique. Le pronostic est redoutable. La prise en charge repose sur une polychimiothérapie lourde combinée à un ITK de nouvelle génération pour ramener le patient en 2e phase chronique en vue d'une allogreffe de moelle rapide.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_13_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-13-01',
    courseId: 'crs-hemato-13',
    type: 'resume',
    title: "Mind Map Synthèse : Leucémie Myéloïde Chronique (LMC)",
    contentMarkdown: `# Mind Map : LMC (Pr Bouchakor M.Y)

\`\`\`
                                LEUCÉMIE MYÉLOÏDE CHRONIQUE (LMC)
                                                │
         ┌──────────────────────────────────────┼──────────────────────────────────────┐
         ▼                                      ▼                                      ▼
CLINIQUE & BIOLOGIE                     CYTOGÉNÉTIQUE & BIOMOL                 TRAITEMENT (ITK)
- Splénomégalie volumineuse              - Translocation t(9;22)(q34;q11)       - 1ère ligne : IMATINIB (Glivec)
- Hyperleucocytose majeure (>100 G/L)   - Chromosome Philadelphie (Ph1)           ou 2e gén (Dasatinib, Nilotinib)
- Myélémie harmonieuse / étagée         - Gène fusion : BCR-ABL1 (p210)        - Objectif 12 mois : RMM (≤ 0,1% IS)
- Basophilie + Éosinophilie             - RT-qPCR pour suivi standard          - Mutation T315I : PONATINIB / ASCIMINIB
- Score des PAL effondré (< 20)
\`\`\`

## Les 3 Phases de la LMC :
1. **Phase Chronique** : Blastes < 10%, myélémie équilibrée, contrôlée par ITK.
2. **Phase Accélérée** : Blastes 10 à 19%, basophiles ≥ 20%, thrombopénie réfractaire.
3. **Phase Blastique / Acutisation** : Blastes ≥ 20% (LAM 70%, LAL 30%). Urgence vitale !`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-13-02',
    courseId: 'crs-hemato-13',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : LMC",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Myélémie de la LMC** :
   - Équilibrée et harmonieuse (tous les précurseurs présents, myélocytes et métamyélocytes prédominants, blastes < 5-10%). Pas de hiatus leucémique !
2. **Score des PAL** :
   - Effondré ou nul dans la LMC (< 20). S'il est élevé (> 100), penser à une myélémie réactionnelle à une infection ou un cancer.
3. **Absence d'adénopathies en phase chronique** :
   - La présence d'adénopathies doit immédiatement faire craindre une transformation blastique ou un lymphome associé.
4. **Mutation T315I** :
   - Résistance à l'Imatinib, Dasatinib, Nilotinib, Bosutinib. Traitée par **Ponatinib** ou **Asciminib**.
5. **Toxicité spécifique des ITK** :
   - Imatinib : Œdèmes péri-orbitaires matinaux.
   - Dasatinib : Épanchements pleuraux.
   - Nilotinib : Allongement QT, hyperglycémie, artériopathies (AOMI).
   - Ponatinib : Thromboses artérielles occlusives.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 14: ANÉMIE PAR CARENCE EN FACTEURS ANTIPERNICIEUX (FAP) - Pr Cherif Louazani
// ==========================================
export const HEMATO_LESSON_14_QUESTIONS: Question[] = [
  {
    id: 'q-hem-14-01',
    courseId: 'crs-hemato-14',
    questionNumber: 1,
    type: 'QCM',
    content: "Les facteurs dits 'antipernicieux' (FAP) indispensables à la synthèse de l'ADN érythroblastique sont :",
    options: [
      "A) La vitamine B12 (cobalamine) et la vitamine B9 (acide folique / folates)",
      "B) Le fer et la transferrine",
      "C) La vitamine C et le cuivre",
      "D) L'érythropoïétine et l'interleukine 3",
      "E) La vitamine K et le calcium"
    ],
    correctAnswers: [0],
    explanation: "Les facteurs antipernicieux regroupent la vitamine B12 (cobalamine) et les folates (vitamine B9). Leurs formes actives sont des coenzymes indispensables à la synthèse des bases puriques et pyrimidiques (dTMP) de l'ADN.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-02',
    courseId: 'crs-hemato-14',
    questionNumber: 2,
    type: 'QCM',
    content: "La carence en vitamine B12 ou en folates entraîne une anomalie de l'hématopoïèse caractérisée par :",
    options: [
      "A) Un asynchronisme de maturation nucléo-cytoplasmique avec mégaloblastose médullaire et hématopoïèse inefficace (avortement intra-médullaire)",
      "B) Un blocage de la synthèse d'hémoglobine avec microcytose",
      "C) Une aplasie médullaire adipeuse",
      "D) Une prolifération tumorale clonale autonome",
      "E) Une activation du complément intravasculaire"
    ],
    correctAnswers: [0],
    explanation: "Le défaut de synthèse d'ADN ralentit les mitoses cellulaires alors que la synthèse d'ARN et d'hémoglobine dans le cytoplasme se poursuit normalement (asynchronisme nucléo-cytoplasmique). Il en résulte de volumineux précurseurs immatures (mégaloblastes) détruits prématurément dans la moelle (hémolyse intra-médullaire).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-03',
    courseId: 'crs-hemato-14',
    questionNumber: 3,
    type: 'QCM',
    content: "Le profil de l'hémogramme typique d'une anémie mégaloblastique par carence en FAP associe :",
    options: [
      "A) Anémie macrocytaire (VGM souvent > 105-115 fL), arégénérative (réticulocytes bas), souvent accompagnée d'une leuconeutropénie et d'une thrombopénie modérées (pancytopénie)",
      "B) Anémie microcytaire hypochrome régénérative",
      "C) Polyglobulie avec thrombocytose majeure",
      "D) Réticulocytose extrême > 300 G/L d'emblée",
      "E) Thrombocytémie isolée"
    ],
    correctAnswers: [0],
    explanation: "L'anémie mégaloblastique est typiquement macrocytaire (VGM très élevé, souvent 110 à 130 fL), normochrome, et arégénérative (réticulocytes bas car la moelle est inefficace). L'atteinte des trois lignées par anomalie de l'ADN explique la fréquente pancytopénie modérée associée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-04',
    courseId: 'crs-hemato-14',
    questionNumber: 4,
    type: 'QCM',
    content: "Sur le frottis sanguin périphérique, quelle anomalie morphologique des polynucléaires neutrophiles est un signe précoce très évocateur de carence en FAP ?",
    options: [
      "A) L'hypersegmentation nucléaire des neutrophiles (polynucléaires à plus de 5-6 lobes nucléaires)",
      "B) Les granulations toxiques azurophiles",
      "C) Les corps de Döhle bleutés",
      "D) L'hyposegmentation bilobée de Pelger-Huët",
      "E) Les granulations de Schüffner"
    ],
    correctAnswers: [0],
    explanation: "L'hypersegmentation des polynucléaires neutrophiles (présence de neutrophiles comportant plus de 5 ou 6 lobes nucléaires) est l'un des premiers signes morphologiques sanguins apparaissant au cours de la carence en folates ou en vitamine B12.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-05',
    courseId: 'crs-hemato-14',
    questionNumber: 5,
    type: 'QCM',
    content: "En raison de l'avortement intra-médullaire massif des mégaloblastes, le bilan biochimique d'une carence sévère en FAP retrouve paradoxalement :",
    options: [
      "A) Des signes d'hémolyse (élévation majeure des LDH, bilirubine libre augmentée, effondrement de l'haptoglobine) avec fer sérique et ferritine élevés",
      "B) Une hypoferritinémie majeure avec LDH normales",
      "C) Une baisse isolée de la créatininémie",
      "D) Une alcalose métabolique sévère",
      "E) Une hypokaliémie spontanée"
    ],
    correctAnswers: [0],
    explanation: "L'avortement intramédullaire (hémolyse intramédullaire ou dysérythropoïèse) libère le contenu des érythroblastes détruits dans la moelle osseuse : élévation spectaculaire des LDH (souvent > 1000 à 3000 UI/L), hyperbilirubinémie non conjuguée (subictère conjonctival) et effondrement de l'haptoglobine.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-06',
    courseId: 'crs-hemato-14',
    questionNumber: 6,
    type: 'QCM',
    content: "L'anémie de Biermer (anémie pernicieuse) est une maladie auto-immune caractérisée par :",
    options: [
      "A) Une gastrite atrophique auto-immune du fundus avec destruction des cellules pariétales entraînant une achlorhydrie et une disparition du Facteur Intrinsèque",
      "B) Une destruction auto-immune des entérocytes du côlon descendant",
      "C) Une insuffisance hépatique terminale",
      "D) Une prolifération plasmocytaire médullaire",
      "E) Une anomalie congénitale de la moelle osseuse"
    ],
    correctAnswers: [0],
    explanation: "La maladie de Biermer est une gastrite atrophique chronique auto-immune touchant électivement le fundus et le corps gastrique. La destruction des cellules pariétales/bordantes entraîne l'absence de sécrétion d'acide chlorhydrique (achlorhydrie histamine-résistante) et l'absence de Facteur Intrinsèque indispensable à l'absorption iléale de la vitamine B12.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-07',
    courseId: 'crs-hemato-14',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel anticorps circulant présente la plus grande spécificité diagnostique (proche de 99%) pour affirmer l'anémie de Biermer ?",
    options: [
      "A) Les anticorps anti-facteur intrinsèque (anticorps bloquants ou précipitants)",
      "B) Les anticorps anti-cellules pariétales gastriques (anti-pompe H+/K+ ATPase)",
      "C) Les anticorps anti-transglutaminase",
      "D) Les anticorps anti-nucléaires mouchetés",
      "E) Les anticorps anti-mitochondries de type M2"
    ],
    correctAnswers: [0],
    explanation: "Les anticorps anti-cellules pariétales sont sensibles (80-90%) mais peu spécifiques (présents chez les sujets âgés ou d'autres maladies auto-immunes). Les anticorps anti-facteur intrinsèque sont présents dans 50 à 70% des cas mais possèdent une spécificité quasi-absolue (> 99%) pour l'anémie de Biermer.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-08',
    courseId: 'crs-hemato-14',
    questionNumber: 8,
    type: 'QCM',
    content: "Le site anatomique digestif exclusif de l'absorption de la vitamine B12 liée au facteur intrinsèque est :",
    options: [
      "A) L'iléon terminal (par les récepteurs à cubiline)",
      "B) Le duodénum",
      "C) Le jéjunum proximal",
      "D) Le côlon ascendant",
      "E) L'estomac antral"
    ],
    correctAnswers: [0],
    explanation: "Le complexe vitamine B12 - Facteur Intrinsèque chemine dans le grêle sans être dégradé jusqu'à l'iléon terminal où il se lie aux récepteurs spécifiques de cubiline/amnionless pour être absorbé par endocytose.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-09',
    courseId: 'crs-hemato-14',
    questionNumber: 9,
    type: 'QCM',
    content: "Contrairement à la carence en vitamine B12, les folates (vitamine B9) sont principalement absorbés au niveau de :",
    options: [
      "A) Le jéjunum proximal et le duodénum",
      "B) L'iléon terminal exclusivement",
      "C) Le rectum",
      "D) La muqueuse buccale",
      "E) La vésicule biliaire"
    ],
    correctAnswers: [0],
    explanation: "Les folates alimentaires sont absorbés au niveau du tube digestif haut (duodénum et surtout jéjunum proximal). C'est pourquoi les pathologies jéjunales (comme la maladie cœliaque) entraînent une malabsorption élective des folates.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-10',
    courseId: 'crs-hemato-14',
    questionNumber: 10,
    type: 'QCM',
    content: "La réserve corporelle hépatique de vitamine B12 assure les besoins physiologiques de l'organisme pendant une durée d'environ :",
    options: [
      "A) 3 à 5 ans",
      "B) 3 à 5 jours",
      "C) 3 à 4 semaines",
      "D) 3 mois",
      "E) 20 ans"
    ],
    correctAnswers: [0],
    explanation: "Le foie stocke 2 à 5 mg de vitamine B12, alors que la consommation quotidienne n'est que de 1 à 2 µg/j. Il faut donc 3 à 5 ans d'arrêt total d'absorption ou d'apport pour qu'apparaisse une carence clinique en B12. À l'inverse, les réserves en folates ne durent que 3 à 4 mois !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-11',
    courseId: 'crs-hemato-14',
    questionNumber: 11,
    type: 'QCM',
    content: "Les signes neurologiques de la carence en vitamine B12 réalisent le classique tableau de 'Sclérose Combinée de la Moelle' (syndrome neuro-anémique) associant :",
    options: [
      "A) Un syndrome cordonnal postérieur (ataxie proprioceptive, signe de Romberg, abolition du sens de position du gros orteil, paresthésies) et un syndrome pyramidal (signe de Babinski, spasticité)",
      "B) Une hémiplégie flasque brutale avec aphasie de Broca",
      "C) Un syndrome cérébelleux cinétique isolé",
      "D) Une paralysie faciale périphérique bilatérale isolée",
      "E) Une chorée aiguë de Sydenham"
    ],
    correctAnswers: [0],
    explanation: "La démyélinisation secondaire au défaut de méthylation dans la carence en B12 touche électivement les cordons postérieurs (perte de la sensibilité proprioceptive et vibratoire, ataxie sensitive) et les faisceaux pyramidaux (syndrome pyramidal avec signe de Babinski bilatéral). Ce tableau peut précéder l'anémie !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-12',
    courseId: 'crs-hemato-14',
    questionNumber: 12,
    type: 'QCM',
    content: "Une carence isolée en FOLATES (vitamine B9) sans carence en B12 peut-elle être responsable d'une sclérose combinée de la moelle ou d'une neuropathie périphérique ?",
    options: [
      "A) Non, les atteintes neurologiques centrales et périphériques sont STRICTEMENT SPÉCIFIQUES de la carence en vitamine B12",
      "B) Oui, les folates donnent exactement la même atteinte cordonale postérieure",
      "C) Oui, mais uniquement chez l'enfant",
      "D) Oui, si le taux de folates est nul",
      "E) Oui, systématiquement associée à une cécité"
    ],
    correctAnswers: [0],
    explanation: "Règle absolue d'examen : La carence en folates NE DONNE JAMAIS de sclérose combinée de la moelle ni de syndrome neuro-anémique. Toute atteinte neurologique centrale ou sensitive dans un contexte d'anémie mégaloblastique signe formellement une carence en vitamine B12.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-13',
    courseId: 'crs-hemato-14',
    questionNumber: 13,
    type: 'QCM',
    content: "Que se passe-t-il si l'on administre par erreur de l'acide folique (vitamine B9) seul à forte dose chez un patient atteint d'une carence méconnue en vitamine B12 ?",
    options: [
      "A) L'anémie peut régresser transitoirement mais les troubles neurologiques s'aggravent de façon dramatique et irréversible",
      "B) Le patient guérit complètement de toutes ses atteintes",
      "C) Cela induit une polyglobulie de Vaquez immédiate",
      "D) Les réserves de B12 se reconstituent spontanément",
      "E) Aucun effet n'est observé"
    ],
    correctAnswers: [0],
    explanation: "Piège redoutable : donner des folates à un patient carencé en B12 'consomme' les dernières traces de cobalamine pour synthétiser de l'ADN, masquant l'anémie mais précipitant ou aggravant irréversiblement les lésions dégénératives de la moelle épinière (sclérose combinée). On ne donne JAMAIS de folates seuls sans B12 !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-14',
    courseId: 'crs-hemato-14',
    questionNumber: 14,
    type: 'QCM',
    content: "La glossite de Hunter observée dans l'anémie de Biermer se manifeste cliniquement par :",
    options: [
      "A) Une langue rouge vif, dépapillée, lisse, vernissée et douloureuse (brûlures à l'ingestion d'aliments chauds ou épicés)",
      "B) Une langue villeuse noire chargée",
      "C) Une macroglossie infiltrée pierreuse",
      "D) Des aphtes géants nécrosants",
      "E) Une langue géographique indolore"
    ],
    correctAnswers: [0],
    explanation: "La glossite atrophique de Hunter est caractéristique des carences en B12 : atrophie des papilles linguales débutant aux bords puis s'étendant à toute la face dorsale de la langue, qui devient lisse, luisante, brillante ('langue vernissée') avec sensation de cuisson pénible.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-15',
    courseId: 'crs-hemato-14',
    questionNumber: 15,
    type: 'QCM',
    content: "Quel risque de néoplasie maligne à long terme impose une surveillance endoscopique gastrique (FOGD avec biopsies) régulière chez tout patient atteint d'anémie de Biermer ?",
    options: [
      "A) Adénocarcinome gastrique et tumeurs neuroendocrines gastriques (tumeurs carcinoïdes de type 1)",
      "B) Carcinome hépatocellulaire",
      "C) Cancer de la vésicule biliaire",
      "D) Adénocarcinome colique droit",
      "E) Cancer de l'œsophage épidermoïde"
    ],
    correctAnswers: [0],
    explanation: "La gastrite atrophique fundique auto-immune de Biermer est un état précancéreux : risque d'adénocarcinome gastrique multiplié par 3 à 5, et risque de tumeurs neuroendocrines gastriques de type 1 (stimulées par l'hypergastrinémie réactionnelle à l'achlorhydrie). FOGD initiale puis tous les 3 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-16',
    courseId: 'crs-hemato-14',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans le métabolisme cellulaire, le dosage biologique discriminant permettant de confirmer la carence en vitamine B12 devant un taux limite de cobalamine est :",
    options: [
      "A) L'élévation de l'acide méthylmalonique (AMM) et de l'homocystéine totale plasmatique",
      "B) L'abaissement de l'acide urique",
      "C) L'élévation isolée de la ferritine",
      "D) La baisse de la transferrine",
      "E) La baisse de la glycémie"
    ],
    correctAnswers: [0],
    explanation: "La vitamine B12 est cofacteur de la méthylmalonyl-CoA mutase. En cas de carence en B12, l'acide méthylmalonique (AMM) s'accumule dans le sérum et les urines (très sensible et spécifique de la B12, normal dans la carence en folates). L'homocystéine s'élève dans les deux carences.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-14-17',
    courseId: 'crs-hemato-14',
    questionNumber: 17,
    type: 'QCM',
    content: "Le traitement classique d'attaque de l'anémie de Biermer repose sur :",
    options: [
      "A) Injections intramusculaires de Vitamine B12 (Hydroxocobalamine ou Cyanocobalamine : 1 000 µg par injection, répétées selon un schéma dégressif puis 1 injection mensuelle à vie)",
      "B) Des comprimés de vitamine B12 à faible dose pendant 15 jours",
      "C) Des perfusions de fer saccharose seules",
      "D) Une corticothérapie à forte dose au long cours",
      "E) Une gastrectomie totale"
    ],
    correctAnswers: [0],
    explanation: "Puisque l'absorption digestive est compromise par l'absence de facteur intrinsèque, le traitement historique repose sur l'Hydroxocobalamine par voie intramusculaire : 1000 µg/j ou tous les 2 jours pendant 1 à 2 semaines, puis espacé, puis 1000 µg IM tous les mois À VIE.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-18',
    courseId: 'crs-hemato-14',
    questionNumber: 18,
    type: 'QCM',
    content: "Après instauration du traitement substitutif par vitamine B12 chez un patient biermérien sévère, la 'crise réticulocytaire' survient typiquement à :",
    options: [
      "A) J5 - J8 (avec pic réticulocytaire atteignant 200 à 500 G/L)",
      "B) Dès la première heure",
      "C) Au bout de 6 mois",
      "D) Jamais",
      "E) À J30 exclusivement"
    ],
    correctAnswers: [0],
    explanation: "La crise réticulocytaire témoigne de la reprise explosive de l'érythropoïèse médullaire. Elle débute vers J3-J4, atteint son acmé entre J5 et J8 (réticulocytes > 200 à 500 G/L), et confirme a posteriori l'exactitude du diagnostic étiologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-19',
    courseId: 'crs-hemato-14',
    questionNumber: 19,
    type: 'QCM',
    content: "Quelle complication ionique aiguë potentiellement mortelle par trouble du rythme cardiaque doit être prévenue et surveillée lors de la crise réticulocytaire sous vitamine B12 ?",
    options: [
      "A) Une hypokaliémie brutale (due à l'incorporation massive de potassium dans les nouveaux érythroblastes en division)",
      "B) Une hypercalcémie maligne",
      "C) Une hyperkaliémie réfractaire",
      "D) Une hyponatrémie de dilution",
      "E) Une acidose lactique sévère"
    ],
    correctAnswers: [0],
    explanation: "La régénération foudroyante de milliards de cellules sanguines consomme d'énormes quantités de potassium intracellulaire, entraînant un shift extracellulaire vers intracellulaire et une hypokaliémie sévère pouvant provoquer un arrêt cardiaque. La surveillance et la supplémentation potassique préventive sont indispensables.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-14-20',
    courseId: 'crs-hemato-14',
    questionNumber: 20,
    type: 'QCM',
    content: "Parmi les causes de carence en folates (B9), quelle situation physiologique fréquente nécessite une supplémentation prophylactique systématique dès la période périconceptionnelle ?",
    options: [
      "A) La grossesse (pour prévenir les anomalies de fermeture du tube neural : spina bifida, anencéphalie)",
      "B) La puberté chez le garçon",
      "C) La ménopause",
      "D) Le sevrage tabagique",
      "E) La pratique d'un sport d'endurance"
    ],
    correctAnswers: [0],
    explanation: "La supplémentation périconceptionnelle en acide folique (0,4 mg/j chez la femme sans antécédent, 5 mg/j si antécédent d'AFTN ou épilepsie sous anti-comitiaux), débutée 4 semaines avant la conception et poursuivie jusqu'à 12 SA, réduit de plus de 70% le risque d'anomalies de fermeture du tube neural.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-21',
    courseId: 'crs-hemato-14',
    questionNumber: 21,
    type: 'QCM',
    content: "Parmi les médicaments suivants, lequel est un antagoniste compétitif puissant de la dihydrofolate réductase (DHFR) responsable de carence aiguë en folates ?",
    options: [
      "A) Le Méthotrexate",
      "B) L'Aspirine",
      "C) Le Paracétamol",
      "D) L'Amoxicilline",
      "E) L'Atorvastatine"
    ],
    correctAnswers: [0],
    explanation: "Le Méthotrexate bloque la dihydrofolate réductase (DHFR), empêchant la conversion de l'acide folique en acide tétrahydrofolique actif (TH4). Ses toxicités hématologiques sont prévenues par l'adjonction d'acide folinique (Lederfoline).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-22',
    courseId: 'crs-hemato-14',
    questionNumber: 22,
    type: 'QCM',
    content: "Quel ver parasite intestinal hématophage transmis par ingestion de poisson d'eau douce cru (brochet, perche) peut provoquer une carence profonde en vitamine B12 par spoliation ?",
    options: [
      "A) Diphyllobothrium latum (Bothriocéphale)",
      "B) Taenia saginata",
      "C) Ascaris lumbricoides",
      "D) Enterobius vermicularis",
      "E) Schistosoma haematobium"
    ],
    correctAnswers: [0],
    explanation: "Le Bothriocéphale (Diphyllobothrium latum) est un grand cestode qui se fixe dans l'iléon et absorbe jusqu'à 80-90% de la vitamine B12 ingérée par son hôte, provoquant un tableau clinique et biologique identique à l'anémie de Biermer.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-14-23',
    courseId: 'crs-hemato-14',
    questionNumber: 23,
    type: 'QCM',
    content: "Le syndrome de malabsorption de la vitamine B12 non dissociée des protéines alimentaires chez le sujet âgé (syndrome de non-dissociation) est favorisé par :",
    options: [
      "A) L'hypochlorhydrie gastrique et la prise prolongée d'Inhibiteurs de la Pompe à Protons (IPP) ou de Metformine",
      "B) L'hyperchlorhydrie gastrique",
      "C) L'abus de vitamine C",
      "D) La pratique d'un régime hyperprotéiné carnivore",
      "E) L'hypercholestérolémie familiale"
    ],
    correctAnswers: [0],
    explanation: "L'acidité gastrique et la pepsine sont nécessaires pour cliver la B12 des protéines alimentaires. L'hypochlorhydrie liée à l'âge, l'utilisation prolongée d'IPP ou la prise chronique de Metformine empêchent cette libération et constituent la cause la plus fréquente de déficit en B12 du sujet âgé.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-14-24',
    courseId: 'crs-hemato-14',
    questionNumber: 24,
    type: 'QCM',
    content: "La teinte cireuse et le teint pâle 'jaune paille' (pâleur + subictère conjonctival) du patient biermérien résultent de l'association de :",
    options: [
      "A) L'anémie profonde (pâleur) et l'hémolyse intramédullaire par avortement des mégaloblastes (subictère à bilirubine non conjuguée)",
      "B) Une hépatite virale aiguë surajoutée",
      "C) Une stéatose hépatique massive",
      "D) Un dépôt de carotène cutané",
      "E) Une insuffisance surrénalienne associée"
    ],
    correctAnswers: [0],
    explanation: "Le teint jaune paille classique décrit par Biermer est l'association de la pâleur cireuse liée à l'anémie sévère et d'un subictère conjonctival discret lié à l'augmentation de la bilirubine libre par destruction intramédullaire des mégaloblastes immatures.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-25',
    courseId: 'crs-hemato-14',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans le myélogramme d'une anémie par carence en FAP, les mégaloblastes érythroblastiques sont caractérisés cytologiquement par :",
    options: [
      "A) Une grande taille, une chromatine nucléaire fine, perlée et aérée 'en écaille de tortue' et un cytoplasme basophile abondant",
      "B) Des granulations toxiques primaires géantes",
      "C) Des bâtonnets d'Auer intracytoplasmiques",
      "D) Une pycnose nucléaire précoce",
      "E) Des corps de Howell-Jolly isolés"
    ],
    correctAnswers: [0],
    explanation: "La moelle mégaloblastique est bleue, hypercellulaire, dominée par de volumineux érythroblastes (mégaloblastes) dont le noyau conserve une chromatine anormalement fine, aérée et perlée en 'écaille de tortue' malgré un cytoplasme déjà bien différencié et chargé en hémoglobine.",
    difficulty: 'moyen'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-14-cs1',
    courseId: 'crs-hemato-14',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Une femme de 65 ans consulte pour asthénie et brûlures de la langue. L'examen note un teint jaune paille, une langue lisse et dépapillée aux bords, et un subictère conjonctival. NFS : Hb 5,9 g/dL, VGM 124 fL, TCMH 36 pg, Réticulocytes 18 000 / mm³, Leucocytes 3 100 / mm³ avec neutrophiles hypersegmentés, Plaquettes 95 000 / mm³. LDH 2 800 UI/L, Bilirubine libre 42 µmol/L, Haptoglobine indétectable.\n\nQuelle est la qualification de cette anémie et quel dosage biochimique orientera vers l'étiologie ?",
    options: [
      "A) Anémie macrocytaire arégénérative avec hémolyse intramédullaire ; Dosage de la vitamine B12 sérique et des folates sériques",
      "B) Anémie hémolytique auto-immune périphérique régénérative ; Test de Coombs direct",
      "C) Anémie ferriprive microcytaire ; Dosage de la ferritine",
      "D) Aplasie médullaire aiguë ; BOM immédiate",
      "E) Leucémie aiguë à blastes ; Myélogramme d'urgence"
    ],
    correctAnswers: [0],
    explanation: "Pancytopénie modérée avec anémie macrocytaire majeure (VGM 124) très arégénérative, signes de dysérythropoïèse/avortement intramédullaire (LDH majeures, subictère, haptoglobine nulle) et glossite de Hunter. Les dosages vitaminiques (B12 et folates) sont les examens de première intention.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-cs2',
    courseId: 'crs-hemato-14',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Chez cette patiente, la vitamine B12 est mesurée à 45 pg/mL (normale 200-900) et les folates sont normaux. La recherche d'anticorps anti-facteur intrinsèque est positive. La FOGD montre une gastrite atrophique fundique.\n\nQuel est le diagnostic et quel est le traitement d'attaque et d'entretien à instaurer ?",
    options: [
      "A) Maladie de Biermer ; Injections intramusculaires de vitamine B12 (Hydroxocobalamine 1000 µg) selon protocole d'attaque puis 1000 µg IM par mois À VIE",
      "B) Maladie cœliaque ; Régime sans gluten seul",
      "C) Carence d'apport ; Conseils diététiques simples",
      "D) Gastrite à Helicobacter pylori ; Amoxicilline et Clarithromycine seules",
      "E) Syndrome myélodysplasique ; Transfusions régulières"
    ],
    correctAnswers: [0],
    explanation: "Carence en B12 + anticorps anti-facteur intrinsèque + gastrite atrophique fundique = Anémie de Biermer. Le traitement de référence repose sur la vitamine B12 par voie intramusculaire à vie (1000 µg IM/mois en entretien après la charge).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-cs3',
    courseId: 'crs-hemato-14',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Lors de la première semaine de traitement par vitamine B12 chez cette patiente dont l'hémoglobine initiale était à 5,9 g/dL, quel bilan biologique quotidien doit être surveillé à partir de J4-J5 pour vérifier l'efficacité et prévenir un risque vital ?",
    options: [
      "A) Dosage des réticulocytes (vérification de la crise réticulocytaire) et ionogramme sanguin avec Kaliémie (dépistage d'une hypokaliémie aiguë de transfert)",
      "B) Dosage du fer sérique uniquement",
      "C) Vitesse de sédimentation quotidienne",
      "D) Calcitonine plasmatique",
      "E) Troponine Ic horaire"
    ],
    correctAnswers: [0],
    explanation: "La crise réticulocytaire attendue entre J5 et J8 prouve l'efficacité. Elle s'accompagne d'une captation massive de potassium par les érythroblastes néoformés, exposant à une hypokaliémie foudroyante avec risque d'arythmie ventriculaire et arrêt cardiaque.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-cs4',
    courseId: 'crs-hemato-14',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un homme de 58 ans consulte pour des paresthésies 'en chaussettes' des membres inférieurs, une instabilité à la marche aggravée à l'obscurité, et une faiblesse motrice des jambes. À l'examen : signe de Romberg positif, abolition des réflexes achilléens, sensibilité vibratoire au diapason abolie aux chevilles, et réflexe cutané plantaire en extension (Babinski bilatéral). La NFS retrouve une anémie à Hb 9,5 g/dL avec VGM à 112 fL.\n\nQuel syndrome neurologique présente ce patient et quelle est l'urgence ?",
    options: [
      "A) Sclérose Combinée de la Moelle par carence en vitamine B12 ; Instauration immédiate de vitamine B12 à fortes doses par voie parentérale pour éviter des séquelles motrices définitives",
      "B) Syndrome de Guillain-Barré aigu ; IgIV seules",
      "C) Accident vasculaire cérébral ischémique vertébro-basilaire ; Thrombolyse IV",
      "D) Sclérose en plaques forme rémittente ; Bolus de corticoïdes seuls sans vitamines",
      "E) Maladie de Parkinson débutante ; L-Dopa"
    ],
    correctAnswers: [0],
    explanation: "Syndrome combiné cordonnal postérieur (ataxie proprioceptive, pallesthésie abolie) + syndrome pyramidal (Babinski bilatéral) dans un contexte d'anémie macrocytaire = Sclérose combinée de la moelle. C'est une urgence thérapeutique : la B12 parentérale doit être débutée sans aucun délai, car la récupération neurologique dépend de la rapidité d'initiation.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-14-cs5',
    courseId: 'crs-hemato-14',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un patient alcoolique chronique dénutri de 50 ans présente une anémie macrocytaire arégénérative à 8,2 g/dL (VGM 116 fL). Les folates érythrocytaires et sériques sont effondrés. La vitamine B12 sérique est à la limite basse de la normale (210 pg/mL).\n\nQuelle est la règle thérapeutique absolue avant d'administrer de l'acide folique chez ce patient ?",
    options: [
      "A) Vérifier ou associer systématiquement une supplémentation en vitamine B12 pour ne pas risquer de précipiter une atteinte neurologique par carence intriquée en cobalamine",
      "B) Donner des folates à 50 mg par jour en monothérapie stricte",
      "C) Réaliser une splénectomie préalable",
      "D) Réaliser une transfusion de 6 culots globulaires",
      "E) Administrer du fer par voie intraveineuse forte dose"
    ],
    correctAnswers: [0],
    explanation: "Règle de sécurité fondamentale : chez tout patient dénutri ou suspect de carence mixte, ne JAMAIS administrer de folates seuls sans avoir formellement exclu ou corrigé au préalable une carence en vitamine B12 (risque d'aggravation foudroyante d'une sclérose combinée médullaire latente).",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_14_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-14-01',
    courseId: 'crs-hemato-14',
    type: 'resume',
    title: "Mind Map Synthèse : Carence en Facteurs Antipernicieux (FAP)",
    contentMarkdown: `# Mind Map : Facteurs Antipernicieux & Biermer (Pr Cherif Louazani)

\`\`\`
                                  ANÉMIES MÉGALOBLASTIQUES (FAP)
                                                │
         ┌──────────────────────────────────────┴──────────────────────────────────────┐
         ▼                                                                             ▼
VITAMINE B12 (Cobalamine)                                                      VITAMINE B9 (Folates)
- Réserves hépatiques : 3 à 5 ANS                                               - Réserves hépatiques : 3 à 4 MOIS
- Absorption : Iléon terminal (+ Facteur Intrinsèque)                           - Absorption : Jéjunum proximal
- Étiologie phare : **Anémie de Biermer**                                       - Étiologies : Carence d'apport, Grossesse,
  (Gastrite atrophique fundique auto-immune)                                      Alcoolisme, Médicaments (Méthotrexate)
- Signes neurologiques : **Sclérose combinée de la moelle**                    - **ZÉRO signe neurologique !**
  (Cordons postérieurs + Syndrome pyramidal)                                     (Mais risque AFTN fœtale si carence grossesse)
\`\`\`

## Tableau Biologique & Hémogramme :
- **Anémie macrocytaire** (VGM > 105-120 fL), arégénérative.
- **Pancytopénie modérée** (leuconeutropénie + thrombopénie).
- Frottis : **Hypersegmentation des neutrophiles** (> 5 lobes).
- **Hémolyse intra-médullaire** : LDH explosives, bilirubine libre élevée, haptoglobine effondrée, fer élevé.
- Moelle : Moelle bleue mégaloblastique (asynchronisme nucléo-cytoplasmique).

## Traitement :
- **B12** : Hydroxocobalamine IM à vie dans Biermer.
- **Attention** : Crise réticulocytaire à J5-J8 ➔ **Surveillance de la KALIÉMIE (risque d'arrêt cardiaque sur hypokaliémie)**.
- Ne JAMAIS donner de folates seuls si B12 basse (aggravation neurologique) !`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-14-02',
    courseId: 'crs-hemato-14',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Anémie de Biermer & FAP",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Signes neurologiques** :
   - Présents UNIQUEMENT dans la carence en **B12** (Sclérose combinée de la moelle). ABSENTS dans la carence en folates.
2. **Anticorps de Biermer** :
   - Anti-cellules pariétales : sensibles (90%) mais peu spécifiques.
   - Anti-facteur intrinsèque : très spécifiques (99%) !
3. **Le danger des folates seuls** :
   - Donner de la vitamine B9 seule à un patient carencé en B12 corrige l'anémie mais PRÉCIPITE une atteinte neurologique irréversible.
4. **Crise réticulocytaire & Potassium** :
   - Entre J5 et J8 sous B12 : Risque majeur d'**HYPOKALIÉMIE** de transfert mortelle par incorporation massive dans les hématies régénérées.
5. **Surveillance endoscopique dans Biermer** :
   - Risque accru d'**adénocarcinome gastrique** et de **tumeurs neuroendocrines (carcinoïdes)** fundiques ➔ FOGD avec biopsies étagées.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 15: URGENCES EN ONCOLOGIE - Dr Imelhaine / Pr Seghier
// ==========================================
export const HEMATO_LESSON_15_QUESTIONS: Question[] = [
  {
    id: 'q-hem-15-01',
    courseId: 'crs-hemato-15',
    questionNumber: 1,
    type: 'QCM',
    content: "La définition admise de la Neutropénie Fébrile en oncologie médicale correspond à :",
    options: [
      "A) Température corporelle ≥ 38,3°C (ou ≥ 38,0°C persistant plus d'une heure) chez un patient avec PNN < 500 / mm³ (ou < 1000 / mm³ avec baisse rapide prévisible)",
      "B) Fièvre isolée chez un patient avec PNN normaux",
      "C) Température > 37,5°C sans neutropénie",
      "D) Neutropénie asymptomatique apyrétique",
      "E) Choc septique sans hyperthermie"
    ],
    correctAnswers: [0],
    explanation: "La neutropénie fébrile est définie par une température axillaire/buccale ≥ 38,3°C sur une mesure ou ≥ 38,0°C maintenue pendant au moins 1 heure, associée à un chiffre de polynucléaires neutrophiles < 500 / mm³ (0,5 G/L) ou < 1000 / mm³ en cours de nadir.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-02',
    courseId: 'crs-hemato-15',
    questionNumber: 2,
    type: 'QCM',
    content: "Le score pronostique du MASCC (Multinational Association for Supportive Care in Cancer) permet de stratifier les patients en neutropénie fébrile :",
    options: [
      "A) Un score MASCC ≥ 21 définit un patient à bas risque de complications graves, pouvant être éligible à un traitement oral ambulatoire",
      "B) Un score MASCC < 21 définit un bas risque",
      "C) Un score MASCC = 26 impose une réanimation lourde immédiate",
      "D) Le score MASCC n'évalue que la fonction rénale",
      "E) Le score MASCC est utilisé uniquement dans le myélome"
    ],
    correctAnswers: [0],
    explanation: "Le score du MASCC va de 0 à 26. Plus le score est élevé, plus le risque est faible : un score ≥ 21 correspond au groupe à faible risque de complications (< 5% de mortalité), autorisant sous conditions strictes une antibiothérapie orale (Amox-Clav + Ciprofloxacine) à domicile.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-03',
    courseId: 'crs-hemato-15',
    questionNumber: 3,
    type: 'QCM',
    content: "Chez un patient en neutropénie fébrile à haut risque (hospitalisé), le délai maximal recommandé pour administrer la première dose d'antibiothérapie intraveineuse bactéricide à large spectre anti-Pseudomonas est :",
    options: [
      "A) Moins de 60 minutes (1 heure) suivant l'admission / le diagnostic (l'heure dorée)",
      "B) Dans les 12 heures",
      "C) Après réception des résultats des hémocultures à 48 heures",
      "D) Dès que l'aplasie est terminée",
      "E) Le lendemain matin au tour de salle"
    ],
    correctAnswers: [0],
    explanation: "La neutropénie fébrile est une urgence médicale absolue : chaque heure de retard augmente drastiquement la mortalité par choc septique à bacille Gram négatif. L'antibiothérapie doit être initiée dans l'heure (« golden hour ») suivant le prélèvement d'hémocultures.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-04',
    courseId: 'crs-hemato-15',
    questionNumber: 4,
    type: 'QCM',
    content: "L'antibiothérapie probabiliste de première intention par voie intraveineuse chez un patient neutropénique fébrile à haut risque sans allergie comprend :",
    options: [
      "A) Une bêtalactamine anti-Pseudomonas aeruginosa en monothérapie (Pipéracilline-Tazobactam, Céfépime, ou Céftazidime)",
      "B) Vancomycine seule",
      "C) Amoxicilline simple par voie orale",
      "D) Métronidazole seul",
      "E) Ciprofloxacine en monothérapie intraveineuse"
    ],
    correctAnswers: [0],
    explanation: "La monothérapie intraveineuse par une bêtalactamine active sur Pseudomonas aeruginosa (Tazocilline 4g/0,5g x 3-4/j ou Céfépime 2g x 3/j) est le standard mondial recommandé chez le neutropénique fébrile sans signe de choc.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-05',
    courseId: 'crs-hemato-15',
    questionNumber: 5,
    type: 'QCM',
    content: "L'adjonction d'un glycopeptide (Vancomycine) à l'antibiothérapie empirique initiale d'une neutropénie fébrile est formellement indiquée en cas de :",
    options: [
      "A) Instabilité hémodynamique / choc septique, infection évidente liée au cathéter veineux central (chambre implantable, PICC), mucite sévère de grade 3-4, colonisation connue à SARM ou hémocultures positives à cocci Gram positif",
      "B) Fièvre isolée sans gravité",
      "C) Patient traité en ambulatoire",
      "D) Durée d'aplasie prévue < 3 jours",
      "E) Absence de tout matériel étranger"
    ],
    correctAnswers: [0],
    explanation: "La vancomycine ne doit pas être prescrite systématiquement pour limiter l'émergence d'entérocoques résistants. Elle est indiquée d'emblée si : sepsis sévère/choc, infection de cathéter, pneumopathie, mucite sévère, ou colonisation documentée à staphylocoque résistant à la méticilline.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-15-06',
    courseId: 'crs-hemato-15',
    questionNumber: 6,
    type: 'QCM',
    content: "Si la fièvre persiste au-delà de 72 à 96 heures (J4-J5) chez un patient neutropénique recevant une antibiothérapie adaptée à large spectre, quelle complication doit être impérativement recherchée et traitée ?",
    options: [
      "A) Une infection fongique invasive (Aspergillose pulmonaire invasive ou Candidose disséminée) imposant un scanner thoracique et l'introduction d'un antifongique",
      "B) Une allergie alimentaire aux carottes",
      "C) Une guérison spontanée retardée",
      "D) Une insuffisance mitrale aiguë",
      "E) Une poussée d'arthrose"
    ],
    correctAnswers: [0],
    explanation: "La persistance de la fièvre à J4-J5 d'une antibiothérapie bien conduite chez un patient en aplasie prolongée est la signature d'une infection fongique invasive (Aspergillus, Candida). Elle impose un scanner thoracique haute résolution, le dosage du galactomannane et un antifongique (Voriconazole, Amphotéricine B liposomale, ou Caspofongine).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-07',
    courseId: 'crs-hemato-15',
    questionNumber: 7,
    type: 'QCM',
    content: "La Compression Médullaire Épidurale Maligne (CMEM) est une urgence oncologique neurologique dont le premier symptôme révélateur dans plus de 90% des cas est :",
    options: [
      "A) Une douleur rachidienne localisée, fixe, permanente, souvent nocturne et exacerbée par la toux ou les mouvements",
      "B) Une incontinence fécale immédiate",
      "C) Une paraplégie flasque d'emblée",
      "D) Une cécité brutale",
      "E) Une crise convulsive généralisée"
    ],
    correctAnswers: [0],
    explanation: "La douleur rachidienne (médiane ou radiculaire en ceinture) précède les troubles neurologiques déficitaires de plusieurs semaines dans plus de 90% des compressions médullaires. Toute douleur rachidienne chez un patient cancéreux connu est une compression médullaire jusqu'à preuve du contraire !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-08',
    courseId: 'crs-hemato-15',
    questionNumber: 8,
    type: 'QCM',
    content: "L'examen d'imagerie diagnostique de référence à réaliser en extrême urgence devant toute suspicion de compression médullaire maligne est :",
    options: [
      "A) L'IRM médullaire corps entier (axe rachidien complet) en urgence",
      "B) La radiographie simple du rachis dorsal",
      "C) L'échographie paravertébrale",
      "D) La scintigraphie osseuse simple",
      "E) L'électromyogramme des 4 membres"
    ],
    correctAnswers: [0],
    explanation: "L'IRM du rachis complet (cervical, dorsal, lombaire) avec coupes sagittales et axiales est l'examen de choix incontournable réalisé dans les premières heures pour visualiser le niveau compressif, l'atteinte épidurale et d'éventuelles métastases étagées asymptomatiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-09',
    courseId: 'crs-hemato-15',
    questionNumber: 9,
    type: 'QCM',
    content: "Le traitement médical d'urgence de la compression médullaire maligne dès la suspicion clinique repose sur :",
    options: [
      "A) Une corticothérapie à forte dose (Dexaméthasone 16 à 40 mg/jour IV) pour réduire l'œdème périlésionnel",
      "B) L'aspirine à forte dose",
      "C) L'administration de diurétiques de l'anse seuls",
      "D) Des tractions vertébrales forcées",
      "E) Des massages dorsaux manuels"
    ],
    correctAnswers: [0],
    explanation: "La corticothérapie par Dexaméthasone intraveineuse à forte dose (16 à 40 mg/j avec dose de charge) doit être administrée immédiatement dès la suspicion clinique, réduisant l'œdème médullaire et stabilisant la fonction motrice dans l'attente de la décompression.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-10',
    courseId: 'crs-hemato-15',
    questionNumber: 10,
    type: 'QCM',
    content: "La triade clinique classique du Syndrome Cave Supérieur (SCS) associe :",
    options: [
      "A) Œdème en pèlerine (face, cou, creux sus-claviculaires), turgescence des veines jugulaires sans reflux hépato-jugulaire et circulation veineuse collatérale thoracique antérieure",
      "B) Ascite volumineuse, ictère et angiomes stellaires",
      "C) Dyspnée avec hémoptysie et hippocratisme digital",
      "D) Paraparésie, anesthésie en selle et globe urinaire",
      "E) Épistaxis, purpura pétéchial et hémarthrose"
    ],
    correctAnswers: [0],
    explanation: "L'obstruction de la veine cave supérieure donne le syndrome médiastinal antérieur supérieur : œdème en pèlerine (visage bouffi, paupières gonflées), turgescence veineuse jugulaire non pulsatile, et développement d'un réseau veineux collatéral sous-cutané pré-thoracique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-11',
    courseId: 'crs-hemato-15',
    questionNumber: 11,
    type: 'QCM',
    content: "L'étiologie tumorale maligne la plus fréquente responsable d'un syndrome de la veine cave supérieure chez l'adulte est :",
    options: [
      "A) Le cancer broncho-pulmonaire (en particulier le carcinome à petites cellules et les carcinomes non à petites cellules)",
      "B) Le cancer colorectal métastatique",
      "C) Le mélanome cutané",
      "D) Le cancer du col utérin",
      "E) Le chondrosarcome fémoral"
    ],
    correctAnswers: [0],
    explanation: "Le cancer bronchique primitif (surtout carcinome bronchique à petites cellules et épidermoïde du poumon droit) est responsable de 70 à 80% des syndromes de la veine cave supérieure, suivi par les lymphomes médiastinaux (10-15%).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-12',
    courseId: 'crs-hemato-15',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans l'évaluation de la douleur cancéreuse selon l'échelle à trois paliers de l'OMS, quel antalgique de Palier 3 est la molécule de référence ?",
    options: [
      "A) La Morphine (sulfate ou chlorhydrate de morphine)",
      "B) Le Paracétamol",
      "C) La Codéine",
      "D) Le Tramadol",
      "E) L'Ibuprofène"
    ],
    correctAnswers: [0],
    explanation: "La morphine est l'opioïde fort de référence (Palier 3 de l'OMS) pour les douleurs nociceptives d'intensité modérée à sévère (EVA > 6/10) ou réfractaires aux antalgiques de palier 2.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-13',
    courseId: 'crs-hemato-15',
    questionNumber: 13,
    type: 'QCM',
    content: "Quelle mesure thérapeutique doit être SYSTÉMATIQUEMENT et obligatoirement coprescrite dès l'initiation d'un traitement par opioïde fort (Morphine, Oxycodone, Fentanyl) ?",
    options: [
      "A) Un laxatif osmotique ou stimulant (ex: Macrogol ou Lactulose) pour prévenir la constipation",
      "B) Des antibiotiques prophylactiques",
      "C) Un régime sans sel strict",
      "D) Un traitement anticoagulant curatif",
      "E) Des diurétiques thiazidiques"
    ],
    correctAnswers: [0],
    explanation: "Règle d'or de prescription des opioïdes : la constipation est un effet secondaire constant, précoce, persistant pendant toute la durée du traitement sans aucun phénomène de tolérance. La prescription conjointe systématique d'un laxatif osmotique est obligatoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-14',
    courseId: 'crs-hemato-15',
    questionNumber: 14,
    type: 'QCM',
    content: "Le signe clinique le plus précoce et le plus sensible d'un surdosage en morphine menaçant d'arrêt respiratoire est :",
    options: [
      "A) Une bradypnée avec fréquence respiratoire inférieure à 10 par minute associée à une somnolence excessive",
      "B) Une tachycardie avec HTA",
      "C) Une polyurie osmotique",
      "D) Une hypertonie musculaire avec trismus",
      "E) Des sueurs nocturnes"
    ],
    correctAnswers: [0],
    explanation: "La dépression respiratoire induite par les morphiniques est précédée par une sédation/somnolence croissante et une baisse de la fréquence respiratoire (FR < 10/min), accompagnée d'un myosis punctiforme bilatéral aréactif.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-15',
    courseId: 'crs-hemato-15',
    questionNumber: 15,
    type: 'QCM',
    content: "L'antidote spécifique d'urgence de la dépression respiratoire par surdosage en opioïdes est :",
    options: [
      "A) La Naloxone (Narcan) titrée par voie IV",
      "B) Le Flumazénil",
      "C) Le Sulfate de protamine",
      "D) Le Déféroxamine",
      "E) La N-acétylcystéine"
    ],
    correctAnswers: [0],
    explanation: "La Naloxone est un antagoniste pur et compétitif des récepteurs opioïdes mu. Elle s'administre par titration IV lente (ampoule de 0,4 mg diluée dans 10 mL de sérum physiologique, injectée par paliers de 1 à 2 mL toutes les 2 minutes) jusqu'à normalisation de la fréquence respiratoire sans réveiller brutalement une douleur insupportable.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-16',
    courseId: 'crs-hemato-15',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans la prise en charge d'une douleur cancéreuse neuropathique (brûlures, décharges électriques, allodynie par engluement tumoral ou neurotoxicité de chimiothérapie), la classe médicamenteuse recommandée de première ligne est :",
    options: [
      "A) Les gabapentinoïdes (Gabapentine, Prégabaline) ou les antidépresseurs IRSNA (Duloxétine) / tricycliques",
      "B) Le Paracétamol à forte dose",
      "C) Les AINS seuls",
      "D) La codéine en monothérapie",
      "E) L'acide acétylsalicylique injectable"
    ],
    correctAnswers: [0],
    explanation: "La douleur neuropathique répond très mal aux antalgiques usuels et aux opioïdes seuls. Les traitements recommandés reposent sur les antiépileptiques modulateurs des canaux calciques (Gabapentine, Prégabaline) ou les antidépresseurs (Duloxétine, Amitriptyline).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-17',
    courseId: 'crs-hemato-15',
    questionNumber: 17,
    type: 'QCM',
    content: "L'hypercalcémie maligne aiguë en oncologie (liée à la sécrétion de PTH-rp ou à des métastases lytiques) est traitée en extrême urgence par :",
    options: [
      "A) Une hyperhydratation intraveineuse massive par sérum physiologique (NaCl 0,9% : 3 à 4 L/j) associée à un biphosphonate puissant IV (Acide Zolédronique ou Pamidronate) ou Dénosumab",
      "B) L'administration de comprimés de calcium et de vitamine D",
      "C) Des diurétiques thiazidiques seuls",
      "D) L'arrêt des apports hydriques",
      "E) Une injection d'érythropoïétine"
    ],
    correctAnswers: [0],
    explanation: "L'hypercalcémie maligne est une urgence vitale déshydratante : 1. Réhydratation sodée intraveineuse massive au sérum salé isotonique (3 à 4 L/24h) pour restaurer la volémie et induire une calciurèse ; 2. Biphosphonate IV (Zométa 4 mg en 15 min) qui inhibe puissamment la résorption ostéoclastique en 48-72h.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-18',
    courseId: 'crs-hemato-15',
    questionNumber: 18,
    type: 'QCM',
    content: "Quel diurétique est FORMELLEMENT CONTRE-INDIQUÉ dans le traitement de l'hypercalcémie maligne car il diminue l'excrétion urinaire de calcium ?",
    options: [
      "A) Les diurétiques thiazidiques (Hydrochlorothiazide)",
      "B) Le Furosémide (diurétique de l'anse)",
      "C) Le Mannitol",
      "D) L'Amiloride",
      "E) L'Acétazolamide"
    ],
    correctAnswers: [0],
    explanation: "Les diurétiques thiazidiques augmentent la réabsorption tubulaire rénale distale de calcium et aggravent l'hypercalcémie ; ils sont formellement contre-indiqués. Les diurétiques de l'anse (Furosémide) sont hypocalciuriants mais ne s'utilisent qu'après réhydratation complète en cas de surcharge volémique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-15-19',
    courseId: 'crs-hemato-15',
    questionNumber: 19,
    type: 'QCM',
    content: "Les accès douloureux paroxystiques (ADP) chez un patient cancéreux recevant déjà un traitement de fond par morphine sont traités par :",
    options: [
      "A) Des interdoses de morphine à libération immédiate (environ 1/10e à 1/6e de la dose journalière de fond) ou des formes de Fentanyl transmuqueux d'action ultra-rapide",
      "B) Du paracétamol effervescent",
      "C) Une augmentation de la dose de fond le lendemain sans traitement immédiat",
      "D) Une séance de radiothérapie en urgence",
      "E) Une ponction lombaire"
    ],
    correctAnswers: [0],
    explanation: "Pour les accès douloureux paroxystiques (ADP), on utilise une dose de secours ou interdose de morphine d'action immédiate (1/6e de la dose totale quotidienne de morphine) ou du Fentanyl transmuqueux (sublingual, nasal, buccal) qui soulage la crise en moins de 10 à 15 minutes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-20',
    courseId: 'crs-hemato-15',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans le syndrome cave supérieur symptomatique aigu sur cancer bronchique à petites cellules chimiosensible, le traitement symptomatique et étiologique associe :",
    options: [
      "A) Surélévation de la tête de lit, oxygénothérapie, corticothérapie intraveineuse, anticoagulation préventive/curative et mise en route rapide de la chimiothérapie",
      "B) Décubitus ventral strict",
      "C) Perfusion de macromolécules à fort débit",
      "D) Pose d'une voie veineuse sous-clavière du côté de l'œdème",
      "E) Ponction pleurale bilatérale immédiate"
    ],
    correctAnswers: [0],
    explanation: "Mesures générales : position assise ou demi-assise, oxygène, corticoïdes pour diminuer la composante œdémateuse, anticoagulation pour prévenir la thrombose de la veine cave, et chimiothérapie d'urgence qui fait régresser la masse en 48-72h dans le carcinome à petites cellules.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-21',
    courseId: 'crs-hemato-15',
    questionNumber: 21,
    type: 'QCM',
    content: "Quelle précaution technique fondamentale concerne la pose de voies d'abord veineuses chez un patient présentant un syndrome cave supérieur ?",
    options: [
      "A) Proscription absolue des perfusions et des prises de sang au niveau des membres supérieurs (utiliser les membres inférieurs)",
      "B) Poser impérativement un cathéter jugulaire droit",
      "C) Utiliser exclusivement la veine céphalique gauche",
      "D) Faire des ponctions artérielles radiales répétées",
      "E) Ne jamais perfuser le patient"
    ],
    correctAnswers: [0],
    explanation: "En cas d'obstacle sur la veine cave supérieure, la perfusion dans les veines des membres supérieurs majore l'hypertension veineuse et l'œdème cérébral et ne parvient pas correctement au cœur droit. Il faut utiliser les veines des membres inférieurs (veines fémorales ou saphènes).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-22',
    courseId: 'crs-hemato-15',
    questionNumber: 22,
    type: 'QCM',
    content: "Dans la titration de la morphine par voie orale chez un patient cancéreux douloureux, quel est l'intervalle habituel de réévaluation et d'adaptation des doses ?",
    options: [
      "A) Toutes les 24 à 48 heures pour la dose de fond, avec accès aux interdoses toutes les 4 heures si besoin",
      "B) Une fois par mois",
      "C) Toutes les 10 minutes par voie orale",
      "D) Uniquement lorsque le patient ne dort plus",
      "E) Tous les 7 jours"
    ],
    correctAnswers: [0],
    explanation: "La titration orale par morphine à libération prolongée se réévalue toutes les 24 à 48 heures en additionnant les interdoses de secours consommées la veille à la dose de fond, pour trouver la posologie d'équilibre efficace.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-15-23',
    courseId: 'crs-hemato-15',
    questionNumber: 23,
    type: 'QCM',
    content: "Le syndrome de lyse tumorale aigu est favorisé par le traitement des tumeurs hématologiques à fort taux de prolifération comme :",
    options: [
      "A) Le lymphome de Burkitt et les leucémies aiguës hyperleucocytaires",
      "B) Le carcinome basocellulaire cutané",
      "C) Le cancer de la thyroïde bien différencié",
      "D) Le méningiome cérébral bénin",
      "E) Le léiomyome utérin"
    ],
    correctAnswers: [0],
    explanation: "Le risque de lyse tumorale est maximal dans les hémopathies hautement prolifératives et chimiosensibles : Lymphome de Burkitt, Lymphome T lymphoblastique, Leucémie Aiguë Lymphoblastique (LAL) et Leucémie Aiguë Myéloïde hyperleucocytaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-24',
    courseId: 'crs-hemato-15',
    questionNumber: 24,
    type: 'QCM',
    content: "La Rasburicase (Fasturtec) prévient l'insuffisance rénale urique du syndrome de lyse en :",
    options: [
      "A) Catalysant l'oxydation de l'acide urique en allantoïne, métabolite hautement soluble éliminé facilement par les reins",
      "B) Inhibant la xanthine oxydase",
      "C) Diminuant l'absorption intestinale des purines",
      "D) Augmentant la réabsorption tubulaire d'urée",
      "E) Bloquant la filtration glomérulaire"
    ],
    correctAnswers: [0],
    explanation: "La Rasburicase est une urate-oxydase recombinante. Contrairement à l'allopurinol (qui n'empêche que la synthèse de nouvel acide urique), la Rasburicase dégrade directement l'acide urique déjà présent en allantoïne (5 à 10 fois plus hydrosoluble), faisant chuter l'uricémie en moins de 4 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-25',
    courseId: 'crs-hemato-15',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans quelle situation la Rasburicase est-elle FORMELLEMENT CONTRE-INDIQUÉE en raison d'un risque d'hémolyse aiguë et de méthémoglobinémie sévère ?",
    options: [
      "A) Le déficit congénital en Glucose-6-Phosphate Déshydrogénase (G6PD / favisme)",
      "B) L'insuffisance rénale anurique",
      "C) Le diabète de type 2",
      "D) L'hypertension artérielle",
      "E) L'hypercholestérolémie"
    ],
    correctAnswers: [0],
    explanation: "La réaction catalysée par l'urate-oxydase génère du peroxyde d'hydrogène (eau oxygénée). En l'absence de G6PD (protection antioxydante érythrocytaire déficiente), cela provoque une oxydation massive de l'hémoglobine entraînant une méthémoglobinémie et une anémie hémolytique intravasculaire foudroyante.",
    difficulty: 'moyen'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-15-cs1',
    courseId: 'crs-hemato-15',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Une femme de 54 ans traitée par chimiothérapie adjuvante (3e cure de FEC100) pour un cancer du sein consulte aux urgences à J10 pour une fièvre à 38,7°C avec frissons et asthénie. Elle est porteuse d'une chambre implantable (PAC). Constantes : TA 120/75 mmHg, FC 92/min, FR 18/min. Pas de foyer infectieux évident à l'examen. NFS : PNN 280 / mm³, Hb 10,8 g/dL, Plaquettes 110 000 / mm³. Le score MASCC est calculé à 24.\n\nQuel est le diagnostic et quelle est la prise en charge immédiate ?",
    options: [
      "A) Neutropénie fébrile à bas risque (MASCC ≥ 21) ; Réalisation d'hémocultures (sur PAC et veine périphérique), bilan biologique et début rapide d'une antibiothérapie orale (Amoxicilline-acide clavulanique + Ciprofloxacine) avec surveillance étroite",
      "B) Choc septique d'emblée ; Intubation en réanimation",
      "C) Simple virose saisonnière ; Paracétamol seul et retour à domicile sans antibiotique",
      "D) Aplasie post-chimiothérapie normale ; Pas de prélèvement ni traitement",
      "E) Ablation chirurgicale du PAC le jour même sans antibiothérapie"
    ],
    correctAnswers: [0],
    explanation: "PNN < 500 / mm³ + T° > 38,3°C = Neutropénie fébrile. Le score MASCC est ≥ 21 (bas risque). Après réalisation impérative d'hémocultures comparatives (sang périphérique et PAC), d'un ECBU et d'une radiographie thoracique, une antibiothérapie par voie orale (Amox-Clav + Ciprofloxacine) peut être débutée dans l'heure avec possibilité de prise en charge ambulatoire sous critères stricts.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-cs2',
    courseId: 'crs-hemato-15',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Un homme de 62 ans suivi pour un cancer de la prostate avec métastases osseuses rachidiennes consulte pour des douleurs lombaires dorsales apparues il y a 3 semaines, devenues insomniantes. Depuis 48 heures, il décrit des difficultés à monter les escaliers, une sensation de lourdeur des membres inférieurs et des mictions par impériosité avec fuites urinaires. L'examen retrouve un déficit moteur proximal des deux membres inférieurs coté à 3/5 et des réflexes vifs polycinétiques avec signe de Babinski bilatéral.\n\nQuel est le diagnostic le plus probable et quel geste diagnostique et thérapeutique d'urgence s'impose ?",
    options: [
      "A) Compression Médullaire Épidurale Maligne (CMEM) ; IRM médullaire complète en extrême urgence + Dexaméthasone IV forte dose immédiate + avis neurochirurgical/radiothérapie",
      "B) Hernie discale simple bénigne ; Repos au lit pendant 15 jours",
      "C) Neuropathie diabétique autonome ; Équilibre glycémique",
      "D) Arthrose lombaire banale ; Séances de kinésithérapie",
      "E) AVC ischémique médullaire ; Thrombolyse par rt-PA"
    ],
    correctAnswers: [0],
    explanation: "La triade douleur rachidienne + déficit moteur bilatéral des membres inférieurs + troubles sphinctériens récents chez un patient porteur d'un cancer ostéophile (prostate) est une Compression Médullaire Maligne. C'est une urgence fonctionnelle majeure : IRM médullaire corps entier dans les heures qui suivent, corticothérapie immédiate par Dexaméthasone, et avis chirurgical/radiothérapie en urgence pour éviter une paraplégie définitive.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-cs3',
    courseId: 'crs-hemato-15',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un fumeur de 58 ans consulte pour un œdème du visage et du cou accentué le matin, une sensation de gêne respiratoire en position penchée en avant et des céphalées matinales. L'examen physique met en évidence un comblement des creux sus-claviculaires, un réseau de veines dilatées bleutées pré-thoraciques et des veines jugulaires turgescentes jusqu'à l'angle de la mâchoire. Le scanner thoracique injecté retrouve une masse hilaire droite de 7 cm englobant la veine cave supérieure avec thrombose partielle.\n\nQuel diagnostic portez-vous et quelles sont les mesures thérapeutiques immédiates ?",
    options: [
      "A) Syndrome de la Veine Cave Supérieure (SCS) ; Position demi-assise, oxygénothérapie, corticothérapie forte dose, anticoagulation par héparine, et biopsies bronchiques rapides pour identifier le type histologique",
      "B) Insuffisance cardiaque droite congestive ; Diurétiques à forte dose sans scanner",
      "C) Choc anaphylactique à un allergène alimentaire ; Adrénaline intramusculaire",
      "D) Goitre plongeant bénin ; Thyroïdectomie totale en urgence",
      "E) Péricardite aiguë constrictive ; Péricardiocentèse immédiate"
    ],
    correctAnswers: [0],
    explanation: "Tableau caractéristique de syndrome cave supérieur sur masse médiastino-pulmonaire droite. Prise en charge : position assise, oxygène, Dexaméthasone/Méthylprednisolone pour diminuer la composante inflammatoire, anticoagulation curative pour la thrombose associée, et biopsie urgente pour orienter la chimio/radiothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-cs4',
    courseId: 'crs-hemato-15',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 60 ans atteint d'un cancer du pancréas métastatique présente des douleurs épigastriques transfixiantes intenses, cotées à 8/10 sur l'échelle numérique visuelle (EN), résistantes au paracétamol et au tramadol. Il n'a aucun antécédent rénal.\n\nQuelle est la stratégie antalgique de première intention selon les recommandations de l'OMS ?",
    options: [
      "A) Passage aux opioïdes forts de Palier 3 : Instauration d'une titration par Morphine orale (ex: 60 mg/j de morphine à libération prolongée répartie en 2 prises, avec interdoses de morphine à libération immédiate de 10 mg en cas d'accès douloureux) + Laxatif osmotique systématique",
      "B) Augmenter la dose de paracétamol à 8 g/jour",
      "C) Remplacer le tramadol par de la codéine seule",
      "D) Proposer une acupuncture exclusive",
      "E) Prescrire des antalgiques uniquement en cas de récidive nocturne"
    ],
    correctAnswers: [0],
    explanation: "Douleur intense (EN 8/10) réfractaire au palier 2 : passage au palier 3 de l'OMS obligatoire. Instauration de morphine orale (posologie de départ standard 60 mg/j de forme à libération prolongée divisée en 2 prises, ou titration par forme immédiate) + interdoses de secours (10 mg) + coprescription systématique obligatoire d'un laxatif osmotique (Macrogol).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-15-cs5',
    courseId: 'crs-hemato-15',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un patient de 64 ans traité par morphine à forte dose (240 mg/jour) pour des métastases osseuses est amené aux urgences par sa famille pour coma calme. Constantes : TA 105/65 mmHg, FC 56/min, FR 6 cycles par minute. Les pupilles sont en myosis serré punctiforme bilatéral aréactif.\n\nQuel diagnostic portez-vous et quel traitement administrez-vous en urgence vitale ?",
    options: [
      "A) Surdosage aigu en morphiniques (dépression respiratoire toxique) ; Injection intraveineuse titrée de Naloxone (Narcan) jusqu'à obtention d'une fréquence respiratoire ≥ 10-12/min, avec surveillance scopée prolongée",
      "B) AVC du tronc cérébral ; Thrombolyse intraveineuse",
      "C) Coma hypoglycémique ; Perfusion de sérum glucosé à 30% seul",
      "D) Intoxication aux benzodiazépines ; Flumazénil en bolus rapide",
      "E) Acidocétose diabétique inaugurale ; Insuline ordinaire IV"
    ],
    correctAnswers: [0],
    explanation: "Triade du surdosage morphinique : coma calme, bradypnée sévère (FR 6/min) et myosis bilatéral serré 'en tête d'épingle'. Urgence vitale : libération des voies aériennes, oxygène, et injection intraveineuse titrée de Naloxone (antidote compétitif) par paliers réguliers pour rétablir une respiration efficace sans réveiller un sevrage douloureux aigu.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_15_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-15-01',
    courseId: 'crs-hemato-15',
    type: 'resume',
    title: "Mind Map Synthèse : Urgences en Oncologie",
    contentMarkdown: `# Mind Map : Urgences en Oncologie (Dr Imelhaine / Pr Seghier)

\`\`\`
                                  URGENCES EN ONCOLOGIE MÉDICALE
                                                │
         ┌──────────────────────────────┬───────┴──────────────────────┬──────────────────────────────┐
         ▼                              ▼                              ▼                              ▼
NEUTROPÉNIE FÉBRILE            COMPRESSION MÉDULLAIRE         SYNDROME CAVE SUPÉRIEUR         DOULEUR CANCÉREUSE
- PNN < 500/mm³ + T° ≥ 38,3°C  - Douleur rachidienne 90%      - Œdème en pèlerine             - Paliers OMS (Palier 3 :
- Score MASCC (≥ 21 = bas r.)    + Déficit moteur + Sphincter   - Veines jugulaires turgesc.    Morphine de référence)
- Urgence absolue (< 1h !)     - **IRM médullaire d'urgence** - Circulation collatérale       - **Laxatif systématique**
- Bêtalactamine anti-pyo IV    - Dexaméthasone forte dose     - TDM injecté, Dexaméthasone    - Surdosage : Myosis +
  (Tazocilline / Céfépime)       + Chirurgie / Radiothérapie    + Traiter la cause (chimio)     Bradypnée ➔ **NALOXONE**
\`\`\`

## Autres Urgences Métaboliques Majeures :
1. **Hypercalcémie maligne** :
   - Réhydratation massive NaCl 0,9% (3-4 L/j) + Biphosphonates IV (Zométa). Diurétiques thiazidiques INTERDITS.
2. **Syndrome de lyse tumorale** :
   - Hyperkaliémie, Hyperuricémie, Hyperphosphorémie, Hypocalcémie.
   - Prévention/Traitement : Hyperhydratation + **Rasburicase (Fasturtec)** (Contre-indiquée si déficit en G6PD !).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-15-02',
    courseId: 'crs-hemato-15',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Urgences Oncologiques",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Règle de l'heure dorée (Golden Hour)** :
   - Dans la neutropénie fébrile, l'antibiothérapie doit être passée dans l'heure suivant l'arrivée ! Ne jamais attendre les résultats d'hémocultures.
2. **Toute douleur rachidienne chez un cancéreux** :
   - Est une **compression médullaire jusqu'à preuve du contraire** ! IRM rachidienne totale urgente + Dexaméthasone sans attendre le déficit moteur.
3. **Syndrome cave supérieur & Voie veineuse** :
   - STRICTEMENT INTERDIT de perfuser aux membres supérieurs (aggrave l'œdème cérébral et stase veineuse) ! Utiliser les membres inférieurs.
4. **Opioïdes & Constipation** :
   - La tolérance ne se développe JAMAIS sur la constipation. Prescrire le laxatif osmotique dès la première ordonnance de morphine !
5. **Rasburicase & Déficit en G6PD** :
   - CONTRE-INDICATION ABSOLUE (risque d'hémolyse aiguë et de méthémoglobinémie mortelle).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];
