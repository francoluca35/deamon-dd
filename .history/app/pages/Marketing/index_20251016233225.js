"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function MarketingSection() {
  const scrollToAgency = () => {
    const equipoSection = document.getElementById('equipo');
    if (equipoSection) {
      equipoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      name: "BETA AUTOMOTORES",
      tagline: "Caso de éxito",
      description: "Los acompañamos desde hace varios años en su camino con el objetivo de posicionarse como una de las cinco concesionarias más importantes de General Motors en Argentina.",
      logo: "B",
      image: "/assets/marketing/beta-automotores.jpg",
      url: "#",
      layout: "square",
      tags: ["Pauta", "Diseño UX/UI", "Desarrollo Web"]
    },
    {
      id: 2,
      name: "ZARAH CARTER",
      tagline: "Caso de éxito",
      description: "Zarah Carter, óptica en Costa Rica, pasó de 30 a 800 leads mensuales con alta conversión, gracias a la optimización de procesos de venta y estrategias innovadoras de gran impacto.",
      logo: "Z",
      image: "/assets/marketing/zarah-carter.jpg",
      url: "#",
      layout: "square",
      tags: ["Pauta", "Diseño UX/UI", "Desarrollo Web"]
    },
    {
      id: 3,
      name: "ENTRE NOUS",
      tagline: "Caso de éxito",
      description: "Hemos acompañado a la cadena de restaurantes Entre Nous en su transformación digital, potenciando su imagen y comunicación con el objetivo de atraer a más comensales.",
      logo: "E",
      image: "/assets/marketing/entre-nous.jpg",
      url: "#",
      layout: "rectangle",
      tags: ["Pauta", "Diseño UX/UI", "Desarrollo Web"]
    },
    {
      id: 4,
      name: "MAS PROYECTOS",
      tagline: "Ver todos los casos",
      description: "Explora más casos de éxito y estrategias de marketing que han transformado negocios",
      logo: "D",
      image: "/assets/Logo-equipo-B.avif",
      url: "#",
      layout: "more-projects",
      type: "more-projects"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-black to-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated code lines */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-purple-400 font-mono text-sm animate-pulse">
            &lt;div className=&quot;growth-marketing&quot;&gt;
          </div>
          <div className="absolute top-32 left-20 text-purple-400 font-mono text-sm animate-pulse delay-300">
            &lt;strategy&gt;Data-Driven&lt;/strategy&gt;
          </div>
          <div className="absolute top-44 left-10 text-purple-400 font-mono text-sm animate-pulse delay-500">
            &lt;/div&gt;
          </div>
          <div className="absolute top-60 right-20 text-violet-400 font-mono text-sm animate-pulse delay-700">
            function optimizeROI() {"{"}
          </div>
          <div className="absolute top-80 right-30 text-violet-400 font-mono text-sm animate-pulse delay-1000">
            return growthMetrics;
          </div>
          <div className="absolute top-96 right-20 text-violet-400 font-mono text-sm animate-pulse delay-1200">
            {"}"}
          </div>
          <div className="absolute top-40 right-10 text-purple-400 font-mono text-xs animate-pulse delay-900">
            const channels = [&quot;Facebook&quot;, &quot;Google&quot;];
          </div>
          <div className="absolute top-56 left-40 text-green-400 font-mono text-xs animate-pulse delay-1100">
            analytics.track();
          </div>
          <div className="absolute top-72 left-20 text-yellow-400 font-mono text-xs animate-pulse delay-1300">
            campaign.optimize();
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Somos una{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                agencia de marketing
              </span>{" "}
              comprometida con tu crecimiento
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              En Deamon DD, nos especializamos en Growth Marketing, estrategias digitales, 
              branding y desarrollo de aplicaciones móviles. Brindamos mejoras significativas en la 
              presencia digital de nuestros clientes, transformando sus ideas en experiencias 
              únicas que generan resultados reales y duraderos para su crecimiento.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-400/40 shadow-lg shadow-cyan-500/20">
                <span className="text-sm font-semibold text-white">Growth Marketing</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-pink-400/40 shadow-lg shadow-pink-500/20">
                <span className="text-sm font-semibold text-white">Estrategias Digitales</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-400/40 shadow-lg shadow-orange-500/20">
                <span className="text-sm font-semibold text-white">ROI Optimizado</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                onClick={scrollToAgency}
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25"
              >
                <span>Conocé nuestros casos</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Agendá una consulta</span>
                <FaChevronDown className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <span className="text-3xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold">Growth Marketing</h3>
                  <p className="text-gray-300">Estrategias que impulsan el crecimiento</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Casos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                Éxito
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubre cómo hemos transformado negocios a través de estrategias de marketing digital innovadoras y resultados medibles.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
                        <FaArrowRight className="w-6 h-6" />
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
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">{project.name}</h4>
                          <p className="text-white/70 text-sm mb-2">{project.description}</p>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags?.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="bg-gray-800/80 text-white px-2 py-1 rounded text-xs backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                          Ver caso de éxito
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
