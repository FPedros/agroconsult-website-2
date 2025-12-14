import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        "fixed bottom-6 right-6 z-40 rounded-full bg-brand-navy text-white shadow-lg ring-1 ring-black/5 transition duration-200 hover:bg-brand-green",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      ].join(" ")}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default ScrollTopButton;
