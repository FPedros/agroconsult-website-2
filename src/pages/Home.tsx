import { ArrowRight, ChevronDown, Layers, Network, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { highlights, productCards, services } from "../content";
import InteractiveCard from "../components/InteractiveCard";

const tagClass =
  "inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm";

const styles = {
  eyebrow: "text-xs font-semibold uppercase tracking-[0.24em] text-brand-gray",
  title: "text-3xl font-semibold leading-tight text-brand-navy md:text-[34px]",
  body: "text-base text-slate-700 md:text-lg",
  sectionContainer: "page-container space-y-8",
  cardShell:
    "rounded-3xl bg-gradient-to-br from-white via-neutral-50 to-white p-[1px] shadow-sm transition hover:-translate-y-1 hover:shadow-md",
  cardInner: "rounded-[26px] bg-white p-5 lg:p-6"
};

// @ts-ignore - Vite allows glob imports; public folder logos are collected eagerly as URLs
const clientLogoLines = [
  Object.values(
    import.meta.glob<string>("/public/clientes/linha1/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default"
    })
  ) as string[],
  Object.values(
    import.meta.glob<string>("/public/clientes/linha2/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default"
    })
  ) as string[],
  Object.values(
    import.meta.glob<string>("/public/clientes/linha3/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default"
    })
  ) as string[],
  Object.values(
    import.meta.glob<string>("/public/clientes/linha4/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default"
    })
  ) as string[]
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/images/video-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/70 to-brand-green/70" />
      </div>

      <div className="page-container relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 pb-24 pt-32 text-center lg:pb-28 lg:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Agroconsult • Dados + Campo
        </div>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Inteligência para quem decide o futuro do agronegócio brasileiro.
        </h1>
        <p className="max-w-3xl text-lg text-white/85">
          Somos a Agroconsult: 80+ serviços especializados, 30 anos de séries proprietárias e a única expedição que cruza
          o Brasil inteiro para auditar safras em tempo real.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className={tagClass}>
            <Sparkles size={16} />
            Dados proprietários
          </div>
          <div className={tagClass}>
            <Network size={16} />
            IA + satélite + campo
          </div>
          <div className={tagClass}>
            <Layers size={16} />
            Estratégia sob medida
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link to="/produtos" className="btn-primary">
            Conhecer produtos
            <ArrowRight size={16} />
          </Link>
          <a href="mailto:contato@agroconsult.com.br" className="btn-ghost">
            Falar com a equipe
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center justify-center">
        <ChevronDown size={20} className="animate-bounce text-white drop-shadow" />
      </div>
    </section>
  );
}

function HeroHighlights() {
  const trustMetrics = [
    { value: "500+", label: "clientes atendidos", detail: "Trading, fundos, indústrias, cooperativas e produtores." },
    { value: "15k+", label: "relatórios emitidos", detail: "Entregas auditadas, comparáveis e acionáveis." },
    { value: "10M+", label: "hectares analisados", detail: "Monitoramento nas principais fronteiras agrícolas do Brasil." },
    { value: "Cobertura", label: "nacional", detail: "Presença contínua nas regiões produtoras, safra após safra." }
  ];

  const pillars = [
    { title: "BD Online", detail: "Curvas de produção, custos, clima e preço em um só painel." },
    { title: "Séries proprietárias", detail: "Dados auditados e comparáveis por microrregião." },
    { title: "Agrovalora", detail: "Valoração para crédito, M&A e gestão patrimonial." }
  ];

  return (
    <section className="relative -mt-10 section-padding bg-gradient-to-b from-white via-brand-light/30 to-white">
      <div className={styles.sectionContainer}>
        <div className="space-y-3 text-left md:text-center">
          <p className={styles.eyebrow}>Dados que geram confiança</p>
          <h2 className={`${styles.title} md:text-[36px]`}>
            Dados que geram <span className="text-brand-green">confiança e resultado</span>
          </h2>
          <p className={`${styles.body} max-w-4xl md:mx-auto`}>
            Combinamos tecnologia e presença em campo para entregar insights que aceleram decisões e reduzem risco.
            Nossas análises são referência no mercado nacional e internacional.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((item) => (
            <div key={item.label} className={`${styles.cardShell} hover:ring-1 hover:ring-brand-green/10`}>
              <div className={`${styles.cardInner} flex flex-col gap-2`}>
                <p className="text-3xl font-extrabold text-brand-navy">{item.value}</p>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gray">{item.label}</p>
                <p className="text-sm text-slate-700">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`rounded-3xl transition hover:-translate-y-1 ${
                idx === 1 ? "bg-white shadow-panel" : "bg-white/90 shadow-sm"
              } border border-slate-100/80`}
            >
              <div className="rounded-[26px] bg-white p-5 lg:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gray">{pillar.title}</p>
                <p className="mt-2 text-sm text-slate-700">{pillar.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const nonEmptyLines = clientLogoLines.filter((line) => line.length);
  if (!nonEmptyLines.length) return null;

  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="space-y-2 text-left md:text-center">
          <p className={styles.eyebrow}>Clientes que confiam</p>
          <h2 className={styles.title}>Marcas que já aceleram decisões com a Agroconsult</h2>
          <p className={`${styles.body} max-w-3xl md:mx-auto`}>
            Relações de longo prazo com líderes do agronegócio.
          </p>
        </div>

        <div className="space-y-3">
          {nonEmptyLines.map((line, idxLine) => {
            const doubled = [...line, ...line];
            const direction = idxLine % 2 === 0 ? "marquee-left" : "marquee-right";
            const duration = `${24 + idxLine * 3}s`;
            return (
              <div
                key={`linha-${idxLine}`}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-r from-white via-neutral-50 to-white/80 p-3 shadow-sm"
              >
                <div
                  className={`flex min-w-[200%] items-center gap-8 ${direction}`}
                  style={{ animationDuration: duration }}
                >
                  {doubled.map((src, idx) => (
                    <div
                      key={`${idxLine}-${idx}-${src}`}
                      className="flex h-14 min-w-[120px] items-center justify-center px-4"
                    >
                      <img src={src} alt="Cliente Agroconsult" className="max-h-10 w-auto object-contain opacity-90" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const methodMetrics = [
    { value: "30+", label: "anos de séries históricas", detail: "Consistência por safra, região e metodologia padronizada." },
    { value: "1.2k", label: "municípios visitados", detail: "Time em campo com coleta estruturada e protocolos definidos." },
    { value: "80+", label: "frentes e serviços especializados", detail: "Projetos sob medida para diferentes perfis e objetivos." },
    { value: "Auditoria", label: "e governança de dados", detail: "Validação, cruzamentos e padronização para máxima comparabilidade." }
  ];

  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={styles.eyebrow}>Dados que contam histórias</p>
            <h2 className={styles.title}>O agro com precisão: do campo à nuvem</h2>
            <p className={`${styles.body} mt-2 max-w-3xl`}>
              Metodologia própria, séries históricas e um processo de validação que transforma observação em dado
              confiável — com especialistas em todas as regiões produtoras.
            </p>
          </div>
          <Link to="/historia" className="btn-secondary">
            Nossa trajetória
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {methodMetrics.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl bg-white p-[1px] shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-brand-green/10"
            >
              <div className="relative h-full rounded-[28px] bg-gradient-to-br from-white via-neutral-50 to-white p-6">
                <div className="absolute inset-0 rounded-[28px] bg-brand-radial opacity-40" />
                <div className="relative">
                  <p className="text-3xl font-extrabold text-brand-navy transition group-hover:text-brand-green">
                    {item.value}
                  </p>
                  <p className="text-sm font-semibold text-brand-gray">{item.label}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSpotlight() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-light/25">
      <div className={styles.sectionContainer}>
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className={styles.eyebrow}>Produtos assinatura Agroconsult</p>
            <h2 className={styles.title}>Dados, expedição e valoração em um ecossistema único</h2>
            <p className={`${styles.body} max-w-3xl`}>
              BD Online, Rally da Safra e AgroValora se conectam para entregar previsões assertivas, plano de ação e
              governança para toda a cadeia do agronegócio.
            </p>
          </div>
          <Link to="/produtos" className="btn-primary">
            Ver detalhes
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCards.map((product, index) => (
            <InteractiveCard
              key={product.name}
              title={product.name}
              description={product.slogan}
              accent={index === 1 ? "green" : "navy"}
              highlight="Exclusivo"
              href={product.link}
            >
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition hover:translate-x-0.5">
                {product.cta}
                <ArrowRight size={14} />
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className={styles.eyebrow}>80+ serviços</p>
            <h2 className={styles.title}>Soluções criadas sob medida para cada desafio</h2>
            <p className={`${styles.body} mt-2 max-w-3xl`}>
              Consultoria especializada com squads dedicados, combinando dados proprietários, modelos avançados e times
              de campo para entregar impacto rápido.
            </p>
          </div>
          <a href="mailto:contato@agroconsult.com.br" className="btn-secondary">
            Montar um projeto
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <InteractiveCard
              key={service.title}
              title={service.title}
              description="Consultoria com dados, especialistas setoriais e execução full stack."
              accent="gray"
            >
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-700">
                {service.items.map((item) => (
                  <span key={item} className="rounded-full bg-brand-green/10 px-3 py-2 text-brand-navy">
                    {item}
                  </span>
                ))}
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const steps = [
    {
      title: "Explorar",
      detail: "Diagnóstico rápido com dados históricos e satélite para priorizar riscos e oportunidades.",
      icon: <Sparkles size={18} />
    },
    {
      title: "Medir",
      detail: "Rally da Safra, sensoriamento remoto e protocolos de campo para validar hipóteses.",
      icon: <Layers size={18} />
    },
    {
      title: "Decidir",
      detail: "Modelos preditivos, cenários de preço e planos comerciais acionáveis.",
      icon: <TrendingUp size={18} />
    },
    {
      title: "Escalar",
      detail: "Entrega via APIs, dashboards ou war rooms com squads dedicados.",
      icon: <Network size={18} />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-green/20 text-white">
      <div className="page-container">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Dados em ação</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-[34px]">Metodologia que conecta satélite, IA e presença em campo</h2>
            <p className="mt-2 max-w-3xl text-white/85">
              Abordagem proprietária para transformar dados em decisões assertivas, mitigando riscos e acelerando
              resultados.
            </p>
          </div>
          <Link to="/historia" className="btn-secondary border-white text-white">
            Ver legado
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                {step.icon}
                {step.title}
              </div>
              <p className="text-sm text-white/85">{step.detail}</p>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-brand-green/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className={styles.eyebrow}>Como entregamos valor</p>
            <h2 className={styles.title}>Agronegócio e tecnologia integrados</h2>
            <p className={`${styles.body} mt-2 max-w-3xl`}>
              Camada de dados, analytics e especialistas de campo trabalham juntos para reduzir incerteza, antecipar
              movimentos de mercado e destravar margens.
            </p>
          </div>
          <Link to="/produtos" className="btn-primary">
            Quero ver na prática
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <InteractiveCard
              key={item.title}
              title={item.title}
              description={item.description}
              highlight={item.tag}
              accent="navy"
            >
              <div className="mt-3 text-sm font-semibold text-brand-green">Impacto imediato</div>
              <p className="text-sm text-slate-700">
                Protocolos de onboarding rápidos, segurança de dados, entregas em dashboards, relatórios ou integrações.
              </p>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-light/25">
      <div className="page-container">
        <div className="gradient-border rounded-3xl">
          <div className="relative overflow-hidden rounded-[22px] bg-white px-6 py-10 md:px-12">
            <div className="absolute right-10 top-0 h-48 w-48 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Próximo passo</p>
                <h3 className="text-2xl font-bold text-brand-navy">Vamos desenhar seu próximo ciclo com mais precisão?</h3>
                <p className="mt-2 max-w-2xl text-slate-700">
                  Conecte dados, expedição e estratégia em uma só frente. Squads dedicados para trading, insumos, fundos,
                  produtores e agroindústria.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:contato@agroconsult.com.br" className="btn-primary">
                  Agendar conversa
                </a>
                <Link to="/produtos" className="btn-secondary">
                  Ver soluções
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-white/60">
      <Hero />
      <HeroHighlights />
      <Stats />
      <ProductsSpotlight />
      <Services />
      <Methodology />
      <Highlights />
      <ClientsSection />
      <CTA />
    </div>
  );
}
