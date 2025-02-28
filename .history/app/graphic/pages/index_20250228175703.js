'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EnConstruccion() {
  const [timeLeft, setTimeLeft] = useState(15 * 24 * 60 * 60); // 15 días en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6 relative">
      {/* Fondo con imagen */}
      <Image 
        src="/assets/fondo.jpg" 
        layout="fill" 
        objectFit="cover" 
        className="opacity-50 absolute inset-0"
        alt="Fondo en construcción"
      />

      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-4">🚧 Página en Construcción 🚧</h1>
        <p className="text-xl mb-4">Estamos trabajando en algo increíble. ¡Vuelve pronto!</p>
        <div className="mt-4 bg-gray-800 text-purple-400 px-6 py-3 rounded-lg text-2xl font-semibold">
          Tiempo restante: {formatTime(timeLeft)}
        </div>
        
        <Link href="/home">
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition">
            Ir a la Página Principal
          </button>
        </Link>
      </div>
    </div>
  );
}
