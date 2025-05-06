"use client";
import { useState } from "react";
import axios from "axios";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
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
        setFormData({ nombre: "", email: "", mensaje: "" });
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
    <section className="min-h-screen bg-[#f0f4f9] flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Title lorem ipsum
          </h2>
          <p className="text-blue-700 mb-4 text-sm">
            Maecenas accumsan dictum mauris, ut posuere eros varius id. Maecenas
            tempus augue placerat nisi dapibus aliquam.
          </p>

          <div className="text-sm text-gray-800 space-y-2">
            <p>email@example.com</p>
            <p>+00 123 4567890</p>

            <p className="font-bold mt-4">Company name</p>
            <p>123 Street Name</p>
            <p>City Name,</p>
            <p>State, Country, 12345</p>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            required
            className="w-full px-4 py-3 rounded-xl bg-[#e5ecf4] placeholder-gray-500 text-sm outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-4 py-3 rounded-xl bg-[#e5ecf4] placeholder-gray-500 text-sm outline-none"
          />

          <textarea
            placeholder="Your message"
            rows="4"
            value={formData.mensaje}
            onChange={(e) =>
              setFormData({ ...formData, mensaje: e.target.value })
            }
            required
            className="w-full px-4 py-3 rounded-xl bg-[#e5ecf4] placeholder-gray-500 text-sm outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full text-sm transition w-24"
          >
            {loading ? "..." : "send"}
          </button>

          {success && (
            <p className="text-green-600 text-sm text-center mt-2">
              ¡Mensaje enviado con éxito!
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacto;
