"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
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
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
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
          <Link
            href="/about"
            className="text-white hover:text-[#673372a8] transition"
          >
            Inicio
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-[#673372a8] transition"
          >
            Equipo
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#673372a8] transition"
          >
            Diseño Web
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#673372a8] transition"
          >
            Diseño Gráfico
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#673372a8] transition"
          >
            Trabajos
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-purple-500 transition"
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
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                      }`}
                    >
                      Inicio
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                      }`}
                    >
                      Equipo
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                      }`}
                    >
                      Desarrollo Web
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/services"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                      }`}
                    >
                      Diseño Grafico
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                      }`}
                    >
                      Trabajos
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/contact"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                      }`}
                    >
                      Contacto
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
