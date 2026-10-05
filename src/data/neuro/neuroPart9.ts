import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 24: ATAXTIES & MOUVEMENTS ANORMAUX
// ==========================================
export const NEURO_LESSON_24_QUESTIONS: Question[] = [
  {
    id: 'q-nro-24-01',
    courseId: 'crs-neuro-24',
    questionNumber: 1,
    type: 'QCM',
    content: "Une ataxie proprioceptive (sensitive) se différencie d'une ataxie cérébelleuse par :",
    options: [
      "A) Une aggravation majeure de l'instabilité et des oscillations lors de la fermeture des yeux (signe de Romberg positif) et une démarche talonnante avec perte du sens de position du gros orteil.",
      "B) L'absence complète de tout trouble de la marche.",
      "C) Un nystagmus multidirectionnel spontané permanent.",
      "D) Une hypermétrie aux épreuves cinétiques non modifiée par la vue.",
      "E) Des réflexes ostéotendineux très vifs et polycinétiques."
    ],
    correctAnswers: [0],
    explanation: "L'ataxie sensitive cordonale postérieure est largement compensée par la vision : sa caractéristique fondamentale est l'aggravation spectaculaire à l'occlusion des yeux (Romberg positif franc, démarche talonnante).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-02',
    courseId: 'crs-neuro-24',
    questionNumber: 2,
    type: 'QCM',
    content: "Le tremblement essentiel bénin se caractérise sémiologiquement par :",
    options: [
      "A) Un tremblement d'action et d'attitude bilatéral, symétrique, à fréquence de 6 à 12 Hz, touchant les mains et la tête (tremblement du chef du 'non' ou du 'oui'), fréquemment familial et amélioré de façon remarquable par de faibles doses d'alcool.",
      "B) Un tremblement unilatéral de repos à 4 Hz en 'émiettement de pain'.",
      "C) Un tremblement purement intentionnel n'apparaissant qu'à l'approche de la cible.",
      "D) Des secousses massives axiales survenant à l'endormissement.",
      "E) Une paralysie complète des membres supérieurs."
    ],
    correctAnswers: [0],
    explanation: "Le tremblement essentiel est postural/d'action, touche les membres supérieurs et le chef, souvent autosomique dominant, et répond aux bêtabloquants (propranolol) et à l'alcool.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-03',
    courseId: 'crs-neuro-24',
    questionNumber: 3,
    type: 'QCM',
    content: "Le traitement médicamenteux de première ligne du tremblement essentiel invalidant repose sur :",
    options: [
      "A) Le propranolol (bêtabloquant non cardiosélectif) OU la primidone (antiépileptique).",
      "B) La L-Dopa à forte dose.",
      "C) Les neuroleptiques incisifs.",
      "D) Les inhibiteurs de la cholinestérase.",
      "E) La pyridostigmine."
    ],
    correctAnswers: [0],
    explanation: "Le propranolol (Avlocardyl) à doses progressives (60 à 240 mg/j) ou la primidone (Mysoline) constituent le traitement médical de référence du tremblement essentiel.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-04',
    courseId: 'crs-neuro-24',
    questionNumber: 4,
    type: 'QCM',
    content: "La dystonie se définit sémiologiquement par :",
    options: [
      "A) Des contractions musculaires soutenues, involontaires, répétitives, entraînant des postures anormales et des torsions d'un segment corporel (mouvements dystoniques), souvent déclenchées par une action motrice spécifique.",
      "B) Des mouvements brusques, brefs, non stéréotypés, anarchiques et migrateurs sans finalité.",
      "C) Un ralentissement global de tous les mouvements automatiques.",
      "D) Une raideur homogène en tuyau de plomb.",
      "E) Des secousses myocloniques d'origine respiratoire."
    ],
    correctAnswers: [0],
    explanation: "La dystonie produit des contractions agonistes/antagonistes simultanées causant des postures vicieuses en torsion (ex: torticolis spasmodique, crampe de l'écrivain, blépharospasme).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-05',
    courseId: 'crs-neuro-24',
    questionNumber: 5,
    type: 'QCM',
    content: "Le 'geste antagoniste' (ou geste de soulagement, geste 'truqué') est un phénomène sémiologique très particulier observé dans :",
    options: [
      "A) Les dystonies focales (ex: effleurement léger du menton ou de la joue qui atténue immédiatement un torticolis spasmodique).",
      "B) La chorée de Huntington.",
      "C) Le syndrome pyramidal spastique.",
      "D) La myasthénie auto-immune.",
      "E) L'hémiplégie flasque."
    ],
    correctAnswers: [0],
    explanation: "Le geste antagoniste (toucher le menton pour corriger la déviation dystonique du cou) est très spécifique des dystonies motrices focales cervicales.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-06',
    courseId: 'crs-neuro-24',
    questionNumber: 6,
    type: 'QCM',
    content: "Le traitement symptomatique de choix du torticolis spasmodique et du blépharospasme invalidants repose sur :",
    options: [
      "A) Les injections locales intramusculaires de toxine botulique dans les muscles hyperactifs dystoniques, renouvelées tous les 3 à 4 mois.",
      "B) La résection complète de la moelle cervicale.",
      "C) La corticothérapie par voie intraveineuse.",
      "D) L'antibiothérapie par fluoroquinolones.",
      "E) L'administration de neuroleptiques sédatifs au long cours."
    ],
    correctAnswers: [0],
    explanation: "La toxine botulique A bloque la libération présynaptique d'acétylcholine à la jonction neuromusculaire locale, étant le traitement de référence des dystonies focales.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-07',
    courseId: 'crs-neuro-24',
    questionNumber: 7,
    type: 'QCM',
    content: "L'hémiballisme est un mouvement involontaire violent, unilatéral, proximal, de grande amplitude, semblable à un jet de membre. Il résulte typiquement d'une lésion aiguë de :",
    options: [
      "A) Le corps de Luys (noyau sous-thalamique) controlatéral, le plus souvent d'origine ischémique vasculaire.",
      "B) L'hémisphère cérébelleux homolatéral.",
      "C) Le thalamus antérieur.",
      "D) La corne postérieure de la moelle.",
      "E) La tête du noyau caudé bilatérale."
    ],
    correctAnswers: [0],
    explanation: "L'hémiballisme est secondaire à une lésion aiguë destructive (infarctus ou hématome) du corps de Luys (noyau sous-thalamique) controlatéral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-08',
    courseId: 'crs-neuro-24',
    questionNumber: 8,
    type: 'QCM',
    content: "La chorée se définit sémiologiquement par des mouvements involontaires :",
    options: [
      "A) Brusques, brefs, imprévisibles, non stéréotypés, arythmiques, sans finalité, migrateurs d'un territoire musculaire à un autre au repos comme à l'action.",
      "B) Rythmiques, oscillatoires, réguliers autour d'un axe articulaire fixe.",
      "C) Fixes en flexion permanente élastique.",
      "D) Déclenchés uniquement par la stimulation lumineuse intermittente.",
      "E) Disparaissant totalement à la volonté."
    ],
    correctAnswers: [0],
    explanation: "Les mouvements choréiques sont anarchiques, incessants, sans finalité, prédominant aux extrémités et à la face (grimaces), s'interposant sur le geste volontaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-09',
    courseId: 'crs-neuro-24',
    questionNumber: 9,
    type: 'QCM',
    content: "La chorée aiguë de Sydenham (chorée de Saint-Guy) complique une infection à :",
    options: [
      "A) Streptocoque bêta-hémolytique du groupe A dans le cadre du Rhumatisme Articulaire Aigu (RAA).",
      "B) Borrelia burgdorferi au stade 1.",
      "C) Virus Epstein-Barr aigu.",
      "D) Pneumocoque de type 3.",
      "E) Plasmodium falciparum."
    ],
    correctAnswers: [0],
    explanation: "La chorée de Sydenham est une complication post-streptococcique auto-immune pédiatrique (anticorps anti-ganglions de la base) survenant plusieurs semaines après une angine à streptocoque A.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-10',
    courseId: 'crs-neuro-24',
    questionNumber: 10,
    type: 'QCM',
    content: "Dans la maladie de Wilson (dégénérescence hépato-lenticulaire), le trouble du métabolisme du cuivre se transmet selon un mode :",
    options: [
      "A) Autosomique récessif (mutation du gène ATP7B sur le chromosome 13).",
      "B) Autosomique dominant à pénétrance complète.",
      "C) Lié à l'X récessif.",
      "D) Exclusivement mitochondrial maternel.",
      "E) Non génétique spontané."
    ],
    correctAnswers: [0],
    explanation: "La maladie de Wilson est une tubulopathie/hépatopathie par surcharge en cuivre à transmission autosomique récessive liée au gène ATP7B transporteur d'ions cuivre.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-11',
    courseId: 'crs-neuro-24',
    questionNumber: 11,
    type: 'QCM',
    content: "Le signe ophtalmologique pathognomonique de la maladie de Wilson à l'examen à la lampe à fente est :",
    options: [
      "A) L'anneau cornéen péricornéen brun-verdâtre de Kayser-Fleischer à la membrane de Descemet.",
      "B) La cataracte congénitale unilatérale.",
      "C) Le décollement séreux de la rétine maculaire.",
      "D) Le colobome irien congénital.",
      "E) Une kératite filamenteuse bilatérale."
    ],
    correctAnswers: [0],
    explanation: "L'anneau de Kayser-Fleischer (dépôt cuivrique dans la membrane de Descemet de la cornée) est quasi-constant lors des formes neurologiques de la maladie de Wilson.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-12',
    courseId: 'crs-neuro-24',
    questionNumber: 12,
    type: 'QCM',
    content: "Le bilan biologique caractéristique d'une maladie de Wilson symptomatique retrouve :",
    options: [
      "A) Une céruléoplasmine sérique effondrée (< 0,20 g/L), un cuivre sérique total diminué mais une cuprurie des 24h très augmentée (> 100 μg/24h).",
      "B) Une céruléoplasmine doublée avec cuprurie nulle.",
      "C) Un fer sérique à zéro avec ferritinémie à 5000 ng/ml.",
      "D) Une hypercalcémie maligne à 4 mmol/L.",
      "E) Une hypoglycémie fonctionnelle isolée."
    ],
    correctAnswers: [0],
    explanation: "Le profil cuivrique wilsonien : effondrement de la céruloplasmine plasmatique (protéine porteuse) et excrétion urinaire massive de cuivre libre toxique (cuprurie des 24h élevée).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-13',
    courseId: 'crs-neuro-24',
    questionNumber: 13,
    type: 'QCM',
    content: "Le traitement chélateur du cuivre de référence en phase initiale d'attaque de la maladie de Wilson neurologique ou hépatique est :",
    options: [
      "A) La D-Pénicillamine OU la Trientine, relayées ou associées au sulfate d'acétate de Zinc.",
      "B) La L-Dopa seule.",
      "C) La vitamine B12 à fortes doses.",
      "D) La déféroxamine injectable sous-cutanée.",
      "E) L'acide acétylsalicylique au long cours."
    ],
    correctAnswers: [0],
    explanation: "Les chélateurs du cuivre (D-pénicillamine, trientine) augmentent l'élimination urinaire du cuivre et le zinc bloque l'absorption digestive entérocytaire du cuivre.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-14',
    courseId: 'crs-neuro-24',
    questionNumber: 14,
    type: 'QCM',
    content: "Le syndrome de Gilles de la Tourette associe de manière caractéristique :",
    options: [
      "A) Des tics moteurs multiples et au moins un tic vocal, d'évolution fluctuante pendant plus d'un an, débutant avant l'âge de 18 ans, souvent associés à un TDAH ou des TOC.",
      "B) Une surdité congénitale avec hémiplégie spasmodique.",
      "C) Une chorée aiguë fébrile avec souffle cardiaque aortique.",
      "D) Une démence d'Alzheimer précoce avec épilepsie.",
      "E) Une tétraplégie flasque ascendante."
    ],
    correctAnswers: [0],
    explanation: "Gilles de la Tourette : tics moteurs chroniques multiples + tics phoniques/vocaux (coprolalie dans < 20% des cas), début avant 18 ans, forte comorbidité avec TOC et TDAH.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-15',
    courseId: 'crs-neuro-24',
    questionNumber: 15,
    type: 'QCM',
    content: "Les dyskinésies tardives bucco-linguo-faciales (mâchonnements, mouvements reptatoires de la langue) sont une complication iatrogène redoutable de :",
    options: [
      "A) La prise prolongée de neuroleptiques / antipsychotiques antagonistes des récepteurs D2 dopaminergiques.",
      "B) La pénicilline G par voie intraveineuse.",
      "C) L'administration de paracétamol.",
      "D) La supplémentation en vitamine D.",
      "E) L'usage d'inhibiteurs de la pompe à protons."
    ],
    correctAnswers: [0],
    explanation: "L'hypersensibilité de dénervation des récepteurs dopaminergiques striataux après traitement neuroleptique prolongé induit des dyskinésies tardives souvent irréversibles.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-16',
    courseId: 'crs-neuro-24',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans l'ataxie télangiectasie (syndrome de Louis-Bar), la maladie neurodégénérative associe :",
    options: [
      "A) Une ataxie cérébelleuse progressive précoce, des télangiectasies oculaires (conjonctivales) et cutanées, un déficit immunitaire humoral et cellulaire (infections sinopulmonaires récurrentes) et un risque très élevé de cancers/lymphomes.",
      "B) Une cardiopathie hypertrophique sans aucun signe cutané.",
      "C) Une surdité isolée avec rétinite pigmentaire sans déficit immunitaire.",
      "D) Une macrocrânie isolée avec retard pubertaire.",
      "E) Une polyglobulie primitive de Vaquez."
    ],
    correctAnswers: [0],
    explanation: "Ataxie-télangiectasie (mutation du gène ATM régulant la réparation de l'ADN) : ataxie cérébelleuse dès l'apprentissage de la marche, télangiectasies des conjonctives, déficit en IgA et prédisposition aux lymphomes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-17',
    courseId: 'crs-neuro-24',
    questionNumber: 17,
    type: 'QCM',
    content: "Le syndrome des jambes sans repos (maladie de Willis-Ekbom) se caractérise sémiologiquement par :",
    options: [
      "A) Des impatiences ou sensations désagréables profondes des membres inférieurs au repos le soir ou la nuit au lit, imposant impérieusement le mouvement qui les soulage immédiatement.",
      "B) Une paralysie brutale des deux membres inférieurs à l'effort.",
      "C) Une anesthésie complète de la voûte plantaire.",
      "D) Des crampes permanentes diurnes sans soulagement par la marche.",
      "E) Une déformation orthopédique bilatérale des genoux."
    ],
    correctAnswers: [0],
    explanation: "Critères de Willis-Ekbom : besoin impérieux de bouger les jambes déclenché par le repos/inactivité, prédominance vespérale/nocturne, soulagé transitoirement par le mouvement/la marche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-18',
    courseId: 'crs-neuro-24',
    questionNumber: 18,
    type: 'QCM',
    content: "Quel facteur carentiel réversible doit impérativement être dosé et corrigé face à un syndrome des jambes sans repos ?",
    options: [
      "A) La ferritinémie (carence en fer, cibler une ferritine > 50 à 75 μg/L).",
      "B) Le taux d'hémoglobine glyquée (HbA1c).",
      "C) La vitamine K1.",
      "D) Le cholestérol HDL.",
      "E) Le zinc plasmatique."
    ],
    correctAnswers: [0],
    explanation: "Le fer est le cofacteur de la tyrosine hydroxylase cérébrale pour la synthèse de dopamine : la déplétion en fer cérébral (ferritine < 50-75 ng/ml) est la première cause curable du SJSR.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-19',
    courseId: 'crs-neuro-24',
    questionNumber: 19,
    type: 'QCM',
    content: "L'aspect d'hypersignal mésencéphalique caractéristique en 'tête de panda géant' à l'IRM en T2 est très évocateur de :",
    options: [
      "A) La maladie de Wilson neurologique.",
      "B) La sclérose en plaques forme rémittente.",
      "C) L'accident vasculaire sylvien superficiel.",
      "D) Le glioblastome du corps calleux.",
      "E) La myasthénie aiguë généralisée."
    ],
    correctAnswers: [0],
    explanation: "L'accumulation de cuivre dans le tegmentum mésencéphale préserve les noyaux rouges et la substance noire, dessinant le célèbre signe radiologique du 'visage de panda géant' à l'IRM T2.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-24-20',
    courseId: 'crs-neuro-24',
    questionNumber: 20,
    type: 'QCM',
    content: "Le tremblement cérébelleux d'intention se caractérise par :",
    options: [
      "A) Son apparition lors de l'exécution d'un geste volontaire orienté vers une cible, avec une amplitude croissante qui devient maximale à l'approche de la cible.",
      "B) Son apparition exclusive au repos complet sans action motrice.",
      "C) Sa parfaite régularité à 4 battements par seconde.",
      "D) Son amélioration complète dès le début du mouvement.",
      "E) Son association obligatoire à un signe de Babinski bilatéral."
    ],
    correctAnswers: [0],
    explanation: "Le tremblement cérébelleux d'intention est absent au repos et majore son amplitude au fur et à mesure que le doigt approche du but visé (épreuve doigt-nez).",
    difficulty: 'facile'
  },

  // 6 CLINICAL CASES
  {
    id: 'q-nro-24-c01',
    courseId: 'crs-neuro-24',
    questionNumber: 21,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un homme de 60 ans se plaint d'un tremblement des deux mains apparu progressivement depuis 5 ans, très gênant pour porter sa tasse de café à la bouche, se raser ou signer des chèques. Au repos complet les mains posées sur les cuisses, aucun tremblement n'est visible. Dès qu'il tend les bras en avant (posture) ou qu'il effectue le geste de boire, un tremblement bilatéral rapide de 8 Hz apparaît. Il signale que son père et son frère aîné présentaient les mêmes symptômes et qu'un verre de vin rouge diminue nettement le tremblement. Quel est le diagnostic ?",
    options: [
      "A) Tremblement essentiel familial bénin.",
      "B) Maladie de Parkinson idiopathique forme trémulante.",
      "C) Tremblement psychogène d'origine anxieuse.",
      "D) Chorée de Sydenham résiduelle.",
      "E) Encéphalopathie hépatique cirrhotique."
    ],
    correctAnswers: [0],
    explanation: "Tremblement d'attitude et d'action bilatéral symétrique, histoire familiale autosomique dominante, amélioration spectaculaire par l'alcool = tremblement essentiel.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-c02',
    courseId: 'crs-neuro-24',
    questionNumber: 22,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel traitement pharmacologique prescrivez-vous en première intention pour ce patient s'il n'a pas de contre-indication cardiaque ou pulmonaire ?",
    options: [
      "A) Propranolol par voie orale à doses progressivement croissantes.",
      "B) L-Dopa + Bensérazide.",
      "C) Halopéridol à forte dose.",
      "D) Toxine botulique dans la langue.",
      "E) Baclofène intrathécal."
    ],
    correctAnswers: [0],
    explanation: "Le propranolol (bêtabloquant) est le traitement de référence de première intention du tremblement essentiel.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-c03',
    courseId: 'crs-neuro-24',
    questionNumber: 23,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Une jeune femme de 22 ans est hospitalisée pour tremblement des membres supérieurs 'en battement d'ailes' (flapping tremor d'action), dysarthrie sévère avec rire spasmodique permanent et instabilité de la marche. Elle a pour antécédent une hépatite inexpliquée à l'âge de 14 ans. L'examen à la lampe à fente découvre un anneau péricornéen brun-vert bilatéral. La céruloplasmine sérique est à 0,08 g/L (N > 0,20) et la cuprurie des 24h est à 180 μg. Quel diagnostic portez-vous ?",
    options: [
      "A) Maladie de Wilson neurologique.",
      "B) Sclérose en plaques forme pseudo-parkinsonienne.",
      "C) Hémochromatose génétique héréditaire.",
      "D) Déficit en alpha-1 antitrypsine pur.",
      "E) Maladie de Niemann-Pick de type C."
    ],
    correctAnswers: [0],
    explanation: "Symptômes neuropsychiatriques chez le sujet jeune + antécédent hépatique + anneau de Kayser-Fleischer + effondrement de la céruloplasmine = Maladie de Wilson.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-c04',
    courseId: 'crs-neuro-24',
    questionNumber: 24,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un cadre de 45 ans consulte pour une déviation involontaire de la tête vers la droite survenant surtout en fin de journée et lors des situations de stress. Il parvient à redresser sa tête en effleurant simplement son menton du bout des doigts. L'examen confirme une contraction tonique et douloureuse du muscle sterno-cléido-mastoïdien gauche. Quel traitement spécifique local est le plus efficace pour le soulager ?",
    options: [
      "A) Injections intramusculaires locales de toxine botulique dans le muscle sterno-cléido-mastoïdien gauche et splénius droit.",
      "B) Section chirurgicale bilatérale des nerfs phréniques.",
      "C) Anticoagulation par héparine de bas poids moléculaire.",
      "D) Port d'un plâtre thoraco-crânien permanent pendant 6 mois.",
      "E) Amoxicilline per os."
    ],
    correctAnswers: [0],
    explanation: "Torticolis spasmodique avec geste antagoniste (dystonie cervicale focale) : le traitement de choix est l'injection ciblée de toxine botulique dans les muscles hyperactifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-c05',
    courseId: 'crs-neuro-24',
    questionNumber: 25,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient diabétique et insuffisant rénal de 58 ans se plaint de ne plus pouvoir s'endormir le soir en raison de brûlures, fourmillements profonds et sensations insupportables d'écrasement dans les mollets dès qu'il s'allonge dans son lit. Il est obligé de se lever et de marcher dans son appartement pendant 2 heures pour voir ses sensations disparaître temporairement. Sa ferritine est mesurée à 18 μg/L. Quel est le premier geste thérapeutique indiqué ?",
    options: [
      "A) Supplémentation martiale orale ou intraveineuse en fer pour remonter la ferritinémie au-dessus de 75 μg/L.",
      "B) Prescription d'un neuroleptique incisif sédatif.",
      "C) Amputation des deux jambes.",
      "D) Antibiothérapie antituberculeuse de 9 mois.",
      "E) Infiltration intra-articulaire des deux genoux."
    ],
    correctAnswers: [0],
    explanation: "Syndrome des jambes sans repos avec carence martiale franche (ferritine < 50-75) : la restauration des stocks de fer cérébral par apport de fer est le traitement de première intention avant tout dopaminergique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-24-c06',
    courseId: 'crs-neuro-24',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 : Un patient hypertendu de 72 ans développe brutalement des mouvements de projection violents, anarchiques et incessants du membre supérieur et inférieur gauches, ressemblant à un lancer de disque, empêchant tout repos et épuisant le malade. Le scanner cérébral montre un petit infarctus ischémique profond du noyau sous-thalamique (corps de Luys) droit. De quel mouvement anormal s'agit-il ?",
    options: [
      "A) Hémiballisme gauche par lésion du corps de Luys droit.",
      "B) Crise convulsive tonico-clonique généralisée continue.",
      "C) Tremblement parkinsonien de repos bilatéral.",
      "D) Spasme hémi-facial gauche idiopathique.",
      "E) Crise de tétanie aiguë par hypomagnésémie."
    ],
    correctAnswers: [0],
    explanation: "Mouvements violents de projection proximale unilatérale secondaire à un infarctus du corps de Luys controlatéral = hémiballisme.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_24_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-24-mindmap',
    courseId: 'crs-neuro-24',
    title: 'Mind Map : Ataxies & Mouvements Anormaux',
    type: 'mindmap',
    content: `# Mind Map : Ataxies & Mouvements Involontaires

## 1. Ataxies (Diagnostic Différentiel)
- **Cérébelleuse** : Danse des tendons, marche ébrieuse, dysmétrie (doigt-nez), adiadococinésie (marionnettes). **Romberg NÉGATIF** (yeux fermés = pas d'aggravation).
- **Proprioceptive (Sensitive)** : Cordonale postérieure, démarche talonnante, perte du sens de position du gros orteil. **Romberg POSITIF franc** (chute immédiate yeux fermés).
- **Vestibulaire** : Vertige rotatoire, nystagmus, Romberg labyrinthisé (déviation lente latérale du côté de la lésion).

## 2. Tremblements
- **De Repos** : Parkinson (4 Hz, 'émiettement', unilatéral au début, disparaît à l'action).
- **D'Attitude / Action** : Tremblement essentiel (6-12 Hz, bilatéral, familial, chef + MS, sensible à l'alcool et au Propranolol).
- **Intentionnel** : Cérébelleux (absent au repos, augmente à l'approche de la cible).

## 3. Mouvements Anormaux Involontaires
- **Dystonie** : Contraction simultanée agoniste/antagoniste soutenue -> Posture en torsion. Geste antagoniste soulageant. Traitement : Toxine botulique.
- **Chorée** : Mouvements brefs, brusques, arythmiques, sans finalité, migrateurs. Causes : Huntington (CAG), Sydenham (post-streptococcique), vasculaire.
- **Hémiballisme** : Mouvement de jet violent proximal de grande amplitude -> Lésion du **corps de Luys** controlatéral.
- **Maladie de Wilson** : Cuivre élevé, céruléoplasmine basse, anneau de Kayser-Fleischer, signe du panda à l'IRM -> Chélateurs (D-pénicillamine) + Zinc.
- **Jambes Sans Repos** : Besoin de bouger le soir/nuit au lit soulagé par la marche -> Doser et recharger la **ferritine**.`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-24-astuces',
    courseId: 'crs-neuro-24',
    title: 'Astuces & Pièges aux Concours : Mouvements Anormaux',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Romberg : Cérébelleux vs Proprioceptif :**
   - Piège classique : Un signe de Romberg n'est **jamais positif** dans un syndrome cérébelleux pur (le patient titube déjà les yeux ouverts et ne tombe pas spécifiquement à la fermeture des yeux).
2. **Tremblement essentiel vs Parkinson :**
   - Essentiel : postural/action, bilatéral, tête fréquente, sensible à l'alcool.
   - Parkinson : repos, unilatéral, tête épargnée (menton possible), micrographie et akinésie associées.
3. **Corps de Luys :**
   - Tout infarctus du corps de Luys entraîne un **hémiballisme controlatéral**.
4. **Maladie de Wilson :**
   - Toujours y penser chez tout sujet jeune (< 40 ans) présentant des mouvements anormaux (tremblement en battement d'aile, dystonie) associés à un trouble psychiatrique ou une hépatopathie. Examen clé : **lampe à fente** pour l'anneau de Kayser-Fleischer.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 25: AVC ISCHÉMIQUE & HÉMORRAGIQUE + CÉPHALÉES
// ==========================================
export const NEURO_LESSON_25_QUESTIONS: Question[] = [
  {
    id: 'q-nro-25-01',
    courseId: 'crs-neuro-25',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans l'évaluation en urgence d'un AVC ischémique aigu, la fenêtre thérapeutique standard pour réaliser une thrombolyse intraveineuse par rt-PA (Altéplase) est de :",
    options: [
      "A) 4 heures et 30 minutes (4h30) à partir du début précis des symptômes.",
      "B) 24 heures sans exception.",
      "C) 30 minutes uniquement.",
      "D) 12 heures chez tout patient.",
      "E) 7 jours."
    ],
    correctAnswers: [0],
    explanation: "La thrombolyse IV par rt-PA (0,9 mg/kg) est validée jusqu'à 4h30 après le début des symptômes neurologiques en l'absence de contre-indication hémorragique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-02',
    courseId: 'crs-neuro-25',
    questionNumber: 2,
    type: 'QCM',
    content: "La thrombectomie mécanique endovasculaire par stent-retriever ou thrombo-aspiration est indiquée en urgence en cas :",
    options: [
      "A) D'occlusion proximale d'une grosse artère de la circulation antérieure (carotide interne intracrânienne ou tronc de l'artère cérébrale moyenne M1), réalisable jusqu'à 6 heures (et jusqu'à 24h selon critères de mismatch à l'imagerie de perfusion).",
      "B) D'infarctus lacunaire de moins de 3 mm sans occlusion artérielle visible.",
      "C) D'hémorragie sous-durale chronique.",
      "D) De céphalée de tension bilatérale.",
      "E) D'hématome cérébral lobaire hypertensif spontané."
    ],
    correctAnswers: [0],
    explanation: "La thrombectomie mécanique extrait le caillot occlusif des gros vaisseaux proximaux (M1, T carotidienne), réalisable de 0 à 6h (voire 24h avec critères d'imagerie avancée DAWN/DEFUSE-3).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-03',
    courseId: 'crs-neuro-25',
    questionNumber: 3,
    type: 'QCM',
    content: "L'occlusion de l'artère cérébrale moyenne (artère sylvienne) superficielle gauche entraîne typiquement :",
    options: [
      "A) Un déficit moteur et sensitif à prédominance brachio-faciale droit, une aphasie motrice (Broca) ou globale et une déviation conjuguée de la tête et des yeux vers la gauche ('le malade regarde sa lésion').",
      "B) Une paraparésie spasmodique des deux membres inférieurs.",
      "C) Un syndrome alterne de Wallenberg gauche.",
      "D) Une hémianopsie bitemporale pure.",
      "E) Une paralysie faciale périphérique droite de Bell."
    ],
    correctAnswers: [0],
    explanation: "AVC sylvien superficiel gauche : hémiparésie brachio-faciale droite, aphasie (hémisphère dominant gauche), hémi-anesthésie et déviation conjuguée du regard vers la gauche (lésion du centre oculo-céphalogyre frontal).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-04',
    courseId: 'crs-neuro-25',
    questionNumber: 4,
    type: 'QCM',
    content: "L'occlusion de l'artère cérébrale antérieure (ACA) se traduit sémiologiquement par :",
    options: [
      "A) Un déficit sensitivo-moteur prédominant nettement au membre inférieur controlatéral (crural), associé à des signes frontaux (réflexe de préhension 'grasping', mutisme akinétique si bilatéral).",
      "B) Une aphasie de Wernicke avec hémianopsie supérieure.",
      "C) Un déficit brachio-facial isolé épargnant le membre inférieur.",
      "D) Une surdité brusque bilatérale.",
      "E) Un syndrome cérébelleux unilatéral pur."
    ],
    correctAnswers: [0],
    explanation: "Le cortex moteur et sensitif du membre inférieur (face interne du lobe frontal/lobule paracentral) est vascularisé par l'artère cérébrale antérieure : son occlusion donne un déficit prédominant au membre inférieur (déficit crural) avec réflexes archaïques frontaux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-05',
    courseId: 'crs-neuro-25',
    questionNumber: 5,
    type: 'QCM',
    content: "Le syndrome de Wallenberg (infarctus de la fossette latérale du bulbe) est causé par l'occlusion de :",
    options: [
      "A) L'artère cérébelleuse postéro-inférieure (PICA) ou de l'artère vertébrale.",
      "B) L'artère cérébrale moyenne distale.",
      "C) L'artère communicante antérieure.",
      "D) L'artère choroïdienne antérieure.",
      "E) L'artère ophtalmique."
    ],
    correctAnswers: [0],
    explanation: "Wallenberg : nécrose de la région rétro-olivaire du bulbe par occlusion de la PICA ou de l'artère vertébrale, réalisant le plus célèbre des syndromes alternes du tronc cérébral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-06',
    courseId: 'crs-neuro-25',
    questionNumber: 6,
    type: 'QCM',
    content: "Le tableau sémiologique complet du syndrome de Wallenberg associe :",
    options: [
      "A) Du côté de la lésion : syndrome vestibulaire, syndrome cérébelleux, syndrome de Claude Bernard-Horner, anesthésie thermoalgique de la face (V) et paralysie des nerfs mixtes (IX, X : déglutition, voix rauque) ; Du côté opposé : anesthésie thermo-algique respectant la face.",
      "B) Une hémiplégie massive homolatérale avec paralysie faciale périphérique.",
      "C) Une tétraplégie flasque avec aphasie motrice.",
      "D) Une cécité bilatérale avec surdité de perception.",
      "E) Une paraplégie avec anesthésie en selle."
    ],
    correctAnswers: [0],
    explanation: "Wallenberg = syndrome alterne sensitif pur : signes homolatéraux (CBH, hémisyndrome cérébelleux, anesthésie faciale V, paralysie IX-X avec signe du rideau) et controlatéral (hémianesthésie thermoalgique suspendue du corps respectant la face). Épargne formelle de la motricité (faisceau pyramidal respecté car situé en avant dans la pyramide bulbaire).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-07',
    courseId: 'crs-neuro-25',
    questionNumber: 7,
    type: 'QCM',
    content: "Dans l'évaluation étiologique d'un AVC ischémique constitué, la première cause cardio-embolique à rechercher systématiquement par ECG et holter-ECG est :",
    options: [
      "A) La fibrillation auriculaire (FA) ou le flutter auriculaire.",
      "B) La péricardite aiguë virale.",
      "C) Le bloc de branche droit congénital.",
      "D) Le syndrome de Brugada asymptomatique.",
      "E) L'extrasystolie ventriculaire monomorphe isolée."
    ],
    correctAnswers: [0],
    explanation: "La fibrillation atriale est la première cause d'AVC cardio-embolique (thrombus formé dans l'auricule gauche) justifiant un traitement anticoagulant oral préventif au long cours.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-08',
    courseId: 'crs-neuro-25',
    questionNumber: 8,
    type: 'QCM',
    content: "L'artériite à cellules géantes de Horton est une vascularite des gros troncs artériels à suspecter en urgence chez un sujet de plus de 50-60 ans devant :",
    options: [
      "A) Des céphalées temporales unilatérales inhabituelles, une hyperesthésie du cuir chevelu (au brossage), une claudication intermittente de la mâchoire lors de la mastication, une induration de l'artère temporale et une VS/CRP très élevées.",
      "B) Une fièvre ondulante avec splénomégalie indolore.",
      "C) Des douleurs sciatiques bilatérales d'effort.",
      "D) Une diarrhée glairo-sanglante avec amaigrissement.",
      "E) Une urticaire chronique récurrente."
    ],
    correctAnswers: [0],
    explanation: "La maladie de Horton : céphalées temporales, claudication de la mâchoire, cuir chevelu douloureux, syndrome inflammatoire majeur (VS > 50-100, CRP élevée). Risque d'occlusion de l'artère centrale de la rétine (cécité irréversible).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-09',
    courseId: 'crs-neuro-25',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle mesure thérapeutique doit être débutée en urgence absolue sans attendre le résultat de la biopsie d'artère temporale dès la suspicion clinique de maladie de Horton avec menace visuelle ?",
    options: [
      "A) Une corticothérapie par voie générale à forte dose (prednisone 0,7 à 1 mg/kg/j per os ou bolus de Solumédrol si signes visuels).",
      "B) Une antibiothérapie par céphalosporine de 3ème génération.",
      "C) Une héparine à dose curative continue.",
      "D) Un traitement vasodilatateur par voie locale.",
      "E) Une radiothérapie de l'orbite."
    ],
    correctAnswers: [0],
    explanation: "Le risque de cécité irréversible par NOIA (neuropathie optique ischémique antérieure aiguë) impose de débuter les corticoïdes immédiatement dès la suspicion clinique, sans attendre la biopsie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-10',
    courseId: 'crs-neuro-25',
    questionNumber: 10,
    type: 'QCM',
    content: "La névralgie essentielle du trijumeau (maladie de Trousseau) se caractérise sémiologiquement par :",
    options: [
      "A) Des douleurs paroxystiques atroces, à type d'éclairs ou décharges électriques de quelques secondes, unilatérales, strictement limitées au territoire du V2 ou V3, déclenchées par l'effleurement d'une 'zone gâchette' (trigger zone), sans aucun déficit sensitif objectif à l'examen.",
      "B) Une douleur continue sourde à type d'étau bilatérale.",
      "C) Une anesthésie complète de la joue et de la cornée.",
      "D) Une diplopie permanente avec ptosis.",
      "E) Une surdité de perception homolatérale."
    ],
    correctAnswers: [0],
    explanation: "Névralgie essentielle du V : décharges fulgurantes en salves (tic douloureux de Trousseau), zone gâchette (rasage, effleurement, parole), période réfractaire, et EXAMEN NEUROLOGIQUE STRICTEMENT NORMAL.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-11',
    courseId: 'crs-neuro-25',
    questionNumber: 11,
    type: 'QCM',
    content: "Le traitement médical de première intention et de référence de la névralgie essentielle du trijumeau est :",
    options: [
      "A) La Carbamazépine (Tégrétol®) à posologie progressive (400 à 1200 mg/jour).",
      "B) Le paracétamol à 4 g par jour.",
      "C) La morphine intraveineuse continue.",
      "D) La corticothérapie par voie générale.",
      "E) L'acide acétylsalicylique à 1 g/jour."
    ],
    correctAnswers: [0],
    explanation: "La carbamazépine (Tégrétol) bloque les canaux sodiques voltage-dépendants et supprime spectaculairement les décharges dans plus de 80% des névralgies trigéminales.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-12',
    courseId: 'crs-neuro-25',
    questionNumber: 12,
    type: 'QCM',
    content: "L'algie vasculaire de la face (cluster headache) se distingue de la migraine par :",
    options: [
      "A) Une douleur strictement unilatérale péri-orbitaire atroce ('broyage d'œil'), durant 15 à 180 minutes, survenant par crises pluriquotidiennes à heure fixe, accompagnée de signes dysautonomiques homolatéraux (larmoiement, injection conjonctivale, rhinorrhée, syndrome de Claude Bernard-Horner) et d'une agitation motrice.",
      "B) Une douleur bilatérale diffuse calmée par le repos dans le noir.",
      "C) Une survenue préférentielle chez la femme sous œstroprogestatifs.",
      "D) Une régression complète après prise de paracétamol.",
      "E) Une durée d'au moins 72 heures sans interruption."
    ],
    correctAnswers: [0],
    explanation: "L'algie vasculaire de la face (prédominance masculine) : douleur intolérable orbitaire, signes végétatifs unilatéraux (larmoiement, œil rouge, myosis-ptosis) et agitation motrice (le patient arpente sa pièce, contrairement au migraineux qui s'alite dans le calme).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-13',
    courseId: 'crs-neuro-25',
    questionNumber: 13,
    type: 'QCM',
    content: "Le traitement de crise spécifique d'urgence de l'algie vasculaire de la face repose sur :",
    options: [
      "A) L'oxygénothérapie pure à haut débit (12 à 15 L/min au masque à haute concentration pendant 15-20 min) OU le sumatriptan injectable sous-cutané (6 mg).",
      "B) La prise d'anti-inflammatoires non stéroïdiens par voie orale.",
      "C) L'administration de morphine intraveineuse.",
      "D) Le paracétamol codéiné per os.",
      "E) Une ponction lombaire d'urgence."
    ],
    correctAnswers: [0],
    explanation: "Les deux seuls traitements efficaces de la crise d'algie vasculaire : Oxygène 100% à 12-15 L/min au masque sans réinhalation et Sumatriptan 6 mg SC (les antalgiques oraux sont trop lents et inefficaces).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-14',
    courseId: 'crs-neuro-25',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans l'Accident Ischémique Transitoire (AIT), la définition moderne basée sur les tissus (tissue-based) exige :",
    options: [
      "A) Un épisode bref de dysfonction neurologique d'origine ischémique focale, durant typiquement moins d'une heure, avec retour complet à l'état antérieur et ABSENCE D'INFARCTUS AIGU à l'imagerie IRM cérébrale (séquence de diffusion négative).",
      "B) Un déficit persistant plus de 48 heures sans récupération.",
      "C) La présence d'une séquelle motrice définitive.",
      "D) Une image d'hémorragie méningée sous-arachnoïdienne.",
      "E) Une altération permanente du champ visuel."
    ],
    correctAnswers: [0],
    explanation: "Définition tissulaire moderne de l'AIT : régression clinique complète ET absence de nécrose tissulaire à l'IRM de diffusion (si hypersignal diffusion présent, il s'agit d'un infarctus cérébral avec symptômes régressifs).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-15',
    courseId: 'crs-neuro-25',
    questionNumber: 15,
    type: 'QCM',
    content: "Le score pronostique ABCD2 permet d'évaluer après un AIT :",
    options: [
      "A) Le risque précoce de récidive sous forme d'AVC ischémique constitué dans les 2, 7 et 90 jours suivants.",
      "B) Le risque d'hémorragie digestive sous aspirine.",
      "C) La probabilité d'une fracture ostéoporotique de hanche.",
      "D) Le risque de surdité de transmission.",
      "E) L'espérance de vie à 20 ans."
    ],
    correctAnswers: [0],
    explanation: "Le score ABCD2 (Âge >= 60, BP [pression artérielle >= 140/90], Clinical features [déficit unilatéral ou trouble de parole], Duration, Diabetes) stratifie le risque d'AVC à court terme.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-16',
    courseId: 'crs-neuro-25',
    questionNumber: 16,
    type: 'QCM',
    content: "La prise en charge antithrombotique précoce d'un AVC ischémique non cardio-embolique mineur (NIHSS <= 3) ou d'un AIT à haut risque (ABCD2 >= 4) repose sur :",
    options: [
      "A) Une double antiagrégation plaquettaire (Aspirine + Clopidogrel) débutée dans les 24 premières heures et poursuivie pendant 21 jours, relayée par une mono-antiagrégation.",
      "B) L'anticoagulation curative immédiate par héparine non fractionnée IV.",
      "C) L'abstention de tout antiagrégant pendant 1 mois.",
      "D) L'anticoagulation par warfarine seule.",
      "E) Les corticoïdes à forte dose."
    ],
    correctAnswers: [0],
    explanation: "Essais CHANCE et POINT : la bithérapie antiplaquettaire courte (Aspirine + Clopidogrel pendant 21 jours) réduit significativement le risque de récidive précoce d'AVC ischémique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-25-17',
    courseId: 'crs-neuro-25',
    questionNumber: 17,
    type: 'QCM',
    content: "L'indication d'une endartériectomie carotidienne chirurgicale (ou angioplastie avec stent) en prévention secondaire après un AVC ischémique récent dans le territoire carotidien est formelle si :",
    options: [
      "A) La sténose de la carotide interne homolatérale est serrée, comprise entre 70% et 99% (critères NASCET), réalisée idéalement dans les 14 premiers jours après l'événement.",
      "B) La sténose est inférieure à 30%.",
      "C) L'artère carotide est complètement occluse à 100% depuis 5 ans.",
      "D) Le patient est dans un coma dépassé.",
      "E) L'accident vasculaire était hémorragique étendu."
    ],
    correctAnswers: [0],
    explanation: "Sténose carotidienne symptomatique serrée (70-99%) : bénéfice chirurgical maximal si opérée rapidement (dans les 14 jours) après l'AIT ou l'AVC mineur.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-18',
    courseId: 'crs-neuro-25',
    questionNumber: 18,
    type: 'QCM',
    content: "La dissection d'une artère carotide interne extracrânienne chez un sujet jeune après un traumatisme cervical ou effort se traduit classiquement par la triade :",
    options: [
      "A) Cervicalgie/céphalée unilatérale inaugurale + Syndrome de Claude Bernard-Horner homolatéral douloureux + Ischémie cérébrale ou oculaire (amaurose fugace) homolatérale différée.",
      "B) Tétraplégie flasque avec surdité bilatérale.",
      "C) Exophtalmie bilatérale pulsatile fébrile.",
      "D) Céphalée en casque avec vomissements en jet.",
      "E) Hémianopsie bitemporale sans douleur."
    ],
    correctAnswers: [0],
    explanation: "La dissection carotidienne : hématome de paroi comprimant le plexus sympathique péricarotidien (CBH douloureux homolatéral : ptosis + myosis sans anhidrose de la face) + céphalée péri-orbitaire/cervicale + ischémie sylvienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-19',
    courseId: 'crs-neuro-25',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans un hématome intracérébral spontané hypertensif, quelle est la localisation anatomique profonde la plus fréquente ?",
    options: [
      "A) Les noyaux gris centraux (putamen et capsule interne par rupture des artères lenticulo-striées).",
      "B) La moelle cervicale postérieure.",
      "C) Le chiasma optique.",
      "D) Le bulbe olfactif.",
      "E) La dure-mère pariétale."
    ],
    correctAnswers: [0],
    explanation: "L'artériolopathie hypertensive entraîne la rupture des micro-anévrismes de Charcot et Bouchard sur les artères perforantes profondes, frappant principalement le putamen et la capsule interne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-20',
    courseId: 'crs-neuro-25',
    questionNumber: 20,
    type: 'QCM',
    content: "L'angiopathie amyloïde cérébrale (AAC) est la première cause d'hématome intracérébral spontané non hypertensif chez le sujet âgé de plus de 70 ans. Les hématomes siègent typiquement :",
    options: [
      "A) Au niveau lobaire sous-cortical (cortex et substance blanche sous-corticale), souvent multiples ou récidivants, associés à des micro-saignements (microbleeds) cortico-sous-corticaux visibles en IRM T2* / SWI.",
      "B) Au niveau du tronc cérébral inférieur exclusif.",
      "C) Au niveau du corps calleux antérieur pur.",
      "D) Dans le tronc basilaire.",
      "E) Dans la vésicule biliaire."
    ],
    correctAnswers: [0],
    explanation: "L'AAC (dépôt de peptide bêta-amyloïde dans la paroi des petites artères corticales et leptoméningées) produit des hématomes lobaires superficiels récurrents chez le sujet âgé.",
    difficulty: 'facile'
  },

  // 6 CLINICAL CASES
  {
    id: 'q-nro-25-c01',
    courseId: 'crs-neuro-25',
    questionNumber: 21,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un homme de 68 ans, hypertendu et fumeur, est amené aux urgences à 10h15 pour hémiplégie droite brutale avec impossibilité de parler survenue subitement à 9h00 du matin (délai : 1h15). À l'examen, le score NIHSS est à 16. La pression artérielle est à 170/95 mmHg. L'IRM cérébrale montre un franc hypersignal en diffusion de l'ensemble du territoire sylvien superficiel et profond gauche sans aucun rehaussement en FLAIR (mismatch diffusion-FLAIR franc). L'angio-ARM montre une occlusion du tronc de l'artère cérébrale moyenne gauche (segment M1). Il n'y a pas d'hémorragie. Quelle décision thérapeutique d'urgence s'impose ?",
    options: [
      "A) Thrombolyse intraveineuse par rt-PA (Altéplase 0,9 mg/kg) débutée immédiatement, combinée à une thrombectomie mécanique endovasculaire par voie artérielle en salle de neuroradiologie interventionnelle.",
      "B) Prescription d'aspirine 300 mg per os et renvoi en salle d'attente.",
      "C) Anticoagulation par héparine IV à forte dose seule sans thrombolyse.",
      "D) Craniectomie décompressive bilatérale immédiate.",
      "E) Ponction lombaire déplétive."
    ],
    correctAnswers: [0],
    explanation: "Délai < 4h30, mismatch Diffusion-FLAIR (infarctus hyperaigu sans nécrose définitive au FLAIR) et occlusion proximale de M1 : indication formelle de thrombolyse IV immédiate associée à la thrombectomie mécanique (stratégie combinée de revascularisation d'urgence).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-c02',
    courseId: 'crs-neuro-25',
    questionNumber: 22,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel seuil de pression artérielle maximale ne doit absolument pas être dépassé avant et pendant l'administration de la thrombolyse intraveineuse pour limiter le risque de transformation hémorragique cérébrale ?",
    options: [
      "A) PAS < 185 mmHg et PAD < 110 mmHg.",
      "B) PAS < 120 mmHg.",
      "C) PAS < 250 mmHg.",
      "D) La pression artérielle ne doit jamais être mesurée.",
      "E) PAD < 50 mmHg obligatoirement."
    ],
    correctAnswers: [0],
    explanation: "Avant thrombolyse : la PA doit être impérativement inférieure à 185/110 mmHg (traitée par Nicardipine IV titrable si besoin) et maintenue sous 180/105 mmHg pendant et après la thrombolyse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-c03',
    courseId: 'crs-neuro-25',
    questionNumber: 23,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Une femme de 72 ans consulte pour des céphalées récentes de la tempe droite, d'intensité croissante depuis 3 semaines, avec sensation de cuir chevelu douloureux lorsqu'elle se peigne et fatigue de la mâchoire lors des repas l'obligeant à s'arrêter de mastiquer. Elle a présenté hier un épisode d'amaurose fugace de l'œil droit d'une durée de 5 minutes. À l'examen, l'artère temporale droite est épaissie, indurée, douloureuse et peu pulsatile. La CRP est mesurée à 85 mg/L (N < 5) et la VS à 90 mm à la première heure. Quelle est la première mesure médicale à prendre en urgence ?",
    options: [
      "A) Débuter immédiatement une corticothérapie à forte dose par voie générale (prednisone 1 mg/kg/jour) sans attendre la réalisation de la biopsie d'artère temporale.",
      "B) Réaliser un scanner cérébral et attendre 15 jours avant tout traitement.",
      "C) Prescrire du paracétamol simple et des gouttes auriculaires.",
      "D) Programmer une biopsie dans un mois sans corticoïdes.",
      "E) Proposer une infiltration de toxine botulique temporale."
    ],
    correctAnswers: [0],
    explanation: "Maladie de Horton avec signes visuels prémonitoires (amaurose fugace) : urgence ophtalmologique absolue. La corticothérapie forte dose doit être débutée immédiatement pour éviter la cécité définitive par infarctus du nerf optique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-c04',
    courseId: 'crs-neuro-25',
    questionNumber: 24,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un jeune homme de 30 ans ressent brutalement après une manipulation cervicale vigoureuse chez un ostéopathe une vive douleur du cou gauche et de la région rétro-orbitaire gauche. Quelques heures plus tard, son entourage remarque que sa paupière supérieure gauche est tombante (ptosis) et que sa pupille gauche est plus petite que la droite (myosis). Il n'a aucun déficit moteur. Quel diagnostic devez-vous poser en urgence et quel examen d'imagerie vasculaire le confirmera ?",
    options: [
      "A) Dissection de l'artère carotide interne gauche extracrânienne ; confirmation par angio-scanner ou angio-IRM des troncs supra-aortiques montrant l'hématome de paroi en croissant.",
      "B) Glaucome aigu par fermeture de l'angle gauche.",
      "C) Rupture d'un anévrisme de la communicante antérieure.",
      "D) Érysipèle de la face gauche.",
      "E) Névralgie d'Arnold bilatérale."
    ],
    correctAnswers: [0],
    explanation: "Cervicalgie/céphalée unilatérale aiguë post-traumatique + Syndrome de Claude Bernard-Horner homolatéral (ptosis + myosis) = Dissection carotidienne interne gauche. Confirmation par angio-IRM/TDM (hématome de paroi).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-c05',
    courseId: 'crs-neuro-25',
    questionNumber: 25,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un homme de 35 ans est réveillé chaque nuit vers 2 heures du matin par une douleur atroce, intolérable, centrée sur l'œil droit, durant 45 minutes, accompagnée d'un œil droit rouge et larmoyant, d'une narine droite bouchée qui coule et d'une agitation motrice extrême (il ne peut rester au lit et fait les cent pas dans sa chambre). Les crises se répètent depuis 3 semaines, 1 à 2 fois par jour. Quel traitement spécifique abortif d'action immédiate doit être prescrit pour stopper chaque crise ?",
    options: [
      "A) Oxygénothérapie normobare à haut débit (12 à 15 L/min au masque sans réinhalation pendant 15 minutes) et/ou Sumatriptan 6 mg par voie sous-cutanée.",
      "B) Paracétamol 1 g per os.",
      "C) Ibuprofène 400 mg.",
      "D) Morphine orale à libération prolongée.",
      "E) Carbamazépine à 200 mg/j."
    ],
    correctAnswers: [0],
    explanation: "Algie vasculaire de la face typique (crises nocturnes, signes végétatifs unilatéraux, agitation) : l'oxygène à haut débit (12-15 L/min) et le sumatriptan sous-cutané sont les deux seuls traitements d'urgence efficaces.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-25-c06',
    courseId: 'crs-neuro-25',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 : Une femme de 56 ans sans antécédent ressent lors du brossage de dents une décharge électrique foudroyante dans la joue droite et l'aile du nez, durant 2 secondes, d'une intensité insupportable. Les décharges se reproduisent à chaque fois qu'elle touche une zone précise au-dessus de sa lèvre supérieure droite ou qu'elle parle. L'examen neurologique des nerfs crâniens et de la sensibilité faciale au tact et à la piqûre est rigoureusement normal. Quel traitement médicamenteux suspensif de première ligne devez-vous débuter ?",
    options: [
      "A) Carbamazépine (Tégrétol®) par voie orale à doses progressives.",
      "B) Aspirine à 1 g/jour.",
      "C) Corticothérapie générale à forte dose.",
      "D) Infiltration locale d'antibiotiques.",
      "E) Antidépresseurs IMAO."
    ],
    correctAnswers: [0],
    explanation: "Névralgie essentielle du V2 droit (décharges brèves, trigger zone, examen neurologique normal) : la carbamazépine est le traitement de première ligne spécifique.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_25_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-25-mindmap',
    courseId: 'crs-neuro-25',
    title: 'Mind Map : AVC Aigus & Algies Cranio-Faciales',
    type: 'mindmap',
    content: `# Mind Map : AVC & Céphalées Aiguës

## 1. AVC Ischémique Aigu
- **Urgence Thérapeutique** : "Time is Brain".
- **Imagerie de référence** : IRM avec Diffusion (positif en quelques minutes, hypersignal précoce) + FLAIR + T2* + Angio-ARM.
- **Thrombolyse IV (rt-PA)** : Jusqu'à 4h30 (PAS < 185, PAD < 110).
- **Thrombectomie mécanique** : Occlusion proximale de gros tronc (M1, carotide T) jusqu'à 6h (voire 24h avec imagerie avancée).
- **Syndromes Topographiques** :
  - *Sylvien superficiel* : Hémiparésie brachio-faciale + Aphasie (si gauche).
  - *ACA* : Hémiparésie crurale (jambe) + Signes frontaux.
  - *Wallenberg (PICA)* : CBH + Cérébelleux + Nerfs mixtes (IX-X) homolatéraux + Hémianesthésie thermoalgique controlatérale du corps.

## 2. Céphalées d'Urgence
- **Horton** : Sujet > 50 ans, céphalée temporale, claudication de la mâchoire, VS/CRP très élevées -> Corticoïdes en extrême urgence (risque de cécité par NOIA).
- **Algie Vasculaire de la Face** : Homme, douleur orbitaire atroce, unilatérale, signes végétatifs (larmoiement, œil rouge, CBH), agitation motrice -> Oxygène 100% 12-15 L/min + Sumatriptan SC.
- **Névralgie du Trijumeau (V)** : Décharges électriques en éclairs, trigger zone, examen normal -> Carbamazépine.
- **Dissection Carotidienne** : Sujet jeune, traumatisme cervical, cervicalgie + CBH homolatéral douloureux + Ischémie différée.`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-25-astuces',
    courseId: 'crs-neuro-25',
    title: 'Astuces & Pièges aux Concours : AVC & Céphalées',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Thrombolyse et Pression Artérielle :**
   - Contre-indication formelle si la PAS reste > 185 mmHg ou la PAD > 110 mmHg malgré un traitement antihypertenseur titrable immédiat (Nicardipine).
2. **Maladie de Horton = CORTICOÏDES D'ABORD :**
   - Ne jamais attendre la biopsie d'artère temporale (BAT) pour traiter ! La corticothérapie doit être débutée en urgence dès la suspicion clinique pour sauver la vue. La BAT reste positive même après 7 à 14 jours de corticoïdes.
3. **Syndrome de Wallenberg = Épargne motrice :**
   - Le syndrome de Wallenberg n'a **AUCUN déficit moteur** (la voie pyramidale descend en avant dans le bulbe et n'est pas touchée par l'infarctus rétro-olivaire).
4. **Algie vasculaire de la face vs Migraine :**
   - Le patient atteint d'AVF est **extrêmement agité** (fait les cent pas, tape du pied), alors que le migraineux recherche l'obscurité, le calme et l'immobilité au lit.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 26: SYNDROMES DE MOTRICITÉ
// ==========================================
export const NEURO_LESSON_26_QUESTIONS: Question[] = [
  {
    id: 'q-nro-26-01',
    courseId: 'crs-neuro-26',
    questionNumber: 1,
    type: 'QCM',
    content: "Le faisceau cortico-spinal (voie pyramidale) croise la ligne médiane (décussation motrice) au niveau de :",
    options: [
      "A) La partie inférieure du bulbe rachidien (décussation des pyramides bulbaires, environ 80-90% des fibres).",
      "B) Le mésencéphale dorsal.",
      "C) Le chiasma optique.",
      "D) La capsule interne.",
      "E) Le cône terminal médullaire."
    ],
    correctAnswers: [0],
    explanation: "La décussation pyramidale s'effectue à la jonction bulbo-médullaire : 80-90% des fibres croisent pour former le faisceau cortico-spinal latéral croisé controlatéral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-02',
    courseId: 'crs-neuro-26',
    questionNumber: 2,
    type: 'QCM',
    content: "Une lésion de la voie pyramidale située au-dessus de la décussation bulbaire (ex: cortex moteur frontal, capsule interne) entraîne un déficit moteur :",
    options: [
      "A) Controlatéral à la lésion.",
      "B) Homolatéral à la lésion.",
      "C) Purement bilatéral et symétrique.",
      "D) Limité aux muscles lisses viscéraux.",
      "E) Exclusivement sensitif sans déficit moteur."
    ],
    correctAnswers: [0],
    explanation: "En amont de la décussation pyramidale bulbaire, toute lésion hémisphérique ou du tronc supérieur donne une hémiplégie controlatérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-03',
    courseId: 'crs-neuro-26',
    questionNumber: 3,
    type: 'QCM',
    content: "Une lésion du cordon latéral de la moelle épinière dorsale (en dessous de la décussation bulbaire) entraîne un déficit moteur pyramidal :",
    options: [
      "A) Homolatéral à la lésion, sous le niveau lésionnel.",
      "B) Controlatéral à la lésion.",
      "C) Limité aux membres supérieurs.",
      "D) Purement de la face.",
      "E) Sans anomalie des réflexes."
    ],
    correctAnswers: [0],
    explanation: "Dans la moelle, les fibres pyramidales ayant déjà décussé cheminent dans le cordon latéral homolatéral : la parésie est homolatérale sous la lésion.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-04',
    courseId: 'crs-neuro-26',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans la phase aiguë initiale d'une hémiplégie cérébrale brutale (ex: AVC ischémique massif ou choc spinal aigu), la paralysie est sémiologiquement :",
    options: [
      "A) Flasque avec hypotonie et aréflexie ostéotendineuse, avant l'apparition secondaire après quelques semaines de la spasticité et de l'hyperréflexie (phase spastique).",
      "B) Spastique d'emblée dès la première seconde avec clonus inépuisable.",
      "C) Accompagnée d'une amyotrophie majeure immédiate en 2 heures.",
      "D) Caractérisée par une rigidité en tuyau de plomb.",
      "E) Totalement insensible au signe de Babinski."
    ],
    correctAnswers: [0],
    explanation: "Phase de sidération (choc cérébral ou choc spinal) : déficit initialement flasque avec hypotonie et ROT abolis, mais avec signe de Babinski déjà présent, puis spasticité pyramidale secondaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-05',
    courseId: 'crs-neuro-26',
    questionNumber: 5,
    type: 'QCM',
    content: "La démarche en fauchant (marche hémiplégique spastique) est caractérisée par :",
    options: [
      "A) Une raideur du membre inférieur en extension avec pied varus équin, obligeant le patient à décrire un demi-cercle latéral externe à chaque pas pour éviter que la pointe du pied n'accroche le sol.",
      "B) Une démarche ébrieuse les jambes écartées avec oscillations multidirectionnelles.",
      "C) Un steppage par chute de la pointe du pied sans raideur.",
      "D) De petits pas traînants avec festination et perte du ballant des bras.",
      "E) Une marche dandinante en canard par faiblesse des fessiers."
    ],
    correctAnswers: [0],
    explanation: "L'hypertonie spastique pyramidale prédomine sur les extenseurs du membre inférieur : le membre trop long et raide décrit un arc de cercle à concavité interne (démarche en fauchant).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-06',
    courseId: 'crs-neuro-26',
    questionNumber: 6,
    type: 'QCM',
    content: "Le syndrome extrapyramidal parkinsonien associe la triade clinique fondamentale de :",
    options: [
      "A) L'akinésie (lenteur d'initiation et d'exécution des mouvements), l'hypertonie plastique (rigidité en tuyau de plomb avec roue dentée) et le tremblement de repos (4-6 Hz, émiettement de pain).",
      "B) L'ataxie, l'aréflexie et l'hypotonie.",
      "C) La spasticité élastique, le signe de Babinski et le clonus.",
      "D) La chorée, les tics vocaux et la démence.",
      "E) L'amyotrophie, les fasciculations et les crampes."
    ],
    correctAnswers: [0],
    explanation: "Triade parkinsonienne classique : Akinésie/bradykinésie + Rigidité plastique en tuyau de plomb (signe de la roue dentée de Negro) + Tremblement de repos asymétrique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-07',
    courseId: 'crs-neuro-26',
    questionNumber: 7,
    type: 'QCM',
    content: "Le signe de Froment (manœuvre de Froment) au poignet permet de sensibiliser la recherche de :",
    options: [
      "A) La rigidité plastique parkinsonienne, en mobilisant passivement le poignet du patient pendant qu'on lui demande d'effectuer un mouvement actif continu avec le membre supérieur opposé (ex: moulinet ou faire des ronds en l'air).",
      "B) Le déficit du muscle adducteur du pouce dans l'atteinte du nerf ulnaire.",
      "C) Le clonus de la rotule.",
      "D) La spasticité de la cheville.",
      "E) L'anesthésie de la face."
    ],
    correctAnswers: [0],
    explanation: "La manœuvre de Froment parkinsonienne réveille la rigidité plastique (résistance en tuyau de plomb ou ressauts de roue dentée) par la mobilisation active du membre controlatéral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-08',
    courseId: 'crs-neuro-26',
    questionNumber: 8,
    type: 'QCM',
    content: "La micrographie (écriture devenant progressivement minuscule et tassée au fil de la ligne) est un signe clinique très évocateur de :",
    options: [
      "A) L'akinésie et dysgraphie de la maladie de Parkinson.",
      "B) L'ataxie cérébelleuse cinétique.",
      "C) Le syndrome pyramidal spastique.",
      "D) La chorée de Huntington.",
      "E) La myasthénie grave."
    ],
    correctAnswers: [0],
    explanation: "La micrographie d'épuisement est une traduction classique de la bradykinésie/akinésie parkinsonienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-09',
    courseId: 'crs-neuro-26',
    questionNumber: 9,
    type: 'QCM',
    content: "L'athétose se définit sémiologiquement par des mouvements involontaires :",
    options: [
      "A) Lents, reptatoires, ondulants, distaux, prédominant aux doigts et aux orteils qui exécutent des mouvements de contorsion continue en 'tentacules de pieuvre'.",
      "B) Brusques et explosifs de l'ensemble d'un membre.",
      "C) Rythmiques et rapides à 10 Hz.",
      "D) Fixes en flexion du coude.",
      "E) Limités aux muscles de la déglutition."
    ],
    correctAnswers: [0],
    explanation: "L'athétose est un mouvement involontaire lent, continu, sinueux, ondulant, disto-digital, souvent séquelle d'une encéphalopathie néonatale ou atteinte striatale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-10',
    courseId: 'crs-neuro-26',
    questionNumber: 10,
    type: 'QCM',
    content: "Les myoclonies se caractérisent sémiologiquement par :",
    options: [
      "A) Des contractions musculaires brèves, involontaires, soudaines, uniques ou répétées, en 'éclair', générant ou non un déplacement articulaire, d'origine corticale, sous-corticale ou spinale.",
      "B) Une raideur continue en lame de canif.",
      "C) Une immobilité complète sans aucune secousse.",
      "D) Une perte progressive de la force musculaire sur plusieurs années.",
      "E) Une anesthésie thermo-algique suspendue."
    ],
    correctAnswers: [0],
    explanation: "Les myoclonies sont des secousses musculaires très brèves (< 100 ms) en éclair produites par une décharge neuronale motrice (myoclonie positive) ou une interruption du tonus (myoclonie négative/astérixis).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-11',
    courseId: 'crs-neuro-26',
    questionNumber: 11,
    type: 'QCM',
    content: "Le syndrome de Brown-Séquard (hémi-section médullaire unilatérale) associe sémiologiquement sous le niveau de la lésion :",
    options: [
      "A) Du côté de la lésion : syndrome pyramidal et perte de la sensibilité proprioceptive et vibratoire ; Du côté opposé à la lésion : perte de la sensibilité thermo-algique (faisceau spino-thalamique croisé).",
      "B) Une tétraplégie flasque complète bilatérale.",
      "C) Une perte totale de toutes les sensibilités du même côté sans atteinte controlatérale.",
      "D) Un syndrome cérébelleux bilatéral sans déficit moteur.",
      "E) Une cécité monoculaire homolatérale."
    ],
    correctAnswers: [0],
    explanation: "Brown-Séquard : la voie pyramidale et les cordons postérieurs sont atteints du côté lésé (homolatéraux) ; la voie spino-thalamique thermo-algique ayant croisé est atteinte du côté controlatéral sous la lésion.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-12',
    courseId: 'crs-neuro-26',
    questionNumber: 12,
    type: 'QCM',
    content: "Le syndrome syringomyélique (cavité kystique centro-médullaire) se manifeste de manière caractéristique par :",
    options: [
      "A) Une dissociation syringomyélique des sensibilités suspendue au niveau métamérique de la lésion : abolition de la sensibilité thermo-algique avec conservation de la sensibilité tactile épicritique et proprioceptive.",
      "B) Une perte de la sensibilité proprioceptive avec respect du chaud et du froid.",
      "C) Une surdité centrale sans anomalie médullaire.",
      "D) Une anesthésie globale de tout le corps de la tête aux pieds.",
      "E) Une paralysie oculomotrice du III."
    ],
    correctAnswers: [0],
    explanation: "La cavité centro-médullaire interrompt la commissure grise antérieure où croisent les fibres spino-thalamiques de la douleur et de la température, créant une anesthésie thermo-algique suspendue (ex: en cape aux membres supérieurs) sans toucher les cordons postérieurs tactiles.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-13',
    courseId: 'crs-neuro-26',
    questionNumber: 13,
    type: 'QCM',
    content: "Le syndrome de Claude Bernard-Horner (CBH) associe du côté atteint la triade :",
    options: [
      "A) Ptosis (chute de paupière par paralysie du muscle tarsal de Müller), Myosis (diminution du calibre pupillaire) et Énophtalmie (parfois anhidrose faciale), traduisant une interruption de la voie sympathique oculaire.",
      "B) Mydriase, exophtalmie et œdème palpébral.",
      "C) Cécité, surdité et anosmie.",
      "D) Trismus, nystagmus et paralysie du VI.",
      "E) Strabisme divergent avec diplopie verticale."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de CBH résulte d'une lésion du sympathique cervical (mésencéphale, centre ciliospinal de Budge C8-T1, chaîne paravertébrale, plexus carotide) : ptosis modéré, myosis et pseudo-énophtalmie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-14',
    courseId: 'crs-neuro-26',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans le syndrome du cône terminal de la moelle épinière, on retrouve l'association de :",
    options: [
      "A) Troubles sphinctériens sévères et précoces (rétention urinaire, incontinence fécale), anesthésie en selle périnéale, impuissance et abolition du réflexe anal, avec signes pyramidaux modérés aux membres inférieurs.",
      "B) Tétraplégie flasque haute.",
      "C) Nystagmus pendulaire congénital.",
      "D) Aphasie motrice de Broca.",
      "E) Hémianopsie homonyme latérale."
    ],
    correctAnswers: [0],
    explanation: "Lésion du cône terminal (en L1-L2) : atteinte des segments sacrés S2-S5 (anesthésie en selle, béance anale, rétention urinaire) associée à une composante pyramidale modérée (Babinski bilatéral possible).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-15',
    courseId: 'crs-neuro-26',
    questionNumber: 15,
    type: 'QCM',
    content: "L'épreuve des marionnettes explore l'adiadococinésie, signe sémiologique d'une atteinte :",
    options: [
      "A) Cérébelleuse cinétique hémisphérique.",
      "B) Musculaire primitive myopathique.",
      "C) De la jonction neuromusculaire.",
      "D) De la moelle sacrée terminale.",
      "E) Du nerf fémoral."
    ],
    correctAnswers: [0],
    explanation: "L'adiadococinésie (incapacité à réaliser des mouvements alternatifs de prono-supination rapide) signe une atteinte du néocervelet (hémisphère cérébelleux).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-16',
    courseId: 'crs-neuro-26',
    questionNumber: 16,
    type: 'QCM',
    content: "Le signe de Lhermitte est retrouvé dans :",
    options: [
      "A) La sclérose en plaques, la myélopathie cervicarthrosique et la carence en vitamine B12 (atteinte des cordons postérieurs cervicaux).",
      "B) L'appendicite aiguë.",
      "C) Le glaucome chronique à angle ouvert.",
      "D) La fracture de la malléole externe.",
      "E) L'hépatite virale B."
    ],
    correctAnswers: [0],
    explanation: "Le signe de Lhermitte (décharge le long du dos à la flexion du cou) traduit une démyélinisation ou compression des colonnes postérieures de la moelle cervicale (SEP, myélopathie cervicarthrosique, sclérose combinée de la moelle par déficit en B12).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-17',
    courseId: 'crs-neuro-26',
    questionNumber: 17,
    type: 'QCM',
    content: "La dyssynergie vésico-sphinctérienne striée chez un paraplégique spastique résulte de :",
    options: [
      "A) Une perte du contrôle encéphalique supraspinal sur le centre mictionnel sacré, conduisant à une contraction simultanée paradoxale du sphincter strié lors de la contraction du détrusor.",
      "B) Une rupture de l'urètre membraneux.",
      "C) Une hypertrophie prostatique bénigne mécanique.",
      "D) Une infection bactérienne à gonocoque.",
      "E) Une néphrocalcinose bilatérale."
    ],
    correctAnswers: [0],
    explanation: "Lésion médullaire sus-sacrée : désynchronisation de l'arc réflexe mictionnel, le sphincter se contracte au lieu de se relâcher pendant la vidange détrusorienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-18',
    courseId: 'crs-neuro-26',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans le syndrome pseudobulbaire par lésions bilatérales des voies cortico-nucléaires (voies pyramidales supranucléaires innervant le bulbe), les signes caractéristiques associent :",
    options: [
      "A) Une dysarthrie spastique nasonnée, une dysphagie avec fausses routes, une exagération pathologique du réflexe massétérin (clonus de la mâchoire) et des accès de rires et pleurs spasmodiques incontrôlables.",
      "B) Une paralysie flasque avec amyotrophie et fasciculations de la langue sans labilité émotionnelle.",
      "C) Une surdité bilatérale avec anosmie.",
      "D) Un strabisme convergent pur sans trouble de parole.",
      "E) Une hémiplégie flasque pure."
    ],
    correctAnswers: [0],
    explanation: "Syndrome pseudobulbaire (atteinte supranucléaire bilatérale motrice) : voix nasonnée serrée, réflexe nauséeux et massétérin vifs (exagérés), rires et pleurs spasmodiques sans amyotrophie linguale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-19',
    courseId: 'crs-neuro-26',
    questionNumber: 19,
    type: 'QCM',
    content: "Le syndrome bulbaire vrai (atteinte périphérique nucléaire directe des nerfs mixtes dans la moelle allongée) se distingue du syndrome pseudobulbaire par :",
    options: [
      "A) Une paralysie flasque avec amyotrophie et fasciculations intenses de la langue, une abolition du réflexe nauséeux et du voile du palais, et l'absence de rires et pleurs spasmodiques.",
      "B) Une hyperréflexie massétérine majeure avec clonus.",
      "C) Une labilité émotionnelle spectaculaire.",
      "D) Une cécité corticale.",
      "E) Un syndrome de Parinaud."
    ],
    correctAnswers: [0],
    explanation: "Syndrome bulbaire vrai (atteinte périphérique des noyaux IX, X, XI, XII dans la SLA bulbaire) : langue atrophique recouverte de fasciculations, réflexe nauséeux aboli.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-20',
    courseId: 'crs-neuro-26',
    questionNumber: 20,
    type: 'QCM',
    content: "Le syndrome de Parinaud correspond à une paralysie supranucléaire de l'oculomotricité caractérisée par :",
    options: [
      "A) Une paralysie de l'élévation du regard (paralysie de la verticalité vers le haut), avec conservation du regard vers le bas et nystagmus retractorius, traduisant une lésion de la région prétectale de la calotte mésencéphalique (ex: tumeur pinéale).",
      "B) Une paralysie de l'abduction horizontale de l'œil droit.",
      "C) Un ptosis unilatéral avec mydriase.",
      "D) Une cécité monoculaire avec pâleur papillaire.",
      "E) Un myosis serré bilatéral."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Parinaud (lésion du toit du mésencéphale/colliculi supérieurs par pinéalome ou hydrocéphalie) bloque le regard conjugué vertical ascendant.",
    difficulty: 'facile'
  },

  // 6 CLINICAL CASES
  {
    id: 'q-nro-26-c01',
    courseId: 'crs-neuro-26',
    questionNumber: 21,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Une patiente de 24 ans consulte pour des lâchages d'objets de la main droite et une démarche anormale. À l'examen, le réflexe bicipital droit est très vif et diffusé à la loge des fléchisseurs, le réflexe rotulien droit entraîne une trépidation épileptoïde de la rotule et la stimulation du bord latéral de la plante du pied droit déclenche une extension lente et solennelle du gros orteil avec écartement en éventail des autres orteils. Quel syndrome neurologique présente cette patiente au membre supérieur et inférieur droits ?",
    options: [
      "A) Syndrome pyramidal droit.",
      "B) Syndrome neurogène périphérique droit pur.",
      "C) Syndrome parkinsonien unilatéral.",
      "D) Syndrome myasthénique auto-immun.",
      "E) Syndrome cérébelleux cinétique pur."
    ],
    correctAnswers: [0],
    explanation: "ROT vifs diffusés, trépidation et signe de Babinski franc au membre inférieur droit signent l'atteinte de la voie pyramidale (faisceau cortico-spinal).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-c02',
    courseId: 'crs-neuro-26',
    questionNumber: 22,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel type d'hypertonie devez-vous vous attendre à observer à la mobilisation passive du membre inférieur droit chez cette patiente ?",
    options: [
      "A) Une hypertonie élastique (spasticité), vitesse-dépendante, prédominant sur les quadriceps et extenseurs de cheville, cédant brutalement en lame de canif.",
      "B) Une rigidité plastique en tuyau de plomb avec phénomène de roue dentée.",
      "C) Une hypotonie complète avec ballant exagéré du pied.",
      "D) Une contracture généralisée permanente tétanique.",
      "E) Des secousses cloniques spontanées sans résistance."
    ],
    correctAnswers: [0],
    explanation: "L'hypertonie pyramidale est spastique/élastique, résistante à la vitesse d'étirement passive et sélective (extenseurs aux MI).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-c03',
    courseId: 'crs-neuro-26',
    questionNumber: 23,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un homme de 64 ans consulte pour lenteur motrice croissante depuis un an. L'examinateur note une rareté des clignements des yeux, une voix monocorde étouffée et une marche à petits pas les bras immobiles le long du corps. Lorsqu'on mobilise son poignet droit, on perçoit une résistance cireuse continue rompue par de petits crans successifs, qui se renforce nettement lorsque le patient effectue des cercles continus avec sa main gauche en l'air. De quel signe s'agit-il ?",
    options: [
      "A) Signe de la roue dentée de Negro renforcé par la manœuvre de Froment (hypertonie extrapyramidale parkinsonienne).",
      "B) Signe de Babinski bilatéral.",
      "C) Signe de Kernig méningé.",
      "D) Manœuvre de Stewart-Holmes cérébelleuse.",
      "E) Signe de Hoffmann pyramidal."
    ],
    correctAnswers: [0],
    explanation: "Rigidité plastique cédant par à-coups (roue dentée) sensibilisée par la mobilisation du bras controlatéral (manœuvre de Froment) = syndrome parkinsonien extrapyramidal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-c04',
    courseId: 'crs-neuro-26',
    questionNumber: 24,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un jeune homme de 20 ans blessé par arme blanche dans le dos au niveau dorsal T8 présente : une paralysie motrice spastique du membre inférieur droit avec signe de Babinski droit, une perte de la sensibilité vibratoire et proprioceptive du pied droit, et une perte de la sensation de piqûre et de brûlure au froid/chaud sur l'ensemble du membre inférieur gauche et de l'hémi-tronc gauche sous l'ombilic. Quel est ce syndrome médullaire classique ?",
    options: [
      "A) Syndrome de Brown-Séquard par hémi-section médullaire droite en T8.",
      "B) Syndrome de compression médullaire antérieure complète.",
      "C) Syndrome syringomyélique dorsal pur.",
      "D) Syndrome de la queue de cheval.",
      "E) Syndrome de l'artère spinale antérieure bilatérale."
    ],
    correctAnswers: [0],
    explanation: "Atteinte pyramidale et proprioceptive homolatérale droite + atteinte thermoalgique controlatérale gauche sous la lésion = syndrome d'hémi-section médullaire de Brown-Séquard.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-c05',
    courseId: 'crs-neuro-26',
    questionNumber: 25,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient de 38 ans consulte car il ne sent plus la douleur ni la température sur ses deux épaules et le haut de son thorax (il s'est brûlé avec une cigarette sans rien ressentir). En revanche, lorsqu'on effleure sa peau avec un coton ou qu'on applique un diapason sur ses clavicules, il perçoit parfaitement la sensation. L'IRM médullaire montre une cavité liquidienne allongée centro-médullaire de C4 à T2. Quel est le diagnostic ?",
    options: [
      "A) Syringomyélie centro-médullaire avec dissociation thermo-algique suspendue en cape.",
      "B) Sclérose en plaques forme rémittente médullaire.",
      "C) Épendymome intramédullaire solide malin.",
      "D) Tabes dorsalis syphilitique.",
      "E) Sclérose combinée de la moelle par carence en folates."
    ],
    correctAnswers: [0],
    explanation: "Perte sélective de la sensibilité thermo-algique avec conservation tactile et proprioceptive en bande suspendue (en cape) correspondant à une fente syringomyélique centro-médullaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-26-c06',
    courseId: 'crs-neuro-26',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 : Une femme de 75 ans avec antécédents d'infarctus lacunaires multiples présente une difficulté majeure pour articuler avec une voix serrée nasonnée, des fausses routes à la déglutition des liquides, et des accès incoercibles et brutaux de rires ou de pleurs sans raison émotionnelle. À l'examen, le réflexe massétérin est très exagéré avec clonus de la mandibule, la langue bouge lentement mais sans aucune amyotrophie ni fasciculation. Quel est le syndrome neurologique ?",
    options: [
      "A) Syndrome pseudobulbaire par lésions vasculaires bilatérales des voies cortico-nucléaires.",
      "B) Sclérose latérale amyotrophique à début bulbaire nucléaire.",
      "C) Myasthénie auto-immune forme bulbaire pure.",
      "D) Botulisme alimentaire aigu.",
      "E) Maladie d'Alzheimer au stade initial."
    ],
    correctAnswers: [0],
    explanation: "Atteinte supranucléaire bilatérale des voies pyramidales (lacunes multiples) : dysarthrie spastique, réflexe massétérin exagéré, rires et pleurs spasmodiques, absence d'atrophie linguale = syndrome pseudobulbaire.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_26_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-26-mindmap',
    courseId: 'crs-neuro-26',
    title: 'Mind Map : Les Grands Syndromes de Motricité & Systèmes Moteurs',
    type: 'mindmap',
    content: `# Mind Map : Syndromes Moteurs Centraux & Périphériques

## 1. Syndrome Pyramidal (1er Motoneurone)
- **Topographie** : Cortex moteur -> Capsule interne -> Tronc -> Décussation bulbaire -> Cordon médullaire latéral.
- **Déficit moteur** : Hémiplégie controlatérale si lésion cérébrale ; homolatérale sous-lésionnelle si médullaire.
- **Spasticité** : Hypertonie élastique (lame de canif), vitesse-dépendante, sélective (fléchisseurs MS, extenseurs MI : démarche en fauchant).
- **Réflexes** : ROT vifs, polycinétiques, diffusés, trépidation épileptoïde, **Signe de Babinski**.

## 2. Syndrome Extrapyramidal (Parkinsonien)
- **Akinésie/Bradykinésie** : Lenteur d'initiation et de déroulement du geste, perte du ballant, micrographie, amimie.
- **Rigidité Plastique** : En tuyau de plomb, constante, roue dentée de Negro, sensibilisée par la manœuvre de Froment.
- **Tremblement de Repos** : 4-6 Hz, émiettement de pain, unilatéral, s'atténue à l'action.

## 3. Syndromes Médullaires Particuliers
- **Brown-Séquard (Hémi-section)** :
  - Homolatéral : Pyramidal + Proprioceptif.
  - Controlatéral : Thermo-algique sous-lésionnel.
- **Syringomyélie (Cavité centrale)** :
  - Dissociation thermo-algique suspendue en cape (brûlures indolores). Tact et proprioception préservés.
- **Cône Terminal (L1-L2)** : Troubles sphinctériens massifs + Anesthésie en selle + Impuissance + Babinski discret.

## 4. Bulbaire vs Pseudobulbaire
- **Pseudobulbaire (Supranucléaire bilatérale)** : Voix nasonnée spastique, fausses routes, **Rires et pleurs spasmodiques**, réflexe massétérin très vif, langue lente SANS atrophie.
- **Bulbaire Vrai (Nucléaire 2ème MN)** : Voix étouffée nasonnée, langue atrophique recouverte de fasciculations, réflexe nauséeux aboli.`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-26-astuces',
    courseId: 'crs-neuro-26',
    title: 'Astuces & Pièges aux Concours : Motricité & Syndromes Médullaires',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Phase flasque initiale de l'hémiplégie :**
   - Lors d'une lésion pyramidale aiguë (AVC, traumatisme médullaire), la paralysie est d'abord **flasque** avec hypotonie et aréflexie pendant plusieurs jours/semaines (phase de choc cérébral/spinal), mais le **signe de Babinski** est déjà présent !
2. **Brown-Séquard : Qu'est-ce qui est controlatéral ?**
   - **SEULE la sensibilité thermo-algique** (faisceau spino-thalamique) est déficitaire du côté opposé à la lésion. La motricité (voie pyramidale) et la sensibilité profonde (Goll et Burdach) sont déficitaires du côté de la lésion.
3. **Syringomyélie = En cape :**
   - Brûlure indolore des mains et avant-bras avec sensibilité au tact conservée = Dissociation thermo-algique syringomyélique suspendue en cape.
4. **Pseudobulbaire vs Bulbaire :**
   - Rires et pleurs spasmodiques + ROT massétérin vif = **Pseudobulbaire** (lésion pyramidale bilatérale).
   - Amyotrophie de la langue + fasciculations linguales = **Bulbaire vrai** (SLA nucléaire).`,
    author: 'Dr. LAIDANI.M'
  }
];
