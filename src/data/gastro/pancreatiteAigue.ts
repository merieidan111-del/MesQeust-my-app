import { Question, CourseResource } from '../../types/medical';

export const PANCREATITE_AIGUE_QUESTIONS: Question[] = [
  {
    "id": "q-pa-01",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelles sont les deux principales étiologies de la pancréatite aiguë en Algérie et dans le monde, représentant plus de 80% des cas ?",
    "options": [
      "Médicamenteuse et auto-immune",
      "Lithiase biliaire et alcoolisme chronique",
      "Hypertriglycéridémie et hypercalcémie",
      "Traumatisme abdominal et virale",
      "Post-CPRE et génétique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La lithiase biliaire (environ 45-50%, prédominance féminine) et l'alcoolisme chronique (environ 30-35%, prédominance masculine) représentent la grande majorité des étiologies.",
    "clinicalPearl": "Lithiase biliaire (50%) + Alcool (35%) = plus de 80% des causes de pancréatite aiguë."
  },
  {
    "id": "q-pa-02",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Pour affirmer le diagnostic positif de pancréatite aiguë selon la classification d'Atlanta révisée, combien de critères sur 3 doivent être obligatoirement présents ?",
    "options": [
      "Les 3 critères obligatoirement",
      "Au moins 2 critères sur 3 (douleur typique, lipase > 3N, imagerie compatible)",
      "Uniquement le dosage biologique de l'amylase",
      "Le scanner abdominal seul",
      "L'échographie abdominale seule"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le diagnostic repose sur au moins 2 des 3 critères suivants : 1) Douleur abdominale typique évocatrice, 2) Lipasémie > 3 fois la limite supérieure de la normale, 3) Imagerie caractéristique (TDM, échographie ou IRM).",
    "clinicalPearl": "Diagnostic de pancréatite aiguë = au moins 2 critères sur 3 (Clinique, Lipase > 3N, Imagerie)."
  },
  {
    "id": "q-pa-03",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la caractéristique sémiologique typique de la douleur abdominale de la pancréatite aiguë ?",
    "options": [
      "Douleur de la fosse iliaque droite calmée par l'alimentation",
      "Douleur épigastrique intense, à début brutal, transfixiante vers le dos, calmée par la position penchée en avant 'en chien de fusil'",
      "Colique péri-ombilicale d'allure intermittente avec émissions de gaz",
      "Brûlure rétrosternale ascendante nocturne",
      "Pesanteur de l'hypochondre gauche soulagée par la toux"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur est épigastrique violente, continue, à irradiation dorsale transfixiante, soulagée par l'antéflexion du tronc (position fœtale ou 'en chien de fusil').",
    "clinicalPearl": "Douleur épigastrique transfixiante dorsale 'en coup de poignard' soulagée par l'antéflexion = douleur pancréatique typique."
  },
  {
    "id": "q-pa-04",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel délai minimal après le début des symptômes est recommandé pour réaliser le scanner abdominal avec injection afin d'évaluer de façon optimale la nécrose pancréatique (score de Balthazar) ?",
    "options": [
      "Immédiatement dès la 1ère heure",
      "Entre la 48ème et la 72ème heure (après 48-72h)",
      "À la 12ème heure systématiquement",
      "Après 10 jours uniquement",
      "Le scanner n'est jamais nécessaire dans la première semaine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La nécrose pancréatique met 48 à 72 heures à se délimiter radiologiquement. Réalisé trop tôt (avant H48), le scanner sous-estime la gravité de la nécrose.",
    "clinicalPearl": "TDM abdominale de référence : à réaliser entre 48h et 72h après le début des douleurs."
  },
  {
    "id": "q-pa-05",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "L'indice de sévérité scanographique (CTSI de Balthazar modifié) combine quels paramètres ?",
    "options": [
      "L'âge du patient et le volume de la rate",
      "L'inflammation péri-pancréatique (stade de A à E noté de 0 à 4) et le pourcentage de nécrose glandulaire (noté de 0 à 6)",
      "Le taux de lipase et le taux de globules blancs",
      "Le nombre de calculs biliaires et le diamètre du cholédoque",
      "La taille du foie et l'épaisseur du mésentère"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le CTSI additionne le score morphologique de Balthazar (A=0, B=1, C=2, D=3, E=4) et le score de nécrose (0%=0, <30%=2, 30-50%=4, >50%=6) sur un total maximal de 10 points.",
    "clinicalPearl": "Score de Balthazar modifié (CTSI sur 10) = Score morphologique (0 à 4) + Pourcentage de nécrose glandulaire (0 à 6)."
  },
  {
    "id": "q-pa-06",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel score clinique prédictif de sévérité à l'admission et à la 48ème heure comporte 11 paramètres physico-chimiques ?",
    "options": [
      "Score de Glasgow (Imrie)",
      "Score de Ranson",
      "Score de Child-Pugh",
      "Score de BCLC",
      "Score d'Alvarado"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le score de Ranson évalue 5 critères à l'admission (âge, leucocytes, glycémie, LDH, ASAT) et 6 critères à H48 (hématocrite, urée, calcémie, PaO2, déficit en bases, séquestration liquidienne).",
    "clinicalPearl": "Score de Ranson : 5 paramètres à H0 + 6 paramètres à H48. Un score >= 3 prédit une pancréatite aiguë sévère."
  },
  {
    "id": "q-pa-07",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel examen non invasif d'imagerie doit être réalisé en urgence dès les premières 24 heures pour rechercher l'étiologie lithiasique biliaire ?",
    "options": [
      "Scanner sans injection",
      "Échographie abdominale hépatobiliaire",
      "Cholangio-IRM",
      "Transit baryté",
      "Abdomen sans préparation"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'échographie abdominale est l'examen de choix pour rechercher des microlithiases ou calculs vésiculaires et une dilatation de la voie biliaire principale dès l'admission.",
    "clinicalPearl": "Échographie hépatobiliaire systématique à H24 pour traquer l'étiologie lithiasique."
  },
  {
    "id": "q-pa-08",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la pierre angulaire de la prise en charge médicale initiale de la pancréatite aiguë au cours des premières 24 heures ?",
    "options": [
      "Antibiothérapie prophylactique systématique par céphalosporine",
      "Remplissage vasculaire précoce et contrôlé par solutés cristalloïdes (Ringer Lactate) et analgésie multimodale",
      "Chirurgie de résection précoce de la nécrose",
      "Mise sous héparine curative à forte dose",
      "Alimentation parentérale totale exclusive"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La réanimation hydro-électrolytique précoce et vigoureuse par cristalloïdes (Ringer Lactate) pour compenser le troisième secteur, associée à une analgésie efficace (paliers II/III), prévient l'ischémie tissulaire et l'insuffisance rénale.",
    "clinicalPearl": "Traitement initial majeur = Remplissage vasculaire précoce aux cristalloïdes (Ringer) + Analgésie puissante."
  },
  {
    "id": "q-pa-09",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "L'antibiothérapie prophylactique systématique dans la pancréatite aiguë nécrosante non infectée :",
    "options": [
      "Est formellement recommandée dès le premier jour",
      "N'est pas recommandée car elle ne réduit ni la mortalité ni le risque d'infection et sélectionne des germes résistants",
      "Doit durer au moins un mois",
      "Est réservée aux formes œdémateuses",
      "Doit associer obligatoirement trois antifongiques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les sociétés savantes (SNFGE, IAP/APA) contre-indiquent l'antibiothérapie prophylactique systématique. Les antibiotiques ne sont indiqués qu'en cas d'infection prouvée ou de forte suspicion de nécrose infectée.",
    "clinicalPearl": "Pas d'antibiothérapie prophylactique dans la pancréatite aiguë (recommandation formelle)."
  },
  {
    "id": "q-pa-10",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel geste interventionnel d'urgence est indiqué dans les 24 à 48 heures en cas de pancréatite aiguë lithiasique compliquée d'une angiocholite aiguë associée ?",
    "options": [
      "Cholécystectomie par laparotomie en urgence",
      "Sphinctérotomie biliaire endoscopique par CPRE pour désobstruction du cholédoque",
      "Pose d'une sonde naso-gastrique seule",
      "Ponction sous scanner du pancréas",
      "Hépatectomie partielle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'angiocholite associée à une pancréatite aiguë lithiasique impose une sphinctérotomie endoscopique par CPRE en urgence (< 24h) pour désobstruer la voie biliaire principale.",
    "clinicalPearl": "Pancréatite lithiasique + angiocholite = CPRE avec sphinctérotomie biliaire en urgence (< 24-48h)."
  },
  {
    "id": "q-pa-11",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quand doit être réalisée la cholécystectomie en cas de pancréatite aiguë lithiasique bénigne (forme œdémateuse résolue) pour éviter une récidive précoce ?",
    "options": [
      "Après un an de surveillance",
      "Au cours de la même hospitalisation, dès la disparition des douleurs et la normalisation des enzymes",
      "Jamais, la lithiase n'a plus d'importance après la crise",
      "Au 6ème mois uniquement",
      "Sous anesthésie locale au lit du malade"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En l'absence de cholécystectomie précoce lors de la même hospitalisation, le risque de récidive lithiasique dans les 6 à 8 semaines dépasse 30%.",
    "clinicalPearl": "Pancréatite lithiasique bénigne = cholécystectomie sous cœlioscopie durant la même hospitalisation."
  },
  {
    "id": "q-pa-12",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "L'apparition de bulles de gaz au sein d'une coulée de nécrose pancréatique au scanner abdominal injecté signe :",
    "options": [
      "Une guérison spontanée par régénération tissulaire",
      "Une surinfection de la nécrose pancréatique par des germes producteurs de gaz (urgence médico-chirurgicale)",
      "Une aérobilie physiologique",
      "Une erreur de reconstruction d'image",
      "Une atélectasie basale pulmonaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La présence de bulles d'air/gaz au sein de la nécrose au scanner est pathognomonique de nécrose infectée, principale cause de mortalité tardive dans la pancréatite aiguë.",
    "clinicalPearl": "Bulles de gaz au scanner dans la nécrose = nécrose pancréatique infectée (urgence thérapeutique)."
  },
  {
    "id": "q-pa-13",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Selon la stratégie mini-invasive actuelle dite 'step-up approach' pour la nécrose pancréatique infectée, quelle est la première étape ?",
    "options": [
      "Nécrosectomie par grande laparotomie ouverte d'emblée",
      "Drainage percutané ou endoscopique trans-gastrique sous écho-endoscopie, associé à une antibiothérapie ciblée",
      "Abstention totale sans drainage",
      "Pancréatectomie totale",
      "Chimio-embolisation pancréatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'approche 'step-up' privilégie le drainage premier mini-invasif (percutané ou endoscopique trans-gastrique), évitant la chirurgie ouverte chez plus de 60% des patients avec une morbidité réduite.",
    "clinicalPearl": "Nécrose infectée : stratégie 'step-up approach' (drainage mini-invasif d'abord, nécrosectomie vidéo-assistée si échec)."
  },
  {
    "id": "q-pa-14",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel signe cutané ecchymotique péri-ombilical traduit une hémorragie rétropéritonéale dans une pancréatite aiguë nécrosante sévère ?",
    "options": [
      "Signe de Grey-Turner",
      "Signe de Cullen",
      "Signe de Murphy",
      "Signe de Blumberg",
      "Signe de Rovsing"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le signe de Cullen correspond à une ecchymose péri-ombilicale, tandis que le signe de Grey-Turner correspond à une ecchymose des flancs, tous deux témoins d'un hémorétropéritoine sévère.",
    "clinicalPearl": "Signe de Cullen = péri-ombilical ; Signe de Grey-Turner = flancs. Signes de gravité extrême."
  },
  {
    "id": "q-pa-15",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle complication systémique respiratoire précoce caractérise la pancréatite aiguë grave et nécessite souvent une ventilation mécanique ?",
    "options": [
      "Emphysème sous-cutané isolé",
      "Syndrome de détresse respiratoire aiguë de l'adulte (SDRA)",
      "Pneumothorax spontané bilatéral",
      "Infarctus pulmonaire massif",
      "Laryngite striduleuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La libération massive de cytokines pro-inflammatoires (TNF-alpha, IL-1, phospholipase A2) lèse la membrane alvéolo-capillaire pulmonaire, entraînant un SDRA (infiltrats bilatéraux, PaO2/FiO2 diminuée).",
    "clinicalPearl": "Défaillance respiratoire la plus fréquente = SDRA secondaire au relargage massif de médiateurs inflammatoires."
  },
  {
    "id": "q-pa-16",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel taux de triglycérides sériques dépasse habituellement le seuil critique déclenchant une pancréatite aiguë par hypertriglycéridémie ?",
    "options": [
      "2 g/L (2,2 mmol/L)",
      "5 g/L (5,6 mmol/L)",
      "10 g/L (environ 11,3 mmol/L)",
      "0,5 g/L",
      "1 g/L"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le risque de pancréatite aiguë augmente fortement quand la triglycéridémie dépasse 10 g/L (ou 1000 mg/dL), consécutive à l'action lipolytique libérant des acides gras toxiques pour la microcirculation pancréatique.",
    "clinicalPearl": "Pancréatite par hypertriglycéridémie : taux > 10 g/L (1000 mg/dL). Sérum lactescent."
  },
  {
    "id": "q-pa-17",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Une collection liquidienne bien délimitée, entourée d'une paroi fibreuse sans épithélium, survenant plus de 4 semaines après une pancréatite aiguë œdémateuse interstitielle s'appelle :",
    "options": [
      "Une collection nécrotique aiguë",
      "Un pseudokyste du pancréas",
      "Un cystadénome mucineux",
      "Un phlegmon péritonéal",
      "Un hématome capsulaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Selon la classification d'Atlanta révisée, une collection liquidienne persistante > 4 semaines après pancréatite interstitielle avec paroi bien formée est un pseudokyste.",
    "clinicalPearl": "Collection > 4 semaines sur pancréatite œdémateuse = Pseudokyste (paroi fibreuse non épithélialisée)."
  },
  {
    "id": "q-pa-18",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie électrolytique sévère précoce est un critère classique de mauvais pronostic dans le score de Ranson à la 48ème heure ?",
    "options": [
      "L'hypokaliémie isolée",
      "L'hypocalcémie (calcémie < 2,0 mmol/L ou 80 mg/L)",
      "L'hypermagnésémie",
      "L'hyperchlorémie",
      "L'hypernatrémie majeure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hypocalcémie est secondaire à la précipitation du calcium avec les acides gras libres formés par saponification des graisses nécrosées (cytostéatonécrose), marquant l'étendue des lésions.",
    "clinicalPearl": "Hypocalcémie = témoin direct de la saponification des graisses (stéatonécrose étendue) = critère de gravité."
  },
  {
    "id": "q-pa-19",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "En matière de nutrition dans la pancréatite aiguë bénigne, quand la reprise de l'alimentation orale doit-elle être proposée ?",
    "options": [
      "Après 3 semaines de jeûne strict",
      "Dès la diminution notable des douleurs et la disparition de l'iléus réflexe, sans attendre la normalisation de la lipase",
      "Uniquement après normalisation stricte de la lipasémie",
      "Après réalisation d'une IRM de contrôle",
      "Toujours après une phase de nutrition parentérale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La reprise de l'alimentation orale dès que la douleur s'estompe et que le patient a faim raccourcit la durée d'hospitalisation sans majorer les récidives, sans corrélation nécessaire avec le taux de lipasémie.",
    "clinicalPearl": "Reprise alimentaire précoce dès sédation clinique de la douleur (ne pas attendre la normalisation de la lipase)."
  },
  {
    "id": "q-pa-20",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause toxique médicamenteuse est classiquement incriminée dans les pancréatites aiguës iatrogènes ?",
    "options": [
      "L'Azathioprine / 6-Mercaptopurine",
      "Le Paracétamol à dose thérapeutique",
      "L'Amoxicilline",
      "La Vitamine C",
      "L'Oméprazole à dose standard"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'azathioprine (immunosuppresseur utilisé dans les MICI) est l'un des médicaments les plus fréquemment responsables de pancréatite aiguë immuno-allergique précoce.",
    "clinicalPearl": "Pancréatites médicamenteuses : Azathioprine, Didanosine, Valproate de sodium, Furosémide, Tétracyclines."
  },
  {
    "id": "q-pa-21",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la pancréatite aiguë nécrosante, une collection mixte contenant du liquide et des débris nécrotiques entourée d'une paroi bien définie après 4 semaines d'évolution est appelée :",
    "options": [
      "Pseudokyste pur",
      "WON (Walled-Off Necrosis / Nécrose pancréatique encapsulée)",
      "Abcès sous-phrénique exclusif",
      "Gastroparésie réactionnelle",
      "Adénome kystique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La Walled-Off Necrosis (WON) désigne une collection intra- ou extra-pancréatique mature de nécrose encapsulée survenant au-delà de 4 semaines.",
    "clinicalPearl": "Nécrose encapsulée mature (> 4 semaines) = WON (Walled-Off Necrosis)."
  },
  {
    "id": "q-pa-22",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est l'anomalie hématologique précoce qui traduit une hémoconcentration sévère et prédit le développement d'une nécrose pancréatique ?",
    "options": [
      "Hématocrite < 30%",
      "Hématocrite > 44% à l'admission ou absence de diminution à H24",
      "Thrombocytose à 800 000/mm³",
      "Éosinophilie massive",
      "Réticulocytose élevée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Un hématocrite élevé (> 44%) témoigne d'un important troisième secteur liquidien hypovolémique ; l'absence de correction sous réhydratation est fortement corrélée à la survenue de nécrose glandulaire.",
    "clinicalPearl": "Hématocrite > 44% = hémoconcentration majeure = indicateur précoce de pancréatite nécrosante."
  },
  {
    "id": "q-pa-23",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Le dosage de l'amylasémie comparé à celui de la lipasémie dans le diagnostic de la pancréatite aiguë :",
    "options": [
      "Est plus sensible et plus spécifique",
      "Est abandonné car moins spécifique et de cinétique plus brève que la lipasémie",
      "Est formellement obligatoire en association",
      "Doit être dosé toutes les 6 heures",
      "Reste le marqueur de choix chez l'enfant"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'amylase salivaire et sa clairance rénale rapide rendent l'amylasémie peu spécifique et peu sensible comparativement à la lipasémie, qui est le seul test enzymatique recommandé.",
    "clinicalPearl": "Seul le dosage de la lipase est recommandé. L'amylase ne doit plus être prescrite."
  },
  {
    "id": "q-pa-24",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication vasculaire splanchnique locale peut compliquer une pancréatite aiguë nécrosante par contiguïté inflammatoire ?",
    "options": [
      "Thrombose veineuse spléno-mésentérico-portale et faux anévrysme artériel (ex: artère splénique)",
      "Dissection de la carotide interne",
      "Thrombose de la veine cave inférieure isolée",
      "Rupture de l'artère sous-clavière",
      "Anévrisme de l'artère cérébrale moyenne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'érosion vasculaire par les enzymes pancréatiques peut créer un pseudo-anévrysme (artère splénique, gastro-duodénale) et une thrombose veineuse du système porte ou de la veine splénique.",
    "clinicalPearl": "Complications vasculaires de la nécrose : thrombose veineuse splénique/portale et pseudo-anévrysmes artériels à risque hémorragique."
  },
  {
    "id": "q-pa-25",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la définition d'une défaillance d'organe 'persistante' selon la classification d'Atlanta révisée (score de Marshall modifié >= 2) ?",
    "options": [
      "Défaillance durant moins de 12 heures",
      "Défaillance durant plus de 48 heures",
      "Défaillance répondant immédiatement au remplissage",
      "Défaillance survenant au 20ème jour",
      "Défaillance uniquement respiratoire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La pancréatite aiguë est classée 'grave' s'il existe une défaillance d'organe (respiratoire, rénale ou cardiovasculaire) persistante au-delà de 48 heures. Si elle régresse en moins de 48h, elle est qualifiée de modérément sévère.",
    "clinicalPearl": "Défaillance d'organe persistante (> 48h) = Pancréatite aiguë sévère (mortalité jusqu'à 30-50%)."
  },
  {
    "id": "q-cas-pa-1",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Mme H., 42 ans, sans antécédent particulier, consulte aux urgences pour une douleur épigastrique insoutenable apparue brutalement après un repas copieux, transfixiante vers le dos, accompagnée de vomissements répétés bilieux. À l'examen : TA 110/70 mmHg, pouls 105 bpm, défense épigastrique sans contracture, absence d'ictère. Biologie : Lipasémie à 1850 UI/L (N < 60 UI/L), ALAT à 280 UI/L (6N), ASAT à 210 UI/L, bilirubine totale normale. Quelle est la cause la plus probable et quel examen confirmera l'étiologie ?",
    "options": [
      "Pancréatite alcoolique ; dosage de la gamma-GT et VGM",
      "Pancréatite aiguë lithiasique ; échographie abdominale hépatobiliaire précoce",
      "Perforation d'ulcère gastrique ; abdomen sans préparation",
      "Infarctus du myocarde inférieur ; coronarographie d'emblée",
      "Pancréatite auto-immune ; dosage des IgG4"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Une élévation précoce des ALAT > 3N associée à la pancréatite aiguë a une valeur prédictive positive de plus de 90% en faveur d'une étiologie lithiasique biliaire. L'échographie est l'examen de choix pour visualiser les calculs vésiculaires.",
    "clinicalPearl": "Pancréatite aiguë + ALAT > 3N = étiologie lithiasique très probable (VPP > 90%) -> échographie biliaire."
  },
  {
    "id": "q-cas-pa-2",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Mr Y., 48 ans, éthylique chronique, est hospitalisé pour pancréatite aiguë. À l'admission, hématocrite à 46%, glycémie à 14 mmol/L, GB à 17 000/mm³. À la 48ème heure, un scanner abdominal injecté met en évidence un pancréas tuméfié avec 40% de nécrose du corps et de la queue et deux coulées de nécrose extrapancréatique péripancréatiques sans bulles d'air. Il n'y a pas de défaillance hémodynamique ni rénale. Quel est le score CTSI de Balthazar modifié de ce patient ?",
    "options": [
      "Score 2 (forme bénigne)",
      "Score 4 (forme modérée)",
      "Score 7 (stade D = 3 points + nécrose 30-50% = 4 points)",
      "Score 10 (gravité maximale)",
      "Score 0 (normal)"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Balthazar D (2 coulées ou inflammation péripancréatique importante) correspond à 3 points ; une nécrose glandulaire entre 30 et 50% ajoute 4 points, soit un CTSI total de 7 points (pancréatite sévère).",
    "clinicalPearl": "CTSI de 7 à 10 = pancréatite aiguë grave avec morbidité et mortalité élevées."
  },
  {
    "id": "q-cas-pa-3",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Chez ce même patient Mr Y., à J14 d'évolution, survient une détérioration clinique fébrile brutale avec fièvre à 39,2°C, frissons, tachycardie à 120 bpm, polynucléose neutrophile à 24 000/mm³ et CRP à 280 mg/L. Le nouveau scanner abdominal injecté met en évidence des bulles de gaz au sein de la nécrose pancréatique. Quelle est la conduite thérapeutique prioritaire ?",
    "options": [
      "Laparotomie immédiate avec pancréatectomie totale",
      "Débuter une antibiothérapie probabiliste à bonne diffusion pancréatique (ex: Carbapénème ou C3G + Métronidazole) et organiser un drainage mini-invasif (step-up approach)",
      "Surveillance simple sous paracétamol",
      "Prescrire des anti-inflammatoires non stéroïdiens à forte dose",
      "Arrêt de tout traitement et nutrition entérale isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La nécrose infectée (présence de bulles de gaz + sepsis) impose une antibiothérapie ciblée à large spectre pénétrant le tissu pancréatique (carbapénèmes ou C3G+métronidazole ou fluoroquinolones) couplée à un drainage mini-invasif (percutané ou endoscopique).",
    "clinicalPearl": "Nécrose infectée confirmée = Antibiothérapie adaptée + Drainage mini-invasif de la collection."
  },
  {
    "id": "q-cas-pa-4",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Mme N., 55 ans, admise pour pancréatite aiguë lithiasique, développe à H18 un ictère franc conjonctival, une fièvre à 39,5°C avec frissons intenses et une douleur exquise de l'hypochondre droit (triade de Charcot). Les bilans montrent : bilirubine totale à 95 µmol/L, gamma-GT 10N, phosphatases alcalines 4N. L'échographie montre un calcul de 8 mm enclavé dans le bas cholédoque avec voie biliaire principale dilatée à 14 mm. Quelle est la thérapeutique urgente indiquée dans les 24h ?",
    "options": [
      "Cholécystectomie cœlioscopique en urgence absolue",
      "Sphinctérotomie biliaire endoscopique d'urgence par CPRE avec extraction du calcul",
      "Pose d'une sonde d'aspiration gastrique et attente de 72h",
      "Perfusion de dérivés nitrés",
      "Drainage transcystique sous anesthésie locale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association pancréatite aiguë + angiocholite aiguë obstructive est une urgence vitale nécessitant une désobstruction de la voie biliaire par CPRE et sphinctérotomie endoscopique dans les 24 heures.",
    "clinicalPearl": "Angiocholite aiguë associée à une pancréatite lithiasique = CPRE et sphinctérotomie en urgence."
  },
  {
    "id": "q-cas-pa-5",
    "courseId": "crs-gastro-pancreatite-aigue",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un jeune homme de 22 ans sans prise d'alcool ni anomalie lithiasique à l'échographie est hospitalisé pour un premier épisode de pancréatite aiguë modérée. Son bilan biologique d'admission montre un sérum opalescent lactescent, un taux de triglycérides à 18 g/L (20,3 mmol/L) et un cholestérol total à 8 g/L. Quel traitement d'urgence permet de faire baisser rapidement la triglycéridémie en réanimation en stimulant la lipoprotéine lipase ?",
    "options": [
      "Perfusion continue d'insuline associée à du sérum glucosé (et/ou échanges plasmatiques / plasmaphérèse)",
      "Statine à très forte dose par voie intraveineuse",
      "Régime hyperlipidique exclusif",
      "Chirurgie de pontage pancréatique",
      "Antibiotiques aminosides"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'insuline active puissamment la lipoprotéine lipase endothéliale, accélérant la clairance des chylomicrons et triglycérides sériques. Dans les formes graves, la plasmaphérèse permet une élimination mécanique rapide.",
    "clinicalPearl": "Pancréatite par hypertriglycéridémie sévère = Insuline IVSE (+/- héparine) et/ou plasmaphérèse."
  }
];

export const PANCREATITE_AIGUE_RESOURCES: CourseResource[] = [
  {
    "id": "res-pa-summary",
    "courseId": "crs-gastro-pancreatite-aigue",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Pancréatite Aiguë",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Pancréatite Aiguë\n- **Diagnostic positif** : Au moins 2 critères sur 3 :\n  1. Douleur abdominale épigastrique transfixiante aiguë en coup de poignard.\n  2. Lipasémie > 3N (l'amylase n'est plus recommandée).\n  3. Imagerie typique (TDM ou échographie).\n- **Étiologies principales** : Lithiase biliaire (45-50%, ALAT > 3N) et alcoolisme chronique (35%). Autres : hypertriglycéridémie (> 10 g/L), hypercalcémie, post-CPRE, médicaments (azathioprine).\n- **Évaluation scanographique** : TDM abdominale injectée à réaliser entre H48 et H72 (indice de Balthazar modifié / CTSI sur 10 points).\n- **Prise en charge** :\n  - Remplissage hydro-électrolytique précoce vigoureux (cristalloïdes / Ringer).\n  - Analgésie multimodale (paliers II/III).\n  - PAS d'antibiothérapie prophylactique.\n  - Si angiocholite associée : CPRE avec sphinctérotomie en urgence (< 24-48h).\n  - Pancréatite lithiasique bénigne : cholécystectomie au cours de la même hospitalisation.\n  - Nécrose infectée (bulles de gaz) : approche 'step-up' (antibiothérapie adaptée + drainage mini-invasif percutané ou endoscopique).",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-pa-pearls",
    "courseId": "crs-gastro-pancreatite-aigue",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Pancréatite Aiguë",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Piège** : Ne jamais réaliser le scanner de référence à H0 (sous-estime la nécrose) -> attendre 48 à 72 heures.\n- ⚡ **Règle d'or** : ALAT > 3 fois la normale = étiologie lithiasique très probable (VPP > 90%).\n- ⚡ **Signe de gravité** : Persistance d'une défaillance viscérale (Marshall >= 2) au-delà de 48 heures.",
    "author": "Commission Pédagogique"
  }
];
