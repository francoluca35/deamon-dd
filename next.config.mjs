/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  
  // Optimizaciones de rendimiento críticas - Ultra agresivas
  // swcMinify: removido - SWC minification es el default en Next.js 13+
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  productionBrowserSourceMaps: false,
  // optimizeFonts: removido - la optimización de fuentes es automática en Next.js 13+
  
  // Optimización de imágenes mejorada para móvil
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Headers de seguridad y rendimiento
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Preconnect para mejorar LCP
          {
            key: 'Link',
            value: '<https://www.deamondd.com>; rel=preconnect',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optimizaciones de rendimiento
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
  
  // Configuración de Turbopack (Next.js 16+ usa Turbopack por defecto)
  // Turbopack maneja automáticamente las optimizaciones de código splitting
  turbopack: {},
  
  // Webpack config (solo se usa si se deshabilita Turbopack explícitamente)
  // En Next.js 16, Turbopack es más eficiente y maneja estas optimizaciones automáticamente
  // webpack: (config, { dev, isServer }) => {
  //   if (!dev && !isServer) {
  //     config.optimization.splitChunks = {
  //       chunks: 'all',
  //       minSize: 5000,
  //       maxSize: 50000,
  //       cacheGroups: {
  //         react: {
  //           test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
  //           name: 'react',
  //           chunks: 'all',
  //           priority: 30,
  //           maxSize: 30000,
  //         },
  //         framer: {
  //           test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
  //           name: 'framer',
  //           chunks: 'all',
  //           priority: 25,
  //           maxSize: 20000,
  //         },
  //         icons: {
  //           test: /[\\/]node_modules[\\/]react-icons[\\/]/,
  //           name: 'icons',
  //           chunks: 'all',
  //           priority: 20,
  //           maxSize: 15000,
  //         },
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: 'vendors',
  //           chunks: 'all',
  //           priority: 15,
  //           maxSize: 40000,
  //         },
  //         common: {
  //           name: 'common',
  //           minChunks: 2,
  //           chunks: 'all',
  //           priority: 10,
  //           reuseExistingChunk: true,
  //           maxSize: 25000,
  //         },
  //       },
  //     };
  //     config.optimization.usedExports = true;
  //     config.optimization.sideEffects = false;
  //   }
  //   return config;
  // },
};

export default nextConfig;
