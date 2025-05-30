'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Equipo() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen  bg-white flex flex-col items-center justify-center px-6">
      {/* Primera Sección */}
      <div className="flex flex-col md:flex-row mt-6 md:mt-40 items-center justify-between w-full max-w-6xl">
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl font-bold font-bold text-black mt-10">EQUIPO</h2>
          <p className="mt-4 w-full md:w-[60%] text-lg text-black">
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
          <img src="/Assets/equipo/logo-equipo.png" alt="Logo" className="w-52" />
        </div>
      </div>

      {/* Segunda Sección (Oculta hasta hacer scroll) */}
      <div ref={teamRef} className="w-full py-20 bg-gray-100 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 w-full">
          {[
            { img: '/team1.jpg', name: 'Hernán R. Suárez', role: 'Socio Fundador \n Director Creativo' },
            { img: '/team2.jpg', name: 'Pablo', role: 'Desarrollador Web' },
            { img: '/team3.jpg', name: 'Eli', role: 'Diseñadora Gráfica' },
            { img: '/team4.jpg', name: 'Bros', role: 'Fotógrafo' }
          ].map((member, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative group w-full h-[500px] overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:opacity-100 transition duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition opacity-100 group-hover:opacity-0">
                <p className="text-white text-lg font-bold">{member.name}</p>
              </div>
              <div className="absolute bottom-0 w-full bg-purple-600 h-1/2 flex items-center justify-center transition opacity-0 group-hover:opacity-100">
                <p className="text-white text-lg font-bold text-center whitespace-pre-line">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}