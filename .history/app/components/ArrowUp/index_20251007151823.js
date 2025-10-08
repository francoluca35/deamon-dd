'use client'
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className="fixed z-40 bottom-4 left-4 sm:bottom-6 sm:left-6 bg-purple-900 p-3 shadow-lg hover:bg-purple-950 transition-all flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 rounded"
          style={{ width: '45px', height: '45px' }}
          aria-label="Volver arriba"
          tabIndex={0}
        >
          <FaArrowUp className="text-white text-lg" />
        </button>
      )}
    </div>
  );
}
