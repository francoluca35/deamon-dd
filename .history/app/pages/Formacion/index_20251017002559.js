"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaBook, FaUsers, FaLaptopCode, FaPalette, FaChartLine } from "react-icons/fa";
import Image from "next/image";

export default function Formacion() {
  const formacionRef = useRef(null);

  const scrollToFormacion = () => {
    if (formacionRef.current) {
      formacionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cursos = [
    {
      icon: FaLaptopCode,
      title: "Desarrollo Web Full Stack",
      duration: "12 semanas",
      description: "Aprende las tecnologías más demandadas del mercado: React, Node.js, MongoDB y más.",
      price: "Desde $50.000",
      level: "Intermedio",
      students: "150+ estudiantes"
    },
    {
      icon: FaPalette,
      title: "Diseño UX/UI & Branding",
      duration: "8 semanas",
      description: "Domina el diseño de experiencias de usuario y la creación de identidades visuales.",
      price: "Desde $35.000",
      level: "Principiante",
      students: "200+ estudiantes"
    },
    {
      icon: FaChartLine,
      title: "Marketing Digital Avanzado",
      duration: "10 semanas",
      description: "Estrategias de marketing digital, SEO, SEM y gestión de redes sociales.",
      price: "Desde $40.000",
      level: "Avanzado",
      students: "180+ estudiantes"
    }
  ];

  const beneficios = [
    "Certificaciones reconocidas",
    "Proyectos reales para portfolio",
    "Mentorías personalizadas",
    "Acceso de por vida al contenido",
    "Comunidad exclusiva de estudiantes",
    "Bolsa de trabajo especializada"
  ];

  return (
    <div ref={formacionRef} className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaGraduationCap className="text-2xl text-white" />
          </motion.div>
          
          <motion.h2 
            className="text-sm text-purple-400 mb-4 font-semibold tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Formación Profesional
          </motion.h2>
          
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Potencia tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              carrera digital
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Aprende de los mejores profesionales del mercado digital. 
            Cursos prácticos y actualizados que te llevarán al siguiente nivel profesional.
          </motion.p>
        </div>

        {/* Cursos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cursos.map((curso, index) => (
            <motion.div
              key={curso.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <curso.icon className="text-2xl text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                    {curso.level}
                  </span>
                  <span className="text-sm text-gray-400">{curso.duration}</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {curso.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {curso.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-green-400">{curso.price}</span>
                  <span className="text-sm text-gray-400 flex items-center">
                    <FaUsers className="mr-1" />
                    {curso.students}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Inscribirse Ahora
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beneficios Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Por qué elegir nuestra formación?
            </h3>
            <p className="text-gray-300 text-lg">
              Más que cursos, es una experiencia transformadora
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio}
                className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">{beneficio}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para comenzar tu transformación digital?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Únete a cientos de profesionales que ya han dado el salto en sus carreras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Ver Todos los Cursos
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
              Contactar Asesor
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
