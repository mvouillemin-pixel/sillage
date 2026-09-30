import { createFileRoute } from "@tanstack/react-router";

import { PageBusiness } from "@/components/marketing/PageBusiness";
import { headCommun, metaTextes } from "@/lib/sillage/meta-i18n";

const META = metaTextes("en", "businessEn");
const COMMUN = headCommun("businessEn");

export const Route = createFileRoute("/en/for-business")({
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
  component: () => <PageBusiness langue="en" />,
});
