import type { ResultatMoteur, SessionParcours } from "./types";
import { REFERENTIEL } from "./referentiel";
import { calculer } from "./moteur";

/**
 * Point de branchement du moteur (docs 02 et 03).
 *
 * Cette fonction reste la seule surface visible de l'interface : elle habille
 * la sortie du moteur des métadonnées de traçabilité (versions immuables du
 * référentiel et des paramètres, horodatage de la consultation).
 *
 * Tant que le référentiel produit ne couvre pas les zones déterminantes d'une
 * pièce, le moteur renvoie un refus déclaré plutôt qu'une taille invérifiable
 * (doc 01, §8 ; doc 03, §4).
 */
export function evaluer(session: SessionParcours): ResultatMoteur {
  const sortie = calculer(session);

  return {
    versionReferentiel: REFERENTIEL.versionReferentiel,
    versionParametres: REFERENTIEL.versionParametres,
    horodatage: new Date().toISOString(),
    recommandations: sortie.recommandations,
    indepartageables: sortie.indepartageables,
    ...(sortie.refus ? { refus: sortie.refus } : {}),
  };
}
