import { Question, CourseResource } from '../../types/medical';

export const PANCREATITE_CHRONIQUE_QUESTIONS: Question[] = [
  {
    "id": "q-panc-chr-01",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est de très loin la première cause étiologique de pancréatite chronique dans les pays occidentaux et industrialisés (responsable de 70 à 85% des cas) ?",
    "options": [
      "La lithiase biliaire",
      "La consommation chronique et prolongée d'alcool (éthylisme chronique > 10 à 15 ans)",
      "La mucoviscidose",
      "L'hyperparathyroïdie primitive",
      "L'auto-immunité"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'alcoolisme chronique (consommation > 80-100 g/j pendant au moins 10-15 ans), potentialisé par le tabagisme, est responsable de plus de 80% des pancréatites chroniques de l'adulte.",
    "clinicalPearl": "Pancréatite chronique : 1ère cause = Alcoolisme chronique (> 80%) potentialisé par le tabac. (Rappel : la lithiase biliaire ne donne PAS de pancréatite chronique !)."
  },
  {
    "id": "q-panc-chr-02",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la pancréatite chronique évoluée, quelle triade clinique et paraclinique classique caractérise la destruction complète du parenchyme pancréatique ?",
    "options": [
      "Ascite, ictère et hématémèse",
      "Douleur épigastrique solaire, Insuffisance pancréatique exocrine (stéatorrhée avec maldigestion des graisses) et Insuffisance endocrine (diabète sucré insulinoprive)",
      "Fièvre, frissons et splénomégalie",
      "Arthrite, uvéite et érythème",
      "Dyspnée, toux et hémoptysie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'évolution naturelle de la PC se fait vers la destruction du tissu glandulaire : la douleur initiale fait progressivement place à l'insuffisance exocrine (stéatorrhée) et à l'insuffisance endocrine (diabète sucré).",
    "clinicalPearl": "Triade clinique PC évoluée = Douleur épigastrique + Insuffisance exocrine (stéatorrhée) + Diabète secondaire (insuffisance endocrine)."
  },
  {
    "id": "q-panc-chr-03",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie radiologique élémentaire pathognomonique de la pancréatite chronique calcifiante est facilement visualisée sur l'abdomen sans préparation (ASP) ou le scanner ?",
    "options": [
      "Des adénopathies calcifiées médiastinales",
      "Des calcifications pancréatiques diffuses projetées en regard de L1-L2",
      "Une aérobilie",
      "Un pneumopéritoine",
      "Un niveau hydro-aérique gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La présence de calcifications parenchymateuses et canalaires pancréatiques au scanner ou à l'ASP affirme le diagnostic de pancréatite chronique calcifiante.",
    "clinicalPearl": "Calcifications pancréatiques sur l'aire pancréatique (L1-L2) = Pathognomonique de Pancréatite Chronique."
  },
  {
    "id": "q-panc-chr-04",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen non invasif d'imagerie en coupes est l'examen de référence pour poser le diagnostic de pancréatite chronique, apprécier les canaux et rechercher les complications ?",
    "options": [
      "Le scanner thoraco-abdomino-pelvien avec injection et la bili-IRM avec séquence de pancréatographie (Wirsungo-IRM / CPRM)",
      "Le transit baryté de l'œsophage",
      "L'échographie cardiaque",
      "La scintigraphie osseuse",
      "L'urographie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le scanner avec injection et la Wirsungo-IRM (CPRM avec test à la sécrétine) sont les examens de référence pour visualiser les calcifications, les irrégularités canalaires (dilatations/sténoses du Wirsung) et les pseudokystes.",
    "clinicalPearl": "Imagerie de référence PC = Scanner abdominal avec injection et Wirsungo-IRM."
  },
  {
    "id": "q-panc-chr-05",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel test biologique non invasif sur les selles est le meilleur marqueur de routine pour diagnostiquer une insuffisance pancréatique exocrine ?",
    "options": [
      "Le dosage de l'élastase-1 fécale (valeur effondrée < 200 µg/g de selles)",
      "La coproculture bactériologique",
      "Le dosage de l'albumine fécale",
      "La recherche de sang occulte dans les selles",
      "Le pH des selles"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'élastase-1 fécale n'est pas dégradée au cours du transit digestif. Un taux < 200 µg/g confirme une insuffisance exocrine (sévère si < 100 µg/g), avec l'avantage de ne pas nécessiter l'interruption des extraits pancréatiques oraux.",
    "clinicalPearl": "Insuffisance pancréatique exocrine : Élastase-1 fécale < 200 µg/g de selles (test non invasif de choix)."
  },
  {
    "id": "q-panc-chr-06",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication kystique fréquente (observée dans 20 à 40% des cas de PC) correspond à une collection liquidienne riche en enzymes pancréatiques dépourvue de revêtement épithélial propre ?",
    "options": [
      "Le pseudokyste du pancréas",
      "Le cystadénome mucineux",
      "La tumeur intracanalaire papillaire et mucineuse (TIPMP)",
      "Le kyste hydatique",
      "Le kyste dermoïde"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le pseudokyste pancréatique est une collection de suc pancréatique pur et nécrose délimitée par une coque fibreuse réactionnelle non épithélialisée, survenant après une poussée aiguë ou une rupture canalaire.",
    "clinicalPearl": "Pseudokyste pancréatique = Collection de suc pancréatique délimitée par une coque fibreuse sans paroi épithéliale."
  },
  {
    "id": "q-panc-chr-07",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge d'un pseudokyste pancréatique de plus de 5-6 cm, symptomatique ou compressif, persistant plus de 6 semaines, quelle technique de drainage de première intention mini-invasive est aujourd'hui privilégiée ?",
    "options": [
      "La laparotomie d'exérèse systématique",
      "Le drainage endoscopique transmural (kysto-gastrostomie ou kysto-duodénostomie sous écho-endoscopie avec pose de prothèse)",
      "La ponction simple à l'aveugle",
      "L'abstention sans contrôle",
      "La radiothérapie locale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le drainage transmural sous guidage écho-endoscopique (kysto-gastrostomie avec pose d'une prothèse d'apposition luminale ou de queue de cochon) est la méthode de choix, plus efficace et moins morbide que la chirurgie.",
    "clinicalPearl": "Pseudokyste symptomatique persistant > 6 semaines = Kysto-gastrostomie endoscopique sous écho-endoscopie."
  },
  {
    "id": "q-panc-chr-08",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication vasculaire veineuse par contiguïté inflammatoire péri-pancréatique peut être responsable d'une hypertension portale segmentaire gauche (varices cardio-tubérositaires avec foie normal) ?",
    "options": [
      "La thrombose de la veine rénale droite",
      "La thrombose de la veine splénique",
      "La thrombose de l'aorte thoracique",
      "L'anévrysme de l'artère sous-clavière",
      "L'occlusion de la veine fémorale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La veine splénique chemine au contact de la face postérieure du pancréas. Sa compression ou thrombose dans la PC entraîne une HTP segmentaire avec splénomégalie et varices gastriques fundiques isolées.",
    "clinicalPearl": "Thrombose de la veine splénique dans la PC = Hypertension portale segmentaire gauche avec varices fundiques."
  },
  {
    "id": "q-panc-chr-09",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical de substitution est prescrit lors des repas pour corriger la stéatorrhée et la dénutrition dans l'insuffisance pancréatique exocrine ?",
    "options": [
      "Les inhibiteurs de la pompe à protons en monothérapie sans rien d'autre",
      "Les extraits pancréatiques gastro-protégés riches en lipase (Créon, Eurobiol) administrés pendant les repas, souvent associés à un IPP",
      "L'insuline sous-cutanée seule",
      "Les laxatifs osmotiques",
      "Les corticoïdes oraux"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement repose sur l'opothérapie enzymatique substitutive par extraits pancréatiques sous forme de microgranules gastrorésistantes (Créon) prises au milieu des repas, dosées en fonction de l'apport en lipides.",
    "clinicalPearl": "Insuffisance pancréatique exocrine = Extraits pancréatiques oraux (Créon) pris pendant les repas (+/- IPP)."
  },
  {
    "id": "q-panc-chr-10",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel type de diabète secondaire (classification étiologique du diabète) est induit par la destruction progressive des îlots de Langerhans dans la pancréatite chronique ?",
    "options": [
      "Diabète de type 1 auto-immun",
      "Diabète de type 2 métabolique",
      "Diabète pancréatoprive (ou diabète de type 3c)",
      "Diabète gestationnel",
      "Diabète MODY"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le diabète secondaire à une maladie pancréatique exocrine est appelé diabète pancréatoprive ou type 3c. Il associe un déficit en insuline ET en glucagon, ce qui le rend particulièrement instable avec un risque majeur d'hypoglycémies sévères.",
    "clinicalPearl": "Diabète pancréatoprive (type 3c) = Perte d'insuline et de glucagon -> Diabète 'maigre' instable à haut risque d'hypoglycémie."
  },
  {
    "id": "q-panc-chr-11",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle forme particulière de pancréatite chronique fibro-inflammatoire auto-immune est caractérisée par une infiltration lymphoplasmocytaire riche en plasmocytes IgG4, un aspect de pancréas hypertrophié en « saucisse » au scanner et une spectaculaire sensibilité aux corticoïdes ?",
    "options": [
      "La pancréatite auto-immune (PAI) de type 1 (maladie systémique à IgG4)",
      "La pancréatite alcoolique",
      "La pancréatite héréditaire",
      "La pancréatite lithiasique",
      "La mucoviscidose"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La pancréatite auto-immune type 1 (IgG4-related disease) se manifeste par un ictère obstructif pseudo-tumoral, une élévation des IgG4 sériques, un aspect radiologique de pancréas tuméfié en 'saucisse' avec halo péri-pancréatique, et répond spectaculairement à la corticothérapie.",
    "clinicalPearl": "Pancréatite auto-immune (PAI) à IgG4 : aspect en saucisse au scanner, élévation des IgG4 sériques, guérit sous Corticoïdes."
  },
  {
    "id": "q-panc-chr-12",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle mutation génétique transmise sur un mode autosomique dominant avec pénétrance de 80% est responsable de la pancréatite chronique héréditaire débutant dès l'enfance et comportant un risque cumulé majeur de cancer du pancréas (jusqu'à 40%) ?",
    "options": [
      "La mutation du gène du trypsinogène cationique (PRSS1)",
      "La mutation du gène de la mucoviscidose (CFTR)",
      "La mutation du gène SPINK1",
      "La mutation APC",
      "La mutation RET"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La pancréatite chronique héréditaire est due à une mutation gain de fonction du gène PRSS1 (trypsinogène résistant à l'inactivation). Elle débute dans l'enfance et confère un risque de cancer du pancréas multiplié par 50.",
    "clinicalPearl": "Pancréatite héréditaire = Mutation PRSS1 (autosomique dominant, début enfance, risque majeur d'adénocarcinome pancréatique)."
  },
  {
    "id": "q-panc-chr-13",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle mesure thérapeutique comportementale est indispensable, prioritaire et non négociable dès le diagnostic de pancréatite chronique pour ralentir la progression de la fibrose et prévenir les poussées aiguës ?",
    "options": [
      "L'arrêt total, définitif et complet de toute consommation d'alcool ET l'arrêt complet du tabac",
      "Un régime végétarien strict",
      "L'exercice physique quotidien intensif",
      "La prise de compléments en calcium",
      "L'éviction du gluten"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le sevrage alcoolique et tabagique complet est le socle absolu du traitement : le tabac est un co-facteur toxique indépendant majeur qui accélère la survenue des calcifications, de l'insuffisance exocrine et du cancer.",
    "clinicalPearl": "Traitement de base de la PC = Sevrage alcoolique ET tabagique complet et définitif."
  },
  {
    "id": "q-panc-chr-14",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication hémorragique cataclysmique par érosion d'un vaisseau péripancréatique (souvent l'artère splénique ou gastro-duodénale) par un pseudokyste ou l'inflammation pancréatique doit être traitée en urgence par embolisation artérielle ?",
    "options": [
      "La rupture d'un faux-anévrysme (pseudo-anévrysme) artériel avec hémorragie intrakystique ou dans le canal de Wirsung (wirsungorragie)",
      "La colite ischémique",
      "La rupture de varices œsophagiennes",
      "L'hémoptysie",
      "L'épistaxis postérieure"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'érosion d'une artère péri-pancréatique crée un pseudo-anévrysme artériel qui peut se rompre dans un pseudokyste ou dans le Wirsung (wirsungorragie). L'angio-scanner suivi d'une embolisation radiologique par coils est le traitement d'urgence.",
    "clinicalPearl": "Hémorragie par pseudo-anévrysme artériel dans la PC = Embolisation radiologique percutanée en urgence."
  },
  {
    "id": "q-panc-chr-15",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel signe clinique typique caractérise la douleur d'une poussée aiguë sur pancréatite chronique ou la douleur chronique ?",
    "options": [
      "Douleur épigastrique intense, transfixiante irradiant droit dans le dos en regard de D12-L1, exacerbée par l'alimentation, calmée par la position penchée en avant ou en 'chien de fusil'",
      "Douleur de la fosse iliaque droite calmée par la marche",
      "Douleur hypogastrique rythmée par la miction",
      "Prurit anal nocturne",
      "Brûlure rétrosternale postprandiale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La douleur pancréatique est épigastrique, à irradiation postérieure transfixiante dorsale, majorée par la prise alimentaire ou l'alcool, et soulagée de façon caractéristique par l'antéflexion du tronc (position en chien de fusil).",
    "clinicalPearl": "Douleur pancréatique = Épigastrique transfixiante dorsale, soulagée par la position en chien de fusil / antéflexion."
  },
  {
    "id": "q-panc-chr-16",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication compressive digestive de contiguïté peut être induite par la fibrose inflammatoire de la tête pancréatique dans la PC ?",
    "options": [
      "Une sténose duodénale mécanique (avec vomissements postprandiaux précoces et intolérance alimentaire)",
      "Une sténose de la jonction rectosigmoïdienne",
      "Une achalasie du sphincter supérieur de l'œsophage",
      "Une fistule jéjunale",
      "Un volvulus gastrique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La gangue fibreuse céphalique peut comprimer le deuxième duodénum (D2), entraînant un tableau d'occlusion haute avec stase gastrique et vomissements postprandiaux.",
    "clinicalPearl": "Complications compressives céphaliques de la PC : Sténose du cholédoque (ictère) et Sténose duodénale (vomissements)."
  },
  {
    "id": "q-panc-chr-17",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel geste chirurgical de dérivation canalaire est indiqué chez un patient ayant une pancréatite chronique très douloureuse avec un canal de Wirsung largement dilaté (> 6-7 mm) sur toute sa longueur en amont d'un obstacle non franchissable ?",
    "options": [
      "L'anastomose wirsungo-jéjunale sur anse en Y (intervention de Partington-Rochelle ou de Puestow)",
      "Une transplantation rénale",
      "Une appendicectomie",
      "Une sleeve gastrectomie",
      "Une colectomie totale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'anastomose wirsungo-jéjunale latéro-latérale décomprime l'hyperpression canalaire d'amont et procure un soulagement antalgique durable lorsque le canal est dilaté > 6 mm.",
    "clinicalPearl": "Wirsung dilaté > 6-7 mm très douloureux = Anastomose wirsungo-jéjunale latéro-latérale (dérivation chirurgicale)."
  },
  {
    "id": "q-panc-chr-18",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge de la douleur chronique rebelle de la pancréatite chronique, quelle intervention d'analgésie interventionnelle peut être proposée en cas d'échec des paliers antalgiques ?",
    "options": [
      "La neurolyse (ou infiltration) du plexus cœliaque sous guidage écho-endoscopique ou scannographique",
      "Une sympathectomie lombaire",
      "Une lobectomie cérébrale",
      "Une ponction lombaire itérative",
      "Une résection de la rate"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'alcoolisation ou la neurolyse du plexus cœliaque guidée par écho-endoscopie interrompt les voies nociceptives splanchniques et soulage temporairement la douleur chez les patients réfractaires.",
    "clinicalPearl": "Douleur rebelle PC = Neurolyse du plexus cœliaque sous écho-endoscopie."
  },
  {
    "id": "q-panc-chr-19",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Qu'est-ce que l'épanchement pleural ou l'ascite pancréatique au cours de la PC ?",
    "options": [
      "Un épanchement réactionnel riche en amylase (> plusieurs milliers d'UI/L) consécutif à la rupture d'un canal pancréatique ou d'un pseudokyste avec fistulisation interne péritonéale ou médiastino-pleurale",
      "Un hémothorax traumatique",
      "Un empyème tuberculeux",
      "Un transsudat cardiaque",
      "Une pleurésie à éosinophiles"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La fistule pancréato-pleurale ou pancréato-péritonéale donne un épanchement séro-hémorragique abondant et récidivant caractérisé par un taux massif d'amylase (> 10 000 UI/L).",
    "clinicalPearl": "Ascite ou pleurésie pancréatique = Rupture de canal / fistule interne avec taux d'AMYLASE très élevé dans le liquide."
  },
  {
    "id": "q-panc-chr-20",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel facteur de risque surajouté décuple le risque de survenue d'un adénocarcinome canalaire du pancréas chez un patient atteint de PC alcoolique ?",
    "options": [
      "Le tabagisme chronique persistant",
      "La consommation de thé vert",
      "Le port de lunettes",
      "L'exercice modéré",
      "Le régime pauvre en sel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le tabagisme est un carcinogène majeur pour le pancréas : chez le patient ayant une pancréatite chronique, la poursuite du tabac multiplie de façon synergique par plus de 15 à 30 le risque de cancer du pancréas.",
    "clinicalPearl": "Tabagisme dans la PC = Synergie carcinogène majeure multipliant le risque de cancer du pancréas."
  },
  {
    "id": "q-panc-chr-21",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie des enzymes hépatiques retrouve-t-on souvent au cours de la PC compliquée de compression du bas cholédoque par fibrose céphalique ?",
    "options": [
      "Une cholestase anictérique ou ictérique avec élévation chronique des phosphatases alcalines et gamma-GT",
      "Une cytolyse aiguë à 50N",
      "Une élévation exclusive de l'albumine",
      "Une chute de la ferritine",
      "Une chute du cholestérol"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La sténose du bas cholédoque intrapancréatique induite par la fibrose céphalique se manifeste par une cholestase biologique (PAL et GGT élevées) pouvant évoluer vers un ictère obstructif et une cirrhose biliaire secondaire.",
    "clinicalPearl": "Sténose de la voie biliaire principale dans la PC = Cholestase biologique (PAL, GGT élevées) +/- Ictère."
  },
  {
    "id": "q-panc-chr-22",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause génétique de pancréatite chronique à transmission autosomique récessive est liée à des mutations du gène CFTR codant pour le canal chlore régulateur de conductance transmembranaire ?",
    "options": [
      "La mucoviscidose (et affections associées à CFTR)",
      "La maladie de Gaucher",
      "La glycogénose type II",
      "La drépanocytose",
      "L'hémophilie A"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les mutations de CFTR provoquent une déshydratation et une viscosité anormale des sécrétions pancréatiques, induisant une obstruction canalaire précoce et une atrophie pancréatique fibreuse.",
    "clinicalPearl": "Mutations CFTR = Mucoviscidose et pancréatites récurrentes par viscosité anormale du suc pancréatique."
  },
  {
    "id": "q-panc-chr-23",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'évaluation nutritionnelle d'un patient ayant une pancréatite chronique avec stéatorrhée, quelles vitamines doivent être dosées et supplémentées systématiquement ?",
    "options": [
      "Les vitamines liposolubles A, D, E, K (avec surveillance du TP pour la vitamine K et de la calcémie/densitométrie osseuse pour la vitamine D)",
      "La vitamine C seule",
      "L'acide folique en monothérapie",
      "La biotine",
      "Le magnésium seul"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La maldigestion lipidique entraîne une fuite fécale des vitamines solubles dans les graisses (A, D, E, K), exposant à l'ostéoporose/ostéomalacie (carence vit D), aux troubles de l'hémostase (vit K) et aux neuropathies (vit E).",
    "clinicalPearl": "Insuffisance exocrine PC = Carence en vitamines liposolubles (A, D, E, K) et dénutrition -> Ostéoporose fréquente."
  },
  {
    "id": "q-panc-chr-24",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen non invasif d'imagerie par ultrasons haute résolution sous sédation est particulièrement sensible pour détecter les signes précoces de PC débutante (lobularité, foyers hyperéchogènes, parois canalaires irrégulières) avant l'apparition des calcifications franches ?",
    "options": [
      "L'écho-endoscopie bilio-pancréatique",
      "L'échographie de la thyroïde",
      "Le doppler transcrânien",
      "La cystoscopie",
      "La mammographie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'écho-endoscopie est l'examen le plus sensible pour dépister les stades débutants de pancréatite chronique grâce aux critères de Rosemont (parenchymateux et canalaires) avant que les calcifications ne soient visibles au scanner.",
    "clinicalPearl": "Écho-endoscopie = Examen le plus sensible pour les formes débutantes de pancréatite chronique (critères de Rosemont)."
  },
  {
    "id": "q-panc-chr-25",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge de la stéatorrhée par extraits pancréatiques (Créon), que faut-il faire si l'efficacité sur la diarrhée graisseuse reste insuffisante malgré des doses adéquates d'enzymes ?",
    "options": [
      "Arrêter les enzymes",
      "Adjoindre un inhibiteur de la pompe à protons (IPP) pour neutraliser l'acidité gastrique et éviter l'inactivation de la lipase dans leodénum",
      "Donner des laxatifs",
      "Diminuer les apports alimentaires",
      "Prescrire un diurétique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La lipase est dénaturée par un pH acide < 4. Chez le patient ayant une PC avec baisse de sécrétion de bicarbonate, l'adjonction d'un IPP préserve l'activité enzymatique dans le duodénum.",
    "clinicalPearl": "Échec des extraits pancréatiques : Ajouter un IPP pour protéger la lipase de l'acidité gastrique."
  },
  {
    "id": "cas-panc-chr-01",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 47 ans, maçon, grand consommateur d'alcool (80 g/jour depuis 20 ans) et tabagique actif (30 PA), consulte pour des douleurs épigastriques récidivantes très intenses survenant par crises de 24 à 48 heures, irradiant dans le dos et soulagées lorsque le patient s'assoit en chien de fusil. Il a perdu 6 kg en 6 mois. L'abdomen sans préparation (ASP) et le scanner abdominal montrent de multiples calcifications réparties sur l'ensemble de l'aire pancréatique avec dilatation modérée du canal de Wirsung à 5 mm. Quel diagnostic posez-vous ?",
    "options": [
      "Cancer gastrique ulcéré",
      "Pancréatite chronique calcifiante d'origine alcoolique",
      "Ulcère duodénal perforé",
      "Lithiase vésiculaire symptomatique",
      "Infarctus mésentérique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le terrain (alcool/tabac), la douleur solaire soulagée par l'antéflexion et la présence de calcifications pancréatiques diffuses au scanner affirment le diagnostic de pancréatite chronique calcifiante.",
    "clinicalPearl": "Calcifications pancréatiques + Douleurs épigastriques transfixiantes chez un alcoolo-tabagique = Pancréatite chronique calcifiante."
  },
  {
    "id": "cas-panc-chr-02",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle mesure thérapeutique indispensable, prioritaire et non négociable devez-vous impérativement obtenir du patient pour stopper l'évolution destructrice de sa maladie ?",
    "options": [
      "Un régime sans résidu",
      "L'arrêt total et définitif de l'alcool ET du tabac, avec prise en charge addictologique",
      "La prescription d'un traitement anticoagulant",
      "Une antibiothérapie au long cours",
      "La chirurgie bariatrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le sevrage alcoolique et tabagique complet est le seul traitement étiologique prouvé ralentissant la perte fonctionnelle parenchymateuse et diminuant la fréquence des poussées douloureuses et le risque néoplasique.",
    "clinicalPearl": "Socle thérapeutique de la PC : Sevrage alcoolique ET tabagique complet et définitif."
  },
  {
    "id": "cas-panc-chr-03",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Trois ans plus tard, le patient se plaint d'une diarrhée chronique faite de 3 à 5 selles volumineuses par jour, flottantes, très malodorantes, huileuses et difficiles à évacuer. Il a une glycémie à jeun mesurée à 8,2 mmol/L (1,48 g/L). Le dosage de l'élastase-1 fécale revient effondré à 35 µg/g de selles (< 200 µg/g). Que traduisent ces nouvelles manifestations ?",
    "options": [
      "Une hépatite alcoolique suraiguë",
      "L'installation du stade d'insuffisance pancréatique exocrine (stéatorrhée) et d'insuffisance endocrine (diabète pancréatoprive)",
      "Une maladie cœliaque surajoutée",
      "Une colite pseudomembraneuse",
      "Un syndrome de Zollinger-Ellison"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La destruction glandulaire au cours du temps aboutit aux 2 défaillances fonctionnelles : l'insuffisance exocrine (stéatorrhée avec élastase fécale effondrée) et l'insuffisance endocrine (diabète sucré de type 3c).",
    "clinicalPearl": "Élastase fécale < 100-200 µg/g + Selles graisseuses + Diabète = Insuffisance pancréatique exocrine et endocrine."
  },
  {
    "id": "cas-panc-chr-04",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel traitement médical de l'insuffisance pancréatique exocrine devez-vous instaurer pour corriger sa stéatorrhée et stabiliser son état nutritionnel ?",
    "options": [
      "Régime sans graisse strict absolu sans médicament",
      "Opothérapie substitutive par extraits pancréatiques gastro-protégés riches en lipase (Créon) pris au milieu de chaque repas et collation",
      "Laxatifs stimulants",
      "Insuline rapide seule",
      "Antibiotiques intestinaux"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement repose sur l'apport d'enzymes pancréatiques (lipase) sous forme de gélules gastrorésistantes prises per os pendant les repas (environ 40 000 à 50 000 unités de lipase par repas principal).",
    "clinicalPearl": "Stéatorrhée de la PC = Extraits pancréatiques oraux (Créon) pris pendant les repas."
  },
  {
    "id": "cas-panc-chr-05",
    "courseId": "crs-gastro-pancreatite-chronique",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Lors d'un scanner de surveillance, on découvre dans l'arrière-cavité des épiploons une collection liquidienne homogène ronde bien circonscrite de 7,5 cm de diamètre refoulant la face postérieure de l'estomac. Le patient se plaint d'une pesanteur épigastrique et de nausées postprandiales. Quel geste thérapeutique mini-invasif de choix est préconisé pour drainer ce pseudokyste compressif ?",
    "options": [
      "Abstention thérapeutique totale sans surveillance",
      "Drainage endoscopique transmural par kysto-gastrostomie sous écho-endoscopie avec pose de prothèse",
      "Résection pancréatique subtotale d'emblée",
      "Chimiothérapie",
      "Ponction transcutanée à l'aveugle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour un pseudokyste volumineux (> 6 cm) symptomatique/compressif au contact de l'estomac, le traitement de référence est le drainage kysto-gastrique endoscopique sous guidage écho-endoscopique.",
    "clinicalPearl": "Pseudokyste pancréatique compressif = Kysto-gastrostomie sous écho-endoscopie (drainage endoscopique transmural)."
  }
];

export const PANCREATITE_CHRONIQUE_RESOURCES: CourseResource[] = [
  {
    "id": "res-panc-chr-summary",
    "courseId": "crs-gastro-pancreatite-chronique",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Pancréatite Chronique (PC)",
    "contentMarkdown": "### 🎯 Points Clés : Pancréatite Chronique\n- **Étiologie n°1** : Alcoolisme chronique (> 80%) potentialisé par le tabagisme. Autres : génétique (PRSS1, CFTR), auto-immune (IgG4), obstructive.\n- **Signe pathognomonique** : Calcifications pancréatiques à l'ASP/Scanner.\n- **Évolution naturelle** :\n  1. Douleur initiale (épigastrique transfixiante soulagée en antéflexion).\n  2. Insuffisance exocrine (stéatorrhée, élastase fécale < 200 µg/g) -> Créon.\n  3. Insuffisance endocrine (diabète pancréatoprive 3c instable) -> Insuline.\n- **Complications majeures** : Pseudokystes (kysto-gastrostomie), compression de la VBP (ictère/cholestase), thrombose de la veine splénique (HTP segmentaire), faux-anévrysmes artériels.",
    "author": "Société Française d’Endoscopie Digestive"
  },
  {
    "id": "res-panc-chr-tips",
    "courseId": "crs-gastro-pancreatite-chronique",
    "type": "Astuce",
    "title": "Règles d'or dans la Pancréatite Chronique",
    "contentMarkdown": "### 💡 3 pièges classiques aux examens :\n1. La lithiase biliaire provoque des pancréatites AIGUËS, jamais de pancréatite CHRONIQUE !\n2. Les extraits pancréatiques (Créon) doivent impérativement être pris PENDANT le repas.\n3. Le tabac est un facteur de risque indépendant d'accélération de la PC et de cancer du pancréas.",
    "author": "Faculté de Médecine"
  }
];
