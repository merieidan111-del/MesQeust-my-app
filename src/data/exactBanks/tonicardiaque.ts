import { Question } from '../../types/medical';

export const TONICARDIQUE_EXACT_QUESTIONS: Question[] = [
  // 15 QCMs
  {
    id: 'q-tonic-01',
    courseId: 'crs-tonicardiaque',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mécanisme fondamental de l'effet inotrope positif des digitaliques est :",
    options: [
      "a) L'activation des récepteurs bêta-1 adrénergiques.",
      "b) L'inhibition de la phosphodiestérase.",
      "c) L'inhibition de la pompe Na⁺/K⁺ ATPase.",
      "d) Le blocage des canaux potassiques.",
      "e) La stimulation directe de la libération de calcium du réticulum sarcoplasmique."
    ],
    correctAnswers: [2],
    explanation: "L'inhibition de la Na⁺/K⁺ ATPase est l'action pharmacologique centrale. Cela entraîne une accumulation de sodium intracellulaire, qui inverse le fonctionnement de l'échangeur Na⁺/Ca²⁺, conduisant à une augmentation de la concentration intracellulaire de calcium et donc à une force de contraction accrue. Les autres options décrivent les mécanismes d'autres médicaments inotropes (a, b) ou n'ont pas de rapport direct.",
    clinicalPearl: "Pensez à 'NAC' : Na⁺/K⁺ ATPase bloquée → Accumulation de Na⁺ → Calcium intracellulaire ↑."
  },
  {
    id: 'q-tonic-02',
    courseId: 'crs-tonicardiaque',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient sous digoxine présente un allongement de l'espace PR à l'ECG. Cet effet est dû à :",
    options: [
      "a) L'effet inotrope positif.",
      "b) L'effet chronotrope négatif.",
      "c) L'effet dromotrope négatif.",
      "d) L'effet bathmotrope positif.",
      "e) Une intoxication digitalique avérée."
    ],
    correctAnswers: [2],
    explanation: "L'allongement de l'espace PR reflète un ralentissement de la conduction au niveau du nœud auriculo-ventriculaire. C'est la définition de l'effet dromotrope négatif des digitaliques. C'est un effet thérapeutique recherché dans la FA rapide, et non nécessairement un signe de toxicité, qui se manifesterait plutôt par un BAV complet.",
    clinicalPearl: "ICD : Inotrope +, Chronotrope -, Dromotrope -."
  },
  {
    id: 'q-tonic-03',
    courseId: 'crs-tonicardiaque',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une digoxinémie à 2.5 ng/mL chez un patient asymptomatique impose :",
    options: [
      "a) L'administration immédiate d'anticorps spécifiques (Digibind®).",
      "b) La augmentation de la dose pour atteindre un effet optimal.",
      "c) L'arrêt immédiat du traitement et une surveillance étroite.",
      "d) La simple poursuite du traitement à la même dose.",
      "e) L'ajout d'un diurétique thiazidique."
    ],
    correctAnswers: [2],
    explanation: "Un taux supérieur à 2 ng/mL est considéré comme toxique, même en l'absence de symptômes. L'arrêt immédiat est impératif pour prévenir l'apparition de signes de toxicité potentiellement graves. L'administration d'anticorps (a) est réservée aux intoxications sévères et menaçant le pronostic vital.",
    clinicalPearl: "Digoxinémie : Cible = 0.5 - 0.9 ng/mL ; > 2 ng/mL = Toxique."
  },
  {
    id: 'q-tonic-04',
    courseId: 'crs-tonicardiaque',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'effet bathmotrope positif des digitaliques explique :",
    options: [
      "a) L'amélioration de la fraction d'éjection.",
      "b) La bradycardie sinusale.",
      "c) L'apparition possible de tachycardies ventriculaires.",
      "d) Le ralentissement de la conduction AV.",
      "e) La réduction de la post-charge."
    ],
    correctAnswers: [2],
    explanation: "L'effet bathmotrope positif signifie une augmentation de l'excitabilité myocardique. Cet effet pro-arythmogène est à l'origine des troubles du rythme ventriculaire (comme les tachycardies ventriculaires) observés en cas de toxicité digitalique. L'amélioration de la fraction d'éjection (a) est liée à l'effet inotrope positif.",
    clinicalPearl: "Bathmotrope + : augmentation de l'excitabilité myocardique pouvant déclencher des arythmies ventriculaires."
  },
  {
    id: 'q-tonic-05',
    courseId: 'crs-tonicardiaque',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Laquelle de ces associations médicamenteuses majore le PLUS le risque de toxicité digitalique ?",
    options: [
      "a) Digoxine + Bêta-bloquant.",
      "b) Digoxine + Inhibiteur de l'Enzyme de Conversion (IEC).",
      "c) Digoxine + Diurétique de l'anse (ex: Furosémide).",
      "d) Digoxine + Statine.",
      "e) Digoxine + Aspirine."
    ],
    correctAnswers: [2],
    explanation: "Les diurétiques de l'anse (et les thiazidiques) provoquent une perte urinaire de potassium (hypokaliémie). L'hypokaliémie potentialise fortement la fixation et la toxicité des digitaliques sur la pompe Na⁺/K⁺ ATPase. Les IEC (b) peuvent même être protecteurs en limitant l'hypokaliémie.",
    clinicalPearl: "Attention majeure : Diurétique hypokaliémiant + Digoxine = Risque toxique maximal."
  },
  {
    id: 'q-tonic-06',
    courseId: 'crs-tonicardiaque',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'insuffisance cardiaque, l'avantage des digitaliques par rapport aux catécholamines est :",
    options: [
      "a) Leur effet inotrope plus puissant.",
      "b) L'absence de risque d'arythmie.",
      "c) Leur capacité à réduire la fréquence cardiaque sans majorer la consommation d'O₂ du myocarde.",
      "d) Leur administration exclusivement orale.",
      "e) Leur efficacité supérieure en aigu."
    ],
    correctAnswers: [2],
    explanation: "C'est un point clé. Les catécholamines augmentent la contractilité mais aussi la fréquence et la consommation d'O₂, ce qui peut être délétère. Les digitaliques, par leur effet chronotrope négatif, améliorent le rendement énergétique du myocarde.",
    clinicalPearl: "Les digitaliques ralentissent la FC sans augmenter la MVO2, contrairement aux catécholamines."
  },
  {
    id: 'q-tonic-07',
    courseId: 'crs-tonicardiaque',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La digoxine est contre-indiquée formellement dans :",
    options: [
      "a) L'insuffisance cardiaque à fraction d'éjection préservée.",
      "b) La fibrillation auriculaire lente.",
      "c) Le syndrome de Wolff-Parkinson-White (WPW).",
      "d) L'hypertension artérielle non contrôlée.",
      "e) L'insuffisance rénale modérée."
    ],
    correctAnswers: [2],
    explanation: "Dans le WPW, les digitaliques peuvent ralentir la conduction du nœud AV mais faciliter la conduction via la voie accessoire, ce qui peut précipiter une réponse ventriculaire très rapide (ex: FV) en cas de FA, ce qui est extrêmement dangereux.",
    clinicalPearl: "Contre-indication WPW : 'La Digoxine Dérègle la Dérivation accessoire' (risque de FV par conduction 1:1)."
  },
  {
    id: 'q-tonic-08',
    courseId: 'crs-tonicardiaque',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement de première intention d'une intoxication digitalique avec TV stable est :",
    options: [
      "a) L'amiodarone en perfusion.",
      "b) La lidocaïne.",
      "c) La cardioversion électrique synchonisée.",
      "d) L'adrénaline.",
      "e) L'atropine."
    ],
    correctAnswers: [1],
    explanation: "La lidocaïne (anti-arythmique de classe Ib) est historiquement le traitement de choix car elle supprime l'activité ectopique ventriculaire sans aggraver le bloc de conduction. La cardioversion (c) est risquée car peut déclencher une fibrillation ventriculaire chez un patient digitalisé.",
    clinicalPearl: "Traitement TV sous digoxine = Lidocaïne (la cardioversion électrique risque de provoquer une FV irréversible)."
  },
  {
    id: 'q-tonic-09',
    courseId: 'crs-tonicardiaque',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 75 ans sous digoxine pour IC présente des nausées et une vision colorée en jaune. La première action est :",
    options: [
      "a) Réaliser un ionogramme sanguin et une digoxinémie.",
      "b) Administrer un antiémétique.",
      "c) Faire un fond d'œil en urgence.",
      "d) Rassurer le patient et poursuivre le traitement.",
      "e) Augmenter la dose pour atteindre l'effet thérapeutique maximal."
    ],
    correctAnswers: [0],
    explanation: "Les signes digestifs (nausées) et neurologiques (xanthopsie - vision jaune) sont des signes classiques et précoces de toxicité digitalique. La confirmation biologique (ionogramme pour chercher une hypokaliémie et digoxinémie) est immédiatement nécessaire pour guider la suite de la prise en charge (arrêt du traitement, etc.).",
    clinicalPearl: "Xanthopsie (vision jaune/vert) + nausées = Intoxication digitalique jusqu'à preuve du contraire."
  },
  {
    id: 'q-tonic-10',
    courseId: 'crs-tonicardiaque',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'effet chronotrope négatif des digitaliques est principalement dû à :",
    options: [
      "a) Une action antagoniste des récepteurs muscariniques.",
      "b) Une stimulation du système nerveux sympathique.",
      "c) Une augmentation du tonus vagal.",
      "d) Un effet dépresseur direct sur le nœud sinusal.",
      "e) Un blocage des canaux calciques."
    ],
    correctAnswers: [2],
    explanation: "Les digitaliques augmentent le tonus vagal (parasympathique) sur le cœur. Cette action est responsable de la bradycardie (chronotrope négatif) et du ralentissement de la conduction AV (dromotrope négatif).",
    clinicalPearl: "Action vagomimétique des digitaliques = bradycardie et ralentissement nodal."
  },
  {
    id: 'q-tonic-11',
    courseId: 'crs-tonicardiaque',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Laquelle de ces molécules peut augmenter la concentration plasmatique de la digoxine par interaction pharmacocinétique ?",
    options: [
      "a) Le Vérapamil.",
      "b) Le Furosémide.",
      "c) Le Lisinopril (IEC).",
      "d) Le Bisoprolol (Bêta-bloquant).",
      "e) L'Atorvastatine (Statine)."
    ],
    correctAnswers: [0],
    explanation: "Le Vérapamil (et d'autres comme l'Amiodarone, la Quinidine) diminue la clairance rénale et/ou la distribution tissulaire de la digoxine, conduisant à une augmentation de sa concentration plasmatique pour une même dose, et donc à un risque accru de toxicité.",
    clinicalPearl: "Interactions pharmacocinétiques : Vérapamil, Amiodarone, Quinidine doublent la digoxinémie !"
  },
  {
    id: 'q-tonic-12',
    courseId: 'crs-tonicardiaque',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La posologie de la digoxine doit être réduite en priorité chez :",
    options: [
      "a) Les patients hypertendus.",
      "b) Les patients présentant une insuffisance rénale.",
      "c) Les patients asthmatiques.",
      "d) Les patients diabétiques.",
      "e) Les patients jeunes de poids normal."
    ],
    correctAnswers: [1],
    explanation: "La digoxine est principalement éliminée inchangée par le rein. Toute altération de la fonction rénale (clairance de la créatinine) diminue son élimination, prolonge sa demi-vie et favorise son accumulation, nécessitant un ajustement posologique impératif.",
    clinicalPearl: "Élimination rénale exclusive de la digoxine : adapter impérativement la dose à la clairance rénale."
  },
  {
    id: 'q-tonic-13',
    courseId: 'crs-tonicardiaque',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication la plus solide des digitaliques selon les recommandations récentes est :",
    options: [
      "a) L'insuffisance cardiaque aiguë systolique de novo.",
      "b) Le contrôle de la fréquence dans la FA rapide lorsque les bêta-bloquants sont contre-indiqués ou inefficaces.",
      "c) La prévention des récidives de fibrillation auriculaire.",
      "d) Le traitement de première intention de l'insuffisance cardiaque chronique.",
      "e) La cardiopathie hypertrophique obstructive."
    ],
    correctAnswers: [1],
    explanation: "Bien que leur place soit limitée dans l'IC chronique, les digitaliques gardent une indication claire pour le contrôle de la fréquence ventriculaire dans la FA, en particulier en situation de recours ou en cas de contre-indication aux bêta-bloquants/anti-calciques non DHP.",
    clinicalPearl: "Indication reine actuelle : contrôle de fréquence de la FA rapide avec IC / intolérance aux bêtabloquants."
  },
  {
    id: 'q-tonic-14',
    courseId: 'crs-tonicardiaque',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"Digitalis Effect\" à l'ECG se caractérise par :",
    options: [
      "a) Un aplatissement de l'onde T.",
      "b) Un allongement de l'espace QT.",
      "c) Un sus-décalage du segment ST en \"dôme de mosque\".",
      "d) Un raccourcissement de l'espace PR.",
      "e) Un effondrement du segment ST."
    ],
    correctAnswers: [2],
    explanation: "Le \"Digitalis Effect\" est un signe ECG de saturation des récepteurs, et non de toxicité. Il se manifeste par un sus-décalage concave du segment ST en \"dôme\" ou \"en creux\", souvent associé à un aplatissement de l'onde T. Il faut le distinguer des signes de toxicité (troubles du rythme).",
    clinicalPearl: "Cupule digitalique en creux = signe d'imprégnation (effet thérapeutique), pas de surdosage !"
  },
  {
    id: 'q-tonic-15',
    courseId: 'crs-tonicardiaque',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'antidote spécifique de l'intoxication digitalique sévère est :",
    options: [
      "a) Le Flumazénil.",
      "b) Le Naloxone.",
      "c) Le Digibind® (anticorps anti-digoxine).",
      "d) Le Glucagon.",
      "e) Le Sulfate de magnésium."
    ],
    correctAnswers: [2],
    explanation: "Les fragments d'anticorps spécifiques (Digibind®) se lient à la digoxine libre dans le plasma, formant un complexe inactif qui est ensuite éliminé par le rein. C'est le seul traitement spécifique, réservé aux intoxications menaçant le pronostic vital.",
    clinicalPearl: "Antidote spécifique : Fragments Fab d'anticorps anti-digoxine (Digibind®)."
  },
  {
    id: 'q-tonic-16',
    courseId: 'crs-tonicardiaque',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel trouble électrolytique potentialise le plus fortement la toxicité cardiaque des digitaliques même à dose thérapeutique ?",
    options: [
      "a) L'hyperkaliémie.",
      "b) L'hypokaliémie.",
      "c) L'hypercalcémie modérée.",
      "d) L'hyponatrémie sévère.",
      "e) L'hyperphosphorémie."
    ],
    correctAnswers: [1],
    explanation: "L'hypokaliémie favorise la fixation de la digoxine sur la pompe Na⁺/K⁺ ATPase et démasque ainsi l'effet toxique et arythmogène du médicament même avec une digoxinémie dans les normes thérapeutiques.",
    clinicalPearl: "L'hypokaliémie majore drastiquement la toxicité digitalique : toujours contrôler la kaliémie avant et sous digoxine."
  },
  {
    id: 'q-tonic-17',
    courseId: 'crs-tonicardiaque',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pourquoi la digoxine est-elle formellement contre-indiquée dans la cardiomyopathie hypertrophique obstructive (CMHO) ?",
    options: [
      "a) Elle risque d'aggraver l'obstruction sous-aortique par augmentation de la contractilité ventriculaire gauche.",
      "b) Elle accélère la conduction auriculoventriculaire.",
      "c) Elle provoque une dilatation anévrismale de l'apex.",
      "d) Elle diminue la compliance artérielle périphérique.",
      "e) Elle interagit avec les canaux sodiques rapides."
    ],
    correctAnswers: [0],
    explanation: "Dans la CMHO, l'effet inotrope positif renforce la contraction du septum hypertrophié et aspire la valve mitrale en systole (effet Venturi), majorant le gradient intraventriculaire obstructif.",
    clinicalPearl: "CMHO : Inotropes positifs proscrits car ils augmentent le gradient de sténose sous-aortique."
  },
  {
    id: 'q-tonic-18',
    courseId: 'crs-tonicardiaque',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le délai minimal recommandé entre la dernière prise de digoxine orale et le prélèvement sanguin pour un dosage fiable de la digoxinémie ?",
    options: [
      "a) 30 minutes.",
      "b) 2 heures.",
      "c) Au moins 6 à 8 heures (en pratique avant la prise matinale).",
      "d) 24 heures complètes.",
      "e) 48 heures."
    ],
    correctAnswers: [2],
    explanation: "La phase de distribution tissulaire de la digoxine dure entre 6 et 8 heures après la prise orale. Un dosage réalisé plus tôt reflète une concentration plasmatique transitoirement élevée et ininterprétable.",
    clinicalPearl: "Dosage de la digoxinémie : toujours au creux, au moins 6 à 8h après la dernière prise (résiduelle)."
  },
  {
    id: 'q-tonic-19',
    courseId: 'crs-tonicardiaque',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel trouble du rythme ECG est considéré comme le plus évocateur et précoce d'une intoxication digitalique ?",
    options: [
      "a) L'extrasystolie ventriculaire polymorphe fréquente ou bigéminée.",
      "b) Le bloc de branche gauche complet.",
      "c) Le flutter auriculaire commun à conduction 2:1.",
      "d) L'arrêt sinusal prolongé isolé.",
      "e) La fibrillation ventriculaire d'emblée."
    ],
    correctAnswers: [0],
    explanation: "L'extrasystolie ventriculaire (ESV), particulièrement polymorphe, bigéminée ou en salves, est l'anomalie rythmique la plus fréquente et précoce de la toxicité digitalique.",
    clinicalPearl: "ESV bigéminées polymorphes sous digoxine = Intoxication digitalique jusqu'à preuve du contraire."
  },
  {
    id: 'q-tonic-20',
    courseId: 'crs-tonicardiaque',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient sous digoxine, l'association à quel diurétique expose au risque maximal de surdosage digitalique toxique ?",
    options: [
      "a) L'amiloride.",
      "b) La spironolactone.",
      "c) Le furosémide sans supplémentation potassique.",
      "d) L'éplérénone.",
      "e) Le triamtérène."
    ],
    correctAnswers: [2],
    explanation: "Les diurétiques de l'anse (furosémide) induisent une kaliurèse importante. L'hypokaliémie résultante favorise l'effet toxique et les arythmies létales de la digoxine.",
    clinicalPearl: "Diurétiques hypokaliémiants (furosémide, thiazidiques) + Digoxine = Risque majeur d'arythmie par hypokaliémie."
  },
  {
    id: 'q-tonic-21',
    courseId: 'crs-tonicardiaque',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'effet neuro-végétatif autonome principal des digitaliques contribuant au ralentissement de la fréquence cardiaque ?",
    options: [
      "a) Une action sympathomimétique directe.",
      "b) Une stimulation vagale centrale et périphérique (effet vagomimétique).",
      "c) Une inhibition exclusive des ganglions sympathiques thoraciques.",
      "d) Un blocage direct des récepteurs alpha-1 périphériques.",
      "e) Une déplétion en acétylcholine dans le nœud sinusal."
    ],
    correctAnswers: [1],
    explanation: "Les digitaliques renforcent le tonus parasympathique (effet vagomimétique) au niveau du nœud sinusal et du nœud auriculo-ventriculaire, ce qui ralentit la conduction et la fréquence cardiaque.",
    clinicalPearl: "Effet vagomimétique des digitaliques : ralentissement AV médié par l'acétylcholine vagale."
  },
  {
    id: 'q-tonic-22',
    courseId: 'crs-tonicardiaque',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La zone thérapeutique usuelle recommandée pour la digoxinémie dans l'insuffisance cardiaque est comprise entre :",
    options: [
      "a) 0,1 et 0,3 ng/mL.",
      "b) 0,5 et 0,9 ng/mL (ou jusqu'à 1,2 ng/mL dans la FA).",
      "c) 2,0 et 3,5 ng/mL.",
      "d) 4,0 et 6,0 ng/mL.",
      "e) 8,0 et 10,0 ng/mL."
    ],
    correctAnswers: [1],
    explanation: "Dans l'insuffisance cardiaque, la cible thérapeutique optimale est étroite : 0,5 à 0,9 ng/mL. Au-delà de 1,2 ng/mL, le bénéfice clinique ne progresse plus et le risque d'intoxication augmente sensiblement.",
    clinicalPearl: "Cible de digoxinémie dans l'IC : 0,5 à 0,9 ng/mL. Toxicité fréquente si > 2,0 ng/mL."
  },
  {
    id: 'q-tonic-23',
    courseId: 'crs-tonicardiaque',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie visuelle classique fait partie des symptômes neurologiques/sensoriels de l'intoxication digitalique ?",
    options: [
      "a) Une vision colorée en jaune-vert (xanthopsie) et un flou visuel.",
      "b) Une cécité corticale brutale.",
      "c) Une hémianopsie bitemporale.",
      "d) Une mydriase bilatérale aréactive.",
      "e) Un scotome central isolé rouge."
    ],
    correctAnswers: [0],
    explanation: "La xanthopsie (vision teintée de jaune ou vert, halos autour des lumières) et le flou visuel sont les symptômes ophtalmologiques caractéristiques de l'intoxication digitalique.",
    clinicalPearl: "Dyschromatopsie jaune-vert (xanthopsie) = Signe neuro-sensoriel pathognomonique de toxicité digitalique."
  },
  {
    id: 'q-tonic-24',
    courseId: 'crs-tonicardiaque',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En cas d'intoxication digitalique aiguë massive, quelle anomalie ionique sanguine est un facteur pronostique de mortalité immédiate ?",
    options: [
      "a) L'hypokaliémie sévère.",
      "b) L'hyperkaliémie aiguë (liée au blocage massif de la Na⁺/K⁺ ATPase).",
      "c) L'hypercalcémie majeure.",
      "d) L'hypomagnésémie isolée.",
      "e) L'alcalose respiratoire."
    ],
    correctAnswers: [1],
    explanation: "Lors d'une intoxication aiguë massive, l'inhibition totale des pompes Na⁺/K⁺ ATPase empêche l'entrée du potassium dans les cellules, provoquant une hyperkaliémie aiguë majeure qui est le principal facteur pronostique de décès.",
    clinicalPearl: "Intoxication digitalique massive : Hyperkaliémie = Marqueur pronostique de gravité extrême justifiant les anticorps Fab."
  },
  {
    id: 'q-tonic-25',
    courseId: 'crs-tonicardiaque',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle précaution absolue doit être respectée avant de réaliser une cardioversion électrique externe chez un patient sous digoxine ?",
    options: [
      "a) Vérifier l'absence de surdosage digitalique car le choc électrique peut déclencher une fibrillation ventriculaire réfractaire.",
      "b) Administrer au préalable une dose double de digoxine IV.",
      "c) Arrêter les anticoagulants 48 heures avant.",
      "d) Maintenir la digoxinémie au-dessus de 2,5 ng/mL.",
      "e) Perfuser du calcium intraveineux systématique."
    ],
    correctAnswers: [0],
    explanation: "En cas de surdosage digitalique, le choc électrique externe est très dangereux car il peut induire des arythmies ventriculaires réfractaires ou une asystolie irréversible.",
    clinicalPearl: "Cardioversion électrique sur cœur imprégné/intoxiqué par la digoxine : risque majeur de FV létale."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-tonic-01',
    courseId: 'crs-tonicardiaque',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 : Contrôle de Rythme\nM. Kada, 70 ans, connu pour une IC (FE 30%), est admis pour palpitations. L'ECG montre une Fibrillation Auriculaire avec une FC à 140/min. Il est déjà sous IEC, Bêta-bloquant à dose maximale et Diurétique. Sa tension est à 110/70 mmHg.\nQuestion : Quelle est la meilleure option thérapeutique pour contrôler la fréquence ventriculaire ?",
    options: [
      "a) Augmenter la dose du Bêta-bloquant.",
      "b) Ajouter de la Digoxine en IV.",
      "c) Ajouter du Vérapamil en IV.",
      "d) Procéder à une cardioversion électrique en urgence.",
      "e) Ajouter de l'Amiodarone IV."
    ],
    correctAnswers: [1],
    explanation: "Le patient est déjà sous bêta-bloquant à dose max et est hypotendu, ce qui contre-indique l'augmentation du bêta-bloquant (a) ou l'ajout de vérapamil (c - risque de bradycardie et d'hypotension sévère). La cardioversion (d) n'est pas indiquée en urgence sans instabilité hémodynamique. L'amiodarone (e) est plus pour le contrôle du rythme que de la fréquence. La digoxine, par son effet inotrope et dromotrope négatif sans effet hypotenseur, est idéale ici.",
    clinicalPearl: "FA rapide + IC sous bêtabloquant maximal = Digoxine IV."
  },
  {
    id: 'cas-tonic-02',
    courseId: 'crs-tonicardiaque',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 : Toxicité\nMme Fatima, 80 ans, IC, FR, sous Digoxine 0.25mg/j et Furosémide, consulte pour asthénie, nausées et vision \"bizarre\". L'ECG montre un rythme sinusal à 50/min, avec des bigéminismes ventriculaires.\nQuestion : Quel est le bilan immédiat le plus pertinent ?",
    options: [
      "a) TSH et Numération Formule Sanguine.",
      "b) Ionogramme sanguin et Digoxinémie.",
      "c) Radiographie pulmonaire et BNP.",
      "d) IRM cérébrale.",
      "e) Dosage des transaminases."
    ],
    correctAnswers: [1],
    explanation: "Le tableau est évocateur d'une intoxication digitalique : signes digestifs, neurologiques, bradycardie et bigéminisme (trouble du rythme ventriculaire typique). L'association avec un diurétique hypokaliémiant est un facteur de risque classique. Le bilan prioritaire confirme la toxicité (digoxinémie) et recherche un facteur déclenchant (hypokaliémie).",
    clinicalPearl: "Les '3 Mousquetaires' du bilan : K⁺, Créatinine, Digoxinémie."
  },
  {
    id: 'cas-tonic-03',
    courseId: 'crs-tonicardiaque',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 : Prescription\nLe Pr. Manseri vous demande de prescrire de la Digoxine à un patient de 45 ans, IC (FE 25%), rythme sinusal, fonction rénale normale.\nQuestion : Quelle est la posologie INITIALE la plus appropriée ?",
    options: [
      "a) 0.25 mg deux fois par jour.",
      "b) 1 mg en une prise.",
      "c) 0.0625 mg par jour.",
      "d) 0.25 mg par jour.",
      "e) 0.50 mg par jour."
    ],
    correctAnswers: [3],
    explanation: "Pour un adulte avec fonction rénale normale, la dose d'entretien standard est de 0.25 mg/jour. Une dose plus faible (c) serait pour un sujet âgé ou une insuffisance rénale. Les autres doses sont soit trop faibles (c), soit trop fortes (a, b, e) et exposent à un risque de toxicité.",
    clinicalPearl: "Posologie standard d'entretien adulte = 0.25 mg/j (1 comprimé/jour)."
  },
  {
    id: 'cas-tonic-04',
    courseId: 'crs-tonicardiaque',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 : Contre-indication\nUn patient de 50 ans est admis pour palpitations. L'ECG montre un rythme régulier à 150/min, avec un complexe QRS large et onde delta. Le diagnostic de tachycardie antidromique sur WPW est posé.\nQuestion : Pourquoi la Digoxine est-elle formellement contre-indiquée ici ?",
    options: [
      "a) Elle peut provoquer une insuffisance rénale aiguë.",
      "b) Elle peut ralentir excessivement le rythme sinusal.",
      "c) Elle peut accélérer la conduction dans la voie accessoire, risquant de induire une FV.",
      "d) Elle est inefficace sur les voies accessoires.",
      "e) Elle potentialise les effets des anti-arythmiques de classe I."
    ],
    correctAnswers: [2],
    explanation: "C'est la raison fondamentale. Les digitaliques peuvent raccourcir la période réfractaire de la voie accessoire. En cas de FA, cela peut permettre une conduction 1:1 très rapide via la voie accessoire, dégénérant en Fibrillation Ventriculaire.",
    clinicalPearl: "Danger fatal : Digoxine sur WPW = risque d'accélération de conduction par le faisceau de Kent et FV !"
  },
  {
    id: 'cas-tonic-05',
    courseId: 'crs-tonicardiaque',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 : Interaction\nM. Ahmed, 65 ans, IC et FA, stable depuis 1 an sous Digoxine 0.25mg/j. On lui ajoute de l'Amiodarone pour une TV non soutenue.\nQuestion : Quelle est la conduite à tenir concernant la Digoxine ?",
    options: [
      "a) Arrêter définitivement la Digoxine.",
      "b) Augmenter la dose de Digoxine à 0.50 mg/j.",
      "c) Remplacer la Digoxine par un bêta-bloquant.",
      "d) Réduire la dose de Digoxine de moitié et surveiller la digoxinémie.",
      "e) Ne rien changer."
    ],
    correctAnswers: [3],
    explanation: "L'Amiodarone diminue la clairance de la Digoxine et peut doubler sa concentration plasmatique. Il est donc impératif de réduire la dose de digoxine (généralement de moitié) dès l'introduction de l'Amiodarone et de surveiller étroitement la digoxinémie pour prévenir une intoxication.",
    clinicalPearl: "Introduction de l'Amiodarone chez un patient sous Digoxine : Réduire la dose de Digoxine de 50% d'emblée !"
  }
];
