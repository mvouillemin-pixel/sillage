import { createFileRoute, Link } from "@tanstack/react-router";

import { makeT, useLang } from "@/lib/sillage/i18n";
import { GabaritMarketing } from "@/components/marketing/GabaritMarketing";
import { makeTM } from "@/lib/sillage/marketing-i18n";
import { headCommun, metaTextes, useMetaLocalisee } from "@/lib/sillage/meta-i18n";

const META = metaTextes("en", "business");
const COMMUN = headCommun("business");

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: META.titre },
      { name: "description", content: META.description },
      { property: "og:title", content: META.titre },
      { property: "og:description", content: META.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...COMMUN.meta,
    ],
    links: COMMUN.links,
  }),
  component: BusinessPage,
});

function BusinessPage() {
  const [lang] = useLang();
  const t = makeT(lang);
  const tm = makeTM(lang);
  useMetaLocalisee(lang, "business");

  return (
    <GabaritMarketing>
      <main className="mx-auto w-full max-w-[1120px] px-5 py-24">
      <p className="eyebrow">{tm("pros.eyebrow")}</p>
      <h1 className="mt-3 font-serif text-4xl text-foreground">{tm("business.titre")}</h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">{tm("business.intro")}</p>
      <p className="mt-4 max-w-2xl text-muted-foreground">{tm("pros.texte")}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-[24px] border border-border px-5 py-2.5 text-sm text-foreground"
        >
          {tm("business.retour")}
        </Link>
        <Link
          to="/app"
          className="rounded-[24px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          {t("app.nom")}
        </Link>
      </div>
      </main>
    </GabaritMarketing>
  );
}
