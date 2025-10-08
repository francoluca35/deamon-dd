"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function TeamSection() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const teamMembers = [
    {
      img: "/assets/equipo/yo-franco.avif",
      name: "Franco L. Parera",
      role: 'Director & Programador. \n <span class="font-light normal-case">Estudiante de la Lic en sistemas.\n Quimico Laboratorista. \n Creé Deamon DD con un solo objetivo: que cada persona, proyecto o idea tenga la llegada que merece. .</span>',
      linkedin: "https://www.linkedin.com/in/franco-parera/",
    },
    {
      img: "/assets/equipo/marcos.avif",
      name: "Markitos E. Parera",
      role: 'Diseñador \n <span class="font-light normal-case">Diseñador Grafico con conocimientos en Photoshop, Ilustrator, Canva, y Figma. \n Diseñador Automovilístico para autos de competición virtual y TC Pista.</span>',
      linkedin: "https://www.linkedin.com/in/markitos-parera/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pb-20">
   
    </div>
  );
}
