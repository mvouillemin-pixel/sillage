/**
 * SILLAGE — couche disponibilité et prix.
 *
 * LES DONNÉES COMMERCIALES N'ENTRENT JAMAIS DANS LE CALCUL DE COUPE.
 * Ce module est strictement en aval du moteur : il ne décrit que des modèles
 * déjà validés sur la morphologie, et n'expose aucune fonction permettant
 * d'interroger le catalogue entier ni d'interroger par marque seule.
 *
 * Le module ne produit aucun texte destiné à l'utilisateur (doc 02, §1) :
 * il renvoie uniquement des codes, mis en mots par l'i18n.
 *
 * Le jeu de démonstration historique n'est pas migré : la base démarre vide.
 * Aucune offre sans prix n'est stockée — une offre sans prix n'est pas une offre.
 */

import type { Offre, Recommandation } from "./types";

/** Fenêtre de fraîcheur d'un relevé de prix, en heures (voir parametres.ts). */
export const FENETRE_FRAICHEUR_HEURES = 48;

/** Le module est désactivé par défaut : `VITE_SILLAGE_OFFRES=on` pour l'activer. */
function moduleActif(): boolean {
  return (import.meta.env["VITE_SILLAGE_OFFRES"] ?? "off") === "on";
}

/**
 * Registre des offres. Volontairement vide : aucune offre de démonstration,
 * d'exemple ou de remplissage n'est créée. Il sera alimenté par un flux réel.
 */
const OFFRES: readonly Offre[] = [];

export type Fraicheur = "fraiche" | "perimee";

/** Offre restituée avec son état de fraîcheur. Aucun texte, uniquement des codes. */
export interface OffreEvaluee {
  offre: Offre;
  fraicheur: Fraicheur;
}

export interface OptionsOffres {
  /** Horodatage de référence pour le calcul de fraîcheur. */
  maintenant?: Date;
  /** Restreint à une taille parmi celles portées par la recommandation. */
  taille?: string;
}

/** Classe un relevé selon l'unique fenêtre de fraîcheur. */
export function fraicheur(offre: Offre, maintenant: Date = new Date()): Fraicheur {
  const releve = Date.parse(offre.releveLe);
  if (Number.isNaN(releve)) return "perimee";
  const heures = (maintenant.getTime() - releve) / 3_600_000;
  return heures >= 0 && heures <= FENETRE_FRAICHEUR_HEURES ? "fraiche" : "perimee";
}

/** Tailles portées par la sortie du moteur. */
function taillesDe(recommandation: Recommandation): string[] {
  const t = recommandation.tailleRecommandee;
  return Array.isArray(t) ? [...t] : [t];
}

/**
 * Offres correspondant strictement à la marque, au modèle et à la ou les tailles
 * portées par la recommandation. Toute autre combinaison renvoie un tableau vide.
 */
export function offresPour(
  recommandation: Recommandation,
  options: OptionsOffres = {},
): OffreEvaluee[] {
  if (!moduleActif()) return [];
  const modeleId = recommandation.modeleId;
  if (!modeleId) return [];

  let tailles = taillesDe(recommandation);
  if (options.taille !== undefined) {
    tailles = tailles.includes(options.taille) ? [options.taille] : [];
  }
  if (tailles.length === 0) return [];

  const maintenant = options.maintenant ?? new Date();

  return OFFRES.filter(
    (o) =>
      o.marqueId === recommandation.marqueId &&
      o.modeleId === modeleId &&
      tailles.includes(o.taille),
  ).map((offre) => ({ offre, fraicheur: fraicheur(offre, maintenant) }));
}

/**
 * Meilleur prix : uniquement si toutes les offres sont fraîches, qu'au moins
 * deux revendeurs distincts sont présents et que la devise est unique.
 * La comparaison porte strictement sur le prix : ni commission, ni statutLien,
 * ni revendeurId n'influencent le résultat.
 */
export function meilleureOffre(
  offres: OffreEvaluee[],
  maintenant: Date = new Date(),
): Offre | null {
  if (offres.length < 2) return null;
  if (offres.some((o) => (o.fraicheur ?? fraicheur(o.offre, maintenant)) !== "fraiche")) return null;

  const devises = new Set(offres.map((o) => o.offre.devise));
  if (devises.size !== 1) return null;

  const revendeurs = new Set(offres.map((o) => o.offre.revendeurId));
  if (revendeurs.size < 2) return null;

  let meilleur = offres[0]!.offre;
  for (const { offre } of offres) {
    if (offre.prix < meilleur.prix) meilleur = offre;
  }
  return meilleur;
}
