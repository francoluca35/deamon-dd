"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaCode, FaLightbulb, FaRocket, FaPalette, FaMobile, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "../../lib/i18n";
import { useState, useEffect } from "react";

// Componente que se re-renderiza cuando cambia el idioma
function AgenciaContent() {
  const { t, isLoaded, currentLang } = useTranslation();
  
  // Debug temporal para ver qué está pasando
  console.log('🔍 AGENCIA - currentLang:', currentLang, 'isLoaded:', isLoaded);
  console.log('🔍 AGENCIA - t("agency.title"):', t("agency.title"));
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-black to-black text-white">
  
  // Renderizar directamente el contenido con key dinámica
  return (
    <div key={`${currentLang}-${renderKey}`} className="w-full min-h-screen bg-gradient-to-br from-black via-black to-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated code lines */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-purple-400 font-mono text-sm animate-pulse">
            &lt;div className=&quot;creative-team&quot;&gt;
          </div>
          <div className="absolute top-32 left-20 text-purple-400 font-mono text-sm animate-pulse delay-300">
            &lt;marketing&gt;Digital&lt;/marketing&gt;
          </div>
          <div className="absolute top-44 left-10 text-purple-400 font-mono text-sm animate-pulse delay-500">
            &lt;/div&gt;
          </div>
          <div className="absolute top-60 right-20 text-violet-400 font-mono text-sm animate-pulse delay-700">
            function improveClient() {"{"}
          </div>
          <div className="absolute top-80 right-30 text-violet-400 font-mono text-sm animate-pulse delay-1000">
            return creativeResults;
          </div>
          <div className="absolute top-96 right-20 text-violet-400 font-mono text-sm animate-pulse delay-1200">
            {"}"}
          </div>
          <div className="absolute top-40 right-10 text-purple-400 font-mono text-xs animate-pulse delay-900">
            const apps = [&quot;iOS&quot;, &quot;Android&quot;];
          </div>
          <div className="absolute top-56 left-40 text-green-400 font-mono text-xs animate-pulse delay-1100">
            designSystem.branding();
          </div>
          <div className="absolute top-72 left-20 text-yellow-400 font-mono text-xs animate-pulse delay-1300">
            agency.improveClient();
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 mb-10 md:mb-0 z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("agency.title").split(t("agency.titleHighlight")).map((part, index) => (
                <span key={index}>
                  {part}
                  {index < t("agency.title").split(t("agency.titleHighlight")).length - 1 && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                      {t("agency.titleHighlight")}
                    </span>
                  )}
                </span>
              ))}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("agency.description")}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-400/40 shadow-lg shadow-cyan-500/20">
                <FaCode className="text-cyan-300" />
                <span className="text-sm font-semibold text-white">{t("agency.services.webDev")}</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-pink-400/40 shadow-lg shadow-pink-500/20">
                <FaPalette className="text-pink-300" />
                <span className="text-sm font-semibold text-white">{t("agency.services.branding")}</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-400/40 shadow-lg shadow-orange-500/20">
                <FaRocket className="text-orange-300" />
                <span className="text-sm font-semibold text-white">{t("agency.services.marketing")}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="absolute inset-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-purple-400/30">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2 font-mono text-xs sm:text-sm overflow-x-auto">
                    <div className="text-purple-400">const deamonDD = {"{"}</div>
                    <div className="text-violet-400 ml-2 sm:ml-4">{t("agency.code.services")}: [</div>
                    <div className="text-green-400 ml-4 sm:ml-8">&quot;{t("agency.services.marketing")}&quot;,</div>
                    <div className="text-green-400 ml-4 sm:ml-8">&quot;{t("agency.services.branding")}&quot;,</div>
                    <div className="text-green-400 ml-4 sm:ml-8">&quot;{t("agency.services.webDev")}&quot;,</div>
                    <div className="text-green-400 ml-4 sm:ml-8">&quot;Apps Móviles&quot;</div>
                    <div className="text-purple-400 ml-2 sm:ml-4">],</div>
                    <div className="text-orange-400 ml-2 sm:ml-4">{t("agency.code.mission")}: &quot;{t("agency.code.improveClient")}&quot;,</div>
                    <div className="text-orange-400 ml-2 sm:ml-4">{t("agency.code.passion")}: &quot;{t("agency.code.creativityResults")}&quot;</div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
