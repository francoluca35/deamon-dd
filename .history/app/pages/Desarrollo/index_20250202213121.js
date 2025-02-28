import Image from "next/image";
import fondo from '@/public/assets/deamon-2-N.png'
const Desarrollo = () => {
  return (
    <div className="relative bg-white text-black py-12 px-6 flex justify-center items-center min-h-screen overflow-hidden">
         <div
                className="absolute top-0 left-0 w-screen h-full bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${fondo.src})`, opacity:"1" }}
              />
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-center text-sm uppercase">Potencia tu presencia digital</h2>
        <h1 className="text-center text-3xl font-bold mt-2">
          Desarrollo Web de Alto Impacto
        </h1>

        <div className="flex flex-col items-center gap-10 mt-10">
          {/* Primera Sección (Texto arriba, Imagen abajo) */}
          <div className="flex flex-col items-center gap-6 w-full">
            <p className="w-full md:w-3/4 bg-purple-700 text-black p-4 rounded-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
            </p>
            <Image src="/assets/joa.jpg" alt="Imagen 1" width={150} height={100} className="rounded-lg" />
          </div>

          {/* Segunda Sección (Texto arriba, Imagen abajo) */}
          <div className="flex flex-col items-center gap-6 w-full">
            <p className="w-full md:w-3/4 bg-purple-700 text-black p-4 rounded-lg text-center">
              Curabitur euismod metus in libero bibendum, a interdum erat facilisis. Integer ac sapien id sapien feugiat.
            </p>
            <Image src="/assets/joa.jpg" alt="Imagen 2" width={150} height={100} className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;