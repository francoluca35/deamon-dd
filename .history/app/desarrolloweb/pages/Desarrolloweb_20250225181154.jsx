"use client";
import { motion } from "framer-motion";

export default function Desarrolloweb() {
  const items = ["Landing Pages", "E-commerce", "Web Corporativas"];

  return (
    <div className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
      <h2 className="text-5xl font-bold mb-10">Desarrollo Web</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white text-black rounded-xl shadow-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}