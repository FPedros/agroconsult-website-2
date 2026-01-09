import { useEffect } from "react";
import { ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

const speakers = [
  {
    name: "André Pessôa",
    role: "Estratégia e originação",
    bio: "Fundador da Agroconsult, referência em estratégia comercial, hedge e decisões de alto impacto.",
    photo: "/authors/andre-pessoa.jpg"
  },
  {
    name: "André Debastiani",
    role: "Mercados e safras",
    bio: "Especialista em monitoramento de safra, custos e tendências de mercado para originação.",
    photo: "/authors/andre-debastiani.jpg"
  },
  {
    name: "Heloísa Melo",
    role: "Clientes e sustentabilidade",
    bio: "Conecta compliance, rastreabilidade e impacto para cadeias agro sustentáveis.",
    photo: "/authors/heloisa-melo.jpg"
  },
  {
    name: "Adriano Lo Turco",
    role: "Gestão de risco e comercialização",
    bio: "Combina precificação, risco e inteligência de mercado para suportar trading e originação.",
    photo: "/authors/adriano-lo-turco.jpg"
  },
  {
    name: "Débora Simões",
    role: "ESG e governança",
    bio: "Lidera agendas de ESG, rastreabilidade e compliance socioambiental em cadeias agrícolas.",
    photo: "/authors/debora-simoes.jpg"
  },
  {
    name: "Cleber Vieira",
    role: "Mercados e crédito",
    bio: "Estrutura estratégia financeira, risco e relacionamento com mercado de capitais.",
    photo: "/authors/cleber-vieira.jpg"
  }
];

export default function Palestras() {
  const ctaHover = usePrimaryGradientHover();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-brand-gradient pt-12 text-white md:pt-24 lg:pt-20">
        <div className="absolute inset-0 bg-brand-radial opacity-25" />
        <div className="page-container relative flex flex-col gap-6 pt-8 pb-16 md:py-16 lg:flex-row lg:items-center lg:pt-12 lg:pb-20">
          <div className="space-y-4 lg:w-3/5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Palestras</p>
            <h1 className="text-3xl font-bold leading-tight lg:text-4xl">Conteúdo que inspira decisões no agro</h1>
            <p className="text-base text-white/85">
              Talks customizados com especialistas Agroconsult para conselhos, lideranças comerciais e times operacionais.
              Tendências de mercado, safras, ESG e estratégias para acelerar resultados.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Safras e mercados", "Estratégia comercial", "ESG e governança", "Tecnologia e dados"].map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide">
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
            <div className="rounded-3xl bg-white/10 p-6 shadow-xl ring-1 ring-white/20 backdrop-blur">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                <Mic size={16} /> Formatos
              </div>
              <div className="space-y-3 text-sm text-white/85">
                {[
                  "Keynotes para eventos e conselhos",
                  "Painéis moderados com especialistas",
                  "Workshops in-company focados em ação",
                  "Talks executivos para clientes e parceiros"
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

      <section className="section-padding bg-white">
        <div className="page-container space-y-6">
          <div className="space-y-2 text-left md:text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gray">Especialistas</p>
            <h2 className="text-3xl font-semibold leading-tight text-brand-navy">Quem leva a Agroconsult ao palco</h2>
            <p className="text-base text-slate-700 md:text-lg">
              Times que vivem campo, dados e estratégia para traduzir tendências em ação.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="group rounded-3xl bg-white shadow-panel ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
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
                <div className="space-y-1 p-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-green sm:text-sm">{speaker.role}</p>
                  <h3 className="text-base font-bold text-brand-navy sm:text-lg">{speaker.name}</h3>
                  <p className="text-xs text-slate-700 sm:text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
