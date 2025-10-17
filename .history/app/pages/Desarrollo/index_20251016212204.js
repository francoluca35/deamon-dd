"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Desarrollo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo y título */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">Desarrollo Web</h1>
          </div>

          {/* Subtítulo */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white leading-tight">
            Un buen sitio web no sólo debe ser atractivo, sino también funcional y persuasivo.
          </h2>

          {/* Descripción */}
          <div className="text-white text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            <p className="mb-6">
              Diseñamos sitios web como la columna vertebral de tu estrategia digital, integrando herramientas de marketing que potencian tus objetivos comerciales. No se trata solo de estética, sino de crear un entorno optimizado para persuadir a los usuarios y guiarlos hacia acciones clave que impulsen conversiones y crecimiento.
            </p>
            <p>
              Optimizamos navegación, velocidad y estructura para maximizar el impacto y la rentabilidad de cada visita.
            </p>
          </div>

          {/* Botones */}
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

      {/* Sección de proyectos */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            A continuación explora algunos proyectos webs desarrollados:
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Proyecto 1 - Tokn */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                {/* 💡 Reemplazá el src con tu imagen */}
                <Image
                  src="/images/tokn.png"
                  alt="Tokn"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg">Tokn</h4>
                  <p className="text-white/70 text-sm mb-3">Startup • Plataforma Exchange</p>
                  <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    Ver proyecto
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 2 - La Vía */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                <Image
                  src="/images/lavia.png"
                  alt="La Vía"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg">La Vía</h4>
                  <p className="text-white/70 text-sm mb-3">
                    Landing para adquisición de clientes de Motopartes
                  </p>
                  <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    Ver proyecto
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 3 - La Florida */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                <Image
                  src="/images/laflorida.png"
                  alt="La Florida"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg">La Florida</h4>
                  <p className="text-white/70 text-sm mb-3">Proyecto Inmobiliario</p>
                  <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    Ver proyecto
                  </button>
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
