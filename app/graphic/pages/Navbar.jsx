"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const LOGO_URL = "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/home/deamon-icon-B.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = () => {
    const message = encodeURIComponent("Hola, me gustaría contactar con Deamon Estudio para un proyecto de diseño.");
    window.open(`https://wa.me/541131199882?text=${message}`, "_blank");
  };

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src={LOGO_URL}
            alt="DeamonDD Logo"
            width={120}
            height={50}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleContact}
            className="px-6 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-gray-200 transition-colors"
          >
            Contactar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 text-center uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleContact();
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors"
            >
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
