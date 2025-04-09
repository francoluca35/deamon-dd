"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

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
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/assets/fondo.png)" }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Contenido principal */}
      <div className="z-10 px-6 sm:px-12 w-full max-w-7xl">
        <div className="text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            HACEMOS DE TU MARCA ALGO ÚNICO
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-xl">
            Somos una agencia de diseño & desarrollo web, nuestro único
            propósito es ayudarte a potenciar tu empresa.
          </p>

          {/* Imagen visible solo en mobile */}
          <div className="block md:hidden w-full flex justify-center mb-4">
            <Image
              src="/assets/imagen-ilu.png"
              width={500}
              height={400}
              alt="Mockup Responsive"
              className="object-contain rounded-lg"
              style={{ opacity }}
            />
          </div>

          {/* Botón */}
          <div className="flex w-full justify-center md:justify-start">
            <button
              onClick={handleScrollToEquipo}
              className="px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition rounded-lg"
            >
              NUESTRO EQUIPO
            </button>
          </div>
        </div>
      </div>

      {/* Imagen decorativa visible solo en desktop */}
      <div className="hidden md:flex absolute bottom-0 right-0 w-full justify-end pr-12">
        <Image
          src="/assets/imagen-ilu.png"
          width={700}
          height={500}
          alt="Mockup"
          className="object-contain"
          style={{ opacity }}
        />
      </div>
    </div>
  );
}
