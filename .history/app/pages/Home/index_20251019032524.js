"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "../../lib/i18n";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { t, isLoaded, currentLang } = useTranslation();

  // Eliminado el scroll listener que causaba conflictos

  const opacity = Math.max(1 - scrollY / 500, 0);


  return (
    <motion.div
      key={`${currentLang}-${forceRender}`}
      className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ 
        backgroundImage: "url('/assets/fondoprincipal.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      
      {/* Efectos de movimiento de lamparones */}
      <div className="absolute inset-0 opacity-30">
        {/* Lamparón 1 - Movimiento horizontal */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(236, 72, 153, 0.4) 50%, transparent 70%)',
            top: '20%',
            left: '-10%',
            animation: 'moveHorizontal 8s ease-in-out infinite alternate'
          }}
        ></div>
        
        {/* Lamparón 2 - Movimiento vertical */}
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
            top: '60%',
            right: '-5%',
            animation: 'moveVertical 10s ease-in-out infinite alternate'
          }}
        ></div>
        
        {/* Lamparón 3 - Movimiento diagonal */}
        <div 
          className="absolute w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
            top: '40%',
            left: '50%',
            animation: 'moveDiagonal 12s ease-in-out infinite alternate'
          }}
        ></div>
        
        {/* Lamparón 4 - Movimiento circular */}
        <div 
          className="absolute w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)',
            top: '10%',
            right: '30%',
            animation: 'moveCircular 15s linear infinite'
          }}
        ></div>
      </div>
      
      {/* Overlay sutil para contraste del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center gap-6 py-8 text-center">
        {/* TEXTO CENTRADO */}
        <div className="text-white px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {isLoaded ? t("home.hero.title") : "Conectamos los valores de tu marca con los resultados de tu negocio"}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] leading-relaxed max-w-4xl mx-auto">
            {isLoaded ? t("home.hero.subtitle") : "Nuestro único propósito es ayudarte a potenciar tu identidad."}
          </p>
        </div>

        {/* BOTONES CENTRADOS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/541131199882?text=Hola!%20Quisiera%20agendar%20una%20llamada%20para%20conocer%20más%20sobre%20los%20servicios%20de%20DeamonDD.%20💻"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-violet-800 hover:text-white hover:bg-transparent hover:border-2 hover:border-violet-950 border-2 border-transparent font-semibold transition-all duration-200 rounded-lg shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex items-center justify-center gap-2 text-base min-w-[180px]"
            aria-label="Agendar una llamada"
          >
            {isLoaded ? t("development.scheduleCall") : "Agendá una llamada"}
          </a>
          <a
            href="#equipo"
            className="px-6 py-3 text-white font-semibold hover:text-pink-200 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-violet-950 focus:ring-offset-2 rounded-lg flex items-center justify-center gap-2 text-base min-w-[180px] border border-white/20 hover:border-violet-950"
            aria-label="Conocer la agencia"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {isLoaded ? t("branding.knowAgency") : "Conocé la agencia"}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
