'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, ArrowRight, CheckCircle2, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountAmount,
    taxAmount,
    total,
    appliedPromo,
    applyPromo,
    removePromo,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    if (res.success) {
      setPromoMessage({ type: 'success', text: res.message });
      setPromoInput('');
    } else {
      setPromoMessage({ type: 'error', text: res.message });
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Drawer content */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute inset-y-0 right-0 max-w-md w-full bg-[#141210] border-l border-[#c5a059]/30 shadow-2xl flex flex-col text-[#f7f4ef]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#191715]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-semibold text-[#f7f4ef]">Your Order</h2>
                <p className="text-xs text-[#a8a096]">{cart.length} unique item{cart.length !== 1 ? 's' : ''}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  title="Clear All"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#a8a096] hover:text-[#f7f4ef] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#a8a096]">
                <div className="w-20 h-20 rounded-full bg-[#201d1a] border border-white/10 flex items-center justify-center mb-4 text-[#c5a059]">
                  <Coffee className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-serif text-[#f7f4ef] mb-2">Your Order Basket is Empty</h3>
                <p className="text-xs text-[#a8a096] max-w-xs leading-relaxed mb-6">
                  Explore our handcrafted coffee, fresh pastries, and gourmet specials to start your order.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 rounded-xl bg-[#c5a059] text-black font-semibold text-xs hover:bg-[#e2c17c] transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="p-4 rounded-2xl bg-[#1d1a17] border border-white/5 flex gap-4 items-center group hover:border-[#c5a059]/30 transition-all"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[#f7f4ef] truncate">{item.menuItem.name}</h4>
                    <p className="text-xs text-[#c5a059] font-medium mt-0.5">₹{item.unitPrice}</p>

                    {item.customization && (
                      <div className="text-[11px] text-[#a8a096] space-y-0.5 mt-1">
                        {item.customization.milk && <div>Milk: {item.customization.milk}</div>}
                        {item.customization.sweetness && <div>Sugar: {item.customization.sweetness}</div>}
                        {item.customization.selectedExtras && item.customization.selectedExtras.length > 0 && (
                          <div>Extras: {item.customization.selectedExtras.join(', ')}</div>
                        )}
                        {item.customization.notes && <div className="italic text-[#a8a096]/80">&ldquo;{item.customization.notes}&rdquo;</div>}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-xs text-[#a8a096] hover:text-red-400 transition-colors p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="flex items-center bg-[#282420] border border-white/10 rounded-xl p-0.5">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-[#a8a096] hover:text-[#f7f4ef] hover:bg-white/10"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center font-bold text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-[#a8a096] hover:text-[#f7f4ef] hover:bg-white/10"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Promo Code & Order Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#181614] space-y-4">
              {/* Promo form */}
              <div>
                {appliedPromo ? (
                  <div className="p-3 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-[#c5a059] font-medium">
                      <Tag className="w-4 h-4" />
                      <span>Code <strong>{appliedPromo.code}</strong> ({appliedPromo.discountPercent}% OFF)</span>
                    </div>
                    <button
                      onClick={removePromo}
                      className="text-[#a8a096] hover:text-[#f7f4ef] text-xs underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Promo code (Try CELLER10)"
                        value={promoInput}
                        onChange={(e) => {
                          setPromoInput(e.target.value);
                          setPromoMessage(null);
                        }}
                        className="w-full bg-[#221f1c] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#f7f4ef] placeholder-[#a8a096]/50 focus:outline-none focus:border-[#c5a059] uppercase"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#f7f4ef] font-medium text-xs transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoMessage && (
                  <p
                    className={`text-[11px] mt-1.5 ${
                      promoMessage.type === 'success' ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-[#a8a096] pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#f7f4ef]">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Promo Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span className="text-[#f7f4ef]">₹{taxAmount}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#f7f4ef] pt-2 border-t border-white/10">
                  <span>Total Amount</span>
                  <span className="text-[#c5a059]">₹{total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#c5a059]/15 active:scale-[0.99]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
