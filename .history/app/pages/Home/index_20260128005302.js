"use client";
import { useState, useEffect, memo } from "react";
import Image from "next/image";
import { useTranslation } from "../../lib/i18n";

const Home = memo(function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { t, isLoaded, currentLang } = useTranslation();

  // Eliminado el scroll listener que causaba conflictos

  const opacity = Math.max(1 - scrollY / 500, 0);


  return (
    <div className="hero-critical px-4 overflow-hidden">
      
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
        {/* TEXTO CENTRADO - Ultra optimizado para LCP */}
        <div className="text-white px-4 w-full lcp-optimized">
          <h1 className="hero-title mb-4">
            {t("home.hero.title")}
          </h1>
          <p className="hero-subtitle mb-6 max-w-4xl mx-auto">
            {t("home.hero.subtitle")}
          </p>
        </div>

        {/* BOTONES CENTRADOS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/541131199882?text=Hola!%20Quisiera%20agendar%20una%20llamada%20para%20conocer%20más%20sobre%20los%20servicios%20de%20DeamonDD.%20💻"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-violet-800 hover:text-white hover:bg-transparent hover:border-2 hover:border-violet-950 border-2 border-transparent font-semibold transition-all duration-200 rounded-lg shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex items-center justify-center gap-2 text-base min-w-[180px]"
            aria-label="Envíanos un mensaje"
          >
            {t("development.scheduleCall")}
          </a>
          <a
            href="#equipo"
            className="px-6 py-3 text-white font-semibold hover:text-pink-200 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-violet-950 focus:ring-offset-2 rounded-lg flex items-center justify-center gap-2 text-base min-w-[180px] border border-white/20 hover:border-violet-950"
            aria-label="Conocer la agencia"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {t("branding.knowAgency")}
          </a>
        </div>

        {/* ICONO ANIMADO CON PELOTITA */}
        <div className="mt-24 flex flex-col items-center">
          <div 
            className="relative w-12 h-20"
            style={{
              animation: 'bounceIcon 2s ease-in-out infinite'
            }}
          >
            {/* Contenedor del icono tipo rectángulo redondeado */}
            <svg 
              viewBox="0 0 40 70" 
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Rectángulo redondeado (forma de cápsula) */}
              <rect 
                x="4" 
                y="4" 
                width="32" 
                height="62" 
                rx="16" 
                ry="16" 
                stroke="#8b5cf6" 
                strokeWidth="2" 
                fill="transparent"
              />
              {/* Pelotita interior ovalada con animación */}
              <ellipse 
                cx="20" 
                cy="35" 
                rx="6" 
                ry="10" 
                fill="#8b5cf6"
                style={{
                  animation: 'bounceBall 1.5s ease-in-out infinite'
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Estilos para las animaciones */}
      <style jsx>{`
        @keyframes bounceIcon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounceBall {
          0%, 100% {
            cy: 45;
          }
          50% {
            cy: 35;
          }
        }
      `}</style>
    </div>
  );
});

export default Home;
