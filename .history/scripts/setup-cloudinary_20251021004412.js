const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Configurando Cloudinary para Deamon DD...\n');

// Instalar dependencias
console.log('📦 Instalando dependencias de Cloudinary...');
try {
  execSync('npm install cloudinary', { stdio: 'inherit' });
  console.log('✅ Dependencias instaladas correctamente\n');
} catch (error) {
  console.error('❌ Error instalando dependencias:', error.message);
  process.exit(1);
}

// Crear archivo .env.example
const envExample = `# Cloudinary Configuration
# Obtén estos valores de tu dashboard de Cloudinary: https://cloudinary.com/console

CLOUDINARY_CLOUD_NAME=tu-cloud-name
CLOUDINARY_API_KEY=tu-api-key
CLOUDINARY_API_SECRET=tu-api-secret

# Ejemplo de configuración:
# CLOUDINARY_CLOUD_NAME=deamon-dd
# CLOUDINARY_API_KEY=123456789012345
# CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz123456
`;

fs.writeFileSync('.env.example', envExample);
console.log('📄 Archivo .env.example creado');

// Crear archivo de configuración actualizado
const configContent = `const cloudinary = require('cloudinary').v2;

// Configurar Cloudinary desde variables de entorno
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

// Transformaciones optimizadas por sección
const TRANSFORMATIONS = {
  // Para imágenes de hero/home
  home: {
    quality: 'auto',
    fetch_format: 'auto',
    flags: 'progressive',
    width: 'auto',
    height: 'auto',
    crop: 'scale'
  },
  
  // Para imágenes de equipo
  equipo: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 300,
    height: 300,
    crop: 'fill',
    gravity: 'face'
  },
  
  // Para proyectos
  proyectos: {
    quality: 'auto',
    fetch_format: 'auto',
    flags: 'progressive',
    width: 'auto',
    height: 'auto',
    crop: 'scale'
  },
  
  // Para marketing
  marketing: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 'auto',
    height: 'auto',
    crop: 'scale'
  },
  
  // Para branding
  branding: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 'auto',
    height: 'auto',
    crop: 'scale'
  },
  
  // Para diseño
  diseño: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 'auto',
    height: 'auto',
    crop: 'scale'
  },
  
  // Para contacto
  contacto: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 'auto',
    height: 'auto',
    crop: 'scale'
  },
  
  // Para desarrollo
  desarrollo: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 'auto',
    height: 'auto',
    crop: 'scale'
  },
  
  // Para banderas
  flags: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 40,
    height: 40,
    crop: 'fill'
  },
  
  // Para iconos
  icons: {
    quality: 'auto',
    fetch_format: 'auto',
    width: 24,
    height: 24,
    crop: 'fill'
  }
};

module.exports = { cloudinary, TRANSFORMATIONS };
`;

fs.writeFileSync('scripts/cloudinary-config.js', configContent);
console.log('📄 Archivo de configuración actualizado');

// Crear script de migración
const migrationScript = `#!/usr/bin/env node

const { uploadAllImages } = require('./upload-to-cloudinary');
const path = require('path');

console.log('🚀 Iniciando migración de imágenes a Cloudinary...\\n');

// Verificar que las variables de entorno estén configuradas
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('❌ Error: Variables de entorno de Cloudinary no configuradas');
  console.log('📝 Por favor, configura las siguientes variables en tu archivo .env:');
  console.log('   CLOUDINARY_CLOUD_NAME=tu-cloud-name');
  console.log('   CLOUDINARY_API_KEY=tu-api-key');
  console.log('   CLOUDINARY_API_SECRET=tu-api-secret');
  process.exit(1);
}

// Ejecutar migración
uploadAllImages()
  .then(() => {
    console.log('\\n🎉 ¡Migración completada exitosamente!');
    console.log('📄 Revisa los archivos generados:');
    console.log('   - cloudinary-mapping.json');
    console.log('   - app/lib/cloudinary-urls.js');
  })
  .catch(error => {
    console.error('❌ Error durante la migración:', error);
    process.exit(1);
  });
`;

fs.writeFileSync('scripts/migrate-to-cloudinary.js', migrationScript);
console.log('📄 Script de migración creado');

console.log('\n🎉 ¡Configuración completada!');
console.log('\n📋 Próximos pasos:');
console.log('1. Configura tus credenciales de Cloudinary en el archivo .env');
console.log('2. Ejecuta: node scripts/migrate-to-cloudinary.js');
console.log('3. Revisa los archivos generados para usar las URLs de Cloudinary');
console.log('\n💡 Tip: Puedes obtener tus credenciales en: https://cloudinary.com/console');
