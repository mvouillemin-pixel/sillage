type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Größe nach Körperform",
    tagline: "Das richtige Modell für Ihre Sportart. Die richtige Größe für Ihren Körper.",
    dataNote: "Offizielle Größentabellen der Hersteller, erhoben und geprüft, nie erfunden.",
    langue: "Sprache",
  },
  steps: {
    progress: "Fortschritt",
    s1: "Auswahl",
    s2: "Nutzung",
    s3: "Maße",
    s4: "Ergebnis",
    etape: "Schritt",
  },
  buttons: {
    next: "Weiter",
    back: "Zurück",
    result: "Ergebnis ansehen",
    restart: "Neue Suche",
    pieces: "Artikel ansehen",
  },
  sel: {
    titre: "Ihre Sportart",
    sous: "Wählen Sie Familie, Disziplin und dann den Artikel. Wir fragen nur die Maße ab, die für diesen Artikel wichtig sind.",
    famille: "Familie",
    discipline: "Disziplin",
    piece: "Artikel",
  },
  usage: {
    titre: "Ihre Nutzung",
    sous: "Ein paar kurze Fragen. Sie bestimmen die gesuchte Passform.",
    geneTitre: "Hatten Sie mit einer früheren Ausrüstung ein Unbehagen?",
    geneMulti: "Kreuzen Sie alle empfundenen Beschwerden an. Jede verengt die Toleranz nur an dieser Stelle.",
    jamais: "Ich habe diese Art von Artikel noch nie getragen",
    oui: "Ja, an einer bestimmten Stelle",
    ou: "Wo?",
    choisirZone: "Zone auswählen",
    tropSerre: "Zu eng",
    tropAmple: "Zu weit",
  },
  mes: {
    titre: "Ihre Maße",
    sous: "Ein weiches Maßband reicht aus. Die für diesen Artikel entscheidenden Zonen werden von Hand gemessen: dort ist die automatische Schätzung am wenigsten zuverlässig.",
    determinant: "Entscheidend",
    facultatif: "Optional",
    sansMesure:
      "Ohne dieses Maß bleibt eine Empfehlung möglich, ist aber in dieser Zone weniger genau.",
    manque: "Für diesen Artikel fehlen ein oder mehrere entscheidende Maße.",
  },
  zones: {
    c: {
      label: "Brustumfang",
      guide:
        "Maßband waagerecht am stärksten Punkt der Brust, nur über der Unterwäsche. Normal ausatmen, Band anliegend, aber nicht einschnürend.",
    },
    wa: {
      label: "Taillenumfang",
      guide:
        "An der natürlichen Taille, zwischen Rippen und Hüfte. Bauch nicht einziehen, normal atmen.",
    },
    hp: {
      label: "Hüftumfang",
      guide:
        "Am stärksten Punkt von Becken und Gesäß, Füße geschlossen. Waagerechte Lage des Bandes im Spiegel prüfen.",
    },
    th: {
      label: "Oberschenkelumfang",
      guide:
        "Am stärksten Punkt des Oberschenkels, im Stehen, Bein entspannt, Gewicht auf beiden Füßen.",
    },
    h: {
      label: "Körpergröße",
      guide: "Rücken an der Wand, ohne Schuhe, Fersen zusammen, Blick geradeaus.",
    },
    wt: { label: "Gewicht", guide: "Morgens, ohne schwere Kleidung." },
    ij: {
      label: "Schrittlänge",
      guide: "Vom Schritt bis zum Boden, Rücken an der Wand, ohne Schuhe.",
    },
    bl: {
      label: "Rückenlänge",
      guide:
        "Vom 7. Halswirbel (an der Basis des T-Shirt-Kragens) bis zur Beckenkante, in Höhe des Hüftknochens.",
    },
    nk: { label: "Halsumfang", guide: "An der Halsbasis, Maßband waagerecht, ohne einzuschnüren." },
    bc: {
      label: "Bizepsumfang",
      guide: "Am stärksten Punkt des Oberarms, locker am Körper hängend.",
    },
    sh: {
      label: "Schulterbreite",
      guide:
        "Von einem Schulterhöcker (Akromion) zum anderen, über den oberen Rücken, Schultern locker.",
    },
    ws: {
      label: "Armspannweite",
      guide:
        "Arme waagerecht ausgestreckt, von einer Mittelfingerspitze zur anderen, Rücken an der Wand.",
    },
    al: {
      label: "Armlänge",
      guide:
        "Vom Schulterhöcker (Akromion) bis zur Handgelenksfalte, Arm leicht gebeugt, Hand auf der Hüfte.",
    },
    tl: {
      label: "Rumpflänge",
      guide: "Von der Halsbasis, über die Schulter, bis zum Schritt und zurück über den Rücken.",
    },
    ak: {
      label: "Fesselumfang",
      guide: "Direkt oberhalb des Knöchels, Fuß flach auf dem Boden, Band ohne einzuschnüren.",
    },
    dh: {
      label: "Rückenhöhe",
      guide: "Von der Beckenkante bis zu den unteren Rippen, seitlich am Rumpf, im Stehen.",
    },
    pv: {
      label: "Beckenumfang",
      guide: "Auf Höhe der Beckenkanten, Maßband waagerecht, Bauch entspannt.",
    },
    il: {
      label: "Taillenumfang an den Beckenkanten",
      guide: "Maßband exakt auf den Beckenkanten aufliegend, waagerecht, ohne Kompression.",
    },
  },
  consent: {
    titre: "Ihre Daten",
    intro:
      "Standardmäßig ist diese Sitzung flüchtig: Ihre Maße bleiben nur für die Dauer der Konsultation im Speicher und werden nicht dauerhaft gespeichert. Kein Kästchen ist im Voraus angekreuzt.",
    sessionL: "Meine Maße für diese Empfehlung verwenden",
    sessionD: "Erforderlich, um jetzt ein Ergebnis zu erhalten.",
    profilL: "Mein Profil über diese Sitzung hinaus speichern",
    profilD:
      "Damit Ihre Maße bei einem künftigen Besuch wiedergefunden werden. Eine Ablehnung hat keine Auswirkung auf das Ergebnis.",
    agregeL: "In aggregierter und anonymer Form zur Verbesserung des Dienstes beitragen",
    agregeD: "Keine Rückverfolgung zu Ihrem Profil möglich.",
    marchandL: "Die empfohlene Größe an den Partnerhändler übermitteln",
    marchandD: "Nur die Größe, niemals Ihre Maße.",
    droits:
      "Zugang, Berichtigung, Löschung, Übertragbarkeit und Widerruf der Einwilligung sind jederzeit über die Oberfläche zugänglich.",
  },
  res: {
    titre: "Ergebnis",
    refusTitre: "Wir können Ihnen noch keine Antwort geben",
    refusSuite:
      "Ihre Maße wurden erfasst. Sobald eine Marke unsere Anforderung an die Datenabdeckung für diesen Artikel erfüllt, wird die Empfehlung verfügbar.",
    indepartageables:
      "Zwei Marken passen gleich gut. Wir sagen Ihnen das lieber, als willkürlich zu entscheiden.",
    coupeDeclaree: "Angegebene Passform",
    sourceMarque: "Markenquelle",
    sourceSecondaire: "Sekundärquelle",
    tracabilite: "Rückverfolgbarkeit dieser Beratung",
    referentiel: "Referenzdaten",
    parametres: "Parameter",
    horodatage: "Zeitstempel",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Zu eng", ajuste: "Anliegend", conforme: "Gute Passform", ample: "Weit" },
  confiance: {
    mot: "Vertrauen",
    1: "sehr gering",
    2: "gering",
    3: "mittel",
    4: "hoch",
    5: "sehr hoch",
  },
  repere: {
    mot: "Wissenswert",
    grille: "Warum eine Marke nur eine Größentabelle für ihr ganzes Sortiment veröffentlicht",
    mesurer: "Sich richtig messen: fünf Regeln, die das Ergebnis verändern",
    nonDit: "Was eine Größentabelle nicht sagt, und warum wir es aufschreiben",
  },
  steps2: { profile: "Ihr Profil", measures: "Ihre Maße", results: "Ihre Größen" },
  gender: { title: "Zu verwendende Tabellen", m: "Herrentabellen", f: "Damentabellen" },
  disc: {
    title: "Disziplin",
    surf: "Surfen",
    eaulibre: "Triathlon / Freiwasser",
    plongee: "Tauchen / Apnoe",
    ski: "Ski und Snowboard",
    harnais: "Windsurf- / Kite-Trapez",
    soon: "Bald verfügbar",
    shoesRun: "Laufschuhe",
    shoesSki: "Skischuhe",
  },
  buttons2: {
    toMeasures: "Weiter zu meinen Maßen",
    compute: "Meine Größen berechnen",
    edit: "Meine Maße bearbeiten",
    how: "Wie wird gemessen",
    hide: "Anleitung ausblenden",
    more: "Mehr erfahren",
    optional: "optional",
  },
  issue: {
    title: "Wo haben Sie am häufigsten Passform-Probleme?",
    none: "Keine besondere Schwierigkeit",
    thighs: "Oberschenkel und Gesäß",
    chest: "Schultern und Brust",
    length: "Längen (Rumpf, Beine)",
  },
  anchor: {
    title: "Wenn Sie bereits einen Anzug in Ihrer Größe besitzen, wie fühlt er sich an?",
    none: "Ich besitze keinen / überspringen",
    fit: "Gut sitzend",
    tight: "Zu eng",
    loose: "Zu weit, Wasser dringt ein",
    why: "Diese Information verfeinert Ihr Maßprofil.",
  },
  results: {
    title: "Empfehlungen nach Marke",
    bottom: "Hose",
    top: "Jacke",
    ratioHW: "Verhältnis Hüfte / Taille",
    ratioTH: "Verhältnis Oberschenkel / Hüfte",
    perZone: "Detail nach Zone",
  },
  warn: {
    noHips:
      "Diese Marke liefert nicht genügend Informationen zur Hüfte: unser Rat ist hier unsicherer.",
    frontier:
      "Bei dieser Marke liegen Sie zwischen zwei Größen. Falls möglich, wird eine Anprobe empfohlen.",
    empty: "Für diese Kategorie liegen uns noch keine verifizierten Daten vor.",
    dimMissing: "von dieser Marke nicht veröffentlicht",
    biased:
      "Diese Marke fällt an der Hüfte eng aus: im Zweifel haben wir die sicherere Größe für Sie gewählt.",
    splitSizes:
      "Unterschiedliche Größen bei Jacke und Hose sind ein normales Ergebnis, keine Anomalie.",
  },
  feedback: {
    title: "Passt es Ihnen?",
    fit: "Perfekt",
    tight: "Zu eng",
    loose: "Zu groß",
    thanks: "Danke, Ihr Feedback verbessert die Empfehlungen für alle Körperformen.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Lesepfad",
    tous: "Alle",
    decouvrir: "Entdecken",
    comprendre: "Verstehen",
    approfondir: "Vertiefen",
    expert: "Experte",
    lecture: "Lesezeit",
  },
  disc: {
    mot: "Disziplin",
    toutes: "Alle",
    transversal: "Übergreifend",
    surf: "Surfen",
    "eau-libre": "Freiwasser / Triathlon",
    kite: "Kite / Wingfoil",
    ski: "Ski / Snowboard",
    harnais: "Trapeze",
    plongee: "Tauchen",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Bibliothek",
    titre: "Verstehen vor dem Kauf, vom ersten Kauf bis zur Expertise",
    sous: "Größe und Passform entscheiden über Komfort, Wärme und Bewegungsfreiheit — nicht nur über die Optik. Jeder Beitrag gibt seinen Lesepfad und die Herkunft seiner Quellen an.",
    compteur: "verfügbare Beiträge",
    compteurUn: "verfügbarer Beitrag",
    vide: "In diesem Lesepfad ist für diese Disziplin noch nichts veröffentlicht. Die geplanten Themen sind weiter unten aufgeführt: wir kündigen lieber kommende Inhalte an, als sie zu approximieren.",
    lire: "Beitrag lesen",
    replier: "Einklappen",
    sources: "Quellen",
    prochainement: "Demnächst",
    prochainementTitre: "Geplante Themen, noch nicht veröffentlicht",
    vague1: "Erste Welle",
    vague2: "Zweite Welle",
    calendrier: "Zeitplan",
    calendrierTitre: "Sechs Monate Produktion, Monat für Monat",
    calendrierVideo: "Langvideo",
    temps: "Takt",
    tempsTitre: "Geschätzte Produktionszeit",
    tempsArticle: "Artikel",
    tempsVideo: "Langvideo",
    tempsShort: "Kurzformat",
    teaser: "Wissensbeiträge, vom ersten Kauf bis zu den Materialien: wählen Sie Ihren Lesepfad.",
    metaTitre: "Bibliothek — Größe und Passform verstehen | Sillage",
    metaDesc:
      "Wissensbeiträge vom ersten Kauf bis zur Expertise: Neopren, Ski, Trapeze. Was gesichert ist, was von den Marken kommt, was noch unbekannt ist.",
  },
  reperes: {
    eyebrow: "Wissenswertes",
    titre: "Größen verstehen, bevor Sie wählen",
    sous: "Was Marken tatsächlich veröffentlichen, was nicht, und was das für Sie ändert. Alles hier stammt aus erfassten Quellen, nie aus einer Schätzung.",
    metaTitre: "Größen-Wissenswertes — Sillage",
    metaDesc:
      "Größentabellen, das Vokabular der Schnitte und wie man sich richtig misst, um den passenden Neopren- oder Bergartikel zu wählen.",
  },
  nav: {
    trouver: "Meine Größe finden",
    biblio: "Bibliothek: vom ersten Kauf bis zur Expertise",
    reperes: "Wissenswertes zu Größentabellen",
  },
  langueTexte:
    "Oberfläche und Zusammenfassungen sind übersetzt. Der Beitragstext bleibt auf Französisch: wir bevorzugen einen lektorierten Text gegenüber einer maschinellen Übersetzung.",
  contenu: {
    flushing: {
      titre: "Zu groß kühlt Ihr Neoprenanzug Sie aus: die Flushing-Falle",
      chapo:
        "Ein Neoprenanzug hält Sie nicht trocken: er begrenzt den Wärmeaustausch und den Wasseraustausch.",
    },
    "epaules-rame": {
      titre: "Zu eng kann die Schultern beim Paddeln erschöpfen",
      chapo:
        "Ein zu kleiner Anzug kann den Brustkorb einengen oder die Schultern einschränken: jede Bewegung kostet mehr Kraft.",
    },
    "deux-centimetres": {
      titre: "Was ein Fehler von 2 cm ändern kann",
      chapo:
        "Wenige Zentimeter werden entscheidend, wenn sie Sie an die Grenze zwischen zwei Größen bringen.",
    },
    "meme-m": {
      titre: "Warum dasselbe „M“ von Marke zu Marke nichts bedeutet",
      chapo:
        "Es gibt keine universelle Größe, die garantiert, dass ein M überall dieselben Maße bedeutet.",
    },
    cou: {
      titre: "Halsabdichtung: eine Zone, die Größentabellen selten beschreiben",
      chapo:
        "Der Hals ist eine funktional wichtige Zone, doch sein Umfang taucht selten in öffentlichen Größentabellen auf.",
    },
    "morphologie-a": {
      titre: "Birnenform: warum manche Tabellen bestimmte Proportionen schlecht beschreiben",
      chapo:
        "Ausgeprägtere Hüften und Oberschenkel mit schmalerer Taille: zwei Personen mit derselben Nominalgröße brauchen unter Umständen unterschiedliche Schnitte.",
    },
    "pantalon-ski": {
      titre: "Skihose: warum Hüfte und Oberschenkel zum limitierenden Faktor werden können",
      chapo:
        "Der Taillenumfang allein reicht nicht: Becken, Oberschenkel und Schrittlänge bestimmen Beweglichkeit und Anziehen.",
    },
    layering: {
      titre: "Lagen im Schnee: wie viel Platz, ohne in der Jacke zu schwimmen",
      chapo: "Eine Jacke muss Ihre Lagen aufnehmen, ohne unnötig sperrig zu werden.",
    },
    "compression-triathlon": {
      titre: "Triathlon: nützliche Kompression gegenüber schädlicher Kompression",
      chapo:
        "Ein Triathlonanzug ist körpernah geschnitten, ohne eine wesentliche Einschränkung der Atmung oder der Bewegung zu werden.",
    },
    "harnais-longueur-dos": {
      titre: "Kite-Trapez: auch die Rückenlänge zählt",
      chapo: "Ein Trapez wird nicht allein anhand eines Umfangs gewählt.",
    },
    "epaisseur-ajustement": {
      titre: "Dickes gegenüber dünnes Neopren: die Dicke verändert die Passform",
      chapo:
        "Bei vergleichbarer Konstruktion verändert eine höhere Dicke im Allgemeinen die gefühlte Flexibilität.",
    },
    zip: {
      titre: "Rücken-, Brustreißverschluss oder ohne: was das für die Passform ändert",
      chapo:
        "Das Einstiegssystem verändert die Architektur des Anzugs und kann Beweglichkeit, Wassereintritt und das Anziehen beeinflussen.",
    },
    "cinq-erreurs-mesure": {
      titre: "Richtig messen: die fünf Fehler, die alles verfälschen",
      chapo:
        "Fehler entstehen meist durch ein instabiles Vorgehen, nicht durch das Maßband selbst.",
    },
    "cout-des-retours": {
      titre:
        "Ein falsch dimensioniertes Kleidungsstück wird oft zurückgeschickt: die wahren Kosten von Retouren",
      chapo:
        "Größe und Passform gehören zu den Hauptgründen für Retouren beim Online-Bekleidungskauf.",
    },
    "essayage-et-conseil": {
      titre: "Anprobe im Laden und Online-Beratung: intelligent kombinieren",
      chapo: "Geschäfte und digitale Beratung stehen sich nicht entgegen.",
    },
    "zone-par-zone": {
      titre: "Warum SILLAGE zonenweise argumentiert",
      chapo:
        "Ein technisches Kleidungsstück lässt sich nicht immer mit einer einzigen Größenangabe beschreiben.",
    },
    "statique-dynamique": {
      titre: "Statische Passform und dynamische Passform",
      chapo: "Ausrüstung, die im Stehen richtig wirkt, kann sich in Bewegung anders verhalten.",
    },
    "meme-taille-comportement": {
      titre: "Warum zwei Anzüge derselben Größe sich unterschiedlich verhalten können",
      chapo: "Der Buchstabe auf dem Etikett beschreibt nur einen Teil der Produktgeometrie.",
    },
    "donnee-inconnue": {
      titre: "Wie SILLAGE mit einem unbekannten Wert umgeht",
      chapo: "Ein fehlender Wert ist selbst eine Information.",
    },
    "apres-sml": {
      titre: "Jenseits von S, M, L: hin zu einer mehrdimensionalen Sicht auf die Passform",
      chapo:
        "Herkömmliche Größen pressen einen mehrdimensionalen Körper in eine einzige Kategorie.",
    },
    "une-grille-par-marque": {
      titre: "Warum eine Marke nur eine Tabelle für ihr ganzes Sortiment veröffentlicht",
      chapo:
        "Fast jede Marke in unseren Disziplinen veröffentlicht eine Haupttabelle pro Geschlecht, nicht eine pro Modell.",
    },
    "vocabulaire-des-coupes": {
      titre: "Das Vokabular der Schnitte und was es tatsächlich bedeutet",
      chapo:
        "Slim, Regular, Relaxed, Trim, Comfort Fit, Performance Fit: das sind offizielle und nutzbare Begriffe.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Was eine Größentabelle nicht verrät",
      chapo:
        "Eine Tabelle liefert Körpermaßbereiche. Sie sagt nichts über Material, Dehnbarkeit oder Schnittteile.",
    },
    "bien-mesurer": {
      titre: "Sich richtig messen: fünf Regeln, die das Ergebnis verändern",
      chapo:
        "Ein schlecht gehaltenes Maßband verschiebt die Empfehlung um eine ganze Größe. Entscheidende Zonen werden von Hand gemessen.",
    },
    debuter: {
      titre: "Einsteiger? Drei Anhaltspunkte vor dem Kauf",
      chapo: "Die richtige Größe hängt zunächst von der Nutzung ab, dann von der Marke.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopren", d: "Anzüge und Artikel für Wassersport." },
  B: { l: "Ski und Snowboard", d: "Bergbekleidung, Lagen und Shells." },
  C: {
    l: "Wassersport-Trapeze",
    d: "Hüfttrapez, Sitztrapez, Trapezgürtel.",
  },
  "C.fermeture": {
    l: "Diese Familie öffnet sich, sobald unsere Markendaten die Rückenhöhe zuverlässig abdecken. Wir empfehlen lieber nichts, als auf unsicherer Datenbasis zu empfehlen.",
  },
  A1: { l: "Surfen und Wellensport", d: "Welle, Longboard, Bodyboard." },
  A2: {
    l: "Freiwasser und Triathlon",
    d: "Der Schwimmzug macht die Schulterfreiheit zur vorrangigen Einschränkung.",
  },
  A3: {
    l: "Kitesurfen, Wingfoil und Mischpraxis",
    d: "Zusätzliche Einschränkung an Taille und Hüfte durch das Tragen eines Trapezes.",
  },
  A4: {
    l: "Tauchen",
    d: "Der Druck in der Tiefe macht die Passform des Rumpfes und die Beinlänge entscheidend.",
  },
  B0: { l: "Ski und Snowboard", d: "Bergbekleidung." },
  "A1-integrale": { l: "Ganzkörperanzug", d: "Lange Arme und Beine." },
  "A1-shorty": { l: "Shorty", d: "Kurze Arme und Beine." },
  "A1-top": { l: "Top", d: "Nur Neopren-Oberteil." },
  "A2-integrale": { l: "Schwimmanzug", d: "Ganzkörperanzug für das Schwimmen." },
  "A3-integrale": { l: "Ganzkörperanzug", d: "Unter einem Trapez getragen." },
  "A4-integrale": { l: "Tauchanzug", d: "Nasser Ganzkörperanzug." },
  B1: { l: "Jacke", d: "Shell- oder gefütterte Jacke." },
  B2: { l: "Hose oder Latzhose", d: "Die häufigste Fehlerzone von Standardtabellen." },
  B3: { l: "Basis- oder Mittellage", d: "Technische Unterlage." },
  B4: {
    l: "Einteiler",
    d: "Jacke und Hose kombiniert, zusätzliche Einschränkung bei der Rumpflänge.",
  },
  "q.couches": { l: "Planen Sie, eine Zwischenschicht darunter zu tragen?" },
  "q.couches.fine": { l: "Eine dünne Lage" },
  "q.couches.intermediaire": { l: "Eine dünne Lage und ein Fleece" },
  "q.couches.epaisse": { l: "Mehrere dicke Lagen" },
  "q.couches.inconnu": { l: "Weiß ich noch nicht" },
  "q.frequence": { l: "Wie oft üben Sie diese Sportart aus?" },
  "q.frequence.occasionnel": { l: "Ein paar Ausfahrten pro Jahr" },
  "q.frequence.regulier": { l: "Mehrmals im Monat" },
  "q.frequence.intensif": { l: "Jede Woche oder öfter" },
  "q.temperature": { l: "In welchem Wasser üben Sie am häufigsten?" },
  "q.temperature.froide": { l: "Kalt, unter 15 °C" },
  "q.temperature.temperee": { l: "Gemäßigt, 15 bis 20 °C" },
  "q.temperature.chaude": { l: "Warm, über 20 °C" },
  "q.preference": { l: "Welche Passform bevorzugen Sie?" },
  "q.preference.proche": { l: "Körpernah" },
  "q.preference.neutre": { l: "Keine klare Präferenz" },
  "q.preference.aise": { l: "Mit etwas Spielraum" },
};

export default { core, pages, catalogue };
