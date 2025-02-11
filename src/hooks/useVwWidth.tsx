'use client';

import { useEffect, useState } from 'react';

export default function useVwWidth() {
  const [vwWidth, setVwWidth] = useState(0);

  useEffect(() => {
    const updateVw = () => {
      setVwWidth(window.innerWidth);
    };

    updateVw();

    window.addEventListener('resize', updateVw);

    return () => {
      window.removeEventListener('resize', updateVw);
    };
  }, []);

  return { vwWidth };
}
