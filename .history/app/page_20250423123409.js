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

import { GridLoader, PacmanLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-black">
        <GridLoader size={50} color="#3e085d" />
        <p>Cargando...</p>
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
