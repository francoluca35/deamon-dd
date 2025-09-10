// Script para ejecutar test SEO desde la consola del navegador
// Uso: Copia y pega este código en la consola del navegador

(function() {
  console.log('🔍 Iniciando Test SEO de Deamon DD...');
  
  // Función para ejecutar el test SEO
  async function runSEOTest() {
    const results = {
      score: 0,
      totalChecks: 0,
      passedChecks: 0,
      failedChecks: 0,
      warnings: 0,
      details: []
    };

    // Test de Metadatos
    console.log('📋 Verificando metadatos...');
    
    // Title Tag
    const title = document.querySelector('title');
    if (title) {
      results.totalChecks++;
      if (title.textContent.length >= 30 && title.textContent.length <= 60) {
        results.passedChecks++;
        results.details.push({ category: 'Metadatos', check: 'Title Tag', passed: true, message: `Title: "${title.textContent}"` });
      } else {
        results.failedChecks++;
        results.details.push({ category: 'Metadatos', check: 'Title Tag', passed: false, message: `Title ${title.textContent.length < 30 ? 'muy corto' : 'muy largo'}: "${title.textContent}"` });
      }
    } else {
      results.totalChecks++;
      results.failedChecks++;
      results.details.push({ category: 'Metadatos', check: 'Title Tag', passed: false, message: 'No se encontró title tag' });
    }

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      results.totalChecks++;
      if (metaDesc.content.length >= 120 && metaDesc.content.length <= 160) {
        results.passedChecks++;
        results.details.push({ category: 'Metadatos', check: 'Meta Description', passed: true, message: `Meta description: "${metaDesc.content}"` });
      } else {
        results.failedChecks++;
        results.details.push({ category: 'Metadatos', check: 'Meta Description', passed: false, message: `Meta description ${metaDesc.content.length < 120 ? 'muy corta' : 'muy larga'}: "${metaDesc.content}"` });
      }
    } else {
      results.totalChecks++;
      results.failedChecks++;
      results.details.push({ category: 'Metadatos', check: 'Meta Description', passed: false, message: 'No se encontró meta description' });
    }

    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      results.totalChecks++;
      const keywords = metaKeywords.content.split(',').map(k => k.trim());
      if (keywords.length >= 5 && keywords.length <= 15) {
        results.passedChecks++;
        results.details.push({ category: 'Metadatos', check: 'Meta Keywords', passed: true, message: `Keywords: ${keywords.length} encontradas` });
      } else {
        results.failedChecks++;
        results.details.push({ category: 'Metadatos', check: 'Meta Keywords', passed: false, message: `${keywords.length < 5 ? 'Muy pocas' : 'Demasiadas'} keywords: ${keywords.length}` });
      }
    } else {
      results.totalChecks++;
      results.failedChecks++;
      results.details.push({ category: 'Metadatos', check: 'Meta Keywords', passed: false, message: 'No se encontró meta keywords' });
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    results.totalChecks++;
    if (ogTitle && ogDesc && ogImage) {
      results.passedChecks++;
      results.details.push({ category: 'Metadatos', check: 'Open Graph', passed: true, message: 'Open Graph configurado correctamente' });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Metadatos', check: 'Open Graph', passed: false, message: 'Faltan tags de Open Graph' });
    }

    // Twitter Cards
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    
    results.totalChecks++;
    if (twitterCard && twitterTitle && twitterDesc) {
      results.passedChecks++;
      results.details.push({ category: 'Metadatos', check: 'Twitter Cards', passed: true, message: 'Twitter Cards configurado correctamente' });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Metadatos', check: 'Twitter Cards', passed: false, message: 'Faltan tags de Twitter Cards' });
    }

    // Test de Headings
    console.log('📝 Verificando estructura de headings...');
    
    const h1s = document.querySelectorAll('h1');
    results.totalChecks++;
    if (h1s.length === 1) {
      results.passedChecks++;
      results.details.push({ category: 'Headings', check: 'H1 Tag', passed: true, message: `H1: "${h1s[0].textContent}"` });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Headings', check: 'H1 Tag', passed: false, message: `${h1s.length === 0 ? 'No se encontró H1' : `Múltiples H1 encontrados (${h1s.length})`}` });
    }

    // Test de Imágenes
    console.log('🖼️ Verificando imágenes...');
    
    const images = document.querySelectorAll('img');
    let withoutAlt = 0;
    images.forEach(img => {
      if (!img.alt || img.alt.trim() === '') {
        withoutAlt++;
      }
    });
    
    results.totalChecks++;
    if (withoutAlt === 0) {
      results.passedChecks++;
      results.details.push({ category: 'Imágenes', check: 'Alt Text', passed: true, message: `Todas las ${images.length} imágenes tienen alt text` });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Imágenes', check: 'Alt Text', passed: false, message: `${withoutAlt} imágenes sin alt text` });
    }

    // Test de Enlaces
    console.log('🔗 Verificando enlaces...');
    
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
    
    results.totalChecks++;
    if (internalLinks >= 3) {
      results.passedChecks++;
      results.details.push({ category: 'Enlaces', check: 'Enlaces Internos', passed: true, message: `${internalLinks} enlaces internos, ${externalLinks} externos` });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Enlaces', check: 'Enlaces Internos', passed: false, message: `Muy pocos enlaces internos (${internalLinks})` });
    }

    // Test de Rendimiento
    console.log('⚡ Verificando rendimiento...');
    
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    results.totalChecks++;
    if (loadTime <= 2000) {
      results.passedChecks++;
      results.details.push({ category: 'Rendimiento', check: 'Tiempo de Carga', passed: true, message: `Tiempo de carga excelente: ${loadTime}ms` });
    } else if (loadTime <= 3000) {
      results.warnings++;
      results.details.push({ category: 'Rendimiento', check: 'Tiempo de Carga', passed: false, warning: true, message: `Tiempo de carga moderado: ${loadTime}ms` });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Rendimiento', check: 'Tiempo de Carga', passed: false, message: `Tiempo de carga lento: ${loadTime}ms` });
    }

    // Test de Contenido
    console.log('📄 Verificando contenido...');
    
    const bodyText = document.body.textContent.toLowerCase();
    const keywords = ['desarrollo web', 'diseño web', 'agencia digital', 'buenos aires', 'argentina'];
    let keywordCount = 0;
    
    keywords.forEach(keyword => {
      const matches = bodyText.match(new RegExp(keyword, 'g'));
      if (matches) keywordCount += matches.length;
    });
    
    results.totalChecks++;
    if (keywordCount >= 5 && keywordCount <= 20) {
      results.passedChecks++;
      results.details.push({ category: 'Contenido', check: 'Densidad de Keywords', passed: true, message: `Densidad de keywords adecuada: ${keywordCount}` });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Contenido', check: 'Densidad de Keywords', passed: false, message: `${keywordCount < 5 ? 'Muy pocas' : 'Sobreoptimización de'} keywords: ${keywordCount}` });
    }

    // Test Técnico
    console.log('🔧 Verificando aspectos técnicos...');
    
    // HTTPS
    results.totalChecks++;
    if (location.protocol === 'https:') {
      results.passedChecks++;
      results.details.push({ category: 'Técnico', check: 'HTTPS', passed: true, message: 'HTTPS configurado correctamente' });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Técnico', check: 'HTTPS', passed: false, message: 'Sitio no usa HTTPS' });
    }

    // Mobile Friendly
    const viewport = document.querySelector('meta[name="viewport"]');
    results.totalChecks++;
    if (viewport) {
      results.passedChecks++;
      results.details.push({ category: 'Técnico', check: 'Mobile Friendly', passed: true, message: 'Meta viewport configurado' });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Técnico', check: 'Mobile Friendly', passed: false, message: 'No se encontró meta viewport' });
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    results.totalChecks++;
    if (canonical) {
      results.passedChecks++;
      results.details.push({ category: 'Técnico', check: 'Canonical URL', passed: true, message: 'Canonical URL configurado' });
    } else {
      results.failedChecks++;
      results.details.push({ category: 'Técnico', check: 'Canonical URL', passed: false, message: 'No se encontró canonical URL' });
    }

    // Calcular puntuación
    results.score = Math.round(((results.passedChecks + (results.warnings * 0.5)) / results.totalChecks) * 100);

    return results;
  }

  // Ejecutar el test
  runSEOTest().then(results => {
    console.log('\n🎯 RESULTADOS DEL TEST SEO:');
    console.log('========================');
    console.log(`📊 Puntuación: ${results.score}/100`);
    console.log(`✅ Exitosos: ${results.passedChecks}`);
    console.log(`❌ Fallidos: ${results.failedChecks}`);
    console.log(`⚠️ Advertencias: ${results.warnings}`);
    console.log(`📋 Total Checks: ${results.totalChecks}`);
    
    console.log('\n📋 DETALLES POR CATEGORÍA:');
    console.log('========================');
    
    const categories = [...new Set(results.details.map(d => d.category))];
    categories.forEach(category => {
      console.log(`\n🔸 ${category}:`);
      results.details
        .filter(d => d.category === category)
        .forEach(detail => {
          const icon = detail.passed ? '✅' : (detail.warning ? '⚠️' : '❌');
          console.log(`  ${icon} ${detail.check}: ${detail.message}`);
        });
    });

    console.log('\n💡 RECOMENDACIONES PRINCIPALES:');
    console.log('==============================');
    results.details
      .filter(d => !d.passed && !d.warning)
      .slice(0, 5)
      .forEach((detail, index) => {
        console.log(`${index + 1}. ${detail.check}: ${detail.message}`);
      });

    console.log('\n🎉 Test SEO completado!');
  }).catch(error => {
    console.error('❌ Error al ejecutar el test SEO:', error);
  });
})();
