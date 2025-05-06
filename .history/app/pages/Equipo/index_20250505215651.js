"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function TeamSection() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const teamMembers = [
    {
      img: "/assets/equipo/yo-franco.png",
      name: "Franco L. Parera",
      role: 'Director & Programador. \n <span class="font-light normal-case">Estudiante de la Lic en sistemas.\n Quimico Laboratorista. \n Creé Deamon DD con un solo objetivo: que cada persona, proyecto o idea tenga la llegada que merece.</span>',
      linkedin: "https://www.linkedin.com/in/franco-parera/",
    },
    {
      img: "/assets/equipo/marcos.jpg",
      name: "Markitos E. Parera",
      role: 'Diseñador \n <span class="font-light normal-case">Diseñador Gráfico con conocimientos en Photoshop, Illustrator, Canva y Figma. \n Diseñador Automovilístico para autos de competición virtual y TC Pista.</span>',
      linkedin: "https://www.linkedin.com/in/markitos-parera/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900/30 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Título y descripción */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 mt-20 text-center md:text-left">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl font-bold">EQUIPO</h2>
          <p className="mt-4 text-lg">
            Nuestra agencia está conformada por un equipo permanente de
            profesionales, compuesto por diseñadores gráficos, desarrolladores
            web, diseñadores industriales, fotógrafos y programadores; pero lo
            más importante: ¡trabajamos en EQUIPO!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/assets/equipo/Logo-equipo-B.png"
            alt="Logo"
            className="w-64 md:ml-24"
          />
        </div>
      </div>

      {/* Grid adaptativo de miembros */}
      <div
        ref={teamRef}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-4"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative group w-full max-w-[350px] rounded-xl mx-auto min-h-[400px] md:h-[500px] overflow-hidden"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover group-hover:opacity-100 transition duration-300"
            />
            <div className="absolute inset-0 bg-purple-900/20 bg-opacity-30 flex flex-col items-center justify-center transition opacity-100 group-hover:opacity-0">
              <p className="text-black border border-white p-2 rounded-2xl bg-white/60 text-lg font-light">
                {member.name}
              </p>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "55%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-0 w-full bg-violet-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 p-4"
            >
              <p
                className="text-black text-sm md:text-lg uppercase font-bold text-center whitespace-pre-line max-w-xs md:max-w-full"
                dangerouslySetInnerHTML={{ __html: member.role }}
              ></p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center space-x-2 text-white font-bold bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
