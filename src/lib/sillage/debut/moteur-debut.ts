/* =========================================================
   SILLAGE START — moteur du parcours débutant.

   Fonction pure, sans dépendance à React ni à l'interface : la même
   logique pourra être servie par une API ou un widget partenaire.

   Ce moteur ne touche PAS au moteur de taille SILLAGE Fit (moteur.ts) :
   ni score, ni confiance, ni classement de tailles. Il ne produit
   jamais de valeur numérique inventée : si la règle n'est pas vérifiée,
   il renvoie un statut d'indisponibilité explicite.
   ========================================================= */

import type {
  Equipement,
  Priorite,
  SportDebut,
  TypePersonnalisation,
  VariableUtilisateur,
} from "./catalogue";

/** Réponses de l'étape 1 (variables) et de l'étape 2 (usage). */
export interface ReponsesDebut {
  variables: Partial<Record<VariableUtilisateur, string>>;
  usage: Record<string, string>;
}

/** Base de recommandation affichée à l'utilisateur, jamais interchangeable. */
export type BaseRecommandation =
  | "mesures"
  | "niveau"
  | "usage"
  | "regles_officielles"
  | "generale";

export interface RecommandationEquipement {
  equipementId: string;
  cleNom: string;
  priorite: Priorite;
  classification: TypePersonnalisation;
  base: BaseRecommandation;
  /** Valeur recommandée quand elle est calculable et vérifiée. */
  valeur?: string;
  /** Repère à afficher tel quel quand la règle manque. */
  reserve?: "[VERIFIED SPORT RULES REQUIRED]" | "[VERIFIED CATEGORY RULE REQUIRED]";
  /** Une entrée nécessaire n'a pas été renseignée. */
  entreeManquante?: VariableUtilisateur;
  cleRaison: string;
  cleExplication: string;
  /** Paramètres du gabarit « Pourquoi cela ? ». */
  params: Record<string, string>;
  provenance?: { emetteur: string; document: string; version?: string };
  categorieRevendeur?: string;
}

const BASE_PAR_CLASSIFICATION: Record<TypePersonnalisation, BaseRecommandation> = {
  A: "mesures",
  B: "regles_officielles",
  C: "usage",
  D: "generale",
};

function evaluer(eq: Equipement, r: ReponsesDebut): RecommandationEquipement {
  const base: RecommandationEquipement = {
    equipementId: eq.id,
    cleNom: eq.cle,
    priorite: eq.priorite,
    classification: eq.classification,
    base: BASE_PAR_CLASSIFICATION[eq.classification],
    cleRaison: eq.cleRaison,
    cleExplication: eq.cleExplication,
    params: {},
    ...(eq.provenance ? { provenance: eq.provenance } : {}),
    ...(eq.categorieRevendeur ? { categorieRevendeur: eq.categorieRevendeur } : {}),
  };

  /* Une règle non vérifiée n'est jamais exécutée. */
  if (eq.statut === "en_developpement" || eq.logique.type === "regle_officielle_manquante") {
    return {
      ...base,
      reserve:
        eq.classification === "B"
          ? "[VERIFIED CATEGORY RULE REQUIRED]"
          : "[VERIFIED SPORT RULES REQUIRED]",
    };
  }

  if (eq.logique.type === "grille_fabricant") {
    const brut = r.variables[eq.logique.variable];
    const n = brut ? Number(brut) : Number.NaN;
    if (!Number.isFinite(n)) return { ...base, entreeManquante: eq.logique.variable };
    const palier = eq.logique.paliers.find((p) => n >= p.min && n < p.max);
    if (!palier) return { ...base, reserve: "[VERIFIED SPORT RULES REQUIRED]" };
    return {
      ...base,
      valeur: palier.valeur,
      params: { valeur: String(n), fabricant: eq.provenance?.emetteur ?? "" },
    };
  }

  if (eq.logique.type === "correspondance_usage") {
    const rep = r.usage[eq.logique.question];
    if (!rep) return { ...base, params: {} };
    const cible = eq.logique.table[rep];
    if (!cible) return { ...base, reserve: "[VERIFIED SPORT RULES REQUIRED]" };
    return { ...base, valeur: cible, params: { reponse: rep } };
  }

  /* Guidance éditoriale : pas de valeur calculée, pas de fausse précision. */
  return base;
}

/** Liste ordonnée des recommandations d'un sport, essentiel d'abord. */
export function setupDeDepart(
  sport: SportDebut,
  reponses: ReponsesDebut,
): RecommandationEquipement[] {
  const ordre: Priorite[] = ["essentiel", "bientot", "plus_tard"];
  return [...sport.equipements]
    .sort((a, b) => ordre.indexOf(a.priorite) - ordre.indexOf(b.priorite))
    .map((eq) => evaluer(eq, reponses));
}

/** Regroupement par priorité, pour l'étape « Ce dont vous avez besoin ». */
export function parPriorite(recos: RecommandationEquipement[]) {
  return {
    essentiel: recos.filter((r) => r.priorite === "essentiel"),
    bientot: recos.filter((r) => r.priorite === "bientot"),
    plus_tard: recos.filter((r) => r.priorite === "plus_tard"),
  };
}
