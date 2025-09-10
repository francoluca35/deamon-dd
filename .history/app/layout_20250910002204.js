import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "./components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
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
  authors: [{ name: "Deamon DD", url: "https://deamon-dd.vercel.app" }],
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
    title: "Deamon DD - Agencia de Desarrollo Web y Diseño Digital",
    description: "Agencia líder en desarrollo web, diseño digital y marketing en Buenos Aires. Creamos sitios web profesionales que impulsan tu negocio.",
    url: 'https://deamon-dd.vercel.app',
    siteName: 'Deamon DD',
    images: [
      {
        url: '/assets/deamon-2-N-T.png',
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
    title: "Deamon DD - Agencia de Desarrollo Web y Diseño Digital",
    description: "Agencia líder en desarrollo web, diseño digital y marketing en Buenos Aires. Creamos sitios web profesionales que impulsan tu negocio.",
    images: ['/assets/deamon-2-N-T.png'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="theme-color" content="#673372" />
        <meta name="msapplication-TileColor" content="#673372" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/deamon-icon-B.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/deamon-icon-B.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Deamon DD",
              "description": "Agencia de desarrollo web y diseño digital",
              "url": "https://deamon-dd.vercel.app",
              "logo": "https://deamon-dd.vercel.app/assets/deamon-2-N-T.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
