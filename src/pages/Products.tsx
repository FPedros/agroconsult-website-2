import { useEffect, useRef, useState } from "react";
import InteractiveCard from "../components/InteractiveCard";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

type ProductCardData = {
  title: string;
  tagline: string;
  bullets: string[];
  audience?: string;
};

const contactHref = "mailto:contato@exemplo.com";

const anchorItems = [
  { id: "consultorias", label: "Consultorias" },
  { id: "dados-api", label: "Dados & API" },
  { id: "projetos", label: "Projetos" },
  { id: "rally", label: "Rally da Safra" },
  { id: "agricontent", label: "Conteudo (AgriContent)" },
  { id: "valoracao", label: "Valoracao (Agrovalora / Agroterra)" },
  { id: "treinamentos", label: "Treinamentos & Palestras" }
];

const sectionOrder = anchorItems.map((item) => item.id);

const whyItems = [
  "Imparcialidade",
  "Fontes distintas + validacao cruzada",
  "Metodologia clara (hipoteses -> premissas -> cenarios -> recomendacoes)",
  "Entregas adaptadas ao contexto do cliente"
];

const consultoriaCards: ProductCardData[] = [
  {
    title: "AgroMarket (mensal)",
    tagline: "Leitura do cenario e projecao D+1 das commodities para decisoes mais rapidas e seguras.",
    bullets: [
      "Tendencia da proxima safra e fatos atuais das principais commodities",
      "Rentabilidade e visao financeira do produtor",
      "Relacao de troca e dinamica do mercado de insumos"
    ],
    audience: "Industrias, tradings, bancos, insumos e areas comerciais"
  },
  {
    title: "Cenarios de Longo Prazo (5 anos)",
    tagline: "Planeje capacidade e investimento com projecoes traduzidas para o seu segmento.",
    bullets: [
      "Projecoes de area e producao (soja, milho, cana, cafe, algodao, trigo)",
      "Consumo interno, exportacao e balancos (S&D global)",
      "Base para plano plurianual, parcerias, logistica e capacidade instalada"
    ],
    audience: "Estrategia, investimento, logistica e credito"
  },
  {
    title: "CRR - Custo, Rentabilidade e Relacao de Troca",
    tagline: "Entenda margem e poder de compra para calibrar estrategia comercial.",
    bullets: [
      "Rentabilidade por commodity e regiao",
      "Relacao de troca e timing comercial",
      "Direcionamento para ofertas e risco"
    ],
    audience: "Comercial, inteligencia e financas"
  },
  {
    title: "LATAM (Mercosul)",
    tagline: "Visao Argentina e Paraguai para antecipar impactos no seu mercado.",
    bullets: [
      "Cenario atual e safra de graos no Mercosul",
      "Fatos atuais e implicacoes competitivas",
      "Apoio a leitura regional de oferta e demanda"
    ],
    audience: "Trading, industria, bancos e exportadores"
  },
  {
    title: "Acompanhamento da Safra de Graos (quinzenal)",
    tagline: "Plantio, desenvolvimento e colheita com leitura de risco e logistica.",
    bullets: [
      "Consolidacao do plantio e riscos de producao",
      "Tendencias de produtividade (clima, pragas e doencas)",
      "Volume, sazonalidade e dinamica logistica da colheita"
    ],
    audience: "Trading, logistica, industria e credito"
  },
  {
    title: "Acompanhamento da Safra de Cana (quinzenal)",
    tagline: "Producao e competitividade (acucar/etanol) com visao operacional e de mercado.",
    bullets: [
      "Producao e exportacao de acucar",
      "Producao e competitividade do etanol",
      "Colheita e esmagamento de cana"
    ],
    audience: "Usinas, distribuidoras e credito"
  },
  {
    title: "Consultoria - Fertilizantes",
    tagline: "Dinamica por materia-prima para planejar suprimento e risco.",
    bullets: [
      "Relacao de troca, estoques e sazonalidade",
      "Dimensionamento do mercado por materia-prima",
      "Mapeamento de riscos e oportunidades"
    ],
    audience: "Industria, distribuicao, bancos e grandes produtores"
  },
  {
    title: "AgroSize Defensivos",
    tagline: "Planejamento de portfolio e suprimento com leitura por cultura.",
    bullets: [
      "Dimensionamento por classe de defensivos e por cultura",
      "Acompanhamento quinzenal por cultura e possiveis movimentos de repique",
      "Incidencia de pragas/doencas/insetos + sinais de resistencia"
    ],
    audience: "Industria, distribuicao e inteligencia comercial"
  }
];

const dataCards: ProductCardData[] = [
  {
    title: "BD Online + API",
    tagline: "Dados confiaveis, rapidos e integraveis para decisoes e ganho operacional.",
    bullets: [
      "Base historica + projecao D+1 (oferta x demanda, area, producao) por microrregiao",
      "Acompanhamento regionalizado (graos e cana) + rentabilidade, projecoes e relacao de troca",
      "API para integracao com sistemas internos e ganho operacional"
    ],
    audience: "Inteligencia de mercado, BI, risco e times de dados"
  }
];

const projectCases = [
  "Dimensionamento de portos/terminais (area de influencia, demanda acessavel, capacidade)",
  "Fertilizantes & infraestrutura (demanda, terminalizacao, importacao/distribuicao)",
  "Benchmark de producao/rentabilidade (mix, timing compra/venda, gargalos de margem)",
  "Abertura de novas areas (solo/clima, mercado proximo, escoamento)"
];

const projectCards: ProductCardData[] = [
  {
    title: "Projetos (on-demand)",
    tagline: "Estudos personalizados para decisoes estrategicas com criterio e validacao cruzada.",
    bullets: [
      "Escopo claro: objetivo -> hipoteses -> premissas -> cenarios -> recomendacoes",
      "Varias fontes e analise cruzada para consistencia das premissas",
      "Visao multidisciplinar dos elos da cadeia do agro"
    ],
    audience: "Estrategia, investimento e expansao"
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
    tagline: "Dados de campo antecipados + relacionamento direto com produtores e stakeholders.",
    bullets: [
      "Previsao mais assertiva e mais cedo (antes das origens oficiais)",
      "Coleta de dados primarios na pratica (confiabilidade)",
      "Visibilidade e relacionamento: eventos, imprensa, digital e campo"
    ],
    audience: "Marcas que querem dados + posicionamento + geracao de demanda"
  }
];


const agricontentCards: ProductCardData[] = [
  {
    title: "AgriContent",
    tagline: "Conteudo tecnico com autoridade e lastro em dados, sem inflar o time interno.",
    bullets: [
      "Videos semanais com especialistas + producao completa (roteiro, gravacao, edicao, legendas)",
      "Reels/shorts/posts/carrosseis educativos com cadencia",
      "Conteudo ancorado em dados e analises de mercado"
    ],
    audience: "Marketing e comunicacao no agro"
  }
];

const valoracaoCards: ProductCardData[] = [
  {
    title: "Agrovalora Premium/Plus",
    tagline: "Laudo completo com analise critica para maxima confiabilidade.",
    bullets: [
      "Analise documental (matriculas, CAR, SIGEF, sobreposicoes)",
      "Risco climatico, potencial agronomico, declividade e solo por matricula",
      "Pesquisa de ofertas + mapas de apoio"
    ],
    audience: "Credito, risco, compliance e investimento"
  },
  {
    title: "Agrovalora Basic",
    tagline: "Laudo automatizado para escala com padronizacao e agilidade.",
    bullets: [
      "Uso e ocupacao da terra com algoritmo de analise",
      "Analise socioambiental padrao",
      "Clima/solo/declividade simplificados"
    ],
    audience: "Operacoes que precisam padronizacao e velocidade"
  },
  {
    title: "Agroterra",
    tagline: "Dashboard do mercado de terras em nivel municipal com historico longo.",
    bullets: [
      "Historico por classes de uso de terra",
      "Base historica de 15 anos e ampla amostra de imoveis rurais",
      "Potencial integracao com sistemas"
    ],
    audience: "Bancos, fundos, corretoras e estrategia de aquisicao"
  }
];

const trainingCards: ProductCardData[] = [
  {
    title: "Treinamentos Digitais (in-company)",
    tagline: "Capacitacao em escala com padronizacao e flexibilidade.",
    bullets: [
      "Videos, quizzes e modulos organizados",
      "Conteudo tecnico/estrategico (soja, milho, fertilizantes etc.)",
      "Qualifica discurso comercial e abordagem com o produtor"
    ],
    audience: "Grandes equipes comerciais e tecnicas"
  },
  {
    title: "Palestras Avulsas",
    tagline: "Alinhamento de cenario com especialistas e conteudo visual.",
    bullets: [
      "Curto e medio prazo com foco no negocio do cliente",
      "Otimo para eventos e alinhamento interno",
      "Reforco de confianca e autoridade tecnica"
    ],
    audience: "Eventos, convencoes e lideranca"
  }
];

const sectionTitleClass =
  "relative inline-block pb-3 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-16 after:rounded-full after:bg-brand-gradient after:content-['']";

const cardGridClass = (count: number) => {
  if (count <= 1) return "grid gap-4";
  if (count === 2) return "grid gap-4 md:grid-cols-2";
  return "grid gap-4 md:grid-cols-2 lg:grid-cols-3";
};

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
        <p className="text-sm text-brand-gray">
          <span className="font-semibold uppercase tracking-[0.16em] text-brand-gray">Para quem e:</span>{" "}
          <span className="font-semibold text-brand-navy">{audience}</span>
        </p>
      )}
    </InteractiveCard>
  );
}

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
      className="section-padding bg-white scroll-mt-40 lg:scroll-mt-48"
      aria-labelledby={`${id}-title`}
    >
      <div className="page-container space-y-6">
        <div className="sticky top-40 z-20 lg:top-48" data-section-title={id}>
          <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
            <div
              className="pointer-events-none absolute left-0 right-0 -top-12 h-12 bg-white lg:-top-20 lg:h-20"
              aria-hidden="true"
            />
            <div className="page-container py-2">
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

export default function Products() {
  const ctaHover = usePrimaryGradientHover();
  const activeSectionRef = useRef<string | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const getOffset = () => (window.innerWidth >= 1024 ? 192 : 160);
    const getLead = () => (window.innerWidth >= 1024 ? 96 : 72);
    const updateActive = () => {
      frame = 0;
      const offset = getOffset();
      const lead = getLead();
      const tolerance = 2;
      let nextActive: string | null = null;
      for (const id of sectionOrder) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset + lead + tolerance) {
          nextActive = id;
        } else {
          break;
        }
      }
      if (activeSectionRef.current !== nextActive) {
        activeSectionRef.current = nextActive;
        setActiveSectionId(nextActive);
      }
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

  const scrollToCategories = () => {
    const target = document.getElementById("categorias");
    if (target) {
      target.scrollIntoView({ behavior: "auto" });
    }
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const offset = window.innerWidth >= 1024 ? 192 : 160;
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
    <div className="relative bg-white">
      <div className="relative">
        <section className="relative overflow-hidden bg-brand-gradient pt-24 text-white lg:pt-32">
        <div className="absolute inset-0 bg-brand-radial opacity-25" aria-hidden="true" />
        <div className="page-container relative flex flex-col gap-6 py-16 lg:py-20">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold leading-tight lg:text-4xl">Produtos e solucoes</h1>
            <p className="max-w-3xl text-base text-white/85 lg:text-lg">
              Inteligencia e entregas para decisoes estrategicas no agro - do dado ao projeto sob medida.
            </p>
            <div className="flex flex-wrap gap-2">
              {whyItems.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold text-white/90"
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
        className="border-y border-brand-gray/20 bg-white lg:sticky lg:top-20 lg:z-30"
      >
        <div className="page-container">
          <nav
            className="flex gap-2 overflow-x-auto py-4 pr-2 lg:justify-center lg:overflow-visible"
            aria-label="Categorias de produtos"
          >
              {anchorItems.map((item) => {
                const isActive = activeSectionId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
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

      <ProductSection
        id="consultorias"
        title="Consultorias"
        cards={consultoriaCards}
        isActive={activeSectionId === "consultorias"}
      />

      <ProductSection
        id="dados-api"
        title="Dados, Plataforma e Integracoes"
        cards={dataCards}
        isActive={activeSectionId === "dados-api"}
      />

      <ProductSection
        id="projetos"
        title="Projetos Sob Medida"
        cards={projectCards}
        isActive={activeSectionId === "projetos"}
      />

      <ProductSection
        id="rally"
        title="Rally da Safra"
        cards={rallyCards}
        isActive={activeSectionId === "rally"}
      />

      <ProductSection
        id="agricontent"
        title="Conteudo e Comunicacao (AgriContent)"
        cards={agricontentCards}
        isActive={activeSectionId === "agricontent"}
      />

      <ProductSection
        id="valoracao"
        title="Valoracao e Mercado de Terras"
        cards={valoracaoCards}
        isActive={activeSectionId === "valoracao"}
      />

      <ProductSection
        id="treinamentos"
        title="Treinamentos e Palestras"
        cards={trainingCards}
        isActive={activeSectionId === "treinamentos"}
      />

        <section className="section-padding bg-gradient-to-b from-white via-white to-brand-light/40">
          <div className="page-container">
            <div className="gradient-border rounded-3xl">
              <div className="relative overflow-hidden rounded-[22px] bg-brand-gradient bg-[length:200%_200%] px-6 py-10 text-white shadow-xl animate-pulse-gradient md:px-12">
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
                <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold leading-tight">Vamos escolher a entrega ideal para seu desafio?</h3>
                    <p className="text-sm text-white/85">
                      Fale com o time Agroconsult e conecte inteligencia, dados e projetos sob medida.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={contactHref} className="btn-primary" {...ctaHover}>
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
