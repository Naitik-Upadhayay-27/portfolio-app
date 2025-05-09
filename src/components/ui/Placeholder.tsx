'use client';

import React from 'react';
import styles from './Placeholder.module.scss';

interface PlaceholderProps {
  width?: string;
  height?: string;
  color?: string;
  text?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ 
  width = '100%', 
  height = '100%', 
  color = '#f0f0f0',
  text
}) => {
  // Generate a random pastel color if none provided
  const bgColor = color === '#f0f0f0' 
    ? `hsl(${Math.floor(Math.random() * 360)}, 70%, 85%)`
    : color;
    
  return (
    <div 
      className={styles.placeholder}
      style={{ 
        width, 
        height, 
        backgroundColor: bgColor,
      }}
    >
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default Placeholder;
