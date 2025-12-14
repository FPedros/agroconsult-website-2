const sections = [
  {
    title: "Quais dados coletamos",
    body:
      "Coletamos informações que você fornece (nome, e-mail, telefone) em formulários de contato e dados técnicos mínimos gerados pelo uso do site, como endereço IP, tipo de dispositivo e páginas visitadas."
  },
  {
    title: "Como usamos os dados",
    body:
      "Utilizamos os dados para responder solicitações, melhorar conteúdo e experiência do site, cumprir obrigações legais e, quando autorizado, enviar comunicados sobre produtos e serviços."
  },
  {
    title: "Compartilhamento",
    body:
      "Podemos compartilhar dados com prestadores de serviço que apoiam nossas operações (hospedagem, análise, segurança) sempre sob obrigação de confidencialidade. Não vendemos dados pessoais."
  },
  {
    title: "Segurança",
    body:
      "Adotamos controles de segurança, criptografia em trânsito e monitoramento para proteger os dados, buscando reduzir riscos de acesso não autorizado."
  },
  {
    title: "Seus direitos",
    body:
      "Você pode solicitar acesso, correção ou exclusão dos dados, bem como revogar consentimentos. Para exercer seus direitos, envie um e-mail para nosso canal de privacidade."
  },
  {
    title: "Retenção",
    body:
      "Mantemos os dados apenas pelo tempo necessário para atender às finalidades declaradas e requisitos legais aplicáveis."
  }
];

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white/90 py-16">
      <div className="page-container max-w-3xl space-y-10">
        <header className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Privacidade</p>
          <h1 className="text-3xl font-bold text-brand-navy">Política de Privacidade</h1>
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
              Para dúvidas, solicitações ou exercício de direitos, envie um e-mail para{" "}
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
