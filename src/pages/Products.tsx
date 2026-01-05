import { Sparkles } from "lucide-react";
const accelerators = [
  "Estratégia de comercialização e hedge",
  "Planos de originação e fidelização",
  "Monitoramento de safra com sensoriamento remoto",
  "Pricing dinâmico para insumos e serviços",
  "Rastreabilidade e governança ESG",
  "Due diligence territorial e socioambiental"
];

export default function Products() {
  return (
    <div className="bg-white/80">
      <section className="relative overflow-hidden bg-brand-gradient pt-24 text-white lg:pt-32">
        <div className="absolute inset-0 bg-brand-radial opacity-25" />
        <div className="page-container relative space-y-8 py-20 pt-8 lg:py-24 lg:pt-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Aceleradores</p>
              <h2 className="text-3xl font-bold leading-tight lg:text-4xl">Mais de 80 serviços para personalizar sua estratégia</h2>
              <p className="text-sm text-white/85 lg:text-base">
                Combine módulos para acelerar resultados: estratégia comercial, monitoramento, governança, ESG e valoração.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {accelerators.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              >
                <span>{item}</span>
                <Sparkles size={16} className="text-brand-green" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
