/* =========================================================
   SILLAGE START — « Je commence » : catalogue canonique des sports
   et configuration du matériel de départ.

   Ce module est la SOURCE UNIQUE des sports, de leurs familles et de
   leur statut. La bibliothèque éditoriale réutilise les mêmes
   identifiants de famille (voir bibliotheque.ts, FamilleDebut).

   Règle d'intégrité (doc 03) : aucune règle de matériel, aucune grille
   de fabricant, aucune règle fédérale n'est inventée ici. Quand une
   règle manque, la configuration porte un repère entre crochets et le
   moteur refuse de calculer.
   ========================================================= */

import type { FamilleDebut } from "../bibliotheque";

/* ---------------------------------------------------------------
   1. Statuts canoniques (partagés avec la bibliothèque)
   --------------------------------------------------------------- */

/**
 * Statut unique d'un sport, valable sur toutes les surfaces du produit.
 * - `personnalise` : le moteur SILLAGE Fit couvre réellement ce sport.
 * - `guide` : contenu débutant vérifié, sans moteur morphologique.
 * - `en_developpement` : rien de vérifié n'est publié.
 */
export type StatutSport = "personnalise" | "guide" | "en_developpement";

/** Statut d'implémentation d'une règle de matériel. */
export type StatutRegle = "verifie" | "editorial_seul" | "en_developpement";

/** Type de personnalisation d'une recommandation (A / B / C / D). */
export type TypePersonnalisation = "A" | "B" | "C" | "D";

/** Priorité d'achat d'un équipement. */
export type Priorite = "essentiel" | "bientot" | "plus_tard";

/* ---------------------------------------------------------------
   2. Variables utilisateur
   --------------------------------------------------------------- */

/** Variables que l'étape « Vous » peut demander. Aucune n'est demandée
    si aucun équipement configuré ne s'en sert. */
export type VariableUtilisateur =
  | "taille_corps"
  | "poids"
  | "pointure"
  | "categorie_age"
  | "main_dominante";

export interface ChampVariable {
  id: VariableUtilisateur;
  /** Clé i18n du libellé. */
  cle: string;
  type: "nombre" | "choix";
  unite?: "cm" | "kg" | "eu";
  min?: number;
  max?: number;
  /** Options (clé i18n par valeur) pour les champs de type `choix`. */
  options?: { valeur: string; cle: string }[];
}

export const CHAMPS_VARIABLES: Record<VariableUtilisateur, ChampVariable> = {
  taille_corps: { id: "taille_corps", cle: "champ.taille", type: "nombre", unite: "cm", min: 100, max: 220 },
  poids: { id: "poids", cle: "champ.poids", type: "nombre", unite: "kg", min: 25, max: 200 },
  pointure: { id: "pointure", cle: "champ.pointure", type: "nombre", unite: "eu", min: 28, max: 52 },
  categorie_age: {
    id: "categorie_age",
    cle: "champ.categorieAge",
    type: "choix",
    options: [
      { valeur: "u9", cle: "age.u9" },
      { valeur: "u11", cle: "age.u11" },
      { valeur: "u13", cle: "age.u13" },
      { valeur: "u15", cle: "age.u15" },
      { valeur: "adulte", cle: "age.adulte" },
    ],
  },
  main_dominante: {
    id: "main_dominante",
    cle: "champ.mainDominante",
    type: "choix",
    options: [
      { valeur: "droite", cle: "main.droite" },
      { valeur: "gauche", cle: "main.gauche" },
    ],
  },
};

/* ---------------------------------------------------------------
   3. Questions d'usage (étape 2), pilotées par la configuration
   --------------------------------------------------------------- */

export interface QuestionUsage {
  id: string;
  cle: string;
  options: { valeur: string; cle: string }[];
}

/* ---------------------------------------------------------------
   4. Logique de recommandation
   --------------------------------------------------------------- */

export interface Provenance {
  /** Fabricant, fédération ou « SILLAGE » pour une guidance éditoriale. */
  emetteur: string;
  /** Nom de la grille, du règlement ou de la fiche. */
  document: string;
  /** Millésime ou version, si connu. */
  version?: string;
}

export type LogiqueRecommandation =
  /** Grille de tailles d'un fabricant : paliers sur une variable mesurée. */
  | {
      type: "grille_fabricant";
      variable: VariableUtilisateur;
      paliers: { min: number; max: number; valeur: string }[];
    }
  /** Correspondance directe entre une réponse d'usage et une catégorie produit. */
  | { type: "correspondance_usage"; question: string; table: Record<string, string> }
  /** Règle officielle non encore vérifiée pour la juridiction concernée. */
  | { type: "regle_officielle_manquante" }
  /** Guidance générale : aucune personnalisation individuelle pertinente. */
  | { type: "editorial" };

export interface Equipement {
  id: string;
  sport: string;
  /** Clé i18n du nom de l'équipement. */
  cle: string;
  priorite: Priorite;
  classification: TypePersonnalisation;
  /** Variables réellement nécessaires au calcul. Rien d'autre n'est demandé. */
  variablesRequises: VariableUtilisateur[];
  logique: LogiqueRecommandation;
  provenance?: Provenance;
  statut: StatutRegle;
  /** Clé i18n de la raison d'être (« pourquoi c'est nécessaire »). */
  cleRaison: string;
  /** Clé i18n du gabarit d'explication « Pourquoi cela ? ». */
  cleExplication: string;
  /** Catégorie revendeur, pour un futur rapprochement produit. Aucune donnée
      commerciale n'est stockée ici. */
  categorieRevendeur?: string;
}

/* ---------------------------------------------------------------
   5. Sport canonique
   --------------------------------------------------------------- */

export interface SportDebut {
  id: string;
  famille: FamilleDebut;
  /** Clé i18n du nom du sport. */
  cle: string;
  statut: StatutSport;
  /** Parcours interactif « Je commence » réellement configuré. */
  parcoursInteractif: boolean;
  /** Le moteur de taille SILLAGE Fit couvre ce sport. */
  fitDisponible: boolean;
  /** Moteur produit SILLAGE Gear : aucun sport n'en dispose à ce jour. */
  gearDisponible: boolean;
  /** Identifiant de discipline dans la bibliothèque éditoriale, si contenu. */
  ficheBibliotheque?: string;
  questionsUsage: QuestionUsage[];
  variables: VariableUtilisateur[];
  equipements: Equipement[];
}

/* --- Sport de démonstration entièrement configuré : le football ------ */

const EQUIPEMENTS_FOOTBALL: Equipement[] = [
  {
    id: "football_chaussures",
    sport: "football",
    cle: "eq.football.chaussures",
    priorite: "essentiel",
    classification: "C",
    variablesRequises: [],
    logique: {
      type: "correspondance_usage",
      question: "surface",
      /* Étiquettes de taxonomie produit configurées et vérifiées. */
      table: {
        terrain_sec: "FG",
        terrain_gras: "SG",
        synthetique: "AG",
        stabilise: "TF",
        salle: "IN",
      },
    },
    provenance: { emetteur: "SILLAGE", document: "taxonomie de semelles configurée" },
    statut: "verifie",
    cleRaison: "eq.football.chaussuresRaison",
    cleExplication: "expl.surface",
    categorieRevendeur: "football/chaussures",
  },
  {
    id: "football_pointure",
    sport: "football",
    cle: "eq.football.pointure",
    priorite: "essentiel",
    classification: "D",
    variablesRequises: ["pointure"],
    logique: { type: "editorial" },
    statut: "editorial_seul",
    cleRaison: "eq.football.pointureRaison",
    cleExplication: "expl.pointure",
    categorieRevendeur: "football/chaussures",
  },
  {
    id: "football_protege_tibias",
    sport: "football",
    cle: "eq.football.protegeTibias",
    priorite: "essentiel",
    classification: "A",
    variablesRequises: ["taille_corps"],
    logique: {
      type: "grille_fabricant",
      variable: "taille_corps",
      paliers: [
        { min: 140, max: 150, valeur: "XS" },
        { min: 150, max: 160, valeur: "S" },
        { min: 160, max: 170, valeur: "M" },
        { min: 170, max: 180, valeur: "L" },
        { min: 180, max: 200, valeur: "XL" },
      ],
    },
    provenance: { emetteur: "Nike", document: "grille protège-tibias adulte", version: "[version à confirmer]" },
    statut: "verifie",
    cleRaison: "eq.football.protegeTibiasRaison",
    cleExplication: "expl.mesure",
    categorieRevendeur: "football/protections",
  },
  {
    id: "football_ballon",
    sport: "football",
    cle: "eq.football.ballon",
    priorite: "essentiel",
    classification: "B",
    variablesRequises: ["categorie_age"],
    /* Aucune grille âge → taille de ballon n'est configurée : la règle
       dépend de la fédération et du pays, et n'a pas été vérifiée. */
    logique: { type: "regle_officielle_manquante" },
    statut: "en_developpement",
    cleRaison: "eq.football.ballonRaison",
    cleExplication: "expl.regle",
    categorieRevendeur: "football/ballons",
  },
  {
    id: "football_tenue",
    sport: "football",
    cle: "eq.football.tenue",
    priorite: "bientot",
    classification: "D",
    variablesRequises: [],
    logique: { type: "editorial" },
    statut: "editorial_seul",
    cleRaison: "eq.football.tenueRaison",
    cleExplication: "expl.generale",
    categorieRevendeur: "football/textile",
  },
  {
    id: "football_chaussettes",
    sport: "football",
    cle: "eq.football.chaussettes",
    priorite: "bientot",
    classification: "D",
    variablesRequises: [],
    logique: { type: "editorial" },
    statut: "editorial_seul",
    cleRaison: "eq.football.chaussettesRaison",
    cleExplication: "expl.generale",
    categorieRevendeur: "football/textile",
  },
  {
    id: "football_sac",
    sport: "football",
    cle: "eq.football.sac",
    priorite: "plus_tard",
    classification: "D",
    variablesRequises: [],
    logique: { type: "editorial" },
    statut: "editorial_seul",
    cleRaison: "eq.football.sacRaison",
    cleExplication: "expl.generale",
    categorieRevendeur: "football/accessoires",
  },
];

/** Sport non configuré : coquille honnête, sans règle inventée. */
function enAttente(
  id: string,
  famille: FamilleDebut,
  options: Partial<Pick<SportDebut, "statut" | "fitDisponible" | "ficheBibliotheque">> = {},
): SportDebut {
  return {
    id,
    famille,
    cle: `sport.${id}`,
    statut: options.statut ?? "en_developpement",
    parcoursInteractif: false,
    fitDisponible: options.fitDisponible ?? false,
    gearDisponible: false,
    ...(options.ficheBibliotheque ? { ficheBibliotheque: options.ficheBibliotheque } : {}),
    questionsUsage: [],
    variables: [],
    equipements: [],
  };
}

export const SPORTS_DEBUT: SportDebut[] = [
  /* --- Eau et eau technique ----------------------------------------- */
  enAttente("surf", "eau", { statut: "personnalise", fitDisponible: true }),
  enAttente("eau_libre", "eau", { statut: "personnalise", fitDisponible: true }),
  enAttente("triathlon", "eau", { statut: "personnalise", fitDisponible: true }),
  enAttente("kitesurf", "eau", { statut: "personnalise", fitDisponible: true }),
  enAttente("wingfoil", "eau", { statut: "personnalise", fitDisponible: true }),
  enAttente("plongee", "eau", { statut: "personnalise", fitDisponible: true }),
  /* La natation en piscine n'est pas couverte par le moteur : elle reste
     explicitement en développement, sans laisser croire le contraire. */
  enAttente("natation_piscine", "eau"),

  /* --- Sports de raquette -------------------------------------------- */
  enAttente("tennis", "raquette"),
  enAttente("padel", "raquette"),
  enAttente("badminton", "raquette"),

  /* --- Ballon et balle ----------------------------------------------- */
  {
    id: "football",
    famille: "ballon_balle",
    cle: "sport.football",
    statut: "guide",
    parcoursInteractif: true,
    fitDisponible: false,
    gearDisponible: false,
    questionsUsage: [
      {
        id: "premiere_fois",
        cle: "q.premiereFois",
        options: [
          { valeur: "oui", cle: "opt.oui" },
          { valeur: "non", cle: "opt.non" },
        ],
      },
      {
        id: "surface",
        cle: "q.surface",
        options: [
          { valeur: "terrain_sec", cle: "opt.terrainSec" },
          { valeur: "terrain_gras", cle: "opt.terrainGras" },
          { valeur: "synthetique", cle: "opt.synthetique" },
          { valeur: "stabilise", cle: "opt.stabilise" },
          { valeur: "salle", cle: "opt.salle" },
        ],
      },
      {
        id: "cadre",
        cle: "q.cadre",
        options: [
          { valeur: "libre", cle: "opt.libre" },
          { valeur: "club", cle: "opt.club" },
        ],
      },
    ],
    variables: ["taille_corps", "pointure", "categorie_age"],
    equipements: EQUIPEMENTS_FOOTBALL,
  },
  enAttente("handball", "ballon_balle"),
  enAttente("basketball", "ballon_balle"),
  enAttente("volleyball", "ballon_balle"),

  /* --- Glisse --------------------------------------------------------- */
  enAttente("ski", "glisse", {
    statut: "personnalise",
    fitDisponible: true,
    ficheBibliotheque: "debuter-ski-veste",
  }),
  enAttente("snowboard", "glisse", {
    statut: "personnalise",
    fitDisponible: true,
    ficheBibliotheque: "debuter-ski-couches",
  }),
  enAttente("skateboard", "glisse"),

  /* --- Plein air ------------------------------------------------------ */
  enAttente("velo", "plein_air"),
  enAttente("randonnee", "plein_air"),
  enAttente("escalade", "plein_air"),

  /* --- Forme et combat ------------------------------------------------ */
  enAttente("course", "forme_combat"),
  enAttente("judo", "forme_combat"),
  enAttente("boxe", "forme_combat"),
];

export function sportParId(id: string): SportDebut | undefined {
  return SPORTS_DEBUT.find((s) => s.id === id);
}

/** Variables réellement utilisées par au moins un équipement configuré. */
export function variablesUtiles(sport: SportDebut): VariableUtilisateur[] {
  const utilisees = new Set<VariableUtilisateur>();
  for (const e of sport.equipements) for (const v of e.variablesRequises) utilisees.add(v);
  return sport.variables.filter((v) => utilisees.has(v));
}
