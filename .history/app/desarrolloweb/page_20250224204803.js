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
    <div className="min-h-screen bg-gradient-to-br from-violet-700 to-indigo-100 text-white">
      <Navdesarrollo />

      <Home />

      <Vision />

      <Desarrolloweb />

      <Desarrollosoft />

      <Footer />
    </div>
  );
};

export default Website;
