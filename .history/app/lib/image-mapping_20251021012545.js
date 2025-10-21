// Importar URLs de Cloudinary
import { CLOUDINARY_URLS } from './cloudinary-urls';

// Mapeo de imágenes faltantes con URLs de Cloudinary
export const imageMapping = {
  // Logos y iconos
  'Logo-equipo-B.avif': CLOUDINARY_URLS.HOME.LOGO_EQUIPO_B_AVIF,
  'deamon-icon-B-s.avif': CLOUDINARY_URLS.HOME.DEAMON_ICON_B_S_AVIF,
  'deamon-icon-B.avif': CLOUDINARY_URLS.HOME.DEAMON_ICON_B_AVIF,
  'imagen-ilu.avif': CLOUDINARY_URLS.HOME.IMAGEN_ILU_AVIF,
  
  // Fondos
  'fondoprincipal.jpg': CLOUDINARY_URLS.HOME.FONDOPRINCIPAL_JPG,
  'contacto.jpg': CLOUDINARY_URLS.CONTACTO.CONTACTO_JPG,
  'fondo-const.jpg': CLOUDINARY_URLS.HOME.FONDO_CONST_JPG,
  
  // WhatsApp
  'whatsapp.avif': CLOUDINARY_URLS.HOME.WHATSAPP_AVIF,
  
  // Firma
  'firma3.avif': CLOUDINARY_URLS.HOME.FIRMA3_AVIF,
  
  // Marketing
  'marketing/arquimec.jpg': CLOUDINARY_URLS.MARKETING.ARQUIMEC_JPG,
  'marketing/arquimec-logo.webp': CLOUDINARY_URLS.MARKETING.ARQUIMEC_LOGO_WEBP,
  
  // Equipo
  'equipo/franco.png': CLOUDINARY_URLS.EQUIPO.FRANCO_PNG,
  'equipo/juan.png': CLOUDINARY_URLS.EQUIPO.JUAN_PNG,
  'equipo/marcos.png': CLOUDINARY_URLS.EQUIPO.MARCOS_PNG,
  'equipo/marcos.avif': CLOUDINARY_URLS.EQUIPO.MARCOS_AVIF,
  'equipo/mateo-rendon.avif': CLOUDINARY_URLS.EQUIPO.MATEO_RENDON_AVIF,
  'equipo/lucas-viale.avif': CLOUDINARY_URLS.EQUIPO.LUCAS_VIALE_AVIF,
  'equipo/yo-franco.avif': CLOUDINARY_URLS.EQUIPO.YO_FRANCO_AVIF,
  
  // Proyectos
  'Proyectos/tec.png': CLOUDINARY_URLS.PROYECTOS.TEC_PNG,
  'Proyectos/maurello1.png': CLOUDINARY_URLS.PROYECTOS.MAURELLO1_PNG,
  'Proyectos/carusoweb1.png': CLOUDINARY_URLS.PROYECTOS.CARUSOWEB1_PNG,
  'Proyectos/arqui2.png': CLOUDINARY_URLS.PROYECTOS.ARQUI2_PNG,
  'Proyectos/quick2.jpg': CLOUDINARY_URLS.PROYECTOS.QUICK2_JPG,
  'Proyectos/perumarapp.jpg': CLOUDINARY_URLS.PROYECTOS.PERUMARAPP_JPG,
  'Proyectos/maureloapp.jpg': CLOUDINARY_URLS.PROYECTOS.MAURELOAPP_JPG,
  'Proyectos/jlaapp2.jpg': CLOUDINARY_URLS.PROYECTOS.JLAAPP2_JPG,
  'Proyectos/yael-app.avif': CLOUDINARY_URLS.PROYECTOS.YAEL_APP_AVIF,
  'Proyectos/perumar.avif': CLOUDINARY_URLS.PROYECTOS.PERUMAR_AVIF,
  'Proyectos/maurello-app.avif': CLOUDINARY_URLS.PROYECTOS.MAURELLO_APP_AVIF,
  'Proyectos/maurello-web.avif': CLOUDINARY_URLS.PROYECTOS.MAURELLO_WEB_AVIF,
  'Proyectos/JLA.avif': CLOUDINARY_URLS.PROYECTOS.JLA_AVIF,
  'Proyectos/app-jla.avif': CLOUDINARY_URLS.PROYECTOS.APP_JLA_AVIF,
  
  // Branding
  'branding/asfixia.png': CLOUDINARY_URLS.BRANDING.ASFIXIA_PNG,
  'branding/bicico.png': CLOUDINARY_URLS.BRANDING.BICICO_PNG,
  'branding/bioma.png': CLOUDINARY_URLS.BRANDING.BIOMA_PNG,
  'branding/citadino.png': CLOUDINARY_URLS.BRANDING.CITADINO_PNG,
  'branding/iruma.png': CLOUDINARY_URLS.BRANDING.IRUMA_PNG,
  
  // Diseño
  'diseno/tc2024.avif': CLOUDINARY_URLS.DISEÑO.TC2024_AVIF,
  'diseño-web.avif': CLOUDINARY_URLS.DISEÑO.DISE_O_WEB_AVIF,
  
  // Desarrollo
  'desarrollo-2.avif': CLOUDINARY_URLS.DESARROLLO.DESARROLLO_2_AVIF,
};

// Función helper para obtener la URL de una imagen
export const getImageUrl = (imagePath) => {
  // Si la imagen existe en el mapeo, devolver la URL
  if (imageMapping[imagePath]) {
    return imageMapping[imagePath];
  }
  
  // Si es una ruta completa que empieza con /assets/, extraer el nombre del archivo
  if (imagePath.startsWith('/assets/')) {
    const fileName = imagePath.replace('/assets/', '');
    if (imageMapping[fileName]) {
      return imageMapping[fileName];
    }
  }
  
  // Si no se encuentra, devolver un placeholder genérico
  return 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
};