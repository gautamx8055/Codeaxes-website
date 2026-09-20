import type { Industry } from '../types';

export const industries: Industry[] = [
  {
    slug: 'saas-technology',
    name: 'SaaS and Technology',
    summary:
      'Codeaxes builds multi-tenant platforms, admin consoles, and integration layers for product teams shipping under real usage growth, not slide-deck assumptions.',
    challenges: [
      'Tenant isolation, billing, and permission models that must scale without rewriting core architecture.',
      'Feature velocity competing with reliability expectations from enterprise buyers.',
      'Integration sprawl across CRM, identity, analytics, and customer data platforms.',
      'Onboarding flows that must convert trials while exposing the product’s depth.',
      'Operational visibility when incidents span multiple services and third-party dependencies.',
    ],
    solutions: [
      'Multi-tenant service design with clear data boundaries and role-based access from day one.',
      'Admin and customer-facing surfaces that share a coherent design system and API contract.',
      'Event-driven integration patterns with retry, idempotency, and observability built in.',
      'Progressive onboarding that maps activation milestones to product value.',
      'Release pipelines with staged rollouts, feature flags, and rollback paths.',
    ],
    automation: [
      'Workflow engines for provisioning, billing reconciliation, and lifecycle emails.',
      'AI-assisted support triage and knowledge retrieval inside the product.',
      'Automated regression and contract testing across tenant configurations.',
      'Usage anomaly detection to flag churn risk or abuse early.',
    ],
    techApproaches: [
      'Domain-driven service boundaries aligned to billing, identity, and core product modules.',
      'API-first design with versioned contracts and generated client SDKs.',
      'Horizontal scaling on managed cloud with cost-aware autoscaling policies.',
      'Product analytics wired to activation funnels and feature adoption, not vanity counts.',
    ],
    outcomes: [
      'A tenant model that supports new customer segments without schema rewrites.',
      'Shorter path from signed contract to live workspace for enterprise accounts.',
      'Integration catalog that partners can adopt without custom engineering each time.',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    summary:
      'Patient portals, care-ops tools, and clinical-adjacent workflows engineered for auditability, access control, and the pace of regulated environments.',
    challenges: [
      'Balancing clinician efficiency with patient-facing clarity across complex care journeys.',
      'Role-based access that must reflect organizational hierarchy and care-team membership.',
      'Document and message flows that need retention, traceability, and consent awareness.',
      'Legacy EHR and scheduling systems that resist clean API integration.',
      'Release discipline when downtime affects appointments, prescriptions, or billing handoffs.',
    ],
    solutions: [
      'Unified patient and staff experiences with shared identity and permission layers.',
      'FHIR-aware integration adapters where standards apply, with pragmatic fallbacks elsewhere.',
      'Structured intake, triage, and follow-up workflows with explicit state machines.',
      'Audit logs and export tooling designed for compliance review, not bolted on later.',
      'Offline-tolerant mobile flows for field staff and home-care scenarios.',
    ],
    automation: [
      'Appointment reminders, pre-visit questionnaires, and post-visit follow-ups.',
      'Document classification and routing to reduce manual chart review.',
      'Prior-authorization checklist generation from structured clinical inputs.',
      'Operational alerts when wait times, no-shows, or capacity thresholds shift.',
    ],
    compliance:
      'Architecture and delivery practices account for HIPAA-aligned access control, encryption in transit and at rest, business associate agreements, and minimum-necessary data exposure. Final compliance posture depends on your organization’s policies and hosting choices.',
    techApproaches: [
      'Zero-trust access patterns with session management suited to shared clinical workstations.',
      'Immutable audit trails for sensitive reads and writes.',
      'Environment separation for PHI with strict promotion gates between staging and production.',
      'Accessibility-first UI for patients across age ranges and assistive technology.',
    ],
    outcomes: [
      'Care teams spend less time reconciling portals, phone calls, and paper intake.',
      'Patients receive clearer next steps after visits, labs, or referrals.',
      'Operations gain a single view of bottlenecks across scheduling and documentation.',
    ],
  },
  {
    slug: 'fintech',
    name: 'Fintech and Financial Services',
    summary:
      'Onboarding, risk, and money-movement products where every screen maps to a control, every API call leaves an evidence trail, and fraud tolerance is near zero.',
    challenges: [
      'KYC and KYB flows that must feel fast while satisfying layered verification rules.',
      'Reconciliation across payment rails, ledgers, and partner systems with mismatched timing.',
      'Fraud and risk signals that arrive too late if architecture treats them as batch jobs.',
      'Regulatory change that outpaces quarterly release cycles.',
      'Customer trust eroding from opaque fees, failed transfers, or unclear account states.',
    ],
    solutions: [
      'Step-up verification UX that explains delays without exposing internal risk logic.',
      'Double-entry ledger patterns with idempotent transaction processing.',
      'Real-time decision hooks at account creation, transfer, and payout events.',
      'Admin consoles for ops teams to investigate cases with full context.',
      'Customer-facing status pages and notifications tied to actual pipeline states.',
    ],
    automation: [
      'Document verification pipelines with human review queues for edge cases.',
      'Sanctions and watchlist screening integrated into onboarding and ongoing monitoring.',
      'Chargeback and dispute workflows with evidence collection templates.',
      'Reconciliation bots that flag variance before close-of-day reporting.',
    ],
    compliance:
      'Delivery aligns with SOC 2-minded controls, PCI scope reduction where card data is involved, and region-specific KYC/AML expectations. Licensing and regulatory interpretation remain your responsibility; we engineer for evidence and change.',
    techApproaches: [
      'Event-sourced transaction history for reconstructing account state at any point in time.',
      'Secrets and key management isolated from application runtime.',
      'Rate limiting, device fingerprinting hooks, and anomaly scoring at the edge.',
      'Immutable storage for agreements, disclosures, and customer consent artifacts.',
    ],
    outcomes: [
      'Onboarding completes more applicants without sacrificing review quality.',
      'Ops teams resolve exceptions with case timelines instead of spreadsheet hunts.',
      'Customers see transfer and payout status that matches back-office reality.',
    ],
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce and Retail',
    summary:
      'Storefronts, inventory systems, and fulfillment tooling that stay coherent when catalogs swell, channels multiply, and peak seasons stress every integration.',
    challenges: [
      'Inventory accuracy across warehouses, marketplaces, and point-of-sale systems.',
      'Checkout performance and payment reliability under promotional traffic spikes.',
      'Merchandising teams blocked by engineering queues for campaigns and landing pages.',
      'Returns and exchanges that fracture customer experience when systems disagree.',
      'Personalization that must respect consent, catalog constraints, and margin guardrails.',
    ],
    solutions: [
      'Headless or hybrid commerce stacks with a single product and pricing source of truth.',
      'Cart and checkout flows optimized for mobile completion and payment method diversity.',
      'CMS-driven campaign surfaces connected to real-time stock and promo rules.',
      'Order orchestration that routes fulfillment by proximity, SLA, and carrier capacity.',
      'Customer account hubs for orders, subscriptions, and support history.',
    ],
    automation: [
      'Low-stock and oversell prevention alerts tied to replenishment workflows.',
      'Dynamic merchandising rules based on margin, velocity, and segment.',
      'Post-purchase email and SMS sequences keyed to shipment milestones.',
      'Review and UGC moderation queues with sentiment-based prioritization.',
    ],
    techApproaches: [
      'Edge caching and image optimization for catalog-heavy pages.',
      'Search and faceted navigation backed by a maintained product index.',
      'Webhook-driven sync with ERP, WMS, and marketplace listings.',
      'Experimentation framework for pricing, bundles, and checkout variants.',
    ],
    outcomes: [
      'Merchandising launches campaigns without waiting on deploy windows.',
      'Fewer canceled orders caused by stale inventory signals.',
      'Support teams answer “where is my order” from one timeline, not three tools.',
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics and Mobility',
    summary:
      'Routing, dispatch, and exception handling for operators who measure success in minutes saved per stop, not demo screenshots.',
    challenges: [
      'Real-time location and ETA accuracy across drivers, carriers, and weather disruption.',
      'Exception storms when a single hub delay cascades through downstream routes.',
      'Legacy TMS and telematics APIs with inconsistent schemas and rate limits.',
      'Proof-of-delivery and compliance capture in the field under poor connectivity.',
      'Cost pressure to optimize fleet utilization without burning out dispatch teams.',
    ],
    solutions: [
      'Dispatch consoles that surface exceptions first, not paginated noise.',
      'Route optimization with manual override and audit for dispatcher judgment.',
      'Mobile apps built for intermittent connectivity with queued actions.',
      'Integration layers normalizing carrier, GPS, and warehouse events.',
      'Customer and partner portals with SLA-aware status and document access.',
    ],
    automation: [
      'Dynamic re-routing when delays exceed configurable thresholds.',
      'Automated customer notifications tied to geofence and scan events.',
      'Load matching suggestions based on capacity, lane history, and constraints.',
      'Invoice and accessorial charge validation against contracted rate tables.',
    ],
    techApproaches: [
      'Stream processing for location events with deduplication and late-arrival handling.',
      'Map and geospatial services chosen for licensing fit and offline tile strategy.',
      'Role-based views for drivers, dispatchers, hub managers, and finance.',
      'Simulation and replay tools to test routing rule changes before production.',
    ],
    outcomes: [
      'Dispatchers resolve exceptions from a prioritized queue instead of phone tag.',
      'Field teams capture proof-of-delivery even when connectivity drops mid-stop.',
      'Finance sees chargeable events aligned with operational timestamps.',
    ],
  },
  {
    slug: 'education',
    name: 'Education and EdTech',
    summary:
      'Learning platforms, admin tooling, and learner experiences designed for cohort pacing, accessibility, and the long lifecycle of academic content.',
    challenges: [
      'Content authored once but delivered across web, mobile, and LMS integrations.',
      'Instructor workloads stretched by grading, feedback, and engagement tracking.',
      'Learner drop-off when navigation, progress, and motivation signals are unclear.',
      'Rostering and SSO complexity across districts, universities, and corporate L&D.',
      'Accessibility and inclusive design requirements that affect every media type.',
    ],
    solutions: [
      'Modular course builders with versioning and prerequisite graphs.',
      'Learner dashboards that show progress, deadlines, and recommended next actions.',
      'Assessment engines supporting rubrics, proctoring hooks, and integrity signals.',
      'Roster sync via LTI, SCORM, or custom SIS adapters as your stack requires.',
      'Analytics for instructional designers, not just login counts.',
    ],
    automation: [
      'Personalized nudges for incomplete assignments and upcoming assessments.',
      'AI-assisted feedback drafts for instructors to edit before sending.',
      'Plagiarism and similarity checks integrated into submission workflows.',
      'Certificate and credential issuance triggered by completion rules.',
    ],
    compliance:
      'Student data handling follows FERPA-minded minimization, consent where minors are involved, and accessibility standards such as WCAG 2.1 AA as a baseline for new surfaces. District or institutional policies define the final bar.',
    techApproaches: [
      'Offline-capable mobile playback for video and reading materials.',
      'Role separation for students, instructors, admins, and parents or guardians.',
      'Content delivery networks tuned for global cohorts and peak exam windows.',
      'Feature flags to pilot curriculum changes with a subset of sections.',
    ],
    outcomes: [
      'Instructors spend more time on teaching and less on roster and tool friction.',
      'Learners always know what is due next and how it connects to outcomes.',
      'Admins onboard new terms without manual CSV gymnastics.',
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate and PropTech',
    summary:
      'Listing, leasing, and property-operations software that connects brokers, owners, and tenants without duplicating data in every spreadsheet.',
    challenges: [
      'Listing data stale across MLS feeds, marketing sites, and internal CRM.',
      'Lease workflows spanning applications, screening, signatures, and move-in tasks.',
      'Maintenance requests lost between tenant apps, property managers, and vendors.',
      'Investor reporting that pulls from disconnected rent rolls and capex trackers.',
      'Mobile-first expectations from agents working entirely from the field.',
    ],
    solutions: [
      'Listing hubs with syndication rules and media asset management.',
      'Applicant portals with document upload, status tracking, and fair-housing-aware copy.',
      'Work-order systems with vendor assignment, SLA tracking, and tenant communication.',
      'Owner dashboards aggregating occupancy, delinquency, and maintenance spend.',
      'Agent tools for showings, offers, and commission visibility on mobile.',
    ],
    automation: [
      'Lead routing by territory, price band, and agent availability.',
      'Rent reminder and late-fee workflows with jurisdictional rule templates.',
      'Inspection scheduling and photo capture checklists for turn units.',
      'Market comp summaries to support pricing conversations, not as appraisals.',
    ],
    techApproaches: [
      'Geospatial search with boundary filters and commute-time overlays.',
      'E-signature and document vault integration with tamper-evident storage.',
      'Multi-party permission models for owners, managers, tenants, and vendors.',
      'Reporting pipelines that reconcile CRM, accounting, and property management data.',
    ],
    outcomes: [
      'Marketing sites reflect inventory that matches what leasing teams see internally.',
      'Tenants submit and track maintenance without phone-tree loops.',
      'Owners review portfolio health from one dashboard instead of monthly PDF packs.',
    ],
  },
  {
    slug: 'media',
    name: 'Media and Marketing',
    summary:
      'Publishing stacks, campaign tooling, and audience products where speed to publish meets brand governance and measurable engagement, not vanity dashboards.',
    challenges: [
      'Editorial teams blocked by rigid CMS templates and developer-dependent launches.',
      'Asset libraries that grow faster than metadata and rights tracking can keep up.',
      'Campaign personalization at odds with consent, frequency caps, and channel fatigue.',
      'Attribution models that disagree across ad platforms, CRM, and analytics.',
      'Peak traffic during launches, elections, or live events without graceful degradation.',
    ],
    solutions: [
      'Composable CMS with workflow, preview, and scheduled publishing.',
      'DAM integration with usage rights, expirations, and crop presets for channels.',
      'Audience segmentation fed by first-party data and clean room handoffs where needed.',
      'Unified campaign calendars linking creative, landing pages, and measurement tags.',
      'Edge and CDN strategies for media-heavy pages and streaming adjacency.',
    ],
    automation: [
      'Content recommendation and related-article modules with editorial override.',
      'Creative variant generation for headlines and summaries, with human approval gates.',
      'Social and newsletter assembly from published pieces with UTM discipline.',
      'Anomaly alerts when traffic, conversion, or ad spend deviates from baseline.',
    ],
    techApproaches: [
      'Static and incremental regeneration for read-heavy publishing at scale.',
      'Design systems that enforce brand tokens across web, email, and app surfaces.',
      'Tag management and event schemas agreed before campaigns go live.',
      'Role-based publishing with separation between draft, review, and live states.',
    ],
    outcomes: [
      'Editors ship packages and special sections without engineering tickets.',
      'Creative and growth teams share one definition of audience and conversion events.',
      'Sites remain responsive when stories break and traffic spikes arrive together.',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing and Enterprise Operations',
    summary:
      'Plant-floor visibility, quality workflows, and enterprise integrations for operators who need systems that survive shift changes, not pilot demos that never reach production.',
    challenges: [
      'OT and IT networks with different ownership, latency, and security postures.',
      'Work instructions and quality checks still trapped in paper and tribal knowledge.',
      'ERP, MES, and warehouse systems that disagree on inventory and order status.',
      'Downtime costing minutes of production with unclear root-cause data.',
      'Global rollouts constrained by site-specific equipment and regulatory variations.',
    ],
    solutions: [
      'Operator tablets and kiosks for work orders, scans, and exception capture.',
      'Quality modules with sampling plans, non-conformance routing, and traceability.',
      'Integration middleware translating shop-floor events into ERP-ready transactions.',
      'Supervisor dashboards for OEE, scrap, and line-changeover tracking.',
      'Configurable workflows per site while sharing a common platform core.',
    ],
    automation: [
      'Andon-style alerts when thresholds for temperature, vibration, or cycle time breach.',
      'Preventive maintenance schedules driven by runtime counters and sensor feeds.',
      'Barcode and RFID validation at receiving, WIP, and shipping stations.',
      'Shift handoff summaries generated from completed orders and open exceptions.',
    ],
    techApproaches: [
      'Edge gateways buffering telemetry when plant connectivity is intermittent.',
      'Role-based access separating floor operators, engineers, and corporate analytics.',
      'Batch and serial traceability linking suppliers, batches, and customer shipments.',
      'Staging environments that mirror production equipment profiles for UAT.',
    ],
    outcomes: [
      'Supervisors see line status and open issues without walking the floor for every answer.',
      'Quality teams close non-conformances with photos, signatures, and linked lots.',
      'Planners trust inventory and order promise dates that match shop-floor reality.',
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
