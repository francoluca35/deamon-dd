'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Primera Sección */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 text-center md:text-left">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
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
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/logo.png" alt="Logo" className="w-52" />
        </div>
      </div>

      {/* Segunda Sección (Distribución personalizada) */}
      <div ref={teamRef} className="w-full py-20 bg-gray-100 mt-20 flex flex-col items-center">
        <div className="relative w-full max-w-6xl h-[700px]">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-black"></div>
          {/* Línea diagonal izquierda */}
          <div className="absolute left-[25%] top-[50%] w-[2px] h-[50%] bg-black rotate-[30deg]"></div>
          {/* Línea diagonal derecha */}
          <div className="absolute right-[25%] top-[50%] w-[2px] h-[50%] bg-black -rotate-[30deg]"></div>
          
          {/* Imágenes posicionadas según el esquema */}
          <motion.div className="absolute left-1/2 top-0 -translate-x-1/2 w-[200px] h-[200px] overflow-hidden">
            <img src="/Assets/equipo/yo-franco.png" alt="Franco L. Parera" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="absolute left-[15%] top-[50%] w-[200px] h-[200px] overflow-hidden">
            <img src="/Assets/equipo/joaco.jpg" alt="Markitos Parera" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="absolute right-[15%] top-[50%] w-[200px] h-[200px] overflow-hidden">
            <img src="/Assets/equipo/joaco.jpg" alt="Joaquin Lazara" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[200px] h-[200px] overflow-hidden">
            <img src="/Assets/equipo/joaco.jpg" alt="Tobias Y. Benitez" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
