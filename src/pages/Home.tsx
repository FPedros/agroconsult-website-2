import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ChevronDown,
  Database,
  Globe2,
  Layers,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";
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

const clientLogoLines = [
  [
    "/clientes/linha1/Imagem48.png",
    "/clientes/linha1/Imagem51.png",
    "/clientes/linha1/Imagem52.png",
    "/clientes/linha1/Imagem53.png",
    "/clientes/linha1/Imagem54.png",
    "/clientes/linha1/Imagem55.png",
    "/clientes/linha1/Imagem56.jpg",
    "/clientes/linha1/Imagem57.png",
    "/clientes/linha1/Imagem58.png",
    "/clientes/linha1/Imagem59.png",
    "/clientes/linha1/Imagem60.png",
    "/clientes/linha1/Imagem61.png"
  ],
  [
    "/clientes/linha2/Imagem34.png",
    "/clientes/linha2/Imagem35.png",
    "/clientes/linha2/Imagem36.png",
    "/clientes/linha2/Imagem37.jpg",
    "/clientes/linha2/Imagem38.png",
    "/clientes/linha2/Imagem39.png",
    "/clientes/linha2/Imagem40.png",
    "/clientes/linha2/Imagem41.jpg",
    "/clientes/linha2/Imagem42.png",
    "/clientes/linha2/Imagem43.png",
    "/clientes/linha2/Imagem44.png",
    "/clientes/linha2/Imagem46.png",
    "/clientes/linha2/Imagem47.png"
  ],
  [
    "/clientes/linha3/Imagem15.png",
    "/clientes/linha3/Imagem16.png",
    "/clientes/linha3/Imagem17.png",
    "/clientes/linha3/Imagem18.jpg",
    "/clientes/linha3/Imagem19.png",
    "/clientes/linha3/Imagem20.jpg",
    "/clientes/linha3/Imagem21.jpg",
    "/clientes/linha3/Imagem22.png",
    "/clientes/linha3/Imagem23.png",
    "/clientes/linha3/Imagem28.png",
    "/clientes/linha3/Imagem29.png",
    "/clientes/linha3/Imagem30.png",
    "/clientes/linha3/Imagem31.png",
    "/clientes/linha3/Imagem32.png",
    "/clientes/linha3/Imagem33.png"
  ],
  [
    "/clientes/linha4/Imagem2.png",
    "/clientes/linha4/Imagem4.png",
    "/clientes/linha4/Imagem5.png",
    "/clientes/linha4/Imagem6.png",
    "/clientes/linha4/Imagem7.png",
    "/clientes/linha4/Imagem8.png",
    "/clientes/linha4/Imagem9.png",
    "/clientes/linha4/Imagem10.png",
    "/clientes/linha4/Imagem11.png",
    "/clientes/linha4/Imagem12.png",
    "/clientes/linha4/Imagem13.png",
    "/clientes/linha4/Imagem14.png",
    "/clientes/linha4/Imagem24.jpg",
    "/clientes/linha4/Imagem25.png",
    "/clientes/linha4/Imagem26.png",
    "/clientes/linha4/Imagem27.png",
    "/clientes/linha4/Imagem28.png",
    "/clientes/linha4/Imagem29.png",
    "/clientes/linha4/Imagem30.png"
  ]
];

function Hero() {
  const heroPrimaryHover = usePrimaryGradientHover();

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh", height: "100svh" }}
    >
      <div className="absolute inset-0">
        <video
          className="h-full min-h-full w-full object-cover"
          style={{ minHeight: "100svh" }}
          src="/images/video-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Vídeo institucional Agroconsult"
          poster="/images/video-banner-mobile.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/85 via-brand-navy/75 to-brand-green/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <div className="page-container relative z-10 flex min-h-full flex-col items-center justify-center gap-8 py-20 text-center sm:py-24 lg:py-28">
        
        <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl md:text-[68px] md:leading-[1.08] tracking-tight drop-shadow-[0_14px_44px_rgba(0,23,71,0.5)]">
          Inteligência que{" "}
          <span className="bg-gradient-to-r from-brand-green via-emerald-300 to-brand-green bg-clip-text text-transparent drop-shadow-[0_10px_32px_rgba(47,197,111,0.55)]">
            Transforma o Campo
          </span>
        </h1>
        <p className="max-w-3xl text-base text-white/85 sm:text-lg">
          Dados precisos e visão estratégica para impulsionar o agronegócio brasileiro no cenário global.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className={tagClass}>
            <Layers size={16} />
            Estratégia sob medida
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/produtos"
            className="btn-primary"
            {...heroPrimaryHover}
          >
            Conheça Nossas Soluções
            <ArrowRight size={16} />
          </Link>
          <a href="mailto:contato@agroconsult.com.br" className="btn-ghost">
            Falar com Especialista
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center justify-center">
        <ChevronDown size={20} className="animate-bounce text-white drop-shadow" />
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    {
      title: "Séries proprietárias",
      description: "Dados auditados, comparáveis por microrregião e históricos que fundamentam cada decisão."
    },
    {
      title: "Presença em campo",
      description: "Protocolos de coleta, entrevistas e medições em todas as fronteiras agrícolas brasileiras."
    },
    {
      title: "Estratégia acionável",
      description: "Planejamento comercial, originação e hedge com cenários construídos junto aos times do cliente."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-brand-light/30 to-white">
      <div className={styles.sectionContainer}>
        <div className="space-y-3">
          <p className={styles.eyebrow}>Como entregamos confiança</p>
          <h2 className={styles.title}>Metodologia própria do satélite ao campo</h2>
          <p className={`${styles.body} max-w-4xl`}>
            Tecnologia, análises e validação presencial convergem para entregar velocidade, precisão e governança.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group space-y-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-brand-navy hover:via-brand-navy hover:to-brand-green hover:shadow-md hover:ring-brand-green/40"
            >
              <h3 className="text-lg font-bold text-brand-navy transition group-hover:text-white">{item.title}</h3>
              <p className="text-sm text-slate-700 transition group-hover:text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const metrics = [
    {
      value: "25+",
      label: "Anos de Experiência",
      detail: "Tecnologia e conhecimento profundo do setor para decisões seguras.",
      icon: <TrendingUp size={28} className="text-brand-green" />
    },
    {
      value: "500+",
      label: "Clientes Atendidos",
      detail: "Trading, fundos, indústrias, cooperativas e produtores.",
      icon: <Users size={28} className="text-brand-green" />
    },
    {
      value: "10M+",
      label: "Hectares Analisados",
      detail: "Monitoramento das principais fronteiras agrícolas do Brasil.",
      icon: <Database size={28} className="text-brand-green" />
    },
    {
      value: "15k+",
      label: "Relatórios Emitidos",
      detail: "Entregas auditadas, comparáveis e acionáveis.",
      icon: <BarChart3 size={28} className="text-brand-green" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className={styles.eyebrow}>Dados que geram confiança</p>
            <h2 className="text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
              Dados que geram <br />
              <span className="text-brand-green">Confiança e Resultado</span>
            </h2>
            <p className={`${styles.body} max-w-3xl`}>
              Combinamos tecnologia de ponta com conhecimento profundo do setor para entregar insights que definem o
              futuro do seu negócio. Nossas análises são referência no mercado nacional e internacional.
            </p>
            <div className="h-1 w-20 rounded-full bg-brand-green" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="group space-y-2 rounded-2xl bg-slate-50 p-5 text-left shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-gradient-to-r hover:from-brand-navy hover:via-brand-navy hover:to-brand-green hover:shadow-md hover:ring-brand-green/40"
              >
                <div className="mb-2 text-brand-green transition group-hover:text-white">{item.icon}</div>
                <p className="text-2xl font-bold text-brand-navy transition group-hover:text-white">{item.value}</p>
                <p className="text-sm font-semibold text-brand-navy transition group-hover:text-white/90">{item.label}</p>
                <p className="text-sm text-slate-700 transition group-hover:text-white/85">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const spotlightHover = usePrimaryGradientHover();
  const featured = productCards.slice(0, 3);
  const productIcon = (name: string) => {
    if (name.includes("BD")) return <BookOpen size={24} className="text-brand-green" />;
    if (name.includes("Rally")) return <Globe2 size={24} className="text-brand-green" />;
    return <ShieldCheck size={24} className="text-brand-green" />;
  };

  return (
    <section className="section-padding bg-brand-gradient">
      <div className={styles.sectionContainer}>
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4 text-white">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Produtos assinatura Agroconsult</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-[34px]">Dados, expedição e valoração em um ecossistema único</h2>
            <p className="max-w-3xl text-sm text-white/85 md:text-base">
              BD Online, Rally da Safra e AgroValora conectam dados proprietários, validação em campo e análises para
              decisões rápidas e seguras.
            </p>
          </div>
          <Link to="/produtos" className="btn-primary" {...spotlightHover}>
            Ver portfólio completo
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((product) => (
            <div
              key={product.name}
              className="space-y-3 rounded-2xl bg-white/95 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md hover:ring-brand-green/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10">
                {productIcon(product.name)}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-brand-navy">{product.name}</h3>
                <p className="text-sm text-slate-700">{product.slogan}</p>
              </div>
              <div className="text-sm font-semibold text-brand-green">Exclusivo</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {product.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
    <section className="relative section-padding bg-gradient-to-b from-white via-brand-light/30 to-white">
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

        <div className="relative left-1/2 w-screen -translate-x-1/2 space-y-3 px-3 sm:px-6 lg:px-10">
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
  const spotlightHover = usePrimaryGradientHover();

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
          <Link to="/produtos" className="btn-primary" {...spotlightHover}>
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
  const highlightsPrimaryHover = usePrimaryGradientHover();

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
          <Link to="/produtos" className="btn-primary" {...highlightsPrimaryHover}>
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
  const ctaPrimaryHover = usePrimaryGradientHover();

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
                <a href="mailto:contato@agroconsult.com.br" className="btn-primary" {...ctaPrimaryHover}>
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
      <Expertise />
      <Pillars />
      <ProductsPreview />
      <ClientsSection />
      <CTA />
    </div>
  );
}
