/* Maquettes produit rendues en CSS : aucun screenshot, aucune image
   externe, aucune donnée de marque inventée. Les composants réels du
   parcours (jauge de confiance, pastilles de verdict) sont réutilisés
   tels quels pour que la vitrine ne puisse pas diverger de l'outil. */

import type { ReactNode } from "react";

import { JaugeConfiance, PastilleNonEvaluee, PastilleVerdict } from "@/components/sillage/Indicateurs";
import type { T } from "@/lib/sillage/i18n";

/** Cadre de téléphone purement CSS. */
export function CadrePhone({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="mx-auto w-full max-w-[17rem] rounded-[2rem] border border-border bg-card p-2 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.35)]"
    >
      <div className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-background">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-border" aria-hidden />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

/** Carte de résultat : même hiérarchie que l'étape 4 de l'outil. */
export function CarteResultatDemo({ t }: { t: T }) {
  return (
    <div className="grid gap-3 text-center">
      <p className="eyebrow">[Brand] · [chart year]</p>
      <p className="font-serif text-5xl leading-none text-foreground">M</p>
      <JaugeConfiance niveau={4} t={t} taille="large" />
      <div className="flex flex-wrap justify-center gap-1.5 pt-1">
        <PastilleVerdict verdict="conforme" zone={t("zones.c.label")} t={t} />
        <PastilleVerdict verdict="ajuste" zone={t("zones.wa.label")} t={t} />
      </div>
      <BlocNonEvalue t={t} />
    </div>
  );
}

/** Regroupement « non évalué » tel qu'affiché sur la page de résultat. */
export function BlocNonEvalue({ t }: { t: T }) {
  return (
    <p className="rounded-2xl border border-dashed border-border bg-muted/40 p-3 text-left text-xs text-muted-foreground">
      {t("verdict.insuffisant")} — [zones not published by the brand]
    </p>
  );
}

/** Étape 1 : choix de la discipline. */
export function MaquetteEtape1({ t }: { t: T }) {
  return (
    <div className="grid gap-2 text-left">
      <p className="eyebrow">{t("steps.s1")}</p>
      <div className="rounded-2xl border border-primary bg-primary/10 p-3 text-sm">[Discipline A]</div>
      <div className="rounded-2xl border border-border p-3 text-sm text-muted-foreground">[Discipline B]</div>
      <div className="rounded-2xl border border-border p-3 text-sm text-muted-foreground">[Discipline C]</div>
    </div>
  );
}

/** Étape 2 : questions d'usage. */
export function MaquetteEtape2({ t }: { t: T }) {
  return (
    <div className="grid gap-2 text-left">
      <p className="eyebrow">{t("steps.s2")}</p>
      <p className="text-sm text-foreground">{t("usage.geneTitre")}</p>
      <div className="grid gap-1.5">
        {[t("usage.jamais"), t("usage.tropSerre"), t("usage.tropAmple")].map((l) => (
          <span key={l} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Étape 3 : saisie des mesures. */
export function MaquetteEtape3({ t }: { t: T }) {
  return (
    <div className="grid gap-2 text-left">
      <p className="eyebrow">{t("steps.s3")}</p>
      {[t("zones.c.label"), t("zones.wa.label"), t("zones.hp.label")].map((z) => (
        <div key={z} className="flex items-center justify-between rounded-2xl border border-border px-3 py-2 text-xs">
          <span className="text-muted-foreground">{z}</span>
          <span className="font-mono text-foreground">— cm</span>
        </div>
      ))}
    </div>
  );
}

/** Étape 4 : restitution. */
export function MaquetteEtape4({ t }: { t: T }) {
  return (
    <div className="grid gap-2 text-center">
      <p className="eyebrow">{t("steps.s4")}</p>
      <p className="font-serif text-4xl leading-none text-foreground">M</p>
      <JaugeConfiance niveau={3} t={t} />
      <div className="flex flex-wrap justify-center gap-1.5">
        <PastilleNonEvaluee zone="[zone]" t={t} />
      </div>
    </div>
  );
}
