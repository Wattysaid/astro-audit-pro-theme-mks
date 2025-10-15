import React from 'react';
import { CheckCircle } from 'lucide-react';

const bullets = [
  {
    title: 'Customer-Centric Quality',
    description: 'We listen, plan, and craft every solution so you never feel like just another job in the queue.'
  },
  {
    title: 'Safety & Family First',
    description: 'Keeping households, staff, and produce safe is non-negotiable; every visit follows strict safety checks.'
  },
  {
    title: 'Reliability You Can Ring Anytime',
    description: 'Quick responses, clear communication, and a service trailer stocked with the parts rural clients rely on.'
  },
  {
    title: 'Friendly Country Hospitality',
    description: 'We greet you by name, explain the fix without jargon, and tidy up like it’s our own place.'
  }
];

const WhyChooseSection = () => {
  return (
    <section id="why-mks" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why neighbours recommend MKS Rural Services</h2>
          <p className="mt-4 text-lg text-slate-700">
            Word of mouth built our business. We honour that trust with workmanship that stands up to Queensland expectations and the promise that we’ll always put our clients first.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {bullets.map((item) => (
            <div key={item.title} className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-sky-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-base text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
