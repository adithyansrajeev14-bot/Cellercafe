'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Sparkles, Check, Leaf } from 'lucide-react';
import { MenuItem } from '../data/menuData';
import { useCart } from '../context/CartContext';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();
  const [selectedMilk, setSelectedMilk] = useState<string>('');
  const [selectedSweetness, setSelectedSweetness] = useState<string>('');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [prevItemId, setPrevItemId] = useState<string | null>(null);

  if (item && item.id !== prevItemId) {
    setPrevItemId(item.id);
    setSelectedMilk(item.customizations?.milk?.[0] || '');
    setSelectedSweetness(item.customizations?.sweetness?.[0] || '');
    setSelectedExtras([]);
    setNotes('');
    setQuantity(1);
  }

  if (!item) return null;

  // Calculate price with extras
  let extraPrice = 0;
  if (selectedExtras.length > 0 && item.customizations?.extras) {
    selectedExtras.forEach((extraName) => {
      const found = item.customizations?.extras?.find((e) => e.name === extraName);
      if (found) extraPrice += found.price;
    });
  }
  const itemUnitPrice = item.price + extraPrice;
  const totalPrice = itemUnitPrice * quantity;

  const toggleExtra = (extraName: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraName) ? prev.filter((e) => e !== extraName) : [...prev, extraName]
    );
  };

  const handleAddToCart = () => {
    addToCart(
      item,
      {
        milk: selectedMilk || undefined,
        sweetness: selectedSweetness || undefined,
        selectedExtras,
        notes: notes.trim() || undefined,
      },
      quantity
    );
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#161412] border border-[#c5a059]/30 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-[#f7f4ef]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-[#f7f4ef] flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image header */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-[#161412]/40 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  {item.isVeg ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-medium flex items-center gap-1">
                      <Leaf className="w-3 h-3" /> Veg
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-medium">
                      Non-Veg
                    </span>
                  )}
                  {item.isSignature && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059] text-xs font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Signature
                    </span>
                  )}
                  {item.category && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-medium text-white/80">
                      {item.category}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#f7f4ef]">{item.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#a8a096] block">Price</span>
                <span className="text-2xl font-bold text-[#c5a059]">₹{item.price}</span>
              </div>
            </div>
          </div>

          {/* Modal content body */}
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            <p className="text-sm text-[#a8a096] leading-relaxed">{item.description}</p>

            {item.calories && (
              <div className="text-xs text-[#a8a096] flex items-center gap-2 bg-[#201d1a] p-3 rounded-xl border border-white/5">
                <span className="font-semibold text-[#f7f4ef]">Approx. Energy:</span> {item.calories} kcal
              </div>
            )}

            {/* Customization: Milk */}
            {item.customizations?.milk && item.customizations.milk.length > 0 && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-3">
                  Choice of Milk
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {item.customizations.milk.map((milk) => (
                    <button
                      key={milk}
                      type="button"
                      onClick={() => setSelectedMilk(milk)}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all flex items-center justify-between ${
                        selectedMilk === milk
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      <span>{milk}</span>
                      {selectedMilk === milk && <Check className="w-4 h-4 text-[#c5a059]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Customization: Sweetness */}
            {item.customizations?.sweetness && item.customizations.sweetness.length > 0 && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-3">
                  Sweetness Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {item.customizations.sweetness.map((sweet) => (
                    <button
                      key={sweet}
                      type="button"
                      onClick={() => setSelectedSweetness(sweet)}
                      className={`p-3 rounded-xl text-xs font-medium text-center border transition-all ${
                        selectedSweetness === sweet
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      {sweet}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Customization: Extras */}
            {item.customizations?.extras && item.customizations.extras.length > 0 && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-3">
                  Add Extras
                </label>
                <div className="space-y-2">
                  {item.customizations.extras.map((extra) => {
                    const isChecked = selectedExtras.includes(extra.name);
                    return (
                      <button
                        key={extra.name}
                        type="button"
                        onClick={() => toggleExtra(extra.name)}
                        className={`w-full p-3 rounded-xl text-xs font-medium text-left border transition-all flex items-center justify-between ${
                          isChecked
                            ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                            : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked ? 'border-[#c5a059] bg-[#c5a059]' : 'border-white/30'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-black" />}
                          </div>
                          <span>{extra.name}</span>
                        </div>
                        <span className="text-[#c5a059]">+₹{extra.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                Special Instructions
              </label>
              <input
                type="text"
                placeholder="e.g. Extra hot, no whipped cream..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#201d1a] border border-white/10 rounded-xl p-3 text-xs text-[#f7f4ef] placeholder-[#a8a096]/50 focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-6 border-t border-white/10 bg-[#12100e] flex items-center justify-between gap-4">
            {/* Quantity selector */}
            <div className="flex items-center bg-[#201d1a] border border-white/10 rounded-2xl p-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[#a8a096] hover:text-[#f7f4ef] hover:bg-white/10 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-bold text-sm text-[#f7f4ef]">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[#a8a096] hover:text-[#f7f4ef] hover:bg-white/10 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Order button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c5a059]/20 active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Order • ₹{totalPrice}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
