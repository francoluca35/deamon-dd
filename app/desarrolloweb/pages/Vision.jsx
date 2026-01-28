'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaShieldAlt, FaRocket, FaUsers, FaCode, FaCogs, FaChartLine, FaHandshake } from 'react-icons/fa';

const Vision = () => {
  const services = [
    { 
      title: "Desarrollo Web", 
      description: "Sitios web modernos, rápidos y optimizados para SEO.",
      icon: FaCode 
    },
    { 
      title: "Aplicaciones Web", 
      description: "PWAs y plataformas web con funcionalidades avanzadas.",
      icon: FaCogs 
    },
    { 
      title: "Sistemas a Medida", 
      description: "Software empresarial adaptado a tus procesos.",
      icon: FaChartLine 
    },
    { 
      title: "Consultoría Tech", 
      description: "Asesoramiento estratégico para tu transformación digital.",
      icon: FaLightbulb 
    },
  ];

  const values = [
    { title: "Calidad", icon: FaShieldAlt },
    { title: "Innovación", icon: FaRocket },
    { title: "Compromiso", icon: FaHandshake },
    { title: "Colaboración", icon: FaUsers },
  ];

  return (
    <section id='vision' className="relative py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
            Qué Hacemos
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 mb-6">
            Soluciones tecnológicas
            <span className="font-semibold"> de alto impacto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transformamos ideas en productos digitales que generan resultados 
            medibles para tu negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
            Nuestros Valores
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white mt-4">
            Lo que nos <span className="font-semibold">define</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl flex items-center justify-center mb-4 border border-white/5">
                <value.icon className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-white font-medium">{value.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center p-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 rounded-3xl border border-white/5"
        >
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Contáctanos y conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <button
            onClick={() => {
              const target = document.getElementById("Servicio");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Ver planes y precios
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Vision;
