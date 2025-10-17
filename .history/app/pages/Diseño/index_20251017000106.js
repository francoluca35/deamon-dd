"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Pencil, Palette, Layers, Zap } from "lucide-react";

const Diseño = () => {
  const router = useRouter();

  const handleWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre Diseño Gráfico. ¿Podemos agendar una llamada?";
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVerProyectos = () => {
    router.push('/graphic');
  };

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

 

      {/* Galería de Proyectos */}
      <div className="relative px-8 pb-24 z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Explora algunos de nuestros proyectos de diseño gráfico:</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Proyecto 1 - Branding Asfixia */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="/assets/branding/asfixia.png"
                  alt="Proyecto Asfixia"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Palette className="w-8 h-8 text-violet-800" />
                  </div>
                </div>

                <div className="absolute top-20 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Branding</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Logo Design</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Identidad</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Proyecto Asfixia</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Desarrollo completo de identidad visual para marca de ropa urbana, incluyendo logo, paleta de colores y aplicaciones en diferentes soportes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 2 - Branding Bicico */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="/assets/branding/bicico.png"
                  alt="Proyecto Bicico"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Pencil className="w-8 h-8 text-violet-800" />
                  </div>
                </div>

                <div className="absolute top-20 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Logo</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Packaging</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Retail</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Proyecto Bicico</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Diseño de identidad corporativa para empresa de bicicletas, incluyendo logo, material promocional y diseño de packaging.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 3 - Branding Bioma */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="/assets/branding/bioma.png"
                  alt="Proyecto Bioma"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Layers className="w-8 h-8 text-violet-800" />
                  </div>
                </div>

                <div className="absolute top-20 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Eco Design</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Sostenibilidad</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Branding</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Proyecto Bioma</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Identidad visual para empresa de productos ecológicos, enfocada en la sostenibilidad y el cuidado del medio ambiente.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Diseño;
