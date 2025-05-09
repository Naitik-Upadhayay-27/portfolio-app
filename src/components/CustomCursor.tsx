'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.scss';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isClicking, setIsClicking] = useState(false);
  
  // Use a single ref for cursor position to ensure dot and ring are aligned
  const cursorPos = { x: mousePosition.x, y: mousePosition.y };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Add event listeners for interactive elements
    const handleLinkHover = () => setCursorVariant('link');
    const handleLinkLeave = () => setCursorVariant('default');
    const handleTextHover = () => setCursorVariant('text');
    const handleTextLeave = () => setCursorVariant('default');

    // Select all interactive elements
    const links = document.querySelectorAll('a, button');
    const textElements = document.querySelectorAll('h1, h2, h3, p, .tagline, .punchline');

    // Add event listeners
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    textElements.forEach((element) => {
      element.addEventListener('mouseenter', handleTextHover);
      element.addEventListener('mouseleave', handleTextLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      // Clean up event listeners
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      textElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleTextHover);
        element.removeEventListener('mouseleave', handleTextLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={styles.cursorDot}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
          mass: 0.2,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className={`${styles.cursorRing} ${styles[cursorVariant]}`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.9 : 1,
          opacity: cursorVariant === 'link' ? 0.8 : 0.4,
          borderColor: cursorVariant === 'link' 
            ? 'rgba(255, 255, 255, 0.8)' 
            : cursorVariant === 'text' 
              ? 'rgba(200, 200, 200, 0.6)' 
              : 'rgba(150, 150, 150, 0.4)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
