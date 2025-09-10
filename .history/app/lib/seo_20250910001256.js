// Configuración SEO dinámica
export const generateMetadata = (pageData) => {
  const baseUrl = 'https://deamon-dd.vercel.app';
  
  return {
    title: pageData.title || 'Deamon DD - Agencia de Desarrollo Web y Diseño Digital',
    description: pageData.description || 'Agencia líder en desarrollo web, diseño digital y marketing en Buenos Aires. Creamos sitios web profesionales que impulsan tu negocio.',
    keywords: pageData.keywords || [
      'desarrollo web',
      'diseño web',
      'agencia digital',
      'páginas web profesionales',
      'aplicaciones web',
      'marketing digital',
      'Buenos Aires',
      'Argentina'
    ],
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${baseUrl}${pageData.url || ''}`,
      siteName: 'Deamon DD',
      images: [
        {
          url: pageData.image || '/assets/deamon-2-N-T.png',
          width: 1200,
          height: 630,
          alt: pageData.title || 'Deamon DD - Agencia de Desarrollo Web',
        },
      ],
      locale: 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: [pageData.image || '/assets/deamon-2-N-T.png'],
    },
    alternates: {
      canonical: `${baseUrl}${pageData.url || ''}`,
    },
  };
};

// Schema markup para diferentes tipos de páginas
export const generateSchemaMarkup = (type, data) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": data.name || "Deamon DD",
    "description": data.description,
    "url": data.url || "https://deamon-dd.vercel.app",
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseSchema,
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
      };
    
    case 'Service':
      return {
        ...baseSchema,
        "provider": {
          "@type": "Organization",
          "name": "Deamon DD"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Argentina"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Desarrollo Web",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo Web"
              }
            }
          ]
        }
      };
    
    case 'WebPage':
      return {
        ...baseSchema,
        "isPartOf": {
          "@type": "WebSite",
          "name": "Deamon DD",
          "url": "https://deamon-dd.vercel.app"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs || []
        }
      };
    
    default:
      return baseSchema;
  }
};

// Generar breadcrumbs
export const generateBreadcrumbs = (path) => {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://deamon-dd.vercel.app"
    }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1),
      "item": `https://deamon-dd.vercel.app${currentPath}`
    });
  });

  return breadcrumbs;
};
