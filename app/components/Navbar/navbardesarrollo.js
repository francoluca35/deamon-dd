"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

function Navdesarrollo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#vision", label: "Servicios" },
    { href: "#trabajos", label: "Proyectos" },
    { href: "#Servicio", label: "Precios" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleContact = () => {
    const phone = "+541131199882";
    const message = "Hola, me gustaría conocer más sobre los servicios de desarrollo web de Deamon Estudio.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => router.push("/")} className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/home/deamon-icon-B-desarrollo.png"
            width={140}
            height={40}
            alt="DeamonDD Logo"
            className="h-8 md:h-10 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-sm transition-colors ${
                activeLink === link.href
                  ? "text-white font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={handleContact}
            className="px-5 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl p-2"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block w-full text-left py-2 text-sm transition-colors ${
                  activeLink === link.href
                    ? "text-white font-medium"
                    : "text-gray-400"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                handleContact();
                setIsOpen(false);
              }}
              className="w-full mt-4 px-5 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg"
            >
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navdesarrollo;
