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
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 md:gap-8 justify-center place-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg w-64 text-center">
            <HoverImage defaultImage={member.image} hoverImage={member.hoverImage} alt={member.name} />
            <h3 className="text-lg font-semibold mt-1">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
{/* <div className="grid grid-flow-col grid-rows-2 gap-4 xl:gap-20 justify-center "> */}