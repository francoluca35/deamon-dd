"use client";
import { useState } from "react";
import { Clock, RefreshCw, X } from "lucide-react";

const plans = [
  {
    id: "static",
    name: "Pagina Web",
    price: "$300 ~ 600",
    features: [
      "1 página con Next.js",
      "Personalización de diseño",
      "Diseño receptivo",
      "Diseño de figma",
      "Subido de contenido",
      "3 complementos/extensiones",
    ],
  },
  {
    id: "standard",
    name: "Estandar",
    price: "$1000 ~ 1400",
    features: [
      "1 páginas con Next.js",
      "1 Aplicación Web PWA",
      "Diseño completo responsivo",
      "Alijamiento y base de datos",
      "Optimización de SEO",
      "6 complementos/extensiones",
    ],
  },
  {
    id: "Aplicación",
    name: "Aplicaciónes Web",
    price: "$ 500 ~ 1000",
    features: [
      "Aplicación Web PWA",
      "Diseño personalizado desde cero",
      "Optimización de datos",
      "Integración de Base de datos y alojamiento",
      "Mantenimiento Personalizado",
      "Atencion de Lunes a Viernes",
    ],
  },
];

const calendlyLinks = {
  static: "https://calendly.com/deamoncompany18/paquete-estatico",
  standard: "https://calendly.com/deamoncompany18/paquete-estandar",
  premium: "https://calendly.com/deamoncompany18/paquete-profesional",
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <section id="Servicio">
      <div className=" bg-gradient-to-b from-black to-cyan-900 min-h-screen flex items-center">
        <div className="bg-gray-900 text-white px-12 py-8 rounded-lg w-11/12 lg:w-10/12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Servicios</h2>

          {selectedPlan.id === "standard" && (
            <div className="text-center mb-6 text-yellow-400 font-semibold">
              <span>Más Recomendado</span>
            </div>
          )}

          <div className="flex justify-center space-x-4 mb-6">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`px-4 py-2 rounded-lg transition border ${
                  selectedPlan.id === plan.id
                    ? "border-blue-800 text-blue-500"
                    : "border-gray-700 text-gray-400"
                } hover:border-blue-500 hover:text-blue-500`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{selectedPlan.name} Plan</h3>
            <p className="text-blue-400 text-2xl font-bold mt-2">
              {selectedPlan.price}
            </p>
            <ul className="mt-4 space-y-2">
              {selectedPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={openModal}
              className="mt-6 px-6 py-3 w-full bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg"
            >
              ORDENAR
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 mt-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span>Entrega Pactada</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-5 h-5 text-blue-400" />
              <span>Revisión ilimitada</span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Reserva tu cita
            </h2>
            <iframe
              src={calendlyLinks[selectedPlan.id]}
              className="w-full h-[500px] rounded-md"
              frameBorder="0"
              onLoad={() => console.log("Calendly cargado")}
            ></iframe>
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
