"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslation } from "../../lib/i18n";

const Desarrollo = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('web');
  const { t, isLoaded, currentLang } = useTranslation();
  const [forceRender, setForceRender] = useState(0);
  
  // Forzar re-render cuando cambia el idioma
  useEffect(() => {
    setForceRender(prev => prev + 1);
  }, [currentLang]);

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
      descriptionKey: "development.projects.jlaTecnicos",
      fallbackDescription: "Web Site Industrial",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/proyectos/tec.jpg",
      url: "https://jlatecnico.com.ar",
      type: "single"
    },
    {
      id: 2,
      title: "Maurello Transportes",
      descriptionKey: "development.projects.maurelloTransportes",
      fallbackDescription: "Landing para compra de pasajes de transporte",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018645/deamon-dd/proyectos/maurello1.jpg",
      url: "https://maurellotransportes.com",
      type: "split",
      secondProject: {
        title: "Caruso FC",
        descriptionKey: "development.projects.carusoFC",
        fallbackDescription: "Pagina para reservar canchas de futbol",
        image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018646/deamon-dd/proyectos/carusoweb1.jpg",
        url: "https://carusofc.com"
      }
    },
    {
      id: 3,
      title: "Arquimec",
      descriptionKey: "development.projects.arquimec",
      fallbackDescription: "Estudio de arquitectura",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/arqui2.jpg",
      url: "https://arquimec.com",
      type: "single"
    }
  ];

  // Proyectos Apps
  const appProjects = [
    {
      id: 1,
      title: "QuickSolution",
      descriptionKey: "development.projects.quickSolution",
      fallbackDescription: "Multiapp para restaurantes",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/quick2.jpg",
      url: "https://github.com/francoluca35/QuickSolution",
      type: "single"
    },
    {
      id: 2,
      title: "JLA App",
      descriptionKey: "development.projects.jlaApp",
      fallbackDescription: "Gestión de tareas empresariales",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/jlaapp2.jpg",
      url: "https://github.com/francoluca35/JLA-App",
      type: "split",
      secondProject: {
        title: "Maurello App",
        descriptionKey: "development.projects.maurelloApp",
        fallbackDescription: "App para reservar pasajes de transporte",
        image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/maureloapp.jpg",
        url: "https://github.com/francoluca35/Maurello-App"
      }
    },
    {
      id: 3,
      title: "PerúMar App",
      descriptionKey: "development.projects.peruMarApp",
      fallbackDescription: "App personalizada para el restaurante PerúMar",
      image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/perumarapp.jpg",
      url: "https://github.com/francoluca35/PeruMar-App",
      type: "single"
    }
  ];

  const currentProjects = selectedCategory === 'web' ? webProjects : appProjects;

  return (
    <div key={`${currentLang}-${forceRender}`} className="bg-neutral-950 text-white relative">

      
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
            {isLoaded ? t("development.scheduleCall") : "Agendá una llamada"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button 
            onClick={handleVerMas}
            className="border border-white/30 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            {isLoaded ? t("development.seeMore") : "Ver mas"}
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
                  {isLoaded ? t("development.webTab") : "Web"}
                </button>
                <button
                  onClick={() => setSelectedCategory('apps')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    selectedCategory === 'apps'
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-neutral-700'
                  }`}
                >
                  {isLoaded ? t("development.appsTab") : "Apps"}
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">
              {selectedCategory === 'web' 
                ? (isLoaded ? t("development.projectsTitle") : "A continuación explora algunos proyectos web desarrollados:")
                : (isLoaded ? t("development.projectsAppsTitle") : "A continuación explora algunos proyectos de apps desarrollados:")
              }
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
                      <p className="text-white/70 text-sm mb-3">
                        {isLoaded ? t(project.descriptionKey) : project.fallbackDescription}
                      </p>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-200 inline-block"
                      >
                        {isLoaded ? t("common.viewProject") : "Ver proyecto"}
                      </a>
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
                        <p className="text-white/70 text-xs mb-2">
                          {isLoaded ? t(project.descriptionKey) : project.fallbackDescription}
                        </p>
                        <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                          {isLoaded ? t("common.viewProject") : "Ver proyecto"}
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
                        <p className="text-white/70 text-xs mb-2">
                          {isLoaded ? t(project.secondProject.descriptionKey) : project.secondProject.fallbackDescription}
                        </p>
                        <button className="border border-white/30 text-white px-3 py-1 rounded text-xs hover:bg-white/10 transition-all duration-200">
                          {isLoaded ? t("common.viewProject") : "Ver proyecto"}
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