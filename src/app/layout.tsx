import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import './globals.scss';

export const metadata: Metadata = {
  title: 'John Doe - Art Director & Designer',
  description: 'Portfolio of John Doe, Art Director and Designer specializing in brand identity and digital experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
