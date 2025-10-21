"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "../lib/i18n";
import { useState, useEffect } from "react";

export default function NuestroEquipo() {
  const { t, isLoaded, currentLang } = useTranslation();
  const [renderKey, setRenderKey] = useState(0);
  
  // Forzar re-render cuando cambia el idioma
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [currentLang]);
  const teamMembers = [
    {
      img: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761019802/franco_rzefwl.png",
      name: "Franco L. Parera",
      role: isLoaded ? t("team.roles.director") : "Director & Full-Stack Developer"
    },
    {
      img: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761019803/juan_i2rl8b.png",
      name: "Juan Cruz Hernandez",
      role: isLoaded ? t("team.roles.marketing") : "Estratega de Marketing & Branding Digital"
    },
    {
      img: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761019805/marcos_bv4q0u.png",
      name: "Marcos E. Parera",
      role: isLoaded ? t("team.roles.designer") : "Diseñador Gráfico"
    }
  ];

  return (
    <div className="w-full bg-neutral-950 text-white py-20" key={`${currentLang}-${renderKey}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-sm text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isLoaded ? t("team.subtitle") : "Nuestro equipo"}
          </motion.h2>
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isLoaded ? t("team.title") : "Las personas a cargo de llevar tu proyecto al siguiente nivel"}
          </motion.h1>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-violet-900/35 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300 h-32 flex items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 w-full">
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
                  <h3 className="text-base font-bold text-white mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-tight">
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
