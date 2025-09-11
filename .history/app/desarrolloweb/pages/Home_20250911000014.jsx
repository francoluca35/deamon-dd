"use client";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToVision = () => {
    const target = document.getElementById("vision");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const text = "Bienvenidos a Nuestra Página";
  const letters = text.split("");

  return (
    <div
      id="inicio"
      className="h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-6 flex flex-wrap justify-center"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            style={{
              background: "linear-gradient(45deg, #29335c, #007bff, #0056b3, #96ceb4, #29335c, #ff9ff3, #004080)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: `gradientShift 3s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
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
        whileTap={{ scale: 0.95 }}
        onClick={scrollToVision}
        className="mt-6 px-6 py-2 bg-transparent border-2 border-gray-600 text-gray-200 rounded-full shadow-lg"
      >
        Descubrir Más
      </motion.button>
    </div>
  );
}
