"use client";
import React from "react";

const FloatingWhatsApp = () => {
  const phone = "+541131199882";
  const message = "Hola!, Quisiera mas información acerca de los servicios ofrecidos de deamonDD.😃";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-20 rounded-full p-2 shadow-lg transition duration-200 ease-in-out animate-float-slow focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 hover:scale-110"
      aria-label="Contactar por WhatsApp"
      tabIndex={0}
    >
      <img
        src="/assets/whatsapp.png"
        alt="Contactar por WhatsApp - Deamon DD"
        className="w-16 h-16 object-cover"
      />
    </a>
  );
};

export default FloatingWhatsApp;
