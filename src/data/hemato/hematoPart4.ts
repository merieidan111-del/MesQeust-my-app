import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 10: LYMPHOMES : HODGKIN & NON-HODGKIN - Pr Oukid
// ==========================================
export const HEMATO_LESSON_10_QUESTIONS: Question[] = [
  {
    id: 'q-hem-10-01',
    courseId: 'crs-hemato-10',
    questionNumber: 1,
    type: 'QCM',
    content: "La cellule caractéristique diagnostique indispensable au diagnostic de Lymphome de Hodgkin classique est :",
    options: [
      "A) Le lymphocyte B centrocytique",
      "B) La cellule de Reed-Sternberg (grande cellule binucléée en 'yeux de hibou')",
      "C) Le mastocyte tissulaire activé",
      "D) Le plasmocyte à inclusions de Russell",
      "E) Le myéloblaste granuleux"
    ],
    correctAnswers: [1],
    explanation: "La cellule de Reed-Sternberg (cellule géante d'origine lymphoïde B, binucléée avec volumineux nucléoles en yeux de hibou, CD30+, CD15+) au sein d'un granulome inflammatoire polymorphe non tumoral définit le lymphome de Hodgkin classique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-02',
    courseId: 'crs-hemato-10',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans le lymphome de Hodgkin classique, le profil immunophénotypique des cellules de Reed-Sternberg est typiquement :",
    options: [
      "A) CD30+, CD15+, CD20 faible ou négatif, CD45 (LCA) négatif",
      "B) CD20+, CD79a+, CD45+, CD30 négatif",
      "C) CD3+, CD4+, CD8-, CD15 négatif",
      "D) CD138+, CD38+, CD56+",
      "E) CD34+, TdT+, CD10+"
    ],
    correctAnswers: [0],
    explanation: "Les cellules de Reed-Sternberg expriment de façon constante le CD30 (100%) et fréquemment le CD15 (75-85%), tandis que le CD45 (antigène pan-leucocytaire) et les marqueurs B classiques (CD20) sont le plus souvent négatifs ou faiblement exprimés.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-10-03',
    courseId: 'crs-hemato-10',
    questionNumber: 3,
    type: 'QCM',
    content: "Le sous-type histologique le plus fréquent du lymphome de Hodgkin chez l'adulte jeune dans les pays développés est :",
    options: [
      "A) La forme à cellularité mixte",
      "B) La sclérose nodulaire (LH-SN)",
      "C) La forme riche en lymphocytes",
      "D) La déplétion lymphocytaire",
      "E) Le lymphome de Hodgkin nodulaire à prédominance lymphocytaire (paragranulome de Poppema)"
    ],
    correctAnswers: [1],
    explanation: "La forme scléronodulaire représente 60 à 75% des lymphomes de Hodgkin. Elle touche avec prédilection l'adulte jeune (prédominance féminine) et s'accompagne d'une atteinte médiastinale dans plus de 80% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-04',
    courseId: 'crs-hemato-10',
    questionNumber: 4,
    type: 'QCM',
    content: "Le signe de Gougerot-Sjögren n'a rien à voir, mais le 'signe d'Oster' dans le lymphome de Hodgkin correspond à :",
    options: [
      "A) Une douleur ganglionnaire survenant quelques minutes après l'ingestion d'alcool",
      "B) Un prurit aquagénique après la douche",
      "C) Une fièvre ondulante rémittente (fièvre de Pel-Ebstein)",
      "D) Une dyspnée expiratoire en décubitus",
      "E) Une sudation profuse nocturne"
    ],
    correctAnswers: [0],
    explanation: "Le signe d'Oster (ou douleur à l'ingestion d'alcool) est rare mais très spécifique du lymphome de Hodgkin : survenue d'une douleur aiguë au niveau d'un territoire ganglionnaire atteint quelques minutes après avoir bu une boisson alcoolisée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-05',
    courseId: 'crs-hemato-10',
    questionNumber: 5,
    type: 'QCM',
    content: "Selon la classification d'Ann Arbor modifiée Cotswolds, une atteinte ganglionnaire touchant les aires cervicale droite et inguinale gauche est classée :",
    options: [
      "A) Stade I",
      "B) Stade II",
      "C) Stade III (atteinte ganglionnaire de part et d'autre du diaphragme)",
      "D) Stade IV",
      "E) Stade E"
    ],
    correctAnswers: [2],
    explanation: "Stade I : une seule aire ganglionnaire. Stade II : deux aires ganglionnaires ou plus du MÊME côté du diaphragme. Stade III : atteinte ganglionnaire des deux côtés du diaphragme (sus et sous-diaphragmatique). Stade IV : atteinte viscérale disséminée extra-lymphatique non contiguë.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-06',
    courseId: 'crs-hemato-10',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans la classification d'Ann Arbor, le suffixe 'B' indique la présence de signes généraux définis par :",
    options: [
      "A) Prurit isolé et asthénie",
      "B) Perte de poids > 10% en 6 mois, fièvre inexpliquée > 38°C persistant > 8 jours, et sueurs nocturnes profuses",
      "C) Élévation de la VS et anémie",
      "D) Hypercalcémie maligne",
      "E) Infiltration hépatique prouvée"
    ],
    correctAnswers: [1],
    explanation: "Les signes généraux B (facteur pronostique péjoratif) regroupent : amaigrissement > 10% du poids du corps dans les 6 derniers mois, fièvre inexpliquée > 38°C durant plus de 8 jours consécutifs, et sueurs nocturnes abondantes obligeant à changer de vêtements.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-07',
    courseId: 'crs-hemato-10',
    questionNumber: 7,
    type: 'QCM',
    content: "Le lymphome non hodgkinien (LNH) le plus fréquent chez l'adulte (représentant environ 30 à 40% des LNH) est :",
    options: [
      "A) Le lymphome folliculaire",
      "B) Le lymphome diffus à grandes cellules B (LDGCB)",
      "C) Le lymphome du manteau",
      "D) Le lymphome de Burkitt",
      "E) Le lymphome T angio-immunoblastique"
    ],
    correctAnswers: [1],
    explanation: "Le lymphome diffus à grandes cellules B (LDGCB / DLBCL) est le plus fréquent des LNH de l'adulte. C'est un lymphome agressif à prolifération rapide, mais potentiellement curable par l'immunochimiothérapie R-CHOP.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-08',
    courseId: 'crs-hemato-10',
    questionNumber: 8,
    type: 'QCM',
    content: "La translocation chromosomique caractéristique retrouvée dans plus de 85% des lymphomes folliculaires est :",
    options: [
      "A) t(14;18)(q32;q21) juxtaposant BCL-2 et le promoteur IGH",
      "B) t(8;14)(q24;q32) juxtaposant MYC et IGH",
      "C) t(11;14)(q13;q32) entraînant une surexpression de la cycline D1",
      "D) t(9;22)(q34;q11)",
      "E) t(15;17)(q22;q12)"
    ],
    correctAnswers: [0],
    explanation: "La translocation t(14;18) est la signature moléculaire du lymphome folliculaire. Elle place le proto-oncogène anti-apoptotique BCL-2 sous le contrôle du promoteur fort de la chaîne lourde des immunoglobulines (IGH), inhibant l'apoptose.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-09',
    courseId: 'crs-hemato-10',
    questionNumber: 9,
    type: 'QCM',
    content: "La surexpression de la Cycline D1 consécutive à la translocation t(11;14) est pathognomonique de quel type de lymphome ?",
    options: [
      "A) Lymphome folliculaire",
      "B) Lymphome du manteau (MCL)",
      "C) Lymphome de Burkitt",
      "D) Lymphome marginal de type MALT",
      "E) Lymphome de Hodgkin scléronodulaire"
    ],
    correctAnswers: [1],
    explanation: "La translocation t(11;14)(q13;q32) entraîne la surexpression constitutive de la cycline D1 (gène CCND1), qui active le cycle cellulaire en phase G1/S. C'est le marqueur pathognomonique du lymphome du manteau.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-10-10',
    courseId: 'crs-hemato-10',
    questionNumber: 10,
    type: 'QCM',
    content: "Le lymphome de Burkitt est caractérisé sur le plan moléculaire et cytologique par :",
    options: [
      "A) Une translocation t(8;14) impliquant le gène c-MYC et un aspect histologique en 'ciel étoilé'",
      "B) Une translocation t(9;22) avec cellules géantes multinucléées",
      "C) Une mutation du gène BRAF V600E",
      "D) Une prolifération de cellules T CD4+ épidermotropes",
      "E) Une dédifférenciation myéloïde CD33+"
    ],
    correctAnswers: [0],
    explanation: "Le lymphome de Burkitt est une tumeur à prolifération extrême (index Ki-67 proche de 100%), liée au réarrangement du proto-oncogène c-MYC (t(8;14) le plus souvent). Histologiquement, les macrophages à corps tingibles phagocytant les débris cellulaires donnent l'image typique en 'ciel étoilé'.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-11',
    courseId: 'crs-hemato-10',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique du lymphome de Hodgkin traité par chimiothérapie contenant de la Bléomycine (ex: protocole ABVD), quel examen fonctionnel est OBLIGATOIRE ?",
    options: [
      "A) Épreuves fonctionnelles respiratoires (EFR) avec mesure de la capacité de diffusion du monoxyde de carbone (DLCO)",
      "B) Électromyogramme des 4 membres",
      "C) Fibroscopie œso-gastro-duodénale",
      "D) Champ visuel de Goldmann",
      "E) Échographie rénale avec doppler"
    ],
    correctAnswers: [0],
    explanation: "La Bléomycine expose à un risque majeur de toxicité pulmonaire (alvéolite puis fibrose pulmonaire irréversible dose-dépendante). Les EFR avec mesure de la DLCO sont obligatoires avant le traitement et en surveillance.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-12',
    courseId: 'crs-hemato-10',
    questionNumber: 12,
    type: 'QCM',
    content: "Le protocole de chimiothérapie standard de référence dans le lymphome de Hodgkin est l'ABVD, qui comprend :",
    options: [
      "A) Adriamycine (Doxorubicine), Bléomycine, Vinblastine, Dacarbazine",
      "B) Amsacrine, Busulfan, Vincristine, Daunorubicine",
      "C) Ara-C, BCNU, Vindésine, Dexaméthasone",
      "D) Alemtuzumab, Bortézomib, Vinorelbine, Docétaxel",
      "E) Asparaginase, Bévacizumab, Vénétoclax, Doxorubicine"
    ],
    correctAnswers: [0],
    explanation: "Le schéma ABVD historique associe : Adriamycine (doxorubicine, cardiotoxique), Bléomycine (pneumotoxique), Vinblastine (neurotoxique/myélotoxique) et Dacarbazine (émétisante).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-13',
    courseId: 'crs-hemato-10',
    questionNumber: 13,
    type: 'QCM',
    content: "L'anticorps conjugué ciblant spécifiquement le CD30 couplé à un poison du fuseau mitotique (MMAE) révolutionnant le traitement du lymphome de Hodgkin est :",
    options: [
      "A) Le Rituximab",
      "B) Le Brentuximab védotin",
      "C) Le Trastuzumab",
      "D) Le Cétuximab",
      "E) Le Daratumumab"
    ],
    correctAnswers: [1],
    explanation: "Le Brentuximab védotin est un anticorps monoclonal anti-CD30 conjugué à la monométhylauristatine E (MMAE). Il délivre sélectivement la chimiothérapie au sein des cellules de Reed-Sternberg CD30+.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-10-14',
    courseId: 'crs-hemato-10',
    questionNumber: 14,
    type: 'QCM',
    content: "Le traitement de première ligne standard d'un Lymphome Diffus à Grandes Cellules B (LDGCB) CD20+ repose sur :",
    options: [
      "A) L'association R-CHOP (Rituximab, Cyclophosphamide, Doxorubicine, Vincristine, Prednisone)",
      "B) La radiothérapie externe exclusive en mantelet",
      "C) L'Ibrutinib en monothérapie continue",
      "D) L'interféron alpha recombinant",
      "E) La greffe de rein préventive"
    ],
    correctAnswers: [0],
    explanation: "Le standard mondial de première intention pour les LDGCB CD20+ est l'immunochimiothérapie R-CHOP tous les 21 jours pendant 6 cycles, qui guérit plus de 60 à 70% des patients.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-15',
    courseId: 'crs-hemato-10',
    questionNumber: 15,
    type: 'QCM',
    content: "Les cinq paramètres pronostiques du score IPI (International Prognostic Index) dans les lymphomes agressifs sont résumés par le moyen mnémotechnique APLES :",
    options: [
      "A) Âge (> 60 ans), Performance status (≥ 2), LDH (> N), Extension extra-ganglionnaire (> 1 site), Stade Ann Arbor (III ou IV)",
      "B) Anémie, Plaquettes, Leucocytes, Éosinophiles, Splénomégalie",
      "C) Albuminémie, Protéinurie, Lymphocytose, Épanchement, Sexe masculin",
      "D) Âge (> 40 ans), Poids (< 50 kg), Lymphocytes (< 1000), Érythrocytes, Stade I",
      "E) Aucune de ces réponses"
    ],
    correctAnswers: [0],
    explanation: "Le score IPI (APLES) comprend 5 facteurs indépendants : Âge > 60 ans, Performance status ECOG ≥ 2, LDH sériques élevées > normale, sites Extra-ganglionnaires > 1, et Stade Ann Arbor étendu III ou IV. Chaque critère compte pour 1 point (score de 0 à 5).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-10-16',
    courseId: 'crs-hemato-10',
    questionNumber: 16,
    type: 'QCM',
    content: "Le lymphome gastrique du MALT (tissu lymphoïde associé aux muqueuses) est induit dans plus de 80% des cas par quelle bactérie ?",
    options: [
      "A) Campylobacter jejuni",
      "B) Helicobacter pylori",
      "C) Clostridioides difficile",
      "D) Salmonella typhi",
      "E) Listeria monocytogenes"
    ],
    correctAnswers: [1],
    explanation: "Le lymphome gastrique de la zone marginale de type MALT est induit par une stimulation antigénique chronique due à Helicobacter pylori. Au stade localisé débutant, la simple éradication antibiotique d'Helicobacter pylori permet la rémission complète du lymphome sans chimiothérapie dans plus de 75% des cas !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-17',
    courseId: 'crs-hemato-10',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle modalité d'imagerie moderne est devenue le Gold Standard indispensable pour l'évaluation de la réponse thérapeutique précoce (J14 / cycle 2) et de fin de traitement dans le lymphome de Hodgkin ?",
    options: [
      "A) La radiographie thoracique de face",
      "B) L'échographie abdominale doppler",
      "C) La Tomographie par Émission de Positons au 18F-FDG (TEP-TDM) évaluée selon les critères de Deauville",
      "D) La scintigraphie osseuse au biphosphonate",
      "E) L'angiographie pulmonaire sélective"
    ],
    correctAnswers: [2],
    explanation: "Le TEP-scan au 18-FDG selon l'échelle de Deauville (score de 1 à 5) est l'examen de référence pour évaluer la réponse métabolique au cycle 2 (TEP intermédiaire) et en fin de traitement (remplace la TDM en détectant la viabilité tumorale au sein des reliquats fibreux).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-18',
    courseId: 'crs-hemato-10',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans l'échelle de Deauville au TEP-TDM, un score considéré comme une réponse métabolique complète correspond à :",
    options: [
      "A) Score 1 (pas de fixation résiduelle) ou Score 2 (fixation ≤ médiastin) ou Score 3 (fixation > médiastin mais ≤ foie)",
      "B) Score 4 uniquement (fixation modérément supérieure au foie)",
      "C) Score 5 uniquement (fixation très intense ou nouvelle lésion)",
      "D) Score 0 uniquement",
      "E) Fixation exclusivement cérébrale"
    ],
    correctAnswers: [0],
    explanation: "Un score de Deauville 1, 2 ou 3 (fixation inférieure ou égale au bruit de fond hépatique) est considéré comme une rémission métabolique complète. Les scores 4 et 5 traduisent une maladie active résiduelle ou une progression.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-10-19',
    courseId: 'crs-hemato-10',
    questionNumber: 19,
    type: 'QCM',
    content: "Le mycosis fongoïde et le syndrome de Sézary sont des lymphomes primitifs de quel phénotype cellulaire et quel organe cible ?",
    options: [
      "A) Lymphomes T cutanés épidermotropes (cellules T à noyau cérébriforme)",
      "B) Lymphomes B spléniques",
      "C) Lymphomes ganglionnaires NK",
      "D) Proliférations histiocytaires hépatiques",
      "E) Plasmocytomes osseux"
    ],
    correctAnswers: [0],
    explanation: "Le mycosis fongoïde est le plus fréquent des lymphomes T cutanés primitifs (prolifération de cellules T matures CD4+ à noyau cérébriforme infiltrant l'épiderme = micro-abcès de Pautrier). Le syndrome de Sézary est sa forme érythrodermique et leucémique circulante.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-20',
    courseId: 'crs-hemato-10',
    questionNumber: 20,
    type: 'QCM',
    content: "Quel virus oncogène est directement associé au développement du lymphome de Burkitt endémique africain, du lymphome de Hodgkin (dans 40% des cas) et du cancer du nasopharynx ?",
    options: [
      "A) Le virus d'Epstein-Barr (EBV / HHV-4)",
      "B) Le cytomégalovirus (CMV)",
      "C) Le virus de l'hépatite B",
      "D) L'adénovirus type 7",
      "E) Le virus de la rougeole"
    ],
    correctAnswers: [0],
    explanation: "L'EBV (Epstein-Barr Virus) immortalise les lymphocytes B. Il est retrouvé dans 100% des lymphomes de Burkitt endémiques d'Afrique subsaharienne, dans environ 40% des lymphomes de Hodgkin (surtout formes à cellularité mixte) et dans le carcinome du rhinopharynx (UCNT).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-21',
    courseId: 'crs-hemato-10',
    questionNumber: 21,
    type: 'QCM',
    content: "Le risque de cancer secondaire à long terme le plus redouté chez les jeunes femmes traitées par radiothérapie médiastinale pour lymphome de Hodgkin est :",
    options: [
      "A) Le cancer du sein (recommandant un dépistage mammographique précoce 8 à 10 ans après l'irradiation)",
      "B) L'ostéosarcome du fémur",
      "C) Le mélanome de l'uvée",
      "D) L'adénocarcinome prostatique",
      "E) Le cancer de la vessie"
    ],
    correctAnswers: [0],
    explanation: "L'irradiation thoracique/médiastinale chez la jeune femme multiplie par 5 à 10 le risque de cancer du sein 10 à 20 ans plus tard. Un dépistage systématique annuel par IRM mammaire et mammographie est obligatoire à partir de 8 ans après la fin de la radiothérapie (ou dès l'âge de 25-30 ans).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-22',
    courseId: 'crs-hemato-10',
    questionNumber: 22,
    type: 'QCM',
    content: "Quel examen paraclinique apporte formellement la preuve diagnostique et la classification histologique et immunohistochimique d'un lymphome ?",
    options: [
      "A) Une ponction cytologique ganglionnaire à l'aiguille fine",
      "B) Une biopsie ganglionnaire chirurgicale exérèse avec acheminement à l'état frais",
      "C) Une sérologie EBV et CMV",
      "D) Une électrophorèse des protéines sériques",
      "E) Un scanner thoraco-abdomino-pelvien avec injection"
    ],
    correctAnswers: [1],
    explanation: "Règle d'or en hématologie : la ponction à l'aiguille fine est formellement insuffisante pour diagnostiquer un lymphome. Seule la biopsie ganglionnaire chirurgicale exérèse d'un ganglion entier permet d'analyser l'architecture tissulaire, de réaliser l'immunohistochimie, la cytogénétique (FISH) et la biologie moléculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-23',
    courseId: 'crs-hemato-10',
    questionNumber: 23,
    type: 'QCM',
    content: "Chez un patient de 25 ans avant de débuter une chimiothérapie curative pour lymphome de Hodgkin (ABVD ou BEACOPP), quelle démarche médico-légale et éthique est obligatoire ?",
    options: [
      "A) La cryoconservation de sperme au CECOS (préservation de la fertilité)",
      "B) La vaccination contre la typhoïde",
      "C) L'ablation prophylactique de la vésicule biliaire",
      "D) L'arrêt définitif de toute activité physique",
      "E) Une coronarographie systématique"
    ],
    correctAnswers: [0],
    explanation: "La chimiothérapie alkylante et les traitements anticancéreux comportent un risque élevé de stérilité définitive par azoospermie. La proposition d'une préservation de la fertilité (CECOS : autoconservation de sperme chez l'homme, prélèvement ovocytaire/tissu ovarien chez la femme) est une obligation légale avant tout traitement gonadotoxique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-24',
    courseId: 'crs-hemato-10',
    questionNumber: 24,
    type: 'QCM',
    content: "Le syndrome cave supérieur (œdème en pèlerine, turgescence jugulaire, circulation collatérale thoracique) est une urgence compressive fréquemment révélatrice de :",
    options: [
      "A) Une volumineuse masse médiastinale antérieure et moyenne (lymphome de Hodgkin ou lymphome T lymphoblastique)",
      "B) Une adénopathie inguinale isolée",
      "C) Une splénomégalie géante",
      "D) Un myélome osseux costal",
      "E) Une anémie hémolytique congénitale"
    ],
    correctAnswers: [0],
    explanation: "La compression ou thrombose de la veine cave supérieure par une masse médiastinale volumineuse (masse « bulky » de Hodgkin, LNH à grandes cellules ou T lymphoblastique) donne la triade : œdème en pèlerine, comblement des creux sus-claviculaires, turgescence des veines jugulaires et circulation collatérale thoracique antérieure.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-25',
    courseId: 'crs-hemato-10',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans les formes réfractaires ou en rechute de lymphomes B agressifs, quelle thérapie cellulaire révolutionnaire consiste à réinjecter les propres lymphocytes T du patient génétiquement modifiés pour cibler l'antigène CD19 ?",
    options: [
      "A) Les cellules CAR-T (Chimeric Antigen Receptor T-cells)",
      "B) L'allogreffe haplo-identique sans conditionnement",
      "C) Les transfusions de cellules souches mésenchymateuses",
      "D) Les anticorps bispécifiques anti-HER2",
      "E) L'injection d'interleukine 12 recombinante"
    ],
    correctAnswers: [0],
    explanation: "Les cellules CAR-T anti-CD19 (ex: Tisagenlecleucel, Axicabtagene ciloleucel) sont des lymphocytes T autologues armés in vitro d'un récepteur chimérique ciblant spécifiquement le CD19 des cellules tumorales lymphoïdes B, induisant des rémissions prolongées même après échec de multiples lignes de chimiothérapie.",
    difficulty: 'moyen'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-10-cs1',
    courseId: 'crs-hemato-10',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un jeune homme de 22 ans consulte pour une adénopathie sus-claviculaire gauche indolore, ferme, mesurant 3,5 cm, évoluant depuis 6 semaines, accompagnée d'un prurit nocturne généralisé sans lésion cutanée spécifique et d'une perte de 5 kg en 2 mois. La radiographie montre un élargissement du médiastin antérieur supérieur (rapport médiastino-thoracique = 0,38).\n\nQuel geste diagnostique premier doit être planifié pour poser le diagnostic de certitude ?",
    options: [
      "A) Ponction à l'aiguille fine pour cytologie",
      "B) Biopsie-exérèse chirurgicale complète du ganglion sus-claviculaire pour examen anatomopathologique et immunohistochimique",
      "C) Mise sous traitement antituberculeux d'épreuve pendant 2 mois",
      "D) Scanner thoracique simple avec surveillance à 3 mois",
      "E) TEP-scanner seul sans biopsie"
    ],
    correctAnswers: [1],
    explanation: "Devant une adénopathie sus-claviculaire avec masse médiastinale et signes généraux chez un sujet jeune, le diagnostic de lymphome de Hodgkin est hautement suspecté. La biopsie chirurgicale d'exérèse du ganglion est impérative pour confirmer la présence de cellules de Reed-Sternberg dans un stroma inflammatoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-cs2',
    courseId: 'crs-hemato-10',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : L'histologie confirme un lymphome de Hodgkin classique scléronodulaire (CD30+, CD15+). Le bilan d'extension retrouve : adénopathies cervicales et sus-claviculaires gauches, masse médiastinale antérieure, absence d'adénopathie sous-diaphragmatique, absence de splénomégalie, BOM normale. Le patient a perdu 8% de son poids et n'a ni fièvre ni sueurs.\n\nQuel est le stade d'Ann Arbor de ce patient ?",
    options: [
      "A) Stade I A",
      "B) Stade II A (atteinte de deux territoires ganglionnaires du même côté du diaphragme, sans signes B)",
      "C) Stade II B",
      "D) Stade III A",
      "E) Stade IV B"
    ],
    correctAnswers: [1],
    explanation: "Les territoires atteints sont sus-claviculaires/cervicaux et médiastinaux : tous situés au-dessus du diaphragme (donc stade II). La perte de poids est de 8% (seuil requis pour le signe B : > 10%), pas de fièvre ni sueurs : donc pas de critères B réquisitionnés = Stade II A.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-10-cs3',
    courseId: 'crs-hemato-10',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une femme de 62 ans présente une volumineuse masse abdominale comprimant les voies digestives avec adénopathies mésentériques et rétro-péritonéales multiples. La biopsie percutanée sous scanner révèle une prolifération diffuse effaçant l'architecture de grandes cellules lymphoïdes B exprimant intensément le CD20, le CD19 et BCL-6, avec un index Ki-67 à 85%.\n\nQuel est le diagnostic précis et quelle immunochimiothérapie est indiquée en première intention ?",
    options: [
      "A) Maladie de Hodgkin ; Protocole ABVD",
      "B) Lymphome diffus à grandes cellules B (LDGCB) ; Protocole R-CHOP",
      "C) Lymphome folliculaire de bas grade ; Abstention thérapeutique",
      "D) Myélome multiple ; Protocole Bortézomib-Dexaméthasone",
      "E) Leucémie aiguë myéloïde ; Protocole 7+3"
    ],
    correctAnswers: [1],
    explanation: "Grandes cellules B proliférant de façon diffuse CD20+ avec index mitotique très élevé = Lymphome Diffus à Grandes Cellules B (LDGCB). Le traitement de première intention est l'association Rituximab (anti-CD20) + polychimiothérapie CHOP (R-CHOP).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-cs4',
    courseId: 'crs-hemato-10',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un enfant de 8 ans originaire d'Afrique de l'Ouest est hospitalisé pour une tuméfaction mandibulaire déformante évoluant rapidement en 2 semaines. L'histologie met en évidence des cellules lymphoïdes de taille moyenne très basophiles avec de nombreuses mitoses et des macrophages créant un aspect typique en ciel étoilé. La cytogénétique retrouve une translocation t(8;14).\n\nQuel est le diagnostic et quelle complication métabolique aiguë doit être prévenue en extrême urgence à l'initiation de la chimiothérapie ?",
    options: [
      "A) Neuroblastome métastatique ; Hypocalcémie par tétanie",
      "B) Lymphome de Burkitt endémique ; Syndrome de lyse tumorale aigu (hyperkaliémie, hyperuricémie, insuffisance rénale)",
      "C) Tératome mature ; Hypoglycémie sévère",
      "D) Kyste osseux anévrysmal ; Embolie graisseuse",
      "E) Ostéosarcome mandibulaire ; Hypernatrémie de déshydratation"
    ],
    correctAnswers: [1],
    explanation: "Tumeur maxillaire/mandibulaire d'évolution explosive chez l'enfant africain, t(8;14), ciel étoilé = Lymphome de Burkitt. En raison du temps de doublement ultra-court (24h) et de la sensibilité extrême à la chimiothérapie, le risque de syndrome de lyse tumorale massif est maximal dès les premières heures de traitement (hyperhydratation et Rasburicase indispensables).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-10-cs5',
    courseId: 'crs-hemato-10',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un homme de 55 ans consulte pour des épigastralgies calmées par les repas. La gastroscopie visualise un épaississement des plis fundiques avec érosions superficielles. Les biopsies étagées mettent en évidence un infiltrat lymphocytaire B de la zone marginale avec lésions lympho-épithéliales caractéristiques d'un lymphome du MALT de bas grade, sans translocation t(11;18). Le test à l'uréase confirme la présence d'Helicobacter pylori.\n\nQuelle est la stratégie thérapeutique de première intention recommandée ?",
    options: [
      "A) Gastrectomie totale élargie avec curage ganglionnaire D2",
      "B) Traitement d'éradication d'Helicobacter pylori par quadrithérapie bismuthée pendant 14 jours, puis contrôle endoscopique et histologique à 3-6 mois",
      "C) Polychimiothérapie lourde type R-CHOP en hospitalisation",
      "D) Radiothérapie externe à forte dose sur tout l'abdomen",
      "E) Surveillance sans aucun traitement"
    ],
    correctAnswers: [1],
    explanation: "Dans le lymphome gastrique du MALT de bas grade localisé sans t(11;18) associé à Helicobacter pylori, l'éradication de la bactérie par une antibiothérapie adaptée (quadrithérapie bismuthée ou concomitante) permet la régression complète et la guérison du lymphome dans plus de 75-80% des cas sans recours à la chimiothérapie ni à la chirurgie.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_10_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-10-01',
    courseId: 'crs-hemato-10',
    type: 'resume',
    title: "Mind Map Synthèse : Lymphomes Hodgkin & Non-Hodgkin",
    contentMarkdown: `# Mind Map : Lymphomes (Pr Oukid)

\`\`\`
                                         LYMPHOMES
                                             │
                   ┌─────────────────────────┴─────────────────────────┐
                   ▼                                                   ▼
          LYMPHOME DE HODGKIN                                 LYMPHOMES NON HODGKINIENS (LNH)
  - Cellule de Reed-Sternberg (RS) :                    - Prolifération monoclonale (B 85%, T 15%)
    Binucléée "yeux de hibou", CD30+, CD15+             - B agressifs : LDGCB (R-CHOP), Burkitt t(8;14)
  - Sous-types :                                        - B indolents : Folliculaire t(14;18), MALT (H. pylori)
    * Sclérose nodulaire (65%, femme jeune, médiastin)  - Manteau : t(11;14), Cycline D1(+)
    * Cellularité mixte (EBV+)                          - Cutanés : Mycosis fongoïde, Sézary
  - Signes B : Perte de poids >10%, Fièvre, Sueurs
  - Standard : ABVD (+/- Radiothérapie), TEP-scan
\`\`\`

## Stades d'Ann Arbor :
- **I** : 1 seule aire ganglionnaire.
- **II** : ≥ 2 aires ganglionnaires du MÊME côté du diaphragme.
- **III** : Atteinte ganglionnaire des DEUX côtés du diaphragme.
- **IV** : Atteinte viscérale extra-lymphatique non contiguë (foie, moelle, poumon).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-10-02',
    courseId: 'crs-hemato-10',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Lymphomes",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Biopsie à l'aiguille fine** :
   - TOUJOURS FAUSSE dans les QCM de diagnostic de lymphome ! Il faut une **biopsie chirurgicale d'exérèse ganglionnaire entière**.
2. **Translocations à connaître par cœur** :
   - **t(14;18)** = Lymphome Folliculaire (surexpression de BCL-2).
   - **t(8;14)** = Lymphome de Burkitt (surexpression de c-MYC).
   - **t(11;14)** = Lymphome du Manteau (surexpression de Cycline D1).
3. **MALT gastrique & H. pylori** :
   - Traitement de première intention = **Éradication antibiotique d'H. pylori** ! Pas de chirurgie ni de chimio d'emblée.
4. **Toxicité des drogues de l'ABVD** :
   - **A**driamycine : Cardiotoxicité (FEVG avant chimio).
   - **B**léomycine : Fibrose pulmonaire (EFR + DLCO obligatoires).
   - **V**inblastine : Neuropathie périphérique.
   - **D**acarbazine : Émétisante.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 11: HÉMOPHILIE & COAGULOPATHIES - Dr Ziani AA
// ==========================================
export const HEMATO_LESSON_11_QUESTIONS: Question[] = [
  {
    id: 'q-hem-11-01',
    courseId: 'crs-hemato-11',
    questionNumber: 1,
    type: 'QCM',
    content: "L'hémophilie A et l'hémophilie B sont transmises selon quel mode génétique ?",
    options: [
      "A) Autosomique dominant",
      "B) Autosomique récessif",
      "C) Récessif lié au chromosome X (touchant quasi-exclusivement les garçons)",
      "D) Dominant lié à l'X",
      "E) Transmission mitochondriale maternelle exclusive"
    ],
    correctAnswers: [2],
    explanation: "Les gènes des facteurs VIII et IX sont situés sur le bras long du chromosome X (Xq28 et Xq27). La transmission est récessive liée à l'X. Les femmes conductrices transmettent la mutation à 50% de leurs fils (atteints) et à 50% de leurs filles (conductrices).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-02',
    courseId: 'crs-hemato-11',
    questionNumber: 2,
    type: 'QCM',
    content: "L'hémophilie A est due à un déficit congénital en facteur :",
    options: [
      "A) Facteur VII",
      "B) Facteur VIII (anti-hémophilique A)",
      "C) Facteur IX (anti-hémophilique B)",
      "D) Facteur XI (hémophilie C de Rosenthal)",
      "E) Facteur XIII"
    ],
    correctAnswers: [1],
    explanation: "Hémophilie A = déficit en Facteur VIII (représente 80 à 85% des hémophilies). Hémophilie B (maladie de Christmas) = déficit en Facteur IX (15 à 20%).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-03',
    courseId: 'crs-hemato-11',
    questionNumber: 3,
    type: 'QCM',
    content: "L'hémophilie est dite SÉVÈRE lorsque le taux résiduel de facteur coagulant (FVIII ou FIX) est :",
    options: [
      "A) Inférieur à 1% (< 0,01 UI/mL)",
      "B) Compris entre 1% et 5%",
      "C) Compris entre 5% et 20%",
      "D) Compris entre 20% et 40%",
      "E) Égal à 50%"
    ],
    correctAnswers: [0],
    explanation: "Classification de la sévérité de l'hémophilie : Sévère = Facteur < 1% (saignements spontanés fréquents, hémarthroses dès l'apprentissage de la marche) ; Modérée = Facteur entre 1% et 5% ; Légère ou mineure = Facteur entre 5% et 40% (saignements post-traumatiques ou chirurgicaux).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-04',
    courseId: 'crs-hemato-11',
    questionNumber: 4,
    type: 'QCM',
    content: "La manifestation hémorragique la plus caractéristique et la plus fréquente de l'hémophilie sévère est :",
    options: [
      "A) Le purpura pétéchial cutané diffus",
      "B) Les hémarthroses récidivantes touchant les grosses articulations (genoux, coudes, chevilles)",
      "C) L'épistaxis spontanée bilatérale",
      "D) Les métrorragies abondantes",
      "E) Le saignement gingival au brossage"
    ],
    correctAnswers: [1],
    explanation: "Les hémarthroses (épanchements de sang intra-articulaires) représentent plus de 80% des manifestations de l'hémophilie sévère, touchant électivement genoux, coudes et chevilles. Leur répétition conduit à l'arthropathie hémophilique chronique invalidante.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-05',
    courseId: 'crs-hemato-11',
    questionNumber: 5,
    type: 'QCM',
    content: "Le profil biologique standard d'une hémophilie A ou B non compliquée montre :",
    options: [
      "A) Allongement isolé du TCA avec TP, Temps de Saignement/PFA et Plaquettes strictement normaux",
      "B) Allongement isolé du TP avec TCA normal",
      "C) Thrombopénie profonde avec TCA allongé",
      "D) Allongement simultané du TP, du TCA et du Temps de Thrombine",
      "E) Diminution isolée du fibrinogène"
    ],
    correctAnswers: [0],
    explanation: "Dans l'hémophilie (A ou B), l'anomalie porte sur la voie endogène de la coagulation. Le TCA est donc allongé de façon isolée (ratio malade/témoin > 1,20). L'hémostase primaire (plaquettes, TS, PFA) et la voie extrinsèque (TP) sont strictement normales.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-06',
    courseId: 'crs-hemato-11',
    questionNumber: 6,
    type: 'QCM',
    content: "L'épreuve de correction du TCA par mélange avec un plasma témoin à 50% chez un patient hémophile non allo-immunisé donne :",
    options: [
      "A) Une correction immédiate et complète du TCA",
      "B) Une absence totale de correction du TCA",
      "C) Une accentuation paradoxale de l'allongement du TCA",
      "D) Une modification uniquement après 24 heures",
      "E) Une diminution du taux de prothrombine"
    ],
    correctAnswers: [0],
    explanation: "Puisqu'il s'agit d'un simple déficit constitutionnel en facteur (sans inhibiteur), le plasma témoin apporte le facteur manquant : le mélange à volumes égaux (50/50) normalise immédiatement et complètement le TCA.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-07',
    courseId: 'crs-hemato-11',
    questionNumber: 7,
    type: 'QCM',
    content: "La complication iatrogène majeure du traitement substitutif par concentrés de facteur VIII chez un enfant hémophile A sévère est :",
    options: [
      "A) L'apparition d'un anticorps inhibiteur anti-facteur VIII (allo-anticorps neutralisant) chez 25 à 30% des patients",
      "B) Le développement systématique d'une cirrhose hépatique",
      "C) Une surdité neurosensorielle bilatérale",
      "D) Une hypercalcémie maligne",
      "E) Une aplasie médullaire réactionnelle"
    ],
    correctAnswers: [0],
    explanation: "L'apparition d'un inhibiteur (allo-anticorps IgG neutralisant le facteur VIII perfusé) est la complication la plus redoutable du traitement substitutif (survenant chez 25 à 30% des hémophiles A sévères), rendant inefficace le traitement substitutif standard.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-08',
    courseId: 'crs-hemato-11',
    questionNumber: 8,
    type: 'QCM',
    content: "L'Emicizumab (Hemlibra) est un traitement moderne de l'hémophilie A administré par voie sous-cutanée dont le mécanisme est :",
    options: [
      "A) Un anticorps monoclonal bispécifique mimant l'action du facteur VIII activé en reliant le FIXa et le FX",
      "B) Un concentré recombinant de facteur VIII à demi-vie prolongée",
      "C) Une thérapie génique détruisant le chromosome X muté",
      "D) Un inhibiteur direct de la thrombine",
      "E) Un anti-fibrinolytique de synthèse"
    ],
    correctAnswers: [0],
    explanation: "L'Emicizumab est un anticorps monoclonal bispécifique qui se lie simultanément au FIXa et au FX, mimant la fonction de cofacteur du FVIII activé. Il n'est pas reconnu par les inhibiteurs anti-FVIII et s'administre en sous-cutané hebdomadaire ou mensuel.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-11-09',
    courseId: 'crs-hemato-11',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle classe médicamenteuse et quelle voie d'administration sont FORMELLEMENT CONTRE-INDIQUÉES chez tout patient hémophile ?",
    options: [
      "A) L'aspirine/AINS et les injections intra-musculaires (risque d'hématome compressif profond)",
      "B) Le paracétamol par voie orale",
      "C) Les perfusions intraveineuses sur voie périphérique",
      "D) L'antibiothérapie par voie orale",
      "E) L'acide tranexamique en topique local"
    ],
    correctAnswers: [0],
    explanation: "Règles de sécurité chez l'hémophile : contre-indication absolue des injections intramusculaires (IM = hématomes profonds suffocants ou compressifs), contre-indication de l'aspirine et des AINS (qui altèrent l'hémostase primaire), interdiction des gestes invasifs non protégés par traitement substitutif.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-10',
    courseId: 'crs-hemato-11',
    questionNumber: 10,
    type: 'QCM',
    content: "Dans l'hémophilie A mineure ou modérée sans inhibiteur, quel médicament analogue de la vasopressine permet de libérer les stocks endogènes de FVIII et de vWF sans recourir aux dérivés sanguins ?",
    options: [
      "A) La desmopressine (DDAVP)",
      "B) L'héparine de bas poids moléculaire",
      "C) L'acide acétylsalicylique",
      "D) Le facteur VII activé recombinant",
      "E) Le sulfate de protamine"
    ],
    correctAnswers: [0],
    explanation: "La desmopressine (DDAVP) stimule la libération endothéliale de facteur VIII et de facteur Willebrand à partir des corps de Weibel-Palade. Elle multiplie par 3 à 5 le taux circulant de FVIII dans les hémophilies A modérées et la maladie de Willebrand type 1.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-11',
    courseId: 'crs-hemato-11',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans la maladie de Willebrand de type 1 (forme la plus fréquente, 70-80% des cas), l'anomalie biologique est :",
    options: [
      "A) Un déficit quantitatif partiel en facteur von Willebrand avec intégrité de la structure multimérique",
      "B) Une absence totale de vWF dans le plasma et les plaquettes",
      "C) Une anomalie qualitative avec perte sélective des multimères de haut poids moléculaire",
      "D) Une hyperactivité plaquettaire constitutionnelle",
      "E) Un déficit isolé en facteur IX"
    ],
    correctAnswers: [0],
    explanation: "Le type 1 est un déficit quantitatif partiel bénin à modéré en facteur Willebrand de structure normale (transmission autosomique dominante). Le type 2 est qualitatif, le type 3 est un déficit quantitatif total récessif sévère.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-11-12',
    courseId: 'crs-hemato-11',
    questionNumber: 12,
    type: 'QCM',
    content: "La prise en charge en urgence d'une hémarthrose aiguë chez un enfant hémophile A sévère comporte immédiatement :",
    options: [
      "A) Injection IV immédiate de concentré de Facteur VIII recombinant (40-50 UI/kg), mise au repos, glaçage, antalgiques (paracétamol) et pas d'AINS",
      "B) Ponction articulaire évacuatrice immédiate sans couverture par facteur VIII",
      "C) Injection intra-articulaire de corticoïdes en urgence",
      "D) Mobilisation active forcée et massage vigoureux",
      "E) Pose d'un plâtre circulaire serré pendant 2 mois"
    ],
    correctAnswers: [0],
    explanation: "Prise en charge urgente de l'hémarthrose : 1. Traitement substitutif immédiat par concentré de FVIII (viser un pic de 80 à 100%) ; 2. Mesures RICE (Rest, Ice, Compression douce, Elevation) ; 3. Antalgiques (paracétamol ou morphiniques si besoin, proscription formelle des AINS et aspirine). La ponction articulaire est formellement contre-indiquée en routine (risque d'aggravation hémorragique et d'infection).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-13',
    courseId: 'crs-hemato-11',
    questionNumber: 13,
    type: 'QCM',
    content: "Le diagnostic prénatal de l'hémophilie A sévère chez une femme conductrice connue peut être réalisé dès 11-12 semaines d'aménorrhée par :",
    options: [
      "A) Biopsie de villosités choriales (choriocentèse) avec analyse de l'ADN fœtal (recherche d'inversion de l'intron 22)",
      "B) Échographie morphologique fœtale simple",
      "C) Amniocentèse à 35 semaines pour dosage du fibrinogène",
      "D) Prélèvement de sang au cordon le jour du terme",
      "E) Dosage des œstrogènes urinaires maternels"
    ],
    correctAnswers: [0],
    explanation: "Après détermination précoce du sexe fœtal sur sang maternel (recherche du chromosome Y), si le fœtus est masculin, une biopsie de trophoblaste / villosités choriales à 11-12 SA permet l'extraction d'ADN fœtal et la recherche de la mutation familiale (dans 50% des hémophilies A sévères : inversion de l'intron 22).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-11-14',
    courseId: 'crs-hemato-11',
    questionNumber: 14,
    type: 'QCM',
    content: "Chez un patient hémophile présentant un inhibiteur anti-FVIII à titre élevé (> 5 unités Bethesda), quel traitement hémostatique permet de contourner le déficit ('by-passing agents') lors d'un accident hémorragique ?",
    options: [
      "A) Le facteur VII activé recombinant (rFVIIa / NovoSeven) ou le concentré de complexe prothrombinique activé (aPCC / FEIBA)",
      "B) Des doses standards de facteur VIII",
      "C) Du plasma frais congelé à faible débit",
      "D) De l'acide ascorbique intraveineux",
      "E) Des culots globulaires simples"
    ],
    correctAnswers: [0],
    explanation: "En présence d'un inhibiteur à titre élevé (> 5 UB), le facteur VIII perfusé est instantanément détruit. On utilise des agents dits de contournement ('by-passing agents') : Facteur VII activé recombinant (NovoSeven) ou complexe prothrombinique activé (FEIBA), qui génèrent de la thrombine indépendamment du FVIII.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-11-15',
    courseId: 'crs-hemato-11',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans la coagulopathie de type déficit en facteur XI (hémophilie C de Rosenthal) :",
    options: [
      "A) La transmission est autosomique récessive, fréquente dans la population juive ashkénaze, et la corrélation clinico-biologique est faible",
      "B) La transmission est récessive liée à l'X stricte",
      "C) Les hémarthroses spontanées sont systématiques",
      "D) Le TP est très effondré avec TCA normal",
      "E) Le saignement ne survient jamais après chirurgie"
    ],
    correctAnswers: [0],
    explanation: "Le déficit en FXI (hémophilie C) est autosomique récessif (touche hommes et femmes), particulièrement prévalent chez les juifs ashkénazes. Contrairement à l'hémophilie A, il n'y a pas d'hémarthrose spontanée, et la sévérité des saignements ne correspond pas forcément au taux de FXI.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-11-16',
    courseId: 'crs-hemato-11',
    questionNumber: 16,
    type: 'QCM',
    content: "Pour éviter l'atrophie musculaire et la raideur articulaire après la phase aiguë d'une hémarthrose traitée par facteur substitutif, la prise en charge comprend obligatoirement :",
    options: [
      "A) Une kinésithérapie motrice douce et précoce sous couverture hémostatique par concentrés de facteur",
      "B) Une immobilisation plâtrée prolongée de 3 mois",
      "C) Des ponctions quotidiennes au bloc",
      "D) L'interdiction définitive de marcher",
      "E) Des massages profonds avec ventouses"
    ],
    correctAnswers: [0],
    explanation: "Dès que l'épisode hémorragique est contrôlé par les perfusions de facteur, la mobilisation articulaire passive puis active et la rééducation sous couverture hémostatique sont fondamentales pour préserver les amplitudes articulaires et éviter la fonte musculaire péri-articulaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-17',
    courseId: 'crs-hemato-11',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle manifestation hémorragique viscérale représente la principale cause de mortalité précoce chez les patients hémophiles ?",
    options: [
      "A) L'hémorragie intra-crânienne (hématome sous-dural, intra-cérébral)",
      "B) L'hémarthrose du genou",
      "C) L'épistaxis antérieure",
      "D) L'hématurie microscopique",
      "E) L'ecchymose fessière"
    ],
    correctAnswers: [0],
    explanation: "L'hémorragie intra-crânienne (spontanée ou post-traumatique, parfois après un traumatisme crânien bénin) est la première cause de mortalité chez l'hémophile. Tout traumatisme crânien chez un hémophile impose une injection immédiate de facteur AVANT même la réalisation du scanner cérébral !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-18',
    courseId: 'crs-hemato-11',
    questionNumber: 18,
    type: 'QCM',
    content: "L'administration prophylactique primaire chez l'enfant hémophile A sévère a pour objectif fondamental de :",
    options: [
      "A) Transformer l'hémophilie sévère en hémophilie modérée (taux résiduel de FVIII > 1-2%) pour prévenir l'apparition des hémarthroses et de l'arthropathie hémophilique chronique",
      "B) Guérir définitivement la mutation génétique",
      "C) Remplacer les plaquettes sanguines",
      "D) Prévenir l'apparition de l'asthme",
      "E) Remplacer la vaccination obligatoire"
    ],
    correctAnswers: [0],
    explanation: "La prophylaxie primaire (injections régulières de FVIII 2 à 3 fois par semaine débutées dès le premier épisode hémorragique ou avant l'âge de 2 ans) maintient un taux de facteur résiduel au-dessus de 1 à 2%, évitant les saignements spontanés et prévenant la destruction articulaire à long terme.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-19',
    courseId: 'crs-hemato-11',
    questionNumber: 19,
    type: 'QCM',
    content: "L'inversion de l'intron 22 du gène F8 est retrouvée dans quelle proportion des cas d'hémophilie A sévère ?",
    options: [
      "A) Environ 45 à 50% des cas",
      "B) Moins de 1% des cas",
      "C) 100% des cas",
      "D) Uniquement dans les formes légères",
      "E) Uniquement chez les femmes"
    ],
    correctAnswers: [0],
    explanation: "L'inversion de l'intron 22 par recombinaison homologue intrachromosomique est l'anomalie génétique récurrente majeure, responsable d'environ la moitié (45-50%) des cas d'hémophilie A sévère dans le monde.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-11-20',
    courseId: 'crs-hemato-11',
    questionNumber: 20,
    type: 'QCM',
    content: "Une femme peut-elle théoriquement être atteinte d'hémophilie A sévère symptomatique ?",
    options: [
      "A) Oui, dans des situations rarissimes : père hémophile et mère conductrice (homozygotie), syndrome de Turner (45,X0), ou inactivation très asymétrique (biaisée) du chromosome X normal (lyonisation défavorable)",
      "B) Non, c'est génétiquement et biologiquement impossible",
      "C) Oui, systématiquement si son père est hémophile",
      "D) Uniquement après la ménopause",
      "E) Uniquement si elle prend de l'aspirine"
    ],
    correctAnswers: [0],
    explanation: "Bien qu'exceptionnelle, l'hémophilie féminine sévère existe : consanguinité (père hémophile + mère conductrice), anomalie du caryotype (Turner 45,X avec allèle muté sur le seul X), ou lyonisation extrêmement biaisée inactivant le chromosome X sain dans la majorité des cellules hépatocytaires.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-11-21',
    courseId: 'crs-hemato-11',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans la surveillance d'un patient hémophile recevant des facteurs de coagulation d'origine plasmatique historiquement avant les années 1990, quelles sérologies virales devaient être surveillées systématiquement ?",
    options: [
      "A) VIH, VHC (hépatite C) et VHB (hépatite B)",
      "B) Rougeole et oreillons",
      "C) Ébola et Marburg",
      "D) Rotavirus et adénovirus",
      "E) Tétanos et diphtérie"
    ],
    correctAnswers: [0],
    explanation: "Le drame historique des hémophiles contaminés par les dérivés plasmatiques non sécurisés par inactivations virales a causé des contaminations massives par le VIH et le VHC dans les années 1980. Aujourd'hui, les facteurs recombinants et les procédés d'inactivation virale garantissent une sécurité absolue.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-22',
    courseId: 'crs-hemato-11',
    questionNumber: 22,
    type: 'QCM',
    content: "Quelle précaution technique est impérative lors de la réalisation des vaccinations obligatoires chez un nourrisson hémophile ?",
    options: [
      "A) Utiliser la voie sous-cutanée stricte (aiguille fine 25G) avec compression ferme prolongée pendant au moins 5 minutes, sans masser, et éviter la voie intramusculaire",
      "B) Ne réaliser aucun vaccin avant l'âge de 18 ans",
      "C) Réaliser le vaccin exclusivement par voie intraveineuse",
      "D) Faire une anesthésie générale systématique",
      "E) Injecter le vaccin dans l'articulation du genou"
    ],
    correctAnswers: [0],
    explanation: "Les vaccins obligatoires doivent être réalisés : voie sous-cutanée préférée (ou IM avec aiguille fine après injection de facteur), compression prolongée non traumatique pendant 5 à 10 minutes sans frottement. La vaccination contre l'hépatite B est particulièrement recommandée très tôt.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-23',
    courseId: 'crs-hemato-11',
    questionNumber: 23,
    type: 'QCM',
    content: "Le titre d'un inhibiteur anti-facteur VIII est quantifié en laboratoire de coagulation en :",
    options: [
      "A) Unités Bethesda (UB/mL)",
      "B) Milligrammes par litre",
      "C) Pourcentage d'hémolyse",
      "D) Index de Quick",
      "E) Ratio d'Ivy"
    ],
    correctAnswers: [0],
    explanation: "L'activité de l'inhibiteur est mesurée par la méthode de Bethesda (ou méthode de Nijmegen). Une unité Bethesda (UB) est définie comme la quantité d'anticorps neutralisant 50% de l'activité du facteur VIII d'un plasma normal après 2 heures d'incubation à 37°C.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-24',
    courseId: 'crs-hemato-11',
    questionNumber: 24,
    type: 'QCM',
    content: "L'hématome du psoas chez l'hémophile est un piège diagnostic classique qui peut simuler :",
    options: [
      "A) Une appendicite aiguë avec psoïtis (flexion douloureuse de la cuisse, fébricule)",
      "B) Une fracture du crâne",
      "C) Une otite moyenne aiguë",
      "D) Une luxation d'épaule",
      "E) Une kératite herpétique"
    ],
    correctAnswers: [0],
    explanation: "L'hématome du psoas (ou rétro-péritonéal) se manifeste par une douleur de la fosse iliaque ou de la hanche avec attitude vicieuse en psoïtis (cuisse fléchie en rotation externe) et déficit sensitif crural, mimant parfaitement une appendicite aiguë fébrile. L'échographie ou le scanner confirme l'hématome.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-11-25',
    courseId: 'crs-hemato-11',
    questionNumber: 25,
    type: 'QCM',
    content: "La thérapie génique récemment approuvée dans l'hémophilie B sévère (ex: Etranacogene dezaparvovec) utilise comme vecteur :",
    options: [
      "A) Un virus adéno-associé (AAV5) délivrant la variante hautement active FIX-Padua dans les hépatocytes",
      "B) Une bactérie intestinale génétiquement modifiée",
      "C) Un rétrovirus oncogène non inactivé",
      "D) Un plasmide d'origine végétale",
      "E) Des liposomes sans matériel génétique"
    ],
    correctAnswers: [0],
    explanation: "La thérapie génique de l'hémophilie B utilise un vecteur viral adéno-associé hépatotrope (AAV5) transportant le transgène codant pour le variant FIX-Padua (qui possède une activité coagulante 8 fois supérieure à la normale), permettant une expression stable de FIX pendant plusieurs années après une perfusion unique.",
    difficulty: 'difficile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-11-cs1',
    courseId: 'crs-hemato-11',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un garçon de 18 mois présente un volumineux épanchement chaud et douloureux du genou droit suite à une simple chute de sa hauteur lors de l'apprentissage de la marche. La ponction n'est pas réalisée. Bilan : Plaquettes 280 000 / mm³, TP 100%, TCA allongé à 85 s (témoin 30 s). Le test de mélange normalise immédiatement le TCA.\n\nQuel diagnostic évoquez-vous et quel dosage spécifique demandez-vous en urgence ?",
    options: [
      "A) Purpura thrombopénique immunologique ; dosage des anticorps anti-plaquettes",
      "B) Hémarthrose sur hémophilie constitutionnelle ; dosage chronométrique spécifique de l'activité coagulante du Facteur VIII et du Facteur IX",
      "C) Arthrite septique bactérienne ; hémocultures seules sans bilan de coagulation",
      "D) Maladie de Willebrand type 3 exclusivement ; dosage de la métalloprotéase ADAMTS13",
      "E) Thrombopathie constitutionnelle ; agrégation plaquettaire"
    ],
    correctAnswers: [1],
    explanation: "Hémarthrose inaugurale chez un petit garçon qui commence à marcher + allongement isolé et corrigé du TCA = Suspicion majeure d'hémophilie. Il faut doser immédiatement le FVIII et le FIX pour distinguer l'hémophilie A de l'hémophilie B et quantifier le taux pour graduer la sévérité (< 1% = sévère).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-cs2',
    courseId: 'crs-hemato-11',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Le dosage confirme une hémophilie A avec un taux de Facteur VIII < 0,5% (< 1% = sévère). Pour traiter cette hémarthrose aiguë du genou en urgence, quelle est la dose de facteur VIII recombinant à injecter ?",
    options: [
      "A) 5 UI/kg par voie sous-cutanée",
      "B) 40 à 50 UI/kg par voie intraveineuse directe lente pour obtenir un pic plasmatique proche de 80 à 100%",
      "C) 1 UI/kg par voie intramusculaire",
      "D) Perfusion de 4 litres de sérum physiologique seul",
      "E) 2 comprimés d'aspirine 500 mg"
    ],
    correctAnswers: [1],
    explanation: "Chaque UI/kg de FVIII perfusé augmente le taux circulant de 2%. Pour obtenir un taux hémostatique efficace de 80 à 100% dans une hémarthrose aiguë sévère, la posologie recommandée est de 40 à 50 UI/kg par voie intraveineuse directe.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-cs3',
    courseId: 'crs-hemato-11',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un jeune homme de 19 ans atteint d'hémophilie A sévère connue est victime d'un accident de scooter avec traumatisme crânien sans perte de connaissance initiale. Il arrive aux urgences conscient, mais présente des céphalées d'intensité croissante.\n\nQuelle est l'attitude thérapeutique et diagnostique immédiate OBLIGATOIRE ?",
    options: [
      "A) Injecter immédiatement du concentré de facteur VIII à dose curative maximale (50 UI/kg IV) AVANT de transférer le patient au scanner cérébral",
      "B) Attendre le résultat du scanner cérébral avant d'ouvrir un flacon de facteur VIII",
      "C) Donner 1 g d'ibuprofène per os et surveiller 2 heures",
      "D) Faire une ponction lombaire en première intention",
      "E) Réaliser un fond d'œil et renvoyer à domicile si absence d'œdème papillaire"
    ],
    correctAnswers: [0],
    explanation: "Règle absolue d'urgence vitale : Tout traumatisme crânien chez un hémophile doit être considéré comme une hémorragie intracrânienne jusqu'à preuve du contraire. L'injection de facteur VIII à dose maximale (50 UI/kg visant 100%) doit être réalisée IMMÉDIATEMENT, sans attendre le résultat du scanner cérébral !",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-cs4',
    courseId: 'crs-hemato-11',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un enfant de 3 ans hémophile A sévère ayant reçu 18 jours d'exposition au facteur VIII recombinant présente un saignement de la langue après morsure qui ne s'arrête pas malgré 3 injections consécutives de FVIII à dose adaptée. Le TCA de contrôle reste allongé à 90 s deux heures après la perfusion. Le mélange malade + témoin ne se corrige plus.\n\nQuel diagnostic explique cet échec et quel dosage confirmera le titre de cette complication ?",
    options: [
      "A) Survenue d'un inhibiteur anti-facteur VIII (allo-anticorps) ; Titrage de l'inhibiteur en Unités Bethesda (UB)",
      "B) Erreur de flacon de perfusion",
      "C) Déshydratation aiguë",
      "D) Apparition d'un facteur VIII résistant",
      "E) Guérison spontanée de l'hémophilie"
    ],
    correctAnswers: [0],
    explanation: "L'inefficacité clinique et biologique du FVIII perfusé associée à un test de mélange devenu non correcteur signe l'apparition d'un anticorps neutralisant anti-FVIII (inhibiteur). Le diagnostic est quantifié par le test de Bethesda (faible répondeur < 5 UB, fort répondeur ≥ 5 UB).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-11-cs5',
    courseId: 'crs-hemato-11',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Une femme de 26 ans sans antécédent hémorragique personnel consulte en consultation de conseil génétique car son père est atteint d'hémophilie A sévère. Elle est enceinte d'un garçon à 10 semaines d'aménorrhée.\n\nQuel est le statut génétique certain de cette patiente et quel est le risque que son futur fils soit atteint d'hémophilie ?",
    options: [
      "A) Elle est obligatoirement conductrice (100% de risque) car son père lui a transmis son unique chromosome X muté ; le risque pour son fils d'être hémophile est de 50%",
      "B) Elle a 50% de risque d'être conductrice et son fils a 25% de risque d'être atteint",
      "C) Elle est saine et son fils ne court aucun risque",
      "D) Son fils est obligatoirement hémophile à 100%",
      "E) Le risque est impossible à déterminer sans amniocentèse immédiate"
    ],
    correctAnswers: [0],
    explanation: "Puisque l'homme transmet son unique chromosome X à toutes ses filles et son chromosome Y à ses fils, toutes les filles d'un père hémophile sont obligatoirement conductrices dites 'obligées' (100%). Étant conductrice hétérozygote, elle a 1 chance sur 2 (50%) de transmettre le chromosome X muté à son garçon, qui sera alors atteint de la maladie.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_11_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-11-01',
    courseId: 'crs-hemato-11',
    type: 'resume',
    title: "Mind Map Synthèse : Hémophilie & Coagulopathies",
    contentMarkdown: `# Mind Map : Hémophilie & Coagulopathies (Dr Ziani AA)

\`\`\`
                               HÉMOPHILIE CONSTITUTIONNELLE
                                             │
                   ┌─────────────────────────┴─────────────────────────┐
                   ▼                                                   ▼
            HÉMOPHILIE A (80-85%)                               HÉMOPHILIE B (15-20%)
            Déficit en Facteur VIII                             Déficit en Facteur IX
            Gène sur Xq28                                       Gène sur Xq27
            Transmission récessive liée à l'X                   Transmission récessive liée à l'X
\`\`\`

## Sévérité biologique :
- **Sévère** : < 1% (0,01 UI/mL) ➔ Hémarthroses spontanées, hématomes musculaires profonds dès la marche.
- **Modérée** : 1 à 5% ➔ Saignements pour traumatismes minimes.
- **Légère / Mineure** : 5 à 40% ➔ Saignements chirurgicaux ou post-traumatiques majeurs.

## Tableau Biologique :
- **TCA allongé isolé** (ratio > 1,20).
- **TP normal**, **Plaquettes normales**, **TS / PFA normal**.
- Test de mélange : correction immédiate (sauf si inhibiteur acquis).
- Dosage spécifique de FVIII:C et FIX:C.

## Traitement :
- **Hémorragie aiguë** : FVIII ou FIX recombinant IV (viser 50 à 100% du pic).
- **Prophylaxie primaire** : 2-3 injections/semaine ou **Emicizumab** (anticorps bispécifique sous-cutané).
- **Complication majeure** : Inhibiteur anti-FVIII (Unités Bethesda) ➔ By-passing agents (rFVIIa, FEIBA).
- **Contre-indications absolues** : Injections IM, aspirine, AINS.`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-11-02',
    courseId: 'crs-hemato-11',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Hémophilie",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Conductrice obligatoire** :
   - Toute fille d'un homme hémophile est conductrice obligatoire à 100% !
2. **Urgences traumatologiques** :
   - Tout traumatisme crânien chez un hémophile = injection du facteur **AVANT** le scanner cérébral !
3. **Injections intramusculaires** :
   - STRICTEMENT INTERDITES (risque d'hématome compressif menaçant le pronostic fonctionnel ou vital).
4. **Hémarthrose aiguë** :
   - NE JAMAIS ponctionner en première intention ! Injecter le facteur VIII immédiatement.
5. **Hémophilie avec inhibiteur** :
   - Les concentrés de FVIII sont inefficaces. Utiliser les agents de contournement : **Facteur VII activé recombinant (NovoSeven)** ou complexe prothrombinique activé (**FEIBA**).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 12: THROMBOPÉNIES IMMUNOLOGIQUES (PTI) - Pr Brahimi
// ==========================================
export const HEMATO_LESSON_12_QUESTIONS: Question[] = [
  {
    id: 'q-hem-12-01',
    courseId: 'crs-hemato-12',
    questionNumber: 1,
    type: 'QCM',
    content: "Le purpura thrombopénique immunologique (PTI, anciennement idiopathique) est défini par :",
    options: [
      "A) Une thrombopénie périphérique isolée < 100 000 / mm³ (100 G/L) sans cause évidente décelable",
      "B) Une thrombopénie centrale avec moelle aplasique",
      "C) Une baisse isolée des polynucléaires neutrophiles",
      "D) Une thrombopénie systématiquement associée à une anémie hémolytique",
      "E) Une microangiopathie thrombotique avec schizocytes"
    ],
    correctAnswers: [0],
    explanation: "Selon le consensus international, le PTI est défini par une thrombopénie isolée < 100 G/L (100 000 / mm³) en l'absence d'autre cause ou pathologie associée (diagnostic d'élimination). Le seuil de 100 G/L évite de classer à tort des variations physiologiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-02',
    courseId: 'crs-hemato-12',
    questionNumber: 2,
    type: 'QCM',
    content: "Le mécanisme physiopathologique principal du PTI repose sur :",
    options: [
      "A) Une destruction accélérée des plaquettes par des auto-anticorps (principalement IgG anti-GPIIb/IIIa ou anti-GPIb/IX) médiée par les macrophages spléniques, associée à un défaut de production médullaire",
      "B) Une mutation activatrice du récepteur de la thrombopoïétine",
      "C) Une consommation diffuse dans des microthrombi artériolaires",
      "D) Un déficit en ADAMTS13",
      "E) Une toxicité médullaire directe de l'aspirine"
    ],
    correctAnswers: [0],
    explanation: "Le PTI associe une destruction périphérique des plaquettes opsonisées par des auto-anticorps IgG au niveau du système réticulo-endothélial (surtout splénique via les récepteurs Fcgamma) ET une inhibition de la mégacaryopoïèse médullaire par ces mêmes anticorps et par cytotoxicité des lymphocytes T.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-03',
    courseId: 'crs-hemato-12',
    questionNumber: 3,
    type: 'QCM',
    content: "La présence d'une splénomégalie palpable à l'examen clinique d'un patient suspect de PTI :",
    options: [
      "A) Est classique et confirme le diagnostic de PTI",
      "B) Doit faire formellement récuser le diagnostic de PTI idiopathique et orienter vers une hépatopathie, un lymphome ou un hypersplénisme",
      "C) Justifie une splénectomie en urgence le jour même",
      "D) Est observée dans plus de 70% des cas chez l'enfant",
      "E) Traduit une thrombose de la veine rénale"
    ],
    correctAnswers: [1],
    explanation: "Règle absolue d'examen : Dans le PTI typique, la rate N'EST JAMAIS PALPABLE. La présence d'une splénomégalie doit impérativement faire rechercher une cirrhose avec hypertension portale, un lymphome, une leucémie ou un syndrome de surcharge.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-04',
    courseId: 'crs-hemato-12',
    questionNumber: 4,
    type: 'QCM',
    content: "Chez l'adulte de plus de 60 ans ou en cas d'atypie clinique/biologique, le myélogramme dans le PTI montre typiquement :",
    options: [
      "A) Une moelle riche avec hyperplasie mégacaryocytaire normale ou augmentée (moelle régénératrice)",
      "B) Une absence totale de mégacaryocytes",
      "C) Une infiltration par des blastes > 20%",
      "D) Une moelle graisseuse désertique",
      "E) Des corps de Heinz intra-érythroblastiques"
    ],
    correctAnswers: [0],
    explanation: "Puisque la thrombopénie est périphérique, la moelle osseuse compense en stimulant la lignée plaquettaire : le myélogramme montre une moelle riche avec des mégacaryocytes nombreux (hyperplasie mégacaryocytaire), sans anomalie des autres lignées.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-05',
    courseId: 'crs-hemato-12',
    questionNumber: 5,
    type: 'QCM',
    content: "Le score hémorragique d'évaluation de la gravité du PTI prend particulièrement en compte la présence de :",
    options: [
      "A) Bulles hémorragiques endobuccales, gingivorragies actives, épistaxis incoercibles et hématurie",
      "B) Céphalées isolées sans signe neurologique",
      "C) Pétéchies déclives sans purpura extensif",
      "D) Décoloration conjonctivale isolée",
      "E) Douleurs musculaires d'effort"
    ],
    correctAnswers: [0],
    explanation: "Les signes hémorragiques muqueux (« bulles hémorragiques intrabuccales », saignements des muqueuses ORL, digestifs ou urinaires) traduisent une thrombopénie très profonde à haut risque de bascule vers une hémorragie méningo-cérébrale mortelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-06',
    courseId: 'crs-hemato-12',
    questionNumber: 6,
    type: 'QCM',
    content: "Selon la classification chronologique internationale, un PTI est qualifié de 'chronique' lorsque la thrombopénie persiste au-delà de :",
    options: [
      "A) 1 mois",
      "B) 3 mois",
      "C) 6 mois",
      "D) 12 mois (1 an)",
      "E) 5 ans"
    ],
    correctAnswers: [3],
    explanation: "Définitions temporelles du PTI : PTI nouvellement diagnostiqué (< 3 mois), PTI persistant (entre 3 et 12 mois), et PTI chronique (persistant au-delà de 12 mois).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-07',
    courseId: 'crs-hemato-12',
    questionNumber: 7,
    type: 'QCM',
    content: "Quelle est la particularité évolutive du PTI de l'enfant (généralement post-viral entre 2 et 6 ans) par rapport à celui de l'adulte ?",
    options: [
      "A) Il guérit spontanément sans séquelles dans plus de 80 à 90% des cas en quelques semaines ou mois",
      "B) Il évolue constamment vers la chronicité et nécessite une splénectomie précoce",
      "C) Il transforme systématiquement en leucémie aiguë",
      "D) Il ne répond jamais aux corticoïdes",
      "E) Il s'accompagne d'une insuffisance rénale aiguë"
    ],
    correctAnswers: [0],
    explanation: "Chez l'enfant, le PTI est aigu, souvent brutal au décours d'une virose banale, et son évolution est bénigne avec guérison spontanée complète dans 80 à 90% des cas. Chez l'adulte, l'évolution chronique est au contraire la règle (dans plus de 70% des cas).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-08',
    courseId: 'crs-hemato-12',
    questionNumber: 8,
    type: 'QCM',
    content: "Le traitement d'urgence d'un PTI avec syndrome hémorragique muqueux menaçant (bulles buccales, saignement actif) repose sur :",
    options: [
      "A) L'association immédiate d'Immunoglobulines polyvalentes par voie intraveineuse (IgIV : 1 g/kg à J1 +/- J2) et de Corticoïdes à forte dose (Méthylprednisolone IV ou Dexaméthasone)",
      "B) La splénectomie chirurgicale d'extrême urgence sans préparation",
      "C) Une transfusion isolée de concentrés de plaquettes sans médicaments",
      "D) L'aspirine à forte dose",
      "E) L'héparine à dose curative"
    ],
    correctAnswers: [0],
    explanation: "Dans le PTI grave menaçant le pronostic vital, l'association IgIV (bloquant les récepteurs Fc des macrophages spléniques pour stopper immédiatement la destruction plaquettaire en 24-48h) + corticoïdes IV forte dose est le traitement d'urgence de référence. La transfusion de plaquettes n'est indiquée qu'en cas d'hémorragie engageant le pronostic vital immédiat.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-09',
    courseId: 'crs-hemato-12',
    questionNumber: 9,
    type: 'QCM',
    content: "Dans un PTI sans signe hémorragique chez un adulte stable dont le taux de plaquettes est à 55 000 / mm³, quelle est l'attitude thérapeutique recommandée ?",
    options: [
      "A) Abstention thérapeutique et simple surveillance clinique et hématologique régulière",
      "B) Débuter une corticothérapie forte dose prolongée",
      "C) Réaliser des perfusions mensuelles d'IgIV",
      "D) Transfuser 2 culots plaquettaires",
      "E) Proposer une splénectomie"
    ],
    correctAnswers: [0],
    explanation: "On ne traite pas un chiffre de plaquettes, on traite un risque hémorragique. Au-dessus de 30 000 à 50 000 / mm³ chez un patient asymptomatique sans facteur de risque surajouté, le risque hémorragique spontané est quasi nul : l'abstention thérapeutique et la surveillance sont la règle.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-10',
    courseId: 'crs-hemato-12',
    questionNumber: 10,
    type: 'QCM',
    content: "La corticothérapie de première ligne standard du PTI de l'adulte nouvellement diagnostiqué fait appel à :",
    options: [
      "A) Prednisone par voie orale (1 mg/kg/j pendant 2 à 3 semaines puis décroissance rapide) ou Dexaméthasone forte dose (40 mg/j pendant 4 jours)",
      "B) Hydrocortisone 10 mg/j pendant 1 an",
      "C) Fludrocortisone par voie intraveineuse",
      "D) Corticothérapie inhalée exclusive",
      "E) Béclométhasone topique"
    ],
    correctAnswers: [0],
    explanation: "Les schémas recommandés en première ligne sont : soit Prednisone orale 1 mg/kg/j pendant 14 à 21 jours suivi d'une décroissance progressive sur quelques semaines, soit Dexaméthasone 40 mg/j pendant 4 jours consécutifs (1 à 3 cycles espacés de 14 jours).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-11',
    courseId: 'crs-hemato-12',
    questionNumber: 11,
    type: 'QCM',
    content: "Le Romiplostim (Nplate) et l'Eltrombopag (Revolade) sont indiqués dans le PTI persistant ou chronique en tant que :",
    options: [
      "A) Agonistes du récepteur de la thrombopoïétine (TPO-RA) stimulant la mégacaryopoïèse",
      "B) Anticorps monoclonaux anti-CD20",
      "C) Inhibiteurs de la calcineurine",
      "D) Chimiothérapies alkylantes",
      "E) Agents thrombolytiques"
    ],
    correctAnswers: [0],
    explanation: "Les agonistes du récepteur de la thrombopoïétine (Romiplostim en sous-cutané hebdomadaire, Eltrombopag ou Avatrombopag par voie orale) se lient au récepteur c-Mpl des mégacaryocytes médullaires et stimulent vigoureusement la production plaquettaire, avec un taux de réponse de 70 à 80%.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-12',
    courseId: 'crs-hemato-12',
    questionNumber: 12,
    type: 'QCM',
    content: "Le Rituximab (MabThera, anticorps anti-CD20) agit dans le PTI en :",
    options: [
      "A) Éliminant les lymphocytes B producteurs des auto-anticorps anti-plaquettes",
      "B) Bloquant directement la thrombine",
      "C) Détruisant les macrophages du foie",
      "D) Stimulant la synthèse hépatique de fibrinogène",
      "E) Inhibant la cyclo-oxygénase plaquettaire"
    ],
    correctAnswers: [0],
    explanation: "Le Rituximab est un anticorps monoclonal ciblant le CD20 à la surface des lymphocytes B. En induisant une déplétion lymphocytaire B profonde, il stoppe la production des auto-anticorps pathogènes anti-plaquettes, permettant une rémission prolongée dans environ 50% des PTI réfractaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-13',
    courseId: 'crs-hemato-12',
    questionNumber: 13,
    type: 'QCM',
    content: "Avant de réaliser une splénectomie chez un patient atteint de PTI chronique réfractaire, quelles vaccinations doivent être impérativement réalisées au moins 15 jours avant la chirurgie ?",
    options: [
      "A) Pneumocoque, Méningocoque (A+C+Y+W135 et B) et Haemophilus influenzae type b",
      "B) BCG et fièvre jaune",
      "C) Hépatite A seule",
      "D) Rage et tétanos uniquement",
      "E) Aucune vaccination n'est nécessaire"
    ],
    correctAnswers: [0],
    explanation: "La splénectomie expose à un risque majeur d'infection bactérienne foudroyante à bactéries encapsulées (syndrome OPSI / septicémie à pneumocoque). La vaccination contre Pneumocoque, Méningocoque et Haemophilus b au moins 15 jours avant l'intervention (associée à une antibioprophylaxie par Pénicilline V pendant au moins 2 ans) est indispensable.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-14',
    courseId: 'crs-hemato-12',
    questionNumber: 14,
    type: 'QCM',
    content: "L'association d'un Purpura Thrombopénique Immunologique et d'une Anémie Hémolytique Auto-Immune (test de Coombs direct positif) porte le nom de :",
    options: [
      "A) Syndrome d'Evans",
      "B) Syndrome de Moschcowitz",
      "C) Syndrome de Gougerot-Sjögren",
      "D) Maladie de Gaucher",
      "E) Syndrome de Bernard-Soulier"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome d'Evans est l'association simultanée ou séquentielle d'une anémie hémolytique auto-immune (AHAI à Coombs positif) et d'un purpura thrombopénique immunologique (PTI), parfois associé à une neutropénie auto-immune.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-15',
    courseId: 'crs-hemato-12',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans le Purpura Thrombotique Thrombocytopénique (PTT / syndrome de Moschcowitz), la thrombopénie périphérique est caractérisée par :",
    options: [
      "A) Une anémie hémolytique mécanique avec schizocytes > 1% au frottis, fièvre, troubles neurologiques fluctuants et effondrement de l'ADAMTS13 (< 10%)",
      "B) Un TP et un TCA très allongés avec effondrement du fibrinogène",
      "C) Une absence totale de schizocytes",
      "D) Une splénomégalie géante indolore",
      "E) Une guérison spontanée constante sans échange plasmatique"
    ],
    correctAnswers: [0],
    explanation: "Le PTT est une microangiopathie thrombotique (MAT) gravissime liée à un déficit sévère en métalloprotéase ADAMTS13. Il associe : anémie hémolytique mécanique régénérative avec présence de schizocytes (hématies brisées), thrombopénie de consommation, signes neurologiques fluctuants, fièvre et atteinte rénale modérée. L'hémostase de coagulation (TP, TCA, fibrinogène) reste NORMALE.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-16',
    courseId: 'crs-hemato-12',
    questionNumber: 16,
    type: 'QCM',
    content: "Pourquoi la transfusion de concentrés de plaquettes est-elle formellement DÉCONSEILLÉE dans le PTT (syndrome de Moschcowitz) en dehors d'une hémorragie engageant le pronostic vital immédiat ?",
    options: [
      "A) Parce qu'elle apporte du 'carburant' aux microthrombi artériolaires et risque de précipiter des AVC ou infarctus mortels",
      "B) Parce qu'elle inactive l'ADAMTS13 résiduelle",
      "C) Parce que les plaquettes transfusées détruisent les globules rouges",
      "D) Parce qu'elle allonge le temps de prothrombine",
      "E) Parce qu'elle provoque un choc septique systématique"
    ],
    correctAnswers: [0],
    explanation: "Dans le PTT, les multimères de haut poids moléculaire du vWF agglutinent spontanément les plaquettes en microthrombi disséminés. Transfuser des plaquettes revient à 'jeter de l'huile sur le feu', provoquant une occlusion massive des artérioles cérébrales et coronaires.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-12-17',
    courseId: 'crs-hemato-12',
    questionNumber: 17,
    type: 'QCM',
    content: "Le traitement curatif de première intention en extrême urgence du PTT (syndrome de Moschcowitz) repose sur :",
    options: [
      "A) Les échanges plasmatiques quotidiens (plasmaphérèses) avec perfusion de plasma frais congelé (PFC) + Corticothérapie + Caplacizumab",
      "B) La splénectomie chirurgicale immédiate",
      "C) Les transfusions de concentrés érythrocytaires seuls",
      "D) L'antibiothérapie par amoxicilline",
      "E) L'héparinothérapie à forte dose"
    ],
    correctAnswers: [0],
    explanation: "L'urgence vitale du PTT impose des échanges plasmatiques quotidiens précoces (élimination des auto-anticorps anti-ADAMTS13 et apport d'ADAMTS13 fonctionnelle présente dans le PFC du donneur), associés à la corticothérapie, au Rituximab et au Caplacizumab (nanocorps anti-vWF).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-12-18',
    courseId: 'crs-hemato-12',
    questionNumber: 18,
    type: 'QCM',
    content: "Le syndrome hémolytique et urémique (SHU) typique de l'enfant est induit par une toxi-infection digestive à :",
    options: [
      "A) Escherichia coli producteur de Shiga-toxines (STEC / EHEC, sérotype O157:H7)",
      "B) Helicobacter pylori",
      "C) Clostridium tetani",
      "D) Streptococcus pneumoniae",
      "E) Salmonella enteritidis"
    ],
    correctAnswers: [0],
    explanation: "Le SHU post-diarrhéique typique de l'enfant (diarrhée sanglante après ingestion de viande hachée mal cuite ou lait cru) est causé par la Shiga-toxine sécrétée par des souches d'E. coli (EHEC O157:H7). La toxine lèse l'endothélium glomérulaire rénal entraînant une insuffisance rénale aiguë au premier plan.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-19',
    courseId: 'crs-hemato-12',
    questionNumber: 19,
    type: 'QCM',
    content: "Quel examen sérologique systématique doit faire partie du bilan étiologique initial de tout PTI nouvellement diagnostiqué ?",
    options: [
      "A) Sérologies VIH, VHC et VHB",
      "B) Sérologie de la rage",
      "C) Recherche des anticorps anti-poliovirus",
      "D) Dosage des anticorps anti-streptolysine O (ASLO)",
      "E) Sérologie de la fièvre jaune"
    ],
    correctAnswers: [0],
    explanation: "Le bilan initial indispensable d'un PTI comprend la recherche d'une cause sous-jacente : sérologies VIH, VHC, VHB (le PTI peut être la manifestation inaugurale du VIH ou du VHC), recherche d'anticorps antinucléaires (lupus) et électrophorèse des protéines sériques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-20',
    courseId: 'crs-hemato-12',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans la thrombopénie induite par l'héparine de type II (TIH immuno-allergique), la baisse des plaquettes survient classiquement :",
    options: [
      "A) Entre le 5e et le 14e jour après l'introduction de l'héparine (ou plus précocement si exposition récente < 3 mois)",
      "B) Dès la première minute suivant la première injection",
      "C) Après 6 mois de traitement continu",
      "D) Uniquement chez le nouveau-né",
      "E) Uniquement après arrêt définitif de l'héparine"
    ],
    correctAnswers: [0],
    explanation: "La TIH de type II est médiée par des anticorps dirigés contre le complexe Facteur 4 plaquettaire - Héparine (anti-PF4/héparine). Le délai d'apparition est typiquement de 5 à 10 jours après le début de l'héparine (ou en quelques heures si le patient a reçu de l'héparine dans les 3 mois précédents).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-21',
    courseId: 'crs-hemato-12',
    questionNumber: 21,
    type: 'QCM',
    content: "Le paradoxe clinique majeur de la Thrombopénie Induite par l'Héparine de type II (TIH) est :",
    options: [
      "A) Qu'elle se complique de thromboses veineuses et artérielles massives et non de syndrome hémorragique",
      "B) Qu'elle s'accompagne d'une polyglobulie majeure",
      "C) Qu'elle entraîne une guérison immédiate des phlébites",
      "D) Qu'elle guérit par doublement des doses d'héparine",
      "E) Qu'elle n'abaisse jamais le taux de plaquettes sous 200 G/L"
    ],
    correctAnswers: [0],
    explanation: "Paradoxe absolu de la TIH II : bien que les plaquettes chutent (baisse de > 50%), les anticorps activent puissamment les plaquettes et les cellules endothéliales, générant une vague massive de thrombine responsable de thromboses veineuses profondes, embolies pulmonaires, gangrènes des membres et AVC thrombotiques (50% de complications thrombotiques).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-22',
    courseId: 'crs-hemato-12',
    questionNumber: 22,
    type: 'QCM',
    content: "La conduite à tenir immédiate en cas de suspicion forte de Thrombopénie Induite par l'Héparine (score 4T ≥ 6) est :",
    options: [
      "A) Arrêter immédiatement toute forme d'héparine (y compris les rinçages de cathéters) et relayer sans délai par un anticoagulant non héparinique (Danaparoïde sodique ou Argatroban)",
      "B) Remplacer l'héparine non fractionnée par une HBPM",
      "C) Débuter un traitement par antivitamine K (AVK) seul à dose de charge",
      "D) Transfuser 2 culots plaquettaires",
      "E) Attendre le résultat des anticorps anti-PF4 avant d'arrêter l'héparine"
    ],
    correctAnswers: [0],
    explanation: "Urgence absolue : 1. Arrêt immédiat de TOUTE héparine (HNF et HBPM) ; 2. Relais immédiat par Danaparoïde (Orgaran) ou Argatroban. Les AVK sont formellement contre-indiqués à la phase aiguë (risque de nécrose cutanée par effondrement de la protéine C) ; les transfusions plaquettaires sont contre-indiquées (flambée thrombotique).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-23',
    courseId: 'crs-hemato-12',
    questionNumber: 23,
    type: 'QCM',
    content: "Chez une femme enceinte atteinte de PTI, quelle thérapeutique de première ligne est privilégiée en cas de thrombopénie sévère nécessitant un traitement ?",
    options: [
      "A) Corticothérapie orale (Prednisone à la dose minimale efficace) et/ou Immunoglobulines intraveineuses (IgIV)",
      "B) Splénectomie chirurgicale au premier trimestre",
      "C) Rituximab systématique",
      "D) Agonistes de la TPO (Romiplostim)",
      "E) Méthotrexate intraveineux"
    ],
    correctAnswers: [0],
    explanation: "Pendant la grossesse, la Prednisone à dose minimale efficace et les perfusions d'IgIV sont les deux traitements de référence bien tolérés et sans tératogénicité pour traiter le PTI maternel.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-12-24',
    courseId: 'crs-hemato-12',
    questionNumber: 24,
    type: 'QCM',
    content: "Le Fostamatinib (Tavalisse) est un traitement récent du PTI chronique dont le mécanisme d'action est :",
    options: [
      "A) Un inhibiteur de la tyrosine kinase de rate (Syk), bloquant la phagocytose plaquettaire par les macrophages",
      "B) Un antagoniste des récepteurs de l'angiotensine II",
      "C) Un inhibiteur de l'aromatase",
      "D) Un agoniste des récepteurs bêta-2 adrénergiques",
      "E) Un antibiotique macrolide"
    ],
    correctAnswers: [0],
    explanation: "Le Fostamatinib inhibe sélectivement la kinase Syk (Spleen Tyrosine Kinase), une enzyme intracellulaire indispensable à la transduction du signal des récepteurs Fcgamma dans les macrophages. Il bloque ainsi la destruction macrophagique des plaquettes opsonisées.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-12-25',
    courseId: 'crs-hemato-12',
    questionNumber: 25,
    type: 'QCM',
    content: "La thrombopénie gestationnelle physiologique du 3e trimestre de la grossesse se distingue du PTI par :",
    options: [
      "A) Une thrombopénie modérée (le plus souvent > 70-80 000 / mm³), asymptomatique, survenant au 3e trimestre sans antécédent de PTI et se normalisant spontanément dans les semaines suivant l'accouchement",
      "B) Une thrombopénie profonde < 10 000 / mm³ avec purpura muqueux",
      "C) Une transmission constante d'une thrombopénie sévère au fœtus",
      "D) Une élévation majeure des transaminases et LDH",
      "E) Une indication obligatoire à une césarienne d'urgence"
    ],
    correctAnswers: [0],
    explanation: "La thrombopénie gestationnelle est fréquente (5 à 8% des grossesses normales), bénigne, d'installation progressive au 3e trimestre. Le taux de plaquettes reste généralement supérieur à 70-80 G/L sans anomalie clinique, ne comporte aucun risque hémorragique fœtal et se corrige spontanément après délivrance.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-12-cs1',
    courseId: 'crs-hemato-12',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Une femme de 28 ans sans antécédent consulte pour l'apparition brutale d'un purpura pétéchial et ecchymotique des deux membres inférieurs et quelques bulles hémorragiques sur la muqueuse jugale. L'examen physique ne retrouve ni fièvre, ni splénomégalie, ni adénopathie. NFS : Hb 13,2 g/dL, Leucocytes 6 200 / mm³ avec formule normale, Plaquettes 6 000 / mm³ confirmées sur frottis et tube citraté. TP 100%, TCA ratio 1,02, Fibrinogène 3,2 g/L.\n\nQuel est le diagnostic le plus probable et quelle est la prise en charge immédiate ?",
    options: [
      "A) Aplasie médullaire ; Allogreffe de moelle en urgence",
      "B) Purpura Thrombopénique Immunologique (PTI) aigu grave avec syndrome hémorragique muqueux ; Hospitalisation immédiate, perfusion d'Immunoglobulines IV (IgIV 1 g/kg) associée à une corticothérapie forte dose (Dexaméthasone ou Méthylprednisolone)",
      "C) CIVD sur choc septique ; Plasma frais congelé seul",
      "D) PTI stable ; Retour à domicile avec repos simple",
      "E) Purpura rhumatoïde ; Antihistaminiques seuls"
    ],
    correctAnswers: [1],
    explanation: "Thrombopénie périphérique isolée profonde (< 10 G/L) avec rate impalpable, sans altération des autres lignées ni de la coagulation = PTI. La présence de bulles hémorragiques intrabuccales est un critère de gravité imposant le traitement d'urgence par IgIV + corticoïdes à forte dose pour remonter rapidement les plaquettes au-dessus du seuil hémorragique létal.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-cs2',
    courseId: 'crs-hemato-12',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Un enfant de 4 ans sans antécédent présente des pétéchies des jambes et quelques ecchymoses 10 jours après un épisode de rhinopharyngite virale fébrile guérie. L'enfant est en excellent état général, apyrétique, joue normalement. L'examen de la cavité buccale est strictement normal (pas de bulle, pas de saignement). NFS : Plaquettes 22 000 / mm³, Hb 12,8 g/dL, Leucocytes normaux.\n\nQuelle est l'attitude thérapeutique recommandée chez cet enfant ?",
    options: [
      "A) Splénectomie chirurgicale d'urgence",
      "B) Surveillance simple ambulatoire avec éviction des traumatismes et des sports de contact, sans traitement médicamenteux systématique, avec consultation de contrôle",
      "C) Chimiothérapie par polychimiothérapie aplasiante",
      "D) Transfusion systématique de deux concentrés plaquettaires",
      "E) Corticothérapie forte dose par voie intraveineuse pendant 6 mois"
    ],
    correctAnswers: [1],
    explanation: "Chez l'enfant, en l'absence de signe hémorragique muqueux et de traumatisme, même avec un taux de plaquettes entre 20 000 et 30 000 / mm³, la prise en charge recommandée de première intention est la surveillance clinique simple avec mesures de précaution (pas de sport traumatisant, pas d'aspirine/AINS), car 85% des cas guérissent spontanément.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-cs3',
    courseId: 'crs-hemato-12',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une jeune femme de 29 ans est admise aux urgences pour confusion fébrile fluctuante et céphalées intenses. La biologie objective : Plaquettes 14 000 / mm³, Hb 7,4 g/dL, Réticulocytes 220 000 / mm³, LDH 2 400 UI/L, Haptoglobine indétectable, Bilirubine libre augmentée. Le frottis sanguin retrouve 4,5% de schizocytes. Le bilan de coagulation montre : TP 98%, TCA ratio 1,05, Fibrinogène 3,8 g/L (coagulation normale). Le test de Coombs direct est négatif.\n\nQuel est le diagnostic d'extrême urgence et quel traitement doit être démarré sans attendre ?",
    options: [
      "A) Purpura Thrombotique Thrombocytopénique (PTT / Moschcowitz) ; Échanges plasmatiques quotidiens d'extrême urgence avec PFC + Corticothérapie",
      "B) Purpura thrombopénique immunologique simple ; Transfusion de concentrés de plaquettes",
      "C) Coagulation intravasculaire disséminée (CIVD) ; Antithrombine III seule",
      "D) Méningite à méningocoque ; Amoxicilline IV isolée",
      "E) Paludisme grave à Plasmodium falciparum ; Quinine seule"
    ],
    correctAnswers: [0],
    explanation: "Pentade de Moschcowitz : anémie hémolytique mécanique à schizocytes (Coombs négatif), thrombopénie profonde, signes neurologiques fluctuants, fièvre, avec coagulation normale (TP, TCA, fibrinogène normaux, ce qui élimine une CIVD). C'est un PTT (déficit en ADAMTS13). L'échange plasmatique d'extrême urgence est le traitement vital salvateur (mortalité > 90% sans traitement vs < 10% avec plasmaphérèse).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-cs4',
    courseId: 'crs-hemato-12',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 68 ans est hospitalisé pour embolie pulmonaire sous héparine non fractionnée (HNF) IVSE efficace (ratio TCA à 2,2). Les plaquettes étaient à 260 000 / mm³ à l'admission. À J7, la NFS systématique retrouve des plaquettes à 85 000 / mm³ (chute de plus de 60%). Le même jour, le patient présente une ischémie aiguë douloureuse de la jambe droite avec abolition des pouls distaux.\n\nQuel diagnostic portez-vous et quelle décision thérapeutique immédiate s'impose ?",
    options: [
      "A) Thrombopénie Induite par l'Héparine de type II (TIH) compliquée de thrombose artérielle aiguë ; Arrêt immédiat et définitif de l'héparine et relais par Danaparoïde sodique (Orgaran) ou Argatroban à dose curative",
      "B) Simple résistance à l'héparine ; doubler le débit de perfusion d'HNF",
      "C) Hémorragie occulte sur surdosage héparinique ; injection de protamine puis reprise de l'héparine",
      "D) Relais immédiat par Sintrom sans autre molécule",
      "E) Transfusion urgente de plaquettes pour corriger le chiffre"
    ],
    correctAnswers: [0],
    explanation: "Chute de plus de 50% des plaquettes entre J5 et J10 sous héparine + apparition d'une thrombose artérielle aiguë = Thrombopénie Induite par l'Héparine de type II (score 4T = 8, probabilité forte). Arrêt immédiat de toute héparine et institution d'un anticoagulant alternatif (Danaparoïde ou Argatroban). Les AVK sont interdits d'emblée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-12-cs5',
    courseId: 'crs-hemato-12',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un homme de 35 ans suivi pour un PTI chronique évoluant depuis 18 mois a échoué à la corticothérapie, aux IgIV et au Rituximab. Les plaquettes restent oscillantes entre 10 000 et 25 000 / mm³ avec hématomes spontanés fréquents. Une splénectomie est discutée.\n\nQuel examen isotopique peut aider à prédire la réponse hématologique à la splénectomie ?",
    options: [
      "A) La scintigraphie de séquestration plaquettaire aux plaquettes marquées à l'Indium-111 (confirmant une séquestration splénique prédominante)",
      "B) La scintigraphie thyroïdienne à l'iode 131",
      "C) Le TEP-scanner au FDG",
      "D) La scintigraphie myocardique au thallium",
      "E) La scintigraphie cérébrale au Dat-Scan"
    ],
    correctAnswers: [0],
    explanation: "La scintigraphie de durée de vie et de séquestration des plaquettes autologues marquées à l'Indium-111 permet d'identifier le site principal de destruction des plaquettes : si la séquestration est purement ou très majoritairement splénique, le taux de succès à long terme de la splénectomie dépasse 85%. Si la séquestration est hépatique ou diffuse, le risque d'échec est élevé.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_12_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-12-01',
    courseId: 'crs-hemato-12',
    type: 'resume',
    title: "Mind Map Synthèse : Thrombopénies & PTI",
    contentMarkdown: `# Mind Map : Purpura Thrombopénique Immunologique (Pr Brahimi)

\`\`\`
                                THROMBOPÉNIE IMMUNOLOGIQUE (PTI)
                                               │
                   ┌───────────────────────────┴───────────────────────────┐
                   ▼                                                       ▼
           CLINIQUE & DIAGNOSTIC                                   STRATÉGIE THÉRAPEUTIQUE
- Thrombopénie périphérique isolée < 100 G/L            - Asymptomatique > 30-50 G/L ➔ Abstention
- ZÉRO splénomégalie !                                  - Urgence hémorragique ➔ IgIV (1 g/kg) + Corticoïdes
- Myélogramme (si > 60 ans ou atypie) :                 - 1ère ligne standard ➔ Prednisone ou Dexaméthasone
  Moelle riche, mégacaryocytes augmentés                 - 2e ligne ➔ Agonistes TPO (Eltrombopag, Romiplostim)
- Diagnostic d'élimination (VIH, VHC, Lupus)                         ou Rituximab (anti-CD20)
                                                        - 3e ligne ➔ Splénectomie (Vaccins 15j avant !)
\`\`\`

## Différentiel des Thrombopénies Aiguës :
1. **PTI** : Plaquettes basses isolées, hémostase normale, rate impalpable.
2. **PTT (Moschcowitz)** : Déficit ADAMTS13, schizocytes (>1%), fièvre, neuro, coagulation normale. Échanges plasmatiques !
3. **CIVD** : Plaquettes basses + TP bas + Fibrinogène bas + D-Dimères élevés.
4. **TIH II** : J5-J10 sous héparine, thromboses paradoxales. Arrêt héparine + Danaparoïde.`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-12-02',
    courseId: 'crs-hemato-12',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : PTI",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **La Rate dans le PTI** :
   - Rate palpable = **NON PTI** ! Éliminer hépatopathie, hémopathie maligne ou hypersplénisme.
2. **Quand faire le myélogramme dans le PTI ?** :
   - Indiqué uniquement si : âge > 60 ans, anomalie d'une autre lignée (anémie non ferriprive, leucopénie), organomégalie, ou avant une splénectomie.
3. **PTT vs PTI** :
   - Dans le PTT, **NE JAMAIS TRANSFUSER DE PLAQUETTES** (aggrave les thromboses artérielles). Le traitement d'urgence = **Échanges plasmatiques**.
4. **TIH de type II** :
   - Risque thrombotique majeur (pas hémorragique). Relais immédiat par Danaparoïde (Orgaran) ou Argatroban. Les AVK sont interdits à la phase initiale.
5. **Vaccinations avant splénectomie** :
   - Au moins 15 jours avant : Pneumocoque, Méningocoque, Haemophilus influenzae b.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];
