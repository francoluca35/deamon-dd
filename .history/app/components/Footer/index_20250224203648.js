import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start gap-6 text-center md:text-left">
          {/* Desarrollo Web */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 md:w-1/4"
          >
            <h2 className="text-lg font-bold mb-4">Desarrollo Web</h2>
            <ul className="space-y-2 text-sm">
              <li>Páginas Web Simples</li>
              <li>Páginas Web Profesionales</li>
              <li>Páginas Web Catálogo</li>
              <li>Páginas Web Ecommerce</li>
            </ul>
          </motion.div>

          {/* Diseño Gráfico */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full sm:w-1/2 md:w-1/4"
          >
            <h2 className="text-lg font-bold mb-4">Diseño Gráfico</h2>
            <ul className="space-y-2 text-sm">
              <li>Diseño de logos</li>
              <li>Diseño gráfico de alto impacto</li>
              <li>Diseño vehicular de competición</li>
              <li>Diseño UI/UX</li>
            </ul>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full sm:w-full md:w-1/4"
          >
            <h2 className="text-lg font-bold mb-4">Redes Sociales</h2>
            <div className="flex justify-center md:justify-start space-x-6 mt-2">
              <motion.a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <FaWhatsapp className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="mailto:example@gmail.com"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Línea de separación y créditos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-10 border-t border-purple-950 pt-4 text-center text-sm text-gray-400"
        >
          Created by @Deamon Company.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;