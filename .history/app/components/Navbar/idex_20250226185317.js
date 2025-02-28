"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false); // Estado para mostrar Calendly
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
    { href: "#equipo", label: "Equipo" },
    { href: "#desarrollo", label: "Desarrollo Web", isRoute: true }, 
    { href: "#diseno-grafico", label: "Diseño Gráfico" },
    { href: "#trabajos", label: "Trabajos" },
    { href: "#contacto", label: "Contactos" },
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
    <nav className={`${isScrolled ? "bg-black shadow-md" : "bg-transparent"} fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => router.push("/")} className="flex items-center">
          <Image src="/assets/deamon-icon-B-s.png" width={200} height={200} alt="Deamon Icon" />
        </button>

        {/* Menú hamburguesa */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="text-white bg-[#673372a8] hover:bg-[#36203a] focus:ring-4 focus:outline-none focus:ring-[#36203a] font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            {buttonText}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 z-50`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 z-50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href, link.isRoute)}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeLink === link.href
                      ? "text-[#673372] font-bold"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36203a]"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative w-full md:w-[500px]">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setShowCalendly(false); // Resetea el modal al cerrarlo
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>

            {/* Contenido condicional */}
            {!showCalendly ? (
              <>
                <h2 className="text-xl font-bold mb-4 text-center text-[#673372]">¿Por qué elegirnos?</h2>
                <p className="text-gray-700 text-center">
                  Nuestro equipo ofrece soluciones personalizadas en desarrollo web y software. Nos enfocamos en calidad, innovación y satisfacción del cliente.
                </p>

                {/* Video de YouTube */}
                <div className="relative w-full h-0 pb-[56.25%] mt-4">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="/assets/video/impulso.mp4"
                    title="Video de presentación"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Botón para abrir Calendly */}
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="bg-[#673372] text-white px-4 py-2 rounded-lg hover:bg-[#36203a]"
                  >
                    Agendar reunión
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4 text-center text-[#673372]">Agenda tu reunión</h2>
                
                {/* Calendly embebido */}
                <div className="w-screen h-full">
                  <iframe
                    src="https://calendly.com/deamoncompany18/30min"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
