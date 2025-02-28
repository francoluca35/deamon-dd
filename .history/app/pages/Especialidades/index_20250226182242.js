'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Especialidades() {
  const [opacity, setOpacity] = useState(0);
    const especialidades = [
      { titulo: "DESARROLLO WEB", imagen: "/assets/grafic.jpg" },
      { titulo: "DISEÑO GRAFICO", imagen: "/assets/diseño-web.jpg" },
      { titulo: "GRAFICA VEHICULAR DE COMPETICIÓN", imagen: "/assets/GVC.jpeg" },
      { titulo: "DESARROLLO SOFTWARE", imagen: "/assets/software.jpg" },
    ];
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
      <div>
        <section id="equipo" className="bg-black text-white py-16 px-4 flex flex-col items-center">
          <h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
          >Nuestras Habilidades
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20 ">
            {especialidades.map((item, index) => (
              <div key={index} className="bg-purple-900/40 opacity-1 rounded-xl p-6 text-center flex flex-col items-center relative overflow-visible w-full sm:w-80 md:w-auto h-72 md:h-80">
                <h3 className="text-lg md:text-xl font-bold mb-3 relative z-10">{item.titulo}</h3>
                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet.</p>
                <img src={item.imagen} alt={item.titulo} className="w-10/12 md:w-9/12 h-auto rounded-lg absolute bottom-[-20px] md:bottom-[-30px] shadow-lg z-10" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
