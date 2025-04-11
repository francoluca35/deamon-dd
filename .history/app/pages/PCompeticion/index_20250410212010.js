"use client";
import { useRef, useState } from "react";

import { Pencil, Building } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ModelViewClient = dynamic(
  () => import("../../components/3d/ModelViewer"),
  {
    ssr: false,
  }
);
const imageRef = useRef(null);
const imageContainerRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [start, setStart] = useState({ x: 0, y: 0 });
const [offset, setOffset] = useState({ x: 0, y: 0 });

const handleMouseDown = (e) => {
  setIsDragging(true);
  setStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
};

const handleMouseMove = (e) => {
  if (!isDragging) return;
  const x = e.clientX - start.x;
  const y = e.clientY - start.y;
  setOffset({ x, y });
  if (imageRef.current) {
    imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }
};

const handleMouseUp = () => {
  setIsDragging(false);
};
const PCompetition = () => {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="max-w-screen-lg mx-auto">
        {" "}
        {/* Limita el ancho máximo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-white mb-8 sm:mb-10 ml-4">
          Diseño vehicular de competición
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Pencil className="text-violet-300 w-8 h-8 sm:w-6 sm:h-6 ml-3" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Diseño vehicular para competición
                </h3>
                <p className="text-gray-300 text-base">
                  Creamos diseños personalizados para vehículos de competición,
                  optimizando su estética y funcionalidad para el máximo
                  rendimiento....
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Building className="text-violet-300 w-8 h-8 sm:w-6 sm:h-6 ml-3" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Branding y Patrocinio
                </h3>
                <p className="text-gray-300 text-base">
                  Desarrollamos la identidad visual de tu equipo de competición,
                  integrando patrocinadores y colores estratégicos para mayor
                  impacto.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div
              className="w-full overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              ref={imageContainerRef}
            >
              <img
                ref={imageRef}
                src="/assets/diseno/tc2024.jpg"
                className="select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCompetition;
