import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CALENDRIER,
  DISCIPLINES,
  FAMILLES_DEBUT,
  FICHES,
  NIVEAUX,
  NOTE_CALENDRIER,
  NOTE_PLONGEE,
  NOTE_SOURCES,
  NOTE_TEMPS_PRODUCTION,
  PROGRAMME,
  TEMPS_PRODUCTION,
  type DisciplineFiche,
  type FamilleDebut,
  type NiveauLecture,
} from "@/lib/sillage/bibliotheque";

import { journaliserConsultationSource } from "@/lib/sillage/consultations";
import { makeT, useLang } from "@/lib/sillage/i18n";
import { contenuLocalise, makeTP } from "@/lib/sillage/pages-i18n";
import { SelecteurLangue } from "@/components/sillage/SelecteurLangue";
import { PanneauDiagnostic } from "@/components/sillage/PanneauDiagnostic";
import { GabaritMarketing } from "@/components/marketing/GabaritMarketing";
import { headCommun, metaTextes, useMetaLocalisee } from "@/lib/sillage/meta-i18n";

const META = metaTextes("en", "bibliotheque");
const COMMUN = headCommun("bibliotheque");

export const Route = createFileRoute("/bibliotheque")({
  // Rendu serveur en anglais (défaut neutre) ; la langue active reprend la
  // main après hydratation via useMetaLocalisee.
  head: () => ({
    meta: [
      { title: META.titre },
      { name: "description", content: META.description },
      { property: "og:title", content: META.titre },
      { property: "og:description", content: META.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      ...COMMUN.meta,
    ],
    links: COMMUN.links,
  }),
  component: Bibliotheque,
});

/** Le mot « niveau » est banni de l'interface : chaque palier porte son nom. */
/** Clés i18n des familles : l'ajout d'une quatrième famille se fait ici. */
const CLE_FAMILLE: Partial<Record<FamilleDebut, string>> = {
  glisse: "familleGlisse",
  raquette: "familleRaquette",
  ballon_balle: "familleBallonBalle",
};

const CLE_PARCOURS: Record<NiveauLecture, string> = {
  0: "debuter",
  1: "decouvrir",
  2: "comprendre",
  3: "approfondir",
  4: "expert",
};

function Bibliotheque() {
  const [lang, setLang] = useLang();
  const tp = useMemo(() => makeTP(lang), [lang]);
  const t = useMemo(() => makeT(lang), [lang]);
  useMetaLocalisee(lang, "bibliotheque");
  const [parcours, setParcours] = useState<NiveauLecture | null>(null);
  const [discipline, setDiscipline] = useState<DisciplineFiche | null>(null);
  const [ouverte, setOuverte] = useState<string | null>(null);
  const [famille, setFamille] = useState<FamilleDebut | null>(null);

  const fiches = useMemo(
    () =>
      FICHES.filter(
        (f) =>
          (parcours === null || f.niveau === parcours) &&
          (famille === null || f.familleDebut === famille) &&
          (discipline === null || f.discipline === discipline),
      ),
    [parcours, discipline, famille],
  );

  const programme = useMemo(
    () =>
      PROGRAMME.filter(
        (p) =>
          (parcours === null || p.niveau === parcours) &&
          (discipline === null || p.discipline === discipline),
      ),
    [parcours, discipline],
  );

  const courant = NIVEAUX.find((n) => n.id === parcours);

  return (
    <GabaritMarketing variante="discret">
      <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-8">
      <header>
        <div className="flex items-baseline justify-between gap-3">
          <Link to="/" className="font-serif text-2xl tracking-tight">
            Sillage
          </Link>
          <SelecteurLangue lang={lang} onLang={setLang} libelle={t("app.langue")} />
        </div>
        <p className="eyebrow mt-1">{tp("biblio.eyebrow")}</p>
        <h1 className="mt-7 text-xl">{tp("biblio.titre")}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tp("biblio.sous")}</p>
      </header>

      {/* Point d'entrée « Débuter » : guidance écrite, pas de recommandation */}
      <section className="surface-card mt-7 p-5">
        <span className="eyebrow">{tp("biblio.debuterTitre")}</span>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {tp("biblio.debuterIntro")}
        </p>

        {/* Familles de sport : couche éditoriale au-dessus du parcours */}
        <p className="eyebrow mt-4">{tp("biblio.familleMot")}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {FAMILLES_DEBUT.map((fam) => {
            const indisponible = fam.statut === "a_venir";
            return (
              <Pastille
                key={fam.id}
                actif={famille === fam.id}
                disabled={indisponible}
                onClick={() => {
                  if (indisponible) return;
                  const suivant = famille === fam.id ? null : fam.id;
                  setFamille(suivant);
                  setParcours(suivant === null ? null : 0);
                }}
              >
                {tp(`biblio.${CLE_FAMILLE[fam.id] ?? fam.id}`)}
              </Pastille>
            );
          })}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {tp("biblio.familleAVenir")}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {tp("biblio.debuterNeoprene")}
        </p>
      </section>

      {/* Filtre par parcours de lecture */}
      <section className="mt-7">
        <span className="eyebrow">{tp("parcours.mot")}</span>
        <div className="mt-2 flex flex-wrap gap-2">
          <Pastille actif={parcours === null} onClick={() => setParcours(null)}>
            {tp("parcours.tous")}
          </Pastille>
          {NIVEAUX.map((n) => (
            <Pastille key={n.id} actif={parcours === n.id} onClick={() => setParcours(n.id)}>
              {tp(`parcours.${CLE_PARCOURS[n.id]}`)}
            </Pastille>
          ))}
        </div>
        {courant ? (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {courant.public} {courant.questions} {tp("parcours.lecture")} : {courant.duree}.
          </p>
        ) : null}
      </section>

      {/* Filtre par discipline */}
      <section className="mt-7">
        <span className="eyebrow">{tp("disc.mot")}</span>
        <div className="mt-2 flex flex-wrap gap-2">
          <Pastille actif={discipline === null} onClick={() => setDiscipline(null)}>
            {tp("disc.toutes")}
          </Pastille>
          {DISCIPLINES.map((d) => (
            <Pastille key={d.id} actif={discipline === d.id} onClick={() => setDiscipline(d.id)}>
              {tp(`disc.${d.id}`)}
            </Pastille>
          ))}
        </div>
        {discipline === "plongee" ? (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{NOTE_PLONGEE}</p>
        ) : null}
      </section>

      <main className="mt-7 grid gap-3">
        <span className="eyebrow">
          {fiches.length} {fiches.length > 1 ? tp("biblio.compteur") : tp("biblio.compteurUn")}
        </span>

        {fiches.length === 0 ? (
          <p className="surface-card p-5 text-sm leading-relaxed text-muted-foreground">
            {tp("biblio.vide")}
          </p>
        ) : null}

        {fiches.map((f) => {
          const ouvert = ouverte === f.id;
          const loc = contenuLocalise(lang, f.id);
          return (
            <article key={f.id} id={f.id} className="surface-card p-5">
              <button
                type="button"
                onClick={() => setOuverte(ouvert ? null : f.id)}
                className="w-full text-left"
                aria-expanded={ouvert}
              >
                <span className="eyebrow">
                  {tp(`parcours.${CLE_PARCOURS[f.niveau]}`)} · {tp(`disc.${f.discipline}`)}
                </span>
                <h2 className="mt-1.5 text-base">{loc.titre ?? f.titre}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {loc.chapo ?? f.chapo}
                </p>
                <span className="mt-2 block text-xs text-muted-foreground">
                  {ouvert ? tp("biblio.replier") : tp("biblio.lire")}
                </span>
              </button>

              {ouvert ? (
                <div className="mt-3 grid gap-2.5 border-t border-border pt-3">
                  {f.paragraphes.map((p) => (
                    <p key={p.slice(0, 24)} className="text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {f.limites ? (
                    <p className="rounded-xl bg-muted px-3 py-2 text-xs leading-relaxed">
                      {f.limites}
                    </p>
                  ) : null}
                  {f.sources ? (
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {tp("biblio.sources")} : {f.sources}
                    </p>
                  ) : null}
                  {f.sourcesLiens ? (
                    <ul className="grid gap-1">
                      {f.sourcesLiens.map((s) => (
                        <li key={s.url}>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            onClick={() => {
                              void journaliserConsultationSource(f.id, s.url);
                            }}
                            className="text-xs leading-relaxed underline underline-offset-2"
                          >
                            {s.libelle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {f.niveau === 0 ? (
                    <Link
                      to="/app"
                      className="mt-1 rounded-xl border border-border px-4 py-2.5 text-center text-sm"
                    >
                      {tp("biblio.debuterCta")}
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </main>

      {programme.length > 0 ? (
        <section className="mt-9">
          <span className="eyebrow">{tp("biblio.prochainement")}</span>
          <h2 className="mt-1.5 text-base">{tp("biblio.prochainementTitre")}</h2>
          <div className="mt-3 grid gap-2">
            {programme.map((p) => (
              <div
                key={`${p.discipline}-${p.titre}`}
                className="rounded-2xl border border-dashed border-border px-4 py-3"
              >
                <span className="eyebrow">
                  {tp(`parcours.${CLE_PARCOURS[p.niveau]}`)} · {tp(`disc.${p.discipline}`)} ·{" "}
                  {p.vague === 2 ? tp("biblio.vague2") : tp("biblio.vague1")}
                </span>
                <p className="mt-1 text-sm">{p.titre}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{p.resume}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-9">
        <span className="eyebrow">{tp("biblio.calendrier")}</span>
        <h2 className="mt-1.5 text-base">{tp("biblio.calendrierTitre")}</h2>
        <div className="mt-3 grid gap-2">
          {CALENDRIER.map((m) => (
            <div key={m.mois} className="surface-card p-4">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium">{m.mois}</p>
                <span className="eyebrow">{m.priorite}</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.production}</p>
              <p className="mt-1 text-xs leading-relaxed">
                {tp("biblio.calendrierVideo")} : {m.video}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{NOTE_CALENDRIER}</p>
      </section>

      <section className="mt-9">
        <span className="eyebrow">{tp("biblio.temps")}</span>
        <h2 className="mt-1.5 text-base">{tp("biblio.tempsTitre")}</h2>
        <div className="mt-3 grid gap-2">
          {TEMPS_PRODUCTION.map((t2) => (
            <div key={t2.niveau} className="rounded-2xl border border-border px-4 py-3">
              <span className="eyebrow">{tp(`parcours.${CLE_PARCOURS[t2.niveau]}`)}</span>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {tp("biblio.tempsArticle")} {t2.article} · {tp("biblio.tempsVideo")} {t2.video} ·{" "}
                {tp("biblio.tempsShort")} {t2.short}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {NOTE_TEMPS_PRODUCTION}
        </p>
      </section>

      {lang !== "fr" ? (
        <p className="mt-11 rounded-xl bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          {tp("langueTexte")}
        </p>
      ) : null}

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{NOTE_SOURCES}</p>

      <div className="mt-8 grid gap-2">
        <Link
          to="/"
          className="rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
        >
          {tp("nav.trouver")}
        </Link>
        <Link
          to="/reperes"
          className="rounded-xl border border-border px-4 py-2.5 text-center text-sm"
        >
          {tp("nav.reperes")}
        </Link>
      </div>

      <PanneauDiagnostic lang={lang} />
      </div>
    </GabaritMarketing>
  );
}

function Pastille({
  actif,
  onClick,
  disabled = false,
  children,
}: {
  actif: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={actif}
      className={`rounded-full border px-3 py-1.5 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
        actif
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-ring hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
