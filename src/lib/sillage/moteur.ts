import { profilTolerance, trouverSousVolet, type ProfilTolerance, type SousVoletDef } from "./config";
import { REFERENTIEL } from "./referentiel";
import type {
  EntreeTaille,
  MessageCle,
  Modele,
  NiveauConfiance,
  Recommandation,
  SessionParcours,
  Verdict,
  VerdictZone,
  ZoneId,
  ZoneNonEvaluee,
} from "./types";

/**
 * MOTEUR SILLAGE (docs 02 et 03).
 *
 * Le moteur ne connaît aucun sport : il travaille exclusivement sur la
 * configuration (zones critiques / secondaires du sous-volet) et sur le
 * référentiel produit. Il n'invente aucune valeur : une zone sans donnée de
 * marque ou sans mesure utilisateur est déclarée non évaluée, jamais estimée.
 */

/* ------------------------------------------------------------ paramètres */

/** Poids d'une zone dans le score, selon son statut dans le sous-volet. */
const POIDS_CRITIQUE = 3;
const POIDS_SECONDAIRE = 1;

/**
 * Coût d'un verdict, par unité de poids. Les valeurs sont portées par le
 * profil de tolérance de la pièce (compressif ou ample) : le néoprène pénalise
 * le trop grand, la coque de montagne pénalise le trop juste.
 */
type TableCout = Record<Verdict, number>;

/** Coût additionnel par centimètre hors plage. */
const COUT_PAR_CM = 0.9;

/** Décalage de la position cible selon la préférence d'ajustement déclarée. */
const DECALAGE_PREFERENCE: Record<string, number> = {
  proche: 0.12,
  neutre: 0,
  aise: -0.12,
};

/** Correction appliquée à la zone d'une gêne déclarée sur un matériel précédent. */
const CORRECTION_GENE = 0.1;

/**
 * Resserrement de tolérance appliqué aux seules zones où une gêne a été
 * déclarée : la plage acceptable se rétrécit du côté concerné, et le coût du
 * verdict y est majoré. Aucun ajustement global n'est appliqué : une zone non
 * déclarée conserve exactement la tolérance nominale.
 */
const RESSERREMENT_GENE = 0.16;
const MAJORATION_COUT_GENE = 1.3;

/** Provenances jugées suffisamment fiables pour entrer dans une recommandation. */
const PROVENANCES_FIABLES = new Set(["measured_sample", "observed", "vendor_published"]);

/** Écart de score en dessous duquel deux marques sont déclarées indépartageables. */
const SEUIL_INDEPARTAGEABLE = 0.35;

/* ------------------------------------------------------------- utilitaires */

function poidsZone(sv: SousVoletDef, zone: ZoneId): number {
  if (sv.zonesCritiques.includes(zone)) return POIDS_CRITIQUE;
  if (sv.zonesSecondaires.includes(zone)) return POIDS_SECONDAIRE;
  return 0;
}

/**
 * Gênes déclarées, indexées par zone. Prend en charge la saisie multiple
 * (session.gene.zones) et l'ancienne saisie mono-zone.
 */
function genesParZone(session: SessionParcours): Map<ZoneId, "trop_serre" | "trop_ample"> {
  const carte = new Map<ZoneId, "trop_serre" | "trop_ample">();
  const g = session.gene;
  if (!g || g.jamaisPorte) return carte;
  for (const d of g.zones ?? []) carte.set(d.zone, d.sens);
  if (g.zone && g.sens && !carte.has(g.zone)) carte.set(g.zone, g.sens);
  return carte;
}

/**
 * Position relative de la mesure dans la plage annoncée, corrigée par la
 * préférence d'ajustement et par la gêne déclarée. 0 = bas de plage, 1 = haut.
 */
function position(valeur: number, min: number, max: number): number {
  if (max <= min) return valeur <= min ? 0 : 1;
  return (valeur - min) / (max - min);
}

/** Seuils de tolérance de la zone : nominaux, ou resserrés par une gêne. */
function verdictDepuisPosition(p: number, seuilBas: number, seuilHaut: number): Verdict {
  if (p > 1) return "serre";
  if (p < seuilBas) return "ample";
  if (p >= seuilHaut) return "ajuste";
  return "conforme";
}

/**
 * Aisance de superposition, en centimètres, ajoutée à la mesure du corps avant
 * comparaison. Elle ne s'applique qu'aux pièces à profil ample et aux zones
 * que le profil déclare. Le calcul reste invisible : seule l'information
 * « une couche intermédiaire a été prise en compte » est restituée.
 */
function aisance(profil: ProfilTolerance, session: SessionParcours, zone: ZoneId): number {
  const niveau = session.reponsesUsage["couches"];
  if (!niveau) return 0;
  return profil.aisanceCouches[niveau]?.[zone] ?? 0;
}

function ecartHorsPlage(valeur: number, min: number, max: number): number {
  if (valeur > max) return valeur - max;
  if (valeur < min) return min - valeur;
  return 0;
}

/* ------------------------------------------------------ évaluation taille */

interface EvaluationTaille {
  libelleTaille: string;
  score: number;
  verdicts: VerdictZone[];
  zonesNonEvaluees: ZoneNonEvaluee[];
  zonesCritiquesEvaluees: number;
  zonesCritiquesTotal: number;
  provenanceFaible: boolean;
  /** Au moins une mesure du corps provient d'un scan non reconfirmé. */
  mesureScannee: boolean;
  /** Une aisance de superposition a été appliquée sur au moins une zone. */
  aisanceAppliquee: boolean;
  /** Pièce ample dont le niveau de couches n'a pas été renseigné. */
  couchesNonRenseignees: boolean;
  pireZoneCritique?: { zone: ZoneId; verdict: Verdict } | undefined;
}

function evaluerTaille(
  sv: SousVoletDef,
  session: SessionParcours,
  entrees: EntreeTaille[],
  libelleTaille: string,
): EvaluationTaille {
  const zones = [...sv.zonesCritiques, ...sv.zonesSecondaires];
  const decalage = DECALAGE_PREFERENCE[session.reponsesUsage["preference"] ?? "neutre"] ?? 0;
  const genes = genesParZone(session);
  const profil = profilTolerance(sv.id);
  const COUT: TableCout = profil.cout;
  const niveauCouches = session.reponsesUsage["couches"];
  let aisanceAppliquee = false;


  const verdicts: VerdictZone[] = [];
  const zonesNonEvaluees: ZoneNonEvaluee[] = [];
  let score = 0;
  let poidsTotal = 0;
  let critiquesEvaluees = 0;
  let provenanceFaible = false;
  let mesureScannee = false;
  let pire: { zone: ZoneId; verdict: Verdict; cout: number } | undefined;

  for (const zone of zones) {
    const critique = sv.zonesCritiques.includes(zone);
    const entree = entrees.find((e) => e.libelleTaille === libelleTaille && e.zone === zone);
    const mesure = session.mesures[zone];

    if (entree && entree.nature === "vetement_fini") {
      // Une dimension de vêtement fini n'est pas une plage de morphologie :
      // les deux ne se comparent pas, la zone est déclarée non évaluée.
      verdicts.push({ zone, verdict: null, motifNonEvaluee: "vetement_fini" });
      zonesNonEvaluees.push({ zone, motif: "vetement_fini" });
      continue;
    }
    if (!entree || entree.provenance === "missing") {
      verdicts.push({ zone, verdict: null, motifNonEvaluee: "donnee_marque_absente" });
      zonesNonEvaluees.push({ zone, motif: "donnee_marque_absente" });
      continue;
    }
    if (!mesure) {
      verdicts.push({ zone, verdict: null, motifNonEvaluee: "mesure_absente" });
      zonesNonEvaluees.push({ zone, motif: "mesure_absente" });
      continue;
    }

    if (!PROVENANCES_FIABLES.has(entree.provenance)) provenanceFaible = true;
    // Une mesure issue d'un scan et jamais reconfirmée reste une estimation.
    if (mesure.provenance === "scanned" || mesure.provenance === "scanned_low_confidence") {
      mesureScannee = true;
    }

    const gene = genes.get(zone);
    // Le corps habillé, et non le corps nu, est ce que la pièce doit loger.
    const supplement = aisance(profil, session, zone);
    if (supplement > 0) aisanceAppliquee = true;
    const valeurComparee = mesure.valeur + supplement;
    let p = position(valeurComparee, entree.valeurMin, entree.valeurMax) + decalage;
    if (gene) p += gene === "trop_serre" ? -CORRECTION_GENE : CORRECTION_GENE;

    // Tolérance du profil de la pièce, resserrée du seul côté de la gêne déclarée.
    const seuilBas = profil.seuilBas + (gene === "trop_ample" ? RESSERREMENT_GENE : 0);
    const seuilHaut = profil.seuilHaut - (gene === "trop_serre" ? RESSERREMENT_GENE : 0);

    const verdict = verdictDepuisPosition(p, seuilBas, seuilHaut);
    const poids = poidsZone(sv, zone) || POIDS_SECONDAIRE;
    const cout =
      poids *
      (gene ? MAJORATION_COUT_GENE : 1) *
      (COUT[verdict] + COUT_PAR_CM * ecartHorsPlage(valeurComparee, entree.valeurMin, entree.valeurMax));

    score += cout;
    poidsTotal += poids;
    if (critique) {
      critiquesEvaluees += 1;
      if (!pire || cout > pire.cout) pire = { zone, verdict, cout };
    }
    verdicts.push({ zone, verdict });
  }

  return {
    libelleTaille,
    score: poidsTotal > 0 ? score / poidsTotal : Number.POSITIVE_INFINITY,
    verdicts,
    zonesNonEvaluees,
    zonesCritiquesEvaluees: critiquesEvaluees,
    zonesCritiquesTotal: sv.zonesCritiques.length,
    provenanceFaible,
    mesureScannee,
    aisanceAppliquee,
    couchesNonRenseignees: profil.id === "ample" && (!niveauCouches || niveauCouches === "inconnu"),
    pireZoneCritique: pire ? { zone: pire.zone, verdict: pire.verdict } : undefined,
  };
}

/* ----------------------------------------------------------- confiance */

function confiance(ev: EvaluationTaille, marge: number): NiveauConfiance {
  const couverture = ev.zonesCritiquesTotal === 0 ? 0 : ev.zonesCritiquesEvaluees / ev.zonesCritiquesTotal;
  let niveau = 1;
  if (couverture >= 0.5) niveau = 2;
  if (couverture >= 0.75) niveau = 3;
  if (couverture === 1 && ev.score < 1) niveau = 4;
  if (couverture === 1 && ev.score < 0.5 && marge >= 0.5) niveau = 5;
  if (ev.provenanceFaible) niveau -= 1;
  if (ev.mesureScannee) niveau -= 1;
  return Math.min(5, Math.max(1, niveau)) as NiveauConfiance;
}

/* -------------------------------------------------------- justification */

function justifier(ev: EvaluationTaille, modele: Modele | undefined): MessageCle[] {
  const messages: MessageCle[] = [];
  const pire = ev.pireZoneCritique;

  if (pire && pire.verdict !== "conforme") {
    const cle =
      pire.verdict === "serre"
        ? "res.just.pireSerre"
        : pire.verdict === "ample"
          ? "res.just.pireAmple"
          : "res.just.pireAjuste";
    messages.push({ cle, params: { zone: pire.zone } });
  } else {
    messages.push({ cle: "res.just.aucuneTension" });
  }

  if (ev.zonesCritiquesEvaluees < ev.zonesCritiquesTotal) {
    messages.push({
      cle: ev.zonesCritiquesEvaluees > 1 ? "res.just.couverturePluriel" : "res.just.couvertureSingulier",
      params: { evaluees: ev.zonesCritiquesEvaluees, total: ev.zonesCritiquesTotal },
    });
  }

  if (ev.aisanceAppliquee) messages.push({ cle: "res.just.aisance" });
  if (ev.couchesNonRenseignees) messages.push({ cle: "res.just.couchesInconnues" });
  if (ev.mesureScannee) messages.push({ cle: "res.just.scan" });
  if (ev.provenanceFaible) messages.push({ cle: "res.just.provenanceFaible" });

  if (modele?.classeElasticite) {
    messages.push({
      cle: "res.just.coupeElasticite",
      params: { coupe: modele.profilCoupeDeclare, elasticite: modele.classeElasticite },
    });
  } else if (modele?.profilCoupeDeclare) {
    messages.push({ cle: "res.just.coupe", params: { coupe: modele.profilCoupeDeclare } });
  }

  return messages;
}

/* ------------------------------------------------------------- admission */

/**
 * Une marque n'entre dans les résultats que si elle publie, pour au moins une
 * taille, la totalité des zones critiques du sous-volet (doc 03, §4). Les
 * grilles sont en outre filtrées sur le genre déclaré : une grille homme n'est
 * jamais comparée à des mesures saisies sur une grille femme.
 */
export function marquesAdmisesPourSousVolet(
  sv: SousVoletDef,
  genre?: SessionParcours["genre"],
): Map<string, EntreeTaille[]> {
  const parMarque = new Map<string, EntreeTaille[]>();
  for (const e of REFERENTIEL.entrees) {
    if (e.sousVolet !== sv.id) continue;
    if (e.provenance === "missing") continue;
    if (genre && e.genre !== genre && e.genre !== "unisexe") continue;
    parMarque.set(e.modeleId, [...(parMarque.get(e.modeleId) ?? []), e]);
  }

  const admises = new Map<string, EntreeTaille[]>();
  for (const [modeleId, entrees] of parMarque) {
    const tailles = new Set(entrees.map((e) => e.libelleTaille));
    const couvre = [...tailles].some((t) =>
      sv.zonesCritiques.every((z) => entrees.some((e) => e.libelleTaille === t && e.zone === z)),
    );
    if (couvre) admises.set(modeleId, entrees);
  }
  return admises;
}

/* ----------------------------------------------------------- point d'entrée */

export interface SortieMoteur {
  recommandations: Recommandation[];
  indepartageables: boolean;
  refus?: MessageCle;
}

export function calculer(session: SessionParcours): SortieMoteur {
  const sv = session.sousVolet ? trouverSousVolet(session.sousVolet) : undefined;
  if (!sv) {
    return {
      recommandations: [],
      indepartageables: false,
      refus: { cle: "res.refus.aucunePiece" },
    };
  }

  if (profilTolerance(sv.id).famille === "inconnue") {
    return {
      recommandations: [],
      indepartageables: false,
      refus: { cle: "res.refus.profilInconnu" },
    };
  }

  const manquantes = sv.zonesCritiques.filter((z) => !session.mesures[z]);
  if (manquantes.length === sv.zonesCritiques.length) {
    return {
      recommandations: [],
      indepartageables: false,
      refus: { cle: "res.refus.aucuneMesure" },
    };
  }

  const admises = marquesAdmisesPourSousVolet(sv, session.genre);
  if (admises.size === 0) {
    return {
      recommandations: [],
      indepartageables: false,
      refus: { cle: "res.refus.aucuneMarque" },
    };
  }

  const meilleures: { marqueId: string; ev: EvaluationTaille; modele: Modele | undefined }[] = [];

  for (const [modeleId, entrees] of admises) {
    const tailles = [...new Set(entrees.map((e) => e.libelleTaille))];
    const evaluations = tailles
      .map((t) => evaluerTaille(sv, session, entrees, t))
      .filter((e) => Number.isFinite(e.score))
      .sort((a, b) => a.score - b.score);
    const meilleure = evaluations[0];
    if (!meilleure) continue;
    meilleures.push({
      marqueId: entrees[0]!.marqueId,
      ev: meilleure,
      modele: REFERENTIEL.modeles.find((m) => m.modeleId === modeleId),
    });
  }

  if (meilleures.length === 0) {
    return {
      recommandations: [],
      indepartageables: false,
      refus: { cle: "res.refus.aucuneComparaison" },
    };
  }

  meilleures.sort((a, b) => a.ev.score - b.ev.score);
  const premier = meilleures[0]!;
  const second = meilleures[1];
  const marge = second ? second.ev.score - premier.ev.score : Number.POSITIVE_INFINITY;
  const indepartageables = !!second && marge < SEUIL_INDEPARTAGEABLE;

  const retenus = indepartageables ? meilleures.slice(0, 2) : [premier];

  const recommandations: Recommandation[] = retenus.map(({ marqueId, ev, modele }) => ({
    marqueId,
    modeleId: modele?.modeleId,
    marqueLibelle: modele?.marqueLibelle ?? marqueId,
    modeleLibelle: modele?.collection ?? marqueId,
    millesimeGrille: modele?.saison,
    tailleRecommandee: ev.libelleTaille,
    confiance: confiance(ev, indepartageables ? 0 : marge),
    verdicts: ev.verdicts,
    justification: justifier(ev, modele),
    zonesNonEvaluees: ev.zonesNonEvaluees,
  }));

  return { recommandations, indepartageables };
}
