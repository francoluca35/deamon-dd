"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Array de logos
  const logos = [
    { src: "/assets/deamon-icon-B-s.avif", width: 200, height: 200 },
    { src: "/assets/Logo-equipo-B.avif", width: 60, height: 60 },
  ];

  // Detectar ancho
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Texto del botón
  const [buttonText, setButtonText] = useState("Reunite con nosotros");
  useEffect(() => {
    const updateText = () => {
      setButtonText(window.innerWidth <= 768 ? "Reunite" : "Reunite con nosotros");
    };
    updateText();
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  }, []);

  // Limpiar timeout
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  // Alternar logos
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 4000);
    return () => clearInterval(logoInterval);
  }, [logos.length]);

  // Links del menú
  const navLinks = [
    { href: "#", label: "Inicio" },
    { href: "#equipo", label: "Agencia" },
    { href: "#branding", label: "Branding" },
    { href: "#desarrollo", label: "Desarrollo Web", isRoute: true },
    { href: "#marketing", label: "Marketing Digital" },
    { href: "#diseño", label: "Diseño Gráfico" },
  ];

  const handleLinkClick = (href, isRoute) => {
    setActiveLink(href);
    if (isRoute) router.push(href);
    else window.location.href = href;
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 150);
    setHoverTimeout(timeout);
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        isMobile
          ? "bg-black bg-opacity-40"
          : isScrolled
          ? "bg-black bg-opacity-40 shadow-lg"
          : "bg-[#050007]"
      }`}
      style={{
        backgroundImage: "none",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg p-1 flex-shrink-0"
          aria-label="Ir al inicio"
        >
          <div className="relative w-[200px] h-[60px] flex items-center justify-center">
            {logos.map((logo, index) => (
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt="Deamon DD - Agencia"
                className={`absolute transition-opacity duration-[1500ms] ease-in-out ${
                  index === currentLogoIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </button>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href, link.isRoute)}
              className={`text-white hover:text-purple-300 transition-colors duration-300 px-3 py-2 font-medium ${
                activeLink === link.href ? "text-purple-400" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("#contacto", false)}
            className="text-white hover:text-purple-300 transition-colors duration-300 px-3 py-2 font-medium"
          >
            Contactos
          </button>
        </div>

        {/* Botones derecha */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white bg-[#673372a8] hover:bg-[#36203a] focus:ring-4 focus:outline-none focus:ring-[#36203a] font-medium rounded-lg text-sm px-4 py-2 transition-colors"
          >
            {buttonText}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={handleMouseEnter}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            aria-label="Abrir menú de navegación"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1h15M1 7h15M1 13h15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Calendly */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative w-full md:w-[500px]">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setShowCalendly(false);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            {!showCalendly ? (
              <>
                <h2 className="text-xl font-bold mb-4 text-center text-purple-800">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-gray-700 text-center">
                  Nuestro equipo ofrece soluciones personalizadas en desarrollo web y diseño.  
                  Nos enfocamos en calidad, innovación y satisfacción del cliente.
                </p>
                <div className="relative w-full h-0 pb-[56.25%] mt-4">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/cnYXkbUHKeo"
                    title="Video de presentación"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-800/90 transition-colors"
                  >
                    Agendar reunión
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src="https://calendly.com/deamoncompany18/30min"
                width="100%"
                height="700"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
