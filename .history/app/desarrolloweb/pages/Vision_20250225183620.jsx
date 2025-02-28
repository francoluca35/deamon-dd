'use client';

import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <motion.h2
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nuestra Visión
      </motion.h2>
      
      <motion.p
        className="text-lg max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
       ser innovadora, ofrecer soluciones de calidad y generar valor para sus clientes
      </motion.p>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
      >
        {["Innovación", "Calidad", "Eficiencia", "Sostenibilidad"].map((title, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            />
            <h3 className="text-xl font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

     <br />
      <motion.h2
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nuestra Misión
      </motion.h2>
      
      <motion.p
        className="text-lg max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
       ayudar a los clientes a interactuar con su audiencia, a través de la creación de estrategias de marketing y comunicación digital
      </motion.p>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
      >
        {["Creatividad", "Estrategia", "Compromiso", "Resultados"].map((title, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-xl"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            />
            <h3 className="text-xl font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Vision;
