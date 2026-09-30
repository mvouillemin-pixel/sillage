/* =========================================================
   SILLAGE START — dictionnaire du module « Je commence ».

   Langue source : anglais. Français et norvégien bokmål sont relus ;
   toute autre langue retombe sur l'anglais et le manque est journalisé.

   Aucune donnée de marque, aucun prix, aucune règle fédérale n'est
   introduite ici : les repères entre crochets restent visibles.
   ========================================================= */

import type { Lang } from "../i18n";
import { signalerManque } from "../i18n-diagnostic";

type Dict = Record<string, unknown>;

/** Langues disposant d'une route dédiée. */
export const LANGS_DEBUT = ["en", "fr", "no"] as const;
export type LangDebut = (typeof LANGS_DEBUT)[number];

/** Chemin public du module, par langue. */
export const CHEMIN_DEBUT: Record<LangDebut, string> = {
  en: "/en/start",
  fr: "/fr/je-commence",
  no: "/no/jeg-begynner",
};

const EN: Dict = {
  page: {
    eyebrow: "Start a sport",
    titre: "What do you want to start?",
    sous: "Tell us the sport. We'll show you what you actually need to get started, what matters for your body or level, and what you can ignore for now.",
    retour: "Back to home",
    choixAutre: "Choose another sport",
  },
  entree: {
    connu: "I already know what I need",
    connuD: "Go to the SILLAGE sizing journey.",
    debutant: "I'm starting a sport",
    debutantD: "See what you need before you buy anything.",
  },
  accueil: {
    titre: "Starting something new?",
    texte:
      "Pick your sport. We'll help you understand what you need first, what should fit your body, and what can wait.",
    cta: "Start a sport",
  },
  famille: {
    eau: "Water sports",
    raquette: "Racket sports",
    ballon_balle: "Ball and team sports",
    glisse: "Board and snow sports",
    plein_air: "Outdoor sports",
    forme_combat: "Fitness and combat sports",
  },
  statut: {
    personnalise: "Personalised recommendations available",
    guide: "Beginner guide available",
    en_developpement: "In development",
  },
  sport: {
    surf: "Surf",
    eau_libre: "Open-water swimming",
    triathlon: "Triathlon",
    kitesurf: "Kitesurf",
    wingfoil: "Wingfoil",
    plongee: "Diving",
    natation_piscine: "Pool swimming",
    tennis: "Tennis",
    padel: "Padel",
    badminton: "Badminton",
    football: "Football",
    handball: "Handball",
    basketball: "Basketball",
    volleyball: "Volleyball",
    ski: "Ski",
    snowboard: "Snowboard",
    skateboard: "Skateboarding",
    velo: "Cycling",
    randonnee: "Hiking",
    escalade: "Climbing",
    course: "Running",
    judo: "Judo",
    boxe: "Boxing",
  },
  etapes: {
    s1: "About you",
    s2: "How you will practise",
    s3: "What you need",
    s4: "Your starter setup",
    progression: "Step {n} of 4: {titre}",
    suivant: "Continue",
    precedent: "Back",
    recommencer: "Change sport",
  },
  champ: {
    taille: "Height",
    poids: "Weight",
    pointure: "Shoe size",
    categorieAge: "Age category",
    mainDominante: "Dominant hand",
    aucun: "This sport does not need any measurement from you at this stage.",
    note: "We only ask for what a configured recommendation actually uses.",
    invalide: "Enter a value between {min} and {max}.",
  },
  age: { u9: "Under 9", u11: "Under 11", u13: "Under 13", u15: "Under 15", adulte: "Adult" },
  main: { droite: "Right", gauche: "Left" },
  q: {
    premiereFois: "Is this your first time?",
    surface: "What surface will you play on most often?",
    cadre: "How will you play?",
    aucune: "No context question is configured for this sport yet.",
  },
  opt: {
    oui: "Yes",
    non: "No",
    terrainSec: "Firm natural grass",
    terrainGras: "Soft or muddy natural grass",
    synthetique: "Artificial grass",
    stabilise: "Turf or hard sand court",
    salle: "Indoor court",
    libre: "On my own, for fun",
    club: "In a club or organised sessions",
  },
  priorite: {
    essentiel: "Essential",
    essentielD: "What you genuinely need to start.",
    bientot: "Useful soon",
    bientotD: "Improves comfort and progression, but not needed for the first sessions.",
    plus_tard: "Later",
    plus_tardD: "A beginner does not need this yet.",
    vide: "Nothing is configured in this group for this sport.",
  },
  base: {
    mesures: "Based on your measurements",
    niveau: "Based on your level",
    usage: "Based on how you will practise",
    regles_officielles: "Based on official age/category rules",
    generale: "General beginner recommendation",
  },
  reco: {
    pourquoi: "Why this?",
    valeur: "Recommendation",
    source: "Source",
    indispo:
      "We can explain what to look for, but we do not have enough verified data to recommend a specific size or configuration yet.",
    entreeManquante: "Add this information in step 1 to get a recommendation.",
    commerce: "[RETAILER DATA REQUIRED]",
    commerceNote:
      "Product and retailer matching comes after the recommendation, never before it.",
  },
  expl: {
    mesure: "Based on your height of {valeur} cm and the size chart published for this model.",
    surface: "This recommendation is based on the surface you selected, not on your body measurements.",
    regle:
      "Based on the rules applicable to your age category. This is a competition/category requirement, not a recommendation derived from your individual body measurements.",
    pointure: "Use your usual shoe size. There is no verified football-specific body-to-boot-size rule.",
    generale: "General beginner guidance. No individual personalisation is needed here.",
  },
  eq: {
    football: {
      chaussures: "Football boots — outsole type",
      chaussuresRaison: "The outsole must match the ground, otherwise grip and stability suffer.",
      pointure: "Football boots — size",
      pointureRaison: "Boots that are too long or too short make every session uncomfortable.",
      protegeTibias: "Shin guards",
      protegeTibiasRaison: "Required in organised play, and the first protection a beginner needs.",
      ballon: "Ball",
      ballonRaison: "Ball size depends on the age category set by the competition rules.",
      tenue: "Shirt, shorts",
      tenueRaison: "Any breathable kit works at the start; no football-specific sizing rule applies.",
      chaussettes: "Football socks",
      chaussettesRaison: "They hold the shin guards in place.",
      sac: "Kit bag",
      sacRaison: "Convenient once you train regularly, not needed on day one.",
    },
  },
  indispo: {
    titre: "No guided journey for this sport yet",
    texte:
      "This sport is listed but no verified beginner configuration exists. We would rather show nothing than invent a rule.",
    fit: "This sport is covered by the SILLAGE sizing journey.",
    fitCta: "Find my size",
    biblio: "Read the beginner guide",
  },
};

const FR: Dict = {
  page: {
    eyebrow: "Je commence",
    titre: "Quel sport veux-tu commencer ?",
    sous: "Dis-nous quel sport tu veux commencer. Nous t'expliquons ce dont tu as réellement besoin, ce qui dépend de ton corps ou de ton niveau, et ce que tu peux laisser de côté au début.",
    retour: "Retour à l'accueil",
    choixAutre: "Choisir un autre sport",
  },
  entree: {
    connu: "Je sais déjà ce qu'il me faut",
    connuD: "Aller au parcours de taille SILLAGE.",
    debutant: "Je commence un sport",
    debutantD: "Voir ce dont tu as besoin avant d'acheter.",
  },
  accueil: {
    titre: "Tu commences un nouveau sport ?",
    texte:
      "Choisis ton sport. Nous t'aidons à comprendre ce dont tu as besoin pour commencer, ce qui doit être adapté à ton corps et ce qui peut attendre.",
    cta: "Je commence",
  },
  famille: {
    eau: "Sports d'eau",
    raquette: "Sports de raquette",
    ballon_balle: "Sports de ballon et de balle",
    glisse: "Sports de glisse",
    plein_air: "Sports de plein air",
    forme_combat: "Forme et sports de combat",
  },
  statut: {
    personnalise: "Recommandations personnalisées disponibles",
    guide: "Guide débutant disponible",
    en_developpement: "En développement",
  },
  sport: {
    surf: "Surf",
    eau_libre: "Nage en eau libre",
    triathlon: "Triathlon",
    kitesurf: "Kitesurf",
    wingfoil: "Wingfoil",
    plongee: "Plongée",
    natation_piscine: "Natation en piscine",
    tennis: "Tennis",
    padel: "Padel",
    badminton: "Badminton",
    football: "Football",
    handball: "Handball",
    basketball: "Basket-ball",
    volleyball: "Volley-ball",
    ski: "Ski",
    snowboard: "Snowboard",
    skateboard: "Skateboard",
    velo: "Vélo",
    randonnee: "Randonnée",
    escalade: "Escalade",
    course: "Course à pied",
    judo: "Judo",
    boxe: "Boxe",
  },
  etapes: {
    s1: "Vous",
    s2: "Votre pratique",
    s3: "Ce qu'il vous faut",
    s4: "Votre équipement de départ",
    progression: "Étape {n} sur 4 : {titre}",
    suivant: "Continuer",
    precedent: "Retour",
    recommencer: "Changer de sport",
  },
  champ: {
    taille: "Taille",
    poids: "Poids",
    pointure: "Pointure",
    categorieAge: "Catégorie d'âge",
    mainDominante: "Main dominante",
    aucun: "Ce sport ne demande aucune mesure à ce stade.",
    note: "Nous ne demandons que ce qu'une recommandation configurée utilise réellement.",
    invalide: "Indiquez une valeur entre {min} et {max}.",
  },
  age: { u9: "Moins de 9 ans", u11: "Moins de 11 ans", u13: "Moins de 13 ans", u15: "Moins de 15 ans", adulte: "Adulte" },
  main: { droite: "Droite", gauche: "Gauche" },
  q: {
    premiereFois: "Est-ce ta première fois ?",
    surface: "Sur quelle surface joueras-tu le plus souvent ?",
    cadre: "Dans quel cadre vas-tu jouer ?",
    aucune: "Aucune question de contexte n'est encore configurée pour ce sport.",
  },
  opt: {
    oui: "Oui",
    non: "Non",
    terrainSec: "Herbe naturelle sèche",
    terrainGras: "Herbe naturelle grasse ou boueuse",
    synthetique: "Gazon synthétique",
    stabilise: "Stabilisé ou terrain dur",
    salle: "Salle",
    libre: "Seul, pour le plaisir",
    club: "En club ou en séances encadrées",
  },
  priorite: {
    essentiel: "Essentiel",
    essentielD: "Ce dont vous avez réellement besoin pour commencer.",
    bientot: "Utile bientôt",
    bientotD: "Améliore le confort et la progression, sans être nécessaire aux premières séances.",
    plus_tard: "Plus tard",
    plus_tardD: "Un débutant n'en a pas encore besoin.",
    vide: "Rien n'est configuré dans ce groupe pour ce sport.",
  },
  base: {
    mesures: "D'après vos mesures",
    niveau: "D'après votre niveau",
    usage: "D'après votre pratique",
    regles_officielles: "D'après les règles officielles d'âge ou de catégorie",
    generale: "Recommandation générale pour débuter",
  },
  reco: {
    pourquoi: "Pourquoi cela ?",
    valeur: "Recommandation",
    source: "Source",
    indispo:
      "Nous pouvons expliquer ce qu'il faut regarder, mais nous n'avons pas assez de données vérifiées pour recommander une taille ou une configuration précise.",
    entreeManquante: "Renseignez cette information à l'étape 1 pour obtenir une recommandation.",
    commerce: "[RETAILER DATA REQUIRED]",
    commerceNote:
      "Le rapprochement produit et revendeur vient après la recommandation, jamais avant.",
  },
  expl: {
    mesure: "D'après votre taille de {valeur} cm et la grille publiée pour ce modèle.",
    surface: "Cette recommandation repose sur la surface que vous avez choisie, pas sur vos mesures corporelles.",
    regle:
      "D'après les règles applicables à votre catégorie d'âge. C'est une exigence de compétition ou de catégorie, pas une recommandation déduite de vos mesures corporelles.",
    pointure: "Prenez votre pointure habituelle. Aucune règle vérifiée ne relie la morphologie à une pointure spécifique au football.",
    generale: "Guidance générale pour débuter. Aucune personnalisation individuelle n'est utile ici.",
  },
  eq: {
    football: {
      chaussures: "Chaussures de football — type de semelle",
      chaussuresRaison: "La semelle doit correspondre au terrain, sinon l'accroche et la stabilité en pâtissent.",
      pointure: "Chaussures de football — pointure",
      pointureRaison: "Une chaussure trop longue ou trop courte gâche chaque séance.",
      protegeTibias: "Protège-tibias",
      protegeTibiasRaison: "Obligatoires en pratique encadrée, et première protection utile.",
      ballon: "Ballon",
      ballonRaison: "La taille du ballon dépend de la catégorie d'âge fixée par le règlement.",
      tenue: "Maillot, short",
      tenueRaison: "Une tenue respirante suffit au départ ; aucune règle de taille propre au football ne s'applique.",
      chaussettes: "Chaussettes de football",
      chaussettesRaison: "Elles maintiennent les protège-tibias en place.",
      sac: "Sac de sport",
      sacRaison: "Pratique dès que l'on s'entraîne régulièrement, inutile le premier jour.",
    },
  },
  indispo: {
    titre: "Pas encore de parcours guidé pour ce sport",
    texte:
      "Ce sport est listé, mais aucune configuration débutant vérifiée n'existe. Nous préférons ne rien afficher plutôt qu'inventer une règle.",
    fit: "Ce sport est couvert par le parcours de taille SILLAGE.",
    fitCta: "Trouver ma taille",
    biblio: "Lire le guide débutant",
  },
};

const NO: Dict = {
  page: {
    eyebrow: "Jeg begynner",
    titre: "Hvilken sport vil du begynne med?",
    sous: "Fortell oss hvilken sport. Vi viser deg hva du faktisk trenger for å komme i gang, hva som avhenger av kroppen eller nivået ditt, og hva du kan droppe i starten.",
    retour: "Tilbake til forsiden",
    choixAutre: "Velg en annen sport",
  },
  entree: {
    connu: "Jeg vet allerede hva jeg trenger",
    connuD: "Gå til SILLAGE-størrelsesveiviseren.",
    debutant: "Jeg begynner med en sport",
    debutantD: "Se hva du trenger før du kjøper noe.",
  },
  accueil: {
    titre: "Skal du begynne med en ny sport?",
    texte:
      "Velg sporten din. Vi hjelper deg å forstå hva du trenger først, hva som må passe kroppen din, og hva som kan vente.",
    cta: "Jeg begynner",
  },
  famille: {
    eau: "Vannsport",
    raquette: "Racketsport",
    ballon_balle: "Ball- og lagsport",
    glisse: "Brett- og snøsport",
    plein_air: "Friluftssport",
    forme_combat: "Trening og kampsport",
  },
  statut: {
    personnalise: "Personlige anbefalinger tilgjengelig",
    guide: "Nybegynnerguide tilgjengelig",
    en_developpement: "Under utvikling",
  },
  sport: {
    surf: "Surfing",
    eau_libre: "Svømming i åpent vann",
    triathlon: "Triatlon",
    kitesurf: "Kitesurfing",
    wingfoil: "Wingfoil",
    plongee: "Dykking",
    natation_piscine: "Bassengsvømming",
    tennis: "Tennis",
    padel: "Padel",
    badminton: "Badminton",
    football: "Fotball",
    handball: "Håndball",
    basketball: "Basketball",
    volleyball: "Volleyball",
    ski: "Ski",
    snowboard: "Snowboard",
    skateboard: "Skateboard",
    velo: "Sykling",
    randonnee: "Fottur",
    escalade: "Klatring",
    course: "Løping",
    judo: "Judo",
    boxe: "Boksing",
  },
  etapes: {
    s1: "Om deg",
    s2: "Slik skal du drive",
    s3: "Dette trenger du",
    s4: "Startutstyret ditt",
    progression: "Steg {n} av 4: {titre}",
    suivant: "Fortsett",
    precedent: "Tilbake",
    recommencer: "Bytt sport",
  },
  champ: {
    taille: "Høyde",
    poids: "Vekt",
    pointure: "Skostørrelse",
    categorieAge: "Aldersklasse",
    mainDominante: "Dominant hånd",
    aucun: "Denne sporten trenger ingen mål fra deg ennå.",
    note: "Vi spør bare om det en konfigurert anbefaling faktisk bruker.",
    invalide: "Oppgi en verdi mellom {min} og {max}.",
  },
  age: { u9: "Under 9 år", u11: "Under 11 år", u13: "Under 13 år", u15: "Under 15 år", adulte: "Voksen" },
  main: { droite: "Høyre", gauche: "Venstre" },
  q: {
    premiereFois: "Er det første gang?",
    surface: "Hvilket underlag skal du spille mest på?",
    cadre: "I hvilken sammenheng skal du spille?",
    aucune: "Ingen kontekstspørsmål er konfigurert for denne sporten ennå.",
  },
  opt: {
    oui: "Ja",
    non: "Nei",
    terrainSec: "Fast naturgress",
    terrainGras: "Bløtt eller gjørmete naturgress",
    synthetique: "Kunstgress",
    stabilise: "Grus eller hardt underlag",
    salle: "Innendørs",
    libre: "På egen hånd, for moro skyld",
    club: "I klubb eller organiserte økter",
  },
  priorite: {
    essentiel: "Nødvendig",
    essentielD: "Det du faktisk trenger for å begynne.",
    bientot: "Nyttig snart",
    bientotD: "Gir bedre komfort og framgang, men trengs ikke de første øktene.",
    plus_tard: "Senere",
    plus_tardD: "En nybegynner trenger ikke dette ennå.",
    vide: "Ingenting er konfigurert i denne gruppen for denne sporten.",
  },
  base: {
    mesures: "Basert på målene dine",
    niveau: "Basert på nivået ditt",
    usage: "Basert på hvordan du skal drive",
    regles_officielles: "Basert på offisielle alders- og klasseregler",
    generale: "Generell nybegynneranbefaling",
  },
  reco: {
    pourquoi: "Hvorfor dette?",
    valeur: "Anbefaling",
    source: "Kilde",
    indispo:
      "Vi kan forklare hva du bør se etter, men vi har ikke nok verifiserte data til å anbefale en bestemt størrelse eller konfigurasjon ennå.",
    entreeManquante: "Fyll inn denne opplysningen i steg 1 for å få en anbefaling.",
    commerce: "[RETAILER DATA REQUIRED]",
    commerceNote: "Produkt- og forhandlerkobling kommer etter anbefalingen, aldri før.",
  },
  expl: {
    mesure: "Basert på høyden din på {valeur} cm og størrelsestabellen som er publisert for denne modellen.",
    surface: "Denne anbefalingen bygger på underlaget du valgte, ikke på kroppsmålene dine.",
    regle:
      "Basert på reglene som gjelder for aldersklassen din. Dette er et konkurranse- eller klassekrav, ikke en anbefaling utledet av kroppsmålene dine.",
    pointure: "Bruk din vanlige skostørrelse. Det finnes ingen verifisert fotballspesifikk sammenheng mellom kropp og skostørrelse.",
    generale: "Generell nybegynnerveiledning. Ingen individuell tilpasning er nødvendig her.",
  },
  eq: {
    football: {
      chaussures: "Fotballsko — sålertype",
      chaussuresRaison: "Sålen må passe underlaget, ellers svikter grep og stabilitet.",
      pointure: "Fotballsko — størrelse",
      pointureRaison: "Sko som er for lange eller for korte ødelegger hver økt.",
      protegeTibias: "Leggbeskyttere",
      protegeTibiasRaison: "Påbudt i organisert spill, og den første beskyttelsen en nybegynner trenger.",
      ballon: "Ball",
      ballonRaison: "Ballstørrelsen avhenger av aldersklassen som reglementet fastsetter.",
      tenue: "Drakt og shorts",
      tenueRaison: "Pustende tøy holder i starten; ingen fotballspesifikk størrelsesregel gjelder.",
      chaussettes: "Fotballstrømper",
      chaussettesRaison: "De holder leggbeskytterne på plass.",
      sac: "Bag",
      sacRaison: "Praktisk når du trener jevnlig, ikke nødvendig første dag.",
    },
  },
  indispo: {
    titre: "Ingen veiledet reise for denne sporten ennå",
    texte:
      "Sporten er listet, men det finnes ingen verifisert nybegynnerkonfigurasjon. Vi viser heller ingenting enn å finne på en regel.",
    fit: "Denne sporten dekkes av SILLAGE-størrelsesveiviseren.",
    fitCta: "Finn størrelsen min",
    biblio: "Les nybegynnerguiden",
  },
};

const DEBUT: Partial<Record<Lang, Dict>> = { en: EN, fr: FR, no: NO };

/** Traducteur du module débutant, repli explicite sur l'anglais. */
export function makeTD(lang: Lang) {
  return (key: string, params?: Record<string, string | number>): string => {
    const path = key.split(".");
    const pick = (obj: Dict | undefined) =>
      path.reduce<unknown>((o, k) => (o && typeof o === "object" ? (o as Dict)[k] : undefined), obj);
    const direct = pick(DEBUT[lang]);
    const v = direct ?? pick(EN);
    if (typeof direct !== "string") {
      signalerManque("pages", `debut.${key}`, lang, typeof v === "string" ? "repli_fr" : "absente");
    }
    let texte = typeof v === "string" ? v : key;
    if (params) {
      for (const [k, val] of Object.entries(params)) texte = texte.split(`{${k}}`).join(String(val));
    }
    return texte;
  };
}

export type TD = ReturnType<typeof makeTD>;
