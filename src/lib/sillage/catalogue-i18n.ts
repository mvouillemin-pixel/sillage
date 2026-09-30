import type { Lang } from "./i18n";
import { CATALOGUE_LANGS } from "./langs";
import { signalerManque } from "./i18n-diagnostic";
import type { DisciplineDef, QuestionUsage, SousVoletDef, VoletDef } from "./config";


/**
 * Traduction du catalogue : familles (volets), activités (disciplines),
 * pièces (sous-volets) et questions d'usage. Le français reste la source :
 * toute clé absente retombe sur le libellé déclaré en configuration.
 */

type Paire = { l: string; d?: string };
type Dict = Record<string, Paire>;

const EN: Dict = {
  A: { l: "Neoprene", d: "Wetsuits and pieces for water sports." },
  B: { l: "Ski and snowboard", d: "Mountain garments, layers and shells." },
  C: {
    l: "Watersports harnesses",
    d: "Waist harness, seat harness, trapeze.",
  },
  "C.fermeture": { l: "This family will open once our brand data covers back height in a verified way. We would rather recommend nothing than recommend on uncertain data." },
  A1: { l: "Surf and wave sports", d: "Waves, longboard, bodyboard." },
  A2: {
    l: "Open water and triathlon",
    d: "The swim stroke makes shoulder freedom the priority constraint.",
  },
  A3: {
    l: "Kitesurf, wingfoil and mixed practice",
    d: "Additional constraint on waist and hips from wearing a harness.",
  },
  A4: {
    l: "Diving",
    d: "Compression at depth makes torso fit and leg length decisive.",
  },
  B0: { l: "Ski and snowboard", d: "Mountain pieces." },
  "A1-integrale": { l: "Full suit", d: "Long arms and legs." },
  "A1-shorty": { l: "Shorty", d: "Short arms and legs." },
  "A1-top": { l: "Top", d: "Neoprene top only." },
  "A2-integrale": { l: "Swim wetsuit", d: "Full suit built for swimming." },
  "A3-integrale": { l: "Full suit", d: "Worn under a harness." },
  "A4-integrale": { l: "Dive wetsuit", d: "Wet full suit." },
  B1: { l: "Jacket", d: "Shell or insulated jacket." },
  B2: { l: "Trousers or bib", d: "The main failure zone of standard charts." },
  B3: { l: "Base or mid layer", d: "Technical underlayer." },
  B4: {
    l: "One-piece suit",
    d: "Jacket and trousers combined, added constraint on torso length.",
  },
  "q.couches": { l: "Do you plan to wear a mid layer underneath?" },
  "q.couches.fine": { l: "One thin layer" },
  "q.couches.intermediaire": { l: "A thin layer and a fleece" },
  "q.couches.epaisse": { l: "Several thick layers" },
  "q.couches.inconnu": { l: "I don't know yet" },
  "q.frequence": { l: "How often do you practise?" },
  "q.frequence.occasionnel": { l: "A few outings a year" },
  "q.frequence.regulier": { l: "Several times a month" },
  "q.frequence.intensif": { l: "Every week or more" },
  "q.temperature": { l: "Which water do you most often practise in?" },
  "q.temperature.froide": { l: "Cold, under 15 °C" },
  "q.temperature.temperee": { l: "Temperate, 15 to 20 °C" },
  "q.temperature.chaude": { l: "Warm, over 20 °C" },
  "q.preference": { l: "Which fit do you prefer?" },
  "q.preference.proche": { l: "Close to the body" },
  "q.preference.neutre": { l: "No strong preference" },
  "q.preference.aise": { l: "With some room" },
};

const ES: Dict = {
  A: { l: "Neopreno", d: "Trajes y piezas de deportes de agua." },
  B: { l: "Esquí y snowboard", d: "Prendas de montaña, capas y carcasas." },
  C: { l: "Arneses náuticos", d: "Cinturón, culotte, trapecio." },
  "C.fermeture": { l: "Esta familia se abrirá cuando nuestros datos de marca cubran la altura dorsal de forma verificada. Preferimos no recomendar nada antes que recomendar sobre un dato incierto." },
  A1: { l: "Surf y deportes de ola", d: "Ola, longboard, bodyboard." },
  A2: {
    l: "Aguas abiertas y triatlón",
    d: "El gesto de nado convierte la libertad de hombro en la restricción prioritaria.",
  },
  A3: {
    l: "Kitesurf, wingfoil y prácticas mixtas",
    d: "Restricción añadida en cintura y caderas por el uso del arnés.",
  },
  A4: {
    l: "Buceo",
    d: "La compresión en profundidad hace determinantes el ajuste del tronco y el largo de pierna.",
  },
  B0: { l: "Esquí y snowboard", d: "Piezas de montaña." },
  "A1-integrale": { l: "Traje integral", d: "Mangas y perneras largas." },
  "A1-shorty": { l: "Shorty", d: "Mangas y perneras cortas." },
  "A1-top": { l: "Top", d: "Parte superior de neopreno." },
  "A2-integrale": { l: "Traje de natación", d: "Integral orientado a la natación." },
  "A3-integrale": { l: "Traje integral", d: "Uso bajo arnés." },
  "A4-integrale": { l: "Traje de buceo", d: "Integral húmedo." },
  B1: { l: "Chaqueta", d: "Carcasa o chaqueta aislada." },
  B2: { l: "Pantalón o peto", d: "Zona de fallo principal de las tablas estándar." },
  B3: { l: "Primera capa o capa intermedia", d: "Capa técnica interior." },
  B4: {
    l: "Mono de una pieza",
    d: "Chaqueta y pantalón juntos, restricción añadida en el largo de torso.",
  },
  "q.couches": { l: "¿Piensa llevar una capa intermedia debajo?" },
  "q.couches.fine": { l: "Una capa fina" },
  "q.couches.intermediaire": { l: "Una capa fina y un forro polar" },
  "q.couches.epaisse": { l: "Varias capas gruesas" },
  "q.couches.inconnu": { l: "Aún no lo sé" },
  "q.frequence": { l: "¿Con qué frecuencia practica?" },
  "q.frequence.occasionnel": { l: "Algunas salidas al año" },
  "q.frequence.regulier": { l: "Varias veces al mes" },
  "q.frequence.intensif": { l: "Cada semana o más" },
  "q.temperature": { l: "¿En qué agua practica más a menudo?" },
  "q.temperature.froide": { l: "Fría, menos de 15 °C" },
  "q.temperature.temperee": { l: "Templada, de 15 a 20 °C" },
  "q.temperature.chaude": { l: "Cálida, más de 20 °C" },
  "q.preference": { l: "¿Qué ajuste prefiere?" },
  "q.preference.proche": { l: "Ceñido al cuerpo" },
  "q.preference.neutre": { l: "Sin preferencia marcada" },
  "q.preference.aise": { l: "Con holgura" },
};

const IT: Dict = {
  A: { l: "Neoprene", d: "Mute e capi per gli sport d'acqua." },
  B: { l: "Sci e snowboard", d: "Capi da montagna, strati e gusci." },
  C: { l: "Trapezi per sport nautici", d: "Cintura, culotte, trapezio." },
  "C.fermeture": { l: "Questa famiglia si aprirà quando i nostri dati di marca copriranno l'altezza dorsale in modo verificato. Preferiamo non raccomandare nulla piuttosto che raccomandare su un dato incerto." },
  A1: { l: "Surf e sport d'onda", d: "Onda, longboard, bodyboard." },
  A2: {
    l: "Acque libere e triathlon",
    d: "Il gesto della nuotata rende la libertà di spalla il vincolo prioritario.",
  },
  A3: {
    l: "Kitesurf, wingfoil e pratiche miste",
    d: "Vincolo aggiuntivo su vita e fianchi dovuto al trapezio.",
  },
  A4: {
    l: "Immersione",
    d: "La compressione in profondità rende determinanti la vestibilità del tronco e la lunghezza della gamba.",
  },
  B0: { l: "Sci e snowboard", d: "Capi da montagna." },
  "A1-integrale": { l: "Muta integrale", d: "Maniche e gambe lunghe." },
  "A1-shorty": { l: "Shorty", d: "Maniche e gambe corte." },
  "A1-top": { l: "Top", d: "Solo parte superiore in neoprene." },
  "A2-integrale": { l: "Muta da nuoto", d: "Integrale orientata al nuoto." },
  "A3-integrale": { l: "Muta integrale", d: "Uso sotto trapezio." },
  "A4-integrale": { l: "Muta da immersione", d: "Integrale umida." },
  B1: { l: "Giacca", d: "Guscio o giacca imbottita." },
  B2: { l: "Pantalone o salopette", d: "Zona di fallimento principale delle tabelle standard." },
  B3: { l: "Primo strato o strato intermedio", d: "Sottostrato tecnico." },
  B4: {
    l: "Tuta intera",
    d: "Giacca e pantalone insieme, vincolo aggiuntivo sulla lunghezza del busto.",
  },
  "q.couches": { l: "Prevede di indossare uno strato intermedio sotto?" },
  "q.couches.fine": { l: "Uno strato sottile" },
  "q.couches.intermediaire": { l: "Uno strato sottile e un pile" },
  "q.couches.epaisse": { l: "Più strati spessi" },
  "q.couches.inconnu": { l: "Non lo so ancora" },
  "q.frequence": { l: "Con quale frequenza pratica?" },
  "q.frequence.occasionnel": { l: "Qualche uscita all'anno" },
  "q.frequence.regulier": { l: "Più volte al mese" },
  "q.frequence.intensif": { l: "Ogni settimana o più" },
  "q.temperature": { l: "In quale acqua pratica più spesso?" },
  "q.temperature.froide": { l: "Fredda, meno di 15 °C" },
  "q.temperature.temperee": { l: "Temperata, da 15 a 20 °C" },
  "q.temperature.chaude": { l: "Calda, oltre 20 °C" },
  "q.preference": { l: "Quale vestibilità preferisce?" },
  "q.preference.proche": { l: "Aderente al corpo" },
  "q.preference.neutre": { l: "Nessuna preferenza marcata" },
  "q.preference.aise": { l: "Con agio" },
};

const NO: Dict = {
  A: { l: "Neopren", d: "Våtdrakter og plagg for vannsport." },
  B: { l: "Ski og snowboard", d: "Fjellplagg, lag og skall." },
  C: { l: "Seler for vannsport", d: "Beltesele, sittesele, trapes." },
  "C.fermeture": { l: "Denne familien åpner når merkedataene våre dekker rygghøyde på en verifisert måte. Vi anbefaler heller ingenting enn å anbefale på usikre data." },
  A1: { l: "Surf og bølgesport", d: "Bølge, longboard, bodyboard." },
  A2: {
    l: "Åpent vann og triatlon",
    d: "Svømmetaket gjør skulderfrihet til den viktigste begrensningen.",
  },
  A3: {
    l: "Kitesurf, wingfoil og blandet bruk",
    d: "Ekstra begrensning på midje og hofter på grunn av selen.",
  },
  A4: {
    l: "Dykking",
    d: "Kompresjon på dypet gjør passform over overkroppen og benlengde avgjørende.",
  },
  B0: { l: "Ski og snowboard", d: "Fjellplagg." },
  "A1-integrale": { l: "Heldrakt", d: "Lange armer og ben." },
  "A1-shorty": { l: "Shorty", d: "Korte armer og ben." },
  "A1-top": { l: "Topp", d: "Kun neoprentopp." },
  "A2-integrale": { l: "Svømmedrakt", d: "Heldrakt laget for svømming." },
  "A3-integrale": { l: "Heldrakt", d: "Brukt under sele." },
  "A4-integrale": { l: "Dykkerdrakt", d: "Våt heldrakt." },
  B1: { l: "Jakke", d: "Skall eller isolert jakke." },
  B2: { l: "Bukse eller kjeledress", d: "Hovedsvakheten i standardtabellene." },
  B3: { l: "Innerlag eller mellomlag", d: "Teknisk underlag." },
  B4: {
    l: "Heldress",
    d: "Jakke og bukse i ett, ekstra begrensning på overkroppslengde.",
  },
  "q.couches": { l: "Planlegger du å bruke et mellomlag under?" },
  "q.couches.fine": { l: "Ett tynt lag" },
  "q.couches.intermediaire": { l: "Ett tynt lag og en fleece" },
  "q.couches.epaisse": { l: "Flere tykke lag" },
  "q.couches.inconnu": { l: "Vet ikke ennå" },
  "q.frequence": { l: "Hvor ofte trener du?" },
  "q.frequence.occasionnel": { l: "Noen turer i året" },
  "q.frequence.regulier": { l: "Flere ganger i måneden" },
  "q.frequence.intensif": { l: "Hver uke eller oftere" },
  "q.temperature": { l: "I hvilket vann er du oftest?" },
  "q.temperature.froide": { l: "Kaldt, under 15 °C" },
  "q.temperature.temperee": { l: "Temperert, 15 til 20 °C" },
  "q.temperature.chaude": { l: "Varmt, over 20 °C" },
  "q.preference": { l: "Hvilken passform foretrekker du?" },
  "q.preference.proche": { l: "Tett inntil kroppen" },
  "q.preference.neutre": { l: "Ingen sterk preferanse" },
  "q.preference.aise": { l: "Med litt rom" },
};

const DICTS: Partial<Record<Lang, Dict>> = {
  en: EN,
  es: ES,
  it: IT,
  no: NO,
  ...(CATALOGUE_LANGS as Partial<Record<Lang, Dict>>),
};

export function makeTC(lang: Lang) {
  const dict = DICTS[lang];

  const paire = (id: string): Paire | undefined => {
    const p = dict?.[id];
    if (!p) signalerManque("catalogue", id, lang, "repli_fr");
    return p;
  };

  return {
    /** Libellé et description traduits d'un volet, d'une discipline ou d'une pièce. */
    entree(def: VoletDef | DisciplineDef | SousVoletDef): { libelle: string; description: string } {
      const p = paire(def.id);
      return {
        libelle: p?.l ?? def.libelle,
        description: p?.d ?? def.description,
      };
    },
    motifFermeture(def: VoletDef): string | undefined {
      return paire(`${def.id}.fermeture`)?.l ?? def.motifFermeture;
    },
    question(q: QuestionUsage): string {
      return paire(`q.${q.id}`)?.l ?? q.intitule;
    },
    option(q: QuestionUsage, valeur: string, libelle: string): string {
      return paire(`q.${q.id}.${valeur}`)?.l ?? libelle;
    },
  };
}


export type TC = ReturnType<typeof makeTC>;
