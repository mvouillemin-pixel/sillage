/**
 * SILLAGE — Gênes ressenties sur un matériel précédent.
 *
 * L'étape est multi-sélection : un utilisateur peut avoir ressenti plusieurs
 * gênes, sur plusieurs zones. Chaque motif coché est stocké comme une entrée
 * structurée (motif + zones concernées + sens), exploitable directement par le
 * moteur de scoring, qui resserre la tolérance des seules zones déclarées.
 */

import type { Lang } from "./i18n";
import { signalerManque } from "./i18n-diagnostic";
import type { GeneMotifId, GeneZoneDeclaree, SensGene, ZoneId } from "./types";
import type { SousVoletDef } from "./config";

export interface MotifGeneDef {
  id: GeneMotifId;
  /** Zones anatomiques dont la tolérance est resserrée par ce motif. */
  zones: ZoneId[];
  /** Sens de la gêne : par défaut une gêne déclarée est une contrainte. */
  sens: SensGene;
  /** Option exclusive : sa sélection efface toutes les autres. */
  exclusif?: boolean;
}

export const MOTIFS_GENE: MotifGeneDef[] = [
  { id: "taille", zones: ["taille", "taille_iliaque"], sens: "trop_serre" },
  { id: "hanches", zones: ["hanches", "bassin", "cuisse"], sens: "trop_serre" },
  { id: "entrejambe", zones: ["entrejambe"], sens: "trop_serre" },
  { id: "torse", zones: ["poitrine", "longueur_torse"], sens: "trop_serre" },
  { id: "epaules", zones: ["epaules", "biceps", "longueur_dos"], sens: "trop_serre" },
  { id: "mobilite", zones: ["cuisse", "biceps", "longueur_bras"], sens: "trop_ample" },
  { id: "aucune", zones: [], sens: "trop_serre", exclusif: true },
];

/**
 * Motifs pertinents pour la pièce sélectionnée : un motif n'est proposé que si
 * au moins une de ses zones est évaluée par le sous-volet. Les zones retenues
 * sont réduites à celles réellement comparables, pour ne jamais resserrer une
 * tolérance sur une dimension que nous n'évaluons pas.
 */
export function motifsPourSousVolet(sv: SousVoletDef | undefined): MotifGeneDef[] {
  if (!sv) return MOTIFS_GENE;
  const evaluees = new Set<ZoneId>([...sv.zonesCritiques, ...sv.zonesSecondaires]);
  const retenus: MotifGeneDef[] = [];
  for (const m of MOTIFS_GENE) {
    if (m.exclusif) {
      retenus.push(m);
      continue;
    }
    const zones = m.zones.filter((z) => evaluees.has(z));
    if (zones.length > 0) retenus.push({ ...m, zones });
  }
  return retenus;
}

/** Traduit une liste de motifs cochés en zones déclarées, sans doublon. */
export function zonesDeclarees(
  motifs: GeneMotifId[],
  disponibles: MotifGeneDef[],
): GeneZoneDeclaree[] {
  if (motifs.includes("aucune")) return [];
  const parZone = new Map<ZoneId, GeneZoneDeclaree>();
  for (const id of motifs) {
    const def = disponibles.find((m) => m.id === id);
    if (!def) continue;
    for (const zone of def.zones) {
      const existant = parZone.get(zone);
      if (!existant) parZone.set(zone, { zone, sens: def.sens, motif: id });
    }
  }
  return [...parZone.values()];
}

/* ------------------------------------------------------------- libellés */

type Libelles = Record<GeneMotifId, string>;

const FR: Libelles = {
  taille: "Gêne à la taille",
  hanches: "Gêne aux hanches / haut des cuisses",
  entrejambe: "Gêne à l'entrejambe",
  torse: "Compression excessive au niveau du torse / poitrine",
  epaules: "Frottement au niveau des aisselles / épaules",
  mobilite: "Manque de liberté de mouvement (genoux, coudes)",
  aucune: "Aucune gêne ressentie",
};

const LIBELLES: Partial<Record<Lang, Libelles>> = {
  fr: FR,
  en: {
    taille: "Discomfort at the waist",
    hanches: "Discomfort at the hips / upper thighs",
    entrejambe: "Discomfort at the crotch",
    torse: "Excessive compression across the chest / torso",
    epaules: "Chafing at the armpits / shoulders",
    mobilite: "Restricted freedom of movement (knees, elbows)",
    aucune: "No discomfort felt",
  },
  es: {
    taille: "Molestia en la cintura",
    hanches: "Molestia en las caderas / parte alta de los muslos",
    entrejambe: "Molestia en la entrepierna",
    torse: "Compresión excesiva en el torso / pecho",
    epaules: "Rozaduras en las axilas / hombros",
    mobilite: "Falta de libertad de movimiento (rodillas, codos)",
    aucune: "Ninguna molestia",
  },
  it: {
    taille: "Fastidio in vita",
    hanches: "Fastidio ai fianchi / parte alta delle cosce",
    entrejambe: "Fastidio all'inguine",
    torse: "Compressione eccessiva su torace / petto",
    epaules: "Sfregamento su ascelle / spalle",
    mobilite: "Poca libertà di movimento (ginocchia, gomiti)",
    aucune: "Nessun fastidio",
  },
  no: {
    taille: "Ubehag i livet",
    hanches: "Ubehag i hoftene / øvre lår",
    entrejambe: "Ubehag i skrittet",
    torse: "For sterk kompresjon over brystet / overkroppen",
    epaules: "Gnag i armhulene / skuldrene",
    mobilite: "Manglende bevegelsesfrihet (knær, albuer)",
    aucune: "Ingen ubehag",
  },
  de: {
    taille: "Beschwerden an der Taille",
    hanches: "Beschwerden an Hüfte / oberen Oberschenkeln",
    entrejambe: "Beschwerden im Schritt",
    torse: "Zu starke Kompression an Brust / Oberkörper",
    epaules: "Scheuern an Achseln / Schultern",
    mobilite: "Eingeschränkte Bewegungsfreiheit (Knie, Ellbogen)",
    aucune: "Keine Beschwerden",
  },
  pt: {
    taille: "Desconforto na cintura",
    hanches: "Desconforto nas ancas / parte alta das coxas",
    entrejambe: "Desconforto na entreperna",
    torse: "Compressão excessiva no tronco / peito",
    epaules: "Atrito nas axilas / ombros",
    mobilite: "Falta de liberdade de movimento (joelhos, cotovelos)",
    aucune: "Nenhum desconforto",
  },
  nl: {
    taille: "Ongemak bij de taille",
    hanches: "Ongemak bij heupen / bovenbenen",
    entrejambe: "Ongemak in het kruis",
    torse: "Te sterke compressie op borst / torso",
    epaules: "Schuren bij oksels / schouders",
    mobilite: "Te weinig bewegingsvrijheid (knieën, ellebogen)",
    aucune: "Geen ongemak",
  },
  pl: {
    taille: "Dyskomfort w talii",
    hanches: "Dyskomfort w biodrach / górnej części ud",
    entrejambe: "Dyskomfort w kroku",
    torse: "Nadmierny ucisk na klatce piersiowej / tułowiu",
    epaules: "Otarcia pod pachami / na ramionach",
    mobilite: "Brak swobody ruchu (kolana, łokcie)",
    aucune: "Brak dyskomfortu",
  },
  sv: {
    taille: "Obehag i midjan",
    hanches: "Obehag vid höfter / övre lår",
    entrejambe: "Obehag i grenen",
    torse: "För hård kompression över bröst / överkropp",
    epaules: "Skav i armhålor / axlar",
    mobilite: "Bristande rörelsefrihet (knän, armbågar)",
    aucune: "Inget obehag",
  },
  da: {
    taille: "Ubehag i taljen",
    hanches: "Ubehag ved hofter / øvre lår",
    entrejambe: "Ubehag i skridtet",
    torse: "For kraftig kompression over bryst / overkrop",
    epaules: "Gnavning ved armhuler / skuldre",
    mobilite: "Manglende bevægelsesfrihed (knæ, albuer)",
    aucune: "Intet ubehag",
  },
  fi: {
    taille: "Epämukavuutta vyötäröllä",
    hanches: "Epämukavuutta lantiolla / reisien yläosassa",
    entrejambe: "Epämukavuutta haarassa",
    torse: "Liiallinen puristus rinnan / ylävartalon kohdalla",
    epaules: "Hankausta kainaloissa / hartioissa",
    mobilite: "Liikkumavara puuttuu (polvet, kyynärpäät)",
    aucune: "Ei epämukavuutta",
  },
  el: {
    taille: "Ενόχληση στη μέση",
    hanches: "Ενόχληση στους γοφούς / πάνω μηρούς",
    entrejambe: "Ενόχληση στον καβάλο",
    torse: "Υπερβολική πίεση στο στήθος / κορμό",
    epaules: "Τριβή στις μασχάλες / ώμους",
    mobilite: "Έλλειψη ελευθερίας κίνησης (γόνατα, αγκώνες)",
    aucune: "Καμία ενόχληση",
  },
  cs: {
    taille: "Nepohodlí v pase",
    hanches: "Nepohodlí v bocích / horní části stehen",
    entrejambe: "Nepohodlí v rozkroku",
    torse: "Nadměrný tlak na hrudi / trupu",
    epaules: "Odírání v podpaží / na ramenou",
    mobilite: "Omezená volnost pohybu (kolena, lokty)",
    aucune: "Žádné nepohodlí",
  },
  ro: {
    taille: "Disconfort în talie",
    hanches: "Disconfort la șolduri / partea superioară a coapselor",
    entrejambe: "Disconfort la nivelul bazinului",
    torse: "Compresie excesivă pe torace / piept",
    epaules: "Frecare la axile / umeri",
    mobilite: "Lipsă de libertate de mișcare (genunchi, coate)",
    aucune: "Niciun disconfort",
  },
  hu: {
    taille: "Kellemetlen érzés a deréknál",
    hanches: "Kellemetlen érzés a csípőnél / combtőnél",
    entrejambe: "Kellemetlen érzés a lépésnél",
    torse: "Túlzott szorítás a mellkason / felsőtesten",
    epaules: "Dörzsölés a hónaljnál / vállnál",
    mobilite: "Korlátozott mozgásszabadság (térd, könyök)",
    aucune: "Nem éreztem kellemetlenséget",
  },
  tr: {
    taille: "Belde rahatsızlık",
    hanches: "Kalça / üst bacaklarda rahatsızlık",
    entrejambe: "Ağ bölgesinde rahatsızlık",
    torse: "Göğüs / gövdede aşırı sıkma",
    epaules: "Koltuk altı / omuzlarda sürtünme",
    mobilite: "Hareket serbestliği eksikliği (dizler, dirsekler)",
    aucune: "Rahatsızlık hissetmedim",
  },
  ja: {
    taille: "ウエストの窮屈さ",
    hanches: "ヒップ・太もも上部の窮屈さ",
    entrejambe: "股下の窮屈さ",
    torse: "胸・胴まわりの過度な締めつけ",
    epaules: "脇・肩のこすれ",
    mobilite: "動きにくさ（膝・肘）",
    aucune: "違和感はなかった",
  },
  ko: {
    taille: "허리 부위 불편함",
    hanches: "엉덩이 / 허벅지 윗부분 불편함",
    entrejambe: "가랑이 부위 불편함",
    torse: "가슴 / 상체의 과도한 압박",
    epaules: "겨드랑이 / 어깨 쓸림",
    mobilite: "움직임 제약 (무릎, 팔꿈치)",
    aucune: "불편함 없음",
  },
  zh: {
    taille: "腰部不适",
    hanches: "臀部 / 大腿上部不适",
    entrejambe: "裆部不适",
    torse: "胸部 / 躯干压迫过强",
    epaules: "腋下 / 肩部摩擦",
    mobilite: "活动受限（膝盖、手肘）",
    aucune: "没有不适",
  },
};

export function libelleMotif(lang: Lang, id: GeneMotifId): string {
  const direct = LIBELLES[lang]?.[id];
  if (!direct) signalerManque("catalogue", `gene.motif.${id}`, lang, "repli_fr");
  return direct ?? FR[id] ?? id;
}
