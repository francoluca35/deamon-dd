"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-6 bg-black text-center text-white"
    >
      &copy; 2025 Todos los derechos reservados.
    </motion.footer>
  );
}