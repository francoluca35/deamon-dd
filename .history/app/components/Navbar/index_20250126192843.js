import React from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Home, Menu as MenuIcon, User } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 flex items-center">
            <Home className="w-5 h-5 mr-2" /> MyApp
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">Inicio</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition"> Equipo</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Diseño Web</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Diseño Grafico</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Trabajos</Link>

          <br/>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition ml-11">Contacto</Link>
        </div>
{/* 
        <div className="md:hidden relative">
          <Menu>
            <Menu.Button className="text-gray-800 focus:outline-none">
              <MenuIcon className="w-6 h-6" />
            </Menu.Button>
            <Transition
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
                      href="/about"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-800" : "text-gray-700"
                      }`}
                    >
                      About
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
                      Services
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
                      Contact
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div> */}


      </div>
    </nav>
  );
};

export default NavBar;
