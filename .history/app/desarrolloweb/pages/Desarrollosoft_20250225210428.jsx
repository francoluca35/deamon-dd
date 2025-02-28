'use client';

import { useState } from 'react';

// Componente personalizado de botón
function Button({ children, onClick, isActive }) {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-all ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Componente personalizado de tarjeta con hover interactivo
function Card({ title, category, image }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg border">
      <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{category}</p>
      </div>
    </div>
  );
}

const projects = [
  { id: 1, title: 'Website Jobs', category: 'Páginas Web', image: '/assets/proyectos/jla.jpg' },
  { id: 2, title: 'Portfolio Website', category: 'Páginas Web', image: '/assets/proyectos/portfolio.jpg' },
  { id: 3, title: 'Generador de PDF rutinaro', category: 'App Web', image: '/assets/proyectos/bioapp.jpg' },
  { id: 4, title: 'Aplicación del clima', category: 'App Web', image: '/assets/proyectos/app-clima.jpg' },
  { id: 5, title: 'Panel de inventario', category: 'Programas Desktop', image: '/assets/proyectos/panel.jpg' },
  { id: 6, title: 'Stock Software', category: 'Programas Desktop', image: '/assets/proyectos/stock.jpg' },
];

const categories = ['Todos los Proyectos', 'Páginas Web', 'App Web', 'Programas Desktop'];

export default function TrabajosSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos los Proyectos');

  const filteredProjects = selectedCategory === 'Todos los Proyectos'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Trabajos</h2>
      <div className="flex gap-4 mb-6">
        {categories.map(category => (
          <Button
            key={category}
            isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <Card key={project.id} title={project.title} category={project.category} image={project.image} />
        ))}
      </div>
    </div>
  );
}