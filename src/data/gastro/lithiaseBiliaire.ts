import { Question, CourseResource } from '../../types/medical';

export const LITHIASE_BILIAIRE_QUESTIONS: Question[] = [
  {
    "id": "q-lith-01",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la nature chimique prépondérante de plus de 80% des calculs biliaires dans les pays occidentaux et au Maghreb ?",
    "options": [
      "Calculs pigmentaires noirs",
      "Calculs cholestéroliques (purs ou mixtes)",
      "Calculs de bilirubinate de calcium purs",
      "Calculs d'acide urique",
      "Calculs de cystine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les calculs de cholestérol (sursaturation de la bile en cholestérol par rapport aux phospholipides et sels biliaires) représentent plus de 80% des lithiases biliaires.",
    "clinicalPearl": "80% des calculs biliaires = calculs cholestéroliques (favorisés par : femme, multiparité, surpoids, âge > 40 ans - règle des 4F)."
  },
  {
    "id": "q-lith-02",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la conduite à tenir recommandée devant la découverte fortuite d'une lithiase vésiculaire totalement asymptomatique lors d'une échographie de routine ?",
    "options": [
      "Cholécystectomie prophylactique systématique en urgence",
      "Abstention thérapeutique et surveillance simple (pas d'indication chirurgicale en règle générale)",
      "Traitement dissolvant par acide ursodésoxycholique à vie",
      "Régime sans graisse strict à vie",
      "Ponction vésiculaire percutanée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La lithiase vésiculaire asymptomatique ne doit pas être opérée (seuls 10-20% développeront des symptômes au cours de leur vie). L'abstention thérapeutique est la règle.",
    "clinicalPearl": "Lithiase vésiculaire asymptomatique = Abstention thérapeutique (pas de chirurgie prophylactique)."
  },
  {
    "id": "q-lith-03",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la colique hépatique simple (mise en tension brutale des voies biliaires par enclavement transitoire du collet ou du cystique), comment se caractérise la douleur typique ?",
    "options": [
      "Douleur continue de plus de 24 heures avec contracture",
      "Douleur aiguë paroxystique de l'hypochondre droit ou épigastrique, irradiant vers l'épaule droite et la région sous-scapulaire droite, durant moins de 4 à 6 heures, sans fièvre ni ictère",
      "Brûlure rétrosternale nocturne",
      "Douleur de la fosse iliaque gauche calmée par les gaz",
      "Douleur lombaire bilatérale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La crise de colique hépatique dure typiquement moins de 6 heures, siège à l'hypochondre droit ou épigastre, irradie vers l'omoplate droite, et ne s'accompagne NI de fièvre NI d'ictère.",
    "clinicalPearl": "Colique hépatique : douleur hypochondre droit < 6h, irradiation scapulaire droite, SANS fièvre, SANS ictère."
  },
  {
    "id": "q-lith-04",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel signe physique à l'examen clinique de l'hypochondre droit correspond à l'inhibition douloureuse de l'inspiration profonde lors de la palpation sous-costale droite ?",
    "options": [
      "Le signe de Murphy",
      "Le signe de Blumberg",
      "Le signe de Rovsing",
      "Le signe de Cullen",
      "Le signe de Carnett"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le signe de Murphy (douleur bloquant l'inspiration forcée lors de la dépression de l'hypochondre droit sous le rebord costal) traduit l'inflammation de la vésicule biliaire.",
    "clinicalPearl": "Signe de Murphy = blocage inspiratoire lors de la palpation sous-costale droite = pathologie vésiculaire."
  },
  {
    "id": "q-lith-05",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle triade clinique et biologique caractérise la CHOLÉCYSTITE AIGUË lithiasique ?",
    "options": [
      "Douleur hypochondre droit prolongée (> 6h) + Fièvre (> 38,5°C) avec syndrome inflammatoire biologique (hyperleucocytose) + Défense de l'hypochondre droit (sans ictère)",
      "Ictère franc + apyrexie + ascite",
      "Hématémèse + diarrhée + choc",
      "Douleur lombaire + hématurie + anurie",
      "Dysphagie + voix bitonale + toux"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cholécystite aiguë associe une douleur biliaire prolongée de plus de 6 heures, une fièvre avec syndrome inflammatoire (PNN et CRP élevés), et une défense localisée de l'hypochondre droit sans ictère franc.",
    "clinicalPearl": "Cholécystite aiguë = Douleur de l'hypochondre droit > 6h + Fièvre + Défense (signe de Murphy franc) sans ictère."
  },
  {
    "id": "q-lith-06",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quels sont les signes échographiques cardinaux affirmant le diagnostic de cholécystite aiguë lithiasique à l'échographie abdominale ?",
    "options": [
      "Absence de calcul et paroi fine millimétrique",
      "Présence de calcul(s) vésiculaire(s) enclavé(s) dans le collet, épaississement de la paroi vésiculaire > 4 mm avec dédoublement en feuillets (aspect en double contour) et signe de Murphy échographique",
      "Dilatation monstrueuse de la rate",
      "Aéroportie portale isolée",
      "Vésicule collabée vide"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'échographie montre la lithiase enclavée, l'épaississement de la paroi vésiculaire > 4 mm (aspect feuilleté/dédoublé), un épanchement péri-vésiculaire et le déclenchement de la douleur élective sous la sonde (Murphy échographique).",
    "clinicalPearl": "Échographie de cholécystite : Calcul enclavé + Paroi vésiculaire > 4 mm en double contour + Murphy échographique."
  },
  {
    "id": "q-lith-07",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le traitement de référence de la cholécystite aiguë lithiasique chez un patient opérable ?",
    "options": [
      "Antibiothérapie seule ambulatoire",
      "Cholécystectomie par cœlioscopie précoce (idéalement dans les 24 à 72 heures suivant l'admission) sous couverture antibiotique",
      "Sphinctérotomie endoscopique isolée",
      "Ponction vésiculaire systématique sous anesthésie locale",
      "Chirurgie programmée à 6 mois"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La cholécystectomie cœlioscopique précoce dans les 72h réduit les complications, la durée d'hospitalisation et le taux de conversion par rapport à une chirurgie différée.",
    "clinicalPearl": "Cholécystite aiguë = Cholécystectomie cœlioscopique précoce (< 72h) sous antibiothérapie adaptée."
  },
  {
    "id": "q-lith-08",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle triade sémiologique chronologique classique (triade de Villard ou de Charcot) affirme le diagnostic d'ANGIOCHOLITE AIGUË lithiasique ?",
    "options": [
      "Douleur de l'hypochondre droit, suivie de Fièvre avec frissons (24-48h), puis d'un Ictère cutanéo-muqueux (en 24-48h)",
      "Ictère, prurit puis asthénie sans douleur",
      "Dyspnée, toux puis hémoptysie",
      "Céphalées, vomissements puis photophobie",
      "Hématémèse, méléna puis pâleur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La triade chronologique de Charcot se déroule en 48h dans l'ordre strict : 1) Douleur biliaire, 2) Fièvre élevée avec frissons solennels (bactériémie), 3) Ictère cutanéo-muqueux franc avec urines foncées et selles décolorées.",
    "clinicalPearl": "Triade de Charcot (angiocholite) : Douleur -> Fièvre avec frissons -> Ictère (D-F-I dans l'ordre chronologique en 24-48h)."
  },
  {
    "id": "q-lith-09",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle pentade de Reynolds caractérise la forme gravissime toxi-infectieuse de l'angiocholite aiguë purulente (urgence vitale absolue) ?",
    "options": [
      "Triade de Charcot + Défaillance hémodynamique (choc septique) et Troubles de la conscience (confusion)",
      "Triade de Charcot + ascite + anurie",
      "Triade de Charcot + hématémèse + diarrhée",
      "Douleur + nausées + constipation + prurit + sueurs",
      "Fièvre + arthralgies + purpura + néphrite + uvéite"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La pentade de Reynolds associe la triade de Charcot (douleur, fièvre, ictère) à un état de choc septique et à des troubles de conscience (confusion/obnubilation), témoignant d'une septicémie biliaire gravissime.",
    "clinicalPearl": "Pentade de Reynolds = Triade de Charcot + Choc septique + Confusion mentale (urgence vitale extrême)."
  },
  {
    "id": "q-lith-10",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel geste interventionnel d'urgence doit être réalisé SANS DÉLAI pour drainer la bile septique sous pression dans l'angiocholite aiguë obstructive ?",
    "options": [
      "Cholécystectomie immédiate par laparotomie",
      "Désobstruction de la voie biliaire principale par sphinctérotomie biliaire endoscopique par CPRE (Cholangio-Pancréatographie Rétrograde Endoscopique) avec extraction du calcul",
      "Drainage thoracique",
      "Lavement évacuateur",
      "Pose d'une sonde nasogastrique simple"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'angiocholite aiguë est une urgence d'évacuation : la CPRE avec sphinctérotomie endoscopique permet l'extraction immédiate du calcul et la levée de l'hyperpression biliaire septique dans les 12-24 heures.",
    "clinicalPearl": "Angiocholite aiguë lithiasique = CPRE avec sphinctérotomie biliaire et extraction du calcul en urgence absolue."
  },
  {
    "id": "q-lith-11",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la colique hépatique ou la lithiase de la voie biliaire principale, quelle anomalie enzymatique hépatique biologique précoce et très sensible précède souvent l'ictère franc ?",
    "options": [
      "Une cytolyse aiguë transitoire (élévation brutale des transaminases ALAT/ASAT > 5 à 10N) suivie d'une élévation de la cholestase (Gamma-GT, Phosphatases alcalines, Bilirubine)",
      "Une chute de l'albumine",
      "Une hyperammoniémie isolée",
      "Une anémie hémolytique",
      "Une hypouricémie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La migration calculeuse dans le cholédoque entraîne un pic précoce et fugace de cytolyse hépatique (ALAT pouvant atteindre 10-20N en quelques heures), relayé rapidement par un profil de cholestase biologique.",
    "clinicalPearl": "Migration lithiasique biliaire : pic précoce fugace des ALAT (> 5-10N) suivi d'une élévation des Gamma-GT, PAL et bilirubine."
  },
  {
    "id": "q-lith-12",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen non invasif d'imagerie par résonance magnétique visualise parfaitement l'arbre biliaire avec une sensibilité > 95% pour détecter une lithiase du cholédoque (choledocolithiase) ?",
    "options": [
      "L'ASP",
      "La cholangio-IRM (bili-IRM)",
      "L'échographie cardiaque",
      "La scintigraphie rénale",
      "La radiographie pulmonaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La bili-IRM (cholangio-IRM) est l'examen non invasif de référence pour explorer la voie biliaire principale et affirmer la présence d'une lithiase enclavée, sans injection de produit de contraste iodé.",
    "clinicalPearl": "Bili-IRM = examen non invasif de référence pour la lithiase de la voie biliaire principale (haute sensibilité)."
  },
  {
    "id": "q-lith-13",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle complication d'un calcul vésiculaire volumineux (> 2-3 cm) s'enclavant dans l'infundibulum comprime de manière extrinsèque la voie biliaire principale, provoquant un ictère obstructif sans calcul cholédocien intraluminal (syndrome de Mirizzi) ?",
    "options": [
      "Le syndrome de Mirizzi",
      "Le syndrome de Budd-Chiari",
      "Le syndrome de Mallory-Weiss",
      "Le syndrome de Cruveilhier-Baumgarten",
      "Le syndrome de Zollinger-Ellison"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le syndrome de Mirizzi résulte de la compression extrinsèque ou de la fistulisation bilio-biliaire du canal hépatique commun par un volumineux calcul bloqué dans le collet vésiculaire ou le canal cystique.",
    "clinicalPearl": "Syndrome de Mirizzi = compression extrinsèque du canal hépatique commun par un calcul du collet vésiculaire."
  },
  {
    "id": "q-lith-14",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication mécanique redoutable d'une fistule bilio-digestive (cholécysto-duodénale) provoque une occlusion mécanique du grêle par enclavement du calcul au niveau de la valvule iléo-caecale de Bauhin ?",
    "options": [
      "La pancréatite aiguë bénigne",
      "L'iléus biliaire",
      "La volvulus du grêle",
      "L'invagination colique",
      "L'hémorragie diverticulaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'iléus biliaire survient lorsqu'un gros calcul vésiculaire (> 2,5 cm) érode la paroi et migre dans le duodénum via une fistule, pour aller s'enclaver dans la partie la plus étroite du grêle (iléon terminal/valvule de Bauhin).",
    "clinicalPearl": "Iléus biliaire = occlusion mécanique du grêle par calcul biliaire volumineux (triade de Rigler au scanner : aérobilie + occlusion grêle + calcul ectopique)."
  },
  {
    "id": "q-lith-15",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la colique hépatique simple sans complication, quelle classe d'antalgiques est particulièrement efficace en première intention pour lever le spasme du sphincter d'Oddi et calmer la douleur ?",
    "options": [
      "La morphine à forte dose en monothérapie",
      "Les anti-inflammatoires non stéroïdiens (ex: Kétoprofène IV) et antispasmodiques (Phloroglucinol)",
      "Les laxatifs stimulants",
      "L'aspirine à haute dose",
      "Les diurétiques de l'anse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les AINS injectables (kétoprofène) inhibent la synthèse de prostaglandines responsables de l'hyperpression vésiculaire et sont remarquablement efficaces dans la crise de colique hépatique non compliquée.",
    "clinicalPearl": "Traitement de la colique hépatique : AINS IV (Kétoprofène) + antispasmodique (Phloroglucinol)."
  },
  {
    "id": "q-lith-16",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle anomalie anatomique ou topographique de la vésicule biliaire observée au scanner ou à la radiographie est une condition précancéreuse justifiant une cholécystectomie prophylactique même si asymptomatique ?",
    "options": [
      "La vésicule alithiasique souple",
      "La vésicule porcelaine (calcification pariétale circonférentielle diffuse de la paroi vésiculaire)",
      "La vésicule bilobée congénitale",
      "Une taille vésiculaire de 7 cm",
      "Une vésicule mobile"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La vésicule porcelaine (paroi vésiculaire entièrement calcifiée et rigide) est associée à un risque élevé d'adénocarcinome vésiculaire (jusqu'à 15-20%), justifiant une exérèse chirurgicale préventive.",
    "clinicalPearl": "Vésicule porcelaine = calcification complète de la paroi vésiculaire = indication formelle de cholécystectomie préventive (risque de cancer)."
  },
  {
    "id": "q-lith-17",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Chez un patient de réanimation polytraumatisé ou grand brûlé à jeun prolongé, quelle forme grave de cholécystite sans calcul liée à l'ischémie et la stase biliaire est redoutée ?",
    "options": [
      "La cholécystite aiguë alithiasique",
      "La cholécystite lithiasique banale",
      "La lithiase pigmentaire pure",
      "La cirrhose biliaire",
      "Le kyste biliaire congénital"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cholécystite alithiasique survient chez les patients critiques de réanimation par ischémie de l'artère cystique et stase biliaire toxique, d'évolution rapide vers la gangrène et perforation vésiculaire.",
    "clinicalPearl": "Cholécystite alithiasique en réanimation : ischémie de la paroi vésiculaire (mortalité élevée, chirurgie ou cholécystostomie percutanée)."
  },
  {
    "id": "q-lith-18",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause favorise le développement de calculs biliaires pigmentaires bruns dans la voie biliaire principale ?",
    "options": [
      "L'obésité simple",
      "L'infection biliaire bactérienne chronique et la stase biliaire (sécrétion de bêta-glucuronidase bactérienne qui déconjugue la bilirubine)",
      "La prise de contraceptifs oraux",
      "Le jeune intermittent",
      "L'hypercholestérolémie pure"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les calculs pigmentaires bruns se forment dans les voies biliaires en présence d'infection bactérienne (E. coli sécrétant une bêta-glucuronidase qui précipite le bilirubinate de calcium non conjugué).",
    "clinicalPearl": "Calculs pigmentaires bruns = infection bactérienne et stase biliaire dans la voie biliaire principale."
  },
  {
    "id": "q-lith-19",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle cause favorise le développement de calculs biliaires pigmentaires noirs dans la vésicule biliaire ?",
    "options": [
      "L'anémie hémolytique chronique (drépanocytose, thalassémie, sphérocytose héréditaire) et la cirrhose hépatique",
      "Le régime végétarien",
      "L'exercice physique intensif",
      "Le tabagisme",
      "L'hypothyroïdie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les calculs pigmentaires noirs sont formés de polymères de bilirubinate de calcium consécutifs à une surproduction massive de bilirubine non conjuguée lors des hémolyses chroniques ou de la cirrhose.",
    "clinicalPearl": "Calculs pigmentaires noirs = hémolyse chronique congénitale (drépanocytose) ou cirrhose hépatique."
  },
  {
    "id": "q-lith-20",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel germe bactérien aérobie à Gram négatif entérique est le plus fréquemment isolé dans les prélèvements de bile d'angiocholite aiguë ?",
    "options": [
      "Escherichia coli (dans plus de 50% des cas), suivi de Klebsiella pneumoniae et Enterococcus",
      "Staphylococcus epidermidis",
      "Mycobacterium tuberculosis",
      "Treponema pallidum",
      "Legionella pneumophila"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La flore biliaire lors d'une angiocholite est dominée par les bacilles Gram négatif d'origine digestive entérique : Escherichia coli (50-60%), Klebsiella, et les entérocoques.",
    "clinicalPearl": "Flore d'angiocholite : Escherichia coli (1er), Klebsiella, Enterococcus (antibiothérapie C3G + métronidazole)."
  },
  {
    "id": "q-lith-21",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle est la limite supérieure de la normale du diamètre de la voie biliaire principale (cholédoque) à l'échographie chez un adulte jeune non cholécystectomisé ?",
    "options": [
      "15 mm",
      "6 à 7 mm (au-delà, elle est considérée comme dilatée)",
      "25 mm",
      "2 mm",
      "12 mm"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le diamètre normal du cholédoque est inférieur à 6-7 mm chez le sujet jeune (pouvant s'élargir physiologiquement jusqu'à 8-10 mm chez le sujet très âgé ou après cholécystectomie).",
    "clinicalPearl": "Voie biliaire principale normale à l'échographie <= 6-7 mm (dilatation si > 8 mm)."
  },
  {
    "id": "q-lith-22",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la colique hépatique, pourquoi l'administration systématique de Morphine pure doit-elle être évitée si possible en première intention ?",
    "options": [
      "Elle est inefficace sur la douleur",
      "Elle induit un spasme puissant réflexe du sphincter d'Oddi, risquant de majorer l'hyperpression dans les voies biliaires et le canal pancréatique",
      "Elle détruit le foie",
      "Elle colore les selles en noir",
      "Elle donne une acidose métabolique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les morphiniques provoquent une contraction et un spasme du sphincter d'Oddi, augmentant la pression intrabilio-pancréatique. On préfère les AINS ou antispasmodiques en première ligne.",
    "clinicalPearl": "Morphine : entraîne un spasme du sphincter d'Oddi (préférer les AINS IV dans la colique hépatique)."
  },
  {
    "id": "q-lith-23",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle méthode chirurgicale ou radiologique permet de drainer la vésicule biliaire en urgence chez un patient très fragile, en choc septique ou ayant des comorbidités récusant formellement l'anesthésie générale ?",
    "options": [
      "La cholécystostomie percutanée trans-hépatique sous guidage échographique ou scanographique",
      "La transplantation hépatique",
      "La splénectomie de décharge",
      "Le drainage thoracique",
      "La gastrostomie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cholécystostomie percutanée sous anesthésie locale évacue le pus vésiculaire chez le patient non opérable en réanimation, permettant de passer le cap septique aigu avant une chirurgie différée.",
    "clinicalPearl": "Patient inopérable avec cholécystite aiguë grave = Cholécystostomie percutanée de sauvetage."
  },
  {
    "id": "q-lith-24",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel polype vésiculaire découvert à l'échographie présente une indication formelle de cholécystectomie en raison du risque de transformation maligne en adénocarcinome ?",
    "options": [
      "Polype de cholestérol de 2 mm",
      "Polype vésiculaire de taille >= 10 mm (1 cm), ou polype augmentant de taille, sessile ou associé à des calculs",
      "Polype mobile de 3 mm",
      "Polype purement calcique",
      "Polype unique de 1 mm"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les polypes adénomateux vésiculaires >= 10 mm comportent un risque élevé de dégénérescence maligne et justifient une cholécystectomie réglée.",
    "clinicalPearl": "Polype vésiculaire >= 10 mm = indication formelle de cholécystectomie (risque de cancer de la vésicule)."
  },
  {
    "id": "q-lith-25",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la pancréatite aiguë d'origine lithiasique, quel paramètre biologique d'admission a une valeur prédictive positive > 90% pour affirmer la cause biliaire lithiasique ?",
    "options": [
      "Élévation précoce des ALAT > 3 fois la limite supérieure de la normale",
      "Créatinine élevée",
      "Baisse des plaquettes",
      "Hyperuricémie",
      "Baisse de l'hémoglobine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Une élévation précoce des transaminases ALAT > 3N au cours d'une pancréatite aiguë possède une valeur prédictive positive de 90-95% en faveur de la migration lithiasique biliaire.",
    "clinicalPearl": "Pancréatite aiguë + ALAT > 3N = cause lithiasique biliaire hautement probable (VPP > 90%)."
  },
  {
    "id": "q-cas-lith-1",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Une femme de 46 ans, mère de 3 enfants, en surpoids (IMC 29 kg/m²), consulte aux urgences pour une douleur aiguë survenue 1 heure après un dîner copieux, siégeant dans l'épigastre et l'hypochondre droit, irradiant vers l'omoplate droite, d'intensité maximale d'emblée, accompagnée de nausées. La douleur dure depuis 3 heures. À l'examen clinique : la patiente est apyrétique (37,1°C), TA 125/75 mmHg, pouls 75 bpm, pas d'ictère conjonctival. La palpation retrouve une sensibilité de l'hypochondre droit avec signe de Murphy positif, sans défense ni contracture. La biologie montre : globules blancs normaux à 6 800/mm³, CRP normale à 3 mg/L, transaminases, bilirubine et lipase normales. L'échographie abdominale retrouve une vésicule biliaire aux parois fines (< 2 mm), contenant deux calculs hyperéchogènes mobiles avec cône d'ombre acoustique postérieur net. La voie biliaire principale mesure 4 mm. Quel est le diagnostic précis et la conduite à tenir ?",
    "options": [
      "Cholécystite aiguë gangréneuse ; laparotomie en extrême urgence",
      "Crise de colique hépatique simple par lithiase vésiculaire symptomatique non compliquée ; traitement antalgique par AINS ou antispasmodiques, puis programmation d'une cholécystectomie par cœlioscopie en ambulatoire à distance",
      "Angiocholite grave ; sphinctérotomie endoscopique dans l'heure",
      "Pancréatite aiguë nécrosante ; réanimation volémique",
      "Ulcère gastrique perforé ; suture sous cœlioscopie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur brève (< 6h) sans fièvre ni syndrome inflammatoire et l'échographie montrant des parois vésiculaires fines confirment une colique hépatique simple. Le traitement associe sédation de la crise (AINS IV) et programmation d'une cholécystectomie cœlioscopique élective pour éviter les complications.",
    "clinicalPearl": "Colique hépatique simple (douleur < 6h, apyrétique, CRP normale, paroi fine) -> AINS -> Cholécystectomie cœlioscopique programmée."
  },
  {
    "id": "q-cas-lith-2",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Une patiente de 52 ans consulte pour une douleur intense continue de l'hypochondre droit qui ne cède pas depuis 18 heures, accompagnée de vomissements alimentaires. À l'examen clinique : température à 38,7°C, frissons, tachycardie à 100 bpm, pâleur, absence d'ictère. La palpation de l'hypochondre droit retrouve une défense très vive bloquant l'inspiration (Murphy franc). Biologie : hyperleucocytose à 15 500 PNN/mm³, CRP à 145 mg/L, bilirubine totale normale, lipase normale. L'échographie abdominale montre un calcul de 18 mm fermement enclavé dans le collet vésiculaire, un épaississement pariétal vésiculaire feuilleté mesuré à 6 mm avec épanchement péri-vésiculaire et un diamètre de la voie biliaire principale à 5 mm. Quel diagnostic posez-vous et quelle est la prise en charge thérapeutique de référence ?",
    "options": [
      "Colique hépatique simple ; retour à domicile sous paracétamol",
      "Cholécystite aiguë lithiasique ; hospitalisation, antibiothérapie intraveineuse probabiliste et cholécystectomie par cœlioscopie précoce (dans les 24 à 72 heures)",
      "Angiocholite aiguë ; CPRE en urgence immédiate",
      "Hépatite virale aiguë A ; repos au lit",
      "Appendicite aiguë simple ; incision de Mac Burney"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La douleur > 6h, la fièvre, la défense et les critères échographiques (calcul enclavé, paroi à 6 mm en double contour) signent la cholécystite aiguë lithiasique. Le traitement de choix est la cholécystectomie cœlioscopique précoce dans les 24 à 72h sous antibiotiques.",
    "clinicalPearl": "Cholécystite aiguë lithiasique = Hospitalisation + Antibiothérapie + Cholécystectomie cœlioscopique précoce (< 72h)."
  },
  {
    "id": "q-cas-lith-3",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Un homme de 68 ans présente le déroulement clinique suivant sur 48 heures : survenue initiale d'une douleur aiguë de l'hypochondre droit, suivie 24 heures plus tard de frissons violents avec fièvre à 39,8°C en plateau, puis apparition ce matin d'un ictère cutanéo-muqueux jaune foncé avec urines couleur bière brune et décoloration des selles. À l'admission : TA 120/70 mmHg, pouls 95 bpm, ictère franc conjonctival, sensibilité diffuse de l'hypochondre droit sans contracture. Biologie : GB à 19 000/mm³, CRP à 210 mg/L, bilirubine totale à 95 µmol/L (dont conjuguée 80 µmol/L), PAL à 4N, Gamma-GT à 8N, ALAT à 4N, lipase normale. L'échographie retrouve une voie biliaire principale dilatée à 12 mm avec obstacle lithiasique bas-cholédocien. Quel est le diagnostic certain et le traitement interventionnel prioritaire ?",
    "options": [
      "Hépatite médicamenteuse aiguë ; arrêt des toxiques",
      "Angiocholite aiguë lithiasique obstructive (Triade de Charcot) ; antibiothérapie intraveineuse à large spectre et désobstruction biliaire d'urgence par CPRE avec sphinctérotomie endoscopique et extraction du calcul",
      "Cancer de la tête du pancréas métastatique ; chimiothérapie",
      "Kyste hydatique calcifié simple ; surveillance",
      "Cholécystectomie isolée sans geste sur la voie biliaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade chronologique Douleur -> Fièvre -> Ictère (Charcot) signe l'angiocholite aiguë par lithiase du cholédoque. C'est une urgence médico-endoscopique : antibiothérapie parentérale et sphinctérotomie endoscopique par CPRE en urgence pour évacuer le pus sous pression.",
    "clinicalPearl": "Triade de Charcot (Douleur, Fièvre, Ictère) = Angiocholite aiguë -> CPRE + sphinctérotomie biliaire d'urgence."
  },
  {
    "id": "q-cas-lith-4",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Une femme de 79 ans très fragile, présentant une insuffisance cardiaque sévère et une BPCO sous oxygène, est hospitalisée pour une cholécystite aiguë gangréneuse documentée au scanner avec altération hémodynamique septique. L'équipe chirurgicale et anesthésique estime que le risque d'une anesthésie générale et d'une laparotomie est prohibitif avec un risque de décès périopératoire supérieur à 60%. Quel geste de radiologie interventionnelle mini-invasif permet de drainer la bile septique sous anesthésie locale au lit du malade ?",
    "options": [
      "Une cholécystostomie percutanée trans-hépatique sous contrôle échographique",
      "Une gastrostomie d'alimentation",
      "Une pose de stent carotidien",
      "Une ponction lombaire",
      "Une coloscopie décompressive"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La cholécystostomie percutanée transhépatique permet d'évacuer immédiatement la bile infectée sous pression sous simple anesthésie locale, constituant l'alternative salvatrice chez les patients récusés pour la chirurgie.",
    "clinicalPearl": "Cholécystite aiguë chez un patient non opérable = Cholécystostomie percutanée sous guidage échographique."
  },
  {
    "id": "q-cas-lith-5",
    "courseId": "crs-gastro-lithiase-biliaire",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Une femme de 82 ans sans antécédent chirurgical consulte pour un tableau d'occlusion mécanique fébrile du grêle évoluant depuis 3 jours avec vomissements fécaloïdes. Le scanner abdominal sans et avec injection met en évidence : une distension des anses grêles avec niveaux hydro-aériques, la présence d'air dans les voies biliaires intrahépatiques (aérobilie nette), une vésicule biliaire atrophique adhérente au duodénum, et un volumineux calcul calcifié de 3 cm enclavé dans la dernière anse iléale juste en amont de la valvule de Bauhin. Quel diagnostic posez-vous et quelle est la prise en charge chirurgicale ?",
    "options": [
      "Volvulus du grêle sur bride congénitale ; cœlioscopie de détorsion",
      "Iléus biliaire sur fistule cholécysto-duodénale (Triade de Rigler complète) ; laparotomie en urgence pour entérotomie d'extraction du calcul iléal, vérification du grêle et décompression sans traitement immédiat obligatoire de la fistule chez cette patiente âgée",
      "Cancer du caecum perforé ; colectomie droite élargie",
      "Péritonite diverticulaire ; Hartmann",
      "Traitement conservateur sous laxatifs"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade de Rigler (occlusion du grêle + aérobilie + calcul ectopique dans l'iléon) signe l'iléus biliaire par fistule bilio-digestive. L'intervention d'urgence consiste en une entérotomie en amont du calcul pour l'extraire, le traitement de la fistule étant différé chez le sujet âgé fragilisé.",
    "clinicalPearl": "Iléus biliaire (Triade de Rigler au scanner) = Laparotomie avec entérotomie d'extraction du calcul enclavé."
  }
];

export const LITHIASE_BILIAIRE_RESOURCES: CourseResource[] = [
  {
    "id": "res-lith-summary",
    "courseId": "crs-gastro-lithiase-biliaire",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Lithiase Biliaire et ses Complications",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Lithiase Biliaire\n- **Épidémiologie & Types** :\n  - *Cholestérolique (80%)* : Sursaturation biliaire, 4F (Female, Forty, Fat, Fertile).\n  - *Pigmentaire noire* : Hémolyse chronique, cirrhose.\n  - *Pigmentaire brune* : Infection bactérienne et stase dans la VBP.\n  - *Lithiase asymptomatique* : Abstention thérapeutique (pas de chirurgie).\n- **Spectre Clinique** :\n  1. *Colique hépatique simple* : Douleur hypochondre droit < 6h, irradiation scapulaire, SANS fièvre, SANS ictère, paroi vésiculaire fine. Traitement : AINS IV -> Cholécystectomie cœlioscopique programmée.\n  2. *Cholécystite aiguë* : Douleur > 6h + Fièvre + Défense hypochondre droit (Murphy +) sans ictère. Échographie : calcul enclavé + paroi > 4 mm feuilletée. Traitement : Cholécystectomie précoce (< 72h) sous antibiothérapie.\n  3. *Angiocholite aiguë* : Triade de Charcot (Douleur -> Fièvre/Frissons -> Ictère en 48h). Urgence vitale médico-endoscopique : CPRE avec sphinctérotomie et extraction du calcul < 24h.\n  4. *Pancréatite aiguë lithiasique* : ALAT > 3N = cause biliaire.\n  5. *Iléus biliaire* : Fistule cholécysto-duodénale -> occlusion iléale sur calcul (Triade de Rigler au scanner).",
    "author": "Faculté de Médecine - Collège de Chirurgie Digestive et Gastroentérologie"
  },
  {
    "id": "res-lith-pearls",
    "courseId": "crs-gastro-lithiase-biliaire",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Lithiase Biliaire",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Triade de Charcot** (Douleur, Fièvre, Ictère) = Angiocholite aiguë -> CPRE urgente (ne pas confondre avec cholécystite où il n'y a PAS d'ictère).\n- ⚡ **Colique hépatique** : AINS intraveineux (kétoprofène) = antalgique de 1ère ligne (éviter la morphine pure qui spasme le sphincter d'Oddi).\n- ⚡ **Vésicule porcelaine** = indication opératoire systématique (risque élevé de cancer vésiculaire).",
    "author": "Commission Pédagogique"
  }
];
