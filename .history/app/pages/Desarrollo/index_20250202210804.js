import Image from "next/image";
import fondo from '@/public/assets/fondo-desarrollo.png'
const Desarrollo = () => {
  return (
    <div className="relative bg-white text-black py-12 px-6 overflow-hidden">
         <div
                className="absolute top-0 left-0 w-screen h-full bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${fondo.src})`, opacity:"1" }}
              />
      <div className="relative z-10">
        <h2 className="text-center text-sm uppercase">Potencia tu presencia digital</h2>
        <h1 className="text-center text-white text-3xl font-bold mt-2">
          Desarrollo Web de Alto Impacto
        </h1>

        <div className="flex flex-col items-center gap-10 mt-10">
          {/* Primera Sección (Texto izquierda, Imagen derecha) */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-700 text-black p-4 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
            </p>
            <Image src="/assets/joa.jpg" alt="Imagen 1" width={200} height={150} />
          </div>

          {/* Segunda Sección (Imagen izquierda, Texto derecha) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-700 text-black p-4 rounded-lg">
              Curabitur euismod metus in libero bibendum, a interdum erat facilisis. Integer ac sapien id sapien feugiat.
            </p>
            <Image src="/assets/joa.jpg" alt="Imagen 1" width={200} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;