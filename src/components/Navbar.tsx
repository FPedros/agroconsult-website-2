import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { usePrimaryGradientHover } from "../hooks/usePrimaryGradientHover";
import logoBranca from "/images/logo-branca.png";
import logoColorida from "/images/logo-colorida.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Palestras", to: "/palestras" },
  { label: "Produtos", to: "/produtos" },
  { label: "Quem somos", to: "/quem-somos" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const desktopPrimaryHover = usePrimaryGradientHover();
  const mobilePrimaryHover = usePrimaryGradientHover();

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contato");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById("contato");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerSolid = scrolled || open || location.pathname === "/politica-de-privacidade";
  const linkBase = headerSolid ? "text-brand-navy hover:text-brand-green" : "text-white hover:text-brand-green";
  const activeClass =
    (headerSolid ? "text-brand-green" : "text-white") +
    " md:border-none md:after:absolute md:after:left-0 md:after:bottom-0 md:after:h-[3px] md:after:w-full md:after:rounded-full md:after:bg-brand-gradient md:after:content-['']";
  const logoSrc = headerSolid ? logoColorida : logoBranca;
  const headerClasses = [
    "fixed left-0 top-0 z-50 w-full transition-all duration-300",
    headerSolid ? "bg-white/95 border-b border-brand-gray/15 shadow-sm backdrop-blur-md" : "bg-transparent border-transparent"
  ].join(" ");

  return (
    <header className={headerClasses}>
      <div className="page-container flex items-center justify-between py-3 md:py-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              scrollToHero();
            }
            close();
          }}
        >
          <div className="relative">
            <img src={logoSrc} alt="Agroconsult" className="h-10 w-auto transition duration-300" />
          </div>
        </Link>

        <div className="ml-auto hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                [
                  "relative text-sm font-semibold transition-colors",
                  linkBase,
                  isActive ? activeClass : ""
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
          </nav>
          <button type="button" onClick={scrollToContact} className="btn-primary" {...desktopPrimaryHover}>
            Fale com um especialista
          </button>
        </div>

        <button
          className={
            "rounded-full border p-2 md:hidden " +
            (headerSolid ? "border-brand-gray/40 text-brand-navy" : "border-white/70 text-white")
          }
          aria-label="Abrir menu"
          onClick={() => setOpen((state) => !state)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="page-container bg-white pb-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3 text-brand-navy">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                className={({ isActive }) =>
                  [
                    "rounded-xl px-3 py-2 text-sm font-semibold hover:bg-brand-green/10",
                    isActive ? "bg-brand-green/10 text-brand-green" : ""
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                scrollToContact();
                close();
              }}
              className="btn-primary justify-center"
              {...mobilePrimaryHover}
            >
              Fale com um especialista
            </button>
          </div>
          <p className="mt-3 text-xs text-brand-gray">
            {location.pathname === "/" ? "Home" : location.pathname.replace("/", "")}
          </p>
        </div>
      )}
    </header>
  );
}

export default Navbar;
