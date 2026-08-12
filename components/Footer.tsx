'use client';

import React, { useState } from 'react';
import { Coffee, Instagram, Facebook, MessageCircle, Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#location' },
    { name: 'Book Table', href: '#reservation' },
  ];

  return (
    <footer className="bg-[#080706] border-t border-[#c5a059]/20 pt-16 pb-12 text-[#f7f4ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c5a059] to-[#8c5a3c] flex items-center justify-center text-black font-serif font-bold text-xl shadow-lg">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider gold-gradient-text">
                  CELLER CAFE
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#c5a059] uppercase -mt-1 font-medium">
                  Good Coffee. Great Moments.
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a8a096] leading-relaxed max-w-sm">
              An urban sanctuary dedicated to single-origin coffee roasts, freshly baked pastries, and memorable conversations in a warm luxury ambiance.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#181614] border border-white/10 hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center text-[#a8a096] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#181614] border border-white/10 hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center text-[#a8a096] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#181614] border border-white/10 hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center text-[#a8a096] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#a8a096]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#c5a059] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">Contact Info</h4>
            <div className="space-y-2.5 text-xs text-[#a8a096]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Your Cafe Address, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>hello@cellercafe.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">Newsletter</h4>
            <p className="text-xs text-[#a8a096] leading-relaxed">
              Subscribe to receive updates on new seasonal roasts, chef&apos;s specials, and private events.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#181614] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-[#f7f4ef] placeholder-[#a8a096]/50 focus:outline-none focus:border-[#c5a059]"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-[#c5a059] hover:bg-[#e2c17c] text-black transition-colors shrink-0"
                  title="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a8a096] gap-4">
          <p>© 2026 Celler Cafe. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#home" className="hover:text-[#c5a059] transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-[#c5a059] transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-[#c5a059] transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
