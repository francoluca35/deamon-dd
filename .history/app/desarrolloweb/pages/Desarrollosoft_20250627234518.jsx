"use client";

import { useState } from "react";
import { FiExternalLink, FiGithub, FiImage, FiX } from "react-icons/fi";
import { FiXCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// Botón de categoría
function Button({ children, onClick, isActive }) {
  return (
    <button
      className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${
        isActive
          ? "bg-black text-white shadow-lg"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function GaleriaModal({ images, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
      <div className="bg-black/40 p-6 rounded-xl max-w-4xl w-full relative shadow-xl">
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 text-2xl font-black"
        >
          X
        </button>

        {/* Imagen principal con flechas */}
        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
          >
            <FiChevronLeft size={20} />
          </button>

          <img
            src={images[activeIndex]}
            alt={`image-${activeIndex}`}
            className="w-full max-h-[400px] object-contain rounded"
          />

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Miniaturas */}
        <div className="mt-4 flex gap-2 justify-center overflow-x-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => handleThumbClick(index)}
              className={`h-16 w-24 object-cover cursor-pointer rounded border-2 ${
                index === activeIndex ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// Card de proyecto
function Card({ title, category, image, url, repo, galeria, onOpenGaleria }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md mb-10 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {galeria?.length > 0 && (
          <button
            onClick={onOpenGaleria}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            title="Galería"
          >
            <FiImage className="text-gray-700 text-lg" />
          </button>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            title="GitHub"
          >
            <FiGithub className="text-gray-700 text-lg" />
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            title="Ir al sitio"
          >
            <FiExternalLink className="text-gray-700 text-lg" />
          </a>
        )}
      </div>
    </div>
  );
}

// Proyectos
const projects = [
  {
    id: 1,
    title: "JLA Tecnico",
    dominio: "Web Industrial",
    category: "Páginas Web",
    image: "/assets/Proyectos/JLA.png",
    url: "https://jlatecnicos.com",
    repo: "https://github.com/francoluca35/web-site-jla",
    galeria: ["/assets/Proyectos/jla.jpg"],
  },
  {
    id: 2,
    title: "PeruMar App",
    dominio: "App Comandas",
    category: "App Web",
    image: "/assets/Proyectos/torinocar.jpg",
    repo: "https://github.com/francoluca35/comandas",
    galeria: ["/assets/Proyectos/torinocar.jpg"],
  },
  {
    id: 3,
    title: "Empresa De Viajes",
    category: "Páginas Web",
    dominio: "Web para viajes",
    image: "/assets/Proyectos/maurello-web.png",
    url: "https://empresacolectivo.vercel.app",
    repo: "https://github.com/francoluca35/empresacolectivo",
    galeria: [],
  },
  {
    id: 4,
    title: "JLA App",
    category: "App Web",
    dominio: "Control de clientes",
    image: "/assets/Proyectos/JLA.png",
    url: "https://jlatecnicos.online",
    repo: "https://github.com/francoluca35/jla-app",
    galeria: [],
  },
  {
    id: 5,
    title: "Caruso App",
    category: "App Web",
    dominio: "Reserva de canchas",
    image: "/assets/Proyectos/yael-app.png",
    url: "https://caruso-app.vercel.app",
    repo: "https://github.com/francoluca35/yael-app/",
    galeria: ["/assets/Proyectos/yael-app.png"],
  },
  {
    id: 6,
    title: "Transportes App",
    category: "App Web",
    dominio: "Reservas y viajes",
    image: "/assets/Proyectos/maurello-web.png",
    repo: "https://github.com/francoluca35/appcolectivos",
    galeria: [],
  },
];

const categories = [
  "Todos los Proyectos",
  "Páginas Web",
  "App Web",
  "Programas Desktop",
];

// Componente principal
export default function TrabajosSection() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Todos los Proyectos"
  );
  const [modalGaleria, setModalGaleria] = useState(null);

  const filteredProjects =
    selectedCategory === "Todos los Proyectos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div id="trabajos" className="pt-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
        Nuestros Trabajos
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <Button
            key={category}
            isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            {...project}
            onOpenGaleria={() => setModalGaleria(project.galeria)}
          />
        ))}
      </div>

      {modalGaleria && (
        <GaleriaModal
          images={modalGaleria}
          onClose={() => setModalGaleria(null)}
        />
      )}
    </div>
  );
}
