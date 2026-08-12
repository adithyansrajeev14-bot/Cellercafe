'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ChevronDown, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const HeroSection: React.FC = () => {
  const { setIsCartOpen } = useCart();

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/celler_hero_bg_1786539072525.jpg"
          alt="Celler Cafe Interior"
          className="w-full h-full object-cover scale-105 animate-pulse-glow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/75 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,11,10,0.8)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold tracking-widest uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Artisan Roastery & Gourmet Cafe</span>
        </motion.div>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#f7f4ef] leading-[1.05] mb-4"
        >
          CELLER CAFE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-[#c5a059] font-medium mb-6 gold-gradient-text"
        >
          “Good Coffee. Great Moments.”
        </motion.p>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-base text-[#a8a096] leading-relaxed mb-10 font-sans"
        >
          Welcome to Celler Cafe — an urban sanctuary where single-origin Arabica roasts, handcrafted desserts, and warm conversations flow naturally in a cozy luxury atmosphere.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll('#menu')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#c5a059]/20 group"
          >
            <Coffee className="w-4 h-4" />
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-[#f7f4ef] hover:border-[#c5a059]/50 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Order Online</span>
          </button>

          <button
            onClick={() => handleScroll('#location')}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-white/10 hover:border-white/20 text-[#a8a096] hover:text-[#f7f4ef] font-medium text-sm transition-all"
          >
            <span>Visit Us</span>
          </button>
        </motion.div>

        {/* Highlight Ticker Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-[#a8a096] w-full max-w-4xl"
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>100% Single-Origin</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span>In-House Bakery</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
            <span>4.9★ Rated (1,200+)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Coffee className="w-4 h-4 text-[#c5a059]" />
            <span>Wayanad & Coorg Beans</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#a8a096] hover:text-[#c5a059] transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1 group-hover:translate-y-0.5 transition-transform">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a059]" />
      </button>
    </section>
  );
};
