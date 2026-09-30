type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Vücut yapısına göre beden",
    tagline: "Sporunuza uygun model. Vücudunuza uygun beden.",
    dataNote: "Üreticilerin resmi beden tabloları, derlenmiş ve doğrulanmış, asla icat edilmemiş.",
    langue: "Dil",
  },
  steps: {
    progress: "İlerleme",
    s1: "Seçim",
    s2: "Kullanım",
    s3: "Ölçüler",
    s4: "Sonuç",
    etape: "Adım",
  },
  buttons: {
    next: "Devam et",
    back: "Geri",
    result: "Sonucu gör",
    restart: "Yeni arama",
    pieces: "Ürünleri gör",
  },
  sel: {
    titre: "Sporunuz",
    sous: "Önce aileyi, sonra disiplini, ardından ürünü seçin. Sadece bu ürün için önemli olan ölçüleri soruyoruz.",
    famille: "Aile",
    discipline: "Disiplin",
    piece: "Ürün",
  },
  usage: {
    titre: "Kullanımınız",
    sous: "Birkaç kısa soru. Bunlar aranan kalıbı belirler.",
    geneTitre: "Önceki bir malzemede rahatsızlık hissettiniz mi?",
    geneMulti: "Hissettiğiniz tüm rahatsızlıkları işaretleyin. Her biri yalnızca o bölgedeki toleransı daraltır.",
    jamais: "Bu tür bir ürünü hiç giymedim",
    oui: "Evet, belirli bir bölgede",
    ou: "Nerede?",
    choisirZone: "Bir bölge seçin",
    tropSerre: "Çok sıkı",
    tropAmple: "Çok bol",
  },
  mes: {
    titre: "Ölçüleriniz",
    sous: "Yumuşak bir mezura yeterlidir. Bu ürün için belirleyici bölgeler elle ölçülür: otomatik tahminin en az güvenilir olduğu yer burasıdır.",
    determinant: "Belirleyici",
    facultatif: "İsteğe bağlı",
    sansMesure: "Bu ölçü olmadan öneri hâlâ mümkündür, ancak bu bölgede daha az kesindir.",
    manque: "Bu ürün için bir veya daha fazla belirleyici ölçü eksik.",
  },
  zones: {
    c: {
      label: "Göğüs çevresi",
      guide:
        "Göğsün en dolgun noktası etrafında, sadece iç çamaşırı üzerinden, yatay mezura. Normal nefes verirken, mezura sıkmadan tam oturmalı.",
    },
    wa: {
      label: "Bel çevresi",
      guide:
        "Kaburgalar ile kalça arasındaki doğal bel çukurunda. Karnınızı içeri çekmeyin, normal nefes alın.",
    },
    hp: {
      label: "Kalça çevresi",
      guide:
        "Kalça ve basen kaslarının en dolgun noktası etrafında, ayaklar bitişik. Mezuranın aynada yatay olduğunu kontrol edin.",
    },
    th: {
      label: "Uyluk çevresi",
      guide:
        "Uyluğun en dolgun noktası etrafında, ayakta, bacak gevşek, ağırlık iki ayağa eşit dağıtılmış.",
    },
    h: {
      label: "Boy",
      guide: "Sırt duvara dayalı, ayakkabısız, topuklar bitişik, bakış düz ileriye.",
    },
    wt: { label: "Kilo", guide: "Sabahları, kalın giysiler olmadan." },
    ij: {
      label: "İç bacak boyu (kasık boyu)",
      guide: "Kasıktan yere kadar, sırt duvara dayalı, ayakkabısız.",
    },
    bl: {
      label: "Sırt uzunluğu",
      guide:
        "7. servikal vertebradan (bir tişörtün yaka tabanı hizası) ilium kanadına (kalça kemiği hizası) kadar ölçülür.",
    },
    nk: { label: "Boyun çevresi", guide: "Boynun tabanında, yatay mezura, sıkmadan." },
    bc: {
      label: "Biceps çevresi",
      guide: "Kolun en dolgun noktası etrafında, vücut yanında gevşek şekilde.",
    },
    sh: {
      label: "Omuz genişliği",
      guide: "Bir akromiyondan diğerine, sırtın üst kısmından geçerek, omuzlar gevşek.",
    },
    ws: {
      label: "Kol açıklığı (kanat açıklığı)",
      guide: "Kollar yatay olarak açık, bir orta parmak ucundan diğerine, sırt duvara dayalı.",
    },
    al: {
      label: "Kol uzunluğu",
      guide: "Akromiyondan bilek kıvrımına kadar, kol hafifçe bükülü, el kalçada.",
    },
    tl: {
      label: "Gövde uzunluğu",
      guide:
        "Boyun tabanından, omuz üzerinden geçerek, kasığa kadar, ardından sırttan geri yukarı.",
    },
    ak: {
      label: "Ayak bileği çevresi",
      guide: "Ayak bileği kemiğinin hemen üzerinde, ayak yere düz basılı, mezura sıkmadan.",
    },
    dh: {
      label: "Sırt yüksekliği",
      guide: "İlium kanadından yüzen kaburgalara kadar, gövdenin yan tarafında, ayakta.",
    },
    pv: {
      label: "Pelvis çevresi",
      guide: "İlium kanatları hizasında, yatay mezura, karın gevşek.",
    },
    il: {
      label: "İlium kanatlarında bel çevresi",
      guide:
        "Mezura tam olarak ilium kanatlarının üzerine, yatay şekilde, sıkıştırmadan yerleştirilir.",
    },
  },
  consent: {
    titre: "Verileriniz",
    intro:
      "Varsayılan olarak bu oturum geçicidir: ölçüleriniz sadece görüşme süresince bellekte kalır ve saklanmaz. Hiçbir kutu önceden işaretlenmez.",
    sessionL: "Bu öneri için ölçülerimi kullan",
    sessionD: "Şimdi bir sonuç almak için gereklidir.",
    profilL: "Profilimi bu oturumun ötesinde sakla",
    profilD:
      "Bir sonraki ziyarette ölçülerinizi yeniden bulmak için. Reddetmenin sonuç üzerinde etkisi yoktur.",
    agregeL: "Hizmetin iyileştirilmesine, toplu ve anonim biçimde katkıda bulun",
    agregeD: "Profilinize geri dönüş mümkün değildir.",
    marchandL: "Önerilen bedeni ortak satıcıya ilet",
    marchandD: "Sadece beden, asla ölçüleriniz değil.",
    droits:
      "Erişim, düzeltme, silme, taşınabilirlik ve onay geri çekme her zaman arayüzden ulaşılabilir.",
  },
  res: {
    titre: "Sonuç",
    refusTitre: "Size henüz cevap veremiyoruz",
    refusSuite:
      "Ölçüleriniz dikkate alındı. Bir marka bu ürün için gereken kapsama şartımızı karşıladığında, öneri kullanılabilir olacaktır.",
    indepartageables:
      "İki marka aynı derecede uygun. Keyfi bir seçim yapmak yerine bunu size söylemeyi tercih ediyoruz.",
    coupeDeclaree: "Beyan edilen kesim",
    sourceMarque: "marka kaynağı",
    sourceSecondaire: "ikincil kaynak",
    tracabilite: "Bu görüşmenin izlenebilirliği",
    referentiel: "Referans veriler",
    parametres: "Parametreler",
    horodatage: "Zaman damgası",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Çok dar", ajuste: "Tam oturan", conforme: "İyi oturuyor", ample: "Bol" },
  confiance: {
    mot: "Güven",
    1: "çok düşük",
    2: "düşük",
    3: "orta",
    4: "yüksek",
    5: "çok yüksek",
  },
  repere: {
    mot: "Bilgi notu",
    grille: "Bir marka neden tüm serisi için tek bir tablo yayınlar",
    mesurer: "Doğru ölçü almak: sonucu değiştiren beş kural",
    nonDit: "Bir beden tablosunun söylemedikleri, ve bunu neden biz yazıyoruz",
  },
  steps2: { profile: "Profiliniz", measures: "Ölçüleriniz", results: "Bedenleriniz" },
  gender: { title: "Kullanılacak tablolar", m: "Erkek tabloları", f: "Kadın tabloları" },
  disc: {
    title: "Disiplin",
    surf: "Sörf",
    eaulibre: "Triatlon / açık su",
    plongee: "Dalış / serbest dalış",
    ski: "Kayak ve snowboard",
    harnais: "Windsurf / kite trapezi",
    soon: "Yakında",
    shoesRun: "Koşu ayakkabısı",
    shoesSki: "Kayak botu",
  },
  buttons2: {
    toMeasures: "Ölçülerime devam et",
    compute: "Bedenlerimi hesapla",
    edit: "Ölçülerimi düzenle",
    how: "Nasıl ölçülür",
    hide: "Talimatları gizle",
    more: "Daha fazla bilgi",
    optional: "isteğe bağlı",
  },
  issue: {
    title: "En sık nerede kalıp sorunları yaşıyorsunuz?",
    none: "Özel bir sorun yok",
    thighs: "Uyluklar ve basen",
    chest: "Omuzlar ve göğüs",
    length: "Uzunluklar (gövde, bacaklar)",
  },
  anchor: {
    title: "Zaten bedeninize uygun bir malzemeniz varsa, nasıl hissettiriyor?",
    none: "Sahip değilim / atla",
    fit: "İyi oturuyor",
    tight: "Çok sıkı",
    loose: "Çok bol, su sızdırıyor",
    why: "Bu bilgi ölçü profilinizi hassaslaştırır.",
  },
  results: {
    title: "Markaya göre öneriler",
    bottom: "Pantolon",
    top: "Ceket",
    ratioHW: "Kalça/bel oranı",
    ratioTH: "Uyluk/kalça oranı",
    perZone: "Bölgeye göre detay",
  },
  warn: {
    noHips: "Bu marka kalça hakkında yeterli bilgi yayınlamıyor: buradaki önerimiz daha az kesin.",
    frontier:
      "Bu markada iki beden arasında kalıyorsunuz. Deneme fırsatınız varsa, tavsiye edilir.",
    empty: "Bu kategori için henüz doğrulanmış verimiz yok.",
    dimMissing: "bu marka tarafından yayınlanmamış",
    biased: "Bu marka kalçada dar kesiyor: şüphe durumunda, sizin için daha güvenli bedeni seçtik.",
    splitSizes: "Ceket ve pantolon için farklı bedenler normal bir sonuçtur, bir anomali değildir.",
  },
  feedback: {
    title: "Size uydu mu?",
    fit: "Mükemmel",
    tight: "Çok sıkı",
    loose: "Çok büyük",
    thanks: "Teşekkürler, geri bildiriminiz tüm vücut tipleri için önerileri iyileştiriyor.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Okuma yolu",
    tous: "Tümü",
    decouvrir: "Keşfet",
    comprendre: "Anla",
    approfondir: "Derinleş",
    expert: "Uzman",
    lecture: "Okuma süresi",
  },
  disc: {
    mot: "Disiplin",
    toutes: "Tümü",
    transversal: "Disiplinler arası",
    surf: "Sörf",
    "eau-libre": "Açık su / triatlon",
    kite: "Kite / wingfoil",
    ski: "Kayak / snowboard",
    harnais: "Trapezler",
    plongee: "Dalış",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Kütüphane",
    titre: "Satın almadan önce anlayın, ilk alımdan uzmanlığa",
    sous: "Beden ve kalıp, sadece görünümü değil konforu, sıcaklığı ve hareketi belirler. Her makale okuma yolunu ve kaynaklarının kökenini belirtir.",
    compteur: "makale mevcut",
    compteurUn: "makale mevcut",
    vide: "Bu disiplin için bu yolda henüz yayınlanmış bir şey yok. Planlanan konular aşağıda listelenmiştir: gelecek içeriği duyurmayı, onu tahmin etmekten daha iyi buluyoruz.",
    lire: "Makaleyi oku",
    replier: "Kapat",
    sources: "Kaynaklar",
    prochainement: "Yakında",
    prochainementTitre: "Planlanan konular, henüz yayınlanmadı",
    vague1: "Birinci dalga",
    vague2: "İkinci dalga",
    calendrier: "Takvim",
    calendrierTitre: "Altı aylık üretim, ay ay",
    calendrierVideo: "Uzun video",
    temps: "Tempo",
    tempsTitre: "Tahmini üretim süresi",
    tempsArticle: "Makale",
    tempsVideo: "Uzun video",
    tempsShort: "Kısa format",
    teaser: "İlk alımdan malzemelere kadar bilgi makaleleri: okuma yolunuzu seçin.",
    metaTitre: "Kütüphane — beden ve kalıbı anlamak | Sillage",
    metaDesc:
      "İlk alımdan uzmanlığa bilgi makaleleri: neopren, kayak, trapezler. Kesin olan, markaların söylediği ve henüz bilinmeyen.",
  },
  reperes: {
    eyebrow: "Bilgi notları",
    titre: "Seçmeden önce bedenleri anlayın",
    sous: "Markaların gerçekten yayınladıkları, yayınlamadıkları ve bunun sizin için ne değiştirdiği. Buradaki her şey kayıtlı kaynaklardan gelir, asla bir tahminden değil.",
    metaTitre: "Beden bilgi notları — Sillage",
    metaDesc:
      "Beden tablolarını, kalıp kelime dağarcığını ve nasıl ölçü alınacağını anlayın; doğru neopren veya dağ giysisini seçin.",
  },
  nav: {
    trouver: "Bedenimi bul",
    biblio: "Kütüphane: ilk alımdan uzmanlığa",
    reperes: "Beden tabloları hakkında bilgi notları",
  },
  langueTexte:
    "Arayüz ve özetler çevrilmiştir. Makale metinleri Fransızca kalır: makine çevirisi yerine düzeltilmiş bir metni tercih ediyoruz.",
  contenu: {
    flushing: {
      titre: "Çok bol olursa, kıyafetiniz sizi soğutur: flushing tuzağı",
      chapo: "Bir neopren kıyafet sizi kuru tutmaz: ısı alışverişini ve su hareketini sınırlar.",
    },
    "epaules-rame": {
      titre: "Çok sıkı olursa, kürek çekerken omuzlarınızı tüketebilir",
      chapo:
        "Çok küçük bir kıyafet göğsü sıkıştırabilir veya omuzları kısıtlayabilir: her hareket daha fazla enerji gerektirir.",
    },
    "deux-centimetres": {
      titre: "2 cm'lik bir hatanın değiştirebileceği şey",
      chapo:
        "Birkaç santimetre, sizi iki beden arasındaki sınıra yerleştirdiğinde belirleyici hale gelir.",
    },
    "meme-m": {
      titre: "Aynı «M» neden markadan markaya bir şey ifade etmez",
      chapo:
        "Bir M'nin her yerde aynı ölçüleri temsil ettiğini garanti eden evrensel bir beden yoktur.",
    },
    cou: {
      titre: "Boyun sızdırmazlığı: beden tablolarının nadiren tanımladığı bir bölge",
      chapo:
        "Boyun işlevsel olarak önemli bir bölgedir, ancak çevresi kamuya açık beden tablolarında nadiren yer alır.",
    },
    "morphologie-a": {
      titre: "Armut vücut tipi: bazı tablolar neden belirli oranları kötü tanımlar",
      chapo:
        "Daha dolgun kalça ve uyluklar, daha ince bel: aynı nominal bedene sahip iki kişi farklı kesimlere ihtiyaç duyabilir.",
    },
    "pantalon-ski": {
      titre: "Kayak pantolonu: kalça ve uyluk neden kısıtlayıcı faktör olabilir",
      chapo:
        "Bel çevresi yeterli değildir: pelvis, uyluk ve iç bacak boyu hareketliliği ve giyilebilirliği belirler.",
    },
    layering: {
      titre: "Karda katmanlama: ceketin içinde yüzmeden ne kadar boşluk",
      chapo: "Bir ceket, gereksiz yere hacimli olmadan katmanlarınızı barındırmalıdır.",
    },
    "compression-triathlon": {
      titre: "Triatlon: faydalı sıkıştırma ile zararlı sıkıştırma",
      chapo:
        "Bir triatlon kıyafeti vücuda yakın tasarlanır, ancak nefes almayı veya hareketi büyük ölçüde kısıtlamaz.",
    },
    "harnais-longueur-dos": {
      titre: "Kite trapezi: sırt uzunluğu da önemlidir",
      chapo: "Bir trapez sadece bir çevre ölçüsüne göre seçilmez.",
    },
    "epaisseur-ajustement": {
      titre: "Kalın veya ince neopren: kalınlık kalıbı değiştirir",
      chapo: "Benzer bir yapıda, kalınlığı artırmak genellikle algılanan esnekliği değiştirir.",
    },
    zip: {
      titre: "Sırt fermuarı, ön fermuar veya fermuarsız: kalıp için ne değişir",
      chapo:
        "Giriş sistemi kıyafetin yapısını değiştirir ve hareketliliği, su sızdırmazlığını ve giyilebilirliği etkileyebilir.",
    },
    "cinq-erreurs-mesure": {
      titre: "Doğru ölçü almak: her şeyi bozan beş hata",
      chapo:
        "Hatalar genellikle mezuranın kendisinden değil, dengesiz bir protokolden kaynaklanır.",
    },
    "cout-des-retours": {
      titre: "Yanlış bedenli bir ürün genellikle iade edilir: iadelerin gerçek maliyeti",
      chapo: "Beden ve kalıp, çevrimiçi giyim iadelerinin başlıca nedenleri arasındadır.",
    },
    "essayage-et-conseil": {
      titre: "Mağazada deneme ve çevrimiçi tavsiye: akıllıca birleştirmek",
      chapo: "Mağaza ve dijital tavsiye birbirine karşıt değildir.",
    },
    "zone-par-zone": {
      titre: "SILLAGE neden bölge bölge akıl yürütür",
      chapo: "Teknik bir kıyafet her zaman tek bir beden etiketiyle tanımlanamaz.",
    },
    "statique-dynamique": {
      titre: "Statik kalıp ve dinamik kalıp",
      chapo: "Dururken uygun görünen bir malzeme, hareket halindeyken farklı davranabilir.",
    },
    "meme-taille-comportement": {
      titre: "Aynı bedendeki iki kıyafet neden farklı davranabilir",
      chapo: "Etiketteki harf, ürünün geometrisinin sadece bir kısmını tanımlar.",
    },
    "donnee-inconnue": {
      titre: "SILLAGE bilmediği bir veriyi nasıl ele alır",
      chapo: "Eksik bir değer başlı başına bir bilgidir.",
    },
    "apres-sml": {
      titre: "S, M, L'nin ötesinde: kalıbın çok boyutlu bir görünümüne doğru",
      chapo: "Geleneksel bedenler çok boyutlu bir vücudu tek bir kategoriye sıkıştırır.",
    },
    "une-grille-par-marque": {
      titre: "Bir marka neden tüm serisi için tek bir tablo yayınlar",
      chapo:
        "Disiplinlerimizdeki markaların neredeyse tümü model başına değil, cinsiyet başına bir ana tablo yayınlar.",
    },
    "vocabulaire-des-coupes": {
      titre: "Kesim kelime dağarcığı ve gerçekte ne anlama geldiği",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: bunlar resmi ve kullanılabilir terimlerdir.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "Bir beden tablosunun size söylemedikleri",
      chapo:
        "Bir tablo vücut ölçü aralıkları verir. Ne malzemeyi, ne esnekliği, ne de panel yapısını verir.",
    },
    "bien-mesurer": {
      titre: "Doğru ölçü almak: sonucu değiştiren beş kural",
      chapo:
        "Yanlış tutulan bir mezura, öneriyi tam bir beden kaydırır. Belirleyici bölgeler elle ölçülür.",
    },
    debuter: {
      titre: "Yeni mi başlıyorsunuz? Satın almadan önce üç referans noktası",
      chapo: "Doğru beden önce kullanıma, sonra markaya bağlıdır.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neopren", d: "Su sporları için kıyafetler ve ürünler." },
  B: { l: "Kayak ve snowboard", d: "Dağ giysileri, katmanlar ve kabuklar." },
  C: { l: "Su sporu trapezleri", d: "Bel trapezi, oturma trapezi, trapez." },
  "C.fermeture": {
    l: "Bu aile, marka verilerimiz sırt yüksekliğini doğrulanmış bir şekilde kapsadığında açılacaktır. Belirsiz bir veriye dayanarak öneride bulunmak yerine hiç öneride bulunmamayı tercih ediyoruz.",
  },
  A1: { l: "Sörf ve dalga sporları", d: "Dalga, longboard, bodyboard." },
  A2: {
    l: "Açık su ve triatlon",
    d: "Yüzme hareketi, omuz özgürlüğünü öncelikli kısıtlama haline getirir.",
  },
  A3: {
    l: "Kitesurf, wingfoil ve karma uygulamalar",
    d: "Trapez giyilmesi nedeniyle bel ve kalçada ek kısıtlama.",
  },
  A4: {
    l: "Dalış",
    d: "Derinlikteki basınç, gövde kalıbını ve bacak boyunu belirleyici kılar.",
  },
  B0: { l: "Kayak ve snowboard", d: "Dağ ürünleri." },
  "A1-integrale": { l: "Tam kıyafet", d: "Uzun kol ve bacak." },
  "A1-shorty": { l: "Shorty", d: "Kısa kol ve bacak." },
  "A1-top": { l: "Üst parça", d: "Sadece neopren üst parça." },
  "A2-integrale": { l: "Yüzme kıyafeti", d: "Yüzme için tasarlanmış tam kıyafet." },
  "A3-integrale": { l: "Tam kıyafet", d: "Trapez altında giyilir." },
  "A4-integrale": { l: "Dalış kıyafeti", d: "Islak tam kıyafet." },
  B1: { l: "Ceket", d: "Kabuk veya izolasyonlu ceket." },
  B2: { l: "Pantolon veya tulum pantolon", d: "Standart tabloların ana hata bölgesi." },
  B3: { l: "Alt katman veya ara katman", d: "Teknik alt katman." },
  B4: {
    l: "Tek parça tulum",
    d: "Ceket ve pantolon birleşik, gövde uzunluğunda ek kısıtlama.",
  },
  "q.couches": { l: "Altına ara katman giymeyi düşünüyor musunuz?" },
  "q.couches.fine": { l: "İnce bir katman" },
  "q.couches.intermediaire": { l: "İnce bir katman ve bir polar" },
  "q.couches.epaisse": { l: "Birkaç kalın katman" },
  "q.couches.inconnu": { l: "Henüz bilmiyorum" },
  "q.frequence": { l: "Ne sıklıkla spor yapıyorsunuz?" },
  "q.frequence.occasionnel": { l: "Yılda birkaç kez" },
  "q.frequence.regulier": { l: "Ayda birkaç kez" },
  "q.frequence.intensif": { l: "Her hafta veya daha sık" },
  "q.temperature": { l: "En sık hangi suda spor yapıyorsunuz?" },
  "q.temperature.froide": { l: "Soğuk, 15 °C altı" },
  "q.temperature.temperee": { l: "Ilıman, 15 - 20 °C" },
  "q.temperature.chaude": { l: "Sıcak, 20 °C üstü" },
  "q.preference": { l: "Hangi kalıbı tercih edersiniz?" },
  "q.preference.proche": { l: "Vücuda yakın" },
  "q.preference.neutre": { l: "Belirgin bir tercih yok" },
  "q.preference.aise": { l: "Biraz bol" },
};

export default { core, pages, catalogue };
