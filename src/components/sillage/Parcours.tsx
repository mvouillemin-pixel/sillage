import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { noteMarque } from "@/lib/sillage/editorial";
import {
  VOLETS,
  ZONES,
  trouverSousVolet,
  zonesDemandees,
  type SousVoletDef,
} from "@/lib/sillage/config";
import { evaluer } from "@/lib/sillage/restitution";
import { libelleMotif, motifsPourSousVolet, zonesDeclarees } from "@/lib/sillage/gene";
import type {
  Consentements,
  GeneMotifId,
  SessionParcours,
  ZoneId,
  ZoneNonEvaluee,
} from "@/lib/sillage/types";
import {
  LANG_NAMES,
  LANGS,
  libelleZone,
  makeT,
  protocoleZone,
  type Lang,
  useLang,
  type T,
} from "@/lib/sillage/i18n";
import {
  rendreJustification,
  rendreMessage,
  rendreZoneNonEvaluee,
} from "@/lib/sillage/restitution-texte";
import { PanneauDiagnostic } from "@/components/sillage/PanneauDiagnostic";
import { OptionScan } from "@/components/sillage/ScanCorporel";
import { profilMorphologique, zoneScanASensible, type ResultatScan } from "@/lib/sillage/scan";

import { useMetaLocalisee } from "@/lib/sillage/meta-i18n";
import { makeTP } from "@/lib/sillage/pages-i18n";
import { makeTC, type TC } from "@/lib/sillage/catalogue-i18n";
import { JaugeConfiance, PastilleNonEvaluee, PastilleVerdict } from "./Indicateurs";
import { Gabarit } from "./Gabarit";

const CONSENTEMENTS_INITIAUX: Consentements = {
  traitementSession: false,
  conservationProfil: false,
  reutilisationAgregee: false,
  transmissionMarchand: false,
};

/** Session éphémère : état en mémoire uniquement, aucune écriture persistante. */
const SESSION_INITIALE: SessionParcours = {
  reponsesUsage: {},
  mesures: {},
  consentements: CONSENTEMENTS_INITIAUX,
};

/** Transition d'étape : fondu sortant court, puis fondu entrant.
 *  Un verrou empêche qu'un double clic déclenche deux navigations. */
function useTransitionEtape() {
  const [etape, setEtapeBrut] = useState(0);
  const [sortie, setSortie] = useState(false);
  const verrou = useRef(false);
  const minuteur = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(minuteur.current), []);

  const allerA = (n: number, avant?: () => void) => {
    if (verrou.current) return;
    const reduit =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduit) {
      avant?.();
      setEtapeBrut(n);
      return;
    }
    verrou.current = true;
    setSortie(true);
    minuteur.current = setTimeout(() => {
      avant?.();
      setEtapeBrut(n);
      setSortie(false);
      verrou.current = false;
    }, 140);
  };

  return { etape, sortie, allerA };
}

export function Parcours() {
  const { etape, sortie, allerA } = useTransitionEtape();
  const [session, setSession] = useState<SessionParcours>(SESSION_INITIALE);
  const [lang, setLang] = useLang();
  const t = useMemo(() => makeT(lang), [lang]);
  const tp = useMemo(() => makeTP(lang), [lang]);
  const tc = useMemo(() => makeTC(lang), [lang]);
  useMetaLocalisee(lang, "app");

  const sousVolet = session.sousVolet ? trouverSousVolet(session.sousVolet) : undefined;

  return (
    <Gabarit>
      <div className="relative mx-auto w-full max-w-[1120px] px-5 pb-24 pt-8">
      <a
        href="#contenu-outil"
        className="sr-only rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground focus:not-sr-only focus:absolute focus:left-5 focus:top-4 focus:z-50"
      >
        {t("outil.skip")}
      </a>

      <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,40rem)_20rem] lg:justify-center lg:gap-10">
        <div className="flex min-h-screen w-full max-w-xl flex-col lg:min-h-0">
          <Entete etape={etape} t={t} lang={lang} onLang={setLang} />

          {/* Récapitulatif mobile : sous la progression, replié par défaut. */}
          <div className="mt-5 lg:hidden">
            <Recapitulatif t={t} tc={tc} session={session} etape={etape} variante="mobile" />
          </div>

          {/* Sortie en fondu (140 ms) puis entrée en fondu + léger glissement. */}
          <main
            id="contenu-outil"
            tabIndex={-1}
            key={sortie ? "sortie" : etape}
            className={`mt-11 flex-1 ${sortie ? "etape-sortie" : "etape-entree"}`}
          >

            {etape === 0 && (
              <EtapeSelection
                t={t}
                tp={tp}
                tc={tc}
                session={session}
                onChoix={(patch) =>
                  setSession((s) => {
                    const next = { ...s };
                    for (const [cle, val] of Object.entries(patch)) {
                      if (val === undefined) delete next[cle as "volet" | "discipline" | "sousVolet"];
                      else next[cle as "volet" | "discipline" | "sousVolet"] = val;
                    }
                    return next;
                  })
                }
                onSuivant={() => allerA(1)}
              />
            )}
            {etape === 1 && sousVolet && (
              <EtapeUsage
                t={t}
                tc={tc}
                lang={lang}
                sousVolet={sousVolet}
                session={session}
                setSession={setSession}
                onRetour={() => allerA(0)}
                onSuivant={() => allerA(2)}
              />
            )}
            {etape === 2 && sousVolet && (
              <EtapeMesures
                t={t}
                sousVolet={sousVolet}
                session={session}
                setSession={setSession}
                onRetour={() => allerA(1)}
                onSuivant={() => allerA(3)}
              />
            )}
            {etape === 3 && sousVolet && (
              <EtapeRestitution
                t={t}
                tc={tc}
                lang={lang}
                sousVolet={sousVolet}
                session={session}
                onRecommencer={() => allerA(0, () => setSession(SESSION_INITIALE))}
              />
            )}
          </main>
        </div>

        {/* Panneau récapitulatif desktop : collant, 320 px, lecture seule. */}
        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <Recapitulatif t={t} tc={tc} session={session} etape={etape} variante="desktop" />
          </div>
        </aside>
      </div>

      <PanneauDiagnostic lang={lang} />
      </div>
    </Gabarit>

  );
}

/* ------------------------------------------------- Récapitulatif de session

   Lecture seule : ce panneau n'affiche que ce que l'utilisateur a déjà
   déclaré pendant la session en cours. Aucune inférence, aucun appel au
   moteur. */

function lignesRecap(
  t: T,
  tc: TC,
  session: SessionParcours,
  etape: number,
): { cle: string; valeur: string }[] {
  const lignes: { cle: string; valeur: string }[] = [];
  const volet = VOLETS.find((v) => v.id === session.volet);
  const discipline = volet?.disciplines.find((d) => d.id === session.discipline);
  const sousVolet = discipline?.sousVolets.find((s) => s.id === session.sousVolet);

  if (volet) lignes.push({ cle: t("outil.recapFamille"), valeur: tc.entree(volet).libelle });
  if (discipline)
    lignes.push({ cle: t("outil.recapDiscipline"), valeur: tc.entree(discipline).libelle });
  if (sousVolet) lignes.push({ cle: t("outil.recapPiece"), valeur: tc.entree(sousVolet).libelle });

  if (sousVolet) {
    for (const q of sousVolet.questions) {
      const rep = session.reponsesUsage[q.id];
      if (!rep) continue;
      const opt = q.options.find((o) => o.valeur === rep);
      lignes.push({ cle: tc.question(q), valeur: opt ? tc.option(q, opt.valeur, opt.libelle) : rep });
    }
    const gene = session.gene;
    if (gene?.jamaisPorte) lignes.push({ cle: t("outil.recapGene"), valeur: t("outil.recapAucuneGene") });
    else if (gene?.motifs?.length)
      lignes.push({
        cle: t("outil.recapGene"),
        valeur: gene.motifs.map((m) => libelleMotif("fr", m)).join(", "),
      });
  }

  if (sousVolet && etape >= 2) {
    const critiques = zonesDemandees(sousVolet).filter((c) => c.critique);
    const saisies = critiques.filter((c) => session.mesures[c.zone]?.valeur).length;
    lignes.push({
      cle: t("outil.recapMesures"),
      valeur: t("outil.recapMesuresEtat")
        .replace("{n}", String(saisies))
        .replace("{total}", String(critiques.length)),
    });
  }

  return lignes;
}

function Recapitulatif({
  t,
  tc,
  session,
  etape,
  variante,
}: {
  t: T;
  tc: TC;
  session: SessionParcours;
  etape: number;
  variante: "mobile" | "desktop";
}) {
  const [ouvert, setOuvert] = useState(false);
  const lignes = lignesRecap(t, tc, session, etape);

  const liste =
    lignes.length === 0 ? (
      <p className="text-xs leading-relaxed text-muted-foreground">{t("outil.recapVide")}</p>
    ) : (
      <dl className="grid gap-2.5">
        {lignes.map((l) => (
          <div key={`${l.cle}-${l.valeur}`} className="grid gap-0.5">
            <dt className="text-[0.6875rem] uppercase tracking-wide text-muted-foreground">{l.cle}</dt>
            <dd className="break-words text-sm text-foreground">{l.valeur}</dd>
          </div>
        ))}
      </dl>
    );


  if (variante === "desktop") {
    return (
      <section aria-label={t("outil.recap")} className="surface-card p-5">
        <p className="eyebrow mb-3">{t("outil.recap")}</p>
        {liste}
      </section>
    );
  }

  return (
    <section aria-label={t("outil.recap")} className="rounded-2xl border border-border bg-card">
      <button
        type="button"
        aria-expanded={ouvert}
        aria-controls="recap-mobile"
        onClick={() => setOuvert((o) => !o)}
        className="flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left"
      >
        <span className="text-sm font-medium">{t("outil.recap")}</span>
        <span className="text-xs text-muted-foreground">
          {ouvert ? t("outil.recapFermer") : t("outil.recapOuvrir")}
        </span>
      </button>
      <div id="recap-mobile" hidden={!ouvert} className="fondu-etape border-t border-border px-4 py-4">
        {liste}
      </div>
    </section>
  );
}

function Entete({
  etape,
  t,
  lang,
  onLang,
}: {
  etape: number;
  t: T;
  lang: Lang;
  onLang: (l: Lang) => void;
}) {
  const etapes = [t("steps.s1"), t("steps.s2"), t("steps.s3"), t("steps.s4")];
  const annonce = t("outil.etapeEnCours")
    .replace("{n}", String(etape + 1))
    .replace("{nom}", etapes[etape] ?? "");
  return (
    <header>
      <div className="flex items-baseline justify-between gap-3">
        <h1 className="font-serif text-2xl tracking-tight">{t("app.nom")}</h1>
        <label className="flex items-center gap-2">
          <span className="sr-only">{t("app.langue")}</span>
          <select
            value={lang}
            onChange={(e) => onLang(e.target.value as Lang)}
            className="rounded-xl border border-input bg-background px-2 py-1 text-xs"
          >
            {LANGS.map((l) => (
              <option key={l} value={l}>
                {LANG_NAMES[l]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="eyebrow mt-1">{t("app.eyebrow")}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("app.tagline")}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t("app.dataNote")}</p>
      {/* L'étape en cours est annoncée à chaque changement, sans changer le visuel. */}
      <p aria-live="polite" className="sr-only">
        {annonce}
      </p>
      <ol className="mt-7 flex gap-1.5" aria-label={t("steps.progress")}>
        {etapes.map((nom, i) => (
          <li key={nom} className="flex-1">
            <div
              className={`h-1 rounded-full ${i <= etape ? "bg-primary" : "bg-border"}`}
              aria-current={i === etape ? "step" : undefined}
            />
            <span
              className={`mt-1.5 block text-[0.6875rem] ${
                i === etape ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {nom}
            </span>
          </li>
        ))}
      </ol>
    </header>
  );
}


function Titre({ sur, titre, sous }: { sur: string; titre: string; sous?: string }) {
  return (
    <div className="mb-5">
      <p className="eyebrow">{sur}</p>
      <h2 className="mt-1 text-xl">{titre}</h2>
      {sous ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sous}</p> : null}
    </div>
  );
}

function Carte({
  titre,
  description,
  actif,
  desactive,
  onClick,
  role,
}: {
  titre: string;
  description?: string | undefined;
  actif?: boolean | undefined;
  desactive?: boolean | undefined;
  onClick: () => void;
  /** « radio » dans un groupe à choix unique : l'état est exposé via aria-checked. */
  role?: "radio" | undefined;
}) {
  return (
    <button
      type="button"
      disabled={desactive}
      onClick={onClick}
      {...(role === "radio" ? { role: "radio", "aria-checked": actif === true } : {})}
      className={`carte-pressable w-full rounded-2xl border px-4 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        actif
          ? "border-primary bg-accent text-accent-foreground"
          : "border-border bg-card hover:border-ring"
      } ${desactive ? "cursor-not-allowed opacity-60 hover:border-border" : ""}`}

    >
      <span className="block text-sm font-medium">{titre}</span>
      {description ? (
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{description}</span>
      ) : null}
    </button>
  );
}

function Actions({
  onRetour,
  onSuivant,
  libelle,
  bloque,
  t,
}: {
  onRetour?: () => void;
  onSuivant: () => void;
  libelle?: string;
  bloque?: boolean;
  t: T;
}) {
  return (
    <div className="mt-11 flex gap-3">
      {onRetour ? (
        <button
          type="button"
          onClick={onRetour}
          className="survol-doux rounded-2xl border border-border px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground"
        >
          {t("buttons.back")}
        </button>
      ) : null}
      <button
        type="button"
        disabled={bloque}
        onClick={onSuivant}
        className="carte-pressable flex-1 rounded-2xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95 disabled:opacity-40"
      >
        {libelle ?? t("buttons.next")}
      </button>

    </div>
  );
}

/** Renvoi vers un repère éditorial, sans quitter le fil du parcours. */
function LienReperes({ ancre, libelle, t }: { ancre: string; libelle: string; t: T }) {
  return (
    <Link
      to="/reperes"
      hash={ancre}
      className="mt-8 block rounded-2xl border border-dashed border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
    >
      <span className="eyebrow block">{t("repere.mot")}</span>
      <span className="mt-1 block">{libelle}</span>
    </Link>
  );
}

/* ---------------------------------------------------------------- Étape 1 */

function EtapeSelection({
  t,
  tp,
  tc,
  session,
  onChoix,
  onSuivant,
}: {
  t: T;
  tp: (key: string) => string;
  tc: TC;
  session: SessionParcours;
  onChoix: (patch: {
    volet?: string | undefined;
    discipline?: string | undefined;
    sousVolet?: string | undefined;
  }) => void;
  onSuivant: () => void;
}) {
  const volet = VOLETS.find((v) => v.id === session.volet);
  const discipline = volet?.disciplines.find((d) => d.id === session.discipline);

  return (
    <div>
      <Titre
        sur={`${t("steps.etape")} 1`}
        titre={t("sel.titre")}
        sous={t("sel.sous")}
      />

      <p className="eyebrow mb-2" id="grp-famille">{t("sel.famille")}</p>
      <div className="grid gap-2" role="radiogroup" aria-labelledby="grp-famille">
        {VOLETS.map((v) => (
          <Carte
            key={v.id}
            titre={tc.entree(v).libelle}
            description={v.ouvert ? tc.entree(v).description : tc.motifFermeture(v)}
            desactive={!v.ouvert}
            role="radio"
            actif={session.volet === v.id}
            onClick={() => onChoix({ volet: v.id, discipline: undefined, sousVolet: undefined })}
          />
        ))}
      </div>

      {volet && volet.disciplines.length > 1 ? (
        <>
          <p className="eyebrow mb-2 mt-8" id="grp-discipline">{t("sel.discipline")}</p>
          <div className="grid gap-2" role="radiogroup" aria-labelledby="grp-discipline">
            {volet.disciplines.map((d) => (
              <Carte
                key={d.id}
                titre={tc.entree(d).libelle}
                description={tc.entree(d).description}
                role="radio"
                actif={session.discipline === d.id}
                onClick={() => onChoix({ discipline: d.id, sousVolet: undefined })}
              />
            ))}
          </div>
        </>
      ) : null}

      {volet && volet.disciplines.length === 1 && session.discipline !== volet.disciplines[0]!.id ? (
        <button
          type="button"
          className="mt-8 w-full rounded-xl border border-border px-4 py-2.5 text-sm"
          onClick={() => onChoix({ discipline: volet.disciplines[0]!.id })}
        >
          {t("buttons.pieces")}
        </button>
      ) : null}

      {discipline ? (
        <>
          <p className="eyebrow mb-2 mt-8" id="grp-piece">{t("sel.piece")}</p>
          <div className="grid gap-2" role="radiogroup" aria-labelledby="grp-piece">
            {discipline.sousVolets.map((s) => (
              <Carte
                key={s.id}
                titre={tc.entree(s).libelle}
                description={tc.entree(s).description}
                role="radio"
                actif={session.sousVolet === s.id}
                onClick={() => onChoix({ sousVolet: s.id })}
              />
            ))}
          </div>
        </>
      ) : null}

      <Actions t={t} onSuivant={onSuivant} bloque={!session.sousVolet} />

      <LienReperes t={t} ancre="une-grille-par-marque" libelle={t("repere.grille")} />

      <Link
        to="/bibliotheque"
        className="mt-3 block rounded-2xl border border-dashed border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
      >
        <span className="eyebrow block">{tp("biblio.eyebrow")}</span>
        <span className="mt-1 block">{tp("biblio.teaser")}</span>
      </Link>

    </div>
  );
}

/* ---------------------------------------------------------------- Étape 2 */

function EtapeUsage({
  t,
  tc,
  lang,
  sousVolet,
  session,
  setSession,
  onRetour,
  onSuivant,
}: {
  t: T;
  tc: TC;
  lang: Lang;
  sousVolet: SousVoletDef;
  session: SessionParcours;
  setSession: React.Dispatch<React.SetStateAction<SessionParcours>>;
  onRetour: () => void;
  onSuivant: () => void;
}) {
  const gene = session.gene;
  const motifs = useMemo(() => motifsPourSousVolet(sousVolet), [sousVolet]);
  const motifsCoches = gene?.motifs ?? [];
  const geneComplete = gene?.jamaisPorte === true || motifsCoches.length > 0;
  const usageComplet = sousVolet.questions.every((q) => session.reponsesUsage[q.id]);

  const basculerMotif = (id: GeneMotifId) => {
    setSession((s) => {
      const actuels = s.gene?.motifs ?? [];
      const def = motifs.find((m) => m.id === id);
      let suivants: GeneMotifId[];
      if (actuels.includes(id)) {
        suivants = actuels.filter((x) => x !== id);
      } else if (def?.exclusif) {
        suivants = [id];
      } else {
        suivants = [...actuels.filter((x) => !motifs.find((m) => m.id === x)?.exclusif), id];
      }
      return {
        ...s,
        gene: { jamaisPorte: false, motifs: suivants, zones: zonesDeclarees(suivants, motifs) },
      };
    });
  };

  return (
    <div>
      <Titre
        sur={`${t("steps.etape")} 2`}
        titre={t("usage.titre")}
        sous={t("usage.sous")}
      />

      <div className="grid gap-6">
        {sousVolet.questions.map((q) => (
          <fieldset key={q.id}>
            <legend className="mb-2 text-sm font-medium">{tc.question(q)}</legend>
            <div className="grid gap-2" role="radiogroup" aria-label={tc.question(q)}>
              {q.options.map((o) => (
                <Carte
                  key={o.valeur}
                  titre={tc.option(q, o.valeur, o.libelle)}
                  role="radio"
                  actif={session.reponsesUsage[q.id] === o.valeur}
                  onClick={() =>
                    setSession((s) => ({
                      ...s,
                      reponsesUsage: { ...s.reponsesUsage, [q.id]: o.valeur },
                    }))
                  }
                />
              ))}
            </div>
          </fieldset>
        ))}

        <fieldset>
          <legend className="mb-2 text-sm font-medium">
            {t("usage.geneTitre")}
          </legend>
          <div className="grid gap-2" role="radiogroup" aria-label={t("usage.geneTitre")}>
            <Carte
              titre={t("usage.jamais")}
              role="radio"
              actif={gene?.jamaisPorte === true}
              onClick={() =>
                setSession((s) => ({ ...s, gene: { jamaisPorte: true, motifs: [], zones: [] } }))
              }
            />
            <Carte
              titre={t("usage.oui")}
              role="radio"
              actif={gene?.jamaisPorte === false}
              onClick={() =>
                setSession((s) => ({
                  ...s,
                  gene: {
                    jamaisPorte: false,
                    motifs: s.gene?.jamaisPorte === false ? (s.gene.motifs ?? []) : [],
                    zones: s.gene?.jamaisPorte === false ? (s.gene.zones ?? []) : [],
                  },
                }))
              }
            />
          </div>

          {gene && !gene.jamaisPorte ? (
            <div className="bloc-conditionnel mt-4 grid gap-2 rounded-2xl border border-border bg-card p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {t("usage.geneMulti")}
              </p>
              {motifs.map((m) => {
                const coche = motifsCoches.includes(m.id);
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-pressed={coche}
                    onClick={() => basculerMotif(m.id)}
                    className={`survol-doux flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-[background-color,border-color,color] duration-[420ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                      coche
                        ? "border-primary bg-accent text-accent-foreground"
                        : "border-border bg-background hover:border-ring"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`flex size-5 shrink-0 items-center justify-center rounded-md border text-[11px] font-semibold transition-all duration-[420ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                        coche ? "border-primary bg-primary text-primary-foreground" : "border-input"
                      }`}
                    >
                      {coche ? "✓" : ""}
                    </span>
                    <span className="text-sm font-medium">{libelleMotif(lang, m.id)}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </fieldset>
      </div>

      <Actions
        t={t}
        onRetour={onRetour}
        onSuivant={onSuivant}
        bloque={!usageComplet || !geneComplete}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- Étape 3 */

function EtapeMesures({
  t,
  sousVolet,
  session,
  setSession,
  onRetour,
  onSuivant,
}: {
  t: T;
  sousVolet: SousVoletDef;
  session: SessionParcours;
  setSession: React.Dispatch<React.SetStateAction<SessionParcours>>;
  onRetour: () => void;
  onSuivant: () => void;
}) {
  const champs = useMemo(() => zonesDemandees(sousVolet), [sousVolet]);
  const critiquesRemplies = champs
    .filter((c) => c.critique)
    .every((c) => session.mesures[c.zone]?.valeur);
  const consentOk = session.consentements.traitementSession;
  const [scan, setScan] = useState<ResultatScan | null>(null);

  const majMesure = (zone: ZoneId, brut: string) => {
    const valeur = Number(brut.replace(",", "."));
    setSession((s) => {
      const mesures = { ...s.mesures };
      if (!brut || Number.isNaN(valeur)) delete mesures[zone];
      // Une valeur retouchée à la main cesse d'être une valeur de scan.
      else mesures[zone] = { zone, valeur, provenance: "manual" };
      return { ...s, mesures };
    });
  };

  const confirmerMesure = (zone: ZoneId) => {
    setSession((s) => {
      const existante = s.mesures[zone];
      if (!existante) return s;
      return {
        ...s,
        mesures: { ...s.mesures, [zone]: { ...existante, provenance: "manual_reconfirmed" } },
      };
    });
  };

  /** Le scan pré-remplit ; il ne valide rien à la place de l'utilisateur. */
  const appliquerScan = (resultat: ResultatScan) => {
    setScan(resultat);
    setSession((s) => {
      const mesures = { ...s.mesures };
      for (const m of resultat.mesures) {
        const aConfirmer = zoneScanASensible(m.zone) || m.confianceCapture === "basse";
        mesures[m.zone] = {
          zone: m.zone,
          valeur: m.valeur,
          provenance: aConfirmer ? "scanned_low_confidence" : "scanned",
        };
      }
      return { ...s, mesures };
    });
  };

  const abandonnerScan = () => {
    setScan(null);
    setSession((s) => {
      const mesures = { ...s.mesures };
      for (const zone of Object.keys(mesures) as ZoneId[]) {
        const m = mesures[zone];
        if (m && (m.provenance === "scanned" || m.provenance === "scanned_low_confidence")) {
          delete mesures[zone];
        }
      }
      return { ...s, mesures };
    });
  };

  const profil = scan ? profilMorphologique(scan.mesures) : undefined;
  const aConfirmer = champs.some(
    ({ zone }) => session.mesures[zone]?.provenance === "scanned_low_confidence",
  );
  const nonCouvertes = (scan?.zonesNonCouvertes ?? []).filter((z) =>
    champs.some((c) => c.zone === z),
  );

  return (
    <div>
      <Titre
        sur={`${t("steps.etape")} 3`}
        titre={t("mes.titre")}
        sous={t("mes.sous")}
      />

      <OptionScan
        t={t}
        zones={champs.map((c) => c.zone)}
        {...(session.genre ? { genre: session.genre } : {})}
        actif={scan !== null}
        onResultat={appliquerScan}
        onAnnuler={abandonnerScan}
      />

      {scan ? (
        <div className="mb-6 rounded-2xl border border-border bg-muted/40 p-4">
          <p className="text-sm font-medium">{t("mes.scan.termine")}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {t("mes.scan.avertissement")}
          </p>
          {profil ? (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {t("mes.scan.profilA")}
            </p>
          ) : null}
          {nonCouvertes.length > 0 ? (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {t("mes.scan.nonCouvertes")}{" "}
              {nonCouvertes.map((z) => libelleZone(t, z).toLowerCase()).join(", ")}.
            </p>
          ) : null}
        </div>
      ) : null}

      {/* Deux groupes : déterminantes d'abord, facultatives ensuite.
          Le classement « déterminant » vient de la configuration moteur ; il
          n'est pas modifié ici. */}
      <GroupeMesures
        t={t}
        titre={t("outil.mesuresDeterminantes")}
        champs={champs.filter((c) => c.critique)}
        session={session}
        majMesure={majMesure}
        confirmerMesure={confirmerMesure}
      />

      {champs.some((c) => !c.critique) ? (
        <GroupeMesures
          t={t}
          titre={t("outil.mesuresFacultatives")}
          /* L'avertissement n'apparaît qu'une fois, en tête du groupe. */
          avertissement={t("mes.sansMesure")}
          champs={champs.filter((c) => !c.critique)}
          session={session}
          majMesure={majMesure}
          confirmerMesure={confirmerMesure}
        />
      ) : null}


      <LienReperes t={t} ancre="bien-mesurer" libelle={t("repere.mesurer")} />

      <BlocConsentement t={t} session={session} setSession={setSession} />

      <Actions
        t={t}
        onRetour={onRetour}
        onSuivant={onSuivant}
        libelle={t("buttons.result")}
        bloque={!critiquesRemplies || !consentOk || aConfirmer}
      />
      {!critiquesRemplies ? (
        <p className="mt-3 text-xs text-muted-foreground">{t("mes.manque")}</p>
      ) : null}
      {aConfirmer ? (
        <p className="mt-3 text-xs text-muted-foreground">{t("mes.scan.bloque")}</p>
      ) : null}
    </div>
  );
}


/** Un groupe de mesures : une ligne compacte par champ, protocole replié. */
function GroupeMesures({
  t,
  titre,
  avertissement,
  champs,
  session,
  majMesure,
  confirmerMesure,
}: {
  t: T;
  titre: string;
  avertissement?: string;
  champs: { zone: ZoneId; critique: boolean }[];
  session: SessionParcours;
  majMesure: (zone: ZoneId, brut: string) => void;
  confirmerMesure: (zone: ZoneId) => void;
}) {
  if (champs.length === 0) return null;
  return (
    <section className="mt-6">
      <h3 className="eyebrow mb-2">{titre}</h3>
      {avertissement ? (
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{avertissement}</p>
      ) : null}
      <div className="grid gap-2.5">
        {champs.map(({ zone }) => {
          const def = ZONES[zone];
          const mesure = session.mesures[zone];
          const valeur = mesure?.valeur;
          const issuScan =
            mesure?.provenance === "scanned" || mesure?.provenance === "scanned_low_confidence";
          const sensible = mesure?.provenance === "scanned_low_confidence";
          return (
            <div key={zone} className="surface-card px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label htmlFor={`m-${zone}`} className="text-sm font-medium">
                  {libelleZone(t, zone)}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id={`m-${zone}`}
                    inputMode="decimal"
                    value={valeur ?? ""}
                    onChange={(e) => majMesure(zone, e.target.value)}
                    placeholder={t("champ.vide")}
                    className="w-24 rounded-xl border border-input bg-background px-3 py-2 text-sm tabular-nums outline-none focus:border-ring"
                  />
                  <span className="text-sm text-muted-foreground">{def.unite}</span>
                </div>
              </div>

              {issuScan || mesure?.provenance === "manual_reconfirmed" ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {issuScan ? (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[0.625rem] uppercase tracking-wide text-muted-foreground">
                      {t("mes.scan.badge")}
                    </span>
                  ) : null}
                  {mesure?.provenance === "manual_reconfirmed" ? (
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.625rem] uppercase tracking-wide text-secondary-foreground">
                      {t("mes.scan.badgeConfirme")}
                    </span>
                  ) : null}
                </div>
              ) : null}

              {/* Protocole de mesure : conservé, simplement replié. */}
              <details className="mt-2 group">
                <summary className="cursor-pointer list-none text-xs text-muted-foreground underline decoration-dotted underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {t("outil.commentMesurer")}
                </summary>
                <p className="bloc-conditionnel mt-2 text-xs leading-relaxed text-muted-foreground">
                  {protocoleZone(t, zone)}
                </p>
              </details>

              {sensible ? (
                <div className="mt-3 rounded-xl border border-[var(--verdict-ambre,var(--border))] bg-muted/40 p-3">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {t("mes.scan.sensible")}
                  </p>
                  <button
                    type="button"
                    onClick={() => confirmerMesure(zone)}
                    className="mt-2 rounded-2xl border border-border px-3 py-1.5 text-xs font-medium transition-[background-color,border-color] duration-500 hover:bg-muted"
                  >
                    {t("mes.scan.confirmer")}
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BlocConsentement({
  t,
  session,
  setSession,
}: {
  t: T;
  session: SessionParcours;
  setSession: React.Dispatch<React.SetStateAction<SessionParcours>>;
}) {
  const c = session.consentements;
  const ligne = (
    cle: keyof Consentements,
    libelle: string,
    detail: string,
  ) => (
    <label key={cle} className="flex gap-3 py-2.5 text-sm">
      <input
        type="checkbox"
        checked={c[cle]}
        onChange={(e) =>
          setSession((s) => ({
            ...s,
            consentements: { ...s.consentements, [cle]: e.target.checked },
          }))
        }
        className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]"
      />
      <span>
        <span className="block">{libelle}</span>
        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{detail}</span>
      </span>
    </label>
  );

  return (
    <section className="surface-card mt-8 p-4">
      <h3 className="text-sm font-medium">{t("consent.titre")}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t("consent.intro")}</p>
      <div className="mt-2 divide-y divide-border">
        {ligne("traitementSession", t("consent.sessionL"), t("consent.sessionD"))}
        {ligne("conservationProfil", t("consent.profilL"), t("consent.profilD"))}
        {ligne("reutilisationAgregee", t("consent.agregeL"), t("consent.agregeD"))}
        {ligne("transmissionMarchand", t("consent.marchandL"), t("consent.marchandD"))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t("consent.droits")}</p>
    </section>
  );
}

/* ---------------------------------------------------------------- Étape 4 */

/**
 * Note de coupe éditoriale : ce que la marque déclare, à côté du chiffre.
 * Le corpus éditorial n'existe qu'en français : dans une autre langue, on le
 * signale explicitement plutôt que de laisser croire à une traduction.
 */
function NoteCoupe({ marqueId, t, lang }: { marqueId: string; t: T; lang: Lang }) {
  const note = noteMarque(marqueId);
  if (!note) return null;
  return (
    <div className="mt-4 rounded-xl border border-border bg-muted/60 p-3">
      <p className="eyebrow">
        {t("res.coupeDeclaree")} ·{" "}
        {note.statut === "officiel" ? t("res.sourceMarque") : t("res.sourceSecondaire")}
        {lang === "fr" ? null : ` · ${t("res.noteEnFrancais")}`}
      </p>
      {note.coupe ? <p className="mt-1.5 text-xs leading-relaxed">{note.coupe}</p> : null}
      {note.consigne ? (
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{note.consigne}</p>
      ) : null}
    </div>
  );
}


/**
 * Zones écartées de l'évaluation : un seul bloc discret, replié par défaut.
 * On n'affiche jamais une pastille ni un paragraphe par zone manquante.
 */
function ZonesNonEvaluees({
  zones,
  t,
  lang,
}: {
  zones: ZoneNonEvaluee[];
  t: T;
  lang: Lang;
}) {
  const [ouvert, setOuvert] = useState(false);
  if (zones.length === 0) return null;

  const libelles = zones.map((z) => libelleZone(t, z.zone).toLocaleLowerCase(lang));
  const apercu = libelles.slice(0, 3).join(", ");
  const reste = libelles.length - 3;
  const phrase =
    reste > 0
      ? `${t("res.nonEval.compact").replace("{zones}", apercu)} ${t("res.nonEval.reste").replace("{n}", String(reste))}`
      : t("res.nonEval.compact").replace("{zones}", apercu);

  return (
    <section className="mt-5 border-t border-border pt-3">
      <p className="text-xs leading-relaxed text-muted-foreground">{phrase}</p>
      <button
        type="button"
        onClick={() => setOuvert((o) => !o)}
        aria-expanded={ouvert}
        aria-controls="zones-non-evaluees"
        className="mt-1.5 inline-flex items-center gap-1 rounded-full text-xs text-muted-foreground underline underline-offset-2"
      >
        {ouvert ? t("res.nonEval.masquer") : t("res.nonEval.voir")}
      </button>
      {ouvert ? (
        <ul id="zones-non-evaluees" className="bloc-conditionnel mt-2 grid gap-1.5">
          {zones.map((z) => (
            <li key={`${z.zone}-${z.motif}`} className="text-xs leading-relaxed text-muted-foreground">
              {rendreZoneNonEvaluee(t, lang, z)}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function EtapeRestitution({
  t,
  tc,
  lang,
  sousVolet,
  session,
  onRecommencer,
}: {
  t: T;
  tc: TC;
  lang: Lang;
  sousVolet: SousVoletDef;
  session: SessionParcours;
  onRecommencer: () => void;
}) {
  const resultat = useMemo(() => evaluer(session), [session]);

  return (
    <div>
      <Titre
        sur={`${t("steps.etape")} 4`}
        titre={`${t("res.titre")} — ${tc.entree(sousVolet).libelle}`}
      />

      {resultat.refus ? (
        <div className="resultat-entree surface-card border-l-4 border-l-verdict-ajuste p-5">
          <p className="text-sm font-medium">{t("res.refusTitre")}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {rendreMessage(t, lang, resultat.refus)}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t("res.refusSuite")}
          </p>
        </div>
      ) : (
        <div className="grid gap-5">
          {resultat.indepartageables ? (
            <p className="text-sm text-muted-foreground">{t("res.indepartageables")}</p>
          ) : null}
          {resultat.recommandations.map((r) => {
            const phrases = rendreJustification(t, lang, r.justification);
            return (
              <article key={r.marqueId} className="resultat-entree survol-doux surface-card p-5">
                {/* 1. métadonnée discrète : marque + millésime de grille */}
                <p className="eyebrow text-center">
                  {r.marqueLibelle}
                  {r.millesimeGrille
                    ? ` · ${t("res.millesime").replace("{annee}", r.millesimeGrille)}`
                    : ""}
                </p>

                {/* 2. la taille recommandée : réponse principale */}
                <p className="taille-revelee mt-3 text-center font-serif leading-none text-[3rem] sm:text-[3.5rem]">
                  {r.tailleRecommandee}
                </p>

                {/* 3 et 4. jauge puis libellé de confiance */}
                <div className="mt-4">
                  <JaugeConfiance niveau={r.confiance} t={t} taille="large" />
                </div>

                {/* 5. une phrase d'explication ; le reste suit en secondaire */}
                {phrases[0] ? (
                  <p className="mt-4 text-center text-sm leading-relaxed">{phrases[0]}</p>
                ) : null}
                {phrases.length > 1 ? (
                  <div className="mt-3 grid gap-1.5 border-t border-border pt-3">
                    {phrases.slice(1).map((p: string) => (
                      <p key={p} className="text-xs leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}

                <NoteCoupe marqueId={r.marqueId} t={t} lang={lang} />

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.verdicts
                    .filter((v) => v.verdict !== null)
                    .map((v) => (
                      <PastilleVerdict
                        key={v.zone}
                        verdict={v.verdict!}
                        zone={libelleZone(t, v.zone)}
                        t={t}
                      />
                    ))}
                </div>

                <ZonesNonEvaluees zones={r.zonesNonEvaluees} t={t} lang={lang} />

              </article>
            );
          })}
        </div>
      )}

      <details className="mt-8 text-xs text-muted-foreground">
        <summary className="cursor-pointer">{t("res.tracabilite")}</summary>
        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 font-mono">
          <dt>{t("res.referentiel")}</dt>
          <dd>{resultat.versionReferentiel}</dd>
          <dt>{t("res.parametres")}</dt>
          <dd>{resultat.versionParametres}</dd>
          <dt>{t("res.horodatage")}</dt>
          <dd>{resultat.horodatage}</dd>
        </dl>
      </details>

      <LienReperes t={t} ancre="ce-que-la-grille-ne-dit-pas" libelle={t("repere.nonDit")} />

      <Actions t={t} onSuivant={onRecommencer} libelle={t("buttons.restart")} />
    </div>
  );
}

