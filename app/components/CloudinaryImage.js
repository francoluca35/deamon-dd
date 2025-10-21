"use client";
import Image from "next/image";
import { useState, memo } from "react";

const CloudinaryImage = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  section = 'home',
  priority = false, 
  className = "",
  quality = 'auto',
  format = 'auto',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generar URL optimizada de Cloudinary
  const getOptimizedUrl = () => {
    if (!src) return '';
    
    // Si ya es una URL de Cloudinary, devolverla
    if (src.includes('cloudinary.com')) {
      return src;
    }
    
    // Si es una URL local, usar la URL de Cloudinary correspondiente
    // Esto se reemplazará automáticamente después de la migración
    return src;
  };

  const optimizedUrl = getOptimizedUrl();

  // Transformaciones específicas por sección
  const getTransformations = () => {
    const baseTransformations = {
      quality: quality,
      fetch_format: format,
      flags: 'progressive'
    };

    switch (section) {
      case 'equipo':
        return {
          ...baseTransformations,
          width: width || 300,
          height: height || 300,
          crop: 'fill',
          gravity: 'face'
        };
      case 'flags':
        return {
          ...baseTransformations,
          width: width || 40,
          height: height || 40,
          crop: 'fill'
        };
      case 'icons':
        return {
          ...baseTransformations,
          width: width || 24,
          height: height || 24,
          crop: 'fill'
        };
      default:
        return {
          ...baseTransformations,
          width: width || 'auto',
          height: height || 'auto',
          crop: 'scale'
        };
    }
  };

  // Generar URL con transformaciones
  const getCloudinaryUrl = () => {
    if (!optimizedUrl) return '';
    
    if (optimizedUrl.includes('cloudinary.com')) {
      const transformations = getTransformations();
      const params = new URLSearchParams();
      
      Object.entries(transformations).forEach(([key, value]) => {
        if (value !== 'auto' && value !== 'scale') {
          params.append(key, value);
        }
      });
      
      const queryString = params.toString();
      return queryString ? `${optimizedUrl}?${queryString}` : optimizedUrl;
    }
    
    return optimizedUrl;
  };

  const finalUrl = getCloudinaryUrl();

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Error cargando imagen</span>
      </div>
    );
  }

  return (
    <div 
      className={`relative reduce-layout-shift ${className}`} 
      style={{ 
        width, 
        height,
        contain: 'layout style paint',
        willChange: 'auto'
      }}
    >
      <Image
        src={finalUrl}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={priority ? 90 : 75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`lcp-optimized transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          objectFit: 'cover',
          contain: 'layout style paint',
          willChange: 'auto',
          transform: 'translateZ(0)'
        }}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
    </div>
  );
});

CloudinaryImage.displayName = 'CloudinaryImage';

export default CloudinaryImage;
