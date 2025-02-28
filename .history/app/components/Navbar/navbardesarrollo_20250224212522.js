"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

function Navdesarrollo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [buttonText, setButtonText] = useState("Reunite con nosotros");

  useEffect(() => {
    const updateText = () => {
      setButtonText(window.innerWidth <= 768 ? "Reunite" : "Reunite con nosotros");
    };

    updateText();
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "#equipo", label: "Visión" },
    { href: "#desarrollo", label: "Desarrollo de Software", isRoute: true }, 
    { href: "#diseno-grafico", label: "Desarrollo Web" },
    { href: "#trabajos", label: "Trabajos" },
  ];

  const handleLinkClick = (href, isRoute) => {
    setActiveLink(href);
    setIsOpen(false); // Cierra el menú después de hacer clic
    if (isRoute) {
      router.push(href); 
    } else {
      window.location.href = href; 
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
      style={{ minHeight: "60px" }} // Fija la altura mínima del navbar
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <button onClick={() => router.push("/")} className="flex items-center">
          <Image
            src="/assets/deamon-icon-B-s.png"
            width={120} 
            height={120}
            alt="Deamon Icon"
            className="w-[100px] md:w-[120px] transition-all"
          />
        </button>

        {/* Botón de "Reunite con nosotros" */}
        <button
          type="button"
          className="hidden md:block text-white hover:bg-[#673372a8] focus:ring-4 focus:outline-none focus:ring-[#36203a] font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          {buttonText}
        </button>

        {/* Botón del menú hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable */}
      <div
        className={`md:flex flex-col md:flex-row md:space-x-8 md:items-center md:justify-center ${
          isOpen ? "block" : "hidden"
        } md:block bg-black md:bg-transparent text-white absolute md:relative w-full left-0 top-full md:top-auto md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLinkClick(link.href, link.isRoute)}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  activeLink === link.href
                    ? "text-[#673372] font-bold"
                    : "text-white hover:text-[#673372]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navdesarrollo;
