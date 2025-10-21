const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configurar Cloudinary
cloudinary.config({
  cloud_name: 'tu-cloud-name', // Reemplazar con tu cloud name
  api_key: 'tu-api-key', // Reemplazar con tu API key
  api_secret: 'tu-api-secret' // Reemplazar con tu API secret
});

// Mapeo de imágenes por sección
const imageSections = {
  // Sección Home/Hero
  home: [
    'assets/fondoprincipal.jpg',
    'assets/deamon-icon-B-s.avif',
    'assets/deamon-icon-B.avif',
    'assets/deamon-icon-B-desarrollo.avif',
    'assets/deamon-2-N-T.avif',
    'assets/Logo-equipo-B.avif',
    'assets/whatsapp.avif',
    'assets/imagen-ilu.avif',
    'assets/grafic.avif',
    'assets/fondoweb.avif',
    'assets/fondo1.avif',
    'assets/fondo-contact.avif',
    'assets/fondo-const.jpg',
    'assets/firma3.avif'
  ],

  // Sección Equipo
  equipo: [
    'assets/equipo/franco.png',
    'assets/equipo/juan.png',
    'assets/equipo/marcos.png',
    'assets/equipo/marcos.avif',
    'assets/equipo/mateo-rendon.avif',
    'assets/equipo/lucas-viale.avif',
    'assets/equipo/yo-franco.avif',
    'assets/equipo/Logo-equipo-B.avif'
  ],

  // Sección Proyectos/Desarrollo
  proyectos: [
    'assets/Proyectos/tec.png',
    'assets/Proyectos/maurello1.png',
    'assets/Proyectos/carusoweb1.png',
    'assets/Proyectos/arqui2.png',
    'assets/Proyectos/quick2.jpg',
    'assets/Proyectos/perumarapp.jpg',
    'assets/Proyectos/maureloapp.jpg',
    'assets/Proyectos/jlaapp2.jpg',
    'assets/Proyectos/yael-app.avif',
    'assets/Proyectos/perumar.avif',
    'assets/Proyectos/maurello-app.avif',
    'assets/Proyectos/maurello-web.avif',
    'assets/Proyectos/JLA.avif',
    'assets/Proyectos/app-jla.avif'
  ],

  // Sección Marketing
  marketing: [
    'assets/marketing/arquimec.jpg',
    'assets/marketing/arquimec-logo.webp'
  ],

  // Sección Branding
  branding: [
    'assets/branding/asfixia.png',
    'assets/branding/bicico.png',
    'assets/branding/bioma.png',
    'assets/branding/citadino.png',
    'assets/branding/iruma.png'
  ],

  // Sección Diseño
  diseño: [
    'assets/diseno/tc2024.avif',
    'assets/diseño-web.avif'
  ],

  // Sección Contacto
  contacto: [
    'assets/contacto.jpg'
  ],

  // Sección Desarrollo
  desarrollo: [
    'assets/desarrollo-2.avif'
  ],

  // Banderas/Idiomas
  flags: [
    'assets/flags/argentina.svg',
    'assets/flags/italy.svg',
    'assets/flags/usa.svg',
    'assets/flags/spain.svg'
  ],

  // Iconos/SVG
  icons: [
    'window.svg',
    'vercel.svg',
    'next.svg',
    'globe.svg',
    'file.svg'
  ]
};

// Función para subir imagen a Cloudinary
async function uploadImage(localPath, folder, publicId) {
  try {
    const result = await cloudinary.uploader.upload(localPath, {
      folder: `deamon-dd/${folder}`,
      public_id: publicId,
      resource_type: 'auto',
      quality: 'auto',
      fetch_format: 'auto',
      flags: 'progressive'
    });
    
    console.log(`✅ Subida exitosa: ${localPath} → ${result.secure_url}`);
    return {
      originalPath: localPath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id,
      folder: folder
    };
  } catch (error) {
    console.error(`❌ Error subiendo ${localPath}:`, error.message);
    return null;
  }
}

// Función principal para subir todas las imágenes
async function uploadAllImages() {
  const results = {};
  const uploadPromises = [];

  console.log('🚀 Iniciando subida de imágenes a Cloudinary...\n');

  for (const [section, images] of Object.entries(imageSections)) {
    console.log(`📁 Procesando sección: ${section.toUpperCase()}`);
    results[section] = [];

    for (const imagePath of images) {
      const fullPath = path.join('public', imagePath);
      
      if (fs.existsSync(fullPath)) {
        const fileName = path.basename(imagePath, path.extname(imagePath));
        const uploadPromise = uploadImage(fullPath, section, fileName)
          .then(result => {
            if (result) {
              results[section].push(result);
            }
            return result;
          });
        
        uploadPromises.push(uploadPromise);
      } else {
        console.log(`⚠️  Archivo no encontrado: ${imagePath}`);
      }
    }
    
    console.log(`   ${images.length} imágenes encontradas\n`);
  }

  // Esperar a que terminen todas las subidas
  await Promise.all(uploadPromises);

  // Generar archivo de mapeo
  generateMappingFile(results);
  
  console.log('🎉 ¡Subida completada! Revisa el archivo cloudinary-mapping.json');
}

// Función para generar archivo de mapeo
function generateMappingFile(results) {
  const mapping = {
    generated_at: new Date().toISOString(),
    sections: {}
  };

  for (const [section, images] of Object.entries(results)) {
    mapping.sections[section] = {};
    
    images.forEach(image => {
      const fileName = path.basename(image.originalPath);
      mapping.sections[section][fileName] = {
        cloudinaryUrl: image.cloudinaryUrl,
        publicId: image.publicId,
        originalPath: image.originalPath
      };
    });
  }

  // Guardar mapeo
  fs.writeFileSync(
    'cloudinary-mapping.json', 
    JSON.stringify(mapping, null, 2)
  );

  // Generar archivo de constantes para usar en el código
  generateConstantsFile(mapping);
}

// Función para generar archivo de constantes
function generateConstantsFile(mapping) {
  let constantsContent = `// Cloudinary URLs - Generado automáticamente
export const CLOUDINARY_URLS = {
`;

  for (const [section, images] of Object.entries(mapping.sections)) {
    constantsContent += `  ${section.toUpperCase()}: {\n`;
    
    for (const [fileName, data] of Object.entries(images)) {
      const constantName = fileName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
      constantsContent += `    ${constantName}: '${data.cloudinaryUrl}',\n`;
    }
    
    constantsContent += `  },\n`;
  }

  constantsContent += `};

// Función helper para obtener URL
export const getCloudinaryUrl = (section, imageName) => {
  return CLOUDINARY_URLS[section.toUpperCase()]?.[imageName.toUpperCase().replace(/[^A-Z0-9]/g, '_')] || '';
};
`;

  fs.writeFileSync('app/lib/cloudinary-urls.js', constantsContent);
  console.log('📄 Archivo de constantes generado: app/lib/cloudinary-urls.js');
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  uploadAllImages().catch(console.error);
}

module.exports = { uploadAllImages, imageSections };
