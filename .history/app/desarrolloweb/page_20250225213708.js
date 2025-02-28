"use client";


import Navdesarrollo from "../components/Navbar/navbardesarrollo";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import TrabajosSection from "./pages/Desarrollosoft";
import Pricing from "./pages/Trabajos";
import Footer from "./pages/Footer";
import ArrowUptow from "../components/ArrowUp";
const Website = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/fondo-dw.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <Navdesarrollo />

      <Home />
      <Vision />
      <TrabajosSection/>
      <Pricing />
      <ArrowUptow />
      <Footer />
    </div>
  );
};

export default Website;
