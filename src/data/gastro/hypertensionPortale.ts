import { Question, CourseResource } from '../../types/medical';

export const HYPERTENSION_PORTALE_QUESTIONS: Question[] = [
  {
    "id": "q-htp-01",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Comment est définie l'hypertension portale (HTP) sur le plan hémodynamique hépatique ?",
    "options": [
      "Gradient de pression veineuse hépatique (GPVH = pression bloquée - pression libre) > 5 mmHg",
      "Pression artérielle systolique > 140 mmHg",
      "Pression veineuse centrale > 20 mmHg",
      "Pression capillaire pulmonaire > 18 mmHg",
      "Gradient de pression veineuse hépatique < 2 mmHg"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hypertension portale est définie par un gradient de pression veineuse hépatique (GPVH) supérieur à 5 mmHg. Au-delà de 10 mmHg, elle est qualifiée de cliniquement significative.",
    "clinicalPearl": "HTP hémodynamique : GPVH > 5 mmHg. HTP cliniquement significative : GPVH >= 10 mmHg."
  },
  {
    "id": "q-htp-02",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la cause étiologique de très loin la plus fréquente d'hypertension portale chez l'adulte dans les pays développés et au Maghreb ?",
    "options": [
      "La thrombose de la veine porte (pilephlébite)",
      "La cirrhose hépatique (obstacle intra-hépatique sinusoïdal)",
      "Le syndrome de Budd-Chiari",
      "La bilharziose hépatique",
      "La compression tumorale extrinsèque"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La cirrhose hépatique représente environ 90% des causes d'hypertension portale chez l'adulte, réalisant un bloc intra-hépatique à prédominance sinusoïdale.",
    "clinicalPearl": "Cirrhose hépatique = 90% des causes d'HTP (bloc intra-hépatique sinusoïdal)."
  },
  {
    "id": "q-htp-03",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la classification topographique des obstacles de l'hypertension portale, à quel groupe appartient la thrombose de la veine porte (pyléthrombose) ?",
    "options": [
      "Bloc sous-hépatique (infra-hépatique ou pré-hépatique)",
      "Bloc intra-hépatique sinusoïdal",
      "Bloc intra-hépatique post-sinusoïdal",
      "Bloc sus-hépatique (post-hépatique)",
      "Bloc artériel hépatique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La thrombose portale réalise un obstacle pré-hépatique (ou sous-hépatique). Le parenchyme hépatique et le gradient de pression sus-hépatique restent normaux.",
    "clinicalPearl": "Thrombose porte = Bloc sous-hépatique (pré-sinusoïdal extra-hépatique)."
  },
  {
    "id": "q-htp-04",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "À quel groupe anatomique de bloc d'hypertension portale correspond le syndrome de Budd-Chiari (thrombose des veines sus-hépatiques) ?",
    "options": [
      "Bloc sous-hépatique",
      "Bloc intra-hépatique pré-sinusoïdal",
      "Bloc sus-hépatique (post-hépatique)",
      "Bloc artériel splénique",
      "Bloc biliaire intrahépatique"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le syndrome de Budd-Chiari est l'obstruction du drainage veineux hépatique (veines sus-hépatiques ou segment terminal de la veine cave inférieure), constituant un bloc sus-hépatique.",
    "clinicalPearl": "Syndrome de Budd-Chiari = Thrombose des veines sus-hépatiques = Bloc sus-hépatique (post-hépatique)."
  },
  {
    "id": "q-htp-05",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel parasite endémique des zones tropicales provoque typiquement une hypertension portale par bloc intra-hépatique pré-sinusoïdal (fibrose péri-portale de Symmers) ?",
    "options": [
      "Taenia saginata",
      "Schistosoma mansoni (bilharziose hépatosplénique)",
      "Entamoeba histolytica",
      "Ascaris lumbricoides",
      "Plasmodium falciparum"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Schistosoma mansoni induit une réaction granulomateuse péri-portale extensive ('fibrose en tuyau de pipe' de Symmers) responsable d'une HTP pré-sinusoïdale sévère avec fonction hépatocellulaire longtemps préservée.",
    "clinicalPearl": "Bilharziose hépatique (Schistosoma mansoni) = Bloc intra-hépatique pré-sinusoïdal (fibrose de Symmers)."
  },
  {
    "id": "q-htp-06",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la triade clinique sémiologique classique de l'hypertension portale ?",
    "options": [
      "Ascite, Circulation veineuse collatérale abdominale porto-cave, Splénomégalie",
      "Ictère, angiomes stellaires, astérixis",
      "Hépatomégalie douloureuse, reflux hépato-jugulaire, œdèmes",
      "Dysphagie, vomissements, méléna",
      "Fièvre, frissons, sueurs"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La triade clinique cardinale de l'hypertension portale associe : splénomégalie (avec hypersplénisme), circulation veineuse collatérale sous-cutanée abdominale, et ascite.",
    "clinicalPearl": "Triade sémiologique d'HTP = Splénomégalie + Circulation veineuse collatérale + Ascite."
  },
  {
    "id": "q-htp-07",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel aspect de circulation veineuse collatérale abdominale sous-ombilicale à flux centrifuge péri-ombilical est pathognomonique de la reperméabilisation de la veine ombilicale ?",
    "options": [
      "Aspect en tête de Méduse (syndrome de Cruveilhier-Baumgarten)",
      "Livedo racemosa",
      "Purpura vasculaire en chaussettes",
      "Circulation cave-cave latéro-abdominale ascendante",
      "Signe du godet abdominal"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le syndrome de Cruveilhier-Baumgarten associe une dilatation péri-ombilicale centrifuge en 'tête de Méduse' avec souffle et thrill à l'auscultation péri-ombilicale, par reperméabilisation de la veine ombilicale dans le ligament rond.",
    "clinicalPearl": "Tête de Méduse péri-ombilicale = Reperméabilisation de la veine ombilicale (Cruveilhier-Baumgarten)."
  },
  {
    "id": "q-htp-08",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Par quelle veine collatérale porto-systémique se développent principalement les varices œsophagiennes ?",
    "options": [
      "La veine mésentérique inférieure",
      "La veine coronaire stomachique (veine gastrique gauche) communicant avec les veines œsophagiennes et la veine azygos",
      "La veine rénale gauche",
      "La veine hémorroïdaire inférieure",
      "La veine sus-hépatique moyenne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les varices œsophagiennes naissent de la dérivation du flux portal via la veine gastrique gauche (coronaire stomachique) vers le plexus veineux sous-muqueux de l'œsophage inférieur puis le système azygos.",
    "clinicalPearl": "Varices œsophagiennes = shunt via la veine gastrique gauche (coronaire stomachique) vers le système azygos."
  },
  {
    "id": "q-htp-09",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle classification endoscopique en 3 stades de la Société Française d'Endoscopie Digestive (SFED) classe la taille des varices œsophagiennes ?",
    "options": [
      "Stades de Balthazar",
      "Stade I (petites varices aplaties à l'insufflation), Stade II (varices non confluentes non aplaties), Stade III (grosses varices confluentes occupant > un tiers de la lumière)",
      "Classification de Forrest",
      "Classification de Savary-Miller",
      "Score de Child-Pugh"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Classification SFED des VO : Grade I (s'effacent à l'insufflation), Grade II (ne s'effacent pas, non confluentes, < 1/3 de lumière), Grade III (grosses varices confluentes occupant > 1/3 de la lumière œsophagienne).",
    "clinicalPearl": "VO : Grade I = s'efface à l'insufflation ; Grade II = non confluentes ; Grade III = confluentes volumineuses."
  },
  {
    "id": "q-htp-10",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel signe endoscopique pariétal présent sur les varices œsophagiennes est un facteur de risque majeur de rupture hémorragique imminente ?",
    "options": [
      "La présence de signes rouges ('red spots', stries rouges, vergetures)",
      "Une muqueuse d'aspect nacré pâle",
      "Des diverticules œsophagiens",
      "Une candidose associée",
      "Une hernie hiatale par glissement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les signes rouges (stries transversales, télangiectasies sur les varices) traduisent un amincissement pariétal critique et une très forte tension pariétale, annonciateurs de rupture imminente.",
    "clinicalPearl": "Signes rouges sur VO = amincissement extrême de la paroi = haut risque de rupture hémorragique !"
  },
  {
    "id": "q-htp-11",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle classification est utilisée pour décrire les varices ectopiques gastriques (GOV et IGV) ?",
    "options": [
      "Classification de Sarin",
      "Classification de Hinchey",
      "Score de Rockall",
      "Classification de Bormann",
      "Classification de Paris"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La classification de Sarin distingue les GOV1 (prolongement œsophagien petite courbure), GOV2 (prolongement vers le fundus), IGV1 (varices fundiques isolées) et IGV2 (varices gastriques isolées ectopiques).",
    "clinicalPearl": "Classification de Sarin : GOV (gastro-œsophagiennes) et IGV (gastriques isolées / fundiques)."
  },
  {
    "id": "q-htp-12",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle technique hémostatique endoscopique est la méthode de choix pour traiter les varices fundiques isolées (Sarin IGV1) qui saignent ?",
    "options": [
      "La ligature élastique simple",
      "L'encollage par injection d'adhésif biologique (cyanoacrylate / Histoacryl)",
      "L'application d'un clip mécanique",
      "L'électrocoagulation monopolaire",
      "La sclérose à l'alcool absolu"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour les varices cardio-tubérositaires et fundiques (IGV1/GOV2), la ligature élastique est inefficace ou dangereuse ; le traitement de choix est l'oblitération endoscopique par colle cyanoacrylate.",
    "clinicalPearl": "Varices fundiques (Sarin IGV1/GOV2) : Encollage au cyanoacrylate (Histoacryl), PAS de ligature simple."
  },
  {
    "id": "q-htp-13",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle méthode d'hémostase temporaire d'urgence par ballonnet hémostatique œsophagien et gastrique peut être utilisée en cas d'échec ou d'indisponibilité immédiate de l'endoscopie lors d'un choc hémorragique cataclysmique ?",
    "options": [
      "Sonde de Linton ou de Sengstaken-Blakemore",
      "Sonde urinaire de Foley",
      "Sonde de Dobhoff",
      "Sonde rectale de Faucher",
      "Drain de Kehr"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La sonde de Blakemore (ou de Linton pour les varices gastriques) assure une hémostase compressive mécanique temporaire d'urgence (< 24h) en cas de choc hémorragique incontrôlable par rupture variqueuse.",
    "clinicalPearl": "Tamponnement d'urgence rupture de VO : Sonde de Sengstaken-Blakemore (gonflement ballonnet gastrique puis œsophagien)."
  },
  {
    "id": "q-htp-14",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication fréquente et redoutable peut survenir lors de la mise en place ou du gonflage excessif prolongé d'une sonde de Blakemore ?",
    "options": [
      "Pancréatite aiguë nécrosante",
      "Rupture ou nécrose ischémique de la paroi œsophagienne et pneumopathie d'inhalation",
      "Thrombose de la veine fémorale",
      "Fistule biliaire",
      "Occlusion colique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le gonflage prolongé (> 24-48h) expose à la nécrose ischémique œsophagienne et à la rupture pariétale. L'inhalation trachéo-bronchique de sécrétions ou de sang impose l'intubation trachéale préalable systématique.",
    "clinicalPearl": "Sonde de Blakemore : toujours intuber avant la pose ! Risque de rupture œsophagienne et d'inhalation."
  },
  {
    "id": "q-htp-15",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le mécanisme d'action des médicaments vasoactifs splanchniques (Somatostatine, Terlipressine, Octréotide) dans l'hémorragie par rupture variqueuse ?",
    "options": [
      "Augmentation du débit cardiaque",
      "Vasoconstriction artériolaire splanchnique puissante entraînant une chute immédiate de l'afflux sanguin portal et de la pression portale",
      "Vasodilatation rénale directe",
      "Blocage de la coagulation sanguine",
      "Lyse du thrombus portal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les vasoconstricteurs splanchniques (terlipressine, somatostatine) contractent les artérioles splanchniques mésentériques, réduisant le débit sanguin afférent et la pression veineuse portale.",
    "clinicalPearl": "Vasoactifs splanchniques (Terlipressine) : vasoconstriction splanchnique -> baisse immédiate de la pression portale."
  },
  {
    "id": "q-htp-16",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle antibioprophylaxie systématique est recommandée chez tout patient cirrhotique admis pour une hémorragie digestive haute ?",
    "options": [
      "Vancomycine IV pendant 14 jours",
      "Ceftriaxone IV (1 g/j) ou Norfloxacine orale pendant 7 jours",
      "Métronidazole seul",
      "Gentamicine IV",
      "Amoxicilline simple"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'antibiothérapie prophylactique systématique de 7 jours (Ceftriaxone 1g/j) réduit drastiquement les infections bactériennes (ISLA, septicémies), la récidive hémorragique précoce et la mortalité.",
    "clinicalPearl": "Hémorragie digestive chez le cirrhotique = Antibiothérapie prophylactique systématique (Ceftriaxone 7j)."
  },
  {
    "id": "q-htp-17",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge de la rupture de varices œsophagiennes, quel est l'objectif transfusionnel en concentrés de globules rouges ?",
    "options": [
      "Hémoglobine > 12 g/dL",
      "Transfusion restrictive visant une hémoglobine cible entre 7 et 8 g/dL (ou 8-9 g/dL si antécédents cardiovasculaires)",
      "Hémoglobine > 15 g/dL",
      "Aucune transfusion jamais autorisée",
      "Transfusion jusqu'à normalisation de la ferritinémie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Une stratégie transfusionnelle restrictive (cible Hb 7-8 g/dL) est supérieure à une stratégie libérale car elle évite l'augmentation de la pression portale par hypervolémie, réduisant récidives et mortalité.",
    "clinicalPearl": "Cible transfusionnelle hémorragie de varices : Hb entre 7 et 8 g/dL (stratégie restrictive)."
  },
  {
    "id": "q-htp-18",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen non invasif d'imagerie par ultrasons étudie en première intention la perméabilité de l'axe spléno-mésentérico-portal et le sens du flux ?",
    "options": [
      "L'échographie Doppler hépatique et portale",
      "La radiographie de l'abdomen sans préparation (ASP)",
      "L'urographie intraveineuse",
      "La scintigraphie osseuse",
      "La coloscopie totale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'écho-Doppler abdominal permet de vérifier le calibre du tronc porte (normal < 12-13 mm), sa perméabilité, la présence d'un thrombus, et le sens hépatopète (normal) ou hépatofuge (inversé) du flux portal.",
    "clinicalPearl": "Écho-Doppler hépatique : calibre du tronc porte (< 13 mm normal), perméabilité et flux hépatopète."
  },
  {
    "id": "q-htp-19",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Que désigne la gastropathie d'hypertension portale visible à la gastroscopie ?",
    "options": [
      "Un ulcère creusant de la petite courbure",
      "Un aspect en mosaïque de la muqueuse fundique avec mailles polygonales et points rouges",
      "Une gastrite atrophiée avec métaplasie",
      "Un épaississement polypoïde diffus",
      "Une linite gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastropathie d'HTP se caractérise par un aspect en 'peau de serpent' ou mosaïque de la muqueuse fundique, secondaire à la dilatation et l'ectasie des capillaires sous-muqueux gastriques.",
    "clinicalPearl": "Gastropathie d'HTP = Aspect en mosaïque (ou peau de serpent) de la muqueuse fundique à la FOGD."
  },
  {
    "id": "q-htp-20",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie d'hémostase fréquente secondaire à l'hypersplénisme dans l'HTP ne contre-indique généralement pas la réalisation de gestes endoscopiques usuels ?",
    "options": [
      "Une thrombopénie modérée (entre 50 000 et 100 000/mm³)",
      "Une hémophilie sévère",
      "Une afibrinogénémie congénitale",
      "Une CIVD fulminante",
      "Une thrombophilie majeure"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La thrombopénie d'hypersplénisme est bien tolérée car les plaquettes circulantes sont jeunes et très actives (taux de thrombopoïétine et facteur von Willebrand élevés). Une transfusion n'est généralement requise que si plaquettes < 50 000/mm³.",
    "clinicalPearl": "Thrombopénie d'hypersplénisme : habituellement modérée (> 50 000/mm³), ne contre-indique pas la ligature de varices."
  },
  {
    "id": "q-htp-21",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause de bloc intra-hépatique sinusoïdal ou post-sinusoïdal est causée par une intoxication aux alcaloïdes de pyrrolizidine ou après chimiothérapie myéloablative pour greffe de moelle osseuse ?",
    "options": [
      "La maladie veino-occlusive du foie (syndrome d'obstruction sinusoïdale)",
      "L'hépatite virale A",
      "La maladie de Wilson",
      "La stéatose simple",
      "La maladie de Gilbert"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La maladie veino-occlusive (syndrome d'obstruction sinusoïdale - SOS) est une oblitération non thrombotique des veinules hépatiques terminales centro-lobulaires après chimiothérapie ou radiothérapie.",
    "clinicalPearl": "Maladie veino-occlusive (SOS) = oblitération veinules centro-lobulaires post-greffe médullaire / chimiothérapie."
  },
  {
    "id": "q-htp-22",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la principale contre-indication de la mise en place d'un TIPS (shunt porto-systémique intrahépatique par voie transjugulaire) ?",
    "options": [
      "L'existence de varices œsophagiennes",
      "L'encéphalopathie hépatique chronique sévère récurrente ou l'insuffisance cardiaque droite décompensée",
      "La présence d'une splénomégalie",
      "Un âge supérieur à 40 ans",
      "Une thrombopénie modérée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le TIPS augmente la charge circulatoire droite (aggrave l'insuffisance cardiaque) et dérive le sang portal non détoxifié directement dans la circulation systémique, risquant d'induire ou aggraver une encéphalopathie hépatique majeure.",
    "clinicalPearl": "Contre-indications majeures du TIPS : Encéphalopathie hépatique sévère réfractaire et Insuffisance cardiaque droite."
  },
  {
    "id": "q-htp-23",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "En cas de thrombose portale aiguë récente non cirrhotique, quel est le traitement médical immédiat indispensable ?",
    "options": [
      "Abstention thérapeutique",
      "Anticoagulation efficace précoce (HBPM relayée par AVK ou AOD) pendant au moins 6 mois",
      "Ligature de varices",
      "Hépatectomie partielle",
      "Ponction biopsie hépatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans la pyléthrombose aiguë récente, l'anticoagulation précoce permet une recanalisation complète du tronc porte dans plus de 80% des cas et prévient l'extension thrombotique mésentérique.",
    "clinicalPearl": "Thrombose portale aiguë non cirrhotique = Anticoagulation curative précoce (permet la reperméabilisation)."
  },
  {
    "id": "q-htp-24",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Qu'est-ce que le cavernome portal visualisé au scanner abdominal ?",
    "options": [
      "Une tumeur kystique bénigne congénitale du foie",
      "Un réseau de suppléance veineuse collatérale plexiforme péri-portale développé pour contourner une thrombose portale chronique ancienne",
      "Un anévrysme géant de l'artère hépatique",
      "Une adénopathie maligne nécrotique",
      "Un hémangiome géant du lobe gauche"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le cavernome portal est la transformation angiomateuse collatérale péri-portale se développant après plusieurs semaines ou mois d'obstruction chronique de la veine porte.",
    "clinicalPearl": "Cavernome portal = Réseau veineux plexiforme de suppléance contournant une thrombose portale chronique."
  },
  {
    "id": "q-htp-25",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge préventive secondaire après un premier épisode de rupture de varices œsophagiennes chez le cirrhotique, quelle stratégie combinée est recommandée ?",
    "options": [
      "Bêtabloquants seuls sans contrôle",
      "Association d'un bêtabloquant non cardiosélectif (Propranolol) ET de séances itératives de ligature élastique endoscopique jusqu'à éradication complète",
      "Régime sans sel exclusif",
      "Transplantation d'emblée dans tous les cas",
      "Aspirine à faible dose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En prophylaxie secondaire, la combinaison bêtabloquant non cardiosélectif (titré sur la FC) + éradication des varices par ligatures élastiques répétées toutes les 2 à 4 semaines offre la meilleure réduction du risque de récidive.",
    "clinicalPearl": "Prophylaxie secondaire récidive rupture VO = Bêtabloquant non cardiosélectif + Ligatures élastiques itératives."
  },
  {
    "id": "cas-htp-01",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 48 ans atteint d'une cirrhose virale C connue est admis aux urgences pour hématémèse de sang rouge vif de moyenne abondance (environ 400 mL) suivie d'un épisode de méléna. À l'examen : TA 95/55 mmHg, pouls 115 bpm, pâleur cutanéo-muqueuse. Il n'a pas de troubles de conscience. Quelle prise en charge médicale d'urgence devez-vous débuter IMMÉDIATEMENT, avant même la réalisation de l'endoscopie digestive ?",
    "options": [
      "Pose de 2 VVP de bon calibre, remplissage par cristalloïdes, agent vasoactif splanchnique IV (Terlipressine), antibiothérapie prophylactique par Ceftriaxone IV et commande de culots globulaires",
      "Endoscopie en urgence au lit du patient sans aucune voie veineuse",
      "Pose d'une sonde de Blakemore d'emblée à l'aveugle",
      "Lavage gastrique à l'eau glacée par grosse sonde sans surveillance",
      "Prescription de diurétiques en perfusion continue"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'urgence médicale associe la réanimation hémodynamique, la perfusion immédiate d'un vasoactif (terlipressine) réduisant la pression portale, l'antibiothérapie prophylactique par C3G et la préparation à l'endoscopie.",
    "clinicalPearl": "Hémorragie varices : Remplissage modéré + Vasoactif (Terlipressine) + Antibiothérapie (C3G) AVANT l'endoscopie."
  },
  {
    "id": "cas-htp-02",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "L'endoscopie œsogastrique réalisée 4 heures plus tard retrouve 3 cordons de varices œsophagiennes de grade III, dont l'un présente un stigmate d'hémorragie récente avec un saignement actif en jet. Quel geste technique endoscopique s'impose pour assurer l'hémostase définitive ?",
    "options": [
      "Sclérose à l'alcool absolu",
      "Ligature élastique des varices œsophagiennes (LEVO) du cordon saignant et des autres cordons",
      "Pose d'un clip hémostatique métallique unique",
      "Injection de colle cyanoacrylate dans l'œsophage",
      "Coagulation au plasma argon à pleine puissance"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La ligature élastique est la méthode de choix pour traiter l'hémorragie par rupture de varices œsophagiennes en raison de son efficacité et de son moindre taux de complications par rapport à la sclérothérapie.",
    "clinicalPearl": "Rupture de varices œsophagiennes : Traitement hémostatique de référence = LIGATURE ÉLASTIQUE (LEVO)."
  },
  {
    "id": "cas-htp-03",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Le saignement est contrôlé avec succès après pose de 4 élastiques. L'hémoglobine de contrôle est à 7,8 g/dL après transfusion de 2 culots globulaires. La pression artérielle est à 115/70 mmHg et le pouls à 82 bpm. Combien de temps devez-vous maintenir le traitement vasoactif par Terlipressine après contrôle du saignement ?",
    "options": [
      "Arrêt immédiat dès la fin de l'endoscopie",
      "Maintien pendant 2 à 5 jours après l'hémostase pour prévenir la récidive hémorragique précoce",
      "Poursuite à vie par voie intraveineuse",
      "Arrêt uniquement après sortie d'hospitalisation à 3 semaines",
      "Remplacement par des anti-inflammatoires"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement vasoactif intraveineux (terlipressine ou somatostatine) doit être maintenu pendant 2 à 5 jours (généralement 48 à 72 heures après l'arrêt complet de l'hémorragie) afin de prévenir la récidive précoce.",
    "clinicalPearl": "Vasoactif (Terlipressine) : à maintenir 2 à 5 jours après hémostase endoscopique."
  },
  {
    "id": "cas-htp-04",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Au 5ème jour, le patient est stable. Quelle prévention secondaire de récidive hémorragique variqueuse devez-vous planifier avant sa sortie ?",
    "options": [
      "Surveillance clinique seule sans médicament",
      "Prescription d'un bêtabloquant non cardiosélectif (Propranolol) titré sur la FC ET convocation pour séances itératives de ligature élastique toutes les 2 à 4 semaines jusqu'à éradication des varices",
      "Prescription d'anticoagulants oraux",
      "Mise en place systématique d'un TIPS sous 48h",
      "Chirurgie de dérivation spléno-rénale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La prophylaxie secondaire combine la ligature élastique répétée jusqu'à éradication complète des cordons variqueux ET un bêtabloquant non cardiosélectif (Propranolol ou Nadolol) à vie.",
    "clinicalPearl": "Prophylaxie secondaire = Bêtabloquants non cardiosélectifs + Ligatures élastiques jusqu'à disparition des varices."
  },
  {
    "id": "cas-htp-05",
    "courseId": "crs-gastro-hypertension-portale",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une femme de 32 ans sans antécédent hépatique consulte pour une ascite d'apparition brutale, une hépatomégalie douloureuse et un ictère modéré apparus après le début d'une contraception œstroprogestative. L'écho-Doppler révèle une absence de flux dans les trois veines sus-hépatiques et une hypertrophie du lobe de Spiegel (segment I). Quel est le diagnostic le plus probable ?",
    "options": [
      "Stéatohépatite non alcoolique (NASH)",
      "Syndrome de Budd-Chiari (thrombose des veines sus-hépatiques)",
      "Hépatite fulminante à paracétamol",
      "Abcès amibien du foie",
      "Thrombose de la veine splénique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade ascite brutale + hépatomégalie douloureuse + ictère chez une jeune femme sous pilule évoque un syndrome de Budd-Chiari (bloc sus-hépatique). Le segment I (lobe de Spiegel) s'hypertrophie car son drainage se fait directement dans la veine cave inférieure.",
    "clinicalPearl": "Syndrome de Budd-Chiari = Thrombose des veines sus-hépatiques + Hypertrophie du lobe de Spiegel (segment I)."
  }
];

export const HYPERTENSION_PORTALE_RESOURCES: CourseResource[] = [
  {
    "id": "res-htp-summary",
    "courseId": "crs-gastro-hypertension-portale",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Hypertension Portale (HTP)",
    "contentMarkdown": "### 🎯 Points Clés : Hypertension Portale\n- **Définition** : GPVH > 5 mmHg (cliniquement significative si >= 10 mmHg).\n- **Étiologies selon le siège** :\n  1. *Sous-hépatique (pré-hépatique)* : thrombose de la veine porte, cavernome portal.\n  2. *Intra-hépatique* : cirrhose (sinusoïdal, 90%), bilharziose (pré-sinusoïdal).\n  3. *Sus-hépatique (post-hépatique)* : Budd-Chiari (thrombose sus-hépatiques).\n- **Conséquences** : Varices œsophagiennes et gastriques, splénomégalie, ascite.\n- **Prise en charge de la rupture de VO** :\n  - Vasoactif (Terlipressine) précoce.\n  - C3G prophylactique systématique 7 jours.\n  - Ligature élastique en urgence (< 12h).\n  - Seuil transfusionnel : Hb 7-8 g/dL.",
    "author": "Collège National des Enseignants d’Hépatologie"
  },
  {
    "id": "res-htp-tips",
    "courseId": "crs-gastro-hypertension-portale",
    "type": "Astuce",
    "title": "Mnémoniques : Conduite à tenir Rupture VO",
    "contentMarkdown": "### 💡 Règle des 3 V + L + A dans la rupture de VO :\n1. **V**oies veineuses & Remplissage prudent.\n2. **V**asoactif splanchnique (Terlipressine).\n3. **V**érification restrictive : Transfusion cible Hb 7-8 g/dL.\n4. **L**igature élastique rapide (< 12h).\n5. **A**ntibiothérapie prophylactique systématique (Ceftriaxone 7j).",
    "author": "Faculté de Médecine"
  }
];
