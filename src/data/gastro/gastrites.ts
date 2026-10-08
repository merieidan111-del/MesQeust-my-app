import { Question, CourseResource } from '../../types/medical';

export const GASTRITES_QUESTIONS: Question[] = [
  {
    "id": "q-gast-01",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Par quelle modalité d'examen le diagnostic positif de gastrite est-il exclusivement et obligatoirement affirmé ?",
    "options": [
      "Par l'interrogatoire clinique seul",
      "Par l'examen anatomopathologique des biopsies gastriques muqueuses",
      "Par le transit œso-gastro-duodénal baryté",
      "Par le scanner abdominal avec injection",
      "Par le dosage sérique de la gastrine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastrite est une définition histologique correspondant à une inflammation de la muqueuse gastrique prouvée par l'analyse anatomopathologique des biopsies.",
    "clinicalPearl": "Gastrite = Définition histologique obligatoire sur biopsies gastriques (l'aspect endoscopique seul ne suffit pas)."
  },
  {
    "id": "q-gast-02",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Combien de biopsies gastriques au minimum et selon quelle cartographie standardisée (système de Sydney) doivent être réalisées pour évaluer une gastrite chronique ?",
    "options": [
      "Une seule biopsie au hasard",
      "Au moins 5 biopsies : 2 antrales, 1 de l'angulus (petite courbure), et 2 fundiques/corps",
      "10 biopsies de l'œsophage",
      "3 biopsies duodénales pures",
      "Aucune biopsie n'est recommandée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le protocole de Sydney préconise au moins 5 biopsies : 2 dans l'antre (petite et grande courbure), 1 à l'angle de la petite courbure (incisura angularis), et 2 dans le corps gastrique.",
    "clinicalPearl": "Protocole de Sydney : 5 biopsies au minimum (2 antre, 1 angulus, 2 fundus/corps)."
  },
  {
    "id": "q-gast-03",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la cause étiologique la plus fréquente de gastrite chronique dans le monde ?",
    "options": [
      "La maladie de Biermer auto-immune",
      "L'infection chronique à Helicobacter pylori",
      "La prise de corticoïdes",
      "La radiothérapie abdominale",
      "La maladie de Crohn"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'infection par Helicobacter pylori est responsable de plus de 80 à 90% des gastrites chroniques, débutant par une gastrite superficielle puis évoluant vers l'atrophie et la métaplasie intestinale.",
    "clinicalPearl": "1ère cause de gastrite chronique = Infection à Helicobacter pylori."
  },
  {
    "id": "q-gast-04",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La gastrite chronique auto-immune (gastrite de type A / maladie de Biermer) touche préférentiellement quelle région anatomique de l'estomac ?",
    "options": [
      "L'antre gastrique exclusivement avec respect du corps",
      "Le fundus et le corps gastrique avec respect habituel de l'antre",
      "Le sphincter pylorique seul",
      "Le bulbe duodénal",
      "Le cardia de manière isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastrite auto-immune détruit spécifiquement les glandes oxyntiques du corps et du fundus (cellules pariétales), respectant strictement l'antre gastrique.",
    "clinicalPearl": "Gastrite auto-immune (Biermer / type A) : atteinte du fundus/corps avec respect de l'antre."
  },
  {
    "id": "q-gast-05",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quels anticorps sériques très spécifiques sont retrouvés dans la gastrite chronique atrophique auto-immune de type A ?",
    "options": [
      "Anticorps anti-ADN natif",
      "Anticorps anti-cellules pariétales gastriques (pompe H+/K+ ATPase) et anti-facteur intrinsèque",
      "Anticorps anti-transglutaminase",
      "Anticorps anti-CCP",
      "Anticorps anti-Scl70"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La présence d'anticorps anti-cellules pariétales (sensibles) et d'anticorps anti-facteur intrinsèque (très spécifiques) caractérise la gastrite de Biermer.",
    "clinicalPearl": "Maladie de Biermer : Anticorps anti-cellules pariétales + Anticorps anti-facteur intrinsèque."
  },
  {
    "id": "q-gast-06",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle carence vitaminique majeure avec anémie macrocytaire arégénérative et troubles neurologiques (sclérose combinée de la moelle) résulte de la gastrite atrophique de Biermer ?",
    "options": [
      "Carence en vitamine C",
      "Carence en vitamine B12 (cobalamine) par défaut de sécrétion de facteur intrinsèque",
      "Carence en vitamine D",
      "Carence en vitamine K",
      "Carence en vitamine A"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La destruction des cellules pariétales tarit la sécrétion de facteur intrinsèque indispensable à l'absorption de la vitamine B12 dans l'iléon terminal, provoquant anémie mégaloblastique et sclérose combinée.",
    "clinicalPearl": "Maladie de Biermer : anémie macrocytaire mégaloblastique par carence en vitamine B12 (sclérose combinée de la moelle)."
  },
  {
    "id": "q-gast-07",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la cascade lésionnelle de Pelayo Correa, quelle est la séquence d'événements histologiques menant à l'adénocarcinome gastrique de type intestinal ?",
    "options": [
      "Muqueuse saine -> GIST -> Métastase",
      "Muqueuse normale -> Gastrite chronique superficielle -> Gastrite atrophique -> Métaplasie intestinale -> Dysplasie (bas grade puis haut grade) -> Adénocarcinome invasif",
      "Muqueuse normale -> Polype villeux -> Ulcère -> Guérison",
      "Muqueuse normale -> Hyperplasie lymphoïde -> Carcinome neuroendocrine",
      "Muqueuse normale -> Linitide plastique sans atrophie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La cascade de Correa décrit la carcinogenèse gastrique séquentielle : inflammation chronique HP -> atrophie glandulaire -> métaplasie intestinale -> dysplasie -> cancer.",
    "clinicalPearl": "Cascade de Correa : Gastrite chronique -> Atrophie -> Métaplasie intestinale -> Dysplasie -> Cancer gastrique."
  },
  {
    "id": "q-gast-08",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel type de tumeur gastrique neuroendocrine bien différenciée à petites cellules ECL peut se développer au cours de la gastrite atrophique de Biermer en raison de l'hypergastrinémie réactionnelle ?",
    "options": [
      "Tumeur stromale (GIST)",
      "Tumeur neuroendocrine gastrique de type 1",
      "Tumeur neuroendocrine gastrique de type 2 (associée au SZE)",
      "Carcinome épidermoïde",
      "Lymphome de Burkitt"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'achlorhydrie par destruction des cellules pariétales lève le rétrocontrôle inhibiteur sur les cellules G antrales, provoquant une hypergastrinémie massive qui stimule la prolifération des cellules ECL (TNE gastrique type 1).",
    "clinicalPearl": "Gastrite de Biermer : achlorhydrie -> hypergastrinémie réactionnelle -> TNE gastriques de type 1 multiples."
  },
  {
    "id": "q-gast-09",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "La maladie de Ménétrier (gastropathie hypertrophique géante) se caractérise anatomiquement et biologiquement par :",
    "options": [
      "Une atrophie complète sans plis",
      "Des plis gastriques fundiques monstrueux ('aspect en circonvolutions cérébrales') avec hyperplasie fovéolaire majeure et fuite protidique digestive (gastro-entéropathie exsudative avec hypoalbuminémie et œdèmes)",
      "Une sténose pylorique isolée",
      "Des micro-polypes duodénaux sans retentissement",
      "Une infection bactérienne fulgurante"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La maladie de Ménétrier associe des plis gastriques géants cérébriformes du corps/fundus et une fuite massive de protéines sériques dans la lumière gastrique responsable d'hypoalbuminémie sévère et d'anasarque.",
    "clinicalPearl": "Maladie de Ménétrier = Plis cérébriformes géants fundiques + gastropathie exsudative (œdèmes par hypoalbuminémie)."
  },
  {
    "id": "q-gast-10",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la gastrite chronique à Helicobacter pylori, quelle classification histologique internationale évalue les scores d'atrophie pour stratifier le risque de survenue de cancer gastrique ?",
    "options": [
      "Classification de Child-Pugh",
      "Systèmes OLGA (Operative Link for Gastritis Assessment) et OLGIM (for Intestinal Metaplasia)",
      "Score de Gleason",
      "Score de Balthazar",
      "Score de Ranson"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les scores OLGA (atrophie) et OLGIM (métaplasie intestinale) stratifient le risque de cancer gastrique en 4 stades : les stades III et IV (atrophie/métaplasie sévère antro-fundique) justifient une surveillance endoscopique triennale.",
    "clinicalPearl": "Stades OLGA/OLGIM III et IV = Atrophie/métaplasie étendue = Surveillance FOGD tous les 3 ans."
  },
  {
    "id": "q-gast-11",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel signe biologique hématologique classique à l'hémogramme et au myélogramme oriente vers une maladie de Biermer ?",
    "options": [
      "Microcytose avec ferritine basse",
      "Macrocytose (VGM > 100-115 fL), anémie arégénérative, polynucléaires neutrophiles hypersegmentés et mégaloblastose médullaire au myélogramme",
      "Polyglobulie primitive",
      "Thrombocytémie majeure",
      "Leucémie lymphoïde"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le déficit en B12 altère la synthèse de l'ADN, provoquant un asynchronisme de maturation nucléocytoplasmique avec macrocytose franche, neutropénie avec PNN hypersegmentés et érythroblastes géants (mégaloblastes).",
    "clinicalPearl": "Anémie de Biermer : macrocytose majeure (VGM élevé) + mégaloblastose médullaire + PNN hypersegmentés."
  },
  {
    "id": "q-gast-12",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical substitutif à vie est obligatoire dans la gastrite atrophique auto-immune de Biermer ?",
    "options": [
      "Injections régulières de Vitamine B12 (hydroxocobalamine ou cyanocobalamine par voie intramusculaire ou forte dose orale à vie)",
      "Fer oral en monothérapie",
      "IPP à vie",
      "Corticoïdes au long cours",
      "Chimiothérapie orale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'administration à vie de vitamine B12 (habituellement 1000 µg en IM quotidienne puis mensuelle, ou per os à très forte dose par diffusion passive) corrige l'anémie et prévient les complications neurologiques irréversibles.",
    "clinicalPearl": "Maladie de Biermer = Supplémentation en vitamine B12 à vie (voie IM ou forte dose orale)."
  },
  {
    "id": "q-gast-13",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La gastrite lymphocytaire est caractérisée histologiquement par une infiltration de plus de 25 lymphocytes pour 100 cellules épithéliales et est très fréquemment associée à :",
    "options": [
      "La maladie de Crohn",
      "La maladie cœliaque (entéropathie au gluten)",
      "La rectocolite hémorragique",
      "L'hémochromatose",
      "L'asthme bronchique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastrite lymphocytaire (aspect endoscopique varioliforme parfois) est fortement corrélée à la maladie cœliaque et régresse habituellement sous régime sans gluten strict.",
    "clinicalPearl": "Gastrite lymphocytaire (infiltrat intra-épithélial) = chercher systématiquement une maladie cœliaque."
  },
  {
    "id": "q-gast-14",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "La gastrite à éosinophiles s'intègre le plus souvent dans le cadre :",
    "options": [
      "D'une gastro-entérite à éosinophiles allergique ou idiopathique avec hyperéosinophilie sanguine",
      "D'une carence en fer pure",
      "D'un cancer bronchique",
      "D'une maladie de Wilson",
      "D'une intoxication au plomb"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La gastrite à éosinophiles est une maladie rare liée à une infiltration de la paroi gastrique par des polynucléaires éosinophiles, souvent associée à un terrain atopique et une hyperéosinophilie sanguine.",
    "clinicalPearl": "Gastrite à éosinophiles = terrain atopique + hyperéosinophilie périphérique + infiltrat d'éosinophiles muqueux."
  },
  {
    "id": "q-gast-15",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel aspect macroscopique endoscopique classique évoque une gastrite varioliforme ?",
    "options": [
      "Une muqueuse totalement lisse et blanchâtre",
      "Des nodules ou papules muqueuses ombiliquées surmontées d'une érosion punctiforme centrale",
      "Des varices volumineuses bleuâtres",
      "Une sténose circonférentielle serrée",
      "Une muqueuse noire charbonneuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastrite varioliforme présente des élevures mamelonnées ombiliquées centrées par une érosion aphtoïde, typiquement retrouvée dans la gastrite lymphocytaire.",
    "clinicalPearl": "Gastrite varioliforme = papules surélevées ombiliquées à centre érodé (gastrite lymphocytaire)."
  },
  {
    "id": "q-gast-16",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la gastrite chronique à Helicobacter pylori débutante, quelle topographie de prédominance de l'inflammation favorise préférentiellement la survenue d'un ulcère duodénal ?",
    "options": [
      "La pan-gastrite atrophique diffuse",
      "La gastrite prédominant à l'antre (gastrite antrale non atrophique avec hypersécrétion acide par déficit en somatostatine)",
      "La gastrite fundique exclusive",
      "La gastrite cardiaque isolée",
      "L'atteinte œsophagienne pure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastrite antrale prédominante détruit les cellules D sécrétrices de somatostatine, levant le frein sur la gastrine et entraînant une hypersécrétion acide qui bombarde le bulbe duodénal (lit de l'ulcère duodénal).",
    "clinicalPearl": "Gastrite antrale isolée à HP = hypersécrétion acide -> ulcère duodénal. Pan-gastrite atrophique = hypochlorhydrie -> ulcère gastrique et cancer."
  },
  {
    "id": "q-gast-17",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel examen d'imagerie ou fonctionnel permet d'affirmer l'achlorhydrie gastrique au cours de la gastrite atrophique fundique ?",
    "options": [
      "Le pH-métrie gastrique ou tubage gastrique avec mesure du débit acide basal et stimulé par la pentagastrine",
      "La manométrie œsophagienne",
      "Le scanner abdominal",
      "La scintigraphie hépatique",
      "Le dosage des lipases"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le tubage gastrique montre un débit acide nul même après stimulation maximale par la pentagastrine (achlorhydrie vraie histamino- ou pentagastrino-résistante).",
    "clinicalPearl": "Achlorhydrie de la gastrite de Biermer : pH gastrique constamment > 6 même sous stimulation maximale."
  },
  {
    "id": "q-gast-18",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication néoplasique gastrique maligne justifie une surveillance endoscopique régulière chez les patients porteurs d'une maladie de Biermer ?",
    "options": [
      "L'adénocarcinome gastrique (risque multiplié par 3 à 5) et les tumeurs neuroendocrines gastriques de type 1",
      "Le lymphome de Hodgkin",
      "Le mélanome gastrique",
      "L'angiosarcome splénique",
      "Le léiomyosarcome de l'œsophage"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La gastrite atrophique auto-immune est une condition pré-cancéreuse augmentant le risque d'adénocarcinome gastrique et favorisant le développement de tumeurs neuroendocrines (TNE type 1) bénignes ou peu agressives.",
    "clinicalPearl": "Surveillance de la maladie de Biermer : risque accru d'adénocarcinome gastrique et de TNE type 1."
  },
  {
    "id": "q-gast-19",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle lésion élémentaire histologique de la muqueuse gastrique correspond au remplacement des glandes gastriques par un épithélium comportant des cellules caliciformes de type intestinal ?",
    "options": [
      "La dysplasie de haut grade",
      "La métaplasie intestinale (complète ou incomplète)",
      "L'hypertrophie des cellules pariétales",
      "L'hyperplasie fovéolaire",
      "La métaplasie pancréatique pure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La métaplasie intestinale remplace les glandes gastriques normales par une muqueuse spécialisée de type grêlique ou colique avec cellules caliciformes sécrétrices de mucines acides.",
    "clinicalPearl": "Métaplasie intestinale = présence de cellules caliciformes dans la muqueuse gastrique (lésion pré-néoplasique)."
  },
  {
    "id": "q-gast-20",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la gastropathie d'hypertension portale chez le cirrhotique, quel aspect endoscopique caractéristique de la muqueuse fundique est observé ?",
    "options": [
      "Des polypes pédiculés saignants",
      "Un aspect en 'mosaïque' ou en 'peau de serpent' avec pétéchies et taches rouge cerise",
      "Des ulcérations profondes térébrantes",
      "Des dépôts blanchâtres confluents pseudomembraneux",
      "Une sténose rigide antrale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastropathie d'HTP se traduit par une ectasie capillaire muqueuse réalisant un réticule polygonal régulier ('aspect en mosaïque' ou 'peau de serpent'), responsable de saignement occulte ou aigu.",
    "clinicalPearl": "Gastropathie d'HTP = muqueuse en mosaïque / peau de serpent (ectasies capillaires sous-muqueuses)."
  },
  {
    "id": "q-gast-21",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle entité endoscopique distincte se caractérise par des bandes vasculaires rouges longitudinales convergeant vers le pylore chez la femme âgée ('estomac en pastèque') ?",
    "options": [
      "L'ectasie vasculaire antrale (GAVE / Gastric Antral Vascular Ectasia)",
      "La gastrite de Biermer",
      "Le syndrome de Zollinger-Ellison",
      "La linitide plastique",
      "La diverticulite gastrique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le GAVE (Watermelon stomach) associe des travées érythémateuses convergeant vers le pylore contenant des thrombi capillaires muqueux, source fréquente d'anémie ferriprive chronique réfractaire.",
    "clinicalPearl": "Estomac en pastèque (GAVE) : bandes rouges radiaires antrales convergeant vers le pylore (traitement par plasma argon)."
  },
  {
    "id": "q-gast-22",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel traitement endoscopique de première intention permet de coaguler efficacement les ectasies vasculaires de l'estomac en pastèque (GAVE) ?",
    "options": [
      "La photocoagulation au plasma argon (APC)",
      "La gastrectomie totale",
      "La sclérothérapie à l'alcool pur",
      "La pose de prothèse métallique",
      "La mucosectomie totale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La coagulation au plasma d'argon (APC) permet une destruction thermique superficielle et ciblée des lésions vasculaires antrales du GAVE avec une excellente efficacité hémostatique.",
    "clinicalPearl": "Traitement de choix de l'estomac en pastèque (GAVE) = Coagulation au plasma argon (APC)."
  },
  {
    "id": "q-gast-23",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel agent infectieux viral herpétique opportuniste peut provoquer une gastrite nécrosante ou ulcérée sévère chez le patient immunodéprimé (VIH / greffé d'organe) ?",
    "options": [
      "Le virus de la grippe A",
      "Le Cytomégalovirus (CMV)",
      "Le rhinovirus",
      "Le virus de l'hépatite A",
      "Le papillomavirus humain"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le CMV provoque chez l'immunodéprimé des ulcérations gastriques creusantes et nécrotiques avec volumineuses inclusions intranucléaires en 'œil de hibou' à l'histologie, traitées par Ganciclovir.",
    "clinicalPearl": "Gastrite à CMV chez l'immunodéprimé : ulcérations nécrotiques + inclusions en œil de hibou (Ganciclovir)."
  },
  {
    "id": "q-gast-24",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle entité rare de gastrite infectieuse fulminante bactérienne s'accompagne d'une nécrose gazeuse de la paroi gastrique et d'un choc septique grave ?",
    "options": [
      "La gastrite superficielle catarrhale",
      "La gastrite phlegmoneuse ou emphysémateuse (streptocoque, anaérobies)",
      "La gastrite lymphocytaire bénigne",
      "La gastropathie biliaire simple",
      "L'ulcère de Dieulafoy"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La gastrite phlegmoneuse/emphysémateuse est une infection bactérienne invasive suppurée suraiguë de la sous-muqueuse gastrique avec présence de gaz intramural, de pronostic redoutable.",
    "clinicalPearl": "Gastrite emphysémateuse/phlegmoneuse = infection bactérienne nécrosante de la paroi gastrique (urgence vitale)."
  },
  {
    "id": "q-gast-25",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel traitement permet d'éradiquer la gastrite chronique à Helicobacter pylori et de stopper l'évolution de la cascade atrophique pré-cancéreuse ?",
    "options": [
      "Un traitement par corticoïdes au long cours",
      "L'antibiothérapie d'éradication combinée de H. pylori par quadrithérapie adaptée",
      "L'administration d'anti-inflammatoires non stéroïdiens",
      "La radiothérapie locale de l'antre",
      "Une alimentation exclusivement lactée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'éradication réussie de H. pylori fait disparaître l'infiltrat inflammatoire aigu et chronique de la muqueuse et bloque la progression de la cascade atrophique vers le cancer gastrique.",
    "clinicalPearl": "Éradication de H. pylori = régression de l'inflammation gastrique et prévention du cancer de l'estomac."
  },
  {
    "id": "q-cas-gast-1",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Une femme de 56 ans sans antécédent consulte pour asthénie profonde, pâleur cireuse, paresthésies des membres inférieurs en chaussettes et troubles de la marche à type d'ataxie proprioceptive. La biologie met en évidence : hémoglobine à 6,8 g/dL, VGM à 118 fL (macrocytose majeure), réticulocytes bas à 22 000/mm³, plaquettes à 110 000/mm³, leucocytes à 3 200/mm³. Le frottis sanguin confirme des hématies de grande taille et des polynucléaires neutrophiles hypersegmentés. La vitamine B12 sérique est effondrée à 60 pg/mL (N > 200), les folates sériques sont normaux. La gastroscopie révèle une muqueuse fundique très pâle, amincie, laissant deviner le réseau vasculaire sous-muqueux, l'antre étant d'aspect normal. Les biopsies fundiques confirment une atrophie glandulaire oxyntique complète avec disparition des cellules pariétales. Quel est le diagnostic précis ?",
    "options": [
      "Gastrite aiguë toxique à l'alcool",
      "Gastrite chronique auto-immune atrophique du corps et fundus (Maladie de Biermer) compliquée de sclérose combinée de la moelle",
      "Syndrome myélodysplasique primitif",
      "Anémie hémolytique auto-immune isolée",
      "Maladie de Whipple"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association anémie macrocytaire arégénérative, carence en B12, signes neurologiques cordonaux postérieurs (sclérose combinée de la moelle) et atrophie fundique sélective avec respect de l'antre est la présentation typique de la maladie de Biermer.",
    "clinicalPearl": "Maladie de Biermer = Gastrite atrophique fundique auto-immune + anémie macrocytaire par déficit en B12 + signes neurologiques."
  },
  {
    "id": "q-cas-gast-2",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Chez cette même patiente Mme F., quels examens sérologiques immunologiques spécifiques permettent de confirmer le mécanisme auto-immun de cette gastrite ?",
    "options": [
      "Recherche des anticorps anti-transglutaminase IgA",
      "Recherche des anticorps anti-facteur intrinsèque et anti-cellules pariétales gastriques (anti-H+/K+ ATPase)",
      "Recherche des anticorps antinucléaires isolés",
      "Recherche des anticorps anti-mitochondries de type M2",
      "Dosage du facteur rhumatoïde"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La mise en évidence d'anticorps anti-facteur intrinsèque (extrêmement spécifiques) et d'anticorps anti-cellules pariétales confirme formellement l'étiologie auto-immune de la gastrite de Biermer.",
    "clinicalPearl": "Confirmation sérologique de Biermer : Anticorps anti-facteur intrinsèque (spécifiques) et anti-cellules pariétales."
  },
  {
    "id": "q-cas-gast-3",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Un homme de 48 ans consulte pour dyspepsie fonctionnelle avec pesanteur épigastrique post-prandiale. La FOGD retrouve un aspect érythémateux modéré de l'antre. Les biopsies systématiques réalisées selon le protocole de Sydney révèlent une gastrite chronique active antrale non atrophique avec présence abondante de bacilles spiralés tapissant la surface épithéliale au Giemsa (Helicobacter pylori positif). L'histologie ne montre ni atrophie glandulaire ni métaplasie intestinale (score OLGA 0). Quelle est la stratégie thérapeutique recommandée ?",
    "options": [
      "Abstention thérapeutique et réévaluation dans 5 ans",
      "Traitement d'éradication de première intention d'Helicobacter pylori par quadrithérapie bismuthée (10 jours) ou quadrithérapie concomitante (14 jours), suivi d'un contrôle d'éradication par test respiratoire à l'urée 13C à 4 semaines après la fin des antibiotiques",
      "Gastrectomie partielle prophylactique",
      "Mise sous corticoïdes oraux",
      "Traitement exclusif par anti-acides au besoin"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Toute infection documentée à Helicobacter pylori doit être traitée par quadrithérapie afin d'obtenir l'éradication bactérienne, guérir l'inflammation gastrique et stopper la cascade carcinologique, avec contrôle d'éradication à 4 semaines.",
    "clinicalPearl": "Toute gastrite à H. pylori doit être éradiquée (quadrithérapie 10-14 jours) avec contrôle à 4 semaines."
  },
  {
    "id": "q-cas-gast-4",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un patient de 64 ans sans plainte digestive majeure a bénéficié d'une FOGD avec biopsies selon le protocole de Sydney pour bilan d'anémie ferriprive. L'anatomopathologiste conclut à une gastrite chronique atrophique sévère touchant l'antre et le fundus avec métaplasie intestinale étendue et score OLGA stade III, sans dysplasie. La recherche d'H. pylori est positive. Quelle est la conduite à tenir à long terme après traitement d'éradication bactérienne ?",
    "options": [
      "Aucune surveillance nécessaire après éradication",
      "Contrôle de l'éradication d'H. pylori à 4 semaines, puis programme de surveillance endoscopique régulière par FOGD avec biopsies cartographiées tous les 3 ans en raison du risque accru d'adénocarcinome gastrique (stade OLGA III)",
      "Gastrectomie totale de principe préventive",
      "Coloscopie tous les ans",
      "Mise sous aspirine au long cours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les recommandations européennes (MAPS II) préconisent une surveillance endoscopique tous les 3 ans par endoscopie de haute définition avec biopsies cartographiées pour les patients présentant une atrophie/métaplasie intestinale étendue (stades OLGA ou OLGIM III et IV).",
    "clinicalPearl": "Gastrite atrophique sévère (OLGA III/IV) : surveillance par FOGD avec biopsies tous les 3 ans."
  },
  {
    "id": "q-cas-gast-5",
    "courseId": "crs-gastro-gastrites",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un homme de 50 ans consulte pour asthénie et apparition progressive d'œdèmes diffus bilatéraux des membres inférieurs prenant le godet, associés à des nausées et des douleurs épigastriques sourdes. Les examens sanguins révèlent une hypoalbuminémie profonde à 18 g/L (N > 35) et une hypoprotidémie globale à 42 g/L, sans protéinurie au bilan urinaire, sans insuffisance hépatocellulaire (TP et bilirubine normaux) et sans insuffisance cardiaque. La FOGD met en évidence des plis muqueux fundiques géants volumineux boudinés, évoquant des circonvolutions cérébrales, recouverts d'un épais mucus visqueux. Les macrobiopsies gastriques montrent une hyperplasie fovéolaire majeure avec kystisation glandulaire et atrophie des cellules pariétales. Quel est le diagnostic ?",
    "options": [
      "Linitide plastique d'emblée",
      "Maladie de Ménétrier (gastropathie hypertrophique géante exsudative)",
      "Syndrome néphrotique impur",
      "Maladie de Crohn gastrique",
      "Amylose cardiaque"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade plis gastriques géants cérébriformes du fundus + hyperplasie fovéolaire histologique + entéropathie exsudative avec hypoalbuminémie sévère et anasarque caractérise la maladie de Ménétrier.",
    "clinicalPearl": "Plis géants cérébriformes + gastropathie exsudative (œdèmes par fuite d'albumine) = Maladie de Ménétrier."
  }
];

export const GASTRITES_RESOURCES: CourseResource[] = [
  {
    "id": "res-gast-summary",
    "courseId": "crs-gastro-gastrites",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Gastrites Aiguës et Chroniques",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Gastrites\n- **Définition** : Entité histologique définie par l'inflammation de la muqueuse gastrique sur biopsies (système de Sydney : au moins 5 biopsies : 2 antre, 1 angulus, 2 corps).\n- **Gastrite chronique à Helicobacter pylori (85-90%)** :\n  - Cause la plus fréquente. Débute en gastrite superficielle puis cascade de Correa : Atrophie -> Métaplasie intestinale -> Dysplasie -> Adénocarcinome.\n  - Éradication par quadrithérapie bismuthée (10j) ou concomitante (14j).\n  - Si atrophie sévère (OLGA III/IV) : surveillance FOGD tous les 3 ans.\n- **Gastrite auto-immune (Maladie de Biermer / Type A)** :\n  - Atteinte fundique et corporéale avec respect de l'antre.\n  - Destruction des cellules pariétales par anticorps anti-cellules pariétales et anti-facteur intrinsèque.\n  - Carence en B12 -> Anémie macrocytaire mégaloblastique + sclérose combinée de la moelle. Traitement : Vitamine B12 IM à vie.\n  - Achlorhydrie -> hypergastrinémie réactionnelle -> TNE gastriques type 1.\n- **Formes particulières** :\n  - Maladie de Ménétrier : plis cérébriformes géants + hyperplasie fovéolaire + gastropathie exsudative (œdèmes par hypoalbuminémie).\n  - Gastrite lymphocytaire : associée à la maladie cœliaque (> 25 lymphocytes/100 cellules épithéliales).\n  - Gastropathie d'HTP (mosaïque) et GAVE (estomac en pastèque -> plasma argon).",
    "author": "Faculté de Médecine - Collège de Gastroentérologie et Anatomopathologie"
  },
  {
    "id": "res-gast-pearls",
    "courseId": "crs-gastro-gastrites",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Gastrites",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Piège** : 'Gastrite' est un diagnostic histologique (biopsies de Sydney indispensables), jamais un diagnostic uniquement endoscopique ou clinique.\n- ⚡ **Biermer** : atteinte sélective du fundus/corps (respecte l'antre) + Vitamine B12 injectable à vie + surveillance du cancer gastrique et TNE 1.\n- ⚡ **Cascade de Correa** : Gastrite chronique -> Atrophie -> Métaplasie intestinale -> Dysplasie -> Cancer.",
    "author": "Commission Pédagogique"
  }
];
