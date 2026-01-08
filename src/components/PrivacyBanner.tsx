import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const STORAGE_KEY = "agroconsult-privacy-ack";

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "true") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // If storage fails, still allow dismissing for this session.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-[360px]"
      role="region"
      aria-label="Aviso de privacidade"
    >
      <div className="flex flex-col gap-3 rounded-2xl border border-brand-gray/15 bg-white/90 p-4 text-brand-navy shadow-lg backdrop-blur">
        <div className="space-y-1 text-sm text-slate-700">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray">Aviso de privacidade</p>
          <p>
            Usamos dados para melhorar sua experiência e prestar nossos serviços. Leia a nossa Política de Privacidade.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Link to="/politica-de-privacidade" className="btn-secondary !px-4 !py-2 text-xs">
            Ver política
          </Link>
          <button type="button" className="btn-secondary !px-4 !py-2 text-xs" onClick={handleAccept}>
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
