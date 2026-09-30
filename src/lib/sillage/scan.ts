/**
 * SILLAGE — Module optionnel de scan corporel par smartphone.
 *
 * Ce module est un COMPLÉMENT au relevé au mètre ruban, jamais un
 * remplacement : il pré-remplit des champs qui restent éditables, et la
 * mesure manuelle demeure la référence tant que la précision d'un scan sur
 * une morphologie hors norme n'a pas été validée par nos soins.
 *
 * Rien ici n'appelle un prestataire réel (SizeYou, 3DLOOK ou autre) : le seul
 * fournisseur branché est une simulation locale, destinée à démontrer le
 * parcours. Un fournisseur réel s'ajoute en implémentant `FournisseurScan`
 * sans toucher au reste du parcours.
 *
 * Le module est désactivable : `VITE_SILLAGE_SCAN=off` retire l'option de
 * l'interface, et l'étape des mesures fonctionne à l'identique sans elle.
 */

import type { ZoneId } from "./types";

export type ConfianceCapture = "haute" | "moyenne" | "basse";

export interface MesureScannee {
  zone: ZoneId;
  /** Valeur en centimètres (ou kilogrammes pour le poids), arrondie au demi. */
  valeur: number;
  confianceCapture: ConfianceCapture;
}

export interface ResultatScan {
  fournisseurId: string;
  fournisseurLibelle: string;
  /** Vrai tant qu'aucun prestataire réel n'est branché. */
  simulation: boolean;
  horodatage: string;
  mesures: MesureScannee[];
  /** Zones demandées par la pièce que la capture ne sait pas produire. */
  zonesNonCouvertes: ZoneId[];
}

export interface DemandeScan {
  /** Zones utiles à la pièce en cours ; le fournisseur ne renvoie que celles-là. */
  zones: ZoneId[];
  genre?: "homme" | "femme" | "unisexe";
}

export interface FournisseurScan {
  id: string;
  libelle: string;
  simulation: boolean;
  /** Nombre d'étapes de capture guidée, pour l'affichage de la progression. */
  etapes: number;
  lancer(demande: DemandeScan): Promise<ResultatScan>;
}

/**
 * Zones où la littérature interne signale une dispersion forte des scans sur
 * les morphologies atypiques (profil en A : hanches fortes et taille fine,
 * profil en V, bassin décalé). Sur ces zones, l'interface demande une
 * confirmation manuelle explicite plutôt que de retenir la valeur du scan.
 */
export const ZONES_SCAN_A_CONFIRMER: ReadonlySet<ZoneId> = new Set<ZoneId>([
  "taille",
  "taille_iliaque",
  "hanches",
  "bassin",
  "cuisse",
  "longueur_dos",
  "longueur_torse",
]);

export function zoneScanASensible(zone: ZoneId): boolean {
  return ZONES_SCAN_A_CONFIRMER.has(zone);
}

/**
 * Détecte un écart taille / hanches marqué, celui-là même sur lequel la
 * précision des scans n'est pas encore validée. Retourne le profil repéré,
 * ou undefined si les deux mesures ne sont pas disponibles.
 */
export function profilMorphologique(
  mesures: { zone: ZoneId; valeur: number }[],
): "A" | "V" | undefined {
  const taille = mesures.find((m) => m.zone === "taille")?.valeur;
  const hanches = mesures.find((m) => m.zone === "hanches")?.valeur;
  const poitrine = mesures.find((m) => m.zone === "poitrine")?.valeur;
  if (taille && hanches && hanches - taille >= 28) return "A";
  if (taille && poitrine && poitrine - taille >= 28) return "V";
  return undefined;
}

/* ------------------------------------------------------- fournisseur simulé */

/** Gabarit de capture : valeur centrale plausible et dispersion par zone. */
const GABARIT: Partial<Record<ZoneId, { base: number; confiance: ConfianceCapture }>> = {
  cou: { base: 38, confiance: "moyenne" },
  poitrine: { base: 99, confiance: "haute" },
  taille: { base: 78, confiance: "basse" },
  hanches: { base: 106, confiance: "basse" },
  bassin: { base: 104, confiance: "basse" },
  taille_iliaque: { base: 92, confiance: "basse" },
  cuisse: { base: 60, confiance: "basse" },
  biceps: { base: 32, confiance: "moyenne" },
  epaules: { base: 45, confiance: "moyenne" },
  envergure: { base: 178, confiance: "moyenne" },
  longueur_bras: { base: 60, confiance: "moyenne" },
  longueur_torse: { base: 62, confiance: "basse" },
  longueur_dos: { base: 45, confiance: "basse" },
  entrejambe: { base: 81, confiance: "moyenne" },
  cheville: { base: 24, confiance: "moyenne" },
  hauteur_dorsale: { base: 48, confiance: "basse" },
  taille_totale: { base: 178, confiance: "haute" },
};

/** Tirage déterministe : deux captures simulées identiques donnent le même corps. */
function tirage(graine: number): number {
  const x = Math.sin(graine * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const FOURNISSEUR_SIMULE: FournisseurScan = {
  id: "simulation-locale",
  libelle: "Capture simulée",
  simulation: true,
  etapes: 3,
  async lancer({ zones }) {
    const mesures: MesureScannee[] = [];
    const zonesNonCouvertes: ZoneId[] = [];

    zones.forEach((zone, index) => {
      // Le poids ne se déduit pas d'une capture optique : jamais pré-rempli.
      const gabarit = zone === "poids" ? undefined : GABARIT[zone];
      if (!gabarit) {
        zonesNonCouvertes.push(zone);
        return;
      }
      const ecart = (tirage(index + 1) - 0.5) * (gabarit.confiance === "basse" ? 9 : 4);
      mesures.push({
        zone,
        valeur: Math.round((gabarit.base + ecart) * 2) / 2,
        confianceCapture: gabarit.confiance,
      });
    });

    return {
      fournisseurId: FOURNISSEUR_SIMULE.id,
      fournisseurLibelle: FOURNISSEUR_SIMULE.libelle,
      simulation: true,
      horodatage: new Date().toISOString(),
      mesures,
      zonesNonCouvertes,
    };
  },
};

/**
 * Fournisseur actif, ou null si le module est désactivé. Aucun appel réseau,
 * aucune clé, aucune dépendance : brancher un SDK tiers consiste à retourner
 * ici une autre implémentation de `FournisseurScan`.
 */
export function fournisseurScan(): FournisseurScan | null {
  const mode = import.meta.env["VITE_SILLAGE_SCAN"] ?? "simule";
  if (mode === "off") return null;
  return FOURNISSEUR_SIMULE;
}
