import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/fondo.png)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenedor de texto */}
      <div className="ml-10 md:ml-44 z-10 text-left text-white w-auto">
        <h1 className="text-4xl md:text-6xl md:w-full w- font-bold mb-4">
          HACEMOS DE TU MARCA ALGO ÚNICO
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-xl md:w-full sm:w-full w-72">
          Somos una agencia de diseño & desarrollo web, nuestro único propósito es ayudarte a potenciar tu empresa.
        </p>

        {/* Imagen única en responsive (mobile/tablet) */}
        <div className="block md:hidden w-full flex justify-center mb-4">
          <Image
            src="/assets/imagen-ilu.png"
            width={500}
            height={400}
            alt="Mockup Responsive"
            className="object-contain rounded-lg"
          />
        </div>

        <button className="px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition rounded-lg">
          NUESTRO EQUIPO
        </button>
      </div>

      {/* Imágenes flotantes solo en desktop */}
      <div className="hidden md:flex relative w-full justify-center items-center mt-8 md:mt-16">
        <div className="absolute transform rotate-[-10deg] z-10 -ml-20 md:-ml-10 sm:-ml-20">
          <Image
            src="/assets/imagen-ilu.png"
            width={900}
            height={600}
            alt="Mockup 1"
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}
