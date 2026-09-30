/**
 * Journal de consultation des liens de sources de la bibliothèque.
 *
 * Aucune donnée commerciale : ni produit, ni prix, ni paramètre d'affiliation.
 * L'événement enregistré se limite à l'identifiant de fiche, au domaine de la
 * source suivie et à l'horodatage serveur.
 *
 * ATTENTION (à revoir) : aucun drapeau de consentement analytique n'existe
 * aujourd'hui dans l'application. Le pseudo-identifiant est donc toujours nul
 * et aucun identifiant de visiteur n'est créé.
 */

import { supabase } from "@/integrations/supabase/client";

/** Extrait le domaine d'une URL, sans chemin ni paramètre. */
export function domaineDe(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export async function journaliserConsultationSource(
  ficheId: string,
  url: string,
): Promise<void> {
  const domaine = domaineDe(url);
  if (!domaine) return;
  try {
    await supabase.from("consultations_source").insert({
      fiche_id: ficheId,
      domaine_source: domaine,
      pseudo_id: null,
    });
  } catch {
    /* Un échec de journalisation ne doit jamais gêner la lecture. */
  }
}
