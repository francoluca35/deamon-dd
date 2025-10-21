"use client";
import { useEffect, useState } from 'react';
import { measurePerformance, trackScrollDepth } from '../lib/analytics';
import { performanceOptimizations } from '../lib/performance';

export const usePerformance = () => {
  const [metrics, setMetrics] = useState(null);
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Medir performance inicial
    const performanceMetrics = measurePerformance();
    setMetrics(performanceMetrics);

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
        setScrollDepth(scrollPercent);
        trackScrollDepth(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDepth]);

  return { metrics, scrollDepth };
};

export const useLazyLoading = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold]);

  return [setRef, isVisible];
};

// Hook para usar el monitor de performance
export const usePerformanceMonitor = () => {
  const startMonitoring = () => {
    if (typeof window !== 'undefined') {
      performanceMonitor.measureWebVitals();
      performanceMonitor.measureResourceTiming();
      performanceMonitor.measureRenderTime();
    }
  };

  const getMetrics = () => {
    return performanceMonitor.getAllMetrics();
  };

  const stopMonitoring = () => {
    performanceMonitor.disconnect();
  };

  return { startMonitoring, getMetrics, stopMonitoring };
};
