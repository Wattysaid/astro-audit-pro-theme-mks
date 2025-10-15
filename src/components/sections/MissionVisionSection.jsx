import React from 'react';
import { HeartHandshake, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Mission &amp; Vision</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Doing the job right, caring for people first</h2>
          <p className="text-base text-slate-700">
            Our mission is to provide friendly, reliable, country-style HVAC services that leave every customer feeling looked after. We would rather take an extra hour to finish a coil clean properly than rush through a call-out and miss the real issue.
          </p>
          <p className="text-base text-slate-700">
            Looking ahead, we are building a financially stable, apprentice-supported team recognised as the most trusted HVAC partner in the Lockyer Valley and Somerset Regions. Mark is preparing to mentor the next generation while staying close to the tools he loves.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <HeartHandshake className="h-6 w-6 text-orange-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Authentic hospitality</h3>
              <p className="text-sm text-slate-700">We greet clients by name, keep conversations friendly, and show genuine respect for every property.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <ShieldCheck className="h-6 w-6 text-sky-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Safety &amp; community first</h3>
              <p className="text-sm text-slate-700">Family comes before overtime. We schedule work so everyone goes home safe and we prioritise vulnerable clients during extreme weather.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <Users className="h-6 w-6 text-emerald-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Teamwork &amp; mentoring</h3>
              <p className="text-sm text-slate-700">We’re investing in apprentices and growing the crew so rural households and businesses get faster support.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <TrendingUp className="h-6 w-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Built for long-term stability</h3>
              <p className="text-sm text-slate-700">Formal maintenance contracts and careful budgeting help fund new tools, staff training, and community support initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
