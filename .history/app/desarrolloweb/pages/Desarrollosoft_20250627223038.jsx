"use client";

import { useState } from "react";

// Botón reutilizable
function Button({ children, onClick, isActive }) {
  return (
    <button
      className={`px-5 py-2 rounded-md transition-all ${
        isActive
          ? "bg-black text-white"
          : "bg-gray-200 text-black hover:bg-gray-300"
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
      <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
        <button
          onClick={onClose}
          className="mb-4 text-right w-full text-red-600 font-bold"
        >
          ✖ Cerrar
        </button>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`galeria-${index}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Card del proyecto
function Card({ title, category, image, url, repo, galeria, onOpenGaleria }) {
  return (
    <div className="relative group overflow-hidden shadow-lg mb-10 rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-semibold text-center px-4">
          {title}
        </p>
        <p className="text-gray-300 text-center px-4 mb-4">{category}</p>
        <div className="flex gap-3">
          {galeria?.length > 0 && (
            <button
              onClick={onOpenGaleria}
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
              title="Ver Galería"
            >
              📷
            </button>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
              title="Ver Código en GitHub"
            >
              🐙
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
              title="Ver Sitio Web"
            >
              🌐
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Lista de proyectos
const projects = [
  {
    id: 1,
    title: "JLA Tecnico",
    dominio: "Páginas Web Industrial",
    category: "Páginas Web",
    image: "/assets/Proyectos/jla.jpg",
    url: "https://jlatecnicos.com",
    repo: "https://github.com/usuario/jla",
    galeria: ["/assets/Proyectos/jla.jpg"],
  },
  {
    id: 2,
    title: "TorinoCars",
    dominio: "Páginas Web Taller Mecanico",
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
    dominio: "Página Web Para Viajes",
    image: "/assets/Proyectos/maurello-web.png",
    url: "https://empresacolectivo.vercel.app",
    repo: "",
    galeria: [],
  },
  {
    id: 4,
    title: "Caruso App",
    category: "App Web",
    dominio: "Aplicación para reserva de canchas",
    image: "/assets/Proyectos/yael-app.png",
    url: "https://caruso-app.vercel.app",
    repo: "https://github.com/usuario/caruso-app",
    galeria: ["/assets/Proyectos/yael-app.png"],
  },
  {
    id: 5,
    title: "Transportes App",
    category: "App Web",
    dominio: "Control administrador de reservas, pagos y viajes",
    image: "/assets/Proyectos/maurello-app.png",
    url: "https://appcolectivos.vercel.app/",
    repo: "https://github.com/usuario/transportes-app",
    galeria: [],
  },
  {
    id: 6,
    title: "JLA App",
    category: "App Web",
    dominio: "Control de clientes y ganancias",
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
      <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Trabajos</h2>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
