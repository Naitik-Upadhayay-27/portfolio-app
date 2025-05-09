'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/data';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { nav } = portfolioData;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">{nav.logo}</Link>
      </div>
      
      <div className={styles.mobileMenuButton} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {nav.links.map((link, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={link.url} onClick={() => setMenuOpen(false)}>
              {link.text}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
