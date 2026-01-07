import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, ChevronDown, Database, Facebook, Instagram, Layers, Linkedin, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";
import seloBranco from "/images/selo branco.png";

const tagClass =
  "inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm";

const styles = {
  eyebrow: "text-xs font-semibold uppercase tracking-[0.24em] text-brand-gray",
  title: "text-3xl font-semibold leading-tight text-brand-navy md:text-[34px]",
  body: "text-base text-slate-700 md:text-lg",
  sectionContainer: "page-container space-y-8"
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

const XIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M18.244 2H21l-6.4 7.317L22 22h-6.828l-5.34-6.95L3.4 22H1l6.84-7.81L2 2h6.999l4.83 6.215L18.244 2Zm-2.39 18h1.89L8.24 3.98H6.19l9.665 16.02Z"
    />
  </svg>
);

const followLinks = [
  {
    label: "Instagram",
    detail: "@agroconsult_br",
    href: "https://www.instagram.com/agroconsult_br",
    icon: <Instagram size={20} />
  },
  {
    label: "LinkedIn",
    detail: "/fernando-sousa-05b2a0258",
    href: "https://www.linkedin.com/in/fernando-sousa-05b2a0258/",
    icon: <Linkedin size={20} />
  },
  {
    label: "Facebook",
    detail: "/agroconsult.consultoria",
    href: "https://www.facebook.com/agroconsult.consultoria/",
    icon: <Facebook size={20} />
  },
  {
    label: "X (Twitter)",
    detail: "@agroconsult_br",
    href: "https://x.com/agroconsult_br",
    icon: <XIcon />
  }
];

function Hero() {
  const heroPrimaryHover = usePrimaryGradientHover();
  const [showSelo, setShowSelo] = useState(false);

  useEffect(() => {
    setShowSelo(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-brand-gradient text-white"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-center bg-no-repeat bg-contain mix-blend-screen transform transition duration-1000 ease-out ${
          showSelo ? "opacity-60 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ backgroundImage: `url(${seloBranco})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-slate-900/45" aria-hidden />

      <div className="page-container relative z-10 flex min-h-full flex-col items-center justify-center gap-8 py-20 text-center sm:py-24 lg:py-28">
        <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl md:text-[68px] md:leading-[1.08] tracking-tight drop-shadow-[0_14px_44px_rgba(0,23,71,0.5)]">
          Estratégia para quem{" "}
          <span className="bg-gradient-to-r from-brand-green via-emerald-300 to-brand-green bg-clip-text text-transparent drop-shadow-[0_10px_32px_rgba(47,197,111,0.55)]">
            decide no agro
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
            <div className="brand-underline" />
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
  const highlightCards = [
    {
      title: "80+ soluções prontas",
      description: "Combinações para crédito, ESG, safra e estratégia comercial.",
      icon: <Layers size={18} />
    },
    {
      title: "Decisão guiada",
      description: "Dashboards, war rooms e relatórios com time dedicado.",
      icon: <BarChart3 size={18} />
    },
    {
      title: "Dados auditados",
      description: "Séries proprietárias com validação em campo e satélite.",
      icon: <Database size={18} />
    },
  ];

  return (
    <section className="section-padding bg-brand-gradient">
      <div className={`${styles.sectionContainer} space-y-8`}>
        <div className="grid gap-8 text-white lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Produtos assinatura Agroconsult</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-[34px]">Um portfólio completo para decisões rápidas e seguras</h2>
            <div className="space-y-3 text-white/85">
              <p className="max-w-3xl text-sm md:text-base">
                Conheça as plataformas que organizam essas soluções em experiências completas, do insight à decisão.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["BD Online", "Rally da Safra", "Agrovalora", "Palestras"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className="group h-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  {card.icon}
                  {card.title}
                </div>
                <p className="mt-3 text-sm text-white/85">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-white/85">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <ChevronDown size={16} className="animate-bounce text-white" />
            Continue descendo para ver as plataformas
          </div>
          <Link to="/produtos" className="btn-primary" {...spotlightHover}>
            Ver portfólio completo
          </Link>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const nonEmptyLines = clientLogoLines.filter((line) => line.length);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

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
            const durationBase = isMobile ? 24 : 48;
            const durationStep = isMobile ? 6 : 12;
            const duration = `${durationBase + idxLine * durationStep}s`;
            return (
              <div
                key={`linha-${idxLine}`}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-r from-white via-neutral-50 to-white/80 p-3 shadow-sm"
              >
                <div
                  className={`flex min-w-[200%] items-center gap-8 ${direction}`}
                  style={{ animationDuration: duration, animationTimingFunction: "linear" }}
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

function CTA() {
  const ctaPrimaryHover = usePrimaryGradientHover();

  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-light/25">
      <div className="page-container">
        <div className="gradient-border rounded-3xl">
          <div className="relative overflow-hidden rounded-[22px] bg-brand-gradient px-6 py-10 text-white shadow-xl md:px-12">
            <div className="absolute right-10 top-0 h-48 w-48 rounded-full bg-white/10 opacity-60 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Contato</p>
                <h3 className="text-2xl font-bold leading-tight">Vamos desenhar seu próximo ciclo com mais precisão?</h3>
                <p className="mt-2 max-w-2xl text-white/85">
                  Conecte dados, expedição e estratégia em uma só frente. Squads dedicados para trading, insumos, fundos,
                  produtores e agroindústria.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:contato@agroconsult.com.br" className="btn-ghost bg-white/10 hover:bg-white/15" {...ctaPrimaryHover}>
                  Agendar conversa
                </a>
                <Link to="/produtos" className="btn-ghost border-white/80 text-white hover:bg-white/10 hover:text-white">
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

function RallyEmbed() {
  const rallyHover = usePrimaryGradientHover();

  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className={styles.eyebrow}>Rally da Safra</p>
            <h2 className={styles.title}>Veja o Rally em detalhes</h2>
            <p className={`${styles.body} max-w-3xl`}>
              Acesse o site oficial do Rally da Safra para acompanhar etapas, metodologia e resultados em tempo real.
            </p>
          </div>
          <div className="hidden 2xl:block">
            <a
              href="https://www.rallydasafra.com.br/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
              {...rallyHover}
            >
              Abrir site do Rally
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-panel ring-1 ring-slate-100">
          <div className="relative h-[480px] w-full">
            <iframe
              title="Rally da Safra"
              src="https://www.rallydasafra.com.br/"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <a
            href="https://www.rallydasafra.com.br/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-4 inline-flex w-full justify-center !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
            {...rallyHover}
          >
            Abrir site do Rally
          </a>
        </div>
      </div>
    </section>
  );
}

function AgrovaloraEmbed() {
  const terraHover = usePrimaryGradientHover();

  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
          <p className={styles.eyebrow}>Agrovalora</p>
            <h2 className={styles.title}>Valoração e inteligência patrimonial</h2>
            <p className={`${styles.body} max-w-3xl`}>
              Conheça a plataforma líder em avaliação de ativos rurais, comparáveis robustos e inteligência para crédito,
              M&A, seguros e governança.
            </p>
          </div>
          <div className="hidden 2xl:block">
            <a
              href="https://terra-inteligente.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
              {...terraHover}
            >
              Abrir Agrovalora
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-panel ring-1 ring-slate-100">
          <div className="relative h-[480px] w-full">
            <iframe
            title="Agrovalora"
              src="https://terra-inteligente.vercel.app/"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
            scrolling="no"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <a
            href="https://terra-inteligente.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-4 inline-flex w-full justify-center !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
            {...terraHover}
          >
            Abrir Agrovalora
          </a>
        </div>
      </div>
    </section>
  );
}

function CropdataEmbed() {
  const cropdataHover = usePrimaryGradientHover();

  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className={styles.eyebrow}>Cropdata</p>
            <h2 className={styles.title}>Clima, safras e indicadores em um site leve</h2>
            <p className={`${styles.body} max-w-3xl`}>
              Navegue no Cropdata para acompanhar clima, produtividade e movimentos de mercado com visualizações rápidas e
              acessíveis.
            </p>
          </div>
          <div className="hidden 2xl:block">
            <a
              href="https://website-cropdata.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
              {...cropdataHover}
            >
              Abrir Cropdata
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-panel ring-1 ring-slate-100">
          <div className="relative h-[480px] w-full">
            <iframe
              title="Cropdata"
              src="https://website-cropdata.vercel.app/"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <a
            href="https://website-cropdata.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-4 inline-flex w-full justify-center !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
            {...cropdataHover}
          >
            Abrir Cropdata
          </a>
        </div>
      </div>
    </section>
  );
}

function BDOnlineEmbed() {
  const bdHover = usePrimaryGradientHover();

  return (
    <section className="section-padding bg-white">
      <div className={styles.sectionContainer}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className={styles.eyebrow}>BD Online</p>
            <h2 className={styles.title}>Dados proprietarios para decisoes em tempo real</h2>
            <p className={`${styles.body} max-w-3xl`}>
              Explore dashboards, analises e relatorios exclusivos do BD Online: curva de producao, rentabilidade,
              precos, oferta e demanda para todo o agro brasileiro.
            </p>
          </div>
          <div className="hidden 2xl:block">
            <a
              href="https://bd.agroconsult.com.br/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
              {...bdHover}
            >
              Acessar BD Online
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-panel ring-1 ring-slate-100">
          <div className="relative h-[480px] w-full">
            <img
              src="/images/bd-online-previaw.png"
              alt="Previa do BD Online Agroconsult"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-brand-navy/10 to-transparent" />
          </div>
        </div>
        <div className="lg:hidden">
          <a
            href="https://bd.agroconsult.com.br/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-4 inline-flex w-full justify-center !border-white !text-white hover:!border-white hover:!text-white hover:!bg-white/10"
            {...bdHover}
          >
            Acessar BD Online
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSocialSection() {
  const [hoveredFollow, setHoveredFollow] = useState<number | null>(null);
  const contactPrimaryHover = usePrimaryGradientHover();

  return (
    <section id="contato" className="bg-brand-gradient">
      <div className="page-container py-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <aside className="text-white" aria-labelledby="follow-title">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Redes sociais</p>
                <h4 id="follow-title" className="text-2xl font-semibold">Siga a Agroconsult</h4>
                <p className="text-sm text-white/75">
                  Conteudo oficial, bastidores dos projetos e novidades em tempo real. Escolha sua rede favorita e acompanhe a Agroconsult.
                </p>
              </div>

              <div className="grid gap-3">
                {followLinks.map((item, idx) => {
                  const isHovered = hoveredFollow === idx;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-2xl bg-white/12 px-4 py-3 shadow-xl ring-1 ring-white/20 backdrop-blur transition duration-300"
                      style={{
                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                        boxShadow: isHovered
                          ? "0 0 40px rgba(255,255,255,0.18), 0 24px 70px rgba(0,0,0,0.28)"
                          : undefined
                      }}
                      onMouseEnter={() => setHoveredFollow(idx)}
                      onMouseLeave={() => setHoveredFollow(null)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-brand-gradient group-hover:text-white">
                          {item.icon}
                        </span>
                        <div className="space-y-0.5">
                          <p className="text-sm font-semibold">Siga no {item.label}</p>
                          <p className="text-xs text-white/70">{item.detail}</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition group-hover:text-white">
                        Seguir
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="text-xs text-white/70">
                Prefere falar diretamente com a equipe? Envie uma mensagem pelas redes sociais e retornaremos em breve.
              </p>
            </div>
          </aside>

          <div className="relative w-full overflow-hidden rounded-2xl bg-white/12 p-6 shadow-xl ring-1 ring-white/20 backdrop-blur">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-green/10 blur-3xl" aria-hidden />
            <div className="absolute -left-6 bottom-10 h-20 w-20 rounded-full bg-brand-navy/10 blur-3xl" aria-hidden />

            <div className="relative z-10 space-y-4">
              <h4 id="contact-title" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Contato</h4>
              <div className="space-y-2 text-white/90">
                <p className="text-lg font-semibold leading-tight text-white sm:text-xl">
                  Vamos desenhar seu próximo ciclo com mais precisão?
                </p>
                <p className="text-sm text-white/75">
                  Conecte dados, expedição e estratégia em uma só frente. Squads dedicados para trading, insumos,
                  fundos, produtores e agroindústria.
                </p>
              </div>
              <form className="grid gap-3 text-sm text-white/80" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Assunto</span>
                  <select
                    name="assunto"
                    required
                    className="rounded-xl border border-white/30 bg-white/80 px-3 py-2 text-sm text-brand-navy outline-none transition focus:border-brand-green"
                  >
                    <option value="">Selecione...</option>
                    <option value="imprensa">Imprensa</option>
                    <option value="projetos">Projetos</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="avaliacao-patrimonial">Avaliacao Patrimonial</option>
                    <option value="rally-da-safra">Rally da Safra</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Email corporativo</span>
                  <input
                    type="email"
                    name="email"
                    required
                    inputMode="email"
                    pattern="^[A-Za-z0-9._%+-]+@(?!gmail\\.com$)(?!hotmail\\.com$)(?!outlook\\.com$)(?!yahoo\\.com$)(?!icloud\\.com$)(?!bol\\.com\\.br$)(?!uol\\.com\\.br$)(?!terra\\.com\\.br$)(?!live\\.com$)(?!msn\\.com$)[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
                    title="Use um email institucional (ex: nome@empresa.com)."
                    placeholder="nome@empresa.com"
                    className="rounded-xl border border-white/30 bg-white/80 px-3 py-2 text-sm text-brand-navy outline-none transition focus:border-brand-green placeholder:text-slate-500"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Mensagem</span>
                  <textarea
                    name="mensagem"
                    rows={4}
                    required
                    placeholder="Conte rapidamente o que voce precisa."
                    className="resize-none rounded-xl border border-white/30 bg-white/80 px-3 py-2 text-sm text-brand-navy outline-none transition focus:border-brand-green placeholder:text-slate-500"
                  />
                </label>
                <div className="mt-1 flex justify-center">
                  <button
                    type="submit"
                    className="btn-primary"
                    {...contactPrimaryHover}
                  >
                    Enviar contato
                  </button>
                </div>
              </form>
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
      <RallyEmbed />
      <AgrovaloraEmbed />
      <CropdataEmbed />
      <BDOnlineEmbed />
      <ClientsSection />
      <ContactSocialSection />
    </div>
  );
}
