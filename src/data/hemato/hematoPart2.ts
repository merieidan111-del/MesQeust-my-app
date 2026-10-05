import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 4: CONDUITE À TENIR DEVANT UNE ANÉMIE - Pr Brahimi
// ==========================================
export const HEMATO_LESSON_4_QUESTIONS: Question[] = [
  {
    id: 'q-hem-04-01',
    courseId: 'crs-hemato-4',
    questionNumber: 1,
    type: 'QCM',
    content: "Une femme enceinte au 2ème trimestre consulte pour asthénie. Son hémoglobine est à 10,2 g/dL. Selon les seuils OMS du cours, quelle affirmation est exacte ?",
    options: [
      "A) L’anémie est retenue car l’Hb est < 11 g/dL chez toute femme enceinte",
      "B) L’anémie n’est pas diagnostiquée car le seuil chez la femme enceinte au 2ème trimestre est < 10 g/dL",
      "C) Le seuil OMS pour une femme enceinte au 2ème trimestre est < 10,5 g/dL → donc anémie confirmée",
      "D) Le seuil est < 11 g/dL quel que soit le trimestre, donc elle n’est pas anémique",
      "E) Une hémodilution physiologique rend le diagnostic impossible"
    ],
    correctAnswers: [2],
    explanation: "D’après les critères OMS, le seuil d'anémie pour la femme enceinte au 2ème trimestre est Hb < 105 g/L (10,5 g/dL). L’Hb relevée est 10,2 g/dL → anémie confirmée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-02',
    courseId: 'crs-hemato-4',
    questionNumber: 2,
    type: 'QCM',
    content: "Toutes les situations suivantes peuvent donner une pseudo-anémie (fausse anémie) par hémodilution SAUF :",
    options: [
      "A) Grossesse physiologique au 2ème trimestre",
      "B) Splénomégalie vasculaire volumineuse (hypersplénisme)",
      "C) Polyglobulie de Vaquez",
      "D) Cirrhose hépatique décompensée",
      "E) Paraprotéinémie majeure (maladie de Waldenström / myélome à IgM)"
    ],
    correctAnswers: [2],
    explanation: "La polyglobulie de Vaquez est une prolifération clonale avec augmentation réelle absolue de la masse globulaire totale. Grossesse, splénomégalie majeure, cirrhose et hypergammaglobulinémies massives augmentent le volume plasmatique, créant une pseudo-anémie par hémodilution.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-03',
    courseId: 'crs-hemato-4',
    questionNumber: 3,
    type: 'QCM',
    content: "Un homme de 35 ans a un taux d’hémoglobine à 9,4 g/dL, VGM = 92 fL, réticulocytes = 35 G/L (N: 20-120). Cette anémie est :",
    options: [
      "A) Microcytaire régénérative",
      "B) Normocytaire arégénérative",
      "C) Macrocytaire arégénérative",
      "D) Normocytaire régénérative",
      "E) Macrocytaire régénérative"
    ],
    correctAnswers: [1],
    explanation: "VGM entre 80 et 100 fL = normocytaire. Réticulocytes < 120 G/L (< 120 000/mm³) = arégénérative (origine centrale médullaire).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-04',
    courseId: 'crs-hemato-4',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans une anémie hémolytique aiguë, quel est le bilan biologique habituellement rencontré ?",
    options: [
      "A) Haptoglobine élevée, LDH normales, bilirubine libre basse",
      "B) Haptoglobine effondrée, LDH élevées, bilirubine libre augmentée",
      "C) Haptoglobine basse, LDH basses, ferritine effondrée",
      "D) Haptoglobine normale, bilirubine conjuguée élevée",
      "E) Diminution des LDH et augmentation de l’haptoglobine"
    ],
    correctAnswers: [1],
    explanation: "Le trépied biologique de l'hémolyse associe : chute de l'haptoglobine (consommée par l'Hb libre), élévation des LDH (cytolyse érythrocytaire) et augmentation de la bilirubine libre (non conjuguée).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-05',
    courseId: 'crs-hemato-4',
    questionNumber: 5,
    type: 'QCM',
    content: "Au myélogramme, une moelle pauvre avec érythroblastopénie (<5% d’érythroblastes) évoque en premier lieu :",
    options: [
      "A) Leucémie aiguë myéloïde",
      "B) Myélome multiple",
      "C) Aplasie médullaire ou érythroblastopénie pure (Blackfan-Diamond / acquise)",
      "D) Métastases médullaires",
      "E) Syndrome myélodysplasique hypercellulaire"
    ],
    correctAnswers: [2],
    explanation: "La disparition sélective ou globale des précurseurs érythroïdes (<5%) signe une érythroblastopénie ou une aplasie médullaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-06',
    courseId: 'crs-hemato-4',
    questionNumber: 6,
    type: 'QCM',
    content: "Bilan martial : fer sérique très bas, ferritine à 4 µg/L, transferrine élevée. Cette anomalie correspond à :",
    options: [
      "A) Anémie inflammatoire",
      "B) Carence martiale (anémie ferriprive)",
      "C) Anémie sidéroblastique",
      "D) Thalassémie mineure",
      "E) Hémoglobinose C"
    ],
    correctAnswers: [1],
    explanation: "Carence en fer pure : ferritine effondrée (< 15-30 µg/L, reflet fidèle des réserves en fer de l'organisme), fer sérique bas et transferrine augmentée avec coefficient de saturation effondré (< 15%).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-07',
    courseId: 'crs-hemato-4',
    questionNumber: 7,
    type: 'QCM',
    content: "Une patiente de 70 ans, CRP élevée (78 mg/L), Hb 10 g/dL, VGM 82 fL, fer sérique bas, ferritine à 310 µg/L, transferrine normale. Quel diagnostic est le plus probable ?",
    options: [
      "A) Maladie de Biermer",
      "B) Anémie ferriprive sur ménorragies",
      "C) Anémie inflammatoire chronique",
      "D) Thalassémie intermédiaire",
      "E) Myélome multiple"
    ],
    correctAnswers: [2],
    explanation: "Contexte inflammatoire (CRP élevée), fer sérique bas par séquestration macrophagique sous l'effet de l'hepcidine, mais ferritine normale ou élevée (> 100-300 µg/L) : anémie inflammatoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-08',
    courseId: 'crs-hemato-4',
    questionNumber: 8,
    type: 'QCM',
    content: "Un patient alcoolique chronique présente une macrocytose (VGM 105 fL), une anémie à 9 g/dL, pas de pancytopénie, TSH normale. L’étiologie la plus fréquente est :",
    options: [
      "A) Carence en vitamine B12",
      "B) Carence en folates",
      "C) Hypothyroïdie fruste",
      "D) Myélodysplasie",
      "E) Hépatopathie alcoolique (toxicité directe de l'alcool sur l'érythropoïèse)"
    ],
    correctAnswers: [4],
    explanation: "L'alcool a une toxicité directe sur les membranes érythrocytaires et l'érythropoïèse, provoquant une macrocytose isolée sans carence vitaminique dans plus de 80% des cas d'éthylisme chronique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-09',
    courseId: 'crs-hemato-4',
    questionNumber: 9,
    type: 'QCM',
    content: "Dans la carence en vitamine B12 (maladie de Biermer), le traitement substitutif de référence est :",
    options: [
      "A) Acide folique per os 5 mg/j pendant 4 mois",
      "B) Cyanocobalamine 1000 µg IM : 10 injections d’attaque puis une injection mensuelle à vie",
      "C) Complexe vitaminique B oral à vie",
      "D) Transfusion itérative de concentrés globulaires",
      "E) Hydroxocobalamine IV une fois par semaine"
    ],
    correctAnswers: [1],
    explanation: "Schéma classique : Vitamine B12 1000 µg par voie intramusculaire (IM), 10 injections d'attaque rapprochées, puis 1 injection mensuelle à vie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-10',
    courseId: 'crs-hemato-4',
    questionNumber: 10,
    type: 'QCM',
    content: "Pourquoi ne faut-il jamais traiter une anémie par carence en vitamine B12 uniquement par de l’acide folique ?",
    options: [
      "A) L’acide folique diminue l’absorption de la B12",
      "B) Il pourrait masquer l’anémie mais aggraver les lésions neurologiques (sclérose combinée de la moelle)",
      "C) Il provoque une hémolyse aiguë",
      "D) Il majore la macrocytose",
      "E) Il est inefficace per os"
    ],
    correctAnswers: [1],
    explanation: "L'acide folique corrige l'anémie mégaloblastique mais n'arrête pas la démyélinisation des cordons postérieurs et latéraux de la moelle, risquant de rendre les séquelles neurologiques irréversibles.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-11',
    courseId: 'crs-hemato-4',
    questionNumber: 11,
    type: 'QCM',
    content: "Parmi les signes suivants, lequel impose une transfusion de concentrés de globules rouges en urgence ?",
    options: [
      "A) Asthénie modérée avec Hb 9 g/dL",
      "B) Dyspnée au moindre effort ou au repos, angor d'effort ou signes d'ischémie myocardique",
      "C) Pâleur des conjonctives isolée",
      "D) Tachycardie à 95/min stable",
      "E) Vertiges non invalidants au lever"
    ],
    correctAnswers: [1],
    explanation: "La transfusion n'est pas guidée par un seuil strict d'Hb mais par la tolérance clinique : signes d'ischémie myocardique (angor), décompensation cardiaque ou troubles neurologiques anoxiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-12',
    courseId: 'crs-hemato-4',
    questionNumber: 12,
    type: 'QCM',
    content: "Patient de 28 ans, anémie Hb 7,5 g/dL, réticulocytes 250 G/L, bilirubine libre élevée, haptoglobine < 0,1 g/L, test de Coombs direct négatif. Quel mécanisme est le plus probable ?",
    options: [
      "A) Hémolyse autoimmune à IgG chaude",
      "B) Hémolyse mécanique (schizocytes) ou corpusculaire (G6PD, sphérocytose)",
      "C) Hémorragie occulte chronique",
      "D) Carence martiale mixte",
      "E) Anémie mégaloblastique débutante"
    ],
    correctAnswers: [1],
    explanation: "Hémolyse régénérative prouvée avec Coombs direct négatif = anémie hémolytique non immune (corpusculaire : membranopathie, enzymopathie, hémoglobinopathie ; ou mécanique : microangiopathie thrombotique).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-13',
    courseId: 'crs-hemato-4',
    questionNumber: 13,
    type: 'QCM',
    content: "Hémoglobinurie paroxystique nocturne (HPN) : laquelle de ces affirmations est correcte ?",
    options: [
      "A) C’est une anémie hémolytique corpusculaire héréditaire",
      "B) Le diagnostic repose sur la résistance globulaire hypotonique",
      "C) Elle est due à un déficit clonal acquis d’expression de CD55 et CD59 (mutation PIG-A)",
      "D) Elle n’entraîne jamais de thrombose",
      "E) Le Coombs direct est constamment positif"
    ],
    correctAnswers: [2],
    explanation: "L'HPN est une anomalie clonale acquise de la cellule souche hématopoïétique (mutation du gène PIG-A) avec perte des protéines d'ancrage GPI (CD55/CD59), entraînant une sensibilité anormale au complément et des thromboses atypiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-14',
    courseId: 'crs-hemato-4',
    questionNumber: 14,
    type: 'QCM',
    content: "Un sujet d’origine méditerranéenne a une anémie microcytaire (VGM 68 fL), fer sérique et ferritine normaux. Quel est l’examen de première intention ?",
    options: [
      "A) Myélogramme",
      "B) Électrophorèse de l’hémoglobine",
      "C) Dosage de la B12",
      "D) Test de Coombs",
      "E) Ferritinémie seule"
    ],
    correctAnswers: [1],
    explanation: "Microcytose sans carence martiale chez un sujet méditerranéen = suspicion de thalassémie (bêta-thalassémie hétérozygote mineure). L'électrophorèse de l'Hb met en évidence une élévation de l'HbA2 (> 3,3-3,5%).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-15',
    courseId: 'crs-hemato-4',
    questionNumber: 15,
    type: 'QCM',
    content: "Une anémie normocytaire arégénérative chez un insuffisant rénal chronique (clairance 25 ml/min) est principalement liée à :",
    options: [
      "A) Hémolyse chronique",
      "B) Carence en fer absolue",
      "C) Déficit en érythropoïétine (EPO) de synthèse rénale",
      "D) Myélome multiple associé",
      "E) Hypersplénisme"
    ],
    correctAnswers: [2],
    explanation: "Le rein produit plus de 90% de l'érythropoïétine ; l'altération du parenchyme rénal entraîne un déficit de sécrétion de l'EPO, responsable d'une anémie normocytaire arégénérative.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-16',
    courseId: 'crs-hemato-4',
    questionNumber: 16,
    type: 'QCM',
    content: "Après une hémorragie aiguë brutale (ex: rupture artérielle), le pic de réticulocytes médullaire survient habituellement :",
    options: [
      "A) Dans les 6 premières heures",
      "B) Entre le 3ème et le 7ème jour (maximal vers J7)",
      "C) Après 2 mois",
      "D) Immédiatement après la perte sanguine",
      "E) Jamais après 48h"
    ],
    correctAnswers: [1],
    explanation: "La moelle osseuse met 3 à 5 jours pour accélérer la production et libérer les réticulocytes dans le sang périphérique, avec un pic régénératif vers J7.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-17',
    courseId: 'crs-hemato-4',
    questionNumber: 17,
    type: 'QCM',
    content: "Un myélogramme riche avec 35% de blastes indique formellement :",
    options: [
      "A) Une aplasie médullaire",
      "B) Une leucémie aiguë (selon le seuil OMS ≥ 20%)",
      "C) Une myélofibrose",
      "D) Un syndrome myélodysplasique sans excès de blastes",
      "E) Une anémie ferriprive sévère"
    ],
    correctAnswers: [1],
    explanation: "Selon la classification OMS, la présence de 20% ou plus de blastes médullaires définit la leucémie aiguë.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-18',
    courseId: 'crs-hemato-4',
    questionNumber: 18,
    type: 'QCM',
    content: "Devant une suspicion d’anémie hémolytique immune, l’examen biologique de référence est :",
    options: [
      "A) Haptoglobinémie",
      "B) Bilirubine totale",
      "C) Test de Coombs direct (TCD)",
      "D) Frottis sanguin",
      "E) Électrophorèse des protéines"
    ],
    correctAnswers: [2],
    explanation: "Le test de Coombs direct (test direct à l'antiglobuline) met en évidence les immunoglobulines (IgG) ou fractions du complément (C3d) fixées sur la membrane des hématies.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-19',
    courseId: 'crs-hemato-4',
    questionNumber: 19,
    type: 'QCM',
    content: "La présence de schizocytes (fragments d'hématies en casque ou triangle) sur le frottis sanguin oriente vers :",
    options: [
      "A) Drépanocytose homozygote",
      "B) Microangiopathie thrombotique (SHU, PTT) ou hémolyse mécanique sur prothèse valvulaire",
      "C) Thalassémie majeure",
      "D) Sphérocytose héréditaire",
      "E) Anémie de Biermer"
    ],
    correctAnswers: [1],
    explanation: "Les schizocytes traduisent la fragmentation mécanique des globules rouges sur des microthrombi intraluminaux de fibrine (MAT: PTT, SHU) ou sur une prothèse valvulaire mécanique dysfonctionnelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-20',
    courseId: 'crs-hemato-4',
    questionNumber: 20,
    type: 'QCM',
    content: "Parmi ces médicaments, lequel peut induire une macrocytose médicamenteuse par inhibition de la synthèse d'ADN ?",
    options: [
      "A) Amoxicilline",
      "B) Méthotrexate (anti-folique) et hydroxyurée",
      "C) Paracétamol",
      "D) Ibuprofène",
      "E) Hydrochlorothiazide"
    ],
    correctAnswers: [1],
    explanation: "Le méthotrexate (antagoniste de la dihydrofolate réductase), l'hydroxyurée, la zidovudine (AZT) et la 6-mercaptopurine bloquent la synthèse d'ADN et provoquent une macrocytose médicamenteuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-21',
    courseId: 'crs-hemato-4',
    questionNumber: 21,
    type: 'QCM',
    content: "Le traitement d’une carence avérée en folates (vitamine B9) chez l’adulte consiste en :",
    options: [
      "A) Cyanocobalamine IM 1000 µg / mois",
      "B) Transfusion hebdomadaire",
      "C) Acide folique per os 5 mg/j pendant 4 mois, après avoir éliminé une carence en B12 associée",
      "D) Fer injectable",
      "E) Corticothérapie prolongée"
    ],
    correctAnswers: [2],
    explanation: "Acide folique oral à 5 mg/jour pendant 4 mois (le temps de renouveler les réserves hépatiques), toujours après vérification de la normalité de la vitamine B12.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-22',
    courseId: 'crs-hemato-4',
    questionNumber: 22,
    type: 'QCM',
    content: "Homme 60 ans, pâleur, paresthésies des membres inférieurs, ataxie proprioceptive, anémie macrocytaire (VGM 118 fL), B12 basse, anticorps anti-facteur intrinsèque positifs. Diagnostic le plus probable :",
    options: [
      "A) Carence en folates",
      "B) Maladie de Biermer (anémie pernicieuse)",
      "C) Myélome à IgM",
      "D) Syndrome myélodysplasique",
      "E) Hypothyroïdie sévère"
    ],
    correctAnswers: [1],
    explanation: "Tableau classique de la maladie de Biermer : gastrite atrophique auto-immune avec anticorps anti-facteur intrinsèque, anémie mégaloblastique et sclérose combinée de la moelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-23',
    courseId: 'crs-hemato-4',
    questionNumber: 23,
    type: 'QCM',
    content: "Quel facteur de croissance est le principal régulateur physiologique de l’érythropoïèse ?",
    options: [
      "A) G-CSF",
      "B) Thrombopoïétine",
      "C) Érythropoïétine (EPO) synthétisée par les cellules péritubulaires rénales",
      "D) Interleukine 6",
      "E) Facteur de croissance endothélial VEGF"
    ],
    correctAnswers: [2],
    explanation: "L'érythropoïétine rénale est stimulée par l'hypoxie tissulaire via le facteur HIF-1alpha et favorise la survie et prolifération des CFU-E.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-24',
    courseId: 'crs-hemato-4',
    questionNumber: 24,
    type: 'QCM',
    content: "Frottis sanguin : nombreux sphérocytes, test de Coombs direct positif, bilirubine libre élevée. Quel diagnostic ?",
    options: [
      "A) Sphérocytose héréditaire de Minkowski-Chauffard",
      "B) Anémie hémolytique auto-immune (AHAI) à anticorps chauds",
      "C) Drépanocytose homozygote",
      "D) Paludisme à Plasmodium falciparum",
      "E) Hémoglobinurie paroxystique nocturne"
    ],
    correctAnswers: [1],
    explanation: "Les microsphérocytes + Coombs direct positif signent l'AHAI (les macrophages spléniques phagocytent partiellement les hématies opsonisées par les IgG). Dans la maladie de Minkowski-Chauffard, le Coombs est négatif.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-25',
    courseId: 'crs-hemato-4',
    questionNumber: 25,
    type: 'QCM',
    content: "Selon la démarche pratique du cours, quel est le premier examen biologique à analyser devant toute suspicion d’anémie ?",
    options: [
      "A) Myélogramme systématique",
      "B) Bilan martial complet",
      "C) Hémogramme complet (NFS) avec numération des réticulocytes",
      "D) Électrophorèse de l’hémoglobine",
      "E) Dosage de l’EPO"
    ],
    correctAnswers: [2],
    explanation: "L'hémogramme pose le diagnostic d'anémie et donne le volume globulaire moyen (VGM: micro/normo/macrocytaire), et le taux de réticulocytes détermine le caractère régénératif ou arégénératif.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES FOR LESSON 4
  {
    id: 'q-hem-04-c01',
    courseId: 'crs-hemato-4',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Jeune femme de 24 ans, étudiante, consulte pour asthénie intense, vertiges, pâleur cutanéomuqueuse. Règles abondantes depuis 1 an. Hémoglobine = 8,2 g/dL, VGM = 71 fL, réticulocytes = 45 G/L, fer sérique = 4 µmol/L, ferritine = 6 µg/L, transferrine = 4,8 g/L (élevée). CRP normale. Quel diagnostic étiologique retenez-vous en priorité ?",
    options: [
      "A) Thalassémie mineure",
      "B) Anémie ferriprive par saignement chronique (ménorragies)",
      "C) Anémie inflammatoire",
      "D) Anémie sidéroblastique",
      "E) Anémie par carence en B12"
    ],
    correctAnswers: [1],
    explanation: "Anémie microcytaire arégénérative avec ferritine effondrée (< 15 µg/L) et contexte de spoliation gynécologique chronique = anémie ferriprive.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c02',
    courseId: 'crs-hemato-4',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel traitement de fond doit être instauré chez cette patiente ?",
    options: [
      "A) Transfusion de culots globulaires toutes les semaines",
      "B) Supplémentation martiale per os (sel ferreux 100-200 mg/j pendant 3 à 6 mois) + prise en charge gynécologique des ménorragies",
      "C) Acide folique 5 mg/j",
      "D) Corticothérapie prolongée",
      "E) Érythropoïétine recombinante"
    ],
    correctAnswers: [1],
    explanation: "La supplémentation orale en fer ferreux (3 à 6 mois pour reconstituer les réserves) associée au traitement étiologique de la cause du saignement.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c03',
    courseId: 'crs-hemato-4',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 3) : Un contrôle biologique après 2 mois de traitement montre une Hb à 11,5 g/dL. Quel paramètre reste encore perturbé et justifie la poursuite du traitement ?",
    options: [
      "A) VGM",
      "B) Ferritine sérique (reconstitution des réserves médullaires)",
      "C) Bilirubine libre",
      "D) Plaquettes",
      "E) Taux de prothrombine"
    ],
    correctAnswers: [1],
    explanation: "L'hémoglobine se normalise en 6 à 8 semaines, mais la ferritine nécessite 3 à 6 mois pour reconstituer les stocks de fer hépato-médullaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c04',
    courseId: 'crs-hemato-4',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 1) : Patient de 72 ans, ancien agriculteur, se plaint d’asthénie, dyspnée d’effort, paresthésies des pieds, et difficulté à la marche (troubles de l’équilibre). Hb 8,7 g/dL, VGM 118 fL, réticulocytes 30 G/L, leucocytes et plaquettes normaux. TSH normale. γ-GT normale, pas d’éthylisme. B12 effondrée < 80 pg/mL, folates normaux. Quelle est l’étiologie la plus probable dans ce contexte ?",
    options: [
      "A) Hépatopathie alcoolique",
      "B) Maladie de Biermer (gastrite atrophique auto-immune)",
      "C) Carence en folates sur malnutrition",
      "D) Myélodysplasie avec sidéroblastes en couronne",
      "E) Hypothyroïdie"
    ],
    correctAnswers: [1],
    explanation: "Macrocytose arégénérative, carence profonde en B12, absence d'éthylisme et atteinte neuro-proprioceptive = maladie de Biermer.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c05',
    courseId: 'crs-hemato-4',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 2) : Quel traitement spécifique initier sans attendre ?",
    options: [
      "A) Acide folique 15 mg/j",
      "B) Cyanocobalamine (vit B12) 1000 µg IM (protocole d’attaque puis mensuel à vie)",
      "C) Fer injectable",
      "D) Cures de prednisone",
      "E) Transfusion de plaquettes"
    ],
    correctAnswers: [1],
    explanation: "Vitamine B12 par voie intramusculaire à vie : le protocole d'attaque rétablit l'hématopoïèse en quelques jours (crise réticulocytaire à J7).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c06',
    courseId: 'crs-hemato-4',
    questionNumber: 31,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 3) : Quel risque encourt ce patient si un traitement isolé par acide folique est administré à la place de la B12 ?",
    options: [
      "A) Hémolyse aiguë post-transfusionnelle",
      "B) Aggravation et fixation définitive des lésions neurologiques (myélopathie dégénérative de la moelle)",
      "C) Thrombose veineuse profonde",
      "D) Anémie microcytaire paradoxale",
      "E) Rash cutané sévère"
    ],
    correctAnswers: [1],
    explanation: "Les folates corrigent l'anémie mais laissent s'aggraver la démyélinisation de la moelle épinière, risquant de rendre le handicap moteur permanent.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c07',
    courseId: 'crs-hemato-4',
    questionNumber: 32,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 1) : Homme de 38 ans, sans antécédent connu, admis aux urgences pour lombalgies intenses, fièvre à 39°C et urines foncées « couleur cola » 48h après la prise de cotrimoxazole pour une infection urinaire. Examen : subictère, pâleur. Hb = 6,7 g/dL, réticulocytes 320 G/L, bilirubine libre élevée, haptoglobine indétectable, LDH 950 UI/L. Test de Coombs direct négatif. Frottis sanguin : corps de Heinz et hématies morsurées. Quelle est la pathologie la plus probable ?",
    options: [
      "A) Anémie hémolytique auto-immune à IgM",
      "B) Drépanocytose homozygote décompensée",
      "C) Déficit en G6PD (favisme / accident oxydatif médicamenteux)",
      "D) Purpura thrombotique thrombocytopénique",
      "E) Hémoglobinurie paroxystique nocturne"
    ],
    correctAnswers: [2],
    explanation: "Accident hémolytique intravasculaire aigu déclenché par un médicament oxydant (sulfamide) avec Coombs négatif et corps de Heinz = déficit en G6PD.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c08',
    courseId: 'crs-hemato-4',
    questionNumber: 33,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 2) : Quel examen confirme formellement le diagnostic de déficit en G6PD après l'épisode aigu ?",
    options: [
      "A) Test de Coombs indirect",
      "B) Dosage enzymatique du G6PD érythrocytaire réalisé à distance de la crise (2-3 mois après)",
      "C) Électrophorèse de l’hémoglobine",
      "D) Myélogramme",
      "E) Recherche d’anticorps antinucléaires"
    ],
    correctAnswers: [1],
    explanation: "Le dosage de l'activité G6PD doit être différé de 2 à 3 mois car la réticulocytose réactionnelle jeune possède une activité enzymatique normale qui fausse le test.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c09',
    courseId: 'crs-hemato-4',
    questionNumber: 34,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 1) : Patient de 65 ans, diabétique, insuffisance rénale chronique (créatinine 3,2 mg/dL, clairance 22 ml/min). Hémoglobine = 9,2 g/dL, VGM 88 fL, réticulocytes 38 G/L, ferritine 210 µg/L, fer sérique normal. Absence d’hémorragie. Le mécanisme prédominant de l’anémie est :",
    options: [
      "A) Hémolyse microangiopathique",
      "B) Déficit de sécrétion en érythropoïétine (EPO) d’origine rénale",
      "C) Carence martiale absolue",
      "D) Myélome à chaînes légères",
      "E) Saignement occulte digestif"
    ],
    correctAnswers: [1],
    explanation: "L'insuffisance rénale chronique avancée détruit les sites de production de l'EPO rénale, générant une anémie normocytaire arégénérative.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c10',
    courseId: 'crs-hemato-4',
    questionNumber: 35,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 2) : Quel traitement de première intention est indiqué pour corriger cette anémie à long terme ?",
    options: [
      "A) Transfusion mensuelle systématique",
      "B) Agents stimulants l’érythropoïèse (EPO recombinante / époétine) + fer si carence fonctionnelle associée",
      "C) Corticostéroïdes",
      "D) Acide folique seul",
      "E) Hydroxyurée"
    ],
    correctAnswers: [1],
    explanation: "L'administration d'EPO recombinante (darbépoétine ou époétine sous-cutanée) avec maintien de réserves martiales suffisantes est le traitement de choix.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c11',
    courseId: 'crs-hemato-4',
    questionNumber: 36,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 1) : Enfant de 9 ans, d’origine kabyle, pâleur modérée chronique, fatigue, splénomégalie à 4 cm sous rebord costal. Hb = 8,5 g/dL, VGM = 64 fL, CCMH diminuée, réticulocytes 150 G/L. Ferritine normale, fer sérique normal. Électrophorèse de l’hémoglobine : HbA2 = 5,6% (N < 3,5%), HbF = 2,5%. De quel type d’anémie s’agit-il ?",
    options: [
      "A) β-thalassémie mineure ou intermédiaire",
      "B) Carence martiale",
      "C) β-thalassémie majeure dépendante des transfusions",
      "D) Drépanocytose hétérozygote AS",
      "E) Anémie inflammatoire"
    ],
    correctAnswers: [0],
    explanation: "Microcytose avec ferritine normale et élévation de l'HbA2 (> 3,5%) = Bêta-thalassémie (forme intermédiaire avec anémie et splénomégalie).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-04-c12',
    courseId: 'crs-hemato-4',
    questionNumber: 37,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 2) : Quel mécanisme explique l’aspect régénératif (réticulocytes à 150 G/L) dans la thalassémie ?",
    options: [
      "A) Hémolyse périphérique associée à une érythropoïèse inefficace médullaire",
      "B) Carence en fer paradoxale",
      "C) Hémorragie digestive",
      "D) Déficit immunitaire",
      "E) Toxicité médicamenteuse"
    ],
    correctAnswers: [0],
    explanation: "Dans la thalassémie, il existe une composante mixte d'érythropoïèse inefficace centro-médullaire et d'hémolyse périphérique des hématies déformées.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_4_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-04-mindmap',
    courseId: 'crs-hemato-4',
    title: 'Mind Map : Conduite à tenir devant une anémie',
    type: 'mindmap',
    content: `# Mind Map : CAT devant une Anémie - Pr Brahimi

## 1. Définition de l'Anémie (Seuils OMS)
- Homme adulte : Hb < 130 g/L (13 g/dL)
- Femme adulte : Hb < 120 g/L (12 g/dL)
- Femme enceinte (2ème trimestre) : Hb < 105 g/L (10,5 g/dL)
- Enfant 6 mois - 5 ans : Hb < 110 g/L (11 g/dL)

## 2. Démarche Diagnostique Étape par Étape
- **Étape 1 : VGM (Volume Globulaire Moyen)**
  - *Microcytaire* (< 80 fL)
  - *Normocytaire* (80 - 100 fL)
  - *Macrocytaire* (> 100 fL)
- **Étape 2 : Réticulocytes**
  - *Régénérative* (> 120 G/L) -> Cause périphérique : Hémorragie aiguë ou Hémolyse
  - *Arégénérative* (< 120 G/L) -> Cause centrale médullaire

## 3. Orientation Étiologique selon les Groupes
- **Microcytaire (< 80 fL)** :
  - Ferritine basse -> *Carence martiale* (saignements digestifs/gynéco, malabsorption)
  - Ferritine normale/haute + CRP élevée -> *Anémie inflammatoire*
  - Ferritine normale + HbA2 > 3,5% -> *Bêta-thalassémie mineure*
  - Fer élevé + ferritine élevée -> *Anémie sidéroblastique*
- **Macrocytaire (> 100 fL)** :
  - Arégénérative : Carence en B12 (Biermer), Folates (B9), Alcoolisme, Hypothyroïdie, Myélodysplasie
  - Régénérative : Hémolyse aiguë, hémorragie récente en cours de régénération
- **Normocytaire Arégénérative** :
  - Insuffisance rénale chronique (déficit en EPO), Aplasie médullaire, Leucémie aiguë, Myélome, Envahissement métastatique`,
    author: 'Pr Brahimi | Blida'
  },
  {
    id: 'res-hem-04-astuces',
    courseId: 'crs-hemato-4',
    title: 'Astuces & Pièges aux Concours : Anémies',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Règle d'or de la B12 et des Folates :**
   - Ne jamais administrer d'acide folique seul devant une anémie macrocytaire sans avoir dosé la vitamine B12 ! Les folates masquent l'anémie mais laissent s'installer la **sclérose combinée de la moelle** irréversible.
2. **Microcytose avec Ferritine normale :**
   - Toujours penser à la **Bêta-thalassémie hétérozygote** chez le sujet méditerranéen (électrophorèse de l'Hb : HbA2 > 3,3%).
3. **Anémie inflammatoire vs Ferriprive :**
   - *Ferriprive* : Ferritine < 15-30 µg/L, Transferrine augmentée.
   - *Inflammatoire* : Ferritine normale ou élevée, Transferrine normale ou basse, CRP augmentée.
4. **Hémolyse : La triade biologique :**
   - Haptoglobine effondrée + LDH augmentée + Bilirubine libre augmentée. Si Coombs direct (+) = cause immune ; si (-) = cause corpusculaire ou mécanique.`,
    author: 'Pr Brahimi | Blida'
  }
];

// ==========================================
// LESSON 5: ANÉMIES HÉMOLYTIQUES - Pr Ziani AA
// ==========================================
export const HEMATO_LESSON_5_QUESTIONS: Question[] = [
  {
    id: 'q-hem-05-01',
    courseId: 'crs-hemato-5',
    questionNumber: 1,
    type: 'QCM',
    content: "Un enfant de 8 mois, d'origine algérienne, présente une pâleur, une splénomégalie importante, un retard staturo-pondéral et une hépatomégalie. L'hémoglobine est à 5,8 g/dL, VGM 62 fl. L'électrophorèse de l'hémoglobine montre une HbF à 92%, HbA2 normale, pas d'HbA détectable. Quel mécanisme physiopathologique est principalement responsable de la déformation crânienne 'en poil de brosse' ?",
    options: [
      "A) Dépôts de fer au niveau des sutures métopiques",
      "B) Hyperplasie érythroblastique médullaire avec élargissement des espaces diploïques",
      "C) Hémolyse chronique excessive provoquant une ostéoporose",
      "D) Érythropoïèse extra-médullaire refoulant les os de la voûte",
      "E) Thrombose des veines diploïques secondaire à la drépanocytose associée"
    ],
    correctAnswers: [1],
    explanation: "L'hyperplasie érythroblastique intense due à l'érythropoïèse inefficace dans la β-thalassémie majeure dilate les espaces médullaires, amincit la corticale et donne l'aspect « en brosse » ou « poil de hérisson » à la radio du crâne.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-02',
    courseId: 'crs-hemato-5',
    questionNumber: 2,
    type: 'QCM',
    content: "Un patient drépanocytaire homozygote de 22 ans se présente avec une douleur thoracique aiguë, fièvre, hypoxie et infiltrat pulmonaire à la radiographie. Quel est le diagnostic le plus probable et quel facteur aggravant doit être immédiatement recherché ?",
    options: [
      "A) Pneumopathie bactérienne typique ; rechercher une hyponatrémie",
      "B) Syndrome thoracique aigu (STA) ; rechercher une infection ou une séquestration graisseuse médullaire",
      "C) Embolie pulmonaire septique ; rechercher un signe de TVP",
      "D) Œdème pulmonaire cardiogénique ; doser le BNP",
      "E) Crise vaso-occlusive intercostale isolée ; surveiller la CPK"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome thoracique aigu (STA) est une urgence vitale de la drépanocytose associant détresse respiratoire, infiltrat radiologique et fièvre, justifiant l'oxygénothérapie, l'antibiothérapie et l'échange transfusionnel.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-03',
    courseId: 'crs-hemato-5',
    questionNumber: 3,
    type: 'QCM',
    content: "Un adulte de 30 ans consulte pour un ictère à répétition, une splénomégalie modérée et des antécédents familiaux de cholécystectomie jeune pour lithiase pigmentaire. Frottis sanguin : microsphérocytes abondants sans anomalie des autres lignées. Quel test biologique est le plus spécifique pour confirmer le diagnostic ?",
    options: [
      "A) Électrophorèse de l'hémoglobine",
      "B) Test de falciformation (Emmel)",
      "C) Test de résistance globulaire osmotique (diminuée en milieu hypotonique) ou cytométrie à l'EMA",
      "D) Dosage de la G6PD érythrocytaire",
      "E) Test de Coombs direct"
    ],
    correctAnswers: [2],
    explanation: "Dans la microsphérocytose héréditaire (maladie de Minkowski-Chauffard), l'anomalie de la membrane érythrocytaire augmente la fragilité osmotique (hémolyse précoce en solution saline hypotonique).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-04',
    courseId: 'crs-hemato-5',
    questionNumber: 4,
    type: 'QCM',
    content: "Un nouveau-né prématuré présente un anasarque fœtoplacentaire sévère, une hépatomégalie massive et un décès in utero. L'étude moléculaire montre une délétion homozygote des 4 gènes α-globine (--/--). Quelle hémoglobine tétramérique anormale est majoritaire chez ce fœtus ?",
    options: [
      "A) Hb Bart’s (γ4)",
      "B) HbA (α2β2)",
      "C) HbF (α2γ2)",
      "D) HbH (β4)",
      "E) HbC"
    ],
    correctAnswers: [0],
    explanation: "L'absence complète de chaînes alpha (--/--) produit des tétramères gamma (Hb Bart's, γ4) qui ont une affinité létale pour l'oxygène et causent l'anasarque fœtal.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-05',
    courseId: 'crs-hemato-5',
    questionNumber: 5,
    type: 'QCM',
    content: "Un garçon de 10 ans, originaire de Constantine, est admis pour un ictère et des urines foncées 48 heures après la prise d'un sulfamide antibactérien. L'hémoglobine est à 7 g/dL, réticulocytes 12%, frottis : hématies 'morsurées' (bite cells) et corps de Heinz. Quel est le mécanisme fondamental de l'hémolyse ?",
    options: [
      "A) Hémolyse auto-immune par anti-médicament",
      "B) Défaut de détoxification du stress oxydant par insuffisance de NADPH et de glutathion réduit",
      "C) Défaut de la pompe Na+/K+ membranaire",
      "D) Instabilité de la chaîne β de l'hémoglobine",
      "E) Déficit en pyruvate kinase bloquant la glycolyse anaérobie"
    ],
    correctAnswers: [1],
    explanation: "Le déficit en G6PD prive l'hématie de NADPH, empêchant la régénération du glutathion réduit protecteur face aux agressions oxydantes médicamenteuses.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-06',
    courseId: 'crs-hemato-5',
    questionNumber: 6,
    type: 'QCM',
    content: "Une patiente de 45 ans, lupique, présente une anémie hémolytique avec test de Coombs direct intensément positif (IgG + C3d). La splénomégalie est légère. Quel traitement de première ligne est recommandé en l'absence de contre-indication ?",
    options: [
      "A) Rituximab en monothérapie d’emblée",
      "B) Corticothérapie générale (prednisone 1 à 1,5 mg/kg/j)",
      "C) Transfusions itératives de concentrés érythrocytaires",
      "D) Splénectomie première",
      "E) Immunoglobulines polyvalentes à haute dose seules"
    ],
    correctAnswers: [1],
    explanation: "La corticothérapie par voie orale (prednisone 1 à 1,5 mg/kg/j) est le traitement de première intention de référence des AHAI à anticorps chauds.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-07',
    courseId: 'crs-hemato-5',
    questionNumber: 7,
    type: 'QCM',
    content: "Un adolescent de 15 ans, porteur d'une β-thalassémie intermédiaire, a un taux d’hémoglobine à 8,2 g/dL, sans besoin transfusionnel régulier. Une complication viscérale particulière peut survenir progressivement. Laquelle ?",
    options: [
      "A) Surinfection à pneumocoque par asplénie fonctionnelle précoce",
      "B) Surcharge martiale secondaire aux transfusions fréquentes",
      "C) Hémochromatose par hyperabsorption digestive de fer liée à l'érythropoïèse inefficace malgré l’absence de transfusion",
      "D) Crise vaso-occlusive splanchnique",
      "E) Hémoglobinurie paroxystique nocturne"
    ],
    correctAnswers: [2],
    explanation: "Dans la bêta-thalassémie intermédiaire, l'érythropoïèse inefficace effondre l'hepcidine, ce qui stimule massivement l'absorption entérocytaire de fer et provoque une hémochromatose viscérale même sans transfusion.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-08',
    courseId: 'crs-hemato-5',
    questionNumber: 8,
    type: 'QCM',
    content: "Un patient porteur d'une hémoglobinopathie composite HbS / HbC (SC) peut développer une complication ophtalmologique spécifique plus fréquente que dans la forme SS :",
    options: [
      "A) Glaucome aigu par fermeture de l'angle",
      "B) Rétinopathie proliférante et hémorragies du vitré",
      "C) Cataracte sous-capsulaire précoce",
      "D) Kératoconjonctivite sèche",
      "E) Névrite optique rétrobulbaire"
    ],
    correctAnswers: [1],
    explanation: "La rétinopathie proliférante drépanocytaire (néovaisseaux en 'têtes de méduse' et hémorragies intravitréennes) est paradoxalement plus fréquente chez les hétérozygotes composites SC.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-09',
    courseId: 'crs-hemato-5',
    questionNumber: 9,
    type: 'QCM',
    content: "Un patient de 70 ans sous céphalosporine depuis 10 jours développe une anémie hémolytique aiguë. Le test de Coombs direct est positif avec anticorps anti-médicament. Quel mécanisme prédomine ?",
    options: [
      "A) Mécanisme d'haptène avec adsorption du médicament sur la membrane érythrocytaire",
      "B) Auto-anticorps chauds idiopathiques",
      "C) Agglutinines froides IgM anti‑I",
      "D) Hémolyse mécanique par microangiopathie",
      "E) Allo-immunisation post-transfusionnelle"
    ],
    correctAnswers: [0],
    explanation: "Les bêtalactamines se fixent sur la membrane érythrocytaire comme haptènes, et les anticorps anti-médicaments induisent la destruction des globules rouges opsonisés.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-10',
    courseId: 'crs-hemato-5',
    questionNumber: 10,
    type: 'QCM',
    content: "Dans le déficit en G6PD, quand faut-il doser l’activité enzymatique pour ne pas sous-estimer le déficit ?",
    options: [
      "A) En pleine crise hémolytique aiguë",
      "B) Immédiatement après la prise de fèves",
      "C) 2 à 3 mois après l’épisode hémolytique, car les jeunes réticulocytes ont une activité G6PD transitoirement élevée",
      "D) À n’importe quel moment, car l’enzyme est stable",
      "E) Juste après une transfusion de culots globulaires"
    ],
    correctAnswers: [2],
    explanation: "Lors d'une crise hémolytique, les hématies les plus âgées (déficitaires) sont détruites en premier ; les réticulocytes jeunes néo-produits contiennent un taux normal de G6PD pouvant fausser le dosage par un faux négatif.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-11',
    courseId: 'crs-hemato-5',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans la drépanocytose homozygote (SS), la mutation génétique causale est :",
    options: [
      "A) Substitution de l'acide glutamique par la valine au codon 6 de la chaîne bêta-globine (G6V)",
      "B) Substitution de l'acide glutamique par la lysine au codon 6 de la chaîne bêta",
      "C) Délétion complète du gène bêta",
      "D) Mutation du promoteur alpha",
      "E) Duplication du codon 12 de l'hème"
    ],
    correctAnswers: [0],
    explanation: "La drépanocytose est causée par la mutation ponctuelle GAG -> GTG au 6ème codon du gène de la chaîne bêta, remplaçant un acide glutamique hydrophile par une valine hydrophobe.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-12',
    courseId: 'crs-hemato-5',
    questionNumber: 12,
    type: 'QCM',
    content: "Parmi ces anomalies érythrocytaires, laquelle est la plus caractéristique de la β-thalassémie majeure sur le frottis sanguin ?",
    options: [
      "A) Drépanocytes falciformes abondants",
      "B) Microsphérocytes denses déshydratés",
      "C) Hématies en cible (target cells), dacryocytes (en poire) et érythroblastes circulants",
      "D) Schizocytes en casque",
      "E) Corps de Heinz exclusifs"
    ],
    correctAnswers: [2],
    explanation: "Anisopoïkilocytose majeure avec hématies cibles, dacryocytes (larmes) et érythroblastes circulants traduisant la dysérythropoïèse intense.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-13',
    courseId: 'crs-hemato-5',
    questionNumber: 13,
    type: 'QCM',
    content: "Un sujet asymptomatique a une microcytose isolée (VGM 74 fl), Hb normale, électrophorèse : HbA2 normale ou basse (1,8%). Quel est le diagnostic le plus probable ?",
    options: [
      "A) β-thalassémie mineure",
      "B) Anémie par carence martiale",
      "C) α-thalassémie mineure (trait alpha-thalassémique)",
      "D) Drépanocytose hétérozygote AS",
      "E) Microsphérocytose compensée"
    ],
    correctAnswers: [2],
    explanation: "L'alpha-thalassémie mineure (délétion de 2 gènes alpha) donne une microcytose avec Hb normale ou subnormale et une HbA2 normale ou diminuée (< 2,5%). Dans la bêta-thalassémie mineure, l'HbA2 est élevée (> 3,3%).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-14',
    courseId: 'crs-hemato-5',
    questionNumber: 14,
    type: 'QCM',
    content: "Un patient thalassémique transfusé au long cours développe une surcharge en fer. Quel chélateur du fer par voie orale est le plus couramment prescrit ?",
    options: [
      "A) Déféroxamine (Desféral®) par pompe sous-cutanée",
      "B) Déférasirox (Exjade®) en prise orale quotidienne unique",
      "C) Sulfate de zinc",
      "D) D-pénicillamine",
      "E) Bicarbonate de sodium"
    ],
    correctAnswers: [1],
    explanation: "Le déférasirox (Exjade®) est le chélateur oral de première ligne pris 1 fois par jour, évitant les contraintes des perfusions sous-cutanées de déféroxamine.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-15',
    courseId: 'crs-hemato-5',
    questionNumber: 15,
    type: 'QCM',
    content: "Un enfant drépanocytaire de 18 mois présente une tuméfaction douloureuse fébrile des mains et des pieds (dactylite). De quel syndrome s’agit-il ?",
    options: [
      "A) Syndrome thoracique aigu",
      "B) Syndrome main-pied (dactylite drépanocytaire)",
      "C) Ostéomyélite aiguë à Salmonella",
      "D) Arthrite septique",
      "E) Priapisme aigu"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome main-pied (dactylite) survient chez le nourrisson et le petit enfant drépanocytaire par ischémie microvasculaire aiguë des os spongieux des métacarpiens/métatarsiens.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-16',
    courseId: 'crs-hemato-5',
    questionNumber: 16,
    type: 'QCM',
    content: "Chez l'enfant drépanocytaire homozygote, l'asplénie fonctionnelle précoce impose dès les premiers mois de vie :",
    options: [
      "A) L'administration de vitamine K quotidienne",
      "B) Une antibioprophylaxie par pénicilline V orale quotidienne et les vaccinations anti-pneumocoque, méningocoque et Haemophilus",
      "C) Une corticothérapie préventive",
      "D) La splénectomie chirurgicale prophylactique",
      "E) L'éviction totale de tout vaccin"
    ],
    correctAnswers: [1],
    explanation: "La pénicilline V orale prophylactique quotidienne jusqu'à l'âge de 5 ans au moins et les vaccins contre les germes encapsulés préviennent les bactériémies fulgurantes à pneumocoque.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-17',
    courseId: 'crs-hemato-5',
    questionNumber: 17,
    type: 'QCM',
    content: "Un déficit en pyruvate kinase (PK) érythrocytaire entraîne une anémie hémolytique chronique par :",
    options: [
      "A) Défaut de synthèse d'ATP et accumulation de 2,3-DPG dans l'érythrocyte",
      "B) Défaut de synthèse de NADPH",
      "C) Précipitation de chaînes bêta instables",
      "D) Diminution de la spectrine",
      "E) Mutation du récepteur de l'érythropoïétine"
    ],
    correctAnswers: [0],
    explanation: "La pyruvate kinase est l'étape terminale de la glycolyse anaérobie : son déficit effondre la production d'ATP (faillite des pompes membranaires) et accumule le 2,3-DPG en amont.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-05-18',
    courseId: 'crs-hemato-5',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans la maladie des agglutinines froides (IgM anti-I), le test de Coombs direct met en évidence sur les globules rouges :",
    options: [
      "A) Des IgG chaudes pan-réactives",
      "B) Du complément C3d exclusivement",
      "C) Des IgA sécrétoires",
      "D) Des anticorps anti-Rhésus spécifiques",
      "E) Une absence complète de réactivité"
    ],
    correctAnswers: [1],
    explanation: "Les IgM agglutinent au froid et fixent le complément à la périphérie cutanée ; au réchauffement à 37°C, les IgM se détachent et laissent le fragment C3d fixé sur l'hématie (Coombs C3d positif isolé).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-19',
    courseId: 'crs-hemato-5',
    questionNumber: 19,
    type: 'QCM',
    content: "Chez un jeune adulte bêta-thalassémique majeur mal chélaté, la découverte de masses médiastinales postérieures ou paravertébrales asymptomatiques correspond à :",
    options: [
      "A) Des métastases de sarcome osseux",
      "B) Des foyers d'érythropoïèse extra-médullaire hématopoïétique compensatrice",
      "C) Des abcès froids tuberculeux",
      "D) Un lymphome non hodgkinien",
      "E) Des kystes hydatiques médiastinaux"
    ],
    correctAnswers: [1],
    explanation: "En cas d'anémie chronique et d'érythropoïèse inefficace majeure, le tissu hématopoïétique prolifère dans les espaces paravertébraux et thoraciques, simulant des masses tumorales.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-20',
    courseId: 'crs-hemato-5',
    questionNumber: 20,
    type: 'QCM',
    content: "En Algérie, où se situent les principaux foyers historiques de drépanocytose décrits dans le cours ?",
    options: [
      "A) Oran et Mostaganem",
      "B) L'Est (Annaba, El Tarf, Skikda) et le Sud-Est (Touggourt, Ouargla, Biskra)",
      "C) Tizi Ouzou et Béjaïa",
      "D) Tlemcen et Saïda",
      "E) Alger centre exclusivement"
    ],
    correctAnswers: [1],
    explanation: "Foyers historiques endémiques algériens : région Nord-Est (Annaba, Guelma, El Tarf, Skikda) et oasis du Sud (Touggourt, Ouargla), avec prévalence du trait drépanocytaire atteignant 2 à 3%.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-21',
    courseId: 'crs-hemato-5',
    questionNumber: 21,
    type: 'QCM',
    content: "L'hydroxyurée (Hydréa®) est le traitement de fond de référence de la drépanocytose sévère. Son action principale est :",
    options: [
      "A) La réduction de la viscosité sanguine par hémodilution",
      "B) L'augmentation de la synthèse de l'hémoglobine fœtale (HbF), qui inhibe la polymérisation de l'HbS",
      "C) Un effet chélateur du fer",
      "D) La correction du déficit enzymatique en G6PD",
      "E) La destruction sélective de la rate"
    ],
    correctAnswers: [1],
    explanation: "L'hydroxyurée réactive la production d'HbF (chaînes gamma) qui s'interpose entre les tétramères d'HbS et bloque leur polymérisation en fibres insolubles.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-22',
    courseId: 'crs-hemato-5',
    questionNumber: 22,
    type: 'QCM',
    content: "Une transfusion de sang ABO-incompatible (groupe A transfusé à un receveur de groupe O) déclenche une hémolyse :",
    options: [
      "A) Intratissulaire splénique pure sans hémoglobinurie",
      "B) Intravasculaire aiguë massive par activation complète du complément et choc",
      "C) Tardive survenant à 3 semaines",
      "D) Non immunologique",
      "E) Asymptomatique"
    ],
    correctAnswers: [1],
    explanation: "Les anticorps naturels réguliers IgM anti-A et anti-B activent la cascade du complément jusqu'au complexe d'attaque membranaire C5b-9, entraînant une lyse intravasculaire immédiate, CIVD et choc.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-23',
    courseId: 'crs-hemato-5',
    questionNumber: 23,
    type: 'QCM',
    content: "Quel paramètre biologique reflète le mieux l'hyper-régénération médullaire au cours d'une hémolyse chronique ?",
    options: [
      "A) Ferritine sérique",
      "B) Chiffre absolu des réticulocytes (> 120-150 G/L)",
      "C) Taux de prothrombine",
      "D) Fibrinogène",
      "E) Vitesse de sédimentation"
    ],
    correctAnswers: [1],
    explanation: "Le nombre absolu de réticulocytes (élevé au-delà de 150 G/L, pouvant atteindre 300 à 500 G/L) témoigne de la régénération compensatrice de la moelle osseuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-24',
    courseId: 'crs-hemato-5',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans quelle anémie hémolytique la splénectomie chirurgicale apporte-t-elle la guérison clinique quasi-complète de l'anémie ?",
    options: [
      "A) Drépanocytose homozygote SS non compliquée",
      "B) Microsphérocytose héréditaire (Minkowski-Chauffard)",
      "C) Bêta-thalassémie majeure sans hypersplénisme",
      "D) Hémoglobinurie paroxystique nocturne",
      "E) Maladie des agglutinines froides"
    ],
    correctAnswers: [1],
    explanation: "Dans la sphérocytose héréditaire, la rate est le site exclusif de séquestration et de destruction des microsphérocytes ; son ablation supprime l'hémolyse et normalise le taux d'Hb.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-25',
    courseId: 'crs-hemato-5',
    questionNumber: 25,
    type: 'QCM',
    content: "Deux parents porteurs sains du trait bêta-thalassémique (hétérozygotes) consultent pour conseil génétique. Quel est le risque à chaque grossesse d'avoir un enfant atteint de bêta-thalassémie majeure homozygote ?",
    options: [
      "A) 100%",
      "B) 25% (1 risque sur 4)",
      "C) 50%",
      "D) 75%",
      "E) 0% si c'est une fille"
    ],
    correctAnswers: [1],
    explanation: "Transmission autosomique récessive : 25% enfant sain non porteur, 50% enfant hétérozygote sain, 25% enfant homozygote atteint de thalassémie majeure.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES FOR LESSON 5
  {
    id: 'q-hem-05-c01',
    courseId: 'crs-hemato-5',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Nourrisson de 9 mois, originaire de Blida, présente une pâleur progressive, une splénomégalie à 5 cm sous le rebord costal. Hb = 5,1 g/dL, VGM = 64 fl, CCMH = 26%. Frottis : anisopoïkilocytose sévère, dacryocytes, hématies cibles. Électrophorèse de l’Hb : HbA indétectable, HbF > 90%, HbA2 normale. Les deux parents ont une microcytose avec HbA2 > 3,5%. Quel est le diagnostic le plus probable ?",
    options: [
      "A. Drépanocytose SS",
      "B. Béta-thalassémie majeure homozygote β0/β0 (maladie de Cooley)",
      "C. Alpha-thalassémie majeure (Hb Bart’s)",
      "D. Microsphérocytose héréditaire",
      "E. Déficit en pyruvate kinase"
    ],
    correctAnswers: [1],
    explanation: "Tableau classique de bêta-thalassémie majeure (maladie de Cooley) : anémie microcytaire précoce, disparition de l'HbA remplacée par l'HbF, parents porteurs du trait.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c02',
    courseId: 'crs-hemato-5',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen radiologique simple confirme l'hyperplasie médullaire de la voûte crânienne ?",
    options: [
      "A. IRM cérébrale avec angiographie",
      "B. Radiographie du crâne de profil montrant l'aspect classique en « poil de brosse »",
      "C. Tomodensitométrie des sinus",
      "D. Échographie transfontanellaire",
      "E. Scintigraphie osseuse"
    ],
    correctAnswers: [1],
    explanation: "L'élargissement de la diploé avec trabéculations perpendiculaires aux tables osseuses donne l'aspect caractéristique en poil de brosse au crâne.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c03',
    courseId: 'crs-hemato-5',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 3) : Quelle complication viscérale majeure doit impérativement être prévenue par une chélation du fer dès la première année de transfusions régulières ?",
    options: [
      "A. Ostéomyélite à Salmonella",
      "B. Surcharge en fer myocardique (insuffisance cardiaque/troubles du rythme) et endocrinienne (diabète, hypothyroïdie, retard pubertaire)",
      "C. Drépanocytose secondaire",
      "D. Thrombopénie de consommation",
      "E. Anasarque foetal"
    ],
    correctAnswers: [1],
    explanation: "L'hémochromatose post-transfusionnelle détruit le cœur (première cause de décès sans chélation) et les glandes endocrines.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c04',
    courseId: 'crs-hemato-5',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 1) : Homme de 24 ans, originaire d’Annaba, consulte aux urgences pour douleurs osseuses diffuses intenses, fébricule (38,2°C). Antécédents de crises douloureuses similaires. Examen : rate non palpable (asplénie fonctionnelle), subictère conjonctival. Hb = 7,2 g/dL, réticulocytes = 180 G/L. Frottis : hématies falciformes en faucille. Quel test de dépistage simple confirme la falciformation in vitro ?",
    options: [
      "A. Test de résistance globulaire osmotique",
      "B. Test d’Emmel (test de falciformation sous hypoxie au métabisulfite de sodium)",
      "C. Dosage de la G6PD",
      "D. Temps de saignement",
      "E. Myélogramme"
    ],
    correctAnswers: [1],
    explanation: "Le test d'Emmel induit la falciformation des hématies in vitro par désoxygénation au métabisulfite.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c05',
    courseId: 'crs-hemato-5',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 2) : L’électrophorèse de l’hémoglobine montre HbS = 85%, HbA2 = 3%, HbF = 12%, HbA = 0%. Quel est le génotype ?",
    options: [
      "A. Hétérozygote composite S/C",
      "B. Drépanocytose homozygote SS",
      "C. Trait drépanocytaire hétérozygote AS",
      "D. S-bêta thalassémie",
      "E. Hémoglobinose C pure"
    ],
    correctAnswers: [1],
    explanation: "Absence totale d'HbA avec prédominance d'HbS (> 80%) et persistance d'HbF = Drépanocytose homozygote SS.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c06',
    courseId: 'crs-hemato-5',
    questionNumber: 31,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 1) : Un garçon de 8 ans consulte pour des urines très foncées couleur porto et un ictère survenus 2 jours après l'ingestion de fèves fraîches. Hb = 8,9 g/dL, réticulocytes 15%, frottis : hématies morsurées et corps de Heinz. Sa mère est asymptomatique. Quel est le diagnostic ?",
    options: [
      "A. Anémie hémolytique auto-immune à IgM",
      "B. Déficit en G6PD (favisme)",
      "C. Déficit en pyruvate kinase",
      "D. Hémoglobinose C",
      "E. Microsphérocytose héréditaire"
    ],
    correctAnswers: [1],
    explanation: "Hémolyse aiguë déclenchée par l'ingestion de fèves (favisme, contenant vicine/convicine) chez un garçon = déficit en G6PD.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c07',
    courseId: 'crs-hemato-5',
    questionNumber: 32,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 2) : Quand programmer le dosage de l'activité G6PD pour confirmer l'enzymopathie ?",
    options: [
      "A. En pleine crise d'hémolyse",
      "B. 3 mois après la fin de l'épisode aigu",
      "C. Immédiatement après une transfusion",
      "D. Sous supplémentation en folates",
      "E. Après test à la cortisone"
    ],
    correctAnswers: [1],
    explanation: "Le dosage doit être réalisé à distance de la crise pour éviter les faux négatifs dus à la présence d'hématies jeunes hyper-enzymatiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c08',
    courseId: 'crs-hemato-5',
    questionNumber: 33,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 1) : Femme 35 ans, suivie pour lupus érythémateux systémique, consulte pour asthénie brutale, subictère, tachycardie. Hb = 6,5 g/dL, réticulocytes 22%, LDH très élevée, haptoglobine indétectable. Le test de Coombs direct est positif (IgG + C3d). Quel est le traitement initial ?",
    options: [
      "A. Transfusion simple sans corticoïdes",
      "B. Corticothérapie par prednisone (1 à 1,5 mg/kg/j)",
      "C. Splénectomie d’urgence",
      "D. Rituximab en première ligne",
      "E. Échange plasmatique"
    ],
    correctAnswers: [1],
    explanation: "AHAI à anticorps chauds : la corticothérapie par voie orale est le traitement de première ligne dans 80% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c09',
    courseId: 'crs-hemato-5',
    questionNumber: 34,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 2) : Quel type d'anticorps est le plus souvent responsable des AHAI à anticorps chauds ?",
    options: [
      "A. IgM agglutinantes",
      "B. IgA muqueuses",
      "C. Auto-anticorps IgG dirigés contre les antigènes du système Rhésus",
      "D. Allo-anticorps anti-Kell",
      "E. Haptènes médicamenteux"
    ],
    correctAnswers: [2],
    explanation: "Les auto-anticorps chauds sont des IgG monoclonales ou polyclonales à spécificité anti-Rhésus réagissant à 37°C.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c10',
    courseId: 'crs-hemato-5',
    questionNumber: 35,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 1) : Nourrisson de 3 mois, ictère néonatal prolongé, splénomégalie modérée. Frottis sanguin : microsphérocytes nombreux. Résistance globulaire osmotique diminuée. Le père et le grand-père paternel ont été opérés d'une lithiase biliaire jeune. Quel est le mode de transmission génétique habituel de cette maladie ?",
    options: [
      "A. Autosomique récessive liée au chromosome 11",
      "B. Autosomique dominante (mutation du gène de l'ankyrine ou de la spectrine)",
      "C. Récessive liée à l'X",
      "D. Mitochondriale",
      "E. Multifactorielle"
    ],
    correctAnswers: [1],
    explanation: "La maladie de Minkowski-Chauffard (sphérocytose héréditaire) se transmet sur le mode autosomique dominant dans plus de 75% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-05-c11',
    courseId: 'crs-hemato-5',
    questionNumber: 36,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 2) : Quel geste chirurgical permet de corriger définitivement l'anémie hémolytique après l'âge de 5-6 ans ?",
    options: [
      "A. Transfusions mensuelles",
      "B. Corticothérapie à vie",
      "C. Splénectomie (après vaccinations préalables anti-pneumocoque, méningocoque et Hib)",
      "D. Hydroxyurée",
      "E. Chélateurs du fer"
    ],
    correctAnswers: [2],
    explanation: "La splénectomie supprime le filtre splénique où sont détruits les sphérocytes rigides, supprimant l'hémolyse clinique.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_5_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-05-mindmap',
    courseId: 'crs-hemato-5',
    title: 'Mind Map : Anémies Hémolytiques Congénitales & Acquises',
    type: 'mindmap',
    content: `# Mind Map : Anémies Hémolytiques - Pr Ziani AA

## 1. Classification Générale
- **Congénitales (Corpusculaires, héréditaires)** :
  - *Hémoglobinopathies* : Drépanocytose (HbS, mutation Glu6Val), Bêta-thalassémie (HbF, HbA2), Alpha-thalassémie (Hb Bart's, HbH).
  - *Enzymopathies* : Déficit en G6PD (favisme, stress oxydatif, lié à l'X), Déficit en Pyruvate Kinase (PK).
  - *Membranopathies* : Microsphérocytose héréditaire de Minkowski-Chauffard (fragilité osmotique, autosomique dominante).
- **Acquises (Extra-corpusculaires)** :
  - *Immunologiques (Coombs +)* : AHAI à anticorps chauds (IgG, lupus, LLC), Agglutinines froides (IgM, C3d), Immuno-allergiques médicamenteuses, Incompatibilité transfusionnelle ABO.
  - *Non immunologiques (Coombs -)* : Mécaniques (schizocytes: MAT, prothèses), Infectieuses (Paludisme), Toxiques, HPN (mutation PIG-A, déficit CD55/CD59).

## 2. Drépanocytose (SS)
- Polymérisation de la désoxy-HbS sous hypoxie -> Drépanocytes rigides en faucille
- Triade : Anémie hémolytique + Crises Vaso-Occlusives (CVO) + Susceptibilité aux infections (asplénie fonctionnelle)
- Complications graves : Syndrome Thoracique Aigu (STA), AVC de l'enfant, séquestration splénique
- Traitement de fond : Hydroxyurée (stimule l'HbF) + Vaccins + Pénicilline V

## 3. Bêta-Thalassémie Majeure (Maladie de Cooley)
- Déficit de synthèse des chaînes bêta -> Excès de chaînes alpha insolubles précipitant dans les érythroblastes
- Érythropoïèse inefficace + Hémolyse -> Anémie microcytaire sévère dès 6 mois de vie
- Déformations osseuses (crâne en brosse) + Hépatosplénomégalie
- Traitement : Transfusions régulières + Chélation précoce du fer (Déférasirox / Exjade)`,
    author: 'Pr Ziani AA | Blida'
  },
  {
    id: 'res-hem-05-astuces',
    courseId: 'crs-hemato-5',
    title: 'Astuces & Pièges aux Concours : Anémies Hémolytiques',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Déficit en G6PD : Quand doser ?**
   - Piège classique : Ne jamais doser la G6PD en pleine crise hémolytique aiguë (les jeunes réticulocytes ont une activité normale -> faux négatif). Doser **3 mois après**.
2. **Bêta-thalassémie mineure vs Carence martiale :**
   - Les deux sont microcytaires. Mais dans la bêta-thalassémie mineure : **Ferritine normale**, globules rouges souvent > 5,5 millions/mm³ (polyglobulie microcytaire paradoxale) et **HbA2 > 3,3-3,5%**.
3. **Coombs direct :**
   - AHAI chaudes = IgG (+) +/- C3d (+).
   - Agglutinines froides = C3d (+) isolé (les IgM se détachent à 37°C).
   - Minkowski-Chauffard = Coombs DIRECT NÉGATIF.
4. **Foyers algériens de drépanocytose :**
   - Annaba, Skikda, El Tarf, Touggourt, Ouargla.
5. **Syndrome main-pied :**
   - Première manifestation révélatrice de la drépanocytose chez le nourrisson (< 2 ans).`,
    author: 'Pr Ziani AA | Blida'
  }
];

// ==========================================
// LESSON 6: LEUCÉMIES AIGUËS (LA)
// ==========================================
export const HEMATO_LESSON_6_QUESTIONS: Question[] = [
  {
    id: 'q-hem-06-01',
    courseId: 'crs-hemato-6',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans la leucémogenèse des leucémies aiguës, quelle est la conséquence directe de l’accumulation de mutations somatiques sur un précurseur hématopoïétique précoce ?",
    options: [
      "A. Activation exclusive de la voie de l’apoptose",
      "B. Blocage de différenciation (maturation) et prolifération clonale dérégulée",
      "C. Hyperplasie réactionnelle transitoire des précurseurs lymphoïdes",
      "D. Production excessive de mégacaryocytes fonctionnels",
      "E. Normalisation de l’hématopoïèse par rétrocontrôle négatif"
    ],
    correctAnswers: [1],
    explanation: "La leucémie aiguë se caractérise par la prolifération clonale maligne de cellules immatures (blastes) bloquées à un stade précoce de différenciation, envahissant la moelle osseuse et étouffant l'hématopoïèse normale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-02',
    courseId: 'crs-hemato-6',
    questionNumber: 2,
    type: 'QCM',
    content: "Parmi les facteurs favorisants suivants, lequel est une anomalie constitutionnelle chromosomique fréquemment associée aux leucémies aiguës chez l’enfant ?",
    options: [
      "A. Syndrome de Kartagener",
      "B. Trisomie 21 (syndrome de Down)",
      "C. Mucoviscidose",
      "D. Drépanocytose homozygote",
      "E. Maladie de Willebrand"
    ],
    correctAnswers: [1],
    explanation: "La trisomie 21 multiplie par 10 à 20 le risque de développer une leucémie aiguë (LAL et LAM7 mégacaryoblastique chez l'enfant).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-03',
    courseId: 'crs-hemato-6',
    questionNumber: 3,
    type: 'QCM',
    content: "Quel élément morphologique intracytoplasmique en bâtonnet rouge-azurophile est pathognomonique de la lignée myéloblastique dans les leucémies aiguës ?",
    options: [
      "A. Nucléole unique et volumineux",
      "B. Cytoplasme basophile abondant sans granulations",
      "C. Bâtonnet d’Auer (ou corps d’Auer)",
      "D. Empreintes nucléaires en « mûre »",
      "E. Vacuoles cytoplasmaires multiples"
    ],
    correctAnswers: [2],
    explanation: "Les bâtonnets d'Auer (agrégats cristallisés de myéloperoxydase) sont pathognomoniques des myéloblastes et affirment le diagnostic de Leucémie Aiguë Myéloïde (LAM).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-04',
    courseId: 'crs-hemato-6',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans les leucémies aiguës lymphoblastiques (LAL), quel signe tumoral est nettement plus fréquent par rapport aux LAM ?",
    options: [
      "A. Hypertrophie gingivale massive",
      "B. Polyadénopathies périphériques et médiastinales",
      "C. Leucémides cutanées étendues",
      "D. Splénomégalie isolée sans adénopathie",
      "E. Chlorome orbitaire"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome tumoral avec polyadénopathies bilatérales et masse médiastinale (LAL-T) est présent dans 70-80% des LAL, alors qu'il est plus rare dans les LAM (où l'hypertrophie gingivale et les leucémides cutanées prédominent dans les formes monocytaires LAM4/LAM5).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-05',
    courseId: 'crs-hemato-6',
    questionNumber: 5,
    type: 'QCM',
    content: "Une coagulation intravasculaire disséminée (CIVD) sévère inaugurale est quasi constante au diagnostic dans quel sous-type de LAM ?",
    options: [
      "A. LAM1 (myéloblastique sans maturation)",
      "B. LAM2 (myéloblastique avec maturation)",
      "C. LAM3 (leucémie aiguë promyélocytaire à transcrits PML-RARA)",
      "D. LAM5 (monoblastique)",
      "E. LAM6 (érythroleucémie)"
    ],
    correctAnswers: [2],
    explanation: "La LAM3 promyélocytaire avec translocation t(15;17) libère massivement le contenu procoagulant de ses granulations, déclenchant une CIVD et une fibrinolyse majeure.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-06',
    courseId: 'crs-hemato-6',
    questionNumber: 6,
    type: 'QCM',
    content: "Concernant le syndrome de leucostase dans les leucémies aiguës hyperleucocytaires, quelle affirmation est correcte ?",
    options: [
      "A. Il survient uniquement si le chiffre des leucocytes dépasse 200 000/mm³",
      "B. Il est corrélé uniquement à la leucopénie sévère",
      "C. Il dépend de la taille des blastes myéloïdes et de leur adhérence à l’endothélium, provoquant hypoxie pulmonaire et signes neurologiques",
      "D. Il se manifeste classiquement par une hypertension intracrânienne isolée",
      "E. La prophylaxie repose sur la transfusion immédiate de culots globulaires"
    ],
    correctAnswers: [2],
    explanation: "La leucostase résulte de l'agrégation de volumineux blastes myéloïdes peu déformables obstruant la microcirculation cérébrale (coma, AVC) et pulmonaire (détresse respiratoire).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-07',
    courseId: 'crs-hemato-6',
    questionNumber: 7,
    type: 'QCM',
    content: "Pour porter le diagnostic de leucémie aiguë, le pourcentage minimum de blastes médullaires requis selon la classification OMS actuelle est :",
    options: [
      "A. 5%",
      "B. 10%",
      "C. 15%",
      "D. 20%",
      "E. 30%"
    ],
    correctAnswers: [3],
    explanation: "Le seuil diagnostique OMS d'une leucémie aiguë est de 20% ou plus de blastes sur le myélogramme (l'ancienne classification FAB utilisait le seuil de 30%).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-08',
    courseId: 'crs-hemato-6',
    questionNumber: 8,
    type: 'QCM',
    content: "Quelle technique biologique est la référence absolue pour confirmer la lignée (myéloïde vs lymphoïde B ou T) des blastes ?",
    options: [
      "A. Coloration de May-Grünwald-Giemsa",
      "B. Cytométrie en flux (immunophénotypage) avec panel d'anticorps monoclonaux anti-CD",
      "C. Caryotype standard seul",
      "D. Recherche de la phosphatase alcaline leucocytaire",
      "E. Dosage des LDH sériques"
    ],
    correctAnswers: [1],
    explanation: "La cytométrie en flux identifie les antigènes de différenciation : CD13/CD33/MPO (myéloïde), CD19/CD22/CD10 (LAL-B), CD3/CD7 (LAL-T).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-09',
    courseId: 'crs-hemato-6',
    questionNumber: 9,
    type: 'QCM',
    content: "Parmi ces anomalies cytogénétiques, laquelle est associée à un pronostic particulièrement FAVORABLE dans les LAM ?",
    options: [
      "A. Chromosome Philadelphie t(9;22)",
      "B. Délétion 5q ou monosomie 7",
      "C. Caryotype complexe (≥ 3 anomalies)",
      "D. Translocation t(8;21)(q22;q22) [RUNX1-RUNX1T1] ou inv(16)",
      "E. Mutation TP53"
    ],
    correctAnswers: [3],
    explanation: "Les anomalies des facteurs de transcription 'core binding factor' (CBF) : t(8;21) et inv(16), ainsi que la t(15;17) de la LAM3 sont associées à un pronostic favorable avec fort taux de guérison.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-10',
    courseId: 'crs-hemato-6',
    questionNumber: 10,
    type: 'QCM',
    content: "Pour la détection de la maladie résiduelle (MRD) chez un patient en rémission complète, la technique la plus sensible est :",
    options: [
      "A. Myélogramme standard au microscope optique",
      "B. Immunophénotypage à 4 couleurs",
      "C. Biologie moléculaire par PCR quantitative (sensibilité 10⁻⁴ à 10⁻⁶)",
      "D. Frottis sanguin soigneux",
      "E. TEP-scan corporel"
    ],
    correctAnswers: [2],
    explanation: "La PCR quantitative (RT-qPCR) ou NGS détecte un clone résiduel jusqu'à une cellule leucémique parmi un million de cellules normales (10⁻⁶).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-11',
    courseId: 'crs-hemato-6',
    questionNumber: 11,
    type: 'QCM',
    content: "Une localisation méningée asymptomatique des leucémies aiguës est systématiquement recherchée par ponction lombaire dans :",
    options: [
      "A. Toutes les LAM quel que soit le sous-type",
      "B. LAM3 et LAM2 uniquement",
      "C. Les LAL et certains types de LAM (LAM4, LAM5, hyperleucocytaires)",
      "D. Uniquement si signes neurologiques évidents",
      "E. Les patients âgés de plus de 65 ans exclusivement"
    ],
    correctAnswers: [2],
    explanation: "La ponction lombaire systématique avec chimio-prophylaxie intrathécale est systématique dans toutes les LAL et dans les LAM à fort tropisme méningé (monocytaires LAM4/LAM5 ou GB > 100 000/mm³).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-12',
    courseId: 'crs-hemato-6',
    questionNumber: 12,
    type: 'QCM',
    content: "La prévention du syndrome de lyse tumorale avant l'initiation de la chimiothérapie d'induction repose sur :",
    options: [
      "A. Transfusion de concentrés plaquettaires",
      "B. Hyperhydratation alcaline + hypouricémiant (Allopurinol ou Rasburicase / Fasturtec®)",
      "C. Corticothérapie à haute dose",
      "D. Antibioprophylaxie par fluoroquinolones",
      "E. Restriction hydrique stricte"
    ],
    correctAnswers: [1],
    explanation: "L'hyperhydratation abondante associée aux hypouricémiants (Rasburicase qui transforme l'acide urique en allantoïne soluble) prévient l'insuffisance rénale aiguë par précipitation d'urates.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-13',
    courseId: 'crs-hemato-6',
    questionNumber: 13,
    type: 'QCM',
    content: "Quel facteur cytogénétique confère un très MAUVAIS pronostic dans la LAL de l’adulte ?",
    options: [
      "A. Hyperdiploïdie >50 chromosomes",
      "B. Translocation t(9;22)(q34;q11) produisant le transcrit BCR-ABL (LAL Ph+)",
      "C. t(12;21) (ETV6-RUNX1)",
      "D. Diploïdie normale",
      "E. Perte du chromosome Y"
    ],
    correctAnswers: [1],
    explanation: "La LAL à chromosome Philadelphie (LAL Ph+ t(9;22)) représente 25 à 30% des LAL de l'adulte et est de très mauvais pronostic, nécessitant l'adjonction d'un ITK (Imatinib, Dasatinib) et l'allogreffe.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-14',
    courseId: 'crs-hemato-6',
    questionNumber: 14,
    type: 'QCM',
    content: "L’allogreffe de cellules souches hématopoïétiques (CSH) est indiquée en première rémission complète (RC1) pour :",
    options: [
      "A. LAM3 avec t(15;17) après consolidation",
      "B. LAL de l’enfant en bon pronostic",
      "C. LAM de pronostic favorable [t(8;21)]",
      "D. LAM de pronostic intermédiaire ou défavorable, et LAL à haut risque (ex: Ph+)",
      "E. Tous les patients sans exception"
    ],
    correctAnswers: [3],
    explanation: "L'allogreffe en RC1 est le traitement de consolidation intensif de référence pour les formes à risque intermédiaire et élevé afin de prévenir la rechute.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-15',
    courseId: 'crs-hemato-6',
    questionNumber: 15,
    type: 'QCM',
    content: "Une thrombopénie sévère (< 20 000/mm³) dans les leucémies aiguës peut se compliquer d’un signe ophtalmologique d'alarme redoutable :",
    options: [
      "A. Cataracte corticonucléaire",
      "B. Hémorragies rétiniennes au fond d'œil annonciatrices d'un saignement cérébro-méningé",
      "C. Kératite herpétique",
      "D. Glaucome aigu par blocage",
      "E. Exophtalmie unilatérale"
    ],
    correctAnswers: [1],
    explanation: "La constatation d'hémorragies rétiniennes au fond d'œil traduit une fragilité capillaire critique et annonce l'imminence d'une hémorragie intracrânienne fatale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-16',
    courseId: 'crs-hemato-6',
    questionNumber: 16,
    type: 'QCM',
    content: "La positivité de la myéloperoxydase (MPO) et des estérases non spécifiques à l'alpha-naphtyl acétate oriente vers :",
    options: [
      "A. LAL de type Burkitt",
      "B. LAM4 ou LAM5 (composante monocytaire / myélomonocytaire)",
      "C. LAL B précurseur",
      "D. LAM3 promyélocytaire",
      "E. Érythroleucémie (LAM6)"
    ],
    correctAnswers: [1],
    explanation: "Les estérases non spécifiques (inactivées par le fluorure de sodium) sont le marqueur cytochimique de la différenciation monocytaire (LAM4, LAM5).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-17',
    courseId: 'crs-hemato-6',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans le syndrome de lyse tumorale aigu, les anomalies métaboliques caractéristiques associent :",
    options: [
      "A. Hypercalcémie, hypokaliémie, hyponatrémie",
      "B. Hyperuricémie, hyperkaliémie, hyperphosphorémie et hypocalcémie secondaire",
      "C. Hypophosphatémie avec hyperkaliémie",
      "D. Alcalose métabolique sévère",
      "E. Hypoglycémie réfractaire"
    ],
    correctAnswers: [1],
    explanation: "La libération massive du contenu intracellulaire des blastes détruits produit : acide urique (catabolisme des purines), potassium (K+ intracellulaire), phosphate (PO4-), qui précipite avec le calcium entraînant une hypocalcémie secondaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-18',
    courseId: 'crs-hemato-6',
    questionNumber: 18,
    type: 'QCM',
    content: "Chez un patient atteint de leucémie aiguë en neutropénie fébrile (PNN < 500/mm³ et T° ≥ 38,3°C), l’attitude initiale impérative est :",
    options: [
      "A. Surveillance sans antibiothérapie en attendant les résultats bactériologiques",
      "B. Mise sous antibiothérapie empirique intraveineuse à large spectre bactéricide anti-pyocyanique immédiate (dans l'heure) après hémocultures",
      "C. Corticothérapie systématique",
      "D. Transfusion de concentrés de granulocytes en première intention",
      "E. Prescription de paracétamol seul à domicile"
    ],
    correctAnswers: [1],
    explanation: "La neutropénie fébrile est une urgence médicale absolue : toute attente augmente le risque de choc septique et de mortalité. L'antibiothérapie IV à large spectre doit débuter dans l'heure.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-19',
    courseId: 'crs-hemato-6',
    questionNumber: 19,
    type: 'QCM',
    content: "La phase d'induction de la chimiothérapie dans les leucémies aiguës a pour objectif fondamental :",
    options: [
      "A. Prévenir la rechute tardive à 5 ans",
      "B. Obtenir la Rémission Complète (RC) par éradication de la masse leucémique au prix d'une aplasie médullaire transitoire",
      "C. Réduire la taille de la rate sans provoquer d'aplasie",
      "D. Éradiquer la maladie résiduelle moléculaire",
      "E. Normaliser uniquement le taux des plaquettes"
    ],
    correctAnswers: [1],
    explanation: "L'induction (ex: protocole '7+3' combinant Cytarabine et Anthracycline pour les LAM) vise à détruire le clone leucémique et obtenir une moelle avec moins de 5% de blastes et régénération hématopoïétique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-20',
    courseId: 'crs-hemato-6',
    questionNumber: 20,
    type: 'QCM',
    content: "Les LAM secondaires survenant après chimiothérapie par agents alkylants ou sur antécédent de myélodysplasie sont caractérisées par :",
    options: [
      "A. Un pronostic excellent très sensible à la chimiothérapie conventionnelle",
      "B. La fréquence d'anomalies cytogénétiques défavorables (délétions 5q, monosomie 7, caryotype complexe) et une résistance aux traitements",
      "C. Une présentation constante de type promyélocytaire LAM3",
      "D. Un taux de blastes toujours inférieur à 10%",
      "E. L'absence de toute complication infectieuse"
    ],
    correctAnswers: [1],
    explanation: "Les leucémies secondaires post-chimio ou post-myélodysplasie portent des altérations génétiques péjoratives (-5, -7, TP53 muté) et répondent mal à la chimiothérapie standard.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-21',
    courseId: 'crs-hemato-6',
    questionNumber: 21,
    type: 'QCM',
    content: "Un patient atteint de leucémie aiguë présente une angine ulcéro-nécrotique traînante réfractaire aux antibiotiques courants. Quel mécanisme en est directement responsable ?",
    options: [
      "A. Infiltration blastique amygdalienne isolée",
      "B. Neutropénie profonde consécutive à l’insuffisance médullaire",
      "C. Thrombopénie avec nécrose ischémique",
      "D. Anémie sévère hypoxique",
      "E. Hyperviscosité sanguine"
    ],
    correctAnswers: [1],
    explanation: "La neutropénie sévère (< 500/mm³) empêche la réaction inflammatoire locale normale et favorise les ulcérations nécrotiques oropharyngées infectées par des bactéries opportunistes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-22',
    courseId: 'crs-hemato-6',
    questionNumber: 22,
    type: 'QCM',
    content: "La prise en charge spécifique d'urgence de la LAM3 (leucémie promyélocytaire) repose sur :",
    options: [
      "A. Transfusion de globules rouges sans autre traitement",
      "B. Administration immédiate d'Acide Tout-Trans Rétinoïque (ATRA / Trétinoïne) associé au Trioxyde d'Arsenic (ATO) ou anthracycline, et correction vigoureuse de la CIVD",
      "C. Allogreffe de moelle d’emblée",
      "D. Corticothérapie isolée",
      "E. Abstention chirurgicale"
    ],
    correctAnswers: [1],
    explanation: "L'ATRA lève le blocage de maturation induit par l'oncoprotéine PML-RARA en forçant les promyélocytes à se différencier en polynucléaires matures, résolvant rapidement la coagulopathie de CIVD.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-23',
    courseId: 'crs-hemato-6',
    questionNumber: 23,
    type: 'QCM',
    content: "Les deux principales causes de décès précoce au diagnostic des leucémies aiguës sont :",
    options: [
      "A. Les hémorragies cérébro-méningées et le choc septique sur neutropénie fébrile",
      "B. Les métastases viscérales hépatiques",
      "C. L'insuffisance hépatique fulminante",
      "D. L'embolie pulmonaire récidivante",
      "E. L'amylose cardiaque"
    ],
    correctAnswers: [0],
    explanation: "L'insuffisance médullaire aiguë met en jeu le pronostic vital par choc septique bactérien ou fongique (neutropénie) et hémorragie intracrânienne (thrombopénie et/ou CIVD).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-24',
    courseId: 'crs-hemato-6',
    questionNumber: 24,
    type: 'QCM',
    content: "La triade clinique inaugurale du syndrome d’insuffisance médullaire dans les leucémies aiguës associe :",
    options: [
      "A. Syndrome anémique, syndrome infectieux et syndrome hémorragique",
      "B. Adénopathies, splénomégalie et hépatomégalie",
      "C. Céphalées, vomissements et flou visuel",
      "D. Tachycardie, polypnée et œdèmes des membres inférieurs",
      "E. Ictère, prurit et urines foncées"
    ],
    correctAnswers: [0],
    explanation: "L'étouffement médullaire par les blastes affecte les 3 lignées : Anémie (pâleur, asthénie), Neutropénie (fièvre, infections nécrotiques), Thrombopénie (purpura, saignements).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-25',
    courseId: 'crs-hemato-6',
    questionNumber: 25,
    type: 'QCM',
    content: "Selon les protocoles actuels pédiatriques, le taux de rémission complète et de guérison à long terme de la LAL chez l'enfant est d'environ :",
    options: [
      "A. > 90% de rémission complète et ~85-90% de survie sans rechute",
      "B. 50% de rémission complète et 20% de survie",
      "C. Moins de 10% de guérison",
      "D. 100% de rechute constante",
      "E. Guérison uniquement si allogreffe immédiate"
    ],
    correctAnswers: [0],
    explanation: "La LAL de l'enfant est l'un des plus grands succès de l'oncologie moderne : plus de 90-95% de rémission complète et environ 85-90% de guérison définitive.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES FOR LESSON 6
  {
    id: 'q-hem-06-c01',
    courseId: 'crs-hemato-6',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un homme de 24 ans sans antécédent consulte pour fièvre à 39°C depuis 5 jours, asthénie sévère et gingivorragies spontanées. Examen : pâleur, purpura pétéchial, adénopathies cervicales fermes bilatérales, rate palpable à 3 cm. Hémogramme : Hb 7,2 g/dL, GB 85 000/mm³ avec 45% de blastes circulants, plaquettes 18 000/mm³. Devant ce tableau, quel est le diagnostic le plus probable ?",
    options: [
      "A. Leucémie aiguë myéloblastique (LAM)",
      "B. Leucémie aiguë lymphoblastique (LAL)",
      "C. Syndrome myélodysplasique",
      "D. Anémie aplasique",
      "E. Mononucléose infectieuse"
    ],
    correctAnswers: [1],
    explanation: "Adulte jeune + syndrome tumoral marqué (adénopathies, splénomégalie) + insuffisance médullaire avec hyperleucocytose à blastes = Leucémie Aiguë Lymphoblastique (LAL).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-c02',
    courseId: 'crs-hemato-6',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen est indispensable pour confirmer formellement le lignage cellulaire et guider la chimiothérapie ?",
    options: [
      "A. Ponction lombaire seule",
      "B. Myélogramme avec cytométrie en flux (immunophénotypage par anticorps monoclonaux CD)",
      "C. Bilan rénal et hépatique",
      "D. TEP-scan",
      "E. Biopsie ganglionnaire"
    ],
    correctAnswers: [1],
    explanation: "Le myélogramme confirme les blastes (≥20%) et la cytométrie en flux identifie les marqueurs B (CD19, CD22) ou T (CD3).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-c03',
    courseId: 'crs-hemato-6',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 3) : Quelle anomalie cytogénétique est de mauvais pronostic chez cet adulte atteint de LAL ?",
    options: [
      "A. Translocation t(8;21)",
      "B. Translocation t(9;22) [BCR-ABL1]",
      "C. Inversion inv(16)",
      "D. Translocation t(15;17)",
      "E. Hyperdiploïdie >50 chromosomes"
    ],
    correctAnswers: [1],
    explanation: "La translocation t(9;22) forme le chromosome Philadelphie, conférant un haut risque de rechute nécessitant un inhibiteur de tyrosine kinase.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-c04',
    courseId: 'crs-hemato-6',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 1) : Femme de 45 ans admise pour fatigue, fièvre, volumineuses ecchymoses spontanées et saignement gingival en nappe. NFS : Hb 8 g/dL, GB 12 000/mm³ avec 30% de promyélocytes anormaux riches en granulations et corps d'Auer en fagots. Hémostase : TP = 30%, Fibrinogène = 0,8 g/L, D-dimères très élevés. La complication inaugurale est :",
    options: [
      "A. Leucostase pulmonaire",
      "B. Coagulation intravasculaire disséminée (CIVD) avec hyperfibrinolyse réactionnelle",
      "C. Syndrome de lyse tumorale",
      "D. Thrombopénie isolée",
      "E. Purpura thrombopénique immunologique"
    ],
    correctAnswers: [1],
    explanation: "Consommation du fibrinogène + TP bas + D-dimères massifs + saignements cutanéo-muqueux = CIVD aiguë grave.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-c05',
    courseId: 'crs-hemato-6',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 2) : Quel sous-type de leucémie aiguë myéloïde présente cette patiente ?",
    options: [
      "A. LAM0",
      "B. LAM1",
      "C. LAM2",
      "D. LAM3 (Leucémie aiguë promyélocytaire avec translocation t(15;17))",
      "E. LAM6"
    ],
    correctAnswers: [3],
    explanation: "La présence de promyélocytes à granulations abondantes, d'Auer en fagots et d'une CIVD signe la LAM3 (t(15;17) PML-RARA).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-c06',
    courseId: 'crs-hemato-6',
    questionNumber: 31,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Homme de 52 ans, LAM4 hyperleucocytaire avec 280 000 GB/mm³ (80% blastes). Il présente subitement une hypoxie avec dyspnée aiguë, polypnée et confusion mentale sans anomalie auscultatoire. Quel syndrome d'urgence complique cette hyperleucocytose ?",
    options: [
      "A. CIVD isolée",
      "B. Leucostase pulmonaire et cérébrale",
      "C. Syndrome de lyse tumorale",
      "D. Insuffisance cardiaque droite",
      "E. Pneumothorax spontané"
    ],
    correctAnswers: [1],
    explanation: "L'occlusion mécanique microcirculatoire par les blastes myéloïdes monocytaires produit le syndrome de leucostase pulmonaire et neurologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-c07',
    courseId: 'crs-hemato-6',
    questionNumber: 32,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Enfant de 8 ans atteint de LAL volumineuse. Bilan avant tout traitement : acide urique = 140 mg/L, kaliémie = 6,4 mmol/L, créatinine = 2,8 mg/dL, phosphorémie très élevée. Quelle est la prise en charge prioritaire ?",
    options: [
      "A. Chimiothérapie immédiate à pleine dose",
      "B. Hyperhydratation alcaline, Rasburicase IV, traitement urgent de l'hyperkaliémie (Kayexalate, insuline-glucose)",
      "C. Transfusion de globules rouges systématique",
      "D. Isolement en chambre stérile sans perfusion",
      "E. Radiothérapie ganglionnaire"
    ],
    correctAnswers: [1],
    explanation: "Syndrome de lyse tumorale spontané : menace vitale par hyperkaliémie et insuffisance rénale aiguë uratique, impose la Rasburicase et le contrôle du potassium avant la chimiothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-06-c08',
    courseId: 'crs-hemato-6',
    questionNumber: 33,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 : Femme de 68 ans, traitée 5 ans auparavant pour cancer du sein par cyclophosphamide et épirubicine. Elle présente une pancytopénie avec 30% de myéloblastes au myélogramme. Le caryotype montre une monosomie 7 et délétion 5q. Quel est le groupe pronostique ?",
    options: [
      "A. Favorable",
      "B. Intermédiaire",
      "C. Défavorable (LAM secondaire post-chimiothérapie de très mauvais pronostic)",
      "D. Excellent",
      "E. Identique à une LAM de novo"
    ],
    correctAnswers: [2],
    explanation: "Les leucémies aiguës secondaires aux agents alkylants / anthracyclines avec caryotype complexe (-7, 5q-) sont très chimiorésistantes et de pronostic sombre.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_6_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-06-mindmap',
    courseId: 'crs-hemato-6',
    title: 'Mind Map : Leucémies Aiguës (LA)',
    type: 'mindmap',
    content: `# Mind Map : Leucémies Aiguës (LA)

## 1. Définition & Physiopathologie
- Prolifération clonale maligne de précurseurs immatures (blastes) bloqués en différenciation
- Seuil diagnostique OMS : ≥ 20% de blastes dans la moelle osseuse (myélogramme)
- Étiologie : Idiopathique, Trisomie 21, Toxiques (Benzène), Chimio/Radiothérapie antérieure

## 2. Tableau Clinique
- **Syndrome d'Insuffisance Médullaire** :
  - Anémie (pâleur, asthénie, dyspnée)
  - Neutropénie (fièvre, angine ulcéro-nécrotique traînante, sepsis)
  - Thrombopénie (purpura pétéchial/ecchymotique, hémorragies muqueuses)
- **Syndrome Tumoral** :
  - LAL : Polyadénopathies, splénomégalie, masse médiastinale (LAL-T)
  - LAM : Hypertrophie gingivale, leucémides cutanées (LAM4/5), chloromes

## 3. Urgences Inaugurales Majeures
- **CIVD** : Typique de la LAM3 (promyélocytaire t(15;17)) -> ATRA d'urgence
- **Leucostase** : Hyperleucocytose > 100 000/mm³ myéloïde (détresse respiratoire, coma)
- **Syndrome de Lyse Tumorale** : Hyperuricémie, Hyperkaliémie, Hyperphosphorémie, Hypocalcémie -> Rasburicase + Hyperhydratation

## 4. Classification & Diagnostic
- Morphologie & MPO (Auer = Myéloïde)
- Cytométrie en flux (Immunophénotypage CD) : Myéloïde (CD13, CD33, MPO), LAL-B (CD19, CD22, CD10), LAL-T (CD3)
- Cytogénétique pronostique :
  - *Favorable* : t(8;21), inv(16), t(15;17)
  - *Défavorable* : t(9;22) Ph+, -5, -7, caryotype complexe`,
    author: 'Faculté de Médecine Algérie'
  },
  {
    id: 'res-hem-06-astuces',
    courseId: 'crs-hemato-6',
    title: 'Astuces & Pièges aux Concours : Leucémies Aiguës',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Bâtonnets d'Auer :**
   - Pathognomoniques de la **lignée myéloïde (LAM)**. Ils n'existent JAMAIS dans une LAL !
2. **LAM3 (Leucémie Promyélocytaire) :**
   - Translocation **t(15;17)** et gène de fusion **PML-RARA**.
   - Présentation = **CIVD hémorragique foudroyante**.
   - Urgence vitale = Débuter l'**ATRA (Trétinoïne)** immédiatement sans attendre la confirmation cytogénétique !
3. **Syndrome de lyse tumorale : Les 3H + 1 hypo :**
   - **H**yperkaliémie + **H**yperuricémie + **H**yperphosphorémie + **Hypo**calcémie.
4. **Neutropénie fébrile :**
   - PNN < 500/mm³ + Fièvre ≥ 38,3°C = antibiothérapie IV à large spectre dans l'heure (Céfépime ou Tazocilline).
5. **Ponction lombaire systématique :**
   - Obligatoire dans TOUTES les LAL et dans les LAM4/LAM5 ou avec leucocytose > 100 000/mm³.`,
    author: 'Faculté de Médecine Algérie'
  }
];
