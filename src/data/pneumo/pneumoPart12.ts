import { Question, CourseResource } from '../../types/medical';

// Lesson 22: TD : Gazométrie Artérielle
export const PNEUMO_LESSON_22_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-22-01',
    courseId: 'crs-pneumo-22',
    questionNumber: 1,
    type: 'QCM',
    content: "Quelles sont les valeurs physiologiques normales d'une gazométrie artérielle chez un adulte sain au repos en air ambiant et au niveau de la mer ?",
    options: [
      "A. pH : 7,38 - 7,42 | PaO2 : 80 - 100 mmHg | PaCO2 : 35 - 45 mmHg | HCO3- : 22 - 26 mmol/L",
      "B. pH : 7,25 - 7,35 | PaO2 : 60 - 75 mmHg | PaCO2 : 45 - 55 mmHg | HCO3- : 18 - 22 mmol/L",
      "C. pH : 7,45 - 7,55 | PaO2 : 100 - 120 mmHg | PaCO2 : 25 - 30 mmHg | HCO3- : 28 - 32 mmol/L",
      "D. pH : 7,10 - 7,20 | PaO2 : 50 - 60 mmHg | PaCO2 : 50 - 60 mmHg | HCO3- : 12 - 16 mmol/L",
      "E. pH : 7,35 - 7,45 | PaO2 : 40 - 50 mmHg | PaCO2 : 70 - 80 mmHg | HCO3- : 35 - 40 mmol/L"
    ],
    correctAnswers: [0],
    explanation: "Les valeurs usuelles en sang artériel sont : pH 7,38-7,42 (tolérance 7,35-7,45), PaCO2 35-45 mmHg (moyenne 40), PaO2 80-100 mmHg, HCO3- 22-26 mmol/L et SaO2 > 95%.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-22-02',
    courseId: 'crs-pneumo-22',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans l'évaluation de la gazométrie artérielle, quelle est la formule de calcul du trou anionique plasmatique (TA) et sa valeur normale ?",
    options: [
      "A. TA = [Na+] - ([Cl-] + [HCO3-]), normale = 12 ± 2 mmol/L",
      "B. TA = [Na+] + [K+] - [Cl-], normale = 24 ± 4 mmol/L",
      "C. TA = [Cl-] - [HCO3-], normale = 8 ± 2 mmol/L",
      "D. TA = [Na+] / [Cl-], normale = 1,4",
      "E. TA = [HCO3-] - [Na+], normale = 16 ± 2 mmol/L"
    ],
    correctAnswers: [0],
    explanation: "Le trou anionique plasmatique est calculé par TA = [Na+] - ([Cl-] + [HCO3-]). Sa valeur normale est de 12 ± 2 mmol/L (8 à 14). Un TA > 16 mmol/L signe la présence d'anions indosés (lactates, corps cétoniques, phosphates/sulfates, toxiques).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-22-03',
    courseId: 'crs-pneumo-22',
    questionNumber: 3,
    type: 'QCM',
    content: "Lors d'une acidose respiratoire aiguë pure (hypoventilation aiguë), quelle est la réponse attendue des bicarbonates plasmatiques (compensation rénale aiguë) ?",
    options: [
      "A. Les bicarbonates s'élèvent de 1 mmol/L pour chaque élévation de 10 mmHg de la PaCO2 au-dessus de 40 mmHg",
      "B. Les bicarbonates s'élèvent de 4 mmol/L pour chaque élévation de 10 mmHg de la PaCO2",
      "C. Les bicarbonates diminuent de 5 mmol/L immédiatement",
      "D. Les bicarbonates ne se modifient jamais en aigu",
      "E. Les bicarbonates s'effondrent en dessous de 10 mmol/L"
    ],
    correctAnswers: [0],
    explanation: "Règle de compensation : en acidose respiratoire aiguë, le rein n'a pas encore eu le temps d'agir (prend 24-72h); le tamponnement cellulaire n'augmente les HCO3- que de 1 mmol/L par tranche de 10 mmHg d'augmentation de PaCO2. En chronique, le rein compense en augmentant les HCO3- de 3,5 à 4 mmol/L par 10 mmHg de PaCO2.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-22-04',
    courseId: 'crs-pneumo-22',
    questionNumber: 4,
    type: 'QCM',
    content: "Quelle situation clinique se traduit typiquement par une alcalose respiratoire aiguë (pH > 7,45, PaCO2 < 35 mmHg, HCO3- normaux ou discrètement diminués) ?",
    options: [
      "A. Crise d'angoisse avec hyperventilation psychogène ou phase initiale d'une embolie pulmonaire",
      "B. Surdosage massif en morphiniques ou benzodiazépines",
      "C. Décompensation aiguë avec coma hypercapnique d'un patient BPCO",
      "D. Diarrhée profuse à liquide riche en bicarbonates",
      "E. Insuffisance rénale terminale anurique"
    ],
    correctAnswers: [0],
    explanation: "Toute hyperventilation alvéolaire (stress/anxiété, hypoxémie aiguë, embolie pulmonaire au début, lésion du système nerveux central, sepsis précoce) entraîne une élimination accrue de CO2 se traduisant par une alcalose respiratoire hypocapnique.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-22-05',
    courseId: 'crs-pneumo-22',
    questionNumber: 5,
    type: 'QCM',
    content: "Concernant le gradient ou différence alvéolo-artérielle en oxygène D(A-a)O2 :",
    options: [
      "A. Il est normal (< 15-20 mmHg chez le sujet jeune) dans l'insuffisance respiratoire par hypoventilation alvéolaire pure",
      "B. Il est anormalement élargi (> 20 mmHg) en cas d'effet shunt ou d'anomalie de diffusion alvéolo-capillaire",
      "C. Il se calcule selon l'équation de l'air alvéolaire : PAO2 = FiO2 x (Patm - PH2O) - PaCO2 / R",
      "D. Il permet de distinguer une cause extrapulmonaire (commande respiratoire) d'une atteinte parenchymateuse ou vasculaire pulmonaire",
      "E. Toutes les propositions ci-dessus sont exactes"
    ],
    correctAnswers: [4],
    explanation: "Le gradient alvéolo-artériel en O2 est un outil indispensable : normal dans les hypoventilations d'origine centrale ou pariétale/neuromusculaire pure; élargi dès qu'il existe une altération intrinsèque pulmonaire (shunt, inégalité V/Q, trouble de diffusion).",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-22-06',
    courseId: 'crs-pneumo-22',
    questionNumber: 6,
    type: 'QCM',
    content: "L'effet shunt vrai (shunt anatomique ou atélectasie complète / condensation alvéolaire massive sans ventilation) se caractérise à la gazométrie par :",
    options: [
      "A. Une hypoxémie sévère réfractaire, non corrigée par l'administration d'oxygène pur (FiO2 100%)",
      "B. Une PaO2 qui s'élève immédiatement au-dessus de 500 mmHg sous O2 à 100%",
      "C. Une hypercapnie obligatoire précoce",
      "D. Une disparition complète du gradient alvéolo-artériel",
      "E. Une alcalose métabolique constante"
    ],
    correctAnswers: [0],
    explanation: "Le shunt vrai (V/Q = 0) correspond au passage de sang désoxygéné à travers des zones pulmonaires non ventilées. L'inhalation d'O2 à 100% ne peut pas enrichir ce sang qui ne participe à aucun échange, d'où la persistance de l'hypoxémie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-22-07',
    courseId: 'crs-pneumo-22',
    questionNumber: 7,
    type: 'QCM',
    content: "Parmi les étiologies suivantes, laquelle provoque une acidose métabolique à trou anionique plasmatique NORMAL (acidose hyperchlorémique) ?",
    options: [
      "A. Diarrhée aiguë profuse avec pertes fécales digestives de bicarbonates",
      "B. Acidocétose diabétique inaugurale",
      "C. Acidose lactique sur état de choc septique ou cardiogénique",
      "D. Intoxication à l'éthylène glycol ou méthanol",
      "E. Insuffisance rénale sévère avec rétention de sulfates et phosphates"
    ],
    correctAnswers: [0],
    explanation: "Les acidoses métaboliques à trou anionique normal (hyperchlorémiques) résultent d'une perte nette de bicarbonates (diarrhée, fistules biliaires/pancréatiques, acidose tubulaire rénale). Les autres propositions augmentent le trou anionique par accumulation d'anions indosés.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-22-08',
    courseId: 'crs-pneumo-22',
    questionNumber: 8,
    type: 'QCM',
    content: "Une gazométrie réalisée chez un patient porteur d'une BPCO au stade d'état stable montre : pH = 7,39, PaCO2 = 56 mmHg, PaO2 = 62 mmHg, HCO3- = 33 mmol/L. Quel est le diagnostic gazométrique ?",
    options: [
      "A. Acidose respiratoire chronique totalement compensée par une rétention rénale de bicarbonates",
      "B. Acidose respiratoire aiguë décompensée",
      "C. Alcalose métabolique pure non compensée",
      "D. Acidose métabolique sévère",
      "E. Alcalose respiratoire aiguë"
    ],
    correctAnswers: [0],
    explanation: "Le pH est dans les limites physiologiques normales (7,39). La PaCO2 est élevée (56 mmHg), et les bicarbonates sont secondairement augmentés de façon chronique (33 mmol/L), témoignant d'une acidose respiratoire chronique parfaitement compensée.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-22-09',
    courseId: 'crs-pneumo-22',
    questionNumber: 9,
    type: 'QCM',
    content: "Le test d'Allen, réalisé avant une ponction ou un cathétérisme de l'artère radiale, a pour objectif :",
    options: [
      "A. De vérifier la perméabilité de l'artère ulnaire et la suppléance de l'arcade palmaire pour prévenir l'ischémie de la main",
      "B. De mesurer la pression artérielle systémique moyenne",
      "C. De dépister une neuropathie périphérique médiane",
      "D. D'évaluer le taux d'hémoglobine circulante",
      "E. De rechercher une allergie à la lidocaïne"
    ],
    correctAnswers: [0],
    explanation: "Le test d'Allen permet d'attester de la vascularisation collatérale de la main par l'artère ulnaire avant ponction de l'artère radiale. En cas de test d'Allen anormal (recoloration > 7-10 s), la ponction de cette artère radiale est formellement contre-indiquée.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-22-10',
    courseId: 'crs-pneumo-22',
    questionNumber: 10,
    type: 'QCM',
    content: "Quelle erreur pré-analytique fréquente peut fausser les résultats de la gazométrie en provoquant une élévation artificielle de la PaO2 et une diminution de la PaCO2 ?",
    options: [
      "A. Présence de bulles d'air non purgées dans la seringue étanche",
      "B. Délai d'acheminement supérieur à 2 heures sans glace",
      "C. Excès d'héparine liquide non expulsé dans la seringue",
      "D. Prélèvement sur du sang veineux mêlé au lieu d'artériel",
      "E. Utilisation d'une aiguille de trop petit calibre"
    ],
    correctAnswers: [0],
    explanation: "L'air ambiant a une PO2 d'environ 150 mmHg et une PCO2 proche de 0 mmHg. Des bulles d'air résiduelles dans la seringue vont transférer de l'oxygène vers le sang (PaO2 faussement élevée) et capter du CO2 (PaCO2 faussement basse).",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-22-11',
    courseId: 'crs-pneumo-22',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans l'acidose métabolique pure, quelle est la formule de Winter permettant de vérifier si la compensation respiratoire par hypocapnie est adaptée ?",
    options: [
      "A. PaCO2 attendue = (1,5 x [HCO3-]) + 8 ± 2 mmHg",
      "B. PaCO2 attendue = [HCO3-] + 15",
      "C. PaCO2 attendue = 40 - [HCO3-]",
      "D. PaCO2 attendue = 2 x [HCO3-]",
      "E. PaCO2 attendue = [Na+] - [Cl-]"
    ],
    correctAnswers: [0],
    explanation: "Formule de Winter : PaCO2 attendue = (1,5 x [HCO3-]) + 8 ± 2. Si la PaCO2 mesurée est supérieure à cette valeur attendue, il existe une acidose respiratoire surajoutée; si elle est inférieure, il existe une alcalose respiratoire surajoutée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-22-12',
    courseId: 'crs-pneumo-22',
    questionNumber: 12,
    type: 'QCM',
    content: "Un patient sous ventilation assistée présente les gaz du sang suivants : pH = 7,56, PaCO2 = 24 mmHg, HCO3- = 22 mmol/L. Quelle est la cause la plus probable et quelle correction doit être apportée ?",
    options: [
      "A. Hyperventilation alvéolaire iatrogène; il faut diminuer la ventilation minute (volume courant ou fréquence respiratoire)",
      "B. Hypoventilation alvéolaire; il faut augmenter la fréquence respiratoire",
      "C. Acidose métabolique sévère; il faut perfuser du bicarbonate molaire",
      "D. Défaillance rénale aiguë; il faut poser une hémodialyse",
      "E. Intoxication aux salicylés; il faut administrer du charbon activé"
    ],
    correctAnswers: [0],
    explanation: "pH élevé et PaCO2 très basse avec HCO3- normaux caractérisent une alcalose respiratoire aiguë d'origine iatrogène chez un patient sur-ventilé au respirateur. Il convient de réduire la ventilation minute.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-22-13',
    courseId: 'crs-pneumo-22',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans l'acidocétose diabétique décompensée, la respiration ample, profonde et rapide typique est appelée :",
    options: [
      "A. Respiration de Kussmaul (compensation respiratoire maximale de l'acidose métabolique)",
      "B. Respiration périodique de Cheyne-Stokes",
      "C. Bradypnée expiratoire sifflante",
      "D. Respiration ataxique de Biot",
      "E. Polypnée superficielle restrictive"
    ],
    correctAnswers: [0],
    explanation: "La dyspnée de Kussmaul est une polypnée profonde à 4 temps permettant l'hyperventilation alvéolaire et l'élimination massive de CO2 pour tamponner l'acidose métabolique sévère.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-22-14',
    courseId: 'crs-pneumo-22',
    questionNumber: 14,
    type: 'QCM',
    content: "L'alcalose métabolique de contraction volémique provoquée par des vomissements abondants répétés ou des diurétiques de l'anse s'accompagne typiquement :",
    options: [
      "A. D'une hypokaliémie et d'une hypochlorémie avec chlore urinaire bas (< 10-20 mmol/L)",
      "B. D'une hyperkaliémie menaçante et d'une acidose tubulaire",
      "C. D'un trou anionique plasmatique constamment supérieur à 35 mmol/L",
      "D. D'une hyperventilation extrême avec PaCO2 < 15 mmHg",
      "E. D'une hyperchlorémie marquée"
    ],
    correctAnswers: [0],
    explanation: "Les pertes d'acide chlorhydrique (HCl) par vomissements ou pertes rénales génèrent une alcalose métabolique hypochlorémique et hypokaliémique dite chlore-sensible, corrigée par la réhydratation au sérum physiologique NaCl 0,9%.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-22-15',
    courseId: 'crs-pneumo-22',
    questionNumber: 15,
    type: 'QCM',
    content: "Une PaO2 mesurée à 55 mmHg chez un patient en air ambiant définit :",
    options: [
      "A. Une insuffisance respiratoire avec hypoxémie significative",
      "B. Une oxygénation strictement physiologique pour tout âge",
      "C. Une hyperoxie relative",
      "D. Une saturation artérielle en O2 garantie > 99%",
      "E. Une indication formelle de ventilation mécanique invasive immédiate"
    ],
    correctAnswers: [0],
    explanation: "Une PaO2 < 60 mmHg au repos en air ambiant définit l'insuffisance respiratoire aiguë ou chronique selon son caractère évolutif et s'accompagne d'une SaO2 < 90% (partie abrupte de la courbe de dissociation de l'hémoglobine).",
    difficulty: 'facile'
  },

  // 50 Cas cliniques pratiques d'interprétation gazométrique (q-pnm-22-cc-01 à 50)
  ...Array.from({ length: 50 }, (_, i) => {
    const num = i + 1;
    const cases = [
      { ph: "7.22", pco2: "68", po2: "54", hco3: "26", diag: "Acidose respiratoire aiguë non compensée", ans: 0 },
      { ph: "7.36", pco2: "62", po2: "58", hco3: "34", diag: "Acidose respiratoire chronique totalement compensée", ans: 1 },
      { ph: "7.52", pco2: "26", po2: "98", hco3: "21", diag: "Alcalose respiratoire aiguë pure", ans: 2 },
      { ph: "7.18", pco2: "28", po2: "92", hco3: "10", diag: "Acidose métabolique partiellement compensée par hyperventilation", ans: 3 },
      { ph: "7.54", pco2: "46", po2: "85", hco3: "38", diag: "Alcalose métabolique avec hypoventilation alvéolaire compensatrice", ans: 4 },
      { ph: "7.10", pco2: "75", po2: "48", hco3: "22", diag: "Acidose respiratoire aiguë sévère (arrêt de commande / coma)", ans: 0 },
      { ph: "7.40", pco2: "40", po2: "95", hco3: "24", diag: "Gazométrie artérielle strictement normale", ans: 1 },
      { ph: "7.49", pco2: "32", po2: "62", hco3: "24", diag: "Alcalose respiratoire aiguë sur hypoxémie (ex: Embolie pulmonaire)", ans: 2 },
      { ph: "7.25", pco2: "55", po2: "60", hco3: "23", diag: "Acidose respiratoire aiguë surajoutée", ans: 0 },
      { ph: "7.08", pco2: "20", po2: "102", hco3: "6", diag: "Acidose métabolique aiguë profonde (ex: Acidocétose diabétique)", ans: 3 },
      { ph: "7.38", pco2: "58", po2: "64", hco3: "33", diag: "Acidose respiratoire chronique compensée chez un BPCO stable", ans: 1 },
      { ph: "7.55", pco2: "24", po2: "105", hco3: "20", diag: "Alcalose respiratoire aiguë par hyperventilation psychogène", ans: 2 },
      { ph: "7.30", pco2: "33", po2: "94", hco3: "16", diag: "Acidose métabolique compensée", ans: 3 },
      { ph: "7.50", pco2: "48", po2: "88", hco3: "36", diag: "Alcalose métabolique post-vomissements", ans: 4 },
      { ph: "7.15", pco2: "60", po2: "52", hco3: "19", diag: "Acidose mixte (respiratoire et métabolique associée)", ans: 0 },
      { ph: "7.60", pco2: "28", po2: "90", hco3: "32", diag: "Alcalose mixte (respiratoire et métabolique)", ans: 1 },
      { ph: "7.28", pco2: "70", po2: "50", hco3: "32", diag: "Acidose respiratoire aiguë sur fond de BPCO chronique", ans: 0 },
      { ph: "7.35", pco2: "65", po2: "55", hco3: "35", diag: "Acidose respiratoire chronique avec compensation rénale complète", ans: 1 },
      { ph: "7.44", pco2: "28", po2: "96", hco3: "19", diag: "Alcalose respiratoire chronique compensée", ans: 2 },
      { ph: "7.20", pco2: "35", po2: "90", hco3: "13", diag: "Acidose métabolique aiguë pure", ans: 3 },
      { ph: "7.52", pco2: "44", po2: "82", hco3: "34", diag: "Alcalose métabolique hypochlorémique", ans: 4 },
      { ph: "7.24", pco2: "64", po2: "56", hco3: "27", diag: "Acidose respiratoire aiguë hypoxémique", ans: 0 },
      { ph: "7.37", pco2: "60", po2: "62", hco3: "34", diag: "Insuffisance respiratoire chronique obstructive compensée", ans: 1 },
      { ph: "7.48", pco2: "30", po2: "68", hco3: "22", diag: "Alcalose respiratoire réflexe sur hypoxie", ans: 2 },
      { ph: "7.12", pco2: "24", po2: "98", hco3: "8", diag: "Acidose métabolique lactique majeure (état de choc)", ans: 3 },
      { ph: "7.53", pco2: "45", po2: "86", hco3: "37", diag: "Alcalose métabolique secondaire aux diurétiques", ans: 4 },
      { ph: "7.19", pco2: "72", po2: "45", hco3: "26", diag: "Acidose respiratoire aiguë sévère (effet shunt / pneumopathie grave)", ans: 0 },
      { ph: "7.39", pco2: "55", po2: "66", hco3: "32", diag: "Acidose respiratoire chronique au stade d'équilibre", ans: 1 },
      { ph: "7.47", pco2: "31", po2: "72", hco3: "22", diag: "Alcalose respiratoire aiguë débutante", ans: 2 },
      { ph: "7.26", pco2: "30", po2: "92", hco3: "13", diag: "Acidose métabolique avec compensation respiratoire partielle", ans: 3 },
      { ph: "7.51", pco2: "43", po2: "89", hco3: "33", diag: "Alcalose métabolique chlore-sensible", ans: 4 },
      { ph: "7.05", pco2: "80", po2: "42", hco3: "21", diag: "Acidose respiratoire gravissime imposant l'intubation trachéale", ans: 0 },
      { ph: "7.36", pco2: "68", po2: "59", hco3: "37", diag: "Hypercapnie chronique sévère compensée par le rein", ans: 1 },
      { ph: "7.56", pco2: "22", po2: "112", hco3: "19", diag: "Hyperventilation iatrogène sous respirateur artificiel", ans: 2 },
      { ph: "7.16", pco2: "26", po2: "95", hco3: "9", diag: "Acidocétose avec trou anionique plasmatique élargi", ans: 3 },
      { ph: "7.58", pco2: "50", po2: "84", hco3: "45", diag: "Alcalose métabolique sévère avec hypokaliémie", ans: 4 },
      { ph: "7.21", pco2: "66", po2: "51", hco3: "25", diag: "Décompensation respiratoire hypercapnique aiguë", ans: 0 },
      { ph: "7.38", pco2: "63", po2: "61", hco3: "36", diag: "BPCO en état stable avec rétention bicarbonatée", ans: 1 },
      { ph: "7.46", pco2: "32", po2: "70", hco3: "22", diag: "Alcalose respiratoire modérée", ans: 2 },
      { ph: "7.29", pco2: "32", po2: "96", hco3: "15", diag: "Acidose métabolique rénale", ans: 3 },
      { ph: "7.54", pco2: "47", po2: "87", hco3: "39", diag: "Alcalose métabolique sur sonde gastrique en aspiration continue", ans: 4 },
      { ph: "7.14", pco2: "65", po2: "50", hco3: "21", diag: "Acidose mixte pré-arrêt cardiaque", ans: 0 },
      { ph: "7.40", pco2: "56", po2: "65", hco3: "33", diag: "Compensation métabolique idéale d'une hypercapnie chronique", ans: 1 },
      { ph: "7.53", pco2: "25", po2: "85", hco3: "20", diag: "Alcalose respiratoire par polypnée hypoxique", ans: 2 },
      { ph: "7.23", pco2: "29", po2: "93", hco3: "12", diag: "Acidose métabolique d'origine toxique", ans: 3 },
      { ph: "7.49", pco2: "46", po2: "88", hco3: "34", diag: "Alcalose métabolique compensée", ans: 4 },
      { ph: "7.27", pco2: "62", po2: "53", hco3: "28", diag: "Exacerbation aiguë de BPCO avec acidose respiratoire", ans: 0 },
      { ph: "7.35", pco2: "59", po2: "60", hco3: "32", diag: "Acidose respiratoire compensée", ans: 1 },
      { ph: "7.50", pco2: "27", po2: "94", hco3: "20", diag: "Alcalose respiratoire par douleur aiguë", ans: 2 },
      { ph: "7.11", pco2: "25", po2: "99", hco3: "8", diag: "Acidose métabolique sévère post-ischémie mésentérique", ans: 3 }
    ];

    const c = cases[i];
    return {
      id: `q-pnm-22-cc-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-22',
      questionNumber: 15 + num,
      type: 'Cas Clinique' as const,
      clinicalCaseNumber: num,
      content: `CAS CLINIQUE ${num} (Interprétation Gazométrie) :\nUn patient admis aux urgences bénéficie d'un prélèvement de sang artériel en air ambiant :\n- pH : ${c.ph}\n- PaCO2 : ${c.pco2} mmHg\n- PaO2 : ${c.po2} mmHg\n- HCO3- : ${c.hco3} mmol/L\n\nQuelle est l'interprétation diagnostique la plus exacte de ce profil gazométrique ?`,
      options: [
        "A. " + (c.ans === 0 ? c.diag : "Acidose respiratoire aiguë non compensée"),
        "B. " + (c.ans === 1 ? c.diag : "Acidose respiratoire chronique totalement compensée"),
        "C. " + (c.ans === 2 ? c.diag : "Alcalose respiratoire aiguë pure"),
        "D. " + (c.ans === 3 ? c.diag : "Acidose métabolique décompensée"),
        "E. " + (c.ans === 4 ? c.diag : "Alcalose métabolique avec hypoventilation compensatrice")
      ],
      correctAnswers: [c.ans],
      explanation: `Explication : pH = ${c.ph}, PaCO2 = ${c.pco2} mmHg, HCO3- = ${c.hco3} mmol/L. Ce tracé correspond très précisément à : ${c.diag}.`,
      difficulty: 'moyen' as const
    };
  })
];

export const PNEUMO_LESSON_22_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-22-mindmap',
    courseId: 'crs-pneumo-22',
    title: 'Mind Map : Guide Méthodique d\'Interprétation d\'une Gazométrie',
    type: 'mindmap',
    content: `# Mind Map : Analyse en 5 Étapes de la Gazométrie Artérielle

## Étape 1 : Le pH (Statut Acido-Basique)
- **Normal** : 7,38 - 7,42 (tolérance 7,35 - 7,45).
- **Acidémie** : pH < 7,35.
- **Alcalémie** : pH > 7,45.

## Étape 2 : La PaCO2 (Composante Respiratoire)
- Si acidémie et PaCO2 > 45 mmHg -> **Acidose respiratoire**.
- Si alcalémie et PaCO2 < 35 mmHg -> **Alcalose respiratoire**.

## Étape 3 : Les Bicarbonates HCO3- (Composante Métabolique)
- Si acidémie et HCO3- < 22 mmol/L -> **Acidose métabolique**.
- Si alcalémie et HCO3- > 26 mmol/L -> **Alcalose métabolique**.

## Étape 4 : Évaluation de la Compensation
- **Acidose respiratoire aiguë** : ∆HCO3- = +1 mmol/L par 10 mmHg de PaCO2 > 40.
- **Acidose respiratoire chronique** : ∆HCO3- = +3,5 à 4 mmol/L par 10 mmHg de PaCO2 > 40.
- **Acidose métabolique** : Formule de Winter -> PaCO2 attendue = (1,5 x HCO3-) + 8 ± 2.

## Étape 5 : L'Oxygénation et Mécanisme d'Hypoxémie
- PaO2 normale = 100 - (0,3 x âge) mmHg.
- **Gradient alvéolo-artériel en O2 [D(A-a)O2]** :
  - *Normal (< 15-20 mmHg)* -> Hypoventilation alvéolaire pure (dépression centrale, myasthénie, cyphoscoliose).
  - *Élargi (> 20 mmHg)* -> Effet shunt, anomalie du rapport V/Q, trouble de diffusion, shunt vrai anatomique.`
  },
  {
    id: 'res-pnm-22-astuces',
    courseId: 'crs-pneumo-22',
    title: 'Astuces & Formules Clés Gazométrie (Dr. LAIDANI.M)',
    type: 'astuce',
    content: `### Formules indispensables pour réussir tout QCM de Gazométrie

1. **Le Trou Anionique (TA) plasmatique :**
   - $TA = [Na^+] - ([Cl^-] + [HCO_3^-])$
   - Normale : 12 ± 2 mmol/L.
   - Si TA > 16 -> Anions indosés = **Kussmaul / MUDPILES** (Méthanol, Urémie, Diabète/cétoacidose, Paraldéhyde, Isoniazide/Infection, Lactates, Éthylène glycol, Salicylés).
   - Si TA normal (8-14) -> Acidose hyperchlorémique = pertes digestives (diarrhée) ou rénales (acidose tubulaire).

2. **La Règle d'or de la compensation rénale :**
   - En aigu, le rein ne fait rien ! Seul le tampon intracellulaire monte les HCO3- de **1 mmol/L** pour 10 mmHg de CO2.
   - En chronique (> 48h), le rein retient les bicarbonates : gain de **3,5 à 4 mmol/L** pour 10 mmHg de CO2.
   - Si un patient BPCO a un pH normal à 7,38 avec PaCO2 à 60 mmHg et HCO3- à 32 mmol/L : ne touchez à rien, c'est son équilibre d'insuffisant respiratoire chronique !

3. **L'oxygène pur à 100% (Test d'hyperoxie) :**
   - Si la PaO2 monte au-dessus de 400-500 mmHg -> Inégalités V/Q ou trouble de diffusion.
   - Si la PaO2 reste < 200 mmHg malgré FiO2 100% -> **Shunt vrai** (atélectasie complète, atélectasie de résorption, fistule artério-veineuse, SDRA sévère) !`
  }
];

// Lesson 23: TD : Drainage Thoracique et Ponction Pleurale
export const PNEUMO_LESSON_23_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-23-01',
    courseId: 'crs-pneumo-23',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans la réalisation d'une ponction pleurale exploratrice ou évacuatrice, où doit être introduite l'aiguille pour éviter de léser le paquet vasculo-nerveux intercostal ?",
    options: [
      "A. Au ras du bord supérieur de la côte inférieure de l'espace intercostal choisi",
      "B. Au ras du bord inférieur de la côte supérieure",
      "C. Au centre exact de l'espace intercostal sans repère osseux",
      "D. À travers le cartilage costal",
      "E. Au bord médial du sternum"
    ],
    correctAnswers: [0],
    explanation: "Le paquet vasculo-nerveux intercostal chemine dans la gouttière sous-costale, au bord inférieur de la côte supérieure. Pour éviter toute lésion vasculaire (artère intercostale) ou nerveuse, l'aiguille doit impérativement raser le BORD SUPÉRIEUR DE LA CÔTE INFÉRIEURE.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-02',
    courseId: 'crs-pneumo-23',
    questionNumber: 2,
    type: 'QCM',
    content: "Selon les critères validés de Light, un liquide pleural est classé comme un EXSUDAT s'il remplit au moins l'un des critères suivants, SAUF :",
    options: [
      "A. Rapport protéines pleurales / protéines sériques > 0,5",
      "B. Rapport LDH pleurales / LDH sériques > 0,6",
      "C. Taux de LDH pleurales > 2/3 de la limite supérieure de la normale sérique",
      "D. Taux de protéines pleurales < 20 g/L",
      "E. Gradient albumine sérique - albumine pleurale ≤ 12 g/L"
    ],
    correctAnswers: [3],
    explanation: "Un taux de protéines < 20-25 g/L définit au contraire un TRANSSUDAT (mécanisme mécanique : insuffisance cardiaque, cirrhose, syndrome néphrotique). L'exsudat est défini par un liquide riche en protéines (> 30 g/L) et par les critères de Light.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-03',
    courseId: 'crs-pneumo-23',
    questionNumber: 3,
    type: 'QCM',
    content: "Quel volume maximal de liquide pleural est-il généralement recommandé d'évacuer au cours d'une seule séance de ponction pour prévenir l'œdème pulmonaire de réexpansion (a vacuo) ?",
    options: [
      "A. 1 000 à 1 500 mL au maximum",
      "B. 3 000 à 4 000 mL",
      "C. 500 mL au maximum",
      "D. Aucune limite, on peut évacuer 5 litres immédiatement",
      "E. 100 mL"
    ],
    correctAnswers: [0],
    explanation: "L'évacuation trop rapide ou excessive d'un épanchement abondant (> 1 500 mL) expose au risque d'œdème pulmonaire aigu de réexpansion (mécanisme a vacuo) par augmentation brutale de la perméabilité capillaire et contrainte mécanique.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-04',
    courseId: 'crs-pneumo-23',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans quel repère anatomique classique recommande-t-on d'insérer un drain thoracique pour minimiser les risques de traumatismes viscéraux et vasculaires (triangle de sécurité) ?",
    options: [
      "A. Dans le triangle délimité par le bord antérieur du grand dorsal, le bord latéral du grand pectoral et le 5e espace intercostal (ligne axillaire moyenne)",
      "B. Dans le 1er espace intercostal sous la clavicule en dedans de la ligne médioclaviculaire",
      "C. Dans le creux sus-claviculaire",
      "D. Au niveau de la ligne paravertébrale postérieure au 12e espace intercostal",
      "E. Dans l'épigastre sous l'appendice xiphoïde"
    ],
    correctAnswers: [0],
    explanation: "Le 'triangle de sécurité' (Safety Triangle) est délimité en arrière par le grand dorsal, en avant par le grand pectoral, en bas par le 5e espace intercostal (ligne bimamillaire) et en haut par le creux axillaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-05',
    courseId: 'crs-pneumo-23',
    questionNumber: 5,
    type: 'QCM',
    content: "Parmi les situations suivantes, laquelle constitue une indication impérative et urgente à la pose d'un drain thoracique ?",
    options: [
      "A. Pneumothorax complet suffocant ou sous tension avec déviation médiastinale et instabilité hémodynamique",
      "B. Pleurésie purulente franche (empyème pleural) ou épanchement parapneumonique compliqué",
      "C. Hémothorax traumatique abondant",
      "D. Pneumothorax spontané récidivant mal toléré",
      "E. Toutes les situations sus-citées sont des indications formelles de drainage pleural"
    ],
    correctAnswers: [4],
    explanation: "Toutes ces situations nécessitent l'évacuation rapide de l'air, du pus ou du sang sous peine d'engager le pronostic vital ou d'entraîner un enkystement/pachypleurite irréversible.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-06',
    courseId: 'crs-pneumo-23',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans un système de drainage pleural fermé sous eau (bocal de Bülau / système à 3 flacons), que signifie l'absence totale d'oscillation du liquide dans la tige plongeante lors des mouvements respiratoires ?",
    options: [
      "A. Le drain est soit totalement obstrué (caillot, fibrine), coudé, déplacé en dehors de la plèvre, ou le poumon est complètement réexpansé à la paroi",
      "B. Le patient respire parfaitement sans aucun problème",
      "C. Il existe une fuite aérienne massive continue",
      "D. La dépression murale est trop puissante",
      "E. Le liquide est devenu purulent"
    ],
    correctAnswers: [0],
    explanation: "Le liquide doit osciller au rythme de la respiration (montée à l'inspiration, descente à l'expiration). L'absence d'oscillation signe un dysfonctionnement mécanique (drain bouché, clampé, coudé) ou une réexpansion pulmonaire complète collée à la plèvre pariétale.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-23-07',
    courseId: 'crs-pneumo-23',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel examen d'imagerie au lit du patient permet de sécuriser considérablement la ponction pleurale en visualisant l'épanchement, son échogénicité (cloisons de fibrine) et en repérant le diaphragme ?",
    options: [
      "A. L'échographie pleuropulmonaire thoracique",
      "B. La scintigraphie de ventilation",
      "C. La coronarographie",
      "D. L'angiographie numérisée de la crosse aortique",
      "E. La radiographie des sinus de face"
    ],
    correctAnswers: [0],
    explanation: "L'échographie pleurale est recommandée avant toute ponction pleurale pour repérer le point idéal de ponction, évaluer l'épaisseur de l'épanchement, éliminer les cloisons et réduire le risque de pneumothorax accidentel de plus de 70%.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-08',
    courseId: 'crs-pneumo-23',
    questionNumber: 8,
    type: 'QCM',
    content: "Dans le diagnostic étiologique d'un épanchement pleural exsudatif lymphocytaire unilatéral chez un sujet jeune fébrile, quelle est l'étiologie prédominante en Algérie à rechercher en priorité ?",
    options: [
      "A. La pleurésie tuberculeuse (pleurésie sérofibrineuse tuberculeuse)",
      "B. Le mésothéliome malin de la plèvre",
      "C. L'insuffisance ventriculaire gauche",
      "D. Le syndrome néphrotique pur",
      "E. La cirrhose hépatique décompensée"
    ],
    correctAnswers: [0],
    explanation: "En zone d'endémie (Algérie), tout exsudat pleural lymphocytaire chez le sujet jeune est une pleurésie tuberculeuse jusqu'à preuve du contraire (confirmation par biopsie pleurale à l'aiguille de Castelin/Abrams montrant le granulome avec nécrose caséeuse).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-09',
    courseId: 'crs-pneumo-23',
    questionNumber: 9,
    type: 'QCM',
    content: "Qu'est-ce que le liquide pleural chyleux (chylothorax) et comment le confirme-t-on au laboratoire ?",
    options: [
      "A. Liquide d'aspect lactescent blanc contenant un taux élevé de triglycérides (> 1,1 g/L ou 110 mg/dL) et des chylomicrons",
      "B. Liquide contenant plus de 80% de polynucléaires éosinophiles",
      "C. Liquide transparent avec hématocrite pleural > 50%",
      "D. Liquide vert contenant de la bile pure",
      "E. Liquide acellulaire contenant uniquement du cholestérol cristallisé"
    ],
    correctAnswers: [0],
    explanation: "Le chylothorax résulte de la rupture ou de la compression du canal thoracique (traumatisme, lymphome). Le liquide est lactescent et la présence de triglycérides > 1,1 g/L confirme le diagnostic.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-23-10',
    courseId: 'crs-pneumo-23',
    questionNumber: 10,
    type: 'QCM',
    content: "Pour diagnostiquer avec certitude un hémothorax sur un liquide pleural d'aspect franchement hématique, quel critère biologique est indispensable ?",
    options: [
      "A. Hématocrite du liquide pleural supérieur à 50% de l'hématocrite sanguin périphérique",
      "B. Présence d'un seul globule rouge au microscope",
      "C. Taux de plaquettes pleurales nul",
      "D. Présence de leucocytes à 100/mm³",
      "E. Taux de fibrinogène doublé"
    ],
    correctAnswers: [0],
    explanation: "Un liquide pleural rosâtre ou hématique peut survenir lors d'une simple effraction vasculaire ou d'un cancer. Le diagnostic formel d'hémothorax exige un hématocrite pleural ≥ 50% de l'hématocrite sanguin du patient.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-23-11',
    courseId: 'crs-pneumo-23',
    questionNumber: 11,
    type: 'QCM',
    content: "Lors de l'ablation d'un drain thoracique, quelle manœuvre respiratoire doit exécuter le patient au moment précis du retrait du tube pour éviter l'entrée accidentelle d'air dans la plèvre ?",
    options: [
      "A. Apnée en expiration forcée ou manœuvre de Valsalva bloquée",
      "B. Inspiration maximale profonde et continue",
      "C. Toux quinteuse violente",
      "D. Déglutition rapide d'un verre d'eau",
      "E. Hyperventilation rapide"
    ],
    correctAnswers: [0],
    explanation: "Le retrait s'effectue en apnée après inspiration profonde maintenue ou en manœuvre de Valsalva bloquée (pression pleurale positive), avec serrage immédiat du fil en bourse préposé et pansement occlusif gras.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-12',
    courseId: 'crs-pneumo-23',
    questionNumber: 12,
    type: 'QCM',
    content: "La pleurodèse chimique (talcage pleural ou instillation de produit sclérosant) est principalement indiquée dans :",
    options: [
      "A. Les pleurésies néoplasiques malignes récidivantes invalidantes et les récidives de pneumothorax chez le patient inopérable",
      "B. La primo-infection tuberculeuse pleurale simple",
      "C. La pleurésie purulente aiguë en phase d'empyème franc",
      "D. L'œdème aigu du poumon cardiogénique",
      "E. L'hémothorax traumatique aigu non drainé"
    ],
    correctAnswers: [0],
    explanation: "La symphyse pleurale (talcage par thoracoscopie ou instillation) est indiquée pour recoller les deux feuillets pleuraux et prévenir les récidives de pleurésie tumorale ou de pneumothorax chez des sujets fragiles.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-13',
    courseId: 'crs-pneumo-23',
    questionNumber: 13,
    type: 'QCM',
    content: "Parmi les complications aiguës potentielles de la ponction pleurale, quelle manifestation bénigne mais fréquente est liée à une stimulation vagale lors du passage pariétal ?",
    options: [
      "A. Malaise vagal avec bradycardie réflexe, pâleur, sueurs et hypotension transitoire",
      "B. Rupture de l'aorte thoracique descendante",
      "C. Infarctus du myocarde transmural",
      "D. Tétanos généralisé immédiat",
      "E. Cécité corticale bilatérale"
    ],
    correctAnswers: [0],
    explanation: "La réaction vagale est fréquente, favorisée par l'anxiété, la douleur ou une anesthésie locale insuffisante. Elle impose l'arrêt temporaire du geste, la mise en décubitus et la surveillance du pouls.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-23-14',
    courseId: 'crs-pneumo-23',
    questionNumber: 14,
    type: 'QCM',
    content: "Quelle anomalie du liquide pleural évoque fortement une rupture œsophagienne (syndrome de Boerhaave) compliquée de pleurésie médiastinale purulente ?",
    options: [
      "A. Élévation majeure du taux d'amylase pleurale (isozyme salivaire) et pH pleural acide (< 6,0)",
      "B. Taux de glucose pleural supérieur à 20 g/L",
      "C. Liquide strictement stérile avec prédominance de lymphocytes",
      "D. Présence de cristaux d'oxalate de calcium isolés",
      "E. Absence totale d'enzymes digestives"
    ],
    correctAnswers: [0],
    explanation: "La perforation de l'œsophage entraîne l'issue de salive dans le médiastin et la plèvre gauche, responsable d'un liquide pleural avec amylase très élevée (salivaire), pH très bas (< 7,0 voire < 6,0) et germes buccaux à l'examen direct.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-23-15',
    courseId: 'crs-pneumo-23',
    questionNumber: 15,
    type: 'QCM',
    content: "La contre-indication absolue classique à la biopsie pleurale transpariétale à l'aiguille de Castelin ou Abrams est :",
    options: [
      "A. Troubles majeurs et non corrigés de l'hémostase (taux de plaquettes < 50 000/mm³ ou TP < 50%) ou refus du patient",
      "B. Antécédent d'appendicectomie",
      "C. Âge supérieur à 60 ans",
      "D. Toux sèche modérée",
      "E. Présence d'un épanchement pleural abondant"
    ],
    correctAnswers: [0],
    explanation: "Comme tout geste de biopsie percutanée 'à l'aveugle', les coagulopathies sévères et thrombopénies non corrigées représentent une contre-indication absolue en raison du risque d'hémothorax cataclysmique par dilacération intercostale.",
    difficulty: 'facile'
  },

  // 50 Cas cliniques pratiques (q-pnm-23-cc-01 à 50)
  ...Array.from({ length: 50 }, (_, i) => {
    const num = i + 1;
    const cases = [
      { tit: "Liquide citrin, Protéines = 14 g/L, LDH = 60 UI/L, rapport prot = 0.2", diag: "Transsudat mécanique (ex: Insuffisance cardiaque congestive)", ans: 0 },
      { tit: "Liquide jaune trouble, Protéines = 48 g/L, LDH = 850 UI/L, 85% de lymphocytes", diag: "Exsudat lymphocytaire (pleurésie tuberculeuse probable)", ans: 1 },
      { tit: "Liquide purulent nauséabond, pH = 6.80, Glucose = 0.5 mmol/L, PNN altérés", diag: "Empyème / pleurésie purulente imposant le drainage thoracique urgent", ans: 2 },
      { tit: "Liquide lactescent blanc, Triglycérides = 2.4 g/L, chylomicrons présents", diag: "Chylothorax par lésion ou envahissement du canal thoracique", ans: 3 },
      { tit: "Liquide rouge sanglant, Hématocrite pleural = 38% (Ht sanguin = 40%)", diag: "Hémothorax vrai nécessitant un drainage en gros calibre", ans: 4 },
      { tit: "Évacuation de 2 200 mL en 15 minutes, apparition brutale d'une toux avec expectorations rosées", diag: "Œdème pulmonaire de réexpansion aiguë (a vacuo)", ans: 0 },
      { tit: "Drain thoracique qui cesse d'osciller chez un patient dyspnéique avec emphysème sous-cutané", diag: "Obstruction ou coudure du drain thoracique nécessitant une réévaluation immédiate", ans: 1 },
      { tit: "Liquide citrin, Protéines = 52 g/L, cellules malignes atypiques à l'examen cytologique", diag: "Exsudat pleural métastatique néoplasique", ans: 2 },
      { tit: "Liquide citrin chez un cirrhotique avec ascite, Protéines pleurales = 11 g/L", diag: "Hydrothorax hépatique transsudatif", ans: 0 },
      { tit: "Douleur basi-thoracique violente après vomissements répétés, amylase pleurale x 10", diag: "Rupture de l'œsophage (Syndrome de Boerhaave)", ans: 3 },
      { tit: "Pleurésie après fracture de côtes, liquide franchement sanglant sans coagulum", diag: "Hémothorax traumatique", ans: 4 },
      { tit: "Pneumothorax complet avec collapsus total du poumon gauche et déviation trachéale", diag: "Pneumothorax suffocant sous tension : exsufflation / drainage immédiat", ans: 0 },
      { tit: "Liquide jaune paille avec 60% d'éosinophiles dans la plèvre", diag: "Pleurésie à éosinophiles (air/sang dans la plèvre, parasitose, médicament)", ans: 1 },
      { tit: "Protéines pleurales à 22 g/L chez une patiente avec anasarque et protéinurie > 3g/24h", diag: "Transsudat secondaire à un syndrome néphrotique", ans: 0 },
      { tit: "Liquide exsudatif avec taux élevé d'acide hyaluronique chez un travailleur de l'amiante", diag: "Mésothéliome pleural malin", ans: 2 },
      { tit: "Déplacement accidentel du drain hors de la cavité pleurale avec œil dans les tissus mous", diag: "Extrusion du drain avec risque d'emphysème pariétal et inefficacité", ans: 1 },
      { tit: "Apparition de bulles d'air continues dans le bocal lors de la toux chez un patient drainé", diag: "Fuite aérienne active / brèche parenchymateuse persistante", ans: 2 },
      { tit: "Ponction pleurale ramenant un liquide brun-chocolat d'odeur de pâte d'anchois", diag: "Rupture pleurale d'un abcès amibien du foie", ans: 3 },
      { tit: "Liquide pleural contenant des cristaux de cholestérol sans triglycérides", diag: "Pleurésie à cholestérol (pseudochylothorax sur pachypleurite ancienne)", ans: 4 },
      { tit: "Biopsie pleurale à l'aiguille ramenant des granulomes giganto-cellulaires avec nécrose caséeuse", diag: "Confirmation histologique de pleurésie tuberculeuse", ans: 1 },
      { tit: "Liquide citrin avec Protéines = 18 g/L chez un insuffisant cardiaque décompensé", diag: "Transsudat cardiogénique", ans: 0 },
      { tit: "Patient sous anticoagulant avec hématome pariétal et épanchement hématique après ponction", diag: "Complication hémorragique par lésion de l'artère intercostale", ans: 4 },
      { tit: "Ponction pleurale sans liquide sous anesthésie locale, toux sèche déclenchée", diag: "Ponction blanche (épanchement cloisonné ou trop peu abondant)", ans: 1 },
      { tit: "Épanchement parapneumonique avec pH pleural = 7.05 et LDH = 1 200 UI/L", diag: "Épanchement parapneumonique compliqué nécessitant impérativement un drainage", ans: 2 },
      { tit: "Pneumothorax spontané du sujet jeune au 3e épisode ipsilatéral", diag: "Indication de pleurectomie / talcage sous vidéo-thoracoscopie", ans: 3 },
      { tit: "Drain sous eau aspirant constamment des bulles même lorsque le drain est clampé à la peau", diag: "Fuite d'air sur le raccord ou le tuyau du système d'aspiration", ans: 0 },
      { tit: "Malaise avec pâleur et sueurs froides pendant l'infiltration de xylocaïne", diag: "Syncope vagale réflexe banale", ans: 1 },
      { tit: "Ponction pleurale accidentelle de la rate lors d'une ponction trop basse à gauche", diag: "Lésion splénique iatrogène par non-respect des repères anatomiques", ans: 4 },
      { tit: "Talcage pleural réalisé sous thoracoscopie chez un patient avec cancer métastatique", diag: "Pleurodèse palliative pour symphyse pleurale", ans: 3 },
      { tit: "Liquide pleural séreux avec présence de bacilles acido-alcoolo-résistants (BAAR)", diag: "Pleurésie tuberculeuse bacillifère directe", ans: 1 },
      { tit: "Pleurésie post-chirurgie cardiaque avec liquide sérohématique et forte teneur en éosinophiles", diag: "Syndrome post-cardiotomie / Dressler", ans: 2 },
      { tit: "Liquide purulent épais bloquant le drain de petit calibre", diag: "Nécessité de rinçages ou changement pour un drain de gros calibre (28-32 Fr)", ans: 2 },
      { tit: "Présence d'un niveau hydro-aérique horizontal sur la radiographie thoracique après ponction", diag: "Pneumothorax iatrogène avec hydropneumothorax", ans: 0 },
      { tit: "Pleurésie exsudative bilatérale avec anticorps anti-nucléaires positifs et consommation du complément", diag: "Pleurésie lupique au cours d'un LES", ans: 1 },
      { tit: "Évacuation d'un transsudat chez un patient dialysé péritonéal avec liquide très riche en glucose", diag: "Fistule pleuro-péritonéale compliquant la dialyse", ans: 3 },
      { tit: "Emphysème sous-cutané crépitant cervical et thoracique extensif après pose de drain", diag: "Drain partiellement extériorisé ou mauvaise étanchéité cutanée", ans: 0 },
      { tit: "Chylothorax post-opératoire après curage ganglionnaire médiastinal gauche", diag: "Plaie iatrogène du canal thoracique", ans: 3 },
      { tit: "Liquide trouble avec présence de germes anaérobies à la coloration de Gram", diag: "Empyème par inhalation bactérienne", ans: 2 },
      { tit: "Biopsie pleurale montrant une prolifération de cellules calrétinine positives et WT1 positives", diag: "Profil immunohistochimique de mésothéliome malin", ans: 2 },
      { tit: "Retrait de drain sans incident : pansement gras compressif maintenu 48 heures", diag: "Protocole standard conforme d'ablation de drain", ans: 1 },
      { tit: "Épanchement transsudatif bilatéral prédominant à droite avec cardiégalie", diag: "Transsudat sur insuffisance ventriculaire gauche", ans: 0 },
      { tit: "Drainage d'un hémothorax avec débit de 300 mL/heure pendant 3 heures consécutives", diag: "Indication formelle de thoracotomie hémostatique chirurgicale urgente", ans: 4 },
      { tit: "Pleurésie exsudative avec polyarthrite rhumatoïde évoluée : glucose pleural effondré (< 0.3 g/L)", diag: "Pleurésie rhumatoïde caractérisée par une consommation extrême de glucose", ans: 1 },
      { tit: "Thoracocentèse échoguidée chez une patiente obèse en réanimation", diag: "Recommandation d'optimisation de sécurité par guidage échographique", ans: 0 },
      { tit: "Fibrinolyse intra-pleurale par alteplase (tPA) et dornase alfa (DNase)", diag: "Traitement de l'enkystement et du cloisonnement pleural non drainable", ans: 2 },
      { tit: "Présence d'air sous tension après tentative de ponction chez un emphysémateux", diag: "Pneumothorax par brèche pulmonaire iatrogène", ans: 0 },
      { tit: "Liquide jaune citrin avec PCR GeneXpert positive pour Mycobacterium tuberculosis", diag: "Confirmation rapide de pleurésie tuberculeuse", ans: 1 },
      { tit: "Pleurésie néoplasique après échec de talcage : pose d'un cathéter pleural tunnéllé à demeure", diag: "Alternative au talcage pour drainage ambulatoire itératif", ans: 3 },
      { tit: "Aspiration pleurale réglée à -20 cmH2O sur le régulateur mural", diag: "Pression négative standard recommandée en drainage pleural", ans: 0 },
      { tit: "Liquide pleural stérile avec disparition complète de l'épanchement après diurétiques", diag: "Preuve rétrospective de transsudat cardiogénique résolutif", ans: 0 }
    ];

    const c = cases[i];
    return {
      id: `q-pnm-23-cc-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-23',
      questionNumber: 15 + num,
      type: 'Cas Clinique' as const,
      clinicalCaseNumber: num,
      content: `CAS CLINIQUE ${num} (TD Ponction & Drainage) :\nSituation clinique : ${c.tit}.\n\nQuelle est la conduite à tenir ou l'interprétation diagnostique la plus adaptée ?`,
      options: [
        "A. " + (c.ans === 0 ? c.diag : "Transsudat mécanique résolutif"),
        "B. " + (c.ans === 1 ? c.diag : "Exsudat lymphocytaire tuberculeux"),
        "C. " + (c.ans === 2 ? c.diag : "Empyème nécessitant drainage urgent"),
        "D. " + (c.ans === 3 ? c.diag : "Chylothorax par atteinte du canal thoracique"),
        "E. " + (c.ans === 4 ? c.diag : "Hémothorax imposant prise en charge spécifique")
      ],
      correctAnswers: [c.ans],
      explanation: `Explication : ${c.tit}. Cela correspond précisément à : ${c.diag}.`,
      difficulty: 'moyen' as const
    };
  })
];

export const PNEUMO_LESSON_23_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-23-mindmap',
    courseId: 'crs-pneumo-23',
    title: 'Mind Map : Ponction Pleurale & Drainage Thoracique',
    type: 'mindmap',
    content: `# Mind Map : Geste et Diagnostic Pleural

## 1. Ponction Pleurale (Thoracocentèse)
- **Objectif** : Diagnostique (chimie, cyto, bactério) et/ou évacuatrice (dyspnée).
- **Repère technique** :
  - Patient assis dos rond, penché en avant.
  - Percussion (matité) + repérage échographique obligatoire.
  - Aiguille introduite au **bord supérieur de la côte inférieure** (pour éviter l'artère intercostale).
  - Évacuation limitée à **≤ 1 000 - 1 500 mL** (prévention de l'œdème de réexpansion).

## 2. Analyse Biologique : Critères de Light
- **Exsudat** si ≥ 1 critère :
  - Protéines pleurales / sériques > 0,5
  - LDH pleurale / sérique > 0,6
  - LDH pleurale > 2/3 de la normale sérique
- **Transsudat** : Protéines < 25-30 g/L (Cœur, Cirrhose, Néphrose).

## 3. Drainage Thoracique
- **Indications impératives** :
  - Pneumothorax suffocant, sous tension ou mal toléré.
  - Hémothorax traumatique ou post-opératoire.
  - Pleurésie purulente / empyème.
- **Triangle de sécurité** : Ligne axillaire moyenne, 5e espace intercostal, bord antérieur du grand dorsal, bord latéral du grand pectoral.
- **Système de recueil** : Bocal sous eau (valve hydraulique anti-reflux) ± aspiration (-10 à -20 cmH2O).
- **Ablation** : Poumon à la paroi, absence de fuite aérienne, liquide séreux < 50-100 mL/24h. Retrait en apnée bloquée / Valsalva.`
  },
  {
    id: 'res-pnm-23-astuces',
    courseId: 'crs-pneumo-23',
    title: 'Astuces & Pièges QCM : Ponction & Drainage (Dr. LAIDANI.M)',
    type: 'astuce',
    content: `### Pièges fréquents au concours et examens cliniques

1. **Règle absolue du bord supérieur de la côte inférieure :**
   - « Où passe le paquet vasculo-nerveux intercostal ? » -> Au **bord inférieur** de la côte supérieure !
   - « Où pique-t-on ? » -> Toujours au **bord supérieur de la côte inférieure** !

2. **L'œdème a vacuo (œdème de réexpansion) :**
   - Survient typiquement quand un étudiant ou médecin évacue trop vite plus de 1,5 à 2 litres de liquide pleural d'un coup.
   - Le patient se met à tousser de façon incoercible et crache une mousse rosée saumonée asphyxiante. *Règle : jamais plus de 1 200 à 1 500 mL par séance !*

3. **Le piège du liquide hématique :**
   - Une goutte de sang suffit à teinter 50 mL de liquide pleural.
   - Ne dites **jamais** « hémothorax » sans mesurer l'hématocrite pleural !
   - **Hémothorax** = Hématocrite pleural > 50% de l'hématocrite du sang périphérique.

4. **Transsudat vs Exsudat en cas de diurétiques :**
   - Les diurétiques chez un insuffisant cardiaque concentrent les protéines du liquide pleural, faisant faussement croire à un exsudat par les critères de Light.
   - Dans ce cas, calculez le gradient d'albumine séro-pleural : si Albumine sérum - Albumine plèvre > 12 g/L -> c'est bien un transsudat !`
  }
];
