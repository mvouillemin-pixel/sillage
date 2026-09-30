type Dict = Record<string, unknown>;

const core: Dict = {
  app: {
    nom: "Sillage",
    eyebrow: "Tamanho por morfologia",
    tagline: "O modelo certo para a sua prática. O tamanho certo para o seu corpo.",
    dataNote:
      "Tabelas de tamanhos oficiais dos fabricantes, recolhidas e verificadas, nunca inventadas.",
    langue: "Idioma",
  },
  steps: {
    progress: "Progresso",
    s1: "Seleção",
    s2: "Utilização",
    s3: "Medidas",
    s4: "Resultado",
    etape: "Etapa",
  },
  buttons: {
    next: "Continuar",
    back: "Voltar",
    result: "Ver o resultado",
    restart: "Nova pesquisa",
    pieces: "Ver as peças",
  },
  sel: {
    titre: "A sua prática",
    sous: "Escolha a família, a disciplina e depois a peça. Só pedimos as medidas úteis para essa peça.",
    famille: "Família",
    discipline: "Disciplina",
    piece: "Peça",
  },
  usage: {
    titre: "A sua utilização",
    sous: "Algumas perguntas curtas. Orientam o ajuste procurado.",
    geneTitre: "Num equipamento anterior, sentiu algum desconforto?",
    geneMulti: "Assinale todos os desconfortos sentidos. Cada um aperta a tolerância apenas nessa zona.",
    jamais: "Nunca usei este tipo de peça",
    oui: "Sim, num ponto específico",
    ou: "Onde?",
    choisirZone: "Escolher uma zona",
    tropSerre: "Demasiado apertado",
    tropAmple: "Demasiado largo",
  },
  mes: {
    titre: "As suas medidas",
    sous: "Uma fita métrica flexível é suficiente. As zonas determinantes para esta peça medem-se à mão: é aí que a estimativa automática é menos fiável.",
    determinant: "Determinante",
    facultatif: "Facultativo",
    sansMesure: "Sem esta medida, a recomendação continua possível, mas menos precisa nesta zona.",
    manque: "Falta uma ou mais medidas determinantes para esta peça.",
  },
  zones: {
    c: {
      label: "Perímetro do peito",
      guide:
        "Fita horizontal no ponto mais saliente do peito, apenas sobre roupa interior. Expiração normal, fita justa mas sem apertar.",
    },
    wa: {
      label: "Perímetro da cintura",
      guide:
        "Na cintura natural, entre as costelas e as ancas. Não encolha a barriga; respire normalmente.",
    },
    hp: {
      label: "Perímetro da anca",
      guide:
        "No ponto mais saliente da bacia e das nádegas, pés juntos. Verifique a horizontalidade da fita ao espelho.",
    },
    th: {
      label: "Perímetro da coxa",
      guide:
        "No ponto mais saliente da coxa, em pé, perna relaxada, peso distribuído pelos dois pés.",
    },
    h: {
      label: "Altura",
      guide: "Costas na parede, sem sapatos, calcanhares juntos, olhar horizontal.",
    },
    wt: { label: "Peso", guide: "De manhã, sem roupa pesada." },
    ij: {
      label: "Altura de entrepernas",
      guide: "Da entreperna ao chão, costas na parede, sem sapatos.",
    },
    bl: {
      label: "Comprimento das costas",
      guide:
        "Da 7.ª vértebra cervical (base do colarinho de uma t-shirt) até à crista ilíaca, ao nível do osso da anca.",
    },
    nk: {
      label: "Perímetro do pescoço",
      guide: "Na base do pescoço, fita horizontal, sem apertar.",
    },
    bc: {
      label: "Perímetro do bíceps",
      guide: "No ponto mais saliente do braço, relaxado ao longo do corpo.",
    },
    sh: {
      label: "Largura de ombros",
      guide: "De um acrómio ao outro, passando pela parte superior das costas, ombros relaxados.",
    },
    ws: {
      label: "Envergadura",
      guide:
        "Braços estendidos na horizontal, de uma ponta do dedo médio à outra, costas na parede.",
    },
    al: {
      label: "Comprimento do braço",
      guide: "Do acrómio à prega do punho, braço ligeiramente flexionado, mão na anca.",
    },
    tl: {
      label: "Comprimento do tronco",
      guide: "Da base do pescoço, por cima do ombro, até à entreperna e de volta pelas costas.",
    },
    ak: {
      label: "Perímetro do tornozelo",
      guide: "Logo acima do maléolo, pé assente no chão, fita sem apertar.",
    },
    dh: {
      label: "Altura dorsal",
      guide: "Da crista ilíaca até às costelas flutuantes, na lateral do tronco, em pé.",
    },
    pv: {
      label: "Perímetro da bacia",
      guide: "Ao nível das cristas ilíacas, fita horizontal, abdómen relaxado.",
    },
    il: {
      label: "Cintura ao nível das cristas ilíacas",
      guide: "Fita colocada exatamente sobre as cristas ilíacas, horizontal, sem compressão.",
    },
  },
  consent: {
    titre: "Os seus dados",
    intro:
      "Por defeito, esta sessão é efémera: as suas medidas permanecem em memória apenas durante a consulta e não são conservadas. Nenhuma caixa está pré-selecionada.",
    sessionL: "Usar as minhas medidas para esta recomendação",
    sessionD: "Necessário para obter um resultado agora.",
    profilL: "Manter o meu perfil para além desta sessão",
    profilD:
      "Para reencontrar as suas medidas numa próxima visita. A recusa não afeta o resultado.",
    agregeL: "Contribuir, de forma agregada e anónima, para a melhoria do serviço",
    agregeD: "Sem qualquer ligação de volta ao seu perfil.",
    marchandL: "Transmitir o tamanho recomendado ao comerciante parceiro",
    marchandD: "Apenas o tamanho, nunca as suas medidas.",
    droits:
      "O acesso, a retificação, o apagamento, a portabilidade e a retirada do consentimento estão acessíveis a qualquer momento a partir da interface.",
  },
  res: {
    titre: "Resultado",
    refusTitre: "Ainda não podemos responder-lhe",
    refusSuite:
      "As suas medidas foram registadas. Assim que uma marca atingir o nosso requisito de cobertura para esta peça, a recomendação ficará disponível.",
    indepartageables:
      "Duas marcas servem igualmente bem. Preferimos dizê-lo do que decidir arbitrariamente.",
    coupeDeclaree: "Corte declarado",
    sourceMarque: "fonte marca",
    sourceSecondaire: "fonte secundária",
    tracabilite: "Rastreabilidade desta consulta",
    referentiel: "Referencial",
    parametres: "Parâmetros",
    horodatage: "Data e hora",
  },
  // TRADUCTION MACHINE À RELIRE : quatre verdicts SILLAGE.
  verdict: { serre: "Demasiado apertado", ajuste: "Justo", conforme: "Bom caimento", ample: "Largo" },
  confiance: {
    mot: "Confiança",
    1: "muito baixa",
    2: "baixa",
    3: "média",
    4: "alta",
    5: "muito alta",
  },
  repere: {
    mot: "Referência",
    grille: "Por que razão uma marca publica uma única tabela para toda a sua gama",
    mesurer: "Medir-se bem: cinco regras que mudam o resultado",
    nonDit: "O que uma tabela de tamanhos não diz, e porque o escrevemos",
  },
  steps2: { profile: "O seu perfil", measures: "As suas medidas", results: "Os seus tamanhos" },
  gender: { title: "Tabelas a utilizar", m: "Tabelas de homem", f: "Tabelas de mulher" },
  disc: {
    title: "Disciplina",
    surf: "Surf",
    eaulibre: "Triatlo / águas abertas",
    plongee: "Mergulho / apneia",
    ski: "Esqui e snowboard",
    harnais: "Trapézio de windsurf / kite",
    soon: "Brevemente",
    shoesRun: "Sapatilhas de corrida",
    shoesSki: "Botas de esqui",
  },
  buttons2: {
    toMeasures: "Continuar para as minhas medidas",
    compute: "Calcular os meus tamanhos",
    edit: "Editar as minhas medidas",
    how: "Como medir",
    hide: "Ocultar as instruções",
    more: "Saber mais",
    optional: "opcional",
  },
  issue: {
    title: "Onde tem mais frequentemente dificuldades de ajuste?",
    none: "Sem dificuldade particular",
    thighs: "Coxas e nádegas",
    chest: "Ombros e peito",
    length: "Comprimentos (tronco, pernas)",
  },
  anchor: {
    title: "Se já possui um fato do seu tamanho, como o sente?",
    none: "Não possuo / não utilizar",
    fit: "Bem ajustado",
    tight: "Demasiado apertado",
    loose: "Demasiado largo, entra água",
    why: "Esta informação afina o seu perfil de medidas.",
  },
  results: {
    title: "Recomendações por marca",
    bottom: "Calças",
    top: "Casaco",
    ratioHW: "Rácio anca / cintura",
    ratioTH: "Rácio coxa / anca",
    perZone: "Detalhe por zona",
  },
  warn: {
    noHips:
      "Esta marca não fornece informação suficiente sobre a anca: o nosso conselho é mais incerto aqui.",
    frontier:
      "Está entre dois tamanhos nesta marca. Se puder experimentar, recomendamos que o faça.",
    empty: "Ainda não temos dados verificados para esta categoria.",
    dimMissing: "não publicada por esta marca",
    biased:
      "Esta marca ajusta bem à anca: em caso de dúvida, escolhemos o tamanho mais seguro para si.",
    splitSizes:
      "Tamanhos diferentes entre casaco e calças é um resultado normal, não uma anomalia.",
  },
  feedback: {
    title: "Serve-lhe bem?",
    fit: "Perfeito",
    tight: "Demasiado apertado",
    loose: "Demasiado grande",
    thanks: "Obrigado, o seu retorno melhora os conselhos para todas as morfologias.",
  },
};

const pages: Dict = {
  parcours: {
    mot: "Percurso de leitura",
    tous: "Todos",
    decouvrir: "Descobrir",
    comprendre: "Compreender",
    approfondir: "Aprofundar",
    expert: "Especialista",
    lecture: "Leitura",
  },
  disc: {
    mot: "Disciplina",
    toutes: "Todas",
    transversal: "Transversal",
    surf: "Surf",
    "eau-libre": "Águas abertas / triatlo",
    kite: "Kite / wingfoil",
    ski: "Esqui / snowboard",
    harnais: "Trapézios",
    plongee: "Mergulho",
    lab: "SILLAGE Lab",
  },
  biblio: {
    eyebrow: "Biblioteca",
    titre: "Compreender antes de comprar, da primeira compra à especialização",
    sous: "O tamanho e o ajuste determinam o conforto, o calor e o movimento — não só o visual. Cada ficha indica o seu percurso de leitura e a origem das suas fontes.",
    compteur: "fichas disponíveis",
    compteurUn: "ficha disponível",
    vide: "Nada publicado neste percurso para esta disciplina. Os temas previstos estão listados abaixo: preferimos anunciar um conteúdo futuro do que aproximá-lo.",
    lire: "Ler a ficha",
    replier: "Recolher",
    sources: "Fontes",
    prochainement: "Brevemente",
    prochainementTitre: "Temas previstos, ainda não publicados",
    vague1: "Primeira vaga",
    vague2: "Segunda vaga",
    calendrier: "Calendário",
    calendrierTitre: "Seis meses de produção, mês a mês",
    calendrierVideo: "Vídeo longo",
    temps: "Ritmo",
    tempsTitre: "Tempos de produção estimados",
    tempsArticle: "Artigo",
    tempsVideo: "Vídeo longo",
    tempsShort: "Formato curto",
    teaser:
      "Fichas de conhecimento, da primeira compra aos materiais: escolha o seu percurso de leitura.",
    metaTitre: "Biblioteca — compreender o tamanho e o ajuste | Sillage",
    metaDesc:
      "Fichas de conhecimento da primeira compra à especialização: neoprene, esqui, trapézios. O que está estabelecido, o que vem das marcas, o que ainda não se sabe.",
  },
  reperes: {
    eyebrow: "Referências",
    titre: "Compreender os tamanhos antes de escolher",
    sous: "O que as marcas realmente publicam, o que não publicam e o que isso muda para si. Tudo aqui indicado provém de fontes registadas, nunca de uma estimativa.",
    metaTitre: "Referências de tamanhos — Sillage",
    metaDesc:
      "Compreender as tabelas de tamanhos, o vocabulário dos cortes e como se medir, para escolher a peça de neoprene ou de montanha certa.",
  },
  nav: {
    trouver: "Encontrar o meu tamanho",
    biblio: "Biblioteca: da primeira compra à especialização",
    reperes: "Referências sobre tabelas de tamanhos",
  },
  langueTexte:
    "Interface e resumos traduzidos. O corpo das fichas permanece em francês: preferimos um texto revisto a uma tradução automática.",
  contenu: {
    flushing: {
      titre: "Demasiado grande, o seu fato arrefece-o: a armadilha do flushing",
      chapo:
        "Um fato de neoprene não o mantém seco: limita as trocas de calor e o movimento da água.",
    },
    "epaules-rame": {
      titre: "Demasiado apertado, pode esgotar os seus ombros a remar",
      chapo:
        "Um fato demasiado pequeno pode comprimir o tórax ou limitar os ombros: cada movimento custa mais.",
    },
    "deux-centimetres": {
      titre: "O que um erro de 2 cm pode mudar",
      chapo:
        "Alguns centímetros tornam-se decisivos quando o colocam na fronteira entre dois tamanhos.",
    },
    "meme-m": {
      titre: "Por que razão o mesmo «M» não significa nada de marca para marca",
      chapo:
        "Não existe um tamanho universal que garanta que um M represente as mesmas dimensões em todo o lado.",
    },
    cou: {
      titre: "Vedação ao pescoço: uma zona raramente descrita nas tabelas de tamanhos",
      chapo:
        "O pescoço é uma zona funcionalmente importante, mas o seu perímetro raramente aparece nas tabelas públicas.",
    },
    "morphologie-a": {
      titre: "Morfologia em pera: por que razão algumas tabelas descrevem mal certas proporções",
      chapo:
        "Ancas e coxas mais desenvolvidas com uma cintura mais fina: duas pessoas com o mesmo tamanho nominal podem precisar de cortes diferentes.",
    },
    "pantalon-ski": {
      titre: "Calças de esqui: por que razão anca e coxa podem tornar-se o fator limitante",
      chapo:
        "O perímetro da cintura não basta: bacia, coxas e entreperna condicionam a mobilidade e a forma de vestir.",
    },
    layering: {
      titre: "Camadas na neve: quanta folga sem nadar dentro do casaco",
      chapo: "Um casaco deve acomodar as suas camadas sem se tornar desnecessariamente volumoso.",
    },
    "compression-triathlon": {
      titre: "Triatlo: compressão útil versus compressão prejudicial",
      chapo:
        "Um fato de triatlo é concebido junto ao corpo, sem se tornar uma restrição importante à respiração ou ao movimento.",
    },
    "harnais-longueur-dos": {
      titre: "Trapézio de kite: o comprimento das costas também conta",
      chapo: "Um trapézio não se escolhe apenas por um perímetro.",
    },
    "epaisseur-ajustement": {
      titre: "Neoprene grosso versus fino: a espessura muda o ajuste",
      chapo:
        "Com uma construção comparável, aumentar a espessura geralmente altera a flexibilidade percebida.",
    },
    zip: {
      titre: "Fecho nas costas, no peito ou sem fecho: o que muda no ajuste",
      chapo:
        "O sistema de entrada altera a arquitetura do fato e pode influenciar a mobilidade, a entrada de água e a facilidade em vesti-lo.",
    },
    "cinq-erreurs-mesure": {
      titre: "Medir-se corretamente: os cinco erros que distorcem tudo",
      chapo: "Os erros vêm normalmente de um protocolo instável, não da fita métrica em si.",
    },
    "cout-des-retours": {
      titre: "Uma peça mal dimensionada acaba muitas vezes devolvida: o custo real das devoluções",
      chapo:
        "O tamanho e o ajuste estão entre os principais motivos de devolução na compra de roupa online.",
    },
    "essayage-et-conseil": {
      titre: "Prova em loja e aconselhamento online: combinar os dois com inteligência",
      chapo: "As lojas e o aconselhamento digital não se opõem.",
    },
    "zone-par-zone": {
      titre: "Por que razão a SILLAGE raciocina zona a zona",
      chapo: "Uma peça técnica nem sempre pode ser descrita por um único rótulo de tamanho.",
    },
    "statique-dynamique": {
      titre: "Ajuste estático e ajuste dinâmico",
      chapo:
        "Um equipamento que parece correto parado pode comportar-se de forma diferente em movimento.",
    },
    "meme-taille-comportement": {
      titre: "Por que razão dois fatos do mesmo tamanho podem comportar-se de forma diferente",
      chapo: "A letra na etiqueta descreve apenas parte da geometria do produto.",
    },
    "donnee-inconnue": {
      titre: "Como a SILLAGE trata um dado que desconhece",
      chapo: "Um valor em falta é, por si só, uma informação.",
    },
    "apres-sml": {
      titre: "Para além de S, M, L: rumo a uma visão multidimensional do ajuste",
      chapo: "Os tamanhos tradicionais comprimem um corpo multidimensional numa única categoria.",
    },
    "une-grille-par-marque": {
      titre: "Por que razão uma marca publica uma única tabela para toda a sua gama",
      chapo:
        "Quase todas as marcas nas nossas disciplinas publicam uma tabela principal por género, não uma por modelo.",
    },
    "vocabulaire-des-coupes": {
      titre: "O vocabulário dos cortes, e o que realmente significa",
      chapo:
        "Slim, Regular, Relaxed, Trim, comfort fit, performance fit: são termos oficiais e utilizáveis.",
    },
    "ce-que-la-grille-ne-dit-pas": {
      titre: "O que uma tabela de tamanhos não diz",
      chapo:
        "Uma tabela dá intervalos de medidas corporais. Não indica nem o material, nem a elasticidade, nem os painéis.",
    },
    "bien-mesurer": {
      titre: "Medir-se bem: cinco regras que mudam o resultado",
      chapo:
        "Uma fita mal segura desloca a recomendação um tamanho inteiro. As zonas determinantes medem-se à mão.",
    },
    debuter: {
      titre: "Está a começar? Três referências antes de comprar",
      chapo: "O tamanho certo depende primeiro da utilização, depois da marca.",
    },
  },
};

const catalogue: Record<string, { l: string; d?: string }> = {
  A: { l: "Neoprene", d: "Fatos e peças para desportos aquáticos." },
  B: { l: "Esqui e snowboard", d: "Roupa de montanha, camadas e shells." },
  C: {
    l: "Trapézios de desportos aquáticos",
    d: "Trapézio de cintura, trapézio de assento, trapézio de peito.",
  },
  "C.fermeture": {
    l: "Esta família abrirá assim que os nossos dados de marca cobrirem a altura dorsal de forma verificada. Preferimos não recomendar nada a recomendar com base num dado incerto.",
  },
  A1: { l: "Surf e desportos de onda", d: "Onda, longboard, bodyboard." },
  A2: {
    l: "Águas abertas e triatlo",
    d: "O gesto da nadada torna a liberdade dos ombros a restrição prioritária.",
  },
  A3: {
    l: "Kitesurf, wingfoil e práticas mistas",
    d: "Restrição adicional na cintura e na anca devido ao uso do trapézio.",
  },
  A4: {
    l: "Mergulho",
    d: "A compressão em profundidade torna decisivos o ajuste do tronco e o comprimento da perna.",
  },
  B0: { l: "Esqui e snowboard", d: "Roupa de montanha." },
  "A1-integrale": { l: "Fato inteiro", d: "Mangas e pernas compridas." },
  "A1-shorty": { l: "Shorty", d: "Mangas e pernas curtas." },
  "A1-top": { l: "Top", d: "Apenas parte superior em neoprene." },
  "A2-integrale": { l: "Fato de natação", d: "Fato inteiro concebido para nadar." },
  "A3-integrale": { l: "Fato inteiro", d: "Usado por baixo de um trapézio." },
  "A4-integrale": { l: "Fato de mergulho", d: "Fato inteiro molhado." },
  B1: { l: "Casaco", d: "Shell ou casaco isolado." },
  B2: { l: "Calças ou fato-macaco", d: "A principal zona de falha das tabelas padrão." },
  B3: { l: "Primeira camada ou camada intermédia", d: "Camada técnica interior." },
  B4: {
    l: "Fato de uma peça",
    d: "Casaco e calças combinados, restrição adicional no comprimento do tronco.",
  },
  "q.couches": { l: "Pretende usar uma camada intermédia por baixo?" },
  "q.couches.fine": { l: "Uma camada fina" },
  "q.couches.intermediaire": { l: "Uma camada fina e um forro polar" },
  "q.couches.epaisse": { l: "Várias camadas grossas" },
  "q.couches.inconnu": { l: "Ainda não sei" },
  "q.frequence": { l: "Com que frequência pratica?" },
  "q.frequence.occasionnel": { l: "Algumas saídas por ano" },
  "q.frequence.regulier": { l: "Várias vezes por mês" },
  "q.frequence.intensif": { l: "Todas as semanas ou mais" },
  "q.temperature": { l: "Em que água pratica mais frequentemente?" },
  "q.temperature.froide": { l: "Fria, abaixo de 15 °C" },
  "q.temperature.temperee": { l: "Temperada, de 15 a 20 °C" },
  "q.temperature.chaude": { l: "Quente, acima de 20 °C" },
  "q.preference": { l: "Que ajuste prefere?" },
  "q.preference.proche": { l: "Justo ao corpo" },
  "q.preference.neutre": { l: "Sem preferência marcada" },
  "q.preference.aise": { l: "Com alguma folga" },
};

export default { core, pages, catalogue };
