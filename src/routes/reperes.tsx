import { useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTICLES } from "@/lib/sillage/editorial";
import { makeT, useLang } from "@/lib/sillage/i18n";
import { contenuLocalise, makeTP } from "@/lib/sillage/pages-i18n";
import { SelecteurLangue } from "@/components/sillage/SelecteurLangue";
import { PanneauDiagnostic } from "@/components/sillage/PanneauDiagnostic";
import { GabaritMarketing } from "@/components/marketing/GabaritMarketing";
import { headCommun, metaTextes, useMetaLocalisee } from "@/lib/sillage/meta-i18n";


const META = metaTextes("en", "reperes");
const COMMUN = headCommun("reperes");

export const Route = createFileRoute("/reperes")({
  // Rendu serveur en anglais (défaut neutre) ; la langue active reprend la
  // main après hydratation via useMetaLocalisee.
  head: () => ({
    meta: [
      { title: META.titre },
      { name: "description", content: META.description },
      { property: "og:title", content: META.titre },
      { property: "og:description", content: META.description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      ...COMMUN.meta,
    ],
    links: COMMUN.links,
  }),
  component: Reperes,
});

function Reperes() {
  const [lang, setLang] = useLang();
  const tp = useMemo(() => makeTP(lang), [lang]);
  const t = useMemo(() => makeT(lang), [lang]);
  useMetaLocalisee(lang, "reperes");

  return (
    <GabaritMarketing variante="discret">
      <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-8">
      <header>
        <div className="flex items-baseline justify-between gap-3">
          <Link to="/" className="font-serif text-2xl tracking-tight">
            Sillage
          </Link>
          <SelecteurLangue lang={lang} onLang={setLang} libelle={t("app.langue")} />
        </div>
        <p className="eyebrow mt-1">{tp("reperes.eyebrow")}</p>
        <h1 className="mt-7 text-xl">{tp("reperes.titre")}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tp("reperes.sous")}</p>
      </header>

      <main className="mt-11 grid gap-4">
        {ARTICLES.map((a) => {
          const loc = contenuLocalise(lang, a.id);
          return (
            <article key={a.id} id={a.id} className="surface-card p-5">
              <h2 className="text-base">{loc.titre ?? a.titre}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {loc.chapo ?? a.chapo}
              </p>
              <div className="mt-3 grid gap-2.5">
                {a.paragraphes.map((p) => (
                  <p key={p.slice(0, 24)} className="text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </main>

      {lang !== "fr" ? (
        <p className="mt-8 rounded-xl bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          {tp("langueTexte")}
        </p>
      ) : null}

      <div className="mt-11 grid gap-2">
        <Link
          to="/bibliotheque"
          className="rounded-xl border border-border px-4 py-2.5 text-center text-sm"
        >
          {tp("nav.biblio")}
        </Link>
        <Link
          to="/"
          className="rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
        >
          {tp("nav.trouver")}
        </Link>
      </div>

      <PanneauDiagnostic lang={lang} />
      </div>
    </GabaritMarketing>

  );
}
