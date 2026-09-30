import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { makeT, type Lang } from "@/lib/sillage/i18n";
import {
  abonnerJournal,
  manquesTraduction,
  versionJournal,
  viderJournal,
} from "@/lib/sillage/i18n-diagnostic";

/**
 * Panneau de diagnostic des traductions.
 *
 * Affiche la langue active et la liste des clés qui n'ont pas été trouvées
 * dans cette langue : repli sur le français, ou clé absente partout. Fidèle
 * au principe « précision invisible, incertitude visible » : un manque de
 * traduction est une incertitude, il doit être inspectable.
 *
 * Ouverture : bouton discret en bas d'écran, ou paramètre ?diag=1 dans l'URL.
 * Aucune donnée personnelle n'est lue ni stockée.
 */
export function PanneauDiagnostic({ lang }: { lang: string }) {
  const t = makeT(lang as Lang);
  const [ouvert, setOuvert] = useState(false);
  const [monte, setMonte] = useState(false);
  const [toutesLangues, setToutesLangues] = useState(false);

  useEffect(() => {
    setMonte(true);
    if (typeof window !== "undefined" && new URLSearchParams(window.location.search).has("diag")) {
      setOuvert(true);
    }
  }, []);

  const version = useSyncExternalStore(
    abonnerJournal,
    () => versionJournal(),
    () => 0,
  );
  const manques = useMemo(
    () => manquesTraduction(toutesLangues ? undefined : lang),
    [version, lang, toutesLangues],
  );

  if (!monte) return null;

  return (
    <div className="fixed bottom-3 right-3 z-50 flex max-w-[min(22rem,calc(100vw-1.5rem))] flex-col items-end">
      {ouvert ? (
        <section className="surface-card mb-2 max-h-[60vh] w-full overflow-auto p-4 shadow-lg">
          <div className="flex items-baseline justify-between gap-2">
            <span className="eyebrow">{t("diag.titre")}</span>
            <button
              type="button"
              onClick={() => setOuvert(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              {t("diag.fermer")}
            </button>
          </div>

          <p className="mt-2 text-sm">
            {t("diag.langueActive")} : <span className="font-medium">{lang}</span>
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {manques.length === 0
              ? "Aucune clé manquante observée sur les écrans déjà affichés."
              : `${manques.length} clé${manques.length > 1 ? "s" : ""} non trouvée${
                  manques.length > 1 ? "s" : ""
                } dans cette langue. Repli français appliqué.`}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setToutesLangues((v) => !v)}
              aria-pressed={toutesLangues}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
            >
              {toutesLangues ? t("diag.langueSeule") : t("diag.toutesLangues")}
            </button>
            <button
              type="button"
              onClick={viderJournal}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
            >
              {t("diag.vider")}
            </button>
          </div>

          {manques.length > 0 ? (
            <ul className="mt-3 grid gap-1.5 border-t border-border pt-3">
              {manques.map((m) => (
                <li key={`${m.espace}|${m.lang}|${m.cle}`} className="text-xs leading-relaxed">
                  <span className="font-mono">{m.cle}</span>
                  <span className="text-muted-foreground">
                    {" "}
                    · {m.espace} · {m.lang} ·{" "}
                    {m.statut === "absente" ? t("diag.absente") : t("diag.repliFr")}
                    {m.occurrences > 1 ? ` · ×${m.occurrences}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        aria-label={t("diag.ouvrir")}
        className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground shadow-sm hover:text-foreground"
      >
        {lang.toUpperCase()}
        {manques.length > 0 ? ` · ${manques.length}` : " · ok"}
      </button>
    </div>
  );
}
