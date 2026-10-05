import { Question, CourseResource } from '../../types/medical';

// Lesson 13: Infections à Staphylocoques
export const INFECTIO_LESSON_13_QUESTIONS: Question[] = [
  {
    id: 'q-inf-13-01',
    courseId: 'crs-inf-13',
    questionNumber: 1,
    type: 'QCM',
    content: "Parmi les caractéristiques bactériologiques suivantes, laquelle est INCORRECTE concernant les staphylocoques ?",
    options: [
      "A. Ce sont des cocci Gram positif groupés en amas",
      "B. Ils sont naturellement résistants à la colistine",
      "C. Plus de 90 % des S. aureus produisent une pénicillinase",
      "D. S. aureus est le seul staphylocoque à coagulase positive",
      "E. Ils sont thermolabiles et détruits facilement par la chaleur à 60°C"
    ],
    correctAnswers: [4],
    explanation: "INCORRECT : Les staphylocoques sont au contraire très résistants dans le milieu extérieur (dessiccation, sel, chaleur relative). Leurs entérotoxines sont particulièrement thermostables (résistent à 121°C pendant 30 min).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-02',
    courseId: 'crs-inf-13',
    questionNumber: 2,
    type: 'QCM',
    content: "La staphylokinase favorise la dissémination bactérienne par quel mécanisme ?",
    options: [
      "A. Elle transforme le fibrinogène en fibrine, protégeant la bactérie",
      "B. Elle lyse les caillots de fibrine riches en bactéries piégées, libérant des emboles septiques",
      "C. Elle détruit les polynucléaires par action leucotoxique directe",
      "D. Elle stimule la formation de biofilm sur les surfaces prothétiques",
      "E. Elle inhibe la phagocytose en clivant les opsonines"
    ],
    correctAnswers: [1],
    explanation: "La staphylokinase lyse la fibrine entourant les colonies bactériennes et permet la libération d'emboles septiques dans le courant circulatoire vers les organes cibles.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-03',
    courseId: 'crs-inf-13',
    questionNumber: 3,
    type: 'QCM',
    content: "Concernant le portage de S. aureus, quelle affirmation est exacte ?",
    options: [
      "A. La prévalence du portage dans la population générale est de 60 à 70 %",
      "B. Le site de portage principal est le périnée",
      "C. Les fosses nasales sont le réservoir préférentiel avec une prévalence de portage de 30 %",
      "D. La transmission est essentiellement aérienne par gouttelettes",
      "E. Les animaux constituent le principal réservoir épidémiologique"
    ],
    correctAnswers: [2],
    explanation: "Les fosses nasales constituent le réservoir majeur de S. aureus chez l'humain avec environ 30% de porteurs sains.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-04',
    courseId: 'crs-inf-13',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient est infecté par un SARM (S. aureus résistant à la méticilline). Quel antibiotique parmi les suivants conserve une activité fiable en première intention par voie IV ?",
    options: [
      "A. Oxacilline",
      "B. Céfazoline",
      "C. Amoxicilline-acide clavulanique",
      "D. Vancomycine (ou Daptomycine)",
      "E. Cloxacilline"
    ],
    correctAnswers: [3],
    explanation: "Le gène mecA modifiant la PLP2a confère une résistance croisée à TOUTES les bêtalactamines. Les glycopeptides (Vancomycine) ou lipopeptides (Daptomycine) sont le traitement de choix.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-05',
    courseId: 'crs-inf-13',
    questionNumber: 5,
    type: 'QCM',
    content: "Chez un enfant de 5 ans présentant un impétigo localisé péribuccal sans signes de gravité, quelle est la prise en charge recommandée ?",
    options: [
      "A. Antibiothérapie orale par amoxicilline-clavulanate 7 jours",
      "B. Soins locaux (eau/savon) et mupirocine topique 2-3 fois/j pendant 5 jours",
      "C. Antiseptiques locaux en spray 3 fois par jour",
      "D. Hospitalisation immédiate pour antibiothérapie IV",
      "E. Éviction scolaire systématique"
    ],
    correctAnswers: [1],
    explanation: "Impétigo croûteux peu étendu : toilette à l'eau et au savon suivie de l'application de mupirocine locale 2-3 fois par jour pendant 5 jours.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-06',
    courseId: 'crs-inf-13',
    questionNumber: 6,
    type: 'QCM',
    content: "La staphylococcie maligne de la face est une complication redoutable qui fait suite le plus souvent à :",
    options: [
      "A. Un impétigo étendu du tronc",
      "B. La manipulation d’un furoncle centro-facial (triangle naso-labial)",
      "C. Une folliculite de la barbe traitée par rasage",
      "D. Une morsure animale au niveau du visage",
      "E. Une sinusite maxillaire chronique surinfectée"
    ],
    correctAnswers: [1],
    explanation: "La manipulation ou pression d'un furoncle de la lèvre supérieure ou du nez projette les staphylocoques dans les veines angulaires communicant avec le sinus caverneux.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-07',
    courseId: 'crs-inf-13',
    questionNumber: 7,
    type: 'QCM',
    content: "Une bactériémie à S. aureus est particulièrement grave. Quelle est la proportion approximative associée à une endocardite infectieuse ?",
    options: [
      "A. 1 à 2 % des cas",
      "B. Environ 10 % des cas (justifiant une échocardiographie systématique)",
      "C. 30 % des cas",
      "D. 50 % des cas",
      "E. L'endocardite est exceptionnelle"
    ],
    correctAnswers: [1],
    explanation: "Environ 10% des bactériémies à S. aureus s'accompagnent d'une greffe endocarditique, imposant une ETT/ETO systématique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-08',
    courseId: 'crs-inf-13',
    questionNumber: 8,
    type: 'QCM',
    content: "Parmi les signes extracardiaques d’endocardite infectieuse, lequel est douloureux et retrouvé à la pulpe des doigts ?",
    options: [
      "A. Plaques de Janeway (indolores)",
      "B. Taches de Roth rétiniennes",
      "C. Faux panaris d’Osler (nodules érythémateux douloureux)",
      "D. Purpura conjonctival",
      "E. Glomérulopathie"
    ],
    correctAnswers: [2],
    explanation: "Faux panaris d'Osler = nodules dermiques sous-cutanés érythémateux très douloureux des pulpes des doigts et orteils (Osler = dOulOureux).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-09',
    courseId: 'crs-inf-13',
    questionNumber: 9,
    type: 'QCM',
    content: "Un adolescent de 16 ans présente une pneumopathie grave, nécrosante, bilatérale, 5 jours après un syndrome grippal. Quel est l’agent pathogène à évoquer en priorité et quel facteur de virulence est impliqué ?",
    options: [
      "A. Streptococcus pneumoniae — capsule",
      "B. S. aureus producteur de PVL (leucocidine de Panton-Valentine)",
      "C. Klebsiella pneumoniae — endotoxine",
      "D. Legionella pneumophila",
      "E. Haemophilus influenzae"
    ],
    correctAnswers: [1],
    explanation: "La pneumonie nécrosante post-grippale du sujet jeune avec hémoptysies et cavitations précoces est caractéristique du S. aureus sécréteur de PVL.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-10',
    courseId: 'crs-inf-13',
    questionNumber: 10,
    type: 'QCM',
    content: "Quel examen d’imagerie est l’examen de référence dans la spondylodiscite infectieuse, permettant un diagnostic précoce dès 3 jours de symptômes ?",
    options: [
      "A. Radiographie standard du rachis",
      "B. Scintigraphie osseuse au Tc99m",
      "C. Scanner (TDM) du rachis avec injection",
      "D. IRM du rachis (hypersignal T2 et érosions en miroir des plateaux)",
      "E. Échographie paravertébrale"
    ],
    correctAnswers: [3],
    explanation: "L'IRM rachidienne est l'examen de référence : elle objective l'atteinte discale et vertébrale précoce dès J3 alors que la radiographie a un retard de 3-6 semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-11',
    courseId: 'crs-inf-13',
    questionNumber: 11,
    type: 'QCM',
    content: "Le Toxic Shock Syndrome (TSS) staphylococcique est lié à la sécrétion de :",
    options: [
      "A. L’entérotoxine A",
      "B. La leucocidine de Panton-Valentine (PVL)",
      "C. La toxine TSST-1 (Toxic Shock Syndrome Toxin-1, superantigène)",
      "D. L’exfoliatine A",
      "E. La coagulase"
    ],
    correctAnswers: [2],
    explanation: "Le choc toxique staphylococcique (TSS) est causé par la TSST-1 agissant comme superantigène activateur massif des lymphocytes T.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-12',
    courseId: 'crs-inf-13',
    questionNumber: 12,
    type: 'QCM',
    content: "Le Staphylococcal Scalded Skin Syndrome (SSSS) du nourrisson se distingue du syndrome de Stevens-Johnson notamment par :",
    options: [
      "A. La présence d’une atteinte muqueuse étendue",
      "B. L’absence d’atteinte muqueuse et un décollement intra-épidermique superficiel",
      "C. Son mécanisme immunoallergique médicamenteux",
      "D. Sa survenue préférentielle chez l’adulte",
      "E. La présence de lésions dermiques profondes nécrotiques"
    ],
    correctAnswers: [1],
    explanation: "Dans le SSSS (exfoliatines), les muqueuses sont toujours respectées et le clivage de la desmogléine-1 est sous-corné superficiel, à l'inverse du SJS/Lyell.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-13',
    courseId: 'crs-inf-13',
    questionNumber: 13,
    type: 'QCM',
    content: "Lors d’une toxi-infection alimentaire staphylococcique, quel élément est caractéristique et oriente vers ce diagnostic ?",
    options: [
      "A. Délai d’incubation supérieur à 24h",
      "B. Fièvre élevée à 39-40°C",
      "C. Apparition des symptômes en moins de 2 à 4 heures avec vomissements au premier plan et apyrexie",
      "D. Diarrhée sanglante",
      "E. Durée prolongée des symptômes sur 7 jours"
    ],
    correctAnswers: [2],
    explanation: "Incubation ultra-courte (< 2 à 4h), vomissements incoercibles au premier plan, et absence de fièvre (intoxication par entérotoxine thermostable).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-14',
    courseId: 'crs-inf-13',
    questionNumber: 14,
    type: 'QCM',
    content: "Le biofilm staphylococcique est particulièrement impliqué dans les infections sur matériel étranger. Quelle propriété explique l’échec fréquent de l’antibiothérapie seule ?",
    options: [
      "A. Le biofilm sécrète des enzymes qui détruisent la vancomycine",
      "B. Le biofilm forme une barrière mécanique polysaccharidique impénétrable et place les bactéries en état de dormance métabolique",
      "C. Les bactéries mutent instantanément",
      "D. Il neutralise la vascularisation tissulaire",
      "E. Il attire les macrophages"
    ],
    correctAnswers: [1],
    explanation: "Le biofilm protège physiquement les bactéries et ralentit leur métabolisme, rendant les antibiotiques inefficaces et imposant le retrait du matériel.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-15',
    courseId: 'crs-inf-13',
    questionNumber: 15,
    type: 'QCM',
    content: "Un patient porteur d’un pace-maker présente une fièvre avec hémocultures positives à S. epidermidis. Quelle attitude est la plus appropriée ?",
    options: [
      "A. Ignorer les hémocultures car S. epidermidis est toujours un contaminant",
      "B. Traiter par amoxicilline orale 7 jours",
      "C. Considérer une infection sur matériel, réaliser une ETT/ETO et discuter l'ablation du stimulateur",
      "D. Traiter par céfazoline sans imagerie",
      "E. Rassurer le patient"
    ],
    correctAnswers: [2],
    explanation: "Chez un porteur de matériel intracardiaque, S. epidermidis est un agent pathogène redoutable responsable d'infection de sonde avec biofilm.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-16',
    courseId: 'crs-inf-13',
    questionNumber: 16,
    type: 'QCM',
    content: "Quelle est la durée d’antibiothérapie recommandée pour une spondylodiscite à S. aureus méti-sensible ?",
    options: [
      "A. 10 à 14 jours",
      "B. 3 semaines",
      "C. 6 semaines complètes (IV puis relais oral)",
      "D. 3 mois",
      "E. À vie"
    ],
    correctAnswers: [2],
    explanation: "Les infections ostéo-articulaires hématogènes nécessitent 6 semaines d'antibiothérapie bactéricide bien conduite.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-17',
    courseId: 'crs-inf-13',
    questionNumber: 17,
    type: 'QCM',
    content: "Un patient présente une furonculose récidivante depuis 8 mois. Après guérison d’une poussée, quelle mesure de décolonisation doit être instituée ?",
    options: [
      "A. Antibiothérapie systémique prolongée 3 mois",
      "B. Mupirocine nasale 2 fois/j pendant 7 jours + douches à la chlorhexidine 7 jours",
      "C. Vaccination anti-staphylococcique",
      "D. Immunoglobulines IV",
      "E. Antiseptiques topiques pendant 1 an"
    ],
    correctAnswers: [1],
    explanation: "Éradication du réservoir nasal par mupirocine locale 2x/j x 7j couplée aux douches à la chlorhexidine pour casser le cycle de réensemencement cutané.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-18',
    courseId: 'crs-inf-13',
    questionNumber: 18,
    type: 'QCM',
    content: "La coagulase de S. aureus joue un rôle essentiel dans la pathogénie. Quel est son principal mécanisme favorisant la persistance du foyer infectieux ?",
    options: [
      "A. Elle détruit les anticorps circulants",
      "B. Elle forme un manchon protecteur de fibrine autour du foyer, protégeant les bactéries de la phagocytose",
      "C. Elle inactive le complément",
      "D. Elle lyse les neutrophiles",
      "E. Elle stimule les lymphocytes T"
    ],
    correctAnswers: [1],
    explanation: "La coagulase coagule le plasma localement pour créer un caillot de fibrine abritant les bactéries des défenses immunitaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-19',
    courseId: 'crs-inf-13',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans une arthrite septique à S. aureus présumée, quel est le geste diagnostique le plus urgent et le plus informatif ?",
    options: [
      "A. Radiographie standard de l’articulation",
      "B. IRM articulaire",
      "C. Ponction articulaire en urgence avec analyse cytobactériologique du liquide synovial",
      "D. Scintigraphie osseuse",
      "E. Dosage des anticorps antistaphylolysines"
    ],
    correctAnswers: [2],
    explanation: "Ponction articulaire immédiate : liquide purulent (> 50 000 leucocytes avec > 90% PNN) avec examen direct au Gram et mise en culture.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-20',
    courseId: 'crs-inf-13',
    questionNumber: 20,
    type: 'QCM',
    content: "Concernant la rifampicine dans les infections à S. aureus, quelle affirmation est exacte ?",
    options: [
      "A. Elle peut être utilisée en monothérapie dans les ostéites",
      "B. Elle est inactive sur les staphylocoques en biofilm",
      "C. Elle doit toujours être associée à un autre antibiotique actif pour éviter l’émergence rapide de mutants résistants",
      "D. Elle est contre-indiquée dans les infections osseuses",
      "E. Elle est le traitement de choix en monothérapie des SARM"
    ],
    correctAnswers: [2],
    explanation: "La rifampicine a une excellente diffusion osseuse et anti-biofilm mais sélectionne des mutants résistants en quelques jours si prescrite seule.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-21',
    courseId: 'crs-inf-13',
    questionNumber: 21,
    type: 'QCM',
    content: "Un toxicomane par voie intraveineuse présente une endocardite staphylococcique tricuspidienne (cœur droit). Quelle est la complication d'embolie métastatique attendue ?",
    options: [
      "A. Accident vasculaire cérébral ischémique",
      "B. Infarctus splénique",
      "C. Embolies pulmonaires septiques avec infarctus et abcès pulmonaires multiples",
      "D. Ischémie aiguë du membre inférieur",
      "E. Infarctus mésentérique"
    ],
    correctAnswers: [2],
    explanation: "Les végétations tricuspidiennes (cœur droit) embolisent directement dans l'artère pulmonaire, provoquant des embolies pulmonaires septiques nécrosantes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-22',
    courseId: 'crs-inf-13',
    questionNumber: 22,
    type: 'QCM',
    content: "Parmi les antibiotiques suivants, lequel présente une résistance NATURELLE chez les staphylocoques ?",
    options: [
      "A. Vancomycine",
      "B. Daptomycine",
      "C. Colistine (Polymyxine)",
      "D. Linézolide",
      "E. Clindamycine"
    ],
    correctAnswers: [2],
    explanation: "Tous les staphylocoques (Gram positif) sont naturellement résistants à la colistine, à l'acide nalidixique et à l'aztréonam.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-23',
    courseId: 'crs-inf-13',
    questionNumber: 23,
    type: 'QCM',
    content: "L’ecthyma est une forme particulière d’infection cutanée caractérisée par :",
    options: [
      "A. Une folliculite superficielle bénigne",
      "B. Un impétigo bulleux du visage",
      "C. Un impétigo creusant et nécrotique ulcérant le derme, survenant sur terrain fragilisé (diabétique, dénutri)",
      "D. Une lésion purement sous-cutanée sans ulcération",
      "E. Une lésion virale auto-immune"
    ],
    correctAnswers: [2],
    explanation: "L'ecthyma est une forme nécrotique et ulcérative profonde d'impétigo, creusant le derme, siégeant préférentiellement aux jambes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-24',
    courseId: 'crs-inf-13',
    questionNumber: 24,
    type: 'QCM',
    content: "La prévention de la transmission croisée du SARM en milieu hospitalier repose en priorité sur :",
    options: [
      "A. L’antibiothérapie préventive de tous les soignants",
      "B. La décontamination UV permanente",
      "C. L’hygiène des mains par friction hydro-alcoolique (FHA) et les précautions complémentaires contact",
      "D. Le port obligatoire de lunettes de protection",
      "E. Le bain quotidien des soignants à la bétadine"
    ],
    correctAnswers: [2],
    explanation: "La transmission manuportée est le mode de propagation exclusif du SARM; la FHA avant et après chaque contact est la mesure maîtresse.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-25',
    courseId: 'crs-inf-13',
    questionNumber: 25,
    type: 'QCM',
    content: "Pour une bactériémie à S. aureus méti-sensible (SASM), quelle molécule par voie IV est la molécule de référence supérieure aux glycopeptides ?",
    options: [
      "A. Vancomycine IV",
      "B. Céfazoline IV (ou Oxacilline / Cloxacilline)",
      "C. Linézolide",
      "D. Ciprofloxacine",
      "E. Gentamicine seule"
    ],
    correctAnswers: [1],
    explanation: "Pour le SASM, les bêtalactamines anti-staphylococciques (Céfazoline 100 mg/kg/j ou Cloxacilline) sont nettement supérieures à la vancomycine en termes de bactéricidie et de survie.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques Staphylocoques
  {
    id: 'q-inf-13-cc1',
    courseId: 'crs-inf-13',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Homme de 28 ans, fièvre brutale à 40°C avec frissons et céphalées après avoir percé un furoncle de la lèvre supérieure il y a 48h. Placard violacé froid hémifacial droit sans bourrelet, exophtalmie et chémosis droit.\n\nQuel diagnostic et quelle complication neurologique immédiate redouter ?",
    options: [
      "A. Érysipèle de la face / Méningite purulente",
      "B. Staphylococcie maligne de la face / Thrombophlébite du sinus caverneux avec ophtalmoplégie et méningo-encéphalite",
      "C. Cellulite orbitaire sinusienne / Abcès cérébral",
      "D. Zona ophtalmique / Kératite",
      "E. Angio-œdème / Asphyxie"
    ],
    correctAnswers: [1],
    explanation: "La manipulation d'un furoncle centro-facial entraîne une staphylococcie maligne de la face compliquée de thrombophlébite du sinus caverneux (urgence vitale absolue).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-cc2',
    courseId: 'crs-inf-13',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Patiente hémodialysée de 52 ans avec cathéter tunnélisé, fièvre à 38,8°C et écoulement purulent au point d'insertion. Hémocultures positives à S. aureus méti-sensible.\n\nQuelle mesure thérapeutique non médicamenteuse est indispensable ?",
    options: [
      "A. Augmenter le débit de dialyse",
      "B. Retrait du cathéter infecté en urgence",
      "C. Anticoagulation seule",
      "D. Pansement simple",
      "E. Kinésithérapie"
    ],
    correctAnswers: [1],
    explanation: "Bactériémie à S. aureus sur cathéter : l'ablation du matériel étranger infecté est impérative pour éradiquer le biofilm bactérien.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-cc3',
    courseId: 'crs-inf-13',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Dans un lycée, 23 élèves présentent de violents vomissements en jets et crampes abdominales 2 heures après avoir consommé des sandwichs à la mayonnaise et crème pâtissière. Aucun n'a de fièvre.\n\nQuel mécanisme pathogène est en cause ?",
    options: [
      "A. Infection invasive de la muqueuse colique",
      "B. Ingestion d’entérotoxine staphylococcique thermostable préformée dans l'aliment",
      "C. Intoxication au monoxyde de carbone",
      "D. Salmonellose aiguë",
      "E. Réaction allergique alimentaire"
    ],
    correctAnswers: [1],
    explanation: "TIAS typique : incubation ultra-courte (< 2h), vomissements au premier plan et apyrexie liée à l'ingestion d'entérotoxine A préformée thermostable.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-cc4',
    courseId: 'crs-inf-13',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Homme de 61 ans diabétique, lombalgies intenses fébriles depuis 3 semaines. IRM : hypersignal discal L3-L4 et érosions en miroir des plateaux vertébraux. Hémocultures positives à S. aureus.\n\nQuel examen cardiaque est systématiquement obligatoire ?",
    options: [
      "A. ECG seul",
      "B. Échocardiographie transthoracique (ETT) et transœsophagienne (ETO) pour rechercher une endocardite infectieuse associée",
      "C. Coronarographie",
      "D. Scintigraphie myocardique",
      "E. Holter tensionnel"
    ],
    correctAnswers: [1],
    explanation: "Toute bactériémie à S. aureus compliquant une spondylodiscite impose une ETT/ETO systématique pour éliminer une endocardite infectieuse méconnue.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-13-cc5',
    courseId: 'crs-inf-13',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Nourrisson de 18 mois, érythrodermie péri-orificielle, bulles flasques fragiles se rompant facilement, signe de Nikolsky positif. Les muqueuses sont strictement saines. Pas de prise médicamenteuse.\n\nQuel diagnostic et quel traitement étiologique débuter ?",
    options: [
      "A. Syndrome de Stevens-Johnson / Corticoïdes",
      "B. SSSS (Staphylococcal Scalded Skin Syndrome par exfoliatine) / Antibiothérapie anti-staphylococcique IV (Céfazoline ou Oxacilline) + réhydratation",
      "C. Choc toxique staphylococcique / Remplissage seul",
      "D. Impétigo localisé / Mupirocine",
      "E. Pemphigus vulgaire / Immunosuppresseurs"
    ],
    correctAnswers: [1],
    explanation: "SSSS dû aux exfoliatines de S. aureus clivant la desmogléine-1. Respect muqueux caractéristique. Traitement par bêtalactamines anti-staphylococciques IV et réhydratation.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_13_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-13-mindmap',
    courseId: 'crs-inf-13',
    title: 'Mind Map : Infections à Staphylocoques',
    type: 'mindmap',
    content: `# Mind Map : Infections à Staphylocoques

## 1. Bactériologie & Espèces
- **Staphylococcus aureus (doré)** : Coagulase (+), catalase (+), portage nasal (30%)
- **Staphylocoques à Coagulase Négative (SCN)** : S. epidermidis, S. lugdunensis, S. saprophyticus -> infections sur matériel et cathéters (biofilm)

## 2. Spectres Pathologiques de S. aureus
- **Cutané superficiel** : Impétigo (croûtes miel), folliculite, furoncle, anthrax, panaris
- **Cutané grave** : Staphylococcie maligne de la face (thrombophlébite sinus caverneux post-furoncle)
- **Infections profondes & métastatiques** :
  - Bactériémie -> Endocardite (10%), métastases
  - Spondylodiscite, ostéomyélite, arthrite septique
  - Pneumonie nécrosante à PVL (post-grippe)
- **Syndromes toxiniques** :
  - *TSST-1* -> Choc toxique (TSS)
  - *Exfoliatine A/B* -> SSSS (enfant < 2 ans, pas de muqueuse)
  - *Entérotoxine A* -> TIAS (< 3h, vomissements, pas de fièvre)

## 3. Thérapeutique
- **SASM** : Céfazoline IV (100 mg/kg/j) ou Cloxacilline
- **SARM** : Vancomycine IV ou Daptomycine
- **Rifampicine** : Toujours en association (anti-biofilm osseux)`
  },
  {
    id: 'res-inf-13-astuces',
    courseId: 'crs-inf-13',
    title: 'Astuces & Mnémos Staphylocoques',
    type: 'astuce',
    content: `### Pièges & Formules Staphylocoques (Dr. LAIDANI.M)

1. **Signes Extracardiaques de l'Endocardite : « O.F.P.R. »**
   - **O**sler = dOulOureux (faux panaris pulpaire)
   - **P**laques de Janeway = indolores (palmes / plantes)
   - **R**oth = Rétine (hémorragie centre pâle)

2. **Règle du Furoncle :**
   - « Furoncle de la face = ne jamais presser ! Danger sinus caverneux ! »

3. **SSSS vs Stevens-Johnson :**
   - SSSS = Enfant, PAS d'atteinte muqueuse !
   - Stevens-Johnson = Atteinte muqueuse massive !`
  }
];

// Lesson 14: Diphtérie
export const INFECTIO_LESSON_14_QUESTIONS: Question[] = [
  ...Array.from({ length: 25 }, (_, i) => {
    const questions = [
      {
        q: "Concernant Corynebacterium diphtheriae, quelle affirmation est exacte ?",
        opts: ["C'est un bacille gram-négatif capsulé", "C'est un bacille gram-positif, non sporulé, immobile, à disposition en palissade ou en lettres chinoises", "Il produit une endotoxine thermolabile", "Seul le biotype gravis produit la toxine", "Sa culture nécessite un milieu enrichi en CO2"],
        ans: 1,
        exp: "BGP non sporulé, immobile, morphologie en lettres chinoises (division asymétrique en coup de fouet). Toxine = exotoxine codée par le phage bêta."
      },
      {
        q: "Le mécanisme d'action de la toxine diphtérique au niveau cellulaire est :",
        opts: ["Activation de l'adénylate cyclase", "Blocage de l'acétylcholine à la jonction neuromusculaire", "ADP-ribosylation irréversible du facteur d'élongation-2 (EF-2), arrêtant la synthèse protéique", "Lyse osmotique membranaire", "Inhibition de la chaîne respiratoire"],
        ans: 2,
        exp: "La fraction B se lie au récepteur HB-EGF; la fraction A catalyse l'ADP-ribosylation de l'EF-2, bloquant la traduction protéique."
      },
      {
        q: "Concernant l'épidémiologie de la diphtérie, quelle proposition est correcte ?",
        opts: ["Les adultes vaccinés ne peuvent jamais être porteurs sains", "La transmission indirecte par les objets est la principale voie", "Les porteurs sains représentent environ 98% des sujets infectés et constituent le principal réservoir épidémique", "L'immunité maternelle protège pendant 2 ans", "La diphtérie cutanée n'est pas contagieuse"],
        ans: 2,
        exp: "Les porteurs sains représentent ~98% des sujets infectés; ils hébergent le bacille sans développer la maladie car le vaccin protège contre la toxine, pas contre la colonisation."
      },
      {
        q: "La « fausse membrane » diphtérique se distingue d'un simple exsudat par :",
        opts: ["Sa couleur jaune purulente", "Son absence de saignement lors du décollement", "Son adhérence intime à la muqueuse saignant lors du décollement forcé, et sa résistance à l'immersion dans l'eau", "Sa constitution en polynucléaires purs sans fibrine", "Sa localisation strictement amygdalienne"],
        ans: 2,
        exp: "Fausse membrane adhérente, cohésive, grisâtre, qui fait saigner la muqueuse sous-jacente au décollement et ne se dissout pas dans l'eau."
      },
      {
        q: "L'angine diphtérique commune typique se caractérise par tous ces signes SAUF :",
        opts: ["Début insidieux progressif sur 2-3 jours", "Fausses membranes bilatérales extensives", "Fièvre élevée > 40°C constante", "Adénopathies cervicales douloureuses", "Haleine fétide caractéristique"],
        ans: 2,
        exp: "La fièvre est modérée (38-38,5°C), contrastant paradoxalement avec la pâleur et l'altération de l'état général."
      },
      {
        q: "Le croup diphtérique (diphtérie laryngée) se manifeste par la triade classique :",
        opts: ["Fièvre 41°C, trismus, convulsions", "Dysphagie, sialorrhée, trismus", "Dysphonie (voix rauque/éteinte), toux aboyante et dyspnée laryngée avec stridor inspiratoire", "Rhinorrhée purulente", "Aphonie sans toux"],
        ans: 2,
        exp: "Triade du croup : voix rauque/éteinte -> toux aboyante -> bradypnée inspiratoire avec stridor et tirage sous-mandibulaire."
      },
      {
        q: "La paralysie du voile du palais dans la diphtérie survient typiquement :",
        opts: ["Dans les 24 heures", "À la 2e-3e semaine de la maladie, se manifestant par une voix nasonnée et des régurgitations nasales de liquides", "Uniquement dans les formes cutanées", "Simultanément à l'éruption", "Exclusivement chez le nourrisson"],
        ans: 1,
        exp: "Paralysie précoce toxinique apparaissant à S2-S3 : voile du palais flasque -> rhinolalie (voix de canard) et fausses routes alimentaires."
      },
      {
        q: "La myocardite diphtérique est une complication redoutable. Quelle affirmation est exacte ?",
        opts: ["Elle survient dans les premières heures", "Elle est due à l'invasion bactérienne directe du péricarde", "Elle se manifeste à la 2e-3e semaine par des troubles de conduction (BAV) et du rythme ventriculaire potentiellement mortels", "Elle n'entraîne aucune modification de l'ECG", "Elle guérit toujours en 2 jours"],
        ans: 2,
        exp: "Myocardite toxinique grave à J10-J20 : première cause de décès par BAV complet ou fibrillation ventriculaire."
      },
      {
        q: "Concernant le diagnostic bactériologique de la diphtérie, quelle est la proposition exacte ?",
        opts: ["Le test d'Elek in vitro confirme la toxigénicité de la souche de C. diphtheriae isolée", "Le Gram suffit pour affirmer la diphtérie", "Un résultat négatif à 24h élimine la diphtérie", "Le milieu de Löffler est sélectif", "La PCR ne fonctionne pas"],
        ans: 0,
        exp: "Le test d'Elek (immunodiffusion d'arc de précipitation antitoxine/toxine) est le gold standard confirmant le pouvoir toxigène."
      },
      {
        q: "En présence d'une suspicion clinique de diphtérie, le geste thérapeutique prioritaire est :",
        opts: ["L'antibiothérapie orale d'abord", "La corticothérapie forte dose seule", "La sérothérapie antidiphtérique (SAD) d'urgence après test de Besredka, sans attendre les résultats de culture", "L'intubation trachéale systématique", "L'isolement simple"],
        ans: 2,
        exp: "La SAD neutralise la toxine circulante non encore fixée aux tissus; chaque heure de retard augmente la mortalité."
      },
      {
        q: "Quelle est la posologie de l'amoxicilline IV recommandée dans la diphtérie ?",
        opts: ["1 g/j", "3 g/j en 3 prises IV chez l'adulte (100 mg/kg/j chez l'enfant) pendant 10 jours", "6 g/j continu", "500 mg x 2 per os", "2 g/j pendant 3 jours"],
        ans: 1,
        exp: "Amoxicilline 3 g/j IV chez l'adulte (100 mg/kg/j enfant) pendant 10 jours complets (éradique le portage et stoppe la production)."
      },
      {
        q: "Concernant le vaccin antidiphtérique (anatoxine), quelle proposition est vraie ?",
        opts: ["Il empêche l'infection et le portage du bacille", "Une seule dose confère une immunité à vie", "Il induit une immunité antitoxinique protégeant contre la maladie mais n'empêche pas le portage asymptomatique", "Il est contre-indiqué chez la femme enceinte", "Il est administré par voie orale"],
        ans: 2,
        exp: "L'anatoxine induit des anticorps neutralisant la toxine mais ne confère pas d'immunité stérilisante de muqueuse pharyngée."
      },
      {
        q: "La diphtérie maligne (angine maligne) se distingue par :",
        opts: ["L'absence d'adénopathie", "La présence de fausses membranes unilatérales simples", "Le « cou proconsulaire » (œdème péri-ganglionnaire massif en cou de taureau) et un syndrome toxique majeur", "L'absence de myocardite", "Sa survenue chez les sujets vaccinés"],
        ans: 2,
        exp: "Cou proconsulaire massif par adénopathies sous-maxillaires bilatérales et œdème péri-cervical diffus + état toxique cireux."
      },
      {
        q: "Parmi les propositions suivantes sur la physiopathologie de la diphtérie, laquelle est INCORRECTE ?",
        opts: ["La multiplication de C. diphtheriae reste locale au nasopharynx", "La toxine diffuse par voie sanguine et lymphatique vers les organes distants", "La bactérie réalise une bactériémie massive et envahit le cerveau et le myocarde", "L'obstruction laryngée mécanique par les fausses membranes peut entraîner l'asphyxie", "Les hémocultures sont typiquement négatives"],
        ans: 2,
        exp: "INCORRECT : C. diphtheriae ne réalise PAS de bactériémie. Les lésions à distance sont purement toxiniques."
      },
      {
        q: "Un patient traité pour diphtérie présente à J8 une tachycardie et un allongement de l'intervalle PR à l'ECG. Interprétation :",
        opts: ["Effet secondaire des antibiotiques", "Réaction allergique à la SAD", "Myocardite diphtérique débutante (allongement du PR = signe précoce d'atteinte de conduction)", "Infection nosocomiale", "Guérison en cours"],
        ans: 2,
        exp: "L'allongement du PR signe l'atteinte précoce des voies de conduction myocardique par la toxine diphtérique."
      },
      {
        q: "La diphtérie cutanée est particulièrement fréquente :",
        opts: ["En milieu hospitalier climatisé", "En zone d'endémie tropicale dans des conditions de promiscuité et mauvaise hygiène (ulcères chroniques à membranes grises)", "Chez les nouveau-nés vaccinés", "Uniquement chez les patients immunodéprimés VIH", "Chez les animaux d'élevage"],
        ans: 1,
        exp: "La diphtérie cutanée prédomine en zone tropicale humide et constitue un réservoir épidémiologique d'endémie."
      },
      {
        q: "Quelle mesure prophylactique s'applique aux sujets contacts proches d'un cas de diphtérie confirmé ?",
        opts: ["SAD systématique à fortes doses", "Vaccination seule sans antibiotique", "Prélèvement de gorge pour culture + antibioprophylaxie (érythromycine 10j ou pénicilline) + mise à jour du vaccin", "Isolement strict pendant 40 jours", "Aucune mesure"],
        ans: 2,
        exp: "Prélèvement de gorge + antibioprophylaxie éradicatrice du portage (érythromycine 10j ou péni retard) + rappel vaccinal."
      },
      {
        q: "La diphtérie nasale du nourrisson se caractérise par :",
        opts: ["Une rhinorrhée séro-sanguinolente unilatérale peu fébrile avec excoriation de la lèvre supérieure", "Une obstruction bilatérale sèche", "Une épistaxis cataclysmique d'emblée", "Une absence totale de contagiosité", "Une toux rauque"],
        ans: 0,
        exp: "Écoulement nasal séro-sanguinolent persistant avec érosion érythémateuse excoriée de la lèvre supérieure chez le nourrisson."
      },
      {
        q: "Le test de Besredka précédant l'injection de la SAD vise à :",
        opts: ["Vérifier l'efficacité de la toxine", "Dépister une réaction anaphylactique au sérum hétérologue équin", "Activer les lymphocytes", "Neutraliser la fièvre", "Mesurer le titre d'anticorps"],
        ans: 1,
        exp: "La SAD étant d'origine équine, l'injection intradermique test de 0,1 mL vérifie l'absence d'hypersensibilité anaphylactique."
      },
      {
        q: "Quel diagnostic différentiel majeur donne des fausses membranes amygdaliennes sans myocardite ni neuropathie ?",
        opts: ["Angine de Vincent et Mononucléose infectieuse", "Choc septique", "Paludisme", "Leptospirose", "Rage"],
        ans: 0,
        exp: "L'angine de Vincent (anaérobies) et la MNI (EBV) sont les deux principaux diagnostics différentiels des angines à fausses membranes."
      },
      {
        q: "Dans la prise en charge du croup diphtérique asphyxique, quelle mesure N'EST PAS recommandée ?",
        opts: ["Sérothérapie antidiphtérique à fortes doses", "Corticothérapie à fortes doses", "Nébulisations de bêta-2 mimétiques (salbutamol) en traitement de première ligne", "Trachéotomie ou intubation si détresse respiratoire majeure", "Amoxicilline IV"],
        ans: 2,
        exp: "L'obstruction est mécanique par des fausses membranes fibreuses; le salbutamol bronchodilatateur est totalement inopérant."
      },
      {
        q: "La paralysie diphtérique de l'accommodation (vision de près floue) survenant à la 3e-4e semaine est due à :",
        opts: ["Une névrite toxique du nerf ciliaire (III parasympathique)", "Une uvéite postérieure", "Une thrombose de l'artère centrale de la rétine", "Un décollement de rétine", "Une kératite"],
        ans: 0,
        exp: "Atteinte toxinique du III intrinsèque (cycloplégie toxique) responsable d'une presbytie aiguë transitoire réversible."
      },
      {
        q: "La pose d'une sonde naso-gastrique (SNG) est particulièrement indiquée dans la diphtérie en cas de :",
        opts: ["Diarrhée sévère", "Paralysie du voile du palais avec fausses routes alimentaires et régurgitations nasales", "Obstruction laryngée", "Fièvre élevée", "Reflux gastrique"],
        ans: 1,
        exp: "La paralysie vélaire empêche l'occlusion du nasopharynx lors de la déglutition et expose au risque de pneumonie d'aspiration mortelle."
      },
      {
        q: "Parmi les facteurs favorisants des épidémies de diphtérie en Algérie, lequel est INCORRECT ?",
        opts: ["Couverture vaccinale insuffisante", "Promiscuité et surpeuplement", "Conditions socio-économiques défavorables", "Résistance naturelle de C. diphtheriae aux bêtalactamines", "Présence importante de porteurs sains"],
        ans: 3,
        exp: "INCORRECT : C. diphtheriae reste naturellement très sensible aux pénicillines et macrolides; l'émergence n'est pas liée à une résistance."
      },
      {
        q: "Dans la diphtérie grave, quel est le traitement de réanimation complémentaire essentiel ?",
        opts: ["Restriction hydrique absolue", "Maintien de l'équilibre hydro-électrolytique, monitoring cardiaque, transfusion si anémie et soins de nursing", "Hémodialyse systématique d'emblée", "Alimentation solide forcée", "Ablation des amygdales"],
        ans: 1,
        exp: "Repos strict au lit, correction des troubles ioniques (aggravant les arythmies), surveillance ECG continue et support nutritionnel."
      }
    ];

    const c = questions[i];
    return {
      id: `q-inf-14-${String(i + 1).padStart(2, '0')}`,
      courseId: 'crs-inf-14',
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

  // 5 Cas cliniques Diphtérie
  {
    id: 'q-inf-14-cc1',
    courseId: 'crs-inf-14',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Hamza, 7 ans, non vacciné, fièvre à 38,3°C depuis 3 jours, odynophagie progressive, enduit blanchâtre-grisâtre bilatéral débordant les amygdales saignant au décollement. Empâtement cervical bilatéral massif (« cou proconsulaire »), haleine fétide, FC 130/min.\n\nQuel diagnostic et quelle urgence absolue ?",
    options: [
      "A. Mononucléose / Amoxicilline",
      "B. Diphtérie maligne (angine maligne) / Sérothérapie antidiphtérique (SAD) à fortes doses sans attendre les résultats bactériologiques",
      "C. Angine de Ludwig / Drainage",
      "D. Phlegmon amygdalien / Incision",
      "E. Épiglottite / Intubation"
    ],
    correctAnswers: [1],
    explanation: "Diphtérie maligne : fausses membranes extensives, cou proconsulaire (œdème péri-ganglionnaire massif), état toxique. Urgence vitale : SAD à fortes doses après test de Besredka.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-14-cc2',
    courseId: 'crs-inf-14',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Lina, 8 mois, mère sans rappel vaccinal, rhinorrhée séro-sanguinolente depuis 2 semaines avec excoriation érythémateuse marquée de la lèvre supérieure et fébricule à 37,8°C. Frère aîné non vacciné ayant eu une angine il y a 3 semaines.\n\nQuel est le diagnostic et le risque majeur ?",
    options: [
      "A. Corps étranger nasal / Sinusite",
      "B. Diphtérie nasale du nourrisson / Complications toxiniques systémiques graves (myocardite, paralysies) possibles malgré l'apparence locale bénigne",
      "C. Syphilis congénitale / Ostéochondrite",
      "D. Rhinite virale / Surinfection",
      "E. Eczéma péribuccal / Impétiginisation"
    ],
    correctAnswers: [1],
    explanation: "Diphtérie nasale : rhinorrhée séro-sanguinolente avec excoriation de la lèvre supérieure chez le nourrisson. Risque toxinique systémique identique imposant SAD et antibiothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-14-cc3',
    courseId: 'crs-inf-14',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Youcef, 4 ans, partiellement vacciné (2 doses sans rappel), présente toux aboyante, voix rauque, stridor inspiratoire et tirage sus-sternal avec cyanose péri-orale suite à une angine mal soignée.\n\nQuel diagnostic et quelle prise en charge immédiate ?",
    options: [
      "A. Croup viral / Salbutamol",
      "B. Croup diphtérique (diphtérie laryngée) / O2 + SAD à fortes doses + Amoxicilline IV + Corticoïdes IV et équipe de réanimation prête pour trachéotomie d'urgence",
      "C. Corps étranger / Extraction",
      "D. Épiglottite / Intubation sans SAD",
      "E. Asthme aigu / Corticoïdes oraux"
    ],
    correctAnswers: [1],
    explanation: "Croup diphtérique asphyxique : triade voix rauque + toux aboyante + stridor inspiratoire. Urgence multidisciplinaire associant SAD, ATB, corticoïdes et préparation d'une voie aérienne chirurgicale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-14-cc4',
    courseId: 'crs-inf-14',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Sonia, 22 ans, dernier rappel DT à l'âge de 6 ans, consulte 3 semaines après une angine pour une voix nasonnée avec régurgitations de liquides par le nez et vision floue pour la lecture depuis 3 jours.\n\nQuelle est l'explication et la prise en charge adaptée ?",
    options: [
      "A. AVC du tronc / Thrombolyse",
      "B. Paralysies toxiniques diphtériques tardives (voile du palais S2-S3 et accommodation S3-S4) / SAD + Amoxicilline 10j + SNG d'alimentation + surveillance ECG",
      "C. Sclérose en plaques / Bolus corticoïdes",
      "D. Myasthénie / Pyridostigmine",
      "E. Intoxication / Antidote"
    ],
    correctAnswers: [1],
    explanation: "Paralysies diphtériques tardives (voile du palais puis accommodation). Prise en charge : SAD, ATB, pose de SNG pour prévenir les fausses routes et surveillance cardiaque.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-14-cc5',
    courseId: 'crs-inf-14',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Karim, 9 ans, traité à J10 pour diphtérie confirmée. Fausses membranes disparues, mais survenue d'une bradycardie à 54/min avec intervalle PR allongé à 0,28s à l'ECG.\n\nQuel diagnostic et quelle mesure d'urgence ?",
    options: [
      "A. Tachycardie réflexe / Repos simple",
      "B. Myocardite diphtérique débutante avec BAV / Transfert en réanimation, monitoring ECG continu, repos strict au lit, corticoïdes IV forte dose et prêt pour entraînement électrosystolique",
      "C. Allergie amoxicilline / Arrêt antibiotique",
      "D. Hyperkaliémie / Résine",
      "E. Guérison normale"
    ],
    correctAnswers: [1],
    explanation: "Myocardite diphtérique à J10 : allongement du PR évoluant vers un BAV. Urgence réanimatoire cardiologique avec monitoring continu et corticothérapie.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_14_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-14-mindmap',
    courseId: 'crs-inf-14',
    title: 'Mind Map : La Diphtérie (Corynebacterium diphtheriae)',
    type: 'mindmap',
    content: `# Mind Map : La Diphtérie

## 1. Bactériologie & Pathogénie
- **Bactérie** : Corynebacterium diphtheriae (BGP en lettres chinoises, non sporulé)
- **Toxine diphtérique** : Exotoxine protéique AB5 (phage β) -> ADP-ribosylation irréversible de l'EF-2 -> inhibition de la synthèse protéique
- **Fausse membrane** : Fibrine + nécrose épithéliale + bactéries (adhérente, saigne au décollement, surnage dans l'eau)
- **Bactériémie** : ABSENTE (la bactérie reste au nasopharynx, la toxine voyage dans le sang)

## 2. Formes Cliniques
- **Angine commune** : Fausses membranes bilatérales, fièvre modérée (38-38,5°C paradoxale), haleine fétide
- **Angine maligne** : « Cou proconsulaire » (œdème péri-ganglionnaire massif), état toxique
- **Croup (laryngée)** : Voix rauque + toux aboyante + stridor inspiratoire (asphyxie mécanique)
- **Nasale** : Écoulement séro-sanguinolent unilatéral + excoriation de la lèvre supérieure (nourrisson)
- **Cutanée** : Ulcère chronique à membrane grise en zone tropicale

## 3. Complications Toxiniques Tardives
- **Myocardite (S2-S3)** : BAV, arythmies ventriculaires, mortalité majeure (ECG quotidien)
- **Paralysies (VAM)** : Voile du palais (S2-S3) -> Accommodation (S3-S4) -> Membres (S4-S8)

## 4. Traitement & Prévention
- **URGENCE ABSOLUE** : Sérothérapie antidiphtérique (SAD) après test de Besredka
- **Antibiothérapie** : Amoxicilline 3 g/j IV (100 mg/kg/j) x 10 jours ou Pénicilline G
- **Symptomatique** : Corticoïdes (croup/myocardite), SNG (paralysie vélaire)
- **Prévention** : Vaccin DTC (anatoxine), rappel tous les 10 ans`
  },
  {
    id: 'res-inf-14-astuces',
    courseId: 'crs-inf-14',
    title: 'Mnémotechniques Diphtérie',
    type: 'astuce',
    content: `### Pièges & Formules Diphtérie (Dr. LAIDANI.M)

1. **Paralysies Chronologiques : « V.A.M. »**
   - **V**oile du palais (S2-S3, voix nasonnée)
   - **A**ccommodation (S3-S4, vision floue de près)
   - **M**embres (S4-S8, parésies)

2. **Règle Thérapeutique d'Or : « SAD d'abord, AB après »**
   - La SAD neutralise la toxine circulante
   - L'antibiotique tue la bactérie
   - Ne jamais attendre le laboratoire pour injecter la SAD !

3. **Signe de la Lèvre du Nourrisson :**
   - Rhinorrhée rosée + excoriation de la lèvre supérieure = Diphtérie nasale !`
  }
];

// Lesson 15: Infections à Streptocoques
export const INFECTIO_LESSON_15_QUESTIONS: Question[] = [
  ...Array.from({ length: 25 }, (_, i) => {
    const questions = [
      {
        q: "Quel est le réservoir et la voie de transmission principale de Streptococcus pyogenes (SGA) ?",
        opts: ["Réservoir animal, piqûre de tique", "Réservoir strictement humain, transmission aérienne directe par gouttelettes ou contact", "Réservoir tellurique", "Réservoir par moustiques", "Lait non pasteurisé"],
        ans: 1,
        exp: "L'homme est le seul réservoir de Streptococcus pyogenes (SGA); la transmission est interhumaine aérienne ou par contact direct."
      },
      {
        q: "Un patient de 28 ans présente une angine fébrile (38,5°C) sans toux, avec adénopathies cervicales douloureuses et exsudat amygdalien. Selon le score de Mac Isaac, quelle est la conduite à tenir ?",
        opts: ["Antibiothérapie sans test", "Réalisation d'un Test de Diagnostic Rapide (TDR) car le score est >= 2", "Pas de TDR car âge adulte", "TDR seulement si score > 4", "Simple surveillance"],
        ans: 1,
        exp: "Score de Mac Isaac : Fièvre (1) + Pas de toux (1) + Adénopathies (1) + Exsudat (1) + Âge 15-44 ans (0) = 4 points. Un score >= 2 justifie un TDR."
      },
      {
        q: "Au 5e-6e jour d’une scarlatine typique, quel aspect lingual caractéristique apparaît après la phase saburrale ?",
        opts: ["Langue noire villeuse", "Langue saburrale blanche", "Langue « framboisée » (rouge pourpre avec papilles hypertrophiées)", "Langue géographique", "Ulcérations aphtoïdes"],
        ans: 2,
        exp: "La langue de la scarlatine desquame de la pointe vers la base pour devenir rouge vif framboisée au 5e-6e jour."
      },
      {
        q: "Un enfant de 7 ans présente des lésions d’impétigo croûteux jaune miel péribuccal à Streptococcus pyogenes. Quelle complication non suppurée est à redouter spécifiquement ?",
        opts: ["Rhumatisme articulaire aigu (RAA)", "Glomérulonéphrite aiguë post-streptococcique (GNA)", "Chorée de Sydenham", "Endocardite", "Choc toxique"],
        ans: 1,
        exp: "L'impétigo streptococcique est causé par des souches néphritogènes responsables de GNA (le RAA fait suite aux angines, pas aux infections cutanées)."
      },
      {
        q: "Parmi les arguments suivants, lequel oriente formellement vers une fasciite nécrosante à SGA plutôt qu’un simple érysipèle ?",
        opts: ["Érythème superficiel bien limité", "Douleur atroce disproportionnée aux lésions, hypoesthésie, crépitation et bulles hémorragiques avec état de choc", "Fièvre modérée", "Guérison sous amoxicilline 48h", "Adénopathie satellite isolée"],
        ans: 1,
        exp: "La fasciite nécrosante est une urgence chirurgicale caractérisée par une douleur extrême disproportionnée, une hypoesthésie et des signes de nécrose profonde."
      },
      {
        q: "Un patient de 65 ans présente une endocardite infectieuse documentée à Streptococcus gallolyticus (anciennement S. bovis). Quel examen complémentaire est systématique ?",
        opts: ["Coloscopie totale à la recherche d’un polype ou cancer colorectal", "Ponction lombaire", "Scanner cérébral seul", "Fibroscopie gastrique", "Biopsie musculaire"],
        ans: 0,
        exp: "Streptococcus gallolyticus est un commensal digestif dont la bactériémie est associée dans 60-80% des cas à une néoplasie colorectale occulte."
      },
      {
        q: "Selon les critères de Duke modifiés (2023), quel élément constitue un critère majeur d’endocardite infectieuse ?",
        opts: ["Nodules d'Osler", "Fièvre > 38°C", "Hémocultures positives pour micro-organismes typiques ou sérologie Coxiella burnetii de phase I >= 1:800", "Facteur rhumatoïde", "Souffle préexistant"],
        ans: 2,
        exp: "Hémocultures positives avec micro-organismes typiques ou sérologie Coxiella burnetii phase I >= 800 sont des critères microbiologiques majeurs."
      },
      {
        q: "Le diagnostic certain de syndrome de choc toxique streptococcique (SCTS) repose sur :",
        opts: ["Isolement de SGA sur écouvillon de gorge", "Isolement de SGA à partir d’un site stérile (sang, LCR, liquide synovial) associé à une hypotension et au moins 2 défaillances viscérales", "Exanthème scarlatiniforme seul", "ASLO positifs", "Fièvre isolée"],
        ans: 1,
        exp: "Choc toxique certain = isolement de S. pyogenes dans un site normalement stérile + hypotension artérielle + défaillances d'organes (CIVD, IRA, SDRA...)."
      },
      {
        q: "Dans quelle situation une femme enceinte ne justifie-t-elle PAS d’antibioprophylaxie per-partum contre le streptocoque du groupe B (SGB) ?",
        opts: ["Dépistage vaginal SGB positif à 36 SA", "Bactériurie à SGB documentée pendant la grossesse", "Rupture des membranes >= 18h sans dépistage connu", "Césarienne programmée avant tout travail avec membranes intactes chez une patiente sans portage connu", "Accouchement prématuré < 37 SA"],
        ans: 3,
        exp: "Une césarienne programmée à membranes intactes avant début du travail ne transmet pas le SGB et ne nécessite pas de prophylaxie."
      },
      {
        q: "Quelle est la durée recommandée de l'antibiothérapie par Amoxicilline dans l'angine streptococcique chez l'enfant de plus de 3 ans ?",
        opts: ["3 jours", "5 jours", "6 jours (50 mg/kg/j)", "10 jours", "14 jours"],
        ans: 2,
        exp: "La durée de référence de l'Amoxicilline dans l'angine à SGA est de 6 jours (50 mg/kg/j chez l'enfant, 2 g/j chez l'adulte)."
      },
      {
        q: "Quel facteur iatrogène médicamenteux est reconnu pour favoriser l'extension nécrosante des infections invasives à SGA (dermohypodermite, varicelle) ?",
        opts: ["Le paracétamol", "Les corticoïdes inhalés", "La prise d’Anti-Inflammatoires Non Stéroïdiens (AINS comme l'ibuprofène)", "L'aspirine à faible dose", "La vitamine C"],
        ans: 2,
        exp: "La prise d'AINS au cours d'une infection streptococcique altère la phagocytose et favorise dramatiquement l'évolution vers la fasciite nécrosante."
      },
      {
        q: "Le rhumatisme articulaire aigu (RAA) post-streptococcique est provoqué par :",
        opts: ["Une bactériémie articulaire directe", "Une réaction auto-immune par mimétisme moléculaire entre la protéine M du SGA et les tissus humains (valves cardiaques, articulations)", "Une toxine exfoliative", "Une nécrose ischémique", "Une infection à entérocoque"],
        ans: 1,
        exp: "Le RAA résulte d'une réponse immune croisée dirigée contre la protéine M de Streptococcus pyogenes réagissant avec la myosine cardiaque."
      },
      {
        q: "L'anite streptococcique chez l'enfant se manifeste par un érythème anal vernissé très douloureux. Quel test rapide permet le diagnostic en consultation ?",
        opts: ["Biopsie anale", "TDR streptocoque A par écouvillonnage périnéal", "Sérologie VIH", "Coproculture", "ASLO"],
        ans: 1,
        exp: "L'application du TDR sur écouvillon de la marge anale confirme immédiatement la présence de Streptococcus pyogenes."
      },
      {
        q: "Un patient de 28 ans présente des nodules dermohypodermiques inflammatoires douloureux sur la face antérieure des tibias 3 semaines après une angine. Diagnostic :",
        opts: ["Tuberculose cutanée", "Érythème noueux post-streptococcique", "Maladie de Behçet", "Sarcoïdose", "Érysipèle"],
        ans: 1,
        exp: "L'érythème noueux est une hypodermite nodulaire réactionnelle fréquente après une infection streptococcique des voies aériennes supérieures."
      },
      {
        q: "Le traitement antibiotique historique de référence de la scarlatine non compliquée de l'enfant est :",
        opts: ["Azithromycine 3 jours", "Pénicilline V (phénoxyméthylpénicilline) pendant 10 jours (ou Amoxicilline 6 jours)", "Céfuroxime", "Ciprofloxacine", "Corticoïdes"],
        ans: 1,
        exp: "Pénicilline V pendant 10 jours ou Amoxicilline pendant 6 jours permet la guérison bactériologique et la prévention du RAA."
      },
      {
        q: "La méningite purulente à Streptococcus pyogenes chez l'adulte survient le plus souvent :",
        opts: ["Par voie hématogène digestive", "Par contiguïté à partir d'un foyer ORL (otite moyenne aiguë, mastoïdite, sinusite) ou après neurochirurgie", "Par piqûre de tique", "Après transfusion", "Par voie sexuelle"],
        ans: 1,
        exp: "Les rares méningites à SGA sont des complications locorégionales d'otites suppurées, mastoïdites ou sinusites compliquées."
      },
      {
        q: "Dans l'impétigo streptococcique de l'enfant, quelle mesure préventive collective évite les épidémies en collectivité ?",
        opts: ["Amoxicilline générale pour tous les enfants", "Éviction de la crèche ou école jusqu'à 72h après le début du traitement ou disparition des lésions", "Bains d'alcool", "Vaccination", "Port de masque"],
        ans: 1,
        exp: "L'éviction scolaire est indispensable pendant 72h d'antibiothérapie pour couper la transmission de cette dermatose très contagieuse."
      },
      {
        q: "Les plaques érythémateuses maculeuses indolores des paumes et plantes observées dans l'endocardite sont :",
        opts: ["Les nodules d'Osler", "Les plaques de Janeway (lésions vasculaires emboliques indolores)", "Les taches de Roth", "Le signe de Pastia", "Le purpura"],
        ans: 1,
        exp: "Lésions de Janeway = macules érythémateuses des paumes/plantes indolores par micro-embolies septiques (différentes d'Osler qui est douloureux)."
      },
      {
        q: "La fièvre puerpérale et l'endométrite précoce du post-partum sont classiquement dues à :",
        opts: ["Streptococcus pyogenes (SGA) et Streptococcus agalactiae (SGB)", "Neisseria gonorrhoeae", "Mycoplasma", "Pseudomonas", "Staphylocoque coagulase négative"],
        ans: 0,
        exp: "Les streptocoques des groupes A et B sont les agents historiques majeurs des infections utérines et septicémies du post-partum."
      },
      {
        q: "Quelle anomalie biologique immunologique signe la glomérulonéphrite aiguë (GNA) post-streptococcique ?",
        opts: ["Protéinurie > 10 g/j isolée", "Consommation du complément avec effondrement transitoire du facteur C3 (voie alterne) se normalisant en 6 à 8 semaines", "Hypercalcémie", "Éosinophilie", "Absence d'hématurie"],
        ans: 1,
        exp: "La GNA post-streptococcique se caractérise par une baisse précoce et transitoire du C3 qui revient à la normale en 6-8 semaines."
      },
      {
        q: "La chorée de Sydenham (complication neurologique du RAA) touche préférentiellement :",
        opts: ["Les garçons de 2 ans", "Les filles entre 5 et 15 ans, se manifestant par des mouvements involontaires incoordonnés et une labilité émotionnelle", "Les vieillards", "Les nouveau-nés", "Les adultes de 40 ans"],
        ans: 1,
        exp: "La chorée de Sydenham touche les jeunes filles d'âge scolaire, guérissant sans séquelles en quelques mois."
      },
      {
        q: "Chez un enfant de moins de 3 ans présentant une angine érythémateuse avec fièvre, quelle est la recommandation officielle ?",
        opts: ["Amoxicilline 6 jours systématique", "Macrolides", "Pas d'antibiothérapie ni de TDR (les angines à cet âge sont quasi exclusivement virales et le risque de RAA est nul)", "Céfotaxime", "Corticoïdes"],
        ans: 2,
        exp: "Avant l'âge de 3 ans, les angines streptococciques sont exceptionnelles et le RAA n'existe pas; le TDR et l'antibiothérapie sont inutiles."
      },
      {
        q: "Le dépistage systématique du portage vaginal et anal de Streptococcus agalactiae (SGB) chez la femme enceinte est réalisé :",
        opts: ["Au 1er trimestre", "À 20 SA", "Entre 35 et 37 semaines d'aménorrhée (SA)", "Pendant le travail", "À l'accouchement"],
        ans: 2,
        exp: "Le prélèvement vagino-rectal à 35-37 SA est le moment optimal prédictif du portage à l'accouchement pour guider l'antibioprophylaxie."
      },
      {
        q: "Outre l'antibiothérapie bactéricide par pénicilline G + clindamycine, le geste thérapeutique capital de la fasciite nécrosante est :",
        opts: ["Le débridement chirurgical précoce et itératif de tous les tissus nécrosés sans aucun retard", "L'oxygénothérapie hyperbare seule", "L'alitement", "L'héparine", "Les pansements gras"],
        ans: 0,
        exp: "L'excision chirurgicale urgente et complète des fascias et tissus sous-cutanés nécrosés conditionne la survie."
      },
      {
        q: "Parmi les complications des angines à SGA, laquelle est une manifestation toxinique précoce survenant au cours de la première semaine ?",
        opts: ["Le RAA", "La glomérulonéphrite", "La scarlatine (due à l'exotoxine pyrogène / érythrogène)", "La chorée", "L'érythème noueux"],
        ans: 2,
        exp: "La scarlatine est une complication précoce toxinique médiée par les exotoxines pyrogènes SPE-A, B ou C chez un sujet non immunisé contre la toxine."
      }
    ];

    const c = questions[i];
    return {
      id: `q-inf-15-${String(i + 1).padStart(2, '0')}`,
      courseId: 'crs-inf-15',
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

  // 5 Cas cliniques Streptocoques
  {
    id: 'q-inf-15-cc1',
    courseId: 'crs-inf-15',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Garçon de 9 ans, fièvre à 39,5°C depuis 2 jours, angine érythémateuse, adénopathies cervicales, langue saburrale. Exanthème rouge diffus « papier de verre » prédominant aux plis (signe de Pastia) avec pâleur circumorale. TDR pharyngé positif à SGA.\n\nQuel est le diagnostic et le traitement de référence ?",
    options: [
      "A. Rubéole / Repos",
      "B. Scarlatine typique / Pénicilline V (10 jours) ou Amoxicilline (6 jours)",
      "C. Maladie de Kawasaki / Aspirine",
      "D. Toxidermie / Arrêt médicament",
      "E. Rougeole / Vitamine A"
    ],
    correctAnswers: [1],
    explanation: "Scarlatine : angine à SGA + exanthème micropapuleux en papier sabré prédominant aux plis + pâleur péribuccale. Traitement par Pénicilline V ou Amoxicilline.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-15-cc2',
    courseId: 'crs-inf-15',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Homme de 62 ans diabétique, douleur atroce brutale de la cuisse gauche apparue il y a 12h, œdème violacé, bulle hémorragique, PA 85/50 mmHg, tachycardie à 125/min.\n\nQuelle urgence vitale évoquer et quel prélèvement confirme le choc toxique streptococcique certain ?",
    options: [
      "A. Érysipèle / Sérologie ASLO",
      "B. Fasciite nécrosante avec choc toxique streptococcique / Hémocultures positives à Streptococcus pyogenes associées aux défaillances multiviscérales",
      "C. Phlébite / Écho-doppler",
      "D. Urticaire / IgE",
      "E. Hématome spontané / Scanner"
    ],
    correctAnswers: [1],
    explanation: "Douleur disproportionnée + bulle + choc chez le diabétique = fasciite nécrosante. L'isolement de S. pyogenes dans un site stérile (sang) confirme le SCTS.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-15-cc3',
    courseId: 'crs-inf-15',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Primipare de 28 ans accouchant à 39 SA avec dépistage du streptocoque du groupe B (SGB) positif à 35 SA.\n\nQuel protocole de prophylaxie intrapartum doit être administré pendant le travail pour prévenir l'infection néonatale ?",
    options: [
      "A. Amoxicilline 2 g IV dose de charge puis 1 g toutes les 4 heures jusqu'à l'expulsion (ou Pénicilline G)",
      "B. Gentamicine en dose unique",
      "C. Ceftriaxone 1g/j",
      "D. Érythromycine per os",
      "E. Aucune prophylaxie"
    ],
    correctAnswers: [0],
    explanation: "Antibioprophylaxie per-partum systématique en cas de portage SGB documenté : Amoxicilline 2g IV puis 1g/4h ou Pénicilline G 5 MUI puis 2,5 MUI/4h jusqu'à la délivrance.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-15-cc4',
    courseId: 'crs-inf-15',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Homme de 45 ans ayant eu une angine fébrile non traitée il y a 3 semaines. Polyarthrite migratrice des genoux et chevilles, souffle systolique mitral d'apparition récente, VS à 85 mm, CRP à 140 mg/L et titre d'ASLO très élevé.\n\nQuel diagnostic et quelle prévention secondaire ?",
    options: [
      "A. Polyarthrite rhumatoïde / Méthotrexate",
      "B. Rhumatisme articulaire aigu (RAA) avec cardite / Prophylaxie secondaire au long cours par Benzathine-pénicilline G IM toutes les 3 à 4 semaines",
      "C. Arthrite septique / Lavage",
      "D. Lupus / Corticoïdes",
      "E. Goutte / Colchicine"
    ],
    correctAnswers: [1],
    explanation: "RAA associant polyarthrite migratrice, cardite mitrale, syndrome inflammatoire et ASLO élevés. Prévention secondaire par Extencilline pour prévenir les rechutes valvulaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-15-cc5',
    courseId: 'crs-inf-15',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Nouveau-né de 10 jours présentant à domicile refus de téter, irritabilité, fontanelle bombante et convulsion. LCR : 900 leucocytes (80% PNN), hypoglycorachie, culture positive à Streptococcus agalactiae (SGB).\n\nQuelle est cette forme clinique néonatale et son traitement probabiliste de première ligne ?",
    options: [
      "A. Infection néonatale précoce / Amox seule",
      "B. Infection néonatale tardive à SGB (J7 à 3 mois, forme méningée) / Céfotaxime + Amoxicilline IV",
      "C. Méningite nosocomiale / Vancomycine",
      "D. Encéphalite herpétique / Aciclovir",
      "E. Tétanos néonatal / Sérum"
    ],
    correctAnswers: [1],
    explanation: "L'infection tardive à SGB (après J7) se manifeste préférentiellement par une méningite purulente traitée par Céfotaxime + Amoxicilline.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_15_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-15-mindmap',
    courseId: 'crs-inf-15',
    title: 'Mind Map : Infections à Streptocoques (SGA & SGB)',
    type: 'mindmap',
    content: `# Mind Map : Infections à Streptocoques

## 1. Streptococcus pyogenes (Groupe A - SGA)
- **Pathologies non invasives** :
  - *Angine* : TDR si Mac Isaac >= 2 chez l'enfant > 3 ans et l'adulte -> Amoxicilline 6 jours
  - *Scarlatine* : Angine + exanthème « papier sabré » + langue framboisée -> Pénicilline V 10 jours
  - *Impétigo* : Croûtes jaune miel (attention risque de GNA)
  - *Érysipèle* : DHBNN (amoxicilline)
- **Pathologies invasives graves** :
  - *Fasciite nécrosante* : Douleur intense + nécrose + choc -> chirurgie urgente + Clindamycine
  - *SCTS* : Choc toxique superantigénique
  - *Endocardite* : S. gallolyticus -> coloscopie systématique !
- **Complications post-streptococciques** :
  - *RAA* : Mimétisme protéine M -> cardite, polyarthrite migratrice, chorée de Sydenham
  - *GNA* : C3 effondré, œdèmes, HTA, hématurie
  - *Érythème noueux* : Nodules pré-tibiaux

## 2. Streptococcus agalactiae (Groupe B - SGB)
- **Infection néonatale précoce (< 48h)** : Sepsis, détresse respiratoire
- **Infection néonatale tardive (J7-3 mois)** : Méningite purulente
- **Prévention** : Dépistage 35-37 SA -> Amoxicilline IV per-partum`
  },
  {
    id: 'res-inf-15-astuces',
    courseId: 'crs-inf-15',
    title: 'Mnémotechniques Streptocoques',
    type: 'astuce',
    content: `### Perles & Mnémos Streptocoques (Dr. LAIDANI.M)

1. **Score de Mac Isaac : « F.A.T.A.C. »**
   - **F**ièvre > 38°C (1)
   - **A**bsence de toux (1)
   - **T**onsille exsudat (1)
   - **A**dénopathies cervicales (1)
   - **C**ompte âge (15-44 ans = 0, >= 45 = -1) -> TDR si score >= 2 !

2. **Scarlatine : « Les 3 P »**
   - **P**apier sabré (exanthème)
   - **P**astia (renforcement aux plis)
   - **P**âleur péribuccale (signe de Filatov)

3. **Streptococcus gallolyticus (bovis) :**
   - « Gallolyticus = Coloscopie ! Toujours chercher le polype ou cancer du côlon ! »`
  }
];
