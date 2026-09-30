import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import {
  BlocNonEvalue,
  CadrePhone,
  CarteResultatDemo,
  MaquetteEtape1,
  MaquetteEtape2,
  MaquetteEtape3,
  MaquetteEtape4,
} from "@/components/marketing/Cadres";
import { FormulaireAccesAnticipe, FormulaireContact } from "@/components/marketing/Formulaires";
import type { Lang, T } from "@/lib/sillage/i18n";
import { CHEMIN_BUSINESS, type LangBusiness } from "@/lib/sillage/business-i18n";
import type { TM } from "@/lib/sillage/marketing-i18n";

/** Section pleine largeur, contenu contenu à 1120 px. */
function Section({
  id,
  children,
  ton = "clair",
}: {
  id: string;
  children: ReactNode;
  ton?: "clair" | "menthe";
}) {
  return (
    <section id={id} className={`w-full ${ton === "menthe" ? "bg-mint/40" : ""}`}>
      <div className="mx-auto w-full max-w-[1120px] px-5 py-20 md:py-28">{children}</div>
    </section>
  );
}

function Carte({ titre, texte }: { titre: string; texte: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-serif text-lg text-foreground">{titre}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{texte}</p>
    </div>
  );
}

export function Hero({ lang, t, tm }: { lang: Lang; t: T; tm: TM }) {
  const [variation, setVariation] = useState({ position: 0, titre: 0, cta: 0 });

  useEffect(() => {
    setVariation({
      position: Math.floor(Math.random() * 7),
      titre: Math.floor(Math.random() * 5),
      cta: Math.floor(Math.random() * 3),
    });
  }, []);

  return (
    <Section id="hero">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="grid gap-6">
          <p className="eyebrow text-primary" key={`position-${variation.position}`}>
            {tm(`hero.positions.p${variation.position + 1}`)}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            <span className="apparition" key={`titre-${variation.titre}`}>
              {tm(`hero.titres.t${variation.titre + 1}`)}
            </span>
          </h1>
          <p className="max-w-xl text-muted-foreground">{tm("hero.sous")}</p>
          <div>
            <Link
              to="/app"
              className="inline-flex rounded-[24px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              {tm(`hero.ctas.c${variation.cta + 1}`)}
            </Link>
          </div>
          <FormulaireAccesAnticipe lang={lang} tm={tm} />
        </div>
        <div className="order-first md:order-none">
          <CadrePhone label={tm("hero.mockAria")}>
            <CarteResultatDemo t={t} />
          </CadrePhone>
        </div>
      </div>
    </Section>
  );
}

export function Probleme({ tm }: { tm: TM }) {
  return (
    <Section id="probleme">
      <p className="eyebrow">{tm("probleme.eyebrow")}</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground">{tm("probleme.titre")}</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Carte titre={tm("probleme.c1t")} texte={tm("probleme.c1d")} />
        <Carte titre={tm("probleme.c2t")} texte={tm("probleme.c2d")} />
        <Carte titre={tm("probleme.c3t")} texte={tm("probleme.c3d")} />
      </div>
    </Section>
  );
}

export function Comment({ t, tm }: { t: T; tm: TM }) {
  const etapes = [
    { titre: tm("comment.s1t"), texte: tm("comment.s1d"), vue: <MaquetteEtape1 t={t} /> },
    { titre: tm("comment.s2t"), texte: tm("comment.s2d"), vue: <MaquetteEtape2 t={t} /> },
    { titre: tm("comment.s3t"), texte: tm("comment.s3d"), vue: <MaquetteEtape3 t={t} /> },
    { titre: tm("comment.s4t"), texte: tm("comment.s4d"), vue: <MaquetteEtape4 t={t} /> },
  ];
  return (
    <Section id="comment">
      <p className="eyebrow">{tm("comment.eyebrow")}</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground">{tm("comment.titre")}</h2>
      <ol className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {etapes.map((e, i) => (
          <li key={e.titre} className="grid gap-5">
            <CadrePhone label={e.titre}>{e.vue}</CadrePhone>
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h3 className="mt-1 font-serif text-lg text-foreground">{e.titre}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.texte}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Honnetete({ t, tm }: { t: T; tm: TM }) {
  return (
    <Section id="honnetete" ton="menthe">
      <p className="eyebrow">{tm("honnete.eyebrow")}</p>
      <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-foreground md:text-3xl">
        {tm("honnete.phrase")}
      </p>
      <div className="mt-10 max-w-xl rounded-2xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground">{tm("honnete.exemple")}</p>
        <div className="mt-4">
          <BlocNonEvalue t={t} />
        </div>
      </div>
      <p className="mt-6 max-w-xl text-sm text-muted-foreground">{tm("honnete.sous")}</p>
    </Section>
  );
}

export function Disciplines({ tm }: { tm: TM }) {
  const lignes = [
    { nom: tm("disc.neo"), etat: tm("disc.neoEtat") },
    { nom: tm("disc.ski"), etat: tm("disc.skiEtat") },
    { nom: tm("disc.harn"), etat: tm("disc.harnEtat") },
  ];
  return (
    <Section id="disciplines">
      <p className="eyebrow">{tm("disc.eyebrow")}</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground">{tm("disc.titre")}</h2>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {lignes.map((l) => (
          <li key={l.nom} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-serif text-lg text-foreground">{l.nom}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">{l.etat}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function TeaserPro({ tm, lang }: { tm: TM; lang: Lang }) {
  /* La page entreprises existe par langue : le lien suit la langue active. */
  const lienBusiness = (CHEMIN_BUSINESS[lang as LangBusiness] ??
    "/en/for-business") as "/en/for-business";
  return (
    <Section id="pro">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <p className="eyebrow">{tm("pros.eyebrow")}</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground">{tm("pros.titre")}</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{tm("pros.texte")}</p>
        <Link
          to={lienBusiness}
          className="mt-8 inline-flex rounded-[24px] border border-primary px-5 py-2.5 text-sm font-medium text-primary"
        >
          {tm("pros.cta")}
        </Link>
      </div>
    </Section>
  );
}

export function Roadmap({ tm }: { tm: TM }) {
  const jalons = [
    { d: tm("road.m1d"), l: tm("road.m1") },
    { d: tm("road.m2d"), l: tm("road.m2") },
    { d: tm("road.m3d"), l: tm("road.m3") },
    { d: tm("road.m4d"), l: tm("road.m4") },
  ];
  return (
    <Section id="roadmap">
      <p className="eyebrow">{tm("road.eyebrow")}</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground">{tm("road.titre")}</h2>
      <ol className="mt-10 grid max-w-2xl gap-0 border-l border-border pl-6">
        {jalons.map((j) => (
          <li key={j.l} className="relative py-5">
            <span className="absolute -left-[1.68rem] top-7 size-2.5 rounded-full bg-primary" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{j.d}</p>
            <p className="mt-1 text-foreground">{j.l}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm italic text-muted-foreground">{tm("road.avertissement")}</p>
    </Section>
  );
}

export function Confidentialite({ tm }: { tm: TM }) {
  const cartes = [
    { t: tm("privacy.c1t"), d: tm("privacy.c1d") },
    { t: tm("privacy.c2t"), d: tm("privacy.c2d") },
    { t: tm("privacy.c3t"), d: tm("privacy.c3d") },
    { t: tm("privacy.c4t"), d: tm("privacy.c4d") },
  ];
  return (
    <Section id="privacy" ton="menthe">
      <p className="eyebrow">{tm("privacy.eyebrow")}</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground">{tm("privacy.titre")}</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cartes.map((c) => (
          <Carte key={c.t} titre={c.t} texte={c.d} />
        ))}
      </div>
    </Section>
  );
}

export function Contact({ lang, tm }: { lang: Lang; tm: TM }) {
  return (
    <Section id="contact">
      <p className="eyebrow">{tm("contact.eyebrow")}</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground">{tm("contact.titre")}</h2>
      <div className="mt-10 max-w-2xl">
        <FormulaireContact lang={lang} tm={tm} />
      </div>
    </Section>
  );
}
