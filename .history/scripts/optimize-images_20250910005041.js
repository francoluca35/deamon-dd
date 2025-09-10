const fs = require('fs');
const path = require('path');

// Lista de imágenes que necesitan optimización
const imagesToOptimize = [
  'public/assets/fondo-dw.jpg',
  'public/assets/fondo.jpg', 
  'public/assets/joa.jpg',
  'public/assets/logo-pagina.jpg',
  'public/assets/software.jpg',
  'public/assets/video.jpg',
  'public/assets/grafic.jpg',
  'public/assets/diseño-web.jpg',
  'public/assets/GVC.jpeg'
];

console.log('🖼️ Imágenes que necesitan optimización:');
console.log('=====================================');

imagesToOptimize.forEach((imagePath, index) => {
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`${index + 1}. ${path.basename(imagePath)}: ${sizeKB}KB`);
  } else {
    console.log(`${index + 1}. ${path.basename(imagePath)}: NO ENCONTRADA`);
  }
});

console.log('\n📋 Instrucciones para optimizar:');
console.log('================================');
console.log('1. Ve a https://tinypng.com/ o https://compressor.io/');
console.log('2. Sube cada imagen y descárgala optimizada');
console.log('3. Reemplaza las imágenes originales con las optimizadas');
console.log('4. Objetivo: Reducir cada imagen a menos de 100KB');

console.log('\n🎯 Tamaños objetivo:');
console.log('===================');
console.log('- fondo-dw.jpg: De 925KB a <100KB');
console.log('- fondo.jpg: De 327KB a <100KB');
console.log('- joa.jpg: De 553KB a <100KB');
console.log('- logo-pagina.jpg: De 330KB a <100KB');
console.log('- software.jpg: De 316KB a <100KB');
console.log('- video.jpg: De 203KB a <100KB');
console.log('- grafic.jpg: De 173KB a <100KB');
console.log('- diseño-web.jpg: De 81KB a <50KB');
console.log('- GVC.jpeg: Optimizar a <100KB');
