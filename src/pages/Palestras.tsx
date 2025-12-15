import { ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

const speakers = [
  {
    name: "André Pessoa",
    role: "Estratégia e originação",
    bio: "Fundador da Agroconsult, referência em estratégia comercial, hedge e decisões de alto impacto.",
    photo: encodeURI("/authors/André Pessoa.png")
  },
  {
    name: "André Debastiani",
    role: "Mercados e safras",
    bio: "Especialista em monitoramento de safra, custos e tendências de mercado para originação.",
    photo: encodeURI("/authors/André Debastiani.png")
  },
  {
    name: "Heloisa Melo",
    role: "ESG e governança",
    bio: "Conecta compliance, rastreabilidade e impacto para cadeias agro sustentáveis.",
    photo: encodeURI("/authors/Heloisa Melo.png")
  },
  {
    name: "Rodrigo Cruz",
    role: "Clima e inteligência de dados",
    bio: "Traduz clima, dados e tecnologia em decisões rápidas no campo.",
    photo: encodeURI("/authors/Rodrigo Cruz.png")
  }
];

export default function Palestras() {
  const ctaHover = usePrimaryGradientHover();

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-brand-radial opacity-25" />
        <div className="page-container relative flex flex-col gap-6 py-16 lg:flex-row lg:items-center lg:py-20">
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
            <div className="flex flex-wrap gap-3">
              <a href="mailto:agroconsult@agroconsult.com.br" className="btn-primary" {...ctaHover}>
                Agendar palestra
                <ArrowRight size={16} />
              </a>
              <Link to="/produtos" className="btn-secondary">
                Conhecer soluções
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="group overflow-hidden rounded-3xl bg-white shadow-panel ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
                </div>
                <div className="space-y-1 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-green">{speaker.role}</p>
                  <h3 className="text-lg font-bold text-brand-navy">{speaker.name}</h3>
                  <p className="text-sm text-slate-700">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="page-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gray">Temas em destaque</p>
            <h2 className="text-3xl font-semibold leading-tight text-brand-navy">Perspectivas que geram ação</h2>
            <p className="text-base text-slate-700">
              Levamos dados proprietários, validação em campo e cenários estratégicos para direcionar decisões de investimento,
              comercialização e governança.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Safras e preços", detail: "Curva de oferta e demanda, logística e câmbio." },
              { title: "ESG e governança", detail: "Rastreabilidade, compliance e gestão de risco." },
              { title: "Valoração de ativos", detail: "Tese Agrovalora e comparáveis sólidos." },
              { title: "Estratégia comercial", detail: "Originação, hedge e fidelização de clientes." }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm font-semibold text-brand-navy">{item.title}</p>
                <p className="text-sm text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

