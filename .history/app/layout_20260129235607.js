import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { initializePerformanceOptimizations } from "./lib/performance";
import { initializeUltraOptimizations } from "./lib/ultra-optimization";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['monospace'],
});

export const metadata = {
  title: {
    default: "Deamon DD - Desarrollo Web Buenos Aires",
    template: "%s | Deamon DD"
  },
  description: "Agencia de desarrollo web y diseño digital en Buenos Aires. Creamos sitios web profesionales y aplicaciones que impulsan tu negocio.",
  keywords: [
    "desarrollo web",
    "diseño web",
    "agencia digital",
    "páginas web profesionales",
    "aplicaciones web",
    "marketing digital",
    "Buenos Aires",
    "Argentina",
    "diseño UX/UI",
    "programación web",
    "e-commerce",
    "sitios web responsive"
  ],
  authors: [{ name: "Deamon DD", url: "https://deamondd.com" }],
  creator: "Deamon DD",
  publisher: "Deamon DD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deamon-dd.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Deamon DD - Desarrollo Web Buenos Aires",
    description: "Agencia de desarrollo web y diseño digital en Buenos Aires. Creamos sitios web profesionales que impulsan tu negocio.",
    url: 'https://deamon-dd.vercel.app',
    siteName: 'Deamon DD',
    images: [
      {
        url: '/assets/deamon-2-N-T.avif',
        width: 1200,
        height: 630,
        alt: 'Deamon DD - Agencia de Desarrollo Web',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Deamon DD - Desarrollo Web Buenos Aires",
    description: "Agencia de desarrollo web y diseño digital en Buenos Aires. Creamos sitios web profesionales que impulsan tu negocio.",
    images: ['/assets/deamon-2-N-T.avif'],
    creator: '@deamondd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* CSS Crítico Ultra Optimizado - Agresivo */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root{--bg:#0a0a0a;--fg:#ededed;--p:#673372;--hero-bg:url('https://res.cloudinary.com/dhmswq45h/image/upload/v1761018650/deamon-dd/home/fondoprincipal.jpg')}
            *{box-sizing:border-box;margin:0;padding:0}
            html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;font-display:swap;overflow-x:hidden}
            body{margin:0;font-family:var(--font-geist-sans),system-ui,sans-serif;background:var(--bg);color:var(--fg);overflow-x:hidden}
            .loading-spinner{display:flex;justify-content:center;align-items:center;height:100vh;background:#673372}
            .spinner{width:40px;height:40px;border:4px solid rgba(255,255,255,.3);border-top:4px solid #fff;border-radius:50%;animation:spin 1s linear infinite}
            @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}

            /* Hero section crítico inline */
            .hero-critical{position:relative;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-image:var(--hero-bg);background-size:cover;background-position:center;background-repeat:no-repeat;contain:layout style paint}
            .hero-title{font-size:clamp(1.875rem,4vw,3.75rem);font-weight:700;line-height:1.1;color:white;text-shadow:0 2px 4px rgba(0,0,0,0.6);contain:layout style paint;will-change:auto}
            .hero-subtitle{font-size:clamp(1.125rem,2.5vw,1.5rem);line-height:1.6;color:white;text-shadow:0 1px 3px rgba(0,0,0,0.5);contain:layout style paint;will-change:auto}
            
            /* Optimizaciones de rendimiento */
            .lcp-optimized{contain:layout style paint;will-change:auto;transform:translateZ(0)}
            .reduce-layout-shift{contain:layout;min-height:1px}
            .optimize-rendering{transform:translateZ(0);backface-visibility:hidden;perspective:1000px}
            
            /* Loading optimizado */
            .loading-spinner{display:flex;justify-content:center;align-items:center;height:100vh;background:#673372;contain:layout style paint}
            .spinner{width:40px;height:40px;border:4px solid rgba(255,255,255,.3);border-top:4px solid #fff;border-radius:50%;animation:spin 1s linear infinite;will-change:transform}
            @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
            
            /* Prevenir CLS */
            img{max-width:100%;height:auto;contain-intrinsic-size:1px 1000px}
            .aspect-ratio-fix{aspect-ratio:16/9;width:100%;height:auto;contain:layout}
            
            /* Optimizaciones para dispositivos lentos */
            @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}}
            @media (max-width:768px){.hero-title{font-size:1.875rem}.hero-subtitle{font-size:1.125rem}}
          `
        }} />
        
        {/* Preload eliminado para evitar render blocking */}
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="theme-color" content="#673372" />
        <meta name="msapplication-TileColor" content="#673372" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/deamon-icon-B-desarrollo.avif" type="image/avif" />
        <link rel="apple-touch-icon" href="/assets/deamon-icon-B-desarrollo.avif" />
        
        {/* Google Analytics - Optimizado para rendimiento */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Inicializar optimizaciones de rendimiento
              const initializePerformanceOptimizations = ${initializePerformanceOptimizations.toString()};
              initializePerformanceOptimizations();
              
              // Inicializar optimizaciones ultra agresivas
              const initializeUltraOptimizations = ${initializeUltraOptimizations.toString()};
              initializeUltraOptimizations();
              
              // Cargar Google Analytics de forma diferida
              function loadGA() {
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-W4FTP8BS4C';
                document.head.appendChild(script);
                
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-W4FTP8BS4C');
              }
              
              // Cargar después de que la página esté lista
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', loadGA);
              } else {
                setTimeout(loadGA, 1000);
              }
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Deamon DD",
              "description": "Agencia de desarrollo web y diseño digital",
              "url": "https://deamon-dd.vercel.app",
              "logo": "https://deamon-dd.vercel.app/assets/deamon-2-N-T.avif",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-11-3119-9882",
                "contactType": "customer service",
                "email": "francolucap1@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "sameAs": [
                "https://wa.me/541131199882"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Desarrollo Web",
                  "description": "Desarrollo de sitios web profesionales y aplicaciones web"
                },
                {
                  "@type": "Service", 
                  "name": "Diseño Digital",
                  "description": "Diseño gráfico y UX/UI para aplicaciones y sitios web"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
