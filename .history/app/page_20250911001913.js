"use client";
import { useState, useEffect, Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import Navbar2 from "./components/Navbar/idex";
import Inicio from "./pages/Home";
import ArrowUp from "./components/ArrowUp";
import { usePerformanceMonitor } from "./hooks/usePerformance";
import { useErrorTracking } from "./lib/errorTracking";

// Lazy loading de componentes pesados
const Equipo = lazy(() => import("./pages/Equipo"));
const Especialidades = lazy(() => import("./pages/Especialidades"));
const Desarrollo = lazy(() => import("./pages/Desarrollo"));
const Diseño = lazy(() => import("./pages/Diseño"));
const PCompetition = lazy(() => import("./pages/PCompeticion"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingWhatsApp = dynamic(() => import("./components/WhatsApp"), {
  ssr: false,
  loading: () => null
});

// Componente de loading optimizado
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { startMonitoring } = usePerformanceMonitor();
  const { trackError } = useErrorTracking();

  useEffect(() => {
    // Iniciar monitoreo de performance
    startMonitoring();

    // Preload crítico
    const preloadCritical = async () => {
      // Preload de imágenes críticas
      const criticalImages = [
        '/assets/imagen-ilu.avif',
        '/assets/fondo1.avif',
        '/assets/deamon-icon-B-s.avif'
      ];
      
      await Promise.all(
        criticalImages.map(src => {
          const img = new Image();
          img.src = src;
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
      
      setIsLoaded(true);
    };

    preloadCritical().catch(error => {
      trackError(error, { type: 'preload_error' });
      setIsLoaded(true); // Continuar aunque falle el preload
    });
  }, [startMonitoring, trackError]);

  return (
    <div>
      <Navbar2 />
      <Inicio />
      
      <div id="equipo">
        <Suspense fallback={<LoadingSpinner />}>
          <Equipo />
        </Suspense>
      </div>
      
      <ArrowUp />
      
      <div id="desarrollo">
        <Suspense fallback={<LoadingSpinner />}>
          <Desarrollo />
        </Suspense>
      </div>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Diseño />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <PCompetition />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contacto />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      
      {isLoaded && <FloatingWhatsApp />}
    </div>
  );
}
