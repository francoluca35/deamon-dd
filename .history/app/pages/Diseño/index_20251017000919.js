"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Pencil, Palette, Layers, Zap, X, Maximize2 } from "lucide-react";
import { useState } from "react";

const Diseño = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);

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
      title: "Proyecto Bicico",
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
    <div className="min-h-screen bg-neutral-950 text-white relative">
      {/* Hero Section */}
      <div className="relative px-8 py-20 max-w-6xl mx-auto z-10">
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
          <h1 className="text-5xl font-extrabold">Deamon DD - Diseño Gráfico</h1>
        </div>

        <h2 className="text-lg font-semibold text-white/90 mb-6">
          Transformamos ideas en experiencias visuales impactantes que conectan con tu audiencia.
        </h2>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          Nuestro equipo de diseñadores especializados crea identidades visuales únicas, desde logos memorables hasta sistemas de identidad corporativa completos. Cada proyecto se desarrolla con un enfoque estratégico que combina creatividad, funcionalidad y resultados medibles.
        </p>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          Trabajamos con marcas de todos los tamaños para crear diseños que no solo se ven increíbles, sino que también comunican efectivamente el mensaje de tu empresa y generan conexiones emocionales duraderas con tu audiencia.
        </p>

        <div className="flex gap-4 mb-14">
          <button 
            onClick={handleWhatsApp}
            className="bg-violet-950 hover:bg-violet-800 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            Agendá una llamada
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button 
            onClick={handleVerProyectos}
            className="bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            Ver nuestros proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

 

      {/* Galería de Proyectos - Collage Orgánico */}
      <div className="relative px-8 pb-24 z-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-12">Explora algunos de nuestros proyectos de diseño gráfico:</h3>

          {/* Collage Container */}
          <motion.div
            className="relative h-[800px] md:h-[900px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Proyecto 1 - Asfixia (Grande, esquina superior izquierda) */}
            <motion.div
              className="absolute top-0 left-0 w-[45%] md:w-[40%] h-[50%] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer z-10"
              whileHover={{ scale: 1.02, y: -8, z: 20 }}
              transition={{ duration: 0.3 }}
              onClick={() => openImageModal(designProjects[0])}
            >
              <div className="relative w-full h-full">
                <Image
                  src={designProjects[0].image}
                  alt={designProjects[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    {(() => {
                      const IconComponent = designProjects[0].icon;
                      return <IconComponent className="w-6 h-6 text-violet-800" />;
                    })()}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-lg font-bold mb-2">{designProjects[0].title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    {designProjects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {designProjects[0].tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 2 - Bicico (Mediano, centro derecha) */}
            <motion.div
              className="absolute top-[15%] right-0 w-[35%] md:w-[30%] h-[35%] rounded-xl overflow-hidden shadow-2xl group cursor-pointer z-20"
              whileHover={{ scale: 1.05, y: -6, z: 30 }}
              transition={{ duration: 0.3 }}
              onClick={() => openImageModal(designProjects[1])}
            >
              <div className="relative w-full h-full">
                <Image
                  src={designProjects[1].image}
                  alt={designProjects[1].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    {(() => {
                      const IconComponent = designProjects[1].icon;
                      return <IconComponent className="w-4 h-4 text-violet-800" />;
                    })()}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-sm font-bold mb-1">{designProjects[1].title}</h4>
                  <div className="flex flex-wrap gap-1">
                    {designProjects[1].tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 3 - Bioma (Mediano, centro izquierda) */}
            <motion.div
              className="absolute top-[55%] left-[5%] w-[30%] md:w-[25%] h-[30%] rounded-xl overflow-hidden shadow-2xl group cursor-pointer z-15"
              whileHover={{ scale: 1.05, y: -6, z: 25 }}
              transition={{ duration: 0.3 }}
              onClick={() => openImageModal(designProjects[2])}
            >
              <div className="relative w-full h-full">
                <Image
                  src={designProjects[2].image}
                  alt={designProjects[2].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    {(() => {
                      const IconComponent = designProjects[2].icon;
                      return <IconComponent className="w-4 h-4 text-violet-800" />;
                    })()}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-sm font-bold mb-1">{designProjects[2].title}</h4>
                  <div className="flex flex-wrap gap-1">
                    {designProjects[2].tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 4 - Citadino (Pequeño, esquina inferior derecha) */}
            <motion.div
              className="absolute bottom-[10%] right-[15%] w-[25%] md:w-[20%] h-[25%] rounded-lg overflow-hidden shadow-2xl group cursor-pointer z-10"
              whileHover={{ scale: 1.08, y: -4, z: 20 }}
              transition={{ duration: 0.3 }}
              onClick={() => openImageModal(designProjects[3])}
            >
              <div className="relative w-full h-full">
                <Image
                  src={designProjects[3].image}
                  alt={designProjects[3].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-2 left-2">
                  <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    {(() => {
                      const IconComponent = designProjects[3].icon;
                      return <IconComponent className="w-3 h-3 text-violet-800" />;
                    })()}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="text-white text-xs font-bold mb-1">{designProjects[3].title}</h4>
                  <div className="flex flex-wrap gap-1">
                    {designProjects[3].tags.slice(0, 1).map((tag, index) => (
                      <span key={index} className="bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 5 - Iruma (Mediano, esquina inferior izquierda) */}
            <motion.div
              className="absolute bottom-0 left-[40%] w-[35%] md:w-[30%] h-[40%] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer z-5"
              whileHover={{ scale: 1.03, y: -6, z: 15 }}
              transition={{ duration: 0.3 }}
              onClick={() => openImageModal(designProjects[4])}
            >
              <div className="relative w-full h-full">
                <Image
                  src={designProjects[4].image}
                  alt={designProjects[4].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <designProjects[4].icon className="w-5 h-5 text-violet-800" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white text-base font-bold mb-2">{designProjects[4].title}</h4>
                  <p className="text-white/80 text-xs leading-relaxed mb-3">
                    {designProjects[4].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {designProjects[4].tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Elementos decorativos de fondo */}
            <div className="absolute top-[25%] right-[20%] w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[20%] left-[10%] w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute top-[60%] right-[5%] w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
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
                
                {/* Información del proyecto */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <selectedImage.icon className="w-6 h-6 text-violet-800" />
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

