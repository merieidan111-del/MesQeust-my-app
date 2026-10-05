import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 16: DIAGNOSTIC HISTOLOGIQUE DES LYMPHOMES - Pr Bennoui
// ==========================================
export const HEMATO_LESSON_16_QUESTIONS: Question[] = [
  {
    id: 'q-hem-16-01',
    courseId: 'crs-hemato-16',
    questionNumber: 1,
    type: 'QCM',
    content: "La règle technique fondamentale incontournable pour porter le diagnostic histopathologique de certitude d'un lymphome est :",
    options: [
      "A) La biopsie chirurgicale d'exérèse d'un ganglion lymphatique entier acheminé à l'état frais",
      "B) La ponction cytologique à l'aiguille fine isolée",
      "C) Le frottis sanguin coloré au MGG",
      "D) La biopsie cutanée superficielle",
      "E) L'aspiration de moelle osseuse seule"
    ],
    correctAnswers: [0],
    explanation: "Le diagnostic histologique de certitude des lymphomes nécessite l'analyse de l'architecture ganglionnaire globale (préservée, effacée, nodulaire ou diffuse), complétée par l'immunohistochimie sur coupes et des prélèvements congelés pour la biologie moléculaire. La ponction cytologique ne permet pas l'analyse architecturale et est formellement insuffisante.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-02',
    courseId: 'crs-hemato-16',
    questionNumber: 2,
    type: 'QCM',
    content: "Le fixateur histologique de référence universellement recommandé pour l'analyse anatomopathologique standard du tissu ganglionnaire est :",
    options: [
      "A) Le formol neutre tamponné à 10% (ou 4% de formaldéhyde)",
      "B) L'alcool à 90°",
      "C) Le liquide de Bouin acide",
      "D) Le sérum physiologique glacé",
      "E) L'acide picrique pur"
    ],
    correctAnswers: [0],
    explanation: "Le formol tamponné à 10% est le fixateur de choix pour l'histologie et l'immunohistochimie. Le liquide de Bouin est aujourd'hui proscrit car son acidité altère l'ADN et empêche la réalisation des techniques de biologie moléculaire (PCR, séquençage NGS).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-03',
    courseId: 'crs-hemato-16',
    questionNumber: 3,
    type: 'QCM',
    content: "L'antigène leucocytaire commun (LCA), exprimé par la quasi-totalité des cellules hématopoïétiques et lymphoïdes (permettant d'éliminer un carcinome ou un mélanome), correspond à :",
    options: [
      "A) CD45",
      "B) CD20",
      "C) CD3",
      "D) CD30",
      "E) CD15"
    ],
    correctAnswers: [0],
    explanation: "Le CD45 (LCA = Leukocyte Common Antigen) est la molécule pan-leucocytaire clé en immunohistochimie. Un contingent tumoral CD45+ affirme l'origine lymphoïde ou hématopoïétique et élimine les métastases de carcinome (cytokératines+) ou mélanome (PS100+, HMB45+).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-04',
    courseId: 'crs-hemato-16',
    questionNumber: 4,
    type: 'QCM',
    content: "Pour affirmer l'appartenance d'une prolifération lymphomateuse à la lignée B, le marqueur pan-B de surface le plus utilisé en routine immunohistochimique est :",
    options: [
      "A) Le CD20 (et/ou CD79a, CD19, PAX5)",
      "B) Le CD3",
      "C) Le CD56",
      "D) La myéloperoxydase (MPO)",
      "E) Le CD68"
    ],
    correctAnswers: [0],
    explanation: "Le CD20 (phosphoprotéine transmembranaire) est le marqueur pan-B par excellence, présent du stade pré-B mature jusqu'aux lymphocytes B matures (perdu au stade plasmocyte). CD79a et PAX5 sont également d'excellents marqueurs de la lignée B.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-05',
    courseId: 'crs-hemato-16',
    questionNumber: 5,
    type: 'QCM',
    content: "Le marqueur pan-T spécifique dont l'expression intracytoplasmique ou membranaire affirme l'origine lymphoïde T est :",
    options: [
      "A) Le CD3",
      "B) Le CD20",
      "C) Le CD10",
      "D) Le CD138",
      "E) Le CD34"
    ],
    correctAnswers: [0],
    explanation: "Le CD3 fait partie intégrante du complexe récepteur des cellules T (TCR). Il est le marqueur d'orientation de lignée T le plus fidèle et le plus spécifique en anatomopathologie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-06',
    courseId: 'crs-hemato-16',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans le centre germinatif physiologique, les lymphocytes B folliculaires sains expriment normalement BCL-6 et CD10 mais N'EXPRIMENT PAS la protéine anti-apoptotique :",
    options: [
      "A) BCL-2",
      "B) CD19",
      "C) CD20",
      "D) PAX5",
      "E) IgM de surface"
    ],
    correctAnswers: [0],
    explanation: "Dans les centres germinatifs normaux réactifs, BCL-2 est NÉGATIF (permettant la mort par apoptose des cellules B non sélectionnées). L'expression anormale de BCL-2 au sein des follicules néoformés est la signature immunohistochimique pathognomonique du lymphome folliculaire (conséquence de la translocation t(14;18)).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-07',
    courseId: 'crs-hemato-16',
    questionNumber: 7,
    type: 'QCM',
    content: "La positivité nucléaire intense de quel marqueur immunohistochimique confirme sans équivoque le diagnostic de Lymphome du Manteau ?",
    options: [
      "A) La Cycline D1 (et/ou SOX11)",
      "B) Le CD23",
      "C) Le CD10",
      "D) Le CD30",
      "E) L'alpha-fœtoprotéine"
    ],
    correctAnswers: [0],
    explanation: "La surexpression nucléaire de la protéine Cycline D1 (gène CCND1), résultant de la translocation t(11;14)(q13;q32), est le marqueur de certitude diagnostique du lymphome à cellules du manteau. Le facteur de transcription SOX11 est également un marqueur spécifique très utile dans les rares formes Cycline D1 négatives.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-08',
    courseId: 'crs-hemato-16',
    questionNumber: 8,
    type: 'QCM',
    content: "Le profil immunohistochimique classique des cellules de Reed-Sternberg dans le Lymphome de Hodgkin CLASSIQUE est :",
    options: [
      "A) CD30+, CD15+, CD20 négatif ou hétérogène faible, CD45 négatif",
      "B) CD20+, CD45+, CD30 négatif, CD15 négatif",
      "C) CD3+, CD4+, CD8-",
      "D) CD138+, CD56+, CD19 négatif",
      "E) CD34+, TdT+"
    ],
    correctAnswers: [0],
    explanation: "Dans le LH classique, les volumineuses cellules de Reed-Sternberg sont CD30+ (100%), CD15+ (70-85%), négatives pour CD45 (LCA), et le plus souvent négatives pour les marqueurs B classiques (CD20- ou très faible).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-09',
    courseId: 'crs-hemato-16',
    questionNumber: 9,
    type: 'QCM',
    content: "Le Lymphome de Hodgkin nodulaire à prédominance lymphocytaire (NLPHL, paragranulome de Poppema) se distingue du Hodgkin classique par :",
    options: [
      "A) Des cellules 'en pop-corn' (cellules LP) qui sont CD20+, CD45 (LCA)+, CD30 négatives et CD15 négatives",
      "B) Des cellules de Reed-Sternberg CD30+ et CD15+",
      "C) Une prolifération de cellules T matures",
      "D) Une absence totale de lymphocytes réactifs",
      "E) Une transmission génétique autosomique dominante"
    ],
    correctAnswers: [0],
    explanation: "Le NLPHL (paragranulome de Poppema) est une entité distincte : les cellules tumorales (cellules LP ou cellules 'en pop-corn') ont conservé un immunophénotype B mature complet (CD20+, CD79a+, CD45+, BCL6+) et sont négatives pour CD30 et CD15.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-10',
    courseId: 'crs-hemato-16',
    questionNumber: 10,
    type: 'QCM',
    content: "L'anticorps Ki-67 (ou MIB-1) évalue en immunohistochimie :",
    options: [
      "A) La fraction de cellules en cours de cycle cellulaire (index de prolifération tumorale)",
      "B) Le taux d'apoptose spontanée",
      "C) L'expression des récepteurs hormonaux",
      "D) Le degré de nécrose tissulaire",
      "E) L'origine embryologique de la tumeur"
    ],
    correctAnswers: [0],
    explanation: "Le Ki-67 est un antigène nucléaire présent dans toutes les phases actives du cycle cellulaire (G1, S, G2, M) mais absent en phase de repos G0. Un index Ki-67 proche de 100% est caractéristique du lymphome de Burkitt.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-11',
    courseId: 'crs-hemato-16',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans le diagnostic histopathologique du lymphome folliculaire, le système de gradation cytologique (grades 1, 2, 3A, 3B de l'OMS) repose sur :",
    options: [
      "A) Le nombre moyen de centroblastes par champ à fort grandissement (CFG)",
      "B) La taille globale du ganglion en centimètres",
      "C) La présence de fibrose capsulaire",
      "D) Le taux sérique de LDH",
      "E) L'âge du patient au moment du diagnostic"
    ],
    correctAnswers: [0],
    explanation: "Le grading du lymphome folliculaire est basé sur le comptage des grandes cellules nucléolées (centroblastes) dans 10 champs au fort grossissement : Grade 1 (0-5 centroblastes/champ), Grade 2 (6-15), Grade 3A (> 15 avec centrocytes résiduels), Grade 3B (nappes continues de centroblastes, traité comme un LDGCB).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-12',
    courseId: 'crs-hemato-16',
    questionNumber: 12,
    type: 'QCM',
    content: "La lésion histologique élémentaire caractéristique des lymphomes de la zone marginale de type MALT (muqueuses) est :",
    options: [
      "A) La lésion lympho-épithéliale (infiltration et destruction de l'épithélium glandulaire par les lymphocytes tumoraux)",
      "B) Le nodule de fibrose concentrique à cellules fusiformes",
      "C) Le granulome caséeux tuberculoïde",
      "D) Le corps d'Auer intracytoplasmique",
      "E) La calcification lamellaire en psammome"
    ],
    correctAnswers: [0],
    explanation: "La lésion lympho-épithéliale (invasion et effraction de l'épithélium des glandes muqueuses gastriques ou salivaires par des agrégats de lymphocytes B de type centrocytique) est la marque histologique spécifique des lymphomes du MALT.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-13',
    courseId: 'crs-hemato-16',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans le lymphome anaplasique à grandes cellules (ALCL, lymphome T), l'expression de quelle protéine de fusion par translocation t(2;5) confère un excellent pronostic chez le sujet jeune ?",
    options: [
      "A) La protéine ALK (Anaplastic Lymphoma Kinase, ALK-positif)",
      "B) La protéine HER2",
      "C) La protéine BCR-ABL",
      "D) La protéine PML-RARA",
      "E) La protéine c-KIT"
    ],
    correctAnswers: [0],
    explanation: "Le lymphome anaplasique à grandes cellules (ALCL) T/null est caractérisé par des cellules géantes pléomorphes CD30+. La forme ALK-positive (due à la fusion NPM-ALK par t(2;5)) touche l'enfant et l'adulte jeune et a un taux de guérison > 80% sous chimiothérapie, bien supérieur aux formes ALK-négatives.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-14',
    courseId: 'crs-hemato-16',
    questionNumber: 14,
    type: 'QCM',
    content: "La technique de biologie moléculaire permettant de prouver la monoclonalité d'une prolifération lymphoïde suspecte en cas de doute histologique repose sur :",
    options: [
      "A) La recherche du réarrangement clonal des gènes des immunoglobulines (IGH) pour la lignée B ou des récepteurs T (TCR) pour la lignée T par PCR",
      "B) Le caryotype constitutionnel sur fibroblastes cutanés",
      "C) L'analyse des groupes sanguins ABO",
      "D) Le dosage des acides aminés plasmatiques",
      "E) L'électrophorèse de l'hémoglobine"
    ],
    correctAnswers: [0],
    explanation: "L'analyse par PCR des réarrangements somatiques des gènes des chaînes lourdes des immunoglobulines (IGH) ou des récepteurs des lymphocytes T (TCR gamma/bêta) permet de démontrer qu'une population cellulaire provient d'un clone unique (monoclonalité = lymphome) et non d'une hyperplasie réactionnelle polyclonale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-15',
    courseId: 'crs-hemato-16',
    questionNumber: 15,
    type: 'QCM',
    content: "Le diagnostic histologique de la maladie de Waldenström repose sur la mise en évidence dans la moelle osseuse de :",
    options: [
      "A) Une infiltration lymphoplasmocytaire (lymphocytes, lymphoplasmocytes et plasmocytes) associée à un pic monoclonal d'IgM",
      "B) Une prolifération de blastes myéloïdes CD33+",
      "C) Une désertification médullaire adipeuse",
      "D) Uniquement des cellules de Gaucher",
      "E) Des mégacaryocytes nains dysplasiques"
    ],
    correctAnswers: [0],
    explanation: "La macroglobulinémie de Waldenström (lymphome lymphoplasmocytaire) est définie par une infiltration médullaire polymorphe combinant petits lymphocytes B, cellules intermédiaires lymphoplasmocytoïdes et plasmocytes matures, sécrétant une immunoglobuline monoclonale de classe IgM.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-16',
    courseId: 'crs-hemato-16',
    questionNumber: 16,
    type: 'QCM',
    content: "Quelle mutation somatique récurrente ponctuelle est retrouvée dans plus de 90-95% des cas de maladie de Waldenström ?",
    options: [
      "A) La mutation MYD88 L265P",
      "B) La mutation JAK2 V617F",
      "C) La mutation BRAF V600E",
      "D) La mutation EGFR T790M",
      "E) La mutation KRAS G12D"
    ],
    correctAnswers: [0],
    explanation: "La mutation MYD88 L265P est quasi-constante (95%) dans le lymphome lymphoplasmocytaire / maladie de Waldenström. Elle active constitutivement la voie NF-kB et la kinase BTK, justifiant l'efficacité de l'Ibrutinib.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-17',
    courseId: 'crs-hemato-16',
    questionNumber: 17,
    type: 'QCM',
    content: "La mutation somatique BRAF V600E est la signature moléculaire constante retrouvée dans presque 100% des :",
    options: [
      "A) Leucémies à tricholeucocytes (Hairy Cell Leukemia)",
      "B) Leucémies myéloïdes chroniques",
      "C) Lymphomes folliculaires",
      "D) Maladie de Hodgkin à déplétion lymphocytaire",
      "E) Aplasies médullaires toxiques"
    ],
    correctAnswers: [0],
    explanation: "La mutation BRAF V600E est retrouvée dans 98 à 100% des leucémies à tricholeucocytes. Elle est pathognomonique et permet le traitement ciblé par les inhibiteurs de BRAF (Vémurafénib) dans les formes réfractaires.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-18',
    courseId: 'crs-hemato-16',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans l'immunohistochimie de la leucémie à tricholeucocytes, quel marqueur enzymatique d'ancrage est classiquement positif et résistant à l'acide tartrique ?",
    options: [
      "A) La Phosphatase Acide Résistante au Tartrate (TRAP)",
      "B) La myéloperoxydase",
      "C) L'alvéoline",
      "D) La phosphatase alcaline leucocytaire",
      "E) La lipase pancréatique"
    ],
    correctAnswers: [0],
    explanation: "La réaction cytochimique de la TRAP (Phosphatase Acide Tartrate-Résistante) est positive dans la leucémie à tricholeucocytes. L'immunophénotype typique associe CD19+, CD20+, CD103+, CD25+, CD11c+ et Annexine A1+.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-19',
    courseId: 'crs-hemato-16',
    questionNumber: 19,
    type: 'QCM',
    content: "La biopsie ganglionnaire dans la maladie de Castleman (forme hyalino-vasculaire) montre typiquement :",
    options: [
      "A) Des follicules lymphoïdes atrophiques pénétrés par une artériole hyalinisée ('aspect en bulbe d'oignon' ou 'sucette / lollipop')",
      "B) Une nécrose caséeuse diffuse",
      "C) Une infiltration blastique diffuse effaçant la rate",
      "D) Des cellules de Sternberg en nappes continues",
      "E) Des amas d'amibes hématophages"
    ],
    correctAnswers: [0],
    explanation: "La maladie de Castleman hyalino-vasculaire montre des follicules lymphoïdes anormaux avec centres germinatifs régressés pénétrés par un vaisseau hyalinisé (aspect de sucette ou 'lollipop lesion') entouré d'une zone du manteau élargie en 'bulbe d'oignon'.",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-16-20',
    courseId: 'crs-hemato-16',
    questionNumber: 20,
    type: 'QCM',
    content: "L'anticorps anti-CD138 (Syndecan-1) est un marqueur immunohistochimique spécifique pour identifier :",
    options: [
      "A) Les cellules de la lignée plasmocytaire (plasmocytes normaux et tumoraux du myélome)",
      "B) Les cellules souches pluripotentes",
      "C) Les lymphocytes T cytotoxiques",
      "D) Les mégacaryocytes médullaires",
      "E) Les hématies falciformes"
    ],
    correctAnswers: [0],
    explanation: "Le CD138 (Syndécan-1) et le CD38 sont les marqueurs de référence identifiant les plasmocytes en immunohistochimie et cytométrie en flux, indispensables pour diagnostiquer les plasmocytomes et le myélome multiple.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-21',
    courseId: 'crs-hemato-16',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans le diagnostic histologique d'une adénite granulomateuse au décours d'une griffure de chat (Bartonella henselae), on observe typiquement :",
    options: [
      "A) Des micro-abcès étoilés nécrotiques bordés par une couronne d'histiocytes palissadiques (coloration de Warthin-Starry positive)",
      "B) Des follicules scléreux de Hodgkin",
      "C) Des inclusions virales géantes intranucléaires en 'œil de hibou'",
      "D) Des cellules en bague à chaton mucisécrétantes",
      "E) Une prolifération exclusive de polynucléaires basophiles"
    ],
    correctAnswers: [0],
    explanation: "La maladie des griffes du chat (Bartonellose) donne une adénite granulomateuse subaiguë caractérisée par des abcès folliculaires à neutrophiles à centre nécrotique étoilé entouré d'un infiltrat histiocytaire palissadique. Les bacilles sont colorés par l'argent (Warthin-Starry).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-22',
    courseId: 'crs-hemato-16',
    questionNumber: 22,
    type: 'QCM',
    content: "Pour distinguer un lymphome B à grandes cellules centro-germinatif (GCB) d'un profil non centro-germinatif (ABC / post-germinal) selon l'algorithme immunohistochimique de Hans, quels sont les 3 marqueurs analysés ?",
    options: [
      "A) CD10, BCL-6 et MUM-1",
      "B) CD3, CD4 et CD8",
      "C) CD30, CD15 et CD45",
      "D) Cycline D1, SOX11 et CD5",
      "E) Ki-67, p53 et HER2"
    ],
    correctAnswers: [0],
    explanation: "L'algorithme de Hans utilise CD10, BCL-6 et MUM-1 pour classer les LDGCB en profil 'Germinal Center B-cell-like' (GCB : pronostic plus favorable) et 'Non-GCB / Activated B-cell-like' (ABC : pronostic plus péjoratif).",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-16-23',
    courseId: 'crs-hemato-16',
    questionNumber: 23,
    type: 'QCM',
    content: "Le diagnostic histologique de lymphome 'Double-Hit' (ou High-Grade B-cell Lymphoma with MYC and BCL2/BCL6 rearrangements) impose la réalisation systématique de :",
    options: [
      "A) La cytogénétique moléculaire par FISH recherchant simultanément le réarrangement de MYC et de BCL2 (et/ou BCL6)",
      "B) Une simple coloration de Gram",
      "C) Une scintigraphie osseuse au biphosphonate",
      "D) Un ionogramme urinaire",
      "E) Une spirométrie"
    ],
    correctAnswers: [0],
    explanation: "Les lymphomes B à haut grade 'Double Hit' ou 'Triple Hit' comportent un réarrangement concomitant de c-MYC (8q24) et de BCL-2 (18q21) et/ou BCL-6 (3q27) détecté par FISH. Ils sont extrêmement agressifs et réfractaires au R-CHOP standard, nécessitant des chimiothérapies intensives (DA-EPOCH-R).",
    difficulty: 'difficile'
  },
  {
    id: 'q-hem-16-24',
    courseId: 'crs-hemato-16',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans la maladie de Hodgkin, quelle variante histologique est la plus fréquente chez les patients infectés par le VIH ou dans les pays en développement ?",
    options: [
      "A) La forme à cellularité mixte (souvent associée à l'EBV)",
      "B) La sclérose nodulaire",
      "C) Le paragranulome nodulaire de Poppema",
      "D) La forme prédominance lymphocytaire",
      "E) Le lymphome T cutané"
    ],
    correctAnswers: [0],
    explanation: "La forme à cellularité mixte (LH-CM) est retrouvée dans 20 à 30% des lymphomes de Hodgkin. Elle est fortement liée au virus EBV (> 70-80% des cas), prédomine chez les hommes d'âge moyen ou âgés, les patients infectés par le VIH et dans les pays en développement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-16-25',
    courseId: 'crs-hemato-16',
    questionNumber: 25,
    type: 'QCM',
    content: "La biopsie ostéo-médullaire (BOM) est-elle aujourd'hui systématique pour le bilan d'extension initial d'un lymphome de Hodgkin ?",
    options: [
      "A) Non, le TEP-scan au 18-FDG est plus sensible et plus spécifique que la BOM pour détecter l'envahissement médullaire focal du Hodgkin, rendant la BOM inutile si le TEP-scan est négatif",
      "B) Oui, elle reste obligatoire chez 100% des patients",
      "C) Oui, bilatérale systématique",
      "D) Elle a été remplacée par une simple prise de sang",
      "E) Elle est formellement contre-indiquée"
    ],
    correctAnswers: [0],
    explanation: "Dans le lymphome de Hodgkin classique, la TEP-TDM au 18F-FDG a une sensibilité de plus de 95% pour détecter l'atteinte médullaire osseuse. Selon les recommandations internationales de Lugano, la BOM n'est plus recommandée de routine si une TEP-scan est réalisée.",
    difficulty: 'moyen'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-16-cs1',
    courseId: 'crs-hemato-16',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Un ganglion cervical de 4 cm prélevé chirurgicalement en totalité chez un homme de 30 ans est examiné en anatomopathologie. L'architecture ganglionnaire est compartimentée par d'épaisses bandes de sclérose collagène birefringente en lumière polarisée délimitant des nodules cellulaires. Au sein de ces nodules, on observe des cellules géantes bi- ou multi-nucléées rétractées dans un espace optiquement vide (cellules lacunaires). L'immunohistochimie montre : CD30+, CD15+, CD20 négatif, CD45 négatif.\n\nQuel est le diagnostic précis ?",
    options: [
      "A) Lymphome de Hodgkin classique, forme scléronodulaire (LH-SN)",
      "B) Lymphome diffus à grandes cellules B",
      "C) Lymphome de Burkitt",
      "D) Tuberculose ganglionnaire caséeuse",
      "E) Métastase d'adénocarcinome prostatique"
    ],
    correctAnswers: [0],
    explanation: "Bandes de sclérose collagène + nodules renfermant des cellules de Reed-Sternberg de type lacunaire + phénotype CD30+, CD15+, CD45- = Lymphome de Hodgkin classique sous-type scléronodulaire (le plus fréquent, 70% des cas).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-cs2',
    courseId: 'crs-hemato-16',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Chez une femme de 58 ans présentant des polyadénopathies indolores, la biopsie ganglionnaire montre une prolifération de nombreux follicules de taille et de forme homogènes effaçant l'architecture normale, sans zone du manteau bien définie et sans polarisation. Les centres folliculaires sont constitués de petits centrocytes à noyau clivé et de quelques centroblastes. L'immunohistochimie montre une expression diffuse et anormale de BCL-2 au sein des follicules, avec CD10+ et BCL-6+.\n\nQuel est le diagnostic histopathologique ?",
    options: [
      "A) Lymphome folliculaire",
      "B) Hyperplasie folliculaire réactionnelle bénigne",
      "C) Lymphome de la zone du manteau",
      "D) Maladie de Hodgkin à déplétion lymphocytaire",
      "E) Thymome médiastinal"
    ],
    correctAnswers: [0],
    explanation: "Effacement architectural par des follicules néoplasiques denses non polarisés exprimant la protéine anti-apoptotique BCL-2 (anormale dans le centre germinatif) + CD10+ et BCL6+ = Lymphome folliculaire typique (t(14;18)).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-cs3',
    courseId: 'crs-hemato-16',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un homme de 65 ans présente des adénopathies disséminées et une polyadénomatose colique (polypes lymphomateux). La biopsie ganglionnaire montre une prolifération monomorphe de petites à moyennes cellules à noyau irrégulier indenté infiltrant la zone du manteau et diffusant dans le ganglion. L'immunohistochimie montre : CD20+, CD5+, CD23 NÉGATIF, et une positivité nucléaire intense et diffuse pour la Cycline D1.\n\nQuel lymphome diagnostiquez-vous ?",
    options: [
      "A) Lymphome à cellules du manteau (MCL)",
      "B) Leucémie lymphoïde chronique typique",
      "C) Lymphome de la zone marginale",
      "D) Lymphome lymphoblastique T",
      "E) Maladie de Waldenström"
    ],
    correctAnswers: [0],
    explanation: "Prolifération B (CD20+) exprimant le CD5 mais négative pour le CD23 (ce qui élimine formellement une LLC typique) associée à une surexpression nucléaire de la Cycline D1 = Lymphome du Manteau (MCL, lié à la t(11;14)). La polypose lymphomateuse digestive est une localisation classique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-cs4',
    courseId: 'crs-hemato-16',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 35 ans VIH positif consulte pour une volumineuse masse abdominale d'apparition explosive en 15 jours. L'analyse histopathologique montre une prolifération diffuse en nappe continue de cellules basophiles de taille moyenne avec nombreuses figures mitotiques et corps apoptotiques phagocytés par des macrophages disséminés, donnant un aspect en ciel étoilé. L'index de prolifération Ki-67 est mesuré à 100% des cellules tumorales. La FISH retrouve une translocation impliquant le locus du gène c-MYC (8q24).\n\nQuel est le diagnostic ?",
    options: [
      "A) Lymphome de Burkitt",
      "B) Lymphome folliculaire de grade 1",
      "C) Lymphome du MALT gastrique",
      "D) Sarcome de Kaposi",
      "E) Carcinome épidermoïde"
    ],
    correctAnswers: [0],
    explanation: "Image histologique en ciel étoilé + index mitotique Ki-67 à 100% + réarrangement du gène c-MYC (t(8;14)) = Lymphome de Burkitt.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-16-cs5',
    courseId: 'crs-hemato-16',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un prélèvement biopsique ganglionnaire chez un patient de 50 ans montre une prolifération diffuse effaçant complètement l'architecture. L'immunohistochimie initiale montre CD45+ et CD20-. L'anatomopathologiste poursuit l'exploration : CD3+, CD4+, CD8-, CD30+, et la protéine ALK est fortement positive dans le cytoplasme et le noyau des cellules géantes pléomorphes (cellules en fer à cheval / 'hallmark cells').\n\nQuel est le diagnostic précis et le pronostic attendu ?",
    options: [
      "A) Lymphome anaplasique à grandes cellules T, ALK-positif (excellent pronostic avec survie globale > 80% sous polychimiothérapie)",
      "B) Lymphome anaplasique ALK-négatif de très sombre pronostic",
      "C) Lymphome B diffus à grandes cellules",
      "D) Maladie de Hodgkin classique",
      "E) Leucémie aiguë myéloblastique"
    ],
    correctAnswers: [0],
    explanation: "Cellules T CD3+, CD30+ intenses avec cellules en fer à cheval (hallmark cells) et positivité de la protéine de fusion ALK (t(2;5)) = Lymphome Anaplasique à Grandes Cellules (ALCL) ALK-positif. Contrairement à la forme ALK-négative, la forme ALK-positive est chimiosensible avec un excellent pronostic sous CHOP.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_16_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-16-01',
    courseId: 'crs-hemato-16',
    type: 'resume',
    title: "Mind Map Synthèse : Diagnostic Histologique des Lymphomes",
    contentMarkdown: `# Mind Map : Histologie des Lymphomes (Pr Bennoui)

\`\`\`
                                  HISTOPATHOLOGIE DES LYMPHOMES
                                                │
         ┌──────────────────────────────────────┼──────────────────────────────────────┐
         ▼                                      ▼                                      ▼
CONDITIONS TECHNIQUES                   MARQUEURS DE LIGNÉE                    ENTITÉS MAJEURES
- **Biopsie chirurgicale entière**      - Pan-leucocytaire : **CD45 (LCA)**    - **Hodgkin classique** :
  (Ponction aiguille fine INSUFFISANTE) - Pan-B : **CD20**, CD79a, PAX5          Reed-Sternberg CD30+, CD15+, CD45-
- Fixation : **Formol tamponné 10%**    - Pan-T : **CD3**, CD2, CD5, CD7       - **Folliculaire** : BCL-2(+), CD10, t(14;18)
  (Bouin formellement INTERDIT)         - Plasmocytes : **CD138**, CD38        - **Manteau** : Cycline D1(+), CD5+, CD23-
- Congélation état frais pour biomol                                           - **Burkitt** : Ciel étoilé, Ki-67 = 100%, c-MYC
\`\`\`

## Panneau Immunohistochimique Récapitulatif :
| Pathologie | CD45 | CD20 | CD3 | CD30 | CD15 | Marqueur spécifique |
|---|---|---|---|---|---|---|
| **LH Classique** | Négatif | - / Faible | - | **Positif** | **Positif** | Cellules de Reed-Sternberg |
| **LH Paragranulome (Poppema)** | **Positif** | **Positif** | - | Négatif | Négatif | Cellules LP "en pop-corn" |
| **LDGCB** | Positif | **Positif** | - | Variable | - | Ki-67 élevé (60-90%) |
| **Lymphome Folliculaire** | Positif | **Positif** | - | - | - | **BCL-2 (+)** dans follicules, CD10+ |
| **Lymphome du Manteau** | Positif | **Positif** | - | - | - | **Cycline D1 (+)**, SOX11(+), CD5+ |
| **Lymphome de Burkitt** | Positif | **Positif** | - | - | - | **Ki-67 100%**, c-MYC t(8;14) |
| **Lymphome Anaplasique T** | Positif | - | **Positif** | **Positif** | - | **ALK (+)** t(2;5) |`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-16-02',
    courseId: 'crs-hemato-16',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Immunohistochimie des Lymphomes",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Ponction cytologique vs Biopsie** :
   - TOUJOURS proscrire la ponction à l'aiguille fine pour affirmer un lymphome initial ! Il faut une **biopsie chirurgicale complète d'un ganglion**.
2. **Liquide de Bouin** :
   - STRICTEMENT INTERDIT car il détruit l'ADN et empêche la PCR et la biologie moléculaire.
3. **BCL-2 dans le centre germinatif** :
   - Normalement BCL-2 est NÉGATIF dans les centres germinatifs sains réactifs.
   - S'il est **POSITIF dans les follicules**, c'est formellement un **lymphome folliculaire**.
4. **Manteau vs LLC** :
   - LLC : CD5+, CD23+, Cycline D1 NÉGATIF.
   - Manteau : CD5+, CD23 NÉGATIF, **Cycline D1 POSITIF**.
5. **Hodgkin classique vs Poppema** :
   - Classique : CD30+, CD15+, CD45-, CD20-.
   - Poppema (NLPHL) : CD30-, CD15-, **CD45+**, **CD20+** (cellules pop-corn).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 17: EFFETS SECONDAIRES DES TRAITEMENTS EN ONCOLOGIE - Dr Mouaici
// ==========================================
export const HEMATO_LESSON_17_QUESTIONS: Question[] = [
  {
    id: 'q-hem-17-01',
    courseId: 'crs-hemato-17',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans la classification chronologique des Nausées et Vomissements Induits par la Chimiothérapie (NVIC), les nausées aiguës surviennent :",
    options: [
      "A) Dans les 24 premières heures suivant l'administration de la chimiothérapie (pic vers 5-6 heures)",
      "B) Entre J2 et J5 après la cure",
      "C) Avant même l'administration de la chimiothérapie",
      "D) Uniquement après 3 semaines",
      "E) Uniquement chez l'enfant"
    ],
    correctAnswers: [0],
    explanation: "Nausées/vomissements aigus : débutent dans les 24 premières heures post-chimiothérapie (médiés principalement par la sérotonine et les récepteurs 5-HT3). Retardés : après 24 heures (J2 à J5, médiés par la substance P et les récepteurs NK1). Anticipés : réflexe conditionné avant l'injection.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-02',
    courseId: 'crs-hemato-17',
    questionNumber: 2,
    type: 'QCM',
    content: "Quel anticancéreux cytotoxique conventionnel possède le potentiel émétisant le plus puissant (hautement émétisant > 90% sans prophylaxie) ?",
    options: [
      "A) Le Cisplatine (à dose ≥ 50 mg/m²)",
      "B) La Bléomycine",
      "C) Le Méthotrexate faible dose",
      "D) Le 5-Fluorouracile (5-FU)",
      "E) La Vincristine"
    ],
    correctAnswers: [0],
    explanation: "Le Cisplatine est la molécule de référence hautement émétisante (> 90% de risque de vomissements sévères sans prophylaxie), avec la dacarbazine, la streptozocine et l'association anthracycline + cyclophosphamide (AC).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-03',
    courseId: 'crs-hemato-17',
    questionNumber: 3,
    type: 'QCM',
    content: "La prophylaxie standard recommandée des nausées et vomissements pour une chimiothérapie hautement émétisante associe une quadrithérapie associant :",
    options: [
      "A) Un antagoniste 5-HT3 (Sétron) + Dexaméthasone + Un antagoniste NK1 (Aprépitant) + Olanzapine",
      "B) Paracétamol + Ibuprofène + Morphine + Oméprazole",
      "C) Métoclopramide seul à faible dose",
      "D) Amoxicilline + Gentamicine + Corticoïde",
      "E) Atropine + Scopolamine seules"
    ],
    correctAnswers: [0],
    explanation: "Les recommandations internationales (ASCO, ESMO, MASCC) pour les protocoles hautement émétisants préconisent l'association d'un anti-5HT3 (Ondansétron/Granisétron), d'un corticoïde (Dexaméthasone), d'un anti-NK1 (Aprépitant/Nétupitant) et d'un neuroleptique atypique (Olanzapine).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-17-04',
    courseId: 'crs-hemato-17',
    questionNumber: 4,
    type: 'QCM',
    content: "Quelle classe médicamenteuse est la plus efficace pour prévenir et traiter les nausées et vomissements 'anticipés' (réflexe Pavlovien conditionné par l'anxiété) ?",
    options: [
      "A) Les benzodiazépines (ex: Lorazépam / Alprazolam) prises la veille et le matin de la cure",
      "B) Les antibiotiques macrolides",
      "C) Les diurétiques de l'anse",
      "D) Les anti-inflammatoires non stéroïdiens",
      "E) Les suppléments de potassium"
    ],
    correctAnswers: [0],
    explanation: "Les vomissements anticipés sont d'origine psychologique et mnésique. Les antiémétiques usuels sont inefficaces. La prise en charge repose sur les anxiolytiques benzodiazépines (Lorazépam) et les thérapies comportementales/relaxation.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-05',
    courseId: 'crs-hemato-17',
    questionNumber: 5,
    type: 'QCM',
    content: "La cardiotoxicité classique des anthracyclines (Doxorubicine, Daunorubicine, Épirubicine) est caractérisée par :",
    options: [
      "A) Une cardiomyopathie dilatée avec insuffisance cardiaque congestive irréversible liée à la dose cumulative totale (stress oxydatif et lésions mitochondriales myocardiques)",
      "B) Une péricardite aiguë constrictive systématique",
      "C) Un rétrécissement mitral rhumatismal",
      "D) Une dysfonction systolique systématiquement réversible à l'arrêt",
      "E) Une myocardite auto-immune aiguë"
    ],
    correctAnswers: [0],
    explanation: "La cardiotoxicité des anthracyclines (type I) est dose-cumulée dépendante (seuil critique > 450-550 mg/m² pour la doxorubicine), due aux radicaux libres et à l'inhibition de la topoisomérase II bêta des cardiomyocytes, entraînant une nécrose myocardique et une insuffisance cardiaque globale irréversible.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-06',
    courseId: 'crs-hemato-17',
    questionNumber: 6,
    type: 'QCM',
    content: "Quel médicament chélateur du fer permet de protéger le myocarde contre la toxicité des anthracyclines en cas de doses cumulées élevées obligatoires ?",
    options: [
      "A) Le Dexrazoxane (Cardioxane)",
      "B) La N-acétylcystéine",
      "C) Le Mesna",
      "D) L'Amifostine",
      "E) L'acide folinique"
    ],
    correctAnswers: [0],
    explanation: "Le Dexrazoxane est un cardioprotecteur spécifique qui pénètre dans les cardiomyocytes, chélate le fer intracellulaire et empêche la formation des radicaux libres toxiques générés par le complexe fer-anthracycline.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-17-07',
    courseId: 'crs-hemato-17',
    questionNumber: 7,
    type: 'QCM',
    content: "Contrairement aux anthracyclines, la cardiotoxicité du Trastuzumab (Herceptin, anti-HER2) est dite de type II car :",
    options: [
      "A) Elle n'est pas dose-dépendante, ne s'accompagne pas de nécrose ultrastructurale et est le plus souvent réversible à l'arrêt du traitement",
      "B) Elle est systématiquement mortelle",
      "C) Elle ne touche que l'oreillette droite",
      "D) Elle s'accompagne d'une tamponnade aiguë précoce",
      "E) Elle guérit par augmentation de la posologie"
    ],
    correctAnswers: [0],
    explanation: "La cardiotoxicité du Trastuzumab (type II) correspond à une sidération myocardique fonctionnelle sans altération ultrastructurale myocytaire, indépendante de la dose cumulative, habituellement réversible après interruption temporaire et traitement par IEC/bêtabloquants.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-08',
    courseId: 'crs-hemato-17',
    questionNumber: 8,
    type: 'QCM',
    content: "Quel effet secondaire cardiaque aigu ischémique doit être impérativement surveillé lors de la perfusion de 5-Fluorouracile (5-FU) ou de la prise orale de Capécitabine ?",
    options: [
      "A) Spasme coronarien aigu pouvant simuler un syndrome coronarien aigu / angor de Prinzmetal avec sus-décalage de ST",
      "B) Endocardite bactérienne aiguë",
      "C) Rupture de l'aorte ascendante",
      "D) Bloc de branche droit congénital",
      "E) Anévrisme ventriculaire gauche"
    ],
    correctAnswers: [0],
    explanation: "Le 5-FU et son promédicament la Capécitabine peuvent induire un spasme des artères coronaires (dans 2 à 8% des cas), se traduisant par des douleurs thoraciques constrictives per-perfusion. L'arrêt immédiat de la perfusion et la prise de dérivés nitrés sont impératifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-09',
    courseId: 'crs-hemato-17',
    questionNumber: 9,
    type: 'QCM',
    content: "La néphrotoxicité tubulaire aiguë du Cisplatine est prévenue de façon systématique par :",
    options: [
      "A) Une hyperhydratation intraveineuse sodée abondante (2 à 3 litres de NaCl 0,9%) avant et après la perfusion pour maintenir une diurèse forcée",
      "B) L'administration de diurétiques thiazidiques",
      "C) Une restriction hydrique sévère",
      "D) L'alcalinisation urinaire par bicarbonate",
      "E) La prise de vitamine C à forte dose"
    ],
    correctAnswers: [0],
    explanation: "Le Cisplatine induit une nécrose tubulaire rénale par accumulation dans les cellules tubulaires proximales. La seule méthode efficace de prévention est l'hyperhydratation au sérum physiologique (chlorure de sodium) assurant une diurèse > 100 mL/h, le chlore stabilisant la molécule sous forme non toxique dans les urines.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-10',
    courseId: 'crs-hemato-17',
    questionNumber: 10,
    type: 'QCM',
    content: "La cystite hémorragique aseptique induite par l'Ifosfamide et les fortes doses de Cyclophosphamide est due à quel métabolite urinaire toxique et comment est-elle prévenue ?",
    options: [
      "A) L'acroléine ; prévenue par l'administration conjointe de MESNA (protecteur urothélial) et une hyperhydratation",
      "B) L'acide urique ; prévenu par la rasburicase",
      "C) L'oxalate de calcium ; prévenu par le calcium",
      "D) La bilirubine libre ; prévenue par la photothérapie",
      "E) L'acide hippurique ; prévenu par l'amoxicilline"
    ],
    correctAnswers: [0],
    explanation: "L'acroléine est un métabolite toxique éliminé dans les urines qui ulcère l'urothélium vésical. Le MESNA (2-mercapto-éthane-sulfonate de sodium) possède des groupements thiols libres qui se lient à l'acroléine dans la vessie pour former un composé inoffensif non toxique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-11',
    courseId: 'crs-hemato-17',
    questionNumber: 11,
    type: 'QCM',
    content: "Quelle précaution spécifique est indispensable lors de l'administration de Méthotrexate à haute dose (HD-MTX ≥ 1 g/m²) pour prévenir l'insuffisance rénale aiguë et la toxicité générale ?",
    options: [
      "A) Alcalinisation urinaire continue (maintien d'un pH urinaire > 7) et sauvetage par l'Acide Folinique (Lederfoline) débuté à H24-H36",
      "B) Acidification des urines avec chlorure d'ammonium",
      "C) Restriction hydrique totale",
      "D) Injection d'érythropoïétine",
      "E) Administration préalable de Cisplatine"
    ],
    correctAnswers: [0],
    explanation: "À pH acide, le méthotrexate précipite dans les tubules rénaux et obstrue les reins. On alcalinise les urines (bicarbonate IV) pour maintenir le pH urinaire > 7 (multiplie la solubilité par 10) et on injecte de l'acide folinique (Lederfoline) pour 'sauver' les cellules saines du blocage de la DHFR.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-12',
    courseId: 'crs-hemato-17',
    questionNumber: 12,
    type: 'QCM',
    content: "La toxicité neurologique périphérique spécifique de l'Oxaliplatine (composant du protocole FOLFOX) est caractérisée par :",
    options: [
      "A) Une neuropathie aiguë périphérique thermo-dépendante déclenchée par le froid (paresthésies pharyngo-laryngées et des extrémités lors de l'ingestion de boissons froides ou contact avec le froid)",
      "B) Une perte brutale de l'audition bilatérale",
      "C) Une cécité corticale réversible",
      "D) Une hémiplégie spastique",
      "E) Un tremblement de repos parkinsonien"
    ],
    correctAnswers: [0],
    explanation: "L'Oxaliplatine donne deux types de neuropathie : une forme aiguë thermo-sensible caractéristique survenant pendant ou juste après la perfusion (dysphagie au froid, spasme pharyngé, paresthésies déclenchées par le froid) et une forme chronique sensitive cumulative axonale distale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-13',
    courseId: 'crs-hemato-17',
    questionNumber: 13,
    type: 'QCM',
    content: "La toxicité digestive classique des Vinca-alcaloïdes (Vincristine, Vinblastine) liée à l'atteinte du système nerveux autonome entérique est :",
    options: [
      "A) Une constipation sévère pouvant évoluer vers l'iléus paralytique (occlusion intestinale réflexe)",
      "B) Une diarrhée cholériforme aqueuse précoce",
      "C) Une hépatite fulminante",
      "D) Une pancréatite aiguë nécrosante",
      "E) Une rectorragie massive par ulcération colique"
    ],
    correctAnswers: [0],
    explanation: "La vincristine paralyse les microtubules du système nerveux végétatif entérique, provoquant une hypomotilité intestinale majeure responsable de constipation opiniâtre et d'iléus paralytique (parésie intestinale). La prescription de laxatifs préventifs est systématique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-14',
    courseId: 'crs-hemato-17',
    questionNumber: 14,
    type: 'QCM',
    content: "Quel antibiotique antitumoral est responsable d'une toxicité pulmonaire redoutable (pneumopathie interstitielle évoluant vers la fibrose pulmonaire irréversible dose-dépendante) ?",
    options: [
      "A) La Bléomycine",
      "B) L'Adriamycine",
      "C) La Cyclophosphamide",
      "D) Le Cisplatine",
      "E) Le 5-Fluorouracile"
    ],
    correctAnswers: [0],
    explanation: "La Bléomycine manque d'enzyme d'inactivation dans le parenchyme pulmonaire (bléomycine hydrolase faible). Elle expose à un risque de toxicité pulmonaire dès 300 mg de dose cumulée : toux sèche, dyspnée d'effort, râles crépitants et baisse de la DLCO aux EFR.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-15',
    courseId: 'crs-hemato-17',
    questionNumber: 15,
    type: 'QCM',
    content: "Le syndrome mains-pieds (érythrodysesthésie palmo-plantaire : érythème douloureux, desquamation, vésicules aux zones d'appui) est particulièrement fréquent avec :",
    options: [
      "A) La Capécitabine (Xéloda) et le 5-FU en perfusion continue",
      "B) La Vincristine",
      "C) Le Méthotrexate",
      "D) La Bléomycine",
      "E) L'Asparaginase"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome mains-pieds est une toxicité cutanée dose-limitante classique de la Capécitabine orale, du 5-FU en perfusion continue et de certains ITK anti-angiogéniques (Sorafénib, Sunitinib), prévenu par des émollients et l'éviction des frottements.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-16',
    courseId: 'crs-hemato-17',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans les toxicités immuno-médiées (irAE) des inhibiteurs de points de contrôle immunitaire (anti-PD-1 : Nivolumab, Pembrolizumab ; anti-CTLA-4 : Ipilimumab), quel est le traitement de première intention des grades 2 à 4 ?",
    options: [
      "A) Arrêt temporaire ou définitif de l'immunothérapie et instauration d'une corticothérapie systémique (Prednisone 1 à 2 mg/kg/j)",
      "B) Antibiothérapie à large spectre",
      "C) Augmentation de la dose d'immunothérapie",
      "D) Transfusion plaquettaire",
      "E) Antihistaminiques simples seuls"
    ],
    correctAnswers: [0],
    explanation: "Les effets indésirables des checkpoints inhibitors sont d'origine auto-immune (colite, hépatite, hypophysite, pneumopathie, thyroïdite). Dès le grade 2, la corticothérapie à dose immunosuppressive (1 à 2 mg/kg/j de prednisone) avec arrêt de la molécule est le pilier salvateur.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-17',
    courseId: 'crs-hemato-17',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle atteinte endocrinienne auto-immune spécifique se manifeste typiquement par des céphalées, une asthénie profonde, une hypotension artérielle et un panhypopituitarisme sous anti-CTLA-4 (Ipilimumab) ?",
    options: [
      "A) L'hypophysite auto-immune",
      "B) L'hyperparathyroïdie primitive",
      "C) Le phéochromocytome bilatéral",
      "D) Le syndrome de Cushing iatrogène",
      "E) Le diabète insipide néphrogénique"
    ],
    correctAnswers: [0],
    explanation: "L'hypophysite est une toxicité auto-immune classique de l'anti-CTLA-4 Ipilimumab (10% des patients). L'IRM cérébrale montre un épaississement de la tige et de l'hypophyse, avec déficit thyréotrope, corticotrope et gonadotrope imposant l'hormonothérapie substitutive.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-17-18',
    courseId: 'crs-hemato-17',
    questionNumber: 18,
    type: 'QCM',
    content: "Le risque d'extravasation d'un agent cytotoxique vésicant (ex: Anthracyclines, Vinca-alcaloïdes) lors d'une perfusion périphérique impose la règle d'or suivante :",
    options: [
      "A) L'utilisation privilégiée d'une voie veineuse centrale (chambre implantable PAC ou PICC line) pour toutes les chimiothérapies vésicantes",
      "B) L'utilisation exclusive de petites veines du dos de la main",
      "C) Le maintien de la perfusion même en cas de gonflement et de douleur brûlante",
      "D) L'application d'alcool pur en cas d'extravasation",
      "E) La réalisation systématique d'une incision chirurgicale large préventive"
    ],
    correctAnswers: [0],
    explanation: "Les drogues vésicantes entraînent une nécrose tissulaire extensive et gravissime en cas d'extravasation. Elles doivent être perfusées de façon sécurisée sur une voie veineuse centrale contrôlée radiologiquement (chambre à cathéter implantable).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-19',
    courseId: 'crs-hemato-17',
    questionNumber: 19,
    type: 'QCM',
    content: "Quel antidote spécifique doit être administré par voie intraveineuse en urgence dans les 6 heures suivant l'extravasation accidentelle d'une anthracycline (Doxorubicine) ?",
    options: [
      "A) Le Dexrazoxane (Savene)",
      "B) La Naloxone",
      "C) Le Flumazénil",
      "D) La N-acétylcystéine",
      "E) Le Bleu de méthylène"
    ],
    correctAnswers: [0],
    explanation: "Le Savene (Dexrazoxane IV) est l'antidote validé de l'extravasation des anthracyclines : perfusé pendant 3 jours consécutifs débuté le plus tôt possible dans les 6 heures, il évite la nécrose cutanée chirurgicale dans plus de 95% des cas.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-17-20',
    courseId: 'crs-hemato-17',
    questionNumber: 20,
    type: 'QCM',
    content: "L'atteinte digestive de l'Irinotécan (Campto) comporte un syndrome cholinergique aigu précoce (diarrhée aiguë hypermotile per-perfusion, hypersalivation, sueurs, myosis) prévenu et traité par :",
    options: [
      "A) L'Atropine par voie sous-cutanée (0,25 à 0,50 mg)",
      "B) Le Lopéramide à forte dose",
      "C) L'insuline rapide",
      "D) L'adrénaline intramusculaire",
      "E) Le charbon activé"
    ],
    correctAnswers: [0],
    explanation: "L'Irinotécan possède une activité anticholinestérasique intrinsèque responsable d'un syndrome cholinergique aigu précoce dans les heures suivant la perfusion, spectaculairement neutralisé par l'Atropine. La diarrhée retardée (après 24h) est traitée par le Lopéramide.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-21',
    courseId: 'crs-hemato-17',
    questionNumber: 21,
    type: 'QCM',
    content: "La toxicité hématologique induite par la chimiothérapie cytotoxique atteint son point le plus bas (le nadir) classiquement entre :",
    options: [
      "A) Le 7e et le 14e jour suivant la cure (J7 - J14)",
      "B) Les 2 premières heures",
      "C) Le 28e et le 35e jour",
      "D) Dès le lendemain de la perfusion",
      "E) Uniquement après 6 mois"
    ],
    correctAnswers: [0],
    explanation: "Le nadir hématologique (chute maximale des neutrophiles et des plaquettes) survient typiquement entre J7 et J14 pour la majorité des protocoles de chimiothérapie conventionnelle, période à haut risque de neutropénie fébrile.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-22',
    courseId: 'crs-hemato-17',
    questionNumber: 22,
    type: 'QCM',
    content: "L'administration prophylactique primaire de facteurs de croissance hématopoïétiques G-CSF (Filgrastim, Pegfilgrastim) est indiquée lorsque :",
    options: [
      "A) Le risque global de neutropénie fébrile lié au protocole de chimiothérapie est supérieur à 20%",
      "B) Le patient a des nausées",
      "C) Le taux de plaquettes est bas",
      "D) Le patient présente une anémie isolée",
      "E) La tumeur est de bas grade"
    ],
    correctAnswers: [0],
    explanation: "Selon les recommandations internationales, le G-CSF en prophylaxie primaire est systématique si le schéma de chimiothérapie comporte un risque de neutropénie fébrile > 20% (ou entre 10 et 20% chez les patients fragiles à risque élevé).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-23',
    courseId: 'crs-hemato-17',
    questionNumber: 23,
    type: 'QCM',
    content: "La toxicité spécifique de l'Asparaginase (utilisée dans les leucémies aiguës lymphoblastiques) comporte :",
    options: [
      "A) Des pancréatites aiguës, une insuffisance hépato-cellulaire et des thromboses par effondrement de l'antithrombine III et du fibrinogène",
      "B) Une surdité définitive",
      "C) Une polyglobulie majeure",
      "D) Une hypertension artérielle maligne",
      "E) Un rachitisme hypophosphatémique"
    ],
    correctAnswers: [0],
    explanation: "L'Asparaginase dégrade la L-asparagine indispensable aux synthèses protéiques hépatiques. Elle entraîne un effondrement des protéines de coagulation et des inhibiteurs (antithrombine III ➔ thromboses graves), une hypofibrinogénémie et un risque élevé de pancréatite aiguë toxique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-17-24',
    courseId: 'crs-hemato-17',
    questionNumber: 24,
    type: 'QCM',
    content: "L'apparition d'une éruption cutanée acnéiforme folliculaire papulo-pustuleuse du visage et du thorax sous inhibiteurs de l'EGFR (Cétuximab, Panitumumab) :",
    options: [
      "A) Est un effet de classe fréquent positivement corrélé à l'efficacité antitumorale du traitement (facteur prédictif de meilleure réponse)",
      "B) Signe une allergie fatale imposant l'arrêt définitif",
      "C) Est due à une infection staphylococcique nosocomiale",
      "D) Doit être traitée par chimiothérapie forte",
      "E) Est prévenue par la radiothérapie"
    ],
    correctAnswers: [0],
    explanation: "Le rash acnéiforme est un effet pharmacodynamique lié à l'inhibition de l'EGFR dans les kératinocytes. Paradoxalement, l'intensité du rash est positivement corrélée à la réponse tumorale et à la survie globale. Il se traite par cyclines orales et crèmes émollientes sans arrêter le traitement.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-25',
    courseId: 'crs-hemato-17',
    questionNumber: 25,
    type: 'QCM',
    content: "Quel effet secondaire vasculaire spécifique est associé aux anticorps anti-angiogéniques ciblant le VEGF comme le Bévacizumab (Avastin) ?",
    options: [
      "A) Hypertension artérielle (HTA), protéinurie, complications thromboemboliques artérielles et retards de cicatrisation / perforations digestives",
      "B) Hypoglycémie sévère",
      "C) Alopécie universelle",
      "D) Ostéonécrose de la hanche",
      "E) Pancréatite aiguë nécrosante constante"
    ],
    correctAnswers: [0],
    explanation: "L'inhibition du VEGF entraîne une dysfonction endothéliale responsable d'HTA (dans 20-30% des cas), de protéinurie glomérulaire, d'un risque accru de thromboses artérielles, d'hémorragies et d'altération de la cicatrisation (délai d'au moins 4 à 6 semaines avant/après toute chirurgie).",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-17-cs1',
    courseId: 'crs-hemato-17',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Une patiente de 50 ans reçoit sa première cure de chimiothérapie adjuvante associant Doxorubicine et Cyclophosphamide pour un cancer du sein. L'oncologue prescrit pour le lendemain et le surlendemain des corticoïdes et un anti-5HT3. La patiente vous demande si elle va perdre ses cheveux.\n\nQuelle réponse claire et basée sur les preuves devez-vous lui apporter ?",
    options: [
      "A) L'alopécie est quasi-constante avec les anthracyclines et le cyclophosphamide, débutant vers le 15e-21e jour, mais elle est totalement réversible à l'arrêt du traitement (proposer ordonnance de prothèse capillaire et casque réfrigérant)",
      "B) Les cheveux ne tombent jamais avec ces molécules",
      "C) L'alopécie est définitive et irréversible",
      "D) Les cheveux tombent uniquement si la patiente les lave à l'eau chaude",
      "E) Il faut raser le crâne la veille de la perfusion pour éviter la toxicité rénale"
    ],
    correctAnswers: [0],
    explanation: "L'alopécie est un effet secondaire classique, quasi-systématique (grade 2) avec les anthracyclines et les taxanes. Elle survient 2 à 3 semaines après la première cure. Elle est temporaire et réversible (repousse 1 à 2 mois après la fin de la chimiothérapie). Une prescription de prothèse capillaire est délivrée en amont.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-cs2',
    courseId: 'crs-hemato-17',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Un patient de 60 ans traité par Cisplatine à forte dose (100 mg/m²) pour un cancer ORL présente à J5 une élévation de la créatininémie à 240 µmol/L (contre 75 µmol/L avant la cure) avec clairance de la créatinine effondrée. L'interrogatoire révèle que l'hyperhydratation intraveineuse a été interrompue prématurément la veille.\n\nQuelle est la cause de cette insuffisance rénale aiguë et quelle est la mesure préventive qui a manqué ?",
    options: [
      "A) Nécrose tubulaire aiguë toxique par le Cisplatine ; Prévention par hyperhydratation saline continue (NaCl 0,9% : 3 L/j) avec diurèse forcée",
      "B) Glomérulonéphrite extra-membraneuse ; Corticothérapie",
      "C) Lithiase urique bilatérale obstructive ; Urétéroscopie",
      "D) Choc septique nosocomial méconnu ; Noradrénaline",
      "E) Thrombose des artères rénales bilatérale ; Thrombolyse"
    ],
    correctAnswers: [0],
    explanation: "Le Cisplatine est un toxique tubulaire direct majeur. Sa néphrotoxicité survient typiquement vers J5-J7 si l'hyperhydratation sodée n'est pas rigoureusement maintenue avant, pendant et après la perfusion pour diluer le toxique dans les urines et accélérer son élimination.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-cs3',
    courseId: 'crs-hemato-17',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Une patiente de 58 ans traitée par Doxorubicine pour un sarcome récidivant a reçu une dose cumulative totale de 520 mg/m². Quatre mois après la fin du traitement, elle consulte pour une dyspnée d'effort d'aggravation rapide, des œdèmes des membres inférieurs et des râles crépitants aux deux bases pulmonaires. L'échocardiographie retrouve une FEVG effondrée à 28% avec dilatation ventriculaire gauche globale.\n\nQuel est le mécanisme de cette décompensation et quelle est la règle de surveillance préventive qui s'imposait ?",
    options: [
      "A) Cardiomyopathie dilatée toxique irréversible liée au dépassement de la dose cumulative d'anthracyclines ; Évaluation obligatoire de la FEVG par échographie ou scintigraphie cardiaque avant traitement puis à chaque palier de dose",
      "B) Infarctus du myocarde transmural étendu par rupture de plaque",
      "C) Tamponnade péricardique purulente",
      "D) Embolie pulmonaire massive bilatérale",
      "E) Rétrécissement aortique calcifié serré"
    ],
    correctAnswers: [0],
    explanation: "Cardiotoxicité de type I par dépassement de la dose cumulée maximale d'anthracycline (> 450-500 mg/m²). Elle entraîne une nécrose myocytaire irréversible avec insuffisance cardiaque réfractaire. La FEVG doit être mesurée avant la première cure et régulièrement en cours de traitement.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-cs4',
    courseId: 'crs-hemato-17',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 64 ans traité par Nivolumab (anti-PD-1) pour un mélanome métastatique présente après la 4e perfusion l'apparition de 8 selles liquides par jour avec rectorragies et douleurs abdominales intenses. La PCR sur selles élimine une infection bactérienne ou parasitaire et la recherche de Clostridioides difficile est négative. La coloscopie montre une colite érythémateuse et ulcérée diffuse.\n\nQuel diagnostic portez-vous et quel est le traitement immédiat ?",
    options: [
      "A) Colite immuno-médiée de grade 3 induite par l'anti-PD-1 ; Arrêt immédiat de l'immunothérapie et instauration d'une corticothérapie intraveineuse forte dose (Méthylprednisolone 1 à 2 mg/kg/j)",
      "B) Gastro-entérite virale banale ; Réhydratation orale seule",
      "C) Maladie de Crohn congénitale révélée ; Salazopyrine seule",
      "D) Cancer colique synchrone ; Colectomie totale immédiate",
      "E) Amibiase colique aiguë ; Métronidazole seul"
    ],
    correctAnswers: [0],
    explanation: "Colite auto-immune induite par les inhibiteurs de checkpoints (effet indésirable immuno-médié fréquent et potentiellement perforatif). En présence d'une colite de grade ≥ 2-3 (≥ 4-6 selles/jour ou saignement), l'arrêt du Nivolumab et une corticothérapie systémique forte dose (1 à 2 mg/kg/j) sont indispensables en extrême urgence (avec recours à l'Infliximab si réfractaire à 48-72h).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-17-cs5',
    courseId: 'crs-hemato-17',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Un patient de 56 ans reçoit du 5-Fluorouracile en perfusion continue pour un cancer du côlon. Trois heures après le début de la perfusion, il ressent une douleur rétrosternale constrictive irradiant dans la mâchoire. L'ECG montre un sus-décalage du segment ST de 3 mm en territoire antérieur sans antécédent coronarien.\n\nQuelle est l'attitude immédiate et quelle est la cause de ce tableau ?",
    options: [
      "A) Arrêt immédiat et définitif de la perfusion de 5-FU, administration de dérivés nitrés sublinguaux et avis cardiologique en urgence pour coronarospasme toxique induit par le 5-FU",
      "B) Poursuivre la chimiothérapie en ralentissant le débit",
      "C) Injecter de la morphine seule sans arrêter la chimiothérapie",
      "D) Réaliser une fibroscopie gastrique en urgence",
      "E) Transfuser deux culots globulaires"
    ],
    correctAnswers: [0],
    explanation: "Le 5-FU est une cause classique de spasme coronarien aigu pouvant conduire à l'infarctus ou à la mort subite. L'arrêt immédiat de la perfusion est obligatoire, associé à un traitement vasodilatateur coronarien (Trinitrine ou inhibiteurs calciques). La réintroduction du 5-FU est formellement contre-indiquée sans encadrement cardiologique spécialisé.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_17_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-17-01',
    courseId: 'crs-hemato-17',
    type: 'resume',
    title: "Mind Map Synthèse : Effets Secondaires des Traitements en Oncologie",
    contentMarkdown: `# Mind Map : Effets Secondaires des Traitements (Dr Mouaici)

\`\`\`
                                  TOXICITÉS DES TRAITEMENTS ONCOLOGIQUES
                                                    │
         ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
         ▼                  ▼                       ▼                       ▼                  ▼
HÉMATOLOGIQUES      DIGESTIVES (NVIC)        CARDIOTOXICITÉS         NÉPHRO / UROLOGIQUES   IMMUNOTHÉRAPIE (irAE)
- Nadir J7-J14      - Aiguës (<24h) :        - Anthracyclines :      - Cisplatine :         - Anti-PD1 / CTLA-4
- Neutropénie féb.    Sétrons (5-HT3)          Cardiomyopathie dose-   Nécrose tubulaire      (Auto-immunité)
  ➔ Antibiothérapie - Retardées (>24h) :       dépendante irréversible (Hyperhydratation !) - Colite, Hypophysite,
  dans l'heure !      Anti-NK1 (Aprépitant)    ➔ Dexrazoxane         - Ifosfamide / Endo :    Pneumopathie
- G-CSF si risque   - Anticipées :           - 5-FU : Spasme coronaire Cystite hémorragique - **Corticoïdes 1-2 mg/kg**
  > 20%               Benzodiazépines        - Trastuzumab : Type II   (MESNA systématique !)   + Arrêt temporaire
\`\`\`

## Principaux Antidotes et Protecteurs :
1. **MESNA** : Prévention de la cystite hémorragique à l'acroléine (Ifosfamide, Cyclophosphamide).
2. **Dexrazoxane (Cardioxane / Savene)** : Protection myocardique et antidote d'extravasation des anthracyclines.
3. **Acide Folinique (Lederfoline)** : Sauvetage cellulaire après Méthotrexate haute dose.
4. **Rasburicase (Fasturtec)** : Élimination de l'acide urique dans la lyse tumorale.
5. **Naloxone** : Antidote du surdosage morphinique.`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-17-02',
    courseId: 'crs-hemato-17',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Toxicités Spécifiques des Anticancéreux",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **Anthracyclines vs Trastuzumab** :
   - Anthracyclines : Dose-dépendante, nécrose myocytaire, **irréversible** (Type I).
   - Trastuzumab (Herceptin) : Non dose-dépendante, fonctionnelle, **réversible** (Type II).
2. **Oxaliplatine & Froid** :
   - Neuropathie sensitive déclenchée et aggravée par le contact ou l'ingestion de froid (boissons glacées interdites).
3. **Ifosfamide & MESNA** :
   - Le MESNA protège la vessie contre l'acroléine mais ne protège PAS contre l'encéphalopathie à l'ifosfamide (traitée par le Bleu de méthylène).
4. **5-FU & Spasme coronarien** :
   - Toute douleur thoracique per-perfusion de 5-FU = **Arrêt immédiat** de la perfusion !
5. **IrAE sous Immunothérapie** :
   - Ne pas donner d'antibiotiques d'emblée devant une diarrhée sous Nivolumab : penser immédiatement à une **colite auto-immune** et débuter la corticothérapie !`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 18: ARMES THÉRAPEUTIQUES DU CANCER - Dr A. Douifi
// ==========================================
export const HEMATO_LESSON_18_QUESTIONS: Question[] = [
  {
    id: 'q-hem-18-01',
    courseId: 'crs-hemato-18',
    questionNumber: 1,
    type: 'QCM',
    content: "En chirurgie oncologique carcinologique, la résection dite 'R0' correspond à :",
    options: [
      "A) Une exérèse complète macroscopique ET microscopique avec des marges saines d'au moins quelques millimètres ou centimètres",
      "B) Une résection incomplète avec résidu microscopique dans les marges",
      "C) Une résection incomplète avec résidu tumoral macroscopique visible",
      "D) Une biopsie exploratrice simple sans exérèse",
      "E) Une résection palliative exclusive"
    ],
    correctAnswers: [0],
    explanation: "Classification R des résidus post-chirurgicaux : R0 = résection complète microscopique (marges saines sans cellule cancéreuse au contact) ; R1 = résidu microscopique sur la tranche de section ; R2 = résidu macroscopique visible à l'œil nu laissé en place.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-02',
    courseId: 'crs-hemato-18',
    questionNumber: 2,
    type: 'QCM',
    content: "La technique du ganglion sentinelle dans les cancers du sein et mélanomes localisés permet de :",
    options: [
      "A) Identifier et analyser histologiquement le premier relais ganglionnaire drainant la tumeur pour éviter un curage ganglionnaire axillaire complet mutilant s'il est indemne",
      "B) Irradier directement le ganglion au bloc opératoire",
      "C) Injecter de la chimiothérapie directement dans la tumeur",
      "D) Prédire la réponse aux antiviraux",
      "E) Déterminer le groupe sanguin tumoral"
    ],
    correctAnswers: [0],
    explanation: "Le ganglion sentinelle est le premier ganglion de la chaîne lymphatique recevant le drainage du site tumoral primaire. S'il est indemne de métastase à l'examen anatomopathologique extemporané ou définitif, les relais suivants sont sains à plus de 95-98%, évitant les séquelles du curage complet (lymphœdème / gros bras).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-03',
    courseId: 'crs-hemato-18',
    questionNumber: 3,
    type: 'QCM',
    content: "Dans les effets biologiques des rayonnements ionisants en radiothérapie externe, l'effet létal principal sur les cellules tumorales résulte de :",
    options: [
      "A) Des cassures double-brin irréparables de l'ADN génomique (directes ou par l'intermédiaire de radicaux libres oxygénés issus de la radiolyse de l'eau)",
      "B) La dénaturation des lipides membranaires seuls",
      "C) La coagulation immédiate des protéines du cytoplasme",
      "D) L'inactivation de la pompe à sodium rénale",
      "E) Une alcalose intracellulaire brutale"
    ],
    correctAnswers: [0],
    explanation: "Les rayons X de haute énergie provoquent l'ionisation des atomes et la radiolyse de l'eau intracellulaire générant des radicaux libres réactifs (OH*), responsables de cassures double-brin de la molécule d'ADN. Lorsque ces lésions dépassent les capacités de réparation de la cellule, celle-ci meurt par apoptose ou catastrophe mitotique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-04',
    courseId: 'crs-hemato-18',
    questionNumber: 4,
    type: 'QCM',
    content: "Les '4 R' de la radiobiologie qui justifient le fractionnement de la dose de radiothérapie (ex: 2 Gy par séance, 5 jours sur 7) sont :",
    options: [
      "A) Réparation de l'ADN des tissus sains, Réoxygénation de la tumeur, Redistribution dans le cycle cellulaire, et Repopulation cellulaire",
      "B) Résistance, Récidive, Résection et Rémission",
      "C) Rayonnement, Radiolyse, Radicaux et Résonance",
      "D) Récupération, Réaction, Régression et Remplacement",
      "E) Aucune de ces réponses"
    ],
    correctAnswers: [0],
    explanation: "Le fractionnement permet : 1. La Réparation préférentielle des tissus sains (qui réparent mieux les petites doses que la tumeur) ; 2. La Réoxygénation des cellules hypoxiques (plus radiosensibles) ; 3. La Redistribution des cellules tumorales dans les phases sensibles du cycle (G2/M) ; et prend en compte 4. La Repopulation clonale tumorale.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-18-05',
    courseId: 'crs-hemato-18',
    questionNumber: 5,
    type: 'QCM',
    content: "La curiethérapie (brachythérapie) se distingue de la radiothérapie externe par :",
    options: [
      "A) La mise en place de sources radioactives scellées directement au contact ou à l'intérieur même de la tumeur (ex: col utérin, prostate)",
      "B) L'utilisation exclusive de photons de 18 MeV à distance",
      "C) L'absence totale de radioactivité",
      "D) L'injection intraveineuse d'anticorps radiomarqués",
      "E) Une application exclusivement cutanée sans anesthésie"
    ],
    correctAnswers: [0],
    explanation: "La curiethérapie consiste à placer des isotopes radioactifs émetteurs (Césium 137, Iridium 192, Iode 125) au contact direct ou interstitiel de la tumeur (cancer du col utérin, corps utérin, prostate, verge), délivrant une dose maximale au tissu tumoral avec une décroissance très rapide limitant l'irradiation des organes sains voisins.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-06',
    courseId: 'crs-hemato-18',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans les familles de chimiothérapie conventionnelle, le Cyclophosphamide et l'Ifosfamide appartiennent à la classe des :",
    options: [
      "A) Agents alkylants (moutardes à l'azote créant des ponts covalents entre les brins d'ADN)",
      "B) Antimétabolites analogues des pyrimidines",
      "C) Inhibiteurs des topoisomérases I",
      "D) Poisons du fuseau mitotique",
      "E) Thérapies ciblées enzymatiques"
    ],
    correctAnswers: [0],
    explanation: "Le cyclophosphamide et l'ifosfamide sont des agents alkylants bifonctionnels. Leurs métabolites actifs réagissent avec l'azote N7 de la guanine de l'ADN, formant des liaisons covalentes et des pontages interbrins qui bloquent la réplication et la transcription.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-07',
    courseId: 'crs-hemato-18',
    questionNumber: 7,
    type: 'QCM',
    content: "Les antimétabolites (5-Fluorouracile, Méthotrexate, Gemcitabine, Cytarabine) exercent leur cytotoxicité de façon spécifique durant quelle phase du cycle cellulaire ?",
    options: [
      "A) La phase S (phase de synthèse et réplication de l'ADN)",
      "B) La phase M (mitose)",
      "C) La phase G0 de repos cellulaire",
      "D) La phase G1 précoce",
      "E) Indépendamment de toute phase du cycle"
    ],
    correctAnswers: [0],
    explanation: "Les antimétabolites sont des molécules structuralement proches des bases azotées naturelles (analogues des folates, purines ou pyrimidines). Ils s'incorporent faussement ou bloquent les enzymes clés de synthèse des nucléotides, agissant spécifiquement pendant la phase S du cycle cellulaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-08',
    courseId: 'crs-hemato-18',
    questionNumber: 8,
    type: 'QCM',
    content: "Les Taxanes (Paclitaxel, Docétaxel) et les Vinca-alcaloïdes (Vincristine, Vinblastine) sont des poisons du fuseau mitotique agissant en phase M. Quelle est leur différence fondamentale de mécanisme d'action sur les microtubules ?",
    options: [
      "A) Les Vinca-alcaloïdes inhibent la polymérisation de la tubuline, tandis que les Taxanes bloquent la dépolymérisation en stabilisant anormalement les microtubules",
      "B) Les deux molécules stimulent la dépolymérisation",
      "C) Les Taxanes détruisent la membrane nucléaire",
      "D) Les Vinca-alcaloïdes n'agissent que sur l'ARN ribosomique",
      "E) Il n'y a aucune différence pharmacodynamique"
    ],
    correctAnswers: [0],
    explanation: "Les poisons du fuseau agissent en phase M : les Vinca-alcaloïdes se lient à la tubuline et empêchent son assemblage en microtubules (inhibiteurs de polymérisation) ; les Taxanes se lient aux microtubules assemblés et empêchent leur désassemblage (stabilisateurs de polymères), figeant la cellule en métaphase.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-18-09',
    courseId: 'crs-hemato-18',
    questionNumber: 9,
    type: 'QCM',
    content: "L'anticorps monoclonal humanisé Trastuzumab (Herceptin) cible spécifiquement quel récepteur tyrosine kinase oncogénique surexprimé dans 15 à 20% des cancers du sein ?",
    options: [
      "A) HER2 (ERBB2 / neu)",
      "B) EGFR (HER1)",
      "C) VEGF-A",
      "D) CD20",
      "E) PD-1"
    ],
    correctAnswers: [0],
    explanation: "Le Trastuzumab cible le domaine extracellulaire du récepteur HER2 (surexprimé par amplification génique dans 15 à 20% des adénocarcinomes mammaires et certains adénocarcinomes gastriques). Il bloque la signalisation oncogénique et active la cytotoxicité cellulaire dépendante des anticorps (ADCC).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-10',
    courseId: 'crs-hemato-18',
    questionNumber: 10,
    type: 'QCM',
    content: "Le Cétuximab (Erbitux) et le Panitumumab sont des anticorps monoclonaux anti-EGFR utilisés dans le cancer colorectal métastatique. Leur efficacité antitumorale est strictement conditionnée par :",
    options: [
      "A) Le statut NON MUTÉ (sauvage ou 'wild-type') des gènes RAS (KRAS et NRAS)",
      "B) La présence obligatoire d'une mutation activatrice de KRAS au codon 12",
      "C) La présence d'une mutation de BRAF V600E",
      "D) L'absence d'expression de l'EGFR",
      "E) L'âge du patient supérieur à 80 ans"
    ],
    correctAnswers: [0],
    explanation: "Les anticorps anti-EGFR bloquent le récepteur membranaire. Si la voie de signalisation intracellulaire en aval est activée constitutivement par une mutation de KRAS ou NRAS (codons 12, 13, 61, etc.), le blocage du récepteur en amont est totalement inefficace. Le statut RAS sauvage est donc un prérequis obligatoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-11',
    courseId: 'crs-hemato-18',
    questionNumber: 11,
    type: 'QCM',
    content: "L'hormonothérapie par Tamoxifène (Nolvadex) utilisée dans le cancer du sein hormonosensible de la femme NON MÉNOPAUSÉE agit en tant que :",
    options: [
      "A) Modulateur Sélectif des Récepteurs aux Œstrogènes (SERM), agissant comme antagoniste compétitif sur le tissu mammaire",
      "B) Inhibiteur de l'aromatase périphérique",
      "C) Agoniste pur des récepteurs progestatifs",
      "D) Ovariectomie chimique par blocage hypophysaire",
      "E) Destructeur des récepteurs membranaires d'insuline"
    ],
    correctAnswers: [0],
    explanation: "Le Tamoxifène est un SERM (Selective Estrogen Receptor Modulator). Il se lie de façon compétitive au récepteur des œstrogènes dans les cellules tumorales mammaires et bloque la prolifération dépendante des œstrogènes. Il possède en revanche une action agoniste œstrogénique partielle sur l'endomètre (risque accru d'hyperplasie et de cancer de l'endomètre) et sur l'os.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-12',
    courseId: 'crs-hemato-18',
    questionNumber: 12,
    type: 'QCM',
    content: "Chez la femme MÉNOPAUSÉE atteinte d'un cancer du sein exprimant les récepteurs hormonaux, l'hormonothérapie de choix repose sur les inhibiteurs de l'aromatase (Létrozole, Anastrozole, Exémestane) dont le mécanisme est :",
    options: [
      "A) Le blocage de la conversion périphérique des androgènes surrénaliens en œstrogènes dans le tissu adipeux",
      "B) La suppression de l'ovulation ovarienne",
      "C) Le blocage des récepteurs de la progestérone",
      "D) La stimulation des glandes surrénales",
      "E) L'inhibition de la synthèse hépatique de cholestérol"
    ],
    correctAnswers: [0],
    explanation: "Après la ménopause, les ovaires ne sécrètent plus d'œstrogènes. La quasi-totalité des œstrogènes circulants provient de l'aromatisation des androgènes surrénaliens (androstènedione) en œstrone et œstradiol par l'aromatase dans le tissu adipeux. Les inhibiteurs de l'aromatase effondrent l'œstrogénémie résiduelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-13',
    courseId: 'crs-hemato-18',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans le cancer de la prostate métastatique, la privation androgénique initiale (castration médicale) fait appel à des agonistes de la LHRH (ex: Leuproréline, Triptoréline). Quel phénomène transitoire doit être prévenu lors de la première injection ?",
    options: [
      "A) L'effet 'Flare-up' (flambée initiale transitoire de la testostérone pendant 7 à 14 jours pouvant aggraver des douleurs osseuses ou une compression médullaire), prévenu par un anti-androgène",
      "B) Une hypoglycémie sévère",
      "C) Une surdité brutale",
      "D) Une alopécie immédiate",
      "E) Une péritonite aiguë"
    ],
    correctAnswers: [0],
    explanation: "Les agonistes de la LHRH stimulent d'abord les récepteurs hypophysaires avant de les désensibiliser (effet 'flare-up' avec pic de LH et de testostérone à J5-J10). Pour éviter une progression tumorale brutale, on coprescrit un anti-androgène périphérique (Bicalutamide) débuté 1 semaine avant la première injection.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-14',
    courseId: 'crs-hemato-18',
    questionNumber: 14,
    type: 'QCM',
    content: "Les inhibiteurs de points de contrôle immunologique ciblant l'axe PD-1 / PD-L1 (ex: Pembrolizumab, Nivolumab, Atézolizumab) exercent leur action antitumorale en :",
    options: [
      "A) Rendant aux lymphocytes T cytotoxiques la capacité de reconnaître et détruire les cellules cancéreuses en levant le signal inhibiteur immunosuppresseur exercé par la tumeur",
      "B) Détruisant directement l'ADN tumoral par alkylation",
      "C) Bloquant la mitose en prométaphase",
      "D) Empêchant la vascularisation de la tumeur par nécrose artérielle",
      "E) Neutralisant les anticorps circulants du patient"
    ],
    correctAnswers: [0],
    explanation: "Les cellules cancéreuses expriment souvent PD-L1 pour se lier au récepteur PD-1 des lymphocytes T activés, éteignant la réponse immunitaire ('frein immunitaire'). Les anticorps anti-PD-1 ou anti-PD-L1 bloquent cette interaction, levant l'inhibition et réactivant la lyse des cellules tumorales par les lymphocytes T CD8+.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-15',
    courseId: 'crs-hemato-18',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans le cancer broncho-pulmonaire non à petites cellules (CBNPC) non épidermoïde métastatique, la recherche systématique préalable d'altérations moléculaires ciblables (addictions oncogéniques) comprend obligatoirement :",
    options: [
      "A) Mutations de l'EGFR, réarrangements de ALK, ROS1, RET, fusions NTRK, mutations de BRAF V600E, KRAS G12C et expression de PD-L1",
      "B) Uniquement la mutation JAK2",
      "C) Le dosage de la calcitonine",
      "D) Le groupe sanguin Rhésus",
      "E) La recherche du virus VIH"
    ],
    correctAnswers: [0],
    explanation: "En oncologie thoracique moderne, le profilage moléculaire complet (NGS et immunohistochimie) est indispensable avant tout traitement métastatique : la présence d'une mutation activatrice (EGFR ➔ Osimertinib ; ALK ➔ Alectinib/Brigatinib ; ROS1 ➔ Crizotinib) permet un traitement ciblé oral bien plus efficace et moins toxique que la chimiothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-16',
    courseId: 'crs-hemato-18',
    questionNumber: 16,
    type: 'QCM',
    content: "L'Osimertinib (Tagrisso) est un ITK de 3e génération de l'EGFR particulièrement remarquable pour :",
    options: [
      "A) Son excellente pénétration de la barrière hémato-encéphalique (efficace sur les métastases cérébrales) et son activité sur la mutation de résistance T790M",
      "B) Son inactivité totale sur les cellules pulmonaires",
      "C) Son administration exclusivement par aérosols",
      "D) Son action spécifique sur le cancer de la prostate",
      "E) Sa toxicité cardiaque constante"
    ],
    correctAnswers: [0],
    explanation: "L'Osimertinib est le traitement de référence en première intention des CBNPC avec mutation activatrice de l'EGFR (exons 19 et 21). Il est hautement actif sur la mutation de résistance T790M et possède une excellente diffusion dans le système nerveux central, réduisant drastiquement les progressions cérébrales.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-18-17',
    courseId: 'crs-hemato-18',
    questionNumber: 17,
    type: 'QCM',
    content: "Le mécanisme d'action des inhibiteurs de PARP (Olaparib, Niraparib) dans les cancers de l'ovaire et du sein avec mutation des gènes BRCA1 ou BRCA2 repose sur le concept de :",
    options: [
      "A) Létale synthétique (accumulation de cassures d'ADN simple-brin puis double-brin que la cellule tumorale incapable de recombinaison homologue ne peut réparer)",
      "B) Blocage des récepteurs hormonaux membranaires",
      "C) Inhibition de la synthèse des ribosomes",
      "D) Lyse de la membrane plasmique",
      "E) Activation de la télomérase tumorale"
    ],
    correctAnswers: [0],
    explanation: "C'est l'archétype de la létalité synthétique : l'inhibition de l'enzyme PARP bloque la réparation des cassures simple-brin de l'ADN, qui se transforment en cassures double-brin lors de la réplication. Les cellules saines réparent par recombinaison homologue (BRCA sain) ; les cellules cancéreuses mutées BRCA1/2 sont incapables de réparer et meurent massivement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-18-18',
    courseId: 'crs-hemato-18',
    questionNumber: 18,
    type: 'QCM',
    content: "Quel biomarqueur génomique tumoral prédictif d'une réponse exceptionnelle et prolongée à l'immunothérapie par anti-PD-1 (quelle que soit la localisation d'origine du cancer) correspond à l'instabilité des microsatellites ?",
    options: [
      "A) Le statut dMMR / MSI-H (Mismatch Repair Deficiency / Microsatellite Instability-High)",
      "B) Le caryotype normal",
      "C) La perte du chromosome Y",
      "D) La translocation t(9;22)",
      "E) Le taux de prothrombine"
    ],
    correctAnswers: [0],
    explanation: "Les tumeurs avec déficit du système de réparation des mésappariements de l'ADN (dMMR / MSI-H, comme dans le syndrome de Lynch ou les formes sporadiques) accumulent des milliers de mutations somatiques (charge mutationnelle élevée), générant de multiples néo-antigènes hautement immunogènes très sensibles à l'anti-PD-1.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-19',
    courseId: 'crs-hemato-18',
    questionNumber: 19,
    type: 'QCM',
    content: "Les anticorps immuno-conjugués (Antibody-Drug Conjugates / ADC, ex: Trastuzumab déruxtécan) associent dans une même molécule :",
    options: [
      "A) Un anticorps monoclonal ciblant un antigène de surface, un linker stable et une charge cytotoxique de chimiothérapie puissante (délivrée sélectivement dans la cellule tumorale avec 'bystander effect')",
      "B) Deux molécules de chimiothérapie mélangées dans un flacon",
      "C) Un vaccin à ARN et un antibiotique",
      "D) Un virus vivant atténué et une hormone",
      "E) Une radiothérapie intraveineuse seule"
    ],
    correctAnswers: [0],
    explanation: "Les ADC agissent comme des 'missiles guidés' : l'anticorps reconnaît l'antigène tumoral, la molécule est internalisée par endocytose, le linker est clivé dans le lysosome et libère le poison chimiothérapeutique ultra-puissant au cœur de la cellule cancéreuse et des cellules voisines (effet bystander).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-18-20',
    courseId: 'crs-hemato-18',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans la classification des intentions thérapeutiques en oncologie, le traitement 'néoadjuvant' est défini par :",
    options: [
      "A) Un traitement médical (chimiothérapie, radiothérapie, hormonothérapie) administré AVANT le geste chirurgical local principal pour réduire la taille tumorale et évaluer la chimiosensibilité",
      "B) Un traitement post-opératoire administré pour détruire les micrométastases",
      "C) Un traitement palliatif exclusif chez un patient grabataire",
      "D) Un traitement substitutif à vie",
      "E) Une radiothérapie per-opératoire unique"
    ],
    correctAnswers: [0],
    explanation: "Néoadjuvant = pré-opératoire (vise à réduire le volume tumoral 'downstaging' pour faciliter une résection R0 conservatrice, évaluer in vivo la réponse histologique et traiter précocement les micrométastases disséminées). Adjuvant = post-opératoire (éradication des micrométastases résiduelles après exérèse complète).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-21',
    courseId: 'crs-hemato-18',
    questionNumber: 21,
    type: 'QCM',
    content: "La Réunion de Concertation Pluridisciplinaire (RCP) en oncologie est obligatoire car :",
    options: [
      "A) Elle garantit une décision thérapeutique collégiale et personnalisée réunissant chirurgiens, oncologues médicaux, radiothérapeutes, radiologues et anatomopathologistes selon les référentiels de bonnes pratiques",
      "B) Elle sert uniquement à commander les médicaments à la pharmacie",
      "C) Elle est facultative pour les cancers digestifs",
      "D) Elle ne concerne que les patients en soins palliatifs terminaux",
      "E) Elle remplace la consultation d'annonce avec le patient"
    ],
    correctAnswers: [0],
    explanation: "La RCP est le socle médico-légal et éthique du Plan Cancer : toute proposition de traitement anticancéreux doit être discutée et validée collégialement par une équipe multidisciplinaire et consignée dans le dossier avec remise d'un Programme Personnalisé de Soins (PPS) au patient.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-22',
    courseId: 'crs-hemato-18',
    questionNumber: 22,
    type: 'QCM',
    content: "Quelle classe thérapeutique cible la mutation BRAF V600E dans le mélanome métastatique et est systématiquement associée à un inhibiteur de MEK (ex: Dabrafénib + Tramétinib) pour retarder l'émergence des résistances et limiter les toxicités cutanées ?",
    options: [
      "A) Les inhibiteurs sélectifs de la kinase BRAF (ex: Dabrafénib, Vémurafénib)",
      "B) Les inhibiteurs de tyrosine kinase de l'EGFR",
      "C) Les anticorps anti-CD20",
      "D) Les sels de platine",
      "E) Les analogues de la pyrimidine"
    ],
    correctAnswers: [0],
    explanation: "Dans le mélanome muté BRAF V600 (50% des cas), l'association d'un inhibiteur de BRAF (Dabrafénib) et d'un inhibiteur de MEK (Tramétinib) bloque la voie des MAPK à deux niveaux, multipliant le taux de réponse (> 70%), allongeant la survie sans progression et évitant l'apparition de kérato-acanthomes induits par l'activation paradoxale de la voie sous anti-BRAF seul.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-23',
    courseId: 'crs-hemato-18',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans le cancer colorectal métastatique, pourquoi l'association concomitante d'un anti-EGFR (Cétuximab) et d'un anti-VEGF (Bévacizumab) est-elle FORMELLEMENT DÉCONSEILLÉE ?",
    options: [
      "A) Les essais cliniques randomisés ont démontré une absence de bénéfice d'efficacité avec une surmortalité et une surtoxicité majeure",
      "B) Parce qu'ils se neutralisent chimiquement dans la tubulure",
      "C) Parce que cela provoque une anémie immédiate",
      "D) Parce que les deux médicaments coûtent trop cher",
      "E) Parce qu'ils induisent systématiquement une polyglobulie"
    ],
    correctAnswers: [0],
    explanation: "Règle de cancérologie digestive (essais CAIRO-2 et PACCE) : la double thérapie ciblée associant anti-VEGF et anti-EGFR n'améliore pas la survie mais dégrade significativement la survie sans progression et augmente la toxicité. On choisit SOIT un anti-VEGF SOIT un anti-EGFR selon le profil moléculaire et la localisation (côlon droit vs gauche).",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-18-24',
    courseId: 'crs-hemato-18',
    questionNumber: 24,
    type: 'QCM',
    content: "La radiothérapie stéréotaxique (SBRT / SRS) est caractérisée par :",
    options: [
      "A) L'administration de doses très élevées par fraction en un petit nombre de séances (1 à 5 séances) avec une précision inframillimétrique et un gradient de dose très abrupt",
      "B) Une irradiation corporelle totale à faible dose",
      "C) Une absence de faisceaux guidés par imagerie",
      "D) Une technique utilisable uniquement pour les tumeurs de plus de 15 cm",
      "E) Une méthode historique abandonnée"
    ],
    correctAnswers: [0],
    explanation: "La radiothérapie stéréotaxique permet de détruire avec une précision balistique millimétrique de petites tumeurs bien limitées (métastases cérébrales, pulmonaires, hépatiques oligométastatiques, cancer bronchique localisé inopérable) en délivrant des doses ablatives hautement destructrices tout en épargnant les tissus sains adjacents.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-25',
    courseId: 'crs-hemato-18',
    questionNumber: 25,
    type: 'QCM',
    content: "En soins de support en oncologie, quelle est la définition des 'soins de support' selon l'INCa ?",
    options: [
      "A) L'ensemble des soins et soutiens nécessaires aux personnes malades tout au long de la maladie conjointement aux traitements oncopédiatriques/spécifiques, pour assurer la meilleure qualité de vie possible (douleur, nutrition, psychologie, réhabilitation, service social)",
      "B) Les soins prodigués uniquement durant les dernières 48 heures de vie",
      "C) La réanimation chirurgicale exclusive",
      "D) L'arrêt des chimiothérapies",
      "E) Uniquement la kinésithérapie motrice"
    ],
    correctAnswers: [0],
    explanation: "Les soins oncologiques de support (SOS) ne se réduisent pas aux soins palliatifs terminaux : ils doivent être intégrés dès le diagnostic et tout au long du parcours de soins pour prévenir et traiter les conséquences physiques, psychologiques et sociales du cancer et de ses traitements.",
    difficulty: 'facile'
  },

  // Progressive Clinical Cases (5 cases)
  {
    id: 'q-hem-18-cs1',
    courseId: 'crs-hemato-18',
    questionNumber: 26,
    type: 'CasClinique',
    content: "CAS CLINIQUE 1 : Une patiente de 45 ans non ménopausée est opérée d'un carcinome canalaire infiltrant du sein de 18 mm. L'histologie montre : résection R0, récepteurs aux œstrogènes positifs à 95%, récepteurs à la progestérone positifs à 90%, HER2 négatif (score 1+ en IHC), pas d'atteinte du ganglion sentinelle (pN0). Elle reçoit une radiothérapie adjuvante du sein.\n\nQuelle hormonothérapie adjuvante de référence doit être prescrite pour une durée minimale de 5 ans ?",
    options: [
      "A) Le Tamoxifène (20 mg/jour par voie orale)",
      "B) Le Létrozole seul sans castration",
      "C) L'Anastrozole seul",
      "D) Le Trastuzumab en monothérapie",
      "E) Pas d'hormonothérapie car la tumeur est < 2 cm"
    ],
    correctAnswers: [0],
    explanation: "Chez la femme non ménopausée atteinte d'un cancer du sein RH+ HER2-, le Tamoxifène (20 mg/j pendant 5 à 10 ans) est le traitement hormonal adjuvant de référence. Les inhibiteurs de l'aromatase (Létrozole, Anastrozole) sont inefficaces seuls chez la femme non ménopausée (car les ovaires sont actifs) et ne pourraient être envisagés qu'en association avec une suppression ovarienne (analogue LHRH).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-cs2',
    courseId: 'crs-hemato-18',
    questionNumber: 27,
    type: 'CasClinique',
    content: "CAS CLINIQUE 2 : Une patiente de 52 ans sans antécédent tabagique présente un adénocarcinome pulmonaire du lobe supérieur droit avec métastases osseuses et ganglionnaires médiastinales. La recherche d'altérations génomiques sur la biopsie bronchique en NGS retrouve une délétion de l'exon 19 du gène EGFR. La recherche d'anomalie de ALK et ROS1 est négative.\n\nQuel traitement systémique de première ligne de référence procure le meilleur bénéfice de survie globale et de qualité de vie ?",
    options: [
      "A) Un inhibiteur de tyrosine kinase de l'EGFR de 3e génération par voie orale : l'Osimertinib (Tagrisso 80 mg/jour)",
      "B) Une chimiothérapie par Cisplatine + Pémétrexed seule",
      "C) Une immunothérapie par Pembrolizumab seul",
      "D) Une chirurgie d'exérèse pulmonaire immédiate",
      "E) Une radiothérapie corporelle totale"
    ],
    correctAnswers: [0],
    explanation: "La présence d'une mutation activatrice de l'EGFR (délétion de l'exon 19 ou L858R) est une indication formelle majeure à un ITK de l'EGFR en première intention. L'Osimertinib (ITK de 3e génération) est supérieur aux ITK de 1ère génération et à la chimiothérapie, avec une survie sans progression de près de 19 mois et une excellente efficacité cérébrale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-cs3',
    courseId: 'crs-hemato-18',
    questionNumber: 28,
    type: 'CasClinique',
    content: "CAS CLINIQUE 3 : Un homme de 62 ans présente un adénocarcinome du côlon gauche avec métastases hépatiques synchrones non résécables d'emblée. La biologie moléculaire sur le bloc tumoral retrouve : gènes KRAS et NRAS sauvages (non mutés), BRAF sauvage, et statut microsatellite stable (MSS). L'objectif est une réduction tumorale maximale pour tenter secondairement une chirurgie des métastases.\n\nQuelle association thérapeutique de première ligne est la plus adaptée ?",
    options: [
      "A) Chimiothérapie doublet (FOLFIRI ou FOLFOX) associée à un anticorps anti-EGFR (Cétuximab ou Panitumumab)",
      "B) Immunothérapie par anti-PD-1 seul",
      "C) Tamoxifène seul",
      "D) Abstention thérapeutique et soins palliatifs exclusifs",
      "E) Désoxycortone intraveineuse"
    ],
    correctAnswers: [0],
    explanation: "Pour une tumeur du côlon gauche avec gènes RAS et BRAF sauvages (non mutés), l'association d'une chimiothérapie cytotoxique (FOLFOX ou FOLFIRI) avec un anticorps anti-EGFR (Cétuximab ou Panitumumab) confère des taux de réponse tumorale très élevés (> 65-70%), optimisant les chances de rendre les métastases hépatiques résécables secondairement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-18-cs4',
    courseId: 'crs-hemato-18',
    questionNumber: 29,
    type: 'CasClinique',
    content: "CAS CLINIQUE 4 : Un patient de 68 ans est pris en charge pour un cancer de la prostate avec métastases osseuses multiples diffuses et élévation du PSA à 240 ng/mL. L'oncologue décide d'initier une suppression androgénique par injections trimestrielles d'un agoniste de la LHRH (Triptoréline).\n\nQuelle prescription médicamenteuse est indispensable lors de la première injection pour prévenir les conséquences de l'effet 'flare-up' ?",
    options: [
      "A) Un anti-androgène non stéroïdien (ex: Bicalutamide 50 mg/j) débuté au moins 7 jours avant la première injection et poursuivi pendant 2 à 4 semaines",
      "B) Une supplémentation en testostérone",
      "C) Un traitement par aspirine forte dose",
      "D) De la vitamine D à forte dose seule",
      "E) Des antibiotiques prophylactiques"
    ],
    correctAnswers: [0],
    explanation: "L'effet 'flare-up' des agonistes LHRH entraîne un pic initial de testostérone risquant d'aggraver les métastases osseuses et d'induire une compression médullaire aiguë. La prescription d'un anti-androgène périphérique (Bicalutamide) bloque les récepteurs prostatiques durant cette phase initiale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-18-cs5',
    courseId: 'crs-hemato-18',
    questionNumber: 30,
    type: 'CasClinique',
    content: "CAS CLINIQUE 5 : Une femme de 56 ans traitée pour un mélanome cutané métastatique au poumon et au foie avec mutation BRAF V600E documentée débute une bithérapie ciblée orale associant Dabrafénib (inhibiteur de BRAF) et Tramétinib (inhibiteur de MEK). Elle consulte à J14 pour une fièvre à 39°C avec frissons intenses, sans signe de foyer infectieux, avec bilan bactériologique strictement négatif.\n\nQuel effet indésirable spécifique de cette combinaison thérapeutique présente la patiente et comment le gérer ?",
    options: [
      "A) Syndrome fébrile induit par le Dabrafénib ; Arrêt temporaire du traitement ciblé, antipyrétiques (paracétamol) et réintroduction à posologie adaptée après apyrisie complète",
      "B) Choc septique à méningocoque ; Antibiothérapie d'urgence",
      "C) Progression fulgurante du mélanome ; Arrêt définitif de tout traitement",
      "D) Rejet immunologique d'organe",
      "E) Grippe maligne saisonnière ; Oseltamivir seul"
    ],
    correctAnswers: [0],
    explanation: "La pyrexie (fièvre élevée avec frissons) est l'effet secondaire caractéristique majeur de l'association Dabrafénib + Tramétinib (survenant chez plus de 50% des patients). Elle n'est pas d'origine infectieuse. Elle impose l'interruption temporaire du traitement jusqu'à résolution, des antipyrétiques ou une courte corticothérapie, puis une réintroduction.",
    difficulty: 'moyen'
  }
];

export const HEMATO_LESSON_18_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-18-01',
    courseId: 'crs-hemato-18',
    type: 'resume',
    title: "Mind Map Synthèse : Armes Thérapeutiques du Cancer",
    contentMarkdown: `# Mind Map : Armes Thérapeutiques du Cancer (Dr A. Douifi)

\`\`\`
                                  ARMES THÉRAPEUTIQUES EN CANCÉROLOGIE
                                                    │
         ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
         ▼                  ▼                       ▼                       ▼                  ▼
CHIRURGIE ONCOLOGIQUE   RADIOTHÉRAPIE           CHIMIOTHÉRAPIE          THÉRAPIES CIBLÉES      IMMUNOTHÉRAPIE
- Objectif : Marges R0  - Externe (4 R radio-   - Alkylants (Endoxan)   - Ac anti-HER2         - Checkpoint Inhibitors
- Ganglion sentinelle     biologie : Réparation, - Antimétabolites (5FU)  (Trastuzumab)          anti-PD-1 (Pembro)
- Néoadjuvant (avant)     Réoxygénation,          en phase S            - Ac anti-EGFR           anti-CTLA-4 (Ipi)
- Adjuvant (après)        Redistrib., Repop.)   - Poisons du fuseau       (Cétuximab : RAS wt) - Lèvent le frein immunitaire
                        - Curiethérapie interne   (Taxanes, Vinca)      - ITK oraux : EGFR,    - Efficacité majeure si
                          au contact              en phase M              ALK, BRAF V600E        statut **dMMR / MSI-H**
\`\`\`

## Hormonothérapie :
- **Cancer du Sein** :
  - Non ménopausée : **Tamoxifène** (SERM antagoniste mammaire).
  - Ménopausée : **Inhibiteurs de l'aromatase** (Létrozole, Anastrozole).
- **Cancer de la Prostate** :
  - Agonistes LHRH (Leuproréline) + **Anti-androgène** (Bicalutamide) pour contrer le *flare-up*.`,
    authorOrSource: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-hem-18-02',
    courseId: 'crs-hemato-18',
    type: 'astuce',
    title: "Astuces & Pièges aux Concours : Pharmacologie Anticancéreuse",
    contentMarkdown: `### 🎯 Pièges Cruciaux pour le Concours

1. **R0 vs R1 vs R2** :
   - R0 = Marges microscopiques saines.
   - R1 = Reliquat microscopique.
   - R2 = Résidu macroscopique visible.
2. **Anti-EGFR & Gène RAS** :
   - Cétuximab / Panitumumab inefficaces si mutation de KRAS ou NRAS ! Le gène doit être **SAUVAGE (wild-type)**.
3. **Double thérapie ciblée anti-VEGF + anti-EGFR** :
   - FORMELLEMENT CONTRE-INDIQUÉE (CAIRO-2 : surtoxicité et perte d'efficacité).
4. **Hormonothérapie du sein** :
   - Femme non ménopausée = Tamoxifène (inhibiteur de l'aromatase inefficace seul car ovaires fonctionnels).
   - Femme ménopausée = Inhibiteurs de l'aromatase (Létrozole, Anastrozole).
5. **MSI-H / dMMR** :
   - Biomarqueur universel de sensibilité spectaculaire aux anti-PD-1 (Pembrolizumab).`,
    authorOrSource: 'Dr. LAIDANI.M'
  }
];
