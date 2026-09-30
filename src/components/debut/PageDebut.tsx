/* SILLAGE START — page « Je commence / Start a sport ».

   Trois routes préfixées par langue rendent ce composant :
   /en/start, /fr/je-commence, /no/jeg-begynner.

   Intégrité : aucune règle inventée, aucun prix, aucun produit, aucune
   marque hors configuration vérifiée. Les manques restent visibles entre
   crochets. Ce module n'appelle jamais le moteur de taille SILLAGE Fit.

   Aucune intégration à la page d'accueil ni à la navigation globale
   n'est effectuée ici : la relation avec le parcours « Débuter » de la
   bibliothèque reste ouverte (décision d'architecture en attente). */

import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { Entete } from "@/components/marketing/Entete";
import { Pied } from "@/components/marketing/Pied";
import { GabaritMarketing } from "@/components/marketing/GabaritMarketing";
import { makeT, useLang, type Lang } from "@/lib/sillage/i18n";
import { makeTM } from "@/lib/sillage/marketing-i18n";
import {
  CHAMPS_VARIABLES,
  CHEMIN_DEBUT,
  SPORTS_DEBUT,
  variablesUtiles,
  type LangDebut,
  type SportDebut,
  type StatutSport,
  type VariableUtilisateur,
} from "@/lib/sillage/debut";
import { makeTD } from "@/lib/sillage/debut/i18n-debut";
import {
  parPriorite,
  setupDeDepart,
  type RecommandationEquipement,
  type ReponsesDebut,
} from "@/lib/sillage/debut/moteur-debut";
import type { FamilleDebut } from "@/lib/sillage/bibliotheque";

const ORDRE_FAMILLES: FamilleDebut[] = [
  "eau",
  "raquette",
  "ballon_balle",
  "glisse",
  "plein_air",
  "forme_combat",
];

const TON_STATUT: Record<StatutSport, string> = {
  personnalise: "border-primary/40 bg-primary/10 text-primary",
  guide: "border-border bg-muted/60 text-foreground",
  en_developpement: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
};

export function PageDebut({ langue }: { langue: LangDebut }) {
  const [, setLang] = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    setLang(langue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langue]);

  const t = useMemo(() => makeT(langue), [langue]);
  const tm = useMemo(() => makeTM(langue), [langue]);
  const td = useMemo(() => makeTD(langue), [langue]);

  const [sportId, setSportId] = useState<string | null>(null);
  const [etape, setEtape] = useState(1);
  const [reponses, setReponses] = useState<ReponsesDebut>({ variables: {}, usage: {} });

  const sport = SPORTS_DEBUT.find((s) => s.id === sportId) ?? null;

  const changerLangue = (l: Lang) => {
    setLang(l);
    const cible = CHEMIN_DEBUT[l as LangDebut];
    if (cible) void navigate({ to: cible as "/en/start" });
  };

  const choisir = (s: SportDebut) => {
    setSportId(s.id);
    setEtape(1);
    setReponses({ variables: {}, usage: {} });
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

      <main id="contenu" className="mx-auto w-full max-w-[1120px] px-5 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {td("page.eyebrow")}
        </p>
        <h1 className="mt-3 max-w-[640px] font-serif text-3xl leading-tight text-foreground sm:text-4xl">
          {td("page.titre")}
        </h1>
        <p className="mt-4 max-w-[640px] text-muted-foreground">{td("page.sous")}</p>

        {!sport ? (
          <ChoixSport td={td} onChoisir={choisir} />
        ) : (
          <Parcours
            key={sport.id}
            sport={sport}
            td={td}
            etape={etape}
            setEtape={setEtape}
            reponses={reponses}
            setReponses={setReponses}
            onChangerSport={() => setSportId(null)}
          />
        )}
      </main>

      <Pied lang={langue} onLang={changerLangue} t={t} tm={tm} />
    </GabaritMarketing>
  );
}

/* ------------------------------------------------------------------ */
/* Étape 0 : choix du sport, groupé par famille                        */
/* ------------------------------------------------------------------ */

function ChoixSport({
  td,
  onChoisir,
}: {
  td: ReturnType<typeof makeTD>;
  onChoisir: (s: SportDebut) => void;
}) {
  return (
    <div className="mt-12 grid gap-10">
      {ORDRE_FAMILLES.map((famille) => {
        const sports = SPORTS_DEBUT.filter((s) => s.famille === famille);
        if (sports.length === 0) return null;
        return (
          <section key={famille} aria-labelledby={`famille-${famille}`}>
            <h2
              id={`famille-${famille}`}
              className="font-serif text-xl text-foreground"
            >
              {td(`famille.${famille}`)}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sports.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onChoisir(s)}
                    className="flex w-full flex-col items-start gap-2 rounded-[20px] border border-border bg-card/80 p-4 text-left shadow-sm transition-colors duration-300 hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="font-medium text-foreground">{td(s.cle)}</span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs ${TON_STATUT[s.statut]}`}
                    >
                      {td(`statut.${s.statut}`)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Parcours en quatre étapes                                           */
/* ------------------------------------------------------------------ */

function Parcours({
  sport,
  td,
  etape,
  setEtape,
  reponses,
  setReponses,
  onChangerSport,
}: {
  sport: SportDebut;
  td: ReturnType<typeof makeTD>;
  etape: number;
  setEtape: (n: number) => void;
  reponses: ReponsesDebut;
  setReponses: (r: ReponsesDebut) => void;
  onChangerSport: () => void;
}) {
  const titres = [td("etapes.s1"), td("etapes.s2"), td("etapes.s3"), td("etapes.s4")];
  const recos = useMemo(() => setupDeDepart(sport, reponses), [sport, reponses]);
  const groupes = parPriorite(recos);
  const variables = variablesUtiles(sport);

  if (!sport.parcoursInteractif) {
    return <SportSansParcours sport={sport} td={td} onChangerSport={onChangerSport} />;
  }

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {td("etapes.progression", { n: etape, titre: titres[etape - 1] ?? "" })}
        </p>
        <button
          type="button"
          onClick={onChangerSport}
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          {td("etapes.recommencer")}
        </button>
      </div>

      <h2 className="mt-3 font-serif text-2xl text-foreground">
        {td(sport.cle)} — {titres[etape - 1]}
      </h2>

      <div className="mt-8 grid gap-6">
        {etape === 1 ? (
          <EtapeVariables
            td={td}
            variables={variables}
            reponses={reponses}
            setReponses={setReponses}
          />
        ) : null}

        {etape === 2 ? (
          <EtapeUsage sport={sport} td={td} reponses={reponses} setReponses={setReponses} />
        ) : null}

        {etape === 3 ? <EtapeBesoins td={td} groupes={groupes} /> : null}

        {etape === 4 ? <EtapeSetup td={td} recos={recos} /> : null}
      </div>

      <div className="mt-10 flex items-center gap-3">
        {etape > 1 ? (
          <button
            type="button"
            onClick={() => setEtape(etape - 1)}
            className="rounded-[24px] border border-border px-4 py-2 text-sm"
          >
            {td("etapes.precedent")}
          </button>
        ) : null}
        {etape < 4 ? (
          <button
            type="button"
            onClick={() => setEtape(etape + 1)}
            className="rounded-[24px] bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
          >
            {td("etapes.suivant")}
          </button>
        ) : null}
      </div>
    </div>
  );
}

function SportSansParcours({
  sport,
  td,
  onChangerSport,
}: {
  sport: SportDebut;
  td: ReturnType<typeof makeTD>;
  onChangerSport: () => void;
}) {
  return (
    <div className="mt-10 max-w-[640px] rounded-[24px] border border-amber-500/40 bg-amber-500/10 p-6">
      <h2 className="font-serif text-xl text-foreground">
        {td(sport.cle)} — {td("indispo.titre")}
      </h2>
      <p className="mt-3 text-sm text-foreground/80">{td("indispo.texte")}</p>

      {sport.fitDisponible ? (
        <p className="mt-4 text-sm text-foreground/80">
          {td("indispo.fit")}{" "}
          <Link to="/app" className="font-medium text-primary underline underline-offset-4">
            {td("indispo.fitCta")}
          </Link>
        </p>
      ) : null}

      {sport.ficheBibliotheque ? (
        <p className="mt-2 text-sm">
          <Link
            to="/bibliotheque"
            className="font-medium text-primary underline underline-offset-4"
          >
            {td("indispo.biblio")}
          </Link>
        </p>
      ) : null}

      <button
        type="button"
        onClick={onChangerSport}
        className="mt-6 rounded-[24px] border border-border px-4 py-2 text-sm"
      >
        {td("page.choixAutre")}
      </button>
    </div>
  );
}

/* --- Étape 1 : variables ------------------------------------------- */

function EtapeVariables({
  td,
  variables,
  reponses,
  setReponses,
}: {
  td: ReturnType<typeof makeTD>;
  variables: VariableUtilisateur[];
  reponses: ReponsesDebut;
  setReponses: (r: ReponsesDebut) => void;
}) {
  if (variables.length === 0) {
    return <p className="max-w-[640px] text-sm text-muted-foreground">{td("champ.aucun")}</p>;
  }
  const poser = (id: VariableUtilisateur, valeur: string) =>
    setReponses({ ...reponses, variables: { ...reponses.variables, [id]: valeur } });

  return (
    <div className="max-w-[640px] grid gap-6">
      <p className="text-sm text-muted-foreground">{td("champ.note")}</p>
      {variables.map((id) => {
        const champ = CHAMPS_VARIABLES[id];
        const valeur = reponses.variables[id] ?? "";
        if (champ.type === "nombre") {
          return (
            <label key={id} className="grid gap-2">
              <span className="text-sm font-medium text-foreground">
                {td(champ.cle)}
                {champ.unite ? ` (${champ.unite})` : ""}
              </span>
              <input
                type="number"
                inputMode="decimal"
                min={champ.min}
                max={champ.max}
                value={valeur}
                onChange={(e) => poser(id, e.target.value)}
                className="w-40 rounded-[16px] border border-border bg-background px-3 py-2 text-foreground"
              />
              <span className="text-xs text-muted-foreground">
                {td("champ.invalide", { min: champ.min ?? "", max: champ.max ?? "" })}
              </span>
            </label>
          );
        }
        return (
          <fieldset key={id} className="grid gap-2">
            <legend className="text-sm font-medium text-foreground">{td(champ.cle)}</legend>
            <div className="flex flex-wrap gap-2">
              {(champ.options ?? []).map((o) => (
                <label
                  key={o.valeur}
                  className={`cursor-pointer rounded-[20px] border px-3 py-1.5 text-sm ${
                    valeur === o.valeur ? "border-primary bg-primary/10 text-foreground" : "border-border"
                  }`}
                >
                  <input
                    type="radio"
                    name={id}
                    value={o.valeur}
                    checked={valeur === o.valeur}
                    onChange={() => poser(id, o.valeur)}
                    className="sr-only"
                  />
                  {td(o.cle)}
                </label>
              ))}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}

/* --- Étape 2 : usage ------------------------------------------------ */

function EtapeUsage({
  sport,
  td,
  reponses,
  setReponses,
}: {
  sport: SportDebut;
  td: ReturnType<typeof makeTD>;
  reponses: ReponsesDebut;
  setReponses: (r: ReponsesDebut) => void;
}) {
  if (sport.questionsUsage.length === 0) {
    return <p className="max-w-[640px] text-sm text-muted-foreground">{td("q.aucune")}</p>;
  }
  return (
    <div className="max-w-[640px] grid gap-6">
      {sport.questionsUsage.map((q) => (
        <fieldset key={q.id} className="grid gap-2">
          <legend className="text-sm font-medium text-foreground">{td(q.cle)}</legend>
          <div className="flex flex-wrap gap-2">
            {q.options.map((o) => {
              const actif = reponses.usage[q.id] === o.valeur;
              return (
                <label
                  key={o.valeur}
                  className={`cursor-pointer rounded-[20px] border px-3 py-1.5 text-sm ${
                    actif ? "border-primary bg-primary/10 text-foreground" : "border-border"
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={o.valeur}
                    checked={actif}
                    onChange={() =>
                      setReponses({ ...reponses, usage: { ...reponses.usage, [q.id]: o.valeur } })
                    }
                    className="sr-only"
                  />
                  {td(o.cle)}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
    </div>
  );
}

/* --- Étape 3 : ce qu'il vous faut ----------------------------------- */

function EtapeBesoins({
  td,
  groupes,
}: {
  td: ReturnType<typeof makeTD>;
  groupes: ReturnType<typeof parPriorite>;
}) {
  const blocs = [
    ["essentiel", groupes.essentiel],
    ["bientot", groupes.bientot],
    ["plus_tard", groupes.plus_tard],
  ] as const;

  return (
    <div className="grid gap-8">
      {blocs.map(([cle, items]) => (
        <section key={cle} className="max-w-[640px]">
          <h3 className="font-serif text-lg text-foreground">{td(`priorite.${cle}`)}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{td(`priorite.${cle}D`)}</p>
          {items.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">{td("priorite.vide")}</p>
          ) : (
            <ul className="mt-3 grid gap-2">
              {items.map((r) => (
                <li
                  key={r.equipementId}
                  className="rounded-[16px] border border-border bg-card/70 px-4 py-3"
                >
                  <p className="font-medium text-foreground">{td(r.cleNom)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{td(r.cleRaison)}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {td(`base.${r.base}`)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

/* --- Étape 4 : équipement de départ --------------------------------- */

function EtapeSetup({
  td,
  recos,
}: {
  td: ReturnType<typeof makeTD>;
  recos: RecommandationEquipement[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {recos.map((r) => (
        <article
          key={r.equipementId}
          className="rounded-[24px] border border-border bg-card/80 p-5 shadow-sm"
        >
          <header className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg text-foreground">{td(r.cleNom)}</h3>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {td(`priorite.${r.priorite}`)}
            </span>
          </header>

          <p className="mt-2 text-sm text-muted-foreground">{td(r.cleRaison)}</p>

          {r.valeur ? (
            <p className="mt-4 text-sm text-foreground">
              <span className="text-muted-foreground">{td("reco.valeur")} : </span>
              <span className="font-mono text-base">{r.valeur}</span>
            </p>
          ) : r.entreeManquante ? (
            <p className="mt-4 rounded-[16px] border border-border bg-muted/50 px-3 py-2 text-sm text-foreground/80">
              {td("reco.entreeManquante")}
            </p>
          ) : r.reserve ? (
            <div className="mt-4 rounded-[16px] border border-amber-500/40 bg-amber-500/10 px-3 py-2">
              <p className="font-mono text-xs text-amber-700 dark:text-amber-300">{r.reserve}</p>
              <p className="mt-1 text-sm text-foreground/80">{td("reco.indispo")}</p>
            </div>
          ) : null}

          <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {td(`base.${r.base}`)}
          </p>

          <details className="mt-3">
            <summary className="cursor-pointer text-sm text-primary underline underline-offset-4">
              {td("reco.pourquoi")}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">{td(r.cleExplication, r.params)}</p>
            {r.provenance ? (
              <p className="mt-1 text-xs text-muted-foreground">
                {td("reco.source")} : {r.provenance.emetteur} — {r.provenance.document}
                {r.provenance.version ? ` (${r.provenance.version})` : ""}
              </p>
            ) : null}
          </details>
        </article>
      ))}

      <p className="lg:col-span-2 rounded-[20px] border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
        <span className="font-mono text-xs">{td("reco.commerce")}</span> — {td("reco.commerceNote")}
      </p>
    </div>
  );
}
