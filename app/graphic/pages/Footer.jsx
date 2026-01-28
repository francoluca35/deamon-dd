"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">DEAMONDD</h3>
            <p className="text-gray-400 text-sm">Estudio Creativo de Diseño</p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <a href="#servicios" className="hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/deamondd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/deamondd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/541131199882"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} DeamonDD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
