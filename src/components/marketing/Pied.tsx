import { Link } from "@tanstack/react-router";

import { SelecteurLangue } from "@/components/sillage/SelecteurLangue";
import type { Lang, T } from "@/lib/sillage/i18n";
import type { TM } from "@/lib/sillage/marketing-i18n";
import { ORIGINE } from "@/lib/sillage/meta-i18n";

/* SILLAGE ne possède pas encore de compte officiel sur les réseaux :
   ces boutons ouvrent le partage de l'URL du site, jamais un profil inventé. */
function liensPartage(url: string) {
  const u = encodeURIComponent(url);
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    x: `https://twitter.com/intent/tweet?url=${u}`,
  };
}

export function Pied({
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
  const partage = liensPartage(ORIGINE);

  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid gap-3">
          <p className="font-serif text-lg tracking-wide text-foreground">SILLAGE</p>
          <p className="max-w-sm text-sm text-muted-foreground">{tm("pied.desc")}</p>
          <SelecteurLangue lang={lang} onLang={onLang} libelle={t("app.langue")} />
        </div>

        <nav aria-label={tm("pied.privacy")} className="grid content-start gap-2 text-sm">
          {/* Lien interne : fonctionne depuis n'importe quelle page, la langue
              active est conservée (elle vit dans le stockage local). */}
          <Link to="/" hash="privacy" className="text-muted-foreground hover:text-foreground">
            {tm("pied.privacy")}
          </Link>
          {/* Aucune page de conditions n'existe encore : on ne renvoie pas vers
              une page sans rapport, on annonce le manque. */}
          <p className="text-muted-foreground">
            {tm("pied.terms")} — [PLACEHOLDER: legal terms page needed]
          </p>
          <Link to="/reperes" className="text-muted-foreground hover:text-foreground">
            {tm("nav.reperes")}
          </Link>
          <Link to="/bibliotheque" className="text-muted-foreground hover:text-foreground">
            {tm("nav.library")}
          </Link>
        </nav>

        <div className="grid content-start gap-2 text-sm">
          <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {tm("pied.partager")}
          </p>
          <a href={partage.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            {tm("pied.linkedin")}
          </a>
          <a href={partage.facebook} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            {tm("pied.facebook")}
          </a>
          <a href={partage.x} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            {tm("pied.x")}
          </a>
          <p className="text-xs text-muted-foreground">{tm("pied.noSocial")}</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1120px] px-5 pb-10 text-xs text-muted-foreground">
        {tm("pied.copyright")}
      </div>
    </footer>
  );
}
