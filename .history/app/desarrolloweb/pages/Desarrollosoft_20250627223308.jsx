"use client";

import { useState } from "react";
import { FiExternalLink, FiGithub, FiImage, FiX } from "react-icons/fi";

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

// Modal de galería
function GaleriaModal({ images, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        >
          <FiX />
        </button>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`galeria-${index}`}
              className="w-full h-48 object-cover rounded-md"
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
    image: "/assets/Proyectos/jla.jpg",
    url: "https://jlatecnicos.com",
    repo: "https://github.com/usuario/jla",
    galeria: ["/assets/Proyectos/jla.jpg"],
  },
  {
    id: 2,
    title: "TorinoCars",
    dominio: "Web Taller",
    category: "Páginas Web",
    image: "/assets/Proyectos/torinocar.jpg",
    url: "https://c24129-torinocars.netlify.app",
    repo: "https://github.com/usuario/torino",
    galeria: ["/assets/Proyectos/torinocar.jpg"],
  },
  {
    id: 3,
    title: "Empresa De Viajes",
    category: "Páginas Web",
    dominio: "Web para viajes",
    image: "/assets/Proyectos/maurello-web.png",
    url: "https://empresacolectivo.vercel.app",
    repo: "",
    galeria: [],
  },
  {
    id: 4,
    title: "Caruso App",
    category: "App Web",
    dominio: "Reserva de canchas",
    image: "/assets/Proyectos/yael-app.png",
    url: "https://caruso-app.vercel.app",
    repo: "https://github.com/usuario/caruso-app",
    galeria: ["/assets/Proyectos/yael-app.png"],
  },
  {
    id: 5,
    title: "Transportes App",
    category: "App Web",
    dominio: "Reservas y viajes",
    image: "/assets/Proyectos/maurello-app.png",
    url: "https://appcolectivos.vercel.app/",
    repo: "https://github.com/usuario/transportes-app",
    galeria: [],
  },
  {
    id: 6,
    title: "JLA App",
    category: "App Web",
    dominio: "Control de clientes",
    image: "/assets/Proyectos/app-jla.png",
    url: "https://jlatecnicos.online",
    repo: "",
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
