"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url(/assets/fondo.png)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 w-full max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10">
        {/* TEXTO */}
        <div className="text-white w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            HACEMOS DE TU MARCA ALGO ÚNICO
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
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
        <div className="w-full md:w-[45%] max-w-[900px] flex justify-center md:justify-end px-4">
          <Image
            src="/assets/imagen-ilu.png"
            width={900}
            height={600}
            alt="Mockup"
            className="object-contain w-full h-auto md:rotate-[-8deg]"
            style={{ opacity }}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
