import { Pencil, Building } from "lucide-react";
import Image from "next/image";

const PCompetition = () => {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="max-w-[60%] mx-auto"> {/* Ajusta este porcentaje según el ancho del navbar */}
        <h2 className="text-2xl sm:text-3xl font-bold text-left text-white mb-8 sm:mb-10">
          Diseño vehicular de competición
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Sección de Texto */}
          <div className="flex flex-col gap-6 text-left">
            <div className="flex gap-4 items-start">
              <Pencil className="text-violet-300 w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Diseño vehicular para competición
                </h3>
                <p className="text-gray-300 text-base">
                  Creamos diseños personalizados para vehículos de competición, 
                  optimizando su estética y funcionalidad para el máximo rendimiento.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Building className="text-violet-300 w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Branding y Patrocinio
                </h3>
                <p className="text-gray-300 text-base">
                  Desarrollamos la identidad visual de tu equipo de competición, 
                  integrando patrocinadores y colores estratégicos para mayor impacto.
                </p>
              </div>
            </div>
          </div>

          {/* Sección de Imagen */}
          <div className="flex justify-center md:justify-end">
            <Image 
              src="/assets/GVC.jpeg" 
              alt="Imagen de competición" 
              width={400} 
              height={400} 
              className="rounded-lg w-10/12 sm:w-8/12 md:w-10/12 max-w-sm sm:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCompetition;


