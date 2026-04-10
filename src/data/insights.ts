export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML ou Markdown string (usaremos HTML simples pra facilitar por enquanto)
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
  tags: string[];
}

export const insights: InsightPost[] = [
  {
    id: "1",
    slug: "resiliencia-tropical-ti-no-clima-amazonico",
    title: "Resiliência Tropical: Como Blindar a TI no Clima Amazônico",
    excerpt: "Descubra por que instalações padrão falham no Polo Industrial de Manaus e quais os protocolos de engenharia necessários para garantir 99,9% de uptime lidando com umidade extrema e variações de temperatura.",
    coverImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200", // Imagem de data center verde/tropical
    date: "14 Mai 2024",
    readTime: "6 min de leitura",
    category: "Infraestrutura Crítica",
    author: {
      name: "Eduardo Souza",
      role: "Diretor de Engenharia Tecnológica",
      avatar: "https://ui-avatars.com/api/?name=Eduardo+Souza&background=023B59&color=fff"
    },
    tags: ["PIM", "Clima", "Datacenter", "Cabeamento"],
    content: `
      <h2>O Maior Inimigo Silencioso dos Racks: A Umidade Amazônica</h2>
      <p>Quando falamos sobre infraestrutura de TI no Brasil, a maioria das literaturas e certificações (como certificações europeias ou americanas) não levam em conta um fator crítico que nós amazonenses conhecemos bem: <strong>umidade constante acima de 85% e calor sufocante</strong>.</p>
      
      <p>Muitas integradoras de outras regiões do país assinam projetos para empresas do Polo Industrial de Manaus (PIM) utilizando cabeamento e refrigeração Padrão Centro-Sul. O resultado? Zinabre nos contatos em menos de 18 meses, falhas fantasmas nas redes CAT6, e superaquecimento de switches de borda.</p>

      <h3>Por que o CFTV falha mais rápido em Manaus?</h3>
      <p>Câmeras externas instaladas nos complexos industriais sofrem com a dilatação térmica diária. Sol escaldante ao meio-dia seguido de chuvas torrenciais às 15h. Se as caixas de passagem e o cabeamento não utilizarem proteção IP67 e gel selante nas emendas, a água condensa <i>dentro</i> do cabo (efeito capilaridade) e viaja quilômetros até oxidar os pinos do servidor.</p>

      <blockquote>
        "Implementar tecnologia no Equador exige mais que seguir manuais; exige engenharia de campo empírica."
      </blockquote>

      <h3>As 3 Regras de Ouro da Semper Vincit</h3>
      <ol>
        <li><strong>Isolamento Duplo em Conectores Lógicos:</strong> Utilização estrita de patch cords injetados de fábrica e conectores fêmea banhados a ouro 50 mícrons com proteção blindada (F/UTP).</li>
        <li><strong>Separação Térmica de Ativos:</strong> Distanciamento planejado entre roteadores de núcleo e no-breaks para evitar bolsões térmicos de calor concentrado, muito comuns em data centers adaptados.</li>
        <li><strong>Eletrocalha Anticondensação:</strong> Projeto de descida de cabos que não permita que a água da condensação do ar-condicionado viaje pelos cabos.</li>
      </ol>

      <p>A Semper Vincit estuda o comportamento da engenharia elétrica em ambiente amazônico há mais de 17 anos. Não vendemos apenas cabos ou câmeras; nós integramos verdadeiros sistemas de sobrevivência digital.</p>
    `
  },
  {
    id: "2",
    slug: "cftv-com-ia-para-controle-industrial",
    title: "Além da Gravação: Como o CFTV com IA Reduz Custos no PIM",
    excerpt: "Sistemas de monitoramento não servem apenas para gravar depois do roubo. Entenda como o Analytics em Edge está prevenindo invasões e otimizando a logística nas fábricas.",
    coverImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200", 
    date: "28 Abr 2024",
    readTime: "4 min de leitura",
    category: "Segurança Inteligente",
    author: {
      name: "Eduardo Souza",
      role: "Diretor de Engenharia Tecnológica",
      avatar: "https://ui-avatars.com/api/?name=Eduardo+Souza&background=023B59&color=fff"
    },
    tags: ["CFTV", "Inteligência Artificial", "Indústria"],
    content: `
      <h2>A Falsa Sensação de Segurança dos DVRs Antigos</h2>
      <p>Muitas fábricas ainda confiam seus investimentos multimilionários a sistemas analógicos antigos que apenas gravam imagens em resolução HD. A grande verdade inconveniente do CFTV passivo é que ele só serve para você assistir o prejuízo acontecendo no dia seguinte.</p>

      <h3>O Conceito de Analytics na Borda (Edge Computing)</h3>
      <p>A nova geração de câmeras instaladas pela Semper Vincit não envia o vídeo bruto para um servidor analisar. A própria câmera possui um chip de Inteligência Artificial capaz de classificar o que está vendo em milissegundos.</p>
      
      <ul>
        <li><strong>Filtro de Falsos Alarmes:</strong> O sistema ignora cães de guarda, vento nas árvores ou chuva, mas dispara alertas para a central assim que identifica o contorno anatômico de um humano ou veículo na área isolada.</li>
        <li><strong>Auto Tracking PTZ:</strong> Uma vez bloqueado no invasor, o sistema cruza informações e as câmeras motorizadas PTZ começam a acompanhar o suspeito de forma autônoma por todo o perímetro da fábrica.</li>
        <li><strong>Controle Logístico:</strong> Integração LPR (Leitura de Placas) no controle de docas do Polo Industrial, registrando a entrada e saída exata de cada transportadora sem interferência humana.</li>
      </ul>

      <p>Sua fábrica precisa de um parceiro capaz de desenhar cenários preditivos de defesa de perímetro. A Semper Vincit entrega não apenas hardware, mas análise e estratégia.</p>
    `
  }
];
