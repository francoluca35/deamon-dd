"use client";

import { useState } from "react";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

// Botón reutilizable, con visual destacado si está activo
function ButtonCategory({ children, onClick, activo }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${
        activo
          ? "bg-black text-white shadow-lg"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

// Modal de galería, mostrando imagen seleccionada y thumbnails navegables
function GaleriaModal({ imagenes, alCerrar }) {
  const [indiceActivo, setIndiceActivo] = useState(0);

  function irSiguienteImagen() {
    setIndiceActivo((actual) => (actual + 1) % imagenes.length);
  }

  function irAnteriorImagen() {
    setIndiceActivo((actual) => (actual - 1 + imagenes.length) % imagenes.length);
  }

  function seleccionarImagen(index) {
    setIndiceActivo(index);
  }

  function renderThumbnails() {
    return imagenes.map((src, index) => (
      <Image
        key={index}
        src={src}
        alt={`Miniatura del proyecto - Imagen ${index + 1}`}
        width={96}
        height={64}
        onClick={() => seleccionarImagen(index)}
        className={`h-16 w-24 object-cover cursor-pointer rounded border-2 ${
          index === indiceActivo ? "border-black" : "border-transparent"
        }`}
      />
    ));
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4"
      onClick={alCerrar}
    >
      <div
        className="bg-black/40 p-6 rounded-xl max-w-4xl w-full relative shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={alCerrar}
          className="absolute top-4 right-4 text-white hover:text-gray-400 text-2xl font-black z-10"
        >
          X
        </button>

        <div className="relative flex justify-center items-center">
          <button
            onClick={irAnteriorImagen}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100 z-10"
            aria-label="Anterior"
          >
            <FiChevronLeft size={20} />
          </button>

          <Image
            src={imagenes[indiceActivo]}
            alt={`Proyecto de desarrollo web - Imagen ${indiceActivo + 1}`}
            width={600}
            height={320}
            className="w-full max-h-[320px] object-contain rounded"
          />

          <button
            onClick={irSiguienteImagen}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100 z-10"
            aria-label="Siguiente"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        <div className="mt-4 flex gap-2 justify-center overflow-x-auto">
          {renderThumbnails()}
        </div>
      </div>
    </div>
  );
}

// Lógica de renderizado de vínculos y botones inferiores de la Card
function OpcionesCard({ tieneGaleria, abrirGaleria, repo, url }) {
  return (
    <>
      {tieneGaleria && (
        <button
          onClick={abrirGaleria}
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
    </>
  );
}

// 1 Card: muestra imagen, título, categoría y acciones
function CardProyecto({ title, category, image, url, repo, galeria, onOpenGaleria }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md mb-10 bg-white">
      <Image
        src={image}
        alt={`${title} - Proyecto de desarrollo web`}
        width={400}
        height={256}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <OpcionesCard
          tieneGaleria={!!galeria?.length}
          abrirGaleria={onOpenGaleria}
          repo={repo}
          url={url}
        />
      </div>
    </div>
  );
}

// Datos de ejemplo de proyectos
const proyectos = [
  {
    id: 1,
    title: "JLA Tecnico",
    dominio: "Web Industrial",
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
    dominio: "App Comandas",
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
    category: "App Web",
    dominio: "Control de clientes",
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
    title: "Caruso App",
    category: "App Web",
    dominio: "Reserva de canchas",
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/proyectos/yael-app.jpg",
    url: "https://caruso-app.vercel.app",
    repo: "https://github.com/francoluca35/yael-app/",
    galeria: [
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018644/deamon-dd/proyectos/yael-app.jpg",
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018646/deamon-dd/proyectos/carusoweb1.jpg",
    ],
  },
  {
    id: 6,
    title: "Transportes App",
    category: "App Web",
    dominio: "Reservas y viajes",
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/maurello-app.png",
    repo: "https://github.com/francoluca35/appcolectivos",
    galeria: [
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/proyectos/maurello-app.png",
      "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/proyectos/maureloapp.jpg",
    ],
  },
];

const categorias = ["Todos los Proyectos", "Páginas Web", "App Web"];

// Filtra la lista de proyectos según la categoría seleccionada
function filtrarProyectosPorCategoria(todosProyectos, categoriaSeleccionada) {
  if (categoriaSeleccionada === "Todos los Proyectos") return todosProyectos;
  return todosProyectos.filter(proyecto => proyecto.category === categoriaSeleccionada);
}

export default function TrabajosSection() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos los Proyectos");
  const [imagenesGaleria, setImagenesGaleria] = useState(null);

  const proyectosFiltrados = filtrarProyectosPorCategoria(proyectos, categoriaSeleccionada);

  function renderCategorias() {
    return categorias.map((categoria) => (
      <ButtonCategory
        key={categoria}
        activo={categoriaSeleccionada === categoria}
        onClick={() => setCategoriaSeleccionada(categoria)}
      >
        {categoria}
      </ButtonCategory>
    ));
  }

  function renderProyectos() {
    return proyectosFiltrados.map((proyecto) => (
      <CardProyecto
        key={proyecto.id}
        {...proyecto}
        onOpenGaleria={() => setImagenesGaleria(proyecto.galeria)}
      />
    ));
  }

  return (
    <div id="trabajos" className="pt-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-300">
        Nuestros Trabajos
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {renderCategorias()}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {renderProyectos()}
      </div>

      {imagenesGaleria && (
        <GaleriaModal
          imagenes={imagenesGaleria}
          alCerrar={() => setImagenesGaleria(null)}
        />
      )}
    </div>
  );
}
