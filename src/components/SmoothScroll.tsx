'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 0.7,            // Reduced duration for faster scrolling (was 1.2)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
      orientation: 'vertical',  // Using orientation instead of direction
      gestureOrientation: 'vertical',
      smoothWheel: true,        // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1.8,     // Increased wheel multiplier for faster scrolling (was 1)
      touchMultiplier: 3,       // Increased touch multiplier for faster scrolling (was 2)
    });

    // Create a function to handle RAF (RequestAnimationFrame)
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
