/* Page « For business » de SILLAGE.

   Trois routes préfixées par langue rendent ce même composant :
   /no/for-bedrifter, /en/for-business, /fr/pour-les-entreprises.
   La langue de la route pilote l'affichage ; le sélecteur de langue
   navigue vers la route correspondante pour conserver le choix.

   Intégrité : aucun logo client, aucun témoignage, aucun chiffre de
   retour, aucun tarif. Les informations manquantes sont affichées
   entre crochets. L'ambre signale les réserves ; jamais le rouge. */

import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { z } from "zod";

import { Entete } from "@/components/marketing/Entete";
import { Pied } from "@/components/marketing/Pied";
import { GabaritMarketing } from "@/components/marketing/GabaritMarketing";
import { JaugeConfiance, PastilleVerdict } from "@/components/sillage/Indicateurs";
import { supabase } from "@/integrations/supabase/client";
import {
  CHEMIN_BUSINESS,
  makeTB,
  type LangBusiness,
  type TB,
} from "@/lib/sillage/business-i18n";
import { makeT, useLang, type Lang } from "@/lib/sillage/i18n";
import { makeTM } from "@/lib/sillage/marketing-i18n";

export function PageBusiness({ langue }: { langue: LangBusiness }) {
  const [, setLang] = useLang();
  const navigate = useNavigate();

  // La route fait foi : on mémorise la langue affichée pour le reste du site.
  useEffect(() => {
    setLang(langue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langue]);

  const t = useMemo(() => makeT(langue), [langue]);
  const tm = useMemo(() => makeTM(langue), [langue]);
  const tb = useMemo(() => makeTB(langue), [langue]);

  const changerLangue = (l: Lang) => {
    setLang(l);
    const cible = CHEMIN_BUSINESS[l as LangBusiness];
    if (cible) void navigate({ to: cible });
  };

  return (
    <GabaritMarketing>
      <a
        href="#contenu"
        className="sr-only rounded-[24px] bg-primary px-4 py-2 text-sm text-primary-foreground focus:not-sr-only focus:absolute focus:left-5 focus:top-4 focus:z-50"
      >
        {tm("nav.skip")}
      </a>

      <Entete lang={langue} onLang={changerLangue} t={t} tm={tm} />

      <main id="contenu" tabIndex={-1}>
        <Hero tb={tb} />
        <Integration tb={tb} t={t} />
        <Pilote tb={tb} />
        <Mesures tb={tb} />
        <Rgpd tb={tb} />
        <Limites tb={tb} />
        <SectionFormulaire tb={tb} langue={langue} />
        <Cloture tb={tb} tm={tm} />
      </main>

      <Pied lang={langue} onLang={changerLangue} t={t} tm={tm} />
    </GabaritMarketing>
  );
}

/* ------------------------------------------------------------- primitives */

const SECTION = "w-full border-t border-border/70";
const CONTENEUR = "mx-auto w-full max-w-[1120px] px-5 py-16 md:py-20";

function Titre({ eyebrow, titre }: { eyebrow: string; titre: string }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-foreground md:text-4xl">
        {titre}
      </h2>
    </>
  );
}

/** Réserve : ambre + libellé texte, jamais la couleur seule, jamais de rouge. */
function Reserve({ label, texte }: { label: string; texte: string }) {
  return (
    <p className="flex gap-3 rounded-2xl border border-verdict-ajuste/60 bg-verdict-ajuste/10 p-5 text-sm leading-relaxed text-foreground">
      <span className="font-mono text-xs uppercase tracking-wide text-verdict-ajuste">{label}</span>
      <span>{texte}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero({ tb }: { tb: TB }) {
  return (
    <section id="hero" className="w-full">
      <div className={CONTENEUR}>
        <p className="eyebrow">{tb("hero.eyebrow")}</p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
          {tb("hero.titre")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {tb("hero.sous")}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#pilote-form"
            className="rounded-[24px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {tb("hero.ctaPilote")}
          </a>
          <a
            href="#integration"
            className="rounded-[24px] border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
          >
            {tb("hero.ctaIntegration")}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- intégration */

function MaquetteWidget({ tb, t }: { tb: TB; t: ReturnType<typeof makeT> }) {
  return (
    <div
      role="img"
      aria-label={tb("integration.maquetteAria")}
      className="mx-auto w-full max-w-[18rem] rounded-[2rem] border border-border bg-card p-2 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.35)]"
    >
      <div className="overflow-hidden rounded-[1.6rem] border border-border/70 bg-background">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-border" aria-hidden />
        <div className="grid gap-3 p-4">
          <div className="h-20 rounded-xl border border-dashed border-border bg-muted/50" aria-hidden />
          <p className="font-serif text-base text-foreground">{tb("integration.produit")}</p>

          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-wide text-muted-foreground">
              {tb("integration.tailles")}
            </p>
            <div className="mt-1.5 flex gap-1.5">
              {["S", "M", "L", "XL"].map((s) => (
                <span
                  key={s}
                  className={`rounded-full border px-2.5 py-1 text-xs ${
                    s === "M"
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-2 rounded-2xl border border-border bg-card p-3 text-center">
            <p className="font-mono text-[0.625rem] uppercase tracking-wide text-muted-foreground">
              {tb("integration.panneau")}
            </p>
            <p className="font-serif text-3xl leading-none text-foreground">M</p>
            <JaugeConfiance niveau={4} t={t} />
            <div className="flex flex-wrap justify-center gap-1.5">
              <PastilleVerdict verdict="conforme" zone={t("zones.c.label")} t={t} />
              <PastilleVerdict verdict="ajuste" zone={t("zones.wa.label")} t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Integration({ tb, t }: { tb: TB; t: ReturnType<typeof makeT> }) {
  return (
    <section id="integration" className={SECTION}>
      <div className={CONTENEUR}>
        <Titre eyebrow={tb("integration.eyebrow")} titre={tb("integration.titre")} />
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-serif text-xl text-foreground">{tb("integration.widgetT")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tb("integration.widgetD")}
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-serif text-xl text-foreground">{tb("integration.apiT")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tb("integration.apiD")}
              </p>
            </article>
          </div>
          <div className="grid gap-3">
            <MaquetteWidget tb={tb} t={t} />
            <p className="text-center text-xs text-muted-foreground">
              {tb("integration.maquetteNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- pilote */

function Pilote({ tb }: { tb: TB }) {
  const etapes = [
    { t: tb("pilote.s1t"), d: tb("pilote.s1d") },
    { t: tb("pilote.s2t"), d: tb("pilote.s2d") },
    { t: tb("pilote.s3t"), d: tb("pilote.s3d") },
    { t: tb("pilote.s4t"), d: tb("pilote.s4d") },
  ];
  return (
    <section id="pilote" className={SECTION}>
      <div className={CONTENEUR}>
        <Titre eyebrow={tb("pilote.eyebrow")} titre={tb("pilote.titre")} />
        <ol
          aria-label={tb("pilote.stepper")}
          className="mt-10 grid gap-4 md:grid-cols-4"
        >
          {etapes.map((e, i) => (
            <li key={e.t} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {tb("pilote.etape").replace("{n}", String(i + 1))}
              </p>
              <h3 className="mt-2 font-serif text-lg text-foreground">{e.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-3xl">
          <Reserve label={tb("pilote.caveatLabel")} texte={tb("pilote.caveat")} />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- mesures */

function Mesures({ tb }: { tb: TB }) {
  const lignes = [
    [tb("mesure.r1"), tb("mesure.r1d")],
    [tb("mesure.r2"), tb("mesure.r2d")],
    [tb("mesure.r3"), tb("mesure.r3d")],
    [tb("mesure.r4"), tb("mesure.r4d")],
    [tb("mesure.r5"), tb("mesure.r5d")],
  ];
  return (
    <section id="mesures" className={SECTION}>
      <div className={CONTENEUR}>
        <Titre eyebrow={tb("mesure.eyebrow")} titre={tb("mesure.titre")} />
        {/* Défilement interne au bloc : jamais de scroll horizontal de page. */}
        <div
          className="mt-10 w-full overflow-x-auto rounded-2xl border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          tabIndex={0}
          role="group"
          aria-label={tb("mesure.titre")}
        >
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="px-5 pt-5 text-left text-xs text-muted-foreground">
              {tb("mesure.caption")}
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="px-5 py-3 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {tb("mesure.colIndicateur")}
                </th>
                <th scope="col" className="px-5 py-3 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {tb("mesure.colDefinition")}
                </th>
              </tr>
            </thead>
            <tbody>
              {lignes.map(([indicateur, definition]) => (
                <tr key={indicateur} className="border-b border-border/60 last:border-0">
                  <th scope="row" className="px-5 py-4 align-top font-medium text-foreground">
                    {indicateur}
                  </th>
                  <td className="px-5 py-4 align-top leading-relaxed text-muted-foreground">
                    {definition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ RGPD */

function Rgpd({ tb }: { tb: TB }) {
  return (
    <section id="donnees" className={SECTION}>
      <div className={CONTENEUR}>
        <Titre eyebrow={tb("rgpd.eyebrow")} titre={tb("rgpd.titre")} />
        <div className="mt-8 grid max-w-3xl gap-4">
          <p className="leading-relaxed text-muted-foreground">{tb("rgpd.p1")}</p>
          <p className="leading-relaxed text-muted-foreground">{tb("rgpd.p2")}</p>
          <p className="text-sm text-muted-foreground">{tb("rgpd.reserve")}</p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- limites */

function Limites({ tb }: { tb: TB }) {
  return (
    <section id="limites" className={SECTION}>
      <div className={CONTENEUR}>
        <Titre eyebrow={tb("jamais.eyebrow")} titre={tb("jamais.titre")} />
        <ul className="mt-8 grid max-w-3xl gap-3">
          {[tb("jamais.l1"), tb("jamais.l2"), tb("jamais.l3")].map((l) => (
            <li key={l} className="rounded-2xl border border-border bg-card p-5 leading-relaxed text-foreground">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- formulaire pilote */

const champ =
  "w-full rounded-2xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";
const etiquette = "text-xs font-medium text-muted-foreground";

function SectionFormulaire({ tb, langue }: { tb: TB; langue: LangBusiness }) {
  return (
    <section id="pilote-form" className={SECTION}>
      <div className={CONTENEUR}>
        <Titre eyebrow={tb("form.eyebrow")} titre={tb("form.titre")} />
        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {tb("form.prix")}
        </p>
        <div className="mt-8 max-w-2xl">
          <FormulairePilote tb={tb} langue={langue} />
        </div>
      </div>
    </section>
  );
}

function FormulairePilote({ tb, langue }: { tb: TB; langue: LangBusiness }) {
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [role, setRole] = useState("");
  const [category, setCategory] = useState("neoprene");
  const [orders, setOrders] = useState("");
  const [tool, setTool] = useState("none");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [piege, setPiege] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [etat, setEtat] = useState<"repos" | "envoi" | "ok">("repos");

  const schema = z.object({
    company: z.string().trim().min(1).max(150),
    website: z.string().trim().max(255).optional(),
    message: z.string().trim().max(2000).optional(),
  });

  async function envoyer(e: FormEvent) {
    e.preventDefault();
    setErreur(null);
    if (piege) return; // robot : rien n'est écrit, sans le signaler.
    if (!schema.shape.company.safeParse(company).success) return setErreur(tb("form.erreurCompany"));
    if (website.trim() && !/^([a-z]+:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(website.trim()))
      return setErreur(tb("form.erreurWebsite"));
    if (!consent) return setErreur(tb("form.erreurConsent"));

    setEtat("envoi");
    const { error } = await supabase.from("pilot_requests").insert({
      company: company.trim(),
      website: website.trim() || null,
      role: role.trim() || null,
      category,
      monthly_orders: orders.trim() || null,
      current_size_tool: tool,
      message: message.trim() || null,
      locale: langue,
      consent: true,
    });
    if (error) {
      setEtat("repos");
      setErreur(tb("form.erreurServeur"));
      return;
    }
    setEtat("ok");
  }

  if (etat === "ok") {
    return (
      <p role="status" className="rounded-2xl border border-border bg-mint/40 p-5 text-sm text-foreground">
        {tb("form.succes")}
      </p>
    );
  }

  return (
    <form onSubmit={envoyer} noValidate className="relative grid gap-4 rounded-2xl border border-border bg-card p-6">
      <label className="grid gap-1.5">
        <span className={etiquette}>{tb("form.company")}</span>
        <input className={champ} value={company} onChange={(e) => setCompany(e.target.value)} required />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className={etiquette}>{tb("form.website")}</span>
          <input
            className={champ}
            inputMode="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <label className="grid gap-1.5">
          <span className={etiquette}>
            {tb("form.role")} <span className="font-normal">({tb("form.optionnel")})</span>
          </span>
          <input className={champ} value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className={etiquette}>{tb("form.category")}</span>
          <select className={champ} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="neoprene">{tb("form.catNeoprene")}</option>
            <option value="ski">{tb("form.catSki")}</option>
            <option value="both">{tb("form.catBoth")}</option>
          </select>
        </label>
        <label className="grid gap-1.5">
          <span className={etiquette}>{tb("form.tool")}</span>
          <select className={champ} value={tool} onChange={(e) => setTool(e.target.value)}>
            <option value="none">{tb("form.toolNone")}</option>
            <option value="static">{tb("form.toolStatic")}</option>
            <option value="third_party">{tb("form.toolThird")}</option>
          </select>
        </label>
      </div>

      {/* Tranches de volume non définies : champ libre + repère explicite,
          plutôt que des options inventées. */}
      <label className="grid gap-1.5">
        <span className={etiquette}>{tb("form.orders")}</span>
        <input
          className={champ}
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          placeholder={tb("form.ordersPlaceholder")}
        />
      </label>

      <label className="grid gap-1.5">
        <span className={etiquette}>
          {tb("form.message")} <span className="font-normal">({tb("form.optionnel")})</span>
        </span>
        <textarea
          className={`${champ} min-h-28`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input
          type="checkbox"
          className="mt-0.5"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>{tb("form.consent")}</span>
      </label>

      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label>
          {tb("form.honeypot")}
          <input tabIndex={-1} autoComplete="off" value={piege} onChange={(e) => setPiege(e.target.value)} />
        </label>
      </div>

      {erreur ? (
        <p role="alert" className="text-xs text-verdict-ajuste">
          {erreur}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={etat === "envoi"}
        className="justify-self-start rounded-[24px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
      >
        {etat === "envoi" ? tb("form.envoi") : tb("form.envoyer")}
      </button>
      <p className="text-xs text-muted-foreground">{tb("form.note")}</p>
    </form>
  );
}

/* --------------------------------------------------------------- clôture */

function Cloture({ tb, tm }: { tb: TB; tm: ReturnType<typeof makeTM> }) {
  return (
    <section className={SECTION}>
      <div className="mx-auto w-full max-w-[1120px] px-5 py-14">
        <p className="font-serif text-xl text-foreground">{tb("cloture.phrase")}</p>
        <Link to="/" className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground">
          {tb("nav.retour")} · {tm("nav.cta")}
        </Link>
      </div>
    </section>
  );
}
