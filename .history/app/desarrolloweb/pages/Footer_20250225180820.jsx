"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full py-6 px-4 bg-black text-center text-white"
    >
      &copy; 2025 Todos los derechos reservados.
    </footer>
  );
}
