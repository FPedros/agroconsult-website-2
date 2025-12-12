import { ArrowRight, BarChart3, Map, ShieldCheck, Sparkles } from "lucide-react";
import InteractiveCard from "../components/InteractiveCard";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

const productDetails = [
  {
    id: "bdonline",
    name: "BD Online",
    summary: "Data lake exclusivo com 30 anos de histórico, modelos preditivos e dashboards customizados.",
    icon: <BarChart3 size={18} />,
    highlights: [
      "Séries de produção, preço, custos e clima por microrregião",
      "Modelos de previsão com IA combinando clima, logística e demanda",
      "APIs e dashboards customizados para trading, originação e crédito"
    ],
    deliverables: ["Dashboards interativos", "Alertas e cenários", "Integração por API"]
  },
  {
    id: "rally",
    name: "Rally da Safra",
    summary: "A maior expedição técnica do agro brasileiro: audita safras, comprova produtividade e antecipa movimentos.",
    icon: <Map size={18} />,
    highlights: [
      "Cobertura de 60 mil km e mais de 1.200 municípios anualmente",
      "Protocolos auditáveis, medições em campo e integração com satélite",
      "Relatórios estratégicos em tempo real para hedge e planos comerciais"
    ],
    deliverables: ["Laudos de campo", "Painel live de produtividade", "Workshops executivos"]
  },
  {
    id: "agrovalora",
    name: "AgroValora",
    summary: "Maior plataforma de avaliação de propriedades rurais, com metodologia proprietária e comparáveis sólidos.",
    icon: <ShieldCheck size={18} />,
    highlights: [
      "Avaliação de ativos agrícolas, florestais e agroindustriais",
      "Metodologia comparativa por bioma, produtividade e infraestrutura",
      "Aplicável a crédito, M&A, seguros e governança ESG"
    ],
    deliverables: ["Laudo completo", "Dashboard patrimonial", "Simulações de cenário"]
  }
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
        <div className="absolute inset-0 bg-brand-radial opacity-20" />
        <div className="page-container relative flex flex-col gap-6 py-20 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Portfólio Agroconsult</p>
            <h1 className="mt-2 text-4xl font-bold lg:text-5xl">Produtos líderes para ir além do óbvio</h1>
            <p className="mt-3 max-w-3xl text-white/85">
              BD Online, Rally da Safra e AgroValora formam uma camada única de dados, campo e inteligência para decisões
              estratégicas. Integramos API, dashboards e consultoria especializada para impactar o negócio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide">
                Dados proprietários
              </span>
              <span className="rounded-full bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide">
                IA + Campo
              </span>
              <span className="rounded-full bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide">
                80+ serviços
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="glass-card rounded-3xl border border-white/30 bg-white/10 p-6 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pronto para usar</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-semibold text-white/70">Entrega</p>
                  <p className="text-lg font-bold">Dashboards + API</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-semibold text-white/70">Governança</p>
                  <p className="text-lg font-bold">SLA + Segurança</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-semibold text-white/70">Alcance</p>
                  <p className="text-lg font-bold">Brasil inteiro</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-semibold text-white/70">Equipe</p>
                  <p className="text-lg font-bold">Especialistas dedicados</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Vamos ativar seu piloto <ArrowRight size={16} />
              </div>
            </div>
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
                <a className="btn-secondary inline-flex w-fit" href="mailto:contato@agroconsult.com.br">
                  Quero uma demonstração
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

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Aceleradores</p>
              <h2 className="text-3xl font-bold text-brand-navy">Mais de 80 serviços para personalizar sua estratégia</h2>
              <p className="mt-2 text-slate-700">
                Combine módulos para acelerar resultados: estratégia comercial, monitoramento, governança, ESG e
                valoração.
              </p>
            </div>
            <a href="mailto:contato@agroconsult.com.br" className="btn-primary" {...productsPrimaryHover}>
              Montar combinação ideal
            </a>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {accelerators.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-brand-gray/15 bg-brand-light px-4 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-glow"
              >
                <span>{item}</span>
                <Sparkles size={16} className="text-brand-green" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
