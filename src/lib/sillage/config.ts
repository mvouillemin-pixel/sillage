import type { ZoneId } from "./types";

/**
 * CONFIGURATION SILLAGE.
 * Le moteur ne connaît aucun sport (doc 01, §4.1). Volets, sous-volets, zones
 * critiques, mesures requises et questions d'usage sont décrits ici, en données.
 */

export interface ZoneDef {
  id: ZoneId;
  libelle: string;
  unite: "cm" | "kg";
  /** Protocole court et non ambigu : repère, tension, position (doc 01, §5.3). */
  protocole: string;
  /** Zones secondaires : scan accepté. Zones critiques : mesure manuelle seule. */
  scanAutorise: boolean;
}

export const ZONES: Record<ZoneId, ZoneDef> = {
  cou: {
    id: "cou",
    libelle: "Tour de cou",
    unite: "cm",
    protocole: "À la base du cou, juste au-dessus des clavicules. Ruban posé sans serrer, tête droite.",
    scanAutorise: false,
  },
  poitrine: {
    id: "poitrine",
    libelle: "Tour de poitrine",
    unite: "cm",
    protocole: "Au point le plus fort de la poitrine, ruban horizontal, bras le long du corps, fin d'expiration.",
    scanAutorise: true,
  },
  taille: {
    id: "taille",
    libelle: "Tour de taille",
    unite: "cm",
    protocole: "Au creux naturel de la taille, ruban horizontal posé sans compression, debout relâché.",
    scanAutorise: true,
  },
  hanches: {
    id: "hanches",
    libelle: "Tour de hanches",
    unite: "cm",
    protocole: "Au point le plus fort des fessiers, pieds joints, ruban horizontal.",
    scanAutorise: true,
  },
  cuisse: {
    id: "cuisse",
    libelle: "Tour de cuisse",
    unite: "cm",
    protocole: "À 2 cm sous le pli fessier, debout, poids réparti sur les deux jambes, muscle relâché.",
    scanAutorise: false,
  },
  biceps: {
    id: "biceps",
    libelle: "Tour de bras",
    unite: "cm",
    protocole: "Au point le plus fort du bras, bras tendu le long du corps, muscle relâché.",
    scanAutorise: true,
  },
  epaules: {
    id: "epaules",
    libelle: "Largeur d'épaules",
    unite: "cm",
    protocole: "D'un acromion à l'autre, en passant par le haut du dos, épaules relâchées.",
    scanAutorise: false,
  },
  envergure: {
    id: "envergure",
    libelle: "Envergure",
    unite: "cm",
    protocole: "Bras tendus à l'horizontale, d'un bout de majeur à l'autre, dos contre un mur.",
    scanAutorise: true,
  },
  longueur_bras: {
    id: "longueur_bras",
    libelle: "Longueur de bras",
    unite: "cm",
    protocole: "De l'acromion au pli du poignet, bras légèrement fléchi, main sur la hanche.",
    scanAutorise: false,
  },
  longueur_torse: {
    id: "longueur_torse",
    libelle: "Longueur de torse",
    unite: "cm",
    protocole: "De la base du cou, par-dessus l'épaule, jusqu'à l'entrejambe puis retour dans le dos.",
    scanAutorise: false,
  },
  longueur_dos: {
    id: "longueur_dos",
    libelle: "Longueur de dos",
    unite: "cm",
    protocole: "De la vertèbre saillante à la base du cou jusqu'au creux de la taille, dos droit.",
    scanAutorise: false,
  },
  entrejambe: {
    id: "entrejambe",
    libelle: "Entrejambe",
    unite: "cm",
    protocole: "De l'entrejambe au sol, pieds nus, jambes tendues et légèrement écartées.",
    scanAutorise: false,
  },
  cheville: {
    id: "cheville",
    libelle: "Tour de cheville",
    unite: "cm",
    protocole: "Juste au-dessus de la malléole, pied à plat au sol, ruban sans serrer.",
    scanAutorise: false,
  },
  hauteur_dorsale: {
    id: "hauteur_dorsale",
    libelle: "Hauteur dorsale",
    unite: "cm",
    protocole: "De la crête iliaque aux côtes flottantes, sur le côté du tronc, debout.",
    scanAutorise: false,
  },
  bassin: {
    id: "bassin",
    libelle: "Tour de bassin",
    unite: "cm",
    protocole: "Au niveau des crêtes iliaques, ruban horizontal, abdomen relâché.",
    scanAutorise: false,
  },
  taille_iliaque: {
    id: "taille_iliaque",
    libelle: "Tour de taille aux crêtes iliaques",
    unite: "cm",
    protocole: "Ruban posé exactement sur les crêtes iliaques, horizontal, sans compression.",
    scanAutorise: false,
  },
  taille_totale: {
    id: "taille_totale",
    libelle: "Taille (hauteur)",
    unite: "cm",
    protocole: "Pieds nus, talons joints, dos contre un mur, regard à l'horizontale.",
    scanAutorise: true,
  },
  poids: {
    id: "poids",
    libelle: "Poids",
    unite: "kg",
    protocole: "À jeun de préférence, sur sol dur, sans chaussures.",
    scanAutorise: true,
  },
};

export interface QuestionUsage {
  id: string;
  intitule: string;
  options: { valeur: string; libelle: string }[];
}

export interface SousVoletDef {
  id: string;
  libelle: string;
  description: string;
  zonesCritiques: ZoneId[];
  zonesSecondaires: ZoneId[];
  questions: QuestionUsage[];
}

export interface DisciplineDef {
  id: string;
  libelle: string;
  description: string;
  sousVolets: SousVoletDef[];
}

export interface VoletDef {
  id: string;
  libelle: string;
  description: string;
  /** Volet fermé aux utilisateurs tant que le seuil de couverture n'est pas atteint. */
  ouvert: boolean;
  motifFermeture?: string;
  disciplines: DisciplineDef[];
}

const ZONES_UNIVERSELLES: ZoneId[] = ["taille_totale", "poids"];

const Q_COUCHES: QuestionUsage = {
  id: "couches",
  intitule: "Prévoyez-vous de porter une couche intermédiaire dessous ?",
  options: [
    { valeur: "fine", libelle: "Une couche fine" },
    { valeur: "intermediaire", libelle: "Une couche fine et une polaire ou un softshell" },
    { valeur: "epaisse", libelle: "Plusieurs couches épaisses" },
    { valeur: "inconnu", libelle: "Je ne sais pas encore" },
  ],
};


const Q_FREQUENCE: QuestionUsage = {
  id: "frequence",
  intitule: "À quelle fréquence pratiquez-vous ?",
  options: [
    { valeur: "occasionnel", libelle: "Quelques sorties par an" },
    { valeur: "regulier", libelle: "Plusieurs fois par mois" },
    { valeur: "intensif", libelle: "Chaque semaine ou davantage" },
  ],
};

const Q_EAU: QuestionUsage = {
  id: "temperature",
  intitule: "Dans quelle eau pratiquez-vous le plus souvent ?",
  options: [
    { valeur: "froide", libelle: "Froide, moins de 15 °C" },
    { valeur: "temperee", libelle: "Tempérée, 15 à 20 °C" },
    { valeur: "chaude", libelle: "Chaude, plus de 20 °C" },
  ],
};

const Q_AJUSTEMENT: QuestionUsage = {
  id: "preference",
  intitule: "Quel ajustement préférez-vous ?",
  options: [
    { valeur: "proche", libelle: "Près du corps" },
    { valeur: "neutre", libelle: "Sans préférence marquée" },
    { valeur: "aise", libelle: "Avec de l'aisance" },
  ],
};

export const VOLETS: VoletDef[] = [
  {
    id: "A",
    libelle: "Néoprène",
    description: "Combinaisons et pièces de sports d'eau.",
    ouvert: true,
    disciplines: [
      {
        id: "A1",
        libelle: "Surf et sports de vague",
        description: "Vague, longboard, bodyboard.",
        sousVolets: [
          {
            id: "A1-integrale",
            libelle: "Combinaison intégrale",
            description: "Manches et jambes longues.",
            zonesCritiques: ["poitrine", "taille_totale", "poids"],
            zonesSecondaires: ["taille", "hanches", "cou", "longueur_torse", "longueur_bras", "longueur_dos", "biceps", "entrejambe", "cheville", "cuisse"],
            questions: [Q_EAU, Q_FREQUENCE, Q_AJUSTEMENT],
          },
          {
            id: "A1-shorty",
            libelle: "Shorty",
            description: "Manches et jambes courtes.",
            zonesCritiques: ["poitrine", "taille_totale", "poids"],
            zonesSecondaires: ["taille", "hanches", "cou", "longueur_torse", "entrejambe", "cuisse"],
            questions: [Q_EAU, Q_FREQUENCE, Q_AJUSTEMENT],
          },
          {
            id: "A1-top",
            libelle: "Top",
            description: "Haut néoprène seul.",
            zonesCritiques: ["poitrine", "taille_totale"],
            zonesSecondaires: ["taille", "poids", "cou", "longueur_torse", "longueur_bras", "biceps"],
            questions: [Q_EAU, Q_AJUSTEMENT],
          },
        ],
      },
      {
        id: "A2",
        libelle: "Eau libre et triathlon",
        description: "Le geste de nage impose la liberté d'épaule comme contrainte prioritaire.",
        sousVolets: [
          {
            id: "A2-integrale",
            libelle: "Combinaison de nage",
            description: "Intégrale orientée nage.",
            zonesCritiques: ["taille_totale", "poids"],
            zonesSecondaires: ["poitrine", "cou", "epaules", "biceps", "longueur_torse", "envergure", "taille", "hanches", "cuisse"],
            questions: [Q_EAU, Q_FREQUENCE, Q_AJUSTEMENT],
          },
        ],
      },
      {
        id: "A3",
        libelle: "Kitesurf, wingfoil et pratiques mixtes",
        description: "Contrainte supplémentaire sur taille et hanches liée au port du harnais.",
        sousVolets: [
          {
            id: "A3-integrale",
            libelle: "Combinaison intégrale",
            description: "Usage sous harnais.",
            zonesCritiques: ["poids", "taille_totale"],
            zonesSecondaires: ["poitrine", "taille", "hanches", "cou", "longueur_torse", "longueur_bras", "entrejambe", "cheville", "cuisse", "biceps"],
            questions: [Q_EAU, Q_FREQUENCE, Q_AJUSTEMENT],
          },
        ],
      },
      {
        id: "A4",
        libelle: "Plongée",
        description:
          "La compression en profondeur rend l'ajustement du tronc et la longueur de jambe déterminants.",
        sousVolets: [
          {
            id: "A4-integrale",
            libelle: "Combinaison de plongée",
            description: "Intégrale humide.",
            zonesCritiques: ["poitrine", "taille_totale"],
            zonesSecondaires: ["taille", "hanches", "poids", "entrejambe", "cou", "cuisse"],
            questions: [Q_EAU, Q_FREQUENCE, Q_AJUSTEMENT],
          },
        ],
      },

    ],
  },
  {
    id: "B",
    libelle: "Ski et snowboard",
    description: "Vêtements de montagne, couches et coques.",
    ouvert: true,
    disciplines: [
      {
        id: "B0",
        libelle: "Ski et snowboard",
        description: "Pièces de montagne.",
        sousVolets: [
          {
            id: "B1",
            libelle: "Veste",
            description: "Coque ou veste isolée, dimensionnée pour accueillir des couches dessous.",
            zonesCritiques: ["poitrine"],
            zonesSecondaires: [
              "taille",
              "hanches",
              "bassin",
              "longueur_bras",
              "epaules",
              "longueur_dos",
              "cuisse",
            ],
            questions: [Q_COUCHES, Q_FREQUENCE, Q_AJUSTEMENT],
          },
          {
            id: "B2",
            libelle: "Pantalon ou salopette",
            description: "Zone de défaillance principale des grilles standard.",
            zonesCritiques: ["taille", "hanches"],
            zonesSecondaires: ["bassin", "entrejambe", "cuisse", "cheville"],
            questions: [Q_COUCHES, Q_FREQUENCE, Q_AJUSTEMENT],
          },

          {
            id: "B3",
            libelle: "Première couche ou couche intermédiaire",
            description: "Sous-couche technique.",
            zonesCritiques: ["poitrine"],
            zonesSecondaires: ["taille", "hanches", "longueur_dos", "longueur_bras", "cuisse"],
            questions: [Q_FREQUENCE, Q_AJUSTEMENT],
          },
          {
            id: "B4",
            libelle: "Combinaison une pièce",
            description: "Cumul veste et pantalon, contrainte ajoutée sur la longueur de torse.",
            zonesCritiques: ["poitrine", "taille", "hanches", "longueur_torse"],
            zonesSecondaires: ["bassin", "longueur_bras", "longueur_dos", "epaules", "cuisse", "entrejambe", "cheville"],
            questions: [Q_COUCHES, Q_FREQUENCE, Q_AJUSTEMENT],
          },
        ],
      },
    ],
  },
  {
    id: "C",
    libelle: "Harnais de sports nautiques",
    description: "Ceinture, culotte, trapèze.",
    ouvert: false,
    motifFermeture:
      "Ce volet ouvrira lorsque nos données de marque couvriront la hauteur dorsale de façon vérifiée. Nous préférons ne rien recommander plutôt que recommander sur une donnée incertaine.",
    disciplines: [],
  },
];

/**
 * Le tour de cuisse est demandé sur tous les sous-volets concernés, y compris
 * lorsque aucune marque ne le publie (doc 01, §5.3). Ne pas supprimer.
 */
export const ZONE_TOUJOURS_DEMANDEE: ZoneId = "cuisse";

export function zonesDemandees(sv: SousVoletDef): { zone: ZoneId; critique: boolean }[] {
  const liste: { zone: ZoneId; critique: boolean }[] = [
    ...ZONES_UNIVERSELLES.map((z) => ({ zone: z, critique: false })),
    ...sv.zonesCritiques.map((z) => ({ zone: z, critique: true })),
    ...sv.zonesSecondaires.map((z) => ({ zone: z, critique: false })),
  ];
  if (!liste.some((l) => l.zone === ZONE_TOUJOURS_DEMANDEE)) {
    liste.push({ zone: ZONE_TOUJOURS_DEMANDEE, critique: false });
  }
  const vues = new Set<ZoneId>();
  return liste.filter((l) => (vues.has(l.zone) ? false : (vues.add(l.zone), true)));
}

export function trouverSousVolet(id: string): SousVoletDef | undefined {
  for (const v of VOLETS) for (const d of v.disciplines) for (const s of d.sousVolets) if (s.id === id) return s;
  return undefined;
}

/* ------------------------------------------------- profils de tolérance */

/**
 * Le sens de la tolérance dépend de la pièce, jamais du sport.
 *
 *  - « compressif » : néoprène et premières couches. La pièce travaille en
 *    compression, le trop grand est une défaillance fonctionnelle (perte de
 *    l'effet thermique ou de maintien). Une mesure basse dans la plage coûte
 *    cher, une mesure haute est tolérée jusqu'au bord.
 *  - « ample » : vêtement de montagne (veste, pantalon, une pièce). La coque
 *    est prévue pour loger des couches : le bas de plage est confortable, et
 *    c'est le haut de plage qui devient risqué faute de volume résiduel.
 *
 * Les seuils sont exprimés en position relative dans la plage publiée :
 * 0 = borne basse, 1 = borne haute.
 */
/**
 * Famille fonctionnelle du profil de tolérance. Elle est choisie sur la
 * fonction du vêtement, jamais sur le sport : compression (le volume en trop
 * est un défaut), superposition (le volume est nécessaire pour les couches),
 * contact (mobilité et contact peau), inconnue (logique produit non vérifiée :
 * aucune recommandation n'est émise).
 */
export type FamilleProfil = "compression" | "superposition" | "contact" | "inconnue";

export interface ProfilTolerance {
  id: "compressif" | "ample" | "contact" | "inconnu";
  famille: FamilleProfil;
  /** En dessous de ce seuil, le verdict devient « ample ». */
  seuilBas: number;
  /** À partir de ce seuil, le verdict devient « ajusté ». */
  seuilHaut: number;
  /** Coût relatif de chaque verdict, par unité de poids. */
  cout: { conforme: number; ajuste: number; ample: number; serre: number };
  /**
   * Aisance de superposition, en centimètres ajoutés à la mesure du corps
   * avant comparaison, par niveau de couches déclaré et par zone. Elle
   * n'existe que sur les circonférences du tronc et du bassin : les longueurs
   * ne varient pas avec le nombre de couches.
   */
  aisanceCouches: Record<string, Partial<Record<ZoneId, number>>>;
}

const SANS_AISANCE: ProfilTolerance["aisanceCouches"] = {};

export const PROFIL_COMPRESSIF: ProfilTolerance = {
  id: "compressif",
  famille: "compression",
  seuilBas: 0,
  seuilHaut: 0.78,
  cout: { conforme: 0, ajuste: 0.6, ample: 1.6, serre: 2.4 },
  aisanceCouches: SANS_AISANCE,
};

const AISANCE_TRONC = (p: number, t: number): Partial<Record<ZoneId, number>> => ({
  poitrine: p,
  taille: t,
  hanches: t,
  bassin: t,
});

export const PROFIL_AMPLE: ProfilTolerance = {
  id: "ample",
  famille: "superposition",
  // Une mesure sous la borne basse reste acceptable jusqu'à 35 % de la largeur
  // de plage : c'est le volume que la coque doit conserver pour les couches.
  seuilBas: -0.35,
  // Au-delà de 55 % de la plage, le volume résiduel ne suffit plus.
  seuilHaut: 0.55,
  cout: { conforme: 0, ajuste: 1.2, ample: 0.5, serre: 3 },
  aisanceCouches: {
    fine: AISANCE_TRONC(0, 0),
    intermediaire: AISANCE_TRONC(4, 3),
    epaisse: AISANCE_TRONC(7, 5),
    // Non renseigné : aucune aisance appliquée, incertitude affichée à l'écran.
    inconnu: AISANCE_TRONC(0, 0),
  },
};

/**
 * Première couche et pièces au contact : la mobilité compte, mais le volume en
 * trop reste un défaut fonctionnel — tolérance étroite des deux côtés.
 */
export const PROFIL_CONTACT: ProfilTolerance = {
  id: "contact",
  famille: "contact",
  seuilBas: -0.1,
  seuilHaut: 0.8,
  cout: { conforme: 0, ajuste: 0.5, ample: 1.4, serre: 1.8 },
  aisanceCouches: SANS_AISANCE,
};

/**
 * Profil déclaré non vérifié : le moteur refuse de recommander plutôt que
 * d'appliquer une tolérance qui n'a pas été établie.
 */
export const PROFIL_INCONNU: ProfilTolerance = {
  id: "inconnu",
  famille: "inconnue",
  seuilBas: 0,
  seuilHaut: 1,
  cout: { conforme: 0, ajuste: 0, ample: 0, serre: 0 },
  aisanceCouches: SANS_AISANCE,
};

/** Profil par sous-volet. Tout sous-volet absent est traité en compressif. */
export const PROFIL_PAR_SOUS_VOLET: Record<string, ProfilTolerance> = {
  B1: PROFIL_AMPLE,
  B2: PROFIL_AMPLE,
  B4: PROFIL_AMPLE,
  // B3 (première couche) travaille au contact du corps.
  B3: PROFIL_CONTACT,
};

export function profilTolerance(sousVoletId: string): ProfilTolerance {
  return PROFIL_PAR_SOUS_VOLET[sousVoletId] ?? PROFIL_COMPRESSIF;
}
