/**
 * SILLAGE — Note de référence sur la construction technique des panneaux
 * de combinaison néoprène.
 *
 * Source : schéma "EXTERIOR" du document de commande sur-mesure July Wetsuits.
 *
 * IMPORTANT — statut de cette donnée :
 * Cette note est une information de contexte métier. Elle n'est PAS intégrée
 * dans le moteur de scoring actuel et ne doit PAS être interprétée comme une
 * grille de tailles ou une spécification de produit July Wetsuits.
 *
 * Le moteur MVP travaille par bandes de mesure globales (tour de poitrine,
 * tour de taille, etc.) et par profil de tolérance compressif/ample. Il ne
 * modélise pas aujourd'hui la répartition localisée de l'épaisseur néoprène sur
 * le corps. Cette note est conservée comme piste d'évolution pour une Phase 2
 * où le scoring pourrait tenir compte de la cartographie des panneaux.
 */

/**
 * Couche constitutive d'un panneau de combinaison néoprène, telle que
 * distinguée sur le schéma source.
 */
export interface CouchePanneau {
  /** Nom japonais tel qu'il apparaît sur le document. */
  termeJaponais: string;
  /** Traduction fonctionnelle. */
  traductionFrancaise: string;
  /** Rôle de la couche dans la construction du panneau. */
  role: string;
}

export const COUCHES_PANNEAU: CouchePanneau[] = [
  {
    termeJaponais: "内面",
    traductionFrancaise: "Intérieur",
    role: "Couche en contact avec la peau : confort, enfilage et gestion de l'humidité.",
  },
  {
    termeJaponais: "中央 / FOAM",
    traductionFrancaise: "Mousse centrale",
    role: "Cœur néoprène : isolation thermique et compressibilité.",
  },
  {
    termeJaponais: "表面 / OUTSIDE",
    traductionFrancaise: "Extérieur",
    role: "Couche externe : résistance mécanique, hydrodynamisme et protection UV/abrasion.",
  },
];

/**
 * Zone anatomique sur laquelle l'épaisseur de néoprène peut être modulée,
 * selon l'observation du document source.
 */
export interface ZoneEpaisseur {
  zone: string;
  /** Justification fonctionnelle de la modulation d'épaisseur. */
  logique: string;
  /** Exemples d'épaisseurs courantes mentionnées dans la documentation technique du secteur. */
  epaisseursReference?: string[];
}

export const ZONES_EPAISSEUR: ZoneEpaisseur[] = [
  {
    zone: "Torse",
    logique:
      "Protection thermique prioritaire : le torse abrite les organes vitaux et est moins mobile que les membres. Une épaisseur plus importante y est souvent privilégiée.",
    epaisseursReference: ["4 mm", "5 mm"],
  },
  {
    zone: "Bras",
    logique:
      "Liberté de mouvement prioritaire : les épaules, biceps et avant-bras nécessitent une plus grande flexibilité pour la nage et le paddle. L'épaisseur y est fréquemment réduite.",
    epaisseursReference: ["2 mm", "3 mm"],
  },
  {
    zone: "Jambes",
    logique:
      "Compromis entre flexibilité (genoux, chevilles) et thermicité (cuisses, fessiers). Les zones d'articulation peuvent être plus fines que les parties supérieures.",
    epaisseursReference: ["3 mm", "4 mm"],
  },
];

/**
 * Implications métier pour un futur moteur de scoring.
 *
 * Hypothèse d'évolution (Phase 2) :
 * - Une combinaison premium n'est pas un volume uniforme : la même mesure de
 *   tour de poitrine peut être vécue différemment selon l'épaisseur du panneau
 *   thoracique et la souplesse du néoprène utilisé.
 * - Le scoring pourrait intégrer une "cartographie des panneaux" : chaque zone
 *   anatomique du référentiel de mesure étendu serait associée à un panneau et
 *   à une épaisseur, permettant d'affiner la tolérance locale.
 *
 * Blocage MVP :
 * - Les grilles de tailles publiées par les marques ne fournissent pas
 *   l'épaisseur localisée par panneau pour chaque taille.
 * - L'intégration nécessiterait un référentiel produit beaucoup plus fin que
 *   les bandes de mesure actuellement disponibles.
 */
export const NOTE_EVOLUTION_PANNEAUX =
  "L'épaisseur néoprène n'est pas uniforme sur une combinaison premium : elle est modulée par zone anatomique (torse = thermique, bras/jambes = flexibilité). Cette information est conservée comme piste d'évolution du moteur en Phase 2, mais n'est pas exploitable dans le MVP qui raisonne sur des mesures globales du corps.";

/** Résumé structuré de la note, prêt à être affiché dans un outil interne. */
export interface ResumeConstructionPanneaux {
  couches: CouchePanneau[];
  zonesEpaisseur: ZoneEpaisseur[];
  noteEvolution: string;
}

export const RESUME_CONSTRUCTION_PANNEAUX: ResumeConstructionPanneaux = {
  couches: COUCHES_PANNEAU,
  zonesEpaisseur: ZONES_EPAISSEUR,
  noteEvolution: NOTE_EVOLUTION_PANNEAUX,
};
