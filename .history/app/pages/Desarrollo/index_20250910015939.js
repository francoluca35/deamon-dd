"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Desarrollo = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/desarrolloweb `);
  };

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("desarrollo");
      const rect = section.getBoundingClientRect();
      // Calculamos la opacidad dependiendo de la posición de la sección
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setOpacity(Math.min(1, (window.innerHeight - rect.top) / 300)); // Ajusta el valor de 300 para controlar el desvanecimiento
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Llamamos una vez al cargar para asegurar que la opacidad inicial sea correcta
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="desarrollo"
      className="relative h-full flex items-center justify-center bg-white text-black py-1 px-1 overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: `url('/assets/logo-pagina.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: ".2",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl text-center p-6 rounded-lg">
        <h2
          className="text-sm uppercase"
          style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
        >
          Potencia tu presencia digital
        </h2>
        <h2
          className="text-center text-2xl sm:text-5xl md:text-5xl uppercase font-bold mb-8"
          style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
        >
          Construcción de Plataformas de Alto Impacto
        </h2>

        <div className="flex flex-col items-center gap-10 mt-10">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-900/90 text-white p-4 rounded-lg">
              Mejoramos la experiencia del usuario (UX), creando interfaces
              intuitivas y atractivas que faciliten la navegación y hagan que
              los usuarios interactúen de manera más efectiva con la plataforma online. 
              <a href="#equipo" className="text-purple-300 hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded" tabIndex={0}>Conoce nuestro equipo</a> 
              de expertos en <a href="/desarrolloweb" className="text-purple-300 hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded" tabIndex={0}>construcción de plataformas especializadas</a>.
            </p>
            <Image
              src="/assets/desarrollo-2.png"
              className="rounded-lg"
              alt="Construcción de plataformas especializadas con experiencia de usuario optimizada"
              width={400}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-6 w-full max-w-4xl">
            <p className="w-full md:w-1/2 bg-purple-900/90 text-white p-4 rounded-lg">
              Creamos plataformas que puedan manejar un alto volumen de
              tráfico o usuarios sin perder rendimiento, y que se puedan adaptar
              fácilmente al crecimiento futuro. Innovación y diferenciación
              donde generamos soluciones que se destaquen de la competencia, bien
              sea por una identidad visual única, funciones novedosas o tecnologías
              innovadoras.               <a href="#contacto" className="text-purple-300 hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded" tabIndex={0}>Contacta con nosotros</a> 
              para conocer más sobre nuestras <a href="/graphic" className="text-purple-300 hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded" tabIndex={0}>soluciones creativas</a>.
            </p>
            <Image
              src="/assets/desarrollo.png"
              className="rounded-lg"
              alt="Plataformas escalables y de alto rendimiento"
              width={400}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleNavigation}
              className="bg-purple-300/20 border-2 border-purple-700 text-purple-700 px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Ver ejemplos de sitios creados"
            >
              Nuestros proyectos
            </button>
            <a
              href="#contacto"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-700 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Contactar para crear sitio"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
