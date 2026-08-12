'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, CheckCircle, ArrowRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NotificationToast: React.FC = () => {
  const { lastAddedItem, showAddedNotification, dismissNotification, setIsCartOpen, totalCount } = useCart();

  return (
    <AnimatePresence>
      {showAddedNotification && lastAddedItem && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 rounded-2xl glass-panel border border-[#c5a059]/40 shadow-2xl backdrop-blur-xl bg-[#161412]/90 text-[#f7f4ef]"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 relative border border-[#c5a059]/30">
              <img
                src={lastAddedItem.image}
                alt={lastAddedItem.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c5a059]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Added to Order</span>
              </div>
              <p className="text-sm font-medium text-[#f7f4ef] truncate mt-0.5">{lastAddedItem.name}</p>
              <p className="text-xs text-[#a8a096]">₹{lastAddedItem.price}</p>
            </div>
            <button
              onClick={dismissNotification}
              className="p-1 rounded-lg text-[#a8a096] hover:text-[#f7f4ef] hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-[#a8a096]">{totalCount} item{totalCount > 1 ? 's' : ''} in cart</span>
            <button
              onClick={() => {
                dismissNotification();
                setIsCartOpen(true);
              }}
              className="text-xs font-semibold text-[#c5a059] hover:text-[#e2c17c] flex items-center gap-1 transition-colors"
            >
              <span>View Cart</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
