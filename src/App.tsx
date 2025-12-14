import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Palestras from "./pages/Palestras";
import QuemSomos from "./pages/QuemSomos";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ScrollTopButton from "./components/ScrollTopButton";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-brand-light text-brand-navy">
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
      <Footer />
    </div>
  );
}

export default App;
