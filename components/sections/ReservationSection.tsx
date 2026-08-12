'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, User, Mail, Phone, Sparkles, CheckCircle2, MessageSquare, Download, X } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState('2 Guests');
  const [seatingArea, setSeatingArea] = useState('Cozy Indoor Lounge');
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [formError, setFormError] = useState('');

  const timeSlots = [
    '09:00 AM',
    '11:30 AM',
    '01:30 PM',
    '04:00 PM',
    '06:30 PM',
    '08:00 PM',
    '09:30 PM',
  ];

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setFormError('Please enter a valid phone number.');
      return;
    }
    if (!date) {
      setFormError('Please select a date for your reservation.');
      return;
    }

    setFormError('');
    const code = `CELLER-RES-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(code);
    setIsSubmitted(true);
  };

  return (
    <section id="reservation" className="py-24 bg-[#0e0d0b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#c5a059]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>TABLE BOOKING</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#f7f4ef] tracking-tight mb-4">
            Reserve Your Experience
          </h2>
          <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
            Ensure your favorite cozy spot is waiting for you. Whether it&apos;s a coffee date, business meeting, or solo reading session.
          </p>
        </div>

        {/* Reservation Card */}
        <div className="glass-card rounded-3xl border border-[#c5a059]/30 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          {!isSubmitted ? (
            <form onSubmit={handleBookTable} className="space-y-6">
              {formError && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-300 text-xs font-medium">
                  {formError}
                </div>
              )}

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#a8a096] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Aarav Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-[#f7f4ef] placeholder-[#a8a096]/50 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#a8a096] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-[#f7f4ef] placeholder-[#a8a096]/50 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#a8a096] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-[#f7f4ef] placeholder-[#a8a096]/50 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>
              </div>

              {/* Date, Time, Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#a8a096] absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-[#f7f4ef] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#a8a096] absolute left-3.5 top-3.5" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-[#f7f4ef] focus:outline-none focus:border-[#c5a059]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#181614] text-[#f7f4ef]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#a8a096] absolute left-3.5 top-3.5" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-[#f7f4ef] focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="1 Guest (Solo)">1 Guest (Solo)</option>
                      <option value="2 Guests (Couples/Duo)">2 Guests (Couples/Duo)</option>
                      <option value="3 - 4 Guests">3 - 4 Guests</option>
                      <option value="5 - 6 Guests">5 - 6 Guests</option>
                      <option value="7+ Guests (Large Party)">7+ Guests (Large Party)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating preference selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-3">
                  Seating Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Cozy Sofa Corner', emoji: '🛋️' },
                    { label: 'Window View', emoji: '🪟' },
                    { label: 'Outdoor Patio', emoji: '🌿' },
                    { label: 'Espresso Bar counter', emoji: '☕' },
                  ].map((area) => (
                    <button
                      key={area.label}
                      type="button"
                      onClick={() => setSeatingArea(area.label)}
                      className={`p-3 rounded-2xl border text-xs font-medium transition-all ${
                        seatingArea === area.label
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#f7f4ef]'
                          : 'border-white/10 bg-[#181614] text-[#a8a096] hover:border-white/20'
                      }`}
                    >
                      <span className="block text-lg mb-1">{area.emoji}</span>
                      <span>{area.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                  Special Requests / Occasion
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#a8a096] absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="e.g., Birthday celebration, quiet corner for reading, high chair needed..."
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full bg-[#181614] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-[#f7f4ef] placeholder-[#a8a096]/50 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#c5a059]/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>
            </form>
          ) : (
            /* Confirmation View */
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#c5a059]/20 border-2 border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#c5a059] text-xs font-semibold tracking-wider uppercase border border-[#c5a059]/40">
                  Table Booking Confirmed
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#f7f4ef] mt-3">We Look Forward to Serving You!</h3>
                <p className="text-xs text-[#a8a096] mt-2">
                  Your reservation code is <strong className="text-[#c5a059]">{reservationCode}</strong>. A confirmation SMS/Email has been queued.
                </p>
              </div>

              {/* Reservation summary box */}
              <div className="p-6 rounded-2xl bg-[#181614] border border-white/10 text-left max-w-lg mx-auto space-y-3 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#a8a096]">Reserved For:</span>
                  <span className="font-semibold text-[#f7f4ef]">{name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#a8a096]">Date & Time:</span>
                  <span className="font-semibold text-[#c5a059]">{date} at {time}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#a8a096]">Party Size:</span>
                  <span className="font-semibold text-[#f7f4ef]">{guests}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#a8a096]">Seating Area:</span>
                  <span className="font-semibold text-[#f7f4ef]">{seatingArea}</span>
                </div>
                {specialRequest && (
                  <div className="flex justify-between pt-1">
                    <span className="text-[#a8a096]">Notes:</span>
                    <span className="italic text-[#f7f4ef]/90">&ldquo;{specialRequest}&rdquo;</span>
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => alert(`Reservation voucher #${reservationCode} saved.`)}
                  className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-[#f7f4ef] font-medium text-xs transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Reminder</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="py-3 px-6 rounded-xl bg-[#c5a059] hover:bg-[#e2c17c] text-black font-semibold text-xs transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
