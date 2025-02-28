import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/fondo.png)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenedor de texto */}
      <div className="ml-10 md:ml-44 z-10 text-left text-white w-auto">
        <h1 className="text-4xl md:text-6xl md:w-full w-72 sm:-ml-24 font-bold mb-4">
          HACEMOS DE TU MARCA ALGO ÚNICO
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-xl sm:-ml-24 md:w-full w-72">
          Somos una agencia de diseño & desarrollo web, nuestro único propósito es ayudarte a potenciar tu empresa.
        </p>

        {/* Imagen única en responsive (mobile/tablet) */}
        <div className="block md:hidden w-full flex justify-center mb-4">
          <Image
            src="/assets/pages.png"
            width={400}
            height={300}
            alt="Mockup Responsive"
            className="object-contain rounded-lg"
          />
        </div>

        <button className="px-6 py-3 border sm:-ml-24 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition rounded-lg">
          NUESTRO EQUIPO
        </button>
      </div>

      {/* Imágenes flotantes solo en desktop */}
      <div className="hidden md:flex relative w-full justify-center items-center mt-8 md:mt-16">
        <div className="absolute transform rotate-[-10deg] z-10 left-[-10%] md:left-[-16%]">
          <Image
            src="/assets/pages.png"
            width={900}
            height={600}
            alt="Mockup 1"
            className="object-contain -ml-20 "
          />
        </div>
        <div className="absolute transform rotate-[-20deg] z-10 left-[35%] w-[30%] ml-[12%] mt-[-22%]">
          <Image
            src="/assets/joa.jpg"
            width={700}
            height={700}
            alt="Mockup 2"
            className="object-contain rounded-[10%] sm:ml-6 sm:w-screen"
          />
        </div>
        <div className="absolute transform rotate-[10deg] scale-x-[-1] z-10 left-[30%] mt-[35%]">
          <Image
            src="/assets/dessing.png"
            width={500}
            height={600}
            alt="Mockup 3"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
