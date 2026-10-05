import { Question, CourseResource } from '../../types/medical';

// Lesson 10: Leptospirose
export const INFECTIO_LESSON_10_QUESTIONS: Question[] = [
  {
    id: 'q-inf-10-01',
    courseId: 'crs-inf-10',
    questionNumber: 1,
    type: 'QCM',
    content: "Concernant l’épidémiologie de la leptospirose, quelle proposition est EXACTE ?",
    options: [
      "A. La leptospirose est une maladie strictement animale sans transmission à l’homme",
      "B. Plus de 1 million de cas sévères par an dans le monde avec environ 60 000 décès",
      "C. Elle est en éradication complète des pays tempérés",
      "D. Les régions tropicales sont épargnées grâce au climat sec",
      "E. La leptospirose ne touche que les professionnels des égouts"
    ],
    correctAnswers: [1],
    explanation: "La leptospirose est une zoonose majeure responsable de plus d'un million de cas graves et de plus de 60 000 décès par an à l'échelle mondiale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-02',
    courseId: 'crs-inf-10',
    questionNumber: 2,
    type: 'QCM',
    content: "Quel est le principal réservoir de Leptospira dans la nature et le mode de contamination le plus fréquent ?",
    options: [
      "A. Les oiseaux migrateurs, par morsure",
      "B. Les chiens, uniquement par contact direct avec la salive",
      "C. Les rongeurs (rats), par contact cutanéo-muqueux avec une eau souillée par leurs urines",
      "D. Les bovins, par ingestion de viande contaminée",
      "E. Les moustiques, par piqûre"
    ],
    correctAnswers: [2],
    explanation: "Le réservoir principal est constitué des rongeurs (rats) qui éliminent la bactérie vivante dans leurs urines, contaminant les eaux douces et la boue.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-03',
    courseId: 'crs-inf-10',
    questionNumber: 3,
    type: 'QCM',
    content: "Leptospira interrogans est une bactérie appartenant à l’ordre des Spirochètes. Quelle affirmation concernant sa morphologie et sa culture est VRAIE ?",
    options: [
      "A. C’est un bacille Gram positif capsulé",
      "B. Elle est aérobie stricte, de culture rapide sur gélose ordinaire en 24h",
      "C. Elle se colore facilement au Gram et se cultive en milieu standard",
      "D. C’est un spirochète Gram négatif, aérobie, mobile en spirale, persistant longtemps en milieu humide",
      "E. La bactérie ne survit pas dans l’eau douce"
    ],
    correctAnswers: [3],
    explanation: "Leptospira interrogans est un spirochète fin, mobile, aérobie, de culture lente sur milieux enrichis (EMJH/Fletcher), très résistant dans l'eau douce et tiède.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-04',
    courseId: 'crs-inf-10',
    questionNumber: 4,
    type: 'QCM',
    content: "D’après les données du cours sur la leptospirose en Algérie (wilaya de Blida), quel constat épidémiologique est correct ?",
    options: [
      "A. La plaine de Mitidja (Blida) et Tizi Ouzou constituent des foyers endémiques reconnus",
      "B. La maladie est absente en milieu urbain",
      "C. Les rats capturés en milieu rural sont plus infectés que ceux en milieu urbain",
      "D. La leptospirose est plus fréquente en hiver",
      "E. La wilaya de Blida n’a jamais rapporté de cas humains"
    ],
    correctAnswers: [0],
    explanation: "En Algérie, la plaine de la Mitidja (Blida) et la Kabylie (Tizi Ouzou) sont des foyers endémiques majeurs avec une recrudescence estivo-automnale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-05',
    courseId: 'crs-inf-10',
    questionNumber: 5,
    type: 'QCM',
    content: "Au cours de la phase bactériémique de la leptospirose, quel mécanisme physiopathologique est prédominant ?",
    options: [
      "A. Formation d’abcès rénaux par extension directe",
      "B. Vascularite systémique avec lésion endothéliale, ischémie tissulaire et libération massive de cytokines pro-inflammatoires",
      "C. Destruction des hépatocytes par apoptose directe sans inflammation",
      "D. Seulement une réaction allergique retardée",
      "E. Aucun tropisme viscéral"
    ],
    correctAnswers: [1],
    explanation: "La leptospirose entraîne une endothéliite diffuse et une vascularite responsable d'hyperperméabilité capillaire, d'ischémie et d'atteinte multiviscérale.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-10-06',
    courseId: 'crs-inf-10',
    questionNumber: 6,
    type: 'QCM',
    content: "Le signe clinique souvent décrit comme évocateur, bien que non pathognomonique, de la leptospirose est :",
    options: [
      "A. Hépatomégalie douloureuse intense",
      "B. Injection conjonctivale bilatérale (suffusion conjonctivale sans pus) associée à des myalgies intenses des mollets",
      "C. Adénopathies cervicales volumineuses",
      "D. Éruption vésiculeuse des paumes et plantes",
      "E. Splénomégalie fébrile et ictère hémolytique"
    ],
    correctAnswers: [1],
    explanation: "L'association d'une injection conjonctivale bilatérale non purulente (suffusion) et de myalgies violentes prédominant aux mollets est hautement évocatrice.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-07',
    courseId: 'crs-inf-10',
    questionNumber: 7,
    type: 'QCM',
    content: "Dans la leptospirose ictéro-hémorragique (maladie de Weil), quelle est l’évolution typique de la température thermique par rapport à l’ictère ?",
    options: [
      "A. La fièvre persiste élevée tout au long de l’ictère",
      "B. La température commence à baisser 2 à 3 jours après le début de l’ictère pour devenir normale vers le 10e jour (défervescence paradoxale)",
      "C. L’ictère n’apparaît qu’après la défervescence thermique complète",
      "D. La fièvre est absente dans la phase d’état",
      "E. La fièvre s’élève lors de l’apparition de l’ictère"
    ],
    correctAnswers: [1],
    explanation: "Dans la maladie de Weil, la fièvre commence à décroître paradoxalement 2 à 3 jours après l'installation de l'ictère flamboyant orangé.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-10-08',
    courseId: 'crs-inf-10',
    questionNumber: 8,
    type: 'QCM',
    content: "Un patient présente un ictère fébrile, une insuffisance rénale, une thrombopénie et une élévation des CPK. Quelle anomalie biologique est très fréquente dans la leptospirose ?",
    options: [
      "A. Hyperleucocytose à polynucléaires neutrophiles, hyperbilirubinémie mixte, élévation des CPK et hypokaliémie initiale",
      "B. Hyperbilirubinémie à prédominance non conjuguée, hyperkaliémie majeure",
      "C. Leucopénie sévère et fibrinogène effondré",
      "D. Hyperbilirubinémie conjuguée isolée sans cytolyse",
      "E. Cholestase anictérique et calcémie élevée"
    ],
    correctAnswers: [0],
    explanation: "Profil classique : hyperleucocytose à PNN, thrombopénie, rhabdomyolyse (CPK élevées), insuffisance rénale avec hypokaliémie initiale par tubulopathie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-09',
    courseId: 'crs-inf-10',
    questionNumber: 9,
    type: 'QCM',
    content: "Le « Severe Pulmonary Hemorrhage Syndrome (SPHS) » associé à la leptospirose se manifeste principalement par :",
    options: [
      "A. Hémoptysies et SDRA par alvéolite hémorragique foudroyante",
      "B. Pneumothorax spontané récidivant",
      "C. Embolie pulmonaire septique",
      "D. Pleurésie purulente",
      "E. Asthme aigu grave"
    ],
    correctAnswers: [0],
    explanation: "Le SPHS est une complication pulmonaire gravissime de la leptospirose associant hémoptysies massives, infiltrats alvéolaires bilatéraux et SDRA de haute mortalité.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-10',
    courseId: 'crs-inf-10',
    questionNumber: 10,
    type: 'QCM',
    content: "Quel examen permet un diagnostic direct de leptospirose dès la phase bactériémique précoce (J1 à J5) ?",
    options: [
      "A. La culture sur milieu de Fletcher en 24h",
      "B. Le microscope à fond noir",
      "C. La PCR (sang, LCR, urines) précoce",
      "D. La sérologie MAT",
      "E. L’examen direct des urines après coloration de Gram"
    ],
    correctAnswers: [2],
    explanation: "La PCR sanguine et urinaire est la méthode de choix précoce (J1-J5) avant l'apparition des anticorps sérologiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-11',
    courseId: 'crs-inf-10',
    questionNumber: 11,
    type: 'QCM',
    content: "À propos du test de micro-agglutination (MAT) pour la leptospirose, quelle affirmation est vraie ?",
    options: [
      "A. Il détecte les antigènes solubles dans les urines",
      "B. Il est positif dès le 2ème jour de fièvre",
      "C. En zone endémique, on considère un titre ≥ 400 comme significatif, et des réactions croisées entre sérogroupes sont fréquentes en phase initiale",
      "D. La négativité du MAT élimine définitivement la leptospirose",
      "E. Il ne nécessite pas de prélèvement de sérum pairé"
    ],
    correctAnswers: [2],
    explanation: "Le MAT (titre ≥ 400 en zone d'endémie ou séroconversion x4 sur sérums appariés) est la méthode sérologique de référence OMS.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-10-12',
    courseId: 'crs-inf-10',
    questionNumber: 12,
    type: 'QCM',
    content: "Un adulte de 35 ans, agriculteur, présente une leptospirose anictérique non sévère. Quel est l’antibiotique oral de première intention selon le cours ?",
    options: [
      "A. Pénicilline G injectable IV",
      "B. Triméthoprime-sulfaméthoxazole (Bactrim)",
      "C. Doxycycline 100 mg per os 2 fois par jour (ou Amoxicilline 1 g x 2/j)",
      "D. Gentamicine seule",
      "E. Ciprofloxacine 500 mg 2x/jour"
    ],
    correctAnswers: [2],
    explanation: "Pour les formes bénignes/anictériques : Doxycycline orale (100 mg x 2/j x 7j) ou Amoxicilline. (Le Bactrim est inefficace sur les leptospires).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-13',
    courseId: 'crs-inf-10',
    questionNumber: 13,
    type: 'QCM',
    content: "En cas d’exposition à risque à des eaux potentiellement contaminées (inondations, opérations en milieu humide), quelle chimioprophylaxie orale est recommandée ?",
    options: [
      "A. Amoxicilline 3 g en dose unique",
      "B. Doxycycline 200 mg une fois par semaine",
      "C. Azithromycine 500 mg/jour pendant un mois",
      "D. Vaccin antitétanique",
      "E. Aucun traitement préventif"
    ],
    correctAnswers: [1],
    explanation: "La prise hebdomadaire de Doxycycline 200 mg confère une chimioprophylaxie efficace en cas d'exposition à risque.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-14',
    courseId: 'crs-inf-10',
    questionNumber: 14,
    type: 'QCM',
    content: "Chez l’enfant, la leptospirose présente certaines particularités cliniques. Laquelle est exacte ?",
    options: [
      "A. La forme ictérique est la plus fréquente (>70%)",
      "B. Les manifestations méningées sont rares",
      "C. Une hydrocholécystite alithiasique est possible, et le pronostic est habituellement plus favorable que chez l'adulte",
      "D. Le diagnostic est aisé grâce à la triade classique constante",
      "E. La leptospirose congénitale n’existe pas"
    ],
    correctAnswers: [2],
    explanation: "Chez l'enfant, les formes anictériques dominent, avec possibilité d'hydrocholécystite aiguë alithiasique et un pronostic globalement meilleur.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-10-15',
    courseId: 'crs-inf-10',
    questionNumber: 15,
    type: 'QCM',
    content: "Un patient présente une méningite lymphocytaire à liquide clair, normoglycorachie, associée à une injection conjonctivale et des myalgies des mollets après baignade en rivière. Diagnostic le plus probable :",
    options: [
      "A. Méningite tuberculeuse",
      "B. Leptospirose en forme méningée anictérique",
      "C. Méningite à entérovirus",
      "D. Méningite pneumococcique",
      "E. Herpès simplex"
    ],
    correctAnswers: [1],
    explanation: "La forme méningée anictérique de la leptospirose donne un LCR clair lymphocytaire avec normoglycorachie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-16',
    courseId: 'crs-inf-10',
    questionNumber: 16,
    type: 'QCM',
    content: "Parmi les facteurs suivants, lequel est associé à une surmortalité et gravité majeure dans la leptospirose ?",
    options: [
      "A. Infection par le sérogroupe Icterohaemorrhagiae",
      "B. Traitement antibiotique précoce débuté à J2",
      "C. Jeune âge sans comorbidités",
      "D. Faible charge d'inoculum",
      "E. Forme anictérique pure"
    ],
    correctAnswers: [0],
    explanation: "Le sérogroupe Icterohaemorrhagiae est le plus virulent et responsable de la majorité des formes ictéro-hémorragiques graves de Weil.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-17',
    courseId: 'crs-inf-10',
    questionNumber: 17,
    type: 'QCM',
    content: "Devant un tableau d’ictère fébrile avec insuffisance rénale et thrombopénie, quel diagnostic différentiel majeur faut-il éliminer en priorité en zone tropicale/subtropicale ?",
    options: [
      "A. Cholécystite aiguë lithiasique",
      "B. Paludisme grave à P. falciparum, Dengue hémorragique et Fièvre jaune",
      "C. Hépatite auto-immune",
      "D. Pancréatite aiguë",
      "E. Stéatose hépatique"
    ],
    correctAnswers: [1],
    explanation: "Le paludisme grave, la fièvre jaune et la dengue sévère sont les diagnostics différentiels d'urgence de la leptospirose ictéro-hémorragique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-18',
    courseId: 'crs-inf-10',
    questionNumber: 18,
    type: 'QCM',
    content: "En Algérie, le vaccin SPIROLEPT® (vaccin inactivé) est indiqué chez :",
    options: [
      "A. Toute la population générale avant l’été",
      "B. Les professionnels très exposés (égoutiers, éboueurs, personnel d’assainissement)",
      "C. Les voyageurs se rendant en Europe",
      "D. Les enfants de moins de 1 an",
      "E. Les patients immunodéprimés uniquement"
    ],
    correctAnswers: [1],
    explanation: "Le vaccin SPIROLEPT est réservé aux travailleurs exposés aux eaux souillées et rongeurs (égoutiers, stations d'épuration, dératiseurs).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-19',
    courseId: 'crs-inf-10',
    questionNumber: 19,
    type: 'QCM',
    content: "Les formes inapparentes ou asymptomatiques de leptospirose :",
    options: [
      "A. N'existent pas dans la nature",
      "B. Sont fréquentes et mises en évidence lors des enquêtes sérologiques épidémiologiques dans les zones d'élevage",
      "C. Évoluent toujours vers une cirrhose",
      "D. Ne surviennent que chez les vaccinés",
      "E. Sont associées à un coma"
    ],
    correctAnswers: [1],
    explanation: "La majorité des contaminations humaines par les sérogroupes moins virulents sont asymptomatiques ou paucisymptomatiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-20',
    courseId: 'crs-inf-10',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle manifestation cardiaque peut compliquer la leptospirose grave (maladie de Weil) ?",
    options: [
      "A. Endocardite bactérienne aortique",
      "B. Myocardite aiguë avec troubles du rythme ou de conduction et choc cardiogénique",
      "C. Péricardite constrictive chronique",
      "D. Hypertension artérielle maligne",
      "E. Rétrécissement mitral"
    ],
    correctAnswers: [1],
    explanation: "La myocardite toxinique avec arythmies ventriculaires ou blocs de conduction est une complication grave de la leptospirose.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-21',
    courseId: 'crs-inf-10',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans la leptospirose grave compliquée d’insuffisance rénale aiguë oligo-anurique, quelle mesure de réanimation est essentielle ?",
    options: [
      "A. Diurétiques de l’anse à haute dose",
      "B. Épuration extra-rénale (EER) précoce (hémodialyse ou hémofiltration continue)",
      "C. Restriction hydrique sévère sans dialyse",
      "D. Antibiotiques seuls",
      "E. Transfusion de plaquettes systématique"
    ],
    correctAnswers: [1],
    explanation: "L'épuration extra-rénale précoce prévient les décès par urémie toxique, hyperkaliémie secondaire et surcharge hydro-sodée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-22',
    courseId: 'crs-inf-10',
    questionNumber: 22,
    type: 'QCM',
    content: "Leptospira peut survivre dans l’environnement (eaux stagnantes, boues humides) pendant :",
    options: [
      "A. Quelques heures seulement",
      "B. Des semaines voire plusieurs mois en milieu humide et tiède",
      "C. Moins de 2 jours",
      "D. Uniquement en eau salée de mer",
      "E. Moins de 30 minutes"
    ],
    correctAnswers: [1],
    explanation: "Les leptospires survivent plusieurs semaines à plusieurs mois dans l'eau douce stagnante non acide (pH 7,2 - 7,8) et le sol humide.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-23',
    courseId: 'crs-inf-10',
    questionNumber: 23,
    type: 'QCM',
    content: "Un patient se présente au 3ème jour de fièvre avec myalgies des mollets et injection conjonctivale après baignade en rivière. Quel bilan diagnostique initial privilégiez-vous ?",
    options: [
      "A. Sérologie MAT isolée",
      "B. RT-PCR sanguine précoce + hémocultures sur milieu Fletcher/EMJH + NFS, CRP, bilan rénal et hépatique",
      "C. Recherche de leptospires dans les urines",
      "D. Radiographie pulmonaire seule",
      "E. Ponction lombaire immédiate"
    ],
    correctAnswers: [1],
    explanation: "Avant J5, la PCR sanguine est l'examen direct le plus sensible en phase de virémie/bactériémie initiale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-24',
    courseId: 'crs-inf-10',
    questionNumber: 24,
    type: 'QCM',
    content: "La thrombopénie au cours de la leptospirose est due principalement à :",
    options: [
      "A. Une consommation et séquestration périphérique liée à la vascularite endothéliale et à des mécanismes immunitaires",
      "B. Une aplasie médullaire complète",
      "C. Une carence en vitamine B12",
      "D. Un hypersplénisme isolé",
      "E. Une intoxication médicamenteuse"
    ],
    correctAnswers: [0],
    explanation: "La thrombopénie résulte de la destruction et consommation plaquettaire périphérique activée par la vascularite endothéliale diffuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-25',
    courseId: 'crs-inf-10',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans l’étude épidémiologique des rats à Blida (2005-2014), quelle donnée a été mise en évidence ?",
    options: [
      "A. Tous les rats étaient séronégatifs",
      "B. 43% des rats capturés étaient positifs au MAT, avec une prédominance du sérogroupe Icterohaemorrhagiae en milieu urbain",
      "C. Seuls les chiens étaient porteurs",
      "D. La leptospirose n’a jamais été détectée à Blida",
      "E. Les rats ruraux étaient 100% contaminés"
    ],
    correctAnswers: [1],
    explanation: "L'étude a montré que 43% des rongeurs de la région de Blida étaient porteurs de leptospires, avec prédominance d'Icterohaemorrhagiae.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques Leptospirose
  {
    id: 'q-inf-10-cc1',
    courseId: 'crs-inf-10',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Agriculteur de 45 ans dans la Mitidja, consulte en septembre pour fièvre à 39,5°C, frissons, violentes myalgies des mollets, céphalées et injection conjonctivale bilatérale sans écoulement purulent. Travail dans des parcelles inondées il y a 10 jours. Pas d'ictère. Plaquettes 80 000/mm³, CPK à 1 200 UI/L, créatinine 110 µmol/L.\n\nQuel est le diagnostic à ce stade précoce et quel examen de confirmation rapide ?",
    options: [
      "A. Paludisme grave / Goutte épaisse",
      "B. Leptospirose en phase bactériémique pré-ictérique / RT-PCR sanguine et IgM ELISA",
      "C. Hépatite A / Sérologie VHA",
      "D. Dengue / Antigène NS1",
      "E. Brucellose aiguë / Wright"
    ],
    correctAnswers: [1],
    explanation: "Contexte de travail en eau stagnante, injection conjonctivale + myalgies des mollets + rhabdomyolyse (CPK) + thrombopénie = Leptospirose en phase bactériémique. Confirmation par PCR sang.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-cc2',
    courseId: 'crs-inf-10',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Éboueur de 52 ans à Alger, admis pour ictère franc flamboyant, oligurie, hémoptysies minimes, purpura des membres. Fièvre à 38,5°C (qui a baissé par rapport à 39,8°C la semaine précédente). Bilirubine 350 µmol/L, créatinine 520 µmol/L, plaquettes 25 000/mm³, TP à 45%.\n\nQuel syndrome clinique et quelle antibiothérapie IV immédiate ?",
    options: [
      "A. Hépatite B fulminante / Tenofovir",
      "B. Maladie de Weil (forme ictéro-hémorragique grave de leptospirose) / Pénicilline G IV (ou Ceftriaxone IV)",
      "C. Cholécystite aiguë / Amox-clav",
      "D. Sepsis à méningocoque / Céfotaxime",
      "E. Intoxication paracétamol / N-acétylcystéine"
    ],
    correctAnswers: [1],
    explanation: "Maladie de Weil typique (ictère + insuffisance rénale aiguë + syndrome hémorragique + défervescence paradoxale). Traitement d'urgence par Pénicilline G ou C3G IV.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-cc3',
    courseId: 'crs-inf-10',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Soldat de 28 ans ayant manoeuvré en zone marécageuse. Hospitalisé pour détresse respiratoire aiguë brutale avec hémoptysies abondantes, fièvre et injection conjonctivale. Radiographie : opacités alvéolaires bilatérales extensives en ailes de papillon.\n\nQuelle complication redoutable de la leptospirose s'est développée ?",
    options: [
      "A. Embolie pulmonaire cruorique",
      "B. Syndrome hémorragique pulmonaire sévère (SPHS) avec alvéolite hémorragique et SDRA",
      "C. Tuberculose miliaire",
      "D. OAP cardiogénique",
      "E. Pneumonie à légionelle"
    ],
    correctAnswers: [1],
    explanation: "Le SPHS (syndrome hémorragique pulmonaire sévère) est l'atteinte la plus létale de la leptospirose, associant inondation alvéolaire hémorragique et défaillance respiratoire aiguë.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-10-cc4',
    courseId: 'crs-inf-10',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Jeune fille de 16 ans à Tizi Ouzou en été, baignade en barrage. Céphalées intenses, raideur de nuque, fièvre à 38,5°C, myalgies. Pas d'ictère. PL : LCR clair, 150 leucocytes/mm³ (80% lymphocytes), protéines 0,8 g/L, glycorachie normale.\n\nQuelle est l’étiologie la plus probable ?",
    options: [
      "A. Méningite tuberculeuse",
      "B. Leptospirose en forme méningée anictérique bénigne",
      "C. Méningite purulente décapitée",
      "D. Neuropaludisme",
      "E. Abcès cérébral"
    ],
    correctAnswers: [1],
    explanation: "Leptospirose en forme méningée anictérique (LCR clair lymphocytaire avec normoglycorachie, myalgies, contexte de baignade en eau douce).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-10-cc5',
    courseId: 'crs-inf-10',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Femme enceinte de 28 SA habitant près d'un oued souillé, fébrile à 39°C avec myalgies et subictère. Sérologie leptospirose positive.\n\nQuels sont les risques obstétricaux et le traitement adapté ?",
    options: [
      "A. Aucun risque fœtal / Abstention",
      "B. Risque de mort foetale in utero, avortement ou accouchement prématuré / Antibiothérapie par Pénicilline G IV ou Ceftriaxone IV",
      "C. Césarienne immédiate obligatoire sans antibiotique",
      "D. Doxycycline à forte dose",
      "E. Interruption médicale de grossesse systématique"
    ],
    correctAnswers: [1],
    explanation: "La leptospirose gravidique expose à l'avortement, la mort in utero et la prématurité; elle se traite par Pénicilline G ou Ceftriaxone (les cyclines étant contre-indiquées chez la femme enceinte).",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_10_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-10-mindmap',
    courseId: 'crs-inf-10',
    title: 'Mind Map : La Leptospirose',
    type: 'mindmap',
    content: `# Mind Map : La Leptospirose (Leptospira interrogans)

## 1. Réservoir & Épidémiologie
- **Réservoirs** : Rongeurs (rats +++ porteurs rénaux chroniques asymptomatiques), chiens, bovins
- **Transmission** : Indirecte par contact d'eau douce / boue souillée par les urines avec peau lésée ou muqueuses
- **Foyers en Algérie** : Mitidja (Blida), Kabylie (Tizi Ouzou), égouts urbains

## 2. Formes Cliniques
- **Forme anictérique (80%)** : Syndrome pseudo-grippal fébrile, myalgies des mollets, suffusion conjonctivale, méningite lymphocytaire à LCR clair
- **Forme ictéro-hémorragique de Weil (20%)** :
  - Ictère flamboyant orangé avec défervescence thermique paradoxale
  - Insuffisance rénale aiguë oligo-anurique avec hypokaliémie initiale
  - Thrombopénie et manifestations hémorragiques
- **Forme pulmonaire sévère (SPHS)** : Hémoptysies foudroyantes et SDRA

## 3. Diagnostic & Traitement
- **Biologie** : Hyperleucocytose PNN, thrombopénie, CPK élevées, bilirubine mixte, créatinine élevée
- **Confirmation** :
  - J1-J5 : PCR sanguine / urinaire
  - J8-J12 : Sérologie MAT (titre >= 400) ou ELISA IgM
- **Traitement** :
  - Forme bénigne : Doxycycline 200 mg/j per os (ou Amoxicilline)
  - Forme grave : Pénicilline G IV ou Ceftriaxone IV + réanimation (EER précoce)`
  },
  {
    id: 'res-inf-10-astuces',
    courseId: 'crs-inf-10',
    title: 'Astuces & Mnémotechniques Leptospirose',
    type: 'astuce',
    content: `### Perles & Mnémos Leptospirose (Dr. LAIDANI.M)

1. **La Triade d'Orientation Clinique :**
   - **Conjonctivite** (suffusion bilatérale)
   - **Molets** douloureux (myalgies intenses)
   - **Ictère** flamboyant orangé

2. **La Formule du Syndrome de Weil : « W.E.I.L. »**
   - **W** - Wave of jaundice (ictère flamboyant)
   - **E** - Epuration rénale (EER précoce)
   - **I** - Insuffisance rénale avec HypoK initiale
   - **L** - Lung hemorrhage (SPHS alvéolite hémorragique)

3. **Le Piège du Bactrim :**
   - « Tout marche contre la leptospire sauf le Bactrim (TMP-SMX) ! »`
  }
];

// Lesson 11: Choléra
export const INFECTIO_LESSON_11_QUESTIONS: Question[] = [
  ...Array.from({ length: 25 }, (_, i) => {
    const questions = [
      {
        q: "Le vibrion cholérique responsable des pandémies actuelles (7e pandémie) et de l'épidémie en Algérie (Blida 2018) appartient principalement aux sérogroupes :",
        opts: ["O1 et O139 uniquement", "O1 (biotype Classique) et O22", "O1 (biotype El Tor) et O139 Bengal", "O139 et O22", "O1 classique uniquement"],
        ans: 2,
        exp: "La 7e pandémie (depuis 1961) est due à Vibrio cholerae O1 biotype El Tor (souche Ogawa en Algérie 2018), et O139 Bengal apparu en 1992."
      },
      {
        q: "La toxine cholérique (CTX) agit sur les entérocytes intestinaux en provoquant :",
        opts: ["Une destruction de la muqueuse intestinale avec ulcérations", "Une inhibition de l'adénylate cyclase", "Une fixation sur les récepteurs GM1 et activation de l'adénylate cyclase via la sous-unité A, augmentant l'AMPc et la sécrétion de Cl- et d'eau", "Une lyse osmotique des hématies", "Une stimulation de la motricité gastrique isolée"],
        ans: 2,
        exp: "La toxine AB5 se fixe au récepteur ganglioside GM1 via B; la sous-unité A active l'adénylate cyclase -> augmentation de l'AMPc intracellulaire -> sécrétion massive active d'eau et de chlorures sans lésion anatomique."
      },
      {
        q: "Concernant le réservoir de Vibrio cholerae, quel énoncé est exact ?",
        opts: ["L'homme est le seul réservoir", "Les crustacés, le zooplancton et les eaux saumâtres constituent un réservoir environnemental naturel aquatique", "Les bovins sont le réservoir exclusif", "Le vibrion ne survit pas dans l'eau douce", "Le portage sain asymptomatique n'existe pas"],
        ans: 1,
        exp: "Le réservoir est humain (malades et porteurs sains) et environnemental aquatique (zooplancton, coquillages)."
      },
      {
        q: "Un patient adulte présente un choléra typique. Selon les critères OMS, quel signe n'est PAS en faveur d’une déshydratation sévère ?",
        opts: ["Yeux très enfoncés, absence de larmes", "Pli cutané abdominal revenant très lentement (> 3 secondes)", "Léthargie ou inconscience", "Pouls radial faible ou imprenable", "Soif vive avec empressement à boire (signe de déshydratation modérée plan B)"],
        ans: 4,
        exp: "La soif vive avec empressement à boire caractérise la déshydratation modérée (Plan B); dans la déshydratation sévère (Plan C), le patient est incapable de boire."
      },
      {
        q: "Chez un adulte en état de collapsus hypovolémique par choléra sévère (Plan C de l'OMS), le soluté de perfusion de première intention est :",
        opts: ["Sérum glucosé à 5% seul", "Sérum glucosé isotonique", "Ringer lactate (ou solution de Hartmann)", "Sérum salé hypertonique à 3%", "Albumine humaine"],
        ans: 2,
        exp: "Le Ringer lactate est le soluté intraveineux de référence car il apporte du sodium, du potassium et du lactate qui corrige l'acidose métabolique."
      },
      {
        q: "Selon les recommandations actuelles, un adulte atteint de choléra avec déshydratation modérée à sévère reçoit en première intention après réhydratation :",
        opts: ["Amoxicilline 1g x 2 pendant 7 jours", "Doxycycline 300 mg en une prise unique orale (ou Azithromycine 1 g en dose unique)", "Cotrimoxazole pendant 5 jours", "Ceftriaxone IV", "Métronidazole"],
        ans: 1,
        exp: "L'antibiothérapie orale par Doxycycline 300 mg en prise unique (ou Azithromycine 1 g) raccourcit la durée de la diarrhée et de l'excrétion bactérienne."
      },
      {
        q: "Le test de diagnostic rapide (TDR) sur bandelette pour le choléra :",
        opts: ["Remplace définitivement la coproculture", "Détecte l'antigène lipopolysaccharidique (LPS) de V. cholerae O1 ou O139 en moins de 15 minutes", "Est positif uniquement chez le cadavre", "Repose sur la PCR", "Nécessite un laboratoire P3"],
        ans: 1,
        exp: "Le TDR sur bandelette immunochromatographique détecte le LPS O1/O139 dans les selles fraîches en 15 minutes."
      },
      {
        q: "La dose infectante de Vibrio cholerae est remarquablement plus faible (10^3 à 10^6 germes) lorsque la contamination se fait par :",
        opts: ["L'eau de boisson pure", "Les aliments solides (repas protégeant de l'acidité gastrique)", "Le contact des mains saines", "L'inhalation de poussières", "La voie percutanée"],
        ans: 1,
        exp: "Les aliments tamponnent l'acidité gastrique protectrice et permettent l'infection avec un inoculum beaucoup plus faible que l'eau seule."
      },
      {
        q: "Une complication métabolique majeure du choléra chez l'enfant non traité est :",
        opts: ["Hypernatrémie sévère", "Alcalose métabolique", "Hypokaliémie sévère avec arythmies et iléus paralytique", "Hypercalcémie", "Hyperuricémie"],
        ans: 2,
        exp: "Les selles cholériques sont très riches en potassium et bicarbonates, provoquant une hypokaliémie majeure et une acidose métabolique."
      },
      {
        q: "La « cholérine » correspond à :",
        opts: ["Une forme foudroyante mortelle", "Une diarrhée profuse avec coma d'emblée", "Une forme bénigne ou modérée avec quelques selles liquides, sans déshydratation sévère", "Un choléra sec sans diarrhée", "Une colite pseudomembraneuse"],
        ans: 2,
        exp: "La cholérine désigne les formes bénignes ambulatoires de choléra à faible risque de déshydratation."
      },
      {
        q: "En Algérie, lors de l'épidémie de Blida 2018, la mesure de santé publique essentielle pour interrompre la transmission a été :",
        opts: ["Vaccination générale obligatoire de toute la population", "Chloration de l'eau potable, assainissement des points d'eau, hygiène et isolement des cas", "Traitement antibiotique de masse de toute la wilaya", "Fermeture des frontières", "Confinement total"],
        ans: 1,
        exp: "La sécurisation de l'eau de boisson (chloration, interdiction de sources contaminées), l'hygiène et l'isolement hospitalier des cas ont stoppé l'épidémie."
      },
      {
        q: "Les vaccins oraux anticholériques actuels (Dukoral, Shanchol, Euvichol) sont :",
        opts: ["Des vaccins injectables sous-cutanés", "Des vaccins oraux composés de cellules entières inactivées de V. cholerae", "Réservés uniquement aux nourrissons", "Efficaces à 100% à vie", "Composés de bactéries vivantes sauvages"],
        ans: 1,
        exp: "Les vaccins oraux anticholériques (OCV) sont inactivés, administrés per os en 2 doses, conférant une protection de 60 à 80% pendant 2-3 ans."
      },
      {
        q: "La 7e pandémie de choléra (1961 à nos jours) a débuté en :",
        opts: ["Inde (delta du Gange)", "Indonésie (Sulawesi)", "Égypte", "Haïti", "Algérie"],
        ans: 1,
        exp: "La 7e pandémie à biotype El Tor a débuté en 1961 en Indonésie (Sulawesi) avant de se propager à travers le monde."
      },
      {
        q: "L'eau luminale dans le choléra devient hypertonique et attire l'eau passivement en raison de :",
        opts: ["L'efflux massif de chlorure et l'inhibition de la réabsorption de sodium induits par l'AMPc", "La destruction de la bordure en brosse", "Une nécrose villositaire", "Un appel d'air", "L'absence de protéines"],
        ans: 0,
        exp: "L'ouverture des canaux CFTR sous l'effet de l'AMPc libère le Cl- et bloque le cotransport Na+/H+, créant un gradient osmotique attirant l'eau."
      },
      {
        q: "Dans le choléra typique non compliqué, la température corporelle est :",
        opts: ["Élevée à 40°C avec frissons", "Normale ou basse (apyrexie voire hypothermie en cas de collapsus)", "Oscillante en vagues", "Fébrile le soir", "Toujours à 38,5°C"],
        ans: 1,
        exp: "Le choléra pur est une toxi-infection afébrile; la présence de fièvre doit faire suspecter une surinfection (bactériémie, pneumopathie)."
      },
      {
        q: "La formule de la solution de réhydratation orale (SRO) artisanale maison de l'OMS (pour 1 litre d'eau bouillie) est :",
        opts: ["1 cuillère à café de sel + 2 cuillères de sucre", "1/2 cuillère à café de sel (3,5 g) + 4 cuillères à soupe de sucre (environ 40 g)", "1 cuillère à soupe de sel + 8 cuillères de sucre", "1 cuillère de bicarbonate seul", "Un litre de lait"],
        ans: 1,
        exp: "Formule standard de dépannage : 1/2 cuillère à café de sel de table + 4 cuillères à soupe rases de sucre dans 1 litre d'eau propre."
      },
      {
        q: "Chez une femme enceinte atteinte de choléra avec déshydratation sévère, quel antibiotique oral est recommandé ?",
        opts: ["Doxycycline", "Azithromycine (1 g en dose unique)", "Ciprofloxacine", "Ampicilline", "Métronidazole"],
        ans: 1,
        exp: "L'azithromycine est sûre pendant la grossesse et très efficace sur Vibrio cholerae."
      },
      {
        q: "L'épidémie historique majeure de choléra en Algérie au 20e siècle avant 2018 a eu lieu en :",
        opts: ["1970", "1986 (avec plus de 8 000 cas)", "1995", "1962", "2005"],
        ans: 1,
        exp: "L'Algérie a connu une grande épidémie en 1986 avec 8 000 cas déclarés et 452 décès, suivie d'une élimination progressive jusqu'à Blida 2018."
      },
      {
        q: "Quel agent pathogène N'est PAS une cause classique de syndrome cholériforme aqueux abondant ?",
        opts: ["Escherichia coli entérotoxinogène (ETEC)", "Bacillus cereus", "Clostridium perfringens", "Shigella dysenteriae (syndrome dysentérique invasif glairo-sanglant)", "Staphylococcus aureus"],
        ans: 3,
        exp: "Shigella donne un syndrome dysentérique invasif (selles afécales glairo-sanglantes, épreintes, fièvre élevée)."
      },
      {
        q: "La désinfection chimique de l'eau de boisson à domicile en période d'épidémie de choléra se fait par :",
        opts: ["1 goutte de vinaigre par litre", "2 gouttes d'eau de Javel à 12° chlorométrique par litre d'eau, avec un temps de contact de 30 minutes", "Alcool à 70°", "Filtration sur gaze", "Bicarbonate"],
        ans: 1,
        exp: "La chloration par 2 gouttes d'eau de Javel par litre d'eau avec 30 minutes de repos assure la destruction de V. cholerae."
      },
      {
        q: "Vibrio cholerae se multiplie préférentiellement dans quel environnement digestif ?",
        opts: ["L'estomac très acide", "L'intestin grêle à pH alcalin", "Le côlon sigmoïde", "La vésicule biliaire uniquement", "Le rectum"],
        ans: 1,
        exp: "V. cholerae est acido-sensible et prolifère électivement en milieu alcalin dans l'intestin grêle."
      },
      {
        q: "La déclaration du choléra en Algérie est :",
        opts: ["Facultative", "Obligatoire et immédiate par voie télégraphique / téléphonique au MSPRH et à l'OMS", "Réservée aux cas d'autopsie", "Mensuelle", "Inutile"],
        ans: 1,
        exp: "Le choléra est une maladie à déclaration obligatoire (MDO) internationale immédiate soumise au Règlement Sanitaire International (RSI)."
      },
      {
        q: "Selon le Plan B de l'OMS (déshydratation modérée), quelle quantité de SRO administrer aux 4 premières heures chez un enfant de 18 mois (10 kg) ?",
        opts: ["200 à 400 mL", "600 à 800 mL (approximativement 75 mL/kg)", "1 500 mL", "2 500 mL", "50 mL"],
        ans: 1,
        exp: "Règle du Plan B OMS : 75 mL/kg de SRO au cours des 4 premières heures (pour 10 kg -> 750 mL, soit tranche 600-800 mL)."
      },
      {
        q: "L'insuffisance rénale aiguë au cours du choléra déshydratant sévère est de mécanisme :",
        opts: ["Glomérulonéphrite aiguë", "Fonctionnel pré-rénal par hypovolémie sévère pouvant évoluer vers une nécrose tubulaire aiguë en l'absence de réhydratation", "Obstructif", "Toxique direct", "Néphrite interstitielle"],
        ans: 1,
        exp: "L'hypoperfusion rénale secondaire au collapsus hypovolémique entraîne une IRA pré-rénale puis une NTA ischémique."
      },
      {
        q: "La chimioprophylaxie de masse par antibiotiques en population générale lors d'une épidémie de choléra est :",
        opts: ["Recommandée par l'OMS", "Formellement déconseillée car inefficace et sélectionneuse de souches multi-résistantes", "Obligatoire", "Réservée aux soignants", "Préférée au vaccin"],
        ans: 1,
        exp: "L'OMS déconseille la chimioprophylaxie de masse qui favorise les résistances sans stopper la chaîne de transmission hydrique."
      }
    ];

    const c = questions[i];
    return {
      id: `q-inf-11-${String(i + 1).padStart(2, '0')}`,
      courseId: 'crs-inf-11',
      questionNumber: i + 1,
      type: 'QCM' as const,
      content: c.q,
      options: [
        "A. " + c.opts[0],
        "B. " + c.opts[1],
        "C. " + c.opts[2],
        "D. " + c.opts[3],
        "E. " + c.opts[4]
      ],
      correctAnswers: [c.ans],
      explanation: c.exp,
      difficulty: 'facile' as const
    };
  }),

  // 5 Cas cliniques Choléra
  {
    id: 'q-inf-11-cc1',
    courseId: 'crs-inf-11',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Homme de 28 ans à Blida, diarrhée aqueuse profuse « eau de riz » (> 20 selles en 6h), vomissements, PA 70/40 mmHg, pouls filant, léthargique, pli cutané > 3 secondes. Pas de fièvre.\n\nQuelle est la conduite immédiate prioritaire et quel antibiotique oral après correction volémique ?",
    options: [
      "A. Coproculture seule / Doxycycline",
      "B. Réhydratation intraveineuse d'urgence par Ringer lactate (Plan C OMS) / Doxycycline 300 mg en prise unique",
      "C. Doxycycline immédiate per os / Pas de perfusion",
      "D. Ciprofloxacine IV / Remplissage au sérum glucosé",
      "E. SRO exclusif"
    ],
    correctAnswers: [1],
    explanation: "Déshydratation sévère avec choc hypovolémique (Plan C) : perfusion immédiate de Ringer lactate sur 2 abords veineux, puis Doxycycline 300 mg en prise unique dès la reprise de conscience.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-11-cc2',
    courseId: 'crs-inf-11',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Enfant de 4 ans (15 kg), diarrhée liquide depuis 12h, soif vive, yeux creux, pli cutané s'effaçant en 2 secondes, agité sans collapsus.\n\nQuel plan de réhydratation OMS et quelle quantité de SRO dans les 4 premières heures ?",
    options: [
      "A. Plan A / 400 mL",
      "B. Plan B OMS (déshydratation modérée) / 800 à 1 200 mL de SRO sur 4 heures",
      "C. Plan C / Perfusion glucosée",
      "D. Hospitalisation réanimation / 3 000 mL",
      "E. Antibiotiques seuls"
    ],
    correctAnswers: [1],
    explanation: "Déshydratation modérée (Plan B) : administration de SRO à raison de 75 mL/kg sur 4 heures (15 kg x 75 = 1 125 mL, soit tranche 800-1200 mL).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-11-cc3',
    courseId: 'crs-inf-11',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Femme enceinte de 32 SA dans un contexte d'épidémie de choléra, diarrhée profuse depuis 8 heures avec signes de choc hypovolémique.\n\nQuel antibiotique oral administrer après la stabilisation hémodynamique ?",
    options: [
      "A. Doxycycline",
      "B. Azithromycine 1 g en prise unique orale",
      "C. Ciprofloxacine",
      "D. Métronidazole",
      "E. Amoxicilline"
    ],
    correctAnswers: [1],
    explanation: "L'azithromycine (1 g en prise unique) est l'antibiotique de référence chez la femme enceinte atteinte de choléra (les cyclines étant contre-indiquées).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-11-cc4',
    courseId: 'crs-inf-11',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Patient de 45 ans confirmé porteur de Vibrio cholerae O1 El Tor Ogawa. La famille proche partage le même toit et les repas.\n\nQuelle mesure préventive collective pour l'entourage immédiat ?",
    options: [
      "A. Confinement militaire",
      "B. Éducation sanitaire, désinfection de l'eau (chloration), lavage des mains, surveillance clinique et chimioprophylaxie ciblée possible (Doxycycline dose unique)",
      "C. Aucune mesure",
      "D. Sérothérapie antitoxique",
      "E. Vaccination parentérale"
    ],
    correctAnswers: [1],
    explanation: "Les mesures d'hygiène de l'eau et des mains sont primordiales, complétées par la chimioprophylaxie ciblée aux contacts étroits sous le même toit.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-11-cc5',
    courseId: 'crs-inf-11',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Nourrisson de 9 mois (7 kg), yeux très enfoncés, absence de larmes, hypotonique, pouls très faible. Choléra sévère diagnostiqué.\n\nQuel protocole de prise en charge complet ?",
    options: [
      "A. Ringer lactate IV en urgence (Plan C pédiatrique) + supplémentation en Zinc pendant 14 jours + Azithromycine orale (20 mg/kg)",
      "B. SRO exclusif",
      "C. Dobutamine seule",
      "D. Transfusion sanguine",
      "E. Corticothérapie"
    ],
    correctAnswers: [0],
    explanation: "Le choléra sévère du nourrisson impose la perfusion de Ringer lactate, l'antibiothérapie par Azithromycine et la supplémentation systématique en Zinc (20 mg/j x 14j) qui réduit la durée et la gravité.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_11_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-11-mindmap',
    courseId: 'crs-inf-11',
    title: 'Mind Map : Le Choléra (Vibrio cholerae)',
    type: 'mindmap',
    content: `# Mind Map : Le Choléra

## 1. Bactériologie & Toxine
- **Vibrio cholerae** : Bacille Gram négatif incurvé (« en virgule »), mobile
- **Sérogroupes épidémiques** : O1 (biotypes Classique et El Tor, sérotypes Ogawa/Inaba) et O139 Bengal
- **Toxine cholérique (CTX)** : Fixation récepteur GM1 -> activation adénylcyclase -> fuite massive de Cl- et d'eau (jusqu'à 1 litre/heure !)

## 2. Tableau Clinique & Déshydratation OMS
- **Incubation** : Très courte (quelques heures à 5 jours)
- **Clinique** : Diarrhée aqueuse afébrile (« eau de riz »), vomissements, crampes musculaires par hypokaliémie
- **Les 3 Plans de Traitement OMS** :
  - *Plan A* : Pas de déshydratation -> SRO à domicile après chaque selle
  - *Plan B* : Déshydratation modérée -> SRO aux urgences (75 mL/kg en 4h)
  - *Plan C* : Déshydratation sévère / choc -> Ringer lactate IV immédiat (100 mL/kg)

## 3. Thérapeutique Spécifique & Hygiène
- **Antibiothérapie curative** : Doxycycline 300 mg dose unique (adulte) ou Azithromycine 1 g (femme enceinte et enfant)
- **Supplémentation en Zinc** : 20 mg/j x 14 jours chez l'enfant
- **Mesures d'hygiène** : Chloration de l'eau (2 gouttes de javel par litre, repos 30 min)`
  },
  {
    id: 'res-inf-11-astuces',
    courseId: 'crs-inf-11',
    title: 'Mnémotechniques Choléra',
    type: 'astuce',
    content: `### Perles & Mnémos Choléra (Dr. LAIDANI.M)

1. **Signes de Déshydratation Sévère (Plan C) : « YE - PLI - P - C »**
   - **YE**ux très enfoncés
   - **PLI** cutané > 3 secondes
   - **P**ouls imprenable / collapsus
   - **C**onscience altérée (léthargie / coma)

2. **La règle antibiotique :**
   - Adulte : **Doxy 300** mg unique
   - Femme enceinte / enfant : **Azithro 1g** unique (20 mg/kg)

3. **SRO Maison :**
   - 1/2 cuillère à café de sel + 4 cuillères à soupe de sucre dans 1 litre d'eau propre !`
  }
];

// Lesson 12: VIH / SIDA
export const INFECTIO_LESSON_12_QUESTIONS: Question[] = [
  ...Array.from({ length: 25 }, (_, i) => {
    const questions = [
      {
        q: "Selon les estimations 2024 de l’OMS, combien de personnes vivaient avec le VIH dans le monde ?",
        opts: ["30,2 millions", "35,5 millions", "40,8 millions", "45,9 millions", "28,1 millions"],
        ans: 2,
        exp: "On estime que 40,8 millions de personnes vivaient avec le VIH en 2024, dont plus des deux tiers en Afrique subsaharienne."
      },
      {
        q: "D’après le relevé épidémiologique algérien (2023), quel est le mode de transmission majoritaire du VIH en Algérie ?",
        opts: ["Rapports homosexuels exclusifs", "Transmission mère-enfant", "Usage de drogues injectables", "Rapports hétérosexuels (représentant environ 76% des cas)", "Transfusion sanguine"],
        ans: 3,
        exp: "En Algérie, la voie hétérosexuelle est de loin la plus fréquente (76%), suivie des HSH (16%) et de la transmission mère-enfant (9%)."
      },
      {
        q: "Un patient de 28 ans consulte 15 jours après un rapport sexuel non protégé à risque pour fièvre à 39°C, éruption maculopapuleuse, pharyngite, ulcérations buccales et polyadénopathies. Quel est le diagnostic le plus probable ?",
        opts: ["Angine streptococcique", "Primo-infection par le VIH", "Diarrhée bactérienne", "Hépatite B aiguë", "Toxoplasmose isolée"],
        ans: 1,
        exp: "Le tableau de primo-infection VIH associe classiquement syndrome pseudo-grippal fébrile, rash maculopapuleux du tronc, adénopathies et ulcérations buccales ou génitales."
      },
      {
        q: "Quel test sérologique est considéré comme le test de confirmation de référence du statut VIH après deux tests ELISA positifs ?",
        opts: ["Charge virale par PCR ARN", "Western-Blot mettant en évidence les anticorps anti-protéines virales (gp160, gp120, gp41, p24)", "Test rapide TROD", "Antigénémie p24 seule", "Numération formule sanguine"],
        ans: 1,
        exp: "Le Western-Blot détectant les anticorps dirigés contre les protéines structurales d'enveloppe et du core confirme formellement l'infection."
      },
      {
        q: "Les inhibiteurs de l’intégrase (ex: Dolutégravir, Raltégravir, Bictégravir) agissent en bloquant quelle étape du cycle du VIH ?",
        opts: ["La fusion avec la membrane cellulaire", "La transcription inverse de l'ARN viral en ADN", "L'intégration de l'ADN proviral dans le génome de la cellule hôte", "Le clivage des polyprotéines par la protéase", "La fixation au corécepteur CCR5"],
        ans: 2,
        exp: "Les INI bloquent l'enzyme intégrase, empêchant l'insertion définitive du provirus dans l'ADN chromosomique de la cellule infectée."
      },
      {
        q: "Un patient VIH avec CD4 à 120/mm³ présente toux sèche, dyspnée progressive et hypoxie avec infiltrats interstitiels bilatéraux péri-hilaires. Quel traitement d'urgence instaurer ?",
        opts: ["Amphotéricine B", "Cotrimoxazole à forte dose (15 mg/kg/j de TMP) pendant 21 jours associé à la corticothérapie si hypoxie", "Ganciclovir", "Fluconazole", "Isoniazide"],
        ans: 1,
        exp: "La pneumocystose à Pneumocystis jirovecii se traite par Cotrimoxazole à forte dose pendant 21 jours, avec corticothérapie si PaO2 < 70 mmHg."
      },
      {
        q: "Devant des lésions cérébrales multiples nodulaires avec prise de contraste annulaire en « cocarde » au scanner chez un patient VIH avec CD4 < 100/mm³, l'argument diagnostique clé pour la toxoplasmose est :",
        opts: ["L'isolement du parasite dans le LCR", "La biopsie cérébrale systématique", "La réponse clinique et radiologique rapide à un traitement d'épreuve par Cotrimoxazole", "La négativité de la sérologie", "L'hyperéosinophilie"],
        ans: 2,
        exp: "Le diagnostic de toxoplasmose cérébrale repose sur l'imagerie typique (cocarde) et la régression sous traitement d'épreuve antiparasitaire."
      },
      {
        q: "À partir de quel seuil de lymphocytes T CD4 recommande-t-on une prophylaxie primaire par cotrimoxazole contre la pneumocystose chez un patient VIH ?",
        opts: ["CD4 < 500/mm³", "CD4 < 200/mm³ (ou < 15%)", "CD4 < 100/mm³", "Quel que soit le taux de CD4", "Uniquement si antécédent de pneumopathie"],
        ans: 1,
        exp: "La prophylaxie primaire par Cotrimoxazole (1 comprimé simple par jour) est systématiquement prescrite dès que les CD4 passent sous 200/mm³."
      },
      {
        q: "Dans les pays d'endémie tuberculeuse comme l’Algérie, quelle est la première cause de décès chez les personnes vivant avec le VIH (PVVIH) ?",
        opts: ["Sarcome de Kaposi", "Toxoplasmose cérébrale", "La tuberculose (pulmonaire et disséminée)", "La cryptococcose méningée", "Le lymphome"],
        ans: 2,
        exp: "La tuberculose est la principale infection opportuniste létale chez les PVVIH dans le monde et en Algérie."
      },
      {
        q: "Quel est l’objectif virologique prioritaire à atteindre dans les 6 mois suivant la mise sous traitement antirétroviral ?",
        opts: ["CD4 > 500/mm³", "Charge virale < 1 000 copies/mL", "Charge virale indétectable plasmatique (ARN VIH < 50 copies/mL)", "Disparition des anticorps anti-VIH", "Négativation de la sérologie"],
        ans: 2,
        exp: "L'objectif thérapeutique central est l'indétectabilité virologique (< 50 copies/mL) assurant la restauration immunitaire et la non-transmission (U=U : Indétectable = Intransmissible)."
      },
      {
        q: "Chez une femme enceinte séropositive VIH sans traitement, à quel moment la transmission mère-enfant (TME) survient-elle le plus fréquemment ?",
        opts: ["Au 1er trimestre de grossesse", "Au 2e trimestre", "Pendant le travail et l'accouchement (exposition au sang et aux sécrétions génitales)", "Exclusivement pendant l'allaitement", "Avant la conception"],
        ans: 2,
        exp: "Le risque majeur de transmission verticale survient lors de l'accouchement (environ 65-70% du risque total de TME en l'absence de traitement)."
      },
      {
        q: "Dans la région MENA (Moyen-Orient et Afrique du Nord), quelle population clé a connu la plus forte augmentation des nouvelles contaminations (+95%) ?",
        opts: ["Les travailleuses du sexe", "Les hommes ayant des rapports sexuels avec des hommes (HSH)", "Les usagers de drogues injectables", "Les femmes au foyer", "Les enfants"],
        ans: 1,
        exp: "Les données de l'ONUSIDA montrent une augmentation alarmante de +95% des nouvelles infections parmi les HSH dans la région MENA."
      },
      {
        q: "Un patient séropositif VIH a un taux de CD4 à 550/mm³ et une charge virale à 20 000 copies/mL, sans aucun symptôme. Quelle affirmation est vraie ?",
        opts: ["Le virus est dormant et ne se réplique plus", "Il s'agit d'une phase de latence clinique avec réplication virale active continue", "Le patient ne peut pas transmettre le virus", "Il a guéri spontanément", "La durée moyenne de cette phase est de 6 mois"],
        ans: 1,
        exp: "La phase chronique asymptomatique dure en moyenne 8 à 10 ans; la clinique est silencieuse mais la réplication virale et la destruction des CD4 sont permanentes."
      },
      {
        q: "Quelle est l’étiologie de la Leucoencéphalopathie Multifocale Progressive (LEMP) survenant chez les patients au stade SIDA ?",
        opts: ["Le virus JC (polyomavirus opportuniste)", "Le cytomégalovirus", "Toxoplasma gondii", "Le virus de l'herpès type 6", "Le VIH directement"],
        ans: 0,
        exp: "La LEMP est causée par la réactivation du polyomavirus JC qui détruit les oligodendrocytes et provoque une démyélinisation de la substance blanche."
      },
      {
        q: "Le sarcome de Kaposi cutanéo-muqueux chez les patients atteints du SIDA est induit par quel agent viral oncogène ?",
        opts: ["Le virus d'Epstein-Barr (EBV)", "Le papillomavirus humain (HPV)", "L'herpèsvirus humain de type 8 (HHV-8)", "Le cytomégalovirus (CMV)", "Le HTLV-1"],
        ans: 2,
        exp: "Le sarcome de Kaposi est une prolifération vasculaire tumorale induite par l'infection par le virus HHV-8 chez l'immunodéprimé."
      },
      {
        q: "La Prophylaxie Post-Exposition (TPE) au VIH après piqûre accidentelle avec une aiguille souillée par du sang VIH+ doit être débutée :",
        opts: ["Dans les 4 heures (maximum 48 heures) pour une durée de 28 jours", "Après réception du Western-Blot", "Dans la semaine", "Uniquement si la sérologie à J15 se positive", "Pendant 3 mois"],
        ans: 0,
        exp: "Le TPE est une urgence : initiation idéale < 4 heures (max 48h) par une trithérapie pendant 28 jours."
      },
      {
        q: "Pourquoi le traitement antirétroviral ne permet-il pas d'éradiquer définitivement le VIH de l'organisme ?",
        opts: ["Parce que le virus détruit tous les globules blancs", "En raison de la persistance de réservoirs cellulaires latents (lymphocytes T CD4 mémoire contenant l'ADN proviral intégré quiescent)", "Parce que les médicaments ne pénètrent pas dans le foie", "Parce que le virus mute toutes les 5 minutes", "Parce que le thymus ne fonctionne plus"],
        ans: 1,
        exp: "L'obstacle majeur à la guérison est l'existence de réservoirs viraux latents (T CD4 mémoire à longue durée de vie) insensibles aux antirétroviraux actuels."
      },
      {
        q: "Quel schéma de trithérapie antirétrovirale de première ligne est actuellement privilégié selon l’OMS et les recommandations internationales ?",
        opts: ["2 INTI + 1 Inhibiteur d'Intégrase (ex: Ténofovir + Emtricitabine/Lamivudine + Dolutégravir)", "3 INNTI sans inhibiteur nucléosidique", "Monothérapie par Inhibiteur de Protéase", "2 Inhibiteurs de fusion", "Interféron + Ribavirine"],
        ans: 0,
        exp: "L'association de 2 INTI (TDF/FTC ou TDF/3TC) + Dolutégravir (DTG) est le schéma de référence mondial grâce à sa puissance, sa haute barrière génétique et sa tolérance."
      },
      {
        q: "Un patient VIH avec CD4 à 35/mm³ présente céphalées, vomissements et léthargie. L'examen direct du LCR à l’encre de Chine retrouve des levures capsulées bourgeonnantes. Traitement de choix :",
        opts: ["Cotrimoxazole", "Amphotéricine B liposomale + Flucytosine pendant 2 semaines, puis relais par Fluconazole", "Ganciclovir", "Aciclovir", "Ceftriaxone"],
        ans: 1,
        exp: "La méningite à Cryptococcus neoformans se traite par Amphotéricine B + Flucytosine (traitement d'attaque de 2 semaines) suivi d'une consolidation par Fluconazole."
      },
      {
        q: "Au cours de l'infection chronique par le VIH, quelle anomalie biologique humorale est fréquemment observée ?",
        opts: ["Une agammaglobulinémie complète", "Une hypergammaglobulinémie polyclonale (stimulation B non spécifique permanente)", "Une thrombocytose majeure", "Une polyglobulie", "Une hypocalcémie isolée"],
        ans: 1,
        exp: "L'hypergammaglobulinémie polyclonale résulte de l'activation immune chronique et anarchique des lymphocytes B stimulés par les protéines virales."
      },
      {
        q: "Le concept « U = U » (Undetectable = Untransmittable / Indétectable = Intransmissible) signifie :",
        opts: ["Qu'une personne avec une charge virale indétectable depuis plus de 6 mois sous ARV ne transmet pas le VIH par voie sexuelle", "Que le virus a complètement disparu de l'organisme", "Qu'on peut arrêter le traitement", "Que la personne est guérie", "Que le dépistage sera négatif"],
        ans: 0,
        exp: "Une charge virale durablement indétectable supprime le risque de transmission sexuelle du VIH (fondement de la stratégie Treatment as Prevention - TasP)."
      },
      {
        q: "La rétinite à Cytomégalovirus (CMV) survient typiquement chez le patient VIH lorsque le taux de CD4 passe en dessous de :",
        opts: ["500/mm³", "350/mm³", "200/mm³", "50/mm³", "100/mm³"],
        ans: 3,
        exp: "La rétinite à CMV est une complication d'immunodépression extrême survenant quasi exclusivement avec un taux de CD4 < 50/mm³."
      },
      {
        q: "Un patient sous antirétroviraux présente une charge virale qui remonte à 1 500 copies/mL après avoir été indétectable. La cause la plus fréquente est :",
        opts: ["Une mauvaise observance thérapeutique (prises oubliées)", "Une résistance naturelle apparue sans mutation", "Une surinfection par le VHA", "La consommation d'alcool modérée", "L'âge"],
        ans: 0,
        exp: "Les défauts d'observance sont la cause numéro 1 d'échappement virologique et favorisent la sélection de mutations de résistance."
      },
      {
        q: "Le stade SIDA (stade C selon la classification CDC) est défini par :",
        opts: ["Un taux de CD4 < 500/mm³", "La présence d'au moins une infection opportuniste majeure (stade C) ou un taux de CD4 < 200/mm³", "La seule positivité du Western-Blot", "Une charge virale > 100 000 copies", "Un zona cutané"],
        ans: 1,
        exp: "Le stade SIDA est défini par la survenue d'une pathologie classante (pneumocystose, toxoplasmose, Kaposi...) ou un taux de CD4 < 200/mm³."
      },
      {
        q: "Concernant le VIH-2, quelle particularité est exacte par rapport au VIH-1 ?",
        opts: ["Il est beaucoup plus pathogène et résistant à tous les ARV", "Il est prédominant en Afrique de l'Ouest, progresse plus lentement vers le SIDA, présente une transmissibilité plus faible et une résistance naturelle aux INNTI", "Il se transmet par les moustiques", "Il ne donne jamais de SIDA", "Il n'est pas détecté par les tests de 4e génération"],
        ans: 1,
        exp: "Le VIH-2 est endémique en Afrique de l'Ouest, moins virulent, avec une charge virale plus faible et une résistance naturelle aux INNTI (névirapine, éfavirenz)."
      }
    ];

    const c = questions[i];
    return {
      id: `q-inf-12-${String(i + 1).padStart(2, '0')}`,
      courseId: 'crs-inf-12',
      questionNumber: i + 1,
      type: 'QCM' as const,
      content: c.q,
      options: [
        "A. " + c.opts[0],
        "B. " + c.opts[1],
        "C. " + c.opts[2],
        "D. " + c.opts[3],
        "E. " + c.opts[4]
      ],
      correctAnswers: [c.ans],
      explanation: c.exp,
      difficulty: 'facile' as const
    };
  }),

  // 5 Cas cliniques VIH/SIDA
  {
    id: 'q-inf-12-cc1',
    courseId: 'crs-inf-12',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Homme de 22 ans, fièvre à 39°C depuis 12 jours, pharyngite, adénopathies cervicales, ulcérations buccales douloureuses et éruption maculopapuleuse du tronc. Rapport non protégé avec nouvelle partenaire il y a 3 semaines.\n\nQuel est le diagnostic le plus probable et l'examen de confirmation précoce ?",
    options: [
      "A. Mononucléose / MNI test",
      "B. Primo-infection par le VIH / Charge virale ARN plasmatique + ELISA 4G (Ag p24)",
      "C. Fièvre typhoïde / Hémoculture",
      "D. Rougeole / Sérologie",
      "E. Syphilis / VDRL"
    ],
    correctAnswers: [1],
    explanation: "Primo-infection par le VIH (fièvre, rash, ulcères, délai de 3 semaines). La PCR ARN VIH et la détection de l'antigène p24 confirment le diagnostic avant la positivité complète du Western-Blot.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-12-cc2',
    courseId: 'crs-inf-12',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Patiente séropositive connue avec CD4 à 170/mm³, dysphagie rétrosternale douloureuse, plaques blanchâtres buccales décollables au raclage.\n\nQuel stade clinique de candidose et quelle prophylaxie primaire obligatoire débuter ?",
    options: [
      "A. Candidose buccale simple / Aucune prophylaxie",
      "B. Candidose œsophagienne (pathologie classante SIDA) / Prophylaxie primaire par Cotrimoxazole (1 cp/j)",
      "C. RGO simple / IPP",
      "D. Aphtose / Bains de bouche",
      "E. Kaposi / Chimiothérapie"
    ],
    correctAnswers: [1],
    explanation: "La dysphagie douloureuse avec muguet signe la candidose œsophagienne (stade SIDA). Avec CD4 < 200/mm³, la prophylaxie primaire par Cotrimoxazole est impérative.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-12-cc3',
    courseId: 'crs-inf-12',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Interne en chirurgie piqué par une aiguille creuse souillée de sang d'un patient source séropositif VIH avec charge virale élevée. Consultation 2 heures après l'incident.\n\nQuelle est la conduite à tenir immédiate ?",
    options: [
      "A. Surveillance sérologique sans traitement",
      "B. Débuter une Prophylaxie Post-Exposition (TPE) par trithérapie pendant 28 jours avant la 4e heure",
      "C. Vaccination anti-VIH",
      "D. Sérologie à M3 uniquement",
      "E. Monothérapie par zidovudine"
    ],
    correctAnswers: [1],
    explanation: "Urgence médicale : débuter le TPE (trithérapie) le plus vite possible (< 4h) pour une durée totale de 28 jours, avec déclaration d'accident du travail.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-12-cc4',
    courseId: 'crs-inf-12',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Patient VIH avec CD4 à 85/mm³, céphalées invalidantes, hémiparésie droite et fébricule. L'IRM cérébrale met en évidence de multiples lésions en cocarde (anneau de contraste) des noyaux gris centraux.\n\nQuel est le traitement probabiliste de première intention ?",
    options: [
      "A. Cotrimoxazole à forte dose (ou Pyriméthamine + Sulfadiazine) pendant 6 semaines",
      "B. Aciclovir IV",
      "C. Fluconazole",
      "D. Ganciclovir",
      "E. Corticoïdes seuls"
    ],
    correctAnswers: [0],
    explanation: "Toxoplasmose cérébrale de l'immunodéprimé : traitement d'attaque antiparasitaire par Cotrimoxazole à dose curative (ou pyriméthamine-sulfadiazine) pendant 6 semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-12-cc5',
    courseId: 'crs-inf-12',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Homme de 40 ans chez qui on découvre une séropositivité VIH. Il est asymptomatique, avec un taux de CD4 à 520/mm³ et une charge virale à 35 000 copies/mL.\n\nQuelle est la recommandation actuelle pour l'initiation du traitement antirétroviral ?",
    options: [
      "A. Attendre que les CD4 descendent sous 350/mm³",
      "B. Débuter le traitement antirétroviral immédiatement quel que soit le taux de CD4 (« Treat All »)",
      "C. Traiter seulement s'il présente une infection opportuniste",
      "D. Monothérapie d'attente",
      "E. Pas de traitement"
    ],
    correctAnswers: [1],
    explanation: "La stratégie internationale « Treat All » préconise de traiter toute personne séropositive dès le diagnostic, quel que soit son taux de CD4, pour préserver l'immunité et supprimer la transmission (U=U).",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_12_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-12-mindmap',
    courseId: 'crs-inf-12',
    title: 'Mind Map : VIH / SIDA',
    type: 'mindmap',
    content: `# Mind Map : Infection par le VIH / SIDA

## 1. Virologie & Transmission
- **Virus** : Rétrovirus à ARN (Lentivirus), VIH-1 (mondial) et VIH-2 (Afrique de l'Ouest)
- **Cellule cible** : Lymphocyte T CD4+, macrophages, cellules dendritiques (récepteurs CD4 et corécepteurs CCR5/CXCR4)
- **Transmission en Algérie** : Hétérosexuelle (76%), HSH (16%), Mère-enfant (9%), Toxicomanie IV (1,5%)

## 2. Histoire Naturelle & Stades
- **1. Primo-infection (2-6 semaines)** : Syndrome pseudo-grippal fébrile, rash maculopapuleux, ulcérations, pic de virémie
- **2. Phase chronique asymptomatique (8-10 ans)** : Latence clinique mais réplication active persistante
- **3. Stade SIDA** : CD4 < 200/mm³ ou survenue d'une infection opportuniste majeure
  - *CD4 < 200* : Pneumocystose (P. jirovecii), Candidose œsophagienne
  - *CD4 < 100* : Toxoplasmose cérébrale (cocarde), Cryptococcose méningée
  - *CD4 < 50* : Rétinite à CMV, Mycobactéries atypiques (MAC)

## 3. Thérapeutique & Prévention
- **Trithérapie de référence** : 2 INTI + 1 Inhibiteur d'Intégrase (Dolutégravir)
- **Objectif** : Charge virale indétectable (< 50 copies/mL) -> **U = U (Indétectable = Intransmissible)**
- **Prophylaxie primaire** : Cotrimoxazole 1 cp/j si CD4 < 200/mm³
- **TPE (Post-exposition)** : Trithérapie 28 jours débutée < 4h (max 48h)`
  },
  {
    id: 'res-inf-12-astuces',
    courseId: 'crs-inf-12',
    title: 'Mnémotechniques VIH / SIDA',
    type: 'astuce',
    content: `### Pièges & Formules VIH (Dr. LAIDANI.M)

1. **Primo-infection : « F.U.R. »**
   - **F**ièvre
   - **U**lcérations buccales / génitales
   - **R**ash maculopapuleux

2. **Les Seuils de CD4 des Infections Opportunistes :**
   - **< 200** : Pneumocystose & Toxoplasmose -> **Cotrimoxazole**
   - **< 100** : Cryptococcose (Encre de Chine)
   - **< 50** : CMV (Rétinite)

3. **Le Concept U = U :**
   - Indétectable depuis 6 mois sous ARV = Zéro transmission sexuelle !`
  }
];
