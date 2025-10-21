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
  'Proyectos/quick2.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/perumarapp.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/maureloapp.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/jlaapp2.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/yael-app.avif': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/perumar.avif': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/maurello-app.avif': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/maurello-web.avif': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/JLA.avif': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'Proyectos/app-jla.avif': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  
  // Branding
  'branding/asfixia.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'branding/bicico.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'branding/bioma.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'branding/citadino.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'branding/iruma.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  
  // Diseño
  'diseno/tc2024.avif': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'diseño-web.avif': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  
  // Desarrollo
  'desarrollo-2.avif': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
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
