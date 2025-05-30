'use client';

import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Rocket, Leaf, Palette, Target, Handshake, BarChart } from 'lucide-react';

const Vision = () => {
  const visionItems = [
    { title: "Innovación", icon: <Lightbulb size={40} /> },
    { title: "Calidad", icon: <ShieldCheck size={40} /> },
    { title: "Eficiencia", icon: <Rocket size={40} /> },
    { title: "Sostenibilidad", icon: <Leaf size={40} /> },
  ];

  const missionItems = [
    { title: "Creatividad", icon: <Palette size={40} /> },
    { title: "Estrategia", icon: <Target size={40} /> },
    { title: "Compromiso", icon: <Handshake size={40} /> },
    { title: "Resultados", icon: <BarChart size={40} /> },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden ">
      <motion.h2
        className="text-5xl font-bold mb-6 mt-8 sm:mt-1"
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
       Ser innovadora, ofrecer soluciones de calidad y generar valor para sus clientes.
      </motion.p>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {visionItems.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div className="mb-4">{item.icon}</motion.div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
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
        className="text-lg max-w-xl text-center sm:max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
       Ayudar a los clientes a interactuar con su audiencia, a través de la creación de estrategias de marketing y comunicación digital.
      </motion.p>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {missionItems.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-xl"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div className="mb-4">{item.icon}</motion.div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
      <br />
    </section>
    
  );
};

export default Vision;
