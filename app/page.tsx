'use client';

import React from 'react';
import { CartProvider } from '../context/CartContext';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SpecialsSection } from '../components/sections/SpecialsSection';
import { MenuSection } from '../components/sections/MenuSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { GallerySection } from '../components/sections/GallerySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ReservationSection } from '../components/sections/ReservationSection';
import { LocationSection } from '../components/sections/LocationSection';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { CheckoutModal } from '../components/CheckoutModal';
import { NotificationToast } from '../components/NotificationToast';

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0c0b0a] text-[#f7f4ef] selection:bg-[#c5a059]/30 font-sans relative overflow-x-hidden">
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <SpecialsSection />
          <MenuSection />
          <WhyUsSection />
          <GallerySection />
          <TestimonialsSection />
          <ReservationSection />
          <LocationSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Drawers & Overlays */}
        <CartDrawer />
        <CheckoutModal />
        <NotificationToast />
      </div>
    </CartProvider>
  );
}
