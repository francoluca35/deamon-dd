'use client'
import React, { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/1234567890"; // Reemplaza con tu número de WhatsApp
  const [isHovering, setIsHovering] = useState(false);

  // Para agregar la animación de subir y bajar
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovering((prev) => !prev);
    }, 1000); // Cambia cada 3 segundos (ajusta según lo necesites)
    
    return () => clearInterval(interval);
  }, []);
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
     className="fixed bottom-5 right-5 z-20 rounded-full p-2 shadow-lg hover:bg-green-600 transition duration-200 ease-in-out animation-float-slow"
    >
      <img
        src="/assets/whatsapp.png" // Ruta a la imagen en la carpeta public
        alt="WhatsApp"
        className="w-16 h-16 object-cover"
      />
    </a>
  );
};

export default FloatingWhatsApp;
