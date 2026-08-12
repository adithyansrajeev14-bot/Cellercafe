'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../../data/menuData';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Coffee', 'Interior', 'Desserts', 'Atmosphere'];

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0e0d0b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#c5a059] uppercase block mb-3">
            A VISUAL JOURNEY
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#f7f4ef] tracking-tight mb-4">
            Gallery & Moments
          </h2>
          <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
            Step inside Celler Cafe. Experience the warmth, artisanal craftsmanship, and cozy ambiance through our lens.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#c5a059] text-black shadow-lg shadow-[#c5a059]/20'
                  : 'bg-[#181614] text-[#a8a096] hover:text-[#f7f4ef] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="relative h-80 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#c5a059] mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#f7f4ef] mb-1">{item.title}</h3>
                  <p className="text-xs text-[#a8a096] line-clamp-2">{item.description}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#c5a059]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-[#141210] border border-[#c5a059]/40 rounded-3xl overflow-hidden shadow-2xl text-[#f7f4ef]"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[65vh] w-full bg-black flex items-center justify-center">
                <img
                  src={filteredGallery[selectedImageIndex].image}
                  alt={filteredGallery[selectedImageIndex].title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 bg-[#181614] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
                    {filteredGallery[selectedImageIndex].category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#f7f4ef]">
                    {filteredGallery[selectedImageIndex].title}
                  </h3>
                  <p className="text-xs text-[#a8a096] mt-1">
                    {filteredGallery[selectedImageIndex].description}
                  </p>
                </div>
                <div className="text-xs text-[#a8a096] shrink-0">
                  {selectedImageIndex + 1} / {filteredGallery.length}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
