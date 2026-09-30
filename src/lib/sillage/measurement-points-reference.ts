/**
 * SILLAGE — Référentiel de vocabulaire de mesure étendu.
 *
 * Source : fiche de commande sur-mesure de la marque japonaise July Wetsuits.
 *
 * IMPORTANT — statut de cette donnée :
 * Ce référentiel N'EST PAS une grille de tailles de marque et ne doit PAS être
 * ajouté au corpus de grilles de tailles existant. C'est un document de commande
 * sur-mesure nominatif pour un client individuel, sans correspondance taille
 * standard (S/M/L). Il sert uniquement de référence de vocabulaire et de
 * granularité de mesure — à ne jamais afficher comme "grille de taille
 * July Wetsuits" dans l'interface utilisateur.
 *
 * Usages :
 * 1. Enrichir le protocole de mesure interne (liste des points de mesure
 *    possibles, au-delà du sous-ensemble actuellement utilisé par le moteur).
 * 2. Servir de base terminologique FR/JP pour un futur protocole de mesure
 *    "sur-mesure avancé" (potentiellement en Phase 2, pas dans le MVP actuel).
 *
 * NOTE DE FIABILITÉ : les lignes 07 et 22 proviennent d'une photo d'écran
 * partiellement floue et n'ont pas pu être vérifiées à 100 % contre le document
 * source original. Le kanji de la ligne 22 (裄丈 vs une variante 桁丈 relevée
 * dans une transcription intermédiaire) doit être confirmé avant tout usage en
 * production. Ne pas traiter ces deux lignes comme fiables sans vérification
 * humaine.
 */

import type { ZoneId } from "./types";

export interface PointDeMesureReference {
  /** Identifiant numérique tel qu'il apparaît sur la fiche source. */
  id: number;
  /** Terme japonais original. */
  termeJaponais: string;
  /** Traduction française fonctionnelle (non destinée à l'affichage public). */
  traductionFrancaise: string;
  /** Vrai uniquement si le point est déjà câblé dans le moteur de scoring actuel. */
  utiliseActuellement: boolean;
  /**
   * Zone SILLAGE correspondante, lorsqu'elle existe.
   * Certains points sont plus fins qu'une zone moteur et n'ont donc pas de
   * correspondance directe à ce stade.
   */
  zoneSillage?: ZoneId;
  /**
   * Commentaire interne sur la granularité ou la fiabilité du point.
   * Ne pas exposer publiquement sans relecture.
   */
  noteInterne?: string;
}

export const POINTS_DE_MESURE_REFERENCE: PointDeMesureReference[] = [
  {
    id: 1,
    termeJaponais: "身長",
    traductionFrancaise: "Taille (hauteur)",
    utiliseActuellement: true,
    zoneSillage: "taille_totale",
  },
  {
    id: 2,
    termeJaponais: "体重",
    traductionFrancaise: "Poids",
    utiliseActuellement: true,
    zoneSillage: "poids",
  },
  {
    id: 3,
    termeJaponais: "総丈",
    traductionFrancaise: "Longueur totale",
    utiliseActuellement: false,
    noteInterne:
      "Granularité supérieure à la longueur de torse actuelle. Réserve pour sur-mesure avancé.",
  },
  {
    id: 5,
    termeJaponais: "股下",
    traductionFrancaise: "Entrejambe / longueur intérieure de jambe",
    utiliseActuellement: true,
    zoneSillage: "entrejambe",
  },
  {
    id: 7,
    termeJaponais: "背丈",
    traductionFrancaise: "Longueur de dos",
    utiliseActuellement: true,
    zoneSillage: "longueur_dos",
    noteInterne:
      "FIABILITÉ À VÉRIFIER : provenant d'une photo d'écran partiellement floue. Confirmer le kanji et le protocole avant usage en production.",
  },
  {
    id: 8,
    termeJaponais: "首囲",
    traductionFrancaise: "Tour de cou",
    utiliseActuellement: true,
    zoneSillage: "cou",
  },
  {
    id: 9,
    termeJaponais: "上胸囲",
    traductionFrancaise: "Tour du haut de poitrine",
    utiliseActuellement: false,
    noteInterne:
      "Plus fin que la zone 'poitrine' actuelle. Utile pour pièces hautes de gamme ou morphologies atypiques.",
  },
  {
    id: 10,
    termeJaponais: "胸囲",
    traductionFrancaise: "Tour de poitrine",
    utiliseActuellement: true,
    zoneSillage: "poitrine",
  },
  {
    id: 11,
    termeJaponais: "腹囲",
    traductionFrancaise: "Tour de ventre / tour abdominal",
    utiliseActuellement: false,
    noteInterne:
      "Différent du tour de taille (créature naturelle) et du tour de taille aux crêtes iliaques.",
  },
  {
    id: 12,
    termeJaponais: "下腹囲",
    traductionFrancaise: "Tour du bas-ventre",
    utiliseActuellement: false,
    noteInterne: "Réserve de granularité abdominale pour le sur-mesure avancé.",
  },
  {
    id: 13,
    termeJaponais: "尻囲",
    traductionFrancaise: "Tour de hanches / bassin",
    utiliseActuellement: true,
    zoneSillage: "hanches",
  },
  {
    id: 14,
    termeJaponais: "大腿最大囲",
    traductionFrancaise: "Tour maximal de cuisse",
    utiliseActuellement: true,
    zoneSillage: "cuisse",
  },
  {
    id: 15,
    termeJaponais: "太モモ中間囲",
    traductionFrancaise: "Tour de mi-cuisse",
    utiliseActuellement: false,
    noteInterne: "Granularité intermédiaire non exploitée par le moteur MVP.",
  },
  {
    id: 16,
    termeJaponais: "膝上囲",
    traductionFrancaise: "Tour au-dessus du genou",
    utiliseActuellement: false,
    noteInterne: "Réserve pour pantalons techniques ou sur-mesure.",
  },
  {
    id: 17,
    termeJaponais: "膝下囲",
    traductionFrancaise: "Tour sous le genou",
    utiliseActuellement: false,
    noteInterne: "Réserve pour pantalons techniques ou sur-mesure.",
  },
  {
    id: 18,
    termeJaponais: "フクラハギ囲",
    traductionFrancaise: "Tour de mollet",
    utiliseActuellement: false,
    noteInterne: "Non câblé dans le moteur actuel.",
  },
  {
    id: 19,
    termeJaponais: "足首囲",
    traductionFrancaise: "Tour de cheville",
    utiliseActuellement: true,
    zoneSillage: "cheville",
  },
  {
    id: 20,
    termeJaponais: "スネ長",
    traductionFrancaise: "Longueur du tibia",
    utiliseActuellement: false,
    noteInterne: "Complément de l'entrejambe pour le sur-mesure avancé.",
  },
  {
    id: 21,
    termeJaponais: "肩幅",
    traductionFrancaise: "Largeur d'épaules",
    utiliseActuellement: true,
    zoneSillage: "epaules",
  },
  {
    id: 22,
    termeJaponais: "裄丈",
    traductionFrancaise: "Longueur encolure-poignet",
    utiliseActuellement: false,
    noteInterne:
      "FIABILITÉ À VÉRIFIER : provenant d'une photo d'écran partiellement floue. Le kanji 裄丈 doit être confirmé (variante 桁丈 relevée dans une transcription intermédiaire). Protocole différent de la longueur de bras SILLAGE (acromion-poignet).",
  },
  {
    id: 23,
    termeJaponais: "袖丈",
    traductionFrancaise: "Longueur de manche",
    utiliseActuellement: false,
    noteInterne:
      "Protocole potentiellement différent de la longueur de bras actuelle (acromion-poignet).",
  },
  {
    id: 24,
    termeJaponais: "腕付け根囲",
    traductionFrancaise: "Tour d'emmanchure / tour à la base du bras",
    utiliseActuellement: false,
    noteInterne: "Réserve pour pièces à manches raglan ou sur-mesure.",
  },
  {
    id: 25,
    termeJaponais: "上大腕囲",
    traductionFrancaise: "Tour du haut du bras",
    utiliseActuellement: false,
    noteInterne: "Plus fin que le tour de bras / biceps actuel.",
  },
  {
    id: 26,
    termeJaponais: "大腕囲",
    traductionFrancaise: "Tour de bras / biceps",
    utiliseActuellement: true,
    zoneSillage: "biceps",
  },
  {
    id: 27,
    termeJaponais: "肘囲",
    traductionFrancaise: "Tour de coude",
    utiliseActuellement: false,
    noteInterne: "Non câblé dans le moteur actuel.",
  },
  {
    id: 28,
    termeJaponais: "肘下囲",
    traductionFrancaise: "Tour sous le coude / avant-bras",
    utiliseActuellement: false,
    noteInterne: "Non câblé dans le moteur actuel.",
  },
  {
    id: 29,
    termeJaponais: "手首囲",
    traductionFrancaise: "Tour de poignet",
    utiliseActuellement: false,
    noteInterne: "Réserve pour manchettes et sur-mesure.",
  },
  {
    id: 30,
    termeJaponais: "頭囲",
    traductionFrancaise: "Tour de tête",
    utiliseActuellement: false,
    noteInterne: "Réserve pour accessoires (capuche, cagoule, casque).",
  },
  {
    id: 31,
    termeJaponais: "足長",
    traductionFrancaise: "Longueur de pied",
    utiliseActuellement: false,
    noteInterne: "Réserve pour chaussons et sur-mesure.",
  },
];

/** Ensemble des points déjà exploités par le moteur de scoring actuel. */
export const POINTS_UTILISES_ACTUELLEMENT = POINTS_DE_MESURE_REFERENCE.filter(
  (p) => p.utiliseActuellement,
);

/** Ensemble des points constitutant la réserve de granularité (Phase 2 / sur-mesure avancé). */
export const POINTS_RESERVE_FUTURE = POINTS_DE_MESURE_REFERENCE.filter(
  (p) => !p.utiliseActuellement,
);

/** Recherche d'un point par son identifiant numérique July Wetsuits. */
export function trouverPointDeMesure(id: number): PointDeMesureReference | undefined {
  return POINTS_DE_MESURE_REFERENCE.find((p) => p.id === id);
}
