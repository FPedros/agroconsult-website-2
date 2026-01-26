import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, BarChart3, ChevronDown, Database, Facebook, Instagram, Layers, Linkedin, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const tagClass =
  "inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm";

const styles = {
  eyebrow: "eyebrow type-label text-brand-gray",
  title: "type-h2 text-brand-navy",
  body: "type-body text-slate-700",
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

const rallySlides = [
  "/rally%20da%20safra/hero-1.webp",
  "/rally%20da%20safra/hero-2.webp",
  "/rally%20da%20safra/hero-3.webp",
  "/rally%20da%20safra/hero-4.webp"
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
    detail: "/agroconsult",
    href: "https://www.linkedin.com/company/agroconsult/posts/?feedView=all",
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
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      hero.style.setProperty("--hero-gradient-shift", "0px");
      hero.style.setProperty("--hero-image-opacity", "1");
      hero.style.setProperty("--hero-image-shift", "0px");
      return;
    }

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), rect.height);
      const gradientShift = Math.round(Math.min(scrolled * 0.1, 48));
      const imageShift = Math.round(Math.min(window.scrollY * 0.18, 180));
      hero.style.setProperty("--hero-gradient-shift", `${gradientShift}px`);
      hero.style.setProperty("--hero-image-shift", `${imageShift}px`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        hero.style.setProperty("--hero-image-opacity", entry.isIntersecting ? "1" : "0");
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const target = document.getElementById("contato-form") || document.getElementById("contato");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("expertise");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      data-reveal="section"
      className="hero-parallax relative flex min-h-[512px] flex-col items-start justify-center overflow-hidden isolate text-white sm:min-h-[680px] lg:min-h-[720px]"
    >
      <div className="hero-parallax-gradient absolute inset-0 bg-brand-gradient" aria-hidden="true" />
      <div className="absolute inset-0 bg-brand-radial opacity-60" aria-hidden="true" />
      <img
        src="/images/diretoria.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="hero-directors-image pointer-events-none fixed bottom-0 right-0 z-0 h-[60%] w-[92%] max-w-[520px] object-contain object-bottom opacity-95 sm:h-[66%] sm:w-[70%] sm:max-w-[640px] lg:h-[78%] lg:w-[54%] lg:max-w-[860px] lg:object-right"
        style={{ "--hero-image-base-shift": "clamp(32px, 6vw, 96px)" } as CSSProperties}
      />

      <div className="page-container relative z-10 flex min-h-[512px] flex-col items-center justify-start gap-6 pb-16 pt-24 text-center sm:min-h-[680px] sm:items-start sm:justify-center sm:pt-28 sm:pb-20 sm:text-left lg:min-h-[720px] lg:pb-24">
        <div
          data-reveal="card"
          style={{ "--reveal-delay": "120ms" } as CSSProperties}
          className="mx-auto w-full max-w-2xl sm:mx-0"
        >
          <h1 className="type-h1 whitespace-normal font-black text-white">
            Estratégia para quem{" "}
            <span className="inline-block bg-gradient-to-r from-emerald-200 via-brand-green to-emerald-200 bg-clip-text text-transparent">
              decide no agro
            </span>
          </h1>
          <div className="space-y-4 lg:space-y-6">
            <p className="type-body max-w-xl text-white/85">
              Transformamos dados em inteligência estratégica para apoiar decisões seguras no agronegócio brasileiro e global.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className={`${tagClass} hidden sm:inline-flex`}>
                <Layers size={16} />
                Estratégia sob medida
              </div>
            </div>

            <div className="hidden flex-wrap items-center gap-3 sm:flex">
              <Link
                to="/produtos"
                className="btn-primary"
                {...heroPrimaryHover}
              >
                Conheça nossas soluções
                <ArrowRight size={16} />
              </Link>
              <button type="button" onClick={scrollToContact} className="btn-ghost">
                Falar com um especialista
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center justify-center">
        <button
          type="button"
          onClick={scrollToNext}
          className="rounded-full border border-white/40 bg-white/10 p-2 text-white transition hover:-translate-y-0.5 hover:bg-white/20"
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown size={20} className="animate-bounce drop-shadow" />
        </button>
      </div>
    </section>
  );
}

function Pillars() {
  const talksHover = usePrimaryGradientHover();
  const talkTags = ["Condições e resultados da safra", "Perspectivas de mercado", "Cenário econômico e financeiro"];
  const talkImages = [
    "/palestras/palestra-1.webp",
    "/palestras/palestra-2.webp",
    "/palestras/palestra-3.webp",
    "/palestras/palestra-4.webp",
    "/palestras/palestra-5.webp",
    "/palestras/palestra-6.webp"
  ];
  const slideStep = 4;
  const slideDuration = talkImages.length * slideStep;

  const scrollToContact = () => {
    const target = document.getElementById("contato-form") || document.getElementById("contato");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-white mb-14 md:mb-16 lg:mb-24" data-reveal="section">
      <div className={styles.sectionContainer}>
        <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-brand-navy text-white shadow-panel md:min-h-[620px]">
          <div className="absolute inset-0">
            {talkImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt=""
                aria-hidden="true"
                className="palestras-slide absolute inset-0 h-full w-full object-cover"
                style={{ animationDelay: `${idx * slideStep}s`, animationDuration: `${slideDuration}s` }}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,135,71,0.45),_transparent_60%)]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-brand-navy/90" aria-hidden />

          <div className="relative z-10 flex min-h-[520px] items-center justify-center px-6 py-14 md:min-h-[620px] md:px-10 md:py-16 lg:py-20">
            <div className="max-w-4xl space-y-6 text-center">
              <p className="eyebrow type-label text-white/80">Palestras Agroconsult</p>
              <h2 className="type-h1 text-white drop-shadow-[0_0_32px_rgba(120,255,210,0.75)]">
                Conteúdo que orienta decisões no agronegócio
              </h2>
              <div className="space-y-3">
                <p className="type-body-lg text-white/90">
                  Apresentações executivas, painéis, treinamentos e workshops desenvolvidos para conselhos, lideranças,
                  times estratégicos, clientes e parceiros, com foco em leitura de mercado, inteligência de safra e
                  direcionamento para a tomada de decisão.
                </p>
                <p className="type-body text-white/80">
                  Dados proprietários, análises exclusivas e a experiência de quem está no campo e no mercado para
                  antecipar cenários, reduzir riscos e acelerar resultados.
                </p>
              </div>
              <div className="hidden grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center">
                {talkTags.map((tag) => (
                  <span
                    key={tag}
                    className="type-label w-full whitespace-nowrap rounded-full bg-white/15 px-2 py-2 text-center text-white backdrop-blur sm:w-auto sm:px-3"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/palestras" className="btn-primary" {...talksHover}>
                  Nossos palestrantes -&gt;
                </Link>
              <button type="button" onClick={scrollToContact} className="btn-ghost">
                Agendar palestra
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const metrics = [
    {
      value: "25+",
      label: "Anos de experiência",
      detail: "Conhecimento profundo do agronegócio brasileiro, construído no campo, no mercado e na análise de dados.",
      icon: <TrendingUp size={28} className="text-brand-green" />
    },
    {
      value: "+500",
      label: "Empresas atendidas",
      detail: "Atendemos empresas de insumos, serviços, indústria, logística e comercialização.",
      icon: <Users size={28} className="text-brand-green" />
    },
    {
      value: "150+",
      label: "Relatórios por ano",
      detail: "Inteligência contínua para decisões estratégicas, com análises que conectam condições de safra, mercado e cenário econômico.",
      icon: <Database size={28} className="text-brand-green" />
    },
    {
      value: "35 mil",
      label: "Lavouras avaliadas in loco",
      detail: "Visitas técnicas realizadas desde 2004, com presença nas principais regiões produtoras do país.",
      icon: <BarChart3 size={28} className="text-brand-green" />
    }
  ];

  return (
    <section id="expertise" className="section-padding bg-white" data-reveal="section">
      <div className={styles.sectionContainer}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className={styles.eyebrow}>INTELIGÊNCIA APLICADA AO AGRO</p>
            <h2 className="type-h2 text-brand-navy">
              Conhecimento que gera <br />
              <span className="text-brand-green">confiança e resultado</span>
            </h2>
            <p className={`${styles.body} max-w-3xl`}>
              A Agroconsult combina 25 anos de know-how, tecnologia própria e um relacionamento construído no campo e no
              mercado para entregar inteligência aplicada à tomada de decisão.
            </p>
            <p className={`${styles.body} max-w-3xl`}>
              Nossas análises são referência para empresas, investidores e líderes do agronegócio no Brasil e no mundo.
            </p>
            <div className="brand-underline" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {metrics.map((item, idx) => (
              <div
                key={item.label}
                data-reveal="card"
                style={{ "--reveal-delay": `${idx * 120}ms` } as CSSProperties}
              >
                <div className="group space-y-2 rounded-2xl bg-slate-50 p-5 text-left shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-brand-gradient hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)] hover:ring-white/20">
                  <div className="mb-2 text-brand-green transition group-hover:text-white">{item.icon}</div>
                  <p className="text-2xl font-bold text-brand-navy transition group-hover:text-white">{item.value}</p>
                  <p className="text-sm font-semibold text-brand-navy transition group-hover:text-white/90">{item.label}</p>
                  <p className="text-sm text-slate-700 transition group-hover:text-white/85">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);
  const images = [
    { webp: "/produtos/1.webp", jpeg: "/produtos/1.jpeg" },
    { webp: "/produtos/2.webp", jpeg: "/produtos/2.jpeg" },
    { webp: "/produtos/3.webp", jpeg: "/produtos/3.jpeg" }
  ];
  const platforms = [
    { label: "Agrovalora", href: "https://terra-inteligente.vercel.app/" },
    { label: "BD Online", href: "https://bd.agroconsult.com.br/" },
    { label: "Agricontent", href: "https://rallydasafra.rds.land/agricontent" }
  ];

  const tiles = [...images, ...images, ...images, ...images];
  const columnA = [...tiles, ...tiles];
  const columnB = [...tiles, ...tiles].reverse();

  const bannerStyle = {
    "--signature-scroll-duration": "56s",
    "--signature-perspective": "1200px",
    "--signature-tilt-x": "12deg",
    "--signature-tilt-y": "-12deg",
    "--signature-tilt-z": "6deg",
    "--signature-depth": "0px",
    "--signature-scale": "0.96",
    "--signature-offset-y": "-4%"
  } as CSSProperties;

  return (
    <section className="bg-brand-gradient pb-12 pt-6 sm:pb-0 sm:pt-0" data-reveal="section">
      <div className={`${styles.sectionContainer} space-y-8`}>
        <div className="grid gap-8 text-white lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow type-label text-white/80">PRODUTOS POR ASSINATURA</p>
            <h2 className="type-h2 text-white">
              Um portfólio completo para decisões rápidas e seguras
            </h2>
            <div className="space-y-3 text-white/85">
              <p className="type-body max-w-3xl">
                Plataformas desenvolvidas para quem precisa acompanhar mercados, antecipar movimentos, gerar
                relacionamento e tomar decisões com agilidade, com dados confiáveis e análises recorrentes.
              </p>
            </div>
            <div className="hidden flex-wrap items-center gap-3 sm:flex">
              {platforms.map((item, idx) => {
                const isHovered = hoveredPlatform === idx;
                return (
                  <div
                    key={item.label}
                    data-reveal="card"
                    style={{ "--reveal-delay": `${idx * 120}ms` } as CSSProperties}
                    className="w-full sm:w-auto"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="type-label flex w-full items-center justify-center text-center whitespace-nowrap rounded-3xl bg-white/12 px-3 py-2 text-white/85 shadow-xl ring-1 ring-white/20 backdrop-blur transition duration-300 sm:w-auto sm:px-3.5 sm:py-2.5"
                      style={{
                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                        boxShadow: isHovered ? "0 24px 70px rgba(0,0,0,0.28)" : undefined
                      }}
                      onMouseEnter={() => setHoveredPlatform(idx)}
                      onMouseLeave={() => setHoveredPlatform(null)}
                      onFocus={() => setHoveredPlatform(idx)}
                      onBlur={() => setHoveredPlatform(null)}
                    >
                      {item.label}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="signature-banner" style={bannerStyle}>
              <div className="signature-banner-stage" role="region" aria-label="Mosaico de produtos Agroconsult">
                <div className="signature-banner-wall" aria-hidden="true">
                  <div className="signature-banner-column signature-scroll-up">
                    {columnA.map((item, idx) => {
                      const isPriority = idx < 2;
                      return (
                        <div className="signature-banner-card" key={`banner-a-${idx}`}>
                          <picture>
                            <source srcSet={item.webp} type="image/webp" />
                            <img
                              src={item.jpeg}
                              alt=""
                              loading={isPriority ? "eager" : "lazy"}
                              decoding="async"
                              fetchPriority={isPriority ? "high" : "low"}
                            />
                          </picture>
                        </div>
                      );
                    })}
                  </div>
                  <div className="signature-banner-column signature-scroll-down">
                    {columnB.map((item, idx) => {
                      const isPriority = idx < 2;
                      return (
                        <div className="signature-banner-card" key={`banner-b-${idx}`}>
                          <picture>
                            <source srcSet={item.webp} type="image/webp" />
                            <img
                              src={item.jpeg}
                              alt=""
                              loading={isPriority ? "eager" : "lazy"}
                              decoding="async"
                              fetchPriority={isPriority ? "high" : "low"}
                            />
                          </picture>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-1 sm:hidden">
              {platforms.map((item, idx) => {
                const isHovered = hoveredPlatform === idx;
                return (
                  <div
                    key={item.label}
                    data-reveal="card"
                    style={{ "--reveal-delay": `${idx * 120}ms` } as CSSProperties}
                    className="w-full sm:w-auto"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="type-label flex w-full items-center justify-center text-center whitespace-nowrap rounded-3xl bg-white/12 px-3 py-2 text-white/85 shadow-xl ring-1 ring-white/20 backdrop-blur transition duration-300 sm:w-auto sm:px-3.5 sm:py-2.5"
                      style={{
                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                        boxShadow: isHovered ? "0 24px 70px rgba(0,0,0,0.28)" : undefined
                      }}
                      onMouseEnter={() => setHoveredPlatform(idx)}
                      onMouseLeave={() => setHoveredPlatform(null)}
                      onFocus={() => setHoveredPlatform(idx)}
                      onBlur={() => setHoveredPlatform(null)}
                    >
                      {item.label}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ProductsOverview() {
  const productsHover = usePrimaryGradientHover();
  const productAreas = [
    {
      title: "Agromarket",
      description:
        "Análises, insights e informações relevantes sobre as principais commodities agrícolas no Brasil e no mundo."
    },
    {
      title: "Acompanhamento de safra",
      description:
        "Levantamento do andamento da safra de soja, milho, algodão, trigo e cana-de-açúcar no país."
    },
    {
      title: "BD Online",
      description:
        "Plataforma composta por um conjunto de dashboards que trazem históricos de dados sobre o mercado agrícola e condições das safras."
    },
    {
      title: "Projetos customizados",
      description:
        "Estudos setoriais e análise de mercado de acordo com a necessidade de cada cliente, que vão desde tendências e projeções de longo prazo até elaboração de plano de negócios e análise de viabilidade de novos negócios."
    },
    {
      title: "Treinamentos",
      description:
        "Capacite sua equipe para viver e entender o dia a dia do agronegócio no Brasil e no mundo."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-brand-gradient py-16 text-white sm:py-20 lg:py-24" data-reveal="section">
      <div className="page-container relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <div className="eyebrow type-label inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-white/80">
              PRODUTOS AGROCONSULT
            </div>
            <h2 className="type-h2 font-black text-white">
              Inteligência aplicada em toda a jornada de decisão do agro
            </h2>
            <p className="type-body max-w-xl text-white/85">
              Da leitura de safra à estratégia, com dados primários coletados diretamente no campo e por sensoriamento remoto.
            </p>
            <div className="hidden flex-wrap items-center gap-3 sm:flex">
              <Link to="/produtos" className="btn-primary" {...productsHover}>
                Ver pagina de produtos
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute left-3.5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-white/70 via-white/25 to-transparent"
              aria-hidden="true"
            />
            <div className="space-y-6 pl-8">
              {productAreas.map((item, idx) => (
                <div
                  key={item.title}
                  data-reveal="card"
                  style={{ "--reveal-delay": `${idx * 120}ms` } as CSSProperties}
                  className="group relative"
                >
                  <span className="absolute left-2 top-2 flex h-3 w-3 items-center justify-center rounded-full bg-white/85 shadow-[0_0_0_6px_rgba(255,255,255,0.08)] transition group-hover:shadow-[0_0_0_10px_rgba(255,255,255,0.18)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 transition group-hover:h-2 group-hover:w-2 group-hover:bg-gradient-to-r group-hover:from-brand-green group-hover:via-emerald-200 group-hover:to-emerald-100" />
                  </span>
                  <div className="grid gap-2 pl-6 md:grid-cols-[220px_1fr] md:items-baseline">
                    <div className="flex items-baseline gap-3 text-white/85">
                      <h3 className="type-body font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="type-small text-white/75">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 pl-8 sm:hidden">
              <Link to="/produtos" className="btn-primary" {...productsHover}>
                Ver pagina de produtos
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RallySection() {
  const rallyHover = usePrimaryGradientHover();
  const slideStep = 5;
  const slideDuration = rallySlides.length * slideStep;
  const initialOffset = slideStep;

  return (
    <section className="section-padding rally-hero relative overflow-hidden bg-white text-brand-navy" data-reveal="section">
      <div className="page-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
            <p className="eyebrow type-label text-brand-navy/70">Rally da Safra</p>
            <div className="space-y-3">
              <h2 className="type-h2 font-black text-brand-navy">
                A Agroconsult lidera a maior expedição de{" "}
                <span className="bg-gradient-to-r from-brand-green via-emerald-300 to-brand-green bg-clip-text text-transparent">
                  análise de safra do Brasil
                </span>
                .
              </h2>
              <p className="type-body max-w-2xl text-slate-700">
                Uma operação técnica que cruza milhares de quilômetros todos os anos para verificar, no campo, o real tamanho
                da safra brasileira de grãos. Mais do que isso, o Rally transforma informação em decisões estratégicas para
                todo o agronegócio para um público de mais de 250 mil seguidores.
              </p>
            </div>
            <div className="hidden flex-wrap gap-3 sm:flex">
              <a
                href="https://www.rallydasafra.com.br/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                {...rallyHover}
              >
                Conhecer a expedição
                <ArrowRight size={16} />
              </a>
              <Link to="/produtos" className="btn-secondary">
                Ver soluções Agroconsult
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <div
              className="rally-carousel"
              data-reveal="card"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              role="region"
              aria-label="Carrossel de imagens do Rally da Safra"
            >
              <div className="rally-carousel-frame" aria-hidden="true" />
              {rallySlides.map((src, idx) => {
                const isPriority = idx === 0;
                const slideDelay = idx * slideStep - initialOffset;
                return (
                  <div
                    key={src}
                    className="rally-carousel-slide"
                    style={
                      {
                        "--slide-delay": `${slideDelay}s`,
                        "--slide-duration": `${slideDuration}s`
                      } as CSSProperties
                    }
                  >
                    <img
                      src={src}
                      alt=""
                      loading={isPriority ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={isPriority ? "high" : "low"}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 sm:hidden">
              <a
                href="https://www.rallydasafra.com.br/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                {...rallyHover}
              >
                Conhecer a expedição
                <ArrowRight size={16} />
              </a>
              <Link to="/produtos" className="btn-secondary">
                Ver soluções Agroconsult
              </Link>
            </div>
          </div>
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
    <section className="section-padding bg-white" data-reveal="section">
      <div className={styles.sectionContainer}>
        <div className="space-y-2 text-left md:text-center">
          <p className={styles.eyebrow}>Clientes que confiam</p>
          <h2 className={styles.title}>Marcas que já aceleram decisões com a Agroconsult</h2>
          <p className={`${styles.body} max-w-3xl md:mx-auto`}>
            Atuamos ao lado de empresas líderes em toda a cadeia do agronegócio: Indústrias, instituições financeiras,
            tradings, cooperativas e empresas de tecnologia.
          </p>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 space-y-3 px-3 sm:px-6 lg:px-10 box-border max-w-[100vw]">
          {nonEmptyLines.map((line, idxLine) => {
            const doubled = [...line, ...line];
            const direction = idxLine % 2 === 0 ? "marquee-left" : "marquee-right";
            const durationBase = isMobile ? 24 : 48;
            const durationStep = isMobile ? 8 : 12;
            const duration = `${durationBase + idxLine * durationStep}s`;
            return (
              <div
                key={`linha-${idxLine}`}
                data-reveal="card"
                style={{ "--reveal-delay": `${idxLine * 120}ms` } as CSSProperties}
                className="py-2"
              >
                <div
                  className={`flex w-max items-center ${direction}`}
                  style={{ animationDuration: duration, animationTimingFunction: "linear" }}
                >
                  {doubled.map((src, idx) => (
                    <div
                      key={`${idxLine}-${idx}-${src}`}
                      className="flex h-14 min-w-[120px] shrink-0 items-center justify-center px-4 mr-8"
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
                <p className="eyebrow type-label text-white/80">Contato</p>
                <h3 className="type-h3">Vamos desenhar seu próximo ciclo com mais precisão?</h3>
                <p className="type-body mt-2 max-w-2xl text-white/85">
                  Conecte dados primários, inteligência de mercado e estratégia em uma única frente.
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

function ContactSocialSection() {
  const [hoveredFollow, setHoveredFollow] = useState<number | null>(null);
  const contactPrimaryHover = usePrimaryGradientHover();

  return (
    <section id="contato" className="section-padding bg-brand-gradient" data-reveal="section">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <aside className="text-white" aria-labelledby="follow-title">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="eyebrow type-label text-white/70">Redes sociais</p>
                <h4 id="follow-title" className="type-h3">Siga a Agroconsult</h4>
                <p className="type-small text-white/75">
                  Conteúdo oficial, bastidores dos projetos e novidades em tempo real. Escolha sua rede favorita e acompanhe a Agroconsult.
                </p>
              </div>

              <div className="grid gap-3">
                {followLinks.map((item, idx) => {
                  const isHovered = hoveredFollow === idx;
                  return (
                    <div
                      key={item.label}
                      data-reveal="card"
                      style={{ "--reveal-delay": `${idx * 120}ms` } as CSSProperties}
                    >
                      <a
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
                          <p className="type-small font-semibold">Siga no {item.label}</p>
                          <p className="type-small text-white/70">{item.detail}</p>
                          </div>
                        </div>
                      <span className="type-label text-white/80 transition group-hover:text-white">
                        Seguir
                      </span>
                      </a>
                    </div>
                  );
                })}
              </div>

              <p className="type-small text-white/70">
                Prefere falar diretamente com a equipe? Envie uma mensagem pelas redes sociais e retornaremos em breve.
              </p>
            </div>
          </aside>

          <div
            id="contato-form"
            data-reveal="card"
            style={{ "--reveal-delay": "180ms" } as CSSProperties}
            className="relative w-full overflow-hidden rounded-2xl bg-white/12 p-6 shadow-xl ring-1 ring-white/20 backdrop-blur"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-green/10 blur-3xl" aria-hidden />
            <div className="absolute -left-6 bottom-10 h-20 w-20 rounded-full bg-brand-navy/10 blur-3xl" aria-hidden />

            <div className="relative z-10 space-y-4">
              <h4 id="contact-title" className="eyebrow type-label text-white/70">Contato</h4>
              <div className="space-y-2 text-white/90">
                <p className="type-h3 text-white">
                  Vamos desenhar seu próximo ciclo com mais precisão?
                </p>
                <p className="type-small text-white/75">
                  Conecte dados primários, inteligência de mercado e estratégia em uma única frente.
                </p>
              </div>
              <form className="grid gap-3 type-small text-white/80" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-1">
                  <span className="type-label text-white/70">Assunto</span>
                  <select
                    name="assunto"
                    required
                    className="rounded-xl border border-white/30 bg-white/80 px-3 py-2 text-sm text-brand-navy outline-none transition focus:border-brand-green"
                  >
                    <option value="">Selecione...</option>
                    <option value="imprensa">Imprensa</option>
                    <option value="projetos">Projetos</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="avaliacao-patrimonial">Avaliação Patrimonial</option>
                    <option value="rally-da-safra">Rally da Safra</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="type-label text-white/70">Email corporativo</span>
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
                  <span className="type-label text-white/70">Mensagem</span>
                  <textarea
                    name="mensagem"
                    rows={4}
                    required
                    placeholder="Conte rapidamente o que você precisa."
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
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={revealRef} className="relative z-0 bg-white/60 overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <div className="relative z-10">
        <Expertise />
        <Pillars />
        <ProductsPreview />
        <RallySection />
        <ProductsOverview />
        <ClientsSection />
        <ContactSocialSection />
      </div>
    </div>
  );
}
