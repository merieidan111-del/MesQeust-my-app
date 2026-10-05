import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 16: PATHOLOGIES DU SYSTÈME NERVEUX PÉRIPHÉRIQUE
// ==========================================
export const NEURO_LESSON_16_QUESTIONS: Question[] = [
  {
    id: 'q-nro-16-01',
    courseId: 'crs-neuro-16',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans le syndrome du canal carpien, le nerf comprimé au niveau du poignet est :",
    options: [
      "A) Le nerf ulnaire (cubital).",
      "B) Le nerf radial.",
      "C) Le nerf médian.",
      "D) Le nerf musculo-cutané.",
      "E) Le nerf interosseux postérieur."
    ],
    correctAnswers: [2],
    explanation: "Le canal carpien contient les tendons fléchisseurs des doigts et le nerf médian, dont la compression sous le rétinaculum des fléchisseurs produit le syndrome du canal carpien.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-02',
    courseId: 'crs-neuro-16',
    questionNumber: 2,
    type: 'QCM',
    content: "Le signe de Phalen utilisé pour dépister le syndrome du canal carpien consiste en :",
    options: [
      "A) Une percussion directe du nerf médian à la face antérieure du poignet déclenchant des paresthésies.",
      "B) Une flexion forcée passive des deux poignets à 90° dos à dos pendant 60 secondes déclenchant des paresthésies dans le territoire du nerf médian.",
      "C) Une extension forcée du pouce contre résistance.",
      "D) Une pression exercée sur la gouttière épitrochléo-olécrânienne.",
      "E) Une abduction de l'épaule à 90° avec rotation externe."
    ],
    correctAnswers: [1],
    explanation: "La manœuvre de Phalen (flexion forcée des poignets pendant 1 minute) reproduit la symptomatologie sensitive dans les 3 premiers doigts innervés par le médian.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-03',
    courseId: 'crs-neuro-16',
    questionNumber: 3,
    type: 'QCM',
    content: "Une paralysie du nerf fibulaire commun (sciatique poplité externe - SPE) au col de la fibula entraîne cliniquement :",
    options: [
      "A) L'impossibilité de marcher sur la pointe des pieds avec abolition du réflexe achilléen.",
      "B) Un steppage à la marche par déficit de la flexion dorsale du pied et des orteils, et anesthésie de la face antéro-externe de la jambe et du dos du pied.",
      "C) Un déficit de l'extension de la jambe sur la cuisse avec abolition du réflexe rotulien.",
      "D) Une paralysie des adducteurs de la cuisse.",
      "E) Une anesthésie exclusive de la plante du pied."
    ],
    correctAnswers: [1],
    explanation: "Le nerf fibulaire commun innerve les muscles de la loge antéro-externe (releveurs du pied et des orteils) : son atteinte provoque un steppage (pied tombant) sans abolition de réflexe ostéotendineux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-04',
    courseId: 'crs-neuro-16',
    questionNumber: 4,
    type: 'QCM',
    content: "Une atteinte radiculaire L5 pure se différencie d'une atteinte radiculaire S1 par :",
    options: [
      "A) L'abolition du réflexe rotulien.",
      "B) Une douleur postéro-externe de cuisse et jambe se terminant au gros orteil, un déficit des extenseurs des orteils et des péroniers latéraux, avec respect du réflexe achilléen.",
      "C) Une abolition du réflexe achilléen avec douleur à la face postérieure du mollet et sous la plante du pied.",
      "D) L'impossibilité de fléchir la cuisse sur le bassin.",
      "E) Une anesthésie en selle avec incontinence fécale immédiate."
    ],
    correctAnswers: [1],
    explanation: "Racine L5 : trajet antéro-externe vers le gros orteil, déficit des releveurs (marche sur les talons impossible), PAS de réflexe propre (réflexes rotulien L4 et achilléen S1 normaux).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-05',
    courseId: 'crs-neuro-16',
    questionNumber: 5,
    type: 'QCM',
    content: "Dans le syndrome de Guillain-Barré (polyradiculonévrite aiguë), l'analyse du liquide cérébro-spinal (LCR) réalisée après la 1ère semaine d'évolution met en évidence :",
    options: [
      "A) Une pléiocytose neutrophile majeure avec hypoglycorachie.",
      "B) Une dissociation albumino-cytologique (hyperprotéinorachie nette sans hypercellularité, < 10 cellules/mm³).",
      "C) Des bandes oligoclonales d'IgG associées à plus de 200 lymphocytes/mm³.",
      "D) Un LCR strictement hémorragique incoagulable.",
      "E) Une glycorachie effondrée avec hyperchlorurorachie."
    ],
    correctAnswers: [1],
    explanation: "La dissociation albumino-cytologique (protéinorachie > 0,5 g/L, souvent > 1 à 2 g/L, avec moins de 10 leucocytes/mm³) est la signature classique du syndrome de Guillain-Barré.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-06',
    courseId: 'crs-neuro-16',
    questionNumber: 6,
    type: 'QCM',
    content: "Le traitement immunomodulateur spécifique d'urgence du syndrome de Guillain-Barré repose sur :",
    options: [
      "A) La corticothérapie par voie intraveineuse à forte dose (Solumédrol).",
      "B) Les perfusions d'Immunoglobulines intraveineuses (IgIV à 2 g/kg sur 2 à 5 jours) OU les échanges plasmatiques (plasmaphérèses), d'efficacité équivalente.",
      "C) Le cyclophosphamide en bolus mensuel.",
      "D) L'interféron bêta en sous-cutané.",
      "E) Les antibiotiques bêta-lactamines seuls."
    ],
    correctAnswers: [1],
    explanation: "Les deux traitements validés sont les IgIV ou les plasmaphérèses (jamais associés simultanément). Attention : la corticothérapie seule est inefficace voire délétère dans le SGB.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-07',
    courseId: 'crs-neuro-16',
    questionNumber: 7,
    type: 'QCM',
    content: "La forme variante du syndrome de Guillain-Barré associant ophtalmoplégie, ataxie proprioceptive et aréflexie ostéotendineuse généralisée s'appelle :",
    options: [
      "A) Le syndrome de Claude Bernard-Horner.",
      "B) Le syndrome de Miller-Fisher (souvent associé à des anticorps anti-GQ1b).",
      "C) Le syndrome de Brown-Séquard.",
      "D) Le syndrome de Wallenberg.",
      "E) Le syndrome de Parinaud."
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Miller-Fisher est la triade ophtalmoplégie + ataxie + aréflexie, avec présence très spécifique d'anticorps anti-ganglioside GQ1b (> 90%).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-08',
    courseId: 'crs-neuro-16',
    questionNumber: 8,
    type: 'QCM',
    content: "La neuropathie diabétique périphérique la plus fréquente est :",
    options: [
      "A) Une multinévrite asymétrique aiguë des nerfs crâniens.",
      "B) Une polyneuropathie distale, symétrique, sensitivo-motrice à prédominance sensitive, de début insidieux aux pieds (en chaussettes).",
      "C) Une radiculopathie thoracique isolée.",
      "D) Une atteinte motrice proximale pure symétrique sans douleur.",
      "E) Une ataxie cérébelleuse pure bilatérale."
    ],
    correctAnswers: [1],
    explanation: "La polyneuropathie longueur-dépendante distale et symétrique débutant aux membres inférieurs en chaussettes représente plus de 80% des neuropathies diabétiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-09',
    courseId: 'crs-neuro-16',
    questionNumber: 9,
    type: 'QCM',
    content: "La paralysie radiale 'des amoureux' ou 'du samedi soir' par compression prolongée dans la gouttière humérale se traduit cliniquement par :",
    options: [
      "A) Une main en griffe avec fonte des interosseux.",
      "B) Une main en 'col de cygne'.",
      "C) Une main tombante en 'fléau' ou en 'col de cygne' avec déficit d'extension du poignet et des premières phalanges, et anesthésie de la tabatière anatomique.",
      "D) Une impossibilité de fléchir les deux premiers doigts ('main de prédicateur').",
      "E) Une disparition exclusive du réflexe bicipital."
    ],
    correctAnswers: [2],
    explanation: "Le nerf radial innerve les extenseurs du coude, du poignet et des doigts : sa compression humérale épargne le triceps (qui part plus haut) et entraîne une main tombante sans extension du poignet et des doigts, avec anesthésie dorsale de la tabatière.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-10',
    courseId: 'crs-neuro-16',
    questionNumber: 10,
    type: 'QCM',
    content: "Dans l'atteinte du nerf ulnaire (cubital) au coude, quel signe clinique met en évidence le déficit du muscle adducteur du pouce (signe de Froment) ?",
    options: [
      "A) L'extension excessive de l'index lors du serrement de main.",
      "B) La flexion compensatrice de l'articulation interphalangienne du pouce par le long fléchisseur (innervé par le médian) pour retenir une feuille de papier entre le pouce et l'index.",
      "C) Une déviation radiale du poignet à la fermeture du poing.",
      "D) Une disparition de la force du quadriceps crural.",
      "E) Une impossibilité d'écarter les paupières."
    ],
    correctAnswers: [1],
    explanation: "Le signe de Froment : la faiblesse de l'adducteur du pouce (nerf ulnaire) oblige le patient à fléchir la phalange distale du pouce via le long fléchisseur propre (nerf médian) pour pincer la feuille.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-11',
    courseId: 'crs-neuro-16',
    questionNumber: 11,
    type: 'QCM',
    content: "La polynévrite alcoolo-carentielle est principalement liée à une carence en :",
    options: [
      "A) Vitamine C (acide ascorbique).",
      "B) Vitamine B1 (thiamine).",
      "C) Vitamine D3.",
      "D) Vitamine K1.",
      "E) Acide folique exclusif."
    ],
    correctAnswers: [1],
    explanation: "La polynévrite alcoolo-carentielle résulte de la toxicité directe de l'alcool combinée à la carence d'apport et de résorption en thiamine (vitamine B1).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-12',
    courseId: 'crs-neuro-16',
    questionNumber: 12,
    type: 'QCM',
    content: "Parmi les chimiothérapies anticancéreuses suivantes, laquelle est réputée pour sa neurotoxicité périphérique cumulative avec neuropathie sensitive ataxiante ?",
    options: [
      "A) Les dérivés du platine (oxaliplatine, cisplatine) et les taxanes (paclitaxel).",
      "B) Le 5-fluoro-uracile seul.",
      "C) L'amoxicilline.",
      "D) Le paracétamol.",
      "E) Le dabigatran."
    ],
    correctAnswers: [0],
    explanation: "L'oxaliplatine (dysesthésies au froid et neuropathie sensitive axonale) et les dérivés de platine/taxanes provoquent des neuronopathies sensitives par toxicité des ganglions spinaux dorsaux.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-16-13',
    courseId: 'crs-neuro-16',
    questionNumber: 13,
    type: 'QCM',
    content: "La sciatique L5 se caractérise par une irradiation douloureuse :",
    options: [
      "A) À la face antérieure de cuisse descendant au genou, avec abolition du réflexe rotulien.",
      "B) À la fesse, face postéro-externe de cuisse, face externe de jambe, dos du pied jusqu'au gros orteil (hallux).",
      "C) À la face postérieure de cuisse, creux poplité, mollet, talon, plante du pied et 5ème orteil avec abolition du réflexe achilléen.",
      "D) Au pli de l'aine et aux organes génitaux externes.",
      "E) En ceinture thoracique bilatérale."
    ],
    correctAnswers: [1],
    explanation: "Trajet L5 : fesse -> face postéro-externe de cuisse -> face externe de jambe -> malléole externe -> dos du pied -> gros orteil.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-14',
    courseId: 'crs-neuro-16',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans l'atteinte du nerf sciatique poplité interne (nerf tibial), le déficit moteur prédomine sur :",
    options: [
      "A) L'extension des orteils et la dorsiflexion du pied.",
      "B) La flexion plantaire du pied (triceps sural) empêchant la marche sur la pointe des pieds, avec abolition du réflexe achilléen.",
      "C) L'adduction de la cuisse.",
      "D) La flexion du coude.",
      "E) L'élévation de la scapula."
    ],
    correctAnswers: [1],
    explanation: "Le nerf tibial innerve le triceps sural et les fléchisseurs plantaires : son atteinte empêche la marche sur la pointe des pieds et abolit le réflexe achilléen.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-15',
    courseId: 'crs-neuro-16',
    questionNumber: 15,
    type: 'QCM',
    content: "Le syndrome de la queue de cheval constitue une urgence neurochirurgicale absolue. Il associe :",
    options: [
      "A) Des troubles sphinctériens (rétention aiguë d'urine ou incontinence), une anesthésie en selle du périnée, des douleurs radiculaires pluriradiculaires et une paraparésie flasque avec aréflexie aux membres inférieurs.",
      "B) Une tétraplégie spasmodique avec signe de Babinski bilatéral.",
      "C) Un nystagmus horizontal avec syndrome vestibulaire central.",
      "D) Une cécité brutale monoculaire.",
      "E) Une hyperréflexie achilléenne avec trépidation épileptoïde de cheville."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de la queue de cheval (atteinte pluriradiculaire L2-S5) est un syndrome neurogène périphérique pur : anesthésie en selle, abolition des réflexes achilléens et du réflexe anal, rétention aiguë d'urines. Nécessite une décompression chirurgicale en urgence (< 24h).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-16',
    courseId: 'crs-neuro-16',
    questionNumber: 16,
    type: 'QCM',
    content: "Une multinévrite (mononeuropathie multiple asymétrique et asynchrone) fébrile doit faire rechercher en urgence :",
    options: [
      "A) Une vascularite systémique nécrosante (périartérite noueuse, granulomatose avec polyangéite, vascularite cryoglobulinémique).",
      "B) Une ostéoporose post-ménopausique banale.",
      "C) Une luxation récidivante de l'épaule.",
      "D) Une carie dentaire simple.",
      "E) Un ulcère duodénal non perforé."
    ],
    correctAnswers: [0],
    explanation: "La mononeuropathie multiple (atteinte successive et asymétrique de plusieurs troncs nerveux par ischémie microvasculaire / infarctus nerveux) est l'expression neurologique d'urgence des vascularites systémiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-17',
    courseId: 'crs-neuro-16',
    questionNumber: 17,
    type: 'QCM',
    content: "La prise en charge initiale d'une sciatique commune hyperalgique réfractaire aux antalgiques de palier 2 comprend :",
    options: [
      "A) La réalisation immédiate d'une arthrodèse lombo-sacrée à ciel ouvert.",
      "B) Une infiltration épidurale de corticoïdes, des antalgiques de palier 3 (morphiniques), un repos relatif et une surveillance neurologique motrice.",
      "C) L'alitement prolongé strict pendant un mois complet.",
      "D) L'arrêt total de tout traitement antalgique.",
      "E) Une hémodialyse en urgence."
    ],
    correctAnswers: [1],
    explanation: "La sciatique hyperalgique relève d'une analgésie forte (palier 3/morphine) et d'infiltrations cortisoniques épidurales sous contrôle radioscopique ou scannographique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-18',
    courseId: 'crs-neuro-16',
    questionNumber: 18,
    type: 'QCM',
    content: "La neuropathie optique rétrobulbaire (NORB) inaugurale chez une femme jeune de 25 ans se manifeste par :",
    options: [
      "A) Une baisse de l'acuité visuelle rapidement progressive unilatérale, des douleurs péri-orbitaires exacerbées par les mouvements du globe oculaire et un fond d'œil initialement normal.",
      "B) Une hémianopsie bitemporale indolore.",
      "C) Une cécité bilatérale brutale d'emblée avec pâleur papillaire complète immédiate.",
      "D) Un larmoiement unilatéral pur sans baisse de la vision.",
      "E) Un œdème papillaire bilatéral de stase avec TA à 240/130 mmHg."
    ],
    correctAnswers: [0],
    explanation: "La formule classique de la NORB : 'Le malade ne voit rien, le médecin ne voit rien' (fond d'œil normal au début), baisse visuelle avec dyschromatopsie rouge-vert et douleur à la mobilisation de l'œil.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-19',
    courseId: 'crs-neuro-16',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans la polyradiculonévrite démyélinisante inflammatoire chronique (CIDP ou PRNC), le critère temporel d'évolution pour le distinguer du Guillain-Barré est :",
    options: [
      "A) Une progression ou des rechutes s'étendant sur plus de 8 semaines (2 mois).",
      "B) Une régression complète obligatoire en moins de 48 heures.",
      "C) Une guérison sans séquelle dès le 7ème jour.",
      "D) Une transmission génétique obligatoire par la mère.",
      "E) Une apparition exclusive après 80 ans."
    ],
    correctAnswers: [0],
    explanation: "Le seuil diagnostique entre SGB aigu et PRNC (CIDP) est de 8 semaines d'aggravation ou rechute progressive.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-16-20',
    courseId: 'crs-neuro-16',
    questionNumber: 20,
    type: 'QCM',
    content: "Le test de Lasègue (élévation de la jambe tendue) est dit positif pour une sciatique s'il reproduit :",
    options: [
      "A) Une douleur lombaire médiane pure sans irradiation.",
      "B) La radiculalgie typique irradiant sous le genou pour un angle d'élévation inférieur à 60°.",
      "C) Un claquement audible de la hanche.",
      "D) Une flexion involontaire des orteils.",
      "E) Une douleur du poignet controlatéral."
    ],
    correctAnswers: [1],
    explanation: "Le Lasègue est positif s'il déclenche la douleur radiculaire le long du membre inférieur sous le genou entre 30° et 60° d'élévation passive du membre tendu.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-21',
    courseId: 'crs-neuro-16',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans le syndrome de Guillain-Barré, quel paramètre clinique ou spirométrique impose le transfert immédiat en unité de soins intensifs ou réanimation ?",
    options: [
      "A) Une capacité vitale (CV) inférieure à 20 ml/kg (ou < 1,5 L), une atteinte bulbaire (troubles de déglutition) ou une instabilité hémodynamique dysautonomique.",
      "B) Une augmentation modérée de l'albuminorachie.",
      "C) Un engourdissement exclusif des deux gros orteils.",
      "D) L'apparition de céphalées matinales isolées.",
      "E) Une vitesse de conduction sensitive normale."
    ],
    correctAnswers: [0],
    explanation: "Les critères de transfert en réanimation dans le SGB : CV < 15-20 ml/kg, pression inspiratoire diminuée, troubles de déglutition (risque de fausse route) et dysautonomie (arythmie, labilité tensionnelle).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-22',
    courseId: 'crs-neuro-16',
    questionNumber: 22,
    type: 'QCM',
    content: "Une cruralgie par hernie discale L3-L4 se manifeste par une douleur :",
    options: [
      "A) De la face antérieure de cuisse descendant vers la rotule et la face antéro-interne de jambe, avec diminution ou abolition du réflexe rotulien.",
      "B) Postérieure descendant au talon avec abolition du réflexe achilléen.",
      "C) Du dos du pied sans abolition de réflexe.",
      "D) Dans le pli fessier isolé.",
      "E) Dans la loge externe de jambe."
    ],
    correctAnswers: [0],
    explanation: "Cruralgie L4 : cuisse antérieure -> genou/rotule -> face interne de jambe, avec diminution du réflexe rotulien et faiblesse du quadriceps (signe de Léri positif).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-23',
    courseId: 'crs-neuro-16',
    questionNumber: 23,
    type: 'QCM',
    content: "Le signe du 'Léri' (ou Lasègue inversé) s'explore :",
    options: [
      "A) En décubitus dorsal par rotation externe du membre inférieur.",
      "B) En décubitus ventral, par extension passive de la cuisse sur le bassin avec genou fléchi à 90°, réveillant une vive douleur à la face antérieure de cuisse.",
      "C) En position assise en percutant le tendon rotulien.",
      "D) Debout en faisant fermer les yeux au patient.",
      "E) En position demi-assise en mesurant la pression artérielle."
    ],
    correctAnswers: [1],
    explanation: "La manœuvre de Léri met en tension les racines L3 et L4 (nerf fémoral/crural) en décubitus ventral lors de l'extension de hanche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-24',
    courseId: 'crs-neuro-16',
    questionNumber: 24,
    type: 'QCM',
    content: "Parmi les facteurs favorisant la survenue d'un syndrome du canal carpien, on retrouve :",
    options: [
      "A) L'hypothyroïdie, la grossesse, le diabète, la polyarthrite rhumatoïde et les mouvements répétitifs de flexion/extension du poignet.",
      "B) L'antécédent de fracture du fémur.",
      "C) Le régime hyperprotéiné sans glucides.",
      "D) L'hypotension artérielle constitutionnelle.",
      "E) La myopie forte."
    ],
    correctAnswers: [0],
    explanation: "Le canal carpien est favorisé par les conditions modifiant le volume intracanaliculaire : grossesse (rétention hydrosodée), hypothyroïdie (myxœdème), diabète, PR (ténosynovite) et gestes manuels répétitifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-25',
    courseId: 'crs-neuro-16',
    questionNumber: 25,
    type: 'QCM',
    content: "L'indication chirurgicale en urgence absolue (< 24-48h) dans une hernie discale lombaire est posée devant :",
    options: [
      "A) Une sciatalgie évoluant depuis 3 semaines sans déficit moteur.",
      "B) Un syndrome de la queue de cheval ou une sciatique paralysante (déficit moteur côté à 3 ou moins sur l'échelle MRC).",
      "C) Une simple lombalgie d'effort.",
      "D) Un test de Lasègue positif à 45°.",
      "E) Une anomalie radiologique discale sans traduction clinique."
    ],
    correctAnswers: [1],
    explanation: "Les urgences chirurgicales immédiates du rachis lombaire sont : le syndrome de la queue de cheval et la sciatique déficitaire/paralysante (force musculaire <= 3/5).",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-16-c01',
    courseId: 'crs-neuro-16',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un jeune homme de 24 ans consulte pour une faiblesse musculaire rapidement progressive des deux jambes survenue 12 jours après un épisode de gastro-entérite aiguë à Campylobacter jejuni. À l'examen, il existe une paraparésie flasque ascendante, une abolition complète des réflexes ostéo-tendineux aux quatre membres, et des paresthésies distales des pieds. Il n'y a pas de signe de Babinski. Quel diagnostic évoquez-vous en priorité ?",
    options: [
      "A) Crise de sclérose en plaques forme myélite aiguë.",
      "B) Syndrome de Guillain-Barré (polyradiculonévrite aiguë).",
      "C) Myasthénie auto-immune aiguë.",
      "D) Botulisme alimentaire.",
      "E) Poliomyélite antérieure aiguë."
    ],
    correctAnswers: [1],
    explanation: "Le tableau post-infectieux (diarrhée à C. jejuni), la paraparésie ascendante flasque et l'aréflexie ostéotendineuse diffuse sans signe pyramidal signent le syndrome de Guillain-Barré.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-c02',
    courseId: 'crs-neuro-16',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen biologique sur le LCR conforterait le diagnostic à ce stade ?",
    options: [
      "A) Une glycorachie nulle avec 1500 polynucléaires altérés/mm³.",
      "B) Une dissociation albumino-cytologique (protéinorachie élevée à 1,8 g/L avec 2 cellules/mm³).",
      "C) La présence d'hématies fraîches crénelées à 50 000/mm³.",
      "D) Un test au latex positif pour le méningocoque.",
      "E) Une PCR HSV-1 fortement positive."
    ],
    correctAnswers: [1],
    explanation: "L'hyperprotéinorachie isolée sans élévation des cellules (< 10/mm³) caractérise la dissociation albumino-cytologique du SGB.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-c03',
    courseId: 'crs-neuro-16',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Une secrétaire de 48 ans se réveille toutes les nuits vers 3 heures du matin en raison de brûlures et d'engourdissements douloureux de la main droite, l'obligeant à secouer énergiquement sa main pour être soulagée (flick sign). Les symptômes intéressent le pouce, l'index et le médius. À l'examen, la percussion de la face antérieure du pli du poignet réveille des décharges électriques dans ces trois doigts. Quel est le diagnostic ?",
    options: [
      "A) Syndrome du canal carpien droit.",
      "B) Névralgie cervico-brachiale C7 droite.",
      "C) Syndrome de la traversée thoraco-brachiale.",
      "D) Polyarthrite rhumatoïde débutante purement articulaire.",
      "E) Maladie de Dupuytren stade 1."
    ],
    correctAnswers: [0],
    explanation: "Paresthésies nocturnes des 3 premiers doigts soulagées par le secouement de main (flick sign) et signe de Tinel positif au poignet signent le syndrome du canal carpien.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-c04',
    courseId: 'crs-neuro-16',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un homme de 35 ans après un effort de soulèvement d'un meuble lourd ressent un craquement lombaire brutal suivi d'une douleur aiguë irradiant à la fesse gauche, face postérieure de cuisse, mollet, talon et bord latéral du pied jusqu'au 5ème orteil. À l'examen, le réflexe achilléen gauche est aboli et la marche sur la pointe du pied gauche est impossible. Quel est le diagnostic précis ?",
    options: [
      "A) Sciatique S1 gauche déficitaire par hernie discale L5-S1.",
      "B) Sciatique L5 gauche pure par hernie L4-L5.",
      "C) Cruralgie L4 gauche par hernie L3-L4.",
      "D) Thrombose veineuse profonde surale gauche.",
      "E) Déchirure du tendon d'Achille sans atteinte nerveuse."
    ],
    correctAnswers: [0],
    explanation: "Irradiation rétro-malléolaire externe vers le 5ème orteil, abolition du réflexe achilléen et déficit du triceps sural (impossibilité de la marche sur la pointe) : sciatique S1 déficitaire (racine S1 comprimée en L5-S1).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-16-c05',
    courseId: 'crs-neuro-16',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient diabétique mal équilibré depuis 15 ans consulte pour des brûlures pénibles permanentes des deux pieds, prédominant la nuit, avec sensation de marcher sur du coton ou du verre pilé. À l'examen, la sensibilité vibratoire au diapason est nettement diminuée aux deux chevilles et les réflexes achilléens sont abolis bilatéralement. Les pouls distaux sont présents et il n'y a pas d'œdème. Quel traitement de première intention est recommandé pour soulager ses douleurs neuropathiques ?",
    options: [
      "A) Paracétamol 1 g par jour seul.",
      "B) Prégabaline, gabapentine ou duloxétine (antidépresseur IRSNA).",
      "C) Anti-inflammatoires non stéroïdiens (ibuprofène) à forte dose au long cours.",
      "D) Morphine par voie intraveineuse continue.",
      "E) Anticoagulants oraux directs."
    ],
    correctAnswers: [1],
    explanation: "Les douleurs neuropathiques périphériques de la polyneuropathie diabétique répondent aux gabapentinoïdes (gabapentine, prégabaline) ou aux IRSNA (duloxétine) / tricycliques.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_16_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-16-mindmap',
    courseId: 'crs-neuro-16',
    title: 'Mind Map : Pathologies du Système Nerveux Périphérique',
    type: 'mindmap',
    content: `# Mind Map : Neuropathies & Atteintes Radiculaires

## 1. Polyradiculonévrite Aiguë (Guillain-Barré)
- **Déclencheur** : Post-infectieux (Campylobacter jejuni, CMV, EBV).
- **Clinique** : Paraparésie ascendante flasque, aréflexie ostéotendineuse, paresthésies. Atteinte respiratoire et faciale possible.
- **Biologie** : Dissociation albumino-cytologique au LCR (> J7).
- **Traitement** : IgIV (2 g/kg sur 2-5j) ou Plasmaphérèses. Corticoïdes inefficaces.
- **Variant** : Syndrome de Miller-Fisher (ophtalmoplégie + ataxie + aréflexie, anti-GQ1b).

## 2. Neuropathies Canalaires
- **Canal Carpien (Médian)** : Paresthésies nocturnes des 3 premiers doigts. Signe de Tinel et Phalen. Déficit de l'opposant du pouce.
- **Nerf Ulnaire au Coude** : Paresthésies des 4ème et 5ème doigts. Griffe ulnaire, signe de Froment.
- **Nerf Fibulaire Commun (SPE)** : Col du péroné. Steppage à la marche (déficit releveurs), pas de perte de réflexe.
- **Nerf Radial** : Gouttière humérale. Main tombante en fléau, déficit extenseurs poignet/doigts.

## 3. Radiculopathies Lombaires & Sciatiques
- **L4 (Crural)** : Cuisse antérieure -> face interne jambe. ROT rotulien diminué. Signe de Léri (+).
- **L5 (Sciatique)** : Postéro-externe cuisse -> dos du pied -> gros orteil. Marche sur talons impossible. Pas de ROT altéré.
- **S1 (Sciatique)** : Face postérieure mollet -> talon -> 5ème orteil. Marche sur pointes impossible. ROT achilléen aboli.
- **Urgences** : Syndrome de la queue de cheval, sciatique paralysante (testing <= 3).`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-16-astuces',
    courseId: 'crs-neuro-16',
    title: 'Astuces & Pièges aux Concours : Système Nerveux Périphérique',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Guillain-Barré : Corticoïdes = ERREUR GRAVE :**
   - Ne jamais cocher corticoïdes dans le Guillain-Barré aigu ! Le traitement est soit **IgIV**, soit **échanges plasmatiques**.
2. **Dissociation albumino-cytologique :**
   - Peut être normale durant les 3 à 5 premiers jours du SGB : une PL normale au tout début n'élimine pas le diagnostic.
3. **L5 vs S1 :**
   - L5 = gros orteil, marche sur les talons impossible, **AUCUN réflexe aboli**.
   - S1 = 5ème orteil et plante, marche sur les pointes impossible, **réflexe achilléen ABOLI**.
4. **Queue de cheval = atteinte motrice flasque :**
   - C'est un syndrome du 2ème motoneurone périphérique (pas de Babinski, hypotonie, aréflexie), avec anesthésie en selle et perte du tonus du sphincter anal.
5. **Signe de Froment :**
   - Teste l'adducteur du pouce (nerf ulnaire/cubital). La flexion compensatoire de l'interphalangienne se fait via le nerf médian.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 17: PATHOLOGIES INFECTIEUSES DU SNC
// ==========================================
export const NEURO_LESSON_17_QUESTIONS: Question[] = [
  {
    id: 'q-nro-17-01',
    courseId: 'crs-neuro-17',
    questionNumber: 1,
    type: 'QCM',
    content: "L'encéphalite herpétique (HSV-1) chez l'adulte immunocompétent siège de façon préférentielle et quasi-constante au niveau :",
    options: [
      "A) Des lobes occipitaux bilatéraux.",
      "B) Des lobes fronto-temporaux et des structures limbiques (hippocampe, insula, gyrus cingulaire).",
      "C) Du cervelet et du quatrième ventricule.",
      "D) De la moelle épinière lombo-sacrée.",
      "E) Des noyaux gris centraux purs sans atteinte corticale."
    ],
    correctAnswers: [1],
    explanation: "Le virus Herpes Simplex 1 (HSV-1) a un tropisme nécrosant et hémorragique électif pour les lobes temporaux et le système limbique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-02',
    courseId: 'crs-neuro-17',
    questionNumber: 2,
    type: 'QCM',
    content: "Face à une suspicion clinique de méningo-encéphalite herpétique fébrile avec troubles du comportement ou confusion, la conduite thérapeutique immédiate est :",
    options: [
      "A) Attendre les résultats de la PCR HSV dans le LCR avant toute thérapeutique.",
      "B) Débuter sans aucun délai l'Aciclovir par voie intraveineuse à la dose de 10 à 15 mg/kg toutes les 8 heures sans attendre le résultat de la PCR.",
      "C) Administrer une trithérapie antituberculeuse seule.",
      "D) Réaliser une biopsie cérébrale temporale en urgence.",
      "E) Donner du paracétamol et réévaluer dans 48 heures."
    ],
    correctAnswers: [1],
    explanation: "Toute suspicion d'encéphalite impose l'administration urgente d'Aciclovir IV sans attendre les résultats de la PCR HSV dans le LCR car chaque heure de retard aggrave la mortalité et les séquelles cognitives.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-03',
    courseId: 'crs-neuro-17',
    questionNumber: 3,
    type: 'QCM',
    content: "À l'IRM cérébrale dans l'encéphalite herpétique, les anomalies typiques consistent en :",
    options: [
      "A) Une démyélinisation exclusive de la substance blanche péri-ventriculaire respectant le cortex.",
      "B) Un hypersignal T2 et FLAIR asymétrique temporal interne et insulaire, avec prise de contraste gyrique et parfois remaniements nécrotico-hémorragiques.",
      "C) Des lésions en 'cible' multiples disséminées dans les noyaux gris.",
      "D) Un aspect de cervelet atrophique pur.",
      "E) Un épaississement dural isolé sans anomalie parenchymateuse."
    ],
    correctAnswers: [1],
    explanation: "L'IRM cérébrale montre un hypersignal FLAIR/T2 temporo-limbique et insulaire asymétrique avec restriction de diffusion précoce, très évocateur d'encéphalite herpétique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-04',
    courseId: 'crs-neuro-17',
    questionNumber: 4,
    type: 'QCM',
    content: "À l'imagerie tomodensitométrique ou IRM, l'aspect classique d'un abcès cérébral collecté à pyogènes à la phase de coque est :",
    options: [
      "A) Une prise de contraste nodulaire homogène sans œdème périlésionnel.",
      "B) Une lésion arrondie avec prise de contraste annulaire périphérique fine et régulière, centre hypodense nécrotique (pus en hypersignal diffusion / restriction) et œdème périlésionnel majeur en doigt de gant.",
      "C) Une calcification diffuse en motte sans aucun effet de masse.",
      "D) Un saignement méningé étendu sans lésion focale.",
      "E) Une dilatation tétraventriculaire isolée sans anomalie parenchymateuse."
    ],
    correctAnswers: [1],
    explanation: "L'abcès cérébral constitué se présente sous la forme d'une prise de contraste en anneau régulier avec nécrose centrale purulente (hypersignal franc en diffusion B1000 avec chute de l'ADC) et œdème vasogénique marqué.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-05',
    courseId: 'crs-neuro-17',
    questionNumber: 5,
    type: 'QCM',
    content: "La porte d'entrée infectieuse la plus fréquente d'un abcès cérébral du lobe temporal ou du cervelet est :",
    options: [
      "A) Une infection cutanée du membre inférieur.",
      "B) Une otite moyenne chronique cholestéatomateuse ou une mastoïdite par contiguïté.",
      "C) Une colite bactérienne.",
      "D) Une pyélonéphrite aiguë obstructive.",
      "E) Une arthrite du genou."
    ],
    correctAnswers: [1],
    explanation: "Les infections ORL par contiguïté sont la cause majeure : otite moyenne chronique et mastoïdite drainent vers le lobe temporal et l'hémisphère cérébelleux adjacent.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-06',
    courseId: 'crs-neuro-17',
    questionNumber: 6,
    type: 'QCM',
    content: "La porte d'entrée infectieuse privilégiée d'un abcès cérébral du lobe frontal est :",
    options: [
      "A) Une sinusite frontale ou ethmoïdale compliquée (par contiguïté ou thrombophlébite rétrograde).",
      "B) Une infection urinaire basse à E. coli.",
      "C) Une cholécystite lithiasique.",
      "D) Une morsure de tique périphérique.",
      "E) Une uvéite antérieure aiguë."
    ],
    correctAnswers: [0],
    explanation: "La sinusite frontale ou pan-sinusite se propage à travers la paroi postérieure du sinus frontal ou par les veines diploïques pour former un empyème ou un abcès frontal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-07',
    courseId: 'crs-neuro-17',
    questionNumber: 7,
    type: 'QCM',
    content: "Quelle est la principale contre-indication à la réalisation d'une ponction lombaire chez un patient suspect d'abcès cérébral ou d'empyème sous-dural ?",
    options: [
      "A) La présence d'une fièvre à 39°C.",
      "B) Le risque d'engagement cérébral majeur (temporal ou amygdalien) dû à l'effet de masse de la lésion expansive intracrânienne.",
      "C) La prise de paracétamol.",
      "D) Un âge supérieur à 60 ans.",
      "E) Une allergie connue à la pénicilline."
    ],
    correctAnswers: [1],
    explanation: "La ponction lombaire est FORMELLEMENT CONTRE-INDIQUÉE en cas de processus expansif intracrânien avec effet de masse (abcès, empyème) sous peine de provoquer un engagement cérébral mortel.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-08',
    courseId: 'crs-neuro-17',
    questionNumber: 8,
    type: 'QCM',
    content: "Le traitement antibiotique probabiliste de première ligne d'un abcès cérébral bactérien communautaire sans germe isolé associe classiquement :",
    options: [
      "A) Céfotaxime (ou Ceftriaxone) à dose méningée + Métronidazole (pour les anaérobies) +/- Vancomycine (si suspicion de staphylocoque ou contexte post-opératoire).",
      "B) Amoxicilline per os à faible dose en monothérapie.",
      "C) Érythromycine par voie orale seule pendant 5 jours.",
      "D) Gentamicine en monothérapie.",
      "E) Doxycycline seule."
    ],
    correctAnswers: [0],
    explanation: "L'antibiothérapie probabiliste d'un abcès à pyogène cible les streptocoques et les anaérobies : C3G injectable forte dose + métronidazole (bonne diffusion cérébrale) +/- vancomycine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-09',
    courseId: 'crs-neuro-17',
    questionNumber: 9,
    type: 'QCM',
    content: "L'empyème sous-dural intracrânien se distingue de l'abcès cérébral par :",
    options: [
      "A) Une collection purulente située dans l'espace virtuel entre la dure-mère et l'arachnoïde, diffusant rapidement le long de la faux du cerveau et de la convexité, constituant une extrême urgence neurochirurgicale de drainage.",
      "B) L'absence complète de fièvre.",
      "C) Une évolution exclusivement torpide sur 20 ans sans aucun symptôme.",
      "D) Une localisation exclusive dans la loge rénale.",
      "E) L'absence d'indication opératoire."
    ],
    correctAnswers: [0],
    explanation: "L'empyème sous-dural est une collection de pus non cloisonnée dans l'espace sous-dural : il diffuse librement, provoque des thrombophlébites septiques et une HIC fulgurante imposant un drainage chirurgical d'urgence.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-17-10',
    courseId: 'crs-neuro-17',
    questionNumber: 10,
    type: 'QCM',
    content: "La neurotoxoplasmose cérébrale chez un patient séropositif pour le VIH avec un taux de CD4 < 100/mm³ se manifeste à l'imagerie par :",
    options: [
      "A) Une lésion unique frontale purement calcifiée sans œdème.",
      "B) Des lésions nodulaires multiples, prédominant dans les noyaux gris centraux et la jonction substance blanche-substance grise, prenant le contraste en 'cocarde' (aspect en cible excentrique) avec œdème vasogénique important.",
      "C) Une atrophie cérébrale globale isolée.",
      "D) Un infarctus sylvien artériel circonscrit.",
      "E) Un saignement épidural spontané."
    ],
    correctAnswers: [1],
    explanation: "La toxoplasmose cérébrale réalise des abcès multiples à centre nécrotique, rehaussés en cocarde (target sign) au niveau des ganglions de la base, très sensible au traitement d'épreuve (Pyriméthamine + Sulfadiazine).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-11',
    courseId: 'crs-neuro-17',
    questionNumber: 11,
    type: 'QCM',
    content: "La méningite tuberculeuse (tuberculose neuroméningée) se caractérise typiquement par :",
    options: [
      "A) Un début brutal en moins de 2 heures avec purpura fulminans.",
      "B) Une installation subaiguë ou insidieuse (asthénie, fébricule vespérale, céphalées progressives, altération de l'état général), une atteinte fréquente des paires crâniennes (nerfs oculomoteurs, nerf VII) et une prise de contraste des méninges de la base du crâne.",
      "C) Une hyperleucocytose à 50 000 PNN dans le LCR sans hyperprotéinorachie.",
      "D) Une guérison spontanée constante sans séquelles en quelques jours.",
      "E) L'absence formelle de tout risque d'hydrocéphalie."
    ],
    correctAnswers: [1],
    explanation: "La méningite tuberculeuse débute insidieusement avec atteinte de la base du crâne (arachnoïdite basilaire engainant les paires crâniennes III, VI, VII et les artères du polygone de Willis).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-12',
    courseId: 'crs-neuro-17',
    questionNumber: 12,
    type: 'QCM',
    content: "Le profil cytochimique classique du LCR dans la méningite tuberculeuse montre :",
    options: [
      "A) Un liquide eau de roche, zéro cellule, protéinorachie normale.",
      "B) Un liquide clair ou opalescent, pléiocytose lymphocytaire ou panachée, hyperprotéinorachie majeure (souvent > 2 à 5 g/L), hypoglycorachie franche (rapport LCR/glycémie < 0,3-0,4) et hypochlorurorachie.",
      "C) Un liquide purulent avec 95% de polynucléaires altérés et normoglycorachie.",
      "D) Une glycorachie très élevée supérieure à la glycémie sanguine.",
      "E) Un taux de chlore très augmenté au double de la normale."
    ],
    correctAnswers: [1],
    explanation: "Le LCR de la tuberculose méningée : formule lymphocytaire, protéinorachie très élevée (> 2 g/L) et hypoglycorachie marquée avec hypochlorurie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-13',
    courseId: 'crs-neuro-17',
    questionNumber: 13,
    type: 'QCM',
    content: "La thrombophlébite du sinus caverneux d'origine infectieuse septique complique classiquement :",
    options: [
      "A) Un furoncle de l'aile du nez ou de la lèvre supérieure (staphylococcie maligne de la face manipulée).",
      "B) Une fracture isolée du calcanéum.",
      "C) Une appendicite aiguë pelvienne.",
      "D) Une hépatite virale A aiguë.",
      "E) Une bronchite virale bénigne."
    ],
    correctAnswers: [0],
    explanation: "Le drainage veineux de la 'zone triangulaire dangereuse de la face' (lèvre supérieure, ailes du nez) vers le sinus caverneux par la veine ophtalmique expose à la thrombophlébite caverneuse après manipulation d'un furoncle.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-14',
    courseId: 'crs-neuro-17',
    questionNumber: 14,
    type: 'QCM',
    content: "Le tableau clinique d'une thrombophlébite septique du sinus caverneux associe typiquement :",
    options: [
      "A) Un œdème palpébral inflammatoire avec chémosis conjonctival majeur, exophtalmie douloureuse pulsatile et paralysie complète des nerfs oculomoteurs (III, IV, VI) et de la branche ophtalmique du V (V1).",
      "B) Une hémiplégie flasque proportionnelle indolore.",
      "C) Une surdité unilatérale isolée sans signe oculaire.",
      "D) Un trismus avec contracture généralisée sans signe oculaire.",
      "E) Une paraplégie spasmodique avec anesthésie sous-ombilicale."
    ],
    correctAnswers: [0],
    explanation: "Le sinus caverneux est traversé par les nerfs oculomoteurs (III, IV, VI) et les branches sensitives du V (V1, V2) : la thrombose septique donne l'aspect d'œil rouge bloqué saillant (exophtalmie, chémosis, ophtalmoplégie complète).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-15',
    courseId: 'crs-neuro-17',
    questionNumber: 15,
    type: 'QCM',
    content: "La leucoencéphalopathie multifocale progressive (LEMP) observée au cours du SIDA est causée par la réactivation de :",
    options: [
      "A) Le virus JC (polyomavirus JC).",
      "B) Le virus de la rougeole.",
      "C) Le virus varicelle-zona (VZV) exclusif.",
      "D) Le virus de l'hépatite C.",
      "E) Le rotavirus humain."
    ],
    correctAnswers: [0],
    explanation: "La LEMP est causée par la réactivation du polyomavirus JC détruisant les oligodendrocytes chez les immunodéprimés sévères, entraînant une démyélinisation multifocale de la substance blanche sans effet de masse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-16',
    courseId: 'crs-neuro-17',
    questionNumber: 16,
    type: 'QCM',
    content: "Quelle est la durée minimale recommandée du traitement antibiotique par voie parentérale d'un abcès cérébral bactérien drainé chirurgicalement ?",
    options: [
      "A) 2 jours.",
      "B) 5 jours.",
      "C) 4 à 6 semaines au total (guidée par la régression de la lésion et de l'œdème à l'imagerie IRM de contrôle).",
      "D) 1 an systématiquement.",
      "E) 10 ans sans interruption."
    ],
    correctAnswers: [2],
    explanation: "Le traitement antibiotique d'un abcès cérébral est prolongé, classiquement 4 à 6 semaines par voie IV (voire 6 à 8 semaines si traitement médical exclusif sans ponction/drainage chirurgical).",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-17-17',
    courseId: 'crs-neuro-17',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans la prise en charge d'un tuberculome cérébral intracrânien sans hydrocéphalie obstructive aiguë, le traitement repose en règle sur :",
    options: [
      "A) La radiothérapie cérébrale pan-encéphalique d'emblée.",
      "B) La chimiothérapie antituberculeuse standard (2 mois de quadrithérapie INH + RMP + PZA + EMB, puis 7 à 10 mois de bithérapie INH + RMP) associée à une corticothérapie adjuvante précoce.",
      "C) L'ablation chirurgicale en bloc systématique.",
      "D) Des anticoagulants à dose efficace seule.",
      "E) Une plasmaphérèse hebdomadaire."
    ],
    correctAnswers: [1],
    explanation: "Les tuberculomes cérébraux guérissent sous traitement médical antituberculeux prolongé (9 à 12 mois) associé aux corticoïdes pour limiter l'œdème périlésionnel (effet paradoxal). La chirurgie est réservée aux lésions compressives avec engagement ou hydrocéphalie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-18',
    courseId: 'crs-neuro-17',
    questionNumber: 18,
    type: 'QCM',
    content: "La panencéphalite sclérosante subaiguë (PESS ou maladie de Van Bogaert) est une affection dégénérative tardive redoutable causée par :",
    options: [
      "A) Une infection persistante du système nerveux par un virus mutant de la rougeole, survenant des années après une rougeole précoce de la petite enfance.",
      "B) Une infection chronique à streptocoque du groupe A.",
      "C) Une amibiase cérébrale disséminée.",
      "D) Une intoxication chronique aux métaux lourds.",
      "E) Une infection aiguë par le SARS-CoV-2."
    ],
    correctAnswers: [0],
    explanation: "La PESS est une complication tardive mortelle due à la persistance anormale du virus morbilleux de la rougeole dans les neurones, prévenue efficacement par la vaccination ROR.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-17-19',
    courseId: 'crs-neuro-17',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans le neuropaludisme (accès pernicieux à Plasmodium falciparum), l'atteinte cérébrale est liée à :",
    options: [
      "A) Une invasion directe du cytoplasme neuronal par les trophozoïtes mobiles.",
      "B) La séquestration et cyto-adhérence des hématies parasitées matures dans la microcirculation cérébrale avec obstruction microvasculaire, anoxie et cascade inflammatoire.",
      "C) Une hémorragie méningée spontanée constante.",
      "D) Une démyélinisation auto-immune aiguë ascendante.",
      "E) Une nécrose de la dure-mère crânienne."
    ],
    correctAnswers: [1],
    explanation: "La physiopathologie du coma paludéen repose sur la cyto-adhérence des hématies parasitées aux cellules endothéliales microvasculaires cérébrales (phénomène de séquestration avec rosetting).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-20',
    courseId: 'crs-neuro-17',
    questionNumber: 20,
    type: 'QCM',
    content: "L'indication d'une ponction-aspiration neurochirurgicale stéréotaxique ou d'une évacuation à ciel ouvert d'un abcès cérébral est particulièrement formelle si :",
    options: [
      "A) Le diamètre de la collection purulente est supérieur à 2,5 - 3 cm, avec effet de masse menaçant, ou pour identification bactériologique en l'absence de germe isolé.",
      "B) L'abcès mesure moins de 5 mm en phase de cérébrite précoce.",
      "C) Le patient ne présente aucune fièvre.",
      "D) L'hémoculture isole un germe sensible.",
      "E) L'abcès est situé dans le tronc cérébral inférieur sans effet de masse."
    ],
    correctAnswers: [0],
    explanation: "Une taille > 2,5-3 cm, la menace d'engagement ou de rupture intraventriculaire et la nécessité d'un prélèvement bactériologique constituent les indications opératoires de drainage.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-21',
    courseId: 'crs-neuro-17',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans le LCR d'une encéphalite herpétique à la phase d'état, on observe le plus souvent :",
    options: [
      "A) Une pléiocytose lymphocytaire modérée (10 à 500 éléments/mm³), une hyperprotéinorachie modérée (< 1 à 2 g/L), une glycorachie normale et parfois la présence d'hématies (caractère nécrotico-hémorragique).",
      "B) Un liquide purulent blanc avec 10 000 neutrophiles/mm³ et absence totale de glucose.",
      "C) Un liquide totalement acellulaire avec protéinorachie à 10 g/L.",
      "D) Des cristaux d'urate de sodium en abondance.",
      "E) Une négativité obligatoire de la PCR HSV-1 à vie."
    ],
    correctAnswers: [0],
    explanation: "Le LCR montre une méningite lymphocytaire normoglycorachique avec souvent quelques hématies (liquide 'panaché' ou xanthochromique) liée à la nécrose hémorragique temporale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-22',
    courseId: 'crs-neuro-17',
    questionNumber: 22,
    type: 'QCM',
    content: "Quel germe bactérien intracellulaire à transmission digestive (aliments pasteurisés contaminés, fromages au lait cru) est responsable d'une rhombencéphalite (atteinte du tronc cérébral et paires crâniennes) chez le sujet âgé ou immunodéprimé ?",
    options: [
      "A) Listeria monocytogenes.",
      "B) Streptococcus pneumoniae.",
      "C) Neisseria meningitidis.",
      "D) Borrelia burgdorferi.",
      "E) Treponema pallidum."
    ],
    correctAnswers: [0],
    explanation: "Listeria monocytogenes a un tropisme exclusif pour le tronc cérébral (rhombencéphalite) avec paralysie des nerfs crâniens, ataxie et syndrome pyramidal fébrile, sensible à l'Amoxicilline + Gentamicine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-23',
    courseId: 'crs-neuro-17',
    questionNumber: 23,
    type: 'QCM',
    content: "La rupture intraventriculaire d'un abcès cérébral se manifeste brutalement par :",
    options: [
      "A) Une amélioration spectaculaire de l'état de conscience.",
      "B) Une aggravation cataclysmique avec coma brutal, convulsions réfractaires, hyperthermie maligne et ventriculite aiguë foudroyante à très haute mortalité (> 80%).",
      "C) Une simple rémission de la céphalée.",
      "D) L'apparition d'un rash maculo-papuleux généralisé sans fièvre.",
      "E) Une polyurie transitoire isolée."
    ],
    correctAnswers: [1],
    explanation: "La rupture dans le ventricule latéral libère le pus sous pression dans tout le système ventriculaire et les espaces sous-arachnoïdiens, déclenchant une ventriculite gravissime foudroyante.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-17-24',
    courseId: 'crs-neuro-17',
    questionNumber: 24,
    type: 'QCM',
    content: "Le traitement antibiotique de référence d'une méningite ou rhombencéphalite à Listeria monocytogenes est :",
    options: [
      "A) Amoxicilline à forte dose (200 mg/kg/j en 4 à 6 perfusions IV) associée à la Gentamicine (3 à 5 mg/kg/j les premiers jours).",
      "B) Ceftriaxone en monothérapie.",
      "C) Ciprofloxacine per os.",
      "D) Vancomycine seule.",
      "E) Métronidazole seul."
    ],
    correctAnswers: [0],
    explanation: "Listeria monocytogenes est naturellement RÉSISTANTE à toutes les céphalosporines (y compris C3G comme Ceftriaxone/Céfotaxime). Le traitement repose impérativement sur Amoxicilline + Aminoside.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-25',
    courseId: 'crs-neuro-17',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans la neurosyphilis tertiaire, le tabes dorsalis correspond sémiologiquement à :",
    options: [
      "A) Une dégénérescence sélective des cordons postérieurs de la moelle et des racines postérieures, entraînant douleurs fulgurantes en éclairs, ataxie proprioceptive avec signe de Romberg et signe d'Argyll-Robertson.",
      "B) Une paralysie flasque aiguë ascendante post-grippale.",
      "C) Une hémiplégie spasmodique avec aphasie motrice pure.",
      "D) Un tremblement intentionnel d'action pur sans trouble sensitif.",
      "E) Une hydrocéphalie communicante avec incontinence précoce."
    ],
    correctAnswers: [0],
    explanation: "Le tabes (radiculo-cordonite postérieure syphilitique) donne une ataxie sensitive majeure, l'abolition des ROT rotuliens et achilléens et le signe d'Argyll-Robertson (abolition du réflexe photomoteur avec conservation de l'accommodation-convergence).",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-17-c01',
    courseId: 'crs-neuro-17',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un homme de 38 ans sans antécédents est amené aux urgences pour confusion mentale fébrile (38,8°C), troubles du comportement avec propos incohérents apparus depuis 24 heures, suivis d'une crise convulsive bravais-jacksonienne débutée au membre supérieur droit avec généralisation secondaire. L'examen note une aphasie fluente avec paraphasies et une raideur de nuque modérée. L'IRM montre un hypersignal FLAIR étendu du cortex temporal gauche et de l'insula. Quel est le diagnostic le plus urgent à évoquer ?",
    options: [
      "A) Méningo-encéphalite herpétique (HSV-1).",
      "B) Tumeur gliale frontale maligne de haut grade.",
      "C) Accident vasculaire cérébral ischémique sylvien malin.",
      "D) Démence à corps de Lewy décompensée.",
      "E) Encéphalopathie alcoolique de Gayet-Wernicke."
    ],
    correctAnswers: [0],
    explanation: "La triade fièvre + confusion/troubles du comportement + crise d'épilepsie temporale avec hypersignal temporo-insulaire à l'IRM signe l'encéphalite herpétique jusqu'à preuve du contraire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-c02',
    courseId: 'crs-neuro-17',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quelle mesure thérapeutique urgente devez-vous instaurer immédiatement avant même tout autre examen ?",
    options: [
      "A) Injection IV immédiate d'Aciclovir à la dose de 10 mg/kg/8h.",
      "B) Radiothérapie cérébrale temporale urgente.",
      "C) Héparine à dose curative par voie intraveineuse.",
      "D) Ponction lombaire avec injection intrathécale de corticoïdes.",
      "E) Trithérapie antituberculeuse standard per os."
    ],
    correctAnswers: [0],
    explanation: "L'Aciclovir par voie intraveineuse doit être administré sans délai, chaque heure gagnée diminuant significativement le risque de mortalité et de séquelles amnésiques (syndrome de Korsakoff définitif).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-c03',
    courseId: 'crs-neuro-17',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un patient de 45 ans porteur d'une otorrhée purulente droite chronique traînante consulte pour des céphalées hémicrâniennes droites d'aggravation rapide, des vomissements en jet et une fièvre oscillante à 38,5°C. À l'examen, il existe une discrète ataxie cérébelleuse cinétique droite et un nystagmus horizontal battant vers la droite. Le scanner injecté montre une volumineuse lésion kystique de 3,5 cm de l'hémisphère cérébelleux droit prenant le contraste en anneau périphérique avec un œdème périlésionnel comprimant le 4ème ventricule. Quel est le diagnostic ?",
    options: [
      "A) Abcès cérébelleux droit à point de départ otogène.",
      "B) Schwannome vestibulaire bénin rompu.",
      "C) Métastase cérébelleuse calcifiée ancienne.",
      "D) Hémangioblastome kystique de Von Hippel-Lindau non infecté.",
      "E) Hématome cérébelleux spontané subaigu."
    ],
    correctAnswers: [0],
    explanation: "Otorrhée chronique + syndrome cérébelleux fébrile + lésion kystique avec prise de contraste en anneau et œdème comprimant le V4 = abcès du cervelet otogène.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-c04',
    courseId: 'crs-neuro-17',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un jeune homme de 22 ans s'est fait percer un furoncle de l'aile droite du nez la veille. Il développe en quelques heures une fièvre à 40°C avec frissons solennels, un œdème palpébral droit massif rouge et chaud fermant l'œil, un chémosis hémorragique et une cécité avec immobilité oculaire droite complète (paralysie des III, IV, VI). Quel syndrome redoutable présente ce patient ?",
    options: [
      "A) Thrombophlébite septique du sinus caverneux droit par staphylococcie maligne de la face.",
      "B) Glaucome aigu par fermeture de l'angle.",
      "C) Conjonctivite bactérienne banale bilatérale.",
      "D) Crise de migraine ophtalmique compliquée.",
      "E) Sinusite maxillaire catarrhale simple."
    ],
    correctAnswers: [0],
    explanation: "La manipulation d'un furoncle médio-facial draine le staphylocoque vers le sinus caverneux par la veine ophtalmique : œil saillant rouge bloqué avec chémosis et ophtalmoplégie complète = thrombophlébite du sinus caverneux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-17-c05',
    courseId: 'crs-neuro-17',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient de 34 ans originaire d'une zone d'endémie consulte pour céphalées vespérales, amaigrissement de 8 kg et fébricule depuis 3 semaines. Il présente depuis 48 heures un ptosis gauche avec strabisme divergent et diplopie (paralysie du III gauche). La ponction lombaire ramène un liquide clair, 220 cellules/mm³ à 85% de lymphocytes, une protéinorachie à 3,2 g/L et une glycorachie à 1,1 mmol/L pour une glycémie veineuse concomitante à 6,0 mmol/L. Quel traitement d'urgence devez-vous débuter ?",
    options: [
      "A) Quadrithérapie antituberculeuse (INH + RMP + PZA + EMB) associée à une corticothérapie adjuvante précoce par voie générale.",
      "B) Aciclovir IV seul.",
      "C) Ampicilline + Gentamicine per os.",
      "D) Céphalosporine de 1ère génération seule.",
      "E) Traitement antalgique simple et surveillance en ambulatoire."
    ],
    correctAnswers: [0],
    explanation: "Atteinte subaiguë de la base du crâne (nerf III) + LCR lymphocytaire hyperprotéinorachique et hypoglycorachique franc (rapport < 0,2) = Méningite tuberculeuse. Nécessite quadrithérapie RHZE + corticoïdes immédiats.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_17_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-17-mindmap',
    courseId: 'crs-neuro-17',
    title: 'Mind Map : Infections du Système Nerveux Central',
    type: 'mindmap',
    content: `# Mind Map : Infections Cérébro-Méningées Graves

## 1. Méningo-Encéphalite Herpétique (HSV-1)
- **Topographie** : Lobes temporo-limbiques et insulaires (nécrose hémorragique).
- **Clinique** : Fièvre + Confusion/Troubles du comportement + Crises d'épilepsie temporales (olfactives, gustatives, bravais-jacksoniennes).
- **Diagnostic** : IRM (hypersignal FLAIR temporal asymétrique), PCR HSV dans le LCR.
- **Urgence Vitale** : Aciclovir IV 10-15 mg/kg/8h débuté IMMÉDIATEMENT dès la suspicion !

## 2. Abcès Cérébraux & Empyèmes
- **Portes d'entrée** : ORL par contiguïté (otite/mastoïdite -> temporal/cervelet ; sinusite -> frontal), dentaire, hématogène (endocardite, shunt).
- **Imagerie** : Lésion kystique arrondie, prise de contraste en anneau régulier, nécrose purulente en hypersignal diffusion, œdème majeur.
- **Contre-indication ABSOLUE** : Ponction lombaire (risque d'engagement fatal).
- **Traitement** : C3G forte dose + Métronidazole +/- Vancomycine pendant 4 à 6 semaines + Ponction neurochirurgicale stéréotaxique si > 2,5-3 cm.

## 3. Tuberculose Neuroméningée
- **Clinique** : Début subaigu/insidieux, arachnoïdite de la base du crâne, paralysie des paires crâniennes (III, VI, VII), hydrocéphalie.
- **LCR** : Formule lymphocytaire, hyperprotéinorachie majeure (> 2 g/L), hypoglycorachie franche (< 0,3-0,4 ratio LCR/sang).
- **Traitement** : Quadrithérapie (RHZE 2 mois puis RH 7-10 mois) + Corticothérapie adjuvante (limite les synéchies et l'œdème).

## 4. Thrombophlébites Septiques
- **Sinus caverneux** : Staphylococcie maligne de la face (furoncle de l'aile du nez manipulé).
- **Clinique** : Exophtalmie douloureuse, chémosis majeur, ophtalmoplégie complète (III, IV, VI, V1).`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-17-astuces',
    courseId: 'crs-neuro-17',
    title: 'Astuces & Pièges aux Concours : Infections Neurochirurgicales & Médicales',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Ponction lombaire dans l'abcès cérébral :**
   - **CONTRE-INDICATION FORMELLE !** Ne jamais réaliser de PL devant une lésion expansive intracrânienne avec prise de contraste en anneau et œdème périlésionnel sous peine d'engagement fatal.
2. **Listeria monocytogenes vs Céphalosporines :**
   - Listeria est **naturellement résistante à TOUTES les C3G** (Ceftriaxone/Céfotaxime). Le traitement repose sur **Amoxicilline + Gentamicine**.
3. **Encéphalite herpétique = ACICLOVIR AVANT TOUT :**
   - Si un QCM propose d'attendre la PCR ou de faire un EEG avant de débuter l'aciclovir : proposition **FAUSSE**. Le traitement antiviral IV prime sur toute investigation.
4. **LCR de la tuberculose méningée :**
   - Associe obligatoirement : pléiocytose lymphocytaire + **hypoglycorachie sévère** + hyperprotéinorachie majeure (> 2 à 3 g/L). Les méningites virales pures ont une *glycorachie normale*.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 18: SCLÉROSE EN PLAQUES (SEP)
// ==========================================
export const NEURO_LESSON_18_QUESTIONS: Question[] = [
  {
    id: 'q-nro-18-01',
    courseId: 'crs-neuro-18',
    questionNumber: 1,
    type: 'QCM',
    content: "La Sclérose en Plaques (SEP) est physiopathologiquement définie comme :",
    options: [
      "A) Une maladie neurodégénérative génétique pure par mutation de la frataxine.",
      "B) Une affection inflammatoire démyélinisante chronique auto-immune du système nerveux central (SNC), caractérisée par une dissémination temporelle et spatiale des lésions.",
      "C) Une neuropathie périphérique axonale avec perte exclusive de la myéline de Schwann.",
      "D) Une infection bactérienne chronique à spirochètes intracérébraux.",
      "E) Une maladie primitive des motoneurones de la corne antérieure."
    ],
    correctAnswers: [1],
    explanation: "La SEP est la maladie inflammatoire auto-immune démyélinisante la plus fréquente du SNC chez l'adulte jeune, frappant électivement la myéline centrale (oligodendrocytes).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-02',
    courseId: 'crs-neuro-18',
    questionNumber: 2,
    type: 'QCM',
    content: "Une poussée de sclérose en plaques se définit rigoureusement par :",
    options: [
      "A) Des céphalées brutales d'une durée de 2 minutes survenant à l'effort.",
      "B) L'apparition de nouveaux symptômes neurologiques ou l'aggravation de symptômes préexistants, durant plus de 24 heures, en l'absence de fièvre ou d'infection intercurrente, séparée de la poussée précédente par au moins 30 jours.",
      "C) Une crise convulsive généralisée isolée fébrile.",
      "D) Une sensation de fatigue survenue après une nuit blanche durant 3 heures.",
      "E) Des paresthésies de 5 minutes après un bain chaud."
    ],
    correctAnswers: [1],
    explanation: "Critères stricts de la poussée de SEP : durée > 24h, intervalle libre > 30 jours par rapport à l'événement antérieur, et exclusion formelle d'une pseudo-poussée liée à la fièvre ou infection (phénomène d'Uhthoff).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-03',
    courseId: 'crs-neuro-18',
    questionNumber: 3,
    type: 'QCM',
    content: "Le phénomène d'Uhthoff dans la sclérose en plaques correspond à :",
    options: [
      "A) Une cécité permanente après un choc crânien.",
      "B) L'aggravation transitoire ou la réapparition de symptômes neurologiques antérieurs (notamment visuels) lors de l'élévation de la température corporelle (bain chaud, sport, fièvre), liée au bloc de conduction thermo-dépendant des axones démyélinisés.",
      "C) Une surdité brusque bilatérale survenant au réveil.",
      "D) Une paraplégie flasque permanente après anesthésie péridurale.",
      "E) Une contracture faciale provoquée par la mastication."
    ],
    correctAnswers: [1],
    explanation: "Le phénomène d'Uhthoff est une pseudo-poussée thermodépendante : la chaleur altère réversiblement la conduction des fibres démyélinisées sans créer de nouvelle lésion inflammatoire active.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-04',
    courseId: 'crs-neuro-18',
    questionNumber: 4,
    type: 'QCM',
    content: "Le signe de Lhermitte, fréquemment retrouvé au cours de la SEP, se caractérise par :",
    options: [
      "A) Une décharge électrique brève descendant le long du rachis et dans les membres lors de la flexion passive ou active du cou, témoignant d'une démyélinisation des cordons postérieurs cervicaux.",
      "B) Une flexion involontaire des cuisses lors de la flexion de la nuque.",
      "C) Une douleur lombaire irradiant dans le mollet à l'élévation de la jambe tendue.",
      "D) Une chute de la paupière supérieure lors de la mastication.",
      "E) Un spasme douloureux du visage déclenché par l'effleurement d'une zone gâchette."
    ],
    correctAnswers: [0],
    explanation: "Le signe de Lhermitte est la décharge électrique descendante le long du rachis lors de la flexion de la tête, traduisant une plaque de démyélinisation dans les cordons postérieurs de la moelle cervicale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-05',
    courseId: 'crs-neuro-18',
    questionNumber: 5,
    type: 'QCM',
    content: "À l'IRM cérébrale, les lésions démyélinisantes caractéristiques de la SEP prédominent au niveau :",
    options: [
      "A) De la substance grise corticale pure sans toucher la substance blanche.",
      "B) De la substance blanche péri-ventriculaire (aspect en 'doigts de Dawson' perpendiculaires aux ventricules), du corps calleux, sous-tentorielle (cervelet, tronc cérébral) et médullaire.",
      "C) Des cavités sinusiennes de la face.",
      "D) De la selle turcique exclusivement.",
      "E) Des méninges de la base du crâne uniquement."
    ],
    correctAnswers: [1],
    explanation: "La dissémination spatiale à l'IRM (critères de McDonald) exige des hypersignaux T2/FLAIR dans au moins 2 des 4 zones typiques : périventriculaire (doigts de Dawson), juxtacorticale/corticale, sous-tentorielle et médullaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-06',
    courseId: 'crs-neuro-18',
    questionNumber: 6,
    type: 'QCM',
    content: "Selon les critères révisés de McDonald (2017), la dissémination temporelle peut être affirmée sur une IRM unique initiale si :",
    options: [
      "A) Toutes les lésions sont strictement identiques sans aucune prise de contraste.",
      "B) Il existe la présence simultanée de lésions asymptomatiques prenant le contraste (gadolinium +) et de lésions ne prenant pas le contraste (gadolinium -).",
      "C) Le patient est âgé de plus de 75 ans.",
      "D) L'EEG montre des ondes triphasiques.",
      "E) Le bilan lipidique sanguin est strictement perturbé."
    ],
    correctAnswers: [1],
    explanation: "La coexistence sur un même cliché IRM de lésions actives (rehaussées par le gadolinium) et anciennes (non rehaussées) démontre la survenue de plaques à des moments différents (dissémination temporelle immédiate).",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-18-07',
    courseId: 'crs-neuro-18',
    questionNumber: 7,
    type: 'QCM',
    content: "L'analyse du liquide cérébro-spinal (LCR) dans la SEP confirme la synthèse intrathécale d'immunoglobulines par :",
    options: [
      "A) La présence d'une glycorachie effondrée à zéro.",
      "B) La mise en évidence d'un profil de bandes oligoclonales (BOC) d'IgG en focalisation isoélectrique (présentes dans le LCR et absentes du sérum) ou d'un index d'IgG élevé.",
      "C) La présence de plus de 1000 polynucléaires altérés/mm³.",
      "D) La positivité de l'antigène cryptococcique.",
      "E) Un taux de chlore doublé."
    ],
    correctAnswers: [1],
    explanation: "Les bandes oligoclonales intrathécales d'IgG (retrouvées dans > 90% des SEP) signent la réaction immunitaire compartimentée dans le SNC et permettent de valider la dissémination temporelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-08',
    courseId: 'crs-neuro-18',
    questionNumber: 8,
    type: 'QCM',
    content: "L'ophtalmoplégie internucléaire (OIN) très évocatrice de SEP chez l'adulte jeune résulte d'une démyélinisation de :",
    options: [
      "A) Le nerf optique (nerf II) intracrânien.",
      "B) Le faisceau longitudinal médial (bandelette longitudinale postérieure) reliant le noyau du VI controlatéral au noyau du III homolatéral.",
      "C) Le chiasma optique médian.",
      "D) La strie olfactive latérale.",
      "E) Le nerf facial intrapétreux."
    ],
    correctAnswers: [1],
    explanation: "L'atteinte du faisceau longitudinal médial (FLM) désynchronise les mouvements horizontaux : déficit d'adduction de l'œil du côté de la lésion avec nystagmus monoculaire de l'œil abducteur controlatéral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-09',
    courseId: 'crs-neuro-18',
    questionNumber: 9,
    type: 'QCM',
    content: "Le traitement d'attaque de première intention d'une poussée aiguë invalidante de sclérose en plaques repose sur :",
    options: [
      "A) Des perfusions de méthylprednisolone (Solumédrol) à forte dose : 1 g/jour en perfusion IV pendant 3 à 5 jours consécutifs sous surveillance.",
      "B) Des antibiotiques de la famille des macrolides par voie orale.",
      "C) La L-Dopa à posologie progressive.",
      "D) La radiothérapie de l'axe médullaire.",
      "E) Des anti-inflammatoires non stéroïdiens (ibuprofène) pendant 48 heures."
    ],
    correctAnswers: [0],
    explanation: "Le flash de corticoïdes (Solumédrol 1 g/j IV sur 3 à 5 jours) accélère la récupération de la poussée en diminuant l'œdème et l'inflammation locale (sans modifier le pronostic à long terme).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-10',
    courseId: 'crs-neuro-18',
    questionNumber: 10,
    type: 'QCM',
    content: "La forme clinique évolutive la plus fréquente au début de la maladie (environ 85% des cas) est :",
    options: [
      "A) La forme primaire progressive (PP) d'emblée.",
      "B) La forme rémittente-récurrente (RR), caractérisée par des poussées bien individualisées avec récupération totale ou partielle, sans progression entre les poussées.",
      "C) La forme foudroyante de Marburg.",
      "D) La forme myélo-radiculaire pure.",
      "E) La forme bulbaire primitive fatale."
    ],
    correctAnswers: [1],
    explanation: "La forme rémittente-récurrente (SEP-RR) débute typiquement chez l'adulte jeune entre 20 et 40 ans (prédominance féminine 3/1) par des poussées régressives successives.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-11',
    courseId: 'crs-neuro-18',
    questionNumber: 11,
    type: 'QCM',
    content: "Parmi les traitements de fond immunomodulateurs historiques injectables de la forme rémittente-récurrente de SEP, on compte :",
    options: [
      "A) Les Interférons bêta (1a et 1b) et l'Acétate de glatiramère (Copaxone).",
      "B) La tétracycline injectable.",
      "C) L'insuline glargine quotidienne.",
      "D) Le furosémide par voie sous-cutanée.",
      "E) Le phénobarbital par voie intramusculaire."
    ],
    correctAnswers: [0],
    explanation: "Les interférons bêta et le glatiramère sont les traitements de fond de 1ère ligne historiques bien tolérés sur le plan de la sécurité infectieuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-12',
    courseId: 'crs-neuro-18',
    questionNumber: 12,
    type: 'QCM',
    content: "Le Natalizumab (Tysabri®), anticorps monoclonal anti-intégrine alpha-4 très efficace dans les formes très actives de SEP, expose au risque rare mais gravissime de :",
    options: [
      "A) Leucoencéphalopathie multifocale progressive (LEMP) due à la réactivation du virus JC.",
      "B) Cirrhose biliaire primitive.",
      "C) Pancréatite aiguë nécrotico-hémorragique.",
      "D) Décollement bilatéral de la rétine.",
      "E) Tumeur osseuse primitive ostéosarcomateuse."
    ],
    correctAnswers: [0],
    explanation: "Le natalizumab bloque le passage des lymphocytes à travers la BHE, empêchant la clairance du virus JC et créant un risque de LEMP opportuniste, nécessitant une stratification sérologique anti-JCV.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-13',
    courseId: 'crs-neuro-18',
    questionNumber: 13,
    type: 'QCM',
    content: "La névrite optique rétrobulbaire (NORB) au cours de la SEP se caractérise par :",
    options: [
      "A) Une baisse d'acuité visuelle unilatérale d'installation rapide en quelques heures/jours, des douleurs rétro-orbitaires majorées lors des mouvements du globe, une dyschromatopsie rouge-vert et un scotome central.",
      "B) Une exophtalmie bilatérale pulsatile indolore.",
      "C) Une hémianopsie bitemporale complète avec vision maculaire normale.",
      "D) Une luxation spontanée du cristallin.",
      "E) Un œdème palpébral allergique sans baisse d'acuité visuelle."
    ],
    correctAnswers: [0],
    explanation: "La NORB de la SEP : baisse visuelle monoculaire rapide, douleurs oculaires aux mouvements, altération de la vision des couleurs (rouge-vert) et scotome caeco-central.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-14',
    courseId: 'crs-neuro-18',
    questionNumber: 14,
    type: 'QCM',
    content: "Quel réflexe pupillaire anormal est classiquement observé du côté atteint lors d'une névrite optique rétrobulbaire unilatérale ?",
    options: [
      "A) Un déficit pupillaire afférent relatif (DPAR ou signe de Marcus Gunn).",
      "B) Une mydriase bilatérale aréactive complète.",
      "C) Un myosis punctiforme serré insensible à l'obscurité.",
      "D) Une pupille tonique d'Adie unilatérale.",
      "E) Un nystagmus pupillaire congénital."
    ],
    correctAnswers: [0],
    explanation: "Le déficit pupillaire afférent relatif (DPAR / Marcus Gunn) : lors de l'éclairement alterné des yeux, l'éclairement de l'œil malade déclenche une dilatation paradoxale des deux pupilles par défaut de transmission du stimulus afférent.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-18-15',
    courseId: 'crs-neuro-18',
    questionNumber: 15,
    type: 'QCM',
    content: "Le traitement symptomatique de la spasticité invalidante chez un patient atteint de SEP repose en première ligne sur :",
    options: [
      "A) Le baclofène (Liorésal®) per os ou la toxine botulique intramusculaire focale.",
      "B) Les diurétiques thiazidiques.",
      "C) La morphine intraveineuse continue.",
      "D) Les bêtabloquants cardiosélectifs à forte dose.",
      "E) L'acide acétylsalicylique à 3 g/jour."
    ],
    correctAnswers: [0],
    explanation: "Le baclofène (agoniste GABA-B) et la rééducation motrice kinésithérapique constituent la base du traitement de la spasticité pyramidale dans la SEP.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-16',
    courseId: 'crs-neuro-18',
    questionNumber: 16,
    type: 'QCM',
    content: "La myélite aiguë transverse de la SEP se différencie classiquement de la myélite de la Neuromyélite Optique de Devic (NMO) par :",
    options: [
      "A) Des lésions médullaires partielles courtes (< 3 segments vertébraux), asymétriques en coin postérieur ou latéral à l'IRM, alors que la NMO donne une myélite transverse étendue contiguë sur 3 vertèbres ou plus (LETM) associée aux anticorps anti-Aquaporine 4 (AQP4).",
      "B) L'absence totale de tout hypersignal médullaire à l'IRM dans la SEP.",
      "C) La présence exclusive d'anticorps anti-GAD dans la SEP.",
      "D) Une atteinte motrice des membres supérieurs strictement impossible.",
      "E) Une transmission génétique mendélienne récessive."
    ],
    correctAnswers: [0],
    explanation: "La plaque médullaire de la SEP est courte (< 3 vertèbres) et asymétrique. La neuromyélite optique (Devic) produit des lésions étendues (> 3 corps vertébraux), nécrosantes, médiées par les anticorps anti-AQP4.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-18-17',
    courseId: 'crs-neuro-18',
    questionNumber: 17,
    type: 'QCM',
    content: "Le fingolimod (Gilenya®), modulateur des récepteurs de la sphingosine-1-phosphate (S1P) utilisé per os dans la SEP, nécessite une surveillance de 6 heures lors de la première prise en raison du risque de :",
    options: [
      "A) Bradycardie sinusale et de bloc auriculo-ventriculaire (BAV) transitoires.",
      "B) Poussée hypertensive maligne avec œdème aigu pulmonaire.",
      "C) Hypoglycémie sévère comateuse.",
      "D) Hémorragie digestive foudroyante.",
      "E) Éruption bulleuse toxique de Lyell."
    ],
    correctAnswers: [0],
    explanation: "La première prise de fingolimod active les récepteurs S1P myocardiques, provoquant une bradycardie transitoire imposant une surveillance scopée de 6 heures avec ECG initial et final.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-18-18',
    courseId: 'crs-neuro-18',
    questionNumber: 18,
    type: 'QCM',
    content: "L'échelle standardisée universellement utilisée pour quantifier le handicap neurologique au cours de la sclérose en plaques est :",
    options: [
      "A) L'échelle EDSS (Expanded Disability Status Scale) de Kurtzke.",
      "B) L'échelle de Glasgow pour le coma.",
      "C) Le score NIHSS d'AVC.",
      "D) Le score de Rankin modifié d'autonomie.",
      "E) L'échelle de Hamilton pour la dépression."
    ],
    correctAnswers: [0],
    explanation: "L'EDSS (de 0 à 10 par paliers de 0,5) cote le handicap neurologique dans 7 systèmes fonctionnels ; le score de 6.0 correspond à la nécessité d'une aide unilatérale à la marche (canne).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-19',
    courseId: 'crs-neuro-18',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans la prise en charge d'une poussée sévère de SEP réfractaire à deux cures successives de Solumédrol à forte dose (1 g/j x 5 jours), le traitement de sauvetage validé est :",
    options: [
      "A) Les échanges plasmatiques (plasmaphérèses, 5 à 7 séances un jour sur deux).",
      "B) L'antibiothérapie par céphalosporine de 3ème génération.",
      "C) La biopsie de la moelle épinière.",
      "D) L'injection intraveineuse de potassium.",
      "E) Le repos au lit strict sans médicament pendant 6 mois."
    ],
    correctAnswers: [0],
    explanation: "Les échanges plasmatiques précoces constituent le traitement de recours de première ligne validé dans les poussées sévères démyélinisantes cortico-résistantes.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-18-20',
    courseId: 'crs-neuro-18',
    questionNumber: 20,
    type: 'QCM',
    content: "Les anticorps monoclonaux anti-CD20 (Ocrélizumab, Ofatumumab, Rituximab) ciblent dans la SEP :",
    options: [
      "A) La déplétion sélective des lymphocytes B, démontrant un rôle pathogénique central de l'immunité humorale et de la présentation antigénique par les cellules B.",
      "B) La destruction directe des cellules gliales astrocytes.",
      "C) Le blocage des récepteurs nicotiniques musculaires.",
      "D) L'inhibition de la synthèse hépatique du complément.",
      "E) La stimulation de la prolifération des neutrophiles."
    ],
    correctAnswers: [0],
    explanation: "Les anti-CD20 provoquent une déplétion rapide et efficace de la lignée lymphocytaire B (CD20+), réduisant drastiquement les poussées et l'activité IRM dans les formes rémittentes et actives.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-21',
    courseId: 'crs-neuro-18',
    questionNumber: 21,
    type: 'QCM',
    content: "Parmi les symptômes suivants, lequel est très inhabituel et doit faire remettre en question le diagnostic de sclérose en plaques typique ?",
    options: [
      "A) Une aphasie de Wernicke brutale avec agnosie visuelle complète.",
      "B) Une névrite optique rétrobulbaire unilatérale.",
      "C) Un signe de Lhermitte.",
      "D) Une diplopie par ophtalmoplégie internucléaire.",
      "E) Des paresthésies ascendantes d'un membre inférieur."
    ],
    correctAnswers: [0],
    explanation: "Les atteintes purement corticales (aphasie, hémianopsie latérale homonyme, démence corticale précoce) sont très exceptionnelles dans la SEP et doivent faire suspecter un AVC ou une encéphalite.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-18-22',
    courseId: 'crs-neuro-18',
    questionNumber: 22,
    type: 'QCM',
    content: "La forme secondairement progressive (SEP-SP) correspond à :",
    options: [
      "A) L'apparition d'une aggravation continue et progressive du handicap neurologique sur au moins 6 mois, avec ou sans poussées surajoutées, succédant à une phase rémittente initiale.",
      "B) Une guérison spontanée après 10 ans d'évolution.",
      "C) Une survenue exclusive chez l'enfant avant l'âge de 5 ans.",
      "D) Une maladie transmissible par voie sanguine transfusionnelle.",
      "E) L'absence complète de séquelles motrices."
    ],
    correctAnswers: [0],
    explanation: "Après 10 à 20 ans d'évolution, une proportion importante de SEP-RR évolue vers la phase secondairement progressive caractérisée par l'accumulation continue du handicap moteur indépendamment des poussées.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-23',
    courseId: 'crs-neuro-18',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique avant initiation d'un traitement de fond par immunosuppresseur ou anticorps monoclonal dans la SEP, quel bilan infectieux est impératif ?",
    options: [
      "A) Sérologies VHB, VHC, VIH, sérologie VZV (varicelle), recherche d'une tuberculose latente (Quantiféron / RP) et statut sérologique pour le virus JC.",
      "B) Dosage exclusif de la vitamine C.",
      "C) Scanner thoraco-abdomino-pelvien avec injection 3 fois par semaine.",
      "D) Biopsie rénale systématique.",
      "E) Coproculture systématique tous les 15 jours."
    ],
    correctAnswers: [0],
    explanation: "La déplétion immunitaire induite par les traitements de fond modernes impose de vérifier l'absence d'infections virales chroniques (VIH, hépatites), de tuberculose et de vérifier l'immunité anti-VZV (vacciner si séronégatif).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-24',
    courseId: 'crs-neuro-18',
    questionNumber: 24,
    type: 'QCM',
    content: "Les troubles vésico-sphinctériens au cours de la sclérose en plaques se manifestent principalement par :",
    options: [
      "A) Une hyperactivité vésicale (pollakiurie, impériosités mictionnelles avec fuites) associée ou non à une dyssynergie vésico-sphinctérienne créant un résidu post-mictionnel.",
      "B) Une anurie sécrétoire aiguë d'emblée.",
      "C) Une hématurie macroscopique terminale indolore.",
      "D) Une rupture vésicale spontanée systématique.",
      "E) Une polyurie osmotique constante."
    ],
    correctAnswers: [0],
    explanation: "L'atteinte des voies médullaires pyramidales et végétatives provoque l'hyperactivité détrusorienne (urgences mictionnelles) et la dyssynergie vésico-sphinctérienne (vidange incomplète avec résidu).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-25',
    courseId: 'crs-neuro-18',
    questionNumber: 25,
    type: 'QCM',
    content: "Concernant la grossesse chez une patiente atteinte de sclérose en plaques :",
    options: [
      "A) La grossesse est formellement contre-indiquée et justifie une interruption médicale de grossesse systématique.",
      "B) Le taux de poussées diminue significativement durant le 3ème trimestre de la grossesse grâce à la tolérance immunitaire fœto-maternelle, avec un effet rebond classique d'augmentation des poussées dans les 3 mois du post-partum.",
      "C) La SEP est transmise à l'enfant dans 100% des cas.",
      "D) L'allaitement maternel aggrave toujours mortellement la maladie.",
      "E) La césarienne sous anesthésie générale est impérative dans tous les cas."
    ],
    correctAnswers: [1],
    explanation: "La grossesse est protectrice au 3ème trimestre (chute du taux de poussées) avec un rebond transitoire durant le post-partum immédiat. La SEP n'altère ni la fertilité ni le déroulement obstétrical normal de l'accouchement.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-18-c01',
    courseId: 'crs-neuro-18',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Une femme de 26 ans, sans antécédents, consulte pour une baisse d'acuité visuelle de l'œil droit installée en 3 jours (vision chiffrée à 2/10), accompagnée d'une douleur vive en arrière du globe oculaire majorée par les mouvements du regard. Elle décrit également une perception délavée des couleurs (le rouge lui paraît grisâtre). L'examen montre un réflexe photomoteur consensuel conservé mais un déficit pupillaire afférent relatif droit (signe de Marcus Gunn). Le fond d'œil est parfaitement normal. Quel diagnostic posez-vous ?",
    options: [
      "A) Névrite optique rétrobulbaire (NORB) droite.",
      "B) Décollement de rétine droit à foyer maculaire.",
      "C) Glaucome aigu par fermeture de l'angle droit.",
      "D) Occlusion de l'artère centrale de la rétine droite.",
      "E) Thrombose de la veine centrale de la rétine droite."
    ],
    correctAnswers: [0],
    explanation: "La triade baisse visuelle rapide + douleur à la mobilisation du globe + altération des couleurs avec fond d'œil initialement normal chez une femme jeune est la description type de la NORB inaugurale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-c02',
    courseId: 'crs-neuro-18',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : L'IRM encéphalique et médullaire réalisée chez cette patiente retrouve un hypersignal du nerf optique droit et met en évidence 4 lésions ovoïdes de la substance blanche péri-ventriculaire perpendiculaires aux ventricules latéraux en T2/FLAIR, dont une prend le contraste après injection de gadolinium. Il existe également un hypersignal T2 cervical en C4 mesurant 1 cm de haut. Quelle conclusion en tirez-vous selon les critères de McDonald 2017 ?",
    options: [
      "A) Le diagnostic de Sclérose en Plaques cliniquement définie est formellement posé dès cette première poussée, car les critères de dissémination spatiale et de dissémination temporelle sont simultanément réunis à l'IRM.",
      "B) Il s'agit d'un AVC lacunaire multiple sans rapport avec une SEP.",
      "C) Le diagnostic de SEP est exclu car le fond d'œil était normal.",
      "D) Il est impératif d'attendre une deuxième poussée clinique avant de poser le diagnostic.",
      "E) La présence de lésions médullaires élimine la sclérose en plaques."
    ],
    correctAnswers: [0],
    explanation: "Les critères 2017 sont remplis sur cette IRM unique : dissémination spatiale (lésions périventriculaires + médullaire) et dissémination temporelle (coexistence d'une lésion prenant le contraste et de lésions ne prenant pas le contraste). Le diagnostic de SEP est certain.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-c03',
    courseId: 'crs-neuro-18',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Une patiente de 32 ans suivie pour une SEP rémittente-récurrente sous interféron bêta-1a présente lors d'un séjour estival caniculaire une sensation de flou visuel bilatéral et une lourdeur des membres inférieurs survenue après un bain dans une piscine chauffée à 36°C. Deux heures après être retournée dans une chambre climatisée et s'être rafraîchie, ses symptômes disparaissent intégralement. De quoi s'agit-il ?",
    options: [
      "A) D'une nouvelle poussée évolutive sévère justifiant un flash de corticoïdes.",
      "B) D'un phénomène d'Uhthoff (pseudo-poussée thermo-dépendante par bloc de conduction fonctionnel des fibres démyélinisées).",
      "C) D'un accident ischémique transitoire vertébro-basilaire.",
      "D) D'une méningite bactérienne acquise en piscine.",
      "E) D'une intoxication aiguë au chlore."
    ],
    correctAnswers: [1],
    explanation: "Le déclenchement par la chaleur et la régression complète dès le refroidissement corporel caractérisent le phénomène d'Uhthoff. Ce n'est pas une poussée vraie et cela ne nécessite aucun corticoïde.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-c04',
    courseId: 'crs-neuro-18',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Lors de l'examen de l'oculomotricité chez un patient de 28 ans présentant une diplopie horizontale transitoire, vous observez que dans le regard vers la gauche, l'œil droit ne parvient pas à passer la ligne médiane en adduction, tandis que l'œil gauche présente un nystagmus horizontal vigoureux en abduction. La convergence oculaire reste parfaitement normale. Quelle est cette anomalie sémiologique et quelle structure est lésée ?",
    options: [
      "A) Paralysie complète du nerf moteur oculaire externe (VI) droit.",
      "B) Ophtalmoplégie internucléaire (OIN) droite par lésion du faisceau longitudinal médial (FLM) droit dans le tronc cérébral.",
      "C) Paralysie unilatérale isolée du nerf trochléaire (IV).",
      "D) Syndrome de la fente sphénoïdale droite.",
      "E) Apraxie oculomotrice congénitale."
    ],
    correctAnswers: [1],
    explanation: "Déficit d'adduction de l'œil droit avec nystagmus monoculaire de l'œil abducteur gauche et conservation de la convergence = Ophtalmoplégie internucléaire droite par démyélinisation du FLM droit.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-18-c05',
    courseId: 'crs-neuro-18',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient de 35 ans traité depuis 3 ans par Natalizumab (Tysabri®) pour une SEP agressive présente depuis 15 jours des troubles cognitifs inhabituels d'aggravation subaiguë avec aphasie progressive et hémiparésie droite indolore sans fièvre. L'IRM cérébrale montre une vaste lésion de démyélinisation de la substance blanche sous-corticale fronto-pariétale gauche, mal limitée, sans œdème périlésionnel ni prise de contraste nette. Quelle complication iatrogène redoutable devez-vous suspecter en urgence absolue ?",
    options: [
      "A) Une poussée banale de SEP traitable par Solumédrol.",
      "B) Une Leucoencéphalopathie Multifocale Progressive (LEMP) due à la réactivation du virus JC sous natalizumab.",
      "C) Un glioblastome multiforme radio-induit.",
      "D) Un abcès cérébral à Aspergillus.",
      "E) Un hématome sous-dural chronique bilatéral."
    ],
    correctAnswers: [1],
    explanation: "Sous natalizumab, l'apparition de nouveaux symptômes cognitifs ou moteurs subaigus asymétriques avec lésion démyélinisante étendue de la substance blanche impose de suspecter une LEMP : arrêt immédiat du Tysabri et PCR virus JC dans le LCR.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_18_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-18-mindmap',
    courseId: 'crs-neuro-18',
    title: 'Mind Map : Sclérose en Plaques (SEP)',
    type: 'mindmap',
    content: `# Mind Map : Sclérose en Plaques (SEP)

## 1. Physiopathologie & Épidémiologie
- Maladie auto-immune démyélinisante chronique du SNC (cibles : gaine de myéline et oligodendrocytes).
- Adulte jeune (20-40 ans), prédominance féminine (ratio 3F/1H).

## 2. Définitions Clés
- **Poussée** : Nouveaux symptômes ou réaggravation > 24h, apyrétique, séparée de la précédente d'au moins 30 jours.
- **Phénomène d'Uhthoff** : Aggravation transitoire thermo-dépendante (chaleur, bain, fièvre, sport) = pseudo-poussée.
- **Signe de Lhermitte** : Décharge électrique dans le rachis à la flexion de la nuque (atteinte cordonale postérieure cervicale).
- **Ophtalmoplégie Internucléaire (OIN)** : Atteinte du faisceau longitudinal médial (FLM). Déficit d'adduction + Nystagmus en abduction de l'autre œil.

## 3. Diagnostic (Critères de McDonald 2017)
- **Dissémination Spatiale** : Lésions T2/FLAIR dans >= 2 des 4 zones (Périventriculaire [doigts de Dawson], Corticale/Juxtacorticale, Sous-tentorielle, Médullaire).
- **Dissémination Temporelle** :
  - Clinique (2 poussées distinctes) OU
  - IRM : Coexistence simultanée de lésions prenant le gadolinium (+) et ne prenant pas le gadolinium (-), OU
  - LCR : Présence de bandes oligoclonales (BOC) d'IgG.

## 4. Traitements
- **Poussée** : Méthylprednisolone (Solumédrol) 1 g/jour IV pendant 3 à 5 jours. Échanges plasmatiques si échec sévère.
- **Traitement de Fond (1ère ligne)** : Interférons bêta, Acétate de glatiramère, Diméthylfumarate, Tériflunomide.
- **Traitement de Fond (Haute efficacité)** : Natalizumab (risque LEMP/virus JC), Anti-CD20 (Ocrélizumab, Ofatumumab), Fingolimod (S1P, risque de bradycardie).`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-18-astuces',
    courseId: 'crs-neuro-18',
    title: 'Astuces & Pièges aux Concours : Sclérose en Plaques',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Phénomène d'Uhthoff = PAS de corticoïdes :**
   - L'apparition de symptômes après un bain chaud, un sauna ou un effort physique n'est pas une poussée évolutive active. Ne nécessite aucun traitement cortisonique.
2. **Dissémination temporelle validée par le LCR :**
   - Grande nouveauté des critères McDonald 2017 : la présence de **bandes oligoclonales (BOC)** au LCR permet de valider le critère de dissémination temporelle dès la première poussée si la dissémination spatiale est remplie à l'IRM !
3. **SEP vs Neuromyélite Optique de Devic (NMO) :**
   - SEP : lésions médullaires courtes (< 3 corps vertébraux), asymétriques en coin, BOC positives dans le LCR (> 90%).
   - Devic : myélite transverse étendue (> 3 vertèbres contiguës), NORB bilatérale sévère, **anticorps anti-Aquaporine 4 (anti-AQP4)** positifs, BOC souvent négatives.
4. **Grossesse et SEP :**
   - La grossesse n'aggrave pas la SEP à long terme. Chute du taux de poussées au 3ème trimestre, puis rebond transitoire dans les 3 mois du post-partum. Pas d'indication de césarienne systématique.`,
    author: 'Dr. LAIDANI.M'
  }
];
