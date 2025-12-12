import { Compass, Flag, Globe2, Target, Trophy } from "lucide-react";

const milestones = [
  {
    year: "1995",
    title: "Fundação Agroconsult",
    description:
      "Nasce a consultoria especializada em agronegócio, conectando inteligência de mercado e presença em campo.",
    icon: <Flag size={18} />
  },
  {
    year: "2003",
    title: "Primeira edição do Rally da Safra",
    description:
      "A maior expedição técnica do agro brasileiro começa a percorrer o país, auditando lavouras de Norte a Sul.",
    icon: <Compass size={18} />
  },
  {
    year: "2010",
    title: "Lançamento do BD Online",
    description:
      "Séries históricas consolidadas, dashboards customizados e previsões integrando clima, mercado e logística.",
    icon: <Globe2 size={18} />
  },
  {
    year: "2020",
    title: "AgroValora em escala nacional",
    description:
      "Plataforma líder para avaliação de propriedades rurais, crédito e M&A, com metodologia proprietária.",
    icon: <Trophy size={18} />
  },
  {
    year: "2024+",
    title: "IA e integrações avançadas",
    description:
      "APIs, modelos preditivos e squads dedicados para empresas, fundos, produtores e startups do agro.",
    icon: <Target size={18} />
  }
];

export default function History() {
  return (
    <div className="bg-white/80">
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-brand-radial opacity-25" />
        <div className="page-container relative flex flex-col gap-6 py-20 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Nossa história</p>
            <h1 className="mt-2 text-4xl font-bold lg:text-5xl">
              Três décadas transformando dados em decisões no agronegócio brasileiro
            </h1>
            <p className="mt-3 max-w-3xl text-white/85">
              A Agroconsult nasceu com a missão de entregar previsões confiáveis e decisões ágeis para quem produz, compra
              e financia o agro. Hoje, combina base de dados única, metodologia de campo e tecnologia de ponta.
            </p>
          </div>
          <div className="glass-card rounded-3xl border border-white/30 bg-white/10 p-6 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Nossos pilares</p>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li>• Independência analítica e rigor metodológico</li>
              <li>• Presença em campo do Norte ao Sul</li>
              <li>• Tecnologia, IA e segurança de dados</li>
              <li>• Projetos customizados para cada cliente</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="page-container">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Linha do tempo</p>
            <h2 className="text-3xl font-bold text-brand-navy">Legado e evolução contínua</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              Evoluímos com o agronegócio brasileiro: consolidamos dados, criamos a maior expedição técnica, lançamos
              plataformas e seguimos inovando para antecipar tendências.
            </p>
          </div>

          <div className="relative space-y-6 border-l border-brand-gray/20 pl-6">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="relative overflow-hidden rounded-3xl bg-white p-[1px] shadow-panel transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="absolute -left-[11px] top-6 h-5 w-5 rounded-full border-4 border-white bg-brand-green shadow" />
                <div className="rounded-[28px] bg-white/90 p-6">
                  <div className="flex items-center gap-3 text-brand-green">
                    <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold">{item.year}</span>
                    <div className="rounded-full bg-brand-navy/10 p-2 text-brand-navy">{item.icon}</div>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
