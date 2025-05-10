'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ImageComponent.module.scss';

interface ImageComponentProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ 
  src, 
  alt,
  priority = false
}) => {
  return (
    <div className={styles.imageContainer}>
      <Image 
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: 'cover' }}
        priority={priority}
      />
    </div>
  );
};

export default ImageComponent;
