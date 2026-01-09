import { useEffect } from "react";

export default function Plataformas() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const plataformas = [
    {
      id: "agrovalora",
      nome: "Agrovalora",
      descricao: "Plataforma de avaliação e valoração de propriedades agrícolas com dados em tempo real",
      url: "https://agrovalora.agroconsult.com.br",
      icone: "🛰️"
    },
    {
      id: "bd-online",
      nome: "BD Online",
      descricao: "Base de dados completa com informações de mercado, preços e análises do agronegócio",
      url: "https://bdonline.agroconsult.com.br",
      icone: "📊"
    },
    {
      id: "cropdata",
      nome: "Cropdata",
      descricao: "Sistema de monitoramento agrícola com dados climáticos e projetos de safra",
      url: "https://cropdata.agroconsult.com.br",
      icone: "🌾"
    }
  ];

  const handleAccessPlatforma = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-light/40 to-white pt-20 sm:pt-28 md:pt-32 pb-16">
      <div className="page-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold bg-brand-gradient bg-clip-text text-transparent">
            Acesse Nossas Plataformas
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Escolha uma de nossas soluções para acessar ferramentas avançadas de inteligência de mercado e análise agrícola
          </p>
        </div>

        {/* Grid de Plataformas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plataformas.map((plataforma, idx) => (
            <div
              key={plataforma.id}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Content */}
              <div className="bg-brand-gradient p-8 h-48 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <div className={`absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-300 ${idx % 2 === 0 ? 'blur-2xl' : ''}`} />
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">{plataforma.icone}</div>
                  <h2 className="text-3xl font-bold">{plataforma.nome}</h2>
                </div>
              </div>

              {/* Description and Button */}
              <div className="p-8 flex flex-col justify-between h-64">
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {plataforma.descricao}
                </p>

                <button
                  onClick={() => handleAccessPlatforma(plataforma.url)}
                  className="w-full py-3 px-6 bg-brand-gradient text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Acessar Plataforma
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-green/5 to-brand-green/10 rounded-3xl p-8 md:p-12 border border-brand-green/20">
          <h3 className="text-2xl font-bold text-brand-navy mb-4">Precisa de ajuda?</h3>
          <p className="text-slate-700 mb-6">
            Se você ainda não tem acesso a nossas plataformas ou precisa de suporte, entre em contato com nosso time de especialistas.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all duration-300"
          >
            Fale com um especialista
            <span>→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
