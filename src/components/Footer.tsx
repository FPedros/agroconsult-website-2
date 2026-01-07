import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const XIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M18.244 2H21l-6.4 7.317L22 22h-6.828l-5.34-6.95L3.4 22H1l6.84-7.81L2 2h6.999l4.83 6.215L18.244 2Zm-2.39 18h1.89L8.24 3.98H6.19l9.665 16.02Z"
    />
  </svg>
);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fernando-sousa-05b2a0258/",
    icon: <Linkedin size={18} />
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/agroconsult_br",
    icon: <Instagram size={18} />
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/agroconsult.consultoria/",
    icon: <Facebook size={18} />
  },
  {
    label: "X",
    href: "https://x.com/agroconsult_br",
    icon: <XIcon />
  }
];

export function Footer() {
  return (
    <footer id="site-footer" className="border-t border-brand-gray/20 bg-white/95 backdrop-blur">
      <div className="bg-white/95">
        <div className="page-container grid gap-8 py-8 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="flex w-full flex-col items-start gap-4">
            <img
              src="/images/logo-colorida.png"
              alt="Logotipo"
              className="h-12 w-auto max-w-[240px] object-contain"
            />
            <div>
              
              <div className="mt-3 flex flex-wrap items-center gap-3 text-slate-700">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-transparent hover:bg-brand-gradient hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_16px_40px_rgba(0,0,0,0.2)]"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 text-sm text-slate-700">
            <h4 className="text-sm font-bold text-brand-navy">Mapa do site</h4>
            <nav className="grid gap-2 sm:grid-cols-2">
              <Link to="/" className="transition hover:text-brand-green">Home</Link>
              <Link to="/produtos" className="transition hover:text-brand-green">Produtos</Link>
              <Link to="/palestras" className="transition hover:text-brand-green">Palestras</Link>
              <Link to="/quem-somos" className="transition hover:text-brand-green">Quem somos</Link>
              <Link to="/politica-de-privacidade" className="transition hover:text-brand-green">Politica de Privacidade</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-brand-navy text-center text-xs text-white/80">
        <div className="page-container flex flex-wrap items-center justify-center gap-2 py-3">
          <span>Todos os direitos reservados.</span>
          <Link to="/politica-de-privacidade" className="underline underline-offset-4 hover:text-brand-green">
            Politica de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
