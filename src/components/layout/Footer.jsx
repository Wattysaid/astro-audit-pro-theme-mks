import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import ConsultationCTA from '@/components/sections/ConsultationCTA';

const socialLinks = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/mksruralservicesrefrigeration/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    icon: Mail,
    label: 'Email newsletter',
    href: 'mailto:admin@mksruralservices.com?subject=Newsletter%20Subscription',
  },
];

const Footer = () => {
  return (
    <>
      <ConsultationCTA />
      <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div>
              <span className="text-xl font-bold text-sky-600 block border-b border-slate-300 pb-0.5">MKS Rural Services</span>
              <span className="mt-0.5 block text-sm font-medium uppercase tracking-wide text-slate-300">Refrigeration and air conditioning</span>
            </div>
            <p className="text-sm text-slate-400">
              Family-owned refrigeration and air conditioning specialists based in Fernvale and serving the Lockyer Valley, Somerset Region, and wider rural Queensland.
            </p>
            <div className="text-sm text-slate-300">
              Phone:{' '}
              <a href="tel:0405837584" className="text-white hover:underline">0405 837 584</a>
            </div>
            <div className="text-sm text-slate-300">
              Email:{' '}
              <a href="mailto:admin@mksruralservices.com" className="text-white hover:underline">admin@mksruralservices.com</a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/pricing" className="hover:text-white">Services & Pricing</a></li>
              <li><a href="/success-stories" className="hover:text-white">Project Highlights</a></li>
              <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><a href="/blog" className="hover:text-white">News & Insights</a></li>
              <li><a href="/best-practices" className="hover:text-white">Maintenance Tips</a></li>
              <li><a href="/ebooks" className="hover:text-white">Guides & Checklists</a></li>
              <li><a href="/help-center" className="hover:text-white">Support Centre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><a href="/newsletter" className="hover:text-white">Newsletter</a></li>
              <li><a href="https://maps.app.goo.gl" className="hover:text-white" target="_blank" rel="noreferrer">Google Business Profile</a></li>
              <li><a href="/pricing#service-contracts" className="hover:text-white">Service Contracts</a></li>
              <li><a href="/contact" className="hover:text-white">Book a Visit</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} MKS Rural Services. Refrigeration and air conditioning.
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
