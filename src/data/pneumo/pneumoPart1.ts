import { Question, CourseResource } from '../../types/medical';

// Lesson 1: Prévention de la Tuberculose et Infection Tuberculeuse Latente (ITL)
export const PNEUMO_LESSON_1_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-1-01',
    courseId: 'crs-pneumo-1',
    questionNumber: 1,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La tuberculose maladie (TM) pulmonaire est caractérisée par :",
    options: [
      "A. Une localisation exclusive aux poumons.",
      "B. Une contagiosité maximale en présence de bacilles à l’examen direct des crachats.",
      "C. Une multiplication rapide du bacille de Koch (BK) dans les macrophages.",
      "D. Une symptomatologie toujours patente dès la primo-infection.",
      "E. Une sensibilité exclusive aux antibiotiques bêta-lactamines."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : La contagiosité est liée à l’excrétion de bacilles dans les expectorations (\"TB pulmonaire à frottis positif\"). Le BK a une croissance lente (C faux). La TM peut survenir après une ITL asymptomatique (D faux). Le BK est un bacille acido-alcoolo-résistant, insensible aux bêta-lactamines (E faux)."
  },
  {
    id: 'q-pnm-1-02',
    courseId: 'crs-pneumo-1',
    questionNumber: 2,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la primo-infection tuberculeuse (PIT) :",
    options: [
      "A. Elle est systématiquement symptomatique.",
      "B. Elle conduit toujours à la formation d’un granulome caséeux.",
      "C. Elle peut évoluer vers une infection tuberculeuse latente (ITL).",
      "D. Le diagnostic repose sur l’hémoculture positive.",
      "E. Sa transmission se fait principalement par voie aérienne."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : La PIT est le plus souvent asymptomatique (A faux). La réponse immunitaire aboutit typiquement à un granulome giganto-cellulaire avec nécrose caséeuse (B vrai). L'ITL est définie comme une PIT asymptomatique (C vrai). Le diagnostic de PIT/ITL est indirect (IDR/IGRA), l'hémoculture est réservée aux formes disséminées (D faux). La transmission est aérienne via des aérosols (E vrai)."
  },
  {
    id: 'q-pnm-1-03',
    courseId: 'crs-pneumo-1',
    questionNumber: 3,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi ces facteurs, lesquels favorisent la réactivation d’une ITL en TM ?",
    options: [
      "A. Infection par le VIH.",
      "B. Traitement par anti-TNF.",
      "C. Diabète sucré.",
      "D. Tabagisme.",
      "E. Vaccination par le BCG après l’âge de 5 ans."
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Correction : A, B, C, D\nExplication : L'immunodépression (VIH, anti-TNF), les comorbidités (diabète) et les facteurs de risque généraux (tabac) augmentent le risque de réactivation. Le BCG protège surtout des formes graves chez l'enfant mais n'empêche pas la réactivation à l'âge adulte (E n'est pas un facteur favorisant direct)."
  },
  {
    id: 'q-pnm-1-04',
    courseId: 'crs-pneumo-1',
    questionNumber: 4,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour le diagnostic bactériologique d’une tuberculose pulmonaire commune, on demande :",
    options: [
      "A. Un examen cytobactériologique standard des crachats (ECBC).",
      "B. Une recherche spécifique de BAAR sur trois prélèvements d’expectorations.",
      "C. Un tubage gastrique matinal à jeun en cas d’expectoration impossible.",
      "D. Une hémoculture systématique.",
      "E. Une PCR sur sang pour confirmation rapide."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : L'ECBC standard ne recherche pas les BAAR, il faut une demande spécifique (A faux, B vrai). Le tubage gastrique est une alternative valide (C vrai). L'hémoculture et la PCR sanguine ne sont pas systématiques, elles sont indiquées dans les formes disséminées (miliaire) (D, E faux)."
  },
  {
    id: 'q-pnm-1-05',
    courseId: 'crs-pneumo-1',
    questionNumber: 5,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la vaccination par le BCG en Algérie :",
    options: [
      "A. Elle est recommandée pour tous les nouveau-nés.",
      "B. Elle nécessite systématiquement un test IDR préalable.",
      "C. Elle laisse une cicatrice vaccinale caractéristique.",
      "D. Elle est contre-indiquée chez les sujets contacts d'un cas de tuberculose.",
      "E. Elle protège à 100% contre l'infection tuberculeuse."
    ],
    correctAnswers: [0, 2],
    explanation: "Correction : A, C\nExplication : Le BCG est recommandé à la naissance, sans test préalable (A vrai, B faux). Il laisse une cicatrice (C vrai). Il est recommandé chez les contacts enfants sans signes de maladie, selon un algorithme précis (D faux). Son efficacité est partielle, surtout contre les formes graves de l'enfant, mais pas stérilisante (E faux)."
  },
  {
    id: 'q-pnm-1-06',
    courseId: 'crs-pneumo-1',
    questionNumber: 6,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un enfant de 3 ans, contact d'un cas de tuberculose pulmonaire M+, sans cicatrice de BCG. L'IDR est à 12 mm. La conduite à tenir est :",
    options: [
      "A. Débuter une chimioprophylaxie immédiatement.",
      "B. Vacciner par le BCG.",
      "C. Réaliser un test IGRA.",
      "D. Faire une radiographie pulmonaire.",
      "E. Surveiller et revoir en cas de symptômes."
    ],
    correctAnswers: [0, 3],
    explanation: "Correction : A, D\nExplication : Chez un contact <5 ans, non vacciné, avec IDR ≥10 mm, on instaure une chimioprophylaxie (traitement préventif de l'ITL) (A vrai). La vaccination BCG n'est pas faite si IDR ≥10 mm (B faux). L'IGRA n'est pas indispensable chez le jeune enfant contact (C faux). Un cliché thoracique est nécessaire pour éliminer une maladie active avant de débuter la prophylaxie (D vrai). La simple surveillance est insuffisante dans ce contexte à haut risque (E faux)."
  },
  {
    id: 'q-pnm-1-07',
    courseId: 'crs-pneumo-1',
    questionNumber: 7,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'Infection Tuberculeuse Latente (ITL) est définie par :",
    options: [
      "A. La présence de signes cliniques de tuberculose.",
      "B. Une réponse immune persistante aux antigènes du BK sans maladie active.",
      "C. Une radiographie pulmonaire anormale.",
      "D. La positivité de l'examen direct des crachats.",
      "E. Un risque de réactivation estimé à 5-10% sur la vie entière."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E\nExplication : L'ITL est par définition asymptomatique (A faux) et sans signe radiologique de maladie active (C faux). C'est un état immunologique (B vrai). Les prélèvements bactériologiques sont négatifs (D faux). Le risque de réactivation est bien de 5-10% sur la vie, majoritairement dans les 2 premières années (E vrai)."
  },
  {
    id: 'q-pnm-1-08',
    courseId: 'crs-pneumo-1',
    questionNumber: 8,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Les populations prioritaires pour le dépistage et traitement de l'ITL incluent :",
    options: [
      "A. Toute la population générale.",
      "B. Les contacts domiciliaires d'un cas de TP M+.",
      "C. Les personnes vivant avec le VIH.",
      "D. Les patients sous corticothérapie à forte dose.",
      "E. Les patients candidats à un traitement anti-TNF."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Correction : B, C, E\nExplication : Le dépistage est ciblé sur les groupes à haut risque. Les contacts et les PVVIH sont des priorités absolues (B, C vrai). Les candidats aux anti-TNF font partie des \"autres groupes à risque\" (E vrai). La population générale n'est pas systématiquement dépistée (A faux). La corticothérapie est un facteur de risque mais ne fait pas partie des groupes listés comme prioritaires pour le dépistage systématique dans ce support (D à nuancer, non retenu comme priorité absolue ici)."
  },
  {
    id: 'q-pnm-1-09',
    courseId: 'crs-pneumo-1',
    questionNumber: 9,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour le dépistage de l'ITL, l'Intradermo-Réaction (IDR) à la tuberculine :",
    options: [
      "A. Utilise la tuberculine PPD.",
      "B. Est lue à 24-48 heures.",
      "C. Mesure le diamètre de l'érythème.",
      "D. Peut être faussement positive chez un sujet vacciné par le BCG.",
      "E. Est contre-indiquée en cas de grossesse."
    ],
    correctAnswers: [0, 3],
    explanation: "Correction : A, D\nExplication : L'IDR utilise bien la PPD (A vrai). La lecture se fait à 72h (B faux). On mesure le diamètre de l'induration (papule durcie), pas de l'érythème (C faux). Le BCG peut entraîner une réaction positive (D vrai). L'IDR n'est pas contre-indiquée pendant la grossesse (E faux)."
  },
  {
    id: 'q-pnm-1-10',
    courseId: 'crs-pneumo-1',
    questionNumber: 10,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un test IGRA (Interferon-Gamma Release Assay) :",
    options: [
      "A. Détecte directement la présence du BK dans le sang.",
      "B. N'est pas influencé par une vaccination antérieure par le BCG.",
      "C. Est recommandé en première intention chez l'enfant de moins de 5 ans.",
      "D. Permet de différencier ITL et tuberculose active.",
      "E. Comprend le QuantiFERON®-TB Gold."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E\nExplication : L'IGRA est un test indirect mesurant la réponse immune (A faux). Il utilise des antigènes spécifiques du complexe M. tuberculosis, non présents dans le BCG (B vrai). Chez le jeune enfant, l'IDR est préférée (C faux). Il ne différencie pas ITL et maladie active (D faux). Le QuantiFERON est un type d'IGRA (E vrai)."
  },
  {
    id: 'q-pnm-1-11',
    courseId: 'crs-pneumo-1',
    questionNumber: 11,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de première intention d'une ITL chez l'adulte immunocompétent est :",
    options: [
      "A. Isoniazide seul pendant 9 mois.",
      "B. Rifampicine seule pendant 4 mois.",
      "C. Rifampicine + Isoniazide pendant 3 mois.",
      "D. Pyrazinamide + Ethambutol pendant 2 mois.",
      "E. Isoniazide + Rifapentine une fois par semaine pendant 3 mois."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Le schéma recommandé est bien Rifampicine + Isoniazide (3RH) pour 3 mois (C vrai). L'isoniazide seul 6-9 mois est une alternative (A, durée différente). Les autres schémas (B, D, E) ne sont pas les schémas de première intention présentés dans le cours (le schéma E existe dans d'autres recommandations mais n'est pas cité ici)."
  },
  {
    id: 'q-pnm-1-12',
    courseId: 'crs-pneumo-1',
    questionNumber: 12,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez une personne vivant avec le VIH sous traitement antirétroviral, le traitement de l'ITL recommandé est :",
    options: [
      "A. Rifampicine + Isoniazide pendant 3 mois.",
      "B. Isoniazide seul pendant 6 mois.",
      "C. Rifabutine + Isoniazide.",
      "D. Aucun traitement n'est nécessaire.",
      "E. Le choix dépend des interactions médicamenteuses."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E\nExplication : En raison des interactions importantes de la rifampicine avec de nombreux antirétroviraux, le schéma privilégié est l'isoniazide seul pendant 6 mois (B vrai). Le principe général est d'adapter en fonction des interactions (E vrai). Le 3RH (A) est moins recommandé dans ce contexte spécifique."
  },
  {
    id: 'q-pnm-1-13',
    courseId: 'crs-pneumo-1',
    questionNumber: 13,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La surveillance du traitement d'une ITL par isoniazide doit inclure :",
    options: [
      "A. Un contrôle hebdomadaire de la numération-formule sanguine.",
      "B. Une surveillance clinique des signes d'ictère ou d'asthénie.",
      "C. Un dosage mensuel des transaminases hépatiques.",
      "D. Un examen ophtalmologique systématique.",
      "E. Une radiographie pulmonaire de contrôle à mi-traitement."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : L'effet indésirable majeur de l'isoniazide est l'hépatotoxicité. Une surveillance clinique (ictère, asthénie) et biologique (transaminases) est recommandée (B, C vrai). La surveillance hématologique hebdomadaire n'est pas systématique (A faux). L'examen ophtalmologique est lié à l'éthambutol, non utilisé ici (D faux). La radiographie n'est pas nécessaire pour surveiller une ITL traitée (E faux)."
  },
  {
    id: 'q-pnm-1-14',
    courseId: 'crs-pneumo-1',
    questionNumber: 14,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la stratégie de prévention de la tuberculose, les actions prioritaires sont :",
    options: [
      "A. Le dépistage et traitement précoces des TP M+.",
      "B. La vaccination universelle des adultes par le BCG.",
      "C. Le suivi régulier des cas traités jusqu'à guérison.",
      "D. Le traitement systématique de l'ITL dans la population générale.",
      "E. L'information et l'éducation sanitaire."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Correction : A, C, E\nExplication : Les piliers de la prévention selon le cours sont : dépistage/traitement précoce des TP contagieuses (A vrai), suivi des cas (C vrai) et éducation sanitaire (E vrai). La vaccination des adultes n'est pas recommandée (B faux). Le traitement de l'ITL est ciblé sur les groupes à risque, pas la population générale (D faux)."
  },
  {
    id: 'q-pnm-1-15',
    courseId: 'crs-pneumo-1',
    questionNumber: 15,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une pleurésie tuberculeuse est caractérisée par :",
    options: [
      "A. Une contagiosité équivalente à une TP cavitaire.",
      "B. Un épanchement riche en lymphocytes.",
      "C. La présence systématique de BAAR à l'examen direct du liquide pleural.",
      "D. Une association fréquente à une adénopathie hilaire.",
      "E. Un diagnostic souvent confirmé par biopsie pleurale."
    ],
    correctAnswers: [1, 4],
    explanation: "Correction : B, E\nExplication : La pleurésie tuberculeuse est souvent paucibacillaire, peu contagieuse (A faux), avec un liquide lymphocytaire (B vrai). L'examen direct est souvent négatif (C faux). L'adénopathie hilaire est typique de la primo-infection, pas systématique ici (D faux). La biopsie pleurale (montrant un granulome caséeux) a une meilleure sensibilité (E vrai)."
  },
  {
    id: 'q-pnm-1-16',
    courseId: 'crs-pneumo-1',
    questionNumber: 16,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant la tuberculose miliaire :",
    options: [
      "A. Elle résulte d'une dissémination hématogène massive du BK.",
      "B. La radiographie pulmonaire montre des micronodules diffus.",
      "C. Le diagnostic peut nécessiter une myéloculture en cas de neutropénie.",
      "D. L'IDR à la tuberculine est toujours fortement positive.",
      "E. Le pronostic est bénin sous traitement adapté."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Correction : A, B, C\nExplication : C'est une forme disséminée (A vrai), avec un aspect radiologique typique en \"grains de mil\" (B vrai). Le diagnostic bactériologique est difficile, nécessitant parfois des prélèvements profonds comme la moelle osseuse (C vrai). L'IDR peut être négative chez les sujets immunodéprimés (D faux). Le pronostic est sévère, potentiellement mortel (E faux)."
  },
  {
    id: 'q-pnm-1-17',
    courseId: 'crs-pneumo-1',
    questionNumber: 17,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement préventif (chimioprophylaxie) d'une ITL chez un enfant contact de moins de 5 ans :",
    options: [
      "A. Est indiqué même si l'IDR est négative.",
      "B. A pour but de prévenir la progression vers la maladie.",
      "C. Utilise les mêmes molécules que le traitement curatif.",
      "D. Doit être précédé d'une radiographie pulmonaire normale.",
      "E. Est administré pendant une durée de 6 mois minimum."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Correction : B, C, D\nExplication : Chez le contact <5 ans, la chimioprophylaxie est indiquée même sans test (A vrai dans ce contexte spécifique, car le cours dit \"Un test préalable... n'est pas indispensable\"). Son but est préventif (B vrai). On utilise l'isoniazide ou d'autres anti-tuberculeux (C vrai). Il faut éliminer une maladie active par une radio normale avant de débuter (D vrai). La durée peut être de 3 mois (Rifampicine+Isoniazide) ou 6 mois (Isoniazide seul) (E faux car \"minimum\" n'est pas exact)."
  },
  {
    id: 'q-pnm-1-18',
    courseId: 'crs-pneumo-1',
    questionNumber: 18,
    type: 'QCM',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un résultat d'IDR à 8 mm chez un adulte contact d'un cas de TP, non vacciné par le BCG, impose :",
    options: [
      "A. De conclure à une ITL et de traiter.",
      "B. De réaliser un test IGRA pour confirmation.",
      "C. D'écarter le diagnostic d'ITL.",
      "D. De répéter l'IDR à 3 mois.",
      "E. De débuter une enquête autour du cas."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Pour un adulte contact, une IDR entre 5 et 14 mm est considérée comme douteuse. La conduite à tenir est de confirmer par un test IGRA (B vrai). On ne conclut pas directement à une ITL (A faux), ni on ne l'écarte (C faux). La répétition de l'IDR n'est pas la stratégie recommandée (D faux). L'enquête autour du cas est déjà faite puisque c'est un contact identifié (E n'est pas l'action immédiate liée à ce résultat)."
  },

  // 5 Cas Cliniques
  {
    id: 'q-pnm-1-c1-1',
    courseId: 'crs-pneumo-1',
    questionNumber: 19,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 : Fatigue et Sueurs Nocturnes\nM. Ahmed, 28 ans, maçon, consulte pour asthénie, amaigrissement de 4 kg et sueurs nocturnes profuses depuis 6 semaines. Toux productive matinale. Pas d'antécédents particuliers. Examen clinique : discret râles crépitants au sommet droit. Radio thorax : opacité alvéolaire du lobe supérieur droit avec image excavée. Le médecin suspecte une tuberculose pulmonaire.\n\nQ1. Quelle est la démarche diagnostique bactériologique prioritaire ?",
    options: [
      "A. Hémocultures sur milieu spécial mycobactéries.",
      "B. Recherche de BAAR dans les expectorations (3 prélèvements).",
      "C. Ponction lombaire.",
      "D. Biopsie hépatique.",
      "E. Test IGRA sur sang."
    ],
    correctAnswers: [1],
    explanation: "Correction : B\nExplication : Devant une forte suspicion de TP commune, la priorité est la confirmation bactériologique par l'examen direct des crachats (frottis de BAAR). La mise en culture vient ensuite. Les autres examens sont indiqués dans des formes extra-pulmonaires ou disséminées."
  },
  {
    id: 'q-pnm-1-c1-2',
    courseId: 'crs-pneumo-1',
    questionNumber: 20,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 1 (suite) : Le prélèvement est positif à l'examen direct. Parmi ces affirmations, laquelle est VRAIE concernant la prise en charge ?",
    options: [
      "A. Le patient doit être isolé immédiatement en milieu hospitalier.",
      "B. Le traitement antituberculeux standard de première ligne doit être débuté sans attendre les cultures.",
      "C. Une enquête autour du cas (contacts) doit être initiée.",
      "D. La déclaration obligatoire n'est pas nécessaire.",
      "E. La vaccination par le BCG doit être proposée à son entourage adulte."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : Dès la suspicion forte (BAAR+), le traitement doit être débuté rapidement (B vrai). L'enquête autour du cas est systématique (C vrai). L'isolement (A) est important mais peut être fait à domicile sous conditions (toux couverte, aération). La déclaration est obligatoire (D faux). Le BCG n'est pas recommandé pour les contacts adultes (E faux)."
  },
  {
    id: 'q-pnm-1-c2-1',
    courseId: 'crs-pneumo-1',
    questionNumber: 21,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 2 : Infection à VIH et Dépistage\nMme Leila, 35 ans, nouvellement diagnostiquée VIH+, CD4 à 220/mm3, asymptomatique sur le plan respiratoire. La clinique de prise en charge souhaite faire un dépistage d'ITL.\n\nQ1. Quelle est la stratégie de dépistage recommandée pour cette patiente ?",
    options: [
      "A. Radiographie pulmonaire seule.",
      "B. IDR à la tuberculine seule.",
      "C. Test IGRA seul.",
      "D. IDR ou IGRA indifféremment.",
      "E. Pas de dépistage nécessaire, débuter directement un traitement préventif."
    ],
    correctAnswers: [4],
    explanation: "Correction : E\nExplication : Chez les Personnes Vivant avec le VIH (PVVIH), quel que soit l'âge, les recommandations (OMS et cours) préconisent un traitement préventif antituberculeux systématique (TPT) sans test de dépistage préalable obligatoire, surtout en cas d'immunodépression (CD4 <500). C'est une priorité de santé publique."
  },
  {
    id: 'q-pnm-1-c3-1',
    courseId: 'crs-pneumo-1',
    questionNumber: 22,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 3 : Nourrisson de mère tuberculeuse\nUn nouveau-né de 2 mois, en parfait état, est amené en consultation. Sa mère vient d'être diagnostiquée avec une tuberculose pulmonaire M+, traitée depuis seulement 3 semaines.\n\nQ1. Quelle est la conduite à tenir pour ce nourrisson ?",
    options: [
      "A. Vaccination BCG immédiate.",
      "B. Radiographie pulmonaire et examen clinique.",
      "C. Début d'une chimioprophylaxie par isoniazide.",
      "D. Surveillance simple.",
      "E. Séparation mère-enfant jusqu'à la fin du traitement maternel."
    ],
    correctAnswers: [1, 2],
    explanation: "Correction : B, C\nExplication : C'est une situation à très haut risque. Il faut d'abord éliminer une tuberculose maladie chez l'enfant (examen clinique, radiographie) (B vrai). En l'absence de signes, une chimioprophylaxie est indiquée car la mère est traitée depuis moins de 2 mois (C vrai). La vaccination BCG est différée à la fin de la chimioprophylaxie (A faux). La surveillance simple est insuffisante (D faux). La séparation n'est pas recommandée si la mère est sous traitement et éduquée aux mesures d'hygiène (E faux)."
  },
  {
    id: 'q-pnm-1-c4-1',
    courseId: 'crs-pneumo-1',
    questionNumber: 23,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 4 : Suspicion de tuberculose ganglionnaire\nM. Omar, 40 ans, présente des adénopathies cervicales multiples, indolores, fistulisées à la peau, évoluant depuis 2 mois. Amaigrissement modéré. Radio thorax normale.\n\nQ1. Quel est le meilleur examen pour confirmer le diagnostic ?",
    options: [
      "A. IDR à la tuberculine.",
      "B. Ponction aspiration à l'aiguille fine de l'adénopathie.",
      "C. Biopsie-exérèse d'une adénopathie pour anatomopathologie et culture.",
      "D. Test IGRA.",
      "E. Scanner thoracique."
    ],
    correctAnswers: [2],
    explanation: "Correction : C\nExplication : Pour la tuberculose ganglionnaire (scrofulle), l'examen de référence est l'histologie (recherche du granulome caséeux) et la culture sur la pièce de biopsie. La ponction aspiration a une sensibilité plus faible. Les tests IDR/IGRA confirment l'infection mais pas la localisation ni l'activité maladie. Le scanner n'est pas diagnostique."
  },
  {
    id: 'q-pnm-1-c5-1',
    courseId: 'crs-pneumo-1',
    questionNumber: 24,
    type: 'CasClinique',
    module: 'Pneumologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Cas 5 : Traitement immunosuppresseur projeté\nMme Fatima, 60 ans, doit débuter un traitement par anti-TNF (infliximab) pour une maladie de Crohn sévère. Son médecin veut dépister une éventuelle ITL avant de débuter.\n\nQ1. Quelle séquence de dépistage est appropriée ?",
    options: [
      "A. Radio thorax seule.",
      "B. IDR seule, puis traitement si ≥ 5 mm.",
      "C. IGRA seul, puis traitement si positif.",
      "D. IDR puis IGRA en cas de résultat douteux (5-14 mm).",
      "E. Pas de dépistage nécessaire avant anti-TNF."
    ],
    correctAnswers: [3],
    explanation: "Correction : D\nExplication : Les candidats aux anti-TNF font partie des groupes à haut risque. Le dépistage combiné est souvent recommandé : IDR d'abord. Si elle est ≥15 mm, ITL probable. Si elle est entre 5-14 mm (zone douteuse, possiblement due au BCG), un IGRA de confirmation est nécessaire (D vrai). La radio seule est insuffisante (A faux). Se baser sur l'IDR seule avec un seuil bas peut conduire à traiter inutilement des réactions post-BCG (B faux). L'IGRA seul est une option, mais l'algorithme du cours présente la séquence IDR puis IGRA (C n'est pas la séquence décrite). Le dépistage est indispensable (E faux)."
  }
];

export const PNEUMO_LESSON_1_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-1-mindmap',
    courseId: 'crs-pneumo-1',
    type: 'Resume',
    title: 'Mind Map : Prévention de la Tuberculose & ITL',
    contentMarkdown: `### [Centre] PRÉVENTION TUBERCULOSE & ITL

├── **AGENT** : Mycobacterium tuberculosis (BK) - BAAR - Aérobie strict
│
├── **TRANSMISSION** : Aérienne (gouttelettes) → Primo-Infection (PIT)
│   └── Évolution : PIT → (90%) Infection Latente (ITL) → (10%) Tuberculose Maladie (TM)
│
├── **TUBERCULOSE MALADIE (TM)**
│   ├── Formes : Pulmonaire (+++ contagieuse si BAAR+), Extra-pulmonaire, Miliaire
│   ├── Diagnostic :
│   │   └── Pulmonaire : BAAR Expectorations (x3) / Tubage gastrique / Fibroscopie
│   └── Principe : Dépistage & Traitement PRÉCOCE des TP M+ (Cœur de la prévention)
│
├── **INFECTION TUBERCULEUSE LATENTE (ITL)**
│   ├── Définition : Réponse immune sans maladie active
│   ├── Risque : Réactivation 5-10% (↑ si immunodépression, âges extrêmes, diabète...)
│   ├── Dépistage (Groupes Ciblés) :
│   │   ├── Contacts domiciliaires TP M+
│   │   ├── PVVIH (traitement préventif systématique)
│   │   └── Autres risques (Anti-TNF, dialyse, greffe, silicose)
│   ├── Tests :
│   │   ├── IDR (Intradermo-Réaction à la Tuberculine)
│   │   │   ├── Lecture à 72h - Induration (mm)
│   │   │   ├── Seuils : <5 Nég, 5-14 Douteux, ≥15 Positif
│   │   │   └── Influencé par BCG
│   │   └── IGRA (QuantiFERON, T-SPOT) : Spécifique, non influencé par BCG
│   └── Traitement (Chimioprophylaxie) :
│       ├── 1ère intention : Rifampicine + Isoniazide (3 mois)
│       ├── Alternative : Isoniazide seul (6-9 mois)
│       └── Adaptation : PVVIH (Isoniazide 6 mois), hépatopathie
│
├── **VACCINATION BCG**
│   ├── Indication : Nouveau-nés, enfants <15 ans sans cicatrice
│   ├── Réalisation : SANS test IDR préalable
│   └── Rôle : Protection partielle contre les formes graves de l'enfant (méningite, miliaire)
│
└── **STRATÉGIE GLOBALE DE PRÉVENTION**
    1. Dépistage précoce TP contagieuse
    2. Diagnostic & Traitement précoces TP M+
    3. Suivi régulier jusqu'à guérison
    4. Dépistage & Traitement ITL dans groupes à risque
    5. Information & Éducation sanitaire`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mind Map', 'Tuberculose', 'Prévention', 'ITL']
  },
  {
    id: 'res-pnm-1-astuces',
    courseId: 'crs-pneumo-1',
    type: 'Astuce',
    title: 'Astuces & Mnémotechniques & Conseil du Prof',
    contentMarkdown: `### Astuces & Mnémotechniques
• **Ordre des Évènements : C.P.I.T.**
  - Contamination → Primo-Infection → ITL → TM.

• **Facteurs de Réactivation ITL → TM : VIH DATTÉ**
  - **V**IH / Immunodépression
  - **I**mmunodépression
  - **H**TA / Âges extrêmes
  - **D**iabète
  - **A**ges extrêmes
  - **T**abac / Traitement (Immunosuppresseurs, Anti-TNF)
  - **T**oxiques (Éthylisme) / Malnutrition

• **Seuils IDR (mm) : 5 - 14 - 15**
  - < 5 : Négatif (sauf anergie).
  - 5-14 : Zone Grise (Douteux) → besoin d'IGRA.
  - ≥ 15 : Positif (suggère ITL chez les sujets à risque).

• **Traitement ITL : 3 RH pour 3 mois**
  - Rifampicine + H (Isoniazide) pendant 3 mois. Facile à retenir.

• **Diagnostic TP : BAC Heureux**
  - **B**AAR (Recherche spécifique, pas ECBC standard)
  - **A**u moins 3 prélèvements
  - **C**ulture (Gold Standard)
  - (**H** pour Horaires : Tubage gastrique le matin à JEUN avant le lever)

• **Cas Contacts : <5 ans = Traite, VIH = Traite**
  - Contact <5 ans OU PVVIH → Traitement Préventif (TPT) souvent SANS test préalable obligatoire.

---
### Conseil du Prof
Maîtrisez l'algorithme décisionnel pour les sujets contacts (âge, statut vaccinal, IDR) et la logique du dépistage ciblé de l'ITL. Comprenez bien la différence entre prévention (BCG, chimioprophylaxie) et contrôle (traitement des malades). La tuberculose est une maladie sociale : pensez toujours aux facteurs de risque dans vos cas cliniques.

*Allez-y, futurs médecins ! La lutte contre la tuberculose passe par votre connaissance précise et votre rigueur. À vous de jouer pour faire la différence, un cas, un schéma thérapeutique, une vie préservée à la fois !*

**BY:LAIDANI.M**`,
    authorOrSource: 'BY:LAIDANI.M',
    tags: ['Mnémotechniques', 'Conseil du Prof', 'Tuberculose']
  }
];
