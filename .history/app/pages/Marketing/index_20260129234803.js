"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../lib/i18n";
import { FaBullhorn, FaChartLine, FaHashtag, FaFacebookF, FaGoogle, FaRocket } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Marketing = () => {
  const router = useRouter();
  const { t, isLoaded } = useTranslation();
  const [activeId, setActiveId] = useState("strategy");

  const translate = (key, fallback) => {
    if (!isLoaded) return fallback;
    const value = t(key);
    return value === key ? fallback : value;
  };

  const translateList = (key, fallback) => {
    if (!isLoaded) return fallback;
    const value = t(key);
    return Array.isArray(value) ? value : fallback;
  };

  const handleWhatsApp = (selectedService) => {
    const phone = "+541131199882";
    const fallbackService = translate(activeOffering.titleKey, activeOffering.fallbackTitle);
    const serviceLabel = selectedService || fallbackService;
    const message = `hola quisiera saber los servicios que ofrece Deamon Estudio. Me interesa: ${serviceLabel}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleConoceAgencia = () => {
    router.push("/equipo");
  };

  const offerings = [
    {
      id: "strategy",
      icon: FaChartLine,
      titleKey: "marketing.offerings.strategy.title",
      fallbackTitle: "Estrategias de marketing",
      descriptionKey: "marketing.offerings.strategy.description",
      fallbackDescription: "Diagnóstico, objetivos y un plan claro para crecer con acciones medibles.",
      bulletsKey: "marketing.offerings.strategy.bullets",
      fallbackBullets: [
        "Investigación de mercado y audiencia",
        "Embudo y objetivos comerciales",
        "Roadmap de contenidos y campañas"
      ]
    },
    {
      id: "social",
      icon: FaHashtag,
      titleKey: "marketing.offerings.social.title",
      fallbackTitle: "Posicionamiento en redes",
      descriptionKey: "marketing.offerings.social.description",
      fallbackDescription: "Contenido, marca y comunidad para destacar y convertir en Instagram, Facebook y más.",
      bulletsKey: "marketing.offerings.social.bullets",
      fallbackBullets: [
        "Calendario editorial estratégico",
        "Diseño y dirección creativa",
        "Optimización de perfiles"
      ]
    },
    {
      id: "meta",
      icon: FaFacebookF,
      titleKey: "marketing.offerings.meta.title",
      fallbackTitle: "Meta Ads",
      descriptionKey: "marketing.offerings.meta.description",
      fallbackDescription: "Campañas de alto rendimiento para captar leads y ventas con audiencias inteligentes.",
      bulletsKey: "marketing.offerings.meta.bullets",
      fallbackBullets: [
        "Segmentación avanzada y retargeting",
        "Creatividades que convierten",
        "Optimización diaria por resultados"
      ]
    },
    {
      id: "tiktok",
      icon: SiTiktok,
      titleKey: "marketing.offerings.tiktok.title",
      fallbackTitle: "TikTok Ads",
      descriptionKey: "marketing.offerings.tiktok.description",
      fallbackDescription: "Anuncios nativos con foco en viralidad, alcance y performance real.",
      bulletsKey: "marketing.offerings.tiktok.bullets",
      fallbackBullets: [
        "Formatos verticales de impacto",
        "Estrategia de hooks y retención",
        "Testing rápido de creatividades"
      ]
    },
    {
      id: "google",
      icon: FaGoogle,
      titleKey: "marketing.offerings.google.title",
      fallbackTitle: "Google Ads",
      descriptionKey: "marketing.offerings.google.description",
      fallbackDescription: "Búsqueda, display y remarketing para capturar demanda activa.",
      bulletsKey: "marketing.offerings.google.bullets",
      fallbackBullets: [
        "Keywords y anuncios de alto CTR",
        "Landing pages optimizadas",
        "Medición con conversiones reales"
      ]
    }
  ];

  const activeOffering = offerings.find((item) => item.id === activeId) || offerings[0];
  const ActiveIcon = activeOffering.icon;

  return (
    <section id="marketing" className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-24 -left-24 w-72 h-72 bg-violet-700/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-pink-600/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative px-8 pt-24 pb-16 max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <FaBullhorn className="text-violet-300 text-xl" />
            </div>
            <h1 className="text-5xl font-extrabold">
              {translate("marketing.heroTitle", "Marketing Digital & Performance")}
            </h1>
          </div>

          <p className="text-xl text-white/80 max-w-3xl">
            {translate(
              "marketing.heroSubtitle",
              "Estrategias inteligentes, creatividad y pauta para que tu marca venda más."
            )}
          </p>

          <p className="text-white/70 max-w-3xl leading-relaxed">
            {translate(
              "marketing.heroDescription",
              "Diseñamos planes de marketing integrales que combinan posicionamiento, publicidad y análisis de datos para multiplicar tus resultados. Desde el diagnóstico hasta la optimización diaria, te acompañamos con un enfoque 100% medible."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-violet-800 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-pink-500/20"
            >
              {translate("marketing.ctaPrimary", "Hablemos de tu campaña")}
              <FaRocket className="text-white" />
            </button>
            <button
              onClick={handleConoceAgencia}
              className="border border-white/30 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              {translate("marketing.ctaSecondary", "Conocé la agencia")}
            </button>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">Meta Ads</span>
            <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">TikTok Ads</span>
            <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">Google Ads</span>
            <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">Redes & contenidos</span>
          </div>
        </motion.div>
      </div>

      <div className="relative px-8 pb-24 z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-bold">
              {translate("marketing.offeringsTitle", "Todo lo que hacemos para escalar tu marca")}
            </h2>
            <p className="text-white/60 max-w-xl">
              {translate(
                "marketing.offeringsSubtitle",
                "Elegí un enfoque y explorá cómo trabajamos cada estrategia."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
            <div className="space-y-3">
              {offerings.map((item) => {
                const isActive = item.id === activeId;
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? "bg-white/10 border-violet-500/60 shadow-lg shadow-violet-500/20"
                        : "bg-white/5 border-white/10 hover:border-violet-500/40"
                    }`}
                  >
                    <span className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-violet-600 text-white" : "bg-white/10 text-white/70"
                    }`}>
                      <ItemIcon />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {translate(item.titleKey, item.fallbackTitle)}
                      </h3>
                      <p className="text-sm text-white/60">
                        {translate(item.descriptionKey, item.fallbackDescription)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeOffering.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 shadow-2xl"
            >
              <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-violet-500/30 blur-3xl"></div>
              <div className="absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl"></div>

              <div className="relative flex flex-wrap items-center gap-3 mb-6">
                <span className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white text-xl shadow-lg shadow-violet-500/40">
                  <ActiveIcon />
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">
                    Performance
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">
                    Creatividad
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">
                    Escalado
                  </span>
                </div>
              </div>

              <div className="relative mb-6">
                <h3 className="text-3xl font-bold mb-2">
                  {translate(activeOffering.titleKey, activeOffering.fallbackTitle)}
                </h3>
                <p className="text-white/70 text-lg">
                  {translate(activeOffering.descriptionKey, activeOffering.fallbackDescription)}
                </p>
              </div>

              <div className="relative mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-white/60">Impacto visual y velocidad real</p>
                  <span className="text-xs text-white/40">Datos promedio</span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <table className="w-full text-sm">
                    <thead className="text-white/60">
                      <tr>
                        <th className="text-left font-semibold px-4 py-3">Canal</th>
                        <th className="text-left font-semibold px-4 py-3">Impacto visual</th>
                        <th className="text-left font-semibold px-4 py-3">Velocidad</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      {[
                        { channel: "Estrategia", impact: "+30% / +80%", speed: "2–4 semanas" },
                        { channel: "Redes orgánicas", impact: "+50% / +200%", speed: "7–21 días" },
                        { channel: "Meta Ads", impact: "+150% / +400%", speed: "24–72 hs" },
                        { channel: "TikTok Ads", impact: "+300% / +1000%", speed: "12–48 hs" },
                        { channel: "Google Ads", impact: "+100% / +320%", speed: "24–72 hs" }
                      ].map((row) => (
                        <tr key={row.channel} className="border-t border-white/10">
                          <td className="px-4 py-3 font-semibold text-white">{row.channel}</td>
                          <td className="px-4 py-3">{row.impact}</td>
                          <td className="px-4 py-3">{row.speed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <ul className="relative space-y-3 mb-6">
                {translateList(activeOffering.bulletsKey, activeOffering.fallbackBullets).map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/85">
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="relative flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleWhatsApp()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-neutral-900 font-semibold hover:bg-violet-100 transition-all"
                >
                  {translate("marketing.ctaInline", "Quiero mi estrategia")}
                  <FaRocket />
                </button>
                <span className="text-sm text-white/60">
                  {translate("marketing.ctaHint", "Respuesta rápida y propuesta en 24/48 hs.")}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: translate("marketing.flow.attract.title", "Atracción"),
                description: translate("marketing.flow.attract.description", "Contenido + pauta para llegar a tu público ideal.")
              },
              {
                title: translate("marketing.flow.convert.title", "Conversión"),
                description: translate("marketing.flow.convert.description", "Creatividades y embudos que convierten clics en ventas.")
              },
              {
                title: translate("marketing.flow.scale.title", "Escalado"),
                description: translate("marketing.flow.scale.description", "Optimización continua para crecer con rentabilidad.")
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
