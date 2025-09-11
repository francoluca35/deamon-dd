"use client";

import Navdesarrollo from "../components/Navbar/navbardesarrollo";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import TrabajosSection from "./pages/Desarrollosoft";
import Pricing from "./pages/Trabajos";
import ArrowUp from "../components/ArrowUp/ArrowUp";
import Footer from "./pages/Footer";

const Website = () => {
  return (
    <div className="text-white">
      <Navdesarrollo />
      
      {/* Sección Home con primera imagen */}
      <div className="min-h-screen bg-[url('/assets/fondoweb.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <Home />
        </div>
      </div>

      {/* Sección Vision con fondo sólido */}
      <div className="min-h-screen bg-gray-900 relative">
        <div className="relative z-10">
          <Vision />
        </div>
      </div>

      {/* Sección Trabajos con tercera imagen */}
      <div className="min-h-screen bg-[url('/assets/fondo1.avif')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <TrabajosSection />
        </div>
      </div>

      {/* Sección Pricing con fondo sólido */}
      <div className="min-h-screen bg-gray-800 relative">
        <div className="relative z-10">
          <Pricing />
        </div>
      </div>

      <ArrowUp />
      <Footer />
    </div>
  );
};

export default Website;
