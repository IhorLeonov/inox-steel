'use client';

import { useEffect, useState } from 'react';

export default function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(() => {
      setViewportWidth(window.innerWidth);
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return viewportWidth;
}
