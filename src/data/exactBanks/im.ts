import { Question } from '../../types/medical';

export const IM_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-im-01',
    courseId: 'crs-im',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'insuffisance mitrale (IM) :",
    options: [
      "A. Le reflux sanguin se produit pendant la diastole.",
      "B. Elle peut être primaire ou secondaire (fonctionnelle) et sa reconnaissance précoce prévient l'insuffisance cardiaque.",
      "C. L'IM aiguë est toujours bien tolérée.",
      "D. Elle n'entraîne jamais de dilatation cavitaire.",
      "E. Le souffle est toujours continu."
    ],
    correctAnswers: [1],
    explanation: "Le reflux en IM est systolique (A faux). L'IM aiguë est une urgence hémodynamique mal tolérée, contrairement à l'IM chronique. L'IM peut être primaire ou secondaire (fonctionnelle) et sa détection prévient la défaillance cardiaque.",
    clinicalPearl: "Le reflux en IM est holosystolique et l'IM aiguë est une urgence hémodynamique majeure."
  },
  {
    id: 'q-im-02',
    courseId: 'crs-im',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les étiologies d'une IM primitive (organique) incluent :",
    options: [
      "A. Dilatation isolée de l'anneau mitral.",
      "B. Rhumatisme articulaire aigu (RAA), endocardite infectieuse et rupture de cordage dystrophique.",
      "C. Modification géométrique du ventricule gauche post-infarctus.",
      "D. Hypertension artérielle pure.",
      "E. Bloc de branche gauche isolé."
    ],
    correctAnswers: [1],
    explanation: "La dilatation de l'anneau et le remodelage du VG sont des causes d'IM secondaire (fonctionnelle). Le RAA, l'endocardite et la rupture de cordage (dégénérescence de Barlow) sont des causes primitives d'atteinte de l'appareil valvulaire.",
    clinicalPearl: "IM primitive = Lésion intrinsèque de la valve (RAA, Barlow, endocardite)."
  },
  {
    id: 'q-im-03',
    courseId: 'crs-im',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'IM chronique, on observe typiquement :",
    options: [
      "A. Une dilatation de l'oreillette gauche, une surcharge volumique diastolique pure du VG et une post-charge basse.",
      "B. Une hypertrophie ventriculaire gauche concentrique sans dilatation.",
      "C. Une oreillette gauche de taille normale.",
      "D. Une élévation isolée de la post-charge.",
      "E. Une sténose aortique obligatoire."
    ],
    correctAnswers: [0],
    explanation: "L'IM chronique entraîne une dilatation du VG sans hypertrophie initiale (surcharge volumique, pas de pression). L'OG est dilatée et la post-charge est diminuée par la double voie d'éjection (vers l'aorte et vers l'OG).",
    clinicalPearl: "Physiopathologie IM : Surcharge volumique pure (précharge ↑, postcharge basse initialement) avec dilatation VG et OG."
  },
  {
    id: 'q-im-04',
    courseId: 'crs-im',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'auscultation cardiaque d'une IM organique typique retrouve :",
    options: [
      "A. Un souffle holosystolique avec irradiation axillaire et possible galop B3.",
      "B. Un souffle mésosystolique éjectionnel au foyer aortique.",
      "C. Un roulement diastolique à l'aisselle.",
      "D. Un souffle continu en tunnel sous-clavier.",
      "E. Un frottement péricardique."
    ],
    correctAnswers: [0],
    explanation: "Le souffle est holosystolique, doux en jet de vapeur, d'intensité constante, maximum à l'apex et irradiant vers l'aisselle gauche. Un galop B3 peut survenir en cas de surcharge importante.",
    clinicalPearl: "\"H.A.G.\" : Holosystolique, irradiation Aisselle, Galop B3 possible."
  },
  {
    id: 'q-im-05',
    courseId: 'crs-im',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'ECG, une IM chronique peut montrer :",
    options: [
      "A. Une fibrillation atriale, une hypertrophie auriculaire gauche (HAG) et une surcharge diastolique.",
      "B. Un tracé strictement normal en permanence.",
      "C. Un microvoltage périphérique diffus.",
      "D. Un sous-décalage de l'espace PR isolé.",
      "E. Une onde delta de pré-excitation."
    ],
    correctAnswers: [0],
    explanation: "L'IM chronique entraîne une HAG et prédispose à la fibrillation atriale ou au flutter. Le tracé normal est plutôt le reflet d'une IM aiguë survenue sur un cœur auparavant sain.",
    clinicalPearl: "ECG : HAG (onde P large > 120 ms bifide en DII) et risque majeur de Fibrillation Atriale."
  },
  {
    id: 'q-im-06',
    courseId: 'crs-im',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La radiographie thoracique d'une IM chronique sévère peut montrer :",
    options: [
      "A. Une dilatation de l'arc moyen gauche (signe de l'OG), une cardiomégalie (ICT > 0.50) et un syndrome alvéolo-interstitiel.",
      "B. Des poumons totalement clairs avec aorte calcifiée sans cardiomégalie.",
      "C. Une opacité médiastinale antérieure isolée.",
      "D. Un pneumothorax sous tension.",
      "E. Une absence totale de modification cardiaque."
    ],
    correctAnswers: [0],
    explanation: "La dilatation de l'OG (arc moyen gauche convexe, double contour droit), la dilatation du VG (pointe sous le diaphragme, ICT augmenté) et la redistribution vasculaire vers les sommets sont classiques.",
    clinicalPearl: "Radiographie : Cardiomégalie + Double contour de l'OG + Arc inférieur gauche plongeant (VG)."
  },
  {
    id: 'q-im-07',
    courseId: 'crs-im',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le rôle principal de l'échocardiographie transthoracique (ETT) dans l'IM est de :",
    options: [
      "A. Poser le diagnostic positif, rechercher l'étiologie, quantifier la sévérité et évaluer le retentissement cavitaire.",
      "B. Remplacer systématiquement l'échographie transœsophagienne.",
      "C. Mesurer uniquement la kaliémie.",
      "D. Poser l'indication de transplantation d'emblée.",
      "E. Traiter la lésion."
    ],
    correctAnswers: [0],
    explanation: "L'ETT est l'examen pivot qui confirme l'IM, précise le mécanisme (classification de Carpentier), quantifie le volume régurgité (méthode PISA) et mesure la FEVG et les diamètres VG.",
    clinicalPearl: "ETT = Examen clé (Diagnostic + Mécanisme + Quantification SOR/VR + FEVG/DTSVG)."
  },
  {
    id: 'q-im-08',
    courseId: 'crs-im',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médical de l'IM a pour objectif(s) :",
    options: [
      "A. De guérir la lésion valvulaire primitive.",
      "B. De traiter les poussées d'insuffisance cardiaque, prévenir les complications thromboemboliques (en cas de FA) et ralentir la progression dans l'IM secondaire.",
      "C. D'éviter définitivement la chirurgie dans les formes sévères.",
      "D. De supprimer l'appareil sous-valvulaire.",
      "E. De remplacer la valve par voie orale."
    ],
    correctAnswers: [1],
    explanation: "Le traitement médical ne guérit pas la fuite organique. Il gère les conséquences hémodynamiques et, dans l'IM secondaire, optimise la fonction ventriculaire gauche.",
    clinicalPearl: "Le traitement médical ne guérit pas une IM organique sévère : seule la chirurgie répare ou remplace la valve."
  },
  {
    id: 'q-im-09',
    courseId: 'crs-im',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les indications du traitement chirurgical de l'IM incluent :",
    options: [
      "A. Une IM sévère symptomatique, ou asymptomatique avec retentissement VG (FEVG ≤ 60% ou DTSVG ≥ 40 mm).",
      "B. Une IM minime asymptomatique.",
      "C. Un désir du patient sans anomalie échographique.",
      "D. Uniquement les formes survenues chez l'enfant de moins de 1 an.",
      "E. L'absence totale de fuite."
    ],
    correctAnswers: [0],
    explanation: "L'IM sévère symptomatique ou l'IM sévère asymptomatique dès l'apparition d'un retentissement sur le VG (FEVG ≤ 60% ou DTSVG ≥ 40 mm, ou apparition d'une FA ou d'une HTAP) justifie la chirurgie.",
    clinicalPearl: "\"S.A.D.\" : Sévère, Asymptomatique avec retentissement VG (FEVG <= 60% ou DTSVG >= 40 mm), Dysfonction débutante."
  },
  {
    id: 'q-im-10',
    courseId: 'crs-im',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'annuloplastie mitrale :",
    options: [
      "A. Est un remplacement valvulaire prothétique mécanique définitif sous anticoagulation à vie.",
      "B. Est un geste chirurgical physiologique de réparation qui préserve l'appareil valvulaire avec une mortalité opératoire plus faible.",
      "C. Est contre-indiquée chez l'adulte jeune.",
      "D. Ne permet jamais de préserver les cordages.",
      "E. Est réalisée sans circulation extracorporelle."
    ],
    correctAnswers: [1],
    explanation: "L'annuloplastie est une réparation conservatrice qui préserve les cordages et les piliers, offrant une meilleure survie et évitant les anticoagulants au long cours par rapport au remplacement.",
    clinicalPearl: "Plastie mitrale réparatrice (annuloplastie) toujours préférée au remplacement prothétique."
  },
  {
    id: 'q-im-11',
    courseId: 'crs-im',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le MitraClip est principalement indiqué dans :",
    options: [
      "A. L'IM secondaire (fonctionnelle) symptomatique sous traitement médical optimal ou l'IM primitive inopérable à haut risque chirurgical.",
      "B. L'IM primitive chez tout patient jeune sans comorbidité.",
      "C. Les endocardites aiguës avec abcès périvalvulaire.",
      "D. Le remplacement percutané complet de la valve.",
      "E. Les calcifications commissurales massives avec sténose."
    ],
    correctAnswers: [0],
    explanation: "Le MitraClip (réparation percutanée bord-à-bord) est indiqué en cas d'IM secondaire sévère symptomatique malgré un traitement médical optimal, ou dans l'IM primitive récusée pour la chirurgie.",
    clinicalPearl: "MitraClip : Réparation percutanée bord-à-bord pour IM secondaire ou patient inopérable à haut risque."
  },
  {
    id: 'q-im-12',
    courseId: 'crs-im',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'IM aiguë :",
    options: [
      "A. L'oreillette gauche n'a pas eu le temps de se dilater, sa pression est très élevée et le tableau principal est un OAP foudroyant.",
      "B. Le cœur est massivement dilaté à la radiographie.",
      "C. Elle est toujours bien tolérée sur le plan hémodynamique.",
      "D. Elle ne nécessite jamais de chirurgie.",
      "E. L'ECG montre toujours une hypertrophie ventriculaire gauche géante."
    ],
    correctAnswers: [0],
    explanation: "Dans l'IM aiguë (rupture de cordage, ischémie), l'OG non compliante subit une montée brutale de pression, transmise en amont aux capillaires pulmonaires, provoquant un OAP brutal avec cœur de taille normale.",
    clinicalPearl: "\"PANDA\" : Pression OG très élevée, Auscultation OAP, Normalité de la taille du cœur sur la radio."
  },
  {
    id: 'q-im-13',
    courseId: 'crs-im',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La classification de Carpentier est utilisée pour :",
    options: [
      "A. Classer le type de mouvement des feuillets valvulaires (Type I normal, Type II exagéré/prolapsus, Type III restreint) pour guider la réparation chirurgicale.",
      "B. Évaluer la clairance rénale pré-opératoire.",
      "C. Déterminer le risque thromboembolique.",
      "D. Quantifier le gradient moyen transaortique.",
      "E. Diagnostiquer un infarctus inférieur."
    ],
    correctAnswers: [0],
    explanation: "La classification fonctionnelle de Carpentier décrit la cinétique des feuillets : Type I (jeu normal : perforation, dilatation anneau), Type II (jeu exagéré : prolapsus), Type III (jeu restreint en systole ou diastole).",
    clinicalPearl: "Classification de Carpentier : Type I (jeu normal), Type II (prolapsus), Type III (jeu restreint)."
  },
  {
    id: 'q-im-14',
    courseId: 'crs-im',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un score STS ou EuroSCORE est utilisé en pré-opératoire pour :",
    options: [
      "A. Estimer la mortalité et la morbidité opératoires pour aider à la décision thérapeutique.",
      "B. Mesurer la pression artérielle pulmonaire.",
      "C. Quantifier le volume régurgité.",
      "D. Diagnostiquer une infection bactérienne.",
      "E. Choisir la dose d'aspirine."
    ],
    correctAnswers: [0],
    explanation: "Ces scores multiparamétriques prédisent le risque de mortalité opératoire à 30 jours, orientant vers une chirurgie conventionnelle ou une technique percutanée moins invasive.",
    clinicalPearl: "EuroScore II / STS Score > 8% = Haut risque chirurgical guidant la Heart Team."
  },
  {
    id: 'q-im-15',
    courseId: 'crs-im',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'IM ischémique (secondaire), la prise en charge peut inclure :",
    options: [
      "A. Revascularisation myocardique, traitement médical optimal de l'insuffisance cardiaque et resynchronisation en cas de dyssynchronie.",
      "B. L'exclusion chirurgicale systématique de la valve chez tout patient.",
      "C. La prescription de digitaliques en monothérapie sans bloqueurs neuro-hormonaux.",
      "D. L'arrêt de tout traitement vasodilatateur.",
      "E. La résection bilatérale des piliers."
    ],
    correctAnswers: [0],
    explanation: "L'IM ischémique est secondaire à la dysfonction et au remodelage du VG. Sa prise en charge repose sur le traitement de la cardiopathie sous-jacente (TMO, revascularisation, TRC).",
    clinicalPearl: "IM ischémique = Maladie du ventricule gauche : traiter la cause myocardique et ischémique en priorité."
  },
  {
    id: 'q-im-16',
    courseId: 'crs-im',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un souffle holosystolique à l'auscultation est :",
    options: [
      "A. Pathognomonique d'une IM.",
      "B. Étroitement corrélé au millimètre près à la sévérité de la fuite.",
      "C. Fixe et insensible aux manœuvres hémodynamiques.",
      "D. Maximum au foyer mitral et irradiant souvent à l'aisselle.",
      "E. Toujours associé à un roulement diastolique."
    ],
    correctAnswers: [3],
    explanation: "Le souffle de l'IM siège au foyer mitral (apex) et irradie à l'aisselle. Il n'est pas pathognomonique (présent dans la CIV et l'IT) et son intensité sonore ne reflète pas fidèlement le volume régurgité.",
    clinicalPearl: "L'intensité du souffle ne préjuge pas de la sévérité : une IM aiguë massive peut être silencieuse !"
  },
  {
    id: 'q-im-17',
    courseId: 'crs-im',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le bilan pré-opératoire d'une IM sévère comprend :",
    options: [
      "A. Coronarographie, écho-Doppler des troncs supra-aortiques, ETO, épreuves fonctionnelles respiratoires et bilan biologique pré-transfusionnel.",
      "B. Uniquement un ECG de repos.",
      "C. Une biopsie myocardique systématique.",
      "D. Une scintigraphie osseuse.",
      "E. Un scanner cérébral systématique sans injection."
    ],
    correctAnswers: [0],
    explanation: "Le bilan complet standard pré-chirurgical élimine une coronaropathie associée (coronarographie), vérifie l'anatomie valvulaire (ETO) et évalue les comorbidités opératoires.",
    clinicalPearl: "Coronarographie systématique pré-opératoire chez l'homme > 40 ans ou femme ménopausée."
  },
  {
    id: 'q-im-18',
    courseId: 'crs-im',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'évolution d'une IM sévère non traitée peut comporter :",
    options: [
      "A. Fibrillation atriale, insuffisance cardiaque congestive, endocardite infectieuse et décès prématuré.",
      "B. Une guérison spontanée dans 90% des cas.",
      "C. Une disparition totale des cavités gauches.",
      "D. Un rétrécissement aortique immédiat.",
      "E. Une régression sous aspirine seule."
    ],
    correctAnswers: [0],
    explanation: "Sans intervention, l'IM sévère évolue vers la défaillance VG irréversible, l'insuffisance cardiaque globale, la FA avec embolies et un excès de mortalité significatif.",
    clinicalPearl: "Histoire naturelle de l'IM sévère : Fibrillation atriale + Insuffisance cardiaque + Endocardite."
  },
  {
    id: 'q-im-19',
    courseId: 'crs-im',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement médical de l'IM secondaire optimale inclut :",
    options: [
      "A. La quadrithérapie de base de l'insuffisance cardiaque (IEC/ARA2/ARNI + Bêta-bloquants + Anti-aldostérone + inhibiteurs SGLT2) associée aux diurétiques si congestion.",
      "B. Les antibiotiques à vie.",
      "C. Les anti-inflammatoires stéroïdiens à forte dose.",
      "D. La thérapie par oxygène hyperbare.",
      "E. L'abstention thérapeutique complète."
    ],
    correctAnswers: [0],
    explanation: "Dans l'IM secondaire fonctionnelle, la réduction des volumes ventriculaires par le traitement médical de l'insuffisance cardiaque (quadrithérapie) permet souvent de réduire la fuite mitrale.",
    clinicalPearl: "\"Les 4 Mousquetaires de l'IC\" réduisent le remodelage VG et améliorent l'IM secondaire."
  },
  {
    id: 'q-im-20',
    courseId: 'crs-im',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"tenting\" mitral est un concept rencontré dans :",
    options: [
      "A. L'IM secondaire (ischémique ou dilatée).",
      "B. L'IM primitive dégénérative de Barlow.",
      "C. La communication interauriculaire pure.",
      "D. La sténose pulmonaire.",
      "E. La tamponnade cardiaque."
    ],
    correctAnswers: [0],
    explanation: "Le \"tenting\" (aspect en tente) décrit la déformation systolique de la valve dont les feuillets sont attirés vers l'apex par la traction des cordages et le déplacement des piliers dans un VG dilaté.",
    clinicalPearl: "\"Tenting\" mitral = Traction apicale des feuillets dans l'IM secondaire fonctionnelle."
  },
  {
    id: 'q-im-21',
    courseId: 'crs-im',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La prévention de l'endocardite infectieuse dans l'IM :",
    options: [
      "A. Est systématique par antibiothérapie quotidienne à vie.",
      "B. Est principalement basée sur une hygiène bucco-dentaire rigoureuse chez les patients porteurs de valvulopathie.",
      "C. N'est plus du tout d'actualité.",
      "D. Impose l'ablation des amygdales.",
      "E. Concerne uniquement les patients de plus de 80 ans."
    ],
    correctAnswers: [1],
    explanation: "L'hygiène bucco-dentaire rigoureuse et le suivi stomatologique régulier sont la clé de voûte de la prévention oslérienne.",
    clinicalPearl: "Prévention de l'endocardite : L'hygiène dentaire rigoureuse est le pilier n°1."
  },
  {
    id: 'q-im-22',
    courseId: 'crs-im',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un galop B3 à l'auscultation dans une IM évoque :",
    options: [
      "A. Une surcharge diastolique de volume du VG et une mauvaise tolérance hémodynamique.",
      "B. Une guérison spontanée de la fuite.",
      "C. Un rétrécissement aortique calcifié associé.",
      "D. Une hypertension artérielle pulmonaire isolée.",
      "E. Une excellente réserve contractile."
    ],
    correctAnswers: [0],
    explanation: "Le B3 est un bruit protodiastolique de remplissage ventriculaire rapide anormal, traduisant une surcharge volumique majeure et/ou une dysfonction ventriculaire gauche.",
    clinicalPearl: "Bruit de galop B3 dans l'IM = Surcharge volumique importante et signe de défaillance VG."
  },
  {
    id: 'q-im-23',
    courseId: 'crs-im',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'échocardiographie Doppler permet de quantifier l'IM par :",
    options: [
      "A. La surface de l'orifice régurgitant (SOR), le volume régurgité (VR) et la fraction de régurgitation.",
      "B. Uniquement la couleur du flux sur l'écran sans mesure.",
      "C. La mesure isolée de la fréquence cardiaque.",
      "D. La mesure de la troponine I.",
      "E. La radiographie pulmonaire."
    ],
    correctAnswers: [0],
    explanation: "La méthode PISA permet de calculer la SOR (sévère si ≥ 40 mm² en organique, ≥ 20 mm² en secondaire) et le volume régurgité (sévère si ≥ 60 mL).",
    clinicalPearl: "Critères IM organique sévère : SOR >= 40 mm² et Volume régurgité >= 60 mL."
  },
  {
    id: 'q-im-24',
    courseId: 'crs-im',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une cause fréquente d'IM dans le contexte algérien est :",
    options: [
      "A. Le rhumatisme articulaire aigu (RAA).",
      "B. La dégénérescence myxoïde pure exclusive.",
      "C. L'anomalie d'Ebstein systématique.",
      "D. La maladie de Fabry.",
      "E. La fibro-élastose endocardique."
    ],
    correctAnswers: [0],
    explanation: "Le RAA demeure une cause majeure de valvulopathies acquises chez les sujets jeunes en Algérie et dans les pays émergents.",
    clinicalPearl: "Contexte maghrébin : Le RAA reste la cause la plus fréquente de valvulopathie mitrale chez le sujet jeune."
  },
  {
    id: 'q-im-25',
    courseId: 'crs-im',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome infundibulo-pulmonaire à l'examen clinique recherche :",
    options: [
      "A. Une insuffisance cardiaque droite avec turgescence jugulaire, reflux hépato-jugulaire et hépatomégalie douloureuse.",
      "B. Une syncope réflexe simple.",
      "C. Un souffle carotidien bilatéral.",
      "D. Un ulcère cutané artériel.",
      "E. Une paraplégie flasque."
    ],
    correctAnswers: [0],
    explanation: "Ce syndrome décrit les signes d'insuffisance ventriculaire droite consécutifs à l'hypertension artérielle pulmonaire post-capillaire évoluée.",
    clinicalPearl: "Signes d'insuffisance cardiaque droite = Turgescence jugulaire, RHJ, hépatalgie, œdèmes des membres inférieurs."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-im-01',
    courseId: 'crs-im',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Monsieur Kada\nMonsieur Kada, 55 ans, se présente aux urgences pour dyspnée de repos et orthopnée d'apparition brutale. Il n'a pas d'antécédents cardiaques connus. À l'examen : TA 100/60 mmHg, FC 120/min, SpO2 88% en air ambiant. Auscultation cardiaque : souffle holosystolique intense au foyer mitral, galop B3. Auscultation pulmonaire : crépitants bilatéraux. ECG : rythme sinusal, pas d'hypertrophie. Radiographie thorax : cardiomégalie discrète, œdème alvéolaire bilatéral.\nQ1. Le diagnostic le plus probable est :\nQ2. La prise en charge immédiate initiale inclut :",
    options: [
      "A. Insuffisance mitrale aiguë (ex: rupture de cordage) / Diurétiques de l'anse IV, vasodilatateurs (si TA permise) et oxygénothérapie",
      "B. Insuffisance mitrale chronique décompensée / Bêta-bloquant IV à forte dose",
      "C. Rétrécissement mitral serré / Digitaliques d'emblée",
      "D. Infarctus du myocarde inférieur / Thrombolyse immédiate",
      "E. Myocardite aiguë / Ponction pleurale"
    ],
    correctAnswers: [0],
    explanation: "Le tableau d'OAP brutal sur cœur non dilaté (radiographie, ECG) est typique de l'IM aiguë par rupture de cordage. Le traitement médical de l'OAP est prioritaire, les bêta-bloquants étant contre-indiqués en phase aiguë de bas débit.",
    clinicalPearl: "OAP foudroyant + Souffle mitral + Cœur non dilaté = IM aiguë par rupture de cordage."
  },
  {
    id: 'cas-im-02',
    courseId: 'crs-im',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : Madame Leïla\nMadame Leïla, 70 ans, hypertensive, est suivie pour une cardiopathie ischémique. Elle rapporte une dyspnée d'effort progressive (NYHA II). ETT : VG dilaté (FE 40%), mouvement systolique restrictif, IM centrale grade 3/4 par \"tenting\" symétrique, anneau mitral dilaté.\nQ1. Le type d'IM est :\nQ2. La base du traitement étiologique est :",
    options: [
      "A. IM primitive / Chirurgie de remplacement immédiate",
      "B. IM secondaire ischémique / Traitement médical optimal de l'IC et revascularisation myocardique",
      "C. IM rhumatismale / Pénicilline seule",
      "D. IM par endocardite / Hémocultures",
      "E. IM aiguë / Diurétiques seuls"
    ],
    correctAnswers: [1],
    explanation: "L'association dysfonction VG ischémique, \"tenting\" et dilatation annulaire est caractéristique de l'IM secondaire ischémique chronique. Le traitement associe le traitement médical de l'IC et la revascularisation coronaire.",
    clinicalPearl: "IM secondaire ischémique = Maladie du myocarde (TMO de l'insuffisance cardiaque + revascularisation)."
  },
  {
    id: 'cas-im-03',
    courseId: 'crs-im',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : L'homme jeune avec prolapsus\nUn homme de 35 ans, sans antécédents, consulte pour des palpitations. L'ECG montre une fibrillation atriale. L'auscultation trouve un souffle mésosystolique suivi d'un claquement mésotélésystolique. L'ETT montre un prolapsus valvulaire mitral avec rupture de cordage et IM sévère excentrée.\nQ1. La maladie la plus probable est :\nQ2. La prise en charge thérapeutique la plus appropriée est :",
    options: [
      "A. Maladie de Barlow / Chirurgie de réparation mitrale (annuloplastie et résection/reconstruction de cordages)",
      "B. RAA / Traitement médical seul",
      "C. Endocardite / Cardioversion électrique immédiate sans anticoagulants",
      "D. IM ischémique / Pose de stent",
      "E. Maladie d'Ebstein / Ablation de la FA seule"
    ],
    correctAnswers: [0],
    explanation: "Le prolapsus avec souffle mésosystolique et clic est très évocateur de la maladie de Barlow. Une IM sévère devenue symptomatique (la FA étant un équivalent symptôme) est une excellente indication de chirurgie réparatrice mitrale.",
    clinicalPearl: "Maladie de Barlow avec IM sévère et FA = Plastie mitrale réparatrice (taux de succès > 95%)."
  },
  {
    id: 'cas-im-04',
    courseId: 'crs-im',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le jeune originaire de Blida\nMonsieur Ahmed, 28 ans, originaire de Blida, présente des arthralgies migratrices et une fièvre il y a 3 semaines. Il se plaint maintenant de dyspnée. Auscultation : souffle holosystolique FM, irradiation axillaire. L'ETT montre des feuillets mitrales épaissis avec rétraction, IM modérée.\nQ1. L'étiologie la plus probable est :\nQ2. La mesure préventive la plus importante à long terme est :",
    options: [
      "A. Endocardite infectieuse / Antibioprophylaxie dentaire à vie",
      "B. Rhumatisme articulaire aigu (RAA) / Prévention des récidives par pénicilline (Extencilline IM)",
      "C. Lupus érythémateux disséminé / Corticothérapie",
      "D. Traumatisme thoracique / Pose d'un pacemaker",
      "E. Dégénérescence myxoïde / Régime sans sel"
    ],
    correctAnswers: [1],
    explanation: "Le contexte d'arthrite et de fièvre chez un jeune adulte en Algérie évoque un RAA. La prévention secondaire des récidives par pénicilline retard (Extencilline) est capitale pour éviter l'aggravation des mutilations valvulaires.",
    clinicalPearl: "Cardite rhumatismale : Prophylaxie secondaire obligatoire par Extencilline IM toutes les 3-4 semaines."
  },
  {
    id: 'cas-im-05',
    courseId: 'crs-im',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : La femme âgée inopérable\nMme Fatima, 75 ans, présente une IM sévère sur maladie dégénérative. Son score STS est élevé à 12%. Elle est symptomatique (NYHA III) malgré un traitement médical optimal.\nQ1. La solution thérapeutique à privilégier est :",
    options: [
      "A. Chirurgie de remplacement valvulaire à cœur ouvert",
      "B. Abstention thérapeutique",
      "C. Traitement médical renforcé sans geste",
      "D. Correction percutanée par MitraClip",
      "E. Transplantation cardiaque"
    ],
    correctAnswers: [3],
    explanation: "Le MitraClip est une alternative validée pour les patients à haut risque chirurgical (STS élevé > 8%) présentant une anatomie favorable, permettant de réduire l'insuffisance mitrale sans les risques d'une sternotomie et d'une CEC.",
    clinicalPearl: "Patient récusé pour la chirurgie (STS > 8-10%) avec IM sévère symptomatique = MitraClip percutané."
  }
];
