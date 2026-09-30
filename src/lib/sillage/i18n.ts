/* =========================================================
   SILLAGE — Module d'internationalisation (FR, EN, ES, IT, NO)

   Périmètre : tout le parcours utilisateur (navigation, mesures
   et protocoles, verdicts, alertes, résultats, consentements,
   messages d'honnêteté).
   Hors périmètre volontaire : les notes éditoriales par grille
   (provenance, remarques marques) et les articles « Repères »
   restent en français, à localiser dans une passe dédiée.

   IMPORTANT : les protocoles de mesure ES / IT / NO sont des
   traductions soignées mais NON relues par un locuteur natif ;
   faire valider ces clés (zones.*.guide) avant mise en production,
   car une consigne anatomique approximative produit de mauvaises
   mesures, donc de mauvaises tailles.

   Toute clé absente retombe automatiquement sur le français.
   ========================================================= */

import { useEffect, useState } from "react";

import type { ZoneId } from "./types";
import { CORE_LANGS } from "./langs";
import { signalerManque } from "./i18n-diagnostic";


export const LANG_NAMES = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
  no: "Norsk",
  de: "Deutsch",
  pt: "Português",
  nl: "Nederlands",
  pl: "Polski",
  sv: "Svenska",
  da: "Dansk",
  fi: "Suomi",
  el: "Ελληνικά",
  cs: "Čeština",
  ro: "Română",
  hu: "Magyar",
  tr: "Türkçe",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
} as const;

export type Lang = keyof typeof LANG_NAMES;

export const LANGS = Object.keys(LANG_NAMES) as Lang[];

/**
 * Étiquette BCP 47 du document : le norvégien de l'interface est du bokmål,
 * annoncé « nb » et non « no ».
 */
export function baliseLangue(lang: Lang): string {
  if (lang === "no") return "nb";
  if (lang === "zh") return "zh-Hans";
  return lang;
}

export function detectLang(): Lang {
  const nav = (typeof navigator !== "undefined" && navigator.language) || "fr";
  const code = nav.slice(0, 2).toLowerCase();
  if (code === "nb" || code === "nn" || code === "no") return "no";
  if (code === "zh") return "zh";
  return (LANGS as string[]).includes(code) ? (code as Lang) : "en";
}

type Dict = Record<string, unknown>;

export function makeT(lang: Lang) {
  return (key: string): string => {
    const path = key.split(".");
    const pick = (obj: Dict | undefined) =>
      path.reduce<unknown>((o, k) => (o && typeof o === "object" ? (o as Dict)[k] : undefined), obj);
    const table = STR as unknown as Partial<Record<Lang, Dict>>;
    const direct = pick(table[lang]);
    const v = direct ?? pick(table.fr);
    if (typeof direct !== "string") {
      signalerManque("parcours", key, lang, typeof v === "string" ? "repli_fr" : "absente");
    }
    return typeof v === "string" ? v : key;
  };

}

export type T = ReturnType<typeof makeT>;

/** Correspondance zone anatomique → clé de traduction. */
export const CLE_ZONE: Record<ZoneId, string> = {
  cou: "nk",
  poitrine: "c",
  taille: "wa",
  hanches: "hp",
  cuisse: "th",
  biceps: "bc",
  epaules: "sh",
  envergure: "ws",
  longueur_bras: "al",
  longueur_torse: "tl",
  longueur_dos: "bl",
  entrejambe: "ij",
  cheville: "ak",
  hauteur_dorsale: "dh",
  bassin: "pv",
  taille_iliaque: "il",
  taille_totale: "h",
  poids: "wt",
};

export function libelleZone(t: T, zone: ZoneId) {
  return t(`zones.${CLE_ZONE[zone]}.label`);
}

export function protocoleZone(t: T, zone: ZoneId) {
  return t(`zones.${CLE_ZONE[zone]}.guide`);
}

const STR = {
  /* ---------------- FRANÇAIS (référence) ---------------- */
  fr: {
    outil: {
      skip: "Aller au contenu principal",
      recap: "Récapitulatif",
      recapOuvrir: "Afficher le récapitulatif",
      recapFermer: "Masquer le récapitulatif",
      recapVide: "Vos choix apparaîtront ici au fil du parcours.",
      recapFamille: "Famille",
      recapDiscipline: "Discipline",
      recapPiece: "Pièce",
      recapUsage: "Usage",
      recapGene: "Gênes signalées",
      recapAucuneGene: "Jamais porté ce type de pièce",
      recapMesures: "Mesures déterminantes",
      recapMesuresEtat: "{n} sur {total} saisies",
      etapeEnCours: "Étape {n} sur 4 : {nom}",
      mesuresDeterminantes: "Déterminantes pour cette pièce",
      mesuresFacultatives: "Facultatives, elles affinent la précision",
      commentMesurer: "Comment mesurer",
    },
    app: {
      nom: "Sillage",
      eyebrow: "Taille par morphologie",
      tagline: "Le bon modèle pour votre pratique. La bonne taille pour votre corps.",
      dataNote: "Grilles officielles des fabricants, relevées et vérifiées, jamais inventées.",
      langue: "Langue",
    },
    steps: {
      progress: "Progression",
      s1: "Sélection",
      s2: "Usage",
      s3: "Mesures",
      s4: "Résultat",
      etape: "Étape",
    },
    buttons: {
      next: "Continuer",
      back: "Retour",
      result: "Voir le résultat",
      restart: "Nouvelle recherche",
      pieces: "Voir les pièces",
    },
    sel: {
      titre: "Votre pratique",
      sous: "Choisissez la famille, la discipline puis la pièce. Nous n'interrogeons que les mesures utiles à cette pièce.",
      famille: "Famille",
      discipline: "Discipline",
      piece: "Pièce",
    },
    usage: {
      titre: "Votre usage",
      sous: "Quelques questions courtes. Elles orientent l'ajustement recherché.",
      geneTitre: "Sur un matériel précédent, avez-vous ressenti une gêne ?",
      geneMulti: "Cochez toutes les gênes ressenties. Chacune resserre la tolérance sur la zone concernée, sans toucher aux autres.",
      jamais: "Je n'ai jamais porté ce type de pièce",
      oui: "Oui, à un endroit précis",
      ou: "Où ?",
      choisirZone: "Choisir une zone",
      tropSerre: "Trop serré",
      tropAmple: "Trop ample",
    },
    mes: {
      titre: "Vos mesures",
      sous: "Un mètre ruban souple suffit. Les zones déterminantes pour cette pièce se mesurent à la main : c'est là que l'estimation automatique est la moins fiable.",
      determinant: "Déterminant",
      facultatif: "Facultatif",
      sansMesure:
        "Sans cette mesure, la recommandation reste possible mais moins précise sur cette zone.",
      manque: "Il manque une ou plusieurs mesures déterminantes pour cette pièce.",
      scan: {
        offre: "Je n'ai pas de mètre — scanner mon corps",
        offreSous:
          "Une capture guidée au smartphone pré-remplit les champs. Vous gardez la main : chaque valeur reste modifiable avant validation.",
        optionnel: "Option complémentaire",
        simulation: "Démonstration : capture simulée, aucun prestataire n'est appelé et aucune image n'est transmise.",
        lancer: "Lancer la capture",
        encours: "Capture en cours",
        etape1: "Placez le téléphone à hauteur de hanche, à deux mètres de vous.",
        etape2: "Tenez-vous de face, bras légèrement écartés, puis de profil.",
        etape3: "Restez immobile pendant le relevé des points de mesure.",
        annuler: "Revenir à la saisie manuelle",
        refaire: "Refaire une capture",
        termine: "Mesures pré-remplies depuis la capture",
        avertissement:
          "Vérifiez et ajustez si besoin — les mesures issues d'un scan peuvent varier selon la précision de la capture.",
        badge: "Issu du scan",
        badgeConfirme: "Confirmé à la main",
        confirmer: "Je confirme cette mesure",
        sensible:
          "Zone sensible : sur les morphologies atypiques (hanches fortes et taille fine, par exemple), la précision des scans n'est pas encore validée. Mesurez-la au mètre ou confirmez-la explicitement.",
        profilA:
          "Votre capture montre un écart taille / hanches marqué. C'est précisément le cas où un scan dérive : la mesure manuelle reste la référence sur les zones signalées.",
        nonCouvertes: "La capture ne produit pas ces mesures ; renseignez-les à la main :",
        bloque: "Confirmez ou corrigez les zones sensibles signalées avant de continuer.",
      },
    },

    /* Formes fléchies FR : l'article s'accorde au nom de la mesure
       ("la longueur de torse", "l'entrejambe"). Utilisé dans les phrases
       de justification, jamais comme libellé de champ. */
    zonesAvec: {
      c: "le tour de poitrine",
      wa: "le tour de taille",
      hp: "le tour de hanches",
      th: "le tour de cuisse",
      h: "la stature",
      wt: "le poids",
      ij: "l'entrejambe",
      bl: "la longueur de dos",
      nk: "le tour de cou",
      bc: "le tour de biceps",
      sh: "la largeur d'épaules",
      ws: "l'envergure",
      al: "la longueur de bras",
      tl: "la longueur de torse",
      ak: "le tour de cheville",
      dh: "la hauteur dorsale",
      pv: "le tour de bassin",
      il: "le tour de taille aux crêtes iliaques",
    },
    zones: {
      c: {
        label: "Tour de poitrine",
        guide:
          "Ruban horizontal au point le plus fort de la poitrine, sur sous-vêtements uniquement. Expiration normale, ruban ajusté sans serrer.",
      },
      wa: {
        label: "Tour de taille",
        guide:
          "Au creux naturel de la taille, entre les côtes et les hanches. Ne rentrez pas le ventre, respirez normalement.",
      },
      hp: {
        label: "Tour de hanches",
        guide:
          "Au point le plus fort du bassin et des fessiers, pieds joints. Vérifiez l'horizontalité du ruban dans un miroir.",
      },
      th: {
        label: "Tour de cuisse",
        guide:
          "Au point le plus fort de la cuisse, debout, jambe relâchée, poids réparti sur les deux pieds.",
      },
      h: { label: "Stature", guide: "Dos au mur, sans chaussures, talons joints, regard horizontal." },
      wt: { label: "Poids", guide: "Le matin, sans vêtements lourds." },
      ij: { label: "Entrejambe", guide: "De l'entrejambe au sol, dos au mur, sans chaussures." },
      bl: {
        label: "Longueur de dos",
        guide:
          "De la 7e vertèbre cervicale (à la base du col d'un t-shirt) jusqu'à la crête iliaque, au niveau de l'os de la hanche.",
      },
      nk: { label: "Tour de cou", guide: "À la base du cou, ruban horizontal, sans serrer." },
      bc: { label: "Tour de biceps", guide: "Au point le plus fort du bras, relâché le long du corps." },
      sh: {
        label: "Largeur d'épaules",
        guide: "D'un acromion à l'autre, en passant par le haut du dos, épaules relâchées.",
      },
      ws: {
        label: "Envergure",
        guide: "Bras tendus à l'horizontale, d'un bout de majeur à l'autre, dos contre un mur.",
      },
      al: {
        label: "Longueur de bras",
        guide: "De l'acromion au pli du poignet, bras légèrement fléchi, main sur la hanche.",
      },
      tl: {
        label: "Longueur de torse",
        guide: "De la base du cou, par-dessus l'épaule, jusqu'à l'entrejambe puis retour dans le dos.",
      },
      ak: {
        label: "Tour de cheville",
        guide: "Juste au-dessus de la malléole, pied à plat au sol, ruban sans serrer.",
      },
      dh: {
        label: "Hauteur dorsale",
        guide: "De la crête iliaque aux côtes flottantes, sur le côté du tronc, debout.",
      },
      pv: {
        label: "Tour de bassin",
        guide: "Au niveau des crêtes iliaques, ruban horizontal, abdomen relâché.",
      },
      il: {
        label: "Tour de taille aux crêtes iliaques",
        guide: "Ruban posé exactement sur les crêtes iliaques, horizontal, sans compression.",
      },
    },
    consent: {
      titre: "Vos données",
      intro:
        "Par défaut, cette session est éphémère : vos mesures restent en mémoire le temps de la consultation et ne sont pas conservées. Aucune case n'est cochée à l'avance.",
      sessionL: "Utiliser mes mesures pour cette recommandation",
      sessionD: "Nécessaire pour obtenir un résultat maintenant.",
      profilL: "Conserver mon profil au-delà de la session",
      profilD:
        "Pour retrouver vos mesures lors d'une prochaine visite. Refus sans conséquence sur le résultat.",
      agregeL: "Contribuer, de façon agrégée et anonyme, à l'amélioration du service",
      agregeD: "Aucun retour possible vers votre profil.",
      marchandL: "Transmettre la taille recommandée au marchand partenaire",
      marchandD: "Uniquement la taille, jamais vos mesures.",
      droits:
        "Accès, rectification, effacement, portabilité et retrait du consentement sont accessibles à tout moment depuis l'interface.",
    },
    res: {
      titre: "Résultat",
      refusTitre: "Nous ne pouvons pas encore vous répondre",
      refusSuite:
        "Vos mesures ont bien été prises en compte. Dès qu'une marque atteindra notre exigence de couverture sur cette pièce, la recommandation deviendra disponible.",
      indepartageables:
        "Deux marques conviennent également bien. Nous préférons vous le dire plutôt que trancher arbitrairement.",
      coupeDeclaree: "Coupe déclarée",
      noteEnFrancais: "texte source en français, traduction à relire",
      sourceMarque: "source marque",
      sourceSecondaire: "source secondaire",
      millesime: "Grille {annee}",
      just: {
        pireSerre:
          "Cette taille est celle qui contraint le moins vos mesures déterminantes ; {zone} dépasse la plage annoncée : l'ajustement y sera contraint.",
        pireAmple:
          "Cette taille est celle qui contraint le moins vos mesures déterminantes ; {zone} se situe sous la plage annoncée : attendez-vous à de l'aisance à cet endroit.",
        pireAjuste:
          "Cette taille est celle qui contraint le moins vos mesures déterminantes ; {zone} se situe en haut de plage : l'ajustement y sera proche du corps.",
        aucuneTension:
          "Toutes vos mesures déterminantes tombent dans les plages annoncées pour cette taille, sans zone en tension.",
        couvertureSingulier:
          "{evaluees} zone déterminante sur {total} a pu être comparée ; la confiance en tient compte.",
        couverturePluriel:
          "{evaluees} zones déterminantes sur {total} ont pu être comparées ; la confiance en tient compte.",
        aisance:
          "La couche intermédiaire que vous avez déclarée est intégrée à la comparaison : le volume nécessaire pour la loger a été réservé.",
        couchesInconnues:
          "Vous n'avez pas indiqué ce que vous porterez dessous : aucun volume supplémentaire n'a été réservé. Si vous ajoutez une polaire, la taille au-dessus peut devenir nécessaire.",
        scan:
          "Une partie de vos mesures provient d'une capture au smartphone et n'a pas été reconfirmée au mètre : la confiance en tient compte.",
        provenanceFaible:
          "Une partie des valeurs de marque utilisées ici est déclarative et non vérifiée par nos soins.",
        coupeElasticite: "Coupe déclarée : {coupe}, élasticité {elasticite}.",
        coupe: "Précision de la marque : {coupe}",
      },
      refus: {
        aucunePiece: "Aucune pièce n'a été sélectionnée pour cette consultation.",
        profilInconnu:
          "La logique d'ajustement de cette pièce n'est pas encore vérifiée : nous ne pouvons pas recommander une taille avec assez de confiance. Tant que le profil de tolérance n'a pas été établi, nous préférons ne rien avancer.",
        aucuneMesure:
          "Aucune mesure déterminante n'a été renseignée pour cette pièce. Nous préférons ne rien recommander plutôt que deviner.",
        aucuneMarque:
          "Nous n'avons pas encore de mesures vérifiées de marque couvrant les zones déterminantes de cette pièce. Nous préférons ne rien vous recommander plutôt que vous proposer une taille que nous ne pouvons pas justifier.",
        aucuneComparaison:
          "Vos mesures ne peuvent être comparées à aucune grille disponible pour cette pièce. Nous préférons le dire plutôt que trancher au hasard.",
      },
      nonEval: {
        compact: "Non évalué — données insuffisantes pour : {zones}",
        reste: "+{n}",
        voir: "Voir le détail",
        masquer: "Masquer le détail",
        vetement_fini:
          "{zone} : la marque publie ici une dimension du vêtement fini, qui ne se compare pas à une mesure du corps.",
        donnee_marque_absente: "{zone} : la marque ne publie pas cette mesure pour cette taille.",
        mesure_absente: "{zone} : cette mesure n'a pas été renseignée.",
      },
      tracabilite: "Traçabilité de cette consultation",
      referentiel: "Référentiel",
      parametres: "Paramètres",
      horodatage: "Horodatage",
    },
    vente: {
      titre: "Où trouver ce modèle",
      triPrix: "Points de vente triés par prix croissant. Prix indicatifs relevés manuellement, non actualisés en temps réel.",
      meilleurPrix: "Meilleur prix",
      lienAffilie: "Lien affilié",
      lienCommercial: "Lien commercial",
      lienNeutre: "Lien non rémunéré",
      enStock: "en stock au relevé",
      stockLimite: "stock limité au relevé",
      stockInconnu: "disponibilité non vérifiée",
      prixInconnu: "prix non relevé",
      transparence: "Certains liens ci-dessus sont rémunérés : si vous achetez après avoir cliqué, SILLAGE peut percevoir une commission. Cela ne change ni le prix payé, ni la recommandation de taille, qui reste calculée uniquement sur vos mesures.",
      prixReleve: "Prix et disponibilité relevés le {date} : vérifiez sur le site marchand avant d'acheter.",
      aucun: "Aucun point de vente n'est encore référencé pour ce modèle. Nous préférons ne rien afficher plutôt que d'envoyer vers un lien approximatif.",
      mock: "EXEMPLE DE DÉMONSTRATION — DONNÉES NON RÉELLES : ces points de vente, prix et liens sont fictifs, relevés à la main pour illustrer l'écran. Aucun flux marchand n'est branché.",
    },
    verdict: { serre: "Trop serré", ajuste: "Ajusté", conforme: "Bonne coupe", ample: "Ample", insuffisant: "Donnée insuffisante" },
    confiance: {
      mot: "Confiance",
      1: "très faible",
      2: "faible",
      3: "moyenne",
      4: "haute",
      5: "très haute",
    },
    repere: {
      mot: "Repère",
      grille: "Pourquoi une marque publie une seule grille pour toute sa gamme",
      mesurer: "Bien se mesurer : cinq règles qui changent le résultat",
      nonDit: "Ce qu'une grille de tailles ne dit pas, et pourquoi nous l'écrivons",
    },
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    outil: {
      skip: "Skip to main content",
      recap: "Summary",
      recapOuvrir: "Show summary",
      recapFermer: "Hide summary",
      recapVide: "Your choices will appear here as you go.",
      recapFamille: "Family",
      recapDiscipline: "Discipline",
      recapPiece: "Item",
      recapUsage: "Use",
      recapGene: "Reported discomfort",
      recapAucuneGene: "Never worn this type of item",
      recapMesures: "Decisive measurements",
      recapMesuresEtat: "{n} of {total} entered",
      etapeEnCours: "Step {n} of 4: {nom}",
      mesuresDeterminantes: "Decisive for this item",
      mesuresFacultatives: "Optional, improves precision",
      commentMesurer: "How to measure",
    },
    app: {
      nom: "Sillage",
      eyebrow: "Sizing by body shape",
      tagline: "The right model for your practice. The right size for your body.",
      dataNote: "Official manufacturer size charts, collected and verified, never invented.",
      langue: "Language",
    },
    steps: {
      progress: "Progress",
      s1: "Selection",
      s2: "Use",
      s3: "Measurements",
      s4: "Result",
      etape: "Step",
    },
    buttons: {
      next: "Continue",
      back: "Back",
      result: "See the result",
      restart: "New search",
      pieces: "See the items",
    },
    sel: {
      titre: "Your practice",
      sous: "Choose the family, the discipline, then the item. We only ask for the measurements that matter for that item.",
      famille: "Family",
      discipline: "Discipline",
      piece: "Item",
    },
    usage: {
      titre: "Your use",
      sous: "A few short questions. They set the fit we look for.",
      geneTitre: "On previous gear, did you feel any discomfort?",
      geneMulti: "Tick every discomfort you felt. Each one tightens tolerance on that area only.",
      jamais: "I have never worn this type of item",
      oui: "Yes, in one specific spot",
      ou: "Where?",
      choisirZone: "Choose an area",
      tropSerre: "Too tight",
      tropAmple: "Too loose",
    },
    mes: {
      titre: "Your measurements",
      sous: "A soft tape measure is enough. The decisive areas for this item are measured by hand: that is where automatic estimates are least reliable.",
      determinant: "Decisive",
      facultatif: "Optional",
      sansMesure:
        "Without this measurement, a recommendation is still possible but less precise in this area.",
      manque: "One or more decisive measurements are missing for this item.",
      scan: {
        offre: "No tape measure — scan my body",
        offreSous:
          "A guided smartphone capture pre-fills the fields. You stay in control: every value remains editable before you continue.",
        optionnel: "Optional add-on",
        simulation: "Demo: the capture is simulated, no provider is called and no image is transmitted.",
        lancer: "Start the capture",
        encours: "Capture in progress",
        etape1: "Place the phone at hip height, two metres away from you.",
        etape2: "Stand facing the phone, arms slightly apart, then turn sideways.",
        etape3: "Stay still while the measurement points are read.",
        annuler: "Back to manual entry",
        refaire: "Run the capture again",
        termine: "Fields pre-filled from the capture",
        avertissement:
          "Check and adjust if needed — measurements from a scan can vary with the quality of the capture.",
        badge: "From the scan",
        badgeConfirme: "Confirmed by hand",
        confirmer: "I confirm this measurement",
        sensible:
          "Sensitive area: on atypical body shapes (strong hips with a narrow waist, for instance) scan accuracy is not validated yet. Measure it by hand or confirm it explicitly.",
        profilA:
          "Your capture shows a marked waist-to-hip difference. That is exactly where a scan drifts: manual measurement remains the reference on the flagged areas.",
        nonCouvertes: "The capture does not produce these measurements; enter them by hand:",
        bloque: "Confirm or correct the flagged sensitive areas before continuing.",
      },
    },

    zones: {
      c: {
        label: "Chest",
        guide:
          "Tape horizontal around the fullest part of the chest, over underwear only. Breathe out normally; tape snug, not tight.",
      },
      wa: {
        label: "Waist",
        guide: "At the natural waist, between ribs and hips. Don't pull your stomach in; breathe normally.",
      },
      hp: {
        label: "Hips",
        guide:
          "Around the fullest part of the hips and seat, feet together. Check the tape is level in a mirror.",
      },
      th: {
        label: "Thigh",
        guide: "Around the fullest part of the thigh, standing, leg relaxed, weight on both feet.",
      },
      h: { label: "Height", guide: "Back against a wall, no shoes, heels together, looking straight ahead." },
      wt: { label: "Weight", guide: "In the morning, without heavy clothing." },
      ij: { label: "Inseam", guide: "From the crotch to the floor, back against a wall, no shoes." },
      bl: {
        label: "Back length",
        guide:
          "From the 7th cervical vertebra (base of a t-shirt collar) down to the iliac crest, at hip-bone level.",
      },
      nk: { label: "Neck", guide: "At the base of the neck, tape horizontal, without tightening." },
      bc: { label: "Biceps", guide: "Around the fullest part of the upper arm, relaxed at your side." },
      sh: {
        label: "Shoulder width",
        guide: "From one acromion to the other, across the upper back, shoulders relaxed.",
      },
      ws: {
        label: "Wingspan",
        guide: "Arms straight out horizontally, from middle fingertip to middle fingertip, back against a wall.",
      },
      al: {
        label: "Arm length",
        guide: "From the acromion to the wrist crease, arm slightly bent, hand on hip.",
      },
      tl: {
        label: "Torso length",
        guide: "From the base of the neck, over the shoulder, down to the crotch and back up the back.",
      },
      ak: { label: "Ankle", guide: "Just above the ankle bone, foot flat on the floor, tape not tightened." },
      dh: {
        label: "Back height",
        guide: "From the iliac crest to the floating ribs, along the side of the trunk, standing.",
      },
      pv: { label: "Pelvis", guide: "At the level of the iliac crests, tape horizontal, abdomen relaxed." },
      il: {
        label: "Waist at the iliac crests",
        guide: "Tape placed exactly on the iliac crests, horizontal, without compression.",
      },
    },
    consent: {
      titre: "Your data",
      intro:
        "By default this session is ephemeral: your measurements stay in memory for the duration of the visit and are not stored. No box is pre-ticked.",
      sessionL: "Use my measurements for this recommendation",
      sessionD: "Required to get a result now.",
      profilL: "Keep my profile beyond this session",
      profilD: "To find your measurements again on a future visit. Declining does not affect the result.",
      agregeL: "Contribute, in aggregated and anonymous form, to improving the service",
      agregeD: "No way back to your profile.",
      marchandL: "Share the recommended size with the partner retailer",
      marchandD: "Only the size, never your measurements.",
      droits:
        "Access, rectification, erasure, portability and withdrawal of consent are available at any time from the interface.",
    },
    res: {
      titre: "Result",
      refusTitre: "We can't answer you yet",
      refusSuite:
        "Your measurements were taken into account. As soon as a brand meets our coverage requirement for this item, the recommendation will become available.",
      indepartageables:
        "Two brands fit equally well. We would rather tell you than decide arbitrarily.",
      coupeDeclaree: "Declared fit",
      noteEnFrancais: "source text in French, translation pending",
      sourceMarque: "brand source",
      sourceSecondaire: "secondary source",
      millesime: "{annee} size chart",
      just: {
        pireSerre:
          "This size constrains your key measurements the least; {zone} exceeds the published range, so the fit will be tight there.",
        pireAmple:
          "This size constrains your key measurements the least; {zone} sits below the published range, so expect some room there.",
        pireAjuste:
          "This size constrains your key measurements the least; {zone} sits at the top of the range, so the fit will be close to the body there.",
        aucuneTension:
          "All of your key measurements fall inside the ranges published for this size, with no zone under tension.",
        couvertureSingulier:
          "{evaluees} of {total} key zones could be compared; confidence reflects that.",
        couverturePluriel:
          "{evaluees} of {total} key zones could be compared; confidence reflects that.",
        aisance:
          "The mid-layer you declared is included in the comparison: the volume needed to fit it has been reserved.",
        couchesInconnues:
          "You did not say what you will wear underneath, so no extra volume was reserved. If you add a fleece, the size above may become necessary.",
        scan:
          "Some of your measurements come from a smartphone capture and were not reconfirmed with a tape: confidence reflects that.",
        provenanceFaible:
          "Some of the brand values used here are declarative and have not been verified by us.",
        coupeElasticite: "Declared fit: {coupe}, stretch class {elasticite}.",
        coupe: "Brand note: {coupe}",
      },
      refus: {
        aucunePiece: "No item was selected for this consultation.",
        profilInconnu:
          "The fit logic for this item has not been verified yet: we cannot recommend a size with enough confidence. Until the tolerance profile is established, we would rather say nothing.",
        aucuneMesure:
          "No key measurement was provided for this item. We would rather recommend nothing than guess.",
        aucuneMarque:
          "We do not yet have verified brand measurements covering the key zones of this item. We would rather recommend nothing than offer a size we cannot justify.",
        aucuneComparaison:
          "Your measurements cannot be compared with any size chart available for this item. We prefer to say so rather than decide at random.",
      },
      nonEval: {
        compact: "Not assessed — not enough data for: {zones}",
        reste: "+{n}",
        voir: "Show details",
        masquer: "Hide details",
        vetement_fini:
          "{zone}: the brand publishes a finished-garment dimension here, which cannot be compared with a body measurement.",
        donnee_marque_absente: "{zone}: the brand does not publish this measurement for this size.",
        mesure_absente: "{zone}: this measurement was not provided.",
      },
      tracabilite: "Traceability of this consultation",
      referentiel: "Reference data",
      parametres: "Parameters",
      horodatage: "Timestamp",
    },
    vente: {
      titre: "Where to find this model",
      triPrix: "Retailers sorted by ascending price. Indicative prices collected manually, not refreshed in real time.",
      meilleurPrix: "Best price",
      lienAffilie: "Affiliate link",
      lienCommercial: "Commercial link",
      lienNeutre: "Unpaid link",
      enStock: "in stock at collection",
      stockLimite: "limited stock at collection",
      stockInconnu: "availability not verified",
      prixInconnu: "price not collected",
      transparence: "Some links above are paid: if you buy after clicking, SILLAGE may earn a commission. It changes neither the price you pay nor the size recommendation, which is computed solely from your measurements.",
      prixReleve: "Prices and availability collected on {date}: check the retailer's site before buying.",
      aucun: "No retailer is referenced yet for this model. We would rather show nothing than send you to an approximate link.",
      mock: "MOCK EXAMPLE — NOT LIVE DATA: these retailers, prices and links are fictional, entered by hand to illustrate the screen. No merchant feed is connected.",
    },
    verdict: { serre: "Too tight", ajuste: "Snug", conforme: "Good fit", ample: "Loose", insuffisant: "Insufficient data" },
    confiance: { mot: "Confidence", 1: "very low", 2: "low", 3: "medium", 4: "high", 5: "very high" },
    repere: {
      mot: "Reference",
      grille: "Why a brand publishes a single chart for its whole range",
      mesurer: "Measuring yourself well: five rules that change the result",
      nonDit: "What a size chart does not say, and why we write it down",
    },
  },

  /* ---------------- ESPAÑOL (protocoles à faire relire par un natif) ---------------- */
  es: {
    app: {
      nom: "Sillage",
      eyebrow: "Tallas según tu morfología",
      tagline: "El modelo adecuado para tu práctica. La talla adecuada para tu cuerpo.",
      dataNote:
        "Tablas de tallas oficiales de los fabricantes, recopiladas y verificadas, nunca inventadas.",
      langue: "Idioma",
    },
    steps: {
      progress: "Progreso",
      s1: "Selección",
      s2: "Uso",
      s3: "Medidas",
      s4: "Resultado",
      etape: "Paso",
    },
    buttons: {
      next: "Continuar",
      back: "Volver",
      result: "Ver el resultado",
      restart: "Nueva búsqueda",
      pieces: "Ver las prendas",
    },
    sel: {
      titre: "Tu práctica",
      sous: "Elige la familia, la disciplina y luego la prenda. Solo preguntamos las medidas útiles para esa prenda.",
      famille: "Familia",
      discipline: "Disciplina",
      piece: "Prenda",
    },
    usage: {
      titre: "Tu uso",
      sous: "Unas preguntas breves. Orientan el ajuste que buscamos.",
      geneTitre: "Con un material anterior, ¿sentiste alguna molestia?",
      geneMulti: "Marca todas las molestias sentidas. Cada una ajusta la tolerancia solo en esa zona.",
      jamais: "Nunca he llevado este tipo de prenda",
      oui: "Sí, en un punto concreto",
      ou: "¿Dónde?",
      choisirZone: "Elegir una zona",
      tropSerre: "Demasiado apretado",
      tropAmple: "Demasiado holgado",
    },
    mes: {
      titre: "Tus medidas",
      sous: "Basta con una cinta métrica flexible. Las zonas determinantes de esta prenda se miden a mano: es donde la estimación automática es menos fiable.",
      determinant: "Determinante",
      facultatif: "Opcional",
      sansMesure: "Sin esta medida la recomendación sigue siendo posible, pero menos precisa en esta zona.",
      manque: "Falta una o varias medidas determinantes para esta prenda.",
    },
    zones: {
      c: {
        label: "Contorno de pecho",
        guide:
          "Cinta horizontal en la parte más ancha del pecho, solo sobre ropa interior. Espira con normalidad; cinta ajustada sin apretar.",
      },
      wa: {
        label: "Contorno de cintura",
        guide:
          "En la cintura natural, entre las costillas y las caderas. No metas el vientre; respira con normalidad.",
      },
      hp: {
        label: "Contorno de cadera",
        guide:
          "En la parte más ancha de la cadera y los glúteos, pies juntos. Comprueba en un espejo que la cinta está horizontal.",
      },
      th: {
        label: "Contorno de muslo",
        guide:
          "En la parte más ancha del muslo, de pie, pierna relajada, peso repartido en ambos pies.",
      },
      h: { label: "Estatura", guide: "Espalda contra la pared, sin zapatos, talones juntos, mirada al frente." },
      wt: { label: "Peso", guide: "Por la mañana, sin ropa pesada." },
      ij: { label: "Entrepierna", guide: "De la entrepierna al suelo, espalda contra la pared, sin zapatos." },
      bl: {
        label: "Longitud de espalda",
        guide:
          "Desde la 7.ª vértebra cervical (base del cuello de una camiseta) hasta la cresta ilíaca, a la altura del hueso de la cadera.",
      },
      nk: { label: "Contorno de cuello", guide: "En la base del cuello, cinta horizontal, sin apretar." },
      bc: {
        label: "Contorno de bíceps",
        guide: "En la parte más ancha del brazo, relajado a lo largo del cuerpo.",
      },
      sh: {
        label: "Ancho de hombros",
        guide: "De un acromion al otro, pasando por la parte alta de la espalda, hombros relajados.",
      },
      ws: {
        label: "Envergadura",
        guide:
          "Brazos extendidos en horizontal, de la punta de un dedo corazón a la otra, espalda contra la pared.",
      },
      al: {
        label: "Longitud de brazo",
        guide: "Del acromion al pliegue de la muñeca, brazo ligeramente flexionado, mano en la cadera.",
      },
      tl: {
        label: "Longitud de torso",
        guide: "Desde la base del cuello, por encima del hombro, hasta la entrepierna y de vuelta por la espalda.",
      },
      ak: {
        label: "Contorno de tobillo",
        guide: "Justo por encima del maléolo, pie plano en el suelo, cinta sin apretar.",
      },
      dh: {
        label: "Altura dorsal",
        guide: "De la cresta ilíaca a las costillas flotantes, por el costado del tronco, de pie.",
      },
      pv: {
        label: "Contorno de pelvis",
        guide: "A la altura de las crestas ilíacas, cinta horizontal, abdomen relajado.",
      },
      il: {
        label: "Cintura en las crestas ilíacas",
        guide: "Cinta colocada exactamente sobre las crestas ilíacas, horizontal, sin comprimir.",
      },
    },
    consent: {
      titre: "Tus datos",
      intro:
        "Por defecto esta sesión es efímera: tus medidas permanecen en memoria durante la consulta y no se conservan. Ninguna casilla está marcada de antemano.",
      sessionL: "Usar mis medidas para esta recomendación",
      sessionD: "Necesario para obtener un resultado ahora.",
      profilL: "Conservar mi perfil más allá de la sesión",
      profilD: "Para recuperar tus medidas en una próxima visita. Rechazarlo no afecta al resultado.",
      agregeL: "Contribuir, de forma agregada y anónima, a mejorar el servicio",
      agregeD: "Sin posibilidad de volver a tu perfil.",
      marchandL: "Transmitir la talla recomendada al comercio asociado",
      marchandD: "Solo la talla, nunca tus medidas.",
      droits:
        "Acceso, rectificación, supresión, portabilidad y retirada del consentimiento están disponibles en todo momento desde la interfaz.",
    },
    res: {
      titre: "Resultado",
      refusTitre: "Todavía no podemos responderte",
      refusSuite:
        "Tus medidas se han tenido en cuenta. En cuanto una marca alcance nuestra exigencia de cobertura para esta prenda, la recomendación estará disponible.",
      indepartageables:
        "Dos marcas se ajustan igual de bien. Preferimos decírtelo antes que elegir de forma arbitraria.",
      coupeDeclaree: "Corte declarado",
      sourceMarque: "fuente de la marca",
      sourceSecondaire: "fuente secundaria",
      tracabilite: "Trazabilidad de esta consulta",
      referentiel: "Referencial",
      parametres: "Parámetros",
      horodatage: "Marca de tiempo",
    },
    verdict: { serre: "Demasiado apretado", ajuste: "Ceñido", conforme: "Buen ajuste", ample: "Holgado" },
    confiance: { mot: "Confianza", 1: "muy baja", 2: "baja", 3: "media", 4: "alta", 5: "muy alta" },
    repere: {
      mot: "Referencia",
      grille: "Por qué una marca publica una sola tabla para toda su gama",
      mesurer: "Medirse bien: cinco reglas que cambian el resultado",
      nonDit: "Lo que una tabla de tallas no dice, y por qué lo escribimos",
    },
  },

  /* ---------------- ITALIANO (protocoles à faire relire par un natif) ---------------- */
  it: {
    app: {
      nom: "Sillage",
      eyebrow: "Taglie secondo la morfologia",
      tagline: "Il modello giusto per la tua pratica. La taglia giusta per il tuo corpo.",
      dataNote: "Tabelle taglie ufficiali dei produttori, raccolte e verificate, mai inventate.",
      langue: "Lingua",
    },
    steps: {
      progress: "Avanzamento",
      s1: "Selezione",
      s2: "Uso",
      s3: "Misure",
      s4: "Risultato",
      etape: "Passo",
    },
    buttons: {
      next: "Continua",
      back: "Indietro",
      result: "Vedi il risultato",
      restart: "Nuova ricerca",
      pieces: "Vedi i capi",
    },
    sel: {
      titre: "La tua pratica",
      sous: "Scegli la famiglia, la disciplina e poi il capo. Chiediamo solo le misure utili a quel capo.",
      famille: "Famiglia",
      discipline: "Disciplina",
      piece: "Capo",
    },
    usage: {
      titre: "Il tuo utilizzo",
      sous: "Poche domande brevi. Orientano la vestibilità cercata.",
      geneTitre: "Con un materiale precedente, hai sentito fastidio?",
      geneMulti: "Seleziona tutti i fastidi provati. Ognuno restringe la tolleranza solo in quella zona.",
      jamais: "Non ho mai indossato questo tipo di capo",
      oui: "Sì, in un punto preciso",
      ou: "Dove?",
      choisirZone: "Scegli una zona",
      tropSerre: "Troppo stretto",
      tropAmple: "Troppo largo",
    },
    mes: {
      titre: "Le tue misure",
      sous: "Basta un metro da sarto. Le zone determinanti per questo capo si misurano a mano: è lì che la stima automatica è meno affidabile.",
      determinant: "Determinante",
      facultatif: "Facoltativo",
      sansMesure: "Senza questa misura il consiglio resta possibile, ma meno preciso in questa zona.",
      manque: "Manca una o più misure determinanti per questo capo.",
    },
    zones: {
      c: {
        label: "Circonferenza torace",
        guide:
          "Metro orizzontale nel punto più ampio del torace, solo sopra la biancheria. Espira normalmente; metro aderente senza stringere.",
      },
      wa: {
        label: "Circonferenza vita",
        guide: "Alla vita naturale, tra costole e fianchi. Non trattenere la pancia; respira normalmente.",
      },
      hp: {
        label: "Circonferenza fianchi",
        guide:
          "Nel punto più ampio di fianchi e glutei, piedi uniti. Verifica allo specchio che il metro sia orizzontale.",
      },
      th: {
        label: "Circonferenza coscia",
        guide: "Nel punto più ampio della coscia, in piedi, gamba rilassata, peso su entrambi i piedi.",
      },
      h: { label: "Statura", guide: "Schiena al muro, senza scarpe, talloni uniti, sguardo dritto." },
      wt: { label: "Peso", guide: "Al mattino, senza abiti pesanti." },
      ij: { label: "Cavallo", guide: "Dal cavallo al pavimento, schiena al muro, senza scarpe." },
      bl: {
        label: "Lunghezza schiena",
        guide:
          "Dalla 7ª vertebra cervicale (base del collo di una t-shirt) fino alla cresta iliaca, all'altezza dell'osso dell'anca.",
      },
      nk: { label: "Circonferenza collo", guide: "Alla base del collo, metro orizzontale, senza stringere." },
      bc: {
        label: "Circonferenza bicipite",
        guide: "Nel punto più ampio del braccio, rilassato lungo il corpo.",
      },
      sh: {
        label: "Larghezza spalle",
        guide: "Da un acromion all'altro, passando per la parte alta della schiena, spalle rilassate.",
      },
      ws: {
        label: "Apertura braccia",
        guide: "Braccia tese in orizzontale, da un dito medio all'altro, schiena contro il muro.",
      },
      al: {
        label: "Lunghezza braccio",
        guide: "Dall'acromion alla piega del polso, braccio leggermente piegato, mano sul fianco.",
      },
      tl: {
        label: "Lunghezza busto",
        guide: "Dalla base del collo, sopra la spalla, fino al cavallo e ritorno lungo la schiena.",
      },
      ak: {
        label: "Circonferenza caviglia",
        guide: "Appena sopra il malleolo, piede appoggiato a terra, metro senza stringere.",
      },
      dh: {
        label: "Altezza dorsale",
        guide: "Dalla cresta iliaca alle costole fluttuanti, sul lato del tronco, in piedi.",
      },
      pv: {
        label: "Circonferenza bacino",
        guide: "All'altezza delle creste iliache, metro orizzontale, addome rilassato.",
      },
      il: {
        label: "Vita alle creste iliache",
        guide: "Metro posizionato esattamente sulle creste iliache, orizzontale, senza comprimere.",
      },
    },
    consent: {
      titre: "I tuoi dati",
      intro:
        "Per impostazione predefinita questa sessione è effimera: le tue misure restano in memoria per la durata della consultazione e non vengono conservate. Nessuna casella è pre-selezionata.",
      sessionL: "Usare le mie misure per questo consiglio",
      sessionD: "Necessario per ottenere un risultato ora.",
      profilL: "Conservare il mio profilo oltre la sessione",
      profilD: "Per ritrovare le tue misure in una prossima visita. Il rifiuto non incide sul risultato.",
      agregeL: "Contribuire, in forma aggregata e anonima, al miglioramento del servizio",
      agregeD: "Nessun collegamento possibile al tuo profilo.",
      marchandL: "Trasmettere la taglia consigliata al rivenditore partner",
      marchandD: "Solo la taglia, mai le tue misure.",
      droits:
        "Accesso, rettifica, cancellazione, portabilità e revoca del consenso sono disponibili in qualsiasi momento dall'interfaccia.",
    },
    res: {
      titre: "Risultato",
      refusTitre: "Non possiamo ancora risponderti",
      refusSuite:
        "Le tue misure sono state considerate. Appena un marchio raggiungerà la nostra soglia di copertura per questo capo, il consiglio sarà disponibile.",
      indepartageables:
        "Due marchi vanno ugualmente bene. Preferiamo dirtelo piuttosto che decidere arbitrariamente.",
      coupeDeclaree: "Vestibilità dichiarata",
      sourceMarque: "fonte del marchio",
      sourceSecondaire: "fonte secondaria",
      tracabilite: "Tracciabilità di questa consultazione",
      referentiel: "Referenziale",
      parametres: "Parametri",
      horodatage: "Data e ora",
    },
    verdict: { serre: "Troppo stretto", ajuste: "Aderente", conforme: "Vestibilità corretta", ample: "Largo" },
    confiance: { mot: "Affidabilità", 1: "molto bassa", 2: "bassa", 3: "media", 4: "alta", 5: "molto alta" },
    repere: {
      mot: "Riferimento",
      grille: "Perché un marchio pubblica una sola tabella per tutta la gamma",
      mesurer: "Misurarsi bene: cinque regole che cambiano il risultato",
      nonDit: "Ciò che una tabella taglie non dice, e perché lo scriviamo",
    },
  },

  /* ---------------- NORSK bokmål (protocoles à faire relire par un natif) ---------------- */
  no: {
    outil: {
      skip: "Gå til hovedinnholdet",
      recap: "Oppsummering",
      recapOuvrir: "Vis oppsummering",
      recapFermer: "Skjul oppsummering",
      recapVide: "Valgene dine vises her underveis.",
      recapFamille: "Familie",
      recapDiscipline: "Disiplin",
      recapPiece: "Plagg",
      recapUsage: "Bruk",
      recapGene: "Meldt ubehag",
      recapAucuneGene: "Har aldri brukt denne typen plagg",
      recapMesures: "Avgjørende mål",
      recapMesuresEtat: "{n} av {total} fylt ut",
      etapeEnCours: "Steg {n} av 4: {nom}",
      mesuresDeterminantes: "Avgjørende for dette plagget",
      mesuresFacultatives: "Valgfrie, gir bedre presisjon",
      commentMesurer: "Slik måler du",
    },
    app: {
      nom: "Sillage",
      eyebrow: "Størrelse etter kroppsform",
      tagline: "Riktig modell for din aktivitet. Riktig størrelse for kroppen din.",
      dataNote:
        "Offisielle størrelsestabeller fra produsentene, innsamlet og verifisert, aldri oppdiktet.",
      langue: "Språk",
    },
    steps: {
      progress: "Fremdrift",
      s1: "Valg",
      s2: "Bruk",
      s3: "Mål",
      s4: "Resultat",
      etape: "Steg",
    },
    buttons: {
      next: "Fortsett",
      back: "Tilbake",
      result: "Se resultatet",
      restart: "Nytt søk",
      pieces: "Se plaggene",
    },
    sel: {
      titre: "Din aktivitet",
      sous: "Velg familie, aktivitet og deretter plagg. Vi spør bare om målene som betyr noe for det plagget.",
      famille: "Familie",
      discipline: "Aktivitet",
      piece: "Plagg",
    },
    usage: {
      titre: "Din bruk",
      sous: "Noen korte spørsmål. De styrer hvilken passform vi leter etter.",
      geneTitre: "Har du opplevd ubehag med tidligere utstyr?",
      geneMulti: "Kryss av for alt ubehag du kjente. Hvert punkt strammer toleransen kun i den sonen.",
      jamais: "Jeg har aldri brukt denne typen plagg",
      oui: "Ja, på ett bestemt sted",
      ou: "Hvor?",
      choisirZone: "Velg en sone",
      tropSerre: "For trangt",
      tropAmple: "For romslig",
    },
    mes: {
      titre: "Dine mål",
      sous: "Et mykt målebånd holder. De avgjørende sonene for dette plagget måles for hånd: det er der automatiske anslag er minst pålitelige.",
      determinant: "Avgjørende",
      facultatif: "Valgfritt",
      sansMesure: "Uten dette målet er anbefalingen fortsatt mulig, men mindre presis i denne sonen.",
      manque: "Ett eller flere avgjørende mål mangler for dette plagget.",
      /* Bokmål à faire relire par un locuteur natif (bloc scan). */
      scan: {
        offre: "Ingen målebånd — skann kroppen min",
        offreSous:
          "En veiledet mobilskanning fyller ut feltene på forhånd. Du har fortsatt kontrollen: hver verdi kan endres før du går videre.",
        optionnel: "Valgfritt tillegg",
        simulation:
          "Demo: skanningen er simulert, ingen leverandør kontaktes og ingen bilder sendes.",
        lancer: "Start skanningen",
        encours: "Skanning pågår",
        etape1: "Plasser telefonen i hoftehøyde, to meter unna deg.",
        etape2: "Stå vendt mot telefonen, med armene litt ut fra kroppen, og snu deg deretter sidelengs.",
        etape3: "Stå stille mens målepunktene leses av.",
        annuler: "Tilbake til manuell utfylling",
        refaire: "Kjør skanningen på nytt",
        termine: "Feltene er fylt ut fra skanningen",
        avertissement:
          "Kontroller og juster ved behov — mål fra en skanning varierer med kvaliteten på opptaket.",
        badge: "Fra skanningen",
        badgeConfirme: "Bekreftet manuelt",
        confirmer: "Jeg bekrefter dette målet",
        sensible:
          "Følsom sone: på spesielle kroppsfasonger (kraftige hofter med smal midje, for eksempel) er skannenøyaktigheten ennå ikke validert. Mål den for hånd, eller bekreft den uttrykkelig.",
        profilA:
          "Skanningen din viser en markert forskjell mellom midje og hofter. Det er nettopp der en skanning bommer: manuell måling er fortsatt fasit i de merkede sonene.",
        nonCouvertes: "Skanningen gir ikke disse målene; fyll dem inn for hånd:",
        bloque: "Bekreft eller rett opp de merkede følsomme sonene før du går videre.",
      },
    },
    zones: {
      c: {
        label: "Brystmål",
        guide:
          "Målebåndet vannrett rundt det bredeste punktet på brystet, kun over undertøy. Pust normalt ut; båndet tett inntil uten å stramme.",
      },
      wa: {
        label: "Livvidde",
        guide: "Ved naturlig midje, mellom ribbein og hofter. Ikke trekk inn magen; pust normalt.",
      },
      hp: {
        label: "Hoftemål",
        guide:
          "Rundt det bredeste punktet på hofter og sete, med samlede føtter. Sjekk i et speil at båndet er vannrett.",
      },
      th: {
        label: "Lårmål",
        guide: "Rundt det bredeste punktet på låret, stående, avslappet ben, vekten på begge føtter.",
      },
      h: { label: "Høyde", guide: "Ryggen mot veggen, uten sko, hælene samlet, blikket rett frem." },
      wt: { label: "Vekt", guide: "Om morgenen, uten tunge klær." },
      ij: { label: "Innvendig benlengde", guide: "Fra skrittet til gulvet, ryggen mot veggen, uten sko." },
      bl: {
        label: "Rygglengde",
        guide:
          "Fra 7. nakkevirvel (ved kanten av en t-skjortekrage) ned til hoftekammen, i høyde med hoftebeinet.",
      },
      nk: { label: "Halsmål", guide: "Ved halsroten, målebåndet vannrett, uten å stramme." },
      bc: {
        label: "Overarmsmål",
        guide: "Rundt det bredeste punktet på overarmen, avslappet langs kroppen.",
      },
      sh: {
        label: "Skulderbredde",
        guide: "Fra det ene akromion til det andre, over øvre del av ryggen, avslappede skuldre.",
      },
      ws: {
        label: "Armspenn",
        guide: "Armene rett ut vannrett, fra langfingertupp til langfingertupp, ryggen mot veggen.",
      },
      al: {
        label: "Armlengde",
        guide: "Fra akromion til håndleddsfolden, armen lett bøyd, hånden på hoften.",
      },
      tl: {
        label: "Overkroppslengde",
        guide: "Fra halsroten, over skulderen, ned til skrittet og opp igjen langs ryggen.",
      },
      ak: { label: "Ankelmål", guide: "Rett over ankelknoken, foten flatt i gulvet, båndet uten stramming." },
      dh: {
        label: "Rygghøyde",
        guide: "Fra hoftekammen til de nederste ribbeina, langs siden av overkroppen, stående.",
      },
      pv: { label: "Bekkenmål", guide: "I høyde med hoftekammene, båndet vannrett, avslappet mage." },
      il: {
        label: "Livvidde ved hoftekammene",
        guide: "Båndet plassert nøyaktig på hoftekammene, vannrett, uten å klemme.",
      },
    },
    consent: {
      titre: "Dine data",
      intro:
        "Som standard er denne økten flyktig: målene dine ligger i minnet så lenge besøket varer og lagres ikke. Ingen bokser er forhåndsavkrysset.",
      sessionL: "Bruke målene mine til denne anbefalingen",
      sessionD: "Nødvendig for å få et resultat nå.",
      profilL: "Beholde profilen min etter økten",
      profilD: "For å finne igjen målene dine ved neste besøk. Å si nei påvirker ikke resultatet.",
      agregeL: "Bidra, i aggregert og anonym form, til å forbedre tjenesten",
      agregeD: "Ingen kobling tilbake til profilen din.",
      marchandL: "Sende anbefalt størrelse til samarbeidsbutikken",
      marchandD: "Kun størrelsen, aldri målene dine.",
      droits:
        "Innsyn, retting, sletting, dataportabilitet og tilbaketrekking av samtykke er tilgjengelig når som helst fra grensesnittet.",
    },
    res: {
      titre: "Resultat",
      refusTitre: "Vi kan ikke svare deg ennå",
      refusSuite:
        "Målene dine er tatt med i beregningen. Så snart et merke oppfyller dekningskravet vårt for dette plagget, blir anbefalingen tilgjengelig.",
      indepartageables:
        "To merker passer like godt. Vi sier det heller enn å velge tilfeldig.",
      coupeDeclaree: "Oppgitt passform",
      noteEnFrancais: "kildetekst på fransk, oversettelse ikke klar",
      sourceMarque: "kilde fra merket",
      sourceSecondaire: "sekundær kilde",
      millesime: "Størrelsestabell {annee}",
      just: {
        pireSerre:
          "Denne størrelsen begrenser målene dine minst; {zone} overstiger det oppgitte området, så passformen blir stram der.",
        pireAmple:
          "Denne størrelsen begrenser målene dine minst; {zone} ligger under det oppgitte området, så forvent litt plass der.",
        pireAjuste:
          "Denne størrelsen begrenser målene dine minst; {zone} ligger øverst i området, så passformen blir kroppsnær der.",
        aucuneTension:
          "Alle de avgjørende målene dine ligger innenfor områdene som er oppgitt for denne størrelsen, uten soner under spenn.",
        couvertureSingulier:
          "{evaluees} av {total} avgjørende soner kunne sammenlignes; sikkerheten tar hensyn til det.",
        couverturePluriel:
          "{evaluees} av {total} avgjørende soner kunne sammenlignes; sikkerheten tar hensyn til det.",
        aisance:
          "Mellomlaget du oppga er tatt med i sammenligningen: volumet som trengs for å få plass til det er reservert.",
        couchesInconnues:
          "Du oppga ikke hva du skal ha under, så ingen ekstra plass er reservert. Legger du til en fleece, kan størrelsen over bli nødvendig.",
        scan:
          "Noen av målene dine kommer fra en smarttelefonskanning og er ikke bekreftet på nytt med målebånd: sikkerheten tar hensyn til det.",
        provenanceFaible:
          "Noen av merkeverdiene som brukes her er oppgitt av merket og ikke verifisert av oss.",
        coupeElasticite: "Oppgitt passform: {coupe}, elastisitet {elasticite}.",
        coupe: "Merknad fra merket: {coupe}",
      },
      refus: {
        aucunePiece: "Ingen plagg ble valgt for denne konsultasjonen.",
        profilInconnu:
          "Passformlogikken for dette plagget er ennå ikke verifisert: vi kan ikke anbefale en størrelse med nok sikkerhet. Inntil toleranseprofilen er fastsatt, sier vi heller ingenting.",
        aucuneMesure:
          "Ingen avgjørende mål ble oppgitt for dette plagget. Vi anbefaler heller ingenting enn å gjette.",
        aucuneMarque:
          "Vi har ennå ikke verifiserte merkemål som dekker de avgjørende sonene for dette plagget. Vi anbefaler heller ingenting enn å foreslå en størrelse vi ikke kan begrunne.",
        aucuneComparaison:
          "Målene dine kan ikke sammenlignes med noen tilgjengelig størrelsestabell for dette plagget. Vi sier det heller enn å velge tilfeldig.",
      },
      nonEval: {
        compact: "Ikke vurdert — for lite data for: {zones}",
        reste: "+{n}",
        voir: "Vis detaljer",
        masquer: "Skjul detaljer",
        vetement_fini:
          "{zone}: merket oppgir her et mål på det ferdige plagget, som ikke kan sammenlignes med et kroppsmål.",
        donnee_marque_absente: "{zone}: merket oppgir ikke dette målet for denne størrelsen.",
        mesure_absente: "{zone}: dette målet ble ikke oppgitt.",
      },
      tracabilite: "Sporbarhet for denne konsultasjonen",
      referentiel: "Datagrunnlag",
      parametres: "Parametere",
      horodatage: "Tidsstempel",
    },
    vente: {
      titre: "Hvor du finner denne modellen",
      triPrix:
        "Forhandlere sortert etter stigende pris. Veiledende priser samlet inn manuelt, ikke oppdatert i sanntid.",
      meilleurPrix: "Beste pris",
      lienAffilie: "Affiliatelenke",
      lienCommercial: "Kommersiell lenke",
      lienNeutre: "Ubetalt lenke",
      enStock: "på lager ved innsamling",
      stockLimite: "begrenset lager ved innsamling",
      stockInconnu: "tilgjengelighet ikke verifisert",
      prixInconnu: "pris ikke innsamlet",
      transparence:
        "Noen av lenkene over er betalte: kjøper du etter et klikk, kan SILLAGE motta provisjon. Det endrer verken prisen du betaler eller størrelsesanbefalingen, som kun beregnes ut fra målene dine.",
      prixReleve:
        "Priser og tilgjengelighet samlet inn {date}: kontroller forhandlerens nettsted før kjøp.",
      aucun:
        "Ingen forhandler er registrert for denne modellen ennå. Vi viser heller ingenting enn å sende deg til en omtrentlig lenke.",
      mock: "EKSEMPEL — IKKE EKTE DATA: disse forhandlerne, prisene og lenkene er fiktive og lagt inn for hånd for å illustrere skjermbildet. Ingen butikkdata er koblet til.",
    },
    verdict: {
      serre: "For trang",
      ajuste: "Tettsittende",
      conforme: "God passform",
      ample: "Romslig",
      insuffisant: "Utilstrekkelige data",
    },
    confiance: { mot: "Sikkerhet", 1: "svært lav", 2: "lav", 3: "middels", 4: "høy", 5: "svært høy" },
    repere: {
      mot: "Bakgrunn",
      grille: "Hvorfor et merke publiserer én enkelt tabell for hele serien",
      mesurer: "Å måle seg riktig: fem regler som endrer resultatet",
      nonDit: "Det en størrelsestabell ikke sier, og hvorfor vi skriver det",
    },
  },
} as const satisfies Partial<Record<Lang, Dict>>;

/* =========================================================
   Complément : profil, disciplines, alertes d'honnêteté,
   résultats et retour d'expérience. Fusionné dans STR ci-dessous.
   ES / IT / NO : traductions non relues par un natif.
   ========================================================= */
const EXTRA: Partial<Record<Lang, Dict>> = {
  fr: {
    steps2: { profile: "Votre profil", measures: "Vos mesures", results: "Vos tailles" },
    gender: { title: "Grilles à utiliser", m: "Grilles homme", f: "Grilles femme" },
    disc: {
      title: "Discipline",
      surf: "Surf", eaulibre: "Triathlon / eau libre", plongee: "Plongée / apnée",
      ski: "Ski et snowboard", harnais: "Harnais windsurf / kite",
      soon: "Bientôt", shoesRun: "Chaussures de course", shoesSki: "Chaussures de ski",
    },
    buttons2: {
      toMeasures: "Continuer vers mes mesures", compute: "Calculer mes tailles",
      edit: "Modifier mes mesures", how: "Comment mesurer",
      hide: "Masquer le protocole", more: "En savoir plus", optional: "facultatif",
    },
    issue: {
      title: "Où rencontrez-vous le plus souvent des difficultés d'ajustement ?",
      none: "Pas de difficulté particulière", thighs: "Cuisses et fessiers",
      chest: "Épaules et poitrine", length: "Longueurs (torse, jambes)",
    },
    anchor: {
      title: "Si vous possédez déjà une combinaison à votre taille, comment la ressentez-vous ?",
      none: "Je n'en possède pas / ne pas utiliser", fit: "Bien ajustée",
      tight: "Trop serrée", loose: "Trop ample, entrées d'eau",
      why: "Cette information affine votre profil de mesure.",
    },
    results: {
      title: "Recommandations par marque", bottom: "Pantalon", top: "Veste",
      ratioHW: "Ratio hanches / taille", ratioTH: "Ratio cuisse / hanches",
      perZone: "Détail par zone",
    },
    warn: {
      noHips: "Cette marque ne fournit pas assez d'informations sur les hanches : notre conseil est plus incertain ici.",
      frontier: "Vous êtes entre deux tailles chez cette marque. Si un essayage est possible, il est conseillé.",
      empty: "Nous n'avons pas encore de données vérifiées pour cette catégorie.",
      dimMissing: "non publiée par cette marque",
      biased: "Cette marque taille juste au bassin : en cas d'hésitation, nous avons retenu la taille la plus sûre pour vous.",
      splitSizes: "Deux tailles différentes entre veste et pantalon sont un résultat normal, pas une anomalie.",
    },
    feedback: {
      title: "Ça vous va ?", fit: "Parfait", tight: "Trop serré", loose: "Trop grand",
      thanks: "Merci, votre retour améliore les conseils pour toutes les morphologies.",
    },
  },
  en: {
    steps2: { profile: "Your profile", measures: "Your measurements", results: "Your sizes" },
    gender: { title: "Charts to use", m: "Men's charts", f: "Women's charts" },
    disc: {
      title: "Discipline",
      surf: "Surf", eaulibre: "Triathlon / open water", plongee: "Diving / freediving",
      ski: "Ski & snowboard", harnais: "Windsurf / kite harness",
      soon: "Coming soon", shoesRun: "Running shoes", shoesSki: "Ski boots",
    },
    buttons2: {
      toMeasures: "Continue to my measurements", compute: "Find my sizes",
      edit: "Edit my measurements", how: "How to measure",
      hide: "Hide instructions", more: "Learn more", optional: "optional",
    },
    issue: {
      title: "Where do you most often have fit problems?",
      none: "No particular difficulty", thighs: "Thighs and seat",
      chest: "Shoulders and chest", length: "Lengths (torso, legs)",
    },
    anchor: {
      title: "If you already own a wetsuit in your size, how does it feel?",
      none: "I don't own one / skip", fit: "Fits well",
      tight: "Too tight", loose: "Too loose, water flushing",
      why: "This refines your measurement profile.",
    },
    results: {
      title: "Recommendations by brand", bottom: "Pants", top: "Jacket",
      ratioHW: "Hip-to-waist ratio", ratioTH: "Thigh-to-hip ratio",
      perZone: "Detail by zone",
    },
    warn: {
      noHips: "This brand doesn't publish enough hip information: our advice is less certain here.",
      frontier: "You're between two sizes with this brand. If you can try it on, we recommend it.",
      empty: "We don't have verified data for this category yet.",
      dimMissing: "not published by this brand",
      biased: "This brand runs close at the hips: when in doubt, we picked the safer size for you.",
      splitSizes: "Different sizes for jacket and pants is a normal result, not an anomaly.",
    },
    feedback: {
      title: "How does it fit?", fit: "Perfect", tight: "Too tight", loose: "Too large",
      thanks: "Thanks — your feedback improves advice for every body type.",
    },
  },
  es: {
    steps2: { profile: "Tu perfil", measures: "Tus medidas", results: "Tus tallas" },
    gender: { title: "Tablas a utilizar", m: "Tablas de hombre", f: "Tablas de mujer" },
    disc: {
      title: "Disciplina",
      surf: "Surf", eaulibre: "Triatlón / aguas abiertas", plongee: "Buceo / apnea",
      ski: "Esquí y snowboard", harnais: "Arnés de windsurf / kite",
      soon: "Próximamente", shoesRun: "Zapatillas de running", shoesSki: "Botas de esquí",
    },
    buttons2: {
      toMeasures: "Continuar a mis medidas", compute: "Calcular mis tallas",
      edit: "Modificar mis medidas", how: "Cómo medir",
      hide: "Ocultar instrucciones", more: "Saber más", optional: "opcional",
    },
    issue: {
      title: "¿Dónde sueles tener más problemas de ajuste?",
      none: "Sin dificultad particular", thighs: "Muslos y glúteos",
      chest: "Hombros y pecho", length: "Longitudes (torso, piernas)",
    },
    anchor: {
      title: "Si ya tienes un neopreno de tu talla, ¿cómo lo sientes?",
      none: "No tengo / omitir", fit: "Bien ajustado",
      tight: "Demasiado apretado", loose: "Demasiado holgado, entra agua",
      why: "Esta información afina tu perfil de medidas.",
    },
    results: {
      title: "Recomendaciones por marca", bottom: "Pantalón", top: "Chaqueta",
      ratioHW: "Ratio cadera / cintura", ratioTH: "Ratio muslo / cadera",
      perZone: "Detalle por zona",
    },
    warn: {
      noHips: "Esta marca no publica suficiente información de cadera: nuestro consejo es menos seguro aquí.",
      frontier: "Estás entre dos tallas en esta marca. Si puedes probártelo, te lo recomendamos.",
      empty: "Aún no tenemos datos verificados para esta categoría.",
      dimMissing: "no publicada por esta marca",
      biased: "Esta marca ajusta en la cadera: ante la duda, hemos elegido la talla más segura para ti.",
      splitSizes: "Tallas distintas de chaqueta y pantalón es un resultado normal, no una anomalía.",
    },
    feedback: {
      title: "¿Cómo te queda?", fit: "Perfecto", tight: "Demasiado apretado", loose: "Demasiado grande",
      thanks: "Gracias: tu opinión mejora los consejos para todas las morfologías.",
    },
  },
  it: {
    steps2: { profile: "Il tuo profilo", measures: "Le tue misure", results: "Le tue taglie" },
    gender: { title: "Tabelle da usare", m: "Tabelle uomo", f: "Tabelle donna" },
    disc: {
      title: "Disciplina",
      surf: "Surf", eaulibre: "Triathlon / acque libere", plongee: "Immersione / apnea",
      ski: "Sci e snowboard", harnais: "Trapezio windsurf / kite",
      soon: "Prossimamente", shoesRun: "Scarpe da running", shoesSki: "Scarponi da sci",
    },
    buttons2: {
      toMeasures: "Continua alle mie misure", compute: "Calcola le mie taglie",
      edit: "Modifica le mie misure", how: "Come misurare",
      hide: "Nascondi istruzioni", more: "Scopri di più", optional: "facoltativo",
    },
    issue: {
      title: "Dove hai più spesso problemi di vestibilità?",
      none: "Nessuna difficoltà particolare", thighs: "Cosce e glutei",
      chest: "Spalle e torace", length: "Lunghezze (busto, gambe)",
    },
    anchor: {
      title: "Se possiedi già una muta della tua taglia, come la senti?",
      none: "Non ne ho / salta", fit: "Ben aderente",
      tight: "Troppo stretta", loose: "Troppo larga, entra acqua",
      why: "Questa informazione affina il tuo profilo di misure.",
    },
    results: {
      title: "Consigli per marca", bottom: "Pantaloni", top: "Giacca",
      ratioHW: "Rapporto fianchi / vita", ratioTH: "Rapporto coscia / fianchi",
      perZone: "Dettaglio per zona",
    },
    warn: {
      noHips: "Questo marchio non pubblica abbastanza dati sui fianchi: il nostro consiglio qui è meno certo.",
      frontier: "Sei tra due taglie con questo marchio. Se puoi provarla, te lo consigliamo.",
      empty: "Non abbiamo ancora dati verificati per questa categoria.",
      dimMissing: "non pubblicata da questo marchio",
      biased: "Questo marchio veste aderente sui fianchi: nel dubbio, abbiamo scelto la taglia più sicura per te.",
      splitSizes: "Taglie diverse tra giacca e pantaloni sono un risultato normale, non un'anomalia.",
    },
    feedback: {
      title: "Come ti sta?", fit: "Perfetta", tight: "Troppo stretta", loose: "Troppo grande",
      thanks: "Grazie: il tuo riscontro migliora i consigli per tutte le corporature.",
    },
  },
  no: {
    steps2: { profile: "Din profil", measures: "Dine mål", results: "Dine størrelser" },
    gender: { title: "Tabeller som skal brukes", m: "Herretabeller", f: "Dametabeller" },
    disc: {
      title: "Aktivitet",
      surf: "Surfing", eaulibre: "Triatlon / åpent vann", plongee: "Dykking / fridykking",
      ski: "Ski og snowboard", harnais: "Trapes til windsurf / kite",
      soon: "Kommer snart", shoesRun: "Løpesko", shoesSki: "Skistøvler",
    },
    buttons2: {
      toMeasures: "Fortsett til mine mål", compute: "Finn mine størrelser",
      edit: "Endre mine mål", how: "Slik måler du",
      hide: "Skjul veiledning", more: "Les mer", optional: "valgfritt",
    },
    issue: {
      title: "Hvor har du oftest problemer med passform?",
      none: "Ingen spesielle problemer", thighs: "Lår og sete",
      chest: "Skuldre og bryst", length: "Lengder (overkropp, ben)",
    },
    anchor: {
      title: "Hvis du allerede eier en våtdrakt i din størrelse, hvordan kjennes den?",
      none: "Jeg eier ingen / hopp over", fit: "Sitter godt",
      tight: "For trang", loose: "For romslig, vann slipper inn",
      why: "Denne informasjonen forbedrer måleprofilen din.",
    },
    results: {
      title: "Anbefalinger per merke", bottom: "Bukse", top: "Jakke",
      ratioHW: "Forhold hofte / liv", ratioTH: "Forhold lår / hofte",
      perZone: "Detaljer per sone",
    },
    warn: {
      noHips: "Dette merket publiserer ikke nok informasjon om hofter: rådet vårt er mer usikkert her.",
      frontier: "Du er mellom to størrelser hos dette merket: velg den mindre for en kroppsnær passform, den større for en ledigere passform — eller prøv plagget hvis du kan.",
      empty: "Vi har ennå ikke verifiserte data for denne kategorien.",
      dimMissing: "ikke publisert av dette merket",
      biased: "Dette merket sitter tett over hoftene: ved tvil har vi valgt den tryggeste størrelsen for deg.",
      splitSizes: "Ulike størrelser på jakke og bukse er et normalt resultat, ikke en feil.",
    },
    feedback: {
      title: "Hvordan passer det?", fit: "Perfekt", tight: "For trang", loose: "For stor",
      thanks: "Takk — tilbakemeldingen din forbedrer rådene for alle kroppsfasonger.",
    },
  },
};

// Fusion non destructive : les clés déjà présentes dans STR gagnent.
const CIBLE = STR as unknown as Record<Lang, Dict>;

// Langues additionnelles : dictionnaires complets fournis dans ./langs.
for (const [lang, dico] of Object.entries(CORE_LANGS) as [Lang, Dict][]) {
  CIBLE[lang] = { ...(CIBLE[lang] ?? {}), ...dico };
}

for (const lang of LANGS) {
  const cible = CIBLE[lang] ?? (CIBLE[lang] = {});
  for (const [groupe, valeurs] of Object.entries(EXTRA[lang] ?? {})) {
    const existant = cible[groupe];
    cible[groupe] =
      existant && typeof existant === "object"
        ? { ...(valeurs as Dict), ...(existant as Dict) }
        : valeurs;
  }
}

/* ------------------------------------------------------------------
   Complément : écrans techniques (erreur, 404) et panneau de
   diagnostic de traduction. FR / EN / NO relus ; les autres langues
   retombent sur l'anglais puis le français, ce qui est signalé par
   le journal de diagnostic.
   ------------------------------------------------------------------ */

const SUPPLEMENT: Partial<Record<Lang, Dict>> = {
  fr: {
    erreur: {
      titre: "Cette page n'a pas pu se charger",
      texte: "Un incident est survenu de notre côté. Vous pouvez réessayer ou revenir à l'accueil.",
      reessayer: "Réessayer",
      accueil: "Revenir à l'accueil",
      introuvableTitre: "Page introuvable",
      introuvableTexte: "Cette page n'existe pas ou a été déplacée.",
    },
    diag: {
      titre: "Diagnostic des traductions",
      langueActive: "Langue active",
      aucune: "Aucune clé manquante dans cette langue sur les écrans déjà affichés.",
      aucuneToutes: "Aucune clé manquante observée sur les écrans déjà affichés.",
      langueSeule: "Langue active seule",
      toutesLangues: "Toutes les langues",
      fermer: "Fermer",
      vider: "Vider",
      ouvrir: "ouvrir le diagnostic des traductions",

      absente: "absente partout",
      repliFr: "repli fr",
    },
    champ: { vide: "—" },
  },
  en: {
    erreur: {
      titre: "This page didn't load",
      texte: "Something went wrong on our end. You can try again or go back home.",
      reessayer: "Try again",
      accueil: "Go home",
      introuvableTitre: "Page not found",
      introuvableTexte: "This page doesn't exist or has been moved.",
    },
    diag: {
      titre: "Translation diagnostics",
      langueActive: "Active language",
      aucune: "No missing key in this language on the screens shown so far.",
      aucuneToutes: "No missing key observed on the screens shown so far.",
      langueSeule: "Active language only",
      toutesLangues: "All languages",
      fermer: "Close",
      vider: "Clear",
      ouvrir: "open translation diagnostics",
      absente: "missing everywhere",
      repliFr: "French fallback",
    },
    champ: { vide: "—" },
  },
  no: {
    erreur: {
      titre: "Denne siden kunne ikke lastes",
      texte: "Noe gikk galt hos oss. Du kan prøve på nytt eller gå tilbake til forsiden.",
      reessayer: "Prøv igjen",
      accueil: "Til forsiden",
      introuvableTitre: "Fant ikke siden",
      introuvableTexte: "Denne siden finnes ikke, eller den er flyttet.",
    },
    diag: {
      titre: "Diagnostikk for oversettelser",
      langueActive: "Aktivt språk",
      aucune: "Ingen manglende nøkler på dette språket blant skjermene som er vist.",
      aucuneToutes: "Ingen manglende nøkler observert blant skjermene som er vist.",
      langueSeule: "Bare aktivt språk",
      toutesLangues: "Alle språk",
      fermer: "Lukk",
      vider: "Tøm",
      ouvrir: "åpne oversettelsesdiagnostikk",
      absente: "mangler overalt",
      repliFr: "fransk reserve",
    },
    champ: { vide: "—" },
  },
};

for (const lang of LANGS) {
  const cible = CIBLE[lang] ?? (CIBLE[lang] = {});
  // Repli explicite : anglais d'abord, puis français par le mécanisme de makeT.
  const source = (SUPPLEMENT[lang] ?? SUPPLEMENT.en) as Dict;
  for (const [groupe, valeurs] of Object.entries(source)) {
    const existant = cible[groupe];
    cible[groupe] =
      existant && typeof existant === "object"
        ? { ...(valeurs as Dict), ...(existant as Dict) }
        : valeurs;
  }
}

/* ------------------------------------------------------------------
   Langue partagée entre les pages (parcours, bibliothèque, repères).
   Le choix est conservé localement pour ne pas être perdu d'une page
   à l'autre ; aucune donnée personnelle n'est stockée ici.
   ------------------------------------------------------------------ */

const CLE_LANGUE = "sillage.langue";

/**
 * Langue de l'interface. Ordre de priorité :
 * 1. paramètre ?lang= de l'URL (cible des liens hreflang) ;
 * 2. choix explicite déjà mémorisé ;
 * 3. locale du navigateur (norvégien → bokmål), anglais par défaut.
 * Le rendu serveur part de l'anglais pour ne jamais afficher un
 * français transitoire à un visiteur anglophone ou norvégien.
 */
export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let initial: Lang | null = null;
    try {
      const demande = new URLSearchParams(window.location.search).get("lang");
      const normalise = demande === "nb" || demande === "nn" ? "no" : demande;
      if (normalise && (LANGS as string[]).includes(normalise)) initial = normalise as Lang;
      if (!initial) {
        const stocke = window.localStorage.getItem(CLE_LANGUE);
        if (stocke && (LANGS as string[]).includes(stocke)) initial = stocke as Lang;
      }
    } catch {
      initial = null;
    }
    setLangState(initial ?? detectLang());
  }, []);

  // L'attribut lang du document suit la langue choisie (lecteurs d'écran,
  // césure, moteurs de recherche). Le norvégien est annoncé « nb ».
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = baliseLangue(lang);
  }, [lang]);


  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(CLE_LANGUE, l);
    } catch {
      /* stockage indisponible : le choix reste valable pour la session */
    }
  };

  return [lang, setLang];
}

/** Introspection interne (audit i18n en développement) : dictionnaires fusionnés. */
export function __dictionnaires(): Record<string, unknown> {
  return CIBLE as unknown as Record<string, unknown>;
}
