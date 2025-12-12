import { ArrowRight, ChevronDown, Layers, Network, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { highlights, productCards, services, stats } from "../content";
import InteractiveCard from "../components/InteractiveCard";

const tagClass =
  "inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm";

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
  const items = [
    {
      title: "Cobertura nacional",
      value: "60.000 km",
      detail: "Percorridos anualmente pelo Rally da Safra"
    },
    {
      title: "Séries",
      value: "30+ anos",
      detail: "Dados proprietários e auditados"
    },
    {
      title: "BD Online",
      value: "Dados + previsões",
      detail: "Curvas de produção, custos, clima e preço em um só painel."
    },
    {
      title: "AgroValora",
      value: "Valoração líder",
      detail: "Avaliação para crédito, M&A e gestão patrimonial."
    }
  ];

  return (
    <section className="relative -mt-10 section-padding">
      <div className="page-container">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/90 p-[1px] shadow-panel transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="rounded-[28px] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gray">{item.title}</p>
                <p className="mt-2 text-2xl font-extrabold text-brand-navy">{item.value}</p>
                <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section-padding">
      <div className="page-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Dados que contam histórias</p>
            <h2 className="text-3xl font-bold text-brand-navy">O agro com precisão de quem está em campo e na nuvem</h2>
            <p className="mt-2 text-slate-700">
              Série histórica proprietária, modelos avançados e especialistas em todas as regiões produtoras.
            </p>
          </div>
          <Link to="/historia" className="btn-secondary">
            Nossa trajetória
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl bg-white/90 p-[1px] shadow-panel transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative h-full rounded-[28px] bg-gradient-to-br from-white to-white/70 p-6">
                <div className="absolute inset-0 rounded-[28px] bg-brand-radial opacity-40" />
                <div className="relative">
                  <p className="text-4xl font-extrabold text-brand-navy group-hover:text-brand-green transition">
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
    <section className="section-padding bg-white/70">
      <div className="page-container">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
              Produtos assinatura Agroconsult
            </p>
            <h2 className="text-3xl font-bold text-brand-navy">Dados, expedição e valoração em um ecossistema único</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              BD Online, Rally da Safra e AgroValora se conectam para entregar previsões assertivas, plano de ação e
              governança para toda a cadeia do agronegócio.
            </p>
          </div>
          <Link to="/produtos" className="btn-primary">
            Ver detalhes
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
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
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
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
    <section className="section-padding">
      <div className="page-container">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">80+ serviços</p>
            <h2 className="text-3xl font-bold text-brand-navy">Soluções criadas sob medida para cada desafio</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
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
    <section className="section-padding bg-brand-navy text-white">
      <div className="page-container">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Dados em ação</p>
            <h2 className="text-3xl font-bold">Metodologia que conecta satélite, IA e presença em campo</h2>
            <p className="mt-2 max-w-3xl text-white/80">
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
    <section className="section-padding">
      <div className="page-container">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Como entregamos valor</p>
            <h2 className="text-3xl font-bold text-brand-navy">Agronegócio e tecnologia integrados</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              Camada de dados, analytics e especialistas de campo trabalham juntos para reduzir incerteza, antecipar
              movimentos de mercado e destravar margens.
            </p>
          </div>
          <Link to="/produtos" className="btn-primary">
            Quero ver na prática
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
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
    <section className="section-padding">
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
      <CTA />
    </div>
  );
}
