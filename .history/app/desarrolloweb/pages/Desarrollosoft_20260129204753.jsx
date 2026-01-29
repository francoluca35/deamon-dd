"use client";

import { useState } from "react";
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

function GaleriaModal({ images, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#111] border border-white/10 p-6 rounded-2xl max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <FiX size={20} />
        </button>

        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <FiChevronLeft size={20} />
          </button>

          <Image
            src={images[activeIndex]}
            alt={`Imagen ${activeIndex + 1}`}
            width={800}
            height={500}
            className="w-full max-h-[500px] object-contain rounded-lg"
          />

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        <div className="mt-4 flex gap-2 justify-center overflow-x-auto py-2">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Miniatura ${index + 1}`}
              width={80}
              height={60}
              onClick={() => setActiveIndex(index)}
              className={`h-14 w-20 object-cover cursor-pointer rounded-lg border-2 transition-all ${
                index === activeIndex ? "border-blue-400 opacity-100" : "border-transparent opacity-50 hover:opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpenGaleria }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={256}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{project.dominio}</p>
        
        {/* Actions */}
        <div className="flex gap-3">
          {project.galeria?.length > 0 && (
            <button
              onClick={onOpenGaleria}
              className="px-4 py-2 bg-white/5 text-gray-300 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver galería
            </button>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-lg hover:bg-blue-500/20 transition-colors flex items-center gap-2"
            >
              <FiExternalLink size={14} />
              Visitar
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
            >
              <FiGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    id: 1,
    title: "JLA Técnico",
    dominio: "Plataforma de servicios técnicos industriales",
    category: "Páginas Web",
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/JLA.jpg",
    url: "https://jlatecnicos.com",
    repo: "https://github.com/francoluca35/web-site-jla",
    galeria: [
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/JLA.jpg",
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/proyectos/tec.jpg",
    ],
  },
  {
    id: 2,
    title: "PeruMar App",
    dominio: "Sistema de gestión de comandas para restaurantes",
    category: "App Web",
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/perumar.png",
    repo: "https://github.com/francoluca35/comandas",
    galeria: [
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/perumar.png",
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/perumarapp.jpg",
    ],
  },
  {
    id: 4,
    title: "JLA App",
    dominio: "Sistema de control y gestión de clientes",
    category: "App Web",
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/JLA.jpg",
    url: "https://jlatecnicos.online",
    repo: "https://github.com/francoluca35/jla-app",
    galeria: [
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/app-jla.jpg",
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/jlaapp2.jpg",
    ],
  },
  {
    id: 5,
    title: "Futbol App",
    dominio: "Plataforma de reserva de canchas deportivas",
    category: "App Web",
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/proyectos/yael-app.jpg",
    url: "",
    repo: "https://github.com/francoluca35/yael-app/",
    galeria: [
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/proyectos/yael-app.jpg",
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018646/deamon-dd/proyectos/carusoweb1.jpg",
    ],
  },
  {
    id: 6,
    title: "Transportes App",
    dominio: "Sistema de reservas y gestión de viajes",
    category: "App Web",
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/maurello-app.png",
    repo: "https://github.com/francoluca35/appcolectivos",
    galeria: [
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/maurello-app.png",
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/maureloapp.jpg",
    ],
  },
];

const categories = ["Todos", "Páginas Web", "App Web"];

export default function TrabajosSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [modalGaleria, setModalGaleria] = useState(null);

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="trabajos" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 mb-6">
            Proyectos <span className="font-semibold">destacados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una selección de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-white text-gray-900"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenGaleria={() => setModalGaleria(project.galeria)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalGaleria && (
        <GaleriaModal
          images={modalGaleria}
          onClose={() => setModalGaleria(null)}
        />
      )}
    </section>
  );
}
