"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-6"
      >
        Bienvenidos a Nuestra Página
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl"
      >
        Soluciones innovadoras con diseño y tecnología.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-2 bg-transparent border-2 border-purple-700 text-purple-700 rounded-full shadow-lg"
      >
        Descubrir Más
      </motion.button>
    </div>
  );
}