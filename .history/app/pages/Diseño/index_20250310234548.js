'use client'
import { Pencil, ArrowRightCircle, Building, User } from "lucide-react";
import { useRouter } from "next/navigation";

const Diseño = () => {

  const router = useRouter();

  const handleNavigation = () => {
    router.push( `/graphic ` ); 
  };

  return (
    <div id="diseno-grafico" className="relative max-w-screen-xl mx-auto   py-16 px-4 sm:px-6">
   
      <h2 className="text-3xl font-bold text-left  text-white mb-10">
        Diseño gráfico para una imagen profesional
      </h2>
    
      <div className="grid md:grid-cols-2 gap-10">
      
        <div className="flex gap-4">
          <Pencil className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Diseño de Logo</h3>
            <p className="text-gray-200">
              Estudiamos tu marca, evaluamos el target de tus clientes y sus
              preferencias, para en conjunto llevar a cabo un diseño de Logo
              profesional que represente los valores e ideales de tu empresa.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <ArrowRightCircle className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Diseño de Folletos
            </h3>
            <p className="text-gray-200">
              Llevamos a cabo diseños de alto impacto visual y personalizados de
              folletos (Doble faz, Dípticos, Trípticos).
            </p>
          </div>
        </div>

    
        <div className="flex gap-4">
          <Building className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Identidad corporativa
            </h3>
            <p className="text-gray-200">
              La identidad corporativa es un conjunto de elementos gráficos que
              toda empresa requiere para diferenciarse del resto.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <User className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Diseño de Tarjetas personales
            </h3>
            <p className="text-gray-200">
              Diseñamos tu tarjeta personal con la información fundamental que
              debe contener y una estética que siga el estilo de tu empresa.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center mt-6">
        <button onClick={handleNavigation} className="bg-purple-300/100 border-2 border-purple-700 text-purple-700 px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-700 hover:text-white">
          Nuestros diseños
        </button>
      </div>
    </div>
  );
};

export default Diseño;
