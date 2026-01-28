"use client";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/home/deamon-icon-B-desarrollo.png"
              alt="DeamonDD Logo"
              width={150}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Agencia de desarrollo web y software especializada en crear 
              soluciones digitales de alto impacto para empresas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#vision" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#trabajos" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#Servicio" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/541131199882" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  +54 11 3119 9882
                </a>
              </li>
              <li>
                <a 
                  href="mailto:deamoncompany18@gmail.com"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  deamoncompany18@gmail.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/deamondd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com/company/deamondd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://github.com/francoluca35"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://wa.me/541131199882"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} DeamonDD. Todos los derechos reservados.
          </p>
          <Link href="/" className="text-gray-600 hover:text-white text-sm transition-colors">
            ← Volver al sitio principal
          </Link>
        </div>
      </div>
    </footer>
  );
}
