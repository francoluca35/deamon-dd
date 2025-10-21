"use client";
import { useRouter } from "next/navigation";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "../../lib/i18n";
import { useState, useEffect } from "react";

const Footer = () => {
  const router = useRouter();
  const { t, isLoaded, currentLang } = useTranslation();
  const [renderKey, setRenderKey] = useState(0);
  
  // Forzar re-render cuando cambia el idioma
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [currentLang]);

  const handleNavigation = (sectionId) => {
    router.push(`/desarrolloweb#${sectionId}`);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleNavigation2 = (sectionId) => {
    router.push(`/graphic#${sectionId}`);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const phone = "+541131199882";
  const message =
    "Hola!, Quisiera más información acerca de los servicios ofrecidos de DeamonDD.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer className="bg-[#1a0033] py-12" key={`${currentLang}-${renderKey}`}>
      <div className="w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Columna 1: Información de la empresa y redes sociales */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-violet-300">Deamon</span>
              <span className="text-2xl font-bold text-violet-300">DD</span>
            </div>
            
            {/* Descripción */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Somos una agencia de diseño y desarrollo web profesional ubicada en Buenos Aires, Argentina. 
              Nuestro objetivo es lograr un sitio web que genere ventas y ganancias para tu empresa.
            </p>
            
            {/* Call to action */}
            <div>
              <p className="text-violet-300 font-semibold text-sm mb-3">¡Seguinos!</p>
              <div className="flex space-x-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white hover:bg-violet-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/deamon.dd?igsh=MTFtZGNhNTl3ODFsYg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white hover:bg-violet-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deamon-company-129808354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white hover:bg-violet-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-violet-300 mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-xs" />
                </div>
                <a 
                  href="mailto:deamoncompany18@gmail.com"
                  className="text-violet-300 hover:text-violet-200 text-sm"
                >
                  deamoncompany18@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xs" />
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 hover:text-violet-200 text-sm"
                >
                  +54 11 3119-9882
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="text-white text-xs" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>
          </div>

          {/* Columna 3: Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-violet-300 mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-violet-200 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/desarrolloweb" className="text-gray-300 hover:text-violet-200 transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="/graphic" className="text-gray-300 hover:text-violet-200 transition-colors">
                  Diseño Gráfico
                </a>
              </li>
              <li>
                <a href="/branding" className="text-gray-300 hover:text-violet-200 transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="/marketing" className="text-gray-300 hover:text-violet-200 transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-violet-200 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea de separación y créditos */}
        <div className="mt-12 border-t border-violet-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2024{" "}
            <span className="text-violet-300 font-semibold">Deamon DD</span>. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
