"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Desarrollo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white">
      {/* Hero */}
      <div className="relative px-8 py-20 max-w-6xl mx-auto">
        {/* Background with animated code lines */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10  font-mono text-sm animate-pulse">
            &lt;div className=&quot;web-development&quot;&gt;
          </div>
          <div className="absolute top-32 left-20 text-purple-400 font-mono text-sm animate-pulse delay-300">
            &lt;website&gt;Responsive&lt;/website&gt;
          </div>
          <div className="absolute top-44 left-10 text-purple-400 font-mono text-sm animate-pulse delay-500">
            &lt;/div&gt;
          </div>
          <div className="absolute top-60 right-20 text-violet-400 font-mono text-sm animate-pulse delay-700">
            function createWebsite() {"{"}
          </div>
          <div className="absolute top-80 right-30 text-violet-400 font-mono text-sm animate-pulse delay-1000">
            return userExperience;
          </div>
          <div className="absolute top-96 right-20 text-violet-400 font-mono text-sm animate-pulse delay-1200">
            {"}"}
          </div>
          <div className="absolute top-40 right-10 text-purple-400 font-mono text-xs animate-pulse delay-900">
            const tech = [&quot;React&quot;, &quot;Next.js&quot;];
          </div>
          <div className="absolute top-56 left-40 text-green-400 font-mono text-xs animate-pulse delay-1100">
            designSystem.responsive();
          </div>
          <div className="absolute top-72 left-20 text-yellow-400 font-mono text-xs animate-pulse delay-1300">
            website.optimize();
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src="/assets/Logo-equipo-B.avif"
              alt="Logo Deamon DD"
              width={48}
              height={48}
              className="object-cover"
            />
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
      </div>

      {/* Projects */}
      <div className="px-8 pb-24 -mt-12">
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
                  src="/assets/Proyectos/tec2.jpg"
                  alt="JLA Tecnico"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-2xl font-bold mb-1">JLA Tecnico</h4>
                  <p className="text-white/70 text-sm mb-3">Web Site Industrial</p>
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
                    src="/assets/Proyectos/maurello.png"
                    alt="La Via"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">Maurello Transportes</h4>
                    <p className="text-white/70 text-xs mb-2">Landing para compra de pasajes de transporte</p>
                    <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                      Ver proyecto
                    </button>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="absolute top-1/2  left-0 right-0 h-px bg-white/20"></div>
                
                {/* Tropical Paradise - Parte Inferior */}
                <div className="relative h-1/2">
                  <Image
                    src="/assets/Proyectos/caruso1.png"
                    alt="Tropical Paradise"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">Caruso FC </h4>
                    <p className="text-white/70 text-xs mb-2">Pagina para reservar canchas de futbol</p>
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
                  src="/assets/Proyectos/arqui.png"
                  alt="La Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-2xl font-bold mb-1">Arquimec</h4>
                  <p className="text-white/70 text-sm mb-3">Estudio de arquitectura</p>
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