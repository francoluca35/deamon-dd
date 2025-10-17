"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NuestroEquipo() {
  const teamMembers = [
    {
      img: "/assets/equipo/franco.png",
      name: "Franco L. Parera",
      role: "Director & Full-Stack Developer"
    },
    {
      img: "/assets/equipo/juan.png",
      name: "Juan Cruz Hernandez",
      role: "Estratega de Marketing & Branding Digital"
    },
    {
      img: "/assets/equipo/marcos.png",
      name: "Marcos E. Parera",
      role: "Diseñador Gráfico"
    }
  ];

  return (
    <div className="w-full bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-sm text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestro equipo
          </motion.h2>
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Te acompañamos para llevar<br />
            tu marca al siguiente nivel
          </motion.h1>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300 h-32 flex items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
