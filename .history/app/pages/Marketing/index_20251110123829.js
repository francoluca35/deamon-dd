"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../lib/i18n";

const Marketing = () => {
  const router = useRouter();
  const { t, currentLang } = useTranslation();

  const handleWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre Growth Marketing. ¿Podemos agendar una llamada?";
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleConoceAgencia = () => {
    router.push('/equipo');
  };

  return (
    <div id="marketing" className="min-h-screen bg-neutral-950 text-white relative">


      {/* Hero Section */}
      <div className="relative px-8 py-20 max-w-6xl mx-auto z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg overflow-hidden hidden sm:block">
            <Image
              src="https://res.cloudinary.com/dhmswq45h/image/upload/v1761018642/deamon-dd/home/Logo-equipo-B.png"
              alt="Logo Deamon DD"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <h1 className="text-5xl font-extrabold">Deamon DD & +LevelUP Marketing</h1>
        </div>

        <h2 className="text-lg font-semibold text-white/90 mb-6">
          {t("marketing.subtitle")}
        </h2>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          {t("marketing.description1")}
        </p>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-8">
          {t("marketing.description2")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button 
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            {t("marketing.scheduleCall")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button 
            onClick={handleConoceAgencia}
            className="border border-white/30 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            {t("marketing.knowAgency")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative px-8 pb-24 z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">{t("marketing.caseStudiesTitle")}</h3>

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
                  src="https://res.cloudinary.com/dhmswq45h/image/upload/v1761018643/deamon-dd/marketing/arquimec.jpg"
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

                {/* Tags en la parte media - centrados */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.advertising")}</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.uxui")}</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.webDev")}</span>
                </div>

                {/* Contenido de texto en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">
                    {t("marketing.caseStudies.arquimec.title")}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t("marketing.caseStudies.arquimec.description")}
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
                        src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                        alt="Zarah Carter Logo"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                </div>

                {/* Tags en la parte media - centrados */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.advertising")}</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.uxui")}</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.webDev")}</span>
                </div>

                {/* Contenido de texto en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">
                    {t("marketing.caseStudies.zarahCarter.title")}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t("marketing.caseStudies.zarahCarter.description")}
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
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                        alt="Entre Nous Logo"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                </div>

                {/* Tags en la parte media - centrados */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center">
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.advertising")}</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.uxui")}</span>
                  <span className="bg-gray-800/90 text-white px-3 py-1 rounded-full text-xs">{t("marketing.tags.webDev")}</span>
                </div>

                {/* Contenido de texto en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">
                    {t("marketing.caseStudies.entreNous.title")}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t("marketing.caseStudies.entreNous.description")}
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
