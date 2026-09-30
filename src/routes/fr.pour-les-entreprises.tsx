import { createFileRoute } from "@tanstack/react-router";

import { PageBusiness } from "@/components/marketing/PageBusiness";
import { headCommun, metaTextes } from "@/lib/sillage/meta-i18n";

const META = metaTextes("fr", "businessFr");
const COMMUN = headCommun("businessFr");

export const Route = createFileRoute("/fr/pour-les-entreprises")({
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
  component: () => <PageBusiness langue="fr" />,
});
