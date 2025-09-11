'use client'
import { Pencil, ArrowRightCircle, Building, User } from "lucide-react";
import { useRouter } from "next/navigation";

const Diseño = () => {

  const router = useRouter();

  const handleNavigation = () => {
    router.push( `/graphic ` ); 
  };

  return (
    <div id="diseno-grafico" className=" bg-black w-full relative max-w-screen-xl mx-auto   py-16 px-4 sm:px-6">
   
      <h2 className="text-3xl font-bold text-left  text-white mb-10">
        Composición visual para una imagen profesional
      </h2>
    
      <div className="grid md:grid-cols-2 gap-10">
      
        <div className="flex gap-4">
          <Pencil className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Creación de Logo</h3>
            <p className="text-gray-200">
              Estudiamos tu identidad, evaluamos el target de tus clientes y sus
              preferencias, para en conjunto llevar a cabo una creación de Logo
              experta que represente los valores e ideales de tu organización.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <ArrowRightCircle className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Creación de Folletos
            </h3>
            <p className="text-gray-200">
              Llevamos a cabo composiciones de alto impacto visual y personalizadas de
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
              toda organización requiere para diferenciarse del resto.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <User className="text-violet-800 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Creación de Tarjetas personales
            </h3>
            <p className="text-gray-200">
              Creamos tu tarjeta personal con la información fundamental que
              debe contener y una estética que siga el estilo de tu compañía.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center mt-6">
        <button onClick={handleNavigation} className="bg-purple-300/100 border-2 border-purple-700 text-purple-700 px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-700 hover:text-white">
          Nuestros proyectos
        </button>
      </div>
    </div>
  );
};

export default Diseño;
