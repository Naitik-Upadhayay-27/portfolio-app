'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ParallaxSection.module.scss';

interface ParallaxSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  direction = 'up',
  speed = 0.2,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate transform based on direction
  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransformValue() : '0%';
  const x = direction === 'left' || direction === 'right' ? getTransformValue() : '0%';

  return (
    <div ref={ref} className={`${styles.parallaxContainer} ${className}`}>
      <motion.div
        className={styles.parallaxInner}
        style={{ y, x }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
