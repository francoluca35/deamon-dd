"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Marketing = () => {
  const router = useRouter();

  const handleWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre Growth Marketing. ¿Podemos agendar una llamada?";
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleConoceAgencia = () => {
    router.push('/equipo');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white relative">


      {/* Hero Section */}
      <div className="relative px-8 py-20 max-w-6xl mx-auto z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src="/assets/Logo-equipo-B.avif"
              alt="Logo Deamon DD"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <h1 className="text-5xl font-extrabold">Deamon DD & +LevelUP Marketing</h1>
        </div>

        <h2 className="text-lg font-semibold text-white/90 mb-6">
          El éxito es el resultado de decisiones estratégicas, y aún mejor si son predecibles.
        </h2>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          Diseñamos estrategias de Deamon DD & +LevelUP Marketing aprovechando todas las herramientas y medios digitales disponibles, con medición precisa y optimización de la inversión en tiempo real mediante inteligencia artificial y un equipo altamente capacitado. Analizamos cada activo de cada campaña con exactitud para maximizar el impacto de la inversión.
        </p>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          Nuestro enfoque está orientado a hacer crecer empresas de forma sostenible, multiplicar su retorno de inversión y alcanzar objetivos comerciales a corto, mediano y largo plazo.
        </p>

        <div className="flex gap-4 mb-14">
          <button 
            onClick={handleWhatsApp}
            className="bg-pink-500 hover:bg-pink-600 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            Agendá una llamada
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button 
            onClick={handleConoceAgencia}
            className="bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            Conocé la agencia
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative px-8 pb-24 z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">A continuación explora algunos casos de estudio de Deamon DD & +LevelUP Marketing:</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Caso 1 - Beta Automotores */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[3/4]">
                {/* Imagen que ocupa toda la tarjeta */}
                <Image
                  src="/assets/marketing/arquimec.jpg"
                  alt="Arquimec"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Logo badge centrado arriba */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-black/100 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/assets/marketing/arquimec-logo.webp"
                      alt="Arquimec Logo"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Tags en la parte media */}
                <div className="absolute top-20 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Pauta</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Diseño UX/UI</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Desarrollo Web</span>
                </div>

                {/* Contenido de texto en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Caso de éxito | Beta Automotores</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Los acompañamos desde hace varios años en su camino con el objetivo de posicionarse como una de las cinco concesionarias más importantes de General Motors en Argentina.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Caso 2 - Zarah Carter */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[3/4]">
                {/* Imagen que ocupa toda la tarjeta */}
                <Image
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Zarah Carter"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Logo badge centrado arriba */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/assets/marketing/zarah-carter-logo.png"
                      alt="Zarah Carter Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Tags en la parte media */}
                <div className="absolute top-20 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Pauta</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Diseño UX/UI</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Desarrollo Web</span>
                </div>

                {/* Contenido de texto en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Caso de éxito | Zarah Carter</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Zarah Carter, óptica en Costa Rica, pasó de 30 a 800 leads mensuales con alta conversión, gracias a la optimización de procesos de venta y estrategias innovadoras de gran impacto.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Caso 3 - Entre Nous */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[3/4]">
                {/* Imagen que ocupa toda la tarjeta */}
                <Image
                  src="/assets/marketing/entre-nous.jpg"
                  alt="Entre Nous"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Logo badge centrado arriba */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/assets/marketing/entre-nous-logo.png"
                      alt="Entre Nous Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Tags en la parte media */}
                <div className="absolute top-20 left-4 flex flex-wrap gap-2">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Pauta</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Diseño UX/UI</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">Desarrollo Web</span>
                </div>

                {/* Contenido de texto en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Caso de éxito | Entre Nous</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Hemos acompañado a la cadena de restaurantes Entre Nous en su transformación digital, potenciando su imagen y comunicación con el objetivo de atraer a más comensales.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
