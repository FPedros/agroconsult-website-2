import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Palestras from "./pages/Palestras";
import QuemSomos from "./pages/QuemSomos";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ScrollTopButton from "./components/ScrollTopButton";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PrivacyBanner from "./components/PrivacyBanner";
import FloatingContactPrompt from "./components/FloatingContactPrompt";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    let attempts = 0;

    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        if (id === "contato-form" && window.innerWidth >= 1024) {
          const rect = target.getBoundingClientRect();
          const top = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
          window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    const interval = window.setInterval(() => {
      attempts += 1;
      if (tryScroll() || attempts > 20) {
        window.clearInterval(interval);
      }
    }, 100);

    return () => window.clearInterval(interval);
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-brand-light text-brand-navy">
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </main>
      <ScrollTopButton />
      <FloatingContactPrompt />
      <PrivacyBanner />
      <Footer />
    </div>
  );
}

export default App;
