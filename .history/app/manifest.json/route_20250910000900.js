export async function GET() {
  const manifest = {
    name: "Deamon DD - Agencia de Desarrollo Web",
    short_name: "Deamon DD",
    description: "Agencia líder en desarrollo web, diseño digital y marketing en Buenos Aires",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#673372",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/assets/deamon-icon-B.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/assets/deamon-icon-B.png", 
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    categories: ["business", "productivity", "developer"],
    lang: "es",
    scope: "/",
    id: "deamon-dd-agency"
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
