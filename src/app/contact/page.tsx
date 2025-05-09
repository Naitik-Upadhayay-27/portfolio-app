'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './page.module.scss';

const ContactPage = () => {
  const router = useRouter();
  
  React.useEffect(() => {
    // Redirect to book-online page since we've replaced contact with book-online
    router.push('/book-online');
  }, [router]);

  return (
    <div className={styles.redirectPage}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Redirecting to booking page...</h1>
      </motion.div>
    </div>
  );
};

export default ContactPage;
