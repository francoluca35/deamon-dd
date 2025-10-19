"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "../../lib/i18n";

const Desarrollo = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('web');
  const { t, isLoaded } = useTranslation();

  const handleWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre el desarrollo web. ¿Podemos agendar una llamada?";
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVerMas = () => {
    router.push('/desarrolloweb');
  };

  // Proyectos Web
  const webProjects = [
    {
      id: 1,
      title: "JLA Tecnico",
      description: "Web Site Industrial",
      image: "/assets/Proyectos/tec.png",
      type: "single"
    },
    {
      id: 2,
      title: "Maurello Transportes",
      description: "Landing para compra de pasajes de transporte",
      image: "/assets/Proyectos/maurello1.png",
      type: "split",
      secondProject: {
        title: "Caruso FC",
        description: "Pagina para reservar canchas de futbol",
        image: "/assets/Proyectos/carusoweb1.png"
      }
    },
    {
      id: 3,
      title: "Arquimec",
      description: "Estudio de arquitectura",
      image: "/assets/Proyectos/arqui2.png",
      type: "single"
    }
  ];

  // Proyectos Apps
  const appProjects = [
    {
      id: 1,
      title: "QuickSolution",
      description: "Multiapp para restaurantes",
      image: "/assets/Proyectos/quick2.jpg",
      type: "single"
    },
    {
      id: 2,
      title: "JLA App",
      description: "Gestión de tareas empresariales",
      image: "/assets/Proyectos/jlaapp2.jpg",
      type: "split",
      secondProject: {
        title: "Maurello App",
        description: "App para reservar pasajes de transporte",
        image: "/assets/Proyectos/maureloapp.jpg"
      }
    },
    {
      id: 3,
      title: "PerúMar App",
      description: "App personalizada para el restaurante PerúMar",
      image: "/assets/Proyectos/perumarapp.jpg",
      type: "single"
    }
  ];

  const currentProjects = selectedCategory === 'web' ? webProjects : appProjects;

  return (
    <div className="bg-neutral-950 text-white relative">

      
      {/* Hero */}
      <div className="relative px-8 pt-24 pb-20 max-w-6xl mx-auto z-20">
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
          <h1 className="text-5xl font-extrabold">{isLoaded ? t("development.title") : "Desarrollo Web"}</h1>
        </div>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          {isLoaded ? t("development.description") : "Diseñamos sitios web como la columna vertebral de tu estrategia digital, integrando herramientas de marketing que potencian tus objetivos comerciales. No se trata solo de estética, sino de crear un entorno optimizado para persuadir a los usuarios y guiarlos hacia acciones clave que impulsen conversiones y crecimiento."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button 
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            {t("development.scheduleCall")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button 
            onClick={handleVerMas}
            className="border border-white/30 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            {t("development.seeMore")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects */}
        <div className="relative px-8 pb-24 -mt-12 z-20">
          <div className="max-w-6xl mx-auto">
            {/* Selector Web | Apps */}
            <div className="flex justify-center mb-8">
              <div className="bg-neutral-800 rounded-lg p-1 flex">
                <button
                  onClick={() => setSelectedCategory('web')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    selectedCategory === 'web'
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-neutral-700'
                  }`}
                >
                  {t("development.webTab")}
                </button>
                <button
                  onClick={() => setSelectedCategory('apps')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    selectedCategory === 'apps'
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-neutral-700'
                  }`}
                >
                  {t("development.appsTab")}
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">
              {selectedCategory === 'web' ? t("development.projectsTitle") : t("development.projectsAppsTitle")}
            </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            key={selectedCategory} // Re-animate when category changes
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.01, y: -6 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.type === 'single' ? (
                  // Proyecto individual
                  <div className="relative aspect-[4/5] bg-neutral-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-white text-2xl font-bold mb-1">{project.title}</h4>
                      <p className="text-white/70 text-sm mb-3">{project.description}</p>
                      <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-200">
                        {t("common.viewProject")}
                      </button>
                    </div>
                  </div>
                ) : (
                  // Proyecto dividido (split)
                  <div className="relative aspect-[4/5] bg-neutral-800">
                    {/* Proyecto Superior */}
                    <div className="relative h-1/2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white text-lg font-bold mb-1">{project.title}</h4>
                        <p className="text-white/70 text-xs mb-2">{project.description}</p>
                        <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                          {t("common.viewProject")}
                        </button>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
                    
                    {/* Proyecto Inferior */}
                    <div className="relative h-1/2">
                      <Image
                        src={project.secondProject.image}
                        alt={project.secondProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white text-lg font-bold mb-1">{project.secondProject.title}</h4>
                        <p className="text-white/70 text-xs mb-2">{project.secondProject.description}</p>
                        <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                          {t("common.viewProject")}
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
};

export default Desarrollo;