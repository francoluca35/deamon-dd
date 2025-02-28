'use client'
import Image from "next/image";

export default function Especialidades() {
    const especialidades = [
      { titulo: "DESARROLLO WEB", imagen: "/assets/grafic.jpg" },
      { titulo: "DISEÑO GRAFICO", imagen: "/assets/dise\u00f1o-web.jpg" },
      { titulo: "GRAFICA VEHICULAR DE COMPETICIÓN", imagen: "/assets/GVC.jpeg" },
      { titulo: "DESARROLLO SOFTWARE", imagen: "/assets/dise\u00f1o-web.jpg" },
    ];
  
    return (
      <div>
        <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestras Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
            {especialidades.map((item, index) => (
              <div key={index} className="bg-violet-800 rounded-xl p-8 text-center flex flex-col items-center relative overflow-visible w-[500px] h-80">
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.titulo}</h3>
                <p>lorem</p>
                <img src={item.imagen} alt={item.titulo} className="w-9/12 md:h-52 h-auto rounded-lg absolute bottom-[-30px] shadow-lg z-20" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
