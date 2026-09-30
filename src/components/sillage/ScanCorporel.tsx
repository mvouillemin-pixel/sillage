import { useState } from "react";
import {
  fournisseurScan,
  type ResultatScan,
} from "@/lib/sillage/scan";
import type { ZoneId } from "@/lib/sillage/types";
import type { T } from "@/lib/sillage/i18n";

/**
 * Option de scan corporel : complément au relevé au mètre ruban.
 * Si le module est désactivé, ce composant ne rend rien et l'étape des
 * mesures reste strictement identique.
 */
export function OptionScan({
  t,
  zones,
  genre,
  actif,
  onResultat,
  onAnnuler,
}: {
  t: T;
  zones: ZoneId[];
  genre?: "homme" | "femme" | "unisexe";
  actif: boolean;
  onResultat: (r: ResultatScan) => void;
  onAnnuler: () => void;
}) {
  const fournisseur = fournisseurScan();
  const [ouvert, setOuvert] = useState(false);
  const [encours, setEncours] = useState(false);

  if (!fournisseur) return null;

  const lancer = async () => {
    setEncours(true);
    // Capture guidée simulée : le délai matérialise les étapes de pose.
    await new Promise((r) => setTimeout(r, 1400));
    const resultat = await fournisseur.lancer({ zones, ...(genre ? { genre } : {}) });
    setEncours(false);
    setOuvert(false);
    onResultat(resultat);
  };

  if (actif) {
    return (
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => void lancer()}
          disabled={encours}
          className="rounded-2xl border border-border px-4 py-2 text-xs font-medium transition-[background-color,border-color] duration-500 hover:bg-muted disabled:opacity-60"
        >
          {encours ? t("mes.scan.encours") : t("mes.scan.refaire")}
        </button>
        <button
          type="button"
          onClick={onAnnuler}
          className="text-xs text-muted-foreground underline underline-offset-4"
        >
          {t("mes.scan.annuler")}
        </button>
      </div>
    );
  }

  return (
    <div className="surface-card mb-6 p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium">{t("mes.scan.offre")}</p>
        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[0.625rem] uppercase tracking-wide text-muted-foreground">
          {t("mes.scan.optionnel")}
        </span>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
        {t("mes.scan.offreSous")}
      </p>

      {ouvert ? (
        <div className="mt-4 space-y-3">
          <ol className="space-y-1.5 text-xs leading-relaxed text-muted-foreground">
            <li>1. {t("mes.scan.etape1")}</li>
            <li>2. {t("mes.scan.etape2")}</li>
            <li>3. {t("mes.scan.etape3")}</li>
          </ol>
          {fournisseur.simulation ? (
            <p className="text-xs leading-relaxed text-muted-foreground">
              {t("mes.scan.simulation")}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => void lancer()}
              disabled={encours}
              className="rounded-2xl bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity duration-500 disabled:opacity-60"
            >
              {encours ? t("mes.scan.encours") : t("mes.scan.lancer")}
            </button>
            <button
              type="button"
              onClick={() => setOuvert(false)}
              className="text-xs text-muted-foreground underline underline-offset-4"
            >
              {t("mes.scan.annuler")}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          className="mt-3 rounded-2xl border border-border px-4 py-2 text-xs font-medium transition-[background-color,border-color] duration-500 hover:bg-muted"
        >
          {t("mes.scan.lancer")}
        </button>
      )}
    </div>
  );
}
