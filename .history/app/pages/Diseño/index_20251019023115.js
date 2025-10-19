"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Pencil, Palette, Layers, Zap, X, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "../../lib/i18n";

const Diseño = () => {
  const router = useRouter();
  const { t, isLoaded, currentLang } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [renderKey, setRenderKey] = useState(0);
  
  // Forzar re-render cuando cambia el idioma
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [currentLang]);

  const handleWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre Diseño Gráfico. ¿Podemos agendar una llamada?";
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVerProyectos = () => {
    router.push('/graphic');
  };

  const openImageModal = (imageData) => {
    setSelectedImage(imageData);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Datos de proyectos de diseño
  const designProjects = [
    {
      id: 1,
      title: "Proyecto Asfixia",
      description: "Desarrollo completo de identidad visual para marca de ropa urbana, incluyendo logo, paleta de colores y aplicaciones en diferentes soportes.",
      image: "/assets/branding/asfixia.png",
      tags: ["Branding", "Logo Design", "Identidad"],
      icon: Palette,
      category: "Ropa Urbana"
    },
    {
      id: 2,
      title: "Proyecto Bicicoffe",
      description: "Diseño de identidad corporativa para empresa de bicicletas, incluyendo logo, material promocional y diseño de packaging.",
      image: "/assets/branding/bicico.png",
      tags: ["Logo", "Packaging", "Retail"],
      icon: Pencil,
      category: "Bicicletas"
    },
    {
      id: 3,
      title: "Proyecto Bioma",
      description: "Identidad visual para empresa de productos ecológicos, enfocada en la sostenibilidad y el cuidado del medio ambiente.",
      image: "/assets/branding/bioma.png",
      tags: ["Eco Design", "Sostenibilidad", "Branding"],
      icon: Layers,
      category: "Productos Ecológicos"
    },
    {
      id: 4,
      title: "Proyecto Citadino",
      description: "Identidad corporativa para empresa de servicios urbanos, con enfoque en la modernidad y eficiencia.",
      image: "/assets/branding/citadino.png",
      tags: ["Identidad", "Servicios", "Moderno"],
      icon: Zap,
      category: "Servicios Urbanos"
    },
    {
      id: 5,
      title: "Proyecto Iruma",
      description: "Diseño de marca para empresa tecnológica, combinando innovación y profesionalismo.",
      image: "/assets/branding/iruma.png",
      tags: ["Tech", "Innovación", "Profesional"],
      icon: Palette,
      category: "Tecnología"
    }
  ];

  return (
    <div id="diseño" key={`${currentLang}-${renderKey}`} className="min-h-screen bg-neutral-950 text-white relative">
      {/* Hero Section */}
      <div className="relative px-8 py-20 max-w-6xl mx-auto z-10">
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
          <h1 className="text-5xl font-extrabold">
            Deamon DD - {isLoaded ? t("design.title") : "Diseño Gráfico"}
          </h1>
        </div>

        <h2 className="text-lg font-semibold text-white/90 mb-6">
          {isLoaded ? t("design.subtitle") : "Transformamos ideas en experiencias visuales impactantes que conectan con tu audiencia."}
        </h2>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          {isLoaded ? t("design.description1") : "Nuestro equipo de diseñadores especializados crea identidades visuales únicas, desde logos memorables hasta sistemas de identidad corporativa completos. Cada proyecto se desarrolla con un enfoque estratégico que combina creatividad, funcionalidad y resultados medibles."}
        </p>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          {isLoaded ? t("design.description2") : "Trabajamos con marcas de todos los tamaños para crear diseños que no solo se ven increíbles, sino que también comunican efectivamente el mensaje de tu empresa y generan conexiones emocionales duraderas con tu audiencia."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14 max-w-3xl">
          <button 
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            {isLoaded ? t("design.scheduleCall") : "Agendá una llamada"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button 
            onClick={handleVerProyectos}
            className="border border-white/30 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            {isLoaded ? t("design.seeProjects") : "Ver nuestros proyectos"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

 

      {/* Galería de Proyectos - Grid Horizontal */}
      <div className="relative px-8 pb-24 z-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-12">{isLoaded ? t("design.projectsTitle") : "Explora algunos de nuestros proyectos de diseño gráfico:"}</h3>

          {/* Grid Horizontal */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {designProjects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <motion.div
                  key={project.id}
                  className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openImageModal(project)}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Icono de expandir */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Icono del proyecto */}
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-4 h-4 text-violet-800" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="absolute top-3 left-12 flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Contenido inferior - Solo título y tags */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-white text-base font-bold mb-2">{project.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Imagen principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Información del proyecto - Completa en el modal */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      {(() => {
                        const IconComponent = selectedImage.icon;
                        return <IconComponent className="w-6 h-6 text-violet-800" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                      <p className="text-white/70 text-sm">{selectedImage.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {selectedImage.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Diseño;

