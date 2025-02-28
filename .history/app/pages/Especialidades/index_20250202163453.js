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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
          {especialidades.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 text-center flex flex-col items-center relative overflow-visible w-[500px] h-80">
              <h3 className="text-xl font-bold mb-4 relative z-10">{item.titulo}</h3>
              <p>lorem</p>
              <img src={item.imagen} alt={item.titulo} className="w-9/12 md:h-52 h-auto rounded-lg absolute bottom-[-30px] shadow-lg z-20" />
            </div>
          ))}
        </div>
      </section>
    );
  }
