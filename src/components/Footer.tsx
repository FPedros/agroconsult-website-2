import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";

export function Footer() {
  const footerPrimaryHover = usePrimaryGradientHover();

  return (
    <footer className="border-t border-brand-gray/20 bg-white/90 backdrop-blur">
      <div className="page-container flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-md flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/images/logo-colorida.png" alt="Agroconsult" className="h-10 w-auto" />
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gray">Agroconsult</div>
          </div>
          <p className="text-sm text-slate-700">
            Inteligência de dados, estratégia e presença em campo para proteger margens e destravar valor no
            agronegócio brasileiro.
          </p>
          <div className="flex gap-3">
            <Link to="/historia" className="btn-secondary">
              Nossa história
            </Link>
            <Link to="/produtos" className="btn-primary" {...footerPrimaryHover}>
              Produtos
            </Link>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Contatos</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-green" />
                <a href="tel:+551134421441" className="hover:text-brand-green">
                  +55 (11) 3442-1441
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-green" />
                <a href="mailto:contato@agroconsult.com.br" className="hover:text-brand-green">
                  contato@agroconsult.com.br
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Endereço</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green" />
                <span>São Paulo • Curitiba • Porto Alegre • Cuiabá</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Navegação</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
              <Link className="hover:text-brand-green" to="/">
                Home
              </Link>
              <Link className="hover:text-brand-green" to="/produtos">
                Produtos
              </Link>
              <Link className="hover:text-brand-green" to="/historia">
                História
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-navy text-center text-xs text-white/80">
        <div className="page-container py-3">
          © {new Date().getFullYear()} Agroconsult. Inteligência de dados e campo para o agro.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
