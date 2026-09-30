/**
 * BIBLIOTHÈQUE ÉDITORIALE — SILLAGE.
 *
 * Contenus de connaissance destinés aux utilisateurs, du novice à l'expert.
 * Le moteur ne lit rien ici. Chaque fiche déclare son niveau, sa discipline,
 * son temps de lecture et ses sources proposées, avec leur statut de
 * vérification (rapport de collecte éditoriale, août 2026).
 *
 * Règle éditoriale : aucune donnée commerciale présentée comme un résultat
 * scientifique, aucune causalité affirmée là où la source observe seulement
 * une association, aucune amélioration de performance garantie.
 */

/** 0 = Débuter : guidance d'achat écrite, en amont du parcours « Découvrir ». */
export type NiveauLecture = 0 | 1 | 2 | 3 | 4;

export interface Niveau {
  id: NiveauLecture;
  titre: string;
  public: string;
  questions: string;
  duree: string;
}

export const NIVEAUX: Niveau[] = [
  {
    id: 0,
    titre: "Débuter",
    public: "Aucun matériel encore acheté.",
    questions: "Par quoi commencer ? Que faut-il acheter en premier ? Quelles erreurs éviter ?",
    duree: "3 à 4 min",
  },
  {
    id: 1,
    titre: "Découvrir",
    public: "Premier achat, vocabulaire, erreurs fréquentes.",
    questions: "À quoi ça sert ? Comment choisir ? Quelles erreurs éviter ?",
    duree: "3 à 5 min",
  },
  {
    id: 2,
    titre: "Comprendre",
    public: "Pratiquant régulier.",
    questions: "Pourquoi cela fonctionne ainsi ? Que dois-je optimiser ?",
    duree: "5 à 7 min",
  },
  {
    id: 3,
    titre: "Approfondir",
    public: "Utilisateur expérimenté.",
    questions: "Matériaux, construction, patronage, contraintes mécaniques, entretien.",
    duree: "7 à 10 min",
  },
  {
    id: 4,
    titre: "Expert",
    public: "Entraîneurs, compétiteurs, professionnels.",
    questions: "Biomécanique, propriétés mécaniques, protocoles de mesure, normes et littérature.",
    duree: "8 à 15 min",
  },
];

export type DisciplineFiche =
  "transversal" | "surf" | "eau-libre" | "kite" | "ski" | "harnais" | "plongee" | "lab";

export const DISCIPLINES: { id: DisciplineFiche; libelle: string }[] = [
  { id: "transversal", libelle: "Transversal" },
  { id: "surf", libelle: "Surf" },
  { id: "eau-libre", libelle: "Eau libre / triathlon" },
  { id: "kite", libelle: "Kite / wingfoil" },
  { id: "ski", libelle: "Ski / snowboard" },
  { id: "harnais", libelle: "Harnais" },
  { id: "plongee", libelle: "Plongée" },
  { id: "lab", libelle: "SILLAGE Lab" },
];

/**
 * Familles de sport, taxonomie canonique partagée par la bibliothèque
 * éditoriale et le module « Je commence » (src/lib/sillage/debut).
 * Liste ouverte : ajouter une famille consiste à étendre l'union, sans
 * toucher au reste. Une famille « à venir » n'a aucune fiche : c'est voulu.
 */
export type FamilleDebut =
  | "glisse"
  | "raquette"
  | "ballon_balle"
  | "eau"
  | "plein_air"
  | "forme_combat";

export interface FamilleDebutEntree {
  id: FamilleDebut;
  libelle: string;
  statut: "disponible" | "a_venir";
}

/** Sous-ensemble présenté dans la bibliothèque : seules les familles pour
    lesquelles une vérification éditoriale est engagée y figurent. */
export const FAMILLES_DEBUT: FamilleDebutEntree[] = [
  { id: "glisse", libelle: "Sports de glisse", statut: "disponible" },
  { id: "raquette", libelle: "Sports de raquette", statut: "a_venir" },
  { id: "ballon_balle", libelle: "Sports de ballon et de balle", statut: "a_venir" },
];


export interface Fiche {
  id: string;
  titre: string;
  chapo: string;
  paragraphes: string[];
  niveau: NiveauLecture;
  discipline: DisciplineFiche;
  /** Famille de sport, renseignée sur les fiches du parcours « Débuter ». */
  familleDebut?: FamilleDebut;
  /** Sources citées avec leur lien vérifiable (parcours Débuter). */
  sourcesLiens?: { libelle: string; url: string }[];
  /** Sources proposées, à vérifier en source primaire avant publication. */
  sources?: string;
  /** Section « Ce que l'on sait / ce que l'on ne sait pas », requise au niveau 4. */
  limites?: string;
}

export const FICHES: Fiche[] = [
  /* --- Parcours « Débuter » — première vague : ski et snowboard --------- */
  {
    id: "debuter-ski-veste",
    titre: "Première veste de ski ou de snowboard : par quoi commencer",
    chapo:
      "La veste est la pièce à acheter en premier : c'est elle qui vous protège de la neige et du vent, les deux causes les plus rapides d'une journée écourtée.",
    paragraphes: [
      "Commencez par la couche externe. Le rôle d'une veste de ski ou de snowboard est de bloquer le vent et la neige tout en laissant passer la transpiration ; REI décrit cette couche comme la protection contre les éléments, distincte de la couche qui vous réchauffe.",
      "Deux familles coexistent : la veste isolée, qui intègre son isolation, et la veste coque non isolée, qui se combine avec une couche intermédiaire. La coque offre plus de latitude pour ajuster la chaleur d'une journée à l'autre ; l'isolée demande moins de décisions au départ. REI documente les deux approches, avec leurs compromis de polyvalence.",
      "Erreurs fréquentes au premier achat : acheter une veste taille au-dessus « pour mettre un pull en dessous » sans savoir quelles couches on portera réellement, et choisir une veste en coton ou une doudoune de ville, qui retient l'humidité au lieu de l'évacuer.",
      "Budget : [PLACEHOLDER : fourchette de prix à relever chez un revendeur identifié, avec date de relevé, avant publication].",
    ],
    niveau: 0,
    discipline: "ski",
    familleDebut: "glisse",
    sources:
      "REI Expert Advice, « What to Wear Skiing and Snowboarding » ; REI Expert Advice, « Buying Down & Synthetic Insulated Jackets ».",
    sourcesLiens: [
      {
        libelle: "REI Expert Advice — What to Wear Skiing and Snowboarding",
        url: "https://www.rei.com/learn/expert-advice/what-to-wear-skiing-and-snowboarding.html",
      },
      {
        libelle: "REI Expert Advice — Buying Down & Synthetic Insulated Jackets",
        url: "https://www.rei.com/learn/expert-advice/insulated-outerwear.html",
      },
    ],
  },
  {
    id: "debuter-ski-pantalon",
    titre: "Pantalon ou salopette : le choix qui se fait avant la taille",
    chapo:
      "Pantalon classique ou salopette : la différence tient d'abord à la façon dont la neige entre, et à la façon dont l'ensemble se porte.",
    paragraphes: [
      "Le bas suit la même logique que la veste : imperméabilité et respirabilité avant tout, puisqu'il s'agit d'une couche externe. REI classe pantalons et salopettes de ski dans cette couche de protection, à distinguer des couches isolantes portées dessous.",
      "La salopette monte au-dessus de la taille : elle limite les entrées de neige lors des chutes, fréquentes en apprentissage, et supprime la question de la ceinture. Le pantalon se retire plus facilement en cours de journée. C'est un arbitrage d'usage, pas de performance.",
      "Erreurs fréquentes : oublier que le pantalon se porte par-dessus la chaussure, jamais rentré dedans, et prendre un bas non isolé sans prévoir de couche de base pour les jambes.",
      "Budget : [PLACEHOLDER : fourchette de prix à relever chez un revendeur identifié, avec date de relevé, avant publication].",
    ],
    niveau: 0,
    discipline: "ski",
    familleDebut: "glisse",
    sources: "REI Expert Advice, « What to Wear Skiing and Snowboarding ».",
    sourcesLiens: [
      {
        libelle: "REI Expert Advice — What to Wear Skiing and Snowboarding",
        url: "https://www.rei.com/learn/expert-advice/what-to-wear-skiing-and-snowboarding.html",
      },
    ],
  },
  {
    id: "debuter-ski-couches",
    titre: "Couche de base et couche intermédiaire : le principe des trois couches",
    chapo:
      "Ce que vous portez sous la veste décide de votre confort bien plus que le prix de la veste elle-même.",
    paragraphes: [
      "Le système décrit par REI comporte trois couches : une couche de base qui évacue la transpiration de la peau, une couche intermédiaire qui retient la chaleur, une couche externe qui arrête le vent et la neige. Chaque couche a une fonction distincte ; superposer deux fois la même ne remplace pas la couche manquante.",
      "La couche de base se choisit en matière synthétique ou en laine mérinos ; REI déconseille explicitement le coton, qui reste humide et refroidit. La couche intermédiaire, polaire ou isolation synthétique, s'ajoute ou se retire selon l'effort et la météo.",
      "L'intérêt du système est sa modularité : on ajuste la chaleur en cours de journée plutôt qu'en achetant une pièce plus épaisse. C'est aussi pourquoi il faut savoir combien de couches on portera avant de fixer la taille de la veste et du pantalon.",
      "Erreurs fréquentes : un t-shirt en coton comme couche de base, et un empilement si épais qu'il comprime l'ensemble et supprime l'air isolant.",
      "Budget : [PLACEHOLDER : fourchette de prix à relever chez un revendeur identifié, avec date de relevé, avant publication].",
    ],
    niveau: 0,
    discipline: "ski",
    familleDebut: "glisse",
    sources:
      "REI Expert Advice, « How to Dress in Layers » ; REI Expert Advice, « What to Wear Skiing and Snowboarding ».",
    sourcesLiens: [
      {
        libelle: "REI Expert Advice — How to Dress in Layers",
        url: "https://www.rei.com/learn/expert-advice/layering-basics.html",
      },
      {
        libelle: "REI Expert Advice — What to Wear Skiing and Snowboarding",
        url: "https://www.rei.com/learn/expert-advice/what-to-wear-skiing-and-snowboarding.html",
      },
    ],
  },
  {
    id: "debuter-ski-une-piece",
    titre: "La combinaison une pièce : ce qu'elle simplifie, ce qu'elle fige",
    chapo:
      "Une pièce plutôt que deux : moins d'entrées de neige, mais moins de marge pour ajuster la chaleur et la taille.",
    paragraphes: [
      "La combinaison une pièce reste une couche externe : elle remplace veste et pantalon, sans dispenser des couches portées dessous. Le système de trois couches décrit par REI s'applique donc à l'identique, la couche de protection étant simplement d'un seul tenant.",
      "Son avantage tient à la continuité : pas d'ouverture à la taille, donc moins d'entrées de neige. Sa contrainte est symétrique : on ne retire pas le haut sans retirer le bas, et la modulation en cours de journée se limite aux ventilations et aux couches internes.",
      "Elle fige aussi la taille : haut et bas partagent un même libellé, alors qu'un corps peut se situer sur deux tailles différentes selon la zone. C'est précisément le cas où une mesure vaut mieux qu'une lettre.",
      "Erreurs fréquentes : la choisir pour son allure sans vérifier la mobilité bras levés et en position accroupie, et négliger la couche de base parce que la pièce paraît épaisse.",
      "Budget : [PLACEHOLDER : fourchette de prix à relever chez un revendeur identifié, avec date de relevé, avant publication].",
    ],
    niveau: 0,
    discipline: "ski",
    familleDebut: "glisse",
    sources:
      "REI Expert Advice, « How to Dress in Layers » ; REI Expert Advice, « What to Wear Skiing and Snowboarding ».",
    sourcesLiens: [
      {
        libelle: "REI Expert Advice — How to Dress in Layers",
        url: "https://www.rei.com/learn/expert-advice/layering-basics.html",
      },
      {
        libelle: "REI Expert Advice — What to Wear Skiing and Snowboarding",
        url: "https://www.rei.com/learn/expert-advice/what-to-wear-skiing-and-snowboarding.html",
      },
    ],
  },
  {
    id: "flushing",
    titre: "Trop grande, votre combinaison vous refroidit : le piège du flushing",
    chapo:
      "Une combinaison néoprène ne vous garde pas au sec : elle limite les échanges thermiques et les mouvements d'eau.",
    paragraphes: [
      "Le néoprène est un matériau à cellules fermées contenant des bulles de gaz qui ralentissent les transferts de chaleur. Une combinaison humide n'isole donc pas en supprimant l'eau, mais en associant l'isolation du matériau à une circulation d'eau limitée entre la peau et le vêtement.",
      "Le vrai problème est le renouvellement excessif de cette eau : lorsque de l'eau réchauffée au contact du corps est chassée et remplacée par de l'eau froide, il faut à nouveau réchauffer ce volume. C'est le phénomène couramment appelé « flushing ». Une combinaison trop ample augmente le risque de circulation d'eau dans certaines zones.",
      "Conclusion pratique : l'épaisseur compte, mais l'ajustement aussi. Une combinaison plus épaisse mais mal ajustée peut être moins efficace qu'attendu.",
    ],
    niveau: 1,
    discipline: "surf",
    sources:
      "Appalachian Mountain Club ; Lomo UK ; documentation technique fabricants — à vérifier.",
  },
  {
    id: "epaules-rame",
    titre: "Trop serrée, elle peut épuiser vos épaules à la rame",
    chapo:
      "Une combinaison trop petite peut comprimer le thorax ou limiter les épaules : chaque mouvement devient plus coûteux.",
    paragraphes: [
      "Une compression excessive du haut du corps peut réduire le confort respiratoire et augmenter la sensation d'effort. Aux épaules et aux aisselles, une combinaison trop juste peut limiter l'élévation ou la rotation du bras.",
      "Le néoprène peut s'assouplir lorsqu'il est mouillé et après quelques utilisations, mais une restriction franche de mobilité à sec mérite d'être considérée comme un signal de mauvais ajustement plutôt que comme un simple « rodage ».",
    ],
    niveau: 1,
    discipline: "surf",
    sources: "Mundo Surf ; guides techniques néoprène — sources secondaires à trianguler.",
  },
  {
    id: "deux-centimetres",
    titre: "Ce que 2 cm d'erreur peuvent changer",
    chapo:
      "Quelques centimètres deviennent déterminants lorsqu'ils vous placent à la frontière entre deux tailles.",
    paragraphes: [
      "Les grilles officielles de plusieurs fabricants présentent des plages de mensurations relativement rapprochées. Une erreur de mesure peut donc modifier l'interprétation lorsque vous vous situez à la limite d'une plage.",
      "La bonne pratique consiste à mesurer avec un protocole stable, à identifier les zones prioritaires du produit et à éviter de transformer une différence de quelques centimètres en règle universelle : l'effet dépend de la marque, du modèle, de la taille et de la zone anatomique.",
    ],
    niveau: 1,
    discipline: "transversal",
    sources: "Grilles officielles 2XU, O'Neill, Rip Curl — versions et dates à documenter.",
  },
  {
    id: "meme-m",
    titre: "Pourquoi le même « M » ne veut rien dire d'une marque à l'autre",
    chapo:
      "Il n'existe pas de taille universelle garantissant qu'un M représente les mêmes dimensions partout.",
    paragraphes: [
      "Chaque fabricant construit ses grilles et ses patronages selon ses propres choix de conception, son marché cible et ses modèles. À cela s'ajoutent les différences de coupe à l'intérieur d'une même marque.",
      "Votre information la plus stable reste donc votre propre profil de mesures. SILLAGE compare ce profil avec la géométrie et les données disponibles du produit, plutôt que de supposer qu'une lettre est universelle.",
    ],
    niveau: 1,
    discipline: "transversal",
    sources: "Guides de taille officiels fabricants ; littérature sur la variabilité des tailles.",
  },
  {
    id: "cou",
    titre: "Étanchéité au cou : une zone rarement décrite par les grilles",
    chapo:
      "Le cou est une zone fonctionnelle importante, alors que sa circonférence apparaît rarement dans les grilles publiques.",
    paragraphes: [
      "Les ouvertures du cou, des poignets et des chevilles participent à la limitation des mouvements d'eau. Un col trop lâche peut favoriser les entrées d'eau ; un col trop serré peut devenir inconfortable.",
      "Cette absence de donnée illustre un principe central de SILLAGE : disposer d'une mesure corporelle ne suffit pas. Il faut aussi disposer d'une donnée produit suffisamment fiable pour l'évaluer.",
    ],
    niveau: 2,
    discipline: "surf",
    sources: "Scuba.com ; SRFACE ; documentation fabricants — à vérifier et hiérarchiser.",
  },
  {
    id: "morphologie-a",
    titre: "Morphologie en A : pourquoi certaines grilles décrivent mal certaines proportions",
    chapo:
      "Hanches et cuisses développées avec une taille plus fine : deux personnes de même taille nominale peuvent avoir besoin de coupes différentes.",
    paragraphes: [
      "Certaines grilles standard représentent moins bien les morphologies dont les proportions s'éloignent du mannequin de référence utilisé pour le patronage. Un pantalon peut convenir à la taille et devenir limitant aux hanches ou aux cuisses, ou inversement.",
      "L'enjeu n'est pas de qualifier une morphologie comme « problématique », mais de comprendre quelles zones déterminent réellement le fit du produit.",
    ],
    niveau: 2,
    discipline: "transversal",
    sources: "Guides de patronage et de morphologie ; sources secondaires à renforcer.",
  },
  {
    id: "pantalon-ski",
    titre: "Pantalon de ski : pourquoi les hanches et les cuisses peuvent devenir limitantes",
    chapo:
      "Le tour de taille ne suffit pas : bassin, cuisses et entrejambe conditionnent la mobilité et le passage du vêtement.",
    paragraphes: [
      "Un pantalon doit satisfaire plusieurs contraintes simultanément : maintien à la taille, passage aux hanches, volume de cuisse, longueur d'entrejambe et mobilité en flexion.",
      "Entre deux tailles, il n'existe pas de règle universelle consistant à toujours monter d'une taille. Le bon arbitrage dépend du modèle, de la coupe, des couches portées dessous et de la morphologie.",
    ],
    niveau: 1,
    discipline: "ski",
    sources: "Guides officiels O'Neill / Obermeyer / SYNC ; conseils revendeurs — secondaires.",
  },
  {
    id: "layering",
    titre: "Le layering au ski : quelle aisance prévoir sans nager dans sa veste",
    chapo: "Une veste doit accueillir vos couches sans devenir inutilement volumineuse.",
    paragraphes: [
      "Le système de couches associe généralement une première couche, éventuellement une couche intermédiaire, puis une couche externe. Le volume nécessaire varie fortement selon les conditions et le niveau d'isolation choisi.",
      "SILLAGE demande donc comment vous prévoyez de porter votre veste avant d'évaluer sa compatibilité dimensionnelle.",
    ],
    niveau: 2,
    discipline: "ski",
    sources: "Ski Utah ; Spyder ; guides techniques de layering.",
  },
  {
    id: "compression-triathlon",
    titre: "Triathlon : compression utile contre compression néfaste",
    chapo:
      "Une combinaison de triathlon est conçue proche du corps, sans devenir une restriction majeure de la respiration ou du mouvement.",
    paragraphes: [
      "La flottabilité apportée par la combinaison peut modifier la position du nageur et réduire la traînée dans certaines conditions. Les fabricants utilisent aussi des épaisseurs variables afin de combiner flottabilité et mobilité.",
      "Une compression excessive du thorax ou une limitation importante des épaules peut au contraire détériorer le confort et le geste. La bonne taille recherche un compromis fonctionnel, pas le serrage maximal.",
    ],
    niveau: 2,
    discipline: "eau-libre",
    sources: "2XU ; Toussaint et al., Medicine & Science in Sports & Exercise, 1989.",
  },
  {
    id: "harnais-longueur-dos",
    titre: "Harnais de kite : la longueur de dos compte aussi",
    chapo: "Un harnais ne se choisit pas uniquement avec une circonférence.",
    paragraphes: [
      "La géométrie du tronc et la hauteur disponible entre bassin et cage thoracique influencent le positionnement du harnais. Le protocole de mesure doit être spécifique au type et au fabricant : certains guides utilisent le tour de taille au nombril, d'autres des repères anatomiques différents.",
      "SILLAGE n'impose donc pas un repère universel sans identifier le référentiel correspondant : il combine tour, hauteur dorsale, bassin et type de harnais.",
    ],
    niveau: 2,
    discipline: "harnais",
    sources: "ION / IKSURFMAG ; King of Watersports ; documentation fabricants.",
  },
  {
    id: "epaisseur-ajustement",
    titre: "Néoprène épais contre néoprène fin : l'épaisseur change l'ajustement",
    chapo:
      "À construction comparable, augmenter l'épaisseur modifie généralement la souplesse ressentie.",
    paragraphes: [
      "Un 5 mm ne se comporte pas comme un 3 mm, même dans une même gamme. Il serait cependant incorrect d'appliquer une loi universelle simple du type « deux fois plus épais = deux fois moins flexible ».",
      "SILLAGE distingue donc épaisseur, matériau, construction et, lorsque disponible, propriété mécanique mesurée.",
    ],
    niveau: 3,
    discipline: "surf",
    sources: "Triathlete ; documentation fabricants de néoprène — valeurs à vérifier.",
  },
  {
    id: "zip",
    titre: "Zip dorsal, frontal ou sans zip : ce que cela change pour le fit",
    chapo:
      "Le système d'entrée modifie l'architecture de la combinaison et peut influencer mobilité, étanchéité et enfilage.",
    paragraphes: [
      "Un zip constitue une zone moins extensible que le néoprène adjacent. Sa longueur et son emplacement influencent donc le comportement mécanique du haut du corps.",
      "Il faut éviter de présenter un système comme supérieur dans toutes les situations : la qualité du patronage, de la fermeture et des joints compte autant que le type de zip.",
    ],
    niveau: 3,
    discipline: "surf",
    sources: "Cleanline Surf ; Boardriders ; guides techniques fabricants.",
  },
  {
    id: "cinq-erreurs-mesure",
    titre: "Se mesurer correctement : les cinq erreurs qui faussent tout",
    chapo: "Les erreurs viennent le plus souvent d'un protocole instable, pas du mètre lui-même.",
    paragraphes: [
      "Un : mauvais repère anatomique. Deux : tension incorrecte du ruban. Trois : ruban non horizontal. Quatre : posture ou respiration non standardisée. Cinq : mesure prise sur des vêtements épais.",
      "Une mesure reproductible est généralement plus utile qu'une mesure prétendument très précise mais obtenue dans des conditions variables. Les seuils de répétabilité se définissent zone par zone, et non par une tolérance universelle.",
    ],
    niveau: 1,
    discipline: "transversal",
    sources: "Protocoles anthropométriques institutionnels ; guides anatomiques.",
  },
  {
    id: "cout-des-retours",
    titre: "Un vêtement mal taillé finit souvent retourné : le vrai coût des retours",
    chapo:
      "La taille et l'ajustement sont régulièrement cités parmi les motifs de retour dans l'habillement en ligne, sans chiffre vérifiable retenu ici.",
    paragraphes: [
      "Les estimations disponibles varient selon le pays, la catégorie, l'échantillon et la méthode d'enquête. Nous ne citons ici aucune estimation chiffrée tant que sa source n'est pas vérifiable : [PLACEHOLDER: information needed — étude, année, échantillon et pays].",
      "Le message reste solide : réduire les erreurs de taille peut avoir un intérêt économique et environnemental, mais toute quantification doit être documentée précisément.",
    ],
    niveau: 2,
    discipline: "transversal",
    sources: "[PLACEHOLDER: information needed — références d'études sur le coût des retours]",
  },
  {
    id: "essayage-et-conseil",
    titre: "Essayage en magasin et conseil en ligne : les combiner intelligemment",
    chapo: "Le magasin et le conseil numérique ne s'opposent pas.",
    paragraphes: [
      "SILLAGE peut réduire l'espace de recherche en comparant mesures, morphologie, usage et données produit. L'essayage physique reste utile, notamment lorsque les matériaux changent de comportement en situation réelle.",
      "L'objectif n'est pas de remplacer l'essayage à tout prix, mais de transformer une recherche aléatoire en validation ciblée.",
    ],
    niveau: 1,
    discipline: "transversal",
    sources: "Guides fabricants ; [PLACEHOLDER: information needed — études sur les retours e-commerce à sourcer]",
  },
  {
    id: "zone-par-zone",
    titre: "Pourquoi SILLAGE raisonne zone par zone",
    chapo:
      "Un vêtement technique ne peut pas toujours être décrit par une seule étiquette de taille.",
    paragraphes: [
      "Un même produit peut être conforme au buste, ajusté à la taille, serré à la cuisse et correct en longueur. Cette combinaison constitue le véritable profil de fit.",
      "SILLAGE utilise quatre verdicts par zone : serré, ajusté, conforme et ample. L'intérêt n'est pas d'exposer un calcul, mais de montrer où se trouve le compromis.",
    ],
    niveau: 2,
    discipline: "lab",
  },
  {
    id: "statique-dynamique",
    titre: "Ajustement statique et ajustement dynamique",
    chapo: "Un équipement qui semble correct debout peut se comporter différemment en mouvement.",
    paragraphes: [
      "Lever les bras, fléchir les genoux, s'accroupir, ramer, nager ou charger un harnais redistribue les tensions. Le fit doit donc être pensé en fonction de l'usage réel.",
      "Cette distinction justifie l'intégration de variables de pratique dans le moteur de recommandation.",
    ],
    niveau: 3,
    discipline: "transversal",
  },
  {
    id: "meme-taille-comportement",
    titre: "Pourquoi deux combinaisons de même taille peuvent se comporter différemment",
    chapo: "La lettre indiquée sur l'étiquette ne décrit qu'une partie de la géométrie du produit.",
    paragraphes: [
      "Patronage, matière, épaisseur, panneaux, coutures, système d'entrée et année de collection peuvent modifier la sensation d'ajustement.",
      "À terme, l'objet de recommandation de SILLAGE doit être le triplet modèle × version × taille, et non la taille seule.",
    ],
    niveau: 3,
    discipline: "transversal",
  },
  {
    id: "donnee-inconnue",
    titre: "Comment SILLAGE traite une donnée qu'il ne connaît pas",
    chapo: "Une absence de donnée est elle-même une information.",
    paragraphes: [
      "Une donnée peut être observée, publiée officiellement, déclarée commercialement, modélisée, interpolée ou absente. Chacun de ces statuts porte un niveau de preuve différent.",
      "Le lecteur doit comprendre pourquoi « nous ne savons pas » peut être une meilleure réponse que « probablement ». Cette transparence est une composante de la confiance.",
    ],
    niveau: 4,
    discipline: "lab",
    limites:
      "Ce que l'on sait : la provenance d'une valeur conditionne sa fiabilité et notre niveau de confiance. Ce que l'on ne sait pas encore : la plupart des marques ne publient pas les mesures du vêtement fini, ce qui limite toute comparaison directe entre produits.",
  },
  {
    id: "apres-sml",
    titre: "Après S, M, L : vers une représentation multidimensionnelle du fit",
    chapo:
      "Les tailles traditionnelles compressent un corps multidimensionnel en une catégorie unique.",
    paragraphes: [
      "SILLAGE cherche à mettre en relation la géométrie du corps, la géométrie du produit, l'usage et le comportement du matériau.",
      "La prochaine évolution du sizing ne consiste probablement pas à créer davantage de lettres, mais à mieux comprendre la compatibilité entre proportions corporelles et produits disponibles.",
    ],
    niveau: 4,
    discipline: "lab",
    limites:
      "Ce que l'on sait : une taille nominale résume mal un corps. Ce que l'on ne sait pas encore : aucune représentation multidimensionnelle du fit ne fait aujourd'hui consensus, et la validation sur morphologies atypiques reste à construire.",
  },
];

/** Programme éditorial annoncé, par discipline et par niveau. Non publié. */
export interface EntreeProgramme {
  discipline: DisciplineFiche;
  niveau: NiveauLecture;
  titre: string;
  resume: string;
  /** 1 = première vague annoncée ; 2 = deuxième vague éditoriale. */
  vague?: 1 | 2;
}

export const PROGRAMME: EntreeProgramme[] = [
  {
    discipline: "surf",
    niveau: 0,
    titre: "Débuter en néoprène : par quoi commencer",
    resume:
      "Vague néoprène du parcours Débuter : combinaison intégrale, shorty, top et accessoires. Prévue, pas encore rédigée.",
    vague: 1,
  },
  {
    discipline: "surf",
    niveau: 1,
    titre: "Votre première combinaison de surf : le guide sans jargon",
    resume: "Rôle d'une combinaison, lecture d'une grille, risque du trop ample.",
  },
  {
    discipline: "surf",
    niveau: 1,
    titre: "3/2, 4/3, 5/4 : quelle épaisseur pour quelle eau ?",
    resume: "Décoder les chiffres selon les conditions, compromis chaleur / souplesse.",
  },
  {
    discipline: "surf",
    niveau: 2,
    titre: "Chest zip, back zip, zip-free : lequel pour votre pratique ?",
    resume: "Mobilité, étanchéité, enfilage et incidence sur le fit.",
  },
  {
    discipline: "surf",
    niveau: 3,
    titre: "Coupe, panneaux et coutures : l'anatomie d'une combi performante",
    resume: "Placement des panneaux, coutures GBS ou étanchées, circulation d'eau.",
  },
  {
    discipline: "surf",
    niveau: 4,
    titre: "Élongation, anisotropie, hystérésis : la physique de l'ajustement",
    resume: "Orientation mécanique du matériau, récupération et fatigue.",
  },
  {
    discipline: "eau-libre",
    niveau: 1,
    titre: "Première combi de triathlon : compression et flottabilité",
    resume: "Pourquoi elle est proche du corps et ce qu'elle apporte à la position.",
  },
  {
    discipline: "eau-libre",
    niveau: 2,
    titre: "Combi autorisée ou non : comprendre les règles de température",
    resume: "Règles World Triathlon à jour selon distance, catégorie et température.",
  },
  {
    discipline: "eau-libre",
    niveau: 3,
    titre: "Panneaux d'épaisseur variable : biomécanique de la nage",
    resume: "Pourquoi certains panneaux sont plus épais au tronc et plus fins aux épaules.",
  },
  {
    discipline: "eau-libre",
    niveau: 4,
    titre: "Traînée active et passive : ce que dit la littérature",
    resume: "Protocoles expérimentaux, sans transformer les résultats en promesse.",
  },
  {
    discipline: "kite",
    niveau: 1,
    titre: "Pourquoi le harnais change la sensation de votre combinaison",
    resume: "Interaction entre néoprène, taille, bassin et pression du harnais.",
  },
  {
    discipline: "kite",
    niveau: 3,
    titre: "Précontrainte du néoprène sous harnais",
    resume: "Vêtement extensible contre équipement semi-rigide.",
  },
  {
    discipline: "ski",
    niveau: 1,
    titre: "Décoder les mm de colonne d'eau et la respirabilité",
    resume: "10K/20K, mm H2O, g/m²/24 h et limites de comparaison.",
  },
  {
    discipline: "ski",
    niveau: 2,
    titre: "Shell ou isolé : choisir selon conditions et layering",
    resume: "Adapter la coque à sa pratique et à son système thermique.",
  },
  {
    discipline: "ski",
    niveau: 3,
    titre: "Membranes et DWR : comment ça marche",
    resume: "Coutures thermosoudées, déperlant et construction de la coque.",
  },
  {
    discipline: "ski",
    niveau: 4,
    titre: "Colonne d'eau : la physique du test hydrostatique",
    resume: "Pression, méthode de test et limites entre laboratoires.",
  },
  {
    discipline: "harnais",
    niveau: 1,
    titre: "Premier harnais : waist, seat ou trapèze ?",
    resume: "Familles, position sur le corps et usages.",
  },
  {
    discipline: "harnais",
    niveau: 2,
    titre: "Soft ou hard shell : répartition de la charge",
    resume: "Rigidité, support, flex et confort.",
  },
  {
    discipline: "harnais",
    niveau: 4,
    titre: "Sizing avancé : arbitrer entre deux tailles",
    resume: "Tour, hauteur dorsale, réglage et discipline, sans règle automatique.",
  },
  {
    discipline: "plongee",
    niveau: 1,
    titre: "Première combi de plongée : humide, semi-étanche, étanche",
    resume: "Familles, rôle thermique et joints.",
  },
  {
    discipline: "plongee",
    niveau: 3,
    titre: "Compression du néoprène en profondeur",
    resume: "Pression hydrostatique, perte d'épaisseur, flottabilité et isolation.",
  },
  {
    discipline: "lab",
    niveau: 4,
    titre: "Peut-on mesurer correctement un corps avec un smartphone ?",
    resume: "Scan, erreur, biais et validation zone par zone.",
  },
  {
    discipline: "lab",
    niveau: 4,
    titre: "Pourquoi les morphologies atypiques sont indispensables à la validation",
    resume: "Biais des jeux de données et couverture de la population cible.",
  },

  // ── Deuxième vague éditoriale : deux contenus par parcours et par discipline.
  {
    discipline: "surf",
    niveau: 1,
    vague: 2,
    titre: "Le test des 60 secondes en cabine : six points à vérifier",
    resume:
      "Cou, aisselles, bas du dos, entrejambe, genoux, chevilles, puis trois mouvements : remplacer « ça me semble serré » par une vérification reproductible.",
  },
  {
    discipline: "surf",
    niveau: 1,
    vague: 2,
    titre: "Cou, poignets, chevilles : où une combinaison doit-elle vraiment plaquer ?",
    resume:
      "Le rôle des interfaces avec l'eau, sans prétendre qu'un nombre de doigts fonctionne pour tous les modèles.",
  },
  {
    discipline: "surf",
    niveau: 2,
    vague: 2,
    titre: "Diagnostiquer le flushing zone par zone",
    resume:
      "Distinguer arrivée ponctuelle d'eau et renouvellement persistant : cou, dos, zip, poignets et chevilles comme carte de diagnostic.",
  },
  {
    discipline: "surf",
    niveau: 2,
    vague: 2,
    titre: "3/2 contre 4/3 : pourquoi l'épaisseur change la sensation de taille",
    resume:
      "Deux combinaisons d'étiquette identique peuvent donner des mobilités différentes selon mousse, laminé et construction.",
  },
  {
    discipline: "surf",
    niveau: 3,
    vague: 2,
    titre: "Panneaux, coutures et précontrainte : lire un patron de combinaison",
    resume:
      "Où passent les coutures, quelles zones se déforment, pourquoi la géométrie compte autant que la matière.",
  },
  {
    discipline: "surf",
    niveau: 3,
    vague: 2,
    titre: "Fit statique contre fit à la rame : construire un protocole d'essai",
    resume: "Comparer debout, bras levés et rame simulée pour objectiver l'aisance dynamique.",
  },
  {
    discipline: "surf",
    niveau: 4,
    vague: 2,
    titre: "Cartographier l'élasticité directionnelle d'un laminé néoprène",
    resume:
      "Deux orientations, longueur de jauge, charge répétée et cycles — sans déduire de coefficient universel.",
  },
  {
    discipline: "surf",
    niveau: 4,
    vague: 2,
    titre: "Mesurer physiquement une gamme de combinaisons : le protocole SILLAGE",
    resume: "Versionner marque, modèle, saison, taille, température, protocole et provenance.",
  },

  {
    discipline: "eau-libre",
    niveau: 1,
    vague: 2,
    titre: "Mettre sa combinaison sans tirer sur les épaules",
    resume:
      "Faire remonter la matière depuis les chevilles et l'entrejambe avant de juger les épaules.",
  },
  {
    discipline: "eau-libre",
    niveau: 1,
    vague: 2,
    titre: "Quatre mesures pour commencer : buste, taille, hanches, hauteur",
    resume:
      "Posture, tension du ruban et répétabilité ; chaque champ explique aussi pourquoi SILLAGE le demande.",
  },
  {
    discipline: "eau-libre",
    niveau: 2,
    vague: 2,
    titre: "Jambes qui coulent : technique, fit ou profil de flottabilité ?",
    resume:
      "Séparer trois phénomènes souvent confondus, sans promettre qu'une combinaison corrige toute position de nage.",
  },
  {
    discipline: "eau-libre",
    niveau: 2,
    vague: 2,
    titre: "Cou et épaules : étanchéité, confort et restriction",
    resume: "Le même mot « serré » désigne des phénomènes fonctionnels différents.",
  },
  {
    discipline: "eau-libre",
    niveau: 3,
    vague: 2,
    titre: "Amplitude d'épaule sous contrainte : un protocole vidéo reproductible",
    resume:
      "Même geste, même caméra, mêmes repères : chercher une différence de mouvement plutôt qu'une sensation.",
  },
  {
    discipline: "eau-libre",
    niveau: 3,
    vague: 2,
    titre: "Répartition des épaisseurs et position du nageur",
    resume:
      "Relier panneaux, flottabilité et mobilité, en séparant biomécanique et claims chronométriques.",
  },
  {
    discipline: "eau-libre",
    niveau: 4,
    vague: 2,
    titre: "Traînée active et passive : lire une étude sans en faire une promesse",
    resume: "Vitesse testée, protocole, échantillon, écart entre traînée et performance finale.",
  },
  {
    discipline: "eau-libre",
    niveau: 4,
    vague: 2,
    titre: "Fatigue gestuelle avec et sans combinaison : proposition de protocole",
    resume:
      "Expérience pilote, mouvement standardisé, effort perçu et métrique vidéo, à valider avec un spécialiste.",
  },

  {
    discipline: "kite",
    niveau: 1,
    vague: 2,
    titre: "Choisir sa combinaison quand on porte un harnais",
    resume:
      "Les zones sous coque et sangles : une combinaison parfaite en surf ne l'est pas automatiquement en kite ou wing.",
  },
  {
    discipline: "kite",
    niveau: 1,
    vague: 2,
    titre: "Les trois mesures à vérifier avant une longue session",
    resume:
      "Taille, hanches et longueur de torse, avec rappel que les repères doivent correspondre au produit choisi.",
  },
  {
    discipline: "kite",
    niveau: 2,
    vague: 2,
    titre: "Pourquoi des plis apparaissent sous votre harnais",
    resume:
      "Excès de matière, placement de la combinaison, position du harnais ou architecture du modèle.",
  },
  {
    discipline: "kite",
    niveau: 2,
    vague: 2,
    titre: "Combi hiver contre combi été : faut-il re-régler le harnais ?",
    resume:
      "Un changement d'épaisseur modifie l'interface externe : le réglage doit être revérifié.",
  },
  {
    discipline: "kite",
    niveau: 3,
    vague: 2,
    titre: "Coque rigide × néoprène : ce que l'on sait, ce qu'il faut mesurer",
    resume: "Séparer propriétés documentées et hypothèses sur l'interaction mécanique locale.",
  },
  {
    discipline: "kite",
    niveau: 3,
    vague: 2,
    titre: "Longueur du torse et migration du harnais",
    resume:
      "Le problème géométrique et un protocole d'observation sous traction, sans ratio anatomique magique.",
  },
  {
    discipline: "kite",
    niveau: 4,
    vague: 2,
    titre: "Cartographier les pressions sous un harnais",
    resume:
      "Capteurs de pression et effort reproductible pour tester les claims de répartition de charge.",
  },
  {
    discipline: "kite",
    niveau: 4,
    vague: 2,
    titre: "Vers une recommandation système : combinaison × harnais × morphologie × usage",
    resume: "Deux équipements interdépendants plutôt que deux recommandations isolées.",
  },

  {
    discipline: "ski",
    niveau: 1,
    vague: 2,
    titre: "S'habiller pour skier sans surtailler sa veste",
    resume:
      "Construire le système de couches avant de choisir la taille, et visualiser l'espace fonctionnel nécessaire.",
  },
  {
    discipline: "ski",
    niveau: 1,
    vague: 2,
    titre: "Pantalon : mesurer taille, hanches, cuisse et entrejambe",
    resume: "Tutoriel anatomique simple, avec test en flexion après la mesure.",
  },
  {
    discipline: "ski",
    niveau: 2,
    vague: 2,
    titre: "Layering réel contre essayage en tee-shirt",
    resume:
      "Même personne, même veste, trois configurations de couches : comment l'espace fonctionnel change.",
  },
  {
    discipline: "ski",
    niveau: 2,
    vague: 2,
    titre: "Accroupissement, flexion, bras levés : le test dynamique avant achat",
    resume:
      "Une checklist de mouvements plus représentative qu'une pose immobile devant un miroir.",
  },
  {
    discipline: "ski",
    niveau: 3,
    vague: 2,
    titre: "Coupe articulée : ce qui se passe aux genoux et aux hanches",
    resume: "Géométrie préformée et relation entre coupe, entrejambe et amplitude.",
  },
  {
    discipline: "ski",
    niveau: 3,
    vague: 2,
    titre: "Membrane, DWR et ventilation : ce que le fit change — et ce qu'il ne change pas",
    resume:
      "Éviter la confusion entre propriétés du textile et fonctionnement du vêtement complet.",
  },
  {
    discipline: "ski",
    niveau: 4,
    vague: 2,
    titre: "Pression hydrostatique et zones de pression réelles sur un vêtement",
    resume:
      "S'asseoir mouillé ou porter une sangle crée une sollicitation locale différente du tissu libre.",
  },
  {
    discipline: "ski",
    niveau: 4,
    vague: 2,
    titre: "Du mannequin statique au mannequin numérique de mouvement",
    resume:
      "Comment une future couche 3D testerait l'enveloppe de mouvement, pas seulement la posture debout.",
  },

  {
    discipline: "harnais",
    niveau: 1,
    vague: 2,
    titre: "Mesurer tour et longueur de dos sans jargon",
    resume:
      "Protocole toujours nommé avec sa provenance (par exemple « protocole ION C7 → crête iliaque »), jamais comme norme universelle.",
  },
  {
    discipline: "harnais",
    niveau: 1,
    vague: 2,
    titre: "Ceinture ou culotte : quelles zones doivent rester stables ?",
    resume:
      "Visualiser ce qui doit être maintenu et où passent les sangles selon le type de harnais.",
  },
  {
    discipline: "harnais",
    niveau: 2,
    vague: 2,
    titre: "Mon harnais remonte : diagnostic en cinq causes",
    resume:
      "Taille, géométrie, réglage, épaisseur de combinaison et direction de traction, avant de conclure « prenez plus petit ».",
  },
  {
    discipline: "harnais",
    niveau: 2,
    vague: 2,
    titre: "Spreader bar : centrage, largeur et plage de réglage",
    resume: "Pourquoi la taille de coque et la barre forment un ensemble.",
  },
  {
    discipline: "harnais",
    niveau: 3,
    vague: 2,
    titre: "Soft shell contre hard shell : parler de rigidité sans répéter le marketing",
    resume:
      "Identifier les claims fabricants, puis les mesures nécessaires pour les comparer proprement.",
  },
  {
    discipline: "harnais",
    niveau: 3,
    vague: 2,
    titre: "Back length et morphologie dorsale : mesure, observation, hypothèse",
    resume:
      "Séparer la mesure géométrique de l'affirmation biomécanique et signaler la validation manquante.",
  },
  {
    discipline: "harnais",
    niveau: 4,
    vague: 2,
    titre: "Pressure mapping : construire un test reproductible",
    resume:
      "Capteurs, traction, position, taille de barre, échauffement et répétitions — future signature SILLAGE Lab.",
  },
  {
    discipline: "harnais",
    niveau: 4,
    vague: 2,
    titre: "Modéliser traction × hook point × morphologie",
    resume: "Formaliser les variables sans prétendre disposer d'une loi biomécanique validée.",
  },

  {
    discipline: "plongee",
    niveau: 1,
    vague: 2,
    titre: "Humide, semi-étanche, étanche : le fit ne joue pas le même rôle",
    resume: "Trois philosophies d'équipement, trois logiques de volume et d'interface.",
  },
  {
    discipline: "plongee",
    niveau: 1,
    vague: 2,
    titre: "Pourquoi une combinaison serrée à terre ne dit pas tout",
    resume:
      "Environnement, profondeur, mobilité et écart entre sensation d'essayage et usage réel.",
  },
  {
    discipline: "plongee",
    niveau: 2,
    vague: 2,
    titre: "3, 5 ou 7 mm : chaleur, mobilité et profondeur",
    resume:
      "Remplacer la table température/épaisseur par les compromis et la compression sous pression.",
  },

  {
    discipline: "lab",
    niveau: 1,
    vague: 2,
    titre: "Claim marketing ou mesure physique ? Cinq questions à poser",
    resume:
      "Qui a testé ? Avec quel protocole ? Sur quel matériau ? Dans quelles conditions ? Avec quelle unité ?",
  },
  {
    discipline: "lab",
    niveau: 2,
    vague: 2,
    titre: "Tester l'étanchéité d'une couture sans prétendre tester toute la combinaison",
    resume: "La notion de variable contrôlée et les limites d'un petit banc d'essai.",
  },
  {
    discipline: "lab",
    niveau: 2,
    vague: 2,
    titre: "Pourquoi l'épaisseur seule ne prédit pas la souplesse",
    resume:
      "Mousse, textile, lamination, orientation et construction rendent les comparaisons « 3 mm contre 3 mm » insuffisantes.",
  },
  {
    discipline: "lab",
    niveau: 3,
    vague: 2,
    titre: "Traction dans deux directions : un premier test d'anisotropie",
    resume:
      "Longueur de jauge, orientation, charge et répétition ; publier deux courbes plutôt qu'un adjectif.",
  },
  {
    discipline: "lab",
    niveau: 3,
    vague: 2,
    titre: "UV, sel, chlore : un protocole de vieillissement comparatif",
    resume: "Cycles documentés et mesure avant/après plutôt qu'une observation visuelle.",
  },
  {
    discipline: "lab",
    niveau: 4,
    vague: 2,
    titre: "Hystérésis et cycles de charge : quand le matériau ne revient pas au même état",
    resume:
      "La boucle force-allongement et pourquoi un test unique ne décrit pas la fatigue du matériau.",
  },
  {
    discipline: "lab",
    niveau: 4,
    vague: 2,
    titre: "Construire le banc SILLAGE : force, allongement, température, vidéo synchronisée",
    resume:
      "Instrumentation, provenance, répétabilité et future calibration des tolérances par modèle.",
  },
];

/** Cadence de production estimée par parcours de lecture (planification interne). */
export const TEMPS_PRODUCTION: {
  niveau: NiveauLecture;
  article: string;
  video: string;
  short: string;
}[] = [
  { niveau: 1, article: "6–8 h", video: "12–18 h", short: "2–4 h" },
  { niveau: 2, article: "8–12 h", video: "16–24 h", short: "3–5 h" },
  { niveau: 3, article: "12–18 h", video: "24–36 h", short: "4–6 h" },
  { niveau: 4, article: "18–26 h", video: "32–48 h", short: "5–8 h" },
];

export const NOTE_TEMPS_PRODUCTION =
  "Estimations de planification SILLAGE, non des références de marché : recherche, vérification des sources, rédaction, revue technique et édition comprises ; droits tiers, déplacements, location de laboratoire et revue juridique exclus. Pour les contenus les plus techniques, ces durées couvrent le contenu, pas la conception d'un protocole scientifique complet.";

/** Calendrier éditorial proposé sur six mois (Europe / hémisphère nord). */
export interface MoisEditorial {
  mois: string;
  priorite: string;
  production: string;
  video: string;
}

export const CALENDRIER: MoisEditorial[] = [
  {
    mois: "Septembre",
    priorite: "Surf, kite/wing, fondations mesure",
    production:
      "Mesure buste/taille/hanches, choix combinaison et harnais, test cabine — 4 articles.",
    video: "Mesure guidée buste–taille–hanches",
  },
  {
    mois: "Octobre",
    priorite: "Néoprène froid, flushing, harnais",
    production:
      "Flushing, épaisseur et fit, cou et interfaces, harnais qui remonte — 4 à 5 articles.",
    video: "Diagnostic flushing",
  },
  {
    mois: "Novembre",
    priorite: "Ski / snowboard, entrée hiver",
    production:
      "Layering, pantalon (hanches, cuisse), fit dynamique, shell contre isolé — 5 articles.",
    video: "Mesures cuisse–entrejambe–bras–dos",
  },
  {
    mois: "Décembre",
    priorite: "Ski avancé et harnais",
    production: "Membrane et DWR, coupes articulées, réglage sous charge — 4 articles.",
    video: "Diagnostic de fit du harnais",
  },
  {
    mois: "Janvier",
    priorite: "Matériaux et plongée future",
    production: "Compression du néoprène, tests de traction, provenance, R&D — 4 articles.",
    video: "Anisotropie du néoprène",
  },
  {
    mois: "Février",
    priorite: "Triathlon / eau libre, pré-saison",
    production:
      "Fit des épaules, flottabilité, mesure tri, mise à jour des règles de compétition — 5 articles.",
    video: "Biomécanique de l'épaule en nage",
  },
];

export const NOTE_CALENDRIER =
  "Proposition éditoriale saisonnière pour l'Europe et l'hémisphère nord, à ajuster avec les données réelles de trafic et de conversion. Cadence visée : quatre articles de fond et une vidéo longue par mois, chaque vidéo produisant deux formats courts.";

export const NOTE_SOURCES =
  "Hiérarchie des sources : A — travaux scientifiques, normes et institutions ; B — documentation technique officielle des fabricants, valable pour décrire un produit mais pas comme vérité générale ; C — presse spécialisée, distributeurs et retours terrain, à trianguler. Les références citées constituent une base éditoriale : chaque chiffre reste à vérifier en source primaire avant publication.";

export const NOTE_PLONGEE =
  "La plongée est une verticale éditoriale future : elle ne fait pas encore partie du périmètre de recommandation de SILLAGE.";

export function ficheParId(id: string): Fiche | undefined {
  return FICHES.find((f) => f.id === id);
}

export function libelleDiscipline(id: DisciplineFiche): string {
  return DISCIPLINES.find((d) => d.id === id)?.libelle ?? id;
}
