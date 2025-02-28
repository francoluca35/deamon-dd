import { Pencil, Building } from "lucide-react";
import Image from "next/image";

const PCompetition = () => {
  return (
    <div className="relative py-12 px-4 sm:px-6 mx-auto bg-gradient-to-br from-black via-purple-900 to-black">
      <h2 className="text-2xl sm:text-3xl font-bold text-left text-white mb-8 sm:mb-10">
        Diseño vehicular de competición
      </h2>

      {/* Contenido en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 place-items-center">
        {/* Columna Izquierda - Textos */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <Pencil className="text-violet-300 w-6 h-6 sm:w-8 sm:h-8" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Diseño vehicular para competición
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
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
            <Building className="text-violet-300 w-6 h-6 sm:w-8 sm:h-8" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">.................</h3>
              <p className="text-gray-300 text-sm sm:text-base">
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
        <div className="flex justify-center w-full">
          <Image 
            src="/assets/GVC.jpeg" 
            alt="Imagen 1" 
            width={400} 
            height={400} 
            className="rounded-lg w-10/12 sm:w-8/12 md:w-10/12 max-w-sm sm:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PCompetition;