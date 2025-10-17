"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaCode, FaLightbulb, FaRocket, FaPalette, FaMobile, FaGlobe } from "react-icons/fa";
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
      img: "/assets/equipo/lucas-viale.avif",
      name: "Lucas Viale",
      role: "Co-Fundador & Director de Operaciones",
      description: "Experto en gestión de operaciones y coordinación de proyectos. Se encarga de optimizar los procesos internos y asegurar la entrega de calidad en cada proyecto.",
      linkedin: "#",
      skills: ["Gestión de Proyectos", "Operaciones", "Liderazgo"]
    },
    {
      img: "/assets/equipo/mateo-rendon.avif",
      name: "Mateo Rendón",
      role: "Co-Fundador & Director Comercial",
      description: "Especialista en estrategias comerciales y desarrollo de negocio. Su experiencia en el mercado digital permite identificar oportunidades únicas para nuestros clientes.",
      linkedin: "#",
      skills: ["Ventas", "Estrategia Comercial", "Negocio"]
    },
    {
      img: "/assets/equipo/cristobal-rendon.avif",
      name: "Cristobal Rendón",
      role: "Customer Success Manager",
      description: "Dedicado a asegurar la satisfacción y éxito de nuestros clientes. Su enfoque en el servicio al cliente garantiza una experiencia excepcional en cada proyecto.",
      linkedin: "#",
      skills: ["Atención al Cliente", "Gestión de Cuentas", "Soporte"]
    },
    {
      img: "/assets/equipo/simon-rendon.avif",
      name: "Simón Rendón",
      role: "Especialista en Diseño UX/UI & Desarrollo Web",
      description: "Experto en diseño de experiencia de usuario y desarrollo web. Combina creatividad y tecnología para crear interfaces intuitivas y funcionales.",
      linkedin: "#",
      skills: ["UX/UI Design", "Desarrollo Web", "Frontend"]
    }
  ];

  return (
    <div ref={teamRef} className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-sm text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestro equipo
          </motion.h2>
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Te acompañamos para llevar tu marca al siguiente nivel
          </motion.h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-600 rounded-full overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
