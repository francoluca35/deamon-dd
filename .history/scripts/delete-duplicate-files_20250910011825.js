const fs = require('fs');
const path = require('path');

// Archivos duplicados que necesitan ser eliminados
const duplicateFiles = [
  'public/assets/fondo_optimized.png',
  'public/assets/fondodesarrollo_optimized.png',
  'public/assets/Proyectos/app-web/app-jla-3_optimized.png',
  'public/assets/Proyectos/app-web/app-jla-4_optimized.png',
  'public/assets/Proyectos/app-web/caruso-app-2_optimized.png',
  'public/assets/fondo-contact_optimized.png',
  'public/assets/Proyectos/app-web/yael-app_optimized.png',
  'public/assets/Proyectos/app-web/jla-web-1_optimized.png',
  'public/assets/Proyectos/app-web/caruso-app_optimized.png'
];

function deleteDuplicateFiles() {
  console.log('🗑️ ELIMINANDO ARCHIVOS DUPLICADOS');
  console.log('==================================\n');

  let totalSize = 0;
  let deletedCount = 0;
  let notFoundCount = 0;

  console.log('📋 PROCESO DE ELIMINACIÓN:');
  console.log('==========================\n');

  duplicateFiles.forEach((filePath, index) => {
    const fileName = path.basename(filePath);
    
    if (fs.existsSync(filePath)) {
      try {
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        const sizeMB = Math.round(stats.size / 1024 / 1024 * 10) / 10;
        totalSize += stats.size;
        
        fs.unlinkSync(filePath);
        deletedCount++;
        
        console.log(`✅ ${index + 1}. ${fileName} (${sizeKB}KB) - ELIMINADO`);
      } catch (error) {
        console.log(`❌ ${index + 1}. ${fileName} - ERROR: ${error.message}`);
      }
    } else {
      notFoundCount++;
      console.log(`⚠️  ${index + 1}. ${fileName} - NO ENCONTRADO`);
    }
  });

  const totalSizeKB = Math.round(totalSize / 1024);
  const totalSizeMB = Math.round(totalSizeKB / 1024 * 10) / 10;

  console.log('\n📈 RESUMEN DE ELIMINACIÓN:');
  console.log('==========================');
  console.log(`Total de archivos procesados: ${duplicateFiles.length}`);
  console.log(`Archivos eliminados: ${deletedCount}`);
  console.log(`Archivos no encontrados: ${notFoundCount}`);
  console.log(`Espacio liberado: ${totalSizeKB}KB (${totalSizeMB}MB)`);

  console.log('\n🎯 BENEFICIOS:');
  console.log('==============');
  console.log('✅ Proyecto más liviano');
  console.log('✅ Deploy más rápido');
  console.log('✅ Menos archivos que mantener');
  console.log('✅ Mejor organización del proyecto');

  console.log('\n📋 PRÓXIMOS PASOS:');
  console.log('==================');
  console.log('1. Optimiza las imágenes originales con TinyPNG');
  console.log('2. Verifica que la carpeta assets pese ~10MB');
  console.log('3. Ejecuta el test SEO para verificar la mejora');

  return { deletedCount, totalSizeKB, notFoundCount };
}

// Ejecutar eliminación
deleteDuplicateFiles();
