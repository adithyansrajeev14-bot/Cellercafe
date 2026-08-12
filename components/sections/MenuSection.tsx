'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Leaf, Sparkles, Plus, Coffee, Filter, Check } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../../data/menuData';
import { useCart } from '../../context/CartContext';
import { ItemModal } from '../ItemModal';

export const MenuSection: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'All' && item.category !== activeCategory) {
        return false;
      }
      // Veg match
      if (vegOnly && !item.isVeg) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(q);
        const descMatch = item.description.toLowerCase().includes(q);
        const categoryMatch = item.category.toLowerCase().includes(q);
        return nameMatch || descMatch || categoryMatch;
      }
      return true;
    });
  }, [activeCategory, searchQuery, vegOnly]);

  return (
    <section id="menu" className="py-24 bg-[#0e0d0b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#8c5a3c]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#c5a059] uppercase block mb-3">
            EXPLORE OUR OFFERINGS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#f7f4ef] tracking-tight mb-4">
            Artisan Menu
          </h2>
          <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
            Freshly micro-roasted coffees, organic herbal infusions, artisan sourdough toasts, and delectable desserts.
          </p>
        </div>

        {/* Filters & Search Controls Bar */}
        <div className="space-y-6 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar scroll-smooth justify-start sm:justify-center">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#c5a059] text-black shadow-lg shadow-[#c5a059]/20'
                    : 'bg-[#1a1816] text-[#a8a096] hover:text-[#f7f4ef] hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar & Veg Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-[#a8a096] absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search menu (e.g. Latte, Tiramisu, Croissant)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-xs text-[#f7f4ef] placeholder-[#a8a096]/60 focus:outline-none focus:border-[#c5a059] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-[#a8a096] hover:text-[#f7f4ef]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg Toggle */}
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`px-4 py-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 transition-all w-full sm:w-auto justify-center ${
                vegOnly
                  ? 'border-emerald-500 bg-emerald-950/40 text-emerald-400'
                  : 'border-white/10 bg-[#181614] text-[#a8a096] hover:border-white/20'
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Veg Only</span>
              {vegOnly && <Check className="w-3.5 h-3.5 ml-1" />}
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#141210] rounded-3xl border border-white/5 max-w-md mx-auto">
            <Coffee className="w-12 h-12 text-[#c5a059] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-serif font-semibold text-[#f7f4ef] mb-1">No items found</h3>
            <p className="text-xs text-[#a8a096]">Try adjusting your search terms or category filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setVegOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/10 text-xs text-[#f7f4ef] hover:bg-white/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#c5a059]/40 transition-all flex flex-col justify-between group hover:shadow-2xl"
                >
                  <div className="p-5 flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-[#181614] border border-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          {item.isVeg ? (
                            <span className="w-3.5 h-3.5 rounded border border-emerald-500 flex items-center justify-center p-0.5" title="Vegetarian">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            </span>
                          ) : (
                            <span className="w-3.5 h-3.5 rounded border border-red-500 flex items-center justify-center p-0.5" title="Non-Vegetarian">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            </span>
                          )}

                          {item.isPopular && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c5a059]/20 text-[#c5a059] font-medium border border-[#c5a059]/30">
                              Popular
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif font-bold text-base text-[#f7f4ef] group-hover:text-[#c5a059] transition-colors truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#a8a096] line-clamp-2 mt-1 leading-snug">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        <span className="font-bold text-base text-[#c5a059]">₹{item.price}</span>
                        <button
                          onClick={() => setSelectedItemForModal(item)}
                          className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#c5a059] hover:text-black text-[#f7f4ef] text-xs font-semibold transition-colors flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Item Customization Modal */}
      <ItemModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
      />
    </section>
  );
};
