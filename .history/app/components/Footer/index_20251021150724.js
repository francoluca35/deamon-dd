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
    <footer className="bg-gradient-to-br from-black to-violet-950 text-white py-10" key={`${currentLang}-${renderKey}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-start gap-8 text-center sm:text-left">
          {/* Desarrollo Web */}
          <div className="w-full sm:w-1/3 md:w-1/4">
            <h2 className="text-lg font-bold mb-4">{isLoaded ? t("footer.webDevelopment") : "Desarrollo Web"}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#equipo"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  aria-label="Conocer nuestro equipo de desarrollo"
                >
                  {isLoaded ? t("footer.ourTeam") : "Nuestro Equipo"}
                </a>
              </li>
              <li>
                <a
                  href="#desarrollo"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  aria-label="Ver servicios de desarrollo web"
                >
                  {isLoaded ? t("footer.developmentServices") : "Servicios de Desarrollo"}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  onClick={() => handleNavigation("trabajos")}
                  aria-label="Ver trabajos de desarrollo web realizados"
                >
                  {isLoaded ? t("footer.ourWork") : "Nuestros Trabajos"}
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  aria-label="Contactar para desarrollo web"
                >
                  {isLoaded ? t("footer.contact") : "Contacto"}
                </a>
              </li>
            </ul>
          </div>

          {/* Diseño Gráfico */}
          <div className="w-full sm:w-1/3 md:w-1/4">
            <h2 className="text-lg font-bold mb-4">{isLoaded ? t("footer.graphicDesign") : "Diseño Gráfico"}</h2>
            <ul className="space-y-2 text-sm cursor-pointer">
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation2("servicios")}
                >
                  {isLoaded ? t("footer.logoDesign") : "Diseño de logos"}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation2("servicios")}
                >
                  {isLoaded ? t("footer.graphicDesign") : "Diseño gráfico"}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation("servicios")}
                >
                  {isLoaded ? t("footer.vehicleDesign") : "Diseño vehicular de competición"}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation2("servicios")}
                >
                  {isLoaded ? t("footer.uiuxDesign") : "Diseño UI/UX"}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-lg font-bold mb-4">{isLoaded ? t("footer.socialMedia") : "Redes Sociales"}</h2>
            <div className="flex justify-center sm:justify-start flex-wrap gap-4 mt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/deamon.dd?igsh=MTFtZGNhNTl3ODFsYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                aria-label="Seguir en Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/deamon-company-129808354/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                aria-label="Conectar en LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:deamoncompany18@gmail.com"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                aria-label="Enviar email"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea de separación y créditos */}
        <div className="mt-10 border-t border-cyan-900 pt-4 text-center text-sm text-gray-400">
          {isLoaded ? t("footer.createdBy") : "Created by"}{" "}
          <span className="text-neutral-500 hover:text-violet-40">
            Deamon DD
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
