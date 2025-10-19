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
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // Array de logos para alternar con sus configuraciones
  const logos = [
    {
      src: "/assets/deamon-icon-B-s.avif",
      width: 200,
      height: 200
    },
    {
      src: "/assets/Logo-equipo-B.avif",
      width: 60,
      height: 60
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      setButtonText(
        window.innerWidth <= 768 ? "Reunite" : "Reunite con nosotros"
      );
    };
    updateText();
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Alternar logos automáticamente cada 3 segundos
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(logoInterval);
  }, [logos.length]);

  const navLinks = [
   
    { href: "#equipo", label: "Agencia" },
    { href: "#branding", label: "Branding" },
    { href: "#desarrollo", label: "Desarrollo Web", isRoute: true },
    { href: "#marketing", label: "Marketing", isRoute: true },
    { href: "#diseño", label: "Diseño Gráfico", isRoute: true },
    
  ];

  const handleLinkClick = (href, isRoute) => {
    setActiveLink(href);
    if (isRoute) {
      router.push(href);
    } else {
      window.location.href = href;
    }
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay
    setHoverTimeout(timeout);
  };

  return (
    <nav
      className={`${
        isMobile
          ? "bg-black bg-opacity-40"
          : isScrolled
          ? "bg-black bg-opacity-40"
          : "bg-transparent"
      } fixed w-full z-20 top-0 start-0 z-50  `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button 
          onClick={() => router.push("/")} 
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg p-1"
          aria-label="Ir al inicio"
          tabIndex={0}
        >
          <div className="relative w-[200px] h-[60px] flex items-center justify-center">
            {logos.map((logo, index) => (
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt="Deamon DD - Agencia de Desarrollo Web"
                className={`absolute transition-opacity duration-1500 ease-in-out ${
                  index === currentLogoIndex 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </button>

        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={handleMouseEnter}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            aria-label="Abrir menú de navegación"
            tabIndex={0}
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

        {/* Menú móvil overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Botón de cerrar */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded p-1"
                  aria-label="Cerrar menú"
                  tabIndex={0}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Elementos del menú */}
              <ul className="px-6 py-4 space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => {
                        handleLinkClick(link.href, link.isRoute);
                        setIsOpen(false);
                      }}
                      className="block text-white text-lg font-semibold hover:text-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded py-2"
                      aria-label={`Navegar a ${link.label}`}
                      tabIndex={0}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}


                <li>
                  <button
                    onClick={() => {
                      handleLinkClick("#contacto", false);
                      setIsOpen(false);
                    }}
                    className="block text-white text-lg font-semibold hover:text-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded py-2"
                    aria-label="Ir a la sección de contacto"
                    tabIndex={0}
                  >
                    Escribinos
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Menú desktop normal */}
        <div
          className={`items-center justify-between hidden lg:flex lg:w-auto lg:order-1`}
          id="navbar-sticky"
        >
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium lg:space-x-8 lg:flex-row lg:mt-0 z-50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href, link.isRoute)}
                  className="block py-2 px-3 rounded-sm lg:p-0 text-white hover:border-b-2 hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  aria-label={`Navegar a ${link.label}`}
                  tabIndex={0}
                >
                  {link.label}
                </button>
              </li>
            ))}



            <li>
              <button
                onClick={() => handleLinkClick("#contacto", false)}
                className="block py-2 px-3 rounded-sm lg:p-0 text-white hover:border-b-2 hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Ir a la sección de contacto"
                tabIndex={0}
              >
                Escribinos
              </button>
            </li>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative w-full md:w-[500px]" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setShowCalendly(false);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
              aria-label="Cerrar modal"
              tabIndex={0}
            >
              ✖
            </button>
            {!showCalendly ? (
              <>
                <h2 id="modal-title" className="text-xl font-bold mb-4 text-center text-purple-800">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-gray-700 text-center">
                  Nuestro equipo ofrece soluciones personalizadas en desarrollo
                  web y diseño. Nos enfocamos en calidad, innovación y
                  satisfacción del cliente.
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
                    className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-800/90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
                    aria-label="Abrir calendario para agendar reunión"
                    tabIndex={0}
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
