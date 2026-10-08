import { Question, CourseResource } from '../../types/medical';

export const LESIONS_CAUSTIQUES_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Lésions Caustiques du Tractus Digestif Supérieur
  // -------------------------------------------------------------
  {
    id: 'q-caust-01',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un enfant ingère accidentellement une faible quantité de soude caustique concentrée (base forte). Quel type de nécrose tissulaire est induit et quel organe est le plus sévèrement touché ?",
    options: [
      "Nécrose de coagulation touchant surtout l'œsophage",
      "Nécrose de liquéfaction diffusant profondément, touchant avec prédilection l'œsophage",
      "Nécrose de coagulation touchant avec prédilection l'antre gastrique",
      "Nécrose caséeuse diffuse de la muqueuse",
      "Thrombose veineuse sans nécrose tissulaire spécifique"
    ],
    correctAnswers: [1],
    explanation: "Les bases fortes (soude, potasse) provoquent une nécrose de liquéfaction par saponification des lipides et dissolution des protéines membranaires. Elles diffusent profondément dans la paroi et atteignent avec prédilection l'œsophage ('bite the esophagus'). Les acides provoquent une nécrose de coagulation avec escarre protectrice touchant surtout l'estomac.",
    clinicalPearl: "Bases fortes (Destop, soude) = Nécrose de liquéfaction en profondeur, lésion œsophagienne maximale."
  },
  {
    id: 'q-caust-02',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'épidémiologie des ingestions de caustiques :",
    options: [
      "L'ingestion volontaire chez l'adulte concerne moins de 10 % des cas",
      "Chez l'enfant de moins de 5 ans, l'ingestion est presque toujours accidentelle (liquides ménagers déconditionnés), de faible volume",
      "L'ingestion volontaire de l'adulte touche exclusivement des hommes âgés sans antécédents",
      "La mortalité chez l'enfant est très élevée (> 20 %)",
      "Les brûlures caustiques ne se voient jamais chez l'adulte"
    ],
    correctAnswers: [1],
    explanation: "Chez l'enfant (< 5 ans), l'ingestion est accidentelle (environ 85 % des cas d'ingestion), porte sur de faibles volumes de produits ménagers mal rangés ou déconditionnés, et la mortalité est quasi nulle. Chez l'adulte, l'ingestion est le plus souvent volontaire (TS dans 70 % des cas, souvent sur terrain psychiatrique ou éthylique), massive et de pronostic beaucoup plus sombre.",
    clinicalPearl: "Épidémiologie : Enfant = Accidentel, faible quantité, bénin. Adulte = Volontaire (TS), grande quantité, gravissime."
  },
  {
    id: 'q-caust-03',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un adulte ingère dans un but d'autolyse de l'acide chlorhydrique concentré. Quel adage endoscopique classique résume l'atteinte digestive prédominante des acides ?",
    options: [
      "« Bite the esophagus and lick the pyloric antrum »",
      "« Lick the esophagus and bite the pyloric antrum » (traverse vite l'œsophage et brûle sévèrement l'estomac/antre)",
      "« Spare the stomach, burn the pharynx »",
      "« Lick both esophagus and colon »",
      "« L'acide ne provoque aucune lésion gastrique »"
    ],
    correctAnswers: [1],
    explanation: "Les acides forts (fluides, transit œsophagien rapide mais stase gastrique prolongée par spasme pylorique réflexe) causent des brûlures gastriques antrales majeures : 'Lick the esophagus and bite the pyloric antrum'. Les bases visqueuses s'attardent dans l'œsophage : 'Bite the esophagus and lick the antrum'.",
    clinicalPearl: "Acides forts = Atteinte gastrique et antrale prédominante ('bite the antrum'). Bases fortes = Atteinte œsophagienne majeure."
  },
  {
    id: 'q-caust-04',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la phase hyperaiguë (J1 à J3) après ingestion caustique grave, quel phénomène vasculo-tissulaire prédomine au niveau pariétal ?",
    options: [
      "Une cicatrisation fibreuse précoce",
      "Œdème massif, ulcérations muqueuses, thromboses artériolaires et veineuses avec risque d'ischémie transmurale",
      "La formation d'une sténose fibreuse définitive",
      "Une prolifération adénomateuse réactionnelle",
      "Une calcification des couches musculaires"
    ],
    correctAnswers: [1],
    explanation: "La phase hyperaiguë (J1-J3) est dominée par les phénomènes vasculo-nécrotiques : intense œdème, thromboses des microvaisseaux, nécrose aiguë, avec risque immédiat de perforation et de choc systémique.",
    clinicalPearl: "Phase hyperaiguë (J1-J3) : Thromboses vasculaires, nécrose ischémique, œdème et risque de perforation aiguë."
  },
  {
    id: 'q-caust-05',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification endoscopique de Zargar, une nécrose pariétale étendue (muqueuse noirâtre, dévitalisée sans viabilité) sans perforation visible correspond au stade :",
    options: [
      "Stade 2a",
      "Stade 2b",
      "Stade 3a (nécrose focale)",
      "Stade 3b (nécrose étendue)",
      "Stade 4 (perforation)"
    ],
    correctAnswers: [3],
    explanation: "Classification de Zargar : Stade 1 = érythème/œdème ; Stade 2a = ulcérations superficielles non confluentes ; Stade 2b = ulcérations profondes circonférentielles ; Stade 3a = nécrose focale ; Stade 3b = nécrose étendue (grisâtre ou noirâtre) ; Stade 4 = perforation.",
    clinicalPearl: "Classification de Zargar : Stade 3b = Nécrose étendue (facteur prédictif majeur de nécrose transmurale et de chirurgie)."
  },
  {
    id: 'q-caust-06',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente admise 4 heures après ingestion d'un déboucheur liquide présente un emphysème sous-cutané cervical crépitant et un pneumomédiastin à la radio thoracique. Quelle est la conduite immédiate ?",
    options: [
      "Faire boire du lait frais pour neutraliser le produit",
      "Poser une sonde nasogastrique en force pour vidanger l'estomac",
      "Réaliser immédiatement une endoscopie digestive haute souple",
      "Indication chirurgicale en urgence absolue (œsophagectomie / laparotomie) pour perforation œsophagienne",
      "Prescrire des corticoïdes et surveiller en salle commune"
    ],
    correctAnswers: [3],
    explanation: "L'emphysème sous-cutané et le pneumomédiastin signent formellement la perforation œsophagienne (médiastinite caustique). C'est une urgence chirurgicale vitale imposant une œsophagectomie en urgence. L'endoscopie, la pose de sonde, le lavage et les boissons sont strictement proscrits.",
    clinicalPearl: "Signes de perforation (emphysème sous-cutané, pneumopéritoine) = BLOC OPÉRATOIRE IMMÉDIAT ! (Endoscopie contre-indiquée)."
  },
  {
    id: 'q-caust-07',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Au scanner thoraco-abdominal injecté, trois critères scanographiques analysent la nécrose transpariétale de l'œsophage. Laquelle de ces anomalies traduit une nécrose transmurale ?",
    options: [
      "Une paroi épaissie prenant fortement et harmonieusement le contraste",
      "La disparition de la visibilité de la paroi œsophagienne, l'effacement de la graisse péri-œsophagienne et le défaut de rehaussement de la paroi (absence de prise de contraste)",
      "Un œsophage de calibre normal à paroi fine",
      "La présence d'un corps étranger calcifié",
      "Un reflux gastro-œsophagien banal"
    ],
    correctAnswers: [1],
    explanation: "Les trois critères TDM de nécrose transmurale œsophagienne sont : 1) Défaut de prise de contraste de la paroi, 2) Flou ou effacement de l'interface avec la graisse péri-œsophagienne, 3) Épaississement avec délimitation non visible. La perte d'au moins 2 critères sur 3 a une spécificité > 80 % pour prédire la nécrose transmurale imposant l'exérèse.",
    clinicalPearl: "Scanner : Défaut de rehaussement pariétal + Infiltration/effacement de la graisse péri-œsophagienne = Nécrose transmurale !"
  },
  {
    id: 'q-caust-08',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un enfant de 2 ans a ingéré accidentellement quelques gouttes d'eau de Javel diluée. Clinique normale, aucune lésion buccale, endoscopie faite à H12 : œsophagite stade 1 de Zargar (érythème isolé). Quelle est la prise en charge ?",
    options: [
      "Nutrition parentérale exclusive en réanimation pendant 2 semaines",
      "Hospitalisation courte ou ambulatoire, reprise progressive de l'alimentation orale, sans corticothérapie ni antibiotiques",
      "Dilatation endoscopique préventive au ballonnet",
      "Gastrostomie d'alimentation",
      "Pose de sonde nasogastrique systématique"
    ],
    correctAnswers: [1],
    explanation: "Le stade 1 de Zargar (simple érythème muqueux ou œdème) ne comporte aucun risque de sténose cicatricielle ni de perforation. Le patient peut reprendre l'alimentation orale rapidement sans traitement médicamenteux lourd.",
    clinicalPearl: "Zargar Stade 1 = Bénin. Reprise alimentaire, pas de risque de sténose, pas de traitement spécifique."
  },
  {
    id: 'q-caust-09',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la phase subaiguë (J8 à J30) après brûlure caustique de stade 2b ou 3, quelle complication cicatricielle commence à s'installer précocement ?",
    options: [
      "La formation d'une sténose œsophagienne ou antrale par rétraction fibreuse (sclérose jeune)",
      "Une perforation péritonéale d'emblée à distance",
      "Une hémochromatose aiguë",
      "Un diabète insipide",
      "Une atrophie splénique"
    ],
    correctAnswers: [0],
    explanation: "Dès la 2e-3e semaine (phase de bourgeonnement et de sclérose jeune), la synthèse de collagène désorganisé entraîne une rétraction progressive de la lumière, amorçant l'apparition d'une sténose œsophagienne ou antrale.",
    clinicalPearl: "Phase subaiguë (J8-J30) : Remplacement de l'escarre par du tissu de granulation -> Début de la sténose fibreuse rétractile."
  },
  {
    id: 'q-caust-10',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la phase séquellaire tardive (> J30), à quel délai le processus de rétraction fibreuse cicatricielle est-il considéré comme stabilisé et achevé ?",
    options: [
      "À 15 jours",
      "À 6 semaines",
      "Entre 6 et 12 mois après l'ingestion",
      "À 5 ans obligatoirement",
      "Il ne se stabilise jamais"
    ],
    correctAnswers: [2],
    explanation: "La fibrose cicatricielle évolue pendant plusieurs mois (rétraction maximale dans les 6 premiers mois) et est considérée comme fixée et achevée entre 6 et 12 mois. C'est à ce stade que les reconstructions chirurgicales définitives sont envisagées.",
    clinicalPearl: "Stabilisation de la sténose caustique : Le remodelage fibreux est achevé entre 6 et 12 mois après l'ingestion."
  },
  {
    id: 'q-caust-11',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est l'indication chirurgicale formelle en urgence à la phase aiguë (J0-J2) chez un patient ayant ingéré un caustique ?",
    options: [
      "Stade endoscopique 1 isolé sans symptôme",
      "Stade 2a chez un enfant",
      "Présence de signes de nécrose transmurale, de perforation (pneumopéritoine, médiastinite) ou de choc septique/défaillance multiviscérale",
      "Toute ingestion d'eau de Javel diluée",
      "Une simple douleur rétro-sternale calmée par le paracétamol"
    ],
    correctAnswers: [2],
    explanation: "L'œsogastrectomie d'urgence s'impose en cas de nécrose transmurale, de perforation établie (médiastinite, péritonite) ou de nécrose étendue de stade 3b au scanner/endoscopie avec défaillance hémodynamique.",
    clinicalPearl: "Indications chirurgicales d'urgence : Perforation prouvée, nécrose transmurale TDM (stade 3b sévère) ou choc septique."
  },
  {
    id: 'q-caust-12',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'utilisation des corticoïdes dans les brûlures caustiques de l'œsophage :",
    options: [
      "Ils sont formellement recommandés et réduisent de 80 % le risque de sténose",
      "Leur efficacité pour prévenir les sténoses n'a jamais été formellement démontrée par les essais randomisés et leur utilisation reste très controversée",
      "Ils doivent être donnés par voie intraveineuse à forte dose pendant 6 mois",
      "Ils sont obligatoires pour tous les stades 1",
      "Ils remplacent la nutrition entérale"
    ],
    correctAnswers: [1],
    explanation: "L'emploi des corticoïdes pour prévenir les sténoses caustiques est très controversé. Les méta-analyses n'ont pas montré de bénéfice significatif et ils peuvent masquer une perforation et favoriser la surinfection.",
    clinicalPearl: "Corticoïdes en aigu : Controversés ! Aucune preuve formelle de prévention des sténoses, risque de masquer une péritonite."
  },
  {
    id: 'q-caust-13',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La découverte d'un pneumopéritoine franc sous-diaphragmatique chez un patient ayant ingéré un caustique signe :",
    options: [
      "Une perforation œsophagienne cervicale",
      "Une perforation gastrique ou duodénale intrapéritonéale",
      "Une rupture trachéale pure",
      "Une pleurésie séro-fibrineuse",
      "Une réaction physiologique à l'acide"
    ],
    correctAnswers: [1],
    explanation: "Le pneumopéritoine traduit l'issue d'air libre intrapéritonéal secondaire à la perforation d'un organe creux digestif sous-diaphragmatique, au premier rang desquels l'estomac après ingestion d'acide fort.",
    clinicalPearl: "Pneumopéritoine = Perforation gastrique ou duodénale -> Laparotomie exploratrice en urgence."
  },
  {
    id: 'q-caust-14',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant une sténose caustique de l'œsophage très étendue, longue de plus de 9 cm ou multiple étagée, quelle est l'option de choix ?",
    options: [
      "Dilatations endoscopiques itératives forcenées",
      "Chirurgie de remplacement œsophagien (coloplastie ou gastroplastie d'interposition) d'emblée, car la dilatation est inefficace et à très haut risque de perforation",
      "Gastrostomie définitive sans jamais reconstruire",
      "Corticothérapie au long cours",
      "Pose de stent plastique non couvert"
    ],
    correctAnswers: [1],
    explanation: "Les sténoses longues (> 5 à 9 cm) ou complexes répondent très mal aux dilatations endoscopiques et ont un taux de perforation élevé lors des séances. Elles relèvent d'une chirurgie de reconstruction (coloplastie).",
    clinicalPearl: "Sténose longue (> 5-9 cm) ou étagée = Échec/danger des dilatations -> Indication de chirurgie de remplacement (coloplastie)."
  },
  {
    id: 'q-caust-15',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la complication vasculaire fistuleuse la plus redoutable à la phase subaiguë par son pronostic foudroyant ?",
    options: [
      "La fistule œso-aortique (responsable d'hémorragie cataclysmique foudroyante)",
      "La fistule œso-trachéale",
      "La fistule gastro-colique",
      "La fistule cervicale cutanée",
      "La thrombose de la veine porte"
    ],
    correctAnswers: [0],
    explanation: "La fistule œso-aortique résulte de l'érosion nécrotique transmurale de l'œsophage thoracique dans l'aorte descendante adjacente. Elle se manifeste par une hématémèse foudroyante immédiatement mortelle.",
    clinicalPearl: "Fistule œso-aortique = Complication redoutable foudroyante par érosion nécrotique dans l'aorte thoracique."
  },
  {
    id: 'q-caust-16',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le moment optimal recommandé pour débuter les séances de dilatation endoscopique d'une sténose caustique œsophagienne débutante est :",
    options: [
      "Dès le 2ème jour après l'ingestion",
      "Entre 3 et 4 semaines après l'ingestion accidentelle",
      "À 6 mois obligatoirement",
      "Uniquement après 2 ans",
      "La dilatation est toujours contre-indiquée"
    ],
    correctAnswers: [1],
    explanation: "On débute les dilatations à 3-4 semaines, lorsque la phase aiguë de détersion et de fragilité maximale (risque de perforation) est passée, mais avant que la fibrose rétractile ne soit totalement dense et infranchissable.",
    clinicalPearl: "Timing des dilatations endoscopiques : Débuter vers la 3e-4e semaine après l'ingestion."
  },
  {
    id: 'q-caust-17',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour la reconstruction de l'œsophage chez l'adulte jeune après destruction caustique étendue, le transplant de choix le plus souvent utilisé est :",
    options: [
      "L'estomac tubulisé en gastroplastie médiastinale",
      "La coloplastie rétrosternale ou médiastinale postérieure (transplant colique transverse ou iléo-colique)",
      "Le côlon descendant seul sans pédicule",
      "Une prothèse vasculaire en téflon",
      "Un segment de jéjunum libre non vascularisé"
    ],
    correctAnswers: [1],
    explanation: "La coloplastie (interposition d'un segment colique pédiculé, le plus souvent le côlon transverse ou gauche iso-péristaltique) est le procédé de choix, car l'estomac est souvent lui-même brûlé ou sténosé par le caustique.",
    clinicalPearl: "Reconstruction de l'œsophage brûlé : Coloplastie d'interposition rétrosternale (l'estomac étant souvent détruit)."
  },
  {
    id: 'q-caust-18',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant le risque de cancer épidermoïde de l'œsophage chez les survivants d'une sténose caustique :",
    options: [
      "Le risque est nul",
      "Le risque est multiplié par 1000 avec un délai moyen d'apparition très long, de l'ordre de 30 à 40 ans après l'ingestion",
      "Le cancer survient obligatoirement dans les 2 premières années",
      "Il s'agit toujours d'un adénocarcinome de l'antre",
      "Il justifie une œsophagectomie prophylactique chez tous les enfants"
    ],
    correctAnswers: [1],
    explanation: "La cicatrice caustique chronique est un état précancéreux majeur : le risque de carcinome épidermoïde de l'œsophage est très fortement augmenté (délai de latence moyen de 35 à 40 ans), justifiant une surveillance endoscopique tardive.",
    clinicalPearl: "Risque de cancer de l'œsophage : Carcinome épidermoïde sur cicatrice caustique après un délai de 30 à 40 ans !"
  },
  {
    id: 'q-caust-19',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le moyen le plus efficace pour réduire l'incidence dramatique des brûlures caustiques pédiatriques en Algérie ?",
    options: [
      "Le dépistage endoscopique annuel",
      "La prévention primaire : réglementation stricte du conditionnement des produits industriels (bouchons de sécurité enfants) et interdiction du déconditionnement dans des bouteilles alimentaires",
      "L'obligation de porter des gants en cuisine",
      "L'antibiothérapie préventive à la crèche",
      "L'interdiction de fabriquer des produits ménagers"
    ],
    correctAnswers: [1],
    explanation: "90 % des brûlures caustiques de l'enfant sont évitables par la prévention primaire : emballages sécurisés avec bouchons de sécurité et interdiction absolue de transvaser des produits caustiques dans des bouteilles d'eau ou de soda.",
    clinicalPearl: "Prévention primaire = Zéro déconditionnement de produits caustiques dans des bouteilles de soda/eau !"
  },
  {
    id: 'q-caust-20',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une femme de 35 ans ingère de la soude caustique. Endoscopie : stade 3a (nécrose localisée non circonférentielle). La patiente est stable, sans choc ni signe de perforation. Quelle est la prise en charge ?",
    options: [
      "Chirurgie d'œsophagectomie d'emblée obligatoire",
      "Surveillance armée en soins continus/réanimation, mise à jeun stricte, nutrition parentérale, et scanner thoraco-abdominal répété pour éliminer une nécrose transmurale",
      "Sortie immédiate avec ordonnance d'IPP",
      "Lavage d'estomac immédiat",
      "Alimentation solide d'emblée"
    ],
    correctAnswers: [1],
    explanation: "Le stade 3a isolé chez un patient stable sans nécrose transmurale au scanner permet une attitude conservatrice armée (jeûne, réanimation, TDM) avec surveillance rapprochée. La chirurgie est réservée au stade 3b étendu ou à la dégradation clinique.",
    clinicalPearl: "Stade 3a stable = Surveillance armée en réanimation + TDM + Nutrition parentérale (chirurgie si dégradation)."
  },
  {
    id: 'q-caust-21',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La phase de détersion (J3 à J8-J14) après brûlure caustique se caractérise par :",
    options: [
      "Une solidité mécanique maximale de la paroi œsophagienne",
      "L'élimination des tissus nécrosés laissant des parois extrêmement fragiles, amincies, avec un risque maximal de perforation secondaire",
      "La disparition définitive de toute douleur",
      "La guérison ad integrum systématique",
      "La fermeture spontanée des sténoses"
    ],
    correctAnswers: [1],
    explanation: "Pendant la phase de détersion, les escarres se détachent et la paroi est réduite à un tissu de granulation très fin et friable : c'est la période la plus dangereuse pour le risque de perforation secondaire.",
    clinicalPearl: "Phase de détersion (J3-J14) : Fragilité pariétale maximale -> Risque extrême de perforation secondaire !"
  },
  {
    id: 'q-caust-22',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un enfant ayant une sténose caustique complète de l'œsophage rendant toute dilatation impossible, quel geste de survie nutritionnelle est réalisé en première intention ?",
    options: [
      "Une résection pulmonaire droite",
      "Une gastrostomie ou jéjunostomie d'alimentation pour assurer la croissance avant la coloplastie différée vers l'âge de 4-5 ans",
      "Une perfusion intraveineuse continue pendant 10 ans",
      "Un pontage aortique",
      "Une dénervation vagale"
    ],
    correctAnswers: [1],
    explanation: "La gastrostomie ou jéjunostomie d'alimentation assure la nutrition entérale et la croissance de l'enfant. La coloplastie de reconstruction définitive sera réalisée à froid vers l'âge de 4 à 5 ans.",
    clinicalPearl: "Sténose infranchissable chez l'enfant : Gastrostomie d'alimentation immédiate -> Coloplastie différée vers 4-5 ans."
  },
  {
    id: 'q-caust-23',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la complication anastomotique à long terme la plus fréquente après une coloplastie rétrosternale de remplacement ?",
    options: [
      "La sténose anastomotique cervicale supérieure (survenant dans 10 à 25 % des cas)",
      "La nécrose gangréneuse tardive du greffon après 10 ans",
      "La thrombose aortique",
      "Le volvulus de l'œsophage cervical",
      "La pancréatite aiguë"
    ],
    correctAnswers: [0],
    explanation: "La sténose de l'anastomose œso-colique cervicale est la séquelle mécanique la plus fréquente (10 à 25 %), souvent favorisée par l'étroitesse du défilé cervico-thoracique. Elle se traite facilement par dilatations endoscopiques.",
    clinicalPearl: "Séquelle fréquente de coloplastie = Sténose de l'anastomose cervicale (10-25 %), accessible aux dilatations."
  },
  {
    id: 'q-caust-24',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'endoscopie œso-gastro-duodénale en phase aiguë (dans les 12 à 24 premières heures) est FORMELLEMENT contre-indiquée en présence de :",
    options: [
      "Dysphagie douloureuse",
      "Signes cliniques ou radiologiques évidents de perforation digestive (emphysème sous-cutané, pneumopéritoine, péritonite, choc hémodynamique)",
      "Ingestion accidentelle d'eau de Javel",
      "Salivation excessive",
      "Patient âgé de plus de 60 ans"
    ],
    correctAnswers: [1],
    explanation: "L'insufflation d'air et l'introduction de l'endoscope aggraveraient dramatiquement une perforation existante en créant un pneumothorax compressif ou une péritonite foudroyante. Les signes de perforation imposent le bloc d'emblée.",
    clinicalPearl: "Contre-indication formelle de l'endoscopie : Suspicion ou preuve de perforation (médiastinite, pneumopéritoine)."
  },
  {
    id: 'q-caust-25',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quels gestes de premiers secours sont FORMELLEMENT PROSCRITS dès les premières minutes suivant l'ingestion d'un produit caustique ?",
    options: [
      "Laver les yeux et le visage à l'eau claire si projection",
      "Faire vomir le patient, tenter de neutraliser le produit par un acide/base opposé (vinaigre, bicarbonate), poser une sonde gastrique à l'aveugle ou faire boire de grandes quantités d'eau/lait",
      "Appeler le centre anti-poison et le SAMU",
      "Garder le flacon du produit pour identification",
      "Mettre le patient en position assise s'il est conscient"
    ],
    correctAnswers: [1],
    explanation: "Les 4 gestes interdits majeurs sont : 1) NE PAS faire vomir (deuxième brûlure de l'œsophage et risque d'inhalation trachéale), 2) NE PAS neutraliser (réaction exothermique qui aggrave la nécrose thermique), 3) NE PAS faire boire, 4) NE PAS poser de sonde à l'aveugle.",
    clinicalPearl: "Les 4 INTERDITS ABSOLUS en premiers secours : Ne pas faire vomir, ne pas neutraliser, ne pas faire boire, ne pas poser de sonde !"
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (8 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : Enfant de 3 ans, ingestion de lessive
  {
    id: 'q-cas-caust-1-1',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (Enfant de 3 ans) - Ingestion accidentelle d'une gorgée de lessive liquide concentrée il y a 45 minutes. Salivation excessive, refus de déglutir, pas de détresse respiratoire. Quelle est la conduite initiale aux urgences pédiatriques ?",
    options: [
      "Faire vomir l'enfant en stimulant la luette",
      "Donner du vinaigre pour neutraliser",
      "Mise à jeun stricte, surveillance, bilan clinique et programmation d'une endoscopie œso-gastro-duodénale entre la 12e et la 24e heure sous anesthésie générale",
      "Laparotomie immédiate",
      "Lavement colique évacuateur"
    ],
    correctAnswers: [2],
    explanation: "L'attitude d'urgence repose sur la mise à jeun stricte, la surveillance et l'endoscopie précoce (entre H12 et H24) pour établir le bilan lésionnel précis selon la classification de Zargar.",
    clinicalPearl: "Conduite initiale : Mise à jeun stricte + Endoscopie entre H12 et H24 (jamais de vomissements provoqués !)."
  },
  {
    id: 'q-cas-caust-1-2',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - L'endoscopie montre des ulcérations superficielles linéaires éparses non circonférentielles de l'œsophage moyen sans fausses membranes (stade 2a de Zargar). Quelle est l'évolution prévisible ?",
    options: [
      "Sténose œsophagienne inéluctable dans 100 % des cas",
      "Guérison complète sans sténose dans la quasi-totalité des cas sous simple surveillance et reprise alimentaire progressive",
      "Perforation médiastinale dans 48 heures",
      "Indication d'une coloplastie précoce",
      "Nécrose gastrique totale"
    ],
    correctAnswers: [1],
    explanation: "Le stade 2a de Zargar (ulcères non circonférentiels) guérit spontanément sans cicatrice sténosante dans plus de 95 % des cas, ne nécessitant pas de traitement agressif.",
    clinicalPearl: "Zargar Stade 2a = Guérison sans sténose dans > 95 % des cas."
  },

  // Cas 2 : Femme de 42 ans, tentative d'autolyse par acide
  {
    id: 'q-cas-caust-2-1',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Femme de 42 ans, ingestion volontaire de 100 mL d'acide chlorhydrique) - Admise à H18 en état de choc (TA 85/50, tachycardie 125/min), douleur épigastrique paroxystique et défense abdominale marquée. Quel diagnostic suspectez-vous ?",
    options: [
      "Perforation gastrique avec péritonite caustique aiguë",
      "Pneumonie d'inhalation bénigne",
      "Sténose pylorique ancienne révélée",
      "Crise d'angoisse",
      "Gastro-entérite aiguë"
    ],
    correctAnswers: [0],
    explanation: "L'ingestion massive d'acide concentré provoque une nécrose de coagulation gastrique aiguë avec risque majeur de perforation gastrique dans la cavité péritonéale (état de choc, défense/contracture).",
    clinicalPearl: "Acide fort + Choc + Défense abdominale = Perforation gastrique caustique aiguë."
  },
  {
    id: 'q-cas-caust-2-2',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quel examen morphologique rapide est indiqué pour confirmer la perforation et guider le geste chirurgical ?",
    options: [
      "Scanner thoraco-abdominal avec injection iodée",
      "Transit œsophagien baryté opaque",
      "Fibroscopie souple poussée jusqu'au jéjunum",
      "Écho-endoscopie haute",
      "Scintigraphie gastrique"
    ],
    correctAnswers: [0],
    explanation: "La TDM thoraco-abdominale est l'examen de choix pour visualiser le pneumopéritoine, la nécrose de la paroi gastrique et l'état de l'œsophage thoracique en urgence avant la laparotomie.",
    clinicalPearl: "Suspicion de perforation = TDM thoraco-abdominale injectée en extrême urgence."
  },

  // Cas 3 : Homme de 35 ans, sténose séquellaire à 3 mois
  {
    id: 'q-cas-caust-3-1',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (Homme de 35 ans) - Ingestion de soude caustique il y a 3 mois, présente une dysphagie élective aux solides puis aux liquides avec perte de 8 kg. TOGD : sténose œsophagienne courte de 3,5 cm au tiers moyen. Quel traitement conservateur de première intention proposez-vous ?",
    options: [
      "Œsophagectomie avec coloplastie immédiate",
      "Dilatations endoscopiques progressives (au ballonnet ou à l'aide de bougies de Savary-Gilliard)",
      "Pose de prothèse métallique non couverte",
      "Alimentation entérale par sonde à vie",
      "Abstention complète"
    ],
    correctAnswers: [1],
    explanation: "Pour une sténose caustique courte (< 5 cm) et unique, la dilatation endoscopique progressive est le traitement conservateur de première ligne avec un bon taux de succès.",
    clinicalPearl: "Sténose courte (< 5 cm) = Dilatations endoscopiques de première intention."
  },
  {
    id: 'q-cas-caust-3-2',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quelle complication tardive à très long terme justifie une surveillance endoscopique prolongée chez ce patient porteur d'une cicatrice caustique ?",
    options: [
      "Le carcinome épidermoïde de l'œsophage (délai de 30 à 40 ans)",
      "Le lymphome de MALT",
      "La maladie cœliaque",
      "La diverticulose colique",
      "Le sarcome de Kaposi"
    ],
    correctAnswers: [0],
    explanation: "La muqueuse œsophagienne cicatricielle caustique présente un risque élevé de transformation en carcinome épidermoïde avec un temps de latence de plusieurs décennies (30-40 ans).",
    clinicalPearl: "Surveillance à très long terme : Risque de carcinome épidermoïde sur cicatrice caustique après 30-40 ans."
  },

  // Cas 4 : Homme de 50 ans, nécrose étendue au scanner
  {
    id: 'q-cas-caust-4-1',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Homme de 50 ans) - Ingestion de soude, endoscopie stade 3b (nécrose étendue). TDM : effacement de la graisse médiastinale, paroi œsophagienne non identifiable avec absence complète de rehaussement. Que traduit ce scanner ?",
    options: [
      "Une simple brûlure superficielle réversible",
      "Une nécrose transpariétale complète de l'œsophage imposant une œsophagectomie en urgence",
      "Une sténose déjà cicatrisée",
      "Un artéfact technique sans valeur",
      "Une diverticulite médiastinale"
    ],
    correctAnswers: [1],
    explanation: "La perte des critères de viabilité (absence de prise de contraste et effacement de la graisse) affirme la nécrose transmurale, ce qui constitue une indication opératoire d'exérèse (œsophagectomie) pour éviter la perforation septique.",
    clinicalPearl: "Scanner : Absence de rehaussement + disparition de la graisse = Nécrose transpariétale -> Œsophagectomie requise."
  },

  // Cas 5 : Enfant de 4 ans, sténose infranchissable
  {
    id: 'q-cas-caust-5-1',
    courseId: 'crs-gastro-lesions-caustiques',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Enfant de 4 ans) - Sténose œsophagienne serrée très longue de 10 cm, échec de multiples tentatives de dilatation. Quelle est la prise en charge chirurgicale de référence chez cet enfant ?",
    options: [
      "Continuer les dilatations hebdomadaires jusqu'à perforation",
      "Remplacement œsophagien par coloplastie rétrosternale programmée (vers l'âge de 4-5 ans) sous couvert d'une gastrostomie d'alimentation",
      "Pose de stent métallique nu définitif",
      "Abandon thérapeutique",
      "Radiothérapie anti-fibrosante"
    ],
    correctAnswers: [1],
    explanation: "L'échec des dilatations sur une sténose longue (> 5-9 cm) chez l'enfant est l'indication formelle d'une coloplastie de remplacement œsophagien, idéalement réalisée vers 4-5 ans pour permettre un développement optimal.",
    clinicalPearl: "Échec des dilatations sur sténose longue chez l'enfant = Coloplastie de remplacement vers 4-5 ans."
  }
];

export const LESIONS_CAUSTIQUES_RESOURCES: CourseResource[] = [
  {
    id: 'res-caust-mindmap',
    courseId: 'crs-gastro-lesions-caustiques',
    type: 'Resume',
    title: 'Fiche Synthèse : Lésions Caustiques du Tube Digestif Supérieur',
    contentMarkdown: `## Lésions Caustiques Digestives : L'Essentiel pour le Résidanat
*Module de Chirurgie & Gastro-entérologie – Faculté de Médecine d'Algérie*

### 1. Agents Caustiques & Mécanismes
- **Bases fortes (Soude, potasse, déboucheurs)** :
  - *Nécrose de liquéfaction* par saponification des lipides et dissolution des protéines.
  - Diffusion profonde dans la paroi.
  - **Atteinte œsophagienne prédominante** (*« Bite the esophagus »*).
- **Acides forts (Acide chlorhydrique, acide sulfurique/eau de batterie)** :
  - *Nécrose de coagulation* avec escarre superficielle protectrice.
  - Transit rapide dans l'œsophage mais stase antrale prolongée par spasme pylorique.
  - **Atteinte gastrique et antrale prédominante** (*« Bite the antrum »*).

### 2. Histoire Naturelle en 3 Phases
1. **Phase hyperaiguë (J1 à J3)** : Thromboses microvasculaires, œdème, nécrose aiguë, risque de perforation et de choc.
2. **Phase subaiguë / Détersion (J3 à J14-J30)** : Détachement de l'escarre nécrotique -> **Fragilité pariétale maximale** (risque majeur de perforation secondaire) et bourgeonnement rétractile (début des sténoses dès J21).
3. **Phase séquellaire (> J30 à 6-12 mois)** : Rétraction fibreuse dense fixée, sténoses chroniques de l'œsophage ou du pylore.

### 3. Classification Endoscopique de Zargar (Dans les 12-24h)
- **Stade 1** : Érythème et œdème muqueux isolés (bénin, zéro sténose).
- **Stade 2a** : Ulcérations linéaires superficielles non confluentes.
- **Stade 2b** : Ulcérations profondes confluentes et circonférentielles (haut risque de sténose).
- **Stade 3a** : Nécrose focale (îlots noirâtres/grisâtres).
- **Stade 3b** : Nécrose étendue transmurale (indication opératoire fréquente).
- **Stade 4** : Perforation digestive établie.

### 4. Premiers Secours : LES 4 INTERDITS ABSOLUS
- ❌ **NE PAS faire vomir** (double brûlure de l'œsophage et risque d'inhalation pulmonaire).
- ❌ **NE PAS neutraliser** par un acide/base opposé (réaction exothermique thermique destructrice).
- ❌ **NE PAS faire boire** (ni eau, ni lait).
- ❌ **NE PAS poser de sonde nasogastrique à l'aveugle**.

### 5. Prise en Charge Thérapeutique
- **Urgence vitale** : Si perforation ou nécrose transmurale TDM -> **Œsogastrectomie d'urgence**.
- **Sténoses courtes (< 5 cm)** : **Dilatations endoscopiques** débutées vers la 3e-4e semaine.
- **Sténoses longues (> 5-9 cm) ou échec** : **Coloplastie de remplacement** (à 6-12 mois chez l'adulte, vers 4-5 ans chez l'enfant).
- **À très long terme (30-40 ans)** : Risque de carcinome épidermoïde de l'œsophage.`,
    author: 'Faculté de Médecine d\'Algérie'
  },
  {
    id: 'res-caust-mnemo',
    courseId: 'crs-gastro-lesions-caustiques',
    type: 'Astuce',
    title: 'Mnémotechniques : Ingestion de Caustiques',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (Brûlures Caustiques)

1. **Bases vs Acides : « BITE & LICK »**
   - **B**ases = **B**ite l'œsophage (Liquéfaction profonde)
   - **A**cides = **B**ite l'estomac/antre (Coagulation antrale)

2. **Les 4 Interdits Majeurs : « ZÉRO V.N.B.S »**
   - Zéro **V**omissement provoqué
   - Zéro **N**eutralisation chimique
   - Zéro **B**oisson
   - Zéro **S**onde à l'aveugle

3. **Classification Zargar : « 1 Érythème, 2 Ulcère, 3 Nécrose, 4 Perforation »**
   - 2b = circonférentiel (sténose future)
   - 3b = nécrose étendue (chirurgie)

4. **Timing Clé :**
   - **H12 - H24** : Endoscopie précoce
   - **S3 - S4** : Début des dilatations endoscopiques
   - **M6 - M12** : Coloplastie définitive chez l'adulte (4-5 ans chez l'enfant)`,
    author: 'Faculté de Médecine d\'Algérie'
  }
];
