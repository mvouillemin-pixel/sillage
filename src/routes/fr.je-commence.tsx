import { createFileRoute } from "@tanstack/react-router";

import { PageDebut } from "@/components/debut/PageDebut";
import { headCommun, metaTextes } from "@/lib/sillage/meta-i18n";

const META = metaTextes("fr", "debutFr");
const COMMUN = headCommun("debutFr");

export const Route = createFileRoute("/fr/je-commence")({
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
  component: () => <PageDebut langue="fr" />,
});
