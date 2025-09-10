const fs = require('fs');
const path = require('path');

function analyzeKeywordDensity() {
  console.log('🔍 ANÁLISIS DE DENSIDAD DE KEYWORDS');
  console.log('==================================\n');

  // Keywords principales que están causando sobreoptimización
  const targetKeywords = [
    'desarrollo', 'diseño', 'web', 'gráfico', 'software', 'creativo', 
    'marca', 'empresa', 'servicios', 'programación', 'página', 'sitio',
    'digital', 'tecnológico', 'profesional', 'solución', 'plataforma'
  ];

  // Archivos a analizar
  const filesToAnalyze = [
    'app/pages/Home/index.js',
    'app/pages/Desarrollo/index.js',
    'app/pages/Especialidades/index.js',
    'app/pages/PCompeticion/index.js',
    'app/pages/Contacto/index.js',
    'app/pages/Diseño/index.js',
    'app/pages/Equipo/index.js'
  ];

  let totalKeywordCount = 0;
  const keywordAnalysis = {};

  console.log('📊 ANÁLISIS POR ARCHIVO:');
  console.log('========================\n');

  filesToAnalyze.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      console.log(`📁 ${fileName}:`);
      console.log('─'.repeat(50));
      
      const fileKeywordCount = {};
      let fileTotal = 0;

      targetKeywords.forEach(keyword => {
        const regex = new RegExp(keyword, 'gi');
        const matches = content.match(regex);
        const count = matches ? matches.length : 0;
        
        if (count > 0) {
          fileKeywordCount[keyword] = count;
          fileTotal += count;
          
          if (count > 2) {
            console.log(`  ⚠️  "${keyword}": ${count} veces (SOBREOPTIMIZADO)`);
          } else {
            console.log(`  ✅ "${keyword}": ${count} veces`);
          }
        }
      });

      console.log(`  📊 Total keywords en archivo: ${fileTotal}`);
      console.log('');

      totalKeywordCount += fileTotal;
      keywordAnalysis[fileName] = fileKeywordCount;

    } catch (error) {
      console.log(`❌ Error leyendo ${filePath}: ${error.message}`);
    }
  });

  console.log('📊 RESUMEN GENERAL:');
  console.log('==================');
  console.log(`Total de keywords detectadas: ${totalKeywordCount}`);
  console.log(`Objetivo SEO: < 20 keywords`);
  console.log(`Estado: ${totalKeywordCount > 20 ? '❌ SOBREOPTIMIZADO' : '✅ OPTIMIZADO'}`);
  console.log('');

  console.log('🔍 KEYWORDS MÁS PROBLEMÁTICAS:');
  console.log('==============================');
  
  const globalKeywordCount = {};
  Object.values(keywordAnalysis).forEach(fileKeywords => {
    Object.entries(fileKeywords).forEach(([keyword, count]) => {
      globalKeywordCount[keyword] = (globalKeywordCount[keyword] || 0) + count;
    });
  });

  const sortedKeywords = Object.entries(globalKeywordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);

  sortedKeywords.forEach(([keyword, count], index) => {
    const status = count > 5 ? '❌ CRÍTICO' : count > 3 ? '⚠️ ALTO' : '✅ OK';
    console.log(`${index + 1}. "${keyword}": ${count} veces ${status}`);
  });

  console.log('\n🔧 SOLUCIONES RECOMENDADAS:');
  console.log('===========================');
  console.log('1. **Sinónimos:** Reemplazar keywords repetidas con sinónimos');
  console.log('2. **Variaciones:** Usar diferentes formas de expresar lo mismo');
  console.log('3. **Eliminación:** Quitar keywords innecesarias');
  console.log('4. **Reestructuración:** Cambiar la estructura de las frases');
  console.log('');

  console.log('💡 EJEMPLOS DE OPTIMIZACIÓN:');
  console.log('============================');
  console.log('❌ "desarrollo web profesional" → ✅ "creación de sitios web"');
  console.log('❌ "diseño gráfico creativo" → ✅ "identidad visual innovadora"');
  console.log('❌ "empresa tecnológica" → ✅ "organización digital"');
  console.log('❌ "servicios de programación" → ✅ "soluciones de código"');
  console.log('❌ "marca profesional" → ✅ "identidad corporativa"');
  console.log('');

  console.log('🎯 OBJETIVO:');
  console.log('============');
  console.log('• Reducir de 33 keywords a < 20');
  console.log('• Mantener el significado y la calidad del contenido');
  console.log('• Mejorar la legibilidad');
  console.log('• Evitar la sobreoptimización SEO');

  return {
    totalKeywords: totalKeywordCount,
    targetKeywords: targetKeywords,
    analysis: keywordAnalysis,
    needsOptimization: totalKeywordCount > 20
  };
}

// Ejecutar análisis
analyzeKeywordDensity();
