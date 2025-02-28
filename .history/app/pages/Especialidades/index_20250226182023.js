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
  const [titleVisible, setTitleVisible] = useState(false); // Estado para el título

  // Función para manejar el scroll y la visibilidad de los elementos
  useEffect(() => {
    const handleScroll = () => {
      const title = document.querySelector('.especialidades-titulo');
      const titleRect = title?.getBoundingClientRect();

      // Si el título está dentro de la vista, hacer que sea visible
      if (titleRect && titleRect.top < window.innerHeight && titleRect.bottom >= 0) {
        setTitleVisible(true);
      }

      // Mostrar especialidades con efecto de visibilidad
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
    handleScroll(); // Llamamos a la función al inicio para revisar la visibilidad

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="bg-black text-white py-16 px-4 flex flex-col items-center">
        {/* Título con desvanecimiento */}
        <h2
          className={`especialidades-titulo text-2xl md:text-3xl font-bold mb-8 text-center transition-opacity duration-500 ease-in-out ${
            titleVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: `100ms` }} // Retraso para el título
        >
          Nuestras Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20 ">
          {especialidades.map((item, index) => (
            <div
              key={index}
              className="bg-purple-900/40 opacity-1 rounded-xl p-6 text-center flex flex-col items-center relative overflow-visible w-full sm:w-80 md:w-auto h-72 md:h-80"
            >
              {/* Título de especialidad con desvanecimiento */}
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
