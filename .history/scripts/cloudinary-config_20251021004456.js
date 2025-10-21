// Configuración de Cloudinary
// Reemplaza estos valores con tus credenciales de Cloudinary

const CLOUDINARY_CONFIG = {
  cloud_name: 'tu-cloud-name', // Tu cloud name de Cloudinary
  api_key: 'tu-api-key', // Tu API key de Cloudinary  
  api_secret: 'tu-api-secret', // Tu API secret de Cloudinary
  secure: true
};

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

module.exports = { CLOUDINARY_CONFIG, TRANSFORMATIONS };
