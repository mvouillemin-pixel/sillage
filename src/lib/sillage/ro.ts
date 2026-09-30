type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Mărimea potrivită după morfologie",
    tagline: "Modelul potrivit pentru practica ta. Mărimea potrivită pentru corpul tău.",
    dataNote: "Grile oficiale ale producătorilor, culese și verificate, niciodată inventate.",
    langue: "Limbă",
  },
  steps: {
    progress: "Progres",
    s1: "Selecție",
    s2: "Utilizare",
    s3: "Măsurători",
    s4: "Rezultat",
    etape: "Etapă",
  },
  buttons: {
    next: "Continuă",
    back: "Înapoi",
    result: "Vezi rezultatul",
    restart: "Căutare nouă",
    pieces: "Vezi produsele",
  },
  sel: {
    titre: "Practica ta",
    sous: "Alege familia, disciplina, apoi produsul. Îți cerem doar măsurătorile utile pentru acest produs.",
    famille: "Familie",
    discipline: "Disciplină",
    piece: "Produs",
  },
  usage: {
    titre: "Utilizarea ta",
    sous: "Câteva întrebări scurte. Ele orientează ajustarea căutată.",
    geneTitre: "Ai simțit vreun disconfort cu un echipament anterior?",
    geneMulti: "Bifează fiecare disconfort resimțit. Fiecare restrânge toleranța doar în acea zonă.",
    jamais: "Nu am purtat niciodată acest tip de produs",
    oui: "Da, într-un loc anume",
    ou: "Unde?",
    choisirZone: "Alege o zonă",
    tropSerre: "Prea strâmt",
    tropAmple: "Prea larg",
  },
  mes: {
    titre: "Măsurătorile tale",
    sous: "Un metru de croitorie flexibil este suficient. Zonele determinante pentru acest produs se măsoară manual: aici estimarea automată este cea mai puțin fiabilă.",
    determinant: "Determinant",
    facultatif: "Opțional",
    sansMesure:
      "Fără această măsurătoare, recomandarea rămâne posibilă, dar mai puțin precisă pentru această zonă.",
    manque: "Lipsește una sau mai multe măsurători determinante pentru acest produs.",
  },
  zones: {
    c: {
      label: "Circumferința pieptului",
      guide:
        "Panglică orizontală în jurul punctului cel mai proeminent al pieptului, peste lenjeria intimă. Expirație normală, panglică ajustată fără să strângă.",
    },
    wa: {
      label: "Circumferința taliei",
      guide:
        "La cotul natural al taliei, între coaste și șolduri. Nu trage abdomenul înăuntru, respiră normal.",
    },
    hp: {
      label: "Circumferința șoldurilor",
      guide:
        "În jurul punctului cel mai proeminent al bazinului și al feselor, cu picioarele apropiate. Verifică orizontalitatea panglicii într-o oglindă.",
    },
    th: {
      label: "Circumferința coapsei",
      guide:
        "În jurul punctului cel mai proeminent al coapsei, în picioare, cu piciorul relaxat, greutatea repartizată pe ambele tălpi.",
    },
    h: {
      label: "Statură",
      guide: "Cu spatele la perete, fără încălțăminte, călcâiele apropiate, privirea orizontală.",
    },
    wt: { label: "Greutate", guide: "Dimineața, fără haine groase." },
    ij: {
      label: "Lungimea interioară a piciorului (de la crac)",
      guide: "De la crac până la podea, cu spatele la perete, fără încălțăminte.",
    },
    bl: {
      label: "Lungimea spatelui",
      guide:
        "De la a 7-a vertebră cervicală (la baza gulerului unui tricou) până la creasta iliacă, la nivelul osului șoldului.",
    },
    nk: {
      label: "Circumferința gâtului",
      guide: "La baza gâtului, panglică orizontală, fără să strângă.",
    },
    bc: {
      label: "Circumferința bicepsului",
      guide: "În jurul punctului cel mai proeminent al brațului, relaxat pe lângă corp.",
    },
    sh: {
      label: "Lățimea umerilor",
      guide:
        "De la un acromion la celălalt, trecând pe partea superioară a spatelui, cu umerii relaxați.",
    },
    ws: {
      label: "Anvergură",
      guide:
        "Brațele întinse orizontal, de la vârful unui deget mijlociu la celălalt, cu spatele la perete.",
    },
    al: {
      label: "Lungimea brațului",
      guide: "De la acromion până la cutura încheieturii mâinii, brațul ușor îndoit, mâna pe șold.",
    },
    tl: {
      label: "Lungimea trunchiului",
      guide: "De la baza gâtului, peste umăr, până la crac, apoi înapoi pe spate.",
    },
    ak: {
      label: "Circumferința gleznei",
      guide: "Chiar deasupra maleolei, cu talpa pe podea, panglică fără să strângă.",
    },
    dh: {
      label: "Înălțimea dorsală",
      guide:
        "De la creasta iliacă până la coastele flotante, pe lateralul trunchiului, în picioare.",
    },
    pv: {
      label: "Circumferința bazinului",
      guide: "La nivelul crestelor iliace, panglică orizontală, abdomen relaxat.",
    },
    il: {
      label: "Circumferința taliei la crestele iliace",
      guide: "Panglică poziționată exact pe crestele iliace, orizontal, fără compresie.",
    },
  },
  consent: {
    titre: "Datele tale",
    intro:
      "Implicit, această sesiune este efemeră: măsurătorile tale rămân în memorie pe durata consultării și nu sunt salvate. Nicio căsuță nu este bifată în avans.",
    sessionL: "Folosește măsurătorile mele pentru această recomandare",
    sessionD: "Necesar pentru a obține un rezultat acum.",
    profilL: "Păstrează-mi profilul dincolo de această sesiune",
    profilD:
      "Pentru a-ți regăsi măsurătorile la o vizită viitoare. Refuzul nu are consecințe asupra rezultatului.",
    agregeL: "Contribuie, în formă agregată și anonimă, la îmbunătățirea serviciului",
    agregeD: "Fără nicio legătură posibilă cu profilul tău.",
    marchandL: "Transmite mărimea recomandată către comerciantul partener",
    marchandD: "Doar mărimea, niciodată măsurătorile tale.",
    droits:
      "Accesul, rectificarea, ștergerea, portabilitatea și retragerea consimțământului sunt disponibile în orice moment din interfață.",
  },
  res: {
    titre: "Rezultat",
    refusTitre: "Nu îți putem răspunde încă",
    refusSuite:
      "Măsurătorile tale au fost luate în considerare. De îndată ce o marcă va atinge cerința noastră de acoperire pentru acest produs, recomandarea va deveni disponibilă.",
    indepartageables:
      "Două mărci se potrivesc la fel de bine. Preferăm să îți spunem asta decât să decidem arbitrar.",
    coupeDeclaree: "Croială declarată",
    sourceMarque: "sursă marcă",
    sourceSecondaire: "sursă secundară",
    tracabilite: "Trasabilitatea acestei consultări",
    referentiel: "Referențial",
    parametres: "Parametri",
    horodatage: "Marcaj temporal",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Prea strâmt", ajuste: "Ajustat", conforme: "Potrivire bună", ample: "Larg" },
  confiance: {
    mot: "Încredere",
    1: "foarte scăzută",
    2: "scăzută",
    3: "medie",
    4: "ridicată",
    5: "foarte ridicată",
  },
  repere: {
    mot: "Reper",
    grille: "De ce o marcă publică o singură grilă pentru toată gama",
    mesurer: "Cum să te măsori corect: cinci reguli care schimbă rezultatul",
    nonDit: "Ce nu spune o grilă de mărimi, și de ce o scriem noi",
  },
  steps2: { profile: "Profilul tău", measures: "Măsurătorile tale", results: "Mărimile tale" },
  gender: { title: "Grile de utilizat", m: "Grile bărbați", f: "Grile femei" },
  disc: {
    title: "Disciplină",
    surf: "Surf",
    eaulibre: "Triatlon / ape deschise",
    plongee: "Scufundare / apnee",
    ski: "Schi și snowboard",
    harnais: "Ham windsurf / kite",
    soon: "În curând",
    shoesRun: "Pantofi de alergare",
    shoesSki: "Clăpari de schi",
  },
  buttons2: {
    toMeasures: "Continuă la măsurătorile mele",
    compute: "Calculează mărimile mele",
    edit: "Modifică măsurătorile mele",
    how: "Cum se măsoară",
    hide: "Ascunde protocolul",
    more: "Află mai multe",
    optional: "opțional",
  },
  issue: {
    title: "Unde întâmpini cel mai des probleme de ajustare?",
    none: "Fără dificultăți deosebite",
    thighs: "Coapse și fese",
    chest: "Umeri și piept",
    length: "Lungimi (trunchi, picioare)",
  },
  anchor: {
    title: "Dacă ai deja un echipament de mărimea ta, cum îl simți?",
    none: "Nu am / nu se aplică",
    fit: "Bine ajustat",
    tight: "Prea strâmt",
    loose: "Prea larg, apă infiltrată",
    why: "Această informație rafinează profilul tău de măsurare.",
  },
  results: {
    title: "Recomandări pe marcă",
    bottom: "Pantalon",
    top: "Jachetă",
    ratioHW: "Raport șold / talie",
    ratioTH: "Raport coapsă / șold",
    perZone: "Detaliu pe zonă",
  },
  warn: {
    noHips:
      "Această marcă nu oferă suficiente informații despre șolduri: recomandarea noastră este mai puțin sigură aici.",
    frontier:
      "Ești între două mărimi la această marcă. Dacă poți încerca produsul, este recomandat.",
    empty: "Nu avem încă date verificate pentru această categorie.",
    dimMissing: "nepublicată de această marcă",
    biased:
      "Această marcă croiește strâmt la bazin: în caz de îndoială, am ales mărimea cea mai sigură pentru tine.",
    splitSizes:
      "Două mărimi diferite între jachetă și pantalon sunt un rezultat normal, nu o anomalie.",
  },
  feedback: {
    title: "Ți se potrivește?",
    fit: "Perfect",
    tight: "Prea strâmt",
    loose: "Prea larg",
    thanks: "Mulțumim, feedbackul tău îmbunătățește recomandările pentru toate morfologiile.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Traseu de lectură",
    tous: "Toate",
    decouvrir: "Descoperă",
    comprendre: "Înțelege",
    approfondir: "Aprofundează",
    expert: "Expert",
    lecture: "Timp de lectură",
  },
  disc: {
    mot: "Disciplină",
    toutes: "Toate",
    transversal: "Transversal",
    surf: "Surf",
    "eau-libre": "Ape deschise / triatlon",
    kite: "Kite / wingfoil",
    ski: "Schi / snowboard",
    harnais: "Hamuri",
    plongee: "Scufundare",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Bibliotecă",
    titre: "Înțelege înainte să cumperi, de la prima achiziție la expertiză",
    sous: "Mărimea și ajustarea decid confortul, căldura și mișcarea — nu doar aspectul. Fiecare fișă indică traseul de lectură și originea surselor.",
    compteur: "fișe disponibile",
    compteurUn: "fișă disponibilă",
    vide: "Nimic publicat pe acest traseu pentru această disciplină. Subiectele planificate sunt listate mai jos: preferăm să anunțăm un conținut viitor decât să îl aproximăm.",
    lire: "Citește fișa",
    replier: "Restrânge",
    sources: "Surse",
    prochainement: "În curând",
    prochainementTitre: "Subiecte planificate, încă nepublicate",
    vague1: "Primul val",
    vague2: "Al doilea val",
    calendrier: "Calendar",
    calendrierTitre: "Șase luni de producție, lună de lună",
    calendrierVideo: "Video lung",
    temps: "Ritm",
    tempsTitre: "Timpi de producție estimați",
    tempsArticle: "Articol",
    tempsVideo: "Video lung",
    tempsShort: "Format scurt",
    teaser: "Fișe de cunoștințe, de la prima achiziție la materiale: alege-ți traseul de lectură.",
    metaTitre: "Bibliotecă — înțelegerea mărimii și ajustării | Sillage",
    metaDesc:
      "Fișe de cunoștințe de la prima achiziție la expertiză: neopren, schi, hamuri. Ce este stabilit, ce vine de la mărci, ce nu se știe încă.",
  },
  reperes: {
    eyebrow: "Repere",
    titre: "Înțelege mărimile înainte să alegi",
    sous: "Ce publică efectiv mărcile, ce nu publică și ce schimbă asta pentru tine. Tot ce este indicat aici provine din surse înregistrate, niciodată dintr-o estimare.",
    metaTitre: "Repere de mărime — Sillage",
    metaDesc:
      "Înțelege grilele de mărimi, vocabularul croielilor și modul de a te măsura, pentru a alege produsul potrivit de neopren sau de munte.",
  },
  nav: {
    trouver: "Găsește-mi mărimea",
    biblio: "Bibliotecă: de la prima achiziție la expertiză",
    reperes: "Repere despre grilele de mărimi",
  },
  langueTexte:
    "Interfața și rezumatele sunt traduse. Corpul fișelor rămâne în franceză: preferăm un text corectat de un profesionist unei traduceri automate.",
  contenu: {
    flushing: {
      titre: "Prea larg, costumul tău te răcește: capcana flushing-ului",
      chapo:
        "Un costum de neopren nu te ține uscat: limitează schimburile de căldură și mișcarea apei.",
    },
    "epaules-rame": {
      titre: "Prea strâmt, îți poate obosi umerii la vâslit",
      chapo:
        "Un costum prea mic poate comprima toracele sau limita umerii: fiecare mișcare costă mai mult.",
    },
    "deux-centimetres": {
      titre: "Ce poate schimba o eroare de 2 cm",
      chapo:
        "Câțiva centimetri devin decisivi atunci când te plasează la limita dintre două mărimi.",
    },
    "meme-m": {
      titre: "De ce aceeași «M» nu înseamnă nimic de la o marcă la alta",
      chapo:
        "Nu există o mărime universală care să garanteze că un M reprezintă aceleași dimensiuni pretutindeni.",
    },
    cou: {
      titre: "Etanșeitatea la gât: o zonă rar descrisă de grilele de mărimi",
      chapo:
        "Gâtul este o zonă importantă din punct de vedere funcțional, totuși circumferința sa apare rar în grilele publice.",
    },
    "morphologie-a": {
      titre: "Morfologia în formă de pară: de ce unele grile descriu prost anumite proporții",
      chapo:
        "Șolduri și coapse mai pline cu o talie mai îngustă: două persoane cu aceeași mărime nominală pot avea nevoie de croieli diferite.",
    },
    "pantalon-ski": {
      titre: "Pantaloni de schi: de ce șoldurile și coapsele pot deveni factorul limitativ",
      chapo:
        "Circumferința taliei nu este suficientă: bazinul, coapsele și lungimea cracului determină mobilitatea și modul în care se îmbracă produsul.",
    },
    layering: {
      titre: "Straturi pe zăpadă: cât spațiu fără să te înoți în geacă",
      chapo: "O geacă trebuie să găzduiască straturile tale fără să devină inutil de voluminoasă.",
    },
    "compression-triathlon": {
      titre: "Triatlon: compresie utilă versus compresie dăunătoare",
      chapo:
        "Un costum de triatlon este conceput apropiat de corp, fără să devină o restricție majoră pentru respirație sau mișcare.",
    },
    "harnais-longueur-dos": {
      titre: "Ham de kite: contează și lungimea spatelui",
      chapo: "Un ham nu se alege doar pe baza unei circumferințe.",
    },
    "epaisseur-ajustement": {
      titre: "Neopren gros versus fin: grosimea schimbă ajustarea",
      chapo:
        "La construcție comparabilă, creșterea grosimii schimbă în general flexibilitatea percepută.",
    },
    zip: {
      titre: "Fermoar dorsal, frontal sau fără fermoar: ce schimbă pentru ajustare",
      chapo:
        "Sistemul de intrare schimbă arhitectura costumului și poate influența mobilitatea, infiltrarea apei și facilitatea de îmbrăcare.",
    },
    "cinq-erreurs-mesure": {
      titre: "Cum să te măsori corect: cele cinci erori care distorsionează totul",
      chapo:
        "Erorile provin de obicei dintr-un protocol instabil, nu din metrul de măsurat în sine.",
    },
    "cout-des-retours": {
      titre: "Un produs cu mărimea greșită este adesea returnat: costul real al retururilor",
      chapo:
        "Mărimea și ajustarea se numără printre principalele motive de retur în îmbrăcămintea comandată online.",
    },
    "essayage-et-conseil": {
      titre: "Probarea în magazin și sfaturile online: combinarea lor inteligentă",
      chapo: "Magazinul și sfatul digital nu sunt opuse.",
    },
    "zone-par-zone": {
      titre: "De ce SILLAGE raționează zonă cu zonă",
      chapo:
        "Un produs tehnic nu poate fi descris întotdeauna printr-o singură etichetă de mărime.",
    },
    "statique-dynamique": {
      titre: "Ajustare statică și ajustare dinamică",
      chapo:
        "Un echipament care pare potrivit în picioare poate avea un comportament diferit în mișcare.",
    },
    "meme-taille-comportement": {
      titre: "De ce două costume de aceeași mărime pot avea comportamente diferite",
      chapo: "Litera de pe etichetă descrie doar o parte din geometria produsului.",
    },
    "donnee-inconnue": {
      titre: "Cum gestionează SILLAGE o dată pe care nu o cunoaște",
      chapo: "O valoare lipsă este ea însăși o informație.",
    },
    "apres-sml": {
      titre: "Dincolo de S, M, L: către o viziune multidimensională a ajustării",
      chapo: "Mărimile tradiționale comprimă un corp multidimensional într-o singură categorie.",
    },
    "une-grille-par-marque": {
      titre: "De ce o marcă publică o singură grilă pentru toată gama",
      chapo:
        "Aproape toate mărcile din disciplinele noastre publică o grilă principală pe gen, nu una pe model.",
    },
    "vocabulaire-des-coupes": {
      titre: "Vocabularul croielilor și ce înseamnă de fapt",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: aceștia sunt termeni oficiali și utilizabili.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Ce nu îți spune o grilă de mărimi",
      chapo:
        "O grilă oferă intervale de măsurători corporale. Nu oferă nici materialul, nici elasticitatea, nici panelarea.",
    },
    "bien-mesurer": {
      titre: "Cum să te măsori corect: cinci reguli care schimbă rezultatul",
      chapo:
        "Un metru ținut greșit deplasează recomandarea cu o mărime întreagă. Zonele determinante se măsoară manual.",
    },
    debuter: {
      titre: "Începător? Trei repere înainte de a cumpăra",
      chapo: "Mărimea potrivită depinde întâi de utilizare, apoi de marcă.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopren", d: "Costume și produse pentru sporturi acvatice." },
  B: { l: "Schi și snowboard", d: "Îmbrăcăminte de munte, straturi și scoici (shell)." },
  C: { l: "Hamuri pentru sporturi acvatice", d: "Ham de talie, ham șezut, trapez." },
  "C.fermeture": {
    l: "Această familie se va deschide de îndată ce datele mărcilor noastre vor acoperi înălțimea dorsală într-un mod verificat. Preferăm să nu recomandăm nimic decât să recomandăm pe baza unor date incerte.",
  },
  A1: { l: "Surf și sporturi de val", d: "Val, longboard, bodyboard." },
  A2: {
    l: "Ape deschise și triatlon",
    d: "Mișcarea de înot face ca libertatea umărului să fie constrângerea prioritară.",
  },
  A3: {
    l: "Kitesurf, wingfoil și practici mixte",
    d: "Constrângere suplimentară la talie și șolduri din cauza hamului.",
  },
  A4: {
    l: "Scufundare",
    d: "Compresia în profunzime face ca ajustarea trunchiului și lungimea piciorului să fie decisive.",
  },
  B0: { l: "Schi și snowboard", d: "Produse de munte." },
  "A1-integrale": { l: "Costum integral", d: "Mânecă și picior lungi." },
  "A1-shorty": { l: "Shorty", d: "Mânecă și picior scurte." },
  "A1-top": { l: "Top", d: "Doar partea superioară din neopren." },
  "A2-integrale": { l: "Costum de înot", d: "Integral, conceput pentru înot." },
  "A3-integrale": { l: "Costum integral", d: "Purtat sub ham." },
  "A4-integrale": { l: "Costum de scufundare", d: "Integral umed." },
  B1: { l: "Geacă", d: "Scoică sau geacă cu izolație." },
  B2: { l: "Pantalon sau salopetă", d: "Zona principală de eroare a grilelor standard." },
  B3: { l: "Strat de bază sau intermediar", d: "Sub-strat tehnic." },
  B4: {
    l: "Combinezon dintr-o piesă",
    d: "Geacă și pantalon combinate, constrângere suplimentară pe lungimea trunchiului.",
  },
  "q.couches": { l: "Intenționați să purtați un strat intermediar dedesubt?" },
  "q.couches.fine": { l: "Un strat fin" },
  "q.couches.intermediaire": { l: "Un strat fin și un fleece" },
  "q.couches.epaisse": { l: "Mai multe straturi groase" },
  "q.couches.inconnu": { l: "Încă nu știu" },
  "q.frequence": { l: "Cât de des practici?" },
  "q.frequence.occasionnel": { l: "Câteva ieșiri pe an" },
  "q.frequence.regulier": { l: "De mai multe ori pe lună" },
  "q.frequence.intensif": { l: "În fiecare săptămână sau mai des" },
  "q.temperature": { l: "În ce apă practici cel mai des?" },
  "q.temperature.froide": { l: "Rece, sub 15 °C" },
  "q.temperature.temperee": { l: "Temperată, între 15 și 20 °C" },
  "q.temperature.chaude": { l: "Caldă, peste 20 °C" },
  "q.preference": { l: "Ce ajustare preferi?" },
  "q.preference.proche": { l: "Apropiată de corp" },
  "q.preference.neutre": { l: "Fără preferință marcată" },
  "q.preference.aise": { l: "Cu spațiu" },
};

export default { core, pages, catalogue };
