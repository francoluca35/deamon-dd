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
    <div className="min-h-screen bg-[url('/assets/fondoweb.jpg')] bg-cover bg-center bg-no-repeat text-white relative">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content wrapper */}
      <div className="relative z-10">
      <Navdesarrollo />

      <Home />
      <Vision />
      <TrabajosSection />
      <Pricing />
      <ArrowUp />
      <Footer />
      </div>
    </div>
  );
};

export default Website;
