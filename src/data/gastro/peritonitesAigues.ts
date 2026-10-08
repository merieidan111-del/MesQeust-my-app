import { Question, CourseResource } from '../../types/medical';

export const PERITONITES_AIGUES_QUESTIONS: Question[] = [
  {
    "id": "q-perit-01",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le maître symptôme physique pathognomonique de la péritonite aiguë généralisée à l'examen clinique ?",
    "options": [
      "Le météorisme abdominal diffus",
      "La contracture abdominale réflexe invincible, permanente et douloureuse ('ventre de bois')",
      "Le clapotage gastrique à jeun",
      "L'orifice herniaire douloureux réductible",
      "La disparition isolée de la matité hépatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La contracture abdominale (involontaire, tonique, invincible et douloureuse) est le signe cardinal pathognomonique de l'irritation péritonéale aiguë généralisée.",
    "clinicalPearl": "Contracture abdominale involontaire permanente ('ventre de bois') = signe pathognomonique de péritonite."
  },
  {
    "id": "q-perit-02",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la péritonite par perforation d'ulcère gastro-duodénal, quel signe radiologique classique est recherché sur le cliché de l'abdomen sans préparation (ASP) ou au scanner ?",
    "options": [
      "Des niveaux hydro-aériques plus larges que hauts",
      "Un croissant gazeux sous-diaphragmatique bilatéral ou droit (pneumopéritoine)",
      "Une grisaille diffuse sans aérobie",
      "Une distension colique gazeuse isolée",
      "Une calcification en fer à cheval"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le pneumopéritoine traduit l'épanchement d'air libre issu de la perforation d'un viscère creux, visualisé sous forme de croissant gazeux sous les coupoles diaphragmatiques.",
    "clinicalPearl": "Pneumopéritoine (croissant gazeux sous-diaphragmatique) = perforation d'un viscère creux."
  },
  {
    "id": "q-perit-03",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la définition d'une péritonite 'secondaire' ?",
    "options": [
      "Une infection spontanée du liquide d'ascite chez le cirrhotique sans foyer chirurgical intra-abdominal",
      "Une infection péritonéale aiguë consécutive à la perforation, l'inflammation ou la nécrose d'un organe digestif intra-abdominal",
      "Une infection survenant exclusivement après dialyse péritonéale",
      "Une péritonite tuberculeuse isolée",
      "Une infection primitive hématogène de l'enfant"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La péritonite secondaire est de loin la plus fréquente (> 90%), faisant suite à la perforation ou la gangrène d'un viscère abdominal (ulcère perforé, appendicite, diverticulite).",
    "clinicalPearl": "Péritonite secondaire = brèche ou nécrose d'un organe intra-abdominal (cause chirurgicale)."
  },
  {
    "id": "q-perit-04",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est l'étiologie la plus fréquente de péritonite aiguë par perforation chez le sujet jeune en bonne santé ?",
    "options": [
      "Cancer du côlon perforé",
      "Appendicite aiguë perforée ou perforation d'ulcère duodénal",
      "Infarctus mésentérique",
      "Péritonite diverticulaire de Hinchey",
      "Perforation iatrogène de coloscopie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez le sujet jeune, l'appendicite compliquée de perforation et la perforation d'ulcère gastro-duodénal constituent les deux premières étiologies de péritonite aiguë secondaire.",
    "clinicalPearl": "Sujet jeune : appendicite gangrénée perforée et ulcère gastro-duodénal perforé."
  },
  {
    "id": "q-perit-05",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'infection spontanée du liquide d'ascite (ISLA) du cirrhotique (péritonite bactérienne spontanée / péritonite primitive), quel critère cytologique affirme le diagnostic ?",
    "options": [
      "Taux de polynucléaires neutrophiles (PNN) > 250 / mm³ (ou > 0,25 G/L) dans le liquide d'ascite",
      "Taux de lymphocytes > 1000 / mm³",
      "Protéinorachie élevée",
      "Présence d'hématies pures sans leucocytes",
      "Liquide chyleux stérile"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le diagnostic d'ISLA est posé dès que le liquide de ponction d'ascite contient plus de 250 PNN/mm³, justifiant une antibiothérapie immédiate par C3G sans attendre la culture.",
    "clinicalPearl": "ISLA du cirrhotique = PNN dans l'ascite > 250/mm³ -> C3G IV immédiate (ex: Céfotaxime) + perfusion d'albumine."
  },
  {
    "id": "q-perit-06",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication rénale majeure doit être prévenue par une perfusion d'albumine intraveineuse (1,5 g/kg à J1 puis 1 g/kg à J3) lors du traitement d'une infection spontanée de l'ascite chez le cirrhotique ?",
    "options": [
      "La lithiase rénale oxalocalcique",
      "Le syndrome hépato-rénal (SHR)",
      "La glomérulonéphrite aiguë",
      "L'anurie par compression mécanique des uretères",
      "La polykystose rénale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La perfusion d'albumine à J1 et J3 réduit de façon prouvée le risque d'insuffisance rénale fonctionnelle évoluant vers le redoutable syndrome hépato-rénal et diminue la mortalité.",
    "clinicalPearl": "Infection de l'ascite : Albumine IV (1,5 g/kg à J1 puis 1 g/kg à J3) pour prévenir le syndrome hépato-rénal."
  },
  {
    "id": "q-perit-07",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La classification de Hinchey s'applique à quelle pathologie compliquée de péritonite ?",
    "options": [
      "L'ulcère gastrique",
      "La diverticulite colique sigmoïdienne compliquée",
      "L'angiocholite",
      "Le cancer de l'estomac",
      "La maladie cœliaque"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La classification de Hinchey évalue la gravité des complications de la diverticulite sigmoïdienne : stade I (abcès péricolique), II (abcès pelvien/rétropéritonéal à distance), III (péritonite généralisée purulente), IV (péritonite stercorale/fécale).",
    "clinicalPearl": "Classification de Hinchey : stades I et II (abcès), stade III (péritonite purulente), stade IV (péritonite stercorale fécale)."
  },
  {
    "id": "q-perit-08",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel germe bactérien est le plus fréquemment isolé dans les péritonites communautaires secondaires ?",
    "options": [
      "Staphylococcus aureus résistant à la méticilline",
      "Escherichia coli et bacilles à Gram négatif entériques aérobies associés à des anaérobies (Bacteroides fragilis)",
      "Pseudomonas aeruginosa exclusif",
      "Streptococcus pneumoniae seul",
      "Mycobacterium bovis"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La flore des péritonites secondaires est polymicrobienne : bacilles Gram négatif aéro-anaérobies facultatifs (E. coli, Klebsiella) associés à des anaérobies stricts du tube digestif (Bacteroides fragilis).",
    "clinicalPearl": "Flore de péritonite secondaire = Polymicrobienne digestive (E. coli + Bacteroides fragilis)."
  },
  {
    "id": "q-perit-09",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle attitude chirurgicale de référence est classique face à une péritonite stercorale par perforation diverticulaire sigmoïdienne (Hinchey IV) chez un patient instable ?",
    "options": [
      "Suture simple de la perforation sous cœlioscopie",
      "Intervention de Hartmann (sigmoïdectomie avec colostomie terminale et fermeture du moignon rectal)",
      "Cholécytectomie avec drainage",
      "Anastomose colorectale immédiate sans protection",
      "Mise sous pansement compressif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'intervention de Hartmann résèque le foyer septique sans risquer de lâchage d'anastomose en milieu fécal et septique, privilégiée chez le patient en choc septique.",
    "clinicalPearl": "Hinchey IV (péritonite stercorale fécale) = Intervention de Hartmann (résection + colostomie terminale)."
  },
  {
    "id": "q-perit-10",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel signe clinique retrouvé au toucher rectal est très évocateur d'une irritation péritonéale dans le cul-de-sac de Douglas ?",
    "options": [
      "Prostate hypertrophiée indolore",
      "Douleur vive déclenchée par la palpation du cul-de-sac de Douglas ('cri du Douglas')",
      "Saignement hémorroïdaire isolé",
      "Béance sphinctérienne totale",
      "Fécalome induré indolore"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La palpation du cul-de-sac péritonéal de Douglas au toucher rectal déclenche une vive douleur appelée 'cri du Douglas', traduisant l'accumulation de pus ou de liquide d'épanchement pelvien.",
    "clinicalPearl": "'Cri du Douglas' au toucher rectal = épanchement péritonéal déclive infecté ou inflammatoire."
  },
  {
    "id": "q-perit-11",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "L'antibiothérapie probabiliste intraveineuse d'une péritonite aiguë communautaire secondaire doit couvrir :",
    "options": [
      "Uniquement les staphylocoques dorés",
      "Les entérobactéries (Gram négatif) et les bactéries anaérobie digestives",
      "Exclusivement les légionelles",
      "Les mycobactéries atypiques",
      "Les virus herpétiques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le protocole de première ligne associe une céphalosporine de 3ème génération (ou aminopénicilline/acide clavulanique) et du métronidazole, ou de la pipéracilline-tazobactam.",
    "clinicalPearl": "Antibiothérapie de péritonite : large spectre couvrant entérobactéries + anaérobie (ex: C3G + Métronidazole)."
  },
  {
    "id": "q-perit-12",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la définition d'une péritonite 'tertiaire' ?",
    "options": [
      "Une péritonite survenant chez un nouveau-né",
      "Une infection péritonéale persistante ou récurrente au moins 48 heures après un traitement chirurgical adéquat d'une péritonite secondaire, liée à des germes opportunistes ou résistants",
      "Une péritonite par rupture de rate",
      "Une péritonite après ingestion d'acide caustique",
      "Une péritonite tuberculeuse caséeuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La péritonite tertiaire survient chez des patients immunodéprimés ou de réanimation après échec du traitement d'une péritonite secondaire, caractérisée par des micro-organismes nosocomiaux multirésistants ou des levures (Candida).",
    "clinicalPearl": "Péritonite tertiaire = persistance du sepsis intra-abdominal après traitement chirurgical bien conduit (flore résistante/Candida)."
  },
  {
    "id": "q-perit-13",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La disparition de la matité pré-hépatique à la percussion de l'hypochondre droit (remplacée par un tympanisme) porte le nom de :",
    "options": [
      "Signe de Blumberg",
      "Signe de Jobert",
      "Signe de Carnett",
      "Signe de Courvoisier",
      "Signe de Trousseau"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le signe de Jobert correspond à la disparition de la matité hépatique physiologique remplacée par un tympanisme en regard du foie, traduisant la présence d'air libre intrapéritonéal (pneumopéritoine).",
    "clinicalPearl": "Signe de Jobert = tympanisme pré-hépatique remplaçant la matité = pneumopéritoine."
  },
  {
    "id": "q-perit-14",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge d'un ulcère duodénal perforé vu précocement (< 6 heures) chez un patient jeune, quelle technique chirurgicale est la plus couramment réalisée ?",
    "options": [
      "Gastrectomie des 4/5èmes avec anastomose de Billroth II",
      "Excision des berges, suture de la perforation et omentoplastie (patch d'épiploon) sous cœlioscopie ou laparotomie",
      "Vagotomie tronculaire bilatérale isolée sans suture",
      "Pose d'une gastrostomie d'alimentation",
      "Jéjunostomie de décharge"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La suture de la brèche ulcérée protégée par un patch épiploïque pédiculé (technique de Graham / omentoplastie) suivie d'un lavage abondant et de la prescription d'IPP à haute dose est le traitement de référence.",
    "clinicalPearl": "Ulcère duodénal perforé = suture de la brèche + omentoplastie (patch de Graham) + toilette péritonéale + IPP."
  },
  {
    "id": "q-perit-15",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans quel cas exceptionnel le traitement médical conservateur d'une perforation d'ulcère gastroduodénal selon la méthode de Taylor peut-il être discuté ?",
    "options": [
      "Péritonite généralisée avec choc septique",
      "Patient vu très précocement (< 6h), à jeun au moment de la perforation, sans défense ni contracture généralisée, avec état clinique parfait et sous stricte surveillance chirurgicale",
      "Présence d'un cancer gastrique ulcéré hémorragique",
      "Péritonite stercorale avec pneumopéritoine massif",
      "Patient fébrile avec polypnée à 35/min"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La méthode de Taylor (aspiration naso-gastrique continue, IPP intraveineux, antibiothérapie, jeûne strict) est réservée à des perforations bouchées chez un sujet à jeun, sans péritonite généralisée, sous contrôle chirurgical armé continu.",
    "clinicalPearl": "Méthode de Taylor (traitement médical de la perforation d'ulcère) : indication très sélective (ulcère bouché, patient à jeun, stable)."
  },
  {
    "id": "q-perit-16",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel geste per-opératoire fondamental doit TOUJOURS être réalisé lors de la chirurgie d'une péritonite par perforation d'un ulcère GASTRIQUE (et non duodénal) ?",
    "options": [
      "Une cholécystectomie préventive",
      "Des biopsies des berges de la perforation avec examen histologique pour éliminer un adénocarcinome gastrique perforé",
      "Une splénectomie de principe",
      "Une appendicectomie prophylactique",
      "Une ligature de l'artère hépatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Tout ulcère gastrique peut être un cancer ulcéré. Lors de la prise en charge d'une perforation gastrique, la biopsie systématique des berges est formelle pour ne pas méconnaître un adénocarcinome.",
    "clinicalPearl": "Perforation gastrique : biopsies obligatoires des berges (recherche d'un adénocarcinome gastrique méconnu)."
  },
  {
    "id": "q-perit-17",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Le lavage péritonéal per-opératoire lors d'une péritonite aiguë généralisée doit être réalisé avec :",
    "options": [
      "De l'eau oxygénée pure",
      "Un grand volume de sérum physiologique tiède (plusieurs litres) avec aspiration complète de tous les recoins anatomiques",
      "De l'alcool à 70 degrés",
      "Une solution d'iode non diluée",
      "Une solution de glucose concentré à 30%"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La toilette péritonéale exhaustive par lavage abondant au sérum physiologique tiède (6 à 10 litres) diminue l'inoculum bactérien et élimine les dépôts de fibrine et le pus dans tous les récessus (sous-phréniques, Douglas, gouttières pariéto-coliques).",
    "clinicalPearl": "Lavage péritonéal abondant au sérum physiologique tiède (6 à 10 L) : pilier du traitement chirurgical."
  },
  {
    "id": "q-perit-18",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la péritonite asthénique du vieillard ou du sujet dénutri sous corticoïdes, quelle particularité clinique peut égarer le diagnostic ?",
    "options": [
      "Une contracture abdominale hyperalgique d'emblée",
      "L'absence ou la discrétion de la défense/contracture, le tableau étant masqué par une confusion mentale, un choc inexpliqué ou une occlusion réflexe",
      "Une fièvre à 41°C constante",
      "Une rougeur cutanée péri-ombilicale systématique",
      "Une hypertension artérielle sévère"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez le sujet âgé, dénutri ou sous corticothérapie, la réponse péritonéale musculaire est atténuée ou absente ; la péritonite se présente sous une forme 'trompeuse asthénique' avec simple météorisme, confusion ou collapsus.",
    "clinicalPearl": "Péritonite du sujet âgé : contracture souvent absente ou minime ('péritonite asthénique' torpide)."
  },
  {
    "id": "q-perit-19",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une péritonite plastique adhésive compliquée d'ascite gélatineuse avec granulations blanchâtres disséminées sur le péritoine doit faire évoquer en priorité en Algérie :",
    "options": [
      "La péritonite à pyocyanique",
      "La tuberculose péritonéale",
      "La péritonite amibienne",
      "La maladie périodique (fièvre méditerranéenne familiale)",
      "L'endométriose péritonéale pure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La tuberculose péritonéale est fréquente en zone d'endémie : elle réalise une ascite exsudative lymphocytaire avec granulations péritonéales blanc nacré ('en grains de mil') visibles en cœlioscopie.",
    "clinicalPearl": "Ascite exsudative lymphocytaire + granulations en grains de mil au péritoine = Tuberculose péritonéale."
  },
  {
    "id": "q-perit-20",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la péritonite biliaire (cholépéritoine) par perforation vésiculaire, quel est l'aspect macroscopique caractéristique du liquide péritonéal recueilli ?",
    "options": [
      "Liquide clair eau de roche",
      "Liquide vert ou jaune d'or teinté de bile",
      "Liquide chyleux laiteux",
      "Liquide purulent fétide brun sans bile",
      "Sang pur incoagulable"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le liquide est typiquement bilieux jaune-vert franc, consécutif à la nécrose gangréneuse de la paroi vésiculaire lithiasique avec diffusion biliaire intrapéritonéale.",
    "clinicalPearl": "Cholépéritoine = épanchement bilieux jaune-vert par rupture des voies biliaires ou vésicule gangrénée."
  },
  {
    "id": "q-perit-21",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel antibiotique intraveineux à élimination biliaire et rénale est particulièrement recommandé en première intention pour le traitement de l'ISLA chez le cirrhotique ?",
    "options": [
      "Céfotaxime ou Ceftriaxone",
      "Vancomycine seule",
      "Colistine à forte dose",
      "Érythromycine per os",
      "Fluconazole exclusif"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le céfotaxime (C3G) à la dose de 2 g x 3/jour ou la ceftriaxone à la dose de 1-2 g/jour sont les molécules de choix pour l'ISLA, assurant une excellente diffusion dans l'ascite contre les entérobactéries sans toxicité rénale.",
    "clinicalPearl": "Infection du liquide d'ascite : Céfotaxime ou Ceftriaxone IV pendant 5 à 7 jours."
  },
  {
    "id": "q-perit-22",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le risque de l'examen tomodensitométrique chez un patient en choc septique déshydraté avec suspicion de péritonite avant équilibration hémodynamique ?",
    "options": [
      "Aucun risque",
      "L'aggravation de l'insuffisance rénale aiguë et le collapsus en cours d'examen nécessitant de ne pas différer la réanimation hémodynamique préalable",
      "La survenue d'un pneumothorax",
      "La nécrose hépatique aiguë",
      "L'arrêt de l'antibiothérapie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le transport au scanner ne doit jamais précéder la mise en condition et le remplissage hémodynamique d'un patient instable en choc septique.",
    "clinicalPearl": "Réanimation et stabilisation hémodynamique indispensables avant toute imagerie en urgence."
  },
  {
    "id": "q-perit-23",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle enzyme musculaire ou marqueur biologique n'a AUCUNE utilité dans le diagnostic d'une péritonite aiguë ?",
    "options": [
      "La troponine",
      "Les polynucléaires neutrophiles",
      "La protéine C-réactive (CRP)",
      "Les lactates sanguins",
      "La procalcitonine (PCT)"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La troponine est un biomarqueur de nécrose myocardique et n'intervient pas dans le diagnostic de l'infection péritonéale intra-abdominale.",
    "clinicalPearl": "Marqueurs du sepsis péritonéal : Hyperleucocytose, CRP, PCT et Lactates sanguins."
  },
  {
    "id": "q-perit-24",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle incision chirurgicale par laparotomie est le standard classique pour explorer l'ensemble de la cavité péritonéale en urgence lors d'une péritonite généralisée ?",
    "options": [
      "Incision de Mac Burney",
      "Laparotomie médiane à cheval sur l'ombilic",
      "Sous-costale droite de Kocher isolée",
      "Incision de Pfannenstiel",
      "Lombotomie gauche"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La laparotomie médiane permet une exposition complète et rapide de tous les étages de la cavité abdominale, des coupoles diaphragmatiques jusqu'au fond du cul-de-sac de Douglas.",
    "clinicalPearl": "Laparotomie médiane exploratrice = voie d'abord chirurgicale ouverte de référence des péritonites aiguës."
  },
  {
    "id": "q-perit-25",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel traitement médical systématique doit accompagner la prise en charge d'un ulcère gastroduodénal perforé pour favoriser la cicatrisation muqueuse après l'intervention ?",
    "options": [
      "Antisécrétoires inhibiteurs de la pompe à protons (IPP) à forte dose par voie intraveineuse puis orale",
      "Anti-inflammatoires non stéroïdiens",
      "Aspirine protectrice",
      "Antidiarrhéiques",
      "Corticoïdes oraux"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'inhibition puissante de l'acidité gastrique par les IPP (ex: Oméprazole ou És餘méprazole 80 mg bolus puis 8 mg/h ou 40 mg x 2/j) est obligatoire pour protéger la suture et éradiquer H. pylori secondairement.",
    "clinicalPearl": "Ulcère perforé opéré = IPP forte dose IV systématiques + éradication d'Helicobacter pylori ultérieure."
  },
  {
    "id": "q-cas-perit-1",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Un jeune homme de 24 ans sans antécédents médicaux consulte aux urgences pour une douleur abdominale foudroyante apparue il y a 3 heures, décrite comme un 'coup de poignard' en plein épigastre, rapidement diffusée à tout l'abdomen. À l'examen clinique : faciès anxieux, sueurs, apyrétique, TA 105/65 mmHg, pouls 98 bpm. L'abdomen ne respire pas, il existe une contracture musculaire invincible et permanente des quatre quadrants abdominaux ('ventre de bois') avec disparition de la matité hépatique à la percussion. Quel diagnostic posez-vous et quel est le geste radiologique simple immédiat ?",
    "options": [
      "Pancréatite aiguë grave ; échographie abdominale",
      "Péritonite aiguë généralisée par perforation d'ulcère gastro-duodénal ; cliché d'abdomen sans préparation (ASP) debout ou centré sur les coupoles à la recherche d'un pneumopéritoine",
      "Infarctus mésentérique ; artériographie immédiate",
      "Colique néphrétique hyperalgique ; scanner rénal sans injection",
      "Occlusion mécanique du grêle sur bride ; lavement aux hydrosolubles"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le début brutal en coup de poignard, la contracture invincible généralisée en ventre de bois et la disparition de la matité pré-hépatique (signe de Jobert) sont la triade typique de la péritonite par perforation d'ulcère gastro-duodénal. L'ASP montre le pneumopéritoine.",
    "clinicalPearl": "Début foudroyant 'en coup de poignard' + contracture en ventre de bois = perforation d'ulcère gastroduodénal."
  },
  {
    "id": "q-cas-perit-2",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Une patiente de 20 ans consulte pour douleurs de la fosse iliaque droite évoluant depuis 48 heures, initialement modérées, devenues depuis ce matin très intenses et généralisées à tout l'hypogastre avec nausées et vomissements. À l'examen : température 39,2°C, pouls 115 bpm, défense vive et contracture douloureuse de la fosse iliaque droite et du pelvis avec vive douleur au toucher rectal lors de la pression du cul-de-sac de Douglas. Biologie : hyperleucocytose à 18 500 PNN/mm³, CRP à 190 mg/L. Quel est le diagnostic le plus probable et le traitement chirurgical indiqué ?",
    "options": [
      "Salpingite aiguë catarrhale ; traitement médical ambulatoire",
      "Péritonite aiguë appendiculaire (par rupture ou gangrène appendiculaire) ; laparoscopie/cœlioscopie d'urgence avec appendicectomie, toilette péritonéale et antibiothérapie IV",
      "Gastro-entérite aiguë à Salmonella ; réhydratation orale",
      "Grossesse extra-utérine rompue apyrétique ; methotrexate IM",
      "Pyélonéphrite aiguë droite ; amoxicilline orale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La diffusion des douleurs après une crise appendiculaire avec fièvre élevée, contracture abdominale et cri du Douglas traduit une péritonite appendiculaire purulente généralisée imposant l'exploration chirurgicale en urgence avec appendicectomie et lavage péritonéal.",
    "clinicalPearl": "Douleur FID diffusée + fièvre élevée + contracture = Péritonite appendiculaire -> chirurgie d'urgence."
  },
  {
    "id": "q-cas-perit-3",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Mr B., 68 ans, aux antécédents de diverticulose colique connue, est admis en réanimation pour choc septique : TA 80/50 mmHg, tachycardie à 130 bpm, polypnée à 30/min, marbrures des genoux et température à 39,8°C. L'abdomen est distendu, très douloureux avec contracture diffuse prédominant en fosse iliaque gauche. Le scanner abdominal avec injection met en évidence une perforation sigmoïdienne avec présence de matière stercorale et d'un volumineux pneumopéritoine dans la cavité péritonéale (Hinchey IV). Après mise en route d'une réanimation volémique et de noradrénaline, quelle intervention chirurgicale salvatrice s'impose ?",
    "options": [
      "Suture simple de la perforation sigmoïdienne",
      "Intervention de Hartmann (résection sigmoïdienne emportant la perforation, colostomie iliaque gauche terminale et fermeture du moignon rectal)",
      "Drainage percutané isolé sous contrôle scanographique",
      "Coloscopie d'hémostase en urgence",
      "Laxatifs par sonde nasogastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En présence d'une péritonite fécale généralisée (Hinchey IV) chez un patient en choc septique, la résection du foyer septique sans anastomose (intervention de Hartmann) est la règle d'or pour éliminer la source infectieuse sans risquer une désunion anastomotique mortelle.",
    "clinicalPearl": "Péritonite diverticulaire fécale (Hinchey IV) + choc septique = Intervention de Hartmann d'urgence."
  },
  {
    "id": "q-cas-perit-4",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un patient de 54 ans atteint de cirrhose post-VHC avec volumineuse ascite se plaint de douleurs abdominales sourdes diffuses et d'une altération de l'état général depuis 24h. Sa température est à 38,3°C. Il n'a pas de contracture ni de défense franche mais une discrète sensibilité abdominale diffuse. La ponction d'ascite exploratrice ramène un liquide trouble dont l'analyse cytologique révèle 540 polynucléaires neutrophiles par mm³. L'examen direct bactériologique ne retrouve aucun germe visible. Quelle est la conduite thérapeutique immédiate ?",
    "options": [
      "Attendre 48 heures les résultats des cultures avant de traiter",
      "Débuter immédiatement une antibiothérapie par Céfotaxime IV associée à une perfusion d'albumine intraveineuse (1,5 g/kg à J1)",
      "Pratiquer une laparotomie exploratrice immédiate",
      "Évacuer la totalité de l'ascite par ponction de 10 litres sans antibiotique",
      "Prescrire des diurétiques à forte dose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Un taux de PNN > 250/mm³ dans l'ascite affirme l'infection spontanée du liquide d'ascite (ISLA) même si le direct est négatif. L'antibiothérapie par C3G IV (céfotaxime) et l'albumine pour prévenir le syndrome hépato-rénal doivent être initiées sans attendre la culture.",
    "clinicalPearl": "PNN ascite > 250/mm³ = Traitement immédiat de l'ISLA par C3G IV + Albumine IV (ne pas attendre la bactériologie)."
  },
  {
    "id": "q-cas-perit-5",
    "courseId": "crs-gastro-peritonites-aigues",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Une femme de 78 ans diabétique sous corticothérapie au long cours pour polyarthrite rhumatoïde consulte pour altération de l'état général avec somnolence, vomissements et météorisme abdominal sans plainte douloureuse aiguë. À l'examen clinique, elle est apyrétique, la tension artérielle est à 90/60 mmHg, l'abdomen est modérément ballonné sans aucune contracture évidente, avec une discrète douleur provoquée profonde à la décompression. Le scanner abdominal d'urgence révèle un épanchement péritonéal abondant avec présence d'air libre extrapéritonéal et péritonéal et épaississement nécrotique du caecum. Quel piège clinique est illustré ici ?",
    "options": [
      "Une fausse péritonite sans gravité",
      "La péritonite asthénique du sujet âgé sous corticoïdes, dont le tableau clinique péritonéal est masqué et atypique sans contracture franche",
      "Un iléus paralytique d'origine hypokaliémique pure",
      "Un fécalome rectal compressif",
      "Une insuffisance cardiaque droite isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez le sujet âgé et sous immunosuppresseurs ou corticoïdes, la symptomatologie de la péritonite est trompeuse : absence de contracture, apyrexie fréquente, l'urgence étant souvent révélée par une défaillance hémodynamique ou une occlusion paralytique.",
    "clinicalPearl": "Péritonite chez le sujet âgé/sous corticoïdes : aucun ventre de bois évident ; tableau trompeur asthénique."
  }
];

export const PERITONITES_AIGUES_RESOURCES: CourseResource[] = [
  {
    "id": "res-perit-summary",
    "courseId": "crs-gastro-peritonites-aigues",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Péritonites Aiguës",
    "contentMarkdown": "### 🎯 Points Majeurs : Péritonites Aiguës\n- **Classification** :\n  - *Secondaires (> 90%)* : brèche d'un viscère creux (perforation d'ulcère, appendicite gangrénée, diverticulite colique Hinchey III-IV).\n  - *Primitives / ISLA* : survenue sur ascite de cirrhose (PNN > 250/mm³) sans cause chirurgicale. Traitement médical : C3G + Albumine IV.\n  - *Tertiaires* : persistance du sepsis péritonéal > 48h après chirurgie avec flore opportuniste/Candida.\n- **Clinique cardinale** :\n  - Contracture abdominale involontaire, permanente, invincible ('ventre de bois').\n  - Douleur à la décompression (Blumberg), cri du Douglas au toucher rectal.\n  - Disparition de la matité hépatique (signe de Jobert = pneumopéritoine).\n- **Imagerie & Biologie** :\n  - ASP / TDM : pneumopéritoine (croissant gazeux sous-diaphragmatique).\n  - Hyperleucocytose, CRP, acidose lactique.\n- **Traitement chirurgical de la péritonite secondaire** :\n  - Urgence médico-chirurgicale.\n  - Réanimation pré-opératoire (cristalloïdes, amines si choc).\n  - Antibiothérapie large spectre (C3G ou Pipéracilline/tazobactam + métronidazole).\n  - Laparotomie médiane ou cœlioscopie : éradication du foyer (suture ulcère + omentoplastie, appendicectomie, Hartmann), toilette péritonéale exhaustive (6-10 L sérum tiède), drainage.",
    "author": "Faculté de Médecine - Collège de Chirurgie Digestive"
  },
  {
    "id": "res-perit-pearls",
    "courseId": "crs-gastro-peritonites-aigues",
    "type": "Astuce",
    "title": "Pièges & Perles : Péritonites Aiguës",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Ventre de bois** = contracture permanente invincible = indication chirurgicale formelle en urgence.\n- ⚡ **Ulcère gastrique perforé** : toujours biopsier les berges pour éliminer un adénocarcinome gastrique perforé (inutile sur le versant duodénal).\n- ⚡ **Diverticulite Hinchey IV (stercorale)** : Intervention de Hartmann (pas d'anastomose digestive en milieu septique fécal).",
    "author": "Commission Pédagogique"
  }
];
