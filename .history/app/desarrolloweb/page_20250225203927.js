"use client";

import { motion } from "framer-motion";
import Navdesarrollo from "../components/Navbar/navbardesarrollo";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import TrabajosSection from "./pages/Desarrollosoft";
import Desarrollosoft from "./pages/Desarrollosoft";
import Pricing from "./pages/Trabajos";
import Footer from "./pages/Footer";

const Website = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/fondo-dw.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <Navdesarrollo />

      <Home />
      <Vision />
      <TrabajosSection/>
      <Pricing />
      <Footer />
    </div>
  );
};

export default Website;
