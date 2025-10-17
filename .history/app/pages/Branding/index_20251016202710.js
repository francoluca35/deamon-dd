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

  const projects = [
    {
      id: 1,
      name: "Asfixia",
      tagline: "Live & Social Commerce",
      description: "Live & Social Commerce",
      logo: "P",
      image: "/assets/branding/asfixia.png",
      url: "#",
      layout: "square"
    },
    {
      id: 2,
      name: "Soyana",
      tagline: "plant-based foods",
      description: "Marca N°1 en Argentina de Tofu 100% Orgánico",
      logo: "S",
      image: "/assets/branding/iruma.png",
      url: "#",
      layout: "square"
    },
    {
      id: 3,
      name: "Tropical Paradise",
      tagline: "tropical paradise",
      description: "Desarrolladora de proyectos en el Caribe",
      logo: "🌿",
      image: "/assets/branding/bioma.png",
      url: "#",
      layout: "rectangle"
    },
    {
      id: 4,
      name: "TechFlow",
      tagline: "saas platform",
      description: "SaaS Platform",
      logo: "T",
      image: "/assets/branding/citadino.png",
      url: "#",
      layout: "rectangle"
    }
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
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
            className="mt-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Columna izquierda - 2 cuadrados */}
              <div className="lg:col-span-1 space-y-6">
                {projects.filter(p => p.layout === 'square').map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Todo dentro de la imagen */}
                    <div className="relative aspect-square">
                      <Image
                        src={project.image}
                        alt={`Proyecto ${project.name}`}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Overlay para legibilidad */}
                      <div className="absolute inset-0 bg-black/30"></div>
                      
                      {/* Logo en la esquina superior */}
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{project.logo}</span>
                        </div>
                      </div>
                      
                      {/* Contenido en la parte inferior */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-bold text-lg mb-1">{project.name}</h4>
                            <p className="text-white/70 text-sm">{project.description}</p>
                          </div>
                          <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            Ver proyecto
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Columna derecha - 2 rectángulos lado a lado */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {projects.filter(p => p.layout === 'rectangle').map((project, index) => (
                    <motion.div 
                      key={project.id}
                      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Todo dentro de la imagen */}
                      <div className="relative h-[700px]">
                        <Image
                          src={project.image}
                          alt={`Proyecto ${project.name}`}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Overlay para legibilidad */}
                        <div className="absolute inset-0 bg-black/30"></div>
                        
                        {/* Logo en la esquina superior */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">{project.logo}</span>
                          </div>
                        </div>
                        
                        {/* Contenido en la parte inferior */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-bold text-lg mb-1">{project.name}</h4>
                              <p className="text-white/70 text-sm">{project.description}</p>
                            </div>
                            <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                              Ver proyecto
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
