import { Question, CourseResource } from '../../types/medical';

export const ICTERES_QUESTIONS: Question[] = [
  {
    "id": "q-ict-01",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "À partir de quel seuil sérique de bilirubine totale l'ictère cutanéo-muqueux devient-il cliniquement visible (au niveau des conjonctives puis de la peau) ?",
    "options": [
      "Bilirubine totale > 17 µmol/L (1 mg/dL)",
      "Bilirubine totale > 40 à 50 µmol/L (2,5 à 3 mg/dL)",
      "Bilirubine totale > 150 µmol/L",
      "Bilirubine totale > 300 µmol/L",
      "Bilirubine totale > 500 µmol/L"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La bilirubinémie normale est < 17 µmol/L. Entre 20 et 40 µmol/L, il s'agit d'un subictère souvent invisible cliniquement. L'ictère franc apparaît dès que la bilirubine dépasse 40-50 µmol/L (visible d'abord aux conjonctives).",
    "clinicalPearl": "Ictère clinique visible au niveau des conjonctives dès que Bilirubine totale > 40-50 µmol/L."
  },
  {
    "id": "q-ict-02",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle première étape biologique fondamentale oriente la démarche diagnostique étiologique devant tout ictère ?",
    "options": [
      "Le dosage de l'amylasémie",
      "Le dosage fractionné de la bilirubine sérique : Bilirubine non conjuguée (libre/indirecte) versus Bilirubine conjuguée (directe)",
      "La réalisation d'une biopsie hépatique",
      "Le dosage des immunoglobulines",
      "L'hémogramme seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le dosage fractionné sépare d'emblée deux grands groupes : ictère à bilirubine non conjuguée (hémolyse, maladie de Gilbert) et ictère à bilirubine conjuguée (cholestase extra-hépatique ou intra-hépatique).",
    "clinicalPearl": "1ère étape diagnostique de l'ictère : Dosage fractionné de la bilirubine (conjuguée vs non conjuguée)."
  },
  {
    "id": "q-ict-03",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie génétique bénigne et très fréquente (5 à 10% de la population générale) est liée à un déficit partiel en UDP-glucuronosyltransférase (UGT1A1), se manifestant par un ictère modéré à bilirubine non conjuguée favorisé par le jeûne, la fatigue ou une infection ?",
    "options": [
      "Le syndrome de Crigler-Najjar type I",
      "La maladie de Gilbert",
      "Le syndrome de Rotor",
      "Le syndrome de Dubin-Johnson",
      "La maladie de Wilson"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La maladie de Gilbert est une anomalie génétique autosomique récessive bénigne (mutation promoteur UGT1A1). Elle provoque un ictère à bilirubine non conjuguée (< 80 µmol/L), sans hémolyse, avec bilan hépatique par ailleurs strictement normal, exacerbé par le jeûne.",
    "clinicalPearl": "Maladie de Gilbert = Ictère à bilirubine libre modéré déclenché par le jeûne/fatigue, hémogramme et enzymes hépatiques normaux."
  },
  {
    "id": "q-ict-04",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quels signes cliniques et urinaires caractérisent typiquement un ictère cholestatique à bilirubine conjuguée ?",
    "options": [
      "Urines claires et selles hypercolorées sans prurit",
      "Urines foncées (couleur bière brune/thé), selles décolorées mastic ou blanc mastic, et prurit cutané",
      "Hématurie macroscopique et pyurie",
      "Selles liquides sanglantes",
      "Urines mousseuses claires"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La bilirubine conjuguée hydrosoluble filtrée par le rein colore les urines en brun foncé. Le défaut d'excrétion biliaire intestinale décolore les selles (mastic), et l'accumulation des sels biliaires induit un prurit.",
    "clinicalPearl": "Triade clinique de cholestase : Urines foncées + Selles décolorées (mastic) + Prurit."
  },
  {
    "id": "q-ict-05",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen d'imagerie de première intention non invasif et peu coûteux doit être réalisé systématiquement devant tout ictère à bilirubine conjuguée pour trancher entre obstacle extra-hépatique et atteinte intra-hépatique ?",
    "options": [
      "L'échographie abdominale",
      "La tomodensitométrie hélicoïdale corps entier",
      "La bili-IRM",
      "La CPRE",
      "L'artériographie coeliaque"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'échographie abdominale est l'examen clé de 1ère intention. Elle recherche la dilatation des voies biliaires intra- et extra-hépatiques (affirmant un obstacle mécanique extra-hépatique) ou leur calibre normal (cholestase intra-hépatique).",
    "clinicalPearl": "Ictère à bilirubine conjuguée = ÉCHOGRAPHIE ABDOMINALE en 1ère intention (recherche dilatation des voies biliaires)."
  },
  {
    "id": "q-ict-06",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'ictère cholestatique par obstacle lithiasique de la voie biliaire principale (lithiase du cholédoque), quelle est la présentation clinique typique ?",
    "options": [
      "Ictère totalement indolore d'installation insidieuse avec grosse vésicule",
      "Ictère survenant rapidement après une douleur aiguë biliaire paroxystique de l'hypochondre droit, d'intensité fluctuante, souvent sans grosse vésicule palpable (loi de Courvoisier-Terrier)",
      "Ictère associé à une hépatomégalie nodulaire géante",
      "Ictère néonatal isolé",
      "Ictère avec ascite hémorragique d'emblée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La lithiase cholédocienne donne une douleur brutale suivie d'ictère fluctuant. La vésicule est généralement rétractée ou scléreuse par les crises lithiasiques antérieures, donc non palpable.",
    "clinicalPearl": "Lithiase de la VBP = Douleur biliaire inaugurale brutale + Ictère fluctuant + Vésicule NON palpable."
  },
  {
    "id": "q-ict-07",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle loi sémiologique clinique classique stipule qu'un ictère nu, indolore, progressif et d'intensité croissante associé à une grosse vésicule biliaire tendue et palpable sous le rebord costal est très évocateur d'une tumeur maligne sous-jacente (cancer de la tête du pancréas ou ampullome) ?",
    "options": [
      "La loi de Courvoisier et Terrier",
      "La loi de Starling",
      "Le signe de Trousseau",
      "Le signe de Murphy",
      "La triade de Charcot"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La loi de Courvoisier-Terrier : Ictère obstructif d'aggravation continue + grosse vésicule biliaire indolore palpable = obstacle néoplasique bas-situé sur la voie biliaire principale (cancer tête du pancréas ou ampullome).",
    "clinicalPearl": "Loi de Courvoisier-Terrier = Ictère nu progressif + Grosse vésicule indolore palpable = Cancer de la tête du pancréas !"
  },
  {
    "id": "q-ict-08",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel ensemble de marqueurs biologiques affirme un ictère hémolytique à bilirubine non conjuguée (libre) ?",
    "options": [
      "Élévation de la bilirubine non conjuguée, chute effondrée de l'haptoglobine, élévation des LDH et réticulocytose (> 120 000/mm³ / anémie régénérative)",
      "Élévation des phosphatases alcalines et gamma-GT",
      "Élévation de la lipase sérique",
      "Cytolyse hépatique avec transaminases > 20N",
      "Hypercholestérolémie isolée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le syndrome d'hémolyse biologique associe : anémie régénérative (réticulocytes élevés), haptoglobine effondrée ou indétectable, LDH élevées, et hyperbilirubinémie à prédominance libre (non conjuguée).",
    "clinicalPearl": "Ictère hémolytique = Bilirubine libre augmentée + Haptoglobine effondrée + LDH augmentées + Réticulocytose."
  },
  {
    "id": "q-ict-09",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'ictère néonatal pathologique du nouveau-né, quel risque neurologique toxique gravissime encourt le cerveau immature par franchissement de la barrière hémato-encéphalique par la bilirubine non conjuguée libre toxique ?",
    "options": [
      "L'ictère nucléaire (encéphalopathie bilirubinique avec imprégnation des noyaux gris centraux)",
      "La méningite purulente",
      "L'hématome sous-dural",
      "La thrombose du sinus sagittal",
      "L'hydrocéphalie communicante"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La bilirubine libre non liée à l'albumine franchit la BHE immature et se dépose dans les noyaux gris centraux (ganglions de la base), entraînant léthargie, opisthotonos, choréo-athétose et surdité neurosensorielle (ictère nucléaire).",
    "clinicalPearl": "Bilirubine libre élevée chez le nouveau-né = Risque d'ictère nucléaire (lésions irréversibles des noyaux gris centraux)."
  },
  {
    "id": "q-ict-10",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle maladie génétique rare à transmission autosomique récessive est caractérisée par un déficit génétique complet total en UGT1A1 avec hyperbilirubinémie libre néonatale massive engageant le pronostic vital dès la naissance en l'absence de photothérapie intensive continue puis greffe ?",
    "options": [
      "Le syndrome de Crigler-Najjar de type I",
      "La maladie de Gilbert",
      "La maladie de Rotor",
      "Le syndrome de Dubin-Johnson",
      "L'hémochromatose"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le Crigler-Najjar type I est l'absence complète d'UGT1A1 (bilirubine libre > 350-500 µmol/L dès la naissance). Sans photothérapie 12h/j puis transplantation hépatique précoce, la mort par ictère nucléaire est inéluctable.",
    "clinicalPearl": "Crigler-Najjar type I = Déficit complet en UGT1A1 = Hyperbilirubinémie libre extrême létale (nécessite la greffe hépatique)."
  },
  {
    "id": "q-ict-11",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelles maladies génétiques bénignes de la sécrétion tubulaire de la bilirubine provoquent un ictère prédominant à bilirubine conjuguée sans cholestase biologique (PAL et GGT normales) ?",
    "options": [
      "Les syndromes de Dubin-Johnson et de Rotor",
      "La maladie de Gilbert",
      "Le Crigler-Najjar type II",
      "La maladie de Gaucher",
      "La maladie de Niemann-Pick"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Dubin-Johnson (déficit de MRP2, foie noir macéré) et Rotor sont des anomalies génétiques bénignes du transport caniculaire ou de la recapture hépatocytaire de la bilirubine conjuguée, sans anomalie des enzymes hépatiques ni prurit.",
    "clinicalPearl": "Dubin-Johnson & Rotor = Ictère à bilirubine conjuguée bénin avec phosphatases alcalines et GGT normales."
  },
  {
    "id": "q-ict-12",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause d'ictère cholestatique obstructif sans dilatation des voies biliaires extra-hépatiques à l'échographie correspond à une prolifération granulomateuse avec cholestase intra-hépatique ?",
    "options": [
      "La sarcoïdose hépatique ou la tuberculose hépatique",
      "La lithiase du bas cholédoque",
      "Le cancer de l'ampoule de Vater",
      "Le kyste du cholédoque congénital",
      "Le cancer de la tête du pancréas"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La sarcoïdose hépatique et la tuberculose provoquent une infiltration granulomateuse des espaces portes créant une cholestase intra-hépatique (voies biliaires de calibre normal à l'échographie).",
    "clinicalPearl": "Cholestase intra-hépatique = Voies biliaires intra- et extra-hépatiques de calibre normal à l'échographie."
  },
  {
    "id": "q-ict-13",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen d'imagerie par résonance magnétique est l'examen non invasif le plus performant pour cartographier avec précision le siège et la nature d'un obstacle sur les voies biliaires (sensibilité > 95%) ?",
    "options": [
      "La bili-IRM (cholangiopancréatographie par résonance magnétique - CPRM)",
      "Le scanner cérébral",
      "L'urographie intraveineuse",
      "La radiographie abdominale",
      "L'écho-endoscopie sans Doppler"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La bili-IRM reconstitue l'arbre biliaire en pondération T2 sans injection de produit de contraste iodé et localise avec une haute précision la sténose, le calcul ou la lésion compressive.",
    "clinicalPearl": "Bili-IRM (CPRM) = Examen de référence non invasif pour caractériser un obstacle biliaire."
  },
  {
    "id": "q-ict-14",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen invasif combinant endoscopie et échographie haute fréquence est l'examen de choix pour détecter de minuscules calculs de la voie biliaire principale distale ou faire des biopsies de la tête du pancréas ?",
    "options": [
      "L'écho-endoscopie bilio-pancréatique (EE)",
      "La coloscopie courte",
      "Le transit du grêle",
      "L'échographie transthoracique",
      "La scintigraphie hépatique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'écho-endoscopie bilio-pancréatique a une sensibilité de 98% pour les microlithiases du bas cholédoque et permet le guidage de cytoponctions à l'aiguille fine des masses pancréatiques.",
    "clinicalPearl": "Écho-endoscopie bilio-pancréatique = Sensibilité maximale pour microlithiases cholédociennes et ponction des masses pancréatiques."
  },
  {
    "id": "q-ict-15",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'ictère cholestatique néoplasique inextirpable (cancer du pancréas métastatique ou localement avancé), quel geste palliatif endoscopique permet de lever l'ictère et de soulager le prurit ?",
    "options": [
      "La pose d'une prothèse biliaire métallique expansible ou plastique par CPRE (voie rétrograde endoscopique)",
      "La cholécystectomie simple",
      "Une laparotomie blanche",
      "La ponction d'ascite",
      "Un lavement baryté"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La mise en place d'une prothèse biliaire par CPRE (ou par drainage biliaire percutané trans-hépatique) rétablit l'écoulement de la bile dans le duodénum, faisant régresser l'ictère et le prurit.",
    "clinicalPearl": "Obstacle néoplasique biliaire palliatif = Pose de prothèse biliaire endoscopique par CPRE."
  },
  {
    "id": "q-ict-16",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication biologique hématologique par carence d'absorption survient lors d'une cholestase prolongée (> quelques semaines) par défaut de sels biliaires intestinaux ?",
    "options": [
      "Une carence d'absorption en vitamines liposolubles (A, D, E, K), se traduisant notamment par un allongement du TP (baisse des facteurs vitamine K-dépendants II, VII, IX, X) corrigé par le test de Kohler (vitamine K1 parentérale)",
      "Une carence en vitamine C",
      "Une surcharge en vitamine B12",
      "Une hypercalcémie maligne",
      "Une polyglobulie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'absence de bile intraluminale empêche l'absorption des lipides et des vitamines liposolubles (ADEK). La baisse du TP par carence en vitamine K est corrigée en 24-48h par l'injection de vitamine K1 IV/SC (test de Kohler positif).",
    "clinicalPearl": "Cholestase chronique prolongée = Malabsorption des vitamines ADEK. Baisse du TP corrigée par vitamine K1 (test de Kohler positif)."
  },
  {
    "id": "q-ict-17",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'ictère cholestatique, quelle molécule chélatrice des sels biliaires dans la lumière intestinale est prescrite pour soulager le prurit cutané invalidant ?",
    "options": [
      "La Colestyramine (Questran)",
      "L'Oméprazole",
      "Le Lactulose",
      "L'Allopurinol",
      "Le Paracétamol"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La colestyramine est une résine échangeuse d'ions non absorbable qui fixe les sels biliaires dans l'intestin et empêche leur réabsorption entéro-hépatique, réduisant efficacement le prurit.",
    "clinicalPearl": "Prurit cholestatique = Colestyramine (Questran) per os (à prendre à distance des autres médicaments)."
  },
  {
    "id": "q-ict-18",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel germe bactérien est le plus redouté lors d'une surinfection de la bile retenue en amont d'un obstacle biliaire (angiocholite aiguë) ?",
    "options": [
      "Escherichia coli",
      "Mycobacterium avium",
      "Chlamydia trachomatis",
      "Borrelia burgdorferi",
      "Helicobacter pylori"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les bacilles à Gram négatif entériques dominent l'infection biliaire, Escherichia coli étant isolé dans plus de 50 à 60% des cas d'angiocholite, suivi de Klebsiella pneumoniae.",
    "clinicalPearl": "Bactériologie de la bile infectée : Escherichia coli (1er germe dans > 50% des cas)."
  },
  {
    "id": "q-ict-19",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle tumeur maligne des voies biliaires se développant au niveau de la confluence des canaux hépatiques droit et gauche (carrefour hilaire) est appelée « tumeur de Klatskin » ?",
    "options": [
      "Le cholangiocarcinome hilaire",
      "L'hépatocarcinome fibrolamellaire",
      "Le carcinome vésiculaire invasif",
      "L'adénome canalaire",
      "Le polype hépatique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La tumeur de Klatskin est un cholangiocarcinome développé au carrefour biliaire supérieur (bifurcation hépatique). Elle se traduit par un ictère obstructif avec voies biliaires intrahépatiques dilatées et voie biliaire principale sous-jacente fine.",
    "clinicalPearl": "Tumeur de Klatskin = Cholangiocarcinome du carrefour hilaire biliaire (dilatation des VBIH et VBEH fine)."
  },
  {
    "id": "q-ict-20",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle parasitose biliaire cosmopolite liée à la consommation de cresson sauvage contaminé provoque une phase d'invasion hépatique (fièvre, hyperéosinophilie massive) puis un ictère d'obstruction lors de la colonisation des voies biliaires par la grande douve adulte ?",
    "options": [
      "La distomatose hépatique à Fasciola hepatica",
      "L'ascaridiose",
      "L'oxyurose",
      "Le ténia armé",
      "La bilharziose vésicale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Fasciola hepatica (grande douve du foie) est ingérée sous forme de métacercaires enkystées sur le cresson sauvage. La phase d'invasion s'accompagne d'une hyperéosinophilie à plus de 50-80%, suivie d'angiocholite lors de la ponte dans le cholédoque.",
    "clinicalPearl": "Fasciola hepatica (cresson sauvage) : Phase d'invasion (hyperéosinophilie géante) puis ictère/angiocholite de phase d'état."
  },
  {
    "id": "q-ict-21",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel signe biologique hépatique précoce permet de suspecter une lithiase biliaire migratrice dans les 24 premières heures d'une colique hépatique avant l'installation de la cholestase ?",
    "options": [
      "Une cytolyse aiguë fugace avec pic précoce d'ALAT > 5 à 10N régressant rapidement en 48-72h",
      "Une anémie microcytaire",
      "Une hypercalcémie",
      "Une hyperferritinémie isolée",
      "Une thrombocytose"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La mise en tension brutale du cholédoque lors du passage d'un calcul induit une nécrose hépatocytaire superficielle aiguë responsable d'un pic précoce et très transitoire d'ALAT/ASAT, suivi du tableau de cholestase.",
    "clinicalPearl": "Migration lithiasique cholédocienne : Pic précoce et fugace de cytolyse (ALAT) précédant la cholestase biologique."
  },
  {
    "id": "q-ict-22",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel antibiotique injectable est contre-indiqué chez le nouveau-né ictérique en raison de son fort pouvoir de déplacement de la bilirubine de sa liaison à l'albumine sérique, majorant le risque d'ictère nucléaire ?",
    "options": [
      "La Ceftriaxone",
      "L'Amoxicilline",
      "L'Érythromycine",
      "La Pénicilline G",
      "La Nystatine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La ceftriaxone déplace fortement la bilirubine non conjuguée de ses sites de fixation à l'albumine, augmentant la fraction libre toxique et le risque d'encéphalopathie bilirubinique néonatale.",
    "clinicalPearl": "Ceftriaxone = Contre-indiquée chez le nouveau-né avec ictère (déplace la bilirubine de l'albumine)."
  },
  {
    "id": "q-ict-23",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause rare d'ictère cholestatique récurrent bénin de la femme enceinte survient au 3ème trimestre et disparaît spontanément après l'accouchement ?",
    "options": [
      "La cholestase gravidique intra-hépatique",
      "La stéatose hépatique aiguë gravidique",
      "Le HELLP syndrome",
      "L'hépatite auto-immune",
      "La cholécystite lithiasique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cholestase gravidique intra-hépatique se manifeste par un prurit féroce débutant au 3ème trimestre avec élévation des acides biliaires sériques (> 10-40 µmol/L). Elle comporte un risque fœtal (mort in utero) et guérit après la délivrance.",
    "clinicalPearl": "Cholestase gravidique = Prurit au 3ème trimestre + Acides biliaires élevés (risque fœtal, traitement : AUDC)."
  },
  {
    "id": "q-ict-24",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication d'un kyste hydatique hépatique peut provoquer un ictère brutal avec angiocholite aiguë simulant une lithiase de la voie biliaire principale ?",
    "options": [
      "La fissuration ou rupture intra-kystique dans les voies biliaires avec obstruction par les vésicules-filles et membranes hydatiques",
      "La surinfection pulmonaire",
      "La rupture dans le péricarde",
      "La compression de l'uretère",
      "L'ossification du kyste"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La rupture d'un kyste hydatique dans les voies biliaires entraîne l'évacuation de sable hydatique et de membranes proligères dans le cholédoque, provoquant une obstruction biliaire aiguë septique et anaphylactique.",
    "clinicalPearl": "Kyste hydatique rompu dans les voies biliaires = Angiocholite brutale + choc anaphylactique possible."
  },
  {
    "id": "q-ict-25",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel médicament immunosuppresseur ou antifongique azolé de prescription courante nécessite une surveillance rigoureuse du bilan hépatique pour prévenir une hépatotoxicité cholestatique ou mixte ?",
    "options": [
      "L'Amoxicilline-acide clavulanique (Augmentin) et le Voriconazole",
      "Le Paracétamol seul à dose thérapeutique",
      "Le Sérum physiologique",
      "Le Glucose à 5%",
      "Le carbonate de calcium"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'association amoxicilline-acide clavulanique est la cause médicamenteuse la plus fréquente d'ictère cholestatique prolongé immuno-allergique (survenant souvent plusieurs semaines après l'arrêt de l'antibiothérapie).",
    "clinicalPearl": "1ère cause médicamenteuse d'ictère cholestatique = Amoxicilline-acide clavulanique (délai souvent différé)."
  },
  {
    "id": "cas-ict-01",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 66 ans, tabagique (40 PA), consulte pour un ictère cutanéo-muqueux franc d'installation progressive depuis 3 semaines sans aucune douleur abdominale. Il rapporte un prurit diffus et une perte de 7 kg au cours des 2 derniers mois. L'examen physique retrouve une masse arrondie, rénitente, indolore, mobile avec la respiration, palpable dans l'hypochondre droit sous le rebord costal (grosse vésicule biliaire). Quel est le diagnostic étiologique à évoquer en priorité absolue ?",
    "options": [
      "Lithiase vésiculaire simple",
      "Adénocarcinome de la tête du pancréas obstruant le bas cholédoque",
      "Hépatite aiguë virale A",
      "Cirrhose alcoolique décompensée",
      "Maladie de Gilbert"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Loi de Courvoisier-Terrier : Ictère nu indolore progressif + grosse vésicule biliaire palpable = cancer de la tête du pancréas (ou de la région péri-ampullaire) jusqu'à preuve du contraire.",
    "clinicalPearl": "Ictère nu indolore progressif + Grosse vésicule biliaire indolore (Courvoisier-Terrier) = Cancer de la tête du pancréas."
  },
  {
    "id": "cas-ict-02",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel examen d'imagerie en coupes avec injection de produit de contraste iodé est l'examen de référence pour confirmer la masse pancréatique et évaluer sa résécabilité vasculaire ?",
    "options": [
      "Scanner thoraco-abdomino-pelvien avec protocole d'acquisition pancréatique triphasique (angio-scanner)",
      "Radiographie du grêle",
      "Échographie vésicale",
      "Scintigraphie thyroïdienne",
      "Coloscopie totale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le scanner abdominopelvien avec injection multiphasique mince (temps artériel pancréatique et veineux portal) est l'examen de référence pour étudier l'extension locale, l'envahissement vasculaire (tronc cœliaque, AMS, veine porte) et métastatique.",
    "clinicalPearl": "Cancer du pancréas : Scanner abdomino-pelvien avec protocole d'acquisition pancréatique dédié."
  },
  {
    "id": "cas-ict-03",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une jeune femme de 20 ans consulte car elle a remarqué un subictère conjonctival jaune pâle le lendemain de ses examens universitaires après deux nuits blanches. Elle n'a aucune douleur, ses urines et ses selles sont de coloration normale. Le bilan biologique montre : Bilirubine totale = 38 µmol/L, Bilirubine conjuguée = 5 µmol/L (Bilirubine libre = 33 µmol/L). Les transaminases, GGT, PAL, l'haptoglobine, les LDH et l'hémogramme sont strictement normaux. Quel est le diagnostic certain ?",
    "options": [
      "Hépatite virale C aiguë",
      "Maladie de Gilbert (syndrome de Gilbert)",
      "Cholangite biliaire primitive",
      "Anémie hémolytique auto-immune",
      "Lithiase cholédocienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Élévation modérée isolée de la bilirubine non conjuguée (< 80 µmol/L) déclenchée par la fatigue/jeûne avec bilan hépatique et hémogramme strictement normaux sans hémolyse = Maladie de Gilbert (bénigne, aucun traitement requis).",
    "clinicalPearl": "Maladie de Gilbert = Ictère à bilirubine libre déclenché par le jeûne/stress, reste du bilan hépatique et hémolyse strictement normaux."
  },
  {
    "id": "cas-ict-04",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle attitude devez-vous adopter vis-à-vis de cette patiente pour sa maladie de Gilbert ?",
    "options": [
      "Indiquer une biopsie hépatique sous cœlioscopie",
      "La rassurer complètement : affection bénigne n'évoluant jamais vers une maladie chronique du foie, ne nécessitant aucun traitement ni exploration invasive supplémentaire",
      "Débuter un traitement par acide ursodésoxycholique à vie",
      "Prescrire des corticoïdes",
      "L'inscrire pour transplantation hépatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La maladie de Gilbert est une variante physiologique bénigne sans risque de progression hépatopathique. L'information et la réassurance bienveillante sont la seule prise en charge requise.",
    "clinicalPearl": "Maladie de Gilbert = Réassurance du patient, aucune exploration invasive ni traitement requis."
  },
  {
    "id": "cas-ict-05",
    "courseId": "crs-gastro-icteres",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 45 ans sans antécédents présente brutalement une douleur intense de l'hypochondre droit irradiant vers l'omoplate droite, suivie 24 heures plus tard d'une fièvre à 39,5°C avec frissons intenses, puis d'un ictère cutané franc avec urines foncées. L'échographie montre une dilatation de la voie biliaire principale à 14 mm avec calcul de 10 mm bloqué au niveau du bas cholédoque. Quel geste interventionnel d'urgence doit être programmé sans délai sous antibiothérapie intraveineuse ?",
    "options": [
      "Une sphinctérotomie biliaire endoscopique par CPRE pour extraction du calcul et drainage biliaire",
      "Une cholécystectomie ouverte immédiate en urgence",
      "Une résection hépatique partielle",
      "Une ponction percutanée d'ascite",
      "Un traitement oral par antispasmodiques simples"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Triade de Charcot (douleur -> fièvre -> ictère) = Angiocholite aiguë lithiasique obstructive. C'est une urgence médico-chirurgicale : antibiothérapie C3G + levée de l'obstacle par CPRE avec sphinctérotomie en urgence.",
    "clinicalPearl": "Angiocholite aiguë obstructive = CPRE avec sphinctérotomie biliaire et extraction du calcul en urgence absolue."
  }
];

export const ICTERES_RESOURCES: CourseResource[] = [
  {
    "id": "res-ict-summary",
    "courseId": "crs-gastro-icteres",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Démarche Diagnostique devant un Ictère",
    "contentMarkdown": "### 🎯 Points Clés : Ictères de l'Adulte\n- **1ère étape** : Bilirubine fractionnée :\n  - *Bilirubine non conjuguée (libre)* :\n    - Hémolyse : Haptoglobine basse, LDH élevées, réticulocytes élevés.\n    - Maladie de Gilbert : bilan hépatique et hémogramme normaux, favorisé par le jeûne.\n  - *Bilirubine conjuguée (directe)* -> Échographie abdominale :\n    - Voies biliaires dilatées (obstacle mécanique extra-hépatique) : lithiase VBP, cancer tête pancréas (Courvoisier-Terrier), ampullome, cholangiocarcinome.\n    - Voies biliaires fines (cholestase intra-hépatique) : hépatite aiguë/médicamenteuse, cirrhose, CBP, CSP, granulomatoses.",
    "author": "Collège National des Enseignants d’Hépatologie"
  },
  {
    "id": "res-ict-tips",
    "courseId": "crs-gastro-icteres",
    "type": "Astuce",
    "title": "Loi de Courvoisier-Terrier vs Lithiase",
    "contentMarkdown": "### 💡 Comparaison sémiologique clé :\n- **Lithiase de la VBP** : Douleur brutale -> Ictère fluctuant -> Vésicule rétractée NON palpable.\n- **Cancer de la tête du pancréas** : Ictère progressif nu indolore -> Prurit -> Vésicule distendue palpable (Courvoisier-Terrier).",
    "author": "Faculté de Médecine"
  }
];
