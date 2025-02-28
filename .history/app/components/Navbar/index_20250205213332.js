"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-black" : "bg-transparent"
      } shadow-md fixed w-full transition-colors duration-300 z-50 `}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center space-x-4 md:block hidden">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-[#673372a8] flex items-center"
          >
            <Image
              src="/assets/deamon-icon-B-s.png"
              width={200}
              height={200}
              alt="Deamon Icon"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:hidden block">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-[#673372a8] flex items-center"
          >
            <Image
              src="/assets/Logo-D-Mobile.png"
              width={80}
              height={80}
              alt="Mobile Deamon Icon"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-white hover:text-[#673372a8] transition">
            Inicio
          </Link>
          <Link href="/services" className="text-white hover:text-[#673372a8] transition">
            Equipo
          </Link>
          <Link href="/contact" className="text-white hover:text-[#673372a8] transition">
            Diseño Web
          </Link>
          <Link href="/contact" className="text-white hover:text-[#673372a8] transition">
            Diseño Gráfico
          </Link>
          <Link href="/contact" className="text-white hover:text-[#673372a8] transition">
            Trabajos
          </Link>
          <Link
            href="/contact"
            className="bg-purple-400 text-white px-2 py-1 -mt-1 rounded-lg hover:bg-purple-500 transition duration-300"
          >
            Contacto
          </Link>
        </div>

        <div className="md:hidden relative">
          <Menu as="div" className="relative">
            <Menu.Button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <MenuIcon className="w-8 h-8" />
            </Menu.Button>

            <Transition
              show={isOpen}
              as={React.Fragment}
              enter="transition-transform duration-300 ease-out"
              enterFrom="transform -translate-y-10 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition-transform duration-200 ease-in"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-10 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg focus:outline-none">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "/about", label: "Equipo" },
                  { href: "/about", label: "Desarrollo Web" },
                  { href: "/services", label: "Diseño Gráfico" },
                  { href: "/about", label: "Trabajos" },
                  { href: "/contact", label: "Contacto" },
                ].map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;