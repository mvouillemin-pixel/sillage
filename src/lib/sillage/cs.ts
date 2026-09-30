type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Velikost podle postavy",
    tagline: "Správný model pro vaši aktivitu. Správná velikost pro vaše tělo.",
    dataNote: "Oficiální velikostní tabulky výrobců, zaznamenané a ověřené, nikdy vymyšlené.",
    langue: "Jazyk",
  },
  steps: {
    progress: "Postup",
    s1: "Výběr",
    s2: "Použití",
    s3: "Míry",
    s4: "Výsledek",
    etape: "Krok",
  },
  buttons: {
    next: "Pokračovat",
    back: "Zpět",
    result: "Zobrazit výsledek",
    restart: "Nové hledání",
    pieces: "Zobrazit produkty",
  },
  sel: {
    titre: "Vaše aktivita",
    sous: "Vyberte rodinu produktů, disciplínu a poté produkt. Ptáme se pouze na míry důležité pro daný produkt.",
    famille: "Rodina",
    discipline: "Disciplína",
    piece: "Produkt",
  },
  usage: {
    titre: "Vaše použití",
    sous: "Několik krátkých otázek. Pomáhají určit hledané padnutí.",
    geneTitre: "Cítili jste na předchozím vybavení nepohodlí?",
    geneMulti: "Zaškrtněte každé pociťované nepohodlí. Každé zpřísní toleranci pouze v dané zóně.",
    jamais: "Tento typ produktu jsem ještě nikdy neměl/a",
    oui: "Ano, na jednom konkrétním místě",
    ou: "Kde?",
    choisirZone: "Vyberte oblast",
    tropSerre: "Příliš těsné",
    tropAmple: "Příliš volné",
  },
  mes: {
    titre: "Vaše míry",
    sous: "Stačí měkký krejčovský metr. Klíčové oblasti pro tento produkt se měří ručně: právě tam je automatický odhad nejméně spolehlivý.",
    determinant: "Klíčové",
    facultatif: "Volitelné",
    sansMesure: "Bez této míry je doporučení stále možné, ale méně přesné v této oblasti.",
    manque: "Chybí jedna nebo více klíčových měr pro tento produkt.",
  },
  zones: {
    c: {
      label: "Obvod hrudníku",
      guide:
        "Metr veďte vodorovně v nejširším místě hrudníku, přes spodní prádlo. Dýchejte normálně; metr přiléhá, ale nesvírá.",
    },
    wa: {
      label: "Obvod pasu",
      guide: "V přirozeném ohybu pasu, mezi žebry a boky. Nezatahujte břicho, dýchejte normálně.",
    },
    hp: {
      label: "Obvod boků",
      guide:
        "V nejširším místě boků a hýždí, chodidla u sebe. V zrcadle zkontrolujte, že je metr vodorovně.",
    },
    th: {
      label: "Obvod stehna",
      guide: "V nejširším místě stehna, ve stoje, noha uvolněná, váha na obou chodidlech.",
    },
    h: {
      label: "Výška postavy",
      guide: "Zády ke zdi, bez obuvi, paty u sebe, pohled vodorovně vpřed.",
    },
    wt: { label: "Hmotnost", guide: "Ráno, bez těžkého oblečení." },
    ij: {
      label: "Délka vnitřní strany nohy",
      guide: "Od rozkroku k podlaze, zády ke zdi, bez obuvi.",
    },
    bl: {
      label: "Délka zad",
      guide:
        "Od 7. krčního obratle (u paty límce trička) až po hřeben kosti kyčelní, ve výšce kyčelní kosti.",
    },
    nk: { label: "Obvod krku", guide: "U kořene krku, metr vodorovně, bez utažení." },
    bc: { label: "Obvod bicepsu", guide: "V nejširším místě paže, uvolněné podél těla." },
    sh: {
      label: "Šířka ramen",
      guide: "Od jednoho ramenního výběžku k druhému, přes horní část zad, ramena uvolněná.",
    },
    ws: {
      label: "Rozpětí paží",
      guide: "Paže natažené vodorovně, od konečku prostředníku k druhému, zády ke zdi.",
    },
    al: {
      label: "Délka paže",
      guide: "Od ramenního výběžku k záhybu zápěstí, paže mírně pokrčená, ruka na boku.",
    },
    tl: {
      label: "Délka trupu",
      guide: "Od kořene krku, přes rameno, k rozkroku a zpět po zádech.",
    },
    ak: {
      label: "Obvod kotníku",
      guide: "Těsně nad kotníkem, chodidlo naplocho na podlaze, metr bez utažení.",
    },
    dh: {
      label: "Výška zad",
      guide: "Od hřebene kosti kyčelní k plovoucím žebrům, po boku trupu, ve stoje.",
    },
    pv: {
      label: "Obvod pánve",
      guide: "Ve výšce hřebenů kyčelních kostí, metr vodorovně, břicho uvolněné.",
    },
    il: {
      label: "Obvod pasu v úrovni hřebenů kyčelních kostí",
      guide: "Metr položen přesně na hřebeny kyčelních kostí, vodorovně, bez stlačení.",
    },
  },
  consent: {
    titre: "Vaše údaje",
    intro:
      "Ve výchozím nastavení je toto sezení dočasné: vaše míry zůstávají v paměti pouze po dobu konzultace a neukládají se. Žádné políčko není předem zaškrtnuté.",
    sessionL: "Použít mé míry pro toto doporučení",
    sessionD: "Nutné k okamžitému získání výsledku.",
    profilL: "Uchovat můj profil i po skončení sezení",
    profilD: "Abyste své míry našli i při další návštěvě. Odmítnutí nemá vliv na výsledek.",
    agregeL: "Přispět, v agregované a anonymní podobě, ke zlepšení služby",
    agregeD: "Žádná možnost návratu k vašemu profilu.",
    marchandL: "Předat doporučenou velikost partnerskému prodejci",
    marchandD: "Pouze velikost, nikdy vaše míry.",
    droits:
      "Přístup, oprava, výmaz, přenositelnost údajů a odvolání souhlasu jsou kdykoli dostupné z rozhraní.",
  },
  res: {
    titre: "Výsledek",
    refusTitre: "Zatím vám nemůžeme odpovědět",
    refusSuite:
      "Vaše míry byly zaznamenány. Jakmile značka splní naše požadavky na pokrytí dat pro tento produkt, doporučení se stane dostupným.",
    indepartageables:
      "Dvě značky se hodí stejně dobře. Raději vám to řekneme, než abychom rozhodovali nahodile.",
    coupeDeclaree: "Deklarovaný střih",
    sourceMarque: "zdroj značky",
    sourceSecondaire: "sekundární zdroj",
    tracabilite: "Dohledatelnost této konzultace",
    referentiel: "Referenční data",
    parametres: "Parametry",
    horodatage: "Časové razítko",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Příliš těsné", ajuste: "Přiléhavé", conforme: "Dobře padne", ample: "Volné" },
  confiance: {
    mot: "Spolehlivost",
    1: "velmi nízká",
    2: "nízká",
    3: "střední",
    4: "vysoká",
    5: "velmi vysoká",
  },
  repere: {
    mot: "Vodítko",
    grille: "Proč značka vydává jedinou tabulku pro celou svou řadu",
    mesurer: "Jak správně měřit: pět pravidel, která mění výsledek",
    nonDit: "Co velikostní tabulka neříká a proč to zaznamenáváme",
  },
  steps2: { profile: "Váš profil", measures: "Vaše míry", results: "Vaše velikosti" },
  gender: { title: "Tabulky k použití", m: "Pánské tabulky", f: "Dámské tabulky" },
  disc: {
    title: "Disciplína",
    surf: "Surfing",
    eaulibre: "Triatlon / otevřená voda",
    plongee: "Potápění / apnoe",
    ski: "Lyžování a snowboarding",
    harnais: "Trapéz pro windsurfing / kite",
    soon: "Již brzy",
    shoesRun: "Běžecká obuv",
    shoesSki: "Lyžařské boty",
  },
  buttons2: {
    toMeasures: "Pokračovat k mým mírám",
    compute: "Spočítat mé velikosti",
    edit: "Upravit mé míry",
    how: "Jak měřit",
    hide: "Skrýt návod",
    more: "Zjistit více",
    optional: "volitelné",
  },
  issue: {
    title: "Kde nejčastěji narážíte na problémy s padnutím?",
    none: "Žádný konkrétní problém",
    thighs: "Stehna a hýždě",
    chest: "Ramena a hrudník",
    length: "Délky (trup, nohy)",
  },
  anchor: {
    title: "Pokud už neoprenový oblek ve své velikosti máte, jak vám sedí?",
    none: "Nemám / přeskočit",
    fit: "Dobře padne",
    tight: "Příliš těsný",
    loose: "Příliš volný, propouští vodu",
    why: "Tato informace zpřesňuje váš profil měření.",
  },
  results: {
    title: "Doporučení podle značky",
    bottom: "Kalhoty",
    top: "Bunda",
    ratioHW: "Poměr boky/pas",
    ratioTH: "Poměr stehno/boky",
    perZone: "Detail podle oblasti",
  },
  warn: {
    noHips:
      "Tato značka nezveřejňuje dostatek informací o bocích: naše doporučení je zde méně jisté.",
    frontier:
      "U této značky se nacházíte mezi dvěma velikostmi. Pokud je možné vyzkoušet, doporučujeme to.",
    empty: "Pro tuto kategorii zatím nemáme ověřená data.",
    dimMissing: "touto značkou nezveřejněno",
    biased:
      "Tato značka padne v bocích úzce: v případě pochybností jsme pro vás zvolili bezpečnější velikost.",
    splitSizes: "Rozdílné velikosti bundy a kalhot jsou běžný výsledek, nikoli anomálie.",
  },
  feedback: {
    title: "Jak vám to sedí?",
    fit: "Perfektně",
    tight: "Příliš těsné",
    loose: "Příliš velké",
    thanks: "Děkujeme — vaše zpětná vazba zlepšuje doporučení pro všechny typy postavy.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Čtenářská trasa",
    tous: "Vše",
    decouvrir: "Objevit",
    comprendre: "Pochopit",
    approfondir: "Prohloubit",
    expert: "Expert",
    lecture: "Doba čtení",
  },
  disc: {
    mot: "Disciplína",
    toutes: "Vše",
    transversal: "Napříč disciplínami",
    surf: "Surfing",
    "eau-libre": "Otevřená voda / triatlon",
    kite: "Kite / wingfoil",
    ski: "Lyžování / snowboarding",
    harnais: "Trapézy",
    plongee: "Potápění",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Knihovna",
    titre: "Pochopit před nákupem, od prvního nákupu až po odbornost",
    sous: "Velikost a padnutí rozhodují o pohodlí, teple a pohybu — nejen o vzhledu. Každý článek uvádí svou čtenářskou trasu a původ svých zdrojů.",
    compteur: "dostupných článků",
    compteurUn: "dostupný článek",
    vide: "Na této trase pro tuto disciplínu zatím nic nebylo zveřejněno. Plánovaná témata jsou uvedena níže: raději oznámíme připravovaný obsah, než abychom ho aproximovali.",
    lire: "Číst článek",
    replier: "Sbalit",
    sources: "Zdroje",
    prochainement: "Již brzy",
    prochainementTitre: "Plánovaná témata, zatím nezveřejněná",
    vague1: "První vlna",
    vague2: "Druhá vlna",
    calendrier: "Kalendář",
    calendrierTitre: "Šest měsíců produkce, měsíc po měsíci",
    calendrierVideo: "Dlouhé video",
    temps: "Kadence",
    tempsTitre: "Odhadovaná doba výroby",
    tempsArticle: "Článek",
    tempsVideo: "Dlouhé video",
    tempsShort: "Krátký formát",
    teaser: "Znalostní články, od prvního nákupu po materiály: zvolte si svou čtenářskou trasu.",
    metaTitre: "Knihovna — pochopit velikost a padnutí | Sillage",
    metaDesc:
      "Znalostní články od prvního nákupu po odbornost: neopren, lyžování, trapézy. Co je ověřeno, co pochází od značek, co ještě nevíme.",
  },
  reperes: {
    eyebrow: "Vodítka",
    titre: "Pochopit velikosti před výběrem",
    sous: "Co značky skutečně zveřejňují, co nezveřejňují a co to pro vás znamená. Vše zde pochází z ověřených zdrojů, nikdy z odhadu.",
    metaTitre: "Vodítka k velikostem — Sillage",
    metaDesc:
      "Pochopit velikostní tabulky, slovník střihů a způsob měření, abyste vybrali správný neoprenový oblek nebo horské oblečení.",
  },
  nav: {
    trouver: "Najít mou velikost",
    biblio: "Knihovna: od prvního nákupu po odbornost",
    reperes: "Vodítka k velikostním tabulkám",
  },
  langueTexte:
    "Rozhraní a shrnutí jsou přeložena. Text článků zůstává ve francouzštině: raději korekturovaný text než automatický překlad.",
  contenu: {
    flushing: {
      titre: "Příliš velký neoprenový oblek vás ochlazuje: past zvaná flushing",
      chapo: "Neoprenový oblek vás neudrží suché: omezuje výměnu tepla a pohyb vody.",
    },
    "epaules-rame": {
      titre: "Příliš těsný oblek může při pádlování vyčerpat vaše ramena",
      chapo:
        "Příliš malý oblek může stlačovat hrudník nebo omezovat ramena: každý pohyb stojí víc úsilí.",
    },
    "deux-centimetres": {
      titre: "Co může změnit chyba 2 cm",
      chapo:
        "Několik centimetrů se stává rozhodujícími, pokud vás postaví na hranici mezi dvě velikosti.",
    },
    "meme-m": {
      titre: "Proč stejné „M“ neznamená u různých značek totéž",
      chapo:
        "Neexistuje univerzální velikost, která by zaručila, že M znamená všude stejné rozměry.",
    },
    cou: {
      titre: "Těsnost u krku: oblast, kterou velikostní tabulky málokdy popisují",
      chapo:
        "Krk je funkčně důležitá oblast, přesto se jeho obvod ve veřejných velikostních tabulkách objevuje zřídka.",
    },
    "morphologie-a": {
      titre: "Postava do hrušky: proč některé tabulky špatně popisují určité proporce",
      chapo:
        "Plnější boky a stehna s užším pasem: dva lidé se stejnou nominální velikostí mohou potřebovat různé střihy.",
    },
    "pantalon-ski": {
      titre: "Lyžařské kalhoty: proč mohou být boky a stehna omezujícím faktorem",
      chapo:
        "Obvod pasu nestačí: pánev, stehna a délka rozkroku rozhodují o pohyblivosti a způsobu nošení.",
    },
    layering: {
      titre: "Vrstvení na sněhu: kolik místa bez „plavání“ v bundě",
      chapo: "Bunda musí pojmout vaše vrstvy, aniž by byla zbytečně objemná.",
    },
    "compression-triathlon": {
      titre: "Triatlon: užitečná komprese versus škodlivá komprese",
      chapo:
        "Triatlonový oblek je navržen těsně u těla, aniž by výrazně omezoval dýchání nebo pohyb.",
    },
    "harnais-longueur-dos": {
      titre: "Kiteboardingový trapéz: záleží i na délce zad",
      chapo: "Trapéz se nevybírá jen podle obvodu.",
    },
    "epaisseur-ajustement": {
      titre: "Tlustý nebo tenký neopren: tloušťka mění padnutí",
      chapo: "Při srovnatelné konstrukci obvykle zvýšení tloušťky mění vnímanou pružnost.",
    },
    zip: {
      titre: "Zip vzadu, vpředu nebo bez zipu: co to mění na padnutí",
      chapo:
        "Vstupní systém mění konstrukci obleku a může ovlivnit pohyblivost, těsnost a snadnost oblékání.",
    },
    "cinq-erreurs-mesure": {
      titre: "Správné měření: pět chyb, které zkreslí vše",
      chapo: "Chyby obvykle pramení z nestabilního postupu měření, nikoli ze samotného metru.",
    },
    "cout-des-retours": {
      titre: "Špatně padnoucí produkt se obvykle vrací: skutečná cena vrácení",
      chapo: "Velikost a padnutí patří mezi hlavní důvody vrácení oblečení objednaného online.",
    },
    "essayage-et-conseil": {
      titre: "Zkoušení v obchodě a online poradenství: jak je chytře spojit",
      chapo: "Obchod a digitální poradenství si neodporují.",
    },
    "zone-par-zone": {
      titre: "Proč SILLAGE uvažuje po jednotlivých oblastech",
      chapo: "Technický produkt nelze vždy popsat jedinou velikostní kategorií.",
    },
    "statique-dynamique": {
      titre: "Statické padnutí a dynamické padnutí",
      chapo: "Vybavení, které vypadá dobře ve stoje, se může v pohybu chovat jinak.",
    },
    "meme-taille-comportement": {
      titre: "Proč se dva obleky stejné velikosti mohou chovat odlišně",
      chapo: "Písmeno na štítku popisuje jen část geometrie produktu.",
    },
    "donnee-inconnue": {
      titre: "Jak SILLAGE zachází s daty, která nezná",
      chapo: "Chybějící hodnota je sama o sobě informací.",
    },
    "apres-sml": {
      titre: "Za hranicí S, M, L: směrem k vícerozměrnému pohledu na padnutí",
      chapo: "Tradiční velikosti stlačují vícerozměrné tělo do jediné kategorie.",
    },
    "une-grille-par-marque": {
      titre: "Proč značka vydává jedinou tabulku pro celou svou řadu",
      chapo:
        "Téměř každá značka v našich disciplínách zveřejňuje jednu hlavní tabulku pro pohlaví, nikoli jednu na model.",
    },
    "vocabulaire-des-coupes": {
      titre: "Slovník střihů a co skutečně znamená",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: jde o oficiální a použitelné pojmy.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Co velikostní tabulka neříká",
      chapo: "Tabulka udává rozpětí tělesných měr. Neudává materiál, pružnost ani dělení panelů.",
    },
    "bien-mesurer": {
      titre: "Jak správně měřit: pět pravidel, která mění výsledek",
      chapo:
        "Špatně drženy metr posune doporučení o celou velikost. Klíčové oblasti se měří ručně.",
    },
    debuter: {
      titre: "Začínáte? Tři body, které si ujasnit před nákupem",
      chapo: "Správná velikost závisí nejprve na použití, pak na značce.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopren", d: "Neoprenové obleky a produkty pro vodní sporty." },
  B: { l: "Lyžování a snowboarding", d: "Horské oblečení, vrstvy a skořepiny." },
  C: { l: "Trapézy pro vodní sporty", d: "Bederní trapéz, sedací trapéz, celotělový trapéz." },
  "C.fermeture": {
    l: "Tato rodina bude otevřena, jakmile naše data od značek ověřeným způsobem pokryjí výšku zad. Raději nedoporučíme nic, než bychom doporučovali na základě nejistých dat.",
  },
  A1: { l: "Surfing a vlnové sporty", d: "Vlna, longboard, bodyboard." },
  A2: {
    l: "Otevřená voda a triatlon",
    d: "Plavecký pohyb činí volnost ramen prioritním omezením.",
  },
  A3: {
    l: "Kitesurfing, wingfoil a smíšené aktivity",
    d: "Další omezení v pase a bocích kvůli trapézu.",
  },
  A4: { l: "Potápění", d: "Komprese v hloubce činí padnutí trupu a délku nohy rozhodujícími." },
  B0: { l: "Lyžování a snowboarding", d: "Horské oblečení." },
  "A1-integrale": { l: "Celotělový oblek", d: "Dlouhé rukávy a nohavice." },
  "A1-shorty": { l: "Shorty", d: "Krátké rukávy a nohavice." },
  "A1-top": { l: "Top", d: "Pouze horní neoprenová část." },
  "A2-integrale": { l: "Plavecký neoprenový oblek", d: "Celotělový oblek navržený pro plavání." },
  "A3-integrale": { l: "Celotělový oblek", d: "Nošený pod trapézem." },
  "A4-integrale": { l: "Potápěčský oblek", d: "Celotělový mokrý oblek." },
  B1: { l: "Bunda", d: "Skořepinová nebo zateplená bunda." },
  B2: { l: "Kalhoty nebo laclové kalhoty", d: "Hlavní problémová oblast standardních tabulek." },
  B3: { l: "Spodní nebo střední vrstva", d: "Technická spodní vrstva." },
  B4: { l: "Jednodílný oblek", d: "Bunda a kalhoty spojené, další omezení v délce trupu." },
  "q.couches": { l: "Plánujete pod tím nosit střední vrstvu?" },
  "q.couches.fine": { l: "Jedna tenká vrstva" },
  "q.couches.intermediaire": { l: "Jedna tenká vrstva a fleece" },
  "q.couches.epaisse": { l: "Několik silných vrstev" },
  "q.couches.inconnu": { l: "Zatím nevím" },
  "q.frequence": { l: "Jak často provozujete tuto aktivitu?" },
  "q.frequence.occasionnel": { l: "Několik výjezdů ročně" },
  "q.frequence.regulier": { l: "Několikrát měsíčně" },
  "q.frequence.intensif": { l: "Každý týden nebo častěji" },
  "q.temperature": { l: "V jaké vodě nejčastěji trénujete?" },
  "q.temperature.froide": { l: "Studená, pod 15 °C" },
  "q.temperature.temperee": { l: "Mírná, 15 až 20 °C" },
  "q.temperature.chaude": { l: "Teplá, nad 20 °C" },
  "q.preference": { l: "Jaké padnutí preferujete?" },
  "q.preference.proche": { l: "Těsně u těla" },
  "q.preference.neutre": { l: "Bez výrazné preference" },
  "q.preference.aise": { l: "S určitou volností" },
};

export default { core, pages, catalogue };
