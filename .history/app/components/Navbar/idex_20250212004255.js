"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      if (window.innerWidth <= 768) {
        setButtonText("Reunite");
      } else {
        setButtonText("Reunite con nosotros");
      }
    };

    updateText(); 
    window.addEventListener("resize", updateText);

    return () => window.removeEventListener("resize", updateText);
  }, []);
  return (
    <nav className={`${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      } fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center">
            <Image
              src="/assets/deamon-icon-B-s.png"
              width={200}
              height={200}
              alt="Deamon Icon"
            />
          </Link>
        
        {/*menú hamburguesa */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white  hover:bg-[#673372a8] focus:ring-4 focus:outline-none focus:ring-[#36203a] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#673372a8] dark:hover:bg-[#36203a] dark:focus:ring-[#673372bd]">
          {buttonText}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#36203a] dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only"></span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

   
        <div className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 z-50`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 z-50">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-[#36203a] rounded-sm md:bg-transparent md:text-[#36203a] md:p-0 md:dark:text-[#ba73f5]" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#equipo" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36203a] md:p-0 md:dark:hover:text-[#ba73f5] dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Equipo</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36203a] md:p-0 md:dark:hover:text-[#ba73f5] dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Desarrollo Web</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36203a] md:p-0 md:dark:hover:text-[#ba73f5] dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Diseño Gráfico</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36203a] md:p-0 md:dark:hover:text-[#ba73f5] dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Trabajos</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#36203a] md:p-0 md:dark:hover:text-[#ba73f5] dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contactos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
