"use client";
import { motion } from "framer-motion";
import { FaCode, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const scrollToVision = () => {
    const target = document.getElementById("vision");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    const phone = "+541131199882";
    const message = "Hola, me gustaría conocer más sobre los servicios de desarrollo web y software de Deamon Estudio.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
        >
          <FaCode className="text-blue-400" />
          <span className="text-sm text-gray-300">Desarrollo Web & Software</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
        >
          Creamos soluciones
          <br />
          <span className="font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            digitales a medida
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Desarrollamos aplicaciones web, sistemas empresariales y plataformas 
          digitales que impulsan el crecimiento de tu negocio.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleContact}
            className="group px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3"
          >
            Iniciar proyecto
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={scrollToVision}
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Conocer más
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold text-white">50+</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">Proyectos</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-2xl md:text-3xl font-semibold text-white">5+</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">Años</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold text-white">100%</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">Satisfacción</div>
          </div>
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
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
          onClick={scrollToVision}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
