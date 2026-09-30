/**
 * SILLAGE — journal de diagnostic des traductions.
 *
 * Chaque module de traduction (parcours, pages éditoriales, catalogue)
 * signale ici la clé qu'il n'a pas trouvée dans la langue active. Le
 * panneau de diagnostic affiche la langue courante et ces clés, ce qui
 * évite de découvrir un repli silencieux sur le français en production.
 *
 * Aucune donnée personnelle n'y transite : uniquement des identifiants de
 * clés de traduction, en mémoire, effacés au rechargement de la page.
 */

export type EspaceTraduction = "parcours" | "pages" | "catalogue";

/** Repli sur le français, ou aucune traduction trouvée nulle part. */
export type StatutManque = "repli_fr" | "absente";

export interface ManqueTraduction {
  espace: EspaceTraduction;
  cle: string;
  lang: string;
  statut: StatutManque;
  occurrences: number;
}

const journal = new Map<string, ManqueTraduction>();
const abonnes = new Set<() => void>();

let version = 0;
let planifie = false;

function notifier() {
  // Regroupe les signalements d'un même rendu pour ne pas boucler sur React.
  if (planifie) return;
  planifie = true;
  const flush = () => {
    planifie = false;
    version += 1;
    abonnes.forEach((fn) => fn());
  };
  if (typeof queueMicrotask === "function") queueMicrotask(flush);
  else setTimeout(flush, 0);
}

export function signalerManque(
  espace: EspaceTraduction,
  cle: string,
  lang: string,
  statut: StatutManque,
) {
  if (lang === "fr" && statut === "repli_fr") return;
  const id = `${espace}|${lang}|${cle}`;
  const existant = journal.get(id);
  if (existant) {
    existant.occurrences += 1;
    if (statut === "absente") existant.statut = "absente";
    return;
  }
  journal.set(id, { espace, cle, lang, statut, occurrences: 1 });
  // Avertissement en développement uniquement : jamais visible en production.
  if (import.meta.env?.DEV) {
    const detail = statut === "absente" ? "aucune traduction trouvée" : "repli sur le français";
    console.warn(`[i18n] clé manquante « ${cle} » (espace ${espace}) en « ${lang} » — ${detail}.`);
  }
  notifier();
}

export function manquesTraduction(lang?: string): ManqueTraduction[] {
  const tout = [...journal.values()];
  const filtre = lang ? tout.filter((m) => m.lang === lang) : tout;
  return filtre.sort((a, b) => a.espace.localeCompare(b.espace) || a.cle.localeCompare(b.cle));
}

export function viderJournal() {
  journal.clear();
  notifier();
}

export function versionJournal() {
  return version;
}

export function abonnerJournal(fn: () => void) {
  abonnes.add(fn);
  return () => abonnes.delete(fn);
}
