import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 7: HÉMOSTASE PHYSIOLOGIQUE & EXPLORATION - Pr Benzouid
// ==========================================
export const HEMATO_LESSON_7_QUESTIONS: Question[] = [
  {
    id: 'q-hem-07-01',
    courseId: 'crs-hemato-7',
    questionNumber: 1,
    type: 'QCM',
    content: "L'hémostase primaire fait intervenir principalement :",
    options: [
      "A) Les vaisseaux, les plaquettes sanguines et le facteur von Willebrand",
      "B) Les facteurs de la voie intrinsèque et la prothrombine",
      "C) Le plasminogène, le t-PA et la plasmine",
      "D) Uniquement le fibrinogène et la thrombine",
      "E) Les héparanes sulfates et l'antithrombine III"
    ],
    correctAnswers: [0],
    explanation: "L'hémostase primaire comprend la vasoconstriction réflexe, l'adhésion plaquettaire au sous-endothélium via le facteur Willebrand (vWF) et la GP Ib/IX, l'activation plaquettaire avec sécrétion de granules, et l'agrégation plaquettaire via le fibrinogène et la GP IIb/IIIa pour former le clou hémostatique ou thrombus blanc.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-02',
    courseId: 'crs-hemato-7',
    questionNumber: 2,
    type: 'QCM',
    content: "Concernant les plaquettes sanguines, quelle proposition est FAUSSE ?",
    options: [
      "A) Elles proviennent de la fragmentation cytoplasmique des mégacaryocytes médullaires",
      "B) Leur durée de vie normale dans la circulation est de 7 à 10 jours",
      "C) Elles possèdent un noyau condensé et de nombreux ribosomes",
      "D) Le taux normal chez l'adulte est compris entre 150 000 et 400 000 / mm³",
      "E) Environ 1/3 du pool plaquettaire est séquestré de façon physiologique dans la rate"
    ],
    correctAnswers: [2],
    explanation: "Les plaquettes sont des fragments cytoplasmiques anucléés (sans noyau). Elles contiennent des mitochondries, des lysosomes, du glycogène et des granules denses et alpha, mais pas de noyau.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-03',
    courseId: 'crs-hemato-7',
    questionNumber: 3,
    type: 'QCM',
    content: "Le récepteur plaquettaire indispensable à l'adhésion des plaquettes au collagène sous-endothélial en flux cisaillé élevé via le vWF est :",
    options: [
      "A) Le complexe Glycoprotéine IIb/IIIa (intégrine alphaIIb-beta3)",
      "B) Le complexe Glycoprotéine Ib/IX/V",
      "C) Le récepteur P2Y12 de l'ADP",
      "D) Le récepteur PAR-1 de la thrombine",
      "E) Le récepteur TP du thromboxane A2"
    ],
    correctAnswers: [1],
    explanation: "L'adhésion plaquettaire au sous-endothélium à vitesse de cisaillement élevée dépend de la liaison du facteur von Willebrand au complexe GP Ib/IX/V. Le complexe GP IIb/IIIa est quant à lui le récepteur clé de l'agrégation plaquettaire en liant le fibrinogène.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-04',
    courseId: 'crs-hemato-7',
    questionNumber: 4,
    type: 'QCM',
    content: "Le test d'Ivy (mesure du temps de saignement) explore :",
    options: [
      "A) La coagulation plasmatique globale",
      "B) L'hémostase primaire in vivo",
      "C) La voie endogène de la coagulation",
      "D) La lyse du caillot de fibrine",
      "E) L'activité spécifique de l'antithrombine"
    ],
    correctAnswers: [1],
    explanation: "Le temps de saignement (méthode d'Ivy incisive avec manchette à 40 mmHg) explore l'hémostase primaire in vivo (vaisseaux, plaquettes et vWF). La valeur normale est inférieure à 8 à 10 minutes. Il est aujourd'hui souvent remplacé par le PFA-100 (temps d'occlusion plaquettaire in vitro).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-05',
    courseId: 'crs-hemato-7',
    questionNumber: 5,
    type: 'QCM',
    content: "Parmi les facteurs suivants, lequel n'est PAS vitamine K-dépendant ?",
    options: [
      "A) Facteur II (prothrombine)",
      "B) Facteur VII (proconvertine)",
      "C) Facteur VIII (anti-hémophilique A)",
      "D) Facteur IX (anti-hémophilique B)",
      "E) Facteur X (facteur Stuart)"
    ],
    correctAnswers: [2],
    explanation: "Les facteurs vitamine K-dépendants synthétisés par le foie sont les facteurs procoagulants II, VII, IX, X ainsi que les inhibiteurs physiologiques Protéine C et Protéine S. Le facteur VIII est synthétisé par les cellules endothéliales et n'est pas vitamine K-dépendant.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-06',
    courseId: 'crs-hemato-7',
    questionNumber: 6,
    type: 'QCM',
    content: "Le Temps de Quick (TQ) et son expression en Taux de Prothrombine (TP) explorent :",
    options: [
      "A) La voie intrinsèque (endogène) et la voie commune",
      "B) La voie extrinsèque (exogène) et la voie commune",
      "C) Uniquement les facteurs VIII, IX et XI",
      "D) La fonction d'agrégation plaquettaire",
      "E) La fibrinolyse physiologique"
    ],
    correctAnswers: [1],
    explanation: "Le Taux de Prothrombine (TP / Quick) explore la voie extrinsèque (facteur VII) et la voie commune (facteurs X, V, II et I). On ajoute au plasma citraté déplaquetté de la thromboplastine tissulaire et du calcium.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-07',
    courseId: 'crs-hemato-7',
    questionNumber: 7,
    type: 'QCM',
    content: "Le Temps de Céphaline Activée (TCA) explore les facteurs de :",
    options: [
      "A) La voie exogène (facteur VII)",
      "B) La voie endogène (XII, XI, IX, VIII) et la voie commune (X, V, II, I)",
      "C) Uniquement le facteur XIII",
      "D) L'hémostase primaire uniquement",
      "E) La résistance à la protéine C activée"
    ],
    correctAnswers: [1],
    explanation: "Le TCA explore la voie intrinsèque/endogène (facteurs XII, XI, IX, VIII) ainsi que la voie commune (facteurs X, V, II, fibrinogène). Il est allongé si le ratio malade/témoin dépasse 1,20.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-08',
    courseId: 'crs-hemato-7',
    questionNumber: 8,
    type: 'QCM',
    content: "Un allongement isolé du TCA avec un TP normal et un taux de plaquettes normal évoque en premier lieu :",
    options: [
      "A) Un déficit en facteur VII",
      "B) Un déficit en facteur VIII, IX ou XI, ou un anticoagulant circulant lupique",
      "C) Une insuffisance hépatocellulaire sévère",
      "D) Une carence d'apport en vitamine K débutante",
      "E) Un purpura thrombopénique immunologique"
    ],
    correctAnswers: [1],
    explanation: "TCA allongé isolé avec TP normal = anomalie de la voie intrinsèque : déficit constitutionnel (Hémophilie A = FVIII, Hémophilie B = FIX, déficit en FXI, FXII) ou présence d'un anticoagulant circulant de type lupique. Le déficit en FVII allonge isolément le TP.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-09',
    courseId: 'crs-hemato-7',
    questionNumber: 9,
    type: 'QCM',
    content: "Un allongement isolé du TP avec un TCA normal oriente spécifiquement vers :",
    options: [
      "A) Un déficit en facteur VIII",
      "B) Un déficit congénital ou acquis en facteur VII",
      "C) Un déficit en facteur XIII",
      "D) Une maladie de Willebrand de type 1",
      "E) Un traitement par héparine non fractionnée à dose efficace"
    ],
    correctAnswers: [1],
    explanation: "La seule anomalie de la voie extrinsèque stricte est le déficit en facteur VII (ou au tout début d'un traitement AVK ou carence débutante en vit K car la demi-vie du FVII est la plus courte : 4 à 6 heures).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-10',
    courseId: 'crs-hemato-7',
    questionNumber: 10,
    type: 'QCM',
    content: "Pour différencier une carence en vitamine K d'une insuffisance hépatocellulaire (IHC) devant une baisse du TP, quel facteur dose-t-on préférentiellement ?",
    options: [
      "A) Le facteur II",
      "B) Le facteur VII",
      "C) Le facteur V (proaccélérine)",
      "D) Le facteur IX",
      "E) Le facteur X"
    ],
    correctAnswers: [2],
    explanation: "Le facteur V est synthétisé par le foie mais n'est PAS vitamine K-dépendant. Dans la carence en vitamine K, le FV est normal alors que II, VII, IX, X sont bas. Dans l'IHC sévère, la synthèse globale est altérée et le FV est effondré (parallèlement au TP).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-11',
    courseId: 'crs-hemato-7',
    questionNumber: 11,
    type: 'QCM',
    content: "Le facteur stabilisant de la fibrine, qui catalyse les liaisons covalentes entre monomères de fibrine et n'influence ni le TP ni le TCA, est :",
    options: [
      "A) Le facteur V",
      "B) Le facteur VIII",
      "C) Le facteur XI",
      "D) Le facteur XII",
      "E) Le facteur XIII"
    ],
    correctAnswers: [4],
    explanation: "Le facteur XIII est une transglutaminase activée par la thrombine et le calcium. Il consolide le réseau de fibrine. Son déficit congénital provoque des hémorragies graves et des retards de cicatrisation avec TP et TCA strictement normaux. Le diagnostic repose sur le test de solubilité du caillot dans l'urée 5M.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-12',
    courseId: 'crs-hemato-7',
    questionNumber: 12,
    type: 'QCM',
    content: "Le principal inhibiteur physiologique de la thrombine (facteur IIa) et du facteur Xa est :",
    options: [
      "A) La protéine C",
      "B) La protéine S",
      "C) L'antithrombine (AT III)",
      "D) L'alpha-2 antiplasmine",
      "E) Le TFPI (Tissue Factor Pathway Inhibitor)"
    ],
    correctAnswers: [2],
    explanation: "L'antithrombine est le principal inhibiteur naturel de la coagulation. Elle neutralise la thrombine (IIa), le Xa et d'autres sérine-protéases. Son action est accélérée de plus de 1000 fois en présence d'héparine ou des protéoglycanes de l'endothélium vasculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-13',
    courseId: 'crs-hemato-7',
    questionNumber: 13,
    type: 'QCM',
    content: "Le complexe Protéine C activée / Protéine S exerce son action anticoagulante en inactivant spécifiquement :",
    options: [
      "A) Les facteurs IIa et Xa",
      "B) Les facteurs Va et VIIIa",
      "C) Le facteur VIIa et le facteur tissulaire",
      "D) Le facteur XIa et le facteur XIIa",
      "E) Le fibrinogène et la thromboplastine"
    ],
    correctAnswers: [1],
    explanation: "La thrombine liée à la thrombomoduline endothéliale active la protéine C. La protéine C activée, avec son cofacteur la protéine S, clive et inactive les cofacteurs activés Va et VIIIa, freinant puissamment la génération de thrombine.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-14',
    courseId: 'crs-hemato-7',
    questionNumber: 14,
    type: 'QCM',
    content: "Concernant la fibrinolyse physiologique, quelle molécule est l'enzyme active responsable de la dégradation de la fibrine ?",
    options: [
      "A) Le plasminogène",
      "B) La plasmine",
      "C) L'activateur tissulaire du plasminogène (t-PA)",
      "D) L'urokinase",
      "E) L'inhibiteur PAI-1"
    ],
    correctAnswers: [1],
    explanation: "La plasmine est la sérine-protéase active issue du clivage du plasminogène par le t-PA ou l'u-PA. Elle dégrade le réseau de fibrine insoluble en produits de dégradation de la fibrine (PDF) et D-Dimères.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-15',
    courseId: 'crs-hemato-7',
    questionNumber: 15,
    type: 'QCM',
    content: "La présence de D-Dimères élevés dans le sang témoigne spécifiquement de :",
    options: [
      "A) Une dégradation du fibrinogène circulant par la thrombine",
      "B) La formation préalable d'un caillot de fibrine stabilisée par le FXIII suivie de sa lyse par la plasmine",
      "C) Une inhibition pathologique de la protéine C",
      "D) Une synthèse hépatocellulaire accrue de facteurs de coagulation",
      "E) Une anomalie congénitale de la glycoprotéine Ib"
    ],
    correctAnswers: [1],
    explanation: "Les D-Dimères sont des fragments spécifiques issus du clivage par la plasmine de la fibrine polymérisée et réticulée par le facteur XIIIa. Ils attestent qu'il y a eu génération de thrombine, polymérisation de fibrine stabilisée et fibrinolyse secondaire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-16',
    courseId: 'crs-hemato-7',
    questionNumber: 16,
    type: 'QCM',
    content: "Le test au venin de vipère Russell dilué (dRVVT) est particulièrement utile pour :",
    options: [
      "A) Diagnostiquer une hémophilie B",
      "B) Mettre en évidence un anticoagulant circulant de type lupique (syndrome des antiphospholipides)",
      "C) Doser le facteur von Willebrand fonctionnel",
      "D) Mesurer l'agrégation plaquettaire à la ristocétine",
      "E) Évaluer l'efficacité d'un traitement par aspirine"
    ],
    correctAnswers: [1],
    explanation: "Le venin de vipère Russell active directement le facteur X en présence de phospholipides et de calcium. En présence d'un anticoagulant lupique (anticorps antiphospholipides), le temps est allongé et n'est pas corrigé par l'adjonction de plasma témoin, mais se corrige par l'adjonction d'un excès de phospholipides.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-07-17',
    courseId: 'crs-hemato-7',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans l'épreuve de correction du TCA (test de mélange avec plasma témoin sans incubation puis après incubation à 37°C) :",
    options: [
      "A) Une correction immédiate et persistante oriente vers la présence d'un inhibiteur acquis",
      "B) Une absence totale de correction oriente vers un déficit constitutionnel en facteur",
      "C) Une correction immédiate qui disparaît après 2 heures à 37°C est très évocatrice d'un auto-anticorps anti-facteur VIII (hémophilie acquise)",
      "D) Le test est inutile en cas de TCA allongé",
      "E) Le test explore exclusivement la fonction de la prothrombine"
    ],
    correctAnswers: [2],
    explanation: "L'anticorps anti-facteur VIII est temps- et température-dépendant. Le mélange plasma malade + plasma témoin corrige initialement le TCA immédiatement, mais après incubation de 2 heures à 37°C, le TCA se réallonge car l'anticorps a neutralisé le facteur VIII du témoin.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-07-18',
    courseId: 'crs-hemato-7',
    questionNumber: 18,
    type: 'QCM',
    content: "Le dosage du temps de thrombine (TT) explore directement :",
    options: [
      "A) L'activation du facteur X par la voie tissulaire",
      "B) La transformation du fibrinogène en fibrine par adjonction d'une quantité standard de thrombine",
      "C) L'intégrité de la voie contact (facteur XII, prékallikréine)",
      "D) Le temps de fixation du vWF aux plaquettes",
      "E) L'activité spécifique de la protéine S"
    ],
    correctAnswers: [1],
    explanation: "Le Temps de Thrombine mesure le temps de coagulation d'un plasma citraté après addition de thrombine exogène. Il explore la fibrinoformation (dernière étape de la coagulation). Il est allongé en cas d'hypo/dysfibrinogénémie, présence de PDF élevés ou présence d'héparine.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-19',
    courseId: 'crs-hemato-7',
    questionNumber: 19,
    type: 'QCM',
    content: "Quelle anomalie biologique retrouve-t-on typiquement au cours d'une Coagulation Intravasculaire Disséminée (CIVD) décompensée ?",
    options: [
      "A) Thrombocytose, élévation du fibrinogène et TCA raccourci",
      "B) Thrombopénie, effondrement du fibrinogène, allongement du TP et du TCA, et élévation majeure des D-Dimères",
      "C) Plaquettes normales, TP normal, TCA allongé corrigé par le plasma témoin",
      "D) Allongement isolé du temps de saignement avec bilan de coagulation standard normal",
      "E) Diminution isolée du facteur VII avec D-Dimères indétectables"
    ],
    correctAnswers: [1],
    explanation: "La CIVD est une coagulopathie de consommation caractérisée par une thrombopénie de consommation, une baisse du fibrinogène, un allongement du TP et du TCA, une baisse du facteur V et une élévation franche des PDF et des D-Dimères (fibrinolyse réactionnelle).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-20',
    courseId: 'crs-hemato-7',
    questionNumber: 20,
    type: 'QCM',
    content: "L'effet anticoagulant de l'héparine non fractionnée (HNF) est surveillé biologiquement par :",
    options: [
      "A) Le taux de prothrombine (TP) et l'INR",
      "B) Le temps de céphaline activée (ratio TCA cible entre 1,5 et 2,5 ou 3) et/ou l'activité anti-Xa",
      "C) Le temps de saignement selon Ivy",
      "D) Le dosage du fibrinogène selon Clauss",
      "E) Le temps de thrombine exclusivement"
    ],
    correctAnswers: [1],
    explanation: "L'HNF se surveille par le ratio TCA (cible 1,5 à 2,5 ou 3 fois le témoin) ou par la mesure de l'activité anti-Xa (zone thérapeutique 0,3 à 0,7 UI/mL). L'INR sert exclusivement à la surveillance des antivitamines K (AVK).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-21',
    courseId: 'crs-hemato-7',
    questionNumber: 21,
    type: 'QCM',
    content: "L'INR (International Normalized Ratio) est calculé à partir de la formule :",
    options: [
      "A) (TCA malade / TCA témoin) ^ ISI",
      "B) (TP malade en secondes / TP témoin en secondes) ^ ISI",
      "C) (Fibrinogène malade / Fibrinogène témoin)",
      "D) (Temps de saignement / 10)",
      "E) (Activité anti-Xa x Poids du patient)"
    ],
    correctAnswers: [1],
    explanation: "L'INR = (Temps de Quick du malade / Temps de Quick du témoin)^ISI, où l'ISI (Index de Sensibilité International) caractérise la réactivité de la thromboplastine utilisée par rapport à une thromboplastine de référence OMS. Cela standardise le suivi des AVK entre différents laboratoires.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-22',
    courseId: 'crs-hemato-7',
    questionNumber: 22,
    type: 'QCM',
    content: "Le test d'agrégation plaquettaire à la ristocétine est aboli dans :",
    options: [
      "A) La thrombasthénie de Glanzmann",
      "B) La maladie de Willebrand et le syndrome de Bernard-Soulier",
      "C) Le déficit congénital en facteur XIII",
      "D) La prise d'aspirine à faible dose",
      "E) Le déficit isolé en facteur VII"
    ],
    correctAnswers: [1],
    explanation: "La ristocétine induit la fixation du vWF sur la GP Ib plaquettaire. L'agrégation à la ristocétine est donc effondrée dans la maladie de Willebrand (défaut de vWF) et dans le syndrome de Bernard-Soulier (défaut de GP Ib/IX). Dans la thrombasthénie de Glanzmann, le déficit porte sur la GP IIb/IIIa, donc l'agrégation à l'ADP/collagène est abolie mais l'agrégation à la ristocétine est normale.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-07-23',
    courseId: 'crs-hemato-7',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans la thrombasthénie de Glanzmann, le déficit moléculaire constitutionnel porte sur :",
    options: [
      "A) La glycoprotéine Ib/IX/V",
      "B) Le complexe glycoprotéique intégrine alphaIIb-beta3 (GP IIb/IIIa)",
      "C) Les granules denses plaquettaires en sérotonine",
      "D) La cyclo-oxygénase plaquettaire (COX-1)",
      "E) Le facteur tissulaire membranaire"
    ],
    correctAnswers: [1],
    explanation: "La thrombasthénie de Glanzmann est une thrombopathie constitutionnelle autosomique récessive due à un déficit qualitatif ou quantitatif du complexe GP IIb/IIIa. Le taux de plaquettes est normal, le TS est très allongé, et l'agrégation à tous les agonistes physiologiques (ADP, collagène, thrombine) est absente, sauf à la ristocétine.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-24',
    courseId: 'crs-hemato-7',
    questionNumber: 24,
    type: 'QCM',
    content: "Le mécanisme d'action antiagrégant plaquettaire du Clopidogrel (Plavix) repose sur :",
    options: [
      "A) L'inhibition irréversible de la cyclo-oxygénase 1 (COX-1)",
      "B) Le blocage antagoniste irréversible du récepteur plaquettaire P2Y12 de l'ADP",
      "C) L'inhibition directe du complexe glycoprotéique IIb/IIIa",
      "D) L'inhibition de la phosphodiestérase 3",
      "E) La neutralisation directe de la thrombine circulante"
    ],
    correctAnswers: [1],
    explanation: "Le clopidogrel est une thiénopyridine, promédicament dont le métabolite actif bloque de façon sélective et irréversible le récepteur purinergique P2Y12 de l'ADP à la surface des plaquettes, empêchant l'activation plaquettaire et l'amplification de l'agrégation.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-25',
    courseId: 'crs-hemato-7',
    questionNumber: 25,
    type: 'QCM',
    content: "Quel tube de prélèvement est obligatoirement utilisé pour réaliser un bilan standard de coagulation plasmatique (TP, TCA, Fibrinogène) ?",
    options: [
      "A) Tube sec sans anticoagulant (bouchon rouge)",
      "B) Tube avec héparinate de lithium (bouchon vert)",
      "C) Tube avec citrate de sodium à 3,2% (bouchon bleu clair), avec ratio sang/anticoagulant de 9 pour 1",
      "D) Tube avec EDTA dipotassique (bouchon violet)",
      "E) Tube avec fluorure de sodium (bouchon gris)"
    ],
    correctAnswers: [2],
    explanation: "Les examens d'hémostase sont réalisés sur plasma citraté (citrate trisodique 0,109 M à 3,2%). Le citrate chélate le calcium. Le respect du ratio 9 volumes de sang pour 1 volume d'anticoagulant (tube correctement rempli jusqu'au trait) est une condition pré-analytique capitale.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-07-cs1',
    courseId: 'crs-hemato-7',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un garçon de 4 ans consulte pour des hématomes volumineux apparus spontanément au niveau des cuisses et une hémarthrose récidivante du genou droit suite à un traumatisme minime. Il n'y a pas de purpura pétéchial ni de saignement muqueux spontané. Deux oncles maternels présenteraient une maladie hémorragique similaire.\n\nQuelle anomalie biologique suspectez-vous au bilan d'hémostase de première intention ?",
    options: [
      "A) Thrombopénie sévère avec TP et TCA normaux",
      "B) Allongement isolé du TCA avec TP, taux de plaquettes et temps de saignement normaux",
      "C) Allongement isolé du TP avec TCA normal",
      "D) Effondrement du fibrinogène et élévation des D-Dimères",
      "E) Anomalie isolée du temps d'occlusion sur PFA-100"
    ],
    correctAnswers: [1],
    explanation: "Le tableau (hémarthroses, hématomes musculaires profonds, transmission récessive liée à l'X chez un garçon avec oncles maternels atteints) est typique d'une hémophilie (A ou B). Le bilan d'hémostase montre un allongement isolé du TCA avec TP et plaquettes strictement normaux.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-cs2',
    courseId: 'crs-hemato-7',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Une jeune femme de 22 ans consulte pour des ménorragies invalidantes depuis la ménarche et des épistaxis fréquentes. Le bilan montre : Plaquettes 240 000 / mm³, TP 100%, TCA allongé à 44 s (témoin 30 s, ratio 1,47), PFA-100 allongé. L'épreuve de mélange malade + témoin normalise immédiatement le TCA.\n\nQuel diagnostic est le plus probable et quel dosage spécifique confirmera l'affection ?",
    options: [
      "A) Hémophilie A féminine avec dosage du facteur VIII",
      "B) Maladie de Willebrand avec dosage de l'antigène du facteur Willebrand (vWF:Ag) et de l'activité cofacteur de la ristocétine (vWF:RCo)",
      "C) Purpura thrombopénique thrombotique avec dosage de l'ADAMTS13",
      "D) Carence sévère en vitamine K avec test de Koller",
      "E) Déficit en facteur VII avec mesure de l'activité proconvertine"
    ],
    correctAnswers: [1],
    explanation: "Saignements cutanéo-muqueux (épistaxis, ménorragies), allongement du temps d'hémostase primaire (PFA) et allongement du TCA (car le vWF stabilise et transporte le facteur VIII dans la circulation) chez une jeune femme évoquent une maladie de Willebrand (type 1 le plus souvent). La confirmation repose sur vWF:Ag, vWF:RCo et FVIII:C.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-cs3',
    courseId: 'crs-hemato-7',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un homme de 58 ans atteint de cirrhose éthylique décompensée présente un TP à 38% et un TCA allongé (ratio 1,40). Le médecin souhaite savoir si cette coagulopathie est réversible par injection de vitamine K.\n\nQuel dosage biologique permettra de trancher formellement ?",
    options: [
      "A) Dosage du facteur II",
      "B) Dosage du facteur VII",
      "C) Dosage du facteur V",
      "D) Dosage du fibrinogène",
      "E) Dosage des D-Dimères"
    ],
    correctAnswers: [2],
    explanation: "Le facteur V est synthétisé par l'hépatocyte indépendamment de la vitamine K. Si le FV est abaissé parallèlement au TP, il s'agit d'une insuffisance hépatocellulaire (non corrigée par la vitamine K). Si le FV est normal avec baisse des facteurs II, VII, IX, X, il s'agit d'une carence en vitamine K (corrigée par l'administration parentérale de vitamine K = test de Koller).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-07-cs4',
    courseId: 'crs-hemato-7',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Une patiente de 32 ans sans antécédent hémorragique présente une thrombose veineuse profonde fémoro-poplitée proximale survenue sans facteur déclenchant. Le bilan de base retrouve : TP 98%, TCA allongé spontanément (ratio 1,65). Le test de mélange plasma malade + témoin ne corrige pas le TCA. Le dRVVT est allongé et se normalise en excès de phospholipides.\n\nQuelle est la conclusion diagnostique la plus adaptée ?",
    options: [
      "A) Maladie de Willebrand de type 2N",
      "B) Présence d'un anticoagulant circulant de type lupique (Antiphospholipides)",
      "C) Hémophilie A fruste",
      "D) Surdosage accidentel en héparine",
      "E) Déficit congénital sévère en facteur XI"
    ],
    correctAnswers: [1],
    explanation: "Un TCA allongé non corrigé par le mélange avec le plasma témoin traduit la présence d'un inhibiteur. Le dRVVT allongé corrigé par l'adjonction de phospholipides signe la présence d'un anticoagulant lupique (anticorps antiphospholipides). Bien qu'il allonge le TCA in vitro en interférant avec les phospholipides du réactif, il expose in vivo à un risque majeur de thrombose veineuse et artérielle, et non d'hémorragie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-07-cs5',
    courseId: 'crs-hemato-7',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un patient de 65 ans hospitalisé en réanimation pour choc septique à pyocyanique présente des saignements diffus aux points de ponction, des ecchymoses extensives et un suintement digestif. Biologie : Plaquettes 38 000 / mm³ (contre 220 000 à l'admission), TP 32%, TCA ratio 2,1, Fibrinogène 0,7 g/L (normale 2-4 g/L), D-Dimères > 10 000 ng/mL.\n\nQuelle est la prise en charge étiologique et symptomatique prioritaire ?",
    options: [
      "A) Traitement du choc septique (antibiothérapie adaptée) et perfusion de plasma frais congelé (PFC), concentrés plaquettaires et fibrinogène pour corriger les coagulopathies actives",
      "B) Héparine non fractionnée à dose curative forte isolée",
      "C) Injection urgente d'acide tranexamique à forte dose sans transfusion",
      "D) Facteur VII activé recombinant (Novoseven) en première intention chez un patient en sepsis",
      "E) Surveillance simple sans traitement tant que l'hémoglobine reste > 8 g/dL"
    ],
    correctAnswers: [0],
    explanation: "Il s'agit d'une CIVD aiguë décompensée avec saignements actifs sur choc septique. Le traitement étiologique (antibiothérapie, contrôle du foyer infectieux, réanimation hémodynamique) est la priorité absolue. Sur le plan symptomatique en présence de saignements actifs : transfusion de plaquettes (viser > 50 G/L), PFC (15 mL/kg) pour restaurer les facteurs et concentrés de fibrinogène (viser > 1,5 g/L).",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_7_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-07-01',
    courseId: 'crs-hemato-7',
    type: 'resume',
    title: "Mind Map Synthèse : Hémostase Physiologique & Exploration",
    contentMarkdown: `# Mind Map : Hémostase Physiologique & Exploration (Pr Benzouid)

\`\`\`
                                  HÉMOSTASE GLOBALE
                                          │
       ┌──────────────────────────────────┼──────────────────────────────────┐
       ▼                                  ▼                                  ▼
HÉMOSTASE PRIMAIRE                 COAGULATION PLASMATIQUE             FIBRINOLYSE
(Thrombus blanc)                   (Thrombus rouge)                    (Dégradation fibrine)
       │                                  │                                  │
 ┌─────┴─────┐                      ┌─────┴─────┐                      ┌─────┴─────┐
 ▼           ▼                      ▼           ▼                      ▼           ▼
Cellules   Plaquettes         Voie Exogène    Voie Endogène         Plasminogène Plasmine
Endothél.  + vWF              (Facteur VII)   (XII, XI, IX, VIII)         │           │
           + GP Ib/IX               │                 │             (t-PA, u-PA) (D-Dimères)
           + GP IIb/IIIa            └────────┬────────┘                      │
                                             ▼                       Inhibiteurs:
                                        Voie Commune                 PAI-1, α2-antiplasmine
                                        (X, V, II, Fibrinogène)
\`\`\`

## Tests d'exploration biologique et orientation :
1. **Plaquettes & PFA-100 / TS** : Hémostase primaire (Thrombopénies, thrombopathies, Willebrand).
2. **TP / Quick** : Voie exogène (VII) + commune (X, V, II, I). Cible INR pour AVK.
3. **TCA** : Voie endogène (XII, XI, IX, VIII) + commune (X, V, II, I). Surveillance HNF.
4. **Temps de Thrombine (TT)** : Fibrinoformation (Fibrinogène, PDF, Héparine).
5. **D-Dimères** : Fibrinolyse secondaire (CIVD, MTEV).
6. **Inhibiteurs physiologiques** : Antithrombine, Protéine C, Protéine S.`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-07-02',
    courseId: 'crs-hemato-7',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Bilan d'Hémostase",
    contentMarkdown: `### 🎯 Pièges Classiques aux Concours (Résidanat)

1. **TP bas isolé** :
   - Penser à un déficit en **Facteur VII** congénital ou carence très débutante en vitamine K (demi-vie du FVII = 4 à 6 heures).
2. **TCA allongé isolé** :
   - Malade qui saigne : **Hémophilie A (FVIII)**, **Hémophilie B (FIX)**, maladie de Willebrand.
   - Malade qui thrombose ou asymptomatique : **Anticoagulant lupique** ou déficit en **Facteur XII** (ne fait jamais saigner !).
3. **Différence IHC vs Carence Vitamine K** :
   - Regarder le **Facteur V** ! FV normal = carence Vit K ; FV bas = Insuffisance hépatocellulaire.
4. **Hémophilie A acquise (auto-anticorps)** :
   - Épreuve de mélange malade + témoin : corrigée immédiatement à froid, mais se réallonge après 2h d'incubation à 37°C.
5. **Déficit en Facteur XIII** :
   - Fait saigner abondamment (chute du cordon, hémorragies tardives), mais **TP, TCA, TS et Plaquettes sont STRICTEMENT NORMAUX**. Seul le test de solubilité à l'urée 5M est anormal.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 8: CYTOPÉNIES & APLASIE MÉDULLAIRE - Dr Rekab
// ==========================================
export const HEMATO_LESSON_8_QUESTIONS: Question[] = [
  {
    id: 'q-hem-08-01',
    courseId: 'crs-hemato-8',
    questionNumber: 1,
    type: 'QCM',
    content: "La définition d'une neutropénie chez l'adulte correspond à un taux de polynucléaires neutrophiles (PNN) inférieur à :",
    options: [
      "A) 2 500 / mm³",
      "B) 1 500 / mm³ (ou 1,5 G/L)",
      "C) 1 000 / mm³",
      "D) 500 / mm³",
      "E) 200 / mm³"
    ],
    correctAnswers: [1],
    explanation: "La neutropénie est définie par un chiffre de PNN < 1 500 / mm³ (1,5 G/L). Elle est dite modérée entre 1 000 et 1 500, sévère entre 500 et 1 000, et l'agranulocytose correspond à un taux de PNN < 500 / mm³ (seuil de risque infectieux majeur).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-02',
    courseId: 'crs-hemato-8',
    questionNumber: 2,
    type: 'QCM',
    content: "Une thrombopénie est affirmée chez l'adulte lorsque le chiffre de plaquettes sanguines est inférieur à :",
    options: [
      "A) 250 000 / mm³",
      "B) 200 000 / mm³",
      "C) 150 000 / mm³ (ou 150 G/L)",
      "D) 100 000 / mm³",
      "E) 50 000 / mm³"
    ],
    correctAnswers: [2],
    explanation: "La thrombopénie est définie par un taux de plaquettes inférieur à 150 000 / mm³ (150 G/L). Le risque hémorragique spontané devient important en dessous de 50 000 / mm³ et très sévère sous 20 000 / mm³.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-03',
    courseId: 'crs-hemato-8',
    questionNumber: 3,
    type: 'QCM',
    content: "Devant la découverte fortuite d'une thrombopénie isolée asymptomatique sur tube EDTA, quel premier geste élimine une fausse thrombopénie ?",
    options: [
      "A) Réaliser immédiatement une ponction de moelle osseuse (myélogramme)",
      "B) Contrôler la numération plaquettaire sur tube citraté et vérifier le frottis sanguin à la recherche d'amas plaquettaires",
      "C) Débuter une corticothérapie à 1 mg/kg/j",
      "D) Transfuser deux concentrés plaquettaires d'aphérèse",
      "E) Réaliser un scanner thoraco-abdomino-pelvien"
    ],
    correctAnswers: [1],
    explanation: "Une fausse thrombopénie à l'EDTA est fréquente (environ 1-2% des prélèvements) due à des anticorps froids agglutinants en présence d'EDTA. Il faut impérativement contrôler le frottis (visibilité des amas plaquettaires) et refaire la NFS sur tube citraté avant toute démarche invasive.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-04',
    courseId: 'crs-hemato-8',
    questionNumber: 4,
    type: 'QCM',
    content: "La définition d'une pancytopénie associe :",
    options: [
      "A) Une anémie, une éosinophilie et une lymphopénie",
      "B) Une anémie, une leucopénie (ou neutropénie) et une thrombopénie",
      "C) Une polyglobulie, une thrombocytose et une leucocytose",
      "D) Une anémie hémolytique et un purpura pétéchial",
      "E) Uniquement une baisse des trois lignées myéloïdes avec blastes circulants > 50%"
    ],
    correctAnswers: [1],
    explanation: "La pancytopénie est l'atteinte simultanée des trois lignées sanguines : lignée érythrocytaire (anémie), lignée granuleuse/blanche (leucopénie avec neutropénie) et lignée mégacaryocytaire/plaquettaire (thrombopénie).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-05',
    courseId: 'crs-hemato-8',
    questionNumber: 5,
    type: 'QCM',
    content: "L'aplasie médullaire acquise idiopathique est caractérisée par :",
    options: [
      "A) Une hypercellularité médullaire avec myélofibrose réticulinique",
      "B) Une disparition du tissu hématopoïétique médullaire remplacé par du tissu adipeux sans prolifération tumorale ni myélofibrose",
      "C) Une prolifération de blastes CD34+ envahissant plus de 20% de la moelle",
      "D) Une splénomégalie volumineuse constante avec hypersplénisme",
      "E) Une atteinte isolée de la lignée érythroblastique (érythroblastopénie pure)"
    ],
    correctAnswers: [1],
    explanation: "L'aplasie médullaire est une insuffisance médullaire quantitative globale caractérisée par une désertification de la moelle osseuse : disparition du tissu hématopoïétique remplacé par du tissu adipeux, sans prolifération anormale, sans fibrose et sans dysmyélopoïèse majeure.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-06',
    courseId: 'crs-hemato-8',
    questionNumber: 6,
    type: 'QCM',
    content: "Quel examen anatomopathologique est OBLIGATOIRE et indispensable pour affirmer le diagnostic d'aplasie médullaire ?",
    options: [
      "A) Le myélogramme par ponction sternale",
      "B) La biopsie ostéomédullaire (BOM)",
      "C) L'immunophénotypage des cellules sanguines",
      "D) Le caryotype médullaire",
      "E) La scintigraphie osseuse au technétium"
    ],
    correctAnswers: [1],
    explanation: "La biopsie ostéo-médullaire (BOM) est indispensable : elle permet d'évaluer quantitativement la richesse cellulaire médullaire (< 25 à 30%), d'éliminer une myélofibrose, un envahissement métastatique ou une leucémie à moelle bloquée, et de confirmer le remplacement graisseux.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-07',
    courseId: 'crs-hemato-8',
    questionNumber: 7,
    type: 'QCM',
    content: "À l'examen clinique d'un patient suspect d'aplasie médullaire idiopathique, la présence d'une splénomégalie ou d'adénopathies périphériques :",
    options: [
      "A) Est un critère diagnostique majeur en faveur de l'aplasie",
      "B) Doit faire remettre en question le diagnostic d'aplasie médullaire et rechercher une hémopathie maligne ou un hypersplénisme",
      "C) Témoigne de la régénération hématopoïétique extramédullaire habituelle",
      "D) Justifie la réalisation d'une splénectomie en urgence",
      "E) Est observée dans plus de 80% des cas d'aplasie idiopathique"
    ],
    correctAnswers: [1],
    explanation: "L'aplasie médullaire est cliniquement « nue » : il n'y a JAMAIS de splénomégalie ni d'adénopathies. La présence d'un syndrome tumoral (adénopathies, splénomégalie, hépatomégalie) doit faire suspecter une leucémie aiguë, un lymphome, une myélofibrose ou une maladie de surcharge.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-08',
    courseId: 'crs-hemato-8',
    questionNumber: 8,
    type: 'QCM',
    content: "Selon la classification de Camitta, l'aplasie médullaire est dite SÉVÈRE lorsqu'il existe une moelle hypoplasique (< 25% de cellularité) associée à au moins 2 des 3 critères suivants :",
    options: [
      "A) PNN < 500 / mm³, Plaquettes < 20 000 / mm³, Réticulocytes < 20 000 / mm³",
      "B) PNN < 1 000 / mm³, Plaquettes < 50 000 / mm³, Hb < 10 g/dL",
      "C) PNN < 200 / mm³, Plaquettes < 10 000 / mm³, Réticulocytes < 50 000 / mm³",
      "D) PNN < 1 500 / mm³, Plaquettes < 100 000 / mm³, Blastes < 5%",
      "E) PNN < 800 / mm³, Plaquettes < 30 000 / mm³, Ferritine > 1 000 µg/L"
    ],
    correctAnswers: [0],
    explanation: "Critères de Camitta pour l'aplasie médullaire sévère (au moins 2 sur 3 avec cellularité BOM < 25%) : PNN < 500 / mm³ (0,5 G/L), Plaquettes < 20 000 / mm³ (20 G/L), Réticulocytes < 20 000 / mm³ (ou < 1%). Si les PNN sont < 200 / mm³, elle est classée très sévère (vSAA).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-09',
    courseId: 'crs-hemato-8',
    questionNumber: 9,
    type: 'QCM',
    content: "Dans l'aplasie médullaire très sévère, le chiffre de polynucléaires neutrophiles est inférieur à :",
    options: [
      "A) 100 / mm³",
      "B) 200 / mm³",
      "C) 500 / mm³",
      "D) 1 000 / mm³",
      "E) 1 500 / mm³"
    ],
    correctAnswers: [1],
    explanation: "L'aplasie médullaire très sévère (vSAA : very Severe Aplastic Anemia) répond aux critères de Camitta avec un taux de neutrophiles résiduel strictement inférieur à 0,2 G/L (200 / mm³).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-10',
    courseId: 'crs-hemato-8',
    questionNumber: 10,
    type: 'QCM',
    content: "Parmi les causes médicamenteuses d'aplasie médullaire ou d'agranulocytose aiguë immuno-allergique, quel antibiotique historique est tristement célèbre ?",
    options: [
      "A) L'amoxicilline",
      "B) Le chloramphénicol",
      "C) La spiramycine",
      "D) La ceftriaxone",
      "E) La gentamicine"
    ],
    correctAnswers: [1],
    explanation: "Le chloramphénicol est la cause médicamenteuse historique d'aplasie médullaire (toxicité dose-dépendante réversible ou surtout réaction idiosyncrasique immuno-allergique gravissime et irréversible indépendante de la dose).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-11',
    courseId: 'crs-hemato-8',
    questionNumber: 11,
    type: 'QCM',
    content: "Quelle affection génétique constitutionnelle associe une insuffisance médullaire progressive avec cassures chromosomiques (sensibilité au diépoxybutane) et malformations congénitales (anomalies du pouce, taches café-au-lait) ?",
    options: [
      "A) La maladie de Gaucher",
      "B) L'anémie de Fanconi",
      "C) Le syndrome de Blackfan-Diamond",
      "D) Le syndrome de Kostmann",
      "E) La dyskératose congénitale"
    ],
    correctAnswers: [1],
    explanation: "L'anémie de Fanconi est la cause la plus fréquente d'aplasie médullaire constitutionnelle. Transmission autosomique récessive, anomalies physiques (pouces surnuméraires ou hypoplasiques, petite taille, microcéphalie, taches café au lait) et test de cassures chromosomiques positif sous mitomycine C ou diépoxybutane.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-12',
    courseId: 'crs-hemato-8',
    questionNumber: 12,
    type: 'QCM',
    content: "L'érythroblastopénie pure acquise (syndrome de Blackfan-Diamond chez l'enfant ou forme acquise de l'adulte) est fréquemment associée à quelle tumeur du médiastin antérieur ?",
    options: [
      "A) Un phéochromocytome",
      "B) Un thymome",
      "C) Un tératome malin",
      "D) Un adénocarcinome pulmonaire",
      "E) Un neuroblastome"
    ],
    correctAnswers: [1],
    explanation: "L'érythroblastopénie pure de l'adulte (disparition isolée de la lignée rouge à la moelle avec réticulocytes effondrés) est associée dans 10 à 15% des cas à un thymome (bénin ou malin). Elle peut également être secondaire à une infection par le Parvovirus B19.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-13',
    courseId: 'crs-hemato-8',
    questionNumber: 13,
    type: 'QCM',
    content: "L'hémoglobinurie paroxystique nocturne (HPN, maladie de Marchiafava-Micheli) est causée par une mutation somatique acquise du gène :",
    options: [
      "A) JAK2",
      "B) PIG-A",
      "C) BCR-ABL",
      "D) TP53",
      "E) FLT3"
    ],
    correctAnswers: [1],
    explanation: "L'HPN est due à une mutation acquise du gène PIG-A sur le chromosome X dans une cellule souche hématopoïétique, entraînant un déficit de synthèse de l'ancre GPI (glycosylphosphatidylinositol) et l'absence des protéines protectrices du complément CD55 (DAF) et CD59 (MIRL) à la surface des cellules sanguines.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-14',
    courseId: 'crs-hemato-8',
    questionNumber: 14,
    type: 'QCM',
    content: "Pour confirmer le clone HPN chez un patient présentant une aplasie médullaire ou une cytopénie inexpliquée, l'examen de référence est :",
    options: [
      "A) Le test de Ham-Dacie",
      "B) La cytométrie en flux (recherche du déficit en CD55 et CD59 sur les polynucléaires et hématies)",
      "C) Le test de Coombs direct",
      "D) La biopsie ganglionnaire",
      "E) Le myélogramme cytogénétique"
    ],
    correctAnswers: [1],
    explanation: "L'examen de référence (Gold Standard) pour le diagnostic d'HPN est la cytométrie en flux multiparamétrique avec réactif FLAER, montrant la déficience des marqueurs ancrés par le GPI (notamment CD55 et CD59) sur les neutrophiles, monocytes et érythrocytes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-15',
    courseId: 'crs-hemato-8',
    questionNumber: 15,
    type: 'QCM',
    content: "Le traitement curatif de premier choix d'une aplasie médullaire sévère chez un sujet jeune (< 40 ans) disposant d'un donneur intrafamilial HLA-identique est :",
    options: [
      "A) La corticothérapie prolongée à forte dose",
      "B) La greffe allogénique de cellules souches hématopoïétiques (allogreffe de moelle)",
      "C) Le traitement immunosuppresseur par sérum antilymphocytaire (SAL) + ciclosporine",
      "D) Les transfusions itératives au long cours",
      "E) Les injections d'érythropoïétine (EPO) seule"
    ],
    correctAnswers: [1],
    explanation: "Chez le patient jeune (< 40 ans) atteint d'aplasie médullaire sévère, dès lors qu'il existe un donneur fratrie HLA géno-identique, l'allogreffe de CSH est le traitement de référence curatif de première intention, permettant une survie globale à long terme supérieure à 80-90%.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-16',
    courseId: 'crs-hemato-8',
    questionNumber: 16,
    type: 'QCM',
    content: "Chez un patient de plus de 40 ans ou ne disposant pas de donneur familial HLA-identique, le traitement de référence de l'aplasie médullaire sévère est :",
    options: [
      "A) L'association Sérum Antilymphocytaire (SAL de cheval ou de lapin) + Ciclosporine A (CsA)",
      "B) La polychimiothérapie type CHOP",
      "C) La radiothérapie corporelle totale",
      "D) La splénectomie chirurgicale",
      "E) Les perfusions quotidiennes de fer intraveineux"
    ],
    correctAnswers: [0],
    explanation: "Le traitement immunosuppresseur intensif associant SAL (cheval/lapin) et ciclosporine A (associé de plus en plus à un agoniste du récepteur de la thrombopoïétine comme l'Eltrombopag) permet d'obtenir une réponse hématologique durable chez environ 70% des patients.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-17',
    courseId: 'crs-hemato-8',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle mesure transfusionnelle est OBLIGATOIRE chez un patient atteint d'aplasie médullaire susceptible de bénéficier ultérieurement d'une allogreffe de moelle ?",
    options: [
      "A) Utiliser exclusivement du sang total frais non déleucocyté",
      "B) Utiliser des produits sanguins labiles (CGR, plaquettes) déleucocytés, phénotypés, et irradiés pour éviter l'allo-immunisation et la GVH post-transfusionnelle",
      "C) Transfuser le sang des membres de la famille directe (frères et sœurs)",
      "D) Éviter toute transfusion même en cas d'hémoglobine inférieure à 4 g/dL",
      "E) Donner des transfusions massives systématiques pour maintenir l'Hb > 14 g/dL"
    ],
    correctAnswers: [1],
    explanation: "Les PSL doivent être déleucocytés (prévention de l'allo-immunisation HLA et de la transmission du CMV), phénotypés et irradiés (prévention de la réaction du greffon contre l'hôte post-transfusionnelle). Il est formellement interdit de transfuser avec le sang des membres de la famille pour ne pas risquer une immunisation contre le futur donneur !",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-18',
    courseId: 'crs-hemato-8',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans le bilan étiologique d'une pancytopénie avec moelle riche, quelles sont les étiologies les plus fréquentes ?",
    options: [
      "A) Aplasie médullaire idiopathique et fibrose médullaire primitive",
      "B) Syndrome myélodysplasique, carence en folates ou vitamine B12 (mégaloblastose), leucémie aiguë, et hypersplénisme",
      "C) Anémie ferriprive débutante et thalassémie mineure",
      "D) Maladie de Willebrand et hémophilie",
      "E) Purpura rhumatoïde de Henoch-Schönlein"
    ],
    correctAnswers: [1],
    explanation: "Une pancytopénie avec moelle riche (cellularité conservée ou augmentée) oriente vers : une hématopoïèse inefficace par avortement intramédullaire (carence en B12/B9, syndrome myélodysplasique), une infiltration médullaire blastique (leucémie aiguë) ou une destruction/séquestration périphérique (hypersplénisme volumineux).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-19',
    courseId: 'crs-hemato-8',
    questionNumber: 19,
    type: 'QCM',
    content: "L'apparition d'une fièvre chez un patient aplasique avec PNN < 500 / mm³ (neutropénie fébrile) constitue :",
    options: [
      "A) Une réaction banale à surveiller sans antibiotiques pendant 48 heures",
      "B) Une urgence thérapeutique absolue imposant des hémocultures immédiates et la mise en route sans délai d'une antibiothérapie intraveineuse bactéricide à large spectre anti-pseudomonas",
      "C) Une indication formelle à une ponction lombaire immédiate",
      "D) Une contre-indication aux antibiotiques jusqu'à isolement du germe",
      "E) Un motif exclusif d'isolement sans traitement médical"
    ],
    correctAnswers: [1],
    explanation: "La neutropénie fébrile chez l'aplasique est une urgence vitale (risque de choc septique foudroyant en quelques heures par translocation bactérienne à point de départ digestif). Prélèvements bactériologiques immédiats (hémocultures sur VVC et périphérie) puis bêtalactamine anti-pyocyanique (Céfépime, Tazocilline ou Méropénème) débutée dans l'heure.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-20',
    courseId: 'crs-hemato-8',
    questionNumber: 20,
    type: 'QCM',
    content: "La maladie de la « maladie sérique » est une complication redoutée survenant 7 à 14 jours après l'administration de :",
    options: [
      "A) La ciclosporine A",
      "B) Le sérum antilymphocytaire (SAL)",
      "C) L'amoxicilline",
      "D) L'érythropoïétine recombinante",
      "E) Le paracétamol"
    ],
    correctAnswers: [1],
    explanation: "Le SAL (protéines hétérologues équines ou léporines) induit fréquemment une maladie sérique vers J8-J12 caractérisée par une fièvre, arthralgies, éruption cutanée urticarienne et protéinurie par dépôt de complexes immuns. Elle est prévenue et traitée par une corticothérapie associée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-21',
    courseId: 'crs-hemato-8',
    questionNumber: 21,
    type: 'QCM',
    content: "L'Eltrombopag (Revolade) est utilisé dans l'aplasie médullaire sévère réfractaire en tant que :",
    options: [
      "A) Chimiothérapie cytotoxique alkylante",
      "B) Agoniste synthétique du récepteur de la thrombopoïétine (TPO-R / c-Mpl)",
      "C) Inhibiteur de la calcineurine",
      "D) Anticorps monoclonal anti-CD20",
      "E) Antagoniste des récepteurs de l'interleukine 2"
    ],
    correctAnswers: [1],
    explanation: "L'Eltrombopag est une petite molécule non peptidique agoniste oral du récepteur de la thrombopoïétine (c-Mpl). Il stimule la prolifération et la différenciation des mégacaryocytes mais aussi des cellules souches hématopoïétiques multipotentes primitives, favorisant la récupération trilignée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-22',
    courseId: 'crs-hemato-8',
    questionNumber: 22,
    type: 'QCM',
    content: "Quel virus est classiquement responsable d'une aplasie médullaire post-hépatitique survenant quelques semaines après un épisode d'hépatite aiguë ?",
    options: [
      "A) Virus de l'hépatite A uniquement",
      "B) Virus des hépatites séronégatives (non-A, non-B, non-C, non-E)",
      "C) Virus de l'hépatite Delta",
      "D) Rotavirus",
      "E) Virus de la rage"
    ],
    correctAnswers: [1],
    explanation: "L'aplasie médullaire post-hépatitique survient généralement 2 à 3 mois après un épisode d'hépatite aiguë le plus souvent séronégative (non-A, non-B, non-C, non-E). C'est une forme particulièrement sévère touchant préférentiellement les hommes jeunes.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-08-23',
    courseId: 'crs-hemato-8',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans le syndrome d'activation macrophagique (SAM / lymphohistiocytose hémophagocytaire), la cytopénie est associée à :",
    options: [
      "A) Une hypoferritinémie majeure et une hypertriglycéridémie",
      "B) Une hyperferritinémie extrême, une hypertriglycéridémie, une hypofibrinogénémie et une hémophagocytose médullaire",
      "C) Une hypocalcémie avec aplasie médullaire graisseuse",
      "D) Une absence totale de fièvre",
      "E) Une polyglobulie avec thrombocytose"
    ],
    correctAnswers: [1],
    explanation: "Le SAM associe fièvre élevée, hépatosplénomégalie, bicytopénie ou pancytopénie, ferritinémie très élevée (> 1000 à 10 000 µg/L), hypertriglycéridémie, hypofibrinogénémie, élévation des LDH et présence d'images d'hémophagocytose (macrophages ingérant hématies, plaquettes ou PNN) sur le myélogramme.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-24',
    courseId: 'crs-hemato-8',
    questionNumber: 24,
    type: 'QCM',
    content: "Le seuil transfusionnel plaquettaire prophylactique recommandé chez un patient aplasique stable sans fièvre ni saignement actif est généralement de :",
    options: [
      "A) 50 000 / mm³",
      "B) 30 000 / mm³",
      "C) 10 000 / mm³",
      "D) 5 000 / mm³",
      "E) 1 000 / mm³"
    ],
    correctAnswers: [2],
    explanation: "Chez un patient stable, apyrétique, sans complication hémorragique ni traitement interférant avec l'hémostase, le seuil de transfusion plaquettaire prophylactique standard est fixé à 10 000 / mm³ (10 G/L). En cas de fièvre ou d'infection, ce seuil est remonté à 20 000 / mm³.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-25',
    courseId: 'crs-hemato-8',
    questionNumber: 25,
    type: 'QCM',
    content: "L'évolution à long terme d'une aplasie médullaire idiopathique traitée par immunosuppresseurs comporte un risque d'évolution clonale tardive vers :",
    options: [
      "A) Une polyglobulie de Vaquez",
      "B) Une hémoglobinurie paroxystique nocturne (HPN), un syndrome myélodysplasique (SMD) ou une leucémie aiguë myéloïde (LAM)",
      "C) Une leucémie lymphoïde chronique",
      "D) Un myélome multiple à IgG",
      "E) Une hémochromatose primitive"
    ],
    correctAnswers: [1],
    explanation: "Environ 15 à 20% des patients traités avec succès par traitement immunosuppresseur développent une évolution clonale tardive : émergence d'un clone HPN hémolytique ou clinique, anomalies cytogénétiques secondaires (monosomie 7, trisomie 8), syndrome myélodysplasique ou transformation en leucémie aiguë myéloïde.",
    difficulty: 'moyen'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-08-cs1',
    courseId: 'crs-hemato-8',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un jeune homme de 24 ans sans antécédents consulte pour une asthénie majeure, des gingivorragies et des pétéchies aux membres inférieurs. L'examen physique ne retrouve ni adénopathie, ni splénomégalie, ni hépatomégalie. La NFS montre : Hb 6,8 g/dL, VGM 98 fL, Réticulocytes 12 000 / mm³, PNN 350 / mm³, Plaquettes 11 000 / mm³.\n\nQuelle est la qualification de cette cytopénie et quelle anomalie attend-on à la BOM ?",
    options: [
      "A) Pancytopénie modérée ; BOM montrant une infiltration par des blastes > 50%",
      "B) Pancytopénie sévère arégénérative ; BOM montrant une moelle désertique avec cellularité hématopoïétique < 20% remplacée par du tissu adipeux",
      "C) Bicytopénie périphérique ; BOM normale avec hyperplasie mégacaryocytaire",
      "D) Hypersplénisme isolé ; BOM hypercellulaire trilignée",
      "E) Aplasie érythroblastique pure ; moelle normale sauf absence d'érythroblastes"
    ],
    correctAnswers: [1],
    explanation: "Il s'agit d'une pancytopénie sévère arégénérative (PNN < 500, plaquettes < 20 000, réticulocytes < 20 000). L'absence de syndrome tumoral oriente fortement vers une aplasie médullaire sévère. La BOM confirme une cellularité < 25% avec tissu adipeux prédominant et absence de fibrose ou d'envahissement tumoral.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-cs2',
    courseId: 'crs-hemato-8',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Pour ce même jeune homme de 24 ans chez qui le diagnostic d'aplasie médullaire idiopathique sévère est confirmé par la BOM, le bilan HLA familial retrouve un frère de 21 ans 100% compatible (donneur HLA géno-identique).\n\nQuelle est la stratégie thérapeutique de première ligne à proposer ?",
    options: [
      "A) Débuter une chimiothérapie intensive par Daunorubicine + Cytarabine (protocole 7+3)",
      "B) Allogreffe de cellules souches hématopoïétiques à partir de la moelle du frère HLA-identique",
      "C) Corticothérapie forte dose à 2 mg/kg/j pendant 6 mois",
      "D) Transfusions de sang total hebdomadaires données par le frère",
      "E) Splénectomie chirurgicale d'hémostase"
    ],
    correctAnswers: [1],
    explanation: "Chez un sujet de moins de 40 ans atteint d'aplasie médullaire sévère avec donneur familial HLA-identique, l'allogreffe de cellules souches hématopoïétiques est le traitement de choix curatif de première ligne, avec des taux de guérison supérieurs à 85-90%.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-08-cs3',
    courseId: 'crs-hemato-8',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une femme de 52 ans présente une aplasie médullaire sévère idiopathique. Elle n'a ni frère ni sœur. Elle est mise sous Sérum Antilymphocytaire (SAL) de cheval associé à la Ciclosporine A. À J9 du début de la perfusion, elle présente une fièvre à 39°C, des polyarthralgies bilatérales des poignets et des genoux, et une éruption urticarienne prurigineuse.\n\nQuel diagnostic portez-vous et quel est le traitement immédiat ?",
    options: [
      "A) Choc anaphylactique immédiat à l'héparine ; arrêt de l'héparine",
      "B) Maladie sérique due au SAL ; traitement par corticothérapie intraveineuse (Méthylprednisolone)",
      "C) Sepsis nosocomial à staphylocoque doré ; Vancomycine IV seule",
      "D) Rejet de greffe hyperaigu ; intensification de la ciclosporine",
      "E) Transformation en leucémie aiguë ; chimiothérapie intensive"
    ],
    correctAnswers: [1],
    explanation: "La triade fièvre, arthralgies et éruption cutanée survenant entre J7 et J14 d'un traitement par sérum hétérologue (SAL) est caractéristique de la maladie sérique (hypersensibilité de type III par complexes immuns circulants). Le traitement repose sur l'augmentation ou l'adjonction d'une corticothérapie intraveineuse.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-cs4',
    courseId: 'crs-hemato-8',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 35 ans en cours de bilan pour pancytopénie rapporte des urines foncées couleur porto le matin au réveil et des antécédents d'épisodes de douleurs abdominales intenses. La biologie objective : Hb 7,2 g/dL, Réticulocytes 160 000 / mm³, LDH 1850 UI/L, Haptoglobine indétectable, Bilirubine libre augmentée. Le test de Coombs direct est négatif.\n\nQuelle pathologie suspectez-vous et quel examen affirme le diagnostic ?",
    options: [
      "A) Anémie de Biermer avec fibroscopie gastrique",
      "B) Hémoglobinurie Paroxystique Nocturne (HPN) avec cytométrie en flux à la recherche d'un clone CD55-/CD59-",
      "C) Maladie des agglutinines froides avec test de Coombs au C3d",
      "D) Microsphérocytose héréditaire avec test d'auto-hémolyse",
      "E) Saturnisme professionnel avec plombémie"
    ],
    correctAnswers: [1],
    explanation: "Anémie hémolytique intra-vasculaire (urines foncées matinales, LDH très élevées, haptoglobine effondrée) à test de Coombs négatif avec douleurs abdominales (thromboses veineuses viscérales a minima ou spasmes musculaires lisses par captation du NO par l'hémoglobine libre) = tableau classique de l'HPN. Diagnostic affirmé par la cytométrie en flux démontrant la perte des marqueurs d'ancrage GPI (CD55, CD59, FLAER).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-08-cs5',
    courseId: 'crs-hemato-8',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un enfant de 7 ans présente une anémie arégénérative associée à une thrombopénie. L'examen physique met en évidence une petite taille (< 3e percentile), une microcéphalie, des taches cutanées café-au-lait disséminées et une absence congénitale du pouce droit avec hypoplasie du radius.\n\nQuel test biologique spécialisé confirmera le diagnostic d'anémie de Fanconi ?",
    options: [
      "A) Électrophorèse de l'hémoglobine sur acétate de cellulose",
      "B) Test de cassures chromosomiques induites par le diépoxybutane (DEB) ou la mitomycine C sur culture de lymphocytes",
      "C) Dosage des folates intra-érythrocytaires",
      "D) Recherche de la mutation JAK2 V617F",
      "E) Test à la sueur (ionophorèse à la pilocarpine)"
    ],
    correctAnswers: [1],
    explanation: "L'anémie de Fanconi associe insuffisance médullaire progressive et malformations caractéristiques (pouce, radius, petite taille, pigmentation cutanée). La signature diagnostique est la mise en évidence d'une hypersensibilité des chromosomes aux agents pontants de l'ADN (diépoxybutane ou mitomycine C) provoquant des cassures et figures radiaires chromosomiques pathognomoniques.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_8_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-08-01',
    courseId: 'crs-hemato-8',
    type: 'resume',
    title: "Mind Map Synthèse : Cytopénies & Aplasie Médullaire",
    contentMarkdown: `# Mind Map : Cytopénies & Aplasie Médullaire (Dr Rekab)

\`\`\`
                                  CYTOPÉNIES SANGUINES
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         ▼                                                                   ▼
CYTOPÉNIE PÉRIPHÉRIQUE                                            CYTOPÉNIE CENTRALE
(Moelle riche, régénérative)                                     (Moelle pauvre / Inefficace)
   - Destruction immunologique (PTI, AHAI)                            - Envahissement (LA, Métastases)
   - Consommation (CIVD, MAT)                                         - Myélodysplasie, Carence B12/B9
   - Séquestration splénique (Hypersplénisme)                         - APLASIE MÉDULLAIRE (Moelle désertique)
\`\`\`

## Aplasie Médullaire Idiopathique :
- **Clinique** : Trépied anémique, infectieux, hémorragique. **ZÉRO syndrome tumoral** (ni SPM, ni ADP).
- **Diagnostic** : Biopsie Ostéo-Médullaire (**BOM indispensable**) : Richesse < 25-30%, tissu adipeux.
- **Classification de Camitta (Sévère = Cellularité < 25% + 2 critères)** :
  1. PNN < 500 / mm³
  2. Plaquettes < 20 000 / mm³
  3. Réticulocytes < 20 000 / mm³
  *(Très sévère si PNN < 200 / mm³)*.
- **Traitement** :
  - **< 40 ans + Donneur HLA identique** : Allogreffe de moelle osseuse (CSH).
  - **> 40 ans ou sans donneur** : Sérum Antilymphocytaire (SAL) + Ciclosporine A (+ Eltrombopag).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-08-02',
    courseId: 'crs-hemato-8',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Aplasie & Cytopénies",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **La Fausse Thrombopénie à l'EDTA** :
   - Réflexe absolu : vérifier le frottis et redoser sur tube citraté avant de s'affoler !
2. **Moelle de l'Aplasie** :
   - Un myélogramme peut être blanc par « ponction blanche » technique. Seule la **BOM** apporte la certitude anatomopathologique.
3. **Syndrome tumoral = NON APLASIE** :
   - Si la question mentionne une splénomégalie de 3 travers de doigt ou des adénopathies cervicales, ÉLIMINER l'aplasie médullaire idiopathique (penser à Leucémie Aiguë, Lymphome, Leucémie à Tricholeucocytes ou Hypersplénisme).
4. **Allogreffe et Transfusions** :
   - Règle d'or : Ne JAMAIS transfuser un candidat à la greffe avec le sang de sa famille (risque d'allo-immunisation contre les antigènes mineurs du donneur = rejet de greffe).
5. **Complication précoce vs tardive du SAL** :
   - Précoce (J1-J3) : Choc anaphylactique, fièvre.
   - Secondaire (J8-J12) : Maladie sérique (fièvre + arthralgies + rash cutané).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 9: LLC - FICHES DE RÉVISION - Pr S. Taoussi
// ==========================================
export const HEMATO_LESSON_9_QUESTIONS: Question[] = [
  {
    id: 'q-hem-09-01',
    courseId: 'crs-hemato-9',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans les fiches de révision de la LLC, le critère hématologique indispensable pour définir une hyperlymphocytose B monoclonale de la LLC est :",
    options: [
      "A) Lymphocytes B monoclonaux ≥ 5 000 / mm³ (5 G/L) circulants persistant plus de 3 mois",
      "B) Blastes sanguins ≥ 20%",
      "C) Présence d'un pic monoclonal sérique d'IgG > 30 g/L",
      "D) Neutropénie < 500 / mm³",
      "E) Monocytes sanguins > 1 000 / mm³"
    ],
    correctAnswers: [0],
    explanation: "Le diagnostic de LLC repose sur la présence d'une lymphocytose sanguine mature ≥ 5 G/L (5 000 / mm³) persistant plus de 3 mois, dont le caractère clonal B est affirmé par l'immunophénotypage montrant une restriction de chaîne légère kappa ou lambda.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-02',
    courseId: 'crs-hemato-9',
    questionNumber: 2,
    type: 'QCM',
    content: "Sur le frottis sanguin d'un patient atteint de LLC typique, quel élément cytologique est très caractéristique ?",
    options: [
      "A) Corps de Howell-Jolly dans les hématies",
      "B) Ombres de Gümprecht (lymphocytes fragiles lysés lors de l'étalement)",
      "C) Bâtonnets d'Auer intracytoplasmiques",
      "D) Érythroblastes circulants avec ponts internucléaires",
      "E) Granulations toxiques intra-neutrophiles"
    ],
    correctAnswers: [1],
    explanation: "Les ombres de Gümprecht représentent des lymphocytes B tumoraux fragiles écrasés et éclatés lors de la confection du frottis sanguin. Leur présence en grand nombre est très évocatrice de la LLC.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-03',
    courseId: 'crs-hemato-9',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les 5 critères du score immunologique de Matutes, lequel attribue un point s'il est NÉGATIF ou très faible ?",
    options: [
      "A) CD5",
      "B) CD23",
      "C) FMC7",
      "D) CD19",
      "E) CD20"
    ],
    correctAnswers: [2],
    explanation: "Dans le score de Matutes : CD5+ (+1), CD23+ (+1), FMC7 NÉGATIF (+1), Immunoglobulines de surface (sIg) faibles (+1), CD22 ou CD79b faible/négatif (+1). Un score de 4 ou 5 sur 5 affirme une LLC typique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-04',
    courseId: 'crs-hemato-9',
    questionNumber: 4,
    type: 'QCM',
    content: "Selon la classification de Binet, le stade A est défini par :",
    options: [
      "A) Moins de 3 aires ganglionnaires atteintes, sans anémie (Hb ≥ 10 g/dL) ni thrombopénie (Plaquettes ≥ 100 G/L)",
      "B) 3 aires ganglionnaires atteintes ou plus, sans cytopénie",
      "C) Présence obligatoire d'une anémie sévère < 8 g/dL",
      "D) Thrombopénie < 100 000 / mm³ isolée",
      "E) Présence de fièvre et d'amaigrissement de plus de 10%"
    ],
    correctAnswers: [0],
    explanation: "Classification pronostique de Binet : Stade A = < 3 aires ganglionnaires atteintes, sans anémie (Hb ≥ 10 g/dL) ni thrombopénie (≥ 100 G/L). Survie médiane > 10-12 ans.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-05',
    courseId: 'crs-hemato-9',
    questionNumber: 5,
    type: 'QCM',
    content: "Les 5 aires ganglionnaires prises en compte dans la classification de Binet sont :",
    options: [
      "A) Cervicale, axillaire, inguinale, médiastinale et abdominale",
      "B) Cervicale (bilatérale ou unilatérale = 1 aire), axillaire (1 aire), inguinale (1 aire), splénomégalie (1 aire), hépatomégalie (1 aire)",
      "C) Ganglions sus-claviculaires droits, sus-claviculaires gauches, mésentériques, para-aortiques et poplités",
      "D) Ganglions amygdaliens, rétro-péritonéaux, iliaques, fémoraux et épitrochléens",
      "E) Uniquement les aires ganglionnaires superficielles gauches et droites comptées séparément"
    ],
    correctAnswers: [1],
    explanation: "Dans Binet, on compte 5 territoires : 1. Cervical (bilatéral ou unilatéral = 1), 2. Axillaire (bilatéral ou unilatéral = 1), 3. Inguinal (bilatéral ou unilatéral = 1), 4. Splénomégalie (palpable = 1), 5. Hépatomégalie (palpable = 1). Les atteintes profondes (scanner) ne sont pas comptées.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-06',
    courseId: 'crs-hemato-9',
    questionNumber: 6,
    type: 'QCM',
    content: "Quelle anomalie cytogénétique confère à la LLC le pronostic le plus péjoratif et une résistance aux chimiothérapies conventionnelles (fludarabine) ?",
    options: [
      "A) La délétion 13q14 isolée",
      "B) La trisomie 12",
      "C) La délétion 17p13 (locus du gène TP53) ou mutation de TP53",
      "D) La délétion 11q",
      "E) La translocation t(14;18)"
    ],
    correctAnswers: [2],
    explanation: "La délétion 17p (ou mutation de TP53) confère une chimiorésistance complète aux analogues des purines (Fludarabine) et aux agents alkylants. Elle impose l'utilisation de thérapies ciblées (inhibiteurs de BTK comme l'Ibrutinib, ou inhibiteurs de BCL-2 comme le Vénétoclax).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-07',
    courseId: 'crs-hemato-9',
    questionNumber: 7,
    type: 'QCM',
    content: "L'anomalie cytogénétique la plus fréquemment retrouvée dans la LLC (dans environ 50% des cas) et associée à un pronostic favorable lorsqu'elle est isolée est :",
    options: [
      "A) La délétion 17p",
      "B) La délétion 13q (del 13q14)",
      "C) La translocation t(9;22)",
      "D) La délétion 11q23",
      "E) La trisomie 21"
    ],
    correctAnswers: [1],
    explanation: "La del(13q14) est l'anomalie génétique la plus fréquente de la LLC (55%). Lorsqu'elle est isolée (sans del 17p ni del 11q), elle est de bon pronostic, associée à une longue survie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-08',
    courseId: 'crs-hemato-9',
    questionNumber: 8,
    type: 'QCM',
    content: "La transformation de Richter au cours de la LLC correspond à :",
    options: [
      "A) L'évolution vers une leucémie myéloïde aiguë réfractaire",
      "B) La transformation agressive en lymphome diffus à grandes cellules B (LDGCB) ou plus rarement en lymphome de Hodgkin",
      "C) La survenue d'une aplasie médullaire d'origine auto-immune",
      "D) L'apparition d'une polyglobulie secondaire",
      "E) La rémission spontanée complète de la LLC"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Richter survient chez 2 à 8% des LLC. Il correspond à la transformation histologique agressive en lymphome diffus à grandes cellules B (ou parfois maladie de Hodgkin), marquée cliniquement par une altération brutale de l'état général, fièvre, augmentation rapide d'une adénopathie asymétrique et ascension des LDH.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-09',
    courseId: 'crs-hemato-9',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle complication infectieuse immunologique fréquente explique la prédisposition majeure des patients atteints de LLC aux infections bactériennes à germes encapsulés (Pneumocoque, Haemophilus) ?",
    options: [
      "A) L'hypogammaglobulinémie progressive",
      "B) L'asplénie anatomique congénitale",
      "C) Le déficit en complément C1q",
      "D) L'inactivation de la voie alterne du complément",
      "E) La thrombocytose réactionnelle"
    ],
    correctAnswers: [0],
    explanation: "L'hypogammaglobulinémie est constante au cours de l'évolution de la LLC (touchant les IgG, IgA et IgM), due à l'anomalie fonctionnelle des lymphocytes B et T régulateurs. Elle est responsable d'infections respiratoires et ORL récidivantes à bactéries encapsulées.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-10',
    courseId: 'crs-hemato-9',
    questionNumber: 10,
    type: 'QCM',
    content: "Devant une anémie apparaissant brutalement chez un patient suivi pour LLC au stade A stable, quel mécanisme non tumoral doit être impérativement éliminé par un test de Coombs direct ?",
    options: [
      "A) Une carence martiale par saignement occulte",
      "B) Une anémie hémolytique auto-immune (AHAI) à anticorps chauds",
      "C) Une érythroblastopénie virale à Parvovirus B19",
      "D) Un envahissement blastique aigu",
      "E) Une intoxication au plomb"
    ],
    correctAnswers: [1],
    explanation: "La LLC s'accompagne fréquemment de cytopénies auto-immunes (AHAI dans 10-15% des cas, PTI dans 2-5%). L'AHAI se manifeste par une anémie régénérative avec bilirubine libre et LDH augmentées, haptoglobine effondrée et test de Coombs direct positif (type IgG ou IgG+C3d). Elle ne classe pas le patient en stade C de Binet !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-11',
    courseId: 'crs-hemato-9',
    questionNumber: 11,
    type: 'QCM',
    content: "Une cytopénie auto-immune (AHAI ou PTI) survenant chez un patient atteint de LLC modifie-t-elle le stade de Binet de A à C ?",
    options: [
      "A) Oui, toute anémie < 10 g/dL classe immédiatement en stade C",
      "B) Non, le stade C de Binet ne concerne que les cytopénies d'origine centrale par insuffisance médullaire liée à l'infiltration tumorale de la moelle",
      "C) Oui, car l'AHAI est un critère de Richter",
      "D) Uniquement si le test de Coombs est négatif",
      "E) Uniquement si le traitement par corticoïdes échoue"
    ],
    correctAnswers: [1],
    explanation: "C'est un piège d'examen classique : les cytopénies auto-immunes (périphériques) ne définissent PAS le stade C de Binet. Le stade C correspond exclusivement à une cytopénie d'origine centrale par envahissement médullaire de la LLC.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-12',
    courseId: 'crs-hemato-9',
    questionNumber: 12,
    type: 'QCM',
    content: "Quelle est l'attitude thérapeutique recommandée chez un patient asymptomatique porteur d'une LLC de stade A de Binet sans signe évolutif ?",
    options: [
      "A) Débuter immédiatement une polychimiothérapie FCR (Fludarabine, Cyclophosphamide, Rituximab)",
      "B) Abstention thérapeutique avec surveillance clinique et biologique régulière (« Watch and Wait »)",
      "C) Débuter l'Ibrutinib à dose préventive",
      "D) Proposer une greffe allogénique de moelle osseuse",
      "E) Réaliser une radiothérapie ganglionnaire prophylactique"
    ],
    correctAnswers: [1],
    explanation: "Dans le stade A de Binet non évolutif, les essais cliniques ont montré qu'un traitement précoce n'améliore ni la survie globale ni la qualité de vie, mais induit des toxicités et des résistances. L'abstention thérapeutique et la surveillance armée (« watch and wait ») sont la règle absolue.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-13',
    courseId: 'crs-hemato-9',
    questionNumber: 13,
    type: 'QCM',
    content: "Parmi les critères de la maladie évolutive (critères de l'iwwCLL) justifiant la mise en route d'un traitement dans la LLC, on retrouve :",
    options: [
      "A) Un temps de doublement des lymphocytes sanguins (TDL) inférieur à 6 mois",
      "B) Des sueurs nocturnes profuses sans infection, une fièvre inexpliquée > 38°C persistant plus de 2 semaines, ou un amaigrissement > 10% en 6 mois",
      "C) Une augmentation rapide et volumineuse de la splénomégalie ou des adénopathies",
      "D) L'apparition ou l'aggravation d'une anémie ou d'une thrombopénie d'origine centrale",
      "E) Toutes les propositions ci-dessus sont des critères d'évolutivité"
    ],
    correctAnswers: [4],
    explanation: "Tous ces éléments sont des critères validés de LLC active/évolutive justifiant l'instauration d'un traitement : signes généraux B (amaigrissement > 10%, fièvre > 2 semaines, sueurs nocturnes), cytopénies médullaires progressives, organomégalie volumineuse ou gênante, temps de doublement lymphocytaire < 6 mois.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-14',
    courseId: 'crs-hemato-9',
    questionNumber: 14,
    type: 'QCM',
    content: "Le mécanisme d'action de l'Ibrutinib (Imbruvica) repose sur :",
    options: [
      "A) L'inhibition de la tyrosine kinase de Bruton (BTK)",
      "B) L'inhibition sélective de la protéine anti-apoptotique BCL-2",
      "C) Le blocage de l'antigène CD20 à la surface des lymphocytes B",
      "D) L'inhibition de la topoisomérase II",
      "E) L'activation de la protéine p53 mutée"
    ],
    correctAnswers: [0],
    explanation: "L'Ibrutinib est un inhibiteur covalent irréversible de la Bruton Tyrosine Kinase (BTK), une enzyme clé de la voie de signalisation du récepteur des cellules B (BCR). Il bloque la prolifération et la survie des cellules de LLC et provoque leur libération précoce des ganglions vers le sang.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-15',
    courseId: 'crs-hemato-9',
    questionNumber: 15,
    type: 'QCM',
    content: "Le Vénétoclax (Venclyxto) est un traitement innovant de la LLC qui cible spécifiquement :",
    options: [
      "A) La protéine kinase C",
      "B) La protéine anti-apoptotique BCL-2 (B-cell lymphoma 2)",
      "C) Le protéasome 26S",
      "D) Le facteur de croissance VEGF",
      "E) Le récepteur CD38"
    ],
    correctAnswers: [1],
    explanation: "Le Vénétoclax est un inhibiteur sélectif puissant de BCL-2 (mimétique du domaine BH3). BCL-2 est surexprimée dans la LLC et bloque l'apoptose. Son inhibition restaure l'apoptose naturelle des lymphocytes B tumoraux.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-16',
    courseId: 'crs-hemato-9',
    questionNumber: 16,
    type: 'QCM',
    content: "Quelle précaution métabolique majeure est indispensable lors de l'instauration d'un traitement par Vénétoclax chez un patient porteur d'une LLC volumineuse ?",
    options: [
      "A) Prévention et surveillance étroite du syndrome de lyse tumorale (hyperhydratation, uricolytiques, escalade de dose progressive sur 5 semaines)",
      "B) Supplémentation martiale intraveineuse systématique",
      "C) Arrêt de tout apport hydrique",
      "D) Injections quotidiennes d'insuline",
      "E) Régime sans sel strict"
    ],
    correctAnswers: [0],
    explanation: "Le Vénétoclax induit une apoptose cellulaire si rapide et massive qu'il existe un risque vital de syndrome de lyse tumorale (hyperkaliémie, hyperuricémie, hyperphosphorémie, hypocalcémie, insuffisance rénale aiguë). On applique une montée de dose progressive sur 5 semaines (« ramp-up ») avec hyperhydratation et surveillance biologique hospitalière.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-17',
    courseId: 'crs-hemato-9',
    questionNumber: 17,
    type: 'QCM',
    content: "Quel effet secondaire cardiaque spécifique et fréquent nécessite une surveillance lors du traitement par Ibrutinib ?",
    options: [
      "A) Fibrillation atriale (arythmie complète par FA) et hypertension artérielle",
      "B) Infarctus du myocarde transmural antérieur",
      "C) Rétrécissement aortique calcifié",
      "D) Péricardite constrictive chronique",
      "E) Bloc auriculo-ventriculaire complet du 3e degré congénital"
    ],
    correctAnswers: [0],
    explanation: "L'Ibrutinib induit un risque accru de fibrillation atriale (5 à 10% des patients), d'HTA et de saignements (due à une inhibition plaquettaire collatérale sur la kinase Tec).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-18',
    courseId: 'crs-hemato-9',
    questionNumber: 18,
    type: 'QCM',
    content: "Le statut mutationnel des gènes des chaînes lourdes des immunoglobulines (IGHV) a une valeur pronostique majeure dans la LLC :",
    options: [
      "A) Le statut non muté (homologie ≥ 98% avec la séquence germinale) est associé à une forme plus agressive et une survie plus courte",
      "B) Le statut muté (< 98% d'homologie) est de très mauvais pronostic",
      "C) Le statut mutationnel IGHV varie constamment au cours du traitement chez un même patient",
      "D) Il n'a aucune corrélation avec l'expression de CD38 ou ZAP-70",
      "E) Il permet uniquement de distinguer la LLC de la LMC"
    ],
    correctAnswers: [0],
    explanation: "Les LLC avec gènes IGHV non mutés dérivent de lymphocytes B naïfs n'ayant pas traversé le centre germinatif. Elles expriment souvent ZAP-70 et CD38, et ont une évolution plus agressive avec progression plus rapide comparées aux formes IGHV mutées.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-19',
    courseId: 'crs-hemato-9',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans le protocole FCR utilisé historiquement chez les patients jeunes fit sans del(17p)/TP53, les trois molécules associées sont :",
    options: [
      "A) Fludarabine, Cyclophosphamide, Rituximab",
      "B) Fluorouracile, Cisplatine, Radiothérapie",
      "C) Fostamatinib, Cladribine, Ruxolitinib",
      "D) Fludarabine, Carboplatine, Rétinoïde",
      "E) Filgrastim, Cétuximab, Révlimid"
    ],
    correctAnswers: [0],
    explanation: "Le schéma FCR associe : Fludarabine (analogue purique), Cyclophosphamide (alkylant) et Rituximab (anticorps monoclonal anti-CD20). Il a permis d'obtenir des rémissions complètes prolongées chez les patients jeunes « fit » avec statut IGHV muté.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-20',
    courseId: 'crs-hemato-9',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle prophylaxie anti-infectieuse est indispensable chez un patient traité par Fludarabine en raison de la déplétion prolongée en lymphocytes T CD4+ ?",
    options: [
      "A) Prévention de la pneumocystose (Triméthoprime-Sulfaméthoxazole) et de la réactivation herpétique (Valaciclovir)",
      "B) Antibiothérapie par vancomycine orale à vie",
      "C) Prophylaxie antipaludéenne par chloroquine",
      "D) Injection quotidienne d'immunoglobulines intraveineuses",
      "E) Vaccin vivant atténué contre la fièvre jaune"
    ],
    correctAnswers: [0],
    explanation: "La fludarabine entraîne une lymphopénie T CD4+ profonde et prolongée (durant parfois 1 à 2 ans après l'arrêt). La prophylaxie contre Pneumocystis jirovecii (Bactrim) et contre le virus de la varicelle et du zona (Valaciclovir) est formellement indiquée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-21',
    courseId: 'crs-hemato-9',
    questionNumber: 21,
    type: 'QCM',
    content: "Concernant la vaccination chez les patients atteints de LLC, quelle règle d'or doit être impérativement respectée ?",
    options: [
      "A) Les vaccins vivants atténués (BCG, ROR, fièvre jaune, zona vivant) sont STRICTEMENT CONTRE-INDIQUÉS",
      "B) Tous les vaccins vivants atténués sont obligatoires",
      "C) Le vaccin anti-pneumococcique et anti-grippal sont interdits",
      "D) La vaccination n'induit jamais d'anticorps protecteurs, elle est donc inutile",
      "E) Les patients doivent être vaccinés exclusivement pendant les cures de chimiothérapie"
    ],
    correctAnswers: [0],
    explanation: "En raison du déficit immunitaire humoral et cellulaire, tous les vaccins VIVANTS ATTÉNUÉS (BCG, fièvre jaune, ROR, varicelle, polio oral) sont formellement contre-indiqués chez les patients atteints de LLC (risque de maladie vaccinale disséminée mortelle). En revanche, les vaccins inactivés (pneumocoque, grippe, Covid-19) sont vivement recommandés.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-22',
    courseId: 'crs-hemato-9',
    questionNumber: 22,
    type: 'QCM',
    content: "Quelle est la tumeur cutanée maligne secondaire la plus fréquemment observée avec une incidence très augmentée chez les patients suivis pour LLC ?",
    options: [
      "A) Le sarcome de Kaposi",
      "B) Les carcinomes cutanés (épidermoïdes et basocellulaires) et le mélanome",
      "C) Le lymphome cutané à cellules T",
      "D) Le dermatofibrosarcome de Darier-Ferrand",
      "E) Le carcinome à cellules de Merkel uniquement"
    ],
    correctAnswers: [1],
    explanation: "Les patients atteints de LLC ont un risque multiplié par 5 à 10 de cancers cutanés non-mélanomes (carcinomes spinocellulaires particulièrement agressifs et basocellulaires) ainsi que de mélanomes, ce qui justifie une surveillance dermatologique annuelle systématique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-23',
    courseId: 'crs-hemato-9',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans le bilan de surveillance d'un patient sous Ibrutinib, une lymphocytose sanguine qui augmente fortement au cours des 2 premiers mois de traitement alors que les adénopathies régressent nettement correspond à :",
    options: [
      "A) Une progression tumorale explosive imposant l'arrêt immédiat du médicament",
      "B) Une lymphocytose réactionnelle de redistribution physiologique bien connue, due à l'expulsion des cellules de LLC des ganglions vers le compartiment sanguin",
      "C) Une transformation de Richter aiguë",
      "D) Une infection bactérienne méconnue",
      "E) Un sous-dosage thérapeutique"
    ],
    correctAnswers: [1],
    explanation: "Les inhibiteurs du BCR (Ibrutinib) altèrent l'adhésion et le homing des lymphocytes B tumoraux dans les niches ganglionnaires. Les cellules quittent les ganglions (qui fondent) pour passer transitoirement dans le sang circulant (hyperlymphocytose de redistribution). Ce n'est pas un échec thérapeutique et le traitement doit être poursuivi.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-24',
    courseId: 'crs-hemato-9',
    questionNumber: 24,
    type: 'QCM',
    content: "Pour prévenir les infections bactériennes récurrentes sévères chez un patient atteint de LLC présentant une hypogammaglobulinémie profonde (< 4 g/L), le traitement indiqué est :",
    options: [
      "A) L'administration mensuelle d'immunoglobulines polyvalentes humaines (IV ou SC)",
      "B) Une antibiothérapie par Pénicilline V à vie",
      "C) L'ablation chirurgicale de la rate",
      "D) Des transfusions de concentrés érythrocytaires",
      "E) L'interféron alpha recombinant"
    ],
    correctAnswers: [0],
    explanation: "Chez les patients atteints de LLC présentant une hypogammaglobulinémie documentée (IgG < 4 g/L) associée à des infections bactériennes sévères et récidivantes malgré l'antibiothérapie, une supplémentation substitutive régulière en immunoglobulines intraveineuses ou sous-cutanées est formellement indiquée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-25',
    courseId: 'crs-hemato-9',
    questionNumber: 25,
    type: 'QCM',
    content: "Quel paramètre pronostique biologique simple évalué dans le score pronostique international CLL-IPI reflète la masse tumorale et le renouvellement cellulaire ?",
    options: [
      "A) Le taux de bêta-2 microglobuline sérique",
      "B) La glycémie à jeun",
      "C) La protéine C réactive",
      "D) La calcémie corrigée",
      "E) Le taux de prothrombine"
    ],
    correctAnswers: [0],
    explanation: "La bêta-2 microglobuline sérique (composante de la chaîne légère des molécules HLA de classe I) s'élève avec la masse tumorale et le turn-over lymphocytaire. Un taux supérieur à 3,5 mg/L est un facteur pronostique péjoratif intégré dans le score CLL-IPI.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-09-cs1',
    courseId: 'crs-hemato-9',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un homme de 66 ans sans antécédent consulte pour le bilan d'une NFS systématique : Leucocytes 28 000 / mm³, dont 82% de lymphocytes matures d'aspect normal avec nombreuses ombres de Gümprecht au frottis, Hb 14,2 g/dL, Plaquettes 210 000 / mm³. L'examen clinique retrouve 2 adénopathies axillaires bilatérales mobiles indolores de 1,5 cm et une adénopathie inguinale gauche de 2 cm. Il n'y a pas d'hépato-splénomégalie. L'immunophénotypage retrouve une population B monoclonale CD19+, CD5+, CD23+, FMC7-, sIg faibles (Score de Matutes 5/5).\n\nQuel est le stade de Binet de ce patient et quelle est la prise en charge recommandée ?",
    options: [
      "A) Stade C de Binet ; Chimiothérapie FCR urgente",
      "B) Stade B de Binet (2 aires atteintes) ; Traitement par Ibrutinib",
      "C) Stade A de Binet (2 aires atteintes : axillaire et inguinale) ; Abstention thérapeutique et surveillance régulière (« Watch and Wait »)",
      "D) Stade B de Binet (3 aires atteintes : axillaire D, axillaire G, inguinale G) ; Surveillance simple",
      "E) Syndrome de Richter ; Polychimiothérapie type R-CHOP"
    ],
    correctAnswers: [2],
    explanation: "Dans Binet : l'aire axillaire compte pour 1 aire (qu'elle soit uni ou bilatérale) et l'aire inguinale compte pour 1 aire. Cela fait donc 2 aires atteintes au total (< 3 aires) sans anémie ni thrombopénie. Le patient est donc au STADE A de Binet. Il est asymptomatique, la conduite à tenir est l'abstention thérapeutique et la surveillance (« watch and wait »).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-cs2',
    courseId: 'crs-hemato-9',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Trois ans plus tard, ce même patient consulte car il a perdu 8 kg en 4 mois et rapporte des sueurs nocturnes trempant ses draps. La NFS montre : Hb 9,1 g/dL, Plaquettes 84 000 / mm³, Lymphocytes 92 000 / mm³. La BOM montre une moelle envahie à 85% par la LLC. Le test de Coombs direct est négatif. La FISH retrouve une délétion 17p13 dans 65% des noyaux.\n\nQuel traitement de première intention est le plus approprié ?",
    options: [
      "A) Chimiothérapie par FCR (Fludarabine, Cyclophosphamide, Rituximab)",
      "B) Thérapie ciblée par un inhibiteur de BTK (ex: Ibrutinib ou Acalabrutinib) ou association Vénétoclax + Obinutuzumab",
      "C) Radiothérapie corporelle totale",
      "D) Corticothérapie forte dose en monothérapie prolongée",
      "E) Allogreffe de cellules souches sans traitement d'induction préalable"
    ],
    correctAnswers: [1],
    explanation: "Le patient évolue vers un stade C de Binet avec critères de maladie active (signes généraux B, cytopénies centrales). La présence d'une délétion 17p (anomalie de TP53) est une contre-indication formelle au protocole FCR (chimiorésistance quasi-totale). L'indication de première ligne repose sur une thérapie ciblée : inhibiteur de BTK (Ibrutinib, Acalabrutinib, Zanubrutinib) ou association Vénétoclax + Obinutuzumab.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-09-cs3',
    courseId: 'crs-hemato-9',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un patient de 70 ans suivi pour une LLC connue consulte en urgence pour l'apparition en moins de 3 semaines d'une masse ganglionnaire cervicale droite compressive pierreuse de 8 cm de diamètre, accompagnée d'une altération majeure de l'état général et d'une fièvre à 38,5°C. Les LDH sériques sont mesurées à 4 fois la normale. Le TEP-scanner montre une hyperfixation métabolique intense (SUV max = 22) limitée à cette masse ganglionnaire.\n\nQuelle complication suspectez-vous en priorité et quel geste apporte la preuve diagnostique ?",
    options: [
      "A) Tuberculose ganglionnaire ; Ponction cytologique à l'aiguille fine",
      "B) Syndrome de Richter (transformation en lymphome agressif à grandes cellules B) ; Biopsie chirurgicale ganglionnaire exérèse avec examen anatomopathologique",
      "C) Adénite bactérienne aiguë à streptocoque ; drainage chirurgical simple",
      "D) Poussée banale de LLC ; augmentation de dose de la chimiothérapie",
      "E) Maladie de Hodgkin secondaire uniquement ; dosage de la CRP"
    ],
    correctAnswers: [1],
    explanation: "L'augmentation rapide et asymétrique d'une masse ganglionnaire avec signes B, élévation massive des LDH et hyperfixation intense au TEP-scan (SUV > 10-15) chez un patient porteur de LLC signe jusqu'à preuve du contraire un syndrome de Richter (transformation le plus souvent en lymphome diffus à grandes cellules B). La biopsie chirurgicale tissulaire (et non une simple cytoponction) est indispensable pour affirmer le diagnostic histologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-cs4',
    courseId: 'crs-hemato-9',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 68 ans atteint de LLC au stade A stable présente une asthénie avec ictère conjonctival apparu en 5 jours. La NFS montre : Hb 7,1 g/dL (contre 13,8 g/dL il y a 2 mois), VGM 108 fL, Réticulocytes 240 000 / mm³, Plaquettes 190 000 / mm³, Lymphocytes 32 000 / mm³. Bilirubine libre 48 µmol/L, Haptoglobine indétectable. Le test de Coombs direct est fortement positif de type IgG.\n\nQuel est le diagnostic et quel est le traitement de première ligne ?",
    options: [
      "A) Évolution vers un stade C de Binet ; Chimiothérapie FCR urgente",
      "B) Anémie hémolytique auto-immune (AHAI) à anticorps chauds compliquant la LLC ; Corticothérapie par voie orale (Prednisone 1 mg/kg/j)",
      "C) Syndrome myélodysplasique secondaire ; Transfusions seules",
      "D) Cirrhose hépatique décompensée ; Diurétiques",
      "E) Aplasie médullaire aiguë ; Allogreffe de moelle"
    ],
    correctAnswers: [1],
    explanation: "Il s'agit d'une AHAI à anticorps chauds (anémie régénérative, hémolyse intra-tissulaire, Coombs direct IgG positif). Le traitement de première ligne repose sur la corticothérapie par Prednisone (1 mg/kg/j). Si elle est efficace et contrôle l'anémie, le patient reste en stade A de Binet (l'AHAI n'est pas une cytopénie centrale d'insuffisance médullaire).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-09-cs5',
    courseId: 'crs-hemato-9',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Chez un patient atteint de LLC traité par Vénétoclax en monothérapie avec forte masse tumorale (adénopathies > 10 cm, lymphocytes sanguins à 80 000 / mm³), le biologiste vous alerte 8 heures après la première dose de 20 mg : Kaliémie 6,4 mmol/L, Uricémie 580 µmol/L, Phosphatémie 2,3 mmol/L, Calcémie 1,8 mmol/L, Créatininémie augmentée de 70% par rapport à la valeur de base.\n\nQuel syndrome présente le patient et quelles sont les mesures d'extrême urgence ?",
    options: [
      "A) Syndrome de lyse tumorale aigu ; Arrêt temporaire du Vénétoclax, hyperhydratation intraveineuse alcaline ou neutre forcée, Rasburicase (Fasturtec) IV, traitement de l'hyperkaliémie (gluconate de calcium, insuline-glucose) et hémodialyse si réfractaire",
      "B) Insuffisance surrénalienne aiguë ; Hydrocortisone 100 mg IV",
      "C) Intoxication au potassium alimentaire ; Arrêt des fruits secs",
      "D) Acidocétose diabétique ; Insuline rapide IV seule",
      "E) Choc septique nosocomial ; Noradrénaline seule"
    ],
    correctAnswers: [0],
    explanation: "Il s'agit d'un syndrome de lyse tumorale biologique et clinique (critères de Cairo-Bishop) aigu sous Vénétoclax : hyperkaliémie (risque mortel de fibrillation ventriculaire), hyperuricémie, hyperphosphorémie, hypocalcémie et insuffisance rénale aiguë. Mesures urgentes : arrêt immédiat du toxique, monitoring cardiaque, gluconate de calcium pour protéger le myocarde, traitement hypokaliémiant, rasburicase pour détruire l'acide urique, hyperhydratation et épuration extrarénale en cas d'échec.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_9_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-09-01',
    courseId: 'crs-hemato-9',
    type: 'resume',
    title: "Mind Map Synthèse : Fiches de Révision LLC",
    contentMarkdown: `# Mind Map : Fiches de Révision LLC (Pr S. Taoussi)

\`\`\`
                                  LEUCÉMIE LYMPHOÏDE CHRONIQUE (LLC)
                                                  │
          ┌───────────────────────────────────────┼───────────────────────────────────────┐
          ▼                                       ▼                                       ▼
DIAGNOSTIC & CYTOLOGIE                   SCORE DE MATUTES (≥ 4/5)               STADES DE BINET
- Lymphocytose ≥ 5 G/L (> 3 mois)         - CD5 (+)                               - A : < 3 aires, sans cytopénie
- Frottis : Petits lymphocytes matures,    - CD23 (+)                              - B : ≥ 3 aires, sans cytopénie
  Ombres de Gümprecht                     - FMC7 (-)                              - C : Hb < 10 g/dL et/ou Plaq < 100 G/L
- Immunophénotypage : Clonalité B         - sIg faibles (+)                         (Origine médullaire !)
                                          - CD79b/CD22 faible (+)
\`\`\`

## Stratégie Thérapeutique Actuelle :
1. **Stade A asymptomatique** : Abstention thérapeutique et surveillance (« Watch and Wait »).
2. **Critères de traitement (iwwCLL)** : Signes B, doublement lymphocytaire < 6 mois, cytopénies médullaires, organomégalie gênante.
3. **Thérapies ciblées** :
   - **del(17p) ou mutation TP53** : Chimiothérapie interdite ! Inhibiteurs de BTK (Ibrutinib, Acalabrutinib) ou Vénétoclax + Obinutuzumab.
   - **Sujets sans TP53 altéré** : Thérapies ciblées ou immunochimiothérapie (FCR si jeune et IGHV muté).
4. **Complications Majeures** :
   - Infectieuses : Hypogammaglobulinémie (IgIV si infections graves répétées).
   - Auto-immunes : AHAI (test de Coombs direct), PTI (traités par corticoïdes).
   - Syndrome de Richter : Transformation en lymphome agressif à grandes cellules B (fièvre, LDH très élevées, adénopathie explosive asymétrique).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-09-02',
    courseId: 'crs-hemato-9',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : LLC",
    contentMarkdown: `### 🎯 Pièges Classiques aux Concours

1. **Stade C de Binet** :
   - Une anémie ou thrombopénie auto-immune (AHAI ou PTI) ne fait PAS passer un patient en stade C de Binet ! Le stade C est strictement d'origine médullaire centrale (infiltration).
2. **Score de Matutes** :
   - Attention au piège de FMC7 : il rapporte 1 point s'il est **NÉGATIF**. Dans les autres lymphomes (manteau, zone marginale), FMC7 est souvent positif.
3. ** del(17p) / TP53** :
   - C'est la question incontournable de concours : Contre-indication au protocole FCR ! Utilisation obligatoire des inhibiteurs de BTK (Ibrutinib) ou BCL-2 (Vénétoclax).
4. **Hyperlymphocytose sous Ibrutinib** :
   - Ce n'est PAS un échec du traitement dans les premiers mois. C'est un phénomène pharmacologique de margination/démargination ganglionnaire (les ganglions fondent, les lymphocytes passent dans le sang).
5. **Vaccins vivants** :
   - STRICTEMENT CONTRE-INDIQUÉS chez tout patient atteint de LLC (déficit immunitaire combiné).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];
