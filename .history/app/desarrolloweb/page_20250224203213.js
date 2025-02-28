"use client";

import { motion } from "framer-motion";
import Navdesarrollo from "../components/Navbar/navbardesarrollo";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Desarrolloweb from "./pages/Desarrolloweb";
import Desarrollosoft from "./pages/Desarrollosoft";
import Footer from "./pages/Footer";

const Website = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      <Navdesarrollo />
    {/* Sección de Home */}
 <Home/>

    {/* Sección de Visión y Misión */}
<Vision/>

    {/* Sección de Desarrollo Web */}
    <Desarrolloweb/>

    {/* Sección de Desarrollo de Software */}
 <Desarrollosoft/>

    {/* Footer */}
  <Footer/>
  </div>
  );
};

export default Website;
