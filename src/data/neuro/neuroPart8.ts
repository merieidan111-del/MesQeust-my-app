import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 22: HYPERTENSION INTRA-CRÂNIENNE (HIC)
// ==========================================
export const NEURO_LESSON_22_QUESTIONS: Question[] = [
  {
    id: 'q-nro-22-01',
    courseId: 'crs-neuro-22',
    questionNumber: 1,
    type: 'QCM',
    content: "La doctrine de Monro-Kellie stipule que le volume de la boîte crânienne inextensible chez l'adulte est constant et constitué de trois compartiments incompressibles :",
    options: [
      "A) Le parenchyme cérébral (~80%), le volume sanguin cérébral (~10%) et le liquide cérébro-spinal (~10%).",
      "B) L'os crânien, la dure-mère et le scalp.",
      "C) Le parenchyme cérébral, l'air intra-sinusien et la moelle spinale.",
      "D) Le liquide céphalo-rachidien, l'œdème extracellulaire et les granulations arachnoïdiennes.",
      "E) Les hématies, les plaquettes et le sérum."
    ],
    correctAnswers: [0],
    explanation: "Doctrine de Monro-Kellie : V_crâne = V_parenchyme (80%) + V_sang (10%) + V_LCR (10%) = constante. Tout ajout d'un volume pathologique (tumeur, hématome, œdème) doit être compensé par la fuite de LCR et de sang veineux sous peine d'HIC.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-02',
    courseId: 'crs-neuro-22',
    questionNumber: 2,
    type: 'QCM',
    content: "La triade clinique fonctionnelle classique du syndrome d'Hypertension Intra-Crânienne (HIC) associe :",
    options: [
      "A) Céphalées matinales en casque, vomissements en jet sans nausée préalable et troubles visuels (éclipses visuelles, flou).",
      "B) Fièvre à 40°C, diarrhée profuse et arthralgies.",
      "C) Perte de poids rapide, aménorrhée et hirsutisme.",
      "D) Éruption cutanée purpurique, ictère et hépatomégalie.",
      "E) Tachycardie, polypnée et hypotension artérielle."
    ],
    correctAnswers: [0],
    explanation: "La triade classique de l'HIC : céphalées matinales soulagées par les vomissements, vomissements faciles en jet, et éclipses visuelles transitoires.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-03',
    courseId: 'crs-neuro-22',
    questionNumber: 3,
    type: 'QCM',
    content: "Au fond d'œil (FO), la constatation d'un œdème papillaire bilatéral de stase :",
    options: [
      "A) Confirme formellement le retentissement d'une hypertension intracrânienne chronique, avec risque d'évolution vers l'atrophie optique irréversible en cas de persistance prolongée.",
      "B) Est un signe précoce survenant dans les 5 premières minutes de toute HIC aiguë.",
      "C) Élimine formellement toute pathologie intracrânienne.",
      "D) Indique une cécité corticale définitive immédiate.",
      "E) Relève d'un traitement exclusif par collyre mydriatique."
    ],
    correctAnswers: [0],
    explanation: "L'œdème papillaire bilatéral avec flou des bords papillaires et hémorragies en flammèches traduit la stase veineuse par blocage du transport axoplasmique sous l'effet de l'hypertension intracrânienne chronique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-04',
    courseId: 'crs-neuro-22',
    questionNumber: 4,
    type: 'QCM',
    content: "La Pression de Perfusion Cérébrale (PPC) est physiologiquement définie par la relation :",
    options: [
      "A) PPC = Pression Artérielle Moyenne (PAM) - Pression Intra-Crânienne (PIC).",
      "B) PPC = PAM + PIC.",
      "C) PPC = Pression Artérielle Systolique x Pression Diastolique.",
      "D) PPC = Volume sanguin cérébral / Résistance vasculaire.",
      "E) PPC = Débit cardiaque x PIC."
    ],
    correctAnswers: [0],
    explanation: "PPC = PAM - PIC. L'élévation de la PIC ou l'effondrement de la PAM réduit directement la perfusion cérébrale, créant une ischémie tissulaire cérébrale dès que la PPC chute sous 50-60 mmHg.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-05',
    courseId: 'crs-neuro-22',
    questionNumber: 5,
    type: 'QCM',
    content: "Le nerf crânien le plus précocement et fréquemment paralysé sans valeur localisatrice précise au cours d'une HIC diffuse est :",
    options: [
      "A) Le nerf moteur oculaire externe (VI / nerf abducens), en raison de son long trajet intracrânien vulnérable à l'étirement sur le rocher.",
      "B) Le nerf olfactif (I).",
      "C) Le nerf hypoglosse (XII).",
      "D) Le nerf accessoire spinal (XI).",
      "E) Le nerf glossopharyngien (IX)."
    ],
    correctAnswers: [0],
    explanation: "La paralysie unilatérale ou bilatérale du VI (diplopie horizontale dans le regard latéral) est le signe faux-localisateur par excellence de l'HIC dû à son étirement sur le sommet du rocher.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-06',
    courseId: 'crs-neuro-22',
    questionNumber: 6,
    type: 'QCM',
    content: "L'engagement sous-falcoriel (engagement cingulaire) correspond à :",
    options: [
      "A) Le glissement du gyrus cingulaire d'un hémisphère sous la faux du cerveau vers l'hémisphère opposé, pouvant comprimer l'artère cérébrale antérieure.",
      "B) La hernie des amygdales cérébelleuses dans le trou occipital.",
      "C) La protrusion du cervelet à travers la voûte pariétale.",
      "D) L'expulsion du tronc cérébral dans le cavum.",
      "E) Le recul de l'hypophyse dans le sinus sphénoïdal."
    ],
    correctAnswers: [0],
    explanation: "L'engagement sous la faux (cingulaire) est le plus fréquent : déplacement transversal du cortex cingulaire sous le bord libre de la faux, risquant d'ischémier le territoire de l'artère cérébrale antérieure.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-07',
    courseId: 'crs-neuro-22',
    questionNumber: 7,
    type: 'QCM',
    content: "L'engagement temporal (engagement uncal) met directement en jeu le pronostic vital par compression du mésencéphale dans la fente de Bichat. Ses signes cardinaux sont :",
    options: [
      "A) Une mydriase unilatérale aréactive homolatérale à la lésion, une dégradation rapide de la vigilance vers le coma et une hémiplégie controlatérale (ou homolatérale par signe de Kernohan).",
      "B) Une surdité brusque bilatérale sans troubles de la vigilance.",
      "C) Un myosis bilatéral serré avec hypertonie de posture fébrile.",
      "D) Une diplopie monoculaire isolée sans anomalie pupillaire.",
      "E) Une paraplégie flasque pure."
    ],
    correctAnswers: [0],
    explanation: "La hernie de l'uncus temporal écrase le nerf III (mydriase homolatérale paralytique précoce) et le pédoncule cérébral (déficit moteur et coma), constituant une extrême urgence de décompression chirurgicale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-08',
    courseId: 'crs-neuro-22',
    questionNumber: 8,
    type: 'QCM',
    content: "L'engagement amygdalien (engagement tonsillaire) correspond à la descente des amygdales cérébelleuses dans le foramen magnum (trou occipital), comprimant le bulbe rachidien. Il se traduit par :",
    options: [
      "A) Des crises de contracture axiale postérieures en opisthotonos, des syncopes aux changements de position, un torticolis douloureux et un arrêt cardiorespiratoire foudroyant par compression des centres bulbaires.",
      "B) Une aphasie de Broca régressive.",
      "C) Une amaurose transitoire pure.",
      "D) Un tremblement d'attitude des mains.",
      "E) Une incontinence urinaire d'effort."
    ],
    correctAnswers: [0],
    explanation: "L'engagement des amygdales cérébelleuses dans le trou occipital comprime les centres vitaux respiratoires et vasomoteurs du bulbe rachidien, entraînant un décès foudroyant par arrêt respiratoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-09',
    courseId: 'crs-neuro-22',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle procédure diagnostique médicale courante est FORMELLEMENT CONTRE-INDIQUÉE en présence d'une HIC avec effet de masse ou processus expansif cérébral non exclu ?",
    options: [
      "A) La ponction lombaire (PL).",
      "B) L'IRM cérébrale.",
      "C) L'angio-scanner des troncs supra-aortiques.",
      "D) L'échographie oculaire en mode B.",
      "E) Le bilan d'hémostase sanguin."
    ],
    correctAnswers: [0],
    explanation: "La ponction lombaire soustrait brutalement du LCR dans le compartiment spinal, créant un gradient de pression cranio-spinal majeur qui précipite immédiatement l'engagement cérébral fatal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-10',
    courseId: 'crs-neuro-22',
    questionNumber: 10,
    type: 'QCM',
    content: "Le traitement médical d'urgence pour dépléter rapidement la pression intracrânienne lors d'une poussée aiguë d'HIC menaçante en réanimation repose sur :",
    options: [
      "A) Les solutés osmotiques intraveineux (Mannitol à 20% à 0,5 - 1 g/kg en bolus OU Sérum salé hypertonique à 3% - 7,5%).",
      "B) Les diurétiques de l'anse (furosémide) seuls à faible dose.",
      "C) L'administration de soluté glucosé hypotonique à 2,5%.",
      "D) L'anticoagulation préventive.",
      "E) L'insuline à haute dose."
    ],
    correctAnswers: [0],
    explanation: "L'osmothérapie (Mannitol 20% ou NaCl hypertonique) crée un gradient osmotique attirant l'eau du parenchyme cérébral sain vers le compartiment intravasculaire, réduisant rapidement la PIC en 15 à 30 minutes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-11',
    courseId: 'crs-neuro-22',
    questionNumber: 11,
    type: 'QCM',
    content: "L'hypertension intracrânienne idiopathique (HTIC idiopathique ou pseudotumor cerebri) se rencontre avec une prédilection frappante chez :",
    options: [
      "A) La femme jeune en surpoids ou obèse en période d'activité génitale.",
      "B) L'homme âgé de plus de 80 ans dénutri.",
      "C) Le nouveau-né prématuré.",
      "D) L'athlète masculin sans aucune surcharge pondérale.",
      "E) Les patients porteurs de trisomie 21."
    ],
    correctAnswers: [0],
    explanation: "Le profil typique de l'HTIC idiopathique : femme jeune (20-40 ans), en surcharge pondérale/obèse ou ayant pris du poids rapidement, sans masse ni dilatation ventriculaire à l'IRM.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-12',
    courseId: 'crs-neuro-22',
    questionNumber: 12,
    type: 'QCM',
    content: "Les critères diagnostiques de Dandy modifiés de l'Hypertension Intracrânienne Idiopathique comprennent :",
    options: [
      "A) Signes et symptômes d'HIC, absence de lésion focale ou de thrombose veineuse à l'IRM, LCR de composition biochimique normale mais avec pression d'ouverture élevée (> 25 cmH2O) mesurée en décubitus latéral.",
      "B) Présence d'un glioblastome frontal avec hydrocéphalie tri-ventriculaire.",
      "C) Méningite purulente à pneumocoque décapitée.",
      "D) Pression du LCR inférieure à 5 cmH2O.",
      "E) Absence totale de céphalées et examen visuel normal."
    ],
    correctAnswers: [0],
    explanation: "Critères de Dandy : clinique d'HIC, imagerie normale (éliminant tumeur et thrombose des sinus), examen neuro normal sauf paralysie du VI, LCR normal mais sous pression > 25 cmH2O.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-13',
    courseId: 'crs-neuro-22',
    questionNumber: 13,
    type: 'QCM',
    content: "Le risque majeur non vital mais fonctionnel irréversible de l'hypertension intracrânienne idiopathique non traitée est :",
    options: [
      "A) La cécité définitive bilatérale par atrophie optique consécutive à la stase papillaire chronique prolongée.",
      "B) L'insuffisance rénale terminale.",
      "C) La perte définitive du goût.",
      "D) Une surdité de transmission unilatérale.",
      "E) Une scoliose dorsale neuromusculaire."
    ],
    correctAnswers: [0],
    explanation: "Le risque redouté de l'HIC idiopathique est ophtalmologique : l'ischémie de la tête du nerf optique mène à la constriction du champ visuel et à la cécité définitive.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-14',
    courseId: 'crs-neuro-22',
    questionNumber: 14,
    type: 'QCM',
    content: "Le traitement médical de première ligne de l'HTIC idiopathique associe le contrôle pondéral à :",
    options: [
      "A) L'acétazolamide (Diamox®), inhibiteur de l'anhydrase carbonique diminuant la sécrétion de LCR par les plexus choroïdes.",
      "B) Les corticoïdes à forte dose pendant 10 ans.",
      "C) Les anticoagulants antivitamine K systématiques.",
      "D) L'hormone de croissance de synthèse.",
      "E) L'acide acétylsalicylique à 3 g/jour."
    ],
    correctAnswers: [0],
    explanation: "L'acétazolamide (1 à 2 g/j) réduit la production de LCR de plus de 50%, associé à la perte de poids qui est le seul traitement étiologique durable.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-15',
    courseId: 'crs-neuro-22',
    questionNumber: 15,
    type: 'QCM',
    content: "La triade de Cushing associant HTA, bradycardie et bradypnée témoigne :",
    options: [
      "A) D'une ischémie terminale des centres régulateurs du tronc cérébral consécutive à une élévation critique de la PIC.",
      "B) D'un arrêt précoce de la sécrétion d'aldostérone.",
      "C) D'une insuffisance rénale aiguë fonctionnelle.",
      "D) D'une crise d'asthme sévère décompensée.",
      "E) D'une hypothyroïdie acquise primitive."
    ],
    correctAnswers: [0],
    explanation: "Le réflexe de Cushing est une tentative ultime du cerveau pour maintenir la PPC (PPC = PAM - PIC) en augmentant la PAM systolique, déclenchant une bradycardie baroréflexe et une dépression respiratoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-16',
    courseId: 'crs-neuro-22',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans le positionnement au lit d'un patient présentant une hypertension intracrânienne aiguë, la règle de base est :",
    options: [
      "A) Surélévation de la tête de lit à 30°, tête droite dans l'axe médian sans rotation ni flexion cervicale, afin d'optimiser le drainage veineux jugulaire cérébral.",
      "B) Position de Trendelenburg stricte (tête plus basse que les pieds).",
      "C) Décubitus ventral tête tournée sur le côté.",
      "D) Flexion forcée du cou sur la poitrine.",
      "E) Position assise verticale complète à 90° avec jambes pendantes."
    ],
    correctAnswers: [0],
    explanation: "La tête surélevée à 30° et maintenue en rectitude sans compression jugulaire favorise le retour veineux cérébral passif par gravité, diminuant le volume sanguin intracrânien.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-17',
    courseId: 'crs-neuro-22',
    questionNumber: 17,
    type: 'QCM',
    content: "L'œdème cérébral vasogénique se distingue physiopathologiquement de l'œdème cytotoxique par :",
    options: [
      "A) Une rupture de la barrière hémato-encéphalique (BHE) avec passage d'eau et de protéines plasmatiques dans l'espace extracellulaire de la substance blanche (répondant spectaculairement aux corticoïdes).",
      "B) Un gonflement hydrique intracellulaire par faillite des pompes ATP-dépendantes sans rupture de BHE (insensible aux corticoïdes).",
      "C) Une absence complète d'eau dans les tissus.",
      "D) Une calcification diffuse immédiate.",
      "E) Une localisation exclusive dans la pulpe dentaire."
    ],
    correctAnswers: [0],
    explanation: "Œdème vasogénique (tumeurs, abcès) : fuite plasmatique extracellulaire par brèche de la BHE, très corticosensible. Œdème cytotoxique (ischémie cérébrale anoxique) : accumulation d'eau intracellulaire par nécrose, insensible aux corticoïdes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-18',
    courseId: 'crs-neuro-22',
    questionNumber: 18,
    type: 'QCM',
    content: "Parmi les signes radiologiques évocateurs d'HIC bénigne/idiopathique à l'IRM cérébrale, on retrouve classiquement :",
    options: [
      "A) La selle turcique vide (empty sella), l'aplatissement du pôle postérieur des globes oculaires avec saillie de la papille et la dilatation des gaines des nerfs optiques.",
      "B) Une atrophie cérébelleuse pan-vermienne.",
      "C) Une oblitération complète du foramen magnum.",
      "D) Une hypodensité du tronc cérébral étendu.",
      "E) Une fracture comminutive de la mandibule."
    ],
    correctAnswers: [0],
    explanation: "La distension de la dure-mère par la pression de LCR produit la selle turcique vide, l'élargissement de l'espace sous-arachnoïdien péri-optique et l'aplatissement scléral postérieur.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-22-19',
    courseId: 'crs-neuro-22',
    questionNumber: 19,
    type: 'QCM',
    content: "L'hyperventilation contrôlée transitoire chez un patient intubé pour HIC maligne aiguë agit en provoquant :",
    options: [
      "A) Une hypocapnie (chute de la PaCO2 entre 30 et 35 mmHg) induisant une vasoconstriction artériolaire cérébrale immédiate et réduisant le volume sanguin cérébral.",
      "B) Une vasodilatation artérielle massive augmentant le flux sanguin.",
      "C) Une alcalose métabolique tubulaire rénale.",
      "D) Une élévation de la température corporelle.",
      "E) Une ouverture permanente de la barrière hémato-encéphalique."
    ],
    correctAnswers: [0],
    explanation: "Le CO2 est le plus puissant vaso-régulateur cérébral : l'hypocapnie (PaCO2 30-35 mmHg) entraîne une vasoconstriction immédiate réduisant la PIC de façon temporaire (à n'utiliser qu'en urgence de sauvetage).",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-22-20',
    courseId: 'crs-neuro-22',
    questionNumber: 20,
    type: 'QCM',
    content: "En cas d'échec du traitement médical maximal de l'hypertension intracrânienne idiopathique avec menace visuelle rapide (dégradation du champ visuel), le traitement chirurgical indiqué est :",
    options: [
      "A) La fenestration de la gaine du nerf optique OU une dérivation lombo-péritonéale / ventriculo-péritonéale (ou stenting d'un sinus latéral sténosé).",
      "B) Une néphrectomie unilatérale de décharge.",
      "C) Une sympathectomie cervicale bilatérale.",
      "D) Une amputation de la langue.",
      "E) Une résection bilatérale des glandes surrénales."
    ],
    correctAnswers: [0],
    explanation: "Les urgences visuelles de l'HTIC idiopathique relèvent de la fenestration de la gaine du nerf optique ou d'une dérivation de LCR (lombo-péritonéale) ou stent veineux dural pour sauver la vision.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-21',
    courseId: 'crs-neuro-22',
    questionNumber: 21,
    type: 'QCM',
    content: "L'engagement cérébelleux ascendant (hernie transtentorielle inverse) peut survenir lors de :",
    options: [
      "A) L'évacuation trop rapide d'un ventricule sus-tentoriel chez un patient porteur d'une volumineuse tumeur de la fosse cérébrale postérieure.",
      "B) Une simple marche au grand air.",
      "C) Une radiographie des poumons en inspiration bloquée.",
      "D) Un traitement par aspirine 100 mg.",
      "E) Une glycémie normale à jeun."
    ],
    correctAnswers: [0],
    explanation: "Si l'on draine trop brutalement le liquide sus-tentoriel en présence d'une masse de la fosse postérieure, la culmen et le vermis supérieur sont aspirés vers le haut à travers le foramen de Pacchioni (incisure de la tente), comprimant le mésencéphale dorsal.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-22-22',
    courseId: 'crs-neuro-22',
    questionNumber: 22,
    type: 'QCM',
    content: "Dans la prise en charge d'un patient comateux en HIC aiguë sous ventilation mécanique, la valeur cible de la température corporelle doit être :",
    options: [
      "A) Une normothermie stricte (36,5°C - 37°C) avec lutte active contre toute hyperthermie, chaque degré supplémentaire augmentant significativement la consommation cérébrale en O2 (CMRO2).",
      "B) Une hyperthermie provoquée à 39,5°C.",
      "C) Une hypothermie profonde à 20°C systématique.",
      "D) L'absence totale de thermomètre.",
      "E) Une température fluctuante sans contrôle."
    ],
    correctAnswers: [0],
    explanation: "La fièvre majore le métabolisme neuronal (CMRO2) et aggrave l'œdème cérébral et l'ischémie. La normothermie stricte par antipyrétiques et refroidissement externe est fondamentale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-23',
    courseId: 'crs-neuro-22',
    questionNumber: 23,
    type: 'QCM',
    content: "Le signe de Kernohan au cours d'un engagement uncal temporal correspond à :",
    options: [
      "A) Une hémiplégie homolatérale à la masse expansive, causée par la compression du pédoncule cérébral controlatéral contre le bord libre rigide de la tente du cervelet (encoche de Kernohan).",
      "B) Une surdité de perception unilatérale droite.",
      "C) Un nystagmus vertical spontané.",
      "D) Une anosmie bilatérale définitive.",
      "E) Une abolition du réflexe stapédien."
    ],
    correctAnswers: [0],
    explanation: "Signe faux-localisateur classique : la déviation du mésencéphale vient buter contre la tente du cervelet opposée (encoche de Kernohan), causant une hémiplégie du MÊME côté que la lésion expansive.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-22-24',
    courseId: 'crs-neuro-22',
    questionNumber: 24,
    type: 'QCM',
    content: "L'effet indésirable classique d'une administration trop prolongée ou à trop forte dose de Mannitol lors de l'HIC est :",
    options: [
      "A) Une déshydratation hyperosmolaire sévère avec insuffisance rénale aiguë organique par néphrose osmotique et effet rebond d'aggravation de l'œdème cérébral.",
      "B) Une surcharge hydrosodée avec œdème aigu du poumon constant.",
      "C) Une pancréatite aiguë nécrosante.",
      "D) Une luxation spontanée de la hanche.",
      "E) Une aplasie médullaire complète."
    ],
    correctAnswers: [0],
    explanation: "Le mannitol éliminé par le rein peut causer une néphrotoxicité osmotique aiguë (surveiller l'osmolarité plasmatique, ne pas dépasser 320 mOsm/L) et un rebond de PIC par diffusion tissulaire du mannitol.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-22-25',
    courseId: 'crs-neuro-22',
    questionNumber: 25,
    type: 'QCM',
    content: "Chez le nourrisson de moins de 1 an, comment s'extériorise l'hypertension intracrânienne avant la soudure des sutures crâniennes ?",
    options: [
      "A) Par une macrocrânie avec augmentation anormale du périmètre crânien, bombement et tension de la fontanelle antérieure, disjonction des sutures et regard en 'coucher de soleil'.",
      "B) Par des céphalées verbalisées intenses.",
      "C) Par une soudure prématurée accélérée de toutes les sutures.",
      "D) Par une microcéphalie avec dépression fontanellaire permanente.",
      "E) Par une surdité isolée sans anomalie du crâne."
    ],
    correctAnswers: [0],
    explanation: "Avant la fermeture des sutures, la boîte crânienne est extensible : l'HIC se traduit par l'expansion du périmètre crânien, la fontanelle antérieure bombée pulsatile et le regard en coucher de soleil par compression du tectum.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-22-c01',
    courseId: 'crs-neuro-22',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Une femme de 28 ans, ayant un IMC à 34 kg/m², consulte pour des céphalées quotidiennes rétro-orbitaires pulsatiles réveillant la nuit, associées à des acouphènes pulsatiles synchrones du pouls ('bruit de battement de cœur dans l'oreille') et des épisodes récurrents d'éclipses visuelles bilatérales durant quelques secondes lors des changements de position. L'examen neurologique est strictement normal en dehors d'une diplopie horizontale dans le regard latéral gauche (paralysie du VI gauche). Le fond d'œil révèle un œdème papillaire bilatéral saillant stade 3 avec hémorragies péri-papillaires. L'IRM encéphalique et l'angio-IRM veineuse éliminent tout processus expansif et toute thrombose veineuse cérébrale. Quel est le diagnostic le plus probable ?",
    options: [
      "A) Hypertension intracrânienne idiopathique (pseudotumor cerebri).",
      "B) Glioblastome bitemporal infiltrant.",
      "C) Thrombophlébite du sinus latéral gauche.",
      "D) Sclérose en plaques forme progressive primaire.",
      "E) Méningite carcinomateuse diffuse."
    ],
    correctAnswers: [0],
    explanation: "Femme jeune obèse + HIC + acouphènes pulsatiles + paralysie du VI sans masse ni thrombose veineuse à l'IRM = HTIC idiopathique répondant aux critères de Dandy.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-c02',
    courseId: 'crs-neuro-22',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel geste diagnostique et thérapeutique immédiat confirmera le diagnostic en mesurant la pression d'ouverture tout en soulageant instantanément la céphalée ?",
    options: [
      "A) Ponction lombaire avec mesure de la pression d'ouverture au manomètre de Claude (pression attendue > 25 cmH2O) et évacuation de 20 à 30 ml de LCR.",
      "B) Craniectomie décompressive bi-frontale.",
      "C) Perfusion d'héparine à dose curative continue.",
      "D) Infiltration épidurale de corticoïdes.",
      "E) Pose d'une sonde nasogastrique de décharge."
    ],
    correctAnswers: [0],
    explanation: "Après avoir formellement éliminé un processus expansif et une hydrocéphalie obstructive à l'IRM, la ponction lombaire mesure la pression d'ouverture (> 25 cmH2O) et teste l'effet bénéfique de la soustraction liquidienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-c03',
    courseId: 'crs-neuro-22',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un patient de 55 ans porteur d'une tumeur temporale droite volumineuse présente brutalement une dégradation de la conscience (Glasgow 7), une anisocorie avec pupille droite dilatée aréactive et une hémiplégie gauche flasque. Quelle complication neurochirurgicale aiguë en cours met immédiatement en jeu le pronostic vital ?",
    options: [
      "A) Engagement uncal temporal droit dans la fente de Bichat.",
      "B) Engagement amygdalien inférieur.",
      "C) Rupture d'anévrisme cérébelleux.",
      "D) Encéphalopathie hépatique terminale.",
      "E) Crise de tétanie par hypocalcémie."
    ],
    correctAnswers: [0],
    explanation: "L'association coma + mydriase unilatérale droite + déficit controlatéral gauche chez un porteur de masse temporale droite signe l'engagement temporal droit nécessitant osmothérapie et chirurgie minute.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-c04',
    courseId: 'crs-neuro-22',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un homme de 65 ans hospitalisé pour traumatisme crânien grave sous monitorage de la PIC voit sa pression intracrânienne s'élever à 35 mmHg depuis 20 minutes malgré la sédation et la position proclive à 30°. Sa pression artérielle est à 160/90 mmHg (PAM 113 mmHg). Quelle est la valeur de sa Pression de Perfusion Cérébrale (PPC) et quelle mesure médicale d'urgence devez-vous administrer ?",
    options: [
      "A) PPC = 78 mmHg ; administration d'un bolus de soluté salé hypertonique ou de Mannitol 20% pour faire baisser la PIC.",
      "B) PPC = 25 mmHg ; arrêt de tout traitement.",
      "C) PPC = 148 mmHg ; saignée de 500 ml.",
      "D) PPC = 0 mmHg ; déclaration de mort encéphalique.",
      "E) PPC = 500 mmHg ; injection de potassium."
    ],
    correctAnswers: [0],
    explanation: "PPC = PAM - PIC = 113 - 35 = 78 mmHg (PPC satisfaisante > 60-70 mmHg mais PIC très pathologique > 20 mmHg) : nécessite un bolus osmotique (Mannitol ou NaCl 7,5%) pour réduire la PIC.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-22-c05',
    courseId: 'crs-neuro-22',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un enfant de 7 ans suivi pour une tumeur de la fosse cérébrale postérieure présente des vomissements matinaux et une instabilité de la marche. L'interne de garde décide de réaliser une ponction lombaire pour éliminer une méningite fébrile. Moins de 2 minutes après l'introduction de l'aiguille et le retrait du mandrin, l'enfant présente une raideur généralisée en opisthotonos, une bradycardie extrême à 30 bpm suivie d'un arrêt respiratoire foudroyant. Quel accident dramatique s'est produit ?",
    options: [
      "A) Engagement des amygdales cérébelleuses dans le trou occipital provoqué par la ponction lombaire intempestive.",
      "B) Choc anaphylactique à l'antiseptique cutané.",
      "C) Hémorragie digestive foudroyante.",
      "D) Infarctus du myocarde néonatal.",
      "E) Crise d'épilepsie idiopathique bénigne."
    ],
    correctAnswers: [0],
    explanation: "La PL était formellement contre-indiquée en présence d'une masse de la fosse postérieure : la décompression spinale a provoqué l'enclavement foudroyant des amygdales cérébelleuses dans le trou occipital, comprimant mortellement le bulbe rachidien.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_22_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-22-mindmap',
    courseId: 'crs-neuro-22',
    title: 'Mind Map : Hypertension Intra-Crânienne & Engagements',
    type: 'mindmap',
    content: `# Mind Map : Hypertension Intra-Crânienne (HIC)

## 1. Doctrine de Monro-Kellie & Physiologie
- V_total = V_parenchyme (80%) + V_sang (10%) + V_LCR (10%) = Constante.
- PPC = PAM - PIC (Cible PPC : 60-70 mmHg, PIC normale < 10-15 mmHg ; seuil de traitement PIC > 20-22 mmHg).
- Triade clinique : Céphalées matinales soulagées par les vomissements en jet + Éclipses visuelles.
- Signe faux localisateur : Paralysie du VI (abducens) unilatérale ou bilatérale.

## 2. Risques Majeurs : Les Engagements Cérébraux
- **Engagement Sous-Falcoriel (Cingulaire)** : Hernie sous la faux -> Ischémie de l'artère cérébrale antérieure.
- **Engagement Uncal (Temporal)** : Hernie dans la fente de Bichat -> Mydriase unilatérale homolatérale (nerf III) + Hémiparésie + Coma. Urgence vitale chirurgicale !
- **Engagement Amygdalien (Tonsillaire)** : Descente dans le foramen magnum -> Compression bulbaire -> Torticolis, opisthotonos, arrêt respiratoire foudroyant.
- **CONTRE-INDICATION ABSOLUE** : Ponction lombaire sans scanner préalable si HIC suspectée !

## 3. HTIC Idiopathique (Pseudotumor Cerebri)
- Femme jeune, surcharge pondérale/obésité.
- Imagerie normale (IRM + Angio-IRM veineuse éliminent masse et thrombophlébite des sinus).
- LCR normal mais pression d'ouverture > 25 cmH2O.
- Complication : Cécité définitive par atrophie optique.
- Traitement : Perte de poids + Acétazolamide (Diamox).

## 4. Mesures Thérapeutiques d'Urgence
- Tête surélevée à 30°, axe neutre (drainage jugulaire).
- Normoxie, normocapnie (PaCO2 35-40), apyrexie stricte, normoglycémie.
- Osmothérapie d'urgence : Mannitol 20% ou NaCl hypertonique.
- Corticoïdes à forte dose UNIQUEMENT si œdème vasogénique péri-tumoral.`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-22-astuces',
    courseId: 'crs-neuro-22',
    title: 'Astuces & Pièges aux Concours : Hypertension Intra-Crânienne',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Ponction lombaire dans l'HIC :**
   - Piège n°1 absolu : La ponction lombaire est **strictement contre-indiquée** en cas de processus expansif intracrânien sous peine d'engagement temporal ou amygdalien mortel immédiat.
2. **Paralysie du VI :**
   - N'a **aucune valeur localisatrice** : le VI a un trajet très long et fragile sur la pointe du rocher ; il est étiré par l'HIC diffuse.
3. **Triade de Cushing :**
   - **HTA + Bradycardie + Rythme respiratoire irrégulier** : c'est un signe d'engagement imminent et de souffrance du tronc cérébral !
4. **Œdème vasogénique vs cytotoxique :**
   - *Vasogénique* (tumeurs, abcès) : atteinte de la barrière hémato-encéphalique, hypersignal de la substance blanche en doigt de gant, **très corticosensible**.
   - *Cytotoxique* (AVC ischémique, anoxie) : œdème intracellulaire, **totalement insensible aux corticoïdes** (ne jamais donner de corticoïdes dans un AVC ischémique).
5. **HTIC idiopathique :**
   - Toujours penser à vérifier l'absence de thrombophlébite des sinus duraux par une angio-IRM veineuse avant de conclure à une forme idiopathique.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 23: EXAMEN NEUROLOGIQUE & SÉMIOLOGIE
// ==========================================
export const NEURO_LESSON_23_QUESTIONS: Question[] = [
  {
    id: 'q-nro-23-01',
    courseId: 'crs-neuro-23',
    questionNumber: 1,
    type: 'QCM',
    content: "Le signe de Babinski (réflexe cutané-plantaire en extension) est la réponse caractéristique d'une atteinte de :",
    options: [
      "A) La corne antérieure de la moelle épinière.",
      "B) La voie pyramidale (faisceau cortico-spinal).",
      "C) Le nerf sciatique périphérique.",
      "D) Le cervelet néocérébelleux.",
      "E) Les cordons postérieurs de Goll et Burdach."
    ],
    correctAnswers: [1],
    explanation: "Le signe de Babinski (extension lente et majestueuse du gros orteil avec écartement des autres orteils en éventail lors de la stimulation du bord externe de la plante) est le signe pathognomonique du syndrome pyramidal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-02',
    courseId: 'crs-neuro-23',
    questionNumber: 2,
    type: 'QCM',
    content: "Le syndrome neurogène périphérique (atteinte du 2ème motoneurone) se caractérise sémiologiquement par :",
    options: [
      "A) Un déficit moteur flasque, une aréflexie ou hyporéflexie ostéotendineuse, une hypotonie, une amyotrophie rapide et des fasciculations musculaires.",
      "B) Une hyperréflexie ostéotendineuse avec clonus et signe de Babinski.",
      "C) Une hypertonie spastique élastique prédominant sur les fléchisseurs aux membres supérieurs.",
      "D) Un tremblement de repos unilatéral à 4 Hz.",
      "E) Une rigidité plastique en tuyau de plomb."
    ],
    correctAnswers: [0],
    explanation: "L'atteinte du motoneurone périphérique coupe l'arc réflexe : parésie flasque, abolition des ROT, atrophie musculaire secondaire rapide et fasciculations spontanées.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-03',
    courseId: 'crs-neuro-23',
    questionNumber: 3,
    type: 'QCM',
    content: "L'hypertonie pyramidale (spasticité) se distingue sémiologiquement de l'hypertonie extrapyramidale parkinsonienne par :",
    options: [
      "A) Son caractère élastique (cédant comme un ressort ou une lame de canif), sa vitesse-dépendance et sa distribution préférentielle sur les fléchisseurs au membre supérieur et extenseurs au membre inférieur.",
      "B) Son caractère plastique constant en tuyau de plomb avec phénomène de la roue dentée.",
      "C) Son abolition complète lors de l'effort controlatéral.",
      "D) Sa survenue préférentielle au repos complet.",
      "E) L'absence de tout signe de Babinski associé."
    ],
    correctAnswers: [0],
    explanation: "La spasticité pyramidale est élastique (résistance croissante avec la vitesse d'étirement cédant en lame de canif) et sélective (fléchisseurs MS, extenseurs MI) ; la rigidité parkinsonienne est plastique homogène en tuyau de plomb avec roue dentée.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-04',
    courseId: 'crs-neuro-23',
    questionNumber: 4,
    type: 'QCM',
    content: "Le signe de Romberg est dit positif ou présent si :",
    options: [
      "A) Le patient présente des oscillations ou une chute brutale dès la fermeture des yeux en position debout pieds joints, traduisant une ataxie proprioceptive ou vestibulaire.",
      "B) Le patient chute les yeux ouverts comme les yeux fermés sans aucune différence.",
      "C) Le patient ne peut pas lever le bras au-dessus de l'épaule.",
      "D) Le patient fléchit les doigts lors de la percussion du poignet.",
      "E) Le réflexe cornéen est aboli bilatéralement."
    ],
    correctAnswers: [0],
    explanation: "Le signe de Romberg teste l'équilibration sans le contrôle visuel : l'aggravation nette à l'occlusion des yeux signe une ataxie proprioceptive (chute multidirectionnelle non systématisée) ou vestibulaire (chute lente latéralisée vers le côté lésé). Dans l'ataxie cérébelleuse, les oscillations existent yeux ouverts et ne sont pas aggravées par la fermeture des yeux (Romberg négatif).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-05',
    courseId: 'crs-neuro-23',
    questionNumber: 5,
    type: 'QCM',
    content: "L'épreuve de Stewart-Holmes (ou manœuvre du rebond) permet d'explorer :",
    options: [
      "A) L'hypotonie cérébelleuse par défaut de contraction des antagonistes (l'avant-bras fléchi contre résistance heurte la poitrine du patient lors du relâchement brutal).",
      "B) La force musculaire du triceps sural.",
      "C) La sensibilité thermo-algique des orteils.",
      "D) La vision des couleurs de l'œil droit.",
      "E) Le tonus sphinctérien vésical."
    ],
    correctAnswers: [0],
    explanation: "La manœuvre du rebond de Stewart-Holmes teste le freinage cérébelleux : l'hypotonie et le retard de contraction de l'antagoniste provoquent un rebond exagéré heurtant le torse lors du lâchage brutal du bras.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-06',
    courseId: 'crs-neuro-23',
    questionNumber: 6,
    type: 'QCM',
    content: "La dysmétrie cérébelleuse se recherche sémiologiquement par :",
    options: [
      "A) L'épreuve doigt-nez ou doigt-doigt aux membres supérieurs et l'épreuve talon-genou aux membres inférieurs (hypermétrie avec dépassement de la cible).",
      "B) La percussion du tendon rotulien.",
      "C) Le grattage de la plante du pied.",
      "D) L'auscultation des artères carotides.",
      "E) La recherche d'un astérixis."
    ],
    correctAnswers: [0],
    explanation: "L'épreuve doigt-nez et talon-genou met en évidence l'hypermétrie (dépassement de la cible) caractéristique de l'asymétrie cinétique cérébelleuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-07',
    courseId: 'crs-neuro-23',
    questionNumber: 7,
    type: 'QCM',
    content: "L'adiadococinésie correspond à l'impossibilité ou difficulté d'exécuter rapidement :",
    options: [
      "A) Des mouvements alternatifs successifs (ex: épreuve des marionnettes ou tapotement régulier index-pouce).",
      "B) Une flexion du genou.",
      "C) Une déglutition d'eau.",
      "D) Une élocution de mots polysyllabiques.",
      "E) Une fixation du regard vers le haut."
    ],
    correctAnswers: [0],
    explanation: "L'adiadococinésie (épreuve des marionnettes ralentie, désynchronisée et maladroite) est un signe cardinal du syndrome cérébelleux cinétique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-08',
    courseId: 'crs-neuro-23',
    questionNumber: 8,
    type: 'QCM',
    content: "Le réflexe cornéen a pour voies anatomiques afférente et efférente :",
    options: [
      "A) Voie afférente : nerf trijumeau (V1 ophtalmique) ; Voie efférente : nerf facial (VII, muscle orbiculaire des paupières).",
      "B) Afférente : nerf optique (II) ; Efférente : nerf oculomoteur (III).",
      "C) Afférente : nerf facial (VII) ; Efférente : nerf trijumeau (V).",
      "D) Afférente : nerf auditif (VIII) ; Efférente : nerf abducens (VI).",
      "E) Afférente : nerf vague (X) ; Efférente : nerf hypoglosse (XII)."
    ],
    correctAnswers: [0],
    explanation: "Le réflexe cornéen teste l'arc V1 (sensibilité cornéenne) -> noyau sensitif du V -> noyau moteur du VII -> nerf VII (occlusion palpébrale bilatérale).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-09',
    courseId: 'crs-neuro-23',
    questionNumber: 9,
    type: 'QCM',
    content: "Une paralysie faciale centrale se distingue d'une paralysie faciale périphérique par :",
    options: [
      "A) La prédominance nette du déficit sur le territoire facial inférieur (effacement du pli naso-génien, déviation de la bouche) avec respect relatif du territoire facial supérieur (occlusion palpébrale et plissement du front conservés ou signe de Souques).",
      "B) Une atteinte égale et complète des étages supérieur et inférieur avec impossibilité totale de fermer l'œil (signe de Charles Bell).",
      "C) Une surdité de transmission associée obligatoire.",
      "D) Une anesthésie de la joue droite.",
      "E) Une abolition du réflexe cornéen homolatéral complet."
    ],
    correctAnswers: [0],
    explanation: "L'étage supérieur de la face recevant une innervation cortico-nucléaire bilatérale, la lésion centrale respecte la fermeture palpébrale et le front ; la paralysie périphérique frappe tout l'hémiface (Charles Bell +).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-10',
    courseId: 'crs-neuro-23',
    questionNumber: 10,
    type: 'QCM',
    content: "Le signe de Charles Bell est caractéristique d'une paralysie faciale périphérique. Il correspond à :",
    options: [
      "A) L'élévation et la bascule en haut et en dehors du globe oculaire laissant voir la sclère blanche lors de la tentative d'occlusion de la paupière paralysée.",
      "B) Une fermeture réflexe exagérée de la paupière.",
      "C) Un clignement involontaire lors de la parole.",
      "D) Une anesthésie de la langue.",
      "E) Une déviation de la luette vers le côté paralysé."
    ],
    correctAnswers: [0],
    explanation: "Signe de Charles Bell : occlusion palpébrale impossible (lagophtalmie) laissant voir la bascule physiologique du globe vers le haut.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-11',
    courseId: 'crs-neuro-23',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans l'échelle de Glasgow pour le coma (GCS), le score total varie de :",
    options: [
      "A) 3 à 15 points (3 = coma profond aréactif ; 15 = conscience normale).",
      "B) 0 à 10 points.",
      "C) 0 à 100 points.",
      "D) 5 à 20 points.",
      "E) 1 à 5 points."
    ],
    correctAnswers: [0],
    explanation: "Score de Glasgow : Ouverture des yeux (1-4) + Réponse verbale (1-5) + Réponse motrice (1-6) = score de 3 (coma aréactif sans réponse) à 15 (parfaitement conscient).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-12',
    courseId: 'crs-neuro-23',
    questionNumber: 12,
    type: 'QCM',
    content: "Une réponse motrice en 'décérébration' à la stimulation douloureuse correspond sur l'échelle de Glasgow à un score moteur de 2 et se traduit par :",
    options: [
      "A) Une extension, adduction et rotation interne des membres supérieurs ('enroulement') avec extension des membres inférieurs.",
      "B) Une flexion lente et stéréotypée des coudes (décortication, cotée M3).",
      "C) Un retrait adapté du membre stimulé.",
      "D) Une localisation précise de la douleur.",
      "E) Une absence complète de mouvement (M1)."
    ],
    correctAnswers: [0],
    explanation: "Décérébration (M2) : souffrance sous-corticale basse / tronc cérébral avec extension-enroulement des membres supérieurs et extension des membres inférieurs.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-13',
    courseId: 'crs-neuro-23',
    questionNumber: 13,
    type: 'QCM',
    content: "L'aphasie de Broca (motrice ou non-fluente) se caractérise sémiologiquement par :",
    options: [
      "A) Un discours réduit, laborieux, hésitant, agrammatique, avec manque du mot et paraphasies phonémiques, contrastant avec une compréhension relativement bien préservée et une conscience aiguë du trouble.",
      "B) Un débit verbal abondant, fluent, incompréhensible (jargonaphasie), avec anosognosie et compréhension effondrée.",
      "C) Une amnésie antérograde isolée sans trouble du langage.",
      "D) Une surdité verbale pure.",
      "E) Une dysphonie spasmodique laryngée pure."
    ],
    correctAnswers: [0],
    explanation: "Broca : aphasie motrice non-fluente, réduction du débit, style télégraphique, anomie, compréhension préservée, conscience du trouble avec frustration.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-14',
    courseId: 'crs-neuro-23',
    questionNumber: 14,
    type: 'QCM',
    content: "L'aphasie de Wernicke (sensorielle ou fluente) se caractérise sémiologiquement par :",
    options: [
      "A) Un débit verbal rapide et intarissable (logorrhée), riche en paraphasies sémantiques et néologismes pouvant aboutir à un jargon incompréhensible, associé à un trouble massif de la compréhension et une anosognosie.",
      "B) Un mutisme complet avec compréhension parfaite.",
      "C) Une impossibilité d'écrire alors que le langage oral est indemne.",
      "D) Une abolition du réflexe nauséeux.",
      "E) Un strabisme divergent bilatéral."
    ],
    correctAnswers: [0],
    explanation: "Wernicke : aphasie fluente sensorielle, logorrhée, jargonaphasie, troubles majeurs de compréhension du langage oral et écrit, anosognosie complète.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-15',
    courseId: 'crs-neuro-23',
    questionNumber: 15,
    type: 'QCM',
    content: "Le réflexe photomoteur direct correspond à :",
    options: [
      "A) La constriction pupillaire (myosis) de l'œil éclairé lors de la stimulation lumineuse.",
      "B) La dilatation de la pupille dans l'obscurité.",
      "C) La constriction de la pupille controlatérale non éclairée (réflexe consensuel).",
      "D) Le larmoiement réflexe à la lumière.",
      "E) La fermeture involontaire des deux paupières."
    ],
    correctAnswers: [0],
    explanation: "Le réflexe photomoteur direct est la constriction unilatérale de la pupille éclairée par activation des fibres parasympathiques du nerf oculomoteur (III) via le noyau d'Edinger-Westphal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-16',
    courseId: 'crs-neuro-23',
    questionNumber: 16,
    type: 'QCM',
    content: "Le signe d'Argyll-Robertson, classiquement rencontré dans la neurosyphilis tertiaire, se définit par :",
    options: [
      "A) L'abolition du réflexe photomoteur à la lumière avec conservation de la réaction pupillaire d'accommodation-convergence.",
      "B) Une mydriase bilatérale fixe insensible à tout stimulus.",
      "C) Un myosis unilatéral avec ptosis et énophtalmie.",
      "D) Une cécité brutale avec fond d'œil blanc.",
      "E) Une paralysie exclusive du regard vers le haut."
    ],
    correctAnswers: [0],
    explanation: "Argyll-Robertson : dissociation photomotrice : abolition bilatérale du réflexe photomoteur direct et consensuel, avec préservation stricte du réflexe d'accommodation-convergence.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-17',
    courseId: 'crs-neuro-23',
    questionNumber: 17,
    type: 'QCM',
    content: "L'épreuve des index de Barré aux membres supérieurs recherche un déficit moteur pyramidal en demandant au patient :",
    options: [
      "A) De tendre les deux bras en avant à l'horizontale, paumes tournées vers le haut et yeux fermés : le bras déficitaire chute lentement avec pronation précoce de la main.",
      "B) De fléchir les cuisses sur le bassin en décubitus dorsal.",
      "C) De compter jusqu'à 20 à voix haute.",
      "D) De sauter à cloche-pied.",
      "E) De serrer fort les mains de l'examinateur."
    ],
    correctAnswers: [0],
    explanation: "Manœuvre de Barré aux membres supérieurs : la pronation de la main puis la chute du bras signent un déficit moteur pyramidal discret.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-18',
    courseId: 'crs-neuro-23',
    questionNumber: 18,
    type: 'QCM',
    content: "La manœuvre de Mingazzini explore la motricité des membres inférieurs en plaçant le patient :",
    options: [
      "A) En décubitus dorsal, cuisses fléchies à 90° sur le bassin et jambes horizontales fléchies à 90° sur les cuisses : la jambe déficitaire s'abaisse prématurément.",
      "B) En décubitus ventral, jambes fléchies à 90° sur les cuisses (manœuvre de Barré aux membres inférieurs).",
      "C) Debout sur une seule jambe.",
      "D) Assis au bord du lit jambes pendantes.",
      "E) En position génu-pectorale."
    ],
    correctAnswers: [0],
    explanation: "Mingazzini : décubitus dorsal, hanches et genoux fléchis à 90° : la cuisse et la jambe parétiques chutent vers le plan du lit.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-19',
    courseId: 'crs-neuro-23',
    questionNumber: 19,
    type: 'QCM',
    content: "L'épreuve de Weber au diapason permet de distinguer une surdité de transmission d'une surdité de perception. Dans une surdité de perception de l'oreille droite, le son est latéralisé :",
    options: [
      "A) Du côté sain (oreille gauche).",
      "B) Du côté malade (oreille droite).",
      "C) Également des deux côtés au vertex.",
      "D) Dans le menton uniquement.",
      "E) Le son n'est perçu nulle part."
    ],
    correctAnswers: [0],
    explanation: "Épreuve de Weber : dans la surdité de perception, la conduction osseuse est altérée dans l'oreille malade ; le son est donc mieux perçu par l'oreille saine (latéralisation vers l'oreille saine).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-20',
    courseId: 'crs-neuro-23',
    questionNumber: 20,
    type: 'QCM',
    content: "L'agnosie se définit sémiologiquement par :",
    options: [
      "A) L'impossibilité de reconnaître un stimulus (visuel, tactile, auditif) par une modalité sensorielle donnée, en l'absence de déficit sensoriel primaire ou de trouble intellectuel global.",
      "B) Une paralysie motrice flasque d'un membre.",
      "C) Un trouble de la compréhension orale du langage.",
      "D) Une anesthésie cutanée thermo-algique.",
      "E) Une perte totale de la mémoire autobiographique."
    ],
    correctAnswers: [0],
    explanation: "L'agnosie est un trouble sélectif de la reconnaissance (ex: prosopagnosie pour les visages, astéréognosie pour la reconnaissance tactile des objets) sans trouble de la vision ou du toucher élémentaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-21',
    courseId: 'crs-neuro-23',
    questionNumber: 21,
    type: 'QCM',
    content: "L'apraxie idéomotrice correspond à :",
    options: [
      "A) L'impossibilité d'exécuter des gestes symboliques simples ou mimés sur commande (ex: faire le salut militaire, envoyer un baiser), sans déficit moteur ni trouble de la compréhension.",
      "B) L'impossibilité de coordonner une suite d'actions pour utiliser un objet réel (apraxie idéatoire).",
      "C) L'incapacité d'assembler des cubes ou de dessiner en 3D (apraxie constructive).",
      "D) Une faiblesse des muscles fléchisseurs du poignet.",
      "E) Un tremblement des mains à l'effort."
    ],
    correctAnswers: [0],
    explanation: "Apraxie idéomotrice (lésion pariétale gauche) : altération des gestes sans manipulation d'objets (gestes signifiants symboliques ou sans signification sur commande).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-22',
    courseId: 'crs-neuro-23',
    questionNumber: 22,
    type: 'QCM',
    content: "L'astérixis (ou flapping tremor) correspond sémiologiquement à :",
    options: [
      "A) Des chutes brusques et brèves du tonus postural des extenseurs du poignet maintenus en dorsiflexion, réalisant des secousses en battement d'aile lors de l'encéphalopathie hépatique ou hypercapnique.",
      "B) Un tremblement oscillatoire régulier de repos à 4 Hz.",
      "C) Une chorée généralisée rapide arythmique.",
      "D) Une dystonie axiale en rotation.",
      "E) Un tic moteur involontaire transitoire."
    ],
    correctAnswers: [0],
    explanation: "L'astérixis est un myoclonus négatif : interruption brutale du tonus postural au niveau des mains tendues en hyperextension, caractéristique des encéphalopathies métaboliques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-23',
    courseId: 'crs-neuro-23',
    questionNumber: 23,
    type: 'QCM',
    content: "L'atteinte unilatérale du nerf hypoglosse (nerf XII) entraîne lors de la protraction de la langue :",
    options: [
      "A) Une déviation de la pointe de la langue vers le côté paralysé (lésé) par poussée du muscle génioglosse sain controlatéral.",
      "B) Une déviation de la pointe de la langue vers le côté sain.",
      "C) Une immobilité complète bilatérale de la langue.",
      "D) Une morsure réflexe de la lèvre supérieure.",
      "E) Une rétraction linguale permanente au fond de la bouche."
    ],
    correctAnswers: [0],
    explanation: "Le muscle génioglosse sain pousse la langue en avant et vers le côté opposé : en cas de paralysie du XII, la langue dévie vers le côté de la lésion.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-24',
    courseId: 'crs-neuro-23',
    questionNumber: 24,
    type: 'QCM',
    content: "Le signe du rideau de Vernet caractérise une atteinte unilatérale de :",
    options: [
      "A) Le nerf glossopharyngien (IX) et le nerf vague (X), avec déplacement de la paroi postérieure du pharynx et déviation de la luette vers le côté sain lors de la phonation.",
      "B) Le nerf trijumeau sensitif.",
      "C) Le nerf oculomoteur (III).",
      "D) Le nerf spinal accessoire (XI).",
      "E) Le plexus brachial supérieur."
    ],
    correctAnswers: [0],
    explanation: "Le signe du rideau de Vernet teste les nerfs mixtes (IX et X) : la paroi pharyngée postérieure dévie comme un rideau vers le côté sain innervé lors de l'émission d'un son.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-25',
    courseId: 'crs-neuro-23',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans l'évaluation de la force musculaire selon l'échelle internationale MRC (Medical Research Council), la cotation 3 correspond à :",
    options: [
      "A) Un mouvement actif possible uniquement contre la pesanteur, sans aucune résistance.",
      "B) Une contraction musculaire visible sans déplacement articulaire (cotation 1).",
      "C) Un mouvement actif possible uniquement en éliminant la pesanteur (cotation 2).",
      "D) Un mouvement actif contre résistance modérée (cotation 4).",
      "E) Une force musculaire rigoureusement normale (cotation 5)."
    ],
    correctAnswers: [0],
    explanation: "Échelle MRC : 0 = zéro contraction ; 1 = ébauche sans déplacement ; 2 = mouvement si pesanteur éliminée ; 3 = mouvement contre pesanteur seule ; 4 = contre résistance ; 5 = force normale.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-23-c01',
    courseId: 'crs-neuro-23',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un patient de 65 ans consulte pour une faiblesse brutale survenue au réveil intéressant la moitié droite du visage. L'examen montre une asymétrie faciale avec effacement du pli naso-génien droit et déviation de la commissure labiale vers la gauche lors du sourire. Cependant, le patient ferme parfaitement les deux yeux de manière symétrique et plisse les deux côtés du front sans aucune difficulté. Il existe par ailleurs une discrète parésie du membre supérieur droit (Barré positif). De quel type de paralysie faciale s'agit-il et où se situe la lésion ?",
    options: [
      "A) Paralysie faciale centrale droite par lésion cortico-nucléaire de l'hémisphère cérébral gauche.",
      "B) Paralysie faciale périphérique droite de Bell.",
      "C) Syndrome de Guillain-Barré avec diplégie faciale.",
      "D) Myasthénie auto-immune oculo-faciale pure.",
      "E) Schwannome du nerf facial droit intrapétreux."
    ],
    correctAnswers: [0],
    explanation: "L'épargne du territoire facial supérieur (front et fermeture palpébrale normaux) associée à un déficit pyramidal du membre supérieur droit signe une paralysie faciale centrale droite liée à une lésion hémisphérique gauche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-c02',
    courseId: 'crs-neuro-23',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen d'imagerie devez-vous réaliser en priorité pour rechercher un accident vasculaire cérébral ischémique aigu chez ce patient ?",
    options: [
      "A) IRM cérébrale en urgence avec séquences de Diffusion, FLAIR, T2* et angio-ARM du polygone de Willis.",
      "B) Radiographie simple des rochers de face.",
      "C) Échographie transfontanellaire.",
      "D) Électromyogramme de la face sous 24h.",
      "E) Scintigraphie osseuse au technétium."
    ],
    correctAnswers: [0],
    explanation: "L'IRM cérébrale avec séquence de diffusion (DWI) est l'examen de référence de confirmation d'un AVC ischémique hyperaigu sylvien superficiel gauche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-c03',
    courseId: 'crs-neuro-23',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un homme de 50 ans, alcoolique chronique sevré, présente une marche ébrieuse instable avec élargissement du polygone de sustentation et embardées multidirectionnelles. En position debout pieds joints, il oscille en tous sens sans que la fermeture des yeux n'aggrave son instabilité (Romberg négatif). Aux épreuves talon-genou et doigt-nez, il existe une hypermétrie bilatérale majeure et les réflexes rotuliens sont pendulaires. Quel syndrome neurologique présente-t-il ?",
    options: [
      "A) Syndrome cérébelleux statique et cinétique bilatéral.",
      "B) Syndrome vestibulaire périphérique droit décompensé.",
      "C) Syndrome parkinsonien rigido-akinétique.",
      "D) Neuropathie sensitive ataxiante par atteinte cordonale postérieure pure.",
      "E) Chorée aiguë médicamenteuse."
    ],
    correctAnswers: [0],
    explanation: "Danse des tendons, marche ébrieuse, oscillations non aggravées par la fermeture des yeux (Romberg négatif), hypermétrie et réflexes pendulaires signent le syndrome cérébelleux pan-cérébelleux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-c04',
    courseId: 'crs-neuro-23',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Lors de l'évaluation d'un polytraumatisé inconscient aux urgences, vous constatez que le patient n'ouvre pas les yeux à la stimulation douloureuse, émet des sons incompréhensibles et gémit (grognements), et présente une extension pathologique stéréotypée des quatre membres avec rotation interne des bras en réponse à la pression du lit unguéal. Quel est son score de Glasgow (GCS) précis ?",
    options: [
      "A) GCS = 5 (Yeux : 1, Parole : 2, Motricité : 2).",
      "B) GCS = 3 (Yeux : 1, Parole : 1, Motricité : 1).",
      "C) GCS = 8 (Yeux : 2, Parole : 3, Motricité : 3).",
      "D) GCS = 11 (Yeux : 3, Parole : 4, Motricité : 4).",
      "E) GCS = 15 (Normal)."
    ],
    correctAnswers: [0],
    explanation: "Yeux fermés à la douleur = Y1 ; sons incompréhensibles/gémissements = V2 ; réponse motrice en extension décérébrée = M2. Total = 1 + 2 + 2 = 5.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-23-c05',
    courseId: 'crs-neuro-23',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient de 70 ans est retrouvé dans son lit avec un déficit brutal. À votre examen, son débit verbal est normal et spontané, il parle avec abondance mais son discours n'a aucun sens, truffé de mots déformés et inventés (néologismes et jargon). Lorsqu'on lui demande de lever la main ou de fermer les yeux, il continue de parler sans exécuter la moindre consigne et paraît totalement inconscient de l'incompréhension de son entourage. Quelle est cette aphasie et quelle aire corticale est atteinte ?",
    options: [
      "A) Aphasie de Wernicke par lésion du gyrus temporal supérieur gauche (aire 22 de Brodmann).",
      "B) Aphasie de Broca par atteinte du gyrus frontal inférieur gauche (aires 44-45).",
      "C) Aphasie de conduction par atteinte du faisceau arqué seul.",
      "D) Mutisme akinétique frontal bilatéral.",
      "E) Anarthrie pure de Pierre Marie."
    ],
    correctAnswers: [0],
    explanation: "Débit fluent intarissable + jargonaphasie + incompréhension totale des consignes + anosognosie = Aphasie sensorielle de Wernicke (lésion temporale postéro-supérieure gauche).",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_23_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-23-mindmap',
    courseId: 'crs-neuro-23',
    title: 'Mind Map : Examen Neurologique & Grands Syndromes Sémiologiques',
    type: 'mindmap',
    content: `# Mind Map : Sémiologie Neurologique Élémentaire

## 1. Syndrome Pyramidal (1er Motoneurone)
- **Déficit moteur** : Signe de Barré (MS), Mingazzini (MI).
- **Spasticité** : Hypertonie élastique (lame de canif), vitesse-dépendante, fléchisseurs MS / extenseurs MI.
- **Réflexes** : ROT vifs, polycinétiques, diffusés, trépidation épileptoïde, clonus de la rotule.
- **Signe Cardinal** : Signe de Babinski (réflexe cutané plantaire en extension), signe de Hoffmann.

## 2. Syndrome Neurogène Périphérique (2ème Motoneurone)
- Déficit moteur flasque, hypotonie, abolition des ROT.
- Amyotrophie précoce et rapide + Fasciculations musculaires spontanées.
- Pas de signe de Babinski.

## 3. Syndrome Cérébelleux
- **Statique (Vermis)** : Élargissement du polygone, danse des tendons, marche ébrieuse, Romberg négatif (non aggravé yeux fermés).
- **Cinétique (Hémisphères)** : Dysmétrie/hypermétrie (doigt-nez, talon-genou), adiadococinésie (marionnettes), dyschronométrie, réflexes pendulaires.

## 4. Paralysie Faciale (Centrale vs Périphérique)
- **Centrale** : Prédomine sur le facial inférieur (bouche déviée), respecte le front et la fermeture des yeux (Souques +). Lésion hémisphérique controlatérale.
- **Périphérique** : Atteinte égale de TOUT l'hémiface (supérieur + inférieur). Signe de Charles Bell (+), lagophtalmie, réflexe cornéen altéré.

## 5. Aphasies Cardinaux
- **Broca (Frontale G)** : Non-fluente, réduction du débit, agrammatisme, compréhension préservée, conscience du trouble.
- **Wernicke (Temporale G)** : Fluente, logorrhée, jargonaphasie, compréhension effondrée, anosognosie.`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-23-astuces',
    courseId: 'crs-neuro-23',
    title: 'Astuces & Pièges aux Concours : Sémiologie Neurologique',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Signe de Romberg :**
   - Romberg est **POSITIF** dans les atteintes *proprioceptives* (chute immédiate non systématisée à l'occlusion des yeux) et *vestibulaires* (déviation lente latéralisée).
   - Romberg est **NÉGATIF** dans le syndrome *cérébelleux* (le malade oscille déjà yeux ouverts et ne s'aggrave pas les yeux fermés).
2. **Paralysie faciale centrale vs périphérique :**
   - Si le patient peut fermer les yeux et plisser le front : c'est une paralysie faciale **centrale** (lésion du cortex ou de la voie pyramidale controlatérale).
   - Le signe de Charles Bell (l'œil ne se ferme pas et bascule vers le haut) est spécifique de la paralysie **périphérique**.
3. **Score de Glasgow (GCS) :**
   - Le score minimal est de **3** (et non pas 0) ! Y1 + V1 + M1 = 3. Tout patient en arrêt cardiorespiratoire ou coma complet est coté 3.
4. **Babinski = Pyramidal :**
   - Le signe de Babinski ne se voit que dans l'atteinte pyramidale (voie cortico-spinale) et chez le nourrisson de moins de 1 an (myélinisation incomplète physiologique).`,
    author: 'Dr. LAIDANI.M'
  }
];
