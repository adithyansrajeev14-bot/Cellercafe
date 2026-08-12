'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShoppingBag, ArrowRight, Star, Leaf } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../../data/menuData';
import { useCart } from '../../context/CartContext';
import { ItemModal } from '../ItemModal';

export const SpecialsSection: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  const specials = MENU_ITEMS.filter((item) => item.isSignature);

  return (
    <section id="specials" className="py-24 bg-[#0c0b0a] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a059]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVES & SIGNATURES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#f7f4ef] tracking-tight mb-4">
            The Celler Specials
          </h2>
          <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
            Handcrafted by our master baristas using rare single-origin roasts, edible 24K gold flakes, and slow cold extraction.
          </p>
        </div>

        {/* Specials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Product Image Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-[#181614]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent opacity-90" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-[#c5a059] text-black text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Special
                  </span>
                  {item.isVeg && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-medium flex items-center gap-1">
                      <Leaf className="w-3 h-3" /> Veg
                    </span>
                  )}
                </div>

                {/* Price Tag Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] font-bold text-lg">
                  ₹{item.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#f7f4ef] group-hover:text-[#c5a059] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#a8a096] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Tag Pills */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#a8a096]">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => setSelectedItemForModal(item)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#c5a059] text-black font-semibold text-xs hover:bg-[#e2c17c] transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#c5a059]/10"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order Now</span>
                  </button>
                  <button
                    onClick={() => setSelectedItemForModal(item)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#f7f4ef] text-xs transition-colors border border-white/10"
                    title="Customize"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Item Modal */}
      <ItemModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
      />
    </section>
  );
};
