import { Check, ChevronsLeftRight, ChevronsRightLeft, CircleDot, HelpCircle } from "lucide-react";

import type { NiveauConfiance, Verdict } from "@/lib/sillage/types";
import type { T } from "@/lib/sillage/i18n";

const CLASSES: Record<Verdict, string> = {
  serre: "bg-verdict-serre text-verdict-foreground",
  ajuste: "bg-verdict-ajuste text-verdict-foreground",
  conforme: "bg-verdict-conforme text-verdict-foreground",
  ample: "bg-verdict-ample text-verdict-foreground",
};

/**
 * Chaque verdict porte une icône propre : la couleur ne doit jamais être le
 * seul canal d'information (daltonisme, impression, contraste dégradé).
 */
const ICONES: Record<Verdict, typeof Check> = {
  serre: ChevronsRightLeft,
  ajuste: CircleDot,
  conforme: Check,
  ample: ChevronsLeftRight,
};

export function PastilleVerdict({
  verdict,
  zone,
  t,
}: {
  verdict: Verdict;
  zone: string;
  t: T;
}) {
  const Icone = ICONES[verdict];
  return (
    <span className="apparition inline-flex items-center gap-1.5 rounded-full border border-border bg-muted py-1 pl-1 pr-2.5 text-xs">
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ${CLASSES[verdict]}`}
        style={{
          transition: "background-color var(--duree-etat) var(--ease-etat)",
        }}
      >
        <Icone className="size-3" aria-hidden />
        {t(`verdict.${verdict}`)}
      </span>
      <span className="text-muted-foreground">{zone}</span>
    </span>
  );
}

/** Cinquième état : donnée insuffisante. Gris, jamais masqué. */
export function PastilleNonEvaluee({ zone, t }: { zone: string; t: T }) {
  return (
    <span className="apparition inline-flex items-center gap-1.5 rounded-full border border-dashed border-border bg-transparent py-1 pl-1 pr-2.5 text-xs">
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[0.6875rem] font-medium text-muted-foreground">
        <HelpCircle className="size-3" aria-hidden />
        {t("verdict.insuffisant")}
      </span>
      <span className="text-muted-foreground">{zone}</span>
    </span>
  );
}

const PALIERS = [
  "bg-confiance-1",
  "bg-confiance-2",
  "bg-confiance-3",
  "bg-confiance-4",
  "bg-confiance-5",
];

export function JaugeConfiance({
  niveau,
  t,
  taille = "normale",
}: {
  niveau: NiveauConfiance;
  t: T;
  taille?: "normale" | "large";
}) {
  const large = taille === "large";
  return (
    <div className={large ? "grid justify-items-center gap-2" : "flex items-center gap-2"}>
      <div className="flex gap-1" aria-hidden>
        {PALIERS.map((c, i) => (
          <span
            key={c}
            className={`${large ? "h-2 w-9" : "h-1.5 w-5"} rounded-full ${i < niveau ? c : "bg-border"}`}
            style={{
              transition: `background-color var(--duree-etat) var(--ease-etat) ${i * 70}ms`,
              // Au résultat, les paliers apparaissent en cascade très courte.
              ...(large
                ? {
                    animation: `sillage-fondu 220ms var(--ease-apparition) ${380 + i * 70}ms both`,
                  }
                : {}),
            }}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">
        {t("confiance.mot")} {t(`confiance.${niveau}`)}
      </span>
    </div>
  );
}
