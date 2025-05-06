"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
      role: 'Director & Programador. <span class="font-light normal-case">Estudiante de la Lic en sistemas.<br>Químico Laboratorista.<br>Creé Deamon DD con un solo objetivo: que cada persona, proyecto o idea tenga la llegada que merece.</span>',
      linkedin: "https://www.linkedin.com/in/franco-parera/",
    },
    {
      img: "/assets/equipo/marcos.jpg",
      name: "Markitos E. Parera",
      role: 'Diseñador <span class="font-light normal-case">Diseñador Gráfico con conocimientos en Photoshop, Illustrator, Canva y Figma.<br>Diseñador Automovilístico para autos de competición virtual y TC Pista.</span>',
      linkedin: "https://www.linkedin.com/in/markitos-parera/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-12 text-center lg:text-left">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-white">EQUIPO</h2>
          <p className="mt-4 text-lg text-gray-200 max-w-xl">
            Nuestra agencia está conformada por un equipo permanente de profesionales,
            compuesto por diseñadores gráficos, desarrolladores web, diseñadores industriales,
            fotógrafos y programadores; pero lo más importante: ¡trabajamos en EQUIPO!
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/assets/equipo/Logo-equipo-B.png"
            alt="Logo"
            className="w-48 md:w-64 lg:w-80"
          />
        </div>
      </div>

      <div ref={teamRef} className="w-full mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group w-full max-w-xs rounded-xl overflow-hidden shadow-xl border border-white/10"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition group-hover:opacity-0">
                <p className="text-black border border-white px-4 py-1 rounded-2xl bg-white/60 text-lg font-semibold">
                  {member.name}
                </p>
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "55%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-0 w-full bg-violet-300/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4"
              >
                <p
                  className="text-black text-sm md:text-base text-center whitespace-pre-line max-w-xs"
                  dangerouslySetInnerHTML={{ __html: member.role }}
                ></p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-white font-bold bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
                >
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
