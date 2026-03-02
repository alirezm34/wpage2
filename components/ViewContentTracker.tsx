'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ViewContentTracker() {
  const fired = useRef(false);

  useEffect(() => {
    const target = document.getElementById('content');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          window.fbq?.('track', 'ViewContent');
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return null;
}
