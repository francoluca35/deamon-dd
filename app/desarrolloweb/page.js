"use client";

import Navdesarrollo from "../components/Navbar/navbardesarrollo";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import TrabajosSection from "./pages/Desarrollosoft";
import Pricing from "./pages/Trabajos";
import Footer from "./pages/Footer";
import { FaWhatsapp } from "react-icons/fa";

const Website = () => {
  const phone = "+541131199882";
  const message = "Hola, me gustaría conocer más sobre los servicios de desarrollo web de Deamon Estudio.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-black text-white">
      <Navdesarrollo />
      
      {/* Hero Section */}
      <div className="min-h-screen bg-[url('https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/home/fondoweb.jpg')] bg-cover bg-center bg-fixed relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.95) 100%)'
          }}
        />
        <div className="relative z-10">
          <Home />
        </div>
      </div>

      {/* Vision/Services Section */}
      <Vision />

      {/* Projects Section */}
      <TrabajosSection />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
        style={{
          marginBottom: 'max(env(safe-area-inset-bottom, 0px), 16px)',
          marginRight: 'max(env(safe-area-inset-right, 0px), 16px)'
        }}
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default Website;
