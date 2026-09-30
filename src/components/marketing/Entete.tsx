import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { SelecteurLangue } from "@/components/sillage/SelecteurLangue";
import type { Lang, T } from "@/lib/sillage/i18n";
import { CHEMIN_BUSINESS, type LangBusiness } from "@/lib/sillage/business-i18n";
import type { TM } from "@/lib/sillage/marketing-i18n";

/** En-tête collant de la page d'accueil. La langue active suit chaque lien. */
export function Entete({
  lang,
  onLang,
  t,
  tm,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
  t: T;
  tm: TM;
}) {
  const [ouvert, setOuvert] = useState(false);
  /* La page entreprises a une route par langue : le lien suit la langue active. */
  const lienBusiness = (CHEMIN_BUSINESS[lang as LangBusiness] ??
    "/en/for-business") as "/en/for-business";

  const ancres = [
    { href: "#comment", label: tm("nav.how") },
    { href: "#contact", label: tm("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between gap-4 px-5">
        <a href="#hero" className="font-serif text-lg tracking-wide text-foreground">
          SILLAGE
        </a>

        <nav aria-label={tm("nav.how")} className="hidden items-center gap-6 text-sm md:flex">
          <a className="text-muted-foreground hover:text-foreground" href="#comment">
            {tm("nav.how")}
          </a>
          <Link
            to={lienBusiness}
            className="text-muted-foreground hover:text-foreground"
          >
            {tm("nav.business")}
          </Link>
          <Link
            to="/bibliotheque"
            className="text-muted-foreground hover:text-foreground"
          >
            {tm("nav.library")}
          </Link>
          <a className="text-muted-foreground hover:text-foreground" href="#contact">
            {tm("nav.contact")}
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <SelecteurLangue lang={lang} onLang={onLang} libelle={t("app.langue")} />
          <Link
            to="/app"
            className="rounded-[24px] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {tm("nav.cta")}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          aria-label={ouvert ? tm("nav.close") : tm("nav.menu")}
          onClick={() => setOuvert((o) => !o)}
        >
          {ouvert ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {ouvert ? (
        <div id="menu-mobile" className="border-t border-border bg-background md:hidden">
          <div className="mx-auto grid w-full max-w-[1120px] gap-3 px-5 py-5 text-sm">
            {ancres.map((a) => (
              <a key={a.href} href={a.href} onClick={() => setOuvert(false)} className="text-foreground">
                {a.label}
              </a>
            ))}
            <Link to={lienBusiness} onClick={() => setOuvert(false)}>
              {tm("nav.business")}
            </Link>
            <Link to="/bibliotheque" onClick={() => setOuvert(false)}>
              {tm("nav.library")}
            </Link>
            <SelecteurLangue lang={lang} onLang={onLang} libelle={t("app.langue")} />
            <Link
              to="/app"
             
              onClick={() => setOuvert(false)}
              className="rounded-[24px] bg-primary px-4 py-2 text-center font-medium text-primary-foreground"
            >
              {tm("nav.cta")}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
