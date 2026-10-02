import { Course, Question } from '../types/medical';

export const CARDIOLOGY_COURSES_PART6: Course[] = [
  {
    id: 'crs-rao',
    moduleId: 'mod-cardio',
    title: 'Rétrécissement Aortique (RAO)',
    orderIndex: 13,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-im',
    moduleId: 'mod-cardio',
    title: 'Insuffisance Mitrale (IM)',
    orderIndex: 14,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-ia',
    moduleId: 'mod-cardio',
    title: 'Insuffisance Aortique (IA)',
    orderIndex: 15,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-rm',
    moduleId: 'mod-cardio',
    title: 'Rétrécissement Mitral (RM)',
    orderIndex: 16,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
];

export const CARDIOLOGY_QUESTIONS_PART6: Question[] = [
  // ==========================================
  // RETRECISSEMENT AORTIQUE (crs-rao)
  // ==========================================
  {
    id: 'q-rao-01',
    courseId: 'crs-rao',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la triade fonctionnelle classique révélant un rétrécissement aortique serré symptomatique ?",
    options: [
      "Dyspnée d'effort, Angor d'effort, Syncope d'effort",
      "Fièvre, Toux sèche, Hémoptysie",
      "Palpitations, Céphalées, Sueurs",
      "Claudication intermittente, Paresthésies, Douleur de décubitus",
      "Orthopnée, Hépatalgie, Œdèmes malléolaires"
    ],
    correctAnswers: [0],
    explanation: "La triade clinique historique du RAO serré comprend : l'angor d'effort (ischémie sous-endocardique par hypertrophie), la syncope d'effort (inadéquation débit cardiaque/vasodilatation musculaire) et la dyspnée d'effort (dysfonction diastolique puis systolique VG).",
    clinicalPearl: "Triade du RAO serré : 'DAS' = Dyspnée, Angor, Syncope d'effort. Dès l'apparition des symptômes, l'espérance de vie sans traitement chute dramatiquement (médiane 2-3 ans)."
  },
  {
    id: 'q-rao-02',
    courseId: 'crs-rao',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quels sont les critères échocardiographiques définissant un rétrécissement aortique serré à bas débit ou débit normal selon l'ESC ?",
    options: [
      "Surface aortique < 1.0 cm² (ou < 0.6 cm²/m²), Vitesse max >= 4.0 m/s, Gradient moyen >= 40 mmHg",
      "Surface aortique > 1.5 cm², Gradient moyen < 20 mmHg",
      "Surface aortique < 2.0 cm², Vitesse max < 3.0 m/s",
      "Gradient pic > 25 mmHg, FEVG > 60%",
      "Vitesse max >= 2.5 m/s, Gradient moyen >= 20 mmHg"
    ],
    correctAnswers: [0],
    explanation: "Le RAO est défini comme serré par : une surface aortique <= 1.0 cm² (ou indexée <= 0.6 cm²/m²), une vitesse maximale transaortique >= 4 m/s et un gradient moyen de pression ventriculo-aortique >= 40 mmHg.",
    clinicalPearl: "Critères RAO Serré : Surface < 1 cm² (ou < 0.6 cm²/m²) + Vmax >= 4 m/s + Gradient moyen >= 40 mmHg."
  },
  {
    id: 'q-rao-03',
    courseId: 'crs-rao',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le caractère auscultatoire typique du rétrécissement aortique valvulaire ?",
    options: [
      "Souffle holodiastolique au foyer aortique avec roulement",
      "Souffle mésosystolique éjectionnel, râpeux, rude, au 2e espace intercostal droit, irradiant aux carotides",
      "Souffle holosystolique en jet de vapeur à l'aisselle gauche",
      "Roulement diastolique avec éclat de B1 à la pointe",
      "Souffle continu systolo-diastolique sous-claviculaire"
    ],
    correctAnswers: [1],
    explanation: "Le RAO se caractérise par un souffle éjectionnel mésosystolique, rude, râpeux, crescendo-decrescendo (losangique), localisé au 2ème EIC droit et irradiant vers les vaisseaux du cou (artères carotides). L'abolition ou la diminution du B2 aortique témoigne de la sévérité.",
    clinicalPearl: "RAO = Souffle systolique éjectionnel rude irradiant aux carotides + abolition du B2."
  },
  {
    id: 'cas-rao-01',
    courseId: 'crs-rao',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Syncope à l'effort chez un homme de 78 ans\nUn patient de 78 ans sans suivi médical récent consulte aux urgences après avoir présenté une syncope brève en montant un escalier raide. À l'examen : PA 105/70 mmHg, pouls régulier à 72/min, souffle rude au 2e EIC droit avec abolition du B2. L'ETT confirme un RAO serré calcifié avec Vmax à 4.4 m/s, gradient moyen à 48 mmHg et surface à 0.7 cm². FEVG à 55%.\nQuelle est l'attitude thérapeutique recommandée ?",
    options: [
      "Traitement médical par diurétiques et bêtabloquants à forte dose sans intervention",
      "Remplacement valvulaire (Chirurgie ou TAVI) discuté en Heart Team en raison du caractère symptomatique",
      "Épreuve d'effort maximale immédiate pour évaluer la tolérance",
      "Surveillance annuelle simple tant que la FEVG reste normale",
      "Prescription d'inhibiteurs calciques vasodilatateurs"
    ],
    correctAnswers: [1],
    explanation: "Tout rétrécissement aortique serré qui devient symptomatique (ici syncope d'effort) relève d'une indication formelle de remplacement valvulaire aortique (chirurgical ou par cathétérisme TAVI après discussion en Heart Team). L'épreuve d'effort est formellement contre-indiquée chez le patient déjà symptomatique.",
    clinicalPearl: "RAO serré symptomatique = Remplacement valvulaire rapide (TAVI ou Chirurgie). Épreuve d'effort CONTRE-INDIQUÉE !"
  },

  // ==========================================
  // INSUFFISANCE MITRALE (crs-im)
  // ==========================================
  {
    id: 'q-im-01',
    courseId: 'crs-im',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est l'auscultation caractéristique d'une insuffisance mitrale organique ?",
    options: [
      "Souffle holosystolique en jet de vapeur au foyer mitral, irradiant vers l'aisselle gauche",
      "Souffle diastolique doux en écharpe au bord gauche du sternum",
      "Souffle éjectionnel débutant après le B1 et finissant avant le B2",
      "Claquement d'ouverture mitrale suivi d'un roulement",
      "Frottement péricardique mésodiastolique"
    ],
    correctAnswers: [0],
    explanation: "L'IM organique donne un souffle holosystolique dès le B1 jusqu'au B2, d'intensité constante ('en plateau'), doux en 'jet de vapeur', maximum à la pointe (apex/foyer mitral) et irradiant vers le creux axillaire gauche.",
    clinicalPearl: "IM = Souffle holosystolique en jet de vapeur à l'apex irradiant vers l'aisselle gauche."
  },
  {
    id: 'q-im-02',
    courseId: 'crs-im',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Selon les recommandations ESC, quels critères quantitatifs échocardiographiques définissent une IM organique sévère (Grade 4) ?",
    options: [
      "Volume régurgité (VR) >= 60 mL et Surface de l'Orifice Régurgitant (SOR) >= 40 mm²",
      "VR >= 30 mL et SOR >= 20 mm²",
      "VR < 15 mL et SOR < 10 mm²",
      "Fraction de régurgitation < 30%",
      "Vena contracta < 3 mm"
    ],
    correctAnswers: [0],
    explanation: "Dans l'IM organique primaire, la sévérité (grade 4) est définie par une SOR (Surface de l'Orifice Régurgitant) >= 40 mm², un volume de régurgitation VR >= 60 mL/battement, et une vena contracta >= 7 mm.",
    clinicalPearl: "IM organique sévère (Grade 4) : SOR >= 40 mm² + Volume régurgité >= 60 mL + Vena contracta >= 7 mm."
  },
  {
    id: 'cas-im-01',
    courseId: 'crs-im',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Rupture de cordage mitral\nUn homme de 58 ans avec antécédent de maladie de Barlow (prolapsus mitral) présente une dyspnée brutale nocturne avec orthopnée majeure et râles crépitants jusqu'aux sommets. L'auscultation retrouve un souffle holosystolique 4/6 apexo-axillaire. L'ETT montre un flail leaflet (feuillet postérieur éversé) avec volume de régurgitation à 75 mL.\nQuelle est la prise en charge urgente ?",
    options: [
      "Traitement de l'OAP (diurétiques IV, dérivés nitrés, VNI) et chirurgie de plastie mitrale en urgence",
      "Ponction pleurale bilatérale",
      "Traitement médical ambulatoire par bêtabloquant",
      "Cardioversion électrique externe immédiate",
      "Surveillance hospitalière simple pendant 15 jours"
    ],
    correctAnswers: [0],
    explanation: "La rupture de cordage entraîne une IM aiguë massive avec inondation alvéolaire (OAP aigu cardiogénique). Le traitement repose sur la stabilisation médicale de la congestion (diurétiques de l'anse, vasodilatateurs, CPAP) puis la plastie mitrale réparatrice chirurgicale précoce.",
    clinicalPearl: "IM aiguë par rupture de cordage = OAP brutal + Plastie mitrale chirurgicale prioritaire."
  },

  // ==========================================
  // INSUFFISANCE AORTIQUE (crs-ia)
  // ==========================================
  {
    id: 'q-ia-01',
    courseId: 'crs-ia',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe auscultatoire est caractéristique de l'insuffisance aortique chronique ?",
    options: [
      "Souffle holodiastolique doux, humé, decrescendo, au foyer aortique et au bord gauche du sternum (foyer d'Erb), en position assise penché en avant en expiration",
      "Souffle holosystolique rude au foyer pulmonaire",
      "Roulement mésodiastolique à l'aisselle",
      "Bruit de galop protodiastolique isolé",
      "Souffle télésystolique râpeux"
    ],
    correctAnswers: [0],
    explanation: "L'IA donne un souffle diastolique immédiat commençant dès le B2, doux, 'humé', aspiratif, decrescendo, maximal le long du bord gauche du sternum (3e EIC gauche ou foyer d'Erb), mieux perçu chez un patient assis penché en avant en expiration bloquée.",
    clinicalPearl: "IA = Souffle diastolique doux, humé, decrescendo au bord gauche du sternum, majoré en antéflexion."
  },
  {
    id: 'q-ia-02',
    courseId: 'crs-ia',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lequel des éléments suivants est un signe périphérique d'hyperpulsatilité artérielle dans l'insuffisance aortique sévère ?",
    options: [
      "Élargissement de la pression pulsée (différentielle tensionnelle augmentée avec PAD basse)",
      "Pincement de la pression différentielle avec PAS basse",
      "Cyanose unguéale permanente",
      "Pouls petit et tardif (parvus et tardus)",
      "Disparition des pouls fémoraux"
    ],
    correctAnswers: [0],
    explanation: "L'IA sévère entraîne une fuite massive vers le VG en diastole, ce qui effondre la pression diastolique (PAD < 50 mmHg voire proche de zéro), tandis que le grand volume d'éjection augmente la PAS : la pression pulsée différentielle est très élargie (signes de Corrigan, Musset, Müller, etc.).",
    clinicalPearl: "IA sévère = Élargissement de la différentielle tensionnelle (ex : PA 160/40 mmHg) + Pouls bondissant de Corrigan."
  },
  {
    id: 'cas-ia-01',
    courseId: 'crs-ia',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : IA volumineuse asymptomatique chez un jeune de 25 ans\nUn jeune homme de 25 ans porteur d'une bicuspidie aortique connue présente une IA chronique volumineuse (SOR 45 mm², VR 65 mL). Il ne rapporte aucun symptôme et pratique le football. À l'ETT : FEVG conservée à 60%, mais le diamètre télésystolique du VG (DTSVG) est mesuré à 52 mm (indexé à 26 mm/m²).\nQuelle est l'indication chirurgicale selon les recommandations ESC ?",
    options: [
      "Poursuite de la surveillance simple tous les 5 ans sans chirurgie",
      "Indication chirurgicale de remplacement valvulaire en raison du remodelage ventriculaire (DTSVG > 50 mm) même si asymptomatique",
      "Prescription de digitaliques à vie",
      "Pose immédiate d'un défibrillateur sans toucher à la valve",
      "Contre-indication chirurgicale formelle"
    ],
    correctAnswers: [1],
    explanation: "Dans l'IA sévère asymptomatique, l'intervention est indiquée dès lors qu'il existe une altération de la FEVG (<= 50%) ou une dilatation ventriculaire gauche significative (Diamètre télé-systolique DTSVG > 50 mm ou > 25 mm/m²), afin d'éviter une défaillance myocardique irréversible.",
    clinicalPearl: "IA sévère asymptomatique : Opérer si FEVG <= 50% OU Diamètre télésystolique VG > 50 mm (ou > 25 mm/m²)."
  },

  // ==========================================
  // RETRECISSEMENT MITRAL (crs-rm)
  // ==========================================
  {
    id: 'q-rm-01',
    courseId: 'crs-rm',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'élément auscultatoire composant le classique 'triplet de Duroziez' dans le rétrécissement mitral pur ?",
    options: [
      "Éclat du B1 à la pointe, Claquement d'ouverture mitrale (COM), Roulement diastolique avec renforcement présystolique",
      "Souffle holosystolique, B3 protodiastolique, Click méso-systolique",
      "Frottement péricardique, B2 dédoublé fixe, B4 télédiastolique",
      "Souffle systolique éjectionnel, B2 aboli, Galop ventriculaire",
      "Souffle continu en tunnel, B2 claqué, Souffle sous-clavier"
    ],
    correctAnswers: [0],
    explanation: "Le 'rhumatisme' mitral auscultatoire (triplet de Duroziez) associe à la pointe : 1) un éclat du premier bruit B1, 2) un claquement d'ouverture mitrale (COM) protodiastolique, et 3) un roulement diastolique rugueux décroissant avec renforcement présystolique (si rythme sinusal).",
    clinicalPearl: "Rétrécissement Mitral = Éclat de B1 + Claquement d'ouverture mitrale + Roulement diastolique."
  },
  {
    id: 'q-rm-02',
    courseId: 'crs-rm',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la principale étiologie du rétrécissement mitral dans les pays émergents et en Afrique du Nord ?",
    options: [
      "Dégénérescence fibro-calcaire du sujet âgé",
      "Séquelles de Rhumatisme Articulaire Aigu (RAA)",
      "Endocardite infectieuse d'Osler",
      "Lupus érythémateux disséminé (Libman-Sacks)",
      "Sténose mitrale congénitale isolée"
    ],
    correctAnswers: [1],
    explanation: "Le RAA (Rhumatisme Articulaire Aigu) secondaire à une infection pharyngée à streptocoque bêta-hémolytique du groupe A reste la cause prédominante (> 90%) du rétrécissement mitral dans le monde, provoquant une fusion commissurale fibreuse des valves.",
    clinicalPearl: "Étiologie n°1 du RM = RAA (fusion des commissures, rétraction de l'appareil sous-valvulaire)."
  },
  {
    id: 'cas-rm-01',
    courseId: 'crs-rm',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Palpitations et hémoptysie chez une femme de 38 ans\nUne femme de 38 ans consulte pour dyspnée et expectoration striée de sang (hémoptysie de surcharge). L'ECG montre une fibrillation atriale avec réponse ventriculaire rapide à 130 bpm. L'ETT objective un rétrécissement mitral serré (surface mitrale à 1.1 cm², gradient moyen à 12 mmHg), une dilatation majeure de l'oreillette gauche (55 mm) sans thrombus intra-auriculaire et un score de Wilkins à 6 (valves souples et peu calcifiées).\nQuel traitement interventionnel de choix est indiqué ?",
    options: [
      "Commissurotomie mitrale percutanée par ballonnet (CMP)",
      "Remplacement valvulaire mécanique sous CEC d'emblée",
      "Chirurgie de pontage aorto-coronarien",
      "Ablation chirurgicale de l'oreillette gauche",
      "Traitement médicamenteux seul sans geste sur la valve"
    ],
    correctAnswers: [0],
    explanation: "Chez cette patiente avec RM serré symptomatique, anatomie favorable (score de Wilkins <= 8, valves souples non calcifiées, pas de fuite mitrale significative) et absence de thrombus dans l'auricule gauche, la commissurotomie mitrale percutanée (ballon d'Inoue) est le traitement de première intention recommandé.",
    clinicalPearl: "RM serré + Score de Wilkins <= 8 sans thrombus = Commissurotomie Percutanée (CMP) au ballonnet."
  }
];
