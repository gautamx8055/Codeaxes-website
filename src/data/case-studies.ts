import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'northline-analytics',
    title: 'Northline Analytics, Multi-tenant product intelligence',
    client: 'Northline Analytics',
    industry: 'SaaS and Technology',
    services: ['saas-development', 'product-development', 'project-data'],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Redis', 'AWS', 'Terraform'],
    summary:
      'Northline needed one analytics workspace model for self-serve teams and enterprise accounts without maintaining parallel codebases or fragile permission hacks.',
    challenge:
      'Two legacy tiers ran on different data models. Enterprise deals stalled because provisioning was manual, and feature teams feared that any schema change would break tenant isolation guarantees promised in security reviews.',
    strategy:
      'Codeaxes ran discovery with customer success and platform engineers, then phased delivery: tenant core and auth first, migration tooling second, customer-facing analytics third.',
    solution:
      'We delivered a multi-tenant platform with workspace hierarchies, usage-aware billing hooks, and an admin console for provisioning and support impersonation with full audit logging.',
    features: [
      'Workspace and organization model with inherited roles and feature entitlements',
      'Self-serve signup with progressive activation milestones',
      'Enterprise SSO and SCIM provisioning',
      'Usage metering pipeline feeding billing integration',
      'Support impersonation with time-bound sessions and immutable audit trail',
      'Migration importers for legacy tenant data with validation reports',
    ],
    outcomes: [
      { label: 'Provisioning time', value: 'Hours → minutes for standard enterprise workspaces' },
      { label: 'Release cadence', value: 'Weekly trains with tenant-scoped feature flags' },
      { label: 'Support context', value: 'Single admin view replacing three internal tools' },
    ],
    quote:
      'We stopped debating whether enterprise and self-serve were the same product, they finally run on one foundation our team can extend.',
    quoteName: 'Maya Chen',
    quoteRole: 'VP of Engineering, Northline Analytics',
    related: ['ledgerkit-onboarding', 'lumen-learn'],
    visual: 'dashboard',
    featured: true,
  },
  {
    slug: 'careloop-portal',
    title: 'CareLoop, Patient portal and care-ops console',
    client: 'CareLoop Health',
    industry: 'Healthcare',
    services: ['custom-development', 'ai-automation'],
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'FHIR APIs', 'Twilio', 'AWS', 'Docker'],
    summary:
      'CareLoop unified patient intake, messaging, and appointment status in a portal patients could trust on mobile, while giving care teams a console aligned to their workflow.',
    challenge:
      'Patients bounced between a legacy scheduling vendor, PDF forms, and phone callbacks. Staff duplicated data entry across systems, and compliance reviews flagged inconsistent access logging.',
    strategy:
      'We mapped the care journey with nurses and front-desk leads, prioritized mobile-first intake, and integrated scheduling through FHIR where the vendor supported it, with a fallback adapter for gaps.',
    solution:
      'A responsive patient portal and staff console sharing identity, permissions, and message threads, with automated pre-visit questionnaires and document routing to reduce manual chart prep.',
    features: [
      'Mobile-first appointment booking and status tracking',
      'Secure messaging with care-team assignment rules',
      'Pre-visit forms with save-and-resume',
      'Document upload with virus scan and retention policies',
      'Staff console with role-based queues and patient timeline',
      'Audit logging for sensitive reads and impersonation events',
    ],
    outcomes: [
      { label: 'Intake completion', value: 'Higher same-day form completion on mobile' },
      { label: 'Staff duplication', value: 'Fewer re-keyed fields across scheduling and messaging' },
      { label: 'Audit readiness', value: 'Exportable access logs for compliance review cycles' },
    ],
    quote:
      'Patients finally see one clear path after booking, and our staff stopped treating the portal as a second system to babysit.',
    quoteName: 'Dr. James Okonkwo',
    quoteRole: 'Chief Medical Information Officer, CareLoop Health',
    related: ['northline-analytics', 'ledgerkit-onboarding'],
    visual: 'devices',
    featured: true,
  },
  {
    slug: 'ledgerkit-onboarding',
    title: 'LedgerKit, Business onboarding and risk workflow',
    client: 'LedgerKit',
    industry: 'Fintech and Financial Services',
    services: ['saas-development', 'qa-testing'],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Temporal', 'Stripe Identity', 'AWS'],
    summary:
      'LedgerKit required onboarding that felt fast to applicants while giving risk and ops teams defensible case files, not screenshots scattered across email.',
    challenge:
      'Approval rates suffered from opaque step-up requests, and ops manually reconciled vendor verification results with internal rules spread across spreadsheets and wiki pages.',
    strategy:
      'Codeaxes modeled onboarding as an explicit state machine with idempotent vendor calls, built an ops review console, and paired delivery with regression suites on the highest-risk transitions.',
    solution:
      'A guided applicant flow with clear status copy, automated document checks, and an ops workspace showing vendor payloads, internal decisions, and reviewer notes in one timeline.',
    features: [
      'KYB intake with dynamic step-up based on risk signals',
      'Idempotent integration with identity and document vendors',
      'Ops review queues with assignment and SLA indicators',
      'Internal rules engine with versioned policy changes',
      'Applicant status page synchronized to pipeline state',
      'Regression suite covering approval, rejection, and retry paths',
    ],
    outcomes: [
      { label: 'Applicant clarity', value: 'Status page aligned to actual pipeline stage' },
      { label: 'Ops investigation', value: 'Case timeline replacing multi-tab vendor UIs' },
      { label: 'Release confidence', value: 'Automated coverage on critical onboarding transitions' },
    ],
    quote:
      'Applicants understand why we need another document, and ops can defend a decision without reconstructing the day from logs.',
    quoteName: 'Priya Sharma',
    quoteRole: 'Head of Product, LedgerKit',
    related: ['careloop-portal', 'harbor-commerce'],
    visual: 'workflow',
    featured: true,
  },
  {
    slug: 'harbor-commerce',
    title: 'Harbor Commerce, Storefront and inventory orchestration',
    client: 'Harbor Commerce',
    industry: 'Ecommerce and Retail',
    services: ['custom-development', 'mobile-apps'],
    stack: ['TypeScript', 'Next.js', 'Shopify Hydrogen', 'Node.js', 'PostgreSQL', 'Redis', 'Vercel'],
    summary:
      'Harbor Commerce needed a headless storefront and inventory layer that kept web, mobile, and marketplace channels aligned through peak promotional periods.',
    challenge:
      'Merchandising launched campaigns in one tool while warehouse counts lagged in another. Mobile conversion suffered from slow catalog pages and checkout errors when promos stacked unexpectedly.',
    strategy:
      'We established a single product and inventory service, rebuilt the customer storefront on a headless stack, and shipped a companion mobile app focused on account, orders, and reorder flows.',
    solution:
      'A unified catalog API feeding web, iOS, and marketplace integrations, with promo rule validation at cart time and ops dashboards for oversell prevention.',
    features: [
      'Headless storefront with optimized catalog and PDP performance',
      'Cart promo engine with stackability rules and clear error messaging',
      'Inventory reservations during checkout with warehouse priority rules',
      'iOS app for order tracking, returns initiation, and saved lists',
      'Ops dashboard for low-stock alerts and channel sync status',
      'Webhook sync to WMS and marketplace listing APIs',
    ],
    outcomes: [
      { label: 'Catalog consistency', value: 'Single source across web, app, and marketplace feeds' },
      { label: 'Campaign launch', value: 'Merchandising publishes without engineering deploys' },
      { label: 'Checkout errors', value: 'Fewer failed orders from stale promo-inventory conflicts' },
    ],
    quote:
      'Peak season stopped being a fire drill, our channels finally agree on what is in stock and what a promotion can do.',
    quoteName: 'Elena Vasquez',
    quoteRole: 'Director of Digital Commerce, Harbor Commerce',
    related: ['routewise-control', 'ledgerkit-onboarding'],
    visual: 'dashboard',
  },
  {
    slug: 'routewise-control',
    title: 'RouteWise, Dispatch control and exception handling',
    client: 'RouteWise Mobility',
    industry: 'Logistics and Mobility',
    services: ['paas-development', 'ai-automation'],
    stack: ['TypeScript', 'Go', 'PostgreSQL', 'Kafka', 'React', 'Mapbox', 'GCP', 'Kubernetes'],
    summary:
      'RouteWise built a dispatch platform that prioritizes exceptions, supports dispatcher overrides, and keeps drivers productive when connectivity is unreliable.',
    challenge:
      'Legacy dispatch treated every alert equally. Drivers lost proof-of-delivery captures offline, and customers received ETAs that dispatch could not explain when routes changed mid-shift.',
    strategy:
      'Codeaxes designed an event-driven routing core with a dispatcher-first UI, mobile apps with offline queues, and notification templates tied to geofence and scan events.',
    solution:
      'A control tower surfacing delayed stops and capacity conflicts first, plus driver mobile flows that sync POD photos and signatures when back online.',
    features: [
      'Exception-prioritized dispatch board with override audit trail',
      'Dynamic re-routing triggers based on configurable delay thresholds',
      'Driver app with offline action queue and barcode scanning',
      'Customer notification templates tied to milestone events',
      'Partner API for shipper visibility and document retrieval',
      'Replay tooling to simulate routing rule changes',
    ],
    outcomes: [
      { label: 'Dispatcher focus', value: 'Exceptions surfaced before routine stop noise' },
      { label: 'Field capture', value: 'POD sync after connectivity gaps without re-entry' },
      { label: 'Customer updates', value: 'Notifications matched to operational timestamps' },
    ],
    quote:
      'Our dispatchers work exceptions first now, and drivers trust the app when the signal drops between stops.',
    quoteName: 'Marcus Webb',
    quoteRole: 'COO, RouteWise Mobility',
    related: ['axisops-plant', 'harbor-commerce'],
    visual: 'architecture',
  },
  {
    slug: 'lumen-learn',
    title: 'Lumen Learn, Cohort-based learning platform',
    client: 'Lumen Learn',
    industry: 'Education and EdTech',
    services: ['product-development', 'saas-development', '2d-animations'],
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS S3', 'LTI 1.3', 'OpenSearch'],
    summary:
      'Lumen Learn launched a cohort-paced learning platform with instructor analytics and LMS integrations for corporate training programs that outgrew generic tools.',
    challenge:
      'Programs were run from spreadsheets, video links, and a legacy LMS that could not express prerequisites or cohort deadlines. Instructors lacked visibility into who was falling behind until exam week.',
    strategy:
      'We co-designed modular course structures with instructional designers, shipped learner and instructor experiences in parallel, and integrated roster sync via LTI for client LMS environments.',
    solution:
      'A SaaS learning hub with course versioning, cohort calendars, assessment rubrics, and nudges triggered by progress rules, not generic blast emails.',
    features: [
      'Course builder with modules, prerequisites, and version history',
      'Cohort calendar with deadline-aware learner dashboard',
      'Assessments with rubrics and instructor feedback workflows',
      'LTI roster and grade passback to client LMS instances',
      'Instructor analytics highlighting at-risk learners',
      'Accessible video and reading player with progress persistence',
    ],
    outcomes: [
      { label: 'Admin onboarding', value: 'New cohorts launched without manual roster CSVs' },
      { label: 'Instructor visibility', value: 'Early signals on incomplete milestones per learner' },
      { label: 'Learner clarity', value: 'Single dashboard for next actions and due dates' },
    ],
    quote:
      'Instructors finally see who needs help before the final, and admins stopped living in roster spreadsheets.',
    quoteName: 'Sarah Lindholm',
    quoteRole: 'Chief Learning Officer, Lumen Learn',
    related: ['northline-analytics', 'careloop-portal'],
    visual: 'devices',
  },
  {
    slug: 'axisops-plant',
    title: 'AxisOps, Plant-floor operations and quality',
    client: 'AxisOps Manufacturing',
    industry: 'Manufacturing and Enterprise Operations',
    services: ['custom-development', 'qa-testing', 'devops', 'cloud-computing'],
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'MQTT', 'SAP integration', 'Azure IoT Edge'],
    summary:
      'AxisOps digitized work orders and quality checks on the plant floor while keeping ERP production orders as the system of record.',
    challenge:
      'Operators relied on paper travelers and radios. Supervisors lacked live line status, and quality non-conformances were tracked in shared drives with inconsistent photo evidence.',
    strategy:
      'Codeaxes deployed tablet kiosks per line, integrated scan validation with ERP order data, and built supervisor dashboards fed by shop-floor events buffered through edge gateways.',
    solution:
      'A plant operations platform linking work orders, quality sampling, and exception capture, with traceability from supplier lot to shipment serial where configured.',
    features: [
      'Operator tablets for work order start, pause, and complete with scan validation',
      'Quality modules with sampling plans and photo-backed non-conformance routing',
      'Supervisor dashboard for line status, scrap, and open exceptions',
      'Edge gateway buffering telemetry during connectivity loss',
      'ERP integration for production order sync and inventory backflush',
      'Automated shift handoff summaries for outgoing supervisors',
    ],
    outcomes: [
      { label: 'Floor visibility', value: 'Supervisors see open exceptions without floor walks for every question' },
      { label: 'Quality closure', value: 'Non-conformances linked to lots, photos, and sign-offs' },
      { label: 'Planner trust', value: 'Inventory signals aligned to completed shop-floor events' },
    ],
    quote:
      'Operators adopted it on the first shift because it matched how work actually moves, not how a consultant imagined it.',
    quoteName: 'Tom Berger',
    quoteRole: 'Plant Operations Director, AxisOps Manufacturing',
    related: ['routewise-control', 'harbor-commerce'],
    visual: 'architecture',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesBySlug(slugs: string[]): CaseStudy[] {
  return slugs.flatMap((slug) => {
    const study = getCaseStudy(slug);
    return study ? [study] : [];
  });
}

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);
