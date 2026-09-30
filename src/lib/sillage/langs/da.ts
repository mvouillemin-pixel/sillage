type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Størrelse efter kropsform",
    tagline: "Den rette model til din aktivitet. Den rette størrelse til din krop.",
    dataNote:
      "Officielle størrelsestabeller fra producenterne, indsamlet og verificeret, aldrig opdigtet.",
    langue: "Sprog",
  },
  steps: {
    progress: "Fremskridt",
    s1: "Valg",
    s2: "Anvendelse",
    s3: "Mål",
    s4: "Resultat",
    etape: "Trin",
  },
  buttons: {
    next: "Fortsæt",
    back: "Tilbage",
    result: "Se resultatet",
    restart: "Ny søgning",
    pieces: "Se produkterne",
  },
  sel: {
    titre: "Din aktivitet",
    sous: "Vælg familie, disciplin og derefter produkt. Vi spørger kun om de mål, der er relevante for dette produkt.",
    famille: "Familie",
    discipline: "Disciplin",
    piece: "Produkt",
  },
  usage: {
    titre: "Din anvendelse",
    sous: "Et par korte spørgsmål. De styrer, hvilken pasform vi søger.",
    geneTitre: "Har du oplevet ubehag med tidligere udstyr?",
    geneMulti: "Sæt kryds ved alt ubehag, du har mærket. Hvert punkt strammer tolerancen kun i den zone.",
    jamais: "Jeg har aldrig brugt denne type produkt",
    oui: "Ja, på et bestemt sted",
    ou: "Hvor?",
    choisirZone: "Vælg et område",
    tropSerre: "For stramt",
    tropAmple: "For rummeligt",
  },
  mes: {
    titre: "Dine mål",
    sous: "Et blødt målebånd er nok. De afgørende områder for dette produkt måles i hånden: det er der, automatiske estimater er mindst pålidelige.",
    determinant: "Afgørende",
    facultatif: "Valgfrit",
    sansMesure: "Uden dette mål er en anbefaling stadig mulig, men mindre præcis på dette område.",
    manque: "Et eller flere afgørende mål mangler for dette produkt.",
  },
  zones: {
    c: {
      label: "Brystomfang",
      guide:
        "Målebåndet vandret rundt om den bredeste del af brystet, kun over undertøj. Ånd normalt ud; båndet tæt men ikke stramt.",
    },
    wa: {
      label: "Taljeomfang",
      guide: "Ved den naturlige talje, mellem ribben og hofter. Træk ikke maven ind; ånd normalt.",
    },
    hp: {
      label: "Hofteomfang",
      guide:
        "Rundt om den bredeste del af hofter og sæde, fødderne samlet. Kontroller i et spejl, at båndet er vandret.",
    },
    th: {
      label: "Låromfang",
      guide:
        "Rundt om den bredeste del af låret, stående, benet afslappet, vægten på begge fødder.",
    },
    h: { label: "Højde", guide: "Ryggen mod væggen, uden sko, hælene samlet, blikket lige frem." },
    wt: { label: "Vægt", guide: "Om morgenen, uden tungt tøj." },
    ij: {
      label: "Indvendig benlængde",
      guide: "Fra skridtet til gulvet, ryggen mod væggen, uden sko.",
    },
    bl: {
      label: "Ryglængde",
      guide:
        "Fra 7. halshvirvel (ved kanten af en t-shirtkrave) ned til hoftekammen, i højde med hoftebenet.",
    },
    nk: { label: "Halsomfang", guide: "Ved halsens rod, målebåndet vandret, uden at stramme." },
    bc: {
      label: "Bicepsomfang",
      guide: "Rundt om den bredeste del af overarmen, afslappet langs kroppen.",
    },
    sh: {
      label: "Skulderbredde",
      guide:
        "Fra den ene skulderknude til den anden, hen over den øverste del af ryggen, skuldrene afslappede.",
    },
    ws: {
      label: "Vingefang",
      guide:
        "Armene strakt vandret ud, fra langfingerspids til langfingerspids, ryggen mod en væg.",
    },
    al: {
      label: "Armlængde",
      guide: "Fra skulderknuden til håndledsfolden, armen let bøjet, hånden på hoften.",
    },
    tl: {
      label: "Torsolængde",
      guide: "Fra halsens rod, over skulderen, ned til skridtet og tilbage op ad ryggen.",
    },
    ak: {
      label: "Ankelomfang",
      guide: "Lige over ankelknoglen, foden fladt på gulvet, båndet uden at stramme.",
    },
    dh: {
      label: "Rygdybde",
      guide: "Fra hoftekammen til de flydende ribben, langs siden af overkroppen, stående.",
    },
    pv: {
      label: "Bækkenomfang",
      guide: "I højde med hoftekammene, målebåndet vandret, maven afslappet.",
    },
    il: {
      label: "Talje ved hoftekammene",
      guide: "Båndet placeret præcis på hoftekammene, vandret, uden at presse.",
    },
  },
  consent: {
    titre: "Dine data",
    intro:
      "Som standard er denne session midlertidig: dine mål forbliver i hukommelsen under besøget og gemmes ikke. Ingen boks er forudkrydset.",
    sessionL: "Bruge mine mål til denne anbefaling",
    sessionD: "Nødvendigt for at få et resultat nu.",
    profilL: "Beholde min profil efter sessionen",
    profilD:
      "For at finde dine mål igen ved et fremtidigt besøg. At afvise påvirker ikke resultatet.",
    agregeL: "Bidrage, i sammenfattet og anonym form, til at forbedre tjenesten",
    agregeD: "Ingen mulighed for at spore tilbage til din profil.",
    marchandL: "Dele den anbefalede størrelse med partnerbutikken",
    marchandD: "Kun størrelsen, aldrig dine mål.",
    droits:
      "Adgang, berigtigelse, sletning, dataportabilitet og tilbagekaldelse af samtykke er tilgængelige når som helst i grænsefladen.",
  },
  res: {
    titre: "Resultat",
    refusTitre: "Vi kan endnu ikke give dig et svar",
    refusSuite:
      "Dine mål er taget med i betragtning. Så snart et mærke opfylder vores dækningskrav for dette produkt, bliver anbefalingen tilgængelig.",
    indepartageables:
      "To mærker passer lige godt. Vi foretrækker at sige det frem for at afgøre det vilkårligt.",
    coupeDeclaree: "Angivet pasform",
    sourceMarque: "kilde: mærket",
    sourceSecondaire: "sekundær kilde",
    tracabilite: "Sporbarhed for denne konsultation",
    referentiel: "Referencedata",
    parametres: "Parametre",
    horodatage: "Tidsstempel",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "For stram", ajuste: "Tætsiddende", conforme: "God pasform", ample: "Rummelig" },
  confiance: {
    mot: "Pålidelighed",
    1: "meget lav",
    2: "lav",
    3: "middel",
    4: "høj",
    5: "meget høj",
  },
  repere: {
    mot: "Reference",
    grille: "Hvorfor et mærke udgiver én tabel for hele sit sortiment",
    mesurer: "At måle sig selv korrekt: fem regler, der ændrer resultatet",
    nonDit: "Hvad en størrelsestabel ikke fortæller, og hvorfor vi skriver det",
  },
  steps2: { profile: "Din profil", measures: "Dine mål", results: "Dine størrelser" },
  gender: { title: "Tabeller der skal bruges", m: "Herretabeller", f: "Dametabeller" },
  disc: {
    title: "Disciplin",
    surf: "Surfing",
    eaulibre: "Triatlon / åbent vand",
    plongee: "Dykning / fridykning",
    ski: "Ski og snowboard",
    harnais: "Sele til windsurfing / kite",
    soon: "Kommer snart",
    shoesRun: "Løbesko",
    shoesSki: "Skistøvler",
  },
  buttons2: {
    toMeasures: "Fortsæt til mine mål",
    compute: "Beregn mine størrelser",
    edit: "Rediger mine mål",
    how: "Sådan måler du",
    hide: "Skjul instruktioner",
    more: "Læs mere",
    optional: "valgfrit",
  },
  issue: {
    title: "Hvor har du oftest problemer med pasformen?",
    none: "Ingen særlige problemer",
    thighs: "Lår og sæde",
    chest: "Skuldre og bryst",
    length: "Længder (overkrop, ben)",
  },
  anchor: {
    title: "Hvis du allerede ejer en våddragt i din størrelse, hvordan føles den?",
    none: "Jeg ejer ingen / spring over",
    fit: "Sidder godt",
    tight: "For stram",
    loose: "For rummelig, vand trænger ind",
    why: "Denne oplysning forfiner din måleprofil.",
  },
  results: {
    title: "Anbefalinger pr. mærke",
    bottom: "Bukser",
    top: "Jakke",
    ratioHW: "Forhold hofte / talje",
    ratioTH: "Forhold lår / hofte",
    perZone: "Detaljer pr. område",
  },
  warn: {
    noHips:
      "Dette mærke udgiver ikke tilstrækkelig information om hofter: vores anbefaling er mere usikker her.",
    frontier:
      "Du er mellem to størrelser hos dette mærke. Hvis du kan prøve tøjet, anbefaler vi det.",
    empty: "Vi har endnu ikke verificerede data for denne kategori.",
    dimMissing: "ikke offentliggjort af dette mærke",
    biased:
      "Dette mærke sidder stramt over hofterne: ved tvivl har vi valgt den sikreste størrelse til dig.",
    splitSizes: "Forskellige størrelser til jakke og bukser er et normalt resultat, ikke en fejl.",
  },
  feedback: {
    title: "Hvordan passer det?",
    fit: "Perfekt",
    tight: "For stramt",
    loose: "For stort",
    thanks: "Tak — din feedback forbedrer rådene for alle kropsformer.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Læsespor",
    tous: "Alle",
    decouvrir: "Opdag",
    comprendre: "Forstå",
    approfondir: "Fordyb",
    expert: "Ekspert",
    lecture: "Læsetid",
  },
  disc: {
    mot: "Disciplin",
    toutes: "Alle",
    transversal: "Tværgående",
    surf: "Surfing",
    "eau-libre": "Åbent vand / triatlon",
    kite: "Kite / wingfoil",
    ski: "Ski / snowboard",
    harnais: "Seler",
    plongee: "Dykning",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Bibliotek",
    titre: "Forstå før du køber, fra det første køb til ekspertise",
    sous: "Størrelse og pasform afgør komfort, varme og bevægelse — ikke kun udseendet. Hver artikel angiver sit læsespor og kildernes oprindelse.",
    compteur: "artikler tilgængelige",
    compteurUn: "artikel tilgængelig",
    vide: "Intet offentliggjort i dette læsespor for denne disciplin. De planlagte emner er anført nedenfor: vi foretrækker at annoncere kommende indhold frem for at tilnærme det.",
    lire: "Læs artiklen",
    replier: "Fold sammen",
    sources: "Kilder",
    prochainement: "Kommer snart",
    prochainementTitre: "Planlagte emner, endnu ikke offentliggjort",
    vague1: "Første bølge",
    vague2: "Anden bølge",
    calendrier: "Kalender",
    calendrierTitre: "Seks måneders produktion, måned for måned",
    calendrierVideo: "Lang video",
    temps: "Takt",
    tempsTitre: "Anslået produktionstid",
    tempsArticle: "Artikel",
    tempsVideo: "Lang video",
    tempsShort: "Kortformat",
    teaser: "Videnartikler, fra det første køb til materialer: vælg dit læsespor.",
    metaTitre: "Bibliotek — forstå størrelse og pasform | Sillage",
    metaDesc:
      "Videnartikler fra det første køb til ekspertise: våddragter, ski, seler. Hvad der er fastslået, hvad der kommer fra mærkerne, hvad vi endnu ikke ved.",
  },
  reperes: {
    eyebrow: "Grundlag",
    titre: "Forstå størrelser før du vælger",
    sous: "Hvad mærkerne rent faktisk udgiver, hvad de ikke udgiver, og hvad det betyder for dig. Alt her stammer fra registrerede kilder, aldrig fra et skøn.",
    metaTitre: "Størrelsesgrundlag — Sillage",
    metaDesc:
      "Forstå størrelsestabeller, pasformsordforråd og hvordan du måler dig selv, for at vælge den rette våddragt eller bjergbeklædning.",
  },
  nav: {
    trouver: "Find min størrelse",
    biblio: "Bibliotek: fra det første køb til ekspertise",
    reperes: "Grundlag om størrelsestabeller",
  },
  langueTexte:
    "Grænseflade og resuméer er oversat. Selve artiklerne forbliver på fransk: vi foretrækker en korrekturlæst tekst frem for en maskinoversættelse.",
  contenu: {
    flushing: {
      titre: "For stor, din våddragt køler dig ned: flushing-fælden",
      chapo: "En våddragt holder dig ikke tør: den begrænser varmeudveksling og vandbevægelse.",
    },
    "epaules-rame": {
      titre: "For stram kan udmatte dine skuldre under paddling",
      chapo:
        "En for lille våddragt kan presse brystkassen eller begrænse skuldrene: hver bevægelse koster mere.",
    },
    "deux-centimetres": {
      titre: "Hvad en fejl på 2 cm kan ændre",
      chapo:
        "Nogle få centimeter bliver afgørende, når de placerer dig på grænsen mellem to størrelser.",
    },
    "meme-m": {
      titre: 'Hvorfor det samme "M" ikke betyder noget fra ét mærke til et andet',
      chapo:
        "Der findes ingen universel størrelse, der garanterer, at et M svarer til de samme mål alle steder.",
    },
    cou: {
      titre: "Tætning ved halsen: et område der sjældent beskrives i størrelsestabeller",
      chapo:
        "Halsen er et funktionelt vigtigt område, men dens omkreds vises sjældent i offentlige størrelsestabeller.",
    },
    "morphologie-a": {
      titre: "Pæreform: hvorfor visse tabeller beskriver visse proportioner dårligt",
      chapo:
        "Fyldigere hofter og lår med en smallere talje: to personer med samme nominelle størrelse kan have brug for forskellige snit.",
    },
    "pantalon-ski": {
      titre: "Skibukser: hvorfor hofter og lår kan blive den begrænsende faktor",
      chapo:
        "Taljeomfang er ikke nok: bækken, lår og indvendig benlængde styrer bevægeligheden og hvordan tøjet tages på.",
    },
    layering: {
      titre: "Lag på sneen: hvor meget plads uden at svømme i jakken",
      chapo: "En jakke skal kunne rumme dine lag uden at blive unødvendigt voluminøs.",
    },
    "compression-triathlon": {
      titre: "Triatlon: nyttig kompression kontra skadelig kompression",
      chapo:
        "En triatlonvåddragt er designet tæt på kroppen, uden at blive en stor begrænsning for vejrtrækning eller bevægelse.",
    },
    "harnais-longueur-dos": {
      titre: "Kitesele: ryglængden betyder også noget",
      chapo: "En sele vælges ikke alene ud fra et omfang.",
    },
    "epaisseur-ajustement": {
      titre: "Tyk kontra tynd neopren: tykkelsen ændrer pasformen",
      chapo:
        "Ved sammenlignelig konstruktion ændrer øget tykkelse generelt den oplevede fleksibilitet.",
    },
    zip: {
      titre: "Bagerste lynlås, brystlynlås eller uden lynlås: hvad det betyder for pasformen",
      chapo:
        "Indgangssystemet ændrer dragtens opbygning og kan påvirke bevægelighed, tæthed og hvor let den tages på.",
    },
    "cinq-erreurs-mesure": {
      titre: "At måle sig selv korrekt: de fem fejl der forvrænger alt",
      chapo: "Fejlene skyldes som regel en ustabil fremgangsmåde, ikke selve målebåndet.",
    },
    "cout-des-retours": {
      titre:
        "Et forkert dimensioneret produkt returneres ofte: den reelle omkostning ved returneringer",
      chapo:
        "Størrelse og pasform er blandt de vigtigste årsager til returneringer i onlinehandel med tøj.",
    },
    "essayage-et-conseil": {
      titre: "Afprøvning i butik og rådgivning online: at kombinere dem klogt",
      chapo: "Butik og digital rådgivning står ikke i modsætning til hinanden.",
    },
    "zone-par-zone": {
      titre: "Hvorfor SILLAGE ræsonnerer område for område",
      chapo: "Et teknisk produkt kan ikke altid beskrives med en enkelt størrelsesbetegnelse.",
    },
    "statique-dynamique": {
      titre: "Statisk pasform og dynamisk pasform",
      chapo: "Udstyr, der virker korrekt i stilstand, kan opføre sig anderledes i bevægelse.",
    },
    "meme-taille-comportement": {
      titre: "Hvorfor to dragter i samme størrelse kan opføre sig forskelligt",
      chapo: "Bogstavet på mærkaten beskriver kun en del af produktets geometri.",
    },
    "donnee-inconnue": {
      titre: "Hvordan SILLAGE håndterer data, der er ukendt",
      chapo: "En manglende værdi er i sig selv en oplysning.",
    },
    "apres-sml": {
      titre: "Ud over S, M, L: mod et flerdimensionelt billede af pasform",
      chapo: "Traditionelle størrelser presser en flerdimensionel krop ind i en enkelt kategori.",
    },
    "une-grille-par-marque": {
      titre: "Hvorfor et mærke udgiver én tabel for hele sit sortiment",
      chapo:
        "Næsten alle mærker inden for vores discipliner udgiver én hovedtabel pr. køn, ikke én pr. model.",
    },
    "vocabulaire-des-coupes": {
      titre: "Pasformsordforråd, og hvad det egentlig betyder",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: dette er officielle og brugbare betegnelser.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Hvad en størrelsestabel ikke fortæller",
      chapo:
        "En tabel angiver intervaller for kropsmål. Den angiver hverken materiale, elasticitet eller panelinddeling.",
    },
    "bien-mesurer": {
      titre: "At måle sig selv korrekt: fem regler der ændrer resultatet",
      chapo:
        "Et dårligt holdt målebånd flytter anbefalingen en hel størrelse. Afgørende områder måles i hånden.",
    },
    debuter: {
      titre: "Er du nybegynder? Tre pejlemærker før køb",
      chapo: "Den rette størrelse afhænger først af anvendelsen, dernæst af mærket.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopren", d: "Våddragter og produkter til vandsport." },
  B: { l: "Ski og snowboard", d: "Bjergbeklædning, lag og skalprodukter." },
  C: { l: "Seler til vandsport", d: "Taljesele, siddesele, trapez." },
  "C.fermeture": {
    l: "Denne familie åbnes, når vores mærkedata dækker rygdybde på en verificeret måde. Vi foretrækker ikke at anbefale noget frem for at anbefale på usikre data.",
  },
  A1: { l: "Surfing og bølgesport", d: "Bølge, longboard, bodyboard." },
  A2: {
    l: "Åbent vand og triatlon",
    d: "Svømmetaget gør skulderfrihed til den vigtigste begrænsning.",
  },
  A3: {
    l: "Kitesurfing, wingfoil og blandet brug",
    d: "Ekstra begrænsning på talje og hofter på grund af selen.",
  },
  A4: {
    l: "Dykning",
    d: "Kompressionen på dybt vand gør pasform over overkroppen og benlængde afgørende.",
  },
  B0: { l: "Ski og snowboard", d: "Bjergprodukter." },
  "A1-integrale": { l: "Heldragt", d: "Lange arme og ben." },
  "A1-shorty": { l: "Shorty", d: "Korte arme og ben." },
  "A1-top": { l: "Top", d: "Kun neoprentop." },
  "A2-integrale": { l: "Svømmedragt", d: "Heldragt bygget til svømning." },
  "A3-integrale": { l: "Heldragt", d: "Bruges under sele." },
  "A4-integrale": { l: "Dykkerdragt", d: "Våd heldragt." },
  B1: { l: "Jakke", d: "Skal- eller vatteret jakke." },
  B2: { l: "Bukser eller overalls", d: "Standardtabellernes primære svaghedsområde." },
  B3: { l: "Basislag eller mellemlag", d: "Teknisk underlag." },
  B4: {
    l: "Heldragt i ét stykke",
    d: "Jakke og bukser samlet, ekstra begrænsning på torsolængde.",
  },
  "q.couches": { l: "Planlægger du at bære et mellemlag under?" },
  "q.couches.fine": { l: "Ét tyndt lag" },
  "q.couches.intermediaire": { l: "Ét tyndt lag og en fleece" },
  "q.couches.epaisse": { l: "Flere tykke lag" },
  "q.couches.inconnu": { l: "Det ved jeg ikke endnu" },
  "q.frequence": { l: "Hvor ofte træner du?" },
  "q.frequence.occasionnel": { l: "Et par ture om året" },
  "q.frequence.regulier": { l: "Flere gange om måneden" },
  "q.frequence.intensif": { l: "Hver uge eller oftere" },
  "q.temperature": { l: "I hvilket vand er du oftest?" },
  "q.temperature.froide": { l: "Koldt, under 15 °C" },
  "q.temperature.temperee": { l: "Tempereret, 15 til 20 °C" },
  "q.temperature.chaude": { l: "Varmt, over 20 °C" },
  "q.preference": { l: "Hvilken pasform foretrækker du?" },
  "q.preference.proche": { l: "Tæt på kroppen" },
  "q.preference.neutre": { l: "Ingen stærk præference" },
  "q.preference.aise": { l: "Med lidt plads" },
};

export default { core, pages, catalogue };
