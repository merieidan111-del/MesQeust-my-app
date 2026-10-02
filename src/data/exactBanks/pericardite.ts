import { Question } from '../../types/medical';

export const PERICARDITE_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-peri-01',
    courseId: 'crs-pericardite',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 22 ans consulte pour une douleur thoracique rétrosternale aiguë, augmentée à l'inspiration et en décubitus, et améliorée en s'asseyant et en se penchant en avant. L'auscultation trouve un frottement péricardique. L'ECG montre un sus-décalage concave du segment ST dans toutes les dérivations, sans onde Q. Quel est le diagnostic le plus probable ?",
    options: [
      "A) Infarctus du myocarde inférieur",
      "B) Embolie pulmonaire",
      "C) Péricardite aiguë",
      "D) Pneumothorax",
      "E) Dissection aortique"
    ],
    correctAnswers: [2],
    explanation: "Péricardite aiguë. La triade classique (douleur péricarditique, frottement, anomalies ECG diffuses) est très évocatrice. L'ECG en péricardite est caractérisé par un sus-décalage concave et diffus, contrairement à l'infarctus qui est convexe, localisé et associé à des ondes Q.",
    clinicalPearl: "Douleur soulagée en antéflexion (P.E.N.C.H.E.) + sus-décalage ST concave diffus = Péricardite aiguë."
  },
  {
    id: 'q-peri-02',
    courseId: 'crs-pericardite',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe électrocardiographique le plus spécifique de la tamponnade cardiaque ?",
    options: [
      "A) Sus-décalage du segment ST",
      "B) Micro-voltage",
      "C) Ondes T négatives",
      "D) Alternance électrique",
      "E) Sous-décalage du segment PR"
    ],
    correctAnswers: [3],
    explanation: "Alternance électrique. Le micro-voltage (B) est sensible mais peu spécifique. L'alternance électrique (variation de l'amplitude du QRS) est un signe très spécifique d'épanchement péricardique massif et de tamponnade, dû au balancement du cœur (swinging heart).",
    clinicalPearl: "Alternance électrique des QRS = Balancement du cœur dans un épanchement abondant (swinging heart)."
  },
  {
    id: 'q-peri-03',
    courseId: 'crs-pericardite',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors de l'échocardiographie d'un patient avec une péricardite, quel signe est le plus en faveur d'une tamponnade ?",
    options: [
      "A) Épanchement péricardique antérieur de 5 mm",
      "B) Hypertrophie ventriculaire gauche",
      "C) Collapsus diastolique de l'oreillette droite",
      "D) Collapsus télédiastolique du ventricule droit",
      "E) Fraction d'éjection à 60%"
    ],
    correctAnswers: [3],
    explanation: "Collapsus télédiastolique du ventricule droit. C'est le signe échographique le plus précoce et le plus spécifique d'une tamponnade. La compression par le liquide empêche le remplissage ventriculaire en diastole.",
    clinicalPearl: "Tamponnade échographique : Collapsus télédiastolique de la paroi libre du ventricule droit."
  },
  {
    id: 'q-peri-04',
    courseId: 'crs-pericardite',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient sous hémodialyse chronique présente une fièvre et une douleur thoracique. Un frottement péricardique est audible. Quel est le facteur étiologique le plus probable ?",
    options: [
      "A) Péricardite virale",
      "B) Péricardite urémique",
      "C) Péricardite tuberculeuse",
      "D) Péricardite néoplasique",
      "E) Péricardite auto-immune"
    ],
    correctAnswers: [1],
    explanation: "Péricardite urémique. Le terrain (insuffisant rénal dialysé) est très évocateur. La dialyse mal équilibrée est un facteur de risque classique. Une infection surajoutée est possible, mais l'étiologie urémique est la première à évoquer.",
    clinicalPearl: "Insuffisance rénale sévère + frottement = Péricardite urémique (indication à intensifier la dialyse)."
  },
  {
    id: 'q-peri-05',
    courseId: 'crs-pericardite',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le traitement de première intention d'une péricardite aiguë idiopathique non compliquée ?",
    options: [
      "A) Colchicine seule",
      "B) Aspirine ou AINS + Colchicine",
      "C) Corticoïdes à forte dose",
      "D) Antibiotiques à large spectre",
      "E) Ponction péricardique systématique"
    ],
    correctAnswers: [1],
    explanation: "Aspirine ou AINS + Colchicine. L'Aspirine ou un AINS (comme l'Ibuprofène) est le pilier anti-inflammatoire. L'adjonction de colchicine a démontré son efficacité pour réduire la durée des symptômes et surtout le risque de récidive.",
    clinicalPearl: "Trt 1ère intention péricardite : AINS (ou Aspirine) + Colchicine (au moins 3 mois pour prévenir les récidives)."
  },
  {
    id: 'q-peri-06',
    courseId: 'crs-pericardite',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La séquence classique des stades ECG de la péricardite aiguë selon Holzmann est :",
    options: [
      "A) Onde T négative -> Sus-décalage ST -> Normalisation -> Onde T plate",
      "B) Sus-décalage ST -> Onde T plate -> Onde T négative -> Normalisation",
      "C) Micro-voltage -> Alternance électrique -> Sus-décalage ST -> Normalisation",
      "D) Sous-décalage PR -> Onde T négative -> Sus-décalage ST -> Normalisation",
      "E) Sus-décalage ST -> Onde T négative -> Onde T plate -> Normalisation"
    ],
    correctAnswers: [1],
    explanation: "Sus-décalage ST -> Onde T plate -> Onde T négative -> Normalisation. Il est crucial de mémoriser cette séquence stade I à IV pour interpréter correctement l'évolution et ne pas confondre avec un infarctus.",
    clinicalPearl: "Stades de Holzmann : 'S.T.O.N.' = Sus-décalage ST (I) → T plate (II) → Onde T négative (III) → Normalisation (IV)."
  },
  {
    id: 'q-peri-07',
    courseId: 'crs-pericardite',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément du bilan biologique initial est le plus utile pour suivre l'activité inflammatoire de la péricardite et guider la durée du traitement ?",
    options: [
      "A) Troponine",
      "B) Numération Formule Sanguine (NFS)",
      "C) Créatininémie",
      "D) Protéine C Réactive (CRP)",
      "E) Vitesse de Sédimentation (VS)"
    ],
    correctAnswers: [3],
    explanation: "Protéine C Réactive (CRP). La CRP est le marqueur inflammatoire le plus sensible et le plus fiable pour objectiver la réponse au traitement. Sa normalisation est un critère pour arrêter le traitement.",
    clinicalPearl: "Arrêt du traitement de la péricardite guidé par la normalisation de la CRP."
  },
  {
    id: 'q-peri-08',
    courseId: 'crs-pericardite',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente une péricardite fébrile avec un épanchement abondant. La ponction péricardique ramène un liquide purulent. Quelle est l'étiologie ?",
    options: [
      "A) Virale",
      "B) Tuberculeuse",
      "C) Purulente",
      "D) Néoplasique",
      "E) Auto-immune"
    ],
    correctAnswers: [2],
    explanation: "Purulente. La présence de pus est pathognomonique d'une péricardite bactérienne. C'est une urgence thérapeutique avec un risque élevé de tamponnade et de constriction.",
    clinicalPearl: "Liquide purulent = Péricardite purulente bactérienne à haut risque de constriction (B.A.T.)."
  },
  {
    id: 'q-peri-09',
    courseId: 'crs-pericardite',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"pouls paradoxal\" lors d'une tamponnade est défini par :",
    options: [
      "A) Une bradycardie à l'inspiration",
      "B) Une augmentation de la pression artérielle systolique (PAS) à l'inspiration",
      "C) Une diminution de la PAS > 10 mmHg à l'inspiration",
      "D) Une tachycardie à l'expiration",
      "E) Une inversion de l'onde P sur l'ECG"
    ],
    correctAnswers: [2],
    explanation: "Une diminution de la PAS > 10 mmHg à l'inspiration. Ce signe est dû à l'interdépendance ventriculaire : l'inspiration augmente le remplissage du VD qui bombe dans le VG, gênant son remplissage et diminuant le débit cardiaque.",
    clinicalPearl: "Pouls paradoxal de Kussmaul : Baisse de la PAS > 10 mmHg lors de l'inspiration profonde."
  },
  {
    id: 'q-peri-10',
    courseId: 'crs-pericardite',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication la plus redoutée à long terme d'une péricardite bactérienne non traitée est :",
    options: [
      "A) La récidive",
      "B) La myocardite",
      "C) La péricardite chronique constrictive",
      "D) L'infarctus du myocarde",
      "E) L'endocardite"
    ],
    correctAnswers: [2],
    explanation: "La péricardite chronique constrictive. Les péricardites bactériennes (surtout tuberculeuses et purulentes) ont un risque très élevé (20-30%) d'évoluer vers une constriction où le péricarde s'épaissit et se fibrose, entravant le remplissage cardiaque.",
    clinicalPearl: "Risque majeur des péricardites tuberculeuses et purulentes = Péricardite chronique constrictive (PCC)."
  },
  {
    id: 'q-peri-11',
    courseId: 'crs-pericardite',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe clinique pathognomonique de la péricardite aiguë ?",
    options: [
      "A) La douleur rétrosternale",
      "B) La dyspnée",
      "C) Le frottement péricardique",
      "D) La fièvre",
      "E) La turgescence jugulaire"
    ],
    correctAnswers: [2],
    explanation: "Le frottement péricardique. Bien que n'étant présent que dans 50% des cas, c'est le seul signe véritablement pathognomonique. Sa présence affirme le diagnostic.",
    clinicalPearl: "Frottement péricardique superficiel, méso-systolo-diastolique = Pathognomonique."
  },
  {
    id: 'q-peri-12',
    courseId: 'crs-pericardite',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une élévation modérée des troponines dans un contexte de péricardite aiguë évoque :",
    options: [
      "A) Un surdosage en AINS",
      "B) Une extension de l'inflammation au myocarde (myopéricardite)",
      "C) Une insuffisance rénale associée",
      "D) Un infarctus du myocarde simultané",
      "E) Un mauvais pronostic à coup sûr"
    ],
    correctAnswers: [1],
    explanation: "Une extension de l'inflammation au myocarde (myopéricardite). L'élévation des troponines reflète une souffrance des myocytes due à l'inflammation péricardique adjacente. Le pronostic reste le plus souvent bon.",
    clinicalPearl: "Troponine positive dans la péricardite = Myopéricardite associée."
  },
  {
    id: 'q-peri-13',
    courseId: 'crs-pericardite',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La cardiomégalie \"en carafe\" ou \"en théière\" sur la radiographie thoracique est évocatrice de :",
    options: [
      "A) Cardiomyopathie dilatée",
      "B) Épanchement péricardique abondant",
      "C) Sténose mitrale",
      "D) Anévrisme du ventricule gauche",
      "E) Atelectasie pulmonaire"
    ],
    correctAnswers: [1],
    explanation: "Épanchement péricardique abondant. Cet aspect est dû à l'élargissement des bords de l'ombre cardiaque, qui prend une forme globuleuse, avec un pédicule vasculaire apparu rétréci.",
    clinicalPearl: "Cœur en carafe ou en théière à la radiographie = Épanchement péricardique abondant (> 250 mL)."
  },
  {
    id: 'q-peri-14',
    courseId: 'crs-pericardite',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la prise en charge d'une péricardite aiguë, les corticoïdes doivent être envisagés en première intention :",
    options: [
      "A) Toujours",
      "B) Uniquement en cas de contre-indication aux AINS",
      "C) En cas d'étiologie virale prouvée",
      "D) Pour potentialiser l'effet des antibiotiques",
      "E) Chez tous les patients diabétiques"
    ],
    correctAnswers: [1],
    explanation: "Uniquement en cas de contre-indication aux AINS. Les corticoïdes sont à éviter en première intention car associés à un risque plus élevé de récidive. Ils sont réservés aux échecs ou contre-indications des AINS/colchicine, ou pour des maladies systémiques spécifiques.",
    clinicalPearl: "Corticoïdes : ÉVITER en 1ère intention dans la péricardite virale (facteur majeur de récidives chroniques)."
  },
  {
    id: 'q-peri-15',
    courseId: 'crs-pericardite',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le principal avantage de l'IRM cardiaque dans le bilan d'une péricardite ?",
    options: [
      "A) Mesurer la pression artérielle",
      "B) Visualiser l'inflammation péricardique sans irradiation",
      "C) Remplacer l'échocardiographie en première intention",
      "D) Diagnostiquer les sténoses coronaires",
      "E) Guider une ponction péricardique"
    ],
    correctAnswers: [1],
    explanation: "Visualiser l'inflammation péricardique sans irradiation. L'IRM permet de caractériser le tissu péricardique (œdème, inflammation, fibrose) et est très utile pour les péricardites récidivantes ou lorsque l'échocardiographie est peu contributive.",
    clinicalPearl: "IRM cardiaque : visualise le rehaussement tardif et l'œdème péricardique en pondération T2."
  },
  {
    id: 'q-peri-16',
    courseId: 'crs-pericardite',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome de Dressler est une péricardite :",
    options: [
      "A) Virale",
      "B) Survenant après un infarctus du myocarde (forme tardive)",
      "C) De l'insuffisance rénale",
      "D) Purulente",
      "E) Traumatique"
    ],
    correctAnswers: [1],
    explanation: "Survenant après un infarctus du myocarde (forme tardive). C'est une péricardite auto-immune survenant 2 à 3 semaines après un IDM, probablement due à une réaction auto-immune contre les antigènes myocardiques nécrosés.",
    clinicalPearl: "Syndrome de Dressler = Péricardite tardive post-infarctus (mécanisme auto-immun)."
  },
  {
    id: 'q-peri-17',
    courseId: 'crs-pericardite',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le mécanisme physiopathologique principal de la tamponnade cardiaque ?",
    options: [
      "A) Troubles de la repolarisation",
      "B) Compression des cavités cardiaques gênant le remplissage diastolique",
      "C) Augmentation de la post-charge du ventricule gauche",
      "D) Diminution de la contractilité myocardique",
      "E) Rupture de la paroi ventriculaire"
    ],
    correctAnswers: [1],
    explanation: "Compression des cavités cardiaques gênant le remplissage diastolique. L'épanchement sous pression dans la cavité péricardique non distensible comprime les cavités et empêche leur remplissage en diastole, entraînant une baisse du débit cardiaque.",
    clinicalPearl: "Tamponnade = Gêne majeure au remplissage diastolique par hyperpression intrapéricardique."
  },
  {
    id: 'q-peri-18',
    courseId: 'crs-pericardite',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La colchicine dans le traitement de la péricardite aiguë a pour principal intérêt de :",
    options: [
      "A) Traiter l'infection virale",
      "B) Prévenir les récidives",
      "C) Soulager la douleur à la place des AINS",
      "D) Corriger les anomalies ECG",
      "E) Réduire la taille de l'épanchement"
    ],
    correctAnswers: [1],
    explanation: "Prévenir les récidives. Son effet anti-inflammatoire, en inhibant la microtubuline, réduit significativement le taux de récidive, qui peut atteindre 30% sans colchicine.",
    clinicalPearl: "Rôle majeur de la colchicine : diviser par deux le risque de récidive de péricardite."
  },
  {
    id: 'q-peri-19',
    courseId: 'crs-pericardite',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient avec un lupus érythémateux disséminé présente une douleur péricarditique. Quel est le mécanisme étiologique ?",
    options: [
      "A) Infectieux",
      "B) Néoplasique",
      "C) Auto-immun",
      "D) Traumatique",
      "E) Métabolique"
    ],
    correctAnswers: [2],
    explanation: "Auto-immun. Les maladies systémiques comme le lupus entraînent une inflammation péricardique par dépôt de complexes immuns et vasculite.",
    clinicalPearl: "Péricardite lupique = atteinte auto-immune par complexes immuns circulants."
  },
  {
    id: 'q-peri-20',
    courseId: 'crs-pericardite',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen est indispensable et urgent devant toute suspicion de tamponnade ?",
    options: [
      "A) Scanner thoracique",
      "B) Coronarographie",
      "C) Échocardiographie",
      "D) IRM cardiaque",
      "E) Radiographie thoracique"
    ],
    correctAnswers: [2],
    explanation: "Échocardiographie. C'est l'examen clé, rapide, disponible au lit du patient, qui confirme le diagnostic, évalue l'abondance de l'épanchement et ses conséquences hémodynamiques.",
    clinicalPearl: "Suspicion de tamponnade = Échocardiographie au lit du malade en extrême urgence."
  },
  {
    id: 'q-peri-21',
    courseId: 'crs-pericardite',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un décollement péricardique postérieur permanent à l'échocardiographie signe un épanchement :",
    options: [
      "A) Absent",
      "B) Minime",
      "C) Modéré",
      "D) Abondant",
      "E) Localisé"
    ],
    correctAnswers: [3],
    explanation: "Abondant. Un décollement circonférentiel (autour de tout le cœur) et permanent (en systole et diastole) est un signe d'épanchement abondant.",
    clinicalPearl: "Décollement en systole ET en diastole = Épanchement abondant."
  },
  {
    id: 'q-peri-22',
    courseId: 'crs-pericardite',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la cause la plus fréquente de péricardite aiguë chez l'adulte jeune ?",
    options: [
      "A) Tuberculeuse",
      "B) Néoplasique",
      "C) Idiopathique ou virale",
      "D) Urémique",
      "E) Post-radique"
    ],
    correctAnswers: [2],
    explanation: "Idiopathique ou virale. Dans la grande majorité des cas, chez le sujet jeune sans comorbidité, la cause est virale (souvent non identifiée) ou est considérée comme idiopathique.",
    clinicalPearl: "80 à 90% des péricardites aiguës du sujet jeune sont virales ou idiopathiques (V.I.N.T.)."
  },
  {
    id: 'q-peri-23',
    courseId: 'crs-pericardite',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de la tamponnade cardiaque confirmée est :",
    options: [
      "A) Médical exclusif (diurétiques)",
      "B) L'évacuation en urgence du liquide péricardique",
      "C) La transplantation cardiaque",
      "D) L'administration de bêta-bloquants",
      "E) La radiothérapie"
    ],
    correctAnswers: [1],
    explanation: "L'évacuation en urgence du liquide péricardique. C'est une urgence médico-chirurgicale vitale. Le drainage (par ponction ou chirurgie) est le seul traitement causal pour lever la compression.",
    clinicalPearl: "Tamponnade = Ponction/drainage péricardique immédiat (évacuation du liquide sous échoguidage)."
  },
  {
    id: 'q-peri-24',
    courseId: 'crs-pericardite',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le sous-décalage du segment PR sur l'ECG est un signe :",
    options: [
      "A) De nécrose myocardique",
      "B) D'hyperkaliémie",
      "C) Spécifique de la péricardite",
      "D) D'ischémie auriculaire",
      "E) De bloc atrio-ventriculaire"
    ],
    correctAnswers: [2],
    explanation: "Spécifique de la péricardite. C'est un signe précoce et très spécifique, correspondant à une lésion sous-épicardique de l'oreillette.",
    clinicalPearl: "Sous-décalage du segment PR = Signe ultra-spécifique et très précoce de péricardite aiguë."
  },
  {
    id: 'q-peri-25',
    courseId: 'crs-pericardite',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La restriction physique pour un athlète avec une péricardite aiguë doit être maintenue :",
    options: [
      "A) Jusqu'à la disparition de la douleur",
      "B) Pendant 1 semaine",
      "C) Jusqu'à normalisation de la CRP, de l'ECG et de l'échocardiographie, pour au moins 3 mois",
      "D) Jusqu'à la fin du traitement par AINS",
      "E) Il n'y a pas besoin de restriction"
    ],
    correctAnswers: [2],
    explanation: "Jusqu'à normalisation de la CRP, de l'ECG et de l'échocardiographie, pour au moins 3 mois. Cette recommandation stricte vise à prévenir les complications, notamment les risques d'arythmie ou de rupture chez les sportifs lors d'un effort intense en phase inflammatoire.",
    clinicalPearl: "Repos sportif absolu d'au moins 3 mois jusqu'à normalisation complète clinique, biologique et électrique."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-peri-01',
    courseId: 'crs-pericardite',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Le Jeune Homme Fiévreux\nUn étudiant de 20 ans consulte aux urgences pour une douleur thoracique rétrosternale aiguë survenue brutalement la veille. Elle est augmentée à l'inspiration et lorsqu'il s'allonge. Il rapporte un syndrome grippal il y a une semaine. À l'examen : TA 125/80, FC 100/min, T° 38.2°C. Auscultation : frottement péricardique en \"craquement de cuir neuf\". L'ECG montre un sus-décalage concave du segment ST en D1, D2, V3-V6 et un sous-décalage de PR en D1. La CRP est à 45 mg/L.\nQ1. Quel est le diagnostic le plus probable ?\nQ2. Quel est le premier traitement à instaurer ?",
    options: [
      "A) Pneumonie communautaire / Antibiotiques IV",
      "B) Péricardite aiguë virale/idiopathique / Aspirine à dose anti-inflammatoire + Colchicine",
      "C) Embolie pulmonaire / Anticoagulants curatifs",
      "D) Infarctus du myocarde / Coronarographie urgente",
      "E) Dissection aortique / Chirurgie urgente"
    ],
    correctAnswers: [1],
    explanation: "Péricardite aiguë virale/idiopathique. Le terrain jeune, le syndrome grippal récent, la douleur typique, le frottement et l'ECG caractéristique orientent vers une cause virale. Le traitement de première intention est Aspirine (ou AINS) à dose anti-inflammatoire + Colchicine pour prévenir les récidives.",
    clinicalPearl: "Péricardite post-virale du sujet jeune : AINS + Colchicine."
  },
  {
    id: 'cas-peri-02',
    courseId: 'crs-pericardite',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : La Dialysée Douloureuse\nUne femme de 65 ans, insuffisante rénale chronique dialysée depuis 5 ans, est amenée pour une douleur thoracique constante et une dyspnée d'aggravation progressive. Elle est apyrétique. On note un frottement péricardique et une turgescence jugulaire. La radiographie thoracique montre une cardiomégalie \"en théière\". L'échocardiographie confirme un épanchement péricardique circonférentiel important de 15 mm sans signe de tamponnade.\nQ1. L'étiologie la plus probable est :\nQ2. Quelle est la mesure thérapeutique NON médicamenteuse la plus importante ?",
    options: [
      "A) Péricardite virale / Ponction péricardique systématique",
      "B) Péricardite urémique / Optimisation de son protocole de dialyse",
      "C) Péricardite tuberculeuse / Mise sous corticothérapie immédiate",
      "D) Péricardite néoplasique / Arrêt définitif de la dialyse",
      "E) Péricardite post-infarctus / Radiothérapie"
    ],
    correctAnswers: [1],
    explanation: "Péricardite urémique. Le contexte d'insuffisance rénale dialysée est hautement évocateur. Le traitement de première intention est l'intensification ou l'optimisation des séances de dialyse pour corriger l'urémie, les anti-inflammatoires étant souvent moins efficaces.",
    clinicalPearl: "Péricardite urémique de l'hémodialysé = Traitement étiologique par intensification de la dialyse."
  },
  {
    id: 'cas-peri-03',
    courseId: 'crs-pericardite',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Tamponnade\nUn homme de 55 ans, suivi pour un cancer du poumon, est admis en unité de soins intensifs pour un malaise. Il est polypnéique, en orthopnée. TA 85/50, FC 130/min, SpO2 92% à l'air ambiant. Turgescence jugulaire à 45°. Bruits du cœur assourdis. Pouls paradoxal à 25 mmHg. L'échocardiographie montre un gros épanchement péricardique avec collapsus télédiastolique du VD et alternance électrique à l'ECG.\nQ1. Quel est le diagnostic urgent ?\nQ2. Quelle est la conduite à tenir immédiate ?",
    options: [
      "A) Choc septique / Antibiothérapie probabiliste",
      "B) Embolie pulmonaire massive / Remplissage vasculaire massif seul",
      "C) Tamponnade cardiaque / Drainage péricardique en urgence",
      "D) Décompensation cardiaque gauche / Scanner thoracique en urgence",
      "E) Pneumopathie sévère / Administration de Dobutamine"
    ],
    correctAnswers: [2],
    explanation: "Tamponnade cardiaque. Le tableau de choc (hypotension, tachycardie) associé aux signes de compression (turgescence jugulaire, pouls paradoxal) et aux signes échographiques (collapsus VD) et ECG (alternance) confirme la tamponnade. Le seul traitement curatif est la levée immédiate de la compression par drainage péricardique.",
    clinicalPearl: "Triade de Beck (hypotension, bruits assourdis, turgescence) = Tamponnade → Drainage d'urgence !"
  },
  {
    id: 'cas-peri-04',
    courseId: 'crs-pericardite',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : La Récidive\nUne femme de 40 ans a présenté il y a 2 mois une péricardite aiguë idiopathique traitée par ibuprofène pendant 10 jours. Elle consulte de nouveau pour la réapparition des mêmes douleurs. La CRP est à 25 mg/L. L'ECG montre des ondes T négatives dans les dérivations antérieures.\nQ1. Quel facteur a le plus probablement favorisé cette récidive ?\nQ2. Quel est le traitement de choix de cette récidive ?",
    options: [
      "A) L'absence de traitement par colchicine lors du premier épisode / Instaurer un AINS + Colchicine à pleine dose pendant au moins 6 mois",
      "B) Un traitement antibiotique insuffisant / Réinstaurer un AINS seul",
      "C) Une étiologie tuberculeuse méconnue / Ponction péricardique systématique",
      "D) Une activité physique trop précoce / Corticothérapie à forte dose d'emblée",
      "E) Un surdosage d'ibuprofène / Chirurgie directe"
    ],
    correctAnswers: [0],
    explanation: "L'absence de traitement par colchicine lors du premier épisode a favorisé la récidive. En cas de récidive, il faut réinstaurer un AINS associé à la pleine dose de colchicine pendant au moins 6 mois.",
    clinicalPearl: "Récidive de péricardite = Réintroduction AINS + Colchicine pendant au moins 6 mois."
  },
  {
    id: 'cas-peri-05',
    courseId: 'crs-pericardite',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Fièvre et Épanchement\nUn homme de 35 ans, originaire d'une zone rurale, présente une fièvre traînante, des sueurs nocturnes, une altération de l'état général et une dyspnée. L'échocardiographie montre un épanchement péricardique abondant, cloisonné, avec des images hyperéchogènes suggérant des fibrines. L'intradermoréaction à la tuberculine est positive.\nQ1. Quelle est l'étiologie la plus à craindre ?\nQ2. Quelle est la principale complication évolutive de cette étiologie ?",
    options: [
      "A) Péricardite virale / Guérison spontanée",
      "B) Péricardite idiopathique / Myocardite aiguë",
      "C) Péricardite tuberculeuse / Péricardite chronique constrictive",
      "D) Péricardite purulente / Endocardite",
      "E) Péricardite néoplasique / Infarctus"
    ],
    correctAnswers: [2],
    explanation: "Péricardite tuberculeuse. Le tableau subaigu (AEG, sueurs), l'épanchement cloisonné avec fibrines et l'IDR positive sont très évocateurs de la tuberculose. La complication majeure est la péricardite chronique constrictive (20-30% des cas).",
    clinicalPearl: "Péricardite tuberculeuse subaiguë à épanchement cloisonné = Risque maximal de péricardite chronique constrictive."
  }
];
