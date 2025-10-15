import React from 'react';
import { Wrench, Cog, ClipboardList } from 'lucide-react';

const bookingHref = 'https://www.google.com/maps/search/?q=MKS+Rural+Services';

const serviceCards = [
  {
    icon: Wrench,
    iconStyles: 'bg-sky-100 text-sky-700',
    title: 'Breakdown Repairs & Diagnostics',
    summary:
      'Call us when systems stop performing. Our mobile workshop carries common parts so we can diagnose and restore refrigeration, cold rooms, and AC units on the spot with transparent updates along the way.',
    bullets: [
      'Emergency refrigeration, cold rooms, and AC troubleshooting.',
      'Stocked trailer for first-visit repairs wherever possible.',
      'Clear reporting so you know costs and next steps before we leave.'
    ]
  },
  {
    icon: Cog,
    iconStyles: 'bg-emerald-100 text-emerald-700',
    title: 'System Design, Install & Upgrades',
    summary:
      'We complete heat-load calculations, equipment sourcing, installation, commissioning, and staff handover. Every design is engineered to match your environment, usage patterns, and long-term goals.',
    bullets: [
      'Residential & domestic comfort plans with smart controls.',
      'Commercial & industrial projects covering schools, sheds, and retail.',
      'Rural, agricultural, and marine systems tailored to harsh conditions.'
    ]
  },
  {
    icon: ClipboardList,
    iconStyles: 'bg-orange-100 text-orange-700',
    title: 'Maintenance Plans & Service Contracts',
    summary:
      'Lock in predictable servicing across the year, reduce breakdown risk, and support our vision of training apprentices for faster response times. Contracts include written reports, agreed scheduling, and priority bookings.',
    bullets: [
      'Routine cleans, coil treatments, and performance testing.',
      'Priority scheduling during heatwaves and peak production.',
      'Documentation ready for insurance, auditors, and compliance checks.'
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-4 space-y-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">HVAC services designed for regional Queensland</h2>
          <p className="mt-4 text-lg text-slate-700">
            From urgent breakdowns to long-term maintenance contracts, we help you plan, install, and protect critical refrigeration and air conditioning assets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map(({ icon: Icon, iconStyles, title, summary, bullets }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-3 ${iconStyles}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 leading-tight">{title}</h3>
              </div>
              <div className="flex-1 space-y-4 text-base text-slate-700">
                <p>{summary}</p>
                {bullets?.length > 0 && (
                  <ul className="space-y-2 text-sm text-slate-600">
                    {bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-sky-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Book this service
                </a>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">or</span>
                <a
                  href="tel:0405837584"
                  className="inline-flex items-center justify-center rounded-lg border border-sky-600 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
                >
                  Call us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
