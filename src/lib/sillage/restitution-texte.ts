/**
 * Mise en mots de la sortie du moteur.
 *
 * Le moteur ne produit que des clés et des paramètres : la langue est décidée
 * ici. Aucune règle de score n'est réévaluée dans ce module.
 */

import { CLE_ZONE, libelleZone, type Lang, type T } from "./i18n";
import type { MessageCle, MotifNonEvaluee, ZoneId, ZoneNonEvaluee } from "./types";

/** Langues disposant de formes fléchies (article accordé au nom de la mesure). */
const LANGUES_AVEC_ARTICLE: Lang[] = ["fr"];

/**
 * Nom de la mesure tel qu'il s'insère dans une phrase. En français, l'article
 * est porté par la traduction ("la longueur de torse", "l'entrejambe") ; les
 * autres langues reprennent le libellé du champ en minuscules.
 */
export function zoneEnPhrase(t: T, lang: Lang, zone: ZoneId): string {
  if (LANGUES_AVEC_ARTICLE.includes(lang)) return t(`zonesAvec.${CLE_ZONE[zone]}`);
  return libelleZone(t, zone).toLocaleLowerCase(lang);
}

function interpoler(gabarit: string, params: Record<string, string | number>): string {
  return gabarit.replace(/\{(\w+)\}/g, (brut, nom: string) =>
    nom in params ? String(params[nom]) : brut,
  );
}

/** Rend un message du moteur dans la langue active. */
export function rendreMessage(t: T, lang: Lang, message: MessageCle): string {
  const params: Record<string, string | number> = { ...(message.params ?? {}) };
  if (typeof params["zone"] === "string") {
    params["zone"] = zoneEnPhrase(t, lang, params["zone"] as ZoneId);
  }
  return interpoler(t(message.cle), params);
}

/** Justification complète, une phrase par message. */
export function rendreJustification(t: T, lang: Lang, messages: MessageCle[]): string[] {
  return messages.map((m) => rendreMessage(t, lang, m));
}

/** Phrase détaillée d'une zone non évaluée. */
export function rendreZoneNonEvaluee(t: T, lang: Lang, z: ZoneNonEvaluee): string {
  return rendreMessage(t, lang, {
    cle: `res.nonEval.${z.motif satisfies MotifNonEvaluee}`,
    params: { zone: z.zone },
  });
}
