'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/data';
import styles from './page.module.scss';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
}

const BookingCalendarServicePage = () => {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.serviceId as string;
  
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [step, setStep] = useState<'calendar' | 'details'>('calendar');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<Array<{date: Date | null, isCurrentMonth: boolean, isAvailable: boolean}>>([]);
  
  // Find the selected service from the data
  const service = portfolioData.booking.services.find(s => s.id === serviceId);
  
  // Generate calendar days for the current month view
  useEffect(() => {
    const days = [];
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    
    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ date: null, isCurrentMonth: false, isAvailable: false });
    }
    
    // Add days of the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const today = new Date();
      // Make days in the past unavailable
      const isPastDay = date < new Date(today.setHours(0, 0, 0, 0));
      // Randomly make some future days available (in a real app, this would come from a backend)
      const isAvailable = !isPastDay && Math.random() > 0.3;
      
      days.push({ 
        date, 
        isCurrentMonth: true, 
        isAvailable
      });
    }
    
    setCalendarDays(days);
  }, [currentMonth]);
  
  // Generate time slots for the selected date
  const getTimeSlots = () => {
    // In a real app, these would be fetched from a backend based on the selected date
    return [
      { time: '11:00 am', available: true },
      { time: '11:30 am', available: true },
      { time: '12:00 pm', available: true },
      { time: '12:30 pm', available: true },
      { time: '1:00 pm', available: true },
      { time: '1:30 pm', available: true },
      { time: '2:00 pm', available: true },
      { time: '2:30 pm', available: true },
      { time: '3:00 pm', available: true },
      { time: '3:30 pm', available: true }
    ];
  };
  
  if (!service) {
    return (
      <div className={styles.errorContainer}>
        <h2>Service not found</h2>
        <Link href="/book-online" className={styles.backLink}>
          Back to Services
        </Link>
      </div>
    );
  }
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const handleDateSelect = (date: Date | null) => {
    if (date) {
      setSelectedDate(date.toISOString().split('T')[0]);
    }
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData({
      ...formData,
      date: selectedDate || '',
      time: time
    });
    setStep('details');
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the booking data to a server
    console.log('Booking submitted:', { service, ...formData });
    alert('Your booking has been scheduled. Thank you!');
    router.push('/book-online');
  };
  
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };
  
  return (
    <div className={styles.bookingCalendarPage}>
      <motion.h1 
        className={styles.pageTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Schedule your service
      </motion.h1>
      
      <motion.p
        className={styles.pageSubtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Check out our availability and book the date and time that works for you
      </motion.p>
      
      {step === 'calendar' ? (
        <div className={styles.bookingContainer}>
          <div className={styles.calendarSection}>
            <div className={styles.calendarHeader}>
              <h2>Select a Date and Time</h2>
              <div className={styles.timeZoneInfo}>Pacific Daylight Time (PDT)</div>
            </div>
            
            <div className={styles.calendarWrapper}>
              <div className={styles.monthNavigation}>
                <button 
                  className={styles.monthNavButton} 
                  onClick={handlePrevMonth}
                  aria-label="Previous month"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={styles.currentMonth}>
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
                <button 
                  className={styles.monthNavButton} 
                  onClick={handleNextMonth}
                  aria-label="Next month"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className={styles.calendarGrid}>
                <div className={styles.weekdayHeader}>Sun</div>
                <div className={styles.weekdayHeader}>Mon</div>
                <div className={styles.weekdayHeader}>Tue</div>
                <div className={styles.weekdayHeader}>Wed</div>
                <div className={styles.weekdayHeader}>Thu</div>
                <div className={styles.weekdayHeader}>Fri</div>
                <div className={styles.weekdayHeader}>Sat</div>
                
                {calendarDays.map((day, index) => (
                  <div 
                    key={index}
                    className={`
                      ${styles.calendarDay} 
                      ${!day.date ? styles.emptyDay : ''}
                      ${day.date && !day.isAvailable ? styles.unavailableDay : ''}
                      ${day.date && day.isAvailable ? styles.availableDay : ''}
                      ${selectedDate && day.date && day.date.toISOString().split('T')[0] === selectedDate ? styles.selectedDay : ''}
                    `}
                    onClick={() => day.date && day.isAvailable && handleDateSelect(day.date)}
                  >
                    {day.date && (
                      <>
                        <span className={styles.dayNumber}>{day.date.getDate()}</span>
                        {day.isAvailable && <span className={styles.availabilityDot}></span>}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {selectedDate && (
              <motion.div 
                className={styles.timeSelection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.timeSelectionHeader}>
                  Availability for {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric'
                  })}
                </h3>
                <div className={styles.timeSlotGrid}>
                  {getTimeSlots().map((slot, index) => (
                    <motion.button 
                      key={index}
                      className={styles.timeSlot}
                      onClick={() => handleTimeSelect(slot.time)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {slot.time}
                    </motion.button>
                  ))}
                </div>
                <button className={styles.showAllSessions}>Show all sessions</button>
              </motion.div>
            )}
          </div>
          
          <div className={styles.serviceDetails}>
            <h3>Service Details</h3>
            <div className={styles.serviceCard}>
              <h4>{service.name}</h4>
              <div className={styles.serviceInfo}>
                {selectedDate ? (
                  <p className={styles.selectedDateTime}>
                    {new Date(selectedDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })} at {selectedTime || '(select a time)'}
                  </p>
                ) : (
                  <p>(Select a date and time)</p>
                )}
                <p>Staff Member #1</p>
                <p>{service.duration}</p>
                <p>{service.type}</p>
              </div>
              
              <button 
                className={styles.nextButton}
                disabled={!selectedDate || !selectedTime}
                onClick={() => selectedDate && selectedTime && setStep('details')}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div 
          className={styles.detailsSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className={styles.bookingFormTitle}>Booking Form</h2>
          
          <form onSubmit={handleSubmit} className={styles.bookingForm}>
            <div className={styles.formColumns}>
              <div className={styles.clientDetailsColumn}>
                <h3 className={styles.columnTitle}>Client Details</h3>
                
                <div className={styles.accountSection}>
                  <p>Have an account? <a href="#" className={styles.loginLink}>Log in</a></p>
                </div>
                
                <div className={styles.nameFields}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First name <span className={styles.required}>*</span></label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.name.split(' ')[0] || ''} 
                      onChange={(e) => {
                        const lastName = formData.name.split(' ').slice(1).join(' ');
                        setFormData({
                          ...formData,
                          name: `${e.target.value} ${lastName}`.trim()
                        });
                      }} 
                      required 
                      placeholder="First name"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last name <span className={styles.required}>*</span></label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.name.split(' ').slice(1).join(' ') || ''} 
                      onChange={(e) => {
                        const firstName = formData.name.split(' ')[0] || '';
                        setFormData({
                          ...formData,
                          name: `${firstName} ${e.target.value}`.trim()
                        });
                      }} 
                      required 
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                <div className={styles.contactFields}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email <span className={styles.required}>*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <div className={styles.phoneInputWrapper}>
                      <div className={styles.countryCode}>+1</div>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Add your message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleInputChange}
                    placeholder="Any special requests or information"
                  ></textarea>
                </div>
              </div>
              
              <div className={styles.bookingDetailsColumn}>
                <h3 className={styles.columnTitle}>Booking Details</h3>
                
                <div className={styles.bookingSummaryCard}>
                  <h4 className={styles.serviceName}>{service.name}</h4>
                  <p className={styles.dateTime}>
                    {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })} at {selectedTime}
                  </p>
                  <p className={styles.staffMember}>Staff Member #1</p>
                  <p className={styles.duration}>{service.duration}</p>
                </div>
                
                <div className={styles.paymentSection}>
                  <h4 className={styles.sectionTitle}>Payment Details</h4>
                  <p className={styles.serviceType}>{service.type}</p>
                </div>
                
                <div className={styles.consentSection}>
                  <p className={styles.consentText}>
                    By completing your booking, you agree to receive related SMS notifications.
                  </p>
                </div>
                
                <button 
                  type="submit" 
                  className={styles.bookNowButton}
                >
                  Book Now
                </button>
              </div>
            </div>
            
            <div className={styles.formActions}>
              <button 
                type="button" 
                className={styles.backButton}
                onClick={() => setStep('calendar')}
              >
                Back to Calendar
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default BookingCalendarServicePage;
