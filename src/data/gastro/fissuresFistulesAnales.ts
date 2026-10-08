import { Question, CourseResource } from '../../types/medical';

export const FISSURES_FISTULES_ANALES_QUESTIONS: Question[] = [
  {
    "id": "q-fiss-01",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la fissure anale idiopathique typique, quelle est la localisation anatomique préférentielle de l'ulcération cutanéo-muqueuse ?",
    "options": [
      "Commissure postérieure (dans plus de 85% des cas)",
      "Commissure antérieure isolée chez l'homme",
      "Paroi latérale droite",
      "Paroi latérale gauche",
      "Au-dessus de la ligne pectinée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La fissure anale siège au pôle postérieur (commissure postérieure) dans plus de 85% des cas (zone de moindre vascularisation et d'hyperpression mécanique), et au pôle antérieur dans 10-15% des cas (plus fréquent chez la femme).",
    "clinicalPearl": "Fissure anale typique : commissure postérieure à 6h en position genu-pectorale (> 85% des cas)."
  },
  {
    "id": "q-fiss-02",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel rythme douloureux sémiologique clinique classique en 3 temps caractérise la douleur de la fissure anale déclenchée par la défécation ?",
    "options": [
      "Douleur continue nocturne insomniante sans lien avec les selles",
      "Triade rythmée par la selle : Douleur vive au passage de la selle (déchirure/brûlure) -> Rémission transitoire de quelques minutes -> Douleur cuisante spasmodique prolongée durant plusieurs heures",
      "Douleur uniquement avant d'aller à la selle soulagée immédiatement après",
      "Douleur permanente pulsatile avec fièvre",
      "Douleur lombaire projetée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur fissuraire typique se déroule en trois temps : 1) douleur vive synchrone de l'exonération (déchirure), 2) sédation ou accalmie brève de quelques minutes, 3) reprise douloureuse cuisante intense liée au spasme du sphincter strié/lisse durant des heures.",
    "clinicalPearl": "Douleur fissuraire en 3 temps : Défécation (brûlure) -> Accalmie brève -> Spasme douloureux prolongé de plusieurs heures."
  },
  {
    "id": "q-fiss-03",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle triade physique pathognomonique signe la chronicité d'une fissure anale ancienne à l'inspection de la marge anale ?",
    "options": [
      "Hémorroïdes thrombosées géantes",
      "Ulcération à fond atone à bords indurés + Marisque sentinelle externe de protection + Papille hypertrophique interne à la ligne pectinée",
      "Fistule recto-vaginale + abcès",
      "Condylome acuminé géant",
      "Ulcération bourgeonnante saignant au contact"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade de la fissure anale chronique associe : l'ulcération fibreuse à bords décollés laissant voir les fibres blanches du sphincter interne, la marisque sentinelle sous-jacente en berge cutanée, et la papille hypertrophique au pôle supérieur.",
    "clinicalPearl": "Fissure anale chronique = Ulcération à fond blanc + Marisque sentinelle externe + Papille hypertrophique interne."
  },
  {
    "id": "q-fiss-04",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel geste sémiologique doit être ÉVITÉ ou différé lors de la phase aiguë hyperalgique d'une fissure anale en raison d'une contracture sphinctérienne invincible et douloureuse ?",
    "options": [
      "L'inspection douce par écartement des plis fessiers",
      "Le toucher rectal systématique forcé",
      "L'interrogatoire",
      "La prise de température",
      "L'examen général"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'inspection douce déplissant la marge anale suffit à faire le diagnostic de certitude. Le toucher rectal est inutilement douloureux et souvent impossible en raison de l'hypertonie/spasme sphinctérien réflexe ; il doit être proscrit en phase aiguë.",
    "clinicalPearl": "Fissure anale aiguë : Ne JAMAIS forcer le toucher rectal ! L'inspection douce fait le diagnostic."
  },
  {
    "id": "q-fiss-05",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Une fissure anale atypique par son siège latéral ou multiple, son caractère indolore, induré ou creusant doit obligatoirement faire rechercher :",
    "options": [
      "Une Maladie de Crohn anorectale, une tuberculose anale, une hémopathie ou un chancre syphilitique / cancer anal",
      "Une maladie hémorroïdaire banale",
      "Un syndrome de l'intestin irritable",
      "Une lithiase vésiculaire",
      "Une maladie coeliaque"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Toute fissure atypique (latérale, indolore, multiple, récidivante) doit faire éliminer une cause sous-jacente : maladie de Crohn (au 1er plan), syphilis, infection VIH, tuberculose ou carcinome épidermoïde de l'anus.",
    "clinicalPearl": "Fissure atypique (latérale, indolore, multiple) = Rechercher une maladie de Crohn, une IST ou un cancer anal."
  },
  {
    "id": "q-fiss-06",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical conservateur de première intention permet la cicatrisation de plus de 80% des fissures anales aiguës récentes ?",
    "options": [
      "Chirurgie d'exérèse immédiate",
      "Régularisation du transit par laxatifs doux mucilages/osmotiques, antalgiques, topiques cicatrisants et anesthésiques locaux",
      "Antibiotiques par voie générale pendant 1 mois",
      "Injections de corticoïdes intramusculaires",
      "Lavement évacuateur quotidien au sérum chaud"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La guérison de la fissure aiguë repose sur la suppression du traumatisme de la selle dure : laxatifs osmotiques (viser une selle moulée molle par jour) + antalgiques + topiques locaux anesthésiants/protecteurs.",
    "clinicalPearl": "Fissure anale aiguë = Régularisation du transit (laxatifs doux) + Antalgiques + Topiques locaux."
  },
  {
    "id": "q-fiss-07",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "En cas d'échec du traitement médical standard d'une fissure anale chronique hypertonique, quel topique vasorelaxant ou injection locale vise à lever le spasme du sphincter interne ?",
    "options": [
      "Pommade aux dérivés nitrés (Trinitrine) ou inhibiteurs calciques (Diltiazem topique) OU injection locale de toxine botulique",
      "Pommade à la cortisone pure",
      "Sulfate de zinc pur",
      "Antibiotique aminoside local",
      "Cryothérapie locale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La trinitrine ou le diltiazem en pommade et l'injection intra-sphinctérienne de toxine botulique diminuent la pression de repos du sphincter interne, restaurant la micro-vascularisation locale pour favoriser la cicatrisation.",
    "clinicalPearl": "Fissure chronique hypertonique = Dérivés nitrés / Diltiazem topique ou Toxine botulique intrasphinctérienne."
  },
  {
    "id": "q-fiss-08",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le traitement chirurgical de référence d'une fissure anale chronique résistante au traitement médical bien conduit ?",
    "options": [
      "Amputation abdomino-périnéale",
      "Fissurectomie (avec ou sans anoplastie muqueuse) associée ou non à une sphinctérotomie latérale interne prudente",
      "Hémorroïdectomie tripolaire de Milligan-Morgan",
      "Colectomie subtotale",
      "Mise à plat de fistule"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La chirurgie repose sur la fissurectomie (exérèse des berges scléreuses de la fissure et de la marisque) avec ou sans anoplastie, combinée dans certains cas à une sphinctérotomie latérale interne pour relâcher l'hypertonie.",
    "clinicalPearl": "Fissure chronique rebelle = Fissurectomie +/- anoplastie muqueuse."
  },
  {
    "id": "q-fiss-09",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la principale complication potentielle d'une sphinctérotomie latérale interne trop large, incitant à une grande prudence chez la femme multipare ?",
    "options": [
      "Une incontinence anale (aux gaz ou aux selles liquides)",
      "Une sténose anale sévère",
      "Un cancer du rectum",
      "Une colite ulcéreuse",
      "Une fistule uro-génitale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La section du sphincter interne peut induire une incontinence anale séquellaire (suintements, gaz, matières liquides) dans 5 à 15% des cas, d'où la préférence pour la fissurectomie simple.",
    "clinicalPearl": "Sphinctérotomie interne : Risque d'incontinence anale séquellaire (vigilance accrue chez la femme multipare)."
  },
  {
    "id": "q-fiss-10",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "D'où proviennent à l'origine plus de 90% des abcès et fistules anales cryptogéniques ?",
    "options": [
      "D'une surinfection des follicules pileux de la marge",
      "D'une infection initiale d'une crypte de Morgagni et de ses glandes anales vestigiales intramusculaires (théorie cryptoglandulaire de Parks et Hermann)",
      "D'une infection urinaire descendante",
      "D'une perforation diverticulaire",
      "D'une surinfection d'hémorroïdes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La théorie cryptoglandulaire démontre que l'infection débute au niveau des glandes d'Hermann et Desfosses s'abouchant dans les cryptes de Morgagni de la ligne pectinée, diffusant ensuite à travers l'appareil sphinctérien.",
    "clinicalPearl": "Abcès et fistules anales = Origine cryptoglandulaire (cryptes de Morgagni au niveau de la ligne pectinée)."
  },
  {
    "id": "q-fiss-11",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle règle sémiologique anatomique (règle de Goodsall) prédit le trajet d'une fistule anale selon que son orifice externe est antérieur ou postérieur ?",
    "options": [
      "Les fistules à orifice externe antérieur suivent un trajet radial direct rectiligne vers la crypte antérieure ; les fistules à orifice postérieur suivent un trajet curviligne convergent vers la crypte postérieure médiane à 6h",
      "Tous les trajets sont strictement rectilignes",
      "Tous les trajets sont circulaires",
      "Les fistules antérieures vont toujours à gauche",
      "Les fistules n'ont pas de trajet prévisible"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Règle de Goodsall : les fistules de la moitié antérieure du périnée ont un trajet direct radial court ; celles de la moitié postérieure ont un trajet curviligne complexe convergeant vers la commissure postérieure à 6 heures.",
    "clinicalPearl": "Règle de Goodsall : Orifice externe postérieur = trajet curviligne vers 6h ; Orifice antérieur = trajet radial rectiligne."
  },
  {
    "id": "q-fiss-12",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Comment se présente cliniquement un abcès anal en phase de collection aiguë ?",
    "options": [
      "Douleur anale violente, permanente, pulsatile, insomniante, majorée par la toux et la position assise, associée à une tuméfaction inflammatoire érythémateuse tendue et douloureuse de la marge anale, avec fièvre",
      "Saignement indolore en goutte-à-goutte",
      "Constipation simple sans douleur",
      "Prurit nocturne isolé",
      "Écoulement urinaire purulent"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'abcès de la marge anale réalise une douleur pulsatile continue insomniante avec fièvre et tuméfaction rouge, chaude, extrêmement douloureuse de la marge anale.",
    "clinicalPearl": "Abcès anal = Douleur pulsatile permanente insomniante + Fièvre + Tuméfaction inflammatoire périnéale."
  },
  {
    "id": "q-fiss-13",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la conduite à tenir thérapeutique formelle en urgence devant un abcès anal collecté ?",
    "options": [
      "Antibiothérapie orale seule sans geste chirurgical",
      "Incision-drainage chirurgical d'urgence sous anesthésie (évacuation du pus, débridement et repérage du trajet)",
      "Application de glace et surveillance",
      "Ponction à l'aveugle au lit du patient sans désinfection",
      "Pose d'une sonde rectale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Tout abcès collecté doit être drainé chirurgicalement sans délai : les antibiotiques seuls sont inefficaces et dangereux (risque de diffusion vers la gangrène de Fournier). L'incision sous anesthésie évacue le pus et soulage immédiatement le patient.",
    "clinicalPearl": "Abcès de la marge anale collecté = INCISION ET DRAINAGE CHIRURGICAL D'URGENCE (les antibiotiques seuls sont une faute !)."
  },
  {
    "id": "q-fiss-14",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication toxi-infectieuse nécrosante foudroyante gravissime engageant immédiatement le pronostic vital peut résulter de la diffusion d'un abcès péri-anal non drainé ?",
    "options": [
      "La gangrène de Fournier (fasciite nécrosante du périnée et des organes génitaux externes)",
      "L'appendicite rétro-caecale",
      "La péritonite biliaire",
      "La sigmoïdite diverticulaire",
      "L'ulcère de stress"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La gangrène de Fournier est une fasciite nécrosante périnéo-génitale poly-microbienne d'évolution fulgurante avec choc septique, nécessitant débridement chirurgical d'urgence et antibiothérapie lourde.",
    "clinicalPearl": "Abcès anal négligé -> Gangrène de Fournier (fasciite nécrosante du périnée, mortalité élevée)."
  },
  {
    "id": "q-fiss-15",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle classification anatomique chirurgicale classe les fistules anales selon leurs rapports avec l'appareil sphinctérien strié (sphincter externe) ?",
    "options": [
      "Classification de Parks (fistules inter-sphinctériennes, trans-sphinctériennes basses ou hautes, supra-sphinctériennes et extra-sphinctériennes)",
      "Classification de Balthazar",
      "Classification de Hinchey",
      "Score de Rockall",
      "Classification de Forrest"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La classification de Parks distingue les fistules selon le franchissement du sphincter externe : intersphinctérienne (45%), transsphinctérienne (basses ou hautes, 30%), suprasphinctérienne (20%) et extrasphinctérienne (5%).",
    "clinicalPearl": "Classification de Parks : Intersphinctérienne, Transsphinctérienne, Suprasphinctérienne, Extrasphinctérienne."
  },
  {
    "id": "q-fiss-16",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen d'imagerie moderne non invasif de référence est indiqué pour cartographier avec précision les trajets fistuleux complexes, les collections résiduelles et leurs rapports avec les sphincters anales ?",
    "options": [
      "L'IRM périnéale / pelvienne (ou l'écho-endoscopie anale haute fréquence)",
      "Le lavement baryté",
      "La cystoscopie",
      "La mammographie",
      "L'urographie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'IRM périnéale en coupes fines pondérées en T2 et après injection de produit de contraste est l'examen de référence pour cartographier les fistules complexes ou récidivantes et les atteintes de Crohn.",
    "clinicalPearl": "Bilan des fistules anales complexes / Crohn = IRM périnéale (ou écho-endoscopie anale)."
  },
  {
    "id": "q-fiss-17",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans le traitement chirurgical d'une fistule anale trans-sphinctérienne haute, pourquoi ne réalise-t-on JAMAIS une mise à plat directe d'emblée de l'ensemble du trajet en un seul temps opératoire ?",
    "options": [
      "Parce que le pus ne sortirait pas",
      "En raison du risque inacceptable d'incontinence anale définitive par section massive de l'appareil sphinctérien strié",
      "Parce que la peau ne cicatriserait pas",
      "Parce que l'anesthésie durerait trop longtemps",
      "Parce que c'est interdit par le code de déontologie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La section en un temps d'une hauteur importante du sphincter externe entraîne une incontinence fécale majeure. On utilise des techniques conservatrices : drainage préalable par séton élastique (fil non tracté) ou lambeau d'avancement.",
    "clinicalPearl": "Fistule haute = Jamais de mise à plat directe d'emblée ! Risque d'incontinence anale majeure (poser un séton/fil de drainage)."
  },
  {
    "id": "q-fiss-18",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel matériel de drainage souple (fil élastique ou tresse non résorbable) est laissé en place dans le trajet fistuleux après débridement pour assécher la suppuration tout en préservant le sphincter ?",
    "options": [
      "Un séton (drain élastique ou fil de séton)",
      "Une mèche hémostatique résorbable",
      "Une prothèse métallique expansible",
      "Une agrafe chirurgicale",
      "Une sonde urinaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le séton (fil ou élastique passé dans le trajet fistuleux et noué en boucle lâche) assure le drainage continu de la fistule, tarit la suppuration et prépare un temps chirurgical ultérieur protecteur du sphincter.",
    "clinicalPearl": "Séton anal = Fil/élastique de drainage en boucle maintenant la fistule ouverte sans couper le sphincter."
  },
  {
    "id": "q-fiss-19",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle pathologie inflammatoire chronique intestinale doit impérativement être suspectée devant des fistules anales multiples, récidivantes, complexes avec ulcérations anales torpides et peau cyanotique ?",
    "options": [
      "La Maladie de Crohn périnéale",
      "La colite microscopique",
      "Le syndrome de l'intestin irritable",
      "La diverticulite colique",
      "L'angiocholite"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les lésions anopérinéales (LAP) compliquent jusqu'à 30-40% des maladies de Crohn et peuvent être inaugurales. Elles associent fistules complexes, abcès récurrents, ulcérations violacées creusantes et pseudo-marisques inflammatoires.",
    "clinicalPearl": "Fistules anales complexes / multiples = Maladie de Crohn anopérinéale jusqu'à preuve du contraire."
  },
  {
    "id": "q-fiss-20",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical de fond biologique est particulièrement efficace pour cicatriser les fistules anopérinéales actives réfractaires dans la Maladie de Crohn après drainage chirurgical des abcès ?",
    "options": [
      "Les anti-TNF alpha (Infliximab ou Adalimumab)",
      "Les laxatifs purs",
      "La vitamine C",
      "L'aspirine",
      "Les anti-inflammatoires non stéroïdiens (AINS)"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'Infliximab (anti-TNF) associé aux antibiotiques (Ciprofloxacine/Métronidazole) et après drainage chirurgical impératif par sétons est le traitement de référence prouvé pour la fermeture des fistules de Crohn.",
    "clinicalPearl": "Fistules de Crohn = Sétons de drainage + Anti-TNF alpha (Infliximab) + Antibiothérapie (Ciprofloxacine/Flagyl)."
  },
  {
    "id": "q-fiss-21",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Qu'est-ce que le kyste pilonidal (sinus pilonidal sacro-coccygien) et comment se différencie-t-il d'une fistule anale ?",
    "options": [
      "C'est une lésion située dans le sillon inter-fessier à distance de l'anus sans aucune communication avec le canal anal, liée à l'invagination sous-cutanée de poils avec réaction inflammatoire à corps étranger",
      "C'est une tumeur maligne de l'anus",
      "C'est une hernie de la moelle épinière",
      "C'est une complication de la maladie hémorroïdaire",
      "C'est une fistule recto-vaginale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le sinus pilonidal siège au niveau du sillon interfessier médian haut, au-dessus du coccyx, sans trajet vers le canal anal ni atteinte sphinctérienne (différent d'une fistule anale).",
    "clinicalPearl": "Sinus pilonidal = Sillon interfessier haut sacro-coccygien (poils incarnés), sans communication avec le canal anal."
  },
  {
    "id": "q-fiss-22",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge postopératoire d'une mise à plat de fistule anale basse, quelle modalité de soins locaux est primordiale pour éviter une récidive précoce par fermeture cutanée prématurée (« fermeture en pont ») ?",
    "options": [
      "Suture étanche immédiate de la peau",
      "Cicatrisation dirigée en seconde intention avec méchage quotidien du fond vers la superficie et bains de siège",
      "Application de colle biologique étanche",
      "Antibiothérapie locale en poudre sans soins",
      "Immobilisation au lit pendant 1 mois"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La plaie doit impérativement bourgeonner et cicatriser de la profondeur vers la superficie pour éviter qu'un pont cutané ne se reforme en surface, ce qui recréerait une cavité sous-jacente et récidiverait la fistule.",
    "clinicalPearl": "Soins de fistule anale : Cicatrisation dirigée du fond vers la superficie (éviter le pont cutané superficiel)."
  },
  {
    "id": "q-fiss-23",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel germe bactérien sexuellement transmissible peut être responsable d'ulcérations et de fistules anales chroniques dans le cadre de la lymphogranulomatose vénérienne (maladie de Nicolas-Favre) ?",
    "options": [
      "Chlamydia trachomatis (sérovars L1, L2, L3)",
      "Neisseria meningitidis",
      "Streptococcus pneumoniae",
      "Treponema denticola",
      "Salmonella enteritidis"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La lymphogranulomatose vénérienne (LGV) est due aux sérovars invasifs L1-L3 de Chlamydia trachomatis, réalisant une anorectite ulcéreuse avec fistules et sténoses fibreuses, fréquente chez les hommes ayant des rapports avec des hommes (HSH).",
    "clinicalPearl": "Lymphogranulomatose vénérienne (LGV / Nicolas-Favre) = Chlamydia trachomatis L1-L3 (anorectite ulcéreuse, fistules, adénites)."
  },
  {
    "id": "q-fiss-24",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la fissure anale de l'enfant en bas âge, quelle est l'étiologie prédominante déclenchante ?",
    "options": [
      "Une tumeur anale",
      "La constipation fonctionnelle avec émission de selles dures et volumineuses entraînant une déchirure mécanique de la muqueuse",
      "Une anomalie congénitale rare",
      "Un traumatisme obstétrical",
      "Une infection à CMV"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La constipation avec fécalome ou selle volumineuse déshydratée est la cause de la quasi-totalité des fissures anales pédiatriques, créant un cercle vicieux douleur-rétention fécale.",
    "clinicalPearl": "Fissure anale chez l'enfant = Constipation terminale à selles dures (cercle vicieux selle dure -> fissure -> douleur -> rétention)."
  },
  {
    "id": "q-fiss-25",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle technique récente d'occlusion mini-invasive sans section sphinctérienne utilise une colle biologique ou un bouchon collagène (plug) pour traiter les trajets de fistules anales trans-sphinctériennes ?",
    "options": [
      "L'injection d'adhésif biologique (colle de fibrine) ou la mise en place d'un plug de collagène",
      "La sphinctérotomie totale",
      "L'exérèse du rectum",
      "La colostomie définitive",
      "La prothèse biliaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les techniques d'épargne sphinctérienne (colle de fibrine, plug de collagène, lambeau d'avancement, ligature intersphinctérienne LIFT ou laser FiLaC) tentent d'oblitérer le trajet sans couper la moindre fibre sphinctérienne.",
    "clinicalPearl": "Épargne sphinctérienne dans la fistule : Colle biologique, plugs, procédure LIFT ou thermo-ablation laser (FiLaC)."
  },
  {
    "id": "cas-fiss-01",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 35 ans consulte pour des douleurs anales intolérables apparues il y a 3 semaines après un épisode de constipation opiniâtre. Il décrit une brûlure très vive au passage de la selle, suivie d'une accalmie de 10 minutes, puis d'un spasme douloureux cuisant continu pendant 4 à 6 heures l'empêchant de s'asseoir. Il note quelques traces de sang rouge vif sur le papier toilette. L'écartement doux des plis fessiers met en évidence une déchirure longitudinale superficielle à la commissure postérieure (à 6h). Quel est le diagnostic certain ?",
    "options": [
      "Thrombose hémorroïdaire externe",
      "Fissure anale aiguë typique de la commissure postérieure",
      "Abcès de la marge anale collecté",
      "Ulcère cancéreux de l'anus",
      "Chancre syphilitique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur typique en 3 temps rythmée par la selle associée à la visualisation de la lésion au pôle postérieur affirme la fissure anale aiguë non compliquée.",
    "clinicalPearl": "Douleur anale en 3 temps + déchirure à 6 heures = Fissure anale postérieure typique."
  },
  {
    "id": "cas-fiss-02",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la conduite à tenir thérapeutique médicale de première intention chez ce patient pour obtenir la cicatrisation de cette fissure aiguë ?",
    "options": [
      "Sphinctérotomie latérale interne chirurgicale d'emblée sous anesthésie générale",
      "Régularisation du transit par laxatifs osmotiques doux (Macrogol), antalgiques oraux (paracétamol/AINS), bains de siège tièdes et pommade protectrice/anesthésiante locale",
      "Antibiothérapie générale par amoxicilline pendant 14 jours",
      "Prescription de lavements évacuateurs salins quotidiens",
      "Abstention totale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement médical de la fissure aiguë associe la lutte contre la constipation (laxatifs osmotiques pour des selles molles quotidiennes sans effort) aux antalgiques et soins locaux, assurant la cicatrisation dans 80-90% des cas.",
    "clinicalPearl": "Fissure aiguë = Laxatifs osmotiques (selles molles) + Antalgiques + Pommades locales (guérison > 80%)."
  },
  {
    "id": "cas-fiss-03",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une femme de 28 ans consulte aux urgences pour une douleur anale aiguë permanente, pulsatile, insomniante apparue brutalement il y a 48 heures. Elle a une température mesurée à 38,7°C et des frissons. L'examen du périnée retrouve une masse rouge, chaude, extrêmement douloureuse, tendue et fluctuante de 4 cm située au niveau de la fesse droite au contact immédiat de l'anus. Quel est le diagnostic et quelle prise en charge s'impose en urgence ?",
    "options": [
      "Fissure anale simple ; prescrire des laxatifs",
      "Abcès de la marge anale collecté ; incision et drainage chirurgical d'urgence sous anesthésie au bloc opératoire",
      "Hémorroïdes internes prolabées ; réduction manuelle",
      "Kyste sébacé surinfecté ; antibiothérapie orale ambulatoire",
      "Prurit anal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Douleur anale pulsatile continue + fièvre + tuméfaction fluctuante = Abcès anal aigu collecté. C'est une urgence chirurgicale : drainage et incision sous anesthésie pour éviter la nécrose périnéale (gangrène de Fournier).",
    "clinicalPearl": "Abcès péri-anal collecté = Incision et drainage chirurgical immédiat au bloc opératoire."
  },
  {
    "id": "cas-fiss-04",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Au bloc opératoire, l'incision donne issue à 30 mL de pus fétide. L'exploration prudente retrouve un trajet fistuleux qui traverse la moitié inférieure du sphincter anal externe pour s'aboucher au niveau de la ligne pectinée à 7h. Il s'agit d'une fistule trans-sphinctérienne basse. Quel geste chirurgical réalise le proctologue ?",
    "options": [
      "Suture hermétique de la plaie avec de la colle",
      "Mise à plat de la fistule trans-sphinctérienne basse en un seul temps avec soins de méchage dirigé en seconde intention",
      "Exérèse complète de tout l'appareil sphinctérien",
      "Amputation du rectum",
      "Rien d'autre que l'antibiothérapie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Une fistule trans-sphinctérienne basse (n'intéressant qu'une part minime du tiers inférieur du sphincter externe) peut être mise à plat en un seul temps avec un risque d'incontinence anale quasi nul.",
    "clinicalPearl": "Fistule trans-sphinctérienne basse = Mise à plat directe en un temps avec cicatrisation dirigée."
  },
  {
    "id": "cas-fiss-05",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un jeune homme de 24 ans consulte pour un écoulement purulent chronique intermittent par deux orifices périnéaux latéraux gauches depuis 8 mois. Il rapporte des épisodes de diarrhée sanglante glaireuse et des douleurs de la fosse iliaque droite. L'anuscopie montre des ulcérations profondes creusantes en berges décollées et une muqueuse rectale aphtoïde. Quel diagnostic sous-jacent devez-vous suspecter et quel examen d'imagerie devez-vous demander en priorité ?",
    "options": [
      "Maladie de Crohn avec manifestations anopérinéales ; IRM pelvienne et iléo-coloscopie totale",
      "Fissure anale banale ; ASP",
      "Diverticulose colique ; scanner cérébral",
      "Lithiase urinaire ; échographie vésicale",
      "Syndrome de Lynch"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'association fistules anales multiples/atypiques + diarrhée sanglante + douleurs abdominales chez un sujet jeune signe une Maladie de Crohn. Le bilan repose sur l'IRM pelvienne pour cartographier les trajets et la coloscopie totale avec biopsies.",
    "clinicalPearl": "Fistules anales complexes / multiples chez le jeune = Maladie de Crohn anopérinéale (IRM pelvienne + coloscopie)."
  }
];

export const FISSURES_FISTULES_ANALES_RESOURCES: CourseResource[] = [
  {
    "id": "res-fiss-summary",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Fissures & Fistules Anales",
    "contentMarkdown": "### 🎯 Points Clés : Proctologie Suppurative & Ulcérative\n- **Fissure anale** :\n  - Siège : commissure postérieure à 6h (> 85%).\n  - Douleur en 3 temps : défécation -> rémission brève -> spasme prolongé.\n  - Triade chronique : ulcère à fond blanc + marisque sentinelle + papille hypertrophique.\n  - Traitement : laxatifs osmotiques + antalgiques + topiques (fissurectomie si échec).\n- **Abcès et Fistules anales** :\n  - Origine : infection cryptoglandulaire (cryptes de Morgagni / ligne pectinée).\n  - Abcès collecté = drainage chirurgical d'urgence (les ATB seuls ne suffisent pas !).\n  - Règle de Goodsall : orifice externe postérieur = trajet curviligne vers 6h.\n  - Fistules complexes/hautes = drainage par séton (préserver le sphincter).\n  - Si lésions multiples/atypiques -> rechercher Maladie de Crohn.",
    "author": "Société Nationale Française de Colo-Proctologie"
  },
  {
    "id": "res-fiss-tips",
    "courseId": "crs-gastro-fissures-fistules-anales",
    "type": "Astuce",
    "title": "Règles Sémio en Proctologie",
    "contentMarkdown": "### 💡 2 règles d'or proctologiques :\n1. **Fissure anale aiguë** : Ne jamais forcer le toucher rectal lors de l'accès aigu douloureux (l'inspection douce suffit).\n2. **Abcès de l'anus** : UBI PUS, IBI EVACUA -> L'incision chirurgicale est le seul traitement de l'abcès collecté.",
    "author": "Faculté de Médecine"
  }
];
