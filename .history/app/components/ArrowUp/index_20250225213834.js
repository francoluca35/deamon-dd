'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ArrowUptow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <ArrowUp size={24} />
    </button>
  );
}
