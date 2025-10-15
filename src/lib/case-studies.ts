export type ServiceCaseStudy = {
  serviceSlug: string;
  serviceName: string;
  slug: string;
  title: string;
  location?: string;
  summary: string;
  snapshot: string;
  goals: string[];
  discovery: string[];
  solution: string[];
  results: string[];
  feedback: string;
};

export const caseStudies: ServiceCaseStudy[] = [
  {
    serviceSlug: 'system-design-installation',
    serviceName: 'System Design & Installation',
    slug: 'workshop-air-conditioning-upgrade',
    title: 'Workshop air conditioning upgrade',
    location: 'Esk, QLD',
    summary: 'Zoned VRF design that stabilised temperatures for a CNC fabrication business running long production shifts.',
    snapshot:
      'Metal fabrication business operating CNC machines, welding bays, and offices that needed consistent climate control to protect tooling and people.',
    goals: [
      'Stabilise temperatures across multiple production zones.',
      'Reduce heat-related fatigue for staff working long shifts.',
      'Integrate controls that supervisors can manage without specialist training.',
    ],
    discovery: [
      'Split systems were undersized for the expanded floor area.',
      'Welding bays generated heat pockets that upset CNC tolerances.',
      'Noise and return-air contamination spilled into the front office.',
    ],
    solution: [
      'Designed a zoned VRF ducted system with heat-load modelling for each area.',
      'Implemented return-air filtration and acoustic attenuation to protect office spaces.',
      'Installed smart controllers with remote monitoring for shift supervisors.',
    ],
    results: [
      'Temperature variance fell from 10°C to under 3°C across shifts.',
      'Efficiency rebates offset capital expenditure and extended warranties.',
      'Staff reported improved comfort and reduced fatigue during summer.',
    ],
    feedback:
      'The MKS crew worked around our shift changes, kept the place tidy, and handed over with clear documentation. Genuine professionals.',
  },
  {
    serviceSlug: 'system-design-installation',
    serviceName: 'System Design & Installation',
    slug: 'multi-storey-residential-ducted-upgrade',
    title: 'Multi-storey residential ducted upgrade',
    location: 'Toowoomba, QLD',
    summary: 'Heritage Queenslander retrofit with slimline ductwork, independent zoning, and pest-resistant detailing for dual living.',
    snapshot:
      'Renovated Queenslander converted into dual living, needing discrete ducted comfort without compromising heritage aesthetics.',
    goals: [
      'Deliver even temperatures across upstairs living and downstairs guest quarters.',
      'Maintain low noise levels and hide grilles to protect interior design.',
      'Enable independent control for short-stay guests using the lower level.',
    ],
    discovery: [
      'Existing ceiling cavities were shallow, requiring bespoke duct profiles.',
      'Previous installer left wall penetrations unsealed, attracting geckos.',
      'Return-air placement caused drafting near the main staircase.',
    ],
    solution: [
      'Worked with structural engineer to design slimline duct runs and custom grilles.',
      'Sealed all penetrations and added pest deterrents around outdoor units.',
      'Configured zoning to split levels for guest/owner control with lockable thermostats.',
    ],
    results: [
      'Guests and owners now enjoy independent comfort control.',
      'Humidity control improved, protecting polished timber floors.',
      'Follow-up inspection confirmed pest activity eliminated and efficiency gains realised.',
    ],
    feedback:
      'Mark sized the system perfectly and explained every step. The house finally feels even and the pests have disappeared.',
  },
  {
    serviceSlug: 'maintenance-coil-cleaning',
    serviceName: 'Service, Maintenance & Coil Cleaning',
    slug: 'lockyer-valley-produce-cold-room-program',
    title: 'Lockyer Valley produce cold room program',
    location: 'Gatton, QLD',
    summary: 'Quarterly cold room maintenance that protected harvest quality and delivered energy savings for a produce grower.',
    snapshot:
      'Vegetable producer storing freshly picked crops in multiple cold rooms before market transport.',
    goals: [
      'Prevent harvest-time failures that risk produce spoilage.',
      'Reduce power consumption caused by dirty coils.',
      'Gain clear maintenance documentation for insurance audits.',
    ],
    discovery: [
      'Condenser coils were heavily fouled with dust and crop debris.',
      'Compressor temperatures exceeded safe limits during peak loads.',
      'No logbooks or service records existed for regulatory checks.',
    ],
    solution: [
      'Introduced quarterly deep cleans and refrigerant performance checks.',
      'Installed temperature data loggers and trained staff on daily inspections.',
      'Provided digital maintenance reports for compliance and warranty claims.',
    ],
    results: [
      'Product loss dropped to under 2% during peak harvest.',
      'Energy bills fell 18% within the first quarter after cleaning.',
      'Farm now has a documented service history for audits and insurance.',
    ],
    feedback:
      'Our systems now run cleaner, cheaper, and with far fewer surprises. The maintenance reports make budgeting easy.',
  },
  {
    serviceSlug: 'maintenance-coil-cleaning',
    serviceName: 'Service, Maintenance & Coil Cleaning',
    slug: 'hospitality-coil-cleaning-and-pest-protection',
    title: 'Hospitality coil cleaning & pest protection',
    location: 'Lowood, QLD',
    summary: 'After-hours cleans, pest deterrents, and coordinated scheduling for a multi-site regional café chain.',
    snapshot:
      'Regional café chain with ducted AC and display refrigeration exposed to grease, dust, and gecko activity.',
    goals: [
      'Improve indoor air quality for staff and customers.',
      'Stop geckos from damaging outdoor unit PCBs.',
      'Manage maintenance across multiple sites without disrupting trade.',
    ],
    discovery: [
      'Grease buildup on indoor coils reduced airflow and encouraged mould.',
      'Pipe penetrations were unsealed, giving pests access to cabling.',
      'Store managers lacked a consistent schedule or point of contact.',
    ],
    solution: [
      'Scheduled biannual cleans outside trading hours with food-safe chemicals.',
      'Sealed all penetrations and installed pest deterrents in condensers.',
      'Created a centralised maintenance calendar with reminder emails and follow-up calls.',
    ],
    results: [
      'Indoor air quality tests showed significant microbial reduction.',
      'Pest-related board failures dropped to zero in twelve months.',
      'Managers now receive reminder emails and after-service reports automatically.',
    ],
    feedback:
      'MKS works around our hours, leaves everything spotless, and the pest issue has disappeared. Couldn’t ask for more.',
  },
  {
    serviceSlug: 'breakdown-repairs',
    serviceName: 'Emergency Breakdown Repairs',
    slug: 'lockyer-valley-farm-cold-room-failure',
    title: 'Lockyer Valley farm cold room failure',
    location: 'Gatton, QLD',
    summary: 'Emergency compressor replacement and airflow restoration that saved a harvest during peak demand.',
    snapshot:
      'Vegetable producer storing harvested crops when the main cold room tripped offline during peak season.',
    goals: [
      'Restore safe storage temperature before produce spoiled.',
      'Identify root cause to prevent recurring outages.',
      'Implement maintenance regime to support future harvests.',
    ],
    discovery: [
      'Compressor overheating due to fouled condenser fins and restricted airflow.',
      'Refrigerant pressures drifting from lack of routine servicing.',
      'Temperature monitoring absent, delaying fault discovery.',
    ],
    solution: [
      'Replaced the failing compressor from trailer stock to avoid freight delays.',
      'Completed deep coil clean, restored airflow, and recalibrated controls.',
      'Installed data logger and scheduled quarterly preventative visits.',
    ],
    results: [
      'Produce loss kept below 2% despite harvest rush.',
      'Power consumption improved 18% within the next billing cycle.',
      'Maintenance plan now aligned with seasonal workload.',
    ],
    feedback:
      'Mark picked up straight away, arrived with the right parts, and made sure we had a back-up plan. You cannot get better service.',
  },
  {
    serviceSlug: 'breakdown-repairs',
    serviceName: 'Emergency Breakdown Repairs',
    slug: 'retail-display-fridge-outage',
    title: 'Retail display fridge outage',
    location: 'Fernvale, QLD',
    summary: 'Front-of-house fridge rescue with new fan motor, airflow clearance, and insurance-friendly reporting.',
    snapshot:
      'Local grocer whose front-of-house display fridge failed hours before opening, risking stock and customer confidence.',
    goals: [
      'Recover cooling quickly to save perishable stock.',
      'Provide clear communication for staff and insurance records.',
      'Recommend steps to prevent future unplanned downtime.',
    ],
    discovery: [
      'Blocked condenser intake due to cardboard storage and dust.',
      'Fan motor bearings worn and seizing intermittently.',
      'No routine cleaning schedule or airflow clearance policy.',
    ],
    solution: [
      'Cleared intake, replaced seized fan motor, and verified refrigerant charge.',
      'Logged temperature recovery curve and provided documentation for insurance.',
      'Advised on weekly housekeeping checklist and quarterly coil clean.',
    ],
    results: [
      'Display fridge returned to food-safe temperatures within one hour.',
      'Stock loss limited to a single shelf of dairy items.',
      'Store team adopted new housekeeping checklist and booked maintenance plan.',
    ],
    feedback:
      'MKS explained everything, fixed it fast, and left us with a plan so it doesn’t happen again.',
  },
  {
    serviceSlug: 'marine-hvac-programs',
    serviceName: 'Marine HVAC Programs',
    slug: 'luxury-charter-vessel-retrofit',
    title: 'Luxury charter vessel retrofit',
    location: 'Moreton Bay, QLD',
    summary: 'Marine-rated retrofit that reduced cabin noise and delivered smarter zoning between charter bookings.',
    snapshot:
      '18-berth charter vessel needing quieter cabins and better climate control without disrupting bookings.',
    goals: [
      'Lower cabin noise and improve overnight comfort for guests.',
      'Stage works between charters to avoid cancellations.',
      'Provide crew with intuitive controls and maintenance instructions.',
    ],
    discovery: [
      'Ageing fan coils transmitted vibration through bulkheads.',
      'Upper and lower decks had uneven air distribution.',
      'Limited space for new duct runs required custom fabrication.',
    ],
    solution: [
      'Specified marine-rated fan coils with vibration isolation and corrosion-resistant fittings.',
      'Upgraded insulation, balanced airflow, and introduced smart zoning controls.',
      'Delivered works in staged blocks with temporary cooling for crew rest areas.',
    ],
    results: [
      'Cabin noise reduced by 35%, lifting guest satisfaction scores.',
      'Climate control feedback improved to “excellent” in post-cruise surveys.',
      'Maintenance now fits into routine docking windows with detailed checklists for crew.',
    ],
    feedback:
      'MKS handled everything from sourcing marine parts to final testing. Honest updates all the way through.',
  },
  {
    serviceSlug: 'marine-hvac-programs',
    serviceName: 'Marine HVAC Programs',
    slug: 'commercial-ferry-maintenance-program',
    title: 'Commercial ferry maintenance program',
    location: 'Redcliffe, QLD',
    summary: 'Pre-dawn service runs and corrosion protection that slashed unplanned downtime for a ferry operator.',
    snapshot:
      'Passenger ferry operator seeking a dependable maintenance partner to reduce unscheduled downtime.',
    goals: [
      'Synchronise servicing with early-morning layovers.',
      'Extend life of HVAC electronics exposed to salt air.',
      'Improve cabin comfort during peak tourist periods.',
    ],
    discovery: [
      'Control boards showed salt corrosion from unsealed housings.',
      'Filters and drains were neglected due to tight turnaround times.',
      'Cabins experienced hot spots where insulation had deteriorated.',
    ],
    solution: [
      'Introduced quarterly pre-dawn service runs with full inspection reports.',
      'Sealed electrical enclosures, added desiccant packs, and installed pest deterrents.',
      'Replaced insulation panels and rebalanced airflow to passenger compartments.',
    ],
    results: [
      'Unplanned HVAC downtime dropped by 80% in the first year.',
      'Electronics lifespan extended thanks to corrosion prevention measures.',
      'Passenger comfort scores improved despite higher seasonal loads.',
    ],
    feedback:
      'They work around our schedule, keep detailed records, and the ferries have never run better.',
  },
];

export function getCaseStudiesForService(serviceSlug: string): ServiceCaseStudy[] {
  return caseStudies.filter((study) => study.serviceSlug === serviceSlug);
}

export function getCaseStudy(serviceSlug: string, slug: string): ServiceCaseStudy | undefined {
  return caseStudies.find((study) => study.serviceSlug === serviceSlug && study.slug === slug);
}
