"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importar framer-motion

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);

  const handleScrollToEquipo = () => {
    const equipoSection = document.getElementById("equipo");
    if (equipoSection) {
      equipoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="relative w-full  h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/fondo.png)" }}
      initial={{ opacity: 0, y: 50 }} // Inicio con opacidad 0 y un pequeño desplazamiento hacia abajo
      animate={{ opacity: 1, y: 0 }} // Finaliza con opacidad 1 y posición normal
      transition={{ duration: 1, ease: "easeOut" }} // Configura la animación
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 max-w-screen-xl w-full px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-left text-white mb-10 md:mt-0 -mt-60 md:mb-0 md:w-1/2">
          <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold mb-4 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            HACEMOS DE TU MARCA ALGO ÚNICO
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left mb-6 max-w-xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            Somos una agencia de diseño & desarrollo web, nuestro único
            propósito es ayudarte a potenciar tu empresa.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleScrollToEquipo}
              className="px-6 py-3 border border-purple-400 text-white font-semibold hover:bg-purple-500 hover:text-white transition rounded-lg shadow-md"
            >
              NUESTRO EQUIPO
            </button>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="hidden md:block w-[45%] max-w-[900px] transform rotate-[-8deg]">
          <Image
            src="/assets/imagen-ilu.png"
            width={900}
            height={600}
            alt="Mockup"
            className="object-contain w-full h-auto"
            style={{ opacity }}
          />
        </div>
      </div>

      {/* Responsive solo en mobile */}
      <div className="md:hidden absolute mb-40 bottom-10 w-full flex justify-center px-4">
        <Image
          src="/assets/imagen-ilu.png"
          width={500}
          height={400}
          alt="Mockup Responsive"
          className="object-contain rounded-lg"
          style={{ opacity }}
        />
      </div>
    </motion.div>
  );
}
