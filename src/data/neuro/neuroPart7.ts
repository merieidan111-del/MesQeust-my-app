import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 19: TUMEURS CÉRÉBRALES
// ==========================================
export const NEURO_LESSON_19_QUESTIONS: Question[] = [
  {
    id: 'q-nro-19-01',
    courseId: 'crs-neuro-19',
    questionNumber: 1,
    type: 'QCM',
    content: "La tumeur intracrânienne maligne primitive la plus fréquente chez l'adulte est :",
    options: [
      "A) Le méningiome de la faux du cerveau.",
      "B) Le glioblastome (astrocytome de grade 4 de l'OMS).",
      "C) Le médulloblastome cérébelleux.",
      "D) Le craniopharyngiome sellaire.",
      "E) Le schwannome vestibulaire."
    ],
    correctAnswers: [1],
    explanation: "Le glioblastome IDH non muté (grade 4 de l'OMS) est la tumeur cérébrale parenchymateuse primitive maligne la plus fréquente et la plus agressive de l'adulte.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-02',
    courseId: 'crs-neuro-19',
    questionNumber: 2,
    type: 'QCM',
    content: "Les tumeurs cérébrales secondaires (métastases cérébrales) sont le plus souvent issues d'un primitif :",
    options: [
      "A) Pulmonaire (cancer broncho-pulmonaire, surtout à petites cellules et adénocarcinome).",
      "B) Gastrique pur.",
      "C) Ostéosarcome des os longs.",
      "D) Carcinome épidermoïde cutané de jambe.",
      "E) Tumeur bénigne de l'ovaire."
    ],
    correctAnswers: [0],
    explanation: "Le cancer bronchopulmonaire représente environ 50% de l'ensemble des métastases cérébrales, suivi du cancer du sein, du mélanome malin et des cancers du rein et du côlon.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-03',
    courseId: 'crs-neuro-19',
    questionNumber: 3,
    type: 'QCM',
    content: "Le méningiome intracrânien se caractérise typiquement à l'imagerie IRM ou TDM par :",
    options: [
      "A) Une tumeur extra-axiale à base d'implantation durale large avec prise de contraste intense et homogène et signe de la 'queue de comète' (dural tail).",
      "B) Une lésion intra-axiale nécrotique centrale purement kystique.",
      "C) Une absence complète de prise de contraste après injection.",
      "D) Une dissémination leptoméningée constante dès le stade 1.",
      "E) Une localisation exclusive dans la pulpe des doigts."
    ],
    correctAnswers: [0],
    explanation: "Tumeur extra-axiale développée aux dépens des cellules arachnoïdiennes : base d'insertion durale large, épaississement dural réactionnel en 'queue de comète' (dural tail) et rehaussement massif homogène.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-04',
    courseId: 'crs-neuro-19',
    questionNumber: 4,
    type: 'QCM',
    content: "Sur le plan moléculaire et pronostique, la co-délétion chromosomique 1p/19q est la signature génétique diagnostique et de bonne sensibilité à la chimiothérapie de :",
    options: [
      "A) L'oligodendrogliome IDH-muté.",
      "B) Le glioblastome de novo.",
      "C) Le méningiome atypique.",
      "D) Le schwannome du VIII.",
      "E) Le kyste épidermoïde de l'angle ponto-cérébelleux."
    ],
    correctAnswers: [0],
    explanation: "La co-délétion 1p/19q associée à la mutation IDH définit obligatoirement l'oligodendrogliome (classification OMS 2016/2021) et confère une chimiosensibilité (PCV ou témozolomide) et un pronostic favorable.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-19-05',
    courseId: 'crs-neuro-19',
    questionNumber: 5,
    type: 'QCM',
    content: "Le traitement médical d'urgence pour réduire l'œdème cérébral vasogénique périlésionnel induit par une tumeur cérébrale repose sur :",
    options: [
      "A) Les corticoïdes (méthylprednisolone ou dexaméthasone) à forte dose par voie intraveineuse ou orale.",
      "B) Les anticoagulants oraux directs.",
      "C) L'administration de sérum hypotonique (glucosé à 2,5%).",
      "D) Les inhibiteurs calciques per os seuls.",
      "E) La morphine à forte dose en continu."
    ],
    correctAnswers: [0],
    explanation: "La dexaméthasone ou méthylprednisolone restaure l'étanchéité de la barrière hémato-encéphalique tumorale, réduisant rapidement l'œdème vasogénique et l'hypertension intracrânienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-06',
    courseId: 'crs-neuro-19',
    questionNumber: 6,
    type: 'QCM',
    content: "Le protocole de Stupp, standard international de prise en charge du glioblastome chez le sujet jeune après résection chirurgicale maximale, associe :",
    options: [
      "A) Une radiothérapie focale normofractionnée (60 Gy) concomitante à une chimiothérapie par Témozolomide (Témodal®) oral quotidien, suivie de 6 cycles de Témozolomide adjuvant.",
      "B) Une chimiothérapie par cisplatine haute dose exclusive sans rayons.",
      "C) Une abstention thérapeutique complète jusqu'à la récidive.",
      "D) Une immunothérapie par interférons alpha exclusive.",
      "E) Une greffe de moelle osseuse allogénique."
    ],
    correctAnswers: [0],
    explanation: "Le protocole de Stupp (2005) combine radio-chimiothérapie concomitante (60 Gy + Témozolomide 75 mg/m²/j) puis 6 cures adjuvantes de Témozolomide (150-200 mg/m²/j 5j/28j).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-07',
    courseId: 'crs-neuro-19',
    questionNumber: 7,
    type: 'QCM',
    content: "Le schwannome vestibulaire (neurinome de l'acoustique) se développe électivement aux dépens de :",
    options: [
      "A) La branche vestibulaire du nerf cochléo-vestibulaire (VIII) au niveau du conduit auditif interne et de l'angle ponto-cérébelleux.",
      "B) Le nerf optique au foramen optique.",
      "C) Le nerf trijumeau au ganglion de Gasser uniquement.",
      "D) Le tronc basilaire lui-même.",
      "E) La dure-mère sphénoïdale."
    ],
    correctAnswers: [0],
    explanation: "Le schwannome vestibulaire naît de la gaine de myéline de Schwann du nerf vestibulaire supérieur ou inférieur dans le conduit auditif interne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-08',
    courseId: 'crs-neuro-19',
    questionNumber: 8,
    type: 'QCM',
    content: "Le symptôme révélateur le plus précoce et le plus constant d'un schwannome vestibulaire est :",
    options: [
      "A) Une surdité de perception unilatérale progressive, souvent associée à des acouphènes unilatéraux aigus et des troubles discrets de l'équilibre.",
      "B) Une paralysie faciale périphérique brutale d'emblée.",
      "C) Une hémianopsie bitemporale.",
      "D) Une diplopie par atteinte du IV.",
      "E) Une comitialité bravais-jacksonienne crurale."
    ],
    correctAnswers: [0],
    explanation: "L'hypoacousie de perception unilatérale insidieuse avec acouphènes unilatéraux est le signe d'appel quasi-constant imposant une IRM de l'angle ponto-cérébelleux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-09',
    courseId: 'crs-neuro-19',
    questionNumber: 9,
    type: 'QCM',
    content: "La présence de schwannomes vestibulaires bilatéraux est pathognomonique de quelle maladie génétique ?",
    options: [
      "A) La neurofibromatose de type 2 (NF2, mutation du gène de la merline sur le chromosome 22q).",
      "B) La neurofibromatose de type 1 (maladie de Recklinghausen).",
      "C) La sclérose tubéreuse de Bourneville.",
      "D) La maladie de Von Hippel-Lindau.",
      "E) Le syndrome de Sturge-Weber."
    ],
    correctAnswers: [0],
    explanation: "La NF2 est définie par la présence de schwannomes vestibulaires bilatéraux (gène NF2 / merline en 22q12), souvent associés à des méningiomes multiples.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-10',
    courseId: 'crs-neuro-19',
    questionNumber: 10,
    type: 'QCM',
    content: "L'adénome hypophysaire à prolactine (prolactinome) se manifeste classiquement chez la femme jeune par :",
    options: [
      "A) Le syndrome aménorrhée-galactorrhée avec baisse de la libido et infertilité anovulatoire.",
      "B) Une acromégalie avec prognathisme et épaississement des extrémités.",
      "C) Un syndrome de Cushing avec obésité facio-tronculaire.",
      "D) Une hyperthyroïdie avec exophtalmie bilatérale.",
      "E) Une polyurie-polydipsie insipide primitive d'emblée."
    ],
    correctAnswers: [0],
    explanation: "L'hyperprolactinémie bloque la pulsatilité de la GnRH gonadotrope, créant un hypogonadisme hypogonadotrope : aménorrhée secondaire et galactorrhée.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-11',
    courseId: 'crs-neuro-19',
    questionNumber: 11,
    type: 'QCM',
    content: "Le traitement médical de première intention des prolactinomes (macro- et microprolactinomes) repose sur :",
    options: [
      "A) Les agonistes dopaminergiques D2 oraux (cabergoline [Dostinex®] ou bromocriptine).",
      "B) La surrénalectomie bilatérale.",
      "C) L'iode radioactif 131.",
      "D) La chirurgie transsphénoïdale systématique en première intention.",
      "E) La radiothérapie stéréotaxique exclusive."
    ],
    correctAnswers: [0],
    explanation: "La dopamine étant le principal inhibiteur physiologique de la prolactine, les agonistes dopaminergiques (cabergoline) normalisent la prolactine et réduisent la taille tumorale dans plus de 85% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-12',
    courseId: 'crs-neuro-19',
    questionNumber: 12,
    type: 'QCM',
    content: "Le déficit visuel classique causé par la compression du chiasma optique par un volumineux macroadénome hypophysaire à expansion suprasellaire est :",
    options: [
      "A) Une hémianopsie bitemporale par atteinte des fibres nasales décussantes.",
      "B) Une hémianopsie binasale.",
      "C) Une quadranopsie inférieure homonyme.",
      "D) Une cécité corticale avec réflexe photomoteur conservé.",
      "E) Un scotome central unilatéral pur."
    ],
    correctAnswers: [0],
    explanation: "La compression inférieure médiane du chiasma lèse les fibres nasales qui décussent (responsables des champs visuels temporaux), entraînant une hémianopsie bitemporale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-13',
    courseId: 'crs-neuro-19',
    questionNumber: 13,
    type: 'QCM',
    content: "L'apoplexie hypophysaire est une urgence neuro-endocrinienne absolue causée par :",
    options: [
      "A) L'infarctus hémorragique ou nécrose aiguë brutale au sein d'un adénome hypophysaire préexistant, se traduisant par céphalées en coup de tonnerre, baisse visuelle brutale avec ophtalmoplégie et insuffisance corticotrope aiguë menaçant le pronostic vital.",
      "B) Une déchirure spontanée de la carotide interne.",
      "C) Une hypoglycémie réactionnelle bénigne.",
      "D) Un arrêt brutal des estrogènes.",
      "E) Une morsure d'insecte sellaire."
    ],
    correctAnswers: [0],
    explanation: "L'apoplexie pituitaire est un syndrome gravissime : céphalée explosive, décompression chiasmatique urgente parfois nécessaire et choc par insuffisance surrénalienne aiguë imposant l'hydrocortisone IV immédiate.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-14',
    courseId: 'crs-neuro-19',
    questionNumber: 14,
    type: 'QCM',
    content: "Le médulloblastome est une tumeur embryonnaire maligne de haut grade (OMS grade 4) survenant principalement chez :",
    options: [
      "A) L'enfant au niveau du cervelet (vermis du 4ème ventricule), avec risque élevé de dissémination le long du névraxe par le LCR.",
      "B) Le sujet de plus de 75 ans au niveau du lobe frontal.",
      "C) La femme enceinte au niveau de la selle turcique.",
      "D) Le nouveau-né prématuré au niveau de la rétine.",
      "E) L'adolescent au niveau du fémur distal."
    ],
    correctAnswers: [0],
    explanation: "Le médulloblastome est la tumeur cérébrale solide maligne la plus fréquente de l'enfant (pic à 5-7 ans), siégeant dans le toit du 4ème ventricule avec fort potentiel métastatique leptoméningé.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-15',
    courseId: 'crs-neuro-19',
    questionNumber: 15,
    type: 'QCM',
    content: "L'hémangioblastome du cervelet est une tumeur vasculaire bénigne très caractéristique de :",
    options: [
      "A) La maladie de Von Hippel-Lindau (VHL), pouvant s'accompagner d'une polyglobulie par sécrétion ectopique d'érythropoïétine (EPO).",
      "B) La sclérose latérale amyotrophique.",
      "C) La maladie de Paget osseuse.",
      "D) L'hypothyroïdie fruste.",
      "E) La myasthénie auto-immune."
    ],
    correctAnswers: [0],
    explanation: "L'hémangioblastome cérébelleux (nodule mural hypervascularisé dans un gros kyste) est associé au gène suppresseur VHL (chr 3p) et sécrète fréquemment de l'EPO (polyglobulie paranéoplasique).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-16',
    courseId: 'crs-neuro-19',
    questionNumber: 16,
    type: 'QCM',
    content: "Le craniopharyngiome, développé à partir de résidus de la poche de Rathke dans la région suprasellaire, présente classiquement à l'imagerie :",
    options: [
      "A) Une composante kystique liquidienne riche en cholestérol ('huile de vidange') et des calcifications de la paroi kystique très caractéristiques au scanner.",
      "B) Une ostéolyse complète de la voûte pariétale.",
      "C) Une absence totale de tout kyste.",
      "D) Une métastase pulmonaire synchrone obligatoire.",
      "E) Une vascularisation purement veineuse superficielle."
    ],
    correctAnswers: [0],
    explanation: "Le craniopharyngiome comporte une triade radiologique typique : lésion suprasellaire kystique, calcifications nodulaires ou coquillères au scanner et prise de contraste nodulaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-17',
    courseId: 'crs-neuro-19',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans le bilan d'extension systématique d'une métastase cérébrale unique découverte chez un patient sans cancer primitif connu, le premier examen thoraco-abdominal à réaliser est :",
    options: [
      "A) Un scanner thoraco-abdomino-pelvien (TAP) avec injection de produit de contraste iodé.",
      "B) Une fibroscopie œso-gastro-duodénale seule.",
      "C) Une mammographie isolée.",
      "D) Une échographie prostatique transrectale.",
      "E) Une ponction de moelle osseuse sternale."
    ],
    correctAnswers: [0],
    explanation: "Le scanner TAP injecté recherche la porte d'entrée primitive (nodule pulmonaire, masse digestive, rénale, gynécologique) dans plus de 80% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-18',
    courseId: 'crs-neuro-19',
    questionNumber: 18,
    type: 'QCM',
    content: "La voie d'abord chirurgicale de référence pour l'exérèse de la grande majorité des macroadénomes hypophysaires à développement suprasellaire médian est :",
    options: [
      "A) La voie transsphénoïdale endonasale (microchirurgicale ou endoscopique).",
      "B) La craniotomie bi-frontale élargie systématique.",
      "C) La thoracotomie postérieure.",
      "D) L'abord rétro-sigmoïde cérébelleux.",
      "E) La voie trans-labyrinthique translésionnelle."
    ],
    correctAnswers: [0],
    explanation: "La voie transnasale transsphénoïdale permet un accès direct mini-invasif au plancher sellaire sans rétraction du tissu cérébral sous-frontal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-19',
    courseId: 'crs-neuro-19',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans le lymphome primitif du système nerveux central (LPSNC) chez le patient immunocompétent, quelle classe de médicament doit impérativement être DIFFÉRÉE avant la biopsie cérébrale sous stéréotaxie sous peine de rendre la biopsie faussement négative ?",
    options: [
      "A) Les corticoïdes (dexaméthasone/méthylprednisolone), qui entraînent une lyse lymphocytaire spectaculaire ('tumeur fantôme').",
      "B) Les antibiotiques bêta-lactamines.",
      "C) Le paracétamol.",
      "D) L'acide acétylsalicylique.",
      "E) Les antiémétiques sétrons."
    ],
    correctAnswers: [0],
    explanation: "Les corticoïdes ont une cytotoxicité lympholytique majeure sur le lymphome cérébral : ils peuvent faire disparaître la lésion radiologiquement en 48h et négativer la biopsie. Il faut les surseoir jusqu'au prélèvement sauf engagement vital.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-20',
    courseId: 'crs-neuro-19',
    questionNumber: 20,
    type: 'QCM',
    content: "La méthylation du promoteur du gène MGMT (O6-méthylguanine-ADN méthyltransférase) dans le glioblastome est :",
    options: [
      "A) Un facteur prédictif d'une meilleure réponse au Témozolomide et d'une survie prolongée.",
      "B) Un marqueur de résistance totale à toute forme de radiothérapie.",
      "C) Une mutation exclusive de l'enfant de moins de 1 an.",
      "D) Une anomalie chromosomique visible au caryotype standard.",
      "E) Un signe certain de bénignité histologique."
    ],
    correctAnswers: [0],
    explanation: "MGMT est une enzyme réparant les lésions d'alkylation de l'ADN : la méthylation réduit son expression, rendant les cellules glioblastomateuses incapables de réparer les dégâts du Témozolomide, augmentant la survie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-19-21',
    courseId: 'crs-neuro-19',
    questionNumber: 21,
    type: 'QCM',
    content: "L'astrocytome pilocytique (grade 1 de l'OMS) est une tumeur cérébrale bénigne survenant électivement chez l'enfant au niveau de :",
    options: [
      "A) Le cervelet (hémisphère cérébelleux ou vermis) et les voies optiques, se présentant sous la forme d'un kyste avec nodule mural prenant le contraste.",
      "B) La moelle sacrée terminale.",
      "C) La dure-mère occipitale.",
      "D) Les corps mamillaires de manière bilatérale.",
      "E) La carotide interne."
    ],
    correctAnswers: [0],
    explanation: "L'astrocytome pilocytique est la tumeur gliale la plus fréquente de l'enfant : bénigne (grade 1), cervelet/nerf optique, kyste + nodule mural rehaussé, guérison après exérèse complète.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-22',
    courseId: 'crs-neuro-19',
    questionNumber: 22,
    type: 'QCM',
    content: "Les signes d'engagement temporal (engagement uncal) comprimant le mésencéphale lors d'une volumineuse tumeur hémisphérique associent :",
    options: [
      "A) Une mydriase unilatérale aréactive homolatérale à la lésion (compression du nerf III) et une hémiplégie controlatérale (parfois homolatérale par signe de Kernohan).",
      "B) Un myosis serré bilatéral sans déficit moteur.",
      "C) Une cécité brutale bitemporale sans anomalie motrice.",
      "D) Une apraxie de la marche isolée.",
      "E) Une diplopie horizontale isolée par atteinte du VI."
    ],
    correctAnswers: [0],
    explanation: "L'hernie de l'uncus temporal dans la fente de Bichat comprime le tronc cérébral et le nerf III : mydriase unilatérale précoce paralytique + coma rapide + déficit moteur = extrême urgence chirurgicale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-23',
    courseId: 'crs-neuro-19',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans la prise en charge d'un patient présentant une crise d'épilepsie inaugurale révélant une tumeur cérébrale frontale, quel antiépileptique moderne est privilégié en raison de son absence d'induction enzymatique et d'interactions avec la chimiothérapie ?",
    options: [
      "A) Le lévétiracétam (Képpra®).",
      "B) Le phénobarbital (Gardénal®).",
      "C) La phénytoïne (Dilantin®).",
      "D) La carbamazépine (Tégrétol®).",
      "E) Le primidone."
    ],
    correctAnswers: [0],
    explanation: "Le lévétiracétam (Képpra) ou le lacosamide n'ont pas d'induction enzymatique hépatique cytochromique, évitant de diminuer les concentrations des chimiothérapies et corticoïdes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-24',
    courseId: 'crs-neuro-19',
    questionNumber: 24,
    type: 'QCM',
    content: "Le gliome infiltrant du tronc cérébral (DIPG) chez l'enfant est caractérisé par :",
    options: [
      "A) Une localisation pontique diffuse, l'impossibilité d'une exérèse chirurgicale en raison des noyaux vitaux, la mutation récurrente de l'histone H3 K27M et un pronostic extrêmement sombre.",
      "B) Une guérison par résection chirurgicale complète dans 95% des cas.",
      "C) Une localisation sous-durale bénigne curable.",
      "D) Une origine bactérienne pure.",
      "E) Une régression spontanée à la puberté."
    ],
    correctAnswers: [0],
    explanation: "Le DIPG (Diffuse Intrinsic Pontine Glioma / gliome diffus de la ligne médiane H3K27M muté) infiltre le pont de Varole, récusant toute chirurgie et restant de pronostic très péjoratif.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-19-25',
    courseId: 'crs-neuro-19',
    questionNumber: 25,
    type: 'QCM',
    content: "L'épendymome du quatrième ventricule chez le jeune enfant se manifeste principalement par :",
    options: [
      "A) Une hypertension intracrânienne progressive matinale avec vomissements et torticolis par blocage de l'écoulement du LCR et hydrocéphalie obstructive.",
      "B) Une aménorrhée secondaire précoce.",
      "C) Une anémie hémolytique aiguë auto-immune.",
      "D) Un souffle cardiaque diastolique fébrile.",
      "E) Une ostéolyse mandibulaire."
    ],
    correctAnswers: [0],
    explanation: "Développé aux dépens de la paroi épendymaire du plancher ou du toit du V4, l'épendymome obstrue le drainage du LCR, provoquant une hydrocéphalie tri-ventriculaire aiguë/subaiguë.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-19-c01',
    courseId: 'crs-neuro-19',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un homme de 62 ans, tabagique sevré, consulte pour des céphalées matinales inhabituelles d'aggravation progressive depuis 3 semaines, associées à des ralentissements idéomoteurs et une faiblesse du membre supérieur droit. L'examen retrouve un syndrome pyramidal déficitaire brachio-facial droit et une aphasie motrice discrète. L'IRM montre une volumineuse lésion frontale gauche de 5 cm, infiltrante, avec vaste centre nécrotique, prise de contraste hétérogène serpigineuse en bague épaisse, œdème périlésionnel important et déviation de la ligne médiane de 8 mm. Quel diagnostic suspectez-vous en priorité ?",
    options: [
      "A) Glioblastome multiforme frontal gauche.",
      "B) Sclérose en plaques forme pseudo-tumorale bénigne.",
      "C) Méningiome bénin de la convexité.",
      "D) Hémorragie méningée anévrismale aiguë.",
      "E) Abcès cérébral amibien purulent."
    ],
    correctAnswers: [0],
    explanation: "Sujet de 60 ans + HIC + déficit focal + lésion frontière avec nécrose centrale et prise de contraste périphérique irrégulière en couronne avec effet de masse = glioblastome IDH non muté.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-c02',
    courseId: 'crs-neuro-19',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel traitement médical symptomatique devez-vous administrer immédiatement pour décomprimer le parenchyme cérébral et préparer l'acte neurochirurgical ?",
    options: [
      "A) Dexaméthasone (ou méthylprednisolone) par voie intraveineuse à forte dose sous protection gastrique.",
      "B) Anticoagulants oraux directs.",
      "C) Riluzole per os.",
      "D) Ponction lombaire déplétive de 40 ml de LCR.",
      "E) Morphine par pompe autocontrôlée sans corticoïdes."
    ],
    correctAnswers: [0],
    explanation: "Les corticoïdes à forte dose réduisent de façon spectaculaire l'œdème vasogénique péri-tumoral et le risque d'engagement avant la chirurgie d'exérèse maximale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-c03',
    courseId: 'crs-neuro-19',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Une femme de 42 ans consulte pour une baisse progressive de l'audition de l'oreille gauche remarquée depuis un an lors des conversations téléphoniques, associée à des bourdonnements d'oreille aigus continus gauches. L'audiométrie tonale confirme une surdité de perception prédominant sur les fréquences aiguës à gauche avec baisse importante de la discrimination vocale. Les potentiels évoqués auditifs (PEA) montrent un allongement de l'intervalle I-V à gauche. L'IRM montre une lésion de 18 mm dans le conduit auditif interne gauche s'étendant dans l'angle ponto-cérébelleux, se rehaussant intensément au gadolinium. Quel est le diagnostic ?",
    options: [
      "A) Schwannome vestibulaire gauche (neurinome de l'acoustique).",
      "B) Cholestéatome de l'oreille moyenne.",
      "C) Otospongiose stapédienne bilatérale.",
      "D) Maladie de Ménière au stade initial.",
      "E) Méningite purulente à pneumocoque décapitée."
    ],
    correctAnswers: [0],
    explanation: "Surdité de perception unilatérale rétro-cochléaire + PEA altérés + lésion centrée sur le conduit auditif interne et l'angle ponto-cérébelleux = schwannome vestibulaire gauche.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-c04',
    courseId: 'crs-neuro-19',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Une patiente de 29 ans, nulligeste, consulte pour une absence totale de règles (aménorrhée secondaire) depuis 8 mois et des écoulements laiteux bilatéraux spontanés aux mamelons. Le test de grossesse est négatif. Le dosage sanguin de prolactine revient très élevé à 240 ng/ml (N < 20). L'IRM hypophysaire confirme la présence d'un microadénome intrasellaire de 7 mm sans retentissement sur le chiasma optique. Quel traitement de première intention prescrivez-vous ?",
    options: [
      "A) Un agoniste dopaminergique oral (cabergoline / Dostinex®).",
      "B) Une chirurgie hypophysaire par voie haute sous-frontale.",
      "C) Une radiothérapie conventionnelle de l'hypophyse.",
      "D) Des injections quotidiennes d'estrogènes à forte dose.",
      "E) Une hystérectomie subtotale."
    ],
    correctAnswers: [0],
    explanation: "Le prolactinome (y compris macroadénome sans menace visuelle) relève d'un traitement médical de première intention par agonistes dopaminergiques (cabergoline) qui restaure les cycles ovulatoires et fait fondre la tumeur.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-19-c05',
    courseId: 'crs-neuro-19',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient de 54 ans opéré il y a 3 ans d'un adénocarcinome colique présente brutalement des céphalées et une crise convulsive motrice droite. L'IRM injectée révèle 3 lésions arrondies distinctes situées aux jonctions substance blanche-substance grise frontale gauche, pariétale droite et cérébelleuse droite, entourées d'un œdème digitaliforme important, se rehaussant intensément en nodule après injection. Quel est le diagnostic le plus probable ?",
    options: [
      "A) Métastases cérébrales multiples d'origine digestive colique.",
      "B) Glioblastome multifocal primitif.",
      "C) Maladie d'Alzheimer compliquée d'angiopathie amyloïde.",
      "D) Sclérose en plaques forme récurrente.",
      "E) Tuberculose ganglionnaire primitive sans atteinte cérébrale."
    ],
    correctAnswers: [0],
    explanation: "Multiplicité des lésions, siège à la jonction substance blanche-substance grise (embols tumoraux hématogènes terminaux) et œdème chez un patient cancéreux = métastases cérébrales hématogènes multiples.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_19_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-19-mindmap',
    courseId: 'crs-neuro-19',
    title: 'Mind Map : Tumeurs Cérébrales & Primitives / Secondaires',
    type: 'mindmap',
    content: `# Mind Map : Tumeurs Intracrâniennes

## 1. Tumeurs Gliales (Gliomes)
- **Glioblastome (OMS Grade 4)** : Tumeur maligne primitive la plus fréquente chez l'adulte (> 50-60 ans). Lésion nécrotique, bague irrégulière rehaussée, œdème massif. Traitement : Résection max + Protocole de Stupp (RT 60Gy + Témozolomide). Méthylation MGMT = bon pronostic.
- **Astrocytome pilocytique (Grade 1)** : Enfant, cervelet, kyste + nodule mural. Guérison chirurgicale.
- **Oligodendrogliome** : Co-délétion 1p/19q + Mutation IDH = Chimiosensible (Témozolomide/PCV).

## 2. Tumeurs Extra-Axiales
- **Méningiome** : Tumeur bénigne la plus fréquente, femme (récepteurs progestatifs). Extra-axiale, base durale large, signe de la queue de comète (dural tail), rehaussement massif homogène.
- **Schwannome Vestibulocochléaire (VIII)** : Angle ponto-cérébelleux. Surdité de perception unilatérale + Acouphènes. Bilatéral = Neurofibromatose 2 (NF2).

## 3. Région Sellaire
- **Adénome à Prolactine** : Aménorrhée-galactorrhée (F), baisse libido (H). Traitement médical : Agonistes dopaminergiques (Cabergoline).
- **Macroadénome compresseur** : Hémianopsie bitemporale (chiasma). Voie d'abord : Transsphénoïdale endonasale.
- **Apoplexie Hypophysaire** : Nécrose/Hémorragie aiguë -> Hydrocortisone IV d'urgence !

## 4. Métastases Cérébrales
- Tumeurs cérébrales les plus fréquentes de l'adulte au total.
- Primitifs : Poumon (50%), Sein, Mélanome, Rein, Colon. Siège : Jonction substance blanche-substance grise. Multiples (70%).`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-19-astuces',
    courseId: 'crs-neuro-19',
    title: 'Astuces & Pièges aux Concours : Tumeurs Cérébrales',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Corticoïdes et Lymphome Cérébral Primitif :**
   - Piège d'examen n°1 : **Ne JAMAIS débuter les corticoïdes** avant la biopsie stéréotaxique d'une suspicion de lymphome cérébral sous peine de négativer histologiquement le prélèvement ("tumeur fantôme").
2. **Prolactinome = Traitement MÉDICAL en 1ère intention :**
   - Même un macroadénome à prolactine relève des **agonistes dopaminergiques (Cabergoline)** et non de la chirurgie d'emblée. La chirurgie n'est indiquée qu'en cas de résistance ou d'intolérance.
3. **Queue de comète (Dural tail) :**
   - Ne signifie PAS une invasion cancéreuse maligne de la dure-mère : c'est un épaississement dural réactionnel hypervascularisé classique du **méningiome bénin**.
4. **Co-délétion 1p/19q :**
   - Spécifique des **oligodendrogliomes** (absente dans les astrocytomes purs). Associée à une excellente réponse à la chimiothérapie.
5. **Apoplexie hypophysaire :**
   - Céphalée brutale + ptosis/diplopie + baisse visuelle : doser en urgence le cortisol et injecter de l'**hémisuccinate d'hydrocortisone** pour éviter le décès par insuffisance surrénalienne aiguë.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 20: LES URGENCES NEUROCHIRURGICALES
// ==========================================
export const NEURO_LESSON_20_QUESTIONS: Question[] = [
  {
    id: 'q-nro-20-01',
    courseId: 'crs-neuro-20',
    questionNumber: 1,
    type: 'QCM',
    content: "L'hématome extradural (HED) aigu résulte typiquement d'une hémorragie :",
    options: [
      "A) Veineuse par déchirure des veines ponts sous-durales.",
      "B) Artérielle sous haute pression, le plus souvent par rupture de l'artère méningée moyenne consécutive à une fracture de l'écaille temporale.",
      "C) Capillaire intraparenchymateuse diffuse.",
      "D) Du sinus sagittal supérieur exclusivement.",
      "E) D'une artère cérébrale antérieure distale."
    ],
    correctAnswers: [1],
    explanation: "L'HED est une urgence vitale liée à la déchirure de l'artère méningée moyenne ou de ses branches sous l'impact d'une fracture temporo-pariétale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-02',
    courseId: 'crs-neuro-20',
    questionNumber: 2,
    type: 'QCM',
    content: "L'aspect tomodensitométrique (TDM) sans injection caractéristique d'un hématome extradural aigu est :",
    options: [
      "A) Une hyperdensité spontanée homogène en lentille biconvexe (croissant à concavité interne fermée), limitée par les sutures crâniennes où la dure-mère est adhérente à l'os.",
      "B) Une hyperdensité en croissant extra-axial étendu franchissant librement les sutures.",
      "C) Une hypodensité pure sans aucun effet de masse.",
      "D) Une image en cocarde avec œdème périlésionnel en doigt de gant.",
      "E) Un effacement isolé des citernes sans collection."
    ],
    correctAnswers: [0],
    explanation: "L'HED se décolle difficilement de la table interne de l'os crânien : il forme une masse en lentille biconvexe hyperdense spontanément, arrêtée par les sutures crâniennes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-03',
    courseId: 'crs-neuro-20',
    questionNumber: 3,
    type: 'QCM',
    content: "L'intervalle libre dans l'hématome extradural classique correspond à :",
    options: [
      "A) Une phase de coma d'emblée d'une durée minimale de 72 heures sans réveil.",
      "B) La période transitoire de lucidité et de conscience normale (quelques heures) séparant la perte de connaissance initiale brève post-traumatique de l'aggravation secondaire rapide vers le coma avec mydriase.",
      "C) Le délai de cicatrisation cutanée d'une plaie du scalp.",
      "D) Le temps écoulé entre le scanner et la sortie du patient.",
      "E) L'absence de tout signe clinique pendant plus de 10 ans."
    ],
    correctAnswers: [1],
    explanation: "L'intervalle libre (traumatisme -> réveil lucide -> aggravation secondaire brutale vers le coma) est le piège majeur : tout traumatisé crânien ayant eu une PC initiale doit être surveillé.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-04',
    courseId: 'crs-neuro-20',
    questionNumber: 4,
    type: 'QCM',
    content: "L'hématome sous-dural (HSD) aigu du sujet jeune ou âgé résulte le plus souvent de la rupture de :",
    options: [
      "A) L'artère méningée moyenne.",
      "B) Les veines ponts corticales se jetant dans les sinus veineux duraux (sinus sagittal supérieur).",
      "C) La veine cave supérieure.",
      "D) L'artère ophtalmique.",
      "E) Les artères cérébelleuses antéro-inférieures."
    ],
    correctAnswers: [1],
    explanation: "L'HSD aigu est causé par le cisaillement des veines ponts corticales tendues entre la convexité cérébrale et la dure-mère lors des mouvements de décélération/accélération brutale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-05',
    courseId: 'crs-neuro-20',
    questionNumber: 5,
    type: 'QCM',
    content: "À l'imagerie tomodensitométrique cérébrale sans injection, l'hématome sous-dural aigu se présente comme :",
    options: [
      "A) Une collection hyperdense extra-axiale en croissant concave vers le parenchyme cérébral, s'étendant sur toute la convexité hémisphérique et pouvant franchir les sutures osseuses.",
      "B) Une collection biconvexe limitée par les sutures crâniennes.",
      "C) Une bulle gazeuse unique du 3ème ventricule.",
      "D) Une dilatation tétraventriculaire sans hématome.",
      "E) Une calcification punctiforme du corps calleux."
    ],
    correctAnswers: [0],
    explanation: "L'espace sous-dural n'est pas compartimenté par les sutures : l'HSD s'étale largement sous la forme d'un croissant hyperdense le long de toute la voûte hémisphérique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-06',
    courseId: 'crs-neuro-20',
    questionNumber: 6,
    type: 'QCM',
    content: "La triade de Cushing, traduisant une hypertension intracrânienne terminale menaçant la vie par engagement cérébral imminent, associe :",
    options: [
      "A) Hypertension artérielle systolique majeure, bradycardie et bradypnée (ou irrégularité respiratoire de Cheyne-Stokes).",
      "B) Hypotension artérielle, tachycardie et polypnée.",
      "C) Fièvre à 41°C, éruption purpurique et polyurie.",
      "D) Diarrhée profuse, myosis et sialorrhée.",
      "E) Pâleur conjonctivale, ascite et ictère franc."
    ],
    correctAnswers: [0],
    explanation: "Réponse réflexe du tronc cérébral à l'ischémie par HIC critique (phénomène de Cushing) : HTA avec élargissement de la différentielle + bradycardie réflexe + bradypnée/irrégularité du rythme respiratoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-07',
    courseId: 'crs-neuro-20',
    questionNumber: 7,
    type: 'QCM',
    content: "Une embarrure crânienne est définie par :",
    options: [
      "A) Une fracture de la voûte du crâne avec enfoncement d'un ou plusieurs fragments osseux sous le niveau de la table interne du crâne adjacent.",
      "B) Une fracture linéaire sans aucun déplacement.",
      "C) Une luxation mandibulaire bilatérale.",
      "D) Une disjonction de la suture sagittale isolée.",
      "E) Une malformation congénitale de la voûte sans traumatisme."
    ],
    correctAnswers: [0],
    explanation: "L'embarrure est l'enfoncement traumatique de fragments osseux de la voûte vers le parenchyme cérébral ; elle peut être ouverte (risque septique) ou fermée, et nécessite un parage/rehaussement si > épaisseur de la voûte.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-08',
    courseId: 'crs-neuro-20',
    questionNumber: 8,
    type: 'QCM',
    content: "Dans un traumatisme crânien, une plaie crânio-cérébrale est formellement caractérisée par :",
    options: [
      "A) Une déchirure simultanée du scalp, du plancher osseux et de la dure-mère, mettant le parenchyme cérébral en communication directe avec l'extérieur.",
      "B) Une simple plaie superficielle du cuir chevelu sans brèche osseuse ni durale.",
      "C) Un hématome sous-cutané fermé du vertex.",
      "D) Une fracture de l'aile iliaque.",
      "E) Une contusion cérébrale fermée sans fracture."
    ],
    correctAnswers: [0],
    explanation: "La plaie crânio-cérébrale est définie par la brèche méningée durale mettant le cerveau à nu en contact avec le milieu extérieur, avec un risque majeur d'infection (méningite, abcès, empyème).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-09',
    courseId: 'crs-neuro-20',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle est la prise en charge d'urgence d'une plaie crânio-cérébrale vue dans les premières heures ?",
    options: [
      "A) Antibiothérapie prophylactique IV, prévention antitétanique, parage chirurgical minutieux au bloc avec ablation des esquilles osseuses souillées et fermeture étanche impérative de la dure-mère (plastie durale si besoin).",
      "B) Fermeture exclusive de la peau par agrafes sans explorer l'os ni la dure-mère.",
      "C) Abstention chirurgicale et surveillance à domicile.",
      "D) Application de compresses imbibées d'alcool à 90° directement sur le tissu cérébral.",
      "E) Ponction lombaire déplétive immédiate."
    ],
    correctAnswers: [0],
    explanation: "Urgence neurochirurgicale : parage des berges osseuses et cérébrales contuses, décontamination, fermeture étanche de la dure-mère par plastie aponévrotique ou péricrânienne pour prévenir la méningite.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-10',
    courseId: 'crs-neuro-20',
    questionNumber: 10,
    type: 'QCM',
    content: "Le signe clinique le plus précoce d'un engagement temporal menaçant lors d'un hématome extradural temporal est :",
    options: [
      "A) Une anisocorie avec mydriase unilatérale aréactive homolatérale à l'hématome par compression du nerf moteur oculaire commun (III).",
      "B) Un ptosis bilatéral isolé.",
      "C) Une surdité de perception unilatérale.",
      "D) Une perte du réflexe cornéen controlatéral.",
      "E) Un nystagmus vertical pur."
    ],
    correctAnswers: [0],
    explanation: "L'hernie de l'uncus temporal étire le nerf III du même côté : la mydriase homolatérale insensible à la lumière est le signal d'alarme absolu d'engagement immédiat imposant le volet de décompression.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-11',
    courseId: 'crs-neuro-20',
    questionNumber: 11,
    type: 'QCM',
    content: "Face à un traumatisé crânien comateux (Glasgow <= 8) avec hématome extradural temporal volumineux (> 30 cm³) et mydriase unilatérale, quelle est l'attitude thérapeutique ?",
    options: [
      "A) Intubation oro-trachéale, sédation, manitol ou soluté salé hypertonique IV, et transfert immédiat au bloc opératoire pour craniotomie/volet osseux et évacuation de l'hématome sans aucun retard.",
      "B) Prescription d'anticoagulants oraux.",
      "C) Surveillance simple en chambre standard.",
      "D) Réalisation d'une IRM fonctionnelle sous 48 heures.",
      "E) Ponction lombaire évacuatrice en urgence."
    ],
    correctAnswers: [0],
    explanation: "L'HED compressif est une urgence d'évacuation chirurgicale minute : intubation avec protection des voies aériennes, osmothérapie transitoire et évacuation chirurgicale immédiate par volet.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-12',
    courseId: 'crs-neuro-20',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans un traumatisme du rachis cervical, la lésion neurologique se traduisant par une tétraplégie flasque avec anesthésie complète sous le niveau lésionnel, rétention aiguë d'urines et hypotension artérielle par vasoplégie correspond au :",
    options: [
      "A) Choc spinal (sidération médullaire aiguë) avec composante de choc neurogénique par perte du tonus sympathique.",
      "B) Choc hypovolémique hémorragique pur.",
      "C) Choc cardiogénique obstructif.",
      "D) Choc anaphylactique sévère.",
      "E) Syndrome de sevrage alcoolique aigu."
    ],
    correctAnswers: [0],
    explanation: "Le choc neurogénique (lésion médullaire au-dessus de T6) associe vasoplégie, bradycardie paradoxale et hypotension artérielle par rupture des voies sympathiques descendantes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-13',
    courseId: 'crs-neuro-20',
    questionNumber: 13,
    type: 'QCM',
    content: "La fracture de Jefferson correspond anatomiquement à :",
    options: [
      "A) Une fracture avec éclatement de l'atlas (C1) par compression axiale, avec rupture des arcs antérieur et postérieur.",
      "B) Une fracture bi-pédiculaire de l'axis (C2) par hyperextension (fracture du pendu).",
      "C) Une fracture de l'apophyse odontoïde de type II.",
      "D) Une luxation unilatérale C6-C7.",
      "E) Une fracture tassement ostéoporotique de L1."
    ],
    correctAnswers: [0],
    explanation: "La fracture de Jefferson est la fracture-éclatement en 4 fragments des arcs antérieur et postérieur de la première vertèbre cervicale (C1/atlas) par choc axial sur le vertex.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-14',
    courseId: 'crs-neuro-20',
    questionNumber: 14,
    type: 'QCM',
    content: "La 'fracture du pendu' (Hangman's fracture) correspond à :",
    options: [
      "A) Une fracture bi-isthmique / bi-pédiculaire de l'axis (C2) par hyperextension brutale avec distraction.",
      "B) Une fracture tassement de T12.",
      "C) Une fracture du rocher avec otorragie.",
      "D) Une rupture du ligament croisé antérieur.",
      "E) Une luxation sous-astragalienne."
    ],
    correctAnswers: [0],
    explanation: "La fracture du pendu est la fracture traumatique bilatérale des pédicules ou de l'isthme de C2 (axis) survenue par hyperextension violente de la tête.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-15',
    courseId: 'crs-neuro-20',
    questionNumber: 15,
    type: 'QCM',
    content: "L'hématome sous-dural chronique (HSDC) du sujet âgé se manifeste typiquement par :",
    options: [
      "A) Un tableau d'installation insidieuse sur plusieurs semaines associant céphalées chroniques, ralentissement psychomoteur, confusion simulant une démence ou syndrome pseudotumoral, et fluctuations motrices.",
      "B) Une tétraplégie aiguë foudroyante en 5 minutes.",
      "C) Une hyperthermie maligne à 42°C d'emblée.",
      "D) Une surdité brusque bilatérale complète isolée.",
      "E) Une hémoptysie foudroyante."
    ],
    correctAnswers: [0],
    explanation: "L'HSDC est le grand simulateur de la gériatrie : il fait suite à un traumatisme minime oublié (3 à 6 semaines plus tôt) et se révèle par un tableau de démence curable, céphalées et déficit focal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-16',
    courseId: 'crs-neuro-20',
    questionNumber: 16,
    type: 'QCM',
    content: "Au scanner cérébral sans injection, l'aspect habituel d'un hématome sous-dural chronique évoluant depuis plus de 4 semaines est :",
    options: [
      "A) Une collection en croissant hypodense (ou isodense) par rapport au parenchyme cérébral, comprimant les sillons corticaux avec effet de masse sur le ventricule latéral.",
      "B) Une collection hyperdense pure comme au premier jour.",
      "C) Une pneumocéphalie sous tension pure.",
      "D) Un aspect de calcification complète en coquille d'œuf.",
      "E) Une disparition complète de toute trace visible."
    ],
    correctAnswers: [0],
    explanation: "Avec la liquéfaction de l'hémoglobine et la formation de membranes capillaires, le contenu devient hypodense (ou isodense au cortex vers J15-J21), formant une collection en croissant hypodense.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-17',
    courseId: 'crs-neuro-20',
    questionNumber: 17,
    type: 'QCM',
    content: "Le traitement chirurgical de référence d'un hématome sous-dural chronique volumineux symptomatique consiste en :",
    options: [
      "A) Une évacuation par simple trou de trépan (ou deux trous) avec rinçage abondant au sérum physiologique tiède et mise en place d'un drain sous-dural déclive pendant 24 à 48 heures.",
      "B) Une craniectomie décompressive unilatérale large à ciel ouvert avec ablation de la calotte.",
      "C) Une ponction lombaire quotidienne de 50 ml.",
      "D) La radiothérapie stéréotaxique cérébrale.",
      "E) La pose d'une dérivation ventriculo-péritonéale."
    ],
    correctAnswers: [0],
    explanation: "La trépanation avec lavage et drainage sous-dural externe à plat permet une évacuation simple, efficace et peu morbide de la collection liquéfiée chez le sujet fragile.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-18',
    courseId: 'crs-neuro-20',
    questionNumber: 20,
    type: 'QCM',
    content: "La prise en charge pré-hospitalière de tout traumatisé du rachis suspect impose impérativement :",
    options: [
      "A) L'immobilisation stricte de l'axe tête-cou-tronc dans l'axe neutre par un collier cervical rigide et un matelas à dépression (matelas coquille).",
      "B) La mise immédiate en position assise pour favoriser la respiration.",
      "C) La flexion forcée de la tête sur le thorax.",
      "D) La mobilisation libre du patient sans contention.",
      "E) L'absence de surveillance de la pression artérielle."
    ],
    correctAnswers: [0],
    explanation: "Toute mobilisation intempestive d'un rachis instable risque d'aggraver une lésion médullaire : collier cervical rigide + relevage en monobloc + matelas coquille.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-19',
    courseId: 'crs-neuro-20',
    questionNumber: 19,
    type: 'QCM',
    content: "La présence d'un écoulement de liquide clair par le nez (rhinorrhée cérébro-spinale) après un traumatisme crânio-facial signe :",
    options: [
      "A) Une fracture de la base du crâne intéressant l'étage antérieur (lame criblée de l'ethmoïde ou paroi postérieure du sinus frontal) avec brèche dure-mérienne.",
      "B) Une rhinite allergique saisonnière banale survenue par hasard.",
      "C) Une fracture isolée de la mandibule.",
      "D) Une luxation de la cloison nasale sans brèche durale.",
      "E) Une infection lacrymale superficielle."
    ],
    correctAnswers: [0],
    explanation: "La rhinorrhée de LCR (reconnue par la présence de bêta-2 transferrine / bêta-trace protéine) témoigne d'une brèche ostéo-méningée de l'étage antérieur exposant au risque de méningite à pneumocoque.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-20',
    courseId: 'crs-neuro-20',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans les traumatismes crâniens, les signes cliniques classiques d'une fracture du rocher (étage moyen de la base du crâne) sont :",
    options: [
      "A) Une otorragie ou otoliquorrhée, une ecchymose rétro-auriculaire mastoïdienne (signe de Battle) et une paralysie faciale périphérique précoce ou différée.",
      "B) Des ecchymoses péri-orbitaires bilatérales en lunettes (yeux de raton laveur).",
      "C) Un trismus avec tuméfaction parotidienne.",
      "D) Une déviation isolée de la luette sans signe otologique.",
      "E) Une cécité monoculaire brutale sans saignement d'oreille."
    ],
    correctAnswers: [0],
    explanation: "La fracture du rocher associe otorragie, hématome mastoïdien de Battle, paralysie du nerf facial (VII) intrapétreux et possible lésion cochléo-vestibulaire (VIII).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-21',
    courseId: 'crs-neuro-20',
    questionNumber: 21,
    type: 'QCM',
    content: "Les ecchymoses péri-orbitaires bilatérales 'en lunettes' ou 'yeux de panda' (raccoon eyes) traduisent une fracture de :",
    options: [
      "A) L'étage antérieur de la base du crâne (toit des orbites / ethmoïde).",
      "B) L'os occipital au niveau du trou déchiré postérieur.",
      "C) La vertèbre C7.",
      "D) L'apophyse odontoïde.",
      "E) Le processus coracoïde scapulaire."
    ],
    correctAnswers: [0],
    explanation: "L'hématome en lunettes résulte de la diffusion sanguine sous-cutanée à partir d'une fracture du toit des orbites ou de la lame criblée (étage antérieur).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-22',
    courseId: 'crs-neuro-20',
    questionNumber: 22,
    type: 'QCM',
    content: "La lésion de l'apophyse odontoïde de l'axis (C2) la plus instable et au taux le plus élevé de pseudarthrose est la fracture :",
    options: [
      "A) De type II d'Anderson et d'Alonzo (fracture transversale du col/base de l'odontoïde).",
      "B) De type I (arrachement du sommet apical).",
      "C) De type III (fracture corporéale s'étendant dans le corps de C2, consolidant bien).",
      "D) De type métaphysaire fermée sans trait.",
      "E) Des épineuses thoraciques."
    ],
    correctAnswers: [0],
    explanation: "La fracture de type II (au col de l'odontoïde) est située dans une zone de mauvaise vascularisation terminale, exposant à un risque de pseudarthrose > 30-50% nécessitant souvent vissage ou arthrodèse C1-C2.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-20-23',
    courseId: 'crs-neuro-20',
    questionNumber: 23,
    type: 'QCM',
    content: "Dans les premières heures d'un traumatisme crânien grave, les facteurs secondaires d'agression cérébrale d'origine systémique (ACSOS) à prévenir et corriger rigoureusement sont :",
    options: [
      "A) L'hypotension artérielle (PAS < 90 mmHg), l'hypoxémie (PaO2 < 60 mmHg), l'hypercapnie (PaCO2 > 45 mmHg), l'hyperthermie et l'hyperglycémie.",
      "B) L'hypocholestérolémie isolée.",
      "C) L'hyperuricémie chronique sans crise.",
      "D) La carence en vitamine C.",
      "E) L'absence d'érythème facial."
    ],
    correctAnswers: [0],
    explanation: "Les ACSOS aggravent dramatiquement l'ischémie cérébrale secondaire : maintenir la PAM > 80 mmHg, la saturation en oxygène > 95%, la normocapnie (PaCO2 35-40), la normoglycémie et l'apyrexie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-24',
    courseId: 'crs-neuro-20',
    questionNumber: 24,
    type: 'QCM',
    content: "Une contusion cérébrale hémorragique survient préférentiellement au niveau de :",
    options: [
      "A) Les pôles frontaux inférieurs et les pôles temporaux antérieurs en regard des reliefs osseux rugueux de la base du crâne (ailes du sphénoïde, toit des orbites).",
      "B) Le corps calleux uniquement.",
      "C) La dure-mère occipitale seule.",
      "D) L'hypophyse antérieure.",
      "E) Le cervelet supérieur sans os en regard."
    ],
    correctAnswers: [0],
    explanation: "L'inertie lors de l'impact projette les lobes frontaux et temporaux contre les reliefs osseux rugueux de la base crânienne (lésions par choc direct et par contre-coup).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-25',
    courseId: 'crs-neuro-20',
    questionNumber: 25,
    type: 'QCM',
    content: "Le seuil de pression intracrânienne (PIC) à partir duquel une thérapeutique active de déplétion cérébrale doit être déclenchée chez un traumatisé crânien grave monitoré est :",
    options: [
      "A) PIC > 20 à 22 mmHg de façon persistante.",
      "B) PIC > 5 mmHg.",
      "C) PIC > 80 mmHg uniquement.",
      "D) PIC inférieure à 0 mmHg.",
      "E) La PIC ne doit jamais être mesurée."
    ],
    correctAnswers: [0],
    explanation: "Selon les recommandations de la Brain Trauma Foundation, le seuil d'intervention pour traiter l'hypertension intracrânienne est une PIC > 20-22 mmHg afin de maintenir la PPC (Pression de Perfusion Cérébrale) entre 60 et 70 mmHg.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-20-c01',
    courseId: 'crs-neuro-20',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un motard de 22 ans sans casque est victime d'un accident de la voie publique avec point d'impact temporal droit. Il présente une perte de connaissance initiale de 3 minutes, puis reprend ses esprits et se déclare parfaitement bien. Admis aux urgences, son examen initial est normal (Glasgow 15). Trois heures plus tard, il devient brutalement somnolent, ne répond plus aux ordres simples (Glasgow 8), et son infirmière signale l'apparition d'une dilatation complète de la pupille droite aréactive à la lumière (mydriase droite). Quel diagnostic posez-vous en extrême urgence ?",
    options: [
      "A) Hématome extradural (HED) temporal droit avec engagement uncal temporal.",
      "B) Intoxication éthylique aiguë tardive.",
      "C) Crise d'angoisse avec attaque de panique.",
      "D) Décollement de rétine droit traumatique.",
      "E) Migraine avec aura visuelle simple."
    ],
    correctAnswers: [0],
    explanation: "Notion d'impact temporal + intervalle libre de 3 heures + dégradation brutale du Glasgow + mydriase unilatérale homolatérale = Hématome extradural temporal avec engagement uncal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-c02',
    courseId: 'crs-neuro-20',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen d'imagerie confirme immédiatement le diagnostic avant le transfert d'urgence au bloc de neurochirurgie ?",
    options: [
      "A) Scanner cérébral sans injection de produit de contraste en extrême urgence.",
      "B) IRM cérébrale avec séquences de spectroscopie.",
      "C) Radiographie de face et profil du crâne seule.",
      "D) Échographie transfontanellaire.",
      "E) Électroencéphalogramme standard."
    ],
    correctAnswers: [0],
    explanation: "Le scanner cérébral sans injection montre la lentille biconvexe spontanément hyperdense avec effet de masse majeur, confirmant l'urgence de craniotomie immédiate.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-c03',
    courseId: 'crs-neuro-20',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un homme de 78 ans, sous antivitamine K (acénocoumarol / Sintrom®) pour fibrillation auriculaire, fait une chute de sa hauteur il y a un mois avec simple plaie du cuir chevelu. Depuis une semaine, sa famille note un ralentissement de la marche, des pertes d'équilibre avec chutes et des épisodes de désorientation temporo-spatiale. Le scanner sans injection montre une vaste collection sous-durale fronto-pariétale gauche en forme de croissant hypodense refoulant le ventricule latéral gauche et déviant la ligne médiane de 10 mm. Quel est le geste neurochirurgical de choix ?",
    options: [
      "A) Évacuation de l'hématome sous-dural chronique par trou de trépan avec lavage et drainage sous-dural déclive après correction de l'hémostase (PPSB + Vitamine K).",
      "B) Hémisphérectomie gauche immédiate.",
      "C) Ponction lombaire déplétive de 60 ml.",
      "D) Augmentation de la dose d'antivitamine K.",
      "E) Prescription exclusive d'antidépresseurs."
    ],
    correctAnswers: [0],
    explanation: "Prise en charge de l'HSDC sous AVK : antagonisation urgente de l'AVK par complexe prothrombinique (PPSB) + vitamine K, puis drainage chirurgical par simple trou de trépan.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-c04',
    courseId: 'crs-neuro-20',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un jeune homme de 19 ans blessé par coup de barre de fer sur le vertex présente une plaie déchiquetée du cuir chevelu pariétal avec extériorisation de débris osseux et de liquide teinté de tissu cérébral pulpaire nécrotique. Le patient est conscient mais confus. Quelle est la priorité neurochirurgicale ?",
    options: [
      "A) Parage chirurgical d'urgence au bloc : exploration, extraction des esquilles osseuses libres, débridement des tissus nécrosés, fermeture durale étanche et couverture cutanée sous antibioprophylaxie IV.",
      "B) Suture de la peau en consultation externe sans explorer la profondeur.",
      "C) Application de glace et repos à domicile.",
      "D) Plâtre crânien circulaire immédiat.",
      "E) Ponction de moelle sternale."
    ],
    correctAnswers: [0],
    explanation: "Il s'agit d'une plaie crânio-cérébrale ouverte avec issue de tissu cérébral : urgence opératoire pour débridement, ablation des fragments souillés et fermeture étanche de la dure-mère.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-20-c05',
    courseId: 'crs-neuro-20',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un plongeur de 25 ans heurte le fond d'une piscine peu profonde avec la tête. Il est sorti de l'eau conscient mais tétraplégique complet avec niveau sensitif en C5 (anesthésie sous les épaules) et respiration purement abdominale diaphragmatique (paralysie des intercostaux). Sa tension artérielle est à 80/45 mmHg et son pouls à 48 bpm. Quel type d'état de choc présente-t-il ?",
    options: [
      "A) Choc neurogénique par sidération du système nerveux sympathique consécutive à la section/compression médullaire cervicale haute.",
      "B) Choc hypovolémique par hémorragie interne occulte.",
      "C) Choc septique à point de départ pulmonaire précoce.",
      "D) Tamponnade péricardique traumatique aiguë.",
      "E) Embolie gazeuse artérielle cérébrale."
    ],
    correctAnswers: [0],
    explanation: "L'association tétraplégie + hypotension artérielle + bradycardie paradoxale après traumatisme cervical signe le choc neurogénique par perte du tonus vasomoteur et cardio-accélérateur sympathique.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_20_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-20-mindmap',
    courseId: 'crs-neuro-20',
    title: 'Mind Map : Urgences Neurochirurgicales Crâniennes & Rachidiennes',
    type: 'mindmap',
    content: `# Mind Map : Urgences Neurochirurgicales Traumatologiques

## 1. Hématome Extradural (HED)
- **Origine** : Rupture de l'artère méningée moyenne (fracture de l'écaille temporale).
- **Clinique** : PCI brève -> Intervalle libre (lucidité quelques heures) -> Coma rapide + Mydriase unilatérale homolatérale.
- **TDM** : Lentille biconvexe spontanément hyperdense limitée par les sutures osseuses.
- **Urgence Vitale Absolue** : Volet craniotomie et évacuation immédiate.

## 2. Hématome Sous-Dural Aigu (HSD)
- **Origine** : Déchirure des veines ponts corticales (décélération brutale).
- **TDM** : Croissant hyperdense extra-axial s'étendant sur toute la convexité hémisphérique.
- **Pronostic** : Très lourd car souvent associé à des contusions parenchymateuses sous-jacentes.

## 3. Hématome Sous-Dural Chronique (HSDC)
- Sujet âgé / alcoolique / sous anticoagulants. Traumatisme minime souvent oublié (3-6 semaines avant).
- Clinique : Ralentissement psychomoteur, fausse démence, céphalées, déficit moteur à bascule.
- TDM : Croissant hypodense (ou isodense).
- Traitement : Trou de trépan + lavage + drainage fermé.

## 4. Plaies Crânio-Cérébrales & Embarrures
- Plaie CC : Déchirure cuir chevelu + os + brèche durale (cerveau à nu). Risque septique majeur -> Parage + fermeture durale étanche d'urgence.
- Fractures de la base :
  - Étage antérieur : Rhinorrhée cérébrospinale, hématome en lunettes (yeux de raton laveur).
  - Étage moyen (rocher) : Otorragie / otoliquorrhée, hématome mastoïdien (signe de Battle), paralysie faciale périphérique (VII).

## 5. Traumatismes Médullaires
- Choc neurogénique (lésion > T6) : Hypotension artérielle + Bradycardie paradoxale (perte sympathique).
- Immobilisation pré-hospitalière absolue : Collier cervical rigide + Matelas coquille.`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-20-astuces',
    courseId: 'crs-neuro-20',
    title: 'Astuces & Pièges aux Concours : Urgences Neurochirurgicales',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **HED vs HSD au Scanner :**
   - **HED** : Biconvexe (lentille), ne franchit PAS les sutures crâniennes (dure-mère fixée).
   - **HSD** : Croissant étendu concave en dedans, **franchit les sutures** crâniennes.
2. **Intervalle libre de l'HED :**
   - La normalité clinique initiale du patient ne permet JAMAIS d'exclure un HED débutant. Tout TC avec PCI impose la surveillance et le scanner.
3. **Triade de Cushing :**
   - **HTA + Bradycardie + Bradypnée**. À ne pas confondre avec le choc hypovolémique classique (Hypotension + Tachycardie + Polypnée).
4. **Choc Neurogénique :**
   - Hypotension avec **bradycardie** ! Tout traumatisé médullaire haut en choc avec pouls lent a un choc neurogénique (perte du sympathique), à traiter par remplissage prudent et noradrénaline.
5. **Rhinorrhée ou Otoliquorrhée :**
   - Interdiction formelle du mouchage violent et des méchages étanches fermés qui favorisent l'inoculation bactérienne vers le LCR.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 21: HÉMORRAGIES SOUS-ARACHNOÏDIENNES (HSA)
// ==========================================
export const NEURO_LESSON_21_QUESTIONS: Question[] = [
  {
    id: 'q-nro-21-01',
    courseId: 'crs-neuro-21',
    questionNumber: 1,
    type: 'QCM',
    content: "L'hémorragie sous-arachnoïdienne (HSA ou hémorragie méningée) non traumatique est le plus fréquemment causée par :",
    options: [
      "A) La rupture d'un anévrisme artériel intracrânien du polygone de Willis (environ 85% des cas).",
      "B) Une malformation artério-veineuse (MAV) corticale.",
      "C) Une rupture de varice du sinus sagittal supérieur.",
      "D) Une tumeur de la glande pinéale.",
      "E) Un traumatisme abdominal fermé."
    ],
    correctAnswers: [0],
    explanation: "La cause majeure spontanée de l'HSA est la rupture d'un anévrisme artériel sacciforme siégeant sur les bifurcations du polygone de Willis (85% des cas).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-02',
    courseId: 'crs-neuro-21',
    questionNumber: 2,
    type: 'QCM',
    content: "Le maître symptôme clinique révélateur d'une hémorragie sous-arachnoïdienne est :",
    options: [
      "A) Une céphalée brutale, explosive, 'en coup de tonnerre', atteignant son intensité maximale d'emblée en moins d'une minute, d'intensité atroce jamais ressentie par le patient.",
      "B) Une céphalée sourde progressive bilatérale prédominant le soir en fin de journée.",
      "C) Une douleur pulsatile unilatérale précédée d'un scotome scintillant pendant 30 minutes.",
      "D) Une brûlure cutanée du cuir chevelu au brossage.",
      "E) Une otalgie avec vertiges rotatoires brefs."
    ],
    correctAnswers: [0],
    explanation: "La céphalée 'en coup de tonnerre' (thunderclap headache), d'emblée maximale, souvent lors d'un effort ou défécation, est la signature clinique cardinale de l'HSA.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-03',
    courseId: 'crs-neuro-21',
    questionNumber: 3,
    type: 'QCM',
    content: "Le premier examen d'imagerie diagnostique à réaliser en urgence absolue devant une céphalée brutale évocatrice d'HSA est :",
    options: [
      "A) Une tomodensitométrie (TDM) cérébrale sans injection de produit de contraste.",
      "B) Une IRM cérébrale fonctionnelle à 3 Tesla.",
      "C) Une ponction lombaire d'emblée avant toute imagerie.",
      "D) Une radiographie simple du crâne de face.",
      "E) Une échographie transcrânienne percutanée."
    ],
    correctAnswers: [0],
    explanation: "Le scanner crânien sans injection montre le sang frais spontanément hyperdense dans les citernes de la base, les scissures sylviennes et les sillons corticaux (sensibilité > 98% dans les 6 premières heures).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-04',
    courseId: 'crs-neuro-21',
    questionNumber: 4,
    type: 'QCM',
    content: "Si le scanner cérébral sans injection réalisé 12 heures après une céphalée brutale typique est strictement normal, quelle est la conduite diagnostique impérative ?",
    options: [
      "A) Rassurer le patient et le renvoyer à domicile avec du paracétamol.",
      "B) Réaliser obligatoirement une ponction lombaire (PL) pour analyse cytologique et recherche de xanthochromie par spectrophotométrie.",
      "C) Prescrire une kinésithérapie cervicale.",
      "D) Poser le diagnostic certain de céphalée de tension.",
      "E) Pratiquer un lavage d'oreille bilatéral."
    ],
    correctAnswers: [1],
    explanation: "Un scanner normal N'ÉLIMINE PAS une HSA : la ponction lombaire après 6 à 12h est le 'gold standard' pour affirmer ou exclure l'HSA (LCR uniformément rouge/rosé incoagulable dans les 3 tubes et surnageant xanthochromique).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-05',
    courseId: 'crs-neuro-21',
    questionNumber: 5,
    type: 'QCM',
    content: "Pour distinguer au laboratoire une hémorragie méningée authentique d'une ponction lombaire traumatique (piqûre d'un plexus veineux), les critères sont :",
    options: [
      "A) Épreuve des 3 tubes : le LCR reste uniformément rouge et incoagulable dans tous les tubes successifs, et après centrifugation, le surnageant est xanthochromique (présence de bilirubine/oxyhémoglobine).",
      "B) Le liquide s'éclaircit nettement entre le 1er et le 3ème tube et coagule en tube.",
      "C) Le taux de glucose est multiplié par trois.",
      "D) La pression de sortie est négative.",
      "E) Il existe plus de 100 000 éosinophiles par mm³."
    ],
    correctAnswers: [0],
    explanation: "HSA vraie : liquide uniformément hémorragique dans les 3 tubes, incoagulable (défibriné in vivo) et surnageant xanthochromique (jaune citron) par dégradation de l'hémoglobine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-06',
    courseId: 'crs-neuro-21',
    questionNumber: 6,
    type: 'QCM',
    content: "L'échelle clinique pronostique de Hunt et Hess classe la gravité de l'HSA. Le grade I correspond à :",
    options: [
      "A) Un patient asymptomatique ou présentant une céphalée minime avec discrète raideur de nuque.",
      "B) Une raideur de nuque modérée à sévère avec céphalée sans déficit neurologique autre qu'une paralysie de paire crânienne.",
      "C) Une somnolence, confusion avec déficit neurologique focal discret.",
      "D) Un état de stupeur, hémiplégie modérée à sévère.",
      "E) Un coma profond avec décérébration et état grabataire."
    ],
    correctAnswers: [0],
    explanation: "Grade I de Hunt & Hess : patient conscient, apyrétique, céphalée légère ou discrète raideur méningée.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-07',
    courseId: 'crs-neuro-21',
    questionNumber: 7,
    type: 'QCM',
    content: "L'échelle radiologique de Fisher évalue à la tomodensitométrie le volume de sang sous-arachnoïdien pour prédire le risque de survenue de :",
    options: [
      "A) Vasospasme artériel cérébral et ischémie cérébrale retardée.",
      "B) Thrombose veineuse des membres inférieurs.",
      "C) Rupture splénique spontanée.",
      "D) Diabète sucré de type 1.",
      "E) Fistule pancréatique externe."
    ],
    correctAnswers: [0],
    explanation: "Le score de Fisher (grades 1 à 4) corrèle l'épaisseur du caillot sous-arachnoïdien (Fisher 3 = caillot épais > 1 mm) au risque de spasme artériel secondaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-08',
    courseId: 'crs-neuro-21',
    questionNumber: 8,
    type: 'QCM',
    content: "Quelle est la complication médicale majeure survenant typiquement entre le 4ème et le 14ème jour post-HSA, responsable de déficits neurologiques ischémiques retardés (DIND) ?",
    options: [
      "A) Le vasospasme artériel cérébral.",
      "B) L'infarctus du myocarde septique.",
      "C) L'insuffisance rénale terminale.",
      "D) L'abcès cérébral à Candida.",
      "E) La sténose de l'œsophage."
    ],
    correctAnswers: [0],
    explanation: "Le vasospasme est la vasoconstriction prolongée des gros troncs artériels induite par les dérivés d'oxydation de l'hémoglobine baignant l'adventice artérielle, avec pic entre J4 et J10.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-09',
    courseId: 'crs-neuro-21',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel médicament vasodilatateur neuroprotecteur a formellement démontré une réduction de la morbi-mortalité ischémique retardée dans l'HSA et doit être prescrit systématiquement dès l'admission ?",
    options: [
      "A) La Nimodipine (inhibiteur calcique dihydropyridine lipophile) à la dose de 60 mg toutes les 4 heures per os ou entérale pendant 21 jours.",
      "B) Le vérapamil par voie intramusculaire.",
      "C) Le furosémide à forte dose.",
      "D) L'aspirine à 1000 mg par jour.",
      "E) Le paracétamol seul."
    ],
    correctAnswers: [0],
    explanation: "La Nimodipine (Nimotop®) per os 60 mg/4h pendant 21 jours est la seule molécule ayant prouvé son efficacité de niveau 1A pour réduire le handicap ischémique dans l'HSA anévrismale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-10',
    courseId: 'crs-neuro-21',
    questionNumber: 10,
    type: 'QCM',
    content: "La prise en charge étiologique d'un anévrisme cérébral rompu doit être réalisée dans quel délai pour prévenir le ré-saignement précoce précoce (dont la mortalité dépasse 60-70%) ?",
    options: [
      "A) En extrême urgence dans les 24 à 72 premières heures après le début du saignement.",
      "B) Après un délai d'attente d'au moins 3 mois.",
      "C) Uniquement si le patient fait une deuxième récidive.",
      "D) À la puberté.",
      "E) Jamais en phase aiguë."
    ],
    correctAnswers: [0],
    explanation: "L'exclusion de l'anévrisme (par embolisation endovasculaire par coils ou par clippage chirurgical) doit être faite dans les 24-72h pour éliminer le risque gravissime de récidive hémorragique précoce.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-11',
    courseId: 'crs-neuro-21',
    questionNumber: 11,
    type: 'QCM',
    content: "L'artère la plus fréquemment le siège d'un anévrisme intracrânien rompu responsable d'HSA est :",
    options: [
      "A) L'artère communicante antérieure (environ 30 à 35% des cas).",
      "B) L'artère sous-clavière gauche.",
      "C) L'artère vertébrale extracrânienne.",
      "D) L'artère méningée postérieure.",
      "E) L'artère spinale postérieure."
    ],
    correctAnswers: [0],
    explanation: "Le complexe communicant antérieur est le siège anévrismal le plus fréquent (30-35%), suivi de la terminaison de la carotide interne/communicante postérieure et de la bifurcation sylvienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-12',
    courseId: 'crs-neuro-21',
    questionNumber: 12,
    type: 'QCM',
    content: "Une paralysie complète du nerf moteur oculaire commun (III) avec mydriase et ptosis unilatéral révélateur d'une HSA oriente préférentiellement vers un anévrisme de :",
    options: [
      "A) L'artère communicante postérieure (au niveau de sa jonction avec la carotide interne).",
      "B) L'artère cérébrale antérieure distale.",
      "C) L'artère cérébelleuse moyenne.",
      "D) L'artère faciale.",
      "E) L'artère spinale antérieure."
    ],
    correctAnswers: [0],
    explanation: "Le nerf III croise le carrefour carotide interne - communicante postérieure : l'anévrisme de la communicante postérieure le comprime directement, réalisant une paralysie intrinsèque et extrinsèque douloureuse du III.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-13',
    courseId: 'crs-neuro-21',
    questionNumber: 13,
    type: 'QCM',
    content: "L'hydrocéphalie aiguë post-HSA (survenant dans les premières 24-48h) est due à :",
    options: [
      "A) L'obstruction mécanique des voies de circulation et de résorption du LCR (aqueduc de Sylvius, foramen de Magendie, granulations de Pacchioni) par les caillots sanguins.",
      "B) Une hypersécrétion tumorale massive de LCR par les plexus choroïdes.",
      "C) Une sténose congénitale méconnue du canal rachidien.",
      "D) Une atélectasie lobaire pulmonaire associée.",
      "E) Un œdème de Quincke laryngé."
    ],
    correctAnswers: [0],
    explanation: "Les érythrocytes et caillots bloquent les foramens de Luschka/Magendie et colmatent les villosités arachnoïdiennes de Pacchioni, imposant la pose d'une dérivation ventriculaire externe (DVE) en urgence si somnolence.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-14',
    courseId: 'crs-neuro-21',
    questionNumber: 14,
    type: 'QCM',
    content: "L'hyponatrémie fréquente après une hémorragie sous-arachnoïdienne relève le plus souvent de :",
    options: [
      "A) Un syndrome de perte de sel d'origine cérébrale (CSWS : cerebral salt wasting syndrome médié par le BNP) et/ou d'un SIADH (sécrétion inappropriée d'ADH).",
      "B) Une intoxication hydrique volontaire par potomanie.",
      "C) Un diabète insipide néphrogénique pur.",
      "D) Une sténose de l'artère rénale bilatérale.",
      "E) Une cirrhose hépatique décompensée."
    ],
    correctAnswers: [0],
    explanation: "L'HSA déclenche une libération de BNP cérébral avec natriurèse massive et hypovolémie (perte de sel cérébrale) ou un SIADH : l'hypovolémie doit être rigoureusement évitée par compensation sodée isotonique (sérum salé à 0,9%) car elle majore le risque de vasospasme.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-15',
    courseId: 'crs-neuro-21',
    questionNumber: 15,
    type: 'QCM',
    content: "Le syndrome de Terson associé à une hémorragie sous-arachnoïdienne sévère correspond à :",
    options: [
      "A) L'apparition d'hémorragies intra-oculaires (vitréennes, sous-hyaloïdiennes ou rétiniennes) secondaires à l'élévation brutale de la pression intracrânienne transmise aux gaines des nerfs optiques.",
      "B) Une surdité brusque bilatérale par saignement labyrinthique.",
      "C) Un infarctus myocardique de type Takotsubo isolé.",
      "D) Une gangrène distale des orteils.",
      "E) Une luxation bilatérale des épaules."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Terson est l'hémorragie intra-oculaire (vitréenne/prérétinienne) observée chez 10-20% des HSA sévères, corrélé à un pronostic neurologique plus sombre.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-21-16',
    courseId: 'crs-neuro-21',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans le dépistage du vasospasme artériel au lit du malade en réanimation neuro-vasculaire, quel examen non invasif quotidien de surveillance est de pratique courante ?",
    options: [
      "A) Le Doppler transcrânien (DTC) mesurant les vélocités moyennes d'écoulement dans l'artère cérébrale moyenne (ACM).",
      "B) L'échographie abdominale rénale.",
      "C) L'électromyogramme des 4 membres.",
      "D) La radiographie des sinus de la face.",
      "E) La spirométrie dynamique."
    ],
    correctAnswers: [0],
    explanation: "L'accélération des vitesses moyennes au Doppler transcrânien (> 120 cm/s, et surtout > 200 cm/s avec index de Lindegaard > 3-6) permet de détecter précocement le vasospasme avant l'infarctus.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-17',
    courseId: 'crs-neuro-21',
    questionNumber: 17,
    type: 'QCM',
    content: "L'embolisation endovasculaire par spires de platine (coils) d'un anévrisme intracrânien rompu consiste en :",
    options: [
      "A) L'occlusion sélective de la poche anévrismale par largage de spires métalliques par voie endoluminale microcathétérisée depuis l'artère fémorale, tout en préservant l'artère porteuse.",
      "B) L'occlusion définitive de l'ensemble de la carotide interne.",
      "C) La pose d'un drain thoracique bilatéral.",
      "D) La pose d'une valve ventriculopéritonéale d'emblée.",
      "E) L'ablation chirurgicale à ciel ouvert du lobe frontal."
    ],
    correctAnswers: [0],
    explanation: "Le traitement endovasculaire (coiling) dépose des spires de platine dans le sac anévrisme pour induire une thrombose intra-anévrismale complète, évitant l'ouverture crânienne chirurgicale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-18',
    courseId: 'crs-neuro-21',
    questionNumber: 18,
    type: 'QCM',
    content: "La cardiopathie catécholaminergique de stress (Takotsubo ou 'stunning' myocardique neurogénique) compliquant l'HSA se caractérise par :",
    options: [
      "A) Une sidération ventriculaire gauche avec akinésie apicale et ballonisation du VG, élévation modérée de la troponine et anomalies ECG (allongement du QT, ondes T négatives profondes) sans sténose coronarienne obstructive.",
      "B) Une thrombose de l'artère interventriculaire antérieure par rupture de plaque d'athérome.",
      "C) Une endocardite infectieuse d'Osler préexistante.",
      "D) Une péricardite purulente foudroyante.",
      "E) Une communication inter-auriculaire congénitale."
    ],
    correctAnswers: [0],
    explanation: "La décharge adrénergique massive induite par la rupture anévrismale sidère le myocarde (ballonisation apicale type Takotsubo), générant œdème aigu pulmonaire neurogénique et instabilité hémodynamique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-19',
    courseId: 'crs-neuro-21',
    questionNumber: 19,
    type: 'QCM',
    content: "Concernant la volémie chez un patient atteint d'HSA anévrismale en cours d'évolution, l'objectif fondamental est :",
    options: [
      "A) De maintenir impérativement une normovolémie stricte voire une hypervolémie modérée, en proscrivant formellement toute restriction hydrique qui précipiterait le vasospasme ischémique.",
      "B) De prescrire une restriction hydrique sévère à moins de 500 ml/j.",
      "C) D'induire une diurèse forcée par furosémide continu.",
      "D) De pratiquer des saignées régulières de 500 ml.",
      "E) D'interdire toute perfusion de chlorure de sodium."
    ],
    correctAnswers: [0],
    explanation: "La déshydratation et l'hypovolémie aggravent le vasospasme et l'ischémie cérébrale. La normovolémie par sérum salé isotonique à 0,9% est impérative.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-20',
    courseId: 'crs-neuro-21',
    questionNumber: 20,
    type: 'QCM',
    content: "L'artériographie cérébrale conventionnelle des 4 axes (angio-scanner ou angiographie par soustraction numérique) dans l'HSA a pour objectifs fondamentaux :",
    options: [
      "A) D'identifier formellement l'anévrisme responsable, sa localisation, la morphologie de son collet, son orientation, et de rechercher des anévrismes multiples associés (présents dans 20-30% des cas).",
      "B) De vérifier la vascularisation rénale exclusive.",
      "C) De mesurer la pression de la veine porte.",
      "D) De poser une sonde gastrique sous contrôle visuel.",
      "E) D'évaluer la fonction hépatique métabolique."
    ],
    correctAnswers: [0],
    explanation: "Le bilan vasculaire cérébral complet (4 axes carotidiens et vertébraux) cartographie l'anévrisme rompu et dépiste les anévrismes multiples synchrones (environ 20% des patients).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-21',
    courseId: 'crs-neuro-21',
    questionNumber: 21,
    type: 'QCM',
    content: "Parmi les anomalies électrocardiographiques (ECG) très fréquemment observées dans les premières heures d'une hémorragie sous-arachnoïdienne, on retrouve :",
    options: [
      "A) Un allongement significatif de l'intervalle QTc, des ondes T négatives géantes profondes et symétriques (ondes T cérébrales) et des sous- ou sus-décalages du segment ST.",
      "B) Un bloc de branche droit complet obligatoire congénital.",
      "C) Une onde P pulmonaire géante isolée.",
      "D) L'absence complète de toute onde T.",
      "E) Un raccourcissement du PR à moins de 0,05 s."
    ],
    correctAnswers: [0],
    explanation: "L'orage catécholaminergique intracrânien déclenche des anomalies de repolarisation ventriculaire spectaculaires à l'ECG (ondes T cérébrales amples et négatives, allongement du QT) qui peuvent égarer vers un faux infarctus du myocarde.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-22',
    courseId: 'crs-neuro-21',
    questionNumber: 22,
    type: 'QCM',
    content: "La prise en charge médicale initiale de la pression artérielle avant l'exclusion de l'anévrisme non encore sécurisé impose de :",
    options: [
      "A) Contrôler strictement la pression artérielle systolique (maintenir PAS < 140 à 160 mmHg) par des antihypertenseurs titrables (ex: nicardipine IV) pour limiter le risque de récidive de rupture immédiate, tout en évitant l'hypotension.",
      "B) Laisser la pression systolique s'élever au-delà de 240 mmHg sans intervenir.",
      "C) Faire chuter la PAS en dessous de 70 mmHg immédiatement.",
      "D) Donner des amines vasopressives (adrénaline) à forte dose.",
      "E) Arrêter tout traitement antihypertenseur antérieur."
    ],
    correctAnswers: [0],
    explanation: "Avant occlusion de l'anévrisme, il faut éviter les pics tensionnels (PAS < 140-160 mmHg par Loxen/Nicardipine) pour prévenir le ré-saignement précoce.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-23',
    courseId: 'crs-neuro-21',
    questionNumber: 23,
    type: 'QCM',
    content: "Le traitement curatif de sauvetage d'un vasospasme sévère réfractaire avec déficit neurologique constitué (ischémie cérébrale retardée) repose sur :",
    options: [
      "A) L'angioplastie transluminale mécanique par ballonnet ou l'injection intra-artérielle in situ de vasodilatateurs (milrinone, nimodipine) en neuroradiologie interventionnelle.",
      "B) La ponction lombaire évacuatrice quotidienne.",
      "C) La pose d'une valve de dérivation lombo-péritonéale.",
      "D) La résection du lobe temporal ischémié.",
      "E) Des poches de glace sur le cuir chevelu."
    ],
    correctAnswers: [0],
    explanation: "En cas d'échec de l'optimisation hémodynamique (hausse tensionnelle induite), l'angioplastie chimique (milrinone intra-artérielle) ou mécanique par ballon au contact de la sténose lève efficacement le spasme.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-21-24',
    courseId: 'crs-neuro-21',
    questionNumber: 24,
    type: 'QCM',
    content: "Parmi les facteurs de risque modifiables reconnus d'anévrisme intracrânien et de rupture anévrismale, on identifie au premier plan :",
    options: [
      "A) Le tabagisme actif et l'hypertension artérielle chronique non contrôlée, ainsi que la consommation excessive d'alcool.",
      "B) L'alimentation riche en caroténoïdes.",
      "C) Le port de lunettes de vue.",
      "D) La pratique d'un sport d'endurance modéré.",
      "E) L'allergie aux pollens de graminées."
    ],
    correctAnswers: [0],
    explanation: "Le tabagisme (qui dégrade l'élastine artérielle par les élastases) et l'HTA sont les deux facteurs de risque majeurs modifiables de formation et de rupture des anévrismes intracrâniens.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-25',
    courseId: 'crs-neuro-21',
    questionNumber: 25,
    type: 'QCM',
    content: "Quelle maladie génétique héréditaire du tissu conjonctif ou rénale justifie un dépistage systématique par angio-IRM des anévrismes intracrâniens asymptomatiques ?",
    options: [
      "A) La polykystose rénale autosomique dominante (PKRAD) et le syndrome d'Ehlers-Danlos de type vasculaire.",
      "B) La mucoviscidose pulmonaire homozygote.",
      "C) La chondrodysplasie spondylo-épiphysaire.",
      "D) L'anémie de Fanconi.",
      "E) La maladie cœliaque de l'adulte."
    ],
    correctAnswers: [0],
    explanation: "La PKRAD (présence d'anévrismes chez 10-15% des patients, surtout avec antécédent familial de rupture) et le syndrome d'Ehlers-Danlos type IV justifient un dépistage par angio-IRM cérébrale.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-21-c01',
    courseId: 'crs-neuro-21',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Une femme de 46 ans, sans antécédents médicaux majeurs en dehors d'un tabagisme actif à 20 paquets-années, ressent brutalement lors d'un effort de soulèvement une céphalée occipito-nucale foudroyante, d'emblée maximale en quelques secondes, décrite comme 'un coup de massue sur le crâne'. Elle s'effondre avec des vomissements en jet et une photophobie majeure. Aux urgences 2 heures plus tard, elle est confuse (Glasgow 13), très algique, avec une raideur de nuque invincible et un signe de Kernig positif. La pression artérielle est à 175/95 mmHg. Quel diagnostic devez-vous évoquer en priorité absolue ?",
    options: [
      "A) Hémorragie sous-arachnoïdienne (hémorragie méningée) par rupture d'anévrisme intracrânien.",
      "B) Crise de migraine sans aura banale.",
      "C) Névralgie d'Arnold aiguë.",
      "D) Méningite virale à entérovirus.",
      "E) Glaucome aigu par fermeture de l'angle."
    ],
    correctAnswers: [0],
    explanation: "Céphalée en coup de tonnerre brutale per-effort + syndrome méningé franc + nausées/vomissements = hémorragie sous-arachnoïdienne anévrismale jusqu'à preuve du contraire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-c02',
    courseId: 'crs-neuro-21',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen pratiquez-vous en première intention pour confirmer immédiatement ce diagnostic ?",
    options: [
      "A) Scanner cérébral sans injection de produit de contraste en urgence.",
      "B) Électroencéphalogramme de veille.",
      "C) Ponction lombaire immédiate avant toute imagerie.",
      "D) Radiographie du rachis cervical de face et profil.",
      "E) Échographie Doppler des troncs supra-aortiques."
    ],
    correctAnswers: [0],
    explanation: "Le scanner crânien sans injection montre le sang spontanément hyperdense dans les espaces sous-arachnoïdiens et citernes de la base, confirmant le diagnostic avec une sensibilité proche de 100% à ce stade.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-c03',
    courseId: 'crs-neuro-21',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un homme de 50 ans présente une céphalée explosive fébrile avec diplopie. L'examen met en évidence un ptosis complet de l'œil droit, une mydriase droite aréactive et une impossibilité d'élever, d'abaisser ou d'amener l'œil droit en dedans. Le scanner montre du sang dans la citerne chiasmatique et périmésencéphalique. Quelle est la localisation la plus probable de l'anévrisme responsable de cette paralysie du III droit ?",
    options: [
      "A) Anévrisme de la terminaison carotide interne - artère communicante postérieure droite.",
      "B) Anévrisme de la bifurcation sylvienne gauche.",
      "C) Anévrisme de l'artère cérébelleuse postéro-inférieure (PICA) gauche.",
      "D) Anévrisme de l'artère spinale antérieure.",
      "E) Anévrisme de la carotide externe extracrânienne."
    ],
    correctAnswers: [0],
    explanation: "L'anévrisme de l'artère communicante postérieure au contact direct du nerf oculomoteur (III) comprime la circonférence du nerf, produisant une paralysie complète avec mydriase homolatérale précoce.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-c04',
    courseId: 'crs-neuro-21',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Une patiente admise pour HSA anévrismale sécurisée par coiling à J1 développe à J7 une somnolence nouvelle et une faiblesse motrice du membre supérieur gauche côté à 3/5. L'angio-scanner cérébral confirme un rétrécissement circonférentiel sévère du calibre de l'artère cérébrale moyenne droite. Le Doppler transcrânien objective des vélocités moyennes à 220 cm/s sur l'ACM droite. Quelle complication est en train de survenir ?",
    options: [
      "A) Un vasospasme artériel symptomatique avec ischémie cérébrale retardée (DIND).",
      "B) Un nouvel épisode de récidive hémorragique anévrismale.",
      "C) Une méningite bactérienne nosocomiale.",
      "D) Un abcès cérébral aigu.",
      "E) Une poussée de sclérose en plaques."
    ],
    correctAnswers: [0],
    explanation: "Le pic de fréquence entre J4 et J10, l'apparition d'un nouveau déficit focal et l'accélération majeure des flux au Doppler (> 200 cm/s) signent le vasospasme artériel.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-21-c05',
    courseId: 'crs-neuro-21',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient hospitalisé pour HSA compliquée d'un caillot épais sous-arachnoïdien (Fisher 3) présente à J5 une natrémie qui chute à 124 mmol/L (N: 135-145). La volémie clinique est basse avec perte de 2 kg, pli cutané net et natriurèse très élevée à 120 mmol/24h. Quelle conduite thérapeutique est strictement indiquée ?",
    options: [
      "A) Remplissage vasculaire avec apports hydro-sodés massifs par sérum salé isotonique à 0,9% (voire NaCl hypertonique) pour restaurer la normovolémie et corriger la perte de sel cérébrale.",
      "B) Restriction hydrique sévère à 500 ml/j.",
      "C) Diurétiques de l'anse (furosémide) IV.",
      "D) Perfusion exclusive de glucosé pur à 5% hypotonique sans sel.",
      "E) Abstention complète."
    ],
    correctAnswers: [0],
    explanation: "C'est un syndrome de perte de sel cérébral (CSWS) avec hypovolémie : la restriction hydrique est formellement CONTRE-INDIQUÉE sous peine de déclencher un vasospasme ischémique fatal. Le traitement impose l'apport massif de sel et de soluté isotonique.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_21_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-21-mindmap',
    courseId: 'crs-neuro-21',
    title: 'Mind Map : Hémorragies Sous-Arachnoïdiennes (HSA)',
    type: 'mindmap',
    content: `# Mind Map : Hémorragie Sous-Arachnoïdienne Anévrismale

## 1. Clinique
- **Céphalée en coup de tonnerre** : Brutale, d'emblée maximale (< 1 min), explosive, per-effort.
- **Syndrome méningé franc** : Raideur de nuque, Kernig, Brudzinski, photophobie, vomissements en jet.
- **Signe localisateur** : Paralysie du III avec mydriase = Anévrisme de la communicante postérieure.

## 2. Démarche Diagnostique d'Urgence
- **Scanner sans injection en urgence** : Hyperdensité dans les citernes et sillons.
- **Si scanner normal** : Ponction lombaire obligatoire (> 6-12h).
  - Épreuve des 3 tubes : Liquide uniformément sanglant incoagulable.
  - Surnageant : Xanthochromique (jaune, bilirubine).
- **Artériographie cérébrale des 4 axes / Angio-scanner** : Cartographie l'anévrisme et cherche les anévrismes multiples (20%).

## 3. Complications Majeures
- **Ré-saignement précoce** : Risque max à J1 (mortalité 70%) -> Exclusion anévrisme < 24-72h (Coiling endovasculaire ou Clippage chirurgical).
- **Hydrocéphalie aiguë** : Blocage du LCR -> Dérivation ventriculaire externe (DVE) en urgence.
- **Vasospasme & Ischémie retardée (DIND)** : Pic J4-J10. Prévention : Nimodipine 60 mg/4h per os pendant 21j + Normovolémie. Détection : Doppler transcrânien (DTC > 120-200 cm/s).
- **Dysnatrémie** : Perte de sel cérébrale (CSWS, hypovolémie) -> Sérum salé 0,9%, PAS de restriction hydrique !`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-21-astuces',
    courseId: 'crs-neuro-21',
    title: 'Astuces & Pièges aux Concours : Hémorragie Méningée',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Scanner normal n'élimine jamais une HSA :**
   - Si la clinique est évocatrice (céphalée brutale explosive), un scanner normal impose formellement la réalisation d'une **ponction lombaire** après un délai de 6 à 12 heures.
2. **Nimodipine per os vs IV :**
   - La voie **orale** ou par sonde nasogastrique (60 mg toutes les 4 heures) est la voie de référence prouvée. La voie IV est réservée aux cas d'impossibilité digestive stricte avec surveillance stricte de la PA.
3. **Hyponatrémie et restriction hydrique : ERREUR FATALE :**
   - Ne jamais instaurer de restriction hydrique dans l'HSA ! L'hyponatrémie est presque toujours liée à une perte de sel cérébrale hypovolémique. La restriction hydrique précipite le vasospasme et l'AVC ischémique. Traiter par **sérum salé isotonique**.
4. **Anévrisme et paralysie du III :**
   - Paralysie du III douloureuse avec mydriase = urgence neurochirurgicale : anévrisme de la **communicante postérieure** comprimant le nerf, à traiter avant rupture cataclysmique.`,
    author: 'Dr. LAIDANI.M'
  }
];
