'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../../data/menuData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0c0b0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#c5a059]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GUEST REVIEWS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#f7f4ef] tracking-tight mb-4">
            Words From Our Guests
          </h2>
          <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
            Rated 4.9 out of 5 stars by over 1,200 coffee lovers and gourmet diners.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-[#c5a059]/40 transition-all flex flex-col justify-between relative group shadow-xl"
            >
              <Quote className="w-10 h-10 text-[#c5a059]/20 absolute top-6 right-6 group-hover:text-[#c5a059]/40 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#c5a059] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-[#f7f4ef]/90 leading-relaxed italic mb-8">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Customer Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#c5a059]/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-base text-[#f7f4ef]">{review.name}</h4>
                  <p className="text-xs text-[#a8a096]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
