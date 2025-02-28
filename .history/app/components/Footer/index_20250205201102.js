const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Desarrollo Web */}
            <div>
              <h2 className="text-lg font-bold mb-2">Desarrollo Web</h2>
              <ul className="space-y-1">
                <li>Páginas Web Simples</li>
                <li>Páginas Web Profesionales</li>
                <li>Páginas Web Catálogo</li>
                <li>Páginas Web Ecommerce</li>
              </ul>
            </div>
  
            {/* Diseño Gráfico */}
            <div>
              <h2 className="text-lg font-bold mb-2">Diseño Gráfico</h2>
              <ul className="space-y-1">
                <li>Diseño de logos</li>
                <li>Diseño gráfico de alto impacto</li>
                <li>Diseño vehicular de competición</li>
                <li>Diseño UI/UX</li>
              </ul>
            </div>
  
            {/* Redes Sociales */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-bold mb-2">Redes Sociales</h2>
              <div className="w-16 h-16">
                <img
                  src="/path-to-your-logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 border-t border-blue-500 pt-4 text-center text-sm text-gray-400">
            Created by @Deamon Company.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  