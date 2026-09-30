type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Rozmiar według sylwetki",
    tagline: "Właściwy model do Twojej aktywności. Właściwy rozmiar do Twojego ciała.",
    dataNote:
      "Oficjalne tabele rozmiarów producentów, zebrane i zweryfikowane, nigdy nie wymyślone.",
    langue: "Język",
  },
  steps: {
    progress: "Postęp",
    s1: "Wybór",
    s2: "Zastosowanie",
    s3: "Pomiary",
    s4: "Wynik",
    etape: "Etap",
  },
  buttons: {
    next: "Dalej",
    back: "Wstecz",
    result: "Zobacz wynik",
    restart: "Nowe wyszukiwanie",
    pieces: "Zobacz produkty",
  },
  sel: {
    titre: "Twoja aktywność",
    sous: "Wybierz rodzinę, dyscyplinę, a następnie produkt. Pytamy tylko o pomiary istotne dla tego produktu.",
    famille: "Rodzina",
    discipline: "Dyscyplina",
    piece: "Produkt",
  },
  usage: {
    titre: "Twoje zastosowanie",
    sous: "Kilka krótkich pytań. Pomagają określić poszukiwane dopasowanie.",
    geneTitre: "Czy na wcześniejszym sprzęcie odczuwałeś/aś dyskomfort?",
    geneMulti: "Zaznacz każdy odczuwany dyskomfort. Każdy zawęża tolerancję tylko w tej strefie.",
    jamais: "Nigdy nie miałem/-am tego typu produktu",
    oui: "Tak, w jednym konkretnym miejscu",
    ou: "Gdzie?",
    choisirZone: "Wybierz obszar",
    tropSerre: "Za ciasny",
    tropAmple: "Za obszerny",
  },
  mes: {
    titre: "Twoje pomiary",
    sous: "Wystarczy miękka miara krawiecka. Kluczowe obszary dla tego produktu mierzy się ręcznie: to tam automatyczne szacowanie jest najmniej wiarygodne.",
    determinant: "Kluczowy",
    facultatif: "Opcjonalny",
    sansMesure:
      "Bez tego pomiaru rekomendacja jest wciąż możliwa, ale mniej precyzyjna w tym obszarze.",
    manque: "Brakuje jednego lub kilku kluczowych pomiarów dla tego produktu.",
  },
  zones: {
    c: {
      label: "Obwód klatki piersiowej",
      guide:
        "Miarka poziomo w najszerszym miejscu klatki piersiowej, na samej bieliźnie. Wydech normalny; miarka przylegająca, ale nie zaciśnięta.",
    },
    wa: {
      label: "Obwód pasa",
      guide:
        "W naturalnej linii pasa, między żebrami a biodrami. Nie wciągaj brzucha; dysz normalnie.",
    },
    hp: {
      label: "Obwód bioder",
      guide:
        "W najszerszym miejscu bioder i pośladków, stopy razem. Sprawdź w zwierciadle, że miarka jest w poziomie.",
    },
    th: {
      label: "Obwód uda",
      guide:
        "W najszerszym miejscu uda, w pozycji stojącej, noga rozluźniona, ciężar rozłożony na obie stopy.",
    },
    h: {
      label: "Wzrost",
      guide: "Plecami do ściany, bez butów, pięty razem, wzrok skierowany na wprost.",
    },
    wt: { label: "Waga", guide: "Rano, bez ciężkiej odzieży." },
    ij: {
      label: "Długość wewnętrzna nogi",
      guide: "Od krocza do podłogi, plecami do ściany, bez butów.",
    },
    bl: {
      label: "Długość pleców",
      guide:
        "Od 7. kręgu szyjnego (u podstawy kołnierza t-shirtu) do grzebienia kości biodrowej, na wysokości kości biodrowej.",
    },
    nk: { label: "Obwód szyi", guide: "U podstawy szyi, miarka poziomo, bez zaciskania." },
    bc: {
      label: "Obwód bicepsa",
      guide: "W najszerszym miejscu ramienia, rozluźnionego wzdłuż ciała.",
    },
    sh: {
      label: "Szerokość ramion",
      guide:
        "Od jednego wyrostka barkowego do drugiego, przez górną część pleców, ramiona rozluźnione.",
    },
    ws: {
      label: "Rozpiętość ramion",
      guide:
        "Ramiona wyprostowane w poziomie, od końca środkowego palca do końca środkowego palca, plecami do ściany.",
    },
    al: {
      label: "Długość ramienia",
      guide: "Od wyrostka barkowego do zgięcia nadgarstka, ramię lekko zgięte, ręka na biodrze.",
    },
    tl: {
      label: "Długość torsu",
      guide: "Od podstawy szyi, przez ramię, do krocza i z powrotem po plecach.",
    },
    ak: {
      label: "Obwód kostki",
      guide: "Tuż nad kostką, stopa płasko na podłodze, miarka bez zaciskania.",
    },
    dh: {
      label: "Wysokość pleców",
      guide:
        "Od grzebienia kości biodrowej do żeber pływających, po boku tułowia, w pozycji stojącej.",
    },
    pv: {
      label: "Obwód miednicy",
      guide: "Na wysokości grzebieni kości biodrowych, miarka poziomo, brzuch rozluźniony.",
    },
    il: {
      label: "Pas na wysokości grzebieni kości biodrowych",
      guide: "Miarka umieszczona dokładnie na grzebieniach kości biodrowych, poziomo, bez ucisku.",
    },
  },
  consent: {
    titre: "Twoje dane",
    intro:
      "Domyślnie ta sesja jest tymczasowa: Twoje pomiary pozostają w pamięci na czas konsultacji i nie są zapisywane. Żadne pole nie jest wcześniej zaznaczone.",
    sessionL: "Użyć moich pomiarów do tej rekomendacji",
    sessionD: "Wymagane, aby uzyskać wynik teraz.",
    profilL: "Zachować mój profil poza tą sesją",
    profilD: "Aby odnaleźć Twoje pomiary przy kolejnej wizycie. Odmowa nie wpływa na wynik.",
    agregeL: "Przyczynić się, w formie zagregowanej i anonimowej, do ulepszania usługi",
    agregeD: "Brak możliwości powrotu do Twojego profilu.",
    marchandL: "Przekazać zalecany rozmiar partnerskiemu sprzedawcy",
    marchandD: "Tylko rozmiar, nigdy Twoje pomiary.",
    droits:
      "Dostęp, poprawianie, usunięcie, przenoszenie danych i odwołanie zgody są dostępne w każdej chwili z interfejsu.",
  },
  res: {
    titre: "Wynik",
    refusTitre: "Nie możemy jeszcze odpowiedzieć",
    refusSuite:
      "Twoje pomiary zostały uwzględnione. Gdy tylko marka spełni nasze wymagania dotyczące pokrycia danych dla tego produktu, rekomendacja stanie się dostępna.",
    indepartageables:
      "Dwie marki pasują równie dobrze. Wolimy Ci to powiedzieć, niż rozstrzygać arbitralnie.",
    coupeDeclaree: "Deklarowany krój",
    sourceMarque: "źródło marki",
    sourceSecondaire: "źródło wtórne",
    tracabilite: "Śledzenie tej konsultacji",
    referentiel: "Dane referencyjne",
    parametres: "Parametry",
    horodatage: "Znacznik czasu",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Za ciasny", ajuste: "Dopasowany", conforme: "Dobre dopasowanie", ample: "Luźny" },
  confiance: {
    mot: "Zaufanie",
    1: "bardzo niskie",
    2: "niskie",
    3: "średnie",
    4: "wysokie",
    5: "bardzo wysokie",
  },
  repere: {
    mot: "Wskazówka",
    grille: "Dlaczego marka publikuje jedną tabelę dla całej gamy",
    mesurer: "Dobre mierzenie: pięć reguł zmieniających wynik",
    nonDit: "Czego tabela rozmiarów nie mówi i dlaczego to zapisujemy",
  },
  steps2: { profile: "Twój profil", measures: "Twoje pomiary", results: "Twoje rozmiary" },
  gender: { title: "Tabele do użycia", m: "Tabele męskie", f: "Tabele damskie" },
  disc: {
    title: "Dyscyplina",
    surf: "Surfing",
    eaulibre: "Triathlon / woda otwarta",
    plongee: "Nurkowanie / apnea",
    ski: "Narty i snowboard",
    harnais: "Trapez windsurfingowy / kite",
    soon: "Wkrótce",
    shoesRun: "Buty do biegania",
    shoesSki: "Buty narciarskie",
  },
  buttons2: {
    toMeasures: "Przejdź do moich pomiarów",
    compute: "Oblicz moje rozmiary",
    edit: "Zmień moje pomiary",
    how: "Jak mierzyć",
    hide: "Ukryj instrukcje",
    more: "Więcej informacji",
    optional: "opcjonalnie",
  },
  issue: {
    title: "Gdzie najczęściej pojawiają się problemy z dopasowaniem?",
    none: "Brak szczególnych problemów",
    thighs: "Uda i pośladki",
    chest: "Ramiona i klatka piersiowa",
    length: "Długości (tors, nogi)",
  },
  anchor: {
    title: "Jeśli masz już pianka w swoim rozmiarze, jak ją odczuwasz?",
    none: "Nie mam / pomiń",
    fit: "Dobrze dopasowana",
    tight: "Za ciasna",
    loose: "Za obszerna, przecieki wody",
    why: "Ta informacja doprecyzowuje Twój profil pomiarowy.",
  },
  results: {
    title: "Rekomendacje według marki",
    bottom: "Spodnie",
    top: "Kurtka",
    ratioHW: "Stosunek bioder do pasa",
    ratioTH: "Stosunek uda do bioder",
    perZone: "Szczegóły według obszaru",
  },
  warn: {
    noHips:
      "Ta marka nie publikuje wystarczających informacji o biodrach: nasza rekomendacja jest tu mniej pewna.",
    frontier: "Jesteś między dwoma rozmiarami u tej marki. Jeśli możesz przymierzyć, zalecamy to.",
    empty: "Nie mamy jeszcze zweryfikowanych danych dla tej kategorii.",
    dimMissing: "nieopublikowane przez tę markę",
    biased:
      "Ta marka dopasowuje się ściśle w biodrach: w razie wątpliwości wybraliśmy dla Ciebie bezpieczniejszy rozmiar.",
    splitSizes: "Różne rozmiary kurtki i spodni są normalnym wynikiem, nie anomalią.",
  },
  feedback: {
    title: "Jak leży?",
    fit: "Idealnie",
    tight: "Za ciasny",
    loose: "Za duży",
    thanks: "Dziękujemy — Twoja opinia poprawia rekomendacje dla wszystkich typów sylwetki.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Ścieżka lektury",
    tous: "Wszystkie",
    decouvrir: "Odkryj",
    comprendre: "Zrozum",
    approfondir: "Poznaj głębiej",
    expert: "Ekspert",
    lecture: "Czas lektury",
  },
  disc: {
    mot: "Dyscyplina",
    toutes: "Wszystkie",
    transversal: "Przekrojowo",
    surf: "Surfing",
    "eau-libre": "Woda otwarta / triathlon",
    kite: "Kite / wingfoil",
    ski: "Narty / snowboard",
    harnais: "Trapezy",
    plongee: "Nurkowanie",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Biblioteka",
    titre: "Zrozumieć przed zakupem, od pierwszego zakupu do eksperckiej wiedzy",
    sous: "Rozmiar i dopasowanie decydują o komforcie, cieple i ruchu — nie tylko o wyglądzie. Każdy artykuł wskazuje swoją ścieżkę lektury i pochodzenie źródeł.",
    compteur: "dostępnych artykułów",
    compteurUn: "dostępny artykuł",
    vide: "Nic nie opublikowano w tej ścieżce dla tej dyscypliny. Zaplanowane tematy są wypisane poniżej: woleimy ogłosić nadchodzącą treść, niż ją przybliżać.",
    lire: "Czytaj artykuł",
    replier: "Zwiń",
    sources: "Źródła",
    prochainement: "Wkrótce",
    prochainementTitre: "Zaplanowane tematy, jeszcze niepublikowane",
    vague1: "Pierwsza fala",
    vague2: "Druga fala",
    calendrier: "Kalendarz",
    calendrierTitre: "Sześć miesięcy produkcji, miesiąc po miesiącu",
    calendrierVideo: "Dłuższy film",
    temps: "Rytm",
    tempsTitre: "Szacowany czas produkcji",
    tempsArticle: "Artykuł",
    tempsVideo: "Dłuższy film",
    tempsShort: "Format krótki",
    teaser: "Artykuły wiedzy, od pierwszego zakupu do materiałów: wybierz swoją ścieżkę lektury.",
    metaTitre: "Biblioteka — zrozumieć rozmiar i dopasowanie | Sillage",
    metaDesc:
      "Artykuły wiedzy od pierwszego zakupu do eksperckiej wiedzy: pianki, narty, trapezy. Co jest ustalone, co pochodzi od marek, czego jeszcze nie wiemy.",
  },
  reperes: {
    eyebrow: "Wskazówki",
    titre: "Zrozumieć rozmiary przed wyborem",
    sous: "Co marki naprawdę publikują, czego nie publikują i co to zmienia dla Ciebie. Wszystko tutaj pochodzi ze zweryfikowanych źródeł, nigdy z szacunku.",
    metaTitre: "Wskazówki dotyczące rozmiarów — Sillage",
    metaDesc:
      "Zrozumieć tabele rozmiarów, słownictwo krojów i sposób mierzenia się, aby wybrać właściwą piankę lub odzież górską.",
  },
  nav: {
    trouver: "Znajdź mój rozmiar",
    biblio: "Biblioteka: od pierwszego zakupu do eksperckiej wiedzy",
    reperes: "Wskazówki dotyczące tabel rozmiarów",
  },
  langueTexte:
    "Interfejs i podsumowania są przetłumaczone. Treść artykułów pozostaje po francusku: wolimy tekst sprawdzony przez korektora niż tłumaczenie automatyczne.",
  contenu: {
    flushing: {
      titre: "Za duża pianka Cię wychładza: pułapka flushingu",
      chapo: "Pianka nie utrzymuje Cię suchym: ogranicza wymianę ciepła i ruch wody.",
    },
    "epaules-rame": {
      titre: "Za ciasna może wyczerpać Twoje ramiona podczas wiosłowania",
      chapo:
        "Zbyt mała pianka może ściskać klatkę piersiową lub ograniczać ramiona: każdy ruch kosztuje więcej.",
    },
    "deux-centimetres": {
      titre: "Co może zmienić błąd 2 cm",
      chapo:
        "Kilka centymetrów staje się decydujące, gdy stawiają Cię na granicy między dwoma rozmiarami.",
    },
    "meme-m": {
      titre: "Dlaczego to samo „M” nie znaczy nic od marki do marki",
      chapo:
        "Nie istnieje uniwersalny rozmiar gwarantujący, że M oznacza te same wymiary wszędzie.",
    },
    cou: {
      titre: "Szczelność przy szyi: obszar rzadko opisywany w tabelach rozmiarów",
      chapo:
        "Szyja jest funkcjonalnie ważnym obszarem, jednak jej obwód rzadko pojawia się w publicznych tabelach rozmiarów.",
    },
    "morphologie-a": {
      titre: "Sylwetka gruszki: dlaczego niektóre tabele źle opisują pewne proporcje",
      chapo:
        "Pełniejsze biodra i uda z węższym pasem: dwie osoby o tym samym nominalnym rozmiarze mogą potrzebować różnych krojów.",
    },
    "pantalon-ski": {
      titre: "Spodnie narciarskie: dlaczego biodra i uda mogą być czynnikiem ograniczającym",
      chapo:
        "Obwód pasa nie wystarcza: miednica, uda i długość krocza decydują o mobilności i sposobie noszenia.",
    },
    layering: {
      titre: "Warstwy na śniegu: ile miejsca bez pływania w kurtce",
      chapo: "Kurtka musi pomieścić Twoje warstwy bez zbędnej obszerności.",
    },
    "compression-triathlon": {
      titre: "Triathlon: przydatna kompresja a szkodliwa kompresja",
      chapo:
        "Pianka triathlonowa jest zaprojektowana blisko ciała, bez znaczącego ograniczenia oddychania lub ruchu.",
    },
    "harnais-longueur-dos": {
      titre: "Trapez kitesurfingowy: długość pleców też się liczy",
      chapo: "Trapez nie wybiera się na podstawie samego obwodu.",
    },
    "epaisseur-ajustement": {
      titre: "Gruby czy tenki neopren: grubość zmienia dopasowanie",
      chapo:
        "Przy porównywalnej konstrukcji zwiększenie grubości zwykle zmienia postrzeganą elastyczność.",
    },
    zip: {
      titre: "Zamek na tyle, z przodu lub bez zamka: co zmienia dla dopasowania",
      chapo:
        "System wejścia zmienia architekturę pianki i może wpływać na mobilność, szczelność i łatwość wkładania.",
    },
    "cinq-erreurs-mesure": {
      titre: "Prawidłowe mierzenie: pięć błędów, które fałszują wszystko",
      chapo: "Błędy pochodzą zwykle z niestabilnego protokołu, a nie z samej miarki.",
    },
    "cout-des-retours": {
      titre: "Źle dopasowany produkt zazwyczaj wraca: rzeczywisty koszt zwrotów",
      chapo:
        "Rozmiar i dopasowanie są jednym z głównych powodów zwrotów w odzieży zamawianej online.",
    },
    "essayage-et-conseil": {
      titre: "Przymierzanie w sklepie i porady online: łączenie ich z rozsądkiem",
      chapo: "Sklep i cyfrowa porada nie są przeciwstawne.",
    },
    "zone-par-zone": {
      titre: "Dlaczego SILLAGE rozumuje obszar po obszarze",
      chapo: "Techniczny produkt nie zawsze można opisać jedną etykietą rozmiaru.",
    },
    "statique-dynamique": {
      titre: "Dopasowanie statyczne i dopasowanie dynamiczne",
      chapo: "Sprzęt, który wydaje się dobry stojąc, może zachowywać się inaczej w ruchu.",
    },
    "meme-taille-comportement": {
      titre: "Dlaczego dwie pianki tego samego rozmiaru mogą zachowywać się różnie",
      chapo: "Litera na etykiecie opisuje tylko część geometrii produktu.",
    },
    "donnee-inconnue": {
      titre: "Jak SILLAGE traktuje dane, których nie znamy",
      chapo: "Brak wartości jest sam w sobie informacją.",
    },
    "apres-sml": {
      titre: "Poza S, M, L: w kierunku wielowymiarowego widzenia dopasowania",
      chapo: "Tradycyjne rozmiary kompresują wielowymiarowe ciało w jedną kategorię.",
    },
    "une-grille-par-marque": {
      titre: "Dlaczego marka publikuje jedną tabelę dla całej gamy",
      chapo:
        "Prawie każda marka w naszych dyscyplinach publikuje jedną główną tabelę na płeć, nie jedną na model.",
    },
    "vocabulaire-des-coupes": {
      titre: "Słownictwo krojów i co ono naprawdę znaczy",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: to oficjalne i użyteczne terminy.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Czego tabela rozmiarów nie mówi",
      chapo:
        "Tabela podaje przedziały pomiarów ciała. Nie podaje materiału, elastyczności czy paneli.",
    },
    "bien-mesurer": {
      titre: "Dobre mierzenie: pięć reguł zmieniających wynik",
      chapo:
        "Źle utrzymana miarka przesuwa rekomendację o cały rozmiar. Kluczowe obszary mierzy się ręcznie.",
    },
    debuter: {
      titre: "Zaczynasz? Trzy punkty odniesienia przed zakupem",
      chapo: "Właściwy rozmiar zależy najpierw od zastosowania, a potem od marki.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopren", d: "Pianki i produkty do sportów wodnych." },
  B: { l: "Narty i snowboard", d: "Odzież górska, warstwy i skorupy." },
  C: { l: "Trapezy do sportów wodnych", d: "Trapez pasowy, trapez siedzeniowy, trapez pełny." },
  "C.fermeture": {
    l: "Ta rodzina zostanie otwarta, gdy nasze dane marek zweryfikowanym sposobem obejmą wysokość pleców. Woleimy nic nie zalecać, niż zalecać na podstawie niepewnych danych.",
  },
  A1: { l: "Surfing i sporty falowe", d: "Fala, longboard, bodyboard." },
  A2: {
    l: "Woda otwarta i triathlon",
    d: "Ruch pływacki sprawia, że swoboda ramion jest priorytetowym ograniczeniem.",
  },
  A3: {
    l: "Kitesurfing, wingfoil i praktyki mieszane",
    d: "Dodatkowe ograniczenie w pasie i biodrach z powodu trapezu.",
  },
  A4: {
    l: "Nurkowanie",
    d: "Kompresja na głębokości sprawia, że dopasowanie torsu i długość nogi są decydujące.",
  },
  B0: { l: "Narty i snowboard", d: "Odzież górska." },
  "A1-integrale": { l: "Kombinezon pełny", d: "Długie ramiona i nogi." },
  "A1-shorty": { l: "Shorty", d: "Krótkie ramiona i nogi." },
  "A1-top": { l: "Top", d: "Tylko górna część z neoprenu." },
  "A2-integrale": { l: "Pianka do pływania", d: "Kombinezon pełny zaprojektowany do pływania." },
  "A3-integrale": { l: "Kombinezon pełny", d: "Noszony pod trapezem." },
  "A4-integrale": { l: "Pianka do nurkowania", d: "Kombinezon mokry pełny." },
  B1: { l: "Kurtka", d: "Skorupa lub kurtka ocieplana." },
  B2: {
    l: "Spodnie lub kombinezon spodniowy",
    d: "Główny obszar problemów w standardowych tabelach.",
  },
  B3: { l: "Warstwa bazowa lub środkowa", d: "Techniczna warstwa spodnia." },
  B4: {
    l: "Kombinezon jednoczęściowy",
    d: "Kurtka i spodnie połączone, dodatkowe ograniczenie w długości torsu.",
  },
  "q.couches": { l: "Czy planujesz nosić warstwę środkową pod spodem?" },
  "q.couches.fine": { l: "Jedna cienka warstwa" },
  "q.couches.intermediaire": { l: "Jedna cienka warstwa i polar" },
  "q.couches.epaisse": { l: "Kilka grubych warstw" },
  "q.couches.inconnu": { l: "Jeszcze nie wiem" },
  "q.frequence": { l: "Jak często trenujesz?" },
  "q.frequence.occasionnel": { l: "Kilka wyjazdów w roku" },
  "q.frequence.regulier": { l: "Kilka razy w miesiącu" },
  "q.frequence.intensif": { l: "Co tydzień lub częściej" },
  "q.temperature": { l: "W jakiej wodzie najczęściej trenujesz?" },
  "q.temperature.froide": { l: "Chłodna, poniżej 15 °C" },
  "q.temperature.temperee": { l: "Umiarkowana, od 15 do 20 °C" },
  "q.temperature.chaude": { l: "Ciepła, powyżej 20 °C" },
  "q.preference": { l: "Jakie dopasowanie preferujesz?" },
  "q.preference.proche": { l: "Blisko ciała" },
  "q.preference.neutre": { l: "Bez wyraźnej preferencji" },
  "q.preference.aise": { l: "Z pewnym luzem" },
};

export default { core, pages, catalogue };
