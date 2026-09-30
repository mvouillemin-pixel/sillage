import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { Entete } from "@/components/marketing/Entete";
import { Pied } from "@/components/marketing/Pied";
import { GabaritMarketing } from "@/components/marketing/GabaritMarketing";
import { Comment, Hero, Probleme } from "@/components/marketing/Sections";
import { makeT, useLang } from "@/lib/sillage/i18n";
import { makeTM } from "@/lib/sillage/marketing-i18n";
/* Sections sous la ligne de flottaison : chargées dans un chunk séparé.
   Le rendu serveur reste complet (React.lazy résout côté serveur), seul le
   JavaScript est différé. */
const Honnetete = lazy(() =>
  import("@/components/marketing/Sections").then((m) => ({ default: m.Honnetete })),
);
const Disciplines = lazy(() =>
  import("@/components/marketing/Sections").then((m) => ({ default: m.Disciplines })),
);
const TeaserPro = lazy(() =>
  import("@/components/marketing/Sections").then((m) => ({ default: m.TeaserPro })),
);
const Roadmap = lazy(() =>
  import("@/components/marketing/Sections").then((m) => ({ default: m.Roadmap })),
);
const Confidentialite = lazy(() =>
  import("@/components/marketing/Sections").then((m) => ({ default: m.Confidentialite })),
);
const Contact = lazy(() =>
  import("@/components/marketing/Sections").then((m) => ({ default: m.Contact })),
);

import { headCommun, metaTextes, useMetaLocalisee } from "@/lib/sillage/meta-i18n";

const META = metaTextes("en", "index");
const COMMUN = headCommun("index");

export const Route = createFileRoute("/")({
  // Rendu serveur en anglais (défaut neutre) ; la langue active reprend la
  // main après hydratation via useMetaLocalisee.
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
  component: Index,
});

function Index() {
  const [lang, setLang] = useLang();
  const t = makeT(lang);
  const tm = makeTM(lang);
  useMetaLocalisee(lang, "index");

  return (
    <GabaritMarketing>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {tm("nav.skip")}
      </a>
      <Entete lang={lang} onLang={setLang} t={t} tm={tm} />
      <main>
        <Hero lang={lang} t={t} tm={tm} />
        <Probleme tm={tm} />
        <Comment t={t} tm={tm} />
        <Suspense fallback={null}>
          <Honnetete t={t} tm={tm} />
          <Disciplines tm={tm} />
          <TeaserPro tm={tm} lang={lang} />
          <Roadmap tm={tm} />
          <Confidentialite tm={tm} />
          <Contact lang={lang} tm={tm} />
        </Suspense>
      </main>
      <Pied lang={lang} onLang={setLang} t={t} tm={tm} />
    </GabaritMarketing>
  );
}
