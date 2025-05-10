'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { portfolioData } from '@/data/data';
import styles from './page.module.scss';
import TextReveal from '@/components/TextReveal';

// Function to generate creative categories for projects
const getProjectCategory = (index: number) => {
  const categories = [
    "COMMERCIAL DIRECTION",
    "CREATIVE CAMPAIGN",
    "FASHION FILM",
    "BRAND STORYTELLING",
    "VISUAL NARRATIVE",
    "ARTISTIC DIRECTION",
    "CINEMATIC VISION",
    "CONCEPTUAL DESIGN"
  ];
  
  return categories[index % categories.length];
};

// Function to generate catchy punchlines for each project
const getProjectPunchline = (index: number, title: string) => {
  const punchlines = [
    "Where Vision Meets Reality",
    "Crafting Stories That Resonate",
    "Beyond Imagination",
    "Elevating Ordinary to Extraordinary",
    "Capturing Moments, Creating Memories",
    "Where Every Frame Tells a Story",
    "Redefining Visual Narratives",
    "Pushing Creative Boundaries"
  ];
  
  // Use project title to create a more specific punchline if possible
  if (title.toLowerCase().includes("commercial")) {
    return "Turning Products into Stories";
  } else if (title.toLowerCase().includes("fashion")) {
    return "Where Style Meets Substance";
  } else if (title.toLowerCase().includes("film") || title.toLowerCase().includes("video")) {
    return "Every Frame a Masterpiece";
  } else if (title.toLowerCase().includes("brand")) {
    return "Bringing Brands to Life";
  }
  
  // Default to the array of general punchlines
  return punchlines[index % punchlines.length];
};

export default function Home() {
  const { hero, portfolio } = portfolioData;
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const portfolioHeaderRef = useRef(null);
  const portfolioGridRef = useRef(null);
  
  // Animation controls
  const headerControls = useAnimation();
  const gridControls = useAnimation();
  
  // Parallax scroll effect for hero section
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  
  // Check if elements are in view
  const headerInView = useInView(portfolioHeaderRef, { once: true, amount: 0.3 });
  const gridInView = useInView(portfolioGridRef, { once: true, amount: 0.1 });
  
  // Trigger animations when elements come into view
  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    }
    if (gridInView) {
      gridControls.start('visible');
    }
  }, [headerInView, gridInView, headerControls, gridControls]);

  // Split text for letter animation
  const nameLetters = "ADAM SCHARF".split('');
  
  return (
    <div className={styles.home}>
      <motion.section 
        ref={heroRef}
        className={styles.hero}
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.titleWrapper}>
            {nameLetters.map((letter, index) => (
              <motion.span 
                key={index} 
                className={styles.titleLetter}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.05),
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          
          <div className={styles.subtitleWrapper}>
            <TextReveal 
              text={hero.title}
              as="p"
              className={styles.subtitle}
              delay={0.8}
              duration={0.7}
            />
            <motion.div 
              className={styles.tagline}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              <TextReveal 
                text="CREATING VISUAL STORIES THAT CAPTIVATE"
                as="span"
                delay={1.4}
                staggerChildren={0.02}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.div 
        ref={portfolioHeaderRef}
        className={styles.portfolioHeader}
        initial="hidden"
        animate={headerControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.8,
              ease: [0.1, 0.6, 0.3, 0.9]
            } 
          }
        }}
      >
        <TextReveal 
          text="FEATURED WORK"
          as="h2"
          delay={0.2}
          duration={0.6}
        />
        <TextReveal 
          text="Explore the visual narratives that define my creative journey"
          as="p"
          delay={0.4}
          staggerChildren={0.01}
        />
      </motion.div>

      <section ref={portfolioGridRef} className={styles.portfolioGrid}>
        <div className={styles.maxWidthContainer}>
          {portfolio.projects.map((project, index) => {
            // Use the image path directly from the project data
            const imageSrc = project.image;
            return (
              <motion.div 
                key={project.id}
                className={styles.portfolioItem}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.1 * index,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                whileHover={{ y: -10 }}
              >
                  <Link href={project.url}>
                    <div className={styles.projectImageWrapper}>
                      <div style={{ position: 'relative', width: '100%', height: '550px' }}>
                        <Image 
                          src={imageSrc} 
                          alt={project.title} 
                          fill
                          priority={index < 2}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <motion.div 
                        className={styles.projectOverlay}
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                      >
                        <div className={styles.punchlineWrapper}>
                          <span className={styles.punchline}>
                            {getProjectPunchline(index, project.title)}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                    <motion.div 
                      className={styles.projectInfo}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <h3>{project.title}</h3>
                      <div className={styles.projectCategory}>
                        <span>{getProjectCategory(index)}</span>
                      </div>
                    </motion.div>
                  </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
