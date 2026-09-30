type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Maat op basis van lichaamsvorm",
    tagline: "Het juiste model voor uw sport. De juiste maat voor uw lichaam.",
    dataNote: "Officiële maattabellen van fabrikanten, verzameld en geverifieerd, nooit verzonnen.",
    langue: "Taal",
  },
  steps: {
    progress: "Voortgang",
    s1: "Selectie",
    s2: "Gebruik",
    s3: "Maten",
    s4: "Resultaat",
    etape: "Stap",
  },
  buttons: {
    next: "Doorgaan",
    back: "Terug",
    result: "Bekijk het resultaat",
    restart: "Nieuwe zoekopdracht",
    pieces: "Bekijk de artikelen",
  },
  sel: {
    titre: "Uw sport",
    sous: "Kies de familie, de discipline en dan het artikel. We vragen alleen naar de maten die voor dat artikel relevant zijn.",
    famille: "Familie",
    discipline: "Discipline",
    piece: "Artikel",
  },
  usage: {
    titre: "Uw gebruik",
    sous: "Enkele korte vragen. Ze bepalen de gezochte pasvorm.",
    geneTitre: "Had u met eerdere uitrusting last van ongemak?",
    geneMulti: "Vink elk ervaren ongemak aan. Elk ervan verkleint de tolerantie alleen op die zone.",
    jamais: "Ik heb dit type artikel nog nooit gedragen",
    oui: "Ja, op één specifieke plek",
    ou: "Waar?",
    choisirZone: "Kies een zone",
    tropSerre: "Te strak",
    tropAmple: "Te ruim",
  },
  mes: {
    titre: "Uw maten",
    sous: "Een zachte meetlint volstaat. De doorslaggevende zones voor dit artikel worden met de hand gemeten: daar is de automatische schatting het minst betrouwbaar.",
    determinant: "Doorslaggevend",
    facultatif: "Optioneel",
    sansMesure:
      "Zonder deze maat blijft een aanbeveling mogelijk, maar minder nauwkeurig op deze zone.",
    manque: "Er ontbreken een of meer doorslaggevende maten voor dit artikel.",
  },
  zones: {
    c: {
      label: "Borstomvang",
      guide:
        "Meetlint horizontaal om het breedste punt van de borst, uitsluitend over ondergoed. Normaal uitademen, lint aansluitend maar niet strak.",
    },
    wa: {
      label: "Taille-omvang",
      guide:
        "Op de natuurlijke taille, tussen ribben en heupen. Trek uw buik niet in; adem normaal.",
    },
    hp: {
      label: "Heupomvang",
      guide:
        "Om het breedste punt van bekken en zitvlak, voeten tegen elkaar. Controleer in een spiegel of het lint horizontaal ligt.",
    },
    th: {
      label: "Dijomvang",
      guide: "Om het breedste punt van de dij, staand, been ontspannen, gewicht op beide voeten.",
    },
    h: {
      label: "Lichaamslengte",
      guide: "Rug tegen de muur, zonder schoenen, hielen tegen elkaar, blik horizontaal.",
    },
    wt: { label: "Gewicht", guide: "'s Ochtends, zonder zware kleding." },
    ij: {
      label: "Binnenbeenlengte",
      guide: "Van het kruis tot de vloer, rug tegen de muur, zonder schoenen.",
    },
    bl: {
      label: "Ruglengte",
      guide:
        "Van de 7e halswervel (bij de basis van een t-shirtkraag) tot aan de bekkenrand, ter hoogte van het heupbot.",
    },
    nk: {
      label: "Halsomvang",
      guide: "Aan de basis van de hals, meetlint horizontaal, niet aantrekken.",
    },
    bc: {
      label: "Bicepsomvang",
      guide: "Om het breedste punt van de bovenarm, ontspannen langs het lichaam.",
    },
    sh: {
      label: "Schouderbreedte",
      guide:
        "Van het ene schoudergewricht (acromion) naar het andere, over de bovenrug, schouders ontspannen.",
    },
    ws: {
      label: "Armspanwijdte",
      guide:
        "Armen horizontaal gestrekt, van de ene middelvingertop tot de andere, rug tegen een muur.",
    },
    al: {
      label: "Armlengte",
      guide:
        "Van het schoudergewricht (acromion) tot de polsplooi, arm licht gebogen, hand op de heup.",
    },
    tl: {
      label: "Romplengte",
      guide: "Van de basis van de hals, over de schouder, tot aan het kruis en terug over de rug.",
    },
    ak: {
      label: "Enkelomvang",
      guide: "Net boven de enkel, voet plat op de vloer, lint niet aangetrokken.",
    },
    dh: {
      label: "Rughoogte",
      guide: "Van de bekkenrand tot aan de vrije ribben, aan de zijkant van de romp, staand.",
    },
    pv: {
      label: "Bekkenomvang",
      guide: "Ter hoogte van de bekkenranden, meetlint horizontaal, buik ontspannen.",
    },
    il: {
      label: "Taille-omvang ter hoogte van de bekkenranden",
      guide: "Meetlint precies op de bekkenranden geplaatst, horizontaal, zonder compressie.",
    },
  },
  consent: {
    titre: "Uw gegevens",
    intro:
      "Standaard is deze sessie tijdelijk: uw maten blijven alleen tijdens het raadplegen in het geheugen en worden niet bewaard. Er staat geen vakje vooraf aangevinkt.",
    sessionL: "Mijn maten gebruiken voor deze aanbeveling",
    sessionD: "Nodig om nu een resultaat te krijgen.",
    profilL: "Mijn profiel bewaren na deze sessie",
    profilD:
      "Om uw maten bij een volgend bezoek terug te vinden. Weigeren heeft geen gevolgen voor het resultaat.",
    agregeL: "Bijdragen, op geaggregeerde en anonieme wijze, aan de verbetering van de dienst",
    agregeD: "Geen enkele koppeling terug naar uw profiel mogelijk.",
    marchandL: "De aanbevolen maat doorgeven aan de partnerhandelaar",
    marchandD: "Alleen de maat, nooit uw metingen.",
    droits:
      "Toegang, rectificatie, wissing, overdraagbaarheid en intrekking van de toestemming zijn te allen tijde beschikbaar via de interface.",
  },
  res: {
    titre: "Resultaat",
    refusTitre: "We kunnen u nog geen antwoord geven",
    refusSuite:
      "Uw metingen zijn geregistreerd. Zodra een merk voldoet aan onze vereiste dekking voor dit artikel, wordt de aanbeveling beschikbaar.",
    indepartageables:
      "Twee merken passen even goed. We vertellen u dat liever dan willekeurig te beslissen.",
    coupeDeclaree: "Opgegeven pasvorm",
    sourceMarque: "merkbron",
    sourceSecondaire: "secundaire bron",
    tracabilite: "Traceerbaarheid van deze raadpleging",
    referentiel: "Referentiegegevens",
    parametres: "Parameters",
    horodatage: "Tijdstempel",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Te strak", ajuste: "Nauwsluitend", conforme: "Goede pasvorm", ample: "Ruim" },
  confiance: {
    mot: "Betrouwbaarheid",
    1: "zeer laag",
    2: "laag",
    3: "gemiddeld",
    4: "hoog",
    5: "zeer hoog",
  },
  repere: {
    mot: "Achtergrond",
    grille: "Waarom een merk maar één maattabel publiceert voor het hele assortiment",
    mesurer: "Uzelf goed meten: vijf regels die het resultaat veranderen",
    nonDit: "Wat een maattabel niet vertelt, en waarom we dat opschrijven",
  },
  steps2: { profile: "Uw profiel", measures: "Uw maten", results: "Uw maten (resultaat)" },
  gender: { title: "Te gebruiken tabellen", m: "Herentabellen", f: "Damestabellen" },
  disc: {
    title: "Discipline",
    surf: "Surfen",
    eaulibre: "Triatlon / open water",
    plongee: "Duiken / vrijduiken",
    ski: "Ski en snowboard",
    harnais: "Windsurf-/kitetrapeze",
    soon: "Binnenkort",
    shoesRun: "Hardloopschoenen",
    shoesSki: "Skischoenen",
  },
  buttons2: {
    toMeasures: "Verder naar mijn maten",
    compute: "Bereken mijn maten",
    edit: "Mijn maten bewerken",
    how: "Hoe te meten",
    hide: "Instructies verbergen",
    more: "Meer weten",
    optional: "optioneel",
  },
  issue: {
    title: "Waar ondervindt u het vaakst pasvormproblemen?",
    none: "Geen bijzondere moeilijkheid",
    thighs: "Dijen en zitvlak",
    chest: "Schouders en borst",
    length: "Lengtes (romp, benen)",
  },
  anchor: {
    title: "Als u al een pak in uw maat heeft, hoe voelt dat?",
    none: "Ik heb er geen / overslaan",
    fit: "Goed passend",
    tight: "Te strak",
    loose: "Te ruim, water komt binnen",
    why: "Deze informatie verfijnt uw meetprofiel.",
  },
  results: {
    title: "Aanbevelingen per merk",
    bottom: "Broek",
    top: "Jack",
    ratioHW: "Verhouding heup / taille",
    ratioTH: "Verhouding dij / heup",
    perZone: "Detail per zone",
  },
  warn: {
    noHips: "Dit merk geeft onvoldoende informatie over de heup: ons advies is hier minder zeker.",
    frontier: "Bij dit merk zit u tussen twee maten in. Als u kunt passen, is dat aan te raden.",
    empty: "We hebben nog geen geverifieerde gegevens voor deze categorie.",
    dimMissing: "niet gepubliceerd door dit merk",
    biased:
      "Dit merk valt strak uit op de heup: bij twijfel hebben we de veiligere maat voor u gekozen.",
    splitSizes:
      "Verschillende maten voor jack en broek zijn een normaal resultaat, geen afwijking.",
  },
  feedback: {
    title: "Past het goed?",
    fit: "Perfect",
    tight: "Te strak",
    loose: "Te groot",
    thanks: "Bedankt, uw feedback verbetert de adviezen voor alle lichaamsvormen.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Leestraject",
    tous: "Alle",
    decouvrir: "Ontdekken",
    comprendre: "Begrijpen",
    approfondir: "Verdiepen",
    expert: "Expert",
    lecture: "Leestijd",
  },
  disc: {
    mot: "Discipline",
    toutes: "Alle",
    transversal: "Discipline-overkoepelend",
    surf: "Surfen",
    "eau-libre": "Open water / triatlon",
    kite: "Kite / wingfoil",
    ski: "Ski / snowboard",
    harnais: "Trapezes",
    plongee: "Duiken",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Bibliotheek",
    titre: "Begrijpen vóór u koopt, van eerste aankoop tot expertise",
    sous: "Maat en pasvorm bepalen comfort, warmte en beweging — niet alleen het uiterlijk. Elk artikel vermeldt zijn leestraject en de herkomst van zijn bronnen.",
    compteur: "artikelen beschikbaar",
    compteurUn: "artikel beschikbaar",
    vide: "Niets gepubliceerd in dit traject voor deze discipline. De geplande onderwerpen staan hieronder: we kondigen liever toekomstige inhoud aan dan dat we die benaderen.",
    lire: "Artikel lezen",
    replier: "Inklappen",
    sources: "Bronnen",
    prochainement: "Binnenkort",
    prochainementTitre: "Geplande onderwerpen, nog niet gepubliceerd",
    vague1: "Eerste golf",
    vague2: "Tweede golf",
    calendrier: "Kalender",
    calendrierTitre: "Zes maanden productie, maand per maand",
    calendrierVideo: "Lange video",
    temps: "Ritme",
    tempsTitre: "Geschatte productietijd",
    tempsArticle: "Artikel",
    tempsVideo: "Lange video",
    tempsShort: "Kort formaat",
    teaser: "Kennisartikelen, van eerste aankoop tot materialen: kies uw leestraject.",
    metaTitre: "Bibliotheek — maat en pasvorm begrijpen | Sillage",
    metaDesc:
      "Kennisartikelen van eerste aankoop tot expertise: neopreen, ski, trapezes. Wat vaststaat, wat van de merken komt, wat nog onbekend is.",
  },
  reperes: {
    eyebrow: "Achtergrond",
    titre: "Maten begrijpen vóór u kiest",
    sous: "Wat merken werkelijk publiceren, wat niet, en wat dat voor u verandert. Alles hier komt uit geregistreerde bronnen, nooit uit een schatting.",
    metaTitre: "Achtergrond over maten — Sillage",
    metaDesc:
      "Maattabellen, het vocabulaire van pasvormen en hoe u uzelf meet, om het juiste neopreen- of bergartikel te kiezen.",
  },
  nav: {
    trouver: "Mijn maat vinden",
    biblio: "Bibliotheek: van eerste aankoop tot expertise",
    reperes: "Achtergrond over maattabellen",
  },
  langueTexte:
    "Interface en samenvattingen vertaald. De tekst van de artikelen blijft in het Frans: we geven de voorkeur aan een nagelezen tekst boven een automatische vertaling.",
  contenu: {
    flushing: {
      titre: "Te groot koelt uw wetsuit u af: de flushing-valkuil",
      chapo:
        "Een wetsuit houdt u niet droog: het beperkt de warmte-uitwisseling en de waterbeweging.",
    },
    "epaules-rame": {
      titre: "Te strak kan uw schouders uitputten tijdens het peddelen",
      chapo:
        "Een te klein pak kan de borstkas samendrukken of de schouders beperken: elke beweging kost meer kracht.",
    },
    "deux-centimetres": {
      titre: "Wat een fout van 2 cm kan veranderen",
      chapo:
        "Enkele centimeters worden doorslaggevend wanneer ze u op de grens tussen twee maten plaatsen.",
    },
    "meme-m": {
      titre: "Waarom dezelfde “M” van merk tot merk niets betekent",
      chapo:
        "Er bestaat geen universele maat die garandeert dat een M overal dezelfde afmetingen betekent.",
    },
    cou: {
      titre: "Halsafdichting: een zone die maattabellen zelden beschrijven",
      chapo:
        "De hals is een functioneel belangrijke zone, maar de omtrek ervan komt zelden voor in openbare maattabellen.",
    },
    "morphologie-a": {
      titre: "Peervormig lichaam: waarom sommige tabellen bepaalde verhoudingen slecht beschrijven",
      chapo:
        "Voller uitvallende heupen en dijen met een smallere taille: twee mensen met dezelfde nominale maat kunnen andere snitten nodig hebben.",
    },
    "pantalon-ski": {
      titre: "Skibroek: waarom heup en dij de beperkende factor kunnen worden",
      chapo:
        "De taille-omvang alleen is niet genoeg: bekken, dijen en binnenbeenlengte bepalen beweeglijkheid en het aantrekken.",
    },
    layering: {
      titre: "Laagjes in de sneeuw: hoeveel ruimte zonder te zwemmen in uw jack",
      chapo: "Een jack moet uw laagjes herbergen zonder onnodig log te worden.",
    },
    "compression-triathlon": {
      titre: "Triatlon: nuttige compressie versus schadelijke compressie",
      chapo:
        "Een triatlonpak is nauw op het lichaam ontworpen, zonder een grote beperking te worden voor ademhaling of beweging.",
    },
    "harnais-longueur-dos": {
      titre: "Kitetrapeze: de ruglengte telt ook mee",
      chapo: "Een trapeze kiest u niet op basis van een omvang alleen.",
    },
    "epaisseur-ajustement": {
      titre: "Dik versus dun neopreen: de dikte verandert de pasvorm",
      chapo:
        "Bij vergelijkbare constructie verandert een grotere dikte doorgaans de ervaren flexibiliteit.",
    },
    zip: {
      titre: "Ritssluiting op de rug, op de borst of ritsloos: wat dat verandert aan de pasvorm",
      chapo:
        "Het instapsysteem verandert de architectuur van het pak en kan de beweeglijkheid, waterinlaat en het aantrekkemak beïnvloeden.",
    },
    "cinq-erreurs-mesure": {
      titre: "Correct meten: de vijf fouten die alles vervalsen",
      chapo: "Fouten komen meestal voort uit een onstabiele werkwijze, niet uit het meetlint zelf.",
    },
    "cout-des-retours": {
      titre:
        "Een verkeerd gemeten kledingstuk wordt vaak geretourneerd: de echte kosten van retouren",
      chapo:
        "Maat en pasvorm behoren tot de belangrijkste redenen voor retouren bij online kledingaankopen.",
    },
    "essayage-et-conseil": {
      titre: "Passen in de winkel en online advies: slim combineren",
      chapo: "Winkels en digitaal advies staan niet tegenover elkaar.",
    },
    "zone-par-zone": {
      titre: "Waarom SILLAGE per zone redeneert",
      chapo:
        "Een technisch kledingstuk kan niet altijd met één enkele maataanduiding worden beschreven.",
    },
    "statique-dynamique": {
      titre: "Statische pasvorm en dynamische pasvorm",
      chapo:
        "Uitrusting die stilstaand goed lijkt te zitten, kan zich in beweging anders gedragen.",
    },
    "meme-taille-comportement": {
      titre: "Waarom twee pakken van dezelfde maat zich anders kunnen gedragen",
      chapo: "De letter op het label beschrijft slechts een deel van de geometrie van het product.",
    },
    "donnee-inconnue": {
      titre: "Hoe SILLAGE omgaat met een onbekend gegeven",
      chapo: "Een ontbrekende waarde is op zichzelf al informatie.",
    },
    "apres-sml": {
      titre: "Voorbij S, M, L: naar een meerdimensionale weergave van pasvorm",
      chapo: "Traditionele maten persen een meerdimensionaal lichaam in één enkele categorie.",
    },
    "une-grille-par-marque": {
      titre: "Waarom een merk maar één tabel publiceert voor het hele assortiment",
      chapo:
        "Bijna elk merk in onze disciplines publiceert één hoofdtabel per geslacht, niet één per model.",
    },
    "vocabulaire-des-coupes": {
      titre: "Het vocabulaire van pasvormen, en wat het werkelijk betekent",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: dit zijn officiële en bruikbare termen.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Wat een maattabel niet vertelt",
      chapo:
        "Een tabel geeft bereiken van lichaamsmaten. Ze zegt niets over het materiaal, de rek of de paneelindeling.",
    },
    "bien-mesurer": {
      titre: "Uzelf goed meten: vijf regels die het resultaat veranderen",
      chapo:
        "Een slecht gehouden meetlint verschuift de aanbeveling een hele maat. Doorslaggevende zones worden met de hand gemeten.",
    },
    debuter: {
      titre: "Nieuw hierin? Drie ijkpunten voor u koopt",
      chapo: "De juiste maat hangt eerst af van het gebruik, daarna van het merk.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopreen", d: "Wetsuits en artikelen voor watersport." },
  B: { l: "Ski en snowboard", d: "Bergkleding, laagjes en shells." },
  C: {
    l: "Trapezes voor watersport",
    d: "Heuptrapeze, zittrapeze, borsttuig.",
  },
  "C.fermeture": {
    l: "Deze familie gaat open zodra onze merkgegevens de rughoogte op geverifieerde wijze dekken. We bevelen liever niets aan dan iets aan te bevelen op basis van onzekere gegevens.",
  },
  A1: { l: "Surfen en golfsporten", d: "Golf, longboard, bodyboard." },
  A2: {
    l: "Open water en triatlon",
    d: "De zwemslag maakt schoudervrijheid de belangrijkste beperking.",
  },
  A3: {
    l: "Kitesurfen, wingfoil en gemengde beoefening",
    d: "Extra beperking op taille en heup door het dragen van een trapeze.",
  },
  A4: {
    l: "Duiken",
    d: "De druk op diepte maakt de pasvorm van de romp en de beenlengte doorslaggevend.",
  },
  B0: { l: "Ski en snowboard", d: "Bergkleding." },
  "A1-integrale": { l: "Volledig pak", d: "Lange mouwen en pijpen." },
  "A1-shorty": { l: "Shorty", d: "Korte mouwen en pijpen." },
  "A1-top": { l: "Top", d: "Alleen neopreen bovenstuk." },
  "A2-integrale": { l: "Zwempak", d: "Volledig pak gemaakt om te zwemmen." },
  "A3-integrale": { l: "Volledig pak", d: "Gedragen onder een trapeze." },
  "A4-integrale": { l: "Duikpak", d: "Nat volledig pak." },
  B1: { l: "Jack", d: "Shell of geïsoleerd jack." },
  B2: { l: "Broek of overall", d: "De belangrijkste faalzone van standaardtabellen." },
  B3: { l: "Basis- of tussenlaag", d: "Technische onderlaag." },
  B4: {
    l: "Onesie",
    d: "Jack en broek gecombineerd, extra beperking op de romplengte.",
  },
  "q.couches": { l: "Draagt u een midlaag eronder?" },
  "q.couches.fine": { l: "Eén dunne laag" },
  "q.couches.intermediaire": { l: "Eén dunne laag en een fleece" },
  "q.couches.epaisse": { l: "Meerdere dikke lagen" },
  "q.couches.inconnu": { l: "Dat weet ik nog niet" },
  "q.frequence": { l: "Hoe vaak beoefent u deze sport?" },
  "q.frequence.occasionnel": { l: "Enkele keren per jaar" },
  "q.frequence.regulier": { l: "Meerdere keren per maand" },
  "q.frequence.intensif": { l: "Elke week of vaker" },
  "q.temperature": { l: "In welk water beoefent u de sport het vaakst?" },
  "q.temperature.froide": { l: "Koud, onder 15 °C" },
  "q.temperature.temperee": { l: "Gematigd, 15 tot 20 °C" },
  "q.temperature.chaude": { l: "Warm, boven 20 °C" },
  "q.preference": { l: "Welke pasvorm heeft uw voorkeur?" },
  "q.preference.proche": { l: "Nauwsluitend" },
  "q.preference.neutre": { l: "Geen uitgesproken voorkeur" },
  "q.preference.aise": { l: "Met wat ruimte" },
};

export default { core, pages, catalogue };
