"use client";
import { useState } from "react";


const Contacto = () => {
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);





  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/fondo-contacto.png')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg ">
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          Si Quieres Cumplir Tu Sueño, Contáctanos...
        </h1>

        <form className="space-y-4" >
          {[
            { id: "nombre", label: "Nombre" },
            { id: "apellido", label: "Apellido" },
            { id: "empresa", label: "Empresa" },
            { id: "email", label: "Correo Electrónico", type: "email" },
            { id: "mensaje", label: "Mensaje", isTextarea: true },
          ].map(({ id, label, isTextarea, type = "text" }) => (
            <div key={id}>
              <label htmlFor={id} className="text-white block mb-1">
                {label}
              </label>
              {isTextarea ? (
                <textarea
                  id={id}
                  rows="4"
                  onFocus={() => setActiveField(id)}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  value={formData[id]}
                  className={`bg-transparent w-full p-2 border-b rounded-md focus:outline-none transition-transform duration-300 ${
                    activeField === id ? "scale-105" : "scale-95"
                  }`}
                ></textarea>
              ) : (
                <input
                  id={id}
                  type={type}
                  onFocus={() => setActiveField(id)}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  value={formData[id]}
                  className={`w-full bg-transparent p-2 border-b rounded-md focus:outline-none transition-transform duration-300 ${
                    activeField === id ? "scale-105" : "scale-95"
                  }`}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {success && <p className="text-green-400 text-center mt-2">Mensaje enviado con éxito</p>}
        </form>
      </div>
    </div>
  );
};

export default Contacto;
