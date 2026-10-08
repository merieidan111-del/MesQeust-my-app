import { Question, CourseResource } from '../../types/medical';

export const OCCLUSIONS_INTESTINALES_QUESTIONS: Question[] = [
  {
    "id": "q-occl-01",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la triade clinique sémiologique cardinale classique définissant le syndrome occlusif intestinal aigu ?",
    "options": [
      "Hématémèse, méléna, rectorragie",
      "Douleur abdominale, vomissements, arrêt précoce des matières et des gaz (associé au météorisme)",
      "Ictère, prurit, fièvre en plateau",
      "Diarrhée motrice, perte de poids, polyurie",
      "Dysphagie, aphagie, odynophagie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome occlusif associe classiquement : douleurs abdominales, vomissements, arrêt des matières et surtout des gaz (signe le plus précoce et le plus fidèle), et ballonnement/météorisme.",
    "clinicalPearl": "Triade du syndrome occlusif : Douleur abdominale + Vomissements + Arrêt des matières et des gaz (avec météorisme)."
  },
  {
    "id": "q-occl-02",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel signe clinique est le plus précoce, constant et spécifique pour affirmer un arrêt complet du transit intestinal ?",
    "options": [
      "L'arrêt de l'émission des matières fécales",
      "L'arrêt de l'émission des gaz",
      "L'apparition d'une hématémèse",
      "L'anurie",
      "La disparition des bruits hydro-aériques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'ampoule rectale et le côlon sous-jacent pouvant continuer à se vider de selles résiduelles au début, seul l'arrêt complet de l'émission des gaz affirme l'interruption du transit.",
    "clinicalPearl": "Arrêt des gaz = signe le plus précoce et le plus fidèle de l'occlusion intestinale mécanique."
  },
  {
    "id": "q-occl-03",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la principale étiologie des occlusions mécaniques du grêle chez l'adulte ayant des antécédents de chirurgie abdominale ?",
    "options": [
      "Cancer du grêle",
      "Brides et adhérences péritonéales post-opératoires",
      "Bézoard phytique",
      "Invagination intestinale idiopathique",
      "Tuberculose intestinale isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les brides et adhérences post-opératoires représentent plus de 70% des occlusions mécaniques du grêle chez les patients ayant des antécédents de laparotomie.",
    "clinicalPearl": "Occlusion du grêle chez le patient opéré de l'abdomen = Brides ou adhérences péritonéales (70-80% des cas)."
  },
  {
    "id": "q-occl-04",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Sur le cliché d'abdomen sans préparation (ASP) ou au scanner, comment se caractérisent typiquement les niveaux hydro-aériques d'une occlusion mécanique du GRÊLE ?",
    "options": [
      "Niveaux plus hauts que larges, situés en périphérie du cadre abdominal",
      "Niveaux plus larges que hauts, centraux, nombreux, avec valvules conniventes transversales complètes",
      "Niveau unique en fer à cheval montant dans l'hypochondre droit",
      "Absence totale d'air intra-abdominal",
      "Bulles gazeuses intraparenchymateuses"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Grêle : niveaux plus larges que hauts, centraux, nombreux, avec valvules conniventes traversant toute la lumière. Côlon : niveaux plus hauts que larges, périphériques, avec haustrations incomplètes.",
    "clinicalPearl": "Niveaux hydro-aériques du Grêle = plus larges que hauts, centraux. Côlon = plus hauts que larges, périphériques."
  },
  {
    "id": "q-occl-05",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel mécanisme d'occlusion mécanique expose au risque immédiat de nécrose ischémique et gangrène de l'anse par compression de son pédicule vasculaire mésentérique ?",
    "options": [
      "L'occlusion par obstruction intraluminale simple (calcul, fécalome)",
      "L'occlusion par strangulation (volvulus, bride compressive, hernie étranglée)",
      "L'iléus paralytique réflexe",
      "L'occlusion fonctionnelle hypokaliémique",
      "L'occlusion par sténose inflammatoire crohnienne débutante"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La strangulation (volvulus, bride serrée, hernie étranglée) interrompt le flux vasculaire mésentérique artériel et veineux, conduisant rapidement à la gangrène et perforation si non opérée en urgence.",
    "clinicalPearl": "Occlusion par strangulation = ischémie mésentérique aiguë de l'anse = urgence chirurgicale absolue."
  },
  {
    "id": "q-occl-06",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'occlusion colique par volumineuse tumeur sténosante du côlon gauche, quel segment colique est le plus exposé au risque de perforation diastatique par hyperpression en amont ?",
    "options": [
      "Le côlon descendant",
      "Le caecum (loi de Laplace)",
      "Le rectum sous-péritonéal",
      "Le côlon sigmoïde distal",
      "L'angle colique gauche"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Selon la loi de Laplace (Tension = Pression x Rayon), le caecum ayant le plus grand diamètre de tout le côlon subit la tension pariétale la plus forte. Un diamètre caecal > 9-10 cm fait craindre une perforation diastatique.",
    "clinicalPearl": "Perforation diastatique sur obstacle distal = Caecum (diamètre > 10 cm = menace imminente de rupture)."
  },
  {
    "id": "q-occl-07",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle cause sous-jacente doit être systématiquement recherchée par l'examen clinique de principe devant TOUT tableau d'occlusion intestinale aiguë ?",
    "options": [
      "Un souffle carotidien",
      "La palpation méticuleuse de tous les orifices herniaires (inguinaux, cruraux, ombilicaux et cicatrices de laparotomie)",
      "Un nystagmus spontané",
      "Une arthrite de cheville",
      "Un souffle cardiaque aortique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Une hernie pariétale étranglée (crurale chez la femme âgée, inguinale chez l'homme) est une urgence chirurgicale fréquente et facile à diagnostiquer au lit du malade par la simple palpation des orifices.",
    "clinicalPearl": "Règle absolue devant tout syndrome occlusif : palper les orifices herniaires (hernie étranglée = chirurgie d'urgence)."
  },
  {
    "id": "q-occl-08",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel aspect radiologique caractéristique en 'arceau', 'grain de café' ou 'fer à cheval' à convexité dirigée vers l'hypochondre droit signe au scanner ou à l'ASP ?",
    "options": [
      "Un volvulus du côlon sigmoïde",
      "Une occlusion duodénale sur pince mésentérique",
      "Un calcul biliaire enclavé dans l'iléon",
      "Un fécalome rectal",
      "Une appendicite aiguë sous-hépatique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le volvulus du sigmoïde réalise une torsion de l'anse sigmoïdienne sur son méso, créant une anse borgne distendue en U inversé, en 'grain de café' montant vers l'hypochondre droit.",
    "clinicalPearl": "Volvulus du sigmoïde = image en grain de café / double arceau en U inversé montant vers le foie."
  },
  {
    "id": "q-occl-09",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la principale étiologie des occlusions coliques mécaniques chez l'adulte de plus de 50 ans ?",
    "options": [
      "Le volvulus du caecum",
      "Le cancer colorectal (adénocarcinome du côlon gauche ou du sigmoïde)",
      "L'iléus biliaire",
      "La maladie de Crohn sténosante",
      "Le corps étranger dégluti"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le cancer colorectal représente environ 70% des occlusions mécaniques coliques de l'adulte de plus de 50 ans, prédominant sur le côlon gauche et la charnière recto-sigmoïdienne.",
    "clinicalPearl": "Occlusion colique de l'adulte > 50 ans = Cancer colorectal sténosant en premier lieu (70%)."
  },
  {
    "id": "q-occl-10",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans l'iléus biliaire (occlusion du grêle par calcul biliaire volumineux ayant migré par fistule bilio-digestive), quelle triade radiologique classique de Rigler est observée au scanner ?",
    "options": [
      "Ascite abondante, hépatomégalie, calcul rénal",
      "Aérobilie, distension du grêle avec niveaux hydro-aériques, et calcul radio-opaque ectopique dans l'iléon",
      "Calcification pancréatique, splénomégalie, hernie hiatale",
      "Pneumopéritoine massif, atélectasie, déviation trachéale",
      "Thrombose cave, hydronéphrose bilatérale, dilatation gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade de Rigler associe : 1) une aérobilie (air dans les voies biliaires via la fistule cholécysto-duodénale), 2) une occlusion mécanique du grêle, et 3) la visualisation du calcul ectopique souvent dans la valvule de Bauhin.",
    "clinicalPearl": "Triade de Rigler de l'iléus biliaire : Aérobilie + Occlusion du grêle + Calcul radio-opaque ectopique."
  },
  {
    "id": "q-occl-11",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel signe scanographique avec injection de contraste indique une souffrance ischémique sévère d'une anse grêle étranglée ?",
    "options": [
      "Hypervascularisation harmonieuse de la muqueuse",
      "Défaut de rehaussement pariétal (amincissement ou absence de rehaussement au temps portal), pneumatose pariétale et aéroportie",
      "Simple épaississement œdémateux régulier",
      "Présence de gaz intra-colique abondant",
      "Rehaussement artériel synchrone normal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le défaut de réhaussement de la paroi au scanner injecté traduit l'ischémie transmurale. La pneumatose pariétale et l'aérocolie/aéroportie signent la gangrène intestinale évoluée.",
    "clinicalPearl": "Signes scanographiques d'ischémie grêle : défaut de prise de contraste pariétale, pneumatose, aéroportie."
  },
  {
    "id": "q-occl-12",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical initial conservateur peut être tenté pendant 24 à 48 heures dans une occlusion du grêle sur bride SIMPLE en l'absence formelle de tout signe de strangulation ou d'ischémie ?",
    "options": [
      "Alimentation orale liquide et laxatifs huileux",
      "Aspiration digestive continue par sonde naso-gastrique, compensation hydro-électrolytique IV et épreuve aux hydrosolubles (Gastrographine)",
      "Antibiotiques per os et lavements sous pression",
      "Injections de morphine à forte dose pour paralyser le grêle",
      "Anticoagulants à dose thrombolytique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'aspiration naso-gastrique et le jeûne permettent la décompression du grêle. Le test à la Gastrographine per os a une valeur diagnostique et thérapeutique (accélère la levée de l'obstacle chez 70-80% des brides simples).",
    "clinicalPearl": "Bride simple non compliquée : sonde naso-gastrique + réhydratation IV + test à la Gastrographine (levée dans 75% des cas)."
  },
  {
    "id": "q-occl-13",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Devant un volvulus du sigmoïde non compliqué (patient stable, apyrétique, sans défense ni signe de nécrose au scanner), quelle est la première manœuvre thérapeutique recommandée ?",
    "options": [
      "Hémicolectomie totale d'emblée par laparotomie",
      "Détorsion et détente endoscopique par rectosigmoïdoscope ou coloscope avec mise en place d'un tube de Faucher",
      "Chimio-embolisation mésentérique",
      "Prescription d'antiémétiques simples",
      "Ponction percutanée du sigmoïde à l'aveugle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La détorsion endoscopique prudente au tube de Faucher ou coloscope permet d'évacuer immédiatement les gaz et selles liquides, différant la colectomie sigmoïdienne réglée en milieu froid et propre.",
    "clinicalPearl": "Volvulus du sigmoïde non gangréné : Détorsion endoscopique première au tube de Faucher -> résection sigmoïdienne à froid."
  },
  {
    "id": "q-occl-14",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Le syndrome d'Ogilvie (colectasie aiguë idiopathique / pseudo-obstruction colique aiguë) se caractérise par :",
    "options": [
      "Une tumeur sténosante du bas rectum",
      "Une dilatation massive du côlon sans aucun obstacle mécanique intrinsèque ou extrinsèque, survenant souvent chez un patient âgé alité ou en post-opératoire",
      "Un volvulus récidivant du caecum",
      "Une maladie de Hirschsprung de l'adulte",
      "Une colite pseudomembraneuse foudroyante"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome d'Ogilvie est une dysautonomie neuromusculaire colique fonctionnelle sans lésion mécanique sous-jacente, observée chez des sujets âgés polymorbides ou alités.",
    "clinicalPearl": "Syndrome d'Ogilvie = colectasie aiguë fonctionnelle sans obstacle mécanique (risque de perforation caecale si > 10-12 cm)."
  },
  {
    "id": "q-occl-15",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel médicament parasympathomimétique inhibiteur réversible de l'acétylcholinestérase est le traitement médical de référence du syndrome d'Ogilvie en l'absence de contre-indication cardiaque ?",
    "options": [
      "L'Atropine",
      "La Néostigmine (Prostigmine)",
      "Le Métoclopramide",
      "La Lopéramide",
      "Le Salbutamol"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La néostigmine intraveineuse lente (2 mg en 3 à 5 minutes sous monitorage ECG strict en raison du risque de bradycardie) stimule puissamment la motricité colique et résout la dilatation dans 80 à 90% des cas.",
    "clinicalPearl": "Traitement du syndrome d'Ogilvie réfractaire = Néostigmine IV sous surveillance scopique (antidote = atropine prête)."
  },
  {
    "id": "q-occl-16",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans l'invagination intestinale aiguë du nourrisson et jeune enfant, quel examen d'imagerie permet à la fois d'affirmer le diagnostic (image en cocarde) et de guider la désinvagination par lavement ?",
    "options": [
      "L'échographie abdominale",
      "Le transit du grêle baryté",
      "L'IRM pelvienne",
      "Le scanner injecté",
      "L'artériographie coeliaque"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'échographie montre la classique image en cocarde ou en 'sandwich' (boudin d'invagination) avec une sensibilité proche de 100%, et permet de surveiller la réduction par lavement à l'air ou hydrosoluble.",
    "clinicalPearl": "Invagination intestinale du nourrisson = Échographie (image en cocarde) -> réduction par lavement hydrostatique ou pneumatique."
  },
  {
    "id": "q-occl-17",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle perturbation hydro-électrolytique majeure est typiquement induite par des vomissements abondants et répétés au cours d'une occlusion haute duodéno-jéjunale ?",
    "options": [
      "Acidose métabolique hyperchlorémique avec hyperkaliémie",
      "Alcalose métabolique hypochlorémique et hypokaliémique avec déshydratation extracellulaire",
      "Hypernatrémie sévère avec hypercalcémie",
      "Acidose respiratoire pure",
      "Hyperphosphatémie isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La perte massive d'acide chlorhydrique (HCl) et de potassium gastriques par vomissements entraîne une alcalose métabolique hypochlorémique avec hypokaliémie et contraction volémique.",
    "clinicalPearl": "Vomissements occlusifs hauts répétés = Alcalose métabolique hypochlorémique et hypokaliémique."
  },
  {
    "id": "q-occl-18",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause rare d'occlusion du grêle par compression extrinsèque du 3ème duodénum survient typiquement chez un sujet jeune après un amaigrissement massif et rapide ?",
    "options": [
      "Syndrome de l'artère mésentérique supérieure (pince mésentérique)",
      "Cancer de la tête du pancréas",
      "Ulcère térébrant",
      "Léiomyome gastrique",
      "Adénolymphite mésentérique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La perte du coussin graisseux rétro-péritonéal rétrécit l'angle entre l'aorte et l'artère mésentérique supérieure, comprimant le D3 (syndrome de Wilkie / pince mésentérique).",
    "clinicalPearl": "Compression de D3 après perte de poids rapide = Syndrome de la pince mésentérique (syndrome de Wilkie)."
  },
  {
    "id": "q-occl-19",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le maître examen d'imagerie moderne en première intention devant tout syndrome occlusif chez l'adulte ?",
    "options": [
      "L'abdomen sans préparation (ASP) 3 clichés",
      "Le scanner abdomino-pelvien injecté (ou sans injection si insuffisance rénale sévère)",
      "L'échographie abdominale seule",
      "Le lavement baryté",
      "L'endoscopie digestive haute"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le scanner TAP/abdominal avec injection est le 'gold standard' : il confirme l'occlusion, situe le siège précis (zone de transition), identifie le mécanisme (bride, tumeur, volvulus) et traque les signes d'ischémie ou de perforation.",
    "clinicalPearl": "Examen clé de l'occlusion : Scanner abdomino-pelvien avec injection (diagnostic positif, siège, cause et gravité)."
  },
  {
    "id": "q-occl-20",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie au scanner abdomino-pelvien signe le point précis de torsion mésentérique dans une occlusion par strangulation ?",
    "options": [
      "Le signe du tourbillon ('whirl sign')",
      "Le signe du double contour rénal",
      "Le signe du halot graisseux sous-cutané",
      "L'aérobilie intrahépatique",
      "Le décrochage splénique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le signe du tourbillon (whirl sign) correspond à la torsion des vaisseaux mésentériques et de la graisse péritonéale autour de l'axe de volvulus, hautement prédictif de strangulation.",
    "clinicalPearl": "'Whirl sign' (signe du tourbillon vasculaire au scanner) = torsion du méso / volvulus par strangulation."
  },
  {
    "id": "q-occl-21",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "En présence d'une occlusion mécanique colique gauche par adénocarcinome chez un patient non métastatique mais à haut risque opératoire immédiat, quelle option alternative permet de lever l'occlusion pour préparer une chirurgie en un temps ?",
    "options": [
      "Pose d'une endoprothèse colique métallique auto-expansible par voie basse endoscopique",
      "Gastrostomie de décharge percutanée",
      "Appendicectomie de dérivation",
      "Laparotomie pour massage colique",
      "Embolisation artérielle de la tumeur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La pose d'une prothèse colique auto-expansible métallique permet de lever l'occlusion en urgence et d'éviter une colostomie de sauvetage, permettant une chirurgie oncologique élective programmée à froid.",
    "clinicalPearl": "Prothèse colique auto-expansible = levée d'occlusion tumorale en urgence en 'bridge to surgery' ou en palliation."
  },
  {
    "id": "q-occl-22",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle hernie rare se développant à travers la ligne semi-lunaire au bord latéral du muscle grand droit peut se compliquer d'étranglement occlusif méconnu ?",
    "options": [
      "Hernie de Spiegel",
      "Hernie de Petit (trigone lombaire)",
      "Hernie obturatrice",
      "Hernie diaphragmatique congénitale",
      "Hernie hiatale par glissement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La hernie de Spiegel s'extériorise sur le bord externe du grand droit sous l'ombilic ; masquée sous l'aponévrose du grand oblique, elle est souvent difficile à palper et révélée par une occlusion aiguë.",
    "clinicalPearl": "Hernie de Spiegel = bord externe du grand droit abdominal (risque d'étranglement élevé)."
  },
  {
    "id": "q-occl-23",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'occlusion colique sur cancer, une colectomie subtotale avec anastomose iléo-rectale d'emblée est indiquée préférentiellement en cas de :",
    "options": [
      "Tumeur du bas rectum à 2 cm de la marge anale",
      "Distension majeure avec ischémie/perforation diastatique du caecum associée à la tumeur sténosante du côlon gauche",
      "Fécalome simple",
      "Diverticulite résolue",
      "Volvulus détordu avec succès"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En cas de souffrance caecale diastatique associée à une néoplasie colique gauche obstructive, la résection emportant tout le côlon distendu (colectomie subtotale) avec rétablissement iléo-rectal direct traite les deux lésions.",
    "clinicalPearl": "Cancer colique gauche occlusif avec ischémie caecale diastatique = Colectomie subtotale avec anastomose iléo-rectale."
  },
  {
    "id": "q-occl-24",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la règle concernant l'utilisation des antispasmodiques ou ralentisseurs du transit (comme le Lopéramide) chez un patient suspect d'occlusion intestinale mécanique ?",
    "options": [
      "Ils sont indiqués pour soulager les coliques",
      "Ils sont formellement contre-indiqués car ils aggravent la stase, masquent l'évolution et risquent de précipiter la perforation",
      "Ils doivent être prescrits à double dose",
      "Ils remplacent la sonde d'aspiration",
      "Ils sont réservés aux occlusions par bride"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Tout ralentisseur du transit ou morphinique non titré majore la distension et l'iléus, tout comme les antispasmodiques purs qui trompent la surveillance clinique armée.",
    "clinicalPearl": "Ralentisseurs du transit et lavements hyperosmolaires contre-indiqués dans l'occlusion mécanique."
  },
  {
    "id": "q-occl-25",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle complication systémique hémodynamique et septique redoutable survient rapidement en l'absence de levée d'une occlusion mécanique par strangulation ?",
    "options": [
      "Le choc hypovolémique puis septique par translocation bactérienne, gangrène et péritonite aiguë",
      "Une polyglobulie primitive",
      "Une hémochromatose secondaire",
      "Un nodule thyroïdien toxique",
      "Une polyarthrite rhumatoïde"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La séquestration liquidienne massive dans le 3ème secteur génère une hypovolémie sévère, compliquée d'un choc septique dès que la barrière muqueuse est rompue avec perforation et péritonite.",
    "clinicalPearl": "Strangulation non opérée = ischémie -> gangrène -> péritonite -> choc septique et défaillance multiviscérale."
  },
  {
    "id": "q-cas-occl-1",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Mme L., 52 ans, opérée d'une hystérectomie par laparotomie il y a 8 ans, est admise aux urgences pour des douleurs abdominales péri-ombilicales intenses à type de crampes survenant par crises paroxystiques, associées à des vomissements alimentaires puis bilieux abondants depuis 18 heures. Elle signale un arrêt complet de l'émission des selles et des gaz depuis la veille au soir. À l'examen clinique : cicatrice médiane sous-ombilicale propre, abdomen discrètement météorisé, bruits hydro-aériques métalliques augmentés pendant les crises douloureuses, apyrétique, orifices herniaires libres. Le scanner abdominal injecté met en évidence une distension diffuse du grêle mesurant 38 mm avec une zone de transition brutale au niveau d'une bride iléale dans le pelvis, sans épaississement pariétal anormal ni défaut de rehaussement, et un côlon collabé. Quel est le diagnostic précis et l'attitude initiale ?",
    "options": [
      "Infarctus mésentérique aigu ; laparotomie de résection immédiate",
      "Occlusion mécanique du grêle sur bride simple sans signe de gravité scanographique ; mise en condition avec aspiration naso-gastrique, compensation hydro-électrolytique IV et épreuve aux hydrosolubles sous surveillance",
      "Pancréatite aiguë modérée ; réalimentation précoce",
      "Appendicite aiguë rétro-caecale ; appendicectomie par cœlioscopie",
      "Volvulus sigmoïdien ; lavement au tube de Faucher"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Il s'agit d'une occlusion mécanique du grêle sur bride post-opératoire sans signe de strangulation ni de souffrance ischémique scanographique. Un traitement médical conservateur (sonde nasogastrique, réhydratation et test à la Gastrographine) résout l'épisode dans la majorité des cas.",
    "clinicalPearl": "Bride simple sans signe de souffrance au scanner = traitement médical premier (SNG + Gastrographine) sous surveillance armée."
  },
  {
    "id": "q-cas-occl-2",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Mr G., 45 ans, ayant des antécédents d'appendicectomie dans l'enfance, se présente 6 heures après le début brutal d'une douleur abdominale intolérable, continue, sans rémission. À l'examen : tachycardie à 118 bpm, TA 100/60 mmHg, température à 38,1°C, défense localisée très vive dans la fosse iliaque droite, silence auscultatoire abdominal complet. Le scanner injecté montre une anse grêle distendue en 'U' enclavée dans une bride pelvienne avec un signe du tourbillon mésentérique ('whirl sign'), un défaut complet de rehaussement de la paroi de l'anse au temps portal et une infiltration de la graisse mésentérique adjacente. Quelle est la conduite thérapeutique en urgence absolue ?",
    "options": [
      "Poursuivre l'aspiration nasogastrique pendant 48 heures",
      "Intervention chirurgicale d'urgence (cœlioscopie ou laparotomie) pour levée de la strangulation, appréciation de la viabilité de l'anse et résection éventuelle si nécrose",
      "Test diagnostique aux hydrosolubles par voie orale",
      "Coloscopie en urgence pour détorsion",
      "Mise sous antispasmodiques et retour à domicile"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur continue, la tachycardie, le whirl sign et surtout le défaut de rehaussement pariétal affirment une occlusion par strangulation avec ischémie de l'anse : urgence chirurgicale immédiate pour sauver le grêle ou réséquer l'anse gangrénée.",
    "clinicalPearl": "Occlusion par strangulation avec défaut de rehaussement scanographique = Chirurgie en urgence absolue."
  },
  {
    "id": "q-cas-occl-3",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Un homme de 76 ans, grabataire et constipé chronique, est conduit aux urgences pour un ballonnement abdominal spectaculaire asymétrique apparu en moins de 24h, avec arrêt complet des gaz et quelques nausées sans vomissements profus. L'abdomen est tympanique, indolore, sans défense. Le scanner abdomino-pelvien montre une distension colique monstrueuse d'une anse en 'grain de café' dont le sommet atteint l'hypochondre droit, sans pneumopéritoine ni signe de souffrance pariétale. Quel geste thérapeutique non chirurgical de première intention est formellement indiqué ?",
    "options": [
      "Laparotomie médiane exploratrice d'emblée",
      "Détorsion endoscopique prudente au tube de Faucher ou coloscopie courte décompressive",
      "Pose d'une sonde naso-gastrique seule",
      "Laxatifs osmotiques à forte dose per os",
      "Perfusion de néostigmine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Devant un volvulus du côlon sigmoïde non gangrené (sans défense ni signe de nécrose scanographique), la détorsion endoscopique au tube de Faucher est le geste salvateur de première ligne, permettant de différer la résection colique élective.",
    "clinicalPearl": "Volvulus du sigmoïde non compliqué = Détorsion endoscopique par rectosigmoïdoscope / tube de Faucher."
  },
  {
    "id": "q-cas-occl-4",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Une femme de 79 ans consulte pour un tableau d'occlusion du côlon fébrile évoluant depuis 4 jours, avec altération de l'état général et douleurs prédominant dans la fosse iliaque droite. Le scanner abdominal met en évidence un volumineux adénocarcinome sténosant du sigmoïde, un caecum dilaté à 11,5 cm de diamètre avec amincissement extrême de sa paroi et pneumatose pariétale caecale localisée (menace de perforation diastatique imminente). Quelle est la prise en charge chirurgicale appropriée ?",
    "options": [
      "Pose d'une endoprothèse colique par voie basse en ambulatoire",
      "Laparotomie en urgence avec colectomie subtotale (emportant le caecum nécrosé et la tumeur sigmoïdienne) et iléo-sigmoïdostomie ou iléostomie terminale de dérivation",
      "Traitement médical conservateur par lavements",
      "Chimiothérapie néoadjuvante première sans chirurgie",
      "Surveillance scanographique à 48 heures"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Un diamètre caecal > 10 cm avec pneumatose pariétale indique une ischémie diastatique avec menace imminente de perforation diastatique stercorale : l'intervention en urgence pour colectomie subtotale s'impose sans délai.",
    "clinicalPearl": "Caecum distendu > 10-11 cm avec souffrance pariétale sur cancer colique = Colectomie subtotale en urgence."
  },
  {
    "id": "q-cas-occl-5",
    "courseId": "crs-gastro-occlusions-intestinales",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Une femme de 83 ans très menue consulte pour des vomissements bilieux répétés, un arrêt des gaz et une douleur de la racine de la cuisse droite irradiant à la face antéro-interne du genou (signe de Howship-Romberg), exacerbée par l'abduction et la rotation interne de la hanche. L'abdomen est modérément distendu. L'examen des régions inguinales et ombilicales est normal. Le scanner abdominopelvien montre une occlusion du grêle avec incarcération d'une anse iléale dans le canal sous-pubien obturateur droit. Quel est le diagnostic précis ?",
    "options": [
      "Hernie inguinale droite indirecte",
      "Hernie obturatrice droite étranglée",
      "Hernie crurale droite banale",
      "Sciatique paralysante droite",
      "Appendicite pelvienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La hernie obturatrice survient typiquement chez la femme âgée maigre ; l'incarcération dans le foramen obturateur comprime le nerf obturateur (signe de Howship-Romberg à la face interne de la cuisse) et réalise une occlusion mécanique du grêle par strangulation.",
    "clinicalPearl": "Femme âgée maigre + occlusion grêle + douleur face interne de cuisse (Howship-Romberg) = Hernie obturatrice étranglée."
  }
];

export const OCCLUSIONS_INTESTINALES_RESOURCES: CourseResource[] = [
  {
    "id": "res-occl-summary",
    "courseId": "crs-gastro-occlusions-intestinales",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Occlusions Intestinales Aiguës",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Occlusions Intestinales\n- **Sémiologie fondamentale** : Douleurs abdominales en crampes, vomissements précoces (grêle) ou tardifs (côlon), arrêt des matières et surtout des gaz (signe précoce fidèle), météorisme.\n- **Grêle vs Côlon** :\n  - *Grêle* : début brutal, vomissements abondants précoces, météorisme central modéré, niveaux hydro-aériques plus larges que hauts centraux nombreux. Causes majeures : brides/adhérences post-op (75%), hernies étranglées.\n  - *Côlon* : début progressif, arrêt des gaz au premier plan, météorisme volumineux périphérique, niveaux plus hauts que larges périphériques. Causes majeures : cancer colorectal (70%), volvulus sigmoïde (grain de café).\n- **Mécanismes** :\n  - *Obstruction* : obstacle intraluminal ou pariétal sans atteinte vasculaire primitive.\n  - *Strangulation* : torsion du pédicule mésentérique (volvulus, bride serrée, hernie étranglée) -> risque d'ischémie et gangrène rapide -> urgence chirurgicale.\n- **Règles d'or** :\n  - Palpation systématique des orifices herniaires (hernie étranglée = chirurgie immédiate).\n  - TDM abdomino-pelvien injecté = examen clé (diagnostic positif, siège, cause, ischémie, pneumopéritoine).\n  - Caecum > 10 cm = risque de perforation diastatique imminente.\n  - Volvulus du sigmoïde non gangrené = détorsion endoscopique première au tube de Faucher.",
    "author": "Faculté de Médecine - Collège de Chirurgie Digestive"
  },
  {
    "id": "res-occl-pearls",
    "courseId": "crs-gastro-occlusions-intestinales",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Occlusions Intestinales",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Hernie étranglée** : toute occlusion nécessite l'examen des aines (toucher des orifices herniaires).\n- ⚡ **Signe du tourbillon (whirl sign)** au scanner = strangulation mésentérique = urgence chirurgicale.\n- ⚡ **Signe de Howship-Romberg** : douleur irradiant à la face antéro-interne de la cuisse = hernie obturatrice étranglée.",
    "author": "Commission Pédagogique"
  }
];
