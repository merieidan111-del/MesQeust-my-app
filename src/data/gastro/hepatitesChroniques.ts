import { Question, CourseResource } from '../../types/medical';

export const HEPATITES_CHRONIQUES_QUESTIONS: Question[] = [
  {
    "id": "q-hep-chr-01",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Par quelle durée minimale de persistance des anomalies biologiques hépatiques (cytolyse ou marqueurs viraux) définit-on une hépatite chronique ?",
    "options": [
      "1 mois",
      "3 mois",
      "6 mois",
      "2 ans",
      "5 ans"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'hépatite chronique est définie par la persistance d'une nécrose hépatocellulaire, d'une cytolyse ou de marqueurs de réplication virale (Ag HBs, ARN VHC) au-delà de 6 mois.",
    "clinicalPearl": "Définition hépatite chronique = Persistance des anomalies hépatiques ou virologiques > 6 mois."
  },
  {
    "id": "q-hep-chr-02",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel score histologique international (score METAVIR) évalue l'activité nécrotico-inflammatoire (A) et la fibrose hépatique (F) dans les hépatites chroniques virales B et C ?",
    "options": [
      "Score de Child-Pugh",
      "Score METAVIR (Activité A0 à A3, Fibrose F0 à F4)",
      "Score de Ranson",
      "Score de Glasgow",
      "Score de Rockall"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le score METAVIR cote l'activité nécrotico-inflammatoire de A0 (nulle) à A3 (sévère) et la fibrose de F0 (pas de fibrose) à F4 (cirrhose constituée : F1 portale, F2 septale modérée, F3 septale extensive).",
    "clinicalPearl": "Score METAVIR : F0 = pas de fibrose, F1 = portale, F2 = septale modérée, F3 = septale sévère, F4 = cirrhose."
  },
  {
    "id": "q-hep-chr-03",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'histoire naturelle de l'hépatite chronique B, quel marqueur sérologique signe la perte de l'Ag HBe et le passage vers un profil plus quiescent (séroconversion HBe) ?",
    "options": [
      "L'apparition de l'anticorps anti-HBe",
      "L'apparition des IgM anti-HBc",
      "La disparition des IgG anti-HBs",
      "L'apparition de l'Ag Delta",
      "L'augmentation de l'ADN viral"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La séroconversion HBe se traduit par la disparition de l'Ag HBe et l'apparition de l'Ac anti-HBe, s'accompagnant habituellement d'une baisse marquée de la charge virale ADN VHB et de la normalisation des transaminases.",
    "clinicalPearl": "Séroconversion HBe = Disparition Ag HBe + Apparition Ac anti-HBe (baisse charge virale ADN VHB)."
  },
  {
    "id": "q-hep-chr-04",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle variante mutée fréquente du virus de l'hépatite B (mutant pré-C ou promoteur de base du core) continue à se répliquer activement tout en restant sélectivement négative pour l'antigène HBe ?",
    "options": [
      "Le mutant d'échappement à l'Ag HBs",
      "Le mutant pré-core (VHB Ag HBe négatif avec charge virale ADN VHB élevée et hépatite active)",
      "Le variant Delta sauvage",
      "Le sous-type génotypique A",
      "Le virus mutant X"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le mutant pré-core ne peut plus synthétiser l'Ag HBe en raison d'un codon stop prématuré (mutation G1896A), mais continue une réplication virale virulente responsable d'hépatite chronique active Ag HBe négatif.",
    "clinicalPearl": "Hépatite chronique B Ag HBe négatif (mutant pré-C) : Ag HBe négatif, Ac anti-HBe +, mais ADN VHB élevé et fibrose évolutive."
  },
  {
    "id": "q-hep-chr-05",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelles classes de médicaments antiviraux sont recommandées en première ligne dans le traitement au long cours de l'hépatite chronique B active en raison de leur haute barrière génétique à la résistance ?",
    "options": [
      "Lamivudine et Adéfovir",
      "Analogues nucléosidiques/nucléotidiques de 2ème génération : Entécavir (ETV), Ténofovir disoproxil (TDF) ou Ténofovir alafénamide (TAF)",
      "Interféron standard injectable seul",
      "Sofosbuvir et Ribavirine",
      "Zidovudine et Lamivudine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'Entécavir et le Ténofovir (TDF ou TAF) sont les traitements de choix du VHB : ils suppriment puissamment la réplication de l'ADN viral avec un taux de résistance quasi nul à long terme.",
    "clinicalPearl": "Traitement VHB de 1ère intention : Entécavir ou Ténofovir (TDF / TAF) au long cours."
  },
  {
    "id": "q-hep-chr-06",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est l'objectif thérapeutique majeur du traitement de l'hépatite chronique C par les antiviraux d'action directe (AAD) pan-génotypiques de nouvelle génération ?",
    "options": [
      "Une simple diminution de la charge virale d'un facteur 10",
      "La Réponse Virologique Soutenue (RVS), définie par une charge virale ARN VHC indétectable 12 semaines après la fin du traitement, équivalente à une guérison virologique définitive (> 95-98% des cas)",
      "L'élimination définitive des anticorps anti-VHC",
      "La suppression de la consommation d'alcool",
      "Une biopsie hépatique normale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La RVS12 (ARN VHC indétectable 12 semaines post-traitement) équivaut à la guérison virologique définitive de l'infection C dans plus de 95-98% des cas grâce aux AAD pan-génotypiques oraux pendant 8 à 12 semaines.",
    "clinicalPearl": "Hépatite C : RVS12 (ARN indétectable à 12 semaines post-AAD) = Guérison définitive de l'infection VHC."
  },
  {
    "id": "q-hep-chr-07",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Parmi les combinaisons d'antiviraux d'action directe (AAD) pan-génotypiques hautement efficaces par voie orale dans l'hépatite C, laquelle est couramment prescrite en cure courte de 8 à 12 semaines sans interféron ?",
    "options": [
      "Sofosbuvir / Velpatasvir OU Glécaprévir / Pibrentasvir",
      "Trithérapie antirétrovirale VIH",
      "Ribavirine en monothérapie",
      "Interféron pégylé seul",
      "Lamivudine et Ganciclovir"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les combinaisons pan-génotypiques orales sans interféron (Sofosbuvir/Velpatasvir pendant 12 semaines, ou Glécaprévir/Pibrentasvir pendant 8 semaines) guérissent la quasi-totalité des hépatites C avec une excellente tolérance.",
    "clinicalPearl": "Hépatite C : Sofosbuvir/Velpatasvir (12 sem) ou Glécaprévir/Pibrentasvir (8 sem) = guérison > 95% sans interféron."
  },
  {
    "id": "q-hep-chr-08",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Après guérison virologique d'une hépatite chronique C par AAD chez un patient qui avait déjà développé une cirrhose (stade METAVIR F4), quelle surveillance au long cours doit être maintenue à vie ?",
    "options": [
      "Aucune surveillance n'est nécessaire car le virus est guéri",
      "Surveillance échographique hépatique semestrielle à vie en raison de la persistance d'un risque résiduel de carcinome hépatocellulaire (CHC)",
      "Scanner cérébral annuel",
      "Biopsies hépatiques itératives annuelles",
      "Coloscopie semestrielle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Même après éradication virologique définitive du VHC, le foie cirrhotique reste un terrain à risque oncogène : le dépistage du CHC par échographie tous les 6 mois doit impérativement être poursuivi à vie.",
    "clinicalPearl": "Cirrhose F4 post-VHC guérie : surveillance échographique semestrielle du CHC obligatoire À VIE."
  },
  {
    "id": "q-hep-chr-09",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle maladie auto-immune du foie à prédominance féminine se caractérise histologiquement par une hépatite d'interface avec infiltrat lympho-plasmocytaire et biologiquement par une hypergammaglobulinémie polyclonale à IgG ?",
    "options": [
      "L'hépatite auto-immune (HAI)",
      "La cirrhose biliaire primitive",
      "La cholangite sclérosante primitive",
      "L'hémochromatose",
      "La glycogénose"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hépatite auto-immune associe cytolyse chronique, élévation sélective des IgG polyclonales, présence d'auto-anticorps spécifiques et hépatite d'interface riche en plasmocytes à la biopsie hépatique.",
    "clinicalPearl": "Hépatite auto-immune = Femme + Hypergammaglobulinémie polyclonale IgG + Hépatite d'interface plasmocytaire."
  },
  {
    "id": "q-hep-chr-10",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quels auto-anticorps sériques sont caractéristiques de l'hépatite auto-immune de type 1 (la plus fréquente chez l'adulte) ?",
    "options": [
      "Anticorps anti-mitochondries de type M2",
      "Anticorps anti-nucléaires (AAN) et anticorps anti-muscle lisse (AML) de spécificité anti-actine",
      "Anticorps anti-LKM1 (anti-microsomes de foie et rein)",
      "Anticorps anti-transglutaminase",
      "Anticorps anti-pancréas"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'HAI de type 1 se caractérise par des anticorps anti-nucléaires (AAN) et/ou anti-muscle lisse (AML de spécificité anti-actine > 1/80). L'HAI de type 2 (plus rare, pédiatrique) possède des anti-LKM1.",
    "clinicalPearl": "Hépatite auto-immune type 1 : Ac anti-nucléaires (AAN) et Ac anti-muscle lisse (AML anti-actine)."
  },
  {
    "id": "q-hep-chr-11",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical de première intention permet d'obtenir la rémission dans l'hépatite auto-immune ?",
    "options": [
      "Antiviraux oraux",
      "Corticothérapie générale (Prednisone ou Budésonide) associée en relais ou d'emblée à un immunosuppresseur d'épargne cortisonique (Azathioprine)",
      "Pénicillamine",
      "Saignées itératives",
      "Acide ursodésoxycholique seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement de référence de l'HAI est l'association Prednisone + Azathioprine (Imurel), permettant une rémission clinique, biologique et histologique dans plus de 80% des cas.",
    "clinicalPearl": "Hépatite auto-immune = Corticoïdes (Prednisone) + Immunosuppresseur (Azathioprine / Imurel)."
  },
  {
    "id": "q-hep-chr-12",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle pathologie hépatique cholestatique auto-immune chronique touche préférentiellement la femme de 40 à 60 ans et se caractérise par la destruction des petits canaux biliaires interlobulaires et la présence d'anticorps anti-mitochondries de type M2 ?",
    "options": [
      "La cholangite biliaire primitive (CBP, anciennement cirrhose biliaire primitive)",
      "La cholangite sclérosante primitive",
      "L'adénome hépatique",
      "Le kyste biliaire simple",
      "L'hépatite E"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cholangite biliaire primitive (CBP) associe un prurit et une asthénie, une cholestase biologique (GGT, PAL élevées) et la présence d'Ac anti-mitochondries M2 (> 1/40) dans plus de 95% des cas.",
    "clinicalPearl": "Cholangite Biliaire Primitive (CBP) = Femme d'âge mûr + Cholestase + Ac anti-mitochondries M2 positifs (95%)."
  },
  {
    "id": "q-hep-chr-13",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical au long cours est le traitement de référence de la cholangite biliaire primitive (CBP), ralentissant significativement la progression vers la cirrhose ?",
    "options": [
      "L'acide ursodésoxycholique (AUDC) à dose de 13 à 15 mg/kg/jour",
      "La ciclosporine",
      "Les corticoïdes à forte dose",
      "L'Entécavir",
      "La colestyramine en monothérapie curative"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'acide ursodésoxycholique (AUDC, Ursolvan/Delursan) à 13-15 mg/kg/j est le traitement de référence à vie de la CBP, améliorant la survie sans transplantation hépatique.",
    "clinicalPearl": "CBP = Acide Ursodésoxycholique (AUDC) 13-15 mg/kg/j à vie en 1ère intention."
  },
  {
    "id": "q-hep-chr-14",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle maladie cholestatique inflammatoire chronique oblitérante des voies biliaires intra- et extra-hépatiques est très fréquemment associée à une Maladie Inflammatoire Chronique de l'Intestin (MICI), en particulier la Rectocolite Hémorragique (RCH) ?",
    "options": [
      "La cholangite sclérosante primitive (CSP)",
      "La maladie coeliaque",
      "Le syndrome de Gilbert",
      "L'hépatite alcoolique",
      "L'amylose hépatique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La CSP est associée dans 70 à 80% des cas à une RCH (ou maladie de Crohn colique). Elle expose à un risque majeur de sténoses biliaires fibreuses et de cholangiocarcinome.",
    "clinicalPearl": "Cholangite Sclérosante Primitive (CSP) = Associée à la RCH dans 70-80% des cas + Risque de cholangiocarcinome."
  },
  {
    "id": "q-hep-chr-15",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen d'imagerie non invasif de référence montre un aspect caractéristique en « chapelet » (alternance de sténoses et de dilatations des voies biliaires) affirmant le diagnostic de Cholangite Sclérosante Primitive (CSP) ?",
    "options": [
      "La bili-IRM (cholangio-IRM)",
      "L'échographie Doppler simple",
      "L'ASP",
      "Le transit du grêle",
      "Le scanner cérébral"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La bili-IRM est l'examen diagnostique de choix de la CSP : elle met en évidence les sténoses étagées et les dilatations irrégulières des voies biliaires intra- et extra-hépatiques donnant un aspect en chapelet.",
    "clinicalPearl": "CSP : Diagnostic de certitude à la Bili-IRM = aspect des voies biliaires en chapelet (sténoses/dilatations étagées)."
  },
  {
    "id": "q-hep-chr-16",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle maladie génétique autosomique récessive fréquente de surcharge en fer est liée le plus souvent à la mutation homozygote C282Y du gène HFE ?",
    "options": [
      "La maladie de Wilson",
      "L'hémochromatose génétique de type 1 (liée au gène HFE)",
      "Le déficit en alpha-1-antitrypsine",
      "La porphyrie hépatique",
      "Le favisme"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hémochromatose génétique classique est due à la mutation homozygote C282Y du gène HFE (chromosome 6), induisant un effondrement de l'hepcidine et une hyperabsorption digestive chronique de fer.",
    "clinicalPearl": "Hémochromatose type 1 = Mutation C282Y à l'état homozygote du gène HFE (baisse d'hepcidine -> surcharge en fer)."
  },
  {
    "id": "q-hep-chr-17",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel paramètre biologique sanguin précoce et le plus sensible permet de suspecter une hémochromatose génétique avant même l'élévation massive de la ferritinémie ?",
    "options": [
      "Le coefficient de saturation de la transferrine (CST > 45%)",
      "La sidérémie isolée",
      "Le taux d'hémoglobine",
      "Le nombre de réticulocytes",
      "La bilirubinémie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le coefficient de saturation de la transferrine (CST = Fer sérique / Capacité totale de fixation) est l'anomalie biologique la plus précoce. Un CST > 45% (souvent > 60-80%) fait poser l'indication du test génétique HFE C282Y.",
    "clinicalPearl": "Dépistage hémochromatose : Coefficient de saturation de la transferrine (CST) > 45% = test le plus précoce et sensible."
  },
  {
    "id": "q-hep-chr-18",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le traitement de référence simple, universel et remarquablement efficace de l'hémochromatose génétique non compliquée de cirrhose ?",
    "options": [
      "Les saignées thérapeutiques itératives (phlébotomies de 400 à 500 mL) régulières jusqu'à obtention d'une ferritinémie cible < 50 µg/L",
      "Le chélateur de fer oral en 1ère ligne systématique",
      "Un régime sans viande strict exclusif",
      "La splénectomie",
      "Les transfusions sanguines"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les saignées déplétives hebdomadaires puis d'entretien sont le traitement de choix : elles vident les réserves parenchymateuses de fer avec pour cible une ferritinémie < 50 µg/L et un CST < 50%.",
    "clinicalPearl": "Hémochromatose = Saignées itératives (phlébotomies) hebdomadaires puis d'entretien (objectif Ferritine < 50 µg/L)."
  },
  {
    "id": "q-hep-chr-19",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle pathologie métabolique hépatique, devenue la première cause d'hépatopathie chronique dans les pays industrialisés, est intimement liée au syndrome métabolique, à l'obésité et au diabète de type 2 ?",
    "options": [
      "La maladie stéatosique hépatique associée à un dysfonctionnement métabolique (MASLD / stéatohépatite non alcoolique MASH)",
      "L'hépatite E",
      "La glycogénose",
      "L'hépatite alcoolique pure",
      "Le syndrome de Reye"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La MASLD (Metabolic dysfunction-associated steatotic liver disease, anciennement NAFLD) et sa forme inflammatoire MASH (anciennement NASH) sont liées à l'insulinorésistance, au surpoids et au syndrome métabolique.",
    "clinicalPearl": "MASLD / MASH (NASH) = Stéatose métabolique + Insulinorésistance (diabète, surpoids) -> 1ère cause de maladie hépatique chronique."
  },
  {
    "id": "q-hep-chr-20",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle mesure thérapeutique non médicamenteuse est la pierre angulaire démontrée pour régresser la stéatose et l'inflammation dans la MASH (NASH) ?",
    "options": [
      "Une perte de poids progressive de 7 à 10% du poids corporel obtenue par modification du mode de vie (alimentation méditerranéenne hypocalorique et activité physique régulière)",
      "La chirurgie bariatrique chez tout patient d'emblée",
      "Les corticoïdes",
      "La vitamine B12 à forte dose",
      "Le repos au lit strict"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Une perte de poids >= 7-10% entraîne une régression histologique prouvée de l'inflammation et de la fibrose dans la MASH. Elle repose sur le régime méditerranéen et l'exercice physique régulier.",
    "clinicalPearl": "Traitement de base de la MASH : Perte de poids de 7 à 10% par régime méditerranéen + exercice physique."
  },
  {
    "id": "q-hep-chr-21",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'évaluation non invasive de la fibrose hépatique au cours des hépatopathies chroniques, quel biomarqueur sanguin combinant plaquettes, ALAT, ASAT et âge est couramment utilisé en dépistage en médecine générale ?",
    "options": [
      "Le score FIB-4",
      "Le score de Child-Pugh",
      "Le score de Meld",
      "Le score de Balthazar",
      "Le score d'APACHE"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le score FIB-4 = [Âge (années) x ASAT (UI/L)] / [Plaquettes (10⁹/L) x racine carrée(ALAT)]. Un score FIB-4 < 1,3 élimine une fibrose avancée avec une excellente valeur prédictive négative.",
    "clinicalPearl": "Score FIB-4 (Âge, ASAT, ALAT, Plaquettes) : < 1,3 = élimine une fibrose avancée."
  },
  {
    "id": "q-hep-chr-22",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle manifestation extra-hépatique immunologique est classiquement associée à l'infection chronique par le virus de l'hépatite C (VHC) par prolifération lymphocytaire B ?",
    "options": [
      "La cryoglobulinémie mixte de type II ou III (avec purpura vasculaire infiltré, arthralgies et glomérulonéphrite)",
      "Le rhumatisme articulaire aigu",
      "La polyarthrite rhumatoïde séropositive",
      "Le syndrome de Goodpasture",
      "La colite ulcéreuse"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le VHC est la 1ère cause de cryoglobulinémie mixte : elle se manifeste par un purpura vasculaire des membres inférieurs, une neuropathie périphérique sensitivomotrice et une atteinte rénale glomérulaire.",
    "clinicalPearl": "Infection chronique VHC = Cryoglobulinémie mixte (purpura vasculaire déclive + arthralgies + glomérulonéphrite)."
  },
  {
    "id": "q-hep-chr-23",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle mutation génétique responsable d'un emphysème pan-lobulaire pulmonaire précoce chez le non-fumeur peut également causer une hépatite chronique et une cirrhose avec inclusions hépatocytaires PAS-positives diastase-résistantes ?",
    "options": [
      "Le déficit en alpha-1-antitrypsine (phénotype PiZZ)",
      "La mucoviscidose CFTR",
      "L'anémie falciforme",
      "La porphyrie cutanée tardive",
      "La maladie de Gaucher"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le déficit en alpha-1-antitrypsine (mutation PiZZ) entraîne une accumulation de la protéine anormale polymérisée dans le réticulum endoplasmique des hépatocytes (globules PAS-positifs résistants à la diastase).",
    "clinicalPearl": "Déficit en alpha-1-antitrypsine (PiZZ) : Emphysème pulmonaire + Cirrhose hépatique (globules PAS+ diastase-résistants)."
  },
  {
    "id": "q-hep-chr-24",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Chez un patient porteur chronique inactif de l'antigène HBs (anciennement 'porteur sain'), quel traitement préventif doit impérativement être prescrit avant l'initiation d'une chimiothérapie immunosuppressive ou d'un traitement par anticorps anti-CD20 (Rituximab) ?",
    "options": [
      "Abstention thérapeutique",
      "Traitement préemptif antiviral par Ténofovir ou Entécavir pour prévenir une réactivation fulminante du VHB",
      "Vaccination anti-VHA",
      "Corticothérapie forte",
      "Saignées préventives"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Toute immunosuppression lourde (surtout anti-CD20 comme le rituximab) entraîne un risque majeur de réactivation létale du VHB. Une prophylaxie par analogue nucléosidique (Ténofovir/Entécavir) est obligatoire dès le début et jusqu'à 12-18 mois après la fin du traitement.",
    "clinicalPearl": "Porteur Ag HBs sous Rituximab / chimiothérapie = Prévention systématique par Ténofovir/Entécavir (risque de réactivation fulminante)."
  },
  {
    "id": "q-hep-chr-25",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication néoplasique terminale est la conséquence la plus redoutée des hépatites chroniques virales, métaboliques ou alcooliques évoluées au stade de cirrhose ?",
    "options": [
      "Le carcinome hépatocellulaire (CHC)",
      "Le lymphome de Hodgkin",
      "Le cancer médullaire de la thyroïde",
      "Le thymome invasif",
      "Le néphroblastome"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le CHC complique la cirrhose à un taux annuel de 2 à 5%, justifiant la surveillance semestrielle systématique par échographie abdominale chez tous les patients cirrhotiques.",
    "clinicalPearl": "Hépatite chronique cirrhotique = Surveillance semestrielle échographique du Carcinome Hépatocellulaire (CHC)."
  },
  {
    "id": "cas-hep-chr-01",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une femme de 42 ans, sans antécédent particulier, consulte pour une asthénie d'aggravation progressive depuis 6 mois associée à des arthralgies bilatérales des mains sans arthrite franche. Le bilan biologique montre : ALAT = 180 UI/L (4N), ASAT = 150 UI/L, Bilirubine totale normale, Gamma-GT = 1,5N. L'électrophorèse des protéines sériques révèle un pic polyclonal dans la zone des gamma-globulines à 28 g/L constitué d'IgG. Les sérologies virales B et C sont négatives. Quel bilan immunologique devez-vous demander en priorité ?",
    "options": [
      "Dosage des IgE spécifiques",
      "Recherche d'anticorps anti-nucléaires (AAN) et d'anticorps anti-muscle lisse (AML de spécificité anti-actine)",
      "Recherche d'anticorps anti-CCP uniquement",
      "Dosage des anticorps anti-HBs",
      "Sérologie de Wright"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Femme jeune + cytolyse chronique + hypergammaglobulinémie polyclonale à IgG = forte suspicion d'hépatite auto-immune de type 1. La confirmation repose sur la recherche des AAN et des AML (anti-actine).",
    "clinicalPearl": "Cytolyse chronique + IgG polyclonales élevées = Hépatite auto-immune type 1 (AAN et AML anti-actine)."
  },
  {
    "id": "cas-hep-chr-02",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Les anticorps anti-nucléaires sont positifs au 1/640 (aspect homogène) et les anticorps anti-muscle lisse sont positifs au 1/320 de spécificité anti-actine. La ponction biopsie hépatique confirme une hépatite d'interface modérée avec infiltrat lympho-plasmocytaire et fibrose débutante (F1). Quel traitement de première intention instaurez-vous ?",
    "options": [
      "Interféron pégylé pendant 1 an",
      "Corticothérapie orale par Prednisone (0,5 à 1 mg/kg/j) associée secondairement à l'Azathioprine (Imurel) comme épargneur de corticoïdes",
      "Acide ursodésoxycholique seul",
      "Surveillance simple sans médicament",
      "Antibiotiques au long cours"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hépatite auto-immune symptomatique active répond remarquablement à l'immunosuppression : Prednisone d'attaque relayée par l'association Prednisone + Azathioprine pour maintenir la rémission complète.",
    "clinicalPearl": "Hépatite auto-immune active = Corticoïdes (Prednisone) + Azathioprine (Imurel) au long cours."
  },
  {
    "id": "cas-hep-chr-03",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 45 ans, asymptomatique, consulte avec un bilan hépatique de médecine du travail montrant des transaminases normales mais un coefficient de saturation de la transferrine (CST) à 72% et une ferritinémie à 850 µg/L. L'écho abdominale est normale. Quel test génétique sanguin de première intention devez-vous prescrire pour confirmer la cause la plus fréquente ?",
    "options": [
      "Séquençage du gène CFTR",
      "Recherche de la mutation C282Y du gène HFE (à la recherche d'une homozygotie C282Y)",
      "Recherche de la mutation JAK2 V617F",
      "Recherche de la mutation du récepteur des LDL",
      "Caryotype constitutionnel"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "CST > 45% et hyperferritinémie chez l'homme jeune = suspicion d'hémochromatose génétique. Le diagnostic est confirmé par la recherche de la mutation homozygote C282Y du gène HFE.",
    "clinicalPearl": "CST > 45% + Ferritine élevée = Recherche de la mutation C282Y du gène HFE à l'état homozygote."
  },
  {
    "id": "cas-hep-chr-04",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Le patient est confirmé homozygote C282Y pour le gène HFE. Le bilan d'évaluation ne montre aucun signe d'insuffisance cardiaque, pas de diabète, pas d'arthropathie et l'élastométrie hépatique (FibroScan) est à 5,2 kPa (fibrose absente F0). Quelle est la prise en charge thérapeutique recommandée ?",
    "options": [
      "Transplantation hépatique préventive",
      "Saignées (phlébotomies de 400 à 500 mL) hebdomadaires jusqu'à obtention d'une ferritinémie cible < 50 µg/L, puis saignées d'entretien espacées",
      "Chélateur oral de fer quotidien à vie",
      "Régime végétarien strict sans aucun suivi",
      "Abstention thérapeutique totale tant qu'il n'y a pas de cirrhose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement repose sur les saignées déplétives hebdomadaires (objectif : ferritinémie < 50 µg/L et CST < 50%), puis des saignées d'entretien tous les 2 à 4 mois. Cela prévient totalement la survenue d'une cirrhose.",
    "clinicalPearl": "Hémochromatose : Saignées déplétives hebdomadaires jusqu'à ferritinémie < 50 µg/L, puis entretien à vie."
  },
  {
    "id": "cas-hep-chr-05",
    "courseId": "crs-gastro-hepatites-chroniques",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une femme de 50 ans consulte pour un prurit diffus insomniant prédominant aux paumes et aux plantes, sans lésion élémentaire cutanée en dehors de lésions de grattage. La biologie montre : Bilirubine totale normale, PAL = 3,5N, GGT = 5N, ALAT = 1,8N. Les anticorps anti-mitochondries de type M2 sont positifs à un titre de 1/320. Quel est le diagnostic certain et quel traitement de fond devez-vous prescrire ?",
    "options": [
      "Hépatite virale C chronique ; Sofosbuvir/Velpatasvir",
      "Cholangite biliaire primitive (CBP) ; Acide ursodésoxycholique (AUDC) à la dose de 13 à 15 mg/kg/jour",
      "Gale commune ; Ivermectine",
      "Cholangiocarcinome hilaire ; Chirurgie d'exérèse",
      "Lithiase de la VBP ; Sphinctérotomie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association prurit + cholestase anictérique + Ac anti-mitochondries M2 positifs chez une femme de 50 ans affirme la Cholangite Biliaire Primitive (CBP). Le traitement est l'acide ursodésoxycholique (13-15 mg/kg/j).",
    "clinicalPearl": "Prurit + Cholestase + Ac anti-mitochondries M2 positifs = Cholangite Biliaire Primitive -> Acide Ursodésoxycholique."
  }
];

export const HEPATITES_CHRONIQUES_RESOURCES: CourseResource[] = [
  {
    "id": "res-hep-chr-summary",
    "courseId": "crs-gastro-hepatites-chroniques",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Hépatites Chroniques",
    "contentMarkdown": "### 🎯 Points Clés : Hépatites Chroniques\n- **Définition** : Atteinte nécrotico-inflammatoire hépatique persistant > 6 mois.\n- **Score METAVIR** : Activité A0-A3, Fibrose F0-F4 (F4 = cirrhose).\n- **VHB** : Entécavir ou Ténofovir au long cours si réplication active.\n- **VHC** : Antiviraux d'action directe (Sofosbuvir/Velpatasvir 12 sem) -> guérison virologique > 95%.\n- **Hépatite auto-immune (HAI)** : Femme, IgG polyclonales, AAN + AML (anti-actine), traitement : Prednisone + Azathioprine.\n- **Cholangite biliaire primitive (CBP)** : Femme, prurit, cholestase, Ac anti-mitochondries M2 (95%), traitement : AUDC (13-15 mg/kg/j).\n- **Hémochromatose génétique** : CST > 45%, mutation HFE C282Y homozygote, traitement : saignées (cible Ferritine < 50 µg/L).",
    "author": "Collège National des Enseignants d’Hépatologie"
  },
  {
    "id": "res-hep-chr-tips",
    "courseId": "crs-gastro-hepatites-chroniques",
    "type": "Astuce",
    "title": "Tableau Récapitulatif : Auto-anticorps Hépatiques",
    "contentMarkdown": "### 💡 Auto-anticorps clés en hépatologie :\n- **HAI type 1** : AAN (nucléaires) + AML (muscle lisse / anti-actine).\n- **HAI type 2** : Anti-LKM1 (enfant/adolescent).\n- **CBP** : Anti-mitochondries M2 (> 95%).\n- **CSP** : p-ANCA (associé à la RCH).",
    "author": "Faculté de Médecine"
  }
];
