import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Celler Cafe | Good Coffee. Great Moments.',
  description: 'Celler Cafe — handcrafted coffee, delicious food and unforgettable moments in a cozy modern urban atmosphere.',
  openGraph: {
    title: 'Celler Cafe | Good Coffee. Great Moments.',
    description: 'Experience artisanal coffee, freshly baked desserts, and gourmet dining at Celler Cafe.',
    images: ['/images/celler_hero_bg_1786539072525.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#0c0b0a] text-[#f7f4ef] font-sans antialiased selection:bg-[#c5a059]/30 selection:text-[#f7f4ef] min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

