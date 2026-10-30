import { Question } from '../../types/medical';

export const OBSTETRICS_QUESTIONS_PART1: Question[] = [
  {
    "id": "q-c-gyn-grossesse-normale-1",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant l'aménorrhée secondaire comme signe de grossesse, laquelle est exacte ?",
    "options": [
      "Elle est évocatrice même si la disparition des règles est progressive et incomplète.",
      "Elle est considérée comme le signe le plus évocateur de grossesse à condition que la disparition des règles soit brusque et complète.",
      "Elle peut être affirmée comme signe de grossesse chez une femme allaitante.",
      "Elle est calculée à partir de la date de conception présumée.",
      "Elle est définie par une absence de règles depuis plus de 6 mois."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Mécanisme clé : L'aménorrhée secondaire n'est un signe évocateur de grossesse que si elle survient brusquement et complètement chez une femme en période d'activité génitale, régulièrement réglée et en l'absence d'allaitement. La date de référence est la DDR (date des dernières règles), et non la date de conception présumée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-2",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les signes sympathiques de la grossesse, quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "Ils sont constants et spécifiques de la grossesse.",
      "Ils résultent de l'imprégnation progestéronique.",
      "La sialorrhée et la constipation en font partie.",
      "L'émotivité et la somnolence en font partie.",
      "Ils sont d'apparition tardive au 2e trimestre."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "Mécanisme clé : Les signes sympathiques sont la conséquence directe de l'imprégnation progestéronique. Ils sont inconstants, variables et non spécifiques — ils ne permettent donc jamais à eux seuls de poser le diagnostic de grossesse. Ils regroupent : troubles digestifs (nausées, vomissements, sialorrhée, constipation, pyrosis), troubles nerveux (émotivité, irritabilité, somnolence, fatigue), gonflement général et tension mammaire, ainsi que la pollakiurie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-3",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Quelle est la caractéristique de la courbe ménothermique permettant d'évoquer une grossesse ?",
    "options": [
      "Un nadir thermique suivi d'un plateau de moins de 10 jours.",
      "Un plateau thermique prolongé supérieur à 16 jours.",
      "Une hyperthermie permanente dès le 1er jour du cycle.",
      "Une courbe en dents de scie sans décalage thermique.",
      "Un décalage thermique survenant à la fin du plateau."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Mécanisme clé : La courbe ménothermique est un moyen très précis de datation mais contraignant (température au réveil pendant plusieurs jours). Le jour de l'ovulation correspond au nadir, juste avant le décalage thermique, suivi d'un plateau thermique prolongé > 16 jours — ce plateau prolongé évoque la grossesse (maintien du corps jaune par l'hCG).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-4",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Concernant les modifications de l'utérus gravide, quelle proposition est fausse ?",
    "options": [
      "Le col devient mou comme la lèvre.",
      "À 6 SA, l'utérus atteint la taille d'une mandarine.",
      "À 16 SA, le fond utérin est à mi-chemin entre la symphyse pubienne et l'ombilic.",
      "Le signe de Noble correspond au ramollissement du corps utérin.",
      "À 20 SA, le fond utérin atteint l'ombilic."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Piège classique : Le signe de Noble correspond à la modification de forme de l'utérus gravide : le doigt qui suit le cul-de-sac latéral, au lieu de s'enfoncer librement, bute contre le pourtour évasé de l'utérus. Le ramollissement du corps utérin avec contact des doigts vaginaux et abdominaux en avant de l'isthme correspond au signe de Hégar. Confondre les deux est l'erreur docimologique la plus fréquente.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-5",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Concernant l'hormone chorionique gonadotrope (hCG), quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "Elle est sécrétée par le syncytiotrophoblaste dès le 9e jour après la fécondation.",
      "Sa sous-unité alpha est spécifique et dosée seule.",
      "Elle maintient l'activité du corps jaune dès le 10e jour de grossesse.",
      "Son taux double tous les 2 jours jusqu'à la 9e SA.",
      "Sa production maximale se situe à la 20e SA."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "Mécanisme clé : L'hCG est sécrétée par le syncytiotrophoblaste à partir du 9e jour après la fécondation. Elle joue un rôle lutéotrophique : elle maintient le corps jaune dès le 10e jour en relayant la LH hypophysaire, ce qui assure la sécrétion d'œstrogènes et de progestérone jusqu'à la 7e SA, avant le relais placentaire. Sa cinétique : doublement tous les 2 jours jusqu'à la 9e SA, pic à la 9e SA, puis décroissance irrégulière jusqu'au terme.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-6",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'échographie du 1er trimestre sont exactes, SAUF :",
    "options": [
      "La voie vaginale permet un diagnostic plus précoce que la voie sus-pubienne.",
      "Le sac ovulaire intra-utérin est visible dès 5–6 SA.",
      "L'activité cardiaque embryonnaire est visible dès 6–7 SA.",
      "En l'absence de signes d'appel, elle doit être réalisée entre 11 et 13+6 SA.",
      "La clarté nucale est considérée normale si elle est supérieure à 3 mm."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Piège majeur : La clarté nucale est considérée normale si < 3 mm. Une valeur > 3 mm constitue un signe d'appel pour une anomalie chromosomique (trisomies 21, 13, 18) et impose une exploration complémentaire. L'inversion du signe de l'inégalité est une erreur classique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-7",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Parmi les examens biologiques du 1er trimestre, quelle proposition est exacte ?",
    "options": [
      "La glycémie à jeun est obligatoire chez toutes les femmes enceintes.",
      "La sérologie de la toxoplasmose doit être refaite tous les mois jusqu'au terme si elle est négative.",
      "Le test de Coombs indirect est obligatoire chez toutes les femmes.",
      "L'ECBU est un examen obligatoire du 1er trimestre.",
      "La NFS fait partie du bilan obligatoire."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Règle clé : La sérologie de la toxoplasmose fait partie du bilan obligatoire du 1er trimestre. Si elle est négative (absence d'immunité), elle doit être refaite tous les mois jusqu'au terme afin de dépister une séroconversion.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-8",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Parmi les antécédents suivants, lesquels font craindre une grossesse à haut risque ? (2 à 3 réponses exactes)",
    "options": [
      "Antécédent d'éclampsie lors d'une grossesse antérieure.",
      "Antécédent de mort fœtale in utero.",
      "Prise de médicaments tératogènes.",
      "Antécédent de contraception orale.",
      "Ménarche à 13 ans."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Logique : L'interrogatoire du 1er trimestre recherche des antécédents faisant craindre une grossesse à haut risque, répartis en 4 catégories : physiologiques, pathologiques médicaux/chirurgicaux, familiaux (maladies génétiques) et obstétricaux. L'éclampsie et la mort fœtale in utero appartiennent aux antécédents obstétricaux ; la prise de tératogènes aux antécédents pathologiques.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-9",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant la mesure de la hauteur utérine, quelle proposition est exacte ?",
    "options": [
      "Entre 4 et 7 mois, on multiplie le nombre de mois par 3.",
      "Entre 4 et 7 mois, on multiplie le nombre de mois par 4.",
      "Au 8e et 9e mois, on multiplie le terme en mois par 4 et on ajoute 2 cm.",
      "La hauteur utérine n'a aucune valeur dans la surveillance de la grossesse.",
      "Elle est mesurée du pubis à l'appendice xiphoïde."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Formule clé : Entre 4 et 7 mois, hauteur utérine = nombre de mois × 4. Au 8e et 9e mois, on utilise : (terme en mois × 4) − 2 cm. Cette mesure évalue la croissance fœtale et doit être reportée sur une courbe.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-10",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Concernant les mouvements actifs fœtaux (MAF), quelle proposition est fausse ?",
    "options": [
      "Ils sont perçus chez la primigeste vers 18–20 SA.",
      "Ils sont perçus chez la multigeste vers 16–18 SA.",
      "Leur perception constitue un élément important de la surveillance du 2e trimestre.",
      "Leur diminution doit faire suspecter une souffrance fœtale.",
      "Ils sont perçus dès 10 SA chez la primigeste."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Repères cliniques : Les MAF sont perçus chez la primigeste vers 18–20 SA et chez la multigeste vers 16–18 SA. Leur perception est un élément rassurant de vitalité fœtale ; leur diminution ou disparition doit faire craindre une souffrance fœtale et imposer une évaluation urgente.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-11",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'échographie morphologique du 2e trimestre sont exactes, SAUF :",
    "options": [
      "Elle est réalisée entre 18 et 22 SA.",
      "Elle permet le dépistage des malformations fœtales.",
      "Elle permet la mesure des biométries fœtales (BIP, PC, DAT, PA, LF).",
      "Elle permet la localisation placentaire et l'étude du liquide amniotique.",
      "Elle est réalisée entre 32 et 35 SA."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Repère chronologique : L'échographie du 2e trimestre dite « morphologique » se réalise entre 18 et 22 SA. L'intervalle 32–35 SA correspond à l'échographie du 3e trimestre dite « de croissance ».",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-12",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Concernant les conseils hygiéno-diététiques de la grossesse, quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "Le tabac augmente le risque de RCIU, d'accouchement prématuré et d'hématome rétroplacentaire.",
      "L'alcool a une toxicité sur le cerveau fœtal.",
      "La consommation de fromages non pasteurisés est autorisée.",
      "La consommation de viande crue est autorisée.",
      "L'activité physique doit être totalement supprimée."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Rationnel : Le tabac est associé à un risque accru de RCIU, d'accouchement prématuré et d'hématome rétroplacentaire. L'alcool est toxique pour le cerveau fœtal (troubles du spectre de l'alcoolisation fœtale). La prévention de la listériose impose d'éviter les fromages non pasteurisés, les charcuteries artisanales et les viandes/poissons crus.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-13",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Concernant les supplémentations vitaminiques au cours de la grossesse, quelle proposition est exacte ?",
    "options": [
      "L'acide folique est recommandé en période périconceptionnelle pour prévenir les anomalies de fermeture du tube neural.",
      "La vitamine D est recommandée au 1er trimestre pour prévenir le spina bifida.",
      "L'apport systématique de fer est recommandé chez toutes les femmes enceintes.",
      "L'acide folique est recommandé uniquement au 3e trimestre.",
      "La vitamine D est recommandée au 1er trimestre en période estivale."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Règle clé : L'acide folique est recommandé en période périconceptionnelle pour prévenir les anomalies de fermeture du tube neural (spina bifida), en particulier chez les femmes épileptiques sous antiépileptiques (ex. Dépakine). La vitamine D est recommandée au 3e trimestre, surtout en période hivernale, pour prévenir l'hypocalcémie néonatale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-14",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Le signe de Hégar correspond à :",
    "options": [
      "La modification de forme de l'utérus gravide (pourtour évasé).",
      "Le ramollissement du corps utérin avec contact des doigts vaginaux et abdominaux en avant de l'isthme.",
      "La pigmentation de l'aréole mammaire.",
      "La présence du réseau veineux de Haller.",
      "Le bombement des tubercules de Montgomery."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "istinction fondamentale : Le signe de Hégar = ramollissement du corps utérin, les doigts vaginaux placés en avant de l'isthme arrivent facilement au contact des doigts abdominaux. Le signe de Noble = modification de forme (le doigt bute contre le pourtour évasé de l'utérus).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-15",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Devant une augmentation du volume utérin chez une femme en aménorrhée, quels diagnostics différentiels évoquer ? (2 à 3 réponses exactes)",
    "options": [
      "Fibrome utérin.",
      "Grossesse extra-utérine.",
      "Môle hydatiforme.",
      "Kyste ovarien non fixé à l'utérus.",
      "Aménorrhée psychogène isolée."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "émarche : Devant une augmentation du volume utérin : fibrome utérin, tumeur de l'ovaire fixée à l'utérus. Devant une discordance entre l'âge gestationnel et le volume utérin : erreur de datation, grossesse multiple, môle hydatiforme, grossesse arrêtée, GEU.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-16",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Concernant l'échographie du 3e trimestre, quelle proposition est fausse ?",
    "options": [
      "Elle est réalisée entre 32 et 35 SA.",
      "Elle permet d'apprécier la croissance fœtale et de dépister un RCIU ou une macrosomie.",
      "Elle permet le diagnostic de la présentation fœtale.",
      "Elle permet d'évaluer la quantité de liquide amniotique.",
      "Elle est réalisée entre 11 et 13+6 SA."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Repère : L'intervalle 11–13+6 SA correspond à l'échographie du 1er trimestre dite « de datation ». L'échographie du 3e trimestre, dite « de croissance », se réalise entre 32 et 35 SA et permet d'apprécier la vitalité, la croissance, la présentation, la localisation placentaire, la quantité de liquide amniotique et le score biophysique de Manning.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-17",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Chez une femme ayant un cycle régulier de 28 jours, le terme théorique se calcule par :",
    "options": [
      "DDR + 7 jours + 9 mois.",
      "DDR + 14 jours + 9 mois.",
      "DDR + 21 jours + 9 mois.",
      "Date de conception + 9 mois.",
      "DDR − 14 jours + 9 mois."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Formule officielle : Terme théorique = DDR + 14 jours + 9 mois. Elle nécessite un cycle régulier de 28 jours. La datation précise du début de grossesse permet le diagnostic de prématurité, de RCIU, de macrosomie et de dépassement de terme.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-18",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Le score de Bishop, utilisé au 3e trimestre, évalue :",
    "options": [
      "La vitalité fœtale.",
      "Les conditions cervicales (position, consistance, longueur, effacement, dilatation).",
      "La quantité de liquide amniotique.",
      "La localisation placentaire.",
      "La présentation fœtale uniquement."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "éfinition : Le score de Bishop évalue les conditions cervicales : position, consistance, longueur, effacement et dilatation. Il permet de prédire le succès d'un déclenchement du travail.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-19",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Quels sont les éléments de bon pronostic d'accouchement ? (2 à 3 réponses exactes)",
    "options": [
      "Un bassin normal.",
      "Une présentation céphalique engagée.",
      "Un utérus sain avec segment inférieur amplié.",
      "Une macrosomie fœtale.",
      "Un périnée rigide."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Éléments de bon pronostic : Mère sans pathologie ; utérus sain avec segment inférieur amplié et col ramolli ouvert ; fœtus de volume normal, présentation du sommet engagée, absence de souffrance fœtale ; bassin normal ; périnée souple.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-20",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant la prévention de la toxoplasmose chez la femme enceinte non immunisée sont exactes, SAUF :",
    "options": [
      "Consommer la viande bien cuite ou après congélation.",
      "Laver soigneusement les fruits et légumes souillés de terre.",
      "Éviter les contacts avec les chats.",
      "Consommer des fromages non pasteurisés.",
      "Se laver les mains avant chaque repas."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Règle : Les fromages non pasteurisés sont à éviter chez la femme enceinte (risque de listériose), indépendamment du statut toxoplasmose. Les autres mesures préviennent la toxoplasmose (viande bien cuite ou congelée, lavage des fruits/légumes, éviter les chats) et l'hygiène générale (lavage des mains).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-21",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Concernant la cinétique de l'hCG, quelle proposition est fausse ?",
    "options": [
      "La phase ascendante comporte un doublement tous les 2 jours jusqu'à la 9e SA.",
      "La production maximale est atteinte à la 9e SA.",
      "Le taux descend progressivement et de façon irrégulière jusqu'au terme.",
      "Le test plasmatique de bêta-hCG est positif dès le 10e jour de grossesse.",
      "Le taux d'hCG reste stable du 10e jour de grossesse jusqu'au terme."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "inétique : La courbe d'hCG est ascendante (doublement tous les 2 jours) jusqu'à la 9e SA, atteint son maximum à la 9e SA, puis décroît progressivement et irrégulièrement jusqu'au terme. Elle n'est donc pas stable.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-22",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "À 12–14 SA, l'utérus gravide atteint la taille :",
    "options": [
      "D'une mandarine.",
      "D'une orange.",
      "D'un pamplemousse.",
      "D'un melon.",
      "D'une noix."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Repères à mémoriser : 6 SA → mandarine 8–10 SA → orange 12–14 SA → pamplemousse 16 SA → mi-chemin symphyse/ombilic 20 SA → ombilic",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-23",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Quels examens sont indiqués au 1er trimestre en présence de facteurs de risque ? (2 à 3 réponses exactes)",
    "options": [
      "Glycémie à jeun si facteurs de risque de diabète.",
      "Test de Coombs indirect si Rh−.",
      "Électrophorèse de l'hémoglobine si contexte géographique ou antécédents familiaux de thalassémie/drépanocytose.",
      "Sérologie de la rubéole chez toutes les femmes, quel que soit le statut antérieur.",
      "Aucun examen supplémentaire n'est indiqué."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Logique : Le bilan du 1er trimestre distingue les examens obligatoires, indiqués en présence de facteurs de risque et recommandés. La glycémie à jeun (FDR de diabète), le test de Coombs indirect (Rh−) et l'électrophorèse de l'hémoglobine (contexte géographique/antécédents familiaux) font partie des examens indiqués si facteurs de risque.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-24",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Concernant la datation échographique avant 14 SA, quelle proposition est exacte ?",
    "options": [
      "Le sac gestationnel est utilisé pour la datation avant 7 SA.",
      "La LCC est utilisée entre 7 et 13 SA et 6 jours avec une estimation à ± 8 jours.",
      "Le BIP est utilisé entre 12 et 24 SA avec une estimation à ± 3 jours.",
      "La LCC est utilisée entre 5 et 6 SA.",
      "Le BIP est utilisé dès 7 SA."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Règles de datation : Sac gestationnel : avant 7 SA LCC : entre 7 et 13 SA + 6 jours, estimation à ± 3 jours BIP : entre 12 et 24 SA, estimation à ± 8 jours",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-25",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Concernant l'organisation de la surveillance prénatale, quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "Trois consultations prénatales sont obligatoires.",
      "La surveillance peut être assurée par une sage-femme, un médecin généraliste ou un gynécologue-obstétricien.",
      "La surveillance prénatale vise le dépistage précoce des grossesses à risque.",
      "La surveillance prénatale n'a aucun impact sur la morbi-mortalité materno-fœtale.",
      "La surveillance est allégée en cas de grossesse à haut risque."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Objectifs : La surveillance prénatale a pour objectif le dépistage précoce des grossesses à risque afin de promouvoir une prise en charge précoce et adaptée, réduisant ainsi la morbi-mortalité materno-fœtale. Trois consultations prénatales sont obligatoires ; un examen clinique bien conduit associé aux examens complémentaires ciblés suffisent au suivi de la grossesse normale à bas risque. Le suivi peut être fait par une sage-femme, un médecin généraliste ou un gynécologue-obstétricien.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-26",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas n°1 — Première consultation du 1er trimestre]\nVignette clinique\n\nQuestion : Quel est le signe clinique le plus évocateur du diagnostic de grossesse chez cette patiente ?",
    "options": [
      "Les nausées matinales.",
      "L'aménorrhée secondaire brusque et complète.",
      "La pollakiurie.",
      "La tension mammaire.",
      "Le signe de Hégar."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'aménorrhée secondaire est le signe le plus évocateur, à condition qu'elle soit brusque et complète chez une femme régulièrement réglée, en activité génitale et sans allaitement. Les nausées, la pollakiurie et la tension mammaire sont des signes sympathiques inconstants et non spécifiques. Le signe de Hégar est un signe physique tardif et moins sensible que l'aménorrhée pour évoquer le diagnostic.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-27",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas n°2 — Métrorragies du 1er trimestre aux urgences]\nVignette clinique\n\nQuestion : Quel diagnostic évoquez-vous en priorité ?",
    "options": [
      "Grossesse intra-utérine évolutive normale.",
      "Grossesse extra-utérine (GEU).",
      "Môle hydatiforme.",
      "Grossesse arrêtée.",
      "Fibrome utérin compliqué."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le tableau associe : aménorrhée, douleurs pelviennes latéralisées, métrorragies, antécédent de salpingite et tabagisme — deux facteurs de risque majeurs de GEU. La discordance entre le volume utérin (mandarine, correspondant à ~6 SA) et l'âge gestationnel (7 SA) renforce la suspicion. Le diagnostic doit être confirmé par échographie (visualisation d'un sac extra-utérin, absence de sac intra-utérin) et surveillance du taux de bêta-hCG.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-28",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas n°3 — Suivi biologique et prévention infectieuse]\nVignette clinique\n\nQuestion : Quelle conduite tenir concernant la sérologie de la toxoplasmose ?",
    "options": [
      "Aucun contrôle ultérieur n'est nécessaire.",
      "Refaire la sérologie tous les mois jusqu'au terme.",
      "Refaire la sérologie au 3e trimestre uniquement.",
      "Prescrire une sérologie uniquement en cas de symptômes.",
      "Prescrire une sérologie à la fin du 1er trimestre uniquement."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "hez une femme non immunisée, la sérologie de la toxoplasmose doit être refaite tous les mois jusqu'au terme afin de dépister une éventuelle séroconversion, qui justifierait une prise en charge spécifique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-29",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas n°4 — Échographie morphologique du 2e trimestre]\nVignette clinique\n\nQuestion : Quels éléments sont étudiés lors de l'échographie morphologique du 2e trimestre ? (2 à 3 réponses exactes)",
    "options": [
      "L'étude morphologique et le dépistage des malformations fœtales.",
      "La mesure des biométries fœtales (BIP, PC, DAT, PA, LF).",
      "La localisation placentaire et la quantité de liquide amniotique.",
      "Le score de Bishop.",
      "La mesure de la clarté nucale."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "L'échographie morphologique entre 18 et 22 SA permet l'étude morphologique, la détermination de la croissance fœtale par biométries (BIP, PC, DAT, PA, LF), la localisation placentaire et l'évaluation du liquide amniotique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-grossesse-normale-30",
    "courseId": "c-gyn-grossesse-normale",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas n°5 — Consultation du 3e trimestre et pronostic d'accouchement]\nVignette clinique\n\nQuestion : Quels éléments de bon pronostic d'accouchement retrouvez-vous chez cette patiente ? (2 à 3 réponses exactes)",
    "options": [
      "Absence de pathologie maternelle.",
      "Présentation céphalique engagée.",
      "Bassin normal et périnée souple.",
      "Col postérieur, tonique et long.",
      "Hauteur utérine à 32 cm."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les éléments de bon pronostic sont : mère sans pathologie, utérus sain avec segment inférieur amplié et col ramolli ouvert, fœtus de volume normal, présentation du sommet engagée, absence de souffrance fœtale, bassin normal, périnée souple. Ici, l'absence de pathologie, la présentation céphalique engagée, le bassin normal et le périnée souple sont des éléments favorables.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-1",
    "courseId": "c-gyn-ghr",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant la grossesse à haut risque (GHR), toutes les propositions suivantes sont exactes, SAUF une. Laquelle ?",
    "options": [
      "A La GHR représente environ un tiers des grossesses.",
      "B Elle constitue un véritable problème de santé publique.",
      "C Elle se définit par un risque accru de mortalité et/ou de morbidité maternelle, fœtale et néonatale.",
      "D Le dépistage de la GHR n'a pas d'intérêt démontré sur la morbi-mortalité materno-fœtale.",
      "E Les facteurs de risque peuvent être liés au terrain, aux antécédents, à une pathologie générale ou à la grossesse actuelle."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Pourquoi D est faux : tout l'édifice du cours repose sur l'inverse — « le dépistage tend à diminuer la morbi-mortalité materno-fœtale ». C'est la raison d'être du dépistage : identifier tôt les facteurs de risque pour orienter la surveillance et la prise en charge vers une maternité de niveau adapté. Affirmer l'absence d'intérêt revient à nier la stratégie de « maternité sans risques ».",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-2",
    "courseId": "c-gyn-ghr",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les facteurs suivants, lesquels sont des facteurs de risque liés au terrain ? (2 à 3 réponses exactes)",
    "options": [
      "A Âge maternel > 40 ans",
      "B Taille < 150 cm",
      "C Multiparité",
      "D IMC strictement normal",
      "E Absence d'intoxication tabagique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": le terrain regroupe les caractéristiques propres à la patiente, indépendantes de la grossesse en cours. L'âge aux deux extrêmes (> 40 ans et < 18 ans), la petite taille (< 150 cm, par le risque de bassin rétréci et de dystocie osseuse) et les parités extrêmes (primipare ou multipare) en font partie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-3",
    "courseId": "c-gyn-ghr",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Quel seuil tensionnel définit une hypertension artérielle chez la femme enceinte ?",
    "options": [
      "A PAS ≥ 130 mmHg ou PAD ≥ 85 mmHg",
      "B PAS ≥ 140 mmHg ou PAD ≥ 90 mmHg",
      "C PAS ≥ 150 mmHg ou PAD ≥ 95 mmHg",
      "D PAS ≥ 160 mmHg ou PAD ≥ 100 mmHg",
      "E PAS ≥ 160 mmHg ou PAD ≥ 110 mmHg"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "140 / 90 mmHg est le seuil diagnostique de l'HTA gravidique. Il faut retenir qu'il s'agit d'un « OU » : une seule des deux valeurs suffit.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-4",
    "courseId": "c-gyn-ghr",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Concernant la définition biologique de l'anémie au cours de la grossesse, quelle proposition est juste ?",
    "options": [
      "A Hb < 11 g/dL au 1ᵉʳ trimestre, < 10,5 g/dL au 2ᵉ trimestre, < 11 g/dL au 3ᵉ trimestre",
      "B Hb < 12 g/dL à tous les trimestres",
      "C Hb < 10 g/dL au 1ᵉʳ trimestre",
      "D Hb < 10,5 g/dL au 3ᵉ trimestre uniquement",
      "E Hb < 13 g/dL au 2ᵉ trimestre"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": les seuils suivent la courbe physiologique de l'hémodilution gravidique. Au 1ᵉʳ trimestre, la volémie n'a pas encore beaucoup augmenté → seuil à 11 g/dL. Au 2ᵉ trimestre, l'hémodilution est maximale (le plasma augmente plus que la masse érythrocytaire) → seuil abaissé à 10,5 g/dL. Au 3ᵉ trimestre, le seuil remonte à 11 g/dL.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-5",
    "courseId": "c-gyn-ghr",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Quelles sont les complications fœtales possibles d'une infection urinaire gravidique ? (2 à 3 réponses exactes)",
    "options": [
      "A Accouchement prématuré",
      "B Mort périnatale",
      "C Hypotrophie fœtale",
      "D Maladie thromboembolique",
      "E Iso-immunisation Rhésus"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": le retentissement fœtal de l'infection urinaire est triple dans le cours : accouchement prématuré (≈ 20 %), mort périnatale et hypotrophie — cette dernière étant surtout le fait des infections urinaires chroniques asymptomatiques, qui passent inaperçues et entretiennent une inflammation chronique placentaire. À cela s'ajoute l'infection néonatale in utero par voie hématogène ou lors de l'accouchement par contage direct.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-6",
    "courseId": "c-gyn-ghr",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant le dépistage du diabète gestationnel sont exactes, SAUF une :",
    "options": [
      "A Le dépistage ciblé repose sur l'âge maternel ≥ 35 ans, le surpoids et l'antécédent familial de diabète.",
      "B Les antécédents obstétricaux (diabète gestationnel, MIU, macrosomie, hydramnios) justifient un dépistage.",
      "C L'insulinorésistance est maximale à partir de 24 SA.",
      "D Chez une patiente à risque, une glycémie à jeun est réalisée dès la première consultation prénatale.",
      "E Le dépistage systématique repose sur le dosage de l'HbA1c à 12 SA chez toutes les femmes enceintes."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(proposition fausse) E : l'HbA1c n'est pas l'outil de dépistage du diabète gestationnel dans ce cours. Le dépistage repose sur la glycémie à jeun (1ᵉʳ trimestre chez les patientes à risque) puis sur l'HGPO entre 24 et 28 SA. L'HbA1c reflète l'équilibre glycémique des 3 derniers mois et n'est pas recommandée pour le diagnostic du DG.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-7",
    "courseId": "c-gyn-ghr",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Concernant la pré-éclampsie, quelle proposition est fausse ?",
    "options": [
      "A Elle associe une HTA, une protéinurie > 0,3 g/24 h et des œdèmes.",
      "B Elle survient après 20 SA.",
      "C Elle peut être révélée par des phosphènes et des acouphènes.",
      "D Une PAS ≥ 160 mmHg constitue un signe de gravité.",
      "E Elle est définie par une HTA isolée apparaissant après 20 SA chez une femme jusque-là normotendue."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ": la description correspond à l'HTA gravidique (ou HTA induite par la grossesse), c'est-à-dire une HTA isolée, sans protéinurie ni œdème, apparaissant après 20 SA. La pré-éclampsie, elle, est une HTA avec protéinurie significative et/ou œdèmes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-8",
    "courseId": "c-gyn-ghr",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Parmi les antécédents suivants, lesquels constituent un facteur de risque de grossesse à haut risque ? (2 à 3 réponses exactes)",
    "options": [
      "A Utérus cicatriciel",
      "B Antécédent d'éclampsie",
      "C Antécédent de RCIU",
      "D Primiparité à 25 ans sans complication",
      "E Groupe sanguin O"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": l'utérus cicatriciel expose au risque de rupture utérine et impose une surveillance de la cicatrice ; l'antécédent d'éclampsie est un facteur de récidive majeur (la pré-éclampsie récidive dans 20 à 30 % des cas) ; l'antécédent de RCIU traduit une insuffisance placentaire chronique potentiellement récidivante.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-9",
    "courseId": "c-gyn-ghr",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Quelle est la caractéristique biologique typique de l'anémie ferriprive gravidique ?",
    "options": [
      "A Macrocytaire avec VGM > 100 µ³",
      "B Microcytaire (VGM < 80 µ³) et arégénérative",
      "C Normocytaire avec réticulocytes élevés",
      "D Hyperchrome avec ferritine élevée",
      "E Régénérative avec réticulocytes > 150 000/mm³"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": le fer est indispensable à la synthèse de l'hème. Sa carence entraîne des globules rouges de petite taille (microcytose, VGM < 80 µ³) et peu chargés en hémoglobine (hypochromie). La moelle, privée de fer, ne peut pas augmenter sa production : l'anémie est arégénérative (réticulocytes < 50 000/mm³). La ferritine effondrée (< 12 µg/L) confirme la carence martiale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-10",
    "courseId": "c-gyn-ghr",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Concernant les acteurs et le cadre du dépistage de la GHR, quelle proposition est juste ?",
    "options": [
      "A Le dépistage est exclusivement réservé au médecin spécialiste.",
      "B Il nécessite un cadre institutionnel qui oriente, contrôle et évalue.",
      "C La sage-femme ne participe pas au dépistage.",
      "D Les infrastructures hiérarchisées ne sont pas indispensables.",
      "E Le dépistage ne concerne que les grossesses pathologiques déjà déclarées."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": le cours insiste sur la nécessité d'un cadre institutionnel qui oriente, contrôle et évalue, dans le cadre de la stratégie de prise en charge des grossesses pour une « maternité sans risques », avec des infrastructures et équipements adéquats et hiérarchisés.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-11",
    "courseId": "c-gyn-ghr",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Quels sont les signes de gravité d'une HTA gravidique ? (2 à 3 réponses exactes)",
    "options": [
      "A Troubles visuels (phosphènes) et auditifs (acouphènes)",
      "B Oligurie",
      "C PAS ≥ 160 mmHg ou PAD ≥ 110 mmHg",
      "D Œdèmes des chevilles isolés au 3ᵉ trimestre",
      "E Prise de poids progressive et régulière"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": les phosphènes et acouphènes traduisent l'œdème cérébral et le vasospasme ; ils annoncent l'éclampsie. B : l'oligurie signe l'atteinte rénale (insuffisance rénale fonctionnelle puis organique) et fait partie des signes de gravité. C : les seuils 160/110 mmHg définissent l'HTA sévère, avec un risque élevé d'AVC et d'éclampsie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-12",
    "courseId": "c-gyn-ghr",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant le traitement de l'infection urinaire gravidique sont exactes, SAUF une :",
    "options": [
      "A En cas de cystite, des conseils hygiéno-diététiques sont associés à une antibiothérapie.",
      "B Un ECBU de contrôle est réalisé 48 h après la fin du traitement, puis mensuellement jusqu'à la fin de la grossesse.",
      "C En cas de pyélonéphrite, un repos strict en décubitus latéral gauche est recommandé.",
      "D L'antibiothérapie de la pyélonéphrite est administrée par voie parentérale après prélèvements bactériologiques.",
      "E En cas de pyélonéphrite, la tocolyse est formellement contre-indiquée, même en cas de MAP."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(proposition fausse) E : la tocolyse n'est pas contre-indiquée — elle est au contraire prévue en cas de menace d'accouchement prématuré (MAP) associée, car l'infection urinaire est une cause majeure de prématurité. Le cours mentionne explicitement « si MAP → tocolyse ».",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-13",
    "courseId": "c-gyn-ghr",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Concernant le diagnostic du diabète gestationnel, quelle proposition est fausse ?",
    "options": [
      "A Au 1ᵉʳ trimestre, une glycémie à jeun ≥ 0,92 g/L chez une patiente à risque fait poser le diagnostic de diabète gestationnel.",
      "B Au 1ᵉʳ trimestre, une glycémie à jeun ≥ 1,26 g/L évoque un diabète de type 2.",
      "C L'HGPO est réalisée entre 24 et 28 SA si la glycémie à jeun du 1ᵉʳ trimestre était normale.",
      "D Le diabète gestationnel est retenu si au moins deux valeurs de l'HGPO sont anormales.",
      "E Les seuils de l'HGPO sont : à jeun ≥ 0,92 g/L, à 1 h ≥ 1,80 g/L, à 2 h ≥ 1,53 g/L."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": ": le cours est formel — le diagnostic est posé si au moins UNE valeur parmi les 3 mesures est anormale. Exiger deux valeurs anormales est une erreur classique (confusion avec les critères de l'IADPSG/OMS qui retiennent une seule valeur).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-14",
    "courseId": "c-gyn-ghr",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Concernant l'échographie au cours de la grossesse, quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "A L'échographie du 1ᵉʳ trimestre permet la datation de la grossesse.",
      "B L'échographie du 2ᵉ trimestre évalue la morphologie et l'anatomie fœtale.",
      "C L'échographie du 3ᵉ trimestre évalue les biométries, la présentation et le placement placentaire.",
      "D L'échographie du 1ᵉʳ trimestre évalue systématiquement la biométrie fœtale complète.",
      "E L'échographie du 2ᵉ trimestre sert uniquement à déterminer le sexe fœtal."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": au 1ᵉʳ trimestre, l'objectif principal est la datation (longueur cranio-caudale), qui conditionne toute la surveillance ultérieure. B : au 2ᵉ trimestre, l'échographie morphologique examine l'anatomie fœtale à la recherche de malformations. C : au 3ᵉ trimestre, on évalue la croissance (biométries), la présentation et la localisation placentaire — éléments décisifs pour la voie d'accouchement, en particulier devant un placenta praevia.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-15",
    "courseId": "c-gyn-ghr",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Quelle est la posologie du fer par voie orale dans le traitement de l'anémie ferriprive gravidique ?",
    "options": [
      "A 50 à 100 mg/j",
      "B 150 à 200 mg/j",
      "C 300 à 400 mg/j",
      "D 10 à 20 mg/j",
      "E 500 mg/j"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "150 à 200 mg/j de fer élément par voie orale, traitement poursuivi 3 mois après la correction de l'anémie afin de reconstituer les réserves en fer (et non simplement de normaliser l'hémoglobine). Le but du traitement est double : corriger l'anémie et rétablir les réserves.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-16",
    "courseId": "c-gyn-ghr",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Quelle proportion des grossesses la GHR représente-t-elle ?",
    "options": [
      "A 1/10",
      "B 1/5",
      "C 1/3",
      "D 1/2",
      "E 2/3"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "1/3 des grossesses — chiffre à connaître par cœur, car il justifie le qualificatif de « problème de santé publique » : un tiers des grossesses représente un volume considérable de surveillance et de ressources.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-17",
    "courseId": "c-gyn-ghr",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Parmi les facteurs suivants liés à la grossesse actuelle, lesquels sont des facteurs de risque de GHR ? (2 à 3 réponses exactes)",
    "options": [
      "A Grossesse multiple",
      "B Placenta praevia",
      "C Présentation anormale ou dystocique",
      "D Prise de poids strictement normale et adaptée au terme",
      "E Grossesse à terme de 39 SA sans complication"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": la grossesse multiple majore tous les risques : prématurité, RCIU, HTA, hémorragie du post-partum. B : le placenta praevia expose au risque hémorragique majeur et impose une césarienne programmée. C : une présentation anormale ou dystocique annonce une dystocie mécanique et un recours instrumental/césarienne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-18",
    "courseId": "c-gyn-ghr",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Quelle définition correspond à l'HTA chronique gravidique ?",
    "options": [
      "A HTA apparaissant après 20 SA chez une femme jusque-là normotendue",
      "B HTA préexistante ou diagnostiquée avant 20 SA, ou persistant après l'accouchement",
      "C HTA + protéinurie > 0,3 g/24 h + œdèmes après 20 SA",
      "D HTA isolée du post-partum immédiat",
      "E HTA apparaissant uniquement pendant le travail"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": trois situations définissent l'HTA chronique : (1) HTA préexistante à la grossesse, (2) HTA diagnostiquée avant 20 SA, (3) HTA constatée pendant la grossesse et ne disparaissant pas après l'accouchement. Le critère commun est l'absence de réversibilité gravidique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-19",
    "courseId": "c-gyn-ghr",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Concernant le retentissement et le traitement de l'anémie ferriprive gravidique, quelle proposition est fausse ?",
    "options": [
      "A Le retentissement maternel est dominé par le risque d'hémorragie de la délivrance.",
      "B Le retentissement fœtal inclut prématurité, RCIU et augmentation de la mortalité périnatale.",
      "C Une anémie est dite sévère lorsque l'Hb < 7 g/dL.",
      "D Le traitement martial oral est poursuivi 3 mois après correction de l'anémie.",
      "E Le traitement martial oral est arrêté dès la normalisation de l'hémoglobine."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ": arrêter le fer dès que l'Hb se normalise est une erreur thérapeutique classique : l'hémoglobine se corrige avant les réserves. Il faut poursuivre 3 mois après la correction pour reconstituer les réserves en fer (ferritine).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-20",
    "courseId": "c-gyn-ghr",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant les cardiopathies et la grossesse, quelles propositions sont exactes ? (2 à 3 réponses exactes)",
    "options": [
      "A La grossesse entraîne des modifications hémodynamiques qui s'accentuent lors de l'accouchement.",
      "B Une cardiopathie sous-jacente peut se décompenser pendant la grossesse.",
      "C La prise en charge doit être multidisciplinaire, débutant avant la grossesse et se poursuivant en post-partum.",
      "D La grossesse améliore spontanément toute cardiopathie.",
      "E La cardiopathie contre-indique systématiquement toute grossesse."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": la grossesse augmente la volémie, le débit cardiaque et la fréquence cardiaque ; ces modifications culminent au travail et à l'accouchement (poussées de débit, variations brutales de la pression intra-abdominale). B : c'est précisément ce qui rend la cardiopathie dangereuse : une cardiopathie jusque-là compensée peut se décompenser (œdème pulmonaire, troubles du rythme). C : la prise en charge est multidisciplinaire (obstétricien, cardiologue, anesthésiste, néonatologue) et doit débuter avant la grossesse (consultation préconceptionnelle) et se poursuivre en post-partum.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-21",
    "courseId": "c-gyn-ghr",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant le diabète gestationnel sont exactes, SAUF une :",
    "options": [
      "A C'est un trouble de la tolérance glucidique de sévérité variable.",
      "B Il débute ou est diagnostiqué pour la première fois pendant la grossesse.",
      "C Sa prévalence varie de 1 à 14 % de la totalité des grossesses.",
      "D L'insuline reste le traitement de 1ᵉʳ choix lorsqu'un traitement hypoglycémiant s'avère nécessaire.",
      "E Les hypoglycémiants oraux constituent le traitement de première intention."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(proposition fausse) E : les hypoglycémiants oraux sont en principe contre-indiqués pendant la grossesse (risque de passage transplacentaire et d'hypoglycémie néonatale). L'insuline est le traitement de référence lorsqu'un traitement médicamenteux est nécessaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-22",
    "courseId": "c-gyn-ghr",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Concernant les modalités du dépistage de la GHR, quelle proposition est juste ?",
    "options": [
      "A Le dépistage commence uniquement au 3ᵉ trimestre.",
      "B Le dépistage commence lors de la 1ʳᵉ consultation et se poursuit tout au long de la grossesse.",
      "C Le dépistage se limite à un seul examen clinique.",
      "D L'interrogatoire minutieux n'a pas sa place dans le dépistage.",
      "E La recherche des facteurs de risque n'est utile qu'en cas de symptômes."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": le dépistage est un processus continu qui démarre à la première consultation prénatale et se poursuit à chaque consultation. C'est la condition d'une prise en charge précoce — « l'issue de la grossesse dépend de la précocité et du nombre de consultations ».",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-23",
    "courseId": "c-gyn-ghr",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Quelle est la première mesure thérapeutique en cas de pyélonéphrite gravidique ?",
    "options": [
      "A Repos strict en décubitus latéral gauche",
      "B Ambulatoire avec antibiotiques oraux d'emblée",
      "C Chirurgie urologique immédiate",
      "D Diurétiques seuls",
      "E Aucun traitement avant l'accouchement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": le repos strict en décubitus latéral gauche fait partie du traitement de première ligne. Il améliore la perfusion rénale et le drainage des voies urinaires, tout en préservant la perfusion placentaire. Il s'y associe une antibiothérapie parentérale après prélèvements, des antalgiques/antipyrétiques, une hydratation abondante et une tocolyse si MAP.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-24",
    "courseId": "c-gyn-ghr",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Quels examens font partie du bilan biologique initial de la grossesse ? (2 à 3 réponses exactes)",
    "options": [
      "A Groupage sanguin-Rhésus, phénotype et RAI",
      "B Glycémie à jeun",
      "C Sérologies toxoplasmose et rubéole",
      "D Scanner abdominal systématique",
      "E Biopsie hépatique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": indispensable pour la prévention de l'iso-immunisation Rhésus et la sécurité transfusionnelle. B : dépistage du diabète (et du diabète gestationnel chez les patientes à risque). C : dépistage des sérologies à risque de fœtopathie (toxoplasmose, rubéole) — avec l'albuminurie à la bandelette et la FNS, ces examens complètent le bilan biologique du cours.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-25",
    "courseId": "c-gyn-ghr",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "C1-Q1. Parmi les éléments suivants de l'interrogatoire et de l'examen, lesquels constituent un facteur de risque de GHR ? (2 à 3 réponses)",
    "options": [
      "A < 11 g/dL",
      "B < 10,5 g/dL",
      "C < 9 g/dL",
      "D < 7 g/dL",
      "E < 5 g/dL"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": ": le seuil OMS de l'anémie sévère est Hb < 7 g/dL. En dessous, le retentissement materno-fœtal devient majeur et une transfusion peut être discutée, notamment en cas de proximité de l'accouchement (risque hémorragique).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-26",
    "courseId": "c-gyn-ghr",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Première consultation prénatale chez une adolescente rurale]\nVignette clinique Mme B., 17 ans, primigeste, consulte pour sa première consultation prénatale à l'EPH de sa commune, à 12 SA.\n\nQuestion : Question 1",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
      "Option E"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": l'âge < 18 ans fait partie des âges extrêmes, avec un risque accru de prématurité, de RCIU, de dystocie et de troubles socio-psychologiques. B : la taille < 150 cm évoque un bassin potentiellement rétréci, source de dystocie osseuse. C : le tabac est un facteur de risque majeur (RCIU, prématurité, HRP), explicitement noté « tabac +++ » dans le cours.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-27",
    "courseId": "c-gyn-ghr",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Première consultation prénatale chez une adolescente rurale]\nVignette clinique Mme B., 17 ans, primigeste, consulte pour sa première consultation prénatale à l'EPH de sa commune, à 12 SA.\n\nQuestion : Question 2",
    "options": [
      "A Âge de 17 ans",
      "B Taille de 148 cm",
      "C Tabagisme actif",
      "D Primigestité",
      "E TA à 110/70 mmHg"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": l'âge < 18 ans fait partie des âges extrêmes, avec un risque accru de prématurité, de RCIU, de dystocie et de troubles socio-psychologiques. B : la taille < 150 cm évoque un bassin potentiellement rétréci, source de dystocie osseuse. C : le tabac est un facteur de risque majeur (RCIU, prématurité, HRP), explicitement noté « tabac +++ » dans le cours.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-28",
    "courseId": "c-gyn-ghr",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Première consultation prénatale chez une adolescente rurale]\nVignette clinique Mme B., 17 ans, primigeste, consulte pour sa première consultation prénatale à l'EPH de sa commune, à 12 SA.\n\nQuestion : Question 3",
    "options": [
      "A Groupage sanguin-Rhésus, phénotype, RAI",
      "B FNS, glycémie à jeun, albuminurie à la bandelette",
      "C Sérologies toxoplasmose et rubéole, échographie de datation",
      "D IRM cérébrale fœtale",
      "E Amniocentèse systématique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": indispensable pour anticiper la prophylaxie anti-D et sécuriser une éventuelle transfusion. B : dépistage de l'anémie, du diabète et de la protéinurie. C : sérologies à risque de fœtopathie et échographie de datation, qui conditionne toute la surveillance ultérieure.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-29",
    "courseId": "c-gyn-ghr",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Première consultation prénatale chez une adolescente rurale]\nVignette clinique Mme B., 17 ans, primigeste, consulte pour sa première consultation prénatale à l'EPH de sa commune, à 12 SA.\n\nQuestion : Question 4",
    "options": [
      "A Le dépistage peut être espacé à une consultation par trimestre en raison de l'éloignement.",
      "B L'issue de la grossesse dépend de la précocité et du nombre de consultations.",
      "C Le dépistage des facteurs de risque est inutile chez une primigeste.",
      "D La patiente doit être orientée d'emblée vers le CHU pour toutes les consultations.",
      "E Aucun bilan biologique n'est nécessaire avant 24 SA."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": c'est une phrase-clé du cours — « l'issue de la grossesse et de l'accouchement dépend de la précocité et du nombre de consultations ». Cette patiente cumule plusieurs facteurs de risque ; un suivi rapproché est indispensable.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-30",
    "courseId": "c-gyn-ghr",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Première consultation prénatale chez une adolescente rurale]\nVignette clinique Mme B., 17 ans, primigeste, consulte pour sa première consultation prénatale à l'EPH de sa commune, à 12 SA.\n\nQuestion : Question 5",
    "options": [
      "A L'échographie du 1ᵉʳ trimestre a pour objectif principal la datation de la grossesse.",
      "B L'échographie du 1ᵉʳ trimestre doit obligatoirement évaluer la biométrie fœtale complète.",
      "C L'échographie morphologique se fait au 1ᵉʳ trimestre.",
      "D L'échographie du 3ᵉ trimestre est inutile chez une primigeste.",
      "E Une seule échographie suffit pour toute la grossesse."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": la datation précise est l'objectif majeur du 1ᵉʳ trimestre ; elle conditionne l'interprétation de la croissance, la surveillance de la prématurité et le terme de référence.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-31",
    "courseId": "c-gyn-ghr",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Céphalées et troubles visuels à 28 SA]\nVignette clinique Mme K., 38 ans, G3P2, admise aux urgences de la maternité à 28 SA pour céphalées intenses et troubles visuels.\n\nQuestion : Question 1",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
      "Option E"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": la triade HTA + protéinurie + œdèmes après 20 SA définit la pré-éclampsie. La présence de signes de gravité (céphalées, phosphènes, acouphènes, ROT vifs, douleur épigastrique, PAS ≥ 160 / PAD ≥ 110, prise de poids brutale, RCIU suspecté, diminution des MAF) la classe en pré-éclampsie sévère.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-32",
    "courseId": "c-gyn-ghr",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Céphalées et troubles visuels à 28 SA]\nVignette clinique Mme K., 38 ans, G3P2, admise aux urgences de la maternité à 28 SA pour céphalées intenses et troubles visuels.\n\nQuestion : Question 2",
    "options": [
      "A HTA gravidique simple",
      "B HTA chronique",
      "C Pré-éclampsie sévère",
      "D Éclampsie",
      "E HTA blanche de consultation"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ": la triade HTA + protéinurie + œdèmes après 20 SA définit la pré-éclampsie. La présence de signes de gravité (céphalées, phosphènes, acouphènes, ROT vifs, douleur épigastrique, PAS ≥ 160 / PAD ≥ 110, prise de poids brutale, RCIU suspecté, diminution des MAF) la classe en pré-éclampsie sévère.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-33",
    "courseId": "c-gyn-ghr",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Céphalées et troubles visuels à 28 SA]\nVignette clinique Mme K., 38 ans, G3P2, admise aux urgences de la maternité à 28 SA pour céphalées intenses et troubles visuels.\n\nQuestion : Question 3",
    "options": [
      "A Phosphènes et acouphènes",
      "B ROT vifs et douleur épigastrique",
      "C PAS ≥ 160 mmHg et PAD ≥ 110 mmHg",
      "D Prise en charge en ambulatoire possible",
      "E Absence de protéinurie massive"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": les troubles visuels et auditifs traduisent l'atteinte cérébrale et précèdent souvent l'éclampsie. B : les ROT vifs et la douleur épigastrique (irritation hépatique) sont des signes classiques de gravité. C : les seuils 160/110 mmHg constituent l'HTA sévère.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-34",
    "courseId": "c-gyn-ghr",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Céphalées et troubles visuels à 28 SA]\nVignette clinique Mme K., 38 ans, G3P2, admise aux urgences de la maternité à 28 SA pour céphalées intenses et troubles visuels.\n\nQuestion : Question 4",
    "options": [
      "A Protéinurie des 24 h",
      "B NFS-plaquettes, bilan hépatique, créatinine, uricémie",
      "C Échographie obstétricale avec doppler et surveillance du RCF",
      "D Radiographie du thorax systématique",
      "E Sérologie VIH seule"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": la quantification de la protéinurie précise l'atteinte rénale. B : recherche de complications hématologiques (thrombopénie), hépatiques (cytolyse, HELLP) et rénales. C : évaluation de la croissance fœtale (RCIU), du bien-être fœtal et du retentissement placentaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-35",
    "courseId": "c-gyn-ghr",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Céphalées et troubles visuels à 28 SA]\nVignette clinique Mme K., 38 ans, G3P2, admise aux urgences de la maternité à 28 SA pour céphalées intenses et troubles visuels.\n\nQuestion : Question 5",
    "options": [
      "A Hospitalisation, contrôle tensionnel, surveillance materno-fœtale et maturation pulmonaire fœtale",
      "B Retour à domicile avec automesure tensionnelle",
      "C Césarienne immédiate systématique",
      "D Abstention thérapeutique jusqu'à 37 SA",
      "E Diurétiques seuls"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": la prise en charge d'une pré-éclampsie sévère repose sur l'hospitalisation, le contrôle tensionnel (antihypertenseurs), la prévention de l'éclampsie (sulfate de magnésium selon protocole) et la surveillance materno-fœtale rapprochée. À 28 SA, la maturation pulmonaire fœtale par corticoïdes est essentielle si une extraction doit être envisagée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-36",
    "courseId": "c-gyn-ghr",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Céphalées et troubles visuels à 28 SA]\nVignette clinique Mme K., 38 ans, G3P2, admise aux urgences de la maternité à 28 SA pour céphalées intenses et troubles visuels.\n\nQuestion : Question 6",
    "options": [
      "A Elle est diagnostiquée après 20 SA chez une femme normotendue",
      "B Elle est préexistante, diagnostiquée avant 20 SA, ou persiste après l'accouchement",
      "C Elle s'accompagne toujours d'une protéinurie",
      "D Elle se définit par une PAS ≥ 160 mmHg uniquement",
      "E Elle ne présente aucun risque fœtal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": définition exacte de l'HTA chronique (préexistante, avant 20 SA, ou persistant en post-partum).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-37",
    "courseId": "c-gyn-ghr",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Asthénie et pâleur à 16 SA]\nVignette clinique Mme A., 29 ans, G2P1, consulte à 16 SA pour asthénie intense et essoufflement à l'effort.\n\nQuestion : Question 1",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
      "Option E"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": VGM < 80 µ³ (microcytose) + réticulocytes < 50 000/mm³ (arégénérative) + ferritine effondrée (8 µg/L, seuil < 12) = anémie ferriprive caractéristique. La carence en fer bloque la synthèse de l'hème et empêche la réponse médullaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-38",
    "courseId": "c-gyn-ghr",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Asthénie et pâleur à 16 SA]\nVignette clinique Mme A., 29 ans, G2P1, consulte à 16 SA pour asthénie intense et essoufflement à l'effort.\n\nQuestion : Question 2",
    "options": [
      "A Anémie macrocytaire régénérative",
      "B Anémie microcytaire arégénérative ferriprive",
      "C Anémie normocytaire régénérative",
      "D Anémie hémolytique",
      "E Anémie mégaloblastique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": VGM < 80 µ³ (microcytose) + réticulocytes < 50 000/mm³ (arégénérative) + ferritine effondrée (8 µg/L, seuil < 12) = anémie ferriprive caractéristique. La carence en fer bloque la synthèse de l'hème et empêche la réponse médullaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-39",
    "courseId": "c-gyn-ghr",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Asthénie et pâleur à 16 SA]\nVignette clinique Mme A., 29 ans, G2P1, consulte à 16 SA pour asthénie intense et essoufflement à l'effort.\n\nQuestion : Question 3",
    "options": [
      "A Grossesses rapprochées",
      "B Allaitement prolongé",
      "C Antécédent d'anémie ferriprive",
      "D Groupe sanguin AB",
      "E Taille de 165 cm"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": les grossesses rapprochées épuisent les réserves martiales. B : l'allaitement prolongé mobilise le fer maternel. C : un antécédent d'anémie ferriprive est un facteur de récidive.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-40",
    "courseId": "c-gyn-ghr",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Asthénie et pâleur à 16 SA]\nVignette clinique Mme A., 29 ans, G2P1, consulte à 16 SA pour asthénie intense et essoufflement à l'effort.\n\nQuestion : Question 4",
    "options": [
      "A Hémorragie de la délivrance",
      "B Prématurité et RCIU",
      "C Augmentation de la mortalité périnatale",
      "D Placenta praevia",
      "E Iso-immunisation Rhésus"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": retentissement maternel dominé par le risque hémorragique de la délivrance (utérus moins bien tolérant l'hémorragie). B : le retentissement fœtal associe prématurité, RCIU et hypotrophie. C : l'anémie maternelle augmente la mortalité périnatale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-41",
    "courseId": "c-gyn-ghr",
    "questionNumber": 41,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Asthénie et pâleur à 16 SA]\nVignette clinique Mme A., 29 ans, G2P1, consulte à 16 SA pour asthénie intense et essoufflement à l'effort.\n\nQuestion : Question 5",
    "options": [
      "A Fer oral 150 à 200 mg/j, poursuivi 3 mois après correction, avec éducation nutritionnelle",
      "B Transfusion sanguine systématique immédiate",
      "C Arrêt du fer dès que l'Hb atteint 11 g/dL",
      "D Acide folique seul",
      "E Aucun traitement, surveillance simple"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": traitement martial oral à 150–200 mg/j, poursuivi 3 mois après correction pour reconstituer les réserves, associé à une éducation nutritionnelle.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-42",
    "courseId": "c-gyn-ghr",
    "questionNumber": 42,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Asthénie et pâleur à 16 SA]\nVignette clinique Mme A., 29 ans, G2P1, consulte à 16 SA pour asthénie intense et essoufflement à l'effort.\n\nQuestion : Question 6",
    "options": [
      "A < 10,5 g/dL",
      "B < 9 g/dL",
      "C < 7 g/dL",
      "D < 11 g/dL",
      "E < 6 g/dL"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ": le seuil OMS de l'anémie sévère est Hb < 7 g/dL. Cette patiente (8,2 g/dL) est donc en anémie modérée mais doit être traitée énergiquement pour éviter la dégradation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-43",
    "courseId": "c-gyn-ghr",
    "questionNumber": 43,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Fièvre et douleur lombaire à 22 SA]\nVignette clinique Mme H., 31 ans, G2P1, consulte aux urgences à 22 SA pour fièvre et douleur lombaire droite.\n\nQuestion : Question 1",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
      "Option E"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": l'association fièvre élevée + frissons + douleur lombaire + signe de l'ébranlement lombaire + syndrome urinaire bas (brûlures, pollakiurie) + BU positive est typique d'une pyélonéphrite aiguë, la forme la plus grave des infections urinaires gravidiques.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-44",
    "courseId": "c-gyn-ghr",
    "questionNumber": 44,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Fièvre et douleur lombaire à 22 SA]\nVignette clinique Mme H., 31 ans, G2P1, consulte aux urgences à 22 SA pour fièvre et douleur lombaire droite.\n\nQuestion : Question 2",
    "options": [
      "A Cystite aiguë simple",
      "B Bactériurie asymptomatique",
      "C Pyélonéphrite aiguë droite",
      "D Colique néphrétique",
      "E Appendicite aiguë"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ": l'association fièvre élevée + frissons + douleur lombaire + signe de l'ébranlement lombaire + syndrome urinaire bas (brûlures, pollakiurie) + BU positive est typique d'une pyélonéphrite aiguë, la forme la plus grave des infections urinaires gravidiques.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-45",
    "courseId": "c-gyn-ghr",
    "questionNumber": 45,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Fièvre et douleur lombaire à 22 SA]\nVignette clinique Mme H., 31 ans, G2P1, consulte aux urgences à 22 SA pour fièvre et douleur lombaire droite.\n\nQuestion : Question 3",
    "options": [
      "A ECBU avec antibiogramme",
      "B Hémogramme seul",
      "C Échographie rénale seule",
      "D Cystoscopie",
      "E Bandelette urinaire seule"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": l'ECBU avec antibiogramme confirme l'infection urinaire, identifie le germe (le plus souvent E. coli) et guide l'antibiothérapie. Il est indispensable avant de débuter les antibiotiques.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-46",
    "courseId": "c-gyn-ghr",
    "questionNumber": 46,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Fièvre et douleur lombaire à 22 SA]\nVignette clinique Mme H., 31 ans, G2P1, consulte aux urgences à 22 SA pour fièvre et douleur lombaire droite.\n\nQuestion : Question 4",
    "options": [
      "A Hospitalisation et repos strict en décubitus latéral gauche",
      "B Antibiothérapie parentérale après prélèvements bactériologiques",
      "C Antalgiques, antipyrétiques et hydratation abondante",
      "D Diurétiques pour « laver » les voies urinaires",
      "E Césarienne immédiate"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": le repos strict en décubitus latéral gauche améliore le drainage rénal et la perfusion placentaire. B : l'antibiothérapie parentérale est la règle après prélèvements. C : traitement symptomatique et hydratation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-47",
    "courseId": "c-gyn-ghr",
    "questionNumber": 47,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Fièvre et douleur lombaire à 22 SA]\nVignette clinique Mme H., 31 ans, G2P1, consulte aux urgences à 22 SA pour fièvre et douleur lombaire droite.\n\nQuestion : Question 5",
    "options": [
      "A Accouchement prématuré",
      "B Infection néonatale",
      "C Hypotrophie fœtale",
      "D Iso-immunisation Rhésus",
      "E Maladie thromboembolique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ": l'infection urinaire est une cause majeure de prématurité (≈ 20 %). B : infection néonatale in utero par voie hématogène ou lors de l'accouchement par contage direct. C : hypotrophie, surtout en cas d'infection chronique asymptomatique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-48",
    "courseId": "c-gyn-ghr",
    "questionNumber": 48,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Fièvre et douleur lombaire à 22 SA]\nVignette clinique Mme H., 31 ans, G2P1, consulte aux urgences à 22 SA pour fièvre et douleur lombaire droite.\n\nQuestion : Question 6",
    "options": [
      "A Un ECBU de contrôle est réalisé 48 h après la fin du traitement.",
      "B Une surveillance mensuelle par ECBU est recommandée jusqu'à la fin de la grossesse.",
      "C La pyélonéphrite gravido-toxique est une complication exceptionnelle.",
      "D En cas de MAP associée, la tocolyse est formellement contre-indiquée.",
      "E La septicémie est une complication maternelle possible."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "(proposition fausse) D : la tocolyse n'est pas contre-indiquée, elle est au contraire indiquée en cas de MAP associée. C'est une erreur de raisonnement fréquente.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-49",
    "courseId": "c-gyn-ghr",
    "questionNumber": 49,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Dépistage du diabète gestationnel à 26 SA]\nVignette clinique Mme S., 36 ans, G4P3, consulte à 26 SA pour suivi de grossesse.\n\nQuestion : Question 1",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
      "Option E"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "(les 4 sont des FDR) A : âge ≥ 35 ans. B : IMC 31 → surpoids/obésité. C : antécédent obstétrical de macrosomie (avec hydramnios et MIU) → facteur de risque majeur. D : antécédent familial de diabète.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-50",
    "courseId": "c-gyn-ghr",
    "questionNumber": 50,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Dépistage du diabète gestationnel à 26 SA]\nVignette clinique Mme S., 36 ans, G4P3, consulte à 26 SA pour suivi de grossesse.\n\nQuestion : Question 2",
    "options": [
      "A Âge maternel ≥ 35 ans",
      "B Surpoids/obésité",
      "C Antécédent de macrosomie",
      "D Antécédent familial de diabète",
      "E Parité de 4"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "(les 4 sont des FDR) A : âge ≥ 35 ans. B : IMC 31 → surpoids/obésité. C : antécédent obstétrical de macrosomie (avec hydramnios et MIU) → facteur de risque majeur. D : antécédent familial de diabète.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-51",
    "courseId": "c-gyn-ghr",
    "questionNumber": 51,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Dépistage du diabète gestationnel à 26 SA]\nVignette clinique Mme S., 36 ans, G4P3, consulte à 26 SA pour suivi de grossesse.\n\nQuestion : Question 3",
    "options": [
      "A HGPO (hyperglycémie provoquée orale)",
      "B HbA1c",
      "C Glycémie post-prandiale uniquement",
      "D Glycosurie sur les urines du matin",
      "E Aucun examen, la glycémie du T1 était normale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": entre 24 et 28 SA, l'HGPO est l'examen de référence. La glycémie du T1 était normale (< 0,92 g/L), ce qui ne dispense pas de l'HGPO chez une patiente à risque.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-52",
    "courseId": "c-gyn-ghr",
    "questionNumber": 52,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Dépistage du diabète gestationnel à 26 SA]\nVignette clinique Mme S., 36 ans, G4P3, consulte à 26 SA pour suivi de grossesse.\n\nQuestion : Question 4",
    "options": [
      "A HGPO normale",
      "B Diabète gestationnel",
      "C Diabète de type 2 préexistant",
      "D Intolérance au glucose simple sans DG",
      "E Examen non interprétable"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": les seuils de l'HGPO sont 0,92 / 1,80 / 1,53 g/L. Ici les 3 valeurs sont anormales — et une seule valeur anormale suffit à poser le diagnostic de diabète gestationnel.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-53",
    "courseId": "c-gyn-ghr",
    "questionNumber": 53,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Dépistage du diabète gestationnel à 26 SA]\nVignette clinique Mme S., 36 ans, G4P3, consulte à 26 SA pour suivi de grossesse.\n\nQuestion : Question 5",
    "options": [
      "A Insuline en première intention",
      "B Sulfamides hypoglycémiants en première intention",
      "C Metformine en première intention",
      "D Arrêt de toute surveillance glycémique",
      "E Attendre l'accouchement sans traitement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ": lorsqu'un traitement hypoglycémiant est nécessaire pendant la grossesse, l'insuline reste le 1ᵉʳ choix ; les hypoglycémiants oraux sont en principe contre-indiqués.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-ghr-54",
    "courseId": "c-gyn-ghr",
    "questionNumber": 54,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Dépistage du diabète gestationnel à 26 SA]\nVignette clinique Mme S., 36 ans, G4P3, consulte à 26 SA pour suivi de grossesse.\n\nQuestion : Question 6",
    "options": [
      "A Il n'entraîne aucun risque pour la grossesse",
      "B Il nécessite une prise en charge pluridisciplinaire",
      "C Le contrôle glycémique avant la conception est inutile",
      "D Les hypoglycémiants oraux sont le traitement de référence",
      "E Il ne concerne que le diabète de type 2"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ": le diabète préexistant (type 1 ou type 2) entraîne des risques graves pour la femme, la grossesse et l'enfant, et nécessite une prise en charge pluridisciplinaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-1",
    "courseId": "c-gyn-geu",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant l'épidémiologie de la grossesse extra-utérine (GEU) :",
    "options": [
      "Elle représente environ 10% de l'ensemble des grossesses.",
      "En Algérie, on estime environ 1 GEU pour 80 naissances.",
      "La fréquence a diminué de moitié ces 15 dernières années.",
      "Elle est responsable de moins de 2% des décès maternels totaux.",
      "Elle survient exclusivement chez les patientes âgées de plus de 35 ans."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : Selon les données du cours, la fréquence en Algérie est d'environ 1 GEU pour 80 naissances. Pourquoi les autres sont fausses ? A) La GEU représente environ 2% des grossesses, pas 10%. C) La fréquence a été multipliée par 2 en 15 ans, en parallèle de l'augmentation du tabagisme et des IST. D) La GEU est responsable de près de 10% des décès maternels totaux (et non 2%). E) Le risque est maximal entre 25 et 35 ans, et aucune tranche d'âge n'est strictement exclue.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-2",
    "courseId": "c-gyn-geu",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les mécanismes physiopathologiques responsables d'une GEU, quelles sont les propositions exactes ?",
    "options": [
      "Un retard de captation ovulaire est impliqué dans 60 à 80% des cas.",
      "L'altération de la motricité tubaire peut être d'origine hormonale ou infectieuse.",
      "La théorie d'IFFY évoque un reflux de l'embryon de la cavité utérine vers la trompe.",
      "La fécondation se fait normalement dans le tiers interne de la trompe.",
      "La déciliation de la muqueuse tubaire fait partie des causes de retard de migration."
    ],
    "correctAnswers": [
      1,
      2,
      4
    ],
    "explanation": "xplication : B) Vrai : Les causes hormonales, mécaniques ou infectieuses (salpingite) altèrent la motricité. C) Vrai : La théorie d'IFFY (reflux tubaire) explique notamment les GEU après AMP. E) Vrai : L'infection entraîne des adhérences, une déciliation et un épaississement de la paroi tubaire. Pourquoi les autres sont fausses ? A) Le retard de migration est impliqué dans 60 à 80% des cas. Le retard de captation ovulaire ne représente que 10 à 20% des cas. D) La fécondation se produit physiologiquement dans le tiers externe (ampoule) de la trompe, et non le tiers interne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-3",
    "courseId": "c-gyn-geu",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Concernant les facteurs de risque de la GEU, choisissez la proposition FAUSSE :",
    "options": [
      "Le tabagisme est le 2ème grand facteur de risque après les altérations tubaires.",
      "La chlamydia trachomatis est le germe infectieux le plus fréquemment incriminé.",
      "La pilule du lendemain (oestroprogestative ou progestative) est un facteur de risque.",
      "Les antécédents de chirurgie pelvienne (ex: appendicectomie) augmentent le risque.",
      "Le dispositif intra-utérin (DIU) prévient de manière absolue la survenue d'une GEU."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "xplication : Le DIU ne prévient pas totalement la grossesse. En cas d'échec du DIU, la grossesse a une probabilité beaucoup plus élevée d'être extra-utérine. Le DIU est d'ailleurs listé dans les facteurs de risque du cours. Les autres propositions sont vraies : Le tabagisme est bien le 2ème facteur, la Chlamydia est le germe le plus fréquent, la pilule du lendemain et les antécédents chirurgicaux sont des facteurs de risque reconnus.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-4",
    "courseId": "c-gyn-geu",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Quelle est la localisation anatomique de la GEU qui présente le plus haut risque de rupture hémorragique massive et précoce ?",
    "options": [
      "La portion ampullaire",
      "La portion pavillonnaire (infundibulaire)",
      "La portion isthmique",
      "La portion interstitielle (cornuale)",
      "La localisation ovarienne"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "xplication : Les GEU interstitielles ou cornuales représentent seulement 2% des cas, mais elles sont redoutables. La rupture est la règle et se produit dans une zone très vascularisée, entraînant les formes les plus hémorragiques. Pourquoi les autres sont fausses ? A) La localisation ampullaire (65%) a une zone large et extensible, les signes cliniques sont tardifs. B) La localisation pavillonnaire ne distend pas la trompe et le risque de rupture est quasi nul. C) L'isthmique (25%) est certes précoce mais la rupture de la portion interstitielle est plus hémorragique. E) La localisation ovarienne est rare et ne présente pas le même profil hémorragique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-5",
    "courseId": "c-gyn-geu",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Parmi les signes cliniques suivants, lequel est le plus fréquemment retrouvé dans une GEU non rompue ?",
    "options": [
      "Une hyperthermie à 38.5°C",
      "Des métrorragies de couleur brune, peu abondantes",
      "Un état de choc hémodynamique",
      "Une défense abdominale généralisée",
      "Un cri de Douglas au toucher vaginal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : Les métrorragies sont présentes dans environ 70% des cas. Elles sont classiquement de couleur brune noirâtre, peu abondantes et récidivantes. Pourquoi les autres sont fausses ? A) La fièvre n'est pas typique (elle orienterait vers une forme pseudo-salpingitique). C) L'état de choc survient dans la forme rompue. D) La défense abdominale est un signe de rupture avec hémopéritoine. E) Le cri de Douglas est un signe de GEU rompue avec volumineux hémopéritoine. La douleur pelvienne est le symptôme le plus fréquent (90%), mais parmi les choix proposés, seules les métrorragies correspondent à la forme non compliquée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-6",
    "courseId": "c-gyn-geu",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant la forme pseudo-salpingitique de la GEU :",
    "options": [
      "Elle associe une douleur pelvienne et une hyperthermie modérée (souvent ≤ 38°C).",
      "Elle se caractérise par une masse latéro-utérine fixée et très douloureuse.",
      "Elle s'accompagne typiquement d'une hyperleucocytose majeure (> 20000).",
      "Elle est souvent bilatérale, ce qui aide au diagnostic différentiel.",
      "Elle peut mimer une salpingite aiguë, d'où la nécessité d'un dosage de β-HCG."
    ],
    "correctAnswers": [
      0,
      1,
      4
    ],
    "explanation": "xplication : A) Vrai : La forme pseudo-salpingitique peut donner une fièvre modérée (38°C) avec hyperleucocytose. B) Vrai : L'examen retrouve une masse latéro-utérine fixée et douloureuse. E) Vrai : C'est un piège classique, il faut doser les β-HCG devant toute suspicion de salpingite chez une femme en âge de procréer. Pourquoi les autres sont fausses ? C) L'hyperleucocytose existe mais n'est pas \"majeure\" typiquement, et l'absence de fièvre élevée/tableau septique franc oriente vers la GEU. D) La GEU est typiquement unilatérale, ce qui permet de la distinguer des salpingites souvent bilatérales.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-7",
    "courseId": "c-gyn-geu",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Une patiente de 30 ans consulte aux urgences pour une douleur pelvienne brutale en coup de poignard, irradiant à tout l'abdomen, avec pâleur et tachycardie. Quel est le diagnostic le plus probable ?",
    "options": [
      "GEU non rompue avec avortement tubo-abdominal",
      "GEU rompue avec hémopéritoine massif",
      "Hématocèle chronique",
      "Kyste ovarien fissuré",
      "Salpingite aiguë bilatérale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : Le tableau clinique décrit est celui d'une rupture cataclysmique avec inondation péritonéale. La douleur brutale \"en coup de poignard\" et les signes de choc (pâleur, tachycardie) sont caractéristiques. Pourquoi les autres sont fausses ? A) L'avortement tubo-abdominal donne des signes d'anémie et de résorption, mais pas un choc brutal immédiat. C) L'hématocèle chronique donne une douleur accentuée à la marche/défécation, pas un choc aigu. D) Le kyste fissuré peut donner une douleur brutale mais l'état de choc est moins fréquent que dans la GEU rompue. E) La salpingite donne une douleur progressive et de la fièvre.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-8",
    "courseId": "c-gyn-geu",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Quel est l'élément le plus important pour le diagnostic d'une GEU lors du dosage des β-HCG ?",
    "options": [
      "La valeur absolue du taux sérique",
      "La cinétique (dédoublement ou non en 48h)",
      "La positivité des β-HCG urinaires",
      "Le taux de progestérone associé",
      "La négativité des β-HCG sériques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : C'est la cinétique qui a un intérêt diagnostique majeur. Un dédoublement normal à 48h évoque une GIU. Une cinétique perturbée (diminution ou élévation de moins de 50%) évoque une GEU. Pourquoi les autres sont fausses ? A) La valeur absolue est utile pour corriger avec l'échographie, mais c'est la cinétique qui prime. C) Les β-HCG urinaires ne sont pas utilisés pour le suivi. D) La progestérone aide mais n'est pas l'élément principal. E) Un β-HCG négatif exclut la grossesse (et donc la GEU), mais ce n'est pas l'élément \"diagnostique\" d'une GEU déjà suspectée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-9",
    "courseId": "c-gyn-geu",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant l'échographie pelvienne dans le diagnostic de la GEU :",
    "options": [
      "La visualisation d'un sac gestationnel intra-utérin permet d'exclure formellement une GEU hétérotopique.",
      "Le \"pseudo-sac\" est centré dans la cavité utérine et dépourvu de couronne trophoblastique.",
      "L'absence de sac gestationnel intra-utérin pour un taux de β-HCG ≥ 1500 UI/ml doit faire évoquer le diagnostic.",
      "Le signe direct est la visualisation d'un sac ectopique avec une activité cardiaque.",
      "La voie sus-pubienne est plus performante que la voie endo-vaginale pour le diagnostic précoce."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "xplication : B) Vrai : Le pseudo-sac est souvent un caillot de sang, sans couronne trophoblastique. C) Vrai : C'est le signe indirect principal (vacuité utérine). D) Vrai : C'est le seul signe direct formel de GEU. Pourquoi les autres sont fausses ? A) La GEU hétérotopique associe une GEU ET une GIU. La présence d'un sac intra-utérin n'exclut pas une GEU concomitante. E) La voie endo-vaginale est plus performante (visible dès 5 SA et un taux ≥ 1000 UI/ml), contrairement à la voie sus-pubienne (5-6 SA, ≥ 1500 UI/ml).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-10",
    "courseId": "c-gyn-geu",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Concernant la cœlioscopie dans la prise en charge de la GEU, choisissez la proposition FAUSSE :",
    "options": [
      "Elle permet de confirmer le diagnostic en visualisant un hématosalpinx.",
      "Elle permet d'effectuer un geste thérapeutique dans le même temps.",
      "L'évaluation de la trompe controlatérale doit être systématique.",
      "Elle est indispensable et doit être réalisée avant tout dosage de β-HCG.",
      "Elle peut aider à évaluer le pronostic de fertilité ultérieure."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "xplication : La cœlioscopie est un examen invasif. Elle n'est pas indispensable pour poser le diagnostic (le couple β-HCG/Échographie est la base) et ne doit certainement pas précéder les dosages biologiques. Elle est indiquée en cas de doute diagnostique ou pour le traitement chirurgical. Les autres propositions sont vraies : Elle confirme le diagnostic, permet le geste thérapeutique, évalue la trompe controlatérale (obligatoire avant tout geste) et aide au pronostic.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-11",
    "courseId": "c-gyn-geu",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Devant des métrorragies du premier trimestre, lequel des diagnostics suivants est le moins probable dans le cadre du diagnostic différentiel d'une GEU ?",
    "options": [
      "Menace d'avortement",
      "Mole hydatiforme",
      "Fibrome utérin en nécrobiose",
      "Avortement en cours",
      "Kyste de l'ovaire"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "xplication : Le diagnostic différentiel des métrorragies inclut la menace d'avortement, l'avortement en cours et la mole hydatiforme. Le kyste de l'ovaire est un diagnostic différentiel devant une masse annexielle. Pourquoi C est le moins probable ? Le fibrome utérin en nécrobiose peut donner des douleurs et des saignements, mais il n'est pas listé parmi les principaux diagnostics différentiels de la GEU dans le cours, contrairement aux trois autres. Il s'agit plus d'une pathologie utérine organique. (N.B: la question cherche le moins probable parmi les choix proposés).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-12",
    "courseId": "c-gyn-geu",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Quelles sont les évolutions possibles d'une GEU non traitée ?",
    "options": [
      "Régression spontanée",
      "Rupture tubaire",
      "Constitution d'un hématosalpinx",
      "Transformation en grossesse intra-utérine",
      "Avortement tubo-abdominal ou hématocèle"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "xplication : A) Vrai : La régression spontanée est possible (notamment si les β-HCG diminuent). B) Vrai : La rupture tubaire est une complication majeure. C) Vrai : L'hématosalpinx est une évolution possible. E) Vrai : L'avortement tubo-abdominal et l'hématocèle (GEU chronique) sont des évolutions possibles. Pourquoi D est fausse ? Une GEU ne peut pas se transformer en grossesse intra-utérine. L'implantation est déjà fixée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-13",
    "courseId": "c-gyn-geu",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Quelle est la condition indispensable pour opter pour une abstention thérapeutique dans la prise en charge d'une GEU ?",
    "options": [
      "Patiente symptomatique avec douleurs pelviennes intenses",
      "Taux de β-HCG décroissant et patiente asymptomatique",
      "Hématosalpinx de 5 cm",
      "Activité cardiaque embryonnaire visible à l'échographie",
      "Hémopéritoine de 200 ml"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : L'abstention thérapeutique est le traitement de référence pour les GEU asymptomatiques avec un taux de β-HCG décroissant. Une surveillance rapprochée des β-HCG toutes les 48h est nécessaire jusqu'à négativation. Pourquoi les autres sont fausses ? A, C, D, E : La présence de symptômes, d'un hématosalpinx important (> 3 cm), d'une activité cardiaque ou d'un hémopéritoine significatif contre-indiquent l'abstention.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-14",
    "courseId": "c-gyn-geu",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Quel est le seuil maximal de β-HCG généralement accepté pour l'indication de première intention du Méthotrexate dans la GEU ?",
    "options": [
      "1000 UI/l",
      "3000 UI/l",
      "5000 UI/l",
      "10000 UI/l",
      "20000 UI/l"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "xplication : Le traitement médical par Méthotrexate (MTX) est indiqué en première intention si le taux de β-HCG est inférieur à 5000 UI/l, si l'état hémodynamique est stable, si l'hématosalpinx est Pourquoi les autres sont fausses ? Au-delà de 5000 UI/l, le risque d'échec du traitement médical est trop élevé, et la chirurgie est privilégiée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-15",
    "courseId": "c-gyn-geu",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Concernant la chirurgie dans la GEU, quelle est la proposition FAUSSE ?",
    "options": [
      "La cœlioscopie est le gold standard car elle est diagnostique et thérapeutique.",
      "La salpingectomie est indiquée en cas de récidive homolatérale de GEU.",
      "La salpingotomie est contre-indiquée chez la patiente jeune désirant une grossesse.",
      "La cœlioscopie réduit le taux d'adhérences par rapport à la laparotomie.",
      "L'expression tubaire est réservée aux GEU pavillonnaires."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "xplication : La salpingotomie est justement une chirurgie conservatrice indiquée chez la patiente jeune désirant une grossesse, à condition que la trompe soit perméable et saine. Les autres sont vraies : La cœlioscopie est le gold standard (moins de morbidité, moins d'adhérences), la salpingectomie est indiquée en cas de récidive ou de saignement incontrôlable, et l'expression tubaire est utilisée pour les GEU pavillonnaires.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-16",
    "courseId": "c-gyn-geu",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Le score de Fernandez permet d'orienter la thérapeutique. Quels éléments font partie de ce score ?",
    "options": [
      "La douleur (spontanée ou provoquée)",
      "L'âge de la patiente",
      "Le taux de β-HCG",
      "La taille de l'hématosalpinx",
      "L'importance de l'hémopéritoine"
    ],
    "correctAnswers": [
      0,
      2,
      3,
      4
    ],
    "explanation": "xplication : Le score de Fernandez prend en compte : la douleur (provoquée/spontanée), l'aménorrhée (Pourquoi B est fausse ? L'âge n'est pas un critère du score de Fernandez.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-17",
    "courseId": "c-gyn-geu",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Le Méthotrexate est contre-indiqué en cas de :",
    "options": [
      "Taux de β-HCG à 4000 UI/l",
      "Hématosalpinx de 2 cm",
      "Anomalie du bilan hépatique ou rénal",
      "Absence d'activité cardiaque",
      "Hémopéritoine minime"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "xplication : Le Méthotrexate est un agent cytotoxique et hépatotoxique. Il est formellement contre-indiqué en cas de perturbation biologique : leucopénie Pourquoi les autres sont fausses ? Un β-HCG à 4000, un hématosalpinx à 2 cm, l'absence d'activité cardiaque et un hémopéritoine minime sont justement des critères d'indication du traitement médical.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-18",
    "courseId": "c-gyn-geu",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Quelle mesure fait partie de la prévention primaire de la GEU ?",
    "options": [
      "Le dépistage précoce des patientes à risque",
      "Le diagnostic précoce de la GEU",
      "Le traitement efficace et rapide des infections génitales",
      "La vigilance lors des chirurgies abdomino-pelviennes",
      "La sélection des indications de la plastie tubaire"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "xplication : La prévention primaire vise à éviter la survenue de la maladie. Le traitement des infections génitales (notamment à Chlamydia) et le dépistage des IST en font partie. Pourquoi les autres sont fausses ? A, B, D, E font partie de la prévention secondaire (dépistage et diagnostic précoce pour limiter les complications).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-19",
    "courseId": "c-gyn-geu",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Concernant le pronostic de la GEU :",
    "options": [
      "La mortalité par GEU reste la 1ère cause de mortalité maternelle au 1er trimestre.",
      "Le pronostic de fertilité est meilleur après un traitement radical.",
      "Une GEU peut compromettre l'avenir obstétrical (stérilité, récidive).",
      "Le traitement conservateur offre un meilleur pronostic de fertilité que le traitement radical.",
      "La GEU est une urgence gynécologique exclusivement diagnostique, pas thérapeutique."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "xplication : A) Vrai : C'est la 1ère cause de mortalité maternelle au premier trimestre. C) Vrai : Elle peut entraîner une stérilité ou des récidives. D) Vrai : Le traitement conservateur (ou médical) préserve mieux la fertilité que la salpingectomie. Pourquoi les autres sont fausses ? B) C'est l'inverse : le pronostic de fertilité est altéré en cas de traitement radical. E) La GEU est une urgence à la fois diagnostique ET thérapeutique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-20",
    "courseId": "c-gyn-geu",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Une hématocèle (GEU chronique) se manifeste cliniquement par :",
    "options": [
      "Un choc hypovolémique immédiat",
      "Une douleur pelvienne accentuée à la marche, à la défécation ou à la miction",
      "Des métrorragies abondantes de sang rouge vif",
      "Un utérus augmenté de volume et mou",
      "Une absence totale de signes cliniques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : L'hématocèle est une collection sanguine intra-péritonéale. Cliniquement, elle se manifeste par une douleur pelvienne accentuée à la marche, à la défécation ou à la miction (signes de compression). Pourquoi les autres sont fausses ? A) C'est une forme chronique, pas une rupture cataclysmique. C) Les métrorragies sont généralement peu abondantes. D) Au TV, on retrouve une masse sensible et volumineuse, le col est plaqué contre la symphyse, l'utérus n'est pas forcément augmenté. E) Il y a des signes de compression et de douleur.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-21",
    "courseId": "c-gyn-geu",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Concernant les signes échographiques, quelle proposition est FAUSSE ?",
    "options": [
      "Le pseudo-sac est souvent un caillot de sang dans la cavité utérine.",
      "La vacuité utérine avec β-HCG ≥ 1500 UI/ml est très évocatrice de GEU.",
      "Le signe direct est la visualisation d'un sac ectopique avec activité cardiaque.",
      "Le pseudo-sac possède une couronne trophoblastique bien visible.",
      "La voie endo-vaginale permet de visualiser un sac plus précocement que la voie sus-pubienne."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "xplication : Le pseudo-sac est dépourvu de couronne trophoblastique (il s'agit souvent de sang ou de sécrétions), contrairement à un véritable sac gestationnel intra-utérin qui possède une double couronne trophoblastique. Les autres propositions sont vraies : Le pseudo-sac est centré dans la cavité, la vacuité utérine est un signe indirect majeur, le signe direct est le sac ectopique avec activité cardiaque, et la voie vaginale est plus précoce.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-22",
    "courseId": "c-gyn-geu",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Parmi les contre-indications de la cœlioscopie dans la GEU, on retrouve :",
    "options": [
      "Un hématosalpinx de 2 cm",
      "Une instabilité hémodynamique avec hémopéritoine important",
      "Un désir de grossesse ultérieur",
      "Une GEU isthmique",
      "Un taux de β-HCG à 2000 UI/l"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : La cœlioscopie augmente la pression intra-abdominale. En cas d'hémopéritoine important avec instabilité hémodynamique (choc), la laparotomie est préférée pour évacuer rapidement le sang et faire l'hémostase. Pourquoi les autres sont fausses ? Un petit hématosalpinx, un désir de grossesse, une GEU isthmique et un taux de 2000 sont des situations où la cœlioscopie est parfaitement indiquée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-23",
    "courseId": "c-gyn-geu",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Quelles sont les indications de la chirurgie radicale (salpingectomie) ?",
    "options": [
      "Patiente ne désirant plus de grossesse",
      "Récidive homolatérale d'une GEU",
      "GEU sur trompe pathologique connue",
      "Saignement incontrôlable lors de la chirurgie",
      "Patiente jeune avec trompe controlatérale saine"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "xplication : La chirurgie radicale (salpingectomie) est indiquée si la patiente ne désire plus de grossesse, en cas de récidive homolatérale, sur trompe pathologique, ou face à un saignement incontrôlable. Pourquoi E est fausse ? Chez une patiente jeune avec une trompe controlatérale saine, on privilégie la chirurgie conservatrice (salpingotomie) pour préserver la fertilité.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-24",
    "courseId": "c-gyn-geu",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Le transport de l'ovocyte vers la trompe est assuré par plusieurs mécanismes. Lequel est le rôle majeur de l'infundibulum ?",
    "options": [
      "La sécrétion d'hormones",
      "La captation de l'ovocyte",
      "La fécondation de l'ovocyte",
      "La nidation de l'œuf",
      "La formation du corps jaune"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "xplication : L'infundibulum (ou pavillon) a pour rôle majeur la captation de l'ovocyte au moment de l'ovulation, grâce aux contractions des fibres musculaires lisses situées dans les ligaments lombo-ovarien, utéro-ovarien et le mésovarium. Pourquoi les autres sont fausses ? La fécondation a lieu dans le tiers externe (ampoule), la nidation dans l'utérus, le corps jaune se forme dans l'ovaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-25",
    "courseId": "c-gyn-geu",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant les localisations de la GEU sont exactes, SAUF :",
    "options": [
      "La localisation ampullaire représente environ 65% des cas.",
      "La localisation isthmique donne des signes cliniques précoces.",
      "La localisation pavillonnaire expose à un risque élevé de rupture tubaire.",
      "La localisation interstitielle est la plus hémorragique.",
      "La grossesse cervicale est rare et de mauvais pronostic."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "xplication : Dans la localisation pavillonnaire (ou infundibulaire), la GEU ne distend pas la trompe et le risque de rupture n'existe pas. Elle expose à un risque d'avortement tubo-abdominal. Les autres propositions sont vraies : L'ampullaire est la plus fréquente (65%), l'isthmique donne des signes précoces (espace restreint), l'interstitielle est la plus hémorragique, et la cervicale est rare et grave.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-26",
    "courseId": "c-gyn-geu",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique N°1]\nContexte : Urgences du CHU de Douéra. Mme B., 28 ans, G2P1, consulte pour des douleurs pelviennes atypiques et des métrorragies brunâtres depuis 3 jours. Dernières règles il y a 6 semaines. Antécédent d'infection à Chlamydia traitée il y a 2 ans. Examen clinique : Constantes normales (TA 120/80, FC 85). Abdomen souple. Au spéculum : col violacé, métrorragies noirâtres. Au TV : utérus de taille normale, sensibilité du cul-de-sac latéral droit avec une petite masse molle indépendante de l'utérus. Biologie : β-HCG sérique à 1800 UI/l.\n\nQuestion : Q1. Quel est votre diagnostic le plus probable ?",
    "options": [
      "Menace d'avortement",
      "GEU non rompue de localisation ampullaire probable",
      "GEU rompue avec hémopéritoine",
      "Salpingite aiguë droite",
      "Kyste ovarien compliqué"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le tableau associe la triade classique : douleur, métrorragies et retard de règles. L'examen retrouve une masse latéro-utérine et une sensibilité du cul-de-sac, sans signes de choc (constantes normales), ce qui oriente vers une GEU non rompue. L'antécédent de Chlamydia est un facteur de risque.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-27",
    "courseId": "c-gyn-geu",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique N°2]\nContexte : EPH de Rouiba. Mme K., 34 ans, G4P3, consulte pour une douleur pelvienne brutale en coup de poignard survenue il y a 1 heure, irradiant à l'épaule droite. Examen clinique : Patiente pâle, sueurs froides. TA 80/50 mmHg, FC 120 bpm. Abdomen : défense généralisée. Au TV : cri de Douglas.\n\nQuestion : Q1. Quel est le diagnostic le plus probable ?",
    "options": [
      "GEU rompue avec hémopéritoine",
      "Rupture d'un kyste ovarien",
      "Appendicite aiguë",
      "GEU interstitielle non rompue",
      "Salpingite aiguë"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La triade : douleur brutale, signes de choc hypovolémique et cri de Douglas signe une GEU rompue avec hémopéritoine massif. La douleur irradiant à l'épaule (signe de Laffont) est typique de l'irritation diaphragmatique par le sang.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-28",
    "courseId": "c-gyn-geu",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique N°3]\nContexte : Consultation de gynécologie (CHU). Mme S., 32 ans, consulte pour suivi de grossesse après FIV (AMP). Elle est à 7 SA. Elle se plaint de douleurs pelviennes modérées. Échographie : Visualisation d'un sac gestationnel intra-utérin avec activité cardiaque. Cependant, à droite, on note une masse latéro-utérine de 2 cm.\n\nQuestion : Q1. Quel diagnostic devez-vous suspecter ?",
    "options": [
      "Grossesse môlaire",
      "GEU hétérotopique",
      "Menace d'avortement",
      "Kyste du corps jaune",
      "Grossesse gémellaire intra-utérine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La GEU hétérotopique est l'association d'une GEU et d'une GIU. Le risque est majoré par les techniques d'AMP (théorie du reflux tubaire d'IFFY). La présence d'un sac intra-utérin n'exclut donc pas formellement une GEU.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-29",
    "courseId": "c-gyn-geu",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique N°4]\nContexte : Urgences Gynécologiques. Mme L., 25 ans, G1P0, consulte pour des métrorragies brunes et une douleur pelvienne modérée évoluant depuis 1 semaine. Dernières règles il y a 8 semaines. Examen : Pas de fièvre, TA 110/70. TV : masse latéro-utérine sensible. Biologie : β-HCG = 800 UI/l. Progestérone = 4 ng/ml. Échographie : Utérus vide, hématosalpinx de 2 cm. Hémopéritoine minime (< 50 ml). Pas d'activité cardiaque.\n\nQuestion : Q1. Quel est le score de Fernandez approximatif de cette patiente ?",
    "options": [
      "Score = 3 (faible)",
      "Score = 12 (modéré)",
      "Score = 15 (élevé)",
      "Score = 20 (très élevé)",
      "Le score ne peut pas être calculé"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La patiente a des critères de gravité modérée (douleur provoquée, β-HCG à 800, progestérone basse, hématosalpinx de 2 cm, hémopéritoine minime). Le score se situe entre 11 et 13, orientant vers un traitement médical.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-geu-30",
    "courseId": "c-gyn-geu",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Algorithme de Prise en Charge]\nContexte : Consultation externe. Mme M., 35 ans, consulte pour une douleur pelvienne chronique accentuée à la défécation, avec des signes de compression. Elle a eu un épisode de douleur aiguë il y a 3 semaines qui s'est estompé. Examen : Au TV, le col est plaqué contre la symphyse pubienne par une masse sensible, volumineuse et mal limitée. La patiente présente un sub-ictère.\n\nQuestion : Q1. Quel diagnostic évoquez-vous en priorité ?",
    "options": [
      "GEU rompue",
      "Hématocèle (GEU chronique)",
      "Avortement tubo-abdominal",
      "Kyste ovarien",
      "Endométriose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hématocèle est une collection sanguine intra-péritonéale qui succède à un hémopéritoine. Cliniquement, elle donne des douleurs à la marche/défécation, des signes de compression, et au TV, un col plaqué contre la symphyse par une masse mal limitée. Le sub-ictère est lié à la résorption sanguine.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-1",
    "courseId": "c-gyn-avortement",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant la menace d'avortement, quelle proposition est exacte ?",
    "options": [
      "AElle se définit par l'expulsion partielle des produits de la conception.",
      "BElle associe des contractions utérines à des saignements susceptibles d'entraver la poursuite de la grossesse.",
      "CL'activité cardiaque fœtale est constamment absente.",
      "DL'orifice interne du col est habituellement dilaté.",
      "ELes douleurs pelviennes sont constamment retrouvées."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Correction & explication Réponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-2",
    "courseId": "c-gyn-avortement",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant les étiologies de la menace d'avortement, quelles sont les réponses exactes ? (2 à 3 réponses)",
    "options": [
      "ALes anomalies chromosomiques dominent les causes ovulaires.",
      "BL'iso-immunisation Rhésus appartient aux causes endocriniennes.",
      "CLes malformations utérines constituent une cause utérine.",
      "DL'herpès, la rubéole et le CMV figurent parmi les causes infectieuses.",
      "ELa grossesse multiple relève des causes immunologiques."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "Correction & explication Réponses : A, C, D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-3",
    "courseId": "c-gyn-avortement",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Chez une patiente consultant pour une menace d'avortement, l'examen clinique retrouve typiquement :",
    "options": [
      "AUn col ouvert laissant sourdre des débris de gestation.",
      "BUn orifice interne fermé, un utérus mou, augmenté de volume en rapport avec l'âge gestationnel, et une sensibilité utérine.",
      "CUn utérus de volume nettement inférieur au terme théorique.",
      "DUn saignement dont l'origine est cervicale et non endo-utérine.",
      "EUne absence totale de sensibilité utérine à la palpation."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Correction & explication Réponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-4",
    "courseId": "c-gyn-avortement",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Concernant l'apport de l'échographie dans la menace d'avortement, quelle proposition est fausse ?",
    "options": [
      "AElle objective la vitalité fœtale.",
      "BElle confirme le siège intra-utérin de la grossesse.",
      "CElle apprécie l'existence et l'étendue du décollement trophoblastique.",
      "DL'absence d'activité cardiaque constitue un critère diagnostique de la menace d'avortement.",
      "EElle permet de suivre l'évolution du décollement sous traitement."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Correction & explication Réponse fausse : D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-5",
    "courseId": "c-gyn-avortement",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "L'évolution favorable d'une menace d'avortement se traduit par : (2 à 3 réponses)",
    "options": [
      "ALe tarissement du saignement.",
      "BL'apparition d'un oligoamnios à l'échographie.",
      "CLa disparition des douleurs.",
      "DLa dilatation progressive de l'orifice interne du col.",
      "ELa disparition du décollement et la normalisation de l'échographie."
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "Correction & explication Réponses : A, C, E",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-6",
    "courseId": "c-gyn-avortement",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Parmi les mesures thérapeutiques suivantes, laquelle n'a pas sa place dans la prise en charge d'une menace d'avortement ?",
    "options": [
      "ALe repos.",
      "BL'acide folique.",
      "CLa progestérone injectable ou intravaginale.",
      "DLe curetage évacuateur systématique.",
      "ELe Spasfon en cas de douleur."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Correction & explication Réponse : D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-7",
    "courseId": "c-gyn-avortement",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant la définition de l'avortement spontané selon l'OMS (1976) sont exactes, SAUF :",
    "options": [
      "AExpulsion spontanée d'un embryon ou d'un fœtus avant qu'il soit viable.",
      "BPoids du produit de conception inférieur à 500 grammes.",
      "CTerme inférieur à 20 semaines de gestation, soit 22 semaines d'aménorrhée.",
      "DCette définition inclut les interruptions volontaires de grossesse.",
      "EEnviron 87 % des avortements surviennent au stade embryonnaire."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Correction & explication Réponse fausse (SAUF) : D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-8",
    "courseId": "c-gyn-avortement",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Concernant la répartition des avortements spontanés selon le stade de développement, quelle proposition est exacte ?",
    "options": [
      "A87 % surviennent au stade fœtal et 13 % au stade embryonnaire.",
      "B87 % surviennent au stade embryonnaire et 13 % au stade fœtal.",
      "CLa répartition est équilibrée : 50 % / 50 %.",
      "D13 % surviennent au stade embryonnaire et 87 % au stade fœtal.",
      "ELa majorité survient après 22 semaines d'aménorrhée."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Correction & explication Réponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-9",
    "courseId": "c-gyn-avortement",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Parmi les entités suivantes, lesquelles appartiennent à la classification évolutive de l'avortement spontané ? (2 à 3 réponses)",
    "options": [
      "ALa grossesse extra-utérine.",
      "BLa menace d'avortement.",
      "CL'avortement inévitable.",
      "DLa mole hydatiforme.",
      "EL'avortement incomplet."
    ],
    "correctAnswers": [
      1,
      2,
      4
    ],
    "explanation": "Correction & explication Réponses : B, C, E",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-10",
    "courseId": "c-gyn-avortement",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Le tableau clinique d'un avortement inévitable associe :",
    "options": [
      "ADes douleurs pelviennes intermittentes, des métrorragies souvent importantes avec caillots, et un orifice interne du col dilaté.",
      "BUn orifice interne fermé et une absence totale de douleur.",
      "CUne cavité utérine vide à l'échographie avec col fermé.",
      "DUn utérus de volume inférieur au terme avec un col fermé.",
      "EUne absence constante de métrorragie."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Correction & explication Réponse : A",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-11",
    "courseId": "c-gyn-avortement",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Concernant l'avortement inévitable, quelle proposition est fausse ?",
    "options": [
      "AL'échographie montre la présence du produit de la grossesse dans la cavité utérine.",
      "BUn oligoamnios peut être observé en cas de rupture des membranes.",
      "CUne quantité plus ou moins importante de caillots sanguins peut être visualisée.",
      "DL'orifice interne du col est constamment fermé.",
      "EIl peut exister un écoulement de liquide amniotique."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Correction & explication Réponse fausse : D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-12",
    "courseId": "c-gyn-avortement",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Concernant l'avortement incomplet, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "AL'expulsion des produits de la grossesse est partielle, le processus d'avortement est inachevé.",
      "BL'utérus est augmenté de taille mais souvent de volume inférieur au terme théorique.",
      "CL'échographie montre une cavité utérine totalement vide.",
      "DL'orifice interne du col est dilaté, avec parfois des débris de gestation.",
      "EAucun geste d'évacuation utérine n'est nécessaire."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Correction & explication Réponses : A, B, D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-13",
    "courseId": "c-gyn-avortement",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "La prise en charge de l'avortement incomplet repose avant tout sur :",
    "options": [
      "AL'abstention thérapeutique avec surveillance simple.",
      "BUn curetage évacuateur rapide.",
      "CLa prescription isolée de progestérone.",
      "DLe repos strict seul.",
      "EUne surveillance échographique différée à un mois."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Correction & explication Réponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-14",
    "courseId": "c-gyn-avortement",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'avortement complet sont exactes, SAUF :",
    "options": [
      "AL'expulsion des produits de la grossesse est complète.",
      "BL'utérus est plus petit que la durée de la grossesse.",
      "CL'orifice cervical peut être fermé.",
      "DL'échographie montre une cavité utérine vide.",
      "EUn curetage évacuateur est systématiquement indiqué."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Correction & explication Réponse fausse (SAUF) : E",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-15",
    "courseId": "c-gyn-avortement",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Devant une cavité utérine échographiquement vide chez une patiente avec aménorrhée et métrorragies, le diagnostic différentiel prioritaire à éliminer est :",
    "options": [
      "ALa grossesse extra-utérine.",
      "BLa mole hydatiforme.",
      "CLe placenta bas inséré.",
      "DLa menace d'avortement.",
      "EL'avortement septique."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Correction & explication Réponse : A",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-16",
    "courseId": "c-gyn-avortement",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Parmi les diagnostics différentiels des métrorragies du premier trimestre, on retient : (2 à 3 réponses)",
    "options": [
      "ALa grossesse extra-utérine.",
      "BLe fibrome utérin.",
      "CLa mole hydatiforme.",
      "DLe placenta bas inséré.",
      "EL'endométriose pelvienne."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "Correction & explication Réponses : A, C, D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-17",
    "courseId": "c-gyn-avortement",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Devant une femme présentant une aménorrhée, des douleurs pelviennes et des métrorragies, quel élément plaide le plus fortement contre une menace d'avortement et pour une grossesse extra-utérine ?",
    "options": [
      "AL'absence de sac intra-utérin à l'échographie endovaginale.",
      "BUn orifice interne du col fermé.",
      "CUn utérus mou et augmenté de volume.",
      "DLa présence de débris dans la cavité utérine.",
      "EL'existence de douleurs pelviennes."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Correction & explication Réponse : A",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-18",
    "courseId": "c-gyn-avortement",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Concernant les douleurs dans la menace d'avortement, quelle proposition est fausse ?",
    "options": [
      "ALes douleurs pelviennes peuvent parfois manquer.",
      "BLes douleurs sont constantes et toujours d'intensité majeure.",
      "CDes contractions utérines accompagnent le tableau.",
      "DLes douleurs peuvent précéder ou accompagner les saignements.",
      "EElles traduisent l'irritation utérine liée au décollement."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Correction & explication Réponse fausse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-19",
    "courseId": "c-gyn-avortement",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Concernant le classement étiologique des menaces d'avortement, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "AL'herpès, la rubéole et le CMV sont des causes infectieuses reconnues.",
      "BLes causes iatrogènes sont possibles et parfois évitables.",
      "CLes malformations utérines constituent des causes iatrogènes.",
      "DL'iso-immunisation Rhésus est une cause infectieuse.",
      "ELes causes ovulaires sont essentiellement chromosomiques."
    ],
    "correctAnswers": [
      0,
      1,
      4
    ],
    "explanation": "Correction & explication Réponses : A, B, E",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-20",
    "courseId": "c-gyn-avortement",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Dans la prise en charge de la menace d'avortement, « agir sur la cause si elle est identifiée » implique notamment :",
    "options": [
      "ALa réalisation d'un curetage systématique.",
      "BLe traitement d'une infection génitale documentée.",
      "CUne antibioprophylaxie aveugle pour toutes les patientes.",
      "DUne aspiration endo-utérine exploratrice.",
      "EUne hystéroscopie diagnostique en urgence."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Correction & explication Réponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-21",
    "courseId": "c-gyn-avortement",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Selon l'OMS (1976), l'avortement spontané correspond à l'expulsion d'un produit de conception :",
    "options": [
      "APesant plus de 500 grammes.",
      "BSurvenant avant 28 semaines d'aménorrhée.",
      "CPesant moins de 500 grammes et/ou survenant avant 20 semaines de gestation (22 SA).",
      "DSurvenant uniquement au stade fœtal.",
      "ESurvenant uniquement après que le fœtus soit devenu viable."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Correction & explication Réponse : C",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-22",
    "courseId": "c-gyn-avortement",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'avortement septique sont exactes, SAUF :",
    "options": [
      "AIl complique souvent un avortement incomplet négligé ou un geste non médicalisé.",
      "BIl s'accompagne de fièvre et de signes infectieux locaux.",
      "CIl expose au risque de choc septique.",
      "DIl impose une antibiothérapie et une évacuation utérine.",
      "EIl relève d'un traitement purement ambulatoire par progestérone."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Correction & explication Réponse fausse (SAUF) : E",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-23",
    "courseId": "c-gyn-avortement",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Quels signes échographiques orientent vers une rétention partielle (avortement incomplet) ? (2 à 3 réponses)",
    "options": [
      "AUn contenu intracavitaire hétérogène et hyperéchogène.",
      "BUne cavité utérine complètement vide.",
      "CUn épaississement de la ligne cavitaire avec matériel résiduel.",
      "DUn sac gestationnel intra-utérin avec activité cardiaque présente.",
      "EUne absence totale d'anomalie échographique."
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Correction & explication Réponses : A, C",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-24",
    "courseId": "c-gyn-avortement",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Concernant le curetage dans la prise en charge des avortements, quelle proposition est fausse ?",
    "options": [
      "AIl est indiqué dans l'avortement incomplet.",
      "BIl est indiqué en cas de rétention de débris de conception.",
      "CIl doit être systématique devant une cavité utérine vide.",
      "DIl expose au risque de synéchies utérines.",
      "EIl doit être précédé d'une évaluation soigneuse du col et de l'utérus."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Correction & explication Réponse fausse : C",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-25",
    "courseId": "c-gyn-avortement",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Concernant la distinction entre menace d'avortement et avortement inévitable, quelles propositions sont exactes ? (2 à 3 réponses)",
    "options": [
      "ADans la menace d'avortement, l'orifice interne du col est fermé.",
      "BDans l'avortement inévitable, l'orifice interne du col est dilaté.",
      "CDans la menace d'avortement, l'échographie montre une cavité utérine vide.",
      "DDans la menace d'avortement, la grossesse est évolutive avec activité cardiaque présente.",
      "EDans l'avortement inévitable, l'expulsion des produits de la conception est déjà complète."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Correction & explication Réponses : A, B, D",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-26",
    "courseId": "c-gyn-avortement",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Métrorragies du premier trimestre aux urgences du CHU — Menace d'avortement]\nIdentité Mme B. K., 28 ans, G2P1, mariée, sans antécédent particulier.\n\nQuestion : Q1. Quel est le diagnostic le plus probable ?",
    "options": [
      "AAvortement inévitable.",
      "BMenace d'avortement.",
      "CAvortement incomplet.",
      "DGrossesse extra-utérine.",
      "EGrossesse arrêtée."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-27",
    "courseId": "c-gyn-avortement",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Métrorragies du premier trimestre aux urgences du CHU — Menace d'avortement]\nIdentité Mme B. K., 28 ans, G2P1, mariée, sans antécédent particulier.\n\nQuestion : Q2. Quel élément échographique est indispensable pour retenir ce diagnostic ?",
    "options": [
      "ALa présence d'un décollement chorial de plus de 10 mm.",
      "BLa présence d'une activité cardiaque fœtale et le siège intra-utérin de la grossesse.",
      "CLa mesure de la longueur cranio-caudale.",
      "DLa présence d'un épanchement dans le cul-de-sac de Douglas.",
      "EL'épaisseur de l'endomètre."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-28",
    "courseId": "c-gyn-avortement",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Métrorragies du premier trimestre aux urgences du CHU — Menace d'avortement]\nIdentité Mme B. K., 28 ans, G2P1, mariée, sans antécédent particulier.\n\nQuestion : Q3. Quelle est la conduite thérapeutique initiale la plus adaptée ?",
    "options": [
      "ACuretage évacuateur en urgence.",
      "BRepos, acide folique, progestérone et antispasmodique, avec recherche et traitement de la cause.",
      "CAntibiothérapie probabiliste à large spectre.",
      "DMéthotrexate en injection intramusculaire.",
      "EOcytociques intraveineux pour accélérer l'expulsion."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-29",
    "courseId": "c-gyn-avortement",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Métrorragies du premier trimestre aux urgences du CHU — Menace d'avortement]\nIdentité Mme B. K., 28 ans, G2P1, mariée, sans antécédent particulier.\n\nQuestion : Q4. Quels signes doivent faire craindre une évolution défavorable lors du suivi ?",
    "options": [
      "ALe tarissement du saignement.",
      "BLa disparition des douleurs pelviennes.",
      "CL'augmentation de l'étendue du décollement, la dilatation cervicale et la majoration des métrorragies.",
      "DLa normalisation de l'aspect échographique.",
      "ELa disparition du décollement à l'échographie de contrôle."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "CorrectionRéponse : C",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-30",
    "courseId": "c-gyn-avortement",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Métrorragies abondantes avec caillots à 13 SA — Avortement inévitable]\nIdentité Mme A. M., 32 ans, G4P2, deux enfants en bonne santé, pas de suivi prénatal régulier.\n\nQuestion : Q1. Quel est le diagnostic ?",
    "options": [
      "AMenace d'avortement.",
      "BAvortement inévitable.",
      "CAvortement complet.",
      "DGrossesse extra-utérine rompue.",
      "EMole hydatiforme."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-31",
    "courseId": "c-gyn-avortement",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Métrorragies abondantes avec caillots à 13 SA — Avortement inévitable]\nIdentité Mme A. M., 32 ans, G4P2, deux enfants en bonne santé, pas de suivi prénatal régulier.\n\nQuestion : Q2. Quel signe clinique fait basculer le diagnostic de la menace vers l'avortement inévitable ?",
    "options": [
      "ALa présence de douleurs pelviennes.",
      "BLa présence de métrorragies.",
      "CLa dilatation de l'orifice interne du col utérin.",
      "DL'utérus augmenté de volume.",
      "EL'absence de fièvre."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "CorrectionRéponse : C",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-32",
    "courseId": "c-gyn-avortement",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Métrorragies abondantes avec caillots à 13 SA — Avortement inévitable]\nIdentité Mme A. M., 32 ans, G4P2, deux enfants en bonne santé, pas de suivi prénatal régulier.\n\nQuestion : Q3. Quels éléments échographiques sont attendus dans cette situation ?",
    "options": [
      "AUne cavité utérine vide.",
      "BLe produit de la grossesse entier dans la cavité utérine, un oligoamnios et des caillots.",
      "CUn sac gestationnel avec activité cardiaque normale.",
      "DUne image en « tempête de neige ».",
      "EUn hématome rétroplacentaire."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-33",
    "courseId": "c-gyn-avortement",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Métrorragies abondantes avec caillots à 13 SA — Avortement inévitable]\nIdentité Mme A. M., 32 ans, G4P2, deux enfants en bonne santé, pas de suivi prénatal régulier.\n\nQuestion : Q4. Quelle est la conduite à tenir ?",
    "options": [
      "ARepos strict et progestérone, avec réévaluation à 48 heures.",
      "BÉvacuation utérine après évaluation du bilan préopératoire et surveillance de l'état hémodynamique.",
      "CAbstention thérapeutique et surveillance ambulatoire.",
      "DMéthotrexate intramusculaire.",
      "EAntibiothérapie orale seule à domicile."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-34",
    "courseId": "c-gyn-avortement",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Expulsion à domicile puis métrorragies persistantes — Avortement incomplet]\nIdentité Mme H. S., 25 ans, G1P0, primigeste.\n\nQuestion : Q1. Quel est le diagnostic le plus probable ?",
    "options": [
      "AMenace d'avortement.",
      "BAvortement inévitable.",
      "CAvortement incomplet.",
      "DAvortement complet.",
      "EGrossesse extra-utérine."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "CorrectionRéponse : C",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-35",
    "courseId": "c-gyn-avortement",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Expulsion à domicile puis métrorragies persistantes — Avortement incomplet]\nIdentité Mme H. S., 25 ans, G1P0, primigeste.\n\nQuestion : Q2. Quelle est la prise en charge adaptée ?",
    "options": [
      "ASurveillance simple avec contrôle échographique à 1 mois.",
      "BCuretage évacuateur rapide, précédé d'une évaluation préopératoire.",
      "CProgestérone intravaginale et repos.",
      "DAntibiothérapie seule.",
      "EOcytociques seuls sans évacuation."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-36",
    "courseId": "c-gyn-avortement",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Expulsion à domicile puis métrorragies persistantes — Avortement incomplet]\nIdentité Mme H. S., 25 ans, G1P0, primigeste.\n\nQuestion : Q3. Quelles complications redoutez-vous en cas d'absence de traitement ?",
    "options": [
      "AHémorragie, infection utérine et synéchies.",
      "BMôle hydatiforme.",
      "CGrossesse extra-utérine.",
      "DPlacenta bas inséré.",
      "EAucune complication n'est à redouter."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "CorrectionRéponse : A",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-37",
    "courseId": "c-gyn-avortement",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cavité utérine vide à 8 SA — Le piège de la grossesse extra-utérine]\nIdentité Mme D. N., 30 ans, G3P2, antécédent de salpingite traitée il y a 3 ans.\n\nQuestion : Q1. Quel diagnostic devez-vous éliminer en priorité ?",
    "options": [
      "AAvortement complet.",
      "BGrossesse extra-utérine.",
      "CMenace d'avortement.",
      "DMôle hydatiforme.",
      "EPlacenta bas inséré."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-38",
    "courseId": "c-gyn-avortement",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cavité utérine vide à 8 SA — Le piège de la grossesse extra-utérine]\nIdentité Mme D. N., 30 ans, G3P2, antécédent de salpingite traitée il y a 3 ans.\n\nQuestion : Q2. Quel examen est le plus contributif pour trancher ?",
    "options": [
      "AUn dosage unique de βhCG.",
      "BUne cinétique des βhCG sériques à 48 heures associée à une échographie endovaginale de suivi.",
      "CUne radiographie d'abdomen sans préparation.",
      "DUn frottis cervico-utérin.",
      "EUne hystéroscopie en urgence."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-39",
    "courseId": "c-gyn-avortement",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cavité utérine vide à 8 SA — Le piège de la grossesse extra-utérine]\nIdentité Mme D. N., 30 ans, G3P2, antécédent de salpingite traitée il y a 3 ans.\n\nQuestion : Q3. Quelle serait l'attitude la plus prudente ?",
    "options": [
      "ARenvoi à domicile avec simple surveillance.",
      "BHospitalisation en milieu gynécologique pour surveillance et exploration, avec élimination formelle de la GEU avant de conclure à un avortement complet.",
      "CCuretage évacuateur immédiat.",
      "DAntibiothérapie orale à domicile.",
      "EOcytociques à domicile."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-40",
    "courseId": "c-gyn-avortement",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Fièvre et métrorragies fétides après avortement non médicalisé — Avortement septique]\nIdentité Mme F. Z., 22 ans, célibataire, sans suivi médical.\n\nQuestion : Q1. Quel est le diagnostic ?",
    "options": [
      "AMenace d'avortement.",
      "BAvortement complet.",
      "CAvortement septique.",
      "DGrossesse extra-utérine.",
      "EMôle hydatiforme infectée."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "CorrectionRéponse : C",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-41",
    "courseId": "c-gyn-avortement",
    "questionNumber": 41,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Fièvre et métrorragies fétides après avortement non médicalisé — Avortement septique]\nIdentité Mme F. Z., 22 ans, célibataire, sans suivi médical.\n\nQuestion : Q2. Quels examens complémentaires sont prioritaires ?",
    "options": [
      "ANFS, CRP, hémocultures, prélèvement bactériologique, bilan hémodynamique et échographie pelvienne.",
      "BUniquement un dosage de βhCG.",
      "CUn frottis cervico-utérin.",
      "DUne hystéroscopie diagnostique.",
      "EUne IRM pelvienne en urgence."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "CorrectionRéponse : A",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-avortement-42",
    "courseId": "c-gyn-avortement",
    "questionNumber": 42,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Fièvre et métrorragies fétides après avortement non médicalisé — Avortement septique]\nIdentité Mme F. Z., 22 ans, célibataire, sans suivi médical.\n\nQuestion : Q3. Quelle est la stratégie thérapeutique ?",
    "options": [
      "ATraitement ambulatoire par progestérone et antalgiques.",
      "BRéanimation hydro-électrolytique et hémodynamique, antibiothérapie parentérale à large spectre, puis évacuation utérine dès stabilisation.",
      "CCuretage immédiat sans stabilisation préalable.",
      "DAntibiothérapie orale isolée à domicile.",
      "ESimple surveillance en attente de l'antibiogramme."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CorrectionRéponse : B",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-1",
    "courseId": "c-gyn-map",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Parmi les propositions suivantes concernant l'accouchement prématuré, laquelle est FAUSSE ?",
    "options": [
      "A Toute naissance se produisant entre 22 et 37 semaines d'aménorrhée révolues",
      "B Il touche environ 7 % des naissances",
      "C Sa fréquence tend à augmenter",
      "D La prématurité spontanée représente 70 à 80 % des cas",
      "E La prématurité induite représente 70 à 80 % des cas"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(proposition fausse) A, B, C, D sont exactes. La définition retenue est bien 22–37 SA révolues ; la prévalence ≈ 7 % et en augmentation ; la prématurité spontanée (précédée d'une MAP) représente 70–80 %. Pourquoi E est fausse : la prématurité induite (extraction pour pathologie materno-fœtale) ne représente que 20 à 30 %. Confondre les deux pourcentages est un piège classique : retenir « 70–80 % = spontanée ».",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-2",
    "courseId": "c-gyn-map",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "La prématurité spontanée est habituellement précédée par :",
    "options": [
      "A Une rupture prématurée des membranes dans 100 % des cas",
      "B Une menace d'accouchement prématuré (MAP)",
      "C Une prééclampsie sévère",
      "D Un hématome rétroplacentaire",
      "E Un diabète gestationnel déséquilibré"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La prématurité spontanée est précédée par une MAP (contractions + modifications cervicales) — c'est le concept clé qui justifie la surveillance prénatale ciblée. Distracteurs : A — la RPM n'est qu'une étiologie parmi d'autres ; C, D, E — ces pathologies relèvent de la prématurité induite (extraction thérapeutique), pas du mécanisme spontané.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-3",
    "courseId": "c-gyn-map",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Parmi les facteurs de risque d'accouchement prématuré liés aux antécédents de la patiente, on retient (2 à 3 réponses) :",
    "options": [
      "A Antécédents d'avortements à répétition",
      "B PMA / grossesses multiples",
      "C Tabagisme",
      "D Multiparité",
      "E Diabète gestationnel"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "ppartiennent au groupe « antécédents de la patiente » : ATCD d'avortements à répétition et d'AP, PMA (grossesses multiples), multiparité, délai court entre grossesses. C (tabagisme) relève du groupe socio-économique et mode de vie. E (diabète gestationnel) relève du groupe pathologie pendant la grossesse. Cette classification en trois groupes est très souvent testée en QCM.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-4",
    "courseId": "c-gyn-map",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Concernant les critères échographiques du col de l'utérus, quel élément n'est PAS un facteur de risque d'accouchement prématuré ?",
    "options": [
      "A Ouverture de l'orifice interne du col de plus de 10 mm",
      "B Protrusion de la poche des eaux dans l'endocol",
      "C Longueur du col inférieure à 30 mm",
      "D Longueur du col supérieure à 40 mm",
      "E Modification de la consistance et de la position du col"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Les critères échographiques de risque sont : ouverture de l'orifice interne > 10 mm, protrusion / funneling, longueur < 30 mm. Un col long (> 40 mm) est au contraire rassurant. A, B, C, E sont des signaux d'alerte reconnus. L'échographie endovaginale (vessie vide) est reproductible et objective.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-5",
    "courseId": "c-gyn-map",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Concernant les inhibiteurs calciques en tocolyse, quelle proposition est FAUSSE ?",
    "options": [
      "A Utilisés en première intention",
      "B Remplacent actuellement les bêta-mimétiques",
      "C Aussi efficaces que les bêta-mimétiques",
      "D Plus d'effets secondaires que les bêta-mimétiques",
      "E La nifédipine est le chef de file (Adalate®)"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "(fausse) Les inhibiteurs calciques ont moins d'effets secondaires que les bêta-mimétiques (céphalées les premiers jours, pas de contre-indication formelle). C'est précisément pourquoi ils sont devenus la 1re intention. D est donc fausse. A, B, C, E sont exactes : nifédipine orale 20 mg / 8h pendant 48h (Adalate®) ou IV (Loxen®).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-6",
    "courseId": "c-gyn-map",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "La corticothérapie anténatale présente des bénéfices nets surtout avant :",
    "options": [
      "A 28 SA",
      "B 32 SA",
      "C 34 SA",
      "D 36 SA",
      "E 37 SA"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Les bénéfices sont nets avant 34 SA : réduction de la mortalité néonatale, de la maladie des membranes hyalines (MMH), de l'hémorragie intraventriculaire et de l'entérocolite ulcéro-nécrosante. Une 2e cure peut être discutée si la patiente redevient symptomatique avant 34 SA, avec un intervalle > 10 jours. Après 34 SA, le bénéfice devient marginal.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-7",
    "courseId": "c-gyn-map",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Parmi les situations suivantes, lesquelles constituent une contre-indication formelle à la tocolyse (2 à 3 réponses) ?",
    "options": [
      "A Hémorragie grave",
      "B Hématome rétroplacentaire (HRP)",
      "C Chorio-amniotite",
      "D MAP à 33 SA avec membranes intactes",
      "E Diabète gestationnel équilibré"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "ontre-indications absolues : hémorragie grave, HRP, souffrance fœtale aiguë ou chronique, chorio-amniotite, mort fœtale in utero, malformation fœtale non viable. D est au contraire l'indication type de la tocolyse (avant 35 SA, membranes intactes). E n'est pas une contre-indication : c'est le bêta-mimétique qui est contre-indiqué en cas de diabète décompensé, pas la tocolyse en général.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-8",
    "courseId": "c-gyn-map",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Le score pronostique de menace d'accouchement prématuré évalue tous les paramètres suivants, SAUF :",
    "options": [
      "A Position du col",
      "B Dilatation du col",
      "C Longueur du col",
      "D Consistance du col",
      "E Poids maternel"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Le score de menace (0–3 par item) évalue : position, dilatation, longueur, consistance du col, station de la présentation, segment inférieur, contractions utérines, état de la poche des eaux. Le poids maternel n'y figure pas — c'est un facteur de risque général (faible poids / carence nutritionnelle), pas un item du score.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-9",
    "courseId": "c-gyn-map",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant la béance cervico-isthmique, quelle proposition est JUSTE ?",
    "options": [
      "A Le diagnostic se fait uniquement pendant la grossesse",
      "B Elle est confirmée hors grossesse par le passage de la bougie de Hégar n° 8 sans ressaut",
      "C Le traitement repose sur un cerclage « à chaud » en urgence",
      "D Elle est toujours d'origine congénitale",
      "E Elle ne récidive jamais après un premier épisode"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La confirmation se fait hors grossesse par calibrage (Hégar n° 8 passant sans ressaut) ou HSG montrant un élargissement du défilé cervico-isthmique (> 8 mm). A : au contraire, il faut la dépister hors grossesse. C : le traitement est le cerclage à froid vers 14 SA, pas à chaud. D : la béance peut être congénitale ou traumatique (curetage, conisation, amputation, déchirures). E : le risque de récidive justifie le cerclage prophylactique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-10",
    "courseId": "c-gyn-map",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Quels sont les effets secondaires classiques des bêta-mimétiques (2 à 3 réponses) ?",
    "options": [
      "A Tachycardie maternelle et fœtale",
      "B Hypokaliémie",
      "C Hyperglycémie",
      "D Bradycardie",
      "E Hypoglycémie"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "ffets secondaires : tachycardie maternelle/fœtale, palpitations, hypotension, hyperglycémie, hypokaliémie, OAP (surtout grossesses multiples). D et E sont l'inverse de la réalité. Ces effets expliquent pourquoi les bêta-mimétiques sont délaissés au profit des inhibiteurs calciques.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-11",
    "courseId": "c-gyn-map",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Concernant l'antibiothérapie dans la prise en charge de la MAP :",
    "options": [
      "A Elle est systématique à membranes intactes",
      "B Elle est systématique et prolongée en cas de RPM",
      "C En cas de RPM, une antibioprophylaxie courte (48 h) est recommandée",
      "D Elle est formellement contre-indiquée en cas de RPM",
      "E Aucun traitement n'est recommandé en cas de portage de streptocoque B"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "n cas de RPM, une antibioprophylaxie courte (48 h) est recommandée par la majorité des équipes. À membranes intactes, pas d'ATB systématique. Il faut en revanche traiter spécifiquement les infections cervico-vaginales (vaginose, trichomonose) et, en cas de portage de Streptococcus B, administrer de l'ampicilline en perpartum pour prévenir l'infection néonatale. A, B, D, E sont donc fausses.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-12",
    "courseId": "c-gyn-map",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Quelle proposition concernant la corticothérapie anténatale est FAUSSE ?",
    "options": [
      "A Elle accélère la maturité pulmonaire fœtale",
      "B Elle réduit la mortalité néonatale",
      "C Elle réduit le risque de maladie des membranes hyalines",
      "D Elle repose sur la bétaméthasone 12 mg/jour pendant 2 jours",
      "E Elle est contre-indiquée chez la diabétique"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(fausse) Il n'existe pas de contre-indication absolue à la corticothérapie anténatale. Chez la diabétique, il faut simplement renforcer la surveillance glycémique (la corticothérapie hyperglycémiante). A, B, C, D sont exactes : accélération de la maturation pulmonaire, réduction de la mortalité, de la MMH, de l'hémorragie intraventriculaire et de l'entérocolite. Bétaméthasone 12 mg/j × 2 j (ou dexaméthasone équivalente), cure unique recommandée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-13",
    "courseId": "c-gyn-map",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Parmi les étiologies maternelles d'accouchement prématuré, on cite (2 à 3 réponses) :",
    "options": [
      "A Infections urinaires hautes ou basses",
      "B Prééclampsie sévère",
      "C Incompatibilité rhésus",
      "D Utérus cloisonné",
      "E Tabagisme"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les causes maternelles générales incluent : infections (systémiques, urinaires, cervico-vaginales — elles augmentent la synthèse des prostaglandines), prééclampsie sévère, incompatibilité rhésus, diabète, cardiopathies. D est une cause utérine (malformation congénitale). E est un facteur socio-économique / mode de vie. Cette distinction par grandes catégories est fréquemment demandée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-14",
    "courseId": "c-gyn-map",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Quelle est la malformation utérine congénitale la plus fréquemment responsable de prématurité ?",
    "options": [
      "A Utérus unicorne",
      "B Utérus bicorne",
      "C Utérus cloisonné",
      "D Utérus hypoplasique",
      "E Utérus didelphe"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'utérus cloisonné représente environ 50 % des malformations utérines et est responsable d'avortements précoces, d'accouchements prématurés et d'avortements tardifs. Le risque de prématurité global des malformations utérines varie de 25 à 50 %. La découverte d'un utérus cloisonné impose une cure chirurgicale par hystéroscopie opératoire sous contrôle échographique. La recherche d'une malformation urinaire associée est systématique (sauf pour l'utérus cloisonné).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-15",
    "courseId": "c-gyn-map",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Pour un fœtus en présentation céphalique, > 32 SA et > 1500 g, la voie d'accouchement recommandée est :",
    "options": [
      "A Césarienne systématique",
      "B Accouchement par voie basse",
      "C Césarienne uniquement si dystocie",
      "D Extraction par forceps systématique",
      "E Extraction par ventouse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La règle du cours : > 32 SA et > 1500 g en présentation céphalique → voie basse. En revanche, entre 28–32 SA (800–1500 g), la voie basse est privilégiée sauf présentation dystocique (→ césarienne). D et E : la ventouse est contre-indiquée chez le prématuré (risque hémorragique cérébral), tandis que le forceps est d'utilisation large. La décision dépend du terme, du poids estimé et de la présentation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-16",
    "courseId": "c-gyn-map",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Concernant les grossesses multiples (2 à 3 réponses) :",
    "options": [
      "A Elles sont responsables de 40 % des accouchements prématurés",
      "B Le risque de prématurité en cas de gémellité est de 40 %",
      "C En cas de triplés, le risque approche 100 % avec un âge critique de 33 SA",
      "D L'âge gestationnel critique en cas de gémellité est 28 SA",
      "E Elles ne constituent pas un facteur de risque de MAP"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les grossesses multiples expliquent 40 % des AP par distension utérine, placenta bas inséré et RPM. Le risque de prématurité est de 40 % en cas de gémellité, proche de 100 % en cas de triplés (âge critique ≈ 33 SA). D : le seuil critique des triplés est 33 SA, pas 28 SA. E : c'est au contraire un facteur majeur — d'où la nécessité d'une bonne gestion des inducteurs de l'ovulation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-17",
    "courseId": "c-gyn-map",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Le seuil pathologique des contractions utérines dans la MAP est :",
    "options": [
      "A Au moins 1 contraction toutes les 10 minutes",
      "B Au moins 1 contraction toutes les 30 minutes",
      "C Au moins 4 contractions par heure",
      "D Au moins 2 contractions toutes les 10 minutes",
      "E Au moins 5 contractions par heure"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "On considère comme pathologique l'existence d'au moins 1 contraction utérine toutes les 10 minutes, à condition qu'elles soient intenses, douloureuses et régulières, retrouvées à l'interrogatoire, à la palpation et à la tocographie. Les autres seuils sont soit trop laxistes (B, C, E), soit trop stricts (D). À ces contractions s'associent les métrorragies brunâtres et/ou un écoulement liquidien (RPM).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-18",
    "courseId": "c-gyn-map",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Concernant l'échographie endovaginale du col, quelle proposition est FAUSSE ?",
    "options": [
      "A Elle est réalisée à vessie vide",
      "B Elle présente une bonne reproductibilité par rapport au toucher vaginal",
      "C Elle permet des mesures objectives et précises",
      "D Une longueur < 30 mm est un critère de risque",
      "E Elle est réalisée à vessie pleine"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(fausse) L'échographie endovaginale du col se fait à vessie vide. La vessie pleine modifie la longueur cervicale et fausse la mesure. A, B, C, D sont exactes : bonne reproductibilité, mesures objectives, longueur < 30 mm = risque, ouverture de l'orifice interne > 10 mm, protrusion de la poche des eaux.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-19",
    "courseId": "c-gyn-map",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Parmi les examens suivants, lesquels font partie du bilan initial de la mère devant une MAP (2 à 3 réponses) ?",
    "options": [
      "A NFS et CRP",
      "B ECBU",
      "C Prélèvement bactériologique endocervical et vaginal",
      "D IRM pelvienne systématique",
      "E Fond d'œil systématique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le bilan maternel comporte : NFS-CRP, ECBU, prélèvement bactériologique endocervical et vaginal, recherche de RPM, dépistage du diabète gestationnel (GP75). D et E ne font pas partie du bilan systématique de MAP. On y ajoute un bilan fœtal (RCF, échographie obstétricale : nombre de fœtus, biométrie, morphologie, LA, placenta).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-20",
    "courseId": "c-gyn-map",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Tous les facteurs suivants favorisent l'accouchement prématuré, SAUF :",
    "options": [
      "A Multiparité",
      "B Tabagisme",
      "C Bas niveau socio-économique",
      "D Suivi prénatal régulier",
      "E Diabète préexistant à la grossesse"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Le suivi prénatal régulier est un facteur protecteur : il permet de repérer les patientes à risque et d'instaurer une prévention. C'est l'un des piliers de la prévention de la prématurité. A, B, C, E sont tous des facteurs de risque reconnus (antécédents, mode de vie, socio-économique, pathologie de la grossesse).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-21",
    "courseId": "c-gyn-map",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Concernant la mortalité néonatale liée à la prématurité :",
    "options": [
      "A Elle est de 22 % à 30 SA",
      "B Elle est de 50 % à 32 SA",
      "C Elle est de 30 % au-delà de 32 SA",
      "D Elle est inférieure à 5 % à 28 SA",
      "E Elle n'est pas liée à l'âge gestationnel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La mortalité néonatale est de 22 % à 30 SA et de 8 % au-delà de 32 SA. Elle est liée à la détresse respiratoire, à l'hémorragie cérébrale et au choc septique. Les autres propositions sont fausses : B (50 % à 32 SA est surestimé), C (30 % au-delà de 32 SA est surestimé), D (faux, la mortalité est bien plus élevée à 28 SA), E (l'âge gestationnel est au contraire le critère pronostique prédominant).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-22",
    "courseId": "c-gyn-map",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Parmi les mesures de prévention de la prématurité (2 à 3 réponses) :",
    "options": [
      "A Dépistage des facteurs de risque de prématurité",
      "B Cerclage du col en cas de béance cervico-isthmique",
      "C Cure chirurgicale de la cloison utérine",
      "D Tabagisme maternel",
      "E Absence de suivi prénatal"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La prévention repose sur : dépistage des facteurs de risque, suivi prénatal régulier, cerclage si béance, cure de cloison utérine, prise en charge adéquate des MAP avec corticothérapie, dépistage et traitement des infections cervico-vaginales et urinaires, bonne gestion des inducteurs de l'ovulation, accès facile aux filières spécialisées. D (tabagisme) et E (absence de suivi) sont des facteurs de risque, pas des mesures de prévention.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-23",
    "courseId": "c-gyn-map",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Concernant l'atosiban, toutes les propositions suivantes sont exactes, SAUF :",
    "options": [
      "A C'est un antagoniste de l'ocytocine",
      "B Il est administré par voie intraveineuse pendant 48 heures",
      "C Il n'a pas de contre-indication sauf l'hypersensibilité au produit",
      "D Les effets indésirables sont peu fréquents (tachycardie, douleurs thoraciques)",
      "E Il est formellement contre-indiqué en cas d'HTA sévère"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "(exception) L'atosiban (Tractocile®) est un antagoniste de l'ocytocine administré par voie IV pendant 48 h, avec peu d'effets indésirables et pas de contre-indication hormis l'hypersensibilité. E est fausse : l'HTA sévère est une contre-indication des bêta-mimétiques, pas de l'atosiban. C'est justement l'un de ses avantages. Ne pas confondre les profils de contre-indications des deux familles.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-24",
    "courseId": "c-gyn-map",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Concernant les AINS utilisés comme tocolytiques :",
    "options": [
      "A Ils sont prescrits en première intention",
      "B Ils inhibent la synthèse des prostaglandines",
      "C Ils n'ont aucun effet indésirable",
      "D Ils sont recommandés en cas d'oligoamnios",
      "E Ils sont recommandés en cas de fermeture prématurée du canal artériel"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les AINS inhibent la synthèse des prostaglandines. Ils ne sont jamais prescrits en 1re intention. Leurs effets indésirables incluent : ulcère gastroduodénal, réaction allergique, fermeture prématurée du canal artériel, oligoamnios. D et E sont donc l'inverse : ces situations sont des effets indésirables des AINS, pas des indications.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-25",
    "courseId": "c-gyn-map",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Lors de l'accouchement par voie basse d'un prématuré (2 à 3 réponses) :",
    "options": [
      "A Le monitorage obstétrical doit être continu (RCF + tocographie)",
      "B L'analgésie péridurale est recommandée",
      "C La ventouse est contre-indiquée",
      "D La femme doit rester en décubitus dorsal strict",
      "E Les ocytociques à forte dose sont recommandés"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "n cas de voie basse : monitorage continu, péridurale recommandée, décubitus latéral gauche (pas dorsal strict), perfusion de G5 %, bonne oxygénation, respect des membranes, correction rapide des anomalies de contractions, ventouse contre-indiquée (forceps d'utilisation large), épisiotomie systématique, pédiatre présent en salle. D : le décubitus latéral gauche est la position recommandée. E : les drogues déprimant les centres respiratoires du nouveau-né (dont les ocytociques à forte dose) sont à éviter.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-26",
    "courseId": "c-gyn-map",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[MAP sur grossesse singleton avec antécédent d'AP]\nMme B., 27 ans, G2P1, à 32 SA, consulte pour contractions utérines douloureuses toutes les 7 minutes depuis 3 heures. ATCD : accouchement prématuré à 34 SA il y a 2 ans.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "A Menace d'accouchement prématuré",
      "B Hématome rétroplacentaire",
      "C Rupture prématurée des membranes",
      "D Chorio-amniotite",
      "E Accouchement prématuré inévitable"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "ontractions > 1/10 min + modifications cervicales (col court, ouvert à 2 cm) + terme < 37 SA = MAP. Il n'y a ni métrorragies (≠ HRP), ni fuite (≠ RPM), ni fièvre (≠ chorioamniotite), et pas encore de dilatation complète (≠ AP inévitable).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-27",
    "courseId": "c-gyn-map",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[MAP sur grossesse singleton avec antécédent d'AP]\nMme B., 27 ans, G2P1, à 32 SA, consulte pour contractions utérines douloureuses toutes les 7 minutes depuis 3 heures. ATCD : accouchement prématuré à 34 SA il y a 2 ans.\n\nQuestion : Quels examens font partie du bilan initial ? (2 à 3 réponses)",
    "options": [
      "A NFS, CRP",
      "B ECBU et prélèvement cervico-vaginal",
      "C Échographie obstétricale + RCF",
      "D IRM pelvienne en urgence",
      "E Amniocentèse diagnostique"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le bilan de MAP comporte : NFS-CRP, ECBU, prélèvements bactériologiques, recherche de RPM, dépistage du diabète gestationnel, et côté fœtal : RCF + échographie obstétricale (nombre de fœtus, biométrie, morphologie, LA, placenta). L'IRM pelvienne et l'amniocentèse ne sont pas des examens de première ligne dans ce contexte.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-28",
    "courseId": "c-gyn-map",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[MAP sur grossesse singleton avec antécédent d'AP]\nMme B., 27 ans, G2P1, à 32 SA, consulte pour contractions utérines douloureuses toutes les 7 minutes depuis 3 heures. ATCD : accouchement prématuré à 34 SA il y a 2 ans.\n\nQuestion : Quelle est la conduite thérapeutique la plus adaptée ?",
    "options": [
      "A Repos seul, pas de traitement médicamenteux",
      "B Hospitalisation + tocolyse par inhibiteur calcique + corticothérapie",
      "C Césarienne en urgence",
      "D Bêta-mimétiques en première intention",
      "E Antibiotiques systématiques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "À 32 SA (< 35 SA) avec MAP, la tocolyse est indiquée : inhibiteur calcique de première intention (nifédipine orale 20 mg/8h × 48h ou Loxen® IV si sévère), associée à la corticothérapie anténatale (bétaméthasone 12 mg/j × 2 j) pour la maturation pulmonaire. A : le repos seul est réservé aux MAP après 35 SA. C : pas d'indication ici. D : les bêta-mimétiques sont délaissés. E : pas d'ATB systématique à membranes intactes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-29",
    "courseId": "c-gyn-map",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[MAP sur grossesse singleton avec antécédent d'AP]\nMme B., 27 ans, G2P1, à 32 SA, consulte pour contractions utérines douloureuses toutes les 7 minutes depuis 3 heures. ATCD : accouchement prématuré à 34 SA il y a 2 ans.\n\nQuestion : Quel critère échographique endovaginal est le plus en faveur d'un risque élevé d'AP ?",
    "options": [
      "A Longueur cervicale > 40 mm",
      "B Longueur cervicale < 30 mm avec funneling",
      "C Col postérieur",
      "D Présentation céphalique",
      "E Placenta fundique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les critères de risque : longueur < 30 mm, ouverture de l'orifice interne > 10 mm, protrusion de la poche des eaux (funneling). L'association col court + funneling est particulièrement péjorative. Un col long, une présentation céphalique et un placenta fundique ne sont pas des critères de risque.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-30",
    "courseId": "c-gyn-map",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Béance cervico-isthmique et avortements tardifs à répétition]\nMme K., 33 ans, G4P1, à 18 SA, consulte pour pesanteur pelvienne et écoulement vaginal clair.\n\nQuestion : Quel est le diagnostic le plus probable ?",
    "options": [
      "A MAP sur grossesse singleton",
      "B Béance cervico-isthmique",
      "C HRP",
      "D Placenta praevia",
      "E Rupture utérine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'ATCD d'avortements tardifs (14–22 SA) avec expulsion facile et rapide d'un fœtus vivant, peu ou pas de contractions, associé à une ouverture cervicale indolore, est caractéristique de la béance cervico-isthmique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-31",
    "courseId": "c-gyn-map",
    "questionNumber": 31,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Béance cervico-isthmique et avortements tardifs à répétition]\nMme K., 33 ans, G4P1, à 18 SA, consulte pour pesanteur pelvienne et écoulement vaginal clair.\n\nQuestion : Comment confirmer le diagnostic en dehors de la grossesse ?",
    "options": [
      "A Échographie abdominale",
      "B Bougie de Hégar n° 8 passant sans ressaut ou HSG montrant un défilé > 8 mm",
      "C Frottis cervico-vaginal",
      "D IRM pelvienne",
      "E Cœlioscopie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La confirmation se fait hors grossesse par calibrage du col (Hégar n° 8 passant sans ressaut) ou par HSG objectivant un élargissement du défilé cervico-isthmique > 8 mm. Les béances dites fonctionnelles ne se révèlent que pendant la grossesse (mesure échographique endovaginale de l'orifice interne).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-32",
    "courseId": "c-gyn-map",
    "questionNumber": 32,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Béance cervico-isthmique et avortements tardifs à répétition]\nMme K., 33 ans, G4P1, à 18 SA, consulte pour pesanteur pelvienne et écoulement vaginal clair.\n\nQuestion : Quelles sont les mesures thérapeutiques adaptées ? (2 à 3 réponses)",
    "options": [
      "A Cerclage à froid vers 14 SA lors d'une grossesse ultérieure",
      "B Repos et surveillance",
      "C Recherche et traitement d'une malformation utérine associée",
      "D Hystérectomie prophylactique",
      "E Cerclage à chaud en urgence à 18 SA avec membranes à plat"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le cerclage à froid vers 14 SA est le traitement de référence et prévient la récidive de l'avortement et de la prématurité. Le repos et la surveillance sont associés. Il faut rechercher une malformation utérine associée (la béance peut être congénitale, associée à des malformations utérines) et une cause traumatique (curetage, conisation, amputation, déchirure). D : disproportionné. E : le cerclage à chaud avec membranes à plat est très risqué (rupture des membranes, chorioamniotite) — ce n'est pas la stratégie recommandée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-33",
    "courseId": "c-gyn-map",
    "questionNumber": 33,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Grossesse gémellaire + MAP + RPM à 30 SA]\nMme T., 30 ans, G2P1, grossesse gémellaire bichoriale biamniotique, à 30 SA. Admise pour RPM depuis 6 h et contractions utérines.\n\nQuestion : Quelles étiologies peuvent expliquer la MAP dans ce contexte ? (2 à 3 réponses)",
    "options": [
      "A Surdistension utérine liée à la gémellité",
      "B Rupture prématurée des membranes",
      "C Placenta bas inséré (fréquent dans les grossesses multiples)",
      "D Insuffisance rénale aiguë maternelle",
      "E Malformation utérine de type utérus cloisonné"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "ns les grossesses multiples : surdistension utérine, placenta bas inséré et RPM sont les mécanismes classiques. La gémellité est responsable d'environ 40 % des AP. D et E ne sont pas les mécanismes en cause ici.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-34",
    "courseId": "c-gyn-map",
    "questionNumber": 34,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Grossesse gémellaire + MAP + RPM à 30 SA]\nMme T., 30 ans, G2P1, grossesse gémellaire bichoriale biamniotique, à 30 SA. Admise pour RPM depuis 6 h et contractions utérines.\n\nQuestion : Quelle est l'attitude antibiotique recommandée ?",
    "options": [
      "A Aucune antibiothérapie",
      "B Antibiothérapie prophylactique courte de 48 h",
      "C Antibiothérapie prolongée jusqu'à l'accouchement",
      "D Antibiothérapie uniquement si fièvre",
      "E Antibiothérapie locale intravaginale seule"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "n cas de RPM, la majorité des équipes recommande une antibioprophylaxie courte de 48 h, pour réduire le risque de chorioamniotite et d'infection néonatale. En cas de portage de Streptococcus B, ampicilline en perpartum.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-35",
    "courseId": "c-gyn-map",
    "questionNumber": 35,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Grossesse gémellaire + MAP + RPM à 30 SA]\nMme T., 30 ans, G2P1, grossesse gémellaire bichoriale biamniotique, à 30 SA. Admise pour RPM depuis 6 h et contractions utérines.\n\nQuestion : Concernant la tocolyse et la corticothérapie :",
    "options": [
      "A Tocolyse et corticothérapie sont indiquées",
      "B La tocolyse est contre-indiquée en cas de RPM",
      "C La corticothérapie est inutile à 30 SA",
      "D Aucune des deux n'est indiquée",
      "E Seule la corticothérapie est indiquée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "À 30 SA (< 34 SA), la corticothérapie anténatale est pleinement indiquée (bénéfices nets avant 34 SA). La tocolyse est également indiquée en l'absence de contre-indication — elle vise à prolonger la grossesse le temps de la maturation pulmonaire (48 h). La RPM n'est pas une contre-indication absolue à la tocolyse tant qu'il n'y a pas de chorioamniotite. La chorioamniotite, en revanche, l'est.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-36",
    "courseId": "c-gyn-map",
    "questionNumber": 36,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Prééclampsie sévère à 31 SA : prématurité induite]\nMme S., 35 ans, G1P0, à 31 SA, admise pour céphalées, barre épigastrique et troubles visuels.\n\nQuestion : Quel est le diagnostic ?",
    "options": [
      "A Prééclampsie non sévère",
      "B Prééclampsie sévère avec HELLP syndrome débutant",
      "C HTA chronique",
      "D Éclampsie",
      "E MAP isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Prééclampsie sévère : TA ≥ 160/110 + protéinurie + signes neurologiques (céphalées, troubles visuels) + barre épigastrique + cytolyse + thrombopénie + hémolyse → tableau de HELLP syndrome débutant. L'éclampsie correspondrait à des convulsions (absentes ici). L'HTA chronique précède la grossesse. La MAP isolée ne rend pas compte du tableau.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-37",
    "courseId": "c-gyn-map",
    "questionNumber": 37,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Prééclampsie sévère à 31 SA : prématurité induite]\nMme S., 35 ans, G1P0, à 31 SA, admise pour céphalées, barre épigastrique et troubles visuels.\n\nQuestion : Quelle est la conduite à tenir ?",
    "options": [
      "A Tocolyse et corticothérapie puis attente à domicile",
      "B Extraction fœtale (césarienne) après stabilisation maternelle et corticothérapie",
      "C Repos strict jusqu'à 37 SA",
      "D Traitement antihypertenseur seul et poursuite de la grossesse",
      "E Cerclage cervical"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "ns la prééclampsie sévère avec HELLP, l'objectif est de faire régresser la pathologie hypertensive et d'éviter ses complications : extraction fœtale après stabilisation maternelle (antihypertenseurs, sulfate de magnésium) et corticothérapie pour maturation pulmonaire (si possible 48 h). La tocolyse et l'attente à domicile exposent à l'éclampsie et au HELLP. Le cerclage n'a aucune place ici.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-38",
    "courseId": "c-gyn-map",
    "questionNumber": 38,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Prééclampsie sévère à 31 SA : prématurité induite]\nMme S., 35 ans, G1P0, à 31 SA, admise pour céphalées, barre épigastrique et troubles visuels.\n\nQuestion : La tocolyse est-elle indiquée dans ce contexte ?",
    "options": [
      "A Oui, en première intention par inhibiteur calcique",
      "B Non, elle est contre-indiquée (souffrance fœtale et pathologie maternelle grave)",
      "C Oui, par bêta-mimétiques",
      "D Oui, mais uniquement par atosiban",
      "E Oui, quel que soit le terme"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La tocolyse est contre-indiquée en cas de souffrance fœtale aiguë ou chronique, d'hémorragie grave, d'HRP, de chorioamniotite, de mort fœtale in utero et de malformation non viable. Ici : prééclampsie sévère + RCF altéré → extraction.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-39",
    "courseId": "c-gyn-map",
    "questionNumber": 39,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[RPM + chorio-amniotite à 33 SA]\nMme A., 24 ans, G3P2, à 33 SA, RPM depuis 48 h. Admise pour fièvre 38,5 °C, tachycardie fœtale à 180 bpm, liquide fétide, hyperleucocytose à 18 000/mm³, CRP à 120 mg/L.\n\nQuestion : Quel est le diagnostic ?",
    "options": [
      "A MAP simple",
      "B Chorio-amniotite",
      "C HRP",
      "D Placenta praevia hémorragique",
      "E Endométrite"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Fièvre + RPM + liquide fétide + tachycardie fœtale + hyperleucocytose + CRP élevée = chorio-amniotite. La chorio-amniotite est suivie d'accouchement prématuré dans près de 100 % des cas.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-40",
    "courseId": "c-gyn-map",
    "questionNumber": 40,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[RPM + chorio-amniotite à 33 SA]\nMme A., 24 ans, G3P2, à 33 SA, RPM depuis 48 h. Admise pour fièvre 38,5 °C, tachycardie fœtale à 180 bpm, liquide fétide, hyperleucocytose à 18 000/mm³, CRP à 120 mg/L.\n\nQuestion : La tocolyse est-elle indiquée ?",
    "options": [
      "A Oui, toujours",
      "B Non, contre-indiquée",
      "C Oui, mais uniquement par atosiban",
      "D Oui, après antibiothérapie",
      "E Oui, si le col est fermé"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La chorio-amniotite est une contre-indication absolue à la tocolyse : le risque infectieux materno-fœtal prime sur le bénéfice de la prolongation de grossesse. L'accouchement doit être envisagé.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-map-41",
    "courseId": "c-gyn-map",
    "questionNumber": 41,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[RPM + chorio-amniotite à 33 SA]\nMme A., 24 ans, G3P2, à 33 SA, RPM depuis 48 h. Admise pour fièvre 38,5 °C, tachycardie fœtale à 180 bpm, liquide fétide, hyperleucocytose à 18 000/mm³, CRP à 120 mg/L.\n\nQuestion : Quelles mesures font partie de la prise en charge ? (2 à 3 réponses)",
    "options": [
      "A Antibiothérapie IV à large spectre",
      "B Extraction fœtale et surveillance rapprochée",
      "C Corticothérapie anténatale si possible",
      "D Tocolyse par inhibiteur calcique",
      "E Repos strict et simple surveillance à domicile"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Prise en charge : antibiothérapie IV à large spectre, extraction fœtale (voie basse ou césarienne selon les conditions), corticothérapie anténatale si elle peut être administrée à temps (33 SA < 34 SA), transfert en maternité de niveau adapté et présence du pédiatre. D : la tocolyse est contre-indiquée en cas de chorio-amniotite. E : danger vital, hospitalisation obligatoire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-1",
    "courseId": "c-gyn-diabete",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant le dépistage du diabète gestationnel au premier trimestre selon les critères IADPSG / OMS, quel seuil de glycémie à jeun permet d'affirmer le diagnostic ?",
    "options": [
      "Glycémie veineuse à jeun ≥ 0,92 g/L (5,1 mmol/L)",
      "Glycémie à jeun ≥ 0,70 g/L",
      "Glycémie à jeun ≥ 1,40 g/L",
      "Glycémie post-prandiale ≥ 0,80 g/L",
      "Glycosurie isolée sans glycémie veineuse"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "u premier trimestre chez une patiente à risque, une glycémie veineuse à jeun entre 0,92 et 1,25 g/L pose le diagnostic de diabète gestationnel. ≥ 1,26 g/L signe un diabète avéré préexistant.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-2",
    "courseId": "c-gyn-diabete",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Quels sont les facteurs de risque justifiant un dépistage ciblé du diabète gestationnel dès la première consultation prénatale ?",
    "options": [
      "Âge maternel ≥ 35 ans",
      "Indice de masse corporelle (IMC) prégestationnel ≥ 25 kg/m²",
      "Antécédent personnel de diabète gestationnel ou de macrosomie fœtale (poids de naissance ≥ 4000 g)",
      "Antécédent de diabète de type 2 chez un apparenté au premier degré",
      "Toutes les propositions sus-citées sont des facteurs de risque reconnus"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "L'âge ≥ 35 ans, le surpoids/obésité, les antécédents familiaux de T2D et personnels de diabète gestationnel ou macrosomie imposent le dépistage.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-3",
    "courseId": "c-gyn-diabete",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Lors de l'HGPO avec 75 g de glucose réalisée entre 24 et 28 SA, quelles sont les valeurs seuils pathologiques (1 seule valeur anormale suffit) ?",
    "options": [
      "À jeun ≥ 0,92 g/L ; à 1 heure ≥ 1,80 g/L ; à 2 heures ≥ 1,53 g/L",
      "À jeun ≥ 1,26 g/L ; à 1 heure ≥ 2,50 g/L ; à 2 heures ≥ 2,00 g/L",
      "À jeun ≥ 0,80 g/L ; à 1 heure ≥ 1,20 g/L ; à 2 heures ≥ 1,00 g/L",
      "À jeun ≥ 1,50 g/L uniquement",
      "À jeun ≥ 2,00 g/L quelle que soit la valeur post-charge"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Seuils IADPSG : T0 ≥ 0,92 g/L, T1h ≥ 1,80 g/L, T2h ≥ 1,53 g/L. Un seul critère au-dessus du seuil affirme le diagnostic de diabète gestationnel.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-4",
    "courseId": "c-gyn-diabete",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "Quels sont les objectifs glycémiques stricts recommandés sous autosurveillance pluriquotidienne au cours de la grossesse diabétique ?",
    "options": [
      "Glycémie à jeun ≤ 0,95 g/L et glycémie 2 heures post-prandiale < 1,20 g/L",
      "Glycémie à jeun ≤ 1,40 g/L et post-prandiale < 2,00 g/L",
      "Glycémie à jeun ≤ 0,50 g/L",
      "Glycémie constante à 2,50 g/L",
      "Aucun objectif chiffré n'est nécessaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Objectifs stricts pour prévenir la macrosomie : ≤ 0,95 g/L à jeun et < 1,20 g/L à 2 heures post-prandiale (ou < 1,40 g/L à 1 heure).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-5",
    "courseId": "c-gyn-diabete",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Quelle complication néonatale majeure immédiate menace le nouveau-né de mère diabétique dans les premières heures suivant l'accouchement ?",
    "options": [
      "L'hypoglycémie néonatale par hyperinsulinisme réactionnel fœtal",
      "L'hyperglycémie maligne cétosique fœtale",
      "La sténose du pylore néonatale",
      "L'atrésie de l'œsophage",
      "La surdité de perception bilatérale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hyperglycémie maternelle stimule le pancréas fœtal (hyperinsulinisme fœtal). À la naissance, l'apport maternel en glucose est coupé alors que l'insuline fœtale reste élevée, provoquant une hypoglycémie précoce sévère.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-6",
    "courseId": "c-gyn-diabete",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Parmi les complications fœtales suivantes, laquelle est spécifiquement attribuable au mauvais équilibre glycémique périconceptionnel du diabète préexistant ?",
    "options": [
      "Malformations congénitales cardiaques (transposition, CIV) et neurologiques (spina bifida, syndrome de régression caudale)",
      "Trisomie 21 par non-disjonction méiotique",
      "Syndrome de Turner 45,X0",
      "Maladie des membranes hyalines du post-terme",
      "Hémophilie A liée à l'X"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hyperglycémie pendant l'organogenèse (T1) est tératogène, multipliant par 3 à 5 le risque de cardiopathies congénitales et d'anomalies du tube neural.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-7",
    "courseId": "c-gyn-diabete",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Quelle complication mécanique redoutée lors de l'accouchement par voie basse d'un fœtus macrosome chez une mère diabétique ?",
    "options": [
      "La dystocie des épaules avec risque d'élongation du plexus brachial (lésion de C5-C6)",
      "La rétention de tête dernière dans la présentation céphalique",
      "L'inversion utérine spontanée à l'engagement",
      "La rupture prématurée de la trompe droite",
      "L'apoplexie utéro-placentaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La macrosomie diabétique prédomine sur le tronc et le diamètre bi-acromial, augmentant le risque d'enclavement des épaules sous la symphyse pubienne.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-8",
    "courseId": "c-gyn-diabete",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Quelle est la mesure thérapeutique de première intention indispensable dès le diagnostic de diabète gestationnel ?",
    "options": [
      "Prise en charge diététique adaptée (1600-2000 kcal/j, fractionnement en 3 repas + 2 collations) et activité physique régulière adaptée",
      "Insulinothérapie intraveineuse à forte dose d'emblée chez toutes les patientes",
      "Prescription de sulfamides hypoglycémiants oraux à forte dose",
      "Déclenchement immédiat du travail quel que soit l'âge gestationnel",
      "Jeûne complet jusqu'au terme"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les règles hygiéno-diététiques normalisent la glycémie dans 70 à 80% des diabètes gestationnels. L'insuline n'est débutée qu'en cas d'échec des objectifs après 7 à 10 jours de diététique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-9",
    "courseId": "c-gyn-diabete",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Les antidiabétiques oraux (metformine, sulfamides) au cours de la grossesse en pratique obstétricale courante de référence :",
    "options": [
      "Sont généralement contre-indiqués ou évités, l'insuline étant le traitement de référence incontesté ne traversant pas la barrière placentaire",
      "Sont le traitement obligatoire de première intention",
      "Sont autorisés uniquement à dose double",
      "Doivent remplacer l'insuline chez les diabétiques de type 1",
      "Sont injectés en intra-amniotique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'insuline humaine ne passe pas la barrière fœto-placentaire et reste le traitement médicamenteux de référence de tout diabète gestationnel ou préexistant non équilibré par le régime.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-10",
    "courseId": "c-gyn-diabete",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Concernant l'hydramnios au cours de la grossesse diabétique, quel est son mécanisme physiopathologique principal ?",
    "options": [
      "Polyurie fœtale induite par l'hyperglycémie et la diurèse osmotique du fœtus",
      "Sécrétion excessive de liquide amniotique par les bronches maternelles",
      "Absence congénitale de déglutition fœtale par atrésie bilatérale des trompes d'Eustache",
      "Rupture de la vessie maternelle dans l'utérus",
      "Transsudation de liquide ascitique maternel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hyperglycémie fœtale entraîne une diurèse osmotique avec polyurie fœtale massive, gonflant le volume du liquide amniotique (index amniotique > 24 cm).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-11",
    "courseId": "c-gyn-diabete",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Quelle cardiopathie hypertrophique fœtale réversible est classiquement observée chez le nouveau-né de mère diabétique mal équilibrée ?",
    "options": [
      "Hypertrophie septale asymétrique sous-aortique",
      "Tétralogie de Fallot complète",
      "Coarctation de l'aorte serrée",
      "Atrésie tricuspide avec tronc artériel commun",
      "Communication inter-auriculaire type ostium secundum"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hyperinsulinisme fœtal stimule la synthèse myocardique et provoque une hypertrophie septale asymétrique qui régresse spontanément en quelques semaines à mois après la naissance.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-12",
    "courseId": "c-gyn-diabete",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Quelle surveillance échographique spécifique est recommandée chez la femme enceinte diabétique au 3ème trimestre ?",
    "options": [
      "Évaluation mensuelle de la biométrie fœtale (diamètre bipariétal, circonférence abdominale CA > 90e percentile) et de la quantité de liquide amniotique",
      "Radiographie du bassin chaque semaine",
      "Échographie des glandes surrénales maternelles",
      "Mesure de la longueur du fémur toutes les 48 heures",
      "Arrêt total des échographies après 28 SA"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La circonférence abdominale (CA) reflète directement la taille hépatique et le dépôt adipeux fœtal sous l'effet de l'insuline fœtale, alertant sur la macrosomie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-13",
    "courseId": "c-gyn-diabete",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "À quel seuil de poids fœtal estimé (PFE) à l'échographie du terme la césarienne prophylactique programmée est-elle recommandée chez la patiente diabétique pour prévenir la dystocie des épaules ?",
    "options": [
      "PFE ≥ 4500 g (ou 4250-4500 g selon les recommandations)",
      "PFE ≥ 3000 g",
      "PFE ≥ 2500 g",
      "PFE ≥ 6000 g uniquement",
      "Le poids fœtal n'a aucune influence sur la voie d'accouchement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "hez la femme diabétique, le risque de dystocie des épaules augmente considérablement dès 4250-4500 g justifiant la proposition d'une césarienne prophylactique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-14",
    "courseId": "c-gyn-diabete",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "Concernant la surveillance du post-partum immédiat chez la patiente ayant présenté un diabète gestationnel pur :",
    "options": [
      "Arrêt immédiat de l'insulinothérapie dès la délivrance et surveillance de la glycémie capillaire",
      "Maintien de l'insuline à double dose pendant 1 an",
      "Interdiction formelle de l'allaitement maternel",
      "Hospitalisation en réanimation pendant 3 semaines",
      "Pose systématique d'une pompe à insuline définitive"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La délivrance du placenta (source d'hormones placentaires hyperglycémiantes comme l'hPL) entraîne une chute brutale de l'insulinorésistance, permettant l'arrêt immédiat de l'insuline.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-15",
    "courseId": "c-gyn-diabete",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Quel test de dépistage à distance de l'accouchement (3 mois du post-partum) doit être prescrit à toute femme ayant eu un diabète gestationnel ?",
    "options": [
      "Une glycémie à jeun ou une HGPO 75g pour dépister un diabète de type 2 ou une intolérance au glucose persistante",
      "Une scintigraphie des îlots de Langerhans",
      "Une biopsie pancréatique par laparotomie",
      "Un scanner cérébral avec perfusion",
      "Une coronarographie sélective"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les femmes ayant eu un diabète gestationnel ont un risque de 50% de développer un diabète de type 2 dans les 10 à 20 ans, justifiant une HGPO à 3 mois puis un contrôle annuel.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-16",
    "courseId": "c-gyn-diabete",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Quelle hormone placentaire principale est responsable du pic d'insulinorésistance maternelle physiologique au 2ème et 3ème trimestre ?",
    "options": [
      "L'hormone lactogène placentaire (hPL ou hCS)",
      "La thyréostimuline hypophysaire (TSH)",
      "L'hormone antidiurétique (ADH)",
      "L'érythropoïétine placentaire",
      "La parathormone (PTH)"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hPL, la progestérone, le cortisol et l'œstriol créent une insulinorésistance périphérique physiologique pour détourner le glucose vers la croissance fœtale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-17",
    "courseId": "c-gyn-diabete",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Dans le diabète prégestationnel mal équilibré, quel est le risque placentaire et vasculaire maternel accru au 3ème trimestre ?",
    "options": [
      "Prééclampsie et hypertension artérielle gravidique",
      "Cancer du placenta",
      "Hypotension artérielle chronique orthostatique sans protéinurie",
      "Insuffisance surrénalienne aiguë",
      "Kyste de l'ovaire géant"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le diabète préexistant avec vasculopathie multiplie par 3 à 4 le risque de prééclampsie, de retard de croissance intra-utérin vasculaire et d'hématome rétroplacentaire.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-18",
    "courseId": "c-gyn-diabete",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Quelle anomalie hématologique néonatale fréquente résulte de l'hypoxie tissulaire chronique chez le fœtus de mère diabétique mal équilibrée ?",
    "options": [
      "Polyglobulie néonatale (hématocrite > 65%) avec risque d'hyperviscosité et d'ictère à bilirubine libre",
      "Aplasie médullaire néonatale aiguë",
      "Agranulocytose congénitale pure",
      "Thrombocytémie essentielle clonale",
      "Anémie hémolytique auto-immune à anticorps chauds"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hyperglycémie et l'hyperinsulinisme fœtal majorent la consommation d'O2 fœtale, stimulant l'érythropoïétine fœtale avec polyglobulie et ictère néonatal précoce.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-19",
    "courseId": "c-gyn-diabete",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Chez une diabétique de type 1 envisageant une grossesse, quelle valeur cible d'hémoglobine glyquée (HbA1c) périconceptionnelle est recommandée ?",
    "options": [
      "HbA1c < 6,5% (idéalement < 6,0%) sans hypoglycémies sévères",
      "HbA1c entre 9% et 12%",
      "HbA1c > 14%",
      "L'HbA1c n'a aucune valeur d'évaluation",
      "HbA1c à 0%"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Obtenir une HbA1c < 6,5% en période périconceptionnelle ramène le taux de malformations congénitales proches de celui de la population générale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-20",
    "courseId": "c-gyn-diabete",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Quel est l'effet de l'allaitement maternel chez la patiente diabétique de type 1 dans le post-partum ?",
    "options": [
      "Il diminue les besoins en insuline exogène et expose au risque d'hypoglycémies maternelles si les apports glucidiques ne sont pas augmentés",
      "Il double immédiatement les besoins en insuline",
      "Il est formellement contre-indiqué car le lait est toxique",
      "Il supprime totalement le diabète de type 1 à vie",
      "Il induit un coma acido-cétosique immédiat"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'allaitement consomme du glucose pour la synthèse du lactose, réduisant les besoins insuliniques maternels de 20 à 30% et exigeant une collation avant chaque tétée.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-21",
    "courseId": "c-gyn-diabete",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Concernant la détresse respiratoire néonatale chez le nouveau-né de mère diabétique, quel mécanisme est en cause ?",
    "options": [
      "Retard de maturation du surfactant alvéolaire pulmonaire lié à l'effet inhibiteur de l'hyperinsulinisme sur les pneumocytes de type II",
      "Absence congénitale des deux poumons",
      "Inhalation systématique de liquide méconial",
      "Sténose trachéale membraneuse",
      "Emphysème sous-cutané spontané"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'insuline inhibe la synthèse du surfactant médiée par les corticoïdes fœtaux, favorisant la maladie des membranes hyalines même à terme proche.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-22",
    "courseId": "c-gyn-diabete",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Quelle malformation squelettique caudale rare mais hautement spécifique du diabète maternel très déséquilibré ?",
    "options": [
      "Syndrome de régression caudale (agénésie sacrée avec hypoplasie des membres inférieurs)",
      "Luxation congénitale de hanche unilatérale",
      "Pied bot varus équin isolé",
      "Polydactylie pré-axiale",
      "Craniosténose scaphoïde"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le syndrome de régression caudale est exceptionnel dans la population générale mais multiplié par 200 à 400 chez les mères diabétiques sévèrement déséquilibrées au premier trimestre.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-23",
    "courseId": "c-gyn-diabete",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Quel est le risque majeur d'un diabète de type 1 déséquilibré aigu pendant le deuxième ou troisième trimestre pour le fœtus ?",
    "options": [
      "Mort fœtale in utero (MFIU) brutale par acidose lactique fœtale et hypoxie sévère",
      "Développement précoce d'une intelligence supérieure",
      "Infection à CMV congénitale",
      "Mutation génétique trisomique de novo",
      "Fusion des deux reins en fer à cheval"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'acidocétose maternelle s'accompagne d'une acidose fœtale grave avec un risque d'arrêt cardiaque fœtal et de MFIU de 10 à 30%.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-24",
    "courseId": "c-gyn-diabete",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "Dans le cadre de la surveillance du diabète gestationnel sous insuline, quel rythme de surveillance du bien-être fœtal est préconisé à partir de 36-38 SA ?",
    "options": [
      "Enregistrement cardiotocographique (RCF) hebdomadaire ou bimensuel et profil biophysique de Manning",
      "Aucune surveillance jusqu'au terme de 42 SA",
      "Biopsie de trophoblaste hebdomadaire",
      "Amniocentèse systématique toutes les 48 heures",
      "Radiographie du crâne fœtal"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Surveillance renforcée du RCF et de la quantité de liquide amniotique au 9ème mois pour dépister une défaillance placentaire ou une souffrance fœtale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-25",
    "courseId": "c-gyn-diabete",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Quelle supplémentation vitaminique périconceptionnelle à forte dose (5 mg/jour) est recommandée chez la femme diabétique de type 1 ou 2 ?",
    "options": [
      "Acide folique (vitamine B9) débuté au moins 1 mois avant la conception pour prévenir les anomalies de fermeture du tube neural",
      "Vitamine A à forte dose",
      "Vitamine D à dose toxique",
      "Vitamine K1 intraveineuse quotidienne",
      "Aucune vitamine n'est utile"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La dose d'acide folique recommandée chez les femmes diabétiques à haut risque d'anomalies de fermeture du tube neural est de 5 mg/jour (au lieu de 0,4 mg/jour).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-26",
    "courseId": "c-gyn-diabete",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Cas Clinique N°1 : Dépistage du diabète gestationnel au premier trimestre]\nPatiente de 36 ans, G2P1 (premier enfant pesait 4200 g à terme), IMC prégestationnel à 29 kg/m². À 10 SA, la glycémie veineuse à jeun revient à 1,02 g/L.\n\nQuestion : Question : Quelle est votre interprétation et quelle attitude médicale immédiate adoptez-vous ?",
    "options": [
      "Diabète gestationnel confirmé (seuil ≥ 0,92 g/L) ; mise en place immédiate de règles hygiéno-diététiques avec autosurveillance glycémique capillaire 6 fois par jour.",
      "Glycémie normale pour la grossesse ; aucun suivi particulier.",
      "Diabète de type 1 décompensé imposant une dialyse péritonéale d'urgence.",
      "Prescription immédiate d'antidiabétiques oraux à dose maximale.",
      "Interruption médicale de grossesse obligatoire."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La glycémie à jeun de 1,02 g/L au 1er trimestre chez une patiente à risque affirme le diabète gestationnel. Première étape : diététique et autosurveillance.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-27",
    "courseId": "c-gyn-diabete",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Cas Clinique N°2 : Échec des mesures hygiéno-diététiques et indication d'insuline]\nPatiente de 31 ans suivie pour diabète gestationnel depuis 2 semaines. Malgré un régime diététique bien conduit de 1800 kcal/j, ses glycémies à jeun restent entre 1,05 et 1,15 g/L et ses post-prandiales à 1,35 g/L.\n\nQuestion : Question : Quelle modification thérapeutique s'impose ?",
    "options": [
      "Introduction d'une insulinothérapie sous-cutanée (schéma basal-bolus ou insuline basale au coucher) adaptée aux glycémies capillaires.",
      "Jeûne hydrique strict sans aucun glucide pendant 10 jours.",
      "Prescription de glibenclamide à forte dose.",
      "Césarienne d'urgence à 26 SA.",
      "Arrêt de tout contrôle glycémique."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'échec des objectifs glycémiques (à jeun ≤ 0,95 g/L) après 7-10 jours de régime bien suivi pose l'indication formelle de l'insulinothérapie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-28",
    "courseId": "c-gyn-diabete",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Cas Clinique N°3 : Suspicion de macrosomie fœtale à 36 SA]\nFemme de 33 ans, diabète gestationnel sous insuline. Échographie à 36 SA : circonférence abdominale fœtale au-delà du 95ème percentile, poids fœtal estimé à 3700 g, index amniotique à 22 cm.\n\nQuestion : Question : Quelle conduite obstétricale devez-vous programmer pour le terme ?",
    "options": [
      "Surveillance fœtale rapprochée (RCF 2 fois/semaine) ; réévaluation échographique du poids fœtal à 38-39 SA et discussion de césarienne programmée si PFE ≥ 4500 g.",
      "Déclenchement immédiat dans l'heure par voie haute sans surveillance.",
      "Imposition d'une césarienne quel que soit le poids estimé.",
      "Administration d'un bolus de glucose hypertonique à la mère.",
      "Extraction instrumentale par forceps à domicile."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La surveillance du bien-être fœtal et l'estimation pondérale guident la voie d'accouchement pour éviter la dystocie des épaules.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-29",
    "courseId": "c-gyn-diabete",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Cas Clinique N°4 : Prise en charge néonatale immédiate d'un nouveau-né macrosome]\nNouveau-né de mère diabétique né par voie basse à 39 SA, poids de naissance 4350 g, Apgar 9 à 1 min et 10 à 5 min. À H1 de vie, le nouveau-né est trémulant et somnolent.\n\nQuestion : Question : Quelle complication néonatale devez-vous rechercher et traiter en urgence ?",
    "options": [
      "Hypoglycémie néonatale précoce ; contrôle immédiat de la glycémie capillaire et alimentation précoce (sein ou lait maternisé) ou perfusion de glucosé 10% si sévère.",
      "Fracture isolée du sternum.",
      "Méningite bactérienne foudroyante.",
      "Hémorragie cérébro-méningée spontanée.",
      "Péritonite méconiale."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hyperinsulinisme fœtal réactionnel provoque une hypoglycémie néonatale symptomatique précoce nécessitant glycémie immédiate et resucrage rapide.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-diabete-30",
    "courseId": "c-gyn-diabete",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Cas Clinique N°5 : Post-partum et suivi à distance du diabète gestationnel]\nPatiente de 32 ans qui a accouché hier à terme d'un garçon de 3800 g. Son diabète gestationnel avait nécessité 20 UI d'insuline par jour au 3ème trimestre. Elle allaite exclusivement.\n\nQuestion : Question : Quelle est la conduite à tenir thérapeutique en maternité et à 3 mois du post-partum ?",
    "options": [
      "Arrêt immédiat de l'insuline dès la délivrance, contrôle glycémique capillaire avant la sortie, et prescription d'une HGPO 75g de contrôle à 3 mois du post-partum.",
      "Maintien de l'insuline à la même dose pendant 2 ans.",
      "Contre-indication de l'allaitement maternel.",
      "Prescription de metformine à vie sans bilan.",
      "Aucun suivi à distance."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La chute des hormones placentaires guérit immédiatement le diabète gestationnel dans la majorité des cas, justifiant l'arrêt de l'insuline et un dépistage à distance du T2D.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-1",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 1,
    "type": "QCM",
    "questionText": "Concernant la définition de l'accouchement, quelle est la proposition la plus exacte ?",
    "options": [
      "L'ensemble des phénomènes hormonaux aboutissant à la sortie du fœtus",
      "L'ensemble des phénomènes physiologiques mécaniques et dynamiques aboutissant à la sortie du fœtus et de ses annexes hors des voies génitales maternelles",
      "Uniquement l'expulsion du fœtus hors de l'utérus",
      "L'ensemble des phénomènes aboutissant à la sortie du placenta et des membranes",
      "Un processus exclusivement dynamique sous l'influence des contractions utérines"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La définition officielle retient la dualité mécanique (franchissement de la filière pelvi-génitale) et dynamique (moteur utérin) de l'accouchement, incluant fœtus + annexes.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-2",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 2,
    "type": "QCM",
    "questionText": "Parmi les éléments en présence lors de l'accouchement, quels sont les éléments dynamiques et statiques correctement appariés ?",
    "options": [
      "Le corps utérin représente le moteur de l'accouchement par sa contractilité",
      "Le bassin osseux constitue l'élément statique formant le canal pelvi-génital",
      "Le segment inférieur est le siège principal de la contraction utérine",
      "Le col utérin se caractérise par l'effacement et la dilatation",
      "Les parties molles sont des éléments dynamiques du travail"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Le corps utérin est le moteur (contractilité), le bassin l'élément statique (canal), et le col subit effacement puis dilatation.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-3",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 3,
    "type": "QCM",
    "questionText": "Concernant la présentation du sommet, quelle affirmation est exacte ?",
    "options": [
      "Elle représente environ 4 % des accouchements",
      "Elle correspond à une tête en légère déflexion",
      "L'occiput est le repère de la présentation du sommet",
      "Elle est définie par le front comme repère principal",
      "Elle est plus fréquente en présentation du siège qu'en céphalique"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La présentation du sommet est une présentation de la tête fléchie, dont le repère est l'occiput. Elle représente 95 % des accouchements.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-4",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 4,
    "type": "QCM",
    "questionText": "L'engagement fœtal se fait le plus souvent selon quel diamètre du détroit supérieur, et dans quelle variété ?",
    "options": [
      "Diamètre antéro-postérieur, en OIGA",
      "Diamètre oblique, en OIGA (57 %)",
      "Diamètre transverse, en OIDP",
      "Diamètre oblique, en OIDP (57 %)",
      "Diamètre sagittal, en OIGP"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le détroit supérieur a une forme en cœur de carte à jouer (saillie du promontoire), imposant un engagement dans un diamètre oblique. La dextrorotation utérine privilégie le diamètre oblique gauche : OIGA ≈ 57 %, OIGP ≈ 33 %, OIDP ≈ 6 %, OIDA ≈ 4 %.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-5",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 5,
    "type": "QCM",
    "questionText": "Concernant le bassin obstétrical, quelles propositions sont exactes ?",
    "options": [
      "Le détroit supérieur sépare le grand et le petit bassin",
      "Le détroit supérieur est limité en arrière par le promontoire",
      "Le détroit inférieur dessine un triangle osseux à sommet postérieur",
      "L'excavation pelvienne a la forme d'un cylindre incurvé (segment de tore)",
      "Le dégagement est possible dans tout diamètre du détroit inférieur"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Le DS sépare grand et petit bassin, limité en arrière par le promontoire, en avant par le bord supérieur de la symphyse pubienne, latéralement par les lignes innominées. L'excavation est un cylindre incurvé (Hodge).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-6",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 6,
    "type": "QCM",
    "questionText": "Concernant la délivrance, quelle proposition est fausse ?",
    "options": [
      "Elle comporte le décollement placentaire par hématome rétro-placentaire physiologique",
      "Elle survient normalement dans les 30 minutes suivant la naissance",
      "L'hémostase est assurée d'abord par la rétraction utérine",
      "L'atonie utérine est sans conséquence sur le risque hémorragique",
      "La rétention placentaire partielle peut être responsable d'hémorragie"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "L'atonie utérine est une cause majeure d'hémorragie de la délivrance : le muscle utérin ne collabe plus les vaisseaux.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-7",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 7,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant les types d'accouchement sont exactes, SAUF :",
    "options": [
      "Un accouchement avant 37 SA est dit prématuré",
      "Un accouchement entre 37 et 42 SA est dit à terme",
      "Un accouchement provoqué nécessite une intervention externe",
      "L'accouchement eutocique correspond à une perturbation de la physiologie",
      "L'accouchement dirigé fait appel à des médicaments"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "(proposition fausse) L'accouchement eutocique suit un déroulement physiologique normal ; c'est l'accouchement dystocique qui correspond à une perturbation de la physiologie.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-8",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 8,
    "type": "QCM",
    "questionText": "Concernant la mécanique obstétricale, quelles propositions sont exactes ?",
    "options": [
      "L'engagement correspond au franchissement du détroit supérieur",
      "La descente et la rotation intra-pelvienne sont des temps obligatoires",
      "Le dégagement se fait habituellement en variété postérieure",
      "La rotation intra-pelvienne est nécessaire car l'engagement se fait en oblique et le dégagement en sagittal",
      "L'engagement se fait toujours en OIDA"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "L'engagement = franchissement du DS. La rotation intra-pelvienne est une obligation mécanique (oblique → sagittal). Le dégagement se fait presque toujours en OP (occipito-pubien).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-9",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 9,
    "type": "QCM",
    "questionText": "Concernant la rotation intra-pelvienne, quelle affirmation est exacte ?",
    "options": [
      "Les variétés postérieures effectuent une rotation de 45°",
      "Les variétés antérieures effectuent une rotation de 135°",
      "Les variétés postérieures nécessitent une grande rotation de 135°, souvent plus laborieuse",
      "La rotation se fait toujours vers l'arrière",
      "La rotation est facultative car le dégagement peut se faire en oblique"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Les variétés antérieures (OIGA, OIDA) font une petite rotation de 45° ; les postérieures (OIDP, OIGP) doivent effectuer une grande rotation de 135°, plus laborieuse. La rotation se fait presque toujours vers l'avant.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-10",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 10,
    "type": "QCM",
    "questionText": "Le signe de FARABEUF, signe essentiel du diagnostic d'engagement, consiste à :",
    "options": [
      "Palper l'occiput au niveau du détroit supérieur",
      "Introduire deux doigts intra-vaginaux vers la 2ᵉ vertèbre sacrée, arrêtés par la tête fœtale",
      "Mesurer la hauteur utérine",
      "Évaluer la dilatation cervicale à 10 cm",
      "Palper la pointe du coccyx"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le signe de Farabeuf : deux doigts intra-vaginaux dirigés vers la 2ᵉ vertèbre sacrée rencontrent la tête fœtale et sont arrêtés par elle.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-11",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 11,
    "type": "QCM",
    "questionText": "Concernant les variétés d'engagement, quelles propositions sont exactes ?",
    "options": [
      "OIGA est la variété la plus fréquente (57 %)",
      "OIGP représente environ 33 % des engagements",
      "OIDP est plus fréquente qu'OIGA",
      "La dextrorotation de l'utérus gravide favorise le diamètre oblique gauche",
      "OIDA est la variété la plus fréquente"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "La dextrorotation utérine favorise le diamètre oblique gauche : OIGA 57 %, OIGP 33 %, OIDP 6 %, OIDA 4 %.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-12",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 12,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant l'utérus gravide sont exactes, SAUF :",
    "options": [
      "Le corps utérin est le moteur de l'accouchement",
      "Le segment inférieur est une zone de distension",
      "Le col utérin subit effacement puis dilatation jusqu'à 10 cm",
      "Les ligaments ronds sont atrophiés chez la femme enceinte",
      "L'utérus gravide est dextroroté"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Les ligaments ronds sont hypertrophiés (et non atrophiés) pendant la grossesse.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-13",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 13,
    "type": "QCM",
    "questionText": "Concernant le dégagement des épaules, quelle proposition est fausse ?",
    "options": [
      "C'est un temps critique de l'accouchement",
      "L'opérateur saisit la tête entre le menton et le sous-occiput",
      "On dégage d'abord l'épaule antérieure sous la symphyse pubienne",
      "On redresse progressivement l'axe de traction vers le haut pour dégager l'épaule postérieure",
      "Il est sans risque périnéal et se fait toujours en un seul temps"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Le dégagement des épaules est un temps critique avec risque périnéal et risque de dystocie des épaules.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-14",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 14,
    "type": "QCM",
    "questionText": "La dextrorotation de l'utérus gravide explique principalement :",
    "options": [
      "La fréquence de l'engagement en OIGA",
      "La fréquence du siège",
      "La grande rotation de 135°",
      "Le dégagement en OP",
      "L'atonie utérine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La face antérieure de l'utérus regarde en avant et à droite (dextrorotation), ce qui favorise l'utilisation du diamètre oblique gauche et donc l'engagement en OIGA (57 %).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-15",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 15,
    "type": "QCM",
    "questionText": "Concernant l'hémorragie de la délivrance, quelles propositions sont exactes ?",
    "options": [
      "Le risque est fréquent (3–4,5 % d'hémorragie > 500 ml)",
      "Une rétention placentaire partielle peut en être responsable",
      "L'atonie utérine est une cause possible",
      "En l'absence de décollement à 30 min, une délivrance artificielle doit être réalisée en urgence",
      "La surveillance maternelle en salle de naissance doit être d'au moins 30 minutes"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "L'hémorragie de la délivrance est fréquente (3–4,5 %), favorisée par la rétention et l'atonie. En l'absence de décollement à 30 min, la délivrance artificielle est urgente. La surveillance est d'au moins 2 heures.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-16",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 16,
    "type": "QCM",
    "questionText": "Concernant le détroit supérieur, quelle affirmation est exacte ?",
    "options": [
      "Il a une forme ovalaire régulière",
      "Sa saillie du promontoire lui confère une forme en cœur de carte à jouer",
      "Il est limité en avant par la pointe du coccyx",
      "Il autorise un engagement dans tous les diamètres",
      "Il sépare le petit bassin des parties molles"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La saillie du promontoire donne au DS une forme en cœur de carte à jouer, imposant un engagement en diamètre oblique.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-17",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 17,
    "type": "QCM",
    "questionText": "Le dégagement fœtal se fait habituellement :",
    "options": [
      "En variété postérieure, par flexion",
      "En variété occipito-pubienne (OP), par un mouvement de déflexion",
      "En transverse, par rotation externe",
      "En OIGA, par extension",
      "Uniquement après rotation de 135°"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le dégagement se fait presque toujours en OP : la région sous-occipitale se fixe sous la symphyse pubienne, et la tête se dégage par déflexion.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-18",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 18,
    "type": "QCM",
    "questionText": "Les éléments du pronostic de l'accouchement dépendent de :",
    "options": [
      "Du fœtus (poids et position)",
      "Du bassin",
      "De la dynamique utérine (contractions)",
      "De la couleur des yeux de la mère",
      "De la longueur des cheveux du nouveau-né"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Le pronostic repose sur le fœtus, le bassin et la dynamique utérine.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-19",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 19,
    "type": "QCM",
    "questionText": "Toutes les propositions suivantes concernant les présentations céphaliques sont exactes, SAUF :",
    "options": [
      "La présentation du sommet correspond à une tête fléchie",
      "La présentation du front correspond à une déflexion",
      "La présentation de la face correspond à une déflexion majeure",
      "La présentation du bregma est plus fréquente que celle du sommet",
      "L'occiput est le repère de la présentation du sommet"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "La présentation du sommet (tête fléchie) est de loin la plus fréquente (95 %).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-20",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 20,
    "type": "QCM",
    "questionText": "Concernant le délai et la surveillance de la délivrance, quelle proposition est fausse ?",
    "options": [
      "La délivrance se fait normalement dans un délai de 30 minutes",
      "En l'absence de décollement à 30 min, une délivrance artificielle est recommandée en urgence",
      "La surveillance maternelle doit être d'au moins 2 heures après l'accouchement",
      "La délivrance est une période à faible risque hémorragique",
      "L'hémostase biologique est plus tardive que la rétraction utérine"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "La délivrance est au contraire la période la plus dangereuse pour la mère (risque d'hémorragie grave).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-21",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 21,
    "type": "QCM",
    "questionText": "Quelle variété de présentation impose une grande rotation intra-pelvienne de 135° ?",
    "options": [
      "OIGA",
      "OIDA",
      "OIGP",
      "OIDT",
      "OIGT"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Les variétés postérieures (OIDP et OIGP) nécessitent une grande rotation de 135°. Les variétés antérieures (OIGA, OIDA) ne font que 45°.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-22",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 22,
    "type": "QCM",
    "questionText": "Concernant les modifications cervicales du travail, quelles propositions sont exactes ?",
    "options": [
      "Le col s'efface (se raccourcit) sous l'influence des contractions",
      "La dilatation cervicale complète est de 10 cm",
      "Les contractions utérines du travail sont fréquentes et régulières",
      "L'effacement précède toujours la dilatation",
      "La dilatation cervicale est indépendante des contractions"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "La première partie du travail associe contractions fréquentes et régulières avec effacement puis dilatation jusqu'à 10 cm.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-23",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 23,
    "type": "QCM",
    "questionText": "Concernant l'accouchement artificiel, quelle affirmation est exacte ?",
    "options": [
      "Il résulte d'une intervention manuelle ou instrumentale par voie basse ou haute",
      "Il est toujours spontané",
      "Il est exclusivement dû à des médicaments",
      "Il correspond à un accouchement eutocique",
      "Il ne peut se faire que par voie haute"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'accouchement artificiel résulte d'une intervention manuelle ou instrumentale (voie basse ou haute).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-24",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 24,
    "type": "QCM",
    "questionText": "La surveillance maternelle en salle de naissance après l'accouchement doit être d'au moins :",
    "options": [
      "30 minutes",
      "1 heure",
      "2 heures",
      "4 heures",
      "12 heures"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "La surveillance maternelle en salle de naissance est d'au moins 2 heures après l'accouchement.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-25",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 25,
    "type": "QCM",
    "questionText": "Concernant les étapes successives de la descente fœtale, quelles propositions sont exactes ?",
    "options": [
      "L'engagement est le franchissement du détroit supérieur",
      "La descente et la rotation intra-pelvienne font suite à l'engagement",
      "Le dégagement correspond au franchissement du détroit inférieur et du diaphragme pelvien",
      "La restitution est une rotation de 90°",
      "Le dégagement se fait toujours en OIGA"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Les trois étapes : engagement (DS), descente + rotation intra-pelvienne, dégagement (DI + diaphragme pelvien). La restitution est une rotation de 45°.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-26",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "questionText": "[Primigeste à terme — Salle de naissance du CHU]\nMme B., 28 ans, primigeste, 39 SA, admise aux urgences maternité du CHU pour contractions utérines régulières depuis 6 heures. À l'examen : hauteur utérine 34 cm, col dilaté à 6 cm, effacé à 80 %, présentation céphalique. La sage-femme suspecte une présentation du sommet. À la palpation, l'occiput est perçu à droite et en avant. Le toucher vaginal retrouve une tête appliquée au détroit supérieur.\n\nQuestion : 1. Quel est le repère de la présentation céphalique du sommet chez cette patiente ?",
    "options": [
      "Le bregma",
      "L'occiput",
      "Le front",
      "Le menton",
      "La fontanelle antérieure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La présentation du sommet est une présentation de la tête fléchie ; le repère est l'occiput.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-27",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "questionText": "[Multipare — Dystocie de rotation à l'EPH]\nMme K., 32 ans, 4ᵉ pare, 40 SA, transférée de l'EPH vers la maternité du CHU pour stagnation de la dilatation à 8 cm depuis 3 heures malgré des contractions régulières. La présentation est céphalique, occiput gauche postérieur (OIGP). Bassin normal, fœtus estimé à 3 400 g.\n\nQuestion : 1. Quelle est la particularité mécanique de cette variété OIGP ?",
    "options": [
      "Elle nécessite une rotation de 45°",
      "Elle nécessite une grande rotation de 135°, souvent laborieuse",
      "Elle se dégage directement en OP sans rotation",
      "Elle est la variété la plus fréquente",
      "Elle correspond à une présentation du siège"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "OIGP est une variété postérieure : la tête doit effectuer une grande rotation de 135°.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-28",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "questionText": "[Hémorragie de la délivrance — Urgences du CHU]\nMme T., 30 ans, 2ᵉ pare, 38 SA, vient d'accoucher par voie basse d'un nouveau-né de 3 800 g. Trente minutes après la naissance, le placenta n'est pas expulsé. La patiente présente une tachycardie à 110/min, une tension artérielle à 95/55 mmHg et des saignements vaginaux abondants. L'utérus est mou, mal rétracté.\n\nQuestion : 1. Quelle est la cause la plus probable de cette hémorragie ?",
    "options": [
      "Une déchirure cervicale isolée",
      "Une atonie utérine associée à une rétention placentaire",
      "Une infection urinaire",
      "Une anémie ferriprive",
      "Une pré-éclampsie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Utérus mou et mal rétracté (atonie) + rétention placentaire à 30 min = hémorragie de la délivrance.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-29",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "questionText": "[Présentation du siège — Consultation EPH]\nMme R., 26 ans, primigeste, 38 SA, consulte à l'EPH pour un contrôle prénatal. L'échographie retrouve une présentation du siège complet, fœtus estimé à 2 900 g, liquide amniotique normal.\n\nQuestion : 1. Quelle est la fréquence approximative de la présentation du siège ?",
    "options": [
      "95 %",
      "57 %",
      "4 %",
      "33 %",
      "0,5 %"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le siège représente environ 4 % des accouchements (95 % = sommet).",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  },
  {
    "id": "q-c-gyn-mecanisme-accouchement-30",
    "courseId": "c-gyn-mecanisme-accouchement",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "questionText": "[Dégagement des épaules — Bloc obstétrical du CHU]\nMme S., 34 ans, 3ᵉ pare, 39 SA, accouche par voie basse. Après le dégagement de la tête, on note une difficulté à dégager les épaules.\n\nQuestion : 1. Quelle manœuvre correspond au dégagement correct des épaules ?",
    "options": [
      "Saisir la tête entre le menton et le sous-occiput, accentuer la restitution, tirer doucement vers le bas puis redresser vers le haut",
      "Tirer fortement et brusquement vers le bas",
      "Laisser la tête sans traction pendant 10 minutes",
      "Effectuer une rotation de 135° de la tête",
      "Repousser la tête dans le vagin"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Saisie menton/sous-occiput, restitution, traction douce vers le bas puis redressement vers le haut avec surveillance périnéale.",
    "difficulty": "Concours Résidanat",
    "module": "mod-5-gyn",
    "academicYear": "5ème Année"
  }
];
