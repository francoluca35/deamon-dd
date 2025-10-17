"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Desarrollo = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/desarrolloweb`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white">Desarrollo Web</h1>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white leading-tight">
            Un buen sitio web no sólo debe ser atractivo, sino también funcional y persuasivo.
          </h2>

          {/* Description */}
          <div className="text-white text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            <p className="mb-6">
              Diseñamos sitios web como la columna vertebral de tu estrategia digital, integrando herramientas de marketing que potencian tus objetivos comerciales. No se trata solo de estética, sino de crear un entorno optimizado para persuadir a los usuarios y guiarlos hacia acciones clave que impulsen conversiones y crecimiento.
            </p>
            <p>
              Optimizamos navegación, velocidad y estructura para maximizar el impacto y la rentabilidad de cada visita.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
              Agendá una llamada
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
              Conocé la agencia
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            A continuación explora algunos proyectos webs desarrollados:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 - Financial Platform */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded p-4">
                    <div className="text-green-400 text-sm font-semibold mb-2">Regulated Platform</div>
                    <div className="text-white text-lg font-bold">Tokenize and Trade</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-gray-700 rounded px-3 py-1 text-sm text-white">List</div>
                    <div className="bg-gray-700 rounded px-3 py-1 text-sm text-white">Raise</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 - La Via */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-900 p-6 mb-4">
                <p className="text-white text-lg mb-4">Buscamos ser tu proveedor frecuente.</p>
                <div className="w-16 h-16 bg-gray-700 rounded-lg mb-4"></div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4">Somos fabricantes e importadores oficiales</p>
                <div className="flex space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-xl font-bold text-white mb-2">La Via</h4>
                  <p className="text-gray-300 text-sm mb-4">Landing para adquisición de clientes de Motopartes</p>
                  <button className="border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition-colors">
                    Ver proyecto
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Real Estate */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
              <div className="h-32 bg-gradient-to-b from-green-800 to-green-900 mb-4"></div>
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-black text-sm font-semibold">Tu nuevo hogar: a la alta</p>
                </div>
              </div>
              <div className="p-6 mt-16">
                <h4 className="text-white font-bold mb-2">Proyecto Inmobiliario</h4>
                <p className="text-gray-300 text-sm">Plataforma de gestión inmobiliaria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
