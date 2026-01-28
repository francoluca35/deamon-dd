"use client";
import { useState, useEffect, Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import Navbar2 from "./components/Navbar/idex";
import Inicio from "./pages/Home";
import CursorEffect from "./components/CursorEffect";
import { usePerformanceMonitor } from "./hooks/usePerformance";
import { useErrorTracking } from "./lib/errorTracking";
import { LanguageProvider } from "./lib/i18n";

// Lazy loading optimizado de componentes pesados
const Equipo = lazy(() => import("./pages/Equipo"));
const Branding = lazy(() => import("./pages/Branding"));

const Desarrollo = lazy(() => import("./pages/Desarrollo"));
// const Marketing = lazy(() => import("./pages/Marketing"));
const Diseño = lazy(() => import("./pages/Diseño"));

const Contacto = lazy(() => import("./pages/Contacto"));
// const NuestroEquipo = lazy(() => import("./components/nuestroEquipo"));
const Footer = lazy(() => import("./components/Footer"));

// WhatsApp con loading optimizado
const FloatingWhatsApp = dynamic(() => import("./components/WhatsApp"), {
  ssr: false,
  loading: () => <div className="fixed bottom-4 right-4 w-14 h-14 bg-green-500 rounded-full animate-pulse"></div>
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

    // Preload no bloqueante
    const preloadCritical = async () => {
      // Cargar inmediatamente sin esperar
      setIsLoaded(true);
      
      // Preload en background sin bloquear
      if (typeof window !== 'undefined') {
        if (window.requestIdleCallback) {
          requestIdleCallback(() => {
            const isMobile = window.innerWidth < 768;
            const criticalImage = isMobile ? '/assets/deamon-icon-B-s.avif' : '/assets/imagen-ilu.avif';
            
            const img = new Image();
            img.src = criticalImage;
            img.loading = 'lazy';
          });
        } else {
          // Fallback para navegadores que no soportan requestIdleCallback
          setTimeout(() => {
            const isMobile = window.innerWidth < 768;
            const criticalImage = isMobile ? '/assets/deamon-icon-B-s.avif' : '/assets/imagen-ilu.avif';
            
            const img = new Image();
            img.src = criticalImage;
            img.loading = 'lazy';
          }, 100);
        }
      }
    };

    preloadCritical().catch(error => {
      trackError(error, { type: 'preload_error' });
      setIsLoaded(true); // Continuar aunque falle el preload
    });
  }, [startMonitoring, trackError]);

  return (
    <LanguageProvider>
      <div>
        <CursorEffect />
        <Navbar2 />
        <Inicio />
        
        <div id="equipo">
          <Suspense fallback={<LoadingSpinner />}>
            <Equipo />
          </Suspense>
        </div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Branding />
        </Suspense>
        
        <div id="desarrollo">
          <Suspense fallback={<LoadingSpinner />}>
            <Desarrollo />
          </Suspense>
        </div>
        
        <Suspense fallback={<LoadingSpinner />}>
          {/* <Marketing /> */}
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Diseño />
        </Suspense>
        
   
        
        <Suspense fallback={<LoadingSpinner />}>
          <Contacto />
        </Suspense>
        
       
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
        
        {isLoaded && <FloatingWhatsApp />}
      </div>
    </LanguageProvider>
  );
}
