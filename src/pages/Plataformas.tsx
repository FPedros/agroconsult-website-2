import { useEffect } from "react";
import valoraImg from "/images/valora.png";
import bdonlineImg from "/images/bdonline.png";
import cropdataImg from "/images/cropdata.png";

export default function Plataformas() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const plataformas = [
    {
      id: "agrovalora",
      nome: "Agrovalora",
      descricao: "Plataforma de avaliação e valoração de propriedades agrícolas com dados em tempo real",
      url: "https://app.agrovalora.com.br/login",
      imagem: valoraImg
    },
    {
      id: "bd-online",
      nome: "BD Online",
      descricao: "Base de dados completa com informações de mercado, preços e análises do agronegócio",
      url: "https://bd2.agroconsult.com.br/internal_forms_authentication/?targetId=5d12d849-6198-4fca-a8b7-3ed5815a3208",
      imagem: bdonlineImg
    },
    {
      id: "cropdata",
      nome: "Cropdata",
      descricao: "Sistema de monitoramento agrícola com dados climáticos e projetos de safra",
      url: "https://cropdata.agroconsult.com.br",
      imagem: cropdataImg
    }
  ];

  const handleAccessPlatforma = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,135,71,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(32,41,86,0.2),transparent_50%)]" />
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008747' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }} />
      
      <div className="relative pt-24 sm:pt-32 md:pt-40 pb-16">
        <div className="page-container">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-green via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Acesse Nossas Plataformas
            </h1>
          </div>

          {/* Grid de Plataformas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto mb-16">
            {plataformas.map((plataforma, idx) => (
              <div
                key={plataforma.id}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Card Content */}
                <div className="bg-brand-gradient p-4 sm:p-8 h-24 sm:h-36 flex items-center justify-center text-white relative overflow-hidden">
                  <div className={`absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-300 ${idx % 2 === 0 ? 'blur-2xl' : ''}`} />
                  <div className="relative z-10">
                    <img 
                      src={plataforma.imagem} 
                      alt={plataforma.nome}
                      className={`w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain ${plataforma.id === 'cropdata' ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                </div>

                {/* Description and Button */}
                <div className="p-4 sm:p-8 flex flex-col justify-between h-52 sm:h-64">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {plataforma.descricao}
                  </p>

                  <button
                    onClick={() => handleAccessPlatforma(plataforma.url)}
                    className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-brand-gradient text-white text-xs sm:text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95"
                  >
                    Acessar Plataforma
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-brand-green/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">Precisa de ajuda?</h3>
            <p className="text-slate-300 mb-6">
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
      </div>
    </main>
  );
}
