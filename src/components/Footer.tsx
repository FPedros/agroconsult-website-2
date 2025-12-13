import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-brand-gray/20 bg-white/90 backdrop-blur">
      <div className="page-container flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-md flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/images/logo-colorida.png" alt="Agroconsult" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-slate-700">
            Inteligencia de dados, estrategia e presenca em campo para proteger margens e destravar valor no agronegocio
            brasileiro.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
              <Mail size={14} className="text-brand-green" />
              Contatos
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-green" />
                <a href="mailto:agroconsult@agroconsult.com.br" className="hover:text-brand-green">
                  agroconsult@agroconsult.com.br
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Endereco</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green" />
                <span>Florianopolis | Sao Paulo</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Navegacao</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
              <Link className="hover:text-brand-green" to="/">
                Home
              </Link>
              <Link className="hover:text-brand-green" to="/produtos">
                Produtos
              </Link>
              <Link className="hover:text-brand-green" to="/palestras">
                Palestras
              </Link>
              <Link className="hover:text-brand-green" to="/quem-somos">
                Quem somos
              </Link>
              <Link className="hover:text-brand-green" to="/privacidade">
                Politica de privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-navy text-center text-xs text-white/80">
        <div className="page-container flex flex-wrap items-center justify-center gap-3 py-3">
          <span>Agroconsult - Todos os direitos reservados</span>
          <Link className="font-semibold hover:text-brand-green" to="/privacidade">
            Politica de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
