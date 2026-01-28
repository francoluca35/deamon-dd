"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaClock, FaSync, FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    id: "static",
    name: "Sitio Web",
    price: "300 ~ 700",
    currency: "USD",
    description: "Ideal para presentar tu negocio en internet",
    features: [
      "Desarrollo con Next.js",
      "Diseño personalizado",
      "100% Responsive",
      "Diseño en Figma incluido",
      "Carga de contenido",
      "3 integraciones",
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Estándar",
    price: "800 ~ 1600",
    currency: "USD",
    description: "Para negocios que necesitan funcionalidades avanzadas",
    features: [
      "Sitio web con Next.js",
      "Aplicación Web PWA",
      "Diseño responsive completo",
      "Hosting y base de datos",
      "Optimización SEO",
      "6 integraciones",
    ],
    popular: true,
  },
  {
    id: "custom",
    name: "Personalizado",
    price: "A consultar",
    currency: "",
    description: "Soluciones a medida para proyectos complejos",
    features: [
      "Aplicación Web PWA",
      "Diseño desde cero",
      "Arquitectura optimizada",
      "Base de datos y hosting",
      "Mantenimiento incluido",
      "Soporte L-V",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);

  const handleOrder = () => {
    const phone = "+541131199882";
    const planName = selectedPlan.name.toLowerCase();
    const message = `Hola, me interesa el plan ${planName} de desarrollo web. ¿Podrían darme más información?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="Servicio" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
            Precios
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 mb-6">
            Planes <span className="font-semibold">transparentes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu proyecto.
          </p>
        </motion.div>

        {/* Plan Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedPlan.id === plan.id
                  ? "bg-white text-gray-900"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded-full">
                  Popular
                </span>
              )}
              {plan.name}
            </button>
          ))}
        </div>

        {/* Selected Plan Details */}
        <motion.div
          key={selectedPlan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <div className="mb-6">
                {selectedPlan.popular && (
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full mb-4">
                    Más elegido
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  Plan {selectedPlan.name}
                </h3>
                <p className="text-gray-400">
                  {selectedPlan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {selectedPlan.price}
                  </span>
                  {selectedPlan.currency && (
                    <span className="text-xl text-gray-400">
                      {selectedPlan.currency}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleOrder}
                className="w-full md:w-auto px-8 py-4 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-lg" />
                Solicitar presupuesto
              </button>
            </div>

            {/* Right - Features */}
            <div>
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                Incluye
              </h4>
              <ul className="space-y-4">
                {selectedPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <FaCheck className="text-blue-400 text-xs" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-3 text-gray-400">
            <FaClock className="text-blue-400" />
            <span>Entrega en tiempo acordado</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <FaSync className="text-blue-400" />
            <span>Revisiones ilimitadas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
