/* Formulaires de la page d'accueil.

   Écriture seule : les visiteurs anonymes ne peuvent qu'insérer, jamais
   lire. Validation côté client par Zod, puis contraintes SQL côté base.
   Aucun envoi d'e-mail, aucun traçage, aucune automatisation marketing.
   Chaque formulaire porte un champ piège (honeypot) masqué. */

import { useState, type FormEvent } from "react";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import type { Lang } from "@/lib/sillage/i18n";
import type { TM } from "@/lib/sillage/marketing-i18n";

const champ =
  "w-full rounded-2xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";
const label = "text-xs font-medium text-muted-foreground";

function Piege({ valeur, onChange, libelle }: { valeur: string; onChange: (v: string) => void; libelle: string }) {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label>
        {libelle}
        <input tabIndex={-1} autoComplete="off" value={valeur} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

/* ---------------------------- Accès anticipé ---------------------------- */

export function FormulaireAccesAnticipe({ lang, tm }: { lang: Lang; tm: TM }) {
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState("individu");
  const [consent, setConsent] = useState(false);
  const [piege, setPiege] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [etat, setEtat] = useState<"repos" | "envoi" | "ok">("repos");

  const schema = z.object({
    email: z.string().trim().email().max(255),
    consentement: z.literal(true),
  });

  async function envoyer(e: FormEvent) {
    e.preventDefault();
    setErreur(null);
    if (piege) return; // robot : on n'écrit rien, sans le signaler.
    if (!schema.shape.email.safeParse(email).success) return setErreur(tm("wait.erreurEmail"));
    if (!consent) return setErreur(tm("wait.erreurConsent"));

    setEtat("envoi");
    const { error } = await supabase.from("early_access_signups").insert({
      email: email.trim(),
      langue: lang,
      segment,
      consentement: true,
    });
    if (error) {
      setEtat("repos");
      setErreur(tm("wait.erreurServeur"));
      return;
    }
    setEtat("ok");
  }

  if (etat === "ok") {
    return (
      <p className="rounded-2xl border border-border bg-mint/40 p-5 text-sm text-foreground">
        {tm("wait.succes")}
      </p>
    );
  }

  return (
    <form onSubmit={envoyer} noValidate className="relative grid gap-3 rounded-2xl border border-border bg-card p-5">
      <p className="font-serif text-lg text-foreground">{tm("wait.titre")}</p>

      <label className="grid gap-1.5">
        <span className={label}>{tm("wait.email")}</span>
        <input
          type="email"
          className={champ}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </label>

      <label className="grid gap-1.5">
        <span className={label}>{tm("wait.segment")}</span>
        <select className={champ} value={segment} onChange={(e) => setSegment(e.target.value)}>
          <option value="individu">{tm("wait.segIndividu")}</option>
          <option value="marque">{tm("wait.segMarque")}</option>
          <option value="revendeur">{tm("wait.segRevendeur")}</option>
        </select>
      </label>

      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input
          type="checkbox"
          className="mt-0.5"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>{tm("wait.consent")}</span>
      </label>

      <Piege valeur={piege} onChange={setPiege} libelle={tm("wait.honeypot")} />

      {erreur ? (
        <p role="alert" className="text-xs text-verdict-serre">
          {erreur}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={etat === "envoi"}
        className="rounded-[24px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
      >
        {etat === "envoi" ? tm("wait.envoi") : tm("wait.envoyer")}
      </button>
      <p className="text-xs text-muted-foreground">{tm("wait.note")}</p>
    </form>
  );
}

/* ------------------------------- Contact ------------------------------- */

export function FormulaireContact({ lang, tm }: { lang: Lang; tm: TM }) {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [societe, setSociete] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [piege, setPiege] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [etat, setEtat] = useState<"repos" | "envoi" | "ok">("repos");

  async function envoyer(e: FormEvent) {
    e.preventDefault();
    setErreur(null);
    if (piege) return;
    if (!nom.trim()) return setErreur(tm("contact.erreurNom"));
    if (!z.string().trim().email().max(255).safeParse(email).success)
      return setErreur(tm("contact.erreurEmail"));
    if (!message.trim()) return setErreur(tm("contact.erreurMessage"));

    setEtat("envoi");
    const { error } = await supabase.from("contact_messages").insert({
      nom: nom.trim(),
      email: email.trim(),
      societe: societe.trim() || null,
      role: role.trim() || null,
      message: message.trim(),
      langue: lang,
    });
    if (error) {
      setEtat("repos");
      setErreur(tm("contact.erreurServeur"));
      return;
    }
    setEtat("ok");
  }

  if (etat === "ok") {
    return (
      <p className="rounded-2xl border border-border bg-mint/40 p-5 text-sm text-foreground">
        {tm("contact.succes")}
      </p>
    );
  }

  return (
    <form onSubmit={envoyer} noValidate className="relative grid gap-3 rounded-2xl border border-border bg-card p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className={label}>{tm("contact.nom")}</span>
          <input className={champ} value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>
        <label className="grid gap-1.5">
          <span className={label}>{tm("contact.email")}</span>
          <input
            type="email"
            className={champ}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="grid gap-1.5">
          <span className={label}>
            {tm("contact.societe")} <span className="font-normal">({tm("contact.optionnel")})</span>
          </span>
          <input className={champ} value={societe} onChange={(e) => setSociete(e.target.value)} />
        </label>
        <label className="grid gap-1.5">
          <span className={label}>
            {tm("contact.role")} <span className="font-normal">({tm("contact.optionnel")})</span>
          </span>
          <input className={champ} value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className={label}>{tm("contact.message")}</span>
        <textarea
          className={`${champ} min-h-32`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <Piege valeur={piege} onChange={setPiege} libelle={tm("wait.honeypot")} />

      {erreur ? (
        <p role="alert" className="text-xs text-verdict-serre">
          {erreur}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={etat === "envoi"}
        className="justify-self-start rounded-[24px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
      >
        {etat === "envoi" ? tm("contact.envoi") : tm("contact.envoyer")}
      </button>
    </form>
  );
}
