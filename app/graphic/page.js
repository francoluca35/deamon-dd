"use client";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";
import { FaWhatsapp } from "react-icons/fa";

const GraphicDesign = () => {
  const phone = "+541131199882";
  const message = "Hola, me gustaría conocer más sobre los servicios de diseño de Deamon Estudio.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section con imagen de fondo */}
      <div className="min-h-screen bg-[url('https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/home/fondoweb.jpg')] bg-cover bg-center bg-no-repeat relative">
        {/* Gradiente: muy oscuro, imagen apenas visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.75) 100%)'
          }}
        ></div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Flotante - Icono Blanco */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
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

export default GraphicDesign;
