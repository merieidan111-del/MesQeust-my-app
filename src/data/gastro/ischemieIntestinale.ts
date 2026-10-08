import { Question, CourseResource } from '../../types/medical';

export const ISCHEMIE_INTESTINALE_QUESTIONS: Question[] = [
  {
    "id": "q-isch-01",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la cause étiologique la plus fréquente de l'ischémie mésentérique aiguë d'origine artérielle (environ 40-50% des cas) ?",
    "options": [
      "L'athérome calcifié obstructif de l'ostium",
      "L'embolie artérielle d'origine cardiogène (fibrillation auriculaire)",
      "La thrombose de la veine porte",
      "La vascularite à ANCA",
      "La dissection aortique isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'embolie artérielle d'origine cardiaque (ACFA, infarctus du myocarde, valvulopathie) s'enclavant dans l'artère mésentérique supérieure est la première cause d'infarctus mésentérique aigu.",
    "clinicalPearl": "Embolie d'origine cardiogène (ACFA) = 1ère cause d'ischémie mésentérique artérielle aiguë (début foudroyant)."
  },
  {
    "id": "q-isch-02",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel contraste clinique sémiologique précoce est très évocateur d'une ischémie mésentérique aiguë avant le stade de nécrose péritonéale ?",
    "options": [
      "Une contracture abdominale féroce sans douleur spontanée",
      "Une douleur abdominale paroxystique intolérable disproportionnée par rapport à la pauvreté des signes physiques à la palpation ('ventre faussement rassurant')",
      "Un ictère nu avec ascite abondante",
      "Une hépatomégalie douloureuse sans douleur abdominale",
      "Un météorisme tympanique indolore"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le contraste entre l'intensité extrême des douleurs abdominales ressenties par le patient et un abdomen souple sans défense lors de l'examen initial est hautement caractéristique au stade précoce.",
    "clinicalPearl": "Douleur abdominale atroce + abdomen souple sans défense à la palpation = Ischémie mésentérique aiguë débutante."
  },
  {
    "id": "q-isch-03",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel examen d'imagerie moderne en urgence est l'examen de référence absolu (gold standard) pour confirmer l'ischémie mésentérique aiguë ?",
    "options": [
      "L'échographie abdominale simple",
      "L'angioscanner abdomino-pelvien avec acquisition aux temps artériel précoce et portal sans et avec injection",
      "L'abdomen sans préparation (ASP) 3 clichés",
      "Le transit du grêle baryté",
      "La coloscopie totale immédiate"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'angioscanner TAP triphasique permet d'identifier l'occlusion vasculaire (artérielle ou veineuse), d'évaluer la viabilité pariétale digestive (défaut de rehaussement, pneumatose) et la perfusion des organes.",
    "clinicalPearl": "Angioscanner abdomino-pelvien avec temps artériel et portal = examen de référence incontournable."
  },
  {
    "id": "q-isch-04",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel paramètre biologique sanguin reflète l'anoxie tissulaire cellulaire et la gravité de la souffrance ischémique intestinale ?",
    "options": [
      "L'hypouricémie",
      "L'hyperlactatémie artérielle (lactates élevés)",
      "L'hypercholestérolémie",
      "La protéinurie des 24h",
      "La thrombocytose isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'élévation des lactates sanguins (acidose lactique) témoigne du métabolisme anaérobie intestinal ; un taux élevé corrélé à la clinique évoque une nécrose transmurale avancée.",
    "clinicalPearl": "Hyperlactatémie = marqueur clé d'ischémie tissulaire et de nécrose intestinale avancée."
  },
  {
    "id": "q-isch-05",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'ischémie mésentérique chronique (angor mésentérique), comment se manifestent typiquement les douleurs ?",
    "options": [
      "Douleur épigastrique nocturne à jeun calmée par les aliments",
      "Douleur péri-ombilicale postprandiale précoce (15 à 30 min après les repas) provoquant une 'peur de manger' et un amaigrissement majeur",
      "Douleur constante calmée uniquement par l'aspirine",
      "Douleur de la fosse iliaque gauche soulagée par l'émission de gaz",
      "Douleur dorsale isolée sans lien avec l'alimentation"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'angor mésentérique associe des crampes post-prandiales (repas = augmentation de la demande en débit mésentérique non satisfaite par les artères sténosées) conduisant à une sitiophobie (peur de s'alimenter) et cachexie.",
    "clinicalPearl": "Angor mésentérique : douleurs postprandiales précoces + sitiophobie ('peur de manger') + amaigrissement massif."
  },
  {
    "id": "q-isch-06",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "La thrombose veineuse mésentérique (ischémie mésentérique d'origine veineuse) est principalement favorisée par :",
    "options": [
      "Un anévrisme de l'aorte thoracique",
      "Les états d'hypercoagulabilité constitutionnels ou acquis (thrombophilies, déficit en protéine C/S, mutation facteur V Leiden, syndrome myéloprolifératif, cirrhose/HTP)",
      "Une malformation artério-veineuse cérébrale",
      "Le diabète de type 1 équilibré",
      "L'allergie aux pénicillines"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La thrombose veineuse mésentérique représente environ 10-15% des cas, liée à un état prothrombotique (thrombophilie, déficit en antithrombine, hémopathie, cirrhose avec HTP, foyer infectieux intra-abdominal).",
    "clinicalPearl": "Thrombose veineuse mésentérique = enquête de thrombophilie systématique (mutation Facteur V Leiden, JAK2, etc.)."
  },
  {
    "id": "q-isch-07",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le traitement médical anticoagulant de première intention en urgence devant toute ischémie mésentérique veineuse sans hémorragie active ?",
    "options": [
      "Antiagrégant plaquettaire par aspirine à faible dose",
      "Héparinothérapie par héparine non fractionnée (HNF) intraveineuse à dose curative ou HBPM",
      "Antivitamine K per os d'emblée à forte dose sans relais",
      "Fibrinolyse générale systématique",
      "Antibiotiques seuls"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'anticoagulation curative immédiate par héparine est le traitement clé de la thrombose veineuse mésentérique, permettant la reperméabilisation veineuse et prévenant l'extension du thrombus.",
    "clinicalPearl": "Thrombose veineuse mésentérique non compliquée de nécrose = Héparinothérapie curative immédiate."
  },
  {
    "id": "q-isch-08",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Qu'est-ce que l'ischémie mésentérique aiguë non occlusive (NOMI) ?",
    "options": [
      "Une embolie d'une petite branche artérielle",
      "Une vasoconstriction réflexe sévère du lit mésentérique sur bas débit circulatoire systémique (choc cardiogénique, choc septique, drogues vasoconstrictrices)",
      "Une compression par une volumineuse tumeur stromale",
      "Une thrombose de la veine splénique pure",
      "Un volvulus du grêle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La NOMI (Non-Occlusive Mesenteric Ischemia) survient sans obstacle sur les gros troncs, par vasospasme prolongé dans les contextes de choc cardiogénique, d'arrêt cardiaque réanimé ou de fortes doses d'amines vasoconstrictrices.",
    "clinicalPearl": "NOMI = bas débit systémique + vasoconstriction mésentérique réactionnelle sans thrombose tronculaire."
  },
  {
    "id": "q-isch-09",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la colite ischémique (forme colique la plus fréquente de l'ischémie digestive), quel territoire colique est le plus vulnérable à l'hypoperfusion ?",
    "options": [
      "Le caecum et l'appendice",
      "Les zones de jonction vasculaire fragiles (angle colique gauche / point de Griffiths et charnière recto-sigmoïdienne / point de Sudeck)",
      "Le côlon ascendant exclusivement",
      "Le rectum sous-péritonéal",
      "Le canal anal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'angle splénique (angle colique gauche) à la frontière entre les territoires de l'artère mésentérique supérieure et inférieure, et la charnière recto-sigmoïdienne sont des zones carrefours particulièrement exposées à l'hypoperfusion.",
    "clinicalPearl": "Zones critiques de colite ischémique : Angle gauche (point de Griffiths) et jonction recto-sigmoïdienne (point de Sudeck)."
  },
  {
    "id": "q-isch-10",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la triade clinique habituelle de la colite ischémique transitoire chez le sujet âgé ?",
    "options": [
      "Douleur aiguë en fosse iliaque gauche, besoin impérieux d'aller à la selle, suivi de rectorragies ou diarrhée sanglante rouge vif",
      "Hématémèse abondante, ictère, amaigrissement",
      "Constipation totale indolore avec ascite",
      "Fièvre à 40°C avec vomissements fécaloïdes",
      "Douleur de l'hypochondre droit irradiant à l'épaule droite"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La colite ischémique se manifeste typiquement par des douleurs abdominales gauches brutales, suivies d'une diarrhée sanglante avec rectorragies de sang rouge ou marron, chez un sujet vasculopathe âgé.",
    "clinicalPearl": "Douleur FIG brutale + besoin impérieux + rectorragie / diarrhée sanglante = Colite ischémique."
  },
  {
    "id": "q-isch-11",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel signe endoscopique précoce et très évocateur est visible lors d'une rectosigmoïdoscope prudente sans insufflation excessive pour colite ischémique ?",
    "options": [
      "Présence de pseudomembranes blanchâtres confluentes",
      "Bande érythémateuse longitudinale ('single stripe sign') avec muqueuse violacée œdémateuse et ulcérations pétéchiales",
      "Polypes villeux pédiculés multiples",
      "Aspect en pavés disjoints avec fistules",
      "Dilatation monstrueuse sans mucosal lesion"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endoscopie (réalisée avec une insufflation minimale) montre une muqueuse érythémateuse ou cyanosée avec bande longitudinale ulcérée ('stripe sign'), respectant habituellement le rectum grâce à sa triple vascularisation.",
    "clinicalPearl": "Colite ischémique : respect du rectum habituel + bande longitudinale érythémateuse (stripe sign)."
  },
  {
    "id": "q-isch-12",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie scanographique tardive de l'ischémie intestinale correspond à la présence de bulles de gaz dans la paroi intestinale elle-même ?",
    "options": [
      "La stéatose mésentérique",
      "La pneumatose pariétale intestinale",
      "L'aérobilie",
      "La diverticulose",
      "L'iléus paralytique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La pneumatose pariétale résulte de la rupture de la barrière muqueuse nécrosée, permettant aux gaz intraluminaux de disséquer la paroi de l'intestin, souvent associée à du gaz dans les veines mésentériques et le tronc porte (aéroportie).",
    "clinicalPearl": "Pneumatose pariétale intestinale + aéroportie = nécrose transmurale avancée (gravité extrême)."
  },
  {
    "id": "q-isch-13",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel geste chirurgical est indiqué d'emblée chez un patient présentant un infarctus mésentérique avec péritonite généralisée ou nécrose évidente au scanner ?",
    "options": [
      "Endoscopie interventionnelle de décompression",
      "Laparotomie exploratrice d'urgence pour résection des segments nécrotiques et revascularisation vasculaire (embolectomie / pontage)",
      "Attente sous antibiotiques simples",
      "Coloscopie totale",
      "Chimiothérapie intra-artérielle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La laparotomie urgente permet de réséquer les anses intestinales nécrosées non viables, de pratiquer une embolectomie de l'artère mésentérique supérieure ou un pontage, et de programmer une ré-intervention de contrôle ('second look').",
    "clinicalPearl": "Infarctus mésentérique avec nécrose : Laparotomie urgente (résection intestinale + revascularisation + second look à 24-48h)."
  },
  {
    "id": "q-isch-14",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Pourquoi réalise-t-on couramment une laparotomie de 'Second Look' systématique 24 à 48 heures après une chirurgie d'ischémie mésentérique aiguë ?",
    "options": [
      "Pour refermer définitivement la peau",
      "Pour réévaluer la viabilité des anses digestives limites laissées en place et réséquer d'éventuelles zones de nécrose secondaire apparues",
      "Pour changer les pansements uniquement",
      "Pour faire des prélèvements bactériologiques systématiques",
      "Pour réaliser une anastomose gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le 'second look' chirurgical systématique permet de vérifier l'efficacité de la revascularisation et d'éviter une résection excessive initiale d'anses potentiellement récupérables ('intestin court').",
    "clinicalPearl": "Laparotomie de 'second look' à 24-48h = vérifier la viabilité intestinale et préserver la longueur du grêle."
  },
  {
    "id": "q-isch-15",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle technique de radiologie interventionnelle endovasculaire permet de désobstruer une thrombose artérielle aiguë ostiale chez un patient sans péritonite inaugurale ?",
    "options": [
      "Thrombo-aspiration mécanique percutanée et angioplastie avec pose de stent",
      "Embolisation artérielle de la branche proximale",
      "Biopsie transjugulaire",
      "Sclérose à l'alcool absolu",
      "Pose d'une valve veineuse"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Chez un patient vu précocement sans signe péritonéal de nécrose irréversible, la revascularisation endovasculaire (thrombo-aspiration, thrombolyse in situ, angioplastie-stenting) permet de restaurer le flux mésentérique sans laparotomie.",
    "clinicalPearl": "Stade précoce sans péritonite = revascularisation endovasculaire (angioplastie/stenting mésentérique)."
  },
  {
    "id": "q-isch-16",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans l'ischémie mésentérique chronique, quel nombre de troncs artériels digestifs viscéraux principaux (tronc cœliaque, AMS, AMI) doivent généralement être sténosés ou occlus pour provoquer des symptômes ?",
    "options": [
      "Un seul tronc suffit toujours",
      "Au moins 2 des 3 troncs artériels digestifs principaux (compte tenu de la richesse du réseau anastomotique collatéral)",
      "Les trois troncs obligatoirement sans exception",
      "Aucun tronc principal, seulement les artérioles distales",
      "Seulement l'artère rénale droite"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le réseau d'arcades de suppléance (arcade de Riolan, arcade de Drummond, arcades pancréatico-duodénales) compense habituellement l'occlusion d'une seule artère : l'angor mésentérique nécessite l'atteinte d'au moins 2 des 3 troncs.",
    "clinicalPearl": "Angor mésentérique : atteinte sévère d'au moins 2 des 3 troncs digestifs (tronc cœliaque, AMS, AMI)."
  },
  {
    "id": "q-isch-17",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle artère digestive assure la vascularisation de la totalité du jéjunum, de l'iléon, du caecum, du côlon ascendant et des 2/3 droits du côlon transverse ?",
    "options": [
      "Le tronc cœliaque",
      "L'artère mésentérique supérieure (AMS)",
      "L'artère mésentérique inférieure (AMI)",
      "L'artère iliaque interne gauche",
      "L'artère phrénique inférieure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'artère mésentérique supérieure naît de la face antérieure de l'aorte abdominale à hauteur de L1 et vascularise le grêle mésentérique et le côlon droit/transverse proximal.",
    "clinicalPearl": "Artère mésentérique supérieure = grêle entier + caecum + côlon droit + côlon transverse droit."
  },
  {
    "id": "q-isch-18",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle séquelle fonctionnelle digestive majeure survient lorsqu'il ne reste que moins de 100 à 150 cm de grêle fonctionnel après des résections intestinales étendues ?",
    "options": [
      "Le syndrome de dumping tardif",
      "Le syndrome du grêle court (avec malabsorption majeure et dépendance à la nutrition parentérale)",
      "L'achalasie œsophagienne secondaire",
      "Le mégadolichocôlon congénital",
      "Une gastrite atrophique auto-immune"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome du grêle court résulte d'une amputation anatomique étendue du grêle, entraînant une diarrhée motrice volumineuse, des carences nutritionnelles sévères et nécessitant une nutrition parentérale prolongée ou définitive.",
    "clinicalPearl": "Grêle court (< 150 cm résiduel) = malabsorption globale majeure et dépendance à la nutrition parentérale."
  },
  {
    "id": "q-isch-19",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel médicament digitalique utilisé autrefois dans l'insuffisance cardiaque était un puissant inducteur de vasoconstriction mésentérique et facteur de NOMI ?",
    "options": [
      "La Digoxine",
      "La Furosémide",
      "Le Métoprolol",
      "Le Captopril",
      "L'Amiodarone"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La digoxine exerce un effet vasoconstricteur direct sur la circulation artérielle splanchnique et a été historiquement une cause classique d'ischémie mésentérique non occlusive.",
    "clinicalPearl": "Digoxine à forte dose = vasoconstriction artérielle splanchnique (facteur précipitant de NOMI)."
  },
  {
    "id": "q-isch-20",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "L'arcade de Riolan est une anastomose vasculaire essentielle reliant :",
    "options": [
      "L'artère gastro-épiploïque droite et gauche",
      "L'artère colique moyenne (branche de l'AMS) et l'artère colique supérieure gauche (branche de l'AMI)",
      "L'artère splénique et l'artère hépatique",
      "L'artère rénale et l'artère surrénalienne",
      "L'artère fémorale et l'artère iliaque externe"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'arcade anastomotique de Riolan relie l'artère colique moyenne (AMS) à l'artère colique supérieure gauche (AMI), assurant une voie de dérivation majeure entre les deux systèmes mésentériques.",
    "clinicalPearl": "Arcade de Riolan = communication capitale entre l'artère mésentérique supérieure et l'inférieure."
  },
  {
    "id": "q-isch-21",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'ischémie mésentérique aiguë, quel phénomène paradoxal lors de la restauration du flux sanguin dans un tissu anoxique peut aggraver temporairement les lésions cellulaires ?",
    "options": [
      "Le syndrome de reperfusion (avec relargage massif de radicaux libres oxygénés et choc cytokinique)",
      "L'alcalose respiratoire réflexe",
      "L'hypercholestérolémie aiguë",
      "La fixation du fer intra-hépatique",
      "L'hypoxie cérébrale isolée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le syndrome de reperfusion libère brutalement des dérivés réactifs de l'oxygène, du potassium, des enzymes lysosomales et des cytokines pro-inflammatoires dans la circulation systémique, pouvant provoquer collapsus et défaillance multiviscérale.",
    "clinicalPearl": "Syndrome de reperfusion = radicaux libres + hyperkaliémie + choc cytokinique systémique lors de la revascularisation."
  },
  {
    "id": "q-isch-22",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle cause rare de compression extrinsèque du tronc cœliaque par un épaississement d'une structure aponévrotique diaphragmatique est appelée 'syndrome de Dunbar' ?",
    "options": [
      "Le syndrome du ligament arqué médian du diaphragme",
      "La hernie de Bochdalek",
      "La hernie de Morgagni-Larrey",
      "L'éventration diaphragmatique droite",
      "Le syndrome du défilé thoraco-brachial"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le ligament arqué médian réunit les piliers du diaphragme au-dessus de l'aorte. En cas d'insertion basse, il comprime le tronc cœliaque à chaque expiration (syndrome du ligament arqué médian / syndrome de Dunbar).",
    "clinicalPearl": "Syndrome de Dunbar = compression extrinsèque du tronc cœliaque par le ligament arqué médian."
  },
  {
    "id": "q-isch-23",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel signe clinique cutané ou vasculaire périphérique peut accompagner une embolie de cholestérol dans le territoire mésentérique chez un patient athéromateux manipuleur d'artère ?",
    "options": [
      "Un livedo reticularis des membres inférieurs et des orteils pourpres ('blue toe syndrome')",
      "Un érythème noueux prétibial",
      "Une dermatose à IgA linéaire",
      "Des bulles cutanées pemphigoïdes",
      "Une alopécie aiguë"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La maladie des emboles de cristaux de cholestérol dissémine des micro-cristaux dans les artérioles rénales, mésentériques et cutanées, se manifestant par un livedo, des orteils pourpres et une insuffisance rénale.",
    "clinicalPearl": "Emboles de cristaux de cholestérol : livedo réticulé + orteils bleus (blue toe syndrome) + ischémie digestive."
  },
  {
    "id": "q-isch-24",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Chez un jeune patient présentant une thrombose portale et mésentérique extensive sans étiologie évidente, quelle mutation du gène de la Janus kinase doit être recherchée même en l'absence de polyglobulie ?",
    "options": [
      "Mutation JAK2 V617F",
      "Mutation BRCA1",
      "Mutation APC",
      "Mutation CFTR",
      "Mutation HER2"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La mutation JAK2 V617F (syndromes myéloprolifératifs débutants comme la maladie de Vaquez ou thrombocythémie essentielle) est l'une des causes majeures de thrombose splanchnique occulte.",
    "clinicalPearl": "Thrombose veineuse splanchnique inexpliquée : recherche systématique de la mutation JAK2 V617F."
  },
  {
    "id": "q-isch-25",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le pronostic global de mortalité de l'infarctus mésentérique aigu lorsque le diagnostic est posé tardivement au stade de nécrose intestinale et choc péritonéal ?",
    "options": [
      "Moins de 5%",
      "Entre 10 et 15%",
      "Supérieur à 60-80%",
      "Nul si antibiotiques administrés",
      "Approximativement 25%"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "En l'absence de diagnostic précoce dans les 6 premières heures, la mortalité de l'ischémie mésentérique aiguë dépasse 60 à 80% en raison du sepsis à point de départ digestif et du choc irréversible.",
    "clinicalPearl": "Diagnostic tardif d'infarctus mésentérique = mortalité prohibitive de 60 à 80%."
  },
  {
    "id": "q-cas-isch-1",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Un homme de 73 ans suivi pour fibrillation auriculaire non anticoagulée consulte aux urgences pour l'apparition brutale, il y a 4 heures, d'une douleur abdominale foudroyante péri-ombilicale, angoissante et intolérable, accompagnée de nausées et de 2 selles diarrhéiques. À l'examen clinique, le patient est agité et crie de douleur, sa tension est à 130/80 mmHg, son pouls est irrégulier à 120 bpm, mais son abdomen est souple, sans défense ni contracture, avec une discrète sensibilité profonde ('ventre déroutant de fausse bénignité'). Les lactates sanguins sont à 2,1 mmol/L (valeur limite). Quel diagnostic suspectez-vous immédiatement et quel examen demandez-vous en urgence absolue ?",
    "options": [
      "Infarctus du myocarde inférieur ; coronarographie d'emblée",
      "Ischémie mésentérique aiguë d'origine embolique (artère mésentérique supérieure) ; angioscanner abdomino-pelvien avec injection aux temps artériel et portal en extrême urgence",
      "Gastro-entérite aiguë virale ; traitement symptomatique par antidiarrhéiques",
      "Pancréatite aiguë bénigne ; échographie abdominale simple",
      "Dissection aortique type B ; IRM médullaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association fibrillation atriale non traitée + douleur abdominale brutale insoutenable contrastant avec un examen physique abdominal pauvre sans défense est la présentation pathognomonique de l'embolie artérielle mésentérique supérieure. L'angioscanner injecté est l'examen clé salvateur.",
    "clinicalPearl": "ACFA + douleur abdominale violente disproportionnée à la palpation = Angioscanner en urgence pour ischémie mésentérique."
  },
  {
    "id": "q-cas-isch-2",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Chez ce même patient, l'angioscanner injecté confirme l'arrêt du flux de produit de contraste au niveau de l'artère mésentérique supérieure distale avec conservation du rehaussement pariétal du grêle et absence de pneumatose ni d'épanchement péritonéal (stade d'ischémie réversible sans nécrose). Quelle est la stratégie thérapeutique de revascularisation urgente ?",
    "options": [
      "Surveillance armée sans aucun geste sous perfusion de paracétamol",
      "Revascularisation d'urgence par thrombo-aspiration percutanée / embolectomie percutanée sous contrôle radiologique ou embolectomie chirurgicale par sonde de Fogarty, associée à une héparinothérapie intraveineuse",
      "Laparotomie pour résection systématique de la totalité du grêle",
      "Mise sous aspirine orale seule et retour au domicile",
      "Pose d'un stent aortique sous-rénal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Au stade d'ischémie réversible sans signe péritonéal de gangrène, la revascularisation immédiate (embolectomie chirurgicale au cathéter de Fogarty ou thrombo-aspiration percutanée) permet de reperfuser le tube digestif et d'éviter la nécrose intestinale et le syndrome du grêle court.",
    "clinicalPearl": "Ischémie mésentérique sans nécrose = Revascularisation en urgence (Fogarty chirurgical ou thrombo-aspiration endovasculaire)."
  },
  {
    "id": "q-cas-isch-3",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Une femme de 32 ans sous contraception œstroprogestative, sans antécédents, consulte pour des douleurs abdominales d'aggravation progressive depuis 6 jours, associées à un fébricule à 38°C et des nausées. Le bilan biologique montre : plaquettes à 450 000/mm³, CRP à 65 mg/L, fonction rénale normale. Le scanner abdominal avec injection met en évidence un volumineux thrombus endoluminal obstructif dans le tronc porte s'étendant à la veine mésentérique supérieure avec épaississement œdémateux modéré des parois du grêle sans défaut de rehaussement ni pneumatose. Quel est le traitement de première ligne immédiat ?",
    "options": [
      "Laparotomie exploratrice immédiate pour résection intestinale",
      "Anticoagulation efficace immédiate par héparine de bas poids moléculaire (HBPM) à dose curative (ou HNF intraveineuse) avec arrêt définitif de la contraception hormonale",
      "Thrombolyse intraveineuse générale par rt-PA d'emblée",
      "Antibiothérapie exclusive sans anticoagulant",
      "Pose d'un filtre cave inférieur"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La thrombose veineuse mésentérique et portale aiguë sans nécrose relève d'une anticoagulation curative précoce par héparine, qui permet d'obtenir la recanalisation dans plus de 80% des cas et prévient l'extension ischémique.",
    "clinicalPearl": "Thrombose mésentérique veineuse sans péritonite = Anticoagulation curative immédiate par héparine."
  },
  {
    "id": "q-cas-isch-4",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un patient de 68 ans polyvasculaire (artériopathie oblitérante des membres inférieurs, coronaropathie) consulte pour un amaigrissement de 12 kg en 4 mois. Il explique qu'environ 20 minutes après chaque repas, il ressent de violentes crampes péri-ombilicales et épigastriques qui durent 2 heures, ce qui l'a conduit à réduire drastiquement ses portions alimentaires ('sitiophobie'). L'angioscanner aorto-mésentérique montre une sténose serrée calcifiée de 85% de l'ostium de l'artère mésentérique supérieure et une occlusion du tronc cœliaque avec une volumineuse arcade de Riolan de suppléance. Quel est le diagnostic et le traitement de choix ?",
    "options": [
      "Ulcère gastrique térébrant ; traitement par IPP forte dose",
      "Angor mésentérique (ischémie mésentérique chronique) ; revascularisation par angioplastie avec pose d'un stent couvert de l'artère mésentérique supérieure",
      "Cancer du pancréas non résécable ; chimiothérapie palliative",
      "Maladie cœliaque de l'adulte ; régime sans gluten strict",
      "Colopathie fonctionnelle spasmodique ; antispasmodiques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade douleurs post-prandiales + peur de s'alimenter (sitiophobie) + amaigrissement majeur chez un patient polyvasculaire avec sténoses pluri-tronculaires définit l'angor mésentérique. Le traitement de référence est la revascularisation endovasculaire (stent) de l'AMS.",
    "clinicalPearl": "Douleurs postprandiales + peur de manger + amaigrissement = Angor mésentérique -> Angioplastie/stent de l'AMS."
  },
  {
    "id": "q-cas-isch-5",
    "courseId": "crs-gastro-ischemie-intestinale",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Une femme de 74 ans hypertendue consulte pour l'apparition soudaine de crampes abdominales de la fosse iliaque gauche, suivies 2 heures plus tard par une envie pressante d'aller à la selle avec émission de selles liquides sanglantes rouge foncé abondantes. À l'examen clinique : TA 145/85 mmHg, pouls 80 bpm, apyrétique, sensibilité localisée du flanc gauche et de la fosse iliaque gauche sans défense. Le toucher rectal ramène du sang rouge sans masse palpable. La coloscopie prudente sans insufflation excessive visualise une muqueuse congestive, pétéchiale avec ulcérations longitudinales de l'angle gauche et du côlon descendant, le rectum étant strictement sain et indemne de toute lésion. Quel est le diagnostic le plus probable ?",
    "options": [
      "Rectocolite hémorragique en poussée sévère",
      "Colite ischémique transitoire (gangréneuse exclue par la clinique rassurante)",
      "Diverticulite aiguë purulente perforée",
      "Adénocarcinome rectal saignant",
      "Infarctus mésentérique complet de l'artère mésentérique supérieure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'apparition aiguë d'une douleur colique gauche suivie d'une débâcle sanglante chez une patiente âgée hypertendue, avec aspect endoscopique d'ulcérations longitudinales de l'angle gauche et respect parfait du rectum, est la présentation caractéristique de la colite ischémique.",
    "clinicalPearl": "Douleur colique gauche + diarrhée sanglante + respect endoscopique du rectum = Colite ischémique."
  }
];

export const ISCHEMIE_INTESTINALE_RESOURCES: CourseResource[] = [
  {
    "id": "res-isch-summary",
    "courseId": "crs-gastro-ischemie-intestinale",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Ischémie Intestinale et Mésentérique",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Ischémie Intestinale\n- **Ischémie mésentérique aiguë (Urgence vitale)** :\n  - *Étiologies* : Embolie artérielle cardiogène (ACFA, 50%), thrombose artérielle sur athérome (25%), thrombose veineuse mésentérique (thrombophilie, 15%), ischémie non occlusive NOMI (choc, bas débit, vasospasme).\n  - *Clinique précoce* : Douleur abdominale violente disproportionnée contrastant avec un abdomen faussement souple et indolore à la palpation.\n  - *Examen clé* : Angioscanner abdomino-pelvien triphasique immédiat.\n  - *Biologie* : Acidose lactique (lactates élevés = signe de souffrance tissulaire avancée).\n  - *Traitement* : Revascularisation d'extrême urgence (embolectomie Fogarty / thrombo-aspiration / stent) +/- laparotomie pour résection des zones nécrosées et 'second look' à 24-48h.\n- **Angor mésentérique (Chronique)** :\n  - Crampes post-prandiales (15-30 min après repas) + sitiophobie ('peur de manger') + amaigrissement majeur. Sténose >= 2 troncs sur 3. Traitement : angioplastie-stent de l'AMS.\n- **Colite ischémique** :\n  - Douleur aiguë du flanc gauche + débâcle sanglante (rectorragies). Zones carrefours : angle gauche (Griffiths) et charnière recto-sigmoïdienne (Sudeck). Respect constant du rectum.",
    "author": "Faculté de Médecine - Collège de Chirurgie Viscérale et Vasculaire"
  },
  {
    "id": "res-isch-pearls",
    "courseId": "crs-gastro-ischemie-intestinale",
    "type": "Astuce",
    "title": "Pièges & Perles : Ischémie Mésentérique",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Règle d'or** : Patient en ACFA + douleur abdominale aiguë violente avec ventre souple = Ischémie mésentérique aiguë jusqu'à preuve du contraire -> Angioscanner sans attendre.\n- ⚡ **Lactates normaux** n'éliminent pas une ischémie mésentérique débutante encore réversible.\n- ⚡ **Second look chirurgical** : indispensable à 24-48h pour épargner la longueur de grêle et éviter le syndrome du grêle court.",
    "author": "Commission Pédagogique"
  }
];
