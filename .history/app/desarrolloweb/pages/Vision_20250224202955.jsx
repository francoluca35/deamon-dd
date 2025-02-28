"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <div className="py-20 bg-white text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-8 bg-purple-100 rounded-xl shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-4">Visión</h2>
          <p>Ser líderes en innovación tecnológica brindando soluciones únicas y eficientes.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-8 bg-indigo-100 rounded-xl shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-4">Misión</h2>
          <p>Desarrollar herramientas tecnológicas que transformen ideas en realidades.</p>
        </motion.div>
      </div>
    </div>
  );
}