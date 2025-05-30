'use client'
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();

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
  const message = "Hola!, Quisiera mas información acerca de los servicios ofrecidos de deamonDD.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start gap-6 text-center md:text-left">
          {/* Desarrollo Web */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Desarrollo Web</h2>
            <ul className="space-y-2 text-sm">

              <li>
                <a
                  className="text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => handleNavigation("vision")}
                >
                  Visión
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => handleNavigation("trabajos")}
                >
                  Nuestros Trabajos
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => handleNavigation("servicios")}
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          {/* Diseño Gráfico */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Diseño Gráfico</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation2("servicios")}
                >
                  Diseño de logos
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation2("servicios")}
                >
                  Diseño gráfico
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation("servicios")}
                >
                  Diseño vehicular de competición
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleNavigation2("servicios")}
                >
                  Diseño UI/UX
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="w-full sm:w-full md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Redes Sociales</h2>
            <div className="flex justify-center md:justify-start space-x-6 mt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/deamon.dd?igsh=MTFtZGNhNTl3ODFsYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/deamon-company-129808354/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:deamoncompany18@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea de separación y créditos */}
        <div className="mt-10 border-t border-purple-950 pt-4 text-center text-sm text-gray-400">
          Created by @<span className="text-purple-800">Deamon Company.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
