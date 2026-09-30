type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Koko vartalotyypin mukaan",
    tagline: "Oikea malli lajillesi. Oikea koko vartalollesi.",
    dataNote:
      "Valmistajien viralliset kokotaulukot, kerätyt ja tarkistetut, ei koskaan keksittyjä.",
    langue: "Kieli",
  },
  steps: {
    progress: "Eteneminen",
    s1: "Valinta",
    s2: "Käyttö",
    s3: "Mitat",
    s4: "Tulos",
    etape: "Vaihe",
  },
  buttons: {
    next: "Jatka",
    back: "Takaisin",
    result: "Näytä tulos",
    restart: "Uusi haku",
    pieces: "Näytä tuotteet",
  },
  sel: {
    titre: "Lajisi",
    sous: "Valitse tuoteryhmä, laji ja sitten tuote. Kysymme vain kyseiselle tuotteelle tärkeät mitat.",
    famille: "Tuoteryhmä",
    discipline: "Laji",
    piece: "Tuote",
  },
  usage: {
    titre: "Käyttösi",
    sous: "Muutama lyhyt kysymys. Ne ohjaavat haettua istuvuutta.",
    geneTitre: "Onko aiemmassa varusteessa ollut epämukavuutta?",
    geneMulti: "Rastita kaikki kokemasi epämukavuudet. Kukin kiristää toleranssia vain kyseisellä alueella.",
    jamais: "En ole koskaan käyttänyt tämäntyyppistä tuotetta",
    oui: "Kyllä, tietyssä kohdassa",
    ou: "Missä?",
    choisirZone: "Valitse alue",
    tropSerre: "Liian tiukka",
    tropAmple: "Liian väljä",
  },
  mes: {
    titre: "Mittasi",
    sous: "Joustava mittanauha riittää. Tämän tuotteen kannalta ratkaisevat alueet mitataan käsin: siellä automaattinen arvio on epäluotettavin.",
    determinant: "Ratkaiseva",
    facultatif: "Valinnainen",
    sansMesure: "Ilman tätä mittaa suositus on yhä mahdollinen, mutta epätarkempi tällä alueella.",
    manque: "Yksi tai useampi tälle tuotteelle ratkaiseva mitta puuttuu.",
  },
  zones: {
    c: {
      label: "Rinnan ympärysmitta",
      guide:
        "Vaakasuora mittanauha rinnan voimakkaimman kohdan ympäri, pelkkien alusvaatteiden päältä. Uloshengitys normaali, nauha napakasti mutta ei tiukasti.",
    },
    wa: {
      label: "Vyötärön ympärysmitta",
      guide:
        "Vyötärön luonnollisessa kavennuksessa, kylkiluiden ja lantion välissä. Älä vedä vatsaa sisään, hengitä normaalisti.",
    },
    hp: {
      label: "Lantion ympärysmitta",
      guide:
        "Lantion ja pakaroiden voimakkaimman kohdan ympäri, jalat yhdessä. Tarkista peilistä, että nauha on vaakasuorassa.",
    },
    th: {
      label: "Reiden ympärysmitta",
      guide:
        "Reiden voimakkaimman kohdan ympäri, seisten, jalka rentona, paino molemmilla jaloilla.",
    },
    h: {
      label: "Pituus",
      guide: "Selkä seinää vasten, ilman kenkiä, kantapäät yhdessä, katse suoraan eteen.",
    },
    wt: { label: "Paino", guide: "Aamulla, ilman raskaita vaatteita." },
    ij: { label: "Sisäjalka", guide: "Haarasta lattiaan, selkä seinää vasten, ilman kenkiä." },
    bl: {
      label: "Selän pituus",
      guide:
        "7. kaulanikamasta (t-paidan kauluksen tyvestä) suoliluun harjanteeseen, lonkkaluun tasolla.",
    },
    nk: {
      label: "Kaulan ympärysmitta",
      guide: "Kaulan tyvestä, vaakasuora nauha, ei liian tiukasti.",
    },
    bc: {
      label: "Hauiksen ympärysmitta",
      guide: "Olkavarren voimakkaimman kohdan ympäri, käsivarsi rentona vartalon sivulla.",
    },
    sh: {
      label: "Hartioiden leveys",
      guide: "Olkalisäkkeestä toiseen, yläselän kautta, hartiat rentoina.",
    },
    ws: {
      label: "Käsien ulottuvuus",
      guide: "Kädet suorina vaakatasossa, keskisormen kärjestä toiseen, selkä seinää vasten.",
    },
    al: {
      label: "Käsivarren pituus",
      guide: "Olkalisäkkeestä ranteen taitteeseen, käsivarsi hieman koukussa, käsi lantiolla.",
    },
    tl: {
      label: "Vartalon pituus",
      guide: "Kaulan tyvestä olkapään yli haaraan asti ja takaisin selkää pitkin ylös.",
    },
    ak: {
      label: "Nilkan ympärysmitta",
      guide: "Juuri kehräsluun yläpuolella, jalka tasaisesti lattialla, nauha ei liian tiukasti.",
    },
    dh: {
      label: "Selän korkeus",
      guide: "Suoliluun harjanteesta alimpiin kylkiluihin, vartalon sivua pitkin, seisten.",
    },
    pv: {
      label: "Lantion ympärysmitta suoliluista",
      guide: "Suoliluiden harjanteiden tasolla, vaakasuora nauha, vatsa rentona.",
    },
    il: {
      label: "Vyötärö suoliluun harjanteilta",
      guide: "Nauha täsmälleen suoliluun harjanteilla, vaakasuorassa, ilman puristusta.",
    },
  },
  consent: {
    titre: "Tietosi",
    intro:
      "Oletuksena tämä istunto on väliaikainen: mittasi pysyvät muistissa vain käynnin ajan eikä niitä tallenneta. Yhtään ruutua ei ole valmiiksi rastitettu.",
    sessionL: "Käytä mittojani tämän suosituksen laatimiseen",
    sessionD: "Tarpeen tuloksen saamiseksi nyt.",
    profilL: "Säilytä profiilini tämän istunnon jälkeen",
    profilD:
      "Jotta löydät mittasi taas seuraavalla käynnillä. Kieltäytyminen ei vaikuta tulokseen.",
    agregeL: "Osallistu koosteisesti ja nimettömästi palvelun kehittämiseen",
    agregeD: "Ei jäljitettävissä takaisin profiiliisi.",
    marchandL: "Välitä suositeltu koko kumppanikauppiaalle",
    marchandD: "Vain koko, ei koskaan mittojasi.",
    droits:
      "Pääsyoikeus, oikaisu, poisto, siirrettävyys ja suostumuksen peruuttaminen ovat käytettävissä milloin tahansa käyttöliittymästä.",
  },
  res: {
    titre: "Tulos",
    refusTitre: "Emme voi vielä vastata sinulle",
    refusSuite:
      "Mittasi on otettu huomioon. Heti kun jokin merkki täyttää kattavuusvaatimuksemme tälle tuotteelle, suositus tulee saataville.",
    indepartageables:
      "Kaksi merkkiä sopivat yhtä hyvin. Kerromme sen mieluummin kuin ratkaisemme asian mielivaltaisesti.",
    coupeDeclaree: "Ilmoitettu leikkaus",
    sourceMarque: "merkin lähde",
    sourceSecondaire: "toissijainen lähde",
    tracabilite: "Tämän haun jäljitettävyys",
    referentiel: "Vertailuaineisto",
    parametres: "Parametrit",
    horodatage: "Aikaleima",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Liian tiukka", ajuste: "Napakka", conforme: "Hyvä istuvuus", ample: "Väljä" },
  confiance: {
    mot: "Luotettavuus",
    "1": "erittäin heikko",
    "2": "heikko",
    "3": "keskitasoinen",
    "4": "korkea",
    "5": "erittäin korkea",
  },
  repere: {
    mot: "Tietopaketti",
    grille: "Miksi merkki julkaisee vain yhden kokotaulukon koko mallistolleen",
    mesurer: "Mittaa itsesi oikein: viisi sääntöä, jotka muuttavat tuloksen",
    nonDit: "Mitä kokotaulukko ei kerro, ja miksi kirjoitamme sen auki",
  },
  steps2: { profile: "Profiilisi", measures: "Mittasi", results: "Kokosi" },
  gender: { title: "Käytettävät taulukot", m: "Miesten taulukot", f: "Naisten taulukot" },
  disc: {
    title: "Laji",
    surf: "Surffaus",
    eaulibre: "Triathlon / avovesi",
    plongee: "Sukellus",
    ski: "Laskettelu ja lumilautailu",
    harnais: "Purjelauta- / leija-valjaat",
    soon: "Tulossa pian",
    shoesRun: "Juoksukengät",
    shoesSki: "Laskettelukengät",
  },
  buttons2: {
    toMeasures: "Jatka mittoihini",
    compute: "Laske kokoni",
    edit: "Muokkaa mittojani",
    how: "Näin mittaat",
    hide: "Piilota ohjeet",
    more: "Lue lisää",
    optional: "valinnainen",
  },
  issue: {
    title: "Missä sinulla on useimmiten istuvuusongelmia?",
    none: "Ei erityisiä vaikeuksia",
    thighs: "Reidet ja pakarat",
    chest: "Hartiat ja rinta",
    length: "Pituudet (vartalo, jalat)",
  },
  anchor: {
    title: "Jos sinulla on jo omassa koossasi oleva märkäpuku, miltä se tuntuu?",
    none: "Minulla ei ole / ohita",
    fit: "Istuu hyvin",
    tight: "Liian tiukka",
    loose: "Liian väljä, vettä pääsee sisään",
    why: "Tämä tieto tarkentaa mittaprofiiliasi.",
  },
  results: {
    title: "Merkkikohtaiset suositukset",
    bottom: "Housut",
    top: "Takki",
    ratioHW: "Lantio/vyötärö-suhde",
    ratioTH: "Reisi/lantio-suhde",
    perZone: "Erittely alueittain",
  },
  warn: {
    noHips: "Tämä merkki ei julkaise riittävästi tietoa lantiosta: neuvomme on tässä epävarmempi.",
    frontier: "Olet tämän merkin kahden koon rajalla. Jos voit sovittaa, suosittelemme sitä.",
    empty: "Meillä ei vielä ole varmennettua tietoa tästä kategoriasta.",
    dimMissing: "ei tämän merkin julkaisema",
    biased:
      "Tämä merkki istuu tiukasti lantiolta: epäselvässä tilanteessa valitsimme sinulle varmemman koon.",
    splitSizes: "Eri koot takissa ja housuissa on normaali tulos, ei virhe.",
  },
  feedback: {
    title: "Sopiiko se?",
    fit: "Täydellinen",
    tight: "Liian tiukka",
    loose: "Liian iso",
    thanks: "Kiitos — palautteesi parantaa neuvoja kaikille vartalotyypeille.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Lukupolku",
    tous: "Kaikki",
    decouvrir: "Tutustu",
    comprendre: "Ymmärrä",
    approfondir: "Syvenny",
    expert: "Asiantuntija",
    lecture: "Lukuaika",
  },
  disc: {
    mot: "Laji",
    toutes: "Kaikki",
    transversal: "Lajirajat ylittävä",
    surf: "Surffaus",
    "eau-libre": "Avovesi / triathlon",
    kite: "Leijalautailu / wingfoil",
    ski: "Laskettelu / lumilautailu",
    harnais: "Valjaat",
    plongee: "Sukellus",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Kirjasto",
    titre: "Ymmärrä ennen ostoa, ensiostosta asiantuntijuuteen",
    sous: "Koko ja istuvuus ratkaisevat mukavuuden, lämmön ja liikkeen — eivät vain ulkonäön. Jokainen artikkeli ilmoittaa lukupolkunsa ja lähteidensä alkuperän.",
    compteur: "artikkelia saatavilla",
    compteurUn: "artikkeli saatavilla",
    vide: "Tässä lukupolussa ei ole vielä julkaisua tälle lajille. Suunnitellut aiheet on lueteltu alla: ilmoitamme mieluummin tulevasta sisällöstä kuin arvaamme sitä.",
    lire: "Lue artikkeli",
    replier: "Sulje",
    sources: "Lähteet",
    prochainement: "Tulossa",
    prochainementTitre: "Suunnitellut aiheet, ei vielä julkaistu",
    vague1: "Ensimmäinen aalto",
    vague2: "Toinen aalto",
    calendrier: "Aikataulu",
    calendrierTitre: "Kuusi kuukautta tuotantoa, kuukausi kerrallaan",
    calendrierVideo: "Pitkä video",
    temps: "Tahti",
    tempsTitre: "Arvioitu tuotantoaika",
    tempsArticle: "Artikkeli",
    tempsVideo: "Pitkä video",
    tempsShort: "Lyhytmuoto",
    teaser: "Tietoartikkeleita ensiostosta materiaaleihin: valitse lukupolkusi.",
    metaTitre: "Kirjasto — koon ja istuvuuden ymmärtäminen | Sillage",
    metaDesc:
      "Tietoartikkeleita ensiostosta asiantuntijuuteen: kumipuku, laskettelu, valjaat. Mikä on vahvistettua, mikä tulee merkeiltä, mitä ei vielä tiedetä.",
  },
  reperes: {
    eyebrow: "Perusteet",
    titre: "Ymmärrä koot ennen valintaa",
    sous: "Mitä merkit todella julkaisevat, mitä ne eivät julkaise, ja mitä se muuttaa sinulle. Kaikki tässä perustuu kerättyihin lähteisiin, ei koskaan arvioon.",
    metaTitre: "Kokoperusteet — Sillage",
    metaDesc:
      "Ymmärrä kokotaulukot, leikkaussanasto ja mittaustapa, jotta valitset oikean kumipuvun tai vuoristovaatteen.",
  },
  nav: {
    trouver: "Löydä kokoni",
    biblio: "Kirjasto: ensiostosta asiantuntijuuteen",
    reperes: "Perusteet kokotaulukoista",
  },
  langueTexte:
    "Käyttöliittymä ja tiivistelmät on käännetty. Artikkelien runkoteksti pysyy ranskaksi: suosimme tarkistettua tekstiä konekäännöksen sijaan.",
  contenu: {
    flushing: {
      titre: "Liian iso puku jäähdyttää sinua: flushing-ansa",
      chapo: "Märkäpuku ei pidä sinua kuivana: se rajoittaa lämmönvaihtoa ja veden liikettä.",
    },
    "epaules-rame": {
      titre: "Liian tiukka puku voi väsyttää hartiat meloessa",
      chapo:
        "Liian pieni puku voi puristaa rintakehää tai rajoittaa hartioita: jokainen liike maksaa enemmän.",
    },
    "deux-centimetres": {
      titre: "Mitä 2 cm virhe voi muuttaa",
      chapo: "Muutama senttimetri ratkaisee, kun ne asettavat sinut kahden koon rajalle.",
    },
    "meme-m": {
      titre: "Miksi sama ”M” ei tarkoita samaa merkistä toiseen",
      chapo: "Ei ole universaalia kokoa, joka takaisi saman mitan M-koossa kaikkialla.",
    },
    cou: {
      titre: "Kaulan tiiviys: alue, jota kokotaulukot harvoin kuvaavat",
      chapo:
        "Kaula on toiminnallisesti tärkeä alue, mutta sen ympärysmitta esiintyy harvoin julkisissa kokotaulukoissa.",
    },
    "morphologie-a": {
      titre: "Päärynävartalo: miksi jotkin taulukot kuvaavat tiettyjä mittasuhteita huonosti",
      chapo:
        "Pyöreämmät lantio ja reidet kapeamman vyötärön kanssa: kaksi samaa nimelliskokoa olevaa ihmistä voi tarvita eri leikkauksen.",
    },
    "pantalon-ski": {
      titre: "Lasketteluhousut: miksi lantio ja reidet voivat olla rajoittava tekijä",
      chapo:
        "Vyötärön ympärysmitta ei riitä: lantio, reidet ja sisäjalka määräävät liikkuvuuden ja pukemisen.",
    },
    layering: {
      titre: "Kerrospukeutuminen lumella: kuinka paljon tilaa ilman uimista takissa",
      chapo: "Takin täytyy mahduttaa kerroksesi tulematta tarpeettoman tilavaksi.",
    },
    "compression-triathlon": {
      titre: "Triathlon: hyödyllinen puristus vastaan haitallinen puristus",
      chapo:
        "Triathlonpuku on suunniteltu istumaan tiiviisti ilman, että se rajoittaa merkittävästi hengitystä tai liikettä.",
    },
    "harnais-longueur-dos": {
      titre: "Leijavaljaat: myös selän pituudella on väliä",
      chapo: "Valjaita ei valita pelkän ympärysmitan perusteella.",
    },
    "epaisseur-ajustement": {
      titre: "Paksu vai ohut kumi: paksuus muuttaa istuvuuden",
      chapo:
        "Vastaavalla rakenteella paksuuden kasvattaminen yleensä muuttaa koettua joustavuutta.",
    },
    zip: {
      titre: "Selkävetoketju, rintavetoketju vai ilman: mitä se muuttaa istuvuudessa",
      chapo:
        "Sisäänmenojärjestelmä muuttaa puvun rakennetta ja voi vaikuttaa liikkuvuuteen, veden pääsyyn ja pukemisen helppouteen.",
    },
    "cinq-erreurs-mesure": {
      titre: "Mittaa oikein: viisi virhettä, jotka vääristävät kaiken",
      chapo: "Virheet johtuvat yleensä epävakaasta mittaustavasta, ei mittanauhasta itsestään.",
    },
    "cout-des-retours": {
      titre: "Väärän kokoinen vaate päätyy usein palautukseen: palautusten todellinen hinta",
      chapo: "Koko ja istuvuus ovat verkkokaupan vaatepalautusten yleisimpiä syitä.",
    },
    "essayage-et-conseil": {
      titre: "Sovitus myymälässä ja neuvonta verkossa: yhdistä ne fiksusti",
      chapo: "Myymälät ja digitaalinen neuvonta eivät ole vastakkaisia.",
    },
    "zone-par-zone": {
      titre: "Miksi SILLAGE arvioi alue kerrallaan",
      chapo: "Teknistä vaatetta ei aina voi kuvata yhdellä kokomerkinnällä.",
    },
    "statique-dynamique": {
      titre: "Staattinen istuvuus ja dynaaminen istuvuus",
      chapo: "Paikallaan sopivalta tuntuva varuste voi käyttäytyä eri tavalla liikkeessä.",
    },
    "meme-taille-comportement": {
      titre: "Miksi kaksi saman kokoista pukua voi käyttäytyä eri tavalla",
      chapo: "Etiketin kirjain kuvaa vain osan tuotteen geometriasta.",
    },
    "donnee-inconnue": {
      titre: "Miten SILLAGE käsittelee tuntematonta tietoa",
      chapo: "Puuttuva arvo on itsessään tietoa.",
    },
    "apres-sml": {
      titre: "S:n, M:n ja L:n jälkeen: kohti moniulotteista näkemystä istuvuudesta",
      chapo: "Perinteiset koot puristavat moniulotteisen vartalon yhteen kategoriaan.",
    },
    "une-grille-par-marque": {
      titre: "Miksi merkki julkaisee vain yhden kokotaulukon koko mallistolleen",
      chapo:
        "Lähes jokainen merkki lajeissamme julkaisee yhden päätaulukon sukupuolta kohden, ei yhtä per malli.",
    },
    "vocabulaire-des-coupes": {
      titre: "Leikkaussanasto ja mitä se todella tarkoittaa",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: nämä ovat virallisia ja käyttökelpoisia termejä.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Mitä kokotaulukko ei kerro sinulle",
      chapo:
        "Taulukko antaa vartalomittojen vaihteluvälit. Se ei kerro materiaalista, joustosta eikä paloittelusta.",
    },
    "bien-mesurer": {
      titre: "Mittaa itsesi oikein: viisi sääntöä, jotka muuttavat tuloksen",
      chapo:
        "Huonosti pidetty mittanauha siirtää suosituksen kokonaisen koon verran. Ratkaisevat alueet mitataan käsin.",
    },
    debuter: {
      titre: "Aloittelija? Kolme kiintopistettä ennen ostoa",
      chapo: "Oikea koko riippuu ensin käytöstä, sitten merkistä.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Kumipuvut", d: "Märkäpuvut ja vesiurheiluvarusteet." },
  B: { l: "Laskettelu ja lumilautailu", d: "Vuoristovaatteet, kerrokset ja kuoret." },
  C: {
    l: "Vesiurheiluvaljaat",
    d: "Vyövaljaat, istumavaljaat, trapetsi.",
  },
  "C.fermeture": {
    l: "Tämä tuoteryhmä avataan, kun merkkitietomme kattaa selän korkeuden luotettavasti. Suosittelemme mieluummin ei mitään kuin suosittelisimme epävarman tiedon pohjalta.",
  },
  A1: { l: "Surffaus ja aaltolajit", d: "Aallot, pitkälauta, bodyboard." },
  A2: {
    l: "Avovesi ja triathlon",
    d: "Uintiliike tekee hartioiden liikkuvuudesta tärkeimmän rajoitteen.",
  },
  A3: {
    l: "Leijalautailu, wingfoil ja sekakäyttö",
    d: "Valjaiden käyttö lisää rajoitteita vyötärölle ja lantiolle.",
  },
  A4: {
    l: "Sukellus",
    d: "Syvyyden puristus tekee vartalon istuvuudesta ja jalan pituudesta ratkaisevia.",
  },
  B0: { l: "Laskettelu ja lumilautailu", d: "Vuoristovaatteet." },
  "A1-integrale": { l: "Kokopuku", d: "Pitkät hihat ja lahkeet." },
  "A1-shorty": { l: "Shorty", d: "Lyhyet hihat ja lahkeet." },
  "A1-top": { l: "Yläosa", d: "Pelkkä kumipuvun yläosa." },
  "A2-integrale": { l: "Uintipuku", d: "Uintiin suunniteltu kokopuku." },
  "A3-integrale": { l: "Kokopuku", d: "Käytetään valjaiden alla." },
  "A4-integrale": { l: "Sukelluspuku", d: "Märkäkokopuku." },
  B1: { l: "Takki", d: "Kuoritakki tai vuorillinen takki." },
  B2: { l: "Housut tai ylälappuhousut", d: "Vakiotaulukoiden yleisin virhealue." },
  B3: { l: "Aluskerros tai välikerros", d: "Tekninen alusvaate." },
  B4: {
    l: "Yksiosainen puku",
    d: "Takki ja housut yhdessä, lisärajoite vartalon pituudelle.",
  },
  "q.couches": { l: "Aiotko käyttää välikerrosta alla?" },
  "q.couches.fine": { l: "Yksi ohut kerros" },
  "q.couches.intermediaire": { l: "Ohut kerros ja fleece" },
  "q.couches.epaisse": { l: "Useita paksuja kerroksia" },
  "q.couches.inconnu": { l: "En tiedä vielä" },
  "q.frequence": { l: "Kuinka usein harrastat?" },
  "q.frequence.occasionnel": { l: "Muutama kerta vuodessa" },
  "q.frequence.regulier": { l: "Useita kertoja kuukaudessa" },
  "q.frequence.intensif": { l: "Joka viikko tai useammin" },
  "q.temperature": { l: "Missä vedessä harrastat useimmiten?" },
  "q.temperature.froide": { l: "Kylmä, alle 15 °C" },
  "q.temperature.temperee": { l: "Lauhkea, 15–20 °C" },
  "q.temperature.chaude": { l: "Lämmin, yli 20 °C" },
  "q.preference": { l: "Millaisen istuvuuden haluat?" },
  "q.preference.proche": { l: "Tiiviisti vartalolla" },
  "q.preference.neutre": { l: "Ei erityistä toivetta" },
  "q.preference.aise": { l: "Hieman väljä" },
};

export default { core, pages, catalogue };
