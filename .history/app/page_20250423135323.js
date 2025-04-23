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
      <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center  lg:bg-[url('/assets/background-loader.png')]">
        <div className="flex flex-col items-center">
          <GridLoader size={30} color="#3e085d" />
          <p className="mt-4 text-purple-600 text-3xl font-bold shadow-lg">
            Cargando...
          </p>
        </div>
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
