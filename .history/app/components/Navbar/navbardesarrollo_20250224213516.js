"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";
import { motion } from "framer-motion";

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
    if (isRoute) {
      router.push(href); 
    } else {
      window.location.href = href; 
    }
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      } fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 min-h-[60px]`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => router.push("/")} className="flex items-center">
          <Image
            src="/assets/deamon-icon-B-s.png"
            width={150} 
            height={150}
            alt="Deamon Icon"
            className="w-[120px] md:w-[150px] transition-all"
          />
        </button>

        {/* Menú hamburguesa */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:bg-[#673372a8] focus:ring-4 focus:outline-none focus:ring-[#36203a] font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            {buttonText}
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only"></span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Menú desplegable */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className={`overflow-hidden md:flex md:w-auto md:order-1 z-50 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href, link.isRoute)}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeLink === link.href
                      ? " text-[#673372] font-bold "
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent hover:text-[#673372] md:hover:text-[#36203a] dark:text-white dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navdesarrollo;
