import { Question, CourseResource } from '../../types/medical';

export const KYSTE_HYDATIQUE_FOIE_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Kyste Hydatique du Foie (KHF) (Faculté de Médecine Algérie)
  // -------------------------------------------------------------
  {
    id: 'q-khf-01',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant le cycle parasitaire d'Echinococcus granulosus (agent du kyste hydatique), quelle proposition est exacte ?",
    options: [
      "L'homme est l'hôte définitif hébergeant le taenia adulte dans son intestin grêle",
      "Le chien (hôte définitif) élimine les œufs (embryophores) dans les selles, contaminant les herbivores ou l'homme (hôtes intermédiaires accidentels)",
      "La forme larvaire hydatique se développe exclusivement chez le mouton et jamais chez l'homme",
      "Le cycle biologique naturel nécessite obligatoirement l'homme pour sa pérennité",
      "La contamination humaine se fait exclusivement par piqûre d'insecte vecteur"
    ],
    correctAnswers: [1],
    explanation: "Le chien est l'hôte définitif qui héberge le taenia adulte et élimine les embryophores dans le milieu extérieur. Les herbivores (mouton) et accidentellement l'homme sont les hôtes intermédiaires ingérant les œufs par voie orale (eau, crudités, mains sales). L'homme est une impasse parasitaire.",
    clinicalPearl: "Cycle hydatique : Chien = Hôte définitif (taenia adulte) ; Herbivore / Homme = Hôtes intermédiaires (forme larvaire kystique)."
  },
  {
    id: 'q-khf-02',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La membrane la plus interne du kyste hydatique, vivante, fertile, sécrétant le liquide hydatique et responsable de la production des scolex et vésicules filles, est :",
    options: [
      "La cuticule anhiste externe",
      "L'adventice (périkyste) d'origine réactionnelle hépatique",
      "La membrane proligère (germinative)",
      "La séreuse glissonienne",
      "La couche conjonctive fibreuse"
    ],
    correctAnswers: [2],
    explanation: "La membrane proligère (couche germinative interne) est la seule partie vivante et fertile du parasite. Elle sécrète le liquide hydatique sous pression (« eau de roche ») et produit les scolex et vésicules filles. La cuticule est acellulaire et l'adventice appartient à l'hôte.",
    clinicalPearl: "Structure du kyste : Membrane proligère (interne, vivante, fertile) + Cuticule (moyenne, anhiste) + Périkyste/Adventice (tissu hépatique hôte)."
  },
  {
    id: 'q-khf-03',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En Algérie, pays de forte endémie hydatique, quelle donnée épidémiologique caractérise le mieux l'hydatidose hépatique ?",
    options: [
      "Elle atteint exclusivement les nourrissons de moins de 2 ans",
      "Il existe une prédominance masculine nette (sex-ratio 3H/1F)",
      "L'âge moyen de découverte est d'environ 40 ans, avec une prédominance féminine, et le foie constitue le premier filtre d'arrêt larvaire (50 à 70 % des localisations)",
      "La localisation hépatique est exceptionnelle (< 5 %)",
      "Le kyste hydatique ne reste jamais asymptomatique"
    ],
    correctAnswers: [2],
    explanation: "En Algérie, l'hydatidose est un fléau médico-chirurgical endémique. Le foie est l'organe le plus touché (50-70 %) car il constitue le premier filtre capillaire porte après absorption digestive. L'âge moyen est d'environ 35-40 ans avec prédominance féminine (tâches ménagères, contact chien/bétail).",
    clinicalPearl: "Épidémiologie KHF : Foie = 1er filtre (50-70 % des cas), âge moyen 40 ans, femme > homme en zone rurale/pastorale."
  },
  {
    id: 'q-khf-04',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification échographique de Gharbi (utilisée universellement en Algérie), un kyste de type III correspond à :",
    options: [
      "Une collection liquidienne pure anéchogène sans écho interne (kyste univésiculaire)",
      "Une collection liquidienne avec décollement de membrane (signe du serpent ou de la feuille de nénuphar)",
      "Un kyste multivésiculaire présentant un aspect cloisonné en « nid d'abeille » ou « roue de charrette »",
      "Une masse hétérogène solide pseudo-tumorale",
      "Un kyste complètement calcifié inactif avec cône d'ombre postérieur franc"
    ],
    correctAnswers: [2],
    explanation: "Classification de Gharbi : Type I = liquidien pur anéchogène ; Type II = décollement de membrane ; Type III = multivésiculaire cloisonné (nid d'abeille) ; Type IV = pseudo-tumoral hétérogène ; Type V = calcifié inactif.",
    clinicalPearl: "Classification de Gharbi : I (liquide pur) -> II (membrane décollée) -> III (nid d'abeille) -> IV (pseudo-tumoral) -> V (calcifié)."
  },
  {
    id: 'q-khf-05',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient porteur d'un KHF présentant la triade douleur de l'hypochondre droit, fièvre avec frissons et ictère rétentionnel, quelle complication kystique est survenue ?",
    options: [
      "Une rupture dans la grande cavité péritonéale",
      "Une rupture dans la veine cave inférieure",
      "Une fistule kysto-biliaire avec angiocholite aiguë par migration de membranes et débris hydatiques dans la voie biliaire principale",
      "Une fistulisation bronchique",
      "Une thrombose portale isolée"
    ],
    correctAnswers: [2],
    explanation: "La rupture ou fissuration dans les voies biliaires est la complication la plus fréquente (15-30 %). L'effraction kystique libère scolex, sable hydatique et membranes dans le cholédoque, provoquant une angiocholite ictérique grave.",
    clinicalPearl: "Complication biliaire majeure : Fistule kysto-biliaire -> Angiocholite aiguë (douleur, fièvre, ictère)."
  },
  {
    id: 'q-khf-06',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant le traitement médical antiparasitaire par Albendazole (10-12 mg/kg/j) dans le kyste hydatique :",
    options: [
      "Il permet une stérilisation complète du kyste en 48 heures",
      "Il est formellement contre-indiqué chez la femme enceinte au cours du premier trimestre en raison de son potentiel tératogène",
      "Il dispense définitivement de toute chirurgie quelle que soit la taille du kyste",
      "Il n'a aucun effet scolicide",
      "Il ne nécessite aucune surveillance du bilan hépatique"
    ],
    correctAnswers: [1],
    explanation: "L'Albendazole est formellement contre-indiqué au 1er trimestre de grossesse (effet embryotoxique/tératogène). Il est utilisé en cure de 28 jours (souvent 3 à 6 cycles) en péri-opératoire ou pour les kystes inopérables/disséminés, sous surveillance des transaminases et de la NFS.",
    clinicalPearl: "Albendazole (10-12 mg/kg/j) : Contre-indiqué au 1er trimestre de grossesse. Surveillance hépatique (transaminases) et NFS."
  },
  {
    id: 'q-khf-07',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La technique chirurgicale de résection du dôme saillant (RDS, méthode de Lagrot) est particulièrement indiquée pour :",
    options: [
      "Les kystes centraux profonds hilaires",
      "Les kystes jeunes, périphériques et superficiels à large développement sous-capsulaire",
      "Les kystes complètement calcifiés de type V",
      "Les formes avec cirrhose décompensée terminale",
      "Les kystes rompus dans le médiastin"
    ],
    correctAnswers: [1],
    explanation: "La résection du dôme saillant (intervention conservatrice historique de Lagrot) consiste à réséquer la partie extra-hépatique superficielle du périkyste après évacuation du contenu parasitaire. Elle est simple, rapide et adaptée aux kystes périphériques accessibles.",
    clinicalPearl: "Résection du dôme saillant (RDS) de Lagrot : Chirurgie conservatrice classique pour kystes superficiels périphériques."
  },
  {
    id: 'q-khf-08',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La suppuration bactérienne secondaire d'un kyste hydatique (pyokyste) est presque constamment précédée par :",
    options: [
      "Une perforation péritonéale libre",
      "Une fissuration ou communication dans les voies biliaires adjacentes permettant l'ensemencement bactérien",
      "Un choc anaphylactique",
      "Une calcification complète de la cuticule",
      "Un traitement par antiparasitaires"
    ],
    correctAnswers: [1],
    explanation: "Le kyste hydatique sain est initialement rigoureusement stérile. La suppuration (transformation en abcès hydatique) résulte toujours d'une micro-fissuration avec les canalicules biliaires adjacents par lesquels remontent les bactéries de la flore biliaire.",
    clinicalPearl: "Suppuration d'un KHF : Succède TOUJOURS à une fissuration biliaire méconnue (passage de germes biliaires dans le kyste)."
  },
  {
    id: 'q-khf-09',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour différencier à l'imagerie un kyste hydatique de type IV (pseudo-tumoral) d'un carcinome hépatocellulaire hypervascularisé :",
    options: [
      "L'ASP montre des signes pathognomoniques",
      "L'artériographie ou le scanner dynamique montre une masse avasculaire refoulant les vaisseaux dans le kyste, alors que la tumeur maligne présente une anarchie vasculaire avec néo-vaisseaux et wash-out",
      "La sérologie hydatique négative confirme formellement le cancer",
      "L'examen clinique suffit dans 100 % des cas",
      "L'élastographie est l'unique examen discriminant"
    ],
    correctAnswers: [1],
    explanation: "Le kyste de type IV (contenant un magma de débris gélatineux) peut simuler une masse tissulaire solide. Cependant, le kyste reste totalement avasculaire aux temps angiographiques (vaisseaux écartés en couronne), contrairement au cancer qui présente des néovaisseaux anarchiques.",
    clinicalPearl: "KHF type IV vs Cancer : Le kyste hydatique est strictement AVASCULAIRE (pas de rehaussement tumoral interne)."
  },
  {
    id: 'q-khf-10',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'agent scolicide peropératoire le plus utilisé et le plus sûr actuellement pour neutraliser le liquide hydatique et protéger les champs opératoires ?",
    options: [
      "Le formol pur à 10 % (responsable de cholangite sclérosante caustique gravissime)",
      "L'eau oxygénée (risque d'embolie gazeuse)",
      "Le sérum salé hypertonique (NaCl à 15-20 %)",
      "Le méthanol pur",
      "La povidone iodée non diluée en injection intra-biliaire"
    ],
    correctAnswers: [2],
    explanation: "Le sérum salé hypertonique (NaCl 15 à 20 %) est le scolicide de choix car il détruit efficacement les scolex par choc osmotique sans toxicité hépato-biliaire majeure (le formol étant formellement abandonné car il provoque des cholangites sclérosantes mortelles).",
    clinicalPearl: "Scolicide de référence = Sérum salé hypertonique (NaCl 15-20 %). Formol formellement proscrit !"
  },
  {
    id: 'q-khf-11',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le geste endoscopique interventionnel de choix en urgence pour lever l'obstacle et drainer la voie biliaire principale lors d'une fistule kysto-biliaire compliquée d'angiocholite est :",
    options: [
      "Une cholangiographie rétrograde endoscopique (CPRE) avec sphinctérotomie biliaire et extraction des membranes et débris hydatiques",
      "Une ponction percutanée transhépatique duodénale",
      "Une laparotomie immédiate sans stabilisation",
      "Une gastrostomie d'alimentation",
      "Une simple surveillance sous antalgiques"
    ],
    correctAnswers: [0],
    explanation: "La CPRE avec sphinctérotomie endoscopique permet d'extraire les membranes et le matériel hydatique enclavé dans le bas cholédoque, rétablissant le flux biliaire et traitant l'angiocholite septique en urgence avant le traitement chirurgical du kyste.",
    clinicalPearl: "Angiocholite sur migration hydatique = CPRE + sphinctérotomie d'urgence pour désobstruer la VBP."
  },
  {
    id: 'q-khf-12',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle mesure de prophylaxie de santé publique est fondamentale pour rompre le cycle zoonotique d'Echinococcus granulosus en Algérie ?",
    options: [
      "Vaccination obligatoire de tous les chats",
      "Dépistage systématique des enfants par scanner annuel",
      "Contrôle strict des abattoirs avec incinération des abats infestés (foies/poumons avec kystes), vermifugation des chiens au Praziquantel et élimination des chiens errants",
      "Interdiction définitive de la consommation de viande ovine",
      "Antibioprophylaxie de masse"
    ],
    correctAnswers: [2],
    explanation: "Rompre le cycle nécessite : 1) Éviter que les chiens ne consomment des viscères parasités (contrôle vétérinaire des abattoirs, incinération des kystes), 2) Dératisation et déparasitage régulier des chiens de garde/berger, 3) Hygiène des mains et lavage des légumes.",
    clinicalPearl: "Prophylaxie hydatique : Interdiction de donner des abats parasités aux chiens + Vermifugation canine + Hygiène alimentaire."
  },
  {
    id: 'q-khf-13',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La rupture intrapéritonéale d'un kyste hydatique du foie vivant provoque typiquement :",
    options: [
      "Une guérison spontanée par résorption",
      "Un syndrome péritonéal aigu brutal associé à des manifestations allergiques majeures (urticaire géante, bronchospasme, choc anaphylactique) et une hydatidose péritonéale secondaire",
      "Une anémie mégaloblastique",
      "Une hypertension artérielle rénovasculaire",
      "Un diabète insipide"
    ],
    correctAnswers: [1],
    explanation: "Le liquide hydatique contient des antigènes hautement immunogènes. Sa rupture dans la cavité péritonéale provoque un choc anaphylactique potentiellement mortel, une péritonite bilio-hydatique et un ensemencement péritonéal secondaire par les scolex (échinococcose péritonéale disséminée).",
    clinicalPearl: "Rupture intrapéritonéale d'un KHF = Choc anaphylactique + Péritonite aiguë + Échinococcose péritonéale secondaire."
  },
  {
    id: 'q-khf-14',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe échographique du « décollement de membrane » (image en nénuphar ou signe du serpent) correspond au stade :",
    options: [
      "Type I de Gharbi",
      "Type II de Gharbi",
      "Type III de Gharbi",
      "Type IV de Gharbi",
      "Type V de Gharbi"
    ],
    correctAnswers: [1],
    explanation: "Le type II de Gharbi est caractérisé par le décollement de la cuticule flottant au sein de la cavité kystique sous forme d'une fine bande ondulée (« signe du serpent » ou « nénuphar »), marquant le début de sénescence ou de fissuration du kyste.",
    clinicalPearl: "Gharbi Type II = Décollement de membrane parasitaire (signe du serpent / nénuphar)."
  },
  {
    id: 'q-khf-15',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient porteur d'un kyste hydatique du foie, quelle localisation extra-hépatique synchrone est la plus fréquemment retrouvée au bilan d'extension systématique ?",
    options: [
      "Le rein gauche",
      "La rate",
      "Le poumon (téléradiographie thoracique systématique)",
      "Le système nerveux central",
      "Le squelette axial"
    ],
    correctAnswers: [2],
    explanation: "Le poumon est le deuxième organe le plus touché (20 à 30 % des cas). Une radiographie du thorax (ou TDM) est systématiquement prescrite devant tout kyste hydatique hépatique pour dépister une localisation pulmonaire associée.",
    clinicalPearl: "Bilan systématique d'un KHF : Radiographie pulmonaire obligatoire à la recherche d'un kyste pulmonaire associé (20-30 %)."
  },
  {
    id: 'q-khf-16',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La fistulisation cutanée externe spontanée d'un kyste hydatique du foie se manifeste typiquement par :",
    options: [
      "Un nodule cutané sec télangiectasique",
      "Un orifice fistuleux laissant sourdre du pus, de la bile et des fragments de membranes hydatiques caractéristiques",
      "Une zone d'alopécie circonscrite",
      "Une hématidrose",
      "Un érysipèle récidivant"
    ],
    correctAnswers: [1],
    explanation: "Complication évolutive rare des gros kystes du dôme ou de la face antérieure négligés : après adhérence à la paroi abdominale, le kyste s'extériorise à la peau avec écoulement purulent, biliaire et émission de débris de membranes.",
    clinicalPearl: "Fistule cutanée spontanée : Écoulement purulo-biliaire mêlé de membranes hydatiques."
  },
  {
    id: 'q-khf-17',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle supériorité maîtresse le scanner abdominal présente-t-il par rapport à l'échographie dans le bilan du KHF ?",
    options: [
      "Il montre les scolex vivants en mouvement",
      "Il détecte avec une sensibilité bien supérieure les fines calcifications du périkyste et précise la topographie exacte par rapport aux vaisseaux sus-hépatiques et à la veine cave",
      "Il remplace la sérologie hydatique",
      "Il permet d'injecter des scolicides directement",
      "Il n'utilise aucun rayon"
    ],
    correctAnswers: [1],
    explanation: "Le scanner avec injection offre une cartographie anatomique précise des rapports vasculaires (veines sus-hépatiques, tronc porte, veine cave inférieure) capitale pour la planification chirurgicale, et détecte parfaitement les calcifications de la paroi.",
    clinicalPearl: "TDM hépatique : Rôle majeur pour les rapports vasculaires (veines sus-hépatiques, VCI) et les kystes du dôme."
  },
  {
    id: 'q-khf-18',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La technique percutanée PAIR (Ponction - Aspiration - Injection de scolicide - Réaspiration) est formellement contre-indiquée en cas de :",
    options: [
      "Kyste liquidien uniloculaire de type I de moins de 5 cm",
      "Suspicion de communication ou fistule kysto-biliaire (risque de cholangite caustique sévère liée au scolicide)",
      "Patient âgé inopérable",
      "Kyste du lobe gauche superficiel",
      "Kyste chez un sujet jeune"
    ],
    correctAnswers: [1],
    explanation: "La méthode PAIR est formellement contre-indiquée s'il existe une communication kysto-biliaire (le scolicide injecté passerait dans l'arbre biliaire, provoquant une destruction des voies biliaires), ainsi que pour les kystes solides de type IV ou calcifiés de type V.",
    clinicalPearl: "Contre-indication absolue du PAIR : Fistule kysto-biliaire (risque létal de cholangite sclérosante caustique par le scolicide)."
  },
  {
    id: 'q-khf-19',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En sérologie hydatique, quelle combinaison biologique offre le meilleur rendement diagnostique (sensibilité > 90 % et spécificité optimale) ?",
    options: [
      "Test ELISA seul sans confirmation",
      "Association d'un test quantitatif sensible (ELISA ou hémagglutination indirecte) et d'un test de confirmation qualitatif spécifique (Western Blot mettant en évidence l'arc 5 caractéristique)",
      "Vitesse de sédimentation seule",
      "Intradermo-réaction de Casoni exclusive",
      "Électrophorèse des protéines sériques simple"
    ],
    correctAnswers: [1],
    explanation: "La stratégie sérologique recommandée combine une technique de dépistage sensible (ELISA) et une technique de confirmation très spécifique (Western Blot ou immunoélectrophorèse mettant en évidence l'arc 5 de Capron spécifique d'E. granulosus).",
    clinicalPearl: "Sérologie hydatique de référence : ELISA (dépistage sensible) + Western Blot / Arc 5 (confirmation spécifique)."
  },
  {
    id: 'q-khf-20',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe pathognomonique de la « vomique hydatique » (expectoration brutale d'un liquide eau de roche salé contenant des peaux de raisin/membranes) traduit :",
    options: [
      "Une perforation dans le duodénum",
      "Une rupture ou fistule d'un kyste hydatique dans les bronches (soit kyste pulmonaire, soit kyste du dôme hépatique ayant traversé le diaphragme)",
      "Une régurgitation œsophagienne",
      "Une gastrite érosive aiguë",
      "Une hémoptysie pure"
    ],
    correctAnswers: [1],
    explanation: "La vomique hydatique est l'expulsion par la bouche lors d'un effort de toux d'un liquide salé avec membranes blanchâtres (décrites comme des peaux de raisin). Elle signe l'évacuation d'un kyste dans l'arbre trachéo-bronchique.",
    clinicalPearl: "Vomique hydatique : Expectoration d'un liquide clair salé avec « peaux de raisin » = Fistule kysto-bronchique."
  },
  {
    id: 'q-khf-21',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'épiplooplastie (procédé de comblement de la cavité résiduelle après kystectomie) consiste à :",
    options: [
      "Injecter de la colle biologique synthétique",
      "Mobiliser une frange vascularisée du grand épiploon (omentum) et la fixer à l'intérieur de la cavité résiduelle du périkyste",
      "Réaliser une fermeture cutanée sans drainage",
      "Remplacer le foie par l'épiploon",
      "Drainer la cavité par deux drains aspiratifs purs"
    ],
    correctAnswers: [1],
    explanation: "L'épiplooplastie consiste à combler le défect résiduel du périkyste par une collerette de grand épiploon pédiculé. Cela favorise la résorption des suintements, prévient les abcès résiduels sous-phréniques et oblitère l'espace mort.",
    clinicalPearl: "Épiplooplastie : Comblement de la cavité résiduelle du kyste par le grand épiploon vascularisé pour éviter les collections."
  },
  {
    id: 'q-khf-22',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un volumineux kyste hydatique du dôme hépatique (segment VII-VIII) comprimant la veine cave inférieure et les veines sus-hépatiques peut provoquer :",
    options: [
      "Un syndrome de Budd-Chiari secondaire (hépatomégalie douloureuse, ascite et œdèmes des membres inférieurs)",
      "Un syndrome de Zollinger-Ellison",
      "Une nécrose duodénale immédiate",
      "Une alcalose respiratoire pure",
      "Une perforation gastrique obligatoire"
    ],
    correctAnswers: [0],
    explanation: "La compression extrinsèque majeure des troncs veineux sus-hépatiques et de la VCI par un kyste géant du dôme reproduit les signes d'un obstacle au retour veineux hépatique : syndrome de Budd-Chiari secondaire avec ascite, hépatomégalie et circulation veineuse collatérale.",
    clinicalPearl: "Complication vasculaire : Compression des veines sus-hépatiques/VCI -> Syndrome de Budd-Chiari secondaire."
  },
  {
    id: 'q-khf-23',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant un kyste hydatique complètement calcifié de type V de Gharbi, de taille < 5 cm, totalement asymptomatique avec sérologie hydatique négative :",
    options: [
      "Une hépatectomie réglée en urgence s'impose",
      "Une ponction percutanée PAIR est obligatoire",
      "L'abstention thérapeutique avec simple surveillance annuelle échographique est la règle (kyste mort inactif)",
      "Un traitement par chimiothérapie est indiqué",
      "Une résection du dôme saillant doit être réalisée sous 48h"
    ],
    correctAnswers: [2],
    explanation: "Un kyste entièrement calcifié (type V) avec sérologie négative correspond à un parasite mort et momifié. En l'absence de compression ou de symptôme, l'abstention thérapeutique surveillée est la règle consensuelle.",
    clinicalPearl: "Gharbi Type V calcifié < 5 cm asymptomatique = Kyste inactif mort -> Abstention thérapeutique et surveillance."
  },
  {
    id: 'q-khf-24',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors du traitement chirurgical d'un kyste hydatique communiquant largement avec les voies biliaires principales, la mise en place d'un drain de Kehr dans le cholédoque sert à :",
    options: [
      "Injecter de l'Albendazole dans le foie",
      "Assurer une décompression biliaire externe temporaire, guider la cicatrisation de la brèche et permettre un contrôle radiologique par cholangiographie postopératoire",
      "Remplacer l'ablation du kyste",
      "Nourrir le patient par voie biliaire",
      "Prévenir l'apparition de calculs rénaux"
    ],
    correctAnswers: [1],
    explanation: "Le drain de Kehr (drain en T placé dans le cholédoque après cholédocotomie) assure la décompression biliaire externe à basse pression, prévient l'hyperpression sur les sutures hépatiques, et permet le contrôle de la vacuité biliaire par cholangiographie avant son ablation à J15.",
    clinicalPearl: "Drain de Kehr : Décompression biliaire temporaire + Contrôle radiologique de la vacuité du cholédoque."
  },
  {
    id: 'q-khf-25',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En cas de découverte conjointe d'un kyste hydatique du foie ET d'un kyste hydatique du poumon chez le même patient, quelle est la priorité opératoire classique ?",
    options: [
      "Traiter d'abord le foie car il est plus gros",
      "Traiter en priorité le kyste pulmonaire (en raison du risque de rupture bronchique aiguë per-anesthésique sous ventilation mécanique), ou réaliser un geste chirurgical combiné en un temps",
      "Ne traiter aucun kyste et prescrire des corticoïdes",
      "Attendre 5 ans",
      "Réaliser une radiothérapie pulmonaire première"
    ],
    correctAnswers: [1],
    explanation: "La priorité classique va au kyste pulmonaire : sous anesthésie générale et intubation avec pression positive, le kyste pulmonaire risque de se rompre brutalement dans l'arbre trachéo-bronchique (inondation bronchique asphyxique). Si possible, une chirurgie combinée (thoraco-phréno-laparotomie) est réalisée.",
    clinicalPearl: "Kyste foie + poumon : Priorité au POUMON pour éviter la rupture et l'asphyxie sous ventilation mécanique peropératoire !"
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (8 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : Femme de 38 ans, découverte fortuite
  {
    id: 'q-cas-khf-1-1',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (Femme de 38 ans, milieu rural) - Échographie systématique : formation liquidienne arrondie pure, anéchogène de 6 cm au niveau du segment VII, paroi fine sans cloison ni décollement, sérologie hydatique ELISA positive. Quel est le stade de Gharbi de cette lésion ?",
    options: [
      "Type I (kyste liquidien pur uniloculaire)",
      "Type II",
      "Type III",
      "Type IV",
      "Type V"
    ],
    correctAnswers: [0],
    explanation: "Collection liquidienne anéchogène pure sans écho interne, sans cloisonnement ni décollement de membrane = Stade I de Gharbi.",
    clinicalPearl: "Gharbi I = Kyste liquidien pur anéchogène uniloculaire."
  },
  {
    id: 'q-cas-khf-1-2',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quelle modalité chirurgicale conservatrice est la plus adaptée pour ce kyste superficiel accessible du segment VII chez cette jeune femme ?",
    options: [
      "Abstention complète sans traitement",
      "Résection du dôme saillant (RDS) ou périkystectomie partielle sous protection scolicide par sérum salé hypertonique",
      "Hépatectomie droite élargie",
      "Ponction évacuatrice à l'aveugle sans hospitalisation",
      "Albendazole seul sans chirurgie"
    ],
    correctAnswers: [1],
    explanation: "Pour un kyste jeune, périphérique et accessible, une technique chirurgicale conservatrice (résection du dôme saillant selon Lagrot ou périkystectomie partielle) avec stérilisation par sérum salé hypertonique est la méthode de choix.",
    clinicalPearl: "Kyste type I périphérique accessible = Résection du dôme saillant (RDS) conservatrice."
  },

  // Cas 2 : Homme de 55 ans, angiocholite sur fistule
  {
    id: 'q-cas-khf-2-1',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Homme de 55 ans, KHF type III connu non opéré) - Admis pour fièvre à 39,2 °C avec frissons, douleur intense de l'hypochondre droit et ictère conjonctival franc avec urines foncées. Quel diagnostic de complication devez-vous poser ?",
    options: [
      "Suppuration intrakystique fermée sans communication",
      "Fistule kysto-biliaire compliquée d'angiocholite aiguë obstructive par migration de matériel hydatique",
      "Rupture intrapéritonéale avec péritonite aiguë",
      "Pyélonéphrite aiguë",
      "Choc anaphylactique pur"
    ],
    correctAnswers: [1],
    explanation: "La triade de Charcot/Villard (douleur HCD + fièvre avec frissons + ictère) chez un porteur de kyste hydatique signe une angiocholite aiguë secondaire à l'ouverture du kyste dans les voies biliaires.",
    clinicalPearl: "Triade douleur-fièvre-ictère chez un patient avec KHF = Fistule kysto-biliaire avec angiocholite."
  },
  {
    id: 'q-cas-khf-2-2',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quel examen endoscopique interventionnel en urgence permet de lever l'obstacle biliaire et d'extraire les membranes avant la chirurgie du foie ?",
    options: [
      "Une CPRE (cholangiographie rétrograde endoscopique) avec sphinctérotomie biliaire et extraction des débris au ballon/panier",
      "Une gastroscopie simple avec biopsie duodénale",
      "Une coloscopie totale",
      "Une écho-endoscopie sans geste",
      "Une cœlioscopie d'emblée sans réanimation"
    ],
    correctAnswers: [0],
    explanation: "La sphinctérotomie endoscopique par CPRE décomprime immédiatement l'arbre biliaire septique, extrait les membranes bloquées dans le sphincter d'Oddi et permet de refroidir l'angiocholite.",
    clinicalPearl: "Traitement de l'angiocholite hydatique = CPRE + sphinctérotomie biliaire en urgence."
  },

  // Cas 3 : Patient de 45 ans, pyokyste
  {
    id: 'q-cas-khf-3-1',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (Homme de 45 ans) - Douleur de l'HCD, fièvre hectique à 39 °C, gros foie douloureux. Échographie : kyste hydatique volumineux de 12 cm au lobe droit avec débris hétérogènes échogènes mobiles. Quel mécanisme préside obligatoirement à cette suppuration ?",
    options: [
      "Une infection hématogène par Salmonella",
      "Une fissuration préalable microscopique dans les canalicules biliaires adjacents permettant l'ensemencement bactérien du kyste",
      "Une cancérisation aiguë",
      "Une nécrose aseptique",
      "Un traumatisme externe sans plaie"
    ],
    correctAnswers: [1],
    explanation: "La suppuration d'un KHF (pyokyste) est la conséquence directe d'une fissuration biliaire méconnue qui rompt la stérilité du kyste et permet la pullulation bactérienne des germes biliaires.",
    clinicalPearl: "Pyokyste = Fissuration biliaire préalable ayant inoculé les bactéries dans le liquide hydatique."
  },
  {
    id: 'q-cas-khf-3-2',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quelle est la prise en charge thérapeutique de ce volumineux kyste suppuré ?",
    options: [
      "Antibiothérapie exclusive sans drainage",
      "Évacuation chirurgicale complète du matériel purulent, périkystectomie ou RDS adaptée sous couverture d'antibiotiques parentéraux, et traitement d'une éventuelle fistule biliaire",
      "Greffe hépatique",
      "Ponction évacuatrice à l'aveugle",
      "Albendazole en monothérapie"
    ],
    correctAnswers: [1],
    explanation: "Le kyste suppuré doit être évacué chirurgicalement comme un abcès hépatique, avec résection du périkyste accessible, traitement de la communication biliaire et antibiothérapie parentérale active sur les entérobactéries et anaérobies.",
    clinicalPearl: "Traitement du pyokyste : Évacuation chirurgicale + Antibiothérapie large spectre + Traitement de la fistule biliaire."
  },

  // Cas 4 : Homme de 32 ans, vomique hydatique
  {
    id: 'q-cas-khf-4-1',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Homme de 32 ans) - Douleur basi-thoracique droite avec toux quinteuse suivie de l'expectoration brutale d'un liquide eau de roche salé contenant des débris gélatineux blanchâtres (« peaux de raisin »). Quel est le diagnostic lésionnel ?",
    options: [
      "Vomique hydatique traduisant la rupture d'un kyste hydatique dans les bronches (fistule bilio-bronchique ou kyste du dôme hépatique transdiaphragmatique)",
      "Abcès amibien pulmonaire pur",
      "Tuberculose cavitaire pulmonaire",
      "Cancer bronchique nécrosé",
      "Pleurésie purulente encapsulée"
    ],
    correctAnswers: [0],
    explanation: "La vomique hydatique avec expulsion de vésicules filles et de liquide eau de roche salé est pathognomonique de l'ouverture d'un kyste dans l'arbre bronchique.",
    clinicalPearl: "Vomique d'eau de roche avec membranes = Rupture kystique intra-bronchique pathognomonique."
  },

  // Cas 5 : Femme de 60 ans, kyste calcifié
  {
    id: 'q-cas-khf-5-1',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Femme de 60 ans) - Découverte fortuite d'une formation hépatique de 3,5 cm du segment V totalement calcifiée (coque opaque à l'ASP et TDM, cône d'ombre postérieur franc sans liquide à l'échographie, type V de Gharbi). Asymptomatique, sérologie négative. Quelle conduite recommandez-vous ?",
    options: [
      "Laparotomie en urgence pour hépatectomie réglée",
      "Ponction percutanée PAIR",
      "Abstention thérapeutique et simple surveillance échographique annuelle (kyste involué inactif)",
      "Traitement par Albendazole pendant 12 mois",
      "Radiothérapie hépatique"
    ],
    correctAnswers: [2],
    explanation: "Un kyste de type V calcifié de petite taille chez une patiente asymptomatique correspond à un kyste mort guéri spontanément. Aucune chirurgie n'est justifiée : l'abstention surveillée est la règle.",
    clinicalPearl: "KHF Type V calcifié < 5 cm asymptomatique = Kyste inactif momifié -> Abstention thérapeutique."
  }
];

export const KYSTE_HYDATIQUE_FOIE_RESOURCES: CourseResource[] = [
  {
    id: 'res-khf-mindmap',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    type: 'Resume',
    title: 'Fiche Synthèse : Kyste Hydatique du Foie (KHF)',
    contentMarkdown: `## Kyste Hydatique du Foie (KHF) : L'Essentiel pour le Résidanat
*Module de Gastro-entérologie – Faculté de Médecine d'Algérie*

### 1. Parasitologie & Épidémiologie
- **Agent** : *Echinococcus granulosus* (forme larvaire du taenia échinocoque).
- **Cycle** :
  - *Hôte définitif* : Chien (taenia adulte dans l'intestin).
  - *Hôtes intermédiaires* : Herbivores (mouton +++) et **Homme accidentel** (impasse parasitaire).
  - *Contamination humaine* : Voie digestive (mains sales, eau souillée, contact direct avec les chiens).
- **Filtration hépatique** : Le foie est le 1er filtre capillaire (50 à 70 % des kystes), suivi du poumon (20 à 30 %).

### 2. Anatomie du Kyste
- **Périkyste (Adventice)** : Tissu fibreux de réaction de l'hôte hébergeant les vaisseaux et les canalicules biliaires comprimés.
- **Cuticule** : Membrane moyenne acellulaire anhiste chitineuse, élastique, perméable aux nutriments.
- **Membrane proligère (Germinative)** : Couche interne vivante et fertile, produit les scolex, vésicules filles et le liquide hydatique sous tension (« eau de roche »).

### 3. Classification Échographique de Gharbi (Cruciale)
- **Type I** : Collection liquidienne pure, anéchogène, uniloculaire (actif).
- **Type II** : Décollement de membrane (signe du serpent / nénuphar) (transitionnel).
- **Type III** : Kyste multivésiculaire cloisonné (« nid d'abeille » ou « roue de charrette ») (actif).
- **Type IV** : Masse hétérogène solide pseudo-tumorale (inactif/dégénératif).
- **Type V** : Kyste complètement calcifié (coque d'œuf) avec cône d'ombre (inactif mort).

### 4. Complications Évolutives
- **Rupture dans les voies biliaires (15-30 %)** : Fistule kysto-biliaire -> **Angiocholite aiguë ictérique** (urgence CPRE).
- **Suppuration (Pyokyste)** : Toujours consécutive à une fissuration biliaire -> Tableau d'abcès du foie.
- **Rupture intrapéritonéale** : Choc anaphylactique + Péritonite aiguë + Échinococcose péritonéale secondaire.
- **Rupture intra-thoracique** : Vomique hydatique (expectoration d'eau de roche et membranes).

### 5. Principes Thérapeutiques
- **Chirurgie (Standard de référence)** :
  - *Méthodes conservatrices* : Résection du dôme saillant (RDS de Lagrot), périkystectomie partielle (kystes superficiels).
  - *Méthodes radicales* : Périkystectomie totale, hépatectomie réglée (kystes profonds ou compliqués).
  - *Protection scolicide* : **Sérum salé hypertonique (NaCl 15-20 %)** impératif (formol formellement proscrit).
- **Traitement percutané (PAIR)** : Ponction-Aspiration-Injection (NaCl hypertonique)-Réaspiration. Contre-indiqué si fistule biliaire !
- **Traitement médical (Albendazole 10-12 mg/kg/j)** : En péri-opératoire ou pour kystes inopérables/disséminés. Contre-indiqué au 1er trimestre de grossesse.`,
    author: 'Faculté de Médecine d\'Algérie'
  },
  {
    id: 'res-khf-mnemo',
    courseId: 'crs-gastro-kyste-hydatique-foie',
    type: 'Astuce',
    title: 'Mnémotechniques : Kyste Hydatique du Foie',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (KHF - Algérie)

1. **Classification de Gharbi : « U.D.N.P.C »**
   - **Type I** : **U**nivésiculaire liquidien pur
   - **Type II** : **D**écollement de membrane (nénuphar)
   - **Type III** : **N**id d'abeille (multivésiculaire)
   - **Type IV** : **P**seudo-tumoral hétérogène
   - **Type V** : **C**alcifié (inactif mort)

2. **Membranes de dehors en dedans : « A.C.P »**
   - **A**dventice (périkyste de l'hôte)
   - **C**uticule (moyenne anhiste)
   - **P**roligère (interne vivante fertile)

3. **Scolicide : « Hyper-Sel, Zéro Formol »**
   - NaCl 20 % pour stériliser
   - Formol interdit (cholangite sclérosante mortelle)

4. **Kyste Foie + Poumon : « Poumon d'Abord »**
   - Toujours opérer le poumon en priorité pour éviter la rupture et l'asphyxie sous respirateur !`,
    author: 'Faculté de Médecine d\'Algérie'
  }
];
