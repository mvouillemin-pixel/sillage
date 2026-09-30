/* =========================================================
   SILLAGE — dictionnaire de la page « For business ».

   Trois langues relues : anglais (source), norvégien bokmål,
   français. Toute autre langue retombe sur l'anglais et le
   manque est journalisé.

   Règle d'intégrité : aucun chiffre de retour, aucun tarif,
   aucun logo client, aucun témoignage, aucun partenariat.
   Quand une information manque, le texte porte un repère
   entre crochets à fournir par le porteur du produit.
   ========================================================= */

import type { Lang } from "./i18n";
import { signalerManque } from "./i18n-diagnostic";

type Dict = Record<string, unknown>;

/** Langues disposant d'une route dédiée pour cette page. */
export const LANGS_BUSINESS = ["no", "en", "fr"] as const;
export type LangBusiness = (typeof LANGS_BUSINESS)[number];

/** Chemin public de la page, par langue. */
export const CHEMIN_BUSINESS: Record<LangBusiness, string> = {
  no: "/no/for-bedrifter",
  en: "/en/for-business",
  fr: "/fr/pour-les-entreprises",
};

const EN: Dict = {
  hero: {
    eyebrow: "For business",
    titre: "Fewer size related returns, measured, not promised",
    sous: "A white label size recommendation widget for technical sportswear, tested against your current size guide",
    ctaPilote: "Request a pilot",
    ctaIntegration: "See the integration",
  },
  integration: {
    eyebrow: "What you integrate",
    titre: "Two ways to plug SILLAGE in.",
    widgetT: "Widget",
    widgetD: "One script tag on the product page, isolated styles, responsive, matches your design tokens.",
    apiT: "API",
    apiD: "Request with the shopper's measurements and the product reference. Response with size, confidence level and per-zone verdicts.",
    maquetteAria: "Schematic preview of the SILLAGE widget inside a product page",
    maquetteNote: "Schematic mockup. Not a client implementation; product data shown as placeholders.",
    produit: "[Product title]",
    tailles: "Size selector",
    panneau: "SILLAGE panel",
  },
  pilote: {
    eyebrow: "How a pilot works",
    titre: "Four steps, one baseline.",
    stepper: "Pilot steps",
    etape: "Step {n} of 4",
    s1t: "Baseline",
    s1d: "We measure your current size-related return rate on the selected references before integration.",
    s2t: "Integration",
    s2d: "Widget on 20 to 50 references of one category.",
    s3t: "Measurement",
    s3d: "8 to 12 weeks plus the return window, with a control group or a historical baseline on the same references and season.",
    s4t: "Report",
    s4d: "Return rate, completion, acceptance, conversion, revenue after returns.",
    caveatLabel: "Important",
    caveat: "Without a baseline measured before integration, no effect can be demonstrated. We make it a clause of the pilot agreement.",
  },
  mesure: {
    eyebrow: "What we measure",
    titre: "Definitions, not targets.",
    caption: "Indicators followed during a pilot. Definitions only: no target figure is published.",
    colIndicateur: "Indicator",
    colDefinition: "Definition",
    r1: "Journey completion rate",
    r1d: "Share of started sizing journeys completed by the shopper.",
    r2: "Share of shoppers who keep the recommended size",
    r2d: "Share of shoppers who keep the size recommended by SILLAGE.",
    r3: "Size-related return rate versus baseline",
    r3d: "Size-related return rate compared with the measured pre-integration baseline.",
    r4: "Conversion on exposed product pages",
    r4d: "Conversion rate on product pages where the sizing experience was shown.",
    r5: "Coverage",
    r5d: "Share of the catalogue for which SILLAGE can make a recommendation from verified size-chart data.",
  },
  rgpd: {
    eyebrow: "Data protection",
    titre: "How measurements are handled.",
    p1: "Measurements are processed under a data processing agreement, pseudonymised, session only by default, with no images stored. Data is hosted in the EEA. GDPR applies in Norway through personopplysningsloven.",
    p2: "We provide the DPA template and a DPIA summary on request.",
    reserve: "Hosting region and retention for a production deployment: [to be confirmed per contract].",
  },
  jamais: {
    eyebrow: "What we do not do",
    titre: "Three limits we keep.",
    l1: "We do not recommend when a brand's chart lacks a critical dimension.",
    l2: "We do not sell your shoppers' data.",
    l3: "We do not publish return reduction figures we have not measured.",
  },
  form: {
    eyebrow: "Request a pilot",
    titre: "Tell us about your catalogue.",
    prix: "Pricing on request, SaaS or per recommendation",
    company: "Company",
    website: "Website",
    role: "Role",
    category: "Category of interest",
    catNeoprene: "Neoprene",
    catSki: "Ski and snowboard",
    catBoth: "Both",
    orders: "Approximate monthly online orders",
    ordersPlaceholder: "[ORDER RANGES TO BE PROVIDED]",
    tool: "Current size tool",
    toolNone: "None",
    toolStatic: "Static chart",
    toolThird: "Third-party tool",
    message: "Message",
    consent: "[CONSENT TEXT TO BE PROVIDED]",
    envoyer: "Send the request",
    envoi: "Sending…",
    succes: "Thank you — your pilot request has been received.",
    erreurCompany: "Enter your company name.",
    erreurWebsite: "Enter a valid website address.",
    erreurConsent: "Please confirm before sending.",
    erreurServeur: "Your request could not be sent. Please try again.",
    honeypot: "Leave this field empty",
    optionnel: "optional",
    note: "No email is sent from this form, and no tracking or marketing automation is used.",
  },
  cloture: {
    phrase: "Built in Oslo. Norway first, then the Nordics.",
  },
  nav: {
    retour: "Back to home",
  },
};

const NO: Dict = {
  hero: {
    eyebrow: "For bedrifter",
    titre: "Færre størrelsesrelaterte returer, målt – ikke lovet",
    sous: "En white label-størrelseswidget for tekniske sportsprodukter, testet mot deres nåværende størrelsesguide",
    ctaPilote: "Be om en pilot",
    ctaIntegration: "Se integrasjonen",
  },
  integration: {
    eyebrow: "Hva dere integrerer",
    titre: "To måter å koble på SILLAGE.",
    widgetT: "Widget",
    widgetD: "Én script-tag på produktsiden, isolerte stiler, responsivt og tilpasset deres designtokens.",
    apiT: "API",
    apiD: "Forespørsel med kundens mål og produktreferanse. Svar med størrelse, konfidensnivå og vurdering per sone.",
    maquetteAria: "Skjematisk visning av SILLAGE-widgeten på en produktside",
    maquetteNote: "Skjematisk skisse. Ikke en kundeimplementasjon; produktdata er plassholdere.",
    produit: "[Produkttittel]",
    tailles: "Størrelsesvalg",
    panneau: "SILLAGE-panel",
  },
  pilote: {
    eyebrow: "Slik fungerer en pilot",
    titre: "Fire steg, én baseline.",
    stepper: "Pilotsteg",
    etape: "Steg {n} av 4",
    s1t: "Baseline",
    s1d: "Vi måler deres nåværende størrelsesrelaterte returandel på de valgte referansene før integrasjon.",
    s2t: "Integrasjon",
    s2d: "Widget på 20 til 50 referanser i én kategori.",
    s3t: "Måling",
    s3d: "8 til 12 uker pluss returperioden, med en kontrollgruppe eller en historisk baseline for de samme referansene og sesongen.",
    s4t: "Rapport",
    s4d: "Returandel, fullføring, aksept, konvertering og omsetning etter returer.",
    caveatLabel: "Viktig",
    caveat: "Uten en baseline målt før integrasjon kan ingen effekt dokumenteres. Vi gjør dette til et punkt i pilotavtalen.",
  },
  mesure: {
    eyebrow: "Hva vi måler",
    titre: "Definisjoner, ikke måltall.",
    caption: "Indikatorer som følges i en pilot. Kun definisjoner: ingen måltall publiseres.",
    colIndicateur: "Indikator",
    colDefinition: "Definisjon",
    r1: "Fullføringsgrad for størrelsesreisen",
    r1d: "Andel påbegynte størrelsesreiser som fullføres av kunden.",
    r2: "Andel kunder som beholder anbefalt størrelse",
    r2d: "Andel kunder som beholder størrelsen SILLAGE anbefalte.",
    r3: "Størrelsesrelatert returandel mot baseline",
    r3d: "Størrelsesrelatert returandel sammenlignet med den målte baselinen før integrasjon.",
    r4: "Konvertering på eksponerte produktsider",
    r4d: "Konverteringsrate på produktsider der størrelsesopplevelsen ble vist.",
    r5: "Dekning",
    r5d: "Andel av katalogen der SILLAGE kan gi en anbefaling basert på verifiserte størrelsesdata.",
  },
  rgpd: {
    eyebrow: "Personvern",
    titre: "Slik håndteres målene.",
    p1: "Målinger behandles under en databehandleravtale, pseudonymiseres, lagres som standard kun i økten, og ingen bilder lagres. Data hostes i EØS. GDPR gjelder i Norge gjennom personopplysningsloven.",
    p2: "Vi tilbyr mal for databehandleravtale og et sammendrag av DPIA på forespørsel.",
    reserve: "Hostingregion og lagringstid for en produksjonsløsning: [bekreftes per avtale].",
  },
  jamais: {
    eyebrow: "Hva vi ikke gjør",
    titre: "Tre grenser vi holder.",
    l1: "Vi anbefaler ikke en størrelse når merkets størrelsesguide mangler et kritisk mål.",
    l2: "Vi selger ikke kundenes data.",
    l3: "Vi publiserer ikke tall for reduksjon i returer som vi ikke har målt.",
  },
  form: {
    eyebrow: "Be om en pilot",
    titre: "Fortell oss om katalogen deres.",
    prix: "Pris på forespørsel, SaaS eller per anbefaling",
    company: "Selskap",
    website: "Nettsted",
    role: "Rolle",
    category: "Aktuell kategori",
    catNeoprene: "Neopren",
    catSki: "Ski og snowboard",
    catBoth: "Begge",
    orders: "Omtrentlig antall nettordre per måned",
    ordersPlaceholder: "[ORDER RANGES TO BE PROVIDED]",
    tool: "Nåværende størrelsesverktøy",
    toolNone: "Ingen",
    toolStatic: "Statisk størrelsestabell",
    toolThird: "Tredjepartsverktøy",
    message: "Melding",
    consent: "[CONSENT TEXT TO BE PROVIDED]",
    envoyer: "Send forespørselen",
    envoi: "Sender…",
    succes: "Takk — pilotforespørselen er mottatt.",
    erreurCompany: "Skriv inn navnet på selskapet.",
    erreurWebsite: "Skriv inn en gyldig nettadresse.",
    erreurConsent: "Bekreft før du sender.",
    erreurServeur: "Forespørselen kunne ikke sendes. Prøv igjen.",
    honeypot: "La dette feltet stå tomt",
    optionnel: "valgfritt",
    note: "Ingen e-post sendes fra dette skjemaet, og ingen sporing eller markedsautomatisering brukes.",
  },
  cloture: {
    phrase: "Bygget i Oslo. Norge først, deretter Norden.",
  },
  nav: {
    retour: "Tilbake til forsiden",
  },
};

const FR: Dict = {
  hero: {
    eyebrow: "Pour les entreprises",
    titre: "Moins de retours liés à la taille, mesurés et non promis",
    sous: "Un widget white label de recommandation de taille pour les vêtements et équipements de sport techniques, testé par rapport à votre guide des tailles actuel",
    ctaPilote: "Demander un pilote",
    ctaIntegration: "Voir l'intégration",
  },
  integration: {
    eyebrow: "Ce que vous intégrez",
    titre: "Deux façons de brancher SILLAGE.",
    widgetT: "Widget",
    widgetD: "Une balise script sur la page produit, des styles isolés, une interface responsive et adaptée à vos tokens de design.",
    apiT: "API",
    apiD: "Requête avec les mesures du client et la référence produit. Réponse avec la taille, le niveau de confiance et l'évaluation par zone.",
    maquetteAria: "Aperçu schématique du widget SILLAGE dans une page produit",
    maquetteNote: "Maquette schématique. Ce n'est pas une implémentation client ; les données produit sont des repères.",
    produit: "[Titre du produit]",
    tailles: "Sélecteur de taille",
    panneau: "Panneau SILLAGE",
  },
  pilote: {
    eyebrow: "Comment se déroule un pilote",
    titre: "Quatre étapes, une baseline.",
    stepper: "Étapes du pilote",
    etape: "Étape {n} sur 4",
    s1t: "Baseline",
    s1d: "Nous mesurons votre taux actuel de retours liés à la taille sur les références sélectionnées avant l'intégration.",
    s2t: "Intégration",
    s2d: "Widget sur 20 à 50 références d'une catégorie.",
    s3t: "Mesure",
    s3d: "8 à 12 semaines plus la période de retour, avec un groupe témoin ou une baseline historique sur les mêmes références et la même saison.",
    s4t: "Rapport",
    s4d: "Taux de retour, complétion, acceptation, conversion et chiffre d'affaires après retours.",
    caveatLabel: "Important",
    caveat: "Sans baseline mesurée avant l'intégration, aucun effet ne peut être démontré. Nous en faisons une clause de l'accord pilote.",
  },
  mesure: {
    eyebrow: "Ce que nous mesurons",
    titre: "Des définitions, pas des objectifs.",
    caption: "Indicateurs suivis pendant un pilote. Définitions seules : aucun objectif chiffré n'est publié.",
    colIndicateur: "Indicateur",
    colDefinition: "Définition",
    r1: "Taux de complétion du parcours",
    r1d: "Part des parcours de recommandation de taille commencés puis terminés par le client.",
    r2: "Part des clients qui conservent la taille recommandée",
    r2d: "Part des clients qui conservent la taille recommandée par SILLAGE.",
    r3: "Taux de retours liés à la taille par rapport à la baseline",
    r3d: "Taux de retours liés à la taille comparé à la baseline mesurée avant l'intégration.",
    r4: "Conversion sur les pages produit exposées",
    r4d: "Taux de conversion sur les pages produit où l'expérience de recommandation était affichée.",
    r5: "Couverture",
    r5d: "Part du catalogue pour laquelle SILLAGE peut fournir une recommandation à partir de données de tailles vérifiées.",
  },
  rgpd: {
    eyebrow: "Protection des données",
    titre: "Comment les mesures sont traitées.",
    p1: "Les mesures sont traitées dans le cadre d'un accord de traitement des données, pseudonymisées et conservées par défaut uniquement pendant la session, sans stockage d'images. Les données sont hébergées dans l'EEE. Le RGPD s'applique en Norvège par l'intermédiaire de la personopplysningsloven.",
    p2: "Nous fournissons le modèle d'accord de traitement des données et un résumé de l'AIPD sur demande.",
    reserve: "Région d'hébergement et durée de conservation pour un déploiement en production : [à confirmer au contrat].",
  },
  jamais: {
    eyebrow: "Ce que nous ne faisons pas",
    titre: "Trois limites que nous tenons.",
    l1: "Nous ne recommandons pas de taille lorsque le guide d'une marque ne contient pas une mesure critique.",
    l2: "Nous ne vendons pas les données de vos clients.",
    l3: "Nous ne publions pas de chiffres de réduction des retours que nous n'avons pas mesurés.",
  },
  form: {
    eyebrow: "Demander un pilote",
    titre: "Parlez-nous de votre catalogue.",
    prix: "Tarifs sur demande, SaaS ou par recommandation",
    company: "Société",
    website: "Site web",
    role: "Rôle",
    category: "Catégorie concernée",
    catNeoprene: "Néoprène",
    catSki: "Ski et snowboard",
    catBoth: "Les deux",
    orders: "Commandes en ligne mensuelles approximatives",
    ordersPlaceholder: "[ORDER RANGES TO BE PROVIDED]",
    tool: "Outil de taille actuel",
    toolNone: "Aucun",
    toolStatic: "Guide des tailles statique",
    toolThird: "Outil tiers",
    message: "Message",
    consent: "[CONSENT TEXT TO BE PROVIDED]",
    envoyer: "Envoyer la demande",
    envoi: "Envoi…",
    succes: "Merci — votre demande de pilote est bien reçue.",
    erreurCompany: "Indiquez le nom de votre société.",
    erreurWebsite: "Indiquez une adresse de site valide.",
    erreurConsent: "Merci de confirmer avant l'envoi.",
    erreurServeur: "La demande n'a pas pu être envoyée. Réessayez.",
    honeypot: "Laissez ce champ vide",
    optionnel: "facultatif",
    note: "Aucun e-mail n'est envoyé depuis ce formulaire, et aucun traçage ni automatisation marketing n'est utilisé.",
  },
  cloture: {
    phrase: "Conçu à Oslo. La Norvège d'abord, puis les pays nordiques.",
  },
  nav: {
    retour: "Retour à l'accueil",
  },
};

const BUSINESS: Partial<Record<Lang, Dict>> = { en: EN, no: NO, fr: FR };

/** Traducteur de la page entreprises, repli explicite sur l'anglais. */
export function makeTB(lang: Lang) {
  return (key: string): string => {
    const path = key.split(".");
    const pick = (obj: Dict | undefined) =>
      path.reduce<unknown>((o, k) => (o && typeof o === "object" ? (o as Dict)[k] : undefined), obj);
    const direct = pick(BUSINESS[lang]);
    const v = direct ?? pick(EN);
    if (typeof direct !== "string") {
      signalerManque("pages", `business.${key}`, lang, typeof v === "string" ? "repli_fr" : "absente");
    }
    return typeof v === "string" ? v : key;
  };
}

export type TB = ReturnType<typeof makeTB>;
