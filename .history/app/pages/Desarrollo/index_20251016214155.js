"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Desarrollo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white">
      {/* Hero */}
      <div className="px-8 py-20 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold">Desarrollo Web</h1>
        </div>

        <h2 className="text-lg font-semibold text-white/90 mb-6">
          Un buen sitio web no sólo debe ser atractivo, sino también funcional y persuasivo.
        </h2>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          Diseñamos sitios web como la columna vertebral de tu estrategia digital, integrando herramientas de marketing que potencian tus objetivos comerciales. No se trata solo de estética, sino de crear un entorno optimizado para persuadir a los usuarios y guiarlos hacia acciones clave que impulsen conversiones y crecimiento.
        </p>

        <div className="flex gap-4 mb-14">
          <button className="bg-pink-500 hover:bg-pink-600 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            Agendá una llamada
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            Conocé la agencia
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">A continuación explora algunos proyectos webs desarrollados:</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Proyecto 1 - Tokn1 */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                <Image
                  src="/assets/desarrollo/jla.jpg"
                  alt="Tokn1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-2xl font-bold mb-1">Tokn1</h4>
                  <p className="text-white/70 text-sm mb-3">Startup • Plataforma Exchange</p>
                  <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-200">
                    Ver proyecto
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 2 - La Via + Tropical Paradise (dividido) */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                {/* La Via - Parte Superior */}
                <div className="relative h-1/2">
                  <Image
                    src="/images/lavia.png"
                    alt="La Via"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">La Via</h4>
                    <p className="text-white/70 text-xs mb-2">Landing para adquisición de clientes de Motopartes</p>
                    <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                      Ver proyecto
                    </button>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
                
                {/* Tropical Paradise - Parte Inferior */}
                <div className="relative h-1/2">
                  <Image
                    src="/images/tropical.png"
                    alt="Tropical Paradise"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">Tropical Paradise</h4>
                    <p className="text-white/70 text-xs mb-2">Desarrolladora de proyectos en el Caribe</p>
                    <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                      Ver proyecto
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 3 - La Florida */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                <Image
                  src="/images/laflorida.png"
                  alt="La Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-2xl font-bold mb-1">La Florida</h4>
                  <p className="text-white/70 text-sm mb-3">Proyecto Inmobiliario</p>
                  <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-200">
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