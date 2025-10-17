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
    <section className="w-full min-h-screen bg-gray-900 text-white px-6 py-20">
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
              src="/assets/deamon-icon-B.avif"
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
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-pink-500/20"
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
        </motion.div>
      </div>
    </section>
  );
}
