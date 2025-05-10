import { useState, useEffect } from 'react';

export function useImageLoader(imagePath) {
  const [imageSrc, setImageSrc] = useState('');
  
  useEffect(() => {
    // Try to load the image from the public folder
    try {
      // For Vercel deployment, ensure we're using the correct path
      const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
      setImageSrc(path);
    } catch (error) {
      console.error(`Error loading image ${imagePath}:`, error);
      setImageSrc(''); // Set empty string on error
    }
  }, [imagePath]);

  return imageSrc;
}
