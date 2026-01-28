"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Diseño Web",
    title: "E-Commerce Premium",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Plataforma de comercio electrónico con diseño moderno y experiencia de usuario optimizada.",
  },
  {
    id: 2,
    category: "Diseño Gráfico",
    title: "Identidad Corporativa Tech",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    description: "Branding completo para empresa tecnológica, incluyendo logo, papelería y guía de marca.",
  },
  {
    id: 3,
    category: "Vehículos",
    title: "Livery Ferrari GT3",
    image: "/ferrari.avif",
    description: "Diseño de livery para competición en GT World Challenge.",
  },
  {
    id: 4,
    category: "Diseño Gráfico",
    title: "Campaña Publicitaria",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    description: "Material publicitario integral para lanzamiento de producto.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const prevProject = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <section id="portfolio" className="py-24 px-4 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 text-lg">
            Proyectos destacados que definen nuestra excelencia
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-64 md:h-80 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(project, index)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-gray-400 text-sm uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#1a1a1a] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <FaTimes />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <div className="h-64 md:h-96">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-violet-400 text-sm uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
