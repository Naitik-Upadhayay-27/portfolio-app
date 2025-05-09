'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TiltCard.module.scss';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  tiltMaxAngle?: number;
  glareOpacity?: number;
  scale?: number;
  disabled?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  perspective = 1000,
  tiltMaxAngle = 10,
  glareOpacity = 0.3,
  scale = 1.05,
  disabled = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate tilt angles
    const tiltX = (mouseY / (rect.height / 2)) * tiltMaxAngle;
    const tiltY = -(mouseX / (rect.width / 2)) * tiltMaxAngle;
    
    // Calculate glare position
    const glareX = (mouseX / rect.width) * 100;
    const glareY = (mouseY / rect.height) * 100;
    
    setTilt({ x: tiltX, y: tiltY });
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.tiltCard} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        perspective: `${perspective}px`,
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
    >
      {children}
      {isHovered && (
        <div 
          className={styles.glare} 
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 80%)`,
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
