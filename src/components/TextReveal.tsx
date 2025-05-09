'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './TextReveal.module.scss';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  threshold?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as = 'p',
  className = '',
  delay = 0.2,
  duration = 0.5,
  staggerChildren = 0.03,
  threshold = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Split text into words
  const words = text.split(' ');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay * i,
      },
    }),
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Create a component based on the 'as' prop
  const Component = motion[as] as React.ComponentType<any>;

  return (
    <Component
      ref={ref}
      className={`${styles.textReveal} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={styles.word}
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

export default TextReveal;
