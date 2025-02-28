"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Desarrollo = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push( `/desarrolloweb ` ); 
  };

  return (
    <div className="relative h-full flex items-center justify-center bg-white text-black py-1 px-1 overflow-hidden">
      {/* Contenedor del fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: `url('/assets/logo-pagina.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: ".2",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl text-center p-6 rounded-lg">
        <h2 className="text-sm uppercase">Potencia tu presencia digital</h2>
        <h1 className="text-3xl font-bold mt-2">
          Desarrollo Web de Alto Impacto
        </h1>

        <div className="flex flex-col items-center gap-10 mt-10">
          {/* Primera Sección */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-900/90 text-white p-4 rounded-lg">
            Mejorar la experiencia del usuario (UX), Crear interfaces intuitivas y atractivas que faciliten la navegación y hagan que los usuarios interactúen de manera más efectiva con el sitio.


            </p>
            <img
              src="/assets/proyectos/jla.jpg"
              className="rounded-lg"
              alt="Imagen 1"
              width={400}
              height={250}
            />
          </div>

          {/* Segunda Sección */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-900/90 text-white p-4 rounded-lg">
            Desarrollamos plataformas que puedan manejar un alto volumen de tráfico o usuarios sin perder rendimiento, y que se puedan adaptar fácilmente al crecimiento futuro.

Innovación y diferenciación donde creamos soluciones que se destaquen de la competencia, bien sea por un diseño único, funciones novedosas o tecnologías innovadoras.
            </p>
            <img
              src="/assets/proyectos/portfoio.jpg"
              className="rounded-lg"
              alt="Imagen 2"
              width={400}
              height={150}
            />
          </div>

          {/* Botón con navegación */}

          <button onClick={handleNavigation} className="bg-purple-300/20 border-2 border-purple-700 text-purple-700 px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-700 hover:text-white">
            Nuestras páginas web
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
