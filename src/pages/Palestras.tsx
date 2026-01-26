import { useEffect, type CSSProperties } from "react";
import { ArrowRight, Linkedin, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const speakers = [
  {
    name: "André Pessôa",
    bio: "Fundador e CEO da Agroconsult.",
    photo: "/authors/andre-pessoa.jpg",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9-pess%C3%B4a-0bb85012a/"
  },
  {
    name: "André Debastiani",
    bio: "Sócio-diretor da Agroconsult e coordenador geral do Rally da Safra.",
    photo: "/authors/andre-debastiani.jpg",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9-debastiani-853ab250/"
  },
  {
    name: "Cleber Vieira",
    bio: "Sócio-diretor da Agroconsult.",
    photo: "/authors/cleber-vieira.jpg",
    linkedin: "https://www.linkedin.com/in/cleber-vieira-2a234732/"
  },
  {
    name: "Débora Simões",
    bio: "Sócia-diretora da Agroconsult.",
    photo: "/authors/debora-simoes.jpg",
    linkedin: "https://www.linkedin.com/in/debora-simoes/"
  },
  {
    name: "Adriano Lo Turco",
    bio: "Sócio da Agroconsult e especialista em mercado de grãos.",
    photo: "/authors/adriano-lo-turco.jpg",
    linkedin: "https://www.linkedin.com/in/adriano-aude-lo-turco-57224219/"
  },
  {
    name: "Heloisa Melo",
    bio: "Sócia da Agroconsult e especialista em mercado de algodão e café.",
    photo: "/authors/heloisa-melo.jpg",
    linkedin: "https://www.linkedin.com/in/heloisa-mara-melo-2b955523/"
  }
];

export default function Palestras() {
  const ctaHover = usePrimaryGradientHover();
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={revealRef} className="bg-white">
      <section
        className="relative overflow-hidden bg-brand-gradient pt-12 text-white md:pt-24 lg:pt-20"
        data-reveal="section"
      >
        <div className="page-container relative flex flex-col gap-6 pt-8 pb-16 md:py-16 lg:flex-row lg:items-center lg:pt-12 lg:pb-20">
          <div className="space-y-4 lg:w-3/5">
            <p className="type-label text-white/80">Palestras</p>
            <h1 className="type-h1">Conteúdo que orienta decisões no agronegócio</h1>
            <p className="type-body text-white/85">
              Talks customizados com especialistas da Agroconsult para conselhos, lideranças e times estratégicos.
              Conteúdo baseado em dados primários, leitura de mercado e inteligência de safra para apoiar decisões e acelerar resultados.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {["Condições e resultados da safra", "Perspectivas de mercado", "Cenário econômico e financeiro"].map((tag) => (
                <span key={tag} className="type-label rounded-full bg-white/10 px-3 py-2 text-white">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <Link to="/#contato-form" className="btn-primary" {...ctaHover}>
                Agendar palestra
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div
              className="rounded-3xl bg-white/10 p-6 shadow-xl ring-1 ring-white/20 backdrop-blur"
              data-reveal="card"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
            >
              <div className="type-label mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-white">
                <Mic size={16} /> Formatos
              </div>
              <div className="type-small space-y-3 text-white/85">
                {[
                  "Keynotes para eventos e conselhos",
                  "Painéis moderados com especialistas da Agroconsult",
                  "Workshops in-company",
                  "Palestras para clientes, parceiros e equipes",
                  "Curadoria de eventos, com escolha de temas e painelistas"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" data-reveal="section">
        <div className="page-container space-y-6">
          <div className="space-y-2 text-left md:text-center" data-reveal="section">
            <p className="type-label text-brand-gray">NOSSOS ESPECIALISTAS</p>
            <h2 className="type-h2 text-brand-navy">Quem leva a Agroconsult ao palco</h2>
            <p className="type-body text-slate-700">
              Especialistas que vivem o campo, os dados e a estratégia para traduzir tendências em decisões.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker, idx) => (
              <div
                key={speaker.name}
                className="group rounded-3xl bg-white shadow-panel ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
                data-reveal="card"
                style={{ "--reveal-delay": `${idx * 80}ms` } as CSSProperties}
              >
                <div className="relative mx-auto mt-4 w-2/3 max-w-[200px] aspect-square overflow-hidden rounded-full">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    width={480}
                    height={480}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-4 text-center">
                  <h3 className="type-body font-semibold text-brand-navy">{speaker.name}</h3>
                  <p className="type-small text-slate-700">{speaker.bio}</p>
                  {speaker.linkedin ? (
                    <div className="flex justify-center">
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`LinkedIn de ${speaker.name}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-brand-navy transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-transparent hover:bg-brand-gradient hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_16px_40px_rgba(0,0,0,0.2)]"
                      >
                        <Linkedin size={14} />
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
