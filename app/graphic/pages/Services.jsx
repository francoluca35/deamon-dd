"use client";
import { motion } from "framer-motion";
import { FaDesktop, FaPalette, FaCar } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaDesktop,
    title: "Diseño Web",
    description: "Creamos experiencias digitales únicas y funcionales. Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
    features: ["UI/UX Design", "Desarrollo Frontend", "Responsive Design"],
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/dise%C3%B1o/dise%C3%B1o-web.jpg",
  },
  {
    id: 2,
    icon: FaPalette,
    title: "Diseño Gráfico",
    description: "Identidad visual que destaca. Desde branding completo hasta material publicitario, cada diseño cuenta tu historia de manera única.",
    features: ["Branding", "Identidad Corporativa", "Material Publicitario"],
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/branding/bioma.jpg",
  },
  {
    id: 3,
    icon: FaCar,
    title: "Diseño de Vehículos de Carrera",
    description: "Diseño de liveries y gráficos para vehículos de competición. Aerodinámica visual que comunica velocidad y potencia.",
    features: ["Livery Design", "Wrapping", "Patrocinadores"],
    image: "https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/dise%C3%B1o/tc2024.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 text-lg">
            Transformamos ideas en experiencias visuales impactantes
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <service.icon className="text-white text-xl" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
