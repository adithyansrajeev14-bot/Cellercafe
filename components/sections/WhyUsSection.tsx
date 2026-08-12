'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Cake, Leaf, Heart, Sparkles } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      tagline: '100% Single-Origin Arabica',
      description: 'Ethically sourced high-altitude beans roasted to highlight velvety chocolate, stone fruit, and delicate caramel notes.',
    },
    {
      icon: Cake,
      title: 'Freshly Made',
      titleIcon: '🍰',
      tagline: 'In-House Daily Bakery',
      description: 'Artisanal butter croissants, flaky pastries, and rich Italian desserts baked fresh every single morning by our chef.',
    },
    {
      icon: Leaf,
      title: 'Quality Ingredients',
      titleIcon: '🌿',
      tagline: 'Pure & Organic Sourcing',
      description: 'Locally farmed organic dairy, wild raw honey, single-estate teas, and zero artificial preservatives.',
    },
    {
      icon: Heart,
      title: 'Crafted With Care',
      titleIcon: '❤️',
      tagline: 'A Cozy Luxury Haven',
      description: 'Warm ambient lighting, comfortable leather seating, soothing jazz, and friendly baristas dedicated to your comfort.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0c0b0a] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8c5a3c]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#c5a059] uppercase block mb-3">
            THE CELLER STANDARD
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#f7f4ef] tracking-tight mb-4">
            Why Choose Celler Cafe
          </h2>
          <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
            We believe that a great cafe is defined by uncompromising quality, honest hospitality, and an atmosphere that inspires.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComp = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 border border-white/10 hover:border-[#c5a059]/40 transition-all flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c5a059]/20 to-[#8c5a3c]/20 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#f7f4ef] group-hover:text-[#c5a059] transition-colors mb-1">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#c5a059] block mb-3">
                    {feature.tagline}
                  </span>
                  <p className="text-xs text-[#a8a096] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#a8a096] group-hover:text-[#f7f4ef] transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Uncompromised Quality</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
