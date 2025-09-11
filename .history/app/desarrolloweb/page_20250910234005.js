"use client";

import { useEffect, useState } from "react";
import Navdesarrollo from "../components/Navbar/navbardesarrollo";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import TrabajosSection from "./pages/Desarrollosoft";
import Pricing from "./pages/Trabajos";
import ArrowUp from "../components/ArrowUp/ArrowUp";
import Footer from "./pages/Footer";

const Website = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background con efecto parallax */}
      <div 
        className="fixed inset-0 bg-[url('/assets/fondoweb.jpg')] bg-cover bg-center bg-no-repeat"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          height: '120%'
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/40"></div>
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
