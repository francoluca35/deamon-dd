// Sistema completo de testing SEO
export class SEOTester {
  constructor() {
    this.results = {
      score: 0,
      totalChecks: 0,
      passedChecks: 0,
      failedChecks: 0,
      warnings: 0,
      details: []
    };
  }

  // Test principal que ejecuta todos los checks
  async runFullSEOTest() {
    console.log('🔍 Iniciando análisis SEO completo...');
    
    // Verificar que estamos en el navegador
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      throw new Error('El test SEO debe ejecutarse en el navegador');
    }
    
    // Si estamos en la página de test SEO, analizar la página principal
    if (window.location.pathname === '/seo-test') {
      console.log('🔄 Detectado test desde página SEO, analizando página principal...');
      return await this.analyzeHomePage();
    }
    
    // Esperar a que el DOM esté listo
    if (document.readyState !== 'complete') {
      await new Promise(resolve => {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', resolve);
        } else {
          resolve();
        }
      });
    }
    
    await this.checkMetaTags();
    await this.checkHeadings();
    await this.checkImages();
    await this.checkLinks();
    await this.checkPerformance();
    await this.checkAccessibility();
    await this.checkContent();
    await this.checkTechnical();
    
    this.calculateScore();
    return this.generateReport();
  }

  // Analizar la página principal desde la página de test
  async analyzeHomePage() {
    try {
      console.log('🌐 Cargando página principal para análisis...');
      
      // Crear un iframe oculto para cargar la página principal
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = '/';
      document.body.appendChild(iframe);
      
      return new Promise((resolve, reject) => {
        iframe.onload = async () => {
          try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            
            // Verificar metadatos
            await this.checkMetaTagsInDocument(iframeDoc);
            await this.checkHeadingsInDocument(iframeDoc);
            await this.checkImagesInDocument(iframeDoc);
            await this.checkLinksInDocument(iframeDoc);
            await this.checkContentInDocument(iframeDoc);
            await this.checkTechnicalInDocument(iframeDoc);
            
            this.calculateScore();
            const report = this.generateReport();
            
            // Limpiar iframe
            document.body.removeChild(iframe);
            resolve(report);
          } catch (error) {
            document.body.removeChild(iframe);
            reject(error);
          }
        };
        
        iframe.onerror = () => {
          document.body.removeChild(iframe);
          reject(new Error('No se pudo cargar la página principal'));
        };
      });
    } catch (error) {
      console.error('Error analizando página principal:', error);
      throw error;
    }
  }

  // Verificar metadatos en un documento específico
  async checkMetaTagsInDocument(doc) {
    const checks = [
      {
        name: 'Title Tag',
        test: () => {
          const title = doc.querySelector('title');
          if (!title) return { passed: false, message: 'No se encontró title tag' };
          if (title.textContent.length < 30) return { passed: false, message: 'Title muy corto (< 30 caracteres)' };
          if (title.textContent.length > 60) return { passed: false, message: 'Title muy largo (> 60 caracteres)' };
          return { passed: true, message: `Title: "${title.textContent}"` };
        }
      },
      {
        name: 'Meta Description',
        test: () => {
          const metaDesc = doc.querySelector('meta[name="description"]');
          if (!metaDesc) return { passed: false, message: 'No se encontró meta description' };
          if (metaDesc.content.length < 120) return { passed: false, message: 'Meta description muy corta (< 120 caracteres)' };
          if (metaDesc.content.length > 160) return { passed: false, message: 'Meta description muy larga (> 160 caracteres)' };
          return { passed: true, message: `Meta description: "${metaDesc.content}"` };
        }
      },
      {
        name: 'Meta Keywords',
        test: () => {
          const metaKeywords = doc.querySelector('meta[name="keywords"]');
          if (!metaKeywords) return { passed: false, message: 'No se encontró meta keywords' };
          const keywords = metaKeywords.content.split(',').map(k => k.trim());
          if (keywords.length < 5) return { passed: false, message: 'Muy pocas keywords (< 5)' };
          if (keywords.length > 15) return { passed: false, message: 'Demasiadas keywords (> 15)' };
          return { passed: true, message: `Keywords: ${keywords.length} encontradas` };
        }
      },
      {
        name: 'Open Graph',
        test: () => {
          const ogTitle = doc.querySelector('meta[property="og:title"]');
          const ogDesc = doc.querySelector('meta[property="og:description"]');
          const ogImage = doc.querySelector('meta[property="og:image"]');
          
          if (!ogTitle || !ogDesc || !ogImage) {
            return { passed: false, message: 'Faltan tags de Open Graph' };
          }
          return { passed: true, message: 'Open Graph configurado correctamente' };
        }
      },
      {
        name: 'Twitter Cards',
        test: () => {
          const twitterCard = doc.querySelector('meta[name="twitter:card"]');
          const twitterTitle = doc.querySelector('meta[name="twitter:title"]');
          const twitterDesc = doc.querySelector('meta[name="twitter:description"]');
          
          if (!twitterCard || !twitterTitle || !twitterDesc) {
            return { passed: false, message: 'Faltan tags de Twitter Cards' };
          }
          return { passed: true, message: 'Twitter Cards configurado correctamente' };
        }
      }
    ];

    this.runChecksInDocument('Metadatos', checks, doc);
  }

  // Verificar metadatos
  async checkMetaTags() {
    const checks = [
      {
        name: 'Title Tag',
        test: () => {
          const title = document.querySelector('title');
          if (!title) return { passed: false, message: 'No se encontró title tag' };
          if (title.textContent.length < 30) return { passed: false, message: 'Title muy corto (< 30 caracteres)' };
          if (title.textContent.length > 60) return { passed: false, message: 'Title muy largo (> 60 caracteres)' };
          return { passed: true, message: `Title: "${title.textContent}"` };
        }
      },
      {
        name: 'Meta Description',
        test: () => {
          const metaDesc = document.querySelector('meta[name="description"]');
          if (!metaDesc) return { passed: false, message: 'No se encontró meta description' };
          if (metaDesc.content.length < 120) return { passed: false, message: 'Meta description muy corta (< 120 caracteres)' };
          if (metaDesc.content.length > 160) return { passed: false, message: 'Meta description muy larga (> 160 caracteres)' };
          return { passed: true, message: `Meta description: "${metaDesc.content}"` };
        }
      },
      {
        name: 'Meta Keywords',
        test: () => {
          const metaKeywords = document.querySelector('meta[name="keywords"]');
          if (!metaKeywords) return { passed: false, message: 'No se encontró meta keywords' };
          const keywords = metaKeywords.content.split(',').map(k => k.trim());
          if (keywords.length < 5) return { passed: false, message: 'Muy pocas keywords (< 5)' };
          if (keywords.length > 15) return { passed: false, message: 'Demasiadas keywords (> 15)' };
          return { passed: true, message: `Keywords: ${keywords.length} encontradas` };
        }
      },
      {
        name: 'Open Graph',
        test: () => {
          const ogTitle = document.querySelector('meta[property="og:title"]');
          const ogDesc = document.querySelector('meta[property="og:description"]');
          const ogImage = document.querySelector('meta[property="og:image"]');
          
          if (!ogTitle || !ogDesc || !ogImage) {
            return { passed: false, message: 'Faltan tags de Open Graph' };
          }
          return { passed: true, message: 'Open Graph configurado correctamente' };
        }
      },
      {
        name: 'Twitter Cards',
        test: () => {
          const twitterCard = document.querySelector('meta[name="twitter:card"]');
          const twitterTitle = document.querySelector('meta[name="twitter:title"]');
          const twitterDesc = document.querySelector('meta[name="twitter:description"]');
          
          if (!twitterCard || !twitterTitle || !twitterDesc) {
            return { passed: false, message: 'Faltan tags de Twitter Cards' };
          }
          return { passed: true, message: 'Twitter Cards configurado correctamente' };
        }
      }
    ];

    this.runChecks('Metadatos', checks);
  }

  // Verificar estructura de headings
  async checkHeadings() {
    const checks = [
      {
        name: 'H1 Tag',
        test: () => {
          const h1s = document.querySelectorAll('h1');
          if (h1s.length === 0) return { passed: false, message: 'No se encontró H1' };
          if (h1s.length > 1) return { passed: false, message: `Múltiples H1 encontrados (${h1s.length})` };
          return { passed: true, message: `H1: "${h1s[0].textContent}"` };
        }
      },
      {
        name: 'Estructura de Headings',
        test: () => {
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          let previousLevel = 0;
          let hasErrors = false;
          
          for (let heading of headings) {
            const level = parseInt(heading.tagName.charAt(1));
            if (level > previousLevel + 1) {
              hasErrors = true;
              break;
            }
            previousLevel = level;
          }
          
          if (hasErrors) return { passed: false, message: 'Estructura de headings incorrecta' };
          return { passed: true, message: `Estructura correcta con ${headings.length} headings` };
        }
      }
    ];

    this.runChecks('Estructura de Headings', checks);
  }

  // Verificar imágenes
  async checkImages() {
    const checks = [
      {
        name: 'Alt Text en Imágenes',
        test: () => {
          const images = document.querySelectorAll('img');
          let withoutAlt = 0;
          
          images.forEach(img => {
            if (!img.alt || img.alt.trim() === '') {
              withoutAlt++;
            }
          });
          
          if (withoutAlt > 0) {
            return { passed: false, message: `${withoutAlt} imágenes sin alt text` };
          }
          return { passed: true, message: `Todas las ${images.length} imágenes tienen alt text` };
        }
      },
      {
        name: 'Optimización de Imágenes',
        test: () => {
          const images = document.querySelectorAll('img');
          let unoptimized = 0;
          
          images.forEach(img => {
            if (img.src && !img.src.includes('webp') && !img.src.includes('avif')) {
              unoptimized++;
            }
          });
          
          if (unoptimized > 0) {
            return { passed: false, message: `${unoptimized} imágenes no optimizadas` };
          }
          return { passed: true, message: 'Imágenes optimizadas correctamente' };
        }
      }
    ];

    this.runChecks('Imágenes', checks);
  }

  // Verificar enlaces
  async checkLinks() {
    const checks = [
      {
        name: 'Enlaces Internos',
        test: () => {
          const links = document.querySelectorAll('a[href]');
          let internalLinks = 0;
          let externalLinks = 0;
          
          links.forEach(link => {
            const href = link.href;
            if (href.includes(window.location.hostname)) {
              internalLinks++;
            } else {
              externalLinks++;
            }
          });
          
          if (internalLinks < 3) {
            return { passed: false, message: `Muy pocos enlaces internos (${internalLinks})` };
          }
          return { passed: true, message: `${internalLinks} enlaces internos, ${externalLinks} externos` };
        }
      },
      {
        name: 'Enlaces Rotos',
        test: async () => {
          const links = document.querySelectorAll('a[href]');
          let brokenLinks = 0;
          let checkedLinks = 0;
          
          // Solo verificar enlaces internos para evitar problemas de CORS
          for (let link of links) {
            const href = link.href;
            if (href.includes(window.location.hostname) || href.startsWith('/') || href.startsWith('#')) {
              checkedLinks++;
              try {
                // Para enlaces internos, solo verificar que no sean 404
                if (href.startsWith('#')) {
                  const target = document.querySelector(href);
                  if (!target) brokenLinks++;
                } else if (href.startsWith('/') || href.includes(window.location.hostname)) {
                  const response = await fetch(href, { method: 'HEAD' });
                  if (!response.ok) brokenLinks++;
                }
              } catch (error) {
                // Ignorar errores de CORS o red
                console.warn('No se pudo verificar enlace:', href);
              }
            }
          }
          
          if (checkedLinks === 0) {
            return { passed: true, message: 'No hay enlaces internos para verificar' };
          }
          
          if (brokenLinks > 0) {
            return { passed: false, message: `${brokenLinks} enlaces rotos de ${checkedLinks} verificados` };
          }
          return { passed: true, message: `Todos los ${checkedLinks} enlaces internos funcionan correctamente` };
        }
      }
    ];

    this.runChecks('Enlaces', checks);
  }

  // Verificar enlaces en un documento específico
  async checkLinksInDocument(doc) {
    const checks = [
      {
        name: 'Enlaces Internos',
        test: () => {
          const links = doc.querySelectorAll('a[href]');
          let internalLinks = 0;
          let externalLinks = 0;
          
          links.forEach(link => {
            const href = link.href;
            if (href.includes(window.location.hostname) || href.startsWith('/') || href.startsWith('#')) {
              internalLinks++;
            } else {
              externalLinks++;
            }
          });
          
          if (internalLinks < 3) {
            return { passed: false, message: `Muy pocos enlaces internos (${internalLinks})` };
          }
          return { passed: true, message: `${internalLinks} enlaces internos, ${externalLinks} externos` };
        }
      },
      {
        name: 'Enlaces Rotos',
        test: async () => {
          const links = doc.querySelectorAll('a[href]');
          let brokenLinks = 0;
          let checkedLinks = 0;
          
          // Solo verificar enlaces internos para evitar problemas de CORS
          for (let link of links) {
            const href = link.href;
            if (href.includes(window.location.hostname) || href.startsWith('/') || href.startsWith('#')) {
              checkedLinks++;
              try {
                // Para enlaces internos, solo verificar que no sean 404
                if (href.startsWith('#')) {
                  const target = doc.querySelector(href);
                  if (!target) brokenLinks++;
                } else if (href.startsWith('/') || href.includes(window.location.hostname)) {
                  const response = await fetch(href, { method: 'HEAD' });
                  if (!response.ok) brokenLinks++;
                }
              } catch (error) {
                // Ignorar errores de CORS o red
                console.warn('No se pudo verificar enlace:', href);
              }
            }
          }
          
          if (checkedLinks === 0) {
            return { passed: true, message: 'No hay enlaces internos para verificar' };
          }
          
          if (brokenLinks > 0) {
            return { passed: false, message: `${brokenLinks} enlaces rotos de ${checkedLinks} verificados` };
          }
          return { passed: true, message: `Todos los ${checkedLinks} enlaces internos funcionan correctamente` };
        }
      }
    ];

    this.runChecksInDocument('Enlaces', checks, doc);
  }

  // Verificar rendimiento
  async checkPerformance() {
    const checks = [
      {
        name: 'Tiempo de Carga',
        test: () => {
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
          if (loadTime > 3000) return { passed: false, message: `Tiempo de carga lento: ${loadTime}ms` };
          if (loadTime > 2000) return { passed: false, message: `Tiempo de carga moderado: ${loadTime}ms`, warning: true };
          return { passed: true, message: `Tiempo de carga excelente: ${loadTime}ms` };
        }
      },
      {
        name: 'Tamaño de Página',
        test: () => {
          const pageSize = document.documentElement.outerHTML.length;
          const sizeKB = Math.round(pageSize / 1024);
          
          if (sizeKB > 1000) return { passed: false, message: `Página muy pesada: ${sizeKB}KB` };
          if (sizeKB > 500) return { passed: false, message: `Página pesada: ${sizeKB}KB`, warning: true };
          return { passed: true, message: `Tamaño de página óptimo: ${sizeKB}KB` };
        }
      }
    ];

    this.runChecks('Rendimiento', checks);
  }

  // Verificar accesibilidad
  async checkAccessibility() {
    const checks = [
      {
        name: 'Contraste de Colores',
        test: () => {
          // Verificación básica de contraste
          const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
          let lowContrast = 0;
          
          textElements.forEach(element => {
            const style = window.getComputedStyle(element);
            const color = style.color;
            const backgroundColor = style.backgroundColor;
            
            // Verificación básica (simplificada)
            if (color === backgroundColor) {
              lowContrast++;
            }
          });
          
          if (lowContrast > 0) {
            return { passed: false, message: `${lowContrast} elementos con bajo contraste` };
          }
          return { passed: true, message: 'Contraste de colores adecuado' };
        }
      },
      {
        name: 'Navegación por Teclado',
        test: () => {
          const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
          let withoutTabIndex = 0;
          
          interactiveElements.forEach(element => {
            if (!element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '0') {
              withoutTabIndex++;
            }
          });
          
          if (withoutTabIndex > 0) {
            return { passed: false, message: `${withoutTabIndex} elementos no navegables por teclado` };
          }
          return { passed: true, message: 'Navegación por teclado funcional' };
        }
      }
    ];

    this.runChecks('Accesibilidad', checks);
  }

  // Verificar contenido
  async checkContent() {
    const checks = [
      {
        name: 'Densidad de Keywords',
        test: () => {
          const bodyText = document.body.textContent.toLowerCase();
          const keywords = ['desarrollo web', 'diseño web', 'agencia digital', 'buenos aires', 'argentina'];
          let keywordCount = 0;
          
          keywords.forEach(keyword => {
            const matches = bodyText.match(new RegExp(keyword, 'g'));
            if (matches) keywordCount += matches.length;
          });
          
          if (keywordCount < 5) return { passed: false, message: `Muy pocas keywords (${keywordCount})` };
          if (keywordCount > 20) return { passed: false, message: `Sobreoptimización de keywords (${keywordCount})` };
          return { passed: true, message: `Densidad de keywords adecuada: ${keywordCount}` };
        }
      },
      {
        name: 'Longitud del Contenido',
        test: () => {
          const bodyText = document.body.textContent.trim();
          const wordCount = bodyText.split(/\s+/).length;
          
          if (wordCount < 300) return { passed: false, message: `Contenido muy corto: ${wordCount} palabras` };
          if (wordCount > 2000) return { passed: false, message: `Contenido muy largo: ${wordCount} palabras` };
          return { passed: true, message: `Longitud de contenido adecuada: ${wordCount} palabras` };
        }
      }
    ];

    this.runChecks('Contenido', checks);
  }

  // Verificar aspectos técnicos
  async checkTechnical() {
    const checks = [
      {
        name: 'HTTPS',
        test: () => {
          if (location.protocol !== 'https:') {
            return { passed: false, message: 'Sitio no usa HTTPS' };
          }
          return { passed: true, message: 'HTTPS configurado correctamente' };
        }
      },
      {
        name: 'Mobile Friendly',
        test: () => {
          const viewport = document.querySelector('meta[name="viewport"]');
          if (!viewport) return { passed: false, message: 'No se encontró meta viewport' };
          return { passed: true, message: 'Meta viewport configurado' };
        }
      },
      {
        name: 'Canonical URL',
        test: () => {
          const canonical = document.querySelector('link[rel="canonical"]');
          if (!canonical) return { passed: false, message: 'No se encontró canonical URL' };
          return { passed: true, message: 'Canonical URL configurado' };
        }
      }
    ];

    this.runChecks('Aspectos Técnicos', checks);
  }

  // Ejecutar checks de una categoría
  runChecks(category, checks) {
    checks.forEach(check => {
      try {
        const result = check.test();
        this.results.totalChecks++;
        
        if (result.passed) {
          this.results.passedChecks++;
        } else if (result.warning) {
          this.results.warnings++;
        } else {
          this.results.failedChecks++;
        }
        
        this.results.details.push({
          category,
          check: check.name,
          passed: result.passed,
          warning: result.warning || false,
          message: result.message
        });
      } catch (error) {
        this.results.totalChecks++;
        this.results.failedChecks++;
        this.results.details.push({
          category,
          check: check.name,
          passed: false,
          warning: false,
          message: `Error: ${error.message}`
        });
      }
    });
  }

  // Calcular puntuación SEO
  calculateScore() {
    const totalPossible = this.results.totalChecks;
    const passed = this.results.passedChecks;
    const warnings = this.results.warnings;
    
    this.results.score = Math.round(((passed + (warnings * 0.5)) / totalPossible) * 100);
  }

  // Generar reporte
  generateReport() {
    const report = {
      ...this.results,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      summary: this.generateSummary()
    };
    
    return report;
  }

  // Generar resumen
  generateSummary() {
    const score = this.results.score;
    let grade = 'F';
    let status = 'Crítico';
    
    if (score >= 90) {
      grade = 'A+';
      status = 'Excelente';
    } else if (score >= 80) {
      grade = 'A';
      status = 'Muy Bueno';
    } else if (score >= 70) {
      grade = 'B';
      status = 'Bueno';
    } else if (score >= 60) {
      grade = 'C';
      status = 'Regular';
    } else if (score >= 50) {
      grade = 'D';
      status = 'Necesita Mejoras';
    }
    
    return {
      grade,
      status,
      score,
      totalChecks: this.results.totalChecks,
      passed: this.results.passedChecks,
      failed: this.results.failedChecks,
      warnings: this.results.warnings
    };
  }
}

// Función para ejecutar el test SEO
export const runSEOTest = async () => {
  const tester = new SEOTester();
  return await tester.runFullSEOTest();
};
