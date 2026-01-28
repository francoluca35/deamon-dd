"use client";
import { useState, useEffect, useCallback, useRef, memo } from "react";

const CursorEffect = memo(function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const sparkleIdRef = useRef(0);
  const lastSparkleTime = useRef(0);

  // Crear partículas de destello
  const createSparkle = useCallback((x, y) => {
    const now = Date.now();
    // Limitar frecuencia de sparkles (cada 80ms)
    if (now - lastSparkleTime.current < 80) return;
    lastSparkleTime.current = now;

    const id = sparkleIdRef.current++;
    const size = Math.random() * 4 + 2; // 2-6px
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;

    const newSparkle = {
      id,
      x: x + offsetX,
      y: y + offsetY,
      size,
    };

    setSparkles(prev => [...prev, newSparkle]);

    // Remover sparkle después de la animación
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== id));
    }, 600);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);

    // Verificar si está sobre un elemento interactivo
    const target = e.target;
    const isInteractive = 
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('[role="button"]') ||
      target.classList.contains('cursor-pointer') ||
      window.getComputedStyle(target).cursor === 'pointer';

    setIsHovering(isInteractive);

    // Crear sparkles cuando está sobre elementos interactivos
    if (isInteractive) {
      createSparkle(e.clientX, e.clientY);
    }
  }, [isVisible, createSparkle]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setIsHovering(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Solo activar en dispositivos con mouse (no táctiles)
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      // Ocultar cursor por defecto
      document.body.classList.add('cursor-active');

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        document.body.classList.remove('cursor-active');
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // No renderizar en dispositivos táctiles
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <>
      {/* Capa de trail */}
      <div
        className={`cursor-glow cursor-glow-trail ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Punto principal violeta */}
      <div
        className={`cursor-glow cursor-glow-main ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Partículas de destello */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="cursor-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
          }}
        />
      ))}
    </>
  );
});

export default CursorEffect;
