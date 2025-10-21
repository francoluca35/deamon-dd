// Optimizaciones ultra agresivas para rendimiento
export const ultraOptimizations = {
  // Eliminar JavaScript no utilizado
  removeUnusedJS: () => {
    if (typeof window !== 'undefined') {
      // Eliminar scripts no críticos
      const nonCriticalScripts = document.querySelectorAll('script[data-non-critical]');
      nonCriticalScripts.forEach(script => {
        script.remove();
      });
      
      // Defer scripts no críticos
      const deferScripts = document.querySelectorAll('script[data-defer]');
      deferScripts.forEach(script => {
        script.defer = true;
      });
    }
  },

  // Optimizar CLS agresivamente
  aggressiveCLSOptimization: () => {
    if (typeof window !== 'undefined') {
      // Establecer dimensiones fijas para todos los elementos críticos
      const criticalElements = document.querySelectorAll('[data-critical]');
      criticalElements.forEach(element => {
        element.style.contain = 'layout style paint';
        element.style.willChange = 'auto';
        element.style.transform = 'translateZ(0)';
      });
      
      // Prevenir layout shift en imágenes
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.style.width && !img.style.height) {
          img.style.width = '100%';
          img.style.height = 'auto';
        }
      });
    }
  },

  // Optimizar LCP agresivamente
  aggressiveLCPOptimization: () => {
    if (typeof window !== 'undefined') {
      // Preload recursos críticos inmediatamente
      const criticalResources = [
        '/assets/fondoprincipal.jpg',
        '/assets/deamon-icon-B-s.avif',
        '/assets/Logo-equipo-B.avif'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      });
      
      // Optimizar el elemento LCP
      const lcpElement = document.querySelector('h1');
      if (lcpElement) {
        lcpElement.style.contain = 'layout style paint';
        lcpElement.style.willChange = 'auto';
        lcpElement.style.transform = 'translateZ(0)';
      }
    }
  },

  // Eliminar render-blocking resources
  removeRenderBlocking: () => {
    if (typeof window !== 'undefined') {
      // Convertir CSS crítico a inline
      const criticalCSS = document.querySelector('link[rel="stylesheet"][data-critical]');
      if (criticalCSS) {
        // Mover CSS crítico a inline
        fetch(criticalCSS.href)
          .then(response => response.text())
          .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.insertBefore(style, document.head.firstChild);
            criticalCSS.remove();
          });
      }
    }
  },

  // Optimizar para dispositivos lentos
  optimizeForSlowDevices: () => {
    if (typeof window !== 'undefined') {
      const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      
      if (isSlowDevice || isLowMemory) {
        // Deshabilitar animaciones
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
        
        // Reducir calidad de imágenes
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          img.style.imageRendering = 'pixelated';
        });
      }
    }
  },

  // Preload crítico agresivo
  aggressivePreload: () => {
    if (typeof window !== 'undefined') {
      // Preload de fuentes críticas
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = 'https://fonts.gstatic.com/s/geist/v1/geist-regular.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
      
      // Preload de recursos críticos
      const criticalResources = [
        { href: '/assets/fondoprincipal.jpg', as: 'image' },
        { href: '/assets/deamon-icon-B-s.avif', as: 'image' }
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = resource.as;
        link.href = resource.href;
        document.head.appendChild(link);
      });
    }
  }
};

// Inicializar optimizaciones ultra agresivas
export const initializeUltraOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Ejecutar inmediatamente
    ultraOptimizations.aggressiveCLSOptimization();
    ultraOptimizations.aggressiveLCPOptimization();
    ultraOptimizations.aggressivePreload();
    
    // Ejecutar después de DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        ultraOptimizations.removeUnusedJS();
        ultraOptimizations.removeRenderBlocking();
        ultraOptimizations.optimizeForSlowDevices();
      });
    } else {
      ultraOptimizations.removeUnusedJS();
      ultraOptimizations.removeRenderBlocking();
      ultraOptimizations.optimizeForSlowDevices();
    }
  }
};
