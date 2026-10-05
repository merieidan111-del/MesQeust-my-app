import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 19: SUIVI DU MALADE ATTEINT DE CANCER - Pr Younsi Zaim
// ==========================================
export const HEMATO_LESSON_19_QUESTIONS: Question[] = [
  {
    id: 'q-hem-19-01',
    courseId: 'crs-hemato-19',
    questionNumber: 1,
    type: 'QCM',
    content: "L'objectif prioritaire de la surveillance médicale après traitement à visée curative d'un cancer solide est :",
    options: [
      "A) Dépister précocement une récidive locale ou métastatique à un stade accessible à un traitement curatif, et dépister les toxicités tardives",
      "B) Réaliser un scanner corps entier chaque semaine",
      "C) Dépister uniquement les infections bactériennes courantes",
      "D) Mesurer le groupe sanguin du patient",
      "E) Prescrire une nouvelle chimiothérapie préventive chez tous les patients"
    ],
    correctAnswers: [0],
    explanation: "La surveillance après traitement curatif a pour buts : 1. Diagnostiquer les rechutes loco-régionales et métastatiques à un stade asymptomatique potentiellement curable ; 2. Dépister et prendre en charge les séquelles et toxicités tardives des traitements (cardiaques, pulmonaires, seconds cancers) ; 3. Accompagner la réinsertion psycho-sociale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-02',
    courseId: 'crs-hemato-19',
    questionNumber: 2,
    type: 'QCM',
    content: "Le rythme de suivi standard après résection à visée curative d'un cancer solide (ex: cancer colorectal ou cancer du sein) est généralement :",
    options: [
      "A) Tous les 3 à 4 mois pendant les 2 à 3 premières années, puis tous les 6 mois jusqu'à 5 ans, puis annuel au-delà",
      "B) Une fois tous les 5 ans dès le début",
      "C) Tous les 15 jours à vie",
      "D) Uniquement si le patient se plaint de symptômes",
      "E) Arrêté définitivement à 6 mois de l'intervention"
    ],
    correctAnswers: [0],
    explanation: "Le pic de rechute des cancers solides se concentre dans les 2 à 3 premières années (environ 70 à 80% des récidives). Le suivi est donc rapproché (tous les 3-4 mois au début), puis espacé tous les 6 mois jusqu'à 5 ans, puis annuel.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-03',
    courseId: 'crs-hemato-19',
    questionNumber: 3,
    type: 'QCM',
    content: "Dans le cancer colorectal opéré à visée curative, quel marqueur tumoral sérique est dosé régulièrement dans la surveillance post-opératoire ?",
    options: [
      "A) L'Antigène Carcino-Embryonnaire (ACE)",
      "B) Le CA 15-3",
      "C) L'alpha-fœtoprotéine",
      "D) Le PSA",
      "E) La calcitonine"
    ],
    correctAnswers: [0],
    explanation: "Le dosage de l'ACE tous les 3 mois pendant les 3 premières années fait partie intégrante du suivi du cancer colorectal opéré : une élévation confirmée sur deux prélèvements successifs a une excellente valeur prédictive de récidive hépatique ou pulmonaire, justifiant un scanner TAP précoce.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-04',
    courseId: 'crs-hemato-19',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans la surveillance post-thérapeutique du cancer du sein, quel examen d'imagerie systématique annuel est OBLIGATOIRE et le seul ayant démontré une réduction de la mortalité par récidive ?",
    options: [
      "A) La mammographie bilatérale annuelle (associée à l'échographie mammaire)",
      "B) Le scanner TAP systématique tous les 6 mois",
      "C) Le TEP-scan annuel",
      "D) La scintigraphie osseuse tous les ans",
      "E) L'IRM cérébrale annuelle"
    ],
    correctAnswers: [0],
    explanation: "Dans le cancer du sein sans signe d'appel clinique, la mammographie annuelle (avec échographie) est le seul examen complémentaire systématique recommandé : il permet le diagnostic précoce des récidives locales et des seconds cancers du sein contro-latéral. Les bilans d'imagerie lourds (TDM, TEP, scintigraphie) ne sont pas recommandés en l'absence de symptômes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-05',
    courseId: 'crs-hemato-19',
    questionNumber: 5,
    type: 'QCM',
    content: "La définition médicale de la 'rémission complète' d'un cancer correspond à :",
    options: [
      "A) La disparition complète de tous les signes cliniques, biologiques et radiologiques décelables de la maladie tumorale",
      "B) L'absence définitive de risque de rechute à vie",
      "C) Une diminution de moitié de la taille tumorale",
      "D) Une survie globale supérieure à 1 an",
      "E) L'arrêt des chimiothérapies pour toxicité"
    ],
    correctAnswers: [0],
    explanation: "La rémission complète (ou réponse complète) est un état clinique où tous les examens disponibles redeviennent strictement normaux. Elle se distingue de la guérison, qui est un concept statistique affirmé après un délai sans rechute suffisant (généralement 5 ans pour de nombreuses tumeurs solides).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-06',
    courseId: 'crs-hemato-19',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans le suivi d'un patient traité par radiothérapie thoracique pour un cancer ou un lymphome, quel risque de second cancer radio-induit justifie un dépistage prolongé au-delà de 10 ans ?",
    options: [
      "A) Le cancer du sein chez la femme et les carcinomes broncho-pulmonaires",
      "B) L'adénocarcinome de la prostate",
      "C) Le rétinoblastome",
      "D) Le cancer du testicule",
      "E) Le carcinome hépatocellulaire"
    ],
    correctAnswers: [0],
    explanation: "Les cancers radio-induits surviennent avec un temps de latence long (10 à 20 ans après l'irradiation). L'irradiation thoracique expose à un sur-risque majeur de cancer du sein (dépistage mammographique annuel débuté 8 ans après la fin de la radiothérapie) et de cancer du poumon.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-07',
    courseId: 'crs-hemato-19',
    questionNumber: 7,
    type: 'QCM',
    content: "Le marqueur tumoral sérique spécifique utilisé pour surveiller l'absence de récidive après thyroïdectomie totale et irathérapie à l'Iode 131 pour un cancer thyroïdien différencié folliculaire ou papillaire est :",
    options: [
      "A) La Thyroglobuline (Tg) sérique (associée au dosage des anticorps anti-thyroglobuline)",
      "B) La Calcitonine",
      "C) L'ACE",
      "D) Le CA 19-9",
      "E) L'alpha-fœtoprotéine"
    ],
    correctAnswers: [0],
    explanation: "La thyroglobuline est synthétisée exclusivement par le tissu thyroïdien sain ou différencié. Après thyroïdectomie totale et destruction du reliquat par l'iode 131, la Tg doit être indétectable (< 0,2 ng/mL sous L-Thyroxine). Toute réascension de la Tg signe une récidive ganglionnaire ou métastatique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-08',
    courseId: 'crs-hemato-19',
    questionNumber: 8,
    type: 'QCM',
    content: "Dans le cancer du testicule non séminomateux, quels marqueurs tumoraux sériques sont suivis conjointement pour détecter une rechute précoce ?",
    options: [
      "A) L'Alpha-fœtoprotéine (AFP) et la sous-unité bêta de l'hormone chorionique gonadotrope (bêta-hCG)",
      "B) Le PSA et l'ACE",
      "C) Le CA 125 et le CA 15-3",
      "D) La calcitonine et la PTH",
      "E) La ferritine seule"
    ],
    correctAnswers: [0],
    explanation: "Dans les tumeurs germinales testiculaires non séminomateuses (TGNS), l'AFP et l'hCG totale/bêta-hCG (ainsi que les LDH) sont dosées à chaque consultation de suivi : leur cinétique d'élévation précède l'apparition visible des récidives au scanner.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-09',
    courseId: 'crs-hemato-19',
    questionNumber: 9,
    type: 'QCM',
    content: "Après résection endoscopique ou chirurgicale d'un adénome plan ou d'un cancer superficiel du côlon, quel examen est indispensable dans la surveillance ?",
    options: [
      "A) La coloscopie totale de contrôle (à 1 an puis à 3 ou 5 ans selon les constatations)",
      "B) Le lavement baryté mensuel",
      "C) Le scanner cérébral annuel",
      "D) L'échographie vésicale",
      "E) Le dosage de la troponine"
    ],
    correctAnswers: [0],
    explanation: "La coloscopie totale à 1 an (ou à 3-6 mois si la coloscopie initiale était incomplète) permet de vérifier la cicatrisation de l'anastomose et de dépister/réséquer de nouveaux polypes ou cancers métachrones sur le côlon restant.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-10',
    courseId: 'crs-hemato-19',
    questionNumber: 10,
    type: 'QCM',
    content: "Le syndrome de fatigue chronique post-cancer ('Cancer-Related Fatigue') est une plainte très fréquente qui s'améliore principalement grâce à :",
    options: [
      "A) La reprise précoce et régulière d'une Activité Physique Adaptée (APA) aérobie d'intensité modérée",
      "B) L'alitement prolongé et l'arrêt total d'exercice physique",
      "C) La prise continue de corticoïdes au long cours",
      "D) Des transfusions sanguines systématiques même sans anémie",
      "E) Des cures répétées de somnifères"
    ],
    correctAnswers: [0],
    explanation: "L'Activité Physique Adaptée (APA) est la seule intervention non médicamenteuse dont le niveau de preuve scientifique est formellement établi pour réduire de façon durable la fatigue post-cancer et diminuer le risque de récidive du cancer du sein et du côlon.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-11',
    courseId: 'crs-hemato-19',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans le suivi d'un patient sous hormonothérapie par Tamoxifène au long cours, quel examen gynécologique régulier est recommandé en cas de métrorragies ?",
    options: [
      "A) Échographie pelvienne endovaginale pour mesurer l'épaisseur de l'endomètre avec hystéroscopie et biopsie si épaississement",
      "B) Frottis cervico-vaginal seul",
      "C) Scanner thoraco-abdominal",
      "D) Dosage de l'estradiol",
      "E) Arrêt définitif de tout contrôle"
    ],
    correctAnswers: [0],
    explanation: "Le Tamoxifène possède un effet pro-œstrogénique sur l'endomètre, augmentant le risque d'hyperplasie, de polypes et d'adénocarcinome de l'endomètre. Toute métrorragie sous Tamoxifène impose une échographie endovaginale et une biopsie d'endomètre.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-12',
    courseId: 'crs-hemato-19',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans le suivi d'une patiente ménopausée traitée par inhibiteur de l'aromatase (Létrozole / Anastrozole), quel examen paraclinique osseux systématique doit être réalisé au départ puis tous les 2 ans ?",
    options: [
      "A) Une ostéodensitométrie biphotonique (DMO) pour dépister et traiter l'ostéoporose et le risque fracturaire",
      "B) Une scintigraphie osseuse au technétium",
      "C) Une radiographie du crâne",
      "D) Une IRM du fémur",
      "E) Un dosage de la phosphatase alcaline osseuse seul"
    ],
    correctAnswers: [0],
    explanation: "L'effondrement profond de l'œstrogénémie induit par les inhibiteurs de l'aromatase accélère la perte osseuse et majore le risque de fractures ostéoporotiques. Une DMO initiale est obligatoire avec supplémentation vitamino-calcique et introduction de biphosphonates si T-score < -2.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-13',
    courseId: 'crs-hemato-19',
    questionNumber: 13,
    type: 'QCM',
    content: "Le suivi après traitement curatif d'un cancer des voies aérodigestives supérieures (VADS lié au tabac et à l'alcool) doit comporter un examen ORL régulier et un scanner thoracique car :",
    options: [
      "A) Il existe un risque élevé (3 à 5% par an) de second cancer synchrone ou métachrone du poumon ou de l'œsophage par 'cancérisation de champ' muqueux",
      "B) La tumeur récidive constamment dans le rein",
      "C) Le patient ne peut plus déglutir",
      "D) Les cordes vocales disparaissent",
      "E) Le scanner thoracique remplace l'examen clinique ORL"
    ],
    correctAnswers: [0],
    explanation: "La notion de 'cancérisation de champ' (pan-exposition de l'ensemble de la muqueuse respiratoire et digestive supérieure au tabac et à l'alcool) explique le risque très élevé de développer un second cancer primitif de l'œsophage ou du poumon au cours du suivi.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-14',
    courseId: 'crs-hemato-19',
    questionNumber: 14,
    type: 'QCM',
    content: "La récidive biologique (ou récidive biochimique) après prostatectomie totale pour cancer de la prostate est définie par :",
    options: [
      "A) Deux élévations successives du PSA total au-dessus du seuil de 0,2 ng/mL",
      "B) Un PSA > 10 ng/mL",
      "C) Une douleur lombaire isolée",
      "D) Une élévation de l'urée",
      "E) Une anémie sans anomalie du PSA"
    ],
    correctAnswers: [0],
    explanation: "Après ablation totale de la prostate, le PSA doit s'effondrer et devenir indétectable (< 0,1 ng/mL). La récidive biologique précoce est affirmée par deux dosages successifs de PSA ≥ 0,2 ng/mL, permettant de discuter une radiothérapie prostatique de rattrapage avant toute lésion visible à l'imagerie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-19-15',
    courseId: 'crs-hemato-19',
    questionNumber: 15,
    type: 'QCM',
    content: "Le Programme Personnalisé de l'Après-Cancer (PPAC) remis au patient à la fin des traitements actifs a pour rôle principal de :",
    options: [
      "A) Résumer les traitements reçus, formaliser le calendrier de surveillance alternée entre oncologue et médecin traitant, et lister les soins de support adaptés (nutrition, APA, psychologue)",
      "B) Interdire au patient de reprendre son travail",
      "C) Programmer une nouvelle chimiothérapie d'office",
      "D) Remplacer le médecin généraliste",
      "E) Clôturer définitivement le dossier médical"
    ],
    correctAnswers: [0],
    explanation: "Le PPAC (Plan Cancer) est remis au patient lors de la consultation de fin de traitement : il détaille l'historique thérapeutique, planifie les consultations et examens de surveillance partagés avec le médecin traitant, et oriente vers les soins de support nécessaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-16',
    courseId: 'crs-hemato-19',
    questionNumber: 16,
    type: 'QCM',
    content: "La présence d'un lymphœdème secondaire du membre supérieur ('gros bras') après curage axillaire et radiothérapie du cancer du sein impose quelles précautions fondamentales ?",
    options: [
      "A) Éviter toute prise de sang, perfusion, injection ou prise de tension artérielle sur ce bras, et désinfecter immédiatement toute plaie ou griffure pour prévenir l'érysipèle",
      "B) Réaliser des saignées quotidiennes",
      "C) Poser un plâtre d'immobilisation",
      "D) Faire des ponctions évacuatrices du liquide lymphatique",
      "E) Masser énergiquement avec des ventouses"
    ],
    correctAnswers: [0],
    explanation: "Le bras homolatéral au curage axillaire présente un drainage lymphatique ralenti. Tout geste invasif majore l'œdème et expose au risque d'érysipèle infectieux (dermohypodermite aiguë streptococcique). Prélèvements, perfusions et brassards de tensiomètre y sont proscrits.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-17',
    courseId: 'crs-hemato-19',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans le suivi du mélanome cutané réséqué, quel geste d'éducation thérapeutique est capital pour le patient et ses proches ?",
    options: [
      "A) L'apprentissage de l'auto-examen cutané complet selon la règle ABCDE et la palpation des aires ganglionnaires régionales",
      "B) L'exposition solaire prolongée pour synthétiser de la vitamine D",
      "C) Le grattage régulier des nævus suspects",
      "D) L'arrêt des douches quotidiennes",
      "E) L'utilisation de cabines de bronzage UV"
    ],
    correctAnswers: [0],
    explanation: "L'auto-examen cutané régulier (selon la règle ABCDE : Asymétrie, Bords irréguliers, Couleur inhomogène, Diamètre > 6 mm, Évolution) et l'examen dermatologique annuel systématique sont fondamentaux pour détecter les récidives locales et de nouveaux mélanomes primitifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-18',
    courseId: 'crs-hemato-19',
    questionNumber: 18,
    type: 'QCM',
    content: "Un marqueur tumoral sérique dont le taux initial était élevé avant chirurgie et qui reste élevé ou réaugmente au cours du suivi :",
    options: [
      "A) Témoigne avec une très forte probabilité d'une persistance de maladie résiduelle ou d'une récidive métastatique précoce",
      "B) Signifie que le patient est guéri",
      "C) Est un artefact technique systématique sans valeur",
      "D) Doit être ignoré tant qu'il n'y a pas de douleur",
      "E) Permet de baisser la surveillance"
    ],
    correctAnswers: [0],
    explanation: "La cinétique d'ascension continue d'un marqueur tumoral initialement élevé est un signal d'alerte très sensible de récidive tumorale précoce, justifiant un bilan d'imagerie complet pour localiser la récidive avant l'apparition de symptômes cliniques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-19',
    courseId: 'crs-hemato-19',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans le cancer de l'ovaire opéré, quel marqueur tumoral sérique est le biomarqueur standard de surveillance de la récidive ?",
    options: [
      "A) Le CA 125",
      "B) Le PSA",
      "C) Le CA 15-3",
      "D) L'alpha-fœtoprotéine",
      "E) La chromogranine A"
    ],
    correctAnswers: [0],
    explanation: "Le CA 125 est le marqueur de référence des adénocarcinomes séreux de l'ovaire : sa normalisation après chirurgie et chimiothérapie est un critère de rémission, et sa réascension précède la récidive clinique de plusieurs mois.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-20',
    courseId: 'crs-hemato-19',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle séquelle gonadique définitive majeure de la chimiothérapie cytotoxique et de la radiothérapie pelvienne doit être surveillée chez les jeunes femmes en âge de procréer ?",
    options: [
      "A) Une insuffisance ovarienne prématurée (ménopause précoce avec aménorrhée et infertilité)",
      "B) Une polykystose ovarienne bilatérale réversible",
      "C) Une hyperfertilité paradoxale",
      "D) Un cancer du vagin systématique",
      "E) Une puberté retardée chez l'adulte"
    ],
    correctAnswers: [0],
    explanation: "Les agents alkylants (cyclophosphamide) et l'irradiation pelvienne détruisent le stock de follicules primordiaux ovariens, entraînant une ménopause précoce définitive avec aménorrhée, bouffées de chaleur, ostéoporose précoce et infertilité définitive.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-21',
    courseId: 'crs-hemato-19',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans le suivi d'un patient guéri d'un lymphome de Hodgkin traité dans l'enfance ou l'adolescence par chimiothérapie contenant des agents alkylants ou des étoposides, quel risque hématologique tardif doit être surveillé ?",
    options: [
      "A) Syndrome myélodysplasique secondaire et leucémie aiguë myéloïde (LAM) radio/chimio-induite",
      "B) Hémophilie constitutionnelle",
      "C) Thalassémie majeure",
      "D) Polykystose rénale",
      "E) Maladie de Minkowski-Chauffard"
    ],
    correctAnswers: [0],
    explanation: "Les chimiothérapies alkylantes et les inhibiteurs de la topoisomérase II (Étoposide) comportent un risque de leucémies aiguës secondaires (LAM chimio-induites) survenant 2 à 8 ans après le traitement, souvent précédées d'un syndrome myélodysplasique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-22',
    courseId: 'crs-hemato-19',
    questionNumber: 22,
    type: 'QCM',
    content: "Dans le cancer de la prostate traité par radiothérapie externe et curiethérapie, la toxicité tardive digestive se manifeste classiquement par :",
    options: [
      "A) Une rectite radique chronique (rectorragies, faux besoins, ténesme, télangiectasies de la muqueuse rectale)",
      "B) Une gastrite aiguë ulcéreuse",
      "C) Une hépatite fulminante",
      "D) Une appendicite aiguë récidivante",
      "E) Une achalasie du cardia"
    ],
    correctAnswers: [0],
    explanation: "La rectite radique chronique est une séquelle vasculaire de l'irradiation prostatique survenant 6 mois à 2 ans après le traitement, marquée par des rectorragies indolores liées aux néo-vaisseaux muqueux fragiles visibles en rectoscopie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-23',
    courseId: 'crs-hemato-19',
    questionNumber: 23,
    type: 'QCM',
    content: "Le suivi après résection complète d'un mélanome cutané d'épaisseur de Breslow > 1 mm comporte un examen clinique régulier de :",
    options: [
      "A) La cicatrice d'exérèse, de la peau adjacente (métastases en transit/satellitose), de l'ensemble du tégument et de l'aire ganglionnaire de drainage",
      "B) L'œil uniquement",
      "C) La formule sanguine seule",
      "D) La radiographie des genoux",
      "E) L'échographie vésicale"
    ],
    correctAnswers: [0],
    explanation: "L'examen clinique complet du tégument et de la cicatrice, la recherche de nodules de satellitose cutanée ou sous-cutanée et la palpation minutieuse de l'aire ganglionnaire régionale sont la base de la surveillance du mélanome.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-24',
    courseId: 'crs-hemato-19',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans le suivi au long cours d'un patient ayant reçu une irradiation cervico-médiastinale (Hodgkin ou cancer ORL), quelle atteinte endocrinienne fréquente justifie un dosage annuel de la TSH ?",
    options: [
      "A) Une hypothyroïdie périphérique primaire radio-induite",
      "B) Un diabète insipide",
      "C) Un hyperinsulinisme",
      "D) Une maladie d'Addison",
      "E) Une acromégalie"
    ],
    correctAnswers: [0],
    explanation: "L'irradiation cervicale détruit progressivement le tissu thyroïdien et induit une hypothyroïdie primaire chez 30 à 50% des patients dans les 5 à 10 ans suivant l'irradiation. Le dosage annuel de la TSH permet d'instaurer précocement la L-Thyroxine.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-25',
    courseId: 'crs-hemato-19',
    questionNumber: 25,
    type: 'QCM',
    content: "Quelle modalité d'évaluation de la qualité de vie du patient est de plus en plus intégrée dans les consultations de suivi en oncologie ?",
    options: [
      "A) Les Questionnaires d'Évaluation des Résultats Rapportés par les Patients (PROMs / Patient-Reported Outcome Measures, ex: EORTC QLQ-C30)",
      "B) L'échelle de Glasgow",
      "C) Le score de Rankin",
      "D) Le score d'Apgar",
      "E) Le score de Ranson"
    ],
    correctAnswers: [0],
    explanation: "Les PROMs (Patient-Reported Outcome Measures, comme le questionnaire EORTC QLQ-C30) évaluent directement par le patient lui-même son état physique, émotionnel, social et les symptômes résiduels (douleur, fatigue, sommeil), optimisant la personnalisation des soins de support.",
    difficulty: 'moyen'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-19-cs1',
    courseId: 'crs-hemato-19',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un homme de 58 ans opéré il y a 18 mois d'un adénocarcinome du sigmoïde classé pT3 N1 M0 (stade III) traité par colectomie R0 et chimiothérapie adjuvante par FOLFOX présente une ascension confirmée de l'ACE à 28 ng/mL (valeur de base post-opératoire = 1,8 ng/mL). Le patient est totalement asymptomatique, l'examen physique est normal.\n\nQuel examen morphologique prescrivez-vous en première intention pour localiser la récidive ?",
    options: [
      "A) Un scanner thoraco-abdomino-pelvien (TAP) injecté avec coupes fines hépatiques et thoraciques",
      "B) Une radiographie des sinus",
      "C) Une scintigraphie rénale",
      "D) Un myélogramme",
      "E) Une simple surveillance biologique à 6 mois sans imagerie"
    ],
    correctAnswers: [0],
    explanation: "Une élévation confirmée de l'ACE dans le suivi d'un cancer colorectal traduit une récidive tumorale (le plus souvent métastases hépatiques ou pulmonaires). Le scanner TAP injecté est l'examen de choix pour visualiser ces métastases à un stade potentiellement résécable chirurgicalement.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-cs2',
    courseId: 'crs-hemato-19',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Le scanner TAP retrouve une métastase hépatique unique de 2,5 cm du segment VI, parfaitement accessible à une hépatectomie partielle, sans autre lésion secondaire décelable. La TEP-TDM au FDG confirme l'absence de toute autre fixation anormale.\n\nQuelle est la stratégie thérapeutique à visée curative à proposer en RCP ?",
    options: [
      "A) Chirurgie d'exérèse de la métastase hépatique (résection R0) précédée ou suivie d'une chimiothérapie systémique péri-opératoire",
      "B) Soins palliatifs exclusifs sans chirurgie",
      "C) Chimiothérapie palliative continue jusqu'à progression",
      "D) Radiothérapie externe de tout le foie",
      "E) Abstention thérapeutique"
    ],
    correctAnswers: [0],
    explanation: "Dans le cancer colorectal, les métastases hépatiques résécables (ici métastase unique) doivent être réséquées chirurgicalement avec marges saines (R0). Cette approche à visée curative permet d'obtenir une survie à 5 ans supérieure à 40-50% voire la guérison définitive.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-cs3',
    courseId: 'crs-hemato-19',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une femme de 42 ans suivie depuis 6 ans après un traitement combiné (chimiothérapie, chirurgie, radiothérapie) pour un cancer du sein gauche se plaint d'une fatigue persistante et d'un essoufflement inhabituel à la montée d'un étage. La NFS retrouve une anémie macrocytaire profonde : Hb 6,4 g/dL, VGM 110 fL, PNN 900 / mm³, Plaquettes 65 000 / mm³. Le frottis sanguin montre des signes de dysgranulopoïèse avec polynucléaires hypolobés et dégranulés. La BOM met en évidence un syndrome myélodysplasique avec excès de blastes.\n\nQuelle est l'origine la plus probable de cette hémopathie ?",
    options: [
      "A) Syndrome myélodysplasique secondaire radio/chimio-induit tardif lié aux traitements antérieurs",
      "B) Carence martiale simple",
      "C) Hépatite virale B",
      "D) Récidive métastatique mammaire pure",
      "E) Anémie physiologique"
    ],
    correctAnswers: [0],
    explanation: "La survenue d'une pancytopénie avec dysplasie médullaire plusieurs années après une chimiothérapie cytotoxique (notamment agents alkylants et anthracyclines) ou radiothérapie correspond typiquement à un syndrome myélodysplasique ou une leucémie aiguë myéloïde secondaire radio/chimio-induite.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-19-cs4',
    courseId: 'crs-hemato-19',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 64 ans traité par prostatectomie radicale pour adénocarcinome de la prostate présentait un PSA indétectable (< 0,05 ng/mL) à 6 mois. Lors des contrôles de routine, le PSA est mesuré à 0,22 ng/mL puis à 0,28 ng/mL à 3 mois d'intervalle. Le toucher rectal est normal.\n\nQuel diagnostic portez-vous et quelle attitude thérapeutique de rattrapage est discutée ?",
    options: [
      "A) Récidive biologique (biochimique) précoce ; Radiothérapie de rattrapage de la loge prostatique",
      "B) Hypertrophie bénigne résiduelle ; Phytothérapie simple",
      "C) Infection urinaire banale ; Antibiothérapie de 3 jours",
      "D) Faux positif biologique à négliger",
      "E) Chimiothérapie palliative immédiate"
    ],
    correctAnswers: [0],
    explanation: "Deux valeurs successives de PSA ≥ 0,2 ng/mL signent la récidive biochimique après prostatectomie. Lorsque le PSA est encore très bas (< 0,5 ng/mL), une radiothérapie externe de la loge prostatique à visée de rattrapage permet d'obtenir un contrôle local durable chez la majorité des patients.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-19-cs5',
    courseId: 'crs-hemato-19',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Une femme de 32 ans guérie d'un lymphome de Hodgkin traité à l'âge de 20 ans par radiothérapie médiastinale en mantelet (36 Gy) et chimiothérapie ABVD vient vous voir pour organiser son suivi au long cours. Elle est parfaitement asymptomatique.\n\nQuel protocole de dépistage mammaire devez-vous impérativement planifier chez cette patiente ?",
    options: [
      "A) Dépistage annuel par IRM mammaire associée à une mammographie (et échographie) dès maintenant (au-delà de 8 à 10 ans après l'irradiation)",
      "B) Aucun dépistage avant l'âge de 50 ans du programme national",
      "C) Palpation simple tous les 5 ans",
      "D) Ponction systématique des deux seins",
      "E) Mammographie tous les 10 ans"
    ],
    correctAnswers: [0],
    explanation: "L'irradiation thoracique avant l'âge de 30 ans multiplie drastiquement le risque de cancer du sein radio-induit à long terme. La surveillance spécifique repose sur une IRM mammaire annuelle complétée par une mammographie/échographie débutée 8 à 10 ans après la fin de la radiothérapie (et au plus tard à 25-30 ans).",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_19_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-19-01',
    courseId: 'crs-hemato-19',
    type: 'resume',
    title: "Mind Map Synthèse : Suivi du Malade Atteint de Cancer",
    contentMarkdown: `# Mind Map : Suivi du Patient Cancéreux (Pr Younsi Zaim)

\`\`\`
                                  SURVEILLANCE POST-CANCER
                                             │
         ┌───────────────────────────────────┼───────────────────────────────────┐
         ▼                                   ▼                                   ▼
RYTHME DU SUIVI                      MARQUEURS TUMORAUX                  TOXICITÉS TARDIVES & RECONVERSION
- Rapproché : 2-3 premières années   - **Cancer Colorectal** : ACE       - Second cancer radio/chimio-induit :
  (tous les 3 à 4 mois)              - **Cancer de la Prostate** : PSA     * Sein (si radiothérapie médiastinale)
- Intermédiaire : jusqu'à 5 ans        (Récidive si > 0,2 ng/mL)           * LAM secondaire (alkylants/étoposide)
  (tous les 6 mois)                  - **Cancer de l'Ovaire** : CA 125   - Séquelles : Cardiaques, fertilité,
- Tardif : Annuel au-delà            - **Thyroïde opérée** : Tg            ostéoporose, lymphœdème
                                     - **Testicule** : AFP + hCG         - **Activité Physique Adaptée (APA)**
\`\`\`

## Définitions Clés :
1. **Rémission complète** : Disparition de toute trace décelable clinique, biologique et radiologique.
2. **Guérison** : Concept statistique où le risque de rechute rejoint celui de la population générale indemne (ex: 5 ans).
3. **Surveillance ciblée** : Pas d'examens d'imagerie lourds systématiques si absence de point d'appel (sauf mammographie annuelle dans le cancer du sein, et coloscopie dans le côlon).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-19-02',
    courseId: 'crs-hemato-19',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Surveillance Post-Thérapeutique",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Imagerie dans le cancer du sein asymptomatique** :
   - Le SEUL examen systématique annuel recommandé est la **mammographie bilatérale** (+/- échographie). Les scanners TAP, scintigraphies et TEP-scan systématiques sont formellement PROSCRITS en l'absence de symptômes.
2. **Récidive biologique du cancer de la prostate** :
   - Seuil de récidive après prostatectomie totale = **PSA ≥ 0,2 ng/mL** sur deux prélèvements successifs.
3. **Ascension isolée d'un marqueur tumoral** :
   - Une élévation continue de l'ACE ou du CA 125 doit faire déclencher un bilan d'imagerie complet même chez un patient asymptomatique.
4. **Second cancer après Hodgkin jeune** :
   - Toujours penser au **cancer du sein radio-induit** chez la jeune femme ayant reçu une irradiation médiastinale ➔ Dépistage par **IRM mammaire annuelle**.
5. **Prévention du 'Gros Bras'** :
   - Pas de perfusion, pas de prise de sang, pas de tensiomètre du côté opéré !`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 20: CLASSIFICATIONS & ÉCHELLES EN CANCÉROLOGIE - Dr N. Aklouche
// ==========================================
export const HEMATO_LESSON_20_QUESTIONS: Question[] = [
  {
    id: 'q-hem-20-01',
    courseId: 'crs-hemato-20',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans la classification TNM internationale (UICC / AJCC), la lettre 'N' évalue :",
    options: [
      "A) L'atteinte des ganglions lymphatiques régionaux (nombre ou localisation des relais ganglionnaires envahis)",
      "B) La taille de la tumeur primitive en centimètres",
      "C) La présence de métastases viscérales à distance",
      "D) Le grade histologique de différenciation nucléaire",
      "E) Le taux de nécrose tumorale"
    ],
    correctAnswers: [0],
    explanation: "La classification TNM évalue : T (Tumor : extension de la tumeur primitive), N (Nodes : envahissement des ganglions lymphatiques régionaux de N0 à N3), et M (Metastasis : métastases à distance M0 ou M1).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-02',
    courseId: 'crs-hemato-20',
    questionNumber: 2,
    type: 'QCM',
    content: "Quel préfixe est utilisé dans la classification TNM pour désigner le stade pathologique établi après examen histologique complet de la pièce opératoire chirurgicale ?",
    options: [
      "A) Le préfixe 'p' (pTNM)",
      "B) Le préfixe 'c' (cTNM)",
      "C) Le préfixe 'y' (ypTNM)",
      "D) Le préfixe 'r' (rTNM)",
      "E) Le préfixe 'u' (uTNM)"
    ],
    correctAnswers: [0],
    explanation: "cTNM = stade clinique pré-thérapeutique (imagerie/examen physique) ; pTNM = stade pathologique après chirurgie première ; ypTNM = stade pathologique après traitement néoadjuvant (chimio/radiothérapie) ; rTNM = stade d'une récidive.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-03',
    courseId: 'crs-hemato-20',
    questionNumber: 3,
    type: 'QCM',
    content: "Le préfixe 'y' (ex: ypT2 N0 M0) indique spécifiquement que la classification a été réalisée :",
    options: [
      "A) Après un traitement néoadjuvant (chimiothérapie ou radiothérapie pré-opératoire)",
      "B) Chez un sujet jeune de moins de 25 ans",
      "C) Lors d'une récidive métastatique tardive",
      "D) Sur une biopsie à l'aiguille",
      "E) En soins palliatifs exclusifs"
    ],
    correctAnswers: [0],
    explanation: "Le préfixe 'y' signale que la tumeur a été évaluée après une thérapie d'induction néoadjuvante (downstaging induit par la chimio ou radiothérapie).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-04',
    courseId: 'crs-hemato-20',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans l'échelle d'état général de l'ECOG / OMS (Performance Status), le grade 2 correspond à :",
    options: [
      "A) Patient incapable de travailler mais capable de se prendre en charge entièrement ; alité ou assis moins de 50% de la journée",
      "B) Patient totalement asymptomatique, capable de mener la même activité qu'avant la maladie",
      "C) Patient alité ou au fauteuil plus de 50% des heures de veille",
      "D) Patient grabataire dépendant complètement confiné au lit",
      "E) Patient décédé"
    ],
    correctAnswers: [0],
    explanation: "Échelle ECOG / OMS : Grade 0 = Activité normale sans restriction ; Grade 1 = Symptomatique mais ambulatoire, travail léger possible ; Grade 2 = Capable de tous ses soins personnels mais incapable de travailler, alité < 50% du temps de veille ; Grade 3 = Soins personnels limités, confiné au lit/fauteuil > 50% du temps ; Grade 4 = Grabataire total ; Grade 5 = Décès.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-05',
    courseId: 'crs-hemato-20',
    questionNumber: 5,
    type: 'QCM',
    content: "Dans l'indice de performance de Karnofsky (KPS), un score de 100% signifie :",
    options: [
      "A) État normal, aucun symptôme ni signe de maladie",
      "B) Patient nécessitant une assistance médicale permanente",
      "C) Patient hospitalisé en réanimation",
      "D) Patient alité en permanence",
      "E) Décès du patient"
    ],
    correctAnswers: [0],
    explanation: "L'indice de Karnofsky s'échelonne de 100% (parfaite santé, pas de plainte) à 0% (décès) par tranches de 10%. Un score de 70% équivaut environ à un ECOG 1-2 (capable de subvenir à ses besoins personnels).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-06',
    courseId: 'crs-hemato-20',
    questionNumber: 6,
    type: 'QCM',
    content: "Selon les critères d'évaluation de la réponse tumorale RECIST 1.1 (Response Evaluation Criteria in Solid Tumors), une 'Réponse Partielle' (RP) est définie par :",
    options: [
      "A) Une diminution d'au moins 30% de la somme des plus grands diamètres des lésions cibles par rapport à la valeur de référence initiale",
      "B) Une diminution d'au moins 10%",
      "C) La disparition complète de toutes les lésions",
      "D) Une augmentation de la taille tumorale",
      "E) La régression des seuls symptômes cliniques"
    ],
    correctAnswers: [0],
    explanation: "Critères RECIST 1.1 pour les lésions cibles : Réponse Complète (RC) = disparition de toutes les lésions et réduction des ganglions < 10 mm ; Réponse Partielle (RP) = diminution ≥ 30% de la somme des diamètres ; Progression (PD) = augmentation ≥ 20% (et ≥ 5 mm) de la somme ou apparition de nouvelles lésions ; Stabilité (SD) = variation intermédiaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-07',
    courseId: 'crs-hemato-20',
    questionNumber: 7,
    type: 'QCM',
    content: "Dans les critères RECIST 1.1, pour qu'un ganglion lymphatique soit considéré comme pathologique et sélectionnable comme lésion cible, son PETIT axe à l'imagerie TDM doit mesurer au minimum :",
    options: [
      "A) Au moins 15 mm (≥ 15 mm)",
      "B) Au moins 5 mm",
      "C) Au moins 30 mm",
      "D) N'importe quelle taille",
      "E) Moins de 2 mm"
    ],
    correctAnswers: [0],
    explanation: "Particularité de RECIST 1.1 pour les ganglions lymphatiques : on mesure le PETIT axe (axe court perpendiculaire au grand axe). Un ganglion est considéré comme lésion cible s'il mesure ≥ 15 mm sur son petit axe. Il est considéré comme normalisé en rémission complète si son petit axe devient < 10 mm.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-20-08',
    courseId: 'crs-hemato-20',
    questionNumber: 8,
    type: 'QCM',
    content: "Le phénomène de 'pseudo-progression' fréquemment observé sous immunothérapie par inhibiteurs de points de contrôle (anti-PD-1) correspond à :",
    options: [
      "A) Une augmentation initiale transitoire de la taille tumorale liée à l'afflux massif de lymphocytes T inflammatoires intratumoraux, suivie secondairement d'une régression tumorale",
      "B) Une véritable progression métastatique fulgurante irréversible",
      "C) Une erreur de mesure du radiologue",
      "D) Une métastase cutanée isolée",
      "E) Une infection bactérienne méconnue"
    ],
    correctAnswers: [0],
    explanation: "La pseudo-progression (observée dans 5 à 10% des cas sous immunothérapie) est due à l'infiltration lymphocytaire massive de la tumeur lors de la réactivation immunitaire. Elle a justifié la création des critères iRECIST (imRECIST) imposant une confirmation radiologique à 4-8 semaines avant de déclarer un échec thérapeutique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-09',
    courseId: 'crs-hemato-20',
    questionNumber: 9,
    type: 'QCM',
    content: "Dans les cancers du sein, le grade histopronostique d'Elston et Ellis (dérivé de Scarff-Bloom-Richardson, SBR) combine trois critères histopathologiques cotés de 1 à 3 points :",
    options: [
      "A) La différenciation glandulaire/tubulaire, le pléomorphisme nucléaire, et le nombre de mitoses (score de 3 à 9 points)",
      "B) La taille de la tumeur, la présence de nécrose et l'âge de la patiente",
      "C) Le statut des récepteurs hormonaux, le statut HER2 et le Ki-67",
      "D) Le nombre de ganglions envahis, l'embolie vasculaire et la fibrose",
      "E) L'expression de la cytokératine 5/6"
    ],
    correctAnswers: [0],
    explanation: "Le grade de Scarff-Bloom-Richardson modifié Elston-Ellis évalue : 1. Différenciation en structures tubulaires (1 à 3) ; 2. Pléomorphisme et atypies cytonucléaires (1 à 3) ; 3. Compte mitotique par champ (1 à 3). La somme définit le Grade I (3-5 pts, bien différencié), Grade II (6-7 pts, moyennement différencié), Grade III (8-9 pts, peu différencié).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-10',
    courseId: 'crs-hemato-20',
    questionNumber: 10,
    type: 'QCM',
    content: "Le score de Gleason dans l'adénocarcinome prostatique évalue :",
    options: [
      "A) L'architecture glandulaire en additionnant les deux motifs architecturaux les plus représentés (score historique de 2 à 10, aujourd'hui regroupé en 5 groupes pronostiques ISUP)",
      "B) Le taux sanguin de PSA et le volume de la prostate",
      "C) Le nombre de métastases osseuses au scanner",
      "D) La profondeur de l'invasion urétrale",
      "E) Le degré d'atypie des cellules basales"
    ],
    correctAnswers: [0],
    explanation: "Le score de Gleason additionne le grade architectural prédominant (1 à 5) et le deuxième contingent le plus abondant (1 à 5). La classification ISUP actuelle simplifie les scores en 5 groupes : Groupe 1 (Gleason 3+3=6), Groupe 2 (3+4=7), Groupe 3 (4+3=7), Groupe 4 (Gleason 8), Groupe 5 (Gleason 9-10).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-11',
    courseId: 'crs-hemato-20',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans la classification FIGO du cancer de l'endomètre et du cancer du col de l'utérus, le chiffre romain I désigne :",
    options: [
      "A) Une tumeur strictement limitée à l'organe d'origine (utérus ou col)",
      "B) Une tumeur étendue aux organes de voisinage (vessie, rectum)",
      "C) Une tumeur avec métastases à distance",
      "D) Une tumeur inopérable d'emblée",
      "E) Une rechute tumorale"
    ],
    correctAnswers: [0],
    explanation: "Dans les classifications FIGO gynécologiques : Stade I = tumeur strictement localisée à l'organe ; Stade II = extension locorégionale immédiate sans atteindre la paroi pelvienne ni le tiers inférieur du vagin ; Stade III = atteinte du tiers inférieur du vagin, de la paroi pelvienne ou des ganglions ; Stade IV = invasion des muqueuses vésicale/rectale ou métastases à distance.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-12',
    courseId: 'crs-hemato-20',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans le cancer broncho-pulmonaire, un Performance Status (PS ECOG) ≥ 2 ou 3 :",
    options: [
      "A) Est un facteur pronostique péjoratif majeur contre-indiquant le plus souvent les polychimiothérapies intensives lourdes à base de cisplatine",
      "B) Est une indication formelle à une lobectomie élargie",
      "C) N'influence en rien la prise en charge thérapeutique",
      "D) Signifie que le patient est totalement asymptomatique",
      "E) Autorise une radiothérapie corporelle totale"
    ],
    correctAnswers: [0],
    explanation: "Le Performance Status est l'un des déterminants majeurs de tolérance des traitements : les patients avec un PS ≥ 2 ont une mortalité toxique considérablement accrue sous chimiothérapies lourdes (bithérapie au cisplatine). On privilégie chez eux des monothérapies, des thérapies ciblées orales ou des soins de confort.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-13',
    courseId: 'crs-hemato-20',
    questionNumber: 13,
    type: 'QCM',
    content: "La classification de Breslow dans le mélanome cutané primitif mesure :",
    options: [
      "A) L'épaisseur tumorale maximale en millimètres au micromètre oculaire, depuis le sommet de la couche granuleuse de l'épiderme jusqu'à la cellule tumorale la plus profonde",
      "B) Le plus grand diamètre horizontal de la lésion en centimètres",
      "C) Le nombre de mitoses par centimètre carré",
      "D) Le niveau d'invasion des couches histologiques de Clark (I à V)",
      "E) Le taux de mélanine intracellulaire"
    ],
    correctAnswers: [0],
    explanation: "L'indice de Breslow (mesure micrométrique verticale continue en millimètres) est le facteur pronostique histologique majeur du mélanome cutané localisé, déterminant directement les marges d'exérèse chirurgicale définitive et l'indication du ganglion sentinelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-14',
    courseId: 'crs-hemato-20',
    questionNumber: 14,
    type: 'QCM',
    content: "Selon l'échelle de toxicité du NCI-CTCAE (Common Terminology Criteria for Adverse Events), le Grade 4 désigne :",
    options: [
      "A) Une toxicité menaçant le pronostic vital immédiat ('Life-threatening') imposant une intervention urgente",
      "B) Une toxicité bénigne asymptomatique ou légère (Grade 1)",
      "C) Une toxicité modérée avec limitation minime (Grade 2)",
      "D) Une toxicité sévère invalidante sans menace vitale immédiate (Grade 3)",
      "E) Le décès du patient lié à l'effet indésirable (Grade 5)"
    ],
    correctAnswers: [0],
    explanation: "Échelle CTCAE universelle en oncologie : Grade 1 = Léger/asymptomatique ; Grade 2 = Modéré ; Grade 3 = Sévère/invalidant ; Grade 4 = Conséquences menaçant le pronostic vital (urgence vitale) ; Grade 5 = Décès imputable à la toxicité.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-15',
    courseId: 'crs-hemato-20',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans l'évaluation de la réponse métabolique par TEP-TDM au 18F-FDG des lymphomes, les critères de Deauville comparent la fixation de la tumeur à deux organes de référence sains :",
    options: [
      "A) Le médiastin (bruit de fond vasculaire) et le foie (bruit de fond hépatique)",
      "B) Le cerveau et la rate",
      "C) Le rein et la vessie",
      "D) Le muscle psoas et l'os cortical",
      "E) Le poumon et le côlon"
    ],
    correctAnswers: [0],
    explanation: "L'échelle de Deauville (score 1 à 5) utilise : Score 1 = pas de fixation ; Score 2 = fixation ≤ médiastin ; Score 3 = fixation > médiastin mais ≤ foie ; Score 4 = fixation modérément supérieure au foie ; Score 5 = fixation très nettement supérieure au foie ou nouvelle lésion. Les scores 1 à 3 signent la réponse complète.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-20-16',
    courseId: 'crs-hemato-20',
    questionNumber: 16,
    type: 'QCM',
    content: "Le stade 'Tis' dans la classification TNM désigne :",
    options: [
      "A) Un carcinome in situ (lésion intra-épithéliale sans franchissement de la membrane basale, sans aucun potentiel métastatique)",
      "B) Une tumeur infiltrant la sous-muqueuse",
      "C) Une tumeur avec envahissement vasculaire",
      "D) Une tumeur volumineuse de plus de 10 cm",
      "E) Une métastase ganglionnaire unique"
    ],
    correctAnswers: [0],
    explanation: "Tis = Carcinoma in situ : prolifération maligne strictement confinée à l'épithélium n'ayant pas rompu la membrane basale. Par définition, en l'absence de contact avec les vaisseaux lymphatiques ou sanguins du chorion, le risque de métastase est rigoureusement nul.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-17',
    courseId: 'crs-hemato-20',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans les critères d'extension locorégionale du cancer du rectum, la mesure de la Marge Circonférentielle (CRM ou marge d'exérèse mésorectale) à l'IRM pelvienne pré-opératoire est considérée comme ENVAHIE ou menacée si elle est :",
    options: [
      "A) Inférieure ou égale à 1 mm (≤ 1 mm) du fascia recti",
      "B) Supérieure à 10 mm",
      "C) Strictement égale à 5 cm",
      "D) Non mesurable",
      "E) Négative"
    ],
    correctAnswers: [0],
    explanation: "La marge circonférentielle (distance entre le front tumoral le plus externe et le fascia recti délimitant le mésorectum) est le facteur prédictif majeur de récidive locale dans le cancer du rectum. Une marge ≤ 1 mm est dite menacée ou envahie et impose une radiochimiothérapie néoadjuvante.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-20-18',
    courseId: 'crs-hemato-20',
    questionNumber: 18,
    type: 'QCM',
    content: "La classification d'Astler-Coller et de Dukes historique du cancer colorectal a été remplacée par la classification TNM. Un stade Dukes C correspond dans la classification TNM à :",
    options: [
      "A) Tout T avec N+ M0 (Stade III : présence d'au moins un ganglion lymphatique régional envahi)",
      "B) T1 N0 M0 (Stade I)",
      "C) T3 N0 M0 (Stade II)",
      "D) M1 (Stade IV métastatique)",
      "E) Carcinome in situ (Stade 0)"
    ],
    correctAnswers: [0],
    explanation: "Correspondances historiques : Dukes A = T1-T2 N0 (Stade I) ; Dukes B = T3-T4 N0 (Stade II) ; Dukes C = tout T avec N1-N2 (Stade III avec atteinte ganglionnaire) ; Dukes D = M1 (Stade IV métastatique).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-19',
    courseId: 'crs-hemato-20',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans le cancer du rein, la classification pronostique de l'IMDC (International Metastatic RCC Database Consortium ou score de Heng) intègre :",
    options: [
      "A) Délai diagnostic-traitement < 1 an, Karnofsky < 80%, Hémoglobine < normale, Calcémie corrigée > normale, Neutrophiles > normale, Plaquettes > normale",
      "B) Taille de la tumeur et présence d'un thrombus cave",
      "C) Âge et sexe exclusivement",
      "D) Groupe sanguin et rhésus",
      "E) Pression artérielle diastolique"
    ],
    correctAnswers: [0],
    explanation: "Le score de Heng (IMDC) évalue 6 facteurs de risque clinicobiologiques dans le cancer du rein métastatique : délai < 1 an entre diagnostic et traitement systémique, KPS < 80%, anémie, hypercalcémie, neutrophilie et thrombocytose (stratification en groupe favorable 0 facteur, intermédiaire 1-2 facteurs, défavorable ≥ 3 facteurs).",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-20-20',
    courseId: 'crs-hemato-20',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans l'évaluation gériatrique en cancérologie, quel outil de dépistage rapide (score sur 17 points) permet d'identifier les patients âgés de 70 ans ou plus nécessitant une Évaluation Gériatrique Approfondie (EGA) ?",
    options: [
      "A) Le questionnaire G8 (seuil d'alerte ≤ 14/17)",
      "B) Le score de Glasgow",
      "C) Le score d'Alvarado",
      "D) Le score de Binet",
      "E) Le score de Gleason"
    ],
    correctAnswers: [0],
    explanation: "Le questionnaire G8 (Oncodage) comprend 8 questions explorant l'alimentation, la perte de poids, la mobilité, la neuropsychologie, l'IMC, la polymédication et l'âge. Un score G8 ≤ 14/17 identifie un patient âgé 'fragile' justifiant une évaluation gériatrique approfondie complète par un gériatre avant traitement.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-21',
    courseId: 'crs-hemato-20',
    questionNumber: 21,
    type: 'QCM',
    content: "La classification moléculaire intrinsèque du cancer du sein (classification de Perou et Sørlie) distingue 4 sous-types majeurs :",
    options: [
      "A) Luminal A, Luminal B, HER2-enrichi, et Triple-Négatif (Basal-like)",
      "B) Médullaire, Mucineux, Canalaire et Papillaire",
      "C) Stades I, II, III et IV",
      "D) Grades 1, 2, 3 et 4",
      "E) Centroblastique, Centrocytique, Lymphoïde et Plasmocytaire"
    ],
    correctAnswers: [0],
    explanation: "Les 4 sous-types moléculaires : Luminal A (RH+, HER2-, Ki-67 bas < 20%, excellent pronostic) ; Luminal B (RH+, HER2+/- mais Ki-67 élevé) ; HER2-enrichi (HER2+, RH-) ; Triple Négatif / Basal-like (RH-, HER2-, chimiosensible mais haut risque de rechute).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-22',
    courseId: 'crs-hemato-20',
    questionNumber: 22,
    type: 'QCM',
    content: "Le stade 'T4d' dans la classification TNM du cancer du sein correspond spécifiquement à :",
    options: [
      "A) Le carcinome inflammatoire du sein (mastite carcinomateuse avec peau d'orange et érythème touchant au moins un tiers du sein)",
      "B) Une tumeur de plus de 10 cm",
      "C) Une ulcération cutanée simple sans inflammation",
      "D) Une fixation au muscle grand pectoral sans atteinte cutanée",
      "E) Une métastase ganglionnaire sus-claviculaire"
    ],
    correctAnswers: [0],
    explanation: "T4a = invasion de la paroi thoracique ; T4b = ulcération cutanée ou nodules de perméation cutanés ; T4c = T4a + T4b ; T4d = Carcinome inflammatoire (aspect de mastite avec érythème chaud et peau d'orange sur plus d'un tiers de la glande mammaire liée à l'embolisation des lymphatiques dermiques).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-23',
    courseId: 'crs-hemato-20',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans les critères RECIST 1.1, quel est le nombre maximal de lésions cibles mesurables que l'on peut sélectionner au total dans tout l'organisme et par organe ?",
    options: [
      "A) 5 lésions cibles au total au maximum, et 2 lésions cibles au maximum par organe",
      "B) 10 lésions par organe",
      "C) Une seule lésion dans tout le corps",
      "D) 20 lésions au total",
      "E) Toutes les lésions sans aucune limite"
    ],
    correctAnswers: [0],
    explanation: "RECIST 1.1 limite le nombre de lésions cibles mesurables à un maximum de 5 lésions au total dans tout l'organisme, et un maximum de 2 lésions cibles par organe (les plus volumineuses et les plus faciles à mesurer de manière reproductible).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-20-24',
    courseId: 'crs-hemato-20',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans la classification des sarcomes des tissus mous, le système de grading histologique le plus utilisé au monde est le score de la :",
    options: [
      "A) FNCLCC (Fédération Nationale des Centres de Lutte Contre le Cancer)",
      "B) FIGO",
      "C) Duke University",
      "D) Mayo Clinic",
      "E) New York Heart Association"
    ],
    correctAnswers: [0],
    explanation: "Le système de la FNCLCC évalue 3 paramètres histologiques : la différenciation tumorale (1 à 3), l'index mitotique pour 10 champs (1 à 3) et l'étendue de la nécrose tumorale (0 à 2). La somme définit les grades 1, 2 ou 3.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-20-25',
    courseId: 'crs-hemato-20',
    questionNumber: 25,
    type: 'QCM',
    content: "Quelle classification pronostique est utilisée pour guider la prise en charge du cancer primitif du foie (carcinome hépatocellulaire, CHC) en intégrant la fonction hépatique sous-jacente ?",
    options: [
      "A) La classification BCLC (Barcelona Clinic Liver Cancer)",
      "B) Le score d'Elston-Ellis",
      "C) La classification d'Ann Arbor",
      "D) Le score de Gleason",
      "E) Le score IPSS"
    ],
    correctAnswers: [0],
    explanation: "La classification BCLC stratifie le CHC en 5 stades (0 très précoce, A précoce, B intermédiaire, C avancé, D terminal) en croisant la taille et le nombre de nodules tumoraux, la fonction hépatique sous-jacente (score de Child-Pugh) et le Performance Status, guidant directement le choix thérapeutique (ablation, résection, greffe, chimio-embolisation, atézolizumab-bévacizumab).",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-20-cs1',
    courseId: 'crs-hemato-20',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un homme de 66 ans sans antécédent consulte pour rectorragies. La coloscopie met en évidence une tumeur rectale à 7 cm de la marge anale. L'IRM pelvienne objective une lésion franchissant la musculeuse et infiltrant le mésorectum sur 6 mm, sans atteindre le fascia recti (marge circonférentielle CRM = 6 mm). Trois adénopathies rondes de plus de 8 mm sont visibles dans le mésorectum. Le scanner TAP ne retrouve aucune anomalie pulmonaire ou hépatique.\n\nQuel est le stade cTNM de ce cancer du rectum ?",
    options: [
      "A) cT3 N1 M0 (Stade III)",
      "B) cT1 N0 M0 (Stade I)",
      "C) cT2 N0 M0 (Stade I)",
      "D) cT4 N2 M1 (Stade IV)",
      "E) cTis N0 M0"
    ],
    correctAnswers: [0],
    explanation: "Invasion franchissant la musculeuse dans le mésorectum = T3. Trois ganglions régionaux mésorectaux suspects = N1 (1 à 3 ganglions = N1 ; ≥ 4 ganglions = N2). Absence de métastase à distance = M0. Il s'agit donc d'un cancer du moyen rectum cT3 N1 M0.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-cs2',
    courseId: 'crs-hemato-20',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Une patiente de 72 ans atteinte d'un adénocarcinome bronchique métastatique passe plus de la moitié de sa journée au lit ou dans un fauteuil en raison d'une dyspnée et de douleurs osseuses. Elle est néanmoins capable d'assurer seule sa toilette quotidienne et de s'alimenter sans l'aide de sa fille.\n\nQuel est le Performance Status (PS ECOG / OMS) de cette patiente ?",
    options: [
      "A) PS 2 (capable de subvenir à ses soins personnels mais alitée ou au fauteuil moins de 50% du temps de veille)",
      "B) PS 3 (confinée au lit ou au fauteuil plus de 50% des heures de veille, soins personnels limités)",
      "C) PS 0",
      "D) PS 1",
      "E) PS 4"
    ],
    correctAnswers: [1],
    explanation: "Dès lors que le patient passe plus de 50% de ses heures de veille alité ou au fauteuil ('plus de la moitié de sa journée'), il est classé PS 3 de l'ECOG/OMS. S'il était alité moins de 50% de la journée, il serait PS 2.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-cs3',
    courseId: 'crs-hemato-20',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un patient de 60 ans est traité par chimiothérapie pour un adénocarcinome gastrique métastatique au foie. Le scanner d'évaluation initial mesurait deux métastases cibles hépatiques : l'une à 40 mm et l'autre à 30 mm (somme des diamètres = 70 mm). Le scanner de réévaluation après 3 mois de chimiothérapie montre que la première mesure 25 mm et la seconde 15 mm (nouvelle somme = 40 mm). Aucune nouvelle lésion n'est apparue.\n\nSelon les critères RECIST 1.1, quelle est la réponse tumorale ?",
    options: [
      "A) Réponse Partielle (RP, car la diminution de la somme est de 43%, ce qui est ≥ 30%)",
      "B) Réponse Complète (RC)",
      "C) Stabilité tumorale (SD)",
      "D) Progression tumorale (PD)",
      "E) Ininterprétable"
    ],
    correctAnswers: [0],
    explanation: "La somme initiale est de 70 mm. La nouvelle somme est de 40 mm. La diminution est de (70 - 40) / 70 = 30 / 70 = 42,8% (soit > 30%). Selon RECIST 1.1, une baisse ≥ 30% de la somme des diamètres des lésions cibles sans nouvelle lésion définit une Réponse Partielle (RP).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-cs4',
    courseId: 'crs-hemato-20',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 78 ans atteint d'un cancer du côlon est évalué en consultation d'oncogériatrie. Le score G8 est calculé à 11/17 (score pathologique ≤ 14). L'évaluation gériatrique approfondie révèle une dénutrition modérée, des troubles cognitifs débutants (MMS à 22/30) et une polymédication avec 8 molécules quotidiennes dont deux sédatifs.\n\nQuelle est la conduite à tenir pré-thérapeutique recommandée ?",
    options: [
      "A) Mise en place d'un plan d'interventions gériatriques ciblées (rennutrition avec compléments hyperprotéinés, réévaluation/déprescription des médicaments iatrogènes, soutien social) et adaptation de la posologie de la chimiothérapie pour éviter les toxicités graves",
      "B) Refus absolu de tout traitement oncologique en raison de l'âge",
      "C) Chimiothérapie agressive à doses maximales sans rien modifier",
      "D) Hospitalisation définitive en long séjour sans chirurgie",
      "E) Remplacement de tous les repas par de l'eau"
    ],
    correctAnswers: [0],
    explanation: "Un score G8 ≤ 14 identifie les patients fragiles. L'intervention gériatrique personnalisée permet de corriger les facteurs de vulnérabilité réversibles (nutrition, iatrogénie, autonomie), permettant d'administrer un traitement anticancéreux adapté avec une sécurité et une efficacité optimisées.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-20-cs5',
    courseId: 'crs-hemato-20',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Une pièce d'exérèse de tumorectomie mammaire retrouve un carcinome canalaire infiltrant de 15 mm. L'examen histopathologique note : formation de tubes glandulaires dans 40% de la tumeur (2 points), atypies nucléaires modérées (2 points), et 4 mitoses par 10 champs (1 point). Les récepteurs aux œstrogènes sont positifs à 95%, le Ki-67 est à 10% et HER2 est négatif (0 en IHC).\n\nQuel est le grade histologique d'Elston-Ellis (SBR) et le sous-type moléculaire intrinsèque ?",
    options: [
      "A) Grade II d'Elston-Ellis (score 5 points) ; Sous-type Luminal A (RH+, HER2-, Ki-67 bas)",
      "B) Grade III ; Sous-type Triple Négatif",
      "C) Grade I ; Sous-type HER2 enrichi",
      "D) Grade I ; Sous-type Basal-like",
      "E) Carcinome in situ"
    ],
    correctAnswers: [0],
    explanation: "Score histologique : 2 (tubes) + 2 (atypies) + 1 (mitoses) = 5 points = Grade I (ou début Grade II selon les référentiels de champ ; 3-5 pts = Grade I). Avec RH fortement positifs, HER2 négatif et prolifération Ki-67 faible (10% < 20%), le profil moléculaire est typiquement un cancer de type Luminal A (de pronostic très favorable).",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_20_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-20-01',
    courseId: 'crs-hemato-20',
    type: 'resume',
    title: "Mind Map Synthèse : Classifications & Échelles en Cancérologie",
    contentMarkdown: `# Mind Map : Classifications & Échelles (Dr N. Aklouche)

\`\`\`
                                  ÉCHELLES & CLASSIFICATIONS EN ONCOLOGIE
                                                    │
         ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
         ▼                  ▼                       ▼                       ▼                  ▼
CLASSIFICATION TNM      PERFORMANCE STATUS      CRITÈRES RECIST 1.1     GRADES HISTOLOGIQUES   ONCOGÉRIATRIE
- **T** : Tumeur (T0-4) - **ECOG / OMS (0 à 4)** - **RC** : Disparition  - Sein : SBR /         - **Score G8** (≤ 14 =
- **N** : Ganglions     * 0 : Normal               complète               Elston-Ellis (1 à 3)    fragile ➔ EGA)
  régionaux (N0-3)      * 1 : Restreint effort   - **RP** : Baisse ≥ 30% - Prostate : Gleason /  - Prévention de la
- **M** : Métastases    * 2 : Alité < 50%        - **PD** : Hausse ≥ 20%   ISUP (1 à 5)           perte d'autonomie
- Préfixes : c (clin),  * 3 : Alité > 50%        - **SD** : Stabilité    - Mélanome : Breslow   - Adaptation des
  p (patho), y (néoadj) * 4 : Alité 100%         - iRECIST : Pseudo-     - Rein : Fuhrman/ISUP    doses de chimio
\`\`\`

## Résumé RECIST 1.1 :
1. **Lésions cibles** : Maximum 5 au total, maximum 2 par organe.
2. **Ganglion cible** : Mesuré sur son **PETIT AXE** (doit être ≥ 15 mm pour être cible).
3. **Réponse Partielle (RP)** : Baisse d'au moins 30% de la somme des diamètres.
4. **Progression (PD)** : Hausse d'au moins 20% (et ≥ 5 mm) ou nouvelle lésion.`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-20-02',
    courseId: 'crs-hemato-20',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Échelles Oncologiques",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Ganglions dans RECIST 1.1** :
   - On mesure le **PETIT AXE** du ganglion (pas le grand axe) ! Ganglion normalisé = petit axe < 10 mm.
2. **Préfixe 'y' dans TNM** :
   - 'y' (ex: ypT2 N0) = Stade établi **après traitement néoadjuvant** (chimiothérapie ou radiothérapie pré-opératoire).
3. **ECOG 2 vs ECOG 3** :
   - La frontière est le seuil de **50% du temps de veille alité ou au fauteuil**. Moins de 50% = ECOG 2 ; Plus de 50% = ECOG 3.
4. **Score G8 en oncogériatrie** :
   - Seuil pathologique : **Score G8 ≤ 14/17** ➔ Déclenche l'Évaluation Gériatrique Approfondie (EGA).
5. **Pseudo-progression sous Immunothérapie** :
   - Ne pas arrêter prématurément un anti-PD-1 sur une première progression radiologique si le patient va bien cliniquement ! Recontrôler à 4-8 semaines (iRECIST).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 21: BILAN PRÉ-THÉRAPEUTIQUE EN CANCÉROLOGIE
// ==========================================
export const HEMATO_LESSON_21_QUESTIONS: Question[] = [
  {
    id: 'q-hem-21-01',
    courseId: 'crs-hemato-21',
    questionNumber: 1,
    type: 'QCM',
    content: "En chirurgie oncologique, la différence fondamentale entre 'résécabilité' et 'opérabilité' est :",
    options: [
      "A) La résécabilité dépend des caractéristiques anatomiques et vasculaires de la tumeur, tandis que l'opérabilité dépend du terrain physiologique et des comorbidités du patient",
      "B) La résécabilité ne concerne que les métastases cérébrales",
      "C) L'opérabilité dépend uniquement du type histologique",
      "D) Les deux termes sont strictement synonymes",
      "E) L'opérabilité est mesurée par le radiologue"
    ],
    correctAnswers: [0],
    explanation: "La résécabilité est une notion anatomique tumorale (possibilité d'enlever toute la tumeur avec marges saines R0 sans léser d'organe vital non substituable). L'opérabilité est une notion liée au patient (capacité cardiovasculaire, respiratoire et rénale à supporter l'intervention chirurgicale et l'anesthésie générale).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-02',
    courseId: 'crs-hemato-21',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique d'un cancer de l'œsophage ou des voies aérodigestives supérieures (VADS), quel examen endoscopique supplémentaire est indispensable pour éliminer un cancer synchrone ?",
    options: [
      "A) Une panendoscopie des VADS et une trachéo-bronchoscopie (recherche d'une deuxième localisation tumorale synchrone par cancérisation de champ)",
      "B) Une coloscopie totale",
      "C) Une cystoscopie vésicale",
      "D) Une arthroscopie du genou",
      "E) Une rectosigmoïdoscopie"
    ],
    correctAnswers: [0],
    explanation: "En raison de l'intoxication alcoolo-tabagique chronique commune à tout le tractus aérodigestif supérieur ('cancérisation de champ'), 5 à 15% des patients présentent une deuxième tumeur synchrone de l'œsophage ou de l'arbre trachéo-bronchique, imposant une panendoscopie systématique au tube rigide sous AG.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-03',
    courseId: 'crs-hemato-21',
    questionNumber: 3,
    type: 'QCM',
    content: "Dans le bilan nutritionnel pré-thérapeutique en cancérologie, une dénutrition sévère est affirmée en présence de :",
    options: [
      "A) Une perte de poids ≥ 10% en 6 mois (ou ≥ 5% en 1 mois), ou un IMC < 18,5 kg/m² (ou < 21 chez le sujet âgé > 70 ans), ou une albuminémie < 30 g/L",
      "B) Une perte de poids de 1 kg en 1 an",
      "C) Une prise de poids de 5 kg",
      "D) Un IMC normal à 24",
      "E) Une ferritinémie élevée"
    ],
    correctAnswers: [0],
    explanation: "Critères HAS de dénutrition sévère chez l'adulte : perte de poids ≥ 10% en 6 mois (ou ≥ 5% en 1 mois), IMC < 18,5 kg/m² (< 21 chez le sujet ≥ 70 ans), ou albuminémie < 30 g/L. La dénutrition majore le risque d'infections post-opératoires, de fistule anastomotique et de toxicité de la chimiothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-04',
    courseId: 'crs-hemato-21',
    questionNumber: 4,
    type: 'QCM',
    content: "Avant toute exérèse pulmonaire majeure (lobectomie ou pneumonectomie) pour cancer bronchique, quelle exploration fonctionnelle est OBLIGATOIRE pour évaluer le volume expiratoire maximal post-opératoire prévisible (VEMS-ppo) ?",
    options: [
      "A) Les épreuves fonctionnelles respiratoires (EFR) avec spirométrie et mesure de la DLCO",
      "B) Un ECG d'effort seul",
      "C) Une radiographie du thorax de profil",
      "D) Un test à la sueur",
      "E) Une gazométrie au repos isolée"
    ],
    correctAnswers: [0],
    explanation: "Les EFR avec spirométrie (VEMS) et mesure de la DLCO permettent de calculer le VEMS post-opératoire prévisible (VEMS-ppo). Si le VEMS-ppo est < 30-40%, une épreuve d'effort cardio-respiratoire avec mesure de la VO2 max (seuil de sécurité > 15-20 mL/kg/min) est requise pour autoriser la chirurgie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-05',
    courseId: 'crs-hemato-21',
    questionNumber: 5,
    type: 'QCM',
    content: "Quel bilan bucco-dentaire est OBLIGATOIRE avant d'instaurer un traitement par biphosphonates puissants (Acide Zolédronique) ou Dénosumab pour métastases osseuses ?",
    options: [
      "A) Consultation stomatologique avec panoramique dentaire pour avulsion préventive de toutes les dents infectées/délabrées (prévention de l'ostéonécrose de la mâchoire)",
      "B) Blanchiment dentaire cosmétique",
      "C) Pose de facettes en céramique",
      "D) Aucun examen dentaire n'est requis",
      "E) Brossage au bicarbonate seul"
    ],
    correctAnswers: [0],
    explanation: "Les agents anti-résorptifs osseux puissants (biphosphonates IV et Dénosumab) exposent à un risque d'ostéonécrose des maxillaires (ONM), affection gravissime souvent déclenchée par une avulsion dentaire en cours de traitement. Une remise en état bucco-dentaire complète préalable avec cicatrisation muqueuse complète est indispensable.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-06',
    courseId: 'crs-hemato-21',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans le bilan pré-chimiothérapie avant d'administrer du 5-Fluorouracile (5-FU) ou de la Capécitabine, la recherche d'un déficit en quelle enzyme métabolique est devenue OBLIGATOIRE pour éviter des toxicités léthales ?",
    options: [
      "A) La Dihydropyrimidine Déshydrogénase (DPD), évaluée par le dosage de l'uracilémie plasmatique",
      "B) La lactico-déshydrogénase (LDH)",
      "C) La Glucose-6-Phosphate Déshydrogénase (G6PD)",
      "D) L'amylase salivaire",
      "E) La créatine phosphokinase (CPK)"
    ],
    correctAnswers: [0],
    explanation: "La DPD métabolise et inactive plus de 80% du 5-FU. En cas de déficit complet ou partiel en DPD (détecté par une uracilémie > 16 ng/mL), le 5-FU s'accumule massivement, provoquant des aplasies fébriles foudroyantes, des mucites nécrosantes et un décès toxique dans plus de 10-20% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-07',
    courseId: 'crs-hemato-21',
    questionNumber: 7,
    type: 'QCM',
    content: "Avant d'administrer une chimiothérapie à base d'Irinotécan (Campto), le dépistage de quel polymorphisme génétique hépatique permet de prédire un risque d'hématotoxicité sévère par surdosage ?",
    options: [
      "A) Le polymorphisme du gène UGT1A1 (UGT1A1*28, syndrome de Gilbert)",
      "B) La mutation JAK2",
      "C) Le statut HLA B27",
      "D) La mutation Leiden du facteur V",
      "E) Le polymorphisme de l'APOE4"
    ],
    correctAnswers: [0],
    explanation: "Le métabolite actif de l'irinotécan (SN-38) est glucuroconjugué par l'enzyme hépatique UGT1A1. Chez les patients homozygotes pour l'allèle UGT1A1*28 (déficit d'élimination du SN-38), le risque de neutropénie de grade 4 et de diarrhée foudroyante est considérablement accru, justifiant une réduction de dose.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-21-08',
    courseId: 'crs-hemato-21',
    questionNumber: 8,
    type: 'QCM',
    content: "Chez un jeune homme de 22 ans chez qui un cancer du testicule vient d'être diagnostiqué avant d'initier la chimiothérapie curative par BEP, quelle consultation est médico-légalement obligatoire ?",
    options: [
      "A) Consultation au CECOS pour autoconservation / cryopréservation de sperme",
      "B) Consultation de chirurgie esthétique",
      "C) Consultation d'homéopathie",
      "D) Consultation pour prothèse auditive",
      "E) Consultation de médecine du travail"
    ],
    correctAnswers: [0],
    explanation: "La chimiothérapie à base de sels de platine (Cisplatine) et d'agents alkylants entraîne une azoospermie souvent définitive. La proposition d'une cryoconservation de sperme au CECOS est une obligation déontologique et légale avant tout traitement anticancéreux chez l'homme jeune.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-09',
    courseId: 'crs-hemato-21',
    questionNumber: 9,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique d'un cancer de l'ovaire avancé (stade III ou IV), quel score scanographique ou laparoscopique permet d'évaluer la résécabilité de la carcinose péritonéale pour obtenir une cytoréduction complète sans résidu (R0) ?",
    options: [
      "A) Le score de Fagotti (ou score PCI de Sugarbaker)",
      "B) Le score de Glasgow",
      "C) Le score de Child-Pugh",
      "D) Le score de Mallampati",
      "E) Le score de Binet"
    ],
    correctAnswers: [0],
    explanation: "Le score de Fagotti (évalué par cœlioscopie exploratrice initiale) et l'indice de carcinose péritonéale (PCI de Sugarbaker) quantifient l'extension de la carcinose sur 13 régions abdominales pour décider entre une chirurgie de cytoréduction complète d'emblée ou une chimiothérapie néoadjuvante première.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-21-10',
    courseId: 'crs-hemato-21',
    questionNumber: 10,
    type: 'QCM',
    content: "Avant toute chimiothérapie contenant des anthracyclines (Doxorubicine) ou une thérapie ciblée anti-HER2 (Trastuzumab), quel examen paraclinique cardiaque est OBLIGATOIRE ?",
    options: [
      "A) Une échocardiographie transthoracique (ETT) ou une scintigraphie myocardique pour mesurer la fraction d'éjection ventriculaire gauche (FEVG)",
      "B) Une coronarographie systématique",
      "C) Une épreuve d'effort simple",
      "D) Un enregistrement Holter ECG de 24 heures",
      "E) Une IRM de l'aorte thoracique"
    ],
    correctAnswers: [0],
    explanation: "La mesure précise de la FEVG initiale (qui doit être ≥ 50-55%) est une condition médico-légale obligatoire avant d'administrer des molécules cardiotoxiques, servant de valeur de référence pour surveiller la tolérance myocardique au cours des cures.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-11',
    courseId: 'crs-hemato-21',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans le bilan pré-opératoire d'un cancer du côlon sans métastase évidente, quel examen d'imagerie thoraco-abdomino-pelvien est l'examen de référence universel pour le bilan d'extension ?",
    options: [
      "A) Le scanner TAP avec injection de produit de contraste iodé",
      "B) La radiographie pulmonaire de face seule",
      "C) L'échographie abdominale simple sans doppler",
      "D) La scintigraphie osseuse systématique",
      "E) Le lavement baryté en double contraste"
    ],
    correctAnswers: [0],
    explanation: "Le scanner thoraco-abdomino-pelvien (TAP) injecté avec balisage digestif est l'examen clé de référence du bilan d'extension initial du cancer colorectal, dépistant les métastases hépatiques, pulmonaires, péritonéales et ganglionnaires distantes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-12',
    courseId: 'crs-hemato-21',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique d'un cancer du col utérin invasif localement avancé (stade ≥ IB2 ou II), quelle modalité d'imagerie métabolique moderne est recommandée pour rechercher un envahissement ganglionnaire lombo-aortique (lombaire) ?",
    options: [
      "A) La TEP-TDM au 18F-FDG",
      "B) L'hystérographie",
      "C) La radiographie du bassin osseux",
      "D) L'urographie intraveineuse",
      "E) La scintigraphie thyroïdienne"
    ],
    correctAnswers: [0],
    explanation: "La TEP-TDM au FDG est le Gold Standard pour évaluer le statut ganglionnaire pelvien et lombo-aortique dans le cancer du col utérin localement avancé, déterminant le champ d'irradiation de la radiothérapie externe (irradiation pelvienne seule vs irradiation pelvienne et lombo-aortique étendue).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-13',
    courseId: 'crs-hemato-21',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique d'un mélanome cutané primitif d'épaisseur de Breslow de 0,5 mm sans ulcération (pT1a) :",
    options: [
      "A) Aucun bilan d'imagerie complémentaire n'est recommandé en dehors de l'examen clinique complet des téguments et des aires ganglionnaires",
      "B) Un scanner cérébral et un TEP-scan sont obligatoires",
      "C) Une biopsie ostéomédullaire est systématique",
      "D) Une échographie cardiaque est requise",
      "E) Une laparoscopie exploratrice est recommandée"
    ],
    correctAnswers: [0],
    explanation: "Pour les mélanomes minces (Breslow ≤ 0,8 mm sans ulcération = stade IA), le risque métastatique ganglionnaire ou viscéral est inférieur à 1-2%. Aucun bilan d'imagerie lourd n'est indiqué (pas de TEP, pas de scanner, pas de biopsie du ganglion sentinelle) ; seule la reprise chirurgicale avec marge de 1 cm est réalisée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-14',
    courseId: 'crs-hemato-21',
    questionNumber: 14,
    type: 'QCM',
    content: "Avant toute radiothérapie pelvienne ou prostatique, quelle préparation locale permet de protéger les organes à risque sains (rectum, grêle) et d'assurer la reproductibilité des séances ?",
    options: [
      "A) Un protocole strict de remplissage vésical (vessie pleine reproductible) et de vacuité rectale (ampoule rectale vide)",
      "B) La pose d'une sonde urinaire à demeure pendant 2 mois",
      "C) Un jeûne complet de 24 heures avant chaque séance",
      "D) Une anesthésie générale quotidienne",
      "E) L'ingestion de baryte pure"
    ],
    correctAnswers: [0],
    explanation: "Une vessie bien remplie refoule les anses de l'intestin grêle hors du champ d'irradiation pelvien, et un rectum vide assure la fixité anatomique de la prostate au cours des fractions quotidiennes, réduisant la toxicité digestive et urinaire tardive.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-21-15',
    courseId: 'crs-hemato-21',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique systématique d'une chimiothérapie contenant des agents alkylants hautement émétisants, la prescription d'antiémétiques préventifs doit être :",
    options: [
      "A) Débutée AVANT la perfusion de chimiothérapie (environ 30 à 60 minutes avant) pour bloquer les récepteurs avant la libération de sérotonine",
      "B) Donnée uniquement si le patient commence à vomir",
      "C) Administrée 48 heures après la fin de la cure",
      "D) Réservée aux personnes âgées de plus de 80 ans",
      "E) Remplacée par un verre d'eau glacée"
    ],
    correctAnswers: [0],
    explanation: "Règle universelle de cancérologie : les antiémétiques doivent être administrés en prophylaxie primaire, AVANT le début de la chimiothérapie. Il est infiniment plus difficile d'enrayer des nausées et vomissements déjà déclenchés que de les prévenir en saturant les récepteurs 5-HT3 et NK1 en amont.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-16',
    courseId: 'crs-hemato-21',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans le bilan pré-opératoire d'un phéochromocytome surrénalien, quelle préparation médicale pharmacologique est OBLIGATOIRE pendant 10 à 15 jours pour éviter un collapsus ou une poussée hypertensive mortelle au per-opératoire ?",
    options: [
      "A) Un blocage alpha-bloquant pré-opératoire (ex: Phénoxybenzamine ou Prazosine) associé à un régime normosodé et une réexpansion volémique, suivi secondairement d'un bêtabloquant si tachycardie",
      "B) Un bêtabloquant pur en première intention sans alpha-bloquant",
      "C) Des anticoagulants à dose curative",
      "D) De la morphine en perfusion continue",
      "E) Des diurétiques thiazidiques à forte dose"
    ],
    correctAnswers: [0],
    explanation: "Règle de sécurité absolue : dans le phéochromocytome, on débute TOUJOURS par un alpha-bloquant pour lever la vasoconstriction périphérique et restaurer la volémie. L'administration d'un bêtabloquant seul en premier est FORMELLEMENT MORTELLE (induit une vasoconstriction alpha-1 pure non freinée avec poussée hypertensive maligne foudroyante et OAP).",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-21-17',
    courseId: 'crs-hemato-21',
    questionNumber: 17,
    type: 'QCM',
    content: "Avant d'instaurer une immunothérapie par anticorps anti-PD-1 ou anti-CTLA-4, quel bilan biologique immunologique et endocrinien de référence doit être systématiquement réalisé ?",
    options: [
      "A) Bilan thyroïdien complet (TSH, T4 libre), cortisolémie matinale, glycémie à jeun, ionogramme avec calcémie et bilan hépatique complet (ALAT, ASAT, bilirubine)",
      "B) Uniquement une sérologie syphilitique",
      "C) Un dosage des réticulocytes seul",
      "D) Un typage HLA de classe II",
      "E) Un test de Schilling"
    ],
    correctAnswers: [0],
    explanation: "Les toxicités immuno-médiées touchent avec prédilection la thyroïde (dysthyroïdies dans 15-20%), l'hypophyse/surrénales, le foie et le pancréas endocrine. Un bilan initial complet est indispensable pour servir de valeur basale comparative avant chaque cure.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-18',
    courseId: 'crs-hemato-21',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique d'un cancer de la prostate localisé, quels sont les trois critères d'évaluation du risque pronostique selon la classification de d'Amico ?",
    options: [
      "A) Le stade clinique T (au toucher rectal), le taux sérique initial de PSA, et le score de Gleason biopsique",
      "B) L'âge, le poids et le volume prostatique",
      "C) Le nombre de mitoses, la créatinine et le tabagisme",
      "D) Le groupe sanguin, la kaliémie et l'urée",
      "E) La présence de pollakiurie nocturne"
    ],
    correctAnswers: [0],
    explanation: "La classification de d'Amico stratifie le cancer de la prostate en risque faible, intermédiaire ou élevé en croisant : le stade clinique cT (T1c-T2a vs T2b vs T2c-T3), le PSA initial (< 10 vs 10-20 vs > 20 ng/mL) et le score de Gleason (≤ 6 vs 7 vs 8-10). Elle détermine le choix entre surveillance active, chirurgie ou radiothérapie + hormonothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-19',
    courseId: 'crs-hemato-21',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique d'un cancer de l'estomac, quel examen d'imagerie endoscopique permet d'évaluer la profondeur de l'infiltration pariétale (stade T) et l'envahissement des ganglions périgastriques immédiats ?",
    options: [
      "A) L'écho-endoscopie œso-gastrique (EUS)",
      "B) La radiographie de l'abdomen sans préparation",
      "C) L'échographie abdominale sus-pubienne",
      "D) Le transit œso-gastro-duodénal baryté",
      "E) L'entéroscopie à double ballon"
    ],
    correctAnswers: [0],
    explanation: "L'écho-endoscopie haute est l'examen le plus précis pour distinguer les couches histologiques de la paroi gastrique (muqueuse, sous-muqueuse, musculeuse, séreuse) et visualiser les micro-adénopathies périgastriques, guidant l'indication d'une résection muqueuse endoscopique ou d'une chimiothérapie péri-opératoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-20',
    courseId: 'crs-hemato-21',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans le bilan pré-thérapeutique d'un cancer du sein, l'évaluation du statut HER2 se fait initialement par immunohistochimie (IHC). En cas de résultat équivoque (score IHC 2+), quelle technique de cytogénétique moléculaire est OBLIGATOIRE pour trancher ?",
    options: [
      "A) L'hybridation in situ en fluorescence (FISH) ou chromogénique (CISH) pour quantifier l'amplification du gène ERBB2",
      "B) Une nouvelle mammographie",
      "C) Un dosage du CA 15-3 sérique",
      "D) Un séquençage du gène p53",
      "E) Une échographie hépatique"
    ],
    correctAnswers: [0],
    explanation: "Score IHC 0 ou 1+ = HER2 négatif ; Score IHC 3+ = HER2 positif d'emblée. En cas de score intermédiaire IHC 2+ (douteux), la réalisation d'une FISH (recherche de l'amplification génique du locus HER2 par rapport au centromère du chromosome 17) est obligatoire pour déterminer si la patiente est éligible au Trastuzumab.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-21',
    courseId: 'crs-hemato-21',
    questionNumber: 21,
    type: 'QCM',
    content: "Chez un patient de 65 ans porteur d'une cirrhose Child A chez qui un nodule de carcinome hépatocellulaire (CHC) de 3 cm est découvert, quel examen invasif est traditionnellement contre-indiqué s'il est candidat à une résection curative immédiate ?",
    options: [
      "A) La biopsie du nodule tumoral (risque d'essaimage tumoral sur le trajet de l'aiguille dans 2 à 3% des cas, le diagnostic pouvant être affirmé de façon non invasive par l'imagerie dynamique IRM/scanner)",
      "B) L'IRM hépatique avec produit de contraste hépato-spécifique",
      "C) Le scanner hélicoïdal quadriphasique",
      "D) Le dosage de l'alpha-fœtoprotéine",
      "E) La fibroscopie œsogastrique"
    ],
    correctAnswers: [0],
    explanation: "Selon les critères internationaux de l'EASL, le diagnostic de CHC sur foie cirrotique repose sur des critères d'imagerie non invasifs stricts (wash-in artériel précoce + wash-out portal/tardif sur nodule > 1 cm). La biopsie percutanée est évitée si une résection ou transplantation d'emblée est planifiée, pour ne pas risquer d'essaimage tumoral pariétal.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-21-22',
    courseId: 'crs-hemato-21',
    questionNumber: 22,
    type: 'QCM',
    content: "Quel bilan infectieux sérologique pré-thérapeutique systématique doit être réalisé avant toute chimiothérapie immunosuppressive ou traitement par anti-CD20 (Rituximab) pour prévenir une hépatite fulminante mortelle par réactivation virale ?",
    options: [
      "A) Sérologies complètes du Virus de l'Hépatite B (Ag HBs, Ac anti-HBs, Ac anti-HBc)",
      "B) Sérologie de la toxoplasmose uniquement",
      "C) Sérologie de la rubéole",
      "D) Sérologie de la varicelle seule",
      "E) Recherche d'anticorps anti-rabiques"
    ],
    correctAnswers: [0],
    explanation: "Les anticorps anti-CD20 (Rituximab) et les chimiothérapies lourdes entraînent une réactivation du VHB chez les porteurs chroniques (Ag HBs+) et chez les porteurs guéris/occultes (Ag HBs- mais Ac anti-HBc+), pouvant causer une hépatite fulminante fatale. Une sérologie VHB complète initiale avec mise sous Entecavir ou Ténofovir prophylactique est obligatoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-23',
    courseId: 'crs-hemato-21',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans le bilan d'extension pré-opératoire d'un sarcome des tissus mous de la cuisse de haut grade (> 5 cm), quel examen d'imagerie à distance est impératif pour éliminer le premier site de dissémination métastatique ?",
    options: [
      "A) Le scanner thoracique sans et avec injection (dépistage des métastases pulmonaires)",
      "B) L'échographie pelvienne",
      "C) La radiographie du crâne",
      "D) La scintigraphie thyroïdienne",
      "E) Le lavement colique"
    ],
    correctAnswers: [0],
    explanation: "Les sarcomes des tissus mous ont une dissémination préférentiellement hématogène (plus de 80% des métastases se localisent au niveau du parenchyme pulmonaire). Le scanner thoracique haute résolution est l'examen clé incontournable du bilan d'extension.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-24',
    courseId: 'crs-hemato-21',
    questionNumber: 24,
    type: 'QCM',
    content: "La consultation d'annonce du cancer (dispositif obligatoire du Plan Cancer) s'articule en 4 temps successifs indispensables :",
    options: [
      "A) Un temps médical (annonce du diagnostic et stratégie), un temps soignant d'accompagnement (infirmière), un temps d'accès aux soins de support, et un temps d'articulation avec la médecine de ville",
      "B) Quatre séances de chimiothérapie successives",
      "C) Quatre consultations chirurgicales le même jour",
      "D) Un temps psychiatrique obligatoire sous contrainte",
      "E) Quatre bilans radiologiques"
    ],
    correctAnswers: [0],
    explanation: "Le dispositif d'annonce (mesure phare du Plan Cancer) garantit au patient : 1. Le temps médical d'annonce du diagnostic et du traitement validé en RCP ; 2. Le temps d'écoute par l'équipe soignante infirmière ; 3. L'accès aux soins de support (psychologue, assistante sociale, diététicienne) ; 4. La coordination avec le médecin traitant via le PPS.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-25',
    courseId: 'crs-hemato-21',
    questionNumber: 25,
    type: 'QCM',
    content: "Avant d'administrer une chimiothérapie par Bléomycine dans un lymphome ou cancer du testicule, quelle valeur des explorations fonctionnelles respiratoires (EFR) contre-indique formellement son emploi ?",
    options: [
      "A) Une capacité de diffusion du monoxyde de carbone (DLCO) effondrée à moins de 50% de la valeur théorique",
      "B) Une DLCO normale à 100%",
      "C) Une saturation à 99% à l'air libre",
      "D) Une capacité vitale augmentée",
      "E) Une absence de toux"
    ],
    correctAnswers: [0],
    explanation: "Une altération préexistante de la fonction alvéolo-capillaire avec DLCO < 50% de la valeur théorique contre-indique formellement la Bléomycine en raison du risque mortel de fibrose pulmonaire fulminante chimio-induite.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-21-cs1',
    courseId: 'crs-hemato-21',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un homme de 55 ans est programmé pour débuter une chimiothérapie adjuvante par Folfox (5-FU + Oxaliplatine) après résection d'un cancer du côlon stade III. L'oncologue prescrit le bilan sanguin pré-thérapeutique. Le résultat du dosage de l'uracilémie plasmatique revient à 32 ng/mL (valeur normale < 16 ng/mL ; déficit sévère si ≥ 150 ng/mL, intermédiaire entre 16 et 150 ng/mL).\n\nQuelle est la signification de ce résultat et quelle décision thérapeutique s'impose ?",
    options: [
      "A) Déficit partiel en Dihydropyrimidine Déshydrogénase (DPD) ; Réduction obligatoire d'au moins 50% de la dose initiale de 5-Fluorouracile pour éviter une toxicité hématologique et digestive potentiellement mortelle",
      "B) Résultat normal sans conséquence ; Administrer 100% de la dose de 5-FU",
      "C) Augmenter la dose de 5-FU de 50%",
      "D) Arrêter définitivement tout traitement anticancéreux",
      "E) Remplacer le 5-FU par du Cisplatine seul"
    ],
    correctAnswers: [0],
    explanation: "Une uracilémie ≥ 16 ng/mL signe un déficit en DPD. En cas de déficit partiel (16 à 150 ng/mL), les recommandations officielles imposent une réduction d'au moins 50% de la dose de 5-FU lors de la première cure, avec adaptation ultérieure selon la tolérance clinique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-cs2',
    courseId: 'crs-hemato-21',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Un homme de 62 ans gros fumeur (45 PA) sans antécédent cardiaque présente un adénocarcinome bronchique du lobe supérieur gauche sans extension métastatique (cT2a N0 M0). La chirurgie d'exérèse (lobectomie supérieure gauche avec curage médiastinal) est envisagée. La spirométrie retrouve : VEMS initial à 1,8 L (60% de la théorique). Le calcul du VEMS post-opératoire prévisible (VEMS-ppo) est de 32%.\n\nQuel examen fonctionnel cardiorespiratoire supplémentaire est indispensable pour valider l'opérabilité de ce patient ?",
    options: [
      "A) Une épreuve d'effort cardiorespiratoire maximale avec mesure de la consommation maximale d'oxygène (VO2 max)",
      "B) Une radiographie du thorax en inspiration/expiration",
      "C) Une scintigraphie osseuse au technétium",
      "D) Un enregistrement Holter de la pression artérielle",
      "E) Une bronchoscopie au bleu de méthylène"
    ],
    correctAnswers: [0],
    explanation: "Lorsque le VEMS-ppo ou la DLCO-ppo est intermédiaire (entre 30% et 60%), la mesure de la VO2 max lors d'une épreuve d'effort sur cycloergomètre est l'examen décisif : une VO2 max > 20 mL/kg/min (ou > 75%) autorise la lobectomie avec un faible risque de mortalité respiratoire post-opératoire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-21-cs3',
    courseId: 'crs-hemato-21',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une patiente de 52 ans atteinte d'un cancer du sein métastatique osseux doit recevoir une perfusion mensuelle d'acide zolédronique (Zométa). Lors de la consultation pré-thérapeutique, vous apprenez qu'elle présente deux molaires très cariées et douloureuses avec un abcès parodontal chronique.\n\nQuelle est votre conduite à tenir ?",
    options: [
      "A) Différer l'instauration du biphosphonate, adresser la patiente en urgence au stomatologue pour soins et avulsions dentaires nécessaires, et attendre la cicatrisation muqueuse complète (au moins 2 à 3 semaines) avant d'injecter le biphosphonate",
      "B) Injecter le biphosphonate immédiatement et extraire les dents le lendemain",
      "C) Donner un simple bain de bouche et perfuser le biphosphonate",
      "D) Remplacer le biphosphonate par du calcium à forte dose",
      "E) Arrêter définitivement tout traitement oncologique"
    ],
    correctAnswers: [0],
    explanation: "Le risque d'ostéonécrose de la mâchoire sous biphosphonates est maximal en cas de geste invasif dentaire sous traitement. Tous les soins dentaires invasifs doivent être impérativement terminés et parfaitement cicatrisés AVANT d'administrer la première dose de biphosphonate ou de dénosumab.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-cs4',
    courseId: 'crs-hemato-21',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 68 ans atteint d'un cancer de l'estomac avec sténose ulcéreuse présente un poids actuel de 58 kg pour une taille de 1,78 m (IMC = 18,3 kg/m²). Son poids habituel il y a 3 mois était de 70 kg (perte de 12 kg en 3 mois, soit 17%). L'albuminémie est mesurée à 24 g/L.\n\nQuelle est la qualification de son état nutritionnel et quelle prise en charge pré-opératoire s'impose ?",
    options: [
      "A) Dénutrition sévère majeure ; Mise en place d'une nutrition entérale (ou parentérale) pré-opératoire pendant au moins 7 à 14 jours avant l'intervention chirurgicale pour réduire la morbidité et la mortalité post-opératoires",
      "B) État nutritionnel satisfaisant ; Chirurgie le lendemain matin",
      "C) Obésité sarcopénique ; Régime hypocalorique strict",
      "D) Contre-indication définitive à toute chirurgie",
      "E) Perfusion de glucose à 5% seul pendant 24h"
    ],
    correctAnswers: [0],
    explanation: "Perte de poids > 10% en 6 mois (ici 17%), IMC < 18,5 et albumine < 30 g/L signent une dénutrition sévère gravissime. Selon les recommandations de la SFPEADA et de l'HAS, une rennutrition artificielle pré-opératoire pendant 7 à 14 jours est formellement requise pour restaurer l'immunité et la cicatrisation avant toute chirurgie carcinologique lourde.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-21-cs5',
    courseId: 'crs-hemato-21',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un patient de 48 ans atteint d'un lymphome B diffus à grandes cellules doit recevoir un protocole R-CHOP incluant du Rituximab. Le bilan sérologique hépatique initial retrouve : Ag HBs NÉGATIF, Ac anti-HBs NÉGATIF, Ac anti-HBc POSITIF. La charge virale plasmatique ADN-VHB est indétectable.\n\nQuelle est la conclusion biologique et quelle prescription prophylactique est indispensable avant de débuter le Rituximab ?",
    options: [
      "A) Porteur d'une infection B guérie ou résolue à haut risque de réactivation virale fulminante sous anti-CD20 ; Instauration obligatoire d'une prophylaxie antivirale préventive par Entecavir ou Ténofovir débutée avant la chimiothérapie et poursuivie au moins 12 à 18 mois après la dernière cure",
      "B) Patient non immunisé ; Vaccination immédiate contre l'hépatite B",
      "C) Hépatite B aiguë active ; Traitement par interféron",
      "D) Absence totale de risque de réactivation",
      "E) Contre-indication absolue et définitive au traitement du lymphome"
    ],
    correctAnswers: [0],
    explanation: "Un profil Ag HBs négatif avec Ac anti-HBc positif correspond à un contact ancien avec le VHB avec persistance de l'ADN circulaire covalent (cccDNA) intrahépatocytaire. Le Rituximab entraîne une perte du contrôle immunitaire et une réactivation foudroyante dans 20-30% des cas. Une prophylaxie par analogue nucléosidique (Entecavir/Ténofovir) est obligatoire pendant toute la durée du traitement et au moins 12 mois après.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_21_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-21-01',
    courseId: 'crs-hemato-21',
    type: 'resume',
    title: "Mind Map Synthèse : Bilan Pré-Thérapeutique en Cancérologie",
    contentMarkdown: `# Mind Map : Bilan Pré-Thérapeutique (Oncologie Médicale)

\`\`\`
                                  BILAN PRÉ-THÉRAPEUTIQUE EN CANCÉROLOGIE
                                                     │
         ┌──────────────────┬────────────────────────┼────────────────────────┬──────────────────┐
         ▼                  ▼                        ▼                        ▼                  ▼
EXTENSION TUMORALE     OPÉRABILITÉ DU TERRAIN    ÉVALUATION NUTRITIONNELLE  SÉCURITÉ PHARMACO    PRÉSERVATION & SOINS
- Scanner TAP injecté  - Cardio : ETT (FEVG      - Dénutrition sévère :     - **Déficit en DPD** - CECOS : Sperme/Ovocyte
- TEP-TDM au 18-FDG      si Anthracyclines/        * Perte poids > 10% en     (Uracilémie >16ng)   avant chimio cytotoxique
- IRM selon organe       Trastuzumab ≥ 50%)        6 mois ou > 5% en 1 mois   ➔ 5-FU toxique !   - Stomato : Dents saines
  (Cerveau, Rectum)    - Respiratoire : EFR      * IMC < 18,5 (< 21 si >70) - Sérologie VHB        avant biphosphonates
- Biopsies avec          (VEMS-ppo > 30-40%,     * Albumine < 30 g/L          (AgHBs, Ac antiHBc)  (anti-ostéonécrose !)
  histologie et NGS      VO2 max > 15-20)        ➔ Rennutrition 7-14j       ➔ Entecavir si profil - Consultation d'annonce
                         - Oncogériatrie : G8      avant chirurgie !          à risque sous anti-CD20  en 4 temps
\`\`\`

## Différence Capitale :
- **Résécabilité** = Critère tumoral anatomique (marges saines R0 possibles ?).
- **Opérabilité** = Critère patient physiologique (le patient survivra-t-il à l'anesthésie et à l'exérèse ?).`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-21-02',
    courseId: 'crs-hemato-21',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Bilan Pré-Thérapeutique",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Uracilémie & DPD** :
   - Dépistage obligatoire avant TOUTE administration de **5-FU** ou **Capécitabine**. Uracilémie ≥ 16 ng/mL = réduction de dose d'au moins 50% !
2. **Biphosphonates & Dents** :
   - Remise en état bucco-dentaire préalable complète impérative pour prévenir l'**ostéonécrose de la mâchoire**.
3. **FEVG avant Anthracyclines** :
   - FEVG initiale obligatoire (doit être ≥ 50%).
4. **VHB et Rituximab** :
   - Même si Ag HBs négatif, si les **Ac anti-HBc sont positifs**, le patient risque une réactivation foudroyante mortelle ➔ **Entecavir prophylactique obligatoire**.
5. **CECOS** :
   - Préservation de la fertilité à proposer systématiquement à tout patient jeune avant tout traitement gonadotoxique.`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];
