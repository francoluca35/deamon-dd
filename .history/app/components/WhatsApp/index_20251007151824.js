"use client";
import React from "react";
import Image from "next/image";

const FloatingWhatsApp = () => {
  const phone = "+541131199882";
  const message = "Hola!, Quisiera mas información acerca de los servicios ofrecidos de deamonDD.😃";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-30 rounded-full shadow-lg transition duration-200 ease-in-out animate-float-slow focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 hover:scale-110 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 whatsapp-mobile"
      aria-label="Contactar por WhatsApp"
      tabIndex={0}
      style={{
        marginBottom: 'max(env(safe-area-inset-bottom, 0px), 16px)',
        marginRight: 'max(env(safe-area-inset-right, 0px), 16px)'
      }}
    >
      <Image
        src="/assets/whatsapp.avif"
        alt="Contactar por WhatsApp - Deamon DD"
        width={64}
        height={64}
        className="w-full h-full object-cover rounded-full"
        priority
      />
    </a>
  );
};

export default FloatingWhatsApp;
