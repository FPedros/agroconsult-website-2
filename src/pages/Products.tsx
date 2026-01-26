import { useEffect, useRef, useState, type CSSProperties } from "react";
import InteractiveCard from "../components/InteractiveCard";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";
import { ProductCardCustomization } from "../config/productCardCustomization";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

type ProductCardData = {
  title: string;
  tagline: string;
  bullets: string[];
  audience?: string;
};

const contactHref = "mailto:contato@exemplo.com";

const anchorItems = [
  { id: "consultorias", label: "Inteligência de mercado" },
  { id: "dados-api", label: "Dados e APIs" },
  { id: "projetos", label: "Projetos" },
  { id: "rally", label: "Rally da Safra" },
  { id: "agricontent", label: "Comunicação" },
  { id: "valoracao", label: "Avaliação de Ativos" },
  { id: "treinamentos", label: "Palestras e Treinamentos" }
];

const sectionOrder = anchorItems.map((item) => item.id);

const whyItems = [
  "Dados",
  "Análise",
  "Estratégia",
  "Personalização",
  "Relacionamento",
  "Imparcialidade"
];

const consultoriaCards: ProductCardData[] = [
  {
    title: "Agromarket (mensal)",
    tagline: "Leitura do cenário e projeção D+1 das commodities para decisões mais rápidas e seguras.",
    bullets: [
      "Tendência da próxima safra e fatos atuais das principais commodities",
      "Rentabilidade e visão financeira do produtor",
      "Relação de troca e dinâmica do mercado de insumos"
    ],
    audience: "Indústrias, tradings, bancos, insumos e áreas comerciais"
  },
  {
    title: "BD Online",
    tagline: "Dados confiáveis, rápidos e integráveis para decisões e ganho operacional.",
    bullets: [
      "Base histórica + projeção D+1 (oferta x demanda, área, produção) por microrregião",
      "Acompanhamento regionalizado (grãos e cana) + rentabilidade, projeções e relação de troca",
      "API para integração com sistemas internos e ganho operacional"
    ],
    audience: "Inteligência de mercado, BI, risco e times de dados"
  },
  {
    title: "Cenários de Longo Prazo (5 anos)",
    tagline: "Planeje capacidade e investimento com projeções traduzidas para o seu segmento.",
    bullets: [
      "Projeções de área e produção (soja, milho, cana, café, algodão, trigo)",
      "Consumo interno, exportação e balanços (S&D global)",
      "Base para plano plurianual, parcerias, logística e capacidade instalada"
    ],
    audience: "Estratégia, investimento, logística e crédito"
  },
  {
    title: "CRR – Custo, Rentabilidade e Relação de Troca",
    tagline: "Entenda a margem e poder de compra para calibrar estratégia comercial.",
    bullets: [
      "Rentabilidade por commodity e região",
      "Relação de troca e timing comercial",
      "Direcionamento para ofertas e risco"
    ],
    audience: "Comercial, inteligência e finanças"
  },
  {
    title: "LATAM (Mercosul)",
    tagline: "Visão Argentina e Paraguai para antecipar impactos no seu mercado.",
    bullets: [
      "Cenário atual e safra de grãos no Mercosul",
      "Fatos atuais e implicações competitivas",
      "Apoio à leitura regional de oferta e demanda"
    ],
    audience: "Trading, indústria, bancos e exportadores"
  },
  {
    title: "Acompanhamento da Safra de Grãos (quinzenal)",
    tagline: "Plantio, desenvolvimento e colheita com leitura de risco e logística.",
    bullets: [
      "Consolidação do plantio e riscos de produção (clima, pragas e doenças)",
      "Tendências de produtividade",
      "Volume, sazonalidade e dinâmica logística da colheita"
    ],
    audience: "Trading, logística, indústria e crédito"
  },
  {
    title: "Acompanhamento da Safra de Cana (quinzenal)",
    tagline: "Produção e competitividade (açúcar/etanol) com visão operacional e de mercado.",
    bullets: [
      "Produção e exportação de açúcar",
      "Produção e competitividade do etanol",
      "Colheita e esmagamento de cana"
    ],
    audience: "Usinas, distribuidoras e crédito"
  },
  {
    title: "Consultoria (Fertilizantes)",
    tagline: "Dinâmica por matéria-prima para planejar suprimento e risco.",
    bullets: [
      "Relação de troca, estoques e sazonalidade",
      "Dimensionamento do mercado por matéria-prima",
      "Mapeamento de riscos e oportunidades"
    ],
    audience: "Indústria, distribuição, bancos e grandes produtores"
  },
  {
    title: "AgroSize (Defensivos)",
    tagline: "Planejamento de portifólio e suprimento por cultura.",
    bullets: [
      "Dimensionamento por classe de defensivos e por cultura",
      "Acompanhamento quinzenal por cultura e possíveis movimentos de repique",
      "Incidência de pragas/doenças/insetos"
    ],
    audience: "Indústria, distribuição e inteligência comercial"
  }
];

const dataCards: ProductCardData[] = [
  {
    title: "Coleta de Dados",
    tagline: "Base histórica + projeção em tempo real D+1 com validação cruzada de múltiplas fontes confiáveis.",
    bullets: ["Dados primários validados", "Projeções D+1", "Múltiplas fontes"],
    audience: "Inteligência de mercado"
  },
  {
    title: "Processamento",
    tagline: "Análise regionalizada e estruturação por microrregião. Commodity e indicadores financeiros.",
    bullets: ["Análise por região", "Estrutura por commodity", "Indicadores financeiros"],
    audience: "Inteligência de mercado"
  },
  {
    title: "Integração API",
    tagline: "API disponível para integração com sistemas internos, dashboards e BI com segurança enterprise.",
    bullets: ["Segurança enterprise", "Integração BI", "Dashboards customizados"],
    audience: "Equipes técnicas"
  }
];

const projectCases = [
  "Dimensionamento de portos/terminais (área de influência, demanda acessível, capacidade)",
  "Fertilizantes & infraestrutura (demanda, importação/distribuição)",
  "Benchmark de produção/rentabilidade (mix, timing compra/venda, gargalos de margem)",
  "Abertura de novas áreas (solo/clima, mercado próximo, escoamento)"
];

const projectCards: ProductCardData[] = [
  {
    title: "Projetos on-demand",
    tagline: "Estudos personalizados para decisões estratégicas com critério e validação cruzada.",
    bullets: [
      "Escopo claro: objetivo -> hipóteses -> premissas -> cenários -> recomendações",
      "Várias fontes e análise cruzada para consistência das premissas",
      "Visão multidisciplinar dos elos da cadeia do agro"
    ],
    audience: "Estratégia, investimento e expansão"
  },
  {
    title: "Mini-casos",
    tagline: "Exemplos reais de projetos sob medida.",
    bullets: projectCases
  }
];

const rallyCards: ProductCardData[] = [
  {
    title: "Rally da Safra",
    tagline:
      "Maior expedição técnica de levantamento das condições das safras brasileiras de soja e de milho in loco, com mais de 100 mil km percorridos anualmente.",
    bullets: [
      "Visibilidade e relacionamento: eventos, imprensa, digital e campo",
      "Previsão mais assertiva e mais cedo (antes das origens oficiais)",
      "Coleta de dados primários na prática (confiabilidade)"
    ],
    audience: "Marcas que buscam posicionamento e engajamento no Agronegócio"
  },
  {
    title: "Etapa Algodão",
    tagline:
      "Equipes e eventos dedicados à avaliação de áreas de algodão e de relacionamento com grandes grupos agrícolas.",
    bullets: [
      "Visitas aos grandes grupos agrícolas nas principais regiões de produção de algodão do Brasil",
      "Eventos virtuais e presenciais que reúnem os principais empresários rurais, entidades e empresas relacionadas com a fibra",
      "Criação de conteúdo rico sobre a safra e o mercado de algodão."
    ],
    audience: "Marcas que buscam posicionamento e relacionamento com grandes grupos agrícolas produtores de algodão."
  },
  {
    title: "Etapa Fronteiras",
    tagline:
      "Levantamento de dados inéditos em regiões de fronteiras agrícolas, com ampla divulgação dos resultados e potencialidades por meio das plataformas do Rally da Safra.",
    bullets: [
      "Levantamento de dados in loco em lavouras da região com a metodologia utilizada no campo pelo Rally da Safra.",
      "Visitas a produtores rurais e autoridades da região para entender as potencialidades e os desafios de se produzir na nova fronteira.",
      "Divulgação das novas fronteiras agrícolas por meio das plataformas digitais do Rally da Safra, democratizando os resultados e colocando a fronteiras agrícola no mapa do agronegócio brasileiro."
    ],
    audience:
      "Autoridades e empresas que buscam colocar áreas de fronteira agrícola no radar da indústria, investimentos e do agronegócio brasileiro."
  }
];

const agricontentCards: ProductCardData[] = [
  {
    title: "Agricontent",
    tagline:
      "Conteúdo técnico sobre safra e mercado personalizado com a marca e a identidade do cliente, pronto para ser usado como fonte de relacionamento com clientes e prospects.",
    bullets: [
      "Vídeos semanais com especialistas + produção completa (roteiro, gravação, edição, legendas)",
      "Reels/shorts/posts/carrosséis educativos com cadência",
      "Conteúdo ancorado em dados e análises de mercado"
    ],
    audience: "Marketing e comunicação no agro"
  }
];

const valoracaoCards: ProductCardData[] = [
  {
    title: "Agrovalora Basic",
    tagline:
      "O Agrovalora Basic é um laudo gerado de forma automática pela nossa plataforma, indicado para obter rapidamente uma estimativa do valor do imóvel rural e uma visão geral de suas características.",
    bullets: [
      "Análise de uso e ocupação do imóvel com aplicação de algoritmos",
      "Análise socioambiental padrão",
      "Análise simplificada de clima, solo e declividade",
      "Apresentação do valor de mercado do imóvel por matrícula"
    ],
    audience: "Quem precisa de uma avaliação rápida, objetiva e de baixo custo para tomada de decisão."
  },
  {
    title: "Agrovalora Plus",
    tagline:
      "O Agrovalora Plus é um laudo técnico simplificado, porém com revisão humana especializada e visualização completa por mapas.",
    bullets: [
      "Análise de uso e ocupação do imóvel realizada por analistas GEO",
      "Análise socioambiental detalhada, com percentuais de sobreposição, pontos de atenção",
      "Mapas de logística, uso do imóvel e socioambiental",
      "Precificação realizada por especialista no mercado de terras"
    ],
    audience: "Quem precisa avaliar atributos específicos do imóvel com maior nível de confiabilidade e detalhamento."
  },
  {
    title: "Agrovalora Premium",
    tagline:
      "O Agrovalora Premium é o laudo mais completo, com avaliação técnica aprofundada, análise documental e parecer crítico do especialista, oferecendo máxima segurança para investimentos, aquisições e operações complexas.",
    bullets: [
      "Análise detalhada de uso e ocupação por analistas GEO, com avaliação individual de cada matrícula",
      "Análise documental completa, incluindo Matrícula, CCIR, CAR e SIGEF",
      "Análise socioambiental aprofundada, com percentuais de sobreposição, pontos de atenção e mapas técnicos",
      "Análise detalhada de risco climático, potencial agronômico, declividade e tipo de solo por matrícula e mapas técnicos",
      "Mapas do eixo logístico regional, com análise detalhada das condições de acesso, encravamento e estado das rodovias que influenciam o imóvel.",
      "Precificação realizada por especialista, considerando fatores intrínsecos e extrínsecos do imóvel"
    ],
    audience:
      "Quem precisa da máxima segurança, profundidade técnica e precisão na definição do valor e dos riscos que envolvem o imóvel."
  }
];

const trainingCards: ProductCardData[] = [
  {
    title: "Palestras Avulsas",
    tagline: "Alinhamento de cenário com especialistas e conteúdo visual.",
    bullets: [
      "Curto e médio prazo com foco no negócio do cliente",
      "Ótimo para eventos e alinhamento interno",
      "Reforço de confiança e autoridade técnica"
    ],
    audience: "Eventos, convenções e liderança"
  },
  {
    title: "Treinamentos digitais e presenciais",
    tagline: "Capacitação em escala com padronização e flexibilidade.",
    bullets: [
      "Vídeos, quizzes e módulos organizados",
      "Conteúdo técnico/estratégico (soja, milho, fertilizantes etc.)",
      "Qualifica discurso comercial e abordagem com o produtor"
    ],
    audience: "Grandes equipes comerciais e técnicas"
  }
];

const sectionTitleClass =
  "relative inline-block pt-2 pb-2 type-h2 text-brand-navy whitespace-nowrap sm:pt-3 sm:pb-3 after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-16 after:rounded-full after:bg-brand-gradient after:content-['']";

const cardGridClass = (count: number) => {
  if (count <= 1) return "grid gap-4";
  if (count === 2) return "grid gap-4 md:grid-cols-2";
  return "grid gap-4 md:grid-cols-2 lg:grid-cols-3";
};

// UI Component Functions
function ProductCard({ title, tagline, bullets, audience }: ProductCardData) {
  return (
    <InteractiveCard
      title={title}
      description={tagline}
      disableHover
      containerClassName="border-brand-green/30 bg-brand-light/40 shadow-panel ring-1 ring-brand-green/10"
      bodyClassName="bg-white/95"
    >
      <ul className="space-y-2 text-base text-slate-700">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {audience && (
        <p className="type-small text-brand-gray">
          <span className="type-label text-brand-gray">Para quem é:</span>{" "}
          <span className="font-semibold text-brand-navy">{audience}</span>
        </p>
      )}
    </InteractiveCard>
  );
}

function ConsultoriaListItem({ card, index }: { card: ProductCardData; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-l-4 border-brand-green bg-white rounded-r-lg overflow-hidden transition-all hover:shadow-md"
      data-reveal="card"
      style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 hover:bg-slate-50"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-white text-xs font-bold">
              {index + 1}
            </span>
            <h3 className="font-bold text-brand-navy text-sm sm:text-base line-clamp-2">
              {card.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 line-clamp-2">{card.tagline}</p>
        </div>
        <div
          className={`flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chevronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#202956" />
                <stop offset="40%" stopColor="#1a445f" />
                <stop offset="100%" stopColor="#008747" />
              </linearGradient>
            </defs>
            <polyline points="6 9 12 15 18 9" stroke="url(#chevronGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-3 sm:px-5 sm:py-4 border-t border-brand-green/20 bg-white">
          <ul className="space-y-2 mb-3">
            {card.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-brand-green flex-shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {card.audience && (
            <p className="text-xs text-brand-gray">
              <span className="font-semibold">Para quem é:</span> {card.audience}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ============ UI COMPONENTS ============

// LISTA EXPANDÍVEL - ConsultoriaListItem
// ============================================
// CONFIGURAÇÃO DO STICKY:
// - sticky top-[120px] = 120px (mobile/desktop) - abaixo da barra de categorias
// - z-20: Título fica ACIMA do conteúdo
// - Conteúdo tem z-10: rola POR TRÁS do título
// - Barra de categorias: z-30 (sempre no topo)
// - Ajuste esses valores se a altura do Navbar ou barra mudar
// ============================================
function ConsultoriaSection({ isActive, opacity = 1 }: { isActive: boolean; opacity?: number }) {
  return (
    <section
      id="consultorias"
      className="relative section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby="consultorias-title"
    >
      {/* Sticky Title Wrapper - Gruda abaixo da barra de categorias, conteúdo rola por trás */}
      <div 
        className="sticky top-[120px] z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
        data-section-title="consultorias"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
          <div className="page-container py-4 sm:py-5">
            <h2 
              id="consultorias-title" 
              className={`${sectionTitleClass} text-left transition-opacity duration-300`}
              style={{ opacity }}
            >
              Inteligência de mercado
            </h2>
          </div>
        </div>
      </div>
      
      {/* Conteúdo que rola por trás do título (z-index menor) */}
      <div className="relative z-10 page-container space-y-3 sm:space-y-4">
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-4 sm:py-6 lg:py-8">
          <div className={["pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out", isActive ? "opacity-100" : "opacity-0"].join(" ")} aria-hidden="true" />
          <div className="page-container relative z-10">
            <div className="space-y-2 sm:space-y-3">
              {consultoriaCards.map((card, idx) => (
                <ConsultoriaListItem key={card.title} card={card} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section component: DadosSection
function DadosSection({ isActive, opacity = 1 }: { isActive: boolean; opacity?: number }) {
  return (
    <section
      id="dados-api"
      className="relative section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby="dados-api-title"
    >
      {/* Sticky Title - conteúdo rola por trás */}
      <div 
        className="sticky top-[120px] z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
        data-section-title="dados-api"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
          <div className="page-container py-4 sm:py-5">
            <h2 
              id="dados-api-title" 
              className={`${sectionTitleClass} text-left transition-opacity duration-300`}
              style={{ opacity }}
            >
              Dados e APIs
            </h2>
          </div>
        </div>
      </div>
      
      {/* Conteúdo (z-10) rola por trás do título (z-20) */}
      <div className="relative z-10"><div className="page-container space-y-3 sm:space-y-4">
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-4 sm:py-6 lg:py-8">
          <div className={["pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out", isActive ? "opacity-100" : "opacity-0"].join(" ")} aria-hidden="true" />
          <div className="page-container relative z-10">
            <div className="space-y-2 sm:space-y-3">
              {dataCards.map((card, idx) => (
                <ConsultoriaListItem key={card.title} card={card} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div></div>
    </section>
  );
}

// Section Component Functions

function ProductSection({
  id,
  title,
  cards,
  children,
  isActive
}: {
  id: string;
  title: string;
  cards: ProductCardData[];
  children?: React.ReactNode;
  isActive?: boolean;
}) {
  const gridClass = cardGridClass(cards.length);
  const gridWrapperClass = cards.length <= 1 ? "max-w-4xl mx-auto" : "";
  const titleClassName = [sectionTitleClass, "text-left"].join(" ");
  const cardsGrid = (
    <div className={gridWrapperClass}>
      <div className={gridClass}>
        {cards.map((card) => (
          <ProductCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
  return (
    <section
      id={id}
      className="section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby={`${id}-title`}
    >
      <div className="page-container space-y-4 sm:space-y-6">
        <div className="sticky top-[120px] z-20" data-section-title={id}>
          <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
            <div
              className="pointer-events-none absolute left-0 right-0 -top-8 h-8 bg-white md:-top-12 md:h-12 lg:-top-20 lg:h-20"
              aria-hidden="true"
            />
            <div className="page-container py-3 sm:py-2">
              <h2 id={`${id}-title`} className={titleClassName}>
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-6 sm:py-8 lg:py-10">
          <div
            className={[
              "pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out",
              isActive ? "opacity-100" : "opacity-0"
            ].join(" ")}
            aria-hidden="true"
          />
          <div className="page-container relative z-10">{cardsGrid}</div>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectsSection({ isActive, opacity = 1 }: { isActive: boolean; opacity?: number }) {
  return (
    <section
      id="projetos"
      className="relative section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby="projetos-title"
    >
      {/* Sticky Title grudado */}
      <div 
        className="sticky top-[120px] z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
        data-section-title="projetos"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
          <div className="page-container py-4 sm:py-5">
            <h2 
              id="projetos-title" 
              className={`${sectionTitleClass} text-left transition-opacity duration-300`}
              style={{ opacity }}
            >
              Projetos Sob Medida
            </h2>
          </div>
        </div>
      </div>
      
      {/* Conteúdo rola por trás */}
      <div className="relative z-10 page-container space-y-3 sm:space-y-4">
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-4 sm:py-6 lg:py-8">
          <div className={["pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out", isActive ? "opacity-100" : "opacity-0"].join(" ")} aria-hidden="true" />
          <div className="page-container relative z-10">
            <div className="space-y-2 sm:space-y-3">
              {projectCards.map((card, idx) => (
                <ConsultoriaListItem key={idx} card={card} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RallySection({ isActive, opacity = 1 }: { isActive: boolean; opacity?: number }) {
  return (
    <section
      id="rally"
      className="relative section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby="rally-title"
    >
      {/* Sticky Title */}
      <div
        className="sticky top-[120px] z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        data-section-title="rally"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
          <div className="page-container py-4 sm:py-5">
            <h2
              id="rally-title"
              className={`${sectionTitleClass} text-left transition-opacity duration-300`}
              style={{ opacity }}
            >
              Rally da Safra
            </h2>
          </div>
        </div>
      </div>

      {/* ConteÃºdo rola por trÃ¡s */}
      <div className="relative z-10 page-container space-y-3 sm:space-y-4">
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-4 sm:py-6 lg:py-8">
          <div
            className={[
              "pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out",
              isActive ? "opacity-100" : "opacity-0"
            ].join(" ")}
            aria-hidden="true"
          />
          <div className="page-container relative z-10">
            <div className="space-y-2 sm:space-y-3">
              {rallyCards.map((card, idx) => (
                <ConsultoriaListItem key={idx} card={card} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComunicacaoSection({ isActive, opacity = 1 }: { isActive: boolean; opacity?: number }) {
  return (
    <section
      id="agricontent"
      className="relative section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby="agricontent-title"
    >
      {/* Sticky Title */}
      <div 
        className="sticky top-[120px] z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
        data-section-title="agricontent"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
          <div className="page-container py-4 sm:py-5">
            <h2 
              id="agricontent-title" 
              className={`${sectionTitleClass} text-left transition-opacity duration-300`}
              style={{ opacity }}
            >
              Comunicação
            </h2>
          </div>
        </div>
      </div>
      
      {/* Conteúdo rola por trás */}
      <div className="relative z-10 page-container space-y-3 sm:space-y-4">
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-4 sm:py-6 lg:py-8">
          <div className={["pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out", isActive ? "opacity-100" : "opacity-0"].join(" ")} aria-hidden="true" />
          <div className="page-container relative z-10">
            <div className="space-y-2 sm:space-y-3">
              {agricontentCards.map((card, idx) => (
                <ConsultoriaListItem key={idx} card={card} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValoracaoSection({ isActive, opacity = 1 }: { isActive: boolean; opacity?: number }) {
  return (
    <section
      id="valoracao"
      className="relative section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby="valoracao-title"
    >
      {/* Sticky Title */}
      <div 
        className="sticky top-[120px] z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
        data-section-title="valoracao"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
          <div className="page-container py-4 sm:py-5">
            <h2 
              id="valoracao-title" 
              className={`${sectionTitleClass} text-left transition-opacity duration-300`}
              style={{ opacity }}
            >
              Avaliação de Ativos
            </h2>
          </div>
        </div>
      </div>
      
      {/* Conteúdo rola por trás */}
      <div className="relative z-10 page-container space-y-3 sm:space-y-4">
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-4 sm:py-6 lg:py-8">
          <div className={["pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out", isActive ? "opacity-100" : "opacity-0"].join(" ")} aria-hidden="true" />
          <div className="page-container relative z-10">
            <div className="space-y-2 sm:space-y-3">
              {valoracaoCards.map((card, idx) => (
                <ConsultoriaListItem key={idx} card={card} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingsSection({ isActive, opacity = 1 }: { isActive: boolean; opacity?: number }) {
  return (
    <section
      id="treinamentos"
      className="relative section-padding bg-white scroll-mt-[120px] pt-6 sm:pt-8 md:pt-16 lg:pt-24"
      aria-labelledby="treinamentos-title"
    >
      {/* Sticky Title */}
      <div 
        className="sticky top-[120px] z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
        data-section-title="treinamentos"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
          <div className="page-container py-4 sm:py-5">
            <h2 
              id="treinamentos-title" 
              className={`${sectionTitleClass} text-left transition-opacity duration-300`}
              style={{ opacity }}
            >
              Palestras e Treinamentos
            </h2>
          </div>
        </div>
      </div>
      
      {/* Conteúdo rola por trás */}
      <div className="relative z-10 page-container space-y-3 sm:space-y-4">
        <div className="relative left-1/2 w-screen -translate-x-1/2 py-4 sm:py-6 lg:py-8">
          <div className={["pointer-events-none absolute inset-0 bg-brand-gradient transition-opacity duration-300 ease-out", isActive ? "opacity-100" : "opacity-0"].join(" ")} aria-hidden="true" />
          <div className="page-container relative z-10">
            <div className="space-y-2 sm:space-y-3">
              {trainingCards.map((card, idx) => (
                <ConsultoriaListItem key={idx} card={card} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Products() {
  const ctaHover = usePrimaryGradientHover();
  const revealRef = useRevealOnScroll<HTMLDivElement>();
  const activeSectionRef = useRef<string | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [sectionOpacities, setSectionOpacities] = useState<Record<string, number>>({});
  const navRef = useRef<HTMLDivElement | null>(null);
  const navItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    let frame = 0;
    const getOffset = () => (window.innerWidth >= 1024 ? 192 : 128);
    const getLead = () => (window.innerWidth >= 1024 ? 96 : 64);
    
    const updateActive = () => {
      frame = 0;
      const offset = getOffset();
      const lead = getLead();
      const tolerance = 2;
      let nextActive: string | null = null;
      const opacities: Record<string, number> = {};
      
      for (let i = 0; i < sectionOrder.length; i++) {
        const id = sectionOrder[i];
        const section = document.getElementById(id);
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        const titleElement = section.querySelector('[data-section-title]');
        
        if (rect.top <= offset + lead + tolerance) {
          nextActive = id;
        }
        
        // Calcula opacidade do título baseado na distância da próxima seção
        if (titleElement && i < sectionOrder.length - 1) {
          const nextSection = document.getElementById(sectionOrder[i + 1]);
          if (nextSection) {
            const nextRect = nextSection.getBoundingClientRect();
            const stickyTop = offset + lead;
            const fadeDistance = 150; // Distância em pixels para o fade
            
            if (nextRect.top <= stickyTop + fadeDistance) {
              // Próxima seção está chegando, aplica fade out
              const distance = nextRect.top - stickyTop;
              const opacity = Math.max(0, Math.min(1, distance / fadeDistance));
              opacities[id] = opacity;
            } else {
              opacities[id] = 1;
            }
          } else {
            opacities[id] = 1;
          }
        } else {
          opacities[id] = 1;
        }
      }
      
      if (activeSectionRef.current !== nextActive) {
        activeSectionRef.current = nextActive;
        setActiveSectionId(nextActive);
      }
      
      setSectionOpacities(opacities);
    };
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    if (!activeSectionId) return;
    const nav = navRef.current;
    const activeItem = navItemRefs.current[activeSectionId];
    if (!nav || !activeItem) return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      nav.scrollTo({ left: Math.max(activeItem.offsetLeft - 24, 0), behavior: "smooth" });
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const leftOverflow = itemRect.left - navRect.left;
    const rightOverflow = itemRect.right - navRect.right;
    if (leftOverflow < 0) {
      nav.scrollBy({ left: leftOverflow - 12, behavior: "smooth" });
    } else if (rightOverflow > 0) {
      nav.scrollBy({ left: rightOverflow + 12, behavior: "smooth" });
    }
  }, [activeSectionId]);

  const scrollToCategories = () => {
    const target = document.getElementById("categorias");
    if (target) {
      target.scrollIntoView({ behavior: "auto" });
    }
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const offset = window.innerWidth >= 1024 ? 192 : 128;
    let top = section.offsetTop - offset;
    const sectionIndex = sectionOrder.indexOf(sectionId);
    if (sectionIndex > 0) {
      const prevSection = document.getElementById(sectionOrder[sectionIndex - 1]);
      if (prevSection) {
        const prevBottom = prevSection.offsetTop + prevSection.offsetHeight;
        const minTop = prevBottom - offset + 1;
        if (top < minTop) top = minTop;
      }
    }
    activeSectionRef.current = sectionId;
    setActiveSectionId(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    window.scrollTo({ top: Math.max(top, 0), behavior: "auto" });
  };

  return (
    <div ref={revealRef} className="relative bg-white">
      <div className="relative">
        <section
          className="relative overflow-hidden bg-brand-gradient pt-12 text-white md:pt-24 lg:pt-20"
          data-reveal="section"
        >
        <div className="absolute inset-0 bg-brand-radial opacity-25" aria-hidden="true" />
        <div className="page-container relative flex flex-col gap-6 pt-8 pb-16 md:py-16 lg:flex-row lg:items-center lg:pt-12 lg:pb-20">
          <div className="space-y-4">
            <p className="type-label text-white/80">Produtos</p>
            <h1 className="type-h1">Conheça as soluções da Agroconsult</h1>
            <p className="type-body max-w-3xl text-white/85">
              Inteligência e entregas para decisões estratégicas no agronegócio, do dado primário aos projetos sob medida.
            </p>
            <div className="flex flex-wrap gap-2">
              {whyItems.map((item) => (
                <span
                  key={item}
                  className="type-small rounded-2xl bg-white/10 px-3 py-2 text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={scrollToCategories} className="btn-ghost">
                Ver por categoria
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="categorias"
        className="border-y border-brand-gray/20 bg-white sticky top-16 z-30 md:top-[72px] lg:top-[72px]"
      >
        <div className="page-container">
          <nav
            ref={navRef}
            className="flex gap-2 overflow-x-auto py-4 pr-2 pl-3 lg:justify-center lg:overflow-visible"
            aria-label="Categorias de produtos"
          >
              {anchorItems.map((item) => {
                const isActive = activeSectionId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    ref={(node) => {
                      navItemRefs.current[item.id] = node;
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(item.id);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "inline-flex min-w-max items-center justify-center rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                    isActive
                      ? "border-transparent bg-brand-gradient text-white shadow-glow bg-[length:200%_200%] animate-pulse-gradient"
                      : "border-brand-gray/40 text-brand-navy hover:border-brand-green hover:text-brand-green"
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <ConsultoriaSection isActive={activeSectionId === "consultorias"} opacity={sectionOpacities["consultorias"]} />

      <DadosSection isActive={activeSectionId === "dados-api"} opacity={sectionOpacities["dados-api"]} />

      <ProjectsSection isActive={activeSectionId === "projetos"} opacity={sectionOpacities["projetos"]} />

      <RallySection isActive={activeSectionId === "rally"} opacity={sectionOpacities["rally"]} />
      <ComunicacaoSection isActive={activeSectionId === "agricontent"} opacity={sectionOpacities["agricontent"]} />

      <ValoracaoSection isActive={activeSectionId === "valoracao"} opacity={sectionOpacities["valoracao"]} />

      <TrainingsSection isActive={activeSectionId === "treinamentos"} opacity={sectionOpacities["treinamentos"]} />

        <section className="section-padding bg-gradient-to-b from-white via-white to-brand-light/40" data-reveal="section">
          <div className="page-container">
            <div className="gradient-border rounded-3xl">
              <div className="relative overflow-hidden rounded-[22px] bg-brand-gradient bg-[length:200%_200%] px-6 py-10 text-white shadow-xl animate-pulse-gradient md:px-12">
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
                <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="type-h3">Vamos definir a entrega ideal para o seu desafio estratégico?</h3>
                    <p className="text-sm text-white/85">
                      Conecte dados primários, inteligência de mercado e projetos sob medida com o time da Agroconsult.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={contactHref} className="btn-primary whitespace-nowrap" {...ctaHover}>
                      Falar com especialista
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
