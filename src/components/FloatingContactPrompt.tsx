import { MessageCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FloatingContactPrompt() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const target = document.getElementById("contato-form") || document.getElementById("contato");
    if (target) {
      if (window.innerWidth >= 1024) {
        const rect = target.getBoundingClientRect();
        const top = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    if (location.pathname !== "/") {
      navigate("/#contato-form");
    }
  };

  return (
    <div className="fixed bottom-2 right-5 z-50 md:bottom-6">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg transition hover:-translate-y-0.5"
        aria-label="Falar com especialista"
      >
        <MessageCircle size={18} />
      </button>
    </div>
  );
}
