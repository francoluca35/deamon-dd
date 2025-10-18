"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Desarrollo = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('web');

  const handleWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre el desarrollo web. ¿Podemos agendar una llamada?";
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVerMas = () => {
    router.push('/desarrolloweb');
  };

  return (
    <div className="bg-neutral-950 text-white relative">

      
      {/* Hero */}
      <div className="relative px-8 pt-24 pb-20 max-w-6xl mx-auto z-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg overflow-hidden hidden sm:block">
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

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button 
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            Agendá una llamada
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button 
            onClick={handleVerMas}
            className="border border-white/30 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Ver mas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="relative px-8 pb-24 -mt-12 z-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">A continuación explora algunos proyectos web desarrollados:</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Proyecto 1 - JLA Tecnico */}
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

            {/* Proyecto 2 - Maurello + Caruso (dividido) */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                {/* Maurello - Parte Superior */}
                <div className="relative h-1/2">
                  <Image
                    src="/assets/Proyectos/maurello.png"
                    alt="Maurello Transportes"
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
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
                
                {/* Caruso - Parte Inferior */}
                <div className="relative h-1/2">
                  <Image
                    src="/assets/Proyectos/caruso1.png"
                    alt="Caruso FC"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">Caruso FC</h4>
                    <p className="text-white/70 text-xs mb-2">Pagina para reservar canchas de futbol</p>
                    <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                      Ver proyecto
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 3 - Arquimec */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[4/5] bg-neutral-800">
                <Image
                  src="/assets/Proyectos/arqui.png"
                  alt="Arquimec"
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