"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "../../lib/i18n";
import { useState, useEffect } from "react";

export default function BrandingSection() {
  const { t, isLoaded, currentLang } = useTranslation();
  const [renderKey, setRenderKey] = useState(0);
  
  // Forzar re-render cuando cambia el idioma
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [currentLang]);
  const scrollToAgency = () => {
    const equipoSection = document.getElementById('equipo');
    if (equipoSection) {
      equipoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      name: "ASFIXIA",
      tagline: "Programas de identidad visual",
      description: "Programas de identidad visual",
      logo: "P",
      image: "/assets/branding/asfixia.png",
      url: "#",
      layout: "square"
    },
    {
      id: 2,
      name: "IRUMA",
      tagline: "IDENTIDAD CORPORATIVA",
      description: "Marca N°1 en Argentina de comida china",
      logo: "S",
      image: "/assets/branding/iruma.png",
      url: "#",
      layout: "square"
    },
    {
      id: 3,
      name: "BIOMA",
      tagline: "Fiesta electronica",
      description: "Desarrolladora de fiestas electronicas",
      logo: "🌿",
      image: "/assets/branding/bioma.png",
      url: "#",
      layout: "rectangle"
    },
    {
      id: 4,
      name: "CITADINO",
      tagline: "Café Bar",
      description: "diseño de identidad visual",
      logo: "T",
      image: "/assets/branding/citadino.png",
      url: "#",
      layout: "rectangle"
    },
    {
        id: 5,
        name: "BICICOFFEE",
        tagline: "Resto Café",
        description: "Manual de identidad visual",
        logo: "T",
        image: "/assets/branding/bicico.png",
        url: "#",
        layout: "rectangle"
      },
       {
         id: 6,
         name: "MAS PROYECTOS",
         tagline: "VER MAS",
         description: "Explora todos mis proyectos en GitHub",
         logo: "",
         image: "/assets/Logo-equipo-B.avif",
         url: "https://github.com/francoluca35",
         layout: "square",
         type: "more-projects"
       }
  ];

  return (
    <section id="branding" className="w-full min-h-screen bg-neutral-950 text-white relative">
     
      <div className="relative px-8 pt-24 pb-20 max-w-6xl mx-auto z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Título con logo */}
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
            <h1 className="text-5xl font-extrabold">{isLoaded ? t("branding.title") : "Branding"}</h1>
          </div>
          
          {/* Descripción */}
          <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
            No se trata sólo de un logo, una tipografía o una paleta de colores atractiva. Creamos marcas auténticas y alineadas con la esencia de tu negocio, asegurando que se destaquen en un mercado competitivo y construyan una presencia memorable. Diseñamos identidades visuales estratégicas, no solo para generar impacto, sino para acompañar el crecimiento y consolidar una presencia memorable que represente tu cultura y valores.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            {/* Botón principal - Agendar llamada */}
            <button className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-pink-500/20">
              <span>Agendá una llamada</span>
              <FaArrowRight className="text-white" />
            </button>

            {/* Botón secundario - Conocer agencia */}
            <button
              onClick={scrollToAgency}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-gray-600 hover:border-gray-500"
            >
              <FaChevronDown className="text-white" />
              <span>Conocé la agencia</span>
            </button>
          </div>

          {/* Texto final */}
          <p className="text-white/70 mb-8">
            A continuación explora algunos proyectos de branding desarrollados:
          </p>

          {/* Galería de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {projects.map((project, index) => (
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
                    {project.type === 'more-projects' ? (
                      // Tarjeta especial "MAS PROYECTOS"
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <div className="relative aspect-square border-2 border-violet-600 flex flex-col items-center justify-center p-6 bg-transparent hover:border-violet-500 transition-all duration-300">
                          {/* Logo centrado */}
                          <div className="mb-6">
                            <Image
                              src={project.image}
                              alt="Logo Deamon DD"
                              width={100}
                              height={100}
                              className="object-contain"
                            />
                          </div>
                          
                          {/* Título */}
                          <h3 className="text-white text-2xl font-bold text-center uppercase tracking-wide mb-4">
                            {project.name}
                          </h3>
                          
                          {/* Call to action */}
                          <div className="flex items-center justify-center text-white text-xl font-semibold uppercase space-x-2">
                            <span>{project.tagline}</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    ) : (
                      // Tarjeta normal de proyecto
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
                    )}
                  </motion.div>
                ))}
          </div>
                
    </section>
  );
}
