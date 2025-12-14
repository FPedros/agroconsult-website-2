import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, ChevronDown, Database, Layers, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

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

function Hero() {
  const heroPrimaryHover = usePrimaryGradientHover();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const idleCb = (window as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idleCb) {
      const id = idleCb(() => setShouldLoadVideo(true));
      return () => (window as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
    }
    const timeoutId = window.setTimeout(() => setShouldLoadVideo(true), 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const heroStyle = {
    minHeight: "100dvh",
    height: "100dvh",
    backgroundImage: !isVideoReady ? "url('/images/video-banner-mobile.jpg')" : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden"
      style={heroStyle}
    >
      <div className="absolute inset-0">
        {shouldLoadVideo && (
          <video
            className="hero-video h-full min-h-full w-full object-cover object-center"
            style={{ minHeight: "100svh" }}
            src="/images/video-banner.mp4"
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Vídeo institucional Agroconsult"
            poster="/images/video-banner-mobile.jpg"
            onLoadedData={() => setIsVideoReady(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/85 via-brand-navy/75 to-brand-green/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

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
            const duration = `${48 + idxLine * 12}s`;
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Próximo passo</p>
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
            <h2 className={styles.title}>Dados proprietários para decisões em tempo real</h2>
            <p className={`${styles.body} max-w-3xl`}>
              Explore dashboards, análises e relatórios exclusivos do BD Online: curva de produção, rentabilidade,
              preços, oferta e demanda para todo o agro brasileiro.
            </p>
          </div>
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

        <div className="overflow-hidden rounded-3xl bg-white shadow-panel ring-1 ring-slate-100">
          <div className="relative h-[480px] w-full">
            <img
              src="/images/bd-online-previaw.png"
              alt="Prévia do BD Online Agroconsult"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-brand-navy/10 to-transparent" />
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
      <CTA />
    </div>
  );
}
