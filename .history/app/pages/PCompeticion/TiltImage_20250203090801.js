"use client";
import { motion } from "framer-motion";

const TiltImage = () => {
  return (
    <motion.div
      className="w-96 h-96 rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotateX: 0, rotateY: 0 }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.img
        src="/assets/GVC.jpeg"
        alt="Imagen interactiva"
        className="w-full h-full object-cover"
        animate={{ rotateX: 0, rotateY: 0 }}
        whileHover={{ rotateX: 10, rotateY: 10 }}
        transition={{ type: "spring", stiffness: 100 }}
      />
    </motion.div>
  );
};

export default TiltImage;
