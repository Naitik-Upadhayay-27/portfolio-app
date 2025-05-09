'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

const MagneticElement: React.FC<MagneticElementProps> = ({ 
  children, 
  className = '', 
  strength = 40 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = elementRef.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const moveX = (clientX - centerX) / strength;
    const moveY = (clientY - centerY) / strength;
    
    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={elementRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ 
        x: position.x, 
        y: position.y,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 350, 
        damping: 15, 
        mass: 0.1 
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticElement;
