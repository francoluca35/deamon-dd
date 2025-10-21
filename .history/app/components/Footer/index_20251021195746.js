"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaShare,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const phone = "+541131199882";
  const message = "Hola!, Quisiera más información acerca de los servicios ofrecidos de DeamonDD.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleNewsletterSubmit = () => {
    // Mostrar modal
    setShowModal(true);
    
    // Cerrar el modal después de 5 segundos
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  return (
    <footer className="bg-[#1d0b2b] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Columna 1: Logo y Descripción */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* Logo Deamon DD */}
            <div className="flex items-center">
              <Image
                src="https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/home/deamon-icon-B-s.png"
                alt="Deamon DD Logo"
                width={180}
                height={90}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Años de experiencia avalan nuestro profesionalismo y nuestra capacidad. Cada desarrollo es un nuevo desafío y una nueva oportunidad para marcar tendencia en la web.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-bold mb-2">CONTACTO</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#ffffff]" />
                <p className="text-gray-300">Buenos Aires, Argentina</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-[#ffffff]" />
                <p className="text-gray-300">+54 11 3119-9882</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#ffffff]" />
                <a href="mailto:deamoncompany18@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  deamoncompany18@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-[#ffffff]" />
                <a href="https://deamondd.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  www.deamondd.com
                </a>
              </div>
            </div>
          </div>

          {/* Columna 3: Seguinos en las redes */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-bold mb-2">SEGUINOS EN LAS REDES</h3>
            <div className="flex space-x-3">
              <a href="https://wa.me/5491131199882" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                <FaWhatsapp className="text-lg" />
              </a>
              <a href="https://www.instagram.com/deamon.dd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/deamon-company-129808354/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
             
              <a href="https://www.youtube.com/@deamondd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Columna 4: Newsletter */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-bold mb-2">NEWSLETTER</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Suscribíte ahora, enterate de noticias de diseño, tecnología y obtené importantes descuentos.
            </p>
            <div className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 rounded-l-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#874ac3]"
              />
              <button 
                onClick={handleNewsletterSubmit}
                className="px-4 py-2 rounded-r-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <FaShare className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            Copyright © 2024{" "}
            <span className="font-semibold">Deamon DD</span>. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Modal de suscripción exitosa */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all duration-300">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/home/deamon-icon-B-s.png"
                alt="Deamon DD Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            
            {/* Icono de éxito */}
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-6xl text-green-500" />
            </div>
            
            {/* Mensaje */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                ¡Gracias por suscribirte!
              </h3>
              <p className="text-gray-600">
                Te has unido a nuestra comunidad. Recibirás las últimas noticias sobre diseño, tecnología y ofertas especiales.
              </p>
            </div>
            
            {/* Barra de progreso */}
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Este mensaje se cerrará automáticamente...
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
