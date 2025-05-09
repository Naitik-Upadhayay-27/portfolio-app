'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/data';
import styles from './page.module.scss';

const PortfolioPage = () => {
  const { portfolio } = portfolioData;

  return (
    <div className={styles.portfolioPage}>
      <div className="container">
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {portfolio.title}
        </motion.h1>
        
        <div className={styles.projectsGrid}>
          {portfolio.projects.map((project) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <div className={styles.imageContainer}>
                <div className={styles.placeholder} />
                {/* Image placeholder until we have actual images */}
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <button className={styles.viewProject}>View Project</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
