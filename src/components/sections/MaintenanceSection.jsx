import React from 'react';
import { ClipboardCheck } from 'lucide-react';

const MaintenanceSection = () => {
  return (
    <section id="maintenance" className="py-20 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-sky-600/10 p-3 text-sky-700">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Service, maintenance, and coil cleaning done properly</h2>
          </div>
          <p className="mt-6 text-lg text-slate-700">
            Reliability beats speed every time. Our maintenance programs keep assets operating at peak performance, help manage cash flow, and align with safety obligations for schools, councils, and primary producers.
          </p>
          <p className="mt-4 text-base text-slate-600">
            Ask about quarterly or biannual schedules, flexible payment options for long-term clients, and documentation that supports insurance and compliance reporting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
