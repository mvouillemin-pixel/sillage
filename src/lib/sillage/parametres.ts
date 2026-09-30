/**
 * SILLAGE — registre des paramètres explicites.
 *
 * Chaque paramètre est déclaré avec son statut épistémique, son unité, sa
 * portée et sa justification. Aucun paramètre n'est réputé démontré tant que
 * son statut n'est pas passé de « hypothese » à « mesure ».
 */

import { FENETRE_FRAICHEUR_HEURES } from "./offres";

export type StatutParametre = "hypothese" | "convention" | "mesure";
export type PorteeParametre = "moteur" | "affichage" | "collecte";

export interface Parametre {
  cle: string;
  valeur: number;
  unite: string;
  statut: StatutParametre;
  portee: PorteeParametre;
  justification: string;
}

export const PARAMETRES: Parametre[] = [
  {
    cle: "FENETRE_FRAICHEUR_HEURES",
    valeur: FENETRE_FRAICHEUR_HEURES,
    unite: "heures",
    statut: "hypothese",
    portee: "affichage",
    justification:
      "Durée au-delà de laquelle un relevé de prix ou de disponibilité n'est plus présenté comme actuel. Valeur posée par hypothèse, sans mesure de la volatilité réelle des flux marchands ; à réviser dès qu'un flux réel fournit une fréquence de rafraîchissement observée.",
  },
];

export function parametre(cle: string): Parametre | undefined {
  return PARAMETRES.find((p) => p.cle === cle);
}
