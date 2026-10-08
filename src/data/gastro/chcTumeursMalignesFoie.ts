import { Question, CourseResource } from '../../types/medical';

export const CHC_TUMEURS_MALIGNES_FOIE_QUESTIONS: Question[] = [
  {
    "id": "q-chc-01",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans plus de 80% des cas, sur quel terrain sous-jacent se développe le carcinome hépatocellulaire (CHC) ?",
    "options": [
      "Foie sain sans anomalie",
      "Cirrhose hépatique quelle qu'en soit l'étiologie",
      "Stéatose simple non alcoolique",
      "Kyste hydatique calcifié",
      "Polypose adénomateuse familiale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le CHC se développe dans la très grande majorité des cas (80-90%) sur un foie de cirrhose, quelle qu'en soit l'origine (VHB, VHC, alcool, stéatohépatite métabolique MASH).",
    "clinicalPearl": "CHC = 80 à 90% sur cirrhose hépatique. Tout cirrhrotique doit bénéficier d'un dépistage semestriel."
  },
  {
    "id": "q-chc-02",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le protocole de dépistage recommandé du CHC chez tout patient cirrhotique ?",
    "options": [
      "Scanner hépatique triphasique tous les 2 ans",
      "Échographie hépatique tous les 6 mois couplée au dosage de l'alpha-fœtoprotéine (AFP)",
      "IRM hépatique annuelle systématique",
      "Ponction-biopsie hépatique annuelle",
      "Dosage isolé du CA 19-9 tous les 3 mois"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le dépistage semestriel par échographie abdominale (par un opérateur expérimenté) éventuellement associée au dosage de l'AFP est le standard de suivi de tout cirrhrotique.",
    "clinicalPearl": "Dépistage du CHC chez le cirrhotique = Échographie hépatique tous les 6 mois (+/- AFP)."
  },
  {
    "id": "q-chc-03",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel aspect scanographique typique caractérise un CHC sur foie de cirrhose (critères non invasifs de Barcelone/LI-RADS) ?",
    "options": [
      "Prise de contraste périphérique en mottes avec remplissage centripète tardif",
      "Hyperrehaussement intense au temps artériel ('wash-in') suivi d'un lavage au temps portal/tardif ('wash-out')",
      "Hypodensité constante à tous les temps sans aucun rehaussement",
      "Rehaussement exclusif au temps tardif sans prise artérielle",
      "Lésion liquidienne anéchogène sans paroi"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le profil hémodynamique typique du CHC est lié à sa vascularisation néoformée purement artérielle : wash-in précoce au temps artériel, puis wash-out au temps portal ou tardif.",
    "clinicalPearl": "Critères diagnostiques non invasifs du CHC sur cirrhose : wash-in artériel + wash-out portal ou tardif."
  },
  {
    "id": "q-chc-04",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Chez un patient cirrhotique connu, pour quelle taille de nodule suspect présentant un profil typique en imagerie quadriphasique le diagnostic peut-il être affirmé SANS biopsie ?",
    "options": [
      "Nodule < 5 mm",
      "Nodule >= 10 mm (1 cm)",
      "Nodule >= 5 cm uniquement",
      "Aucun, la biopsie est toujours formellement obligatoire",
      "Nodule liquidien pur"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Selon les conférences de consensus (EASL/AASLD), un nodule >= 1 cm sur foie de cirrhose présentant un comportement typique (wash-in + wash-out) sur une imagerie dynamique (TDM ou IRM) permet d'affirmer le CHC sans preuve histologique.",
    "clinicalPearl": "Nodule cirrhotique >= 1 cm + profil wash-in/wash-out = diagnostic certain de CHC sans biopsie."
  },
  {
    "id": "q-chc-05",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Le marqueur tumoral sérique le plus utilisé dans la surveillance et l'orientation du CHC est :",
    "options": [
      "L'ACE (Antigène Carcino-Embryonnaire)",
      "L'alpha-fœtoprotéine (AFP)",
      "Le CA 19-9",
      "Le PSA",
      "La calcitonine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'AFP est le marqueur tumoral du CHC. Un taux > 400 ng/mL est hautement spécifique, mais une valeur normale n'élimine aucunement le diagnostic.",
    "clinicalPearl": "AFP > 400 ng/mL = très forte valeur prédictive positive de CHC chez le cirrhotique."
  },
  {
    "id": "q-chc-06",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle classification pronostique et thérapeutique est la plus largement validée et utilisée pour le CHC dans le monde ?",
    "options": [
      "Classification de Child-Pugh seule",
      "Score MELD seul",
      "Classification BCLC (Barcelona Clinic Liver Cancer)",
      "Classification de Dukes",
      "Score de Ranson"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La classification BCLC intègre l'extension tumorale, la fonction hépatique sous-jacente (score de Child-Pugh) et l'état général (Performance Status de l'OMS) pour guider le choix thérapeutique.",
    "clinicalPearl": "BCLC = Tumeur + Fonction hépatique (Child) + État général (PS) : guide thérapeutique de référence."
  },
  {
    "id": "q-chc-07",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Selon les critères de Milan, quelle est la limite pour poser l'indication d'une transplantation hépatique dans le CHC ?",
    "options": [
      "Nodule unique <= 5 cm, ou jusqu'à 3 nodules <= 3 cm, sans invasion vasculaire ni métastase",
      "Nodule unique <= 10 cm avec ganglion satellite",
      "Jusqu'à 5 nodules de moins de 5 cm avec thrombose portale partielle",
      "Tout nodule quel que soit le nombre si l'AFP < 100 ng/mL",
      "Tumeur infiltrante diffuse avec Child A"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Critères de Milan pour la greffe : nodule unique <= 5 cm OU <= 3 nodules chacun <= 3 cm, en l'absence d'invasion vasculaire macroscopique et de métastases extra-hépatiques.",
    "clinicalPearl": "Critères de Milan pour transplantation : 1 nodule <= 5 cm OU 2-3 nodules <= 3 cm, sans envahissement vasculaire ni métastase."
  },
  {
    "id": "q-chc-08",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement curatif percutané par destruction thermique est indiqué pour un nodule de CHC unique <= 3 cm chez un patient cirrhotique Child A non opérable ?",
    "options": [
      "Chimioembolisation transartérielle (TACE)",
      "Radiofréquence percutanée ou micro-ondes",
      "Radiothérapie externe conformationnelle",
      "Alcoolisation à l'éthanol à haute dose",
      "Hémicolonectomie droite"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La thermoablation percutanée (radiofréquence ou micro-ondes) permet d'obtenir un taux de nécrose complète équivalent à la chirurgie pour les nodules de moins de 3 cm.",
    "clinicalPearl": "Nodule unique < 3 cm non résécable = Radiofréquence ou Micro-ondes (alternative curative équivalente)."
  },
  {
    "id": "q-chc-09",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la principale contre-indication vasculaire formelle à la résection chirurgicale d'un CHC ?",
    "options": [
      "Une stéatose modérée",
      "L'envahissement tumoral ou la thrombose néoplasique du tronc porte ou de ses branches principales",
      "Une varice œsophagienne stade 1 sans saignement",
      "Un antécédent d'ictère transitoire résolu",
      "Un nodule sous-capsulaire antérieur"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La thrombose portale néoplasique (macro-invasion vasculaire) contre-indique la résection chirurgicale et la transplantation (stade avancé BCLC-C).",
    "clinicalPearl": "Thrombose porte tumorale = contre-indication chirurgicale absolue = stade avancé BCLC-C."
  },
  {
    "id": "q-chc-10",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans le stade intermédiaire (BCLC-B : volumineux nodule ou multinodulaire sans invasion vasculaire ni métastase, Child A-B, PS 0), quel est le traitement de référence ?",
    "options": [
      "Transplantation hépatique en urgence",
      "Chimioembolisation transartérielle (TACE)",
      "Chimiothérapie systémique par 5-FU",
      "Résection hépatique étendue par hépatectomie élargie",
      "Abstention thérapeutique complète"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La chimioembolisation intra-artérielle lipiodolée (TACE) est le traitement de référence du stade intermédiaire BCLC-B, associant chimiothérapie locale et ischémie sélective de la tumeur.",
    "clinicalPearl": "BCLC-B (multinodulaire sans thrombose ni métastase) = Chimioembolisation transartérielle (TACE)."
  },
  {
    "id": "q-chc-11",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel est le traitement systémique de première ligne recommandé dans le CHC avancé (BCLC-C avec thrombose porte ou métastases) ayant révolutionné le pronostic ?",
    "options": [
      "Sorbafenib en monothérapie exclusive",
      "Association Atezolizumab (anti-PD-L1) + Bevacizumab (anti-VEGF)",
      "5-FU + Oxaliplatine",
      "Gemcitabine + Cisplatine",
      "Immunothérapie par BCG intraveineux"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association Atezolizumab + Bevacizumab (essai IMbrave150) a supplanté le sorafenib en première ligne du CHC avancé chez les patients sans contre-indication au bevacizumab.",
    "clinicalPearl": "1ère ligne systémique CHC avancé = Atezolizumab + Bevacizumab (nécessite une FOGD préalable pour éradiquer les VO)."
  },
  {
    "id": "q-chc-12",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle précaution endoscopique formelle doit être prise avant d'initier un traitement par Bevacizumab chez un cirrhotique atteint de CHC ?",
    "options": [
      "Réalisation d'une biopsie duodénale systématique",
      "Recherche et ligature préventive de varices œsophagiennes à haut risque de rupture",
      "Pose d'une endoprothèse biliaire",
      "Ampullectomie préventive",
      "Mucosectomie gastrique systématique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le bevacizumab (anti-VEGF) expose à un risque majeur d'hémorragie digestive. Une FOGD récente avec ligature/éradication des varices œsophagiennes est obligatoire avant toute instauration.",
    "clinicalPearl": "Avant Bevacizumab : FOGD obligatoire pour dépister et traiter les varices œsophagiennes à risque hémorragique."
  },
  {
    "id": "q-chc-13",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La rupture spontanée d'un volumineux nodule de CHC sous-capsulaire se manifeste cliniquement par :",
    "options": [
      "Un tableau d'hémopéritoine avec choc hémorragique et douleur brutale de l'hypochondre droit",
      "Une pancréatite aiguë nécrosante",
      "Un syndrome occlusif fébrile",
      "Une anurie brutale par nécrose tubulaire",
      "Une diarrhée profuse glaireuse"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La rupture de CHC sous-capsulaire est une complication gravissime réalisant un hémopéritoine brutal avec instabilité hémodynamique nécessitant une hémostase par embolisation artérielle en urgence.",
    "clinicalPearl": "Rupture de CHC = douleur aiguë de l'hypochondre droit + collapsus cardiovasculaire + hémopéritoine."
  },
  {
    "id": "q-chc-14",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle toxine environnementale présente dans les céréales et arachides moisies est un puissant co-cancérogène hépatotoxique avec le VHB ?",
    "options": [
      "L'ochratoxine A",
      "L'aflatoxine B1 (produite par Aspergillus flavus)",
      "La patuline",
      "La toxine botulique",
      "La zéaralénone"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'aflatoxine B1 induit une mutation spécifique du codon 249 du gène suppresseur de tumeur TP53, agissant en synergie avec le virus de l'hépatite B.",
    "clinicalPearl": "Aflatoxine B1 + VHB = mutation p53 (codon 249) = risque majeur de CHC en zone intertropicale."
  },
  {
    "id": "q-chc-15",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel examen permet de mesurer de façon non invasive la dureté du parenchyme hépatique et d'évaluer la fibrose pour stratifier le risque de CHC ?",
    "options": [
      "Scintigraphie aux hématies marquées",
      "Élastométrie impulsionnelle hépatique (FibroScan)",
      "Transit du grêle",
      "Cholangiographie rétrograde",
      "Radiographie de l'abdomen sans préparation"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le FibroScan mesure l'élasticité hépatique en kilopascals (kPa). Une valeur > 12,5 à 14 kPa évoque une cirrhose confirmée nécessitant l'entrée dans le programme de dépistage du CHC.",
    "clinicalPearl": "FibroScan > 12,5 kPa = cirrhose = dépistage semestriel du CHC par échographie."
  },
  {
    "id": "q-chc-16",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans l'évaluation de la résécabilité hépatique chez le cirrhotique, quel score de Child-Pugh est le seul autorisant formellement une hépatectomie partielle réglée ?",
    "options": [
      "Child-Pugh A",
      "Child-Pugh B à 8 points",
      "Child-Pugh B à 9 points",
      "Child-Pugh C",
      "Le score de Child n'intervient pas dans la décision"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Seuls les patients au stade Child-Pugh A (sans ascite, bilirubine normale, TP > 50-70%, sans encéphalopathie) et sans hypertension portale significative peuvent supporter une résection hépatique.",
    "clinicalPearl": "Résection hépatique du CHC = strictement limitée aux patients Child-Pugh A sans hypertension portale sévère."
  },
  {
    "id": "q-chc-17",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel est le risque principal associé à la ponction-biopsie d'un nodule hépatique suspect de CHC ?",
    "options": [
      "Le déclenchement d'une pancréatite aiguë",
      "L'essaimage tumoral néoplasique le long du trajet de ponction ('needle-tract seeding')",
      "La perforation digestive systématique",
      "L'insuffisance rénale aiguë immédiate",
      "Une thyroïdite aiguë"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le risque d'ensemencement tumoral le long du trajet de ponction (1 à 3%) fait récuser la biopsie lorsque les critères non invasifs en imagerie sont réunis sur foie cirrhotique.",
    "clinicalPearl": "Biopsie d'un CHC = risque d'ensemencement péritonéal/pariétal (seeding) : évitée si critères radiologiques typiques."
  },
  {
    "id": "q-chc-18",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle lésion hépatique bénigne très fréquente chez la jeune femme sous contraception orale ne présente aucun potentiel de dégénérescence en CHC et comporte un aspect en 'roue de charrette' en imagerie ?",
    "options": [
      "L'adénome hépatocellulaire",
      "L'hyperplasie nodulaire focale (HNF)",
      "L'angiome caverneux hépatique",
      "Le kyste biliaire simple",
      "L'abcès à amibes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'HNF est une lésion bénigne d'origine vasculaire avec cicatrice fibreuse stellaire centrale sans risque de malignité, ne nécessitant pas d'exérèse si asymptomatique.",
    "clinicalPearl": "Hyperplasie Nodulaire Focale (HNF) = cicatrice stellaire centrale + aucun potentiel malin."
  },
  {
    "id": "q-chc-19",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel type de métastases hépatiques est le plus fréquemment rencontré en pratique digestive quotidienne ?",
    "options": [
      "Métastases de cancer du rein",
      "Métastases de mélanome",
      "Métastases synchrones ou métachrones d'adénocarcinome colorectal",
      "Métastases de cancer du sein",
      "Métastases d'ostéosarcome"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le foie est le premier filtre hématogène du sang portal : les métastases de cancer colorectal sont de loin les tumeurs malignes secondaires hépatiques les plus fréquentes.",
    "clinicalPearl": "Métastases hépatiques les plus fréquentes = cancer colorectal (drainage portal direct)."
  },
  {
    "id": "q-chc-20",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie biologique de la formule sanguine peut constituer un syndrome paranéoplasique révélateur d'un CHC par hypersécrétion d'érythropoïétine ?",
    "options": [
      "Une leucopénie sévère",
      "Une polyglobulie",
      "Une thrombopénie périphérique",
      "Une aplasie médullaire",
      "Une anémie hémolytique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La polyglobulie paranéoplasique est secondaire à la synthèse anormale d'EPO par les hépatocytes tumoraux dans le CHC.",
    "clinicalPearl": "Syndromes paranéoplasiques du CHC : polyglobulie (EPO), hypoglycémie, hypercalcémie, hypercholestérolémie."
  },
  {
    "id": "q-chc-21",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Chez un patient non cirrhotique développant un CHC sur foie sain, quelle étiologie virale directe (intégration du génome viral dans l'ADN hôte) peut être responsable ?",
    "options": [
      "Le virus de l'hépatite A",
      "Le virus de l'hépatite B (VHB)",
      "Le virus de l'hépatite E",
      "Le cytomégalovirus (CMV)",
      "Le virus d'Epstein-Barr"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le virus de l'hépatite B (ADN virus) a un pouvoir oncogène direct par intégration de son ADN (protéine HBx) et peut induire un CHC même en l'absence de cirrhose constituée.",
    "clinicalPearl": "Le VHB est le seul virus hépatotrope capable de provoquer un CHC sur foie NON cirrhotique."
  },
  {
    "id": "q-chc-22",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la définition anatomique d'une hépatectomie droite réglée ?",
    "options": [
      "Résection des segments II et III",
      "Résection des segments V, VI, VII et VIII (selon Couinaud)",
      "Résection du segment I seul (lobe de Spiegel)",
      "Résection des segments II, III et IV",
      "Résection exclusive du lit vésiculaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hépatectomie droite anatomique emporte le foie droit, constitué des segments V, VI, VII et VIII séparés du foie gauche par la scissure principale (veine sus-hépatique moyenne).",
    "clinicalPearl": "Hépatectomie droite = segments V, VI, VII et VIII (foie droit anatomique de Couinaud)."
  },
  {
    "id": "q-chc-23",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle complication d'un kyste hydatique hépatique peut simuler une lésion néoplasique hépatique compliquée avec ictère fluctuant ?",
    "options": [
      "La suppuration intrakystique avec rupture dans les voies biliaires",
      "L'invagination intestinale",
      "L'appendicite rétro-caecale",
      "Une pancréatite aiguë lithiasique pure",
      "Une torsion testiculaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'ouverture du kyste hydatique dans les voies biliaires entraîne des crises de colique hépatique fébriles avec ictère et émission de vésicules par le sphincter d'Oddi, pouvant égarer le diagnostic.",
    "clinicalPearl": "Triade rupture biliaire hydatique : douleur de l'hypochondre droit + ictère + angiocholite récidivante."
  },
  {
    "id": "q-chc-24",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est l'objectif du volume hépatique résiduel futur (VHRF) requis avant une hépatectomie majeure sur foie sain vs sur foie cirrhotique ?",
    "options": [
      "10% sur foie sain / 20% sur cirrhose",
      "Au moins 25-30% sur foie sain / au moins 40-50% sur foie cirrhotique Child A",
      "50% sur foie sain / 10% sur cirrhose",
      "Le volume hépatique n'a aucune importance",
      "90% dans les deux cas"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour éviter l'insuffisance hépatocellulaire post-hépatectomie ('small-for-size'), le volume résiduel minimal doit être de 25-30% sur foie sain, et de 40-50% sur foie pathologique (cirrhose Child A ou chimiothérapie lourde).",
    "clinicalPearl": "Foie résiduel minimal obligatoire : >= 25-30% sur foie sain, >= 40-50% sur foie de cirrhose."
  },
  {
    "id": "q-chc-25",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel médicament antiviral d'action directe (AAD) guérit l'infection chronique par le VHC chez plus de 95% des patients, réduisant considérablement le risque ultérieur de CHC ?",
    "options": [
      "Interféron pégylé en monothérapie",
      "Association d'antiviraux d'action directe pangenotypiques (ex: Sofosbuvir/Velpatasvir)",
      "Lamivudine seule",
      "Ribavirine à forte dose",
      "Ganciclovir intraveineux"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les AAD pangénotypiques permettent une réponse virologique soutenue (> 95%), stoppant l'inflammation et diminuant significativement l'incidence du CHC, bien qu'un dépistage doive persister si la cirrhose était déjà constituée.",
    "clinicalPearl": "Éradication du VHC par AAD : diminue le risque de CHC, mais la surveillance semestrielle reste obligatoire si cirrhose."
  },
  {
    "id": "q-cas-chc-1",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Mr S., 56 ans, suivi pour cirrhose post-VHC (Child-Pugh A5). Dans le cadre de son suivi de dépistage semestriel, l'échographie abdominale découvre un nodule hypoéchogène de 22 mm dans le segment VI. L'IRM hépatique injectée met en évidence une prise de contraste intense au temps artériel avec un lavage précoce (wash-out) franc au temps portal. L'AFP est à 85 ng/mL. Quelle est l'attitude diagnostique appropriée ?",
    "options": [
      "Réaliser une ponction-biopsie hépatique du nodule sous guidage échographique",
      "Conclure avec certitude au diagnostic de CHC sans biopsie sur les critères d'imagerie typiques",
      "Répéter l'IRM dans 6 mois pour surveiller l'évolution",
      "Doser le CA 19-9 et demander une coloscopie",
      "Prescrire un traitement antibiotique d'épreuve pour éliminer un abcès"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Sur foie de cirrhose, un nodule >= 10 mm présentant le profil hémodynamique caractéristique (wash-in artériel et wash-out portal) répond aux critères non invasifs validés de CHC : la biopsie est inutile et formellement non recommandée.",
    "clinicalPearl": "Nodule cirrhotique > 1 cm avec wash-in et wash-out = diagnostic certain de CHC sans biopsie."
  },
  {
    "id": "q-cas-chc-2",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Chez ce même patient Mr S., le bilan montre : absence d'hypertension portale significative (pas de varices à la FOGD, plaquettes à 175 000/mm³), excellente fonction hépatique (Child A, bilirubine 12 µmol/L, TP 85%), nodule unique sous-capsulaire de 22 mm du segment VI facilement accessible, pas d'envahissement vasculaire ni d'adénopathie (BCLC stade 0/A). Quelle est la meilleure option thérapeutique à visée curative ?",
    "options": [
      "Résection chirurgicale anatomique (hépatectomie réglée du segment VI / segmentectomie)",
      "Chimioembolisation transartérielle palliative",
      "Chimiothérapie par Atezolizumab + Bevacizumab",
      "Transplantation hépatique en urgence immédiate",
      "Abstention thérapeutique et surveillance rapprochée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Chez un patient Child A sans hypertension portale significative présentant un nodule unique périphérique, la résection chirurgicale (ou la thermoablation par radiofréquence) est un traitement curatif de premier choix avec d'excellents résultats.",
    "clinicalPearl": "Nodule unique + Child A + sans hypertension portale = résection hépatique (ou radiofréquence) à visée curative."
  },
  {
    "id": "q-cas-chc-3",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Mr D., 60 ans, cirrhotique lié à l'alcool (Child B7, score MELD 14), présente à l'imagerie 2 nodules hépatiques : un nodule de 2,8 cm dans le segment IV et un nodule de 2,2 cm dans le segment II. Il n'y a pas d'invasion vasculaire ni de métastase extra-hépatique. Son sevrage alcoolique est complet et attesté depuis plus de 9 mois. Quel traitement curatif offrant le meilleur taux de survie globale à long terme doit être discuté en priorité ?",
    "options": [
      "Hépatectomie élargie gauche",
      "Inscription sur liste de greffe pour transplantation hépatique (respect des critères de Milan)",
      "Chimiothérapie intraveineuse par Sorafenib",
      "Radiothérapie externe globale du foie",
      "Mise en place d'un TIPS exclusif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le patient remplit parfaitement les critères de Milan (<= 3 nodules tous <= 3 cm, sans envahissement vasculaire ni métastase). Compte tenu de la cirrhose Child B non opérable par résection simple, la transplantation hépatique traite à la fois le cancer et la maladie cirrhotique sous-jacente.",
    "clinicalPearl": "Critères de Milan respectés + cirrhose Child B = transplantation hépatique optimale (traite tumeur et cirrhose)."
  },
  {
    "id": "q-cas-chc-4",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un homme de 65 ans porteur d'un CHC BCLC-B multinodulaire (4 nodules dans les deux lobes, le plus volumineux mesurant 4,5 cm, sans thrombose portale, Child A6, PS 0) a déjà bénéficié de deux séances de chimioembolisation artérielle (TACE). L'imagerie de contrôle montre une persistance tumorale active et l'apparition d'un nouveau nodule. Quelle est la démarche thérapeutique recommandée selon les recommandations actuelles ?",
    "options": [
      "Insister avec une 3ème TACE même si réfractaire",
      "Passage au traitement systémique de première ligne (Atezolizumab + Bevacizumab)",
      "Résection chirurgicale en urgence",
      "Proposer des soins palliatifs exclusifs sans traitement oncologique",
      "Radiothérapie hépatique corps entier"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En cas d'échec ou d'échappement (réfractarité) à la chimioembolisation, la poursuite de la TACE altérerait inutilement la fonction hépatique : il faut basculer vers le traitement systémique (immunothérapie Atezolizumab + Bevacizumab).",
    "clinicalPearl": "Réfractarité à la TACE = bascule vers le traitement systémique de 1ère ligne (Atezolizumab + Bevacizumab)."
  },
  {
    "id": "q-cas-chc-5",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un patient de 52 ans atteint de cirrhose post-VHB décompensée se présente aux urgences pour collapsus hémodynamique brutal, sueurs profuses, anémie aiguë (hémoglobine passant de 12 à 6,5 g/dL) et contracture de l'hypochondre droit. L'échographie abdominale d'urgence au lit du malade montre un volumineux épanchement liquidien péritonéal anéchogène avec caillots et un nodule hépatique rompu de 7 cm. Quel est le geste d'hémostase de choix en urgence ?",
    "options": [
      "Laparotomie en urgence pour hépatectomie droite",
      "Artériographie hépatique avec embolisation sélective de la branche nourricière du nodule",
      "Ponction d'ascite évacuatrice de 5 litres",
      "Pose d'une sonde de Blackmore d'emblée",
      "Prescription de corticoïdes à forte dose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La rupture de CHC avec hémopéritoine est une urgence vitale. L'embolisation artérielle hépatique sous radiologie interventionnelle est la méthode d'hémostase de référence, supérieure à la chirurgie d'hémostase qui comporte une mortalité opératoire prohibitive sur foie de cirrhose décompensée.",
    "clinicalPearl": "Rupture de CHC avec hémopéritoine = Artério-embolisation hépatique en urgence absolue."
  }
];

export const CHC_TUMEURS_MALIGNES_FOIE_RESOURCES: CourseResource[] = [
  {
    "id": "res-chc-summary",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Carcinome Hépatocellulaire (CHC)",
    "contentMarkdown": "### 🎯 Points Clés : Carcinome Hépatocellulaire (CHC)\n- **Terrain** : 80-90% sur foie de cirrhose (VHB, VHC, alcool, MASH/stéatohépatite métabolique). Dépistage semestriel par échographie hépatique.\n- **Diagnostic non invasif (EASL)** : Nodule >= 1 cm sur foie cirrhotique avec hyperrehaussement artériel (wash-in) et lavage au temps portal/tardif (wash-out) sur TDM ou IRM quadriphasique -> Diagnostic certain sans biopsie.\n- **Classification BCLC** :\n  - *Stade très précoce/précoce (0/A)* : nodule unique ou <= 3 nodules <= 3 cm, Child A-B, PS 0 -> Résection chirurgicale, radiofréquence percutanée ou transplantation (Milan : 1 nodule <= 5 cm ou 3 nodules <= 3 cm).\n  - *Stade intermédiaire (B)* : multinodulaire, sans thrombose ni métastase -> Chimioembolisation intra-artérielle (TACE).\n  - *Stade avancé (C)* : thrombose portale ou métastases, PS 1-2 -> Traitement systémique (Atezolizumab + Bevacizumab en 1ère ligne).\n  - *Stade terminal (D)* : Child C, PS > 2 -> Soins de support.",
    "author": "Faculté de Médecine - Collège d’Hépatologie"
  },
  {
    "id": "res-chc-pearls",
    "courseId": "crs-gastro-chc-tumeurs-malignes-foie",
    "type": "Astuce",
    "title": "Perles de Diagnostic & Prise en Charge du CHC",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Biopsie hépatique** : non nécessaire si critères d'imagerie typiques réunis sur cirrhose. Risque d'ensemencement tumoral pariétal (seeding).\n- ⚡ **Avant Bevacizumab** : FOGD impérative pour ligaturer les varices œsophagiennes à haut risque hémorragique.\n- ⚡ **Rupture hémorragique tumorale** : hémopéritoine aigu -> geste salvateur = embolisation radiologique sélective.",
    "author": "Commission Pédagogique"
  }
];
