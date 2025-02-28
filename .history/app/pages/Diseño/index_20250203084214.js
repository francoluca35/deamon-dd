import { Pencil, ArrowRightCircle, Building, User } from "lucide-react";
import fondo from '@/public/assets/DISEÑO.png';


const Diseño = () => {
  return (
    <div className="relative min-h-screen   py-16 px-6  mx-auto">
        <div
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center z-0"
              style={{
                backgroundImage: `url(${fondo.src})`,
                backgroundSize: "contain", 
                backgroundPosition: "center", 
               
              }}/>
      {/* Título */}
      <h2 className="text-3xl font-bold text-left max-w-6xl text-white mb-10">
        Diseño gráfico para una imagen profesional
      </h2>

      {/* Contenido en dos columnas */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Primera columna */}
        <div className="flex gap-4">
          <Pencil className="text-blue-500 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Diseño de Logo</h3>
            <p className="text-gray-200">
              Estudiamos tu marca, evaluamos el target de tus clientes y sus preferencias, para en conjunto llevar a cabo un diseño de Logo profesional que represente los valores e ideales de tu empresa.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <ArrowRightCircle className="text-blue-500 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Diseño de Folletos</h3>
            <p className="text-gray-200">
              Llevamos a cabo diseños de alto impacto visual y personalizados de folletos (Doble faz, Dípticos, Trípticos).
            </p>
          </div>
        </div>

        {/* Segunda columna */}
        <div className="flex gap-4">
          <Building className="text-blue-500 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Identidad corporativa</h3>
            <p className="text-gray-200">
              La identidad corporativa es un conjunto de elementos gráficos que toda empresa requiere para diferenciarse del resto.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <User className="text-blue-500 w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold text-white">Diseño de Tarjetas personales</h3>
            <p className="text-gray-200">
              Diseñamos tu tarjeta personal con la información fundamental que debe contener y una estética que siga el estilo de tu empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseño;


