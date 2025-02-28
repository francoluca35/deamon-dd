'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Especialidades() {
  
    const especialidades = [
      { titulo: "DESARROLLO WEB",descripcion:"El desarrollo web es la clave para llevar tu negocio al siguiente nivel. No se trata solo de tener una página bonita, sino de crear una plataforma estratégica que convierta visitantes en clientes. Un sitio web bien diseñado mejora la visibilidad de tu marca, genera confianza y optimiza la experiencia del usuario, permitiendo que tus clientes encuentren lo que buscan con facilidad", imagen: "/assets/grafic.jpg" },
      { titulo: "DISEÑO GRAFICO", imagen: "/assets/diseño-web.jpg" },
      { titulo: "GRAFICA VEHICULAR DE COMPETICIÓN", imagen: "/assets/GVC.jpeg" },
      { titulo: "DESARROLLO SOFTWARE", imagen: "/assets/software.jpg" },
    ];
    const [opacity, setOpacity] = useState(0);
  // Función para manejar el scroll y la opacidad del título
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("habilidad");
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
        <section id="habilidad" className="bg-black text-white py-16 px-4 flex flex-col items-center">
          <h2 
          className="text-center text-2xl sm:text-5xl md:text-5xl uppercase font-bold mb-8"
          style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
          >Nuestras Habilidades
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20 ">
            {especialidades.map((item, index) => (
              <div key={index} className="bg-purple-900/40 opacity-1 rounded-xl p-6 text-center flex flex-col items-center relative overflow-visible w-full sm:w-80 md:w-auto h-72 md:h-80">
                <h3 className="text-lg md:text-xl font-bold mb-3 relative z-10">{item.titulo}</h3>
                <p className="text-sm md:text-base">{item.descripcion}.</p>
                <img src={item.imagen} alt={item.titulo} className="w-10/12 md:w-9/12 h-auto rounded-lg absolute bottom-[-20px] md:bottom-[-30px] shadow-lg z-10" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
