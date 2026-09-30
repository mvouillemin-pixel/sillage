type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Méret testalkat szerint",
    tagline: "A megfelelő modell a sportodhoz. A megfelelő méret a testedhez.",
    dataNote: "A gyártók hivatalos méret táblázatai, összegyűjtve és ellenőrizve, sosem kitalálva.",
    langue: "Nyelv",
  },
  steps: {
    progress: "Folyamat",
    s1: "Kiválasztás",
    s2: "Használat",
    s3: "Mérések",
    s4: "Eredmény",
    etape: "Lépés",
  },
  buttons: {
    next: "Folytatás",
    back: "Vissza",
    result: "Eredmény megtekintése",
    restart: "Új keresés",
    pieces: "Termékek megtekintése",
  },
  sel: {
    titre: "A sportod",
    sous: "Válaszd ki a családot, a diszciplínát, majd a terméket. Csak azokat a méreteket kérjük, amelyek fontosak ehhez a termékhez.",
    famille: "Család",
    discipline: "Diszciplína",
    piece: "Termék",
  },
  usage: {
    titre: "A használatod",
    sous: "Néhány rövid kérdés. Ezek határozzák meg a keresett illeszkedést.",
    geneTitre: "Éreztél valaha kellemetlenséget egy korábbi felszerelésnél?",
    geneMulti: "Jelöld be minden érzett kellemetlenséget. Mindegyik csak az adott zóna tűrését szűkíti.",
    jamais: "Még sosem hordtam ilyen típusú terméket",
    oui: "Igen, egy meghatározott helyen",
    ou: "Hol?",
    choisirZone: "Válassz egy területet",
    tropSerre: "Túl szoros",
    tropAmple: "Túl bő",
  },
  mes: {
    titre: "A méréseid",
    sous: "Egy puha mérőszalag elegendő. Az ehhez a termékhez meghatározó területeket kézzel kell megmérni: itt a legkevésbé megbízható az automatikus becslés.",
    determinant: "Meghatározó",
    facultatif: "Nem kötelező",
    sansMesure:
      "E mérés nélkül az ajánlás továbbra is lehetséges, de kevésbé pontos ezen a területen.",
    manque: "Egy vagy több meghatározó mérés hiányzik ehhez a termékhez.",
  },
  zones: {
    c: {
      label: "Mellbőség",
      guide:
        "Vízszintes mérőszalag a mellkas legkiemelkedőbb pontja körül, csak fehérnemű felett. Normál kilégzés, a szalag simán illeszkedjen, ne szorítson.",
    },
    wa: {
      label: "Derékbőség",
      guide:
        "A természetes derékvonalnál, a bordák és a csípő között. Ne húzd be a hasat, lélegezz normálisan.",
    },
    hp: {
      label: "Csípőbőség",
      guide:
        "A csípő és a fenék legkiemelkedőbb pontja körül, összezárt lábakkal. Tükörben ellenőrizd, hogy a szalag vízszintes.",
    },
    th: {
      label: "Combbőség",
      guide:
        "A comb legkiemelkedőbb pontja körül, állva, ellazított lábbal, a testsúly mindkét lábon egyenletesen elosztva.",
    },
    h: {
      label: "Testmagasság",
      guide: "Háttal a falnak, cipő nélkül, sarkak összezárva, tekintet vízszintesen előre.",
    },
    wt: { label: "Testsúly", guide: "Reggel, nehéz ruházat nélkül." },
    ij: {
      label: "Beltéri lábhossz",
      guide: "Az ágyéktól a padlóig, háttal a falnak, cipő nélkül.",
    },
    bl: {
      label: "Hátsó hosszúság",
      guide:
        "A 7. nyakcsigolyától (egy póló nyakkivágásának alapjánál) a csípőcsontig (crista iliaca) mérve.",
    },
    nk: { label: "Nyakbőség", guide: "A nyak alapjánál, vízszintes mérőszalag, ne szorítsd meg." },
    bc: {
      label: "Bicepszbőség",
      guide: "A felkar legkiemelkedőbb pontja körül, ellazítva, a test mellett.",
    },
    sh: {
      label: "Vállszélesség",
      guide: "Az egyik acromiontól a másikig, a felső hát felett, ellazított vállakkal.",
    },
    ws: {
      label: "Kifeszített kartávolság",
      guide:
        "Karok vízszintesen kinyújtva, a középső ujj hegyétől a másik középső ujj hegyéig, háttal a falnak.",
    },
    al: {
      label: "Karhossz",
      guide: "Az acromiontól a csukló hajlatáig, a kar enyhén behajlítva, a kéz a csípőn.",
    },
    tl: {
      label: "Törzshossz",
      guide: "A nyak alapjától, a vállon át, az ágyékig, majd vissza a háton felfelé.",
    },
    ak: {
      label: "Bokabőség",
      guide: "Közvetlenül a bokacsont felett, a talp a padlón, a szalag ne szorítson.",
    },
    dh: {
      label: "Hátmagasság",
      guide: "A csípőcsonttól (crista iliaca) a lebegő oldalsó bordákig, a törzs oldalán, állva.",
    },
    pv: {
      label: "Medencebőség",
      guide:
        "A csípőcsontok (crista iliaca) magasságában, vízszintes szalaggal, ellazított hassal.",
    },
    il: {
      label: "Derékbőség a csípőlapátoknál",
      guide:
        "A szalag pontosan a csípőlapátokra (crista iliaca) helyezve, vízszintesen, összenyomás nélkül.",
    },
  },
  consent: {
    titre: "Az adataid",
    intro:
      "Alapértelmezés szerint ez a munkamenet ideiglenes: méréseid csak a látogatás idejére maradnak a memóriában, és nem kerülnek tárolásra. Semmilyen jelölőnégyzet nincs előre bejelölve.",
    sessionL: "Méréseim felhasználása ehhez az ajánláshoz",
    sessionD: "Szükséges egy azonnali eredmény eléréséhez.",
    profilL: "Profilom megtartása a munkameneten túl is",
    profilD:
      "Hogy egy következő látogatás alkalmával megtaláld a méréseidet. Az elutasítás nem befolyásolja az eredményt.",
    agregeL: "Hozzájárulás, összesített és anonim formában, a szolgáltatás fejlesztéséhez",
    agregeD: "Nincs visszakapcsolás a profilodhoz.",
    marchandL: "A javasolt méret átadása a partner kereskedőnek",
    marchandD: "Csak a méret, sosem a méréseid.",
    droits:
      "A hozzáférés, a helyesbítés, a törlés, az adathordozhatóság és a hozzájárulás visszavonása bármikor elérhető a felületről.",
  },
  res: {
    titre: "Eredmény",
    refusTitre: "Erre még nem tudunk válaszolni",
    refusSuite:
      "Méréseidet figyelembe vettük. Amint egy márka eléri az ehhez a termékhez szükséges lefedettségi követelményünket, az ajánlás elérhetővé válik.",
    indepartageables:
      "Két márka egyformán jól illik. Inkább ezt mondjuk, mint hogy tetszés szerint döntsünk.",
    coupeDeclaree: "Megadott szabás",
    sourceMarque: "márka forrás",
    sourceSecondaire: "másodlagos forrás",
    tracabilite: "E konzultáció nyomon követhetősége",
    referentiel: "Referencia adatok",
    parametres: "Paraméterek",
    horodatage: "Időbélyeg",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Túl szűk", ajuste: "Testhezálló", conforme: "Jó szabás", ample: "Bő" },
  confiance: {
    mot: "Megbízhatóság",
    1: "nagyon alacsony",
    2: "alacsony",
    3: "közepes",
    4: "magas",
    5: "nagyon magas",
  },
  repere: {
    mot: "Ismertető",
    grille: "Miért ad ki egy márka egyetlen méret táblázatot az egész kínálatához",
    mesurer: "Hogyan mérd meg magad helyesen: öt szabály, amely megváltoztatja az eredményt",
    nonDit: "Amit egy méret táblázat nem mond el, és miért írjuk le mi",
  },
  steps2: { profile: "A profilod", measures: "A méréseid", results: "A méreteid" },
  gender: { title: "Használandó táblázatok", m: "Férfi táblázatok", f: "Női táblázatok" },
  disc: {
    title: "Diszciplína",
    surf: "Szörfözés",
    eaulibre: "Triatlon / nyíltvízi úszás",
    plongee: "Merülés / búvárkodás",
    ski: "Sí és snowboard",
    harnais: "Windsurf / kite hám",
    soon: "Hamarosan",
    shoesRun: "Futócipő",
    shoesSki: "Sícipő",
  },
  buttons2: {
    toMeasures: "Tovább a méréseimhez",
    compute: "Méreteim kiszámítása",
    edit: "Méréseim módosítása",
    how: "Hogyan mérjünk",
    hide: "Útmutató elrejtése",
    more: "Tudj meg többet",
    optional: "nem kötelező",
  },
  issue: {
    title: "Hol tapasztalsz leggyakrabban illeszkedési problémákat?",
    none: "Nincs különösebb probléma",
    thighs: "Combok és fenék",
    chest: "Vállak és mellkas",
    length: "Hosszúságok (törzs, lábak)",
  },
  anchor: {
    title: "Ha már van a méretednek megfelelő ruhád, hogy érzed magad benne?",
    none: "Nincs / kihagyás",
    fit: "Jól illeszkedik",
    tight: "Túl szoros",
    loose: "Túl bő, vízbeszivárgás",
    why: "Ez az információ pontosítja a mérési profilodat.",
  },
  results: {
    title: "Márkánkénti ajánlások",
    bottom: "Nadrág",
    top: "Kabát",
    ratioHW: "Csípő/derék arány",
    ratioTH: "Comb/csípő arány",
    perZone: "Részletek terület szerint",
  },
  warn: {
    noHips: "Ez a márka nem közöl elegendő adatot a csípőről: itt kevésbé biztos az ajánlásunk.",
    frontier: "Ennél a márkánál két méret között vagy. Ha van lehetőséged felpróbálni, ajánlott.",
    empty: "Ehhez a kategóriához még nincs ellenőrzött adatunk.",
    dimMissing: "ezt a márka nem közli",
    biased:
      "Ez a márka szorosan szab a csípőnél: kétség esetén a számodra biztosabb méretet választottuk.",
    splitSizes: "Két különböző méret a kabát és a nadrág között normális eredmény, nem hiba.",
  },
  feedback: {
    title: "Jó rád?",
    fit: "Tökéletes",
    tight: "Túl szoros",
    loose: "Túl nagy",
    thanks: "Köszönjük, visszajelzésed javítja az ajánlásokat minden testalkat számára.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Olvasási útvonal",
    tous: "Összes",
    decouvrir: "Felfedezés",
    comprendre: "Megértés",
    approfondir: "Elmélyülés",
    expert: "Szakértő",
    lecture: "Olvasási idő",
  },
  disc: {
    mot: "Diszciplína",
    toutes: "Összes",
    transversal: "Átfogó",
    surf: "Szörfözés",
    "eau-libre": "Nyíltvízi úszás / triatlon",
    kite: "Kite / wingfoil",
    ski: "Sí / snowboard",
    harnais: "Hámok",
    plongee: "Merülés",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Könyvtár",
    titre: "Érts meg mindent vásárlás előtt, az első vásárlástól a szakértelemig",
    sous: "A méret és az illeszkedés dönti el a kényelmet, a meleget és a mozgást — nem csak a megjelenést. Minden cikk jelzi az olvasási útvonalát és a forrásai eredetét.",
    compteur: "elérhető cikk",
    compteurUn: "elérhető cikk",
    vide: "Ebben az útvonalban és diszciplínában még nincs megjelent tartalom. A tervezett témák alább vannak felsorolva: inkább jelezzük az érkező tartalmat, mint hogy közelítő tartalmat közöljünk.",
    lire: "Cikk elolvasása",
    replier: "Összecsukás",
    sources: "Források",
    prochainement: "Hamarosan",
    prochainementTitre: "Tervezett témák, még nem publikálva",
    vague1: "Első hullám",
    vague2: "Második hullám",
    calendrier: "Naptár",
    calendrierTitre: "Hat hónap gyártás, hónapról hónapra",
    calendrierVideo: "Hosszú videó",
    temps: "Ütem",
    tempsTitre: "Becsült gyártási idő",
    tempsArticle: "Cikk",
    tempsVideo: "Hosszú videó",
    tempsShort: "Rövid formátum",
    teaser:
      "Tudás cikkek, az első vásárlástól a nyersanyagokig: válaszd ki az olvasási útvonaladat.",
    metaTitre: "Könyvtár — a méret és illeszkedés megértése | Sillage",
    metaDesc:
      "Tudás cikkek az első vásárlástól a szakértelemig: neoprén, sí, hámok. Amit tudunk biztosan, amit a márkák állítanak, és amit még nem tudunk.",
  },
  reperes: {
    eyebrow: "Ismertetők",
    titre: "Értsd meg a méreteket, mielőtt választasz",
    sous: "Amit a márkák valóban közzétesznek, amit nem, és mit jelent ez számodra. Minden itt szereplő információ rögzített forrásból származik, sosem becslésből.",
    metaTitre: "Méret ismertetők — Sillage",
    metaDesc:
      "Értsd meg a méret táblázatokat, a szabásokra vonatkozó szókincset és a mérés módját, hogy a megfelelő neoprén vagy hegyi ruhát válaszd.",
  },
  nav: {
    trouver: "Méretem megtalálása",
    biblio: "Könyvtár: az első vásárlástól a szakértelemig",
    reperes: "Ismertetők a méret táblázatokról",
  },
  langueTexte:
    "A felület és az összefoglalók le vannak fordítva. A cikkek szövege francia nyelven marad: a lektorált szöveget előnyben részesítjük a gépi fordítással szemben.",
  contenu: {
    flushing: {
      titre: "Ha túl nagy, a ruhád lehűt: a „flushing” csapda",
      chapo: "A neoprén ruha nem tart szárazon: korlátozza a hőcserét és a víz mozgását.",
    },
    "epaules-rame": {
      titre: "Ha túl szoros, kifáraszthatja a vállaidat paddlingnál",
      chapo:
        "Egy túl kicsi ruha összeszoríthatja a mellkast vagy korlátozhatja a vállakat: minden mozdulat többe kerül.",
    },
    "deux-centimetres": {
      titre: "Mit változtathat egy 2 cm-es hiba",
      chapo: "Néhány centiméter döntő jelentőségűvé válik, amikor két méret határára helyez.",
    },
    "meme-m": {
      titre: "Miért nem jelent semmit ugyanaz az „M” márkánként",
      chapo:
        "Nincs olyan egyetemes méret, amely garantálná, hogy egy M mindenhol ugyanazokat a méreteket jelenti.",
    },
    cou: {
      titre: "Nyaki záródás: egy terület, amelyet a méret táblázatok ritkán írnak le",
      chapo:
        "A nyak funkcionálisan fontos terület, mégis a körmérete ritkán jelenik meg a nyilvános méret táblázatokban.",
    },
    "morphologie-a": {
      titre:
        "Körte alakú testforma: miért írnak le rosszul egyes táblázatok bizonyos testarányokat",
      chapo:
        "Teltebb csípő és comb, szűkebb derékkal: két, névlegesen azonos méretű ember más szabást igényelhet.",
    },
    "pantalon-ski": {
      titre: "Sínadrág: miért lehet a csípő és a comb a korlátozó tényező",
      chapo:
        "A derékbőség nem elég: a medence, a comb és a beltéri lábhossz határozza meg a mozgásképességet és a felvehetőséget.",
    },
    layering: {
      titre: "Rétegezés a havon: mennyi hely legyen anélkül, hogy elússz a kabátban",
      chapo:
        "Egy kabátnak be kell fogadnia a rétegeidet anélkül, hogy szükségtelenül testes legyen.",
    },
    "compression-triathlon": {
      titre: "Triatlon: hasznos kompresszió és káros kompresszió",
      chapo:
        "A triatlon ruhát testhezálló kialakítással tervezik, anélkül hogy jelentősen korlátozná a légzést vagy a mozgást.",
    },
    "harnais-longueur-dos": {
      titre: "Kite hám: a hátmagasság is fontos",
      chapo: "Egy hámot nem csak egy körméret alapján választunk.",
    },
    "epaisseur-ajustement": {
      titre: "Vastag vagy vékony neoprén: a vastagság megváltoztatja az illeszkedést",
      chapo:
        "Hasonló felépítés esetén a vastagság növelése általában megváltoztatja az érzett rugalmasságot.",
    },
    zip: {
      titre: "Hátsó, elülső vagy cipzár nélküli belépés: mit változtat az illeszkedésen",
      chapo:
        "A belépési rendszer megváltoztatja a ruha felépítését, és befolyásolhatja a mozgásképességet, a vízzáróságot és a felvehetőséget.",
    },
    "cinq-erreurs-mesure": {
      titre: "Hogyan mérd meg magad helyesen: az öt hiba, amely mindent elront",
      chapo: "A hibák általában egy instabil protokollból, nem a mérőszalagból adódnak.",
    },
    "cout-des-retours": {
      titre: "A rosszul méretezett ruhát gyakran visszaküldik: a visszaküldések valódi költsége",
      chapo: "A méret és az illeszkedés az online ruhavásárlás egyik fő visszaküldési oka.",
    },
    "essayage-et-conseil": {
      titre: "Bolti próba és online tanácsadás: hogyan kombináld intelligensen",
      chapo: "A bolt és a digitális tanácsadás nem áll ellentétben egymással.",
    },
    "zone-par-zone": {
      titre: "Miért gondolkodik a SILLAGE területenként",
      chapo: "Egy technikai ruhadarabot nem lehet mindig egyetlen méretcímkével leírni.",
    },
    "statique-dynamique": {
      titre: "Statikus illeszkedés és dinamikus illeszkedés",
      chapo: "Egy felszerelés, amely állva megfelelőnek tűnik, mozgás közben eltérően viselkedhet.",
    },
    "meme-taille-comportement": {
      titre: "Miért viselkedhet másképp két azonos méretű ruha",
      chapo: "A címkén szereplő betű a termék geometriájának csak egy részét írja le.",
    },
    "donnee-inconnue": {
      titre: "Hogyan kezeli a SILLAGE azt az adatot, amelyet nem ismer",
      chapo: "Egy hiányzó adat maga is információ.",
    },
    "apres-sml": {
      titre: "S, M, L után: az illeszkedés többdimenziós megközelítése felé",
      chapo: "A hagyományos méretek egy többdimenziós testet egyetlen kategóriába szorítanak.",
    },
    "une-grille-par-marque": {
      titre: "Miért ad ki egy márka egyetlen táblázatot az egész kínálatához",
      chapo:
        "A mi diszciplínáinkban szinte minden márka egyetlen fő táblázatot közöl nemenként, nem modellenként.",
    },
    "vocabulaire-des-coupes": {
      titre: "A szabások szókincse, és mit jelentenek valójában",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: ezek hivatalos és használható kifejezések.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Amit egy méret táblázat nem mond el",
      chapo:
        "Egy táblázat testméret tartományokat ad meg. Nem ad meg sem anyagot, sem rugalmasságot, sem szabásvonalakat.",
    },
    "bien-mesurer": {
      titre: "Hogyan mérd meg magad helyesen: öt szabály, amely megváltoztatja az eredményt",
      chapo:
        "Egy rosszul tartott mérőszalag egy teljes mérettel elmozdítja az ajánlást. A meghatározó területeket kézzel mérjük.",
    },
    debuter: {
      titre: "Kezdő vagy? Három iránymutatás vásárlás előtt",
      chapo: "A megfelelő méret elsősorban a használattól, majd a márkától függ.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neoprén", d: "Vízi sportokhoz készült ruhák és termékek." },
  B: { l: "Sí és snowboard", d: "Hegyi ruházat, rétegek és külső kabátok." },
  C: { l: "Vízi sport hámok", d: "Derékhám, ülőhám, trapéz." },
  "C.fermeture": {
    l: "Ez a család akkor nyílik meg, amikor márkaadataink ellenőrzött módon lefedik a hátmagasságot. Inkább nem ajánlunk semmit, mint hogy bizonytalan adatra alapozva ajánljunk.",
  },
  A1: { l: "Szörfözés és hullámsportok", d: "Hullám, longboard, bodyboard." },
  A2: {
    l: "Nyíltvízi úszás és triatlon",
    d: "Az úszómozdulat miatt a vállszabadság az elsődleges korlátozó tényező.",
  },
  A3: {
    l: "Kitesurf, wingfoil és vegyes gyakorlat",
    d: "A hám viselése miatt további korlátozás a deréknál és a csípőnél.",
  },
  A4: {
    l: "Merülés",
    d: "A mélyben ható kompresszió miatt a törzs illeszkedése és a lábhossz döntő fontosságú.",
  },
  B0: { l: "Sí és snowboard", d: "Hegyi termékek." },
  "A1-integrale": { l: "Teljes ruha", d: "Hosszú kar és láb." },
  "A1-shorty": { l: "Shorty", d: "Rövid kar és láb." },
  "A1-top": { l: "Felsőrész", d: "Csak neoprén felsőrész." },
  "A2-integrale": { l: "Úszóruha", d: "Úszásra tervezett teljes ruha." },
  "A3-integrale": { l: "Teljes ruha", d: "Hám alatt viselve." },
  "A4-integrale": { l: "Búvárruha", d: "Nedves teljes ruha." },
  B1: { l: "Kabát", d: "Külső kabát vagy szigetelt kabát." },
  B2: { l: "Nadrág vagy overallnadrág", d: "A szabvány táblázatok fő hibás területe." },
  B3: { l: "Alsó- vagy középréteg", d: "Technikai alsóréteg." },
  B4: {
    l: "Egyrészes overall",
    d: "Kabát és nadrág egyben, további korlátozás a törzshosszon.",
  },
  "q.couches": { l: "Tervez középréteget viselni alatta?" },
  "q.couches.fine": { l: "Egy vékony réteg" },
  "q.couches.intermediaire": { l: "Egy vékony réteg és egy polár" },
  "q.couches.epaisse": { l: "Több vastag réteg" },
  "q.couches.inconnu": { l: "Még nem tudom" },
  "q.frequence": { l: "Milyen gyakran sportolsz?" },
  "q.frequence.occasionnel": { l: "Néhány alkalom évente" },
  "q.frequence.regulier": { l: "Havonta többször" },
  "q.frequence.intensif": { l: "Minden héten vagy gyakrabban" },
  "q.temperature": { l: "Milyen vízben sportolsz leggyakrabban?" },
  "q.temperature.froide": { l: "Hideg, 15 °C alatt" },
  "q.temperature.temperee": { l: "Mérsékelt, 15–20 °C" },
  "q.temperature.chaude": { l: "Meleg, 20 °C felett" },
  "q.preference": { l: "Milyen illeszkedést szeretnél?" },
  "q.preference.proche": { l: "Testhezálló" },
  "q.preference.neutre": { l: "Nincs kifejezett preferencia" },
  "q.preference.aise": { l: "Kényelmes, bővebb" },
};

export default { core, pages, catalogue };
