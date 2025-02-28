"use client";

import { motion } from "framer-motion";
import Navdesarrollo from "../components/Navbar/navbardesarrollo";


const Website = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
    {/* Sección de Home */}
    <header className="h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Bienvenidos a Nuestra Página
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl"
      >
        Creamos soluciones innovadoras con diseño y tecnología.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-2 bg-white text-purple-700 rounded-full shadow-lg"
      >
        Empezar
      </motion.button>
    </header>

    {/* Sección de Visión y Misión */}
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-purple-100 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Visión</h2>
          <p>Ser líderes en innovación tecnológica brindando soluciones únicas y eficientes.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-indigo-100 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Misión</h2>
          <p>Desarrollar herramientas tecnológicas que transformen ideas en realidades.</p>
        </motion.div>
      </div>
    </section>

    {/* Sección de Desarrollo Web */}
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Desarrollo Web</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white text-black rounded-xl shadow-lg">Landing Pages</div>
          <div className="p-6 bg-white text-black rounded-xl shadow-lg">E-commerce</div>
          <div className="p-6 bg-white text-black rounded-xl shadow-lg">Web Corporativas</div>
        </motion.div>
      </div>
    </section>

    {/* Sección de Desarrollo de Software */}
    <section className="py-20 bg-gradient-to-r from-green-500 to-green-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Desarrollo de Software</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white text-black rounded-xl shadow-lg">Aplicaciones Web</div>
          <div className="p-6 bg-white text-black rounded-xl shadow-lg">Sistemas a Medida</div>
          <div className="p-6 bg-white text-black rounded-xl shadow-lg">Integración de APIs</div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-6 bg-black text-center">
      <p>&copy; 2025 Todos los derechos reservados.</p>
    </footer>
  </div>
  );
};

export default Website;
