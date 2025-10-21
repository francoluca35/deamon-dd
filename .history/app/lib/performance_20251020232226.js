// Optimizaciones de rendimiento críticas
export const performanceOptimizations = {
  // Preload recursos críticos
  preloadCriticalResources: () => {
    if (typeof window !== 'undefined') {
      // Preload imagen de fondo crítica
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = '/assets/fondoprincipal.jpg';
      link.type = 'image/jpeg';
      document.head.appendChild(link);
    }
  },

  // Optimizar animaciones para dispositivos de bajo rendimiento
  optimizeAnimations: () => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      if (prefersReducedMotion || isLowEndDevice) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
      }
    }
  },

  // Lazy load componentes no críticos
  lazyLoadComponents: () => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add('loaded');
            observer.unobserve(element);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // Observar elementos que necesitan lazy loading
      document.querySelectorAll('[data-lazy]').forEach((el) => {
        observer.observe(el);
      });
    }
  },

  // Optimizar CLS (Cumulative Layout Shift)
  preventLayoutShift: () => {
    if (typeof window !== 'undefined') {
      // Establecer dimensiones fijas para elementos críticos
      const criticalElements = document.querySelectorAll('[data-critical]');
      criticalElements.forEach((element) => {
        element.style.contain = 'layout style paint';
        element.style.willChange = 'auto';
      });
    }
  },

  // Defer scripts no críticos
  deferNonCriticalScripts: () => {
    if (typeof window !== 'undefined') {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        script.defer = true;
      });
    }
  },

  // Optimizar imágenes
  optimizeImages: () => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-optimize]');
      images.forEach((img) => {
        img.loading = 'lazy';
        img.decoding = 'async';
      });
    }
  }
};

// Inicializar optimizaciones
export const initializePerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Ejecutar optimizaciones inmediatamente
    performanceOptimizations.preloadCriticalResources();
    performanceOptimizations.optimizeAnimations();
    performanceOptimizations.preventLayoutShift();
    
    // Ejecutar después de que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        performanceOptimizations.lazyLoadComponents();
        performanceOptimizations.deferNonCriticalScripts();
        performanceOptimizations.optimizeImages();
      });
    } else {
      performanceOptimizations.lazyLoadComponents();
      performanceOptimizations.deferNonCriticalScripts();
      performanceOptimizations.optimizeImages();
    }
  }
};