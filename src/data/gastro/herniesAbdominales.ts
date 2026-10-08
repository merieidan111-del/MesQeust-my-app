import { Question, CourseResource } from '../../types/medical';

export const HERNIES_ABDOMINALES_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Hernies de la Paroi Abdominale (Dr Bounab - CHU Douera)
  // -------------------------------------------------------------
  {
    id: 'q-hernie-01',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la distinction anatomique entre hernie inguinale indirecte (oblique externe) et directe :",
    options: [
      "La hernie directe est toujours congénitale et traverse l'orifice inguinal profond",
      "La hernie indirecte siège en dedans des vaisseaux épigastriques inférieurs",
      "La hernie indirecte suit le cordon spermatique en pénétrant par l'orifice inguinal profond, en dehors des vaisseaux épigastriques inférieurs",
      "La hernie directe traverse le canal fémoral sous l'arcade crurale",
      "La hernie indirecte est toujours acquise par faiblesse du fascia transversalis"
    ],
    correctAnswers: [2],
    explanation: "La hernie inguinale indirecte (oblique externe) pénètre par l'orifice inguinal profond situé en dehors des vaisseaux épigastriques inférieurs et chemine dans le canal inguinal le long du cordon spermatique. La hernie directe est médiale par rapport aux vaisseaux épigastriques et fait issue directement à travers la zone de faiblesse du fascia transversalis.",
    clinicalPearl: "Repère anatomique clé : Hernie indirecte = En dehors des vaisseaux épigastriques. Hernie directe = En dedans des vaisseaux épigastriques."
  },
  {
    id: 'q-hernie-02',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors de la manœuvre clinique du doigt ganté invaginant le scrotum vers l'orifice superficiel, comment différencie-t-on hernie directe et indirecte lors d'un effort de toux ?",
    options: [
      "Elle permet uniquement de différencier hernie crurale et hernie ombilicale",
      "La hernie directe vient frapper le bout du doigt, tandis que la hernie indirecte refoule la face latérale",
      "La hernie est toujours irréductible lors de la manœuvre",
      "La hernie indirecte vient frapper la pulpe ou l'extrémité du doigt (trajet oblique), tandis que la hernie directe refoule la face interne ou latérale du doigt (poussée directe)",
      "C'est une manœuvre strictement interdite en chirurgie"
    ],
    correctAnswers: [3],
    explanation: "Lors de l'effort de toux, la hernie indirecte chemine le long du canal et vient buter contre le bout du doigt explorateur. La hernie directe pousse perpendiculairement à la paroi et vient refouler la face latérale ou interne du doigt.",
    clinicalPearl: "Manœuvre du doigt ganté : Butée au bout du doigt = Hernie indirecte. Poussée sur la face latérale = Hernie directe."
  },
  {
    id: 'q-hernie-03',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la hernie crurale (fémorale), quel élément anatomique et clinique est exact ?",
    options: [
      "Son collet est situé au-dessus de l'arcade crurale et elle prédomine chez l'homme jeune",
      "Elle représente 80 % de toutes les hernies de l'aine",
      "Son collet siège en dessous de la ligne de Malgaigne (arcade crurale), à la racine de la cuisse, et elle présente un risque d'étranglement particulièrement élevé",
      "Elle est toujours réductible sans jamais s'étrangler",
      "Elle émerge par le foramen obturé"
    ],
    correctAnswers: [2],
    explanation: "La hernie crurale siège sous la ligne de Malgaigne (arcade crurale), dans l'anneau fémoral en dedans des vaisseaux fémoraux. Elle est plus fréquente chez la femme âgée (environ 3-4 fois plus) et son collet étroit et rigide (ligament de Gimbernat) expose à un risque d'étranglement aigu très élevé.",
    clinicalPearl: "Hernie crurale : Sous la ligne de Malgaigne (racine de la cuisse), femme âgée, collet étroit -> RISQUE MAJEUR D'ÉTRANGLEMENT !"
  },
  {
    id: 'q-hernie-04',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les facteurs suivants, lesquels augmentent la pression intra-abdominale et favorisent la survenue ou l'aggravation d'une hernie pariétale ?",
    options: [
      "La toux chronique (BPCO), la constipation chronique avec efforts de poussée, la dysurie prostatique et le port de charges lourdes",
      "L'alitement prolongé et le jeûne strict",
      "L'hypothyroïdie fruste",
      "Un régime alimentaire hypercalorique sans exercice",
      "La gastrite chronique"
    ],
    correctAnswers: [0],
    explanation: "Les causes d'hyperpression intra-abdominale chronique constituent les facteurs favorisants mécaniques majeurs : bronchite chronique/tabagisme (toux), adénome prostatique (dysurie), constipation sévère, obésité, ascite et efforts physiques intenses.",
    clinicalPearl: "Facteurs favorisants d'hyperpression : Toux chronique, constipation, adénome prostatique (dysurie), port de charges lourdes."
  },
  {
    id: 'q-hernie-05',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la hernie ombilicale de l'adulte, quelle particularité étiopathogénique est classique ?",
    options: [
      "Elle est exclusive au nouveau-né et guérit toujours spontanément",
      "Elle correspond à la persistance d'un canal omphalo-mésentérique ouvert",
      "Elle est particulièrement fréquente chez le patient cirrhotique avec ascite en raison de l'hyperpression liquidienne et de la distension de l'anneau ombilical",
      "La réparation chirurgicale est formellement contre-indiquée chez l'adulte",
      "Elle ne s'étrangle jamais"
    ],
    correctAnswers: [2],
    explanation: "Chez l'adulte, la hernie ombilicale est souvent acquise, favorisée par l'obésité, les grossesses répétées et l'ascite chez le cirrhotique. Chez le cirrhotique, elle peut s'ulcérer et se rompre, créant une fistule d'ascite potentiellement létale.",
    clinicalPearl: "Hernie ombilicale du cirrhotique : Favorisée par l'ascite, risque d'amincissement cutané et de rupture d'ascite gravissime."
  },
  {
    id: 'q-hernie-06',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La définition clinique précise de l'étranglement herniaire est :",
    options: [
      "Une hernie devenue totalement indolore avec simple retard du transit",
      "Une hernie devenue brutale, douloureuse, irréductible et non impulsive à la toux, avec ischémie aiguë du viscère incarcéré",
      "Une hernie réductible qui augmente de volume en position couchée",
      "Une masse molle indolore présente depuis plusieurs années",
      "Une inflammation chronique bénigne du sac herniaire sans ischémie"
    ],
    correctAnswers: [1],
    explanation: "L'étranglement herniaire associe la triade sémiologique : 1) Douleur vive et brutale de la tuméfaction, 2) Irréductibilité complète, 3) Perte de l'impulsivité à la toux, avec risque imminent de nécrose ischémique de l'anse piégée.",
    clinicalPearl: "Étranglement herniaire : Triade = Douloureuse + Irréductible + Non impulsive à la toux -> Urgence chirurgicale !"
  },
  {
    id: 'q-hernie-07',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quels signes cliniques témoignent d'un étranglement herniaire compliqué avec nécrose intestinale et choc septique/hypovolémique ?",
    options: [
      "Bradycardie sinusale à 45/min",
      "Tachycardie, hypotension artérielle, pli cutané de déshydratation, oligurie, fièvre et peau inflammatoire en regard de la hernie",
      "Érythème discret sans douleur",
      "Constipation isolée sans vomissement",
      "Hyperthermie isolée sans aucun retentissement hémodynamique"
    ],
    correctAnswers: [1],
    explanation: "Les signes de gravité associent : déshydratation sévère (vomissements, 3e secteur), état de choc septico-toxique ou hypovolémique (tachycardie, hypotension, oligurie) et signes locaux de nécrose (peau rouge, chaude, œdémateuse en regard).",
    clinicalPearl: "Signes de gravité d'une hernie étranglée : Choc, tachycardie, oligurie et peau inflammatoire = Nécrose intestinale !"
  },
  {
    id: 'q-hernie-08',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement chirurgical moderne de référence d'une hernie inguinale de l'adulte en dehors d'une infection aiguë est :",
    options: [
      "Une raphie tissulaire sous tension simple obligatoire",
      "Une simple contention par bandage herniaire à vie",
      "La cure avec renfort prothétique non résorbable (plaque/mesh en polypropylène) sans tension (technique de Lichtenstein par voie ouverte ou cœlioscopie TAPP/TEP)",
      "L'orchidectomie homolatérale de principe",
      "Une antibiothérapie prolongée exclusive"
    ],
    correctAnswers: [2],
    explanation: "Les cures 'sans tension' avec renfort prothétique (Lichtenstein en voie ouverte, ou TAPP/TEP en laparoscopie) représentent le gold standard mondial, réduisant le taux de récidive à moins de 1-2 % par rapport aux raphies simples.",
    clinicalPearl: "Gold standard cure de hernie inguinale : Cure prothétique sans tension (Lichtenstein ou cœlioscopie TEP/TAPP)."
  },
  {
    id: 'q-hernie-09',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le diagnostic différentiel d'une tuméfaction de la région inguinale comprend tous les éléments suivants, SAUF un :",
    options: [
      "Un lipome sous-cutané ou lipome du cordon spermatique",
      "Une adénopathie inguinale (infectieuse ou métastatique)",
      "Une hydrocèle vaginale communicante ou kyste du cordon",
      "Une sténose du pylore de l'adulte",
      "Un testicule ectopique bloqué dans le canal inguinal"
    ],
    correctAnswers: [3],
    explanation: "Le diagnostic différentiel d'une masse inguinale comprend les lipomes, adénopathies, kystes du cordon, hydrocèles, anévrismes de l'artère fémorale et testicules ectopiques. La sténose du pylore est une pathologie gastrique sans rapport anatomique.",
    clinicalPearl: "Diagnostics différentiels d'une tuméfaction inguinale : Lipome, adénopathie, hydrocèle, kyste du cordon, ectopie testiculaire."
  },
  {
    id: 'q-hernie-10',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La ligne de Malgaigne, repère anatomique et clinique fondamental, correspond à :",
    options: [
      "La projection cutanée de l'arcade crurale (ligament inguinal reliant l'épine iliaque antéro-supérieure à l'épine du pubis)",
      "Le ligament de Cooper au fond du pelvis",
      "L'orifice profond du canal obturateur",
      "La ligne blanche reliant l'appendice xiphoïde à l'ombilic",
      "Le bord externe du muscle grand droit"
    ],
    correctAnswers: [0],
    explanation: "La ligne de Malgaigne est la projection de l'arcade crurale. Elle sépare anatomiquement et sémiologiquement la région inguinale (collet d'une hernie inguinale AU-DESSUS) de la région fémorale (collet d'une hernie crurale EN DESSOUS).",
    clinicalPearl: "Ligne de Malgaigne (arcade crurale) : Au-dessus = Hernie Inguinale. En dessous = Hernie Crurale."
  },
  {
    id: 'q-hernie-11',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La hernie de Spiegel est une hernie rare de la paroi abdominale qui s'extériorise à travers :",
    options: [
      "Le triangle lombaire de Jean-Louis Petit",
      "La ligne semi-lunaire de Spiegel, au bord externe du muscle grand droit de l'abdomen, sous la ligne arquée de Douglas",
      "Le foramen obturé de la branche ischio-pubienne",
      "L'orifice de Winslow rétro-hépatique",
      "L'anneau ombilical supérieur"
    ],
    correctAnswers: [1],
    explanation: "La hernie de Spiegel (hernie ventro-latérale spontanée) siège au niveau de la ligne semi-lunaire de Spiegel, à la jonction entre le grand droit et l'aponévrose des muscles larges (transverse et oblique interne).",
    clinicalPearl: "Hernie de Spiegel : Hernie ventro-latérale au bord externe du muscle grand droit (ligne semi-lunaire)."
  },
  {
    id: 'q-hernie-12',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En l'absence de cure chirurgicale programmée, l'histoire naturelle d'une hernie abdominale est marquée par :",
    options: [
      "Une guérison spontanée par fibrose dans 90 % des cas",
      "Une régression progressive après la cinquantaine",
      "Une augmentation progressive de volume, un risque d'amincissement cutané et la menace permanente d'étranglement aigu",
      "Une transformation maligne fréquente en sarcome de la paroi",
      "Une calcification complète protectrice du sac"
    ],
    correctAnswers: [2],
    explanation: "Une hernie ne guérit jamais spontanément chez l'adulte. Avec le temps, elle s'élargit, peut s'engouer, devenir irréductible par adhérences, et s'exposer à tout moment à l'étranglement.",
    clinicalPearl: "Histoire naturelle d'une hernie : Aucune régression spontanée -> Augmentation de taille et risque permanent d'étranglement."
  },
  {
    id: 'q-hernie-13',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle particularité clinique caractérise classiquement la hernie obturatrice ?",
    options: [
      "Elle donne une volumineuse voussure visible à l'inspection de la fesse",
      "C'est une hernie profonde pelvienne non palpable, touchant la femme âgée dénutrie, pouvant provoquer une douleur à la face interne de la cuisse par compression du nerf obturateur (signe de Howship-Romberg)",
      "Elle est congénitale et ne s'étrangle jamais",
      "Elle ne donne jamais de syndrome occlusif",
      "Elle s'extériorise par l'ombilic"
    ],
    correctAnswers: [1],
    explanation: "La hernie obturatrice (à travers le canal sous-pubien) est invisible et non palpable. Elle touche typiquement la femme âgée maigre et se révèle par une occlusion du grêle avec névralgie obturatrice irradiant à la face interne de la cuisse et au genou (signe de Howship-Romberg).",
    clinicalPearl: "Hernie obturatrice : Femme âgée dénutrie + Occlusion du grêle + Douleur face interne de cuisse (signe de Howship-Romberg)."
  },
  {
    id: 'q-hernie-14',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La prise en charge préopératoire immédiate d'une hernie étranglée admise aux urgences comprend :",
    options: [
      "Une tentative de réduction manuelle énergique par taxis au lit du patient",
      "Une mise à jeun, pose d'une sonde nasogastrique en aspiration, voie veineuse, réhydratation hydro-électrolytique, antibioprophylaxie et acheminement immédiat au bloc opératoire",
      "Une prescription d'antalgiques oraux et renvoi à domicile jusqu'au lendemain",
      "Un scanner de contrôle après 48 heures de surveillance",
      "Une ponction évacuatrice du sac au trocart"
    ],
    correctAnswers: [1],
    explanation: "La manœuvre de taxis forcée est formellement proscrite (risque de réintégrer une anse nécrosée ou de rupture intrapéritonéale). On réanime brièvement (SNG, solutés, antibioprophylaxie) et on opère en urgence sans délai.",
    clinicalPearl: "Hernie étranglée : Ne JAMAIS faire de manœuvre de taxis forcée ! Réanimation brève + Bloc opératoire d'urgence."
  },
  {
    id: 'q-hernie-15',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la hernie inguinale chez la femme :",
    options: [
      "Elle est anatomiquement impossible",
      "Elle est moins fréquente que chez l'homme (sex-ratio environ 7H / 1F), mais le sac herniaire chemine le long du ligament rond de l'utérus",
      "Elle est obligatoirement bilatérale",
      "Elle ne nécessite jamais d'intervention chirurgicale",
      "Elle est toujours directe"
    ],
    correctAnswers: [1],
    explanation: "Bien que l'homme soit beaucoup plus exposé (sex-ratio 7/1), la hernie inguinale existe chez la femme. Le trajet inguinal contient le ligament rond de l'utérus.",
    clinicalPearl: "Chez la femme : La hernie inguinale chemine le long du ligament rond de l'utérus."
  },
  {
    id: 'q-hernie-16',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La hernie épigastrique (de la ligne blanche) siège typiquement :",
    options: [
      "Dans la fosse iliaque droite",
      "Sur la ligne médiane, entre l'appendice xiphoïde et l'ombilic, souvent sous forme d'un petit nodule graisseux douloureux",
      "Au niveau du trigone fémoral de Scarpa",
      "Dans la région lombaire postérieure",
      "Au-dessus de la crête iliaque gauche"
    ],
    correctAnswers: [1],
    explanation: "La hernie épigastrique correspond à l'extériorisation de graisse pré-péritonéale à travers un défect de l'entrecroisement des fibres aponévrotiques de la ligne blanche sus-ombilicale.",
    clinicalPearl: "Hernie épigastrique : Petit nodule médian sus-ombilical (souvent lipome pré-péritonéal extériorisé très sensible)."
  },
  {
    id: 'q-hernie-17',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les critères physiques d'une hernie abdominale simple non compliquée à l'examen clinique sont :",
    options: [
      "Tuméfaction dure, pierreuse, fixée et non modifiée par la toux",
      "Tuméfaction réductible (spontanément ou à la pression douce), expansive et impulsive à la toux et à l'effort",
      "Tuméfaction rouge vif avec contracture cutanée permanente",
      "Tuméfaction pulsatile et soufflante à l'auscultation",
      "Masse non palpable s'accompagnant d'un choc hypovolémique"
    ],
    correctAnswers: [1],
    explanation: "La triade sémiologique d'une hernie simple non compliquée : tuméfaction 1) indolore ou simple pesanteur, 2) réductible dans la cavité abdominale, 3) expansive et impulsive aux efforts de toux.",
    clinicalPearl: "Hernie non compliquée : Réductible + Impulsive à la toux + Indolore."
  },
  {
    id: 'q-hernie-18',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'examen diagnostique de référence pour affirmer une hernie inguinale non compliquée chez l'adulte ?",
    options: [
      "L'échographie doppler systématique obligatoire",
      "L'IRM pelvienne avec injection",
      "L'examen clinique bilatéral et comparatif minutieux debout et couché",
      "Le scanner abdominopelvien avec opacification digestive",
      "L'abdomen sans préparation (ASP)"
    ],
    correctAnswers: [2],
    explanation: "Le diagnostic de hernie pariétale est STRICTEMENT CLINIQUE. Aucun examen d'imagerie n'est nécessaire chez un patient présentant les signes cliniques typiques. L'échographie ou le scanner ne sont réservés qu'aux cas douteux ou chez l'obèse.",
    clinicalPearl: "Diagnostic de hernie simple = Strictement clinique ! Aucun examen d'imagerie n'est requis de routine."
  },
  {
    id: 'q-hernie-19',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le pronostic vital et la mortalité d'une hernie étranglée dépendent de façon prépondérante :",
    options: [
      "Du sexe du patient",
      "Du type de matériel de suture utilisé",
      "Du délai écoulé entre le début de l'étranglement et la décompression chirurgicale au bloc opératoire",
      "De la présence d'une hernie controlatérale",
      "De la saison de survenue"
    ],
    correctAnswers: [2],
    explanation: "La mortalité d'une hernie étranglée (qui peut atteindre 5 à 10 % chez le sujet âgé) est directement corrélée au délai de prise en charge : plus l'intervention est tardive, plus le risque d'ischémie irréversible, de nécrose et de péritonite septique est élevé.",
    clinicalPearl: "Pronostic de la hernie étranglée : Dépend directement du DÉLAI de prise en charge chirurgicale !"
  },
  {
    id: 'q-hernie-20',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La hernie lombaire inférieure de Jean-Louis Petit s'extériorise à travers :",
    options: [
      "L'anneau crural",
      "Le triangle lombaire inférieur limité par la crête iliaque, le bord postérieur du muscle grand oblique et le bord antérieur du grand dorsal",
      "Le canal inguinal profond",
      "La ligne blanche sus-ombilicale",
      "Le plancher pelvien duodénal"
    ],
    correctAnswers: [1],
    explanation: "Le triangle de Jean-Louis Petit (trigone lombaire inférieur) est une zone de faiblesse postéro-latérale de la paroi abdominale délimitée en bas par la crête iliaque, en avant par le grand oblique et en arrière par le grand dorsal.",
    clinicalPearl: "Hernie de Jean-Louis Petit = Hernie du triangle lombaire inférieur (crête iliaque, grand oblique, grand dorsal)."
  },
  {
    id: 'q-hernie-21',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant tout syndrome occlusif du grêle mécanique aigu chez l'adulte, quel geste clinique est un impératif médico-légal absolu ?",
    options: [
      "Prescrire un laxatif osmotique",
      "La palpation méthodique et systématique de TOUS les orifices herniaires (inguinaux, cruraux, ombilic, orifices cicatriciels)",
      "Attendre 72 heures sous antispasmodiques",
      "Demander une coloscopie en urgence",
      "Réaliser une ponction lombaire"
    ],
    correctAnswers: [1],
    explanation: "Tout médecin examinant un syndrome occlusif DOIT palper systématiquement tous les orifices herniaires. Une hernie étranglée (notamment crurale chez la femme âgée) est la cause d'occlusion la plus accessible et la plus facile à manquer si l'on ne déshabille pas le patient.",
    clinicalPearl: "Règle d'or de l'occlusion : Déshabiller le patient et PALPER SYSTÉMATIQUEMENT TOUS LES ORIFICES HERNIAIRES !"
  },
  {
    id: 'q-hernie-22',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle différence topographique majeure sépare la hernie de Spiegel de la hernie lombaire de Jean-Louis Petit ?",
    options: [
      "La hernie de Spiegel est ventro-latérale antérieure alors que celle de Petit est postéro-latérale lombaire",
      "Elles siègent toutes les deux dans le scrotum",
      "La hernie de Petit n'existe pas",
      "La hernie de Spiegel est toujours congénitale du nouveau-né",
      "La hernie de Petit traverse l'arcade crurale"
    ],
    correctAnswers: [0],
    explanation: "La hernie de Spiegel siège sur la paroi antérieure ventro-latérale (ligne semi-lunaire au bord externe du grand droit), tandis que celle de Jean-Louis Petit siège sur la paroi postérieure lombaire.",
    clinicalPearl: "Spiegel = Paroi antérieure latérale (ligne semi-lunaire). Jean-Louis Petit = Paroi postérieure lombaire."
  },
  {
    id: 'q-hernie-23',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant une hernie crurale étranglée, quelle est la conduite à tenir immédiate ?",
    options: [
      "Tenter une réduction douce au doigt sous antalgiques",
      "Intervention chirurgicale d'urgence absolue au bloc opératoire sans tenter de réduction manuelle",
      "Prescription d'anti-inflammatoires et contrôle dans 48 heures",
      "Pose d'une ceinture de contention herniaire rigide",
      "Ponction percutanée sous échographie"
    ],
    correctAnswers: [1],
    explanation: "L'anneau fémoral étant inextensible (collet inextensible et rigide), l'ischémie de l'anse étranglée est quasi immédiate. Toute réduction par taxis est interdite ; l'intervention chirurgicale en urgence s'impose.",
    clinicalPearl: "Hernie crurale étranglée = ZÉRO taxis, BLOC OPÉRATOIRE IMMÉDIAT !"
  },
  {
    id: 'q-hernie-24',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quels facteurs généraux augmentent significativement le risque de récidive herniaire après chirurgie ?",
    options: [
      "L'hypertension artérielle contrôlée",
      "L'obésité, le tabagisme actif, la dénutrition, la persistance d'une toux chronique ou d'une dysurie prostatique, et les efforts physiques lourds précoces",
      "Le groupe sanguin O positif",
      "La consommation modérée de thé",
      "L'appendicectomie dans l'enfance"
    ],
    correctAnswers: [1],
    explanation: "Les échecs et récidives sont favorisés par les troubles de la cicatrisation (tabac, dénutrition), l'obésité, l'infection du site opératoire et la persistance des facteurs d'hyperpression intra-abdominale non traités.",
    clinicalPearl: "Facteurs de récidive : Tabac, obésité, dénutrition, toux/dysurie non traitée, reprise précoce de charges lourdes."
  },
  {
    id: 'q-hernie-25',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi toutes les hernies de la paroi abdominale, quelle est la plus fréquente dans la population générale ?",
    options: [
      "La hernie crurale",
      "La hernie ombilicale",
      "La hernie inguinale (environ 75 % de toutes les hernies de paroi et 96 % des hernies de l'aine)",
      "La hernie épigastrique",
      "La hernie de Spiegel"
    ],
    correctAnswers: [2],
    explanation: "Les hernies de l'aine représentent la quasi-totalité des hernies pariétales, et la hernie inguinale (particulièrement la variété oblique externe indirecte) représente à elle seule environ 75 % de toutes les hernies de la paroi abdominale.",
    clinicalPearl: "Hernie la plus fréquente = Hernie inguinale (75 % de toutes les hernies de paroi)."
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (12 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : M. B., 58 ans, maçon
  {
    id: 'q-cas-hernie-1-1',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (M. B., 58 ans, maçon, tabagique) - Tuméfaction inguinale droite évoluant depuis 6 mois, augmentant à l'effort et à la toux, réductible en décubitus. Examen : tuméfaction ovoïde située au-dessus de l'arcade crurale, expansive et impulsive à la toux, indolore, réductible avec sensation de gargouillement. Quel est le diagnostic le plus probable ?",
    options: [
      "Hernie crurale droite étranglée",
      "Hernie inguinale droite non compliquée",
      "Lipome simple du cordon",
      "Adénite inguinale tuberculeuse",
      "Hydrocèle communicante pure"
    ],
    correctAnswers: [1],
    explanation: "Collet situé au-dessus de l'arcade crurale, réductible, impulsive à la toux, indolore : diagnostic typique de hernie inguinale droite non compliquée.",
    clinicalPearl: "Tuméfaction au-dessus de l'arcade crurale + réductible + impulsive à la toux = Hernie inguinale simple."
  },
  {
    id: 'q-cas-hernie-1-2',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quelle est la prise en charge chirurgicale de référence pour ce maçon actif ?",
    options: [
      "Cure de hernie avec renfort prothétique (Lichtenstein ou cœlioscopie) sans tension",
      "Résection chirurgicale du cordon spermatique",
      "Raphie simple par suture sans prothèse",
      "Orchidectomie droite systématique",
      "Port d'un bandage herniaire rigide à vie"
    ],
    correctAnswers: [0],
    explanation: "Chez l'adulte actif exerçant un métier de force, la cure prothétique sans tension (Lichtenstein ou abord cœlioscopique TEP/TAPP) est le gold standard pour éviter les récidives.",
    clinicalPearl: "Cure prothétique sans tension = Standard d'or chez l'adulte actif."
  },
  {
    id: 'q-cas-hernie-1-3',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quels facteurs favorisants d'hyperpression devez-vous impérativement corriger chez ce patient pour prévenir une récidive ?",
    options: [
      "Sevrage tabagique pour traiter la toux chronique, règles de manutention de charges et recherche d'une dysurie prostatique associée",
      "Régime sans sel strict",
      "Arrêt des produits laitiers",
      "Aucun facteur n'a d'impact",
      "Traitement antalgique au long cours"
    ],
    correctAnswers: [0],
    explanation: "La toux chronique liée au tabac et le port de charges lourdes augmentent continuellement la pression intra-abdominale. Le sevrage tabagique et la prise en charge des efforts de poussée sont capitaux.",
    clinicalPearl: "Prévention des récidives : Contrôle de la toux (sevrage tabac), de la constipation et de la dysurie."
  },

  // Cas 2 : Mme K., 72 ans, urgence nocturne
  {
    id: 'q-cas-hernie-2-1',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Mme K., 72 ans, admise aux urgences) - Douleur violente à la racine de la cuisse gauche, vomissements, arrêt des matières et gaz depuis 24h. Examen : abdomen distendu ; à la racine de la cuisse gauche, petit nodule dur, très douloureux, non réductible, situé au-dessous de l'arcade crurale. Quel diagnostic devez-vous poser en priorité absolue ?",
    options: [
      "Hernie inguinale directe engouée",
      "Hernie crurale gauche étranglée avec occlusion intestinale mécanique",
      "Appendicite aiguë ectopique",
      "Pyélonéphrite aiguë obstructive",
      "Volvulus gastrique"
    ],
    correctAnswers: [1],
    explanation: "Tuméfaction très douloureuse, irréductible, située SOUS la ligne de Malgaigne chez une femme âgée, associée à un syndrome occlusif : hernie crurale étranglée.",
    clinicalPearl: "Nodule dur très douloureux sous l'arcade crurale + occlusion chez la femme âgée = Hernie crurale étranglée !"
  },
  {
    id: 'q-cas-hernie-2-2',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quelle est la conduite thérapeutique d'urgence ?",
    options: [
      "Tenter une réduction manuelle par taxis sous sédation",
      "Réanimation hémodynamique brève (sonde nasogastrique, solutés IV, bilan préopératoire) et transfert immédiat au bloc opératoire pour laparotomie/décompression chirurgicale en urgence",
      "Prescription d'anti-inflammatoires et surveillance pendant 24h",
      "Scanner abdominal de contrôle le lendemain",
      "Ponction évacuatrice"
    ],
    correctAnswers: [1],
    explanation: "La manœuvre de taxis est contre-indiquée. L'intervention chirurgicale en urgence est indispensable après une réanimation brève pour décomprimer l'anse et évaluer sa viabilité.",
    clinicalPearl: "Urgence vitale : Zéro réduction par taxis -> SNG, remplissage et bloc opératoire immédiat !"
  },
  {
    id: 'q-cas-hernie-2-3',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Lors de la décompression chirurgicale au bloc, l'anse grêle incarcérée reste noirâtre, sans pouls mésentérique ni péristaltisme après 10 minutes d'oxygénation et compresses chaudes. Quelle décision chirurgicale s'impose ?",
    options: [
      "Réintégration de l'anse dans l'abdomen et fermeture pariétale simple",
      "Résection intestinale segmentaire de l'anse grêle nécrosée avec anastomose en tissu sain (ou stomie selon état hémodynamique) et réparation du collet fémoral",
      "Ablation du rein gauche",
      "Fermeture simple sans geste digestif",
      "Lavage abondant et surveillance"
    ],
    correctAnswers: [1],
    explanation: "Une anse nécrotique non viable (noire, sans péristaltisme) ne doit JAMAIS être réintégrée (risque de péritonite fécale et de choc septique mortel). Une résection segmentaire d'anse grêle s'impose.",
    clinicalPearl: "Anse non viable = Résection intestinale segmentaire en tissu sain obligatoire !"
  },

  // Cas 3 : M. L., 63 ans, cirrhose et hernie ombilicale
  {
    id: 'q-cas-hernie-3-1',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (M. L., 63 ans, cirrhose Child B avec ascite) - Volumineuse hernie ombilicale avec peau amincie, luisante, et zone violacée au sommet. Quelle complication cutanée gravissime redoutez-vous ?",
    options: [
      "Un zona péri-ombilical",
      "Une nécrose cutanée par ischémie avec rupture spontanée du sac et issue massive de liquide d'ascite (fistule liquidienne et péritonite septique)",
      "Un nævus mélanocytaire géant",
      "Une métastase pulmonaire cutanée",
      "Une fistule urinaire ombilicale"
    ],
    correctAnswers: [1],
    explanation: "La distension ascitique majeure amincit la peau ombilicale. L'apparition d'une zone violacée précède la nécrose et la rupture spontanée du sac avec décompression brutale, infection du liquide d'ascite et mortalité très élevée.",
    clinicalPearl: "Hernie ombilicale sur ascite amincie : Risque d'ulcération et de rupture du sac avec péritonite septique foudroyante !"
  },
  {
    id: 'q-cas-hernie-3-2',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quelle est la priorité médicale avant toute cure chirurgicale chez ce cirrhotique ?",
    options: [
      "Ponction évacuatrice d'ascite compensée par albumine et contrôle pharmacologique de l'ascite par diurétiques",
      "Transplantation hépatique en urgence immédiate dans l'heure",
      "Pose de prothèse pariétale en urgence sans bilan",
      "Antibiothérapie prophylactique seule sans chirurgie",
      "Régime riche en sel"
    ],
    correctAnswers: [0],
    explanation: "Le contrôle de l'ascite en pré- et postopératoire (paracentèse évacuatrice avec perfusion d'albumine, diurétiques, régime hyposodé) est le garant absolu de la réussite chirurgicale pour éviter la récidive et la fuite d'ascite à travers la plaie.",
    clinicalPearl: "Hernie ombilicale du cirrhotique : Contrôler et assécher l'ascite en priorité avant et après la chirurgie !"
  },

  // Cas 4 : M. D., 45 ans, hernie inguinale connue devenue douloureuse
  {
    id: 'q-cas-hernie-4-1',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 34,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Homme de 45 ans) - Hernie inguinale gauche connue, subitement douloureuse depuis ce matin, dure, non réductible, sans vomissement pour l'instant. Quel mécanisme vasculaire initial préside à la souffrance de l'anse incarcérée ?",
    options: [
      "Stase veineuse et œdème pariétal par compression du collet, aboutissant secondairement à l'ischémie artérielle",
      "Section nerveuse du nerf ilio-inguinal",
      "Obstruction lymphatique exclusive",
      "Thrombose primitive de l'aorte",
      "Spasme péritonéal idiopathique"
    ],
    correctAnswers: [0],
    explanation: "La striction au collet bloque en premier lieu le retour veineux (basses pressions), ce qui engendre un œdème pariétal massif qui augmente le volume de l'anse, majorant la striction jusqu'à bloquer l'afflux artériel (ischémie et nécrose).",
    clinicalPearl: "Physiopathologie de l'étranglement : Compression veineuse initiale -> Œdème -> Occlusion artérielle secondaire -> Nécrose."
  },
  {
    id: 'q-cas-hernie-4-2',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 35,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - À l'ouverture chirurgicale du sac herniaire, issue de liquide hémorragique fétide et présence d'une anse grêle nécrosée friable. Que devez-vous faire ?",
    options: [
      "Réduire l'anse rapidement pour ne pas perdre de temps",
      "Isoler l'anse nécrosée, réaliser une résection grélique segmentaire en tissu sain avec anastomose et réparation pariétale sans prothèse en milieu septique (ou selon technique adaptée)",
      "Ablation du testicule gauche obligatoire",
      "Fermeture cutanée simple",
      "Laisser la hernie ouverte"
    ],
    correctAnswers: [1],
    explanation: "En présence d'une nécrose intestinale avérée, la résection intestinale s'impose. En milieu septique franc avec résection digestive, la pose d'une prothèse synthétique classique est en principe évitée ou très discutée en raison du risque de surinfection de plaque (on privilégie une raphie anatomique solide type Shouldice).",
    clinicalPearl: "Nécrose intestinale = Résection digestive. Attention à l'utilisation de prothèse en milieu septique franc !"
  },

  // Cas 5 : Patiente de 36 ans, douleur latérale intermittente
  {
    id: 'q-cas-hernie-5-1',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 36,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Femme de 36 ans) - Douleur chronique intermittente de la fosse iliaque droite majorée aux efforts de toux. Examen inguinal strictement normal. Échographie de la paroi abdominale : défect aponévrotique de 15 mm au bord externe du muscle grand droit de l'abdomen avec issue d'épiploon. De quel type de hernie s'agit-il ?",
    options: [
      "Hernie de Spiegel (hernie ventro-latérale)",
      "Hernie obturatrice",
      "Hernie de Jean-Louis Petit",
      "Hernie crurale masquée",
      "Hernie épigastrique médiane"
    ],
    correctAnswers: [0],
    explanation: "Une hernie située au bord externe du muscle grand droit à travers la ligne semi-lunaire de Spiegel est une hernie de Spiegel.",
    clinicalPearl: "Défect au bord externe du muscle grand droit = Hernie de Spiegel."
  },
  {
    id: 'q-cas-hernie-5-2',
    courseId: 'crs-gastro-hernies-abdominales',
    questionNumber: 37,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - Pourquoi la cure chirurgicale est-elle formellement recommandée malgré la rareté de cette hernie de Spiegel ?",
    options: [
      "Parce que son collet aponévrotique rigide et étroit expose à un risque élevé d'étranglement aigu de l'anse incarcérée",
      "Parce qu'elle évolue obligatoirement en cancer de la paroi",
      "Parce qu'elle provoque une thrombose de la veine cave",
      "Parce qu'elle s'accompagne toujours d'une péritonite biliaire",
      "Pour des raisons exclusivement esthétiques"
    ],
    correctAnswers: [0],
    explanation: "La hernie de Spiegel a un collet aponévrotique très rigide et étroit, ce qui l'expose fréquemment à l'étranglement aigu (dans 20 à 30 % des cas révélés). Elle doit donc être opérée dès son diagnostic.",
    clinicalPearl: "Hernie de Spiegel : Collet rigide et étroit -> Risque élevé d'étranglement -> Indication opératoire formelle."
  }
];

export const HERNIES_ABDOMINALES_RESOURCES: CourseResource[] = [
  {
    id: 'res-hernie-mindmap',
    courseId: 'crs-gastro-hernies-abdominales',
    type: 'Resume',
    title: 'Fiche Synthèse : Hernies de la Paroi Abdominale',
    contentMarkdown: `## Hernies de la Paroi Abdominale : L'Essentiel pour le Résidanat
*D'après le cours du Dr Bounab – CHU Douera*

### 1. Définition & Éléments Constitutifs
- **Hernie** : Protrusion temporaire ou permanente d'un viscère intra-abdominal recouvert de son sac péritonéal à travers un orifice naturel de la paroi.
- **Éléments constitutifs** :
  - *Collet* : Orifice aponévrotique inextensible (zone critique de striction).
  - *Sac herniaire* : Péritoine pariétal invaginé.
  - *Contenu* : Épiploon, anse grêle (le plus fréquent), côlon sigmoïde, vessie.

### 2. Anatomie de la Région Inguino-Fémorale
- **Ligne de Malgaigne** : Projection de l'arcade crurale (ligament inguinal).
  - **AU-DESSUS** : Hernie Inguinale (96 % des hernies de l'aine).
    - *Indirecte (oblique externe)* : Pénètre par l'orifice profond en DEHORS des vaisseaux épigastriques, suit le cordon.
    - *Directe* : Fait issue en DEDANS des vaisseaux épigastriques par faiblesse du fascia transversalis.
  - **EN DESSOUS** : Hernie Crurale (fémorale) :
    - Émerge dans l'anneau fémoral, en dedans de la veine fémorale.
    - Prédomine chez la femme âgée dénutrie.
    - **Risque d'étranglement très élevé** (collet étroit et rigide).

### 3. Diagnostic Clinique
- **Hernie non compliquée** :
  - Tuméfaction réductible, impulsive à la toux, indolore ou simple pesanteur.
  - *Manœuvre du doigt ganté* : Butée au bout du doigt = Indirecte ; Poussée sur la face latérale = Directe.
  - Aucun examen d'imagerie n'est nécessaire chez l'adulte typique.
- **Hernie Étranglée (Urgence chirurgicale)** :
  - Tuméfaction douloureuse, **irréductible**, **non impulsive à la toux**.
  - Risque d'ischémie et de nécrose intestinale en moins de 6 heures.
  - Taxis forcé formellement contre-indiqué !

### 4. Principes du Traitement Chirurgical
- **Hernie simple** : Cure prothétique sans tension (Lichtenstein en voie ouverte, ou TAPP/TEP cœlioscopique).
- **Hernie étranglée** :
  - Réanimation brève (SNG, solutés IV, antibioprophylaxie).
  - Bloc opératoire immédiat.
  - Évaluation de la viabilité de l'anse : si nécrose -> résection digestive segmentaire en tissu sain.`,
    author: 'Dr Bounab - CHU Douera'
  },
  {
    id: 'res-hernie-mnemo',
    courseId: 'crs-gastro-hernies-abdominales',
    type: 'Astuce',
    title: 'Mnémotechniques : Hernies de la Paroi',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (Dr Bounab)

1. **Ligne de Malgaigne : « I.A.C »**
   - **I**nguinale = **A**u-dessus de l'arcade
   - **C**rurale = **E**n dessous de l'arcade

2. **Étranglement : « Les 3 I »**
   - **I**rréductible
   - **I**mpulsion absente à la toux
   - **I**nflammatoire / douloureuse vivement

3. **Vaisseaux Épigastriques : « I.L.D.M »**
   - **I**ndirecte = **L**atérale (en dehors)
   - **D**irecte = **M**édiale (en dedans)

4. **Hernies Rares : « S.P.O »**
   - **S**piegel : ligne semi-lunaire ventro-latérale
   - **P**etit (Jean-Louis) : triangle lombaire inférieur
   - **O**bturatrice : canal sous-pubien (Howship-Romberg)`,
    author: 'Dr Bounab - Douera'
  }
];
