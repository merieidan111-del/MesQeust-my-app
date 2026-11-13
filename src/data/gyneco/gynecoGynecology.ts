import { Question } from '../../types/medical';

export const GYNECOLOGY_QUESTIONS: Question[] = [
  {
    "id": "q-c-gyn-fibrome-1",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant les caractéristiques épidémiologiques et physiopathologiques du fibrome utérin, quelle est la proposition exacte ?",
    "options": [
      "Le fibrome utérin est la tumeur pelvienne maligne la plus fréquente chez la femme en âge de procréer.",
      "La prévalence maximale du fibrome utérin se situe après la ménopause en raison du maintien de l'imprégnation hormonale.",
      "Il s'agit d'une prolifération polyclonale de cellules musculaires lisses, influencée par les œstrogènes.",
      "La nulliparité et l'origine ethnique africaine sont des facteurs de risque reconnus.",
      "Les fibromes régressent sous l'effet de la progestérone et des facteurs de croissance TGF-β."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Les facteurs de risque classiques incluent la nulliparité, l'origine ethnique (femmes noires), les antécédents familiaux et l'obésité.\n\nA est faux : C'est la tumeur bénigne la plus fréquente.\n\nB est faux : Le pic se situe entre 35 et 50 ans, et les fibromes régressent après la ménopause.\n\nC est faux : La prolifération est monoclonale.\n\nE est faux : Les œstrogènes stimulent la croissance, tandis que la progestérone a un effet complexe (stimule les mitoses mais favorise l'apoptose). Les fibromes régressent après la ménopause, pas sous l'effet de la progestérone.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-2",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes, lesquelles sont des facteurs impliqués dans la physiopathologie du fibrome utérin ?",
    "options": [
      "Les œstrogènes (E2)",
      "La progestérone (P4)",
      "Le facteur de croissance IGF",
      "L'hormone folliculo-stimulante (FSH)",
      "Le facteur de nécrose tumorale alpha (TNF-α)"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La physiopathologie implique les œstrogènes (E2), la progestérone (P4) et des facteurs de croissance comme IGF, TGF-β, VEGF, PDGF.\n\nD est faux : La FSH n'est pas directement impliquée dans la pathogenèse du fibrome.\n\nE est faux : Le TNF-α n'est pas un facteur clé reconnu dans ce contexte, bien que l'inflammation puisse jouer un rôle, les facteurs cités dans le cours sont IGF, TGF-β, VEGF, PDGF.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-3",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Concernant la classification des fibromes utérins (FIGO), un fibrome sous-muqueux classé 2 correspond à :",
    "options": [
      "Un fibrome 100% intra-mural, au contact de l'endomètre.",
      "Un fibrome sous-séreux avec plus de 50% de composante intra-murale.",
      "Un fibrome sous-muqueux avec plus de 50% de composante intra-murale.",
      "Un fibrome sous-muqueux pédiculé intra-cavitaire.",
      "Un fibrome intra-mural strict."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Selon la classification FIGO, les fibromes sous-muqueux sont : 0 (pédiculé intra-cavitaire), 1 (moins de 50% intra-mural), 2 (plus de 50% intra-mural).\n\nA est faux : Il s'agit du type 3 (intra-mural au contact de l'endomètre).\n\nB est faux : Il s'agit du type 5 (sous-séreux > 50% intra-mural).\n\nD est faux : Il s'agit du type 0.\n\nE est faux : Il s'agit du type 4.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-4",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernent la clinique du fibrome utérin sont exactes, SAUF :",
    "options": [
      "Les ménorragies constituent le symptôme le plus fréquent.",
      "Les douleurs aiguës peuvent être le signe d'une nécrobiose aseptique ou d'une torsion.",
      "La pollakiurie et la constipation sont des signes de compression liés au syndrome de masse.",
      "L'infertilité est une complication rare et exceptionnellement liée à des troubles de l'implantation.",
      "La découverte fortuite lors d'une échographie est fréquente car la majorité des fibromes sont asymptomatiques."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "L'infertilité n'est pas exceptionnelle, elle fait partie des complications fréquentes, avec des troubles de l'implantation, des fausses couches et un risque d'accouchement prématuré.\n\nA, B, C, E sont exactes : Les ménorragies sont le symptôme principal (A). La douleur aiguë signe la nécrobiose ou la torsion (B). Le syndrome de masse comprime les organes de voisinage (C). L'échographie est l'examen de première intention, souvent fortuit (E).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-5",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Concernant l'imagerie et le diagnostic du fibrome utérin, quelle est la proposition fausse ?",
    "options": [
      "L'échographie pelvienne est l'examen de première intention pour évaluer la localisation, la taille et le nombre de fibromes.",
      "L'IRM pelvienne est indiquée dans le bilan pré-thérapeutique pour une cartographie précise.",
      "L'hystéroscopie est l'examen de choix pour explorer les fibromes sous-séreux.",
      "Le diagnostic clinique repose sur un utérus augmenté de taille et irrégulier.",
      "L'échographie permet de visualiser les fibromes sous-séreux et intra-muraux, mais l'IRM est supérieure pour la cartographie."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'hystéroscopie est l'examen de choix pour explorer les fibromes sous-muqueux (intra-cavitaires), et non les fibromes sous-séreux.\n\nA, B, D, E sont vraies : L'écho est de 1ère intention (A). L'IRM est pour le bilan pré-thérapeutique (B). La clinique est typique (D). L'IRM est effectivement supérieure pour la cartographie précise (E).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-6",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Quel est le diagnostic différentiel principal à évoquer devant un fibrome utérin, notamment devant une augmentation globale et irrégulière de l'utérus ?",
    "options": [
      "L'adénomyose",
      "Le cancer de l'ovaire",
      "La grossesse extra-utérine",
      "Le kyste ovarien fonctionnel",
      "L'endométriose profonde"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'adénomyose est le diagnostic différentiel principal car elle se présente également par un utérus augmenté de taille et des ménorragies, mais l'utérus est souvent globuleux et douloureux.\n\nB est faux : Le cancer de l'ovaire est un diagnostic différentiel possible, mais l'adénomyose est le piège classique.\n\nC est faux : La GEU ne se présente pas comme une masse utérine.\n\nD est faux : Le kyste ovarien fonctionnel est une masse annexielle, non utérine.\n\nE est faux : L'endométriose profonde donne des douleurs mais pas typiquement un utérus augmenté de taille.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-7",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Quelles sont les complications classiques d'un fibrome utérin ?",
    "options": [
      "Anémie ferriprive",
      "Nécrobiose aseptique",
      "Torsion d'un fibrome pédiculé",
      "Transformation sarcomateuse dans 10% des cas",
      "Compression des organes de voisinage"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Les complications sont l'anémie (A), la nécrobiose aseptique (B), la torsion (C), la compression (E) et rarement la dégénérescence sarcomateuse.\n\nD est faux : La transformation sarcomateuse est exceptionnelle (moins de 1%), et non de 10%.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-8",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Concernant le traitement médical du fibrome utérin, quelle affirmation est correcte ?",
    "options": [
      "Les analogues de la GnRH sont utilisés en traitement au long cours pour une efficacité durable.",
      "Les modulateurs des récepteurs à la progestérone (ex: ulipristal) sont utilisés pour réduire le volume des fibromes.",
      "Les progestatifs sont formellement contre-indiqués en cas de ménorragies.",
      "Les AINS sont le traitement de première ligne pour réduire le volume du fibrome.",
      "Le traitement médical est curatif et définitif."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'ulipristal (modulateur des récepteurs de la progestérone) est utilisé pour réduire le volume du fibrome et contrôler les saignements.\n\nA est faux : Les analogues de la GnRH sont utilisés en pré-opératoire (3-6 mois), pas au long cours (risque de ménopause et perte osseuse).\n\nC est faux : Les progestatifs peuvent être utilisés pour contrôler les saignements.\n\nD est faux : Les AINS traitent la douleur et les ménorragies, mais n'ont pas d'effet sur le volume.\n\nE est faux : Le traitement médical est suspensif, pas curatif.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-9",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Quel est le traitement chirurgical de choix pour une patiente porteuse d'un fibrome utérin symptomatique avec un désir de grossesse ?",
    "options": [
      "L'hystérectomie totale",
      "La myomectomie",
      "L'embolisation des artères utérines",
      "La radiofréquence",
      "L'abstention thérapeutique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La myomectomie est le traitement conservateur de choix pour préserver la fertilité.\n\nA est faux : L'hystérectomie est un traitement radical, réservé aux femmes ne désirant plus de grossesse.\n\nC est faux : L'embolisation est une alternative, mais la myomectomie est le gold standard pour la fertilité.\n\nD est faux : La radiofréquence est une technique mini-invasive, mais la myomectomie reste la référence pour le désir de grossesse.\n\nE est faux : La patiente est symptomatique, l'abstention n'est pas indiquée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-10",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Concernant les fibromes utérins et la grossesse, quelle proposition est fausse ?",
    "options": [
      "La grossesse peut être compliquée par une nécrobiose aseptique du fibrome.",
      "Les fibromes peuvent favoriser des présentations anormales du fœtus.",
      "La césarienne est systématiquement indiquée chez toutes les femmes enceintes porteuses d'un fibrome.",
      "La myomectomie pendant la grossesse est rarement indiquée en urgence.",
      "Le fibrome utérin peut être responsable de fausses couches à répétition."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La césarienne n'est pas systématique. Elle est indiquée en fonction de la localisation, de la taille et des complications obstétricales.\n\nA, B, D, E sont vraies : La nécrobiose est une complication douloureuse de la grossesse (A). Les fibromes peuvent gêner la présentation (B). La myomectomie en urgence est risquée (D). Les fibromes peuvent causer des fausses couches (E).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-11",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Quels sont les éléments qui influencent le choix thérapeutique devant un fibrome utérin ?",
    "options": [
      "L'âge de la patiente",
      "Le désir de grossesse",
      "La symptomatologie (douleur, saignement)",
      "La taille et la localisation du fibrome",
      "La présence d'une anémie ferriprive"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "La décision thérapeutique dépend de l'âge (A), du désir de grossesse (B), des symptômes (C), et de la taille/localisation (D).\n\nE est faux : L'anémie est une conséquence, pas un critère décisionnel majeur dans le choix de la stratégie (bien qu'elle nécessite une prise en charge symptomatique).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-12",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Une patiente de 42 ans, nullipare, présente un fibrome sous-muqueux de 3 cm responsable de ménorragies. Elle désire une grossesse. Quelle est la meilleure attitude thérapeutique ?",
    "options": [
      "Hystérectomie totale",
      "Résection hystéroscopique du fibrome",
      "Embolisation des artères utérines",
      "Traitement par analogues de la GnRH à vie",
      "Abstention thérapeutique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La résection hystéroscopique est le traitement de choix pour les fibromes sous-muqueux (type 0, 1, 2) symptomatiques avec désir de grossesse. Elle est mini-invasive et conservatrice.\n\nA est faux : Radical, incompatible avec le désir de grossesse.\n\nC est faux : L'embolisation peut compromettre la fertilité et n'est pas le traitement de première intention pour un fibrome sous-muqueux.\n\nD est faux : Les analogues de la GnRH ne se donnent pas à vie.\n\nE est faux : La patiente est symptomatique (ménorragies) et infertile, il faut traiter.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-13",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Concernant l'embolisation des artères utérines (EAU) dans le traitement du fibrome, quelle est la proposition exacte ?",
    "options": [
      "C'est une technique chirurgicale lourde nécessitant une laparotomie.",
      "Elle est contre-indiquée chez les femmes souhaitant préserver leur fertilité.",
      "Elle est une alternative mini-invasive à la chirurgie, mais n'est pas recommandée en première intention chez les femmes avec désir de grossesse.",
      "Elle entraîne systématiquement une ménopause définitive.",
      "Elle est indiquée uniquement pour les fibromes sous-muqueux de type 0."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'EAU est une technique mini-invasive (radiologie interventionnelle). Elle est efficace mais peut altérer la réserve ovarienne et la fertilité, donc n'est pas recommandée en 1ère intention chez les femmes souhaitant une grossesse.\n\nA est faux : C'est une technique mini-invasive par voie percutanée (artère fémorale).\n\nB est faux : Elle n'est pas strictement contre-indiquée, mais doit être discutée.\n\nD est faux : Elle ne cause pas systématiquement une ménopause définitive.\n\nE est faux : Elle est indiquée pour les fibromes intra-muraux et sous-séreux, pas pour les sous-muqueux (où la résection hystéroscopique est préférée).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-14",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernent les fibromes utérins sont exactes, SAUF :",
    "options": [
      "Les fibromes sont des tumeurs hormono-dépendantes, régressant après la ménopause.",
      "La classification FIGO distingue les fibromes sous-muqueux, intra-muraux et sous-séreux.",
      "Le diagnostic différentiel principal est l'adénomyose.",
      "La transformation maligne est fréquente et doit être systématiquement recherchée.",
      "L'échographie pelvienne est l'examen de première intention."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "La transformation sarcomateuse est exceptionnelle (< 1%), il ne faut pas la rechercher systématiquement.\n\nA, B, C, E sont exactes : La régression après ménopause (A), la classification FIGO (B), l'adénomyose (C) et l'échographie (E) sont des notions clés.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-15",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Quelles sont les indications de l'hystérectomie dans la prise en charge du fibrome utérin ?",
    "options": [
      "Fibrome volumineux ou récidivant",
      "Patiente ménopausée avec fibrome symptomatique",
      "Désir de grossesse chez une femme jeune",
      "Fibrome sous-muqueux de type 1",
      "Patiente ne désirant plus de grossesse avec symptômes invalidants"
    ],
    "correctAnswers": [
      0,
      1,
      4
    ],
    "explanation": "L'hystérectomie est indiquée pour les fibromes volumineux/récidivants (A), chez la femme ménopausée symptomatique (B), et chez la femme ne désirant plus de grossesse avec symptômes invalidants (E).\n\nC est faux : C'est une contre-indication absolue (traitement radical).\n\nD est faux : Le traitement de choix est la résection hystéroscopique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-16",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Une patiente de 55 ans, ménopausée depuis 5 ans, consulte pour des métrorragies. L'échographie révèle un utérus augmenté de taille avec un fibrome intra-mural de 4 cm. Quel est le diagnostic différentiel prioritaire à éliminer ?",
    "options": [
      "Un fibrome en nécrobiose",
      "Un cancer de l'endomètre",
      "Une adénomyose",
      "Un kyste ovarien",
      "Une grossesse extra-utérine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Toute métrorragie chez une femme ménopausée doit faire éliminer un cancer de l'endomètre en priorité, même en présence d'un fibrome. Le fibrome ne régression pas après la ménopause, mais les saignements sont anormaux et nécessitent une exploration (hystéroscopie + biopsie).\n\nA est faux : La nécrobiose donne des douleurs, pas des métrorragies chez la femme ménopausée.\n\nC est faux : L'adénomyose régresse aussi après la ménopause.\n\nD et E sont faux : Ce sont des diagnostics improbables à cet âge.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-17",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Concernant les mécanismes génétiques impliqués dans le fibrome utérin, quelle proposition est exacte ?",
    "options": [
      "Une mutation du chromosome 7 est fréquemment retrouvée.",
      "Une délétion du chromosome 12 est systématique.",
      "Les fibromes sont toujours héréditaires selon un mode autosomique dominant.",
      "Les facteurs génétiques n'ont aucun rôle dans la pathogenèse.",
      "La duplication du chromosome 15 est la seule anomalie décrite."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les anomalies génétiques décrites incluent une mutation du chromosome 7 et une duplication du chromosome 12 (q13-15).\n\nB est faux : Il s'agit d'une duplication, pas d'une délétion.\n\nC est faux : La transmission n'est pas mendélienne simple, mais il existe une prédisposition familiale.\n\nD est faux : Les facteurs génétiques sont impliqués (prolifération monoclonale).\n\nE est faux : Ce n'est pas la seule anomalie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-18",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Quels sont les avantages de l'IRM pelvienne dans le bilan du fibrome utérin ?",
    "options": [
      "Cartographie précise des fibromes",
      "Distinction entre fibrome et adénomyose",
      "Bilan pré-thérapeutique avant embolisation ou myomectomie",
      "Détection des fibromes de petite taille (< 1 cm)",
      "Évaluation de la vascularisation des fibromes"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "L'IRM est excellente pour la cartographie (A), le diagnostic différentiel avec l'adénomyose (B), le bilan pré-thérapeutique (C) et l'évaluation de la vascularisation (E).\n\nD est faux : L'IRM n'est pas forcément meilleure que l'échographie pour les très petits fibromes, et n'est pas indiquée en 1ère intention pour cela.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-19",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Quel est le principal mécanisme de l'infertilité chez une patiente porteuse d'un fibrome utérin ?",
    "options": [
      "Une obstruction des trompes de Fallope",
      "Un trouble de l'implantation de l'embryon",
      "Une anovulation chronique",
      "Une insuffisance ovarienne prématurée",
      "Une production excessive de prolactine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les fibromes, en particulier sous-muqueux, altèrent la cavité utérine et l'endomètre, entraînant des troubles de l'implantation, des fausses couches et un accouchement prématuré.\n\nA est faux : Les fibromes ne causent pas directement d'obstruction tubaire.\n\nC et D sont faux : Ils n'affectent pas directement l'ovulation ou la réserve ovarienne.\n\nE est faux : Pas de lien avec la prolactine.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-20",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant la prise en charge d'un fibrome utérin asymptomatique, quelle proposition est fausse ?",
    "options": [
      "L'abstention thérapeutique est la règle.",
      "Une surveillance clinique et échographique annuelle est recommandée.",
      "Une intervention chirurgicale prophylactique est systématiquement proposée pour prévenir la dégénérescence.",
      "La patiente doit être informée des signes d'alerte (douleur aiguë, saignement abondant).",
      "Le fibrome peut être découvert fortuitement lors d'une échographie pelvienne."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La chirurgie prophylactique n'est pas indiquée car le risque de transformation maligne est exceptionnel. On ne retire pas un fibrome asymptomatique \"pour prévenir\".\n\nA, B, D, E sont vraies : L'abstention est la règle (A), la surveillance est annuelle (B), l'information est cruciale (D), et la découverte est souvent fortuite (E).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-21",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Quels sont les traitements symptomatiques utilisés dans la prise en charge du fibrome utérin ?",
    "options": [
      "Le fer (en cas d'anémie)",
      "Les AINS (pour les douleurs et ménorragies)",
      "Les analogues de la GnRH (pour réduire le volume)",
      "Les progestatifs (pour contrôler les saignements)",
      "Les antibiotiques (en systématique)"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Le traitement symptomatique inclut le fer (A), les AINS (B), les analogues de la GnRH (C) et les progestatifs (D).\n\nE est faux : Les antibiotiques ne sont pas indiqués en systématique, sauf en cas d'infection associée (rare).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-22",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Une patiente de 38 ans présente une anémie ferriprive sévère due à des ménorragies, dans un contexte de fibrome sous-muqueux de 2 cm. Quel est le traitement le plus approprié pour corriger l'anémie et traiter le fibrome ?",
    "options": [
      "Transfusion sanguine isolée",
      "Résection hystéroscopique du fibrome + supplémentation en fer",
      "Hystérectomie",
      "Embolisation des artères utérines",
      "Traitement par ulipristal seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La résection hystéroscopique traite le fibrome sous-muqueux (cause du saignement) et la supplémentation en fer corrige l'anémie. C'est le traitement étiologique et symptomatique.\n\nA est faux : Ne traite pas la cause.\n\nC est faux : Radical, non indiqué chez une femme de 38 ans (désir de grossesse potentiel).\n\nD est faux : L'embolisation n'est pas le traitement de 1ère intention pour un fibrome sous-muqueux.\n\nE est faux : L'ulipristal peut être utilisé, mais la résection est le traitement définitif.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-23",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Concernant la nécrobiose aseptique du fibrome, quelle proposition est exacte ?",
    "options": [
      "Elle est due à une infection bactérienne du fibrome.",
      "Elle se manifeste par une douleur aiguë et un syndrome inflammatoire.",
      "Elle est plus fréquente chez les femmes ménopausées.",
      "Elle nécessite systématiquement une hystérectomie en urgence.",
      "Elle est asymptomatique dans la majorité des cas."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La nécrobiose aseptique est une dégénérescence ischémique du fibrome, se manifestant par une douleur pelvienne aiguë, une défense et un syndrome inflammatoire.\n\nA est faux : Elle est aseptique (pas d'infection).\n\nC est faux : Elle survient surtout pendant la grossesse ou en cas de fibrome volumineux.\n\nD est faux : Le traitement est médical (antalgiques, AINS) en première intention, la chirurgie est rarement nécessaire en urgence.\n\nE est faux : Elle est très douloureuse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-24",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernent la classification FIGO des fibromes utérins sont exactes, SAUF :",
    "options": [
      "Le type 0 est un fibrome sous-muqueux pédiculé intra-cavitaire.",
      "Le type 3 est un fibrome intra-mural au contact de l'endomètre.",
      "Le type 4 est un fibrome sous-séreux avec plus de 50% intra-mural.",
      "Le type 6 est un fibrome sous-séreux avec moins de 50% intra-mural.",
      "Le type 8 correspond à des lésions parasites (ligament rond, col)."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le type 4 est un fibrome intra-mural strict. Le type 5 est sous-séreux avec plus de 50% intra-mural.\n\nA, B, D, E sont exactes : Type 0 (A), Type 3 (B), Type 6 (D), Type 8 (E) sont conformes à la classification.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-25",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Quels sont les signes échographiques typiques d'un fibrome utérin ?",
    "options": [
      "Masse hypoéchogène, homogène, bien limitée",
      "Calcifications possibles",
      "Atténuation postérieure du son",
      "Aspect kystique pur",
      "Vascularisation périphérique au Doppler"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Le fibrome apparaît comme une masse hypoéchogène, homogène, bien limitée (A), avec parfois des calcifications (B), une atténuation postérieure (C) et une vascularisation périphérique au Doppler (E).\n\nD est faux : Le fibrome est solide, pas kystique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-26",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme B., 45 ans, G3P3, consulte aux urgences gynécologiques du CHU de Bab El Oued pour une douleur pelvienne aiguë intense, apparue brutalement il y a 6 heures, associée à des nausées et vomissements. Elle est apyrétique. L'examen retrouve une défense abdominale, un utérus augmenté de taille avec une masse latéro-utérine sensible. L'échographie révèle un fibrome sous-séreux pédiculé de 8 cm, avec un aspect hétérogène et une absence de flux au Doppler.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Nécrobiose aseptique du fibrome",
      "Torsion d'un fibrome pédiculé",
      "Grossesse extra-utérine",
      "Kyste ovarien hémorragique",
      "Appendicite aiguë"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur aiguë + absence de flux au Doppler + masse pédiculée = torsion. C'est une urgence chirurgicale.\n\nA est faux : La nécrobiose donne une douleur plus progressive et un syndrome inflammatoire.\n\nC est faux : L'échographie a visualisé un fibrome, pas une GEU.\n\nD est faux : La masse est utérine (fibrome), pas ovarienne.\n\nE est faux : La clinique est gynécologique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-27",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme B., 45 ans, G3P3, consulte aux urgences gynécologiques du CHU de Bab El Oued pour une douleur pelvienne aiguë intense, apparue brutalement il y a 6 heures, associée à des nausées et vomissements. Elle est apyrétique. L'examen retrouve une défense abdominale, un utérus augmenté de taille avec une masse latéro-utérine sensible. L'échographie révèle un fibrome sous-séreux pédiculé de 8 cm, avec un aspect hétérogène et une absence de flux au Doppler.\n\nQuestion : Quelle est la prise en charge thérapeutique immédiate ?",
    "options": [
      "Antalgiques et surveillance simple",
      "Laparoscopie ou laparotomie pour détorsion et myomectomie",
      "Embolisation des artères utérines en urgence",
      "Hystérectomie totale en urgence",
      "Traitement par analogues de la GnRH"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La torsion est une urgence chirurgicale. La détorsion et la myomectomie sont indiquées pour préserver l'utérus.\n\nA est faux : Risque de nécrose et de péritonite.\n\nC est faux : Pas de place en urgence pour une torsion.\n\nD est faux : L'hystérectomie est trop radicale, la myomectomie est préférée.\n\nE est faux : Délai d'action trop long.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-28",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme K., 38 ans, nullipare, consulte à l'EPH de la ville pour des ménorragies évoluant depuis 1 an, responsables d'une anémie ferriprive (Hb à 8 g/dL). Elle désire une grossesse. L'échographie pelvienne montre un utérus augmenté de taille avec un fibrome sous-muqueux de 3 cm, classé FIGO 2.\n\nQuestion : Quel est le traitement le plus adapté pour cette patiente ?",
    "options": [
      "Hystérectomie totale",
      "Résection hystéroscopique du fibrome + supplémentation en fer",
      "Embolisation des artères utérines",
      "Myomectomie par laparotomie",
      "Traitement par ulipristal en continu"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La résection hystéroscopique est le traitement de choix pour les fibromes sous-muqueux (FIGO 1 et 2) symptomatiques avec désir de grossesse. Elle est mini-invasive et conservatrice. La supplémentation en fer est nécessaire pour corriger l'anémie.\n\nA est faux : Radical, incompatible avec le désir de grossesse.\n\nC est faux : L'embolisation n'est pas recommandée pour les fibromes sous-muqueux et peut compromettre la fertilité.\n\nD est faux : La myomectomie par laparotomie est réservée aux fibromes intra-muraux ou sous-séreux.\n\nE est faux : L'ulipristal est un traitement suspensif, pas définitif, et ne traite pas l'anémie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-29",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme D., 32 ans, consulte pour infertilité primaire de 2 ans. Elle présente des cycles réguliers. L'échographie révèle un fibrome intra-mural de 5 cm (FIGO 4). Le bilan hormonal est normal. Le spermogramme du conjoint est normal. Le couple est candidat à une FIV.\n\nQuestion : Quel est l'impact de ce fibrome sur la fertilité ?",
    "options": [
      "Il est probablement sans effet sur la fertilité car il est intra-mural.",
      "Il peut altérer l'implantation et augmenter le risque de fausse couche.",
      "Il empêche mécaniquement le passage des spermatozoïdes.",
      "Il provoque une anovulation.",
      "Il est une indication absolue d'hystérectomie."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les fibromes intra-muraux (FIGO 4) peuvent altérer la vascularisation de l'endomètre et la réceptivité utérine, augmentant le risque de fausses couches et d'échec d'implantation.\n\nA est faux : Les fibromes intra-muraux peuvent avoir un impact.\n\nC est faux : L'obstruction est tubaire, pas utérine.\n\nD est faux : Les fibromes n'affectent pas l'ovulation.\n\nE est faux : L'hystérectomie est une contre-indication à la grossesse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-30",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme D., 32 ans, consulte pour infertilité primaire de 2 ans. Elle présente des cycles réguliers. L'échographie révèle un fibrome intra-mural de 5 cm (FIGO 4). Le bilan hormonal est normal. Le spermogramme du conjoint est normal. Le couple est candidat à une FIV.\n\nQuestion : Quelle est la meilleure option thérapeutique avant la FIV ?",
    "options": [
      "Myomectomie par cœlioscopie ou laparotomie",
      "Hystérectomie",
      "Embolisation des artères utérines",
      "Traitement par analogues de la GnRH",
      "Abstention thérapeutique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La myomectomie est indiquée pour les fibromes intra-muraux symptomatiques (infertilité) de plus de 4-5 cm, avant une FIV, pour améliorer les chances d'implantation. Le choix de la voie d'abord dépend de la taille et de la localisation.\n\nB est faux : Incompatible avec le désir de grossesse.\n\nC est faux : L'embolisation peut compromettre la fertilité.\n\nD est faux : Les analogues de la GnRH ne sont pas un traitement curatif.\n\nE est faux : Le fibrome est probablement responsable de l'infertilité, il faut le retirer.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-31",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme L., 29 ans, enceinte à 22 SA, consulte pour des douleurs abdominales aiguës, une fièvre à 38,5°C et une sensibilité utérine. L'échographie montre un fibrome de 10 cm en nécrobiose. La patiente est à jeun et présente des vomissements.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Chorioamniotite",
      "Nécrobiose aseptique du fibrome",
      "Torsion d'un fibrome",
      "Appendicite aiguë",
      "Menace d'accouchement prématuré"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade douleur + fièvre + fibrome connu = nécrobiose aseptique. La fièvre est due à la réaction inflammatoire, pas à une infection.\n\nA est faux : La chorioamniotite donne une fièvre maternelle, mais l'échographie montre le fibrome.\n\nC est faux : La douleur est aiguë, mais pas de signe de torsion spécifique.\n\nD est faux : L'appendicite est possible mais moins probable vu le contexte.\n\nE est faux : La nécrobiose peut déclencher des contractions, mais le diagnostic principal est la nécrobiose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-32",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme L., 29 ans, enceinte à 22 SA, consulte pour des douleurs abdominales aiguës, une fièvre à 38,5°C et une sensibilité utérine. L'échographie montre un fibrome de 10 cm en nécrobiose. La patiente est à jeun et présente des vomissements.\n\nQuestion : Quelle est la prise en charge thérapeutique ?",
    "options": [
      "Antalgiques, AINS et surveillance",
      "Chirurgie en urgence",
      "Antibiotiques",
      "Hystérectomie",
      "Embolisation"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le traitement de la nécrobiose aseptique est médical : antalgiques (paracétamol), AINS (attention au 3ème trimestre), et surveillance. La chirurgie est rarement nécessaire.\n\nB est faux : Risque de fausse couche.\n\nC est faux : Pas d'infection.\n\nD est faux : Incompatible avec la grossesse.\n\nE est faux : Non indiquée en urgence.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-33",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme F., 60 ans, ménopausée depuis 8 ans, consulte pour des métrorragies. L'examen retrouve un utérus augmenté de taille. L'échographie montre un fibrome intra-mural de 3 cm et un endomètre épaissi à 12 mm.\n\nQuestion : Quel est le diagnostic différentiel prioritaire ?",
    "options": [
      "Fibrome en nécrobiose",
      "Cancer de l'endomètre",
      "Adénomyose",
      "Kyste ovarien",
      "Polype endométrial"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Devant des métrorragies chez une femme ménopausée, il faut éliminer un cancer de l'endomètre. L'épaississement de l'endomètre à 12 mm est suspect et nécessite une biopsie.\n\nA est faux : Le fibrome ne donne pas de métrorragies chez la ménopausée.\n\nC est faux : L'adénomyose régresse après la ménopause.\n\nD est faux : Le kyste ovarien ne cause pas de métrorragies.\n\nE est faux : Le polype est possible mais le cancer est prioritaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-34",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Vignette Clinique]\nVignette Clinique\n\nMme F., 60 ans, ménopausée depuis 8 ans, consulte pour des métrorragies. L'examen retrouve un utérus augmenté de taille. L'échographie montre un fibrome intra-mural de 3 cm et un endomètre épaissi à 12 mm.\n\nQuestion : Quel est l'examen complémentaire indispensable ?",
    "options": [
      "IRM pelvienne",
      "Hystéroscopie avec biopsie d'endomètre",
      "Échographie de contrôle à 6 mois",
      "Dosage des marqueurs tumoraux",
      "Frottis cervico-utérin"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hystéroscopie avec biopsie est l'examen de choix pour explorer un épaississement endométrial chez une femme ménopausée et éliminer un cancer.\n\nA est faux : Utile mais ne remplace pas la biopsie.\n\nC est faux : Retard diagnostique inacceptable.\n\nD est faux : Pas de marqueur spécifique.\n\nE est faux : Le frottis ne détecte pas le cancer de l'endomètre.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-1",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant les délais d'exploration d'une infertilité, quelle proposition est exacte ?",
    "options": [
      "Chez une femme de 33 ans sans facteur de risque, l'exploration débute après 6 mois de rapports non protégés.",
      "Chez une femme de 36 ans, l'exploration peut débuter après 6 mois de rapports non protégés.",
      "Chez une femme de 41 ans, il est recommandé d'attendre 12 mois avant toute exploration.",
      "L'exploration ne doit jamais débuter avant 12 mois, quel que soit l'âge.",
      "Un antécédent de grossesse extra-utérine ne justifie pas une exploration précoce."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Raisonnement. Le seuil de 12 mois ne s'applique qu'à la femme de moins de 35 ans sans facteur de risque. À partir de 35 ans, le délai est ramené à 6 mois, car la réserve ovarienne et la qualité ovocytaire déclinent de manière accélérée : attendre 12 mois ferait perdre un temps thérapeutique précieux.\n\n33 ans sans facteur de risque : le délai reste de 12 mois. L'exploration à 6 mois n'est pas indiquée.\n\n36 ans : le seuil de 6 mois est correctement appliqué.\n\n41 ans : plus l'âge avance, plus l'exploration doit être précoce, voire immédiate. Attendre 12 mois est une erreur pronostique majeure.\n\n« Jamais avant 12 mois » : contredit les situations de facteur de risque connu, où l'exploration est immédiate quel que soit l'âge.\n\nAntécédent de GEU : c'est précisément un facteur de risque tubaire justifiant une exploration précoce, sans attendre 12 mois.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-2",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Quelles propositions concernant la physiologie reproductive sont exactes ? (2 à 3 réponses)",
    "options": [
      "La GnRH est sécrétée de façon pulsatile par l'hypothalamus.",
      "Chez l'homme, la FSH agit principalement sur les cellules de Leydig.",
      "Chez la femme, la LH participe à l'ovulation et à la formation du corps jaune.",
      "La progestérone est sécrétée par les cellules de la granulosa dès la phase folliculaire précoce.",
      "La testostérone est produite par les cellules de Sertoli sous l'effet de la FSH."
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Mécanisme clé. L'axe reproducteur est un système pulsatile hiérarchisé : hypothalamus (GnRH) → hypophyse antérieure (FSH/LH) → gonades. La pulsatilité de la GnRH est indispensable : une sécrétion continue bloque l'axe (principe des agonistes de la GnRH en AMP).\n\nLa GnRH est bien pulsatile : c'est la signature hypothalamique de l'axe.\n\nLa FSH agit sur les cellules de Sertoli (spermatogenèse), tandis que la LH stimule les cellules de Leydig (testostérone). L'item inverse les deux cibles.\n\nLa LH déclenche l'ovulation et lutéinise le follicule pour former le corps jaune.\n\nLa progestérone est produite massivement par le corps jaune en phase lutéale, pas dès la phase folliculaire précoce.\n\nLa testostérone est produite par les cellules de Leydig sous l'effet de la LH, et non par les cellules de Sertoli.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-3",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Choisissez la réponse juste.",
    "options": [
      "La fenêtre fertile correspond approximativement aux 5 jours précédant l'ovulation et au jour de l'ovulation.",
      "L'ovulation survient exactement 14 jours après le début des règles.",
      "La spermatogenèse se déroule dans l'épididyme.",
      "La maturation épididymaire précède chronologiquement la spermatogenèse.",
      "Des rapports quotidiens strictement programmés sont recommandés pour optimiser la fertilité."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Logique physiologique. Les spermatozoïdes survivent environ 3 à 5 jours dans le tractus génital féminin, alors que l'ovocyte n'est fécondable que 12 à 24 heures. La fenêtre fécondante se situe donc avant l'ovulation, ce qui explique l'intérêt de rapports tous les 2 à 3 jours plutôt qu'une programmation rigide.\n\nLa fenêtre fertile est bien définie par les 5 jours pré-ovulatoires et le jour de l'ovulation.\n\nL'ovulation survient environ 14 jours avant les règles suivantes, et non après le début du cycle : cette règle ne s'applique qu'aux cycles de 28 jours.\n\nLa spermatogenèse se déroule dans les tubes séminifères testiculaires.\n\nLa maturation épididymaire est postérieure à la spermatogenèse ; elle la suit.\n\nLes rapports quotidiens programmés sont contraignants et non recommandés ; l'intervalle de 2 à 3 jours est privilégié.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-4",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Quelle proposition est exacte ?",
    "options": [
      "La fécondation se déroule habituellement dans la cavité utérine.",
      "La fécondation se déroule habituellement dans l'ampoule tubaire.",
      "L'implantation survient indifféremment dans l'endomètre ou dans la trompe.",
      "Une anomalie de la cavité utérine n'affecte pas l'implantation embryonnaire.",
      "Le transport tubaire est indépendant de la perméabilité tubaire."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Rappel anatomique. La rencontre des gamètes se fait dans l'ampoule tubaire, segment dilaté de la trompe. L'embryon migre ensuite vers la cavité utérine grâce au péristaltisme tubaire et aux cils ; une altération de ce transport favorise la grossesse extra-utérine.\n\nLa cavité utérine est le lieu de l'implantation, pas de la fécondation.\n\nL'ampoule tubaire est bien le site physiologique de la fécondation.\n\nL'implantation ectopique est pathologique ; elle ne constitue pas une alternative normale.\n\nUne anomalie utérine (polype, fibrome sous-muqueux, synéchie, malformation) peut compromettre l'implantation.\n\nLe transport tubaire dépend étroitement de la perméabilité et de l'intégrité ciliaire tubaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-5",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Choisissez la réponse fausse.",
    "options": [
      "La varicocèle est recherchée en position debout et lors de la manœuvre de Valsalva.",
      "L'examen apprécie le volume et la consistance des testicules.",
      "La palpation des canaux déférents fait partie de l'examen.",
      "Une azoospermie peut justifier un avis spécialisé en andrologie ou urologie reproductive.",
      "La varicocèle doit être traitée chirurgicalement chez tout homme infertile."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Nuance capitale. La varicocèle est fréquente et souvent asymptomatique ; son traitement n'est pas systématique. Il se discute au cas par cas, chez des hommes sélectionnés (varicocèle palpable, paramètres spermatiques anormaux, après avis spécialisé), car le bénéfice sur la fertilité n'est pas démontré dans toutes les situations.\n\nLa recherche en position debout avec Valsalva est la technique de référence.\n\nLe volume et la consistance testiculaires renseignent sur la fonction endocrine et exocrine.\n\nLa palpation des canaux déférents recherche une agénésie ou une obstruction.\n\nL'azoospermie est une urgence andrologique relative : avis spécialisé rapide.\n\nLe traitement systématique de toute varicocèle est une erreur : décision individualisée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-6",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Quels éléments doivent être recherchés à l'interrogatoire de l'homme infertile ? (2 à 3 réponses)",
    "options": [
      "Antécédent de cryptorchidie.",
      "Antécédent de torsion testiculaire.",
      "Prise de testostérone exogène ou de stéroïdes anabolisants.",
      "Antécédent de cholécystectomie.",
      "Antécédent de thyroïdectomie totale pour carcinome papillaire."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Fil conducteur. Tout ce qui altère la spermatogenèse — testicule, voie excrétrice, axe hormonal — doit être recherché. La testostérone exogène est un piège classique : elle supprime la sécrétion de gonadotrophines par rétrocontrôle négatif, entraînant une oligospermie voire une azoospermie.\n\nLa cryptorchidie est une cause majeure de trouble de la spermatogenèse, surtout si non traitée tôt.\n\nLa torsion testiculaire peut laisser des séquelles ischémiques définitives.\n\nLes stéroïdes anabolisants et la testostérone exogène inhibent l'axe gonadotrope.\n\nLa cholécystectomie n'a pas de retentissement reproductif masculin connu.\n\nLa thyroïdectomie pour carcinome papillaire n'est pas un facteur d'infertilité masculine classique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-7",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'interrogatoire de la femme infertile sont exactes, SAUF :",
    "options": [
      "Rechercher l'âge de la ménarche et la régularité des cycles.",
      "Rechercher des signes d'hyperandrogénie (hirsutisme, acné, alopécie).",
      "Rechercher des antécédents d'IST, de MIP et de GEU.",
      "Rechercher des antécédents familiaux de ménopause précoce.",
      "Considérer que l'interrogatoire de la femme suffit à évaluer le couple infertile."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Principe fondateur. L'infertilité est une problématique du couple. Un interrogatoire féminin complet ne dispense jamais de l'évaluation masculine (interrogatoire + examen + spermogramme) réalisée simultanément.\n\nL'histoire menstruelle est le premier reflet de la fonction ovulatoire.\n\nL'hyperandrogénie oriente vers un SOPK ou une cause surrénalienne/ovarienne.\n\nLes antécédents d'IST/MIP/GEU orientent vers une cause tubaire.\n\nLa ménopause précoce familiale évoque une insuffisance ovarienne prématurée.\n\nSe limiter à la femme est une erreur grave : elle méconnaît une cause masculine dans près d'un tiers des cas.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-8",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Quelles sont des causes tubaires ou péritonéales d'infertilité féminine ? (2 à 3 réponses)",
    "options": [
      "Hydrosalpinx.",
      "Séquelles d'infection génitale haute.",
      "Synéchies intra-utérines.",
      "Endométriose avec adhérences pelviennes.",
      "Insuffisance ovarienne prématurée."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Classification à connaître. Les causes féminines se répartissent en troubles ovulatoires, causes tubo-péritonéales et causes utérines. L'hydrosalpinx, les séquelles de MIP et l'endométriose avec adhérences appartiennent au compartiment tubo-péritonéal.\n\nL'hydrosalpinx obstrue la trompe et le liquide intratubaire est embryotoxique.\n\nLes séquelles d'IGHA (MIP) créent des adhérences et détruisent l'épithélium ciliaire.\n\nLes synéchies sont des causes utérines (cavité), pas tubaires.\n\nL'endométriose agit par inflammation, adhérences et distorsion anatomique.\n\nL'insuffisance ovarienne prématurée est une cause ovulatoire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-9",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Quelle proposition est exacte ?",
    "options": [
      "L'oligozoospermie correspond à une diminution de la mobilité des spermatozoïdes.",
      "L'asthénozoospermie correspond à une diminution de la concentration spermatique.",
      "La tératozoospermie correspond à une proportion accrue de spermatozoïdes de morphologie anormale.",
      "L'azoospermie correspond à un volume d'éjaculat nul.",
      "Un spermogramme anormal isolé établit toujours un diagnostic définitif."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Vocabulaire à ne pas confondre. Chaque terme cible un paramètre précis : concentration (oligo-), mobilité (asthéno-), morphologie (térato-), absence (azoospermie). Un contrôle est souvent nécessaire en raison de la variabilité biologique.\n\nL'oligozoospermie concerne la concentration, pas la mobilité.\n\nL'asthénozoospermie concerne la mobilité, pas la concentration.\n\nLa tératozoospermie désigne une morphologie anormale excessive.\n\nL'azoospermie est l'absence de spermatozoïdes dans l'éjaculat, pas un volume nul (qui correspond à une aspermie).\n\nUn spermogramme anormal isolé n'est pas définitif : il faut contrôler et interpréter selon le contexte.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-10",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Choisissez la réponse juste.",
    "options": [
      "Des cycles réguliers de 21 à 35 jours sont généralement compatibles avec une ovulation.",
      "La progestérone doit toujours être dosée à J21 fixe chez toutes les patientes.",
      "L'AMH prédit à elle seule la survenue d'une grossesse spontanée.",
      "Le compte des follicules antraux n'a aucune valeur pour prédire la réponse à la stimulation.",
      "L'AMH doit être interprétée indépendamment de l'âge."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Message-clé du cours. Des cycles réguliers de 21 à 35 jours sont un excellent argument clinique en faveur d'une ovulation. La confirmation biologique n'est pas systématique ; lorsqu'elle est utile, la progestérone se dose environ 7 jours avant la date présumée des règles, et non à un jour fixe.\n\nLa régularité menstruelle est un bon marqueur indirect d'ovulation.\n\nLe dosage à J21 fixe est incorrect : il dépend de la durée du cycle.\n\nL'AMH évalue la réserve ovarienne, pas la fertilité spontanée.\n\nLe compte des follicules antraux est justement prédictif de la réponse à la stimulation.\n\nL'AMH doit toujours être interprétée avec l'âge de la patiente.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-11",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Quels examens ne sont pas recommandés en routine dans le bilan initial d'infertilité ? (2 à 3 réponses)",
    "options": [
      "La cœlioscopie diagnostique systématique.",
      "Les tests post-coïtaux.",
      "Le spermogramme en première intention.",
      "Les tests immunologiques et thrombophiliques systématiques.",
      "L'hystérosalpingographie lorsqu'elle est indiquée."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Principe de parcimonie. Le bilan doit répondre à une question clinique précise. Les examens invasifs, coûteux ou sans impact thérapeutique démontré ne doivent pas être prescrits en première intention.\n\nLa cœlioscopie n'est pas systématique : elle se discute dans des situations ciblées.\n\nLes tests post-coïtaux ont été abandonnés en routine.\n\nLe spermogramme est au contraire un examen fondamental du bilan initial.\n\nLes tests immunologiques et thrombophiliques systématiques ne sont pas recommandés.\n\nL'HSG est recommandée lorsqu'elle est indiquée pour évaluer la perméabilité tubaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-12",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Quelle proposition est exacte ?",
    "options": [
      "La varicocèle est une dilatation des veines du plexus pampiniforme.",
      "Son traitement est systématique chez tout homme infertile.",
      "Elle est recherchée uniquement en position couchée.",
      "Elle n'a jamais d'impact sur les paramètres spermatiques.",
      "Elle contre-indique formellement toute AMP."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Définition. La varicocèle est une dilatation veineuse du plexus pampiniforme, prédominant à gauche du fait de l'anatomie de la veine spermatique. Elle peut élever la température scrotale et altérer la spermatogenèse, mais son traitement n'est pas systématique.\n\nLa définition anatomique est correcte.\n\nLe traitement est individualisé, pas systématique.\n\nLa recherche se fait debout, avec manœuvre de Valsalva.\n\nElle peut altérer les paramètres spermatiques (oligospermie, asthénospermie).\n\nElle ne contre-indique pas l'AMP.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-13",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Choisissez la réponse fausse.",
    "options": [
      "L'arrêt du tabac est recommandé.",
      "Une supplémentation préconceptionnelle en acide folique est recommandée chez la femme.",
      "La testostérone exogène peut être prescrite chez un homme souhaitant concevoir.",
      "Le létrozole est généralement recommandé en première intention dans le SOPK anovulatoire.",
      "Les gonadotrophines nécessitent une surveillance en raison du risque d'hyperstimulation ovarienne."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Piège classique. La testostérone exogène est proscrite chez l'homme souhaitant concevoir : elle exerce un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire, supprimant FSH et LH, et peut entraîner une oligospermie sévère voire une azoospermie.\n\nLe tabac altère la fertilité des deux partenaires.\n\nL'acide folique préconceptionnel réduit le risque d'anomalies du tube neural.\n\nLa testostérone exogène est délétère pour la spermatogenèse.\n\nLe létrozole est le traitement de première intention du SOPK anovulatoire.\n\nLes gonadotrophines exposent au risque d'hyperstimulation et de grossesse multiple.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-14",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Quelles propositions concernant l'AMP sont exactes ? (2 à 3 réponses)",
    "options": [
      "L'IIU nécessite une perméabilité tubaire suffisante.",
      "L'ICSI consiste à injecter un spermatozoïde dans le cytoplasme d'un ovocyte mature.",
      "L'ICSI est systématiquement supérieure à la FIV conventionnelle dans toutes les situations.",
      "La FIV peut être indiquée en cas d'atteinte tubaire importante.",
      "La cryoconservation des spermatozoïdes est formellement interdite avant chimiothérapie."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Logique des techniques. L'IIU suppose que les gamètes puissent se rencontrer dans la trompe : elle exige donc des trompes perméables. La FIV court-circuite la trompe, d'où son indication dans les atteintes tubaires. L'ICSI est réservée aux infertilités masculines sévères ou aux échecs de fécondation.\n\nL'IIU dépose les spermatozoïdes dans l'utérus ; la trompe doit être fonctionnelle.\n\nL'ICSI est bien une micro-injection intra-cytoplasmique.\n\nL'ICSI n'est pas systématiquement supérieure à la FIV : elle est indiquée dans des situations précises.\n\nLa FIV est une option de choix en cas d'atteinte tubaire bilatérale sévère.\n\nLa cryoconservation est au contraire recommandée avant traitement gonadotoxique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-15",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes sont exactes concernant l'endométriose, SAUF :",
    "options": [
      "Elle peut altérer la fertilité par inflammation et adhérences.",
      "La stratégie thérapeutique tient compte de l'âge et de la réserve ovarienne.",
      "La chirurgie ovarienne répétée peut diminuer la réserve ovarienne.",
      "La chirurgie est systématiquement indiquée dans le seul but d'améliorer la fertilité.",
      "L'atteinte ovarienne (endométriome) peut compromettre la fonction ovarienne."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Nuance chirurgicale. La chirurgie n'est pas systématique dans le seul but d'améliorer la fertilité, surtout lorsqu'elle risque d'altérer la réserve ovarienne. La décision est individualisée : douleur, âge, atteinte anatomique, réserve ovarienne et projet reproductif.\n\nL'inflammation et les adhérences sont des mécanismes reconnus.\n\nL'âge et la réserve ovarienne sont centraux dans la décision.\n\nLa chirurgie ovarienne répétée réduit la réserve folliculaire.\n\nLa chirurgie systématique est une erreur : elle peut être délétère.\n\nL'endométriome peut altérer la fonction ovarienne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-16",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Quelles sont des causes d'infertilité masculine ? (2 à 3 réponses)",
    "options": [
      "Cryptorchidie.",
      "Orchite (notamment ourlienne).",
      "Obstruction des voies spermatiques.",
      "Insuffisance ovarienne prématurée.",
      "Antécédent de grossesse extra-utérine chez la partenaire."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Trois grands mécanismes masculins. Atteinte testiculaire (cryptorchidie, orchite), obstruction des voies excrétrices, et causes endocriniennes ou médicamenteuses. Les deux dernières propositions relèvent de la sphère féminine.\n\nLa cryptorchidie altère la spermatogenèse par hyperthermie testiculaire.\n\nL'orchite ourlienne peut détruire l'épithélium séminifère.\n\nL'obstruction (épididymaire, déférentielle) empêche l'émission des spermatozoïdes.\n\nL'insuffisance ovarienne prématurée concerne la femme.\n\nLa GEU est une cause féminine (tubaire).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-17",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Choisissez la réponse juste.",
    "options": [
      "Le diagnostic d'infertilité inexpliquée repose sur un bilan standard normal.",
      "L'infertilité inexpliquée signifie qu'aucune cause biologique ne peut exister.",
      "L'infertilité inexpliquée dispense d'une exploration tubaire.",
      "L'infertilité mixte est définie par une cause identifiée chez un seul partenaire.",
      "L'infertilité inexpliquée autorise à omettre le spermogramme."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Définition d'exclusion. L'infertilité inexpliquée est retenue après un bilan standard normal : ovulation compatible, trompes perméables, spermogramme sans anomalie significative. Elle ne signifie pas que tous les mécanismes ont été explorés.\n\nC'est bien un diagnostic d'exclusion.\n\nElle n'exclut pas l'existence de causes non encore accessibles aux examens.\n\nL'exploration tubaire est indispensable avant de conclure.\n\nL'infertilité mixte suppose des facteurs chez les deux partenaires.\n\nLe spermogramme est obligatoire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-18",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Quelle proposition est exacte ?",
    "options": [
      "L'HSG permet d'évaluer la perméabilité tubaire et de visualiser la cavité utérine.",
      "La cœlioscopie est un examen systématique du bilan initial.",
      "L'hystéroscopie n'a aucune place dans le bilan.",
      "L'échographie avec contraste est formellement contre-indiquée.",
      "L'HSG est contre-indiquée chez toute femme de plus de 35 ans."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Outil de première ligne. L'HSG est l'examen de référence pour évaluer la perméabilité tubaire et dépister certaines anomalies de la cavité utérine. L'échographie avec contraste est une alternative lorsqu'elle est disponible.\n\nL'HSG est bien l'examen de première intention pour les trompes.\n\nLa cœlioscopie n'est pas systématique.\n\nL'hystéroscopie est indiquée dans certaines anomalies de la cavité utérine.\n\nL'échographie avec contraste n'est pas contre-indiquée ; elle est une alternative.\n\nAucune limite d'âge n'interdit l'HSG.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-19",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Quelles mesures générales sont recommandées devant une infertilité ? (2 à 3 réponses)",
    "options": [
      "Arrêt du tabac.",
      "Correction d'une dénutrition ou d'un excès pondéral important.",
      "Prescription systématique d'antioxydants chez tous les couples.",
      "Optimisation des rapports pendant la période fertile.",
      "Prescription systématique de testostérone chez l'homme infertile."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Hygiène de vie et fertilité. Les mesures générales ont un impact démontré et peu coûteux : tabac, poids, alimentation, activité physique, prévention des IST, et information sur la période fertile.\n\nLe tabac est gonadotoxique chez les deux partenaires.\n\nLes troubles du poids altèrent l'ovulation et la spermatogenèse.\n\nLes antioxydants ne sont pas recommandés systématiquement, faute de preuve.\n\nLa connaissance de la fenêtre fertile améliore les chances de conception.\n\nLa testostérone exogène est délétère pour la spermatogenèse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-20",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Choisissez la réponse fausse.",
    "options": [
      "Les recommandations OMS 2025 proposent un cadre global pour la prévention, le diagnostic et le traitement de l'infertilité.",
      "L'individualisation des stimulations ovariennes est recommandée.",
      "Le transfert électif d'un embryon unique peut réduire les risques maternels.",
      "Les tests de réceptivité endométriale doivent être proposés de manière systématique.",
      "Les recommandations AUA/ASRM 2024 renforcent la place de l'andrologie."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Principe de preuve. Les tests de réceptivité endométriale, les tests immunologiques et les tests spermatiques avancés ne doivent pas être proposés systématiquement : ils relèvent d'indications précises et de preuves suffisantes de bénéfice clinique.\n\nLes recommandations OMS 2025 constituent un cadre global.\n\nL'individualisation des protocoles est un principe actuel majeur.\n\nLe transfert électif d'un embryon réduit les grossesses multiples.\n\nLa systématisation des tests de réceptivité est non recommandée.\n\nL'andrologie occupe une place croissante dans les recommandations.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-21",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Quelle proposition est exacte concernant la prise en charge du SOPK anovulatoire ?",
    "options": [
      "Le létrozole est généralement recommandé en première intention en l'absence d'autre facteur d'infertilité.",
      "Les gonadotrophines sont le traitement de première intention et ne nécessitent pas de surveillance.",
      "Le létrozole augmente fortement le risque d'hyperstimulation ovarienne sévère.",
      "La metformine est le traitement de première intention chez toutes les patientes.",
      "Le clomifène est formellement contre-indiqué dans le SOPK."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Hiérarchie thérapeutique. Dans le SOPK anovulatoire sans autre facteur, le létrozole est le traitement d'induction de première intention. Les gonadotrophines viennent en seconde ligne et nécessitent une surveillance stricte.\n\nLe létrozole est bien le traitement de première intention recommandé.\n\nLes gonadotrophines ne sont pas de première intention et exigent une surveillance.\n\nLe létrozole a un risque d'hyperstimulation plus faible que les gonadotrophines.\n\nLa metformine n'est pas le traitement de première intention de toutes les patientes.\n\nLe clomifène n'est pas formellement contre-indiqué, mais n'est plus le premier choix.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-22",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Quelles propositions sont exactes concernant l'évaluation de l'ovulation ? (2 à 3 réponses)",
    "options": [
      "Des cycles réguliers de 21 à 35 jours sont généralement compatibles avec une ovulation.",
      "En cas de doute, la progestérone peut être dosée environ 7 jours avant la date présumée des règles.",
      "En cas d'aménorrhée, les examens sont orientés par le contexte : test de grossesse, FSH, TSH, prolactine.",
      "La progestérone doit être dosée à J21 fixe chez toutes les patientes.",
      "L'AMH est le seul examen utile pour évaluer l'ovulation."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Adaptation au cycle. La date du dosage de progestérone dépend de la durée du cycle ; le J21 fixe est un dogme dépassé. L'AMH évalue la réserve, pas l'ovulation.\n\nLa régularité des cycles est un bon indice d'ovulation.\n\nLe dosage 7 jours avant les règles présumées est la bonne approche.\n\nDevant une aménorrhée, le bilan est orienté par le contexte.\n\nLe J21 fixe est inadapté aux cycles irréguliers ou longs.\n\nL'AMH ne renseigne pas sur l'ovulation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-23",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Choisissez la réponse juste.",
    "options": [
      "La testostérone exogène peut supprimer la sécrétion de gonadotrophines et altérer la spermatogenèse.",
      "La testostérone exogène améliore la spermatogenèse chez l'homme infertile.",
      "La testostérone est produite par les cellules de Sertoli.",
      "La FSH agit sur les cellules de Leydig.",
      "La spermatogenèse se déroule dans l'épididyme."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Rétrocontrôle négatif. La testostérone exogène inhibe la sécrétion hypothalamo-hypophysaire de GnRH, FSH et LH. Résultat : arrêt de la spermatogenèse. C'est un piège fréquent chez les sportifs utilisant des stéroïdes anabolisants.\n\nL'effet suppressif sur l'axe gonadotrope est bien décrit.\n\nLa testostérone exogène n'améliore pas la spermatogenèse, elle l'inhibe.\n\nLa testostérone est produite par les cellules de Leydig.\n\nLa FSH agit sur les cellules de Sertoli.\n\nLa spermatogenèse se déroule dans les tubes séminifères.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-24",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes sont exactes, SAUF :",
    "options": [
      "L'infertilité peut provoquer anxiété, tristesse et sentiment de culpabilité.",
      "Le médecin doit accueillir la souffrance sans jugement.",
      "Le consentement libre et éclairé des deux partenaires doit être recueilli lorsque nécessaire.",
      "Des promesses irréalistes de grossesse peuvent être faites pour rassurer le couple.",
      "Le coût des traitements doit être pris en considération dans la décision."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Éthique de la parole médicale. Les promesses irréalistes de grossesse sont proscrites : elles nourrissent une fausse espérance, majorent la souffrance en cas d'échec et altèrent la relation de confiance. L'information doit être claire, honnête et proportionnée.\n\nLa souffrance psychologique est réelle et doit être reconnue.\n\nL'accueil sans jugement est une obligation déontologique.\n\nLe consentement éclairé des deux partenaires est requis.\n\nLes promesses irréalistes sont une faute éthique.\n\nLe coût et l'accès aux soins font partie de la décision.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-25",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Quelle proposition est exacte concernant la démarche diagnostique devant un couple infertile ?",
    "options": [
      "L'exploration doit débuter par la femme uniquement.",
      "Les deux partenaires doivent être explorés simultanément.",
      "Le spermogramme ne fait pas partie du bilan initial.",
      "La cœlioscopie est l'examen de première intention.",
      "Le bilan complémentaire ne dépend pas des résultats initiaux."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Message pédagogique essentiel. L'infertilité est une problématique du couple : les deux partenaires doivent être évalués simultanément, avec une prise en charge individualisée et respectueuse.\n\nCommencer par la femme seule fait perdre du temps et méconnaît une cause masculine.\n\nL'exploration simultanée est le standard de pratique.\n\nLe spermogramme est un examen fondamental du bilan initial.\n\nLa cœlioscopie n'est pas un examen de première intention.\n\nLe bilan complémentaire est guidé par les résultats initiaux.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-26",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique N°1]\nMotif :Couple consultE pour infertilité primaire depuis 18 mois.\n\nFemme :Mme K., 29 ans, mariée depuis 2 ans. Cycles irréguliers depuis l'adolescence (35–50 jours), pas d'aménorrhée. Poids 84 kg, taille 1,62 m. Hirsutisme modéré (score de Ferriman-Gallwey à 12), acné persistante. Pas d'antécédent chirurgical. Pas de dysménorrhée.\n\nHomme :M. K., 32 ans, sans antécédent particulier. Spermogramme : concentration 48 millions/mL, mobilité progressive 45 %, morphologie normale 6 %. Examen clinique normal.\n\nBiologie :TSH normale, prolactine normale, testostérone totale discrètement élevée, progestérone en phase lutéale basse.\n\nIMC 32 kg/m²\nCycles 35–50 j\nSpermogramme normal\nTSH & prolactine normales\n\nQuestion : Quel est le diagnostic le plus probable chez Mme K. ?",
    "options": [
      "Insuffisance ovarienne prématurée.",
      "Syndrome des ovaires polykystiques.",
      "Hyperprolactinémie.",
      "Insuffisance hypothalamo-hypophysaire.",
      "Endométriose profonde."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Association de cycles irréguliers, hyperandrogénie clinique et biologique, obésité et progestérone lutéale basse : tableau typique de SOPK (critères de Rotterdam).\n\nL'IOP survient généralement avant 40 ans avec FSH élevée et aménorrhée : non compatible.\n\nLe SOPK associe anovulation chronique, hyperandrogénie et morphologie ovarienne polykystique.\n\nLa prolactine est normale : l'hyperprolactinémie est éliminée.\n\nL'insuffisance hypothalamique donnerait plutôt une aménorrhée avec FSH/LH basses.\n\nL'endométriose ne s'accompagne pas classiquement d'hyperandrogénie ni de cycles longs.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-27",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique N°1]\nMotif :Couple consultE pour infertilité primaire depuis 18 mois.\n\nFemme :Mme K., 29 ans, mariée depuis 2 ans. Cycles irréguliers depuis l'adolescence (35–50 jours), pas d'aménorrhée. Poids 84 kg, taille 1,62 m. Hirsutisme modéré (score de Ferriman-Gallwey à 12), acné persistante. Pas d'antécédent chirurgical. Pas de dysménorrhée.\n\nHomme :M. K., 32 ans, sans antécédent particulier. Spermogramme : concentration 48 millions/mL, mobilité progressive 45 %, morphologie normale 6 %. Examen clinique normal.\n\nBiologie :TSH normale, prolactine normale, testostérone totale discrètement élevée, progestérone en phase lutéale basse.\n\nIMC 32 kg/m²\nCycles 35–50 j\nSpermogramme normal\nTSH & prolactine normales\n\nQuestion : Quel est le traitement de première intention de l'infertilité par anovulation dans ce contexte ?",
    "options": [
      "FIV avec ICSI d'emblée.",
      "Létrozole avec conseils hygiéno-diététiques.",
      "Gonadotrophines sans surveillance.",
      "Chirurgie ovarienne par drilling en première intention.",
      "Testostérone transdermique."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le létrozole est le traitement d'induction de première intention du SOPK anovulatoire, associé à la perte de poids et à l'hygiène de vie.\n\nLa FIV n'est pas indiquée en première intention en l'absence d'autre facteur.\n\nLe létrozole est recommandé en première ligne.\n\nLes gonadotrophines nécessitent une surveillance stricte et ne sont pas de première intention.\n\nLe drilling ovarien est réservé à des situations sélectionnées.\n\nLa testostérone est proscrite chez la femme.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-28",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique N°1]\nMotif :Couple consultE pour infertilité primaire depuis 18 mois.\n\nFemme :Mme K., 29 ans, mariée depuis 2 ans. Cycles irréguliers depuis l'adolescence (35–50 jours), pas d'aménorrhée. Poids 84 kg, taille 1,62 m. Hirsutisme modéré (score de Ferriman-Gallwey à 12), acné persistante. Pas d'antécédent chirurgical. Pas de dysménorrhée.\n\nHomme :M. K., 32 ans, sans antécédent particulier. Spermogramme : concentration 48 millions/mL, mobilité progressive 45 %, morphologie normale 6 %. Examen clinique normal.\n\nBiologie :TSH normale, prolactine normale, testostérone totale discrètement élevée, progestérone en phase lutéale basse.\n\nIMC 32 kg/m²\nCycles 35–50 j\nSpermogramme normal\nTSH & prolactine normales\n\nQuestion : Quel examen complémentaire est le plus utile pour évaluer la réponse ovarienne à une future stimulation ?",
    "options": [
      "AMH et compte des follicules antraux.",
      "Radiographie du bassin.",
      "Dosage de la progestérone à J21 fixe.",
      "Hystérosalpingographie seule.",
      "Test de grossesse."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'AMH et le compte des follicules antraux sont les marqueurs de choix de la réserve ovarienne et de la réponse attendue à la stimulation.\n\nL'AMH et le CFA sont les deux examens clés de la réserve ovarienne.\n\nLa radiographie du bassin n'a aucun intérêt dans ce contexte.\n\nLa progestérone à J21 fixe est inadaptée.\n\nL'HSG évalue les trompes, pas la réserve.\n\nLe test de grossesse est utile en cas d'aménorrhée, pas ici.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-29",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique N°2]\nMotif :Infertilité secondaire depuis 14 mois.\n\nFemme :Mme B., 34 ans, un enfant de 6 ans. Antécédent de grossesse extra-utérine il y a 4 ans traitée par salpingectomie droite. Depuis, douleurs pelviennes chroniques et dyspareunie. Cycles réguliers de 28 jours.\n\nHomme :M. B., 36 ans, spermogramme normal.\n\nImagerie :HSG : trompe droite absente (salpingectomie), trompe gauche non opacifiée avec dilatation et aspect d'hydrosalpinx. Échographie pelvienne : utérus normal, pas de fibrome.\n\nGEU ancienne\nSalpingectomie droite\nHydrosalpinx gauche\nSpermogramme normal\n\nQuestion : Quel est le facteur principal d'infertilité chez ce couple ?",
    "options": [
      "Facteur masculin.",
      "Facteur tubaire bilatéral.",
      "Facteur utérin.",
      "Facteur ovulatoire.",
      "Infertilité inexpliquée."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La salpingectomie droite et l'hydrosalpinx gauche rendent les deux trompes non fonctionnelles : le facteur tubaire est bilatéral.\n\nLe spermogramme est normal : pas de facteur masculin.\n\nLes deux trompes sont inutilisables.\n\nL'utérus est normal à l'échographie.\n\nLes cycles sont réguliers, en faveur d'une ovulation.\n\nUne cause tubaire est clairement identifiée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-30",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique N°2]\nMotif :Infertilité secondaire depuis 14 mois.\n\nFemme :Mme B., 34 ans, un enfant de 6 ans. Antécédent de grossesse extra-utérine il y a 4 ans traitée par salpingectomie droite. Depuis, douleurs pelviennes chroniques et dyspareunie. Cycles réguliers de 28 jours.\n\nHomme :M. B., 36 ans, spermogramme normal.\n\nImagerie :HSG : trompe droite absente (salpingectomie), trompe gauche non opacifiée avec dilatation et aspect d'hydrosalpinx. Échographie pelvienne : utérus normal, pas de fibrome.\n\nGEU ancienne\nSalpingectomie droite\nHydrosalpinx gauche\nSpermogramme normal\n\nQuestion : Quelle est la stratégie thérapeutique la plus adaptée ?",
    "options": [
      "Attendre une grossesse spontanée 12 mois supplémentaires.",
      "Insémination intra-utérine.",
      "Fécondation in vitro.",
      "Létrozole seul.",
      "Traitement antibiotique seul."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "En cas d'atteinte tubaire bilatérale, la FIV court-circuite la trompe et constitue la meilleure option.\n\nAttendre est injustifié : les trompes sont non fonctionnelles.\n\nL'IIU exige une perméabilité tubaire suffisante, ici absente.\n\nLa FIV est le traitement de référence des atteintes tubaires bilatérales.\n\nLe létrozole ne corrige pas le facteur tubaire.\n\nLes antibiotiques ne restaurent pas une trompe détruite.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-31",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique N°2]\nMotif :Infertilité secondaire depuis 14 mois.\n\nFemme :Mme B., 34 ans, un enfant de 6 ans. Antécédent de grossesse extra-utérine il y a 4 ans traitée par salpingectomie droite. Depuis, douleurs pelviennes chroniques et dyspareunie. Cycles réguliers de 28 jours.\n\nHomme :M. B., 36 ans, spermogramme normal.\n\nImagerie :HSG : trompe droite absente (salpingectomie), trompe gauche non opacifiée avec dilatation et aspect d'hydrosalpinx. Échographie pelvienne : utérus normal, pas de fibrome.\n\nGEU ancienne\nSalpingectomie droite\nHydrosalpinx gauche\nSpermogramme normal\n\nQuestion : Quel est l'impact potentiel de l'hydrosalpinx sur les résultats de la FIV ?",
    "options": [
      "Aucun impact démontré.",
      "Il peut réduire les chances d'implantation par effet toxique et mécanique.",
      "Il améliore l'implantation.",
      "Il empêche toute stimulation ovarienne.",
      "Il contre-indique la ponction ovocytaire."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le liquide hydrosalpinx est embryotoxique et peut mécaniquement nuire à l'implantation. Sa prise en charge (salpingectomie ou interruption) peut être discutée avant FIV.\n\nL'impact négatif est bien documenté.\n\nEffet toxique et mécanique sur l'endomètre et l'embryon.\n\nIl n'améliore pas l'implantation.\n\nIl ne bloque pas la stimulation ovarienne.\n\nIl ne contre-indique pas la ponction.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-32",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique N°3]\nMotif :Couple consultant pour infertilité primaire depuis 2 ans.\n\nHomme :M. T., 31 ans, marié depuis 3 ans. Antécédent de cryptorchidie gauche opérée à l'âge de 9 ans. Pas de tabac, pas d'alcool. Pas de traitement actuel.\n\nExamen :Testicules de petit volume (12 mL à droite, 8 mL à gauche), consistance ferme. Épididymes et canaux déférents perçus. Pas de varicocèle palpable. Caractères sexuels secondaires normaux.\n\nBiologie :Spermogramme : azoospermie (2 contrôles). FSH élevée, LH normale haute, testostérone normale basse.\n\nAzoospermie\nFSH élevée\nCryptorchidie ancienne\nTesticules hypotrophiques\n\nQuestion : Quel est le mécanisme le plus probable de l'azoospermie ?",
    "options": [
      "Azoospermie obstructive.",
      "Azoospermie non obstructive d'origine testiculaire.",
      "Azoospermie par déficit gonadotrope.",
      "Azoospermie par prise de testostérone.",
      "Azoospermie par obstruction épididymaire bilatérale."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association testicules hypotrophiques, FSH élevée et antécédent de cryptorchidie plaide pour une atteinte testiculaire non obstructive : la FSH élevée traduit l'absence de rétrocontrôle inhibinique normal.\n\nUne obstruction donnerait plutôt une FSH normale et des testicules de volume normal.\n\nL'atteinte testiculaire est la plus probable.\n\nUn déficit gonadotrope s'accompagnerait d'une FSH basse.\n\nPas de prise de testostérone rapportée.\n\nL'obstruction épididymaire n'est pas évoquée par l'examen.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-33",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique N°3]\nMotif :Couple consultant pour infertilité primaire depuis 2 ans.\n\nHomme :M. T., 31 ans, marié depuis 3 ans. Antécédent de cryptorchidie gauche opérée à l'âge de 9 ans. Pas de tabac, pas d'alcool. Pas de traitement actuel.\n\nExamen :Testicules de petit volume (12 mL à droite, 8 mL à gauche), consistance ferme. Épididymes et canaux déférents perçus. Pas de varicocèle palpable. Caractères sexuels secondaires normaux.\n\nBiologie :Spermogramme : azoospermie (2 contrôles). FSH élevée, LH normale haute, testostérone normale basse.\n\nAzoospermie\nFSH élevée\nCryptorchidie ancienne\nTesticules hypotrophiques\n\nQuestion : Quel examen complémentaire est prioritaire dans ce contexte d'azoospermie non obstructive ?",
    "options": [
      "Caryotype et recherche de microdélétions du chromosome Y.",
      "Hystérosalpingographie.",
      "Dosage de l'AMH chez l'homme.",
      "Échographie abdominale.",
      "Test de grossesse."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Devant une azoospermie non obstructive, un caryotype et une recherche de microdélétions du chromosome Y (région AZF) sont indiqués, notamment avant une extraction testiculaire de spermatozoïdes.\n\nLe bilan génétique est prioritaire.\n\nL'HSG est un examen féminin.\n\nL'AMH n'a pas d'indication masculine ici.\n\nL'échographie abdominale n'est pas prioritaire.\n\nLe test de grossesse est sans objet.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-34",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique N°3]\nMotif :Couple consultant pour infertilité primaire depuis 2 ans.\n\nHomme :M. T., 31 ans, marié depuis 3 ans. Antécédent de cryptorchidie gauche opérée à l'âge de 9 ans. Pas de tabac, pas d'alcool. Pas de traitement actuel.\n\nExamen :Testicules de petit volume (12 mL à droite, 8 mL à gauche), consistance ferme. Épididymes et canaux déférents perçus. Pas de varicocèle palpable. Caractères sexuels secondaires normaux.\n\nBiologie :Spermogramme : azoospermie (2 contrôles). FSH élevée, LH normale haute, testostérone normale basse.\n\nAzoospermie\nFSH élevée\nCryptorchidie ancienne\nTesticules hypotrophiques\n\nQuestion : Quelle option thérapeutique peut être discutée chez ce couple ?",
    "options": [
      "Prescription de testostérone exogène.",
      "Extraction testiculaire de spermatozoïdes (TESE) avec ICSI.",
      "Insémination intra-utérine avec sperme du conjoint.",
      "Létrozole chez l'homme.",
      "Attente spontanée."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En cas d'azoospermie non obstructive, la TESE avec ICSI peut être proposée après avis spécialisé et bilan génétique, si des spermatozoïdes sont retrouvés.\n\nLa testostérone exogène aggrave l'azoospermie.\n\nLa TESE + ICSI est la voie possible.\n\nL'IIU est impossible sans spermatozoïdes dans l'éjaculat.\n\nLe létrozole n'a pas d'indication ici.\n\nL'attente spontanée est illusoire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-35",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique N°4]\nMotif :Infertilité primaire depuis 24 mois.\n\nFemme :Mme L., 28 ans, cycles réguliers de 28 jours, pas de dysménorrhée, pas d'antécédent. IMC 22. Progestérone en phase lutéale normale. HSG : trompes perméables, cavité utérine normale. Échographie pelvienne normale.\n\nHomme :M. L., 30 ans, spermogramme avec 2 contrôles normaux.\n\nBilan :Aucune anomalie identifiée. TSH, prolactine normales.\n\nCycles réguliers\nHSG normale\nSpermogramme normal\nBilan standard normal\n\nQuestion : Quel diagnostic retenez-vous ?",
    "options": [
      "Infertilité tubaire.",
      "Infertilité inexpliquée.",
      "SOPK.",
      "Insuffisance ovarienne prématurée.",
      "Endométriose profonde."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Bilan standard normal : ovulation, trompes, utérus et sperme sans anomalie. Il s'agit d'une infertilité inexpliquée, diagnostic d'exclusion.\n\nLes trompes sont perméables.\n\nAucune cause identifiée après bilan standard.\n\nPas d'hyperandrogénie ni de cycles irréguliers.\n\nL'IOP est improbable à 28 ans avec cycles réguliers.\n\nPas de signe clinique d'endométriose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-36",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique N°4]\nMotif :Infertilité primaire depuis 24 mois.\n\nFemme :Mme L., 28 ans, cycles réguliers de 28 jours, pas de dysménorrhée, pas d'antécédent. IMC 22. Progestérone en phase lutéale normale. HSG : trompes perméables, cavité utérine normale. Échographie pelvienne normale.\n\nHomme :M. L., 30 ans, spermogramme avec 2 contrôles normaux.\n\nBilan :Aucune anomalie identifiée. TSH, prolactine normales.\n\nCycles réguliers\nHSG normale\nSpermogramme normal\nBilan standard normal\n\nQuestion : Quelle est la conduite à tenir la plus appropriée ?",
    "options": [
      "Cœlioscopie diagnostique systématique.",
      "Proposer une prise en charge progressive, éventuellement IIU après information.",
      "FIV avec ICSI d'emblée.",
      "Prescrire des antioxydants seuls.",
      "Aucune prise en charge, attendre 5 ans."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans l'infertilité inexpliquée, la prise en charge est progressive : information, optimisation de l'hygiène de vie, puis IIU ou FIV selon l'évolution et le pronostic.\n\nLa cœlioscopie systématique n'est pas recommandée.\n\nLa prise en charge progressive est la bonne attitude.\n\nLa FIV avec ICSI n'est pas indiquée d'emblée.\n\nLes antioxydants seuls n'ont pas de bénéfice démontré.\n\nL'attente prolongée est injustifiée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-37",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique N°4]\nMotif :Infertilité primaire depuis 24 mois.\n\nFemme :Mme L., 28 ans, cycles réguliers de 28 jours, pas de dysménorrhée, pas d'antécédent. IMC 22. Progestérone en phase lutéale normale. HSG : trompes perméables, cavité utérine normale. Échographie pelvienne normale.\n\nHomme :M. L., 30 ans, spermogramme avec 2 contrôles normaux.\n\nBilan :Aucune anomalie identifiée. TSH, prolactine normales.\n\nCycles réguliers\nHSG normale\nSpermogramme normal\nBilan standard normal\n\nQuestion : Quelle information doit être donnée au couple ?",
    "options": [
      "L'infertilité inexpliquée signifie qu'aucune grossesse n'est possible.",
      "Le diagnostic n'exclut pas l'existence de mécanismes non encore explorés et des grossesses spontanées restent possibles.",
      "Il faut arrêter les rapports pendant la période fertile.",
      "La FIV est obligatoire immédiatement.",
      "Le spermogramme doit être répété 10 fois."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'infertilité inexpliquée est un diagnostic d'exclusion : des grossesses spontanées restent possibles, et certaines causes ne sont pas encore accessibles au bilan standard.\n\nUne grossesse reste possible.\n\nL'information doit être nuancée et honnête.\n\nLes rapports doivent au contraire être optimisés.\n\nLa FIV n'est pas obligatoire immédiatement.\n\nRépéter 10 fois le spermogramme n'a aucun sens.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-38",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[1Ovulation & fonction ovarienne]\nMotif :Désir de grossesse chez une femme de 41 ans.\n\nFemme :Mme R., 41 ans, sans enfant, mariée depuis 1 an. Cycles réguliers mais plus courts (24–26 jours) depuis 6 mois. Pas d'antécédent chirurgical. AMH à 0,6 ng/mL, compte des follicules antraux à 4. FSH à 12 UI/L.\n\nHomme :M. R., 43 ans, spermogramme normal.\n\nImagerie :HSG : trompes perméables. Échographie : utérus normal.\n\n41 ans\nAMH 0,6 ng/mL\nCFA 4\nFSH 12 UI/L\n\nQuestion : Quelle est l'interprétation la plus juste du bilan ?",
    "options": [
      "Réserve ovarienne normale pour l'âge.",
      "Diminution de la réserve ovarienne associée à l'âge.",
      "Insuffisance ovarienne prématurée certaine.",
      "SOPK.",
      "Hyperprolactinémie."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "AMH basse, CFA bas et FSH modérément élevée à 41 ans traduisent une diminution de la réserve ovarienne liée à l'âge. Le pronostic reproductif est diminué.\n\nLa réserve est basse, pas normale.\n\nDiminution de la réserve ovarienne liée à l'âge.\n\nL'IOP survient avant 40 ans : ici la patiente a 41 ans.\n\nLe SOPK donnerait plutôt une AMH élevée.\n\nL'hyperprolactinémie n'est pas évoquée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-39",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[1Ovulation & fonction ovarienne]\nMotif :Désir de grossesse chez une femme de 41 ans.\n\nFemme :Mme R., 41 ans, sans enfant, mariée depuis 1 an. Cycles réguliers mais plus courts (24–26 jours) depuis 6 mois. Pas d'antécédent chirurgical. AMH à 0,6 ng/mL, compte des follicules antraux à 4. FSH à 12 UI/L.\n\nHomme :M. R., 43 ans, spermogramme normal.\n\nImagerie :HSG : trompes perméables. Échographie : utérus normal.\n\n41 ans\nAMH 0,6 ng/mL\nCFA 4\nFSH 12 UI/L\n\nQuestion : Quelle est la conduite à tenir ?",
    "options": [
      "Attendre 12 mois avant toute exploration.",
      "Prise en charge rapide, information sur le pronostic et discussion de l'AMP.",
      "Prescrire une contraception pour réguler les cycles.",
      "Rassurer sans bilan complémentaire.",
      "Traiter par testostérone."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "À 41 ans avec réserve ovarienne basse, le temps est un facteur pronostique majeur : la prise en charge doit être rapide, avec information claire et discussion des options d'AMP.\n\nAttendre 12 mois ferait perdre un temps précieux.\n\nLa prise en charge rapide est justifiée.\n\nLa contraception est contraire au projet.\n\nRassurer sans bilan est une erreur.\n\nLa testostérone est proscrite.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-couple-infertile-40",
    "courseId": "c-gyn-couple-infertile",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[1Ovulation & fonction ovarienne]\nMotif :Désir de grossesse chez une femme de 41 ans.\n\nFemme :Mme R., 41 ans, sans enfant, mariée depuis 1 an. Cycles réguliers mais plus courts (24–26 jours) depuis 6 mois. Pas d'antécédent chirurgical. AMH à 0,6 ng/mL, compte des follicules antraux à 4. FSH à 12 UI/L.\n\nHomme :M. R., 43 ans, spermogramme normal.\n\nImagerie :HSG : trompes perméables. Échographie : utérus normal.\n\n41 ans\nAMH 0,6 ng/mL\nCFA 4\nFSH 12 UI/L\n\nQuestion : Quelle information doit être délivrée au couple ?",
    "options": [
      "Les chances de grossesse spontanée sont identiques à celles d'une femme de 25 ans.",
      "L'âge et la réserve ovarienne diminuent le pronostic, sans rendre la grossesse impossible.",
      "La FIV garantit une grossesse à 100 %.",
      "L'AMH prédit à elle seule la fertilité spontanée.",
      "Il faut arrêter tout projet de grossesse."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le pronostic est diminué mais non nul. L'AMH renseigne sur la réserve, pas sur la fertilité spontanée. L'information doit rester honnête et nuancée.\n\nLe pronostic n'est pas identique à celui d'une femme de 25 ans.\n\nInformation juste et nuancée.\n\nAucune technique ne garantit 100 % de grossesse.\n\nL'AMH ne prédit pas seule la fertilité spontanée.\n\nIl n'y a pas lieu d'arrêter le projet.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-1",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant la définition de l'aménorrhée primaire, quelle proposition est exacte ?",
    "options": [
      "Absence de règles à 15 ans chez une patiente ayant une croissance normale et des caractères sexuels secondaires",
      "Absence de ménarche à 18 ans uniquement",
      "Absence de règles pendant 3 mois chez une femme réglée",
      "Absence de règles à 13 ans avec développement mammaire complet",
      "Absence de ménarche chez toute fille de plus de 12 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nLa définition officielle associe absence de règles à 15 ans avec croissance normale + caractères sexuels secondaires présents. Le cours ajoute une nuance capitale : l'absence de ménarche et de développement mammaire à 13 ans doit déjà faire rechercher une aménorrhée primaire (suspicion d'hypogonadisme ou d'anomalie de l'axe).\n\nPourquoi les autres options sont fausses\n\nB — Le seuil de 18 ans est arbitraire et n'est pas retenu par le cours ; il ferait manquer des diagnostics.\n\nC — Il s'agit de la définition de l'aménorrhée secondaire (3 mois si cycles réguliers).\n\nD — Si le développement mammaire est complet, l'absence de règles à 13 ans ne suffit pas : c'est à 15 ans que l'on parle d'aménorrhée primaire (le seuil de 13 ans concerne l'absence de développement mammaire).\n\nE — 12 ans n'est pas un seuil défini ; la puberté peut débuter jusqu'à 13–14 ans.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-2",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant la physiologie du cycle menstruel, laquelle est fausse ?",
    "options": [
      "La GnRH stimule l'hypophyse pour produire FSH et LH",
      "La FSH active l'aromatase des cellules de la granulosa",
      "Le pic de LH est responsable de l'ovulation et de la formation du corps jaune",
      "Les œstrogènes transforment l'endomètre en structure sécrétoire (décidualisation)",
      "La menstruation survient environ 14 jours après l'ovulation dans un cycle typique"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Analyse pédagogique\n\nLe pic de LH déclenche l'ovulation et la lutéinisation (corps jaune) — l'option C est donc vraie. C'est la progestérone, et non les œstrogènes, qui transforme l'endomètre prolifératif en endomètre sécrétoire et le prépare à l'implantation (décidualisation). Les œstrogènes, eux, prolifèrent l'endomètre. Confondre les deux rôles est un piège classique.\n\nPourquoi les autres options sont vraies\n\nA — La GnRH hypothalamique stimule bien la sécrétion hypophysaire de FSH et LH.\n\nB — La FSH active l'aromatase des cellules de la granulosa pour convertir les androgènes en œstradiol.\n\nC — Le pic de LH induit la maturation folliculaire finale, l'ovulation et la formation du corps jaune producteur de progestérone.\n\nE — La phase lutéale est stable (~14 jours), donc la menstruation survient 14 jours après l'ovulation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-3",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "L'évaluation du développement des seins et de la pilosité pubienne chez une adolescente consultant pour aménorrhée primaire se fait selon :",
    "options": [
      "Le score de Ferriman et Gallway",
      "La classification de Tanner",
      "Le score de Bishop",
      "La classification de Marshall",
      "Le score de HOMA-IR"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Analyse pédagogique\n\nLa classification de Tanner (stades I à V) est l'outil de référence pour évaluer le développement pubertaire mammaire (S1–S5) et pileux (P1–P5). Elle permet de distinguer un impubérisme vrai (stade I), un développement normal, ou un développement dysmature/masculinisé. La présence de pilosité pubienne et axillaire signe l'adrénarche.\n\nPourquoi les autres options sont fausses\n\nA — Ferriman et Gallway évaluent l'hirsutisme (score > 8 pathologique), pas le stade pubertaire.\n\nC — Le score de Bishop évalue la maturation cervicale au moment du travail.\n\nD — Marshall et Tanner ont publié ensemble, mais c'est bien la classification de Tanner qui est retenue dans le cours.\n\nE — HOMA-IR évalue l'insulinorésistance (utile dans le SOPK), pas la puberté.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-4",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Concernant le score de Ferriman et Gallway, quelle affirmation est fausse ?",
    "options": [
      "Un score supérieur à 8 est considéré comme pathologique",
      "Un score de 8 à 16 correspond à un hirsutisme léger",
      "Un score supérieur à 25 correspond à un hirsutisme sévère",
      "Le score évalue la pilosité sur 9 zones corporelles",
      "Un score élevé oriente vers une hyperandrogénie clinique"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Analyse pédagogique\n\nLe score de Ferriman et Gallway est bien un outil d'évaluation de l'hirsutisme (pilosité de type masculin : lèvre supérieure, menton, poitrine inter-mammaire, etc.). Le cours retient les seuils : > 8 pathologique, 8–16 léger, 17–25 modéré, > 25 sévère. L'affirmation D est fausse car le score historique comporte 11 zones (et non 9) dans sa description originale, et le cours ne mentionne pas « 9 zones » comme critère. Le piège consiste à retenir un chiffre non enseigné.\n\nPourquoi les autres options sont vraies\n\nA — Le seuil de pathologie est bien > 8.\n\nB — 8–16 = hirsutisme léger (conforme au cours).\n\nC — > 25 = hirsutisme sévère (conforme au cours).\n\nE — Un score élevé oriente vers une hyperandrogénie clinique, donc vers un bilan hormonal (testostérone, 17-OHP, etc.).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-5",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Chez une adolescente en aménorrhée primaire, la radiographie de la main et du poignet gauches est réalisée principalement pour :",
    "options": [
      "Rechercher une ostéoporose",
      "Évaluer l'âge osseux en recherchant le sésamoïde du pouce",
      "Dépister une dysplasie osseuse",
      "Mesurer la densité minérale osseuse",
      "Rechercher une fracture de stress"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Analyse pédagogique\n\nLa radio de la main gauche recherche le sésamoïde du pouce, qui apparaît vers 11–12 ans et témoigne de la progression de l'âge osseux. Cet examen permet d'affirmer que l'âge osseux est en rapport avec l'âge chronologique et donc de distinguer un simple retard pubertaire constitutionnel d'un véritable hypogonadisme (où l'âge osseux est retardé).\n\nPourquoi les autres options sont fausses\n\nA — L'ostéoporose se mesure par ostéodensitométrie, pas par radiographie standard.\n\nC — La dysplasie osseuse n'est pas l'objectif de cet examen dans ce contexte.\n\nD — La densité minérale osseuse se mesure par DXA (ostéodensitométrie).\n\nE — Aucun contexte traumatique n'est évoqué ici.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-6",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant le syndrome de Rokitansky-Kuster-Hausler (aplasie congénitale du vagin), quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "Les caractères sexuels secondaires sont normaux",
      "Des douleurs pelviennes cycliques sont typiquement présentes",
      "Le caryotype est 46,XX normal",
      "L'utérus est palpé au toucher rectal",
      "Peut s'intégrer dans le cadre du syndrome MURCS"
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "Analyse pédagogique\n\nLe syndrome de Rokitansky associe une aplasie vaginale avec utérus absent ou rudimentaire, des ovaires fonctionnels (donc caractères sexuels secondaires normaux), un caryotype 46,XX, et une vulve normale. L'absence d'utérus explique l'absence de douleurs cycliques (pas de rétention menstruelle). Il peut s'intégrer dans le syndrome MURCS (agénésie rénale 30 %, anomalies rachidiennes 15–20 %).\n\nPourquoi les autres options sont fausses\n\nB — Les douleurs cycliques signent une rétention (hématocolpos, atrésie cervicale), pas Rokitansky où l'utérus est absent.\n\nD — Au toucher rectal, l'utérus n'est pas palpé : c'est un élément clé du diagnostic.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-7",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Quelles anomalies sont classiquement associées au syndrome de Turner ? (2 à 3 réponses)",
    "options": [
      "Thorax en bouclier",
      "Caryotype 46,XX avec délétion du bras long",
      "Gonadotrophines élevées avec œstradiol bas",
      "Hypertrophie clitoridienne",
      "Bicuspidie aortique et coarctation de l'aorte"
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "Analyse pédagogique\n\nLe syndrome de Turner est une dysgénésie gonadique : ovaires non fonctionnels → œstradiol très bas, FSH/LH élevées (hypogonadisme hypergonadotrope). Cliniquement : petite taille, thorax en bouclier, cou palmé, implantation basse des cheveux, 4ᵉ métacarpien court, dysmorphie faciale (strabisme, ptosis). Malformations viscérales : bicuspidie aortique, coarctation, rein en fer à cheval, surdité, dysthyroïdie, maladie cœliaque.\n\nPourquoi les autres options sont fausses\n\nB — Le caryotype typique est 45,X0 (monosomie), ou une anomalie de structure (délétion X) ou une mosaïque — mais pas « 46,XX avec délétion du bras long » telle que formulée.\n\nD — L'hypertrophie clitoridienne signe une hyperandrogénie (HCS, tumeur virilisante), pas Turner.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-8",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant le syndrome de résistance aux androgènes (syndrome de Morris) sont exactes, sauf :",
    "options": [
      "Le caryotype est 46,XY",
      "Le morphotype est féminin avec des seins bien développés",
      "La pilosité pubienne et axillaire est normale voire abondante",
      "Les testicules peuvent être palpables dans le pli inguinal",
      "La testostérone et l'AMH sont très élevées"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Analyse pédagogique\n\nDans le syndrome de Morris, il existe une insensibilité complète aux androgènes : le caryotype est 46,XY, le morphotype féminin, les seins sont développés (aromatisation périphérique des androgènes), mais la pilosité pubienne et axillaire est absente ou raréfiée — c'est un signe cardinal. Les testicules sont ectopiques (pli inguinal, abdomen) et sécrètent des androgènes élevés et de l'AMH élevée (pas de régression müllérienne → pas d'utérus, vagin borgne).\n\nPourquoi les autres options sont vraies\n\nA — Caryotype masculin 46,XY (testicule féminisant).\n\nB — Morphotype féminin, seins développés par aromatisation.\n\nD — Testicules palpables dans le pli inguinal ou en position abdominale.\n\nE — T et AMH très élevées (pas de rétrocontrôle négatif androgénique).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-9",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Le syndrome de Sheehan résulte de :",
    "options": [
      "Une nécrose hypophysaire après accouchement hémorragique",
      "Une tumeur hypophysaire sécrétante",
      "Une hypophysite auto-immune",
      "Une hyperplasie congénitale des surrénales",
      "Un adénome à prolactine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nLe syndrome de Sheehan est une nécrose hypophysaire ischémique survenant après un accouchement hémorragique (souvent avec délivrance artificielle, révision utérine). L'hypophyse hyperplasiée gravidique est très vulnérable à l'ischémie. Il en résulte une insuffisance hypophysaire globale : aménorrhée (déficit gonadotrope), agalactie, hypothyroïdie, insuffisance surrénale. Traitement substitutif à vie (œstroprogestatifs + L-thyroxine + hydrocortisone).\n\nPourquoi les autres options sont fausses\n\nB — Une tumeur hypophysaire sécrétante donne un syndrome tumoral et/ou hypersécrétant, pas une nécrose ischémique du post-partum.\n\nC — L'hypophysite auto-immune est une entité distincte (contexte auto-immun, grossesse parfois), pas une nécrose post-hémorragique.\n\nD — L'HCS est une pathologie surrénalienne congénitale, sans lien avec Sheehan.\n\nE — L'adénome à prolactine est une tumeur, pas une nécrose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-10",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Concernant le syndrome des ovaires polymicrokystiques (SOPK), quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "C'est l'endocrinopathie la plus fréquente chez la femme en âge de procréer",
      "Le tableau associe souvent obésité androïde, hirsutisme et acné",
      "Le dosage montre typiquement une FSH élevée avec LH basse",
      "L'échographie retrouve des ovaires augmentés de volume avec épaississement stromal",
      "Il existe fréquemment une insulinorésistance"
    ],
    "correctAnswers": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Analyse pédagogique\n\nLe SOPK est l'endocrinopathie la plus fréquente de la femme en âge de procréer. Il associe : aménorrhée secondaire (souvent précédée de spanioménorrhée), stérilité anovulatoire, obésité androïde, signes d'hyperandrogénie (hirsutisme, acné), insulinorésistance. Échographie : ovaires augmentés de volume, stroma épaissi. Biologie : LH élevé sans pic ovulatoire, FSH normale ou basse, réponse explosive au test LH-RH, androgènes élevés.\n\nPourquoi C est fausse\n\nC — Le profil est inversé : LH élevée, FSH normale/basse. La FSH élevée avec LH basse évoque plutôt une insuffisance ovarienne (hypergonadotrope).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-11",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Le syndrome de De Morsier-Kallmann est caractérisé par :",
    "options": [
      "Une anosmie associée à un hypogonadisme hypogonadotrope",
      "Une hyperprolactinémie avec galactorrhée",
      "Une hyperplasie congénitale des surrénales",
      "Un syndrome de Turner",
      "Un syndrome de Sheehan"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nLe syndrome de Kallmann (dysplasie olfacto-génitale) est une agénésie des lobes olfactifs se prolongeant sur l'hypothalamus antérieur, entraînant un défaut de sécrétion de GnRH → hypogonadisme hypogonadotrope. Le diagnostic repose sur la découverte d'une anosmie chez une patiente en aménorrhée primaire avec impubérisme. Le traitement est une supplémentation œstroprogestative progressive ; pour la fertilité, induction par gonadotrophines.\n\nPourquoi les autres options sont fausses\n\nB — Hyperprolactinémie : tableau différent (galactorrhée, PRL élevée, pas d'anosmie).\n\nC — HCS : hyperandrogénie, virilisation, 17-OHP élevée.\n\nD — Turner : dysgénésie gonadique 45,X0, FSH élevée, pas d'anosmie.\n\nE — Sheehan : nécrose hypophysaire du post-partum.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-12",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Quels éléments évoquent un craniopharyngiome chez une patiente en aménorrhée primaire ? (2 à 3 réponses)",
    "options": [
      "Céphalées et troubles visuels",
      "Somnolence",
      "Calcifications supra-sellaires à la radiographie du crâne",
      "Galactorrhée isolée avec PRL > 100 ng/ml",
      "Anosmie isolée"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Analyse pédagogique\n\nLe craniopharyngiome (tumeur de la poche de Rathke) est la tumeur supra-hypophysaire la plus fréquente. Cliniquement : aménorrhée, céphalées, troubles visuels, somnolence (compression hypothalamique). La radiographie du crâne retrouve des calcifications supra-sellaires caractéristiques. L'IRM précise le diagnostic.\n\nPourquoi les autres options sont fausses ou moins spécifiques\n\nD — Galactorrhée avec PRL > 100 évoque un adénome à prolactine, pas un craniopharyngiome.\n\nE — L'anosmie isolée évoque un syndrome de Kallmann.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-13",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Une adolescente de 14 ans consulte pour aménorrhée primaire et douleurs pelviennes cycliques. À l'examen, on note une masse bleutée bombant à l'hymen. Le diagnostic le plus probable est :",
    "options": [
      "Syndrome de Rokitansky-Kuster-Hausler",
      "Hématocolpos par imperforation hyménéale",
      "Syndrome de Morris",
      "Syndrome de Turner",
      "Hyperplasie congénitale des surrénales"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Analyse pédagogique\n\nL'hématocolpos par imperforation hyménéale associe : aménorrhée primaire, douleurs pelviennes cycliques (rétention menstruelle), masse bleutée bombant à l'hymen, parfois syndrome compressif (dysurie, constipation). L'examen au spéculum est impossible ; le traitement est une ouverture chirurgicale avec drainage.\n\nPourquoi les autres options sont fausses\n\nA — Rokitansky : pas de douleurs cycliques, pas de masse bleutée (utérus absent).\n\nC — Morris : caryotype XY, pas d'utérus, vagin borgne, pas de masse bleutée hyménéale.\n\nD — Turner : impubérisme, pas de douleurs cycliques ni de masse vaginale.\n\nE — HCS : virilisation, 17-OHP élevée, pas de masse vaginale bleutée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-14",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Concernant la prise en charge du syndrome de Turner, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "Traitement par hormone de croissance possible jusqu'à un âge osseux de 13 ans",
      "Supplémentation par 17β-estradiol à faible dose, augmentée progressivement tous les 6 mois",
      "Traitement séquentiel : œstrogènes 20–25 jours puis progestérone 10–15 jours",
      "Traitement par anti-androgènes (acétate de cyprotérone) en première intention",
      "Nécessité d'expliquer les conséquences sur la sexualité et la fertilité"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Analyse pédagogique\n\nPrise en charge du Turner : hormone de croissance jusqu'à un âge osseux de 13 ans pour optimiser la taille ; 17β-estradiol à faible dose (1/8 de la dose adulte), augmentée par paliers tous les 6 mois ; traitement séquentiel œstroprogestatif (œstrogènes 20–25 j, progestérone 10–15 j) pour maintenir les cycles et protéger l'endomètre ; information sur sexualité et fertilité (grossesse possible par don d'ovocytes).\n\nPourquoi D est fausse\n\nD — L'acétate de cyprotérone est utilisé dans le SOPK (anti-androgène), pas dans le Turner (où il n'y a pas d'hyperandrogénie).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-15",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Le traitement anti-gonadotrope du SOPK repose classiquement sur :",
    "options": [
      "L'acétate de cyprotérone (Androcure®) et/ou une pilule œstroprogestative",
      "La cabergoline",
      "L'hydrocortisone",
      "La L-thyroxine",
      "La pompe à GnRH pulsatile"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nLe traitement du SOPK est anti-gonadotrope : acétate de cyprotérone (anti-androgène), œstrogènes ou pilule œstroprogestative. Une induction ovulatoire peut être proposée ultérieurement. Surveillance métabolique indispensable (dyslipidémie, hyperinsulinisme, diabète de type 2, risque cardio-vasculaire).\n\nPourquoi les autres options sont fausses\n\nB — La cabergoline (agoniste dopaminergique) traite l'hyperprolactinémie.\n\nC — L'hydrocortisone traite l'hyperplasie congénitale des surrénales.\n\nD — La L-thyroxine traite l'hypothyroïdie.\n\nE — La pompe à GnRH pulsatile est utilisée dans certains hypogonadismes hypogonadotropes (Kallmann, hypothalamique fonctionnel), pas dans le SOPK.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-16",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Chez une adolescente avec aménorrhée primaire, hypertrophie clitoridienne et 17-hydroxyprogestérone élevée, le diagnostic le plus probable est :",
    "options": [
      "Syndrome de Turner",
      "Syndrome de Morris",
      "Hyperplasie congénitale des surrénales par déficit en 21-hydroxylase",
      "Syndrome de Rokitansky",
      "Craniopharyngiome"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Analyse pédagogique\n\nL'hyperplasie congénitale des surrénales (HCS) par déficit en 21-hydroxylase (ou 11β-hydroxylase) entraîne une accumulation de précurseurs stéroïdiens → hyperandrogénie. Cliniquement : petite taille, OGI normaux, hypertrophie clitoridienne, virilisation. Biologie : testostérone élevée, 17-OHP élevée, FSH/LH normales ou basses. Traitement : hydrocortisone + conseil génétique.\n\nPourquoi les autres options sont fausses\n\nA — Turner : pas d'hyperandrogénie, FSH élevée, caryotype 45,X0.\n\nB — Morris : caryotype XY, pas d'utérus, T élevée mais 17-OHP normale.\n\nD — Rokitansky : pas d'hyperandrogénie, caryotype 46,XX.\n\nE — Craniopharyngiome : pas d'hyperandrogénie ni de virilisation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-17",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'hyperprolactinémie sont exactes, sauf :",
    "options": [
      "Elle associe aménorrhée et galactorrhée",
      "Un adénome à prolactine se manifeste par des céphalées et des troubles visuels",
      "Une PRL > 100 ng/ml impose une IRM hypophysaire",
      "Les neuroleptiques, opiacés et antidépresseurs peuvent l'induire",
      "Elle est la première cause d'aménorrhée hypothalamique organique tumorale"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Analyse pédagogique\n\nL'hyperprolactinémie est la première cause d'aménorrhée hypothalamique fonctionnelle (et non « organique tumorale »). Elle entraîne une suppression de GnRH, une diminution de la fréquence des pulses de LH et une diminution de la réponse de LH aux œstrogènes. Les causes sont : adénome à prolactine (PRL > 100, IRM), causes iatrogènes (neuroleptiques, opiacés, antidépresseurs, métoclopramide, dompéridone, alpha-méthyldopa, vérapamil), hypothyroïdie périphérique, hyperprolactinémie fonctionnelle ou idiopathique, post-partum.\n\nPourquoi les autres options sont vraies\n\nA — Triade classique : aménorrhée + galactorrhée + PRL élevée.\n\nB — L'adénome à prolactine donne céphalées et troubles visuels (compression chiasmatique).\n\nC — PRL > 100 ng/ml : IRM hypophysaire systématique.\n\nD — Les médicaments cités sont des causes iatrogènes classiques.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-18",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Parmi les causes utérines d'aménorrhée secondaire, on retient : (2 à 3 réponses)",
    "options": [
      "Synéchies utérines post-traumatiques (syndrome d'Asherman)",
      "Sténose cicatricielle du col après conisation",
      "Atrophie endométriale sous DIU au lévonorgestrel (Mirena®)",
      "Insuffisance ovarienne précoce",
      "Hyperprolactinémie"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Analyse pédagogique\n\nLes causes utérines d'aménorrhée secondaire comprennent : synéchies utérines (isthmique = Musset ; complexes post-traumatiques = Asherman ; post-opératoires, post-infectieuses), sténose cicatricielle du col (amputation, conisation), rétention d'œuf mort ou débris ovulaires, atrophie endométriale sous DIU au lévonorgestrel. La clinique associe douleurs cycliques, absence d'hémorragie de privation au test progestatif, courbe thermique normale et dosages hormonaux normaux.\n\nPourquoi D et E sont fausses\n\nD — L'insuffisance ovarienne précoce est une cause ovarienne, pas utérine.\n\nE — L'hyperprolactinémie est une cause hypophysaire, pas utérine.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-19",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Le syndrome d'Asherman correspond à :",
    "options": [
      "Une synéchie isthmique isolée",
      "Des synéchies utérines complexes post-traumatiques ou post-infectieuses",
      "Une sténose cicatricielle du col",
      "Une aplasie congénitale du vagin",
      "Une insuffisance ovarienne précoce"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Analyse pédagogique\n\nLe syndrome d'Asherman désigne des synéchies utérines complexes post-traumatiques (curetage, myomectomie avec effraction, endométrite du post-partum, tuberculose génitale) ou post-endométrectomie. Il entraîne une aménorrhée avec douleurs cycliques, absence d'hémorragie de privation au test progestatif, courbe thermique normale (ovulation normale) et dosages hormonaux normaux. Le diagnostic se fait par hystérosalpingographie ou hystéroscopie.\n\nPourquoi les autres options sont fausses\n\nA — La synéchie isthmique isolée correspond au syndrome de Musset, entité distincte.\n\nC — La sténose cervicale est une autre cause utérine, distincte d'Asherman.\n\nD — L'aplasie vaginale est congénitale (Rokitansky), pas acquise.\n\nE — L'insuffisance ovarienne précoce est une cause ovarienne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-20",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant l'aménorrhée dans l'anorexie mentale, quelle proposition est fausse ?",
    "options": [
      "Elle touche 0,5 à 2,2 % des jeunes femmes",
      "Jusqu'à 84 % des patientes présenteront une aménorrhée à un moment de leur maladie",
      "Elle a un retentissement négatif sur la densité minérale osseuse",
      "Elle protège totalement contre les grossesses non désirées",
      "Le traitement de première intention est la renutrition et la reprise de poids"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Analyse pédagogique\n\nL'anorexie mentale est un trouble du comportement alimentaire multifactoriel (0,5–2,2 % des jeunes femmes) avec restriction alimentaire, poids bas, peur intense de grossir et dysmorphophobie. Jusqu'à 84 % des patientes présentent une aménorrhée. Conséquences : baisse de la DMO, altération de la fertilité, impact neurocognitif (humeur, coordination). Attention : les troubles ovulatoires ne protègent pas totalement — les grossesses non planifiées sont plus fréquentes (50 %) chez ces patientes, car l'absence de contraception devant des cycles irréguliers est fréquente.\n\nPourquoi les autres options sont vraies\n\nA — Prévalence 0,5–2,2 % des jeunes femmes.\n\nB — Jusqu'à 84 % d'aménorrhée au cours de la maladie.\n\nC — Retentissement négatif sur la densité minérale osseuse.\n\nE — Renutrition et reprise de poids = meilleur traitement.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-21",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "L'aménorrhée post-pilule se définit comme l'absence de retour des règles :",
    "options": [
      "1 mois après l'arrêt de la contraception orale",
      "3 mois après l'arrêt de la contraception orale",
      "6 mois après l'arrêt de la contraception orale",
      "12 mois après l'arrêt de la contraception orale",
      "Immédiatement après l'arrêt de la contraception orale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Analyse pédagogique\n\nL'aménorrhée post-pilule est définie par l'absence de retour des règles 3 mois après l'arrêt de la contraception orale. La démarche : éliminer une grossesse et une hyperprolactinémie, puis réaliser un test à la progestérone pour vérifier la bonne imprégnation œstrogénique de l'endomètre. Les œstroprogestatifs utilisés en continu ou longtemps peuvent induire une atrophie endométriale et une aménorrhée.\n\nPourquoi les autres options sont fausses\n\nA — 1 mois est trop précoce : le retour de couches peut être retardé physiologiquement.\n\nC — 6 mois correspond au seuil de l'aménorrhée secondaire en cas de cycles irréguliers, pas à la définition post-pilule.\n\nD — 12 mois n'est pas la définition retenue.\n\nE — Immédiatement après l'arrêt : c'est physiologique, pas une aménorrhée post-pilule pathologique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-22",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Le syndrome de Musset correspond à :",
    "options": [
      "Une synéchie isthmique",
      "Une sténose cervicale post-conisation",
      "Un hématocolpos",
      "Une hyperplasie congénitale des surrénales",
      "Un adénome à prolactine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nLe syndrome de Musset désigne une synéchie isthmique (au niveau de l'isthme utérin), cause utérine d'aménorrhée secondaire. Elle s'intègre dans le chapitre des synéchies utérines, aux côtés des synéchies complexes post-traumatiques (Asherman), post-opératoires et post-infectieuses.\n\nPourquoi les autres options sont fausses\n\nB — La sténose cervicale post-conisation est une entité distincte.\n\nC — L'hématocolpos est une cause d'aménorrhée primaire (malformation).\n\nD — L'HCS est une cause endocrinienne d'aménorrhée primaire virilisée.\n\nE — L'adénome à prolactine est une cause hypophysaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-23",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Chez une patiente anorexique avec aménorrhée, le traitement de première intention est :",
    "options": [
      "La renutrition et la reprise de poids",
      "Une œstroprogestation d'emblée",
      "La cabergoline",
      "L'induction ovulatoire par gonadotrophines",
      "La chirurgie hypophysaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nLe meilleur traitement de l'aménorrhée chez une patiente anorexique est la renutrition et la reprise de poids. La rémission peut être longue ; l'évolution vers la chronicisation concerne ~30 % des cas. Dans ce contexte, l'œstroprogestatif peut être une alternative, mais pas en première intention.\n\nPourquoi les autres options sont fausses\n\nB — L'œstroprogestatif est une alternative, pas le traitement de première ligne.\n\nC — La cabergoline traite l'hyperprolactinémie.\n\nD — L'induction ovulatoire n'a pas sa place en première intention dans l'anorexie.\n\nE — La chirurgie hypophysaire n'a aucun rôle ici.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-24",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Dans le syndrome de Morris (testicule féminisant), la prise en charge doit comporter :",
    "options": [
      "Une gonadectomie en raison du risque de dégénérescence tumorale",
      "Une hystérectomie systématique",
      "Un traitement par hydrocortisone",
      "Une induction ovulatoire par gonadotrophines",
      "Un traitement par anti-androgènes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nDans le syndrome de Morris, les testicules ectopiques (abdomen, pli inguinal) présentent un risque de dégénérescence tumorale (gonadoblastome, dysgerminome) : une gonadectomie doit être programmée avec la patiente, dans le cadre d'une prise en charge pluridisciplinaire (psychologique, chirurgicale, endocrinologique). Le suivi inclut la surveillance des gonades.\n\nPourquoi les autres options sont fausses\n\nB — Il n'y a pas d'utérus (régression müllérienne par l'AMH) : l'hystérectomie n'a pas de sens.\n\nC — L'hydrocortisone traite l'HCS, pas le Morris.\n\nD — Il n'y a pas d'ovaires fonctionnels : pas d'induction ovulatoire.\n\nE — Les anti-androgènes n'ont pas d'indication (récepteurs aux androgènes non fonctionnels).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-25",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Dans le syndrome de Kallmann, la prise en charge de la fertilité repose sur :",
    "options": [
      "La pompe à GnRH pulsatile ou les gonadotrophines pour induction de l'ovulation",
      "La cabergoline",
      "L'hydrocortisone",
      "La gonadectomie",
      "Le DIU au lévonorgestrel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Analyse pédagogique\n\nLe syndrome de Kallmann est un hypogonadisme hypogonadotrope par déficit de GnRH. Le traitement de l'aménorrhée est une supplémentation œstroprogestative progressive. Pour la fertilité : induction de l'ovulation par gonadotrophines ou pompe à GnRH pulsatile (perfusion pulsatile de GnRH pour restaurer la pulsatilité physiologique).\n\nPourquoi les autres options sont fausses\n\nB — La cabergoline traite l'hyperprolactinémie.\n\nC — L'hydrocortisone traite l'HCS.\n\nD — La gonadectomie concerne Turner/Morris avec gonades dysgénésiques, pas Kallmann.\n\nE — Le DIU au lévonorgestrel est contraceptif, il n'a pas sa place dans le traitement de la fertilité.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-26",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas clinique n°1 — Adolescent de 14 ans, aménorrhée primaire]\nAnamnèse\nExamen clinique\nImagerie\nUne adolescente de 14 ans est amenée par sa mère pour absence de règles. Elle a un développement mammaire normal (Tanner S4) et une pilosité pubienne normale (P4). Depuis 3 mois, elle présente des douleurs pelviennes cycliques d'intensité croissante, associées à des dysuries et une constipation. À l'examen, on note une masse bleutée bombant à l'hymen. L'échographie abdominopelvienne retrouve une collection liquidienne dans le vagin, avec un utérus de taille normale.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Syndrome de Rokitansky-Kuster-Hausler",
      "Hématocolpos par imperforation hyménéale",
      "Syndrome de Morris",
      "Syndrome de Turner",
      "Hyperplasie congénitale des surrénales"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Raisonnement\n\nLa triade aménorrhée primaire + douleurs cycliques + masse bleutée à l'hymen signe une rétention menstruelle par obstacle anatomique. L'échographie confirme la collection vaginale (hématocolpos) et un utérus normal. Le traitement est chirurgical : ouverture de l'hymen et drainage.\n\nDistracteurs\n\nA — Rokitansky : utérus absent, pas de douleurs cycliques, pas de masse bleutée.\n\nC — Morris : caryotype XY, pas d'utérus, pas de masse hyménéale.\n\nD — Turner : impubérisme, pas de douleurs cycliques.\n\nE — HCS : virilisation, 17-OHP élevée, pas de masse vaginale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-27",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas clinique n°1 — Adolescent de 14 ans, aménorrhée primaire]\nAnamnèse\nExamen clinique\nImagerie\nUne adolescente de 14 ans est amenée par sa mère pour absence de règles. Elle a un développement mammaire normal (Tanner S4) et une pilosité pubienne normale (P4). Depuis 3 mois, elle présente des douleurs pelviennes cycliques d'intensité croissante, associées à des dysuries et une constipation. À l'examen, on note une masse bleutée bombant à l'hymen. L'échographie abdominopelvienne retrouve une collection liquidienne dans le vagin, avec un utérus de taille normale.\n\nQuestion : Quels examens sont utiles au diagnostic ? (2 à 3 réponses)",
    "options": [
      "Échographie abdominopelvienne",
      "IRM pelvienne en cas de doute",
      "Caryotype systématique",
      "Dosage de la 17-OHP",
      "Test à la progestérone"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Raisonnement\n\nL'échographie abdominopelvienne est l'examen de première intention : elle précise la présence de l'utérus, la taille, le rapport col/corps, l'épaisseur de l'endomètre et la collection vaginale. L'IRM pelvienne est utile en cas de doute sur une malformation complexe. Le caryotype n'est pas systématique ici (caractères sexuels présents, utérus présent). Le dosage de la 17-OHP et le test à la progestérone n'ont pas d'indication dans ce contexte.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-28",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas clinique n°1 — Adolescent de 14 ans, aménorrhée primaire]\nAnamnèse\nExamen clinique\nImagerie\nUne adolescente de 14 ans est amenée par sa mère pour absence de règles. Elle a un développement mammaire normal (Tanner S4) et une pilosité pubienne normale (P4). Depuis 3 mois, elle présente des douleurs pelviennes cycliques d'intensité croissante, associées à des dysuries et une constipation. À l'examen, on note une masse bleutée bombant à l'hymen. L'échographie abdominopelvienne retrouve une collection liquidienne dans le vagin, avec un utérus de taille normale.\n\nQuestion : Le traitement de choix est :",
    "options": [
      "Une œstroprogestation cyclique",
      "Une ouverture chirurgicale de l'hymen avec drainage",
      "Une cœlioscopie exploratrice",
      "Un traitement par hydrocortisone",
      "Une hystérectomie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Raisonnement\n\nLe traitement de l'hématocolpos est chirurgical : ouverture de l'hymen (ou du diaphragme vaginal) permettant le drainage du sang menstruel retenu. L'œstroprogestation n'a pas d'indication causale ici. La cœlioscopie n'est pas nécessaire. L'hydrocortisone traite l'HCS. L'hystérectomie est injustifiée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-29",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas clinique n°2 — Femme de 26 ans, aménorrhée secondaire et galactorrhée]\nAnamnèse\nBiologie\nImagerie\nUne femme de 26 ans, nulligeste, consulte pour aménorrhée secondaire de 8 mois avec galactorrhée bilatérale spontanée. Elle rapporte des céphalées et une baisse de l'acuité visuelle. Elle ne prend aucun médicament. La prolactine est à 180 ng/ml. L'IRM hypophysaire révèle un macroadénome avec extension suprasellaire.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Syndrome de Sheehan",
      "Adénome à prolactine (macroadénome)",
      "Hypophysite auto-immune",
      "Craniopharyngiome",
      "Syndrome de Kallmann"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Raisonnement\n\nL'association aménorrhée + galactorrhée + PRL > 100 ng/ml + macroadénome à l'IRM est typique de l'adénome à prolactine. Les céphalées et troubles visuels signent la compression chiasmatique. Le traitement est médical par agoniste dopaminergique (cabergoline), avec effet anti-tumoral ; la chirurgie est réservée aux macroadénomes avec retentissement ophtalmologique résistant.\n\nDistracteurs\n\nA — Sheehan : nécrose post-hémorragique, pas d'adénome.\n\nC — Hypophysite auto-immune : contexte auto-immun, pas d'adénome.\n\nD — Craniopharyngiome : calcifications supra-sellaires, pas d'hyperprolactinémie majeure.\n\nE — Kallmann : anosmie, hypogonadisme hypogonadotrope, pas de galactorrhée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-30",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas clinique n°2 — Femme de 26 ans, aménorrhée secondaire et galactorrhée]\nAnamnèse\nBiologie\nImagerie\nUne femme de 26 ans, nulligeste, consulte pour aménorrhée secondaire de 8 mois avec galactorrhée bilatérale spontanée. Elle rapporte des céphalées et une baisse de l'acuité visuelle. Elle ne prend aucun médicament. La prolactine est à 180 ng/ml. L'IRM hypophysaire révèle un macroadénome avec extension suprasellaire.\n\nQuestion : Le traitement médical de première intention est :",
    "options": [
      "La bromocriptine ou la cabergoline",
      "L'hydrocortisone",
      "La L-thyroxine",
      "La pompe à GnRH pulsatile",
      "L'acétate de cyprotérone"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Raisonnement\n\nLes agonistes dopaminergiques (bromocriptine, cabergoline) sont le traitement de première intention de l'adénome à prolactine. Ils inhibent la sécrétion de prolactine, rétablissent le cycle menstruel et ont un effet anti-tumoral significatif. La chirurgie est réservée aux macroadénomes avec retentissement ophtalmologique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-31",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas clinique n°2 — Femme de 26 ans, aménorrhée secondaire et galactorrhée]\nAnamnèse\nBiologie\nImagerie\nUne femme de 26 ans, nulligeste, consulte pour aménorrhée secondaire de 8 mois avec galactorrhée bilatérale spontanée. Elle rapporte des céphalées et une baisse de l'acuité visuelle. Elle ne prend aucun médicament. La prolactine est à 180 ng/ml. L'IRM hypophysaire révèle un macroadénome avec extension suprasellaire.\n\nQuestion : Parmi les causes d'hyperprolactinémie non tumorales, on retient : (2 à 3 réponses)",
    "options": [
      "Les neuroleptiques et antidépresseurs",
      "L'hypothyroïdie périphérique",
      "Le métoclopramide (Primpéran®)",
      "L'hypercorticisme",
      "Le syndrome de Turner"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Raisonnement\n\nLes causes non tumorales d'hyperprolactinémie comprennent : médicaments (neuroleptiques, antidépresseurs, opiacés, métoclopramide, dompéridone, alpha-méthyldopa, vérapamil), hypothyroïdie périphérique, hyperprolactinémie fonctionnelle ou idiopathique, hyperprolactinémie du post-partum. L'hypercorticisme et le Turner ne sont pas des causes classiques d'hyperprolactinémie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-32",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas clinique n°3 — Adolescent de 16 ans, impubérisme et petite taille]\nAnamnèse\nExamen clinique\nCaryotype\nUne adolescente de 16 ans consulte pour absence de règles et absence de développement mammaire. Elle mesure 142 cm (petite taille). À l'examen : thorax en bouclier, cou palmé, implantation basse des cheveux, pas de pilosité pubienne (Tanner P1), pas de développement mammaire (S1). Le caryotype révèle 45,X0. L'échographie pelvienne montre un utérus de petite taille et des ovaires non visualisés.\n\nQuestion : Quel est le diagnostic ?",
    "options": [
      "Syndrome de Turner",
      "Syndrome de Morris",
      "Syndrome de Rokitansky",
      "Syndrome de Kallmann",
      "Hyperplasie congénitale des surrénales"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Raisonnement\n\nLe tableau associe : aménorrhée primaire + impubérisme + petite taille + thorax en bouclier + cou palmé + caryotype 45,X0. C'est le syndrome de Turner (dysgénésie gonadique). L'utérus est présent mais petit, les ovaires sont absents (bandelettes fibreuses). Les gonadotrophines (FSH, LH) sont élevées, l'œstradiol très bas.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-33",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas clinique n°3 — Adolescent de 16 ans, impubérisme et petite taille]\nAnamnèse\nExamen clinique\nCaryotype\nUne adolescente de 16 ans consulte pour absence de règles et absence de développement mammaire. Elle mesure 142 cm (petite taille). À l'examen : thorax en bouclier, cou palmé, implantation basse des cheveux, pas de pilosité pubienne (Tanner P1), pas de développement mammaire (S1). Le caryotype révèle 45,X0. L'échographie pelvienne montre un utérus de petite taille et des ovaires non visualisés.\n\nQuestion : Quels éléments du bilan sont attendus ? (2 à 3 réponses)",
    "options": [
      "FSH et LH élevées",
      "Œstradiol bas",
      "Prolactine très élevée",
      "Bicuspidie aortique et coarctation à l'échocardiographie",
      "Rein en fer à cheval à l'échographie rénale"
    ],
    "correctAnswers": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Raisonnement\n\nTurner : hypogonadisme hypergonadotrope (FSH/LH élevées, E2 bas). Le bilan malformatif doit être exhaustif : bicuspidie aortique, coarctation, rein en fer à cheval, surdité de perception, dysthyroïdie, maladie cœliaque. La prolactine n'est pas élevée dans le Turner.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-34",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas clinique n°3 — Adolescent de 16 ans, impubérisme et petite taille]\nAnamnèse\nExamen clinique\nCaryotype\nUne adolescente de 16 ans consulte pour absence de règles et absence de développement mammaire. Elle mesure 142 cm (petite taille). À l'examen : thorax en bouclier, cou palmé, implantation basse des cheveux, pas de pilosité pubienne (Tanner P1), pas de développement mammaire (S1). Le caryotype révèle 45,X0. L'échographie pelvienne montre un utérus de petite taille et des ovaires non visualisés.\n\nQuestion : Le traitement de l'impubérisme repose sur :",
    "options": [
      "Le 17β-estradiol à faible dose, augmenté progressivement tous les 6 mois",
      "La cabergoline",
      "L'hydrocortisone",
      "La gonadectomie",
      "La pompe à GnRH"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Raisonnement\n\nLe traitement de l'impubérisme dans le Turner repose sur le 17β-estradiol à faible dose (1/8 de la dose adulte), augmenté par paliers tous les 6 mois, puis traitement séquentiel œstroprogestatif. L'hormone de croissance peut être proposée jusqu'à un âge osseux de 13 ans. La fertilité ultérieure repose sur le don d'ovocytes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-35",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas clinique n°4 — Femme de 29 ans, aménorrhée secondaire et hirsutisme]\nAnamnèse\nExamen clinique\nBiologie\nUne femme de 29 ans, mariée, consulte pour aménorrhée secondaire de 10 mois, précédée de cycles irréguliers (spanioménorrhée). Elle rapporte une prise de poids récente, un hirsutisme (score de Ferriman à 14) et de l'acné. À l'examen : obésité androïde (IMC 32). Biologie : LH élevée, FSH normale, testostérone modérément élevée, insulinorésistance (HOMA-IR élevé). Échographie : ovaires augmentés de volume, stroma épaissi, multiples follicules périphériques.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Hyperprolactinémie",
      "Syndrome des ovaires polymicrokystiques (SOPK)",
      "Insuffisance ovarienne précoce",
      "Hyperplasie congénitale des surrénales",
      "Syndrome de Sheehan"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Raisonnement\n\nLe SOPK associe : aménorrhée secondaire (souvent précédée de spanioménorrhée), obésité androïde, hyperandrogénie clinique (hirsutisme, acné), insulinorésistance, échographie évocatrice (ovaires augmentés de volume, stroma épaissi), biologie (LH élevée sans pic, FSH normale/basse, androgènes élevés, réponse explosive au test LH-RH).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-36",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas clinique n°4 — Femme de 29 ans, aménorrhée secondaire et hirsutisme]\nAnamnèse\nExamen clinique\nBiologie\nUne femme de 29 ans, mariée, consulte pour aménorrhée secondaire de 10 mois, précédée de cycles irréguliers (spanioménorrhée). Elle rapporte une prise de poids récente, un hirsutisme (score de Ferriman à 14) et de l'acné. À l'examen : obésité androïde (IMC 32). Biologie : LH élevée, FSH normale, testostérone modérément élevée, insulinorésistance (HOMA-IR élevé). Échographie : ovaires augmentés de volume, stroma épaissi, multiples follicules périphériques.\n\nQuestion : Quelles options thérapeutiques sont adaptées ? (2 à 3 réponses)",
    "options": [
      "Acétate de cyprotérone (Androcure®)",
      "Pilule œstroprogestative",
      "Cabergoline",
      "Induction ovulatoire ultérieure si désir de grossesse",
      "Surveillance métabolique (glycémie, lipides)"
    ],
    "correctAnswers": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Raisonnement\n\nLe traitement anti-gonadotrope du SOPK repose sur l'acétate de cyprotérone et/ou la pilule œstroprogestative. Une induction ovulatoire peut être proposée ultérieurement en cas de désir de grossesse. La surveillance métabolique est indispensable (risque de dyslipidémie, diabète de type 2, risque cardio-vasculaire). La cabergoline n'a pas d'indication (pas d'hyperprolactinémie).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-37",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas clinique n°4 — Femme de 29 ans, aménorrhée secondaire et hirsutisme]\nAnamnèse\nExamen clinique\nBiologie\nUne femme de 29 ans, mariée, consulte pour aménorrhée secondaire de 10 mois, précédée de cycles irréguliers (spanioménorrhée). Elle rapporte une prise de poids récente, un hirsutisme (score de Ferriman à 14) et de l'acné. À l'examen : obésité androïde (IMC 32). Biologie : LH élevée, FSH normale, testostérone modérément élevée, insulinorésistance (HOMA-IR élevé). Échographie : ovaires augmentés de volume, stroma épaissi, multiples follicules périphériques.\n\nQuestion : Quel examen permettrait d'éliminer une hyperplasie congénitale des surrénales à révélation tardive ?",
    "options": [
      "Le dosage de la 17-hydroxyprogestérone",
      "Le dosage de la prolactine",
      "La TSH",
      "L'AMH",
      "Le caryotype"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Raisonnement\n\nUne 17-OHP élevée (> 0,2 ng/l) oriente vers une HCS à révélation tardive. Le traitement est alors l'hydrocortisone + conseil génétique. Le dosage de la prolactine élimine une hyperprolactinémie ; la TSH élimine une hypothyroïdie ; l'AMH évalue la réserve ovarienne ; le caryotype élimine une anomalie de la détermination sexuelle.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-38",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas clinique n°5 — Femme de 34 ans, aménorrhée du post-partum]\nAnamnèse\nExamen clinique\nBiologie\nUne femme de 34 ans, 3ᵉ geste, consulte 6 mois après un accouchement hémorragique (délivrance artificielle + révision utérine) pour aménorrhée et absence de montée laiteuse. Elle rapporte une fatigue intense, une prise de poids, une intolérance au froid et une pâleur. À l'examen : hypotension, asthénie. Biologie : FSH et LH basses, œstradiol bas, prolactine basse, TSH basse avec T4 basse, cortisol bas.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Syndrome de Sheehan",
      "Hyperprolactinémie",
      "Syndrome de Kallmann",
      "SOPK",
      "Insuffisance ovarienne précoce"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Raisonnement\n\nLe tableau associe : accouchement hémorragique + aménorrhée + agalactie + insuffisance hypophysaire globale (déficit gonadotrope, thyréotrope, corticotrope). C'est le syndrome de Sheehan (nécrose hypophysaire ischémique du post-partum). Le traitement est substitutif à vie : œstroprogestatifs + L-thyroxine + hydrocortisone.\n\nDistracteurs\n\nB — Hyperprolactinémie : PRL élevée, galactorrhée, pas d'agalactie.\n\nC — Kallmann : anosmie, pas de contexte obstétrical.\n\nD — SOPK : LH élevée, androgènes élevés, pas d'insuffisance hypophysaire globale.\n\nE — Insuffisance ovarienne précoce : FSH élevée, pas de déficit thyréotrope/corticotrope.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-39",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas clinique n°5 — Femme de 34 ans, aménorrhée du post-partum]\nAnamnèse\nExamen clinique\nBiologie\nUne femme de 34 ans, 3ᵉ geste, consulte 6 mois après un accouchement hémorragique (délivrance artificielle + révision utérine) pour aménorrhée et absence de montée laiteuse. Elle rapporte une fatigue intense, une prise de poids, une intolérance au froid et une pâleur. À l'examen : hypotension, asthénie. Biologie : FSH et LH basses, œstradiol bas, prolactine basse, TSH basse avec T4 basse, cortisol bas.\n\nQuestion : Quels traitements substitutifs sont indiqués ? (2 à 3 réponses)",
    "options": [
      "Œstroprogestatifs",
      "L-thyroxine",
      "Hydrocortisone",
      "Cabergoline",
      "Pompe à GnRH pulsatile"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Raisonnement\n\nLe traitement du syndrome de Sheehan est substitutif à vie : œstroprogestatifs (déficit gonadotrope), L-thyroxine (déficit thyréotrope), hydrocortisone (déficit corticotrope). La cabergoline n'a pas d'indication (PRL basse). La pompe à GnRH pulsatile n'est pas nécessaire ici (le déficit est global et le traitement œstroprogestatif suffit pour le cycle).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-40",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas clinique n°5 — Femme de 34 ans, aménorrhée du post-partum]\nAnamnèse\nExamen clinique\nBiologie\nUne femme de 34 ans, 3ᵉ geste, consulte 6 mois après un accouchement hémorragique (délivrance artificielle + révision utérine) pour aménorrhée et absence de montée laiteuse. Elle rapporte une fatigue intense, une prise de poids, une intolérance au froid et une pâleur. À l'examen : hypotension, asthénie. Biologie : FSH et LH basses, œstradiol bas, prolactine basse, TSH basse avec T4 basse, cortisol bas.\n\nQuestion : Quel diagnostic faut-il éliminer en priorité devant une aménorrhée du post-partum ?",
    "options": [
      "Une grossesse",
      "Un adénome à prolactine",
      "Un syndrome de Turner",
      "Un SOPK",
      "Un syndrome de Rokitansky"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Raisonnement\n\nDevant toute aménorrhée secondaire, il faut éliminer une grossesse en priorité par le dosage de β-hCG et l'échographie. C'est un réflexe systématique, y compris dans le post-partum (retour de couches possible avant le retour des règles).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-1",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes, laquelle définit le plus exactement l'endométriose ?",
    "options": [
      "Présence de tissu endométrial ectopique en continuité avec l'endomètre utérin",
      "Présence de tissu endométrial ectopique situé à distance de l'endomètre, sans connexion avec lui, comportant à la fois des glandes et du stroma",
      "Présence de glandes endométriales isolées, sans stroma associé",
      "Prolifération bénigne de fibres musculaires lisses du myomètre",
      "Affection infectieuse chronique hormono-dépendante du pelvis"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La définition classique associe trois caractères indissociables : (1) tissu endométrial ectopique, (2) à distance de l'endomètre et sans connexion avec lui, (3) comportant glandes ET stroma.\n\nA — Faux : la continuité avec l'endomètre définit l'adénomyose (tissu endométrial au sein du myomètre), pas l'endométriose.\n\nC — Faux : la présence de stroma (chorion cytogène) est un critère histologique indispensable ; des glandes isolées ne suffisent pas.\n\nD — Faux : il s'agit de la définition du fibrome (léiomyome).\n\nE — Faux : l'endométriose est chronique, bénigne, hormono-dépendante, mais non infectieuse. La confusion avec une PID est un piège classique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-2",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Quelles localisations peuvent être le siège de foyers d'endométriose ? (2 à 3 réponses exactes)",
    "options": [
      "Péritoine pelvien",
      "Ovaire",
      "Poumon",
      "Pancréas",
      "Glande thyroïde"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les foyers siègent le plus souvent dans le pelvis : péritoine, ovaires, intestin, vessie, rectum, myomètre. Plus rarement en extra-pelvien : peau, poumons, cicatrice chirurgicale.\n\nA et B — Vrais : localisations pelviennes de première ligne, l'ovaire étant le siège de l'endémétriome.\n\nC — Vrai : l'atteinte pulmonaire est une localisation extra-pelvienne rare mais décrite (hémoptysies cataméniales).\n\nD — Faux : le pancréas ne fait pas partie des localisations décrites dans le cours ; ne pas extrapoler toute localisation abdominale.\n\nE — Faux : la thyroïde n'est pas une localisation d'endométriose (à distinguer de l'endémétriose de la cicatrice cervicale ou de la paroi abdominale).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-3",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Concernant l'épidémiologie de l'endométriose, quelle proposition est exacte ?",
    "options": [
      "Elle touche 1 à 2 % des femmes en âge de procréer",
      "Elle touche 10 à 15 % des femmes en âge de procréer et près de la moitié des femmes infertiles",
      "Elle touche préférentiellement les femmes ménopausées",
      "Elle n'a aucun retentissement psychologique",
      "Elle est exceptionnelle en Algérie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endométriose est une affection gynécologique très fréquente et complexe : 10 à 15 % des femmes en âge de procréer et près de la moitié des femmes infertiles.\n\nA — Faux : sous-estimation majeure ; le retard diagnostique explique les chiffres historiquement bas.\n\nC — Faux : maladie hormono-dépendante : elle concerne la femme en âge de procréer et régresse généralement après la ménopause.\n\nD — Faux : le cours insiste sur le retentissement psychologique (douleur chronique, infertilité, fluctuations de l'humeur).\n\nE — Faux : aucune donnée ne permet d'affirmer une exception algérienne ; c'est une pathologie universelle.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-4",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant les signes fonctionnels de l'endométriose sont exactes, SAUF :",
    "options": [
      "Les dysménorrhées secondaires sont les signes les plus évocateurs",
      "L'intensité de la douleur est étroitement corrélée à la sévérité des lésions",
      "La dyspareunie et la douleur pelvienne chronique font partie du tableau",
      "Une dyschésie et une dysurie peuvent révéler une atteinte postérieure ou vésicale",
      "Une fatigue chronique et des fluctuations de l'humeur peuvent s'observer"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le cours est explicite : « l'intensité de la douleur est sans aucune corrélation avec la sévérité des lésions ». Une endométriose minime peut être atrocement douloureuse, et une forme profonde extensive peut rester pauci-symptomatique.\n\nA — Vrai : les dysménorrhées secondaires (apparues après des cycles initialement indolores) sont les plus évocatrices.\n\nC — Vrai : dyspareunie et douleur pelvienne chronique complètent la triade douloureuse classique.\n\nD — Vrai : dyschésie (défécation douloureuse) et dysurie orientent vers une atteinte profonde rectale ou vésicale.\n\nE — Vrai : les symptômes non spécifiques (pesanteur abdominale, asthénie chronique, fluctuations de l'humeur) altèrent l'état général.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-5",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Concernant l'examen physique dans l'endométriose, quelle proposition est FAUSSE ?",
    "options": [
      "L'examen gynécologique se fait de préférence en période menstruelle",
      "Un examen gynécologique normal élimine formellement le diagnostic",
      "L'examen au spéculum peut révéler une lésion rétractile et/ou bleutée",
      "Le toucher vaginal recherche une induration rétro-cervicale des ligaments utéro-sacrés",
      "Le toucher rectal est réalisé en cas de suspicion de lésions postérieures"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'examen peut être totalement normal — ce qui n'élimine en rien le diagnostic. C'est un piège docimologique majeur : normalité clinique ≠ absence de maladie.\n\nA — Vrai : la période menstruelle majore la sensibilité des lésions et facilite leur repérage.\n\nC — Vrai : lésion rétractile/bleutée, ou zone érythémateuse d'aspect cartonné saignant au contact.\n\nD — Vrai : l'induration rétro-cervicale des ligaments utéro-sacrés, de la face postérieure de l'isthme ou de la cloison recto-vaginale est un signe clé.\n\nE — Vrai : le TR explore les lésions postérieures (cloison recto-vaginale, torus utérin).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-6",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Quels éléments cliniques évoquent une adénomyose associée ? (2 à 3 réponses exactes)",
    "options": [
      "Utérus augmenté de volume",
      "Douleur à la mobilisation ou à la pression utérine",
      "Masse annexielle latéro-utérine mobile et indolore",
      "Utérus peu mobile, voire fixé",
      "Vaginisme isolé sans autre anomalie"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "L'adénomyose donne un utérus augmenté de volume, douloureux à la mobilisation/pression et peu mobile voire fixé (par réaction fibreuse et adhérences).\n\nA, B, D — Vrais : c'est la triade sémiologique utérine de l'adénomyose.\n\nC — Faux : une masse annexielle correspond à un endémétriome (endométriose ovarienne), pas à l'adénomyose ; de plus elle est typiquement douloureuse et souvent fixée.\n\nE — Faux : le vaginisme est un trouble fonctionnel, non spécifique de l'adénomyose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-7",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Quel est l'examen d'imagerie de première intention devant une suspicion d'endométriose pelvienne ?",
    "options": [
      "IRM pelvienne",
      "Échographie pelvienne",
      "Hystérosalpingographie",
      "TDM abdomino-pelvienne",
      "Laparoscopie exploratrice"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'échographie pelvienne est l'examen de 1re intention : non invasive, disponible, peu coûteuse. Elle peut être normale sans éliminer le diagnostic.\n\nA — Faux : l'IRM est de 2e intention ; elle est l'examen de référence pour la cartographie d'extension.\n\nC — Faux : l'HSG est utile dans le bilan d'infertilité, pas en dépistage de première ligne.\n\nD — Faux : la TDM n'a pas sa place dans le diagnostic de l'endométriose (faible contraste des tissus mous).\n\nE — Faux : la laparoscopie est l'examen de référence diagnostique, mais elle est invasive : jamais en première intention.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-8",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Quel est l'aspect échographique typique d'un endométriome ?",
    "options": [
      "Kyste uniloculaire à contenu anéchogène pur",
      "Image kystique de forme régulière, à contenu finement échogène homogène",
      "Masse solide hypervasculaire à vascularisation centrale",
      "Kyste multiloculaire à cloisons épaisses avec végétations",
      "Utérus globuleux et hétérogène sans formation kystique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endométriome contient du vieux sang : il se traduit par une image kystique régulière, à contenu finement échogène homogène (aspect classique en « verre dépoli »).\n\nA — Faux : un contenu anéchogène pur évoque un kyste fonctionnel simple, non un endémétriome.\n\nC — Faux : une masse solide hypervasculaire doit faire évoquer une tumeur ovarienne maligne.\n\nD — Faux : cloisons épaisses et végétations = critères de suspicion de malignité, à ne jamais attribuer à un endémétriome.\n\nE — Faux : cette description correspond à l'adénomyose (utérus globuleux hétérogène), pas à l'endémétriome.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-9",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant l'IRM pelvienne dans l'endométriose, quelle proposition est JUSTE ?",
    "options": [
      "C'est l'examen de première intention devant toute suspicion",
      "C'est l'examen de référence pour apprécier l'extension de la maladie, avec une cartographie précise des lésions",
      "Elle supprime définitivement le recours à la laparoscopie",
      "Elle est contre-indiquée chez la femme jeune en âge de procréer",
      "Elle n'explore pas les localisations profondes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'IRM est l'examen de seconde intention, de référence pour l'extension : elle recherche les kystes endométriosiques uni- ou bilatéraux et surtout les localisations profondes, avec une cartographie guidant le choix thérapeutique.\n\nA — Faux : l'échographie reste la première intention.\n\nC — Faux : l'IRM ne remplace pas la laparoscopie, qui reste l'examen de référence à visée diagnostique et biopsique.\n\nD — Faux : aucune contre-indication liée à l'âge ou au statut de procréation (seules les contre-indications habituelles de l'IRM s'appliquent).\n\nE — Faux : c'est précisément son point fort : l'exploration de l'endométriose profonde.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-10",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Quelles images sont évocatrices d'une adénomyose diffuse à l'hystérosalpingographie ? (2 à 3 réponses exactes)",
    "options": [
      "Diverticules des bords et du fond utérin",
      "Agrandissement global de la cavité utérine",
      "Angulation en baïonnette de l'isthme utérin, image en parasol ou en champignon",
      "Le produit de contraste entoure la partie supérieure de l'ovaire sans accéder à la partie inférieure",
      "Obstruction tubaire bilatérale systématique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "L'adénomyose diffuse se traduit par des diverticules des bords et du fond, un agrandissement global de la cavité, des images d'adhérences, une angulation en baïonnette de l'isthme et une image en parasol ou en champignon.\n\nA, B, C — Vrais : ce sont les signes radiologiques classiques.\n\nD — Faux : il s'agit du signe de l'endémétriome : le contraste coiffe l'ovaire sans atteindre sa partie inférieure à cause des adhérences.\n\nE — Faux : l'obstruction tubaire n'est pas un signe d'adénomyose ; l'infertilité de l'endométriose est multifactorielle (ovarienne, tubaire, Douglas).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-11",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Concernant la laparoscopie dans l'endométriose, quelle proposition est exacte ?",
    "options": [
      "C'est l'examen de première intention devant une dysménorrhée",
      "C'est l'examen de référence, permettant de visualiser les lésions, d'en préciser la topographie, de réaliser des biopsies et de classer la maladie",
      "Elle n'a qu'une visée thérapeutique et jamais diagnostique",
      "Elle ne permet pas la classification de l'endométriose",
      "Elle est formellement contre-indiquée en cas d'infertilité"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La laparoscopie est l'examen de référence : elle visualise les lésions, précise leur topographie, permet les biopsies anatomo-pathologiques et la classification de l'endométriose. Elle a donc une double visée, diagnostique et thérapeutique.\n\nA — Faux : examen invasif : jamais en première intention devant une simple dysménorrhée.\n\nC — Faux : elle est d'abord diagnostique (biopsies), puis thérapeutique (coagulation, adhésiolyse, résection).\n\nD — Faux : elle permet la classification peropératoire des lésions.\n\nE — Faux : elle fait partie de l'arsenal thérapeutique de l'infertilité associée à l'endométriose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-12",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Quels aspects lésionnels peut-on retrouver à la laparoscopie ? (2 à 3 réponses exactes)",
    "options": [
      "Régions hypervascularisées",
      "Pigmentation jaunâtre ou brunâtre",
      "Lésions rouges, de type pétéchies",
      "Multiples kystes à contenu séreux clair, translucides",
      "Plages de tissu graisseux nécrotique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les lésions laparoscopiques typiques associent : zones hypervascularisées, pigmentation jaunâtre ou brunâtre, lésions rouges (pétéchies) et adhérences. La multiplicité des aspects (lésions « poudrées », « flamme », « bleutées ») explique la difficulté diagnostique.\n\nA, B, C — Vrais : décrits dans le cours.\n\nD — Faux : un contenu séreux clair translucide évoque un kyste fonctionnel ; l'endométriome contient un liquide épais, « chocolat » (vieux sang).\n\nE — Faux : la nécrose graisseuse n'est pas un aspect d'endométriose (évoquer plutôt une cytostéatonécrose ou une endométriose cicatricielle de paroi).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-13",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Concernant les théories étiopathogéniques de l'endométriose, quelle proposition est FAUSSE ?",
    "options": [
      "L'étiologie exacte demeure inconnue",
      "La théorie de la menstruation rétrograde est l'une des hypothèses retenues",
      "Des facteurs génétiques et des facteurs toxiques de l'environnement (dioxine) ont été incriminés",
      "La dissémination des foyers peut se faire par voie lymphatique, sanguine ou péritonéale",
      "L'endométriose survient sur un terrain d'hypoestrogénie"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "L'endométriose est hormono-dépendante et se développe sur un terrain d'HYPERœstrogénie. C'est cette dépendance œstrogénique qui fonde toute la stratégie thérapeutique (induire une hypoestrogénie médicale).\n\nA — Vrai : l'étiologie reste inconnue ; plusieurs facteurs sont incriminés.\n\nB — Vrai : la menstruation rétrograde est l'hypothèse la plus classique (reflux de sang menstruel par les trompes).\n\nC — Vrai : facteurs génétiques et toxiques environnementaux (dioxine) sont évoqués.\n\nD — Vrai : dissémination lymphatique, hématogène ou péritonéale, les foyers restant soumis aux modifications cycliques.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-14",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "La théorie de la métaplasie postule que :",
    "options": [
      "Des cellules endométriales migrent par voie lymphatique jusqu'au péritoine",
      "Le tissu local se transformerait en tissu endométrial sous l'influence cyclique des œstrogènes",
      "Le sang menstruel reflue par les trompes vers la cavité péritonéale",
      "L'endomètre s'invagine dans le myomètre au cours des cycles",
      "Une infection chronique du péritoine induit une métaplasie glandulaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Selon la théorie de la métaplasie, le tissu endométriosique résulterait de la transformation du tissu local en tissu endométrial, sous l'influence cyclique des œstrogènes (terrain d'hyperœstrogénie).\n\nA — Faux : description de la dissémination lymphatique, pas de la métaplasie.\n\nC — Faux : c'est la théorie de la menstruation rétrograde (Sampson).\n\nD — Faux : c'est la définition de l'adénomyose, entité distincte.\n\nE — Faux : aucune théorie infectieuse n'est retenue dans l'endométriose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-15",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Quels sont les traitements médicaux utilisables en première intention dans la prise en charge de la douleur de l'endométriose ? (2 à 3 réponses exactes)",
    "options": [
      "AINS",
      "Contraceptifs oraux œstroprogestatifs monophasiques en continu",
      "Progestatifs",
      "Antibiotiques à large spectre",
      "Corticothérapie au long cours"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le traitement médical de première intention repose sur : AINS, contraceptifs oraux œstroprogestatifs monophasiques en continu, progestatifs, et peut s'étendre aux antigonadotropines (6 mois), aux agonistes de la GnRH et au stérilet au lévonorgestrel.\n\nA, B, C — Vrais : options de première ligne, toutes antalgiques et/ou hypoestrogénisantes.\n\nD — Faux : l'endométriose n'est pas une infection ; les antibiotiques n'ont aucune place (piège de la confusion avec une PID).\n\nE — Faux : la corticothérapie au long cours n'est pas un traitement de l'endométriose et expose à des effets délétères majeurs.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-16",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "En cas d'échec du traitement médical de la douleur, le traitement chirurgical consiste en :",
    "options": [
      "Une hystérectomie systématique avec annexectomie bilatérale d'emblée",
      "Une coagulation des foyers endométriosiques, une adhésiolyse, voire une résection des foyers ectopiques dans les formes sévères",
      "Une ovariectomie bilatérale de première intention",
      "Une simple cœlioscopie diagnostique sans geste",
      "Une radiothérapie pelvienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La chirurgie de deuxième ligne associe : coagulation des foyers endométriosiques, adhésiolyse et, dans les formes sévères, résection des foyers ectopiques.\n\nA et C — Faux : gestes mutilants et irréversibles, jamais d'emblée chez une femme en âge de procréer ; ils se discutent au cas par cas, en dernier recours, après échec de tout le reste.\n\nD — Faux : la cœlioscopie doit être diagnostique ET thérapeutique dans le même temps quand elle est indiquée.\n\nE — Faux : la radiothérapie n'a aucune place dans une maladie bénigne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-17",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Concernant les agonistes de la GnRH, quelle proposition est JUSTE ?",
    "options": [
      "Ils stimulent durablement la sécrétion de FSH et de LH",
      "Ils inhibent la synthèse des œstrogènes et de la progestérone, ce qui assèche les foyers d'endométriose",
      "Ils constituent le traitement de toute première intention",
      "Ils sont dépourvus de tout effet indésirable",
      "Leur durée d'utilisation est illimitée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les agonistes de la GnRH inhibent la synthèse d'œstrogènes et de progestatifs, créant une hypoestrogénie qui « assèche » les foyers d'endométriose — d'où leur efficacité mais aussi leurs effets secondaires.\n\nA — Faux : après une phase de stimulation initiale, l'effet est une désensibilisation hypophysaire aboutissant à une freination, non à une stimulation durable.\n\nC — Faux : ils viennent après les traitements de première ligne (AINS, COP en continu, progestatifs).\n\nD — Faux : l'hypoestrogénie induite entraîne des effets climatériques et une perte de densité minérale osseuse.\n\nE — Faux : les antigonadotropines sont prescrites pendant 6 mois ; une durée prolongée n'est pas admise sans précaution.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-18",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Concernant la stratégie thérapeutique devant un endométriome, quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "Taille < 30 mm et asymptomatique : abstention thérapeutique",
      "Taille < 30 mm et symptomatique : traitement médical, puis traitement chirurgical en cas d'échec",
      "Taille > 30 mm : traitement chirurgical",
      "Taille > 30 mm et asymptomatique : abstention thérapeutique",
      "Chirurgie d'emblée quel que soit le taille et la symptomatologie"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "L'algorithme est strictement calibré sur la taille (seuil de 30 mm) et la symptomatologie :\n< 30 mm asymptomatique → abstention ; < 30 mm symptomatique → médical d'abord, chirurgical si échec ; > 30 mm → chirurgical.\n\nA, B, C — Vrais : correspondent exactement aux recommandations du cours.\n\nD — Faux : au-delà de 30 mm, la chirurgie est indiquée quelle que soit la symptomatologie — piège classique de l'item « asymptomatique ».\n\nE — Faux : la chirurgie n'est pas systématique : les petits endométriomes asymptomatiques relèvent de l'abstention.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-19",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Concernant le traitement de la stérilité associée à l'endométriose, quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "Un bilan étiologique du couple infertile est nécessaire avant toute décision thérapeutique",
      "La stratégie peut être chirurgicale ou relever d'une assistance médicale à la procréation",
      "La perturbation de la fertilité dépend de la sévérité de la maladie",
      "Le traitement hormonal seul corrige toujours l'infertilité",
      "L'endométriose n'altère jamais la fertilité"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La prise en charge de l'infertilité impose un bilan étiologique du couple avant de choisir entre chirurgie et AMP. L'anomalie responsable peut siéger au niveau des ovaires, des trompes ou du cul-de-sac de Douglas, et la perturbation dépend de la sévérité de la maladie.\n\nA, B, C — Vrais : conformes au cours.\n\nD — Faux : le traitement hormonal traite la douleur et assèche les foyers, il ne restaure pas à lui seul la fertilité (il est d'ailleurs contraceptif).\n\nE — Faux : près de la moitié des femmes infertiles sont atteintes d'endométriose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-20",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant l'évolution et la surveillance de l'endométriose, quelle proposition est FAUSSE ?",
    "options": [
      "L'évolution spontanée est variable : elle peut s'étendre, régresser ou se stabiliser",
      "Le taux de récidive après chirurgie est de 20 % à 5 ans",
      "Il existe un consensus international parfaitement établi sur la surveillance",
      "Le suivi varie en fonction de la symptomatologie, des lésions et des traitements administrés",
      "Le traitement chirurgical ou hormonal peut modifier l'évolution naturelle"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le cours est catégorique : « il n'existe pas de consensus pour la surveillance ». C'est un point souvent transformé en piège docimologique.\n\nA — Vrai : évolution spontanée variable : extension, régression ou stabilisation.\n\nB — Vrai : récidive post-chirurgicale de 20 % à 5 ans — chiffre à retenir.\n\nD — Vrai : le suivi est individualisé selon la symptomatologie, les lésions et les traitements.\n\nE — Vrai : les traitements chirurgicaux ou hormonaux influencent l'évolution.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-21",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Quels sont les facteurs de risque d'endométriose mentionnés dans le cours ? (2 à 3 réponses exactes)",
    "options": [
      "Puberté précoce",
      "Cycles courts",
      "Irrégularité menstruelle",
      "Ménopause précoce",
      "Multiparité"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les facteurs de risque retenus sont : puberté précoce, cycles courts, irrégularité menstruelle — tous favorisant un exposition menstruelle accrue (théorie de la menstruation rétrograde).\n\nA, B, C — Vrais : plus de cycles = plus de reflux menstruel potentiel.\n\nD — Faux : la ménopause précoce réduit l'exposition hormonale cyclique, elle n'est pas un facteur de risque.\n\nE — Faux : la multiparité n'est pas un facteur de risque décrit ; la nulliparité est en revanche fréquemment associée dans les séries.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-22",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'anatomopathologie sont exactes, SAUF :",
    "options": [
      "Dans l'adénomyose, l'utérus est augmenté de volume dans son ensemble",
      "La paroi utérine est hypertrophiée, avec de multiples kystes diverticulaires remplis de sang noirâtre",
      "Histologiquement, on trouve des glandes endométriales entourées de chorion cytogène et des faisceaux de fibres musculaires lisses",
      "L'examen anatomopathologique n'a aucun intérêt diagnostique",
      "Les lésions comportent à la fois des glandes et du stroma"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "L'anatomopathologie est essentielle : c'est elle qui confirme le diagnostic (glandes + chorion cytogène), élimine une lésion maligne et permet la classification. Les biopsies per-laparoscopiques sont réalisées précisément à cette fin.\n\nA et B — Vrais : macroscopie de l'adénomyose : utérus augmenté, paroi hypertrophiée, kystes diverticulaires à sang noirâtre.\n\nC — Vrai : description histologique exacte (glandes + chorion cytogène + fibres musculaires lisses).\n\nE — Vrai : c'est le critère diagnostique fondateur, déjà énoncé dans la définition.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-23",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Concernant les manifestations hémorragiques de l'endométriose, quelle proposition est JUSTE ?",
    "options": [
      "Les ménorragies et métrorragies évoquent une endométriose cervicale",
      "Les saignements de contact évoquent surtout une adénomyose",
      "Les ménorragies/métrorragies évoquent l'adénomyose, tandis que les saignements de contact post-coïtaux évoquent une endométriose cervicale",
      "L'hématurie cyclique n'a aucun rapport avec l'endométriose",
      "Les rectorragies sont toujours d'origine hémorroïdaire"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La forme du saignement oriente vers le siège de l'endométriose : ménorragies/métrorragies → adénomyose ; saignements de contact (surtout post-coïtaux) → endométriose cervicale ; hématurie cyclique → atteinte vésicale ; rectorragies cycliques → atteinte rectale.\n\nA et B — Faux : inversion classique des deux tableaux, piège docimologique très fréquent.\n\nD — Faux : l'hématurie cyclique est un signe typique d'atteinte vésicale.\n\nE — Faux : des rectorragies cycliques, cataméniales, doivent faire évoquer une endométriose rectale ou du septum recto-vaginal.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-24",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Concernant le diagnostic positif de l'endométriose, quelle proposition est FAUSSE ?",
    "options": [
      "Le diagnostic est difficile en raison de la diversité des symptômes",
      "C'est une affection bénigne mais qui évolue en s'aggravant et se dissémine",
      "Une échographie pelvienne normale élimine formellement le diagnostic",
      "La précocité du diagnostic conditionne l'efficacité du traitement",
      "Les tableaux vont de l'endométriose légère à l'endométriose sévère"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'échographie peut être normale sans éliminer le diagnostic — tout comme l'examen clinique. C'est le piège transversal de tout le chapitre : la normalité des examens non invasifs n'a aucune valeur d'exclusion.\n\nA — Vrai : la diversité des symptômes génère des tableaux très différents et retarde le diagnostic.\n\nB — Vrai : maladie bénigne mais évolutive et disséminante, d'où l'enjeu de la précocité.\n\nD — Vrai : la précocité conditionne l'efficacité thérapeutique.\n\nE — Vrai : le spectre va de la forme légère à la forme sévère.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-25",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant la prise en charge globale de l'endométriose sont exactes, SAUF :",
    "options": [
      "Le traitement est adapté selon la manifestation clinique",
      "La prise en charge psychologique des patientes douloureuses chroniques améliore les résultats du traitement",
      "Le stérilet au lévonorgestrel fait partie des options médicales",
      "L'hystérectomie avec annexectomie bilatérale est le traitement de première intention de la douleur chez la femme jeune",
      "La prise en charge nécessite une approche multidisciplinaire"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "La chirurgie radicale n'est jamais un traitement de première intention chez la femme jeune : elle est mutilante et irréversible. La première ligne est médicale.\n\nA — Vrai : la stratégie est individualisée selon la plainte dominante (douleur, endémétriome, infertilité).\n\nB — Vrai : la prise en charge psychologique améliore les résultats dans les douleurs pelviennes chroniques.\n\nC — Vrai : le stérilet au lévonorgestrel est cité parmi les options médicales.\n\nE — Vrai : la conclusion du cours insiste sur l'approche multidisciplinaire pour limiter l'impact sur la vie quotidienne et la fertilité.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-26",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Douleurs pelviennes chroniques et infertilité — CHU, consultation de gynécologie]\nVignette clinique\nMme K., 32 ans, nulligeste, mariée depuis 3 ans, consulte pour des dysménorrhées secondaires intenses apparues il y a 3 ans (antérieurement cycles indolores), des dyspareunies profondes et une dyschésie cataméniale. Aucune grossesse après 18 mois de rapports réguliers non protégés.\n\nToucher vaginal Utérus rétroversé, peu mobile, fixé ; induration douloureuse des ligaments utéro-sacrés ; nodule du cul-de-sac de Douglas.\n\nÉchographie pelvienne Kyste ovarien gauche de 42 mm, à parois régulières, contenu finement échogène homogène.\n\nBiologie Bilan hormonal et sérologies sans particularité ; βhCG négatif.\n\nContexte Aucun antécédent chirurgical ; pas de contraception depuis 2 ans (désir de grossesse).\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Adénomyose isolée",
      "Endométriose pelvienne profonde avec endométriome ovarien gauche",
      "Kyste lutéal hémorragique",
      "Kyste dermoïde de l'ovaire",
      "Abcès tubo-ovarien"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association est caricaturale : dysménorrhée secondaire + dyspareunie profonde + dyschésie cataméniale = endométriose profonde postérieure (ligaments utéro-sacrés, cul-de-sac de Douglas) ; l'image échographique de kyste régulier à contenu finement échogène de 42 mm = endémétriome.\n\nA — Faux : l'adénomyose donne un utérus globuleux douloureux avec ménorragies, mais n'explique ni le nodule du Douglas ni l'endémétriome.\n\nC — Faux : un kyste hémorragique est aigu, résolutif en 1–3 cycles, à contenu hétérogène/fibrine, non associé à une dyschésie cataméniale.\n\nD — Faux : le kyste dermoïde est hyperéchogène (graisse, calcifications), non finement échogène.\n\nE — Faux : l'abcès tubo-ovarien s'accompagne d'un syndrome infectieux (fièvre, hyperleucocytose), absent ici.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-27",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Douleurs pelviennes chroniques et infertilité — CHU, consultation de gynécologie]\nVignette clinique\nMme K., 32 ans, nulligeste, mariée depuis 3 ans, consulte pour des dysménorrhées secondaires intenses apparues il y a 3 ans (antérieurement cycles indolores), des dyspareunies profondes et une dyschésie cataméniale. Aucune grossesse après 18 mois de rapports réguliers non protégés.\n\nToucher vaginal Utérus rétroversé, peu mobile, fixé ; induration douloureuse des ligaments utéro-sacrés ; nodule du cul-de-sac de Douglas.\n\nÉchographie pelvienne Kyste ovarien gauche de 42 mm, à parois régulières, contenu finement échogène homogène.\n\nBiologie Bilan hormonal et sérologies sans particularité ; βhCG négatif.\n\nContexte Aucun antécédent chirurgical ; pas de contraception depuis 2 ans (désir de grossesse).\n\nQuestion : Quels examens sont utiles pour préciser l'extension de la maladie et le bilan de cette patiente ? (2 à 3 réponses exactes)",
    "options": [
      "IRM pelvienne",
      "Hystérosalpingographie dans le cadre du bilan d'infertilité",
      "TDM abdomino-pelvienne avec injection",
      "Échographie pelvienne endocavitaire",
      "Radiographie thoracique systématique"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "L'IRM est l'examen de référence pour la cartographie d'extension (surtout profonde) ; l'échographie endocavitaire précise l'endémétriome et le pelvis ; l'HSG trouve sa place dans le bilan d'infertilité (perméabilité tubaire).\n\nA, B, D — Vrais : hiérarchisation conforme au cours (écho → IRM ; HSG si infertilité).\n\nC — Faux : la TDM n'a pas d'indication dans l'endométriose (mauvais contraste des tissus mous, irradiation inutile chez une femme jeune).\n\nE — Faux : la radiographie thoracique n'est pas un examen systématique ; elle ne se discuterait qu'en cas de suspicion d'atteinte pulmonaire rare.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-28",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Douleurs pelviennes chroniques et infertilité — CHU, consultation de gynécologie]\nVignette clinique\nMme K., 32 ans, nulligeste, mariée depuis 3 ans, consulte pour des dysménorrhées secondaires intenses apparues il y a 3 ans (antérieurement cycles indolores), des dyspareunies profondes et une dyschésie cataméniale. Aucune grossesse après 18 mois de rapports réguliers non protégés.\n\nToucher vaginal Utérus rétroversé, peu mobile, fixé ; induration douloureuse des ligaments utéro-sacrés ; nodule du cul-de-sac de Douglas.\n\nÉchographie pelvienne Kyste ovarien gauche de 42 mm, à parois régulières, contenu finement échogène homogène.\n\nBiologie Bilan hormonal et sérologies sans particularité ; βhCG négatif.\n\nContexte Aucun antécédent chirurgical ; pas de contraception depuis 2 ans (désir de grossesse).\n\nQuestion : Concernant l'endométriome de 42 mm chez cette patiente, quelle est l'attitude correcte ?",
    "options": [
      "Abstention thérapeutique simple avec surveillance échographique",
      "Traitement médical hormonal exclusif au long cours",
      "Traitement chirurgical",
      "Ponction-aspiration échoguidée du kyste",
      "AMP d'emblée sans aucun bilan"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Taille > 30 mm → le traitement chirurgical est indiqué, indépendamment de la symptomatologie.\n\nA — Faux : l'abstention ne concerne que les endométriomes < 30 mm asymptomatiques.\n\nB — Faux : le traitement hormonal n'a pas d'effet de réduction sur un endémétriome > 30 mm et retarderait la prise en charge, d'autant qu'il est contraceptif chez une patiente désireuse de grossesse.\n\nD — Faux : la ponction n'est pas le traitement de référence de l'endémétriome (risque de récidive, de fistule, d'infection).\n\nE — Faux : toute AMP doit être précédée d'un bilan étiologique du couple.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-29",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Douleurs pelviennes chroniques et infertilité — CHU, consultation de gynécologie]\nVignette clinique\nMme K., 32 ans, nulligeste, mariée depuis 3 ans, consulte pour des dysménorrhées secondaires intenses apparues il y a 3 ans (antérieurement cycles indolores), des dyspareunies profondes et une dyschésie cataméniale. Aucune grossesse après 18 mois de rapports réguliers non protégés.\n\nToucher vaginal Utérus rétroversé, peu mobile, fixé ; induration douloureuse des ligaments utéro-sacrés ; nodule du cul-de-sac de Douglas.\n\nÉchographie pelvienne Kyste ovarien gauche de 42 mm, à parois régulières, contenu finement échogène homogène.\n\nBiologie Bilan hormonal et sérologies sans particularité ; βhCG négatif.\n\nContexte Aucun antécédent chirurgical ; pas de contraception depuis 2 ans (désir de grossesse).\n\nQuestion : Dans ce contexte d'endométriome, quel aspect l'hystérosalpingographie pourrait-elle montrer ?",
    "options": [
      "Le produit de contraste entoure la partie supérieure de l'ovaire sans accéder à la partie inférieure, du fait des adhérences",
      "Des diverticules du fond utérin avec image en parasol",
      "Une vacuité utérine complète",
      "Une image en « corne de taureau » bilatérale",
      "Aucune anomalie n'est possible"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "En cas d'endémétriome, le contraste coiffe l'ovaire sans atteindre sa partie inférieure à cause des adhérences : image très évocatrice.\n\nB — Faux : diverticules du fond et image en parasol/champignon = adénomyose diffuse.\n\nC — Faux : la cavité utérine est opacifiée normalement, sauf pathologie associée.\n\nD — Faux : description radiologique sans rapport avec l'endométriose.\n\nE — Faux : l'HSG peut être strictement normale, mais des anomalies typiques existent.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-30",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Ménorragies et utérus globuleux — consultation EPH]\nVignette clinique\nMme B., 38 ans, G3P3, consulte pour des ménorragies et une dysménorrhée d'aggravation progressive depuis 2 ans, sans dyspareunie. Pas de désir de grossesse.\n\nExamen abdominal Masse pelvienne médiane, mobile, indolore.\n\nToucher vaginal Utérus augmenté de volume, globuleux, douloureux à la mobilisation, peu mobile.\n\nÉchographie Utérus globuleux, myomètre hétérogène avec zones mal définies ; pas de kyste annexiel.\n\nHSG Diverticules des bords et du fond utérin ; agrandissement global de la cavité ; image en « parasol ».\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Endométriose ovarienne bilatérale",
      "Adénomyose",
      "Léiomyome utérin sous-séreux",
      "Hyperplasie endométriale atypique",
      "Carcinome de l'endomètre"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade ménorragies + utérus globuleux douloureux + signes d'HSG typiques (diverticules, image en parasol, angulation en baïonnette de l'isthme) est caractéristique de l'adénomyose.\n\nA — Faux : aucune masse annexielle kystique, et l'HSG ne montre pas d'image d'endémétriome.\n\nC — Faux : un fibrome sous-séreux donne une masse individualisée, non un utérus globalement augmenté avec diverticules.\n\nD et E — Faux : l'hyperplasie et le cancer de l'endomètre se révèlent par des métrorragies et imposent une hystéroscopie avec biopsie ; ils ne donnent pas d'image en parasol ni d'utérus douloureux à la mobilisation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-31",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Ménorragies et utérus globuleux — consultation EPH]\nVignette clinique\nMme B., 38 ans, G3P3, consulte pour des ménorragies et une dysménorrhée d'aggravation progressive depuis 2 ans, sans dyspareunie. Pas de désir de grossesse.\n\nExamen abdominal Masse pelvienne médiane, mobile, indolore.\n\nToucher vaginal Utérus augmenté de volume, globuleux, douloureux à la mobilisation, peu mobile.\n\nÉchographie Utérus globuleux, myomètre hétérogène avec zones mal définies ; pas de kyste annexiel.\n\nHSG Diverticules des bords et du fond utérin ; agrandissement global de la cavité ; image en « parasol ».\n\nQuestion : Quels arguments sont en faveur de l'adénomyose dans ce dossier ? (2 à 3 réponses exactes)",
    "options": [
      "Ménorragies et métrorragies",
      "Utérus augmenté de volume, peu mobile, douloureux à la pression",
      "Image en parasol et diverticules à l'HSG",
      "Saignements de contact post-coïtaux",
      "Hématurie cyclique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "L'adénomyose associe : ménorragies/métrorragies, utérus augmenté, peu mobile, douloureux et des signes d'HSG évocateurs.\n\nA, B, C — Vrais : éléments cliniques et radiologiques typiques.\n\nD — Faux : les saignements de contact orientent vers une endémétriose cervicale.\n\nE — Faux : l'hématurie cyclique oriente vers une atteinte vésicale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-32",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Ménorragies et utérus globuleux — consultation EPH]\nVignette clinique\nMme B., 38 ans, G3P3, consulte pour des ménorragies et une dysménorrhée d'aggravation progressive depuis 2 ans, sans dyspareunie. Pas de désir de grossesse.\n\nExamen abdominal Masse pelvienne médiane, mobile, indolore.\n\nToucher vaginal Utérus augmenté de volume, globuleux, douloureux à la mobilisation, peu mobile.\n\nÉchographie Utérus globuleux, myomètre hétérogène avec zones mal définies ; pas de kyste annexiel.\n\nHSG Diverticules des bords et du fond utérin ; agrandissement global de la cavité ; image en « parasol ».\n\nQuestion : Quelle est la définition histologique de l'adénomyose ?",
    "options": [
      "Tissu endométrial ectopique à distance de l'utérus, sans connexion avec l'endomètre",
      "Présence de tissu endométrial (glandes et stroma) au sein du myomètre, en continuité avec l'endomètre",
      "Prolifération de fibres musculaires lisses sans glandes",
      "Métaplasie malpighienne de l'endomètre",
      "Infiltration de cellules inflammatoires chroniques du myomètre"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'adénomyose est définie par la présence de tissu endométrial (glandes + stroma) dans le myomètre, en continuité avec l'endomètre — critère qui l'oppose à l'endométriose.\n\nA — Faux : c'est la définition de l'endémétriose (sans connexion).\n\nC — Faux : il s'agit du fibrome.\n\nD — Faux : description sans rapport (métaplasie de l'endomètre = autre entité).\n\nE — Faux : une inflammation chronique non spécifique ne fait pas le diagnostic.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-33",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Rectorragies cycliques et dyschésie — endométriose profonde]\nVignette clinique\nMme L., 29 ans, nulligeste, consulte pour des rectorragies strictement cataméniales, une dyschésie majeure et une dyspareunie profonde invalidante depuis 2 ans. Douleurs en « coups de poignard » à la défécation.\n\nSpéculum Muqueuse vaginale normale ; nodule rétractile bleuté de la cloison recto-vaginale.\n\nToucher rectal Nodule dur, douloureux, de la cloison recto-vaginale, adhérent à la paroi rectale.\n\nIRM pelvienne Nodule de la cloison recto-vaginale de 28 mm, avec atteinte de la paroi rectale antérieure ; associé à des lésions des ligaments utéro-sacrés.\n\nColoscopie Muqueuse rectale d'aspect normal en dehors des épisodes menstruels.\n\nQuestion : Quelle est la meilleure explication des rectorragies de cette patiente ?",
    "options": [
      "Une hémorroïdie interne",
      "Une atteinte endométriosique de la paroi rectale, soumise aux modifications cycliques",
      "Une rectocolite hémorragique",
      "Une fissure anale",
      "Un cancer rectal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les foyers endométriosiques sont soumis aux mêmes modifications cycliques que l'endomètre : ils saignent en période menstruelle, d'où des rectorragies cataméniales et une muqueuse d'aspect normal en dehors des règles.\n\nA — Faux : les hémorroïdes ne sont pas strictement cycliques.\n\nC — Faux : la RCH donne des rectorragies permanentes avec muqueuse inflammatoire à la coloscopie (ici normale).\n\nD — Faux : la fissure anale donne une douleur à la défécation non cyclique.\n\nE — Faux : le cancer rectal ne se manifeste pas de façon strictement cataméniale, et la coloscopie est ici normale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-34",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Rectorragies cycliques et dyschésie — endométriose profonde]\nVignette clinique\nMme L., 29 ans, nulligeste, consulte pour des rectorragies strictement cataméniales, une dyschésie majeure et une dyspareunie profonde invalidante depuis 2 ans. Douleurs en « coups de poignard » à la défécation.\n\nSpéculum Muqueuse vaginale normale ; nodule rétractile bleuté de la cloison recto-vaginale.\n\nToucher rectal Nodule dur, douloureux, de la cloison recto-vaginale, adhérent à la paroi rectale.\n\nIRM pelvienne Nodule de la cloison recto-vaginale de 28 mm, avec atteinte de la paroi rectale antérieure ; associé à des lésions des ligaments utéro-sacrés.\n\nColoscopie Muqueuse rectale d'aspect normal en dehors des épisodes menstruels.\n\nQuestion : Quel examen a permis la cartographie précise de l'extension ?",
    "options": [
      "L'échographie pelvienne seule",
      "L'IRM pelvienne",
      "La coloscopie",
      "L'hystérosalpingographie",
      "La radiographie du bassin"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'IRM pelvienne est l'examen de référence pour apprécier l'extension avec une cartographie précise des lésions, permettant un choix thérapeutique efficace — indispensable ici avant une chirurgie rectale.\n\nA — Faux : utile en première intention, mais insuffisante pour l'endométriose profonde recto-vaginale.\n\nC — Faux : la coloscopie évalue la lumière rectale, pas l'extension extra-digestive ; elle peut être normale.\n\nD — Faux : l'HSG explore la cavité utérine et les trompes.\n\nE — Faux : aucun intérêt dans cette indication.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-35",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Rectorragies cycliques et dyschésie — endométriose profonde]\nVignette clinique\nMme L., 29 ans, nulligeste, consulte pour des rectorragies strictement cataméniales, une dyschésie majeure et une dyspareunie profonde invalidante depuis 2 ans. Douleurs en « coups de poignard » à la défécation.\n\nSpéculum Muqueuse vaginale normale ; nodule rétractile bleuté de la cloison recto-vaginale.\n\nToucher rectal Nodule dur, douloureux, de la cloison recto-vaginale, adhérent à la paroi rectale.\n\nIRM pelvienne Nodule de la cloison recto-vaginale de 28 mm, avec atteinte de la paroi rectale antérieure ; associé à des lésions des ligaments utéro-sacrés.\n\nColoscopie Muqueuse rectale d'aspect normal en dehors des épisodes menstruels.\n\nQuestion : Quelles options thérapeutiques peuvent être proposées ? (2 à 3 réponses exactes)",
    "options": [
      "Traitement médical hormonal de première intention (progestatifs, COP en continu, agonistes de la GnRH)",
      "Résection chirurgicale des foyers ectopiques dans les formes sévères",
      "Prise en charge psychologique en complément",
      "Antibiotiques au long cours",
      "Radiothérapie pelvienne"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La stratégie est graduée : médical d'abord, chirurgie (résection) dans les formes sévères ou en cas d'échec, avec un accompagnement psychologique qui améliore les résultats dans les douleurs pelviennes chroniques.\n\nA, B, C — Vrais : conformes à l'algorithme du cours.\n\nD — Faux : maladie non infectieuse : aucun rôle des antibiotiques.\n\nE — Faux : la radiothérapie est proscrite dans une pathologie bénigne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-36",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Rectorragies cycliques et dyschésie — endométriose profonde]\nVignette clinique\nMme L., 29 ans, nulligeste, consulte pour des rectorragies strictement cataméniales, une dyschésie majeure et une dyspareunie profonde invalidante depuis 2 ans. Douleurs en « coups de poignard » à la défécation.\n\nSpéculum Muqueuse vaginale normale ; nodule rétractile bleuté de la cloison recto-vaginale.\n\nToucher rectal Nodule dur, douloureux, de la cloison recto-vaginale, adhérent à la paroi rectale.\n\nIRM pelvienne Nodule de la cloison recto-vaginale de 28 mm, avec atteinte de la paroi rectale antérieure ; associé à des lésions des ligaments utéro-sacrés.\n\nColoscopie Muqueuse rectale d'aspect normal en dehors des épisodes menstruels.\n\nQuestion : Pourquoi le toucher rectal est-il particulièrement contributif dans ce dossier ?",
    "options": [
      "Il remplace l'IRM",
      "Il est réalisé en cas de suspicion de lésions postérieures et permet de palper le nodule de la cloison recto-vaginale",
      "Il permet de mesurer le volume utérin",
      "Il recherche une grossesse ectopique",
      "Il est systématique chez toutes les patientes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le TR est réalisé en cas de suspicion de lésions postérieures ; il objective l'induration/nodule de la cloison recto-vaginale et des ligaments utéro-sacrés, et évalue l'adhérence à la paroi rectale.\n\nA — Faux : il complète mais ne remplace jamais l'imagerie.\n\nC — Faux : le volume utérin s'apprécie au TV et à l'échographie.\n\nD — Faux : aucune suspicion de GEU ici (βhCG, clinique).\n\nE — Faux : il est ciblé selon l'orientation clinique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-37",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Saignements de contact et lésion cervicale bleutée — consultation]\nVignette clinique\nMme S., 24 ans, nulligeste, consulte pour des saignements de contact survenant surtout après les rapports, et une dyspareunie superficielle depuis 8 mois. Cycles réguliers, pas de dysménorrhée majeure.\n\nSpéculum Lésion rétractile et bleutée de la face postérieure du col, saignant au contact ; zone érythémateuse d'aspect cartonné en périphérie.\n\nToucher vaginal Col induré, mobile ; utérus de taille normale ; annexes libres.\n\nFrottis / HPV Sans anomalie maligne ; HPV négatif.\n\nÉchographie Utérus et ovaires sans particularité.\n\nQuestion : Quel diagnostic évoquez-vous en priorité ?",
    "options": [
      "Endométriose cervicale",
      "Carcinome épidermoïde du col",
      "Adénomyose",
      "Endométriome ovarien",
      "Kyste de Naboth isolé"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Lésion rétractile et bleutée, saignant au contact, avec zone érythémateuse « cartonnée » : c'est l'aspect typique de l'endémétriose cervicale, qui explique les saignements de contact post-coïtaux.\n\nB — Faux : à éliminer systématiquement, mais ici frottis et HPV négatifs ; le cancer du col est ulcéro-bourgeonnant ou infiltrant, souvent avec cytologie anormale. Toute lésion cervicale doit néanmoins être biopsiée en cas de doute.\n\nC — Faux : l'adénomyose est une pathologie du myomètre, sans lésion cervicale.\n\nD — Faux : l'endémétriome est ovarien ; l'échographie est ici normale.\n\nE — Faux : un kyste de Naboth est muqueux, translucide, jaunâtre, et ne saigne pas au contact.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-38",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Saignements de contact et lésion cervicale bleutée — consultation]\nVignette clinique\nMme S., 24 ans, nulligeste, consulte pour des saignements de contact survenant surtout après les rapports, et une dyspareunie superficielle depuis 8 mois. Cycles réguliers, pas de dysménorrhée majeure.\n\nSpéculum Lésion rétractile et bleutée de la face postérieure du col, saignant au contact ; zone érythémateuse d'aspect cartonné en périphérie.\n\nToucher vaginal Col induré, mobile ; utérus de taille normale ; annexes libres.\n\nFrottis / HPV Sans anomalie maligne ; HPV négatif.\n\nÉchographie Utérus et ovaires sans particularité.\n\nQuestion : Quel signe fonctionnel est le plus en faveur d'une localisation cervicale de l'endométriose ?",
    "options": [
      "Les ménorragies",
      "Les saignements de contact, surtout après les rapports sexuels",
      "La dyschésie cataméniale",
      "L'hématurie cyclique",
      "La dysurie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le cours est explicite : les saignements de contact, surtout après les rapports sexuels, évoquent l'endométriose cervicale.\n\nA — Faux : ménorragies/métrorragies évoquent l'adénomyose.\n\nC — Faux : oriente vers une atteinte rectale / du septum recto-vaginal.\n\nD — Faux : oriente vers une atteinte vésicale.\n\nE — Faux : dysurie = atteinte urinaire basse, non spécifique du col.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-39",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Saignements de contact et lésion cervicale bleutée — consultation]\nVignette clinique\nMme S., 24 ans, nulligeste, consulte pour des saignements de contact survenant surtout après les rapports, et une dyspareunie superficielle depuis 8 mois. Cycles réguliers, pas de dysménorrhée majeure.\n\nSpéculum Lésion rétractile et bleutée de la face postérieure du col, saignant au contact ; zone érythémateuse d'aspect cartonné en périphérie.\n\nToucher vaginal Col induré, mobile ; utérus de taille normale ; annexes libres.\n\nFrottis / HPV Sans anomalie maligne ; HPV négatif.\n\nÉchographie Utérus et ovaires sans particularité.\n\nQuestion : Concernant la conduite à tenir devant cette lésion cervicale, quelle proposition est FAUSSE ?",
    "options": [
      "Une biopsie cervicale peut être nécessaire pour éliminer une lésion maligne",
      "Un examen au spéculum doit être réalisé de façon systématique",
      "La colposcopie peut aider à préciser les limites de la lésion",
      "Toute lésion cervicale bleutée est bénigne et ne nécessite aucun prélèvement",
      "Le traitement peut faire appel aux traitements hormonaux, voire à l'exérèse locale"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Une lésion cervicale « bleutée » n'est jamais présumée bénigne par principe : l'examen histologique reste indispensable devant toute lésion atypique, saignant au contact, afin d'éliminer un carcinome du col. La sécurité diagnostique prime.\n\nA, B, C — Vrais : le spéculum systématique, la biopsie et la colposcopie font partie de la démarche.\n\nE — Vrai : le traitement de l'endométriose cervicale peut être hormonal, ou local (destruction/exérèse) selon les cas.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-40",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Échec du traitement de première ligne — décision thérapeutique]\nVignette clinique\nMme H., 26 ans, nulligeste, sans désir de grossesse immédiat. Elle présente des dysménorrhées sévères depuis 5 ans et une douleur pelvienne chronique avec retentissement majeur sur la vie quotidienne (absentéisme professionnel).\n\nTraitements déjà reçus AINS + contraceptif oral monophasique en continu pendant 6 mois : échec (EVA 8/10).\n\nExamen Utérus rétroversé, induration des ligaments utéro-sacrés ; pas d'annexectomie palpable.\n\nÉchographie Normale.\n\nRetentissement Anxiété, insomnie, arrêts de travail répétés.\n\nQuestion : Quelle est la conduite la plus adaptée à ce stade ?",
    "options": [
      "Poursuivre le même traitement 6 mois supplémentaires sans modification",
      "Demander une IRM pelvienne pour cartographier une éventuelle endométriose profonde et réévaluer la stratégie",
      "Réaliser d'emblée une hystérectomie",
      "Arrêter tout traitement et rassurer",
      "Prescrire une antibiothérapie prolongée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Échographie normale mais signes cliniques d'endométriose profonde (induration des ligaments utéro-sacrés) : l'IRM est l'examen de seconde intention, de référence pour la cartographie d'extension et le choix thérapeutique.\n\nA — Faux : échec documenté à 6 mois : l'acharnement thérapeutique n'a pas de sens.\n\nC — Faux : geste mutilant et irréversible, jamais d'emblée à 26 ans.\n\nD — Faux : laisser une douleur à EVA 8/10 sans prise en charge est une faute.\n\nE — Faux : aucune place des antibiotiques dans une maladie non infectieuse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-41",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 41,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Échec du traitement de première ligne — décision thérapeutique]\nVignette clinique\nMme H., 26 ans, nulligeste, sans désir de grossesse immédiat. Elle présente des dysménorrhées sévères depuis 5 ans et une douleur pelvienne chronique avec retentissement majeur sur la vie quotidienne (absentéisme professionnel).\n\nTraitements déjà reçus AINS + contraceptif oral monophasique en continu pendant 6 mois : échec (EVA 8/10).\n\nExamen Utérus rétroversé, induration des ligaments utéro-sacrés ; pas d'annexectomie palpable.\n\nÉchographie Normale.\n\nRetentissement Anxiété, insomnie, arrêts de travail répétés.\n\nQuestion : Quelles alternatives thérapeutiques médicales de deuxième ligne peuvent être discutées ? (2 à 3 réponses exactes)",
    "options": [
      "Agonistes de la GnRH (antigonadotropines pendant 6 mois)",
      "Progestatifs",
      "Stérilet au lévonorgestrel",
      "Corticothérapie au long cours",
      "Poursuite exclusive des AINS seuls"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Après échec des AINS + COP en continu, on discute : agonistes de la GnRH (antigonadotropines sur 6 mois), progestatifs, stérilet au lévonorgestrel.\n\nA, B, C — Vrais : options médicales validées du cours.\n\nD — Faux : corticothérapie au long cours : non indiquée et dangereuse.\n\nE — Faux : les AINS seuls ont déjà échoué ; ils ne traitent que le symptôme douloureux ponctuel.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-42",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 42,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Échec du traitement de première ligne — décision thérapeutique]\nVignette clinique\nMme H., 26 ans, nulligeste, sans désir de grossesse immédiat. Elle présente des dysménorrhées sévères depuis 5 ans et une douleur pelvienne chronique avec retentissement majeur sur la vie quotidienne (absentéisme professionnel).\n\nTraitements déjà reçus AINS + contraceptif oral monophasique en continu pendant 6 mois : échec (EVA 8/10).\n\nExamen Utérus rétroversé, induration des ligaments utéro-sacrés ; pas d'annexectomie palpable.\n\nÉchographie Normale.\n\nRetentissement Anxiété, insomnie, arrêts de travail répétés.\n\nQuestion : En cas d'échec de toutes les options médicales, quelle est l'attitude chirurgicale recommandée ?",
    "options": [
      "Coagulation des foyers endométriosiques et adhésiolyse, voire résection des foyers ectopiques dans les formes sévères",
      "Hystérectomie avec annexectomie bilatérale en première intention",
      "Ovariectomie unilatérale prophylactique",
      "Ligature tubaire",
      "Aucune chirurgie n'est jamais possible"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "En cas d'échec médical : coagulation des foyers, adhésiolyse, et résection des foyers ectopiques dans les formes sévères. La chirurgie radicale reste une exception, discutée au cas par cas.\n\nB et C — Faux : gestes mutilants et non conservateurs chez une femme de 26 ans.\n\nD — Faux : la ligature tubaire n'a aucune action sur les foyers ni sur la douleur.\n\nE — Faux : la chirurgie a une place définie, en deuxième intention.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-43",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 43,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Échec du traitement de première ligne — décision thérapeutique]\nVignette clinique\nMme H., 26 ans, nulligeste, sans désir de grossesse immédiat. Elle présente des dysménorrhées sévères depuis 5 ans et une douleur pelvienne chronique avec retentissement majeur sur la vie quotidienne (absentéisme professionnel).\n\nTraitements déjà reçus AINS + contraceptif oral monophasique en continu pendant 6 mois : échec (EVA 8/10).\n\nExamen Utérus rétroversé, induration des ligaments utéro-sacrés ; pas d'annexectomie palpable.\n\nÉchographie Normale.\n\nRetentissement Anxiété, insomnie, arrêts de travail répétés.\n\nQuestion : Quel élément complémentaire de prise en charge, souvent négligé, améliore les résultats thérapeutiques chez cette patiente ?",
    "options": [
      "La prise en charge psychologique",
      "Une antibiothérapie de fond",
      "Une immobilisation prolongée",
      "Un régime sans sel strict",
      "La répétition des imageries tous les mois"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La prise en charge psychologique des patientes souffrant de douleurs pelviennes chroniques améliore les résultats du traitement. L'endométriose est une maladie systémique avec un retentissement psychique majeur.\n\nB, C, D — Faux : aucune de ces mesures n'a d'efficacité démontrée dans l'endométriose.\n\nE — Faux : la surveillance doit être individualisée ; il n'existe d'ailleurs pas de consensus sur son rythme.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-1",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant les caractéristiques générales du cycle menstruel normal sont exactes, SAUF une. Laquelle ?",
    "options": [
      "La ménarchie survient habituellement vers l'âge de 12 ans.",
      "La durée moyenne d'un cycle normal est de 28 jours, avec des extrêmes allant de 21 à 35 jours.",
      "L'hémorragie menstruelle dure en moyenne 4 jours, avec des extrêmes de 3 à 7 jours.",
      "Une menstruation moyenne correspond à une perte de sang comprise entre 25 et 80 ml.",
      "Le cycle menstruel persiste tout au long de la grossesse et de l'allaitement."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Explication : Le cycle menstruel est physiologiquement interrompu pendant la grossesse et l'allaitement (en raison de l'inhibition de l'axe hypothalamo-hypophysaire par les hormones placentaires et la prolactine). Il disparaît définitivement à la ménopause.\n\nA (Vrai) : La ménarchie se situe autour de 12 ans.\n\nB (Vrai) : Le cycle normal est de 28 ± 4 jours, soit 21 à 35 jours.\n\nC (Vrai) : Les règles durent en moyenne 4 jours (3-7 jours).\n\nD (Vrai) : Le volume normal de perte sanguine est de 25 à 80 ml.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-2",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Concernant les phénomènes hormonaux précédant et accompagnant l'ovulation, quelles sont les propositions exactes ? (Choisir 2 à 3 réponses)",
    "options": [
      "Un pic important d'œstradiol survient environ 24 heures avant l'ovulation.",
      "Le pic de LH précède immédiatement le pic d'œstradiol.",
      "La sécrétion de progestérone débute quelques heures après le début du pic de LH, avant la rupture folliculaire.",
      "Le taux croissant de progestérone après l'ovulation exerce un rétrocontrôle positif sur la LH.",
      "La lutéinisation est induite par la FSH."
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Explication :\n\nA (Vrai) : Le pic d'œstradiol précède le pic de LH et est le signal déclencheur de l'ovulation.\n\nB (Faux) : C'est l'inverse. Le pic d'œstradiol précède le pic de LH. Le pic de LH est consécutif au rétrocontrôle positif des œstrogènes.\n\nC (Vrai) : La lutéinisation (début de sécrétion de progestérone) est induite par le pic de LH et commence avant la rupture folliculaire.\n\nD (Faux) : La progestérone exerce un rétrocontrôle négatif sur la LH (et la FSH), ce qui limite la durée de la phase lutéale.\n\nE (Faux) : C'est la LH qui déclenche l'ovulation et les phénomènes de lutéinisation (la FSH est impliquée dans la maturation folliculaire).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-3",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Concernant la glaire cervicale, quelle est la proposition juste ?",
    "options": [
      "Sa production est sous la dépendance exclusive de la progestérone.",
      "Sous l'action des œstrogènes, son abondance et sa filance augmentent progressivement au début du cycle.",
      "Sous l'action de la progestérone, sa filance augmente pour faciliter le passage des spermatozoïdes.",
      "Elle est sécrétée par les glandes de l'endomètre.",
      "Elle présente une viscosité maximale au moment de l'ovulation."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication :\n\nA (Faux) : La glaire cervicale est sous la dépendance des œstrogènes ET de la progestérone, avec des effets opposés.\n\nB (Vrai) : Les œstrogènes augmentent l'abondance et la filance de la glaire (aspect \"filant\" et clair), facilitant la pénétration des spermatozoïdes.\n\nC (Faux) : La progestérone diminue l'abondance et la filance de la glaire, la rendant épaisse et imperméable.\n\nD (Faux) : Elle est le produit de sécrétion des glandes cervicales (col de l'utérus), et non de l'endomètre.\n\nE (Faux) : Au moment de l'ovulation (sous l'effet des œstrogènes), la glaire est au contraire très fluide et filante (viscosité minimale).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-4",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Quel est le diamètre approximatif du follicule de De Graaf (follicule pré-ovulatoire) ?",
    "options": [
      "1 à 2 mm",
      "5 à 7 mm",
      "10 à 12 mm",
      "15 à 20 mm",
      "25 à 30 mm"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Explication : Le follicule de De Graaf, qui est le follicule mature prêt à ovuler, atteint un diamètre de 10 à 12 mm. Il se présente comme une vésicule contenant un liquide folliculaire et deux couches cellulaires (la granulosa en interne et les thèques interne/externe en périphérie).\n\nA (Faux) : 1-2 mm correspond à un follicule primordial ou primaire.\n\nB (Faux) : 5-7 mm est la taille d'un follicule en cours de maturation (antral).\n\nD (Faux) : 15-20 mm est une taille qui peut être observée en échographie mais qui dépasse la taille classique du De Graaf citée dans le cours (10-12 mm).\n\nE (Faux) : 25-30 mm correspondrait plutôt à un kyste ovarien fonctionnel.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-5",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant les aménorrhées, laquelle est FAUSSE ?",
    "options": [
      "L'aménorrhée primaire est l'absence des premières règles à l'âge habituel de la ménarchie (plus de 18 ans).",
      "L'aménorrhée secondaire est la disparition des règles plus de 3 mois chez une femme antérieurement réglée.",
      "L'aménorrhée se définit comme l'absence de règles en dehors de la grossesse.",
      "Une aménorrhée primaire peut être due à une cause anatomique (imperforation de l'hymen).",
      "L'aménorrhée secondaire est physiologique chez la femme ménopausée."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Explication : La définition de l'aménorrhée précise qu'elle survient en dehors de la grossesse et de l'allaitement. L'option C est donc incomplète et constitue la proposition fausse.\n\nA (Vrai) : C'est la définition classique de l'aménorrhée primaire (> 18 ans dans le cours, bien que certaines définitions récentes utilisent 15-16 ans).\n\nB (Vrai) : Définition de l'aménorrhée secondaire (> 3 mois).\n\nD (Vrai) : L'imperforation de l'hymen est une cause anatomique d'aménorrhée primaire (les règles ne peuvent pas s'écouler).\n\nE (Vrai) : La ménopause est une cause physiologique d'aménorrhée secondaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-6",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant les modifications de l'endomètre au cours du cycle menstruel, quelles sont les propositions exactes ? (Choisir 2 à 3 réponses)",
    "options": [
      "De J1 à J5, la desquamation de la partie superficielle de l'endomètre correspond aux règles.",
      "De J5 à J14, l'endomètre s'épaissit progressivement et présente un aspect lisse (phase prolifératoire).",
      "Pendant la phase lutéale, l'endomètre est creusé et gorgé de sang, formant la dentelle utérine.",
      "La phase sécrétoire est marquée par le développement de glandes en tubes qui sécrètent du glycogène.",
      "Si l'ovocyte n'est pas fécondé, l'endomètre est maintenu jusqu'à J35."
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Explication :\n\nA (Vrai) : Les règles (J1-J5) correspondent à la desquamation de la couche superficielle de l'endomètre.\n\nB (Vrai) : La phase prolifératoire (J5-J14) est sous l'effet des œstrogènes, l'endomètre se reconstitue et s'épaissit.\n\nC (Vrai) : La phase sécrétoire (ou lutéale) voit l'endomètre se creuser (dentelle utérine) sous l'effet de la progestérone.\n\nD (Vrai) : Les glandes en tubes spiralées se développent et sécrètent du glycogène (nutriment pour un éventuel embryon).\n\nE (Faux) : En l'absence de fécondation, le corps jaune régresse, la progestérone chute, et l'endomètre est éliminé à J28 (c'est le début des règles suivantes).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-7",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Quelle est la variation thermique observée lors de l'ovulation lors de la prise de la température basale ?",
    "options": [
      "Une diminution d'environ 0,5 °C.",
      "Une augmentation d'environ 0,5 °C qui se maintient durant la deuxième partie du cycle.",
      "Une augmentation brutale de 1,5 °C pendant 24 heures.",
      "Aucune variation thermique n'est observée.",
      "Une augmentation de 0,5 °C uniquement le jour de l'ovulation, puis un retour à la normale."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : La courbe ménothermique met en évidence une augmentation de la température corporelle d'environ 0,5 °C au moment de l'ovulation. Cette hyperthermie est due à l'effet de la progestérone et se maintient pendant toute la phase lutéale (deuxième partie du cycle).\n\nA (Faux) : La température augmente, elle ne diminue pas.\n\nC (Faux) : L'élévation est modérée (environ 0,5 °C), pas de 1,5 °C.\n\nD (Faux) : La variation existe et est un signe clinique d'ovulation.\n\nE (Faux) : L'augmentation ne dure pas qu'un seul jour, elle persiste durant toute la phase lutéale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-8",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Concernant la phase post-ovulatoire (lutéale), quelle est la proposition juste ?",
    "options": [
      "Le corps jaune régresse systématiquement 5 jours après l'ovulation.",
      "La sécrétion de progestérone est importante et s'accompagne d'une augmentation des œstrogènes.",
      "Le processus de lutéinisation est indépendant de la LH.",
      "Le corps jaune sécrète de la progestérone pendant 28 jours en l'absence de fécondation.",
      "En cas de fécondation, le corps jaune régresse pour permettre l'implantation."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : Pendant la phase lutéale, le corps jaune sécrète de la progestérone en grande quantité, et la sécrétion des œstrogènes augmente également (bien que moins qu'en phase folliculaire).\n\nA (Faux) : En l'absence de fécondation, le corps jaune régresse environ 10 jours après l'ovulation (et non 5 jours).\n\nC (Faux) : La lutéinisation est entretenue par le taux de LH (même minime).\n\nD (Faux) : Le corps jaune sécrète de la progestérone pendant 12 à 14 jours (et non 28 jours).\n\nE (Faux) : En cas de fécondation, le corps jaune persiste (grâce à l'hCG) pour maintenir la progestérone et éviter le décollement de l'endomètre.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-9",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant les anomalies de la durée du cycle menstruel, quelles sont les propositions exactes ? (Choisir 2 à 3 réponses)",
    "options": [
      "La spanioménorrhée est un cycle long supérieur à 35 jours.",
      "La polyménorrhée est un cycle court inférieur à 21 jours.",
      "Les cycles irréguliers se définissent par l'alternance de cycles longs et de cycles courts.",
      "La polyménorrhée se définit par des règles peu abondantes.",
      "La spanioménorrhée est toujours d'origine organique."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Explication :\n\nA (Vrai) : Spanioménorrhée = cycle > 35 jours.\n\nB (Vrai) : Polyménorrhée = cycle C (Vrai) : L'irrégularité se caractérise par l'alternance de cycles longs et courts.\n\nD (Faux) : La polyménorrhée concerne la fréquence (cycle court), pas l'abondance. Les règles peu abondantes correspondent à l'hypoménorrhée.\n\nE (Faux) : La spanioménorrhée peut être fonctionnelle (ex: stress, syndrome des ovaires polykystiques) ou organique, elle n'est pas toujours organique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-10",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Quelle hormone est responsable du déclenchement de l'ovulation et des phénomènes de lutéinisation ?",
    "options": [
      "La FSH (Follicule Stimulating Hormone)",
      "La Gn-RH (Gonadotropin-Releasing Hormone)",
      "La LH (Luteinizing Hormone)",
      "La progestérone",
      "L'œstradiol"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Explication : Le pic de LH (Luteinizing Hormone) est le signal déclencheur de l'ovulation. C'est également elle qui induit la lutéinisation des cellules de la granulosa pour former le corps jaune.\n\nA (Faux) : La FSH agit surtout sur la maturation du follicule ovarien.\n\nB (Faux) : La Gn-RH est l'hormone hypothalamique qui stimule la sécrétion de LH et FSH, mais elle n'agit pas directement sur l'ovaire.\n\nD (Faux) : La progestérone est le produit du corps jaune, elle ne déclenche pas l'ovulation.\n\nE (Faux) : L'œstradiol prépare l'ovulation (rétrocontrôle positif) mais ne la déclenche pas directement.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-11",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Concernant la régulation neuroendocrinienne du cycle menstruel, quelle proposition est FAUSSE ?",
    "options": [
      "L'hypothalamus commande les sécrétions antéhypophysaires par voie sanguine via le système porte.",
      "Le contrôle hypothalamique s'effectue par l'intermédiaire de la Gn-RH.",
      "La Gn-RH stimule la décharge de LH et de FSH.",
      "L'antéhypophyse agit sur le fonctionnement ovarien par l'intermédiaire de la FSH et de la LH.",
      "Les hormones ovariennes exercent une rétroaction uniquement positive sur l'hypothalamus."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Explication : Les hormones ovariennes exercent une rétroaction (feed-back) négative la plupart du temps (pour réguler la sécrétion de FSH/LH), et une rétroaction positive uniquement au moment du pic d'œstradiol pré-ovulatoire (qui déclenche le pic de LH). L'option E est donc fausse car elle stipule \"uniquement positive\".\n\nA (Vrai) : L'hypothalamus utilise le système porte pour communiquer avec l'antéhypophyse.\n\nB (Vrai) : La Gn-RH est le chef d'orchestre hypothalamique.\n\nC (Vrai) : La Gn-RH stimule la libération de LH et FSH.\n\nD (Vrai) : La FSH et la LH sont les gonadotropines hypophysaires agissant sur l'ovaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-12",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Quels sont les examens para-cliniques permettant d'explorer le cycle menstruel ? (Choisir 2 à 3 réponses)",
    "options": [
      "Le dosage de l'AMH (Hormone Anti-Müllérienne).",
      "L'échographie pelvienne pour apprécier la croissance folliculaire.",
      "L'hystérosalpingographie pour l'étude de la cavité utérine.",
      "La cœlioscopie diagnostique pour évaluer la pathologie annexielle.",
      "Le dosage de la prolactine pour évaluer la phase lutéale."
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Explication :\n\nA (Vrai) : L'AMH est un marqueur de la réserve ovarienne (investigation hormonale).\n\nB (Vrai) : L'échographie est l'examen de choix pour le suivi folliculaire et de l'endomètre.\n\nC (Vrai) : L'hystérosalpingographie évalue la cavité utérine et la perméabilité tubaire.\n\nD (Vrai) : La cœlioscopie est une méthode endoscopique d'exploration pelvienne.\n\nE (Faux) : Le dosage de la prolactine explore l'axe hypothalamo-hypophysaire (hyperprolactinémie), mais ce n'est pas l'examen spécifique pour évaluer la phase lutéale (on doserait plutôt la progestérone au 21e jour).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-13",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant les troubles des menstruations sont exactes, SAUF une. Laquelle ?",
    "options": [
      "L'hypoménorrhée correspond à des règles peu abondantes (inférieures à 25 ml).",
      "L'hyperménorrhée correspond à des règles trop abondantes (supérieures à 80 ml).",
      "La ménorragie correspond à des règles trop abondantes et/ou trop longues (supérieures à 7 jours).",
      "La dysménorrhée correspond à des douleurs pelviennes survenant en dehors des règles.",
      "La métrorragie correspond à des hémorragies utérines survenant en dehors des règles."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Explication : La dysménorrhée correspond aux douleurs pelviennes qui surviennent au moment des règles (et non en dehors). Les douleurs en dehors des règles peuvent être des douleurs intermenstruelles ou être liées à d'autres pathologies (endométriose, etc.).\n\nA (Vrai) : Hypoménorrhée = volume B (Vrai) : Hyperménorrhée = volume > 80 ml.\n\nC (Vrai) : Ménorragie = volume > 80 ml et/ou durée > 7 jours.\n\nE (Vrai) : Métrorragie = saignement en dehors des règles.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-14",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Quelle est la proposition exacte concernant le corps jaune ?",
    "options": [
      "Il se forme à partir des cellules de la thèque externe.",
      "Il sécrète de la progestérone pendant 12 à 14 jours en l'absence de fécondation.",
      "Il persiste pendant toute la grossesse en sécrétant de la progestérone.",
      "Sa régression est due à une augmentation du taux de LH.",
      "Il est formé par les cellules de la granulosa qui se chargent de pigments rouges."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : Après l'ovulation, les cellules de la granulosa se chargent de pigments jaunes (lutéine) et forment le corps jaune, qui sécrète de la progestérone pendant 12 à 14 jours. Ensuite, en l'absence de fécondation, il régresse.\n\nA (Faux) : Le corps jaune se forme à partir des cellules de la granulosa (et des thèques internes).\n\nC (Faux) : Il persiste au début de la grossesse (grâce à l'hCG), mais pas pendant toute la grossesse (le placenta prend le relais).\n\nD (Faux) : Sa régression est due à la baisse de LH (et à l'absence d'hCG).\n\nE (Faux) : Les pigments sont jaunes (d'où le nom \"corps jaune\").",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-15",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Concernant le rétrocontrôle (feed-back) hormonal, quelles sont les propositions exactes ? (Choisir 2 à 3 réponses)",
    "options": [
      "L'augmentation des œstrogènes en phase folliculaire exerce un rétrocontrôle négatif sur la FSH.",
      "Le pic d'œstradiol pré-ovulatoire exerce un rétrocontrôle positif sur la LH.",
      "Le taux croissant de progestérone après l'ovulation exerce un rétrocontrôle négatif sur la LH.",
      "La FSH exerce un rétrocontrôle positif sur la Gn-RH.",
      "La progestérone exerce un rétrocontrôle positif sur la FSH."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Explication :\n\nA (Vrai) : En phase folliculaire, l'augmentation progressive des œstrogènes freine la sécrétion de FSH (rétrocontrôle négatif).\n\nB (Vrai) : Au moment de l'ovulation, le taux très élevé d'œstradiol bascule en rétrocontrôle positif, déclenchant le pic de LH.\n\nC (Vrai) : Après l'ovulation, la progestérone freine la LH pour éviter une nouvelle ovulation (rétrocontrôle négatif).\n\nD (Faux) : La FSH exerce un rétrocontrôle négatif sur la Gn-RH.\n\nE (Faux) : La progestérone exerce un rétrocontrôle négatif sur la FSH et la LH.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-16",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Toutes les affirmations suivantes concernant les métrorragies sont exactes, SAUF une. Laquelle ?",
    "options": [
      "Ce sont des hémorragies utérines survenant en dehors des règles.",
      "Elles peuvent être révélatrices d'un cancer de l'endomètre.",
      "Elles sont toujours d'origine hormonale.",
      "Elles peuvent être liées à des lésions organiques (polypes, fibromes).",
      "Leur exploration nécessite souvent une échographie pelvienne et une hystéroscopie."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Explication : Les métrorragies ne sont pas toujours d'origine hormonale. Elles peuvent être d'origine organique (polypes, fibromes, cancer de l'endomètre, cervicite, etc.). C'est une distinction majeure à faire en clinique.\n\nA (Vrai) : Définition des métrorragies.\n\nB (Vrai) : C'est un signe d'alerte majeur chez la femme ménopausée.\n\nD (Vrai) : Les causes organiques sont fréquentes.\n\nE (Vrai) : Ce sont les examens de première intention pour explorer une métrorragie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-17",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Par quel système l'hypothalamus communique-t-il avec l'antéhypophyse ?",
    "options": [
      "Le système nerveux périphérique",
      "Le système porte hypothalamo-hypophysaire",
      "Le liquide céphalo-rachidien",
      "Le système lymphatique",
      "La circulation systémique directe"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : L'hypothalamus libère la Gn-RH dans le système porte hypothalamo-hypophysaire, un réseau de vaisseaux sanguins reliant l'hypothalamus à l'antéhypophyse. Cela permet à la Gn-RH d'atteindre directement les cellules gonadotropes de l'antéhypophyse.\n\nA (Faux) : Il n'y a pas de connexion nerveuse directe pour la sécrétion des hormones antéhypophysaires (bien qu'il existe des connexions pour la post-hypophyse).\n\nC (Faux) : Le LCR n'est pas le vecteur de la Gn-RH.\n\nD (Faux) : Le système lymphatique n'est pas impliqué ici.\n\nE (Faux) : La circulation systémique directe ne permet pas d'atteindre l'hypophyse à des concentrations suffisantes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-18",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Quels sont les effets de la progestérone sur les organes cibles ? (Choisir 2 à 3 réponses)",
    "options": [
      "Elle augmente la filance de la glaire cervicale.",
      "Elle induit la phase sécrétoire de l'endomètre.",
      "Elle augmente la température corporelle basale.",
      "Elle favorise le développement des glandes en tubes de l'endomètre.",
      "Elle est responsable de la desquamation de l'endomètre en fin de cycle."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "Explication :\n\nA (Faux) : La progestérone diminue la filance et l'abondance de la glaire cervicale (effet anti-œstrogénique).\n\nB (Vrai) : La progestérone transforme l'endomètre prolifératif en endomètre sécrétoire (dentelle utérine).\n\nC (Vrai) : La progestérone est hyperthermiante (responsable de l'élévation de 0,5 °C).\n\nD (Vrai) : Elle favorise le développement des glandes en tubes spiralées.\n\nE (Faux) : C'est la chute de la progestérone (due à la régression du corps jaune) qui provoque la desquamation de l'endomètre (règles), et non la progestérone elle-même.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-19",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "L'aménorrhée primaire se définit par l'absence des premières règles à quel âge (selon le cours) ?",
    "options": [
      "Plus de 14 ans",
      "Plus de 16 ans",
      "Plus de 18 ans",
      "Plus de 20 ans",
      "Plus de 21 ans"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Explication : Selon le document fourni, l'aménorrhée primaire est définie comme l'absence des premières règles à l'âge habituel de la ménarchie, soit plus de 18 ans. (Note : dans la pratique clinique actuelle, on tend à considérer 15-16 ans, mais il faut se référer au cours pour l'examen).\n\nA (Faux) : 14 ans est l'âge moyen de la ménarchie, pas la limite pathologique.\n\nB (Faux) : 16 ans est souvent utilisé en pratique clinique moderne mais ne correspond pas à la définition stricte du cours.\n\nD (Faux) : 20 ans est trop tardif.\n\nE (Faux) : 21 ans est trop tardif.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-20",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant l'hyperménorrhée, quelle proposition est FAUSSE ?",
    "options": [
      "Elle correspond à des règles trop abondantes (supérieures à 80 ml).",
      "Elle peut être responsable d'une anémie ferriprive.",
      "Elle est synonyme de ménorragie dans tous les cas.",
      "Elle peut être liée à un fibrome utérin.",
      "Elle se définit par un volume de sang supérieur à la normale."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Explication : L'hyperménorrhée définit uniquement l'abondance (> 80 ml). La ménorragie définit l'abondance ET/OU la durée prolongée (> 7 jours). Elles ne sont donc pas strictement synonymes dans toutes les définitions : une femme peut avoir une hyperménorrhée sans ménorragie si ses règles durent moins de 7 jours.\n\nA (Vrai) : C'est la définition de l'hyperménorrhée.\n\nB (Vrai) : La perte de sang excessive entraîne une carence en fer.\n\nD (Vrai) : Le fibrome est une cause classique d'hyperménorrhée.\n\nE (Vrai) : C'est le principe même de l'hyperménorrhée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-21",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Quels sont les tests hormonaux dynamiques cités dans l'exploration du cycle menstruel ? (Choisir 2 à 3 réponses)",
    "options": [
      "Test au progestatif",
      "Test au Clomid",
      "Test à la Gn-RH",
      "Test de freinage à la dexaméthasone",
      "Test de surcharge glucosée"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Explication : Le cours mentionne explicitement le test au progestatif, le test au Clomid et le test Gn-RH comme tests hormonaux dynamiques pour explorer le cycle menstruel.\n\nA (Vrai) : Évalue l'imprégnation œstrogénique et la réponse de l'endomètre.\n\nB (Vrai) : Évalue la capacité de l'axe hypothalamo-hypophysaire à répondre (test de stimulation).\n\nC (Vrai) : Évalue la réserve hypophysaire en gonadotropines.\n\nD (Faux) : Le test de freinage à la dexaméthasone est utilisé pour explorer l'axe corticotrope (syndrome de Cushing), pas le cycle menstruel.\n\nE (Faux) : L'hyperglycémie provoquée par voie orale explore le métabolisme glucidique (diabète, SOPK), ce n'est pas un test dynamique de l'axe gonadotrope.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-22",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant la phase sécrétoire (lutéale) de l'endomètre sont exactes, SAUF une. Laquelle ?",
    "options": [
      "Elle s'étend de J14 à J28.",
      "L'endomètre est creusé et gorgé de sang, formant la dentelle utérine.",
      "Les glandes en tubes sécrètent du glycogène.",
      "Elle est sous la dépendance de la progestérone.",
      "En l'absence de fécondation, l'endomètre est maintenu et les règles n'apparaissent pas."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Explication : En l'absence de fécondation, le corps jaune régresse, la progestérone chute, et l'endomètre est éliminé à J28 (rupture des artères spiralées) : ce sont les règles. L'endomètre n'est maintenu qu'en cas de fécondation (grâce à l'hCG).\n\nA (Vrai) : La phase lutéale correspond à la deuxième moitié du cycle (J14-J28).\n\nB (Vrai) : C'est l'aspect caractéristique de la dentelle utérine.\n\nC (Vrai) : Les glandes sécrètent du glycogène pour nourrir un éventuel embryon.\n\nD (Vrai) : La progestérone est l'hormone clé de cette phase.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-23",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Concernant la ménopause, quelle est la proposition juste ?",
    "options": [
      "Elle correspond à l'apparition des premières règles.",
      "Elle marque la disparition définitive du cycle menstruel.",
      "Elle survient généralement vers l'âge de 30 ans.",
      "Elle s'accompagne d'une augmentation des œstrogènes.",
      "Elle est réversible sous traitement hormonal."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : La ménopause est la cessation définitive des cycles menstruels (et de la fonction ovarienne), survenant généralement autour de 50 ans. Elle est due à l'épuisement du capital folliculaire.\n\nA (Faux) : L'apparition des premières règles est la ménarchie.\n\nC (Faux) : La ménopause survient en moyenne vers 50 ans, pas 30 ans.\n\nD (Faux) : La ménopause s'accompagne d'une diminution des œstrogènes (et une augmentation relative des gonadotropines FSH/LH).\n\nE (Faux) : La ménopause est irréversible (le traitement hormonal substitutif ne restaure pas la fertilité).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-24",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Quelles sont les propositions exactes concernant les anomalies du cycle menstruel ? (Choisir 2 à 3 réponses)",
    "options": [
      "La spanioménorrhée correspond à un cycle supérieur à 35 jours.",
      "La polyménorrhée correspond à un cycle inférieur à 21 jours.",
      "La dysménorrhée correspond à des douleurs pelviennes au moment des règles.",
      "L'hypoménorrhée correspond à des règles supérieures à 80 ml.",
      "La métrorragie correspond à des règles abondantes survenant pendant les règles."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Explication :\n\nA (Vrai) : Spanioménorrhée = cycle long (> 35 jours).\n\nB (Vrai) : Polyménorrhée = cycle court (C (Vrai) : Dysménorrhée = douleurs pendant les règles.\n\nD (Faux) : L'hypoménorrhée correspond à des règles peu abondantes (E (Faux) : La métrorragie correspond à des hémorragies survenant en dehors des règles.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-25",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Quel est l'intérêt principal de l'étude de la physiologie du cycle menstruel ?",
    "options": [
      "Comprendre et explorer les anomalies du cycle.",
      "Déterminer le sexe de l'embryon.",
      "Prévenir les infections génitales.",
      "Traiter la ménopause.",
      "Évaluer la réserve ovarienne uniquement."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Explication : L'intérêt de l'étude de la physiologie du cycle menstruel, tel que souligné dans le cours, est de permettre de comprendre et d'explorer les anomalies du cycle (diagnostic, bilan étiologique, prise en charge).\n\nB (Faux) : La détermination du sexe fœtal relève de l'échographie ou du caryotype, pas de l'étude du cycle menstruel.\n\nC (Faux) : La prévention des infections génitales relève de l'hygiène et de la vaccination (HPV), pas de la physiologie du cycle.\n\nD (Faux) : Le traitement de la ménopause est une application thérapeutique, mais l'intérêt premier de l'étude du cycle est de comprendre les anomalies.\n\nE (Faux) : L'évaluation de la réserve ovarienne (AMH) n'est qu'un aspect parmi d'autres de l'exploration.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-26",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique 1 : Consultation de Gynécologie (CHU Mustapha Pacha)]\nMme K., 24 ans, célibataire, consulte au CHU Mustapha Pacha pour des cycles irréguliers depuis 2 ans. Elle rapporte des cycles allant de 40 à 60 jours. Elle présente une obésité (IMC à 32) et de l'acné. L'examen clinique révèle un score de Ferriman-Gallwey à 12 (hirsutisme modéré). L'échographie pelvienne montre des ovaires de volume augmenté avec plus de 12 follicules antraux par ovaire, sans kyste organique.\n\nQuestion : Quel est le diagnostic le plus probable devant ce tableau ?",
    "options": [
      "Insuffisance ovarienne prématurée",
      "Syndrome des Ovaires Polykystiques (SOPK)",
      "Hyperprolactinémie",
      "Aménorrhée hypothalamique fonctionnelle",
      "Tumeur ovarienne sécrétante"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : Le tableau associe une spanioménorrhée, une hyperandrogénie clinique (acné, hirsutisme) et des ovaires polykystiques à l'échographie (critères de Rotterdam). C'est la présentation typique du SOPK.\n\nA (Faux) : L'insuffisance ovarienne prématurée se manifeste par une aménorrhée et une FSH élevée, pas par des cycles longs et des ovaires polykystiques.\n\nC (Faux) : L'hyperprolactinémie donne souvent une aménorrhée et une galactorrhée, sans hirsutisme marqué.\n\nD (Faux) : L'aménorrhée hypothalamique survient dans un contexte de stress, de perte de poids ou d'exercice intense, avec des ovaires de taille normale et sans hyperandrogénie.\n\nE (Faux) : Une tumeur sécrétante donnerait une virilisation rapide et sévère, avec des taux de testostérone très élevés, et non un tableau de SOPK.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-27",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique 1 : Consultation de Gynécologie (CHU Mustapha Pacha)]\nMme K., 24 ans, célibataire, consulte au CHU Mustapha Pacha pour des cycles irréguliers depuis 2 ans. Elle rapporte des cycles allant de 40 à 60 jours. Elle présente une obésité (IMC à 32) et de l'acné. L'examen clinique révèle un score de Ferriman-Gallwey à 12 (hirsutisme modéré). L'échographie pelvienne montre des ovaires de volume augmenté avec plus de 12 follicules antraux par ovaire, sans kyste organique.\n\nQuestion : Quels examens complémentaires sont indiqués en première intention pour confirmer le diagnostic et éliminer les diagnostics différentiels ? (Choisir 2 à 3 réponses)",
    "options": [
      "Dosage de la testostérone totale et de la SDHEA",
      "Dosage de la FSH et de la LH",
      "Dosage de la prolactine",
      "Dosage de l'AMH",
      "Cœlioscopie diagnostique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Explication : Le bilan initial du SOPK comprend un bilan hormonal pour éliminer les autres causes d'hyperandrogénie (dosage de testostérone, SDHEA, 17-OHP) et une évaluation de l'axe gonadotrope (FSH, LH), ainsi qu'un dosage de la prolactine pour éliminer une hyperprolactinémie.\n\nA (Vrai) : Pour évaluer l'hyperandrogénie biologique.\n\nB (Vrai) : Pour voir le rapport LH/FSH (souvent > 2 dans le SOPK) et éliminer une insuffisance ovarienne.\n\nC (Vrai) : Pour éliminer une hyperprolactinémie qui peut aussi donner des cycles irréguliers.\n\nD (Faux) : L'AMH est utile pour la réserve ovarienne, mais n'est pas indiquée en première intention pour le diagnostic du SOPK (elle est souvent élevée dans le SOPK, mais ce n'est pas un critère diagnostique).\n\nE (Faux) : La cœlioscopie n'est pas indiquée en première intention pour le diagnostic du SOPK (elle est réservée aux cas complexes ou pour traiter des kystes organiques).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-28",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique 1 : Consultation de Gynécologie (CHU Mustapha Pacha)]\nMme K., 24 ans, célibataire, consulte au CHU Mustapha Pacha pour des cycles irréguliers depuis 2 ans. Elle rapporte des cycles allant de 40 à 60 jours. Elle présente une obésité (IMC à 32) et de l'acné. L'examen clinique révèle un score de Ferriman-Gallwey à 12 (hirsutisme modéré). L'échographie pelvienne montre des ovaires de volume augmenté avec plus de 12 follicules antraux par ovaire, sans kyste organique.\n\nQuestion : Quelle est la première mesure thérapeutique à proposer chez cette patiente ?",
    "options": [
      "Traitement par metformine en première intention",
      "Modification du mode de vie (régime hypocalorique et activité physique)",
      "Chirurgie cœlioscopique (drilling ovarien)",
      "Traitement par inducteur d'ovulation (Clomid)",
      "Traitement hormonal substitutif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : La prise en charge de première intention du SOPK repose sur la perte de poids et la modification du mode de vie (régime hypocalorique et activité physique), qui améliorent la sensibilité à l'insuline et peuvent restaurer l'ovulation.\n\nA (Faux) : La metformine est une option de deuxième intention, surtout en cas de résistance à l'insuline documentée.\n\nC (Faux) : Le drilling ovarien est réservé aux cas résistants au traitement médical.\n\nD (Faux) : Le Clomid est indiqué en cas d'infertilité, mais la première mesure reste la perte de poids.\n\nE (Faux) : Le traitement hormonal n'est pas indiqué en première intention pour un SOPK chez une femme qui souhaite une régularisation du cycle.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-29",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique 2 : Urgences Gynécologiques (EPH Bab El Oued)]\nMme L., 16 ans, est amenée aux urgences par sa mère pour des douleurs pelviennes intenses survenant pendant les règles depuis 6 mois. Elle décrit des douleurs en coup de poignard, irradiant vers les lombes, qui la obligent à manquer les cours. Elle n'a jamais eu de rapport sexuel. L'examen clinique est normal en dehors d'une sensibilité pelvienne. L'échographie pelvienne est normale.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Endométriose pelvienne",
      "Dysménorrhée primaire",
      "Salpingite aiguë",
      "Kyste ovarien hémorragique",
      "Malformation utérine (utérus bicorne)"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : Le tableau associe des douleurs pelviennes rythmées par les règles, sans anomalie à l'examen clinique ni à l'échographie, chez une adolescente. C'est une dysménorrhée primaire (d'origine fonctionnelle, par hyperactivité utérine due aux prostaglandines).\n\nA (Faux) : L'endométriose est possible, mais il s'agit d'un diagnostic d'exclusion (souvent après échec du traitement symptomatique), et l'échographie est normale ici.\n\nC (Faux) : La salpingite donne de la fièvre, des leucorrhées et une douleur permanente, pas rythmée par les règles.\n\nD (Faux) : Le kyste hémorragique donne une douleur aiguë, souvent en milieu de cycle, et serait visible à l'échographie.\n\nE (Faux) : L'utérus bicorne peut donner des dysménorrhées, mais l'échographie serait anormale (ou nécessiterait une hystéroscopie).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-30",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique 2 : Urgences Gynécologiques (EPH Bab El Oued)]\nMme L., 16 ans, est amenée aux urgences par sa mère pour des douleurs pelviennes intenses survenant pendant les règles depuis 6 mois. Elle décrit des douleurs en coup de poignard, irradiant vers les lombes, qui la obligent à manquer les cours. Elle n'a jamais eu de rapport sexuel. L'examen clinique est normal en dehors d'une sensibilité pelvienne. L'échographie pelvienne est normale.\n\nQuestion : Quelle est la prise en charge initiale recommandée ? (Choisir 2 à 3 réponses)",
    "options": [
      "Antalgiques de palier 1 (paracétamol)",
      "Anti-inflammatoires non stéroïdiens (AINS)",
      "Contraception œstroprogestative en continu",
      "Cœlioscopie diagnostique en urgence",
      "Hystérectomie"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Explication : La prise en charge de la dysménorrhée primaire repose sur les antalgiques et les AINS (qui inhibent les prostaglandines), et éventuellement une contraception œstroprogestative en continu pour supprimer les règles et les douleurs.\n\nA (Vrai) : Antalgique de première intention.\n\nB (Vrai) : Les AINS sont le traitement de choix de la dysménorrhée primaire (inhibition de la synthèse des prostaglandines).\n\nC (Vrai) : La contraception œstroprogestative est efficace en cas d'échec des AINS ou pour un traitement de fond.\n\nD (Faux) : La cœlioscopie n'est pas indiquée en première intention, elle est réservée aux cas résistants ou en cas de suspicion d'endométriose.\n\nE (Faux) : L'hystérectomie est un traitement radical de dernier recours, jamais chez une adolescente.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-31",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique 3 : Consultation de Ménopause (CHU Oran)]\nMme B., 52 ans, consulte pour des métrorragies récidivantes depuis 2 mois. Elle est ménopausée depuis 3 ans et ne prend pas de traitement hormonal. L'examen clinique retrouve un utérus légèrement augmenté de volume. L'échographie pelvienne montre un épaississement de l'endomètre à 12 mm avec une image suspecte. La patiente est hypertendue et diabétique de type 2.\n\nQuestion : Quel est le diagnostic le plus redouté devant ce tableau ?",
    "options": [
      "Cancer de l'endomètre",
      "Fibrome utérin",
      "Atrophie endometriale",
      "Polype endométrial bénin",
      "Hyperplasie endométriale simple"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Explication : Chez une femme ménopausée, toute métrorragie doit faire suspecter un cancer de l'endomètre, surtout en présence de facteurs de risque (HTA, diabète, obésité). L'épaississement de l'endomètre à 12 mm est très suspect.\n\nB (Faux) : Le fibrome peut donner des saignements, mais il est généralement bénin et l'image échographique serait différente.\n\nC (Faux) : L'atrophie donne un endometre fin, pas épaissi à 12 mm.\n\nD (Faux) : Le polype bénin est possible, mais le cancer doit être éliminé en priorité.\n\nE (Faux) : L'hyperplasie est un diagnostic différentiel, mais le cancer est le plus redouté.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-32",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique 3 : Consultation de Ménopause (CHU Oran)]\nMme B., 52 ans, consulte pour des métrorragies récidivantes depuis 2 mois. Elle est ménopausée depuis 3 ans et ne prend pas de traitement hormonal. L'examen clinique retrouve un utérus légèrement augmenté de volume. L'échographie pelvienne montre un épaississement de l'endomètre à 12 mm avec une image suspecte. La patiente est hypertendue et diabétique de type 2.\n\nQuestion : Quel examen est indispensable pour confirmer le diagnostic ?",
    "options": [
      "Hystérosalpingographie",
      "Biopsie d'endomètre avec examen histologique",
      "IRM pelvienne",
      "Dosage du CA 125",
      "Frottis cervico-vaginal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : Le diagnostic de certitude du cancer de l'endomètre repose sur l'étude histologique d'une biopsie d'endomètre (ou d'une hystéroscopie avec biopsie).\n\nA (Faux) : L'hystérosalpingographie n'est pas l'examen de choix pour le diagnostic tissulaire.\n\nC (Faux) : L'IRM est utile pour le bilan d'extension, pas pour le diagnostic initial.\n\nD (Faux) : Le CA 125 n'est pas spécifique du cancer de l'endomètre.\n\nE (Faux) : Le frottis cervico-vaginal explore le col, pas l'endomètre.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-33",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique 4 : Consultation de Procréation Médicalement Assistée (EPH Alger)]\nMme R., 29 ans, consulte pour une infertilité primaire de 2 ans. Elle a des cycles réguliers de 28 jours. L'examen clinique est normal. Le bilan hormonal de base est normal. Le couple est pris en charge en PMA. Le médecin décide d'explorer la phase lutéale.\n\nQuestion : Quel examen permet d'évaluer la qualité de la phase lutéale ?",
    "options": [
      "Dosage de la FSH au 3e jour du cycle",
      "Dosage de la progestérone au 21e jour du cycle",
      "Dosage de l'œstradiol au 12e jour du cycle",
      "Échographie pelvienne au 5e jour du cycle",
      "Hystéroscopie diagnostique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Explication : Le dosage de la progestérone au 21e jour (ou 7 jours après l'ovulation) permet d'évaluer la qualité de la phase lutéale. Un taux bas (\nA (Faux) : La FSH au 3e jour évalue la réserve ovarienne.\n\nC (Faux) : L'œstradiol au 12e jour évalue la maturation folliculaire.\n\nD (Faux) : L'échographie au 5e jour évalue la vacuité utérine et le nombre de follicules antraux.\n\nE (Faux) : L'hystéroscopie évalue la cavité utérine (polypes, synéchies).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-34",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique 4 : Consultation de Procréation Médicalement Assistée (EPH Alger)]\nMme R., 29 ans, consulte pour une infertilité primaire de 2 ans. Elle a des cycles réguliers de 28 jours. L'examen clinique est normal. Le bilan hormonal de base est normal. Le couple est pris en charge en PMA. Le médecin décide d'explorer la phase lutéale.\n\nQuestion : Quels sont les signes cliniques et paracliniques d'une insuffisance lutéale ? (Choisir 2 à 3 réponses)",
    "options": [
      "Une phase lutéale inférieure à 11 jours",
      "Un taux de progestérone bas au 21e jour",
      "Des règles abondantes et prolongées",
      "Un aspect d'endomètre sécrétoire retardé à la biopsie",
      "Une température basale augmentée"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Explication : L'insuffisance lutéale se manifeste par une phase lutéale courte (\nA (Vrai) : La phase lutéale normale dure 14 jours ; une durée B (Vrai) : Le taux de progestérone est insuffisant.\n\nC (Faux) : L'insuffisance lutéale donne plutôt des règles peu abondantes et des spottings prémenstruels, pas des règles abondantes.\n\nD (Vrai) : La biopsie d'endomètre montre un retard de maturation.\n\nE (Faux) : La température basale est augmentée normalement par la progestérone, mais en cas d'insuffisance lutéale, l'augmentation est moindre ou absente.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-35",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas Clinique 5 : Consultation de Médecine Générale (EPSP)]\nMlle S., 19 ans, consulte car elle n'a jamais eu ses règles. Elle présente un développement mammaire normal (stade Tanner 4) et une pilosité pubienne normale. L'examen clinique est sans particularité. L'échographie pelvienne montre un utérus de taille normale et des ovaires de taille normale. Le bilan hormonal montre une FSH et une LH normales, et un taux d'œstradiol normal.\n\nQuestion : Devant ce tableau, quelle est l'étiologie la plus probable de l'aménorrhée primaire ?",
    "options": [
      "Insuffisance ovarienne prématurée",
      "Syndrome de Turner",
      "Imperforation de l'hymen",
      "Syndrome de Kallmann",
      "Anomalie utérine (agénésie utérine)"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Explication : La patiente a un développement pubertaire normal, un utérus et des ovaires normaux, et un bilan hormonal normal. Cela suggère une cause anatomique à l'écoulement des règles, comme une imperforation de l'hymen (ou un diaphragme vaginal). Les règles se produisent mais ne peuvent pas s'écouler.\n\nA (Faux) : L'insuffisance ovarienne prématurée donnerait une FSH élevée et un œstradiol bas.\n\nB (Faux) : Le syndrome de Turner donne une FSH élevée et un développement pubertaire absent ou incomplet.\n\nD (Faux) : Le syndrome de Kallmann donne une FSH et LH basses (hypogonadisme hypogonadotrophique).\n\nE (Faux) : L'agénésie utérine donnerait une absence d'utérus à l'échographie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-36",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas Clinique 5 : Consultation de Médecine Générale (EPSP)]\nMlle S., 19 ans, consulte car elle n'a jamais eu ses règles. Elle présente un développement mammaire normal (stade Tanner 4) et une pilosité pubienne normale. L'examen clinique est sans particularité. L'échographie pelvienne montre un utérus de taille normale et des ovaires de taille normale. Le bilan hormonal montre une FSH et une LH normales, et un taux d'œstradiol normal.\n\nQuestion : Quels signes cliniques pourraient accompagner une imperforation de l'hymen ? (Choisir 2 à 3 réponses)",
    "options": [
      "Des douleurs pelviennes cycliques",
      "Une masse vaginale bleutée à l'examen",
      "Une aménorrhée primaire",
      "Des métrorragies",
      "Une absence de développement mammaire"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Explication : L'imperforation de l'hymen empêche l'écoulement des règles, ce qui entraîne une aménorrhée primaire, des douleurs cycliques (par rétention sanguine) et une masse vaginale bleutée (hématocolpos).\n\nA (Vrai) : Douleurs liées à la rétention menstruelle.\n\nB (Vrai) : La masse bleutée est l'hématocolpos (sang accumulé dans le vagin).\n\nC (Vrai) : C'est la définition de l'aménorrhée primaire.\n\nD (Faux) : Les métrorragies sont des saignements en dehors des règles, impossibles ici car l'hymen est imperforé.\n\nE (Faux) : Le développement mammaire est normal (les ovaires fonctionnent normalement).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-1",
    "courseId": "c-gyn-infections",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant les vulvo-vaginites mycosiques, choisissez la réponse juste :",
    "options": [
      "L'agent pathogène responsable est Candida glabrata dans 85 % des cas",
      "Le prurit est habituellement absent, le tableau se résumant à des leucorrhées",
      "Les leucorrhées sont typiquement verdâtres, mousseuses et nauséabondes",
      "Une dysurie et une dyspareunie superficielle sont souvent retrouvées",
      "Le traitement per os n'a aucun intérêt dans la prévention des récidives"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Dans la vulvo-vaginite mycosique (due à Candida albicans dans 85% des cas, prurit intense, leucorrhées blanchâtres en lait caillé), une dysurie et une dyspareunie superficielle d'intromission sont fréquemment retrouvées (D exact). Un traitement per os est indiqué dans les récidives.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-2",
    "courseId": "c-gyn-infections",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant la vulvo-vaginite à Trichomonas vaginalis, lesquelles sont exactes ? (2 à 3 réponses)",
    "options": [
      "Les leucorrhées sont abondantes, verdâtres, mousseuses, spumeuses et nauséabondes",
      "Le piqueté vulvaire est quasi-caractéristique",
      "Le diagnostic est confirmé par le test à la potasse à 5 % au microscope",
      "Un traitement local par ovule de métronidazole suffit à obtenir la guérison",
      "Le partenaire ne nécessite aucun traitement dès lors qu'il est asymptomatique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La vaginite à Trichomonas vaginalis associe des leucorrhées abondantes, verdâtres, mousseuses/spumeuses et nauséabondes (A), un piqueté vulvo-vaginal caractéristique (B), et un examen direct positif (A, B, C retenues dans le corrigé). Le traitement oral en dose unique des deux partenaires est indispensable.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-3",
    "courseId": "c-gyn-infections",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant la vaginose à Gardnerella vaginalis sont exactes, SAUF :",
    "options": [
      "C'est un hôte normal du vagin",
      "Il devient pathogène lorsqu'il est associé à des germes anaérobies",
      "Les leucorrhées sont abondantes, grisâtres, de mauvaise odeur, associées à une vulvite",
      "Le traitement associe des ovules pendant 7 jours, un traitement per os et le traitement du partenaire",
      "Il s'agit d'une infection sexuellement transmissible à déclaration obligatoire"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Gardnerella vaginalis est un hôte saprophyte du vagin devenant pathogène avec les anaérobies, donnant des leucorrhées grisâtres malodorantes traitées par métronidazole. Ce n'est PAS une IST à déclaration obligatoire (E fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-4",
    "courseId": "c-gyn-infections",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Concernant les vulvo-vaginites à Chlamydia trachomatis, quelle proposition est exacte ?",
    "options": [
      "Elles sont habituellement bruyantes, avec des leucorrhées purulentes abondantes",
      "Le diagnostic repose sur l'examen direct après test à la potasse à 5 %",
      "Elles sont volontiers asymptomatiques et peuvent être responsables d'une stérilité tubaire",
      "Le traitement de référence est le métronidazole en dose unique",
      "Le sérodiagnostic n'a aucun intérêt dans cette indication"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'infection génitale à Chlamydia trachomatis est volontiers asymptomatique ou peu bruyante mais redoutable par son évolution silencieuse vers une salpingite chronique et une stérilité tubaire (C exact).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-5",
    "courseId": "c-gyn-infections",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Concernant les cervicites, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "Les cervicites aiguës se manifestent par des leucorrhées purulentes",
      "Au spéculum, le col est congestif et œdématié",
      "Le traitement de première intention est exclusivement local",
      "Les cervicites chroniques sont des cervicites aiguës récidivantes dont le traitement dure 21 jours",
      "Au toucher vaginal, l'utérus est indolore à la mobilisation"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Les cervicites aiguës se manifestent par des leucorrhées purulentes (A) avec un col congestif et œdématié au spéculum (B) ; les formes chroniques récidivantes nécessitent un traitement prolongé de 21 jours (D). Le traitement n'est pas uniquement local et le TV recherche une atteinte haute.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-6",
    "courseId": "c-gyn-infections",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant la syphilis, choisissez la réponse fausse :",
    "options": [
      "L'agent pathogène est Treponema pallidum",
      "C'est une maladie à déclaration obligatoire",
      "Le chancre est une ulcération superficielle, indolore, à limites nettes et bordures indurées",
      "Les adénopathies siègent au niveau du pli de l'aine",
      "La syphilis secondaire s'installe habituellement dans les 6 à 10 jours suivant le chancre"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "La syphilis (Treponema pallidum) est à déclaration obligatoire et donne un chancre indolore à bords indurés avec adénopathies inguinales. La syphilis secondaire s'installe classiquement 6 à 10 SEMAINES (et non 6 à 10 jours) après le chancre (E fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-7",
    "courseId": "c-gyn-infections",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Concernant l'herpès génital, quelle proposition est exacte ?",
    "options": [
      "Il se manifeste par des ulcérations à bords indurés et indolores",
      "La guérison est spontanée en 3 semaines environ",
      "Les récidives siègent toujours à des localisations différentes",
      "Le risque obstétrical est nul lors du passage de l'enfant",
      "Le diagnostic repose sur le test à la potasse à 5 %"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'herpès génital provoque des vésicules évoluant vers des ulcérations douloureuses (non indurées) dont la poussée guérit spontanément en environ 3 semaines (B exact). Le risque néonatal lors de l'accouchement est majeur.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-8",
    "courseId": "c-gyn-infections",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Concernant l'infection génitale à papillomavirus humain (HPV), quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "L'HPV est un virus à ADN dont il existe environ 70 génotypes différents",
      "Les condylomes acuminés sont habituellement provoqués par les types HPV 6 et HPV 11",
      "Le délai d'incubation est court, inférieur à 15 jours",
      "L'examen du partenaire est indispensable",
      "Le traitement de référence est la laparotomie exploratrice"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "L'HPV est un virus à ADN (~70 génotypes cités dans le cours, A) ; les condylomes acuminés bénins sont dus surtout aux HPV 6 et 11 (B), et l'examen du partenaire est indispensable (D). L'incubation est longue (plusieurs semaines/mois, C fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-9",
    "courseId": "c-gyn-infections",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant l'oxyurose, choisissez la réponse juste :",
    "options": [
      "Elle atteint préférentiellement l'adulte jeune sexuellement actif",
      "Le prurit est maximal le matin au réveil",
      "Le diagnostic de certitude repose sur le « scotch test »",
      "Le traitement repose sur le benzoate de benzyle en application locale",
      "La contamination se fait exclusivement par voie hématogène"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Dans l'oxyurose (vulvo-vaginite parasitaire surtout chez l'enfant, prurit vespéral/nocturne), le diagnostic de certitude repose sur la mise en évidence des œufs par le « scotch test » anal au réveil (C exact).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-10",
    "courseId": "c-gyn-infections",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Quel élément est pathognomonique de la gale ?",
    "options": [
      "Le « scotch test » positif",
      "Les sillons",
      "Les taches bleuâtres de la région pubo-périnéale",
      "Les adénopathies du pli de l'aine",
      "Le piqueté vulvaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La lésion élémentaire pathognomonique de la gale (Sarcoptes scabiei) est le sillon scabieux (B), abritant la femelle parasite.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-11",
    "courseId": "c-gyn-infections",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Concernant les ectoparasites vénériens, choisissez la réponse fausse :",
    "options": [
      "La gale est due à Sarcoptes scabiei, acarien parasite strict de l'homme",
      "Le prurit de la gale est exacerbé la nuit",
      "Les sillons sont pathognomoniques de la gale",
      "La pédiculose pubienne se manifeste par des taches bleuâtres de la région pubo-périnéale",
      "Le benzoate de benzyle (Ascabiol) est le traitement de référence de la pédiculose pubienne"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Le benzoate de benzyle (Ascabiol) est le traitement de référence de la gale, et non de la pédiculose pubienne (phtiriase) qui donne des taches bleuâtres pubo-périnéales (E fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-12",
    "courseId": "c-gyn-infections",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Concernant les infections génitales basses, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "Elles comprennent les cervicites, les vaginites, les bartholinites et les vulvites",
      "Leur diagnostic est souvent aisé et les récidives sont fréquentes",
      "Elles peuvent constituer la première phase d'une infection génitale haute, dont les conséquences sont plus graves",
      "Elles sont exceptionnelles en pratique gynécologique",
      "La bartholinite se présente comme une tuméfaction bilatérale et indolore"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les infections génitales basses regroupent vulvites, vaginites, cervicites et bartholinites (A) ; leur diagnostic est souvent aisé mais les récidives sont fréquentes (B) et elles peuvent constituer la porte d'entrée ascendante d'une infection génitale haute (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-13",
    "courseId": "c-gyn-infections",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Parmi les signes suivants, lequel est considéré comme un signe cardinal le plus évocateur d'une infection génitale haute ?",
    "options": [
      "Une température ≥ 38,3 °C",
      "Une douleur à la mobilisation du col utérin",
      "Des métrorragies",
      "Une douleur au dos",
      "Des leucorrhées abondantes et purulentes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur provoquée à la mobilisation utérine et cervicale lors du toucher vaginal est le signe physique cardinal le plus évocateur d'une infection génitale haute (salpingite).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-14",
    "courseId": "c-gyn-infections",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Concernant la microbiologie des infections génitales hautes, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "L'IGH est habituellement une infection polymicrobienne",
      "Chlamydia trachomatis est impliquée dans 50 à 60 % des cas",
      "Neisseria gonorrhoeae est retrouvée dans environ 10 % des cas",
      "Les mycoplasmes génitaux appartiennent au groupe des agents à transmission strictement sexuelle",
      "Gardnerella vaginalis est une bactérie à Gram positif"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "L'IGH est habituellement polymicrobienne (A), avec une prédominance de Chlamydia trachomatis dans 50 à 60 % des cas (B) et de Neisseria gonorrhoeae dans environ 10 % des cas (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-15",
    "courseId": "c-gyn-infections",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Concernant la laparoscopie dans les infections génitales hautes, choisissez la réponse juste :",
    "options": [
      "Elle doit toujours être réalisée en première intention, avant toute antibiothérapie",
      "Elle permet d'affirmer ou d'infirmer le diagnostic de salpingite aiguë, porté à tort dans près d'un quart des cas",
      "Elle ne permet pas de réaliser de prélèvements bactériologiques intra-abdominaux",
      "Elle est formellement contre-indiquée chez la femme nulligeste",
      "Elle n'a aucun rôle dans l'évaluation du pronostic tubaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La cœlioscopie (laparoscopie) est l'examen de référence pour confirmer ou infirmer le diagnostic de salpingite aiguë, lequel est porté à tort cliniquement dans près d'un quart des cas (B exact), et pour évaluer le pronostic tubaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-16",
    "courseId": "c-gyn-infections",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant les formes cliniques des infections génitales hautes sont exactes, SAUF :",
    "options": [
      "Les formes frustes peuvent être totalement silencieuses et aboutir à une stérilité tubaire",
      "Les formes atypiques peuvent mimer une appendicite ou une colique néphrétique",
      "Les formes graves associent fièvre > 39 °C, défense pelvienne et arrêt réflexe du transit",
      "Les endométrites isolées du post-partum relèvent d'emblée d'une cœlioscopie",
      "La périhépatite de Fitz-Hugh-Curtis se traduit par des douleurs de l'hypochondre droit"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Proposition fausse (SAUF) : D. Une endométrite isolée du post-partum ne relève pas d'emblée d'une cœlioscopie diagnostique ; elle est traitée médicalement par antibiothérapie adaptée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-17",
    "courseId": "c-gyn-infections",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Parmi les éléments suivants, lesquels constituent des facteurs de risque d'infection génitale haute ? (2 à 3 réponses)",
    "options": [
      "Partenaires sexuels multiples",
      "Âge compris entre 15 et 25 ans",
      "Antécédent d'interruption thérapeutique de grossesse",
      "Ménopause précoce",
      "Césarienne itérative"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les principaux facteurs de risque d'IGH incluent la multiplicité des partenaires sexuels (A), le jeune âge (15–25 ans, B) et les manœuvres endo-utérines telles qu'un antécédent d'interruption de grossesse ou pose de DIU (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-18",
    "courseId": "c-gyn-infections",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Concernant l'antibiothérapie des infections génitales hautes, choisissez la réponse fausse :",
    "options": [
      "Elle doit être à large spectre, active sur Chlamydia, le gonocoque, les anaérobies et les entérobactéries",
      "Le traitement débute par voie parentérale 2 à 3 jours, puis relais per os pour une durée totale de 21 jours",
      "L'amoxicilline–acide clavulanique est devenue l'antibiotique de référence, mais ne couvre pas Chlamydia",
      "Les aminosides sont de plus en plus utilisés en première intention en raison de leur excellente tolérance",
      "Le métronidazole est utilisé en association pour son efficacité sur les germes anaérobies"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Proposition fausse : D. Les aminosides ne sont pas utilisés de plus en plus en première intention en monothérapie du fait de leur néphro/ototoxicité ; l'antibiothérapie associe classiquement β-lactamine (ex: amoxicilline-acide clavulanique) + doxycycline/macrolide + métronidazole pendant 21 jours.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-19",
    "courseId": "c-gyn-infections",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Concernant le syndrome de Fitz-Hugh-Curtis (périhépatite), quelle proposition est exacte ?",
    "options": [
      "Le germe responsable est toujours Neisseria gonorrhoeae",
      "Les adhérences en « cordes de violon » unissent la capsule de Glisson à la paroi abdominale antérieure",
      "Le pronostic de l'affection dépend de l'atteinte hépatique",
      "Il s'agit d'une atteinte hépatique hématogène isolée, sans lien avec une salpingite",
      "Il impose une chirurgie hépatique d'exérèse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome de Fitz-Hugh-Curtis correspond à une périhépatite secondaire à une salpingite (surtout à Chlamydia), caractérisée en cœlioscopie par des adhérences en « cordes de violon » entre la capsule hépatique (Glisson) et la paroi abdominale antérieure (B exact).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-20",
    "courseId": "c-gyn-infections",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant la prise en charge des IGH dans les populations particulières, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "Chez l'adolescente, il n'y a pas de données en faveur d'une hospitalisation d'emblée",
      "L'innocuité et l'efficacité des quinolones ne sont pas établies chez les patients de moins de 18 ans",
      "En cas de grossesse, l'hospitalisation est indispensable avec mise en route d'une antibiothérapie parentérale",
      "Chez la femme VIH séropositive, le choix de la thérapie doit être guidé par le statut sérologique",
      "En cas de DIU, il faut le laisser en place et le retirer à distance du diagnostic"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Concernant les populations particulières : chez l'adolescente les quinolones sont contre-indiquées avant 18 ans (B) et la grossesse impose une hospitalisation d'emblée pour antibiothérapie parentérale (C) ; A est également retenue dans la grille du cours (A, B, C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-21",
    "courseId": "c-gyn-infections",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant le diagnostic des infections génitales hautes sont exactes, SAUF :",
    "options": [
      "Le dosage des β-HCG plasmatiques permet d'éliminer une GEU atypique",
      "La laparoscopie permet d'infirmer une salpingite portée à tort dans près d'un quart des cas",
      "Les prélèvements tubaires ont une meilleure sensibilité que les prélèvements cervicaux",
      "La biopsie de l'endomètre démontrant une endométrite constitue un critère diagnostique définitif",
      "L'échographie transvaginale peut montrer un épaississement des trompes ou un épanchement pelvien"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Proposition fausse (SAUF) : C. Les prélèvements bactériologiques doivent être effectués au niveau endocervical/vaginal et éventuellement tubaire par cœlioscopie, mais les prélèvements tubaires n'ont pas une meilleure sensibilité systématique que les prélèvements cervicaux pour tous les germes (ou item faux C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-22",
    "courseId": "c-gyn-infections",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Concernant l'évolution des infections génitales hautes, choisissez la réponse fausse :",
    "options": [
      "La guérison est possible, avec ou sans traitement",
      "À court terme, l'évolution peut se faire vers un abcès tubo-ovarien",
      "À long terme, on redoute l'infertilité, la GEU et la douleur pelvienne chronique",
      "Le risque de séquelles diminue avec la répétition des épisodes infectieux",
      "Le syndrome de Fitz-Hugh-Curtis est une complication possible à court terme"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Proposition fausse : D. Le risque de séquelles tubaires (infertilité, GEU, douleurs chroniques) AUGMENTE considérablement — et ne diminue pas — avec la répétition des épisodes infectieux.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-23",
    "courseId": "c-gyn-infections",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Concernant la prévention et le traitement cœlioscopique des IGH, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "La prévention primaire repose sur l'éducation sanitaire et les campagnes de sensibilisation des adolescents et jeunes adultes",
      "Le dépistage par amplification génique sur le premier jet d'urine constitue un outil de prévention",
      "En phase aiguë, la dissection cœlioscopique des organes doit être large et audacieuse",
      "Les lésions abcédées de type yposalpinx peuvent être mises à plat par cœlioscopie",
      "La prévention tertiaire est l'étape la plus efficace pour prévenir l'infertilité"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "La prévention primaire passe par l'éducation sanitaire des jeunes (A), la prévention secondaire par le dépistage par PCR sur 1er jet d'urine (B), et la cœlioscopie permet de drainer un pyosalpinx abcédé (D). En phase aiguë, la dissection doit rester prudente et non agressive (C fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-24",
    "courseId": "c-gyn-infections",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Devant des leucorrhées, quel élément de l'interrogatoire oriente le plus vers une maladie sexuellement transmissible ?",
    "options": [
      "Un aspect blanchâtre et grumeleux « en lait caillé »",
      "Une odeur de poisson",
      "Une apparition post-coïtale",
      "Un caractère récidivant",
      "Une abondance modérée"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Une apparition des symptômes/leucorrhées dans les suites d'un rapport sexuel (caractère post-coïtal) ou après changement de partenaire oriente fortement à l'interrogatoire vers une infection sexuellement transmissible.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-25",
    "courseId": "c-gyn-infections",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Dans les infections génitales basses, quel élément suffit le plus souvent pour poser le diagnostic étiologique et instaurer le traitement adéquat ?",
    "options": [
      "Les sérologies systématiques",
      "Les données de l'examen clinique et de l'examen direct",
      "La cœlioscopie diagnostique",
      "L'IRM pelvienne",
      "La biopsie d'endomètre"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans les infections génitales basses courantes, l'examen clinique (spéculum, TV) complété par l'examen direct au microscope (état frais, test à la potasse, Gram) suffit le plus souvent à poser le diagnostic et traiter.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-26",
    "courseId": "c-gyn-infections",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Mme B., 31 ans — Consultation externe de Gynécologie-Obstétrique (CHU)]\nMme B., 31 ans, G2P1, 30 SA, diabète gestationnel. Prurit vulvaire intense, leucorrhées blanchâtres épaisses en lait caillé. Spéculum : enduit blanchâtre adhérent.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Vulvo-vaginite à Trichomonas vaginalis",
      "Vulvo-vaginite mycosique à Candida albicans",
      "Vaginose à Gardnerella vaginalis",
      "Cervicite gonococcique",
      "Herpès génital"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Prurit vulvaire intense, leucorrhées blanchâtres épaisses « en lait caillé » et enduit blanchâtre adhérent au spéculum pendant la grossesse et le diabète sont typiques d'une vulvo-vaginite mycosique à Candida albicans.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-27",
    "courseId": "c-gyn-infections",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Mme B., 31 ans — Consultation externe de Gynécologie-Obstétrique (CHU)]\nMme B., 31 ans, G2P1, 30 SA, diabète gestationnel. Prurit vulvaire intense, leucorrhées blanchâtres épaisses en lait caillé. Spéculum : enduit blanchâtre adhérent.\n\nQuestion : Parmi les éléments suivants, lesquels sont des facteurs favorisants de cette infection chez cette patiente ? (2 à 3 réponses)",
    "options": [
      "La grossesse",
      "Le diabète",
      "La parité (G2P1)",
      "Un terrain immunodéprimé",
      "Un antécédent de césarienne"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Les facteurs favorisants classiques de candidose vulvo-vaginale présents ou reconnus dans ce contexte sont la grossesse (A), le diabète (B) et l'immunodépression (D).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-28",
    "courseId": "c-gyn-infections",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Mme B., 31 ans — Consultation externe de Gynécologie-Obstétrique (CHU)]\nMme B., 31 ans, G2P1, 30 SA, diabète gestationnel. Prurit vulvaire intense, leucorrhées blanchâtres épaisses en lait caillé. Spéculum : enduit blanchâtre adhérent.\n\nQuestion : Quelle conduite thérapeutique locale est la plus adaptée ?",
    "options": [
      "Ovules d'éconazole associés à une toilette au savon alcalin et une pommade antimycosique locale",
      "Ovules de métronidazole pendant 15 jours et toilette au savon acide",
      "Ovules de métronidazole pendant 7 jours avec traitement du partenaire",
      "Macrolide per os en une prise",
      "Benzoate de benzyle en application locale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le traitement local d'une vulvo-vaginite candidosique associe des ovules antimycosiques (éconazole), une pommade antifongique locale et une toilette avec un savon alcalin (pH neutre/alcalin, car Candida préfère un milieu acide).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-29",
    "courseId": "c-gyn-infections",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Mme B., 31 ans — Consultation externe de Gynécologie-Obstétrique (CHU)]\nMme B., 31 ans, G2P1, 30 SA, diabète gestationnel. Prurit vulvaire intense, leucorrhées blanchâtres épaisses en lait caillé. Spéculum : enduit blanchâtre adhérent.\n\nQuestion : Concernant la prévention des récidives chez cette patiente, quelle proposition est juste ?",
    "options": [
      "Un traitement per os pendant 8 jours est nécessaire pour éviter les récidives",
      "Le traitement du partenaire est systématique et indispensable",
      "Une antibiothérapie à large spectre est indiquée en première intention",
      "Une cœlioscopie doit être programmée",
      "Aucune mesure n'est utile, les récidives sont inévitables"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Pour prévenir les récidives de candidose vulvo-vaginale (surtout sur terrain favorisant), le cours préconise l'association d'un traitement antifongique per os pendant 8 jours (A).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-30",
    "courseId": "c-gyn-infections",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Mlle K., 23 ans — Consultation EPH]\nMlle K., 23 ans, 2 partenaires sexuels. Leucorrhées abondantes, verdâtres, mousseuses, spumeuses et nauséabondes. Piqueté vulvaire.\n\nQuestion : Quel est le diagnostic retenu ?",
    "options": [
      "Candidose vulvo-vaginale",
      "Trichomonase vaginale",
      "Vaginose bactérienne à Gardnerella",
      "Oxyurose",
      "Phtiriase pubienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Leucorrhées abondantes, verdâtres, mousseuses, spumeuses et nauséabondes accompagnées d'un piqueté vulvo-vaginal (« col framboisé ») chez une jeune patiente à partenaires multiples : trichomonase vaginale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-31",
    "courseId": "c-gyn-infections",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Mlle K., 23 ans — Consultation EPH]\nMlle K., 23 ans, 2 partenaires sexuels. Leucorrhées abondantes, verdâtres, mousseuses, spumeuses et nauséabondes. Piqueté vulvaire.\n\nQuestion : Quelles sont les modalités thérapeutiques correctes ? (2 à 3 réponses)",
    "options": [
      "Ovule de métronidazole pendant 15 jours",
      "2 g de métronidazole per os en une seule prise, pour les deux conjoints",
      "Toilette au savon acide",
      "Ovules d'éconazole pendant 7 jours",
      "Benzoate de benzyle en application sur les OGE"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le traitement de la trichomonase associe ovule de métronidazole pendant 15 jours (A), traitement oral en prise unique de 2 g de métronidazole pour les deux conjoints (B) et toilette au savon acide (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-32",
    "courseId": "c-gyn-infections",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Mlle K., 23 ans — Consultation EPH]\nMlle K., 23 ans, 2 partenaires sexuels. Leucorrhées abondantes, verdâtres, mousseuses, spumeuses et nauséabondes. Piqueté vulvaire.\n\nQuestion : Concernant la conduite à tenir complémentaire, quelle proposition est fausse ?",
    "options": [
      "Il faut rechercher systématiquement les autres MST",
      "Le partenaire doit être traité même s'il est asymptomatique",
      "Une sérologie syphilitique et une recherche de VIH sont justifiées",
      "Le préservatif fait partie des mesures de prévention à conseiller",
      "La patiente peut reprendre ses rapports non protégés dès le premier jour du traitement"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Proposition fausse : E. Les rapports sexuels non protégés doivent être proscrits (protection par préservatif ou abstinence) jusqu'à la fin du traitement des deux partenaires et guérison complète.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-33",
    "courseId": "c-gyn-infections",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Mme L., 29 ans — Urgences gynécologiques, CHU]\nMme L., 29 ans, DIU au cuivre depuis 2 ans. Douleurs pelviennes bilatérales, fièvre à 38,7 °C, leucorrhées purulentes, douleur à la mobilisation du col, culs-de-sac empâtés.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "Cervicite aiguë isolée",
      "Salpingite aiguë (infection génitale haute)",
      "Grossesse extra-utérine",
      "Kyste ovarien compliqué",
      "Infection urinaire basse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Douleurs pelviennes bilatérales, fièvre à 38,7 °C, leucorrhées purulentes, douleur à la mobilisation utérine et empâtement des culs-de-sac chez une porteuse de DIU : salpingite aiguë (infection génitale haute).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-34",
    "courseId": "c-gyn-infections",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Mme L., 29 ans — Urgences gynécologiques, CHU]\nMme L., 29 ans, DIU au cuivre depuis 2 ans. Douleurs pelviennes bilatérales, fièvre à 38,7 °C, leucorrhées purulentes, douleur à la mobilisation du col, culs-de-sac empâtés.\n\nQuestion : Quels germes sont les plus fréquemment impliqués dans ce tableau ? (2 à 3 réponses)",
    "options": [
      "Chlamydia trachomatis",
      "Neisseria gonorrhoeae",
      "Bactéries anaérobies (Bacteroides, Peptostreptococcus)",
      "Candida albicans",
      "Sarcoptes scabiei"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les salpingites aiguës sont des infections polymicrobiennes impliquant principalement Chlamydia trachomatis (A), Neisseria gonorrhoeae (B) et les bactéries anaérobies (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-35",
    "courseId": "c-gyn-infections",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Mme L., 29 ans — Urgences gynécologiques, CHU]\nMme L., 29 ans, DIU au cuivre depuis 2 ans. Douleurs pelviennes bilatérales, fièvre à 38,7 °C, leucorrhées purulentes, douleur à la mobilisation du col, culs-de-sac empâtés.\n\nQuestion : Que faire du dispositif intra-utérin ?",
    "options": [
      "Le laisser en place jusqu'à la fin de l'antibiothérapie",
      "Le retirer au moment du diagnostic, avec mise en culture",
      "Le remplacer immédiatement par un DIU au lévonorgestrel",
      "Le retirer uniquement en cas d'échec du traitement",
      "Son retrait nécessite une laparotomie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En cas d'infection génitale haute survenant sous DIU, le dispositif intra-utérin doit être retiré dès le diagnostic posé et adressé en bactériologie (mise en culture).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-36",
    "courseId": "c-gyn-infections",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Mme L., 29 ans — Urgences gynécologiques, CHU]\nMme L., 29 ans, DIU au cuivre depuis 2 ans. Douleurs pelviennes bilatérales, fièvre à 38,7 °C, leucorrhées purulentes, douleur à la mobilisation du col, culs-de-sac empâtés.\n\nQuestion : Concernant l'antibiothérapie, quelle proposition est juste ?",
    "options": [
      "Elle est débutée par voie parentérale 2 à 3 jours, puis relais per os pour une durée totale de 21 jours",
      "Elle se limite à une dose unique d'azithromycine",
      "Elle doit être strictement active sur Chlamydia uniquement",
      "Elle est poursuivie pendant 5 jours au total",
      "Elle ne doit jamais associer de métronidazole"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'antibiothérapie d'une salpingite aiguë est débutée par voie parentérale pendant 2 à 3 jours jusqu'à apyrexie, suivie d'un relais per os pour une durée totale de 21 jours.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-37",
    "courseId": "c-gyn-infections",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Mme L., 29 ans — Urgences gynécologiques, CHU]\nMme L., 29 ans, DIU au cuivre depuis 2 ans. Douleurs pelviennes bilatérales, fièvre à 38,7 °C, leucorrhées purulentes, douleur à la mobilisation du col, culs-de-sac empâtés.\n\nQuestion : Dans quelles situations la cœlioscopie est-elle justifiée chez cette patiente ? (2 à 3 réponses)",
    "options": [
      "D'emblée, surtout s'il s'agit d'une nulligeste",
      "Après 48 h en cas d'absence d'amélioration malgré un traitement médical bien conduit",
      "Pour établir un pronostic tubaire et effectuer des prélèvements bactériologiques",
      "Systématiquement avant toute antibiothérapie, dans tous les cas",
      "Jamais, car elle est formellement contre-indiquée en phase aiguë"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La cœlioscopie est indiquée d'emblée chez la nulligeste (pronostic tubaire, A), après 48 heures d'évolution défavorable sous antibiothérapie bien conduite (B) et pour établir un bilan lésionnel/prélèvements (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-38",
    "courseId": "c-gyn-infections",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[M. S., 25 ans — Consultation de dermatologie-vénéréologie (EPH)]\nM. S., 25 ans, ulcération superficielle unique indolore du pénis à bordures indurées, adénopathie inguinale indolore. VDRL positif, TPHA positif.\n\nQuestion : Quel est le diagnostic ?",
    "options": [
      "Herpès génital",
      "Syphilis primaire",
      "Chancre mou (Haemophilus ducreyi)",
      "Aphte génital",
      "Gale avec chancre scabieux"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Une ulcération génitale unique, superficielle, indolore, à bords indurés, avec adénopathie inguinale indolore et sérologies VDRL/TPHA positives affirme le diagnostic de syphilis primaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-39",
    "courseId": "c-gyn-infections",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[M. S., 25 ans — Consultation de dermatologie-vénéréologie (EPH)]\nM. S., 25 ans, ulcération superficielle unique indolore du pénis à bordures indurées, adénopathie inguinale indolore. VDRL positif, TPHA positif.\n\nQuestion : Concernant la prise en charge réglementaire et l'évolution, quelle proposition est fausse ?",
    "options": [
      "La syphilis est une maladie à déclaration obligatoire",
      "Sans traitement, le chancre disparaît spontanément : c'est la syphilis primaire",
      "Après 6 à 10 semaines, peut s'installer une syphilis secondaire avec des lésions cutanées du tronc",
      "Une atteinte des organes définit la syphilis tertiaire",
      "L'absence de traitement n'a aucune conséquence sur l'évolution ultérieure"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Proposition fausse : E. En l'absence de traitement, la syphilis évolue malgré la disparition du chancre vers une syphilis secondaire (6 à 10 semaines) puis tertiaire avec atteintes viscérales graves.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-40",
    "courseId": "c-gyn-infections",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Mme R., 27 ans — Urgences, CHU (forme grave)]\nMme R., 27 ans, fièvre à 39,2 °C, défense pelvienne, douleur de l'hypochondre droit. Cœlioscopie : adhérences en cordes de violon entre la capsule de Glisson et la paroi abdominale antérieure.\n\nQuestion : Quels diagnostics retenez-vous ? (2 à 3 réponses)",
    "options": [
      "Pelvipéritonite purulente",
      "Périhépatite (syndrome de Fitz-Hugh-Curtis)",
      "Salpingite aiguë bilatérale",
      "Cholécystite aiguë lithiasique",
      "Appendicite aiguë"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La fièvre élevée, la défense pelvienne, la douleur de l'hypochondre droit et la découverte d'adhérences en « cordes de violon » périhépatiques signent une forme grave associant pelvipéritonite purulente (A), périhépatite de Fitz-Hugh-Curtis (B) et salpingite aiguë bilatérale (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-41",
    "courseId": "c-gyn-infections",
    "questionNumber": 41,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Mme R., 27 ans — Urgences, CHU (forme grave)]\nMme R., 27 ans, fièvre à 39,2 °C, défense pelvienne, douleur de l'hypochondre droit. Cœlioscopie : adhérences en cordes de violon entre la capsule de Glisson et la paroi abdominale antérieure.\n\nQuestion : Quel germe est le plus souvent impliqué dans la périhépatite de Fitz-Hugh-Curtis ?",
    "options": [
      "Neisseria gonorrhoeae",
      "Chlamydia trachomatis",
      "Candida albicans",
      "Treponema pallidum",
      "Gardnerella vaginalis"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chlamydia trachomatis est le germe le plus fréquemment responsable de la périhépatite (syndrome de Fitz-Hugh-Curtis).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-42",
    "courseId": "c-gyn-infections",
    "questionNumber": 42,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Mme R., 27 ans — Urgences, CHU (forme grave)]\nMme R., 27 ans, fièvre à 39,2 °C, défense pelvienne, douleur de l'hypochondre droit. Cœlioscopie : adhérences en cordes de violon entre la capsule de Glisson et la paroi abdominale antérieure.\n\nQuestion : Concernant le pronostic de cette patiente, quelle proposition est juste ?",
    "options": [
      "Le pronostic dépend de la gravité de l'atteinte hépatique",
      "Le pronostic dépend de la salpingite, et non de la péri-hépatite",
      "La périhépatite impose à elle seule une transplantation hépatique",
      "Il n'existe aucun risque de séquelle tubaire à ce stade",
      "La guérison est impossible malgré le traitement"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans le syndrome de Fitz-Hugh-Curtis, le pronostic ultérieur (notamment de fertilité) dépend exclusivement de la gravité des lésions tubaires liées à la salpingite, et non de l'atteinte péri-hépatique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-43",
    "courseId": "c-gyn-infections",
    "questionNumber": 43,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Mme R., 27 ans — Urgences, CHU (forme grave)]\nMme R., 27 ans, fièvre à 39,2 °C, défense pelvienne, douleur de l'hypochondre droit. Cœlioscopie : adhérences en cordes de violon entre la capsule de Glisson et la paroi abdominale antérieure.\n\nQuestion : Quelles sont les modalités correctes de prise en charge de cette forme grave ? (2 à 3 réponses)",
    "options": [
      "Hospitalisation avec repos, antalgiques, antipyrétiques et AINS",
      "Antibiothérapie parentérale pendant 7 jours encadrant un geste chirurgical",
      "Antibiothérapie à large spectre couvrant Chlamydia, gonocoque, anaérobies et entérobactéries",
      "Traitement ambulatoire par voie orale exclusive",
      "Abstention thérapeutique en attendant la disparition spontanée"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Une forme grave d'IGH impose l'hospitalisation avec repos, antalgiques/AINS (A), une antibiothérapie parentérale prolongée (7 jours encadrant un éventuel geste chirurgical, B) à large spectre couvrant Chlamydia, gonocoque, anaérobies et entérobactéries (C).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-1",
    "courseId": "c-gyn-contraception",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant le mécanisme d'action des contraceptifs œstroprogestatifs, quelle proposition est exacte ?",
    "options": [
      "Ils bloquent l'ovulation uniquement par rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire",
      "Ils agissent exclusivement par épaississement de la glaire cervicale",
      "Ils associent un blocage de l'ovulation, un épaississement de la glaire cervicale et une modification de l'endomètre",
      "Ils empêchent la nidation en modifiant l'endomètre sans bloquer l'ovulation",
      "Ils détruisent les spermatozoïdes dans les voies génitales"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le cours insiste sur le triple mécanisme des œstroprogestatifs : (1) blocage de l'ovulation par rétrocontrôle hypophyso-hypothalamique, (2) épaississement de la glaire cervicale gênant le passage des spermatozoïdes, (3) modification de l'endomètre le rendant impropre à la nidation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-2",
    "courseId": "c-gyn-contraception",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Concernant l'indice de Pearl, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "Il correspond au nombre de grossesses accidentelles pour 100 femmes-années",
      "Un indice bas signifie une meilleure efficacité contraceptive",
      "Le DIU au cuivre a un indice de Pearl inférieur à celui du préservatif masculin",
      "Le préservatif masculin a un indice de Pearl de 0,3",
      "L'indice de Pearl mesure la tolérance d'une méthode"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "A vrai : formule du cours = (nombre de grossesses accidentelles / nombre de cycles observés) × 12 × 100.\n\nB vrai : un indice bas = peu de grossesses accidentelles = méthode plus efficace.\n\nC vrai : DIU cuivre 0,6–0,8 vs préservatif masculin 2–15.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-3",
    "courseId": "c-gyn-contraception",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Concernant la contraception progestative orale, quelle proposition est FAUSSE ?",
    "options": [
      "Elle contient un progestatif uniquement",
      "Elle épaissit principalement la glaire cervicale",
      "Elle se prend en continu, 28 jours sans arrêt entre deux plaquettes",
      "Elle est contre-indiquée en cas d'antécédent de cancer du sein",
      "Elle bloque l'ovulation de façon aussi systématique que les œstroprogestatifs"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "E faux : le blocage ovulatoire de la microprogestative est inconstant et moins systématique que celui des COC.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-4",
    "courseId": "c-gyn-contraception",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes sont des contre-indications aux contraceptifs œstroprogestatifs, SAUF :",
    "options": [
      "Pathologie cardiaque sévère",
      "Insuffisance hépatique et cirrhose",
      "Cancer du sein ou de l'endomètre",
      "Antécédent personnel de thrombose veineuse",
      "Nulliparité"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "E : la nulliparité n'est pas une contre-indication.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-5",
    "courseId": "c-gyn-contraception",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Concernant les dispositifs intra-utérins (DIU), quelles propositions sont exactes ?",
    "options": [
      "Le DIU au cuivre a une durée d'action de 4 à 5 ans",
      "Le DIU au lévonorgestrel agit principalement par effet spermicide local",
      "Le DIU au lévonorgestrel est indiqué dans les ménorragies",
      "Le DIU au cuivre peut être posé par une sage-femme",
      "Le DIU au lévonorgestrel a une durée d'action de 5 ans"
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "A vrai : durée 4 à 5 ans. C vrai : indiqué dans les ménorragies. E vrai : durée 5 ans.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-6",
    "courseId": "c-gyn-contraception",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant l'implant sous-cutané à l'étonogestrel, quelle proposition est FAUSSE ?",
    "options": [
      "Il est inséré par voie sous-cutanée par un médecin",
      "Sa durée d'action est de 3 ans",
      "Son retrait nécessite une incision sous anesthésie",
      "Il agit uniquement par épaississement de la glaire cervicale",
      "Il bloque l'ovulation et épaissit la glaire cervicale"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "D faux : il bloque l'ovulation en plus d'épaissir la glaire cervicale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-7",
    "courseId": "c-gyn-contraception",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Une patiente sous pilule œstroprogestative a oublié un comprimé. Le retard est de 8 heures. Que faire ?",
    "options": [
      "Prendre le comprimé oublié et utiliser un préservatif pendant 7 jours",
      "Prendre le comprimé oublié et continuer normalement la plaquette sans méthode supplémentaire",
      "Arrêter la plaquette et attendre les règles",
      "Prendre deux comprimés le lendemain",
      "Prendre une contraception d'urgence"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Oubli < 12 h → prendre le comprimé oublié et continuer normalement la plaquette sans méthode supplémentaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-8",
    "courseId": "c-gyn-contraception",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Parmi les méthodes naturelles de contraception, on cite :",
    "options": [
      "La méthode des températures",
      "La méthode de la glaire cervicale (Billings)",
      "Le coït interrompu",
      "Le diaphragme",
      "La méthode MAMA (allaitement maternel et aménorrhée)"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Méthodes naturelles = température, Billings, coït interrompu, MAMA. Le diaphragme est mécanique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-9",
    "courseId": "c-gyn-contraception",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant la contraception d'urgence, quelle proposition est FAUSSE ?",
    "options": [
      "Elle se prend dans les 72 heures suivant le rapport",
      "Certains produits peuvent être pris jusqu'à 5 jours après le rapport",
      "Elle est efficace à 100 %",
      "Le lévonorgestrel est une molécule utilisée",
      "Elle ne protège pas contre les IST"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "C faux : aucune contraception d'urgence n'est efficace à 100 %.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-10",
    "courseId": "c-gyn-contraception",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Quel est le mécanisme d'action principal du DIU au cuivre ?",
    "options": [
      "Blocage de l'ovulation",
      "Réaction inflammatoire locale empêchant la fécondation de l'ovule par le spermatozoïde",
      "Épaississement de la glaire cervicale",
      "Modification de l'endomètre par effet hormonal",
      "Destruction des spermatozoïdes par effet osmotique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le cuivre provoque une réaction inflammatoire locale empêchant la fécondation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-11",
    "courseId": "c-gyn-contraception",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Concernant le patch transdermique et l'anneau vaginal, quelles propositions sont exactes ?",
    "options": [
      "Le patch se colle 1 fois par semaine pendant 3 semaines",
      "L'anneau vaginal s'insère au fond du vagin pour 3 semaines",
      "Les deux méthodes sont suivies d'une semaine d'arrêt",
      "L'anneau vaginal se change tous les jours",
      "Le patch s'applique sur la muqueuse vaginale"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le patch transdermique s'applique 1 fois par semaine pendant 3 semaines sur peau saine et l'anneau vaginal s'insère au fond du vagin pour 3 semaines ; tous deux sont suivis d'une semaine d'arrêt (A, B, C exactes). Le patch ne se pose pas sur muqueuse et l'anneau reste en place 3 semaines (D, E fausses).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-12",
    "courseId": "c-gyn-contraception",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Concernant l'anneau vaginal, quelle proposition est FAUSSE ?",
    "options": [
      "Il est à base d'œstroprogestatifs",
      "Il s'insère au fond du vagin",
      "Il reste en place 3 semaines puis 1 semaine d'arrêt",
      "Il se retire chaque nuit",
      "Il agit par blocage de l'ovulation"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "D faux : il reste en place en continu 3 semaines.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-13",
    "courseId": "c-gyn-contraception",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "La prescription d'une contraception nécessite toutes les étapes suivantes, SAUF :",
    "options": [
      "Un interrogatoire détaillé",
      "Un examen clinique",
      "Des examens complémentaires ciblés",
      "Une simple rédaction d'ordonnance sans évaluation préalable",
      "Une recherche systématique de contre-indications"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "La prescription d'une contraception impose toujours un interrogatoire détaillé, un examen clinique, la recherche systématique de contre-indications et des examens complémentaires ciblés. Une simple rédaction d'ordonnance sans évaluation préalable (D) est donc fausse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-14",
    "courseId": "c-gyn-contraception",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Concernant le stérilet hormonal (DIU au lévonorgestrel), quelles propositions sont exactes ?",
    "options": [
      "Il libère quotidiennement de très petites quantités d'hormones",
      "Il ralentit l'épaississement de la muqueuse utérine",
      "Il inhibe la mobilité des spermatozoïdes",
      "Il épaissit la glaire cervicale",
      "Sa durée d'action est de 10 ans"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Le DIU au lévonorgestrel libère quotidiennement de faibles doses de progestatif, ralentissant l'épaississement de l'endomètre, épaississant la glaire cervicale et inhibant la mobilité des spermatozoïdes (A, B, C, D exactes). Sa durée d'action est de 5 ans (et non 10 ans, E fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-15",
    "courseId": "c-gyn-contraception",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Concernant les œstroprogestatifs, quelle proposition est FAUSSE ?",
    "options": [
      "Les normodosés contiennent 50 µg d'éthinylestradiol",
      "Les minidosés contiennent 15 à 35 µg d'éthinylestradiol",
      "L'indice de Pearl des œstroprogestatifs est inférieur à 0,5",
      "Le blocage de l'ovulation est leur seul mécanisme d'action",
      "Ils modifient l'endomètre"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "D faux : triple mécanisme (ovulation + glaire + endomètre).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-16",
    "courseId": "c-gyn-contraception",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "L'indice de Pearl se calcule par :",
    "options": [
      "Nombre de grossesses accidentelles / nombre de cycles × 12 × 100",
      "Nombre de grossesses accidentelles / nombre de femmes × 100",
      "Nombre de cycles / nombre de grossesses × 100",
      "Nombre de grossesses / nombre d'années × 12",
      "Nombre de femmes enceintes / nombre de rapports × 100"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'indice de Pearl mesure le taux d'échec théorique ou pratique pour 100 années-femmes d'exposition : (nombre de grossesses accidentelles / nombre de cycles d'exposition) × 12 × 100.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-17",
    "courseId": "c-gyn-contraception",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Concernant la contraception locale (barrière), quelles propositions sont exactes ?",
    "options": [
      "Elle est généralement moins efficace que les méthodes hormonales",
      "Le préservatif masculin protège contre les IST",
      "Les spermicides seuls sont très efficaces",
      "Le diaphragme nécessite l'utilisation conjointe de spermicides",
      "Le préservatif féminin existe"
    ],
    "correctAnswers": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Les méthodes barrières sont globalement moins efficaces que la contraception hormonale (A). Le préservatif masculin protège contre les IST (B), le préservatif féminin existe également (E) et le diaphragme doit être associé aux spermicides (D). Les spermicides seuls ont une efficacité limitée (C fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-18",
    "courseId": "c-gyn-contraception",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Concernant la stérilisation à visée contraceptive, quelle proposition est FAUSSE ?",
    "options": [
      "Elle est définitive",
      "La vasectomie est la stérilisation masculine",
      "Elle est réversible à 100 %",
      "Elle nécessite une information éclairée",
      "La stérilisation féminine existe"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "C faux : méthode définitive, non réversible à 100 %.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-19",
    "courseId": "c-gyn-contraception",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Les contraceptifs œstroprogestatifs associent :",
    "options": [
      "Deux progestatifs",
      "Un œstrogène et un progestatif",
      "Deux œstrogènes",
      "Un progestatif seul",
      "Un œstrogène seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les contraceptifs œstroprogestatifs (COC) associent un œstrogène (habituellement l'éthinylestradiol) et un progestatif de synthèse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-20",
    "courseId": "c-gyn-contraception",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "En cas d'oubli de pilule de plus de 12 heures, quelles mesures sont correctes ?",
    "options": [
      "Prendre le comprimé oublié dès que possible",
      "Prendre le comprimé du jour comme d'habitude",
      "Continuer la plaquette normalement jusqu'à la fin",
      "Utiliser une méthode locale jusqu'à la fin de la plaquette",
      "Arrêter immédiatement la plaquette"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "En cas d'oubli de pilule COC > 12 heures : prendre le comprimé oublié dès que possible (A), prendre le comprimé du jour à l'heure habituelle (B), poursuivre la plaquette jusqu'au bout (C) et utiliser une méthode barrière locale jusqu'à la fin de la plaquette (D).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-21",
    "courseId": "c-gyn-contraception",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Quel est le rôle de l'éthinylestradiol dans un contraceptif œstroprogestatif ?",
    "options": [
      "Il épaissit la glaire cervicale",
      "Il participe au blocage de l'ovulation par rétrocontrôle négatif",
      "Il provoque une réaction inflammatoire",
      "Il détruit les spermatozoïdes",
      "Il est inactif — seul le progestatif agit"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'éthinylestradiol assure un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire (freinant notamment la FSH) et participe ainsi au blocage de l'ovulation tout en assurant un bon contrôle du cycle.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-22",
    "courseId": "c-gyn-contraception",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Toutes les méthodes suivantes sont des contraceptions hormonales, SAUF :",
    "options": [
      "Pilule œstroprogestative",
      "Patch transdermique",
      "Anneau vaginal",
      "Diaphragme",
      "Implant sous-cutané"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "La pilule œstroprogestative, le patch transdermique, l'anneau vaginal et l'implant sous-cutané sont des contraceptions hormonales. Le diaphragme (D) est une méthode mécanique/barrière.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-23",
    "courseId": "c-gyn-contraception",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Concernant la pilule progestative (microprogestative), quelles propositions sont exactes ?",
    "options": [
      "Elle se prend en continu, sans interruption entre deux plaquettes",
      "Elle doit être prise à heure fixe",
      "Elle épaissit la glaire cervicale",
      "Elle contient de l'éthinylestradiol",
      "Elle est contre-indiquée en cas de cancer du sein"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "La pilule microprogestative se prend en continu sans interruption (A), à heure fixe (B), agit principalement en épaississant la glaire cervicale (C) et est contre-indiquée en cas de cancer du sein (E). Elle ne contient pas d'éthinylestradiol (D fausse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-24",
    "courseId": "c-gyn-contraception",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Concernant l'indice de Pearl, quelle proposition est FAUSSE ?",
    "options": [
      "Le DIU au lévonorgestrel a un indice de Pearl de 0,2",
      "Le préservatif masculin a un indice de Pearl de 2 à 15",
      "Les spermicides ont un indice de Pearl de 18 à 29",
      "Les méthodes naturelles ont un indice de Pearl de 1 à 9",
      "Un indice de Pearl élevé signifie une meilleure efficacité"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "E faux : plus l'indice de Pearl est bas, plus la méthode est efficace.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-25",
    "courseId": "c-gyn-contraception",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "La contraception d'urgence hormonale agit principalement par :",
    "options": [
      "Destruction de l'embryon",
      "Retard ou inhibition de l'ovulation",
      "Effet abortif",
      "Stérilisation temporaire",
      "Action spermicide directe"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La contraception d'urgence hormonale (lévonorgestrel ou ulipristal) agit principalement en retardant ou en inhibant le pic ovulatoire (blocage/retard de l'ovulation). Elle n'est pas abortive.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-26",
    "courseId": "c-gyn-contraception",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas n°1 — Première contraception chez une jeune femme]\nMme K.L., 22 ans, nulligeste, consulte au EPH de Tipaza pour une première contraception. Cycles réguliers (28 j), règles de 4 jours. TA 110/70 mmHg, IMC 22. Fume 5 cigarettes/jour. Pas de migraine avec aura. Pas d'antécédent personnel ni familial de thrombose. Pas de grossesse en cours.\n\nQuestion : Quelle est la meilleure option de première intention ?",
    "options": [
      "Œstroprogestatif minidosé",
      "Œstroprogestatif normodosé",
      "Pilule progestative",
      "DIU au cuivre",
      "Stérilisation tubaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Chez une femme < 35 ans, tabagisme < 15 cig/j, sans facteur de risque cardiovasculaire, l'œstroprogestatif minidosé est la première intention.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-27",
    "courseId": "c-gyn-contraception",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas n°1 — Première contraception chez une jeune femme]\nMme K.L., 22 ans, nulligeste, consulte au EPH de Tipaza pour une première contraception. Cycles réguliers (28 j), règles de 4 jours. TA 110/70 mmHg, IMC 22. Fume 5 cigarettes/jour. Pas de migraine avec aura. Pas d'antécédent personnel ni familial de thrombose. Pas de grossesse en cours.\n\nQuestion : Parmi ces antécédents, lequel constituerait une contre-indication absolue aux œstroprogestatifs ?",
    "options": [
      "Nulliparité",
      "Tabagisme à 5 cig/jour",
      "Migraine avec aura",
      "Antécédent familial de diabète de type 2",
      "IMC à 22"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La migraine avec aura est une contre-indication formelle aux COC.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-28",
    "courseId": "c-gyn-contraception",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas n°1 — Première contraception chez une jeune femme]\nMme K.L., 22 ans, nulligeste, consulte au EPH de Tipaza pour une première contraception. Cycles réguliers (28 j), règles de 4 jours. TA 110/70 mmHg, IMC 22. Fume 5 cigarettes/jour. Pas de migraine avec aura. Pas d'antécédent personnel ni familial de thrombose. Pas de grossesse en cours.\n\nQuestion : Si la patiente avait 38 ans et fumait 20 cigarettes/jour, quelle serait l'attitude la plus adaptée ?",
    "options": [
      "Prescrire un COC minidosé",
      "Prescrire un COC normodosé",
      "Contre-indiquer les COC et proposer une méthode progestative ou un DIU",
      "Prescrire un patch transdermique",
      "Ne rien prescrire"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Âge ≥ 35 ans + tabac ≥ 15 cig/j = contre-indication absolue aux COC.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-29",
    "courseId": "c-gyn-contraception",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas n°1 — Première contraception chez une jeune femme]\nMme K.L., 22 ans, nulligeste, consulte au EPH de Tipaza pour une première contraception. Cycles réguliers (28 j), règles de 4 jours. TA 110/70 mmHg, IMC 22. Fume 5 cigarettes/jour. Pas de migraine avec aura. Pas d'antécédent personnel ni familial de thrombose. Pas de grossesse en cours.\n\nQuestion : Quelle méthode lui garantit, en plus de la contraception, une protection contre les IST ?",
    "options": [
      "Pilule œstroprogestative",
      "DIU au cuivre",
      "Implant sous-cutané",
      "Préservatif masculin",
      "Anneau vaginal"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Seul le préservatif (masculin ou féminin) assure une double protection : contraceptive et contre les infections sexuellement transmissibles (IST).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-30",
    "courseId": "c-gyn-contraception",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas n°2 — Oubli de pilule et rapport non protégé]\nMme B.S., 28 ans, G2P1, sous COC minidosée depuis 2 ans. Elle consulte au CHU Mustapha Pacha car elle a oublié 2 comprimés consécutifs en début de plaquette. Elle a eu un rapport non protégé il y a 48 h.\n\nQuestion : Quelle est l'attitude immédiate correcte vis-à-vis de la plaquette ?",
    "options": [
      "Prendre les 2 comprimés oubliés et continuer sans autre mesure",
      "Prendre 1 comprimé immédiatement et utiliser une méthode locale 7 jours",
      "Prendre les 2 comprimés oubliés, continuer la plaquette ET utiliser une méthode locale jusqu'à la fin de la plaquette",
      "Arrêter la plaquette",
      "Attendre les règles"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Oubli > 12 h : prendre comprimé oublié + comprimé du jour + méthode locale jusqu'à la fin de la plaquette.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-31",
    "courseId": "c-gyn-contraception",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas n°2 — Oubli de pilule et rapport non protégé]\nMme B.S., 28 ans, G2P1, sous COC minidosée depuis 2 ans. Elle consulte au CHU Mustapha Pacha car elle a oublié 2 comprimés consécutifs en début de plaquette. Elle a eu un rapport non protégé il y a 48 h.\n\nQuestion : Quelle contraception d'urgence peut être proposée ?",
    "options": [
      "Aucune, le délai est trop long",
      "Lévonorgestrel 1,5 mg dans les 72 h",
      "DIU au cuivre dans les 5 jours",
      "Ulipristal acétate dans les 120 h",
      "Toutes les options B, C et D sont possibles"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "À 48 heures d'un rapport non protégé, toutes les options B, C et D sont utilisables : lévonorgestrel 1,5 mg (jusqu'à 72 h), ulipristal acétate (jusqu'à 120 h) ou pose d'un DIU au cuivre (jusqu'à 5 jours).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-32",
    "courseId": "c-gyn-contraception",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas n°2 — Oubli de pilule et rapport non protégé]\nMme B.S., 28 ans, G2P1, sous COC minidosée depuis 2 ans. Elle consulte au CHU Mustapha Pacha car elle a oublié 2 comprimés consécutifs en début de plaquette. Elle a eu un rapport non protégé il y a 48 h.\n\nQuestion : Jusqu'à quand le préservatif doit-il être utilisé en complément ?",
    "options": [
      "24 h",
      "48 h",
      "7 jours",
      "Jusqu'à la fin de la plaquette",
      "Jusqu'au cycle suivant"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Devant un oubli > 12 heures (ou 2 comprimés oubliés), une contraception locale complémentaire (préservatif) doit être poursuivie jusqu'à la fin de la plaquette.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-33",
    "courseId": "c-gyn-contraception",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas n°2 — Oubli de pilule et rapport non protégé]\nMme B.S., 28 ans, G2P1, sous COC minidosée depuis 2 ans. Elle consulte au CHU Mustapha Pacha car elle a oublié 2 comprimés consécutifs en début de plaquette. Elle a eu un rapport non protégé il y a 48 h.\n\nQuestion : Quel est le risque principal en l'absence de prise en charge ?",
    "options": [
      "Grossesse non désirée",
      "Ménopause précoce",
      "Cancer ovarien",
      "Ostéoporose",
      "Thrombose veineuse"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "En l'absence de prise en charge après un oubli de pilule avec rapport non protégé en début de plaquette, le risque majeur immédiat est la survenue d'une grossesse non désirée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-34",
    "courseId": "c-gyn-contraception",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas n°3 — Ménorragies et choix contraceptif]\nMme H.M., 35 ans, G3P3, consulte au CHU de Blida pour ménorragies depuis 1 an avec asthénie. Hb = 9 g/dL, ferritine basse. Échographie : utérus augmenté de volume avec petit fibrome sous-muqueux de 2 cm. Souhaite une contraception fiable.\n\nQuestion : Quelle méthode contraceptive est la plus adaptée ?",
    "options": [
      "COC normodosé",
      "DIU au cuivre",
      "DIU au lévonorgestrel",
      "Préservatif seul",
      "Spermicides"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le DIU au lévonorgestrel est la méthode de choix pour contraception et réduction des ménorragies.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-35",
    "courseId": "c-gyn-contraception",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas n°3 — Ménorragies et choix contraceptif]\nMme H.M., 35 ans, G3P3, consulte au CHU de Blida pour ménorragies depuis 1 an avec asthénie. Hb = 9 g/dL, ferritine basse. Échographie : utérus augmenté de volume avec petit fibrome sous-muqueux de 2 cm. Souhaite une contraception fiable.\n\nQuestion : Quel mécanisme explique l'effet sur les ménorragies ?",
    "options": [
      "Destruction de l'endomètre",
      "Ralentissement de l'épaississement de la muqueuse utérine",
      "Action spermicide directe",
      "Blocage de l'ovulation",
      "Effet abortif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le lévonorgestrel libéré localement par le DIU hormonal provoque une atrophie/ralentissement de l'épaississement de la muqueuse utérine (endomètre), réduisant nettement l'abondance et la durée des ménorragies.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-36",
    "courseId": "c-gyn-contraception",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas n°3 — Ménorragies et choix contraceptif]\nMme H.M., 35 ans, G3P3, consulte au CHU de Blida pour ménorragies depuis 1 an avec asthénie. Hb = 9 g/dL, ferritine basse. Échographie : utérus augmenté de volume avec petit fibrome sous-muqueux de 2 cm. Souhaite une contraception fiable.\n\nQuestion : Quelle est la durée d'action du DIU au lévonorgestrel selon le cours ?",
    "options": [
      "1 an",
      "3 ans",
      "5 ans",
      "10 ans",
      "15 ans"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Selon le cours, la durée d'efficacité contraceptive du DIU au lévonorgestrel est de 5 ans.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-37",
    "courseId": "c-gyn-contraception",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas n°4 — Antécédent thromboembolique]\nMme S.A., 30 ans, G1P1, antécédent de thrombose veineuse profonde il y a 2 ans (sous AVK). Consulte au CHU d'Oran pour contraception.\n\nQuestion : Quelle contraception est formellement contre-indiquée ?",
    "options": [
      "DIU au cuivre",
      "DIU au lévonorgestrel",
      "COC",
      "Pilule progestative",
      "Implant"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Un antécédent personnel de thrombose veineuse profonde constitue une contre-indication absolue et formelle aux contraceptifs œstroprogestatifs combinés (COC).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-38",
    "courseId": "c-gyn-contraception",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas n°4 — Antécédent thromboembolique]\nMme S.A., 30 ans, G1P1, antécédent de thrombose veineuse profonde il y a 2 ans (sous AVK). Consulte au CHU d'Oran pour contraception.\n\nQuestion : Quelle alternative est la plus appropriée ?",
    "options": [
      "COC minidosé",
      "Patch transdermique",
      "DIU au cuivre ou contraception progestative seule",
      "Anneau vaginal",
      "Aucune contraception"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "En présence d'une contre-indication absolue aux œstrogènes (ATCD thromboembolique), l'alternative adaptée repose sur un DIU au cuivre ou une contraception progestative seule.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-39",
    "courseId": "c-gyn-contraception",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas n°4 — Antécédent thromboembolique]\nMme S.A., 30 ans, G1P1, antécédent de thrombose veineuse profonde il y a 2 ans (sous AVK). Consulte au CHU d'Oran pour contraception.\n\nQuestion : Pourquoi les œstroprogestatifs sont-ils contre-indiqués dans ce contexte ?",
    "options": [
      "Risque hémorragique",
      "Risque thromboembolique veineux et artériel",
      "Risque d'infertilité définitive",
      "Risque de cancer ovarien",
      "Risque d'ostéoporose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les œstroprogestatifs augmentent les facteurs de coagulation et exposent à un risque thromboembolique veineux et artériel majeur chez une patiente ayant déjà présenté une TVP.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-40",
    "courseId": "c-gyn-contraception",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas n°5 — Contraception d'urgence aux urgences]\nMme R.N., 19 ans, étudiante, consulte aux urgences gynécologiques du CHU de Constantine 2 h après un rapport non protégé. Pas de contraception. Dernières règles il y a 14 jours.\n\nQuestion : Quelle contraception d'urgence peut être proposée ?",
    "options": [
      "Lévonorgestrel 1,5 mg dans les 72 h",
      "Ulipristal acétate dans les 120 h",
      "DIU au cuivre dans les 5 jours",
      "Toutes les propositions A, B et C sont possibles",
      "Aucune"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Toutes les méthodes de contraception d'urgence (lévonorgestrel ≤ 72 h, ulipristal ≤ 120 h et DIU au cuivre ≤ 5 jours) peuvent être proposées à 2 heures d'un rapport non protégé.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-41",
    "courseId": "c-gyn-contraception",
    "questionNumber": 41,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas n°5 — Contraception d'urgence aux urgences]\nMme R.N., 19 ans, étudiante, consulte aux urgences gynécologiques du CHU de Constantine 2 h après un rapport non protégé. Pas de contraception. Dernières règles il y a 14 jours.\n\nQuestion : Quel est le délai maximal pour le lévonorgestrel selon le cours ?",
    "options": [
      "12 h",
      "24 h",
      "48 h",
      "72 h",
      "120 h"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Le lévonorgestrel (1,5 mg en prise unique) doit être administré le plus tôt possible et au plus tard dans les 72 heures suivant le rapport non protégé.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-42",
    "courseId": "c-gyn-contraception",
    "questionNumber": 42,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas n°5 — Contraception d'urgence aux urgences]\nMme R.N., 19 ans, étudiante, consulte aux urgences gynécologiques du CHU de Constantine 2 h après un rapport non protégé. Pas de contraception. Dernières règles il y a 14 jours.\n\nQuestion : Après la contraception d'urgence, que doit-on recommander ?",
    "options": [
      "Débuter une contraception régulière",
      "Utiliser un préservatif en attendant",
      "Faire un test de grossesse si retard de règles",
      "Proposer un dépistage des IST",
      "Toutes les propositions"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Après une contraception d'urgence, il faut instaurer une contraception régulière, utiliser un préservatif en attendant son efficacité, réaliser un test de grossesse en cas de retard de règles et proposer un dépistage des IST (toutes exactes : E).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-43",
    "courseId": "c-gyn-contraception",
    "questionNumber": 43,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas n°5 — Contraception d'urgence aux urgences]\nMme R.N., 19 ans, étudiante, consulte aux urgences gynécologiques du CHU de Constantine 2 h après un rapport non protégé. Pas de contraception. Dernières règles il y a 14 jours.\n\nQuestion : La contraception d'urgence protège-t-elle contre les IST ?",
    "options": [
      "Oui, totalement",
      "Oui, partiellement",
      "Non",
      "Seulement contre le VIH",
      "Seulement contre la syphilis"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La contraception d'urgence hormonale ou par DIU ne confère aucune protection contre les infections sexuellement transmissibles (IST).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  }
];
