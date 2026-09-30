/**
 * SILLAGE — types partagés interface / référentiel.
 * Conforme au document 03 (spécification des données).
 *
 * Aucun type ci-dessous n'encode de sport en dur : les volets, sous-volets,
 * zones et pondérations sont décrits en configuration (doc 01, §4.1).
 */

/** Zones anatomiques connues de la configuration. Extensible sans toucher au moteur. */
export type ZoneId =
  | "cou"
  | "poitrine"
  | "taille"
  | "hanches"
  | "cuisse"
  | "biceps"
  | "epaules"
  | "envergure"
  | "longueur_bras"
  | "longueur_torse"
  | "longueur_dos"
  | "entrejambe"
  | "cheville"
  | "hauteur_dorsale"
  | "bassin"
  | "taille_iliaque"
  | "taille_totale"
  | "poids";

/** Statut de provenance d'une valeur du référentiel produit (doc 03, §3). */
export type Provenance =
  /** Mesure relevée par nos soins sur un exemplaire physique (méthode et date au journal). */
  | "measured_sample"
  /** Alias historique de measured_sample, conservé pour les entrées déjà collectées. */
  | "observed"
  | "vendor_published"
  | "vendor_claim"
  | "modeled"
  | "interpolated"
  | "missing";

/** Statut de provenance d'une mesure saisie par l'utilisateur (doc 01, §5.4). */
export type SaisieProvenance =
  | "manual"
  | "manual_reconfirmed"
  | "scanned"
  | "scanned_low_confidence";

/** Une entrée de grille : une marque, un modèle, une taille, une zone. */
export interface EntreeTaille {
  marqueId: string;
  modeleId: string;
  versionId: string;
  volet: string;
  sousVolet: string;
  genre: "homme" | "femme" | "unisexe";
  libelleTaille: string;
  /**
   * Nature de la valeur : plage de morphologie recommandée par la marque
   * (gabarit_corps) ou dimension du vêtement fini (vetement_fini). Les deux ne
   * sont jamais comparables : le moteur n'évalue que le gabarit corps et
   * déclare la zone non évaluée si la valeur décrit le vêtement.
   */
  nature?: "gabarit_corps" | "vetement_fini";
  zone: ZoneId;
  valeurMin: number;
  valeurMax: number;
  unite: "cm" | "kg";
  provenance: Provenance;
  source: string;
  dateCollecte: string;
  dateDerniereVerification: string;
}

export interface Modele {
  marqueId: string;
  /** Nom de marque tel qu'il est publié. */
  marqueLibelle: string;
  modeleId: string;
  versionId: string;
  collection: string;
  saison: string;
  construction: string;
  familleMateriau: string;
  epaisseur: string;
  classeElasticite: string;
  provenanceClasseElasticite: Provenance;
  profilCoupeDeclare: string;
  historiqueValidation: string[];
}

/** Référentiel produit immuable et versionné (doc 03, §5). */
export interface Referentiel {
  versionReferentiel: string;
  versionParametres: string;
  modeles: Modele[];
  entrees: EntreeTaille[];
}

/** Mesure saisie, en mémoire de session. */
export interface Mesure {
  zone: ZoneId;
  valeur: number;
  provenance: SaisieProvenance;
}

export type SensGene = "trop_serre" | "trop_ample";

/** Motifs de gêne proposés à l'étape usage (multi-sélection). */
export type GeneMotifId =
  | "taille"
  | "hanches"
  | "entrejambe"
  | "torse"
  | "epaules"
  | "mobilite"
  | "aucune";

/** Une gêne déclarée, rattachée à une zone évaluée par le moteur. */
export interface GeneZoneDeclaree {
  zone: ZoneId;
  sens: SensGene;
  motif: GeneMotifId;
}

/** Gêne ressentie sur un matériel précédent (doc 01, §5.2). */
export interface Gene {
  jamaisPorte: boolean;
  /** Motifs cochés, dans l'ordre de sélection. */
  motifs?: GeneMotifId[];
  /** Zones déduites des motifs : entrée structurée du moteur. */
  zones?: GeneZoneDeclaree[];
  /** Legacy : ancienne saisie mono-zone, toujours honorée par le moteur. */
  zone?: ZoneId;
  sens?: SensGene;
}

export interface SessionParcours {
  volet?: string;
  discipline?: string;
  sousVolet?: string;
  genre?: "homme" | "femme" | "unisexe";
  reponsesUsage: Record<string, string>;
  gene?: Gene;
  mesures: Partial<Record<ZoneId, Mesure>>;
  consentements: Consentements;
}

/** Quatre consentements dissociés, décochés par défaut (doc 03, §8). */
export interface Consentements {
  traitementSession: boolean;
  conservationProfil: boolean;
  reutilisationAgregee: boolean;
  transmissionMarchand: boolean;
}

export type Verdict = "serre" | "ajuste" | "conforme" | "ample";

/** Cinq paliers de confiance, produits par le seul module de confiance. */
export type NiveauConfiance = 1 | 2 | 3 | 4 | 5;

/**
 * Message restituable : le moteur ne produit plus de phrase en français, mais
 * une clé de traduction et ses paramètres. La mise en mots appartient à l'i18n.
 */
export interface MessageCle {
  cle: string;
  params?: Record<string, string | number>;
}

/** Motif structuré pour lequel une zone n'a pas pu être évaluée. */
export type MotifNonEvaluee = "vetement_fini" | "donnee_marque_absente" | "mesure_absente";

export interface VerdictZone {
  zone: ZoneId;
  verdict: Verdict | null;
  /** Motif structuré lorsque la zone n'est pas évaluable. */
  motifNonEvaluee?: MotifNonEvaluee;
}

/** Zone écartée de l'évaluation, restituée groupée sur l'écran de résultat. */
export interface ZoneNonEvaluee {
  zone: ZoneId;
  motif: MotifNonEvaluee;
}

export interface Recommandation {
  marqueId: string;
  /** Identifiant du modèle retenu, utilisé pour la mise en relation commerciale. */
  modeleId?: string | undefined;
  marqueLibelle: string;
  modeleLibelle: string;
  /** Millésime de la grille de tailles utilisée (saison publiée par la marque). */
  millesimeGrille?: string | undefined;
  tailleRecommandee: string;
  confiance: NiveauConfiance;
  verdicts: VerdictZone[];
  /** Justification en clés i18n, dans l'ordre de restitution. */
  justification: MessageCle[];
  zonesNonEvaluees: ZoneNonEvaluee[];
}

/**
 * Offre commerciale : couche disponibilité et prix, strictement en aval du
 * moteur. Le prix n'est pas optionnel — une offre sans prix n'est pas une offre
 * et n'est pas stockée.
 */
export interface Offre {
  marqueId: string;
  modeleId: string;
  /** Doit correspondre à un libellé de taille de la grille du référentiel. */
  taille: string;
  revendeurId: string;
  prix: number;
  /** Code devise ISO 4217, par exemple "EUR" ou "NOK". */
  devise: string;
  disponibilite: "en_stock" | "stock_faible" | "epuise" | "inconnue";
  /** Horodatage ISO 8601 du relevé, fuseau inclus. */
  releveLe: string;
  sourceOffre: "flux_affilie" | "api_marchand" | "releve_manuel";
  statutLien: "affilie" | "commercial" | "neutre";
  url: string;
}

export interface ResultatMoteur {

  versionReferentiel: string;
  versionParametres: string;
  horodatage: string;
  recommandations: Recommandation[];
  /** Motif de refus lorsque les données sont insuffisantes (doc 03, §4). */
  refus?: MessageCle;
  /** Vrai lorsque deux marques sont indépartageables (doc 01, §6). */
  indepartageables: boolean;
}

