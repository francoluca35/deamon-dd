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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        {/* Logo Desktop */}
        <div className="hidden md:block">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/deamon-icon-B-s.png"
              width={200}
              height={200}
              alt="Deamon Icon"
            />
          </Link>
        </div>

        {/* Logo Mobile */}
        <div className="md:hidden">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Logo-D-Mobile.png"
              width={80}
              height={80}
              alt="Mobile Deamon Icon"
            />
          </Link>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6">
          {[
            { href: "/", label: "Inicio" },
            { href: "/about", label: "Equipo" },
            { href: "/services", label: "Desarrollo Web" },
            { href: "/graphic-design", label: "Diseño Gráfico" },
            { href: "/works", label: "Trabajos" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white hover:text-[#673372a8] transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-purple-400 text-white px-3 py-2 rounded-lg hover:bg-purple-500 transition duration-300"
          >
            Contacto
          </Link>
        </div>

        {/* Botón de Menú Hamburguesa */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl z-50"
        >
          <X className="w-8 h-8 mt-4" />
        </button>

        {[
          { href: "/", label: "Inicio" },
          { href: "/about", label: "Equipo" },
          { href: "/services", label: "Desarrollo Web" },
          { href: "/graphic-design", label: "Diseño Gráfico" },
          { href: "/works", label: "Trabajos" },
          { href: "/contact", label: "Contacto" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-white text-2xl hover:text-[#673372a8] transition"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
