"use client";
import { motion } from "framer-motion";

export default function Desarrollosoft() {
  const items = ["Aplicaciones Web", "Sistemas a Medida", "Integración de APIs"];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-r from-green-500 to-green-700 text-white text-center flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">Desarrollo de Software</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white text-black rounded-xl shadow-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
