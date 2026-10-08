import { Question, CourseResource } from '../../types/medical';

export const CANCER_OESOPHAGE_QUESTIONS: Question[] = [
  {
    "id": "q-oes-01",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le facteur de risque prépondérant de l'adénocarcinome de l'œsophage distal ?",
    "options": [
      "Alcoolisme chronique",
      "Tabagisme exclusif",
      "Endobrachyœsophage (EBO) sur RGO chronique",
      "Infection à HPV 16/18",
      "Syndrome de Plummer-Vinson"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'adénocarcinome du tiers inférieur de l'œsophage se développe sur un endobrachyœsophage (muqueuse de Barrett avec métaplasie intestinale), secondaire au reflux gastro-œsophagien chronique.",
    "clinicalPearl": "Adénocarcinome = tiers inférieur + RGO + EBO (obésité). Épidermoïde = tiers supérieur/moyen + alcool + tabac."
  },
  {
    "id": "q-oes-02",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le type histologique le plus fréquent dans les cancers de l'œsophage du tiers supérieur et moyen ?",
    "options": [
      "Adénocarcinome mucineux",
      "Carcinome épidermoïde",
      "Tumeur stromale gastro-intestinale",
      "Léiomyosarcome",
      "Carcinome neuroendocrine à grandes cellules"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le carcinome épidermoïde représente la grande majorité des cancers de l'œsophage des 2/3 supérieurs, favorisé par la synergie alcool-tabac.",
    "clinicalPearl": "Carcinome épidermoïde = 90% des cancers des 2/3 supérieurs de l'œsophage."
  },
  {
    "id": "q-oes-03",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Le symptôme révélateur le plus fréquent et le plus évocateur du cancer de l'œsophage est :",
    "options": [
      "L'hématémèse massive",
      "Le pyrosis intermittent",
      "La dysphagie d'abord aux solides puis aux liquides",
      "La douleur épigastrique postprandiale",
      "La régurgitation acide fétide"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La dysphagie progressive, continue, d'abord aux solides puis aux liquides, est le maître symptôme révélateur chez un patient de plus de 50 ans.",
    "clinicalPearl": "Toute dysphagie chez l'adulte est un cancer de l'œsophage jusqu'à preuve histologique du contraire (FOGD immédiate)."
  },
  {
    "id": "q-oes-04",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel examen permet à la fois de confirmer le diagnostic positif et d'obtenir la preuve histologique ?",
    "options": [
      "Scanner thoraco-abdominal avec injection",
      "Transit œsogastroduodénal baryté (TOGD)",
      "Endoscopie œso-gastro-duodénale (FOGD) avec biopsies",
      "Écho-endoscopie œsophagienne",
      "TEP-scan au 18-FDG"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La FOGD permet de visualiser la lésion, d'évaluer son niveau par rapport aux arcades dentaires et de prélever des biopsies multiples (minimum 6 à 8).",
    "clinicalPearl": "Preuve histologique obligatoire par biopsies endoscopiques avant tout traitement oncologique."
  },
  {
    "id": "q-oes-05",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans le cancer de l'œsophage, quel est le meilleur examen pour évaluer l'extension pariétale (stade T) et ganglionnaire périlésionnelle (stade N) ?",
    "options": [
      "Scanner thoraco-abdominal",
      "Écho-endoscopie œsophagienne",
      "Transit baryté",
      "IRM thoracique",
      "Échographie cervicale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'écho-endoscopie œsophagienne est l'examen de référence pour l'évaluation de la profondeur de l'infiltration pariétale (T) et de l'atteinte ganglionnaire de voisinage (N).",
    "clinicalPearl": "Écho-endoscopie = référence pour TN local (si tumeur franchissable) ; Scanner TAP = référence pour M à distance."
  },
  {
    "id": "q-oes-06",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "La présence d'une voix bitonale (dysphonie) chez un patient atteint d'un cancer du tiers moyen de l'œsophage signe :",
    "options": [
      "Une métastase pulmonaire apicale",
      "Une paralysie du nerf laryngé récurrent gauche par envahissement médiastinal",
      "Une mycose laryngée secondaire",
      "Une compression de la veine cave supérieure",
      "Un reflux gastro-laryngé"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La voix bitonale témoigne de l'envahissement du nerf récurrent gauche dans la gouttière trachéo-œsophagienne, classant la tumeur au moins T4b (non résécable d'emblée).",
    "clinicalPearl": "Dysphonie / voix bitonale = paralysie récurrentielle gauche = signe de non-résécabilité chirurgicale immédiate."
  },
  {
    "id": "q-oes-07",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel examen complémentaire est formellement indiqué dans le bilan pré-thérapeutique d'un carcinome épidermoïde de l'œsophage cervical ou médio-thoracique ?",
    "options": [
      "Coloscopie totale",
      "Fibroscopie trachéo-bronchique systématique",
      "Manométrie œsophagienne",
      "Scintigraphie osseuse systématique",
      "Transit du grêle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La fibroscopie trachéo-bronchique est indispensable pour rechercher une filiation/fistule trachéo-œsophagienne, un envahissement de l'arbre respiratoire ou un second cancer synchrone ORL/bronchique (champ d'aéro-digestif supérieur).",
    "clinicalPearl": "Carcinome épidermoïde de l'œsophage = fibroscopie bronchique + examen ORL systématiques (recherche de cancer synchrone)."
  },
  {
    "id": "q-oes-08",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la définition anatomique du tiers supérieur de l'œsophage en endoscopie (distance des arcades dentaires AD) ?",
    "options": [
      "De 15 à 20 cm des AD",
      "De 20 à 25 cm des AD",
      "De 25 à 30 cm des AD",
      "De 30 à 40 cm des AD",
      "Au-delà de 40 cm des AD"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'œsophage cervical/tiers supérieur débute au sphincter supérieur (15 cm des incisives) et s'étend jusqu'à 20 cm. Le tiers moyen va de 20 à 30 cm, et le tiers inférieur de 30 à 40 cm.",
    "clinicalPearl": "Repères endoscopiques : 15 cm = bouche de Killian ; 40 cm = cardia / ligne Z."
  },
  {
    "id": "q-oes-09",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la classification TNM de l'UICC, une tumeur qui envahit la musculeuse œsophagienne est classée :",
    "options": [
      "T1a",
      "T1b",
      "T2",
      "T3",
      "T4a"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "T1 = muqueuse/sous-muqueuse ; T2 = musculeuse propre ; T3 = adventice ; T4 = structures adjacentes (T4a plèvre/péricarde/diaphragme, T4b aorte/vertèbre/trachée).",
    "clinicalPearl": "T1a = muqueuse, T1b = sous-muqueuse, T2 = musculeuse, T3 = adventice, T4 = organes adjacents."
  },
  {
    "id": "q-oes-10",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Parmi les syndromes paranéoplasiques suivants, lequel est typiquement associé au carcinome épidermoïde de l'œsophage ?",
    "options": [
      "Syndrome de Cushing par sécrétion d'ACTH",
      "Hypercalcémie paranéoplasique par sécrétion de PTH-rp",
      "Syndrome de Zollinger-Ellison",
      "Hypoglycémie par hypersécrétion d'insuline",
      "Syndrome carcinoïde"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hypercalcémie par sécrétion de peptide apparenté à la parathormone (PTH-rp) est une complication classique du carcinome épidermoïde.",
    "clinicalPearl": "Hypercalcémie sans lyse osseuse = sécrétion de PTH-rp par le carcinome épidermoïde."
  },
  {
    "id": "q-oes-11",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle anomalie pré-cancéreuse œsophagienne est causée par une carence martiale chronique chez la femme d'âge moyen ?",
    "options": [
      "Achalasie du cardia",
      "Syndrome de Plummer-Vinson (Kelly-Paterson)",
      "Diverticule de Zenker",
      "Sclérodermie systémique",
      "Maladie de Chagas"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome de Plummer-Vinson associe anémie ferriprive, glossite atrophique, dysphagie haute avec anneau œsophagien cervical (web), et fait le lit du carcinome épidermoïde.",
    "clinicalPearl": "Plummer-Vinson = anémie ferriprive + bride cervicale + risque élevé de carcinome épidermoïde."
  },
  {
    "id": "q-oes-12",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "L'adénopathie sus-claviculaire gauche associée au cancer de l'œsophage ou digestif porte le nom de :",
    "options": [
      "Ganglion de Cloquet",
      "Ganglion de Virchow-Troisier",
      "Ganglion de Sister Mary Joseph",
      "Ganglion sentinelle de Calot",
      "Ganglion de Delphien"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le ganglion de Troisier (Virchow) dans le creux sus-claviculaire gauche signe une métastase ganglionnaire à distance (stade M1).",
    "clinicalPearl": "Ganglion de Troisier = ganglion sus-claviculaire gauche métastatique = maladie métastatique M1."
  },
  {
    "id": "q-oes-13",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Concernant le traitement chirurgical du cancer de l'œsophage thoracique résécable, l'intervention de Lewis-Santy comporte :",
    "options": [
      "Une laparotomie et une cervicotomie sans thoracotomie",
      "Une double voie : laparotomie abdominale et thoracotomie droite avec anastomose intrathoracique",
      "Une gastrectomie totale avec œsophagectomie totale par sternotomie",
      "Une triple voie d'Akiyama systématique",
      "Une mucosectomie endoscopique exclusive"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'intervention de Lewis-Santy est l'intervention de référence pour les tumeurs du 1/3 inférieur et moyen : double abord abdominal et thoracique droit avec anastomose œsogastrique intrathoracique.",
    "clinicalPearl": "Lewis-Santy = 2 voies (laparotomie + thoracotomie droite) avec anastomose haute intrathoracique."
  },
  {
    "id": "q-oes-14",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans le protocole standardisé CROSS de radio-chimiothérapie néoadjuvante du cancer de l'œsophage localement avancé, quelle association de chimiothérapie est utilisée ?",
    "options": [
      "5-FU + Cisplatine",
      "Carboplatine + Paclitaxel",
      "FOLFOX 4",
      "Gemcitabine + Cisplatine",
      "Doxorubicine + Cyclophosphamide"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le protocole CROSS repose sur l'association Carboplatine + Paclitaxel associée à une radiothérapie délivrant 41,4 Gy, suivie de résection chirurgicale.",
    "clinicalPearl": "Protocole CROSS néoadjuvant = Carboplatine + Paclitaxel + 41,4 Gy de radiothérapie."
  },
  {
    "id": "q-oes-15",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel examen d'imagerie métabolique corps entier est recommandé pour rechercher des métastases occultes ou une dissémination ganglionnaire à distance ?",
    "options": [
      "Scintigraphie rénale",
      "TEP-TDM au 18-FDG",
      "IRM cérébrale systématique",
      "Radiographie du squelette entier",
      "Échographie doppler hépatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le TEP-TDM au fluorodésoxyglucose (18-FDG) modifie la prise en charge dans environ 15 à 20% des cas en découvrant des métastases à distance non vues au scanner.",
    "clinicalPearl": "TEP-TDM au 18-FDG = systématique dans le bilan initial pré-thérapeutique du cancer de l'œsophage."
  },
  {
    "id": "q-oes-16",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "L'indication d'un traitement endoscopique curatif (mucosectomie ou dissection sous-muqueuse) dans le cancer superficiel de l'œsophage requiert :",
    "options": [
      "Une tumeur T1a limitée à la muqueuse sans invasion lymphovasculaire",
      "Une tumeur T2 atteignant la musculeuse",
      "Une tumeur T1b avec emboles vasculaires",
      "La présence de ganglions N1",
      "Une sténose œsophagienne circonférentielle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La résection endoscopique (DSM ou mucosectomie) n'est curative que pour les lésions superficielles T1a limitées à la lamina propria/épithélium avec risque métastatique ganglionnaire < 2%.",
    "clinicalPearl": "Résection endoscopique = réservée au stade T1a (Tis/T1a intra-muqueux) sans critères péjoratifs histologiques."
  },
  {
    "id": "q-oes-17",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "En cas de dysphagie complète (aphagie) par tumeur sténosante non résécable de l'œsophage moyen, quelle est l'option palliative de première intention pour restaurer l'alimentation ?",
    "options": [
      "Œsophagectomie de dérivation immédiate",
      "Pose endoscopique d'une prothèse métallique auto-expansible couverte",
      "Gastrostomie chirurgicale ouverte d'emblée",
      "Alimentation parentérale définitive",
      "Dilatation pneumatique au ballonnet répétée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La prothèse métallique auto-expansible couverte rétablit rapidement et efficacement la lumière œsophagienne pour une alimentation orale chez les patients non opérables.",
    "clinicalPearl": "Palliation de la dysphagie tumorale = endoprothèse couverte auto-expansible."
  },
  {
    "id": "q-oes-18",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Une perforation tumorale dans l'arbre trachéo-bronchique se manifeste cliniquement par :",
    "options": [
      "Une hématurie microscopique",
      "Une toux quinteuse déclenchée par la déglutition (toux aux liquides)",
      "Une diarrhée osmotique",
      "Un ictère nu indolore",
      "Une hyperuricémie aiguë"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La fistule œso-trachéale ou œso-bronchique provoque le passage direct des liquides dans l'arbre bronchique, se traduisant par une violente quinte de toux lors de la prise de boissons.",
    "clinicalPearl": "Toux per-déglutition = fistule œso-trachéo-bronchique = urgence (pose de prothèse couverte)."
  },
  {
    "id": "q-oes-19",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle surveillance endoscopique est recommandée chez un patient porteur d'un endobrachyœsophage (EBO) avec dysplasie de bas grade confirmée ?",
    "options": [
      "Aucune surveillance requise",
      "Contrôle FOGD avec biopsies étagées tous les 6 mois ou destruction endoscopique par radiofréquence",
      "Chirurgie de Lewis-Santy d'emblée",
      "Scanner annuel sans fibroscopie",
      "Mise sous chimiothérapie par 5-FU"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En cas de dysplasie de bas grade confirmée par deux anatomopathologistes, une ablation endoscopique (radiofréquence) ou un contrôle FOGD rapproché tous les 6 mois est préconisé.",
    "clinicalPearl": "EBO avec dysplasie = confirmation anatomopathologique en double lecture obligatoire."
  },
  {
    "id": "q-oes-20",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel organe est le plus couramment utilisé pour rétablir la continuité digestive après résection de l'œsophage (gastroplastie) ?",
    "options": [
      "Le côlon transverse",
      "L'estomac (tubulisation gastrique)",
      "Une anse jéjunale libre",
      "Le duodénum",
      "Le grand épiploon seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'estomac tubulisé (plastie gastrique) vascularisé par l'artère gastro-épiploïque droite est le greffon de reconstruction digestive de référence après œsophagectomie.",
    "clinicalPearl": "Plastie gastrique = greffon de choix vascularisé par l'arcade gastro-épiploïque droite."
  },
  {
    "id": "q-oes-21",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans le bilan nutritionnel d'un patient présentant un cancer de l'œsophage avec dysphagie, quel paramètre biologique traduit une dénutrition protéique sévère ?",
    "options": [
      "Hyperglycémie à jeun",
      "Albuminémie < 30 g/L et perte pondérale > 10% en 6 mois",
      "Créatininémie élevée",
      "Bilirubine libre élevée",
      "Hyponatrémie de dilution"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Une perte pondérale > 10% en 6 mois et une albuminémie < 30 g/L (ou préalbumine < 0,11 g/L) définissent une dénutrition sévère nécessitant une renutrition entérale préopératoire.",
    "clinicalPearl": "Dénutrition sévère = perte de poids > 10% ou albumine < 30 g/L (indication de renutrition préopératoire)."
  },
  {
    "id": "q-oes-22",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le principal site métastatique viscéral à distance du cancer de l'œsophage ?",
    "options": [
      "Le cerveau",
      "Le foie et les poumons",
      "La rate",
      "Le pancréas",
      "Le squelette appendiculaire distal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le foie et le parenchyme pulmonaire constituent les deux sites préférentiels de dissémination métastatique hématogène du cancer de l'œsophage.",
    "clinicalPearl": "Métastases à distance : foie en premier lieu, suivi du poumon et des plèvres."
  },
  {
    "id": "q-oes-23",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel statut moléculaire est actuellement recherché de façon systématique dans les adénocarcinomes de la jonction œso-gastrique avancés ou métastatiques pour guider l'immunothérapie ?",
    "options": [
      "Mutation BRAF V600E",
      "Statut d'instabilité microsatellitaire (MSI/dMMR) et score PD-L1 (CPS)",
      "Mutation EGFR exon 19",
      "Réarrangement ALK",
      "Mutation FLT3"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans les adénocarcinomes œso-gastriques avancés, la recherche du statut MSI/dMMR, de l'expression PD-L1 (CPS) et de la surexpression de HER2 guide l'adjonction d'immunothérapie (anti-PD-1) et de thérapies ciblées.",
    "clinicalPearl": "Adénocarcinome œso-gastrique métastatique = statut HER2 + CPS PD-L1 + statut MSI indispensables."
  },
  {
    "id": "q-oes-24",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie radiologique est typiquement observée au transit œsophagien (TOGD) en présence d'un cancer infiltrant de l'œsophage ?",
    "options": [
      "Image en soustraction à contours réguliers et souples",
      "Sténose axiale ou excentrée, irrégulière, à bords rigides dits 'en trognon de pomme'",
      "Aspect de méga-œsophage avec rétrécissement progressif en bec d'oiseau",
      "Reflux baryté massif sans aucune sténose",
      "Hernie diaphragmatique sans déformation de la paroi"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le TOGD montre un défilé rétréci, rigide, asymétrique, anfractueux avec arrêt du péristaltisme, contrastant avec l'effilement régulier 'en bec d'oiseau' de l'achalasie.",
    "clinicalPearl": "Cancer = sténose rigide anfractueuse à raccordement abrupt ; Achalasie = rétrécissement régulier souple en bec d'oiseau."
  },
  {
    "id": "q-oes-25",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Le pronostic global à 5 ans du cancer de l'œsophage tous stades confondus se situe autour de :",
    "options": [
      "70 à 80%",
      "50 à 60%",
      "15 à 20%",
      "95%",
      "35 à 45%"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "En raison du diagnostic fréquemment tardif à un stade localement avancé ou métastatique, la survie globale à 5 ans demeure sombre, avoisinant 15 à 20%.",
    "clinicalPearl": "Diagnostic tardif = pronostic global sombre (survie à 5 ans de 15-20%)."
  },
  {
    "id": "q-cas-oes-1",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Mr K., 58 ans, fumeur (35 PA) et consommation d'alcool (40 g/j), consulte pour une dysphagie d'apparition insidieuse depuis 2 mois, prédominant sur les viandes puis s'étendant au pain, avec amaigrissement de 6 kg. L'examen retrouve un état général conservé sans ganglion sus-claviculaire. Quelle est la première démarche diagnostique à réaliser en urgence ?",
    "options": [
      "Un scanner thoraco-abdominal avec injection de produit de contraste",
      "Une fibroscopie œso-gastro-duodénale (FOGD) avec biopsies multiples",
      "Un transit œsogastroduodénal (TOGD) baryté",
      "Une mise sous inhibiteurs de la pompe à protons pendant 4 semaines",
      "Une manométrie œsophagienne haute résolution"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La FOGD est l'examen diagnostique de première intention incontournable devant toute dysphagie d'allure organique, permettant la visualisation directe et les biopsies histologiques indispensables.",
    "clinicalPearl": "Toute dysphagie chez un sujet aux facteurs de risque impose une FOGD avec biopsies sans différer."
  },
  {
    "id": "q-cas-oes-2",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Mme B., 64 ans, obèse (IMC 33 kg/m²), consulte pour dysphagie basse et régurgitations. Elle a des antécédents de pyrosis nocturne quotidien traité par automédication depuis 15 ans. La FOGD découvre une lésion ulcéro-végétante développée sur une muqueuse saumonée à 37 cm des arcades dentaires. L'histologie confirme un adénocarcinome bien différencié. Quelle était la lésion précurseur sous-jacente ?",
    "options": [
      "Une diverticulite œsophagienne",
      "Une achalasie méconnue",
      "Un endobrachyœsophage (EBO / métaplasie intestinale de Barrett)",
      "Une œsophagite à Candida albicans",
      "Un papillome œsophagien induit par HPV"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'adénocarcinome du bas œsophage survient quasi-exclusivement sur un endobrachyœsophage consécutif à l'exposition acide et biliaire prolongée liée au RGO chronique.",
    "clinicalPearl": "EBO (muqueuse saumonée) = métaplasie intestinale remplaçant l'épithélium malpighien, précurseur de l'adénocarcinome."
  },
  {
    "id": "q-cas-oes-3",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Un patient de 60 ans présente un carcinome épidermoïde du tiers moyen de l'œsophage. Le bilan initial montre : TDM TAP sans métastase, écho-endoscopie classant la tumeur T3N1, TEP-TDM montrant une hyperfixation tumorale et ganglionnaire médiastinale sans foyer à distance. Quelle est la stratégie thérapeutique validée par les RCP pour cette lésion résécable localement avancée ?",
    "options": [
      "Chirurgie de résection d'emblée par intervention de Lewis-Santy seule",
      "Radio-chimiothérapie néoadjuvante (schéma CROSS) suivie d'une œsophagectomie",
      "Radiothérapie externe exclusive à visée palliative",
      "Chimiothérapie palliative par FOLFOX seul",
      "Pose d'une endoprothèse œsophagienne métallique couverte d'emblée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour les tumeurs localement avancées résécables (T3 ou N+), le standard international est une radio-chimiothérapie néoadjuvante (schéma CROSS : carboplatine-paclitaxel + 41,4 Gy) suivie d'une chirurgie d'exérèse après 6 à 8 semaines.",
    "clinicalPearl": "T3/N+ résécable = Radio-chimiothérapie néoadjuvante puis œsophagectomie (amélioration majeure de la survie globale)."
  },
  {
    "id": "q-cas-oes-4",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Mr T., 67 ans, suivi pour un carcinome épidermoïde de l'œsophage moyen jugé non opérable, développe brutalement une violente quinte de toux fébrile chaque fois qu'il tente d'avaler une gorgée d'eau, accompagnée de crachats alimentaires et purulents. La radiographie thoracique met en évidence un foyer alvéolaire de la base droite. Quel diagnostic redoutable devez-vous évoquer immédiatement ?",
    "options": [
      "Pneumopathie d'inhalation par simple fausse route salivaire",
      "Fistule œso-trachéale ou œso-bronchique par invasion tumorale",
      "Embolie pulmonaire fébrile",
      "Rupture sous-muqueuse spontanée de Boerhaave",
      "Asthme cardiaque aigu"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La toux per-déglutition aux liquides chez un patient ayant un cancer de l'œsophage moyen signe la création d'une fistule œso-trachéo-bronchique tumorale compliquée de pneumopathie d'inhalation.",
    "clinicalPearl": "Fistule œso-aérienne = urgence thérapeutique nécessitant la pose en urgence d'une prothèse métallique couverte."
  },
  {
    "id": "q-cas-oes-5",
    "courseId": "crs-gastro-cancer-oesophage",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un patient de 71 ans présente une aphagie totale sur adénocarcinome du bas œsophage avec métastases hépatiques multiples synchrones (stade IV). Son état général est altéré (PS 2) et il est incapable de s'hydrater. Quel est le traitement palliatif de choix pour lever rapidement la dysphagie et permettre une reprise alimentaire ?",
    "options": [
      "Oesophagectomie totale palliative",
      "Pose endoscopique d'une prothèse métallique auto-expansible couverte",
      "Gastrostomie chirurgicale ouverte d'emblée",
      "Radiothérapie externe à 60 Gy",
      "Jeûne complet sous perfusion veineuse périphérique exclusive"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La pose sous contrôle endoscopique d'une prothèse métallique auto-expansible couverte permet une levée rapide et durable de la sténose tumorale, restaurant l'alimentation orale avec une morbidité minimale.",
    "clinicalPearl": "Palliation de la dysphagie maligne au stade métastatique = endoprothèse auto-expansible couverte."
  }
];

export const CANCER_OESOPHAGE_RESOURCES: CourseResource[] = [
  {
    "id": "res-oes-summary",
    "courseId": "crs-gastro-cancer-oesophage",
    "type": "Fiche Synthèse",
    "title": "Synthèse Complète : Cancer de l'Œsophage",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Cancer de l'Œsophage\n- **Épidémiologie & Facteurs de Risque** :\n  - *Carcinome épidermoïde* (tiers supérieur et moyen) : synergie alcool + tabac, boissons bouillantes, antécédents ORL/bronchiques.\n  - *Adénocarcinome* (tiers inférieur/cardia) : survenue sur endobrachyœsophage (EBO / muqueuse de Barrett), favorisé par RGO chronique et obésité.\n- **Clinique** :\n  - Maître symptôme : Dysphagie progressive d'abord aux solides puis aux liquides.\n  - Signes d'extension médiastinale : dysphonie/voix bitonale (nerf récurrent), toux aux liquides (fistule œso-trachéale), hoquet (nerf phrénique), douleurs dorsales transfixiantes.\n  - Examen : recherche de ganglion de Troisier sus-claviculaire gauche, hépatomégalie métastatique, dénutrition.\n- **Diagnostic & Bilan d'extension** :\n  - FOGD avec biopsies multiples (au moins 6-8).\n  - TDM TAP injecté : extension ganglionnaire et viscérale (foie, poumons).\n  - Écho-endoscopie : référence TN local.\n  - TEP-TDM au 18-FDG : bilan métastatique sensible.\n  - Panendoscopie ORL et fibroscopie bronchique pour le carcinome épidermoïde.\n- **Principes thérapeutiques** :\n  - Lésion T1a superficielle : résection endoscopique (mucosectomie ou dissection sous-muqueuse).\n  - Lésion localement avancée opérable (T2-T3, N+) : Radio-chimiothérapie néoadjuvante (schéma CROSS : Carboplatine + Paclitaxel + 41,4 Gy) puis œsophagectomie (Lewis-Santy).\n  - Palliation : prothèse métallique couverte auto-expansible pour restaurer la déglutition.",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-oes-pearls",
    "courseId": "crs-gastro-cancer-oesophage",
    "type": "Astuce",
    "title": "Perles & Pièges de Concours : Cancer de l'Œsophage",
    "contentMarkdown": "### 💡 Perles d'Examen\n- ⚡ **Règle d'or** : Toute dysphagie chez l'adulte de plus de 50 ans impose une FOGD avec biopsies sans délai.\n- ⚡ **Voix bitonale** = envahissement du nerf récurrent gauche = lésion non résécable d'emblée.\n- ⚡ **Intervention de Lewis-Santy** = 2 voies d'abord : laparotomie médiane + thoracotomie postéro-latérale droite.\n- ⚡ **Reconstruction digestive** = tubulisation gastrique (gastroplastie) vascularisée par l'arcade gastro-épiploïque droite.",
    "author": "Commission Pédagogique"
  }
];
