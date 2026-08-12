'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    {
      icon: Coffee,
      title: 'Freshly Brewed',
      value: '100% Single-Origin',
      description: 'Micro-batch Arabica beans roasted to floral, dark-cocoa perfection.',
    },
    {
      icon: Award,
      title: 'Handcrafted',
      value: '50+ Artisanal Recipes',
      description: 'Master baristas & pastry chefs pouring passion into every order.',
    },
    {
      icon: Heart,
      title: 'Made With Love',
      value: '4.9★ Guest Rating',
      description: 'A cozy urban haven where good conversations flourish.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0e0d0b] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8c5a3c]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl group">
              <img
                src="/images/celler_ambiance_1786539099259.jpg"
                alt="Celler Cafe Interior Ambiance"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-transparent to-transparent opacity-80" />

              {/* Inset badge card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-sm font-semibold text-[#f7f4ef]">The Celler Experience</span>
                </div>
                <p className="text-xs text-[#a8a096] leading-relaxed">
                  &ldquo;Celler Cafe is a place where great coffee, delicious food, and good conversations come together seamlessly.&rdquo;
                </p>
              </div>
            </div>

            {/* Overlapping secondary detail frame */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-2xl">
              <img
                src="/images/celler_signature_coffee_1786539085334.jpg"
                alt="Signature Coffee Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#c5a059] uppercase block mb-3">
                OUR STORY & PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f7f4ef] leading-tight mb-6">
                Where Passion Brews In Every Single Detail
              </h2>
              <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed mb-4">
                Founded with a singular vision: to elevate the everyday coffee break into a memorable sensory ritual. At Celler Cafe, we source high-elevation single-origin Arabica beans from sustainable, ethical micro-farms in Wayanad and Coorg.
              </p>
              <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
                Whether you&apos;re starting your morning with our signature 24K Gold Latte, catching up with close friends over artisan desserts, or finding a quiet corner to write, Celler Cafe is designed to be your home away from home.
              </p>
            </div>

            {/* Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#f7f4ef] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>Ethically Sourced Arabica Beans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>In-House Daily Pastry Bakery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>Artisan Temperature Extraction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>Cozy Warm Lighting & Soft Jazz</span>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {stats.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#161412] border border-white/5 space-y-1">
                    <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase">{s.title}</span>
                    </div>
                    <div className="text-base font-serif font-bold text-[#f7f4ef]">{s.value}</div>
                    <p className="text-[11px] text-[#a8a096] leading-snug">{s.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
