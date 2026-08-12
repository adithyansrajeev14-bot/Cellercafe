'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Coffee, Calendar, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Visit Us', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#12100e]/90 backdrop-blur-xl border-b border-[#c5a059]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c5a059] to-[#8c5a3c] flex items-center justify-center text-black font-serif font-bold text-xl shadow-lg shadow-[#c5a059]/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#f7f4ef] gold-gradient-text">
                CELLER CAFE
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#c5a059] uppercase -mt-1 font-medium">
                Good Coffee. Great Moments.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium uppercase tracking-widest text-[#f7f4ef]/80 hover:text-[#c5a059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c5a059] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Reservation Button */}
            <a
              href="#reservation"
              onClick={(e) => handleNavClick(e, '#reservation')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#c5a059]/40 bg-[#c5a059]/10 text-[#c5a059] hover:bg-[#c5a059] hover:text-black font-semibold text-xs transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#201d1a] border border-white/10 hover:border-[#c5a059]/50 text-[#f7f4ef] transition-colors flex items-center justify-center"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#c5a059]" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#c5a059] text-black text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Order Now CTA */}
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black font-semibold text-xs hover:brightness-110 transition-all shadow-md shadow-[#c5a059]/15"
            >
              <span>Explore Menu</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#201d1a] border border-white/10 text-[#f7f4ef] hover:text-[#c5a059] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Nav Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] z-30 lg:hidden bg-[#12100e]/95 backdrop-blur-2xl border-b border-[#c5a059]/30 p-6 text-[#f7f4ef] shadow-2xl space-y-6"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[#f7f4ef]/90 hover:text-[#c5a059] transition-colors py-1 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#c5a059]/60 text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href="#reservation"
                onClick={(e) => handleNavClick(e, '#reservation')}
                className="w-full py-3 px-4 rounded-xl border border-[#c5a059]/40 bg-[#c5a059]/10 text-[#c5a059] text-center font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Table</span>
              </a>

              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, '#menu')}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black text-center font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Coffee className="w-4 h-4" />
                <span>Explore Menu</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#a8a096]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Kerala, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
