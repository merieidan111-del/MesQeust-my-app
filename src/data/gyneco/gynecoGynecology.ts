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
    "explanation": "Les facteurs de risque classiques incluent la nulliparité, l'origine ethnique (femmes noires), les antécédents familiaux et l'obésité. A est faux : C'est la tumeur bénigne la plus fréquente. B est faux : Le pic se situe entre 35 et 50 ans, et les fibromes régressent après la ménopause. C est faux : La prolifération est monoclonale. E est faux : Les œstrogènes stimulent la croissance, tandis que la progestérone a un effet complexe (stimule les mitoses mais favorise l'apoptose). Les fibromes régressent après la ménopause, pas sous l'effet de la progestérone.",
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
    "explanation": "La physiopathologie implique les œstrogènes (E2), la progestérone (P4) et des facteurs de croissance comme IGF, TGF-β, VEGF, PDGF. D est faux : La FSH n'est pas directement impliquée dans la pathogenèse du fibrome. E est faux : Le TNF-α n'est pas un facteur clé reconnu dans ce contexte, bien que l'inflammation puisse jouer un rôle, les facteurs cités dans le cours sont IGF, TGF-β, VEGF, PDGF.",
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
    "explanation": "Selon la classification FIGO, les fibromes sous-muqueux sont : 0 (pédiculé intra-cavitaire), 1 (moins de 50% intra-mural), 2 (plus de 50% intra-mural). A est faux : Il s'agit du type 3 (intra-mural au contact de l'endomètre). B est faux : Il s'agit du type 5 (sous-séreux > 50% intra-mural). D est faux : Il s'agit du type 0. E est faux : Il s'agit du type 4.",
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
    "explanation": "L'infertilité n'est pas exceptionnelle, elle fait partie des complications fréquentes, avec des troubles de l'implantation, des fausses couches et un risque d'accouchement prématuré. A, B, C, E sont exactes : Les ménorragies sont le symptôme principal (A). La douleur aiguë signe la nécrobiose ou la torsion (B). Le syndrome de masse comprime les organes de voisinage (C). L'échographie est l'examen de première intention, souvent fortuit (E).",
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
    "explanation": "L'hystéroscopie est l'examen de choix pour explorer les fibromes sous-muqueux (intra-cavitaires), et non les fibromes sous-séreux. A, B, D, E sont vraies : L'écho est de 1ère intention (A). L'IRM est pour le bilan pré-thérapeutique (B). La clinique est typique (D). L'IRM est effectivement supérieure pour la cartographie précise (E).",
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
    "explanation": "L'adénomyose est le diagnostic différentiel principal car elle se présente également par un utérus augmenté de taille et des ménorragies, mais l'utérus est souvent globuleux et douloureux. B est faux : Le cancer de l'ovaire est un diagnostic différentiel possible, mais l'adénomyose est le piège classique. C est faux : La GEU ne se présente pas comme une masse utérine. D est faux : Le kyste ovarien fonctionnel est une masse annexielle, non utérine. E est faux : L'endométriose profonde donne des douleurs mais pas typiquement un utérus augmenté de taille.",
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
    "explanation": "Les complications sont l'anémie (A), la nécrobiose aseptique (B), la torsion (C), la compression (E) et rarement la dégénérescence sarcomateuse. D est faux : La transformation sarcomateuse est exceptionnelle (moins de 1%), et non de 10%.",
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
    "explanation": "L'ulipristal (modulateur des récepteurs de la progestérone) est utilisé pour réduire le volume du fibrome et contrôler les saignements. A est faux : Les analogues de la GnRH sont utilisés en pré-opératoire (3-6 mois), pas au long cours (risque de ménopause et perte osseuse). C est faux : Les progestatifs peuvent être utilisés pour contrôler les saignements. D est faux : Les AINS traitent la douleur et les ménorragies, mais n'ont pas d'effet sur le volume. E est faux : Le traitement médical est suspensif, pas curatif.",
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
    "explanation": "La myomectomie est le traitement conservateur de choix pour préserver la fertilité. A est faux : L'hystérectomie est un traitement radical, réservé aux femmes ne désirant plus de grossesse. C est faux : L'embolisation est une alternative, mais la myomectomie est le gold standard pour la fertilité. D est faux : La radiofréquence est une technique mini-invasive, mais la myomectomie reste la référence pour le désir de grossesse. E est faux : La patiente est symptomatique, l'abstention n'est pas indiquée.",
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
    "explanation": "La césarienne n'est pas systématique. Elle est indiquée en fonction de la localisation, de la taille et des complications obstétricales. A, B, D, E sont vraies : La nécrobiose est une complication douloureuse de la grossesse (A). Les fibromes peuvent gêner la présentation (B). La myomectomie en urgence est risquée (D). Les fibromes peuvent causer des fausses couches (E).",
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
    "explanation": "La décision thérapeutique dépend de l'âge (A), du désir de grossesse (B), des symptômes (C), et de la taille/localisation (D). E est faux : L'anémie est une conséquence, pas un critère décisionnel majeur dans le choix de la stratégie (bien qu'elle nécessite une prise en charge symptomatique).",
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
    "explanation": "La résection hystéroscopique est le traitement de choix pour les fibromes sous-muqueux (type 0, 1, 2) symptomatiques avec désir de grossesse. Elle est mini-invasive et conservatrice. A est faux : Radical, incompatible avec le désir de grossesse. C est faux : L'embolisation peut compromettre la fertilité et n'est pas le traitement de première intention pour un fibrome sous-muqueux. D est faux : Les analogues de la GnRH ne se donnent pas à vie. E est faux : La patiente est symptomatique (ménorragies) et infertile, il faut traiter.",
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
    "explanation": "L'EAU est une technique mini-invasive (radiologie interventionnelle). Elle est efficace mais peut altérer la réserve ovarienne et la fertilité, donc n'est pas recommandée en 1ère intention chez les femmes souhaitant une grossesse. A est faux : C'est une technique mini-invasive par voie percutanée (artère fémorale). B est faux : Elle n'est pas strictement contre-indiquée, mais doit être discutée. D est faux : Elle ne cause pas systématiquement une ménopause définitive. E est faux : Elle est indiquée pour les fibromes intra-muraux et sous-séreux, pas pour les sous-muqueux (où la résection hystéroscopique est préférée).",
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
    "explanation": "La transformation sarcomateuse est exceptionnelle (< 1%), il ne faut pas la rechercher systématiquement. A, B, C, E sont exactes : La régression après ménopause (A), la classification FIGO (B), l'adénomyose (C) et l'échographie (E) sont des notions clés.",
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
    "explanation": "L'hystérectomie est indiquée pour les fibromes volumineux/récidivants (A), chez la femme ménopausée symptomatique (B), et chez la femme ne désirant plus de grossesse avec symptômes invalidants (E). C est faux : C'est une contre-indication absolue (traitement radical). D est faux : Le traitement de choix est la résection hystéroscopique.",
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
    "explanation": "Toute métrorragie chez une femme ménopausée doit faire éliminer un cancer de l'endomètre en priorité, même en présence d'un fibrome. Le fibrome ne régression pas après la ménopause, mais les saignements sont anormaux et nécessitent une exploration (hystéroscopie + biopsie). A est faux : La nécrobiose donne des douleurs, pas des métrorragies chez la femme ménopausée. C est faux : L'adénomyose régresse aussi après la ménopause. D et E sont faux : Ce sont des diagnostics improbables à cet âge.",
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
    "explanation": "Les anomalies génétiques décrites incluent une mutation du chromosome 7 et une duplication du chromosome 12 (q13-15). B est faux : Il s'agit d'une duplication, pas d'une délétion. C est faux : La transmission n'est pas mendélienne simple, mais il existe une prédisposition familiale. D est faux : Les facteurs génétiques sont impliqués (prolifération monoclonale). E est faux : Ce n'est pas la seule anomalie.",
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
    "explanation": "L'IRM est excellente pour la cartographie (A), le diagnostic différentiel avec l'adénomyose (B), le bilan pré-thérapeutique (C) et l'évaluation de la vascularisation (E). D est faux : L'IRM n'est pas forcément meilleure que l'échographie pour les très petits fibromes, et n'est pas indiquée en 1ère intention pour cela.",
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
    "explanation": "Les fibromes, en particulier sous-muqueux, altèrent la cavité utérine et l'endomètre, entraînant des troubles de l'implantation, des fausses couches et un accouchement prématuré. A est faux : Les fibromes ne causent pas directement d'obstruction tubaire. C et D sont faux : Ils n'affectent pas directement l'ovulation ou la réserve ovarienne. E est faux : Pas de lien avec la prolactine.",
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
    "explanation": "La chirurgie prophylactique n'est pas indiquée car le risque de transformation maligne est exceptionnel. On ne retire pas un fibrome asymptomatique \"pour prévenir\". A, B, D, E sont vraies : L'abstention est la règle (A), la surveillance est annuelle (B), l'information est cruciale (D), et la découverte est souvent fortuite (E).",
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
    "explanation": "Le traitement symptomatique inclut le fer (A), les AINS (B), les analogues de la GnRH (C) et les progestatifs (D). E est faux : Les antibiotiques ne sont pas indiqués en systématique, sauf en cas d'infection associée (rare).",
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
    "explanation": "La résection hystéroscopique traite le fibrome sous-muqueux (cause du saignement) et la supplémentation en fer corrige l'anémie. C'est le traitement étiologique et symptomatique. A est faux : Ne traite pas la cause. C est faux : Radical, non indiqué chez une femme de 38 ans (désir de grossesse potentiel). D est faux : L'embolisation n'est pas le traitement de 1ère intention pour un fibrome sous-muqueux. E est faux : L'ulipristal peut être utilisé, mais la résection est le traitement définitif.",
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
    "explanation": "La nécrobiose aseptique est une dégénérescence ischémique du fibrome, se manifestant par une douleur pelvienne aiguë, une défense et un syndrome inflammatoire. A est faux : Elle est aseptique (pas d'infection). C est faux : Elle survient surtout pendant la grossesse ou en cas de fibrome volumineux. D est faux : Le traitement est médical (antalgiques, AINS) en première intention, la chirurgie est rarement nécessaire en urgence. E est faux : Elle est très douloureuse.",
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
    "explanation": "Le type 4 est un fibrome intra-mural strict. Le type 5 est sous-séreux avec plus de 50% intra-mural. A, B, D, E sont exactes : Type 0 (A), Type 3 (B), Type 6 (D), Type 8 (E) sont conformes à la classification.",
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
    "explanation": "Le fibrome apparaît comme une masse hypoéchogène, homogène, bien limitée (A), avec parfois des calcifications (B), une atténuation postérieure (C) et une vascularisation périphérique au Doppler (E). D est faux : Le fibrome est solide, pas kystique.",
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
    "questionText": "[Vignette Clinique]\nVignette Clinique Mme B., 45 ans, G3P3, consulte aux urgences gynécologiques du CHU de Bab El Oued pour une douleur pelvienne aiguë intense, apparue brutalement il y a 6 heures, associée à des nausées et vomissements. Elle est apyrétique. L'examen retrouve une défense abdominale, un utérus augmenté de taille avec une masse latéro-utérine sensible. L'échographie révèle un fibrome sous-séreux pédiculé de 8 cm, avec un aspect hétérogène et une absence de flux au Doppler.\n\nQuestion : 1. Quel est le diagnostic le plus probable ?",
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
    "explanation": "La douleur aiguë + absence de flux au Doppler + masse pédiculée = torsion. C'est une urgence chirurgicale. A est faux : La nécrobiose donne une douleur plus progressive et un syndrome inflammatoire. C est faux : L'échographie a visualisé un fibrome, pas une GEU. D est faux : La masse est utérine (fibrome), pas ovarienne. E est faux : La clinique est gynécologique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-27",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Vignette Clinique]\nVignette Clinique Mme K., 38 ans, nullipare, consulte à l'EPH de la ville pour des ménorragies évoluant depuis 1 an, responsables d'une anémie ferriprive (Hb à 8 g/dL). Elle désire une grossesse. L'échographie pelvienne montre un utérus augmenté de taille avec un fibrome sous-muqueux de 3 cm, classé FIGO 2.\n\nQuestion : 1. Quel est le traitement le plus adapté pour cette patiente ?",
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
    "explanation": "La résection hystéroscopique est le traitement de choix pour les fibromes sous-muqueux (FIGO 1 et 2) symptomatiques avec désir de grossesse. Elle est mini-invasive et conservatrice. La supplémentation en fer est nécessaire pour corriger l'anémie. A est faux : Radical, incompatible avec le désir de grossesse. C est faux : L'embolisation n'est pas recommandée pour les fibromes sous-muqueux et peut compromettre la fertilité. D est faux : La myomectomie par laparotomie est réservée aux fibromes intra-muraux ou sous-séreux. E est faux : L'ulipristal est un traitement suspensif, pas définitif, et ne traite pas l'anémie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-28",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Vignette Clinique]\nVignette Clinique Mme D., 32 ans, consulte pour infertilité primaire de 2 ans. Elle présente des cycles réguliers. L'échographie révèle un fibrome intra-mural de 5 cm (FIGO 4). Le bilan hormonal est normal. Le spermogramme du conjoint est normal. Le couple est candidat à une FIV.\n\nQuestion : 1. Quel est l'impact de ce fibrome sur la fertilité ?",
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
    "explanation": "Les fibromes intra-muraux (FIGO 4) peuvent altérer la vascularisation de l'endomètre et la réceptivité utérine, augmentant le risque de fausses couches et d'échec d'implantation. A est faux : Les fibromes intra-muraux peuvent avoir un impact. C est faux : L'obstruction est tubaire, pas utérine. D est faux : Les fibromes n'affectent pas l'ovulation. E est faux : L'hystérectomie est une contre-indication à la grossesse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-29",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Vignette Clinique]\nVignette Clinique Mme L., 29 ans, enceinte à 22 SA, consulte pour des douleurs abdominales aiguës, une fièvre à 38,5°C et une sensibilité utérine. L'échographie montre un fibrome de 10 cm en nécrobiose. La patiente est à jeun et présente des vomissements.\n\nQuestion : 1. Quel est le diagnostic le plus probable ?",
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
    "explanation": "La triade douleur + fièvre + fibrome connu = nécrobiose aseptique. La fièvre est due à la réaction inflammatoire, pas à une infection. A est faux : La chorioamniotite donne une fièvre maternelle, mais l'échographie montre le fibrome. C est faux : La douleur est aiguë, mais pas de signe de torsion spécifique. D est faux : L'appendicite est possible mais moins probable vu le contexte. E est faux : La nécrobiose peut déclencher des contractions, mais le diagnostic principal est la nécrobiose.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-fibrome-30",
    "courseId": "c-gyn-fibrome",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Vignette Clinique]\nVignette Clinique Mme F., 60 ans, ménopausée depuis 8 ans, consulte pour des métrorragies. L'examen retrouve un utérus augmenté de taille. L'échographie montre un fibrome intra-mural de 3 cm et un endomètre épaissi à 12 mm.\n\nQuestion : 1. Quel est le diagnostic différentiel prioritaire ?",
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
    "explanation": "vant des métrorragies chez une femme ménopausée, il faut éliminer un cancer de l'endomètre. L'épaississement de l'endomètre à 12 mm est suspect et nécessite une biopsie. A est faux : Le fibrome ne donne pas de métrorragies chez la ménopausée. C est faux : L'adénomyose régresse après la ménopause. D est faux : Le kyste ovarien ne cause pas de métrorragies. E est faux : Le polype est possible mais le cancer est prioritaire.",
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
      "AChez une femme de 33 ans sans facteur de risque, l'exploration débute après 6 mois de rapports non protégés.",
      "BChez une femme de 36 ans, l'exploration peut débuter après 6 mois de rapports non protégés.",
      "CChez une femme de 41 ans, il est recommandé d'attendre 12 mois avant toute exploration.",
      "DL'exploration ne doit jamais débuter avant 12 mois, quel que soit l'âge.",
      "EUn antécédent de grossesse extra-utérine ne justifie pas une exploration précoce."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Raisonnement. Le seuil de 12 mois ne s'applique qu'à la femme de moins de 35 ans sans facteur de risque. À partir de 35 ans, le délai est ramené à 6 mois, car la réserve ovarienne et la qualité ovocytaire déclinent de manière accélérée : attendre 12 mois ferait perdre un temps thérapeutique précieux. 33 ans sans facteur de risque : le délai reste de 12 mois. L'exploration à 6 mois n'est pas indiquée. 36 ans : le seuil de 6 mois est correctement appliqué. 41 ans : plus l'âge avance, plus l'exploration doit être précoce, voire immédiate. Attendre 12 mois est une erreur pronostique majeure. « Jamais avant 12 mois » : contredit les situations de facteur de risque connu, où l'exploration est immédiate quel que soit l'âge. Antécédent de GEU : c'est précisément un facteur de risque tubaire justifiant une exploration précoce, sans attendre 12 mois.",
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
      "ALa GnRH est sécrétée de façon pulsatile par l'hypothalamus.",
      "BChez l'homme, la FSH agit principalement sur les cellules de Leydig.",
      "CChez la femme, la LH participe à l'ovulation et à la formation du corps jaune.",
      "DLa progestérone est sécrétée par les cellules de la granulosa dès la phase folliculaire précoce.",
      "ELa testostérone est produite par les cellules de Sertoli sous l'effet de la FSH."
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "t C Mécanisme clé. L'axe reproducteur est un système pulsatile hiérarchisé : hypothalamus (GnRH) → hypophyse antérieure (FSH/LH) → gonades. La pulsatilité de la GnRH est indispensable : une sécrétion continue bloque l'axe (principe des agonistes de la GnRH en AMP). La GnRH est bien pulsatile : c'est la signature hypothalamique de l'axe. La FSH agit sur les cellules de Sertoli (spermatogenèse), tandis que la LH stimule les cellules de Leydig (testostérone). L'item inverse les deux cibles. La LH déclenche l'ovulation et lutéinise le follicule pour former le corps jaune. La progestérone est produite massivement par le corps jaune en phase lutéale, pas dès la phase folliculaire précoce. La testostérone est produite par les cellules de Leydig sous l'effet de la LH, et non par les cellules de Sertoli.",
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
      "ALa fenêtre fertile correspond approximativement aux 5 jours précédant l'ovulation et au jour de l'ovulation.",
      "BL'ovulation survient exactement 14 jours après le début des règles.",
      "CLa spermatogenèse se déroule dans l'épididyme.",
      "DLa maturation épididymaire précède chronologiquement la spermatogenèse.",
      "EDes rapports quotidiens strictement programmés sont recommandés pour optimiser la fertilité."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Logique physiologique. Les spermatozoïdes survivent environ 3 à 5 jours dans le tractus génital féminin, alors que l'ovocyte n'est fécondable que 12 à 24 heures. La fenêtre fécondante se situe donc avant l'ovulation, ce qui explique l'intérêt de rapports tous les 2 à 3 jours plutôt qu'une programmation rigide. La fenêtre fertile est bien définie par les 5 jours pré-ovulatoires et le jour de l'ovulation. L'ovulation survient environ 14 jours avant les règles suivantes, et non après le début du cycle : cette règle ne s'applique qu'aux cycles de 28 jours. La spermatogenèse se déroule dans les tubes séminifères testiculaires. La maturation épididymaire est postérieure à la spermatogenèse ; elle la suit. Les rapports quotidiens programmés sont contraignants et non recommandés ; l'intervalle de 2 à 3 jours est privilégié.",
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
      "ALa fécondation se déroule habituellement dans la cavité utérine.",
      "BLa fécondation se déroule habituellement dans l'ampoule tubaire.",
      "CL'implantation survient indifféremment dans l'endomètre ou dans la trompe.",
      "DUne anomalie de la cavité utérine n'affecte pas l'implantation embryonnaire.",
      "ELe transport tubaire est indépendant de la perméabilité tubaire."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Rappel anatomique. La rencontre des gamètes se fait dans l'ampoule tubaire, segment dilaté de la trompe. L'embryon migre ensuite vers la cavité utérine grâce au péristaltisme tubaire et aux cils ; une altération de ce transport favorise la grossesse extra-utérine. La cavité utérine est le lieu de l'implantation, pas de la fécondation. L'ampoule tubaire est bien le site physiologique de la fécondation. L'implantation ectopique est pathologique ; elle ne constitue pas une alternative normale. Une anomalie utérine (polype, fibrome sous-muqueux, synéchie, malformation) peut compromettre l'implantation. Le transport tubaire dépend étroitement de la perméabilité et de l'intégrité ciliaire tubaire.",
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
      "ALa varicocèle est recherchée en position debout et lors de la manœuvre de Valsalva.",
      "BL'examen apprécie le volume et la consistance des testicules.",
      "CLa palpation des canaux déférents fait partie de l'examen.",
      "DUne azoospermie peut justifier un avis spécialisé en andrologie ou urologie reproductive.",
      "ELa varicocèle doit être traitée chirurgicalement chez tout homme infertile."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Nuance capitale. La varicocèle est fréquente et souvent asymptomatique ; son traitement n'est pas systématique. Il se discute au cas par cas, chez des hommes sélectionnés (varicocèle palpable, paramètres spermatiques anormaux, après avis spécialisé), car le bénéfice sur la fertilité n'est pas démontré dans toutes les situations. La recherche en position debout avec Valsalva est la technique de référence. Le volume et la consistance testiculaires renseignent sur la fonction endocrine et exocrine. La palpation des canaux déférents recherche une agénésie ou une obstruction. L'azoospermie est une urgence andrologique relative : avis spécialisé rapide. Le traitement systématique de toute varicocèle est une erreur : décision individualisée.",
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
      "AAntécédent de cryptorchidie.",
      "BAntécédent de torsion testiculaire.",
      "CPrise de testostérone exogène ou de stéroïdes anabolisants.",
      "DAntécédent de cholécystectomie.",
      "EAntécédent de thyroïdectomie totale pour carcinome papillaire."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "t C Fil conducteur. Tout ce qui altère la spermatogenèse — testicule, voie excrétrice, axe hormonal — doit être recherché. La testostérone exogène est un piège classique : elle supprime la sécrétion de gonadotrophines par rétrocontrôle négatif, entraînant une oligospermie voire une azoospermie. La cryptorchidie est une cause majeure de trouble de la spermatogenèse, surtout si non traitée tôt. La torsion testiculaire peut laisser des séquelles ischémiques définitives. Les stéroïdes anabolisants et la testostérone exogène inhibent l'axe gonadotrope. La cholécystectomie n'a pas de retentissement reproductif masculin connu. La thyroïdectomie pour carcinome papillaire n'est pas un facteur d'infertilité masculine classique.",
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
      "ARechercher l'âge de la ménarche et la régularité des cycles.",
      "BRechercher des signes d'hyperandrogénie (hirsutisme, acné, alopécie).",
      "CRechercher des antécédents d'IST, de MIP et de GEU.",
      "DRechercher des antécédents familiaux de ménopause précoce.",
      "EConsidérer que l'interrogatoire de la femme suffit à évaluer le couple infertile."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Principe fondateur. L'infertilité est une problématique du couple. Un interrogatoire féminin complet ne dispense jamais de l'évaluation masculine (interrogatoire + examen + spermogramme) réalisée simultanément. L'histoire menstruelle est le premier reflet de la fonction ovulatoire. L'hyperandrogénie oriente vers un SOPK ou une cause surrénalienne/ovarienne. Les antécédents d'IST/MIP/GEU orientent vers une cause tubaire. La ménopause précoce familiale évoque une insuffisance ovarienne prématurée. Se limiter à la femme est une erreur grave : elle méconnaît une cause masculine dans près d'un tiers des cas.",
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
      "AHydrosalpinx.",
      "BSéquelles d'infection génitale haute.",
      "CSynéchies intra-utérines.",
      "DEndométriose avec adhérences pelviennes.",
      "EInsuffisance ovarienne prématurée."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "t D Classification à connaître. Les causes féminines se répartissent en troubles ovulatoires, causes tubo-péritonéales et causes utérines. L'hydrosalpinx, les séquelles de MIP et l'endométriose avec adhérences appartiennent au compartiment tubo-péritonéal. L'hydrosalpinx obstrue la trompe et le liquide intratubaire est embryotoxique. Les séquelles d'IGHA (MIP) créent des adhérences et détruisent l'épithélium ciliaire. Les synéchies sont des causes utérines (cavité), pas tubaires. L'endométriose agit par inflammation, adhérences et distorsion anatomique. L'insuffisance ovarienne prématurée est une cause ovulatoire.",
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
      "AL'oligozoospermie correspond à une diminution de la mobilité des spermatozoïdes.",
      "BL'asthénozoospermie correspond à une diminution de la concentration spermatique.",
      "CLa tératozoospermie correspond à une proportion accrue de spermatozoïdes de morphologie anormale.",
      "DL'azoospermie correspond à un volume d'éjaculat nul.",
      "EUn spermogramme anormal isolé établit toujours un diagnostic définitif."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Vocabulaire à ne pas confondre. Chaque terme cible un paramètre précis : concentration (oligo-), mobilité (asthéno-), morphologie (térato-), absence (azoospermie). Un contrôle est souvent nécessaire en raison de la variabilité biologique. L'oligozoospermie concerne la concentration, pas la mobilité. L'asthénozoospermie concerne la mobilité, pas la concentration. La tératozoospermie désigne une morphologie anormale excessive. L'azoospermie est l'absence de spermatozoïdes dans l'éjaculat, pas un volume nul (qui correspond à une aspermie). Un spermogramme anormal isolé n'est pas définitif : il faut contrôler et interpréter selon le contexte.",
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
      "ADes cycles réguliers de 21 à 35 jours sont généralement compatibles avec une ovulation.",
      "BLa progestérone doit toujours être dosée à J21 fixe chez toutes les patientes.",
      "CL'AMH prédit à elle seule la survenue d'une grossesse spontanée.",
      "DLe compte des follicules antraux n'a aucune valeur pour prédire la réponse à la stimulation.",
      "EL'AMH doit être interprétée indépendamment de l'âge."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Message-clé du cours. Des cycles réguliers de 21 à 35 jours sont un excellent argument clinique en faveur d'une ovulation. La confirmation biologique n'est pas systématique ; lorsqu'elle est utile, la progestérone se dose environ 7 jours avant la date présumée des règles, et non à un jour fixe. La régularité menstruelle est un bon marqueur indirect d'ovulation. Le dosage à J21 fixe est incorrect : il dépend de la durée du cycle. L'AMH évalue la réserve ovarienne, pas la fertilité spontanée. Le compte des follicules antraux est justement prédictif de la réponse à la stimulation. L'AMH doit toujours être interprétée avec l'âge de la patiente.",
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
      "ALa cœlioscopie diagnostique systématique.",
      "BLes tests post-coïtaux.",
      "CLe spermogramme en première intention.",
      "DLes tests immunologiques et thrombophiliques systématiques.",
      "EL'hystérosalpingographie lorsqu'elle est indiquée."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "t D Principe de parcimonie. Le bilan doit répondre à une question clinique précise. Les examens invasifs, coûteux ou sans impact thérapeutique démontré ne doivent pas être prescrits en première intention. La cœlioscopie n'est pas systématique : elle se discute dans des situations ciblées. Les tests post-coïtaux ont été abandonnés en routine. Le spermogramme est au contraire un examen fondamental du bilan initial. Les tests immunologiques et thrombophiliques systématiques ne sont pas recommandés. L'HSG est recommandée lorsqu'elle est indiquée pour évaluer la perméabilité tubaire.",
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
      "ALa varicocèle est une dilatation des veines du plexus pampiniforme.",
      "BSon traitement est systématique chez tout homme infertile.",
      "CElle est recherchée uniquement en position couchée.",
      "DElle n'a jamais d'impact sur les paramètres spermatiques.",
      "EElle contre-indique formellement toute AMP."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "éfinition. La varicocèle est une dilatation veineuse du plexus pampiniforme, prédominant à gauche du fait de l'anatomie de la veine spermatique. Elle peut élever la température scrotale et altérer la spermatogenèse, mais son traitement n'est pas systématique. La définition anatomique est correcte. Le traitement est individualisé, pas systématique. La recherche se fait debout, avec manœuvre de Valsalva. Elle peut altérer les paramètres spermatiques (oligospermie, asthénospermie). Elle ne contre-indique pas l'AMP.",
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
      "AL'arrêt du tabac est recommandé.",
      "BUne supplémentation préconceptionnelle en acide folique est recommandée chez la femme.",
      "CLa testostérone exogène peut être prescrite chez un homme souhaitant concevoir.",
      "DLe létrozole est généralement recommandé en première intention dans le SOPK anovulatoire.",
      "ELes gonadotrophines nécessitent une surveillance en raison du risque d'hyperstimulation ovarienne."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Piège classique. La testostérone exogène est proscrite chez l'homme souhaitant concevoir : elle exerce un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire, supprimant FSH et LH, et peut entraîner une oligospermie sévère voire une azoospermie. Le tabac altère la fertilité des deux partenaires. L'acide folique préconceptionnel réduit le risque d'anomalies du tube neural. La testostérone exogène est délétère pour la spermatogenèse. Le létrozole est le traitement de première intention du SOPK anovulatoire. Les gonadotrophines exposent au risque d'hyperstimulation et de grossesse multiple.",
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
      "AL'IIU nécessite une perméabilité tubaire suffisante.",
      "BL'ICSI consiste à injecter un spermatozoïde dans le cytoplasme d'un ovocyte mature.",
      "CL'ICSI est systématiquement supérieure à la FIV conventionnelle dans toutes les situations.",
      "DLa FIV peut être indiquée en cas d'atteinte tubaire importante.",
      "ELa cryoconservation des spermatozoïdes est formellement interdite avant chimiothérapie."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "t D Logique des techniques. L'IIU suppose que les gamètes puissent se rencontrer dans la trompe : elle exige donc des trompes perméables. La FIV court-circuite la trompe, d'où son indication dans les atteintes tubaires. L'ICSI est réservée aux infertilités masculines sévères ou aux échecs de fécondation. L'IIU dépose les spermatozoïdes dans l'utérus ; la trompe doit être fonctionnelle. L'ICSI est bien une micro-injection intra-cytoplasmique. L'ICSI n'est pas systématiquement supérieure à la FIV : elle est indiquée dans des situations précises. La FIV est une option de choix en cas d'atteinte tubaire bilatérale sévère. La cryoconservation est au contraire recommandée avant traitement gonadotoxique.",
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
      "AElle peut altérer la fertilité par inflammation et adhérences.",
      "BLa stratégie thérapeutique tient compte de l'âge et de la réserve ovarienne.",
      "CLa chirurgie ovarienne répétée peut diminuer la réserve ovarienne.",
      "DLa chirurgie est systématiquement indiquée dans le seul but d'améliorer la fertilité.",
      "EL'atteinte ovarienne (endométriome) peut compromettre la fonction ovarienne."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Nuance chirurgicale. La chirurgie n'est pas systématique dans le seul but d'améliorer la fertilité, surtout lorsqu'elle risque d'altérer la réserve ovarienne. La décision est individualisée : douleur, âge, atteinte anatomique, réserve ovarienne et projet reproductif. L'inflammation et les adhérences sont des mécanismes reconnus. L'âge et la réserve ovarienne sont centraux dans la décision. La chirurgie ovarienne répétée réduit la réserve folliculaire. La chirurgie systématique est une erreur : elle peut être délétère. L'endométriome peut altérer la fonction ovarienne.",
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
      "ACryptorchidie.",
      "BOrchite (notamment ourlienne).",
      "CObstruction des voies spermatiques.",
      "DInsuffisance ovarienne prématurée.",
      "EAntécédent de grossesse extra-utérine chez la partenaire."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "t C Trois grands mécanismes masculins. Atteinte testiculaire (cryptorchidie, orchite), obstruction des voies excrétrices, et causes endocriniennes ou médicamenteuses. Les deux dernières propositions relèvent de la sphère féminine. La cryptorchidie altère la spermatogenèse par hyperthermie testiculaire. L'orchite ourlienne peut détruire l'épithélium séminifère. L'obstruction (épididymaire, déférentielle) empêche l'émission des spermatozoïdes. L'insuffisance ovarienne prématurée concerne la femme. La GEU est une cause féminine (tubaire).",
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
      "ALe diagnostic d'infertilité inexpliquée repose sur un bilan standard normal.",
      "BL'infertilité inexpliquée signifie qu'aucune cause biologique ne peut exister.",
      "CL'infertilité inexpliquée dispense d'une exploration tubaire.",
      "DL'infertilité mixte est définie par une cause identifiée chez un seul partenaire.",
      "EL'infertilité inexpliquée autorise à omettre le spermogramme."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "éfinition d'exclusion. L'infertilité inexpliquée est retenue après un bilan standard normal : ovulation compatible, trompes perméables, spermogramme sans anomalie significative. Elle ne signifie pas que tous les mécanismes ont été explorés. C'est bien un diagnostic d'exclusion. Elle n'exclut pas l'existence de causes non encore accessibles aux examens. L'exploration tubaire est indispensable avant de conclure. L'infertilité mixte suppose des facteurs chez les deux partenaires. Le spermogramme est obligatoire.",
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
      "AL'HSG permet d'évaluer la perméabilité tubaire et de visualiser la cavité utérine.",
      "BLa cœlioscopie est un examen systématique du bilan initial.",
      "CL'hystéroscopie n'a aucune place dans le bilan.",
      "DL'échographie avec contraste est formellement contre-indiquée.",
      "EL'HSG est contre-indiquée chez toute femme de plus de 35 ans."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Outil de première ligne. L'HSG est l'examen de référence pour évaluer la perméabilité tubaire et dépister certaines anomalies de la cavité utérine. L'échographie avec contraste est une alternative lorsqu'elle est disponible. L'HSG est bien l'examen de première intention pour les trompes. La cœlioscopie n'est pas systématique. L'hystéroscopie est indiquée dans certaines anomalies de la cavité utérine. L'échographie avec contraste n'est pas contre-indiquée ; elle est une alternative. Aucune limite d'âge n'interdit l'HSG.",
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
      "AArrêt du tabac.",
      "BCorrection d'une dénutrition ou d'un excès pondéral important.",
      "CPrescription systématique d'antioxydants chez tous les couples.",
      "DOptimisation des rapports pendant la période fertile.",
      "EPrescription systématique de testostérone chez l'homme infertile."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "t D Hygiène de vie et fertilité. Les mesures générales ont un impact démontré et peu coûteux : tabac, poids, alimentation, activité physique, prévention des IST, et information sur la période fertile. Le tabac est gonadotoxique chez les deux partenaires. Les troubles du poids altèrent l'ovulation et la spermatogenèse. Les antioxydants ne sont pas recommandés systématiquement, faute de preuve. La connaissance de la fenêtre fertile améliore les chances de conception. La testostérone exogène est délétère pour la spermatogenèse.",
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
      "ALes recommandations OMS 2025 proposent un cadre global pour la prévention, le diagnostic et le traitement de l'infertilité.",
      "BL'individualisation des stimulations ovariennes est recommandée.",
      "CLe transfert électif d'un embryon unique peut réduire les risques maternels.",
      "DLes tests de réceptivité endométriale doivent être proposés de manière systématique.",
      "ELes recommandations AUA/ASRM 2024 renforcent la place de l'andrologie."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Principe de preuve. Les tests de réceptivité endométriale, les tests immunologiques et les tests spermatiques avancés ne doivent pas être proposés systématiquement : ils relèvent d'indications précises et de preuves suffisantes de bénéfice clinique. Les recommandations OMS 2025 constituent un cadre global. L'individualisation des protocoles est un principe actuel majeur. Le transfert électif d'un embryon réduit les grossesses multiples. La systématisation des tests de réceptivité est non recommandée. L'andrologie occupe une place croissante dans les recommandations.",
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
      "ALe létrozole est généralement recommandé en première intention en l'absence d'autre facteur d'infertilité.",
      "BLes gonadotrophines sont le traitement de première intention et ne nécessitent pas de surveillance.",
      "CLe létrozole augmente fortement le risque d'hyperstimulation ovarienne sévère.",
      "DLa metformine est le traitement de première intention chez toutes les patientes.",
      "ELe clomifène est formellement contre-indiqué dans le SOPK."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Hiérarchie thérapeutique. Dans le SOPK anovulatoire sans autre facteur, le létrozole est le traitement d'induction de première intention. Les gonadotrophines viennent en seconde ligne et nécessitent une surveillance stricte. Le létrozole est bien le traitement de première intention recommandé. Les gonadotrophines ne sont pas de première intention et exigent une surveillance. Le létrozole a un risque d'hyperstimulation plus faible que les gonadotrophines. La metformine n'est pas le traitement de première intention de toutes les patientes. Le clomifène n'est pas formellement contre-indiqué, mais n'est plus le premier choix.",
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
      "ADes cycles réguliers de 21 à 35 jours sont généralement compatibles avec une ovulation.",
      "BEn cas de doute, la progestérone peut être dosée environ 7 jours avant la date présumée des règles.",
      "CEn cas d'aménorrhée, les examens sont orientés par le contexte : test de grossesse, FSH, TSH, prolactine.",
      "DLa progestérone doit être dosée à J21 fixe chez toutes les patientes.",
      "EL'AMH est le seul examen utile pour évaluer l'ovulation."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "t C Adaptation au cycle. La date du dosage de progestérone dépend de la durée du cycle ; le J21 fixe est un dogme dépassé. L'AMH évalue la réserve, pas l'ovulation. La régularité des cycles est un bon indice d'ovulation. Le dosage 7 jours avant les règles présumées est la bonne approche. Devant une aménorrhée, le bilan est orienté par le contexte. Le J21 fixe est inadapté aux cycles irréguliers ou longs. L'AMH ne renseigne pas sur l'ovulation.",
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
      "ALa testostérone exogène peut supprimer la sécrétion de gonadotrophines et altérer la spermatogenèse.",
      "BLa testostérone exogène améliore la spermatogenèse chez l'homme infertile.",
      "CLa testostérone est produite par les cellules de Sertoli.",
      "DLa FSH agit sur les cellules de Leydig.",
      "ELa spermatogenèse se déroule dans l'épididyme."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Rétrocontrôle négatif. La testostérone exogène inhibe la sécrétion hypothalamo-hypophysaire de GnRH, FSH et LH. Résultat : arrêt de la spermatogenèse. C'est un piège fréquent chez les sportifs utilisant des stéroïdes anabolisants. L'effet suppressif sur l'axe gonadotrope est bien décrit. La testostérone exogène n'améliore pas la spermatogenèse, elle l'inhibe. La testostérone est produite par les cellules de Leydig. La FSH agit sur les cellules de Sertoli. La spermatogenèse se déroule dans les tubes séminifères.",
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
      "AL'infertilité peut provoquer anxiété, tristesse et sentiment de culpabilité.",
      "BLe médecin doit accueillir la souffrance sans jugement.",
      "CLe consentement libre et éclairé des deux partenaires doit être recueilli lorsque nécessaire.",
      "DDes promesses irréalistes de grossesse peuvent être faites pour rassurer le couple.",
      "ELe coût des traitements doit être pris en considération dans la décision."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Éthique de la parole médicale. Les promesses irréalistes de grossesse sont proscrites : elles nourrissent une fausse espérance, majorent la souffrance en cas d'échec et altèrent la relation de confiance. L'information doit être claire, honnête et proportionnée. La souffrance psychologique est réelle et doit être reconnue. L'accueil sans jugement est une obligation déontologique. Le consentement éclairé des deux partenaires est requis. Les promesses irréalistes sont une faute éthique. Le coût et l'accès aux soins font partie de la décision.",
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
      "AL'exploration doit débuter par la femme uniquement.",
      "BLes deux partenaires doivent être explorés simultanément.",
      "CLe spermogramme ne fait pas partie du bilan initial.",
      "DLa cœlioscopie est l'examen de première intention.",
      "ELe bilan complémentaire ne dépend pas des résultats initiaux."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Message pédagogique essentiel. L'infertilité est une problématique du couple : les deux partenaires doivent être évalués simultanément, avec une prise en charge individualisée et respectueuse. Commencer par la femme seule fait perdre du temps et méconnaît une cause masculine. L'exploration simultanée est le standard de pratique. Le spermogramme est un examen fondamental du bilan initial. La cœlioscopie n'est pas un examen de première intention. Le bilan complémentaire est guidé par les résultats initiaux.",
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
    "questionText": "[Cas Clinique N°1]\nMotif :Couple consultE pour infertilité primaire depuis 18 mois.\n\nQuestion : Quel est le diagnostic le plus probable chez Mme K. ?",
    "options": [
      "AInsuffisance ovarienne prématurée.",
      "BSyndrome des ovaires polykystiques.",
      "CHyperprolactinémie.",
      "DInsuffisance hypothalamo-hypophysaire.",
      "EEndométriose profonde."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "ssociation de cycles irréguliers, hyperandrogénie clinique et biologique, obésité et progestérone lutéale basse : tableau typique de SOPK (critères de Rotterdam). L'IOP survient généralement avant 40 ans avec FSH élevée et aménorrhée : non compatible. Le SOPK associe anovulation chronique, hyperandrogénie et morphologie ovarienne polykystique. La prolactine est normale : l'hyperprolactinémie est éliminée. L'insuffisance hypothalamique donnerait plutôt une aménorrhée avec FSH/LH basses. L'endométriose ne s'accompagne pas classiquement d'hyperandrogénie ni de cycles longs.",
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
    "questionText": "[Cas Clinique N°1]\nMotif :Couple consultE pour infertilité primaire depuis 18 mois.\n\nQuestion : Quel est le traitement de première intention de l'infertilité par anovulation dans ce contexte ?",
    "options": [
      "AFIV avec ICSI d'emblée.",
      "BLétrozole avec conseils hygiéno-diététiques.",
      "CGonadotrophines sans surveillance.",
      "DChirurgie ovarienne par drilling en première intention.",
      "ETestostérone transdermique."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le létrozole est le traitement d'induction de première intention du SOPK anovulatoire, associé à la perte de poids et à l'hygiène de vie. La FIV n'est pas indiquée en première intention en l'absence d'autre facteur. Le létrozole est recommandé en première ligne. Les gonadotrophines nécessitent une surveillance stricte et ne sont pas de première intention. Le drilling ovarien est réservé à des situations sélectionnées. La testostérone est proscrite chez la femme.",
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
    "questionText": "[Cas Clinique N°1]\nMotif :Couple consultE pour infertilité primaire depuis 18 mois.\n\nQuestion : Quel examen complémentaire est le plus utile pour évaluer la réponse ovarienne à une future stimulation ?",
    "options": [
      "AAMH et compte des follicules antraux.",
      "BRadiographie du bassin.",
      "CDosage de la progestérone à J21 fixe.",
      "DHystérosalpingographie seule.",
      "ETest de grossesse."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'AMH et le compte des follicules antraux sont les marqueurs de choix de la réserve ovarienne et de la réponse attendue à la stimulation. L'AMH et le CFA sont les deux examens clés de la réserve ovarienne. La radiographie du bassin n'a aucun intérêt dans ce contexte. La progestérone à J21 fixe est inadaptée. L'HSG évalue les trompes, pas la réserve. Le test de grossesse est utile en cas d'aménorrhée, pas ici.",
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
    "questionText": "[Cas Clinique N°2]\nMotif :Infertilité secondaire depuis 14 mois.\n\nQuestion : Quel est le facteur principal d'infertilité chez ce couple ?",
    "options": [
      "AFacteur masculin.",
      "BFacteur tubaire bilatéral.",
      "CFacteur utérin.",
      "DFacteur ovulatoire.",
      "EInfertilité inexpliquée."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La salpingectomie droite et l'hydrosalpinx gauche rendent les deux trompes non fonctionnelles : le facteur tubaire est bilatéral. Le spermogramme est normal : pas de facteur masculin. Les deux trompes sont inutilisables. L'utérus est normal à l'échographie. Les cycles sont réguliers, en faveur d'une ovulation. Une cause tubaire est clairement identifiée.",
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
    "questionText": "[Cas Clinique N°2]\nMotif :Infertilité secondaire depuis 14 mois.\n\nQuestion : Quelle est la stratégie thérapeutique la plus adaptée ?",
    "options": [
      "AAttendre une grossesse spontanée 12 mois supplémentaires.",
      "BInsémination intra-utérine.",
      "CFécondation in vitro.",
      "DLétrozole seul.",
      "ETraitement antibiotique seul."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "n cas d'atteinte tubaire bilatérale, la FIV court-circuite la trompe et constitue la meilleure option. Attendre est injustifié : les trompes sont non fonctionnelles. L'IIU exige une perméabilité tubaire suffisante, ici absente. La FIV est le traitement de référence des atteintes tubaires bilatérales. Le létrozole ne corrige pas le facteur tubaire. Les antibiotiques ne restaurent pas une trompe détruite.",
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
    "questionText": "[Cas Clinique N°2]\nMotif :Infertilité secondaire depuis 14 mois.\n\nQuestion : Quel est l'impact potentiel de l'hydrosalpinx sur les résultats de la FIV ?",
    "options": [
      "AAucun impact démontré.",
      "BIl peut réduire les chances d'implantation par effet toxique et mécanique.",
      "CIl améliore l'implantation.",
      "DIl empêche toute stimulation ovarienne.",
      "EIl contre-indique la ponction ovocytaire."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le liquide hydrosalpinx est embryotoxique et peut mécaniquement nuire à l'implantation. Sa prise en charge (salpingectomie ou interruption) peut être discutée avant FIV. L'impact négatif est bien documenté. Effet toxique et mécanique sur l'endomètre et l'embryon. Il n'améliore pas l'implantation. Il ne bloque pas la stimulation ovarienne. Il ne contre-indique pas la ponction.",
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
    "questionText": "[Cas Clinique N°3]\nMotif :Couple consultant pour infertilité primaire depuis 2 ans.\n\nQuestion : Quel est le mécanisme le plus probable de l'azoospermie ?",
    "options": [
      "AAzoospermie obstructive.",
      "BAzoospermie non obstructive d'origine testiculaire.",
      "CAzoospermie par déficit gonadotrope.",
      "DAzoospermie par prise de testostérone.",
      "EAzoospermie par obstruction épididymaire bilatérale."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association testicules hypotrophiques, FSH élevée et antécédent de cryptorchidie plaide pour une atteinte testiculaire non obstructive : la FSH élevée traduit l'absence de rétrocontrôle inhibinique normal. Une obstruction donnerait plutôt une FSH normale et des testicules de volume normal. L'atteinte testiculaire est la plus probable. Un déficit gonadotrope s'accompagnerait d'une FSH basse. Pas de prise de testostérone rapportée. L'obstruction épididymaire n'est pas évoquée par l'examen.",
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
    "questionText": "[Cas Clinique N°3]\nMotif :Couple consultant pour infertilité primaire depuis 2 ans.\n\nQuestion : Quel examen complémentaire est prioritaire dans ce contexte d'azoospermie non obstructive ?",
    "options": [
      "ACaryotype et recherche de microdélétions du chromosome Y.",
      "BHystérosalpingographie.",
      "CDosage de l'AMH chez l'homme.",
      "DÉchographie abdominale.",
      "ETest de grossesse."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "vant une azoospermie non obstructive, un caryotype et une recherche de microdélétions du chromosome Y (région AZF) sont indiqués, notamment avant une extraction testiculaire de spermatozoïdes. Le bilan génétique est prioritaire. L'HSG est un examen féminin. L'AMH n'a pas d'indication masculine ici. L'échographie abdominale n'est pas prioritaire. Le test de grossesse est sans objet.",
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
    "questionText": "[Cas Clinique N°3]\nMotif :Couple consultant pour infertilité primaire depuis 2 ans.\n\nQuestion : Quelle option thérapeutique peut être discutée chez ce couple ?",
    "options": [
      "APrescription de testostérone exogène.",
      "BExtraction testiculaire de spermatozoïdes (TESE) avec ICSI.",
      "CInsémination intra-utérine avec sperme du conjoint.",
      "DLétrozole chez l'homme.",
      "EAttente spontanée."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "n cas d'azoospermie non obstructive, la TESE avec ICSI peut être proposée après avis spécialisé et bilan génétique, si des spermatozoïdes sont retrouvés. La testostérone exogène aggrave l'azoospermie. La TESE + ICSI est la voie possible. L'IIU est impossible sans spermatozoïdes dans l'éjaculat. Le létrozole n'a pas d'indication ici. L'attente spontanée est illusoire.",
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
    "questionText": "[Cas Clinique N°4]\nMotif :Infertilité primaire depuis 24 mois.\n\nQuestion : Quel diagnostic retenez-vous ?",
    "options": [
      "AInfertilité tubaire.",
      "BInfertilité inexpliquée.",
      "CSOPK.",
      "DInsuffisance ovarienne prématurée.",
      "EEndométriose profonde."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "ilan standard normal : ovulation, trompes, utérus et sperme sans anomalie. Il s'agit d'une infertilité inexpliquée, diagnostic d'exclusion. Les trompes sont perméables. Aucune cause identifiée après bilan standard. Pas d'hyperandrogénie ni de cycles irréguliers. L'IOP est improbable à 28 ans avec cycles réguliers. Pas de signe clinique d'endométriose.",
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
    "questionText": "[Cas Clinique N°4]\nMotif :Infertilité primaire depuis 24 mois.\n\nQuestion : Quelle est la conduite à tenir la plus appropriée ?",
    "options": [
      "ACœlioscopie diagnostique systématique.",
      "BProposer une prise en charge progressive, éventuellement IIU après information.",
      "CFIV avec ICSI d'emblée.",
      "DPrescrire des antioxydants seuls.",
      "EAucune prise en charge, attendre 5 ans."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "ns l'infertilité inexpliquée, la prise en charge est progressive : information, optimisation de l'hygiène de vie, puis IIU ou FIV selon l'évolution et le pronostic. La cœlioscopie systématique n'est pas recommandée. La prise en charge progressive est la bonne attitude. La FIV avec ICSI n'est pas indiquée d'emblée. Les antioxydants seuls n'ont pas de bénéfice démontré. L'attente prolongée est injustifiée.",
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
    "questionText": "[Cas Clinique N°4]\nMotif :Infertilité primaire depuis 24 mois.\n\nQuestion : Quelle information doit être donnée au couple ?",
    "options": [
      "AL'infertilité inexpliquée signifie qu'aucune grossesse n'est possible.",
      "BLe diagnostic n'exclut pas l'existence de mécanismes non encore explorés et des grossesses spontanées restent possibles.",
      "CIl faut arrêter les rapports pendant la période fertile.",
      "DLa FIV est obligatoire immédiatement.",
      "ELe spermogramme doit être répété 10 fois."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'infertilité inexpliquée est un diagnostic d'exclusion : des grossesses spontanées restent possibles, et certaines causes ne sont pas encore accessibles au bilan standard. Une grossesse reste possible. L'information doit être nuancée et honnête. Les rapports doivent au contraire être optimisés. La FIV n'est pas obligatoire immédiatement. Répéter 10 fois le spermogramme n'a aucun sens.",
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
    "questionText": "[1Ovulation & fonction ovarienne]\nMotif :Désir de grossesse chez une femme de 41 ans.\n\nQuestion : Quelle est l'interprétation la plus juste du bilan ?",
    "options": [
      "ARéserve ovarienne normale pour l'âge.",
      "BDiminution de la réserve ovarienne associée à l'âge.",
      "CInsuffisance ovarienne prématurée certaine.",
      "DSOPK.",
      "EHyperprolactinémie."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "MH basse, CFA bas et FSH modérément élevée à 41 ans traduisent une diminution de la réserve ovarienne liée à l'âge. Le pronostic reproductif est diminué. La réserve est basse, pas normale. Diminution de la réserve ovarienne liée à l'âge. L'IOP survient avant 40 ans : ici la patiente a 41 ans. Le SOPK donnerait plutôt une AMH élevée. L'hyperprolactinémie n'est pas évoquée.",
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
    "questionText": "[1Ovulation & fonction ovarienne]\nMotif :Désir de grossesse chez une femme de 41 ans.\n\nQuestion : Quelle est la conduite à tenir ?",
    "options": [
      "AAttendre 12 mois avant toute exploration.",
      "BPrise en charge rapide, information sur le pronostic et discussion de l'AMP.",
      "CPrescrire une contraception pour réguler les cycles.",
      "DRassurer sans bilan complémentaire.",
      "ETraiter par testostérone."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "À 41 ans avec réserve ovarienne basse, le temps est un facteur pronostique majeur : la prise en charge doit être rapide, avec information claire et discussion des options d'AMP. Attendre 12 mois ferait perdre un temps précieux. La prise en charge rapide est justifiée. La contraception est contraire au projet. Rassurer sans bilan est une erreur. La testostérone est proscrite.",
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
    "questionText": "[1Ovulation & fonction ovarienne]\nMotif :Désir de grossesse chez une femme de 41 ans.\n\nQuestion : Quelle information doit être délivrée au couple ?",
    "options": [
      "ALes chances de grossesse spontanée sont identiques à celles d'une femme de 25 ans.",
      "BL'âge et la réserve ovarienne diminuent le pronostic, sans rendre la grossesse impossible.",
      "CLa FIV garantit une grossesse à 100 %.",
      "DL'AMH prédit à elle seule la fertilité spontanée.",
      "EIl faut arrêter tout projet de grossesse."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le pronostic est diminué mais non nul. L'AMH renseigne sur la réserve, pas sur la fertilité spontanée. L'information doit rester honnête et nuancée. Le pronostic n'est pas identique à celui d'une femme de 25 ans. Information juste et nuancée. Aucune technique ne garantit 100 % de grossesse. L'AMH ne prédit pas seule la fertilité spontanée. Il n'y a pas lieu d'arrêter le projet.",
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
    "explanation": "nalyse pédagogique La définition officielle associe absence de règles à 15 ans avec croissance normale + caractères sexuels secondaires présents. Le cours ajoute une nuance capitale : l'absence de ménarche et de développement mammaire à 13 ans doit déjà faire rechercher une aménorrhée primaire (suspicion d'hypogonadisme ou d'anomalie de l'axe). Pourquoi les autres options sont fausses B — Le seuil de 18 ans est arbitraire et n'est pas retenu par le cours ; il ferait manquer des diagnostics. C — Il s'agit de la définition de l'aménorrhée secondaire (3 mois si cycles réguliers). D — Si le développement mammaire est complet, l'absence de règles à 13 ans ne suffit pas : c'est à 15 ans que l'on parle d'aménorrhée primaire (le seuil de 13 ans concerne l'absence de développement mammaire). E — 12 ans n'est pas un seuil défini ; la puberté peut débuter jusqu'à 13–14 ans.",
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
    "explanation": "nalyse pédagogique Le pic de LH déclenche l'ovulation et la lutéinisation (corps jaune) — l'option C est donc vraie. C'est la progestérone, et non les œstrogènes, qui transforme l'endomètre prolifératif en endomètre sécrétoire et le prépare à l'implantation (décidualisation). Les œstrogènes, eux, prolifèrent l'endomètre. Confondre les deux rôles est un piège classique. Pourquoi les autres options sont vraies A — La GnRH hypothalamique stimule bien la sécrétion hypophysaire de FSH et LH. B — La FSH active l'aromatase des cellules de la granulosa pour convertir les androgènes en œstradiol. C — Le pic de LH induit la maturation folliculaire finale, l'ovulation et la formation du corps jaune producteur de progestérone. E — La phase lutéale est stable (~14 jours), donc la menstruation survient 14 jours après l'ovulation.",
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
    "explanation": "nalyse pédagogique La classification de Tanner (stades I à V) est l'outil de référence pour évaluer le développement pubertaire mammaire (S1–S5) et pileux (P1–P5). Elle permet de distinguer un impubérisme vrai (stade I), un développement normal, ou un développement dysmature/masculinisé. La présence de pilosité pubienne et axillaire signe l'adrénarche. Pourquoi les autres options sont fausses A — Ferriman et Gallway évaluent l'hirsutisme (score > 8 pathologique), pas le stade pubertaire. C — Le score de Bishop évalue la maturation cervicale au moment du travail. D — Marshall et Tanner ont publié ensemble, mais c'est bien la classification de Tanner qui est retenue dans le cours. E — HOMA-IR évalue l'insulinorésistance (utile dans le SOPK), pas la puberté.",
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
    "explanation": "nalyse pédagogique Le score de Ferriman et Gallway est bien un outil d'évaluation de l'hirsutisme (pilosité de type masculin : lèvre supérieure, menton, poitrine inter-mammaire, etc.). Le cours retient les seuils : > 8 pathologique, 8–16 léger, 17–25 modéré, > 25 sévère. L'affirmation D est fausse car le score historique comporte 11 zones (et non 9) dans sa description originale, et le cours ne mentionne pas « 9 zones » comme critère. Le piège consiste à retenir un chiffre non enseigné. Pourquoi les autres options sont vraies A — Le seuil de pathologie est bien > 8. B — 8–16 = hirsutisme léger (conforme au cours). C — > 25 = hirsutisme sévère (conforme au cours). E — Un score élevé oriente vers une hyperandrogénie clinique, donc vers un bilan hormonal (testostérone, 17-OHP, etc.).",
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
    "explanation": "nalyse pédagogique La radio de la main gauche recherche le sésamoïde du pouce, qui apparaît vers 11–12 ans et témoigne de la progression de l'âge osseux. Cet examen permet d'affirmer que l'âge osseux est en rapport avec l'âge chronologique et donc de distinguer un simple retard pubertaire constitutionnel d'un véritable hypogonadisme (où l'âge osseux est retardé). Pourquoi les autres options sont fausses A — L'ostéoporose se mesure par ostéodensitométrie, pas par radiographie standard. C — La dysplasie osseuse n'est pas l'objectif de cet examen dans ce contexte. D — La densité minérale osseuse se mesure par DXA (ostéodensitométrie). E — Aucun contexte traumatique n'est évoqué ici.",
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
    "explanation": "nalyse pédagogique Le syndrome de Rokitansky associe une aplasie vaginale avec utérus absent ou rudimentaire, des ovaires fonctionnels (donc caractères sexuels secondaires normaux), un caryotype 46,XX, et une vulve normale. L'absence d'utérus explique l'absence de douleurs cycliques (pas de rétention menstruelle). Il peut s'intégrer dans le syndrome MURCS (agénésie rénale 30 %, anomalies rachidiennes 15–20 %). Pourquoi les autres options sont fausses B — Les douleurs cycliques signent une rétention (hématocolpos, atrésie cervicale), pas Rokitansky où l'utérus est absent. D — Au toucher rectal, l'utérus n'est pas palpé : c'est un élément clé du diagnostic.",
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
    "explanation": "nalyse pédagogique Le syndrome de Turner est une dysgénésie gonadique : ovaires non fonctionnels → œstradiol très bas, FSH/LH élevées (hypogonadisme hypergonadotrope). Cliniquement : petite taille, thorax en bouclier, cou palmé, implantation basse des cheveux, 4ᵉ métacarpien court, dysmorphie faciale (strabisme, ptosis). Malformations viscérales : bicuspidie aortique, coarctation, rein en fer à cheval, surdité, dysthyroïdie, maladie cœliaque. Pourquoi les autres options sont fausses B — Le caryotype typique est 45,X0 (monosomie), ou une anomalie de structure (délétion X) ou une mosaïque — mais pas « 46,XX avec délétion du bras long » telle que formulée. D — L'hypertrophie clitoridienne signe une hyperandrogénie (HCS, tumeur virilisante), pas Turner.",
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
    "explanation": "Réponse fausse (donc à choisir) : C",
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
    "explanation": "nalyse pédagogique Le syndrome de Sheehan est une nécrose hypophysaire ischémique survenant après un accouchement hémorragique (souvent avec délivrance artificielle, révision utérine). L'hypophyse hyperplasiée gravidique est très vulnérable à l'ischémie. Il en résulte une insuffisance hypophysaire globale : aménorrhée (déficit gonadotrope), agalactie, hypothyroïdie, insuffisance surrénale. Traitement substitutif à vie (œstroprogestatifs + L-thyroxine + hydrocortisone). Pourquoi les autres options sont fausses B — Une tumeur hypophysaire sécrétante donne un syndrome tumoral et/ou hypersécrétant, pas une nécrose ischémique du post-partum. C — L'hypophysite auto-immune est une entité distincte (contexte auto-immun, grossesse parfois), pas une nécrose post-hémorragique. D — L'HCS est une pathologie surrénalienne congénitale, sans lien avec Sheehan. E — L'adénome à prolactine est une tumeur, pas une nécrose.",
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
    "explanation": "(4 réponses, mais le format accepte 2–3 ; ici D et A/B/E sont les plus discriminantes — la question admet A, B, D, E)",
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
    "explanation": "nalyse pédagogique Le syndrome de Kallmann (dysplasie olfacto-génitale) est une agénésie des lobes olfactifs se prolongeant sur l'hypothalamus antérieur, entraînant un défaut de sécrétion de GnRH → hypogonadisme hypogonadotrope. Le diagnostic repose sur la découverte d'une anosmie chez une patiente en aménorrhée primaire avec impubérisme. Le traitement est une supplémentation œstroprogestative progressive ; pour la fertilité, induction par gonadotrophines. Pourquoi les autres options sont fausses B — Hyperprolactinémie : tableau différent (galactorrhée, PRL élevée, pas d'anosmie). C — HCS : hyperandrogénie, virilisation, 17-OHP élevée. D — Turner : dysgénésie gonadique 45,X0, FSH élevée, pas d'anosmie. E — Sheehan : nécrose hypophysaire du post-partum.",
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
    "explanation": "nalyse pédagogique Le craniopharyngiome (tumeur de la poche de Rathke) est la tumeur supra-hypophysaire la plus fréquente. Cliniquement : aménorrhée, céphalées, troubles visuels, somnolence (compression hypothalamique). La radiographie du crâne retrouve des calcifications supra-sellaires caractéristiques. L'IRM précise le diagnostic. Pourquoi les autres options sont fausses ou moins spécifiques D — Galactorrhée avec PRL > 100 évoque un adénome à prolactine, pas un craniopharyngiome. E — L'anosmie isolée évoque un syndrome de Kallmann.",
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
    "explanation": "nalyse pédagogique L'hématocolpos par imperforation hyménéale associe : aménorrhée primaire, douleurs pelviennes cycliques (rétention menstruelle), masse bleutée bombant à l'hymen, parfois syndrome compressif (dysurie, constipation). L'examen au spéculum est impossible ; le traitement est une ouverture chirurgicale avec drainage. Pourquoi les autres options sont fausses A — Rokitansky : pas de douleurs cycliques, pas de masse bleutée (utérus absent). C — Morris : caryotype XY, pas d'utérus, vagin borgne, pas de masse bleutée hyménéale. D — Turner : impubérisme, pas de douleurs cycliques ni de masse vaginale. E — HCS : virilisation, 17-OHP élevée, pas de masse vaginale bleutée.",
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
    "explanation": "(les plus discriminantes : A, B, C, E — format accepte jusqu'à 3, retenir A, B, C, E)",
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
    "explanation": "nalyse pédagogique Le traitement du SOPK est anti-gonadotrope : acétate de cyprotérone (anti-androgène), œstrogènes ou pilule œstroprogestative. Une induction ovulatoire peut être proposée ultérieurement. Surveillance métabolique indispensable (dyslipidémie, hyperinsulinisme, diabète de type 2, risque cardio-vasculaire). Pourquoi les autres options sont fausses B — La cabergoline (agoniste dopaminergique) traite l'hyperprolactinémie. C — L'hydrocortisone traite l'hyperplasie congénitale des surrénales. D — La L-thyroxine traite l'hypothyroïdie. E — La pompe à GnRH pulsatile est utilisée dans certains hypogonadismes hypogonadotropes (Kallmann, hypothalamique fonctionnel), pas dans le SOPK.",
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
    "explanation": "nalyse pédagogique L'hyperplasie congénitale des surrénales (HCS) par déficit en 21-hydroxylase (ou 11β-hydroxylase) entraîne une accumulation de précurseurs stéroïdiens → hyperandrogénie. Cliniquement : petite taille, OGI normaux, hypertrophie clitoridienne, virilisation. Biologie : testostérone élevée, 17-OHP élevée, FSH/LH normales ou basses. Traitement : hydrocortisone + conseil génétique. Pourquoi les autres options sont fausses A — Turner : pas d'hyperandrogénie, FSH élevée, caryotype 45,X0. B — Morris : caryotype XY, pas d'utérus, T élevée mais 17-OHP normale. D — Rokitansky : pas d'hyperandrogénie, caryotype 46,XX. E — Craniopharyngiome : pas d'hyperandrogénie ni de virilisation.",
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
    "explanation": "Réponse fausse (donc à choisir) : E",
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
    "explanation": "nalyse pédagogique Les causes utérines d'aménorrhée secondaire comprennent : synéchies utérines (isthmique = Musset ; complexes post-traumatiques = Asherman ; post-opératoires, post-infectieuses), sténose cicatricielle du col (amputation, conisation), rétention d'œuf mort ou débris ovulaires, atrophie endométriale sous DIU au lévonorgestrel. La clinique associe douleurs cycliques, absence d'hémorragie de privation au test progestatif, courbe thermique normale et dosages hormonaux normaux. Pourquoi D et E sont fausses D — L'insuffisance ovarienne précoce est une cause ovarienne, pas utérine. E — L'hyperprolactinémie est une cause hypophysaire, pas utérine.",
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
    "explanation": "nalyse pédagogique Le syndrome d'Asherman désigne des synéchies utérines complexes post-traumatiques (curetage, myomectomie avec effraction, endométrite du post-partum, tuberculose génitale) ou post-endométrectomie. Il entraîne une aménorrhée avec douleurs cycliques, absence d'hémorragie de privation au test progestatif, courbe thermique normale (ovulation normale) et dosages hormonaux normaux. Le diagnostic se fait par hystérosalpingographie ou hystéroscopie. Pourquoi les autres options sont fausses A — La synéchie isthmique isolée correspond au syndrome de Musset, entité distincte. C — La sténose cervicale est une autre cause utérine, distincte d'Asherman. D — L'aplasie vaginale est congénitale (Rokitansky), pas acquise. E — L'insuffisance ovarienne précoce est une cause ovarienne.",
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
    "explanation": "nalyse pédagogique L'anorexie mentale est un trouble du comportement alimentaire multifactoriel (0,5–2,2 % des jeunes femmes) avec restriction alimentaire, poids bas, peur intense de grossir et dysmorphophobie. Jusqu'à 84 % des patientes présentent une aménorrhée. Conséquences : baisse de la DMO, altération de la fertilité, impact neurocognitif (humeur, coordination). Attention : les troubles ovulatoires ne protègent pas totalement — les grossesses non planifiées sont plus fréquentes (50 %) chez ces patientes, car l'absence de contraception devant des cycles irréguliers est fréquente. Pourquoi les autres options sont vraies A — Prévalence 0,5–2,2 % des jeunes femmes. B — Jusqu'à 84 % d'aménorrhée au cours de la maladie. C — Retentissement négatif sur la densité minérale osseuse. E — Renutrition et reprise de poids = meilleur traitement.",
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
    "explanation": "nalyse pédagogique L'aménorrhée post-pilule est définie par l'absence de retour des règles 3 mois après l'arrêt de la contraception orale. La démarche : éliminer une grossesse et une hyperprolactinémie, puis réaliser un test à la progestérone pour vérifier la bonne imprégnation œstrogénique de l'endomètre. Les œstroprogestatifs utilisés en continu ou longtemps peuvent induire une atrophie endométriale et une aménorrhée. Pourquoi les autres options sont fausses A — 1 mois est trop précoce : le retour de couches peut être retardé physiologiquement. C — 6 mois correspond au seuil de l'aménorrhée secondaire en cas de cycles irréguliers, pas à la définition post-pilule. D — 12 mois n'est pas la définition retenue. E — Immédiatement après l'arrêt : c'est physiologique, pas une aménorrhée post-pilule pathologique.",
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
    "explanation": "nalyse pédagogique Le syndrome de Musset désigne une synéchie isthmique (au niveau de l'isthme utérin), cause utérine d'aménorrhée secondaire. Elle s'intègre dans le chapitre des synéchies utérines, aux côtés des synéchies complexes post-traumatiques (Asherman), post-opératoires et post-infectieuses. Pourquoi les autres options sont fausses B — La sténose cervicale post-conisation est une entité distincte. C — L'hématocolpos est une cause d'aménorrhée primaire (malformation). D — L'HCS est une cause endocrinienne d'aménorrhée primaire virilisée. E — L'adénome à prolactine est une cause hypophysaire.",
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
    "explanation": "nalyse pédagogique Le meilleur traitement de l'aménorrhée chez une patiente anorexique est la renutrition et la reprise de poids. La rémission peut être longue ; l'évolution vers la chronicisation concerne ~30 % des cas. Dans ce contexte, l'œstroprogestatif peut être une alternative, mais pas en première intention. Pourquoi les autres options sont fausses B — L'œstroprogestatif est une alternative, pas le traitement de première ligne. C — La cabergoline traite l'hyperprolactinémie. D — L'induction ovulatoire n'a pas sa place en première intention dans l'anorexie. E — La chirurgie hypophysaire n'a aucun rôle ici.",
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
    "explanation": "nalyse pédagogique Dans le syndrome de Morris, les testicules ectopiques (abdomen, pli inguinal) présentent un risque de dégénérescence tumorale (gonadoblastome, dysgerminome) : une gonadectomie doit être programmée avec la patiente, dans le cadre d'une prise en charge pluridisciplinaire (psychologique, chirurgicale, endocrinologique). Le suivi inclut la surveillance des gonades. Pourquoi les autres options sont fausses B — Il n'y a pas d'utérus (régression müllérienne par l'AMH) : l'hystérectomie n'a pas de sens. C — L'hydrocortisone traite l'HCS, pas le Morris. D — Il n'y a pas d'ovaires fonctionnels : pas d'induction ovulatoire. E — Les anti-androgènes n'ont pas d'indication (récepteurs aux androgènes non fonctionnels).",
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
    "explanation": "nalyse pédagogique Le syndrome de Kallmann est un hypogonadisme hypogonadotrope par déficit de GnRH. Le traitement de l'aménorrhée est une supplémentation œstroprogestative progressive. Pour la fertilité : induction de l'ovulation par gonadotrophines ou pompe à GnRH pulsatile (perfusion pulsatile de GnRH pour restaurer la pulsatilité physiologique). Pourquoi les autres options sont fausses B — La cabergoline traite l'hyperprolactinémie. C — L'hydrocortisone traite l'HCS. D — La gonadectomie concerne Turner/Morris avec gonades dysgénésiques, pas Kallmann. E — Le DIU au lévonorgestrel est contraceptif, il n'a pas sa place dans le traitement de la fertilité.",
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
    "questionText": "[Cas clinique n°1 — Adolescent de 14 ans, aménorrhée primaire]\nAnamnèse Examen clinique Imagerie Une adolescente de 14 ans est amenée par sa mère pour absence de règles. Elle a un développement mammaire normal (Tanner S4) et une pilosité pubienne normale (P4). Depuis 3 mois, elle présente des douleurs pelviennes cycliques d'intensité croissante, associées à des dysuries et une constipation. À l'examen, on note une masse bleutée bombant à l'hymen. L'échographie abdominopelvienne retrouve une collection liquidienne dans le vagin, avec un utérus de taille normale.\n\nQuestion : Quel est le diagnostic le plus probable ?",
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
    "explanation": "Raisonnement La triade aménorrhée primaire + douleurs cycliques + masse bleutée à l'hymen signe une rétention menstruelle par obstacle anatomique. L'échographie confirme la collection vaginale (hématocolpos) et un utérus normal. Le traitement est chirurgical : ouverture de l'hymen et drainage. Distracteurs A — Rokitansky : utérus absent, pas de douleurs cycliques, pas de masse bleutée. C — Morris : caryotype XY, pas d'utérus, pas de masse hyménéale. D — Turner : impubérisme, pas de douleurs cycliques. E — HCS : virilisation, 17-OHP élevée, pas de masse vaginale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-27",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas clinique n°2 — Femme de 26 ans, aménorrhée secondaire et galactorrhée]\nAnamnèse Biologie Imagerie Une femme de 26 ans, nulligeste, consulte pour aménorrhée secondaire de 8 mois avec galactorrhée bilatérale spontanée. Elle rapporte des céphalées et une baisse de l'acuité visuelle. Elle ne prend aucun médicament. La prolactine est à 180 ng/ml. L'IRM hypophysaire révèle un macroadénome avec extension suprasellaire.\n\nQuestion : Quel est le diagnostic le plus probable ?",
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
    "explanation": "Raisonnement L'association aménorrhée + galactorrhée + PRL > 100 ng/ml + macroadénome à l'IRM est typique de l'adénome à prolactine. Les céphalées et troubles visuels signent la compression chiasmatique. Le traitement est médical par agoniste dopaminergique (cabergoline), avec effet anti-tumoral ; la chirurgie est réservée aux macroadénomes avec retentissement ophtalmologique résistant. Distracteurs A — Sheehan : nécrose post-hémorragique, pas d'adénome. C — Hypophysite auto-immune : contexte auto-immun, pas d'adénome. D — Craniopharyngiome : calcifications supra-sellaires, pas d'hyperprolactinémie majeure. E — Kallmann : anosmie, hypogonadisme hypogonadotrope, pas de galactorrhée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-28",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas clinique n°3 — Adolescent de 16 ans, impubérisme et petite taille]\nAnamnèse Examen clinique Caryotype Une adolescente de 16 ans consulte pour absence de règles et absence de développement mammaire. Elle mesure 142 cm (petite taille). À l'examen : thorax en bouclier, cou palmé, implantation basse des cheveux, pas de pilosité pubienne (Tanner P1), pas de développement mammaire (S1). Le caryotype révèle 45,X0. L'échographie pelvienne montre un utérus de petite taille et des ovaires non visualisés.\n\nQuestion : Quel est le diagnostic ?",
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
    "explanation": "Raisonnement Le tableau associe : aménorrhée primaire + impubérisme + petite taille + thorax en bouclier + cou palmé + caryotype 45,X0. C'est le syndrome de Turner (dysgénésie gonadique). L'utérus est présent mais petit, les ovaires sont absents (bandelettes fibreuses). Les gonadotrophines (FSH, LH) sont élevées, l'œstradiol très bas.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-29",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas clinique n°4 — Femme de 29 ans, aménorrhée secondaire et hirsutisme]\nAnamnèse Examen clinique Biologie Une femme de 29 ans, mariée, consulte pour aménorrhée secondaire de 10 mois, précédée de cycles irréguliers (spanioménorrhée). Elle rapporte une prise de poids récente, un hirsutisme (score de Ferriman à 14) et de l'acné. À l'examen : obésité androïde (IMC 32). Biologie : LH élevée, FSH normale, testostérone modérément élevée, insulinorésistance (HOMA-IR élevé). Échographie : ovaires augmentés de volume, stroma épaissi, multiples follicules périphériques.\n\nQuestion : Quel est le diagnostic le plus probable ?",
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
    "explanation": "Raisonnement Le SOPK associe : aménorrhée secondaire (souvent précédée de spanioménorrhée), obésité androïde, hyperandrogénie clinique (hirsutisme, acné), insulinorésistance, échographie évocatrice (ovaires augmentés de volume, stroma épaissi), biologie (LH élevée sans pic, FSH normale/basse, androgènes élevés, réponse explosive au test LH-RH).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-amenorrhees-30",
    "courseId": "c-gyn-amenorrhees",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas clinique n°5 — Femme de 34 ans, aménorrhée du post-partum]\nAnamnèse Examen clinique Biologie Une femme de 34 ans, 3ᵉ geste, consulte 6 mois après un accouchement hémorragique (délivrance artificielle + révision utérine) pour aménorrhée et absence de montée laiteuse. Elle rapporte une fatigue intense, une prise de poids, une intolérance au froid et une pâleur. À l'examen : hypotension, asthénie. Biologie : FSH et LH basses, œstradiol bas, prolactine basse, TSH basse avec T4 basse, cortisol bas.\n\nQuestion : Quel est le diagnostic le plus probable ?",
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
    "explanation": "Raisonnement Le tableau associe : accouchement hémorragique + aménorrhée + agalactie + insuffisance hypophysaire globale (déficit gonadotrope, thyréotrope, corticotrope). C'est le syndrome de Sheehan (nécrose hypophysaire ischémique du post-partum). Le traitement est substitutif à vie : œstroprogestatifs + L-thyroxine + hydrocortisone. Distracteurs B — Hyperprolactinémie : PRL élevée, galactorrhée, pas d'agalactie. C — Kallmann : anosmie, pas de contexte obstétrical. D — SOPK : LH élevée, androgènes élevés, pas d'insuffisance hypophysaire globale. E — Insuffisance ovarienne précoce : FSH élevée, pas de déficit thyréotrope/corticotrope.",
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
      "A Présence de tissu endométrial ectopique en continuité avec l'endomètre utérin",
      "B Présence de tissu endométrial ectopique situé à distance de l'endomètre, sans connexion avec lui, comportant à la fois des glandes et du stroma",
      "C Présence de glandes endométriales isolées, sans stroma associé",
      "D Prolifération bénigne de fibres musculaires lisses du myomètre",
      "E Affection infectieuse chronique hormono-dépendante du pelvis"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La définition classique associe trois caractères indissociables : (1) tissu endométrial ectopique, (2) à distance de l'endomètre et sans connexion avec lui, (3) comportant glandes ET stroma. A — Faux : la continuité avec l'endomètre définit l'adénomyose (tissu endométrial au sein du myomètre), pas l'endométriose. C — Faux : la présence de stroma (chorion cytogène) est un critère histologique indispensable ; des glandes isolées ne suffisent pas. D — Faux : il s'agit de la définition du fibrome (léiomyome). E — Faux : l'endométriose est chronique, bénigne, hormono-dépendante, mais non infectieuse. La confusion avec une PID est un piège classique.",
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
      "A Péritoine pelvien",
      "B Ovaire",
      "C Poumon",
      "D Pancréas",
      "E Glande thyroïde"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les foyers siègent le plus souvent dans le pelvis : péritoine, ovaires, intestin, vessie, rectum, myomètre. Plus rarement en extra-pelvien : peau, poumons, cicatrice chirurgicale. A et B — Vrais : localisations pelviennes de première ligne, l'ovaire étant le siège de l'endémétriome. C — Vrai : l'atteinte pulmonaire est une localisation extra-pelvienne rare mais décrite (hémoptysies cataméniales). D — Faux : le pancréas ne fait pas partie des localisations décrites dans le cours ; ne pas extrapoler toute localisation abdominale. E — Faux : la thyroïde n'est pas une localisation d'endométriose (à distinguer de l'endémétriose de la cicatrice cervicale ou de la paroi abdominale).",
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
      "A Elle touche 1 à 2 % des femmes en âge de procréer",
      "B Elle touche 10 à 15 % des femmes en âge de procréer et près de la moitié des femmes infertiles",
      "C Elle touche préférentiellement les femmes ménopausées",
      "D Elle n'a aucun retentissement psychologique",
      "E Elle est exceptionnelle en Algérie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endométriose est une affection gynécologique très fréquente et complexe : 10 à 15 % des femmes en âge de procréer et près de la moitié des femmes infertiles. A — Faux : sous-estimation majeure ; le retard diagnostique explique les chiffres historiquement bas. C — Faux : maladie hormono-dépendante : elle concerne la femme en âge de procréer et régresse généralement après la ménopause. D — Faux : le cours insiste sur le retentissement psychologique (douleur chronique, infertilité, fluctuations de l'humeur). E — Faux : aucune donnée ne permet d'affirmer une exception algérienne ; c'est une pathologie universelle.",
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
      "A Les dysménorrhées secondaires sont les signes les plus évocateurs",
      "B L'intensité de la douleur est étroitement corrélée à la sévérité des lésions",
      "C La dyspareunie et la douleur pelvienne chronique font partie du tableau",
      "D Une dyschésie et une dysurie peuvent révéler une atteinte postérieure ou vésicale",
      "E Une fatigue chronique et des fluctuations de l'humeur peuvent s'observer"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "(proposition fausse) Le cours est explicite : « l'intensité de la douleur est sans aucune corrélation avec la sévérité des lésions ». Une endométriose minime peut être atrocement douloureuse, et une forme profonde extensive peut rester pauci-symptomatique. A — Vrai : les dysménorrhées secondaires (apparues après des cycles initialement indolores) sont les plus évocatrices. C — Vrai : dyspareunie et douleur pelvienne chronique complètent la triade douloureuse classique. D — Vrai : dyschésie (défécation douloureuse) et dysurie orientent vers une atteinte profonde rectale ou vésicale. E — Vrai : les symptômes non spécifiques (pesanteur abdominale, asthénie chronique, fluctuations de l'humeur) altèrent l'état général.",
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
      "A L'examen gynécologique se fait de préférence en période menstruelle",
      "B Un examen gynécologique normal élimine formellement le diagnostic",
      "C L'examen au spéculum peut révéler une lésion rétractile et/ou bleutée",
      "D Le toucher vaginal recherche une induration rétro-cervicale des ligaments utéro-sacrés",
      "E Le toucher rectal est réalisé en cas de suspicion de lésions postérieures"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "(proposition fausse) L'examen peut être totalement normal — ce qui n'élimine en rien le diagnostic. C'est un piège docimologique majeur : normalité clinique ≠ absence de maladie. A — Vrai : la période menstruelle majore la sensibilité des lésions et facilite leur repérage. C — Vrai : lésion rétractile/bleutée, ou zone érythémateuse d'aspect cartonné saignant au contact. D — Vrai : l'induration rétro-cervicale des ligaments utéro-sacrés, de la face postérieure de l'isthme ou de la cloison recto-vaginale est un signe clé. E — Vrai : le TR explore les lésions postérieures (cloison recto-vaginale, torus utérin).",
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
      "A Utérus augmenté de volume",
      "B Douleur à la mobilisation ou à la pression utérine",
      "C Masse annexielle latéro-utérine mobile et indolore",
      "D Utérus peu mobile, voire fixé",
      "E Vaginisme isolé sans autre anomalie"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "L'adénomyose donne un utérus augmenté de volume, douloureux à la mobilisation/pression et peu mobile voire fixé (par réaction fibreuse et adhérences). A, B, D — Vrais : c'est la triade sémiologique utérine de l'adénomyose. C — Faux : une masse annexielle correspond à un endémétriome (endométriose ovarienne), pas à l'adénomyose ; de plus elle est typiquement douloureuse et souvent fixée. E — Faux : le vaginisme est un trouble fonctionnel, non spécifique de l'adénomyose.",
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
      "A IRM pelvienne",
      "B Échographie pelvienne",
      "C Hystérosalpingographie",
      "D TDM abdomino-pelvienne",
      "E Laparoscopie exploratrice"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'échographie pelvienne est l'examen de 1re intention : non invasive, disponible, peu coûteuse. Elle peut être normale sans éliminer le diagnostic. A — Faux : l'IRM est de 2e intention ; elle est l'examen de référence pour la cartographie d'extension. C — Faux : l'HSG est utile dans le bilan d'infertilité, pas en dépistage de première ligne. D — Faux : la TDM n'a pas sa place dans le diagnostic de l'endométriose (faible contraste des tissus mous). E — Faux : la laparoscopie est l'examen de référence diagnostique, mais elle est invasive : jamais en première intention.",
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
      "A Kyste uniloculaire à contenu anéchogène pur",
      "B Image kystique de forme régulière, à contenu finement échogène homogène",
      "C Masse solide hypervasculaire à vascularisation centrale",
      "D Kyste multiloculaire à cloisons épaisses avec végétations",
      "E Utérus globuleux et hétérogène sans formation kystique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endométriome contient du vieux sang : il se traduit par une image kystique régulière, à contenu finement échogène homogène (aspect classique en « verre dépoli »). A — Faux : un contenu anéchogène pur évoque un kyste fonctionnel simple, non un endémétriome. C — Faux : une masse solide hypervasculaire doit faire évoquer une tumeur ovarienne maligne. D — Faux : cloisons épaisses et végétations = critères de suspicion de malignité, à ne jamais attribuer à un endémétriome. E — Faux : cette description correspond à l'adénomyose (utérus globuleux hétérogène), pas à l'endémétriome.",
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
      "A C'est l'examen de première intention devant toute suspicion",
      "B C'est l'examen de référence pour apprécier l'extension de la maladie, avec une cartographie précise des lésions",
      "C Elle supprime définitivement le recours à la laparoscopie",
      "D Elle est contre-indiquée chez la femme jeune en âge de procréer",
      "E Elle n'explore pas les localisations profondes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'IRM est l'examen de seconde intention, de référence pour l'extension : elle recherche les kystes endométriosiques uni- ou bilatéraux et surtout les localisations profondes, avec une cartographie guidant le choix thérapeutique. A — Faux : l'échographie reste la première intention. C — Faux : l'IRM ne remplace pas la laparoscopie, qui reste l'examen de référence à visée diagnostique et biopsique. D — Faux : aucune contre-indication liée à l'âge ou au statut de procréation (seules les contre-indications habituelles de l'IRM s'appliquent). E — Faux : c'est précisément son point fort : l'exploration de l'endométriose profonde.",
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
      "A Diverticules des bords et du fond utérin",
      "B Agrandissement global de la cavité utérine",
      "C Angulation en baïonnette de l'isthme utérin, image en parasol ou en champignon",
      "D Le produit de contraste entoure la partie supérieure de l'ovaire sans accéder à la partie inférieure",
      "E Obstruction tubaire bilatérale systématique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "L'adénomyose diffuse se traduit par des diverticules des bords et du fond, un agrandissement global de la cavité, des images d'adhérences, une angulation en baïonnette de l'isthme et une image en parasol ou en champignon. A, B, C — Vrais : ce sont les signes radiologiques classiques. D — Faux : il s'agit du signe de l'endémétriome : le contraste coiffe l'ovaire sans atteindre sa partie inférieure à cause des adhérences. E — Faux : l'obstruction tubaire n'est pas un signe d'adénomyose ; l'infertilité de l'endométriose est multifactorielle (ovarienne, tubaire, Douglas).",
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
      "A C'est l'examen de première intention devant une dysménorrhée",
      "B C'est l'examen de référence, permettant de visualiser les lésions, d'en préciser la topographie, de réaliser des biopsies et de classer la maladie",
      "C Elle n'a qu'une visée thérapeutique et jamais diagnostique",
      "D Elle ne permet pas la classification de l'endométriose",
      "E Elle est formellement contre-indiquée en cas d'infertilité"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La laparoscopie est l'examen de référence : elle visualise les lésions, précise leur topographie, permet les biopsies anatomo-pathologiques et la classification de l'endométriose. Elle a donc une double visée, diagnostique et thérapeutique. A — Faux : examen invasif : jamais en première intention devant une simple dysménorrhée. C — Faux : elle est d'abord diagnostique (biopsies), puis thérapeutique (coagulation, adhésiolyse, résection). D — Faux : elle permet la classification peropératoire des lésions. E — Faux : elle fait partie de l'arsenal thérapeutique de l'infertilité associée à l'endométriose.",
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
      "A Régions hypervascularisées",
      "B Pigmentation jaunâtre ou brunâtre",
      "C Lésions rouges, de type pétéchies",
      "D Multiples kystes à contenu séreux clair, translucides",
      "E Plages de tissu graisseux nécrotique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les lésions laparoscopiques typiques associent : zones hypervascularisées, pigmentation jaunâtre ou brunâtre, lésions rouges (pétéchies) et adhérences. La multiplicité des aspects (lésions « poudrées », « flamme », « bleutées ») explique la difficulté diagnostique. A, B, C — Vrais : décrits dans le cours. D — Faux : un contenu séreux clair translucide évoque un kyste fonctionnel ; l'endométriome contient un liquide épais, « chocolat » (vieux sang). E — Faux : la nécrose graisseuse n'est pas un aspect d'endométriose (évoquer plutôt une cytostéatonécrose ou une endométriose cicatricielle de paroi).",
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
      "A L'étiologie exacte demeure inconnue",
      "B La théorie de la menstruation rétrograde est l'une des hypothèses retenues",
      "C Des facteurs génétiques et des facteurs toxiques de l'environnement (dioxine) ont été incriminés",
      "D La dissémination des foyers peut se faire par voie lymphatique, sanguine ou péritonéale",
      "E L'endométriose survient sur un terrain d'hypoestrogénie"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(proposition fausse) L'endométriose est hormono-dépendante et se développe sur un terrain d'HYPERœstrogénie. C'est cette dépendance œstrogénique qui fonde toute la stratégie thérapeutique (induire une hypoestrogénie médicale). A — Vrai : l'étiologie reste inconnue ; plusieurs facteurs sont incriminés. B — Vrai : la menstruation rétrograde est l'hypothèse la plus classique (reflux de sang menstruel par les trompes). C — Vrai : facteurs génétiques et toxiques environnementaux (dioxine) sont évoqués. D — Vrai : dissémination lymphatique, hématogène ou péritonéale, les foyers restant soumis aux modifications cycliques.",
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
      "A Des cellules endométriales migrent par voie lymphatique jusqu'au péritoine",
      "B Le tissu local se transformerait en tissu endométrial sous l'influence cyclique des œstrogènes",
      "C Le sang menstruel reflue par les trompes vers la cavité péritonéale",
      "D L'endomètre s'invagine dans le myomètre au cours des cycles",
      "E Une infection chronique du péritoine induit une métaplasie glandulaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Selon la théorie de la métaplasie, le tissu endométriosique résulterait de la transformation du tissu local en tissu endométrial, sous l'influence cyclique des œstrogènes (terrain d'hyperœstrogénie). A — Faux : description de la dissémination lymphatique, pas de la métaplasie. C — Faux : c'est la théorie de la menstruation rétrograde (Sampson). D — Faux : c'est la définition de l'adénomyose, entité distincte. E — Faux : aucune théorie infectieuse n'est retenue dans l'endométriose.",
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
      "A AINS",
      "B Contraceptifs oraux œstroprogestatifs monophasiques en continu",
      "C Progestatifs",
      "D Antibiotiques à large spectre",
      "E Corticothérapie au long cours"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le traitement médical de première intention repose sur : AINS, contraceptifs oraux œstroprogestatifs monophasiques en continu, progestatifs, et peut s'étendre aux antigonadotropines (6 mois), aux agonistes de la GnRH et au stérilet au lévonorgestrel. A, B, C — Vrais : options de première ligne, toutes antalgiques et/ou hypoestrogénisantes. D — Faux : l'endométriose n'est pas une infection ; les antibiotiques n'ont aucune place (piège de la confusion avec une PID). E — Faux : la corticothérapie au long cours n'est pas un traitement de l'endométriose et expose à des effets délétères majeurs.",
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
      "A Une hystérectomie systématique avec annexectomie bilatérale d'emblée",
      "B Une coagulation des foyers endométriosiques, une adhésiolyse, voire une résection des foyers ectopiques dans les formes sévères",
      "C Une ovariectomie bilatérale de première intention",
      "D Une simple cœlioscopie diagnostique sans geste",
      "E Une radiothérapie pelvienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La chirurgie de deuxième ligne associe : coagulation des foyers endométriosiques, adhésiolyse et, dans les formes sévères, résection des foyers ectopiques. A et C — Faux : gestes mutilants et irréversibles, jamais d'emblée chez une femme en âge de procréer ; ils se discutent au cas par cas, en dernier recours, après échec de tout le reste. D — Faux : la cœlioscopie doit être diagnostique ET thérapeutique dans le même temps quand elle est indiquée. E — Faux : la radiothérapie n'a aucune place dans une maladie bénigne.",
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
      "A Ils stimulent durablement la sécrétion de FSH et de LH",
      "B Ils inhibent la synthèse des œstrogènes et de la progestérone, ce qui assèche les foyers d'endométriose",
      "C Ils constituent le traitement de toute première intention",
      "D Ils sont dépourvus de tout effet indésirable",
      "E Leur durée d'utilisation est illimitée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les agonistes de la GnRH inhibent la synthèse d'œstrogènes et de progestatifs, créant une hypoestrogénie qui « assèche » les foyers d'endométriose — d'où leur efficacité mais aussi leurs effets secondaires. A — Faux : après une phase de stimulation initiale, l'effet est une désensibilisation hypophysaire aboutissant à une freination, non à une stimulation durable. C — Faux : ils viennent après les traitements de première ligne (AINS, COP en continu, progestatifs). D — Faux : l'hypoestrogénie induite entraîne des effets climatériques et une perte de densité minérale osseuse. E — Faux : les antigonadotropines sont prescrites pendant 6 mois ; une durée prolongée n'est pas admise sans précaution.",
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
      "A Taille < 30 mm et asymptomatique : abstention thérapeutique",
      "B Taille < 30 mm et symptomatique : traitement médical, puis traitement chirurgical en cas d'échec",
      "C Taille > 30 mm : traitement chirurgical",
      "D Taille > 30 mm et asymptomatique : abstention thérapeutique",
      "E Chirurgie d'emblée quel que soit le taille et la symptomatologie"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "L'algorithme est strictement calibré sur la taille (seuil de 30 mm) et la symptomatologie : < 30 mm asymptomatique → abstention ; < 30 mm symptomatique → médical d'abord, chirurgical si échec ; > 30 mm → chirurgical. A, B, C — Vrais : correspondent exactement aux recommandations du cours. D — Faux : au-delà de 30 mm, la chirurgie est indiquée quelle que soit la symptomatologie — piège classique de l'item « asymptomatique ». E — Faux : la chirurgie n'est pas systématique : les petits endométriomes asymptomatiques relèvent de l'abstention.",
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
      "A Un bilan étiologique du couple infertile est nécessaire avant toute décision thérapeutique",
      "B La stratégie peut être chirurgicale ou relever d'une assistance médicale à la procréation",
      "C La perturbation de la fertilité dépend de la sévérité de la maladie",
      "D Le traitement hormonal seul corrige toujours l'infertilité",
      "E L'endométriose n'altère jamais la fertilité"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La prise en charge de l'infertilité impose un bilan étiologique du couple avant de choisir entre chirurgie et AMP. L'anomalie responsable peut siéger au niveau des ovaires, des trompes ou du cul-de-sac de Douglas, et la perturbation dépend de la sévérité de la maladie. A, B, C — Vrais : conformes au cours. D — Faux : le traitement hormonal traite la douleur et assèche les foyers, il ne restaure pas à lui seul la fertilité (il est d'ailleurs contraceptif). E — Faux : près de la moitié des femmes infertiles sont atteintes d'endométriose.",
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
      "A L'évolution spontanée est variable : elle peut s'étendre, régresser ou se stabiliser",
      "B Le taux de récidive après chirurgie est de 20 % à 5 ans",
      "C Il existe un consensus international parfaitement établi sur la surveillance",
      "D Le suivi varie en fonction de la symptomatologie, des lésions et des traitements administrés",
      "E Le traitement chirurgical ou hormonal peut modifier l'évolution naturelle"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "(proposition fausse) Le cours est catégorique : « il n'existe pas de consensus pour la surveillance ». C'est un point souvent transformé en piège docimologique. A — Vrai : évolution spontanée variable : extension, régression ou stabilisation. B — Vrai : récidive post-chirurgicale de 20 % à 5 ans — chiffre à retenir. D — Vrai : le suivi est individualisé selon la symptomatologie, les lésions et les traitements. E — Vrai : les traitements chirurgicaux ou hormonaux influencent l'évolution.",
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
      "A Puberté précoce",
      "B Cycles courts",
      "C Irrégularité menstruelle",
      "D Ménopause précoce",
      "E Multiparité"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les facteurs de risque retenus sont : puberté précoce, cycles courts, irrégularité menstruelle — tous favorisant un exposition menstruelle accrue (théorie de la menstruation rétrograde). A, B, C — Vrais : plus de cycles = plus de reflux menstruel potentiel. D — Faux : la ménopause précoce réduit l'exposition hormonale cyclique, elle n'est pas un facteur de risque. E — Faux : la multiparité n'est pas un facteur de risque décrit ; la nulliparité est en revanche fréquemment associée dans les séries.",
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
      "A Dans l'adénomyose, l'utérus est augmenté de volume dans son ensemble",
      "B La paroi utérine est hypertrophiée, avec de multiples kystes diverticulaires remplis de sang noirâtre",
      "C Histologiquement, on trouve des glandes endométriales entourées de chorion cytogène et des faisceaux de fibres musculaires lisses",
      "D L'examen anatomopathologique n'a aucun intérêt diagnostique",
      "E Les lésions comportent à la fois des glandes et du stroma"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "(proposition fausse) L'anatomopathologie est essentielle : c'est elle qui confirme le diagnostic (glandes + chorion cytogène), élimine une lésion maligne et permet la classification. Les biopsies per-laparoscopiques sont réalisées précisément à cette fin. A et B — Vrais : macroscopie de l'adénomyose : utérus augmenté, paroi hypertrophiée, kystes diverticulaires à sang noirâtre. C — Vrai : description histologique exacte (glandes + chorion cytogène + fibres musculaires lisses). E — Vrai : c'est le critère diagnostique fondateur, déjà énoncé dans la définition.",
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
      "A Les ménorragies et métrorragies évoquent une endométriose cervicale",
      "B Les saignements de contact évoquent surtout une adénomyose",
      "C Les ménorragies/métrorragies évoquent l'adénomyose, tandis que les saignements de contact post-coïtaux évoquent une endométriose cervicale",
      "D L'hématurie cyclique n'a aucun rapport avec l'endométriose",
      "E Les rectorragies sont toujours d'origine hémorroïdaire"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La forme du saignement oriente vers le siège de l'endométriose : ménorragies/métrorragies → adénomyose ; saignements de contact (surtout post-coïtaux) → endométriose cervicale ; hématurie cyclique → atteinte vésicale ; rectorragies cycliques → atteinte rectale. A et B — Faux : inversion classique des deux tableaux, piège docimologique très fréquent. D — Faux : l'hématurie cyclique est un signe typique d'atteinte vésicale. E — Faux : des rectorragies cycliques, cataméniales, doivent faire évoquer une endométriose rectale ou du septum recto-vaginal.",
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
      "A Le diagnostic est difficile en raison de la diversité des symptômes",
      "B C'est une affection bénigne mais qui évolue en s'aggravant et se dissémine",
      "C Une échographie pelvienne normale élimine formellement le diagnostic",
      "D La précocité du diagnostic conditionne l'efficacité du traitement",
      "E Les tableaux vont de l'endométriose légère à l'endométriose sévère"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "(proposition fausse) L'échographie peut être normale sans éliminer le diagnostic — tout comme l'examen clinique. C'est le piège transversal de tout le chapitre : la normalité des examens non invasifs n'a aucune valeur d'exclusion. A — Vrai : la diversité des symptômes génère des tableaux très différents et retarde le diagnostic. B — Vrai : maladie bénigne mais évolutive et disséminante, d'où l'enjeu de la précocité. D — Vrai : la précocité conditionne l'efficacité thérapeutique. E — Vrai : le spectre va de la forme légère à la forme sévère.",
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
      "A Le traitement est adapté selon la manifestation clinique",
      "B La prise en charge psychologique des patientes douloureuses chroniques améliore les résultats du traitement",
      "C Le stérilet au lévonorgestrel fait partie des options médicales",
      "D L'hystérectomie avec annexectomie bilatérale est le traitement de première intention de la douleur chez la femme jeune",
      "E La prise en charge nécessite une approche multidisciplinaire"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "(proposition fausse) La chirurgie radicale n'est jamais un traitement de première intention chez la femme jeune : elle est mutilante et irréversible. La première ligne est médicale. A — Vrai : la stratégie est individualisée selon la plainte dominante (douleur, endémétriome, infertilité). B — Vrai : la prise en charge psychologique améliore les résultats dans les douleurs pelviennes chroniques. C — Vrai : le stérilet au lévonorgestrel est cité parmi les options médicales. E — Vrai : la conclusion du cours insiste sur l'approche multidisciplinaire pour limiter l'impact sur la vie quotidienne et la fertilité.",
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
    "questionText": "[Douleurs pelviennes chroniques et infertilité — CHU, consultation de gynécologie]\nVignette clinique Mme K., 32 ans, nulligeste, mariée depuis 3 ans, consulte pour des dysménorrhées secondaires intenses apparues il y a 3 ans (antérieurement cycles indolores), des dyspareunies profondes et une dyschésie cataméniale. Aucune grossesse après 18 mois de rapports réguliers non protégés.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "A Adénomyose isolée",
      "B Endométriose pelvienne profonde avec endométriome ovarien gauche",
      "C Kyste lutéal hémorragique",
      "D Kyste dermoïde de l'ovaire",
      "E Abcès tubo-ovarien"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association est caricaturale : dysménorrhée secondaire + dyspareunie profonde + dyschésie cataméniale = endométriose profonde postérieure (ligaments utéro-sacrés, cul-de-sac de Douglas) ; l'image échographique de kyste régulier à contenu finement échogène de 42 mm = endémétriome. A — Faux : l'adénomyose donne un utérus globuleux douloureux avec ménorragies, mais n'explique ni le nodule du Douglas ni l'endémétriome. C — Faux : un kyste hémorragique est aigu, résolutif en 1–3 cycles, à contenu hétérogène/fibrine, non associé à une dyschésie cataméniale. D — Faux : le kyste dermoïde est hyperéchogène (graisse, calcifications), non finement échogène. E — Faux : l'abcès tubo-ovarien s'accompagne d'un syndrome infectieux (fièvre, hyperleucocytose), absent ici.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-27",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Ménorragies et utérus globuleux — consultation EPH]\nVignette clinique Mme B., 38 ans, G3P3, consulte pour des ménorragies et une dysménorrhée d'aggravation progressive depuis 2 ans, sans dyspareunie. Pas de désir de grossesse.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "A Endométriose ovarienne bilatérale",
      "B Adénomyose",
      "C Léiomyome utérin sous-séreux",
      "D Hyperplasie endométriale atypique",
      "E Carcinome de l'endomètre"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade ménorragies + utérus globuleux douloureux + signes d'HSG typiques (diverticules, image en parasol, angulation en baïonnette de l'isthme) est caractéristique de l'adénomyose. A — Faux : aucune masse annexielle kystique, et l'HSG ne montre pas d'image d'endémétriome. C — Faux : un fibrome sous-séreux donne une masse individualisée, non un utérus globalement augmenté avec diverticules. D et E — Faux : l'hyperplasie et le cancer de l'endomètre se révèlent par des métrorragies et imposent une hystéroscopie avec biopsie ; ils ne donnent pas d'image en parasol ni d'utérus douloureux à la mobilisation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-28",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Rectorragies cycliques et dyschésie — endométriose profonde]\nVignette clinique Mme L., 29 ans, nulligeste, consulte pour des rectorragies strictement cataméniales, une dyschésie majeure et une dyspareunie profonde invalidante depuis 2 ans. Douleurs en « coups de poignard » à la défécation.\n\nQuestion : Quelle est la meilleure explication des rectorragies de cette patiente ?",
    "options": [
      "A Une hémorroïdie interne",
      "B Une atteinte endométriosique de la paroi rectale, soumise aux modifications cycliques",
      "C Une rectocolite hémorragique",
      "D Une fissure anale",
      "E Un cancer rectal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les foyers endométriosiques sont soumis aux mêmes modifications cycliques que l'endomètre : ils saignent en période menstruelle, d'où des rectorragies cataméniales et une muqueuse d'aspect normal en dehors des règles. A — Faux : les hémorroïdes ne sont pas strictement cycliques. C — Faux : la RCH donne des rectorragies permanentes avec muqueuse inflammatoire à la coloscopie (ici normale). D — Faux : la fissure anale donne une douleur à la défécation non cyclique. E — Faux : le cancer rectal ne se manifeste pas de façon strictement cataméniale, et la coloscopie est ici normale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-29",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Saignements de contact et lésion cervicale bleutée — consultation]\nVignette clinique Mme S., 24 ans, nulligeste, consulte pour des saignements de contact survenant surtout après les rapports, et une dyspareunie superficielle depuis 8 mois. Cycles réguliers, pas de dysménorrhée majeure.\n\nQuestion : Quel diagnostic évoquez-vous en priorité ?",
    "options": [
      "A Endométriose cervicale",
      "B Carcinome épidermoïde du col",
      "C Adénomyose",
      "D Endométriome ovarien",
      "E Kyste de Naboth isolé"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Lésion rétractile et bleutée, saignant au contact, avec zone érythémateuse « cartonnée » : c'est l'aspect typique de l'endémétriose cervicale, qui explique les saignements de contact post-coïtaux. B — Faux : à éliminer systématiquement, mais ici frottis et HPV négatifs ; le cancer du col est ulcéro-bourgeonnant ou infiltrant, souvent avec cytologie anormale. Toute lésion cervicale doit néanmoins être biopsiée en cas de doute. C — Faux : l'adénomyose est une pathologie du myomètre, sans lésion cervicale. D — Faux : l'endémétriome est ovarien ; l'échographie est ici normale. E — Faux : un kyste de Naboth est muqueux, translucide, jaunâtre, et ne saigne pas au contact.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-endometriose-30",
    "courseId": "c-gyn-endometriose",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Échec du traitement de première ligne — décision thérapeutique]\nVignette clinique Mme H., 26 ans, nulligeste, sans désir de grossesse immédiat. Elle présente des dysménorrhées sévères depuis 5 ans et une douleur pelvienne chronique avec retentissement majeur sur la vie quotidienne (absentéisme professionnel).\n\nQuestion : Quelle est la conduite la plus adaptée à ce stade ?",
    "options": [
      "A Poursuivre le même traitement 6 mois supplémentaires sans modification",
      "B Demander une IRM pelvienne pour cartographier une éventuelle endométriose profonde et réévaluer la stratégie",
      "C Réaliser d'emblée une hystérectomie",
      "D Arrêter tout traitement et rassurer",
      "E Prescrire une antibiothérapie prolongée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Échographie normale mais signes cliniques d'endométriose profonde (induration des ligaments utéro-sacrés) : l'IRM est l'examen de seconde intention, de référence pour la cartographie d'extension et le choix thérapeutique. A — Faux : échec documenté à 6 mois : l'acharnement thérapeutique n'a pas de sens. C — Faux : geste mutilant et irréversible, jamais d'emblée à 26 ans. D — Faux : laisser une douleur à EVA 8/10 sans prise en charge est une faute. E — Faux : aucune place des antibiotiques dans une maladie non infectieuse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-1",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Caractéristiques générales Choix simple (Sauf)",
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
    "explanation": "Réponse correcte : E Explication : Le cycle menstruel est physiologiquement interrompu pendant la grossesse et l'allaitement (en raison de l'inhibition de l'axe hypothalamo-hypophysaire par les hormones placentaires et la prolactine). Il disparaît définitivement à la ménopause. A (Vrai) : La ménarchie se situe autour de 12 ans. B (Vrai) : Le cycle normal est de 28 ± 4 jours, soit 21 à 35 jours. C (Vrai) : Les règles durent en moyenne 4 jours (3-7 jours). D (Vrai) : Le volume normal de perte sanguine est de 25 à 80 ml.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-2",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Ovulation QCM Multiples (2-3 réponses)",
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
    "explanation": "Réponses correctes : A et C Explication : A (Vrai) : Le pic d'œstradiol précède le pic de LH et est le signal déclencheur de l'ovulation. B (Faux) : C'est l'inverse. Le pic d'œstradiol précède le pic de LH. Le pic de LH est consécutif au rétrocontrôle positif des œstrogènes. C (Vrai) : La lutéinisation (début de sécrétion de progestérone) est induite par le pic de LH et commence avant la rupture folliculaire. D (Faux) : La progestérone exerce un rétrocontrôle négatif sur la LH (et la FSH), ce qui limite la durée de la phase lutéale. E (Faux) : C'est la LH qui déclenche l'ovulation et les phénomènes de lutéinisation (la FSH est impliquée dans la maturation folliculaire).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-3",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Glaire cervicale Réponse Juste (RJ)",
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
    "explanation": "Réponse correcte : B Explication : A (Faux) : La glaire cervicale est sous la dépendance des œstrogènes ET de la progestérone, avec des effets opposés. B (Vrai) : Les œstrogènes augmentent l'abondance et la filance de la glaire (aspect \"filant\" et clair), facilitant la pénétration des spermatozoïdes. C (Faux) : La progestérone diminue l'abondance et la filance de la glaire, la rendant épaisse et imperméable. D (Faux) : Elle est le produit de sécrétion des glandes cervicales (col de l'utérus), et non de l'endomètre. E (Faux) : Au moment de l'ovulation (sous l'effet des œstrogènes), la glaire est au contraire très fluide et filante (viscosité minimale).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-4",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Follicule de De Graaf Choix simple",
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
    "explanation": "Réponse correcte : C Explication : Le follicule de De Graaf, qui est le follicule mature prêt à ovuler, atteint un diamètre de 10 à 12 mm. Il se présente comme une vésicule contenant un liquide folliculaire et deux couches cellulaires (la granulosa en interne et les thèques interne/externe en périphérie). A (Faux) : 1-2 mm correspond à un follicule primordial ou primaire. B (Faux) : 5-7 mm est la taille d'un follicule en cours de maturation (antral). D (Faux) : 15-20 mm est une taille qui peut être observée en échographie mais qui dépasse la taille classique du De Graaf citée dans le cours (10-12 mm). E (Faux) : 25-30 mm correspondrait plutôt à un kyste ovarien fonctionnel.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-5",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Aménorrhée Réponse Fausse (RF)",
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
    "explanation": "Réponse incorrecte (FAUSSE) : C Explication : La définition de l'aménorrhée précise qu'elle survient en dehors de la grossesse et de l'allaitement. L'option C est donc incomplète et constitue la proposition fausse. A (Vrai) : C'est la définition classique de l'aménorrhée primaire (> 18 ans dans le cours, bien que certaines définitions récentes utilisent 15-16 ans). B (Vrai) : Définition de l'aménorrhée secondaire (> 3 mois). D (Vrai) : L'imperforation de l'hymen est une cause anatomique d'aménorrhée primaire (les règles ne peuvent pas s'écouler). E (Vrai) : La ménopause est une cause physiologique d'aménorrhée secondaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-6",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Endomètre QCM Multiples (2-3 réponses)",
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
      3,
      4
    ],
    "explanation": "Réponses correctes : A, B, C, D (Toutes sauf E) Explication : A (Vrai) : Les règles (J1-J5) correspondent à la desquamation de la couche superficielle de l'endomètre. B (Vrai) : La phase prolifératoire (J5-J14) est sous l'effet des œstrogènes, l'endomètre se reconstitue et s'épaissit. C (Vrai) : La phase sécrétoire (ou lutéale) voit l'endomètre se creuser (dentelle utérine) sous l'effet de la progestérone. D (Vrai) : Les glandes en tubes spiralées se développent et sécrètent du glycogène (nutriment pour un éventuel embryon). E (Faux) : En l'absence de fécondation, le corps jaune régresse, la progestérone chute, et l'endomètre est éliminé à J28 (c'est le début des règles suivantes).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-7",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Exploration clinique Choix simple",
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
    "explanation": "Réponse correcte : B Explication : La courbe ménothermique met en évidence une augmentation de la température corporelle d'environ 0,5 °C au moment de l'ovulation. Cette hyperthermie est due à l'effet de la progestérone et se maintient pendant toute la phase lutéale (deuxième partie du cycle). A (Faux) : La température augmente, elle ne diminue pas. C (Faux) : L'élévation est modérée (environ 0,5 °C), pas de 1,5 °C. D (Faux) : La variation existe et est un signe clinique d'ovulation. E (Faux) : L'augmentation ne dure pas qu'un seul jour, elle persiste durant toute la phase lutéale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-8",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Phase lutéale Réponse Juste (RJ)",
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
    "explanation": "Réponse correcte : B Explication : Pendant la phase lutéale, le corps jaune sécrète de la progestérone en grande quantité, et la sécrétion des œstrogènes augmente également (bien que moins qu'en phase folliculaire). A (Faux) : En l'absence de fécondation, le corps jaune régresse environ 10 jours après l'ovulation (et non 5 jours). C (Faux) : La lutéinisation est entretenue par le taux de LH (même minime). D (Faux) : Le corps jaune sécrète de la progestérone pendant 12 à 14 jours (et non 28 jours). E (Faux) : En cas de fécondation, le corps jaune persiste (grâce à l'hCG) pour maintenir la progestérone et éviter le décollement de l'endomètre.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-9",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Anomalies du cycle QCM Multiples (2-3 réponses)",
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
    "explanation": "Réponses correctes : A, B, C Explication : A (Vrai) : Spanioménorrhée = cycle > 35 jours. B (Vrai) : Polyménorrhée = cycle C (Vrai) : L'irrégularité se caractérise par l'alternance de cycles longs et courts. D (Faux) : La polyménorrhée concerne la fréquence (cycle court), pas l'abondance. Les règles peu abondantes correspondent à l'hypoménorrhée. E (Faux) : La spanioménorrhée peut être fonctionnelle (ex: stress, syndrome des ovaires polykystiques) ou organique, elle n'est pas toujours organique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-10",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Régulation neuroendocrinienne Choix simple",
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
    "explanation": "Réponse correcte : C Explication : Le pic de LH (Luteinizing Hormone) est le signal déclencheur de l'ovulation. C'est également elle qui induit la lutéinisation des cellules de la granulosa pour former le corps jaune. A (Faux) : La FSH agit surtout sur la maturation du follicule ovarien. B (Faux) : La Gn-RH est l'hormone hypothalamique qui stimule la sécrétion de LH et FSH, mais elle n'agit pas directement sur l'ovaire. D (Faux) : La progestérone est le produit du corps jaune, elle ne déclenche pas l'ovulation. E (Faux) : L'œstradiol prépare l'ovulation (rétrocontrôle positif) mais ne la déclenche pas directement.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-11",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Axe hypothalamo-hypophysaire Réponse Fausse (RF)",
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
    "explanation": "Réponse incorrecte (FAUSSE) : E Explication : Les hormones ovariennes exercent une rétroaction (feed-back) négative la plupart du temps (pour réguler la sécrétion de FSH/LH), et une rétroaction positive uniquement au moment du pic d'œstradiol pré-ovulatoire (qui déclenche le pic de LH). L'option E est donc fausse car elle stipule \"uniquement positive\". A (Vrai) : L'hypothalamus utilise le système porte pour communiquer avec l'antéhypophyse. B (Vrai) : La Gn-RH est le chef d'orchestre hypothalamique. C (Vrai) : La Gn-RH stimule la libération de LH et FSH. D (Vrai) : La FSH et la LH sont les gonadotropines hypophysaires agissant sur l'ovaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-12",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Explorations para-cliniques QCM Multiples (2-3 réponses)",
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
      3,
      4
    ],
    "explanation": "Réponses correctes : A, B, C, D (Toutes sauf E) Explication : A (Vrai) : L'AMH est un marqueur de la réserve ovarienne (investigation hormonale). B (Vrai) : L'échographie est l'examen de choix pour le suivi folliculaire et de l'endomètre. C (Vrai) : L'hystérosalpingographie évalue la cavité utérine et la perméabilité tubaire. D (Vrai) : La cœlioscopie est une méthode endoscopique d'exploration pelvienne. E (Faux) : Le dosage de la prolactine explore l'axe hypothalamo-hypophysaire (hyperprolactinémie), mais ce n'est pas l'examen spécifique pour évaluer la phase lutéale (on doserait plutôt la progestérone au 21e jour).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-13",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Troubles des menstruations Choix simple (Sauf)",
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
    "explanation": "Réponse incorrecte (FAUSSE) : D Explication : La dysménorrhée correspond aux douleurs pelviennes qui surviennent au moment des règles (et non en dehors). Les douleurs en dehors des règles peuvent être des douleurs intermenstruelles ou être liées à d'autres pathologies (endométriose, etc.). A (Vrai) : Hypoménorrhée = volume B (Vrai) : Hyperménorrhée = volume > 80 ml. C (Vrai) : Ménorragie = volume > 80 ml et/ou durée > 7 jours. E (Vrai) : Métrorragie = saignement en dehors des règles.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-14",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Corps jaune Réponse Juste (RJ)",
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
    "explanation": "Réponse correcte : B Explication : Après l'ovulation, les cellules de la granulosa se chargent de pigments jaunes (lutéine) et forment le corps jaune, qui sécrète de la progestérone pendant 12 à 14 jours. Ensuite, en l'absence de fécondation, il régresse. A (Faux) : Le corps jaune se forme à partir des cellules de la granulosa (et des thèques internes). C (Faux) : Il persiste au début de la grossesse (grâce à l'hCG), mais pas pendant toute la grossesse (le placenta prend le relais). D (Faux) : Sa régression est due à la baisse de LH (et à l'absence d'hCG). E (Faux) : Les pigments sont jaunes (d'où le nom \"corps jaune\").",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-15",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Rétrocontrôle QCM Multiples (2-3 réponses)",
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
    "explanation": "Réponses correctes : A, B, C Explication : A (Vrai) : En phase folliculaire, l'augmentation progressive des œstrogènes freine la sécrétion de FSH (rétrocontrôle négatif). B (Vrai) : Au moment de l'ovulation, le taux très élevé d'œstradiol bascule en rétrocontrôle positif, déclenchant le pic de LH. C (Vrai) : Après l'ovulation, la progestérone freine la LH pour éviter une nouvelle ovulation (rétrocontrôle négatif). D (Faux) : La FSH exerce un rétrocontrôle négatif sur la Gn-RH. E (Faux) : La progestérone exerce un rétrocontrôle négatif sur la FSH et la LH.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-16",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Métrorragies Choix simple (Sauf)",
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
    "explanation": "Réponse incorrecte (FAUSSE) : C Explication : Les métrorragies ne sont pas toujours d'origine hormonale. Elles peuvent être d'origine organique (polypes, fibromes, cancer de l'endomètre, cervicite, etc.). C'est une distinction majeure à faire en clinique. A (Vrai) : Définition des métrorragies. B (Vrai) : C'est un signe d'alerte majeur chez la femme ménopausée. D (Vrai) : Les causes organiques sont fréquentes. E (Vrai) : Ce sont les examens de première intention pour explorer une métrorragie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-17",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Système porte Réponse Juste (RJ)",
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
    "explanation": "Réponse correcte : B Explication : L'hypothalamus libère la Gn-RH dans le système porte hypothalamo-hypophysaire, un réseau de vaisseaux sanguins reliant l'hypothalamus à l'antéhypophyse. Cela permet à la Gn-RH d'atteindre directement les cellules gonadotropes de l'antéhypophyse. A (Faux) : Il n'y a pas de connexion nerveuse directe pour la sécrétion des hormones antéhypophysaires (bien qu'il existe des connexions pour la post-hypophyse). C (Faux) : Le LCR n'est pas le vecteur de la Gn-RH. D (Faux) : Le système lymphatique n'est pas impliqué ici. E (Faux) : La circulation systémique directe ne permet pas d'atteindre l'hypophyse à des concentrations suffisantes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-18",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Effets de la progestérone QCM Multiples (2-3 réponses)",
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
    "explanation": "Réponses correctes : B, C, D Explication : A (Faux) : La progestérone diminue la filance et l'abondance de la glaire cervicale (effet anti-œstrogénique). B (Vrai) : La progestérone transforme l'endomètre prolifératif en endomètre sécrétoire (dentelle utérine). C (Vrai) : La progestérone est hyperthermiante (responsable de l'élévation de 0,5 °C). D (Vrai) : Elle favorise le développement des glandes en tubes spiralées. E (Faux) : C'est la chute de la progestérone (due à la régression du corps jaune) qui provoque la desquamation de l'endomètre (règles), et non la progestérone elle-même.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-19",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Aménorrhée primaire Choix simple",
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
    "explanation": "Réponse correcte : C Explication : Selon le document fourni, l'aménorrhée primaire est définie comme l'absence des premières règles à l'âge habituel de la ménarchie, soit plus de 18 ans. (Note : dans la pratique clinique actuelle, on tend à considérer 15-16 ans, mais il faut se référer au cours pour l'examen). A (Faux) : 14 ans est l'âge moyen de la ménarchie, pas la limite pathologique. B (Faux) : 16 ans est souvent utilisé en pratique clinique moderne mais ne correspond pas à la définition stricte du cours. D (Faux) : 20 ans est trop tardif. E (Faux) : 21 ans est trop tardif.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-20",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Hyperménorrhée Réponse Fausse (RF)",
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
    "explanation": "Réponse incorrecte (FAUSSE) : C Explication : L'hyperménorrhée définit uniquement l'abondance (> 80 ml). La ménorragie définit l'abondance ET/OU la durée prolongée (> 7 jours). Elles ne sont donc pas strictement synonymes dans toutes les définitions : une femme peut avoir une hyperménorrhée sans ménorragie si ses règles durent moins de 7 jours. A (Vrai) : C'est la définition de l'hyperménorrhée. B (Vrai) : La perte de sang excessive entraîne une carence en fer. D (Vrai) : Le fibrome est une cause classique d'hyperménorrhée. E (Vrai) : C'est le principe même de l'hyperménorrhée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-21",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Tests dynamiques QCM Multiples (2-3 réponses)",
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
    "explanation": "Réponses correctes : A, B, C Explication : Le cours mentionne explicitement le test au progestatif, le test au Clomid et le test Gn-RH comme tests hormonaux dynamiques pour explorer le cycle menstruel. A (Vrai) : Évalue l'imprégnation œstrogénique et la réponse de l'endomètre. B (Vrai) : Évalue la capacité de l'axe hypothalamo-hypophysaire à répondre (test de stimulation). C (Vrai) : Évalue la réserve hypophysaire en gonadotropines. D (Faux) : Le test de freinage à la dexaméthasone est utilisé pour explorer l'axe corticotrope (syndrome de Cushing), pas le cycle menstruel. E (Faux) : L'hyperglycémie provoquée par voie orale explore le métabolisme glucidique (diabète, SOPK), ce n'est pas un test dynamique de l'axe gonadotrope.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-22",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Phase sécrétoire Choix simple (Sauf)",
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
    "explanation": "Réponse incorrecte (FAUSSE) : E Explication : En l'absence de fécondation, le corps jaune régresse, la progestérone chute, et l'endomètre est éliminé à J28 (rupture des artères spiralées) : ce sont les règles. L'endomètre n'est maintenu qu'en cas de fécondation (grâce à l'hCG). A (Vrai) : La phase lutéale correspond à la deuxième moitié du cycle (J14-J28). B (Vrai) : C'est l'aspect caractéristique de la dentelle utérine. C (Vrai) : Les glandes sécrètent du glycogène pour nourrir un éventuel embryon. D (Vrai) : La progestérone est l'hormone clé de cette phase.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-23",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Ménopause Réponse Juste (RJ)",
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
    "explanation": "Réponse correcte : B Explication : La ménopause est la cessation définitive des cycles menstruels (et de la fonction ovarienne), survenant généralement autour de 50 ans. Elle est due à l'épuisement du capital folliculaire. A (Faux) : L'apparition des premières règles est la ménarchie. C (Faux) : La ménopause survient en moyenne vers 50 ans, pas 30 ans. D (Faux) : La ménopause s'accompagne d'une diminution des œstrogènes (et une augmentation relative des gonadotropines FSH/LH). E (Faux) : La ménopause est irréversible (le traitement hormonal substitutif ne restaure pas la fertilité).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-24",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Anomalies : Synthèse QCM Multiples (2-3 réponses)",
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
    "explanation": "Réponses correctes : A, B, C Explication : A (Vrai) : Spanioménorrhée = cycle long (> 35 jours). B (Vrai) : Polyménorrhée = cycle court (C (Vrai) : Dysménorrhée = douleurs pendant les règles. D (Faux) : L'hypoménorrhée correspond à des règles peu abondantes (E (Faux) : La métrorragie correspond à des hémorragies survenant en dehors des règles.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-25",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Objectifs de l'exploration Choix simple",
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
    "explanation": "Réponse correcte : A Explication : L'intérêt de l'étude de la physiologie du cycle menstruel, tel que souligné dans le cours, est de permettre de comprendre et d'explorer les anomalies du cycle (diagnostic, bilan étiologique, prise en charge). B (Faux) : La détermination du sexe fœtal relève de l'échographie ou du caryotype, pas de l'étude du cycle menstruel. C (Faux) : La prévention des infections génitales relève de l'hygiène et de la vaccination (HPV), pas de la physiologie du cycle. D (Faux) : Le traitement de la ménopause est une application thérapeutique, mais l'intérêt premier de l'étude du cycle est de comprendre les anomalies. E (Faux) : L'évaluation de la réserve ovarienne (AMH) n'est qu'un aspect parmi d'autres de l'exploration.",
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
    "questionText": "[Cas Clinique 1 : Consultation de Gynécologie (CHU Mustapha Pacha)]\nMme K., 24 ans, célibataire, consulte au CHU Mustapha Pacha pour des cycles irréguliers depuis 2 ans. Elle rapporte des cycles allant de 40 à 60 jours. Elle présente une obésité (IMC à 32) et de l'acné. L'examen clinique révèle un score de Ferriman-Gallwey à 12 (hirsutisme modéré). L'échographie pelvienne montre des ovaires de volume augmenté avec plus de 12 follicules antraux par ovaire, sans kyste organique.\n\nQuestion : Cas 1 - Diagnostic Choix simple",
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
    "explanation": "Réponse correcte : B Explication : Le tableau associe une spanioménorrhée, une hyperandrogénie clinique (acné, hirsutisme) et des ovaires polykystiques à l'échographie (critères de Rotterdam). C'est la présentation typique du SOPK. A (Faux) : L'insuffisance ovarienne prématurée se manifeste par une aménorrhée et une FSH élevée, pas par des cycles longs et des ovaires polykystiques. C (Faux) : L'hyperprolactinémie donne souvent une aménorrhée et une galactorrhée, sans hirsutisme marqué. D (Faux) : L'aménorrhée hypothalamique survient dans un contexte de stress, de perte de poids ou d'exercice intense, avec des ovaires de taille normale et sans hyperandrogénie. E (Faux) : Une tumeur sécrétante donnerait une virilisation rapide et sévère, avec des taux de testostérone très élevés, et non un tableau de SOPK.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-27",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique 2 : Urgences Gynécologiques (EPH Bab El Oued)]\nMme L., 16 ans, est amenée aux urgences par sa mère pour des douleurs pelviennes intenses survenant pendant les règles depuis 6 mois. Elle décrit des douleurs en coup de poignard, irradiant vers les lombes, qui la obligent à manquer les cours. Elle n'a jamais eu de rapport sexuel. L'examen clinique est normal en dehors d'une sensibilité pelvienne. L'échographie pelvienne est normale.\n\nQuestion : Cas 2 - Diagnostic Choix simple",
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
    "explanation": "Réponse correcte : B Explication : Le tableau associe des douleurs pelviennes rythmées par les règles, sans anomalie à l'examen clinique ni à l'échographie, chez une adolescente. C'est une dysménorrhée primaire (d'origine fonctionnelle, par hyperactivité utérine due aux prostaglandines). A (Faux) : L'endométriose est possible, mais il s'agit d'un diagnostic d'exclusion (souvent après échec du traitement symptomatique), et l'échographie est normale ici. C (Faux) : La salpingite donne de la fièvre, des leucorrhées et une douleur permanente, pas rythmée par les règles. D (Faux) : Le kyste hémorragique donne une douleur aiguë, souvent en milieu de cycle, et serait visible à l'échographie. E (Faux) : L'utérus bicorne peut donner des dysménorrhées, mais l'échographie serait anormale (ou nécessiterait une hystéroscopie).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-28",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique 3 : Consultation de Ménopause (CHU Oran)]\nMme B., 52 ans, consulte pour des métrorragies récidivantes depuis 2 mois. Elle est ménopausée depuis 3 ans et ne prend pas de traitement hormonal. L'examen clinique retrouve un utérus légèrement augmenté de volume. L'échographie pelvienne montre un épaississement de l'endomètre à 12 mm avec une image suspecte. La patiente est hypertendue et diabétique de type 2.\n\nQuestion : Cas 3 - Diagnostic Choix simple",
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
    "explanation": "Réponse correcte : A Explication : Chez une femme ménopausée, toute métrorragie doit faire suspecter un cancer de l'endomètre, surtout en présence de facteurs de risque (HTA, diabète, obésité). L'épaississement de l'endomètre à 12 mm est très suspect. B (Faux) : Le fibrome peut donner des saignements, mais il est généralement bénin et l'image échographique serait différente. C (Faux) : L'atrophie donne un endometre fin, pas épaissi à 12 mm. D (Faux) : Le polype bénin est possible, mais le cancer doit être éliminé en priorité. E (Faux) : L'hyperplasie est un diagnostic différentiel, mais le cancer est le plus redouté.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-29",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique 4 : Consultation de Procréation Médicalement Assistée (EPH Alger)]\nMme R., 29 ans, consulte pour une infertilité primaire de 2 ans. Elle a des cycles réguliers de 28 jours. L'examen clinique est normal. Le bilan hormonal de base est normal. Le couple est pris en charge en PMA. Le médecin décide d'explorer la phase lutéale.\n\nQuestion : Cas 4 - Exploration Réponse Juste (RJ)",
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
    "explanation": "Réponse correcte : B Explication : Le dosage de la progestérone au 21e jour (ou 7 jours après l'ovulation) permet d'évaluer la qualité de la phase lutéale. Un taux bas ( A (Faux) : La FSH au 3e jour évalue la réserve ovarienne. C (Faux) : L'œstradiol au 12e jour évalue la maturation folliculaire. D (Faux) : L'échographie au 5e jour évalue la vacuité utérine et le nombre de follicules antraux. E (Faux) : L'hystéroscopie évalue la cavité utérine (polypes, synéchies).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-cycle-menstruel-30",
    "courseId": "c-gyn-cycle-menstruel",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas Clinique 5 : Consultation de Médecine Générale (EPSP)]\nMlle S., 19 ans, consulte car elle n'a jamais eu ses règles. Elle présente un développement mammaire normal (stade Tanner 4) et une pilosité pubienne normale. L'examen clinique est sans particularité. L'échographie pelvienne montre un utérus de taille normale et des ovaires de taille normale. Le bilan hormonal montre une FSH et une LH normales, et un taux d'œstradiol normal.\n\nQuestion : Cas 5 - Diagnostic Choix simple",
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
    "explanation": "Réponse correcte : C Explication : La patiente a un développement pubertaire normal, un utérus et des ovaires normaux, et un bilan hormonal normal. Cela suggère une cause anatomique à l'écoulement des règles, comme une imperforation de l'hymen (ou un diaphragme vaginal). Les règles se produisent mais ne peuvent pas s'écouler. A (Faux) : L'insuffisance ovarienne prématurée donnerait une FSH élevée et un œstradiol bas. B (Faux) : Le syndrome de Turner donne une FSH élevée et un développement pubertaire absent ou incomplet. D (Faux) : Le syndrome de Kallmann donne une FSH et LH basses (hypogonadisme hypogonadotrophique). E (Faux) : L'agénésie utérine donnerait une absence d'utérus à l'échographie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-1",
    "courseId": "c-gyn-infections",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant la vaginose bactérienne à Gardnerella vaginalis, quelle est l'affirmation exacte ?",
    "options": [
      "Elle se caractérise par des leucorrhées mousseuses, verdâtres et aérées avec prurit intense.",
      "Le pH vaginal est acide, habituellement inférieur à 4,5.",
      "Le test au KOH 10% (sniff test) dégage une odeur caractéristique d'amines volatiles (poisson pourri).",
      "La présence de levures bourgeonnantes à l'examen direct affirme le diagnostic.",
      "Le traitement de première intention repose sur les macrolides par voie générale."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La vaginose bactérienne associe des pertes grisâtres fluides, un pH vaginal > 4,5, un sniff test positif aux amines et la présence de clue cells à l'état frais. Le traitement de référence est le Métronidazole.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-2",
    "courseId": "c-gyn-infections",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Quel est l'agent étiologique bactérien le plus fréquemment responsable de salpingite aiguë chez la femme jeune ?",
    "options": [
      "Candida albicans",
      "Chlamydia trachomatis",
      "Streptocoque du groupe B",
      "Trichomonas vaginalis",
      "Treponema pallidum"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "hlamydia trachomatis est le germe prédominant des infections génitales hautes chez la femme jeune, souvent insidieux et pourvoyeur d'infertilité tubaire secondaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-3",
    "courseId": "c-gyn-infections",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Quels sont les éléments cardinaux du trépied clinique évocateur d'une salpingite aiguë non compliquée ?",
    "options": [
      "Douleurs pelviennes bilatérales spontanées ou provoquées à la mobilisation utérine",
      "Fièvre variable, parfois modérée ou absente",
      "Leucorrhées purulentes ou métrorragies sales associées",
      "Masse pelvienne fixée de plus de 10 cm au toucher vaginal",
      "Aménorrhée secondaire de plus de 3 mois"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le trépied associe douleurs pelviennes, fièvre (inconstante) et pertes vaginales anormales purulentes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-4",
    "courseId": "c-gyn-infections",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Concernant le syndrome de Fitz-Hugh-Curtis, quelle est la proposition exacte ?",
    "options": [
      "Il s'agit d'une périhépatite caractérisée par des adhérences en cordes de violon entre la capsule hépatique et le diaphragme.",
      "Il est exclusivement provoqué par le virus Herpes simplex de type 2.",
      "La symptomatologie prédomine au niveau de la fosse iliaque gauche.",
      "Il nécessite obligatoirement une hépatectomie partielle d'urgence.",
      "Les transaminases hépatiques sont constamment augmentées à plus de 50 fois la normale."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Périhépatite secondaire à Chlamydia ou au gonocoque avec adhérences péritonéales en « cordes de violon » à la cœlioscopie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-5",
    "courseId": "c-gyn-infections",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Quelle antibiothérapie probabiliste de première intention est recommandée dans la salpingite aiguë non compliquée ?",
    "options": [
      "Amoxicilline seule per os pendant 5 jours",
      "Ceftriaxone IM (dose unique) + Doxycycline per os (14 jours) + Métronidazole per os (14 jours)",
      "Ciprofloxacine en monothérapie pendant 21 jours",
      "Gentamicine IV seule en cure courte de 48 heures",
      "Pénicilline G IV à forte dose pendant 10 jours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Trithérapie ciblant gonocoque (C3G), Chlamydia (cyclines 14j) et anaérobies (métronidazole 14j).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-6",
    "courseId": "c-gyn-infections",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant la trichomonase urogénitale à Trichomonas vaginalis, quelle est l'affirmation exacte ?",
    "options": [
      "Il s'agit d'une infection non sexuellement transmissible à transmission hydrique exclusive.",
      "Les leucorrhées sont typiquement blanches, épaisses et grumeleuses en lait caillé.",
      "Le col utérin peut présenter un aspect piqueté framboisé caractéristique (colpitis macularis).",
      "L'examen parasitologique direct entre lame et lamelle est constamment négatif.",
      "Le traitement du partenaire n'est pas nécessaire."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "IST à protozoaire flagellé mobile, leucorrhées verdâtres spumeuses, col framboisé. Métronidazole chez les 2 partenaires.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-7",
    "courseId": "c-gyn-infections",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Quelle séquelle majeure à long terme complique fréquemment les salpingites aiguës méconnues ou récidivantes ?",
    "options": [
      "Sténose de l'artère rénale",
      "Infertilité tubaire mécanique et sur-risque majeur de grossesse extra-utérine",
      "Cancer de l'endomètre",
      "Insuffisance ovarienne prématurée d'origine auto-immune",
      "Prolapsus génital de grade 3"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'altération de la lumière tubaire et des cils conduit à l'obstruction tubaire (hydrosalpinx, stérilité) et à la GEU.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-8",
    "courseId": "c-gyn-infections",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "La candidose vulvo-vaginale à Candida albicans se manifeste typiquement par :",
    "options": [
      "Des pertes fétides grises sans prurit",
      "Un prurit vulvaire féroce avec leucorrhées blanches grumeleuses en « lait caillé » et érythème vulvaire vif",
      "Un pH vaginal alcalin supérieur à 6",
      "Une fièvre supérieure à 39°C avec frissons",
      "Des ulcérations indurées indolores"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Prurit intense, pertes caillebotées blanches, pH vaginal normal ou acide (< 4,5), pseudo-hyphes à l'examen microscopique direct.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-9",
    "courseId": "c-gyn-infections",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Devant toute infection génitale basse ou haute sexuellement transmissible, quelle mesure doit être systématique ?",
    "options": [
      "L'abstention thérapeutique chez les partenaires asymptomatiques",
      "Le dépistage et traitement conjoint du ou des partenaires sexuels et le dépistage des autres IST (VIH, VHB, Syphilis)",
      "Une ovariectomie unilatérale de précaution",
      "La pose immédiate d'un dispositif intra-utérin pour drainer la cavité",
      "La réalisation d'un scanner thoraco-abdominal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Prise en charge du partenaire pour casser la chaîne de transmission et bilan sérologique complet des IST.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-10",
    "courseId": "c-gyn-infections",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Quelles sont les indications impératives d'hospitalisation d'une patiente pour infection génitale haute ?",
    "options": [
      "Suspicion d'abcès tubo-ovarien ou péritonite pelvienne",
      "Grossesse en cours associée",
      "Doute diagnostique avec une urgence chirurgicale (appendicite, torsion d'annexe)",
      "Forme hyperalgique ou intolérance aux traitements per os",
      "Toutes les propositions sus-citées sont exactes"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Toutes ces situations justifient une hospitalisation en service de gynécologie pour traitement parentéral et surveillance continue.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-11",
    "courseId": "c-gyn-infections",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Quel examen d'imagerie de première intention est indispensable pour éliminer un abcès tubo-ovarien ou un pyosalpinx ?",
    "options": [
      "Échographie pelvienne par voie endovaginale et sus-pubienne avec Doppler",
      "Hystérosalpingographie en phase aiguë fébrile",
      "Radiographie du bassin sans préparation",
      "Scintigraphie osseuse au technétium",
      "Urographie intraveineuse"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'échographie pelvienne endovaginale est l'examen clé. L'hystérosalpingographie est formellement contre-indiquée en phase aiguë fébrile.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-12",
    "courseId": "c-gyn-infections",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Concernant l'infection génitale à Neisseria gonorrhoeae chez la femme, quelle proposition est exacte ?",
    "options": [
      "Elle est constamment symptomatique avec douleurs fulgurantes dès les premières heures.",
      "Elle se traduit fréquemment par une cervicite mucopurulente avec col érythémateux et friable.",
      "La coloration de Gram montre des bacilles à Gram positif en chaînettes.",
      "Elle ne se dissémine jamais aux articulations ou à la peau.",
      "Le vaccin anti-gonococcique protège à 100% à vie."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Neisseria gonorrhoeae est un diplocoque Gram négatif en grains de café, provoquant une cervicite mucopurulente, asymptomatique chez 50% des femmes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-13",
    "courseId": "c-gyn-infections",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Quelle complication oculaire néonatale est prévenue par l'instillation systématique de collyre chez le nouveau-né à la naissance ?",
    "options": [
      "La cataracte congénitale rubéoleuse",
      "L'ophtalmie purulente néonatale à gonocoque et Chlamydia",
      "Le glaucome congénital héréditaire",
      "Le rétinoblastome bilatéral",
      "Le décollement de rétine spontané"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le collyre antibiotique prévient la conjonctivite purulente néonatale qui peut évoluer rapidement vers la cécité par perforation cornéenne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-14",
    "courseId": "c-gyn-infections",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Dans la vaginose bactérienne, quel test rapide réalisé en consultation permet d'objectiver l'odeur caractéristique d'amines ?",
    "options": [
      "Test au lugol (Schiller)",
      "Test à la potasse (KOH à 10%) ou Whiff test",
      "Test de Fern (cristallisation en feuille de fougère)",
      "Test au bleu de méthylène sur frottis",
      "Test à l'acide acétique 5%"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'addition d'une goutte de KOH 10% libère des polyamines volatiles (putrescine, cadavérique) produites par les bactéries anaérobies associées.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-15",
    "courseId": "c-gyn-infections",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Quel geste diagnostique et thérapeutique de référence permet de visualiser les trompes et de réaliser un prélèvement bactériologique direct en cas de doute clinique sur une salpingite ?",
    "options": [
      "La cœlioscopie (laparoscopie) abdominale",
      "La colonoscopie totale",
      "La cystoscopie rétrograde",
      "La culdocentèse à l'aveugle",
      "L'urographie rétrograde"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cœlioscopie est l'examen de référence : elle visualise l'œdème tubaire, les fausses membranes, draine d'éventuels abcès et confirme la bactériologie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-16",
    "courseId": "c-gyn-infections",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Chez une femme porteuse d'un dispositif intra-utérin (DIU) présentant une salpingite aiguë grave, quelle conduite immédiate est requise ?",
    "options": [
      "Laisser le DIU en place indéfiniment sans antibiothérapie",
      "Débuter l'antibiothérapie par voie intraveineuse et retirer le DIU après quelques heures sous couverture antibiotique",
      "Procéder à une hystérectomie totale immédiate",
      "Remplacer le DIU par un autre stérilet au cuivre dans la même séance",
      "Injecter du sérum physiologique intra-utérin sous pression"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le DIU doit être retiré sous couverture antibiotique (après initiation du traitement) pour supprimer le corps étranger infecté, et envoyé en culture bactériologique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-17",
    "courseId": "c-gyn-infections",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Quel germe anaérobie filamenteux à Gram positif est spécifiquement associé aux infections pelviennes chroniques sur stérilet au long cours ?",
    "options": [
      "Actinomyces israelii",
      "Pseudomonas aeruginosa",
      "Listeria monocytogenes",
      "Helicobacter pylori",
      "Vibrio cholerae"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "tinomyces israelii est classiquement retrouvé sur DIU maintenu de nombreuses années, pouvant donner des abcès pelviens pseudotumoraux avec grains jaunes soufrés.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-18",
    "courseId": "c-gyn-infections",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Quelle est la durée minimale recommandée de traitement par Doxycycline dans la salpingite aiguë non compliquée à Chlamydia trachomatis ?",
    "options": [
      "2 jours",
      "5 jours",
      "14 jours",
      "6 mois",
      "1 an"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "14 jours complets sont requis pour éradiquer Chlamydia et prévenir la rechute et les séquelles tubaires.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-19",
    "courseId": "c-gyn-infections",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Parmi les signes suivants, lequel plaide le plus en faveur d'un abcès du cul-de-sac de Douglas compliquant une pelvipéritonite ?",
    "options": [
      "Cul-de-sac de Douglas souple et indolore",
      "Bombement douloureux, rénitent et chaud du cul-de-sac postérieur au toucher vaginal (« cri du Douglas »)",
      "Disparition complète des contractions utérines",
      "Hypotension isolée sans aucune douleur",
      "Échographie pelvienne strictement normale sans aucun épanchement"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'abcès du Douglas donne un bombement très douloureux et rénitent accessible au toucher vaginal, justiciable d'un drainage chirurgical ou d'une ponction transvaginale sous échoguidage.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-20",
    "courseId": "c-gyn-infections",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant l'infection à Papillomavirus humain (HPV), quelle est l'affirmation exacte ?",
    "options": [
      "Les sérotypes 6 et 11 sont à haut risque oncogène pour le col utérin.",
      "Les sérotypes 16 et 18 sont responsables de plus de 70% des cancers invasifs du col de l'utérus.",
      "L'infection par le HPV est systématiquement définitive et ne guérit jamais spontanément.",
      "Le préservatif confère une protection absolue à 100% contre la transmission du HPV.",
      "Il n'existe aucun vaccin prophylactique disponible contre le HPV."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "HPV 16 et 18 sont les deux génotypes majeurs à haut risque oncogène (oncoprotéines E6 dégradant p53 et E7 inactivant pRb). 6 et 11 sont responsables des condylomes acuminés bénins.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-21",
    "courseId": "c-gyn-infections",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Quel test moléculaire hautement sensible est aujourd'hui recommandé en première intention pour le dépistage de Chlamydia trachomatis et Neisseria gonorrhoeae ?",
    "options": [
      "L'amplification des acides nucléiques (TAAN / PCR) sur premier jet d'urine ou prélèvement endocervical",
      "Le dosage des IgG sériques par ELISA",
      "La vitesse de sédimentation (VS)",
      "Le frottis cervico-vaginal conventionnel de Papanicolaou",
      "L'hémoculture sur gélose chocolat"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les TAAN (PCR) présentent une sensibilité supérieure à 95% et représentent le test de référence.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-22",
    "courseId": "c-gyn-infections",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Une bartholinite aiguë suppurée se présente typiquement comme :",
    "options": [
      "Une tuméfaction douloureuse, unilatérale, inflammatoire du tiers postérieur de la grande lèvre",
      "Une ulcération indolore du clitoris",
      "Une masse rétro-utérine rénitente",
      "Une adénopathie sus-claviculaire gauche",
      "Une brûlure urétrale sans aucune anomalie vulvaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La glande de Bartholin siège au tiers postérieur de la grande lèvre. L'obstruction de son canal entraîne une surinfection avec abcès hyperalgique nécessitant drainage ou marsupialisation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-23",
    "courseId": "c-gyn-infections",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Dans la vaginite à Trichomonas, quelle est la couleur typique des sécrétions vaginales ?",
    "options": [
      "Blanc épais cailleboté",
      "Jaune-verdâtre, fluide et spumeuse (mousseuse)",
      "Noirâtre goudronneuse",
      "Rouge vif hémorragique pure",
      "Incolore et visqueuse comme du blanc d'œuf"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pertes verdâtres abondantes, spumeuses et malodorantes caractéristiques de Trichomonas.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-24",
    "courseId": "c-gyn-infections",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Quel traitement minute (dose unique) est efficace dans la trichomonase urogénitale non compliquée ?",
    "options": [
      "Métronidazole 2 g per os en prise unique",
      "Pénicilline V per os pendant 30 jours",
      "Fluconazole 50 mg par jour pendant 2 mois",
      "Gentamicine 160 mg en IM quotidienne pendant 10 jours",
      "Aspirine 1 g par jour"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le Métronidazole 2g monodose (ou Tinidazole) traite efficacement Trichomonas vaginalis avec traitement simultané du partenaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-25",
    "courseId": "c-gyn-infections",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant la flore vaginale normale (flore de Döderlein), laquelle est exacte ?",
    "options": [
      "Elle est dominée par des staphylocoques dorés producteurs d'endotoxines.",
      "Elle est constituée de bacilles de Döderlein (Lactobacillus spp.) qui transforment le glycogène en acide lactique et maintiennent un pH acide protecteur (3,8 à 4,5).",
      "Elle est totalement absente chez la femme en période d'activité génitale.",
      "Son éradication par des douches vaginales quotidiennes est fortement recommandée.",
      "Elle est stimulée par la testostérone et inhibée par les œstrogènes."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les lactobacilles maintiennent l'acidité vaginale via la production d'acide lactique et d'H2O2, empêchant la prolifération des pathogènes opportunistes.",
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
    "questionText": "[Cas Clinique N°1 : Salpingite aiguë de la femme jeune]\nPatiente de 24 ans, nulligeste, consulte pour des douleurs pelviennes bilatérales avec fièvre à 38,5°C et leucorrhées jaunâtres depuis 4 jours. Au TV : mobilisation utérine douloureuse et empâtement annexiel bilatéral.\n\nQuestion : Question : Quel est le diagnostic le plus probable et quel bilan de première intention réaliser ?",
    "options": [
      "Salpingite aiguë non compliquée ; prélèvement bactériologique endocervical avec PCR Chlamydia/Gonocoque, NFS, CRP et échographie pelvienne.",
      "Grossesse extra-utérine rompue sans aucun besoin de prélèvement.",
      "Endométriose profonde sans rapport avec une infection.",
      "Appendicite rétro-cæcale isolée.",
      "Pyélonéphrite aiguë obstructive gauche."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Tableau d'infection génitale haute (salpingite) chez une femme jeune sexuellement active nécessitant bilan bactériologique et imagerie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-27",
    "courseId": "c-gyn-infections",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique N°2 : Périhépatite de Fitz-Hugh-Curtis]\nFemme de 26 ans traitée pour salpingite il y a 2 semaines, consulte pour des douleurs vives de l'hypochondre droit exacerbées par l'inspiration profonde. Échographie biliaire normale, bilan hépatique subnormal.\n\nQuestion : Question : Quelle complication devez-vous évoquer ?",
    "options": [
      "Colique hépatique lithiasique",
      "Syndrome de Fitz-Hugh-Curtis (périhépatite à Chlamydia trachomatis)",
      "Infarctus du myocarde inférieur",
      "Ulcère gastrique perforé",
      "Kyste hydatique rompu"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "hérences péri-hépatiques en cordes de violon post-chlamydienne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-28",
    "courseId": "c-gyn-infections",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique N°3 : Vaginose bactérienne récidivante]\nPatiente de 30 ans gênée par des pertes vaginales grisâtres très fluides et une odeur de poisson pourri accentuée après les rapports sexuels, sans démangeaison ni rougeur. Sniff test positif au KOH.\n\nQuestion : Question : Quel diagnostic posez-vous et quel est le traitement adapté ?",
    "options": [
      "Vaginose bactérienne ; Métronidazole per os ou en ovules pendant 7 jours.",
      "Candidose aiguë ; ovule d'éconazole dose unique.",
      "Syphilis secondaire ; Pénicilline G retard.",
      "Herpès génital ; Aciclovir pendant 10 jours.",
      "Cancer du vagin ; radiothérapie externe."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "ritères d'Amsel vérifiés pour la vaginose bactérienne. Traitement de choix : Métronidazole.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-29",
    "courseId": "c-gyn-infections",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique N°4 : Abcès tubo-ovarien compliquant une salpingite]\nFemme de 32 ans hospitalisée pour pelvipéritonite fébrile à 39,2°C avec masse latéro-utérine droite de 6 cm fluctuante et très douloureuse à l'échographie Doppler.\n\nQuestion : Question : Quelle est la stratégie thérapeutique immédiate ?",
    "options": [
      "Antibiothérapie intraveineuse triple à large spectre (C3G + Métronidazole + Gentamicine) et drainage écho-guidé ou cœlioscopique en l'absence d'amélioration rapide à 48h.",
      "Traitement ambulatoire par comprimés oraux d'ibuprofène.",
      "Hystérectomie élargie d'emblée avec curage ganglionnaire lombo-aortique.",
      "Surveillance simple sans antibiotiques pendant 15 jours.",
      "Radiothérapie pelvienne anti-inflammatoire."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'abcès tubo-ovarien est une urgence médico-chirurgicale associant antibiothérapie parentérale et drainage.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-infections-30",
    "courseId": "c-gyn-infections",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas Clinique N°5 : Bartholinite aiguë abcédée]\nFemme de 22 ans présentant depuis 48 heures une tuméfaction ovalaire rouge, chaude et insomniante de la grande lèvre gauche, mesurant 4 cm, gênant la marche et la position assise.\n\nQuestion : Question : Quel geste thérapeutique permet un soulagement immédiat de la patiente ?",
    "options": [
      "Incision-drainage et marsupialisation de la glande de Bartholin sous anesthésie locale ou générale, associée à une antibiothérapie adaptée.",
      "Ponction biopsie rénale.",
      "Application exclusive de compresses froides pendant un mois.",
      "Vulvectomie superficielle radicale.",
      "Chimiothérapie systémique."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'évacuation de la collection purulente par incision et méchage ou marsupialisation apporte une antalgie spectaculaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-1",
    "courseId": "c-gyn-contraception",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant le mécanisme d'action principal de la contraception œstroprogestative combinée, quelle est la proposition exacte ?",
    "options": [
      "Inhibition de l'ovulation par blocage du pic de LH et de FSH au niveau hypothalamo-hypophysaire",
      "Lésion cytotoxique directe sur les spermatozoïdes dans le vagin",
      "Destruction chirurgicale irréversible des ovaires",
      "Augmentation massive de la production de FSH hypophysaire",
      "Accélération du transit tubaire empêchant la fécondation"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'effet antigonadotrope rétrocontrôle négatif de l'œstrogène et du progestatif bloque le pic ovulatoire de gonadotrophines (LH et FSH), associé à une atrophie endométriale et à l'imperméabilité de la glaire cervicale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-2",
    "courseId": "c-gyn-contraception",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les situations cliniques suivantes, laquelle constitue une contre-indication absolue (Catégorie 4 OMS) à la contraception œstroprogestative ?",
    "options": [
      "Antécédent personnel de thrombose veineuse profonde ou d'embolie pulmonaire",
      "Dysménorrhée primaire chez une adolescente",
      "Acné rétentionnelle modérée",
      "Kyste fonctionnel ovarien folliculaire",
      "Antécédent familial éloigné de diabète de type 2"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Tout antécédent thromboembolique veineux ou artériel, les thrombophilies constitutionnelles et le tabagisme > 35 ans sont des contre-indications absolues aux œstroprogestatifs.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-3",
    "courseId": "c-gyn-contraception",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Chez une femme de 38 ans qui fume 15 cigarettes par jour, quelle méthode contraceptive est formellement contre-indiquée ?",
    "options": [
      "La pilule œstroprogestative combinée (minidosée)",
      "Le dispositif intra-utérin au cuivre",
      "L'implant progestatif sous-cutané à l'étonogestrel",
      "Les microprogestatifs oraux au lévonorgestrel ou désogestrel",
      "Le préservatif masculin"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le tabagisme associé à l'âge supérieur à 35 ans majore dramatiquement le risque d'accidents vasculaires artériels et thromboemboliques veineux, contre-indiquant les œstrogènes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-4",
    "courseId": "c-gyn-contraception",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Quel est le mécanisme d'action contraceptif prédominant du dispositif intra-utérin (DIU) au cuivre ?",
    "options": [
      "Blocage complet de l'ovulation par suppression de l'axe hypothalamique",
      "Réaction inflammatoire aseptique de l'endomètre avec effet spermicide et cytotoxique des ions cuivre",
      "Fermeture chirurgicale des trompes de Fallope",
      "Destruction enzymatique des corps jaunes ovariens",
      "Induction d'une aménorrhée définitive"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le DIU au cuivre induit une réaction à corps étranger inflammatoire aseptique avec libération d'ions cuivre spermicides, empêchant la fécondation et l'implantation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-5",
    "courseId": "c-gyn-contraception",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Quelle contraception d'urgence non hormonale peut être posée jusqu'à 5 jours après un rapport sexuel non protégé ?",
    "options": [
      "La pose d'un dispositif intra-utérin au cuivre",
      "L'injection d'un bolus de progestérone retard",
      "La pose d'un pessaire vaginal",
      "L'application d'un patch œstrogénique",
      "L'hystéroscopie diagnostique immédiate"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le DIU au cuivre posé dans les 5 jours (120 heures) est la méthode de contraception d'urgence la plus efficace (> 99%), utilisable ensuite comme contraception régulière.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-6",
    "courseId": "c-gyn-contraception",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant la contraception d'urgence hormonale par Lévonorgestrel (1,5 mg), quelle est la fenêtre temporelle optimale de prise ?",
    "options": [
      "Le plus tôt possible, idéalement dans les 12 à 72 heures suivant le rapport",
      "Strictement entre le 10ème et le 14ème jour après le rapport",
      "Uniquement pendant la période menstruelle",
      "À la 6ème semaine après le retard de règles",
      "Exclusivement avant le rapport sexuel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le lévonorgestrel doit être pris le plus tôt possible, efficace jusqu'à 72 heures (3 jours). L'ulipristal acétate est efficace jusqu'à 120 heures (5 jours).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-7",
    "courseId": "c-gyn-contraception",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Quel est l'effet secondaire métabolique ou vasculaire le plus redouté de la composante œstrogénique (éthinylestradiol) ?",
    "options": [
      "L'hyperglycémie néonatale immédiate",
      "L'activation de la coagulation avec élévation du risque de maladie thrombo-embolique veineuse et artérielle",
      "La survenue systématique d'une ostéoporose fracturaire",
      "L'insuffisance rénale terminale anurique",
      "La pancréatite aiguë auto-immune"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'éthinylestradiol stimule la synthèse hépatique des facteurs de coagulation (fibrinogène, facteurs VII, VIII, X) et diminue l'antithrombine III et la protéine S.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-8",
    "courseId": "c-gyn-contraception",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant l'implant contraceptif sous-cutané à l'étonogestrel, laquelle est exacte ?",
    "options": [
      "Il assure une contraception très efficace pendant une durée de 3 ans.",
      "Il doit être inséré chirurgicalement dans le péritoine pelvien.",
      "Il contient une forte dose d'œstrogènes de synthèse.",
      "Il expose à un risque majeur de thrombose veineuse profonde chez la femme jeune.",
      "Il ne peut pas être retiré avant l'expiration des 3 ans."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'implant sous-cutané progestatif (face interne du bras non dominant) a une efficacité de 99,9% pendant 3 ans, avec blocage ovulatoire et atrophie endométriale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-9",
    "courseId": "c-gyn-contraception",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "En cas d'oubli d'un comprimé d'œstroprogestatif combiné minidosé de plus de 12 heures, quelle est la règle d'or ?",
    "options": [
      "Prendre immédiatement le comprimé oublié, continuer la plaquette à l'heure habituelle et utiliser des préservatifs pendant 7 jours consécutifs",
      "Arrêter définitivement la contraception pendant 6 mois",
      "Prendre 5 comprimés en une seule prise le soir même",
      "Réaliser un avortement thérapeutique d'urgence",
      "Doubler la dose quotidienne pendant tout le reste du cycle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Règle des 12h : prendre le comprimé oublié dès le constat, poursuivre la plaquette normalement et adopter une contraception mécanique d'appoint pendant 7 jours.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-10",
    "courseId": "c-gyn-contraception",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Quel bénéfice non contraceptif prouvé est associé à l'utilisation prolongée des contraceptifs œstroprogestatifs ?",
    "options": [
      "Réduction significative du risque de cancer de l'ovaire et de cancer de l'endomètre",
      "Disparition complète des céphalées et migraines avec aura",
      "Prévention absolue du cancer du sein",
      "Protection contre la transmission du VIH",
      "Inversion des prolapsus génitaux"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La prise de pilule combinée réduit de 50% le risque de cancer de l'ovaire et de l'endomètre, effet protecteur persistant des années après l'arrêt.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-11",
    "courseId": "c-gyn-contraception",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Chez une patiente présentant des migraines AVEC aura ophtalmique, la prescription d'un œstroprogestatif est :",
    "options": [
      "Contre-indiquée de façon absolue (Catégorie 4 OMS) en raison du sur-risque majeur d'AVC ischémique",
      "Fortement recommandée pour guérir l'aura",
      "Autorisée uniquement à forte dose d'œstrogène",
      "Indiquée en cure continue pendant 10 ans",
      "Sans aucune incidence sur le risque neurologique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les migraines avec aura constituent une contre-indication absolue aux œstroprogestatifs en raison de l'augmentation marquée du risque d'accident vasculaire cérébral.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-12",
    "courseId": "c-gyn-contraception",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Concernant le DIU au lévonorgestrel (ex: Mirena), quel effet clinique est très fréquemment observé après quelques mois d'utilisation ?",
    "options": [
      "Une diminution drastique du flux menstruel voire une aménorrhée de confort bénigne",
      "Des hémorragies cataclysmiques permanentes",
      "Une augmentation de volume des ovaires avec virilisation",
      "Une perforation spontanée dans 90% des cas",
      "Une perte de cheveux totale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'effet progestatif local atrophie fortement l'endomètre, entraînant oligo-ménorrhée ou aménorrhée chez plus de 50% des utilisatrices, très appréciée et protectrice contre l'anémie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-13",
    "courseId": "c-gyn-contraception",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Quelle méthode contraceptive est particulièrement indiquée chez la femme allaitante dès la 3ème ou 4ème semaine du post-partum ?",
    "options": [
      "Les microprogestatifs oraux (ex: désogestrel) ou l'implant progestatif",
      "La pilule œstroprogestative normodosée à 50 µg",
      "L'abstinence périodique stricte basée sur la température",
      "La radiothérapie ovarienne transitoire",
      "Le clomifène à visée contraceptive"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les microprogestatifs ne passent pas significativement dans le lait maternel et n'altèrent ni la quantité ni la qualité de la lactation, contrairement aux œstrogènes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-14",
    "courseId": "c-gyn-contraception",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Parmi les médicaments suivants, lequel est un inducteur enzymatique hépatique puissant capable de diminuer l'efficacité des pilules contraceptives ?",
    "options": [
      "La Rifampicine (et certains antiépileptiques : carbamazépine, phénytoïne)",
      "Le paracétamol à dose thérapeutique",
      "La vitamine C",
      "L'aspirine à 100 mg",
      "Le sérum physiologique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les inducteurs du cytochrome P450 (rifampicine, phénobarbital, carbamazépine, millepertuis) accélèrent le catabolisme des stéroïdes contraceptifs et provoquent des échecs de contraception.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-15",
    "courseId": "c-gyn-contraception",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Avant la mise en place d'un dispositif intra-utérin (DIU), quel geste doit être réalisé systématiquement ?",
    "options": [
      "Éliminer formellement une grossesse en cours (bêta-hCG ou date des règles) et dépister une infection cervico-vaginale active",
      "Réaliser un scanner pelvien injecté",
      "Effectuer un curage ganglionnaire iliaque",
      "Pratiquer une laparotomie exploratrice",
      "Administrer une héparinothérapie à dose curative"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Éliminer une grossesse et toute infection génitale active sont les deux prérequis absolus avant la pose d'un DIU pour éviter la dissémination endo-utérine.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-16",
    "courseId": "c-gyn-contraception",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Quel est l'indice international utilisé pour évaluer l'efficacité statistique d'une méthode contraceptive ?",
    "options": [
      "L'indice de Pearl (nombre de grossesses pour 100 années-femmes)",
      "L'indice de Glasgow",
      "Le score d'Apgar",
      "L'index de Manning",
      "L'indice de Bishop"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'indice de Pearl exprime le taux d'échec théorique et pratique d'une méthode contraceptive pour 100 femmes l'utilisant pendant 1 an.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-17",
    "courseId": "c-gyn-contraception",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Concernant la contraception définitive masculine (vasectomie), quelle affirmation est exacte ?",
    "options": [
      "Elle consiste en la section et ligature bilatérale des canaux déférents sous anesthésie locale.",
      "Elle provoque une impuissance érectile immédiate et définitive.",
      "Elle arrête instantanément la spermatogenèse intra-testiculaire.",
      "Le sperme devient azoosperme dès la première heure post-opératoire.",
      "Elle protège à 100% contre la transmission du VIH et de la syphilis."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La vasectomie interrompt les canaux déférents. L'azoospermie n'est effective qu'après 3 mois (et une vingtaine d'éjaculations), contrôlée par un spermogramme.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-18",
    "courseId": "c-gyn-contraception",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Concernant la ligature tubaire chez la femme, quelle est la règle légale et médicale ?",
    "options": [
      "Elle nécessite une information claire, un délai de réflexion obligatoire de 4 mois et un consentement écrit libre et éclairé.",
      "Elle peut être imposée par le conjoint sans l'accord de la patiente.",
      "Elle est réalisable dès l'âge de 14 ans sans autorisation.",
      "Elle nécessite l'accord obligatoire d'un comité d'éthique hospitalier.",
      "Elle entraîne systématiquement une ménopause précoce chirurgicale."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Méthode de stérilisation à visée contraceptive encadrée par la loi avec délai de réflexion de 4 mois et consentement écrit signé.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-19",
    "courseId": "c-gyn-contraception",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Quelle méthode mécanique reste la SEULE capable d'assurer simultanément la contraception et la protection contre les IST ?",
    "options": [
      "Le préservatif masculin (ou féminin)",
      "Le stérilet au cuivre",
      "L'implant sous-cutané",
      "Le patch hebdomadaire",
      "L'anneau vaginal œstroprogestatif"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le préservatif est la seule barrière physique réduisant la transmission des infections sexuellement transmissibles (VIH, hépatite B, gonococcie, Chlamydia).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-20",
    "courseId": "c-gyn-contraception",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Parmi les affirmations suivantes sur la contraception du post-partum immédiat, laquelle est FAUSSE ?",
    "options": [
      "La pilule œstroprogestative peut être débutée dès le premier jour suivant l'accouchement chez la femme qui allaite.",
      "L'allaitement maternel exclusif (méthode MAMA) confère une protection contraceptive relative jusqu'à 6 mois si aménorrhée persistante.",
      "Un microprogestatif peut être débuté dès J21-J28 du post-partum.",
      "La pose d'un DIU peut être réalisée à la visite post-natale des 6-8 semaines.",
      "Le risque thrombo-embolique est maximal dans les premières semaines du post-partum."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La pilule combinée est formellement contre-indiquée dans les 3 à 6 premières semaines du post-partum en raison du pic majeur de risque thromboembolique veineux et de l'inhibition de la lactation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-21",
    "courseId": "c-gyn-contraception",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Concernant l'anneau vaginal contraceptif (étonogestrel / éthinylestradiol), quelle est sa modalité d'utilisation ?",
    "options": [
      "Laissé en place pendant 3 semaines consécutives, puis retiré pendant 1 semaine pour provoquer l'hémorragie de privation",
      "Changé chaque matin au réveil",
      "Placé dans le canal cervical par un gynécologue chaque mois",
      "Conservé pendant 5 années consécutives sans interruption",
      "Exclusivement réservé aux femmes ménopausées"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'anneau vaginal diffuse des hormones de façon constante pendant 21 jours, suivi d'une semaine d'arrêt.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-22",
    "courseId": "c-gyn-contraception",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Dans quel délai un dispositif intra-utérin déplacé ou dont les fils ne sont plus visibles doit-il être investigué ?",
    "options": [
      "Par échographie pelvienne rapide pour localiser le DIU (intra-utérin, intramural ou expulsé dans le péritoine)",
      "Aucune exploration n'est nécessaire si la patiente ne se plaint de rien",
      "Par laparotomie médiane exploratrice d'emblée sans imagerie",
      "Par scintigraphie thyroïdienne",
      "Par mise sous plâtre du membre inférieur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La disparition des fils au spéculum impose l'échographie endovaginale (ou radiographie de l'abdomen sans préparation en cas de suspicion de perforation péritonéale).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-23",
    "courseId": "c-gyn-contraception",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "La présence d'un antécédent de cancer du sein hormonodépendant chez une patiente :",
    "options": [
      "Contre-indique formellement toute contraception hormonale, qu'elle soit œstroprogestative ou progestative pure (Catégorie 4 OMS)",
      "Nécessite une augmentation des doses d'œstrogène",
      "Indique la pose d'un implant progestatif à forte dose",
      "Est sans importance vis-à-vis des récepteurs hormonaux",
      "Autorise la prise de pilules combinées dès la rémission"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les tumeurs mammaires hormonodépendantes contre-indiquent toute hormonothérapie stéroïdienne. Le DIU au cuivre ou les barrières mécaniques sont alors indiqués.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-24",
    "courseId": "c-gyn-contraception",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Concernant la contraception chez l'adolescente, quelle est la priorité clinique ?",
    "options": [
      "Proposer une méthode efficace, accessible, confidentielle et promouvoir la double protection (contraception + préservatif)",
      "Exiger obligatoirement la présence des deux parents lors de la délivrance",
      "Refuser toute contraception avant 18 ans révolus",
      "Imposer la ligature tubaire précoce",
      "Interdire l'usage du préservatif"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La double protection prévient à la fois les grossesses non prévues et les IST, avec garantie légale du secret et de la gratuité/confidentialité.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-25",
    "courseId": "c-gyn-contraception",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Quel bilan biologique minimal préalable est recommandé avant la prescription d'une première pilule œstroprogestative chez une patiente sans antécédents ?",
    "options": [
      "Glycémie à jeun et bilan lipidique (cholestérol total, triglycérides), associé à la mesure rigoureuse de la pression artérielle",
      "Bilan de thrombophilie génétique complet avec recherche de mutation facteur V de Leiden chez toutes les patientes",
      "IRM cérébrale et scanners thoraciques annuels",
      "Ponction lombaire et myélogramme",
      "Aucun interrogatoire ni mesure de la tension artérielle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Recherche des facteurs de risque à l'interrogatoire, mesure de la TA et bilan lipidique/glycémique à 3-6 mois. Le bilan de thrombophilie n'est indiqué qu'en cas d'antécédents personnels ou familiaux au 1er degré de thrombose inexpliquée ou précoce.",
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
    "questionText": "[Cas Clinique N°1 : Prescription contraceptive chez une fumeuse de 36 ans]\nMme N., 36 ans, consulte pour renouveler sa contraception. Elle fume 1 paquet de cigarettes par jour depuis 15 ans. Sa tension artérielle est de 125/80 mmHg. Elle demande une pilule combinée.\n\nQuestion : Question : Quelle est votre décision médicale argumentée ?",
    "options": [
      "Contre-indication absolue à la pilule œstroprogestative (tabac > 35 ans = risque thromboembolique artériel et veineux majeur) ; orienter vers un DIU (cuivre ou lévonorgestrel) ou un microprogestatif.",
      "Prescription d'une pilule combinée normodosée à 50 µg d'œstrogène.",
      "Autorisation de la pilule à condition d'associer de l'aspirine à forte dose.",
      "Ligature tubaire obligatoire immédiate sans son consentement.",
      "Abstention contraceptive totale."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'association âge > 35 ans et tabac est une contre-indication de catégorie 4 de l'OMS aux œstroprogestatifs.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-27",
    "courseId": "c-gyn-contraception",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique N°2 : Oubli de pilule au-delà de 12 heures]\nJeune femme de 21 ans sous œstroprogestatif minidosé (21 jours). Elle constate à 20h qu'elle a oublié le comprimé de la veille au soir (oubli de plus de 24 heures en première semaine de plaquette). Un rapport non protégé a eu lieu la veille.\n\nQuestion : Question : Quelle conduite à tenir immédiate recommandez-vous ?",
    "options": [
      "Prendre immédiatement le comprimé oublié, prendre celui du jour à l'heure normale, prendre une contraception d'urgence hormonale sans délai et utiliser des préservatifs pendant 7 jours.",
      "Arrêter la plaquette et attendre les prochaines règles dans un mois.",
      "Prendre 10 comprimés en une seule prise.",
      "Effectuer une hystérectomie de sécurité.",
      "Ne rien faire car un oubli en première semaine est sans danger."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'oubli en semaine 1 est le plus à risque car il prolonge l'intervalle sans hormones. La contraception d'urgence s'impose vu le rapport récent.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-28",
    "courseId": "c-gyn-contraception",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique N°3 : Disparition des fils de stérilet]\nPatiente de 29 ans porteuse d'un stérilet au cuivre depuis 2 ans. Lors de l'examen de routine au spéculum, le médecin ne retrouve pas les fils de traction au niveau de l'orifice externe du col.\n\nQuestion : Question : Quel examen complémentaire demandez-vous en première intention ?",
    "options": [
      "Échographie pelvienne par voie endovaginale pour visualiser l'échogénicité du DIU dans la cavité endométriale ou rechercher une expulsion/perforation.",
      "Scintigraphie myocardique au thallium.",
      "Biopsie du col utérin aux 4 quadrants.",
      "Laparotomie médiane d'urgence au bloc.",
      "Cœlioscopie d'emblée sans imagerie préalable."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'échographie pelvienne confirme immédiatement si le stérilet est bien en place, s'il a migré dans le myomètre ou s'il a été expulsé.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-29",
    "courseId": "c-gyn-contraception",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique N°4 : Désir de contraception d'urgence après 4 jours]\nÉtudiante de 22 ans consulte 90 heures (près de 4 jours) après un rapport sexuel accidentellement non protégé en milieu de cycle.\n\nQuestion : Question : Quelle option contraceptive d'urgence est la plus efficace à ce stade ?",
    "options": [
      "La pose d'un DIU au cuivre (efficace jusqu'à 120 heures) ou la prise d'Ulipristal acétate (EllaOne, efficace jusqu'à 5 jours).",
      "Le lévonorgestrel classique qui reste efficace jusqu'à 10 jours.",
      "L'injection d'ocytocine en intramusculaire.",
      "La prise de 4 comprimés de paracétamol.",
      "Il n'existe plus aucune solution après 24 heures."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le DIU au cuivre est efficace jusqu'à 120h (et au-delà de 99%), tout comme l'ulipristal acétate jusqu'à 5 jours. Le lévonorgestrel est inefficace au-delà de 72h.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-contraception-30",
    "courseId": "c-gyn-contraception",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas Clinique N°5 : Antécédent de thrombophlébite et choix contraceptif]\nFemme de 31 ans avec antécédent documenté d'embolie pulmonaire post-fracture du fémur il y a 2 ans, porteuse d'une mutation hétérozygote du facteur V de Leiden. Elle souhaite une méthode contraceptive hautement fiable et de longue durée.\n\nQuestion : Question : Quelle méthode est la plus adaptée et sécuritaire ?",
    "options": [
      "Dispositif intra-utérin au cuivre (aucun impact hémostatique) ou DIU au Lévonorgestrel (progestatif local sans augmentation du risque thromboembolique).",
      "Pilule œstroprogestative de 3ème génération.",
      "Anneau vaginal combiné.",
      "Patch contraceptif transdermique œstroprogestatif.",
      "Pilule séquentielle normodosée."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Toute contraception contenant des œstrogènes est formellement contre-indiquée. Le DIU au cuivre est la méthode de choix de première intention sans risque thrombotique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  }
];
