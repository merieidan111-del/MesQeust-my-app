import { Question, CourseResource } from '../../types/medical';

export const CANCER_RECTUM_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Cancer du Rectum (Pr A. Anou, CHU Douera)
  // -------------------------------------------------------------
  {
    id: 'q-rect-01',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les affirmations suivantes concernant l’épidémiologie du cancer du rectum, laquelle est fausse ?",
    options: [
      "Le cancer rectal représente 35–40 % des cancers colorectaux.",
      "L’incidence augmente rapidement après 50 ans et double chaque décennie.",
      "Le sex-ratio homme/femme est proche de 1,5 en faveur des hommes.",
      "Le cancer rectal est plus fréquent chez les sujets de moins de 40 ans que chez les plus de 70 ans.",
      "Le CCR est la 4e cause de décès par cancer dans le monde."
    ],
    correctAnswers: [3],
    explanation: "Le cancer rectal est rare avant 50 ans ; son incidence augmente rapidement à partir de cet âge et double à chaque décennie. Il est particulièrement fréquent chez les sujets de plus de 70 ans. L’affirmation D est donc fausse. Les autres données sont exactes : 35–40 % des CCR, sex-ratio ~1,5, et le CCR est la 4e cause de décès par cancer dans le monde.",
    clinicalPearl: "Le cancer rectal est rare avant 50 ans et double d'incidence chaque décennie après 50 ans."
  },
  {
    id: 'q-rect-02',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel énoncé concernant la filiation adénome–cancer est correct ?",
    options: [
      "La transformation adénome–cancer concerne moins de 30 % des adénocarcinomes rectaux.",
      "La séquence adénome–cancer est liée à des mutations activatrices de l’oncogène KRAS.",
      "La voie de la séquence adénome–cancer implique des mutations successives touchant notamment APC, KRAS, TP53.",
      "La filiation adénome–cancer est exclusivement observée dans les formes héréditaires.",
      "La transformation maligne d’un adénome est un phénomène rapide (< 1 an)."
    ],
    correctAnswers: [2],
    explanation: "La filiation adénome–cancer concerne environ 70 % des adénocarcinomes. Elle résulte d’une accumulation de mutations : APC (gène suppresseur, 5q), puis KRAS, puis TP53. Ce n’est pas un phénomène rapide (plusieurs années). La séquence n’est pas limitée aux formes héréditaires ; elle est observée dans les cancers sporadiques.",
    clinicalPearl: "Séquence adénome-cancer de Vogelstein : Inactivation d'APC -> Mutation KRAS -> Perte de TP53."
  },
  {
    id: 'q-rect-03',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Concernant la polypose adénomateuse familiale (PAF), quelle proposition est exacte ?",
    options: [
      "La PAF est responsable de 5 % des cancers colorectaux.",
      "Le gène muté dans la PAF est un oncogène situé sur le chromosome 5q.",
      "Le syndrome de Gardner associe à la PAF des ostéomes mandibulaires et des tumeurs desmoïdes.",
      "Le syndrome de Turcot associe la PAF à des tumeurs rénales.",
      "La PAF est liée à une mutation du gène MSH2."
    ],
    correctAnswers: [2],
    explanation: "La PAF est responsable de 0,5 % des CCR (et non 5 %). Le gène muté est APC, un gène suppresseur (5q). Le syndrome de Gardner associe effectivement ostéomes mandibulaires, kystes épidermoïdes et tumeurs desmoïdes. Le syndrome de Turcot associe PAF à des tumeurs du SNC (médulloblastome), non rénales. MSH2 est impliqué dans le HNPCC.",
    clinicalPearl: "Syndrome de Gardner = PAF + Ostéomes mandibulaires + Tumeurs desmoïdes + Kystes épidermoïdes."
  },
  {
    id: 'q-rect-04',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Laquelle des affirmations suivantes est vraie concernant le cancer colorectal héréditaire sans polypose (HNPCC) ?",
    options: [
      "Il représente 10 à 15 % des CCR.",
      "Les gènes de réparation impliqués sont des oncogènes.",
      "L’HNPCC est associé à des cancers de l’endomètre, des ovaires et de l’estomac.",
      "Le gène MLH1 est situé sur le chromosome 2p.",
      "L’HNPCC est exclusivement un syndrome colique sans localisation extra-digestive."
    ],
    correctAnswers: [2],
    explanation: "L’HNPCC représente 2 à 4 % des CCR (et non 10–15 %). Les gènes de réparation (MSH2, MLH1, etc.) sont des gènes suppresseurs, non des oncogènes. MSH2 siège sur 2p, MLH1 sur 3p21. L’HNPCC associe effectivement des cancers de l’endomètre, ovaires, estomac, voies urinaires, etc.",
    clinicalPearl: "Syndrome de Lynch (HNPCC) : Cancers colorectaux droits + Endomètre + Ovaires + Voies urinaires."
  },
  {
    id: 'q-rect-05',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les facteurs alimentaires suivants, lequel est associé à une augmentation du risque de cancer rectal ?",
    options: [
      "Régime riche en fibres.",
      "Consommation élevée de fruits et légumes.",
      "Régime riche en sucres raffinés, graisses et viandes.",
      "Consommation modérée de poisson.",
      "Supplémentation en calcium."
    ],
    correctAnswers: [2],
    explanation: "Les régimes riches en calories, sucres raffinés (pâtes, riz, pain), graisses, protéines et viandes sont associés à un risque accru de cancer colorectal. À l’inverse, les fibres, fruits, légumes et poisson sont plutôt protecteurs.",
    clinicalPearl: "Surconsommation de viandes rouges, graisses saturées et glucides raffinés = Surcharge et risque accru de CCR."
  },
  {
    id: 'q-rect-06',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Parmi les situations suivantes, lesquelles définissent un groupe à risque élevé (et non très élevé) pour le cancer rectal ? (Choix multiples possibles)",
    options: [
      "Polypose adénomateuse familiale.",
      "HNPCC.",
      "Antécédent personnel de cancer colorectal ou d’adénome.",
      "Maladie de Crohn étendue.",
      "Parent au 1er degré d’un sujet porteur d’un CCR."
    ],
    correctAnswers: [2, 3, 4],
    explanation: "Les groupes à risque très élevé sont la PAF et l’HNPCC. Les groupes à risque élevé incluent : antécédent personnel de CCR ou d’adénome (risque de cancer 2 % à 5 ans), parent au 1er degré porteur de CCR (risque ×2–3), et les MICI (maladie de Crohn, RCH). Le groupe à risque moyen correspond aux sujets >45 ans sans antécédent.",
    clinicalPearl: "Risque très élevé = PAF & Lynch. Risque élevé = Parent au 1er degré, antécédent personnel d'adénome/CCR, MICI."
  },
  {
    id: 'q-rect-07',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La forme macroscopique la plus fréquente du cancer du rectum est :",
    options: [
      "La forme végétante pure.",
      "La forme ulcéro-bourgeonnante.",
      "La forme infiltrante.",
      "La forme en virole.",
      "La forme polypoïde."
    ],
    correctAnswers: [1],
    explanation: "La forme ulcéro-bourgeonnante est la plus fréquente, surtout au niveau du côlon gauche et du rectum. La forme végétante pure est rare ; la forme infiltrante (ou ulcéro-infiltrante) est plus fréquente sur le côlon gauche et peut réaliser un aspect en virole, mais elle n’est pas la plus fréquente.",
    clinicalPearl: "Aspect macroscopique princeps : Forme ulcéro-bourgeonnante saignante au contact."
  },
  {
    id: 'q-rect-08',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle affirmation concernant l’histologie des cancers du rectum est exacte ?",
    options: [
      "Les adénocarcinomes représentent 75 % des cancers rectaux.",
      "Les adénocarcinomes bien différenciés représentent 60 % des cas.",
      "Les adénocarcinomes moyennement différenciés représentent 60 % des cas.",
      "La forme mucineuse a un meilleur pronostic que la forme habituelle.",
      "Le carcinome à cellules en bague à châton est la forme histologique la plus fréquente."
    ],
    correctAnswers: [2],
    explanation: "Les adénocarcinomes représentent 95 % des cancers rectaux (et non 75 %). La répartition est : bien différenciés 20 %, moyennement différenciés 60 %, peu différenciés 20 %. La forme mucineuse a un pronostic moins bon. Le carcinome à cellules en bague à châton est rare et doit faire rechercher une origine gastrique.",
    clinicalPearl: "Adénocarcinome lieberkühnien = 95 % des cancers du rectum (dont 60 % moyennement différenciés)."
  },
  {
    id: 'q-rect-09',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la classification TNM 8e édition (UICC 2017), un stade T3 correspond à :",
    options: [
      "Tumeur atteignant la sous-muqueuse.",
      "Tumeur atteignant la musculeuse.",
      "Tumeur atteignant la sous-séreuse ou les tissus péricoliques/périrectaux non péritonisés.",
      "Tumeur dépassant la séreuse avec perforation.",
      "Tumeur envahissant directement les organes de voisinage."
    ],
    correctAnswers: [2],
    explanation: "T3 : tumeur atteignant la sous-séreuse ou les tissus péricoliques et périrectaux non péritonisés (mésorectum). T1 = sous-muqueuse ; T2 = musculeuse ; T4a = dépasse la séreuse/perforée ; T4b = envahissement des organes de voisinage.",
    clinicalPearl: "T3 rectal = Franchissement de la musculeuse et infiltration du mésorectum."
  },
  {
    id: 'q-rect-10',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Un patient présente 5 ganglions régionaux métastatiques. Quel est le stade N selon la TNM 8e édition ?",
    options: ["N0", "N1a", "N1b", "N2a", "N2b"],
    correctAnswers: [3],
    explanation: "N2a = envahissement de 4 à 6 ganglions régionaux. N1 = 1 à 3 ganglions (N1a = 1, N1b = 2–3). N2b = 7 ganglions ou plus. Ici, 5 ganglions correspondent à N2a.",
    clinicalPearl: "Stades N TNM 8 : N1a (1 ganglion), N1b (2-3 ganglions), N2a (4-6 ganglions), N2b (≥ 7 ganglions)."
  },
  {
    id: 'q-rect-11',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant le stade M (métastases) selon la TNM 8e édition, quelle proposition est fausse ?",
    options: [
      "M0 : pas de métastase à distance.",
      "M1a : métastase localisée à un seul organe ou site.",
      "M1b : métastase concernant plus d’un organe.",
      "M1c : métastases péritonéales avec ou sans atteinte d’autres organes.",
      "M1b inclut également les métastases péritonéales isolées."
    ],
    correctAnswers: [4],
    explanation: "M1b = métastases concernant plus d’un organe (ou métastase péritonéale avec atteinte d’autres organes). Les métastases péritonéales isolées sont classées M1c (avec ou sans atteinte d’autres organes, mais la mention « isolées » est inexacte pour M1b).",
    clinicalPearl: "M1a = 1 site métastatique ; M1b = ≥ 2 sites sans atteinte péritonéale ; M1c = atteinte péritonéale (carcinose)."
  },
  {
    id: 'q-rect-12',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe clinique est le plus évocateur d’un cancer du rectum à un stade localement avancé ?",
    options: [
      "Rectorragies isolées.",
      "Constipation intermittente.",
      "Syndrome rectal : ténesme, épreinte, émissions glaireuses.",
      "Douleur périanale.",
      "Anémie ferriprive asymptomatique."
    ],
    correctAnswers: [2],
    explanation: "Le syndrome rectal (ténesme, épreinte, émissions glaireuses) est un signe d’appel classique des tumeurs du bas rectum, traduisant l’irritation de l’ampoule rectale par la tumeur. Les rectorragies et les troubles du transit sont des signes non spécifiques. L’anémie est un signe tardif.",
    clinicalPearl: "Syndrome rectal = Ténesme + Épreintes + Faux besoins glairo-sanglants -> Tumeur du bas/moyen rectum."
  },
  {
    id: 'q-rect-13',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelles affirmations concernant le toucher rectal (TR) dans le cancer du rectum sont correctes ? (Plusieurs réponses possibles)",
    options: [
      "Le TR est indiqué uniquement en cas de rectorragies.",
      "Le TR permet de préciser le siège exact de la tumeur par rapport au sphincter.",
      "Le TR est contre-indiqué en présence d’une tumeur suspectée.",
      "Le TR ne peut pas détecter les lésions du haut rectum.",
      "Le TR est inutile si une coloscopie est programmée."
    ],
    correctAnswers: [1, 3],
    explanation: "Le TR est systématique dans tout bilan digestif, et non réservé aux rectorragies. Il est parfaitement indiqué et non contre-indiqué. Il permet d’évaluer le siège, la mobilité, la hauteur par rapport au sphincter, mais il est limité pour les tumeurs du haut rectum (inaccessibles au doigt). La coloscopie ne dispense pas du TR, qui apporte des informations cliniques uniques.",
    clinicalPearl: "Le Toucher Rectal évalue la distance au pôle supérieur du sphincter et la fixité pelvienne."
  },
  {
    id: 'q-rect-14',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen est recommandé en première intention pour le diagnostic histologique d’une tumeur rectale suspecte ?",
    options: [
      "Coloscopie totale avec biopsies de la tumeur.",
      "Recto-sigmoscopie au tube rigide avec biopsie.",
      "IRM pelvienne seule.",
      "Échographie endorectale seule.",
      "Scanner thoraco-abdomino-pelvien."
    ],
    correctAnswers: [1],
    explanation: "La recto-sigmoscopie au tube rigide avec biopsie est l’examen clé pour le diagnostic histologique. Elle permet de voir la lésion, de la biopsier et de préciser son siège par rapport à la marge anale. La coloscopie totale est indiquée pour rechercher des lésions synchrones, mais le diagnostic initial se fait par endoscopie basse.",
    clinicalPearl: "Rectoscopie rigide : Mesure rigoureuse de la distance exacte entre la tumeur et la marge anale."
  },
  {
    id: 'q-rect-15',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "L’IRM pelvienne est l’examen de référence pour :",
    options: [
      "L’étude de la prolifération tumorale dans les couches superficielles (muqueuse).",
      "L’évaluation de l’extension locorégionale, notamment l’atteinte du mésorectum et la marge de résection circonférentielle (CRM).",
      "La recherche de métastases hépatiques.",
      "Le diagnostic histologique de la tumeur.",
      "La détection des lésions synchrones coliques."
    ],
    correctAnswers: [1],
    explanation: "L’IRM pelvienne est l’examen de référence pour l’extension locorégionale (stade T, N, atteinte du mésorectum, CRM, EMVI). L’EER est supérieure pour l’étude des couches superficielles (T1/T2). La TDM TAP recherche les métastases hépatiques et pulmonaires. La coloscopie détecte les lésions synchrones.",
    clinicalPearl: "IRM pelvienne = Examen fondamental de la décision thérapeutique (mesure de la CRM et du fascia recti)."
  },
  {
    id: 'q-rect-16',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans le mnémonique DISTANCED utilisé en IRM pelvienne pour le cancer du rectum, la lettre « C » correspond à :",
    options: [
      "Carcinome.",
      "Circonférence tumorale.",
      "Marge de résection circonférentielle (CRM).",
      "Contamination péritonéale.",
      "Cicatrice post-biopsique."
    ],
    correctAnswers: [2],
    explanation: "DISTANCED : Distance (marge anale), Imagerie (T), Status ganglionnaire (N), Tumeur (CRM), Atteinte (EMVI), Nodules tumoraux, Circonférentielle (marge CRM), Envahissement veineux, Dépôts. La lettre « C » = CRM (Circumferential Resection Margin).",
    clinicalPearl: "CRM < 1 mm = Marge circonférentielle envahie -> Indication formelle à la radiochimiothérapie néoadjuvante."
  },
  {
    id: 'q-rect-17',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’échographie endorectale (EER) est particulièrement indiquée pour :",
    options: [
      "Les tumeurs du haut rectum (> 10 cm de la marge anale).",
      "L’évaluation des tumeurs T3/T4 du moyen rectum.",
      "L’étude de l’envahissement des couches superficielles (T1/T2) pour les tumeurs du bas et moyen rectum (< 4 cm, non sténosantes).",
      "La recherche de métastases hépatiques.",
      "L’évaluation de la marge de résection circonférentielle."
    ],
    correctAnswers: [2],
    explanation: "L’EER est excellente pour l’étude des couches superficielles (muqueuse T1, musculeuse T2) des tumeurs du bas et moyen rectum, à condition qu’elles soient accessibles (< 4 cm, non sténosantes). Elle est moins performante que l’IRM pour l’extension dans le mésorectum et la CRM. Elle n’est pas adaptée au haut rectum ni aux métastases hépatiques.",
    clinicalPearl: "EER = Examen de prédilection pour discriminer T1sm1 d'un T2 avant décision d'exérèse locale transanale."
  },
  {
    id: 'q-rect-18',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les marqueurs tumoraux suivants, lequel est le plus spécifique du cancer colorectal ?",
    options: [
      "ACE (Antigène Carcino-Embryonnaire).",
      "CA 19-9.",
      "AFP (Alpha-fœtoprotéine).",
      "CA 125.",
      "β-HCG."
    ],
    correctAnswers: [0],
    explanation: "L’ACE est le marqueur tumoral le plus utilisé et le plus spécifique (bien que non parfaitement sensible) pour le suivi des cancers colorectaux. Le CA 19-9 est également utilisé mais moins spécifique. L’AFP est spécifique des tumeurs hépatiques, CA 125 des tumeurs ovariennes, β-HCG des tumeurs trophoblastiques.",
    clinicalPearl: "Dosage de l'ACE : Utile en pré-thérapeutique comme valeur de référence pour surveiller la récidive."
  },
  {
    id: 'q-rect-19',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle complication est la plus fréquente des cancers du rectum ?",
    options: [
      "Perforation.",
      "Occlusion intestinale.",
      "Fistule vésicale.",
      "Hémorragie massive.",
      "Invasion nerveuse sacrée."
    ],
    correctAnswers: [1],
    explanation: "L’occlusion intestinale est la complication la plus fréquente des cancers colorectaux, en particulier des tumeurs du côlon gauche et du rectum (aspect en virole). La perforation est moins fréquente mais grave. Les autres complications sont plus rares ou tardives.",
    clinicalPearl: "Complication inaugurale majeure : Occlusion colique aiguë par sténose circonférentielle."
  },
  {
    id: 'q-rect-20',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "L’exérèse totale du mésorectum (TME) a pour principal objectif :",
    options: [
      "Réduire le risque de métastases hépatiques.",
      "Diminuer le risque de récidive locale (< 10 % contre 20–40 %).",
      "Permettre une anastomose plus basse.",
      "Éviter une colostomie définitive.",
      "Améliorer la continence sphinctérienne."
    ],
    correctAnswers: [1],
    explanation: "L’exérèse totale du mésorectum (TME selon Heald) est la technique chirurgicale de référence pour les cancers du rectum. Elle réduit le risque de récidive locale de manière significative (< 10 % contre 20–40 % auparavant). Elle n’a pas pour objectif principal la réduction des métastases hépatiques ni l’amélioration de la continence.",
    clinicalPearl: "TME de Heald : Réduction drastique des récidives locales de 30% à moins de 7-10%."
  },
  {
    id: 'q-rect-21',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La radiothérapie néoadjuvante est indiquée en priorité pour :",
    options: [
      "Les tumeurs T1N0 du haut rectum.",
      "Les tumeurs T3–T4 N+ du moyen et bas rectum.",
      "Toutes les tumeurs rectales quel que soit le stade.",
      "Les métastases hépatiques synchrones.",
      "Les récidives locales post-chirurgicales."
    ],
    correctAnswers: [1],
    explanation: "La radiothérapie néoadjuvante (préopératoire) est indiquée pour les tumeurs du moyen et bas rectum de stade T3–T4 N+. Elle permet de réduire le volume tumoral, d’améliorer la résécabilité et le taux de conservation sphinctérienne. Elle n’est pas indiquée pour les tumeurs précoces (T1/T2) ni pour les métastases.",
    clinicalPearl: "Indication clé radiochimiothérapie : Moyen/bas rectum de stade T3-T4 ou N+ ou CRM menacée (< 1 mm)."
  },
  {
    id: 'q-rect-22',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le concept de TNT (Traitement Néoadjuvant Total) dans le cancer du rectum consiste à :",
    options: [
      "Réaliser une chimiothérapie adjuvante seule après la chirurgie.",
      "Administrer une chimiothérapie systémique en plus de la radiochimiothérapie avant la chirurgie.",
      "Proposer une radiothérapie exclusive sans chirurgie.",
      "Réaliser une chirurgie d’emblée sans traitement néoadjuvant.",
      "Associer une immunothérapie à la radiothérapie."
    ],
    correctAnswers: [1],
    explanation: "Le TNT (Total Neoadjuvant Therapy) associe une chimiothérapie systémique (induction ou consolidation) à la radiochimiothérapie avant la chirurgie. Il vise à améliorer le contrôle local, la réponse complète, la survie sans métastase et la survie globale. Les essais PRODIGE 23 et RAPIDO ont validé cette approche.",
    clinicalPearl: "TNT = Chimiothérapie systémique + Radiochimiothérapie délivrées TOUTES DEUX avant la chirurgie."
  },
  {
    id: 'q-rect-23',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le schéma du protocole PRODIGE 23 dans le TNT est :",
    options: [
      "Radiothérapie courte (25 Gy) → chimiothérapie de consolidation → chirurgie.",
      "Chimiothérapie d’induction → radiochimiothérapie longue (45–50 Gy) → chirurgie → chimiothérapie adjuvante.",
      "Chirurgie → radiochimiothérapie adjuvante.",
      "Radiothérapie longue seule → chirurgie.",
      "Chimiothérapie néoadjuvante seule sans radiothérapie."
    ],
    correctAnswers: [1],
    explanation: "Le protocole PRODIGE 23 : chimiothérapie d’induction (FOLFIRINOX) → radiochimiothérapie longue (schéma long, 45–50 Gy) → chirurgie → chimiothérapie adjuvante. Le protocole RAPIDO utilise une radiothérapie courte (25 Gy) suivie d’une chimiothérapie de consolidation avant la chirurgie.",
    clinicalPearl: "PRODIGE 23 : Induction par FOLFIRINOX -> Radiochimiothérapie longue -> Chirurgie TME."
  },
  {
    id: 'q-rect-24',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon la conférence de consensus de Paris (1998), le protocole de surveillance après traitement d’un cancer du rectum comprend :",
    options: [
      "Une coloscopie à 1 an, puis tous les 3 ans.",
      "Un dosage de l’ACE tous les 3 mois pendant 2 ans, puis tous les 6 mois jusqu’à 5 ans.",
      "Une TDM thoraco-abdomino-pelvienne annuelle pendant 5 ans.",
      "Un toucher rectal systématique semestriel.",
      "Toutes les propositions ci-dessus sont correctes."
    ],
    correctAnswers: [4],
    explanation: "La surveillance recommandée inclut : ACE tous les 3 mois pendant 2 ans, puis tous les 6 mois jusqu’à 5 ans ; coloscopie à 1 an puis tous les 3 ans ; TDM TAP annuelle pendant 5 ans ; TR systématique à chaque consultation pour les tumeurs basses. Toutes les propositions sont correctes.",
    clinicalPearl: "Surveillance de Paris : ACE q3m (2 ans) puis q6m ; Coloscopie à 1 an puis q3 ans ; TDM TAP annuelle."
  },
  {
    id: 'q-rect-25',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La survie à 5 ans du cancer du rectum est estimée à :",
    options: ["> 80 %.", "Environ 70 %.", "Environ 50 %.", "Environ 30 %.", "< 10 %."],
    correctAnswers: [2],
    explanation: "La survie à 5 ans du cancer du rectum est inférieure à 50 %, ce qui souligne la gravité de cette pathologie. Le pronostic est étroitement lié au stade au moment du diagnostic, d’où l’importance du dépistage et de la prise en charge précoce.",
    clinicalPearl: "Survie globale à 5 ans globale = environ 50%."
  },

  // -------------------------------------------------------------
  // 5 Cas Cliniques Pratiques (15 questions)
  // -------------------------------------------------------------
  // Cas 1
  {
    id: 'q-cas-rect-1-1',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Patient de 65 ans, rectorragies : Un homme de 65 ans, sans antécédent particulier, consulte pour des rectorragies minimes et des troubles du transit (alternance constipation/diarrhée) évoluant depuis 3 mois. Pas de syndrome rectal franc. TR : lésion ulcérée face antérieure à 5 cm de la marge anale, mobile. Endoscopie : lésion bourgeonnante à 6 cm, biopsie : adénocarcinome moyennement différencié. IRM : T3N1 avec envahissement du mésorectum, sans atteinte de la CRM. TDM TAP normale.\n\nQuel est le stade TNM clinique de ce patient ?",
    options: ["T2N0M0", "T3N1M0", "T3N0M0", "T4N1M0", "T3N2M0"],
    correctAnswers: [1],
    explanation: "L’IRM montre une tumeur T3 (atteinte du mésorectum) et N1 (1 à 3 ganglions métastatiques régionaux). La TDM TAP est normale (M0). Le stade est donc T3N1M0.",
    clinicalPearl: "Stade clinique IRM : T3N1M0 (mésorectum envahi, ganglions régionaux positifs, pas de métastase à distance)."
  },
  {
    id: 'q-cas-rect-1-2',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 – Suite : Quelle attitude thérapeutique est la plus appropriée chez ce patient de 65 ans (T3N1M0) ?",
    options: [
      "Chirurgie d’emblée (résection antérieure sans néoadjuvant).",
      "Radiothérapie longue (45–50 Gy) associée à une chimiothérapie (5-Fu) puis chirurgie.",
      "Chimiothérapie palliative seule.",
      "Exérèse transanale de la tumeur.",
      "Surveillance simple avec coloscopie à 1 an."
    ],
    correctAnswers: [1],
    explanation: "Il s’agit d’un cancer du moyen rectum (6 cm), stade T3N1M0. L’indication est une radiochimiothérapie néoadjuvante (schéma long) suivie d’une chirurgie de type TME. La chirurgie d’emblée serait une option pour les tumeurs T1/T2 précoces. La chimiothérapie palliative est réservée aux métastases. L’exérèse transanale est réservée aux tumeurs T1 de faible risque.",
    clinicalPearl: "T3N1 du moyen rectum = Radiochimiothérapie concomitante néoadjuvante (45-50 Gy + 5-FU) puis résection antérieure avec TME."
  },
  {
    id: 'q-cas-rect-1-3',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Si la radiothérapie néoadjuvante est choisie, quel schéma est recommandé pour ce patient ?",
    options: [
      "Radiothérapie courte (25 Gy en 5 jours) seule.",
      "Radiothérapie longue (45–50 Gy en 5 semaines) + chimiothérapie concomitante.",
      "Radiothérapie longue seule sans chimiothérapie.",
      "Chimiothérapie d’induction seule (FOLFIRINOX) sans radiothérapie.",
      "Radiothérapie courte + chimiothérapie de consolidation (RAPIDO)."
    ],
    correctAnswers: [1],
    explanation: "Pour un cancer du rectum de stade T3N1, le schéma standard est la radiochimiothérapie longue (45–50 Gy en 5 semaines) associée à la chimiothérapie (5-Fu ou capécitabine). Le schéma court (RAPIDO) est une alternative, mais le schéma long reste la référence en pratique courante.",
    clinicalPearl: "Schéma long : 45 à 50 Gy fractionnés sur 5 semaines avec 5-FU ou capécitabine continue."
  },

  // Cas 2
  {
    id: 'q-cas-rect-2-1',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Patient de 58 ans, syndrome occlusif : Homme de 58 ans, tabagique, consulte aux urgences pour syndrome occlusif (douleurs, arrêt matières/gaz, météorisme) depuis 5 jours. ASP : niveaux hydro-aériques coliques. TR : sténose serrée à 7 cm infranchissable au doigt. TDM : tumeur rectale sténosante T4b avec envahissement vésical. Pas de métastase.\n\nQuelle est la complication présentée par ce patient ?",
    options: [
      "Perforation digestive.",
      "Occlusion intestinale par sténose tumorale.",
      "Fistule vésicale.",
      "Hémorragie digestive massive.",
      "Carcinose péritonéale."
    ],
    correctAnswers: [1],
    explanation: "Le tableau clinique (arrêt des matières et des gaz, distension, niveaux hydro-aériques) associé à la sténose tumorale objective au TR et à la TDM confirme une occlusion intestinale par sténose tumorale. C’est la complication la plus fréquente des cancers rectaux localement évolués.",
    clinicalPearl: "Occlusion intestinale aiguë fébrile ou apyrétique par sténose tumorale infranchissable."
  },
  {
    id: 'q-cas-rect-2-2',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 – Suite : Quel geste thérapeutique immédiat est indiqué en urgence pour lever l'occlusion ?",
    options: [
      "Résection chirurgicale d’emblée avec anastomose immédiate.",
      "Colostomie de décharge.",
      "Radiothérapie d’urgence.",
      "Pose d’une prothèse colique (stent).",
      "Chimiothérapie néoadjuvante en urgence."
    ],
    correctAnswers: [3],
    explanation: "En urgence, deux options sont possibles pour lever l’occlusion : la pose d’un stent colique (prothèse) en première intention si la tumeur est accessible et que l’équipe est entraînée, ou la colostomie de décharge (par laparotomie ou cœlioscopie). La résection d’emblée est contre-indiquée sans préparation colique et en contexte occlusif.",
    clinicalPearl: "Levée de l'occlusion : Pose d'une endoprothèse colique auto-expansive ou colostomie première de décharge."
  },
  {
    id: 'q-cas-rect-2-3',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 31,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 – Suite : Après levée de l’occlusion, quel traitement doit être envisagé pour ce patient T4bN0M0 ?",
    options: [
      "Chirurgie de résection immédiate (TME).",
      "Radiochimiothérapie néoadjuvante prolongée (TNT).",
      "Chimiothérapie palliative exclusive.",
      "Surrénalectomie bilatérale.",
      "Transplantation hépatique."
    ],
    correctAnswers: [1],
    explanation: "Il s’agit d’une tumeur T4b (envahissement vésical) sans métastase. Le traitement standard est un TNT (traitement néoadjuvant total) avec radiochimiothérapie longue et chimiothérapie systémique (induction ou consolidation) afin de réduire la tumeur, améliorer la résécabilité et potentiellement permettre une exérèse chirurgicale (R0) après réévaluation.",
    clinicalPearl: "T4b = Envahissement d'organe de voisinage -> Traitement Néoadjuvant Total (TNT) pour tenter de négativer les marges."
  },

  // Cas 3
  {
    id: 'q-cas-rect-3-1',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 32,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Femme de 45 ans, antécédents familiaux : Patiente de 45 ans, sans antécédent personnel, consulte pour rectorragies minimes. Sa mère et son frère ont eu un cancer du côlon avant 50 ans. TR normal. Coloscopie : adénome villeux de 2 cm du moyen rectum, biopsie : dysplasie de haut grade. EER : lésion T1 sans ganglion.\n\nQuel est le groupe à risque de cette patiente ?",
    options: [
      "Risque moyen.",
      "Risque élevé (parent au 1er degré porteur de CCR avant 50 ans).",
      "Risque très élevé (HNPCC).",
      "Risque très élevé (PAF).",
      "Risque nul."
    ],
    correctAnswers: [1],
    explanation: "La patiente a un parent au 1er degré (mère, frère) porteur d’un CCR diagnostiqué avant 50 ans. Cela la classe dans le groupe à risque élevé (risque 2 à 3 fois supérieur à la population générale). Le risque très élevé correspond à la PAF et l’HNPCC (qui nécessitent des critères d’Amsterdam ou des tests génétiques).",
    clinicalPearl: "Deux parents au premier degré atteints dont l'un avant 50 ans = Risque élevé (indication coloscopie de dépistage précoce)."
  },
  {
    id: 'q-cas-rect-3-2',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 33,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : Concernant l’adénome villeux avec dysplasie de haut grade, quelle est la proposition exacte ?",
    options: [
      "Il n’a pas de potentiel de transformation maligne.",
      "Il doit être surveillé par coloscopie dans 5 ans.",
      "Il existe un risque de cancer invasif, et une exérèse endoscopique complète est indiquée.",
      "Il nécessite une radiothérapie néoadjuvante.",
      "Il est synonyme de cancer infiltrant."
    ],
    correctAnswers: [2],
    explanation: "L’adénome villeux avec dysplasie de haut grade a un potentiel malin élevé. La prise en charge standard est l’exérèse endoscopique complète (polypectomie ou mucosectomie), avec analyse anatomopathologique de la pièce pour vérifier l’absence de carcinome invasif. Ce n’est pas encore un cancer infiltrant.",
    clinicalPearl: "Exérèse endoscopique complète monobloc indispensable pour analyse anatomopathologique exhaustive."
  },
  {
    id: 'q-cas-rect-3-3',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 34,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 – Suite : Si la pièce d’exérèse endoscopique montre un adénocarcinome T1 infiltrant la sous-muqueuse profonde (sm2), quel est le risque principal ?",
    options: [
      "Risque de métastases hépatiques.",
      "Risque d’envahissement ganglionnaire ou de récidive locorégionale.",
      "Risque de péritonite.",
      "Risque de perforation.",
      "Risque de fistule."
    ],
    correctAnswers: [1],
    explanation: "Pour un cancer T1 (invasion sous-muqueuse), le principal risque est l’envahissement ganglionnaire (5 à 15 % selon le niveau d’infiltration sm1/sm2/sm3) et la récidive locorégionale. Une infiltration profonde (sm2 ou sm3) ou la présence de facteurs de risque histologiques peut conduire à proposer une chirurgie complémentaire (TME).",
    clinicalPearl: "Infiltration sm2/sm3 = Risque métastatique ganglionnaire > 10-15%, nécessitant une résection chirurgicale complémentaire avec TME."
  },

  // Cas 4
  {
    id: 'q-cas-rect-4-1',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 35,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Patient de 70 ans, bas rectum métastatique : Patient de 70 ans, diabétique, consulte pour syndrome rectal et rectorragies. TR : tumeur du bas rectum à 3 cm de la marge anale, fixée, circonférentielle. IRM : T3N1 avec envahissement du sphincter interne. TDM TAP : 2 lésions hépatiques (1,5 cm et 2 cm) évocatrices de métastases.\n\nQuel est le stade TNM de ce patient ?",
    options: ["T2N0M0", "T3N1M1a", "T3N1M1b", "T4N1M1a", "T3N2M0"],
    correctAnswers: [1],
    explanation: "La tumeur est T3 (atteinte du mésorectum), N1 (1 à 3 ganglions). Les lésions hépatiques sont des métastases localisées à un seul organe (le foie) : M1a. Le stade est donc T3N1M1a.",
    clinicalPearl: "Métastases limitées au seul parenchyme hépatique = M1a."
  },
  {
    id: 'q-cas-rect-4-2',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 36,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 – Suite : Quelle est la prise en charge la plus adaptée chez ce patient métastatique synchrone d’emblée ?",
    options: [
      "Chirurgie rectale d’emblée avec résection hépatique simultanée.",
      "Chimiothérapie systémique palliative exclusive.",
      "Radiochimiothérapie néoadjuvante locale suivie de chirurgie, et résection hépatique secondaire.",
      "Chimiothérapie systémique (induction) et réévaluation pour une stratégie multimodale (radiochimiothérapie locale puis chirurgie des deux sites).",
      "Soins de confort exclusifs."
    ],
    correctAnswers: [3],
    explanation: "En présence de métastases hépatiques synchrones, la prise en charge est multimodale et discutée en RCP. L’approche standard est une chimiothérapie systémique d’induction (ex : FOLFOX ou FOLFIRI) suivie d’une réévaluation. Si la réponse est bonne, on peut proposer une radiochimiothérapie locale pour le rectum puis une chirurgie des deux sites.",
    clinicalPearl: "Cancer rectal avec métastases résécables = Chimiothérapie première d'induction systémique puis traitement séquentiel multimodal."
  },
  {
    id: 'q-cas-rect-4-3',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 37,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : Le patient présente un envahissement avéré du sphincter interne à 3 cm de la marge. Quelle conséquence chirurgicale majeure cela impose-t-il ?",
    options: [
      "Résection antérieure avec anastomose colorectale basse.",
      "Amputation abdomino-périnéale (AAP) avec colostomie définitive.",
      "Exérèse transanale de la tumeur.",
      "Colostomie de décharge seule.",
      "Radiothérapie exclusive sans chirurgie."
    ],
    correctAnswers: [1],
    explanation: "Une tumeur du bas rectum (< 3 cm de la marge anale) avec envahissement du sphincter interne ne permet pas une conservation sphinctérienne. L’intervention chirurgicale est une amputation abdomino-périnéale (AAP selon Miles) avec colostomie terminale définitive gauche.",
    clinicalPearl: "Envahissement du sphincter = Impossibilité de conservation sphinctérienne -> AAP de Miles avec colostomie définitive."
  },

  // Cas 5
  {
    id: 'q-cas-rect-5-1',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 38,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Tumeur du haut rectum : Patiente de 55 ans en bon état général, adressée pour lésion du haut rectum (12 cm de la marge anale). EER : tumeur T2N0M0. IRM : pas d'envahissement du mésorectum ni ganglion. Biopsie : adénocarcinome bien différencié.\n\nQuel est le traitement de référence pour ce stade T2N0M0 du haut rectum ?",
    options: [
      "Chirurgie d’emblée : résection antérieure du rectum avec TME.",
      "Radiothérapie néoadjuvante longue suivie de chirurgie.",
      "Chimioradiothérapie exclusive.",
      "Exérèse transanale de la tumeur.",
      "Surveillance active (watch-and-wait)."
    ],
    correctAnswers: [0],
    explanation: "Pour un cancer du haut rectum (≥ 10 cm) de stade T2N0M0, le traitement de référence est la chirurgie d’emblée : résection antérieure du rectum avec exérèse du mésorectum (TME) ou mésorectum partiel (au moins 5 cm sous la tumeur). La radiothérapie n'est pas indiquée à ce stade précoce.",
    clinicalPearl: "Haut rectum T2N0M0 = Chirurgie d'emblée (résection antérieure avec anastomose colorectale haute et mésorectum partiel 5 cm)."
  },
  {
    id: 'q-cas-rect-5-2',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 39,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Après résection chirurgicale, l’examen anapath confirme un adénocarcinome pT2pN0M0 avec marges R0 saines (18 ganglions négatifs). Quel traitement adjuvant est recommandé ?",
    options: [
      "Radiothérapie adjuvante systématique.",
      "Chimiothérapie adjuvante (FOLFOX) pendant 6 mois.",
      "Radiochimiothérapie adjuvante.",
      "Surveillance seule.",
      "Réintervention pour exérèse élargie."
    ],
    correctAnswers: [3],
    explanation: "Pour un stade pT2 pN0 (stade I) après résection complète R0, aucun traitement adjuvant (ni chimiothérapie ni radiothérapie) n'est indiqué. La surveillance clinique et morphologique seule est la règle.",
    clinicalPearl: "Stade I (pT2N0 R0) = Pas de chimiothérapie adjuvante. Surveillance armée seule."
  },
  {
    id: 'q-cas-rect-5-3',
    courseId: 'crs-gastro-cancer-rectum',
    questionNumber: 40,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Le protocole de surveillance post-opératoire de cette patiente comprend :",
    options: [
      "Une coloscopie à 1 an puis tous les 3 ans.",
      "Un dosage de l’ACE tous les 3 mois pendant 2 ans, puis tous les 6 mois jusqu’à 5 ans.",
      "Une TDM thoraco-abdomino-pelvienne annuelle pendant 5 ans.",
      "Un toucher rectal systématique à chaque consultation.",
      "Toutes les propositions ci-dessus."
    ],
    correctAnswers: [4],
    explanation: "Le protocole de surveillance standard (conférence de consensus Paris 1998) inclut : ACE tous les 3 mois × 2 ans puis tous les 6 mois × 3 ans ; coloscopie à 1 an puis tous les 3 ans ; TDM TAP annuelle pendant 5 ans ; TR systématique pour les tumeurs basses. Toutes les propositions sont correctes.",
    clinicalPearl: "Protocole de surveillance officiel : Triade ACE + TDM TAP + Coloscopie complète."
  }
];

export const CANCER_RECTUM_RESOURCES: CourseResource[] = [
  {
    id: 'res-rect-mindmap',
    courseId: 'crs-gastro-cancer-rectum',
    type: 'Resume',
    title: "Mind Map & Stratégie Thérapeutique : Cancer du Rectum (Pr A. Anou, CHU Douera)",
    contentMarkdown: `## 🧠 Mind Map & Synthèse : Cancer du Rectum
**Basé sur le cours du Pr A. Anou (CHU Douera) - Faculté de Médecine**

### 1. Épidémiologie & Étiologie
- **35-40 %** des cancers colorectaux (CCR) - 3ème rang mondial, sex-ratio H/F ≈ 1,5.
- Incidence doublant chaque décennie après 50 ans.
- **Séquence adénome-cancer (70%)** : accumulation de mutations (APC 5q -> KRAS -> TP53).
- **Groupes à risque** :
  - *Très élevé* : PAF (gène APC 5q, Gardner/Turcot), Syndrome de Lynch / HNPCC (MSH2, MLH1).
  - *Élevé* : antécédent personnel d'adénome/CCR, parent au 1er degré atteint, MICI (Crohn/RCH).
  - *Moyen* : population générale > 45 ans.

### 2. Diagnostic & Bilan d'Extension
- **Clinique** : Toucher Rectal (TR) systématique (hauteur, fixité, sphincter), rectorragies, syndrome rectal (faux besoins, ténesme).
- **Endoscopie** : Recto-sigmoscopie rigide (distance exacte à la marge anale) + biopsies + coloscopie totale (lésions synchrones).
- **Imagerie locorégionale** :
  - **IRM pelvienne** = gold standard locorégional (critères DISTANCED, distance au fascia recti, CRM).
  - **Échographie endorectale (EER)** : idéale pour les tumeurs superficielles T1/T2 du bas/moyen rectum.
- **Extension à distance** : TDM TAP injectée (métastases hépatiques et pulmonaires) + dosage ACE de référence.

### 3. Classification TNM 8e Édition
- **T** : T1 (sous-muqueuse), T2 (musculeuse), T3 (mésorectum / sous-séreuse), T4a (séreuse péritonéale), T4b (organes voisins : vessie, vagin, prostate, sacrum).
- **N** : N0, N1 (1 à 3 ganglions : N1a=1, N1b=2-3, N1c=dépôts), N2 (≥ 4 ganglions : N2a=4-6, N2b ≥ 7).
- **M** : M0, M1a (1 site métastatique), M1b (≥ 2 sites), M1c (atteinte péritonéale).

### 4. Algorithme Décisionnel Thérapeutique
\`\`\`
Cancer du Rectum Confirmé
          │
          ├──► Stade Précoce (T1-T2 N0)
          │     ├── T1 sm1 bas risque : Exérèse transanale locale (TEM/TAMIS)
          │     └── T1 sm2-3 ou T2 : Chirurgie d'emblée avec TME (Résection antérieure)
          │
          ├──► Stade Localement Avancé (T3-T4 ou N+)
          │     ├── Radiochimiothérapie longue (45-50 Gy + 5-FU/Capécitabine)
          │     ├── OU Schéma court (25 Gy en 5 jours)
          │     ├── OU Stratégie TNT (PRODIGE 23 : Induction FOLFIRINOX -> RCT -> Chirurgie)
          │     └── Puis Chirurgie TME (Heald) :
          │          • Moyen/Haut rectum : Résection antérieure avec conservation sphinctérienne
          │          • Bas rectum (< 3 cm) avec atteinte sphinctérienne : Amputation abdomino-périnéale (AAP)
          │
          ├──► Stade Métastatique (M1 synchrone résécable)
          │     → Chimiothérapie systémique d'induction -> Stratégie multimodale séquentielle
          │
          └──► Surveillance Post-Opératoire (Consensus Paris 1998)
                • ACE : tous les 3 mois x 2 ans, puis tous les 6 mois x 3 ans
                • TDM TAP : annuelle pendant 5 ans
                • Coloscopie : à 1 an puis tous les 3 ans
                • Toucher rectal systématique à chaque consultation
\`\`\``,
    author: 'Pr A. Anou (CHU Douera)'
  },
  {
    id: 'res-rect-mnemo',
    courseId: 'crs-gastro-cancer-rectum',
    type: 'Astuce',
    title: "Mnémoniques & Règles d'Or : Cancer du Rectum",
    contentMarkdown: `### 🧩 Mnémoniques & Astuces de Révision (CHU Douera)

1. **Critères IRM Pelvienne (« DISTANCED »)** :
   - **D** : Distance à la marge anale
   - **I** : Imagerie staging T
   - **S** : Status ganglionnaire N
   - **T** : Tumeur (envahissement)
   - **A** : Atteinte veineuse extramurale (EMVI)
   - **N** : Nodules / dépôts tumoraux satellites
   - **C** : Circonférentielle (CRM - Marge de résection circonférentielle)
   - **E** : Extension aux organes adjacents (T4b)
   - **D** : Distance au sphincter anal

2. **Règle des Couches pour les Stades T** :
   - **T1** = **1**ère couche profonde : sous-muqueuse
   - **T2** = **2**ème couche : musculeuse
   - **T3** = **3**ème couche : sous-séreuse / mésorectum
   - **T4** = **4** franchi : séreuse péritonéale (4a) ou organes voisins (4b)

3. **Stades Ganglionnaires N** :
   - N0 = Zéro
   - N1 = 1 à 3 ganglions
   - N2 = 4 ganglions ou plus (N2a = 4 à 6, N2b ≥ 7)

4. **Protocoles TNT Modernes** :
   - **PRODIGE 23** : Induction (FOLFIRINOX) -> Radiochimiothérapie longue -> Chirurgie -> Adjuvant
   - **RAPIDO** : Radiothérapie courte (5x5 Gy) -> Consolidation (CAPOX/FOLFOX) -> Chirurgie

5. **Règle des « 3 » de Surveillance de Paris** :
   - ACE : tous les **3** mois pendant 2 ans
   - Coloscopie : à 1 an puis tous les **3** ans
   - TDM : annuelle pendant 5 ans
   - TR : systématique à chaque consultation`,
    author: 'Pr A. Anou (CHU Douera)'
  }
];
