import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const LinkedinIcon = () => (
  <svg
    aria-hidden="true"
    role="img"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <path
      fill="#0A66C2"
      d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
    />
    <path
      fill="#fff"
      d="M6.814 20.452H3.86V9h2.954v11.452zM5.337 7.433A1.71 1.71 0 115.34 4a1.71 1.71 0 01-.003 3.433zM20.452 20.452h-2.951v-5.569c0-1.328-.027-3.039-1.852-3.039-1.854 0-2.137 1.445-2.137 2.939v5.669H10.56V9h2.834v1.561h.04c.395-.75 1.362-1.543 2.807-1.543 3.004 0 3.21 1.977 3.21 4.549v6.885z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    role="img"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <defs>
      <linearGradient id="igGradientFooter" x1="1.5" y1="22.5" x2="22.5" y2="1.5" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#F58529" />
        <stop offset="0.35" stopColor="#FEDA77" />
        <stop offset="0.65" stopColor="#DD2A7B" />
        <stop offset="1" stopColor="#8134AF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#igGradientFooter)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.319.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.645.07 4.84 0 3.196-.012 3.575-.07 4.84-.062 1.366-.343 2.633-1.318 3.608-.975.976-2.242 1.257-3.608 1.319-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.343-3.608-1.319-.975-.975-1.256-2.242-1.318-3.608C2.175 15.578 2.163 15.2 2.163 12c0-3.195.012-3.574.07-4.84.062-1.366.343-2.633 1.318-3.608.975-.976 2.242-1.257 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.014 7.052.072 5.771.131 4.67.387 3.678 1.38 2.686 2.373 2.43 3.474 2.372 4.755 2.314 6.035 2.3 6.444 2.3 12c0 5.557.014 5.965.072 7.245.058 1.281.314 2.382 1.306 3.375.992.993 2.093 1.249 3.375 1.307 1.28.058 1.689.073 7.245.073s5.965-.015 7.245-.073c1.281-.058 2.382-.314 3.375-1.307.993-.993 1.249-2.094 1.307-3.375.058-1.28.072-1.689.072-7.245 0-5.556-.014-5.965-.072-7.245-.058-1.281-.314-2.382-1.307-3.375-.993-.993-2.094-1.249-3.375-1.307C17.965.014 17.556 0 12 0z"
    />
    <path
      fill="url(#igGradientFooter)"
      d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"
    />
    <circle cx="18.406" cy="5.594" r="1.44" fill="url(#igGradientFooter)" />
  </svg>
);

export function Footer() {
  return (
    <footer id="site-footer" className="border-t border-brand-gray/20 bg-white/90 backdrop-blur">
      <div className="page-container flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-md flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/images/logo-colorida.png" alt="Logotipo" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-slate-700">
            Inteligência de dados, estratégia e presença em campo para proteger margens e destravar valor no agronegócio brasileiro.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Contatos</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-green" />
                <a href="mailto:agroconsult@agroconsult.com.br" className="hover:text-brand-green">
                  agroconsult@agroconsult.com.br
                </a>
              </li>
            </ul>
            <div className="mt-3 flex items-center gap-3 text-slate-700">
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:-translate-y-0.5 hover:border-brand-green hover:text-brand-green"
                href="https://www.linkedin.com/company/agroconsult/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:-translate-y-0.5 hover:border-brand-green hover:text-brand-green"
                href="https://www.instagram.com/agroconsult_br/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Endereço</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green" />
                <span>Florianópolis, SC</span>
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
        <div className="page-container flex flex-wrap items-center justify-center gap-2 py-3">
          <span>Todos os direitos reservados.</span>
          <Link to="/politica-de-privacidade" className="underline underline-offset-4 hover:text-brand-green">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
