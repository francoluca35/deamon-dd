'use client'
import Image from "next/image";

export default function Especialidades() {
    const especialidades = [
      { titulo: "DESARROLLO WEB", imagen: "/assets/grafic.jpg" },
      { titulo: "DISEÑO GRAFICO", imagen: "/assets/diseño-web.jpg" },
      { titulo: "DISEÑO UI/UX", imagen: "/assets/grafic.jpg" },
      { titulo: "DESARROLLO SOFTWARE", imagen: "/assets/diseño-web.jpg" },
    ];
  
    return (
        <section className="bg-black text-white py-20 px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {especialidades.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 text-center flex flex-col items-center relative overflow-hidden w-full h-80">
              <h3 className="text-xl font-bold mb-4 relative z-10">{item.titulo}</h3>
          
              <img src={item.imagen} alt={item.titulo} className="w-11/12 xl:h-5/6 sm:h-auto  md:h-auto rounded-lg mt-auto shadow-lg" />
      
            
            </div>
          ))}
        </div>
      </section>
    );
  }