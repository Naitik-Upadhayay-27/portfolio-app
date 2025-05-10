'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/data';
import styles from './page.module.scss';

const ShowReelPage = () => {
  const { showreel } = portfolioData;

  return (
    <div className={styles.showReelPage}>
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {showreel.title}
      </motion.h1>
      
      <motion.div 
        className={styles.videoContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.videoWrapper}>
          <video
            src={showreel.videoUrl}
            title="Show Reel"
            controls
            poster="https://i.pinimg.com/originals/9d/44/75/9d44754c4da6e9ee1eff104b38095e4c.jpg"
            className={styles.videoPlayer}
          ></video>
        </div>
      </motion.div>
      
      <motion.p 
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {showreel.description}
      </motion.p>
      
      <motion.div 
        className={styles.additionalVideos}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Featured Work</h2>
        <div className={styles.videoGrid}>
          {/* Project 1 */}
          <motion.div 
            className={styles.videoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.videoPlaceholder}>
              <div className="relative w-full h-full">
                <Image 
                  src="https://i.pinimg.com/originals/9d/44/75/9d44754c4da6e9ee1eff104b38095e4c.jpg"
                  alt="Echoes of Heritage"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            <h3>Echoes of Heritage – Cultural Festival Branding</h3>
            <p>Led the visual identity for a cultural festival celebrating indigenous art. Created a unique blend of tribal patterns with modern minimalism across posters, merchandise, and stage design.</p>
            <a href="#" className={styles.projectLink}>View Project</a>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className={styles.videoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.videoPlaceholder}>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1613336026275-d6d473084e85"
                  alt="Aurora Tech"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            <h3>Aurora Tech – Futuristic Product Launch Campaign</h3>
            <p>Directed the brand visuals for an AI-based product launch. Built a sleek visual language using dark modes, neon gradients, and geometric UI concepts for web, mobile, and media rollout.</p>
            <a href="#" className={styles.projectLink}>View Project</a>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            className={styles.videoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.videoPlaceholder}>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3"
                  alt="In Bloom"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            <h3>In Bloom – Sustainable Fashion Campaign</h3>
            <p>A nature-inspired art direction project for an eco-conscious fashion brand. Shot on-location using soft ambient lighting and floral palettes to highlight organic materials and ethical style.</p>
            <a href="#" className={styles.projectLink}>View Project</a>
          </motion.div>

          {/* Project 4 */}
          <motion.div 
            className={styles.videoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.videoPlaceholder}>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279"
                  alt="Café Noir"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            <h3>Café Noir – Boutique Coffee Packaging & Brand Design</h3>
            <p>Handled the complete brand identity for a luxury coffee brand. Designed packaging, label illustrations, and store graphics centered around deep tones and elegant serif fonts.</p>
            <a href="#" className={styles.projectLink}>View Project</a>
          </motion.div>

          {/* Project 5 */}
          <motion.div 
            className={styles.videoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={styles.videoPlaceholder}>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1605812276723-c31bb1a68a21"
                  alt="Mythos"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            <h3>Mythos – Motion Graphics for Streaming Series</h3>
            <p>Worked on the series branding and intro visuals using dramatic lighting, ancient script overlays, and smoke effects to establish a mysterious, epic tone.</p>
            <a href="#" className={styles.projectLink}>View Project</a>
          </motion.div>

          {/* Project 6 */}
          <motion.div 
            className={styles.videoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className={styles.videoPlaceholder}>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3"
                  alt="Neon Drift"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            <h3>Neon Drift – Music Video Visual Art Direction</h3>
            <p>Art-directed a synthwave-inspired music video. Oversaw lighting, set design, and VFX to create a kinetic, neon-soaked atmosphere capturing themes of nostalgia and motion.</p>
            <a href="#" className={styles.projectLink}>View Project</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowReelPage;
