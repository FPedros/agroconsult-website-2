import { ArrowRight, BarChart3, CloudSun, Map, ShieldCheck, Sparkles } from "lucide-react";
import InteractiveCard from "../components/InteractiveCard";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

const productDetails = [
  {
    id: "bdonline",
    name: "BD Online",
    summary: "Data lake exclusivo com 30 anos de histórico, modelos preditivos e dashboards customizados.",
    icon: <BarChart3 size={18} />,
    link: "https://bdonline.agroconsult.com.br/",
    highlights: [
      "Séries de produção, preço, custos e clima por microrregião",
      "Modelos de previsão com IA combinando clima, logística e demanda",
      "APIs e dashboards customizados para trading, originação e crédito"
    ],
    deliverables: ["Dashboards interativos", "Alertas e cenários", "Integração por API"],
  },
  {
    id: "rally",
    name: "Rally da Safra",
    summary: "A maior expedição técnica do agro brasileiro: audita safras, comprova produtividade e antecipa movimentos.",
    icon: <Map size={18} />,
    link: "https://www.rallydasafra.com.br/",
    highlights: [
      "Cobertura de 60 mil km e mais de 1.200 municípios anualmente",
      "Protocolos auditáveis, medições em campo e integração com satélite",
      "Relatórios estratégicos em tempo real para hedge e planos comerciais"
    ],
    deliverables: ["Laudos de campo", "Painel live de produtividade", "Workshops executivos"],
  },
  {
    id: "agrovalora",
    name: "Agrovalora",
    summary: "Plataforma líder em avaliação de propriedades rurais, com metodologia proprietária e comparáveis sólidos.",
    icon: <ShieldCheck size={18} />,
    link: "https://www.agrovalora.com.br/",
    highlights: [
      "Avaliação de ativos agrícolas, florestais e agroindustriais",
      "Metodologia comparativa por bioma, produtividade e infraestrutura",
      "Aplicável a crédito, M&A, seguros e governança ESG"
    ],
    deliverables: ["Laudo completo", "Dashboard patrimonial", "Simulações de cenário"],
  },
  {
    id: "cropdata",
    name: "Cropdata",
    summary: "Clima, safras e indicadores em um site leve e rápido para consultas do dia a dia.",
    icon: <CloudSun size={18} />,
    link: "https://website-cropdata.vercel.app/",
    highlights: [
      "Mapas de clima, produtividade e comparativos por cultura",
      "Filtros simples por estado, cultura e janela de tempo",
      "Visualizações leves para compartilhar e decidir em minutos"
    ],
    deliverables: ["Painel aberto", "Comparativos rápidos", "Acesso web"],
  },
];

const accelerators = [
  "Estratégia de comercialização e hedge",
  "Planos de originação e fidelização",
  "Monitoramento de safra com sensoriamento remoto",
  "Pricing dinâmico para insumos e serviços",
  "Rastreabilidade e governança ESG",
  "Due diligence territorial e socioambiental"
];

export default function Products() {
  const productsPrimaryHover = usePrimaryGradientHover();

  return (
    <div className="bg-white/80">
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-brand-radial opacity-25" />
        <div className="page-container relative space-y-8 py-20 pt-24 lg:py-24 lg:pt-28">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Aceleradores</p>
              <h2 className="text-3xl font-bold leading-tight lg:text-4xl">Mais de 80 serviços para personalizar sua estratégia</h2>
              <p className="text-sm text-white/85 lg:text-base">
                Combine módulos para acelerar resultados: estratégia comercial, monitoramento, governança, ESG e valoração.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {accelerators.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              >
                <span>{item}</span>
                <Sparkles size={16} className="text-brand-green" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="page-container space-y-10">
          {productDetails.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="grid gap-6 rounded-3xl bg-white p-6 shadow-panel transition hover:-translate-y-1 hover:shadow-glow lg:grid-cols-3"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                  {product.icon}
                  {product.name}
                </div>
                <h2 className="text-2xl font-bold text-brand-navy">{product.name}</h2>
                <p className="text-sm text-slate-700">{product.summary}</p>
                <a
                  className="btn-primary inline-flex w-fit"
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conheça a plataforma
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-4 md:grid-cols-2">
                  <InteractiveCard
                    title="Diferenciais"
                    description="Por que líderes escolhem a Agroconsult?"
                    accent="navy"
                  >
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </InteractiveCard>
                  <InteractiveCard
                    title="Formatos de entrega"
                    description="Conecte às suas rotinas com rapidez e governança."
                    accent="green"
                  >
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="rounded-full bg-brand-navy/5 px-3 py-2 text-xs font-semibold text-brand-navy"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </InteractiveCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
