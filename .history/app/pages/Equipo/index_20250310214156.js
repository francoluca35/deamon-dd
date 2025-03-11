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
    <div className="w-full min-h-screen bg-gray-900/30 flex flex-col items-center justify-center px-6">
      {/* Primera Sección */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 text-center md:text-left mt-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl font-bold">EQUIPO</h2>
          <p className="mt-4 text-lg">
            Nuestra agencia está conformada por un equipo permanente de profesionales, compuesto por diseñadores gráficos, 
            desarrolladores web, diseñadores industriales, fotógrafos y programadores; pero lo más importante: ¡trabajamos en EQUIPO!
          </p>
          <button 
            className="mt-6 px-6 py-3 border-2 border-white text-white font-bold hover:bg-gray-400 hover:text-white transition"
            onClick={scrollToTeam}
          >
            CONÓCENOS
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/Assets/equipo/Logo-equipo-B.png" alt="Logo" className="w-64 ml-0 md:ml-24" />
        </div>
      </div>

    {/* Segunda Sección (Oculta hasta hacer scroll) */}
<div ref={teamRef} className="w-[100%] justify-center mt-10 pb-20">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {[
      { img: '/Assets/equipo/yo-franco.png', name: 'Franco L. Parera', role: 'Director & Programador. \n <span class=\"font-light normal-case\">Estudiante de la Lic en sistemas.\n Trabajó en Quento Snack, BioIngepro como Laboratorista. \n Aunque mi sueño siempre fue tener su propia empresa y hacer los sueños de la gente realidad para ello me propuse crear DeamonDD.</span>' },
      { img: '/Assets/equipo/marcos.jpg', name: 'Markitos Parera', role: 'Diseñador \n <span class=\"font-light normal-case\">Diseñador Grafico con conocimientos en Photoshop, Ilustrator, Canva, y Figma. \n Diseñador Automovilístico para autos de competición virtual y TC Pista.</span>' },
      { img: '/Assets/equipo/joaco.jpg', name: 'Joaquin Lazara', role: 'Diseñador Gráfico \n <span class=\"font-light  normal-case\">Diseñador Automovilístico para autos de competición virtual y TC Pista. \n Estudiante en la UBA en la carrera de diseño gráfico.\n Apasionado por los autos de carrera, su mayor virtud es el diseño de los autos del TC.</span> '  },
      { img: '/Assets/equipo/joaco.jpg', name: 'Tobias Y. Benitez', role: 'Desarrollador Fullstack \n <span class=\"font-light normal-case\">Estudiante en la UTN de Ing. Electrónica, cumple el rol de desarrollador Backend para nuestras apps.</span>' }
    ].map((member, index) => (
      <motion.div 
        key={index} 
        className="relative group w-full min-h-[400px] md:h-[500px] overflow-hidden mb-10"
      >
        <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:opacity-100 transition duration-300" />
        <div className="absolute inset-0 bg-purple-900/20 bg-opacity-30 flex flex-col items-center justify-center transition opacity-100 group-hover:opacity-0">
          <p className="text-black border border-white p-2 rounded-2xl bg-white text-lg font-light">{member.name}</p>
        </div>
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: '50%' }} 
          transition={{ duration: 0.5, ease: 'easeOut' }} 
          className="absolute bottom-0 w-full bg-violet-300 flex items-center justify-center opacity-0 group-hover:opacity-80"
        >
          <p className="text-black text-lg uppercase font-bold text-center whitespace-pre-line" dangerouslySetInnerHTML={{ __html: member.role }}></p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>
</div>
  );
}