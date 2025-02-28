import React from "react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/1234567890"; // Reemplaza con tu número de WhatsApp

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-16 h-16  rounded-full p-2 shadow-lg hover:bg-green-600 transition duration-200 ease-in-out"
    >
      <img
        src="/assets/whatsapp.png" // Ruta a la imagen en la carpeta public
        alt="WhatsApp"
        className="w-16 h-full object-cover"
      />
    </a>
  );
};

export default FloatingWhatsApp;
