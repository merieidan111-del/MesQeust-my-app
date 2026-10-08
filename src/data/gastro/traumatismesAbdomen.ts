import { Question, CourseResource } from '../../types/medical';

export const TRAUMATISMES_ABDOMEN_QUESTIONS: Question[] = [
  {
    "id": "q-trauma-01",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est l'organe intra-abdominal le plus fréquemment lésé lors d'un traumatisme fermé de l'abdomen (contusion abdominale) ?",
    "options": [
      "Le pancréas",
      "La rate",
      "Le duodénum",
      "La vessie",
      "La vésicule biliaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La rate est l'organe plein le plus vulnérable et le plus fréquemment atteint lors des contusions abdominales (environ 40-50%), immédiatement suivie par le foie.",
    "clinicalPearl": "Organe le plus fréquemment lésé dans les traumatismes fermés = la rate, suivie du foie."
  },
  {
    "id": "q-trauma-02",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge initiale d'un polytraumatisé en salle de déchocage, quel examen échographique d'urgence au lit du malade permet de rechercher un épanchement liquidien péritonéal ou péricardique ?",
    "options": [
      "L'échographie doppler hépatique",
      "L'échographie FAST (Focused Assessment with Sonography for Trauma)",
      "L'échographie endo-rectale",
      "L'échographie thyroïdienne",
      "L'écho-endoscopie œsophagienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'échographie FAST explore 4 fenêtres clés (péricardique, péri-hépatique/Morison, spléno-rénale et pelvienne/Douglas) en moins de 3 minutes pour détecter un hémopéritoine ou un hémopéricarde.",
    "clinicalPearl": "FAST-écho en déchocage : recherche en 3 minutes un épanchement intrapéritonéal, pleural ou péricardique."
  },
  {
    "id": "q-trauma-03",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Chez un traumatisé abdominal instable sur le plan hémodynamique (choc hémorragique réfractaire au remplissage) avec FAST-écho positive montrant un hémopéritoine abondant, quelle est la conduite à tenir immédiate ?",
    "options": [
      "Scanner abdomino-pelvien avec injection",
      "Laparotomie écourtée en extrême urgence au bloc opératoire ('Damage Control Surgery')",
      "Artériographie embolisation programmée",
      "Ponction-lavage du péritoine",
      "Surveillance en soins continus"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'instabilité hémodynamique persistante avec hémopéritoine contre-indique formellement le transport au scanner et impose un transfert direct au bloc opératoire pour laparotomie d'hémostase en urgence.",
    "clinicalPearl": "Instabilité hémodynamique + hémopéritoine à la FAST = Laparotomie d'hémostase immédiate (Damage Control)."
  },
  {
    "id": "q-trauma-04",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Chez un traumatisé abdominal STABLE sur le plan hémodynamique, quel est l'examen de référence absolu pour dresser le bilan lésionnel exhaustif des viscères pleins et creux ?",
    "options": [
      "L'abdomen sans préparation (ASP)",
      "La tomodensitométrie (TDM) corps entier / abdomino-pelvienne avec injection aux temps artériel et portal",
      "L'IRM abdominale en urgence",
      "La scintigraphie hépatique",
      "La radiographie du bassin seule"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez le patient stable, le scanner injecté corps entier est le gold standard : il grade précisément les lésions spléniques et hépatiques (classification AAST), recherche un saignement actif ('blush' artériel) et traque les pneumopéritoines discrets.",
    "clinicalPearl": "Patient stable hémodynamiquement = TDM abdomino-pelvienne injectée de référence."
  },
  {
    "id": "q-trauma-05",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "La visualisation d'une fuite active de produit de contraste iodé ('blush' artériel) au scanner chez un patient présentant un traumatisme splénique ou hépatique stable indique en priorité :",
    "options": [
      "Une splénectomie totale immédiate systématique",
      "Une artériographie interventionnelle avec embolisation hémostatique sélective",
      "Une simple surveillance clinique sans traitement",
      "Une antibiothérapie intraveineuse",
      "Un drainage percutané"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La présence d'un 'blush' artériel au scanner traduit un saignement artériel actif accessible dans la grande majorité des cas à une embolisation sélective par radiologie interventionnelle, évitant la chirurgie mutilante.",
    "clinicalPearl": "'Blush' artériel au scanner chez patient stable = indication de choix de l'artério-embolisation hémostatique."
  },
  {
    "id": "q-trauma-06",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est l'objectif principal du traitement non opératoire (TNO) des traumatismes des viscères pleins (rate et foie) chez un patient hémodynamiquement stable ?",
    "options": [
      "Réduire les coûts d'hospitalisation",
      "Préserver le capital parenchymateux et la fonction immunitaire (notamment splénique contre les germes encapsulés)",
      "Éviter toute transfusion sanguine",
      "Permettre une reprise immédiate de l'effort",
      "Éliminer le recours à l'imagerie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le TNO (réalisable chez > 80% des traumatismes de rate/foie stables) préserve l'organe et prévient le risque redoutable d'infection fulminante post-splénectomie (OPSI) liée aux bactéries encapsulées (pneumocoque).",
    "clinicalPearl": "Traitement Non Opératoire (TNO) de la rate : préserve la fonction immunologique anti-pneumococcique."
  },
  {
    "id": "q-trauma-07",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle vaccination prophylactique est impérative après une splénectomie totale post-traumatique pour prévenir le sepsis fulminant post-splénectomie (OPSI) ?",
    "options": [
      "Vaccin anti-hépatite B",
      "Vaccination anti-pneumococcique, anti-méningococcique, anti-Haemophilus influenzae b et grippale annuelle",
      "Vaccin anti-rougeoleux",
      "BCG",
      "Vaccin anti-cholérique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'asplénie anatomique expose au sepsis foudroyant à bactéries encapsulées (Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus b). La vaccination et l'antibiothérapie préventive (amoxicilline chez l'enfant) sont obligatoires.",
    "clinicalPearl": "Après splénectomie : vaccin anti-pneumocoque + anti-méningocoque + anti-Haemophilus influenzae b obligatoires."
  },
  {
    "id": "q-trauma-08",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans le concept de chirurgie de sauvetage écourtée ('Damage Control Surgery'), quelle triade létale métabolique l'intervention initiale abrégée cherche-t-elle à enrayer ?",
    "options": [
      "Hyperthermie, alcalose et hyperglycémie",
      "Hypothermie (< 35°C), acidose métabolique (pH < 7,20) et coagulopathie",
      "Hypertension, bradycardie et bradypnée",
      "Hypercalcémie, hypokaliémie et anémie",
      "Hypernatrémie, hypoxie et urémie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade létale du polytraumatisé associe hypothermie, acidose et coagulopathie d'épuisement. Le Damage Control réalise une hémostase rapide (packing) pour permettre la réanimation en soins intensifs avant la reconstruction différée.",
    "clinicalPearl": "Triade létale du traumatisé grave : Hypothermie + Acidose + Coagulopathie (justifie le Damage Control)."
  },
  {
    "id": "q-trauma-09",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel signe clinique cutané ecchymotique transversal en regard de la paroi abdominale inférieure est très évocateur d'une décélération brutale par ceinture de sécurité et doit faire traquer une lésion du grêle ou du mésentère ?",
    "options": [
      "Le signe de Murphy",
      "Le signe de la ceinture de sécurité ('seat-belt sign')",
      "Le signe de Rovsing",
      "Le signe de Kehr",
      "Le signe de Cullen"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le signe de la ceinture de sécurité (ecchymose pariétale transverse) est associé dans plus de 20-30% des cas à des perforations du grêle, arrachements du méso ou fractures vertébrales du rachis lombaire (fracture de Chance).",
    "clinicalPearl": "Seat-belt sign (trace de ceinture) = suspecter lésion du grêle, désinsertion du mésentère et fracture de Chance."
  },
  {
    "id": "q-trauma-10",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La douleur scapulaire gauche rapportée par un patient traumatisé de l'abdomen lors de la palpation de l'hypochondre gauche porte le nom de :",
    "options": [
      "Signe de Blumberg",
      "Signe de Kehr",
      "Signe de Chilaiditi",
      "Signe de Mac Burney",
      "Signe de Carnett"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le signe de Kehr est une douleur référée à l'épaule gauche due à l'irritation du nerf phrénique sous-diaphragmatique par un hémopéritoine périzincate splénique.",
    "clinicalPearl": "Signe de Kehr = douleur scapulaire gauche = hémopéritoine péri-splénique irritant le diaphragme."
  },
  {
    "id": "q-trauma-11",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la complication biliaire classique d'un traumatisme hépatique survenant typiquement après quelques jours ou semaines, se manifestant par une hémorragie digestive haute avec méléna et ictère fluctuant ?",
    "options": [
      "L'ulcère de stress",
      "L'hémobilie (saignement dans les voies biliaires via une fistule bilio-vasculaire traumatique)",
      "La gastrite caustique",
      "Le syndrome de Mallory-Weiss",
      "Une rupture de varice cardio-tubérositaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hémobilie traumatique associe la triade classique de Sandblom : douleurs biliaires, ictère et hémorragie digestive haute (méléna/hématémèse), causée par une brèche vasculaire communiquant avec une voie biliaire.",
    "clinicalPearl": "Triade de Sandblom (hémobilie) : colique hépatique + ictère + hémorragie digestive (méléna)."
  },
  {
    "id": "q-trauma-12",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Lors d'un traumatisme abdominal fermé violent avec compression rétro-péritonéale contre le rachis (choc au guidon de vélo ou volant), quel viscère digestif fixe est typiquement fracturé ou sectionné en regard de l'isthme ?",
    "options": [
      "La rate",
      "Le pancréas (fracture corporéo-isthmique)",
      "Le sigmoïde",
      "La vésicule biliaire",
      "Le caecum"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le pancréas est écrasé contre le billot vertébral lombaire lors des traumatismes à haute énergie (choc direct épigastrique ou guidon de vélo chez l'enfant), pouvant entraîner une rupture canalaire wirsungienne.",
    "clinicalPearl": "Traumatisme épigastrique direct (guidon) = fracture du pancréas sur le billot rachidien (lésion du Wirsung)."
  },
  {
    "id": "q-trauma-13",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel examen complémentaire d'imagerie permet d'évaluer de façon optimale l'intégrité du canal de Wirsung lors d'un traumatisme pancréatique ?",
    "options": [
      "L'ASP",
      "La cholangio-pancréatographie par résonance magnétique (CPRM / Wirsungo-IRM) ou la CPRE",
      "L'échographie standard",
      "La radiographie pulmonaire",
      "La manométrie biliaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La CPRM est l'examen non invasif de choix pour vérifier l'intégrité du canal pancréatique principal, déterminante pour le choix entre traitement conservateur et résection chirurgicale.",
    "clinicalPearl": "Rupture canalaire pancréatique suspectée = Wirsungo-IRM (CPRM) en première intention."
  },
  {
    "id": "q-trauma-14",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "La rupture traumatique sous-diaphragmatique gauche avec hernie intra-thoracique de viscères abdominaux (estomac, côlon) est typiquement causée par :",
    "options": [
      "Une toux d'irritation",
      "Une rupture diaphragmatique post-traumatique par hyperpression brutale",
      "Une hernie hiatale par roulement",
      "Une péritonite appendiculaire",
      "Un pneumothorax spontané"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La rupture de coupole diaphragmatique (plus fréquente à gauche car non protégée par le foie) résulte d'une brutale augmentation de pression intra-abdominale lors d'un AVP grave, entraînant l'ascension de l'estomac dans le thorax.",
    "clinicalPearl": "Rupture diaphragmatique gauche : ascension intra-thoracique de l'estomac ou du côlon (cliché thoracique anormal)."
  },
  {
    "id": "q-trauma-15",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la prise en charge d'un traumatisme pénétrant de l'abdomen par arme blanche avec éviscération d'anses grêles à travers la plaie, quelle est la conduite immédiate sur le lieu de l'accident ?",
    "options": [
      "Réintégrer de force les anses à l'intérieur de l'abdomen",
      "Couvrir les anses sans les réintégrer avec des compresses stériles imbibées de sérum physiologique tiède et emballer sous champ stérile étanche",
      "Désinfecter à l'alcool pur et poser un garrot",
      "Laisser sécher les anses à l'air libre",
      "Administrer des boissons chaudes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Il ne faut jamais tenter de réintégrer les viscères sur place. Il convient de les protéger de la dessiccation et de l'infection par des pansements stériles humides tièdes avant le transport direct au bloc.",
    "clinicalPearl": "Éviscération post-traumatique : ne jamais réintégrer sur place -> pansement stérile humide tiède."
  },
  {
    "id": "q-trauma-16",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle pression intra-abdominale mesurée par cathéter intravésical définit une hypertension intra-abdominale (HIA) menaçant d'un syndrome du compartiment abdominal ?",
    "options": [
      "Pression > 2 mmHg",
      "Pression intra-abdominale soutenue >= 12 mmHg (syndrome du compartiment abdominal si > 20 mmHg avec nouvelle défaillance d'organe)",
      "Pression > 100 mmHg",
      "Pression inférieure à zéro",
      "Pression strictement égale à la pression artérielle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'HIA est définie par une PIA >= 12 mmHg. Le syndrome du compartiment abdominal associe une PIA > 20 mmHg et l'apparition ou l'aggravation d'une défaillance viscérale (rénale, respiratoire), imposant une laparostomie décompressive.",
    "clinicalPearl": "Syndrome du compartiment abdominal = PIA > 20 mmHg + défaillance d'organe (indication de laparostomie ouverte)."
  },
  {
    "id": "q-trauma-17",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans les traumatismes fermés du foie, la manœuvre de Pringle per-opératoire consiste en :",
    "options": [
      "La suture de la vésicule biliaire",
      "Le clampage temporaire du pédicule hépatique (artère hépatique, veine porte et voie biliaire) au niveau du foramen de Winslow pour contrôler le saignement d'origine afférente",
      "La section du ligament suspenseur",
      "L'ablation du lobe gauche",
      "Le clampage de l'aorte thoracique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La manœuvre de Pringle (clampage du pédicule hépatique) tarit immédiatement les saignements hépatiques d'origine artérielle hépatique et portale ; la persistance du saignement sous clampage évoque une plaie des veines sus-hépatiques ou de la VCI rétrohépatique.",
    "clinicalPearl": "Manœuvre de Pringle = clampage du pédicule hépatique dans le foramen de Winslow (contrôle de l'afflux portal et artériel)."
  },
  {
    "id": "q-trauma-18",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel germe bactérien représente la cause la plus fréquente et la plus redoutée de décès par sepsis fulminant post-splénectomie chez l'adulte et l'enfant ?",
    "options": [
      "Escherichia coli",
      "Streptococcus pneumoniae (Pneumocoque)",
      "Pseudomonas aeruginosa",
      "Clostridioides difficile",
      "Listeria monocytogenes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le pneumocoque est responsable de plus de 50 à 70% des infections fulminantes post-splénectomie (OPSI), avec une mortalité pouvant dépasser 50% en moins de 24 heures.",
    "clinicalPearl": "Pneumocoque = 1ère cause d'infection fulminante mortelle chez le splénectomisé."
  },
  {
    "id": "q-trauma-19",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle lésion rétropéritonéale traumatique du duodénum peut être initialement asymptomatique puis se révéler secondairement par une péritonite asthénique ou un sepsis rétro-péritonéal ?",
    "options": [
      "L'ulcère du bulbe antérieur",
      "La rupture sous-séreuse du 2ème duodénum (rétropéritonéale) avec diffusion gazeuse rétropéritonéale le long du psoas",
      "Le diverticule de Meckel",
      "La sténose pylorique",
      "L'invagination gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les segments duodénaux rétro-péritonéaux (D2, D3, D4) peuvent se rompre sans pneumopéritoine libre antérieur, révélés au scanner par un emphysème rétro-péritonéal bordant le psoas et le rein droit.",
    "clinicalPearl": "Rupture duodénale rétro-péritonéale : emphysème rétropéritonéal pré-rachidien au scanner (souvent paucisymptomatique au début)."
  },
  {
    "id": "q-trauma-20",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge non opératoire (TNO) d'une contusion hépatique ou splénique surveillée, quelle consigne d'activité physique est formelle à la sortie ?",
    "options": [
      "Reprise immédiate des sports de contact",
      "Repos strict avec interdiction des sports de contact ou violents pendant au moins 2 à 3 mois",
      "Course à pied quotidienne obligatoire",
      "Port de charges lourdes dès J7",
      "Aucune précaution"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le risque de rupture secondaire d'un hématome sous-capsulaire ou d'un pseudo-anévrysme persiste pendant plusieurs semaines, imposant l'éviction stricte des activités sportives violentes pendant 2 à 3 mois.",
    "clinicalPearl": "Après contusion de rate ou de foie sous TNO : arrêt des sports violents et de contact pendant 2 à 3 mois."
  },
  {
    "id": "q-trauma-21",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel examen d'imagerie utilise-t-on pour vérifier la consolidation parenchymateuse et exclure un faux anévrysme avant d'autoriser la reprise normale des activités après traumatisme splénique de haut grade ?",
    "options": [
      "Radiographie du thorax",
      "Scanner avec injection ou échographie de contraste vers la 4ème à 6ème semaine",
      "Scintigraphie thyroïdienne",
      "Coloscopie de contrôle",
      "Biopsie splénique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Un scanner abdominal avec temps artériel de contrôle (ou une échographie de contraste) vérifie la cicatrisation et dépiste un faux anévrysme splénique asymptomatique à risque de rupture secondaire.",
    "clinicalPearl": "TDM avec injection de contrôle : recherche d'un faux anévrysme splénique post-traumatique."
  },
  {
    "id": "q-trauma-22",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La ponction-lavage du péritoine (PLP) :",
    "options": [
      "A complètement remplacé le scanner abdominal",
      "Est aujourd'hui largement supplantée par l'échographie FAST et le scanner injecté, restant une option de sauvetage en milieu précaire sans imagerie",
      "Est formellement indiquée chez tout patient stable",
      "N'a aucun risque de complication iatrogène",
      "Se réalise sous anesthésie générale obligatoire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Historiquement essentielle, la PLP est devenue exceptionnelle grâce à l'échographie FAST au déchocage et au scanner multibarrette corps entier.",
    "clinicalPearl": "Ponction-lavage du péritoine : supplantée par la FAST-écho et la TDM."
  },
  {
    "id": "q-trauma-23",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Lors d'un traumatisme abdominal pénétrant par balle (arme à feu), quelle est la règle chirurgicale classique ?",
    "options": [
      "Surveillance ambulatoire sous antalgiques",
      "Laparotomie exploratrice systématique compte tenu du risque majeur (> 90%) de lésions viscérales ou vasculaires multiples le long du trajet et par blast",
      "Échographie simple sans chirurgie",
      "Mise sous plâtre abdominal",
      "Pansement simple"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Contrairement aux plaies par arme blanche qui peuvent être sélectionnées, les plaies par balle abdominales imposent en règle une laparotomie exploratrice en raison de l'effet de cavitation et du taux très élevé de perforation viscérale.",
    "clinicalPearl": "Plaie par arme à feu abdominale = Laparotomie exploratrice de principe en raison des dégâts complexes."
  },
  {
    "id": "q-trauma-24",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "La fracture de plusieurs côtes gauches basses (9ème, 10ème, 11ème côtes) doit faire redouter en priorité une lésion sous-jacente de :",
    "options": [
      "La vésicule biliaire",
      "La rate",
      "L'appendice",
      "La tête du pancréas",
      "L'ovaire gauche"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les dernières côtes gauches protègent la rate : toute fracture des 9ème à 11ème côtes gauches s'accompagne d'une lésion splénique dans près de 20% des cas.",
    "clinicalPearl": "Fractures de côtes gauches basses = chercher impérativement une lésion splénique associée."
  },
  {
    "id": "q-trauma-25",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle mesure de réanimation transfusionnelle fait partie intégrante du protocole de transfusion massive chez un polytraumatisé en choc hémorragique ?",
    "options": [
      "Transfusion de culots globulaires seuls sans plasma",
      "Ratio fixe équilibré de 1 CGR pour 1 Plasma Frais Congelé (PFC) pour 1 concentré plaquettaire (ratio 1:1:1) associé à l'acide tranexamique précoce",
      "Perfusion exclusive de glucosé 5%",
      "Administration de fer injectable seul",
      "Perfusion de potassium pur"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La réanimation hémostatique précoce prévient la coagulopathie traumatique par l'administration d'un ratio 1:1:1 (CGR, PFC, plaquettes) et d'acide tranexamique (antifibrinolytique) dans les 3 premières heures.",
    "clinicalPearl": "Choc hémorragique traumatique : ratio transfusionnel 1:1:1 + acide tranexamique précoce (< H3)."
  },
  {
    "id": "q-cas-trauma-1",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Un motard de 26 ans est admis en salle de déchocage après un accident de la voie publique à haute énergie avec choc abdominal et thoracique gauche direct. À l'admission : patient conscient, polypnéique à 26/min, TA 80/50 mmHg, pouls 130 bpm filant, pâleur cutanéo-muqueuse intense, hématome du flanc gauche et défense très vive de l'hypochondre gauche. Malgré un remplissage immédiat par 1000 mL de cristalloïdes tièdes et 2 culots globulaires O négatif, la TA reste à 85/55 mmHg. L'échographie FAST réalisée au lit du malade montre un épanchement liquidien abondant dans le récessus spléno-rénal et le cul-de-sac de Douglas, sans hémopéricarde. Quelle est la conduite thérapeutique immédiate ?",
    "options": [
      "Transférer le patient au scanner abdomino-pelvien avec injection",
      "Transfert immédiat au bloc opératoire pour laparotomie d'hémostase en extrême urgence (Damage Control Surgery)",
      "Réaliser une artériographie embolisation splénique en salle de radiologie interventionnelle",
      "Poursuivre le remplissage isolé pendant 2 heures sans chirurgie",
      "Poser un drain péritonéal percutané au lit du malade"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Traumatisé abdominal instable avec hémopéritoine à la FAST ne répondant pas au remplissage = contre-indication absolue au scanner -> bloc opératoire immédiat pour laparotomie écourtée de sauvetage.",
    "clinicalPearl": "Polytraumatisé instable réfractaire + FAST positive = bloc opératoire immédiat (Damage Control)."
  },
  {
    "id": "q-cas-trauma-2",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Un jeune homme de 22 ans est victime d'un choc direct au flanc gauche lors d'un match de handball. Il se présente aux urgences 2 heures plus tard pour des douleurs de l'hypochondre gauche irradiant vers l'épaule gauche (signe de Kehr). Les constantes vitales sont strictement stables : TA 125/75 mmHg, pouls 72 bpm, SpO2 99%, hémoglobine à 13,8 g/dL. La palpation retrouve une sensibilité localisée de l'hypochondre gauche sans défense. Le scanner TAP injecté objective une fracture splénique du pôle inférieur avec hématome sous-capsulaire de 4 cm sans fuite active de produit de contraste (lésion splénique grade II de l'AAST) et un minime hémopéritoine péri-splénique. Quelle est la stratégie thérapeutique de choix ?",
    "options": [
      "Splénectomie totale en urgence par laparotomie",
      "Traitement non opératoire (TNO) en unité de soins intensifs : surveillance clinique rapprochée, repos strict au lit, surveillance de l'hémoglobine et antalgiques",
      "Embolisation totale de l'artère splénique d'emblée",
      "Mise sous anticoagulants curatifs",
      "Sortie immédiate avec reprise du sport le lendemain"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez un patient hémodynamiquement stable présentant un traumatisme splénique de bas grade sans saignement actif au scanner, le traitement conservateur non opératoire (TNO) est le traitement de référence (taux de succès > 90%), préservant la fonction splénique.",
    "clinicalPearl": "Traumatisme splénique stable sans blush au scanner = Traitement Non Opératoire (TNO) sous surveillance armée."
  },
  {
    "id": "q-cas-trauma-3",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Chez ce même patient pris en charge sous traitement non opératoire, l'évolution clinique est favorable. Il sort d'hospitalisation à J7. Quelles recommandations formelles doivent être données concernant la reprise des activités physiques ?",
    "options": [
      "Reprise immédiate de la compétition de handball",
      "Arrêt strict de tout sport de contact, violent ou à risque de traumatisme abdominal pendant une durée minimale de 2 à 3 mois",
      "Interdiction définitive de tout sport à vie",
      "Prise d'aspirine avant chaque entraînement",
      "Aucune précaution spécifique nécessaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le risque de rupture secondaire de rate (par rupture d'hématome sous-capsulaire ou pseudo-anévrysme) impose le repos physique et l'éviction formelle des sports de contact pendant 8 à 12 semaines.",
    "clinicalPearl": "TNO de la rate : éviction stricte des sports de contact/combat pendant 2 à 3 mois."
  },
  {
    "id": "q-cas-trauma-4",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un patient de 35 ans polytraumatisé a dû subir une splénectomie totale d'hémostase en urgence suite à un éclatement splénique grade V. Les suites opératoires immédiates sont simples. Dans le cadre de la prévention du syndrome infectieux foudroyant post-splénectomie (OPSI), quelle mesure vaccinale et prophylactique doit être impérativement planifiée avant ou peu après sa sortie ?",
    "options": [
      "Aucune vaccination n'est requise chez l'adulte",
      "Vaccination anti-pneumococcique (Prevenar 13 suivi de Pneumovax 23), anti-méningococcique conjugué et anti-Haemophilus influenzae b, associée à une éducation sur la prise immédiate d'amoxicilline en cas de fièvre",
      "Vaccination anti-tuberculeuse par BCG",
      "Vaccination anti-tétanique isolée",
      "Traitement par corticoïdes au long cours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'asplénie post-splénectomie expose au risque vital d'OPSI à germes encapsulés (pneumocoque en tête). La couverture vaccinale élargie (pneumocoque, méningocoque, Hib) et l'ordonnance d'antibiotique de secours (amoxicilline) sont obligatoires.",
    "clinicalPearl": "Splénectomisé : vaccins anti-pneumocoque, méningocoque, Haemophilus + antibioprophylaxie/ordonnance de secours en cas de fièvre."
  },
  {
    "id": "q-cas-trauma-5",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un enfant de 10 ans fait une chute de bicyclette avec impact violent de l'extrémité du guidon dans le creux épigastrique. Après une accalmie initiale de quelques heures, il présente des douleurs abdominales épigastriques d'intensité croissante avec vomissements bilieux répétés. À l'examen : défense épigastrique, fébricule à 38°C, lipasémie très élevée à 950 UI/L (N < 60). Le scanner abdominal injecté révèle une fracture transversale nette de l'isthme du pancréas avec suspicion d'interruption du canal de Wirsung et infiltration rétropéritonéale. Quelle est la démarche diagnostique et thérapeutique de référence ?",
    "options": [
      "Considérer qu'il s'agit d'une contusion bénigne et autoriser la sortie",
      "Réaliser une CPRM (Wirsungo-IRM) pour confirmer l'atteinte canalaire wirsungienne ; en cas de rupture canalaire complète, indication d'une prise en charge chirurgicale (pancréatectomie distale avec conservation splénique) ou endoscopique (stent)",
      "Appendicectomie en urgence",
      "Pose d'une sonde urinaire exclusive",
      "Traiter par antibiotiques per os simples sans imagerie complémentaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traumatisme au guidon de vélo chez l'enfant est typique de la fracture pancréatique par écrasement sur le rachis. La CPRM est l'examen de choix pour évaluer le canal de Wirsung : une rupture canalaire nécessite une prise en charge chirurgicale spécialisée (spléno-pancréatectomie gauche ou drainage).",
    "clinicalPearl": "Traumatisme au guidon de vélo : fracture pancréatique corporéo-isthmique -> CPRM (état du canal de Wirsung)."
  }
];

export const TRAUMATISMES_ABDOMEN_RESOURCES: CourseResource[] = [
  {
    "id": "res-trauma-summary",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Traumatismes de l'Abdomen",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Traumatismes Abdominaux\n- **Épidémiologie lésionnelle** :\n  - Traumatismes fermés (contusions) : Rate (1er, 40-50%), Foie (2ème, 30-40%), mésentère/grêle, pancréas/duodénum (guidon/écrasement rachidien), rein.\n  - Traumatismes pénétrants (armes blanches, armes à feu) : grêle, foie, côlon, gros vaisseaux.\n- **Stratégie d'urgence au déchocage** :\n  - *Instabilité hémodynamique réfractaire + FAST-écho positive (hémopéritoine)* : Bloc opératoire immédiat pour laparotomie écourtée d'hémostase (Damage Control). Pas de scanner !\n  - *Stabilité hémodynamique* : Scanner TAP injecté triphasique de référence (grading AAST, blush artériel, pneumopéritoine).\n- **Prise en charge moderne** :\n  - *Traitement non opératoire (TNO)* : standard pour > 80% des contusions spléniques et hépatiques stables (surveillance en soins intensifs, repos au lit, éviction des sports 2-3 mois).\n  - *Artério-embolisation* : geste de choix en cas de fuite active de produit de contraste (blush) chez un patient stable.\n  - *Après splénectomie* : vaccination anti-pneumococcique + anti-méningococcique + anti-Haemophilus b + antibiothérapie de réserve en cas de fièvre (prévention de l'OPSI).",
    "author": "Faculté de Médecine - Collège de Chirurgie Digestive et Traumatologique"
  },
  {
    "id": "res-trauma-pearls",
    "courseId": "crs-gastro-traumatismes-abdomen",
    "type": "Astuce",
    "title": "Règles d'Or : Traumatismes Abdominaux",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Règle absolue** : Jamais de scanner chez un patient instable en choc hémorragique persistant -> bloc direct.\n- ⚡ **Triade létale du polytraumatisé** : Hypothermie + Acidose métabolique + Coagulopathie (Damage Control Surgery).\n- ⚡ **Trace de ceinture de sécurité (seat-belt sign)** : rechercher impérativement une perforation du grêle, désinsertion du méso et fracture de Chance du rachis lombaire.",
    "author": "Commission Pédagogique"
  }
];
