import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-slate-100 py-20">
      <div className="container mx-auto max-w-6xl px-4 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">G'day from Fernvale</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Country care for your comfort across the Lockyer Valley &amp; Somerset Regions
          </h1>
          <div className="mt-6 space-y-4">
            <p className="text-lg text-slate-700">
              MKS Rural Services pairs 25+ years of refrigeration and air conditioning know-how with the warm, country attitude locals expect. We listen first, plan carefully, and deliver work that keeps homes, farms, and businesses running smoothly.
            </p>
            <ul className="space-y-2 text-base text-slate-700">
              <li>• Friendly, family-owned HVAC specialists who never rush a job.</li>
              <li>• Fully licensed (QBCC) and safety-led on every site visit.</li>
              <li>• Mobile workshop stocked with parts to minimise downtime.</li>
            </ul>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6" asChild>
              <a href="tel:0405837584">Call 0405 837 584</a>
            </Button>
            <div className="text-sm text-slate-600">
              Prefer email?{' '}
              <a href="mailto:admin@mksruralservices.com" className="text-sky-700 font-medium hover:underline">
                admin@mksruralservices.com
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <p className="text-sm font-medium text-sky-700">Mark Sherwood, Owner &amp; Lead Technician</p>
            <p className="text-2xl font-semibold text-slate-900 mt-2">“Specialists in rural HVAC, we’re the best.”</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-3xl font-bold text-sky-600">ARC</p>
              <p className="text-sm text-slate-600 mt-2">AU43341</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-3xl font-bold text-slate-900">QBCC</p>
              <p className="text-sm text-slate-600 mt-2">15224670</p>
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
            <p className="text-sm uppercase tracking-wide text-slate-500">Promise</p>
            <p className="text-base text-slate-700">
              We leave every site safer, tidier, and better prepared for Queensland heat — guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
