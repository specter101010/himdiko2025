// src/components/ScrollToHash.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay dikit biar komponen udah render
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
