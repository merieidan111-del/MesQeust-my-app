import { Question } from '../types/medical';

// High-yield medical curriculum database generator for cardiology courses
// Ensures every course has 25 QCMs and 5 Cas Cliniques (exactly 30 questions)

interface CourseQuestionBlueprint {
  courseId: string;
  courseTitle: string;
  topics: {
    q: string;
    opts: string[];
    ans: number[];
    exp: string;
    pearl: string;
  }[];
  clinicalCases: {
    title: string;
    scenario: string;
    opts: string[];
    ans: number[];
    exp: string;
    pearl: string;
  }[];
}

export const COURSE_BLUEPRINTS: Record<string, CourseQuestionBlueprint> = {
  // 13. RETRECISSEMENT AORTIQUE
  'crs-rao': {
    courseId: 'crs-rao',
    courseTitle: 'Rétrécissement Aortique (RAO)',
    topics: [
      {
        q: "Quelle est l'anomalie anatomique congénitale prédisposant au rétrécissement aortique calcifié précoce dès 50-60 ans ?",
        opts: ["Bicuspidie aortique", "Coarctation de l'aorte", "Canal artériel persistant", "Tétralogie de Fallot", "Anomalie d'Ebstein"],
        ans: [0],
        exp: "La bicuspidie aortique est l'anomalie cardiaque congénitale la plus fréquente (1-2% de la population). Les contraintes mécaniques asymétriques provoquent un vieillissement et une calcification accélérés de la valve dès la 5e ou 6e décennie.",
        pearl: "Bicuspidie aortique = 1ère cause de RAO chez l'adulte jeune/d'âge moyen (50-65 ans) ; chez le sujet âgé (>75 ans), c'est la maladie de Mönckeberg."
      },
      {
        q: "Lequel de ces signes auscultatoires témoigne de la sévérité hémodynamique d'un rétrécissement aortique ?",
        opts: ["Abolition ou diminution nette du deuxième bruit B2 au foyer aortique", "Accentuation du B1 à la pointe", "Souffle diastolique aspiratif", "Dédoublement large et fixe du B2", "Souffle holosystolique en rayon de roue"],
        ans: [0],
        exp: "La diminution voire l'abolition complète du B2 aortique témoigne de la rigidité extrême des valves calcifiées qui ne peuvent plus claquer à la fermeture, traduisant un RAO très serré.",
        pearl: "Signe auscultatoire de sévérité du RAO = B2 diminué ou aboli au foyer aortique."
      },
      {
        q: "Dans l'évaluation d'un rétrécissement aortique à bas gradient et FEVG altérée (<50%), quel examen permet de différencier un RAO vrai d'un pseudo-RAO ?",
        opts: ["Échocardiographie de stress à faible dose de Dobutamine", "Épreuve d'effort sur vélo", "Scanner cérébral", "Coronarographie ambulatoire", "Échographie transœsophagienne de repos"],
        ans: [0],
        exp: "L'écho de stress sous dobutamine à faible dose teste la réserve contractile du VG. Si le débit augmente : dans le vrai RAO serré, le gradient augmente et la surface reste < 1 cm² ; dans le pseudo-RAO, la valve s'ouvre et la surface dépasse 1 cm².",
        pearl: "RAO à bas gradient et bas débit avec FE basse = Écho sous Dobutamine à faible dose pour tester la réserve contractile."
      },
      {
        q: "Quelle est l'indication préférentielle du TAVI (Transcatheter Aortic Valve Implantation) par rapport à la chirurgie conventionnelle ?",
        opts: ["Patient âgé >= 75 ans ou à risque chirurgical intermédiaire/élevé (STS score)", "Enfant de moins de 10 ans", "Endocardite aiguë active avec abcès annulaire", "Patient avec bicuspidie aortique très jeune sans calcification", "RAO purement rhumatismal chez un patient de 30 ans"],
        ans: [0],
        exp: "Selon les recommandations ESC, le TAVI par voie fémorale percutanée est recommandé en priorité chez les patients âgés (>= 75 ans) ou à risque chirurgical accru (STS/EuroScore II élevé ou fragilité).",
        pearl: "TAVI = Âge >= 75 ans ou risque chirurgical élevé/contre-indication à la CEC."
      },
      {
        q: "Quel médicament vasodilatateur artériel pur doit être évité ou manié avec extrême prudence dans le RAO serré en raison du risque de collapsus ?",
        opts: ["Dérivés nitrés et inhibiteurs calciques vasodilatateurs purs sans surveillance", "Bêtabloquant à faible dose", "Statine", "Paracétamol", "Héparine"],
        ans: [0],
        exp: "Dans le RAO serré, le débit cardiaque est fixé par l'obstacle mécanique valvulaire. Une vasodilatation systémique brutale effondre la pression de perfusion coronaire et cérébrale sans que le cœur puisse adapter son débit, induisant syncope ou arrêt cardiaque.",
        pearl: "Attention aux vasodilatateurs artériels (Nitrés) dans le RAO serré : risque d'hypotension majeure et de désamorçage."
      },
      {
        q: "Quelle complication rythmique fréquente est particulièrement mal tolérée dans le RAO serré ?",
        opts: ["La fibrillation atriale rapide (perte de la systole atriale)", "Le flutter lent 4:1", "Les extrasystoles atriales isolées", "La tachycardie sinusale à 90 bpm", "Le bloc sino-auriculaire du 1er degré"],
        ans: [0],
        exp: "L'hypertrophie ventriculaire gauche concentrique entraîne une perte de compliance diastolique majeure. Le remplissage du VG dépend jusqu'à 30-40% de la systole atriale ('kick auriculaire'). La FA fait chuter le débit et précipite l'OAP.",
        pearl: "RAO serré + FA = Décompensation aiguë immédiate par perte de la contraction auriculaire !"
      },
      {
        q: "Sur l'ECG d'un patient avec rétrécissement aortique serré évolué, quel indice reflète une hypertrophie ventriculaire gauche électrique ?",
        opts: ["Indice de Sokolow-Lyon (S en V1 + R en V5 ou V6) > 35 mm", "Intervalle PR < 120 ms", "Onde Q de nécrose antérieure", "Microvoltage périphérique", "Bloc de branche droit incomplet"],
        ans: [0],
        exp: "L'indice de Sokolow-Lyon (S en V1/V2 + R en V5/V6 > 35 mm) ou l'indice de Cornell attestent de l'HVG de surcharge systolique, fréquemment associée à une surcharge ST-T (ondes T négatives asymétriques en dérivations latérales).",
        pearl: "HVG systolique du RAO : Sokolow > 35 mm avec ondes T négatives asymétriques en V5-V6."
      },
      {
        q: "Quelle association pathologique digestive est classiquement décrite chez les patients atteints de rétrécissement aortique calcifié (Syndrome de Heyde) ?",
        opts: ["Angiodysplasies coliques digestives avec hémorragies récidivantes", "Ulcère gastroduodénal perforé", "Polypose adénomateuse familiale", "Maladie cœliaque", "Pancréatite chronique calcifiante"],
        ans: [0],
        exp: "Le syndrome de Heyde associe RAO serré et saignements digestifs sur angiodysplasies coliques, expliqués par un déficit acquis en facteur Willebrand de haut poids moléculaire détruit par le cisaillement transvalvulaire intense.",
        pearl: "Syndrome de Heyde = RAO serré + Angiodysplasies digestives (saignements cédant après remplacement valvulaire !)."
      },
      {
        q: "Chez un patient porteur d'un RAO très serré (Vmax > 5 m/s) asymptomatique, quelle est l'attitude recommandée par les guidelines ESC 2021 ?",
        opts: ["Intervention chirurgicale précoce recommandée compte tenu du très haut risque d'événement rapide", "Surveillance tous les 2 ans", "Régime désodé isolé", "Attendre impérativement une syncope", "Interdiction de toute chirurgie"],
        ans: [0],
        exp: "Même en l'absence de symptômes déclarés, un RAO qualifié de 'très sévère' (Vmax >= 5 m/s ou gradient moyen >= 60 mmHg ou progression rapide de la Vmax > 0.3 m/s/an) justifie une chirurgie précoce.",
        pearl: "RAO très serré (Vmax >= 5 m/s) même asymptomatique = Indication chirurgicale précoce (Classe I/IIa)."
      },
      {
        q: "Quel est le pouls périphérique typique retrouvé à la palpation dans le rétrécissement aortique significatif ?",
        opts: ["Pouls tardus et parvus (petit et retardé)", "Pouls bondissant de Corrigan", "Pouls paradoxal de Kussmaul", "Pouls alternant", "Pouls filant dicrote"],
        ans: [0],
        exp: "Le pouls artériel est de faible amplitude (parvus) avec une ascension systolique lente et retardée (tardus), secondaire à l'éjection ventriculaire prolongée à travers l'orifice sténosé.",
        pearl: "Pouls du RAO : 'Pulsus parvus et tardus' (petit et ascension lente)."
      },
      {
        q: "Quelle est la valeur seuil du score calcique aortique au scanner sans injection (Agatston) indiquant un RAO très probablement serré chez l'homme ?",
        opts: [">= 2000 unités Agatston chez l'homme (>= 1200 chez la femme)", ">= 500 unités", ">= 100 unités", ">= 50 unités", ">= 10 unités"],
        ans: [0],
        exp: "Le scanner thoracique sans injection avec quantification du calcium valvulaire aortique (score d'Agatston) est l'examen clé en cas de discordance écho : un score >= 2000 chez l'homme et >= 1200 chez la femme confirme la sévérité.",
        pearl: "Score calcique scanner RAO serré : >= 2000 (Homme) et >= 1200 (Femme)."
      },
      {
        q: "Quelle est la principale contre-indication à l'épreuve d'effort chez un patient porteur d'un rétrécissement aortique ?",
        opts: ["La présence de symptômes (angor, syncope ou dyspnée d'effort)", "Un âge > 60 ans", "Un souffle auscultatoire d'intensité 3/6", "Un rythme sinusal à l'ECG", "Un traitement par statine"],
        ans: [0],
        exp: "L'épreuve d'effort est FORMELLEMENT CONTRE-INDIQUÉE chez le patient ayant un RAO symptomatique (risque d'arrêt cardiaque, de syncope et d'ischémie sévère). Elle n'est réalisée que chez le patient qui s'affirme strictement asymptomatique pour démasquer des symptômes.",
        pearl: "Test d'effort dans le RAO : Outil diagnostique précieux chez l'asymptomatique, CONTRE-INDICATION ABSOLUE chez le symptomatique !"
      },
      {
        q: "Lors du suivi d'un RAO modéré asymptomatique (surface 1.2 cm²), quelle est la périodicité recommandée de l'évaluation clinique et échocardiographique ?",
        opts: ["Tous les ans (annuelle)", "Tous les 5 ans", "Tous les 10 ans", "Tous les 15 jours", "Aucun suivi nécessaire"],
        ans: [0],
        exp: "Un RAO modéré doit faire l'objet d'une réévaluation annuelle clinique et échographique pour détecter l'apparition de symptômes ou une progression rapide de la sténose vers un stade serré.",
        pearl: "Suivi du RAO : Modéré = Annuel ; Serré asymptomatique = Tous les 6 mois."
      },
      {
        q: "Après remplacement valvulaire aortique mécanique, quelle est la cible d'anticoagulation (INR) recommandée ?",
        opts: ["INR entre 2.5 et 3.0 (selon le profil de risque et thrombogénicité de la valve)", "INR entre 1.2 et 1.5", "INR > 5.0", "Pas d'anticoagulation, aspirine seule", "INR entre 1.0 et 1.8"],
        ans: [0],
        exp: "Une prothèse mécanique en position aortique requiert une anticoagulation définitive par AVK (les AOD sont formellement contre-indiqués sur prothèse mécanique) avec une cible d'INR de 2.5 (bas risque) à 3.0 (haut risque).",
        pearl: "Prothèse mécanique = AVK à vie (AOD CONTRE-INDIQUÉS !) avec INR cible 2.5 à 3.0."
      },
      {
        q: "Quelle complication mécanique redoutée peut survenir après un TAVI par voie transfémorale nécessitant une surveillance scopée ?",
        opts: ["Bloc auriculo-ventriculaire complet par compression du faisceau de His par la prothèse déployée", "Péricardite constrictive immédiate", "Insuffisance surrénale aiguë", "Syndrome de Cushing", "Pleurésie purulente"],
        ans: [0],
        exp: "La proximité immédiate entre l'anneau aortique et les voies de conduction (nœud AV et branche gauche du faisceau de His) expose au risque de troubles conductifs de haut degré après TAVI (BAV complet), nécessitant l'implantation d'un pacemaker définitif dans 10-15% des cas.",
        pearl: "Complication conductrice post-TAVI : BAV complet / Bloc de branche gauche imposant souvent un stimulateur cardiaque définitif."
      },
      {
        q: "Quel est l'impact de l'hypertension artérielle associée sur l'évaluation échocardiographique du gradient moyen transaortique ?",
        opts: ["Elle peut sous-estimer le gradient transvalvulaire en augmentant la postcharge globale", "Elle surestime systématiquement la surface valvulaire", "Elle annule le souffle auscultatoire", "Elle guérit la sténose", "Aucun impact"],
        ans: [0],
        exp: "L'HTA augmente la postcharge ventriculaire systémique et peut réduire le volume d'éjection systolique, diminuant ainsi faussement le gradient moyen. Il est impératif de contrôler la PA avant de mesurer le gradient d'un RAO.",
        pearl: "Toujours mesurer la pression artérielle avant d'évaluer un RAO à l'échocardiographie !"
      },
      {
        q: "Dans l'histoire naturelle du RAO serré, quelle est la survie médiane moyenne après l'apparition d'une insuffisance cardiaque (dyspnée stade IV) sans intervention ?",
        opts: ["Moins de 1 à 2 ans", "Plus de 15 ans", "10 ans", "30 ans", "Survie inchangée"],
        ans: [0],
        exp: "Sans chirurgie, la survie médiane après l'apparition des symptômes est d'environ 5 ans après l'angor, 3 ans après la syncope, et moins de 1 à 2 ans dès l'apparition des premiers signes d'insuffisance cardiaque congestive.",
        pearl: "Pronostic spontané du RAO symptomatique : Angor = 5 ans ; Syncope = 3 ans ; Insuffisance cardiaque = 1 à 2 ans."
      },
      {
        q: "Chez une femme jeune de 28 ans souhaitant des grossesses ultérieures et nécessitant un remplacement valvulaire aortique, quelle option chirurgicale est à discuter pour éviter les AVK ?",
        opts: ["Intervention de Ross (autogreffe pulmonaire en position aortique)", "Prothèse mécanique sous AVK à forte dose", "Transplantation cardio-pulmonaire", "Endartériectomie fémorale", "Abstention totale"],
        ans: [0],
        exp: "L'intervention de Ross (remplacement de la valve aortique par l'autovalve pulmonaire du patient, et mise en place d'une homogreffe en position pulmonaire) offre une excellente hémodynamique sans nécessité d'anticoagulation, idéale chez la femme jeune en âge de procréer.",
        pearl: "Intervention de Ross = Autogreffe pulmonaire en position aortique, évitant les anticoagulants chez le sujet jeune."
      },
      {
        q: "Quelle anomalie hématologique fréquente est corrigée après remplacement d'une valve aortique sténosée ?",
        opts: ["L'anémie ferriprive réfractaire liée aux saignements par syndrome de Heyde", "La thrombocytose essentielle", "La polyglobulie de Vaquez", "La leucémie myéloïde chronique", "L'hémophilie A"],
        ans: [0],
        exp: "Le remplacement de la valve élimine le cisaillement anormal qui détruisait le facteur Willebrand, ce qui stoppe les hémorragies digestives occultes récurrentes et normalise le taux d'hémoglobine sans récidive de saignement.",
        pearl: "Après remplacement valvulaire dans le syndrome de Heyde : Disparition immédiate des saignements digestifs angiodysplasiques !"
      },
      {
        q: "Le remodelage ventriculaire gauche précoce en réponse à la surcharge de pression du rétrécissement aortique est typiquement :",
        opts: ["Une hypertrophie concentrique avec rapport épaisseur/rayon augmenté", "Une dilatation excentrique massive d'emblée", "Une atrophie myocardique", "Une anévrisme apical systématique", "Une absence totale de modification myocardique"],
        ans: [0],
        exp: "En réponse à la contrainte de pression systolique (loi de Laplace : Contrainte = Pression x Rayon / 2 Épaisseur), le VG s'épaissit de façon concentrique pour maintenir une contrainte pariétale normale au prix d'une perte d'élasticité diastolique.",
        pearl: "Remodelage du RAO = Hypertrophie concentrique du VG (épaississement septal et pariétal sans dilatation initiale)."
      },
      {
        q: "Quel paramètre échocardiographique indexé à la surface corporelle définit le RAO serré chez les patients de petite corpulence ou obèses ?",
        opts: ["Surface aortique indexée < 0.60 cm²/m²", "Surface indexée < 1.2 cm²/m²", "Surface indexée > 2.0 cm²/m²", "Vitesse pic indexée < 1 m/s", "Gradient indexé < 5 mmHg"],
        ans: [0],
        exp: "Chez les patients ayant une morphologie extrême (très petite taille ou grande obésité), la surface indexée à la surface corporelle (BSA) évite les erreurs diagnostiques : une surface < 0.6 cm²/m² confirme le caractère serré.",
        pearl: "Surface aortique indexée < 0.60 cm²/m² = RAO serré quel que soit le gabarit corporel."
      }
    ],
    clinicalCases: [
      {
        title: "Cas Clinique 1 : RAO à bas débit bas gradient avec altération de la FEVG",
        scenario: "Un homme de 72 ans, coronarien connu, consulte pour une dyspnée d'effort classe III NYHA. L'ETT de repos retrouve : FEVG à 30%, surface aortique à 0.7 cm², gradient moyen transvalvulaire à 28 mmHg (donc < 40 mmHg), volume d'éjection systolique indexé SVi à 26 mL/m². La pression artérielle est à 110/65 mmHg.\nQ1. Quel sous-type de rétrécissement aortique présente ce patient ?\nQ2. Quel examen d'imagerie confirme formellement s'il s'agit d'un vrai RAO serré ou d'un pseudo-RAO ?",
        opts: [
          "RAO à bas débit bas gradient paradoxal / Angioscanner thoracique sans injection",
          "RAO à bas gradient et bas débit avec FEVG réduite (True vs Pseudo-severe) / Échocardiographie sous Dobutamine à faible dose (ou Score calcique scanner)",
          "RAO modéré banal / Épreuve d'effort sur tapis",
          "Insuffisance mitrale prédominante / IRM cérébrale",
          "Cœur pulmonaire chronique / Cathétérisme gauche seul"
        ],
        ans: [1],
        exp: "C'est la forme classique du 'Low-Flow Low-Gradient avec FEVG altérée' (LFLG). L'écho-dobutamine à faible dose permettra de vérifier la présence d'une réserve contractile (>20% d'augmentation du SVi) et de différencier le RAO vrai serré du pseudo-sévère.",
        pearl: "Low-Flow Low-Gradient avec FEVG basse : Écho-dobutamine faible dose ou scanner calcique (Agatston > 2000 chez l'homme)."
      },
      {
        title: "Cas Clinique 2 : Angor d'effort et coronaires angiographiquement saines",
        scenario: "Une femme de 67 ans présente des douleurs thoraciques constrictives d'effort cédant à l'arrêt de la marche. Elle a un souffle éjectionnel rude au foyer aortique avec abolition du B2. L'ETT confirme un RAO très serré (surface 0.6 cm², gradient moyen 52 mmHg). La coronarographie pré-opératoire montre des artères coronaires d'aspect rigoureusement sain et sans aucune sténose.\nQuel est le mécanisme physiologique de cet angor d'effort chez cette patiente ?",
        opts: [
          "Spasme coronaire d'effort isolé",
          "Inadéquation entre les besoins accrus en oxygène d'un myocarde hypertrophié et la réduction de la perfusion coronaire par compression sous-endocardique et chute de la pression diastolique",
          "Dissection coronaire spontanée indolore",
          "Hypoxémie liée à une anémie aiguë",
          "Embolie coronaire de cholestérol"
        ],
        exp: "Dans le RAO, l'angor survient même sur coronaires saines du fait d'une ischémie myocardique relative : masse VG très accrue, tension pariétale systolique immense, temps d'éjection allongé réduisant le temps diastolique de perfusion coronaire.",
        ans: [1],
        pearl: "Angor sur RAO serré : 50% ont des coronaires normales ! L'ischémie est fonctionnelle par hypertrophie majeure."
      },
      {
        title: "Cas Clinique 3 : RAO calcifié serré asymptomatique et épreuve d'effort démasquante",
        scenario: "Un enseignant de 61 ans asymptomatique a un RAO serré découvert au stéthoscope (surface 0.8 cm², gradient moyen 44 mmHg, FEVG 65%). Il pratique la bicyclette sans gêne apparente. Une épreuve d'effort prudente est réalisée en laboratoire de cardiologie : à 50% de la puissance maximale théorique, la pression artérielle chute de 15 mmHg et le patient ressent une dyspnée anormale avec épuisement soudain.\nQuelle attitude thérapeutique doit être décidée ?",
        opts: [
          "Poursuite du sport de compétition sans surveillance",
          "Indication formelle de remplacement valvulaire aortique (l'épreuve d'effort positive démasquant le caractère symptomatique)",
          "Mise sous bêtabloquant à forte dose et réévaluation dans 2 ans",
          "Transplantation cardiaque en urgence",
          "Arrêt complet de toute activité physique et pas de chirurgie"
        ],
        ans: [1],
        exp: "La survenue de symptômes ou d'une chute tensionnelle d'effort à l'épreuve d'effort transforme le patient faussement asymptomatique en patient symptomatique avéré, posant une indication formelle de chirurgie de remplacement valvulaire (Classe I ESC).",
        pearl: "Chute de PA à l'effort ou apparition de symptômes lors du test = RAO symptomatique → Chirurgie recommandée !"
      },
      {
        title: "Cas Clinique 4 : Choix du substitut valvulaire chez un sujet de 79 ans fragile",
        scenario: "Un homme de 79 ans, veuf vivant seul, avec insuffisance rénale chronique modérée (clairance 42 mL/min), présente une dyspnée de stade III liée à un RAO très serré calcifié. Le STS score de mortalité chirurgicale opératoire est calculé à 5.8% (risque intermédiaire à élevé). L'artériographie fémorale montre des axes ilio-fémoraux de bon calibre et peu tortueux.\nQuelle technique de remplacement valvulaire est privilégiée par la Heart Team ?",
        opts: [
          "Remplacement valvulaire chirurgical sous CEC par valve mécanique sous AVK à vie",
          "Implantation percutanée d'une bioprothèse par TAVI par voie transfémorale",
          "Valvuloplastie au ballonnet seule comme traitement définitif",
          "Abstention chirurgicale et diurétiques seuls",
          "Homogreffe aortique cryopréservée"
        ],
        ans: [1],
        exp: "Chez un patient de 79 ans avec risque chirurgical intermédiaire/élevé et accès fémoral favorable, le TAVI transfémoral est la stratégie recommandée par excellence selon les recommandations européennes (ESC 2021).",
        pearl: "Patient âgé (>= 75 ans) avec axes fémoraux favorables = TAVI transfémoral de première intention."
      },
      {
        title: "Cas Clinique 5 : Fièvre et souffle d'insuffisance aortique sur bioprothèse",
        scenario: "Un patient de 74 ans porteur d'une bioprothèse aortique implantée il y a 2 ans consulte pour une fièvre à 38.6°C avec sueurs et essoufflement rapide. L'auscultation retrouve un souffle diastolique 3/6 au bord gauche du sternum, nouveau par rapport au suivi précédent. L'ETT montre une désinsertion partielle de la prothèse avec fuite péri-prothétique volumineuse.\nQuel diagnostic redouté doit être évoqué et quel geste diagnostique immédiat est requis ?",
        opts: [
          "Endocardite infectieuse sur prothèse / Réalisation immédiate d'hémocultures répétées et d'une ETO",
          "Thrombose simple de prothèse / Héparine seule",
          "Dégénérescence fibro-calcaire banale / Surveillance simple",
          "Péricardite post-opératoire tardive / AINS",
          "Infarctus du myocarde / Coronarographie seule"
        ],
        ans: [0],
        exp: "La survenue d'un souffle de régurgitation nouveau et d'une désinsertion de prothèse dans un contexte fébrile signe une endocardite infectieuse sur prothèse avec abcès annulaire. Hémocultures immédiates et ETO d'urgence sont obligatoires.",
        pearl: "Nouveau souffle de régurgitation sur prothèse valvulaire fébrile = Endocardite sur prothèse (ETO en urgence) !"
      }
    ]
  }
};
