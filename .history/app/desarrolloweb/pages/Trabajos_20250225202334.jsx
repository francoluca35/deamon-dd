'use client'
import { useState } from "react";
import { Clock, RefreshCw } from "lucide-react"; 

const plans = [
  {
    id: "static",
    name: "Estatico",
    price: "$30.00",
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
    price: "$60.00",
    features: [
      "3 páginas con Next.js",
      "Personalización avanzada",
      "Diseño completo receptivo",
      "Figma a html",
      "Optimización de SEO",
      "6 complementos/extensiones",
    ],
  },
  {
    id: "premium",
    name: "Profesional",
    price: "$120.00",
    features: [
      "Paginas Ilimitadas",
     "Diseño personalizado desde cero",
      "SEO avanzado",
       "Integración de comercio electrónico",
       "Sistema de administración de contenido",
        "complementos/extensiones ilimitados",
    ],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]); 

  return (
    <div className="bg-[url('/assets/fondodesarrollo.png')] bg-cover bg-center min-h-screen flex items-center">
      <div className="bg-gray-900 text-white px-12 py-8 rounded-lg w-11/12 lg:w-10/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Servicios</h2>

   
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
          <p className="text-blue-400 text-2xl font-bold mt-2">{selectedPlan.price}</p>
          <ul className="mt-4 space-y-2">
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 px-6 py-3 w-full bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg">
           ORDENAR
          </button>
        </div>

 
        <div className="flex justify-center items-center space-x-8 mt-6">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span>12 días como máximo</span>
          </div>
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-5 h-5 text-blue-400" />
            <span>Revisión ilimitada</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
