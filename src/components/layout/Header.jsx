import React from 'react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Services & Pricing' },
  { href: '/success-stories', label: 'Projects' },
  { href: '/testimonials', label: 'Testimonials' },
];

const bookingUrl = 'https://www.google.com/maps/search/?q=MKS+Rural+Services';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/full-logo.jpg"
              alt="MKS Rural Services logo"
              className="h-10 w-auto object-contain"
              loading="lazy"
            />
            <div>
              <span className="text-xl font-bold text-sky-600 block border-b border-slate-500 pb-0.5">MKS Rural Services</span>
              <span className="mt-0.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Refrigeration and air conditioning</span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex bg-white">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-sky-600 text-sky-700 hover:bg-sky-50" asChild>
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                Book Online
              </a>
            </Button>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white" asChild>
              <a href="tel:0405837584">Call 0405 837 584</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
