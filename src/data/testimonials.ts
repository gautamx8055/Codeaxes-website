import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 'northline-release-cadence',
    quote:
      'Codeaxes treated our analytics platform like a product company, not a ticket queue. They mapped tenant isolation and billing edge cases before we wrote feature code, and our release process finally matches how enterprise customers expect to be onboarded.',
    name: 'Maya Chen',
    role: 'VP of Engineering',
    company: 'Northline Analytics',
    projectType: 'SaaS platform rebuild',
    metric: 'Weekly',
    metricLabel: 'Release cadence',
  },
  {
    id: 'careloop-portal-launch',
    quote:
      'The patient portal had to feel calm on a phone and rigorous on the back end. Codeaxes delivered both, clear consent flows, role-aware staff tools, and audit trails our compliance team could actually review without a scavenger hunt.',
    name: 'Dr. James Okonkwo',
    role: 'Chief Medical Information Officer',
    company: 'CareLoop Health',
    projectType: 'Healthcare patient portal',
    videoPlaceholder: true,
  },
  {
    id: 'ledgerkit-onboarding',
    quote:
      'Onboarding in fintech is a UX problem and a controls problem at once. They built step-up verification that applicants understand, and gave our ops team a case timeline that mirrors what the risk engine decided, no more reconciling three spreadsheets after a failed KYC.',
    name: 'Priya Sharma',
    role: 'Head of Product',
    company: 'LedgerKit',
    projectType: 'Fintech onboarding and risk',
    metric: 'Under 10 min',
    metricLabel: 'Median applicant flow',
  },
  {
    id: 'harbor-commerce-peak',
    quote:
      'Peak season used to mean emergency deploys and manual inventory checks. Harbor’s new storefront and inventory layer kept catalog, promos, and warehouse counts aligned, merchandising could launch campaigns without waiting on an engineer to flip a config flag.',
    name: 'Elena Vasquez',
    role: 'Director of Digital Commerce',
    company: 'Harbor Commerce',
    projectType: 'Ecommerce storefront and inventory',
  },
  {
    id: 'routewise-dispatch',
    quote:
      'Dispatchers live in exceptions, not happy paths. The console Codeaxes built surfaces delays first, preserves override history, and our drivers can capture proof-of-delivery when connectivity drops, exactly the field reality we described in discovery.',
    name: 'Marcus Webb',
    role: 'COO',
    company: 'RouteWise Mobility',
    projectType: 'Logistics dispatch platform',
    metric: 'Same shift',
    metricLabel: 'Exception resolution target',
    videoPlaceholder: true,
  },
  {
    id: 'lumen-learn-cohorts',
    quote:
      'We needed cohort pacing, instructor visibility, and LMS integrations without Frankensteining five vendors. Lumen’s learning platform gives admins one roster source and gives instructors actionable signals, not just login counts from last Tuesday.',
    name: 'Sarah Lindholm',
    role: 'Chief Learning Officer',
    company: 'Lumen Learn',
    projectType: 'EdTech learning platform',
  },
  {
    id: 'axisops-floor',
    quote:
      'Shop-floor software only works if operators trust it on the first shift. Codeaxes paired tablet work orders with ERP integration our planners already used, supervisors finally see open exceptions and line status without walking the floor for every answer.',
    name: 'Tom Berger',
    role: 'Plant Operations Director',
    company: 'AxisOps Manufacturing',
    projectType: 'Manufacturing operations system',
    metric: 'Per shift',
    metricLabel: 'Handoff summaries',
  },
  {
    id: 'signal-story-cms',
    quote:
      'Our editors needed to ship packages on deadline without filing engineering tickets. The CMS migration gave them preview, scheduling, and rights-aware assets, growth and editorial finally share the same definition of a published story.',
    name: 'Rachel Kim',
    role: 'Editor-in-Chief',
    company: 'Signal & Story',
    projectType: 'Media CMS and publishing workflow',
  },
];
