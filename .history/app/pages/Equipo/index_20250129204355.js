'use client'
import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "Markito P.",
    role: "Diseñador, Co-CEO",
    image: "/images/markito.jpg",
    hoverImage: "/images/markito-hover.jpg"
  },
  {
    name: "Franco P.",
    role: "Desarrollador, CEO",
    image: "/assets/yo-3.jpeg",
    hoverImage: "/assets/yo-hover.jpg"
  },
  {
    name: "Joaquin L.",
    role: "Diseñador, Co-CEO",
    image: "/images/joaquin.jpg",
    hoverImage: "/images/joaquin-hover.jpg"
  },
];

function HoverImage({ defaultImage, hoverImage, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Image
      src={isHovered ? hoverImage : defaultImage}
      alt={alt}
      width={320}
      height={320}
      className="w-full h-80 object-cover rounded-lg mb-4 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default function Equipo() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-8">
        Agencia de Diseño & Desarrollo
      </h2>
      <div className="flex justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg w-80 text-center relative">
            <HoverImage defaultImage={member.image} hoverImage={member.hoverImage} alt={member.name} />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
