import React from 'react';

const ConsultationCTA = ({
  title = 'Book a free consultation',
  description =
    'Share your goals, timeframe, and budget. We will recommend the smartest path forward and arrive on site with the workshop in tow.',
  primaryLabel = 'Call 0405 837 584',
  primaryHref = 'tel:0405837584',
  secondaryLabel = 'Email the team',
  secondaryHref = 'mailto:admin@mksruralservices.com?subject=Free%20Consultation%20Request',
}) => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto max-w-5xl px-4 text-center text-white space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-base text-slate-100">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sky-800 font-semibold hover:bg-slate-100"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 text-white font-semibold hover:bg-white/10"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
