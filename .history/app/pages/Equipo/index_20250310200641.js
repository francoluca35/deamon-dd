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

      {/* Segunda Sección (Oculta hasta hacer scroll) */}
      <div ref={teamRef} className="w-full py-20 bg-gray-100 mt-20">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            { img: '/Assets/equipo/joaco.jpg', name: 'Franco L. Parera', role: 'Director & Programador. \n Estudiante de la Lic en sistemas. \n Trabaje en Quento Snack, BioIngepro como Laboratorista. \n aunque mi sueño siempre fue tener mi propia empresa, y hacer los sueños de la gente realidad.' },
            { img: '/Assets/equipo/joaco.jpg', name: 'Markitos Parera', role: 'Diseñador \n Diseñador Automovilistico' },
            { img: '/Assets/equipo/joaco.jpg', name: 'Joaquin Lazara', role: 'Diseñador Gráfico \n Diseñador Automovilistico' },
            { img: '/Assets/equipo/joaco.jpg', name: 'Tobias Y. Benitez', role: 'Desarrollador Fullstack' }
          ].map((member, index) => (
            <motion.div key={index}  className="relative group w-full h-[500px] overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:opacity-100 transition duration-300" />
              <div className="absolute inset-0 bg-purple-400 bg-opacity-30 flex flex-col items-center justify-center transition opacity-100 group-hover:opacity-0">
                <p className="text-black border border-white p-2 bg-white text-lg font-light">{member.name}</p>
              </div>
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: '50%' }} 
                transition={{ duration: 0.5, ease: 'easeOut' }} 
                className="absolute bottom-0 w-full bg-violet-900/90 flex items-center justify-center opacity-0 group-hover:opacity-80"
              >
                <p className="text-white text-lg font-bold text-center whitespace-pre-line">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}