// Performance monitoring y optimización
export class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = new Map();
  }

  // Medir Core Web Vitals
  measureWebVitals() {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // First Input Delay (FID)
    this.observeFID();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
    
    // First Contentful Paint (FCP)
    this.observeFCP();
  }

  observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', observer);
    }
  }

  observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.reportMetric('FID', entry.processingStart - entry.startTime);
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.set('fid', observer);
    }
  }

  observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
        this.reportMetric('CLS', clsValue);
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('cls', observer);
    }
  }

  observeFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fcp = entry.startTime;
          this.reportMetric('FCP', entry.startTime);
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
      this.observers.set('fcp', observer);
    }
  }

  // Medir tiempo de carga de recursos
  measureResourceTiming() {
    if (typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource');
    const resourceMetrics = {
      total: resources.length,
      totalSize: 0,
      loadTime: 0,
      byType: {}
    };

    resources.forEach((resource) => {
      const type = resource.initiatorType;
      if (!resourceMetrics.byType[type]) {
        resourceMetrics.byType[type] = {
          count: 0,
          size: 0,
          loadTime: 0
        };
      }
      
      resourceMetrics.byType[type].count++;
      resourceMetrics.byType[type].size += resource.transferSize || 0;
      resourceMetrics.byType[type].loadTime += resource.duration;
      
      resourceMetrics.totalSize += resource.transferSize || 0;
      resourceMetrics.loadTime += resource.duration;
    });

    this.metrics.resources = resourceMetrics;
    return resourceMetrics;
  }

  // Medir tiempo de renderizado
  measureRenderTime() {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      const renderMetrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart,
        dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        load: navigation.loadEventEnd - navigation.loadEventStart,
        total: navigation.loadEventEnd - navigation.navigationStart,
      };

      this.metrics.render = renderMetrics;
      return renderMetrics;
    }
  }

  // Reportar métricas
  reportMetric(name, value) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }
  }

  // Obtener todas las métricas
  getAllMetrics() {
    return {
      ...this.metrics,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
  }

  // Limpiar observadores
  disconnect() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
  }
}

// Instancia global
export const performanceMonitor = new PerformanceMonitor();

// Hook para usar el monitor de performance
export const usePerformanceMonitor = () => {
  const startMonitoring = () => {
    performanceMonitor.measureWebVitals();
    performanceMonitor.measureResourceTiming();
    performanceMonitor.measureRenderTime();
  };

  const getMetrics = () => {
    return performanceMonitor.getAllMetrics();
  };

  const stopMonitoring = () => {
    performanceMonitor.disconnect();
  };

  return { startMonitoring, getMetrics, stopMonitoring };
};
