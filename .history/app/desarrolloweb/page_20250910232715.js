"use client";

import Navdesarrollo from "../components/Navbar/navbardesarrollo";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import TrabajosSection from "./pages/Desarrollosoft";
import Pricing from "./pages/Trabajos";
import ArrowUp from "../components/ArrowUp/ArrowUp";
import Footer from "./pages/Footer";

const Website = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/fondo-web.avif')] bg-cover bg-center  text-white">
      <Navdesarrollo />

      <Home />
      <Vision />
      <TrabajosSection />
      <Pricing />
      <ArrowUp />
      <Footer />
    </div>
  );
};

export default Website;
