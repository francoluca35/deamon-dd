"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Desarrollo = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/desarrolloweb `);
  };

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("desarrollo");
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
    <div
      id="desarrollo"
      className="relative h-full flex items-center justify-center bg-white text-black py-1 px-1 overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: `url('/assets/fondo-const.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: ".2",
        }}
      />

     
    </div>
  );
};

export default Desarrollo;
