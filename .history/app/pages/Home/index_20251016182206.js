"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Eliminado el scroll listener que causaba conflictos

  const opacity = Math.max(1 - scrollY / 500, 0);


  return (
    <motion.div
      className="relative w-full min-h-screen ios-viewport-fix mobile-viewport mobile-home-extended flex items-center justify-center px-4 overflow-hidden"
      style={{ 
        backgroundImage: "url('/assets/fondoprincipal.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "120vh"
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      
      {/* Overlay sutil para contraste del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center gap-8 py-16 ios-safe-area mobile-safe-area mobile-home-content text-center">
        {/* TEXTO CENTRADO */}
        <div className="text-white px-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] max-w-none">
            Conectamos los valores de tu marca con los resultados de tu negocio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] leading-relaxed max-w-3xl mx-auto">
           Nuestro único propósito es ayudarte a potenciar tu identidad.
          </p>
        </div>

        {/* BOTONES CENTRADOS */}
        <div className="flex flex-col -mt-4 sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="https://wa.me/541131199882?text=Hola!%20Quisiera%20agendar%20una%20llamada%20para%20conocer%20más%20sobre%20los%20servicios%20de%20DeamonDD.%20💻"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-violet-800 hover:text-white hover:bg-transparent hover:border-4 hover:border-violet-950 border-2 border-transparent font-semibold transition-all duration-200 rounded-lg shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex items-center justify-center gap-2 text-lg min-h-[56px] min-w-[200px]"
            aria-label="Agendar una llamada"
          >
            Agendá una llamada
          </a>
          <a
            href="#equipo"
            className="px-8 py-4 text-white font-semibold hover:text-pink-200 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-violet-950 focus:ring-offset-2 rounded-lg flex items-center justify-center gap-2 text-lg min-h-[56px] min-w-[200px] border border-white/20 hover:border-violet-950"
            aria-label="Conocer la agencia"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Conocé la agencia
          </a>
        </div>
      </div>
    </motion.div>
  );
}
