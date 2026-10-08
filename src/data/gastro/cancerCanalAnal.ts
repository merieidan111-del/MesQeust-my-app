import { Question, CourseResource } from '../../types/medical';

export const CANCER_CANAL_ANAL_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Cancers du Canal Anal (4ème année Médecine)
  // -------------------------------------------------------------
  {
    id: 'q-anal-01',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel énoncé concernant l’épidémiologie du cancer du canal anal est exact ?",
    options: [
      "Il représente plus de 5 % des cancers digestifs en Algérie.",
      "L’âge médian au diagnostic se situe entre 40 et 50 ans.",
      "Il prédomine chez l’homme, avec un sex-ratio H/F de 3/1.",
      "L’incidence mondiale est d’environ 50 000 nouveaux cas par an.",
      "Le tabagisme est un facteur protecteur."
    ],
    correctAnswers: [3],
    explanation: "La réponse exacte est D. L'incidence mondiale est estimée à environ 50 000 nouveaux cas par an. Rappel : Le cancer du canal anal représente < 2 % des cancers digestifs (A faux), l'âge médian est 60-65 ans (B faux), prédominance féminine F/H 1,5–3 (C faux), et le tabagisme est un facteur de risque majeur (E faux).",
    clinicalPearl: "Le cancer du canal anal représente < 2% des cancers digestifs, prédomine chez la femme (F/H 1,5-3), avec environ 50 000 nouveaux cas mondiaux/an."
  },
  {
    id: 'q-anal-02',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les facteurs de risque suivants, lequel n'est pas reconnu comme majeur dans le cancer du canal anal ?",
    options: [
      "Infection à HPV-16 et HPV-18.",
      "Tabagisme actif.",
      "Antécédent de cancer du col utérin.",
      "Sérologie HIV positive.",
      "Alimentation riche en fibres."
    ],
    correctAnswers: [4],
    explanation: "E est la bonne réponse. Une alimentation riche en fibres n'est pas un facteur de risque du cancer du canal anal ; au contraire, elle est souvent associée à un effet protecteur vis-à-vis des cancers colorectaux. Piège : HIV+, HPV, tabac et antécédents gynécologiques sont des facteurs de risque bien établis.",
    clinicalPearl: "Facteurs de risque cardinaux : HPV (16/18), VIH+, tabagisme actif, rapports réceptifs anaux et antécédents de néoplasie génitale."
  },
  {
    id: 'q-anal-03',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Concernant le drainage lymphatique du canal anal, quelle affirmation est correcte ?",
    options: [
      "La partie proximale (au-dessus de la ligne pectinée) draine vers les ganglions inguinaux superficiels.",
      "La partie distale (au-dessous de la ligne pectinée) draine principalement vers les ganglions iliaques internes.",
      "La partie proximale draine vers les ganglions iliaques internes et obturateurs.",
      "Le drainage est exclusivement unilatéral homolatéral à la lésion.",
      "Il n'existe pas de drainage vers les ganglions inguinaux."
    ],
    correctAnswers: [2],
    explanation: "C est exacte. La partie proximale (au-dessus de la ligne pectinée) draine vers les ganglions iliaques internes, obturateurs et hypogastriques. À retenir : La partie distale draine vers les ganglions inguinaux superficiels (A et E faux). Le drainage peut être bilatéral (D faux).",
    clinicalPearl: "Drainage lymphatique anal : Au-dessus de la ligne pectinée -> pelvien (iliaques internes) ; Au-dessous -> inguinaux superficiels."
  },
  {
    id: 'q-anal-04',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel type histologique représente plus de 90 % des cancers du canal anal ?",
    options: [
      "Adénocarcinome.",
      "Carcinome épidermoïde.",
      "Mélanome malin.",
      "Carcinome cloacogénique (basaloïde).",
      "Sarcome."
    ],
    correctAnswers: [1],
    explanation: "B. Le carcinome épidermoïde (kératinisant ou non) représente + 90 % des cas. Nuance : Les carcinomes cloacogéniques (transitionnels/basaloïdes) représentent environ 10 %, les adénocarcinomes 8 % et les mélanomes sont exceptionnels (<1%).",
    clinicalPearl: "Carcinome épidermoïde malpighien = > 90 % des cancers du canal anal."
  },
  {
    id: 'q-anal-05',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe clinique le plus fréquemment révélateur d’un cancer du canal anal ?",
    options: [
      "Abcès périnéal fébrile.",
      "Rectorragie (40–50 %).",
      "Fistule anale chronique.",
      "Incontinence anale d’emblée.",
      "Douleur abdominale diffuse."
    ],
    correctAnswers: [1],
    explanation: "B. La rectorragie est le signe le plus fréquent (40 à 50 % des cas). Piège : Les symptômes sont souvent non spécifiques (fissure, hémorroïdes, abcès) et peuvent entraîner un retard diagnostique. L’incontinence ou la fistule recto-vaginale traduisent une lésion déjà avancée.",
    clinicalPearl: "Rectorragies dans 40-50% des cas, souvent confondues à tort avec une pathologie hémorroïdaire banale."
  },
  {
    id: 'q-anal-06',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’examen de référence pour le diagnostic histologique du cancer du canal anal est :",
    options: [
      "L’IRM pelvienne.",
      "L’échographie endo-anale.",
      "La coloscopie totale.",
      "L’anuscopie avec biopsies profondes multiples.",
      "Le PET-scan."
    ],
    correctAnswers: [3],
    explanation: "D. L’anuscopie avec biopsies profondes multiples est l’examen clé pour le diagnostic histologique. Rappel : L’IRM et l’échographie endo-anale évaluent l’extension locorégionale, mais ne font pas le diagnostic histologique. La coloscopie recherche des lésions synchrones.",
    clinicalPearl: "Anuscopie avec biopsies profondes multiples sous anesthésie locale ou générale si douleur vive."
  },
  {
    id: 'q-anal-07',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour le bilan d’extension à distance d’un cancer du canal anal, l’examen de première intention est :",
    options: [
      "L’IRM pelvienne.",
      "Le PET-scan.",
      "La TAP (thoraco-abdomino-pelvienne).",
      "L’échographie endo-anale.",
      "La sérologie HIV."
    ],
    correctAnswers: [2],
    explanation: "C. La TAP est l’examen de référence pour la recherche de métastases à distance (foie, poumon, os). À savoir : Le PET-scan est utile pour rechercher des ganglions non suspects à l’IRM ou pour réévaluer, mais n’est pas de première intention.",
    clinicalPearl: "Scanner TAP injecté = Examen de 1ère intention pour le bilan métastatique (foie, poumon, ganglions rétro-péritonéaux)."
  },
  {
    id: 'q-anal-08',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le carcinome cloacogénique (ou basaloïde) du canal anal :",
    options: [
      "Est le sous-type le plus fréquent (> 80 %).",
      "Naît de la muqueuse malpighienne.",
      "Naît de la muqueuse transitionnelle et peut avoir un risque métastatique plus élevé.",
      "Est totalement radio-résistant.",
      "Se présente exclusivement sous forme bourgeonnante."
    ],
    correctAnswers: [2],
    explanation: "C. Le carcinome cloacogénique naît de la muqueuse transitionnelle ; il est radiosensible mais son pronostic est grevé d’un risque métastatique plus important que l’épidermoïde classique. À retenir : Il représente environ 10 % des cas (A faux) et reste radiosensible (D faux).",
    clinicalPearl: "Carcinome cloacogénique / basaloïde : Naît de la zone transitionnelle, radiosensible mais potentiel métastatique accru."
  },
  {
    id: 'q-anal-09',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de référence pour les tumeurs localement évoluées (T2–T4) du canal anal est :",
    options: [
      "L’amputation abdomino-périnéale d’emblée.",
      "La radiothérapie exclusive.",
      "La radiochimiothérapie concomitante.",
      "La chimiothérapie exclusive.",
      "La chirurgie locale seule."
    ],
    correctAnswers: [2],
    explanation: "C. La radiochimiothérapie concomitante (5-FU + Mitomycine ou 5-FU + Cisplatine) est le traitement de référence pour les tumeurs localement évoluées. Contexte : La chirurgie (AAP) est réservée aux échecs, aux tumeurs non répondantes ou aux complications invalidantes.",
    clinicalPearl: "Radiochimiothérapie concomitante selon Nigro = Traitement conservateur de référence préservant le sphincter anal."
  },
  {
    id: 'q-anal-10',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’amputation abdomino-périnéale (AAP) est indiquée dans toutes les situations suivantes sauf :",
    options: [
      "Échec du traitement conservateur (radiochimiothérapie).",
      "Absence de réponse à la radiochimiothérapie.",
      "Tumeur T1N0 de la marge anale résécable avec marges saines.",
      "Nécrose anale après radiochimiothérapie.",
      "Fistule recto-vaginale persistante."
    ],
    correctAnswers: [2],
    explanation: "C. Une tumeur T1N0 de la marge anale résécable avec marges saines relève d’une exérèse chirurgicale locale, et non d’une AAP d’emblée. Rappel : L’AAP est un recours en cas d’échec du traitement conservateur ou de complications sévères.",
    clinicalPearl: "AAP de sauvetage : Réservée aux reliquats évolutifs, récidives locales après RCT ou nécroses radiques majeures."
  },
  {
    id: 'q-anal-11',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La dose recommandée en radiothérapie conformationnelle (RCMI) pour le pelvis et les aires ganglionnaires est de :",
    options: [
      "30 Gy en 5 séances.",
      "45 à 50 Gy (1,8–2 Gy/séance).",
      "70 Gy en fractionnement hyperfractionné.",
      "20 Gy en dose unique.",
      "15 Gy en curiethérapie exclusive."
    ],
    correctAnswers: [1],
    explanation: "B. La dose recommandée est de 45 à 50 Gy en fractionnement classique (1,8–2 Gy/séance) sur le pelvis et les aires ganglionnaires. Complément : Un boost de 15 à 20 Gy est délivré sur la tumeur résiduelle, portant la dose totale à environ 65 Gy.",
    clinicalPearl: "Dose pelvienne et ganglionnaire prophylactique = 45 à 50 Gy, complétée par un boost tumoral jusqu'à 60-65 Gy."
  },
  {
    id: 'q-anal-12',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "La curiethérapie interstitielle dans le cancer du canal anal est particulièrement indiquée pour :",
    options: [
      "Les tumeurs étendues à toute la circonférence avec envahissement vaginal.",
      "Les tumeurs limitées à une hémi-circonférence, sans infiltration des organes de voisinage.",
      "Les métastases hépatiques.",
      "Les récidives ganglionnaires inguinales.",
      "Les adénocarcinomes du bas rectum."
    ],
    correctAnswers: [1],
    explanation: "B. La curiethérapie interstitielle est indiquée pour les tumeurs limitées à une hémi-circonférence anale, n’infiltrant pas les organes de voisinage. À savoir : Elle est réalisée 2 à 4 semaines après la radiothérapie pelvienne, en complément (boost).",
    clinicalPearl: "Curiethérapie de complément (boost) : Tumeurs résiduelles limitées à une hémi-circonférence sans atteinte vaginale."
  },
  {
    id: 'q-anal-13',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le protocole de chimiothérapie le plus utilisé en association avec la radiothérapie dans le cancer du canal anal associe :",
    options: [
      "5-Fluorouracile + Cisplatine.",
      "5-Fluorouracile + Mitomycine C.",
      "Gemcitabine + Carboplatine.",
      "Irinotécan + 5-Fluorouracile.",
      "Oxaliplatine + Capecitabine."
    ],
    correctAnswers: [1],
    explanation: "B. Le protocole de référence associe 5-Fluorouracile (1000 mg/m²/j en perfusion continue de 96 h, J1–J4) et Mitomycine C (10 mg/m² à J1 et J28). Alternative : Le 5-FU + Cisplatine est également utilisé, mais le 5-FU + Mitomycine reste le plus employé.",
    clinicalPearl: "Protocole de Nigro : 5-FU continu (J1-J4) + Mitomycine C (J1 et J28) concomitants à la radiothérapie."
  },
  {
    id: 'q-anal-14',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Le délai optimal pour évaluer la réponse complète après radiochimiothérapie est :",
    options: ["1 mois.", "3 mois.", "5 mois.", "12 mois.", "18 mois."],
    correctAnswers: [2],
    explanation: "C. La meilleure réponse est obtenue à 5 mois de la fin du traitement. Recommandation : Les biopsies sont proscrites en cas de réponse complète clinico-radiologique ; la surveillance se fait par examen clinique et imagerie.",
    clinicalPearl: "Évaluation de la réponse tumorale : À 8-12 semaines (réponse précoce) puis évaluation définitive à 5-6 mois (effet retardé de la radiothérapie)."
  },
  {
    id: 'q-anal-15',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le risque de cancer du canal anal est multiplié par combien chez les patients HIV positifs par rapport à la population générale ?",
    options: ["2", "10", "20", "40", "80"],
    correctAnswers: [3],
    explanation: "D. Le risque est multiplié par 40 chez les patients HIV positifs. Il est multiplié par 80 chez les homosexuels HIV positifs. À retenir : L’immunodépression est un facteur de risque majeur, d’où l’importance de la sérologie HIV dans le bilan initial.",
    clinicalPearl: "VIH positif = Risque x40 (et jusqu'à x80 chez les hommes ayant des rapports homosexuels non protégés)."
  },
  {
    id: 'q-anal-16',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le canal anal s’étend :",
    options: [
      "De l’angle colique gauche à la marge anale.",
      "De l’anneau anorectal à la marge anale (environ 3 cm).",
      "Du sigmoïde au rectum.",
      "Du péritoine pelvien au sphincter externe.",
      "De la valvule de Houston à la ligne pectinée."
    ],
    correctAnswers: [1],
    explanation: "B. Le canal anal est la partie terminale du tube digestif, s’étendant de l’anneau anorectal jusqu’à la marge anale, sur environ 3 cm. Piège : La limite supérieure est l’anneau anorectal (sangle pubo-rectale) et non le sigmoïde ou le péritoine.",
    clinicalPearl: "Canal anal anatomique et chirurgical : anneau ano-rectal (sangle pubo-rectale) jusqu'à la ligne ano-cutanée (marge anale), long de 3 à 4 cm."
  },
  {
    id: 'q-anal-17',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La muqueuse du tiers inférieur du canal anal est de type :",
    options: [
      "Glandulaire rectale.",
      "Transitionnelle (gris bleu).",
      "Malpighienne lisse et brune (aspect cutané).",
      "Cylindrique ciliée.",
      "Urothéliale."
    ],
    correctAnswers: [2],
    explanation: "C. Le tiers inférieur du canal anal est tapissé par une muqueuse malpighienne lisse et brune, d’aspect cutané. À retenir : Le tiers moyen est transitionnel, le tiers supérieur est glandulaire (rectal).",
    clinicalPearl: "Trois étages muqueux : Supérieur glandulaire (rectal), Moyen transitionnel (cloacogénique), Inférieur malpighien (pavimenteux stratifié)."
  },
  {
    id: 'q-anal-18',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le taux de métastases à distance d’emblée dans le cancer du canal anal est d’environ :",
    options: ["< 1 %", "5 %", "15 %", "30 %", "50 %"],
    correctAnswers: [1],
    explanation: "B. Les métastases à distance sont assez rares, environ 5 % des cas (foie, poumon, os). Évolution : L’évolution est essentiellement locorégionale, d’où l’importance du contrôle local par radiochimiothérapie.",
    clinicalPearl: "Métastases synchrones inaugurales rares (~5%) : maladie à dissémination essentiellement locorégionale."
  },
  {
    id: 'q-anal-19',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour un carcinome épidermoïde de la marge anale classé usT1N0, le traitement recommandé est :",
    options: [
      "Radiochimiothérapie exclusive.",
      "Exérèse chirurgicale locale avec marges saines (> 1 mm).",
      "Amputation abdomino-périnéale.",
      "Curiethérapie seule.",
      "Surveillance active."
    ],
    correctAnswers: [1],
    explanation: "B. Pour les tumeurs T1N0 de la marge anale, l’exérèse chirurgicale locale avec marges saines (> 1 mm) est recommandée. Nuance : Pour le canal anal (et non la marge), la radiothérapie exclusive peut être une option pour les T1N0.",
    clinicalPearl: "Marge anale T1N0 = Exérèse locale large (tumeur assimilée à un carcinome cutané)."
  },
  {
    id: 'q-anal-20',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une toxicité aiguë de la radiothérapie pelvienne (survenant dans les 90 jours) est :",
    options: [
      "Une nécrose anale.",
      "Une rectite radique sévère avec sténose.",
      "Une épithélite et une anite.",
      "Une fistule recto-vaginale.",
      "Une incontinence anale définitive."
    ],
    correctAnswers: [2],
    explanation: "C. L’épithélite, l’anite, la mucite, la diarrhée et la cystite sont des toxicités aiguës (≤ 90 jours). À retenir : Les nécroses, rectites sévères, fistules et incontinences sont des toxicités tardives (> 3 mois).",
    clinicalPearl: "Toxicité aiguë radique (≤ 90 jours) : Épithélite périnéale, anite suintante, diarrhée motrice et cystite radique transitoire."
  },
  {
    id: 'q-anal-21',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le marqueur tumoral SCC (squamous cell carcinoma antigen) est utilisé dans le cancer du canal anal principalement pour :",
    options: [
      "Le diagnostic initial.",
      "Le dépistage de masse.",
      "Le suivi post-thérapeutique et la surveillance des récidives.",
      "La décision d’amputation d’emblée.",
      "Le choix du protocole de chimiothérapie."
    ],
    correctAnswers: [2],
    explanation: "C. Le SCC est un élément de post-chimiothérapie et de surveillance (suivi des récidives). Précision : Il n’est pas utilisé pour le diagnostic initial ni pour le dépistage de masse en raison de sa sensibilité limitée.",
    clinicalPearl: "Marqueur SCC : Valeur cinétique dans le suivi de rémission et le dépistage précoce des récidives."
  },
  {
    id: 'q-anal-22',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les génotypes HPV les plus fréquemment associés au cancer du canal anal sont :",
    options: [
      "HPV-6 et HPV-11.",
      "HPV-16 et HPV-18.",
      "HPV-31 et HPV-33.",
      "HPV-45 et HPV-52.",
      "HPV-58 et HPV-59."
    ],
    correctAnswers: [1],
    explanation: "B. HPV-16 et HPV-18 sont retrouvés dans plus de 80 % des cancers épidermoïdes du canal anal. À savoir : HPV-16 est le plus fréquent des deux.",
    clinicalPearl: "HPV oncogènes à haut risque : HPV-16 (> 75%) et HPV-18 (oncoprotéines E6 dégradant p53 et E7 inactivant Rb)."
  },
  {
    id: 'q-anal-23',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L’examen d’imagerie de référence pour évaluer l’extension locorégionale (atteinte sphinctérienne, ganglions pelviens) est :",
    options: [
      "L’échographie endo-anale.",
      "L’IRM pelvienne.",
      "Le scanner TAP.",
      "Le PET-scan.",
      "La coloscopie."
    ],
    correctAnswers: [1],
    explanation: "B. L’IRM pelvienne est l’examen de référence pour l’évaluation locorégionale (taille tumorale, atteinte sphinctérienne, ganglions inguinaux, iliaques, fistule vaginale...). À retenir : L’échographie endo-anale évalue l’extension en profondeur (paroi, sphincters), mais l’IRM donne une vision plus complète des aires ganglionnaires et des organes de voisinage.",
    clinicalPearl: "IRM pelvienne haute résolution = Examen locorégional clé (sphincters, vagin, cloisons, ganglions pelviens et inguinaux)."
  },
  {
    id: 'q-anal-24',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La majorité des récidives après traitement curatif surviennent dans les :",
    options: ["6 mois.", "2 ans.", "5 ans.", "10 ans.", "15 ans."],
    correctAnswers: [1],
    explanation: "B. La majorité des rechutes surviennent dans les 2 ans suivant la fin du traitement. Surveillance : D’où l’importance d’une surveillance rapprochée (tous les 4 mois pendant 2 ans, puis tous les 6 mois jusqu’à 5 ans).",
    clinicalPearl: "Pic de récidive : 80% des rechutes surviennent dans les 2 premières années de suivi."
  },
  {
    id: 'q-anal-25',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le bilan biologique initial d’un cancer du canal anal doit systématiquement inclure :",
    options: [
      "Un dosage des anticorps anti-Helicobacter pylori.",
      "Une sérologie VIH et une sérologie des hépatites.",
      "Un dosage de l’ACE et du CA 19-9.",
      "Un bilan thyroïdien complet.",
      "Une recherche de mutation KRAS."
    ],
    correctAnswers: [1],
    explanation: "B. Le bilan initial doit inclure la sérologie VIH et la sérologie des hépatites (en lien avec l’immunodépression et les facteurs de risque associés). À noter : Le SCC est le marqueur tumoral utilisé, mais il n’est pas systématique pour le diagnostic initial.",
    clinicalPearl: "Bilan initial systématique : Sérologies VIH, VHB et VHC obligatoires."
  },

  // -------------------------------------------------------------
  // 5 Cas Cliniques Pratiques (14 questions)
  // -------------------------------------------------------------
  // Cas 1
  {
    id: 'q-cas-anal-1-1',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Femme de 62 ans : Une femme de 62 ans, tabagique, consulte pour des rectorragies minimes et une douleur anale évoluant depuis 4 mois. Examen : lésion ulcérée du canal anal, indurée, circonférentielle à 50 %. TR douloureux. Anuscopie avec biopsies : carcinome épidermoïde non kératinisant. IRM pelvienne : T2N0. Sérologie VIH négative.\n\nQuel est le principal facteur de risque chez cette patiente ?",
    options: [
      "L’infection à Helicobacter pylori.",
      "Le tabagisme actif.",
      "L’antécédent familial de cancer colorectal.",
      "Une alimentation pauvre en fibres.",
      "Un antécédent de maladie de Crohn."
    ],
    correctAnswers: [1],
    explanation: "B. Le tabagisme est un facteur de risque majeur du cancer du canal anal (avec HPV, homosexualité masculine, immunodépression). L’antécédent de cancer du col utérin est aussi un facteur, mais ici le tabagisme est le facteur de risque identifié chez cette patiente.",
    clinicalPearl: "Le tabagisme actif est un co-facteur oncogène direct de l'infection à papillomavirus dans la carcinogenèse anale."
  },
  {
    id: 'q-cas-anal-1-2',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Quel est le traitement de référence pour cette tumeur T2N0 du canal anal ?",
    options: [
      "Amputation abdomino-périnéale d’emblée.",
      "Radiothérapie externe exclusive.",
      "Radiochimiothérapie concomitante (5-FU + Mitomycine).",
      "Chimiothérapie néoadjuvante suivie d’une exérèse locale.",
      "Surveillance active avec biopsie tous les 3 mois."
    ],
    correctAnswers: [2],
    explanation: "C. Pour une tumeur T2N0, la radiochimiothérapie concomitante est le traitement de référence (préservation sphinctérienne). La chirurgie (AAP) est réservée aux échecs ou aux tumeurs non répondantes.",
    clinicalPearl: "T2N0 = Radiochimiothérapie concomitante avec intention de conservation sphinctérienne."
  },
  {
    id: 'q-cas-anal-1-3',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 – Suite : Quel bilan d’extension à distance est recommandé en première intention chez cette patiente ?",
    options: [
      "IRM cérébrale.",
      "TAP (thoraco-abdomino-pelvienne).",
      "PET-scan.",
      "Échographie endo-anale.",
      "Coloscopie totale seule."
    ],
    correctAnswers: [1],
    explanation: "B. La TAP est l’examen de première intention pour la recherche de métastases à distance (foie, poumon, os). Le PET-scan peut être utilisé en complément, mais pas en première intention.",
    clinicalPearl: "Scanner TAP injecté systématique pour éliminer une atteinte secondaire hépatique ou pulmonaire."
  },

  // Cas 2
  {
    id: 'q-cas-anal-2-1',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Homme de 45 ans, séropositif VIH : Homme de 45 ans, homosexuel, séropositif VIH sous TAR, consulte pour prurit anal et sensation de corps étranger. Masse bourgeonnante circonférentielle du canal anal. Biopsies : carcinome épidermoïde. IRM : T3N1 (ganglion inguinal gauche suspect). Bilan d’extension à distance négatif.\n\nQuels sont les facteurs de risque majeurs chez ce patient ?",
    options: [
      "HIV + et tabagisme.",
      "HIV + et homosexualité.",
      "HPV-16 et maladie de Crohn.",
      "HIV + et antécédent familial.",
      "Tabagisme et HPV-18."
    ],
    correctAnswers: [1],
    explanation: "B. L’association HIV + et homosexualité masculine multiplie le risque par 80. L’HPV est sous-jacent, mais la combinaison HIV + homosexualité est le double facteur de risque majeur chez ce patient.",
    clinicalPearl: "VIH + rapports anaux réceptifs = Facteurs de risque synergiques majeurs (risque multiplié par 80)."
  },
  {
    id: 'q-cas-anal-2-2',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : Devant ce stade T3N1, quelle prise en charge est recommandée ?",
    options: [
      "Amputation abdomino-périnéale en urgence.",
      "Radiochimiothérapie concomitante avec 5-FU + Mitomycine.",
      "Curiethérapie exclusive.",
      "Chimiothérapie palliative exclusive.",
      "Exérèse locale large."
    ],
    correctAnswers: [1],
    explanation: "B. Pour les tumeurs T3–T4 ou N+, la radiochimiothérapie concomitante est le standard. La curiethérapie est un complément (boost) et non un traitement exclusif pour ce stade.",
    clinicalPearl: "T3N1 = Radiochimiothérapie concomitante pelvienne et inguinale bilatérale (45-50 Gy + boost)."
  },
  {
    id: 'q-cas-anal-2-3',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 31,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 – Suite : Quels examens complémentaires doivent être réalisés dans le bilan initial de ce patient ?",
    options: [
      "Coloscopie totale.",
      "Sérologie des hépatites.",
      "Dosage du SCC.",
      "TAP thoraco-abdomino-pelvienne.",
      "Tous les examens ci-dessus sont recommandés."
    ],
    correctAnswers: [4],
    explanation: "E. Le bilan initial complet inclut : coloscopie totale (recherche de lésions synchrones), sérologie des hépatites (en lien avec l’immunodépression et les facteurs de risque), dosage du SCC (marqueur de surveillance), et TAP (bilan d’extension à distance).",
    clinicalPearl: "Bilan global complet : Sérologies hépatites, coloscopie, SCC initial et TDM TAP."
  },

  // Cas 3
  {
    id: 'q-cas-anal-3-1',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 32,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Femme de 70 ans, récidive locorégionale : Femme de 70 ans, traitée par radiochimiothérapie pour cancer du canal anal T2N0 il y a 18 mois, consulte pour réapparition de douleur anale et rectorragies. TR : lésion ulcérée et indurée. IRM : récidive locale sans métastase.\n\nQuelle est la prise en charge de référence en cas de récidive locale après radiochimiothérapie ?",
    options: [
      "Nouvelle radiochimiothérapie.",
      "Amputation abdomino-périnéale (AAP).",
      "Curiethérapie de rattrapage.",
      "Chimiothérapie palliative.",
      "Surveillance active."
    ],
    correctAnswers: [1],
    explanation: "B. En cas de récidive locale après radiochimiothérapie, l’AAP est le traitement de rattrapage de référence (chirurgie de sauvetage). Une nouvelle radiothérapie est déconseillée en raison du risque de toxicité cumulative.",
    clinicalPearl: "Récidive post-RCT = Amputation Abdomino-Périnéale (AAP) de sauvetage obligatoire avec colostomie iliaque définitive."
  },
  {
    id: 'q-cas-anal-3-2',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 33,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : Quel élément clinique ou paraclinique doit faire évoquer une récidive chez un patient sous surveillance ?",
    options: [
      "Une épithélite radique bénigne.",
      "Une augmentation du SCC et une lésion à l’IRM.",
      "Une diarrhée post-radique.",
      "Une anite modérée.",
      "Une douleur périnéale isolée."
    ],
    correctAnswers: [1],
    explanation: "B. La surveillance repose sur l’examen clinique, le dosage du SCC et l’IRM pelvienne. Une augmentation du SCC associée à une lésion à l’IRM doit faire suspecter une récidive.",
    clinicalPearl: "Élévation confirmée du SCC + anomalie évolutive à l'IRM pelvienne = Forte suspicion de récidive tumorale."
  },
  {
    id: 'q-cas-anal-3-3',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 34,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 – Suite : La surveillance après traitement curatif d'un cancer anal est recommandée pendant combien de temps ?",
    options: ["1 an.", "3 ans.", "5 ans.", "10 ans.", "À vie."],
    correctAnswers: [2],
    explanation: "C. La surveillance est recommandée sur 5 ans : tous les 4 mois pendant 2 ans, puis tous les 6 mois pendant 3 ans, avec TAP annuel et/ou IRM pelvienne.",
    clinicalPearl: "Durée de surveillance oncologique = 5 ans (rythme 4-6-5)."
  },

  // Cas 4
  {
    id: 'q-cas-anal-4-1',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 35,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Homme de 58 ans, tumeur de la marge anale : Homme de 58 ans sans antécédent notable, présente une lésion bourgeonnante de 1,5 cm au niveau de la marge anale. Biopsie : carcinome épidermoïde bien différencié. IRM : T1N0 (pas d'extension profonde ni ganglion).\n\nQuel est le traitement recommandé pour cette lésion T1N0 de la marge anale ?",
    options: [
      "Radiochimiothérapie concomitante.",
      "Exérèse chirurgicale locale avec marges saines.",
      "Curiethérapie exclusive.",
      "Chimiothérapie locale.",
      "Surveillance active."
    ],
    correctAnswers: [1],
    explanation: "B. Pour les tumeurs T1N0 de la marge anale, l’exérèse chirurgicale locale avec marges > 1 mm est le traitement de choix. La radiochimiothérapie est réservée aux tumeurs du canal anal ou aux stades plus évolués.",
    clinicalPearl: "Marge anale T1N0 < 2 cm = Exérèse chirurgicale locale avec marge de sécurité saine R0."
  },
  {
    id: 'q-cas-anal-4-2',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 36,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 – Suite : Quelle particularité anatomique et nosologique différencie la marge anale du canal anal selon l'OMS ?",
    options: [
      "La marge anale est tapissée de muqueuse transitionnelle.",
      "La marge anale est considérée comme une tumeur cutanée selon l’OMS.",
      "La marge anale a un drainage exclusivement pelvien.",
      "La marge anale est plus fréquemment adénocarcinomateuse.",
      "La marge anale ne présente jamais d’extension ganglionnaire."
    ],
    correctAnswers: [1],
    explanation: "B. Selon l’OMS, les tumeurs de la marge anale sont classées avec les tumeurs cutanées. Elles sont distinctes des tumeurs du canal anal (muqueuse malpighienne, transitionnelle ou glandulaire).",
    clinicalPearl: "Tumeurs de la marge anale = Épithélium cutané kératinisé (classification des tumeurs cutanées de l'OMS)."
  },

  // Cas 5
  {
    id: 'q-cas-anal-5-1',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 37,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Femme de 55 ans, tumeur T4 avec fistule : Femme de 55 ans, antécédent de maladie de Crohn, présente une tumeur ulcérée circonférentielle du canal anal fixée au vagin (fistule recto-vaginale). IRM : T4N1. Biopsies : carcinome épidermoïde. Bilan métastatique négatif.\n\nQuel facteur de risque est particulièrement associé à ce tableau ?",
    options: [
      "L’infection à HPV-6.",
      "La maladie de Crohn (inflammation chronique).",
      "L’antécédent de cancer du sein.",
      "La prise de contraceptifs oraux.",
      "L’obésité."
    ],
    correctAnswers: [1],
    explanation: "B. Les lésions inflammatoires chroniques, en particulier la maladie de Crohn, sont des facteurs de risque de cancer du canal anal. La fistule recto-vaginale est une complication fréquente des tumeurs avancées.",
    clinicalPearl: "Inflammation suppurative chronique et fistules complexes de la maladie de Crohn = Terrain favorisant le cancer anal."
  },
  {
    id: 'q-cas-anal-5-2',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 38,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 – Suite : Devant ce stade T4 avec fistule recto-vaginale, quelle stratégie thérapeutique est la plus adaptée ?",
    options: [
      "Amputation abdomino-périnéale d’emblée.",
      "Radiochimiothérapie concomitante avec colostomie de décharge pré-thérapeutique.",
      "Chimiothérapie exclusive en raison de l’extension.",
      "Curiethérapie seule.",
      "Exérèse locale de la fistule suivie de radiothérapie."
    ],
    correctAnswers: [1],
    explanation: "B. Pour les tumeurs localement très avancées (T4) avec fistule ou risque sub-occlusif, une colostomie de décharge peut être indiquée avant la radiochimiothérapie. L’AAP n’est pas d’emblée ; elle est réservée aux échecs.",
    clinicalPearl: "T4 fistulisé au vagin : Colostomie de décharge première de dérivation fécale puis Radiochimiothérapie concomitante."
  },
  {
    id: 'q-cas-anal-5-3',
    courseId: 'crs-gastro-cancer-canal-anal',
    questionNumber: 39,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 – Suite : Quel type histologique est le plus fréquent dans ce contexte (fistule, maladie de Crohn) ?",
    options: [
      "Adénocarcinome.",
      "Carcinome épidermoïde.",
      "Mélanome malin.",
      "Carcinome colloïde.",
      "Lymphome."
    ],
    correctAnswers: [1],
    explanation: "B. Le carcinome épidermoïde reste le type histologique le plus fréquent (> 90 %), même dans les contextes d’inflammation chronique ou de fistule. Les carcinomes colloïdes sont exceptionnels.",
    clinicalPearl: "Le carcinome épidermoïde reste ultra-majoritaire (> 90%) quel que soit le terrain d'inflammation sous-jacente."
  }
];

export const CANCER_CANAL_ANAL_RESOURCES: CourseResource[] = [
  {
    id: 'res-anal-mindmap',
    courseId: 'crs-gastro-cancer-canal-anal',
    type: 'Resume',
    title: "Mind Map & Algorithmes : Cancers du Canal Anal (4ème année Médecine)",
    contentMarkdown: `## 🧠 Mind Map & Conduite Pratique : Cancers du Canal Anal

### 1. Épidémiologie & Étiologie
- **Fréquence** : < 2 % des cancers digestifs, incidence 1-2 / 100 000 habitants, prédominance féminine (sex-ratio F/H = 1,5 à 3). Âge médian 60-65 ans.
- **Facteurs de Risque Majeurs (Mnémo « T.H.I.S »)** :
  - **T** : Tabagisme actif
  - **H** : HPV oncogènes (HPV-16 et HPV-18 dans > 80% des cas)
  - **I** : Immunodépression (VIH+, greffés d'organes, corticothérapie au long cours)
  - **S** : Sexe (rapports anaux réceptifs, antécédents gynécologiques de cancer du col/vulve/vagin) + Maladie de Crohn périnéale.

### 2. Anatomie & Drainage Lymphatique
- **Canal anal** : 3 à 4 cm, de l'anneau anorectal (sangle puborectale) jusqu'à la marge anale.
- **Revêtements muqueux** :
  - *Tiers supérieur* : Muqueuse glandulaire rectale.
  - *Tiers moyen* : Zone de transition (gris-bleu, épithélium cloacogénique).
  - *Tiers inférieur* : Muqueuse malpighienne (pavimenteux stratifié non kératinisé).
- **Drainage lymphatique** :
  - Au-dessus de la ligne pectinée -> Ganglions iliaques internes, obturateurs, mésentériques inférieurs.
  - Au-dessous de la ligne pectinée -> Ganglions inguinaux superficiels bilatéraux.

### 3. Histologie (Anapath)
- **Carcinome épidermoïde** : > 90 % des tumeurs (kératinisant ou non kératinisant).
- **Carcinome cloacogénique (basaloïde)** : ~10 % (zone transitionnelle, radiosensible mais plus métastatique).
- **Adénocarcinome** : ~8 %.
- **Mélanome malin anorectal** : < 1 % (très sombre).

### 4. Algorithme Thérapeutique
\`\`\`
Diagnostic Positif : Anuscopie + Biopsies profondes -> Carcinome Épidermoïde
Bilan : IRM pelvienne + TDM TAP + Sérologies VIH/VHB/VHC + SCC
          │
          ├──► Stade usT1N0 de la Marge Anale
          │     → Exérèse chirurgicale locale (marges > 1 mm)
          │
          ├──► Stade T1N0 du Canal Anal
          │     → Radiothérapie exclusive (RTE 45 Gy + Curiethérapie interstitielle)
          │
          ├──► Stades T2–T4 ou Ganglions N+ (Pelviens ou Inguinaux)
          │     → RADIOCHIMIOTHÉRAPIE CONCOMITANTE (Nigro) :
          │          • Radiothérapie conformationnelle (RCMI) : 45-50 Gy sur pelvis et inguinaux
          │          • Chimiothérapie : 5-FU (J1-J4) + Mitomycine C (J1 et J28)
          │          • Boost tumoral : 15 à 20 Gy
          │          • Évaluation de la réponse définitive à 5 mois !
          │
          ├──► Échec tumoral persistant ou Récidive locale
          │     → Amputation Abdomino-Périnéale (AAP) de sauvetage avec colostomie définitive
          │
          └──► Métastatique d'emblée (~5%)
                → Chimiothérapie systémique (Carboplatine + Paclitaxel ou DCF)
\`\`\``,
    author: 'Collège National de Cancérologie Digestive'
  },
  {
    id: 'res-anal-mnemo',
    courseId: 'crs-gastro-cancer-canal-anal',
    type: 'Astuce',
    title: "Astuces & Mnémoniques Clés : Cancers du Canal Anal",
    contentMarkdown: `### 💡 Mnémotechniques & Règles d'Or

1. **Facteurs de Risque (« T.H.I.S »)** :
   - **T** : Tabac
   - **H** : HPV (16/18)
   - **I** : Immunodépression (VIH x40 à x80)
   - **S** : Sexualité (rapports réceptifs) / Séquelles gynécologiques (col de l'utérus)

2. **Stratégie Thérapeutique par Stades (« 1-2-3-4 »)** :
   - **T1 marge** : Chirurgie locale d'exérèse
   - **T1 canal** : Radiothérapie exclusive
   - **T2 à T4 ou N+** : Radiochimiothérapie (RCT 5-FU + Mitomycine)
   - **Échec / Récidive** : AAP de Miles (Amputation abdomino-périnéale)

3. **Protocole de Chimiothérapie (« 5-M »)** :
   - **5**-Fluorouracile (1000 mg/m²/j x 96 h continue J1-J4)
   - **M**itomycine C (10 mg/m² IV bolus J1 et J28)

4. **Surveillance (« Règle 4-6-5 »)** :
   - Tous les **4** mois pendant 2 ans
   - Puis tous les **6** mois pendant 3 ans
   - Soit un total de **5** ans de surveillance armée (80% des récidives surviennent < 2 ans)

5. **Drainage Lymphatique (« Haut / Bas »)** :
   - **Haut** (au-dessus ligne pectinée) = ganglions profonds internes (iliaques internes)
   - **Bas** (en dessous ligne pectinée) = ganglions superficiels externes (inguinaux superficiels)

6. **Toxicités Radiques (« Aiguë vs Tardive »)** :
   - Aiguë (≤ 90 jours) : Épithélite, anite érythémateuse/suintante, mucite
   - Tardive (> 3 mois) : Nécrose anale, sténose cicatricielle, rectite radique, fistule recto-vaginale`,
    author: '4ème Année Médecine'
  }
];
