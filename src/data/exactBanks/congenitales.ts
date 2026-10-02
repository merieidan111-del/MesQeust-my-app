import { Question } from '../../types/medical';

export const CONGENITALES_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-cong-01',
    courseId: 'crs-congenitales',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le facteur étiologique le plus fréquent des cardiopathies congénitales ?",
    options: [
      "A) Aberrations chromosomiques (Trisomie 21)",
      "B) Maladies maternelles (Rubéole)",
      "C) Consommation de médicaments (Antidépresseurs)",
      "D) Cause imprécise (Idiopathique)",
      "E) Maladies familiales à transmission génétique"
    ],
    correctAnswers: [3],
    explanation: "Dans environ 90% des cas, aucune cause spécifique n'est identifiée. Les autres options, bien que possibles, représentent des causes spécifiques bien plus rares (10% des cas).",
    clinicalPearl: "La cause la plus fréquente de cardiopathie congénitale est idiopathique (90% des cas)."
  },
  {
    id: 'q-cong-02',
    courseId: 'crs-congenitales',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une cardiopathie cyanogène est caractérisée par :",
    options: [
      "A) Un shunt gauche-droit prédominant",
      "B) Un mélange de sang où le sang désoxygéné arrive dans la circulation systémique",
      "C) L'absence de cyanose clinique",
      "D) Une hypertension artérielle pulmonaire (HTAP) constante",
      "E) Une hypertrophie ventriculaire gauche isolée"
    ],
    correctAnswers: [1],
    explanation: "Le caractère cyanogène est dû à la présence d'un shunt droit-gauche, permettant au sang non oxygéné (bleu) de contourner les poumons et d'atteindre la circulation générale, provoquant la cyanose.",
    clinicalPearl: "Shunt Droit-Gauche = Sang désoxygéné vers la circulation systémique → Cyanose."
  },
  {
    id: 'q-cong-03',
    courseId: 'crs-congenitales',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans une Communication Inter-Ventriculaire (CIV) large et non traitée, la complication redoutée à long terme est :",
    options: [
      "A) La sténose aortique",
      "B) L'endocardite infectieuse",
      "C) La maladie vasculaire pulmonaire obstructive (Syndrome d'Eisenmenger)",
      "D) La fermeture spontanée",
      "E) L'insuffisance tricuspide"
    ],
    correctAnswers: [2],
    explanation: "L'hyperdébit pulmonaire prolongé entraîne une HTAP qui finit par devenir fixée et irréversible (syndrome d'Eisenmenger), inversant le shunt (devenant droit-gauche). C'est une complication gravissime.",
    clinicalPearl: "Syndrome d'Eisenmenger : HTAP fixée avec inversion du shunt (G-D → D-G) = Stade ultime non opérable."
  },
  {
    id: 'q-cong-04',
    courseId: 'crs-congenitales',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe auscultatoire caractéristique d'une petite CIV (Maladie de Roger) ?",
    options: [
      "A) Souffle diastolique en roulement",
      "B) Souffle continu \"machinique\"",
      "C) B2 claqué au foyer pulmonaire",
      "D) Souffle holosystolique intense, frémissant, irradiant en \"rayon de roue\"",
      "E) Absence de souffle"
    ],
    correctAnswers: [3],
    explanation: "Le gradient de pression important entre le VG et le VD dans une CIV restrictive (petite) génère un souffle intense. L'irradiation en \"rayon de roue\" est classique.",
    clinicalPearl: "Le souffle est d'autant plus intense que la CIV est petite et restrictive (gradient important)."
  },
  {
    id: 'q-cong-05',
    courseId: 'crs-congenitales',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médical de première intention d'une CIV large avec signes d'insuffisance cardiaque associe typiquement :",
    options: [
      "A) Anti-arythmiques et anticoagulants",
      "B) Digitalique et diurétique",
      "C) Bêta-bloquants et antiagrégants",
      "D) Vasodilatateurs artériels purs",
      "E) Corticostéroïdes"
    ],
    correctAnswers: [1],
    explanation: "Le traitement de l'insuffisance cardiaque dans ce contexte repose sur la décharge (diurétique) et l'amélioration de la contractilité (digitalique). Un inhibiteur de l'enzyme de conversion (ex: Captopril) est souvent ajouté.",
    clinicalPearl: "CIV large avec IC : Traitement médical (Diurétique + Digitalique + IEC) en attendant la chirurgie."
  },
  {
    id: 'q-cong-06',
    courseId: 'crs-congenitales',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe clinique pathognomonique d'une Persistance du Canal Artériel (PCA) est :",
    options: [
      "A) Un souffle holosystolique",
      "B) Un roulement diastolique à la pointe",
      "C) Un souffle continu systolo-diastolique \"en tunnel\" sous-claviculaire gauche",
      "D) Un dédoublement fixe de B2",
      "E) Un clic télé-systolique"
    ],
    correctAnswers: [2],
    explanation: "Le shunt continu de l'aorte vers l'artère pulmonaire, pendant la systole et la diastole, génère ce souffle continu très caractéristique.",
    clinicalPearl: "\"Le train de la PCA\" : souffle continu systolo-diastolique sous-claviculaire gauche."
  },
  {
    id: 'q-cong-07',
    courseId: 'crs-congenitales',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la tétralogie de Fallot, l'élément anatomique principal qui détermine la sévérité de la cyanose est :",
    options: [
      "A) La taille de la Communication Inter-Ventriculaire (CIV)",
      "B) Le degré de la dextroposition aortique",
      "C) L'importance de l'hypertrophie ventriculaire droite",
      "D) Le degré de la sténose pulmonaire",
      "E) L'absence de l'arc aortique"
    ],
    correctAnswers: [3],
    explanation: "Plus la sténose pulmonaire est sévère, plus le sang est détourné vers l'aorte (shunt droit-gauche), majorant la cyanose.",
    clinicalPearl: "Dans la Tétralogie de Fallot, la sévérité de la cyanose dépend directement du degré de la sténose pulmonaire."
  },
  {
    id: 'q-cong-08',
    courseId: 'crs-congenitales',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une complication neurologique redoutée dans la tétralogie de Fallot est :",
    options: [
      "A) La méningite virale",
      "B) L'abcès cérébral",
      "C) La sclérose en plaques",
      "D) La myasthénie",
      "E) L'accident vasculaire cérébral ischémique"
    ],
    correctAnswers: [1],
    explanation: "Les germes des infections systémiques, non filtrés par la circulation pulmonaire (du fait du shunt), peuvent former des emboles septiques et causer des abcès cérébraux.",
    clinicalPearl: "Shunt droit-gauche sans filtre capillaire pulmonaire = Risque élevé d'abcès cérébral bactérien."
  },
  {
    id: 'q-cong-09',
    courseId: 'crs-congenitales',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'ECG, une Communication Inter-Auriculaire (CIA) de type ostium secundum se traduit typiquement par :",
    options: [
      "A) Une hypertrophie ventriculaire gauche",
      "B) Un bloc de branche droit incomplet",
      "C) Une onde Q pathologique",
      "D) Un allongement de l'espace QT",
      "E) Une fibrillation auriculaire"
    ],
    correctAnswers: [1],
    explanation: "La surcharge de volume du ventricule droit (due au shunt gauche-droit) entraîne un retard de dépolarisation se manifestant par un bloc de branche droit incomplet.",
    clinicalPearl: "CIA = Bloc de branche droit incomplet (BBDi) à l'ECG + Dédoublement fixe de B2."
  },
  {
    id: 'q-cong-10',
    courseId: 'crs-congenitales',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement curatif de la tétralogie de Fallot chez l'enfant plus grand est :",
    options: [
      "A) L'anastomose de Blalock (chirurgie palliative)",
      "B) La fermeture percutanée de la CIV",
      "C) La cure chirurgicale complète (fermeture CIV + élargissement voie pulmonaire)",
      "D) Un traitement médical à base de prostaglandines",
      "E) La transplantation cardiaque"
    ],
    correctAnswers: [2],
    explanation: "L'intervention réparatrice corrige les deux lésions principales : elle supprime le shunt en fermant la CIV et lève l'obstacle en élargissant la voie pulmonaire.",
    clinicalPearl: "Cure complète de Fallot : Fermeture de la CIV + Élargissement de la voie pulmonaire sous CEC."
  },
  {
    id: 'q-cong-11',
    courseId: 'crs-congenitales',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal mécanisme physiopathologique des shunts gauche-droit ?",
    options: [
      "A) Pression plus élevée dans les cavités gauches",
      "B) Pression plus élevée dans les cavités droites",
      "C) Résistances vasculaires pulmonaires basses",
      "D) Résistances vasculaires systémiques élevées",
      "E) A et C"
    ],
    correctAnswers: [4],
    explanation: "Le shunt gauche-droit est la conséquence de la combinaison de pressions plus élevées dans le cœur gauche et de résistances pulmonaires basses, créant un gradient de pression.",
    clinicalPearl: "Shunt G-D : Pression G > D et Résistances pulmonaires basses → Hyperdébit pulmonaire."
  },
  {
    id: 'q-cong-12',
    courseId: 'crs-congenitales',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La triade clinique classique d'une Communication Inter-Auriculaire (CIA) comprend :",
    options: [
      "A) Cyanose, hippocratisme digital, polyglobulie",
      "B) Souffle systolique pulmonaire, dédoublement de B2, roulement diastolique",
      "C) Hépatomégalie, œdème des membres inférieurs, turgescence jugulaire",
      "D) Souffle continu, B2 unique, pouls bondissant",
      "E) Douleur thoracique, dyspnée, syncope"
    ],
    correctAnswers: [1],
    explanation: "Cette triade est caractéristique : le souffle est dû à l'hyperdébit pulmonaire, le dédoublement de B2 est fixe, et le roulement est lié à l'augmentation du flux trans-tricuspide.",
    clinicalPearl: "Triade CIA : Souffle éjectionnel pulmonaire + B2 dédoublé fixe + Roulement diastolique tricuspide."
  },
  {
    id: 'q-cong-13',
    courseId: 'crs-congenitales',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen est le plus performant pour confirmer le diagnostic et évaluer les conséquences d'une CIV ?",
    options: [
      "A) L'électrocardiogramme (ECG)",
      "B) La radiographie thoracique",
      "C) Le cathétérisme cardiaque",
      "D) L'échocardiographie Doppler",
      "E) L'IRM cardiaque"
    ],
    correctAnswers: [3],
    explanation: "L'échocardiographie est non invasive, visualise directement la CIV, évalue son retentissement sur les cavités et permet de calculer les pressions pulmonaires.",
    clinicalPearl: "Échocardiographie-Doppler = Examen de référence indispensable pour toute anomalie congénitale."
  },
  {
    id: 'q-cong-14',
    courseId: 'crs-congenitales',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome d'Eisenmenger correspond à :",
    options: [
      "A) La fermeture spontanée d'une CIV",
      "B) Une cardiopathie cyanogène avec HTAP fixée et inversion du shunt (devenu droit-gauche)",
      "C) Une complication infectieuse d'une CIV",
      "D) Une sténose pulmonaire serrée",
      "E) Une communication inter-ventriculaire à poumon protégé"
    ],
    correctAnswers: [1],
    explanation: "C'est la complication évolutive majeure des shunts gauche-droit non corrigés, où l'HTAP devient supérieure aux résistances systémiques, inversant le shunt.",
    clinicalPearl: "Syndrome d'Eisenmenger = HTAP fixée obstructive avec inversion du shunt en D-G."
  },
  {
    id: 'q-cong-15',
    courseId: 'crs-congenitales',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médicamenteux pouvant favoriser la fermeture d'un Canal Artériel chez le prématuré est :",
    options: [
      "A) L'Adrénaline",
      "B) L'Ibuprofène ou l'Indométacine",
      "C) Le Captopril",
      "D) Les Diurétiques",
      "E) La Digoxine"
    ],
    correctAnswers: [1],
    explanation: "Ces anti-inflammatoires non stéroïdiens inhibent la synthèse des prostaglandines E, qui maintiennent la perméabilité du canal artériel in utero.",
    clinicalPearl: "Fermeture pharmacologique du PCA chez le prématuré = AINS (Ibuprofène / Indométacine)."
  },
  {
    id: 'q-cong-16',
    courseId: 'crs-congenitales',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans une CIV de type IV (\"à poumon protégé\"), on associe :",
    options: [
      "A) Une CIV et une coarctation de l'aorte",
      "B) Une CIV et une sténose aortique",
      "C) Une CIV et une sténose pulmonaire",
      "D) Une CIV et une communication inter-auriculaire",
      "E) Une CIV et une dextroposition aortique"
    ],
    correctAnswers: [2],
    explanation: "La sténose pulmonaire associée \"protège\" le lit vasculaire pulmonaire de l'hyperdébit et de l'HTAP, d'où une meilleure tolérance initiale.",
    clinicalPearl: "CIV à poumon protégé = CIV + Sténose pulmonaire associée."
  },
  {
    id: 'q-cong-17',
    courseId: 'crs-congenitales',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'hypertrophie ventriculaire droite (HVD) dans la tétralogie de Fallot est :",
    options: [
      "A) La cause de la malformation",
      "B) Une conséquence adaptative à la surcharge de pression",
      "C) Un élément accessoire sans conséquence",
      "D) La cause de la cyanose",
      "E) Responsable du shunt gauche-droit"
    ],
    correctAnswers: [1],
    explanation: "L'HVD est une conséquence de l'obstacle à l'éjection du ventricule droit (sténose pulmonaire) et de la présence de la CIV qui égalise les pressions ventriculaires.",
    clinicalPearl: "HVD dans Fallot = Réponse adaptative secondaire à la sténose pulmonaire."
  },
  {
    id: 'q-cong-18',
    courseId: 'crs-congenitales',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une complication commune à toutes les cardiopathies congénitales avec shunt est :",
    options: [
      "A) L'infarctus du myocarde",
      "B) L'endocardite infectieuse",
      "C) La péricardite constrictive",
      "D) La rupture aortique",
      "E) L'insuffisance mitrale rhumatismale"
    ],
    correctAnswers: [1],
    explanation: "Tout jet turbulent lésant l'endocarde constitue un terrain propice à la colonisation bactérienne, justifiant une prophylaxie de l'endocardite dans la plupart des cas.",
    clinicalPearl: "Prophylaxie d'endocardite nécessaire pour toutes les cardiopathies congénitales avec shunt (sauf CIA opérée)."
  },
  {
    id: 'q-cong-19',
    courseId: 'crs-congenitales',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe radiologique évocateur d'un shunt gauche-droit important ?",
    options: [
      "A) Un cœur en \"sabot\"",
      "B) Une hypervascularisation pulmonaire",
      "C) Un poumon clair rétracté",
      "D) Un épanchement pleural",
      "E) Un médiastin élargi"
    ],
    correctAnswers: [1],
    explanation: "L'augmentation du débit sanguin dans les poumons (hyperdébit pulmonaire) se traduit par une augmentation de la trame vasculaire sur la radio.",
    clinicalPearl: "Shunt G-D = Hypervascularisation pulmonaire radiologique ; Shunt D-G (Fallot) = Poumons clairs."
  },
  {
    id: 'q-cong-20',
    courseId: 'crs-congenitales',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La forme la plus grave de CIV est le type III car :",
    options: [
      "A) Le souffle est très intense",
      "B) Elle s'accompagne d'une HTAP fixée (Eisenmenger)",
      "C) Elle guérit toujours spontanément",
      "D) Elle est asymptomatique",
      "E) Elle nécessite un traitement par ibuprofène"
    ],
    correctAnswers: [1],
    explanation: "Le type III correspond à une forme évoluée avec HTAP sévère et fixée, souvent avec un shunt bidirectionnel, ce qui rend la correction chirurgicale risquée ou contre-indiquée.",
    clinicalPearl: "CIV Type III = HTAP fixée évoluée à très haut risque opératoire."
  },
  {
    id: 'q-cong-21',
    courseId: 'crs-congenitales',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'anomalie génétique la plus fréquemment associée à une cardiopathie congénitale est :",
    options: [
      "A) La monosomie X",
      "B) La Trisomie 18",
      "C) La Trisomie 21",
      "D) La Trisomie 13",
      "E) Le syndrome de Marfan"
    ],
    correctAnswers: [2],
    explanation: "La Trisomie 21 est l'aberration chromosomique la plus fréquente et est fortement associée aux cardiopathies congénitales, notamment les canaux atrioventriculaires complets.",
    clinicalPearl: "Trisomie 21 = 1ère cause génétique (Canal atrio-ventriculaire complet fréquent)."
  },
  {
    id: 'q-cong-22',
    courseId: 'crs-congenitales',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"roulement diastolique\" entendu à la pointe dans une CIA est dû à :",
    options: [
      "A) Une sténose mitrale associée",
      "B) Une insuffisance aortique",
      "C) L'augmentation du flux sanguin through the valve tricuspide",
      "D) Une péricardite",
      "E) Un rétrécissement aortique"
    ],
    correctAnswers: [2],
    explanation: "L'augmentation du volume sanguin passant de l'oreillette droite au ventricule droit (due au shunt) crée un roulement de débit sur la tricuspide, perçu à la pointe qui peut être déviée.",
    clinicalPearl: "Roulement de la CIA = Sténose fonctionnelle relative par hyperdébit tricuspide."
  },
  {
    id: 'q-cong-23',
    courseId: 'crs-congenitales',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement chirurgical d'une CIV large de type II se fait :",
    options: [
      "A) En urgence à la naissance",
      "B) Sous circulation extracorporelle (CEC) avec fermeture par un patch",
      "C) Uniquement par voie percutanée",
      "D) Par médication seule",
      "E) Par transplantation cardiaque"
    ],
    correctAnswers: [1],
    explanation: "La fermeture d'une CIV large nécessite une chirurgie à cœur ouvert sous CEC pour placer un patch et éviter les complications à long terme (HTAP, IC).",
    clinicalPearl: "Chirurgie de fermeture par patch sous CEC vers 3-6 mois pour prévenir l'HTAP fixée."
  },
  {
    id: 'q-cong-24',
    courseId: 'crs-congenitales',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La crise d'anoxie (ou \"tét spell\") dans la tétralogie de Fallot est traitée en urgence par :",
    options: [
      "A) Administration de Bêta-bloquants",
      "B) Position genu-pectorale et administration de morphine",
      "C) Administration de diurétiques",
      "D) Lancement d'une antibiothérapie",
      "E) Induction d'une anesthésie générale"
    ],
    correctAnswers: [1],
    explanation: "La position genu-pectorale augmente les résistances systémiques, réduisant le shunt droit-gauche. La morphine calme l'enfant et diminue la fréquence respiratoire. Les bêta-bloquants (comme le propranolol) peuvent être utilisés en prévention.",
    clinicalPearl: "Crise d'anoxie (Fallot) : 'G-PM' = Genu-pectorale + Protéger + Morphine."
  },
  {
    id: 'q-cong-25',
    courseId: 'crs-congenitales',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe clinique suivant : \"Souffle systolique peu intense, B2 claqué au foyer pulmonaire, cardiomégalie modérée avec artères pulmonaires proximales dilatées et hypovascularisation périphérique à la radio\" évoque :",
    options: [
      "A) Une CIV de type I (Maladie de Roger)",
      "B) Une CIV de type II",
      "C) Une CIV de type III (HTAP fixée)",
      "D) Une CIV de type IV (à poumon protégé)",
      "E) Une persistance du canal artériel"
    ],
    correctAnswers: [2],
    explanation: "Ce tableau correspond à une CIV compliquée d'une HTAP fixée (type III). Le souffle diminue car le gradient VG-VD s'effondre, le B2 est claqué (HTAP), et l'hypovascularisation périphérique reflète l'artériolite pulmonaire obstructive.",
    clinicalPearl: "B2 claqué au foyer pulmonaire + souffle atténué = HTAP fixée majeure."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-cong-01',
    courseId: 'crs-congenitales',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Le nourrisson fatigué\nUn nourrisson de 3 mois est amené en consultation pour une mauvaise prise des biberons, une transpiration et une tachypnée. Il présente un retard staturo-pondéral. L'auscultation trouve un souffle holosystolique frémissant 4/6 au 4ème EICG irradiant en rayon de roue. La radio thoracique montre une cardiomégalie et une hypervascularisation pulmonaire.\nQ1 : Quelle est l'hypothèse diagnostique la plus probable ?",
    options: [
      "A) Communication Inter-Auriculaire",
      "B) Persistance du Canal Artériel",
      "C) Communication Inter-Ventriculaire large",
      "D) Tétralogie de Fallot",
      "E) Sténose aortique"
    ],
    correctAnswers: [2],
    explanation: "Le tableau clinique (signes d'insuffisance cardiaque à débit élevé, retard staturo-pondéral) et le souffle typique sont évocateurs d'une CIV large avec shunt gauche-droit important.",
    clinicalPearl: "CIV large du nourrisson : Retard de croissance + Sueurs aux tétées + Souffle en rayon de roue."
  },
  {
    id: 'cas-cong-02',
    courseId: 'crs-congenitales',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'enfant bleu\nUn enfant de 2 ans se présente aux urgences pour une accentuation brutale de sa cyanose et un malaise avec perte de connaissance brève survenue lors d'une crise de pleurs. L'examen trouve un hippocratisme digital et un souffle systolique rude au bord gauche du sternum.\nQ1 : Quel diagnostic évoquez-vous en premier ?",
    options: [
      "A) Communication Inter-Auriculaire",
      "B) Persistance du Canal Artériel",
      "C) Communication Inter-Ventriculaire non compliquée",
      "D) Tétralogie de Fallot",
      "E) Sténose pulmonaire isolée"
    ],
    correctAnswers: [3],
    explanation: "La cyanose chronique avec hippocratisme digital et la survenue d'une crise d'anoxie (\"tét spell\") sont très caractéristiques de la tétralogie de Fallot.",
    clinicalPearl: "Tétralogie de Fallot : Cyanose à l'effort/pleurs + Hippocratisme digital + Crise d'anoxie."
  },
  {
    id: 'cas-cong-03',
    courseId: 'crs-congenitales',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La découverte fortuite\nUne fillette de 7 ans est adressée pour un souffle cardiaque découvert lors d'une visite scolaire. Elle est totalement asymptomatique. L'auscultation trouve un souffle systolique doux 2/6 au foyer pulmonaire, un dédoublement fixe de B2 et un roulement diastolique à la pointe.\nQ1 : Quelle malformation évoque cette triade ?",
    options: [
      "A) Communication Inter-Ventriculaire",
      "B) Persistance du Canal Artériel",
      "C) Communication Inter-Auriculaire",
      "D) Coarctation de l'aorte",
      "E) Tétralogie de Fallot"
    ],
    correctAnswers: [2],
    explanation: "La triade souffle systolique pulmonaire (hyperdébit), dédoublement fixe de B2 et roulement diastolique (flux tricuspide) est classique d'une CIA, souvent bien tolérée et découverte sur cet examen clinique.",
    clinicalPearl: "CIA souvent silencieuse chez l'enfant : découverte fortuite sur dédoublement fixe du B2."
  },
  {
    id: 'cas-cong-04',
    courseId: 'crs-congenitales',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le prématuré\nUn nouveau-né prématuré de 32 SA présente à J5 une détresse respiratoire et un pouls bondissant. L'auscultation cardiaque trouve un souffle continu sous-claviculaire gauche. La saturation est à 92% en air ambiant.\nQ1 : Quel est le diagnostic et quel traitement médical peut être instauré ?",
    options: [
      "A) CIV - Diurétiques",
      "B) PCA - Ibuprofène",
      "C) Tétralogie de Fallot - Prostaglandines E1",
      "D) CIA - Digitalique",
      "E) Coarctation de l'aorte - Captopril"
    ],
    correctAnswers: [1],
    explanation: "Le souffle continu chez un prématuré en détresse respiratoire est très évocateur d'une PCA. Le traitement de première intention est médical par anti-inflammatoires non stéroïdiens (Ibuprofène) pour fermer le canal.",
    clinicalPearl: "Prématuré avec détresse + Pouls bondissants + Souffle continu sous-clavier = PCA → Ibuprofène."
  },
  {
    id: 'cas-cong-05',
    courseId: 'crs-congenitales',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : L'adolescent négligé\nUn adolescent de 16 ans, suivi pour un \"souffle au cœur\" depuis l'enfance, consulte pour une dyspnée d'effort et des céphalées. Il présente une cyanose des lèvres et des doigts, un hippocratisme digital et un B2 très intense (\"claqué\") au foyer pulmonaire. Le souffle systolique est discret.\nQ1 : Quelle est la complication évolutive la plus probable ?",
    options: [
      "A) Endocardite infectieuse",
      "B) Fermeture spontanée de la CIV",
      "C) Syndrome d'Eisenmenger",
      "D) Régression de l'HTAP",
      "E) Sténose mitrale"
    ],
    correctAnswers: [2],
    explanation: "Ce tableau chez un adolescent avec une cardiopathie congénitale connue non opérée, associant cyanose, hippocratisme digital et signes d'HTAP (B2 claqué), est typique du syndrome d'Eisenmenger, stade terminal d'un shunt gauche-droit inversé.",
    clinicalPearl: "Adolescent non opéré + Cyanose tardive + B2 claqué = Syndrome d'Eisenmenger (shunt inversé)."
  }
];
