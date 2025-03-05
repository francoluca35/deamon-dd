"use client";
import { Card, CardContent } from "@/components/ui/card";

const WhatsAppLinkGenerator = () => {
  const phone = "1131199882";
  const message = "Hola!, Quisiera mas información acerca de los servicios ofrecidos de deamonDD.😃";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-6 w-full max-w-md">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Ir a WhatsApp con Mensaje Predeterminado</h1>
          <div className="text-center mt-4">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Ir a WhatsApp con Mensaje
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsAppLinkGenerator;
