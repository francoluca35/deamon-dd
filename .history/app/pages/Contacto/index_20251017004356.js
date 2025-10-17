"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useErrorTracking } from "../../lib/errorTracking";

const Contacto = () => {
  const { trackError, trackAsyncError } = useErrorTracking();
  
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

  const validateForm = () => {
    const errors = [];
    
    if (!formData.nombre.trim()) errors.push("El nombre es requerido");
    if (!formData.apellido.trim()) errors.push("El apellido es requerido");
    if (!formData.empresa.trim()) errors.push("La organización es requerida");
    if (!formData.email.trim()) {
      errors.push("El email es requerido");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("El email no es válido");
    }
    if (!formData.mensaje.trim()) errors.push("El mensaje es requerido");
    if (formData.mensaje.trim().length < 10) {
      errors.push("El mensaje debe tener al menos 10 caracteres");
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join(", "));
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post(
        '/api/enviar-correo',
        formData,
        {
          timeout: 20000, // Aumentado a 20 segundos
          headers: {
            'Content-Type': 'application/json',
          }
        }
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
        
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      trackError(err, { 
        type: 'form_submission_error',
        formData: { ...formData, mensaje: '[REDACTED]' } // No loggear el mensaje completo
      });
      
      if (err.code === 'ECONNABORTED') {
        setError("La solicitud tardó demasiado. Verifica tu conexión e inténtalo de nuevo.");
      } else {
        setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contacto"
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-16"
      style={{
        backgroundImage: "url('/assets/contacto.jpg')",
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
            Dejanos tu mensaje y nos comunicaremos con vos. También puedes 
            <a href="#equipo" className=" hover:text-white  transition-colors"> conocer nuestro equipo </a> 
            o ver nuestros <a href="/desarrolloweb" className=" hover:text-white  transition-colors">trabajos completados</a>.
          </p>

          <form className="space-y-4 " onSubmit={handleSubmit} noValidate>
            {[
              { id: "nombre", label: "Nombre", required: true },
              { id: "apellido", label: "Apellido", required: true },
              { id: "empresa", label: "Organización", required: true },
              { id: "email", label: "Correo Electrónico", type: "email", required: true },
            ].map(({ id, label, type = "text", required = false }) => (
              <div key={id}>
                <label htmlFor={id} className="sr-only">
                  {label} {required && "(requerido)"}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={label}
                  value={formData[id]}
                  onChange={(e) =>
                    setFormData({ ...formData, [id]: e.target.value })
                  }
                  required={required}
                  aria-describedby={error && error.includes(label.toLowerCase()) ? `${id}-error` : undefined}
                  className="w-full bg-transparent text-black px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 text-sm transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="mensaje" className="sr-only">
                Mensaje (requerido)
              </label>
              <textarea
                id="mensaje"
                placeholder="Mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                required
                aria-describedby={error && error.includes("mensaje") ? "mensaje-error" : undefined}
                className="w-full text-black px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 text-sm resize-none transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-describedby="submit-help"
              className={`w-full relative overflow-hidden text-white font-semibold py-3 rounded-full transition-all duration-300 ${
                loading 
                  ? "bg-purple-600 cursor-not-allowed" 
                  : "bg-purple-800 hover:bg-purple-600 hover:scale-105 focus:ring-4 focus:ring-purple-300"
              }`}
            >
              {loading && (
                <span
                  className="absolute inset-0 bg-purple-800 animate-loadingBar"
                  style={{ zIndex: 0 }}
                  aria-hidden="true"
                ></span>
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </span>
            </button>
            
            <p id="submit-help" className="text-xs text-gray-300 text-center">
              Al enviar este formulario, aceptas que procesemos tu información de contacto.
            </p>

            {success && (
              <div 
                role="alert" 
                aria-live="polite"
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm text-center"
              >
                ✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}
            {error && (
              <div 
                role="alert" 
                aria-live="assertive"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm text-center"
              >
                ❌ {error}
              </div>
            )}
          </form>
        </div>

        {/* Datos de contacto */}

        <div className="w-full lg:w-1/3 bg-purple-900 text-white p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Información</h3>
          <p className="text-sm mb-2 hover:text-purple-200 hover:text-base">
            <a href="mailto:deamoncompany18@gmail.com">Consultas generales</a>
         
          </p>
          <p className="text-sm mb-2 hover:text-purple-200 hover:text-base">
          <a href="mailto:serv.levelup@gmail.com">Consultas de Marketing Digital</a>
          </p>
          <p className="text-sm mb-4 hover:text-purple-200 hover:text-base">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              +54 11 3119-9882
            </a>
          </p>

          <h4 className="text-lg font-medium mt-4">Deamon DD</h4>
          <p className="text-sm">Composición & Construcción</p>
          <p className="text-xs mt-2">
            Especialistas en <a href="/desarrolloweb" className=" hover:text-white  transition-colors">construcción de sistemas </a> 
             y <a href="/graphic" className=" hover:text-white  transition-colors">identidad visual</a> en Buenos Aires.
          </p>

          <div className="mt-3 text-left">
            <Image
              src="/assets/firma3.avif"
              alt="Firma de Parera Franco, Fundador de Deamon DD"
              width={128}
              height={64}
              className="w-32 h-auto mb-1"
              loading="lazy"
            />

            <p className="text-xs ml-1 font-light">Fundador Deamon DD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
