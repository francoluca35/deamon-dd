"use client";
import { useState, useEffect } from "react";
import Inicio from "./pages/Home";
import Equipo from "./pages/Equipo";
import Especialidades from "./pages/Especialidades";
import Desarrollo from "./pages/Desarrollo";
import Diseño from "./pages/Diseño";
import PCompetition from "./pages/PCompeticion";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/WhatsApp";
import Navbar2 from "./components/Navbar/idex";
import ArrowUp from "./components/ArrowUp";

// Puedes utilizar cualquier componente de carga, como PacmanLoader de 'react-spinners'
import { PacmanLoader } from "react-spinners"; // Asegúrate de instalar react-spinners si no lo tienes

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de 2 segundos antes de mostrar el contenido
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Puedes ajustar el tiempo según lo necesites
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-black">
        <PacmanLoader size={50} color="#ffffff" />
      </div>
    );
  }

  return (
    <div>
      <Navbar2 />
      <Inicio />
      <div id="equipo">
        <Equipo />
      </div>
      <ArrowUp />
      <div id="desarrollo">
        <Desarrollo />
      </div>
      <Diseño />
      <PCompetition />
      <Contacto />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
