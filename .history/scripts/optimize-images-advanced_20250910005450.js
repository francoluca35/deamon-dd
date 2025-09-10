const fs = require('fs');
const path = require('path');

// Configuración de optimización
const OPTIMIZATION_CONFIG = {
  maxSizeKB: 100,
  highPriorityImages: [
    'fondo-dw.jpg',
    'GVC.jpeg', 
    'joa.jpg'
  ],
  mediumPriorityImages: [
    'fondo.jpg',
    'logo-pagina.jpg',
    'software.jpg',
    'video.jpg',
    'grafic.jpg'
  ],
  lowPriorityImages: [
    'diseño-web.jpg'
  ]
};

function getImageSize(imagePath) {
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    return Math.round(stats.size / 1024);
  }
  return 0;
}

function generateOptimizationReport() {
  console.log('🖼️ REPORTE DE OPTIMIZACIÓN DE IMÁGENES');
  console.log('=====================================\n');

  const allImages = [
    ...OPTIMIZATION_CONFIG.highPriorityImages,
    ...OPTIMIZATION_CONFIG.mediumPriorityImages,
    ...OPTIMIZATION_CONFIG.lowPriorityImages
  ];

  let totalSizeBefore = 0;
  let totalSizeAfter = 0;
  let imagesNeedingOptimization = 0;

  console.log('📊 ANÁLISIS DETALLADO:');
  console.log('=====================\n');

  // Imágenes de alta prioridad
  console.log('🔴 ALTA PRIORIDAD:');
  OPTIMIZATION_CONFIG.highPriorityImages.forEach((imageName, index) => {
    const imagePath = `public/assets/${imageName}`;
    const currentSize = getImageSize(imagePath);
    const targetSize = OPTIMIZATION_CONFIG.maxSizeKB;
    const reduction = Math.round(((currentSize - targetSize) / currentSize) * 100);
    
    totalSizeBefore += currentSize;
    totalSizeAfter += targetSize;
    
    if (currentSize > targetSize) {
      imagesNeedingOptimization++;
      console.log(`  ${index + 1}. ${imageName}`);
      console.log(`     Actual: ${currentSize}KB → Objetivo: ${targetSize}KB (${reduction}% reducción)`);
    }
  });

  // Imágenes de media prioridad
  console.log('\n🟡 MEDIA PRIORIDAD:');
  OPTIMIZATION_CONFIG.mediumPriorityImages.forEach((imageName, index) => {
    const imagePath = `public/assets/${imageName}`;
    const currentSize = getImageSize(imagePath);
    const targetSize = OPTIMIZATION_CONFIG.maxSizeKB;
    const reduction = Math.round(((currentSize - targetSize) / currentSize) * 100);
    
    totalSizeBefore += currentSize;
    totalSizeAfter += targetSize;
    
    if (currentSize > targetSize) {
      imagesNeedingOptimization++;
      console.log(`  ${index + 1}. ${imageName}`);
      console.log(`     Actual: ${currentSize}KB → Objetivo: ${targetSize}KB (${reduction}% reducción)`);
    }
  });

  // Imágenes de baja prioridad
  console.log('\n🟢 BAJA PRIORIDAD:');
  OPTIMIZATION_CONFIG.lowPriorityImages.forEach((imageName, index) => {
    const imagePath = `public/assets/${imageName}`;
    const currentSize = getImageSize(imagePath);
    const targetSize = 50; // Más estricto para baja prioridad
    const reduction = Math.round(((currentSize - targetSize) / currentSize) * 100);
    
    totalSizeBefore += currentSize;
    totalSizeAfter += targetSize;
    
    if (currentSize > targetSize) {
      imagesNeedingOptimization++;
      console.log(`  ${index + 1}. ${imageName}`);
      console.log(`     Actual: ${currentSize}KB → Objetivo: ${targetSize}KB (${reduction}% reducción)`);
    }
  });

  // Resumen
  console.log('\n📈 RESUMEN:');
  console.log('===========');
  console.log(`Total de imágenes: ${allImages.length}`);
  console.log(`Imágenes que necesitan optimización: ${imagesNeedingOptimization}`);
  console.log(`Tamaño total actual: ${totalSizeBefore}KB`);
  console.log(`Tamaño total objetivo: ${totalSizeAfter}KB`);
  console.log(`Reducción total: ${Math.round(((totalSizeBefore - totalSizeAfter) / totalSizeBefore) * 100)}%`);
  console.log(`Ahorro de espacio: ${totalSizeBefore - totalSizeAfter}KB`);

  // Impacto en SEO
  console.log('\n🎯 IMPACTO EN SEO:');
  console.log('=================');
  if (imagesNeedingOptimization === 0) {
    console.log('✅ Todas las imágenes están optimizadas');
    console.log('✅ +5-7 puntos en el test SEO');
    console.log('✅ Tiempo de carga mejorado en 60-80%');
  } else {
    console.log(`❌ ${imagesNeedingOptimization} imágenes necesitan optimización`);
    console.log('❌ -5-7 puntos en el test SEO');
    console.log('❌ Tiempo de carga lento');
  }

  // Herramientas recomendadas
  console.log('\n🛠️ HERRAMIENTAS RECOMENDADAS:');
  console.log('=============================');
  console.log('1. TinyPNG: https://tinypng.com/ (Recomendado)');
  console.log('2. Compressor.io: https://compressor.io/');
  console.log('3. Squoosh: https://squoosh.app/');
  
  console.log('\n📋 PRÓXIMOS PASOS:');
  console.log('==================');
  console.log('1. Optimiza las imágenes usando las herramientas recomendadas');
  console.log('2. Reemplaza las imágenes en public/assets/');
  console.log('3. Ejecuta este script nuevamente para verificar');
  console.log('4. Ejecuta el test SEO para ver la mejora');
}

// Ejecutar el reporte
generateOptimizationReport();
