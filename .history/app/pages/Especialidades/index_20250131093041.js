export default function Especialidades() {
    const especialidades = [
      { titulo: "DESARROLLO WEB", imagen: "/assets/grafic.jpg" },
      { titulo: "DISEÑO GRAFICO", imagen: "/assets/diseño-web.jpg" },
      { titulo: "DISEÑO UI/UX", imagen: "/assets/grafic.jpg" },
      { titulo: "DESARROLLO SOFTWARE", imagen: "/assets/diseño-web.jpg" },
    ];
  
    return (
        <section className="bg-black text-white py-12 px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {especialidades.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 text-center flex flex-col items-center relative overflow-visible">
              <h3 className="text-xl font-bold mb-4 relative z-10">{item.titulo}</h3>
              <img src={item.imagen} alt={item.titulo} className="w-[90%] h-auto rounded-lg absolute bottom-[-20%]" />
            </div>
          ))}
        </div>
      </section>
    );
  }
  