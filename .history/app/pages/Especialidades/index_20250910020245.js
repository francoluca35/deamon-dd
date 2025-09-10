"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Especialidades() {
  
    const especialidades = [
      { titulo: "CREACIÓN DIGITAL", descripcion: "La construcción de sistemas tecnológicos es la clave para llevar tu negocio al siguiente nivel. No se trata solo de tener una página bonita, sino de crear un sistema estratégico que convierta visitantes en clientes", imagen: "/assets/grafic.jpg" },
      { titulo: "IDENTIDAD VISUAL", descripcion: "Potenciamos tu marca con identidad visual única y profesional.", imagen: "/assets/diseño-web.jpg" },
      { titulo: "GRÁFICA VEHICULAR DE COMPETICIÓN", descripcion: "Diseños impactantes para que tu vehículo destaque en las pistas.", imagen: "/assets/GVC.jpeg" },
      { titulo: "CONSTRUCCIÓN SOFTWARE", descripcion: "Soluciones digitales a medida para optimizar tu negocio.", imagen: "/assets/software.jpg" },
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
              <div key={index} className="bg-purple-900/40 rounded-xl p-6 text-center flex flex-col items-center relative overflow-hidden w-80 md:w-96 h-80">
                <h3 className="text-lg md:text-xl font-bold mb-3">{item.titulo}</h3>
                <p className="text-sm md:text-base flex-grow text-ellipsis overflow-hidden">{item.descripcion}</p>
                <div className="relative w-full flex justify-center mt-4">
                  <Image 
                    src={item.imagen} 
                    alt={`${item.titulo} - Servicio de Deamon DD`}
                    width={300}
                    height={128}
                    className="w-4/5 h-32 object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
