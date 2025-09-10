const fs = require('fs');
const path = require('path');

// Lista de imágenes no utilizadas (verificadas manualmente)
const unusedImages = [
  'public/assets/background-loader.png',
  'public/assets/deamon-2-N.png',
  'public/assets/dessing.png',
  'public/assets/equipo/joaco.jpg',
  'public/assets/equipo/logo-equipo.png',
  'public/assets/equipo/tobi.jpg',
  'public/assets/equipo/toto.png',
  'public/assets/firma.png',
  'public/assets/firma2.png',
  'public/assets/fondo-contacto.png',
  'public/assets/joa.jpg',
  'public/assets/Logo-D-Mobile.png',
  'public/assets/mobile-fondo.png',
  'public/assets/pages.png',
  'public/assets/Proyectos/app-clima.jpg',
  'public/assets/Proyectos/app-web/app-clima.jpg',
  'public/assets/Proyectos/app-web/jla.jpg',
  'public/assets/Proyectos/app-web/panel.jpg',
  'public/assets/Proyectos/app-web/portfolio.jpg',
  'public/assets/Proyectos/app-web/stock.jpg',
  'public/assets/Proyectos/bioapp.jpg',
  'public/assets/Proyectos/jla.jpg',
  'public/assets/Proyectos/panel.jpg',
  'public/assets/Proyectos/perumar.jpg',
  'public/assets/Proyectos/portfolio.jpg',
  'public/assets/Proyectos/stock.jpg',
  'public/assets/video.jpg'
];

function deleteUnusedImages() {
  console.log('🗑️ ELIMINANDO IMÁGENES NO UTILIZADAS');
  console.log('====================================\n');

  let totalSize = 0;
  let deletedCount = 0;
  let notFoundCount = 0;

  console.log('📋 PROCESO DE ELIMINACIÓN:');
  console.log('==========================\n');

  unusedImages.forEach((imagePath, index) => {
    const fileName = path.basename(imagePath);
    
    if (fs.existsSync(imagePath)) {
      try {
        const stats = fs.statSync(imagePath);
        const sizeKB = Math.round(stats.size / 1024);
        totalSize += stats.size;
        
        fs.unlinkSync(imagePath);
        deletedCount++;
        
        console.log(`✅ ${index + 1}. ${fileName} (${sizeKB}KB) - ELIMINADA`);
      } catch (error) {
        console.log(`❌ ${index + 1}. ${fileName} - ERROR: ${error.message}`);
      }
    } else {
      notFoundCount++;
      console.log(`⚠️  ${index + 1}. ${fileName} - NO ENCONTRADA`);
    }
  });

  const totalSizeKB = Math.round(totalSize / 1024);
  const totalSizeMB = Math.round(totalSizeKB / 1024 * 10) / 10;

  console.log('\n📈 RESUMEN DE ELIMINACIÓN:');
  console.log('==========================');
  console.log(`Total de archivos procesados: ${unusedImages.length}`);
  console.log(`Archivos eliminados: ${deletedCount}`);
  console.log(`Archivos no encontrados: ${notFoundCount}`);
  console.log(`Espacio liberado: ${totalSizeKB}KB (${totalSizeMB}MB)`);

  console.log('\n🎯 BENEFICIOS:');
  console.log('==============');
  console.log('✅ Proyecto más liviano');
  console.log('✅ Deploy más rápido');
  console.log('✅ Menos archivos que mantener');
  console.log('✅ Mejor organización del proyecto');

  console.log('\n📋 VERIFICACIÓN:');
  console.log('================');
  console.log('1. Ejecuta el test SEO para verificar que todo funciona');
  console.log('2. Revisa que no haya errores en la consola');
  console.log('3. Verifica que todas las imágenes importantes se muestren correctamente');

  return { deletedCount, totalSizeKB, notFoundCount };
}

// Ejecutar eliminación
deleteUnusedImages();
