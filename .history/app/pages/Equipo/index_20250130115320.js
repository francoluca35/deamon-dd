'use client'
import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "Markito P.",
    role: "Diseñador, Co-CEO",
    image: "/assets/marcos.jpeg",
    hoverImage: "/assets/marcos-hover.jpg"
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
  
  {
    name: "Tobias B.",
    role: "Desarrollador",
    image: "/images/toto.jpg",
    hoverImage: "/images/toto-hover.jpg"
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
      className="relative w-full h-80 overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverPercentage(0)}
    >
      <Image
        src={defaultImage}
        alt={alt}
        width={320}
        height={320}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Image
        src={hoverImage}
        alt={alt}
        width={320}
        height={320}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - hoverPercentage}% 0 0)` }}
      />
    </div>
  );
}

export default function Equipo() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-8">
        Agencia de Diseño & Desarrollo
      </h2>
      <div className="grid grid-cols-2 grid-flow-col justify-center gap-8">
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
