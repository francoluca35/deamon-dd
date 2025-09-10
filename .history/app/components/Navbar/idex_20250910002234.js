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
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
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

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "#equipo", label: "Equipo" },
    { href: "#desarrollo", label: "Desarrollo Web", isRoute: true },
    { href: "#diseno-grafico", label: "Diseño Gráfico" },
  ];

  const handleLinkClick = (href, isRoute) => {
    setActiveLink(href);
    if (isRoute) {
      router.push(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`${
        isMobile
          ? "bg-black"
          : isScrolled
          ? "bg-black"
          : "bg-black bg-opacity-40"
      } fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button 
          onClick={() => router.push("/")} 
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg p-1"
          aria-label="Ir al inicio"
          tabIndex={0}
        >
          <Image
            src="/assets/deamon-icon-B-s.png"
            width={200}
            height={200}
            alt="Deamon DD - Agencia de Desarrollo Web"
          />
        </button>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white bg-[#673372a8] hover:bg-[#36203a] focus:ring-4 focus:outline-none focus:ring-[#36203a] font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
            aria-label="Agendar reunión"
            tabIndex={0}
          >
            {buttonText}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
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

        <div
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 z-50`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 z-50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href, link.isRoute)}
                  className="block py-2 px-3 rounded-sm md:p-0 text-white hover:text-[#673372a8] transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li className="relative">
              <div
                onMouseEnter={() => {
                  if (window.innerWidth >= 768) setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 768) setIsDropdownOpen(false);
                }}
                className="relative"
              >
                <button
                  onClick={() => {
                    if (window.innerWidth < 768)
                      setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="block py-2 px-3 rounded-sm md:p-0 text-white hover:text-[#673372a8] transition-colors duration-300"
                >
                  Trabajos ▾
                </button>
                <div
                  className={`absolute left-0 mt-1 bg-[#673372a8] shadow-md rounded-md overflow-hidden w-48 text-white z-50 transition-all duration-300 ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/desarrolloweb?#trabajos");
                    }}
                    className="block px-4 py-2 hover:bg-[#36203a] w-full text-left transition-colors duration-300"
                  >
                    Trabajos de Desarrollo
                  </button>
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/graphic");
                    }}
                    className="block px-4 py-2 hover:bg-[#36203a] w-full text-left transition-colors duration-300"
                  >
                    Trabajos de Diseño
                  </button>
                </div>
              </div>
            </li>

            <li>
              <button
                onClick={() => handleLinkClick("#contacto", false)}
                className="block py-2 px-3 rounded-sm md:p-0 text-white hover:text-[#673372a8] transition-colors duration-300"
              >
                Contactos
              </button>
            </li>
          </ul>
        </div>
      </div>

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
                    className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-800/90"
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
