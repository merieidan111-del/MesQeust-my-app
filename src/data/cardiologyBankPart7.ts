import { Course, Question } from '../types/medical';

export const CARDIOLOGY_COURSES_PART7: Course[] = [
  {
    id: 'crs-ep',
    moduleId: 'mod-cardio',
    title: 'Embolie Pulmonaire (EP)',
    orderIndex: 17,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-cardiomyopathies',
    moduleId: 'mod-cardio',
    title: 'Cardiomyopathies (CMH, CMD, CMR)',
    orderIndex: 18,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-raa',
    moduleId: 'mod-cardio',
    title: 'Rhumatisme Articulaire Aigu (RAA)',
    orderIndex: 19,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
  {
    id: 'crs-aomi',
    moduleId: 'mod-cardio',
    title: 'Artériopathie Oblitérante des Membres Inférieurs (AOMI)',
    orderIndex: 20,
    qcmCount: 20,
    casCliniqueCount: 5,
    resumesCount: 1,
    astucesCount: 2,
    completedPercent: 0,
  },
];

export const CARDIOLOGY_QUESTIONS_PART7: Question[] = [
  // ==========================================
  // EMBOLIE PULMONAIRE (crs-ep)
  // ==========================================
  {
    id: 'q-ep-01',
    courseId: 'crs-ep',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie est la méthode de première intention pour confirmer formellement le diagnostic d'embolie pulmonaire chez un patient hémodynamiquement stable ?",
    options: [
      "Angioscanner thoracique spiralé avec injection de produit de contraste iodé",
      "Radiographie du thorax de face",
      "Échocardiographie transthoracique isolée",
      "Coronarographie sélective",
      "IRM cardiaque sans injection"
    ],
    correctAnswers: [0],
    explanation: "L'angioscanner thoracique est l'examen de référence de première ligne chez le patient stable avec probabilité clinique intermédiaire ou forte (ou D-dimères positifs). Il visualise directement le défect d'opacification endoluminal.",
    clinicalPearl: "Examen de référence EP stable = Angioscanner thoracique injecté."
  },
  {
    id: 'q-ep-02',
    courseId: 'crs-ep',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle est la définition d'une embolie pulmonaire à 'Haut Risque' (EP grave) selon les recommandations ESC 2019 ?",
    options: [
      "Présence d'un état de choc cardiogénique ou d'une hypotension artérielle systémique persistante (PAS < 90 mmHg ou chute >= 40 mmHg pendant > 15 min)",
      "Présence d'un infarctus pulmonaire radiologique",
      "Taux de D-dimères > 5000 µg/L",
      "Âge supérieur à 75 ans",
      "Présence d'un essoufflement isolé"
    ],
    correctAnswers: [0],
    explanation: "L'EP à haut risque est définie par la présence d'une instabilité hémodynamique : arrêt cardio-respiratoire, choc obstructif, ou hypotension persistante (PAS < 90 mmHg). Elle justifie une reperfusion d'urgence (thrombolyse systémique).",
    clinicalPearl: "EP à haut risque = Instabilité hémodynamique (PAS < 90 mmHg / Choc) → Thrombolyse immédiate requise."
  },
  {
    id: 'cas-ep-01',
    courseId: 'crs-ep',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Douleur basi-thoracique brutale et collapsus post-opératoire\nUne patiente de 65 ans opérée d'une prothèse de hanche il y a 8 jours présente brutalement une syncope, une dyspnée avec polypnée à 35/min, une cyanose des lèvres et une douleur thoracique droite. Aux urgences : PA 80/50 mmHg, FC 125 bpm, SaO2 84% sous air. L'ETT au lit du malade montre un ventricule droit très dilaté avec akinésie de la paroi libre et signe de McConnell.\nQuelle est la conduite thérapeutique immédiate ?",
    options: [
      "Thrombolyse intraveineuse immédiate par rt-PA (Altéplase 100 mg en 2h) et remplissage vasculaire modéré",
      "Anticoagulation par héparine seule à dose préventive",
      "Prescription d'antibiotiques pour pneumonie nosocomiale",
      "Mise sous bêtabloquants pour ralentir la tachycardie",
      "Attendre le lendemain pour un angioscanner en radiologie"
    ],
    correctAnswers: [0],
    explanation: "Embolie pulmonaire à haut risque avec état de choc hémodynamique et cœur pulmonaire aigu échographique : la thrombolyse systémique en urgence est le traitement de sauvetage absolu pour désobstruer le lit artériel pulmonaire.",
    clinicalPearl: "EP avec choc = Reperfusion immédiate par thrombolyse IV (ou embolectomie si contre-indication)."
  },

  // ==========================================
  // CARDIOMYOPATHIES (crs-cardiomyopathies)
  // ==========================================
  {
    id: 'q-cm-01',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la cardiomyopathie hypertrophique obstructive (CMHO), quelle manœuvre clinique majore typiquement le souffle systolique d'éjection ?",
    options: [
      "La manœuvre de Valsalva et le passage à l'orthostatisme",
      "La position accroupie (squatting)",
      "L'effort de préhension isométrique (handgrip)",
      "L'élévation passive des jambes",
      "L'administration intraveineuse de bêtabloquants"
    ],
    correctAnswers: [0],
    explanation: "Toute manœuvre réduisant la précharge ventriculaire gauche (Valsalva, lever brutal) ou augmentant l'inotropisme aggrave l'obstruction sous-aortique dans la CMHO et majore l'intensité du souffle. Le squatting ou le handgrip augmentent la précharge/postcharge et diminuent le souffle.",
    clinicalPearl: "Souffle de CMHO : Se renforce au Valsalva et au lever, s'atténue à l'accroupissement (squatting)."
  },
  {
    id: 'q-cm-02',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Avancé',
    questionText: "Quel examen d'imagerie moderne est devenu indispensable pour le diagnostic étiologique des cardiomyopathies et la détection de la fibrose myocardique par rehaussement tardif au gadolinium (LGE) ?",
    options: [
      "IRM Cardiaque (CMR)",
      "Scanner coronaire",
      "Radiographie pulmonaire",
      "Scintigraphie osseuse",
      "Doppler veineux"
    ],
    correctAnswers: [0],
    explanation: "L'IRM cardiaque est l'examen de référence pour quantifier les volumes, caractériser le tissu myocardique (œdème, surcharge ferrique ou lipidique) et détecter la fibrose de remplacement par rehaussement tardif (LGE), élément pronostique majeur de mort subite.",
    clinicalPearl: "IRM cardiaque avec LGE (rehaussement tardif) = Clé du bilan pronostique et étiologique des cardiomyopathies."
  },
  {
    id: 'cas-cm-01',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Mort subite récupérée chez un athlète de 19 ans\nUn basketteur de 19 ans présente un arrêt cardio-respiratoire sur le terrain, réanimé par massage et choc d'un DAE pour fibrillation ventriculaire. L'ETT montre une hypertrophie asymétrique du septum interventriculaire mesurée à 24 mm avec mouvement systolique antérieur de la valve mitrale (SAM). L'histoire familiale révèle le décès inexpliqué de son oncle à l'âge de 22 ans.\nQuelle thérapeutique de prévention secondaire est formellement indiquée ?",
    options: [
      "Implantation d'un défibrillateur automatique implantable (DAI)",
      "Traitement par digitaliques et diurétiques",
      "Arrêt du sport sans aucun autre traitement",
      "Prescription d'amiodarone seule",
      "Chirurgie de pontage coronaire"
    ],
    correctAnswers: [0],
    explanation: "Chez ce jeune patient présentant une CMH avec arrêt cardiaque récupéré sur FV, l'indication d'un DAI (Défibrillateur Automatique Implantable) en prévention secondaire est formelle (classe I, niveau A).",
    clinicalPearl: "CMH avec mort subite récupérée ou TV syncopale = DAI en prévention secondaire obligatoire."
  },

  // ==========================================
  // RHUMATISME ARTICULAIRE AIGU (crs-raa)
  // ==========================================
  {
    id: 'q-raa-01',
    courseId: 'crs-raa',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les critères de Jones révisés, lequel des items suivants est un critère MAJEUR de RAA ?",
    options: [
      "Cardite (endocardite, myocardite ou péricardite)",
      "Fièvre isolée à 38°C",
      "Arthralgies sans signes inflammatoires",
      "Élévation de la CRP",
      "Allongement de l'intervalle PR à l'ECG"
    ],
    correctAnswers: [0],
    explanation: "Les 5 critères majeurs de Jones sont résumés par le moyen mnémotechnique 'JONES' : Joints (polyarthrite migratrice), O-cardite (atteinte cardiaque), Nodules sous-cutanés de Meynet, Erythema marginatum (érythème annulaire de Besnier), Sydenham chorea (chorée). La fièvre, la CRP et l'allongement du PR sont des critères mineurs.",
    clinicalPearl: "Critères majeurs de Jones (JONES) : Polyarthrite migratrice, Cardite, Nodules de Meynet, Érythème marginé, Chorée de Sydenham."
  },
  {
    id: 'q-raa-02',
    courseId: 'crs-raa',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la modalité de prophylaxie secondaire de référence contre les récidives de RAA chez un patient ayant développé une valvulopathie rhumatismale ?",
    options: [
      "Injections intramusculaires de Benzathine-benzylpénicilline (Extencilline) toutes les 3 à 4 semaines pendant au moins 10 ans ou jusqu'à 40 ans",
      "Aspirine à faible dose tous les jours pendant 6 mois",
      "Corticothérapie au long cours",
      "Amoxicilline per os uniquement lors des épisodes fébriles",
      "Aucune antibioprophylaxie n'est indiquée"
    ],
    correctAnswers: [0],
    explanation: "La prévention secondaire des rechutes rhumatismales repose sur la Benzathine-pénicilline G intramusculaire toutes les 3-4 semaines. En présence d'une cardite avec valvulopathie séquellaire, elle doit être poursuivie au minimum 10 ans ou jusqu'à l'âge de 40 ans (voire à vie si exposition persistante).",
    clinicalPearl: "Prophylaxie secondaire du RAA : Extencilline IM toutes les 3-4 semaines (prévention des récidives destructrices)."
  },
  {
    id: 'cas-raa-01',
    courseId: 'crs-raa',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Enfant de 9 ans avec polyarthrite et souffle cardiaque\nUn enfant de 9 ans consulte pour des douleurs très vives des genoux puis des chevilles, très inflammatoires, mobiles d'une articulation à l'autre depuis 5 jours. Il a présenté une angine fébrile non traitée il y a 3 semaines. L'auscultation cardiaque retrouve un souffle holosystolique 3/6 à la pointe irradiant à l'aisselle (fuite mitrale). Le titre d'ASLO est très élevé à 800 UI/mL.\nQuel traitement anti-inflammatoire d'attaque est indiqué en présence de cette cardite rhumatismale ?",
    options: [
      "Corticothérapie par Prednisone (2 mg/kg/j) associée à l'éradication du streptocoque par Pénicilline",
      "Paracétamol seul à dose pédiatrique",
      "AINS seul sans antibiotiques",
      "Immunosuppresseurs lourds (Méthotrexate)",
      "Chirurgie cardiaque en urgence sans traitement médical"
    ],
    correctAnswers: [0],
    explanation: "L'atteinte cardiaque (cardite rhumatismale) impose une corticothérapie d'attaque par prednisone (2 mg/kg/j pendant 2-3 semaines avec décroissance progressive), précédée d'un traitement éradicateur du portage pharyngé streptococcique par pénicilline.",
    clinicalPearl: "Cardite rhumatismale = Corticothérapie d'attaque (Prednisone 2 mg/kg/j) + Pénicilline d'éradication."
  },

  // ==========================================
  // ARTERIOPATHIE OBLITERANTE DES MEMBRES INFERIEURS (crs-aomi)
  // ==========================================
  {
    id: 'q-aomi-01',
    courseId: 'crs-aomi',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle valeur de l'Index de Pression Systolique (IPS) mesuré à la cheville confirme le diagnostic d'artériopathie oblitérante des membres inférieurs (AOMI) ?",
    options: [
      "IPS <= 0.90",
      "IPS entre 1.00 et 1.30",
      "IPS >= 1.40",
      "IPS = 1.00 exactement",
      "IPS > 2.0"
    ],
    correctAnswers: [0],
    explanation: "Un IPS <= 0.90 (rapport de la pression systolique tibiale à la pression brachiale la plus élevée) signe formellement une sténose artérielle hémodynamiquement significative avec une sensibilité et spécificité > 95%. Un IPS > 1.40 traduit une incompressibilité artérielle (médiacalcose).",
    clinicalPearl: "Seuils IPS : <= 0.90 = AOMI ; 0.91-1.30 = Normal ; > 1.40 = Médiacalcose (artères incompressibles)."
  },
  {
    id: 'q-aomi-02',
    courseId: 'crs-aomi',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la classification de Leriche et Fontaine de l'AOMI, à quel stade correspond l'ischémie de repos (douleurs nocturnes de décubitus soulagées par la mise du pied en déclive) ?",
    options: [
      "Stade I",
      "Stade IIa",
      "Stade IIb",
      "Stade III",
      "Stade IV"
    ],
    correctAnswers: [3],
    explanation: "La classification de Leriche et Fontaine comprend : Stade I (asymptomatique), Stade IIa (claudication d'effort non invalidante > 200m), Stade IIb (claudication serrée < 200m), Stade III (douleurs de décubitus permanentes), Stade IV (troubles trophiques / gangrène). Les stades III et IV définissent l'ischémie critique.",
    clinicalPearl: "Classification de Leriche et Fontaine : I (silencieux), II (claudication), III (décubitus/nuit), IV (gangrène/ulcère)."
  },
  {
    id: 'cas-aomi-01',
    courseId: 'crs-aomi',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique : Claudication du mollet droit chez un fumeur\nUn homme de 62 ans, tabagique à 40 PA, consulte pour une crampe douloureuse du mollet droit survenant de façon reproductible après 150 mètres de marche rapide, l'obligeant à s'arrêter et cédant en moins de 3 minutes. À l'examen : abolition du pouls tibial postérieur et pédieux droit. L'IPS droit est calculé à 0.65.\nQuelle est la prise en charge thérapeutique médicale fondamentale d'emblée ?",
    options: [
      "Amputation prophylactique du pied",
      "Bithérapie antithrombotique (Aspirine + Clopidogrel ou Statine + IEC + Aspirine), arrêt complet du tabac et réentraînement à la marche",
      "Repos au lit strict sans marcher",
      "Anticoagulation par héparine IV à dose curative sans autre mesure",
      "Antalgiques de palier III sans statines"
    ],
    correctAnswers: [1],
    explanation: "Au stade II de l'AOMI, le traitement médical universel associe le contrôle agressif des facteurs de risque CV (sevrage tabagique absolu, statine forte dose, IEC, antiagrégant plaquettaire aspirine ou clopidogrel) et le programme régulier de marche supervisée (au moins 30-45 min 3 fois par semaine) pour stimuler la collatéralité.",
    clinicalPearl: "AOMI Stade II : Tabac zéro + Antiagrégant + Statine forte dose + IEC + Entraînement à la marche."
  }
];
