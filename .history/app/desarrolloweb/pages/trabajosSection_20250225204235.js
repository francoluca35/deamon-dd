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

// Componente personalizado de tarjeta
function Card({ children }) {
  return <div className="p-4 shadow-lg border rounded-lg">{children}</div>;
}

// Contenido de la tarjeta
function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}

const projects = [
  { id: 1, title: 'E-Commerce Website', category: 'Páginas Web' },
  { id: 2, title: 'Portfolio Website', category: 'Páginas Web' },
  { id: 3, title: 'Task Management App', category: 'App Web' },
  { id: 4, title: 'Chat Application', category: 'App Web' },
  { id: 5, title: 'Inventory System', category: 'Programas Desktop' },
  { id: 6, title: 'Billing Software', category: 'Programas Desktop' },
];

const categories = ['Todos los Proyectos', 'Páginas Web', 'App Web', 'Programas Desktop'];

export default function TrabajosSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos los Proyectos');

  const filteredProjects = selectedCategory === 'Todos los Proyectos'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Nuestros Trabajos</h2>
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
          <Card key={project.id}>
            <CardContent>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500">{project.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}