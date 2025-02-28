'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("Inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? "bg-black shadow-md" : "bg-transparent"} fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src="/assets/deamon-icon-B-s.png" width={200} height={200} alt="Deamon Icon" />
        </Link>

        {/* Menú Hamburguesa */}
        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100">
          <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {["Inicio", "Equipo", "Desarrollo Web", "Diseño Gráfico", "Trabajos", "Contactos"].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  onClick={() => setActive(item)}
                  className={`block py-2 px-3 rounded-sm transition ${
                    active === item ? "text-[#ba73f5]" : "text-gray-900 hover:text-[#ba73f5]"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
