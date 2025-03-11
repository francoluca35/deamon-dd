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
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 bg-black">
      {/* Primera Sección */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 text-center md:text-left">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl font-bold text-white">EQUIPO</h2>
          <p className="mt-4 text-lg text-white">
            Nuestra agencia está conformada por un equipo permanente de profesionales, compuesto por diseñadores gráficos, 
            desarrolladores web, diseñadores industriales, fotógrafos y programadores; pero lo más importante: ¡trabajamos en EQUIPO!
          </p>
          <button 
            className="mt-6 px-6 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition"
            onClick={scrollToTeam}
          >
            CONÓCENOS
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/logo.png" alt="Logo" className="w-52" />
        </div>
      </div>

      {/* Segunda Sección (Ocupa toda la pantalla) */}
      <div ref={teamRef} className="w-full h-screen flex justify-center mt-10">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4">
          {[
            { img: '/Assets/equipo/yo-franco.png', name: 'Franco L. Parera' },
            { img: '/Assets/equipo/joaco.jpg', name: 'Markitos Parera' },
            { img: '/Assets/equipo/joaco.jpg', name: 'Joaquin Lazara' },
            { img: '/Assets/equipo/joaco.jpg', name: 'Tobias Y. Benitez' }
          ].map((member, index) => (
            <motion.div 
              key={index} 
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
            >
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-100/80 flex items-center justify-center">
                <p className="text-black border border-white px-4 py-2 bg-white text-lg font-bold uppercase">
                  {member.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
