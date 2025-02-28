"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Especialidades() {
  
    const especialidades = [
      { titulo: "DESARROLLO WEB", descripcion: "El desarrollo web es la clave para llevar tu negocio al siguiente nivel. No se trata solo de tener una página bonita, sino de crear una plataforma estratégica que convierta visitantes en clientes.", imagen: "/assets/grafic.jpg" },
      { titulo: "DISEÑO GRAFICO", descripcion: "El diseño gráfico da vida a tu marca con creatividad y estrategia visual.", imagen: "/assets/diseño-web.jpg" },
      { titulo: "GRAFICA VEHICULAR DE COMPETICIÓN", descripcion: "Potencia la presencia de tu equipo con diseños innovadores y personalizados.", imagen: "/assets/GVC.jpeg" },
      { titulo: "DESARROLLO SOFTWARE", descripcion: "Creamos soluciones a medida para optimizar procesos y mejorar la eficiencia empresarial.", imagen: "/assets/software.jpg" },
    ];

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("habilidad");
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setOpacity(Math.min(1, (window.innerHeight - rect.top) / 300));
        } else {
          setOpacity(0);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div>
        <section id="habilidad" className="bg-black text-white py-16 px-4 flex flex-col items-center">
          <h2 
            className="text-center text-2xl sm:text-5xl md:text-5xl uppercase font-bold mb-8"
            style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
          >
            Nuestras Habilidades
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20">
            {especialidades.map((item, index) => (
              <div key={index} className="bg-purple-900/40 rounded-xl p-6 text-center flex flex-col items-center relative overflow-hidden w-full sm:w-80 md:w-auto h-72 md:h-80">
                <h3 className="text-lg md:text-xl font-bold mb-3 relative z-10">{item.titulo}</h3>
                <p className="text-sm md:text-base flex-grow overflow-hidden line-clamp-3">{item.descripcion}</p>
                <img 
                  src={item.imagen} 
                  alt={item.titulo} 
                  className="w-10/12 md:w-9/12 h-auto rounded-lg absolute bottom-5 md:bottom-5 shadow-lg z-10"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
