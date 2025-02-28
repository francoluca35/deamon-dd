"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import fondo from "@/public/assets/fondo-equipo.png";

const teamMembers = [
  {
    name: "Franco P.",
    role: "Desarrollador, CEO",
    image: "/assets/yo-franco.png",
    hoverImage: "/assets/yo-franco-hover.jpg",
  },
  {
    name: "Joaquin L.",
    role: "Diseñador",
    image: "/images/joaco.jpg",
    hoverImage: "/images/joaquin-hover.jpg",
  },
  {
    name: "Markito P.",
    role: "Diseñador",
    image: "/assets/marcos.j",
    hoverImage: "/assets/marco-hover.jpg",
  },
  {
    name: "Tobias B.",
    role: "Desarrollador",
    image: "/images/tobi.jpg",
    hoverImage: "/images/toto-hover.jpg",
  },
];

function HoverImage({ defaultImage, hoverImage, alt }) {
  const [hoverPercentage, setHoverPercentage] = useState(0);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const percentage = ((e.clientX - left) / width) * 100;
    setHoverPercentage(percentage);
  };

  return (
    <div
      className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square overflow-hidden rounded-lg mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverPercentage(0)}
    >
      <Image
        src={defaultImage}
        alt={alt}
        fill
        className="cover"
        priority
      />
      <Image
        src={hoverImage}
        alt={alt}
        fill
        className="cover"
        style={{ clipPath: `inset(0 ${100 - hoverPercentage}% 0 0)` }}
        priority
      />
    </div>
  );
}

export default function Equipo() {
  const [opacity, setOpacity] = useState(0);

  // Función para manejar el scroll y la opacidad del título
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("equipo");
      const rect = section.getBoundingClientRect();
      // Calculamos la opacidad dependiendo de la posición de la sección
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setOpacity(Math.min(1, (window.innerHeight - rect.top) / 300)); // Ajusta el valor de 300 para controlar el desvanecimiento
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Llamamos una vez al cargar para asegurar que la opacidad inicial sea correcta
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="equipo" className="relative bg-black text-white py-12 px-6 overflow-hidden">
      {/* Fondo con imagen en la mitad izquierda */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${fondo.src})`, opacity: ".2" }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        {/* Título con opacidad controlada por scroll */}
        <h2
          className="text-center text-2xl sm:text-5xl md:text-5xl uppercase font-bold mb-8"
          style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
        >
          Agencia de Diseño & Desarrollo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-purple-900/40 p-6 rounded-lg w-full sm:w-80  text-center relative mx-auto"
            >
              <HoverImage
                defaultImage={member.image}
                hoverImage={member.hoverImage}
                alt={member.name}
              />
              <br />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
