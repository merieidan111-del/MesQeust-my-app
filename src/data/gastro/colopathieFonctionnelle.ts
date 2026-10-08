import { Question, CourseResource } from '../../types/medical';

export const COLOPATHIE_FONCTIONNELLE_QUESTIONS: Question[] = [
  {
    "id": "q-sii-01",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Selon les critères internationaux de Rome IV, comment est défini le Syndrome de l'Intestin Irritable (SII / colopathie fonctionnelle) ?",
    "options": [
      "Une diarrhée fébrile avec rectorragies",
      "Une douleur abdominale récurrente survenant au moins 1 jour par semaine au cours des 3 derniers mois, associée à au moins 2 des critères suivants : en relation avec la défécation, associée à une modification de la fréquence des selles, associée à une modification de la consistance (aspect) des selles",
      "Une constipation isolée sans aucune douleur",
      "Une anomalie organique visible au scanner",
      "Une stéatorrhée avec anémie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les critères de Rome IV définissent le SII par une douleur abdominale récurrente au moins 1j/semaine depuis 3 mois (avec début > 6 mois), associée à au moins 2 critères sur 3 (liée à la défécation, modification de la fréquence, modification de la consistance).",
    "clinicalPearl": "Critères de Rome IV du SII : Douleur abdominale >= 1j/semaine depuis 3 mois associée à >= 2 critères liés aux selles (défécation, fréquence, consistance)."
  },
  {
    "id": "q-sii-02",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle échelle visuelle standardisée gradue la consistance des selles de 1 (selles dures en billes) à 7 (liquide sans consistance) pour classer les sous-types de SII ?",
    "options": [
      "Échelle de Bristol",
      "Échelle de Glasgow",
      "Échelle de Child-Pugh",
      "Score de Truelove",
      "Score de Balthazar"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'échelle de Bristol gradue les selles de 1 à 7 : types 1 et 2 = constipation (SII-C) ; types 6 et 7 = diarrhée (SII-D) ; mélange des deux = forme alternante (SII-M).",
    "clinicalPearl": "Échelle de Bristol : types 1-2 (constipation) à types 6-7 (diarrhée) classe les sous-types de SII."
  },
  {
    "id": "q-sii-03",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Parmi les mécanismes physiopathologiques intriqués du SII, lequel est considéré comme le trouble sensitif digestif cardinal ?",
    "options": [
      "Une atrophie des villosités intestinales",
      "L'hypersensibilité viscérale (baisse du seuil de perception de la douleur lors de la distension colique par ballonnet)",
      "Une hyperchlorhydrie gastrique",
      "Une thrombose mésentérique chronique",
      "Une infection bactérienne invasive transmurale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hypersensibilité viscérale centrale et périphérique (hyperalgésie à la distension gazeuse ou mécanique) est le mécanisme physiopathologique central du SII, souvent intriquée avec des anomalies de l'axe intestin-cerveau et une dysbiose.",
    "clinicalPearl": "Mécanisme clé du SII = Hypersensibilité viscérale (abaissement du seuil nociceptif à la distension luminale)."
  },
  {
    "id": "q-sii-04",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Parmi les signes cliniques suivants, lequel constitue un SIGNE D'ALARME imposant la réalisation d'une coloscopie totale pour éliminer une pathologie organique ?",
    "options": [
      "La présence de ballonnements post-prandiaux",
      "La survenue de symptômes nocturnes réveillant le patient, un amaigrissement inexpliqué, une anémie, des rectorragies ou un âge > 50 ans au début des troubles",
      "Le soulagement par l'émission de gaz",
      "L'anxiété associée",
      "Une ancienneté des troubles de plus de 10 ans sans aggravation"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Tout symptôme d'alarme (âge > 50 ans, saignement rectal, anémie, amaigrissement, survenue nocturne des douleurs ou selles, antécédents familiaux de cancer colorectal) impose formellement une coloscopie.",
    "clinicalPearl": "Signes d'alarme dans le SII : Âge > 50 ans, rectorragies, anémie, perte de poids, réveil nocturne, antécédents familiaux de cancer."
  },
  {
    "id": "q-sii-05",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel dosage fécal non invasif permet d'exclure une maladie inflammatoire chronique de l'intestin (Crohn ou RCH) chez un patient suspect de SII avec diarrhée ?",
    "options": [
      "L'élastase fécale",
      "La calprotectine fécale (taux normal < 50 µg/g)",
      "La stéatorrhée",
      "Le stercobilinogène",
      "Le pH fécal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Une calprotectine fécale normale (< 50 µg/g) a une valeur prédictive négative > 95% pour exclure une MICI active chez un patient présentant des troubles du transit d'allure fonctionnelle.",
    "clinicalPearl": "Calprotectine fécale normale = exclut une MICI (rassure en faveur d'un trouble fonctionnel SII)."
  },
  {
    "id": "q-sii-06",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel type de régime alimentaire d'épargne digestive réduisant les glucides à chaîne courte fermentescibles est efficace pour soulager les ballonnements et douleurs dans le SII ?",
    "options": [
      "Régime cétogène pur",
      "Régime pauvre en FODMAPs (Fermentable Oligosaccharides, Disaccharides, Monosaccharides and Polyols)",
      "Régime hypercalorique carné",
      "Régime sans résidu strict à vie",
      "Régime liquide exclusif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le régime pauvre en FODMAPs (fructose, lactose, fructanes, galactanes, polyols non absorbés qui fermentent et génèrent des gaz et un appel d'eau) réduit significativement les douleurs et le ballonnement chez 70% des patients.",
    "clinicalPearl": "Régime pauvre en FODMAPs : réduit la fermentation colique et la distension gazeuse chez les patients SII."
  },
  {
    "id": "q-sii-07",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel antispasmodique musculotrope à action directe sur le muscle lisse digestif est couramment prescrit pour soulager les spasmes douloureux du SII ?",
    "options": [
      "Le Mébévérine ou le Phloroglucinol ou le Citrate d'alvérine",
      "La Morphine",
      "L'Aspirine",
      "Le Furosémide",
      "L'Atropine à haute dose"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les antispasmodiques musculotropes (mébévérine, phloroglucinol, alvérine, pinavérium) détendent le muscle lisse colique sans effet anticholinergique central, soulageant les douleurs spasmodiques.",
    "clinicalPearl": "Traitement antispasmodique de 1ère ligne de la douleur du SII : Phloroglucinol, Mébévérine, Pinavérium."
  },
  {
    "id": "q-sii-08",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical est indiqué en première intention dans le sous-type de SII avec constipation prédominante (SII-C) ?",
    "options": [
      "Ralentisseurs du transit",
      "Laxatifs osmotiques (Macrogol / Polyéthylène glycol) et enrichissement progressif en fibres solubles (psyllium / ispaghul)",
      "Antibiotiques à large spectre",
      "Corticoïdes per os",
      "Lavement à l'eau oxygénée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le macrogol (laxatif osmotique non fermentescible) et les fibres solubles (ispaghul/psyllium) régulent le transit sans majorer les ballonnements, contrairement aux fibres insolubles (son de blé).",
    "clinicalPearl": "SII-C (constipation) : Macrogol et fibres solubles (ispaghul). Éviter le son de blé irritant."
  },
  {
    "id": "q-sii-09",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel ralentisseur du transit opioïde périphérique agoniste des récepteurs mu intestinaux est utilisé à la demande dans le SII à prédominance diarrhée (SII-D) ?",
    "options": [
      "Le Lopéramide",
      "La Codéine",
      "Le Méthadone",
      "Le Tramadol",
      "Le Fentanyl"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le lopéramide diminue le péristaltisme colique et augmente le tonus sphinctérien sans passer la barrière hémato-encéphalique, utilisé avec succès à la demande pour sécuriser les sorties dans le SII-D.",
    "clinicalPearl": "SII-D (diarrhée) : Lopéramide à la demande pour contrôler les selles impérieuses."
  },
  {
    "id": "q-sii-10",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle classe de psychotropes à faible dose (dose antalgique / régulatrice de l'axe intestin-cerveau, indépendante de l'effet antidépresseur) est efficace dans les formes réfractaires hyperalgiques de SII ?",
    "options": [
      "Neuroleptiques sédatifs",
      "Antidépresseurs tricycliques à faible dose (ex: Amitriptyline 10-25 mg/j) ou inhibiteurs de la recapture de la sérotonine (ISRS)",
      "Barbituriques",
      "Benzodiazépines fortes",
      "Lithium"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les antidépresseurs tricycliques à faible dose (ex: amitriptyline 10-25 mg au coucher) agissent comme modulateurs de la douleur centrale et diminuent l'hypersensibilité viscérale.",
    "clinicalPearl": "SII douloureux réfractaire : Tricycliques à faible dose (Amitriptyline 10-25 mg) = action antalgique viscérale."
  },
  {
    "id": "q-sii-11",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Qu'est-ce que le syndrome de l'intestin irritable post-infectieux (SII-PI) ?",
    "options": [
      "Une diarrhée à virus persistant",
      "La survenue d'un SII dans les semaines ou mois suivant un épisode documenté de gastro-entérite aiguë bactérienne ou virale sévère (Campylobacter, Salmonella, Shigella), favorisé par une micro-inflammation muqueuse persistante",
      "Une appendicite méconnue",
      "Une hépatite chronique",
      "Une péritonite torpide"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le SII post-infectieux survient chez 10 à 15% des patients après une gastro-entérite aiguë fébrile bactérienne, lié à une persistance d'une hyperperméabilité et d'une activation mastocytaire muqueuse.",
    "clinicalPearl": "SII post-infectieux : déclenché par une gastro-entérite bactérienne aiguë (persistance de micro-inflammation)."
  },
  {
    "id": "q-sii-12",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle approche psychothérapeutique non médicamenteuse a démontré un niveau de preuve élevé d'efficacité dans le SII réfractaire ?",
    "options": [
      "La cure psychanalytique de 10 ans",
      "L'hypnothérapie ciblée sur l'intestin (gut-directed hypnotherapy) et les thérapies cognitivo-comportementales (TCC)",
      "La sismothérapie",
      "L'isolement sensoriel",
      "La privation de sommeil"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hypnose médicale dirigée vers le tube digestif et les TCC améliorent durablement l'hypersensibilité viscérale et la qualité de vie en modulant les voies de transmission de l'axe cerveau-intestin.",
    "clinicalPearl": "Thérapies non pharmacologiques validées dans le SII : Hypnothérapie entérique et Thérapies Cognitivo-Comportementales (TCC)."
  },
  {
    "id": "q-sii-13",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel gaz produit exclusivement par des micro-organismes méthanogènes du microbiote colique (Methanobrevibacter smithii) lors du test respiratoire est corrélé au sous-type constipation (SII-C) ?",
    "options": [
      "Le méthane (CH4)",
      "L'hélium",
      "Le monoxyde de carbone",
      "L'argon",
      "Le radon"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La production excessive de méthane (CH4 au test respiratoire) exerce un effet neuro-moteur direct inhibiteur sur le péristaltisme colique, favorisant la constipation opiniâtre et les ballonnements.",
    "clinicalPearl": "Méthane élevé au test respiratoire = ralentissement moteur colique associé au SII avec constipation (SII-C)."
  },
  {
    "id": "q-sii-14",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans le SII, quelle caractéristique temporelle distingue les douleurs abdominales fonctionnelles d'une affection organique évolutive ?",
    "options": [
      "Elles réveillent systématiquement le patient en plein milieu de la nuit",
      "Elles sont diurnes, n'interrompent habituellement pas le sommeil nocturne, et s'exacerbent fréquemment lors des périodes de stress psychologique",
      "Elles sont constantes 24h sur 24 sans fluctuation",
      "Elles augmentent exclusivement pendant le sommeil",
      "Elles sont associées à une fièvre hectique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur du SII est typiquement diurne, rythmée par la veille et l'alimentation, ne réveillant pas le patient la nuit, avec une forte réactivité aux facteurs psycho-émotionnels.",
    "clinicalPearl": "Douleur du SII : strictement diurne, respecte le sommeil (une douleur nocturne est un signe d'alarme organique)."
  },
  {
    "id": "q-sii-15",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel antibiotique non absorbable à large spectre intraluminal a démontré une efficacité pour réduire les ballonnements et la diarrhée dans le SII sans constipation (notamment en cas de pullulation associée) ?",
    "options": [
      "La Rifaximine",
      "L'Amoxicilline",
      "La Gentamicine",
      "La Doxycycline",
      "La Vancomycine IV"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La rifaximine est un antibiotique à biodisponibilité systémique quasi-nulle agissant localement sur le microbiote luminal, efficace dans le SII-D pour réduire le météorisme et normaliser les selles.",
    "clinicalPearl": "Rifaximine (antibiotique non absorbable) : traitement du SII-D avec ballonnements (modulation du microbiote)."
  },
  {
    "id": "q-sii-16",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle proportion de la population générale adulte est approximativement touchée par le syndrome de l'intestin irritable dans les pays industrialisés ?",
    "options": [
      "Moins de 0,1%",
      "Environ 5 à 10% (avec une prédominance féminine nette)",
      "Plus de 85%",
      "Exactement 50%",
      "Moins de 1 sur 10 000"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le SII est un motif de consultation très fréquent en pratique générale et gastroentérologique, affectant 5 à 10% de la population avec un ratio de 2 femmes pour 1 homme.",
    "clinicalPearl": "Prévalence du SII = 5 à 10% de la population générale adulte (prédominance féminine 2F/1H)."
  },
  {
    "id": "q-sii-17",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la prise en charge d'un SII, quelle attitude médicale initiale est fondamentale pour établir une alliance thérapeutique efficace ?",
    "options": [
      "Dire au patient que 'c'est dans sa tête et qu'il n'a rien'",
      "Écouter, légitimer la réalité de la douleur physique, expliquer la physiopathologie (axe intestin-cerveau, hypersensibilité viscérale) et rassurer sur l'absence de risque néoplasique ou vital",
      "Multiplier indéfiniment les scanners et examens invasifs à chaque consultation",
      "Prescrire des antibiotiques à chaque crise",
      "Interdire tout aliment solide"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La reconnaissance de la souffrance bien réelle du patient, l'explication pédagogique des anomalies de motricité et de sensibilité sans banalisation péjorative, est la clé de voûte de la relation thérapeutique.",
    "clinicalPearl": "Relation médecin-malade : légitimer la douleur bien réelle, expliquer l'hypersensibilité viscérale, rassurer."
  },
  {
    "id": "q-sii-18",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle parasitose colique cosmopolite bénigne non hématophage doit être recherchée systématiquement par examen parasitologique des selles chez tout patient présentant une diarrhée fonctionnelle ?",
    "options": [
      "Blastocystis hominis ou Dientamoeba fragilis",
      "Ascaris lumbricoides",
      "Taenia solium",
      "Fasciola hepatica",
      "Echinococcus granulosus"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Blastocystis et Dientamoeba fragilis sont fréquemment retrouvés dans les selles et peuvent entretenir des symptômes similaires au SII.",
    "clinicalPearl": "EPS répété : éliminer parasitoses digestives chroniques avant d'étiqueter un SII."
  },
  {
    "id": "q-sii-19",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle plante médicinale riche en menthol dont l'huile essentielle micro-encapsulée possède des propriétés antispasmodiques et relaxantes sur le muscle lisse colique est validée par les méta-analyses ?",
    "options": [
      "L'huile essentielle de Menthe poivrée (Peppermint oil)",
      "Le millepertuis",
      "La sauge",
      "Le thym",
      "L'anis étoilé à haute dose"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'huile de menthe poivrée à libération entérique bloque les canaux calciques du muscle lisse intestinal et réduit significativement les douleurs spasmodiques du SII.",
    "clinicalPearl": "Huile de menthe poivrée micro-encapsulée : antispasmodique naturel validé dans le SII."
  },
  {
    "id": "q-sii-20",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Chez un patient de 25 ans présentant un tableau typique de SII-D sans aucun signe d'alarme, quel bilan biologique minimal est suffisant avant de poser le diagnostic ?",
    "options": [
      "NFS, CRP, sérologie cœliaque (anti-tTG IgA + IgA totales) et calprotectine fécale (ou EPS)",
      "Scanner TAP injecté, TEP-scan et cœlioscopie",
      "Artériographie et coloscopie immédiate",
      "Aucun examen, même pas de prise de sang",
      "Biopsie du foie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Chez le sujet jeune sans signe d'alarme, un bilan simple non invasif (NFS, CRP, anti-transglutaminase pour exclure la maladie cœliaque et calprotectine pour éliminer une MICI) suffit pour poser le diagnostic positif de SII.",
    "clinicalPearl": "Bilan minimal du SII chez le jeune sans alarme : NFS, CRP, sérologie cœliaque (anti-tTG), calprotectine fécale."
  },
  {
    "id": "q-sii-21",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle anomalie de défécation caractérisée par une contraction paradoxale du sphincter anal lors de la poussée défécatoire peut aggraver un SII avec constipation ?",
    "options": [
      "L'anisme (dyssynergie recto-sphinctérienne / asynchronisme abdomino-pelvien)",
      "L'incontinence anale passive",
      "La colectasie",
      "La rectite radique",
      "La sténose pylorique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'anisme est un dysfonctionnement du plancher pelvien (non-relaxation ou contraction paradoxale du sphincter strié lors de la poussée) responsable d'efforts de défécation inefficaces, rééduqué par biofeedback.",
    "clinicalPearl": "Dyssynergie recto-sphinctérienne (anisme) = constipation terminale d'évacuation (rééducation par biofeedback anorectal)."
  },
  {
    "id": "q-sii-22",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel agoniste des récepteurs guanylate cyclase C (ex: Linaclotide) ou agoniste 5-HT4 (Prucalopride) est indiqué dans les constipations sévères réfractaires du SII-C ?",
    "options": [
      "Le Linaclotide et le Prucalopride",
      "Le Lopéramide",
      "La Morphine",
      "Le Métoclopramide",
      "Le Dicarbocalm"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le linaclotide stimule la sécrétion luminale de chlorure et d'eau et diminue l'activité des nocicepteurs, améliorant à la fois le transit et la douleur dans le SII-C sévère.",
    "clinicalPearl": "SII-C sévère réfractaire : Linaclotide (sécrétagogue) ou Prucalopride (prokinétique 5-HT4)."
  },
  {
    "id": "q-sii-23",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la colopathie fonctionnelle, comment les gaz intestinaux sont-ils habituellement distribués par rapport à un sujet sain ?",
    "options": [
      "Le volume total de gaz est multiplié par 50",
      "Le volume total absolu de gaz n'est souvent pas augmenté, mais il existe un trouble de la propulsion et de l'évacuation des gaz associé à une réponse viscérale douloureuse anormale (hypersensibilité à la distension gazeuse)",
      "Il n'y a aucun gaz dans le tube digestif",
      "Les gaz sont exclusivement gastriques",
      "Les gaz provoquent une acidose respiratoire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Des études de pléthysmographie montrent que les patients avec SII n'ont pas forcément plus de gaz, mais tolèrent très mal les volumes physiologiques en raison d'un transit gazeux perturbé et de l'hypersensibilité viscérale.",
    "clinicalPearl": "Ballonnement du SII : hypersensibilité et mauvaise tolérance aux volumes gazeux physiologiques plutôt qu'excès absolu de gaz."
  },
  {
    "id": "q-sii-24",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle comorbidité extra-digestive douloureuse chronique est très fréquemment associée au syndrome de l'intestin irritable (partageant l'hypersensibilité centrale de la douleur) ?",
    "options": [
      "La fibromyalgie, le syndrome de fatigue chronique et le syndrome douloureux vésical (cystite interstitielle)",
      "La polyarthrite rhumatoïde séropositive",
      "L'hémochromatose génétique",
      "L'anévrisme de l'aorte",
      "Le glaucome à angle fermé"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le SII fait partie des syndromes de sensibilisation centrale somatique (overlap fréquent avec fibromyalgie, céphalées de tension, douleurs pelviennes chroniques, fatigue chronique et anxiété).",
    "clinicalPearl": "Comorbidités fonctionnelles associées au SII : Fibromyalgie, fatigue chronique, douleurs pelviennes, anxiété-dépression."
  },
  {
    "id": "q-sii-25",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Le pronostic à long terme du syndrome de l'intestin irritable :",
    "options": [
      "Évolue inévitablement vers un cancer colorectal",
      "Se complique de colectasie toxique",
      "Est bénin sur le plan vital sans surmortalité ni sur-risque de cancer colorectal ou de MICI, mais peut altérer profondément la qualité de vie",
      "Conduit à la résection intestinale",
      "Nécessite une stomie définitive"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le SII est une affection bénigne sans aucune surmortalité ni risque accru de cancérisation, mais dont l'impact sur la qualité de vie au quotidien peut être majeur.",
    "clinicalPearl": "Pronostic du SII : aucun risque de cancer ni surmortalité ; affection bénigne mais impactant la qualité de vie."
  },
  {
    "id": "q-cas-sii-1",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Une jeune femme de 26 ans, cadre commerciale, consulte pour des douleurs abdominales quotidiennes évoluant depuis 8 mois, prédominant dans la fosse iliaque gauche et le bas-ventre, à type de spasmes et crampes. Elle rapporte que la douleur s'accentue dans les moments de stress professionnel, est soulagée de manière significative par l'émission de selles ou de gaz, et s'accompagne d'un ballonnement abdominal inconfortable augmentant au fil de la journée. Son transit comporte 4 à 5 selles molles ou liquides chaque matin, souvent impérieuses avec débris alimentaires visibles, mais elle n'a jamais de selles la nuit et ne présente aucune rectorragie. Son poids est stable. L'examen abdominal et ano-rectal est strictement normal. Le bilan biologique (NFS, CRP, TSH, anticorps anti-transglutaminase IgA, calprotectine fécale) est strictement normal. Quel diagnostic retenez-vous selon les critères de Rome IV ?",
    "options": [
      "Maladie de Crohn colique débutante",
      "Syndrome de l'intestin irritable à prédominance diarrhée (SII-D / colopathie fonctionnelle)",
      "Colite ischémique chronique",
      "Adénocarcinome du côlon gauche",
      "Insuffisance surrénalienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le tableau remplit parfaitement les critères de Rome IV (douleur récurrente > 3 mois, soulagée par la défécation, associée à une modification de consistance des selles liquides). L'absence de signe d'alarme, le respect de la nuit et la normalité de la CRP, des anti-tTG et de la calprotectine fécale confirment le diagnostic de SII-D sans nécessité de coloscopie chez cette patiente jeune.",
    "clinicalPearl": "Sujet jeune + douleurs rythmées par les selles + bilan biologique/calprotectine normaux = SII sans coloscopie."
  },
  {
    "id": "q-cas-sii-2",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Chez cette même patiente de 26 ans avec SII-D invalidant, quelle prise en charge thérapeutique de première ligne combinant mesures diététiques et pharmacologiques est la plus appropriée ?",
    "options": [
      "Corticothérapie orale par prednisone 40 mg/j",
      "Explication rassurante de la maladie, conseils diététiques avec essai de réduction des FODMAPs, prescription d'un antispasmodique musculotrope (Mébévérine ou Phloroglucinol) avant les repas et Lopéramide à la demande en cas d'impériosité",
      "Antibiotiques à large spectre par voie intraveineuse pendant 3 semaines",
      "Résection chirurgicale du côlon sigmoïde",
      "Jeûne complet prolongé"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement initial associe éducation thérapeutique rassurante, ajustements diététiques (réduction des FODMAPs), antispasmodique pour les douleurs spasmodiques et ralentisseur du transit (lopéramide) à la demande pour sécuriser les épisodes diarrhéiques.",
    "clinicalPearl": "Prise en charge du SII-D : réassurance + régime pauvre en FODMAPs + antispasmodiques + lopéramide à la demande."
  },
  {
    "id": "q-cas-sii-3",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Un homme de 54 ans sans antécédent médical consulte car il présente depuis 2 mois des douleurs abdominales en cadre et une modification récente de son transit intestinal habituel avec apparition d'une constipation opiniâtre entrecoupée de fausses diarrhées. Il signale un amaigrissement récent involontaire de 4 kg et la présence occasionnelle de traces de sang rouge foncé mélangées aux selles. L'examen physique retrouve une sensibilité du flanc gauche. La formule sanguine montre une anémie microcytaire (Hb 10,5 g/dL, VGM 74 fL). Pourquoi ce patient ne doit-il SURTOUT PAS être étiqueté comme une simple colopathie fonctionnelle ?",
    "options": [
      "Parce que les hommes ne peuvent pas faire de colopathie fonctionnelle",
      "Parce qu'il présente plusieurs signes d'alarme majeurs (âge de début > 50 ans, modification récente du transit, rectorragies, anémie et perte de poids) imposant formellement la réalisation d'une coloscopie totale pour éliminer un cancer colorectal",
      "Parce que le scanner est formellement interdit",
      "Parce que ses douleurs ne sont pas soulagées par les gaz",
      "Parce qu'il s'agit d'une appendicite aiguë"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'apparition de troubles du transit après 50 ans avec rectorragies, anémie ferriprive et perte de poids est hautement suspecte d'un adénocarcinome colorectal sténosant : la coloscopie totale en urgence est obligatoire, le diagnostic de SII ne pouvant jamais être posé en présence de signes d'alarme.",
    "clinicalPearl": "Troubles du transit d'apparition récente après 50 ans + anémie/saignement = Coloscopie totale obligatoire (éliminer cancer colorectal)."
  },
  {
    "id": "q-cas-sii-4",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Une femme de 34 ans suivie pour SII avec constipation sévère (SII-C) réfractaire aux mesures hygiéno-diététiques et aux laxatifs osmotiques classiques (PEG) se plaint de douleurs abdominales quotidiennes majeures et d'un ballonnement très pénible avec moins d'une selle par semaine. Elle n'a aucun signe d'alarme et la coloscopie réalisée à 30 ans était normale. Quel agoniste des récepteurs guanylate cyclase-C spécifique du tube digestif peut être prescrit en deuxième ligne dans cette forme sévère ?",
    "options": [
      "Le Linaclotide",
      "Le Lopéramide",
      "L'Oméprazole",
      "L'Azathioprine",
      "Le Métronidazole"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le linaclotide stimule la sécrétion de chlorure et d'eau dans la lumière intestinale et inhibe la sensibilité des fibres nociceptives coliques, indiqué dans le SII avec constipation modéré à sévère résistant aux laxatifs de première ligne.",
    "clinicalPearl": "SII-C sévère résistant aux laxatifs osmotiques = Linaclotide (agoniste guanylate cyclase C)."
  },
  {
    "id": "q-cas-sii-5",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Une patiente de 29 ans, très anxieuse, atteinte d'un SII douloureux chronique depuis 3 ans, se plaint d'une altération sévère de sa qualité de vie en raison de douleurs quotidiennes invalidantes réfractaires à tous les antispasmodiques et aux mesures diététiques. Elle présente également des céphalées de tension et des douleurs musculaires diffuses d'allure fibromyalgique. Quel traitement pharmacologique d'action centrale ciblant l'axe cerveau-intestin peut lui être proposé à faible dose ?",
    "options": [
      "Morphine injectable continue",
      "Antidépresseur tricyclique à très faible dose (Amitriptyline 10 à 25 mg par jour au coucher)",
      "Corticoïdes par voie générale",
      "Chirurgie de colectomie totale de confort",
      "Lavement baryté hebdomadaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les antidépresseurs tricycliques à faible dose (ex: amitriptyline 10 à 25 mg le soir) exercent une action neuromodulatrice centrale et périphérique diminuant l'hypersensibilité viscérale et le traitement de la douleur par le système nerveux central, indépendamment de tout effet antidépresseur.",
    "clinicalPearl": "Douleur viscérale chronique réfractaire du SII : Amitriptyline à faible dose (10-25 mg/j) au coucher."
  }
];

export const COLOPATHIE_FONCTIONNELLE_RESOURCES: CourseResource[] = [
  {
    "id": "res-sii-summary",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Syndrome de l’Intestin Irritable (SII)",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Syndrome de l'Intestin Irritable (SII)\n- **Définition (Rome IV)** : Douleur abdominale récurrente >= 1 j/semaine depuis 3 mois (début > 6 mois), associée à >= 2 critères :\n  1. En relation avec la défécation.\n  2. Associée à une modification de la fréquence des selles.\n  3. Associée à une modification de la consistance (aspect) des selles (Échelle de Bristol).\n- **Sous-types (Bristol)** : SII-C (constipation), SII-D (diarrhée), SII-M (mixte/alternant), SII-I (inclassable).\n- **Physiopathologie** : Hypersensibilité viscérale (trouble central), dysmotilité, micro-inflammation muqueuse (SII post-infectieux), altération de l'axe intestin-cerveau, dysbiose.\n- **Signes d'Alarme (imposant coloscopie)** : Début > 50 ans, rectorragies, anémie, amaigrissement, réveil nocturne, antécédents familiaux de cancer colorectal.\n- **Prise en charge** :\n  - *Diététique* : Réduction des FODMAPs, éviction des excitants.\n  - *Médicamenteux* :\n    - Douleurs/spasmes : Antispasmodiques musculotropes (Mébévérine, Phloroglucinol), huile de menthe poivrée.\n    - SII-C : Macrogol, fibres solubles (psyllium), Linaclotide si réfractaire.\n    - SII-D : Lopéramide à la demande.\n    - Formes sévères douloureuses : Amitriptyline faible dose (10-25 mg/j), hypnose entérique, TCC.",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-sii-pearls",
    "courseId": "crs-gastro-colopathie-fonctionnelle",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Syndrome de l'Intestin Irritable",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Règle absolue** : Jamais de diagnostic de SII en présence d'un signe d'alarme (âge > 50 ans, sang, anémie, perte de poids, selles nocturnes) sans coloscopie complète.\n- ⚡ **Calprotectine fécale** : normale = exclut une MICI (Crohn/RCH) avec une excellente VPP.\n- ⚡ **Douleur nocturne** : une douleur qui réveille la nuit n'est PAS un SII (chercher une cause organique).",
    "author": "Commission Pédagogique"
  }
];
