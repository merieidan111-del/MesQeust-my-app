import { Question } from '../../types/medical';

export const TROUBLES_CONDUCTION_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-cond-01',
    courseId: 'crs-troubles-conduction',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez un patient de 70 ans, un ECG montre un allongement fixe de l'intervalle PR à 280 ms. Quel est le mécanisme le plus probable ?",
    options: [
      "A) Bloc sino-auriculaire du 1er degré",
      "B) Bloc auriculo-ventriculaire du 1er degré",
      "C) Bloc auriculo-ventriculaire du 2e degré type Mobitz I",
      "D) Dysfonction sinusale",
      "E) Bloc de branche droit complet"
    ],
    correctAnswers: [1],
    explanation: "Le BAV du 1er degré est défini par un allongement fixe de l'intervalle PR > 200 ms, sans onde P bloquée. Le bloc siège généralement dans le nœud AV. Les autres options ne correspondent pas à la description : le BSA du 1er degré n'a pas de traduction ECG, le Mobitz I présente un allongement progressif du PR, et la dysfonction sinusale ou le BBD n'expliquent pas cet allongement isolé du PR.",
    clinicalPearl: "BAV 1 = PR constant > 200 ms (0.20 s) avec conduction 1:1 de toutes les ondes P."
  },
  {
    id: 'q-cond-02',
    courseId: 'crs-troubles-conduction',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément du tracé ECG est pathognomonique d'un BAV du 2e degré type Mobitz I (Wenckebach) ?",
    options: [
      "A) Intervalle PR constant suivi d'une onde P bloquée",
      "B) Intervalle PR qui s'allonge progressivement jusqu'à une onde P bloquée",
      "C) Ondes P bloquées de façon aléatoire",
      "D) Complexes QRS élargis",
      "E) Dissociation auriculo-ventriculaire complète"
    ],
    correctAnswers: [1],
    explanation: "Le phénomène de Wenckebach (Mobitz I) se caractérise par un allongement progressif de l'intervalle PR jusqu'à la chute d'un complexe QRS. Le Mobitz II (A) a un PR constant avant le bloc. La dissociation complète (E) est le signe d'un BAV du 3e degré.",
    clinicalPearl: "\"Wenckebach se Fatigue en Montant\" : PR qui s'allonge progressivement jusqu'à ce qu'un QRS tombe."
  },
  {
    id: 'q-cond-03',
    courseId: 'crs-troubles-conduction',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un ECG montre un rythme sinusal avec un intervalle PR constant de 160 ms et un complexe QRS bloqué de façon intermittente sans modification du PR. Quel est le type de bloc et sa localisation probable ?",
    options: [
      "A) Mobitz I - Intranodal",
      "B) Mobitz II - Infranodal",
      "C) BAV du 1er degré - Nodal",
      "D) Bloc 2:1 - Nodal",
      "E) BAV du 3e degré - Infranodal"
    ],
    correctAnswers: [1],
    explanation: "Le Mobitz II est défini par un PR constant et des ondes P bloquées brusques, sans allongement préalable. Il est de siège infranodal (tronc ou branches du His), ce qui en fait un bloc de mauvais pronostic, souvent organique, contrairement au Mobitz I qui est plus souvent nodal et fonctionnel.",
    clinicalPearl: "\"Mobitz II est Méchant et Brutal\" : PR fixe puis onde P bloquée inopinée (siège infranodal, pacemaker requis)."
  },
  {
    id: 'q-cond-04',
    courseId: 'crs-troubles-conduction',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente un BAV 2:1. Quel signe ECG oriente vers un siège INFRANODAL de ce bloc ?",
    options: [
      "A) Un intervalle PR > 300 ms sur les complexes conduits",
      "B) La présence de périodes de Wenckebach ailleurs sur le tracé",
      "C) Un complexe QRS fin (< 120 ms)",
      "D) Un intervalle PR < 160 ms sur les complexes conduits ou QRS larges",
      "E) Une fréquence cardiaque rapide"
    ],
    correctAnswers: [3],
    explanation: "Un PR court (< 160 ms) sur les complexes conduits ou la présence de QRS larges suggèrent que le bloc est situé après le nœud AV (infranodal), car le délai nodal est court. Un PR long (A) ou la présence de Wenckebach (B) orientent vers un bloc nodal.",
    clinicalPearl: "Localiser un Bloc 2:1 : PR long ou Wenckebach = Nodal ; PR court ou QRS large = Infranodal."
  },
  {
    id: 'q-cond-05',
    courseId: 'crs-troubles-conduction',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans un BAV complet (3e degré), que observe-t-on ?",
    options: [
      "A) Un allongement progressif du PR",
      "B) Une relation fixe entre les ondes P et les QRS",
      "C) Une dissociation auriculo-ventriculaire complète avec un rythme d'échappement",
      "D) Des ondes P bloquées sporadiques",
      "E) Une pause sinusale > 3 secondes"
    ],
    correctAnswers: [2],
    explanation: "Dans le BAV du 3e degré, il y a dissociation complète entre l'activité auriculaire (ondes P) et ventriculaire (QRS). Les ventricules sont stimulés par un foyer d'échappement jonctionnel (QRS fins) ou ventriculaire (QRS larges). Les autres options décrivent d'autres types de troubles de la conduction.",
    clinicalPearl: "BAV complet (3e degré) = Dissociation auriculo-ventriculaire complète (fréquence P > fréquence QRS)."
  },
  {
    id: 'q-cond-06',
    courseId: 'crs-troubles-conduction',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le rythme d'échappement typique d'un BAV complet de siège INFRANODAL ?",
    options: [
      "A) Rythme jonctionnel avec QRS fins, FC 40-60/min",
      "B) Rythme sinusal avec bloc de branche",
      "C) Rythme ventriculaire avec QRS larges, FC 20-40/min",
      "D) Fibrillation auriculaire",
      "E) Tachycardie jonctionnelle"
    ],
    correctAnswers: [2],
    explanation: "Un bloc infranodal lèse le système de conduction en aval, laissant comme seule issue un foyer d'échappement ventriculaire, lent (20-40/min) et à QRS larges. Un bloc nodal laisse place à un échappement jonctionnel (A), plus rapide et à QRS fins.",
    clinicalPearl: "Échappement BAV complet : Jonctionnel (QRS fins, FC 40-60) = Nodal ; Ventriculaire (QRS larges, FC 20-40) = Infranodal."
  },
  {
    id: 'q-cond-07',
    courseId: 'crs-troubles-conduction',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le syndrome brady-tachycardie est une manifestation de :",
    options: [
      "A) Bloc sino-auriculaire du 3e degré",
      "B) Bloc auriculo-ventriculaire du 2e degré",
      "C) Maladie de l'oreillette (dysfonction sinusale)",
      "D) Bloc de branche gauche",
      "E) Hyperkaliémie"
    ],
    correctAnswers: [2],
    explanation: "La maladie de l'oreillette, ou syndrome brady-tachycardie, est une forme de dysfonction sinusale qui alterne des épisodes de bradycardie (par dysfonction sinusale ou BSA) et des épisodes de tachycardie (FA, flutter). Ce n'est pas un BAV (B) ni un BSA isolé (A).",
    clinicalPearl: "Maladie de l'oreillette = Alternance d'accès de tachycardie atriale (FA) et de bradycardie/pauses sinusales."
  },
  {
    id: 'q-cond-08',
    courseId: 'crs-troubles-conduction',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un QRS > 120 ms dans les dérivations D1 et VL avec un retard à l'onde intrinsécoïde > 60 ms en V6 évoque :",
    options: [
      "A) Un bloc de branche droit complet",
      "B) Un bloc de branche gauche complet",
      "C) Un hémibloc antérieur gauche",
      "D) Un BAV du 1er degré",
      "E) Un bloc de branche droit avec hémibloc antérieur gauche"
    ],
    correctAnswers: [1],
    explanation: "Les critères du bloc de branche gauche complet (BBG) sont : QRS ≥ 120 ms et retard de l'onde intrinsécoïde (temps jusqu'au sommet de l'onde R) ≥ 60 ms dans les dérivations gauches (V5, V6, DI, aVL). Le BBD (A) donne un retard en V1.",
    clinicalPearl: "BBG complet : QRS >= 120 ms + Retard déflexion intrinsécoïde >= 60 ms en V5-V6 sans onde Q en V6."
  },
  {
    id: 'q-cond-09',
    courseId: 'crs-troubles-conduction',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'association d'un BBD et d'un hémibloc antérieur gauche (HAG) constitue :",
    options: [
      "A) Un bloc trifasciculaire",
      "B) Un bibloc",
      "C) Un BAV du 2e degré",
      "D) Un bloc infra-hissien",
      "E) Un bibloc et une lésion infranodale infra-hissienne"
    ],
    correctAnswers: [4],
    explanation: "Un BBD + HAG est un bibloc (B), mais c'est aussi, par définition, une lésion infra-hissienne (D) car il touche deux des trois faisceaux du système de conduction sous le His. On parle de bloc trifasciculaire lorsque les trois faisceaux sont atteints.",
    clinicalPearl: "Bibloc le plus fréquent : BBD + Hémibloc antérieur gauche (HAG)."
  },
  {
    id: 'q-cond-10',
    courseId: 'crs-troubles-conduction',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le symptôme cardinal évoquant une syncope d'origine rythmique ?",
    options: [
      "A) Prodrome avec sueurs et nausées",
      "B) Convulsions et morsure de langue",
      "C) Perte de connaissance brutale sans prodrome, récupération rapide",
      "D) Phase post-critique confuse",
      "E) Céphalées pulsatiles"
    ],
    correctAnswers: [2],
    explanation: "La syncope rythmique (par exemple, lors d'un BAV complet ou d'une pause sinusale) est typiquement brutale, sans signe avant-coureur (prodrome), et la récupération est rapide et complète. Les prodromes (A) ou les signes neurologiques (B, D) sont plus évocateurs d'une crise épileptique ou d'une syncope vasovagale.",
    clinicalPearl: "Syncope d'Adams-Stokes = Chute à l'emporte-pièce sans aucun prodrome avec récupération lucide immédiate."
  },
  {
    id: 'q-cond-11',
    courseId: 'crs-troubles-conduction',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans un infarctus inférieur, quel type de bloc est le plus fréquemment observé et généralement transitoire ?",
    options: [
      "A) BAV du 3e degré infranodal",
      "B) BAV du 2e degré type Mobitz II",
      "C) BAV du 2e degré type Mobitz I (Wenckebach)",
      "D) Bloc de branche gauche complet",
      "E) Bloc sino-auriculaire du 3e degré"
    ],
    correctAnswers: [2],
    explanation: "L'IDM inférieur, par ischémie du nœud AV (vascularisation par l'artère coronaire droite), provoque typiquement un BAV Mobitz I (Wenckebach), souvent transitoire et de bon pronostic. Le Mobitz II (B) ou le BAV complet infranodal (A) sont plus rares et de pronostic plus sévère.",
    clinicalPearl: "IDM inférieur = BAV nodal (Mobitz I ou BAV complet à échappement haut), souvent régressif."
  },
  {
    id: 'q-cond-12',
    courseId: 'crs-troubles-conduction',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel traitement est le plus approprié en urgence pour un BAV symptomatique lié à un IDM inférieur ?",
    options: [
      "A) Amiodarone IV",
      "B) Atropine IV",
      "C) Digitalique",
      "D) Bêta-bloquant",
      "E) Cardioversion électrique"
    ],
    correctAnswers: [1],
    explanation: "L'atropine, en antagonisant le tonus vagal, est très efficace dans les blocs nodaux, fréquents dans l'IDM inférieur. Les autres options sont contre-indiquées ou inefficaces : l'amiodarone (A) peut être pro-arythmogène, les digitaliques (C) et bêta-bloquants (D) aggravent la conduction AV, et la cardioversion (E) est inutile en l'absence de tachyarythmie.",
    clinicalPearl: "Bradycardie/BAV nodal aigu post-IDM inférieur = Atropine IV 0.5 à 1 mg."
  },
  {
    id: 'q-cond-13',
    courseId: 'crs-troubles-conduction',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une pause > 3 secondes sur un Holter ECG, sans onde P, évoque :",
    options: [
      "A) Un BAV du 2e degré",
      "B) Un bloc sino-auriculaire du 3e degré ou un arrêt sinusal",
      "C) Une fibrillation auriculaire",
      "D) Un BAV du 1er degré",
      "E) Un bloc de branche"
    ],
    correctAnswers: [1],
    explanation: "Une pause prolongée sans onde P précédente signifie que le nœud sinusal n'a pas émis d'impulsion. Il s'agit soit d'un arrêt sinusal, soit d'un bloc sino-auriculaire du 3e degré (où l'impulsion est bloquée sans pouvoir dépolariser les oreillettes). Un BAV (A) montre des ondes P non conduites.",
    clinicalPearl: "Pause sans onde P = Dysfonction sinusale (Arrêt sinusal ou BSA de haut degré)."
  },
  {
    id: 'q-cond-14',
    courseId: 'crs-troubles-conduction',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un BAV complet avec un rythme d'échappement à QRS fins et FC à 50/min suggère un siège :",
    options: [
      "A) Infranodal",
      "B) Nodal",
      "C) Sino-auriculaire",
      "D) Intra-hissien",
      "E) Ventriculaire"
    ],
    correctAnswers: [1],
    explanation: "Un rythme d'échappement jonctionnel (QRS fins, FC 40-60/min) suggère que le bloc est situé au niveau du nœud AV (nodal), laissant la commande à la jonction AV. Un bloc infranodal (A) donne un échappement ventriculaire lent à QRS larges.",
    clinicalPearl: "Échappement à QRS fins à 40-60/min = Siège nodal intra-nodal de meilleur pronostic."
  },
  {
    id: 'q-cond-15',
    courseId: 'crs-troubles-conduction',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la cause la plus fréquente de dysfonction sinusale chronique chez le sujet âgé ?",
    options: [
      "A) Ischémie coronarienne aiguë",
      "B) Hyperkaliémie",
      "C) Dégénérescence idiopathique fibrotique du nœud sinusal",
      "D) Surdosage en bêta-bloquants",
      "E) Péricardite"
    ],
    correctAnswers: [2],
    explanation: "Chez le sujet âgé, la cause la plus fréquente de dysfonction sinusale chronique (maladie de l'oreillette) est une dégénérescence fibreuse idiopathique du nœud sinusal et du tissu de conduction atrial. Les autres causes (A, B, D, E) sont plutôt aiguës et réversibles.",
    clinicalPearl: "1ère cause chronique chez le sujet âgé = Dégénérescence fibreuse (maladie de Lenègre ou de Lev)."
  },
  {
    id: 'q-cond-16',
    courseId: 'crs-troubles-conduction',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un BAV 2:1 peut être difficile à classer. Quel élément est en faveur d'un siège NODAL ?",
    options: [
      "A) QRS larges",
      "B) Intervalle PR court (< 160 ms) sur les complexes conduits",
      "C) Présence de séquences de Wenckebach à d'autres moments",
      "D) Rythme d'échappement ventriculaire",
      "E) Ondes T amples"
    ],
    correctAnswers: [2],
    explanation: "La présence de périodes de Wenckebach (Mobitz I) ailleurs sur le tracé indique une labilité de la conduction au niveau du nœud AV, orientant vers une origine nodale pour le bloc 2:1. Un QRS large (A) ou un PR court (B) orientent vers un siège infranodal.",
    clinicalPearl: "Bloc 2:1 avec Wenckebach enregistré = Siège nodal."
  },
  {
    id: 'q-cond-17',
    courseId: 'crs-troubles-conduction',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'atropine est contre-indiquée dans quel type de bloc ?",
    options: [
      "A) BAV du 1er degré asymptomatique",
      "B) BAV du 2e degré type Mobitz I post-IDM inférieur",
      "C) BAV du 2e degré type Mobitz II ou bloc infranodal",
      "D) Pause sinusale",
      "E) Bradycardie sinusale"
    ],
    correctAnswers: [2],
    explanation: "L'atropine, en augmentant la fréquence des impulsions atriales, peut aggraver un bloc infranodal (Mobitz II) en augmentant le degré du bloc. Elle est efficace dans les blocs nodaux (B).",
    clinicalPearl: "Contre-indication : Atropine dans le Mobitz II infranodal (accélère les oreillettes et aggrave le blocage infra-hissien)."
  },
  {
    id: 'q-cond-18',
    courseId: 'crs-troubles-conduction',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"bloc de haut degré\" est défini par :",
    options: [
      "A) Un allongement du PR > 300 ms",
      "B) Plus d'ondes P bloquées que conduites (ex: 3:1)",
      "C) La présence d'un rythme d'échappement",
      "D) Une dissociation AV complète",
      "E) Des QRS toujours larges"
    ],
    correctAnswers: [1],
    explanation: "Un bloc AV de haut degré est défini par la conduction de seulement une onde P sur trois ou plus (bloc 3:1, 4:1, etc.). C'est un stade précurseur au BAV complet (D).",
    clinicalPearl: "BAV de haut degré : Au moins deux ondes P consécutives bloquées (ex : 3:1, 4:1)."
  },
  {
    id: 'q-cond-19',
    courseId: 'crs-troubles-conduction',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient avec un BBD et un HAG a un risque accru d'évoluer vers :",
    options: [
      "A) Une tachycardie ventriculaire",
      "B) Un BAV complet",
      "C) Une fibrillation auriculaire",
      "D) Un syndrome de WPW",
      "E) Un BAV du 1er degré"
    ],
    correctAnswers: [1],
    explanation: "Un bibloc (BBD + HAG) signifie que deux des trois faisceaux sont lésés. Si le troisième faisceau (Hémibloc Postérieur Gauche) se bloque, il en résulte un BAV complet infranodal, d'où le risque accru et l'indication potentielle de stimulateur cardiaque.",
    clinicalPearl: "BBD + HAG (deux branches coupées) : risque majeur de BAV complet si la 3e branche lâche."
  },
  {
    id: 'q-cond-20',
    courseId: 'crs-troubles-conduction',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel médicament peut provoquer des troubles de la conduction à dose toxique ?",
    options: [
      "A) Paracétamol",
      "B) Digoxine",
      "C) Vitamine C",
      "D) Oméprazole",
      "E) Salbutamol"
    ],
    correctAnswers: [1],
    explanation: "La digoxine, à dose toxique, est une cause classique de troubles de la conduction AV, allant du BAV du 1er degré au BAV complet, en passant par le bloc 2:1. C'est une urgence thérapeutique spécifique.",
    clinicalPearl: "Intoxication digitalique : Bloqueur nodal majeur induisant BAV I, II ou III."
  },
  {
    id: 'q-cond-21',
    courseId: 'crs-troubles-conduction',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence d'un bloc bifasciculaire impose de rechercher :",
    options: [
      "A) Un BAV du 1er degré",
      "B) Un BAV du 2e degré",
      "C) Un BAV du 3e degré",
      "D) Un allongement de l'espace QT",
      "E) Une onde Delta"
    ],
    correctAnswers: [0],
    explanation: "La présence d'un bloc bifasciculaire + BAV du 1er degré constitue un bloc trifasciculaire incomplet, ce qui est un indicateur fort pour un risque de progression vers un BAV complet et une indication de stimulation cardiaque.",
    clinicalPearl: "Bibloc + PR long = Bloc trifasciculaire incomplet (très haut risque syncope)."
  },
  {
    id: 'q-cond-22',
    courseId: 'crs-troubles-conduction',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un rythme jonctionnel accéléré peut masquer un :",
    options: [
      "A) Bloc de branche",
      "B) BAV du 1er degré",
      "C) BAV du 3e degré",
      "D) BAV du 2e degré",
      "E) Flutter atrial"
    ],
    correctAnswers: [2],
    explanation: "En cas de BAV complet, si le rythme d'échappement jonctionnel est rapide (50-60/min), il peut y avoir une coïncidence fortuite entre les ondes P et les QRS, pouvant faire méconnaître la dissociation auriculo-ventriculaire. Il faut savoir le rechercher attentivement.",
    clinicalPearl: "Piège ECG : Un rythme d'échappement accéléré peut mimer une conduction normale."
  },
  {
    id: 'q-cond-23',
    courseId: 'crs-troubles-conduction',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la première étape diagnostique face à une syncope inexpliquée ?",
    options: [
      "A) IRM cérébrale",
      "B) Épreuve d'effort",
      "C) ECG standard",
      "D) Coronarographie",
      "E) Ponction lombaire"
    ],
    correctAnswers: [2],
    explanation: "L'ECG standard est l'examen de première intention, simple et rapide, pouvant révéler un trouble de conduction évident (BAV, pause, bloc de branche sévère) orientant immédiatement la prise en charge.",
    clinicalPearl: "Examen clé de 1ère ligne devant TOUTE syncope = ECG 12 dérivations de repos."
  },
  {
    id: 'q-cond-24',
    courseId: 'crs-troubles-conduction',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un BAV complet lors d'une fibrillation auriculaire se traduit par :",
    options: [
      "A) Une fréquence ventriculaire rapide et irrégulière",
      "B) Une fréquence ventriculaire lente et régulière",
      "C) L'absence d'ondes P",
      "D) Des complexes QRS très larges",
      "E) Des ondes T inversées"
    ],
    correctAnswers: [1],
    explanation: "En cas de FA avec BAV complet, les impulsions atriales chaotiques sont bloquées. Les ventricules sont pilotés par un foyer d'échappement jonctionnel ou ventriculaire, d'où une réponse ventriculaire lente et régulière sur l'ECG, ce qui est un paradoxe apparent.",
    clinicalPearl: "Paradoxe de la FA lente et régulière = BAV complet sous-jacent (échappement autonome)."
  },
  {
    id: 'q-cond-25',
    courseId: 'crs-troubles-conduction',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'indication formelle à la pose d'un pacemaker définitif est :",
    options: [
      "A) Tout BAV du 1er degré",
      "B) BAV du 2e degré type Mobitz I asymptomatique",
      "C) BAV du 3e degré symptomatique",
      "D) Bloc de branche droit isolé asymptomatique",
      "E) Bradycardie sinusale nocturne physiologique"
    ],
    correctAnswers: [2],
    explanation: "Un BAV du 3e degré symptomatique (syncopes, insuffisance cardiaque, etc.) est une indication formelle et de classe I pour un stimulateur cardiaque définitif. Les autres situations (A, B, D, E) ne le sont pas, ou seulement dans des circonstances très spécifiques.",
    clinicalPearl: "Indication formelle Classe I : BAV 3 symptomatique ou BAV infranodal Mobitz II."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-cond-01',
    courseId: 'crs-troubles-conduction',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Le malaise du retraité\nM. Ahmed, 72 ans, diabétique et hypertendu, consulte pour un épisode de \"voile noir\" suivi d'une chute sans perte de connaissance totale. L'ECG montre un rythme sinusal à 75/min, PR 220 ms, BBD complet et onde Q en dérivations latérales.\nQ1 : Quel est le diagnostic syndromique le plus probable devant son malaise ?",
    options: [
      "A) Accident vasculaire cérébral",
      "B) Crise d'épilepsie partielle",
      "C) Syncope réflexe vasovagale",
      "D) Malaise d'origine rythmique (brachyarythmie)",
      "E) Hypoglycémie"
    ],
    correctAnswers: [3],
    explanation: "Malaise d'origine rythmique (brachyarythmie). La triade : âge, symptômes de type lipothymie (\"voile noir\"), et ECG montrant un bibloc (BBD + BAV 1er degré implicite) est très évocatrice d'un trouble de conduction sévère à risque de progression vers un BAV complet et de malaises rythmiques.",
    clinicalPearl: "Lipothymie + Bibloc à l'ECG = Maladie du système de conduction His-Purkinje."
  },
  {
    id: 'cas-cond-02',
    courseId: 'crs-troubles-conduction',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'infarctus inférieur\nMme Fatima, 60 ans, est admise pour un IDM inférieur. Son ECG initial montre un BAV du 2e degré type Wenckebach.\nQ1 : Quelle est la conduite à tenir IMMÉDIATE concernant ce trouble conductif ?",
    options: [
      "A) Pose urgente d'un pacemaker définitif",
      "B) Injection IV d'Atropine",
      "C) Simple surveillance, car souvent transitoire",
      "D) Cardioversion électrique",
      "E) Injection IV d'Amiodarone"
    ],
    correctAnswers: [2],
    explanation: "Simple surveillance, car souvent transitoire. Le BAV Wenckebach dans l'IDM inférieur est fréquent, souvent transitoire, lié à l'œdème et l'ischémie du nœud AV. Une simple surveillance est généralement suffisante. L'atropine (B) peut être utilisée s'il devient symptomatique.",
    clinicalPearl: "BAV Mobitz I dans l'IDM inférieur : surveillance simple car spontanément régressif en quelques jours."
  },
  {
    id: 'cas-cond-03',
    courseId: 'crs-troubles-conduction',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La chute inexpliquée\nUn homme de 80 ans est hospitalisé après une chute. Le monitoring cardiaque montre des épisodes de FA rapide alternant avec des pauses de 4 secondes.\nQ1 : Quel diagnostic évoquez-vous ?",
    options: [
      "A) BAV paroxystique",
      "B) Maladie de l'oreillette (Syndrome brady-tachycardie)",
      "C) Hyperthyroïdie",
      "D) Embolie pulmonaire",
      "E) Torsade de pointe"
    ],
    correctAnswers: [1],
    explanation: "Maladie de l'oreillette (Syndrome brady-tachycardie). L'alternance de tachycardie (FA) et de pauses sinusales prolongées (post-tachycardie) est caractéristique du syndrome brady-tachycardie, une forme de maladie de l'oreillette par dysfonction sinusale.",
    clinicalPearl: "FA rapide + pauses sinusales prolongées = Maladie de l'oreillette (indication à un stimulateur cardiaque avant tout traitement ralentisseur)."
  },
  {
    id: 'cas-cond-04',
    courseId: 'crs-troubles-conduction',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Le bilan systématique\nL'ECG d'un patient de 50 ans, asymptomatique, révèle un BBD complet et un HAG.\nQ1 : Quelle investigation complémentaire est la plus importante ?",
    options: [
      "A) Épreuve d'effort",
      "B) Holter ECG de 24 heures",
      "C) Mesure de l'intervalle PR sur un ECG de bonne qualité",
      "D) Coronarographie",
      "E) IRM cardiaque"
    ],
    correctAnswers: [2],
    explanation: "Mesure de l'intervalle PR sur un ECG de bonne qualité. Chez un patient avec un bibloc (BBD + HAG), la recherche d'un BAV du 1er degré (PR long) est capitale. S'il est présent, cela constitue un bloc trifasciculaire incomplet, modifiant le pronostic et la prise en charge.",
    clinicalPearl: "Devant un bibloc : toujours mesurer avec minutie l'espace PR pour dépister un bloc trifasciculaire."
  },
  {
    id: 'cas-cond-05',
    courseId: 'crs-troubles-conduction',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : L'urgence médicamenteuse\nUn patient traité par Digoxine pour une FA présente des nausées et un ECG montre un bloc 2:1 avec un PR court et des QRS larges.\nQ1 : Quelle est la cause la plus probable et la conduite à tenir ?",
    options: [
      "A) IDM ; faire une coronarographie en urgence",
      "B) Hyperkaliémie ; administrer du Calcium",
      "C) Toxicité digitalique ; arrêter la Digoxine",
      "D) Hypokaliémie ; supplémenter en Potassium",
      "E) Péricardite ; prescrire des AINS"
    ],
    correctAnswers: [2],
    explanation: "Toxicité digitalique ; arrêter la Digoxine. La triade : traitement par digitaliques, symptômes digestifs (nausées) et troubles de conduction (bloc 2:1 infranodal) est hautement évocatrice d'une intoxication digitalique. La première mesure est l'arrêt immédiat du médicament.",
    clinicalPearl: "Nausées + BAV sous digoxine = Intoxication digitalique jusqu'à preuve du contraire."
  }
];
