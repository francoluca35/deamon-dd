import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-0"
      style={{ backgroundImage: 'url(/assets/fondo.png)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenido principal */}
      <div className="z-10 text-center text-white w-full max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          HACEMOS DE TU MARCA ALGO ÚNICO
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Somos una agencia de diseño & desarrollo web, nuestro único propósito es ayudarte a potenciar tu empresa.
        </p>
        <button className="px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition rounded-lg">
          NUESTRO EQUIPO
        </button>
      </div>

      {/* Imagen principal para mobile y única en responsive */}
      <div className="relative w-full flex justify-center items-center mt-8">
        <Image
          src="/assets/pages.png"
          width={600}
          height={400}
          alt="Mockup Responsive"
          className="object-contain rounded-lg"
        />
      </div>

      {/* Imágenes flotantes solo en pantallas grandes */}
      <div className="hidden md:block relative w-full flex justify-center items-center mt-16">
        <div className="absolute transform rotate-[-10deg] left-[-10%] md:left-[-16%]">
          <Image
            src="/assets/pages.png"
            width={900}
            height={600}
            alt="Mockup 1"
            className="object-contain"
          />
        </div>
        <div className="absolute transform rotate-[-20deg] left-[35%] w-[30%] ml-[12%] mt-[-22%]">
          <Image
            src="/assets/joa.jpg"
            width={600}
            height={600}
            alt="Mockup 2"
            className="object-contain rounded-[10%]"
          />
        </div>
        <div className="absolute transform rotate-[10deg] scale-x-[-1] left-[30%] mt-[35%]">
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
