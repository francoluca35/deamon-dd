'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Especialidades() {
  const especialidades = [
    { titulo: "DESARROLLO WEB", imagen: "/assets/grafic.jpg" },
    { titulo: "DISEÑO GRAFICO", imagen: "/assets/diseño-web.jpg" },
    { titulo: "GRAFICA VEHICULAR DE COMPETICIÓN", imagen: "/assets/GVC.jpeg" },
    { titulo: "DESARROLLO SOFTWARE", imagen: "/assets/software.jpg" },
  ];

  const [visible, setVisible] = useState(Array(especialidades.length).fill(false));

  // Función para manejar el scroll y la visibilidad de los elementos
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.especialidad-titulo');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        // Si el elemento está dentro de la vista, hacer que sea visible
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true; // Marcamos el índice como visible
            return newVisible;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Llamamos a la función al inicio para revisar la visibilidad
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="bg-black text-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nuestras Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20 ">
          {especialidades.map((item, index) => (
            <div
              key={index}
              className="bg-purple-900/40 opacity-1 rounded-xl p-6 text-center flex flex-col items-center relative overflow-visible w-full sm:w-80 md:w-auto h-72 md:h-80"
            >
              {/* Título con efecto de desvanecimiento */}
              <h3
                className={`especialidad-titulo text-lg md:text-2xl font-bold mb-3 relative z-10 uppercase transition-opacity duration-500 ease-in-out ${
                  visible[index] ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }} // Retraso para cada uno
              >
                {item.titulo}
              </h3>
              
              <p className="text-sm md:text-base">Lorem ipsum dolor sit amet.</p>
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-10/12 md:w-9/12 h-auto rounded-lg absolute bottom-[-20px] md:bottom-[-30px] shadow-lg z-10"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
