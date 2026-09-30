type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Storlek efter kroppsform",
    tagline: "Rätt modell för din aktivitet. Rätt storlek för din kropp.",
    dataNote:
      "Officiella storlekstabeller från tillverkarna, insamlade och verifierade, aldrig påhittade.",
    langue: "Språk",
  },
  steps: {
    progress: "Framsteg",
    s1: "Val",
    s2: "Användning",
    s3: "Mått",
    s4: "Resultat",
    etape: "Steg",
  },
  buttons: {
    next: "Fortsätt",
    back: "Tillbaka",
    result: "Se resultatet",
    restart: "Ny sökning",
    pieces: "Se produkterna",
  },
  sel: {
    titre: "Din aktivitet",
    sous: "Välj familj, disciplin och sedan produkt. Vi frågar bara om mått som är viktiga för den produkten.",
    famille: "Familj",
    discipline: "Disciplin",
    piece: "Produkt",
  },
  usage: {
    titre: "Din användning",
    sous: "Några korta frågor. De styr vilken passform vi söker.",
    geneTitre: "Kände du obehag med tidigare utrustning?",
    geneMulti: "Kryssa i allt obehag du känt. Varje val skärper toleransen enbart i den zonen.",
    jamais: "Jag har aldrig använt den här typen av produkt",
    oui: "Ja, på ett specifikt ställe",
    ou: "Var?",
    choisirZone: "Välj ett område",
    tropSerre: "För tight",
    tropAmple: "För rymlig",
  },
  mes: {
    titre: "Dina mått",
    sous: "Ett mjukt måttband räcker. De avgörande områdena för denna produkt mäts för hand: det är där automatiska uppskattningar är minst tillförlitliga.",
    determinant: "Avgörande",
    facultatif: "Valfritt",
    sansMesure:
      "Utan detta mått är en rekommendation fortfarande möjlig, men mindre exakt i detta område.",
    manque: "Ett eller flera avgörande mått saknas för denna produkt.",
  },
  zones: {
    c: {
      label: "Bröstomfång",
      guide:
        "Måttbandet vågrätt runt den bredaste delen av bröstet, endast över underkläder. Andas ut normalt; bandet tätt men inte åtstramat.",
    },
    wa: {
      label: "Midjeomfång",
      guide:
        "Vid den naturliga midjan, mellan revben och höfter. Dra inte in magen; andas normalt.",
    },
    hp: {
      label: "Höftomfång",
      guide:
        "Runt den bredaste delen av höfter och säte, fötterna ihop. Kontrollera i en spegel att bandet är vågrätt.",
    },
    th: {
      label: "Låromfång",
      guide:
        "Runt den bredaste delen av låret, stående, benet avslappnat, vikten på båda fötterna.",
    },
    h: { label: "Längd", guide: "Ryggen mot väggen, utan skor, hälarna ihop, blicken rakt fram." },
    wt: { label: "Vikt", guide: "På morgonen, utan tunga kläder." },
    ij: {
      label: "Innerbenslängd",
      guide: "Från grenen till golvet, ryggen mot väggen, utan skor.",
    },
    bl: {
      label: "Rygglängd",
      guide:
        "Från 7:e halskotan (vid kanten av en t-shirtkrage) ner till höftbenskammen, i höjd med höftbenet.",
    },
    nk: { label: "Halsomfång", guide: "Vid halsens bas, måttbandet vågrätt, utan åtstramning." },
    bc: {
      label: "Bicepsomfång",
      guide: "Runt den bredaste delen av överarmen, avslappnad längs kroppen.",
    },
    sh: {
      label: "Axelbredd",
      guide:
        "Från ena axelutskottet till det andra, över övre delen av ryggen, axlarna avslappnade.",
    },
    ws: {
      label: "Spännvidd",
      guide:
        "Armarna raka i vågrätt läge, från långfingertoppen till långfingertoppen, ryggen mot väggen.",
    },
    al: {
      label: "Armlängd",
      guide: "Från axelutskottet till handledsvecket, armen lätt böjd, handen på höften.",
    },
    tl: {
      label: "Bålens längd",
      guide: "Från halsens bas, över axeln, ner till grenen och tillbaka upp längs ryggen.",
    },
    ak: {
      label: "Vristomfång",
      guide: "Precis ovanför ankelknölen, foten platt på golvet, bandet utan åtstramning.",
    },
    dh: {
      label: "Rygghöjd",
      guide: "Från höftbenskammen till de flytande revbenen, längs bålens sida, stående.",
    },
    pv: {
      label: "Bäckenomfång",
      guide: "I höjd med höftbenskammarna, måttbandet vågrätt, magen avslappnad.",
    },
    il: {
      label: "Midja vid höftbenskammarna",
      guide: "Bandet placerat exakt på höftbenskammarna, vågrätt, utan att pressa.",
    },
  },
  consent: {
    titre: "Dina uppgifter",
    intro:
      "Som standard är denna session tillfällig: dina mått ligger kvar i minnet under besöket och sparas inte. Ingen ruta är förikryssad.",
    sessionL: "Använda mina mått för denna rekommendation",
    sessionD: "Krävs för att få ett resultat nu.",
    profilL: "Behålla min profil efter sessionen",
    profilD: "För att hitta dina mått igen vid nästa besök. Att avböja påverkar inte resultatet.",
    agregeL: "Bidra, i sammanställd och anonym form, till att förbättra tjänsten",
    agregeD: "Ingen koppling tillbaka till din profil.",
    marchandL: "Dela den rekommenderade storleken med partnerbutiken",
    marchandD: "Endast storleken, aldrig dina mått.",
    droits:
      "Åtkomst, rättelse, radering, dataportabilitet och återkallande av samtycke är tillgängliga när som helst i gränssnittet.",
  },
  res: {
    titre: "Resultat",
    refusTitre: "Vi kan inte svara dig än",
    refusSuite:
      "Dina mått har tagits med i beräkningen. Så snart ett märke uppfyller vårt täckningskrav för denna produkt blir rekommendationen tillgänglig.",
    indepartageables:
      "Två märken passar lika bra. Vi föredrar att säga det istället för att avgöra godtyckligt.",
    coupeDeclaree: "Angiven passform",
    sourceMarque: "källa från märket",
    sourceSecondaire: "sekundär källa",
    tracabilite: "Spårbarhet för denna konsultation",
    referentiel: "Referensdata",
    parametres: "Parametrar",
    horodatage: "Tidsstämpel",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "För trång", ajuste: "Nära kroppen", conforme: "Bra passform", ample: "Rymlig" },
  confiance: {
    mot: "Tillförlitlighet",
    1: "mycket låg",
    2: "låg",
    3: "medel",
    4: "hög",
    5: "mycket hög",
  },
  repere: {
    mot: "Referens",
    grille: "Varför ett märke publicerar en enda tabell för hela sitt sortiment",
    mesurer: "Att mäta sig rätt: fem regler som ändrar resultatet",
    nonDit: "Vad en storlekstabell inte säger, och varför vi skriver det",
  },
  steps2: { profile: "Din profil", measures: "Dina mått", results: "Dina storlekar" },
  gender: { title: "Tabeller att använda", m: "Herrtabeller", f: "Damtabeller" },
  disc: {
    title: "Disciplin",
    surf: "Surfing",
    eaulibre: "Triathlon / öppet vatten",
    plongee: "Dykning / fridykning",
    ski: "Skidåkning och snowboard",
    harnais: "Sele för windsurfing / kite",
    soon: "Kommer snart",
    shoesRun: "Löparskor",
    shoesSki: "Pjäxor",
  },
  buttons2: {
    toMeasures: "Fortsätt till mina mått",
    compute: "Beräkna mina storlekar",
    edit: "Ändra mina mått",
    how: "Så mäter du",
    hide: "Dölj instruktioner",
    more: "Läs mer",
    optional: "valfritt",
  },
  issue: {
    title: "Var har du oftast passformsproblem?",
    none: "Inga särskilda problem",
    thighs: "Lår och säte",
    chest: "Axlar och bröst",
    length: "Längder (bål, ben)",
  },
  anchor: {
    title: "Om du redan äger en våtdräkt i din storlek, hur känns den?",
    none: "Jag äger ingen / hoppa över",
    fit: "Sitter bra",
    tight: "För tight",
    loose: "För rymlig, vatten läcker in",
    why: "Denna information förfinar din mätprofil.",
  },
  results: {
    title: "Rekommendationer per märke",
    bottom: "Byxor",
    top: "Jacka",
    ratioHW: "Förhållande höft / midja",
    ratioTH: "Förhållande lår / höft",
    perZone: "Detaljer per område",
  },
  warn: {
    noHips:
      "Detta märke publicerar inte tillräckligt med information om höfter: vår rekommendation är mer osäker här.",
    frontier:
      "Du är mellan två storlekar hos detta märke. Om du kan prova plagget rekommenderar vi det.",
    empty: "Vi har ännu inga verifierade data för denna kategori.",
    dimMissing: "inte publicerat av detta märke",
    biased:
      "Detta märke sitter tight över höfterna: vid tvekan har vi valt den säkrare storleken åt dig.",
    splitSizes: "Olika storlekar för jacka och byxor är ett normalt resultat, inte en avvikelse.",
  },
  feedback: {
    title: "Hur passar det?",
    fit: "Perfekt",
    tight: "För tight",
    loose: "För stort",
    thanks: "Tack — din feedback förbättrar råden för alla kroppsformer.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Läsväg",
    tous: "Alla",
    decouvrir: "Upptäck",
    comprendre: "Förstå",
    approfondir: "Fördjupa",
    expert: "Expert",
    lecture: "Lästid",
  },
  disc: {
    mot: "Disciplin",
    toutes: "Alla",
    transversal: "Tvärgående",
    surf: "Surfing",
    "eau-libre": "Öppet vatten / triathlon",
    kite: "Kite / wingfoil",
    ski: "Skidor / snowboard",
    harnais: "Selar",
    plongee: "Dykning",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Bibliotek",
    titre: "Förstå innan du köper, från första köpet till expertis",
    sous: "Storlek och passform avgör komfort, värme och rörelse — inte bara utseendet. Varje artikel anger sin läsväg och källornas ursprung.",
    compteur: "artiklar tillgängliga",
    compteurUn: "artikel tillgänglig",
    vide: "Inget publicerat i denna läsväg för denna disciplin. Planerade ämnen listas nedan: vi föredrar att meddela kommande innehåll än att approximera det.",
    lire: "Läs artikeln",
    replier: "Fäll ihop",
    sources: "Källor",
    prochainement: "Kommer snart",
    prochainementTitre: "Planerade ämnen, ännu ej publicerade",
    vague1: "Första vågen",
    vague2: "Andra vågen",
    calendrier: "Kalender",
    calendrierTitre: "Sex månaders produktion, månad för månad",
    calendrierVideo: "Lång video",
    temps: "Takt",
    tempsTitre: "Uppskattad produktionstid",
    tempsArticle: "Artikel",
    tempsVideo: "Lång video",
    tempsShort: "Kortformat",
    teaser: "Kunskapsartiklar, från första köpet till material: välj din läsväg.",
    metaTitre: "Bibliotek — förstå storlek och passform | Sillage",
    metaDesc:
      "Kunskapsartiklar från första köpet till expertis: våtdräkter, skidor, selar. Vad som är fastställt, vad som kommer från märken, vad vi ännu inte vet.",
  },
  reperes: {
    eyebrow: "Grunder",
    titre: "Förstå storlekar innan du väljer",
    sous: "Vad märkena faktiskt publicerar, vad de inte publicerar, och vad det ändrar för dig. Allt här kommer från registrerade källor, aldrig från en uppskattning.",
    metaTitre: "Storleksgrunder — Sillage",
    metaDesc:
      "Förstå storlekstabeller, passformsvokabulär och hur du mäter dig, för att välja rätt våtdräkt eller bergsplagg.",
  },
  nav: {
    trouver: "Hitta min storlek",
    biblio: "Bibliotek: från första köpet till expertis",
    reperes: "Grunder om storlekstabeller",
  },
  langueTexte:
    "Gränssnitt och sammanfattningar är översatta. Artikeltexten förblir på franska: vi föredrar en korrekturläst text framför maskinöversättning.",
  contenu: {
    flushing: {
      titre: "För stor, din våtdräkt kyler ner dig: flushing-fällan",
      chapo: "En våtdräkt håller dig inte torr: den begränsar värmeutbyte och vattenrörelse.",
    },
    "epaules-rame": {
      titre: "För tight kan den utmatta dina axlar när du paddlar",
      chapo:
        "En för liten våtdräkt kan pressa bröstkorgen eller begränsa axlarna: varje rörelse kostar mer.",
    },
    "deux-centimetres": {
      titre: "Vad ett fel på 2 cm kan förändra",
      chapo: "Några centimeter blir avgörande när de placerar dig på gränsen mellan två storlekar.",
    },
    "meme-m": {
      titre: 'Varför samma "M" inte betyder något från ett märke till ett annat',
      chapo:
        "Det finns ingen universell storlek som garanterar att en M motsvarar samma mått överallt.",
    },
    cou: {
      titre: "Tätning vid halsen: ett område som sällan beskrivs i storlekstabeller",
      chapo:
        "Halsen är ett funktionellt viktigt område, men dess omkrets visas sällan i offentliga storlekstabeller.",
    },
    "morphologie-a": {
      titre: "Päronform: varför vissa tabeller beskriver vissa proportioner dåligt",
      chapo:
        "Fylligare höfter och lår med smalare midja: två personer med samma nominella storlek kan behöva olika snitt.",
    },
    "pantalon-ski": {
      titre: "Skidbyxor: varför höfter och lår kan bli den begränsande faktorn",
      chapo:
        "Midjeomfång räcker inte: bäcken, lår och innerbenslängd styr rörligheten och hur plagget tas på.",
    },
    layering: {
      titre: "Lager på snön: hur mycket utrymme utan att simma i jackan",
      chapo: "En jacka måste rymma dina lager utan att bli onödigt skrymmande.",
    },
    "compression-triathlon": {
      titre: "Triathlon: nyttig kompression kontra skadlig kompression",
      chapo:
        "En triathlonvåtdräkt är designad tätt mot kroppen, utan att bli en stor begränsning för andning eller rörelse.",
    },
    "harnais-longueur-dos": {
      titre: "Kitesele: ryggens längd spelar också roll",
      chapo: "En sele väljs inte enbart utifrån ett omfång.",
    },
    "epaisseur-ajustement": {
      titre: "Tjock kontra tunn neopren: tjockleken förändrar passformen",
      chapo:
        "Vid jämförbar konstruktion förändrar ökad tjocklek vanligtvis den upplevda flexibiliteten.",
    },
    zip: {
      titre:
        "Bakre dragkedja, bröstdragkedja eller utan dragkedja: vad det förändrar för passformen",
      chapo:
        "Ingångssystemet förändrar dräktens uppbyggnad och kan påverka rörlighet, täthet och hur lätt den tas på.",
    },
    "cinq-erreurs-mesure": {
      titre: "Att mäta sig rätt: de fem misstagen som förvränger allt",
      chapo: "Felen kommer oftast från ett ostadigt protokoll, inte från själva måttbandet.",
    },
    "cout-des-retours": {
      titre: "Ett feldimensionerat plagg returneras ofta: den verkliga kostnaden för returer",
      chapo:
        "Storlek och passform är bland de främsta orsakerna till returer inom onlinehandel med kläder.",
    },
    "essayage-et-conseil": {
      titre: "Provning i butik och rådgivning online: kombinera dem smart",
      chapo: "Butik och digital rådgivning står inte i motsats till varandra.",
    },
    "zone-par-zone": {
      titre: "Varför SILLAGE resonerar område för område",
      chapo: "Ett tekniskt plagg kan inte alltid beskrivas med en enda storleksetikett.",
    },
    "statique-dynamique": {
      titre: "Statisk passform och dynamisk passform",
      chapo: "Utrustning som verkar rätt i stillastående kan bete sig annorlunda i rörelse.",
    },
    "meme-taille-comportement": {
      titre: "Varför två dräkter i samma storlek kan bete sig olika",
      chapo: "Bokstaven på etiketten beskriver bara en del av produktens geometri.",
    },
    "donnee-inconnue": {
      titre: "Hur SILLAGE hanterar data som är okänd",
      chapo: "Ett saknat värde är i sig en information.",
    },
    "apres-sml": {
      titre: "Bortom S, M, L: mot en flerdimensionell bild av passform",
      chapo: "Traditionella storlekar pressar en flerdimensionell kropp in i en enda kategori.",
    },
    "une-grille-par-marque": {
      titre: "Varför ett märke publicerar en enda tabell för hela sitt sortiment",
      chapo:
        "Nästan alla märken inom våra discipliner publicerar en huvudtabell per kön, inte en per modell.",
    },
    "vocabulaire-des-coupes": {
      titre: "Passformsvokabulär, och vad det egentligen betyder",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: dessa är officiella och användbara termer.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Vad en storlekstabell inte berättar",
      chapo:
        "En tabell ger intervaller för kroppsmått. Den anger varken material, elasticitet eller panelindelning.",
    },
    "bien-mesurer": {
      titre: "Att mäta sig rätt: fem regler som ändrar resultatet",
      chapo:
        "Ett dåligt hållet måttband flyttar rekommendationen en hel storlek. Avgörande områden mäts för hand.",
    },
    debuter: {
      titre: "Är du nybörjare? Tre riktmärken innan köp",
      chapo: "Rätt storlek beror först på användning, sedan på märket.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopren", d: "Våtdräkter och produkter för vattensport." },
  B: { l: "Skidor och snowboard", d: "Bergsplagg, lager och skal." },
  C: { l: "Selar för vattensport", d: "Midjesele, sittsele, trapes." },
  "C.fermeture": {
    l: "Denna familj öppnas när våra märkesdata täcker rygghöjd på ett verifierat sätt. Vi föredrar att inte rekommendera något framför att rekommendera på osäkra data.",
  },
  A1: { l: "Surfing och vågsport", d: "Våg, longboard, bodyboard." },
  A2: {
    l: "Öppet vatten och triathlon",
    d: "Simtaget gör axelfrihet till den viktigaste begränsningen.",
  },
  A3: {
    l: "Kitesurfing, wingfoil och blandad användning",
    d: "Extra begränsning på midja och höfter på grund av selen.",
  },
  A4: {
    l: "Dykning",
    d: "Kompressionen på djupet gör passform över bålen och benlängd avgörande.",
  },
  B0: { l: "Skidor och snowboard", d: "Bergsplagg." },
  "A1-integrale": { l: "Heldräkt", d: "Långa armar och ben." },
  "A1-shorty": { l: "Shorty", d: "Korta armar och ben." },
  "A1-top": { l: "Topp", d: "Endast neoprentopp." },
  "A2-integrale": { l: "Simdräkt", d: "Heldräkt byggd för simning." },
  "A3-integrale": { l: "Heldräkt", d: "Används under sele." },
  "A4-integrale": { l: "Dykardräkt", d: "Våt heldräkt." },
  B1: { l: "Jacka", d: "Skal eller vadderad jacka." },
  B2: { l: "Byxor eller haklapp", d: "Standardtabellernas huvudsakliga svaghetsområde." },
  B3: { l: "Basplagg eller mellanlager", d: "Tekniskt underlager." },
  B4: { l: "Overall i ett stycke", d: "Jacka och byxor ihop, extra begränsning i bålens längd." },
  "q.couches": { l: "Planerar du att bära ett mellanlager under?" },
  "q.couches.fine": { l: "Ett tunt lager" },
  "q.couches.intermediaire": { l: "Ett tunt lager och en fleece" },
  "q.couches.epaisse": { l: "Flera tjocka lager" },
  "q.couches.inconnu": { l: "Vet inte än" },
  "q.frequence": { l: "Hur ofta tränar du?" },
  "q.frequence.occasionnel": { l: "Några utflykter per år" },
  "q.frequence.regulier": { l: "Flera gånger i månaden" },
  "q.frequence.intensif": { l: "Varje vecka eller oftare" },
  "q.temperature": { l: "I vilket vatten är du oftast?" },
  "q.temperature.froide": { l: "Kallt, under 15 °C" },
  "q.temperature.temperee": { l: "Tempererat, 15 till 20 °C" },
  "q.temperature.chaude": { l: "Varmt, över 20 °C" },
  "q.preference": { l: "Vilken passform föredrar du?" },
  "q.preference.proche": { l: "Nära kroppen" },
  "q.preference.neutre": { l: "Ingen stark preferens" },
  "q.preference.aise": { l: "Med lite utrymme" },
};

export default { core, pages, catalogue };
