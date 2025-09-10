const fs = require('fs');
const path = require('path');

// Función para buscar archivos recursivamente
function findFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Función para buscar referencias a imágenes en archivos
function findImageReferences(imageName, searchDirs) {
  const references = [];
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html', '.md'];
  
  searchDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = findFiles(dir, extensions);
      
      files.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes(imageName)) {
            references.push(file);
          }
        } catch (error) {
          // Ignorar errores de lectura
        }
      });
    }
  });
  
  return references;
}

function analyzeUnusedImages() {
  console.log('🔍 ANÁLISIS DE IMÁGENES NO UTILIZADAS');
  console.log('=====================================\n');

  const assetsDir = 'public/assets';
  const searchDirs = ['app', 'public', 'src'];
  
  // Obtener todas las imágenes
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  const allImages = findFiles(assetsDir, imageExtensions);
  
  console.log(`📊 Total de imágenes encontradas: ${allImages.length}\n`);
  
  const usedImages = [];
  const unusedImages = [];
  
  allImages.forEach(imagePath => {
    const imageName = path.basename(imagePath);
    const relativePath = imagePath.replace(/\\/g, '/');
    
    console.log(`🔍 Analizando: ${imageName}...`);
    
    const references = findImageReferences(imageName, searchDirs);
    
    if (references.length > 0) {
      usedImages.push({
        name: imageName,
        path: relativePath,
        references: references.length,
        files: references
      });
      console.log(`  ✅ USADA (${references.length} referencias)`);
    } else {
      // Verificar si se usa con ruta relativa
      const relativeName = relativePath.replace('public/', '/');
      const relativeReferences = findImageReferences(relativeName, searchDirs);
      
      if (relativeReferences.length > 0) {
        usedImages.push({
          name: imageName,
          path: relativePath,
          references: relativeReferences.length,
          files: relativeReferences
        });
        console.log(`  ✅ USADA con ruta relativa (${relativeReferences.length} referencias)`);
      } else {
        unusedImages.push({
          name: imageName,
          path: relativePath,
          size: fs.statSync(imagePath).size
        });
        console.log(`  ❌ NO USADA`);
      }
    }
  });
  
  console.log('\n📈 RESUMEN:');
  console.log('===========');
  console.log(`Total de imágenes: ${allImages.length}`);
  console.log(`Imágenes usadas: ${usedImages.length}`);
  console.log(`Imágenes no usadas: ${unusedImages.length}`);
  
  if (unusedImages.length > 0) {
    const totalUnusedSize = unusedImages.reduce((sum, img) => sum + img.size, 0);
    const totalUnusedSizeKB = Math.round(totalUnusedSize / 1024);
    
    console.log(`\n🗑️ IMÁGENES NO UTILIZADAS (${totalUnusedSizeKB}KB):`);
    console.log('==========================================');
    
    unusedImages.forEach((img, index) => {
      const sizeKB = Math.round(img.size / 1024);
      console.log(`${index + 1}. ${img.name} (${sizeKB}KB)`);
    });
    
    console.log(`\n💾 ESPACIO QUE SE PUEDE LIBERAR: ${totalUnusedSizeKB}KB`);
    
    console.log('\n📋 COMANDOS PARA ELIMINAR:');
    console.log('==========================');
    unusedImages.forEach(img => {
      console.log(`del "${img.path}"`);
    });
    
    console.log('\n⚠️  ADVERTENCIA:');
    console.log('===============');
    console.log('1. Revisa manualmente antes de eliminar');
    console.log('2. Haz una copia de seguridad');
    console.log('3. Verifica que no se usen en archivos no analizados');
    
  } else {
    console.log('\n✅ ¡Todas las imágenes están siendo utilizadas!');
  }
  
  return { usedImages, unusedImages };
}

// Ejecutar análisis
analyzeUnusedImages();
