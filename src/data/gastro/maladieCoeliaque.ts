import { Question, CourseResource } from '../../types/medical';

export const MALADIE_COELIAQUE_QUESTIONS: Question[] = [
  {
    "id": "q-coel-01",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La maladie cœliaque (entéropathie au gluten) est une entéropathie auto-immune déclenchée par l'ingestion de fractions protéiques contenues dans quelles céréales ?",
    "options": [
      "Riz, maïs et soja",
      "Blé (froment), seigle et orge (contenant la gliadine/gluténine)",
      "Avoine pure et sarrasin exclusifs",
      "Quinoa et millet",
      "Tapioca et manioc"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gliadine (fraction du gluten du blé) ainsi que les sécalines (seigle) et hordéines (orge) déclenchent la réaction immuno-allergique cœliaque chez les sujets génétiquement prédisposés.",
    "clinicalPearl": "Céréales toxiques de la maladie cœliaque : Seigle, Orge, Blé (SAB) + Froment/Épeautre. Riz et Maïs sont sans danger."
  },
  {
    "id": "q-coel-02",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quels allèles du complexe majeur d'histocompatibilité (système HLA de classe II) sont retrouvés chez plus de 95% des patients atteints de maladie cœliaque ?",
    "options": [
      "HLA-B27",
      "HLA-DQ2 et/ou HLA-DQ8",
      "HLA-DR3 exclusif",
      "HLA-A29",
      "HLA-B51"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La quasi-totalité des cœliaques expriment les molécules HLA-DQ2 (90-95%) ou HLA-DQ8 (5-10%). La négativité conjointe de ces deux allèles a une valeur prédictive négative proche de 100%.",
    "clinicalPearl": "Génétique cœliaque : HLA-DQ2 et HLA-DQ8 (leur absence élimine pratiquement la maladie cœliaque)."
  },
  {
    "id": "q-coel-03",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel dosage sérologique d'anticorps est l'examen de dépistage de première intention le plus sensible et le plus spécifique chez l'adulte et l'enfant ?",
    "options": [
      "Anticorps anti-gliadine native d'ancienne génération",
      "Anticorps anti-transglutaminase tissulaire de classe IgA (anti-tTG IgA), couplé au dosage pondéral des IgA totales",
      "Anticorps anti-nucléaires",
      "Anticorps anti-mitochondries",
      "Anticorps anti-Scl70"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le dosage des anticorps anti-transglutaminase IgA est le test sérologique de référence (> 95% de sensibilité et spécificité). Le dosage simultané des IgA totales est obligatoire pour éliminer un déficit constitutionnel en IgA (faux négatif).",
    "clinicalPearl": "Dépistage sérologique de référence : Anti-transglutaminase IgA + dosage des IgA totales sériques."
  },
  {
    "id": "q-coel-04",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "En cas de déficit constitutionnel complet en immunoglobulines A (IgA) associé, quel test sérologique doit être demandé en remplacement ?",
    "options": [
      "Anticorps anti-transglutaminase de classe IgG ou anti-peptides désamidés de la gliadine (DPG) de classe IgG",
      "Sérologie hépatite A",
      "Recherche d'anticorps p-ANCA",
      "Dosage des IgE totales",
      "Électrophorèse des protéines"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le déficit sélectif en IgA (10 à 15 fois plus fréquent chez les cœliaques) rend les tests IgA faussement négatifs : il faut doser les anticorps anti-transglutaminase IgG ou anti-DPG IgG.",
    "clinicalPearl": "Déficit en IgA associé = prescrire les anticorps anti-transglutaminase de classe IgG (ou anti-DPG IgG)."
  },
  {
    "id": "q-coel-05",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la triade anatomopathologique histologique classique observée sur les biopsies duodénales (classification de Marsh) ?",
    "options": [
      "Présence de granulomes caséeux géants, nécrose et œdème",
      "Atrophie villositaire totale ou subtotale, hyperplasie des cryptes glandulaires, et augmentation des lymphocytes intra-épithéliaux (LIE > 25-30%)",
      "Présence d'inclusions virales intranucléaires",
      "Épaississement sous-muqueux avec dépôts amyloïdes",
      "Ulcérations serpigineuses transmurales avec méso épaissi"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La classification de Marsh définit la maladie cœliaque par : 1) Infiltrat lymphocytaire intra-épithélial (LIE > 25/100 entérocytes), 2) Hyperplasie des cryptes, 3) Atrophie villositaire plus ou moins complète.",
    "clinicalPearl": "Triade histologique duodénale (Marsh) : Atrophie villositaire + Hyperplasie des cryptes + Lymphocytose intra-épithéliale (LIE)."
  },
  {
    "id": "q-coel-06",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Combien de biopsies et sur quels sites doivent être prélevées lors de la FOGD pour affirmer le diagnostic histologique de maladie cœliaque chez l'adulte ?",
    "options": [
      "Une seule biopsie gastrique",
      "Au moins 4 à 6 biopsies duodénales (au moins 1 à 2 au niveau du bulbe et 4 dans le deuxième duodénum descendant D2)",
      "Des biopsies rectales isolées",
      "Une biopsie iléale exclusive",
      "Des biopsies coliques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En raison du caractère parfois hétérogène et discontinu de l'atrophie villositaire, les recommandations imposent au moins 4 biopsies dans le duodénum distal (D2) et au moins 1 à 2 biopsies dans le bulbe (D1).",
    "clinicalPearl": "Biopsies de dépistage : au moins 4 à 6 biopsies (bulbe D1 + deuxième duodénum D2)."
  },
  {
    "id": "q-coel-07",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Chez l'enfant selon les critères de l'ESPGHAN 2020, dans quelles conditions le diagnostic peut-il être posé sans recourir à la biopsie duodénale ('approche sans biopsie') ?",
    "options": [
      "Chez tout enfant dès qu'il a mal au ventre",
      "Taux d'anticorps anti-transglutaminase IgA >= 10 fois la limite supérieure de la normale (10N) confirmé par la présence d'anticorps anti-endomysium (EMA) IgA sur un second prélèvement sanguin indépendant",
      "Présence d'une simple carence martiale",
      "Présence de diarrhée isolée",
      "Allèle HLA-DQ2 positif isolé"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'ESPGHAN valide le diagnostic sans endoscopie chez l'enfant si anti-tTG IgA >= 10N, confirmés par des anticorps anti-endomysium IgA positifs sur un 2ème prélèvement veineux distinct.",
    "clinicalPearl": "Critères pédiatriques sans biopsie (ESPGHAN) : Anti-tTG IgA >= 10N + Anti-endomysium (+) sur 2ème prélèvement."
  },
  {
    "id": "q-coel-08",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle lésion cutanée bulleuse prurigineuse symétrique des coudes, genoux et fesses est la manifestation dermatologique pathognomonique de l'entéropathie au gluten ?",
    "options": [
      "L'érythème noueux",
      "La dermatite herpétiforme de Duhring-Brocq (avec dépôts d'IgA granulaires au sommet des papilles dermiques)",
      "Le psoriasis en plaques",
      "Le pemphigus vulgaire",
      "Le lichen plan"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La dermatite herpétiforme est l'expression cutanée de la maladie cœliaque : vésicules prurigineuses intenses coudes/fesses, dépôts d'IgA en immunofluorescence cutanée directe, répondant spectaculairement au régime sans gluten.",
    "clinicalPearl": "Dermatite herpétiforme = Maladie cœliaque de la peau (dépôts granuleux d'IgA dans les papilles dermiques)."
  },
  {
    "id": "q-coel-09",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la forme clinique la plus fréquente de la maladie cœliaque chez l'adulte à l'heure actuelle ?",
    "options": [
      "La forme classique pédiatrique avec diarrhée profuse et cachexie",
      "La forme pauci-symptomatique ou atypique (anémie ferriprive réfractaire isolée, ostéoporose précoce, aphtose récidivante, hypertransaminasémie inexpliquée ou asthénie)",
      "Le choc anaphylactique",
      "L'occlusion intestinale mécanique",
      "L'hématémèse cataclysmique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez l'adulte, les formes silencieuses ou pauci-symptomatiques dominent : une anémie par carence en fer réfractaire au traitement oral est la circonstance de découverte la plus fréquente.",
    "clinicalPearl": "Adulte : forme atypique/monosymptomatique (anémie ferriprive inexpliquée +++, ostéoporose précoce, cytolyse hépatique)."
  },
  {
    "id": "q-coel-10",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est l'unique traitement curatif efficace à vie de la maladie cœliaque ?",
    "options": [
      "Corticothérapie générale continue",
      "Régime d'exclusion strict, total et définitif à vie de tout aliment contenant du gluten",
      "Immunosuppression par azathioprine",
      "Antibiotiques à large spectre",
      "Greffe d'intestin"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le régime sans gluten strict et à vie est le seul traitement validé, permettant la disparition des symptômes, la négativation des anticorps et la régénération complète des villosités intestinales.",
    "clinicalPearl": "Traitement unique de la maladie cœliaque = Régime sans gluten strict, total et à vie."
  },
  {
    "id": "q-coel-11",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Combien de temps faut-il généralement après l'instauration d'un régime sans gluten strict pour observer la négativation des anticorps anti-transglutaminase sériques ?",
    "options": [
      "48 heures",
      "6 à 12 mois (voire 18 mois)",
      "10 ans",
      "Ils ne se négativent jamais",
      "3 jours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les anticorps anti-transglutaminase diminuent progressivement et se négativent habituellement entre 6 et 12 mois de régime bien conduit, servant de marqueur d'observance.",
    "clinicalPearl": "Suivi du régime sans gluten : décroissance et négativation des anti-tTG IgA à 6-12 mois."
  },
  {
    "id": "q-coel-12",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication néoplasique maligne redoutable du grêle est favorisée par la non-observance prolongée du régime sans gluten dans la maladie cœliaque ?",
    "options": [
      "Le carcinome épidermoïde de l'œsophage",
      "Le lymphome T associé aux entéropathies (EATL / Enteropathy-Associated T-cell Lymphoma) et l'adénocarcinome du grêle",
      "Le mélanome colique",
      "L'hépatocarcinome fibrolamellaire",
      "Le schwannome gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le lymphome T intestinal primitif (EATL) et l'adénocarcinome de l'intestin grêle sont les complications malignes majeures de la maladie cœliaque non traitée ou réfractaire.",
    "clinicalPearl": "Complication maligne de la maladie cœliaque non traitée = Lymphome T intestinal (EATL) et adénocarcinome du grêle."
  },
  {
    "id": "q-coel-13",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Qu'est-ce que la maladie cœliaque réfractaire de type II (sprue réfractaire) ?",
    "options": [
      "Une simple erreur d'inadvertance de régime",
      "La persistance d'une atrophie villositaire et de malabsorption malgré > 12 mois de régime sans gluten strict, caractérisée par une population clonale anormale de lymphocytes intra-épithéliaux (perte des marqueurs de surface CD3/CD8), état pré-lymphomateux à haut risque d'EATL",
      "Une allergie au lactose",
      "Une intoxication médicamenteuse",
      "Une insuffisance pancréatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La sprue réfractaire de type II est un état néoplasique clonal intra-épithélial pré-lymphomateux nécessitant une chimiothérapie ou immunomodulateurs, avec un taux de transformation en EATL > 50%.",
    "clinicalPearl": "Sprue réfractaire type II : clonalité T intra-épithéliale anormale = pré-lymphome de très sombre pronostic."
  },
  {
    "id": "q-coel-14",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'évaluation de la malabsorption associée à la maladie cœliaque, quelle carence osseuse justifie la réalisation systématique d'une ostéodensitométrie (DMO) au diagnostic ?",
    "options": [
      "Carence en vitamine A",
      "Carence en vitamine D et en calcium par malabsorption duodéno-jéjunale, induisant ostéomalacie et ostéoporose précoce",
      "Carence en fluor",
      "Carence en silice",
      "Carence en manganèse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le duodénum et le jéjunum proximal sont les sites préférentiels d'absorption du calcium et de la vitamine D. L'ostéodensitométrie initiale est systématique pour dépister l'ostéopénie/ostéoporose.",
    "clinicalPearl": "Bilan initial de maladie cœliaque : Ostéodensitométrie (DMO) systématique pour dépister l'ostéoporose."
  },
  {
    "id": "q-coel-15",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle maladie auto-immune endocrinienne est très fréquemment associée à la maladie cœliaque (partageant le terrain génétique HLA) et justifie un dépistage systématique ?",
    "options": [
      "Le diabète de type 1 et les thyroïdites auto-immunes (maladie de Hashimoto / Basedow)",
      "Le diabète gestationnel isolé",
      "L'adénome à prolactine",
      "Le phéochromocytome",
      "L'hyperparathyroïdie secondaire pure"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La maladie cœliaque s'associe volontiers à d'autres affections auto-immunes : diabète de type 1 (5-10%), thyroïdite d'Hashimoto, hépatite auto-immune, cirrhose biliaire primitive, vitiligo.",
    "clinicalPearl": "Pathologies auto-immunes associées : Diabète de type 1 (5-10%) et Thyroïdite auto-immune (dépistage TSH recommandé)."
  },
  {
    "id": "q-coel-16",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel aspect endoscopique classique du duodénum à l'endoscopie haute fait suspecter une atrophie villositaire cœliaque ?",
    "options": [
      "Muqueuse violacée à gros plis polypoïdes",
      "Raréfaction ou festonnement des plis duodénaux ('scalloping'), aspect en mosaïque quadrillée et sillons muqueux fissurés",
      "Muqueuse noire anthracite",
      "Dépôts pseudomembraneux confluents",
      "Présence de diverticules multiples"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endoscopie haute montre des plis duodénaux festonnés ou absents, un aspect quadrillé en mosaïque ou pavimenteux et une diminution du relief villositaire (signes suggestifs mais non suffisants sans biopsie).",
    "clinicalPearl": "Signes endoscopiques de maladie cœliaque : festonnement des plis duodénaux (scalloping) et aspect en mosaïque."
  },
  {
    "id": "q-coel-17",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Pourquoi les biopsies duodénales doivent-elles TOUJOURS être réalisées alors que le patient consomme encore une alimentation NORMALE contenant du gluten ?",
    "options": [
      "Pour que le patient ait plus d'énergie",
      "Parce que l'exclusion du gluten avant la biopsie permet une régénération rapide des villosités, risquant de fausser complètement l'examen anatomopathologique (faux négatif)",
      "Pour déclencher une poussée de fièvre",
      "Pour tester l'allergie aux anesthésiques",
      "La consommation de gluten n'a aucun impact sur les biopsies"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'exclusion préalable du gluten entraîne une repousse des villosités et la disparition des anomalies histologiques, rendant le diagnostic impossible sans épreuve de réintroduction prolongée.",
    "clinicalPearl": "Règle d'or : JAMAIS de régime sans gluten avant la confirmation sérologique et histologique (risque de faux négatif)."
  },
  {
    "id": "q-coel-18",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la définition de la maladie cœliaque 'potentielle' ?",
    "options": [
      "Sérologie positive (anti-tTG +) avec biopsies duodénales strictement normales (Marsh 0)",
      "Sérologie négative avec atrophie complète",
      "Allergie aux fruits à coque",
      "Maladie cœliaque traitée guérie",
      "Présence d'un lymphome d'emblée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La forme potentielle associe des anticorps spécifiques positifs (anti-tTG, anti-endomysium) et une architecture duodénale normale aux biopsies (pas d'atrophie, Marsh 0).",
    "clinicalPearl": "Maladie cœliaque potentielle = Sérologie positive + Biopsies normales (Marsh 0)."
  },
  {
    "id": "q-coel-19",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la physiopathologie de la maladie cœliaque, quel rôle joue l'enzyme transglutaminase tissulaire (tTG) de type 2 présente dans la muqueuse intestinale ?",
    "options": [
      "Elle détruit directement les bactéries",
      "Elle désamide les résidus glutamine de la gliadine en acide glutamique, augmentant fortement leur affinité de liaison pour les poches des molécules HLA-DQ2/DQ8",
      "Elle stimule la sécrétion d'insuline",
      "Elle bloque la motricité digestive",
      "Elle synthétise le mucus gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La désamidation de la gliadine par la tTG confère une charge négative aux peptides du gluten, qui se lient avec une haute affinité aux molécules HLA-DQ2/8 présentées aux lymphocytes T CD4+ pro-inflammatoires.",
    "clinicalPearl": "Rôle de la transglutaminase : désamidation de la gliadine -> forte affinité pour HLA-DQ2/DQ8 -> activation lymphocytaire T."
  },
  {
    "id": "q-coel-20",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause fréquente d'échec apparent du régime sans gluten (persistance des symptômes ou de l'atrophie) doit être éliminée en TOUTE PREMIÈRE intention ?",
    "options": [
      "Un lymphome d'emblée",
      "Une ingestion involontaire, méconnue ou accidentelle de gluten caché (erreurs de régime dans 90% des cas)",
      "Une allergie à l'eau",
      "Une insuffisance rénale aiguë",
      "Une maladie génétique rare"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Plus de 90% des non-réponses au régime sans gluten sont liées à la persistance d'ingestions de gluten caché dans les produits industriels transformés ou à une contamination croisée (enquête diététique indispensable).",
    "clinicalPearl": "Échec du régime sans gluten = traquer en premier lieu les écarts involontaires et le gluten caché (enquête diététique)."
  },
  {
    "id": "q-coel-21",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Chez la femme jeune atteinte de maladie cœliaque non diagnostiquée, quel retentissement gynécologique et obstétrical est fréquemment rapporté ?",
    "options": [
      "Hypertrophie mammaire majeure",
      "Aménorrhée, infertilité inexpliquée, fausses couches spontanées à répétition et retard de croissance intra-utérin (RCIU)",
      "Puberté précoce",
      "Endométriose fulgurante",
      "Grossesse multiple systématique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La malnutrition et l'auto-immunité cœliaque provoquent troubles du cycle, infertilité inexpliquée et pertes fœtales à répétition, qui se corrigent spectaculairement sous régime sans gluten.",
    "clinicalPearl": "Infertilité inexpliquée / fausses couches à répétition chez la femme jeune = penser à dépister la maladie cœliaque."
  },
  {
    "id": "q-coel-22",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans l'évaluation biologique de la malabsorption cœliaque, quel bilan martial retrouve-t-on typiquement ?",
    "options": [
      "Surcharge en fer avec ferritine très élevée",
      "Anémie ferriprive avec ferritinémie effondrée et coefficient de saturation de la transferrine abaissé",
      "Hémochromatose secondaire",
      "Ferritine normale constante",
      "Polyglobulie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le fer étant absorbé au niveau du duodénum, l'atrophie villositaire duodénale entraîne une malabsorption martiale majeure responsable d'anémie microcytaire ferriprive réfractaire au fer oral.",
    "clinicalPearl": "Anémie ferriprive réfractaire au fer per os = signe d'appel majeur de maladie cœliaque."
  },
  {
    "id": "q-coel-23",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel vaccin doit être particulièrement recommandé chez le patient cœliaque en raison de l'hyposplénisme fonctionnel retrouvé chez un tiers des adultes ?",
    "options": [
      "Vaccin contre la fièvre jaune",
      "Vaccination anti-pneumococcique",
      "Vaccin contre la rage",
      "Vaccin contre le choléra",
      "Vaccin BCG"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'atrophie splénique fonctionnelle (hyposplénisme) est fréquente dans la maladie cœliaque de l'adulte, justifiant la vaccination anti-pneumococcique recommandée pour prévenir le sepsis à pneumocoque.",
    "clinicalPearl": "Hyposplénisme cœliaque : vaccination anti-pneumococcique recommandée chez l'adulte."
  },
  {
    "id": "q-coel-24",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle association syndromique génétique constitutionnelle présente une prévalence de maladie cœliaque très supérieure à la population générale (près de 5 à 10%) ?",
    "options": [
      "Trisomie 21 (syndrome de Down), syndrome de Turner et syndrome de Williams",
      "Syndrome de Marfan",
      "Maladie de Huntington",
      "Mucoviscidose",
      "Neurofibromatose"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La trisomie 21, le syndrome de Turner et le syndrome de Williams sont associés à une incidence accrue de maladie cœliaque justifiant un dépistage sérologique systématique.",
    "clinicalPearl": "Dépistage cœliaque recommandé chez : Trisomie 21, syndrome de Turner, diabétiques type 1, apparentés 1er degré."
  },
  {
    "id": "q-coel-25",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel dosage est utilisé pour mesurer la perte de graisses fécales et confirmer un syndrome de malabsorption digestive sévère ?",
    "options": [
      "La stéatorrhée des 24 ou 72 heures (normale < 6 g/24h sous régime apportant 100 g de lipides/j)",
      "Le test de Schilling",
      "La clairance de l'alpha-1-antitrypsine",
      "L'uricurie",
      "La natriurèse"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La stéatorrhée sur recueil des selles de 3 jours (> 6 g/j) affirme la malabsorption des graisses, caractéristique de l'atteinte grêlique diffuse ou de l'insuffisance pancréatique exocrine.",
    "clinicalPearl": "Stéatorrhée > 6 g/24h sur recueil de 3 jours = malabsorption lipidique prouvée."
  },
  {
    "id": "q-cas-coel-1",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Une femme de 32 ans consulte pour asthénie chronique persistante, ongles cassants et ballonnements abdominaux après les repas. Le bilan biologique révèle : anémie microcytaire hypochrome à 9,8 g/dL (VGM 72 fL), ferritinémie effondrée à 5 ng/mL (N > 20). Un traitement par fer oral bien conduit pendant 3 mois n'a permis aucune élévation de l'hémoglobine ni de la ferritine. Elle n'a pas de ménorragies. Les anticorps anti-transglutaminase IgA sont fortement positifs à 120 U/mL (N < 10) avec un taux d'IgA totales normal. La FOGD visualise un aspect festonné des plis duodénaux. Quelle confirmation diagnostique formelle est indispensable chez l'adulte avant d'initier le régime sans gluten ?",
    "options": [
      "Débuter le régime sans gluten immédiatement sans aucun autre examen",
      "Réalisation de biopsies duodénales multiples (au moins 4 à 6 biopsies en D1 et D2) pour confirmer histologiquement l'atrophie villositaire (Marsh 3), AVANT toute éviction du gluten",
      "Test génétique HLA-B27",
      "Coloscopie totale avec lavement baryté",
      "Scanner thoraco-abdominal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez l'adulte, la confirmation histologique par biopsies duodénales multiples (D1 et D2) montrant une atrophie villositaire reste formellement indispensable pour affirmer la maladie cœliaque avant d'imposer un régime contraignant à vie, et doit être faite sous régime normal avec gluten.",
    "clinicalPearl": "Adulte : biopsies duodénales systématiques obligatoires sous alimentation avec gluten avant tout régime."
  },
  {
    "id": "q-cas-coel-2",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Chez cette même patiente de 32 ans, les biopsies duodénales confirment une atrophie villositaire subtotale avec hyperplasie des cryptes et plus de 40 lymphocytes intra-épithéliaux pour 100 entérocytes (stade Marsh 3b). Une fois le diagnostic de maladie cœliaque certain et le régime sans gluten strict prescrit, quel bilan systématique d'évaluation nutritionnelle et de comorbidités devez-vous prescrire ?",
    "options": [
      "Uniquement un dosage de glycémie à jeun",
      "Bilan biologique des carences (ferritine, folates sériques, vitamine B12, vitamine D, calcémie, TP), bilan hépatique, TSH (dépistage thyroïdite), ostéodensitométrie (DMO) et consultation diététique spécialisée",
      "IRM cérébrale systématique",
      "Biopsie rénale",
      "Coronarographie d'évaluation"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le bilan initial d'une maladie cœliaque comporte : évaluation des carences en micronutriments (fer, B9, B12, vit D, calcium), DMO à la recherche d'ostéoporose, dépistage de dysthyroïdie associée (TSH) et éducation diététique spécialisée.",
    "clinicalPearl": "Bilan initial cœliaque : Carences (Fer, Folates, B12, Vit D), DMO, TSH + consultation diététique."
  },
  {
    "id": "q-cas-coel-3",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Un homme de 40 ans consulte pour une éruption cutanée vésiculeuse symétrique intensément prurigineuse localisée sur la face d'extension des coudes, des genoux et la région fessière. L'examen direct en immunofluorescence d'une biopsie cutanée en peau saine péri-lésionnelle met en évidence des dépôts granuleux d'IgA au sommet des papilles dermiques, affirmant une dermatite herpétiforme de Duhring-Brocq. Le patient ne rapporte aucune plainte digestive. Que devez-vous savoir concernant l'intestin de ce patient ?",
    "options": [
      "L'intestin est constamment normal et sans rapport avec la lésion",
      "La dermatite herpétiforme est la manifestation cutanée pathognomonique de l'entéropathie au gluten ; une atrophie villositaire duodénale est présente dans plus de 80-90% des cas même en l'absence de symptômes digestifs, et le régime sans gluten strict permet la guérison cutanée et digestive",
      "Il s'agit d'une infection virale herpétique nécessitant du valaciclovir",
      "Il s'agit d'une gale profuse",
      "Le patient a un cancer gastrique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La dermatite herpétiforme est l'expression cutanée de la maladie cœliaque. Pratiquement tous les patients ont une entéropathie au gluten histologique sous-jacente : le traitement repose sur le régime sans gluten strict à vie (+/- dapsone au début pour soulager le prurit).",
    "clinicalPearl": "Dermatite herpétiforme = Maladie cœliaque cutanée : régime sans gluten strict à vie curatif."
  },
  {
    "id": "q-cas-coel-4",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Une patiente de 55 ans suivie pour maladie cœliaque depuis 15 ans, qui avoue ne plus suivre son régime sans gluten de façon très rigoureuse, consulte pour une réapparition d'une diarrhée profuse avec altération sévère de l'état général (-8 kg en 2 mois), fébricule et douleurs abdominales diffuses. Les examens sanguins retrouvent une hypoalbuminémie à 22 g/L et une CRP à 75 mg/L. L'entéro-scanner met en évidence un épaississement tumoral jéjunal circonférentiel avec volumineuses adénopathies mésentériques nécrosées et splénomégalie. Quelle complication redoutable devez-vous suspecter en priorité ?",
    "options": [
      "Une simple gastro-entérite aiguë à rotavirus",
      "Un lymphome T associé aux entéropathies (EATL / Enteropathy-Associated T-cell Lymphoma)",
      "Une maladie de Crohn colique surajoutée",
      "Un ulcère de Dieulafoy duodénal",
      "Une hépatite alcoolique aiguë"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La réapparition d'une malabsorption sévère et d'un amaigrissement avec masse/adénopathies du grêle chez un patient cœliaque ancien fait craindre en priorité un lymphome T intestinal (EATL), complication classique de la mauvaise observance du régime sans gluten.",
    "clinicalPearl": "Cœliaque ancien avec amaigrissement et masse du grêle = Lymphome T associé aux entéropathies (EATL)."
  },
  {
    "id": "q-cas-coel-5",
    "courseId": "crs-gastro-maladie-coeliaque",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un jeune homme de 19 ans présente des épigastralgies chroniques. Le médecin prescrit des anticorps anti-transglutaminase IgA qui reviennent négatifs (< 1 U/mL). Le dosage des IgA totales sériques est effondré à 0,02 g/L (déficit constitutionnel en IgA). Quel examen sérologique devez-vous prescrire pour éliminer formellement une maladie cœliaque chez ce patient ?",
    "options": [
      "Répéter le dosage des anti-transglutaminase IgA",
      "Doser les anticorps anti-transglutaminase tissulaire de classe IgG et les anticorps anti-peptides désamidés de la gliadine (anti-DPG) de classe IgG",
      "Doser les IgG totales",
      "Faire une sérologie VIH",
      "Mesurer la protéine C-réactive seule"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En cas de déficit constitutionnel en IgA (fréquemment associé à la maladie cœliaque), les tests de classe IgA sont faussement négatifs : le dépistage repose sur les anticorps anti-transglutaminase IgG ou anti-DPG IgG.",
    "clinicalPearl": "Déficit en IgA totales = Dépistage de la maladie cœliaque par les anticorps anti-transglutaminase IgG."
  }
];

export const MALADIE_COELIAQUE_RESOURCES: CourseResource[] = [
  {
    "id": "res-coel-summary",
    "courseId": "crs-gastro-maladie-coeliaque",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Maladie Cœliaque",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Maladie Cœliaque\n- **Physiopathologie & Terrain** : Intolérance auto-immune à la gliadine (Blé/Froment, Seigle, Orge). Terrain HLA-DQ2 (95%) ou HLA-DQ8.\n- **Clinique** :\n  - *Adulte* : Forme pauci-symptomatique fréquente : Anémie ferriprive réfractaire au fer oral +++, ostéoporose précoce, aphtose récidivante, cytolyse inexpliquée, infertilité/fausses couches.\n  - *Dermatologique* : Dermatite herpétiforme de Duhring-Brocq (vésicules coudes/fesses, dépôts d'IgA dermiques).\n- **Diagnostic** :\n  - *Sérologie* : Anti-transglutaminase IgA + dosage pondéral des IgA totales. Si déficit en IgA -> Anti-transglutaminase IgG.\n  - *Endoscopie & Histologie* : FOGD sous régime normal avec gluten : 4-6 biopsies duodénales (D1 et D2). Marsh 3 : Atrophie villositaire + Hyperplasie des cryptes + Lymphocytose intra-épithéliale (LIE > 25%).\n  - *Enfant (ESPGHAN 2020)* : Diagnostic sans biopsie si anti-tTG >= 10N + anti-endomysium (+) sur 2ème prélèvement.\n- **Traitement** : Régime sans gluten strict, total et à vie. Négativation des anticorps à 6-12 mois. DMO au diagnostic.\n- **Complications de la non-observance** : Lymphome T intestinal associé aux entéropathies (EATL), adénocarcinome du grêle, sprue réfractaire type II (clonale).",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-coel-pearls",
    "courseId": "crs-gastro-maladie-coeliaque",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Maladie Cœliaque",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Piège majeur** : Ne jamais débuter un régime sans gluten avant la biopsie duodénale (repousse rapide des villosités = faux négatifs).\n- ⚡ **Déficit en IgA** : toujours doser les IgA totales avec les anti-tTG IgA (si déficit, basculer sur anti-tTG IgG).\n- ⚡ **Céréales interdites** : Seigle, Orge, Blé (SAB) + Froment. Céréales autorisées : Riz, Maïs.",
    "author": "Commission Pédagogique"
  }
];
