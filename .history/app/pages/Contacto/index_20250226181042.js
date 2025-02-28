"use client";
import { useState } from "react";
import axios from "axios";

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
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Enviar datos al backend
      const response = await axios.post("http://localhost:5000/enviar-correo", formData);
      setSuccess(true);
      setError(""); 
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          nombre: "",
          apellido: "",
          empresa: "",
          email: "",
          mensaje: "",
        });
      }, 3000);
    } catch (err) {
      setError("Hubo un error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
    id="contacto"
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/assets/fondo-contacto.png')",
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
    }}
  >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg ">
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          Si Quieres Cumplir Tu Sueño, Contáctanos...
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
                  value={formData[id]}
                  onChange={(e) =>
                    setFormData({ ...formData, [id]: e.target.value })
                  }
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
                  value={formData[id]}
                  onChange={(e) =>
                    setFormData({ ...formData, [id]: e.target.value })
                  }
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
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contacto;
