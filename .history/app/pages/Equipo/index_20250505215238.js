"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function TeamSection() {
  const teamRef = useRef(null);

  const teamMembers = [
    {
      img: "/assets/equipo/yo-franco.png",
      name: "Franco L. Parera",
      role: 'Director & Programador. <span class="font-light normal-case">Estudiante de la Lic en sistemas.<br> Químico Laboratorista.<br> Creé Deamon DD con un solo objetivo: que cada persona, proyecto o idea tenga la llegada que merece.</span>',
      linkedin: "https://www.linkedin.com/in/franco-parera/",
    },
    {
      img: "/assets/equipo/marcos.jpg",
      name: "Markitos E. Parera",
      role: 'Diseñador<br> <span class="font-light normal-case">Diseñador gráfico con conocimientos en Photoshop, Illustrator, Canva y Figma.<br> Diseñador automovilístico para autos de competición virtual y TC Pista.</span>',
      linkedin: "https://www.linkedin.com/in/markitos-parera/",
    },
  ];

  return (
    <div className="w-full bg-gray-900 min-h-screen px-4 py-16 flex flex-col items-center justify-center">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 mb-12 text-center md:text-left">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-white">EQUIPO</h2>
          <p className="mt-4 text-lg text-gray-200 max-w-xl">
            Nuestra agencia está conformada por un equipo permanente de
            profesionales: diseñadores gráficos, desarrolladores web,
            diseñadores industriales, fotógrafos y programadores. Pero lo más
            importante: ¡trabajamos en EQUIPO!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/equipo/Logo-equipo-B.png"
            alt="Logo"
            className="w-40 md:w-64 object-contain"
          />
        </div>
      </div>

      {/* Team Cards */}
      <div
        ref={teamRef}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-4"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative group bg-black/20 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[420px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/30 flex items-center justify-center transition group-hover:opacity-0">
              <p className="text-black border border-white px-4 py-2 rounded-2xl bg-white/60 text-lg font-semibold">
                {member.name}
              </p>
            </div>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "55%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-0 w-full bg-violet-300/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 px-6 py-4"
            >
              <p
                className="text-black text-sm md:text-base text-center leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: member.role }}
              ></p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
