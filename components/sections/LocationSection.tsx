'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      // Open 9:00 AM (9) to 10:00 PM (22)
      if (hour >= 9 && hour < 22) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkOpenStatus();
  }, []);

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Kerala+India', '_blank');
  };

  return (
    <section id="location" className="py-24 bg-[#0c0b0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8c5a3c]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND OUR HAVEN</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#f7f4ef] tracking-tight mb-4">
            Come Visit Us
          </h2>
          <p className="text-sm sm:text-base text-[#a8a096] leading-relaxed">
            Conveniently located in Kerala, India. Drop by for your morning espresso or unwind during twilight hours.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Cards (Left) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Live Status Badge Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#a8a096]">
                  Current Status
                </span>
                {isOpenNow ? (
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Open Now • Closes 10:00 PM
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 text-xs font-bold">
                    Closed Now • Opens 9:00 AM
                  </span>
                )}
              </div>
            </div>

            {/* Address & Contact Info */}
            <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">Address</h4>
                  <p className="text-sm font-serif font-semibold text-[#f7f4ef]">
                    Your Cafe Address, Kerala, India
                  </p>
                  <p className="text-xs text-[#a8a096] mt-1">
                    Near City Center Promenade • Valet Parking Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">Opening Hours</h4>
                  <p className="text-xs text-[#f7f4ef] font-medium">
                    <strong>Monday – Friday:</strong> 9:00 AM – 10:00 PM
                  </p>
                  <p className="text-xs text-[#f7f4ef] font-medium mt-0.5">
                    <strong>Saturday – Sunday:</strong> 9:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">Get In Touch</h4>
                  <p className="text-xs text-[#f7f4ef] font-medium">
                    Phone: <a href="tel:+919876543210" className="hover:text-[#c5a059]">+91 98765 43210</a>
                  </p>
                  <p className="text-xs text-[#f7f4ef] font-medium mt-0.5">
                    Email: <a href="mailto:hello@cellercafe.com" className="hover:text-[#c5a059]">hello@cellercafe.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <button
              onClick={handleDirections}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#c5a059] to-[#a66e4e] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#c5a059]/15"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions via Google Maps</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </button>
          </div>

          {/* Interactive Map View Card (Right) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#c5a059]/30 relative min-h-[420px] bg-[#161412] shadow-2xl flex flex-col justify-between">
            {/* Custom stylized map canvas graphic */}
            <div className="absolute inset-0 z-0 opacity-60">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
                alt="Kerala City Map View"
                className="w-full h-full object-cover grayscale contrast-125 brightness-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/60 to-transparent" />
            </div>

            {/* Custom Pin Overlay */}
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs text-[#c5a059] font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Prime Location
                </span>
              </div>

              {/* Center Pin Box */}
              <div className="my-auto mx-auto text-center max-w-sm p-6 rounded-2xl glass-panel border border-[#c5a059] backdrop-blur-2xl shadow-2xl animate-float-slow">
                <div className="w-12 h-12 rounded-full bg-[#c5a059] text-black flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#c5a059]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#f7f4ef]">CELLER CAFE</h3>
                <p className="text-xs text-[#c5a059] font-semibold uppercase tracking-wider mt-0.5">
                  Your Cafe Address, Kerala, India
                </p>
                <p className="text-[11px] text-[#a8a096] mt-2 leading-relaxed">
                  Indoor cozy seating • Outdoor garden patio • Free Wi-Fi • Dedicated work tables
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#a8a096] bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span>📍 10 Mins from Metro Station</span>
                <span className="text-[#c5a059]">☕ Fresh Coffee Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
