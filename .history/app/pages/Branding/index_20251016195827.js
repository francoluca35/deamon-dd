"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function BrandingSection() {
  const scrollToAgency = () => {
    const equipoSection = document.getElementById('equipo');
    if (equipoSection) {
      equipoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Título con logo */}
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold leading-tight flex items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/Logo-equipo-B.avif"
              alt="Logo Deamon DD"
              width={60}
              height={60}
              className="w-12 h-12 lg:w-16 lg:h-16 mr-4"
            />
            Branding
          </motion.h2>
          
          {/* Primer párrafo */}
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            No se trata sólo de un logo, una tipografía o una paleta de colores atractiva.
          </motion.p>

          {/* Segundo párrafo */}
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Creamos marcas auténticas y alineadas con la esencia de tu negocio, asegurando que se destaquen en un mercado competitivo y construyan una presencia memorable. Diseñamos identidades visuales estratégicas, no solo para generar impacto, sino para acompañar el crecimiento y consolidar una presencia memorable que represente tu cultura y valores.
          </motion.p>

          {/* Botones de acción */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Botón principal - Agendar llamada */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-pink-500/20"
            >
              <span>Agendá una llamada</span>
              <FaArrowRight className="text-white" />
            </motion.button>

            {/* Botón secundario - Conocer agencia */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAgency}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 border border-gray-600 hover:border-gray-500"
            >
              <FaChevronDown className="text-white" />
              <span>Conocé la agencia</span>
            </motion.button>
          </motion.div>

          {/* Texto final */}
          <motion.p 
            className="text-lg text-gray-400 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            A continuación explora algunos proyectos de branding desarrollados:
          </motion.p>

          {/* Galería de proyectos */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            {/* Proyecto 1 - Paragon */}
            <motion.div 
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-violet-500/50 transition-all duration-500 cursor-pointer group shadow-2xl hover:shadow-violet-500/10"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-48 bg-gradient-to-br from-violet-600 via-purple-700 to-violet-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-teal-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Efecto de iluminación neón */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-full blur-sm"></div>
                <div className="absolute top-8 right-6 w-6 h-6 bg-teal-400/30 rounded-full blur-md"></div>
                
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-1">PARAGON</h3>
                  <p className="text-white/70 text-sm font-light">social commerce</p>
                </div>
              </div>
              
              <div className="p-6 bg-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Paragon</h4>
                      <p className="text-neutral-400 text-sm">Live & Social Commerce</p>
                    </div>
                  </div>
                  <button className="border border-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                    Ver proyecto
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 2 - Soyana */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-violet-500 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-4 mb-3 h-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-pink-200 opacity-30"></div>
                <div className="relative z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">S</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">Soyana</h4>
                  <p className="text-gray-400 text-sm">Plant-based Foods</p>
                </div>
                <button className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors">
                  Ver proyecto
                </button>
              </div>
            </motion.div>

            {/* Proyecto 3 - Nature Brand */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-violet-500 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gradient-to-br from-emerald-600 to-green-800 rounded-lg p-4 mb-3 h-24 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-20"></div>
                <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌿</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">EcoBrand</h4>
                  <p className="text-gray-400 text-sm">Nature & Wellness</p>
                </div>
                <button className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors">
                  Ver proyecto
                </button>
              </div>
            </motion.div>

            {/* Proyecto 4 - Tech Startup */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-violet-500 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-4 mb-3 h-24 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">T</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">TechFlow</h4>
                  <p className="text-gray-400 text-sm">SaaS Platform</p>
                </div>
                <button className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors">
                  Ver proyecto
                </button>
              </div>
            </motion.div>

            {/* Proyecto 5 - Restaurant */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-violet-500 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg p-4 mb-3 h-24 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-lg">🍴</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">Gusto</h4>
                  <p className="text-gray-400 text-sm">Restaurant Chain</p>
                </div>
                <button className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors">
                  Ver proyecto
                </button>
              </div>
            </motion.div>

            {/* Proyecto 6 - Fashion */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-violet-500 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg p-4 mb-3 h-24 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-lg">F</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">StyleCo</h4>
                  <p className="text-gray-400 text-sm">Fashion Brand</p>
                </div>
                <button className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors">
                  Ver proyecto
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
