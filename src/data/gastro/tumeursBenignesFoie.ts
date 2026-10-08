import { Question, CourseResource } from '../../types/medical';

export const TUMEURS_BENIGNES_FOIE_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Tumeurs bénignes du foie (Dr IAICHE ACHOUR.L & Pr ANOU - CHU Douera)
  // -------------------------------------------------------------
  {
    id: 'q-tbf-01',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'hémangiome (angiome caverneux) hépatique, quelle affirmation est EXACTE ?",
    options: [
      "Il s'agit d'une tumeur maligne à faible potentiel évolutif",
      "Sa fréquence est plus élevée chez l'homme âgé de plus de 60 ans",
      "La ponction-biopsie hépatique est indispensable au diagnostic en cas de doute",
      "Il est alimenté exclusivement par les branches de la veine porte",
      "Il existe un risque rare de syndrome de Kasabach-Merritt dans les formes géantes"
    ],
    correctAnswers: [4],
    explanation: "L'hémangiome est une lésion bénigne (jamais de transformation maligne), à prédominance féminine nette (30-50 ans). La biopsie est formellement contre-indiquée en raison du risque d'hémorragie cataclysmique. Le syndrome de Kasabach-Merritt (thrombopénie majeure et coagulopathie de consommation par séquestration plaquettaire) est une complication rare des angiomes géants.",
    clinicalPearl: "Hémangiome hépatique : Tumeur bénigne la plus fréquente. Ponction-biopsie FORMELLEMENT CONTRE-INDIQUÉE (risque hémorragique)."
  },
  {
    id: 'q-tbf-02',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une femme de 38 ans asymptomatique découvre une lésion hépatique. L'IRM montre une lésion homogène bien limitée avec une cicatrice fibreuse centrale stellaire en hypersignal T2 prenant le contraste aux temps tardifs. Quel est le diagnostic le plus probable ?",
    options: [
      "Adénome hépatocytaire muté bêta-caténine",
      "Cystadénome mucineux biliaire",
      "Hyperplasie nodulaire focale (HNF)",
      "Hémangiome scléro-atrophique",
      "Carcinome hépatocellulaire bien différencié"
    ],
    correctAnswers: [2],
    explanation: "La cicatrice centrale étoilée (hypo/isointense en T1, hyperintense en T2 avec rehaussement tardif prolongé) est la signature quasi pathognomonique de l'Hyperplasie Nodulaire Focale (HNF).",
    clinicalPearl: "HNF : Cicatrice centrale stellaire (étoile fibreuse) avec rehaussement tardif. Pas de potentiel malin, pas de risque hémorragique."
  },
  {
    id: 'q-tbf-03',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente de 32 ans sous contraception œstroprogestative depuis 10 ans présente un adénome hépatocytaire de 6 cm du lobe gauche. Quelle est la conduite à tenir recommandée ?",
    options: [
      "Abstention thérapeutique et contrôle échographique dans 2 ans",
      "Arrêt définitif de la contraception orale et résection chirurgicale programmée",
      "Ponction-biopsie systématique avant toute décision",
      "Embolisation artérielle d'emblée sans arrêt des œstrogènes",
      "Surveillance annuelle par IRM sans intervention"
    ],
    correctAnswers: [1],
    explanation: "Selon les recommandations internationales (EASL) : tout adénome hépatocytaire mesurant > 5 cm chez la femme (ou chez l'homme quelle que soit la taille) doit être réséqué en raison du risque de rupture hémorragique et de transformation maligne en CHC. L'arrêt des contraceptifs oraux est obligatoire.",
    clinicalPearl: "Adénome hépatocytaire : Indication chirurgicale formelle si taille > 5 cm, chez l'homme (quel que soit le diamètre), ou si mutation bêta-caténine."
  },
  {
    id: 'q-tbf-04',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel énoncé concernant le kyste biliaire simple du foie est CORRECT ?",
    options: [
      "Il communique toujours avec l'arbre biliaire principal",
      "La paroi est épaisse et végétante, avec un aspect multiloculaire",
      "La sérologie hydatique est systématiquement positive",
      "Le traitement de référence est l'abstention en l'absence de symptômes",
      "Il ne s'observe que dans le cadre de la polykystose hépatorénale"
    ],
    correctAnswers: [3],
    explanation: "Le kyste biliaire simple est bénin, fréquent (2,5 à 5 % de la population), à paroi fine invisible, contenu liquidien anéchogène sans renforcement ni cloison, ne communiquant pas avec les voies biliaires. L'abstention thérapeutique est la règle s'il est asymptomatique.",
    clinicalPearl: "Kyste biliaire simple : Anéchogène, renforcement postérieur, paroi fine invisible, pas de communication biliaire -> Abstention."
  },
  {
    id: 'q-tbf-05',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente de 45 ans présente une volumineuse masse kystique multiloculaire du foie avec cloisons épaisses et nodules muraux (végétations). Quel est le principal risque évolutif ?",
    options: [
      "Hémorragie digestive par rupture de varices œsophagiennes",
      "Transformation en cystadénocarcinome mucineux malin",
      "Rupture péritonéale aseptique systématique",
      "Insuffisance hépatocellulaire terminale",
      "Thrombose portale d'emblée"
    ],
    correctAnswers: [1],
    explanation: "Le cystadénome mucineux est une lésion précancéreuse rare (femme d'âge moyen) caractérisée par un stroma de type ovarien. Son potentiel de dégénérescence en cystadénocarcinome impose une exérèse chirurgicale complète d'emblée.",
    clinicalPearl: "Cystadénome mucineux : Kyste à cloisons épaisses et végétations murales -> Risque de dégénérescence en cystadénocarcinome -> Exérèse complète R0."
  },
  {
    id: 'q-tbf-06',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel aspect tomodensitométrique avec injection est pathognomonique de l'hémangiome hépatique typique ?",
    options: [
      "Rehaussement homogène précoce avec wash-out rapide au temps portal",
      "Rehaussement nodulaire périphérique « en mottes » au temps artériel, avec comblement centripète progressif aux temps tardifs",
      "Calcifications périphériques arciformes avec nécrose centrale sans rehaussement",
      "Prise de contraste hétérogène anarchique sans modification tardive",
      "Hypovascularité totale à toutes les phases de l'examen"
    ],
    correctAnswers: [1],
    explanation: "La cinétique vasculaire de l'hémangiome est caractéristique : prise de contraste périphérique nodulaire en mottes au temps artériel précoce, suivie d'un remplissage centripète progressif et complet (sans wash-out).",
    clinicalPearl: "Cinétique TDM de l'hémangiome : Prise de contraste en mottes périphériques -> Comblement centripète progressif aux temps tardifs."
  },
  {
    id: 'q-tbf-07',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la polykystose hépatique isolée (liée aux gènes PRKCSH ou SEC63), quel énoncé est VRAI ?",
    options: [
      "L'atteinte rénale est constante, sévère et précoce",
      "Elle touche avec prédilection les hommes jeunes",
      "Elle évolue fréquemment vers l'insuffisance hépatocellulaire terminale",
      "La fonction hépatique reste normale et il n'y a habituellement ni hypertension portale ni insuffisance hépatique",
      "Le traitement de choix est la transplantation hépatique précoce systématique"
    ],
    correctAnswers: [3],
    explanation: "Dans la polykystose hépatique pure isolée, le parenchyme hépatique entre les kystes reste sain : il n'y a pas d'insuffisance hépatique et l'HTP est rare. Les reins sont épargnés (contrairement à la PKRAD / PKD1).",
    clinicalPearl: "Polykystose hépatique isolée : Préservation du parenchyme hépatique -> Pas d'insuffisance hépatique, pas d'atteinte rénale sévère."
  },
  {
    id: 'q-tbf-08',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel sous-type moléculaire d'adénome hépatocytaire présente le plus haut risque de transformation maligne en carcinome hépatocellulaire ?",
    options: [
      "Adénome inflammatoire (IHCA)",
      "Adénome inactivé pour HNF1alpha (H-HCA)",
      "Adénome avec mutation activatrice de la bêta-caténine (exon 3)",
      "Adénome associé à la glycogénose de type 1",
      "Adénome non classé sans mutation"
    ],
    correctAnswers: [2],
    explanation: "Les adénomes avec mutation activatrice de la bêta-caténine (particulièrement sur l'exon 3) ont un potentiel de cancérisation élevé (environ 10-15 %) et doivent être systématiquement réséqués.",
    clinicalPearl: "Adénome muté bêta-caténine (exon 3) = Risque maximal de dégénérescence en carcinome hépatocellulaire -> Résection chirurgicale."
  },
  {
    id: 'q-tbf-09',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une HNF typique de 4 cm asymptomatique est confirmée par IRM chez une femme jeune. Que recommandent les guidelines EASL ?",
    options: [
      "Surveillance IRM annuelle à vie",
      "Résection chirurgicale préventive",
      "Abstention thérapeutique complète sans suivi d'imagerie nécessaire",
      "Ponction-biopsie pour confirmation histologique",
      "Embolisation préventive"
    ],
    correctAnswers: [2],
    explanation: "Selon les recommandations de l'EASL, une HNF typique ne présente aucun potentiel de dégénérescence maligne et ne saigne pratiquement jamais. Si elle est asymptomatique, aucun suivi d'imagerie n'est requis.",
    clinicalPearl: "HNF typique et asymptomatique = Rassurer la patiente, abstention complète, aucun suivi d'imagerie nécessaire."
  },
  {
    id: 'q-tbf-10',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente avec un hémangiome hépatique typique de 5 cm asymptomatique désire débuter une grossesse. Quelle attitude est correcte selon l'EASL ?",
    options: [
      "Contre-indication formelle à toute grossesse",
      "Résection chirurgicale obligatoire avant la conception",
      "Grossesse autorisée sans contre-indication, et les contraceptifs oraux ne sont pas contre-indiqués",
      "Surveillance mensuelle par IRM tout au long de la grossesse",
      "Traitement anticoagulant prophylactique obligatoire"
    ],
    correctAnswers: [2],
    explanation: "L'EASL indique que l'hémangiome ne contre-indique ni la grossesse ni la prise de contraceptifs oraux. Le risque de rupture spontanée pendant la grossesse est quasi nul pour un hémangiome classique.",
    clinicalPearl: "Hémangiome hépatique : N'interdit ni la grossesse, ni la contraception orale."
  },
  {
    id: 'q-tbf-11',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour différencier un kyste biliaire simple d'un kyste hydatique en Algérie, l'attitude diagnostique la plus pertinente repose sur :",
    options: [
      "La ponction-biopsie percutanée du kyste",
      "La sérologie hydatique et l'analyse échographique minutieuse (dédoublement de membrane, cloisons)",
      "Le TEP-scanner au FDG",
      "Le dosage des transaminases sériques",
      "L'élastographie hépatique"
    ],
    correctAnswers: [1],
    explanation: "La ponction d'un kyste hydatique est proscrite (risque de choc anaphylactique et de dissémination). La distinction repose sur l'échographie (recherche de décollement de membrane, vésicules filles) et la sérologie hydatique.",
    clinicalPearl: "Kyste simple vs Kyste hydatique : Jamais de ponction ! Échographie de haute résolution + Sérologie hydatique."
  },
  {
    id: 'q-tbf-12',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication aiguë la plus fréquente et redoutée de l'adénome hépatocytaire est :",
    options: [
      "La transformation en cholangiocarcinome",
      "L'hémorragie intra-tumorale ou la rupture sous-capsulaire avec hémopéritoine",
      "L'insuffisance hépatocellulaire fulminante",
      "La thrombose de la veine sus-hépatique (Budd-Chiari)",
      "L'infection bactérienne primitive"
    ],
    correctAnswers: [1],
    explanation: "L'adénome hépatocytaire est une tumeur hypervascularisée et fragile. La complication aiguë majeure est l'hémorragie (intra-lésionnelle ou rupture intrapéritonéale avec choc hémorragique), survenant dans 20 à 30 % des adénomes > 5 cm.",
    clinicalPearl: "Adénome hépatique : Risque majeur = Hémorragie aiguë et hémopéritoine spontané chez la femme jeune sous pilule."
  },
  {
    id: 'q-tbf-13',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la relation entre l'Hyperplasie Nodulaire Focale (HNF) et les contraceptifs oraux :",
    options: [
      "Les contraceptifs oraux sont la cause directe de l'HNF",
      "L'HNF régresse obligatoirement dès l'arrêt des contraceptifs",
      "Il n'y a pas de lien de causalité établi, et les contraceptifs oraux ne sont pas contre-indiqués",
      "Les contraceptifs oraux sont formellement interdits",
      "Ils potentialisent le risque de transformation sarcomateuse"
    ],
    correctAnswers: [2],
    explanation: "Contrairement à l'adénome, l'HNF est une malformation vasculaire hamartomateuse réactionnelle à une anomalie artérielle locale. Il n'y a pas de relation causale démontrée avec les œstrogènes, et la contraception n'est pas contre-indiquée.",
    clinicalPearl: "HNF vs Adénome : L'HNF n'est PAS causée par la pilule et n'impose PAS son arrêt."
  },
  {
    id: 'q-tbf-14',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel triplet clinique et biologique définit le syndrome de Kasabach-Merritt ?",
    options: [
      "Hémangiome géant + Thrombopénie sévère + Coagulopathie de consommation (CIVD)",
      "Angiome plan + Macrothrombocytose + Hyperfibrinogénémie",
      "Fistule artério-veineuse + Polyglobulie + Hypertension portale",
      "Hémangio-endothéliome + Anémie hémolytique auto-immune + Ictère",
      "Malformation veineuse + Insuffisance rénale + Calcifications"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Kasabach-Merritt associe un volumineux hémangiome vasculaire à une thrombopénie par piégeage plaquettaire intra-tumoral et une consommation des facteurs de la coagulation (CIVD locale ou systémique).",
    clinicalPearl: "Syndrome de Kasabach-Merritt = Hémangiome géant + Thrombopénie profonde + Coagulopathie de consommation (CIVD)."
  },
  {
    id: 'q-tbf-15',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'IRM hépatique, un adénome hépatocytaire se caractérise fréquemment par :",
    options: [
      "Une cicatrice centrale stellaire en hypersignal T2 persistant",
      "Un hypersignal T1 spontané en cas de composante graisseuse ou de remaniement hémorragique",
      "Une absence totale de rehaussement artériel",
      "Un lavage portal précoce franc systématique identique au kyste hydatique",
      "Un hyposignal T2 constant sans rehaussement"
    ],
    correctAnswers: [1],
    explanation: "L'adénome hépatocytaire peut contenir de la graisse intra-cellulaire (notamment dans le sous-type HNF1alpha) ou des dérivés de l'hémoglobine suite à des micro-hémorragies, ce qui se traduit par un hypersignal spontané en T1.",
    clinicalPearl: "IRM de l'adénome : Hypersignal T1 spontané si graisse ou nécrose hémorragique, rehaussement artériel franc."
  },
  {
    id: 'q-tbf-16',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la polykystose hépatorénale autosomique dominante (PKRAD, gènes PKD1/PKD2) :",
    options: [
      "Les kystes hépatiques apparaissent avant les kystes rénaux",
      "Le pronostic vital est dominé par l'insuffisance rénale chronique terminale",
      "Il existe une prédominance masculine exclusive",
      "Il n'y a aucun risque d'anévrisme intracrânien associé",
      "La mutation touche obligatoirement le gène PRKCSH"
    ],
    correctAnswers: [1],
    explanation: "Dans la PKRAD (PKD1/PKD2), l'atteinte rénale est constante et évolue vers l'insuffisance rénale terminale (dialyse/greffe). Les kystes hépatiques sont secondaires et n'altèrent généralement pas la fonction hépatique.",
    clinicalPearl: "PKRAD : Le pronostic est Rénal (insuffisance rénale chronique) et Vasculaire (anévrismes du polygone de Willis)."
  },
  {
    id: 'q-tbf-17',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une complication mécanique non hémorragique des volumineux hémangiomes hépatiques (> 8-10 cm) peut être :",
    options: [
      "Une ascite chyleuse isolée",
      "Un ictère par compression extrinsèque des voies biliaires principales",
      "Une pancytopénie périphérique médullaire",
      "Une hypertension artérielle pulmonaire primitive",
      "Une thrombose spontanée de l'aorte abdominale"
    ],
    correctAnswers: [1],
    explanation: "Les hémangiomes géants peuvent comprimer les structures de voisinage : compression du hile hépatique responsable d'un ictère rétentionnel, ou compression gastrique responsable de satiété précoce.",
    clinicalPearl: "Hémangiome géant : Symptômes liés à la masse -> Pesanteur de l'hypochondre droit, compression gastrique ou biliaire."
  },
  {
    id: 'q-tbf-18',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le principal diagnostic différentiel d'un adénome hépatocytaire à l'imagerie chez une femme jeune sous pilule est :",
    options: [
      "Une métastase d'adénocarcinome colique",
      "Une Hyperplasie Nodulaire Focale (HNF)",
      "Un angiomyolipome rénal",
      "Un carcinome fibrolamellaire",
      "Un kyste hydatique sain"
    ],
    correctAnswers: [1],
    explanation: "HNF et adénome sont les deux tumeurs hépatocytaires bénignes les plus fréquentes chez la femme jeune. Leur distinction à l'IRM est cruciale car l'HNF relève de l'abstention alors que l'adénome peut justifier une résection.",
    clinicalPearl: "Duel diagnostique chez la femme jeune : HNF (abstention) vs Adénome (surveillance/chirurgie selon taille et sexe)."
  },
  {
    id: 'q-tbf-19',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "On parle formellement d'adénomatose hépatique lorsqu'il existe :",
    options: [
      "Au moins 2 adénomes dans le même segment hépatique",
      "Plus de 10 adénomes hépatocytaires disséminés dans le parenchyme",
      "Un adénome développé sur foie de cirrhose",
      "Une association de 3 adénomes et 2 kystes biliaires",
      "Une nécrose hémorragique d'un adénome"
    ],
    correctAnswers: [1],
    explanation: "L'adénomatose hépatique est définie par la présence de ≥ 10 adénomes hépatocytaires dans le foie, souvent associée à des anomalies génétiques ou métaboliques (glycogénose de type I).",
    clinicalPearl: "Adénomatose hépatique = Présence de ≥ 10 adénomes hépatocytaires."
  },
  {
    id: 'q-tbf-20',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement chirurgical de choix pour soulager les symptômes invalidants d'une polykystose hépatique à kystes volumineux dominants est :",
    options: [
      "La kystectomie totale avec marsupialisation",
      "La fenestration laparoscopique (dôme saillant) des kystes dominants",
      "La transplantation hépatique systématique d'emblée",
      "Le drainage percutané continu par sonde",
      "La sclérothérapie à la povidone iodée pure"
    ],
    correctAnswers: [1],
    explanation: "La fenestration laparoscopique des kystes superficiels volumineux (opération de Lin) permet de décomprimer le parenchyme et de réduire le volume hépatique tout en préservant le foie sain.",
    clinicalPearl: "Polykystose symptomatique : Fenestration cœlioscopique des kystes prédominants (opération de Lin)."
  },
  {
    id: 'q-tbf-21',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe radiologique le plus spécifique de l'HNF à l'IRM avec injection de produit de contraste hépatospécifique (Primovist/BOPTA) est :",
    options: [
      "Une absence complète de fixation au temps hépatobiliaire",
      "Une rétention du produit de contraste au temps hépatobiliaire tardif par rapport au foie adjacent, avec cicatrice centrale fibreuse",
      "Un wash-out précoce complet dès 30 secondes",
      "Une capsule périphérique fibreuse épaisse calcifiée",
      "Un hyposignal franc sur toutes les séquences"
    ],
    correctAnswers: [1],
    explanation: "L'HNF contient des hépatocytes fonctionnels avec des canalicules biliaires borgnes : elle retient le produit de contraste hépatospécifique au temps tardif (20 min), contrairement à la majorité des adénomes et métastases.",
    clinicalPearl: "IRM au produit hépatobiliaire : L'HNF capte et retient le contraste (iso ou hypersignal tardif), signant la présence de tissu hépatocytaire fonctionnel."
  },
  {
    id: 'q-tbf-22',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement curatif de référence d'un cystadénome mucineux biliaire repose sur :",
    options: [
      "La ponction-sclérothérapie percutanée à l'alcool absolu",
      "L'exérèse chirurgicale complète en marges saines (kystectomie totale ou résection anatomique)",
      "La surveillance échographique semestrielle sans chirurgie",
      "L'antibiothérapie par fluoroquinolones au long cours",
      "La fenestration simple du dôme saillant"
    ],
    correctAnswers: [1],
    explanation: "Toute fenestration ou résection incomplète expose à une récidive précoce et à la cancérisation en cystadénocarcinome. L'exérèse chirurgicale complète emportant la totalité de la paroi kystique est obligatoire.",
    clinicalPearl: "Cystadénome mucineux : Exérèse chirurgicale COMPLÈTE obligatoire (la fenestration est formellement contre-indiquée !)."
  },
  {
    id: 'q-tbf-23',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Selon les dernières recommandations de l'EASL, une HNF typique ne nécessite aucun suivi parce que :",
    options: [
      "Elle régresse spontanément chez 100 % des patientes en 2 ans",
      "Son potentiel de dégénérescence maligne est nul et le risque de complication est exceptionnel",
      "Elle est traitable par des médicaments oraux",
      "Elle se transforme spontanément en tissu fibreux cicatriciel bénin",
      "Elle n'est observable qu'après la ménopause"
    ],
    correctAnswers: [1],
    explanation: "L'HNF est une lésion bénigne stable dont le risque de transformation maligne est nul. Les complications hémorragiques sont exceptionnelles. Un suivi d'imagerie n'apporte aucun bénéfice clinique.",
    clinicalPearl: "HNF : Potentiel de dégénérescence = 0 %. Risque de rupture = quasi nul. Suivi = Inutile si typique."
  },
  {
    id: 'q-tbf-24',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une patiente porteuse d'un kyste biliaire simple présente brutalement une douleur vive de l'hypochondre droit, une fièvre à 39 °C et une hyperleucocytose. Quelle complication suspectez-vous ?",
    options: [
      "Une rupture intrapéritonéale aseptique",
      "Une infection bactérienne du kyste (kyste surinfecté)",
      "Une transformation maligne suraiguë",
      "Une hémolyse intra-kystique",
      "Une torsion pédiculaire du kyste"
    ],
    correctAnswers: [1],
    explanation: "La surinfection d'un kyste biliaire simple (infection bactérienne hématogène ou biliaire) est rare mais réalise un véritable abcès intrakystique fébrile avec syndrome inflammatoire.",
    clinicalPearl: "Complication du kyste simple : Surinfection (tableau d'abcès du foie) ou hémorragie intrakystique douloureuse."
  },
  {
    id: 'q-tbf-25',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel facteur de risque est le plus fortement associé à la genèse et à la croissance des adénomes hépatocytaires ?",
    options: [
      "L'infection chronique par le virus de l'hépatite B",
      "La contraception œstroprogestative orale prolongée (surtout > 5 ans)",
      "L'alcoolisme chronique avec cirrhose",
      "L'ingestion d'aflatoxines alimentaires",
      "La consommation de caféine"
    ],
    correctAnswers: [1],
    explanation: "L'exposition prolongée aux œstrogènes (contraception orale, stéroïdes anabolisants) est le facteur favorisant majeur des adénomes hépatocytaires, multipliant le risque par 30 à 100 chez les utilisatrices au long cours.",
    clinicalPearl: "Facteur étiologique numéro 1 de l'adénome : Contraception œstroprogestative prolongée (> 5 ans)."
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (10 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : Découverte fortuite femme de 28 ans
  {
    id: 'q-cas-tbf-1-1',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (Femme de 28 ans sous contraception orale depuis 7 ans) - Échographie pour douleurs pelviennes : masse hépatique de 3,5 cm, très homogène, hyperéchogène, bien limitée sans halo ni ombre acoustique, foie par ailleurs sain. Asymptomatique sur le plan hépatique. Quelle est l'hypothèse diagnostique la plus probable ?",
    options: [
      "Adénome hépatocytaire muté",
      "Hémangiome hépatique typique",
      "Hyperplasie nodulaire focale",
      "Kyste hydatique de type I",
      "Métastase d'adénocarcinome"
    ],
    correctAnswers: [1],
    explanation: "Une lésion ronde, bien circonscrite, homogène, hyperéchogène sans halo périphérique, mesurant < 4 cm chez une femme jeune sur foie sain est l'aspect échographique classique d'un hémangiome hépatique.",
    clinicalPearl: "Échographie : Lésion hyperéchogène, homogène, bien limitée, sans halo sur foie sain = Hémangiome typique."
  },
  {
    id: 'q-cas-tbf-1-2',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Selon les recommandations de l'EASL, quelle est la conduite à tenir pour cette lésion typique de 3,5 cm ?",
    options: [
      "Arrêt immédiat de la contraception et IRM dans 1 mois",
      "Résection chirurgicale sous laparoscopie",
      "Abstention complète, diagnostic d'hémangiome certain, pas de surveillance d'imagerie nécessaire et la contraception n'est pas contre-indiquée",
      "Ponction-biopsie sous échographie",
      "Embolisation préventive"
    ],
    correctAnswers: [2],
    explanation: "Pour un hémangiome typique < 5 cm asymptomatique sur foie sain, aucun examen complémentaire ni surveillance n'est nécessaire. La pilule et la grossesse ne sont pas contre-indiquées.",
    clinicalPearl: "Hémangiome typique < 5 cm = Diagnostic clinique/échographique suffisant, pas de suivi, pas d'arrêt de pilule."
  },

  // Cas 2 : Homme de 52 ans, masse kystique multiloculaire
  {
    id: 'q-cas-tbf-2-1',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Homme de 52 ans, douleur HCD) - Échographie : masse de 6 cm, hétérogène avec végétations et cloisons épaisses. TDM : lésion multiloculaire avec parois et cloisons rehaussées après injection et micro-calcifications. Quel est le diagnostic le plus probable ?",
    options: [
      "Hémangiome géant thrombosé",
      "Kyste biliaire simple non compliqué",
      "Cystadénome mucineux biliaire (ou cystadénocarcinome)",
      "Abcès à pyogènes",
      "Carcinome hépatocellulaire trabéculaire pur"
    ],
    correctAnswers: [2],
    explanation: "Une masse hépatique kystique multiloculaire à cloisons épaisses rehaussées avec végétations murales oriente directement vers une tumeur kystique mucineuse (cystadénome ou cystadénocarcinome).",
    clinicalPearl: "Masse multiloculaire à cloisons épaisses et végétations = Cystadénome mucineux biliaire."
  },
  {
    id: 'q-cas-tbf-2-2',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quel est le traitement chirurgical de choix pour cette lésion ?",
    options: [
      "Ponction-sclérothérapie à l'alcool",
      "Exérèse chirurgicale complète en bloc (kystectomie totale ou résection hépatique réglée)",
      "Antibiothérapie prolongée",
      "Surveillance IRM tous les 6 mois",
      "Embolisation de l'artère hépatique"
    ],
    correctAnswers: [1],
    explanation: "En raison du risque majeur de transformation maligne et de récidive, le cystadénome mucineux impose une exérèse chirurgicale complète emportant la totalité du kyste sans rupture.",
    clinicalPearl: "Traitement du cystadénome mucineux = Exérèse chirurgicale complète R0 impérative."
  },

  // Cas 3 : Femme de 39 ans, lésion de 7 cm avec cicatrice centrale
  {
    id: 'q-cas-tbf-3-1',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (Femme de 39 ans sous pilule depuis 15 ans) - Lésion de 7 cm du segment IV. IRM : masse homogène avec cicatrice centrale stellaire en hypersignal T2 se rehaussant aux temps tardifs, pas de graisse intralésionnelle. Quel est le diagnostic IRM formel ?",
    options: [
      "Adénome hépatocytaire muté bêta-caténine",
      "Hyperplasie nodulaire focale (HNF)",
      "Hémangiome hyalinisé",
      "Carcinome fibrolamellaire",
      "Angiomyolipome hépatique"
    ],
    correctAnswers: [1],
    explanation: "La cicatrice centrale stellaire en hypersignal T2 avec prise de contraste tardive et l'homogénéité du parenchyme lésionnel signent l'HNF.",
    clinicalPearl: "Cicatrice centrale stellaire hyper T2 + rehaussement tardif = Hyperplasie Nodulaire Focale (HNF)."
  },
  {
    id: 'q-cas-tbf-3-2',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quelle est la prise en charge recommandée chez cette patiente asymptomatique ?",
    options: [
      "Arrêt immédiat de la pilule et résection chirurgicale en raison de la taille > 5 cm",
      "Surveillance annuelle par IRM",
      "Abstention complète, réassurance, pas de suivi nécessaire et la contraception peut être poursuivie",
      "Ponction-biopsie sous échographie",
      "Embolisation préventive de la cicatrice"
    ],
    correctAnswers: [2],
    explanation: "La taille > 5 cm ne constitue PAS une indication opératoire dans l'HNF typique et asymptomatique (contrairement à l'adénome). Aucun traitement ni arrêt de contraception n'est requis.",
    clinicalPearl: "Dans l'HNF, même > 5 cm, pas de chirurgie si asymptomatique ! (Différence clé avec l'adénome)."
  },

  // Cas 4 : Femme de 34 ans, douleur brutale et choc
  {
    id: 'q-cas-tbf-4-1',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Femme de 34 ans sous œstroprogestatifs) - Douleur brutale en coup de poignard de l'hypochondre droit, pâleur et hypotension. Échographie : hémopéritoine et tumeur hépatique de 6 cm hétérogène. TDM : hématome sous-capsulaire rompu dans le péritoine au sein d'une masse hépatique. Quelle tumeur est en cause au premier chef ?",
    options: [
      "Rupture d'une HNF",
      "Rupture hémorragique d'un adénome hépatocytaire",
      "Rupture d'un kyste biliaire simple",
      "Rupture d'un hémangiome calcifié",
      "Rupture d'un lipome"
    ],
    correctAnswers: [1],
    explanation: "L'adénome hépatocytaire chez la femme jeune sous contraception est la première cause de rupture tumorale spontanée du foie avec hémopéritoine.",
    clinicalPearl: "Hémopéritoine spontané chez la femme jeune sous pilule = Adénome hépatocytaire rompu jusqu'à preuve du contraire."
  },
  {
    id: 'q-cas-tbf-4-2',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - Quelle est la stratégie thérapeutique immédiate et à distance ?",
    options: [
      "Arrêt définitif de la contraception œstroprogestative, stabilisation hémodynamique (embolisation radiologique première si instable) puis résection chirurgicale de la lésion",
      "Embolisation seule définitive sans chirurgie",
      "Abstention chirurgicale complète et surveillance",
      "Ponction percutanée sous scanner de l'hématome",
      "Traitement par analogues de la somatostatine"
    ],
    correctAnswers: [0],
    explanation: "En urgence : réanimation hémodynamique, embolisation artérielle première si saignement actif ou hémostase chirurgicale, arrêt de la pilule, puis résection chirurgicale secondaire à distance de l'hématome.",
    clinicalPearl: "Adénome rompu : Embolisation hémostatique en urgence si possible -> Résection chirurgicale différée + arrêt définitif des œstrogènes."
  },

  // Cas 5 : Homme de 48 ans, foie polykystique
  {
    id: 'q-cas-tbf-5-1',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 34,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Homme de 48 ans, ATCD familial de néphropathie kystique) - Gêne abdominale et pesanteur. TDM : volumineux foie polykystique remanié avec multiples kystes rénaux bilatéraux. Créatininémie normale, pas d'ascite ni de cholestase. Quel est le diagnostic le plus probable ?",
    options: [
      "Polykystose hépatique isolée (PRKCSH)",
      "Polykystose hépatorénale autosomique dominante (PKRAD, gène PKD1)",
      "Maladie de Caroli kystique",
      "Cystadénomatose biliaire diffuse",
      "Métastases kystiques d'un GIST"
    ],
    correctAnswers: [1],
    explanation: "L'association de kystes hépatiques multiples et de kystes rénaux bilatéraux chez un adulte avec antécédents familiaux signe la polykystose hépatorénale autosomique dominante (PKRAD).",
    clinicalPearl: "Kystes rénaux + Kystes hépatiques = PKRAD (PKD1/PKD2). Le pronostic vital est Rénal."
  },
  {
    id: 'q-cas-tbf-5-2',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    questionNumber: 35,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - Si ce patient développe une gêne abdominale majeure invalidante liée à 2 kystes superficiels volumineux de plus de 12 cm, quel geste chirurgical est validé ?",
    options: [
      "Transplantation hépatique immédiate",
      "Fenestration laparoscopique (dérivation des dômes saillants) des kystes prédominants",
      "Hémodialyse de confort",
      "Ponction évacuatrice simple sans alcoolisation",
      "Kystectomie totale avec alcoolisation des kystes microscopiques"
    ],
    correctAnswers: [1],
    explanation: "La fenestration laparoscopique des kystes volumineux superficiels permet une décompression efficace et durable sans sacrifier de parenchyme hépatique.",
    clinicalPearl: "Polykystose hépatique symptomatique : Fenestration cœlioscopique des kystes dominants (opération de Lin)."
  }
];

export const TUMEURS_BENIGNES_FOIE_RESOURCES: CourseResource[] = [
  {
    id: 'res-tbf-mindmap',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    type: 'Resume',
    title: 'Fiche Synthèse : Tumeurs Bénignes du Foie',
    contentMarkdown: `## Tumeurs Bénignes du Foie : Repères Clés pour le Résidanat
*D'après le cours du Dr IAICHE ACHOUR.L & Pr ANOU – CHU Douera*

### 1. Hémangiome (Angiome caverneux)
- **Épidémiologie** : Tumeur bénigne la plus fréquente (jusqu'à 5-7 % de la population), femme jeune (30-50 ans).
- **Échographie** : Lésion ronde, < 4 cm, hyperéchogène, très homogène, bien limitée, sans halo périphérique.
- **TDM / IRM** : Rehaussement nodulaire périphérique en mottes au temps artériel -> comblement centripète tardif progressif (sans wash-out).
- **Règle absolue** : **Pas de biopsie** (risque hémorragique). Pas d'arrêt de pilule, pas d'interdiction de grossesse.
- **Complication rare** : Syndrome de Kasabach-Merritt (angiome géant + thrombopénie + CIVD).

### 2. Hyperplasie Nodulaire Focale (HNF)
- **Nature** : Malformation vasculaire hamartomateuse bénigne, non liée aux œstrogènes.
- **IRM** : Masse homogène avec **cicatrice centrale stellaire en hypersignal T2** prenant le contraste aux temps tardifs. Fixation et rétention au temps hépatobiliaire.
- **Évolution** : Potentiel de dégénérescence = 0 %. Risque de rupture = quasi nul.
- **Prise en charge** : **Abstention complète**, pas de surveillance d'imagerie si typique, pas de contre-indication à la contraception.

### 3. Adénome Hépatocytaire
- **Facteur majeur** : Contraception œstroprogestative prolongée (> 5 ans), stéroïdes anabolisants, glycogénose.
- **Sous-types** :
  - *HNF1alpha* : Stéatosique, faible risque malin.
  - *Inflammatoire (IHCA)* : Syndrome inflammatoire biologique, risque hémorragique.
  - *Bêta-caténine muté (exon 3)* : **Risque élevé de dégénérescence en CHC**.
- **Risques** : Hémorragie intra-lésionnelle, rupture avec hémopéritoine spontané, dégénérescence maligne.
- **Prise en charge (EASL)** :
  - Arrêt des contraceptifs oraux.
  - **Chirurgie d'exérèse si** : Taille ≥ 5 cm chez la femme, chez l'homme (quelle que soit la taille), ou mutation bêta-caténine.

### 4. Lésions Kystiques du Foie
- **Kyste Biliaire Simple** : Paroi fine invisible, anéchogène, renforcement postérieur -> Abstention si asymptomatique.
- **Polykystose Hépatique** : Foie polykystique, fonction hépatique conservée -> Fenestration si kystes volumineux gênants.
- **Cystadénome Mucineux** : Kyste multiloculaire à cloisons épaisses et végétations murales (femme 40 ans) -> **Précancéreux -> Exérèse chirurgicale complète R0 obligatoire**.`,
    author: 'Dr IAICHE ACHOUR.L & Pr ANOU - CHU Douera'
  },
  {
    id: 'res-tbf-mnemo',
    courseId: 'crs-gastro-tumeurs-benignes-foie',
    type: 'Astuce',
    title: 'Mnémotechniques : Tumeurs Bénignes du Foie',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (CHU Douera)

1. **HNF = « Cœur et Étoile »**
   - **C**icatrice centrale
   - **É**toilée (stellaire)
   - **U**ltime bénignité (0 % de cancer)
   - **R**ien à faire (abstention, pas d'arrêt de pilule)

2. **Adénome = « HORMO »**
   - **H**émorragie et hémopéritoine spontané
   - **O**estroprogestatifs (pilule au long cours)
   - **R**ésection si > 5 cm ou chez l'homme
   - **M**utation bêta-caténine (risque de CHC)
   - **O**pposé à l'HNF !

3. **Hémangiome = « 3H et Mottes »**
   - **H**yperéchogène homogène
   - **H**ématome si biopsie (interdite !)
   - **H**émangiome en **mottes** périphériques au scanner

4. **Cystadénome = « CLOISONS Méchantes »**
   - Cloisons épaisses + Végétations = Chirurgie complète R0 !`,
    author: 'CHU Douera'
  }
];
