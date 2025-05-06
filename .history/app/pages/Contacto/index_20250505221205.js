"use client";
import { useState } from "react";
import axios from "axios";

const Contacto = () => {
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/enviar-correo`,
        formData
      );

      if (response.status === 200) {
        setSuccess(true);
        setError("");
        setFormData({
          nombre: "",
          apellido: "",
          empresa: "",
          email: "",
          mensaje: "",
        });
      } else {
        setError("Hubo un error al enviar el mensaje");
      }
    } catch (err) {
      setError("Hubo un error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contacto"
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-16"
      style={{
        backgroundImage: "url('/assets/fondo-contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-2xl bg-black/70 backdrop-blur-sm rounded-lg p-8 shadow-xl">
        <h2 className="text-white text-2xl font-bold text-center mb-6">
          Contactate con nosotros y asesórate con un experto.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: "nombre", label: "Nombre" },
            { id: "apellido", label: "Apellido" },
            { id: "empresa", label: "Empresa" },
            { id: "email", label: "Correo Electrónico", type: "email" },
          ].map(({ id, label, type = "text" }) => (
            <div key={id}>
              <label htmlFor={id} className="text-white block mb-1">
                {label}
              </label>
              <input
                id={id}
                type={type}
                value={formData[id]}
                onChange={(e) =>
                  setFormData({ ...formData, [id]: e.target.value })
                }
                placeholder={label}
                className="w-full bg-transparent text-white border-b-2 border-violet-500 placeholder-gray-400 focus:outline-none focus:border-violet-700 transition-colors duration-300 py-2"
              />
            </div>
          ))}

          <div>
            <label htmlFor="mensaje" className="text-white block mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={(e) =>
                setFormData({ ...formData, mensaje: e.target.value })
              }
              placeholder="Mensaje"
              className="w-full bg-transparent text-white border-b-2 border-violet-500 placeholder-gray-400 focus:outline-none focus:border-violet-700 transition-colors duration-300 py-2 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#9932cc] hover:bg-[#7e27ac] text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-2">
              ¡Mensaje enviado con éxito!
            </p>
          )}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contacto;
