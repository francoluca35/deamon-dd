import Image from "next/image";
import fondo from '@/public/assets/logo-pagina.jpg';

const Desarrollo = () => {
  return (
    <div className="relative h-full flex items-center justify-center bg-white text-black py-1  px-1 overflow-hidden">
      {/* Contenedor del fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: `url(${fondo.src})`,
          backgroundSize: "contain", 
          backgroundPosition: "center", 
          opacity:".2",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl text-center  p-6 rounded-lg ">
        <h2 className="text-sm uppercase">Potencia tu presencia digital</h2>
        <h1 className="text-3xl font-bold mt-2">Desarrollo Web de Alto Impacto</h1>

        <div className="flex flex-col items-center gap-10 mt-10">
          {/* Primera Sección (Texto izquierda, Imagen derecha) */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-900/90 text-white p-4 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
            </p>
            <Image src="/assets/joa.jpg" alt="Imagen 1" width={200} height={150} />
          </div>

          {/* Segunda Sección (Imagen izquierda, Texto derecha) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-900/90 text-white p-4 rounded-lg">
              Curabitur euismod metus in libero bibendum, a interdum erat facilisis. Integer ac sapien id sapien feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est ac velit laoreet vehicula.
            </p>
            <Image src="/assets/joa.jpg" alt="Imagen 2" width={200} height={150} />
          </div>

          <button className="bg-purple-300/20 border-2 border-purple-700 text-purple-700 px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-700 hover:text-white">
  Nuestras paginas web
</button>

        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
