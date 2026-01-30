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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [renderKey, setRenderKey] = useState(0);
  
  // Forzar re-render cuando cambia el idioma
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [currentLang]);

  const handleWhatsApp = () => {
    const phone = "+541131199882";
    const message = "hola quisiera saber los servicios que ofrece Deamon Estudio.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVerProyectos = () => {
    router.push('/graphic');
  };

  const openImageModal = (imageData, imageIndex = 0) => {
    setSelectedImage(imageData);
    setCurrentImageIndex(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedImage && selectedImage.images) {
      setCurrentImageIndex((prev) => 
        prev < selectedImage.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedImage && selectedImage.images) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : selectedImage.images.length - 1
      );
    }
  };

  // Datos de proyectos de diseño
  const designProjects = [
    {
      id: 1,
      title: "Proyecto Asfixia",
      descriptionKey: "design.projects.asfixia",
      fallbackDescription: "Desarrollo completo de identidad visual para marca de ropa urbana, incluyendo logo, paleta de colores y aplicaciones en diferentes soportes.",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/asfixia.jpg",
      images: [
        "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/asfixia.jpg",
        "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/asfixia.jpg",

      ],
      tags: ["Branding", "Logo Design", "Identidad"],
      icon: Palette,
      category: "Ropa Urbana"
    },
    {
      id: 2,
      title: "Proyecto Bicicoffe",
      descriptionKey: "design.projects.bicicoffe",
      fallbackDescription: "Diseño de identidad corporativa para empresa de bicicletas, incluyendo logo, material promocional y diseño de packaging.",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/bicico.jpg",
      images: [
        "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/bicico.jpg",
        "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/bicico.jpg"
      ],
      tags: ["Logo", "Packaging", "Retail"],
      icon: Pencil,
      category: "Bicicletas"
    },
    {
      id: 3,
      title: "Proyecto Bioma",
      descriptionKey: "design.projects.bioma",
      fallbackDescription: "Identidad visual para empresa de productos ecológicos, enfocada en la sostenibilidad y el cuidado del medio ambiente.",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/branding/bioma.jpg",
      images: [
        "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/branding/bioma.jpg"
      ],
      tags: ["Eco Design", "Sostenibilidad", "Branding"],
      icon: Layers,
      category: "Productos Ecológicos"
    },
    {
      id: 4,
      title: "Proyecto Carusso",
      descriptionKey: "design.projects.citadino",
      fallbackDescription: "Identidad corporativa para empresa de servicios urbanos, con enfoque en la modernidad y eficiencia.",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018646/deamon-dd/proyectos/carusoweb1.jpg",
      images: [
     
      ],
      tags: ["Identidad", "Servicios", "Moderno"],
      icon: Zap,
      category: "Servicios Urbanos"
    },
    {
      id: 5,
      title: "Proyecto Iruma",
      descriptionKey: "design.projects.iruma",
      fallbackDescription: "Diseño de marca para empresa tecnológica, combinando innovación y profesionalismo.",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/iruma.jpg",
      images: [
        "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/iruma.jpg",
        "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/branding/iruma.jpg"
      ],
      tags: ["Tech", "Innovación", "Profesional"],
      icon: Palette,
      category: "Tecnología"
    }
  ];

  return (
    <div id="diseño" key={`${currentLang}-${renderKey}`} className="min-h-screen bg-neutral-950 text-white relative">
      <div className="absolute inset-0">
        <div className="absolute top-24  -left-24 w-72 h-72  bg-violet-700/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80  bg-pink-600/20 blur-3xl rounded-full"></div>
      </div>
      {/* Hero Section */}
      <div className="relative px-8 py-20 max-w-6xl mx-auto z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg overflow-hidden hidden sm:block">
            <Image
              src="https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/home/Logo-equipo-B.png"
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

        <h2 className="text-lg font-semibold text-white/90 mb-6 max-w-3xl">
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
            {isLoaded ? t("design.scheduleCall") : "Envíanos un mensaje"}
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
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 max-w-3xl">{isLoaded ? t("design.projectsTitle") : "Explora algunos de nuestros proyectos de diseño gráfico:"}</h3>

          {/* Galería de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {designProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openImageModal(project)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={project.image}
                    alt={`Proyecto ${project.title}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay para legibilidad */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Icono en la esquina superior */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {(() => {
                        const IconComponent = project.icon;
                        return <IconComponent className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                  </div>
                  
                  {/* Contenido en la parte inferior */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{project.title}</h4>
                        <p className="text-white/70 text-sm">
                          {isLoaded ? t(project.descriptionKey) : project.fallbackDescription}
                        </p>
                      </div>
                      <button 
                        onClick={() => openImageModal(project)}
                        className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                      >
                        {isLoaded ? (t("common.viewWork") || "Ver trabajo") : "Ver trabajo"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                  src={selectedImage.images ? selectedImage.images[currentImageIndex] : selectedImage.image}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Navegación de imágenes - solo si hay múltiples imágenes */}
                {selectedImage.images && selectedImage.images.length > 1 && (
                  <>
                    {/* Botón anterior */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {/* Botón siguiente */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Indicadores de imagen */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedImage.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Contador de imágenes */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm z-10">
                      {currentImageIndex + 1} / {selectedImage.images.length}
                    </div>
                  </>
                )}
                
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

