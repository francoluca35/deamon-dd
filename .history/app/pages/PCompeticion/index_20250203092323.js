import { Pencil, ArrowRightCircle, Building, User } from "lucide-react";
import Image from "next/image";


const PCompetition = () => {
  return (
    <div className="relative    py-16 px-6  mx-auto">
  

      <h2 className="text-3xl font-bold text-left  text-white mb-10">
        Diseño vehicular de competición
      </h2>

      {/* Contenido en dos columnas */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex gap-4">
          <Pencil className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Diseño de Logo</h3>
            <p className="text-gray-200">
              Estudiamos tu marca, evaluamos el target de tus clientes y sus preferencias, para en conjunto llevar a cabo un diseño de Logo profesional que represente los valores e ideales de tu empresa.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
    
        </div>
        <div className="flex gap-4">
          <Building className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Identidad corporativa</h3>
            <p className="text-gray-200">
              La identidad corporativa es un conjunto de elementos gráficos que toda empresa requiere para diferenciarse del resto.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
        <Image src="/assets/joa.jpg" alt="Imagen 1" width={200} height={150} />
        </div>
      </div>
    </div>
  );
};

export default PCompetition;


