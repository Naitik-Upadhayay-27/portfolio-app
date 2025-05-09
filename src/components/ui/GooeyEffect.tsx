'use client';

import React, { useEffect, useRef } from 'react';
import Shery from 'sheryjs';

interface GooeyEffectProps {
  images: string[];
  containerClassName?: string;
}

const GooeyEffect: React.FC<GooeyEffectProps> = ({ images, containerClassName = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Shery.js gooey effect when component mounts
    if (containerRef.current && typeof window !== 'undefined') {
      Shery.imageEffect('.gooey-image', {
        style: 5, // Gooey style
        config: {
          "a": { "value": 2, "range": [0, 30] },
          "b": { "value": 0.75, "range": [-1, 1] },
          "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
          "aspect": { "value": 0.7272749932567818 },
          "gooey": { "value": true },
          "infiniteGooey": { "value": true },
          "growSize": { "value": 4, "range": [1, 15] },
          "durationOut": { "value": 1, "range": [0.1, 5] },
          "durationIn": { "value": 1.5, "range": [0.1, 5] },
          "displaceAmount": { "value": 0.5 },
          "masker": { "value": true },
          "maskVal": { "value": 1.3, "range": [1, 5] },
          "scrollType": { "value": 0 },
          "geoVertex": { "range": [1, 64], "value": 1 },
          "noEffectGooey": { "value": true },
          "onMouse": { "value": 1 },
          "noise_speed": { "value": 0.2, "range": [0, 10] },
          "metaball": { "value": 0.2, "range": [0, 2] },
          "discard_threshold": { "value": 0.5, "range": [0, 1] },
          "antialias_threshold": { "value": 0, "range": [0, 0.1] },
          "noise_height": { "value": 0.5, "range": [0, 2] },
          "noise_scale": { "value": 10, "range": [0, 100] }
        },
        gooey: true
      });
    }

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div ref={containerRef} className={`gooey-container ${containerClassName}`}>
      {images.map((src, index) => (
        <img 
          key={index}
          className="gooey-image"
          src={src}
          alt={`Gooey effect image ${index + 1}`}
          data-gooey-index={index}
        />
      ))}
    </div>
  );
};

export default GooeyEffect;
