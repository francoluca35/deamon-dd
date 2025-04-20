"use client";

import { useState } from "react";

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

function Card({ title, category, image, url }) {
  return (
    <div className="relative group overflow-hidden shadow-lg mb-10">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl font-semibold text-center px-4 underline hover:text-gray-300 transition-colors duration-200"
        >
          {title}
        </a>
        <p className="text-gray-300 text-center px-4">{category}</p>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "JLA Tecnico",
    dominio: "Páginas Web Industrial",
    category: "Páginas Web",
    image: "/assets/Proyectos/jla.jpg",
    url: "https://jlatecnicos.com",
  },
  {
    id: 2,
    title: "TorinoCars",
    dominio: "Páginas Web Taller Mecanico",
    category: "Páginas Web",
    image: "/assets/Proyectos/torinocar.jpg",
    url: "https://c24129-torinocars.netlify.app",
  },
  {
    id: 3,
    title: "Empresa De Viajes",
    category: "Páginas Web",
    dominio: "Página Web Para Viajes",
    image: "/assets/Proyectos/maurello-web.png",
    url: "https://empresacolectivo.vercel.app",
  },
  {
    id: 4,
    title: "Yael App",
    category: "App Web",
    dominio: "Aplicación para reserva de canchas",
    image: "/assets/Proyectos/yael-app.png",
    url: "https://yael-app.vercel.app",
  },
  {
    id: 5,
    title: "Transportes App",
    category: "App Web",
    dominio:
      "Aplicación para control administrador de reservas, pagos, y viajes.",
    image: "/assets/Proyectos/maurello-app.png",
    url: "https://appcolectivos.vercel.app/",
  },
  {
    id: 6,
    title: "JLA App",
    category: "App Web",
    dominio: "Aplicación de control para clientes y ganacias",
    image: "/assets/Proyectos/stock.jpg",
    url: "https://stock-software.com",
  },
];

const categories = [
  "Todos los Proyectos",
  "Páginas Web",
  "App Web",
  "Programas Desktop",
];

export default function TrabajosSection() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Todos los Proyectos"
  );

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
            title={project.title}
            category={project.dominio}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
