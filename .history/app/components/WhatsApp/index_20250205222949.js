'use client'
import React from "react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/1234567890"; 


  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
     className="fixed bottom-5 right-5 z-20 rounded-full p-2 shadow-lg transition duration-200 ease-in-out animation-float-slow"
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
