/* =========================================================
   SILLAGE — Métadonnées de document localisées.

   Le titre et la description de chaque route publique sont
   traduits. Le rendu serveur sert la version anglaise (défaut
   neutre) ; au chargement côté client, la langue retenue
   (choix explicite de l'utilisateur, sinon locale du
   navigateur — norvégien → nb) reprend la main.

   Aucune statistique, promesse de performance ou allégation
   commerciale n'est introduite ici : ces textes décrivent
   uniquement ce que la page contient.
   ========================================================= */

import { useEffect } from "react";

import { baliseLangue, type Lang } from "./i18n";

/** Routes publiques disposant de métadonnées propres. */
export type RouteMeta =
  | "index"
  | "app"
  | "business"
  | "businessNo"
  | "businessEn"
  | "businessFr"
  | "reperes"
  | "bibliotheque"
  | "debutEn"
  | "debutFr"
  | "debutNo";

export interface MetaTextes {
  titre: string;
  description: string;
}

/** Domaine public du site, utilisé pour canonical et hreflang. */
export const ORIGINE = "https://screenshot-exact-clone-15.lovable.app";

/** Chemin de chaque route publique. */
export const CHEMIN: Record<RouteMeta, string> = {
  index: "/",
  app: "/app",
  business: "/business",
  businessNo: "/no/for-bedrifter",
  businessEn: "/en/for-business",
  businessFr: "/fr/pour-les-entreprises",
  reperes: "/reperes",
  bibliotheque: "/bibliotheque",
  debutEn: "/en/start",
  debutFr: "/fr/je-commence",
  debutNo: "/no/jeg-begynner",
};

/** Vert forêt primaire du design system (valeur sRGB du token --primary). */
export const COULEUR_THEME = "#2E5B45";

/** Image de partage par défaut (wordmark SILLAGE sur blanc cassé, 1200×630). */
export const IMAGE_PARTAGE = `${ORIGINE}/og-sillage.png`;

export { baliseLangue };

const META: Partial<Record<Lang, Partial<Record<RouteMeta, MetaTextes>>>> = {
  en: {
    index: {
      titre: "Sillage — the right size for your body shape",
      description:
        "Size guidance for wetsuits and mountain garments, based on your own measurements. What we do not know, we say.",
    },
    app: {
      titre: "Find your size — Sillage",
      description:
        "Four steps: discipline, usage, measurements, result. Your measurements are compared with each brand's published size chart, zone by zone.",
    },
    business: {
      titre: "Sillage for business",
      description:
        "Information for brands and retailers about Sillage. The business offer is being defined with early partners.",
    },
    businessNo: {
      titre: "Sillage for business — pilot programme",
      description:
        "A white label size recommendation widget for technical sportswear, tested against your current size guide. Pilot, measurement plan and data protection.",
    },
    businessEn: {
      titre: "Sillage for business — pilot programme",
      description:
        "A white label size recommendation widget for technical sportswear, tested against your current size guide. Pilot, measurement plan and data protection.",
    },
    businessFr: {
      titre: "Sillage for business — pilot programme",
      description:
        "A white label size recommendation widget for technical sportswear, tested against your current size guide. Pilot, measurement plan and data protection.",
    },
    reperes: {
      titre: "Sizing references — Sillage",
      description:
        "Understand size charts, fit vocabulary and how to measure yourself, to choose the right neoprene or mountain piece.",
    },
    bibliotheque: {
      titre: "Library — understanding size and fit | Sillage",
      description:
        "Knowledge cards from first purchase to expert reading: neoprene, ski, harnesses. What is established, what comes from brands, what is still unknown.",
    },
  },
  fr: {
    index: {
      titre: "Sillage — la bonne taille selon votre morphologie",
      description:
        "Recommandation de taille pour le néoprène et les vêtements de ski, fondée sur vos mesures réelles. Ce que nous ne savons pas, nous le disons.",
    },
    app: {
      titre: "Trouver votre taille — Sillage",
      description:
        "Quatre étapes : discipline, usage, mesures, résultat. Vos mesures sont comparées à la grille publiée de chaque marque, zone par zone.",
    },
    business: {
      titre: "Sillage pour les professionnels",
      description:
        "Informations pour les marques et les revendeurs. L'offre professionnelle se définit avec les premiers partenaires.",
    },
    businessNo: {
      titre: "Sillage pour les entreprises — programme pilote",
      description:
        "Un widget white label de recommandation de taille pour le sport technique, testé face à votre guide des tailles actuel. Pilote, plan de mesure et protection des données.",
    },
    businessEn: {
      titre: "Sillage pour les entreprises — programme pilote",
      description:
        "Un widget white label de recommandation de taille pour le sport technique, testé face à votre guide des tailles actuel. Pilote, plan de mesure et protection des données.",
    },
    businessFr: {
      titre: "Sillage pour les entreprises — programme pilote",
      description:
        "Un widget white label de recommandation de taille pour le sport technique, testé face à votre guide des tailles actuel. Pilote, plan de mesure et protection des données.",
    },
    reperes: {
      titre: "Repères de taille — Sillage",
      description:
        "Comprendre les grilles de tailles, le vocabulaire des coupes et la façon de se mesurer, pour choisir la bonne pièce de néoprène ou de montagne.",
    },
    bibliotheque: {
      titre: "Bibliothèque — comprendre la taille et l'ajustement | Sillage",
      description:
        "Des fiches de connaissance du premier achat à l'expertise : néoprène, ski, harnais. Ce qui est établi, ce qui vient des marques, ce que l'on ne sait pas encore.",
    },
  },
  no: {
    index: {
      titre: "Sillage — riktig størrelse for kroppsfasongen din",
      description:
        "Størrelsesråd for våtdrakter og fjellklær, basert på dine egne mål. Det vi ikke vet, sier vi fra om.",
    },
    app: {
      titre: "Finn størrelsen din — Sillage",
      description:
        "Fire steg: disiplin, bruk, mål, resultat. Målene dine sammenlignes med hvert merkes publiserte størrelsestabell, sone for sone.",
    },
    business: {
      titre: "Sillage for bedrifter",
      description:
        "Informasjon for merker og forhandlere. Bedriftstilbudet defineres sammen med de første partnerne.",
    },
    businessNo: {
      titre: "Sillage for bedrifter — pilotprogram",
      description:
        "En white label-størrelseswidget for tekniske sportsprodukter, testet mot deres nåværende størrelsesguide. Pilot, måleplan og personvern.",
    },
    businessEn: {
      titre: "Sillage for bedrifter — pilotprogram",
      description:
        "En white label-størrelseswidget for tekniske sportsprodukter, testet mot deres nåværende størrelsesguide. Pilot, måleplan og personvern.",
    },
    businessFr: {
      titre: "Sillage for bedrifter — pilotprogram",
      description:
        "En white label-størrelseswidget for tekniske sportsprodukter, testet mot deres nåværende størrelsesguide. Pilot, måleplan og personvern.",
    },
    reperes: {
      titre: "Størrelsesveiledning — Sillage",
      description:
        "Forstå størrelsestabeller, passformsord og hvordan du måler deg selv, slik at du velger riktig neopren- eller fjellplagg.",
    },
    bibliotheque: {
      titre: "Bibliotek — forstå størrelse og passform | Sillage",
      description:
        "Kunnskapskort fra første kjøp til fordypning: neopren, ski, seler. Det som er etablert, det som kommer fra merkene, og det vi ennå ikke vet.",
    },
  },
};

/* Module « Je commence » : une route par langue, métadonnées propres. */
const META_DEBUT: Partial<Record<Lang, MetaTextes>> = {
  en: {
    titre: "Start a sport — what you actually need | Sillage",
    description:
      "Beginning a sport? See what you genuinely need first, what depends on your body, and what can wait. No invented rules.",
  },
  fr: {
    titre: "Je commence — ce dont vous avez vraiment besoin | Sillage",
    description:
      "Vous commencez un sport ? Voyez ce qu'il vous faut d'abord, ce qui dépend de votre corps et ce qui peut attendre. Aucune règle inventée.",
  },
  no: {
    titre: "Jeg begynner — hva du faktisk trenger | Sillage",
    description:
      "Skal du begynne med en sport? Se hva du trenger først, hva som avhenger av kroppen din, og hva som kan vente. Ingen oppdiktede regler.",
  },
};

const LANG_DE_ROUTE_DEBUT: Partial<Record<RouteMeta, Lang>> = {
  debutEn: "en",
  debutFr: "fr",
  debutNo: "no",
};

/** Textes de métadonnées, avec repli anglais puis français. */
export function metaTextes(lang: Lang, route: RouteMeta): MetaTextes {
  const langDebut = LANG_DE_ROUTE_DEBUT[route];
  if (langDebut) return (META_DEBUT[langDebut] ?? META_DEBUT.en) as MetaTextes;
  const source = META[lang]?.[route] ?? META.en?.[route] ?? META.fr?.[route];
  return source as MetaTextes;
}

function poserMeta(selecteur: string, attribut: string, valeur: string, contenu: string) {
  if (typeof document === "undefined") return;
  let noeud = document.head.querySelector<HTMLMetaElement>(selecteur);
  if (!noeud) {
    noeud = document.createElement("meta");
    noeud.setAttribute(attribut, valeur);
    document.head.appendChild(noeud);
  }
  noeud.setAttribute("content", contenu);
}

/**
 * Applique le titre et la description dans la langue active, après
 * hydratation et après chaque navigation côté client.
 */
export function useMetaLocalisee(lang: Lang, route: RouteMeta) {
  useEffect(() => {
    const { titre, description } = metaTextes(lang, route);
    if (typeof document === "undefined") return;
    document.title = titre;
    poserMeta('meta[name="description"]', "name", "description", description);
    poserMeta('meta[property="og:title"]', "property", "og:title", titre);
    poserMeta('meta[property="og:description"]', "property", "og:description", description);
    poserMeta('meta[property="og:locale"]', "property", "og:locale", baliseLangue(lang));
  }, [lang, route]);
}

/** Balises head statiques communes : canonical, hreflang, theme-color. */
export function headCommun(route: RouteMeta) {
  const url = `${ORIGINE}${CHEMIN[route]}`;
  /* Les pages entreprises existent sous trois chemins distincts :
     chaque hreflang pointe vers la vraie route de la langue. */
  const routesBusiness = route === "businessNo" || route === "businessEn" || route === "businessFr";
  const routesDebut = route === "debutNo" || route === "debutEn" || route === "debutFr";
  const alternatives = routesDebut
    ? ([
        ["nb", CHEMIN.debutNo],
        ["en", CHEMIN.debutEn],
        ["fr", CHEMIN.debutFr],
      ] as const).map(([code, chemin]) => ({
        rel: "alternate",
        hrefLang: code,
        href: `${ORIGINE}${chemin}`,
      }))
    : routesBusiness
    ? ([
        ["nb", CHEMIN.businessNo],
        ["en", CHEMIN.businessEn],
        ["fr", CHEMIN.businessFr],
      ] as const).map(([code, chemin]) => ({
        rel: "alternate",
        hrefLang: code,
        href: `${ORIGINE}${chemin}`,
      }))
    : (["nb", "en", "fr"] as const).map((code) => ({
        rel: "alternate",
        hrefLang: code,
        href: `${url}?lang=${code}`,
      }));
  return {
    links: [
      { rel: "canonical", href: url },
      ...alternatives,
      {
      rel: "alternate",
      hrefLang: "x-default",
      href: routesDebut
        ? `${ORIGINE}${CHEMIN.debutEn}`
        : routesBusiness
          ? `${ORIGINE}${CHEMIN.businessEn}`
          : url,
    },
    ],
    meta: [
      { name: "theme-color", content: COULEUR_THEME },
      { property: "og:url", content: url },
      { property: "og:image", content: IMAGE_PARTAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "SILLAGE" },
      { name: "twitter:image", content: IMAGE_PARTAGE },
    ],
  };
}
