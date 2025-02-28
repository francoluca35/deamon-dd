// desarrollo.js
import Image from "next/image";

const Desarrollo = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-center text-sm uppercase">Potencia tu presencia digital</h2>
      <h1 className="text-center text-3xl font-bold mt-2">
        Desarrollo Web de Alto Impacto
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        {/* Primera Sección */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <input
            type="text"
            placeholder="Escribe aquí..."
            className="w-80 h-24 bg-purple-700 text-white p-4 rounded-lg focus:outline-none"
          />
          {/* <Image src="/imagen1.png" alt="Imagen 1" width={200} height={150} /> */}
        </div>

        {/* Segunda Sección */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* <Image src="/imagen2.png" alt="Imagen 2" width={200} height={150} /> */}
          <input
            type="text"
            placeholder="Escribe aquí..."
            className="w-80 h-24 bg-purple-700 text-white p-4 rounded-lg focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
