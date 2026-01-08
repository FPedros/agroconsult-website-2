import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingContactPrompt() {
  return (
    <div className="fixed bottom-12 right-5 z-50 md:bottom-6">
      <Link
        to="/#contato"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg transition hover:-translate-y-0.5"
        aria-label="Falar com especialista"
      >
        <MessageCircle size={18} />
      </Link>
    </div>
  );
}
