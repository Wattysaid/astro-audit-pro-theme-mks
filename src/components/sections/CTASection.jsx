import React from 'react';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to discuss your refrigeration and air conditioning needs?</h2>
          <p className="mt-4 text-lg text-sky-100">
            Contact us today for a free consultation. We treat your HVAC problem like our own and stay until the job is finished properly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-[auto,1fr] md:items-center">
          <Button size="lg" className="bg-white text-sky-800 hover:bg-slate-100 px-8 py-6 w-full md:w-auto" asChild>
            <a href="tel:0405837584">Call 0405 837 584</a>
          </Button>
          <div className="text-sm md:text-base text-sky-100">
            Prefer to write it down? Email <a href="mailto:admin@mksruralservices.com" className="font-semibold text-white underline-offset-4 hover:underline">admin@mksruralservices.com</a>
          </div>
        </div>
        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 text-sky-200" />
            <div>
              <p className="text-lg font-medium text-white">“MKS has always come through with prompt service, and did an awesome job.”</p>
              <p className="mt-2 text-sm text-sky-100">Local Customer Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
