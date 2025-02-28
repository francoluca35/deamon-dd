'use client'
import { useState } from "react";
import { Clock, RefreshCw } from "lucide-react"; 

const plans = [
  {
    id: "static",
    name: "Static",
    price: "$30.00",
    features: [
      "1 Page with Elementor",
      "Design Customization",
      "Responsive Design",
      "Design Figma",
      "Content Upload",
      "3 Plugins/Extensions",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$60.00",
    features: [
      "3 Pages with Elementor",
      "Advanced Customization",
      "Full Responsive Design",
      "Figma to HTML",
      "SEO Optimization",
      "6 Plugins/Extensions",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$120.00",
    features: [
      "Unlimited Pages",
      "Custom Design from Scratch",
      "Advanced SEO",
      "E-commerce Integration",
      "Content Management System",
      "Unlimited Plugins/Extensions",
    ],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]); 

  return (
    <div className="bg-[url('/assets/fondodesarrollo.png')] bg-cover bg-center min-h-screen flex items-center">
      <div className="bg-gray-900 text-white px-12 py-8 rounded-lg w-11/12 lg:w-10/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">My Pricing</h2>

   
        <div className="flex justify-center space-x-4 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`px-4 py-2 rounded-lg transition border ${
                selectedPlan.id === plan.id
                  ? "border-red-500 text-red-500"
                  : "border-gray-700 text-gray-400"
              } hover:border-red-500 hover:text-red-500`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">{selectedPlan.name} Plan</h3>
          <p className="text-red-400 text-2xl font-bold mt-2">{selectedPlan.price}</p>
          <ul className="mt-4 space-y-2">
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 px-6 py-3 w-full bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg">
            ORDER NOW
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
