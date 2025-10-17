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
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Card 1 - Financial Platform */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black">
                {/* Overlay para legibilidad */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Logo en la esquina superior */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">$</span>
                  </div>
                </div>
                
                {/* Contenido en la parte inferior */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Plataforma Financiera</h4>
                      <p className="text-white/70 text-sm">Tokenize and Trade</p>
                      <div className="flex space-x-2 mt-2">
                        <span className="bg-green-400/20 text-green-400 px-2 py-1 rounded text-xs">List</span>
                        <span className="bg-green-400/20 text-green-400 px-2 py-1 rounded text-xs">Raise</span>
                      </div>
                    </div>
                    <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Ver proyecto
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Card 2 - La Via */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900">
                {/* Overlay para legibilidad */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Logo en la esquina superior */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">LV</span>
                  </div>
                </div>
                
                {/* Contenido en la parte inferior */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">La Via</h4>
                      <p className="text-white/70 text-sm">Landing para adquisición de clientes de Motopartes</p>
                      <p className="text-white/50 text-xs mt-1">Buscamos ser tu proveedor frecuente</p>
                    </div>
                    <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Ver proyecto
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Card 3 - Real Estate */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-green-800 to-green-900">
                {/* Overlay para legibilidad */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Logo en la esquina superior */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🏠</span>
                  </div>
                </div>
                
                {/* Contenido en la parte inferior */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Proyecto Inmobiliario</h4>
                      <p className="text-white/70 text-sm">Tu nuevo hogar: a la alta</p>
                      <p className="text-white/50 text-xs mt-1">Plataforma de gestión inmobiliaria</p>
                    </div>
                    <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Ver proyecto
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
