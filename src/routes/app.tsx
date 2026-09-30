import { createFileRoute } from "@tanstack/react-router";

import { Parcours } from "@/components/sillage/Parcours";
import { headCommun, metaTextes } from "@/lib/sillage/meta-i18n";

const META = metaTextes("en", "app");
const COMMUN = headCommun("app");

export const Route = createFileRoute("/app")({
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
  component: OutilPage,
});

function OutilPage() {
  return <Parcours />;
}
