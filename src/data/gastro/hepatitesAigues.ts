import { Question, CourseResource } from '../../types/medical';

export const HEPATITES_AIGUES_QUESTIONS: Question[] = [
  {
    "id": "q-hep-aig-01",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle définition biologique caractérise typiquement une hépatite aiguë sur le plan enzymatique ?",
    "options": [
      "Élévation modérée des phosphatases alcalines isolée",
      "Élévation massive et brutale des transaminases (ALAT > ASAT) supérieure à 10 fois la limite supérieure de la normale (souvent > 20 à 50N)",
      "Augmentation isolée de la bilirubine non conjuguée",
      "Élévation de l'amylasémie",
      "Chute isolée de l'albumine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hépatite aiguë est définie par une cytolyse hépatique aiguë majeure avec ALAT prédominant sur les ASAT, dépassant habituellement 10 à 20 fois la normale.",
    "clinicalPearl": "Hépatite aiguë = Cytolyse hépatique majeure (ALAT > ASAT > 10 à 50N)."
  },
  {
    "id": "q-hep-aig-02",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel paramètre biologique fondamental doit être dosé d'urgence et surveillé de façon rapprochée pour dépister une hépatite aiguë fulminante ?",
    "options": [
      "La ferritinémie",
      "Le taux de prothrombine (TP) ou facteur V",
      "La gamma-GT",
      "Le cholestérol total",
      "La créatininémie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La mesure du TP (et du facteur V) est le critère cardinal d'évaluation de la gravité. Un TP < 50% définit l'hépatite sévère, et un TP < 50% associé à une encéphalopathie hépatique définit l'hépatite fulminante.",
    "clinicalPearl": "Gravité hépatite aiguë : TP et Facteur V < 50% = Hépatite grave. TP < 50% + Encéphalopathie = Hépatite fulminante."
  },
  {
    "id": "q-hep-aig-03",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'hépatite fulminante, quel signe clinique neuropsychiatrique affirme le passage au stade d'encéphalopathie hépatique justifiant une alerte de greffe en urgence ?",
    "options": [
      "Céphalées simples",
      "Astérixis (flapping tremor), désorientation temporo-spatiale, confusion ou coma",
      "Hypoacousie",
      "Paresthésies distales",
      "Nystagmus horizontal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'apparition d'un astérixis ou de troubles de la conscience chez un patient ayant un TP < 50% signe l'hépatite fulminante, nécessitant un transfert immédiat en centre de transplantation hépatique.",
    "clinicalPearl": "Hépatite fulminante = Cytolyse + TP < 50% + Encéphalopathie hépatique (urgence vitale / appel centre de greffe)."
  },
  {
    "id": "q-hep-aig-04",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le mode de transmission habituel des virus de l'hépatite A (VHA) et de l'hépatite E (VHE) ?",
    "options": [
      "Transmission parentérale exclusive",
      "Transmission oro-fécale (eau ou aliments contaminés)",
      "Transmission sexuelle exclusive",
      "Transmission vectorielle par moustiques",
      "Transmission aéroportée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les virus A et E sont des virus nus à transmission féco-orale (eau de boisson souillée, fruits de mer, viande de porc ou gibier mal cuite pour le VHE).",
    "clinicalPearl": "Virus A et E = transmission féco-orale (eau/aliments). Virus B, C, D = transmission parentérale/sexuelle."
  },
  {
    "id": "q-hep-aig-05",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Chez quelle population particulière l'infection aiguë par le virus de l'hépatite E (VHE, génotypes 1 et 2) s'accompagne-t-elle d'un taux effroyable d'hépatite fulminante atteignant 20 à 25% de mortalité ?",
    "options": [
      "Les nourrissons de moins de 6 mois",
      "Les femmes enceintes au troisième trimestre",
      "Les personnes âgées diabétiques",
      "Les patients splenectomisés",
      "Les sujets immunodéprimés VIH"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez la femme enceinte, l'hépatite aiguë E présente une gravité exceptionnelle avec jusqu'à 20-25% de décès par hépatite fulminante au troisième trimestre de la grossesse.",
    "clinicalPearl": "Hépatite E aiguë chez la femme enceinte = Risque majeur d'hépatite fulminante (20-25% de mortalité)."
  },
  {
    "id": "q-hep-aig-06",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "L'hépatite virale A évolue-t-elle vers la chronicité ?",
    "options": [
      "Oui dans plus de 80% des cas",
      "Oui dans 20% des cas",
      "Non, le VHA n'évolue JAMAIS vers l'hépatite chronique ni la cirrhose",
      "Uniquement chez l'adulte de plus de 60 ans",
      "Uniquement chez les patients diabétiques"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le virus de l'hépatite A (VHA) n'évolue JAMAIS vers la chronicité. Il guérit toujours spontanément (immunité définitive), mais peut exceptionnellement être fulminant (< 0,5%).",
    "clinicalPearl": "Hépatite A : JAMAIS de passage à la chronicité. Guérison spontanée constante conférant une immunité protectrice à vie."
  },
  {
    "id": "q-hep-aig-07",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel marqueur sérologique affirme avec certitude le diagnostic d'hépatite aiguë A récente ?",
    "options": [
      "Les anticorps anti-VHA de type IgG",
      "Les anticorps anti-VHA de type IgM",
      "L'ARN VHA dans les selles uniquement",
      "L'antigène VHA sérique",
      "Les transaminases seules"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La présence d'anticorps anti-VHA de classe IgM confirme une infection aiguë ou très récente par le VHA (positifs dès le début des symptômes et pendant 3 à 6 mois).",
    "clinicalPearl": "Diagnostic hépatite A aiguë = Ac anti-VHA IgM positifs."
  },
  {
    "id": "q-hep-aig-08",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quels marqueurs sérologiques affirment le diagnostic d'hépatite aiguë B typique ?",
    "options": [
      "Ac anti-HBs isolés",
      "Antigène HBs ET Anticorps anti-HBc de type IgM",
      "Ac anti-HBe isolés",
      "Ac anti-HBc de type IgG seuls",
      "ARN VHC positif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hépatite B aiguë est caractérisée par la positivité simultanée de l'Ag HBs et surtout des anticorps anti-HBc de classe IgM à titre élevé.",
    "clinicalPearl": "Diagnostic hépatite B aiguë = Ag HBs positif + Ac anti-HBc IgM positifs."
  },
  {
    "id": "q-hep-aig-09",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le risque de passage à la chronicité d'une infection aiguë par le virus de l'hépatite B (VHB) chez l'adulte immunocompétent ?",
    "options": [
      "Plus de 90%",
      "Environ 50%",
      "Moins de 5 à 10% (plus de 90-95% guérissent spontanément)",
      "0%",
      "100%"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Chez l'adulte immunocompétent, l'hépatite B aiguë guérit spontanément dans plus de 90 à 95% des cas (élimination de l'Ag HBs et apparition des Ac anti-HBs). Le risque de chronicité est < 5-10% (contrairement au nouveau-né où il est > 90%).",
    "clinicalPearl": "Hépatite B aiguë adulte immunocompétent : guérison spontanée > 90-95% (chronicité < 5-10%)."
  },
  {
    "id": "q-hep-aig-10",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Le virus de l'hépatite D (VHD ou virus Delta) est un virus défectif qui ne peut se répliquer qu'en présence obligatoire de quel autre virus ?",
    "options": [
      "Le virus de l'hépatite A",
      "Le virus de l'hépatite B (Ag HBs)",
      "Le virus de l'hépatite C",
      "Le cytomégalovirus",
      "Le virus d'Epstein-Barr"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le VHD nécessite l'enveloppe constituée par l'Ag HBs du VHB pour s'assembler et infecter d'autres hépatocytes. Il ne survient donc qu'en co-infection ou surinfection d'un porteur du VHB.",
    "clinicalPearl": "Virus Delta (VHD) = virus défectif dépendant obligatoirement de l'Ag HBs (VHB)."
  },
  {
    "id": "q-hep-aig-11",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le risque d'évolution vers l'hépatite chronique après une hépatite aiguë virale C (VHC) chez l'adulte ?",
    "options": [
      "Moins de 5%",
      "Environ 20%",
      "Plus de 70 à 80%",
      "0%",
      "100% systématiquement"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'hépatite aiguë C est asymptomatique dans 80-90% des cas, et évolue vers la chronicité dans 70 à 80% des cas (seuls 20-30% éliminent spontanément le virus).",
    "clinicalPearl": "Hépatite C aiguë : asymptomatique dans 80-90% des cas, chronicité dans 70 à 80% des cas."
  },
  {
    "id": "q-hep-aig-12",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause toxique médicamenteuse est la première cause d'hépatite aiguë cytolytique grave et d'hépatite fulminante en Occident ?",
    "options": [
      "L'Aspirine",
      "Le surdosage en Paracétamol (acétaminophène)",
      "L'Amoxicilline",
      "L'Oméprazole",
      "La Spironolactone"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'intoxication au paracétamol (dose toxique > 8-10 g chez l'adulte, ou moins si dénutrition/alcoolisme) par accumulation de son métabolite réactif toxique (NAPQI) est la 1ère cause d'hépatite fulminante en Occident.",
    "clinicalPearl": "Intoxication au paracétamol = 1ère cause d'hépatite aiguë fulminante toxique."
  },
  {
    "id": "q-hep-aig-13",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est l'antidote spécifique d'urgence à administrer sans attendre devant une intoxication aiguë au paracétamol ?",
    "options": [
      "La Naloxone",
      "La N-acétylcystéine (NAC) par voie IV ou orale",
      "Le Flumazénil",
      "L'Atropine",
      "La Vitamine K1"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La N-acétylcystéine reconstitue les réserves hépatiques en glutathion et neutralise le métabolite toxique NAPQI. Elle doit être débutée le plus tôt possible, idéalement avant la 8ème heure.",
    "clinicalPearl": "Antidote paracétamol = N-acétylcystéine (NAC) IV précoce (nomogramme de Rumack-Matthew)."
  },
  {
    "id": "q-hep-aig-14",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'hépatite aiguë alcoolique (HAA), quel profil enzymatique de cytolyse hépatique est très évocateur ?",
    "options": [
      "ALAT très largement supérieure à ASAT (> 10 fois)",
      "ASAT prédominant sur ALAT (ratio ASAT/ALAT > 1,5 à 2), avec transaminases habituellement modérées (< 300 à 500 UI/L)",
      "Transaminases normales avec TP effondré",
      "Phosphatases alcalines à 20N isolées",
      "Amylasémie à 15N"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans l'atteinte alcoolique, les ASAT prédominent sur les ALAT (ratio ASAT/ALAT > 1,5 à 2, carence en pyridoxine B6 réduisant ALAT), et le titre des transaminases dépasse rarement 500 UI/L.",
    "clinicalPearl": "Cytolyse alcoolique : ASAT > ALAT (ratio > 1,5 à 2), transaminases modérées (< 300-500 UI/L)."
  },
  {
    "id": "q-hep-aig-15",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel champignon vénéneux provoque typiquement une hépatite toxique fulminante gravissime débutant par un syndrome gastro-intestinal retardé (6 à 24h après ingestion) ?",
    "options": [
      "L'amanite tue-mouches (Amanita muscaria)",
      "L'amanite phalloïde (Amanita phalloides)",
      "Le bolet satan",
      "La truffe noire",
      "La morille blonde"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'Amanita phalloides contient des amatoxines thermostables. Après une phase d'incubation silencieuse (6-24h), elle provoque gastroentérite cholériforme puis cytolyse massive avec nécrose centro-lobulaire foudroyante.",
    "clinicalPearl": "Amanite phalloïde : incubation longue (6-24h) + gastro-entérite + nécrose hépatique fulminante (amatoxines)."
  },
  {
    "id": "q-hep-aig-16",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle hépatite virale transmise par les voies respiratoires et la salive provoque chez le jeune adulte une cytolyse modérée dans le cadre d'un syndrome mononucléosique avec angine et polyadénopathies ?",
    "options": [
      "Le virus d'Epstein-Barr (EBV)",
      "Le VHA",
      "Le rotavirus",
      "Le norovirus",
      "L'adénovirus type 40"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'EBV (mononucléose infectieuse) s'accompagne d'une hépatite cytolytique aiguë modérée et anictérique dans plus de 80% des cas, associée à angine pseudomembraneuse, adénopathies et MNI test positif.",
    "clinicalPearl": "EBV (Mononucléose infectieuse) : cytolyse aiguë modérée fréquente + adénopathies + splénomégalie + MNI test positif."
  },
  {
    "id": "q-hep-aig-17",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen d'imagerie abdominale de première intention doit être réalisé systématiquement devant toute cytolyse aiguë pour éliminer une cause biliaire (migration lithiasique) ou vasculaire ?",
    "options": [
      "L'échographie abdominale avec Doppler hépatique",
      "Le lavement baryté",
      "L'IRM cérébrale",
      "La scintigraphie thyroïdienne",
      "La radiographie pulmonaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'échographie hépato-biliaire permet d'éliminer une dilatation des voies biliaires (obstacle lithiasique), une cholécystite, une thrombose des veines sus-hépatiques (Budd-Chiari) ou de la veine porte.",
    "clinicalPearl": "Devant toute hépatite aiguë : Échographie abdominale hépato-biliaire indispensable en 1ère intention."
  },
  {
    "id": "q-hep-aig-18",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Pourquoi la ponction biopsie hépatique (PBH) n'est-elle généralement PAS indiquée dans l'hépatite aiguë typique non compliquée ?",
    "options": [
      "Elle est impossible techniquement",
      "Le diagnostic est sérologique ou étiologique, la maladie guérit le plus souvent spontanément et la biopsie comporte un risque hémorragique surtout si les troubles de l'hémostase (baisse du TP) sont présents",
      "Elle détruit le foie",
      "Elle masque la guérison",
      "Elle donne une hépatite fulminante"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La PBH est inutile dans les formes typiques (diagnostic sérologique) et potentiellement dangereuse si le TP est diminué. Elle n'est discutée que dans les formes atypiques, prolongées ou de cause indéterminée.",
    "clinicalPearl": "Hépatite aiguë typique : PAS de ponction biopsie hépatique (diagnostic sérologique/clinique)."
  },
  {
    "id": "q-hep-aig-19",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle mesure thérapeutique est la base incontournable de la prise en charge d'une hépatite aiguë bénigne (VHA, VHE, VHB) ?",
    "options": [
      "Corticothérapie intraveineuse",
      "Repos relatif, arrêt de tout médicament hépatotoxique, proscription totale de l'alcool et surveillance clinique et du TP jusqu'à normalisation",
      "Antibiothérapie par aminosides",
      "Antiviraux d'action directe systématiques",
      "Chimiothérapie ciblée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hépatite aiguë virale non sévère guérit spontanément. Le traitement est purement symptomatique : repos, éviction d'alcool et de toxiques, avec surveillance hebdomadaire du TP jusqu'à résolution.",
    "clinicalPearl": "Hépatite aiguë non sévère = Traitement symptomatique + Éviction des toxiques + Surveillance du TP."
  },
  {
    "id": "q-hep-aig-20",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle maladie génétique de surcharge en cuivre chez l'adolescent ou l'adulte jeune peut se révéler par une hépatite aiguë sévère ou fulminante avec anémie hémolytique à test de Coombs négatif ?",
    "options": [
      "L'hémochromatose génétique HFE",
      "La maladie de Wilson (mutation ATP7B)",
      "Le déficit en alpha-1-antitrypsine",
      "La glycogénose type 1",
      "La mucoviscidose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La maladie de Wilson peut se révéler sous forme fulminante avec cytolyse, anémie hémolytique Coombs négative, bague péricornéenne de Kayser-Fleischer, céruléoplasmine basse et cuivre urinaire élevé.",
    "clinicalPearl": "Maladie de Wilson : hépatite fulminante du sujet jeune + anémie hémolytique Coombs négatif + anneau de Kayser-Fleischer."
  },
  {
    "id": "q-hep-aig-21",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'évaluation pronostique de l'hépatite fulminante en vue d'une inscription en urgence sur la liste de transplantation hépatique (super-urgence), quels critères français sont universellement employés ?",
    "options": [
      "Critères de Child-Pugh",
      "Critères de Clichy (Bismuth) basés sur l'âge, l'encéphalopathie et le taux de facteur V",
      "Score de Blatchford",
      "Critères d'Amsel",
      "Score de Ranson"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les critères de Clichy indiquent la transplantation hépatique si présence d'une encéphalopathie hépatique (stade 3-4) associée à un facteur V < 20% (chez les moins de 30 ans) ou < 30% (chez les plus de 30 ans).",
    "clinicalPearl": "Critères de Clichy (hépatite fulminante) : Encéphalopathie hépatique + Facteur V < 20% (< 30 ans) ou < 30% (> 30 ans)."
  },
  {
    "id": "q-hep-aig-22",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement antiviral spécifique est indiqué en urgence dans l'hépatite aiguë virale B uniquement en cas de forme sévère (TP < 50%) ou fulminante ?",
    "options": [
      "L'Interféron alpha pégylé",
      "Un analogue nucléosidique/nucléotidique oral puissant à haute barrière génétique (Entécavir ou Ténofovir)",
      "L'Acyclovir",
      "Le Ganciclovir",
      "La Zidovudine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les formes sévères ou fulminantes de l'hépatite aiguë B doivent être traitées immédiatement par analogue oral puissant (Ténofovir ou Entécavir) pour freiner la nécrose hépatocytaire et améliorer la survie.",
    "clinicalPearl": "Hépatite B aiguë sévère (TP < 50%) ou fulminante = Ténofovir ou Entécavir en urgence."
  },
  {
    "id": "q-hep-aig-23",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle manifestation extra-hépatique précoce (phase pré-ictérique) est fréquente dans l'hépatite virale aiguë B par dépôt de complexes immuns circulants ?",
    "options": [
      "Ulcérations buccales aphtoïdes",
      "Syndrome pseudo-grippal avec urticaire cutané, arthralgies inflammatoires bilatérales des mains et genoux (syndrome de Caroli)",
      "Péricardite constrictive",
      "Hypertrophie parotidienne",
      "Névralgie faciale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La phase prodromique pré-ictérique de l'hépatite B peut associer asthénie, éruption urticarienne et arthralgies inflammatoires transitoires liées aux complexes immuns Ag HBs-Ac anti-HBs.",
    "clinicalPearl": "Phase prodromique hépatite B : Arthralgies + Urticaire + Asthénie (maladie sérique par complexes immuns)."
  },
  {
    "id": "q-hep-aig-24",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle mesure préventive efficace permet de protéger l'entourage et d'éviter la transmission du virus de l'hépatite A lors d'un cas index intrafamilial ?",
    "options": [
      "Prise d'antibiotiques par toute la famille",
      "Vaccination anti-VHA précoce de l'entourage proche (dans les 14 jours suivant l'exposition) et renforcement de l'hygiène des mains",
      "Isolement en chambre stérile",
      "Régime sans résidu",
      "Ponction hépatique de l'entourage"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La vaccination anti-VHA administrée dans les 14 jours suivant le contact prévient efficacement le développement de la maladie chez les sujets contacts intrafamiliaux.",
    "clinicalPearl": "Entourage hépatite A : Vaccination anti-VHA dans les 14 jours suivant le contact + hygiène rigoureuse."
  },
  {
    "id": "q-hep-aig-25",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Chez un patient sous antituberculeux (Isoniazide, Rifampicine, Pyrazinamide), quel contrôle biologique régulier permet de dépister précocement une hépatite médicamenteuse ?",
    "options": [
      "Dosage des transaminases (ALAT, ASAT) à J8, J15, J30 puis mensuel",
      "Numération formule sanguine seule",
      "Dosage des D-Dimères",
      "ECG bimensuel",
      "Bilirubinurie sur bandelette"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'isoniazide et le pyrazinamide sont hépatotoxiques. La surveillance des transaminases est impérative : arrêt du traitement si transaminases > 5N (ou > 3N avec symptômes digestifs/ictère).",
    "clinicalPearl": "Antituberculeux et foie : arrêt immédiat si ALAT/ASAT > 5N (ou > 3N si symptômes digestifs ou ictère)."
  },
  {
    "id": "cas-hep-aig-01",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un jeune homme de 22 ans, étudiant de retour d'un voyage au Maghreb il y a 4 semaines, consulte pour asthénie intense, nausées, vomissements et un ictère cutanéo-muqueux franc avec urines foncées couleur thé et selles mastic décolorées. Le bilan biologique montre : ALAT = 2450 UI/L (60N), ASAT = 1890 UI/L, Bilirubine totale = 110 µmol/L (dont conjuguée = 85 µmol/L), TP = 82%. Quelle sérologie de première intention permettra d'affirmer le diagnostic le plus probable ?",
    "options": [
      "Sérologie VIH",
      "Sérologie hépatite A : détection des Anticorps anti-VHA de type IgM",
      "Sérologie de la maladie de Lyme",
      "Anticorps anti-nucléaires",
      "Sérologie hépatite C seule"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'incubation de 4 semaines après séjour en zone d'endémie avec cytolyse massive (> 50N) évoque au premier chef une hépatite aiguë A. La confirmation repose sur la recherche des IgM anti-VHA.",
    "clinicalPearl": "Hépatite aiguë A = Voyage/eau souillée (incubation ~30 jours) + IgM anti-VHA positives."
  },
  {
    "id": "cas-hep-aig-02",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Les IgM anti-VHA reviennent hautement positives. Le TP est mesuré à 82%. Le patient n'a aucun signe de confusion ni d'astérixis. Quelle est la prise en charge thérapeutique et les mesures à prendre vis-à-vis de son entourage immédiat (compagne vivant sous le même toit) ?",
    "options": [
      "Hospitalisation en réanimation et début d'antiviraux d'action directe",
      "Traitement ambulatoire symptomatique, repos, éviction d'alcool, et proposition d'une vaccination anti-VHA pour sa compagne dans les 14 jours",
      "Interféron pégylé pendant 6 mois",
      "Transplantation hépatique préventive",
      "Antibioprophylaxie par amoxicilline"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le TP > 50% sans encéphalopathie définit une hépatite bénigne. Le traitement est ambulatoire symptomatique. La compagne (contact intrafamilial) doit bénéficier d'une vaccination anti-VHA rapide (< 14 jours).",
    "clinicalPearl": "Hépatite A bénigne = Mesures symptomatiques + Vaccination de l'entourage familial immédiat (< 14j)."
  },
  {
    "id": "cas-hep-aig-03",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une femme de 26 ans est amenée aux urgences 10 heures après l'ingestion volontaire de 18 grammes de paracétamol dans un contexte de tentative de suicide. Elle est nauséreuse mais alerte. Sa glycémie est normale. Quel traitement médical spécifique d'urgence doit être débuté immédiatement sans attendre les résultats du dosage sanguin ?",
    "options": [
      "Administration immédiate de N-acétylcystéine (NAC) par voie intraveineuse selon le protocole adapté",
      "Lavement évacuateur au charbon actif par sonde rectale",
      "Alcalinisation par bicarbonate de sodium",
      "Injection de flumazénil",
      "Dialyse péritonéale d'emblée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'ingestion de 18 g de paracétamol est largement au-dessus du seuil toxique (> 8-10 g). La N-acétylcystéine IV doit être débutée immédiatement sans délai afin de prévenir la nécrose hépatocytaire centro-lobulaire massive.",
    "clinicalPearl": "Intoxication paracétamol > 8g = N-acétylcystéine IV immédiate (efficience maximale avant la 8e-10e heure)."
  },
  {
    "id": "cas-hep-aig-04",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "À J+3, malgré la NAC débutée tardivement, la patiente devient confuse, prostrée, et présente un astérixis bilatéral franc. Les examens montrent : ALAT = 6500 UI/L, TP = 14%, Facteur V = 12%, Créatinine = 220 µmol/L, Lactates artériels = 4,2 mmol/L. Quel diagnostic posez-vous et quelle décision thérapeutique majeure s'impose en urgence absolue ?",
    "options": [
      "Hépatite aiguë bénigne nécessitant une simple surveillance en chambre",
      "Hépatite fulminante au paracétamol avec défaillance multiviscérale : transfert immédiat en réanimation spécialisée et inscription en super-urgence pour transplantation hépatique",
      "Hépatite alcoolique suraiguë",
      "Choc septique d'origine pulmonaire",
      "Pancréatite aiguë nécrosante"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade TP < 50%, encéphalopathie hépatique (astérixis) et facteur V < 20% (critères de Clichy et du King's College) affirme l'hépatite fulminante, indication formelle de greffe hépatique en super-urgence.",
    "clinicalPearl": "Hépatite fulminante (Facteur V < 20% + Encéphalopathie) = Alerte transplantation hépatique en super-urgence !"
  },
  {
    "id": "cas-hep-aig-05",
    "courseId": "crs-gastro-hepatites-aigues",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un infirmier de 30 ans présente un ictère 2 mois après une piqûre accidentelle avec une aiguille souillée de sang. La sérologie montre : Ag HBs positif, Ac anti-HBc de type IgM positifs, Ac anti-HBc totaux positifs, Ac anti-HBs négatifs, Ag HBe positif. Le TP est à 75%. Quel est le diagnostic et quelle est l'évolution la plus probable chez ce patient adulte immunocompétent ?",
    "options": [
      "Hépatite B chronique réactivée, évolution vers la cirrhose dans 90% des cas",
      "Hépatite aiguë virale B typique, avec guérison spontanée et élimination virale dans plus de 90 à 95% des cas",
      "Infection par le VHC",
      "Co-infection Delta chronique obligatoire",
      "Guérison impossible sans traitement antirétroviral"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La présence conjointe de l'Ag HBs et des IgM anti-HBc affirme l'hépatite aiguë B. Chez l'adulte jeune immunocompétent, la guérison spontanée survient dans plus de 90-95% des cas avec séroconversion HBs (apparition d'Ac anti-HBs).",
    "clinicalPearl": "Hépatite B aiguë typique (Ag HBs + IgM anti-HBc) : guérison spontanée dans plus de 90% des cas chez l'adulte."
  }
];

export const HEPATITES_AIGUES_RESOURCES: CourseResource[] = [
  {
    "id": "res-hep-aig-summary",
    "courseId": "crs-gastro-hepatites-aigues",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Hépatites Aiguës",
    "contentMarkdown": "### 🎯 Points Clés : Hépatites Aiguës\n- **Biologie cardinale** : Cytolyse massive (ALAT > ASAT > 10-50N).\n- **Gravité** : Taux de prothrombine (TP) et Facteur V :\n  - TP < 50% = Hépatite grave.\n  - TP < 50% + Encéphalopathie (astérixis) = Hépatite fulminante (greffe d'urgence).\n- **Étiologies principales** :\n  - *VHA* : féco-orale, jamais de chronicité, IgM anti-VHA.\n  - *VHE* : porc/eau, fulminant chez la femme enceinte (20%).\n  - *VHB* : parentérale/sexuelle, Ag HBs + IgM anti-HBc, chronicité < 5-10% adulte.\n  - *Paracétamol* : 1ère cause toxique, antidote = N-acétylcystéine IV précoce.",
    "author": "Collège National des Enseignants d’Hépatologie"
  },
  {
    "id": "res-hep-aig-tips",
    "courseId": "crs-gastro-hepatites-aigues",
    "type": "Astuce",
    "title": "Critères de Gravité & Conduite à Tenir",
    "contentMarkdown": "### 💡 Règle absolue devant toute cytolyse aiguë :\n1. Doser le TP immédiatement.\n2. Rechercher l'astérixis / confusion.\n3. Si TP < 50% -> hospitalisation en soins continus/réanimation.\n4. Si encéphalopathie -> appel du centre de transplantation hépatique sans attendre.",
    "author": "Faculté de Médecine"
  }
];
