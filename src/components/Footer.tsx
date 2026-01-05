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
    <footer id="site-footer" className="border-t border-brand-gray/20 bg-white/90 backdrop-blur">
      <div className="page-container flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full max-w-sm flex-col items-start gap-4">
          <img
            src="/images/logo-colorida.png"
            alt="Logotipo"
            className="h-12 w-auto max-w-[240px] object-contain"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Redes sociais</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-slate-700">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition hover:-translate-y-0.5 hover:border-brand-green hover:text-brand-green"
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

        <div className="w-full max-w-2xl rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h4 className="text-sm font-bold text-brand-navy">Contato</h4>
          <form className="mt-4 grid gap-3 text-sm text-slate-700" onSubmit={(event) => event.preventDefault()}>
            <label className="grid gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Assunto</span>
              <select
                name="assunto"
                required
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-brand-green"
              >
                <option value="">Selecione...</option>
                <option value="imprensa">Imprensa</option>
                <option value="projetos">Projetos</option>
                <option value="consultoria">Consultoria</option>
                <option value="avaliacao-patrimonial">Avaliacao Patrimonial</option>
                <option value="rally-da-safra">Rally da Safra</option>
              </select>
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email corporativo</span>
              <input
                type="email"
                name="email"
                required
                inputMode="email"
                pattern="^[A-Za-z0-9._%+-]+@(?!gmail\\.com$)(?!hotmail\\.com$)(?!outlook\\.com$)(?!yahoo\\.com$)(?!icloud\\.com$)(?!bol\\.com\\.br$)(?!uol\\.com\\.br$)(?!terra\\.com\\.br$)(?!live\\.com$)(?!msn\\.com$)[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
                title="Use um email institucional (ex: nome@empresa.com)."
                placeholder="nome@empresa.com"
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-brand-green"
                />
              </label>
            <label className="grid gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mensagem</span>
              <textarea
                name="mensagem"
                rows={4}
                required
                placeholder="Conte rapidamente o que voce precisa."
                className="resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-brand-green"
              />
            </label>
            <div className="sm:flex sm:justify-end">
              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-brand-navy px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-brand-green sm:w-auto"
              >
                Enviar contato
              </button>
            </div>
          </form>
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
