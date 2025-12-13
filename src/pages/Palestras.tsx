import { ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

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
