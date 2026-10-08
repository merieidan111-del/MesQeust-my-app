import { Question, CourseResource } from '../../types/medical';

export const MALADIE_HEMORROIDAIRE_QUESTIONS: Question[] = [
  {
    "id": "q-hem-01",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'anatomie normale du canal anal, que sont physiologiquement les plexus hémorroïdaires ?",
    "options": [
      "Des malformations vasculaires congénitales pathologiques",
      "Des coussinets fibro-vasculaires sous-muqueux normaux participant à la continence anale fine (au gaz et aux liquides)",
      "Des varices secondaires à l'hypertension portale",
      "Des tumeurs vasculaires bénignes",
      "Des dilatations lymphatiques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les plexus hémorroïdaires (interne et externe) sont des structures anatomiques normales présentes chez tout individu : ce sont des pelotons caverneux vasculaires sous-muqueux intervenant dans la continence fine (15-20% de la pression de clôture anale).",
    "clinicalPearl": "Les hémorroïdes sont des structures anatomiques normales. On ne traite que la MALADIE hémorroïdaire symptomatique."
  },
  {
    "id": "q-hem-02",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la disposition anatomique habituelle des trois paquets hémorroïdaires internes principaux par rapport à la circonférence du canal anal ?",
    "options": [
      "Latéral gauche (3h), antéro-droit (11h) et postéro-droit (7h)",
      "Antérieur pur, postérieur pur et médial",
      "Symétrique à 6h et 12h",
      "Circonférentielle homogène continue",
      "Uniquement à gauche"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les 3 plexus hémorroïdaires internes principaux sont disposés selon les repères horaires classiques (en position de la taille/gynécologique) : latéral gauche (3h), antéro-droit (11h) et postéro-droit (7h).",
    "clinicalPearl": "3 paquets hémorroïdaires internes cardinaux : 3h (gauche), 7h (postéro-droit), 11h (antéro-droit)."
  },
  {
    "id": "q-hem-03",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la manifestation clinique la plus fréquente et inaugurale de la maladie hémorroïdaire interne ?",
    "options": [
      "Une douleur aiguë nocturne violente",
      "Des rectorragies de sang rouge vif, indolores, contemporaines de la défécation, survenant en fin de selle ou en éclaboussure sur la cuvette",
      "Une fièvre élevée avec sueurs",
      "Une diarrhée motrice",
      "Une masse pulsatile inguinale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les rectorragies hémorroïdaires internes sont typiquement indolores (la muqueuse sus-pectinée n'est pas innervée pour la douleur somatique), de sang rouge vif, entourant la selle ou éclaboussant la cuvette en fin de défécation.",
    "clinicalPearl": "Rectorragies hémorroïdaires : INDOLORES, sang rouge vif en fin de selle ou en goutte-à-goutte."
  },
  {
    "id": "q-hem-04",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Devant toute rectorragie, même chez un sujet porteur d'une maladie hémorroïdaire évidente, quel examen endoscopique s'impose impérativement après l'âge de 45-50 ans ou en cas d'antécédents familiaux ?",
    "options": [
      "Une simple anuscopie suffit sans autre contrôle",
      "Une coloscopie totale pour éliminer un polype ou un cancer colo-rectal sous-jacent",
      "Un transit baryté de l'estomac",
      "Une échographie abdominale seule",
      "Une radiographie thoracique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'erreur classique est d'attribuer par excès une rectorragie aux hémorroïdes. Après 45-50 ans ou si signes d'alerte/antécédents familiaux, une coloscopie totale est formellement requise pour exclure un cancer colorectal.",
    "clinicalPearl": "Toute rectorragie > 45-50 ans ou avec facteurs de risque = COLOSCOPIE TOTALE systématique (ne pas tout mettre sur le dos des hémorroïdes !)."
  },
  {
    "id": "q-hem-05",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle classification en 4 stades de Goligher gradue le prolapsus des hémorroïdes internes ?",
    "options": [
      "Classification de Balthazar",
      "Classification de Goligher (Stade I : pas de prolapsus ; Stade II : prolapsus à la poussée se réduisant spontanément ; Stade III : prolapsus nécessitant une réduction manuelle ; Stade IV : prolapsus permanent non réductible)",
      "Classification de Forrest",
      "Classification de Hinchey",
      "Score de Child-Pugh"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Classification de Goligher : Grade I = procidence à l'anuscopie sans extériorisation ; Grade II = extériorisation défécatoire avec réintégration spontanée ; Grade III = réduction manuelle nécessaire ; Grade IV = prolapsus permanent irréductible.",
    "clinicalPearl": "Classification de Goligher : I = pas de prolapsus, II = réduction spontanée, III = réduction manuelle, IV = permanent irréductible."
  },
  {
    "id": "q-hem-06",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication aiguë très douloureuse de la maladie hémorroïdaire externe se traduit par une tuméfaction bleutée arrondie indurée sous-cutanée de la marge anale d'apparition brutale ?",
    "options": [
      "La thrombose hémorroïdaire externe",
      "Le prolapsus circulaire de grade IV",
      "L'abcès de la marge anale",
      "La fissure anale",
      "Le condylome anale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La thrombose hémorroïdaire externe est l'oblitération thrombotique aiguë d'un paquet hémorroïdaire sous-cutané sous-pectiné (innervation sensitive riche). Elle réalise une douleur anale brutale sans fièvre avec nodule bleuâtre ferme.",
    "clinicalPearl": "Thrombose hémorroïdaire externe = Douleur brutale sans fièvre + Nodule bleuté sous-cutané douloureux de la marge anale."
  },
  {
    "id": "q-hem-07",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la prise en charge immédiate de première intention d'une thrombose hémorroïdaire externe vue précocement dans les 24 à 72 premières heures très douloureuse ?",
    "options": [
      "Amputation abdomino-périnéale",
      "Excision chirurgicale sous anesthésie locale (incision et extraction du caillot au bistouri) procurant un soulagement antalgique immédiat",
      "Antibiothérapie parentérale lourde",
      "Abstention totale en attendant 6 mois",
      "Ponction biopsie hépatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'excision sous anesthésie locale (au cabinet ou aux urgences) avec ablation du caillot lève immédiatement la tension pariétale et procure un soulagement quasi instantané.",
    "clinicalPearl": "Thrombose hémorroïdaire externe hyperalgique < 72h = EXCISION sous anesthésie locale (soulagement immédiat)."
  },
  {
    "id": "q-hem-08",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Si la thrombose hémorroïdaire externe est vue tardivement (au-delà de 72 heures) avec une douleur déjà en phase de régression spontanée, quelle est l'attitude thérapeutique recommandée ?",
    "options": [
      "Chirurgie d'urgence immédiate",
      "Traitement médical conservateur : antalgiques (AINS + paracétamol), veinotoniques à forte dose, laxatifs doux et topiques locaux",
      "Chimiothérapie",
      "Ponction percutanée",
      "Mise à plat de fistule"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Au-delà de 72h, le thrombus commence à s'organiser et la chirurgie est moins rentable que le traitement médical (AINS, antalgiques, régulateurs du transit, veinotoniques en cure courte).",
    "clinicalPearl": "Thrombose vue > 72h avec douleur déclinante = Traitement médical (AINS, antalgiques, laxatifs)."
  },
  {
    "id": "q-hem-09",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Qu'est-ce qu'une marisque anale séquellaire ?",
    "options": [
      "Un polype adénomateux précancéreux",
      "Un repli cutané flasque indolore vestigial de la marge anale, séquelle cutanée atrophique d'une ancienne thrombose hémorroïdaire externe résorbée",
      "Un condylome vénérien",
      "Une métastase sous-cutanée",
      "Une fistule active"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La marisque est une séquelle cutanée bénigne purement résiduelle après résorption de l'œdème ou du thrombus, sans aucun potentiel dégénératif, ne justifiant un traitement que pour motif esthétique ou de gêne à l'hygiène.",
    "clinicalPearl": "Marisque anale = Repli cutané cicatriciel flasque bénin post-thrombose hémorroïdaire (aucun risque malin)."
  },
  {
    "id": "q-hem-10",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement instrumental endoscopique ambulatoire est le plus efficace et le plus employé pour traiter les hémorroïdes internes de grade I à III non compliquées de thrombose ?",
    "options": [
      "La ligature élastique des hémorroïdes internes (technique de Barron)",
      "La cryochirurgie à l'azote",
      "La radiothérapie locale",
      "L'hémorroïdectomie pédiculaire",
      "L'injection de colle cyanoacrylate"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La ligature élastique sus-pectinée (largage d'un anneau élastique aspirant la muqueuse au-dessus de la ligne pectinée en zone insensible) entraîne une ischémie, nécrose et sclérose du paquet hémorroïdaire avec une excellente efficacité.",
    "clinicalPearl": "Traitement instrumental de référence des hémorroïdes internes = LIGATURE ÉLASTIQUE (procédure de Barron indolore sus-pectinée)."
  },
  {
    "id": "q-hem-11",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Où doit obligatoirement être posé l'élastique lors d'une ligature élastique des hémorroïdes internes pour éviter une douleur aiguë syncopale ?",
    "options": [
      "Sous la ligne pectinée au niveau de la peau de la marge",
      "Au moins 1 cm AU-DESSUS de la ligne pectinée (zone d'innervation végétative autonome insensible à la douleur somatique)",
      "Directement sur le sphincter strié",
      "Sur la verge ou la vulve",
      "Au niveau de la commissure postérieure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La muqueuse sus-pectinée possède une innervation viscérale insensible à la douleur cutanée somatique. Poser l'élastique sous la ligne pectinée (innervation par le nerf pudendal) provoquerait une douleur insupportable immédiate.",
    "clinicalPearl": "Ligature élastique : toujours AU-DESSUS de la ligne pectinée (zone indolore sans innervation somatique)."
  },
  {
    "id": "q-hem-12",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication infectieuse périnéale gravissime exceptionnelle mais redoutée peut compliquer un traitement instrumental ou une ligature élastique en cas de fièvre, dysurie et douleur pelvienne post-procédure ?",
    "options": [
      "Une pyélonéphrite aiguë bilatérale",
      "Une cellulite pelvienne ou péritonite périnéale sévère (sepsis pelvien grave / gangrène)",
      "Une otite moyenne aiguë",
      "Un infarctus du myocarde",
      "Une pancréatite aiguë"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'apparition d'une triade fièvre + douleur anale intense + rétention aiguë d'urines dans les 3 à 10 jours suivant une ligature élastique impose l'élimination immédiate d'un sepsis pelvien nécrosant.",
    "clinicalPearl": "Alerte post-ligature hémorroïdaire : Fièvre + Douleur pelvienne + Rétention d'urines = Sepsis pelvien (urgence vitale)."
  },
  {
    "id": "q-hem-13",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle intervention chirurgicale classique d'exérèse hémorroïdaire radicale (dite 'ouverte' pédiculaire tripolaire) est la technique chirurgicale historique de référence ?",
    "options": [
      "L'intervention de Milligan et Morgan (exérèse des 3 paquets avec ponts cutanéo-muqueux laissés ouverts)",
      "L'intervention de Hartmann",
      "La colectomie totale",
      "L'anopexie de Longo fermée",
      "L'intervention de Whipple"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hémorroïdectomie pédiculaire selon Milligan-Morgan comporte la dissection et la ligature des 3 paquets hémorroïdaires avec préservation de 3 ponts cutanéo-muqueux qui cicatrisent en seconde intention.",
    "clinicalPearl": "Hémorroïdectomie de Milligan et Morgan = Exérèse ouverte des 3 paquets avec ponts cutanéo-muqueux (traitement chirurgical radical de référence)."
  },
  {
    "id": "q-hem-14",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle technique chirurgicale circulaire utilise une pince agrafeuse mécanique circulaire pour réséquer une collerette de muqueuse rectale sus-hémorroïdaire et remonter les paquets hémorroïdaires internes (anopexie sans plaie anale externe) ?",
    "options": [
      "L'intervention de Longo (anopexie mécanique circulaire)",
      "L'intervention de Milligan-Morgan",
      "L'hémorroïdectomie de Ferguson",
      "La déarterialisation Doppler simple",
      "La sphinctérotomie interne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'intervention de Longo (anopexie circulaire agrafée) remonte le prolapsus hémorroïdaire dans le rectum et interrompt les branches artérielles terminales, procurant des suites moins douloureuses que la chirurgie ouverte de Milligan-Morgan.",
    "clinicalPearl": "Intervention de Longo = Anopexie mécanique circulaire agrafée (moins douloureuse à court terme)."
  },
  {
    "id": "q-hem-15",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge de la crise hémorroïdaire aiguë congestive non thrombosée, quelle classe d'anti-inflammatoires est la plus efficace sur l'œdème et la douleur en cure courte ?",
    "options": [
      "Les corticoïdes per os (cure courte de 5 à 7 jours) ou les Anti-Inflammatoires Non Stéroïdiens (AINS)",
      "Les antibiotiques pénicillines",
      "Les immunosuppresseurs",
      "Les diurétiques de l'anse",
      "Les anticoagulants héparines"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La crise hémorroïdaire inflammatoire répond très bien aux AINS (ou à une courte corticothérapie orale de 5-7 jours), associés à un régulateur du transit (mucilages/laxatifs osmotiques) et à des flavonoïdes (veinotoniques à forte dose).",
    "clinicalPearl": "Crise hémorroïdaire œdémateuse : AINS ou Corticoïdes en cure courte (5j) + Laxatifs doux + Veinotoniques forte dose."
  },
  {
    "id": "q-hem-16",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Pourquoi les médicaments laxatifs stimulants (anthraquinones, séné, bourdaine) doivent-ils être ÉVITÉS dans le traitement de la maladie hémorroïdaire ?",
    "options": [
      "Ils ne fonctionnent pas",
      "Ils provoquent une irritation muqueuse colique et anale sévère, une dépendance et aggravent la congestion hémorroïdaire",
      "Ils augmentent le cholestérol",
      "Ils induisent des calculs rénaux",
      "Ils décolorent les selles"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les laxatifs stimulants sont irritants pour la muqueuse ano-rectale et aggravent les poussées inflammatoires hémorroïdaires. On privilégie toujours les laxatifs de lest (fibres/psyllium) et les laxatifs osmotiques (PEG/Macrogol).",
    "clinicalPearl": "Maladie hémorroïdaire : Privilégier les laxatifs osmotiques (Macrogol) ou de lest (fibres). ÉVITER les laxatifs stimulants irritants."
  },
  {
    "id": "q-hem-17",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel facteur favorisant hygiéno-diététique quotidien joue un rôle déterminant dans la survenue et l'aggravation de la maladie hémorroïdaire ?",
    "options": [
      "Les efforts de poussée défécatoire prolongés (station prolongée assise sur la cuvette des toilettes) et la constipation chronique",
      "L'activité physique modérée",
      "La consommation de carottes",
      "Le port de vêtements en coton",
      "La prise de paracétamol"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La sédentarité aux toilettes (efforts prolongés d'expulsion, lecture aux WC) majore l'engorgement veineux déclive des pelotons hémorroïdaires. L'éducation à une défécation rapide sans effort est une consigne fondamentale.",
    "clinicalPearl": "Éducation hémorroïdaire : Ne pas rester assis longtemps sur la cuvette des WC + Éviter les efforts de poussée."
  },
  {
    "id": "q-hem-18",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Qu'est-ce que la thrombose hémorroïdaire interne prolabée (procidence hémorroïdaire étranglée) ?",
    "options": [
      "Une extériorisation massive et irréductible des paquets hémorroïdaires internes œdématiés et thrombosés réalisant un bourrelet anale violacé congestif hyperalgique circulaire",
      "Une simple marisque",
      "Un cancer anale métastatique",
      "Une hernie inguinale",
      "Un abcès du foie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'étranglement hémorroïdaire associe un prolapsus permanent de volumineux paquets hémorroïdaires internes sphacélés, thrombosés et œdématiés sous l'effet du spasme sphinctérien, réalisant une urgence hyperalgique.",
    "clinicalPearl": "Prolapsus hémorroïdaire étranglé = Bourrelet circulaire interne prolabé thrombosé irréductible (urgence hyperalgique)."
  },
  {
    "id": "q-hem-19",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle attitude thérapeutique médicale initiale est recommandée dans le prolapsus hémorroïdaire interne étranglé œdématié avant de discuter la chirurgie ?",
    "options": [
      "Tenter une réduction forcée brutale sans analgésie",
      "Repos au lit en décubitus ventral, antalgiques majeurs (morphiniques si besoin), corticothérapie générale courte ou AINS pour réduire l'œdème, vessie de glace locale et soins doux",
      "Laparotomie immédiate",
      "Lavement salin hypertonique",
      "Radiothérapie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'œdème majeur et l'hypertonie rendent la chirurgie d'emblée à haut risque de sténose anale ou d'incontinence. Le traitement médical d'urgence vise à réduire l'œdème et calmer le spasme (glaçage, corticoïdes, antalgiques forts) avant exérèse différée si besoin.",
    "clinicalPearl": "Étranglement hémorroïdaire : Refroidissement local (glace) + Corticoïdes IV/oraux + Antalgiques forts pour lever le spasme."
  },
  {
    "id": "q-hem-20",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle technique récente guidée par sonde Doppler permet d'interrompre le flux sanguin hémorroïdaire artériel sans résection de tissu (HAL-RAR) ?",
    "options": [
      "La déarterialisation hémorroïdaire transanale guidée par Doppler (THD / HAL) avec mucopexie",
      "L'ablation du sphincter strié",
      "La ponction percutanée",
      "Le shunt spléno-rénal",
      "La colectomie droite"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La ligature des branches terminales de l'artère rectale supérieure repérées par Doppler transanal (Hemorrhoidal Artery Ligation - HAL) combinée au plissement de la muqueuse prolabée (Recto Anal Repair - RAR) offre une alternative mini-invasive.",
    "clinicalPearl": "Doppler hémorroïdaire (HAL-RAR) = Ligature sous Doppler des branches artérielles rectales + mucopexie (épargne tissulaire)."
  },
  {
    "id": "q-hem-21",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la principale contre-indication de la sclérothérapie ou de la photocoagulation infrarouge des hémorroïdes internes ?",
    "options": [
      "La grossesse au 1er trimestre",
      "Une maladie hémorroïdaire externe pure ou une infection anopérinéale active",
      "Un âge supérieur à 60 ans",
      "Une hypertension artérielle traitée",
      "La consommation de café"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les traitements instrumentaux s'adressent EXCLUSIVEMENT aux hémorroïdes internes situées au-dessus de la ligne pectinée. Ils sont formellement contre-indiqués sur le versant hémorroïdaire externe sous-pectiné (nerf somatique sensitive).",
    "clinicalPearl": "Traitements instrumentaux (ligature, infrarouge) : STRICTEMENT RÉSERVÉS AUX HÉMORROÏDES INTERNES sus-pectinées."
  },
  {
    "id": "q-hem-22",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Chez la femme enceinte au 3ème trimestre ou en post-partum immédiat, quel type de complication hémorroïdaire est particulièrement fréquent en raison de la compression veineuse cave et des efforts expulsifs ?",
    "options": [
      "La thrombose hémorroïdaire externe et l'œdème congestif hémorroïdaire",
      "Le cancer de l'anus",
      "La tuberculose péritonéale",
      "La perforation spontanée du rectum",
      "L'achalasie anale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La compression par l'utérus gravide, l'imprégnation progestative (hypotonie veineuse et constipation) et les efforts expulsifs de l'accouchement favorisent massivement les thromboses hémorroïdaires aiguës du post-partum.",
    "clinicalPearl": "Femme enceinte / Post-partum : pic de fréquence de thrombose hémorroïdaire externe (compression cave + efforts expulsifs)."
  },
  {
    "id": "q-hem-23",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication cicatricielle tardive peut survenir après une hémorroïdectomie chirurgicale trop délabrante emportant trop de tissu de revêtement cutané sans préserver de ponts suffisants ?",
    "options": [
      "Une sténose anale cicatricielle fibreuse rétractile",
      "Un diabète insipide",
      "Une hépatomégalie",
      "Un infarctus rénal",
      "Une pleurésie droite"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le respect de ponts cutanéo-muqueux sains suffisants entre les plaies d'exérèse (comme dans le Milligan-Morgan) est impératif pour prévenir la rétraction cicatricielle circulaire et la sténose anale fibreuse.",
    "clinicalPearl": "Complication tardive hémorroïdectomie délabrante = Sténose anale cicatricielle (nécessite préservation des ponts cutanés)."
  },
  {
    "id": "q-hem-24",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'évaluation globale d'une affection proctologique, quelle position d'examen du patient sur la table est couramment utilisée en consultation de proctologie en France ?",
    "options": [
      "La position genu-pectorale (accroupi sur les genoux et les coudes) OU le décubitus latéral gauche (position de Sims)",
      "Le décubitus dorsal strict à plat",
      "La position debout",
      "Le décubitus ventral strict la tête sous l'oreiller",
      "La station assise"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'examen proctologique se réalise soit en position genu-pectorale (offre la meilleure exposition du canal anal et des cryptes), soit en décubitus latéral gauche (position de Sims, plus confortable pour le patient âgé ou pudique).",
    "clinicalPearl": "Position d'examen proctologique : Genu-pectorale ou Décubitus latéral gauche (position de Sims)."
  },
  {
    "id": "q-hem-25",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical par voie orale à base de flavonoïdes purifiés micronisés est couramment prescrit pour réduire la durée et l'intensité des crises hémorroïdaires aiguës ?",
    "options": [
      "Les veinotoniques / vasculoprotecteurs à forte dose (Fraction flavonoïque purifiée micronisée : Daflon)",
      "L'aspirine à forte dose",
      "Les laxatifs de contact",
      "Les inhibiteurs calciques",
      "Les diurétiques thiazidiques"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La fraction flavonoïque micronisée (ex: 6 comprimés/j pendant 4 jours puis 4/j pendant 3 jours) possède un effet anti-inflammatoire et veinotonique démontrant une efficacité pour raccourcir la crise aiguë.",
    "clinicalPearl": "Crise hémorroïdaire : Fraction flavonoïque micronisée (Daflon) à forte dose en cure courte (7 jours)."
  },
  {
    "id": "cas-hem-01",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 52 ans sans antécédents médicaux consulte pour des épisodes répétés de saignement rouge vif survenant lors de la défécation depuis 3 mois. Le sang éclabousse la cuvette des toilettes en fin de selle. Il n'a aucune douleur anale. L'examen proctologique et l'anuscopie retrouvent des hémorroïdes internes prolabées turgescentes qui s'extériorisent à la poussée mais se réintègrent spontanément (stade II de Goligher). Quel examen endoscopique complet devez-vous prescrire de principe avant de débuter tout traitement ?",
    "options": [
      "Une simple radiographie du bassin",
      "Une coloscopie totale pour éliminer une tumeur colorectale sous-jacente",
      "Un scanner thoracique",
      "Une cystoscopie",
      "Une échographie thyroïdienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez un patient de plus de 50 ans présentant des rectorragies, la présence d'hémorroïdes n'élimine pas une néoplasie colique sous-jacente synchrone. Une coloscopie totale est formellement indiquée.",
    "clinicalPearl": "Rectorragies chez l'adulte > 50 ans = COLOSCOPIE TOTALE systématique avant de conclure aux hémorroïdes seules."
  },
  {
    "id": "cas-hem-02",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La coloscopie totale est strictement normale jusqu'au bas fond caecal, en dehors des hémorroïdes internes de grade II. Quel traitement instrumental ambulatoire rapide, efficace et indolore pouvez-vous lui proposer au cabinet pour traiter ses rectorragies ?",
    "options": [
      "Hémorroïdectomie de Milligan et Morgan sous anesthésie générale immédiate",
      "Ligatures élastiques des paquets hémorroïdaires internes sus-pectinés en 1 à 3 séances ambulatoires",
      "Sphinctérotomie interne",
      "Excision au bistouri électrique de tout le canal anal",
      "Amputation du rectum"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour des hémorroïdes de stade II responsables de saignements récidivants après coloscopie normale, la ligature élastique sus-pectinée est le traitement instrumental de choix, très efficace et non douloureux.",
    "clinicalPearl": "Hémorroïdes internes grade II symptomatiques = Ligatures élastiques ambulatoires en 1ère intention."
  },
  {
    "id": "cas-hem-03",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une femme de 34 ans consulte en urgence 48 heures après un accouchement par voie basse pour une douleur anale brutale intolérable empêchant toute position assise. À l'examen de la marge anale, on observe sous la peau un nodule violacé bleuté de 12 mm, ferme, tendu et exquisément douloureux à la palpation à 5h. Il n'y a pas de fièvre. Quel est le diagnostic certain ?",
    "options": [
      "Fissure anale aiguë",
      "Thrombose hémorroïdaire externe aiguë du post-partum",
      "Abcès périnéal collecté",
      "Ulcération de Crohn",
      "Cancer épidermoïde de l'anus"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La tuméfaction sous-cutanée bleutée, ferme et hyperalgique de survenue brutale dans le post-partum caractérise la thrombose hémorroïdaire externe aiguë non compliquée.",
    "clinicalPearl": "Post-partum + Nodule bleuté sous-cutané hyperalgique de la marge anale = Thrombose hémorroïdaire externe."
  },
  {
    "id": "cas-hem-04",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La patiente étant vue à H+48 au stade de douleur maximale très invalidante, quel geste geste proctologique simple sous anesthésie locale va la soulager immédiatement ?",
    "options": [
      "Lavement hypertonique",
      "Excision de la thrombose externe au bistouri sous anesthésie locale (incision et énucléation du caillot)",
      "Hémorroïdectomie pédiculaire hospitalière",
      "Ponction biopsie sous scanner",
      "Prescription d'antibiotiques seuls"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'excision du paquet thrombosé sous anesthésie locale (infiltrat de xylocaïne) avec évacuation du caillot procure une décompression immédiate et soulage instantanément la patiente.",
    "clinicalPearl": "Thrombose hémorroïdaire externe hyperalgique < 72h = EXCISION sous anesthésie locale au cabinet/urgences."
  },
  {
    "id": "cas-hem-05",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 62 ans souffre d'un prolapsus hémorroïdaire interne circulaire permanent et irréductible (stade IV de Goligher) responsable de suintements muqueux permanents, de prurit et d'épisodes de rectorragies avec anémie ferriprive (Hb 9,8 g/dL). Les traitements médicaux et les ligatures ont échoué. Quel traitement chirurgical définitif radical de référence lui proposez-vous ?",
    "options": [
      "Abstention thérapeutique",
      "Hémorroïdectomie pédiculaire tripolaire selon l'intervention de Milligan et Morgan",
      "Sclérose simple en consultation",
      "Pose d'une sonde de Blakemore",
      "Transplantation d'îlots de Langerhans"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour un prolapsus permanent de grade IV anémiant en échec de traitement instrumental, l'hémorroïdectomie chirurgicale pédiculaire tripolaire (Milligan-Morgan) est l'intervention de référence apportant la guérison définitive.",
    "clinicalPearl": "Prolapsus hémorroïdaire grade IV invalidant / anémiant = Hémorroïdectomie de Milligan et Morgan."
  }
];

export const MALADIE_HEMORROIDAIRE_RESOURCES: CourseResource[] = [
  {
    "id": "res-hem-summary",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Maladie Hémorroïdaire",
    "contentMarkdown": "### 🎯 Points Clés : Maladie Hémorroïdaire\n- **Nature** : Plexus fibro-vasculaires normaux sous-muqueux. Maladie = symptômes.\n- **Signes cardinaux** : Rectorragies indolores de sang rouge en fin de selle, prolapsus (stades I à IV de Goligher).\n- **Règle absolue** : Rectorragie > 45-50 ans ou avec FDR = COLOSCOPIE TOTALE systématique.\n- **Thrombose hémorroïdaire externe** : Nodule bleuâtre ferme très douloureux sans fièvre -> Excision sous AL si vue < 72h.\n- **Traitement instrumental des hémorroïdes internes** : Ligature élastique sus-pectinée (indolore, très efficace).\n- **Chirurgie radicale** : Hémorroïdectomie ouverte tripolaire de Milligan-Morgan (stades III-IV ou échecs).",
    "author": "Société Nationale Française de Colo-Proctologie"
  },
  {
    "id": "res-hem-tips",
    "courseId": "crs-gastro-maladie-hemorroidaire",
    "type": "Astuce",
    "title": "Mnémoniques & Repères : Hémorroïdes",
    "contentMarkdown": "### 💡 Repères anatomiques des 3 paquets cardinaux :\n- 3h : latéral gauche.\n- 7h : postéro-droit.\n- 11h : antéro-droit.\n\n*Toujours ligaturer > 1 cm au-dessus de la ligne pectinée pour éviter la douleur somatique !*",
    "author": "Faculté de Médecine"
  }
];
