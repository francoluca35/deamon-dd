"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const phone = "+541131199882";
  const message =
    "Hola!, Quisiera mas información acerca de los servicios ofrecidos de deamonDD.💻";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

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
      <div className="w-full max-w-5xl bg-black/40 rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Formulario */}
        <div className="w-full lg:w-2/3 p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold text-white uppercase drop-shadow-lg tracking-wide">
            Contactate con nosotros
          </h2>
          <p className="text-white text-base mb-6 mt-2 drop-shadow-sm">
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
                className="w-full text-black px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 text-sm"
              />
            ))}

            <textarea
              placeholder="Mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={(e) =>
                setFormData({ ...formData, mensaje: e.target.value })
              }
              className="w-full text-black px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 text-sm resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full relative overflow-hidden text-white font-semibold py-2 rounded-full transition ${
                loading ? "bg-purple-600" : "bg-purple-800 hover:bg-purple-600"
              }`}
            >
              {loading && (
                <span
                  className="absolute inset-0 bg-purple-800 animate-loadingBar"
                  style={{ zIndex: 0 }}
                ></span>
              )}
              <span className="relative z-10">
                {loading ? "Enviando..." : "Enviar"}
              </span>
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

        <div className="w-full lg:w-1/3 bg-purple-900 text-white p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Información</h3>
          <p className="text-sm mb-2 hover:text-purple-200 hover:text-base">
            <a href="mailto:francolucap1@gmail.com">francolucap1@gmail.com</a>
          </p>
          <p className="text-sm mb-4 hover:text-purple-200 hover:text-base">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              +54 11 3119-9882
            </a>
          </p>

          <h4 className="text-lg font-medium mt-4">Deamon DD</h4>
          <p className="text-sm">Diseño & Desarrollo</p>

          <div className="mt-3 text-left">
            <img
              src="/assets/firma3.png"
              alt="Firma de Parera Franco"
              className="w-32 h-auto  mb-1"
            />

            <p className="text-xs ml-1 font-light">Fundador Deamon DD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
