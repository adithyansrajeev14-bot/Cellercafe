'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Clock, MapPin, Phone, User, CreditCard, Sparkles, Coffee, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, total, clearCart, subtotal, taxAmount, discountAmount } = useCart();

  const [orderType, setOrderType] = useState<'DineIn' | 'Takeaway'>('DineIn');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tableNumber, setTableNumber] = useState('Table 04');
  const [pickupTime, setPickupTime] = useState('In 20 mins');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Counter'>('UPI');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formError, setFormError] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setFormError('Please enter a valid phone number.');
      return;
    }

    setFormError('');
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrderId = `CELLER-ORD-${randomNum}`;
    setOrderId(newOrderId);
    setIsSubmitted(true);
  };

  const handleFinish = () => {
    clearCart();
    setIsSubmitted(false);
    setIsCheckoutOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (!isSubmitted) setIsCheckoutOpen(false);
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#161412] border border-[#c5a059]/40 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-[#f7f4ef]"
        >
          {/* Close button */}
          <button
            onClick={() => {
              if (isSubmitted) handleFinish();
              else setIsCheckoutOpen(false);
            }}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[#f7f4ef] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 bg-[#1a1815]">
                <h3 className="text-2xl font-serif font-bold text-[#f7f4ef]">Checkout & Confirm</h3>
                <p className="text-xs text-[#a8a096] mt-1">
                  Complete your order details below for instant table service or quick pickup.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmitOrder} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {formError && (
                  <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-300 text-xs font-medium">
                    {formError}
                  </div>
                )}

                {/* 1. Order Type Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-3">
                    1. Order Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setOrderType('DineIn')}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        orderType === 'DineIn'
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1 text-[#f7f4ef]">☕ Dine-In Table Service</div>
                      <div className="text-xs text-[#a8a096]">Served fresh to your table</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('Takeaway')}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        orderType === 'Takeaway'
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1 text-[#f7f4ef]">🛍️ Express Takeaway</div>
                      <div className="text-xs text-[#a8a096]">Prepared for quick counter pickup</div>
                    </button>
                  </div>
                </div>

                {/* 2. Customer Contact */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-3">
                    2. Contact Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#a8a096] mb-1">Your Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#a8a096] absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aarav Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#201d1a] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#f7f4ef] focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#a8a096] mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#a8a096] absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#201d1a] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#f7f4ef] focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    {orderType === 'DineIn' ? (
                      <div className="sm:col-span-2">
                        <label className="block text-xs text-[#a8a096] mb-1">Table Number or Seating Area</label>
                        <select
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          className="w-full bg-[#201d1a] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-[#f7f4ef] focus:outline-none focus:border-[#c5a059]"
                        >
                          <option value="Table 01 (Window View)">Table 01 (Window View)</option>
                          <option value="Table 02 (Main Floor)">Table 02 (Main Floor)</option>
                          <option value="Table 03 (Cozy Leather Sofa)">Table 03 (Cozy Leather Sofa)</option>
                          <option value="Table 04 (Standard)">Table 04 (Standard)</option>
                          <option value="Patio Table P2 (Outdoor)">Patio Table P2 (Outdoor)</option>
                          <option value="Bar Counter Stool B1">Bar Counter Stool B1</option>
                        </select>
                      </div>
                    ) : (
                      <div className="sm:col-span-2">
                        <label className="block text-xs text-[#a8a096] mb-1">Target Pickup Time</label>
                        <select
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full bg-[#201d1a] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-[#f7f4ef] focus:outline-none focus:border-[#c5a059]"
                        >
                          <option value="As soon as possible (~15 mins)">As soon as possible (~15 mins)</option>
                          <option value="In 30 mins">In 30 mins</option>
                          <option value="In 45 mins">In 45 mins</option>
                          <option value="In 1 hour">In 1 hour</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Payment Method */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-3">
                    3. Payment Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('UPI')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        paymentMethod === 'UPI'
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#f7f4ef]">📱 UPI / GPay</div>
                      <div className="text-[10px] text-[#a8a096] mt-0.5">Scan QR on arrival</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('Card')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        paymentMethod === 'Card'
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#f7f4ef]">💳 Card Machine</div>
                      <div className="text-[10px] text-[#a8a096] mt-0.5">Tap & Pay</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('Counter')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        paymentMethod === 'Counter'
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#201d1a] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#f7f4ef]">💵 Cash</div>
                      <div className="text-[10px] text-[#a8a096] mt-0.5">Pay at counter</div>
                    </button>
                  </div>
                </div>

                {/* Order Breakdown */}
                <div className="p-4 rounded-2xl bg-[#1c1916] border border-white/5 space-y-2 text-xs">
                  <div className="font-semibold text-[#f7f4ef] mb-2 flex items-center justify-between">
                    <span>Order Summary ({cart.length} items)</span>
                    <span className="text-[#c5a059]">Total: ₹{total}</span>
                  </div>
                  {cart.map((item) => (
                    <div key={item.cartItemId} className="flex justify-between text-[#a8a096]">
                      <span>
                        {item.quantity}x {item.menuItem.name}
                      </span>
                      <span>₹{item.unitPrice * item.quantity}</span>
                    </div>
                  ))}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Discount</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#a8a096] pt-1 border-t border-white/10">
                    <span>GST (5%)</span>
                    <span>₹{taxAmount}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#c5a059]/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Order • ₹{total}</span>
                </button>
              </form>
            </div>
          ) : (
            /* Order Success View */
            <div className="p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#c5a059]/20 border-2 border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#c5a059] text-xs font-semibold tracking-wider uppercase border border-[#c5a059]/40">
                  Order Successfully Placed
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#f7f4ef] mt-3">Thank You, {name}!</h3>
                <p className="text-xs text-[#a8a096] mt-2 max-w-sm mx-auto">
                  Your order reference code is <strong className="text-[#c5a059]">{orderId}</strong>. Our barista has received your ticket!
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1c1916] border border-white/10 text-left space-y-3 text-xs max-w-md mx-auto">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[#a8a096]">Service Mode:</span>
                  <span className="font-semibold text-[#f7f4ef]">
                    {orderType === 'DineIn' ? `Dine-In (${tableNumber})` : `Takeaway (${pickupTime})`}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[#a8a096]">Est. Preparation Time:</span>
                  <span className="font-semibold text-[#c5a059] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 12 – 15 Minutes
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[#a8a096]">Contact Phone:</span>
                  <span className="font-semibold text-[#f7f4ef]">{phone}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[#a8a096]">Total Payable:</span>
                  <span className="font-bold text-base text-[#c5a059]">₹{total}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => alert(`Digital Receipt #${orderId} saved to downloads.`)}
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#f7f4ef] font-medium text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={handleFinish}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#c5a059] hover:bg-[#e2c17c] text-black font-semibold text-xs transition-colors"
                >
                  Back to Celler Cafe
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
