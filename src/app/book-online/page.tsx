'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/data';
import styles from './page.module.scss';

interface BookingService {
  id: string;
  name: string;
  duration: string;
  type: string;
  description: string;
  image: string;
}

const BookingPage = () => {
  const { booking } = portfolioData;

  return (
    <div className={styles.bookingPage}>
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {booking.title}
      </motion.h1>
      
      <div className={styles.bookingServices}>
        {booking.services.map((service: BookingService, index: number) => (
          <motion.div 
            key={index}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
          >
            <div className={styles.serviceImageContainer}>
              <Image 
                src={service.image}
                alt={service.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.serviceInfo}>
                <h2 className={styles.serviceName}>{service.name}</h2>
                <p className={styles.serviceDuration}>{service.duration}</p>
                <p className={styles.serviceType}>{service.type}</p>
              </div>
              <Link href={`/booking-calendar/${service.id}`} className={styles.bookNowButton}>
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
