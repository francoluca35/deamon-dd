"use client";
import Image from "next/image";
import { useState } from "react";
import fondo from '@/public/assets/fondo-equipo.png'

const teamMembers = [
  {
    name: "Franco P.",
    role: "Desarrollador, CEO",
    image: "/assets/yo-3.jpeg",
    hoverImage: "/assets/yo-hover.jpg",
  },
  {
    name: "Joaquin L.",
    role: "Diseñador",
    image: "/images/joaquin.jpg",
    hoverImage: "/images/joaquin-hover.jpg",
  },
  {
    name: "Markito P.",
    role: "Diseñador",
    image: "/assets/marcos.jpg",
    hoverImage: "/assets/marco-hover.jpg",
  },
  {
    name: "Tobias B.",
    role: "Desarrollador",
    image: "/images/toto.jpg",
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
    className="relative w-full h-full sm:h-80 aspect-square overflow-hidden rounded-lg"
    onMouseMove={handleMouseMove}
    onMouseLeave={() => setHoverPercentage(0)}
  >
  
  <Image
  src={defaultImage}
  alt={alt}
  layout="fill"
  objectFit="cover"
  objectPosition="center"
/>
<Image
  src={hoverImage}
  alt={alt}
  layout="fill"
  objectFit="cover"
  objectPosition="center"
  style={{ clipPath: `inset(0 ${100 - hoverPercentage}% 0 0)` }}
/>

    </div>
  );
}

export default function Equipo() {
  return (
    <section className="relative bg-black text-white py-12 px-6 overflow-hidden">
      {/* Fondo con imagen en la mitad izquierda */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${fondo.src})`, opacity: ".2" }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-center text-2xl sm:text-5xl md:text-5xl uppercase font-bold mb-8">
          Agencia de Diseño & Desarrollo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-purple-900/40 p-6 rounded-lg w-full sm:w-80 h-full  text-center relative mx-auto"
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
