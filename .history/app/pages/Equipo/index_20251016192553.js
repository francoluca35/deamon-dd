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
      img: "/assets/equipo/yo-franco.avif",
      name: "Franco L. Parera",
      role: "Director & Full-Stack Developer",
      description: "Estudiante de la Lic en sistemas. Químico Laboratorista. Creé Deamon DD con un solo objetivo: que cada persona, proyecto o idea tenga la llegada que merece en el mundo digital.",
      linkedin: "https://www.linkedin.com/in/franco-parera/",
      skills: ["React", "Node.js", "Firebase", "Marketing Digital"]
    },
    {
      img: "/assets/equipo/marcos.avif",
      name: "Markitos E. Parera",
      role: "Diseñador Gráfico & Branding",
      description: "Especialista en Branding y Diseño Gráfico con conocimientos en Photoshop, Illustrator, Canva, y Figma. Diseñador Automovilístico para autos de competición virtual y TC Pista.",
      linkedin: "https://www.linkedin.com/in/markitos-parera/",
      skills: ["Branding", "Photoshop", "Illustrator", "Figma"]
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated code lines */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-purple-400 font-mono text-sm animate-pulse">
            &lt;div className=&quot;creative-team&quot;&gt;
          </div>
          <div className="absolute top-32 left-20 text-purple-400 font-mono text-sm animate-pulse delay-300">
            &lt;marketing&gt;Digital&lt;/marketing&gt;
          </div>
          <div className="absolute top-44 left-10 text-purple-400 font-mono text-sm animate-pulse delay-500">
            &lt;/div&gt;
          </div>
          <div className="absolute top-60 right-20 text-violet-400 font-mono text-sm animate-pulse delay-700">
            function createBrand() {"{"}
          </div>
          <div className="absolute top-80 right-30 text-violet-400 font-mono text-sm animate-pulse delay-1000">
            return uniqueIdentity;
          </div>
          <div className="absolute top-96 right-20 text-violet-400 font-mono text-sm animate-pulse delay-1200">
            {"}"}
          </div>
          <div className="absolute top-40 right-10 text-purple-400 font-mono text-xs animate-pulse delay-900">
            const apps = [&quot;iOS&quot;, &quot;Android&quot;];
          </div>
          <div className="absolute top-56 left-40 text-green-400 font-mono text-xs animate-pulse delay-1100">
            designSystem.branding();
          </div>
          <div className="absolute top-72 left-20 text-yellow-400 font-mono text-xs animate-pulse delay-1300">
            marketing.digitalCampaign();
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Somos un equipo de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                creativos digitales
              </span>{" "}
              apasionados
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              En Deamon DD, nos especializamos en marketing digital, branding,
              desarrollo de aplicaciones móviles y páginas web que ayudan a las
              empresas a prosperar en la era digital. Nuestro equipo multidisciplinario
              trabaja en estrecha colaboración con los clientes para crear experiencias
              digitales únicas que superan las expectativas.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-500/20">
                <FaCode className="text-indigo-400" />
                <span className="text-sm">Desarrollo Web & Apps</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/20">
                <FaPalette className="text-purple-400" />
                <span className="text-sm">Branding & Diseño</span>
              </div>
              <div className="flex items-center space-x-2 bg-violet-900/30 px-4 py-2 rounded-full border border-violet-500/20">
                <FaRocket className="text-violet-400" />
                <span className="text-sm">Marketing Digital</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="absolute inset-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-purple-400/30">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-purple-400">const deamonDD = {"{"}</div>
                    <div className="text-violet-400 ml-4">services: [</div>
                    <div className="text-green-400 ml-8">&quot;Marketing Digital&quot;,</div>
                    <div className="text-green-400 ml-8">&quot;Branding & Diseño&quot;,</div>
                    <div className="text-green-400 ml-8">&quot;Desarrollo Web&quot;,</div>
                    <div className="text-green-400 ml-8">&quot;Apps Móviles&quot;</div>
                    <div className="text-violet-400 ml-4">],</div>
                    <div className="text-violet-400 ml-4">mission: &quot;transformación digital&quot;,</div>
                    <div className="text-violet-400 ml-4">passion: &quot;creatividad & tecnología&quot;</div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quote Section */}
      <motion.div 
        className="relative py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-3xl border border-purple-500/20 backdrop-blur-sm p-12">
            <div className="absolute top-6 left-6 text-6xl text-purple-400/30 font-serif">&quot;</div>
            <blockquote className="text-2xl lg:text-3xl font-light italic text-center leading-relaxed">
              La mejor forma de predecir el futuro es inventarlo
            </blockquote>
            <div className="text-right mt-6 text-purple-400 font-medium">
              — Alan Kay
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Members Section */}
      <div
        ref={teamRef}
        className="py-20 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Conoce a nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">equipo</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/20 backdrop-blur-sm overflow-hidden hover:border-purple-400/40 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <Image
                          src={member.img}
                          alt={`${member.name} - Miembro del equipo Deamon DD`}
                          width={120}
                          height={120}
                          className="w-24 h-24 rounded-full object-cover border-2 border-purple-400/30"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-indigo-400 font-semibold mb-3">{member.role}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {member.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors duration-300"
                        >
                          <FaLinkedin size={16} />
                          <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
