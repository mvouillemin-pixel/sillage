/**
 * COUCHE ÉDITORIALE — SILLAGE.
 *
 * Le moteur ne lit rien de ce fichier : il s'agit uniquement de texte affiché
 * à côté du résultat. Les marques publient presque toutes UNE grille maîtresse
 * par genre et font porter la variation entre modèles par des descripteurs de
 * coupe et des consignes textuelles. Ces descripteurs sont repris ici tels
 * qu'ils sont publiés, avec leur statut de source (relevé du 2026-08-06).
 *
 * statut :
 *  - "officiel"   : formulation publiée par la marque
 *  - "secondaire" : distributeur, test ou retour terrain, non chiffré
 */

export type StatutNote = "officiel" | "secondaire";

export interface NoteMarque {
  /** Vocabulaire de coupe publié par la marque, normalisé en une phrase. */
  coupe?: string;
  /** Consigne d'ajustement publiée ou constatée. */
  consigne?: string;
  statut: StatutNote;
}

export const NOTES_MARQUE: Record<string, NoteMarque> = {
  "o-neill": {
    coupe: "Grille unique pour toute la gamme, avec variantes Short et Tall.",
    consigne:
      "La marque conseille de prendre la taille au-dessus lorsque vos mesures sont en haut de fourchette. Les distributeurs signalent une coupe ressentie plutôt petite chez les débutants.",
    statut: "officiel",
  },
  xcel: {
    coupe: "Grille unique par genre ; les gammes Drylock, Infiniti, Axis et Comp diffèrent par la construction, pas par les mesures.",
    consigne: "Ressenti d'épaules plus contraint sur les modèles les plus épais. Non chiffré par la marque.",
    statut: "secondaire",
  },
  "rip-curl": {
    coupe: "Grille unique. Coupe réputée près du corps.",
    consigne:
      "La Flashbomb, à fermeture frontale, est rapportée plus serrée aux épaules que l'E-Bomb. Écart constaté par les pratiquants, non publié par la marque.",
    statut: "secondaire",
  },
  manera: {
    coupe: "Grille unique partagée par toute la gamme, avec inter-tailles Tall et Short.",
    consigne:
      "Consigne officielle : en bas de fourchette de poids la combinaison sera plutôt lâche, en haut de fourchette plutôt serrée.",
    statut: "officiel",
  },
  "fourth-element": {
    consigne:
      "Consigne officielle : les tailles sont conçues serrées ; la marque recommande d'envisager la taille au-dessus pour un porté plus confortable.",
    statut: "officiel",
  },
  cressi: {
    coupe: "Grilles publiées par type de produit (intégrale, shorty, étanche), pas par modèle.",
    statut: "officiel",
  },
  zone3: {
    coupe:
      "Deux familles d'ajustement assumées : comfort fit (Advance, Vision) et performance fit (Aspire, Vanquish-X).",
    consigne:
      "Seule marque de notre relevé à publier des grilles chiffrées différentes selon le modèle : les Glide et Active-Flex ont leur propre tableau. Une même personne peut donc être S en Vanquish-X et M en Glide. Notre recommandation porte sur la grille principale.",
    statut: "officiel",
  },
  huub: {
    consigne:
      "Politique de marque constante : privilégier le poids sur la stature et, en cas d'hésitation, prendre la taille au-dessus.",
    statut: "officiel",
  },
  "2xu": {
    coupe: "Grilles publiées par ligne et par version, pas par modèle.",
    consigne: "Ajustement serré à sec, qui se détend légèrement une fois mouillé.",
    statut: "officiel",
  },
  mystic: {
    coupe: "Construction rigide ou souple selon le modèle, ce qui change le serrage ressenti.",
    consigne:
      "La plage de tailles disponible varie selon le modèle ; la marque renvoie explicitement à la page produit.",
    statut: "officiel",
  },
  "686": {
    coupe:
      "Coupes publiées par modèle : Slim, Regular, Relaxed, Oversized pour les hauts ; Modern, Articulated, Tailored pour les bas.",
    consigne:
      "Consigne officielle : si poitrine et taille désignent deux tailles différentes, suivre la poitrine sur une veste ; les hanches sont le meilleur indicateur sur un bas.",
    statut: "officiel",
  },
  "the-north-face": {
    coupe: "Coupes publiées par modèle : Slim, Standard, Relaxed, Oversized.",
    consigne: "La marque avertit elle-même que l'ajustement varie d'un modèle à l'autre.",
    statut: "officiel",
  },
  arcteryx: {
    coupe: "Coupes publiées par modèle : Next-to-Skin, Trim, Regular, Relaxed.",
    consigne:
      "La marque précise que sa grille ne reflète pas les spécificités de chaque pièce. Une coupe Trim laisse peu de place pour une doudoune en dessous.",
    statut: "officiel",
  },
  "arc-teryx": {
    coupe: "Coupes publiées par modèle : Next-to-Skin, Trim, Regular, Relaxed.",
    consigne:
      "La marque précise que sa grille ne reflète pas les spécificités de chaque pièce. Une coupe Trim laisse peu de place pour une doudoune en dessous.",
    statut: "officiel",
  },
  "helly-hansen": {
    coupe: "Coupes publiées par modèle : Slim, Regular, Standard, Relaxed, Oversized.",
    consigne: "Coupe rapportée généreuse, pensée pour le port de couches. Constat distributeur.",
    statut: "secondaire",
  },
};

export function noteMarque(marqueId: string): NoteMarque | undefined {
  return NOTES_MARQUE[marqueId];
}

/* ------------------------------------------------------------------ Repères */

export interface Article {
  id: string;
  titre: string;
  chapo: string;
  paragraphes: string[];
}

export const ARTICLES: Article[] = [
  {
    id: "une-grille-par-marque",
    titre: "Pourquoi une marque publie une seule grille pour toute sa gamme",
    chapo:
      "Presque toutes les marques de nos disciplines publient une grille maîtresse par genre, et non une grille par modèle.",
    paragraphes: [
      "Sur les marques de notre corpus vérifiées directement ([PLACEHOLDER: information needed — nombre exact de marques vérifiées et date du relevé]), une seule publie des tableaux de mesures corporelles réellement différents selon le modèle : Zone3, pour ses combinaisons Glide et Active-Flex. Toutes les autres appliquent le même tableau à l'ensemble de leur gamme.",
      "La variation entre modèles existe pourtant, et elle est réelle. Simplement, les marques la communiquent autrement : par un vocabulaire de coupe, par une consigne d'ajustement, parfois par une simple phrase sur la page produit.",
      "C'est la raison pour laquelle notre recommandation part de la grille officielle, puis affiche à côté ce que la marque dit de la coupe du modèle. Nous ne fusionnons pas les deux : un chiffre relevé et une intention de coupe ne se valent pas.",
    ],
  },
  {
    id: "vocabulaire-des-coupes",
    titre: "Le vocabulaire des coupes, et ce qu'il signifie vraiment",
    chapo: "Slim, Regular, Relaxed, Trim, comfort fit, performance fit : ces mots sont officiels et exploitables.",
    paragraphes: [
      "En montagne, les termes reviennent d'une marque à l'autre. Slim ou Trim : coupe près du corps, prévue pour une première couche et une couche légère. Regular ou Standard : de la place pour se superposer sans flotter. Relaxed et Oversized : volume assumé, prévu pour des couches épaisses ou pour le style.",
      "En néoprène, le vocabulaire est plus rare mais plus tranché. Zone3 distingue une coupe confort, plus droite au niveau du tronc, d'une coupe performance qui privilégie le geste. Fourth Element annonce des tailles conçues serrées. Huub conseille systématiquement la taille au-dessus.",
      "Une conséquence pratique : une même taille nominale ne veut pas dire le même vêtement. Si vous hésitez entre deux tailles, la coupe déclarée du modèle tranche plus sûrement qu'un centimètre de différence dans la grille.",
    ],
  },
  {
    id: "ce-que-la-grille-ne-dit-pas",
    titre: "Ce qu'une grille de tailles ne dit pas",
    chapo: "Une grille donne des bandes de mesures corporelles. Elle ne donne ni la matière, ni l'élasticité, ni les panneaux.",
    paragraphes: [
      "Deux combinaisons couvrant la même bande de tour de poitrine peuvent se porter très différemment selon l'épaisseur du néoprène, l'élasticité de la matière et le découpage des panneaux. [PLACEHOLDER: information needed — source vérifiable d'une comparaison de panneaux entre deux modèles de marques différentes]",
      "Presque aucune marque de nos disciplines ne publie les mesures du vêtement fini. C'est pour cette raison que nous ne prétendons pas comparer des vêtements entre eux : nous comparons votre corps aux bandes que les marques publient, et nous nommons chaque zone que nous ne pouvons pas évaluer.",
      "Quand une zone n'est pas publiée par la marque, elle n'est pas oubliée : elle est déclarée. C'est le seul traitement honnête d'une donnée absente.",
    ],
  },
  {
    id: "bien-mesurer",
    titre: "Bien se mesurer : cinq règles qui changent le résultat",
    chapo: "Un ruban mal tenu déplace la recommandation d'une taille entière. Les zones déterminantes se mesurent à la main.",
    paragraphes: [
      "Un : posez le ruban sans le serrer. La tension est la première source d'erreur, avant même l'emplacement.",
      "Deux : gardez le ruban horizontal, sur toutes les circonférences de tronc. Un ruban qui plonge dans le dos ajoute plusieurs centimètres.",
      "Trois : mesurez en fin d'expiration, sans bloquer la respiration ni gonfler la poitrine.",
      "Quatre : mesurez sur peau nue ou sur un sous-vêtement fin, jamais par-dessus une polaire.",
      "Cinq : refaites la mesure une seconde fois. Si les deux valeurs diffèrent de plus d'un centimètre, prenez la plus grande et signalez-le : mieux vaut une mesure prudente qu'une mesure fausse.",
    ],
  },
  {
    id: "debuter",
    titre: "Vous débutez ? Trois repères avant d'acheter",
    chapo: "La bonne taille dépend d'abord de l'usage, ensuite de la marque.",
    paragraphes: [
      "En eau froide, une combinaison trop ample laisse circuler l'eau et vous refroidit plus vite qu'une combinaison un peu juste. En eau tempérée, l'inverse est vrai : une pièce trop serrée fatigue les épaules sur une longue session.",
      "En montagne, décidez d'abord ce que vous portez dessous. Une coque prévue pour une seule couche fine et une coque prévue pour une doudoune ne se choisissent pas dans la même taille, même chez la même marque.",
      "Enfin, la fréquence compte. Pour quelques sorties par an, privilégiez le confort d'enfilage. Pour une pratique hebdomadaire, un ajustement plus proche du corps se justifie : la matière se détend à l'usage.",
    ],
  },
];

export function trouverArticle(id: string): Article | undefined {
  return ARTICLES.find((a) => a.id === id);
}
