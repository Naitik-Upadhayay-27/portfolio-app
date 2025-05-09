'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './page.module.scss';

const BookingCalendarPage = () => {
  const router = useRouter();

  // Redirect to the book-online page if no specific service is selected
  React.useEffect(() => {
    router.push('/book-online');
  }, [router]);

  return (
    <div className={styles.loadingContainer}>
      <motion.div
        className={styles.loadingSpinner}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default BookingCalendarPage;
