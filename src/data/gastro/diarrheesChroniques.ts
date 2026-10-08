import { Question, CourseResource } from '../../types/medical';

export const DIARRHEES_CHRONIQUES_QUESTIONS: Question[] = [
  {
    "id": "q-dc-01",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Par quelle définition sémiologique objective quantifie-t-on une diarrhée chronique chez l'adulte ?",
    "options": [
      "Plus de 2 selles par jour depuis 1 semaine",
      "Émission quotidienne de plus de 3 selles molles à liquides par jour (poids de selles > 200 à 300 g/24h) évoluant depuis plus de 4 semaines (1 mois)",
      "Une selle liquide par jour le matin",
      "Une fausse diarrhée de constipation avec fécalome",
      "Une alternance diarrhée-constipation durant moins de 15 jours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La diarrhée chronique est définie par une augmentation du débit fécal (> 200-300 g/jour) ou une consistance anormalement liquide de plus de 3 selles quotidiennes pendant au moins 4 semaines.",
    "clinicalPearl": "Diarrhée chronique = poids de selles > 200-300 g/24h évoluant depuis plus de 4 semaines (1 mois)."
  },
  {
    "id": "q-dc-02",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel calcul biologique fécal permet de différencier avec certitude une diarrhée osmotique d'une diarrhée sécrétoire ?",
    "options": [
      "Le pH urinaire",
      "Le trou osmotique fécal (Osmolarité fécale estimée 290 - 2 x [Na+ fécal + K+ fécal])",
      "Le rapport urée/créatinine",
      "La clairance de la créatinine",
      "Le taux de bilirubine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Trou osmotique = 290 - 2 x (Na+ + K+). Un trou osmotique élevé (> 50-100 mOsm/kg) définit une diarrhée osmotique (substance osmotiquement active non absorbée). Un trou osmotique bas (< 50 mOsm/kg) signe une diarrhée sécrétoire.",
    "clinicalPearl": "Trou osmotique fécal : > 100 mOsm/kg = Diarrhée osmotique ; < 50 mOsm/kg = Diarrhée sécrétoire."
  },
  {
    "id": "q-dc-03",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la caractéristique fondamentale d'une diarrhée purement OSMOTIQUE lors de l'épreuve de jeûne strict de 24 à 48 heures ?",
    "options": [
      "Elle persiste à l'identique avec le même débit",
      "Elle s'arrête complètement ou diminue très nettement dès l'arrêt des prises alimentaires",
      "Elle devient sanglante",
      "Elle s'accompagne d'une fièvre élevée",
      "Elle déclenche une colique néphrétique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La diarrhée osmotique est liée à la présence d'un soluté non absorbé dans la lumière qui retient l'eau : le jeûne strict tarit immédiatement la diarrhée.",
    "clinicalPearl": "Diarrhée osmotique : s'arrête au jeûne strict (ex: déficit en lactase, laxatifs osmotiques)."
  },
  {
    "id": "q-dc-04",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la diarrhée SÉCRÉTOIRE, quel comportement observe-t-on lors de l'épreuve de jeûne ?",
    "options": [
      "Arrêt immédiat en moins de 2 heures",
      "Persistance d'un débit fécal liquidien abondant et profus (> 500-1000 mL/24h) malgré le jeûne strict, avec risque de déshydratation hypokaliémique",
      "Transformation en constipation sévère",
      "Guérison définitive",
      "Apparition de glaires sanglantes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La diarrhée sécrétoire résulte d'une sécrétion active d'eau et d'ions par les entérocytes : elle est abondante, aqueuse, indolore, et persiste au jeûne.",
    "clinicalPearl": "Diarrhée sécrétoire : persiste au jeûne avec débit fécale abondant et hypokaliémie (ex: adénome villeux, VIPome)."
  },
  {
    "id": "q-dc-05",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la cause étiologique la plus fréquente de diarrhée motrice chronique (transit accéléré) sans lésion organique ?",
    "options": [
      "La maladie de Whipple",
      "Le syndrome de l'intestin irritable à prédominance diarrhée (SII-D)",
      "Le lymphome intestinal",
      "Le déficit en facteur intrinsèque",
      "L'adénocarcinome colique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome de l'intestin irritable avec diarrhée motrice (selles post-prandiales matinales avec aliments non digérés, calmée la nuit, sans retentissement pondéral) est la cause fonctionnelle la plus fréquente.",
    "clinicalPearl": "Diarrhée motrice fonctionnelle : SII-D (selles matinales et post-prandiales, fécalomes/aliments visibles, respecte le sommeil)."
  },
  {
    "id": "q-dc-06",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel test respiratoire fonctionnel mesure le temps de transit oro-caecal pour affirmer une accélération de la motricité grêlique ou une pullulation bactérienne ?",
    "options": [
      "Le test au rouge de carmin",
      "Le test respiratoire à l'hydrogène expiré (H2-breath test) au lactulose ou au glucose",
      "Le tubage gastrique",
      "Le test respiratoire à l'urée 13C",
      "La manométrie anorectale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le test à l'hydrogène après ingestion de lactulose évalue le transit oro-caecal (accéléré si pic < 60 min). Le test au glucose dépiste une pullulation bactérienne du grêle (pic précoce d'H2).",
    "clinicalPearl": "Test respiratoire à l'hydrogène (H2) au lactulose/glucose : explore transit grêlique et pullulation microbienne."
  },
  {
    "id": "q-dc-07",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle cause endocrinienne hormonale classique de diarrhée motrice s'accompagne d'un amaigrissement avec appétit conservé, tachycardie et thermophobie ?",
    "options": [
      "L'hypothyroïdie fruste",
      "L'hyperthyroïdie (maladie de Basedow ou nodule toxique)",
      "L'insuffisance antéhypophysaire",
      "Le syndrome de Cushing",
      "La maladie d'Addison pure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hyperthyroïdie accélère le transit gastro-intestinal, responsable d'une diarrhée motrice avec selles impérieuses post-prandiales, amaigrissement rapide et tachycardie sinusale.",
    "clinicalPearl": "Diarrhée motrice + amaigrissement avec polyphagie + tachycardie = doser la TSH (hyperthyroïdie)."
  },
  {
    "id": "q-dc-08",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la diarrhée par MALABSORPTION, quelle anomalie fécale quantitative affirme formellement le défaut d'assimilation des lipides ?",
    "options": [
      "Une stéatorrhée > 6 g/24h (mesurée sur recueil des selles de 3 jours sous régime standard à 100 g de graisses/j)",
      "La présence de mucus pur",
      "Un pH fécal basique",
      "La présence de cristaux d'oxalate",
      "Un taux de sodium fécal nul"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La stéatorrhée supérieure à 6 g par 24h affirme la malabsorption lipidique. Les selles sont typiquement volumineuses, graisseuses, décolorées, fétides, flottant sur l'eau et collant à la faïence.",
    "clinicalPearl": "Malabsorption des graisses = Stéatorrhée > 6 g/j (selles grasses, mastic, flottantes et nauséabondes)."
  },
  {
    "id": "q-dc-09",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelles sont les deux grandes catégories étiologiques de malabsorption selon le mécanisme biochimique ?",
    "options": [
      "Malabsorption bactérienne et virale",
      "Maldigestion intraluminale (déficit en enzymes pancréatiques exocrines ou déficit en sels biliaires) et malabsorption pariétale entérocytaire (atteinte de la muqueuse du grêle : maladie cœliaque, résection, Whipple)",
      "Malabsorption motrice et psychogène",
      "Malabsorption par obstacle vasculaire et respiratoire",
      "Malabsorption aiguë et subaiguë"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La maldigestion (phase luminale) est liée à un défaut de lipolyse (insuffisance pancréatique exocrine) ou de solubilisation micellaire (cholestase). La malabsorption vraie (phase muqueuse) résulte d'une lésion de la paroi du grêle.",
    "clinicalPearl": "Maldigestion (pancréas exocrine, sels biliaires) vs Malabsorption muqueuse (maladie cœliaque, résection grêle)."
  },
  {
    "id": "q-dc-10",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La maladie de Whipple (infection chronique systémique rare à Tropheryma whipplei) se caractérise histologiquement sur les biopsies duodénales par :",
    "options": [
      "Une nécrose caséeuse diffuse",
      "Une infiltration de la lamina propria par de volumineux macrophages spumeux PAS positifs contenant des bacilles en microscopie électronique",
      "Une atrophie avec absence totale de macrophages",
      "Des inclusions virales",
      "Une métaplasie malpighienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La coloration à l'acide périodique de Schiff (PAS) met en évidence des macrophages bourrés de débris bactériens de Tropheryma whipplei dans la muqueuse duodénale.",
    "clinicalPearl": "Maladie de Whipple : macrophages spumeux PAS (+) dans la muqueuse duodénale (PCR Tropheryma whipplei positive)."
  },
  {
    "id": "q-dc-11",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle manifestation extra-digestive articulaire précède fréquemment de plusieurs années les signes digestifs dans la maladie de Whipple ?",
    "options": [
      "Une arthrose dégénérative de la hanche",
      "Des polyarthralgies ou oligoarthrites périphériques séronégatives récidivantes et migratrices",
      "Une goutte tophacée aiguë",
      "Un rhumatisme articulaire aigu",
      "Une spondylose lombaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les arthrites migratrices récurrentes non destructrices précèdent souvent de 5 à 10 ans la diarrhée chronique, l'amaigrissement, les adénopathies et les atteintes neurologiques/cardiaques.",
    "clinicalPearl": "Maladie de Whipple : arthralgies périphériques migratrices pendant des années AVANT l'apparition de la diarrhée."
  },
  {
    "id": "q-dc-12",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement antibiotique prolongé est requis pour traiter et guérir la maladie de Whipple et prévenir les rechutes neurologiques ?",
    "options": [
      "Amoxicilline 5 jours",
      "Traitement d'attaque par Ceftriaxone IV pendant 2 semaines, suivi d'un traitement d'entretien par Cotrimoxazole (Triméthoprime-Sulfaméthoxazole) per os pendant 1 an",
      "Métronidazole seul pendant 10 jours",
      "Gentamicine en aérosol",
      "Pénicilline V pendant 3 jours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le protocole de référence associe Ceftriaxone IV 2g/j pendant 14 jours puis Cotrimoxazole oral pendant au moins 12 mois avec franchissement de la barrière hémato-encéphalique.",
    "clinicalPearl": "Traitement de Whipple : Ceftriaxone IV 15 jours puis Cotrimoxazole oral pendant 1 an."
  },
  {
    "id": "q-dc-13",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la diarrhée chronique par entéropathie exsudative (perte excessive de protéines sériques dans la lumière digestive), quel test biologique fécal confirme la fuite protéique ?",
    "options": [
      "La stéatorrhée",
      "L'élévation de la clairance fécale de l'alpha-1-antitrypsine (> 20-24 mL/24h)",
      "La créatininurie",
      "La glycosurie",
      "Le sédiment urinaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'alpha-1-antitrypsine est une glycoprotéine sérique ni dégradée ni réabsorbée par le tube digestif : sa clairance fécale accrue (> 24 mL/j) est le marqueur de choix d'entéropathie exsudative.",
    "clinicalPearl": "Entéropathie exsudative (fuite protidique) = Clairance de l'alpha-1-antitrypsine fécale élevée (> 24 mL/24h)."
  },
  {
    "id": "q-dc-14",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle tumeur colique ou rectale bénigne hypersécrétante peut se révéler par une diarrhée sécrétoire muqueuse abondante avec hypokaliémie sévère et déshydratation (syndrome de McKittrick-Wheelock) ?",
    "options": [
      "Le polype hyperplasique millimétrique",
      "Le volumineux adénome villeux rectal ou colique sécrétant",
      "Le lipome sous-muqueux",
      "Le léiomyome",
      "L'hémangiome caverneux"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'adénome villeux géant du rectum hypersécrète du mucus riche en potassium et en eau, réalisant une débâcle liquidienne responsable d'hypokaliémie majeure et d'insuffisance rénale fonctionnelle.",
    "clinicalPearl": "Adénome villeux rectal sécrétant = fausse diarrhée sécrétoire muqueuse avec hypokaliémie sévère (McKittrick-Wheelock)."
  },
  {
    "id": "q-dc-15",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle tumeur neuroendocrine rare sécrétant le peptide intestinal vasoactif (VIP) provoque le syndrome de Verner-Morrison (choléra pancréatique) avec diarrhée sécrétoire cataclysmique ?",
    "options": [
      "L'insulinome",
      "Le VIPome",
      "Le glucagonome",
      "Le somatostatinome",
      "Le gastrinome"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le VIPome sécrète du VIP en abondance, entraînant la triade WDHA : Watery Diarrhea (diarrhée aqueuse massive jusqu'à 5-10 L/j), Hypokalemia (hypokaliémie sévère) et Achlorhydria (hypochlorhydrie).",
    "clinicalPearl": "VIPome (syndrome de Verner-Morrison / WDHA) : diarrhée aqueuse profuse ('choléra pancréatique') + hypokaliémie majeure."
  },
  {
    "id": "q-dc-16",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La pullulation bactérienne du grêle (SIBO / Small Intestinal Bacterial Overgrowth) est favorisée par :",
    "options": [
      "L'hyperacidité gastrique extrême",
      "Les anomalies de la motricité intestinale (sclérodermie, neuropathie diabétique), les sténoses, anses borgnes chirurgicales ou diverticules du grêle",
      "La consommation de carottes",
      "L'exercice physique régulier",
      "L'utilisation de corticoïdes inhalés"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Toute stase intestinale (ralentissement moteur, anse borgne, diverticulose du grêle, résection de la valvule de Bauhin) favorise la colonisation rétrograde du grêle par une flore colique anaérobie.",
    "clinicalPearl": "SIBO (pullulation bactérienne) : stase, diverticules du grêle, sclérodermie -> déconjugaison des sels biliaires -> malabsorption."
  },
  {
    "id": "q-dc-17",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel mécanisme explique la malabsorption des graisses et la carence en vitamine B12 dans la pullulation bactérienne chronique du grêle ?",
    "options": [
      "La destruction physique des cellules musculaires",
      "La déconjugaison précoce des sels biliaires par les bactéries anaérobies (empêchant la formation des micelles) et la consommation bactérienne directe de la vitamine B12",
      "Une toxicité rénale",
      "Une atrophie thyroïdienne",
      "Un déficit en amylase salivaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les bactéries anaérobies duodéno-jéjunales déconjuguent les acides biliaires (perte du pouvoir micellaire -> stéatorrhée) et consomment activement la vitamine B12 intraluminale (anémie mégaloblastique).",
    "clinicalPearl": "SIBO : Déconjugaison des sels biliaires (stéatorrhée) + consommation de vitamine B12 par les bactéries (carence en B12)."
  },
  {
    "id": "q-dc-18",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la colite microscopique (colite collagène et colite lymphocytaire), comment apparaît la muqueuse colique lors de la coloscopie optique standard ?",
    "options": [
      "Couverte d'ulcères serpigineux profonds",
      "Strictement normale ou presque normale sur le plan macroscopique, nécessitant des biopsies coliques étagées systématiques pour poser le diagnostic histologique",
      "Sténosée de façon circonférentielle",
      "Nécrotique et noire",
      "Hémorragique granitée diffuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La colite microscopique se définit par une muqueuse macroscopiquement normale à la coloscopie : le diagnostic n'est porté que par l'examen histologique des biopsies coliques étagées systématiques droite et gauche.",
    "clinicalPearl": "Colite microscopique : coloscopie normale ! Diagnostic porté UNIQUEMENT sur les biopsies coliques étagées."
  },
  {
    "id": "q-dc-19",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel médicament est le traitement médical de première intention le plus efficace pour induire et maintenir la rémission d'une colite microscopique (collagène ou lymphocytaire) ?",
    "options": [
      "L'Oméprazole à forte dose",
      "Le Budésonide par voie orale (9 mg/jour)",
      "L'Azathioprine en monothérapie",
      "L'amoxicilline",
      "La ciclosporine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le budésonide oral (9 mg/j) est le traitement de référence ayant fait la preuve de sa supériorité pour contrôler rapidement la diarrhée aqueuse profuse de la colite microscopique.",
    "clinicalPearl": "Traitement de référence de la colite microscopique = Budésonide oral 9 mg/j."
  },
  {
    "id": "q-dc-20",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle classe de médicaments cardiovasculaires antagonistes des récepteurs de l'angiotensine II a été formellement incriminée dans la survenue d'entéropathies graves avec atrophie villositaire mimant une maladie cœliaque séronégative ?",
    "options": [
      "L'Amlodipine",
      "L'Olmésartan",
      "L'Amiodarone",
      "Le Furosémide",
      "Le Métoprolol"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'entéropathie à l'olmésartan induit une atrophie villositaire duodénale sévère avec diarrhée chronique et perte de poids importante, sans anticorps cœliaques, régressant à l'arrêt du médicament.",
    "clinicalPearl": "Entéropathie médicamenteuse à l'Olmésartan : atrophie villositaire sévère réversible à l'arrêt de la molécule."
  },
  {
    "id": "q-dc-21",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "La malabsorption des acides biliaires (diarrhée biliaire par défaut de réabsorption dans l'iléon terminal après iléectomie ou cholécystectomie) répond typiquement à quel médicament chélateur des sels biliaires ?",
    "options": [
      "La Cholestyramine (Questran)",
      "Le Sucralfate",
      "Le Sulfate de cuivre",
      "Le Polystyrène sulfonate",
      "La D-pénicillamine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cholestyramine fixe les acides biliaires libres dans la lumière colique (qui exercent normalement un effet laxatif sécrétoire sur les colonocytes), stoppant la diarrhée en quelques jours.",
    "clinicalPearl": "Diarrhée biligène post-cholécystectomie ou résection iléale = Cholestyramine (Questran) spectaculairement efficace."
  },
  {
    "id": "q-dc-22",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la démarche diagnostique d'une diarrhée chronique de l'adulte, quel examen biologique fécal simple permet d'éliminer une fausse diarrhée parasitaire ou infectieuse persistante ?",
    "options": [
      "Un ionogramme urinaire",
      "L'examen parasitologique des selles (EPS) répété 3 fois et la coproculture bactériologique avec recherche de toxine de Clostridioides difficile",
      "Le taux d'amylase",
      "L'hémoculture",
      "La protéinurie des 24h"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'EPS répété 3 fois (recherche de Giardia duodenalis, amibes, cryptosporidies) et la coproculture font partie intégrante du bilan de base non invasif initial de toute diarrhée chronique.",
    "clinicalPearl": "Bilan initial non invasif : EPS x 3 (Giardia +++) + coproculture + toxines Clostridioides difficile."
  },
  {
    "id": "q-dc-23",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle parasitose intestinale cosmopolite fixée sur les villosités duodénales est une cause fréquente de diarrhée chronique avec malabsorption et ballonnements chez l'enfant et l'adulte jeune ?",
    "options": [
      "L'ascaridiase",
      "La giardiase (lambliase / Giardia duodenalis)",
      "L'oxyurose",
      "Le ténia saginata",
      "La bilharziose hépatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giardia duodenalis tapisse les entérocytes du duodéno-jéjunum, entraînant une diarrhée graisseuse, asthénie et perte de poids, diagnostiquée par l'EPS ou la PCR fécale et traitée par Métronidazole.",
    "clinicalPearl": "Giardiase (lambliase) = 1ère cause parasitaire de malabsorption duodéno-jéjunale (traitement : Métronidazole/Tinidazole)."
  },
  {
    "id": "q-dc-24",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'exploration d'une diarrhée motrice chronique inexpliquée, quelle recherche de tumeur neuroendocrine sécrétante médullaire de la thyroïde doit être demandée ?",
    "options": [
      "Le dosage de la calcitonine sérique",
      "Le dosage de la parathormone",
      "Le dosage du cortisol libre urinaire",
      "Le dosage de l'aldostérone",
      "Le dosage de la prolactine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le carcinome médullaire de la thyroïde (sécrétant de la calcitonine et de la sérotonine) peut être révélé par une diarrhée motrice profuse avec flushs cutanés.",
    "clinicalPearl": "Diarrhée motrice inexpliquée : doser la calcitonine (carcinome médullaire de la thyroïde) et la chromogranine A."
  },
  {
    "id": "q-dc-25",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle cause iatrogène fréquente de diarrhée chronique chez le diabétique de type 2 est liée à un antidiabétique oral très prescrit ?",
    "options": [
      "L'insuline basale",
      "La Metformine (biguanide)",
      "Le Gliclazide",
      "La Sitagliptine",
      "Le Glucagon"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La metformine provoque une diarrhée motrice et osmotique dose-dépendante chez 10 à 20% des patients traités, réversible à la diminution de dose ou à l'arrêt du médicament.",
    "clinicalPearl": "Metformine = cause très fréquente de diarrhée iatrogène chronique chez le patient diabétique."
  },
  {
    "id": "q-cas-dc-1",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Une femme de 42 ans consulte pour une diarrhée évoluant depuis 6 mois, faite de 4 à 6 selles quotidiennes pâteuses, très abondantes, d'aspect huileux et décoloré, collant à la cuvette et dégageant une odeur rance. Elle signale un amaigrissement de 7 kg malgré un appétit conservé. Le bilan biologique retrouve : anémie microcytaire avec ferritinémie effondrée, TP bas à 55% corrigé par la vitamine K parentérale (test de Kohler positif), albuminémie à 29 g/L et calcémie à 2,05 mmol/L. Le dosage des graisses fécales sur 72h confirme une stéatorrhée à 18 g/24h (N < 6 g). Quel type physiopathologique de diarrhée présente cette patiente et quel examen non invasif de première ligne devez-vous demander pour orienter l'étiologie ?",
    "options": [
      "Diarrhée motrice pure ; test au rouge de carmin",
      "Diarrhée par malabsorption lipidique ; dosage des anticorps anti-transglutaminase IgA avec IgA totales pour dépister une maladie cœliaque, et élastase fécale pour dépister une insuffisance pancréatique exocrine",
      "Diarrhée osmotique par laxatifs ; recherche de phénolphtaléine",
      "Diarrhée sécrétoire sur VIPome ; dosage du VIP plasmatique",
      "Colite aiguë infectieuse ; réhydratation simple"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La stéatorrhée à 18 g/j et les carences multiples en vitamines liposolubles (vitamine K avec baisse du TP, vit D avec hypocalcémie) et en fer affirment une malabsorption. Les deux premières causes à explorer sont la maladie cœliaque (anti-tTG) et l'insuffisance pancréatique exocrine (élastase fécale-1).",
    "clinicalPearl": "Stéatorrhée > 6 g/j + carences multiples = Malabsorption prouvée -> Anti-tTG IgA et Élastase fécale-1."
  },
  {
    "id": "q-cas-dc-2",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Une femme de 65 ans consulte pour une diarrhée aqueuse abondante diurne et nocturne évoluant depuis 3 mois (6 à 8 selles d'eau par jour), sans glaires ni sang, ayant entraîné une perte de poids de 3 kg. L'interrogatoire retrouve la prise quotidienne récente de Lansoprazole (IPP) et de Sertraline. Le bilan biologique standard et les sérologies cœliaques sont normaux. La coloscopie totale avec iléoscopie visualise une muqueuse colique d'aspect strictement normal sur toute la hauteur du cadre colique. Que devez-vous impérativement exiger de l'endoscopiste avant de conclure ?",
    "options": [
      "Réaliser un lavement baryté d'emblée",
      "Réaliser des biopsies coliques étagées systématiques du côlon droit et du côlon gauche pour rechercher une colite microscopique (colite collagène ou colite lymphocytaire)",
      "Arrêter l'exploration et conclure à un trouble fonctionnel",
      "Prescrire une laparotomie exploratrice",
      "Demander un scanner cérébral"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Devant une diarrhée aqueuse chronique de la femme âgée avec coloscopie normale (souvent favorisée par IPP, AINS ou veinotoniques), des biopsies coliques systématiques sont indispensables pour dépister une colite microscopique (bande de collagène sous-épithéliale > 10 µm ou infiltrat lymphocytaire intra-épithélial).",
    "clinicalPearl": "Diarrhée aqueuse chronique + coloscopie macroscopiquement normale = Biopsies étagées pour éliminer une colite microscopique."
  },
  {
    "id": "q-cas-dc-3",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Chez cette même patiente de 65 ans, les biopsies coliques révèlent un épaississement continu de la bande de collagène sous-épithéliale mesuré à 18 µm associé à un infiltrat inflammatoire chronique de la lamina propria, confirmant le diagnostic de colite collagène. Après arrêt des médicaments potentiellement inducteurs, quel traitement médical de référence doit être instauré ?",
    "options": [
      "Infliximab par voie intraveineuse",
      "Budésonide par voie orale à la dose de 9 mg par jour pendant 6 à 8 semaines avec décroissance progressive",
      "Colectomie totale immédiate",
      "Amoxicilline orale",
      "Laxatifs de lest"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le budésonide oral (9 mg/j) est le traitement de première ligne démontré pour induire une rémission clinique et histologique rapide dans la colite microscopique.",
    "clinicalPearl": "Colite microscopique (collagène ou lymphocytaire) = Budésonide oral (9 mg/jour) en première intention."
  },
  {
    "id": "q-cas-dc-4",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un homme de 50 ans sans antécédent consulte pour des épisodes récurrents d'arthralgies migratrices des genoux et chevilles évoluant depuis 6 ans sans déformation, auxquelles s'est ajoutée depuis 8 mois une diarrhée chronique avec stéatorrhée modérée, un amaigrissement de 10 kg, une mélanodermie des zones découvertes et une fébricule intermittente. L'examen retrouve des adénopathies périphériques indolores. La FOGD montre un duodénum congestif parsemé de plaques blanchâtres floconneuses. Les biopsies duodénales mettent en évidence une infiltration massive de la lamina propria par des macrophages volumineux contenant des granulations PAS-positives. Quel est le diagnostic certain et quelle antibiothérapie salvatrice devez-vous débuter ?",
    "options": [
      "Tuberculose ganglionnaire péritonéale ; quadrithérapie antibacillaire 6 mois",
      "Maladie de Whipple (infection à Tropheryma whipplei) ; traitement par Ceftriaxone IV (2 g/j) pendant 15 jours relayé par Cotrimoxazole (Triméthoprime-Sulfaméthoxazole) oral pendant au moins 1 an",
      "Maladie cœliaque compliquée de lymphome ; chimiothérapie CHOP",
      "Amylose digestive ; transplantation hépatique",
      "Gastro-entérite à Salmonella ; ciprofloxacine 5 jours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association arthralgies migratrices de longue date + diarrhée/malabsorption + mélanodermie + macrophages PAS (+) duodénaux confirme la maladie de Whipple. Le traitement antibiotique prolongé (Ceftriaxone 2 semaines puis Cotrimoxazole 1 an) permet la guérison complète.",
    "clinicalPearl": "Maladie de Whipple : arthrites migratrices + malabsorption + macrophages PAS (+) -> Ceftriaxone IV puis Cotrimoxazole 1 an."
  },
  {
    "id": "q-cas-dc-5",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Une femme de 58 ans opérée d'une cholécystectomie sous cœlioscopie il y a 6 mois consulte car elle présente depuis l'intervention une diarrhée post-prandiale quotidienne faite de 3 à 5 selles très liquides, survenant brutalement après les repas gras, sans amaigrissement ni altération de l'état général. Le bilan biologique, la calprotectine fécale et les sérologies cœliaques sont normaux. Quelle est la cause la plus probable et quel traitement d'épreuve permet de confirmer le diagnostic par une disparition spectaculaire des symptômes ?",
    "options": [
      "Pancréatite chronique calcifiante ; enzymes pancréatiques",
      "Diarrhée par malabsorption des acides biliaires (diarrhée biligène post-cholécystectomie) ; prescription d'épreuve d'un chélateur des sels biliaires (Cholestyramine / Questran)",
      "Infection à Clostridioides difficile ; vancomycine per os",
      "Cancer du côlon droit ; hémicolectomie droite",
      "Déficit congénital en lactase ; régime sans lactose pur"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La suppression du réservoir vésiculaire entraîne un flux continu d'acides biliaires dans le duodénum : lorsque la capacité de réabsorption iléale est dépassée, les acides biliaires atteignent le côlon où ils exercent un puissant effet sécrétoire. La cholestyramine chélate les sels biliaires et normalise le transit.",
    "clinicalPearl": "Diarrhée post-cholécystectomie = diarrhée biligène (acides biliaires au côlon) -> test thérapeutique à la Cholestyramine."
  }
];

export const DIARRHEES_CHRONIQUES_RESOURCES: CourseResource[] = [
  {
    "id": "res-dc-summary",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Diarrhées Chroniques",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Diarrhées Chroniques\n- **Définition** : > 3 selles molles/liquides par jour (> 200-300 g/24h) durant plus de 4 semaines.\n- **Grands Mécanismes Physiopathologiques** :\n  1. *Osmotique* : S'arrête au jeûne strict, trou osmotique > 100 mOsm/kg (laxatifs osmotiques, déficit en lactase).\n  2. *Sécrétoire* : Persiste au jeûne, abondante, trou osmotique < 50 mOsm/kg (médicaments, colite microscopique, VIPome, adénome villeux géant).\n  3. *Malabsorption* : Stéatorrhée > 6 g/j sur 3 jours, carences multiples (fer, vit A, D, E, K, B12). Causes : maladie cœliaque, insuffisance pancréatique exocrine, pullulation microbienne SIBO, Whipple.\n  4. *Motrice* : Accélération du transit (test au rouge de carmin ou H2 breath test). Selles matinales/post-prandiales contenant des aliments visibles, respecte la nuit. Causes : SII-D, hyperthyroïdie, neuropathie diabétique.\n  5. *Exsudative* : Fuite protidique digestive (Clairance de l'alpha-1-antitrypsine > 24 mL/24h, hypoalbuminémie sans protéinurie). Causes : MICI, lymphangiectasies, Ménétrier.\n- **Entités Clés** :\n  - *Colite microscopique* (collagène/lymphocytaire) : femme > 60 ans, coloscopie macroscopiquement normale, biopsies étagées diagnostiques -> Budésonide oral 9 mg/j.\n  - *Maladie de Whipple* : arthralgies migratrices + diarrhée + macrophages PAS (+) duodénaux -> Ceftriaxone IV 15j puis Cotrimoxazole 1 an.\n  - *Diarrhée biliaire* post-cholécystectomie -> Cholestyramine (Questran).",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-dc-pearls",
    "courseId": "crs-gastro-diarrhees-chroniques",
    "type": "Astuce",
    "title": "Règles d'Or : Diarrhées Chroniques",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Épreuve de jeûne** : s'arrête au jeûne = osmotique ; persiste au jeûne = sécrétoire.\n- ⚡ **Colite microscopique** : la coloscopie est macroscopiquement normale -> biopsies étagées indispensables.\n- ⚡ **Fausse diarrhée du constipé** : toujours éliminer un fécalome par le toucher rectal avant tout bilan lourd.",
    "author": "Commission Pédagogique"
  }
];
