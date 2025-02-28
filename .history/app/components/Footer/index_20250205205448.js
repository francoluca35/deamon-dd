import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-blackgray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 justify-center">
            {/* Desarrollo Web */}
            <div>
              <h2 className="text-lg font-bold mb-2">Desarrollo Web</h2>
              <ul className="space-y-1">
                <li>Páginas Web Simples</li>
                <li>Páginas Web Profesionales</li>
                <li>Páginas Web Catálogo</li>
                <li>Páginas Web Ecommerce</li>
              </ul>
            </div>
  
            {/* Diseño Gráfico */}
            <div>
              <h2 className="text-lg font-bold mb-2">Diseño Gráfico</h2>
              <ul className="space-y-1">
                <li>Diseño de logos</li>
                <li>Diseño gráfico de alto impacto</li>
                <li>Diseño vehicular de competición</li>
                <li>Diseño UI/UX</li>
              </ul>
            </div>
  
            {/* Redes Sociales */}
            <div>
              <h2 className="text-lg font-bold mb-2">Redes Sociales</h2>
              <div className="flex space-x-4 mt-2">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaWhatsapp className="text-2xl"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                 <FaInstagram className="text-2xl"/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaLinkedin className="text-2xl"/>
                </a>
                <a href="mailto:example@gmail.com" className="text-gray-400 hover:text-white">
                 <FaEnvelope className="text-2xl"/>
                </a>
              </div>
            </div>
            
          </div>
  
          {/* Logo */}
      
  
          <div className=" border-t border-purple-950 pt-4 text-center text-sm text-gray-100">
            Created by @Deamon Company.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  