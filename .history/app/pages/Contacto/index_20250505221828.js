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
      <div className="w-full max-w-5xl bg-white/20 rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Formulario */}
        <div className="w-full lg:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-black uppercase mb-2">
            Contactate con nosotros
          </h2>
          <p className="text-black text-sm mb-6">
            Dejanos tu mensaje y nos comunicaremos con vos.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {[
              { id: "nombre", label: "Nombre" },
              { id: "apellido", label: "Apellido" },
              { id: "empresa", label: "Empresa" },
              { id: "email", label: "Correo Electrónico", type: "email" },
            ].map(({ id, label, type = "text" }) => (
              <input
                key={id}
                type={type}
                placeholder={label}
                value={formData[id]}
                onChange={(e) =>
                  setFormData({ ...formData, [id]: e.target.value })
                }
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 text-sm"
              />
            ))}

            <textarea
              placeholder="Mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={(e) =>
                setFormData({ ...formData, mensaje: e.target.value })
              }
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 text-sm resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-800 hover:bg-purple-600 text-white font-semibold py-2 rounded-full transition"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>

            {success && (
              <p className="text-green-600 text-sm mt-2 text-center">
                ¡Mensaje enviado con éxito!
              </p>
            )}
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
          </form>
        </div>

        {/* Datos de contacto */}
        <div className="w-full lg:w-1/3 bg-blue-900 text-white p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4">Información</h3>
          <p className="text-sm mb-2">email@example.com</p>
          <p className="text-sm mb-4">+00 123 4567890</p>

          <h4 className="text-lg font-medium mt-4">Deamon Company</h4>
          <p className="text-sm">
            Av. Siempre Viva 742 <br />
            San Miguel, Buenos Aires <br />
            Argentina
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
