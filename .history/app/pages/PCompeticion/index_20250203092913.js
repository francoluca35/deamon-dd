import { Pencil, Building } from "lucide-react";
import Image from "next/image";

const PCompetition = () => {
  return (
    <div className="relative py-16 px-6 mx-auto bg-gradient-to-r from-black to-violet-900">
      <h2 className="text-3xl font-bold text-left text-white mb-10">
        Diseño vehicular de competición
      </h2>

      {/* Contenido en dos columnas */}
      <div className="grid md:grid-cols-2 gap-10 place-items-center">
        {/* Columna Izquierda - Textos */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <Pencil className="text-violet-300 w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Diseño vehicular para competición
              </h3>
              <p className="text-gray-300">
                ....................................................................
                ....................................................................
                ....................................................................
                ....................................................................
                ....................................................................
                ....................................................................
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Building className="text-violet-300 w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold text-white">.................</h3>
              <p className="text-gray-300">
                ....................................................................
                ....................................................................
                ....................................................................
                ....................................................................
                ....................................................................
                ....................................................................
              </p>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Imagen */}
        <div className="flex justify-center">
          <Image 
            src="/assets/joa.jpg" 
            alt="Imagen 1" 
            width={300} 
            height={250} 
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PCompetition;
