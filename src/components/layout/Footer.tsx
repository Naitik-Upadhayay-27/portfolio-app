'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/data';
import styles from './Footer.module.scss';

const Footer = () => {
  const { footer } = portfolioData;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.copyright}>
            {footer.copyright}
          </div>
          <div className={styles.social}>
            {footer.social.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
