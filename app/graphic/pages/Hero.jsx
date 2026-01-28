"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const scrollToServices = () => {
    const target = document.getElementById("servicios");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    const message = encodeURIComponent("Hola, me gustaría conocer más sobre los servicios de diseño de Deamon Estudio.");
    window.open(`https://wa.me/541131199882?text=${message}`, "_blank");
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Logo/Título principal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider"
        >
          DEAMONDD
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 italic mb-4"
        >
          Estudio Creativo de Diseño
        </motion.p>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Especialistas en diseño web, diseño gráfico y diseño de vehículos de carrera
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
          >
            Ver Proyectos
            <FaArrowRight className="text-sm" />
          </button>
          
          <button
            onClick={handleContact}
            className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]"
          >
            Contactar
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div 
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center cursor-pointer"
          onClick={scrollToServices}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
