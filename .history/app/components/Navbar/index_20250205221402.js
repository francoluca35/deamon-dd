"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-black" : "bg-transparent"
      } shadow-md fixed w-full transition-colors duration-300 z-50 `}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center space-x-4 md:block hidden">
          <Link href="/" className="text-xl font-bold text-white flex items-center">
            <Image src="/assets/deamon-icon-B-s.png" width={200} height={200} alt="Deamon Icon" />
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:hidden block">
          <Link href="/" className="text-xl font-bold text-white flex items-center">
            <Image src="/assets/Logo-D-Mobile.png" width={80} height={80} alt="Mobile Deamon Icon" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-white hover:text-[#673372a8] transition">Inicio</Link>
          <Link href="/services" className="text-white hover:text-[#673372a8] transition">Equipo</Link>
          <Link href="/contact" className="text-white hover:text-[#673372a8] transition">Diseño Web</Link>
          <Link href="/contact" className="text-white hover:text-[#673372a8] transition">Diseño Gráfico</Link>
          <Link href="/contact" className="text-white hover:text-[#673372a8] transition">Trabajos</Link>
          <Link href="/contact" className="bg-purple-400 text-white px-2 py-1 -mt-1 rounded-lg hover:bg-purple-500 transition duration-300">Contacto</Link>
        </div>

        <div className="md:hidden relative z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <p></p> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-40">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl z-50">
            <X className="w-10 h-10" />
          </button>
          {[{ href: "/", label: "Inicio" },
            { href: "/about", label: "Equipo" },
            { href: "services", label: "Desarrollo Web" },
            { href: "/services", label: "Diseño Gráfico" },
            { href: "/about", label: "Trabajos" },
            { href: "/contact", label: "Contacto" }
          ].map((item, index) => (
            <Link key={index} href={item.href} className="text-white text-2xl hover:text-[#673372a8] transition">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
