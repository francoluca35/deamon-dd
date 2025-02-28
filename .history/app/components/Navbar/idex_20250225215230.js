"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav className={`${isScrolled ? "bg-black shadow-md" : "bg-transparent"} fixed w-full z-20 top-0 start-0 border-b border-gray-200`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => router.push("/")} className="flex items-center">
          <Image src="/assets/deamon-icon-B-s.png" width={200} height={200} alt="Deamon Icon" />
        </button>

        <div className="flex md:order-2">
          <button onClick={() => setIsModalOpen(true)} className="text-white bg-[#673372] hover:bg-[#36203a] px-4 py-2 rounded-lg">Reunite con nosotros</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">✖</button>
            <h2 className="text-xl font-bold mb-4 text-center text-[#673372]">¿Por qué elegirnos?</h2>
            <p className="text-gray-700 text-center mb-4">Mira este video y agenda una reunión con nosotros.</p>
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/TU_VIDEO_ID" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="mt-4">
              <iframe src="https://calendly.com/TU_ENLACE_CALENDLY" width="100%" height="400px" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
