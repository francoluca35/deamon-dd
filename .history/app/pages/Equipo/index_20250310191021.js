'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Equipo() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Primera Sección */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold">EQUIPO</h2>
          <p className="mt-4 text-lg">
            Nuestra agencia está conformada por un equipo permanente de profesionales, compuesto por diseñadores gráficos, 
            desarrolladores web, diseñadores industriales, fotógrafos y programadores; pero lo más importante: ¡trabajamos en EQUIPO!
          </p>
          <button 
            className="mt-6 px-6 py-3 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition"
            onClick={scrollToTeam}
          >
            CONÓCENOS
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/assets/yo-franco.png" alt="Logo" width={80} height={80} />
        </div>
      </div>

      {/* Segunda Sección (Oculta hasta hacer scroll) */}
      <div ref={teamRef} className="w-full py-20 bg-gray-100 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <img src="/team1.jpg" alt="Miembro 1" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg font-bold">Nombre 1</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <img src="/team2.jpg" alt="Miembro 2" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg font-bold">Nombre 2</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <img src="/team3.jpg" alt="Miembro 3" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg font-bold">Nombre 3</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <img src="/team4.jpg" alt="Miembro 4" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg font-bold">Nombre 4</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}