const sections = [
  {
    title: "Quais dados coletamos",
    body:
      "Coletamos informacoes que voce fornece (nome, email, telefone) em formularios de contato e dados tecnicos minimos gerados pelo uso do site, como endereco IP, tipo de dispositivo e paginas visitadas."
  },
  {
    title: "Como usamos os dados",
    body:
      "Utilizamos os dados para responder solicitacoes, melhorar conteudo e experiencia do site, cumprir obrigacoes legais e, quando autorizado, enviar comunicados sobre produtos e servicos."
  },
  {
    title: "Compartilhamento",
    body:
      "Podemos compartilhar dados com prestadores de servico que apoiam nossas operacoes (hospedagem, analise, seguranca) sempre sob obrigacao de confidencialidade. Nao vendemos dados pessoais."
  },
  {
    title: "Seguranca",
    body:
      "Adotamos controles de seguranca, criptografia em transito e monitoramento para proteger os dados, buscando reduzir riscos de acesso nao autorizado."
  },
  {
    title: "Seus direitos",
    body:
      "Voce pode solicitar acesso, correcao ou exclusao dos dados, bem como revogar consentimentos. Para exercer seus direitos, envie um email para nosso canal de privacidade."
  },
  {
    title: "Retencao",
    body:
      "Mantemos os dados apenas pelo tempo necessario para atender as finalidades declaradas e requisitos legais aplicaveis."
  }
];

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white/90 py-16">
      <div className="page-container max-w-3xl space-y-10">
        <header className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Privacidade</p>
          <h1 className="text-3xl font-bold text-brand-navy">Politica de Privacidade</h1>
          <p className="text-sm text-slate-600">Atualizada em {new Date().getFullYear()}.</p>
        </header>

        <section className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
              <h2 className="text-lg font-semibold text-brand-navy">{section.title}</h2>
              <p className="text-sm text-slate-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </section>

        <footer className="rounded-2xl bg-brand-gradient p-[1px]">
          <div className="rounded-[18px] bg-white p-5 text-center shadow-sm">
            <h3 className="text-base font-semibold text-brand-navy">Canal de contato sobre privacidade</h3>
            <p className="mt-2 text-sm text-slate-700">
              Para duvidas, solicitacoes ou exercicio de direitos, envie um email para{" "}
              <a href="mailto:agroconsult@agroconsult.com.br" className="font-semibold text-brand-green underline">
                agroconsult@agroconsult.com.br
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
