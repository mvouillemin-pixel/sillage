/* =========================================================
   SILLAGE — Localisation des pages éditoriales
   (Bibliothèque, Repères) en FR, EN, ES, IT, NO.

   Le mot « niveau » n'est plus employé : on parle de
   PARCOURS DE LECTURE, désigné par son nom (Découvrir,
   Comprendre, Approfondir, Expert).

   Les corps d'articles restent rédigés en français ; les
   titres, chapôs et toute l'interface sont localisés. Les
   pages annoncent explicitement cette limite plutôt que de
   publier une traduction automatique non relue.
   ========================================================= */

import type { Lang } from "./i18n";
import { PAGES_LANGS } from "./langs";
import { signalerManque } from "./i18n-diagnostic";

type Dict = Record<string, unknown>;

export function makeTP(lang: Lang) {
  return (key: string): string => {
    const path = key.split(".");
    const pick = (obj: Dict | undefined) =>
      path.reduce<unknown>(
        (o, k) => (o && typeof o === "object" ? (o as Dict)[k] : undefined),
        obj,
      );
    const direct = pick(PAGES[lang] as Dict);
    const v = direct ?? pick(PAGES.fr as Dict);
    if (typeof direct !== "string") {
      signalerManque("pages", key, lang, typeof v === "string" ? "repli_fr" : "absente");
    }
    return typeof v === "string" ? v : key;
  };
}

export type TP = ReturnType<typeof makeTP>;

/** Titre + chapô localisés d'une fiche ou d'un article. */
export function contenuLocalise(lang: Lang, id: string): { titre?: string; chapo?: string } {
  const c = (PAGES[lang] as Dict)["contenu"] as Record<string, { titre: string; chapo: string }>;
  return c?.[id] ?? {};
}

const CONTENU_FR = {} as Record<string, { titre: string; chapo: string }>;

/* ------------------------------------------------------------------ */

export const PAGES: Partial<Record<Lang, Dict>> = {
  fr: {
    parcours: {
      mot: "Parcours de lecture",
      tous: "Tous",
      decouvrir: "Découvrir",
      comprendre: "Comprendre",
      approfondir: "Approfondir",
      expert: "Expert",
      debuter: "D\u00e9buter",
      lecture: "Lecture",
    },
    disc: {
      mot: "Discipline",
      toutes: "Toutes",
      transversal: "Transversal",
      surf: "Surf",
      "eau-libre": "Eau libre / triathlon",
      kite: "Kite / wingfoil",
      ski: "Ski / snowboard",
      harnais: "Harnais",
      plongee: "Plongée",
      lab: "SILLAGE Lab",
    },
    biblio: {
      eyebrow: "Bibliothèque",
      titre: "Comprendre avant d'acheter, du premier achat à l'expertise",
      sous: "La taille et l'ajustement décident du confort, de la chaleur et du geste — pas seulement de l'allure. Chaque fiche indique son parcours de lecture et l'origine de ses sources.",
      compteur: "fiches disponibles",
      compteurUn: "fiche disponible",
      vide: "Rien de publié dans ce parcours pour cette discipline. Les sujets prévus sont listés plus bas : nous préférons annoncer un contenu à venir plutôt que d'en approximer un.",
      lire: "Lire la fiche",
      replier: "Replier",
      sources: "Sources",
      debuterTitre: "D\u00e9buter",
      debuterIntro: "Une guidance \u00e9crite pour un premier achat : quoi acheter en premier, comment se superposent les couches, quelles erreurs \u00e9viter. Ce n'est pas une recommandation personnalis\u00e9e.",
      debuterCta: "Une fois que vous savez quoi acheter, trouvez votre taille",
      debuterNeoprene: "Vague n\u00e9opr\u00e8ne du parcours D\u00e9buter : pr\u00e9vue, pas encore disponible.",
      familleMot: "Famille de sport",
      familleGlisse: "Sports de glisse",
      familleRaquette: "Sports de raquette",
      familleBallonBalle: "Sports de ballon et de balle",
      familleAVenir: "Famille pr\u00e9vue, pas encore v\u00e9rifi\u00e9e : aucune fiche n'est publi\u00e9e \u00e0 ce jour.",
      prochainement: "Prochainement",
      prochainementTitre: "Sujets prévus, pas encore publiés",
      vague1: "Première vague",
      vague2: "Deuxième vague",
      calendrier: "Calendrier",
      calendrierTitre: "Six mois de production, mois par mois",
      calendrierVideo: "Vidéo longue",
      temps: "Cadence",
      tempsTitre: "Temps de production estimés",
      tempsArticle: "Article",
      tempsVideo: "Vidéo longue",
      tempsShort: "Format court",

      teaser:
        "Fiches de connaissance, du premier achat aux matériaux : choisissez votre parcours de lecture.",
      metaTitre: "Bibliothèque — comprendre la taille et l'ajustement | Sillage",
      metaDesc:
        "Des fiches de connaissance du premier achat à l'expertise : néoprène, ski, harnais. Ce qui est établi, ce qui vient des marques, ce que l'on ne sait pas encore.",
    },
    reperes: {
      eyebrow: "Repères",
      titre: "Comprendre les tailles avant de choisir",
      sous: "Ce que les marques publient réellement, ce qu'elles ne publient pas, et ce que cela change pour vous. Tout ce qui est indiqué ici provient de sources relevées, jamais d'une estimation.",
      metaTitre: "Repères de taille — Sillage",
      metaDesc:
        "Comprendre les grilles de tailles, le vocabulaire des coupes et la façon de se mesurer, pour choisir la bonne pièce de néoprène ou de montagne.",
    },
    nav: {
      trouver: "Trouver ma taille",
      biblio: "Bibliothèque : du premier achat à l'expertise",
      reperes: "Repères sur les grilles de tailles",
    },
    langueTexte:
      "Interface et résumés traduits. Le corps des fiches reste en français : nous préférons un texte relu à une traduction automatique.",
    contenu: CONTENU_FR,
  },

  en: {
    parcours: {
      mot: "Reading track",
      tous: "All",
      decouvrir: "Discover",
      comprendre: "Understand",
      approfondir: "Go deeper",
      expert: "Expert",
      debuter: "Get started",
      lecture: "Reading time",
    },
    disc: {
      mot: "Discipline",
      toutes: "All",
      transversal: "Cross-discipline",
      surf: "Surf",
      "eau-libre": "Open water / triathlon",
      kite: "Kite / wingfoil",
      ski: "Ski / snowboard",
      harnais: "Harnesses",
      plongee: "Diving",
      lab: "SILLAGE Lab",
    },
    biblio: {
      eyebrow: "Library",
      titre: "Understand before you buy, from first purchase to expertise",
      sous: "Size and fit decide comfort, warmth and movement — not just looks. Every entry states its reading track and where its sources come from.",
      compteur: "entries available",
      compteurUn: "entry available",
      vide: "Nothing published in this track for this discipline. Planned topics are listed below: we would rather announce upcoming content than approximate it.",
      lire: "Read the entry",
      replier: "Collapse",
      sources: "Sources",
      debuterTitre: "Get started",
      debuterIntro: "Written guidance for a first purchase: what to buy first, how layers work together, which mistakes to avoid. This is not a personalised recommendation.",
      debuterCta: "Once you know what to buy, find your size",
      debuterNeoprene: "Wetsuit wave of the Get started track: planned, not available yet.",
      familleMot: "Sport family",
      familleGlisse: "Boardsports and snowsports",
      familleRaquette: "Racket sports",
      familleBallonBalle: "Ball sports",
      familleAVenir: "Family planned, not yet verified: no entry is published to date.",
      prochainement: "Coming next",
      prochainementTitre: "Planned topics, not published yet",
      vague1: "First wave",
      vague2: "Second wave",
      calendrier: "Schedule",
      calendrierTitre: "Six months of production, month by month",
      calendrierVideo: "Long-form video",
      temps: "Cadence",
      tempsTitre: "Estimated production time",
      tempsArticle: "Article",
      tempsVideo: "Long-form video",
      tempsShort: "Short form",

      teaser: "Knowledge entries, from first purchase to materials: choose your reading track.",
      metaTitre: "Library — understanding size and fit | Sillage",
      metaDesc:
        "Knowledge entries from first purchase to expertise: wetsuits, ski, harnesses. What is established, what comes from brands, what is still unknown.",
    },
    reperes: {
      eyebrow: "Basics",
      titre: "Understand sizing before you choose",
      sous: "What brands actually publish, what they do not, and what it changes for you. Everything here comes from recorded sources, never from an estimate.",
      metaTitre: "Sizing basics — Sillage",
      metaDesc:
        "Understand size charts, fit vocabulary and how to measure yourself, to choose the right wetsuit or mountain garment.",
    },
    nav: {
      trouver: "Find my size",
      biblio: "Library: from first purchase to expertise",
      reperes: "Basics on brand size charts",
    },
    langueTexte:
      "Interface and summaries are translated. Entry bodies remain in French: we prefer a proofread text over machine translation.",
    contenu: {
      flushing: {
        titre: "Too large, your wetsuit cools you down: the flushing trap",
        chapo: "A wetsuit does not keep you dry: it limits heat exchange and water movement.",
      },
      "epaules-rame": {
        titre: "Too tight, it can exhaust your shoulders while paddling",
        chapo:
          "A wetsuit that is too small can compress the chest or restrict the shoulders: every movement costs more.",
      },
      "deux-centimetres": {
        titre: "What a 2 cm error can change",
        chapo:
          "A few centimetres become decisive when they place you on the border between two sizes.",
      },
      "meme-m": {
        titre: "Why the same “M” means nothing from one brand to the next",
        chapo:
          "There is no universal size guaranteeing that an M means the same dimensions everywhere.",
      },
      cou: {
        titre: "Neck seal: an area size charts rarely describe",
        chapo:
          "The neck is a functionally important area, yet its circumference rarely appears in public size charts.",
      },
      "morphologie-a": {
        titre: "Pear shape: why some charts describe certain proportions poorly",
        chapo:
          "Fuller hips and thighs with a narrower waist: two people of the same nominal size may need different cuts.",
      },
      "pantalon-ski": {
        titre: "Ski pants: why hips and thighs can become the limiting factor",
        chapo:
          "Waist circumference is not enough: pelvis, thighs and inseam govern mobility and how the garment goes on.",
      },
      layering: {
        titre: "Layering on snow: how much room without swimming in your jacket",
        chapo: "A jacket must host your layers without becoming needlessly bulky.",
      },
      "compression-triathlon": {
        titre: "Triathlon: useful compression versus harmful compression",
        chapo:
          "A triathlon wetsuit is designed close to the body, without becoming a major restriction on breathing or movement.",
      },
      "harnais-longueur-dos": {
        titre: "Kite harness: back length matters too",
        chapo: "A harness is not chosen on a circumference alone.",
      },
      "epaisseur-ajustement": {
        titre: "Thick versus thin neoprene: thickness changes the fit",
        chapo:
          "At comparable construction, increasing thickness generally changes perceived flexibility.",
      },
      zip: {
        titre: "Back zip, chest zip or zip-free: what it changes for fit",
        chapo:
          "The entry system changes the architecture of the suit and can influence mobility, water entry and how easily it goes on.",
      },
      "cinq-erreurs-mesure": {
        titre: "Measuring properly: the five errors that distort everything",
        chapo: "Errors usually come from an unstable protocol, not from the tape measure itself.",
      },
      "cout-des-retours": {
        titre: "A badly sized garment often gets returned: the real cost of returns",
        chapo: "Size and fit are among the main reasons for returns in online apparel.",
      },
      "essayage-et-conseil": {
        titre: "In-store fitting and online advice: combining them intelligently",
        chapo: "Shops and digital advice are not opposites.",
      },
      "zone-par-zone": {
        titre: "Why SILLAGE reasons area by area",
        chapo: "A technical garment cannot always be described by a single size label.",
      },
      "statique-dynamique": {
        titre: "Static fit and dynamic fit",
        chapo: "Gear that seems right while standing still can behave differently in motion.",
      },
      "meme-taille-comportement": {
        titre: "Why two suits of the same size can behave differently",
        chapo: "The letter on the label describes only part of the product geometry.",
      },
      "donnee-inconnue": {
        titre: "How SILLAGE handles data it does not know",
        chapo: "A missing value is itself a piece of information.",
      },
      "apres-sml": {
        titre: "Beyond S, M, L: towards a multidimensional view of fit",
        chapo: "Traditional sizes compress a multidimensional body into a single category.",
      },
      "une-grille-par-marque": {
        titre: "Why a brand publishes a single chart for its whole range",
        chapo:
          "Almost every brand in our disciplines publishes one master chart per gender, not one per model.",
      },
      "vocabulaire-des-coupes": {
        titre: "Fit vocabulary, and what it actually means",
        chapo:
          "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: these words are official and usable.",
      },
      "ce-que-la-grille-ne-dit-pas": {
        titre: "What a size chart does not tell you",
        chapo:
          "A chart gives body measurement bands. It gives neither material, nor stretch, nor panelling.",
      },
      "bien-mesurer": {
        titre: "Measuring yourself: five rules that change the result",
        chapo:
          "A badly held tape shifts the recommendation by a full size. Decisive areas are measured by hand.",
      },
      debuter: {
        titre: "New to this? Three benchmarks before buying",
        chapo: "The right size depends first on use, then on the brand.",
      },
    },
  },

  es: {
    parcours: {
      mot: "Itinerario de lectura",
      tous: "Todos",
      decouvrir: "Descubrir",
      comprendre: "Comprender",
      approfondir: "Profundizar",
      expert: "Experto",
      debuter: "Empezar",
      lecture: "Lectura",
    },
    disc: {
      mot: "Disciplina",
      toutes: "Todas",
      transversal: "Transversal",
      surf: "Surf",
      "eau-libre": "Aguas abiertas / triatlón",
      kite: "Kite / wingfoil",
      ski: "Esquí / snowboard",
      harnais: "Arneses",
      plongee: "Buceo",
      lab: "SILLAGE Lab",
    },
    biblio: {
      eyebrow: "Biblioteca",
      titre: "Entender antes de comprar, desde la primera compra hasta la experiencia",
      sous: "La talla y el ajuste deciden el confort, el calor y el gesto, no solo la estética. Cada ficha indica su itinerario de lectura y el origen de sus fuentes.",
      compteur: "fichas disponibles",
      compteurUn: "ficha disponible",
      vide: "Nada publicado en este itinerario para esta disciplina. Los temas previstos se listan más abajo: preferimos anunciar un contenido futuro antes que aproximarlo.",
      lire: "Leer la ficha",
      replier: "Plegar",
      sources: "Fuentes",
      debuterTitre: "Empezar",
      debuterIntro: "Una gu\u00eda escrita para una primera compra: qu\u00e9 comprar primero, c\u00f3mo funcionan las capas, qu\u00e9 errores evitar. No es una recomendaci\u00f3n personalizada.",
      debuterCta: "Cuando sepas qu\u00e9 comprar, encuentra tu talla",
      debuterNeoprene: "Serie de neopreno del recorrido Empezar: prevista, a\u00fan no disponible.",
      familleMot: "Familia deportiva",
      familleGlisse: "Deportes de deslizamiento",
      familleRaquette: "Deportes de raqueta",
      familleBallonBalle: "Deportes de pelota y bal\u00f3n",
      familleAVenir: "Familia prevista, a\u00fan no verificada: no hay ninguna ficha publicada a d\u00eda de hoy.",
      prochainement: "Próximamente",
      prochainementTitre: "Temas previstos, aún no publicados",
      vague1: "Primera oleada",
      vague2: "Segunda oleada",
      calendrier: "Calendario",
      calendrierTitre: "Seis meses de producción, mes a mes",
      calendrierVideo: "Vídeo largo",
      temps: "Ritmo",
      tempsTitre: "Tiempos de producción estimados",
      tempsArticle: "Artículo",
      tempsVideo: "Vídeo largo",
      tempsShort: "Formato corto",
      teaser:
        "Fichas de conocimiento, de la primera compra a los materiales: elige tu itinerario de lectura.",
      metaTitre: "Biblioteca — entender la talla y el ajuste | Sillage",
      metaDesc:
        "Fichas de conocimiento desde la primera compra hasta la experiencia: neopreno, esquí, arneses. Lo establecido, lo que dicen las marcas y lo que aún se desconoce.",
    },
    reperes: {
      eyebrow: "Claves",
      titre: "Entender las tallas antes de elegir",
      sous: "Lo que las marcas publican realmente, lo que no publican y lo que eso cambia para ti. Todo lo indicado procede de fuentes registradas, nunca de una estimación.",
      metaTitre: "Claves de tallaje — Sillage",
      metaDesc:
        "Entender las tablas de tallas, el vocabulario de los cortes y cómo medirse, para elegir la prenda de neopreno o de montaña adecuada.",
    },
    nav: {
      trouver: "Encontrar mi talla",
      biblio: "Biblioteca: de la primera compra a la experiencia",
      reperes: "Claves sobre las tablas de tallas",
    },
    langueTexte:
      "Interfaz y resúmenes traducidos. El cuerpo de las fichas permanece en francés: preferimos un texto revisado a una traducción automática.",
    contenu: {
      flushing: {
        titre: "Demasiado grande, tu traje te enfría: la trampa del flushing",
        chapo:
          "Un traje de neopreno no te mantiene seco: limita los intercambios térmicos y los movimientos de agua.",
      },
      "epaules-rame": {
        titre: "Demasiado ajustado, puede agotar tus hombros al remar",
        chapo:
          "Un traje demasiado pequeño puede comprimir el tórax o limitar los hombros: cada movimiento cuesta más.",
      },
      "deux-centimetres": {
        titre: "Lo que pueden cambiar 2 cm de error",
        chapo:
          "Unos centímetros resultan determinantes cuando te sitúan en la frontera entre dos tallas.",
      },
      "meme-m": {
        titre: "Por qué la misma «M» no significa nada de una marca a otra",
        chapo:
          "No existe una talla universal que garantice que una M represente las mismas dimensiones en todas partes.",
      },
      cou: {
        titre: "Estanqueidad en el cuello: una zona poco descrita en las tablas",
        chapo:
          "El cuello es una zona funcional importante, aunque su contorno aparece rara vez en las tablas públicas.",
      },
      "morphologie-a": {
        titre: "Morfología en A: por qué algunas tablas describen mal ciertas proporciones",
        chapo:
          "Caderas y muslos desarrollados con una cintura más fina: dos personas de la misma talla nominal pueden necesitar cortes distintos.",
      },
      "pantalon-ski": {
        titre: "Pantalón de esquí: por qué caderas y muslos pueden ser limitantes",
        chapo:
          "El contorno de cintura no basta: pelvis, muslos y entrepierna condicionan la movilidad y el paso de la prenda.",
      },
      layering: {
        titre: "Capas en la nieve: cuánta holgura sin nadar dentro de la chaqueta",
        chapo: "Una chaqueta debe alojar tus capas sin volverse innecesariamente voluminosa.",
      },
      "compression-triathlon": {
        titre: "Triatlón: compresión útil frente a compresión perjudicial",
        chapo:
          "Un traje de triatlón se diseña ceñido al cuerpo, sin convertirse en una restricción importante de la respiración o del movimiento.",
      },
      "harnais-longueur-dos": {
        titre: "Arnés de kite: la longitud de espalda también cuenta",
        chapo: "Un arnés no se elige solo con un contorno.",
      },
      "epaisseur-ajustement": {
        titre: "Neopreno grueso o fino: el grosor cambia el ajuste",
        chapo:
          "A construcción comparable, aumentar el grosor suele modificar la flexibilidad percibida.",
      },
      zip: {
        titre: "Cremallera dorsal, frontal o sin cremallera: qué cambia en el ajuste",
        chapo:
          "El sistema de entrada modifica la arquitectura del traje y puede influir en movilidad, estanqueidad y facilidad para vestirlo.",
      },
      "cinq-erreurs-mesure": {
        titre: "Medirse correctamente: los cinco errores que lo falsean todo",
        chapo: "Los errores vienen casi siempre de un protocolo inestable, no de la cinta métrica.",
      },
      "cout-des-retours": {
        titre: "Una prenda mal tallada acaba devuelta: el coste real de las devoluciones",
        chapo:
          "La talla y el ajuste están entre los motivos principales de devolución en la ropa comprada en línea.",
      },
      "essayage-et-conseil": {
        titre: "Probarse en tienda y asesorarse en línea: combinarlo con inteligencia",
        chapo: "La tienda y el consejo digital no se oponen.",
      },
      "zone-par-zone": {
        titre: "Por qué SILLAGE razona zona por zona",
        chapo: "Una prenda técnica no siempre puede describirse con una sola etiqueta de talla.",
      },
      "statique-dynamique": {
        titre: "Ajuste estático y ajuste dinámico",
        chapo: "Un equipo que parece correcto de pie puede comportarse de otro modo en movimiento.",
      },
      "meme-taille-comportement": {
        titre: "Por qué dos trajes de la misma talla pueden comportarse distinto",
        chapo: "La letra de la etiqueta describe solo una parte de la geometría del producto.",
      },
      "donnee-inconnue": {
        titre: "Cómo trata SILLAGE un dato que desconoce",
        chapo: "La ausencia de un dato es en sí misma una información.",
      },
      "apres-sml": {
        titre: "Más allá de S, M, L: hacia una representación multidimensional del ajuste",
        chapo:
          "Las tallas tradicionales comprimen un cuerpo multidimensional en una sola categoría.",
      },
      "une-grille-par-marque": {
        titre: "Por qué una marca publica una sola tabla para toda su gama",
        chapo:
          "Casi todas las marcas de nuestras disciplinas publican una tabla maestra por género, no una por modelo.",
      },
      "vocabulaire-des-coupes": {
        titre: "El vocabulario de los cortes y lo que significa realmente",
        chapo:
          "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: son términos oficiales y utilizables.",
      },
      "ce-que-la-grille-ne-dit-pas": {
        titre: "Lo que una tabla de tallas no dice",
        chapo:
          "Una tabla da rangos de medidas corporales. No da ni el material, ni la elasticidad, ni los paneles.",
      },
      "bien-mesurer": {
        titre: "Medirse bien: cinco reglas que cambian el resultado",
        chapo:
          "Una cinta mal sujeta desplaza la recomendación una talla entera. Las zonas determinantes se miden a mano.",
      },
      debuter: {
        titre: "¿Empiezas? Tres claves antes de comprar",
        chapo: "La talla correcta depende primero del uso y después de la marca.",
      },
    },
  },

  it: {
    parcours: {
      mot: "Percorso di lettura",
      tous: "Tutti",
      decouvrir: "Scoprire",
      comprendre: "Capire",
      approfondir: "Approfondire",
      expert: "Esperto",
      debuter: "Iniziare",
      lecture: "Lettura",
    },
    disc: {
      mot: "Disciplina",
      toutes: "Tutte",
      transversal: "Trasversale",
      surf: "Surf",
      "eau-libre": "Acque libere / triathlon",
      kite: "Kite / wingfoil",
      ski: "Sci / snowboard",
      harnais: "Trapezi",
      plongee: "Immersione",
      lab: "SILLAGE Lab",
    },
    biblio: {
      eyebrow: "Biblioteca",
      titre: "Capire prima di acquistare, dal primo acquisto all'esperienza",
      sous: "Taglia e vestibilità determinano comfort, calore e gesto, non solo l'estetica. Ogni scheda indica il suo percorso di lettura e l'origine delle fonti.",
      compteur: "schede disponibili",
      compteurUn: "scheda disponibile",
      vide: "Nulla di pubblicato in questo percorso per questa disciplina. Gli argomenti previsti sono elencati più sotto: preferiamo annunciare un contenuto futuro piuttosto che approssimarlo.",
      lire: "Leggi la scheda",
      replier: "Richiudi",
      sources: "Fonti",
      debuterTitre: "Iniziare",
      debuterIntro: "Una guida scritta per il primo acquisto: cosa comprare per primo, come funzionano gli strati, quali errori evitare. Non \u00e8 una raccomandazione personalizzata.",
      debuterCta: "Quando sai cosa comprare, trova la tua taglia",
      debuterNeoprene: "Serie neoprene del percorso Iniziare: prevista, non ancora disponibile.",
      familleMot: "Famiglia sportiva",
      familleGlisse: "Sport di scivolamento",
      familleRaquette: "Sport con racchetta",
      familleBallonBalle: "Sport con palla e pallone",
      familleAVenir: "Famiglia prevista, non ancora verificata: nessuna scheda pubblicata a oggi.",
      prochainement: "Prossimamente",
      prochainementTitre: "Argomenti previsti, non ancora pubblicati",
      vague1: "Prima ondata",
      vague2: "Seconda ondata",
      calendrier: "Calendario",
      calendrierTitre: "Sei mesi di produzione, mese per mese",
      calendrierVideo: "Video lungo",
      temps: "Ritmo",
      tempsTitre: "Tempi di produzione stimati",
      tempsArticle: "Articolo",
      tempsVideo: "Video lungo",
      tempsShort: "Formato breve",
      teaser:
        "Schede di conoscenza, dal primo acquisto ai materiali: scegli il tuo percorso di lettura.",
      metaTitre: "Biblioteca — capire taglia e vestibilità | Sillage",
      metaDesc:
        "Schede di conoscenza dal primo acquisto all'esperienza: neoprene, sci, trapezi. Ciò che è accertato, ciò che dicono i marchi, ciò che ancora non si sa.",
    },
    reperes: {
      eyebrow: "Riferimenti",
      titre: "Capire le taglie prima di scegliere",
      sous: "Ciò che i marchi pubblicano davvero, ciò che non pubblicano e ciò che questo cambia per te. Tutto qui proviene da fonti rilevate, mai da una stima.",
      metaTitre: "Riferimenti di taglia — Sillage",
      metaDesc:
        "Capire le tabelle taglie, il vocabolario delle vestibilità e come misurarsi, per scegliere il capo giusto in neoprene o da montagna.",
    },
    nav: {
      trouver: "Trova la mia taglia",
      biblio: "Biblioteca: dal primo acquisto all'esperienza",
      reperes: "Riferimenti sulle tabelle taglie",
    },
    langueTexte:
      "Interfaccia e sintesi tradotte. Il corpo delle schede resta in francese: preferiamo un testo riletto a una traduzione automatica.",
    contenu: {
      flushing: {
        titre: "Troppo larga, la muta ti raffredda: la trappola del flushing",
        chapo:
          "Una muta in neoprene non ti tiene asciutto: limita gli scambi termici e i movimenti d'acqua.",
      },
      "epaules-rame": {
        titre: "Troppo stretta, può sfinire le spalle in remata",
        chapo:
          "Una muta troppo piccola può comprimere il torace o limitare le spalle: ogni movimento costa di più.",
      },
      "deux-centimetres": {
        titre: "Cosa possono cambiare 2 cm di errore",
        chapo:
          "Pochi centimetri diventano determinanti quando ti collocano al confine tra due taglie.",
      },
      "meme-m": {
        titre: "Perché la stessa «M» non significa nulla da un marchio all'altro",
        chapo:
          "Non esiste una taglia universale che garantisca che una M corrisponda ovunque alle stesse dimensioni.",
      },
      cou: {
        titre: "Tenuta al collo: una zona raramente descritta dalle tabelle",
        chapo:
          "Il collo è una zona funzionalmente importante, eppure la sua circonferenza compare di rado nelle tabelle pubbliche.",
      },
      "morphologie-a": {
        titre: "Morfologia a pera: perché alcune tabelle descrivono male certe proporzioni",
        chapo:
          "Fianchi e cosce pronunciati con una vita più sottile: due persone della stessa taglia nominale possono richiedere vestibilità diverse.",
      },
      "pantalon-ski": {
        titre: "Pantalone da sci: perché fianchi e cosce possono diventare limitanti",
        chapo: "Il girovita non basta: bacino, cosce e cavallo determinano mobilità e vestibilità.",
      },
      layering: {
        titre: "Layering sulla neve: quanto agio senza nuotare nella giacca",
        chapo: "Una giacca deve accogliere i tuoi strati senza diventare inutilmente voluminosa.",
      },
      "compression-triathlon": {
        titre: "Triathlon: compressione utile contro compressione dannosa",
        chapo:
          "Una muta da triathlon è progettata aderente, senza diventare una forte restrizione della respirazione o del movimento.",
      },
      "harnais-longueur-dos": {
        titre: "Trapezio da kite: conta anche la lunghezza della schiena",
        chapo: "Un trapezio non si sceglie solo con una circonferenza.",
      },
      "epaisseur-ajustement": {
        titre: "Neoprene spesso o sottile: lo spessore cambia la vestibilità",
        chapo:
          "A costruzione comparabile, aumentare lo spessore modifica in genere la flessibilità percepita.",
      },
      zip: {
        titre: "Zip dorsale, frontale o senza zip: cosa cambia per la vestibilità",
        chapo:
          "Il sistema di entrata modifica l'architettura della muta e può influenzare mobilità, tenuta e facilità di vestizione.",
      },
      "cinq-erreurs-mesure": {
        titre: "Misurarsi correttamente: i cinque errori che falsano tutto",
        chapo: "Gli errori derivano quasi sempre da un protocollo instabile, non dal metro.",
      },
      "cout-des-retours": {
        titre: "Un capo di taglia sbagliata finisce reso: il costo reale dei resi",
        chapo:
          "Taglia e vestibilità sono tra i motivi principali di reso nell'abbigliamento online.",
      },
      "essayage-et-conseil": {
        titre: "Prova in negozio e consiglio online: combinarli con intelligenza",
        chapo: "Il negozio e il consiglio digitale non sono in opposizione.",
      },
      "zone-par-zone": {
        titre: "Perché SILLAGE ragiona zona per zona",
        chapo: "Un capo tecnico non sempre può essere descritto da una sola etichetta di taglia.",
      },
      "statique-dynamique": {
        titre: "Vestibilità statica e vestibilità dinamica",
        chapo:
          "Un'attrezzatura che sembra corretta da fermi può comportarsi diversamente in movimento.",
      },
      "meme-taille-comportement": {
        titre: "Perché due mute della stessa taglia possono comportarsi diversamente",
        chapo: "La lettera sull'etichetta descrive solo una parte della geometria del prodotto.",
      },
      "donnee-inconnue": {
        titre: "Come SILLAGE tratta un dato che non conosce",
        chapo: "L'assenza di un dato è essa stessa un'informazione.",
      },
      "apres-sml": {
        titre: "Oltre S, M, L: verso una rappresentazione multidimensionale della vestibilità",
        chapo:
          "Le taglie tradizionali comprimono un corpo multidimensionale in un'unica categoria.",
      },
      "une-grille-par-marque": {
        titre: "Perché un marchio pubblica una sola tabella per tutta la gamma",
        chapo:
          "Quasi tutti i marchi delle nostre discipline pubblicano una tabella madre per genere, non una per modello.",
      },
      "vocabulaire-des-coupes": {
        titre: "Il vocabolario delle vestibilità e cosa significa davvero",
        chapo:
          "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: sono termini ufficiali e utilizzabili.",
      },
      "ce-que-la-grille-ne-dit-pas": {
        titre: "Ciò che una tabella taglie non dice",
        chapo:
          "Una tabella fornisce fasce di misure corporee. Non fornisce né materiale, né elasticità, né pannellature.",
      },
      "bien-mesurer": {
        titre: "Misurarsi bene: cinque regole che cambiano il risultato",
        chapo:
          "Un metro tenuto male sposta la raccomandazione di una taglia intera. Le zone determinanti si misurano a mano.",
      },
      debuter: {
        titre: "Sei alle prime armi? Tre riferimenti prima di acquistare",
        chapo: "La taglia giusta dipende prima dall'uso, poi dal marchio.",
      },
    },
  },

  no: {
    parcours: {
      mot: "Leseløp",
      tous: "Alle",
      decouvrir: "Oppdage",
      comprendre: "Forstå",
      approfondir: "Fordype",
      expert: "Ekspert",
      debuter: "Komme i gang",
      lecture: "Lesetid",
    },
    disc: {
      mot: "Disiplin",
      toutes: "Alle",
      transversal: "Tverrgående",
      surf: "Surf",
      "eau-libre": "Åpent vann / triatlon",
      kite: "Kite / wingfoil",
      ski: "Ski / snowboard",
      harnais: "Seler",
      plongee: "Dykking",
      lab: "SILLAGE Lab",
    },
    biblio: {
      eyebrow: "Bibliotek",
      titre: "Forstå før du kjøper, fra første kjøp til ekspertise",
      sous: "Størrelse og passform avgjør komfort, varme og bevegelse — ikke bare utseendet. Hvert notat oppgir sitt leseløp og hvor kildene kommer fra.",
      compteur: "notater tilgjengelig",
      compteurUn: "notat tilgjengelig",
      vide: "Ingenting publisert i dette leseløpet for denne disiplinen. Planlagte temaer står lenger nede: vi kunngjør heller kommende innhold enn å tilnærme det.",
      lire: "Les notatet",
      replier: "Lukk",
      sources: "Kilder",
      debuterTitre: "Komme i gang",
      debuterIntro: "Skriftlig veiledning for et f\u00f8rste kj\u00f8p: hva du b\u00f8r kj\u00f8pe f\u00f8rst, hvordan lagene fungerer sammen, hvilke feil du b\u00f8r unng\u00e5. Dette er ikke en personlig anbefaling.",
      debuterCta: "N\u00e5r du vet hva du skal kj\u00f8pe, finn st\u00f8rrelsen din",
      debuterNeoprene: "Neopren-b\u00f8lgen i Komme i gang-sporet: planlagt, ikke tilgjengelig enn\u00e5.",
      familleMot: "Sportsfamilie",
      familleGlisse: "Glidesport",
      familleRaquette: "Racketsport",
      familleBallonBalle: "Ballsport",
      familleAVenir: "Familien er planlagt, enn\u00e5 ikke verifisert: ingen artikler er publisert per i dag.",
      prochainement: "Kommer",
      prochainementTitre: "Planlagte temaer, ennå ikke publisert",
      vague1: "Første bølge",
      vague2: "Andre bølge",
      calendrier: "Kalender",
      calendrierTitre: "Seks måneders produksjon, måned for måned",
      calendrierVideo: "Lang video",
      temps: "Takt",
      tempsTitre: "Estimert produksjonstid",
      tempsArticle: "Artikkel",
      tempsVideo: "Lang video",
      tempsShort: "Kortformat",
      teaser: "Kunnskapsnotater, fra første kjøp til materialer: velg ditt leseløp.",
      metaTitre: "Bibliotek — forstå størrelse og passform | Sillage",
      metaDesc:
        "Kunnskapsnotater fra første kjøp til ekspertise: våtdrakt, ski, seler. Det som er fastslått, det merkene sier, og det vi ennå ikke vet.",
    },
    reperes: {
      eyebrow: "Grunnlag",
      titre: "Forstå størrelser før du velger",
      sous: "Hva merkene faktisk publiserer, hva de ikke publiserer, og hva det betyr for deg. Alt her kommer fra registrerte kilder, aldri fra et anslag.",
      metaTitre: "Grunnlag om størrelser — Sillage",
      metaDesc:
        "Forstå størrelsestabeller, passformbegreper og hvordan du måler deg, for å velge riktig våtdrakt eller fjellplagg.",
    },
    nav: {
      trouver: "Finn min størrelse",
      biblio: "Bibliotek: fra første kjøp til ekspertise",
      reperes: "Grunnlag om størrelsestabeller",
    },
    langueTexte:
      "Grensesnitt og sammendrag er oversatt. Selve notatteksten er fortsatt på fransk: vi foretrekker korrekturlest tekst framfor maskinoversettelse.",
    contenu: {
      flushing: {
        titre: "For stor drakt kjøler deg ned: flushing-fellen",
        chapo: "En våtdrakt holder deg ikke tørr: den begrenser varmetap og vannbevegelse.",
      },
      "epaules-rame": {
        titre: "For trang kan den slite ut skuldrene under padling",
        chapo:
          "En for liten drakt kan klemme brystkassen eller begrense skuldrene: hver bevegelse koster mer.",
      },
      "deux-centimetres": {
        titre: "Hva 2 cm feil kan endre",
        chapo:
          "Noen få centimeter blir avgjørende når de plasserer deg på grensen mellom to størrelser.",
      },
      "meme-m": {
        titre: "Hvorfor samme «M» ikke betyr noe fra merke til merke",
        chapo:
          "Det finnes ingen universell størrelse som garanterer at en M betyr de samme målene overalt.",
      },
      cou: {
        titre: "Tetning ved halsen: et område tabellene sjelden beskriver",
        chapo:
          "Halsen er et funksjonelt viktig område, men omkretsen står sjelden i offentlige tabeller.",
      },
      "morphologie-a": {
        titre: "Pæreform: hvorfor noen tabeller beskriver visse proporsjoner dårlig",
        chapo:
          "Kraftige hofter og lår med smalere midje: to personer med samme nominelle størrelse kan trenge ulike snitt.",
      },
      "pantalon-ski": {
        titre: "Skibukse: hvorfor hofter og lår kan bli begrensningen",
        chapo: "Midjemål er ikke nok: bekken, lår og skrittlengde avgjør bevegelighet og passform.",
      },
      layering: {
        titre: "Lagdeling på snø: hvor mye rom uten å svømme i jakka",
        chapo: "En jakke må romme lagene dine uten å bli unødvendig voluminøs.",
      },
      "compression-triathlon": {
        titre: "Triatlon: nyttig kompresjon mot skadelig kompresjon",
        chapo:
          "En triatlondrakt er laget tett på kroppen, uten å bli en stor begrensning for pust eller bevegelse.",
      },
      "harnais-longueur-dos": {
        titre: "Kitesele: rygglengden teller også",
        chapo: "En sele velges ikke på omkrets alene.",
      },
      "epaisseur-ajustement": {
        titre: "Tykk mot tynn neopren: tykkelsen endrer passformen",
        chapo:
          "Ved sammenlignbar konstruksjon endrer økt tykkelse vanligvis opplevd fleksibilitet.",
      },
      zip: {
        titre: "Ryggglidelås, brystglidelås eller uten: hva det betyr for passformen",
        chapo:
          "Inngangssystemet endrer draktens arkitektur og kan påvirke bevegelighet, tetthet og påkledning.",
      },
      "cinq-erreurs-mesure": {
        titre: "Å måle riktig: de fem feilene som forvrenger alt",
        chapo: "Feilene kommer som regel fra en ustabil protokoll, ikke fra målebåndet.",
      },
      "cout-des-retours": {
        titre: "Et plagg i feil størrelse blir ofte returnert: den reelle kostnaden",
        chapo: "Størrelse og passform er blant hovedgrunnene til retur i netthandel med klær.",
      },
      "essayage-et-conseil": {
        titre: "Prøving i butikk og råd på nett: kombiner dem klokt",
        chapo: "Butikk og digital rådgivning står ikke i motsetning.",
      },
      "zone-par-zone": {
        titre: "Hvorfor SILLAGE resonnerer område for område",
        chapo: "Et teknisk plagg kan ikke alltid beskrives med én størrelsesetikett.",
      },
      "statique-dynamique": {
        titre: "Statisk passform og dynamisk passform",
        chapo: "Utstyr som virker riktig i ro, kan oppføre seg annerledes i bevegelse.",
      },
      "meme-taille-comportement": {
        titre: "Hvorfor to drakter i samme størrelse kan oppføre seg ulikt",
        chapo: "Bokstaven på etiketten beskriver bare en del av produktets geometri.",
      },
      "donnee-inconnue": {
        titre: "Hvordan SILLAGE håndterer data den ikke kjenner",
        chapo: "Manglende data er i seg selv informasjon.",
      },
      "apres-sml": {
        titre: "Etter S, M, L: mot en flerdimensjonal framstilling av passform",
        chapo: "Tradisjonelle størrelser presser en flerdimensjonal kropp inn i én kategori.",
      },
      "une-grille-par-marque": {
        titre: "Hvorfor et merke publiserer én tabell for hele serien",
        chapo:
          "Nesten alle merker i våre disipliner publiserer én hovedtabell per kjønn, ikke én per modell.",
      },
      "vocabulaire-des-coupes": {
        titre: "Passformbegrepene, og hva de faktisk betyr",
        chapo:
          "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: dette er offisielle og brukbare begreper.",
      },
      "ce-que-la-grille-ne-dit-pas": {
        titre: "Det en størrelsestabell ikke sier",
        chapo:
          "En tabell gir intervaller for kroppsmål. Den sier verken noe om materiale, elastisitet eller panelinndeling.",
      },
      "bien-mesurer": {
        titre: "Å måle seg godt: fem regler som endrer resultatet",
        chapo:
          "Et dårlig holdt målebånd flytter anbefalingen en hel størrelse. Avgjørende områder måles for hånd.",
      },
      debuter: {
        titre: "Nybegynner? Tre holdepunkter før du kjøper",
        chapo: "Riktig størrelse avhenger først av bruk, deretter av merket.",
      },
    },
  },
};

for (const [lang, dico] of Object.entries(PAGES_LANGS) as [Lang, Dict][]) {
  PAGES[lang] = { ...(PAGES[lang] ?? {}), ...dico };
}
